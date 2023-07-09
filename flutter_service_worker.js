'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f3b1805c30396d4fcd5aa02dda323d86",
".git/config": "553299f292a2527338b54969a5d8650b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5f3d96f885862690d36f28d8479ea982",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "62336d56e10c699917ca53c2a0289322",
".git/logs/refs/heads/master": "62336d56e10c699917ca53c2a0289322",
".git/logs/refs/remotes/origin/master": "2935a918adba16982c1db234bc3e1aef",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0e/192cebe39cea621e56ba1408cb2ac8d39ff9e2": "0b77ad4a02c9883ca2eb9e950a6f280c",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/27/2ae9ed6e1a4c8b8a16fb5ab59d9325fc79d613": "4eed0b5849d5f6f57bba42c98f764266",
".git/objects/29/81c4c31791c5e39a796eea3eaefac3d94d3320": "7c52a3e9f82460321e157b69d4ced6e7",
".git/objects/29/9b00b52f13faacee2caba31247fb2fc42d0438": "66e73c7feb9fa62862085d7c8fdd54a5",
".git/objects/2d/f56d603f7cdf0b61ccf44ad572a33255462a90": "6e3e146ae7a819d77cf1731900a5cdaa",
".git/objects/2e/81dcd8b565d4e3c5c0af87d5c4c31b0416e28f": "b34833e0d5a2933081fa51a5104fdec0",
".git/objects/31/c42bb93d4fdeb5e11bf0d073442540f4d4f381": "1ae6550e8138ce95fa68f3663f700cd6",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/53/4514118e85bad812347eaca15ba1b79159083b": "b9f9409896b71e867657f7606ea9d5a7",
".git/objects/54/4f8f5616fbaa77f8ddd3a04e16002678300b25": "a54cff88e646656ad2f1985b6905b5e5",
".git/objects/56/13bfa1185312ba27db27e1e7ba0da4ccd953b4": "2bf035b7d4b46b8ccf93c96715b7d210",
".git/objects/5c/04b920bdea510f126b224082e5571d831d0c14": "090e057e355621d9bc1b7f0adb1f98a8",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/79/3daa146646f85cbac8ed45e149330df476f379": "9bece2a9a8c2450f042fb28e01aac9c2",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/8a93939094fcadb8f8ed47aa82ff3b69cfd5ee": "50e22bd664f408b6d7ae75acace74e81",
".git/objects/89/9ce35ebaaabde79c985fc51b3cfdc9c804f4cd": "ad7b34161ff8e1c349ce65a3a286042f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8f/979597ea8d70b7d002159d7a3853fc71dee044": "b50db63f38d1d6d558758dc42b05750f",
".git/objects/98/16878b2cd343bf721d4fd6170e93a9b3b97648": "06f33a3c106df59e0a416b5914e35619",
".git/objects/9a/cb4cf9cb671ec05981a9b1969353ba4d3201a5": "30d089405f89ad70ab114aa0d07e88bf",
".git/objects/9c/0f58703d768670c438ae67ac89538f500b676e": "3fcb7be993a4c03258618bbc4961c37a",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/2f46f3a0b327420542296875b44d13283fd076": "f8209cc99bf580c15e481623598e9b92",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/cf/9adbb59649881c8fed4cb935f12c82d73b49a3": "88d2639e2d673f88a44211bb57b0fd90",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/50d91b3da63b104da72b0426a89c0ef7353d82": "b37c177bf5cbd004817312334371cd93",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/5c991154dfe10ddd9d44cb88276a0ae7caf6f4": "72401ffe64d91f67e063fcb2cd1aae41",
".git/objects/e1/0b1a71cc2abda007ed1288e0a7b2731e596f11": "6ffff5db2f34fdee821ee801b7b7af75",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b2be4a6229d4bbe7d969d9d23b915e2b32edf7": "b1e3918c8d9a9d4b7fc129d2125376e7",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f8/302c0f240bbbb2e4fd23259d96fc50e39e4da2": "4b16cae67ca883fd07a146cc6ca8be85",
".git/objects/fc/7e95aa6416e6bb371a2a9e6ae1c696de6f82f1": "e353fbca84ae20d7253da6f0c5d39cd8",
".git/refs/heads/master": "5821cf4331e6556cae4fbf4899aad0a0",
".git/refs/remotes/origin/master": "5821cf4331e6556cae4fbf4899aad0a0",
"assets/AssetManifest.json": "90c19f4cbbb99a32e2c38ae9709f43f2",
"assets/AssetManifest.smcbin": "4911a20a9c3dad8c23c8c0c7a7db439f",
"assets/assets/icons/behance.svg": "1487dff57f5c15131037cb6965a4d0bf",
"assets/assets/icons/check.svg": "bce7a581bb999caac446c9138a57a401",
"assets/assets/icons/download.svg": "8c24d4679cb0c5297277321bf7b65d28",
"assets/assets/icons/dribble.svg": "cf842513f50591eb280695ad14bfa409",
"assets/assets/icons/email.svg": "8026fdd8e0c999789c3cd0b043995c17",
"assets/assets/icons/github.svg": "49b7a0f6543674cc4743ec1a9f02e368",
"assets/assets/icons/insta.svg": "97fc5f2383965d77eb2b450ff04532c2",
"assets/assets/icons/linkedin.svg": "2f5e837978e8a6bb595dfd11c8dbd42f",
"assets/assets/icons/twitter.svg": "c09d9f98cb67b0dfc2aa4c63170f2632",
"assets/assets/images/android-chrome-192x192.png": "6f837d640014e634b76e76a6c2a2e28b",
"assets/assets/images/android-chrome-512x512.png": "9827048040fb9887d47ef6f74810ceaf",
"assets/assets/images/apple-touch-icon.png": "22d2c7bb575ac0b5790cf37fc0afc20a",
"assets/assets/images/bg.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/assets/images/c0.png": "31b4eed0453c2118c41f7d5bfc583e50",
"assets/assets/images/c1.png": "f4d96a4bd7f4a1cbfe74498469dcc3bd",
"assets/assets/images/c2.png": "dbb2ea141000c014e36bb1383394e524",
"assets/assets/images/c4.png": "621b2e49e9c499761250cc04afcfa9c3",
"assets/assets/images/c5.png": "209097495ac2646b13e8a282c3dcb25a",
"assets/assets/images/c6.png": "21673cff856f27a4f91d12fe58e3aa50",
"assets/assets/images/c7.png": "2405b7baa295f8556c46d6d2dfd23701",
"assets/assets/images/chat.gif": "6e320ecf6291916aa549da2907da0830",
"assets/assets/images/IMG_7344.jpg": "bb74c3d7c6f5599d40c05a866b31ffd6",
"assets/assets/images/IMG_7344.png": "b9bafd814e3e02b928e27794d87771cf",
"assets/assets/images/net.gif": "aafd628bfefdcd2c73839531f46a52ea",
"assets/assets/images/net.mp4": "d6a8dfd030ac26813dd2f7dba4dfa471",
"assets/assets/images/net1.gif": "7d368d30263eeba4d51bc99c83e308e1",
"assets/assets/images/p0.png": "570639bb108faaae1a76e8ef2cab0220",
"assets/assets/images/p1.png": "47deb255b693af7801c9bb5b3d154f87",
"assets/assets/images/p2.png": "c117608c8052eb1f5b1f570054264ed6",
"assets/assets/images/pokedex.gif": "6a69bde1f4158c3b45c252fe11b312de",
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
"assets/assets/images/quickbuy.gif": "d04c028484c0a00861d8157dd60c3e07",
"assets/assets/images/quickbuys.gif": "6629ac2ad5df0cfa0a5da81b814bbd87",
"assets/assets/images/w0.png": "25482770c5a975b41c937f2f6efc7ad3",
"assets/assets/images/w1.png": "b4600c7688891a9c0d1756798eca7304",
"assets/assets/images/w2.png": "8610a7956da75306689f998fedae31e1",
"assets/assets/images/w3.png": "4f37e153e06b40781fa50a921e81df47",
"assets/assets/images/weather.gif": "b1683654592481740745360d2e747b89",
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
"index.html": "c27b90f1fb146e0acbc44d2d20dbab81",
"/": "c27b90f1fb146e0acbc44d2d20dbab81",
"main.dart.js": "3dcbe230530e8b0d6bdbe4234737a387",
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
