if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let c={};const o=e=>n(e,a),b={module:{uri:a},exports:c,require:o};i[a]=Promise.all(s.map((e=>b[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-a15c6a31.js",revision:null},{url:"assets/index-d73b5c17.css",revision:null},{url:"images/basket.svg",revision:"6dede0a1196f76102297669c97025478"},{url:"images/cook1.png",revision:"5d1f806a620b42b635da3a50942b3b34"},{url:"images/cook2.png",revision:"1005cdd1c021452836e1f7d8a534a5ba"},{url:"images/furniture1.png",revision:"72bbe9c926dff2126714b4729f7d6788"},{url:"images/furniture2.png",revision:"6b8231e8175c17450ab1aee0c6a7ab90"},{url:"images/home1.png",revision:"ebbf941725b7f745a18556354332ec52"},{url:"images/home2.png",revision:"30675662a219e171f7569e327e903725"},{url:"images/lighting1.png",revision:"60b420a54949f647c0d4c1e6d6022b57"},{url:"images/lighting2.png",revision:"0ea8f4c0a5f64f90caa8b80863458044"},{url:"images/nn-icon-facebook.svg",revision:"b55e2a21bde988b6cacbab49b176c3dd"},{url:"images/nn-icon-instagram.svg",revision:"0153ea0a5c9b954c5532628fe5052e4b"},{url:"images/nn-icon-tiktok.svg",revision:"102a6d69778b69b1b217f4c155f88c7f"},{url:"images/table1.png",revision:"d6b607a1109d18ccff0259817f5a9b9a"},{url:"images/table2.png",revision:"9ebf65ef544452ec70411a317f3a0b37"},{url:"images/textile1.png",revision:"6d885fc46f69b7ced086a1143c6b52dc"},{url:"images/textile2.png",revision:"c021148e9ff0388c5d0eb31acc62a404"},{url:"index.html",revision:"1700c2ad46d8bfbbe892883344c56dce"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"manifest.webmanifest",revision:"cb9e31a9195309fe43a9150fd816d568"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));