import{X as j,S as q,i as S,s as E,w as T,x as U,y as B,q as g,o as h,B as C,e as J,k as N,l as w,U as O,c as P,a as R,d as y,m as v,M as z,b as D,H,g as b,O as I,p as L,n as M}from"../../chunks/vendor-f71fbfed.js";import{a as p}from"../../chunks/paths-396f020f.js";import{J as X}from"../../chunks/Jobs-cd2d8d76.js";import"../../chunks/Share-361cb07e.js";import"../../chunks/SelectJob-ecfc37d1.js";function k(o){let t,i;return t=new X({props:{occupations:o[6],industry:o[2],industry_all:o[4],industry_tot:o[3],template:o[5],id:o[1],section:o[0],domain:o[7]}}),{c(){T(t.$$.fragment)},l(e){U(t.$$.fragment,e)},m(e,s){B(t,e,s),i=!0},p(e,s){const l={};s&64&&(l.occupations=e[6]),s&4&&(l.industry=e[2]),s&16&&(l.industry_all=e[4]),s&8&&(l.industry_tot=e[3]),s&32&&(l.template=e[5]),s&2&&(l.id=e[1]),s&1&&(l.section=e[0]),s&128&&(l.domain=e[7]),t.$set(l)},i(e){i||(g(t.$$.fragment,e),i=!0)},o(e){h(t.$$.fragment,e),i=!1},d(e){C(t,e)}}}function A(o){let t,i,e,s,l,c,f,a=o[8]&&k(o);return{c(){t=J("script"),e=N(),a&&a.c(),s=w(),this.h()},l(n){const r=O('[data-svelte="svelte-k5nz1c"]',document.head);t=P(r,"SCRIPT",{src:!0});var _=R(t);_.forEach(y),r.forEach(y),e=v(n),a&&a.l(n),s=w(),this.h()},h(){z(t.src,i="https://unpkg.com/rosaenlg@3.0.1/dist/rollup/rosaenlg_tiny_en_US_3.0.1_comp.js")||D(t,"src",i)},m(n,r){H(document.head,t),b(n,e,r),a&&a.m(n,r),b(n,s,r),l=!0,c||(f=I(t,"load",o[9]()),c=!0)},p(n,[r]){n[8]?a?(a.p(n,r),r&256&&g(a,1)):(a=k(n),a.c(),g(a,1),a.m(s.parentNode,s)):a&&(M(),h(a,1,1,()=>{a=null}),L())},i(n){l||(g(a),l=!0)},o(n){h(a),l=!1},d(n){y(t),n&&y(e),a&&a.d(n),n&&y(s),c=!1,f()}}}async function Y({params:o,fetch:t}){let i=o.occ,e=i.split("-")[0],s=i.split("-")[1],c=await(await t(`${p}/data/industry_fake.json`)).json(),f=c.Total,a=c[e];delete c.Total;let r=await(await t(`${p}/data/template.pug`)).text(),_=await t(`${p}/data/occupations.csv`);_=await _.text();let d={};return j.parse(_).data.forEach(m=>{m[0]!="Occupation"&&(d[m[0]]=m[1])}),{props:{industry:a,industry_tot:f,industry_all:c,slug:i,id:e,section:s,template:r,occupations:d}}}function F(o,t,i){let{section:e}=t,{id:s}=t,{slug:l}=t,{industry:c}=t,{industry_tot:f}=t,{industry_all:a}=t,{template:n}=t,{occupations:r}=t;console.log("id",s);let _;_="https://theojolliffe.github.io/changing-industry";let d;const m=()=>{i(8,d=!0)};return o.$$set=u=>{"section"in u&&i(0,e=u.section),"id"in u&&i(1,s=u.id),"slug"in u&&i(10,l=u.slug),"industry"in u&&i(2,c=u.industry),"industry_tot"in u&&i(3,f=u.industry_tot),"industry_all"in u&&i(4,a=u.industry_all),"template"in u&&i(5,n=u.template),"occupations"in u&&i(6,r=u.occupations)},[e,s,c,f,a,n,r,_,d,m,l]}class Z extends q{constructor(t){super();S(this,t,F,A,E,{section:0,id:1,slug:10,industry:2,industry_tot:3,industry_all:4,template:5,occupations:6})}}export{Z as default,Y as load};