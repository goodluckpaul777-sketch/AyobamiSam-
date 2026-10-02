import { FabricProduct, StoreSettings, InquiryRecord } from '../types';
import { INITIAL_PRODUCTS, INITIAL_STORE_SETTINGS } from '../data/initialData';

// Persistent local/cloud database synchronization service
export const auth = {
  currentUser: null
};

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

// Custom Event dispatcher to sync live subscriptions across components in real-time
const DB_UPDATE_EVENT = 'asv_local_db_update';
function notifyListeners() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(DB_UPDATE_EVENT));
  }
}

const FABRIC_UNSPLASH_FALLBACKS = [
  'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1606156133451-b844c860c2aa?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1508427953056-b00b8d78ec65?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80'
];

export function normalizeImageUrl(url: any): string {
  if (!url || typeof url !== 'string') return typeof url === 'string' ? url : '';
  if (url.includes('hollantex')) {
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

// -----------------------------------------------------
// PRODUCTS STORAGE & REAL-TIME SUBSCRIPTION
// -----------------------------------------------------
const PRODUCTS_KEY = 'asv_products_offline';

// Force-wipe all database collections on script load to guarantee a 100% clean state
if (typeof window !== 'undefined') {
  localStorage.removeItem('asv_products_offline');
  localStorage.removeItem('asv_inquiries_offline');
  localStorage.removeItem('asv_products');
  localStorage.removeItem('asv_settings_');
  localStorage.removeItem('asv_cart_v1');
  localStorage.removeItem('asv_orders_v1');
}

function loadProductsFromStorage(): FabricProduct[] {
  try {
    const data = localStorage.getItem(PRODUCTS_KEY);
    if (data) {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Failed to load local products:', e);
  }
  // Initialize with initial empty products array
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify([]));
  return [];
}

export function subscribeToProducts(
  onUpdate: (products: FabricProduct[]) => void,
  _onError?: (error: unknown) => void
) {
  // Push initial data
  onUpdate(loadProductsFromStorage());

  const handleUpdate = () => {
    onUpdate(loadProductsFromStorage());
  };

  if (typeof window !== 'undefined') {
    window.addEventListener(DB_UPDATE_EVENT, handleUpdate);
  }

  return () => {
    if (typeof window !== 'undefined') {
      window.removeEventListener(DB_UPDATE_EVENT, handleUpdate);
    }
  };
}

export async function saveProductToDatabase(product: FabricProduct) {
  const current = loadProductsFromStorage();
  const cleanId = String(product.id || `prod-${Date.now()}`);
  const normalized = {
    ...product,
    id: cleanId,
    image: normalizeImageUrl(product.image),
    galleryImages: Array.isArray(product.galleryImages)
      ? product.galleryImages.map(img => normalizeImageUrl(img)).filter(Boolean)
      : product.image ? [normalizeImageUrl(product.image)] : []
  };

  const index = current.findIndex(p => p.id === cleanId);
  if (index >= 0) {
    current[index] = normalized;
  } else {
    current.push(normalized);
  }

  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(current));
  notifyListeners();
}

export async function deleteProductFromDatabase(productId: string) {
  if (!productId) return;
  const current = loadProductsFromStorage();
  const filtered = current.filter(p => p.id !== productId);
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(filtered));
  notifyListeners();
}

export async function syncAllProductsToDatabase(products: FabricProduct[]): Promise<number> {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
  notifyListeners();
  return products.length;
}

// -----------------------------------------------------
// SETTINGS STORAGE & REAL-TIME SUBSCRIPTION
// -----------------------------------------------------
const SETTINGS_KEY = 'asv_settings_offline';

function loadSettingsFromStorage(): StoreSettings {
  try {
    const data = localStorage.getItem(SETTINGS_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch {}
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(INITIAL_STORE_SETTINGS));
  return INITIAL_STORE_SETTINGS;
}

export function subscribeToSettings(onUpdate: (settings: StoreSettings) => void) {
  onUpdate(loadSettingsFromStorage());

  const handleUpdate = () => {
    onUpdate(loadSettingsFromStorage());
  };

  if (typeof window !== 'undefined') {
    window.addEventListener(DB_UPDATE_EVENT, handleUpdate);
  }

  return () => {
    if (typeof window !== 'undefined') {
      window.removeEventListener(DB_UPDATE_EVENT, handleUpdate);
    }
  };
}

export async function saveSettingsToDatabase(settings: StoreSettings) {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  notifyListeners();
}

// -----------------------------------------------------
// INQUIRIES STORAGE & REAL-TIME SUBSCRIPTION
// -----------------------------------------------------
const INQUIRIES_KEY = 'asv_inquiries_offline';

function loadInquiriesFromStorage(): InquiryRecord[] {
  try {
    const data = localStorage.getItem(INQUIRIES_KEY);
    if (data) {
      const parsed = JSON.parse(data);
      return Array.isArray(parsed) ? parsed : [];
    }
  } catch {}
  return [];
}

export function subscribeToInquiries(onUpdate: (inquiries: InquiryRecord[]) => void) {
  onUpdate(loadInquiriesFromStorage());

  const handleUpdate = () => {
    onUpdate(loadInquiriesFromStorage());
  };

  if (typeof window !== 'undefined') {
    window.addEventListener(DB_UPDATE_EVENT, handleUpdate);
  }

  return () => {
    if (typeof window !== 'undefined') {
      window.removeEventListener(DB_UPDATE_EVENT, handleUpdate);
    }
  };
}

export async function saveInquiryToDatabase(inquiry: InquiryRecord) {
  const current = loadInquiriesFromStorage();
  current.push(inquiry);
  current.sort((a, b) => {
    const timeA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const timeB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
    return timeB - timeA;
  });
  localStorage.setItem(INQUIRIES_KEY, JSON.stringify(current));
  notifyListeners();
}

// Quota Exceeded Subscription (always false since we are completely local)
export function subscribeToQuotaExceeded(cb: (isExceeded: boolean, link: string) => void) {
  cb(false, '');
  return () => {};
}
