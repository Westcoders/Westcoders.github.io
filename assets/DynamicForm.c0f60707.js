var B=(e,u,l)=>new Promise((r,p)=>{var c=o=>{try{n(l.next(o))}catch(i){p(i)}},t=o=>{try{n(l.throw(o))}catch(i){p(i)}},n=o=>o.done?r(o.value):Promise.resolve(o.value).then(c,t);n((l=l.apply(e,u)).next())});import{B as h}from"./BasicForm.6a147431.js";import{u as f}from"./useForm.bf93e7ce.js";import{_ as C,ag as _}from"./index.78902926.js";import{P as F}from"./index.169a0c7c.js";import{B as P,a1 as d,D as g,a2 as k,a7 as s,J as w,w as a,af as m}from"./vendor.e45423c9.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css               *//* empty css                *//* empty css                */import"./index.09e51d70.js";/* empty css                *//* empty css                */import"./index.54d102fe.js";import"./useWindowSizeFn.7b3a7491.js";/* empty css                *//* empty css                *//* empty css                *//* empty css                */import"./uuid.2b29000c.js";import"./download.fda70e41.js";import"./base64Conver.08b9f4ec.js";import"./index.56e94cf5.js";/* empty css               *//* empty css                */import"./useContentViewHeight.1c0e1783.js";const b=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},show:({values:e})=>!!e.field5},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8},ifShow:({values:e})=>!!e.field6},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field7},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},dynamicRules:({values:e})=>e.field8?[{required:!0,message:"\u5B57\u6BB54\u5FC5\u586B"}]:[],componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"\u5B57\u6BB511",colProps:{span:8}},{field:"field5",component:"Switch",label:"\u662F\u5426\u663E\u793A\u5B57\u6BB51(css\u63A7\u5236)",colProps:{span:8},labelWidth:200},{field:"field6",component:"Switch",label:"\u662F\u5426\u663E\u793A\u5B57\u6BB52(dom\u63A7\u5236)",colProps:{span:8},labelWidth:200},{field:"field7",component:"Switch",label:"\u662F\u5426\u7981\u7528\u5B57\u6BB53",colProps:{span:8},labelWidth:200},{field:"field8",component:"Switch",label:"\u5B57\u6BB54\u662F\u5426\u5FC5\u586B",colProps:{span:8},labelWidth:200}],A=[{field:"f1",component:"Input",label:"F1",colProps:{span:12},labelWidth:200,componentProps:({formModel:e})=>({placeholder:"\u540C\u6B65f2\u7684\u503C\u4E3Af1",onChange:u=>{e.f2=u.target.value}})},{field:"f2",component:"Input",label:"F2",colProps:{span:12},labelWidth:200,componentProps:{disabled:!0}},{field:"f3",component:"Input",label:"F3",colProps:{span:12},labelWidth:200,componentProps:({formActionType:e})=>({placeholder:"\u503C\u6539\u53D8\u65F6\u6267\u884C\u67E5\u8BE2,\u67E5\u770B\u63A7\u5236\u53F0",onChange:()=>B(void 0,null,function*(){const{validate:u}=e,l=yield u()})})}],W=P({components:{BasicForm:h,CollapseContainer:_,PageWrapper:F},setup(){const[e,{setProps:u,updateSchema:l,appendSchemaByField:r,removeSchemaByFiled:p}]=f({labelWidth:120,schemas:b,actionColOptions:{span:24}}),[c]=f({labelWidth:120,schemas:A,actionColOptions:{span:24}});function t(){l({field:"field3",label:"\u5B57\u6BB53 New"})}function n(){l([{field:"field3",label:"\u5B57\u6BB53 New++"},{field:"field4",label:"\u5B57\u6BB54 New++"}])}function o(){r({field:"field10",label:"\u5B57\u6BB510",component:"Input",colProps:{span:8}},"field3")}function i(){p("field11")}return{register:e,register1:c,schemas:b,setProps:u,changeLabel3:t,changeLabel34:n,appendField:o,deleteField:i}}}),D={class:"mb-4"},E=m(" \u66F4\u6539\u5B57\u6BB53label "),S=m(" \u540C\u65F6\u66F4\u6539\u5B57\u6BB53,4label "),v=m(" \u5F80\u5B57\u6BB53\u540E\u9762\u63D2\u5165\u5B57\u6BB510 "),y=m(" \u5220\u9664\u5B57\u6BB511 ");function I(e,u,l,r,p,c){const t=d("a-button"),n=d("BasicForm"),o=d("CollapseContainer"),i=d("PageWrapper");return g(),k(i,{title:"\u52A8\u6001\u8868\u5355\u793A\u4F8B"},{default:s(()=>[w("div",D,[a(t,{onClick:e.changeLabel3,class:"mr-2"},{default:s(()=>[E]),_:1},8,["onClick"]),a(t,{onClick:e.changeLabel34,class:"mr-2"},{default:s(()=>[S]),_:1},8,["onClick"]),a(t,{onClick:e.appendField,class:"mr-2"},{default:s(()=>[v]),_:1},8,["onClick"]),a(t,{onClick:e.deleteField,class:"mr-2"},{default:s(()=>[y]),_:1},8,["onClick"])]),a(o,{title:"\u52A8\u6001\u8868\u5355\u793A\u4F8B,\u52A8\u6001\u6839\u636E\u8868\u5355\u5185\u5176\u4ED6\u503C\u6539\u53D8"},{default:s(()=>[a(n,{onRegister:e.register},null,8,["onRegister"])]),_:1}),a(o,{class:"mt-5",title:"componentProps\u52A8\u6001\u6539\u53D8"},{default:s(()=>[a(n,{onRegister:e.register1},null,8,["onRegister"])]),_:1})]),_:1})}var pe=C(W,[["render",I]]);export{pe as default};
