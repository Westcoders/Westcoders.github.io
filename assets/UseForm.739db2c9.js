var C=(o,e,a)=>new Promise((m,d)=>{var c=i=>{try{r(a.next(i))}catch(p){d(p)}},t=i=>{try{r(a.throw(i))}catch(p){d(p)}},r=i=>i.done?m(i.value):Promise.resolve(i.value).then(c,t);r((a=a.apply(o,e)).next())});import{B as v}from"./BasicForm.6a147431.js";import{u as k}from"./useForm.bf93e7ce.js";import{ay as A,_,ag as D,h as $}from"./index.78902926.js";import{P as g}from"./index.169a0c7c.js";import{B as h,a1 as f,D as w,a2 as y,a7 as s,J as F,w as u,af as l}from"./vendor.e45423c9.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css               *//* empty css                *//* empty css                */import"./index.09e51d70.js";/* empty css                *//* empty css                */import"./index.54d102fe.js";import"./useWindowSizeFn.7b3a7491.js";/* empty css                *//* empty css                *//* empty css                *//* empty css                */import"./uuid.2b29000c.js";import"./download.fda70e41.js";import"./base64Conver.08b9f4ec.js";import"./index.56e94cf5.js";/* empty css               *//* empty css                */import"./useContentViewHeight.1c0e1783.js";const B=o=>A.post({url:"/cascader/getAreaRecord",data:o}),P=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:{placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:o=>{}}},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"fieldTime",component:"RangePicker",label:"\u65F6\u95F4\u5B57\u6BB5",colProps:{span:8}},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field8",component:"ApiCascader",label:"\u8054\u52A8",colProps:{span:8},componentProps:{api:B,apiParamKey:"parentCode",dataField:"data",labelField:"name",valueField:"code",initFetchParams:{parentCode:""},isLeaf:o=>!(o.levelType<3)}},{field:"field9",component:"ApiCascader",label:"\u8054\u52A8\u56DE\u663E",colProps:{span:8},componentProps:{api:B,apiParamKey:"parentCode",dataField:"data",labelField:"name",valueField:"code",initFetchParams:{parentCode:""},isLeaf:o=>!(o.levelType<3)}}],S=h({components:{BasicForm:v,CollapseContainer:D,PageWrapper:g},setup(){const{createMessage:o}=$(),[e,{setProps:a,setFieldsValue:m,updateSchema:d}]=k({labelWidth:120,schemas:P,actionColOptions:{span:24},fieldMapToTime:[["fieldTime",["startTime","endTime"],"YYYY-MM"]]});function c(){return C(this,null,function*(){const r=yield function(){return new Promise(E=>{setTimeout(()=>{E({field9:["430000","430100","430102"],province:"\u6E56\u5357\u7701",city:"\u957F\u6C99\u5E02",district:"\u5CB3\u9E93\u533A"})},1e3)})}(),{field9:i,province:p,city:n,district:b}=r;yield d({field:"field9",componentProps:{displayRenderArray:[p,n,b]}}),yield m({field9:i})})}return{register:e,schemas:P,handleSubmit:t=>{o.success("click search,values:"+JSON.stringify(t))},setProps:a,handleLoad:c}}}),T={class:"mb-4"},R=l(" \u66F4\u6539labelWidth "),W=l(" \u8FD8\u539FlabelWidth "),M=l(" \u66F4\u6539Size "),N=l(" \u8FD8\u539FSize "),O=l(" \u7981\u7528\u8868\u5355 "),z=l(" \u89E3\u9664\u7981\u7528 "),G=l(" \u7D27\u51D1\u8868\u5355 "),L=l(" \u8FD8\u539F\u6B63\u5E38\u95F4\u8DDD "),V=l(" \u64CD\u4F5C\u6309\u94AE\u4F4D\u7F6E "),Y={class:"mb-4"},I=l(" \u9690\u85CF\u64CD\u4F5C\u6309\u94AE "),J=l(" \u663E\u793A\u64CD\u4F5C\u6309\u94AE "),K=l(" \u9690\u85CF\u91CD\u7F6E\u6309\u94AE "),U=l(" \u663E\u793A\u91CD\u7F6E\u6309\u94AE "),H=l(" \u9690\u85CF\u67E5\u8BE2\u6309\u94AE "),j=l(" \u663E\u793A\u67E5\u8BE2\u6309\u94AE "),q=l(" \u4FEE\u6539\u91CD\u7F6E\u6309\u94AE "),Q=l(" \u4FEE\u6539\u67E5\u8BE2\u6309\u94AE "),X=l(" \u8054\u52A8\u56DE\u663E ");function Z(o,e,a,m,d,c){const t=f("a-button"),r=f("BasicForm"),i=f("CollapseContainer"),p=f("PageWrapper");return w(),y(p,{title:"UseForm\u64CD\u4F5C\u793A\u4F8B"},{default:s(()=>[F("div",T,[u(t,{onClick:e[0]||(e[0]=n=>o.setProps({labelWidth:150})),class:"mr-2"},{default:s(()=>[R]),_:1}),u(t,{onClick:e[1]||(e[1]=n=>o.setProps({labelWidth:120})),class:"mr-2"},{default:s(()=>[W]),_:1}),u(t,{onClick:e[2]||(e[2]=n=>o.setProps({size:"large"})),class:"mr-2"},{default:s(()=>[M]),_:1}),u(t,{onClick:e[3]||(e[3]=n=>o.setProps({size:"default"})),class:"mr-2"},{default:s(()=>[N]),_:1}),u(t,{onClick:e[4]||(e[4]=n=>o.setProps({disabled:!0})),class:"mr-2"},{default:s(()=>[O]),_:1}),u(t,{onClick:e[5]||(e[5]=n=>o.setProps({disabled:!1})),class:"mr-2"},{default:s(()=>[z]),_:1}),u(t,{onClick:e[6]||(e[6]=n=>o.setProps({compact:!0})),class:"mr-2"},{default:s(()=>[G]),_:1}),u(t,{onClick:e[7]||(e[7]=n=>o.setProps({compact:!1})),class:"mr-2"},{default:s(()=>[L]),_:1}),u(t,{onClick:e[8]||(e[8]=n=>o.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:s(()=>[V]),_:1})]),F("div",Y,[u(t,{onClick:e[9]||(e[9]=n=>o.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:s(()=>[I]),_:1}),u(t,{onClick:e[10]||(e[10]=n=>o.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:s(()=>[J]),_:1}),u(t,{onClick:e[11]||(e[11]=n=>o.setProps({showResetButton:!1})),class:"mr-2"},{default:s(()=>[K]),_:1}),u(t,{onClick:e[12]||(e[12]=n=>o.setProps({showResetButton:!0})),class:"mr-2"},{default:s(()=>[U]),_:1}),u(t,{onClick:e[13]||(e[13]=n=>o.setProps({showSubmitButton:!1})),class:"mr-2"},{default:s(()=>[H]),_:1}),u(t,{onClick:e[14]||(e[14]=n=>o.setProps({showSubmitButton:!0})),class:"mr-2"},{default:s(()=>[j]),_:1}),u(t,{onClick:e[15]||(e[15]=n=>o.setProps({resetButtonOptions:{disabled:!0,text:"\u91CD\u7F6ENew"}})),class:"mr-2"},{default:s(()=>[q]),_:1}),u(t,{onClick:e[16]||(e[16]=n=>o.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:s(()=>[Q]),_:1}),u(t,{onClick:o.handleLoad,class:"mr-2"},{default:s(()=>[X]),_:1},8,["onClick"])]),u(i,{title:"useForm\u793A\u4F8B"},{default:s(()=>[u(r,{onRegister:o.register,onSubmit:o.handleSubmit},null,8,["onRegister","onSubmit"])]),_:1})]),_:1})}var we=_(S,[["render",Z]]);export{we as default};
