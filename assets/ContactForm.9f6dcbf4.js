import{r as l,o as e,c as a,a as o,w as n,b as t,v as s,d as u}from"./vendor.5932e4b6.js";const m={name:"ContactForm",data:()=>({region:"",firstName:"",lastName:"",company:"",email:"",phoneNumber:"",message:"",policyConfirm:""})},i={class:"contact"},d=o("div",{class:"contact-title"},[u(" Contact sales "),o("p",null,"Nullam risus blandit ac aliquam husto ipsum.Quam maris volutpat massa dictumst amet.Sapien tortor iacus arcu")],-1),c={class:"contact-input-form"},r={class:"name"},p=o("span",null,"First name",-1),v=o("span",null,"Last name",-1),V={class:"information"},h=o("span",null,"Company",-1),b=o("span",null,"Email",-1),y=o("span",null,"Phone number",-1),f={class:"select"},g={class:"message-input"},U=o("span",null,"Message",-1),C={class:"contact-switch"},N=u(" By selecting this,you agree to the "),w=u("Privacy Policy"),k=u("and "),x=u("Cookie Policy"),P={class:"contact-sumbit"},_=u("Let's talk");m.render=function(u,m,F,L,R,j){const q=l("el-input"),z=l("el-option"),B=l("el-select"),E=l("el-switch"),M=l("el-link"),Q=l("el-button");return e(),a("div",i,[d,o("div",c,[o("div",r,[o("div",null,[p,o(q,{placeholder:"请输入内容",modelValue:u.firstname,"onUpdate:modelValue":m[1]||(m[1]=l=>u.firstname=l),clearable:"",maxlength:"10"},null,8,["modelValue"])]),o("div",null,[v,o(q,{placeholder:"  请输入内容",modelValue:R.lastName,"onUpdate:modelValue":m[2]||(m[2]=l=>R.lastName=l),clearable:""},null,8,["modelValue"])])]),o("div",V,[o("div",null,[h,o(q,{placeholder:"  请输入内容",modelValue:R.company,"onUpdate:modelValue":m[3]||(m[3]=l=>R.company=l),clearable:""},null,8,["modelValue"])]),o("div",null,[b,o(q,{placeholder:"  请输入内容",modelValue:R.email,"onUpdate:modelValue":m[4]||(m[4]=l=>R.email=l),clearable:""},null,8,["modelValue"])]),o("div",null,[y,o("div",f,[o(B,{modelValue:R.region,"onUpdate:modelValue":m[5]||(m[5]=l=>R.region=l),placeholder:"  us"},{default:n((()=>[o(z,{label:"China",value:"1"}),o(z,{label:"Us",value:"1"})])),_:1},8,["modelValue"]),t(o("input",{"onUpdate:modelValue":m[6]||(m[6]=l=>R.phoneNumber=l),placeholder:"  请输入内容"},null,512),[[s,R.phoneNumber]])])]),o("div",g,[U,o(q,{type:"textarea",autosize:{minRows:5,maxRows:10},placeholder:"请输入内容",modelValue:R.message,"onUpdate:modelValue":m[7]||(m[7]=l=>R.message=l)},null,8,["modelValue"])]),o("div",C,[o(E,{style:{display:"block"},modelValue:R.policyConfirm,"onUpdate:modelValue":m[8]||(m[8]=l=>R.policyConfirm=l),"active-color":"#13ce66","inactive-color":"#606266"},null,8,["modelValue"]),o("span",null,[N,o(M,null,{default:n((()=>[w])),_:1}),k,o(M,null,{default:n((()=>[x])),_:1})])]),o("div",P,[o(Q,{type:"primary",style:{width:"100%","background-color":"rgb(9, 9, 177)"}},{default:n((()=>[_])),_:1})])])])])};export default m;
