import{D as t,_ as n,a as e,b as s,c as r,i as a,d as c,S as o,s as i,g as u,A as l,f,k as h,l as v,B as p,m as d,j as m,n as y,p as g,q as w,F as z,y as q,z as x,r as E,x as j}from"./client.46113efd.js";import{g as I,_ as R,a as b,D as k}from"./bundle.esm.c59375ae.js";import{t as A}from"./snarkdown.es.927b5927.js";var B;function D(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,a=e(t);if(n){var c=e(this).constructor;r=Reflect.construct(a,arguments,c)}else r=a.apply(this,arguments);return s(this,r)}}function M(t,n,e){var s=t.slice();return s[1]=n[e],s[3]=e,s}function L(t){var n,e,s;return{c:function(){n=u("img"),this.h()},l:function(t){n=h(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h:function(){n.src!==(e=V+t[1].image.url)&&y(n,"src",e),y(n,"alt",s=t[1].titre),y(n,"class","svelte-z9y7ho")},m:function(t,e){g(t,n,e)},p:function(t,r){1&r&&n.src!==(e=V+t[1].image.url)&&y(n,"src",e),1&r&&s!==(s=t[1].titre)&&y(n,"alt",s)},d:function(t){t&&d(n)}}}function T(t){var n;return{c:function(){n=u("img"),this.h()},l:function(t){n=h(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h:function(){n.src!=="logo-512.png"&&y(n,"src","logo-512.png"),y(n,"alt","Blast logo"),y(n,"class","svelte-z9y7ho")},m:function(t,e){g(t,n,e)},p:E,d:function(t){t&&d(n)}}}function H(t){var n,e,s,r,a,c,o,i,q,x=t[1].titre+"",E=A(t[1].contenu)+"";function j(t,n){return null===t[1].image?T:L}var I=j(t),R=I(t);return{c:function(){n=u("div"),e=u("article"),s=u("h2"),r=l(x),a=f(),c=u("p"),o=f(),i=u("aside"),R.c(),q=f(),this.h()},l:function(t){n=h(t,"DIV",{class:!0});var u=v(n);e=h(u,"ARTICLE",{class:!0});var l=v(e);s=h(l,"H2",{class:!0});var f=v(s);r=p(f,x),f.forEach(d),a=m(l),c=h(l,"P",{class:!0}),v(c).forEach(d),l.forEach(d),o=m(u),i=h(u,"ASIDE",{class:!0});var y=v(i);R.l(y),y.forEach(d),q=m(u),u.forEach(d),this.h()},h:function(){y(s,"class","svelte-z9y7ho"),y(c,"class","svelte-z9y7ho"),y(e,"class","svelte-z9y7ho"),y(i,"class","svelte-z9y7ho"),y(n,"class","impair svelte-z9y7ho")},m:function(t,u){g(t,n,u),w(n,e),w(e,s),w(s,r),w(e,a),w(e,c),c.innerHTML=E,w(n,o),w(n,i),R.m(i,null),w(n,q)},p:function(t,n){1&n&&x!==(x=t[1].titre+"")&&z(r,x),1&n&&E!==(E=A(t[1].contenu)+"")&&(c.innerHTML=E),I===(I=j(t))&&R?R.p(t,n):(R.d(1),(R=I(t))&&(R.c(),R.m(i,null)))},d:function(t){t&&d(n),R.d()}}}function P(t){for(var n,e,s,r,a=t[0],c=[],o=0;o<a.length;o+=1)c[o]=H(M(t,a,o));return{c:function(){n=u("meta"),e=u("link"),s=f(),r=u("div");for(var t=0;t<c.length;t+=1)c[t].c();this.h()},l:function(t){var a=q('[data-svelte="svelte-1cuq0in"]',document.head);n=h(a,"META",{description:!0}),e=h(a,"LINK",{rel:!0,href:!0}),a.forEach(d),s=m(t),r=h(t,"DIV",{class:!0});for(var o=v(r),i=0;i<c.length;i+=1)c[i].l(o);o.forEach(d),this.h()},h:function(){y(n,"description","Retrouvez les news du collectifs Blast. A travers de courts textes et de photos \n  apprenez qu'elles sont les avancées de nos projets artistiques et les rencontres que nous faisons \n  et ce qui a pu nous faire vibrer"),document.title="News du collectif sur les projets et les rencontres que nous faisons",y(e,"rel","stylesheet"),y(e,"href","https://use.typekit.net/ixn1cjn.css"),y(r,"class","content svelte-z9y7ho")},m:function(t,a){w(document.head,n),w(document.head,e),g(t,s,a),g(t,r,a);for(var o=0;o<c.length;o+=1)c[o].m(r,null)},p:function(t,n){var e=x(n,1)[0];if(1&e){var s;for(a=t[0],s=0;s<a.length;s+=1){var o=M(t,a,s);c[s]?c[s].p(o,e):(c[s]=H(o),c[s].c(),c[s].m(r,null))}for(;s<c.length;s+=1)c[s].d(1);c.length=a.length}},i:E,o:E,d:function(t){d(n),d(e),t&&d(s),t&&d(r),j(c,t)}}}var G=I(B||(B=R(['\n      query news {\n        nouvelles(sort: "id:desc") {\n          id\n          titre\n          contenu\n          datePublication\n          image {\n            url\n          }\n        }\n      }\n    '])));function N(t){return S.apply(this,arguments)}function S(){return(S=b(t.mark((function n(e){var s,r;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.params,e.query,s=new k({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch}),t.next=4,s.query({query:G});case 4:return r=t.sent,t.abrupt("return",{news:r.data.nouvelles});case 6:case"end":return t.stop()}}),n,this)})))).apply(this,arguments)}var V="https://www.grldfaure.xyz";function $(t,n,e){var s=n.news;return t.$$set=function(t){"news"in t&&e(0,s=t.news)},[s]}var _=function(t){n(s,o);var e=D(s);function s(t){var n;return r(this,s),n=e.call(this),a(c(n),t,$,P,i,{news:0}),n}return s}();export default _;export{N as preload};
