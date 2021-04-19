import{S as t,i as s,s as e,e as a,a as n,v as c,u as o,f as r,h as i,d as u,g as d,w as l,j as h,l as f,k as m,z as g,n as v,H as p}from"./client.ef929a7a.js";import{t as w}from"./snarkdown.es.257e5e6b.js";import{g as y,D as x}from"./bundle.esm.a297de33.js";function b(t){let s,e,y,x,b,j,k,q=t[0].titre+"",C=w(t[0].conditions)+"";return{c(){s=a("meta"),e=n(),y=a("div"),x=a("h1"),b=c(q),j=n(),this.h()},l(t){const a=o('[data-svelte="svelte-7w8by5"]',document.head);s=r(a,"META",{name:!0,content:!0}),a.forEach(i),e=u(t),y=r(t,"DIV",{class:!0});var n=d(y);x=r(n,"H1",{class:!0});var c=d(x);b=l(c,q),c.forEach(i),j=u(n),n.forEach(i),this.h()},h(){h(s,"name","robots"),h(s,"content","noindex"),document.title="CGV/CGU",h(x,"class","svelte-1neoukf"),k=new p(null),h(y,"class","content svelte-1neoukf")},m(t,a){f(document.head,s),m(t,e,a),m(t,y,a),f(y,x),f(x,b),f(y,j),k.m(C,y)},p(t,[s]){1&s&&q!==(q=t[0].titre+"")&&g(b,q),1&s&&C!==(C=w(t[0].conditions)+"")&&k.p(C)},i:v,o:v,d(t){i(s),t&&i(e),t&&i(y)}}}const j=y`
	query cgv {
        ccvCgu(id:"1"){
            id
            titre
            conditions
      }
    }   
  `;async function k(){const t=new x({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch});return{cgu:(await t.query({query:j})).data.ccvCgu}}function q(t,s,e){let{cgu:a}=s;return t.$$set=t=>{"cgu"in t&&e(0,a=t.cgu)},[a]}export default class extends t{constructor(t){super(),s(this,t,q,b,e,{cgu:0})}}export{k as preload};
