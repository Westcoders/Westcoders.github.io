import{M as w,a as C}from"./index.fba49986.js";import{P as h}from"./index.169a0c7c.js";import{B as g,bA as D,r as p,a1 as n,D as V,a2 as M,a7 as r,J as c,w as t,u as B,af as d}from"./vendor.e45423c9.js";/* empty css                *//* empty css               *//* empty css               */import{_ as E}from"./index.78902926.js";import"./index.54d102fe.js";import"./useWindowSizeFn.7b3a7491.js";/* empty css               *//* empty css                */import"./useContentViewHeight.1c0e1783.js";const F=g({components:{MarkDown:w,PageWrapper:h,MarkdownViewer:C,ACard:D},setup(){const e=p(null),o=p(`
# title

# content
`);function l(){const a=B(e);if(!a)return;a.getVditor().setTheme("dark")}function s(a){o.value=a}function i(){o.value=""}return{value:o,toggleTheme:l,markDownRef:e,handleChange:s,clearValue:i}}}),A=d(" \u9ED1\u6697\u4E3B\u9898 "),b=d(" \u6E05\u7A7A\u5185\u5BB9 "),P={class:"mt-2"};function T(e,o,l,s,i,a){const u=n("a-button"),m=n("MarkDown"),f=n("MarkdownViewer"),_=n("a-card"),k=n("PageWrapper");return V(),M(k,{title:"MarkDown\u7EC4\u4EF6\u793A\u4F8B"},{default:r(()=>[c("div",null,[t(u,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:r(()=>[A]),_:1},8,["onClick"]),t(u,{onClick:e.clearValue,class:"mb-2",type:"default"},{default:r(()=>[b]),_:1},8,["onClick"]),t(m,{value:e.value,"onUpdate:value":o[0]||(o[0]=v=>e.value=v),onChange:e.handleChange,ref:"markDownRef",placeholder:"\u8FD9\u662F\u5360\u4F4D\u6587\u672C"},null,8,["value","onChange"])]),c("div",P,[t(_,{title:"Markdown Viewer \u7EC4\u4EF6\u6F14\u793A"},{default:r(()=>[t(f,{value:e.value},null,8,["value"])]),_:1})])]),_:1})}var H=E(F,[["render",T]]);export{H as default};