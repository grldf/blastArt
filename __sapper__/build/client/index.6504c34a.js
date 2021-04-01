import{S as e,i as t,s,e as r,u as o,a as l,f as a,v as c,w as n,l as i,d as h,g as d,h as u,r as f,z as v,n as p,p as g}from"./client.41c686f9.js";import{g as m,D as w}from"./bundle.esm.a297de33.js";function y(e,t,s){const r=e.slice();return r[1]=t[s],r}function x(e){let t,s,p,g,m,w,y,x,E,j=e[1].titre+"";return{c(){t=r("div"),s=r("h3"),p=o(j),g=l(),m=r("video"),w=r("track"),E=l(),this.h()},l(e){t=a(e,"DIV",{});var r=c(t);s=a(r,"H3",{});var o=c(s);p=n(o,j),o.forEach(i),g=h(r),m=a(r,"VIDEO",{src:!0,controls:!0,poster:!0,type:!0,class:!0});var l=c(m);w=a(l,"TRACK",{kind:!0}),l.forEach(i),E=h(r),r.forEach(i),this.h()},h(){d(w,"kind","captions"),m.src!==(y=D+e[1].video.url)&&d(m,"src",y),m.controls=!0,d(m,"poster",x=D+e[1].cover.url),d(m,"type","video/mp4"),d(m,"class","svelte-86c2or")},m(e,r){u(e,t,r),f(t,s),f(s,p),f(t,g),f(t,m),f(m,w),f(t,E)},p(e,t){1&t&&j!==(j=e[1].titre+"")&&v(p,j),1&t&&m.src!==(y=D+e[1].video.url)&&d(m,"src",y),1&t&&x!==(x=D+e[1].cover.url)&&d(m,"poster",x)},d(e){e&&i(t)}}}function E(e){let t,s=e[0],o=[];for(let t=0;t<s.length;t+=1)o[t]=x(y(e,s,t));return{c(){t=r("div");for(let e=0;e<o.length;e+=1)o[e].c();this.h()},l(e){t=a(e,"DIV",{class:!0});var s=c(t);for(let e=0;e<o.length;e+=1)o[e].l(s);s.forEach(i),this.h()},h(){d(t,"class","container svelte-86c2or")},m(e,s){u(e,t,s);for(let e=0;e<o.length;e+=1)o[e].m(t,null)},p(e,[r]){if(1&r){let l;for(s=e[0],l=0;l<s.length;l+=1){const a=y(e,s,l);o[l]?o[l].p(a,r):(o[l]=x(a),o[l].c(),o[l].m(t,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=s.length}},i:p,o:p,d(e){e&&i(t),g(o,e)}}}const j=m`
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
`;async function q(){const e=new w({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch});return{videos:(await e.query({query:j})).data.jpvideos}}let D="https://www.grldfaure.xyz";function k(e,t,s){let{videos:r}=t;return e.$$set=e=>{"videos"in e&&s(0,r=e.videos)},[r]}export default class extends e{constructor(e){super(),t(this,e,k,E,s,{videos:0})}}export{q as preload};
