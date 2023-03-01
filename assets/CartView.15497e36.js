import{Q as x,a as n}from"./QTable.eb61b969.js";import{Q as d}from"./QBtn.42928f86.js";import{a1 as I,u as Q,O as S,c as m,ao as T,ae as V,j as q,k as B,m as s,d as i,l as a,ac as P,p as f,ak as D,ab as _,a3 as N,a4 as $}from"./index.ed43af46.js";import"./render.2a3052e7.js";import"./Ripple.ff1a089e.js";import"./use-dark.67e2047a.js";import"./scroll.fd9ba671.js";import"./use-key-composition.85e976d2.js";import"./uid.42677368.js";import"./use-fullscreen.fe4458d2.js";const j=r=>(N("data-v-6d42675a"),r=r(),$(),r),A={id:"cart"},E={class:"row"},O=j(()=>s("div",{class:"col-12"},[s("h3",{class:"title"},"Cart")],-1)),R={class:"col-10"},U=["src"],z={class:"col-12 text-center"},F={class:"col-12 text-center",style:{margin:"2rem 0"}},G={__name:"CartView",setup(r){const h=[{name:"image",label:"Image",field:e=>e,align:"center"},{name:"name",label:"Product Title",field:e=>e.p_id.name,align:"center"},{name:"price",label:"Price",field:e=>e.p_id.price,align:"center"},{name:"minus",label:"",field:e=>e,align:"center"},{name:"edit",label:"Quantity",field:e=>e.quantity,align:"center"},{name:"add",label:"",field:e=>e,align:"center"},{name:"price-total",label:"Total Price",field:e=>e.quantity*e.p_id.price,align:"center"},{name:"delete",label:"Delete",field:e=>e,align:"center"}],y=D(),g=Q(),{editCart:w,checkout:C}=g,t=S([]),u=async(e,c)=>{await w({_id:t[e].p_id._id,quantity:c}),t[e].quantity+=c,t[e].quantity<=0&&t.splice(e,1)},k=async()=>{await C(),y.push("/orders")},b=m(()=>t.reduce((e,c)=>e+c.p_id.price*c.quantity,0)),v=m(()=>t.length>0&&!t.some(e=>!e.p_id.sell));return(async()=>{try{const{data:e}=await T.get("/users/cart");t.push(...e.result)}catch{V.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u8CFC\u7269\u8ECA\u5931\u6557"})}})(),(e,c)=>(q(),B("div",A,[s("div",E,[O,s("div",R,[i(x,{rows:t,columns:h,"row-key":"_id"},{"body-cell-image":a(l=>[i(n,{class:"slot"},{default:a(()=>[s("img",{src:l.row.p_id.image,style:{height:"100px",width:"100px"}},null,8,U)]),_:2},1024)]),"body-cell-minus":a(l=>[i(n,{class:"slot"},{default:a(()=>[i(d,{onClick:p=>u(t.findIndex(o=>o._id===l.row._id),-1)},{default:a(()=>[_("-")]),_:2},1032,["onClick"])]),_:2},1024)]),"body-cell-add":a(l=>[i(n,{class:"slot"},{default:a(()=>[i(d,{onClick:p=>u(t.findIndex(o=>o._id===l.row._id),1)},{default:a(()=>[_("+")]),_:2},1032,["onClick"])]),_:2},1024)]),"body-cell-delete":a(l=>[i(n,{class:"slot"},{default:a(()=>[i(d,{color:"red",onClick:p=>u(t.findIndex(o=>o._id===l.row._id),parseInt(l.row.quantity*-1))},{default:a(()=>[_("Delete")]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["rows"])]),s("div",z,[s("div",F,[s("p",null,"Total Price "+P(f(b)),1),i(d,{color:"accent",disabled:!f(v),onClick:k},{default:a(()=>[_("Checkout")]),_:1},8,["disabled"])])])])]))}};var te=I(G,[["__scopeId","data-v-6d42675a"]]);export{te as default};