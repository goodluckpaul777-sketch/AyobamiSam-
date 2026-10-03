import { FabricProduct, StoreSettings } from '../types';
import { compressImage } from '../utils/imageCompressor';

/**
 * Upload an image file or base64 data to the server backend.
 * Returns a permanent static web URL (e.g. "/uploads/img-1727932800-fabric.jpg")
 * which is accessible across all devices, browsers, and visitors viewing the website.
 * Falls back to high-compression base64 data URL if the server is unreachable.
 */
export async function uploadImageToServer(
  fileOrBase64: File | string,
  nameHint: string = 'product'
): Promise<string> {
  let base64String = '';

  if (typeof fileOrBase64 === 'string') {
    // If it's already a hosted or relative URL, return as-is
    if (!fileOrBase64.startsWith('data:image')) {
      return fileOrBase64;
    }
    base64String = fileOrBase64;
  } else {
    // Read file as data URL
    base64String = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(fileOrBase64);
    });
  }

  // Attempt server upload
  try {
    const res = await fetch('/api/upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        image: base64String,
        name: nameHint,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data && data.url) {
        return data.url;
      }
    }
  } catch (err) {
    console.warn('[Upload] Server upload API unavailable, falling back to client compression:', err);
  }

  // Resilient fallback: compress to lightweight base64 so it still stores in Firestore & localStorage
  return compressImage(base64String, 900, 0.78);
}

/**
 * Fetch the latest products list from the server backend.
 */
export async function fetchProductsFromServer(): Promise<FabricProduct[] | null> {
  try {
    const res = await fetch('/api/products');
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return data as FabricProduct[];
      }
    }
  } catch (err) {
    console.warn('[API] Could not fetch products from server:', err);
  }
  return null;
}

/**
 * Save or update a product on the server.
 */
export async function saveProductToServer(product: FabricProduct): Promise<boolean> {
  try {
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    return res.ok;
  } catch (err) {
    console.warn('[API] Failed to save product to server:', err);
    return false;
  }
}

/**
 * Delete a product from the server.
 */
export async function deleteProductFromServer(id: string): Promise<boolean> {
  try {
    const res = await fetch(`/api/products/${encodeURIComponent(id)}`, {
      method: 'DELETE',
    });
    return res.ok;
  } catch (err) {
    console.warn('[API] Failed to delete product from server:', err);
    return false;
  }
}

/**
 * Save store settings to the server.
 */
export async function saveSettingsToServer(settings: StoreSettings): Promise<boolean> {
  try {
    const res = await fetch('/api/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settings),
    });
    return res.ok;
  } catch (err) {
    console.warn('[API] Failed to save settings to server:', err);
    return false;
  }
}

/**
 * Set up real-time live synchronization using Server-Sent Events (SSE)
 * with graceful polling fallback so any uploaded image or product reflects everywhere immediately.
 */
export function subscribeToLiveSync(
  onProductsUpdate: (products: FabricProduct[]) => void,
  onSettingsUpdate?: (settings: StoreSettings) => void
): () => void {
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
        } catch (e) {
          console.error('[LiveSync] Error parsing products SSE data:', e);
        }
      });

      eventSource.addEventListener('settings', (event) => {
        try {
          const s = JSON.parse(event.data);
          if (s && onSettingsUpdate) {
            onSettingsUpdate(s);
          }
        } catch (e) {
          console.error('[LiveSync] Error parsing settings SSE data:', e);
        }
      });

      eventSource.onerror = () => {
        // SSE disconnected, polling fallback handles it
      };
    }
  } catch (e) {
    console.warn('[LiveSync] SSE setup failed, using polling fallback');
  }

  // Backup polling every 15 seconds to ensure changes always propagate everywhere
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
