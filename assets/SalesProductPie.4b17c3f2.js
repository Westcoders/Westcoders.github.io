import{B as r,r as o,T as l,D as s,a2 as d,a7 as m,J as c,Y as f,u as p,bA as h}from"./vendor.e45423c9.js";/* empty css                *//* empty css               *//* empty css               */import{u as g}from"./useECharts.cf8a6fe0.js";import"./index.78902926.js";const x=r({props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const a=e,t=o(null),{setOptions:u}=g(t);return l(()=>a.loading,()=>{a.loading||u({tooltip:{trigger:"item"},series:[{name:"\u8BBF\u95EE\u6765\u6E90",type:"pie",radius:"80%",center:["50%","50%"],color:["#5ab1ef","#b6a2de","#67e0e3","#2ec7c9"],data:[{value:500,name:"\u7535\u5B50\u4EA7\u54C1"},{value:310,name:"\u670D\u88C5"},{value:274,name:"\u5316\u5986\u54C1"},{value:400,name:"\u5BB6\u5C45"}].sort(function(n,i){return n.value-i.value}),roseType:"radius",animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return Math.random()*400}}]})},{immediate:!0}),(n,i)=>(s(),d(p(h),{title:"\u6210\u4EA4\u5360\u6BD4",loading:e.loading},{default:m(()=>[c("div",{ref_key:"chartRef",ref:t,style:f({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"]))}});export{x as default};
