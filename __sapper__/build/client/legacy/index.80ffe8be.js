import{D as r,_ as t,a as e,b as n,c as s,i as a,d as o,S as c,s as i,g as u,A as f,f as l,k as v,l as p,B as d,m as h,j as g,n as m,p as y,q as w,F as $,e as j,h as x,o as b,z as R,t as k,u as q,v as D,x as E}from"./client.8c3e8581.js";import{g as B,_ as S,a as V,D as z}from"./bundle.esm.5d70a7d4.js";import{S as I}from"./SvelteSeo.3bae48f6.js";var A;function L(r){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(r){return!1}}();return function(){var s,a=e(r);if(t){var o=e(this).constructor;s=Reflect.construct(a,arguments,o)}else s=a.apply(this,arguments);return n(this,s)}}function O(r,t,e){var n=r.slice();return n[1]=t[e],n}function _(r){var t,e,n,s,a,o,c,i,j,x=r[1].titre+"";return{c:function(){t=u("div"),e=u("h3"),n=f(x),s=l(),a=u("video"),o=u("track"),j=l(),this.h()},l:function(r){t=v(r,"DIV",{});var c=p(t);e=v(c,"H3",{class:!0});var i=p(e);n=d(i,x),i.forEach(h),s=g(c),a=v(c,"VIDEO",{src:!0,controls:!0,poster:!0,type:!0,preload:!0,class:!0});var u=p(a);o=v(u,"TRACK",{kind:!0}),u.forEach(h),j=g(c),c.forEach(h),this.h()},h:function(){m(e,"class","svelte-63c1bj"),m(o,"kind","captions"),a.src!==(c=P+r[1].video.url)&&m(a,"src",c),a.controls=!0,m(a,"poster",i=P+r[1].cover.url),m(a,"type","video/mp4"),m(a,"preload","none"),m(a,"class","svelte-63c1bj")},m:function(r,c){y(r,t,c),w(t,e),w(e,n),w(t,s),w(t,a),w(a,o),w(t,j)},p:function(r,t){1&t&&x!==(x=r[1].titre+"")&&$(n,x),1&t&&a.src!==(c=P+r[1].video.url)&&m(a,"src",c),1&t&&i!==(i=P+r[1].cover.url)&&m(a,"poster",i)},d:function(r){r&&h(t)}}}function C(r){var t,e,n,s;t=new I({props:{description:"Le collectif Blast art vous amènes à voyager à travers de leurs vidéos. Leur travail très engagé vous poussera\n  également à vous interroger sur notre rapport à la nature. ",title:"Vidéos présentant le travail du collectif, à travers des murs peints et des expositions."}});for(var a=r[0],o=[],c=0;c<a.length;c+=1)o[c]=_(O(r,a,c));return{c:function(){j(t.$$.fragment),e=l(),n=u("div");for(var r=0;r<o.length;r+=1)o[r].c();this.h()},l:function(r){x(t.$$.fragment,r),e=g(r),n=v(r,"DIV",{class:!0});for(var s=p(n),a=0;a<o.length;a+=1)o[a].l(s);s.forEach(h),this.h()},h:function(){m(n,"class","container svelte-63c1bj")},m:function(r,a){b(t,r,a),y(r,e,a),y(r,n,a);for(var c=0;c<o.length;c+=1)o[c].m(n,null);s=!0},p:function(r,t){var e=R(t,1)[0];if(1&e){var s;for(a=r[0],s=0;s<a.length;s+=1){var c=O(r,a,s);o[s]?o[s].p(c,e):(o[s]=_(c),o[s].c(),o[s].m(n,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=a.length}},i:function(r){s||(k(t.$$.fragment,r),s=!0)},o:function(r){q(t.$$.fragment,r),s=!1},d:function(r){D(t,r),r&&h(e),r&&h(n),E(o,r)}}}var F=B(A||(A=S(['\n  query video {\n        jpvideos(sort:"ordre:desc") {\n            titre\n            cover{\n                url\n            }\n  \t        video{\n                  url\n                }\n  }\n}\n'])));function H(){return K.apply(this,arguments)}function K(){return(K=V(r.mark((function t(){var e,n;return r.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=new z({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch}),r.next=3,e.query({query:F});case 3:return n=r.sent,r.abrupt("return",{videos:n.data.jpvideos});case 5:case"end":return r.stop()}}),t,this)})))).apply(this,arguments)}var P="https://www.grldfaure.xyz";function T(r,t,e){var n=t.videos;return r.$$set=function(r){"videos"in r&&e(0,n=r.videos)},[n]}var G=function(r){t(n,c);var e=L(n);function n(r){var t;return s(this,n),t=e.call(this),a(o(t),r,T,C,i,{videos:0}),t}return n}();export default G;export{H as preload};
