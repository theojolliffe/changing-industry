import{X as q,S,i as E,s as M,w as T,x as U,y as B,q as w,o as p,B as C,e as N,k as O,l as k,U as P,c as R,a as z,d as g,m as D,M as H,b as I,H as L,g as j,O as X,p as v,n as A}from"../../chunks/vendor-29c5fe09.js";import{a as y}from"../../chunks/paths-396f020f.js";import{M as F}from"../../chunks/Module-5b299d54.js";import"../../chunks/Share-8c99fe20.js";function b(o){let t,n;return t=new F({props:{occupations:o[6],industry:o[2],industry_all:o[4],industry_tot:o[3],template:o[5],id:o[1],section:o[0],indlang:o[7]}}),{c(){T(t.$$.fragment)},l(e){U(t.$$.fragment,e)},m(e,i){B(t,e,i),n=!0},p(e,i){const u={};i&64&&(u.occupations=e[6]),i&4&&(u.industry=e[2]),i&16&&(u.industry_all=e[4]),i&8&&(u.industry_tot=e[3]),i&32&&(u.template=e[5]),i&2&&(u.id=e[1]),i&1&&(u.section=e[0]),i&128&&(u.indlang=e[7]),t.$set(u)},i(e){n||(w(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){C(t,e)}}}function G(o){let t,n,e,i,u,c,_,a=o[8]&&b(o);return{c(){t=N("script"),e=O(),a&&a.c(),i=k(),this.h()},l(l){const r=P('[data-svelte="svelte-k5nz1c"]',document.head);t=R(r,"SCRIPT",{src:!0});var d=z(t);d.forEach(g),r.forEach(g),e=D(l),a&&a.l(l),i=k(),this.h()},h(){H(t.src,n="https://unpkg.com/rosaenlg@3.0.1/dist/rollup/rosaenlg_tiny_en_US_3.0.1_comp.js")||I(t,"src",n)},m(l,r){L(document.head,t),j(l,e,r),a&&a.m(l,r),j(l,i,r),u=!0,c||(_=X(t,"load",o[9]()),c=!0)},p(l,[r]){l[8]?a?(a.p(l,r),r&256&&w(a,1)):(a=b(l),a.c(),w(a,1),a.m(i.parentNode,i)):a&&(A(),p(a,1,1,()=>{a=null}),v())},i(l){u||(w(a),u=!0)},o(l){p(a),u=!1},d(l){g(t),l&&g(e),a&&a.d(l),l&&g(i),c=!1,_()}}}async function Y({params:o,fetch:t}){let n=o.slug,e=n.split("-")[0],i=n.split("-")[1],c=await(await t(`${y}/data/industrywords.json`)).json(),a=await(await t(`${y}/data/industry_fake.json`)).json(),l=a.Total,r=a[e];delete a.Total;let f=await(await t(`${y}/data/template.pug`)).text(),m=await t(`${y}/data/occupations.csv`);m=await m.text();let s={};return q.parse(m).data.forEach(h=>{h[0]!="Occupation"&&(s[h[0]]=h[1])}),{props:{industry:r,industry_tot:l,industry_all:a,slug:n,id:e,section:i,template:f,occupations:s,indlang:c}}}function J(o,t,n){let{section:e}=t,{id:i}=t,{slug:u}=t,{industry:c}=t,{industry_tot:_}=t,{industry_all:a}=t,{template:l}=t,{occupations:r}=t,{indlang:d}=t,f;const m=()=>{n(8,f=!0)};return o.$$set=s=>{"section"in s&&n(0,e=s.section),"id"in s&&n(1,i=s.id),"slug"in s&&n(10,u=s.slug),"industry"in s&&n(2,c=s.industry),"industry_tot"in s&&n(3,_=s.industry_tot),"industry_all"in s&&n(4,a=s.industry_all),"template"in s&&n(5,l=s.template),"occupations"in s&&n(6,r=s.occupations),"indlang"in s&&n(7,d=s.indlang)},o.$$.update=()=>{o.$$.dirty&256&&console.log("loaded",f)},[e,i,c,_,a,l,r,d,f,m,u]}class Z extends S{constructor(t){super();E(this,t,J,G,M,{section:0,id:1,slug:10,industry:2,industry_tot:3,industry_all:4,template:5,occupations:6,indlang:7})}}export{Z as default,Y as load};
