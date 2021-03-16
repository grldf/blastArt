import{S as s,i as t,s as e,a,e as c,t as n,C as r,f as o,g as i,c as u,b as d,d as l,h,k as f,l as m,m as g,n as p,H as v}from"./client.ab037dde.js";import{t as w}from"./snarkdown.es.257e5e6b.js";import{g as y,D as b}from"./bundle.esm.a297de33.js";function k(s){let t,e,y,b,k,q,x=s[0].titre+"",j=w(s[0].conditions)+"";return{c(){t=a(),e=c("div"),y=c("h1"),b=n(x),k=a(),this.h()},l(s){r('[data-svelte="svelte-1067mrn"]',document.head).forEach(o),t=i(s),e=u(s,"DIV",{class:!0});var a=d(e);y=u(a,"H1",{class:!0});var c=d(y);b=l(c,x),c.forEach(o),k=i(a),a.forEach(o),this.h()},h(){document.title="",h(y,"class","svelte-1neoukf"),q=new v(null),h(e,"class","content svelte-1neoukf")},m(s,a){f(s,t,a),f(s,e,a),m(e,y),m(y,b),m(e,k),q.m(j,e)},p(s,[t]){1&t&&x!==(x=s[0].titre+"")&&g(b,x),1&t&&j!==(j=w(s[0].conditions)+"")&&q.p(j)},i:p,o:p,d(s){s&&o(t),s&&o(e)}}}const q=y`
	query cgv {
        ccvCgu(id:"1"){
            id
            titre
            conditions
      }
    }   
  `;async function x(){const s=new b({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch});return{cgu:(await s.query({query:q})).data.ccvCgu}}function j(s,t,e){let{cgu:a}=t;return s.$$set=s=>{"cgu"in s&&e(0,a=s.cgu)},[a]}export default class extends s{constructor(s){super(),t(this,s,j,k,e,{cgu:0})}}export{x as preload};
