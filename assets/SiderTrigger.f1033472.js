import{B as i,co as p,cF as d,a1 as n,D as t,F as u,a2 as l,az as g}from"./vendor.e45423c9.js";import{_ as c,q as f}from"./index.78902926.js";const m=i({name:"SiderTrigger",components:{DoubleRightOutlined:p,DoubleLeftOutlined:d},setup(){const{getCollapsed:e,toggleCollapsed:o}=f();return{getCollapsed:e,toggleCollapsed:o}}});function C(e,o,_,D,b,k){const s=n("DoubleRightOutlined"),a=n("DoubleLeftOutlined");return t(),u("div",{onClick:o[0]||(o[0]=g((...r)=>e.toggleCollapsed&&e.toggleCollapsed(...r),["stop"]))},[e.getCollapsed?(t(),l(s,{key:0})):(t(),l(a,{key:1}))])}var $=c(m,[["render",C]]);export{$ as default};