// LLL U — Service Worker
// Caches the app so it loads instantly and works offline

const CACHE = 'lllu-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/content.js',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
];

// Install — cache all core assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate — clear old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — serve from cache first, fall back to network
// For RSS feeds always go to network (live content)
self.addEventListener('fetch', e => {
  const url = e.request.url;

  // Always fetch RSS feeds and Netlify functions live — never cache
  if (url.includes('.netlify/functions') || url.includes('anchor.fm') || url.includes('lifewithlexiskai')) {
    return; // let it go to network normally
  }

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        // Cache new valid responses
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, clone));
        }
        return response;
      });
    }).catch(() => {
      // Offline fallback — return cached index
      return caches.match('/index.html');
    })
  );
});
