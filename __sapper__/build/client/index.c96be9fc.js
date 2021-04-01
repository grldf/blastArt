import{S as e,i as t,s,e as r,t as o,a,c,j as l,k as n,d as i,b as h,f as d,h as u,g as f,p as v,n as p,r as g}from"./client.272e43a8.js";import{g as m,D as w}from"./bundle.esm.a297de33.js";function y(e,t,s){const r=e.slice();return r[1]=t[s],r}function j(e){let t,s,p,g,m,w,y,j,x,E=e[1].titre+"";return{c(){t=r("div"),s=r("h3"),p=o(E),g=a(),m=r("video"),w=r("track"),x=a(),this.h()},l(e){t=c(e,"DIV",{});var r=l(t);s=c(r,"H3",{});var o=l(s);p=n(o,E),o.forEach(i),g=h(r),m=c(r,"VIDEO",{src:!0,controls:!0,poster:!0,type:!0,class:!0});var a=l(m);w=c(a,"TRACK",{kind:!0}),a.forEach(i),x=h(r),r.forEach(i),this.h()},h(){d(w,"kind","captions"),m.src!==(y=q+e[1].video.url)&&d(m,"src",y),m.controls=!0,d(m,"poster",j=q+e[1].cover.url),d(m,"type","video/mp4"),d(m,"class","svelte-86c2or")},m(e,r){u(e,t,r),f(t,s),f(s,p),f(t,g),f(t,m),f(m,w),f(t,x)},p(e,t){1&t&&E!==(E=e[1].titre+"")&&v(p,E),1&t&&m.src!==(y=q+e[1].video.url)&&d(m,"src",y),1&t&&j!==(j=q+e[1].cover.url)&&d(m,"poster",j)},d(e){e&&i(t)}}}function x(e){let t,s=e[0],o=[];for(let t=0;t<s.length;t+=1)o[t]=j(y(e,s,t));return{c(){t=r("div");for(let e=0;e<o.length;e+=1)o[e].c();this.h()},l(e){t=c(e,"DIV",{class:!0});var s=l(t);for(let e=0;e<o.length;e+=1)o[e].l(s);s.forEach(i),this.h()},h(){d(t,"class","container svelte-86c2or")},m(e,s){u(e,t,s);for(let e=0;e<o.length;e+=1)o[e].m(t,null)},p(e,[r]){if(1&r){let a;for(s=e[0],a=0;a<s.length;a+=1){const c=y(e,s,a);o[a]?o[a].p(c,r):(o[a]=j(c),o[a].c(),o[a].m(t,null))}for(;a<o.length;a+=1)o[a].d(1);o.length=s.length}},i:p,o:p,d(e){e&&i(t),g(o,e)}}}const E=m`
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
`;async function k(){const e=new w({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch});return{videos:(await e.query({query:E})).data.jpvideos}}let q="https://www.grldfaure.xyz";function D(e,t,s){let{videos:r}=t;return e.$$set=e=>{"videos"in e&&s(0,r=e.videos)},[r]}export default class extends e{constructor(e){super(),t(this,e,D,x,s,{videos:0})}}export{k as preload};
