import{S as $,i as ee,s as ie,a0 as le,a1 as L,a2 as y,e as te,w as ne,c as se,a as ae,x as oe,d as V,b as ue,N as m,g as fe,y as re,a3 as F,q as ce,o as ge,B as de,v as he,a4 as T}from"./vendor-29c5fe09.js";function me(i){let n,t,g,d,_,b,h,o;function I(l){i[30](l)}function M(l){i[31](l)}function c(l){i[32](l)}function f(l){i[33](l)}function v(l){i[34](l)}let r={id:i[2],items:i[3],placeholder:i[4],isMulti:i[8],isSearchable:i[5],groupBy:i[16],loadOptions:i[7],getSelectionLabel:i[9],getOptionLabel:i[15],itemFilter:i[13],ariaValues:i[19],ariaListOpen:i[20],ariaFocused:i[21],noOptionsMessage:i[14],indicatorSvg:i[17],containerStyles:i[18],optionIdentifier:i[6],showIndicator:!0,isClearable:!i[8]};return i[11]!==void 0&&(r.isFocused=i[11]),i[0]!==void 0&&(r.value=i[0]),i[12]!==void 0&&(r.listOpen=i[12]),i[1]!==void 0&&(r.filterText=i[1]),i[10]!==void 0&&(r.isWaiting=i[10]),t=new le({props:r}),L.push(()=>y(t,"isFocused",I)),L.push(()=>y(t,"value",M)),L.push(()=>y(t,"listOpen",c)),L.push(()=>y(t,"filterText",f)),L.push(()=>y(t,"isWaiting",v)),t.$on("select",i[35]),t.$on("clear",i[36]),t.$on("loaded",i[37]),t.$on("error",i[38]),{c(){n=te("div"),ne(t.$$.fragment),this.h()},l(l){n=se(l,"DIV",{class:!0});var s=ae(n);oe(t.$$.fragment,s),s.forEach(V),this.h()},h(){ue(n,"class","selectbox svelte-lfed90"),m(n,"multi-selected",i[0]&&i[8]),m(n,"focused",i[11]),m(n,"selected",i[0]&&!i[12]&&!i[8])},m(l,s){fe(l,n,s),re(t,n,null),o=!0},p(l,s){const a={};s[0]&4&&(a.id=l[2]),s[0]&8&&(a.items=l[3]),s[0]&16&&(a.placeholder=l[4]),s[0]&256&&(a.isMulti=l[8]),s[0]&32&&(a.isSearchable=l[5]),s[0]&128&&(a.loadOptions=l[7]),s[0]&512&&(a.getSelectionLabel=l[9]),s[0]&8192&&(a.itemFilter=l[13]),s[0]&16384&&(a.noOptionsMessage=l[14]),s[0]&64&&(a.optionIdentifier=l[6]),s[0]&256&&(a.isClearable=!l[8]),!g&&s[0]&2048&&(g=!0,a.isFocused=l[11],F(()=>g=!1)),!d&&s[0]&1&&(d=!0,a.value=l[0],F(()=>d=!1)),!_&&s[0]&4096&&(_=!0,a.listOpen=l[12],F(()=>_=!1)),!b&&s[0]&2&&(b=!0,a.filterText=l[1],F(()=>b=!1)),!h&&s[0]&1024&&(h=!0,a.isWaiting=l[10],F(()=>h=!1)),t.$set(a),s[0]&257&&m(n,"multi-selected",l[0]&&l[8]),s[0]&2048&&m(n,"focused",l[11]),s[0]&4353&&m(n,"selected",l[0]&&!l[12]&&!l[8])},i(l){o||(ce(t.$$.fragment,l),o=!0)},o(l){ge(t.$$.fragment,l),o=!1},d(l){l&&V(n),de(t)}}}function _e(i,n,t){let g,d;const _='<svg viewBox="0 0 20 20" fill-rule="evenodd"><path d="M0,8a8,8,0,1,0,16,0a8,8,0,1,0,-16,0ZM3,8a5,5,0,1,0,10,0a5,5,0,1,0,-10,0Z"/><path d="M18,20L20,18L14,12L12,14Z"/></svg>',b='<svg viewBox="0 0 20 20"><path d="M1,6L19,6L10,15Z"/></svg>';let{id:h=""}=n,{mode:o="default"}=n,{items:I}=n,{placeholder:M="Select one..."}=n,{value:c=null}=n,{filterText:f=""}=n,{isSearchable:v=!0}=n,{idKey:r="value"}=n,{labelKey:l="label"}=n,{groupKey:s=null}=n,{groupItems:a=!1}=n,{loadOptions:C=void 0}=n,{fontSize:S="1rem"}=n,{height:w=42}=n,{isMulti:P=!1}=n,{maxSelected:z=4}=n,{colors:u=["#206095","#a8bd3a","#871a5b","#27a0cc"]}=n;const Z=s&&!a?e=>`${e[l]} <span class="group">${e[s]}</span>`:e=>e[l];let{getSelectionLabel:E=e=>e?Z(e):null}=n;const k=a&&s?e=>e[s]:void 0,q=o=="search"?_:b,A=`--inputFontSize: ${S}; --groupTitleFontSize: ${S}; --height: ${w}px; font-size: ${S};`,J=e=>`${e}, selected.`,N=(e,O)=>`You are currently focused on ${e}. There are ${O} results available.`,D=()=>"Select is focused, type to refine list, press down to open the menu.";let W,B,K;he(()=>{let e=document.documentElement.style;e.setProperty("--firstItem",u[0%u.length]),e.setProperty("--secondItem",u[1%u.length]),e.setProperty("--thirdItem",u[2%u.length]),e.setProperty("--fourthItem",u[3%u.length])});function Y(e){W=e,t(11,W)}function j(e){c=e,t(0,c)}function G(e){B=e,t(12,B)}function H(e){f=e,t(1,f)}function Q(e){K=e,t(10,K)}function R(e){T.call(this,i,e)}function U(e){T.call(this,i,e)}function X(e){T.call(this,i,e)}function p(e){T.call(this,i,e)}return i.$$set=e=>{"id"in e&&t(2,h=e.id),"mode"in e&&t(22,o=e.mode),"items"in e&&t(3,I=e.items),"placeholder"in e&&t(4,M=e.placeholder),"value"in e&&t(0,c=e.value),"filterText"in e&&t(1,f=e.filterText),"isSearchable"in e&&t(5,v=e.isSearchable),"idKey"in e&&t(6,r=e.idKey),"labelKey"in e&&t(23,l=e.labelKey),"groupKey"in e&&t(24,s=e.groupKey),"groupItems"in e&&t(25,a=e.groupItems),"loadOptions"in e&&t(7,C=e.loadOptions),"fontSize"in e&&t(26,S=e.fontSize),"height"in e&&t(27,w=e.height),"isMulti"in e&&t(8,P=e.isMulti),"maxSelected"in e&&t(28,z=e.maxSelected),"colors"in e&&t(29,u=e.colors),"getSelectionLabel"in e&&t(9,E=e.getSelectionLabel)},i.$$.update=()=>{i.$$.dirty[0]&4195330&&t(14,g=K?"Loading...":o=="search"&&f<3?"Enter 3 or more characters for suggestions":`No results match ${f}`),i.$$.dirty[0]&272629763&&t(13,d=Array.isArray(c)&&c.length>=z||o=="search"&&f.length<3?(e,O,x)=>!1:(e,O,x)=>`${e}`.split("<")[0].toLowerCase().slice(0,O.length)==O.toLowerCase())},[c,f,h,I,M,v,r,C,P,E,K,W,B,d,g,Z,k,q,A,J,N,D,o,l,s,a,S,w,z,u,Y,j,G,H,Q,R,U,X,p]}class Se extends ${constructor(n){super();ee(this,n,_e,me,ie,{id:2,mode:22,items:3,placeholder:4,value:0,filterText:1,isSearchable:5,idKey:6,labelKey:23,groupKey:24,groupItems:25,loadOptions:7,fontSize:26,height:27,isMulti:8,maxSelected:28,colors:29,getSelectionLabel:9},null,[-1,-1])}}export{Se as S};
