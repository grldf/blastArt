import{S as e,i as a,s,e as t,a as o,u as l,q as n,f as c,l as r,d as h,v as i,w as f,g as u,r as m,h as p,z as d,n as v}from"./client.41c686f9.js";import{g as b,D as E}from"./bundle.esm.a297de33.js";function g(e){let a,s,b,E,g,w,q,x,y,D,j,z,B,P,A,C,I,T,M,N,O,V,$,G,H,S=e[0].telephone+"",k=e[0].emailcontact+"";return{c(){a=t("meta"),s=o(),b=t("div"),E=t("h1"),g=l("Contactez-Nous!"),w=o(),q=t("img"),y=o(),D=t("div"),j=t("p"),z=l("Thibault"),B=o(),P=t("p"),A=t("a"),C=l(S),T=o(),M=t("p"),N=l("Ou par Email"),O=o(),V=t("p"),$=t("a"),G=l(k),this.h()},l(e){const t=n('[data-svelte="svelte-14c9pc3"]',document.head);a=c(t,"META",{name:!0,content:!0}),t.forEach(r),s=h(e),b=c(e,"DIV",{class:!0});var o=i(b);E=c(o,"H1",{class:!0});var l=i(E);g=f(l,"Contactez-Nous!"),l.forEach(r),w=h(o),q=c(o,"IMG",{src:!0,alt:!0,class:!0}),y=h(o),D=c(o,"DIV",{class:!0});var u=i(D);j=c(u,"P",{});var m=i(j);z=f(m,"Thibault"),m.forEach(r),B=h(u),P=c(u,"P",{});var p=i(P);A=c(p,"A",{href:!0,class:!0});var d=i(A);C=f(d,S),d.forEach(r),p.forEach(r),T=h(u),M=c(u,"P",{});var v=i(M);N=f(v,"Ou par Email"),v.forEach(r),O=h(u),V=c(u,"P",{});var x=i(V);$=c(x,"A",{href:!0,class:!0});var I=i($);G=f(I,k),I.forEach(r),x.forEach(r),u.forEach(r),o.forEach(r),this.h()},h(){u(a,"name","robots"),u(a,"content","noindex"),document.title="Contact",u(E,"class","svelte-1lb7h3s"),q.src!==(x="logo-512.png")&&u(q,"src","logo-512.png"),u(q,"alt","une oeuvre d'un membre de Blast"),u(q,"class","svelte-1lb7h3s"),u(A,"href",I="tel:+33"+e[0].telephone),u(A,"class","svelte-1lb7h3s"),u($,"href",H="mailto:"+e[0].telephone+"?subject=Deamnde infos"),u($,"class","svelte-1lb7h3s"),u(D,"class","info svelte-1lb7h3s"),u(b,"class","container svelte-1lb7h3s")},m(e,t){m(document.head,a),p(e,s,t),p(e,b,t),m(b,E),m(E,g),m(b,w),m(b,q),m(b,y),m(b,D),m(D,j),m(j,z),m(D,B),m(D,P),m(P,A),m(A,C),m(D,T),m(D,M),m(M,N),m(D,O),m(D,V),m(V,$),m($,G)},p(e,[a]){1&a&&S!==(S=e[0].telephone+"")&&d(C,S),1&a&&I!==(I="tel:+33"+e[0].telephone)&&u(A,"href",I),1&a&&k!==(k=e[0].emailcontact+"")&&d(G,k),1&a&&H!==(H="mailto:"+e[0].telephone+"?subject=Deamnde infos")&&u($,"href",H)},i:v,o:v,d(e){r(a),e&&r(s),e&&r(b)}}}const w=b`
    query infoBlast {
      infoBlast(id: "1") {
        telephone
        emailcontact
      }
    }
  `;async function q(){const e=new E({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch});return{info:(await e.query({query:w})).data.infoBlast}}function x(e,a,s){let{info:t}=a;return e.$$set=e=>{"info"in e&&s(0,t=e.info)},[t]}export default class extends e{constructor(e){super(),a(this,e,x,g,s,{info:0})}}export{q as preload};
