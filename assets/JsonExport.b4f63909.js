import{B as c}from"./TableImg.777959c8.js";import"./BasicForm.6a147431.js";import"./index.59c7ea82.js";import{c as d,d as u,j as m}from"./data.1bdce481.js";import{P as F}from"./index.169a0c7c.js";import{_ as l}from"./index.78902926.js";import{B as f,a1 as e,D as _,a2 as B,a7 as t,w as r,af as p}from"./vendor.e45423c9.js";/* empty css                *//* empty css              */import"./useForm.bf93e7ce.js";/* empty css                *//* empty css                *//* empty css               */import"./uuid.2b29000c.js";import"./useWindowSizeFn.7b3a7491.js";import"./index.54d102fe.js";/* empty css               */import"./sortable.esm.b519ac50.js";/* empty css                *//* empty css                *//* empty css               *//* empty css               */import"./index.09e51d70.js";/* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                */import"./download.fda70e41.js";import"./base64Conver.08b9f4ec.js";import"./index.56e94cf5.js";/* empty css               *//* empty css                */import"./useContentViewHeight.1c0e1783.js";const C=f({components:{BasicTable:c,PageWrapper:F},setup(){function o(){m({data:u,filename:"\u4F7F\u7528key\u4F5C\u4E3A\u9ED8\u8BA4\u5934\u90E8.xlsx"})}function a(){m({data:u,header:{id:"ID",name:"\u59D3\u540D",age:"\u5E74\u9F84",no:"\u7F16\u53F7",address:"\u5730\u5740",beginTime:"\u5F00\u59CB\u65F6\u95F4",endTime:"\u7ED3\u675F\u65F6\u95F4"},filename:"\u81EA\u5B9A\u4E49\u5934\u90E8.xlsx",json2sheetOpts:{header:["name","id"]}})}return{defaultHeader:o,customHeader:a,columns:d,data:u}}}),E=p(" \u5BFC\u51FA\uFF1A\u9ED8\u8BA4\u5934\u90E8 "),A=p(" \u5BFC\u51FA\uFF1A\u81EA\u5B9A\u4E49\u5934\u90E8 ");function h(o,a,D,b,k,x){const i=e("a-button"),n=e("BasicTable"),s=e("PageWrapper");return _(),B(s,{title:"\u5BFC\u51FA\u793A\u4F8B",content:"\u6839\u636EJSON\u683C\u5F0F\u7684\u6570\u636E\u8FDB\u884C\u5BFC\u51FA"},{default:t(()=>[r(n,{title:"\u57FA\u7840\u8868\u683C",columns:o.columns,dataSource:o.data},{toolbar:t(()=>[r(i,{onClick:o.defaultHeader},{default:t(()=>[E]),_:1},8,["onClick"]),r(i,{onClick:o.customHeader},{default:t(()=>[A]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource"])]),_:1})}var io=l(C,[["render",h]]);export{io as default};