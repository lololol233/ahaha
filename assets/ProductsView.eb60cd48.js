import{Q as p}from"./QBtn.12326633.js";import{Q as I,b as S,a as b,c as q,d as U}from"./QTable.02ca4b60.js";import{Q as v}from"./Ripple.e01b652b.js";import{Q as j,a as y}from"./QForm.d2a53223.js";import{Q as B,a as D,C as F}from"./ClosePopup.ff4cf7b7.js";import{Q as T}from"./QCardActions.6c7ee32a.js";import{Q as A}from"./QCard.9c1e0020.js";import{a0 as E,N as V,ao as _,ae as m,j as Q,a1 as N,q as s,d as t,l as d,F as R,m as h,ab as g,ac as $,y as M,k as W,a3 as z,a4 as G}from"./index.15a5b2e0.js";import"./render.69756232.js";import"./use-dark.cb484cc0.js";import"./scroll.5889c5b5.js";import"./use-key-composition.07d85765.js";import"./uid.42677368.js";import"./use-fullscreen.3973e43b.js";const w=c=>(z("data-v-6fdbe209"),c=c(),G(),c),H={id:"admin-products"},J=w(()=>s("h2",{class:"title"},"Product Management",-1)),K={class:"row"},L={class:"col-10 mb-lg"},O={class:"col-10"},X=["src"],Y={class:"text-center"},Z={class:"row"},ee={class:"col-12"},ae={class:"col-12"},le={class:"col-12"},te={class:"q-pa-md q-gutter-sm"},oe={class:"col-12"},se={class:"col-12"},de={class:"col-12"},ie=w(()=>s("div",{class:"col-12"},null,-1)),ne={__name:"ProductsView",setup(c){const C=[{name:"name",label:"Product Title",field:a=>a.name,align:"center"},{name:"image",label:"Image",field:a=>a,align:"center"},{name:"price",label:"Price",field:a=>a.price,align:"center"},{name:"edit",label:"Edit",field:a=>a,align:"center"}],k=["\u66F8","\u660E\u4FE1\u7247","\u5176\u4ED6"],u={required(a){return!!a||"\u6B04\u4F4D\u5FC5\u586B"},price(a){return a>=0||"\u50F9\u683C\u932F\u8AA4"}},i=V([]),e=V({_id:"",name:"",price:0,description:"",image:void 0,sell:!1,category:"",loading:!1,dialog:!1,idx:-1}),f=a=>{a===-1?(e._id="",e.name="",e.price=0,e.description="",e.image=void 0,e.sell=!1,e.category="",e.loading=!1,e.idx=-1):(e._id=i[a]._id,e.name=i[a].name,e.price=i[a].price,e.description=i[a].description,e.image=void 0,e.sell=i[a].sell,e.category=i[a].category,e.loading=!1,e.idx=a),e.dialog=!0},P=async()=>{var l,n;e.loading=!0;const a=new FormData;a.append("name",e.name),a.append("price",e.price),a.append("description",e.description),a.append("image",e.image),a.append("sell",e.sell),a.append("category",e.category);try{if(e._id.length===0){const{data:r}=await _.post("/products",a);i.push(r.result),m.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6210\u529F"})}else{const{data:r}=await _.patch("/products/"+e._id,a);i[e.idx]=r.result,m.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"})}e.dialog=!1}catch(r){m.fire({icon:"error",title:"\u5931\u6557",text:((n=(l=r==null?void 0:r.response)==null?void 0:l.data)==null?void 0:n.message)||"\u767C\u751F\u932F\u8AA4"})}e.loading=!1};return(async()=>{var a,l;try{const{data:n}=await _.get("/products/all");i.push(...n.result)}catch(n){m.fire({icon:"error",title:"\u5931\u6557",text:((l=(a=n==null?void 0:n.response)==null?void 0:a.data)==null?void 0:l.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(a,l)=>{const n=h("q-card-title"),r=h("q-card-text");return Q(),N(R,null,[s("div",H,[J,s("div",K,[s("div",L,[t(p,{color:"primary",onClick:l[0]||(l[0]=o=>f(-1))},{default:d(()=>[g("Add Product")]),_:1})]),s("div",O,[t(I,{rows:i,columns:C,"row-key":"_id"},{"body-cell-image":d(o=>[t(b,null,{default:d(()=>[s("img",{src:o.row.image,style:{height:"100px",width:"100px"}},null,8,X)]),_:2},1024)]),"body-cell-edit":d(o=>[t(b,null,{default:d(()=>[t(p,{round:"round",onClick:re=>f(i.findIndex(x=>x._id===o.row._id))},{default:d(()=>[t(v,{name:"build"})]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["rows"])])])]),t(S,{modelValue:e.dialog,"onUpdate:modelValue":l[7]||(l[7]=o=>e.dialog=o),persistent:""},{default:d(()=>[t(A,null,{default:d(()=>[t(j,{onSubmit:P},{default:d(()=>[t(n,null,{default:d(()=>[s("h3",Y,$(e._id.length>0?"Edit Product":"Add Product"),1)]),_:1}),t(r,null,{default:d(()=>[s("div",Z,[s("div",ee,[t(y,{modelValue:e.name,"onUpdate:modelValue":l[1]||(l[1]=o=>e.name=o),type:"text",label:"Title",rules:[u.required]},null,8,["modelValue","rules"])]),s("div",ae,[t(y,{modelValue:e.price,"onUpdate:modelValue":l[2]||(l[2]=o=>e.price=o),type:"number",label:"Price",rules:[u.required,u.price]},null,8,["modelValue","rules"])]),s("div",le,[s("div",te,[t(B,{modelValue:e.description,"onUpdate:modelValue":l[3]||(l[3]=o=>e.description=o),definitions:{save:{tip:"Save your work",icon:"save",label:"Save",handler:a.saveWork},upload:{tip:"Upload to cloud",icon:"cloud_upload",label:"Upload",handler:a.uploadIt}},toolbar:[["bold","italic","strike","underline"],["upload","save"]]},null,8,["modelValue","definitions"])])]),s("div",oe,[t(q,{modelValue:e.category,"onUpdate:modelValue":l[4]||(l[4]=o=>e.category=o),options:k,rules:[u.required],label:"Category"},null,8,["modelValue","rules"])]),s("div",se,[t(D,{modelValue:e.image,"onUpdate:modelValue":l[5]||(l[5]=o=>e.image=o),label:"Pick Images",filled:"",append:"",accept:".jpg, image/*",onRejected:a.onRejected},{prepend:d(()=>[t(v,{name:"image"})]),_:1},8,["modelValue","onRejected"])]),s("div",de,[t(U,{modelValue:e.sell,"onUpdate:modelValue":l[6]||(l[6]=o=>e.sell=o),label:"Post"},null,8,["modelValue"])]),ie])]),_:1}),t(T,null,{default:d(()=>[M((Q(),W(p,{disabled:e.loading,cocolor:"primary"},{default:d(()=>[g("Cancel")]),_:1},8,["disabled"])),[[F]]),t(p,{disabled:e.loading,color:"primary",type:"submit"},{default:d(()=>[g("Submit")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}};var Ce=E(ne,[["__scopeId","data-v-6fdbe209"]]);export{Ce as default};
