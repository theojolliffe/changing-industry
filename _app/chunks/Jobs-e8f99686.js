import{S as L,i as O,s as R,e as H,t as q,c as k,a as J,h as C,d as h,b as F,g as E,H as _,k as S,w as D,_ as z,m as j,x as V,$ as G,f as M,y as B,q as K,o as P,B as T}from"./vendor-29c5fe09.js";import{a as N,S as Q}from"./Share-8c99fe20.js";function U(i){let t,l,s;return{c(){t=H("div"),l=H("p"),s=q("DATA VIS"),this.h()},l(r){t=k(r,"DIV",{class:!0});var o=J(t);l=k(o,"P",{});var u=J(l);s=C(u,"DATA VIS"),u.forEach(h),o.forEach(h),this.h()},h(){F(t,"class","vis-cont svelte-1oed2pp")},m(r,o){E(r,t,o),_(t,l),_(l,s)},d(r){r&&h(t)}}}function W(i){let t,l,s,r,o,u,p,f,b,v=i[6](i[0])+"",g,y,w,e,m,d;o=new N({props:{items:i[3],value:i[4],idKey:"code",labelKey:"name",placeholder:"Pick a job"}}),o.$on("select",i[9]);let c=i[0]!="default"&&U();return m=new Q({props:{domain:i[2],id:i[0],section:i[1],directory:"occupation"}}),{c(){t=H("div"),l=H("h2"),s=q("How many people do your job?"),r=S(),D(o.$$.fragment),u=S(),p=H("br"),f=S(),b=new z,g=S(),c&&c.c(),y=S(),w=H("br"),e=S(),D(m.$$.fragment),this.h()},l(n){t=k(n,"DIV",{style:!0});var a=J(t);l=k(a,"H2",{});var A=J(l);s=C(A,"How many people do your job?"),A.forEach(h),r=j(a),V(o.$$.fragment,a),u=j(a),p=k(a,"BR",{}),f=j(a),b=G(a),g=j(a),c&&c.l(a),a.forEach(h),y=j(n),w=k(n,"BR",{}),e=j(n),V(m.$$.fragment,n),this.h()},h(){b.a=g,M(t,"max-width","800px")},m(n,a){E(n,t,a),_(t,l),_(l,s),_(t,r),B(o,t,null),_(t,u),_(t,p),_(t,f),b.m(v,t),_(t,g),c&&c.m(t,null),E(n,y,a),E(n,w,a),E(n,e,a),B(m,n,a),d=!0},p(n,[a]){const A={};a&8&&(A.items=n[3]),o.$set(A),(!d||a&1)&&v!==(v=n[6](n[0])+"")&&b.p(v),n[0]!="default"?c||(c=U(),c.c(),c.m(t,null)):c&&(c.d(1),c=null);const I={};a&4&&(I.domain=n[2]),a&1&&(I.id=n[0]),a&2&&(I.section=n[1]),m.$set(I)},i(n){d||(K(o.$$.fragment,n),K(m.$$.fragment,n),d=!0)},o(n){P(o.$$.fragment,n),P(m.$$.fragment,n),d=!1},d(n){n&&h(t),T(o),c&&c.d(),n&&h(y),n&&h(w),n&&h(e),T(m,n)}}}function X(i){return i.charAt(0).toLowerCase()+i.slice(1)}function Y(i,t,l){let{occupations:s}=t,{section:r}=t,{template:o}=t,{domain:u}=t,{id:p="default"}=t,f=Object.keys(s);f=f.map(e=>({code:e.slice(0,4),name:e.slice(5)}));let b={};f.forEach(e=>{b[e.code]=e.name}),console.log("options",f);let v=f.filter(e=>e.code==p)[0];console.log("val",v),Object.keys(s).map(function(e,m){let d=parseInt(s[e].replace(/,/g,""));d=parseFloat(d.toPrecision(2)),l(7,s[e.slice(0,4)]=d,s),delete s[e]});function g(e){return l(0,p=e.code),"ok"}function y(e){return rosaenlg_en_US.render(o,{language:"en_UK",section:r,id:e,occupations:s,occLU:b,uncap:X})}const w=e=>g(e.detail);return i.$$set=e=>{"occupations"in e&&l(7,s=e.occupations),"section"in e&&l(1,r=e.section),"template"in e&&l(8,o=e.template),"domain"in e&&l(2,u=e.domain),"id"in e&&l(0,p=e.id)},[p,r,u,f,v,g,y,s,o,w]}class $ extends L{constructor(t){super();O(this,t,Y,W,R,{occupations:7,section:1,template:8,domain:2,id:0})}}export{$ as J};