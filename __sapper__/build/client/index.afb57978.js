import{S as s,i as t,s as a,a as e,e as n,t as o,w as r,f as c,g as i,c as u,b as l,d,h,k as f,l as p,m,n as v,H as w}from"./client.133bac4b.js";import{t as g}from"./snarkdown.es.257e5e6b.js";import{g as y,D as b}from"./bundle.esm.a297de33.js";function q(s){let t,a,y,b,q,k,x=s[0].titre+"",j=g(s[0].conditions)+"";return{c(){t=e(),a=n("div"),y=n("h1"),b=o(x),q=e(),this.h()},l(s){r('[data-svelte="svelte-1067mrn"]',document.head).forEach(c),t=i(s),a=u(s,"DIV",{class:!0});var e=l(a);y=u(e,"H1",{class:!0});var n=l(y);b=d(n,x),n.forEach(c),q=i(e),e.forEach(c),this.h()},h(){document.title="",h(y,"class","svelte-1neoukf"),k=new w(null),h(a,"class","content svelte-1neoukf")},m(s,e){f(s,t,e),f(s,a,e),p(a,y),p(y,b),p(a,q),k.m(j,a)},p(s,[t]){1&t&&x!==(x=s[0].titre+"")&&m(b,x),1&t&&j!==(j=g(s[0].conditions)+"")&&k.p(j)},i:v,o:v,d(s){s&&c(t),s&&c(a)}}}const k=y`
	query cgv {
        ccvCgu(id:"1"){
            id
            titre
            conditions
      }
    }   
  `;async function x({params:s,query:t}){const a=new b({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch});return{posts:(await a.query({query:k})).data.ccvCgu}}function j(s,t,a){let{posts:e}=t;return s.$$set=s=>{"posts"in s&&a(0,e=s.posts)},[e]}export default class extends s{constructor(s){super(),t(this,s,j,q,a,{posts:0})}}export{x as preload};
