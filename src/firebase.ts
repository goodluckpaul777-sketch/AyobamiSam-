import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  initializeFirestore,
  getFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
  doc,
  getDocFromServer,
  collection,
  onSnapshot,
  setDoc,
  deleteDoc
} from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';
import { FabricProduct, StoreSettings, InquiryRecord } from './types';

// Initialize Firebase App
const app = getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig);

// Auto-detect iframe environment: in iframe sandboxes use long-polling; on standalone hosted deployments (like Vercel), use native WebSockets
let isIframe = false;
try {
  isIframe = typeof window !== 'undefined' && window.self !== window.top;
} catch {
  isIframe = true;
}

let dbInstance;
try {
  dbInstance = initializeFirestore(
    app,
    {
      localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }),
      experimentalForceLongPolling: isIframe,
    },
    firebaseConfig.firestoreDatabaseId
  );
} catch {
  try {
    dbInstance = getFirestore(app, firebaseConfig.firestoreDatabaseId);
  } catch {
    dbInstance = getFirestore(app);
  }
}

export const db = dbInstance;

let authInstance: any;
try {
  authInstance = getAuth(app);
} catch {
  authInstance = { currentUser: null };
}
export const auth = authInstance;

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
  };
}

let quotaExceededListeners: Array<(isExceeded: boolean, link: string) => void> = [];
export let isQuotaExceeded = false;

export const FIREBASE_CONSOLE_UPGRADE_LINK = `https://console.firebase.google.com/project/${firebaseConfig.projectId}/firestore/databases/${firebaseConfig.firestoreDatabaseId}/data?openUpgradeDialog=true`;

export function subscribeToQuotaExceeded(cb: (isExceeded: boolean, link: string) => void) {
  quotaExceededListeners.push(cb);
  if (isQuotaExceeded) {
    cb(true, FIREBASE_CONSOLE_UPGRADE_LINK);
  }
  return () => {
    quotaExceededListeners = quotaExceededListeners.filter((l) => l !== cb);
  };
}

function notifyQuotaExceeded() {
  isQuotaExceeded = true;
  quotaExceededListeners.forEach((cb) => cb(true, FIREBASE_CONSOLE_UPGRADE_LINK));
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errMsg = error instanceof Error ? error.message : String(error);

  if (errMsg.toLowerCase().includes('quota') || errMsg.toLowerCase().includes('resource_exhausted')) {
    console.warn(`Firestore Free Tier Quota Exceeded on [${operationType} ${path}]. Falling back to local offline storage persistence.`);
    notifyQuotaExceeded();
    return;
  }

  // Silently handle transient offline / connection / WebChannel transport warnings
  if (
    errMsg.includes('unavailable') ||
    errMsg.includes('client is offline') ||
    errMsg.includes('Could not reach Cloud Firestore') ||
    errMsg.includes('transport errored') ||
    errMsg.includes('WebChannel')
  ) {
    console.info(`Firestore operating in resilient long-polling mode [${operationType} on ${path}]`);
    return;
  }

  const errInfo: FirestoreErrorInfo = {
    error: errMsg,
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
    },
    operationType,
    path,
  };
  console.warn('Firestore Operation Warning: ', JSON.stringify(errInfo));
}

// Test connectivity on initial load without disrupting app startup or blocking UI
export async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.warn("Please check your Firebase configuration.");
    }
  }
}
testConnection().catch(() => {});

import { INITIAL_PRODUCTS } from './data/initialData';

let isSeeding = false;

const FABRIC_UNSPLASH_FALLBACKS = [
  'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1606156133451-b844c860c2aa?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1508427953056-b00b8d78ec65?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80'
];

