import{S as s,i as t,s as e,a,e as n,t as o,w as r,f as c,g as i,c as u,b as l,d,h as f,k as h,l as p,m,n as v,H as w}from"./client.4480ff56.js";import{t as g}from"./snarkdown.es.257e5e6b.js";import{g as y,D as q}from"./bundle.esm.a297de33.js";function k(s){let t,e,y,q,k,x,b=s[0].titre+"",j=g(s[0].conditions)+"";return{c(){t=a(),e=n("div"),y=n("h1"),q=o(b),k=a(),this.h()},l(s){r('[data-svelte="svelte-1067mrn"]',document.head).forEach(c),t=i(s),e=u(s,"DIV",{class:!0});var a=l(e);y=u(a,"H1",{class:!0});var n=l(y);q=d(n,b),n.forEach(c),k=i(a),a.forEach(c),this.h()},h(){document.title="",f(y,"class","svelte-1neoukf"),x=new w(null),f(e,"class","content svelte-1neoukf")},m(s,a){h(s,t,a),h(s,e,a),p(e,y),p(y,q),p(e,k),x.m(j,e)},p(s,[t]){1&t&&b!==(b=s[0].titre+"")&&m(q,b),1&t&&j!==(j=g(s[0].conditions)+"")&&x.p(j)},i:v,o:v,d(s){s&&c(t),s&&c(e)}}}const x=y`
	query cgv {
        ccvCgu(id:"1"){
            id
            titre
            conditions
      }
    }   
  `;async function b({params:s,query:t}){const e=new q({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch});return{posts:(await e.query({query:x})).data.ccvCgu}}function j(s,t,e){let{posts:a}=t;return s.$$set=s=>{"posts"in s&&e(0,a=s.posts)},[a]}export default class extends s{constructor(s){super(),t(this,s,j,k,e,{posts:0})}}export{b as preload};
