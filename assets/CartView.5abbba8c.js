import{Q as x,a as r}from"./QTable.9710a9a7.js";import{Q as d}from"./QBtn.a5e0a354.js";import{a1 as I,u as Q,O as S,c as m,ao as T,ae as V,j as q,k as B,m as l,d as i,l as a,ac as P,p as f,ak as N,ab as _,a3 as $,a4 as D}from"./index.cdb24b33.js";import"./render.92d42912.js";import"./Ripple.55575af3.js";import"./use-dark.de213629.js";import"./scroll.9f0db524.js";import"./use-key-composition.969cea51.js";import"./uid.42677368.js";import"./use-fullscreen.4925b2a9.js";const j=n=>($("data-v-71f7c4a0"),n=n(),D(),n),A={id:"cart"},E={class:"row"},O=j(()=>l("div",{class:"col-12"},[l("h3",{class:"title"},"Cart")],-1)),R={class:"col-10"},U=["src"],z={class:"col-12 text-center"},F={class:"col-12 text-center"},G={__name:"CartView",setup(n){const h=[{name:"image",label:"Image",field:e=>e,align:"center"},{name:"name",label:"Product Title",field:e=>e.p_id.name,align:"center"},{name:"price",label:"Price",field:e=>e.p_id.price,align:"center"},{name:"minus",label:"",field:e=>e,align:"center"},{name:"edit",label:"Quantity",field:e=>e.quantity,align:"center"},{name:"add",label:"",field:e=>e,align:"center"},{name:"price-total",label:"Total Price",field:e=>e.quantity*e.p_id.price,align:"center"},{name:"delete",label:"Delete",field:e=>e,align:"center"}],w=N(),y=Q(),{editCart:g,checkout:C}=y,t=S([]),u=async(e,o)=>{await g({_id:t[e].p_id._id,quantity:o}),t[e].quantity+=o,t[e].quantity<=0&&t.splice(e,1)},k=async()=>{await C(),w.push("/orders")},b=m(()=>t.reduce((e,o)=>e+o.p_id.price*o.quantity,0)),v=m(()=>t.length>0&&!t.some(e=>!e.p_id.sell));return(async()=>{try{const{data:e}=await T.get("/users/cart");t.push(...e.result)}catch{V.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u8CFC\u7269\u8ECA\u5931\u6557"})}})(),(e,o)=>(q(),B("div",A,[l("div",E,[O,l("div",R,[i(x,{rows:t,columns:h,"row-key":"_id"},{"body-cell-image":a(c=>[i(r,{class:"slot"},{default:a(()=>[l("img",{src:c.row.p_id.image,style:{height:"100px",width:"100px"}},null,8,U)]),_:2},1024)]),"body-cell-minus":a(c=>[i(r,{class:"slot"},{default:a(()=>[i(d,{onClick:p=>u(t.findIndex(s=>s._id===c.row._id),-1)},{default:a(()=>[_("-")]),_:2},1032,["onClick"])]),_:2},1024)]),"body-cell-add":a(c=>[i(r,{class:"slot"},{default:a(()=>[i(d,{onClick:p=>u(t.findIndex(s=>s._id===c.row._id),1)},{default:a(()=>[_("+")]),_:2},1032,["onClick"])]),_:2},1024)]),"body-cell-delete":a(c=>[i(r,{class:"slot"},{default:a(()=>[i(d,{color:"red",onClick:p=>u(t.findIndex(s=>s._id===c.row._id),parseInt(c.row.quantity*-1))},{default:a(()=>[_("\u522A\u9664")]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["rows"])]),l("div",z,[l("div",F,[l("p",null,"Total Price "+P(f(b)),1),i(d,{color:"accent",disabled:!f(v),onClick:k},{default:a(()=>[_("Checkout")]),_:1},8,["disabled"])])])])]))}};var te=I(G,[["__scopeId","data-v-71f7c4a0"]]);export{te as default};
