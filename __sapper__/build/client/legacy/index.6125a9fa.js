import{v as n,_ as t,a as r,b as e,c as s,i as a,d as c,S as u,s as i,e as l,t as o,f,g as h,h as v,j as p,k as m,l as d,m as g,K as y,o as q,p as w,r as k,C as E,q as x,u as b,F as I}from"./client.6ae2c760.js";import{g as R,_ as j,a as D,D as B}from"./bundle.esm.b0bd8a40.js";var L;function P(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var s,a=r(n);if(t){var c=r(this).constructor;s=Reflect.construct(a,arguments,c)}else s=a.apply(this,arguments);return e(this,s)}}function z(n,t,r){var e=n.slice();return e[1]=t[r],e[3]=r,e}function A(n){var t,r,e;return{c:function(){t=l("img"),this.h()},l:function(n){t=h(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h:function(){t.src!==(r=$+n[1].image.url)&&g(t,"src",r),g(t,"alt",e=n[1].titre),g(t,"class","svelte-1nqn5kh")},m:function(n,r){q(n,t,r)},p:function(n,s){1&s&&t.src!==(r=$+n[1].image.url)&&g(t,"src",r),1&s&&e!==(e=n[1].titre)&&g(t,"alt",e)},d:function(n){n&&m(t)}}}function C(n){var t;return{c:function(){t=l("img"),this.h()},l:function(n){t=h(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h:function(){t.src!=="logo-512.png"&&g(t,"src","logo-512.png"),g(t,"alt","Blast logo"),g(t,"class","svelte-1nqn5kh")},m:function(n,r){q(n,t,r)},p:b,d:function(n){n&&m(t)}}}function G(n){var t,r,e,s,a,c,u,i,E,x,b=n[1].titre+"",I=n[1].contenu+"";function R(n,t){return null===n[1].image?C:A}var j=R(n),D=j(n);return{c:function(){t=l("div"),r=l("article"),e=l("h2"),s=o(b),a=f(),c=l("p"),u=o(I),i=f(),E=l("aside"),D.c(),x=f(),this.h()},l:function(n){t=h(n,"DIV",{class:!0});var l=v(t);r=h(l,"ARTICLE",{class:!0});var o=v(r);e=h(o,"H2",{class:!0});var f=v(e);s=p(f,b),f.forEach(m),a=d(o),c=h(o,"P",{class:!0});var g=v(c);u=p(g,I),g.forEach(m),o.forEach(m),i=d(l),E=h(l,"ASIDE",{class:!0});var y=v(E);D.l(y),y.forEach(m),x=d(l),l.forEach(m),this.h()},h:function(){g(e,"class","svelte-1nqn5kh"),g(c,"class","svelte-1nqn5kh"),g(r,"class","svelte-1nqn5kh"),g(E,"class","svelte-1nqn5kh"),g(t,"class",y(n[3]%2==0?"impair":"pair")+" svelte-1nqn5kh")},m:function(n,l){q(n,t,l),w(t,r),w(r,e),w(e,s),w(r,a),w(r,c),w(c,u),w(t,i),w(t,E),D.m(E,null),w(t,x)},p:function(n,t){1&t&&b!==(b=n[1].titre+"")&&k(s,b),1&t&&I!==(I=n[1].contenu+"")&&k(u,I),j===(j=R(n))&&D?D.p(n,t):(D.d(1),(D=j(n))&&(D.c(),D.m(E,null)))},d:function(n){n&&m(t),D.d()}}}function K(n){for(var t,r,e,s=n[0],a=[],c=0;c<s.length;c+=1)a[c]=G(z(n,s,c));return{c:function(){t=l("link"),r=f(),e=l("div");for(var n=0;n<a.length;n+=1)a[n].c();this.h()},l:function(n){var s=E('[data-svelte="svelte-1ysmkuu"]',document.head);t=h(s,"LINK",{rel:!0,href:!0}),s.forEach(m),r=d(n),e=h(n,"DIV",{class:!0});for(var c=v(e),u=0;u<a.length;u+=1)a[u].l(c);c.forEach(m),this.h()},h:function(){document.title="Le collectif",g(t,"rel","stylesheet"),g(t,"href","https://use.typekit.net/ixn1cjn.css"),g(e,"class","content svelte-1nqn5kh")},m:function(n,s){w(document.head,t),q(n,r,s),q(n,e,s);for(var c=0;c<a.length;c+=1)a[c].m(e,null)},p:function(n,t){var r=x(t,1)[0];if(1&r){var c;for(s=n[0],c=0;c<s.length;c+=1){var u=z(n,s,c);a[c]?a[c].p(u,r):(a[c]=G(u),a[c].c(),a[c].m(e,null))}for(;c<a.length;c+=1)a[c].d(1);a.length=s.length}},i:b,o:b,d:function(n){m(t),n&&m(r),n&&m(e),I(a,n)}}}var M=R(L||(L=j(['\n      query membre {\n        nouvelles(sort: "id:asc") {\n          id\n          titre\n          contenu\n          datePublication\n          image {\n            url\n          }\n        }\n      }\n    '])));function S(n){return V.apply(this,arguments)}function V(){return(V=D(n.mark((function t(r){var e,s;return n.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.params,r.query,e=new B({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch}),n.next=4,e.query({query:M});case 4:return s=n.sent,n.abrupt("return",{news:s.data.nouvelles});case 6:case"end":return n.stop()}}),t,this)})))).apply(this,arguments)}var $="https://www.grldfaure.xyz";function _(n,t,r){var e=t.news;return n.$$set=function(n){"news"in n&&r(0,e=n.news)},[e]}var F=function(n){t(e,u);var r=P(e);function e(n){var t;return s(this,e),t=r.call(this),a(c(t),n,_,K,i,{news:0}),t}return e}();export default F;export{S as preload};
