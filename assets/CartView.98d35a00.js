import{Q as x,a as s}from"./QTable.02ca4b60.js";import{Q as d}from"./QBtn.12326633.js";import{a0 as I,u as q,N as Q,c as m,ao as S,ae as T,j as V,a1 as B,q as c,d as i,l as a,ac as P,n as f,ak as N,ab as _,a3 as $,a4 as D}from"./index.15a5b2e0.js";import"./render.69756232.js";import"./Ripple.e01b652b.js";import"./use-dark.cb484cc0.js";import"./scroll.5889c5b5.js";import"./use-key-composition.07d85765.js";import"./uid.42677368.js";import"./use-fullscreen.3973e43b.js";const j=n=>($("data-v-383a62c3"),n=n(),D(),n),A={id:"cart"},E={class:"row"},R=j(()=>c("div",{class:"col-12"},[c("h3",{class:"title"},"Cart")],-1)),U={class:"col-10"},z=["src"],F={class:"col-12 text-center"},G={class:"col-12 text-center"},H={__name:"CartView",setup(n){const h=[{name:"image",label:"Image",field:e=>e,align:"center"},{name:"name",label:"Product Title",field:e=>e.p_id.name,align:"center"},{name:"price",label:"Price",field:e=>e.p_id.price,align:"center"},{name:"minus",label:"",field:e=>e,align:"center"},{name:"edit",label:"Quantity",field:e=>e.quantity,align:"center"},{name:"add",label:"",field:e=>e,align:"center"},{name:"price-total",label:"Total Price",field:e=>e.quantity*e.p_id.price,align:"center"},{name:"delete",label:"Delete",field:e=>e,align:"center"}],y=N(),w=q(),{editCart:g,checkout:C}=w,t=Q([]),u=async(e,o)=>{await g({_id:t[e].p_id._id,quantity:o}),t[e].quantity+=o,t[e].quantity<=0&&t.splice(e,1)},b=async()=>{await C(),y.push("/orders")},k=m(()=>t.reduce((e,o)=>e+o.p_id.price*o.quantity,0)),v=m(()=>t.length>0&&!t.some(e=>!e.p_id.sell));return(async()=>{try{const{data:e}=await S.get("/users/cart");t.push(...e.result)}catch{T.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u8CFC\u7269\u8ECA\u5931\u6557"})}})(),(e,o)=>(V(),B("div",A,[c("div",E,[R,c("div",U,[i(x,{rows:t,columns:h,"row-key":"_id"},{"body-cell-image":a(l=>[i(s,null,{default:a(()=>[c("img",{src:l.row.p_id.image,style:{height:"100px",width:"100px"}},null,8,z)]),_:2},1024)]),"body-cell-minus":a(l=>[i(s,null,{default:a(()=>[i(d,{color:"primary",onClick:p=>u(t.findIndex(r=>r._id===l.row._id),-1)},{default:a(()=>[_("-")]),_:2},1032,["onClick"])]),_:2},1024)]),"body-cell-add":a(l=>[i(s,null,{default:a(()=>[i(d,{color:"primary",onClick:p=>u(t.findIndex(r=>r._id===l.row._id),1)},{default:a(()=>[_("+")]),_:2},1032,["onClick"])]),_:2},1024)]),"body-cell-delete":a(l=>[i(s,null,{default:a(()=>[i(d,{color:"red",onClick:p=>u(t.findIndex(r=>r._id===l.row._id),parseInt(l.row.quantity*-1))},{default:a(()=>[_("\u522A\u9664")]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["rows"])]),c("div",F,[c("div",G,[c("p",null,"Total Price "+P(f(k)),1),i(d,{color:"accent",disabled:!f(v),onClick:b},{default:a(()=>[_("Checkout")]),_:1},8,["disabled"])])])])]))}};var te=I(H,[["__scopeId","data-v-383a62c3"]]);export{te as default};
