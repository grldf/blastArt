import{D as r,_ as t,a as n,b as e,c as o,i as s,d as a,S as c,s as i,g as u,z as f,f as l,k as v,A as h,B as p,r as d,j as y,l as g,n as m,x,F as w,y as q,o as R,v as j}from"./client.7a6633f5.js";import{g as k,_ as D,a as E,D as b}from"./bundle.esm.d2858e6b.js";var z;function B(r){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(r){return!1}}();return function(){var o,s=n(r);if(t){var a=n(this).constructor;o=Reflect.construct(s,arguments,a)}else o=s.apply(this,arguments);return e(this,o)}}function I(r,t,n){var e=r.slice();return e[1]=t[n],e}function V(r){var t,n,e,o,s,a,c,i,q,R=r[1].titre+"";return{c:function(){t=u("div"),n=u("h3"),e=f(R),o=l(),s=u("video"),a=u("track"),q=l(),this.h()},l:function(r){t=v(r,"DIV",{});var c=h(t);n=v(c,"H3",{});var i=h(n);e=p(i,R),i.forEach(d),o=y(c),s=v(c,"VIDEO",{src:!0,controls:!0,poster:!0,type:!0,preload:!0,class:!0});var u=h(s);a=v(u,"TRACK",{kind:!0}),u.forEach(d),q=y(c),c.forEach(d),this.h()},h:function(){g(a,"kind","captions"),s.src!==(c=C+r[1].video.url)&&g(s,"src",c),s.controls=!0,g(s,"poster",i=C+r[1].cover.url),g(s,"type","video/mp4"),g(s,"preload","none"),g(s,"class","svelte-rgx8rq")},m:function(r,c){m(r,t,c),x(t,n),x(n,e),x(t,o),x(t,s),x(s,a),x(t,q)},p:function(r,t){1&t&&R!==(R=r[1].titre+"")&&w(e,R),1&t&&s.src!==(c=C+r[1].video.url)&&g(s,"src",c),1&t&&i!==(i=C+r[1].cover.url)&&g(s,"poster",i)},d:function(r){r&&d(t)}}}function A(r){for(var t,n=r[0],e=[],o=0;o<n.length;o+=1)e[o]=V(I(r,n,o));return{c:function(){t=u("div");for(var r=0;r<e.length;r+=1)e[r].c();this.h()},l:function(r){t=v(r,"DIV",{class:!0});for(var n=h(t),o=0;o<e.length;o+=1)e[o].l(n);n.forEach(d),this.h()},h:function(){g(t,"class","container svelte-rgx8rq")},m:function(r,n){m(r,t,n);for(var o=0;o<e.length;o+=1)e[o].m(t,null)},p:function(r,o){var s=q(o,1)[0];if(1&s){var a;for(n=r[0],a=0;a<n.length;a+=1){var c=I(r,n,a);e[a]?e[a].p(c,s):(e[a]=V(c),e[a].c(),e[a].m(t,null))}for(;a<e.length;a+=1)e[a].d(1);e.length=n.length}},i:R,o:R,d:function(r){r&&d(t),j(e,r)}}}var O=k(z||(z=D(['\n  query video {\n        jpvideos(sort:"ordre:desc") {\n            titre\n            cover{\n                url\n            }\n  \t        video{\n                  url\n                }\n  }\n}\n'])));function $(){return _.apply(this,arguments)}function _(){return(_=E(r.mark((function t(){var n,e;return r.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=new b({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch}),r.next=3,n.query({query:O});case 3:return e=r.sent,r.abrupt("return",{videos:e.data.jpvideos});case 5:case"end":return r.stop()}}),t,this)})))).apply(this,arguments)}var C="https://www.grldfaure.xyz";function F(r,t,n){var e=t.videos;return r.$$set=function(r){"videos"in r&&n(0,e=r.videos)},[e]}var H=function(r){t(e,c);var n=B(e);function e(r){var t;return o(this,e),t=n.call(this),s(a(t),r,F,A,i,{videos:0}),t}return e}();export default H;export{$ as preload};
