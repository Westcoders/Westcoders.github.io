var $=Object.defineProperty,O=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var _=(e,t,o)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,g=(e,t)=>{for(var o in t||(t={}))N.call(t,o)&&_(e,o,t[o]);if(C)for(var o of C(t))S.call(t,o)&&_(e,o,t[o]);return e},w=(e,t)=>O(e,D(t));import{I as B,a$ as P}from"./index.78902926.js";import{B as R,r as I,j as A,$ as H,a0 as V,ak as j,u as y,w as r,aB as v,ac as W,b2 as F,bg as T,aR as U,aj as X}from"./vendor.e45423c9.js";/* empty css               */function Y(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!T(e)}const h="context-menu",q={width:{type:Number,default:156},customEvent:{type:Object,default:null},styles:{type:Object},showIcon:{type:Boolean,default:!0},axis:{type:Object,default(){return{x:0,y:0}}},items:{type:Array,default(){return[]}}},k=e=>{const{item:t}=e;return r("span",{style:"display: inline-block; width: 100%; ",class:"px-4",onClick:e.handler.bind(null,t)},[e.showIcon&&t.icon&&r(B,{class:"mr-2",icon:t.icon},null),r("span",null,[t.label])])};var z=R({name:"ContextMenu",props:q,setup(e){const t=I(null),o=I(!1),i=A(()=>{const{axis:s,items:n,styles:c,width:l}=e,{x:u,y:m}=s||{x:0,y:0},p=(n||[]).length*40,b=l,x=document.body,E=x.clientWidth<u+b?u-b:u,L=x.clientHeight<m+p?m-p:m;return w(g({},c),{position:"absolute",width:`${l}px`,left:`${E+1}px`,top:`${L+1}px`})});H(()=>{V(()=>o.value=!0)}),j(()=>{const s=y(t);s&&document.body.removeChild(s)});function f(s,n){const{handler:c,disabled:l}=s;l||(o.value=!1,n==null||n.stopPropagation(),n==null||n.preventDefault(),c==null||c())}function a(s){return s.map(n=>{const{disabled:c,label:l,children:u,divider:m=!1}=n,p={item:n,handler:f,showIcon:e.showIcon};return!u||u.length===0?r(W,null,[r(v.Item,{disabled:c,class:`${h}__item`,key:l},{default:()=>[r(k,p,null)]}),m?r(F,{key:`d-${l}`},null):null]):y(o)?r(v.SubMenu,{key:l,disabled:c,popupClassName:`${h}__popup`},{title:()=>r(k,p,null),default:()=>a(u)}):null})}return()=>{let s;if(!y(o))return null;const{items:n}=e;return r("div",{class:h},[r(v,{inlineIndent:12,mode:"vertical",ref:t,style:y(i)},Y(s=a(n))?s:{default:()=>[s]})])}}});const d={domList:[],resolve:()=>{}},G=function(e){const{event:t}=e||{};if(t&&(t==null||t.preventDefault()),!!P)return new Promise(o=>{const i=document.body,f=document.createElement("div"),a={};e.styles&&(a.styles=e.styles),e.items&&(a.items=e.items),e.event&&(a.customEvent=t,a.axis={x:t.clientX,y:t.clientY});const s=r(z,a);U(s,f);const n=function(){d.resolve("")};d.domList.push(f);const c=function(){d.domList.forEach(l=>{try{l&&i.removeChild(l)}catch(u){}}),i.removeEventListener("click",n),i.removeEventListener("scroll",n)};d.resolve=function(l){c(),o(l)},c(),i.appendChild(f),i.addEventListener("click",n),i.addEventListener("scroll",n)})},M=function(){d&&(d.resolve(""),d.domList=[])};function ee(e=!0){return X()&&e&&j(()=>{M()}),[G,M]}export{ee as u};
