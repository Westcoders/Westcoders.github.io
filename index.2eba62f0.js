import{C as g,M as i,J as F}from"./index.32bbdb18.js";import{P as x}from"./index.169a0c7c.js";import{B as R,bH as c,bR as B,r as h,a1 as n,D as b,a2 as P,a7 as o,w as a,u as S,v as _,A as k,af as l}from"./vendor.e45423c9.js";/* empty css                *//* empty css                */import{_ as y}from"./index.78902926.js";import"./useWindowSizeFn.7b3a7491.js";/* empty css               *//* empty css                */import"./useContentViewHeight.1c0e1783.js";const f='{"name":"BeJson","url":"http://www.xxx.com","page":88,"isNonProfit":true,"address":{"street":"\u79D1\u6280\u56ED\u8DEF.","city":"\u6C5F\u82CF\u82CF\u5DDE","country":"\u4E2D\u56FD"},"links":[{"name":"Google","url":"http://www.xxx.com"},{"name":"Baidu","url":"http://www.xxx.com"},{"name":"SoSo","url":"http://www.xxx.com"}]}',j=`
      (() => {
        var htmlRoot = document.getElementById('htmlRoot');
        var theme = window.localStorage.getItem('__APP__DARK__MODE__');
        if (htmlRoot && theme) {
          htmlRoot.setAttribute('data-theme', theme);
          theme = htmlRoot = null;
        }
      })();
  `,A=`
     <!DOCTYPE html>
<html lang="en" id="htmlRoot">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="renderer" content="webkit" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0"
    />
    <title><%= title %></title>
    <link rel="icon" href="/favicon.ico" />
  </head>
  <body>
    <div id="app">
    </div>
  </body>
</html>
  `,J=R({components:{CodeEditor:g,PageWrapper:x,RadioButton:c.Button,RadioGroup:c.Group,ASpace:B},setup(){const t=h(i.JSON),e=h(f);function m(p){const u=p.target.value;if(u===i.JSON){e.value=f;return}if(u===i.HTML){e.value=A;return}if(u===i.JS){e.value=j;return}}function d(){S(t)==="application/json"?_.info({title:"\u7F16\u8F91\u5668\u5F53\u524D\u503C",content:k(F,{data:JSON.parse(e.value)})}):_.info({title:"\u7F16\u8F91\u5668\u5F53\u524D\u503C",content:e.value})}return{value:e,modeValue:t,handleModeChange:m,showData:d}}}),M=l("\u83B7\u53D6\u6570\u636E"),N=l(" json\u6570\u636E "),O=l(" html\u4EE3\u7801 "),V=l(" javascript\u4EE3\u7801 ");function G(t,e,m,d,p,u){const v=n("a-button"),r=n("RadioButton"),w=n("RadioGroup"),E=n("a-space"),C=n("CodeEditor"),D=n("PageWrapper");return b(),P(D,{title:"\u4EE3\u7801\u7F16\u8F91\u5668\u7EC4\u4EF6\u793A\u4F8B",contentFullHeight:"",fixedHeight:"",contentBackground:""},{extra:o(()=>[a(E,{size:"middle"},{default:o(()=>[a(v,{onClick:t.showData,type:"primary"},{default:o(()=>[M]),_:1},8,["onClick"]),a(w,{"button-style":"solid",value:t.modeValue,"onUpdate:value":e[0]||(e[0]=s=>t.modeValue=s),onChange:t.handleModeChange},{default:o(()=>[a(r,{value:"application/json"},{default:o(()=>[N]),_:1}),a(r,{value:"htmlmixed"},{default:o(()=>[O]),_:1}),a(r,{value:"javascript"},{default:o(()=>[V]),_:1})]),_:1},8,["value","onChange"])]),_:1})]),default:o(()=>[a(C,{value:t.value,"onUpdate:value":e[1]||(e[1]=s=>t.value=s),mode:t.modeValue},null,8,["value","mode"])]),_:1})}var X=y(J,[["render",G]]);export{X as default};
