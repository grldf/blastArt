import{S as t,i as e,s,e as l,t as r,a,c,b as n,k as i,d as o,f as h,g as u,h as f,j as d,m,q as g,n as p,o as v}from"./client.a2125502.js";import{g as w,D as b}from"./bundle.esm.a297de33.js";function j(t,e,s){const l=t.slice();return l[1]=e[s],l[3]=s,l}function y(t){let e,s,r;return{c(){e=l("img"),this.h()},l(t){e=c(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){e.src!==(s=k+t[1].image.url)&&u(e,"src",s),u(e,"alt",r=t[1].titre),u(e,"class","svelte-r57j7b")},m(t,s){f(t,e,s)},p(t,l){1&l&&e.src!==(s=k+t[1].image.url)&&u(e,"src",s),1&l&&r!==(r=t[1].titre)&&u(e,"alt",r)},d(t){t&&o(e)}}}function E(t){let e,s;return{c(){e=l("img"),this.h()},l(t){e=c(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){e.src!==(s="logo-512.png")&&u(e,"src","logo-512.png"),u(e,"alt","Blast logo"),u(e,"class","svelte-r57j7b")},m(t,s){f(t,e,s)},p:p,d(t){t&&o(e)}}}function I(t){let e,s,g,p,v,w,b,j,I,x,q=t[1].titre+"",D=t[1].contenu+"";function k(t,e){return null===t[1].image?E:y}let L=k(t),z=L(t);return{c(){e=l("div"),s=l("article"),g=l("h2"),p=r(q),v=a(),w=l("p"),b=r(D),j=a(),I=l("aside"),z.c(),x=a(),this.h()},l(t){e=c(t,"DIV",{class:!0});var l=n(e);s=c(l,"ARTICLE",{class:!0});var r=n(s);g=c(r,"H2",{class:!0});var a=n(g);p=i(a,q),a.forEach(o),v=h(r),w=c(r,"P",{class:!0});var u=n(w);b=i(u,D),u.forEach(o),r.forEach(o),j=h(l),I=c(l,"ASIDE",{class:!0});var f=n(I);z.l(f),f.forEach(o),x=h(l),l.forEach(o),this.h()},h(){u(g,"class","svelte-r57j7b"),u(w,"class","svelte-r57j7b"),u(s,"class","svelte-r57j7b"),u(I,"class","svelte-r57j7b"),u(e,"class","impair svelte-r57j7b")},m(t,l){f(t,e,l),d(e,s),d(s,g),d(g,p),d(s,v),d(s,w),d(w,b),d(e,j),d(e,I),z.m(I,null),d(e,x)},p(t,e){1&e&&q!==(q=t[1].titre+"")&&m(p,q),1&e&&D!==(D=t[1].contenu+"")&&m(b,D),L===(L=k(t))&&z?z.p(t,e):(z.d(1),z=L(t),z&&(z.c(),z.m(I,null)))},d(t){t&&o(e),z.d()}}}function x(t){let e,s,r,i=t[0],m=[];for(let e=0;e<i.length;e+=1)m[e]=I(j(t,i,e));return{c(){e=l("link"),s=a(),r=l("div");for(let t=0;t<m.length;t+=1)m[t].c();this.h()},l(t){const l=g('[data-svelte="svelte-de5yl2"]',document.head);e=c(l,"LINK",{rel:!0,href:!0}),l.forEach(o),s=h(t),r=c(t,"DIV",{class:!0});var a=n(r);for(let t=0;t<m.length;t+=1)m[t].l(a);a.forEach(o),this.h()},h(){document.title="Le collectif",u(e,"rel","stylesheet"),u(e,"href","https://use.typekit.net/ixn1cjn.css"),u(r,"class","content svelte-r57j7b")},m(t,l){d(document.head,e),f(t,s,l),f(t,r,l);for(let t=0;t<m.length;t+=1)m[t].m(r,null)},p(t,[e]){if(1&e){let s;for(i=t[0],s=0;s<i.length;s+=1){const l=j(t,i,s);m[s]?m[s].p(l,e):(m[s]=I(l),m[s].c(),m[s].m(r,null))}for(;s<m.length;s+=1)m[s].d(1);m.length=i.length}},i:p,o:p,d(t){o(e),t&&o(s),t&&o(r),v(m,t)}}}const q=w`
    query membre {
      nouvelles(sort: "id:desc") {
        id
        titre
        contenu
        datePublication
        image {
          url
        }
      }
    }
  `;async function D(){const t=new b({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch});return{news:(await t.query({query:q})).data.nouvelles}}let k="https://www.grldfaure.xyz";function L(t,e,s){let{news:l}=e;return t.$$set=t=>{"news"in t&&s(0,l=t.news)},[l]}export default class extends t{constructor(t){super(),e(this,t,L,x,s,{news:0})}}export{D as preload};