import{v as t,_ as r,a as e,b as n,c as s,i as a,d as c,S as o,s as i,e as l,f as u,t as f,g as h,h as p,l as v,j as m,k as g,m as d,o as y,p as w,r as b,C as x,q as E,u as R,F as q}from"./client.6ae2c760.js";import{g as P,_ as S,a as j,D as k}from"./bundle.esm.b0bd8a40.js";var A;function B(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,a=e(t);if(r){var c=e(this).constructor;s=Reflect.construct(a,arguments,c)}else s=a.apply(this,arguments);return n(this,s)}}function I(t,r,e){var n=t.slice();return n[1]=r[e],n}function _(t){var r,e,n,s,a,c,o,i,x,E,R,q,P,S,j=t[1].commentaire+"";return{c:function(){r=l("article"),e=l("img"),a=u(),c=l("p"),o=l("a"),i=f(j),x=l("br"),E=u(),R=l("span"),q=f("☞"),S=u(),this.h()},l:function(t){r=h(t,"ARTICLE",{class:!0});var n=p(r);e=h(n,"IMG",{src:!0,alt:!0,class:!0}),a=v(n),c=h(n,"P",{class:!0});var s=p(c);o=h(s,"A",{href:!0,target:!0,class:!0});var l=p(o);i=m(l,j),x=h(l,"BR",{}),E=v(l),R=h(l,"SPAN",{class:!0});var u=p(R);q=m(u,"☞"),u.forEach(g),l.forEach(g),s.forEach(g),S=v(n),n.forEach(g),this.h()},h:function(){e.src!==(n=F+t[1].logoSite.url)&&d(e,"src",n),d(e,"alt",s=t[1].commentaire),d(e,"class","svelte-gtmipr"),d(R,"class","svelte-gtmipr"),d(o,"href",P=t[1].lien),d(o,"target","_blank"),d(o,"class","svelte-gtmipr"),d(c,"class","svelte-gtmipr"),d(r,"class","svelte-gtmipr")},m:function(t,n){y(t,r,n),w(r,e),w(r,a),w(r,c),w(c,o),w(o,i),w(o,x),w(o,E),w(o,R),w(R,q),w(r,S)},p:function(t,r){1&r&&e.src!==(n=F+t[1].logoSite.url)&&d(e,"src",n),1&r&&s!==(s=t[1].commentaire)&&d(e,"alt",s),1&r&&j!==(j=t[1].commentaire+"")&&b(i,j),1&r&&P!==(P=t[1].lien)&&d(o,"href",P)},d:function(t){t&&g(r)}}}function z(t){for(var r,e,n=t[0],s=[],a=0;a<n.length;a+=1)s[a]=_(I(t,n,a));return{c:function(){r=u(),e=l("div");for(var t=0;t<s.length;t+=1)s[t].c();this.h()},l:function(t){x('[data-svelte="svelte-j7ddmf"]',document.head).forEach(g),r=v(t),e=h(t,"DIV",{class:!0});for(var n=p(e),a=0;a<s.length;a+=1)s[a].l(n);n.forEach(g),this.h()},h:function(){document.title="Presse",d(e,"class","container svelte-gtmipr")},m:function(t,n){y(t,r,n),y(t,e,n);for(var a=0;a<s.length;a+=1)s[a].m(e,null)},p:function(t,r){var a=E(r,1)[0];if(1&a){var c;for(n=t[0],c=0;c<n.length;c+=1){var o=I(t,n,c);s[c]?s[c].p(o,a):(s[c]=_(o),s[c].c(),s[c].m(e,null))}for(;c<s.length;c+=1)s[c].d(1);s.length=n.length}},i:R,o:R,d:function(t){t&&g(r),t&&g(e),q(s,t)}}}var C=P(A||(A=S(['\n      query presse {\n        presses(sort:"dateParution:desc"){\n            id\n            commentaire\n            lien\n            logoSite{\n                url\n  \t        }\n        }\n    }\n    '])));function D(t){return $.apply(this,arguments)}function $(){return($=j(t.mark((function r(e){var n,s;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.params,e.query,n=new k({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch}),t.next=4,n.query({query:C});case 4:return s=t.sent,t.abrupt("return",{posts:s.data.presses});case 6:case"end":return t.stop()}}),r,this)})))).apply(this,arguments)}var F="https://www.grldfaure.xyz";function G(t,r,e){var n=r.posts;return t.$$set=function(t){"posts"in t&&e(0,n=t.posts)},[n]}var L=function(t){r(n,o);var e=B(n);function n(t){var r;return s(this,n),r=e.call(this),a(c(r),t,G,z,i,{posts:0}),r}return n}();export default L;export{D as preload};
