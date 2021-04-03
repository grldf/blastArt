import{S as e,i as r,s as t,e as s,u as o,a as l,f as a,v as c,w as n,l as i,d,g as h,h as u,r as f,z as v,n as p,p as g}from"./client.50d1fdc7.js";import{g as m,D as w}from"./bundle.esm.a297de33.js";function y(e,r,t){const s=e.slice();return s[1]=r[t],s}function x(e){let r,t,p,g,m,w,y,x,E,j=e[1].titre+"";return{c(){r=s("div"),t=s("h3"),p=o(j),g=l(),m=s("video"),w=s("track"),E=l(),this.h()},l(e){r=a(e,"DIV",{});var s=c(r);t=a(s,"H3",{});var o=c(t);p=n(o,j),o.forEach(i),g=d(s),m=a(s,"VIDEO",{src:!0,controls:!0,poster:!0,type:!0,preload:!0,class:!0});var l=c(m);w=a(l,"TRACK",{kind:!0}),l.forEach(i),E=d(s),s.forEach(i),this.h()},h(){h(w,"kind","captions"),m.src!==(y=D+e[1].video.url)&&h(m,"src",y),m.controls=!0,h(m,"poster",x=D+e[1].cover.url),h(m,"type","video/mp4"),h(m,"preload","none"),h(m,"class","svelte-86c2or")},m(e,s){u(e,r,s),f(r,t),f(t,p),f(r,g),f(r,m),f(m,w),f(r,E)},p(e,r){1&r&&j!==(j=e[1].titre+"")&&v(p,j),1&r&&m.src!==(y=D+e[1].video.url)&&h(m,"src",y),1&r&&x!==(x=D+e[1].cover.url)&&h(m,"poster",x)},d(e){e&&i(r)}}}function E(e){let r,t=e[0],o=[];for(let r=0;r<t.length;r+=1)o[r]=x(y(e,t,r));return{c(){r=s("div");for(let e=0;e<o.length;e+=1)o[e].c();this.h()},l(e){r=a(e,"DIV",{class:!0});var t=c(r);for(let e=0;e<o.length;e+=1)o[e].l(t);t.forEach(i),this.h()},h(){h(r,"class","container svelte-86c2or")},m(e,t){u(e,r,t);for(let e=0;e<o.length;e+=1)o[e].m(r,null)},p(e,[s]){if(1&s){let l;for(t=e[0],l=0;l<t.length;l+=1){const a=y(e,t,l);o[l]?o[l].p(a,s):(o[l]=x(a),o[l].c(),o[l].m(r,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=t.length}},i:p,o:p,d(e){e&&i(r),g(o,e)}}}const j=m`
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
`;async function q(){const e=new w({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch});return{videos:(await e.query({query:j})).data.jpvideos}}let D="https://www.grldfaure.xyz";function k(e,r,t){let{videos:s}=r;return e.$$set=e=>{"videos"in e&&t(0,s=e.videos)},[s]}export default class extends e{constructor(e){super(),r(this,e,k,E,t,{videos:0})}}export{q as preload};
