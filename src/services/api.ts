import { FabricProduct, StoreSettings } from '../types';
import { compressImage } from '../utils/imageCompressor';

/**
 * Upload an image file or base64 data.
 * Produces a high-quality, lightweight compressed data URL (~35KB-50KB)
 * that is 100% self-contained and universally renders everywhere:
 * on Vercel, Netlify, mobile phones, iPads, laptops, and across all hosted domains.
 */
export async function uploadImageToServer(
  fileOrBase64: File | string,
  nameHint: string = 'product'
): Promise<string> {
  // If it's already a clean static asset path, keep it
  if (typeof fileOrBase64 === 'string' && !fileOrBase64.startsWith('data:image')) {
    return fileOrBase64;
  }

  // 1. Compress immediately to a crisp, lightweight 800px JPEG (~30KB-50KB)
  const compressedDataUrl = await compressImage(fileOrBase64, 800, 0.75);

  // 2. Also mirror to full-stack server backend if running in this environment (skip on static hosts like Vercel)
  if (typeof window !== 'undefined' && !window.location.hostname.includes('vercel.app')) {
    try {
      fetch('/api/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          image: compressedDataUrl,
          name: nameHint,
        }),
      }).catch(() => {});
    } catch {}
  }

  return compressedDataUrl;
}

/**
 * Fetch the latest products list from the server backend.
 * Gracefully skipped on static hosting environments like Vercel.
 */
export async function fetchProductsFromServer(): Promise<FabricProduct[] | null> {
  if (typeof window !== 'undefined' && window.location.hostname.includes('vercel.app')) {
    return null;
  }

  try {
    const res = await fetch('/api/products');
    const contentType = res.headers.get('content-type') || '';
    if (res.ok && contentType.includes('application/json')) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return data as FabricProduct[];
      }
    }
  } catch {
    // Graceful fallback
  }
  return null;
}

/**
 * Save or update a product on the server.
 */
export async function saveProductToServer(product: FabricProduct): Promise<boolean> {
  if (typeof window !== 'undefined' && window.location.hostname.includes('vercel.app')) {
    return true;
  }

  try {
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    return res.ok;
  } catch {
    return false;
  }
}

/**
 * Delete a product from the server.
 */
export async function deleteProductFromServer(id: string): Promise<boolean> {
  if (typeof window !== 'undefined' && window.location.hostname.includes('vercel.app')) {
    return true;
  }

  try {
    const res = await fetch(`/api/products/${encodeURIComponent(id)}`, {
      method: 'DELETE',
    });
    return res.ok;
  } catch {
    return false;
  }
}

/**
 * Save store settings to the server.
 */
export async function saveSettingsToServer(settings: StoreSettings): Promise<boolean> {
  if (typeof window !== 'undefined' && window.location.hostname.includes('vercel.app')) {
    return true;
  }

  try {
    const res = await fetch('/api/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settings),
    });
    return res.ok;
  } catch {
    return false;
  }
}

/**
 * Set up real-time live synchronization using Server-Sent Events (SSE)
 * with graceful polling fallback when full-stack server is present.
 * Disabled on static hosts like Vercel where Cloud Firestore provides real-time updates.
 */
export function subscribeToLiveSync(
  onProductsUpdate: (products: FabricProduct[]) => void,
  onSettingsUpdate?: (settings: StoreSettings) => void
): () => void {
  // If running on static host (e.g. Vercel), Cloud Firestore handles real-time updates
  if (typeof window !== 'undefined' && window.location.hostname.includes('vercel.app')) {
    return () => {};
  }

  let eventSource: EventSource | null = null;
  let pollInterval: any = null;

  try {
    if (typeof window !== 'undefined' && 'EventSource' in window) {
      eventSource = new EventSource('/api/live-sync');

      eventSource.addEventListener('products', (event) => {
        try {
          const prods = JSON.parse(event.data);
          if (Array.isArray(prods)) {
            onProductsUpdate(prods);
          }
        } catch {}
      });

      eventSource.addEventListener('settings', (event) => {
        try {
          const s = JSON.parse(event.data);
          if (s && onSettingsUpdate) {
            onSettingsUpdate(s);
          }
        } catch {}
      });

      eventSource.onerror = () => {
        // SSE disconnected, polling fallback handles it
      };
    }
  } catch {}

  // Polling fallback only when on server-supported environment
  pollInterval = setInterval(async () => {
    const prods = await fetchProductsFromServer();
    if (prods && prods.length > 0) {
      onProductsUpdate(prods);
    }
  }, 15000);

  return () => {
    if (eventSource) {
      eventSource.close();
    }
    if (pollInterval) {
      clearInterval(pollInterval);
    }
  };
}
