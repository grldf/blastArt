import{v as t,_ as n,a as r,b as s,c as e,i as a,d as c,S as o,s as i,e as l,t as u,f,g as h,h as p,j as v,k as m,l as d,m as g,K as y,o as q,p as k,r as E,C as x,q as I,u as R,F as b}from"./client.74155e3b.js";import{g as j,_ as D,a as w,D as L}from"./bundle.esm.d755f267.js";var A;function B(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,a=r(t);if(n){var c=r(this).constructor;e=Reflect.construct(a,arguments,c)}else e=a.apply(this,arguments);return s(this,e)}}function C(t,n,r){var s=t.slice();return s[1]=n[r],s[3]=r,s}function K(t){var n,r,s,e,a,c,o,i,x,I,R,b,j,D=t[1].nom+"",w=t[1].description+"";return{c:function(){n=l("div"),r=l("article"),s=l("h2"),e=u(D),a=f(),c=l("p"),o=u(w),i=f(),x=l("aside"),I=l("img"),j=f(),this.h()},l:function(t){n=h(t,"DIV",{class:!0});var l=p(n);r=h(l,"ARTICLE",{class:!0});var u=p(r);s=h(u,"H2",{class:!0});var f=p(s);e=v(f,D),f.forEach(m),a=d(u),c=h(u,"P",{class:!0});var g=p(c);o=v(g,w),g.forEach(m),u.forEach(m),i=d(l),x=h(l,"ASIDE",{class:!0});var y=p(x);I=h(y,"IMG",{src:!0,alt:!0,class:!0}),y.forEach(m),j=d(l),l.forEach(m),this.h()},h:function(){g(s,"class","svelte-1nqn5kh"),g(c,"class","svelte-1nqn5kh"),g(r,"class","svelte-1nqn5kh"),I.src!==(R=_+t[1].profilimage.url)&&g(I,"src",R),g(I,"alt",b="portrait de "+t[1].nom),g(I,"class","svelte-1nqn5kh"),g(x,"class","svelte-1nqn5kh"),g(n,"class",y(t[3]%2==0?"impair":"pair")+" svelte-1nqn5kh")},m:function(t,l){q(t,n,l),k(n,r),k(r,s),k(s,e),k(r,a),k(r,c),k(c,o),k(n,i),k(n,x),k(x,I),k(n,j)},p:function(t,n){1&n&&D!==(D=t[1].nom+"")&&E(e,D),1&n&&w!==(w=t[1].description+"")&&E(o,w),1&n&&I.src!==(R=_+t[1].profilimage.url)&&g(I,"src",R),1&n&&b!==(b="portrait de "+t[1].nom)&&g(I,"alt",b)},d:function(t){t&&m(n)}}}function P(t){for(var n,r,s,e=t[0],a=[],c=0;c<e.length;c+=1)a[c]=K(C(t,e,c));return{c:function(){n=l("link"),r=f(),s=l("div");for(var t=0;t<a.length;t+=1)a[t].c();this.h()},l:function(t){var e=x('[data-svelte="svelte-1ysmkuu"]',document.head);n=h(e,"LINK",{rel:!0,href:!0}),e.forEach(m),r=d(t),s=h(t,"DIV",{class:!0});for(var c=p(s),o=0;o<a.length;o+=1)a[o].l(c);c.forEach(m),this.h()},h:function(){document.title="Le collectif",g(n,"rel","stylesheet"),g(n,"href","https://use.typekit.net/ixn1cjn.css"),g(s,"class","content svelte-1nqn5kh")},m:function(t,e){k(document.head,n),q(t,r,e),q(t,s,e);for(var c=0;c<a.length;c+=1)a[c].m(s,null)},p:function(t,n){var r=I(n,1)[0];if(1&r){var c;for(e=t[0],c=0;c<e.length;c+=1){var o=C(t,e,c);a[c]?a[c].p(o,r):(a[c]=K(o),a[c].c(),a[c].m(s,null))}for(;c<a.length;c+=1)a[c].d(1);a.length=e.length}},i:R,o:R,d:function(t){m(n),t&&m(r),t&&m(s),b(a,t)}}}var S=j(A||(A=D(['\n      query membre {\n        collectifs(sort: "id:asc") {\n          id\n          nom\n          description\n          profilimage {\n            url\n          }\n        }\n      }\n    '])));function V(t){return $.apply(this,arguments)}function $(){return($=w(t.mark((function n(r){var s,e;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.params,r.query,s=new L({uri:"http://51.210.96.39:1337/graphql",fetch:this.fetch}),t.next=4,s.query({query:S});case 4:return e=t.sent,t.abrupt("return",{posts:e.data.collectifs});case 6:case"end":return t.stop()}}),n,this)})))).apply(this,arguments)}var _="http://51.210.96.39:1337";function F(t,n,r){var s=n.posts;return t.$$set=function(t){"posts"in t&&r(0,s=t.posts)},[s]}var G=function(t){n(s,o);var r=B(s);function s(t){var n;return e(this,s),n=r.call(this),a(c(n),t,F,P,i,{posts:0}),n}return s}();export default G;export{V as preload};