import{B as E,bu as w,bs as b,ba as $,b9 as h,j as D,a1 as l,D as t,F as r,w as s,L as n,a7 as o,J as c,ac as i,aq as u,N as x,O as S,af as g,K as _,a2 as m,am as F}from"./vendor.e45423c9.js";/* empty css               *//* empty css               *//* empty css               */import{_ as P,ag as L,I as N,f as V}from"./index.78902926.js";import j from"./Article.3c261522.js";import A from"./Application.971e4a68.js";import U from"./Project.844777fc.js";import{h as q}from"./header.d801b988.js";import{tags as z,teams as J,details as K,achieveList as O}from"./data.15873486.js";/* empty css                *//* empty css                */const R=E({components:{CollapseContainer:L,Icon:N,Tag:w,Tabs:b,TabPane:b.TabPane,Article:j,Application:A,Project:U,[$.name]:$,[h.name]:h},setup(){const a=V(),d=D(()=>a.getUserInfo.avatar||q);return{prefixCls:"account-center",avatar:d,tags:z,teams:J,details:K,achieveList:O}}}),T=a=>(x("data-v-5384e32e"),a=a(),S(),a),G=["src"],H=T(()=>c("span",null,"Vben",-1)),M=T(()=>c("div",null,"\u6D77\u7EB3\u767E\u5DDD\uFF0C\u6709\u5BB9\u4E43\u5927",-1));function Q(a,d,W,X,Y,Z){const p=l("a-col"),f=l("Icon"),C=l("a-row"),I=l("Tag"),v=l("CollapseContainer"),y=l("TabPane"),B=l("Tabs");return t(),r("div",{class:n(a.prefixCls)},[s(C,{class:n(`${a.prefixCls}-top`)},{default:o(()=>[s(p,{span:9,class:n(`${a.prefixCls}-col`)},{default:o(()=>[s(C,null,{default:o(()=>[s(p,{span:8},{default:o(()=>[c("div",{class:n(`${a.prefixCls}-top__avatar`)},[c("img",{width:"70",src:a.avatar},null,8,G),H,M],2)]),_:1}),s(p,{span:16},{default:o(()=>[c("div",{class:n(`${a.prefixCls}-top__detail`)},[(t(!0),r(i,null,u(a.details,e=>(t(),r("p",{key:e.title},[s(f,{icon:e.icon},null,8,["icon"]),g(" "+_(e.title),1)]))),128))],2)]),_:1})]),_:1})]),_:1},8,["class"]),s(p,{span:7,class:n(`${a.prefixCls}-col`)},{default:o(()=>[s(v,{title:"\u6807\u7B7E",canExpan:!1},{default:o(()=>[(t(!0),r(i,null,u(a.tags,e=>(t(),m(I,{key:e,class:"mb-2"},{default:o(()=>[g(_(e),1)]),_:2},1024))),128))]),_:1})]),_:1},8,["class"]),s(p,{span:8,class:n(`${a.prefixCls}-col`)},{default:o(()=>[s(v,{class:n(`${a.prefixCls}-top__team`),title:"\u56E2\u961F",canExpan:!1},{default:o(()=>[(t(!0),r(i,null,u(a.teams,(e,k)=>(t(),r("div",{key:k,class:n(`${a.prefixCls}-top__team-item`)},[s(f,{icon:e.icon,color:e.color},null,8,["icon","color"]),c("span",null,_(e.title),1)],2))),128))]),_:1},8,["class"])]),_:1},8,["class"])]),_:1},8,["class"]),c("div",{class:n(`${a.prefixCls}-bottom`)},[s(B,null,{default:o(()=>[(t(!0),r(i,null,u(a.achieveList,e=>(t(),m(y,{key:e.key,tab:e.name},{default:o(()=>[(t(),m(F(e.component)))]),_:2},1032,["tab"]))),128))]),_:1})],2)],2)}var _a=P(R,[["render",Q],["__scopeId","data-v-5384e32e"]]);export{_a as default};