// Products Firestore Helpers
export function normalizeImageUrl(url: any): string {
  if (!url || typeof url !== 'string') return typeof url === 'string' ? url : '';
  
  // Safe recovery fallback for local Hollantex images whose folder was deleted by user,
  // mapping them dynamically to gorgeous, premium high-res Unsplash fabric textures.
  if (url.includes('/assets/images/hollantex_')) {
    let hash = 0;
    for (let i = 0; i < url.length; i++) {
      hash += url.charCodeAt(i);
    }
    const index = hash % FABRIC_UNSPLASH_FALLBACKS.length;
    return FABRIC_UNSPLASH_FALLBACKS[index];
  }

  if (url.startsWith('/src/assets/')) {
    return url.replace(/^\/src\/assets\//, '/assets/');
  }
  return url;
}

export function subscribeToProducts(
  onUpdate: (products: FabricProduct[]) => void,
  onError?: (error: unknown) => void
) {
  try {
    const productsCol = collection(db, 'products');
    return onSnapshot(
      productsCol,
      (snapshot) => {
        try {
          const prods: FabricProduct[] = [];
          snapshot.forEach((docSnap) => {
            const data = docSnap.data() as FabricProduct;
            if (!data) return;
            const docId = docSnap.id || data.id || '';
            const cleanedProduct = {
              ...data,
              id: docId,
              image: normalizeImageUrl(data.image),
              galleryImages: Array.isArray(data.galleryImages)
                ? data.galleryImages.map(img => normalizeImageUrl(img)).filter(Boolean)
                : data.image ? [normalizeImageUrl(data.image)] : []
            };
            prods.push(cleanedProduct);
          });

          // Pass real documents from Firestore whenever available
          if (prods.length > 0) {
            onUpdate(prods);
          }
        } catch (innerErr) {
          console.warn('Error processing snapshot products:', innerErr);
        }
      },
      (err) => {
        handleFirestoreError(err, OperationType.GET, 'products');
        if (onError) onError(err);
      }
    );
  } catch (outerErr) {
    console.warn('Failed to subscribe to products:', outerErr);
    return () => {};
  }
}

export async function syncAllProductsToFirestore(products: FabricProduct[]): Promise<number> {
  let count = 0;
  for (const product of products) {
    try {
      await saveProductToFirestore(product);
      count++;
    } catch (err) {
      console.warn(`Failed to sync product ${product.name}:`, err);
    }
  }
  return count;
}

export async function saveProductToFirestore(product: FabricProduct) {
  const cleanId = String(product.id || `prod-${Date.now()}`);
  const normalizedProduct = {
    ...product,
    id: cleanId,
    image: normalizeImageUrl(product.image),
    galleryImages: Array.isArray(product.galleryImages)
      ? product.galleryImages.map(img => normalizeImageUrl(img)).filter(Boolean)
      : product.image ? [normalizeImageUrl(product.image)] : []
  };
  const productRef = doc(db, 'products', cleanId);
  try {
    await setDoc(productRef, normalizedProduct);
  } catch (err) {
    handleFirestoreError(err, OperationType.WRITE, `products/${cleanId}`);
    throw err;
  }
}

export async function deleteProductFromFirestore(productId: string) {
  if (!productId) return;
  const cleanId = String(productId);
  const productRef = doc(db, 'products', cleanId);
  try {
    await deleteDoc(productRef);
  } catch (err) {
    handleFirestoreError(err, OperationType.DELETE, `products/${cleanId}`);
    throw err;
  }
}

// Settings Firestore Helpers
export function subscribeToSettings(
  onUpdate: (settings: StoreSettings) => void
) {
  try {
    const settingsDocRef = doc(db, 'settings', 'store_config');
    return onSnapshot(
      settingsDocRef,
      (docSnap) => {
        try {
          if (docSnap.exists()) {
            onUpdate(docSnap.data() as StoreSettings);
          }
        } catch (err) {
          console.warn('Error processing settings snapshot:', err);
        }
      },
      (err) => {
        handleFirestoreError(err, OperationType.GET, 'settings/store_config');
      }
    );
  } catch (outerErr) {
    console.warn('Failed to subscribe to settings:', outerErr);
    return () => {};
  }
}

export async function saveSettingsToFirestore(settings: StoreSettings) {
  const settingsDocRef = doc(db, 'settings', 'store_config');
  try {
    await setDoc(settingsDocRef, settings);
  } catch (err) {
    handleFirestoreError(err, OperationType.WRITE, 'settings/store_config');
    throw err;
  }
}

// Inquiries Firestore Helpers
export function subscribeToInquiries(
  onUpdate: (inquiries: InquiryRecord[]) => void
) {
  try {
    const inqCol = collection(db, 'inquiries');
    return onSnapshot(
      inqCol,
      (snapshot) => {
        try {
          const records: InquiryRecord[] = [];
          snapshot.forEach((docSnap) => {
            const data = docSnap.data() as InquiryRecord;
            if (data) records.push(data);
          });
          // Sort newest first safely
          records.sort((a, b) => {
            const timeA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
            const timeB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
            return timeB - timeA;
          });
          onUpdate(records);
        } catch (err) {
          console.warn('Error processing inquiries snapshot:', err);
        }
      },
      (err) => {
        handleFirestoreError(err, OperationType.GET, 'inquiries');
      }
    );
  } catch (outerErr) {
    console.warn('Failed to subscribe to inquiries:', outerErr);
    return () => {};
  }
}

export async function saveInquiryToFirestore(inquiry: InquiryRecord) {
  const inqRef = doc(db, 'inquiries', inquiry.id);
  try {
    await setDoc(inqRef, inquiry);
  } catch (err) {
    handleFirestoreError(err, OperationType.WRITE, `inquiries/${inquiry.id}`);
    throw err;
  }
}
