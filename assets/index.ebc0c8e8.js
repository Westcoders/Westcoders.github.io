import{b6 as w,b7 as W,b8 as y,b9 as g,_ as v,ag as x}from"./index.78902926.js";import{r as b,aS as $,u as c,al as B,aj as R,B as I,a1 as C,D as P,a2 as S,a7 as d,w as m,af as _}from"./vendor.e45423c9.js";import{P as M}from"./index.169a0c7c.js";/* empty css               *//* empty css                */import"./useWindowSizeFn.7b3a7491.js";import"./useContentViewHeight.1c0e1783.js";const z=Symbol("watermark-dom");function D(n=b(document.body)){const a=y(function(){const t=c(n);if(!t)return;const{clientHeight:e,clientWidth:o}=t;i({height:e,width:o})}),s=z.toString(),l=$(),f=()=>{const t=c(l);l.value=void 0;const e=c(n);!e||(t&&e.removeChild(t),w(e,a))};function k(t){const e=document.createElement("canvas"),o=300,u=240;Object.assign(e,{width:o,height:u});const r=e.getContext("2d");return r&&(r.rotate(-20*Math.PI/120),r.font="15px Vedana",r.fillStyle="rgba(0, 0, 0, 0.15)",r.textAlign="left",r.textBaseline="middle",r.fillText(t,o/20,u)),e.toDataURL("image/png")}function i(t={}){const e=c(l);!e||(g(t.width)&&(e.style.width=`${t.width}px`),g(t.height)&&(e.style.height=`${t.height}px`),g(t.str)&&(e.style.background=`url(${k(t.str)}) left top repeat`))}const p=t=>{if(c(l))return i({str:t}),s;const e=document.createElement("div");l.value=e,e.id=s,e.style.pointerEvents="none",e.style.top="0px",e.style.left="0px",e.style.position="absolute",e.style.zIndex="100000";const o=c(n);if(!o)return s;const{clientHeight:u,clientWidth:r}=o;return i({str:t,width:r,height:u}),o.appendChild(e),s};function h(t){p(t),W(document.documentElement,a),R()&&B(()=>{f()})}return{setWatermark:h,clear:f}}const E=I({components:{CollapseContainer:x,PageWrapper:M},setup(){const n=b(null),{setWatermark:a,clear:s}=D();return{setWatermark:a,clear:s,areaRef:n}}}),L=_(" Create "),N=_(" Clear "),T=_(" Reset ");function V(n,a,s,l,f,k){const i=C("a-button"),p=C("CollapseContainer"),h=C("PageWrapper");return P(),S(h,{title:"\u6C34\u5370\u793A\u4F8B"},{default:d(()=>[m(p,{class:"w-full h-32 bg-white rounded-md",title:"Global WaterMark"},{default:d(()=>[m(i,{type:"primary",class:"mr-2",onClick:a[0]||(a[0]=t=>n.setWatermark("WaterMark Info"))},{default:d(()=>[L]),_:1}),m(i,{color:"error",class:"mr-2",onClick:n.clear},{default:d(()=>[N]),_:1},8,["onClick"]),m(i,{color:"warning",class:"mr-2",onClick:a[1]||(a[1]=t=>n.setWatermark("WaterMark Info New"))},{default:d(()=>[T]),_:1})]),_:1})]),_:1})}var q=v(E,[["render",V]]);export{q as default};