import{B as r,bU as d,j as l,a1 as p,D as c,F as m,J as h,K as u,w as f,a5 as C,L as _}from"./vendor.e45423c9.js";/* empty css                */import{_ as g,a as v,b}from"./index.78902926.js";import{b as y}from"./index.d5d4745b.js";import"./index.ab55ce4b.js";/* empty css               *//* empty css               */import"./index.593d778a.js";import"./index.45a373e6.js";import"./useWindowSizeFn.7b3a7491.js";import"./useContentViewHeight.1c0e1783.js";/* empty css               */import"./lock.baf6cdd0.js";const w=r({name:"SwitchItem",components:{Switch:d},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=v("setting-switch-item"),{t:n}=b(),a=l(()=>e.def?{checked:e.def}:{});function o(s){e.event&&y(e.event,s)}return{prefixCls:t,t:n,handleChange:o,getBindValue:a}}});function B(e,t,n,a,o,s){const i=p("Switch");return c(),m("div",{class:_(e.prefixCls)},[h("span",null,u(e.title),1),f(i,C(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}var K=g(w,[["render",B],["__scopeId","data-v-440e72fd"]]);export{K as default};