!function(){"use strict";const e=1618564016626,t=`cache${e}`,n=["/client/client.63629086.js","/client/inject_styles.5607aec6.js","/client/index.929ecf86.js","/client/SvelteSeo.4cede844.js","/client/index.1f95f0b9.js","/client/index.d3509150.js","/client/bundle.esm.a297de33.js","/client/index.395314e4.js","/client/index.f1a8d001.js","/client/snarkdown.es.257e5e6b.js","/client/index.2bb59c77.js","/client/[slug].8d97abd1.js","/client/index.6cb31d0a.js","/client/index.cb1e9d9f.js","/client/index.8af497f9.js","/client/index.ad41ae53.js"].concat(["/service-worker-index.html","/Symbioses-Article-UrbanArts-Blast.pdf","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/logo.png","/logo_R4L.webp","/manifest.json","/pirate.jpg","/sitemap.xml"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),c=n.protocol.startsWith("http"),i=n.hostname===self.location.hostname&&n.port!==self.location.port,a=n.host===self.location.host&&s.has(n.pathname),l="only-if-cached"===t.request.cache&&!a;!c||i||l||t.respondWith((async()=>a&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const s=await n.match(t);if(s)return s;throw e}}(t.request))())}))}();
