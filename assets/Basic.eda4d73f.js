import{B}from"./TableImg.777959c8.js";import"./BasicForm.6a147431.js";import{getBasicColumns as b,getBasicData as h}from"./tableData.3f3da3f1.js";import{_ as v}from"./index.78902926.js";import{B as A,r as t,a1 as c,D as E,F as k,w as a,a7 as i,af as s,K as m}from"./vendor.e45423c9.js";/* empty css                *//* empty css              */import"./useForm.bf93e7ce.js";import"./index.169a0c7c.js";/* empty css               *//* empty css                */import"./useWindowSizeFn.7b3a7491.js";import"./useContentViewHeight.1c0e1783.js";/* empty css                *//* empty css                *//* empty css               */import"./uuid.2b29000c.js";import"./index.54d102fe.js";/* empty css               */import"./sortable.esm.b519ac50.js";/* empty css                *//* empty css                *//* empty css               *//* empty css               */import"./index.09e51d70.js";/* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                */import"./download.fda70e41.js";import"./base64Conver.08b9f4ec.js";import"./index.56e94cf5.js";const y=A({components:{BasicTable:B},setup(){const o=t(!1),n=t(!1),r=t(!0),u=t(!0),p=t(!1);function d(){o.value=!o.value}function e(){r.value=!r.value}function l(){n.value=!0,setTimeout(()=>{n.value=!1,p.value={pageSize:20}},3e3)}function g(){u.value=!u.value}function C(f){}return{columns:b(),data:h(),canResize:o,loading:n,striped:r,border:u,toggleStriped:e,toggleCanResize:d,toggleLoading:l,toggleBorder:g,pagination:p,handleColumnChange:C}}}),F={class:"p-4"},z=s(" \u5F00\u542Floading ");function _(o,n,r,u,p,d){const e=c("a-button"),l=c("BasicTable");return E(),k("div",F,[a(l,{title:"\u57FA\u7840\u793A\u4F8B",titleHelpMessage:"\u6E29\u99A8\u63D0\u9192",columns:o.columns,dataSource:o.data,canResize:o.canResize,loading:o.loading,striped:o.striped,bordered:o.border,showTableSetting:"",pagination:o.pagination,onColumnsChange:o.handleColumnChange},{toolbar:i(()=>[a(e,{type:"primary",onClick:o.toggleCanResize},{default:i(()=>[s(m(o.canResize?"\u53D6\u6D88\u81EA\u9002\u5E94":"\u81EA\u9002\u5E94\u9AD8\u5EA6"),1)]),_:1},8,["onClick"]),a(e,{type:"primary",onClick:o.toggleBorder},{default:i(()=>[s(m(o.border?"\u9690\u85CF\u8FB9\u6846":"\u663E\u793A\u8FB9\u6846"),1)]),_:1},8,["onClick"]),a(e,{type:"primary",onClick:o.toggleLoading},{default:i(()=>[z]),_:1},8,["onClick"]),a(e,{type:"primary",onClick:o.toggleStriped},{default:i(()=>[s(m(o.striped?"\u9690\u85CF\u6591\u9A6C\u7EB9":"\u663E\u793A\u6591\u9A6C\u7EB9"),1)]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination","onColumnsChange"])])}var uo=v(y,[["render",_]]);export{uo as default};
