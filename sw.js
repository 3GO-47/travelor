// Travelor offline cache: the app shell network-first, libraries and photos stale-while-revalidate, map tiles cache-first (capped)
const APP='travelor-app-v5',LIB='travelor-lib-v1',TILE='travelor-tiles-v1',MAXT=900;
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(APP).then(c=>c.addAll(['./','./manifest.webmanifest','./icon-192.png'])).catch(()=>{}));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>![APP,LIB,TILE].includes(k)).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
async function trim(){const c=await caches.open(TILE),ks=await c.keys();for(let i=0;i<ks.length-MAXT;i++)await c.delete(ks[i]);}
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);
  if(u.origin===location.origin){e.respondWith(fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(APP).then(c=>c.put(r,cp));}return res;})
    .catch(()=>caches.match(r,{ignoreSearch:true}).then(m=>m||caches.match('./'))));return;}
  if(/arcgisonline\.com|basemaps\.cartocdn\.com/.test(u.host)){e.respondWith(caches.open(TILE).then(c=>c.match(r).then(m=>m||fetch(r).then(res=>{c.put(r,res.clone());trim();return res;}))));return;}
  if(/jsdelivr\.net|googleapis\.com|gstatic\.com|wikimedia\.org|wikipedia\.org/.test(u.host)){e.respondWith(caches.open(LIB).then(c=>c.match(r).then(m=>{
    const net=fetch(r).then(res=>{if(res.ok||res.type==='opaque')c.put(r,res.clone());return res;}).catch(()=>m);return m||net;})));}
});
