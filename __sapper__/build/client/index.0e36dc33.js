import{S as s,i as t,s as e,a,e as c,t as n,q as r,d as o,f as i,c as u,b as l,k as d,g as h,h as f,j as g,p as m,n as p,H as v}from"./client.bb5bc507.js";import{t as w}from"./snarkdown.es.257e5e6b.js";import{g as b,D as q}from"./bundle.esm.a297de33.js";function y(s){let t,e,b,q,y,j,k=s[0].titre+"",x=w(s[0].conditions)+"";return{c(){t=a(),e=c("div"),b=c("h1"),q=n(k),y=a(),this.h()},l(s){r('[data-svelte="svelte-1067mrn"]',document.head).forEach(o),t=i(s),e=u(s,"DIV",{class:!0});var a=l(e);b=u(a,"H1",{class:!0});var c=l(b);q=d(c,k),c.forEach(o),y=i(a),a.forEach(o),this.h()},h(){document.title="",h(b,"class","svelte-1neoukf"),j=new v(null),h(e,"class","content svelte-1neoukf")},m(s,a){f(s,t,a),f(s,e,a),g(e,b),g(b,q),g(e,y),j.m(x,e)},p(s,[t]){1&t&&k!==(k=s[0].titre+"")&&m(q,k),1&t&&x!==(x=w(s[0].conditions)+"")&&j.p(x)},i:p,o:p,d(s){s&&o(t),s&&o(e)}}}const j=b`
	query cgv {
        ccvCgu(id:"1"){
            id
            titre
            conditions
      }
    }   
  `;async function k(){const s=new q({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch});return{cgu:(await s.query({query:j})).data.ccvCgu}}function x(s,t,e){let{cgu:a}=t;return s.$$set=s=>{"cgu"in s&&e(0,a=s.cgu)},[a]}export default class extends s{constructor(s){super(),t(this,s,x,y,e,{cgu:0})}}export{k as preload};
