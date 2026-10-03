import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const isProduction = process.env.NODE_ENV === 'production';

// Ensure required data and uploads directories exist
const uploadsDir = path.resolve(__dirname, 'public/uploads');
const dataDir = path.resolve(__dirname, 'data');
fs.mkdirSync(uploadsDir, { recursive: true });
fs.mkdirSync(dataDir, { recursive: true });

// Increase JSON payload limit to handle direct high-res photo uploads (up to 50MB)
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Serve uploaded images statically
app.use('/uploads', express.static(uploadsDir, { maxAge: '30d' }));
if (fs.existsSync(path.resolve(__dirname, 'dist/uploads'))) {
  app.use('/uploads', express.static(path.resolve(__dirname, 'dist/uploads'), { maxAge: '30d' }));
}

// SSE (Server-Sent Events) clients for real-time live synchronization across all devices
type SSEClient = express.Response;
const sseClients = new Set<SSEClient>();

function broadcastUpdate(type: string, data: any) {
  const message = `event: ${type}\ndata: ${JSON.stringify(data)}\n\n`;
  for (const client of sseClients) {
    try {
      client.write(message);
    } catch {
      sseClients.delete(client);
    }
  }
}

// Helper: load products from disk
function getStoredProducts(): any[] {
  const pPath = path.resolve(dataDir, 'products.json');
  if (fs.existsSync(pPath)) {
    try {
      return JSON.parse(fs.readFileSync(pPath, 'utf8'));
    } catch (e) {
      console.error('Error reading products.json:', e);
    }
  }
  return [];
}

// Helper: save products to disk
function saveStoredProducts(products: any[]) {
  const pPath = path.resolve(dataDir, 'products.json');
  fs.writeFileSync(pPath, JSON.stringify(products, null, 2), 'utf8');
}

// Helper: load settings from disk
function getStoredSettings(): any {
  const sPath = path.resolve(dataDir, 'settings.json');
  if (fs.existsSync(sPath)) {
    try {
      return JSON.parse(fs.readFileSync(sPath, 'utf8'));
    } catch (e) {
      console.error('Error reading settings.json:', e);
    }
  }
  return null;
}

// Helper: save settings to disk
function saveStoredSettings(settings: any) {
  const sPath = path.resolve(dataDir, 'settings.json');
  fs.writeFileSync(sPath, JSON.stringify(settings, null, 2), 'utf8');
}

// ==========================================
// API ROUTES
// ==========================================

// 1. Upload Image Endpoint - Receives image data URL or raw buffer and saves persistent web file
app.post('/api/upload', async (req, res) => {
  try {
    const { image, name } = req.body;
    if (!image || typeof image !== 'string') {
      return res.status(400).json({ error: 'Missing image string or base64 data' });
    }

    // Strip header if data URI (e.g. data:image/jpeg;base64,...)
    const base64Data = image.replace(/^data:[^;]+;base64,/, '').trim();
    const buffer = Buffer.from(base64Data, 'base64');

    // Clean filename
    const timestamp = Date.now();
    const randomSuffix = Math.floor(Math.random() * 10000);
    const safeName = (name || 'product')
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .slice(0, 30);
    const fileName = `img-${timestamp}-${safeName || randomSuffix}.jpg`;
    const targetPath = path.resolve(uploadsDir, fileName);

    // Optimize and compress using sharp, with raw buffer fallback
    try {
      await sharp(buffer)
        .resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 84, progressive: true })
        .toFile(targetPath);
    } catch (sharpErr) {
      console.warn('Sharp optimization warning, writing buffer directly:', sharpErr);
      fs.writeFileSync(targetPath, buffer);
    }

    // Also mirror to dist/uploads if dist exists (so production builds have immediate access)
    const distUploads = path.resolve(__dirname, 'dist/uploads');
    if (fs.existsSync(distUploads)) {
      try {
        fs.copyFileSync(targetPath, path.resolve(distUploads, fileName));
      } catch {}
    }

    const publicUrl = `/uploads/${fileName}`;
    console.log(`[Upload] Image saved: ${publicUrl} (${fs.statSync(targetPath).size} bytes)`);

    return res.json({
      success: true,
      url: publicUrl,
      fileName,
    });
  } catch (error: any) {
    console.error('Image upload processing failed:', error);
    return res.status(500).json({ error: error.message || 'Image processing failed' });
  }
});

// 2. Products API
app.get('/api/products', (req, res) => {
  const products = getStoredProducts();
  res.json(products);
});

app.post('/api/products', (req, res) => {
  try {
    const product = req.body;
    if (!product || !product.id || !product.name) {
      return res.status(400).json({ error: 'Product must have id and name' });
    }

    const products = getStoredProducts();
    const idx = products.findIndex((p: any) => p.id === product.id);
    if (idx > -1) {
      products[idx] = product;
    } else {
      products.unshift(product);
    }

    saveStoredProducts(products);
    broadcastUpdate('products', products);

    console.log(`[Product] Saved "${product.name}" (#${product.id}). Total products: ${products.length}`);
    return res.json({ success: true, product, total: products.length });
  } catch (error: any) {
    console.error('Failed to save product:', error);
    return res.status(500).json({ error: error.message });
  }
});

app.delete('/api/products/:id', (req, res) => {
  try {
    const id = req.params.id;
    let products = getStoredProducts();
    products = products.filter((p: any) => p.id !== id);

    saveStoredProducts(products);
    broadcastUpdate('products', products);

    console.log(`[Product] Deleted product #${id}. Total products: ${products.length}`);
    return res.json({ success: true, id, total: products.length });
  } catch (error: any) {
    console.error('Failed to delete product:', error);
    return res.status(500).json({ error: error.message });
  }
});

// 3. Settings API
app.get('/api/settings', (req, res) => {
  const settings = getStoredSettings();
  res.json(settings);
});

app.post('/api/settings', (req, res) => {
  try {
    const settings = req.body;
    saveStoredSettings(settings);
    broadcastUpdate('settings', settings);
    return res.json({ success: true, settings });
  } catch (error: any) {
    console.error('Failed to save settings:', error);
    return res.status(500).json({ error: error.message });
  }
});

// 4. Real-time Live Sync (SSE)
app.get('/api/live-sync', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');
  res.flushHeaders();

  sseClients.add(res);

  // Send initial ping
  res.write(`event: ping\ndata: ${Date.now()}\n\n`);

  req.on('close', () => {
    sseClients.delete(res);
  });
});

// ==========================================
// VITE DEV SERVER OR STATIC PRODUCTION BUILD
// ==========================================
async function startServer() {
  if (!isProduction) {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== 'true',
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production: serve built static files from dist
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT} (${isProduction ? 'production' : 'development'})`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
