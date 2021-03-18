import{S as s,i as t,s as e,a,e as c,t as n,q as r,d as o,f as i,c as u,b as l,k as d,g as f,h,j as g,p as m,n as p,H as v}from"./client.cfe4a725.js";import{t as w}from"./snarkdown.es.257e5e6b.js";import{g as q,D as y}from"./bundle.esm.a297de33.js";function j(s){let t,e,q,y,j,k,x=s[0].titre+"",b=w(s[0].conditions)+"";return{c(){t=a(),e=c("div"),q=c("h1"),y=n(x),j=a(),this.h()},l(s){r('[data-svelte="svelte-1067mrn"]',document.head).forEach(o),t=i(s),e=u(s,"DIV",{class:!0});var a=l(e);q=u(a,"H1",{class:!0});var c=l(q);y=d(c,x),c.forEach(o),j=i(a),a.forEach(o),this.h()},h(){document.title="",f(q,"class","svelte-1neoukf"),k=new v(null),f(e,"class","content svelte-1neoukf")},m(s,a){h(s,t,a),h(s,e,a),g(e,q),g(q,y),g(e,j),k.m(b,e)},p(s,[t]){1&t&&x!==(x=s[0].titre+"")&&m(y,x),1&t&&b!==(b=w(s[0].conditions)+"")&&k.p(b)},i:p,o:p,d(s){s&&o(t),s&&o(e)}}}const k=q`
	query cgv {
        ccvCgu(id:"1"){
            id
            titre
            conditions
      }
    }   
  `;async function x(){const s=new y({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch});return{cgu:(await s.query({query:k})).data.ccvCgu}}function b(s,t,e){let{cgu:a}=t;return s.$$set=s=>{"cgu"in s&&e(0,a=s.cgu)},[a]}export default class extends s{constructor(s){super(),t(this,s,b,j,e,{cgu:0})}}export{x as preload};
