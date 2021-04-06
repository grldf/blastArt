import{S as e,i as r,s as t,e as s,u as o,a,f as l,v as n,w as c,l as i,d,g as h,h as u,r as f,z as v,n as p,p as g}from"./client.4ff60a7c.js";import{g as m,D as w}from"./bundle.esm.a297de33.js";function y(e,r,t){const s=e.slice();return s[1]=r[t],s}function x(e){let r,t,p,g,m,w,y,x,q,E=e[1].titre+"";return{c(){r=s("div"),t=s("h3"),p=o(E),g=a(),m=s("video"),w=s("track"),q=a(),this.h()},l(e){r=l(e,"DIV",{});var s=n(r);t=l(s,"H3",{});var o=n(t);p=c(o,E),o.forEach(i),g=d(s),m=l(s,"VIDEO",{src:!0,controls:!0,poster:!0,type:!0,preload:!0,class:!0});var a=n(m);w=l(a,"TRACK",{kind:!0}),a.forEach(i),q=d(s),s.forEach(i),this.h()},h(){h(w,"kind","captions"),m.src!==(y=D+e[1].video.url)&&h(m,"src",y),m.controls=!0,h(m,"poster",x=D+e[1].cover.url),h(m,"type","video/mp4"),h(m,"preload","none"),h(m,"class","svelte-rgx8rq")},m(e,s){u(e,r,s),f(r,t),f(t,p),f(r,g),f(r,m),f(m,w),f(r,q)},p(e,r){1&r&&E!==(E=e[1].titre+"")&&v(p,E),1&r&&m.src!==(y=D+e[1].video.url)&&h(m,"src",y),1&r&&x!==(x=D+e[1].cover.url)&&h(m,"poster",x)},d(e){e&&i(r)}}}function q(e){let r,t=e[0],o=[];for(let r=0;r<t.length;r+=1)o[r]=x(y(e,t,r));return{c(){r=s("div");for(let e=0;e<o.length;e+=1)o[e].c();this.h()},l(e){r=l(e,"DIV",{class:!0});var t=n(r);for(let e=0;e<o.length;e+=1)o[e].l(t);t.forEach(i),this.h()},h(){h(r,"class","container svelte-rgx8rq")},m(e,t){u(e,r,t);for(let e=0;e<o.length;e+=1)o[e].m(r,null)},p(e,[s]){if(1&s){let a;for(t=e[0],a=0;a<t.length;a+=1){const l=y(e,t,a);o[a]?o[a].p(l,s):(o[a]=x(l),o[a].c(),o[a].m(r,null))}for(;a<o.length;a+=1)o[a].d(1);o.length=t.length}},i:p,o:p,d(e){e&&i(r),g(o,e)}}}const E=m`
  query video {
        jpvideos(sort:"ordre:desc") {
            titre
            cover{
                url
            }
  	        video{
                  url
                }
  }
}
`;async function j(){const e=new w({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch});return{videos:(await e.query({query:E})).data.jpvideos}}let D="https://www.grldfaure.xyz";function k(e,r,t){let{videos:s}=r;return e.$$set=e=>{"videos"in e&&t(0,s=e.videos)},[s]}export default class extends e{constructor(e){super(),r(this,e,k,q,t,{videos:0})}}export{j as preload};
