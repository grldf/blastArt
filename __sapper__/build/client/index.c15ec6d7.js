import{S as a,i as e,s,e as t,t as o,j as r,c as l,a as n,b as c,d as i,k as h,f,g as u,h as p,m,n as v}from"./client.381a1b72.js";import{g as d,D as E}from"./bundle.esm.a297de33.js";function g(a){let e,s,d,E,g,z,b,j,w,y,D,q,x,B,P,I,A,C,N,O,T,V,$,k=a[0].telephone+"",G=a[0].emailcontact+"";return{c(){e=t("div"),s=t("h1"),d=o("Contactez-Nous!"),E=r(),g=t("img"),b=r(),j=t("div"),w=t("p"),y=o("Thibault"),D=r(),q=t("p"),x=t("a"),B=o(k),I=r(),A=t("p"),C=o("Ou par Email"),N=r(),O=t("p"),T=t("a"),V=o(G),this.h()},l(a){e=l(a,"DIV",{class:!0});var t=n(e);s=l(t,"H1",{class:!0});var o=n(s);d=c(o,"Contactez-Nous!"),o.forEach(i),E=h(t),g=l(t,"IMG",{src:!0,alt:!0,class:!0}),b=h(t),j=l(t,"DIV",{class:!0});var r=n(j);w=l(r,"P",{});var f=n(w);y=c(f,"Thibault"),f.forEach(i),D=h(r),q=l(r,"P",{});var u=n(q);x=l(u,"A",{href:!0,class:!0});var p=n(x);B=c(p,k),p.forEach(i),u.forEach(i),I=h(r),A=l(r,"P",{});var m=n(A);C=c(m,"Ou par Email"),m.forEach(i),N=h(r),O=l(r,"P",{});var v=n(O);T=l(v,"A",{href:!0,class:!0});var z=n(T);V=c(z,G),z.forEach(i),v.forEach(i),r.forEach(i),t.forEach(i),this.h()},h(){f(s,"class","svelte-z3i04o"),g.src!==(z="logo-512.png")&&f(g,"src","logo-512.png"),f(g,"alt","une oeuvre d'un membre de Blast"),f(g,"class","svelte-z3i04o"),f(x,"href",P="tel:+33"+a[0].telephone),f(x,"class","svelte-z3i04o"),f(T,"href",$="mailto:"+a[0].telephone+"?subject=Deamnde infos"),f(T,"class","svelte-z3i04o"),f(j,"class","info svelte-z3i04o"),f(e,"class","container svelte-z3i04o")},m(a,t){u(a,e,t),p(e,s),p(s,d),p(e,E),p(e,g),p(e,b),p(e,j),p(j,w),p(w,y),p(j,D),p(j,q),p(q,x),p(x,B),p(j,I),p(j,A),p(A,C),p(j,N),p(j,O),p(O,T),p(T,V)},p(a,[e]){1&e&&k!==(k=a[0].telephone+"")&&m(B,k),1&e&&P!==(P="tel:+33"+a[0].telephone)&&f(x,"href",P),1&e&&G!==(G=a[0].emailcontact+"")&&m(V,G),1&e&&$!==($="mailto:"+a[0].telephone+"?subject=Deamnde infos")&&f(T,"href",$)},i:v,o:v,d(a){a&&i(e)}}}const z=d`
      query infoBlast {
        infoBlast(id:"1"){
            telephone
            emailcontact
        }
      }
    `;async function b(){const a=new E({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch});return{info:(await a.query({query:z})).data.infoBlast}}function j(a,e,s){let{info:t}=e;return a.$$set=a=>{"info"in a&&s(0,t=a.info)},[t]}export default class extends a{constructor(a){super(),e(this,a,j,g,s,{info:0})}}export{b as preload};
