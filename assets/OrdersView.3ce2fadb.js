import{Q as m,a as f}from"./QTable.e8a003cd.js";import{a0 as h,N as w,ao as g,ae as v,j as i,a1 as o,q as a,d as c,l as d,F as _,af as b,ac as y,a3 as x,a4 as I}from"./index.8fa2858c.js";import"./render.6b9ad025.js";import"./Ripple.864aff7b.js";import"./use-dark.6b4e8ee5.js";import"./scroll.3c4a2864.js";import"./use-key-composition.627013dd.js";import"./QBtn.176a8bd8.js";import"./uid.42677368.js";import"./use-fullscreen.c99a7788.js";const p=r=>(x("data-v-1eb382e5"),r=r(),I(),r),S=p(()=>a("div",{id:"orders"},null,-1)),D={class:"row"},V=p(()=>a("div",{class:"col-12"},[a("h3",{class:"title"},"Orders Management")],-1)),O={class:"col-10"},k={__name:"OrdersView",setup(r){const u=[{name:"id",label:"ID",field:e=>e._id,align:"center"},{name:"u_id",label:"U_ID",field:e=>e.u_id.account,align:"center"},{name:"date",label:"\u65E5\u671F",field:e=>new Date(e.date).toLocaleDateString(),align:"center"},{name:"price",label:"\u91D1\u984D",field:e=>e.totalPrice,align:"center"},{name:"name",label:"\u5546\u54C1",field:e=>e,align:"center"}],n=w([]);return(async()=>{try{const{data:e}=await g.get("/orders/all");n.push(...e.result.map(s=>(s.totalPrice=s.products.reduce((l,t)=>l+t.p_id.price*t.quantity,0),s)))}catch{v.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u8A02\u55AE\u5931\u6557"})}})(),(e,s)=>(i(),o(_,null,[S,a("div",D,[V,a("div",O,[c(m,{rows:n,columns:u},{"body-cell-name":d(l=>[c(f,null,{default:d(()=>[a("ul",null,[(i(!0),o(_,null,b(l.row.products,t=>(i(),o("li",{key:t._id},[a("p",null,y(t.quantity+" \u500B "+t.p_id.name),1)]))),128))])]),_:2},1024)]),_:1},8,["rows"])])])],64))}};var C=h(k,[["__scopeId","data-v-1eb382e5"]]);export{C as default};