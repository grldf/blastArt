import{S as e,i as s,s as t,e as l,t as a,a as r,c as n,b as o,d as i,f as c,g as f,h,j as g,k as u,l as d,m,n as p,o as v,p as w,q as S,r as x,u as $,v as E,w as y,x as k,y as T,z as b,A as j,B as q}from"./client.4480ff56.js";import{g as D,D as I}from"./bundle.esm.a297de33.js";function N(e){let s,t,v,w,S,x,$,E,y,k,T,b,j;return{c(){s=l("div"),t=l("div"),v=a(e[2]),w=a(" / "),S=a(e[3]),x=r(),$=l("img"),y=r(),k=l("div"),T=l("p"),b=l("a"),j=a(e[5]),this.h()},l(l){s=n(l,"DIV",{class:!0});var a=o(s);t=n(a,"DIV",{class:!0});var r=o(t);v=i(r,e[2]),w=i(r," / "),S=i(r,e[3]),r.forEach(c),x=f(a),$=n(a,"IMG",{src:!0,alt:!0,class:!0}),y=f(a),k=n(a,"DIV",{class:!0});var h=o(k);T=n(h,"P",{class:!0});var g=o(T);b=n(g,"A",{href:!0,class:!0});var u=o(b);j=i(u,e[5]),u.forEach(c),g.forEach(c),h.forEach(c),a.forEach(c),this.h()},h(){h(t,"class","numbertext svelte-87fpw4"),$.src!==(E=e[0])&&h($,"src",E),h($,"alt",e[1]),h($,"class","svelte-87fpw4"),h(b,"href",e[6]),h(b,"class","link svelte-87fpw4"),h(T,"class","svelte-87fpw4"),h(k,"class","infos svelte-87fpw4"),h(s,"class","mySlides svelte-87fpw4"),g(s,"show",e[4])},m(e,l){u(e,s,l),d(s,t),d(t,v),d(t,w),d(t,S),d(s,x),d(s,$),d(s,y),d(s,k),d(k,T),d(T,b),d(b,j)},p(e,[t]){4&t&&m(v,e[2]),8&t&&m(S,e[3]),1&t&&$.src!==(E=e[0])&&h($,"src",E),2&t&&h($,"alt",e[1]),32&t&&m(j,e[5]),64&t&&h(b,"href",e[6]),16&t&&g(s,"show",e[4])},i:p,o:p,d(e){e&&c(s)}}}function U(e,s,t){let{imageUrl:l}=s,{alternText:a}=s,{slideNo:r}=s,{totalSlide:n}=s,{imageShowing:o}=s,{infos:i}=s,{slug:c}=s;return e.$$set=e=>{"imageUrl"in e&&t(0,l=e.imageUrl),"alternText"in e&&t(1,a=e.alternText),"slideNo"in e&&t(2,r=e.slideNo),"totalSlide"in e&&t(3,n=e.totalSlide),"imageShowing"in e&&t(4,o=e.imageShowing),"infos"in e&&t(5,i=e.infos),"slug"in e&&t(6,c=e.slug)},[l,a,r,n,o,i,c]}class A extends e{constructor(e){super(),s(this,e,U,N,t,{imageUrl:0,alternText:1,slideNo:2,totalSlide:3,imageShowing:4,infos:5,slug:6})}}function P(e,s,t){const l=e.slice();return l[4]=s[t],l}function V(e){let s,t;return s=new A({props:{imageUrl:G+e[4].cover.url,alternText:e[4].titre,slideNo:e[1],totalSlide:e[0].length,imageShowing:-1*e[4].idP+e[0].length+1===e[1],infos:e[4].titre,slug:L+e[4].Slug}}),{c(){v(s.$$.fragment)},l(e){w(s.$$.fragment,e)},m(e,l){S(s,e,l),t=!0},p(e,t){const l={};1&t&&(l.imageUrl=G+e[4].cover.url),1&t&&(l.alternText=e[4].titre),2&t&&(l.slideNo=e[1]),1&t&&(l.totalSlide=e[0].length),3&t&&(l.imageShowing=-1*e[4].idP+e[0].length+1===e[1]),1&t&&(l.infos=e[4].titre),1&t&&(l.slug=L+e[4].Slug),s.$set(l)},i(e){t||(x(s.$$.fragment,e),t=!0)},o(e){$(s.$$.fragment,e),t=!1},d(e){E(s,e)}}}function z(e){let s,t,g,m,p,v,w,S,E,D,I,N,U=e[0],A=[];for(let s=0;s<U.length;s+=1)A[s]=V(P(e,U,s));const z=e=>$(A[e],1,1,(()=>{A[e]=null}));return{c(){s=r(),t=l("div"),g=l("div");for(let e=0;e<A.length;e+=1)A[e].c();m=r(),p=l("a"),v=a("❮"),w=r(),S=l("a"),E=a("❯"),this.h()},l(e){y('[data-svelte="svelte-u4ofl0"]',document.head).forEach(c),s=f(e),t=n(e,"DIV",{});var l=o(t);g=n(l,"DIV",{class:!0});var a=o(g);for(let e=0;e<A.length;e+=1)A[e].l(a);a.forEach(c),m=f(l),p=n(l,"A",{href:!0,class:!0});var r=o(p);v=i(r,"❮"),r.forEach(c),w=f(l),S=n(l,"A",{href:!0,class:!0});var h=o(S);E=i(h,"❯"),h.forEach(c),l.forEach(c),this.h()},h(){document.title="BlastART",h(g,"class","container svelte-1b73k3d"),h(p,"href","#arrowL"),h(p,"class","prev svelte-1b73k3d"),h(S,"href","#arrowR"),h(S,"class","next svelte-1b73k3d")},m(l,a){u(l,s,a),u(l,t,a),d(t,g);for(let e=0;e<A.length;e+=1)A[e].m(g,null);d(t,m),d(t,p),d(p,v),d(t,w),d(t,S),d(S,E),D=!0,I||(N=[k(p,"click",e[2]),k(S,"click",e[3])],I=!0)},p(e,[s]){if(3&s){let t;for(U=e[0],t=0;t<U.length;t+=1){const l=P(e,U,t);A[t]?(A[t].p(l,s),x(A[t],1)):(A[t]=V(l),A[t].c(),x(A[t],1),A[t].m(g,null))}for(q(),t=U.length;t<A.length;t+=1)z(t);T()}},i(e){if(!D){for(let e=0;e<U.length;e+=1)x(A[e]);D=!0}},o(e){A=A.filter(Boolean);for(let e=0;e<A.length;e+=1)$(A[e]);D=!1},d(e){e&&c(s),e&&c(t),b(A,e),I=!1,j(N)}}}const B=D`
	query cover{
	  projets(sort:"date:desc"){
		id
		idP
		titre
		cover {
		  url
		}
		Slug
	  }
	}
  `;async function R({params:e,query:s}){const t=new I({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch});return{posts:(await t.query({query:B})).data.projets}}const G="https://www.grldfaure.xyz",L="Projet/";function M(e,s,t){let{posts:l}=s,a=1;return e.$$set=e=>{"posts"in e&&t(0,l=e.posts)},[l,a,()=>{t(1,1===a?a=l.length:a-=1)},()=>{a===l.length?t(1,a=1):t(1,a+=1)}]}export default class extends e{constructor(e){super(),s(this,e,M,z,t,{posts:0})}}export{R as preload};