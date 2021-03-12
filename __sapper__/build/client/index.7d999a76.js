import{S as s,i as t,s as e,a,e as n,t as o,w as r,f as c,g as i,c as u,b as l,d,h,k as f,l as p,m,n as v,H as g}from"./client.0e6fe5b6.js";import{t as q}from"./snarkdown.es.257e5e6b.js";import{g as w,D as y}from"./bundle.esm.a297de33.js";function b(s){let t,e,w,y,b,k,j=s[0].titre+"",x=q(s[0].conditions)+"";return{c(){t=a(),e=n("div"),w=n("h1"),y=o(j),b=a(),this.h()},l(s){r('[data-svelte="svelte-1067mrn"]',document.head).forEach(c),t=i(s),e=u(s,"DIV",{class:!0});var a=l(e);w=u(a,"H1",{class:!0});var n=l(w);y=d(n,j),n.forEach(c),b=i(a),a.forEach(c),this.h()},h(){document.title="",h(w,"class","svelte-1neoukf"),k=new g(null),h(e,"class","content svelte-1neoukf")},m(s,a){f(s,t,a),f(s,e,a),p(e,w),p(w,y),p(e,b),k.m(x,e)},p(s,[t]){1&t&&j!==(j=s[0].titre+"")&&m(y,j),1&t&&x!==(x=q(s[0].conditions)+"")&&k.p(x)},i:v,o:v,d(s){s&&c(t),s&&c(e)}}}const k=w`
	query cgv {
        ccvCgu(id:"1"){
            id
            titre
            conditions
      }
    }   
  `;async function j({params:s,query:t}){const e=new y({uri:"http://51.210.96.39:1337/graphql",fetch:this.fetch});return{posts:(await e.query({query:k})).data.ccvCgu}}function x(s,t,e){let{posts:a}=t;return s.$$set=s=>{"posts"in s&&e(0,a=s.posts)},[a]}export default class extends s{constructor(s){super(),t(this,s,x,b,e,{posts:0})}}export{j as preload};
