import{S as t,i as e,s as n,n as o,e as l,f as i,j as c,k as r,h as a,a as d,q as h,d as m,r as p,u as s,l as u}from"./client.ae185d7f.js";function g(t,e,n){const o=t.slice();return o[8]=e[n],o}function f(t,e,n){const o=t.slice();return o[11]=e[n],o}function y(t,e,n){const o=t.slice();return o[14]=e[n],o}function T(t){return document.title=t[0],{c:o,l:o,m:o,d:o}}function w(t){let e;return{c(){e=l("meta"),this.h()},l(t){e=i(t,"META",{name:!0,content:!0}),this.h()},h(){c(e,"name","description"),c(e,"content",t[3])},m(t,n){r(t,e,n)},p(t,n){8&n&&c(e,"content",t[3])},d(t){t&&a(e)}}}function A(t){let e;return{c(){e=l("meta"),this.h()},l(t){e=i(t,"META",{name:!0,content:!0}),this.h()},h(){c(e,"name","keywords"),c(e,"content",t[4])},m(t,n){r(t,e,n)},p(t,n){16&n&&c(e,"content",t[4])},d(t){t&&a(e)}}}function N(t){let e,n,o,l,i,c,p=t[6].title&&E(t),s=t[6].description&&M(t),u=(t[6].url||t[5])&&x(t),g=t[6].type&&$(t),f=t[6].article&&b(t),y=t[6].images&&t[6].images.length&&q(t);return{c(){p&&p.c(),e=d(),s&&s.c(),n=d(),u&&u.c(),o=d(),g&&g.c(),l=d(),f&&f.c(),i=d(),y&&y.c(),c=h()},l(t){p&&p.l(t),e=m(t),s&&s.l(t),n=m(t),u&&u.l(t),o=m(t),g&&g.l(t),l=m(t),f&&f.l(t),i=m(t),y&&y.l(t),c=h()},m(t,a){p&&p.m(t,a),r(t,e,a),s&&s.m(t,a),r(t,n,a),u&&u.m(t,a),r(t,o,a),g&&g.m(t,a),r(t,l,a),f&&f.m(t,a),r(t,i,a),y&&y.m(t,a),r(t,c,a)},p(t,r){t[6].title?p?p.p(t,r):(p=E(t),p.c(),p.m(e.parentNode,e)):p&&(p.d(1),p=null),t[6].description?s?s.p(t,r):(s=M(t),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null),t[6].url||t[5]?u?u.p(t,r):(u=x(t),u.c(),u.m(o.parentNode,o)):u&&(u.d(1),u=null),t[6].type?g?g.p(t,r):(g=$(t),g.c(),g.m(l.parentNode,l)):g&&(g.d(1),g=null),t[6].article?f?f.p(t,r):(f=b(t),f.c(),f.m(i.parentNode,i)):f&&(f.d(1),f=null),t[6].images&&t[6].images.length?y?y.p(t,r):(y=q(t),y.c(),y.m(c.parentNode,c)):y&&(y.d(1),y=null)},d(t){p&&p.d(t),t&&a(e),s&&s.d(t),t&&a(n),u&&u.d(t),t&&a(o),g&&g.d(t),t&&a(l),f&&f.d(t),t&&a(i),y&&y.d(t),t&&a(c)}}}function E(t){let e,n;return{c(){e=l("meta"),this.h()},l(t){e=i(t,"META",{property:!0,content:!0}),this.h()},h(){c(e,"property","og:title"),c(e,"content",n=t[6].title)},m(t,n){r(t,e,n)},p(t,o){64&o&&n!==(n=t[6].title)&&c(e,"content",n)},d(t){t&&a(e)}}}function M(t){let e,n;return{c(){e=l("meta"),this.h()},l(t){e=i(t,"META",{property:!0,content:!0}),this.h()},h(){c(e,"property","og:description"),c(e,"content",n=t[6].description)},m(t,n){r(t,e,n)},p(t,o){64&o&&n!==(n=t[6].description)&&c(e,"content",n)},d(t){t&&a(e)}}}function x(t){let e,n;return{c(){e=l("meta"),this.h()},l(t){e=i(t,"META",{property:!0,content:!0}),this.h()},h(){c(e,"property","og:url"),c(e,"content",n=t[6].url||t[5])},m(t,n){r(t,e,n)},p(t,o){96&o&&n!==(n=t[6].url||t[5])&&c(e,"content",n)},d(t){t&&a(e)}}}function $(t){let e,n;return{c(){e=l("meta"),this.h()},l(t){e=i(t,"META",{property:!0,content:!0}),this.h()},h(){c(e,"property","og:type"),c(e,"content",n=t[6].type.toLowerCase())},m(t,n){r(t,e,n)},p(t,o){64&o&&n!==(n=t[6].type.toLowerCase())&&c(e,"content",n)},d(t){t&&a(e)}}}function b(t){let e,n,o,l,i,c,p=t[6].article.publishedTime&&k(t),s=t[6].article.modifiedTime&&S(t),u=t[6].article.expirationTime&&_(t),g=t[6].article.section&&G(t),f=t[6].article.authors&&t[6].article.authors.length&&j(t),y=t[6].article.tags&&t[6].article.tags.length&&C(t);return{c(){p&&p.c(),e=d(),s&&s.c(),n=d(),u&&u.c(),o=d(),g&&g.c(),l=d(),f&&f.c(),i=d(),y&&y.c(),c=h()},l(t){p&&p.l(t),e=m(t),s&&s.l(t),n=m(t),u&&u.l(t),o=m(t),g&&g.l(t),l=m(t),f&&f.l(t),i=m(t),y&&y.l(t),c=h()},m(t,a){p&&p.m(t,a),r(t,e,a),s&&s.m(t,a),r(t,n,a),u&&u.m(t,a),r(t,o,a),g&&g.m(t,a),r(t,l,a),f&&f.m(t,a),r(t,i,a),y&&y.m(t,a),r(t,c,a)},p(t,r){t[6].article.publishedTime?p?p.p(t,r):(p=k(t),p.c(),p.m(e.parentNode,e)):p&&(p.d(1),p=null),t[6].article.modifiedTime?s?s.p(t,r):(s=S(t),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null),t[6].article.expirationTime?u?u.p(t,r):(u=_(t),u.c(),u.m(o.parentNode,o)):u&&(u.d(1),u=null),t[6].article.section?g?g.p(t,r):(g=G(t),g.c(),g.m(l.parentNode,l)):g&&(g.d(1),g=null),t[6].article.authors&&t[6].article.authors.length?f?f.p(t,r):(f=j(t),f.c(),f.m(i.parentNode,i)):f&&(f.d(1),f=null),t[6].article.tags&&t[6].article.tags.length?y?y.p(t,r):(y=C(t),y.c(),y.m(c.parentNode,c)):y&&(y.d(1),y=null)},d(t){p&&p.d(t),t&&a(e),s&&s.d(t),t&&a(n),u&&u.d(t),t&&a(o),g&&g.d(t),t&&a(l),f&&f.d(t),t&&a(i),y&&y.d(t),t&&a(c)}}}function k(t){let e,n;return{c(){e=l("meta"),this.h()},l(t){e=i(t,"META",{property:!0,content:!0}),this.h()},h(){c(e,"property","article:published_time"),c(e,"content",n=t[6].article.publishedTime)},m(t,n){r(t,e,n)},p(t,o){64&o&&n!==(n=t[6].article.publishedTime)&&c(e,"content",n)},d(t){t&&a(e)}}}function S(t){let e,n;return{c(){e=l("meta"),this.h()},l(t){e=i(t,"META",{property:!0,content:!0}),this.h()},h(){c(e,"property","article:modified_time"),c(e,"content",n=t[6].article.modifiedTime)},m(t,n){r(t,e,n)},p(t,o){64&o&&n!==(n=t[6].article.modifiedTime)&&c(e,"content",n)},d(t){t&&a(e)}}}function _(t){let e,n;return{c(){e=l("meta"),this.h()},l(t){e=i(t,"META",{property:!0,content:!0}),this.h()},h(){c(e,"property","article:expiration_time"),c(e,"content",n=t[6].article.expirationTime)},m(t,n){r(t,e,n)},p(t,o){64&o&&n!==(n=t[6].article.expirationTime)&&c(e,"content",n)},d(t){t&&a(e)}}}function G(t){let e,n;return{c(){e=l("meta"),this.h()},l(t){e=i(t,"META",{property:!0,content:!0}),this.h()},h(){c(e,"property","article:section"),c(e,"content",n=t[6].article.section)},m(t,n){r(t,e,n)},p(t,o){64&o&&n!==(n=t[6].article.section)&&c(e,"content",n)},d(t){t&&a(e)}}}function j(t){let e,n=t[6].article.authors,o=[];for(let e=0;e<n.length;e+=1)o[e]=v(y(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=h()},l(t){for(let e=0;e<o.length;e+=1)o[e].l(t);e=h()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);r(t,e,n)},p(t,l){if(64&l){let i;for(n=t[6].article.authors,i=0;i<n.length;i+=1){const c=y(t,n,i);o[i]?o[i].p(c,l):(o[i]=v(c),o[i].c(),o[i].m(e.parentNode,e))}for(;i<o.length;i+=1)o[i].d(1);o.length=n.length}},d(t){p(o,t),t&&a(e)}}}function v(t){let e,n;return{c(){e=l("meta"),this.h()},l(t){e=i(t,"META",{property:!0,content:!0}),this.h()},h(){c(e,"property","article:author"),c(e,"content",n=t[14])},m(t,n){r(t,e,n)},p(t,o){64&o&&n!==(n=t[14])&&c(e,"content",n)},d(t){t&&a(e)}}}function C(t){let e,n=t[6].article.tags,o=[];for(let e=0;e<n.length;e+=1)o[e]=L(f(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=h()},l(t){for(let e=0;e<o.length;e+=1)o[e].l(t);e=h()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);r(t,e,n)},p(t,l){if(64&l){let i;for(n=t[6].article.tags,i=0;i<n.length;i+=1){const c=f(t,n,i);o[i]?o[i].p(c,l):(o[i]=L(c),o[i].c(),o[i].m(e.parentNode,e))}for(;i<o.length;i+=1)o[i].d(1);o.length=n.length}},d(t){p(o,t),t&&a(e)}}}function L(t){let e,n;return{c(){e=l("meta"),this.h()},l(t){e=i(t,"META",{property:!0,content:!0}),this.h()},h(){c(e,"property","article:tag"),c(e,"content",n=t[11])},m(t,n){r(t,e,n)},p(t,o){64&o&&n!==(n=t[11])&&c(e,"content",n)},d(t){t&&a(e)}}}function q(t){let e,n=t[6].images,o=[];for(let e=0;e<n.length;e+=1)o[e]=F(g(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=h()},l(t){for(let e=0;e<o.length;e+=1)o[e].l(t);e=h()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);r(t,e,n)},p(t,l){if(64&l){let i;for(n=t[6].images,i=0;i<n.length;i+=1){const c=g(t,n,i);o[i]?o[i].p(c,l):(o[i]=F(c),o[i].c(),o[i].m(e.parentNode,e))}for(;i<o.length;i+=1)o[i].d(1);o.length=n.length}},d(t){p(o,t),t&&a(e)}}}function z(t){let e,n;return{c(){e=l("meta"),this.h()},l(t){e=i(t,"META",{property:!0,content:!0}),this.h()},h(){c(e,"property","og:image:alt"),c(e,"content",n=t[8].alt)},m(t,n){r(t,e,n)},p(t,o){64&o&&n!==(n=t[8].alt)&&c(e,"content",n)},d(t){t&&a(e)}}}function B(t){let e,n;return{c(){e=l("meta"),this.h()},l(t){e=i(t,"META",{property:!0,content:!0}),this.h()},h(){c(e,"property","og:image:width"),c(e,"content",n=t[8].width.toString())},m(t,n){r(t,e,n)},p(t,o){64&o&&n!==(n=t[8].width.toString())&&c(e,"content",n)},d(t){t&&a(e)}}}function D(t){let e,n;return{c(){e=l("meta"),this.h()},l(t){e=i(t,"META",{property:!0,content:!0}),this.h()},h(){c(e,"property","og:image:height"),c(e,"content",n=t[8].height.toString())},m(t,n){r(t,e,n)},p(t,o){64&o&&n!==(n=t[8].height.toString())&&c(e,"content",n)},d(t){t&&a(e)}}}function F(t){let e,n,o,p,s,u,g=t[8].alt&&z(t),f=t[8].width&&B(t),y=t[8].height&&D(t);return{c(){e=l("meta"),o=d(),g&&g.c(),p=d(),f&&f.c(),s=d(),y&&y.c(),u=h(),this.h()},l(t){e=i(t,"META",{property:!0,content:!0}),o=m(t),g&&g.l(t),p=m(t),f&&f.l(t),s=m(t),y&&y.l(t),u=h(),this.h()},h(){c(e,"property","og:image"),c(e,"content",n=t[8].url)},m(t,n){r(t,e,n),r(t,o,n),g&&g.m(t,n),r(t,p,n),f&&f.m(t,n),r(t,s,n),y&&y.m(t,n),r(t,u,n)},p(t,o){64&o&&n!==(n=t[8].url)&&c(e,"content",n),t[8].alt?g?g.p(t,o):(g=z(t),g.c(),g.m(p.parentNode,p)):g&&(g.d(1),g=null),t[8].width?f?f.p(t,o):(f=B(t),f.c(),f.m(s.parentNode,s)):f&&(f.d(1),f=null),t[8].height?y?y.p(t,o):(y=D(t),y.c(),y.m(u.parentNode,u)):y&&(y.d(1),y=null)},d(t){t&&a(e),t&&a(o),g&&g.d(t),t&&a(p),f&&f.d(t),t&&a(s),y&&y.d(t),t&&a(u)}}}function H(t){let e,n,o,p,s,u,g,f=t[7].site&&I(t),y=t[7].title&&J(t),T=t[7].description&&K(t),w=t[7].image&&O(t),A=t[7].imageAlt&&P(t);return{c(){e=l("meta"),n=d(),f&&f.c(),o=d(),y&&y.c(),p=d(),T&&T.c(),s=d(),w&&w.c(),u=d(),A&&A.c(),g=h(),this.h()},l(t){e=i(t,"META",{name:!0,content:!0}),n=m(t),f&&f.l(t),o=m(t),y&&y.l(t),p=m(t),T&&T.l(t),s=m(t),w&&w.l(t),u=m(t),A&&A.l(t),g=h(),this.h()},h(){c(e,"name","twitter:card"),c(e,"content","summary_large_image")},m(t,l){r(t,e,l),r(t,n,l),f&&f.m(t,l),r(t,o,l),y&&y.m(t,l),r(t,p,l),T&&T.m(t,l),r(t,s,l),w&&w.m(t,l),r(t,u,l),A&&A.m(t,l),r(t,g,l)},p(t,e){t[7].site?f?f.p(t,e):(f=I(t),f.c(),f.m(o.parentNode,o)):f&&(f.d(1),f=null),t[7].title?y?y.p(t,e):(y=J(t),y.c(),y.m(p.parentNode,p)):y&&(y.d(1),y=null),t[7].description?T?T.p(t,e):(T=K(t),T.c(),T.m(s.parentNode,s)):T&&(T.d(1),T=null),t[7].image?w?w.p(t,e):(w=O(t),w.c(),w.m(u.parentNode,u)):w&&(w.d(1),w=null),t[7].imageAlt?A?A.p(t,e):(A=P(t),A.c(),A.m(g.parentNode,g)):A&&(A.d(1),A=null)},d(t){t&&a(e),t&&a(n),f&&f.d(t),t&&a(o),y&&y.d(t),t&&a(p),T&&T.d(t),t&&a(s),w&&w.d(t),t&&a(u),A&&A.d(t),t&&a(g)}}}function I(t){let e,n;return{c(){e=l("meta"),this.h()},l(t){e=i(t,"META",{name:!0,content:!0}),this.h()},h(){c(e,"name","twitter:site"),c(e,"content",n=t[7].site)},m(t,n){r(t,e,n)},p(t,o){128&o&&n!==(n=t[7].site)&&c(e,"content",n)},d(t){t&&a(e)}}}function J(t){let e,n;return{c(){e=l("meta"),this.h()},l(t){e=i(t,"META",{name:!0,content:!0}),this.h()},h(){c(e,"name","twitter:title"),c(e,"content",n=t[7].title)},m(t,n){r(t,e,n)},p(t,o){128&o&&n!==(n=t[7].title)&&c(e,"content",n)},d(t){t&&a(e)}}}function K(t){let e,n;return{c(){e=l("meta"),this.h()},l(t){e=i(t,"META",{name:!0,content:!0}),this.h()},h(){c(e,"name","twitter:description"),c(e,"content",n=t[7].description)},m(t,n){r(t,e,n)},p(t,o){128&o&&n!==(n=t[7].description)&&c(e,"content",n)},d(t){t&&a(e)}}}function O(t){let e,n;return{c(){e=l("meta"),this.h()},l(t){e=i(t,"META",{name:!0,content:!0}),this.h()},h(){c(e,"name","twitter:image"),c(e,"content",n=t[7].image)},m(t,n){r(t,e,n)},p(t,o){128&o&&n!==(n=t[7].image)&&c(e,"content",n)},d(t){t&&a(e)}}}function P(t){let e,n;return{c(){e=l("meta"),this.h()},l(t){e=i(t,"META",{name:!0,content:!0}),this.h()},h(){c(e,"name","twitter:image:alt"),c(e,"content",n=t[7].imageAlt)},m(t,n){r(t,e,n)},p(t,o){128&o&&n!==(n=t[7].imageAlt)&&c(e,"content",n)},d(t){t&&a(e)}}}function Q(t){let e,n,r,d,m,p,g,f,y=t[0]&&T(t),E=t[3]&&w(t),M=t[4]&&A(t),x=t[6]&&N(t),$=t[7]&&H(t);return{c(){y&&y.c(),e=l("meta"),r=l("meta"),E&&E.c(),m=h(),M&&M.c(),p=h(),x&&x.c(),g=h(),$&&$.c(),f=h(),this.h()},l(t){const n=s('[data-svelte="svelte-s135k3"]',document.head);y&&y.l(n),e=i(n,"META",{name:!0,content:!0}),r=i(n,"META",{name:!0,content:!0}),E&&E.l(n),m=h(),M&&M.l(n),p=h(),x&&x.l(n),g=h(),$&&$.l(n),f=h(),n.forEach(a),this.h()},h(){c(e,"name","robots"),c(e,"content",n=`${t[1]?"noindex":"index"},${t[2]?"nofollow":"follow"}`),c(r,"name","googlebot"),c(r,"content",d=`${t[1]?"noindex":"index"},${t[2]?"nofollow":"follow"}`)},m(t,n){y&&y.m(document.head,null),u(document.head,e),u(document.head,r),E&&E.m(document.head,null),u(document.head,m),M&&M.m(document.head,null),u(document.head,p),x&&x.m(document.head,null),u(document.head,g),$&&$.m(document.head,null),u(document.head,f)},p(t,[o]){t[0]?y||(y=T(t),y.c(),y.m(e.parentNode,e)):y&&(y.d(1),y=null),6&o&&n!==(n=`${t[1]?"noindex":"index"},${t[2]?"nofollow":"follow"}`)&&c(e,"content",n),6&o&&d!==(d=`${t[1]?"noindex":"index"},${t[2]?"nofollow":"follow"}`)&&c(r,"content",d),t[3]?E?E.p(t,o):(E=w(t),E.c(),E.m(m.parentNode,m)):E&&(E.d(1),E=null),t[4]?M?M.p(t,o):(M=A(t),M.c(),M.m(p.parentNode,p)):M&&(M.d(1),M=null),t[6]?x?x.p(t,o):(x=N(t),x.c(),x.m(g.parentNode,g)):x&&(x.d(1),x=null),t[7]?$?$.p(t,o):($=H(t),$.c(),$.m(f.parentNode,f)):$&&($.d(1),$=null)},i:o,o:o,d(t){y&&y.d(t),a(e),a(r),E&&E.d(t),a(m),M&&M.d(t),a(p),x&&x.d(t),a(g),$&&$.d(t),a(f)}}}function R(t,e,n){let{title:o}=e,{noindex:l=!1}=e,{nofollow:i=!1}=e,{description:c}=e,{keywords:r}=e,{canonical:a}=e,{openGraph:d}=e,{twitter:h}=e;return t.$$set=t=>{"title"in t&&n(0,o=t.title),"noindex"in t&&n(1,l=t.noindex),"nofollow"in t&&n(2,i=t.nofollow),"description"in t&&n(3,c=t.description),"keywords"in t&&n(4,r=t.keywords),"canonical"in t&&n(5,a=t.canonical),"openGraph"in t&&n(6,d=t.openGraph),"twitter"in t&&n(7,h=t.twitter)},[o,l,i,c,r,a,d,h]}class U extends t{constructor(t){super(),e(this,t,R,Q,n,{title:0,noindex:1,nofollow:2,description:3,keywords:4,canonical:5,openGraph:6,twitter:7})}}export{U as S};