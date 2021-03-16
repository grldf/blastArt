import{S as s,i as t,s as a,j as e,e as c,t as n,q as r,d as o,k as i,c as u,a as l,b as d,f,g as h,h as m,m as g,n as p,H as v}from"./client.a88bf99a.js";import{t as w}from"./snarkdown.es.257e5e6b.js";import{g as q,D as y}from"./bundle.esm.a297de33.js";function b(s){let t,a,q,y,b,j,k=s[0].titre+"",x=w(s[0].conditions)+"";return{c(){t=e(),a=c("div"),q=c("h1"),y=n(k),b=e(),this.h()},l(s){r('[data-svelte="svelte-1067mrn"]',document.head).forEach(o),t=i(s),a=u(s,"DIV",{class:!0});var e=l(a);q=u(e,"H1",{class:!0});var c=l(q);y=d(c,k),c.forEach(o),b=i(e),e.forEach(o),this.h()},h(){document.title="",f(q,"class","svelte-1neoukf"),j=new v(null),f(a,"class","content svelte-1neoukf")},m(s,e){h(s,t,e),h(s,a,e),m(a,q),m(q,y),m(a,b),j.m(x,a)},p(s,[t]){1&t&&k!==(k=s[0].titre+"")&&g(y,k),1&t&&x!==(x=w(s[0].conditions)+"")&&j.p(x)},i:p,o:p,d(s){s&&o(t),s&&o(a)}}}const j=q`
	query cgv {
        ccvCgu(id:"1"){
            id
            titre
            conditions
      }
    }   
  `;async function k(){const s=new y({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch});return{cgu:(await s.query({query:j})).data.ccvCgu}}function x(s,t,a){let{cgu:e}=t;return s.$$set=s=>{"cgu"in s&&a(0,e=s.cgu)},[e]}export default class extends s{constructor(s){super(),t(this,s,x,b,a,{cgu:0})}}export{k as preload};
