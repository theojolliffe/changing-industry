import{S as C,i as I,s as L,e as v,t as O,k as y,w as S,_ as P,c as H,a as J,h as A,d as w,m as j,x as k,$ as D,f as F,g as E,H as p,y as K,q as U,o as q,B}from"./vendor-29c5fe09.js";import{a as R,S as T}from"./Share-e1d8820e.js";function V(a){let t,s,l,f,u,g,o,i,m,_=a[6](a[0])+"",d,c,h;return o=new R({props:{items:a[3],value:a[4],idKey:"code",labelKey:"name",placeholder:"Pick a job"}}),o.$on("select",a[9]),c=new T({props:{domain:a[2],id:a[0],section:a[1],directory:"occupation"}}),{c(){t=v("div"),s=v("h2"),l=O("How many people do your job?"),f=y(),u=v("br"),g=y(),S(o.$$.fragment),i=y(),m=new P,d=y(),S(c.$$.fragment),this.h()},l(e){t=H(e,"DIV",{style:!0});var n=J(t);s=H(n,"H2",{});var r=J(s);l=A(r,"How many people do your job?"),r.forEach(w),f=j(n),u=H(n,"BR",{}),g=j(n),k(o.$$.fragment,n),i=j(n),m=D(n),n.forEach(w),d=j(e),k(c.$$.fragment,e),this.h()},h(){m.a=null,F(t,"max-width","800px")},m(e,n){E(e,t,n),p(t,s),p(s,l),p(t,f),p(t,u),p(t,g),K(o,t,null),p(t,i),m.m(_,t),E(e,d,n),K(c,e,n),h=!0},p(e,[n]){const r={};n&8&&(r.items=e[3]),o.$set(r),(!h||n&1)&&_!==(_=e[6](e[0])+"")&&m.p(_);const b={};n&4&&(b.domain=e[2]),n&1&&(b.id=e[0]),n&2&&(b.section=e[1]),c.$set(b)},i(e){h||(U(o.$$.fragment,e),U(c.$$.fragment,e),h=!0)},o(e){q(o.$$.fragment,e),q(c.$$.fragment,e),h=!1},d(e){e&&w(t),B(o),e&&w(d),B(c,e)}}}function z(a){return a.charAt(0).toLowerCase()+a.slice(1)}function G(a,t,s){let{occupations:l}=t,{section:f}=t,{template:u}=t,{domain:g}=t,{id:o="default"}=t,i=Object.keys(l);i=i.map(e=>({code:e.slice(0,4),name:e.slice(5)}));let m={};i.forEach(e=>{m[e.code]=e.name}),console.log("options",i);let _=i.filter(e=>e.code==o)[0];console.log("val",_),Object.keys(l).map(function(e,n){let r=parseInt(l[e].replace(/,/g,""));r=parseFloat(r.toPrecision(2)),s(7,l[e.slice(0,4)]=r,l),delete l[e]});function d(e){return s(0,o=e.code),"ok"}function c(e){return rosaenlg_en_US.render(u,{language:"en_UK",section:f,id:e,occupations:l,occLU:m,uncap:z})}const h=e=>d(e.detail);return a.$$set=e=>{"occupations"in e&&s(7,l=e.occupations),"section"in e&&s(1,f=e.section),"template"in e&&s(8,u=e.template),"domain"in e&&s(2,g=e.domain),"id"in e&&s(0,o=e.id)},[o,f,g,i,_,d,c,l,u,h]}class Q extends C{constructor(t){super();I(this,t,G,V,L,{occupations:7,section:1,template:8,domain:2,id:0})}}export{Q as J};
