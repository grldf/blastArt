!function(){"use strict";const e=1618225113126,t=`cache${e}`,n=["/client/client.16a5f1a1.js","/client/inject_styles.5607aec6.js","/client/index.73e8000f.js","/client/SvelteSeo.342dd346.js","/client/index.78c98383.js","/client/index.838c95e9.js","/client/bundle.esm.a297de33.js","/client/index.df7135d7.js","/client/index.64a34457.js","/client/snarkdown.es.257e5e6b.js","/client/index.4e0d125e.js","/client/[slug].2ba95695.js","/client/index.9390f84d.js","/client/index.2b421948.js","/client/index.ad7e0bf8.js","/client/index.341b7733.js"].concat(["/service-worker-index.html","/Symbioses-Article-UrbanArts-Blast.pdf","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/logo.png","/logo_R4L.webp","/manifest.json","/pirate.jpg","/sitemap.xml"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),c=n.protocol.startsWith("http"),i=n.hostname===self.location.hostname&&n.port!==self.location.port,a=n.host===self.location.host&&s.has(n.pathname),l="only-if-cached"===t.request.cache&&!a;!c||i||l||t.respondWith((async()=>a&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const s=await n.match(t);if(s)return s;throw e}}(t.request))())}))}();
