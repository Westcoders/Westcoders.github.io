import{B as u,a as c}from"./index.54d102fe.js";import{_ as d}from"./index.78902926.js";import{B as p,a1 as r,D as _,a2 as m,a7 as e,w as n,af as l}from"./vendor.e45423c9.js";import"./useWindowSizeFn.7b3a7491.js";const f=p({components:{BasicModal:u},setup(){const[o,{closeModal:t,setModalProps:a}]=c();return{register:o,closeModal:t,setModalProps:()=>{a({title:"Modal New Title"})}}}}),M=l(" \u4ECE\u5185\u90E8\u5173\u95ED\u5F39\u7A97 "),C=l(" \u4ECE\u5185\u90E8\u4FEE\u6539title ");function E(o,t,a,B,k,g){const s=r("a-button"),i=r("BasicModal");return _(),m(i,{onRegister:o.register,title:"Modal Title",helpMessage:["\u63D0\u793A1","\u63D0\u793A2"],okButtonProps:{disabled:!0}},{default:e(()=>[n(s,{type:"primary",onClick:o.closeModal,class:"mr-2"},{default:e(()=>[M]),_:1},8,["onClick"]),n(s,{type:"primary",onClick:o.setModalProps},{default:e(()=>[C]),_:1},8,["onClick"])]),_:1},8,["onRegister"])}var $=d(f,[["render",E]]);export{$ as default};