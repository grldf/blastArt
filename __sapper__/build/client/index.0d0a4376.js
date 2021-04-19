import{S as t,i as s,s as e,e as a,a as n,v as c,u as o,f as r,h as i,d as u,g as d,w as l,j as f,l as h,k as m,z as g,n as v,H as p}from"./client.f1ec1fbb.js";import{t as w}from"./snarkdown.es.257e5e6b.js";import{g as b,D as y}from"./bundle.esm.a297de33.js";function x(t){let s,e,b,y,x,j,k,q=t[0].titre+"",C=w(t[0].conditions)+"";return{c(){s=a("meta"),e=n(),b=a("div"),y=a("h1"),x=c(q),j=n(),this.h()},l(t){const a=o('[data-svelte="svelte-7w8by5"]',document.head);s=r(a,"META",{name:!0,content:!0}),a.forEach(i),e=u(t),b=r(t,"DIV",{class:!0});var n=d(b);y=r(n,"H1",{class:!0});var c=d(y);x=l(c,q),c.forEach(i),j=u(n),n.forEach(i),this.h()},h(){f(s,"name","robots"),f(s,"content","noindex"),document.title="CGV/CGU",f(y,"class","svelte-1neoukf"),k=new p(null),f(b,"class","content svelte-1neoukf")},m(t,a){h(document.head,s),m(t,e,a),m(t,b,a),h(b,y),h(y,x),h(b,j),k.m(C,b)},p(t,[s]){1&s&&q!==(q=t[0].titre+"")&&g(x,q),1&s&&C!==(C=w(t[0].conditions)+"")&&k.p(C)},i:v,o:v,d(t){i(s),t&&i(e),t&&i(b)}}}const j=b`
	query cgv {
        ccvCgu(id:"1"){
            id
            titre
            conditions
      }
    }   
  `;async function k(){const t=new y({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch});return{cgu:(await t.query({query:j})).data.ccvCgu}}function q(t,s,e){let{cgu:a}=s;return t.$$set=t=>{"cgu"in t&&e(0,a=t.cgu)},[a]}export default class extends t{constructor(t){super(),s(this,t,q,x,e,{cgu:0})}}export{k as preload};
