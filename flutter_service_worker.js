'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "627ea60f2882cce78c8d06f2cb368540",
"assets/AssetManifest.smcbin": "e9131d516adf3f5fd77d0ae0b05a3d11",
"assets/assets/icons/behance.svg": "1487dff57f5c15131037cb6965a4d0bf",
"assets/assets/icons/check.svg": "bce7a581bb999caac446c9138a57a401",
"assets/assets/icons/download.svg": "8c24d4679cb0c5297277321bf7b65d28",
"assets/assets/icons/dribble.svg": "cf842513f50591eb280695ad14bfa409",
"assets/assets/icons/email.svg": "8026fdd8e0c999789c3cd0b043995c17",
"assets/assets/icons/github.svg": "49b7a0f6543674cc4743ec1a9f02e368",
"assets/assets/icons/insta.svg": "97fc5f2383965d77eb2b450ff04532c2",
"assets/assets/icons/linkedin.svg": "2f5e837978e8a6bb595dfd11c8dbd42f",
"assets/assets/icons/twitter.svg": "c09d9f98cb67b0dfc2aa4c63170f2632",
"assets/assets/images/c0.png": "31b4eed0453c2118c41f7d5bfc583e50",
"assets/assets/images/c1.png": "f4d96a4bd7f4a1cbfe74498469dcc3bd",
"assets/assets/images/c2.png": "dbb2ea141000c014e36bb1383394e524",
"assets/assets/images/c4.png": "621b2e49e9c499761250cc04afcfa9c3",
"assets/assets/images/c5.png": "209097495ac2646b13e8a282c3dcb25a",
"assets/assets/images/c6.png": "21673cff856f27a4f91d12fe58e3aa50",
"assets/assets/images/c7.png": "2405b7baa295f8556c46d6d2dfd23701",
"assets/assets/images/IMG_7344.png": "b9bafd814e3e02b928e27794d87771cf",
"assets/assets/images/net1.gif": "7d368d30263eeba4d51bc99c83e308e1",
"assets/assets/images/p0.png": "570639bb108faaae1a76e8ef2cab0220",
"assets/assets/images/p1.png": "47deb255b693af7801c9bb5b3d154f87",
"assets/assets/images/p2.png": "c117608c8052eb1f5b1f570054264ed6",
"assets/assets/images/qb0.png": "2b855f3966068c528e468d0886e2e488",
"assets/assets/images/qb1.png": "d2f5c2f5a88bfe14068ae31ccdd41f92",
"assets/assets/images/qb2.png": "52148828dab3c0ee143f5d0db0d89f0b",
"assets/assets/images/qb3.png": "4b6432136f376a8fa6fc73c9ea88d966",
"assets/assets/images/qb4.png": "1b81332f6027a1ee1ddb36ff9054fc87",
"assets/assets/images/qb5.png": "f713cf58c0dfd93711880d1dbaf604c3",
"assets/assets/images/qb6.png": "5bb6da864daccb5f3c862f678ed16a36",
"assets/assets/images/qb7.png": "15ffd8b23a8f6a3d2bf91a82a4d74941",
"assets/assets/images/qb8.png": "917c3309618798594167487cf667864d",
"assets/assets/images/qbs0.png": "df1a4d833675a371913d1da06fd4586c",
"assets/assets/images/qbs1.png": "15d6b7404c9e5492b4eb5c6169b85fd2",
"assets/assets/images/qbs2.png": "2b776cba1a4a79aee0c859c7f0c5ae0a",
"assets/assets/images/qbs3.png": "99b1e4b383d32c276a56a1250367489f",
"assets/assets/images/qbs4.png": "791f765ec01cc6172e37217d09bb724e",
"assets/assets/images/qbs5.png": "64b6e84e98b4668c3c473022f0c5d365",
"assets/assets/images/qbs6.png": "14ad0a6c815ae23edcfdbd02461d2f0a",
"assets/assets/images/qbs7.png": "11b99c6d8a18dad8a8a4b7d4b2abe44a",
"assets/assets/images/w0.png": "25482770c5a975b41c937f2f6efc7ad3",
"assets/assets/images/w1.png": "b4600c7688891a9c0d1756798eca7304",
"assets/assets/images/w2.png": "8610a7956da75306689f998fedae31e1",
"assets/assets/images/w3.png": "4f37e153e06b40781fa50a921e81df47",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c616ea11e8b5ae6ae390990f10e4d293",
"assets/NOTICES": "90fb20d700904540840b1145b73d8e59",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "da9eaa3997f501119ef22b9271f52672",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "04d9a6a55e0783aad7f958da4b6e7cb7",
"icons/Icon-512.png": "d4bd1416ba0720749423bc62ff1da854",
"icons/Icon-maskable-192.png": "04d9a6a55e0783aad7f958da4b6e7cb7",
"icons/Icon-maskable-512.png": "d4bd1416ba0720749423bc62ff1da854",
"index.html": "82816fd24abcfe7dcf6e6ef8fd516fb7",
"/": "82816fd24abcfe7dcf6e6ef8fd516fb7",
"main.dart.js": "8a1ba5219562d6e70fd60948fae2c60b",
"manifest.json": "827a989a641cd7942522d7f0f09e1648",
"version.json": "4ee2911a59851ca87f396e3b2e897fce"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
