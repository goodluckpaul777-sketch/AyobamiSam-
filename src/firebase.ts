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

// Initialize Firestore with persistent local cache and forced long-polling for iframe / sandboxed preview environments
let dbInstance;
try {
  dbInstance = initializeFirestore(
    app,
    {
      localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }),
      experimentalForceLongPolling: true,
    },
    firebaseConfig.firestoreDatabaseId
  );
} catch {
  dbInstance = getFirestore(app, firebaseConfig.firestoreDatabaseId);
}

export const db = dbInstance;
export const auth = getAuth(app);

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

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errMsg = error instanceof Error ? error.message : String(error);
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
    const connPromise = getDocFromServer(doc(db, 'test', 'connection'));
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('connection timeout')), 2000)
    );
    await Promise.race([connPromise, timeoutPromise]);
  } catch {
    console.info('Firestore initialized with resilient offline cache fallback.');
  }
}
testConnection();

import { INITIAL_PRODUCTS } from './data/initialData';

let isSeeding = false;

// Products Firestore Helpers
export function subscribeToProducts(
  onUpdate: (products: FabricProduct[]) => void,
  onError?: (error: unknown) => void
) {
  const productsCol = collection(db, 'products');
  return onSnapshot(
    productsCol,
    (snapshot) => {
      const prods: FabricProduct[] = [];
      snapshot.forEach((docSnap) => {
        const data = docSnap.data() as FabricProduct;
        const docId = docSnap.id || data.id || '';
        prods.push({ ...data, id: docId });
      });

      if (prods.length > 0) {
        onUpdate(prods);
      } else {
        onUpdate(INITIAL_PRODUCTS);
      }
    },
    (err) => {
      handleFirestoreError(err, OperationType.GET, 'products');
      if (onError) onError(err);
    }
  );
}

export async function saveProductToFirestore(product: FabricProduct) {
  const cleanId = String(product.id || `prod-${Date.now()}`);
  const productToSave = { ...product, id: cleanId };
  const productRef = doc(db, 'products', cleanId);
  try {
    await setDoc(productRef, productToSave);
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
  const settingsDocRef = doc(db, 'settings', 'store_config');
  return onSnapshot(
    settingsDocRef,
    (docSnap) => {
      if (docSnap.exists()) {
        onUpdate(docSnap.data() as StoreSettings);
      }
    },
    (err) => {
      handleFirestoreError(err, OperationType.GET, 'settings/store_config');
    }
  );
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
  const inqCol = collection(db, 'inquiries');
  return onSnapshot(
    inqCol,
    (snapshot) => {
      const records: InquiryRecord[] = [];
      snapshot.forEach((docSnap) => {
        records.push(docSnap.data() as InquiryRecord);
      });
      // Sort newest first
      records.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      onUpdate(records);
    },
    (err) => {
      handleFirestoreError(err, OperationType.GET, 'inquiries');
    }
  );
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
