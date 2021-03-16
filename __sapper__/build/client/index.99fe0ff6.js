import{S as s,i as t,s as e,a,e as c,t as n,C as r,f as o,g as i,c as u,b as l,d,h as f,k as h,l as m,m as g,n as p,H as v}from"./client.6734fbbd.js";import{t as w}from"./snarkdown.es.257e5e6b.js";import{g as b,D as y}from"./bundle.esm.a297de33.js";function k(s){let t,e,b,y,k,q,x=s[0].titre+"",j=w(s[0].conditions)+"";return{c(){t=a(),e=c("div"),b=c("h1"),y=n(x),k=a(),this.h()},l(s){r('[data-svelte="svelte-1067mrn"]',document.head).forEach(o),t=i(s),e=u(s,"DIV",{class:!0});var a=l(e);b=u(a,"H1",{class:!0});var c=l(b);y=d(c,x),c.forEach(o),k=i(a),a.forEach(o),this.h()},h(){document.title="",f(b,"class","svelte-1neoukf"),q=new v(null),f(e,"class","content svelte-1neoukf")},m(s,a){h(s,t,a),h(s,e,a),m(e,b),m(b,y),m(e,k),q.m(j,e)},p(s,[t]){1&t&&x!==(x=s[0].titre+"")&&g(y,x),1&t&&j!==(j=w(s[0].conditions)+"")&&q.p(j)},i:p,o:p,d(s){s&&o(t),s&&o(e)}}}const q=b`
	query cgv {
        ccvCgu(id:"1"){
            id
            titre
            conditions
      }
    }   
  `;async function x(){const s=new y({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch});return{cgu:(await s.query({query:q})).data.ccvCgu}}function j(s,t,e){let{cgu:a}=t;return s.$$set=s=>{"cgu"in s&&e(0,a=s.cgu)},[a]}export default class extends s{constructor(s){super(),t(this,s,j,k,e,{cgu:0})}}export{x as preload};
