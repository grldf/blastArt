!function(){"use strict";const e=1617713041324,t=`cache${e}`,n=["/client/client.4ff60a7c.js","/client/inject_styles.5607aec6.js","/client/index.07bbf114.js","/client/SvelteSeo.033e28da.js","/client/index.433c0bf5.js","/client/index.4feeb9ef.js","/client/bundle.esm.a297de33.js","/client/index.9735dcbb.js","/client/index.44b2253b.js","/client/snarkdown.es.257e5e6b.js","/client/index.5f8ceb3c.js","/client/[slug].84544721.js","/client/index.4e044ef0.js","/client/index.0cfd32d0.js","/client/index.062b07c5.js","/client/index.62b06f7d.js"].concat(["/service-worker-index.html","/Symbioses-Article-UrbanArts-Blast.pdf","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/logo.png","/manifest.json","/pirate.jpg","/sitemap.xml"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),c=n.protocol.startsWith("http"),i=n.hostname===self.location.hostname&&n.port!==self.location.port,a=n.host===self.location.host&&s.has(n.pathname),l="only-if-cached"===t.request.cache&&!a;!c||i||l||t.respondWith((async()=>a&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const s=await n.match(t);if(s)return s;throw e}}(t.request))())}))}();
