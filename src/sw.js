// workbox-sw cdn引入
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.3/workbox-sw.js');

workbox.loadModule("workbox-strategies"); // 提供缓存策略

const cacheVersion = '20200430v1'
const staticCacheName = 'static' + cacheVersion
const staticAssetsCacheName = '/' + cacheVersion
const vendorCacheName = 'verdor' + cacheVersion
const contentCacheName = 'content' + cacheVersion
const maxEntries = 100

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.supperessWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest,{});


if (workbox) {
 console.log(`Workbox is loaded`);
 workbox.precaching.precacheAndRoute(self.__precacheManifest);
}
else {
 console.log(`Workbox didn't load`);
}


// workbox.routing.registerRoute(
//     new RegExp('\\.css$'),
//     workbox.strategies.cacheFirst()
// );

workbox.precaching.precacheAndRoute([]);

