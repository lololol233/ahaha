import{Q as p}from"./QBtn.6aca6011.js";import{Q as S,b as q,a as b,c as U,d as B}from"./QTable.c67e5b26.js";import{Q as v}from"./Ripple.88d2a66f.js";import{Q as T,a as y}from"./QForm.e12f4e95.js";import{Q as j,a as D,C as F}from"./ClosePopup.99bb6333.js";import{Q as A}from"./QCardActions.47b3d1b0.js";import{Q as E}from"./QCard.84cd7c78.js";import{a0 as N,r as z,N as V,ao as g,ae as m,j as h,a1 as R,q as s,d as t,l as i,F as $,m as w,ab as _,ac as M,y as O,k as W,a3 as G,a4 as H}from"./index.8c7a956c.js";import"./render.d6d965c3.js";import"./use-dark.85dfcf63.js";import"./scroll.a6830817.js";import"./use-key-composition.b9e69098.js";import"./uid.42677368.js";import"./use-fullscreen.4eb69049.js";const Q=c=>(G("data-v-b3ed9cf6"),c=c(),H(),c),J={id:"admin-products"},K=Q(()=>s("h3",{class:"title"},"Product Management",-1)),L={class:"row"},X={class:"col-10 mb-lg"},Y={class:"col-10"},Z=["src"],ee={class:"text-center title"},ae={class:"row"},le={class:"col-12"},te={class:"col-12"},oe={class:"col-12"},se={class:"q-pa-md q-gutter-sm"},ie={class:"col-12"},de={class:"col-12"},re={class:"col-12"},ne=Q(()=>s("div",{class:"col-12"},null,-1)),ce={__name:"ProductsView",setup(c){const x=z(!0),C=[{name:"name",label:"Product Title",field:a=>a.name,align:"center"},{name:"image",label:"Image",field:a=>a,align:"center"},{name:"category",label:"Category",field:a=>a.category,align:"center"},{name:"price",label:"Price",field:a=>a.price,align:"center"},{name:"edit",label:"Edit",field:a=>a,align:"center"}],k=["Books","Postcards","Others"],u={required(a){return!!a||"\u6B04\u4F4D\u5FC5\u586B"},price(a){return a>=0||"\u50F9\u683C\u932F\u8AA4"}},d=V([]),e=V({_id:"",name:"",price:0,description:"",image:void 0,sell:!1,category:"",loading:!1,dialog:!1,idx:-1}),f=a=>{a===-1?(e._id="",e.name="",e.price=0,e.description="",e.image=void 0,e.sell=!1,e.category="",e.loading=!1,e.idx=-1):(e._id=d[a]._id,e.name=d[a].name,e.price=d[a].price,e.description=d[a].description,e.image=void 0,e.sell=d[a].sell,e.category=d[a].category,e.loading=!1,e.idx=a),e.dialog=!0},P=async()=>{var l,r;e.loading=!0;const a=new FormData;a.append("name",e.name),a.append("price",e.price),a.append("description",e.description),a.append("image",e.image),a.append("sell",e.sell),a.append("category",e.category);try{if(e._id.length===0){const{data:n}=await g.post("/products",a);d.push(n.result),m.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6210\u529F"})}else{const{data:n}=await g.patch("/products/"+e._id,a);d[e.idx]=n.result,m.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"})}e.dialog=!1}catch(n){m.fire({icon:"error",title:"\u5931\u6557",text:((r=(l=n==null?void 0:n.response)==null?void 0:l.data)==null?void 0:r.message)||"\u767C\u751F\u932F\u8AA4"})}e.loading=!1};return(async()=>{var a,l;try{const{data:r}=await g.get("/products/all");d.push(...r.result)}catch(r){m.fire({icon:"error",title:"\u5931\u6557",text:((l=(a=r==null?void 0:r.response)==null?void 0:a.data)==null?void 0:l.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(a,l)=>{const r=w("q-card-title"),n=w("q-card-text");return h(),R($,null,[s("div",J,[K,s("div",L,[s("div",X,[t(p,{color:"primary",onClick:l[0]||(l[0]=o=>f(-1))},{default:i(()=>[_("Add Product")]),_:1})]),s("div",Y,[t(S,{rows:d,columns:C,"row-key":"_id"},{"body-cell-image":i(o=>[t(b,{class:"slot"},{default:i(()=>[s("img",{src:o.row.image,style:{height:"100px",width:"100px"}},null,8,Z)]),_:2},1024)]),"body-cell-edit":i(o=>[t(b,{class:"slot"},{default:i(()=>[t(p,{round:"round",onClick:ue=>f(d.findIndex(I=>I._id===o.row._id))},{default:i(()=>[t(v,{name:"build"})]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["rows"])])])]),t(q,{modelValue:e.dialog,"onUpdate:modelValue":l[7]||(l[7]=o=>e.dialog=o),persistent:"",maximized:x.value,"transition-show":"slide-up","transition-hide":"slide-down"},{default:i(()=>[t(E,null,{default:i(()=>[t(T,{onSubmit:P},{default:i(()=>[t(r,null,{default:i(()=>[s("h3",ee,M(e._id.length>0?"Edit Product":"Add Product"),1)]),_:1}),t(n,null,{default:i(()=>[s("div",ae,[s("div",le,[t(y,{modelValue:e.name,"onUpdate:modelValue":l[1]||(l[1]=o=>e.name=o),type:"text",label:"Title",rules:[u.required]},null,8,["modelValue","rules"])]),s("div",te,[t(y,{modelValue:e.price,"onUpdate:modelValue":l[2]||(l[2]=o=>e.price=o),type:"number",label:"Price",rules:[u.required,u.price]},null,8,["modelValue","rules"])]),s("div",oe,[s("div",se,[t(j,{modelValue:e.description,"onUpdate:modelValue":l[3]||(l[3]=o=>e.description=o),definitions:{save:{tip:"Save your work",icon:"save",label:"Save",handler:a.saveWork},upload:{tip:"Upload to cloud",icon:"cloud_upload",label:"Upload",handler:a.uploadIt}},toolbar:[["bold","italic","strike","underline"],["upload","save"]]},null,8,["modelValue","definitions"])])]),s("div",ie,[t(U,{modelValue:e.category,"onUpdate:modelValue":l[4]||(l[4]=o=>e.category=o),options:k,rules:[u.required],label:"Category"},null,8,["modelValue","rules"])]),s("div",de,[t(D,{modelValue:e.image,"onUpdate:modelValue":l[5]||(l[5]=o=>e.image=o),label:"Pick Images",filled:"",append:"",accept:".jpg, image/*",onRejected:a.onRejected},{prepend:i(()=>[t(v,{name:"image"})]),_:1},8,["modelValue","onRejected"])]),s("div",re,[t(B,{modelValue:e.sell,"onUpdate:modelValue":l[6]||(l[6]=o=>e.sell=o),label:"Post"},null,8,["modelValue"])]),ne])]),_:1}),t(A,null,{default:i(()=>[O((h(),W(p,{disabled:e.loading},{default:i(()=>[_("Cancel")]),_:1},8,["disabled"])),[[F]]),t(p,{disabled:e.loading,color:"primary",type:"submit"},{default:i(()=>[_("Submit")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","maximized"])],64)}}};var ke=N(ce,[["__scopeId","data-v-b3ed9cf6"]]);export{ke as default};
