import{S as oe,i as ae,s as ce,F,e as b,c as E,a as I,d as m,b as k,g as C,a7 as Z,O as J,R as fe,k as T,m as N,J as Q,K as G,L as W,q as U,o as B,T as Ee,H as y,n as ye,p as ke,a8 as Ie,v as Ce,a9 as pe,a1 as Se,C as we,t as ue,w as H,h as he,x as j,f as K,y as q,z as De,A as Pe,B as M,Q as Te,l as x,aa as Ne,ab as Ue}from"./vendor-f71fbfed.js";import{S as Be}from"./Share-361cb07e.js";const Ve=r=>({}),$=r=>({}),Ae=r=>({}),ee=r=>({});function te(r,e,l){const n=r.slice();return n[31]=e[l],n[33]=l,n}function le(r){let e,l={length:r[9]},n=[];for(let t=0;t<l.length;t+=1)n[t]=ne(te(r,l,t));return{c(){e=b("ul");for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){e=E(t,"UL",{class:!0});var o=I(e);for(let s=0;s<n.length;s+=1)n[s].l(o);o.forEach(m),this.h()},h(){k(e,"class","svelte-1txo9ve")},m(t,o){C(t,e,o);for(let s=0;s<n.length;s+=1)n[s].m(e,null)},p(t,o){if(o[0]&740){l={length:t[9]};let s;for(s=0;s<l.length;s+=1){const g=te(t,l,s);n[s]?n[s].p(g,o):(n[s]=ne(g),n[s].c(),n[s].m(e,null))}for(;s<n.length;s+=1)n[s].d(1);n.length=l.length}},d(t){t&&m(e),fe(n,t)}}}function ne(r){let e,l,n,t;function o(){return r[26](r[33])}return{c(){e=b("li"),this.h()},l(s){e=E(s,"LI",{class:!0}),I(e).forEach(m),this.h()},h(){k(e,"class",l=Z(r[2](r[7],r[33])?"active":"")+" svelte-1txo9ve")},m(s,g){C(s,e,g),n||(t=J(e,"click",o),n=!0)},p(s,g){r=s,g[0]&128&&l!==(l=Z(r[2](r[7],r[33])?"active":"")+" svelte-1txo9ve")&&k(e,"class",l)},d(s){s&&m(e),n=!1,t()}}}function se(r){let e,l,n,t,o,s;const g=r[24]["left-control"],f=F(g,r,r[23],ee),d=r[24]["right-control"],a=F(d,r,r[23],$);return{c(){e=b("button"),f&&f.c(),l=T(),n=b("button"),a&&a.c(),this.h()},l(i){e=E(i,"BUTTON",{class:!0,"aria-label":!0});var c=I(e);f&&f.l(c),c.forEach(m),l=N(i),n=E(i,"BUTTON",{class:!0,"aria-label":!0});var v=I(n);a&&a.l(v),v.forEach(m),this.h()},h(){k(e,"class","left svelte-1txo9ve"),k(e,"aria-label","left"),k(n,"class","right svelte-1txo9ve"),k(n,"aria-label","right")},m(i,c){C(i,e,c),f&&f.m(e,null),C(i,l,c),C(i,n,c),a&&a.m(n,null),t=!0,o||(s=[J(e,"click",r[3]),J(n,"click",r[4])],o=!0)},p(i,c){f&&f.p&&(!t||c[0]&8388608)&&Q(f,g,i,i[23],t?W(g,i[23],c,Ae):G(i[23]),ee),a&&a.p&&(!t||c[0]&8388608)&&Q(a,d,i,i[23],t?W(d,i[23],c,Ve):G(i[23]),$)},i(i){t||(U(f,i),U(a,i),t=!0)},o(i){B(f,i),B(a,i),t=!1},d(i){i&&m(e),f&&f.d(i),i&&m(l),i&&m(n),a&&a.d(i),o=!1,Ee(s)}}}function Ke(r){let e,l,n,t,o,s,g;const f=r[24].default,d=F(f,r,r[23],null);let a=r[0]&&le(r),i=r[1]&&se(r);return{c(){e=b("div"),l=b("div"),d&&d.c(),n=T(),t=b("div"),a&&a.c(),o=T(),s=b("div"),i&&i.c(),this.h()},l(c){e=E(c,"DIV",{class:!0});var v=I(e);l=E(v,"DIV",{class:!0});var w=I(l);d&&d.l(w),w.forEach(m),n=N(v),t=E(v,"DIV",{class:!0});var p=I(t);a&&a.l(p),o=N(p),s=E(p,"DIV",{class:!0});var P=I(s);i&&i.l(P),P.forEach(m),p.forEach(m),v.forEach(m),this.h()},h(){k(l,"class","slides"),k(s,"class","buttons svelte-1txo9ve"),k(t,"class","nav svelte-1txo9ve"),k(e,"class","carousel svelte-1txo9ve")},m(c,v){C(c,e,v),y(e,l),d&&d.m(l,null),r[25](l),y(e,n),y(e,t),a&&a.m(t,null),y(t,o),y(t,s),i&&i.m(s,null),g=!0},p(c,v){d&&d.p&&(!g||v[0]&8388608)&&Q(d,f,c,c[23],g?W(f,c[23],v,null):G(c[23]),null),c[0]?a?a.p(c,v):(a=le(c),a.c(),a.m(t,o)):a&&(a.d(1),a=null),c[1]?i?(i.p(c,v),v[0]&2&&U(i,1)):(i=se(c),i.c(),U(i,1),i.m(s,null)):i&&(ye(),B(i,1,1,()=>{i=null}),ke())},i(c){g||(U(d,c),U(i),g=!0)},o(c){B(d,c),B(i),g=!1},d(c){c&&m(e),d&&d.d(c),r[25](null),a&&a.d(),i&&i.d()}}}function Re(r,e,l){let n,t,o,{$$slots:s={},$$scope:g}=e,{perPage:f=3}=e,{loop:d=!0}=e,{autoplay:a=0}=e,{duration:i=200}=e,{easing:c="ease-out"}=e,{startIndex:v=0}=e,{draggable:w=!0}=e,{multipleDrag:p=!0}=e,{dots:P=!0}=e,{controls:D=!0}=e,{threshold:V=20}=e,{rtl:R=!1}=e,O=v,u,_,S;const A=Ie();Ce(()=>(l(22,_=new pe({selector:u,perPage:typeof f=="object"?f:Number(f),loop:d,duration:i,easing:c,startIndex:v,draggable:w,multipleDrag:p,threshold:V,rtl:R,onChange:me})),a&&(S=setInterval(z,a)),()=>{a&&clearInterval(S),S=null,_.destroy()}));function L(h,Y){return h<0&&(h=n.length+h),h>=Y*t&&h<Y*t+t}function _e(){_.prev()}function z(){_.next()}function X(h){_.goTo(h)}function de(){clearInterval(S),S=null}function ge(){a&&!S&&(S=setInterval(z,a))}function me(h){l(7,O=_.currentSlide),A("change",{currentSlide:_.currentSlide,slideCount:_.innerElements.length})}function ve(h){Se[h?"unshift":"push"](()=>{u=h,l(8,u)})}const be=h=>X(h*t);return r.$$set=h=>{"perPage"in h&&l(10,f=h.perPage),"loop"in h&&l(11,d=h.loop),"autoplay"in h&&l(12,a=h.autoplay),"duration"in h&&l(13,i=h.duration),"easing"in h&&l(14,c=h.easing),"startIndex"in h&&l(15,v=h.startIndex),"draggable"in h&&l(16,w=h.draggable),"multipleDrag"in h&&l(17,p=h.multipleDrag),"dots"in h&&l(0,P=h.dots),"controls"in h&&l(1,D=h.controls),"threshold"in h&&l(18,V=h.threshold),"rtl"in h&&l(19,R=h.rtl),"$$scope"in h&&l(23,g=h.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&4194304&&(n=_?_.innerElements:[]),r.$$.dirty[0]&4195328&&l(6,t=_?_.perPage:f),r.$$.dirty[0]&4194368&&l(9,o=_?Math.ceil(_.innerElements.length/t):[])},[P,D,L,_e,z,X,t,O,u,o,f,d,a,i,c,v,w,p,V,R,de,ge,_,g,s,ve,be]}class Oe extends oe{constructor(e){super();ae(this,e,Re,Ke,ce,{perPage:10,loop:11,autoplay:12,duration:13,easing:14,startIndex:15,draggable:16,multipleDrag:17,dots:0,controls:1,threshold:18,rtl:19,isDotActive:2,left:3,right:4,go:5,pause:20,resume:21},null,[-1,-1])}get isDotActive(){return this.$$.ctx[2]}get left(){return this.$$.ctx[3]}get right(){return this.$$.ctx[4]}get go(){return this.$$.ctx[5]}get pause(){return this.$$.ctx[20]}get resume(){return this.$$.ctx[21]}}function re(r,e,l){const n=r.slice();return n[5]=e[l],n}function ie(r){let e,l,n,t,o=r[5]+"",s,g;return{c(){e=b("div"),l=b("section"),n=b("div"),t=b("p"),s=ue(o),g=T(),this.h()},l(f){e=E(f,"DIV",{class:!0});var d=I(e);l=E(d,"SECTION",{style:!0,class:!0});var a=I(l);n=E(a,"DIV",{class:!0,style:!0});var i=I(n);t=E(i,"P",{style:!0});var c=I(t);s=he(c,o),c.forEach(m),i.forEach(m),a.forEach(m),g=N(d),d.forEach(m),this.h()},h(){K(t,"margin","0"),k(n,"class","main-caro"),K(n,"padding","20px 2px"),K(l,"background-color","white"),k(l,"class","svelte-b3m628"),k(e,"class","slide-content svelte-b3m628")},m(f,d){C(f,e,d),y(e,l),y(l,n),y(n,t),y(t,s),y(e,g)},p:Te,d(f){f&&m(e)}}}function Le(r){let e,l=r[2].texts,n=[];for(let t=0;t<l.length;t+=1)n[t]=ie(re(r,l,t));return{c(){for(let t=0;t<n.length;t+=1)n[t].c();e=x()},l(t){for(let o=0;o<n.length;o+=1)n[o].l(t);e=x()},m(t,o){for(let s=0;s<n.length;s+=1)n[s].m(t,o);C(t,e,o)},p(t,o){if(o&4){l=t[2].texts;let s;for(s=0;s<l.length;s+=1){const g=re(t,l,s);n[s]?n[s].p(g,o):(n[s]=ie(g),n[s].c(),n[s].m(e.parentNode,e))}for(;s<n.length;s+=1)n[s].d(1);n.length=l.length}},d(t){fe(n,t),t&&m(e)}}}function He(r){let e,l,n;return l=new Ne({}),{c(){e=b("span"),H(l.$$.fragment),this.h()},l(t){e=E(t,"SPAN",{class:!0,slot:!0});var o=I(e);j(l.$$.fragment,o),o.forEach(m),this.h()},h(){k(e,"class","control svelte-b3m628"),k(e,"slot","left-control")},m(t,o){C(t,e,o),q(l,e,null),n=!0},i(t){n||(U(l.$$.fragment,t),n=!0)},o(t){B(l.$$.fragment,t),n=!1},d(t){t&&m(e),M(l)}}}function je(r){let e,l,n;return l=new Ue({}),{c(){e=b("span"),H(l.$$.fragment),this.h()},l(t){e=E(t,"SPAN",{class:!0,slot:!0});var o=I(e);j(l.$$.fragment,o),o.forEach(m),this.h()},h(){k(e,"class","control svelte-b3m628"),k(e,"slot","right-control")},m(t,o){C(t,e,o),q(l,e,null),n=!0},i(t){n||(U(l.$$.fragment,t),n=!0)},o(t){B(l.$$.fragment,t),n=!1},d(t){t&&m(e),M(l)}}}function qe(r){let e,l,n,t,o,s,g,f,d,a,i,c,v,w,p,P,D,V;const R=[r[2]];let O={$$slots:{"right-control":[je],"left-control":[He],default:[Le]},$$scope:{ctx:r}};for(let u=0;u<R.length;u+=1)O=we(O,R[u]);return d=new Oe({props:O}),d.$on("change",Me),D=new Be({props:{domain:r[0],section:r[1]}}),{c(){e=b("div"),l=b("section"),n=b("div"),t=b("h4"),o=ue("Background on the UK Standard Industrial Classification"),s=T(),g=b("hr"),f=T(),H(d.$$.fragment),a=T(),i=b("br"),c=T(),v=b("br"),w=T(),p=b("br"),P=T(),H(D.$$.fragment),this.h()},l(u){e=E(u,"DIV",{class:!0});var _=I(e);l=E(_,"SECTION",{});var S=I(l);n=E(S,"DIV",{style:!0});var A=I(n);t=E(A,"H4",{style:!0});var L=I(t);o=he(L,"Background on the UK Standard Industrial Classification"),L.forEach(m),A.forEach(m),S.forEach(m),s=N(_),g=E(_,"HR",{style:!0}),f=N(_),j(d.$$.fragment,_),a=N(_),i=E(_,"BR",{}),_.forEach(m),c=N(u),v=E(u,"BR",{}),w=N(u),p=E(u,"BR",{}),P=N(u),j(D.$$.fragment,u),this.h()},h(){K(t,"margin","0px"),K(t,"padding","0px"),K(n,"padding","12px"),K(g,"border-top","0.5px solid lightgrey"),K(g,"width","100%"),k(e,"class","demo svelte-b3m628")},m(u,_){C(u,e,_),y(e,l),y(l,n),y(n,t),y(t,o),y(e,s),y(e,g),y(e,f),q(d,e,null),y(e,a),y(e,i),C(u,c,_),C(u,v,_),C(u,w,_),C(u,p,_),C(u,P,_),q(D,u,_),V=!0},p(u,[_]){const S=_&4?De(R,[Pe(u[2])]):{};_&256&&(S.$$scope={dirty:_,ctx:u}),d.$set(S);const A={};_&1&&(A.domain=u[0]),_&2&&(A.section=u[1]),D.$set(A)},i(u){V||(U(d.$$.fragment,u),U(D.$$.fragment,u),V=!0)},o(u){B(d.$$.fragment,u),B(D.$$.fragment,u),V=!1},d(u){u&&m(e),M(d),u&&m(c),u&&m(v),u&&m(w),u&&m(p),u&&m(P),M(D,u)}}}function Me(r){console.log(r.detail.currentSlide)}function ze(r,e,l){let{domain:n}=e,{section:t}=e,{id:o}=e,{directory:s}=e,g={perPage:1,texts:["The UK SIC framework provides a way of classifying industrial activities into a standardised hierarchal structure.","'Sections', which represent top level industries, are broken down into 'divisions' and then 'groups', classes' and 'subclasses'.","The UK SIC is based on the EU's NACE framework, but with the addition of a fifth level of the structural hierarchy.","It was first created in 1948 and has been revised multiple times to reflect the changing workforce in the UK. The most recent changes were made in 2007."]};return r.$$set=f=>{"domain"in f&&l(0,n=f.domain),"section"in f&&l(1,t=f.section),"id"in f&&l(3,o=f.id),"directory"in f&&l(4,s=f.directory)},[n,t,g,o,s]}class Qe extends oe{constructor(e){super();ae(this,e,ze,qe,ce,{domain:0,section:1,id:3,directory:4})}}export{Qe as C};