// Service Worker for Whitecliffe Student Hub PWA
// Cache-first strategy for static assets, network-first for dynamic content

const CACHE_NAME = 'whitecliffe-hub-v1.0.0';
const OFFLINE_PAGE = '/offline.html';

// Static assets to cache (cache-first strategy)
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/app.js',
  '/style.css',
  '/manifest.webmanifest',
  '/offline.html',
  // Add icon paths when icons are created
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  // Common fonts and external resources
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// Dynamic content patterns (network-first strategy)
const DYNAMIC_PATTERNS = [
  /\/api\//,
  /whitecliffe\.instructure\.com/,
  /outlook\.office\.com/,
  /library\.mywhitecliffe\.com/,
  /tryhackme\.com/,
  /github\.com/,
  /overleaf\.com/
];

// Runtime cache configurations
const RUNTIME_CACHES = {
  images: 'whitecliffe-hub-images-v1',
  api: 'whitecliffe-hub-api-v1',
  external: 'whitecliffe-hub-external-v1'
};

/**
 * Service Worker Installation
 * Pre-cache essential static assets
 */
self.addEventListener('install', event => {
  console.log('📦 Service Worker installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('📁 Caching static assets...');
        return cache.addAll(STATIC_ASSETS.filter(url => {
          // Only cache local assets during install
          return !url.startsWith('http') || url.includes('fonts.googleapis') || url.includes('cdnjs.cloudflare');
        }));
      })
      .then(() => {
        console.log('✅ Static assets cached successfully');
        // Skip waiting to activate immediately
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('❌ Cache installation failed:', error);
      })
  );
});

/**
 * Service Worker Activation
 * Clean up old caches
 */
self.addEventListener('activate', event => {
  console.log('🚀 Service Worker activating...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        const deletePromises = cacheNames
          .filter(cacheName => {
            // Delete old caches that don't match current version
            return cacheName.startsWith('whitecliffe-hub-') && 
                   cacheName !== CACHE_NAME &&
                   !Object.values(RUNTIME_CACHES).includes(cacheName);
          })
          .map(cacheName => {
            console.log('🗑️ Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          });
        
        return Promise.all(deletePromises);
      })
      .then(() => {
        console.log('✅ Cache cleanup completed');
        // Take control of all pages immediately
        return self.clients.claim();
      })
  );
});

/**
 * Fetch Event Handler
 * Implements cache strategies based on request type
 */
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip Chrome extension requests
  if (url.protocol === 'chrome-extension:') {
    return;
  }
  
  event.respondWith(
    handleRequest(request, url)
  );
});

/**
 * Main request handler - routes to appropriate strategy
 */
async function handleRequest(request, url) {
  try {
    // Static assets: Cache-first strategy
    if (isStaticAsset(request, url)) {
      return await cacheFirst(request, CACHE_NAME);
    }
    
    // Images: Cache-first with runtime caching
    if (isImage(request)) {
      return await cacheFirst(request, RUNTIME_CACHES.images, {
        maxEntries: 100,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
      });
    }
    
    // Dynamic content: Network-first strategy
    if (isDynamicContent(url)) {
      return await networkFirst(request, RUNTIME_CACHES.api);
    }
    
    // External resources: Cache-first with fallback
    if (isExternalResource(url)) {
      return await cacheFirst(request, RUNTIME_CACHES.external, {
        maxEntries: 50,
        maxAgeSeconds: 7 * 24 * 60 * 60 // 7 days
      });
    }
    
    // Default: Network-first for navigation requests
    if (request.mode === 'navigate') {
      return await networkFirst(request, CACHE_NAME, {
        fallbackPage: OFFLINE_PAGE
      });
    }
    
    // Fallback to network
    return await fetch(request);
    
  } catch (error) {
    console.error('🔥 Request handling failed:', error);
    
    // Return offline page for navigation requests
    if (request.mode === 'navigate') {
      return await getOfflinePage();
    }
    
    throw error;
  }
}

/**
 * Cache-first strategy implementation
 */
async function cacheFirst(request, cacheName, options = {}) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    // Optionally refresh cache in background
    if (options.backgroundSync) {
      updateCacheInBackground(request, cache);
    }
    return cachedResponse;
  }
  
  // Fetch from network and cache
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Clone the response before caching
      const responseClone = networkResponse.clone();
      
      // Apply cache management if options provided
      if (options.maxEntries || options.maxAgeSeconds) {
        await manageCacheSize(cache, options);
      }
      
      await cache.put(request, responseClone);
    }
    
    return networkResponse;
  } catch (error) {
    console.warn('⚠️ Cache-first fallback for:', request.url);
    throw error;
  }
}

