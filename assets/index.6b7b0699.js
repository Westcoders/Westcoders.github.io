import{B as _,bG as S,r as n,a1 as s,D as r,a2 as i,a7 as o,J as l,w as p,am as m,G as f,H as T,af as R}from"./vendor.e45423c9.js";import{P as X}from"./index.169a0c7c.js";import{_ as h,aI as x,aJ as Y,aK as w,aL as y,aM as B,aN as C,aO as E,aP as b,aQ as k,aR as F,aS as P,aT as $,aU as g}from"./index.78902926.js";/* empty css               *//* empty css                */import"./useWindowSizeFn.7b3a7491.js";import"./useContentViewHeight.1c0e1783.js";const N=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"],A=N.map(e=>({label:e,value:e,key:e})),D=_({components:{Select:S,PageWrapper:X,FadeTransition:x,ScaleTransition:Y,SlideYTransition:w,ScrollYTransition:y,SlideYReverseTransition:B,ScrollYReverseTransition:C,SlideXTransition:E,ScrollXTransition:b,SlideXReverseTransition:k,ScrollXReverseTransition:F,ScaleRotateTransition:P,ExpandXTransition:$,ExpandTransition:g},setup(){const e=n("Fade"),a=n(!0);function t(){a.value=!1,setTimeout(()=>{a.value=!0},300)}return{options:A,value:e,start:t,show:a}}}),V={class:"flex"},W=R(" start "),G={class:"box"};function I(e,a,t,J,L,U){const c=s("Select"),u=s("a-button"),d=s("PageWrapper");return r(),i(d,{title:"\u52A8\u753B\u7EC4\u4EF6\u793A\u4F8B"},{default:o(()=>[l("div",V,[p(c,{options:e.options,value:e.value,"onUpdate:value":a[0]||(a[0]=v=>e.value=v),placeholder:"\u9009\u62E9\u52A8\u753B",style:{width:"150px"}},null,8,["options","value"]),p(u,{type:"primary",class:"ml-4",onClick:e.start},{default:o(()=>[W]),_:1},8,["onClick"])]),(r(),i(m(`${e.value}Transition`),null,{default:o(()=>[f(l("div",G,null,512),[[T,e.show]])]),_:1}))]),_:1})}var z=h(D,[["render",I],["__scopeId","data-v-45b1f032"]]);export{z as default};