import{_,ag as C,b5 as v,h as y}from"./index.78902926.js";import{P as F}from"./index.169a0c7c.js";import{B as g,r as B,a1 as a,D as h,a2 as b,a7 as n,w as s,J as w,u as l,af as x}from"./vendor.e45423c9.js";/* empty css               *//* empty css                */import"./useWindowSizeFn.7b3a7491.js";import"./useContentViewHeight.1c0e1783.js";const k=g({name:"Copy",components:{CollapseContainer:C,PageWrapper:F},setup(){const e=B(""),{createMessage:o}=y(),{clipboardRef:u,copiedRef:r}=v();function p(){const t=l(e);if(!t){o.warning("\u8BF7\u8F93\u5165\u8981\u62F7\u8D1D\u7684\u5185\u5BB9\uFF01");return}u.value=t,l(r)&&o.warning("copy success\uFF01")}return{handleCopy:p,value:e}}}),D={class:"flex justify-center"},P=x(" Copy ");function $(e,o,u,r,p,t){const i=a("a-input"),c=a("a-button"),d=a("CollapseContainer"),f=a("PageWrapper");return h(),b(f,{title:"\u6587\u672C\u590D\u5236\u793A\u4F8B"},{default:n(()=>[s(d,{class:"w-full h-32 bg-white rounded-md",title:"Copy Example"},{default:n(()=>[w("div",D,[s(i,{placeholder:"\u8BF7\u8F93\u5165",value:e.value,"onUpdate:value":o[0]||(o[0]=m=>e.value=m)},null,8,["value"]),s(c,{type:"primary",onClick:e.handleCopy},{default:n(()=>[P]),_:1},8,["onClick"])])]),_:1})]),_:1})}var A=_(k,[["render",$]]);export{A as default};
