import{S as t,i as e,s,e as r,t as o,a as c,c as a,j as l,k as n,d as i,b as d,f as h,h as u,g as f,p as v,n as p,r as g}from"./client.91ddd4cb.js";import{g as m,D as w}from"./bundle.esm.a297de33.js";function y(t,e,s){const r=t.slice();return r[1]=e[s],r}function j(t){let e,s,p,g,m,w,y,j,x,E=t[1].titre+"";return{c(){e=r("div"),s=r("h3"),p=o(E),g=c(),m=r("video"),w=r("track"),x=c(),this.h()},l(t){e=a(t,"DIV",{});var r=l(e);s=a(r,"H3",{});var o=l(s);p=n(o,E),o.forEach(i),g=d(r),m=a(r,"VIDEO",{src:!0,controls:!0,poster:!0,type:!0,class:!0});var c=l(m);w=a(c,"TRACK",{kind:!0}),c.forEach(i),x=d(r),r.forEach(i),this.h()},h(){h(w,"kind","captions"),m.src!==(y=q+t[1].video.url)&&h(m,"src",y),m.controls=!0,h(m,"poster",j=q+t[1].cover.url),h(m,"type","video/mp4"),h(m,"class","svelte-86c2or")},m(t,r){u(t,e,r),f(e,s),f(s,p),f(e,g),f(e,m),f(m,w),f(e,x)},p(t,e){1&e&&E!==(E=t[1].titre+"")&&v(p,E),1&e&&m.src!==(y=q+t[1].video.url)&&h(m,"src",y),1&e&&j!==(j=q+t[1].cover.url)&&h(m,"poster",j)},d(t){t&&i(e)}}}function x(t){let e,s=t[0],o=[];for(let e=0;e<s.length;e+=1)o[e]=j(y(t,s,e));return{c(){e=r("div");for(let t=0;t<o.length;t+=1)o[t].c();this.h()},l(t){e=a(t,"DIV",{class:!0});var s=l(e);for(let t=0;t<o.length;t+=1)o[t].l(s);s.forEach(i),this.h()},h(){h(e,"class","container svelte-86c2or")},m(t,s){u(t,e,s);for(let t=0;t<o.length;t+=1)o[t].m(e,null)},p(t,[r]){if(1&r){let c;for(s=t[0],c=0;c<s.length;c+=1){const a=y(t,s,c);o[c]?o[c].p(a,r):(o[c]=j(a),o[c].c(),o[c].m(e,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=s.length}},i:p,o:p,d(t){t&&i(e),g(o,t)}}}const E=m`
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
`;async function k(){const t=new w({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch});return{videos:(await t.query({query:E})).data.jpvideos}}let q="https://www.grldfaure.xyz";function D(t,e,s){let{videos:r}=e;return t.$$set=t=>{"videos"in t&&s(0,r=t.videos)},[r]}export default class extends t{constructor(t){super(),e(this,t,D,x,s,{videos:0})}}export{k as preload};
