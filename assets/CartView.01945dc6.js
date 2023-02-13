import{Q as q}from"./QTable.3af2fecc.js";import{Q as c}from"./QBtn.7faca946.js";import{u as B,O as V,c as h,al as N,aa as Q,n as i,a1 as u,z as t,d as o,F as x,ab as S,y as $,a8 as n,x as y,q as d,ag as z,am as F,v as r}from"./index.739fefb5.js";import"./Ripple.b8857d57.js";import"./use-size.20ba4e13.js";import"./render.bb05bb94.js";import"./use-dark.51c8344e.js";import"./QCheckbox.75ad47f0.js";import"./use-key-composition.e8bfb011.js";import"./QSpinner.adb6de04.js";import"./uid.42677368.js";import"./use-fullscreen.1c541a60.js";import"./scroll.cc691cd4.js";const T={id:"cart"},A={class:"row"},D=t("div",{class:"col-12"},[t("h3",{class:"title"},"\u8CFC\u7269\u8ECA")],-1),E={class:"col-10"},L={class:"col-12"},O=t("thead",null,[t("tr",null,[t("th",null,"\u5716\u7247"),t("th",null,"\u540D\u7A31"),t("th",null,"\u55AE\u50F9"),t("th",null,"\u6578\u91CF"),t("th",null,"\u5C0F\u8A08"),t("th",null,"\u64CD\u4F5C")])],-1),P=["src"],R={key:0},U=t("td",{class:"text-center",colspan:"6"},"\u6C92\u6709\u5546\u54C1",-1),j=[U],G={class:"col-12 text-center"},H={class:"col-12 text-center"},nt={__name:"CartView",setup(I){const C=z(),k=B(),{editCart:f,checkout:v}=k,s=V([]),_=async(e,l)=>{await f({_id:s[e].p_id._id,quantity:l}),s[e].quantity+=l,s[e].quantity<=0&&s.splice(e,1)},w=async()=>{await v(),C.push("/orders")},g=h(()=>s.reduce((e,l)=>e+l.p_id.price*l.quantity,0)),b=h(()=>s.length>0&&!s.some(e=>!e.p_id.sell));return(async()=>{try{const{data:e}=await N.get("/users/cart");s.push(...e.result)}catch{Q.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u8CFC\u7269\u8ECA\u5931\u6557"})}})(),(e,l)=>(i(),u("div",T,[t("div",A,[D,t("div",E,[o(q,{rows:s,columns:e.columns},null,8,["rows","columns"])]),t("div",L,[t("table",null,[O,t("tbody",null,[(i(!0),u(x,null,S(s,(a,m)=>(i(),u("tr",{key:a._id,class:F({"bg-red":!a.p_id.sell})},[t("td",null,[t("img",{"aspect-ratio":1,width:200,src:a.p_id.image},null,8,P)]),t("td",null,n(a.p_id.name),1),t("td",null,n(a.p_id.price),1),t("td",null,[o(c,{color:"primary",onClick:p=>_(m,-1)},{default:d(()=>[r("-")]),_:2},1032,["onClick"]),r("\xA0"+n(a.quantity)+"\xA0 ",1),o(c,{color:"primary",onClick:p=>_(m,1)},{default:d(()=>[r("+")]),_:2},1032,["onClick"])]),t("td",null,n(a.quantity*a.p_id.price),1),t("td",null,[o(c,{color:"red",onClick:p=>_(m,a.quantity*-1)},{default:d(()=>[r("\u522A\u9664")]),_:2},1032,["onClick"])])],2))),128)),s.length===0?(i(),u("tr",R,j)):$("",!0)])])]),t("div",G,[t("div",H,[t("p",null,"\u7E3D\u91D1\u984D "+n(y(g)),1),o(c,{color:"accent",disabled:!y(b),onClick:w},{default:d(()=>[r("\u7D50\u5E33")]),_:1},8,["disabled"])])])])]))}};export{nt as default};