/**
 * Network-first strategy implementation
 */
async function networkFirst(request, cacheName, options = {}) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      await cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.warn('⚠️ Network failed, trying cache for:', request.url);
    
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page for navigation requests
    if (options.fallbackPage && request.mode === 'navigate') {
      return await getOfflinePage();
    }
    
    throw error;
  }
}

/**
 * Utility functions
 */
function isStaticAsset(request, url) {
  // Local static files
  if (url.origin === self.location.origin) {
    const pathname = url.pathname;
    return pathname.endsWith('.js') ||
           pathname.endsWith('.css') ||
           pathname.endsWith('.html') ||
           pathname.endsWith('.webmanifest') ||
           pathname === '/' ||
           STATIC_ASSETS.includes(pathname);
  }
  
  // External static resources (fonts, CDNs)
  return url.hostname.includes('fonts.googleapis.com') ||
         url.hostname.includes('cdnjs.cloudflare.com');
}

function isImage(request) {
  return request.destination === 'image' ||
         /\.(jpg|jpeg|png|gif|webp|svg|ico)$/i.test(new URL(request.url).pathname);
}

function isDynamicContent(url) {
  return DYNAMIC_PATTERNS.some(pattern => pattern.test(url.href));
}

function isExternalResource(url) {
  return url.origin !== self.location.origin &&
         !isDynamicContent(url) &&
         !url.hostname.includes('fonts.googleapis.com');
}

async function getOfflinePage() {
  const cache = await caches.open(CACHE_NAME);
  return await cache.match(OFFLINE_PAGE) || 
         await cache.match('/') ||
         new Response(
           '<!DOCTYPE html><html><head><title>Offline</title></head><body><h1>🎓 Whitecliffe Student Hub</h1><p>You are currently offline. Please check your internet connection.</p><p>🔄 <a href="/">Try Again</a></p></body></html>',
           { headers: { 'Content-Type': 'text/html' } }
         );
}

async function updateCacheInBackground(request, cache) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      await cache.put(request, response);
    }
  } catch (error) {
    console.warn('Background cache update failed:', error);
  }
}

async function manageCacheSize(cache, options) {
  if (!options.maxEntries) return;
  
  const requests = await cache.keys();
  
  if (requests.length >= options.maxEntries) {
    // Delete oldest entries
    const deleteCount = requests.length - options.maxEntries + 10; // Delete extra to avoid frequent cleanup
    const deletePromises = requests
      .slice(0, deleteCount)
      .map(request => cache.delete(request));
    
    await Promise.all(deletePromises);
  }
}

/**
 * Message handling for cache updates
 */
self.addEventListener('message', event => {
  if (event.data && event.data.type) {
    switch (event.data.type) {
      case 'SKIP_WAITING':
        self.skipWaiting();
        break;
      case 'CACHE_UPDATE':
        // Force update cache for specific resources
        if (event.data.url) {
          updateSpecificCache(event.data.url);
        }
        break;
      case 'CLEAR_CACHE':
        clearAllCaches();
        break;
    }
  }
});

async function updateSpecificCache(url) {
  try {
    const response = await fetch(url, { cache: 'reload' });
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(url, response);
      console.log('✅ Cache updated for:', url);
    }
  } catch (error) {
    console.error('❌ Cache update failed for:', url, error);
  }
}

async function clearAllCaches() {
  const cacheNames = await caches.keys();
  const deletePromises = cacheNames
    .filter(name => name.startsWith('whitecliffe-hub-'))
    .map(name => caches.delete(name));
  
  await Promise.all(deletePromises);
  console.log('🗑️ All caches cleared');
}

/**
 * Background Sync for offline actions (future enhancement)
 */
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle background sync tasks
      console.log('🔄 Background sync triggered')
    );
  }
});

/**
 * Push notification handling (future enhancement)
 */
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    
    const options = {
      body: data.body,
      icon: '/icons/icon-192x192.png',
      badge: '/icons/icon-72x72.png',
      tag: 'whitecliffe-hub-notification',
      actions: [
        {
          action: 'view',
          title: 'View Details'
        },
        {
          action: 'dismiss',
          title: 'Dismiss'
        }
      ]
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

console.log('🎓 Whitecliffe Student Hub Service Worker loaded successfully!');
console.log('📱 PWA features: Offline support, background sync, push notifications');
console.log('⚡ Cache strategies: Cache-first for static, Network-first for dynamic');
