import{S as e,i as s,s as t,e as r,a,t as l,c as n,b as c,g as i,d as o,f as h,h as f,k as m,l as u,m as g,C as d,n as p,y as v}from"./client.ab037dde.js";import{g as w,D as y}from"./bundle.esm.a297de33.js";function E(e,s,t){const r=e.slice();return r[1]=s[t],r}function b(e){let s,t,d,p,v,w,y,E,b,x,S,q,j,A,I=e[1].commentaire+"";return{c(){s=r("article"),t=r("img"),v=a(),w=r("p"),y=r("a"),E=l(I),b=r("br"),x=a(),S=r("span"),q=l("☞"),A=a(),this.h()},l(e){s=n(e,"ARTICLE",{class:!0});var r=c(s);t=n(r,"IMG",{src:!0,alt:!0,class:!0}),v=i(r),w=n(r,"P",{class:!0});var a=c(w);y=n(a,"A",{href:!0,target:!0,class:!0});var l=c(y);E=o(l,I),b=n(l,"BR",{}),x=i(l),S=n(l,"SPAN",{class:!0});var f=c(S);q=o(f,"☞"),f.forEach(h),l.forEach(h),a.forEach(h),A=i(r),r.forEach(h),this.h()},h(){t.src!==(d=P+e[1].logoSite.url)&&f(t,"src",d),f(t,"alt",p=e[1].commentaire),f(t,"class","svelte-gtmipr"),f(S,"class","svelte-gtmipr"),f(y,"href",j=e[1].lien),f(y,"target","_blank"),f(y,"class","svelte-gtmipr"),f(w,"class","svelte-gtmipr"),f(s,"class","svelte-gtmipr")},m(e,r){m(e,s,r),u(s,t),u(s,v),u(s,w),u(w,y),u(y,E),u(y,b),u(y,x),u(y,S),u(S,q),u(s,A)},p(e,s){1&s&&t.src!==(d=P+e[1].logoSite.url)&&f(t,"src",d),1&s&&p!==(p=e[1].commentaire)&&f(t,"alt",p),1&s&&I!==(I=e[1].commentaire+"")&&g(E,I),1&s&&j!==(j=e[1].lien)&&f(y,"href",j)},d(e){e&&h(s)}}}function x(e){let s,t,l=e[0],o=[];for(let s=0;s<l.length;s+=1)o[s]=b(E(e,l,s));return{c(){s=a(),t=r("div");for(let e=0;e<o.length;e+=1)o[e].c();this.h()},l(e){d('[data-svelte="svelte-j7ddmf"]',document.head).forEach(h),s=i(e),t=n(e,"DIV",{class:!0});var r=c(t);for(let e=0;e<o.length;e+=1)o[e].l(r);r.forEach(h),this.h()},h(){document.title="Presse",f(t,"class","container svelte-gtmipr")},m(e,r){m(e,s,r),m(e,t,r);for(let e=0;e<o.length;e+=1)o[e].m(t,null)},p(e,[s]){if(1&s){let r;for(l=e[0],r=0;r<l.length;r+=1){const a=E(e,l,r);o[r]?o[r].p(a,s):(o[r]=b(a),o[r].c(),o[r].m(t,null))}for(;r<o.length;r+=1)o[r].d(1);o.length=l.length}},i:p,o:p,d(e){e&&h(s),e&&h(t),v(o,e)}}}const S=w`
      query presse {
        presses(sort:"dateParution:desc"){
            id
            commentaire
            lien
            logoSite{
                url
  	        }
        }
    }
    `;async function q(){const e=new y({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch});return{liens:(await e.query({query:S})).data.presses}}let P="https://www.grldfaure.xyz";function j(e,s,t){let{liens:r}=s;return e.$$set=e=>{"liens"in e&&t(0,r=e.liens)},[r]}export default class extends e{constructor(e){super(),s(this,e,j,x,t,{liens:0})}}export{q as preload};