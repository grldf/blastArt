import{S as e,i as s,s as t,e as r,v as o,a as l,f as a,g as c,w as n,h as i,d,j as h,k as u,l as v,z as f,n as p,r as g}from"./client.7c14b7fd.js";import{g as m,D as w}from"./bundle.esm.a297de33.js";function j(e,s,t){const r=e.slice();return r[1]=s[t],r}function y(e){let s,t,p,g,m,w,j,y,b,x=e[1].titre+"";return{c(){s=r("div"),t=r("h3"),p=o(x),g=l(),m=r("video"),w=r("track"),b=l(),this.h()},l(e){s=a(e,"DIV",{});var r=c(s);t=a(r,"H3",{class:!0});var o=c(t);p=n(o,x),o.forEach(i),g=d(r),m=a(r,"VIDEO",{src:!0,controls:!0,poster:!0,type:!0,preload:!0,class:!0});var l=c(m);w=a(l,"TRACK",{kind:!0}),l.forEach(i),b=d(r),r.forEach(i),this.h()},h(){h(t,"class","svelte-63c1bj"),h(w,"kind","captions"),m.src!==(j=k+e[1].video.url)&&h(m,"src",j),m.controls=!0,h(m,"poster",y=k+e[1].cover.url),h(m,"type","video/mp4"),h(m,"preload","none"),h(m,"class","svelte-63c1bj")},m(e,r){u(e,s,r),v(s,t),v(t,p),v(s,g),v(s,m),v(m,w),v(s,b)},p(e,s){1&s&&x!==(x=e[1].titre+"")&&f(p,x),1&s&&m.src!==(j=k+e[1].video.url)&&h(m,"src",j),1&s&&y!==(y=k+e[1].cover.url)&&h(m,"poster",y)},d(e){e&&i(s)}}}function b(e){let s,t=e[0],o=[];for(let s=0;s<t.length;s+=1)o[s]=y(j(e,t,s));return{c(){s=r("div");for(let e=0;e<o.length;e+=1)o[e].c();this.h()},l(e){s=a(e,"DIV",{class:!0});var t=c(s);for(let e=0;e<o.length;e+=1)o[e].l(t);t.forEach(i),this.h()},h(){h(s,"class","container svelte-63c1bj")},m(e,t){u(e,s,t);for(let e=0;e<o.length;e+=1)o[e].m(s,null)},p(e,[r]){if(1&r){let l;for(t=e[0],l=0;l<t.length;l+=1){const a=j(e,t,l);o[l]?o[l].p(a,r):(o[l]=y(a),o[l].c(),o[l].m(s,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=t.length}},i:p,o:p,d(e){e&&i(s),g(o,e)}}}const x=m`
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
`;async function E(){const e=new w({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch});return{videos:(await e.query({query:x})).data.jpvideos}}let k="https://www.grldfaure.xyz";function q(e,s,t){let{videos:r}=s;return e.$$set=e=>{"videos"in e&&t(0,r=e.videos)},[r]}export default class extends e{constructor(e){super(),s(this,e,q,b,t,{videos:0})}}export{E as preload};
