import{r as t,_ as n,a as e,b as r,c as s,i as a,d as c,S as l,s as u,e as o,t as i,f,g as h,h as v,p,j as d,k as m,l as y,m as g,n as w,v as x,w as E,x as I,o as R,y as b}from"./client.d2cd1ad9.js";import{g as j,_ as k,a as q,D}from"./bundle.esm.0631ea01.js";var B;function L(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,a=e(t);if(n){var c=e(this).constructor;s=Reflect.construct(a,arguments,c)}else s=a.apply(this,arguments);return r(this,s)}}function P(t,n,e){var r=t.slice();return r[1]=n[e],r[3]=e,r}function z(t){var n,e,r;return{c:function(){n=o("img"),this.h()},l:function(t){n=h(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h:function(){n.src!==(e=_+t[1].image.url)&&y(n,"src",e),y(n,"alt",r=t[1].titre),y(n,"class","svelte-1yup2lo")},m:function(t,e){g(t,n,e)},p:function(t,s){1&s&&n.src!==(e=_+t[1].image.url)&&y(n,"src",e),1&s&&r!==(r=t[1].titre)&&y(n,"alt",r)},d:function(t){t&&d(n)}}}function A(t){var n;return{c:function(){n=o("img"),this.h()},l:function(t){n=h(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h:function(){n.src!=="logo-512.png"&&y(n,"src","logo-512.png"),y(n,"alt","Blast logo"),y(n,"class","svelte-1yup2lo")},m:function(t,e){g(t,n,e)},p:R,d:function(t){t&&d(n)}}}function G(t){var n,e,r,s,a,c,l,u,E,I,R=t[1].titre+"",b=t[1].contenu+"";function j(t,n){return null===t[1].image?A:z}var k=j(t),q=k(t);return{c:function(){n=o("div"),e=o("article"),r=o("h2"),s=i(R),a=f(),c=o("p"),l=i(b),u=f(),E=o("aside"),q.c(),I=f(),this.h()},l:function(t){n=h(t,"DIV",{class:!0});var o=v(n);e=h(o,"ARTICLE",{class:!0});var i=v(e);r=h(i,"H2",{class:!0});var f=v(r);s=p(f,R),f.forEach(d),a=m(i),c=h(i,"P",{class:!0});var y=v(c);l=p(y,b),y.forEach(d),i.forEach(d),u=m(o),E=h(o,"ASIDE",{class:!0});var g=v(E);q.l(g),g.forEach(d),I=m(o),o.forEach(d),this.h()},h:function(){y(r,"class","svelte-1yup2lo"),y(c,"class","svelte-1yup2lo"),y(e,"class","svelte-1yup2lo"),y(E,"class","svelte-1yup2lo"),y(n,"class","impair svelte-1yup2lo")},m:function(t,o){g(t,n,o),w(n,e),w(e,r),w(r,s),w(e,a),w(e,c),w(c,l),w(n,u),w(n,E),q.m(E,null),w(n,I)},p:function(t,n){1&n&&R!==(R=t[1].titre+"")&&x(s,R),1&n&&b!==(b=t[1].contenu+"")&&x(l,b),k===(k=j(t))&&q?q.p(t,n):(q.d(1),(q=k(t))&&(q.c(),q.m(E,null)))},d:function(t){t&&d(n),q.d()}}}function M(t){for(var n,e,r,s=t[0],a=[],c=0;c<s.length;c+=1)a[c]=G(P(t,s,c));return{c:function(){n=o("link"),e=f(),r=o("div");for(var t=0;t<a.length;t+=1)a[t].c();this.h()},l:function(t){var s=E('[data-svelte="svelte-de5yl2"]',document.head);n=h(s,"LINK",{rel:!0,href:!0}),s.forEach(d),e=m(t),r=h(t,"DIV",{class:!0});for(var c=v(r),l=0;l<a.length;l+=1)a[l].l(c);c.forEach(d),this.h()},h:function(){document.title="Le collectif",y(n,"rel","stylesheet"),y(n,"href","https://use.typekit.net/ixn1cjn.css"),y(r,"class","content svelte-1yup2lo")},m:function(t,s){w(document.head,n),g(t,e,s),g(t,r,s);for(var c=0;c<a.length;c+=1)a[c].m(r,null)},p:function(t,n){var e=I(n,1)[0];if(1&e){var c;for(s=t[0],c=0;c<s.length;c+=1){var l=P(t,s,c);a[c]?a[c].p(l,e):(a[c]=G(l),a[c].c(),a[c].m(r,null))}for(;c<a.length;c+=1)a[c].d(1);a.length=s.length}},i:R,o:R,d:function(t){d(n),t&&d(e),t&&d(r),b(a,t)}}}var S=j(B||(B=k(['\n    query membre {\n      nouvelles(sort: "id:desc") {\n        id\n        titre\n        contenu\n        datePublication\n        image {\n          url\n        }\n      }\n    }\n  '])));function V(){return $.apply(this,arguments)}function $(){return($=q(t.mark((function n(){var e,r;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new D({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch},1e3),t.next=3,e.query({query:S});case 3:return r=t.sent,t.abrupt("return",{news:r.data.nouvelles});case 5:case"end":return t.stop()}}),n,this)})))).apply(this,arguments)}var _="https://www.grldfaure.xyz";function C(t,n,e){var r=n.news;return t.$$set=function(t){"news"in t&&e(0,r=t.news)},[r]}var H=function(t){n(r,l);var e=L(r);function r(t){var n;return s(this,r),n=e.call(this),a(c(n),t,C,M,u,{news:0}),n}return r}();export default H;export{V as preload};