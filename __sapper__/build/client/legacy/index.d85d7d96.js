<<<<<<< HEAD:__sapper__/build/client/legacy/index.d85d7d96.js
import{D as t,_ as n,a as e,b as r,c as a,i as s,d as c,S as o,s as u,g as i,f,A as l,y as h,k as v,m as d,j as p,l as m,B as y,n as g,I as w,q as b,p as x,z as k,F as q,r as R}from"./client.653b50e1.js";import{g as j,_ as C,a as E,D as B}from"./bundle.esm.a54dc9e6.js";import{t as D}from"./snarkdown.es.927b5927.js";var z;function A(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,s=e(t);if(n){var c=e(this).constructor;a=Reflect.construct(s,arguments,c)}else a=s.apply(this,arguments);return r(this,a)}}function G(t){var n,e,r,a,s,c,o,u=t[0].titre+"",j=D(t[0].conditions)+"";return{c:function(){n=i("meta"),e=f(),r=i("div"),a=i("h1"),s=l(u),c=f(),this.h()},l:function(t){var o=h('[data-svelte="svelte-7w8by5"]',document.head);n=v(o,"META",{name:!0,content:!0}),o.forEach(d),e=p(t),r=v(t,"DIV",{class:!0});var i=m(r);a=v(i,"H1",{class:!0});var f=m(a);s=y(f,u),f.forEach(d),c=p(i),i.forEach(d),this.h()},h:function(){g(n,"name","robots"),g(n,"content","noindex"),document.title="CGV/CGU",g(a,"class","svelte-1neoukf"),o=new w(null),g(r,"class","content svelte-1neoukf")},m:function(t,u){b(document.head,n),x(t,e,u),x(t,r,u),b(r,a),b(a,s),b(r,c),o.m(j,r)},p:function(t,n){var e=k(n,1)[0];1&e&&u!==(u=t[0].titre+"")&&q(s,u),1&e&&j!==(j=D(t[0].conditions)+"")&&o.p(j)},i:R,o:R,d:function(t){d(n),t&&d(e),t&&d(r)}}}var I=j(z||(z=C(['\n\tquery cgv {\n        ccvCgu(id:"1"){\n            id\n            titre\n            conditions\n      }\n    }   \n  '])));function V(){return $.apply(this,arguments)}function $(){return($=E(t.mark((function n(){var e,r;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new B({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch}),t.next=3,e.query({query:I});case 3:return r=t.sent,t.abrupt("return",{cgu:r.data.ccvCgu});case 5:case"end":return t.stop()}}),n,this)})))).apply(this,arguments)}function _(t,n,e){var r=n.cgu;return t.$$set=function(t){"cgu"in t&&e(0,r=t.cgu)},[r]}var F=function(t){n(r,o);var e=A(r);function r(t){var n;return a(this,r),n=e.call(this),s(c(n),t,_,G,u,{cgu:0}),n}return r}();export default F;export{V as preload};
=======
import{D as t,_ as n,a as e,b as r,c as a,i as s,d as c,S as o,s as u,g as i,f,A as l,y as h,k as d,m as v,j as p,l as m,B as y,n as g,I as w,q as b,p as x,z as k,F as q,r as R}from"./client.25bdd9e3.js";import{g as j,_ as C,a as E,D as B}from"./bundle.esm.d512f015.js";import{t as D}from"./snarkdown.es.927b5927.js";var z;function A(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,s=e(t);if(n){var c=e(this).constructor;a=Reflect.construct(s,arguments,c)}else a=s.apply(this,arguments);return r(this,a)}}function G(t){var n,e,r,a,s,c,o,u=t[0].titre+"",j=D(t[0].conditions)+"";return{c:function(){n=i("meta"),e=f(),r=i("div"),a=i("h1"),s=l(u),c=f(),this.h()},l:function(t){var o=h('[data-svelte="svelte-7w8by5"]',document.head);n=d(o,"META",{name:!0,content:!0}),o.forEach(v),e=p(t),r=d(t,"DIV",{class:!0});var i=m(r);a=d(i,"H1",{class:!0});var f=m(a);s=y(f,u),f.forEach(v),c=p(i),i.forEach(v),this.h()},h:function(){g(n,"name","robots"),g(n,"content","noindex"),document.title="CGV/CGU",g(a,"class","svelte-1neoukf"),o=new w(null),g(r,"class","content svelte-1neoukf")},m:function(t,u){b(document.head,n),x(t,e,u),x(t,r,u),b(r,a),b(a,s),b(r,c),o.m(j,r)},p:function(t,n){var e=k(n,1)[0];1&e&&u!==(u=t[0].titre+"")&&q(s,u),1&e&&j!==(j=D(t[0].conditions)+"")&&o.p(j)},i:R,o:R,d:function(t){v(n),t&&v(e),t&&v(r)}}}var I=j(z||(z=C(['\n\tquery cgv {\n        ccvCgu(id:"1"){\n            id\n            titre\n            conditions\n      }\n    }   \n  '])));function V(){return $.apply(this,arguments)}function $(){return($=E(t.mark((function n(){var e,r;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new B({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch}),t.next=3,e.query({query:I});case 3:return r=t.sent,t.abrupt("return",{cgu:r.data.ccvCgu});case 5:case"end":return t.stop()}}),n,this)})))).apply(this,arguments)}function _(t,n,e){var r=n.cgu;return t.$$set=function(t){"cgu"in t&&e(0,r=t.cgu)},[r]}var F=function(t){n(r,o);var e=A(r);function r(t){var n;return a(this,r),n=e.call(this),s(c(n),t,_,G,u,{cgu:0}),n}return r}();export default F;export{V as preload};
>>>>>>> 331f9f4fb9b49687e04958240a347a72a95a7242:__sapper__/build/client/legacy/index.0b63a6d1.js
