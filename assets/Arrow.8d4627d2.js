import{o,c as t}from"./vendor.78ed562a.js";const r={name:"Arrow",data:()=>({color:""}),props:{arrowColor:{type:String,default:"gray"},activeColor:{type:String,default:"BLACK"},arrowHeight:{type:String,default:"100px"},bottomWidth:{type:String,default:"100px"},topWidth:{type:String,default:"30px"}},methods:{showHove(){this.color=this.activeColor},showOut(){this.color=this.arrowColor}},mounted(){this.color=this.arrowColor,this.$refs.arrow.style.setProperty("--setTopWidth",this.topWidth)}};r.render=function(r,e,i,s,a,h){return o(),t("div",{class:"arrow",ref:"arrow",style:{borderColor:a.color,width:i.bottomWidth,height:i.arrowHeight},onMouseover:e[1]||(e[1]=o=>h.showHove()),onMouseout:e[2]||(e[2]=o=>h.showOut())},null,36)};export default r;
