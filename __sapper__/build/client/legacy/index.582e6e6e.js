import{v as t,_ as r,a as n,b as e,c as s,i as a,d as c,S as o,s as i,e as l,f as u,t as f,g as h,h as p,l as v,j as m,k as g,m as d,o as y,p as E,r as R,C as q,q as b,u as x,F as P}from"./client.07a22841.js";import{g as S,_ as j,a as k,D as w}from"./bundle.esm.6a4a433e.js";var A;function B(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,a=n(t);if(r){var c=n(this).constructor;s=Reflect.construct(a,arguments,c)}else s=a.apply(this,arguments);return e(this,s)}}function I(t,r,n){var e=t.slice();return e[1]=r[n],e}function _(t){var r,n,e,s,a,c,o,i,q,b,x,P,S,j,k=t[1].commentaire+"";return{c:function(){r=l("article"),n=l("img"),a=u(),c=l("p"),o=l("a"),i=f(k),q=l("br"),b=u(),x=l("span"),P=f("☞"),j=u(),this.h()},l:function(t){r=h(t,"ARTICLE",{class:!0});var e=p(r);n=h(e,"IMG",{src:!0,alt:!0,class:!0}),a=v(e),c=h(e,"P",{class:!0});var s=p(c);o=h(s,"A",{href:!0,target:!0,class:!0});var l=p(o);i=m(l,k),q=h(l,"BR",{}),b=v(l),x=h(l,"SPAN",{class:!0});var u=p(x);P=m(u,"☞"),u.forEach(g),l.forEach(g),s.forEach(g),j=v(e),e.forEach(g),this.h()},h:function(){n.src!==(e=G+t[1].logoSite.url)&&d(n,"src",e),d(n,"alt",s=t[1].commentaire),d(n,"class","svelte-gtmipr"),d(x,"class","svelte-gtmipr"),d(o,"href",S=t[1].lien),d(o,"target","_blank"),d(o,"class","svelte-gtmipr"),d(c,"class","svelte-gtmipr"),d(r,"class","svelte-gtmipr")},m:function(t,e){y(t,r,e),E(r,n),E(r,a),E(r,c),E(c,o),E(o,i),E(o,q),E(o,b),E(o,x),E(x,P),E(r,j)},p:function(t,r){1&r&&n.src!==(e=G+t[1].logoSite.url)&&d(n,"src",e),1&r&&s!==(s=t[1].commentaire)&&d(n,"alt",s),1&r&&k!==(k=t[1].commentaire+"")&&R(i,k),1&r&&S!==(S=t[1].lien)&&d(o,"href",S)},d:function(t){t&&g(r)}}}function C(t){for(var r,n,e=t[0],s=[],a=0;a<e.length;a+=1)s[a]=_(I(t,e,a));return{c:function(){r=u(),n=l("div");for(var t=0;t<s.length;t+=1)s[t].c();this.h()},l:function(t){q('[data-svelte="svelte-j7ddmf"]',document.head).forEach(g),r=v(t),n=h(t,"DIV",{class:!0});for(var e=p(n),a=0;a<s.length;a+=1)s[a].l(e);e.forEach(g),this.h()},h:function(){document.title="Presse",d(n,"class","container svelte-gtmipr")},m:function(t,e){y(t,r,e),y(t,n,e);for(var a=0;a<s.length;a+=1)s[a].m(n,null)},p:function(t,r){var a=b(r,1)[0];if(1&a){var c;for(e=t[0],c=0;c<e.length;c+=1){var o=I(t,e,c);s[c]?s[c].p(o,a):(s[c]=_(o),s[c].c(),s[c].m(n,null))}for(;c<s.length;c+=1)s[c].d(1);s.length=e.length}},i:x,o:x,d:function(t){t&&g(r),t&&g(n),P(s,t)}}}var D=S(A||(A=j(['\n      query presse {\n        presses(sort:"dateParution:desc"){\n            id\n            commentaire\n            lien\n            logoSite{\n                url\n  \t        }\n        }\n    }\n    '])));function $(t){return F.apply(this,arguments)}function F(){return(F=k(t.mark((function r(n){var e,s;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.params,n.query,e=new w({uri:"http://51.210.96.39:1337/graphql",fetch:this.fetch}),t.next=4,e.query({query:D});case 4:return s=t.sent,t.abrupt("return",{posts:s.data.presses});case 6:case"end":return t.stop()}}),r,this)})))).apply(this,arguments)}var G="http://51.210.96.39:1337";function L(t,r,n){var e=r.posts;return t.$$set=function(t){"posts"in t&&n(0,e=t.posts)},[e]}var M=function(t){r(e,o);var n=B(e);function e(t){var r;return s(this,e),r=n.call(this),a(c(r),t,L,C,i,{posts:0}),r}return e}();export default M;export{$ as preload};
