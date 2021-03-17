import{S as s,i as t,s as e,a,e as c,t as n,q as r,d as o,f as i,c as u,b as d,k as l,g as f,h,j as g,o as m,n as p,H as v}from"./client.1de7feb3.js";import{t as w}from"./snarkdown.es.257e5e6b.js";import{g as q,D as y}from"./bundle.esm.a297de33.js";function b(s){let t,e,q,y,b,j,k=s[0].titre+"",x=w(s[0].conditions)+"";return{c(){t=a(),e=c("div"),q=c("h1"),y=n(k),b=a(),this.h()},l(s){r('[data-svelte="svelte-1067mrn"]',document.head).forEach(o),t=i(s),e=u(s,"DIV",{class:!0});var a=d(e);q=u(a,"H1",{class:!0});var c=d(q);y=l(c,k),c.forEach(o),b=i(a),a.forEach(o),this.h()},h(){document.title="",f(q,"class","svelte-1neoukf"),j=new v(null),f(e,"class","content svelte-1neoukf")},m(s,a){h(s,t,a),h(s,e,a),g(e,q),g(q,y),g(e,b),j.m(x,e)},p(s,[t]){1&t&&k!==(k=s[0].titre+"")&&m(y,k),1&t&&x!==(x=w(s[0].conditions)+"")&&j.p(x)},i:p,o:p,d(s){s&&o(t),s&&o(e)}}}const j=q`
	query cgv {
        ccvCgu(id:"1"){
            id
            titre
            conditions
      }
    }   
  `;async function k(){const s=new y({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch});return{cgu:(await s.query({query:j})).data.ccvCgu}}function x(s,t,e){let{cgu:a}=t;return s.$$set=s=>{"cgu"in s&&e(0,a=s.cgu)},[a]}export default class extends s{constructor(s){super(),t(this,s,x,b,e,{cgu:0})}}export{k as preload};
