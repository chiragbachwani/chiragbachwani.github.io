'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ad1a6c14d9f3fb8f8564b48d335a6c91",
"assets/AssetManifest.bin.json": "92cf327c56620249ccd4225f2b4c0063",
"assets/AssetManifest.json": "dd4d5f431b8c8fc3bd8bb005426cff68",
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
"assets/assets/images/am1.png": "52318c53a80e6f93e923bfbc83d24208",
"assets/assets/images/am2.png": "1e9e345cd52e1912dd3523c5636a21cb",
"assets/assets/images/am3.png": "124d8a2503fc3b498dddeabbbec023dc",
"assets/assets/images/am4.png": "a4b737633b8dc9dbff5fefa6d1580979",
"assets/assets/images/am5.png": "dcf190c91e31a528dd362bbeae11b2c5",
"assets/assets/images/am6.png": "630b63f72140998e25cbf74709661fd5",
"assets/assets/images/am7.png": "06cb109709bb2ce449d466afe0788f17",
"assets/assets/images/am8.png": "8125f15c3b1dfc3988936372eaded499",
"assets/assets/images/c0.png": "31b4eed0453c2118c41f7d5bfc583e50",
"assets/assets/images/c1.png": "f4d96a4bd7f4a1cbfe74498469dcc3bd",
"assets/assets/images/c2.png": "dbb2ea141000c014e36bb1383394e524",
"assets/assets/images/c4.png": "621b2e49e9c499761250cc04afcfa9c3",
"assets/assets/images/c5.png": "209097495ac2646b13e8a282c3dcb25a",
"assets/assets/images/c6.png": "21673cff856f27a4f91d12fe58e3aa50",
"assets/assets/images/c7.png": "2405b7baa295f8556c46d6d2dfd23701",
"assets/assets/images/chatter%2520box.jpg": "80e264e413ea00ee017d348e4cfc4c79",
"assets/assets/images/CHATTER.png": "cfb94464e9958683a7acd56e93d07d11",
"assets/assets/images/hs1.png": "2fed5ebefdc963004602e72e0e80fe87",
"assets/assets/images/hs2.png": "85257c7c4f2b7de9a62da6430ecf0b01",
"assets/assets/images/hs3.png": "0fdbae2810a7cc2b3d9593640702eb8c",
"assets/assets/images/hs4.png": "670cfd5185ea5faf5f837674562a3c9e",
"assets/assets/images/IMG_7344.png": "b9bafd814e3e02b928e27794d87771cf",
"assets/assets/images/net1.gif": "7d368d30263eeba4d51bc99c83e308e1",
"assets/assets/images/p0.png": "570639bb108faaae1a76e8ef2cab0220",
"assets/assets/images/p1.png": "47deb255b693af7801c9bb5b3d154f87",
"assets/assets/images/p2.png": "c117608c8052eb1f5b1f570054264ed6",
"assets/assets/images/pfp.png": "904eea8c938a23dea548056405404777",
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
"assets/assets/images/quickbuy.png": "7062d33be9697110294da9373220f180",
"assets/assets/images/sc1.png": "c3a20faa2f20c5041db2d04d25961282",
"assets/assets/images/sc2.png": "7d6e82078e3b177d60e3ff4c5b469d42",
"assets/assets/images/sc3.jpg": "db8ab65d92c298eccc77dfd3f34eff8a",
"assets/assets/images/sc4.jpg": "a67de0201b8062a1b6203faac42c181c",
"assets/assets/images/sc5.jpg": "02191b2591b5b240cb784b31219094a1",
"assets/assets/images/w0.png": "25482770c5a975b41c937f2f6efc7ad3",
"assets/assets/images/w1.png": "b4600c7688891a9c0d1756798eca7304",
"assets/assets/images/w2.png": "8610a7956da75306689f998fedae31e1",
"assets/assets/images/w3.png": "4f37e153e06b40781fa50a921e81df47",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e4ff166e4e990e31d109be27fa304563",
"assets/NOTICES": "39ffa09cda1678a4089b0ef543e5a07c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "da9eaa3997f501119ef22b9271f52672",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "04d9a6a55e0783aad7f958da4b6e7cb7",
"icons/Icon-512.png": "d4bd1416ba0720749423bc62ff1da854",
"icons/Icon-maskable-192.png": "04d9a6a55e0783aad7f958da4b6e7cb7",
"icons/Icon-maskable-512.png": "d4bd1416ba0720749423bc62ff1da854",
"index.html": "ebc9debdca9a38d29035068c134af556",
"/": "ebc9debdca9a38d29035068c134af556",
"main.dart.js": "69b6282bfa7545d268885fdf6e2871f8",
"manifest.json": "827a989a641cd7942522d7f0f09e1648",
"version.json": "4ee2911a59851ca87f396e3b2e897fce"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
