import{X as b,S as q,i as S,s as j,w as E,x as M,y as T,q as y,o as p,B as U,e as B,k as C,l as h,U as N,c as O,a as P,d as f,m as R,M as v,b as z,H as D,g as w,O as H,p as I,n as L}from"../../chunks/vendor-29c5fe09.js";import{a as g}from"../../chunks/paths-396f020f.js";import{M as X}from"../../chunks/Module-25d289d1.js";import"../../chunks/Share-8c99fe20.js";function k(o){let t,s;return t=new X({props:{occupations:o[6],industry:o[2],industry_all:o[4],industry_tot:o[3],template:o[5],id:o[1],section:o[0]}}),{c(){E(t.$$.fragment)},l(e){M(t.$$.fragment,e)},m(e,n){T(t,e,n),s=!0},p(e,n){const u={};n&64&&(u.occupations=e[6]),n&4&&(u.industry=e[2]),n&16&&(u.industry_all=e[4]),n&8&&(u.industry_tot=e[3]),n&32&&(u.template=e[5]),n&2&&(u.id=e[1]),n&1&&(u.section=e[0]),t.$set(u)},i(e){s||(y(t.$$.fragment,e),s=!0)},o(e){p(t.$$.fragment,e),s=!1},d(e){U(t,e)}}}function A(o){let t,s,e,n,u,c,d,a=o[7]&&k(o);return{c(){t=B("script"),e=C(),a&&a.c(),n=h(),this.h()},l(l){const r=N('[data-svelte="svelte-k5nz1c"]',document.head);t=O(r,"SCRIPT",{src:!0});var _=P(t);_.forEach(f),r.forEach(f),e=R(l),a&&a.l(l),n=h(),this.h()},h(){v(t.src,s="https://unpkg.com/rosaenlg@3.0.1/dist/rollup/rosaenlg_tiny_en_US_3.0.1_comp.js")||z(t,"src",s)},m(l,r){D(document.head,t),w(l,e,r),a&&a.m(l,r),w(l,n,r),u=!0,c||(d=H(t,"load",o[8]()),c=!0)},p(l,[r]){l[7]?a?(a.p(l,r),r&128&&y(a,1)):(a=k(l),a.c(),y(a,1),a.m(n.parentNode,n)):a&&(L(),p(a,1,1,()=>{a=null}),I())},i(l){u||(y(a),u=!0)},o(l){p(a),u=!1},d(l){f(t),l&&f(e),a&&a.d(l),l&&f(n),c=!1,d()}}}async function V({params:o,fetch:t}){let s=o.slug,e=s.split("-")[0],n=s.split("-")[1],c=await(await t(`${g}/data/industry_fake.json`)).json(),d=c.Total,a=c[e];delete c.Total;let r=await(await t(`${g}/data/template.pug`)).text(),_=await t(`${g}/data/occupations.csv`);_=await _.text();let m={};return b.parse(_).data.forEach(i=>{i[0]!="Occupation"&&(m[i[0]]=i[1])}),{props:{industry:a,industry_tot:d,industry_all:c,slug:s,id:e,section:n,template:r,occupations:m}}}function F(o,t,s){let{section:e}=t,{id:n}=t,{slug:u}=t,{industry:c}=t,{industry_tot:d}=t,{industry_all:a}=t,{template:l}=t,{occupations:r}=t,_;const m=()=>{s(7,_=!0)};return o.$$set=i=>{"section"in i&&s(0,e=i.section),"id"in i&&s(1,n=i.id),"slug"in i&&s(9,u=i.slug),"industry"in i&&s(2,c=i.industry),"industry_tot"in i&&s(3,d=i.industry_tot),"industry_all"in i&&s(4,a=i.industry_all),"template"in i&&s(5,l=i.template),"occupations"in i&&s(6,r=i.occupations)},o.$$.update=()=>{o.$$.dirty&128&&console.log("loaded",_)},[e,n,c,d,a,l,r,_,m,u]}class W extends q{constructor(t){super();S(this,t,F,A,j,{section:0,id:1,slug:9,industry:2,industry_tot:3,industry_all:4,template:5,occupations:6})}}export{W as default,V as load};
