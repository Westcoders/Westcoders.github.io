import{h as c,B as l}from"./BasicForm.6a147431.js";import{_ as d,h as g}from"./index.78902926.js";import{u as f}from"./useForm.bf93e7ce.js";import{P as B}from"./index.169a0c7c.js";import{B as _,bQ as s,a1 as e,D as F,a2 as h,a7 as A,w as r}from"./vendor.e45423c9.js";/* empty css                */import{u as i}from"./upload.f6faa7f8.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css               *//* empty css                *//* empty css                */import"./index.09e51d70.js";/* empty css                *//* empty css                */import"./index.54d102fe.js";import"./useWindowSizeFn.7b3a7491.js";/* empty css                *//* empty css                *//* empty css                */import"./uuid.2b29000c.js";import"./download.fda70e41.js";import"./base64Conver.08b9f4ec.js";import"./index.56e94cf5.js";/* empty css               *//* empty css                */import"./useContentViewHeight.1c0e1783.js";const C=[{field:"field1",component:"Upload",label:"\u5B57\u6BB51",colProps:{span:8},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4E0A\u4F20\u6587\u4EF6"}],componentProps:{api:i}}],E=_({components:{BasicUpload:c,BasicForm:l,PageWrapper:B,[s.name]:s},setup(){const{createMessage:o}=g(),[a]=f({labelWidth:120,schemas:C,actionColOptions:{span:16}});return{handleChange:t=>{o.info(`\u5DF2\u4E0A\u4F20\u6587\u4EF6${JSON.stringify(t)}`)},uploadApi:i,register:a}}});function P(o,a,t,$,b,x){const p=e("a-alert"),m=e("BasicUpload"),n=e("BasicForm"),u=e("PageWrapper");return F(),h(u,{title:"\u4E0A\u4F20\u7EC4\u4EF6\u793A\u4F8B"},{default:A(()=>[r(p,{message:"\u57FA\u7840\u793A\u4F8B"}),r(m,{maxSize:20,maxNumber:10,onChange:o.handleChange,api:o.uploadApi,class:"my-5",accept:["image/*"]},null,8,["onChange","api"]),r(p,{message:"\u5D4C\u5165\u8868\u5355,\u52A0\u5165\u8868\u5355\u6821\u9A8C"}),r(n,{onRegister:o.register,class:"my-5"},null,8,["onRegister"])]),_:1})}var ao=d(E,[["render",P]]);export{ao as default};
