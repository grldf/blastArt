import{S as s,i as e,s as t,e as a,t as r,j as l,c as n,a as c,b as o,d as i,k as h,f,l as m,g as u,h as d,m as p,q as g,n as v,o as q}from"./client.a88bf99a.js";import{g as k,D as b}from"./bundle.esm.a297de33.js";function y(s,e,t){const a=s.slice();return a[1]=e[t],a[3]=t,a}function E(s){let e,t,g,v,q,k,b,y,E,w,x,I,D,L=s[1].nom+"",z=s[1].description+"";return{c(){e=a("div"),t=a("article"),g=a("h2"),v=r(L),q=l(),k=a("p"),b=r(z),y=l(),E=a("aside"),w=a("img"),D=l(),this.h()},l(s){e=n(s,"DIV",{class:!0});var a=c(e);t=n(a,"ARTICLE",{class:!0});var r=c(t);g=n(r,"H2",{class:!0});var l=c(g);v=o(l,L),l.forEach(i),q=h(r),k=n(r,"P",{class:!0});var f=c(k);b=o(f,z),f.forEach(i),r.forEach(i),y=h(a),E=n(a,"ASIDE",{class:!0});var m=c(E);w=n(m,"IMG",{src:!0,alt:!0,class:!0}),m.forEach(i),D=h(a),a.forEach(i),this.h()},h(){f(g,"class","svelte-1nqn5kh"),f(k,"class","svelte-1nqn5kh"),f(t,"class","svelte-1nqn5kh"),w.src!==(x=j+s[1].profilimage.url)&&f(w,"src",x),f(w,"alt",I="portrait de "+s[1].nom),f(w,"class","svelte-1nqn5kh"),f(E,"class","svelte-1nqn5kh"),f(e,"class",m(s[3]%2==0?"impair":"pair")+" svelte-1nqn5kh")},m(s,a){u(s,e,a),d(e,t),d(t,g),d(g,v),d(t,q),d(t,k),d(k,b),d(e,y),d(e,E),d(E,w),d(e,D)},p(s,e){1&e&&L!==(L=s[1].nom+"")&&p(v,L),1&e&&z!==(z=s[1].description+"")&&p(b,z),1&e&&w.src!==(x=j+s[1].profilimage.url)&&f(w,"src",x),1&e&&I!==(I="portrait de "+s[1].nom)&&f(w,"alt",I)},d(s){s&&i(e)}}}function w(s){let e,t,r,o=s[0],m=[];for(let e=0;e<o.length;e+=1)m[e]=E(y(s,o,e));return{c(){e=a("link"),t=l(),r=a("div");for(let s=0;s<m.length;s+=1)m[s].c();this.h()},l(s){const a=g('[data-svelte="svelte-1ysmkuu"]',document.head);e=n(a,"LINK",{rel:!0,href:!0}),a.forEach(i),t=h(s),r=n(s,"DIV",{class:!0});var l=c(r);for(let s=0;s<m.length;s+=1)m[s].l(l);l.forEach(i),this.h()},h(){document.title="Le collectif",f(e,"rel","stylesheet"),f(e,"href","https://use.typekit.net/ixn1cjn.css"),f(r,"class","content svelte-1nqn5kh")},m(s,a){d(document.head,e),u(s,t,a),u(s,r,a);for(let s=0;s<m.length;s+=1)m[s].m(r,null)},p(s,[e]){if(1&e){let t;for(o=s[0],t=0;t<o.length;t+=1){const a=y(s,o,t);m[t]?m[t].p(a,e):(m[t]=E(a),m[t].c(),m[t].m(r,null))}for(;t<m.length;t+=1)m[t].d(1);m.length=o.length}},i:v,o:v,d(s){i(e),s&&i(t),s&&i(r),q(m,s)}}}const x=k`
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
    `;async function I(){const s=new b({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch});return{membres:(await s.query({query:x})).data.collectifs}}let j="https://www.grldfaure.xyz";function D(s,e,t){let{membres:a}=e;return s.$$set=s=>{"membres"in s&&t(0,a=s.membres)},[a]}export default class extends s{constructor(s){super(),e(this,s,D,w,t,{membres:0})}}export{I as preload};
