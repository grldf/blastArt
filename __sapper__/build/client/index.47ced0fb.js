import{S as t,i as s,s as e,e as a,a as n,u as c,q as o,f as r,l as i,d as u,v as d,w as l,g as h,r as f,h as m,z as g,n as v,H as p}from"./client.c2c8dc15.js";import{t as w}from"./snarkdown.es.257e5e6b.js";import{g as y,D as q}from"./bundle.esm.a297de33.js";function x(t){let s,e,y,q,x,b,C,E=t[0].titre+"",j=w(t[0].conditions)+"";return{c(){s=a("meta"),e=n(),y=a("div"),q=a("h1"),x=c(E),b=n(),this.h()},l(t){const a=o('[data-svelte="svelte-7w8by5"]',document.head);s=r(a,"META",{name:!0,content:!0}),a.forEach(i),e=u(t),y=r(t,"DIV",{class:!0});var n=d(y);q=r(n,"H1",{class:!0});var c=d(q);x=l(c,E),c.forEach(i),b=u(n),n.forEach(i),this.h()},h(){h(s,"name","robots"),h(s,"content","noindex"),document.title="CGV/CGU",h(q,"class","svelte-1neoukf"),C=new p(null),h(y,"class","content svelte-1neoukf")},m(t,a){f(document.head,s),m(t,e,a),m(t,y,a),f(y,q),f(q,x),f(y,b),C.m(j,y)},p(t,[s]){1&s&&E!==(E=t[0].titre+"")&&g(x,E),1&s&&j!==(j=w(t[0].conditions)+"")&&C.p(j)},i:v,o:v,d(t){i(s),t&&i(e),t&&i(y)}}}const b=y`
	query cgv {
        ccvCgu(id:"1"){
            id
            titre
            conditions
      }
    }   
  `;async function C(){const t=new q({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch});return{cgu:(await t.query({query:b})).data.ccvCgu}}function E(t,s,e){let{cgu:a}=s;return t.$$set=t=>{"cgu"in t&&e(0,a=t.cgu)},[a]}export default class extends t{constructor(t){super(),s(this,t,E,x,e,{cgu:0})}}export{C as preload};
