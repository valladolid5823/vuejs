(()=>{"use strict";var e={9762:(e,t,r)=>{var o=r(9104),n=r(6096),a=r(8734),i=r(1758);function l(e,t,r,o,n,a){const l=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.Wv)(l)}const s=(0,i.pM)({name:"App"});var u=r(2807);const c=(0,u.A)(s,[["render",l]]),d=c;var p=r(604),f=r(587);const h=(0,p.M_)((()=>{const e=(0,f.Ey)();return e}));var v=r(455);const m=[{path:"/",component:()=>Promise.all([r.e(121),r.e(887)]).then(r.bind(r,1887)),children:[{path:"",component:()=>Promise.all([r.e(121),r.e(540)]).then(r.bind(r,4540))},{path:"home",name:"home",component:()=>Promise.all([r.e(121),r.e(25)]).then(r.bind(r,2025))},{path:"i-love-arrays",name:"i-love-arrays",component:()=>Promise.all([r.e(121),r.e(290)]).then(r.bind(r,5290))},{path:"rest-api",name:"rest-api",component:()=>Promise.all([r.e(121),r.e(412)]).then(r.bind(r,5412))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(121),r.e(271)]).then(r.bind(r,3271))}],b=m,g=(0,p.wE)((function(){const e=v.Bt,t=(0,v.aE)({scrollBehavior:()=>({left:0,top:0}),routes:b,history:e("")});return t}));async function y(e,t){const r=e(d);r.use(n.A,t);const o="function"===typeof h?await h({}):h;r.use(o);const i=(0,a.IG)("function"===typeof g?await g({store:o}):g);return o.use((({store:e})=>{e.router=i})),{app:r,store:o,router:i}}const w={config:{dark:!1}},P="";async function j({app:e,router:t,store:r},o){let n=!1;const a=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},i=e=>{if(n=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=a(e);null!==t&&(window.location.href=t,window.location.reload())},l=window.location.href.replace(window.location.origin,"");for(let u=0;!1===n&&u<o.length;u++)try{await o[u]({app:e,router:t,store:r,ssrContext:null,redirect:i,urlPath:l,publicPath:P})}catch(s){return s&&s.url?void i(s.url):void console.error("[Quasar] boot error:",s)}!0!==n&&(e.use(t),e.mount("#q-app"))}y(o.Ef,w).then((e=>{const[t,o]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(r.bind(r,660))]).then((t=>{const r=o(t).filter((e=>"function"===typeof e));j(e,r)}))}))},660:(e,t,r)=>{r.r(t),r.d(t,{api:()=>a,default:()=>i});var o=r(604),n=r(4461);const a=n.A.create({baseURL:"https://dog.ceo/api/"}),i=(0,o.zj)((({app:e})=>{e.config.globalProperties.$axios=n.A,e.config.globalProperties.$api=a}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(c=0;c<e.length;c++){for(var[o,n,a]=e[c],l=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[s])))?o.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{25:"0ff7832a",271:"672975f3",290:"f75b4351",412:"aa8c3001",540:"4959471b",887:"8cebc77b"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+e+"."+{25:"31d6cfe0",290:"4045876d",412:"343109ef"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="vuejs:";r.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var l,s;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=o),e[o]=[n];var p=(t,r)=>{l.onerror=l.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{if("undefined"!==typeof document){var e=(e,t,o,n,a)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",r.nc&&(i.nonce=r.nc);var l=r=>{if(i.onerror=i.onload=null,"load"===r.type)n();else{var o=r&&r.type,l=r&&r.target&&r.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+l+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=o,s.request=l,i.parentNode&&i.parentNode.removeChild(i),a(s)}};return i.onerror=i.onload=l,i.href=t,o?o.parentNode.insertBefore(i,o.nextSibling):document.head.appendChild(i),i},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){n=i[o],a=n.getAttribute("data-href");if(a===e||a===t)return n}},o=o=>new Promise(((n,a)=>{var i=r.miniCssF(o),l=r.p+i;if(t(i,l))return n();e(o,l,null,n,a)})),n={524:0};r.f.miniCss=(e,t)=>{var r={25:1,290:1,412:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=o(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}}})(),(()=>{var e={524:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var i=r.p+r.u(t),l=new Error,s=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}};r.l(i,s,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,l,s]=o,u=0;if(i.some((t=>0!==e[t]))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(s)var c=s(r)}for(t&&t(o);u<i.length;u++)a=i[u],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},o=globalThis["webpackChunkvuejs"]=globalThis["webpackChunkvuejs"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[121],(()=>r(9762)));o=r.O(o)})();