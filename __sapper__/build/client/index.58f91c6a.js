import{S as s,i as t,s as e,e as l,a as r,o as a,q as c,f as n,l as o,d as i,g as h,r as f,h as p,n as u,u as d,v as m,w as v,y as g,z as y,p as E}from"./client.41c686f9.js";import{g as I,D as q}from"./bundle.esm.a297de33.js";function w(s,t,e){const l=s.slice();return l[1]=t[e],l[3]=e,l}function x(s){let t,e;return{c(){t=l("div"),e=d("FUCK"),this.h()},l(s){t=n(s,"DIV",{class:!0});var l=m(t);e=v(l,"FUCK"),l.forEach(o),this.h()},h(){h(t,"class","test svelte-ncelfp")},m(s,l){p(s,t,l),f(t,e)},p:u,d(s){s&&o(t)}}}function D(s){let t,e=s[0],r=[];for(let t=0;t<e.length;t+=1)r[t]=j(w(s,e,t));return{c(){t=l("div");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){t=n(s,"DIV",{class:!0});var e=m(t);for(let s=0;s<r.length;s+=1)r[s].l(e);e.forEach(o),this.h()},h(){h(t,"class","content svelte-ncelfp")},m(s,e){p(s,t,e);for(let s=0;s<r.length;s+=1)r[s].m(t,null)},p(s,l){if(1&l){let a;for(e=s[0],a=0;a<e.length;a+=1){const c=w(s,e,a);r[a]?r[a].p(c,l):(r[a]=j(c),r[a].c(),r[a].m(t,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=e.length}},d(s){s&&o(t),E(r,s)}}}function j(s){let t,e,a,c,u,E,I,q,w,x,D,j,k,z=s[1].nom+"",C=s[1].description+"";return{c(){t=l("div"),e=l("article"),a=l("h2"),c=d(z),u=r(),E=l("p"),I=d(C),q=r(),w=l("aside"),x=l("img"),k=r(),this.h()},l(s){t=n(s,"DIV",{class:!0});var l=m(t);e=n(l,"ARTICLE",{class:!0});var r=m(e);a=n(r,"H2",{class:!0});var h=m(a);c=v(h,z),h.forEach(o),u=i(r),E=n(r,"P",{class:!0});var f=m(E);I=v(f,C),f.forEach(o),r.forEach(o),q=i(l),w=n(l,"ASIDE",{class:!0});var p=m(w);x=n(p,"IMG",{src:!0,alt:!0,class:!0}),p.forEach(o),k=i(l),l.forEach(o),this.h()},h(){h(a,"class","svelte-ncelfp"),h(E,"class","svelte-ncelfp"),h(e,"class","svelte-ncelfp"),x.src!==(D=K+s[1].profilimage.url)&&h(x,"src",D),h(x,"alt",j="portrait de "+s[1].nom),h(x,"class","svelte-ncelfp"),h(w,"class","svelte-ncelfp"),h(t,"class",g(s[3]%2==0?"impair":"pair")+" svelte-ncelfp")},m(s,l){p(s,t,l),f(t,e),f(e,a),f(a,c),f(e,u),f(e,E),f(E,I),f(t,q),f(t,w),f(w,x),f(t,k)},p(s,t){1&t&&z!==(z=s[1].nom+"")&&y(c,z),1&t&&C!==(C=s[1].description+"")&&y(I,C),1&t&&x.src!==(D=K+s[1].profilimage.url)&&h(x,"src",D),1&t&&j!==(j="portrait de "+s[1].nom)&&h(x,"alt",j)},d(s){s&&o(t)}}}function k(s){let t,e,d;function m(s,t){return s[0]?D:x}let v=m(s),g=v(s);return{c(){t=l("link"),e=r(),g.c(),d=a(),this.h()},l(s){const l=c('[data-svelte="svelte-1ysmkuu"]',document.head);t=n(l,"LINK",{rel:!0,href:!0}),l.forEach(o),e=i(s),g.l(s),d=a(),this.h()},h(){document.title="Le collectif",h(t,"rel","stylesheet"),h(t,"href","https://use.typekit.net/ixn1cjn.css")},m(s,l){f(document.head,t),p(s,e,l),g.m(s,l),p(s,d,l)},p(s,[t]){v===(v=m(s))&&g?g.p(s,t):(g.d(1),g=v(s),g&&(g.c(),g.m(d.parentNode,d)))},i:u,o:u,d(s){o(t),s&&o(e),g.d(s),s&&o(d)}}}const z=I`
      query membre {
        collectifs(sort: "id:asc") {
          id
          nom
          description
          profilimage {
            url
          }
        }
      }
    `;async function C({params:s,query:t}){const e=new q({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch});return{posts:(await e.query({query:z})).data.collectifs}}let K="https://grldfaure.xyz";function L(s,t,e){let{posts:l}=t;return s.$$set=s=>{"posts"in s&&e(0,l=s.posts)},[l]}export default class extends s{constructor(s){super(),t(this,s,L,k,e,{posts:0})}}export{C as preload};
