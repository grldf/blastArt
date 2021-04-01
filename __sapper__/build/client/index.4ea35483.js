import{S as t,i as s,s as e,e as a,a as n,t as c,q as o,c as r,d as i,b as u,j as d,k as l,f as h,g as f,h as m,p as g,n as p,H as v}from"./client.272e43a8.js";import{t as w}from"./snarkdown.es.257e5e6b.js";import{g as y,D as b}from"./bundle.esm.a297de33.js";function q(t){let s,e,y,b,q,x,j,k=t[0].titre+"",C=w(t[0].conditions)+"";return{c(){s=a("meta"),e=n(),y=a("div"),b=a("h1"),q=c(k),x=n(),this.h()},l(t){const a=o('[data-svelte="svelte-7w8by5"]',document.head);s=r(a,"META",{name:!0,content:!0}),a.forEach(i),e=u(t),y=r(t,"DIV",{class:!0});var n=d(y);b=r(n,"H1",{class:!0});var c=d(b);q=l(c,k),c.forEach(i),x=u(n),n.forEach(i),this.h()},h(){h(s,"name","robots"),h(s,"content","noindex"),document.title="CGV/CGU",h(b,"class","svelte-1neoukf"),j=new v(null),h(y,"class","content svelte-1neoukf")},m(t,a){f(document.head,s),m(t,e,a),m(t,y,a),f(y,b),f(b,q),f(y,x),j.m(C,y)},p(t,[s]){1&s&&k!==(k=t[0].titre+"")&&g(q,k),1&s&&C!==(C=w(t[0].conditions)+"")&&j.p(C)},i:p,o:p,d(t){i(s),t&&i(e),t&&i(y)}}}const x=y`
	query cgv {
        ccvCgu(id:"1"){
            id
            titre
            conditions
      }
    }   
  `;async function j(){const t=new b({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch});return{cgu:(await t.query({query:x})).data.ccvCgu}}function k(t,s,e){let{cgu:a}=s;return t.$$set=t=>{"cgu"in t&&e(0,a=t.cgu)},[a]}export default class extends t{constructor(t){super(),s(this,t,k,q,e,{cgu:0})}}export{j as preload};
