import{Q as h,a as b}from"./QForm.fa683454.js";import{Q as u}from"./QBtn.42928f86.js";import{u as x,r as d,O as w,ad as V,ai as k,j as B,k as C,m as s,ac as _,d as o,l as i,p as Q,aj as q,ak as S,ab as m}from"./index.ed43af46.js";import"./use-key-composition.85e976d2.js";import"./Ripple.ff1a089e.js";import"./render.2a3052e7.js";import"./use-dark.67e2047a.js";import"./uid.42677368.js";const j={id:"product"},M={class:"row"},N={class:"col-12"},P={class:"text-center product-title"},T={class:"row"},D={class:"col-lg-6 col-sm-12"},H={class:"product-img"},L=["src"],R={class:"col-lg-6 col-sm-12"},U=["innerHTML"],$={class:"col-12"},A=["model-value"],X={__name:"ProductView",setup(E){const p=q(),l=S(),v=x(),{editCart:g}=v,y=d(!1),a=d(0),n={required(t){return!!t||"\u6B04\u4F4D\u5FC5\u586B"},number(t){return t>0||"\u6578\u91CF\u932F\u8AA4"}},e=w({_id:"",name:"",price:0,description:"",image:"",sell:!0,category:""}),f=()=>{!y.value||g({_id:e._id,quantity:a.value})};return(async()=>{try{const{data:t}=await V.get("/products/"+p.params.id);e._id=t.result._id,e.name=t.result.name,e.price=t.result.price,e.description=t.result.description,e.image=t.result.image,e.sell=t.result.sell,e.category=t.result.category,document.title="Dostoevsky | "+e.name}catch{k.exports.Swal.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u5546\u54C1\u5931\u6557"}),l.go(-1)}})(),(t,r)=>(B(),C("div",j,[s("div",M,[s("div",N,[s("h3",P,_(e.name),1),s("div",T,[s("div",D,[s("div",H,[s("img",{src:e.image},null,8,L)])]),s("div",R,[s("h4",null,"$"+_(e.price),1),s("div",{innerHTML:e.description},null,8,U)])]),s("div",$,[o(h,{onSubmit:f},{default:i(()=>[o(b,{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=c=>a.value=c),modelModifiers:{number:!0},type:"number",label:"\u6578\u91CF",rules:[n.required,n.number]},null,8,["modelValue","rules"]),o(u,{type:"submit",color:"primary"},{default:i(()=>[m("Add Cart")]),_:1})]),_:1})])])]),s("div",{class:"align-center justify-center text-center",persistent:"persistent","model-value":!e.sell},[o(u,{onClick:r[1]||(r[1]=c=>Q(l).go(-1)),style:{"margin-bottom":"3rem"}},{default:i(()=>[m("Go Back")]),_:1})],8,A)]))}};export{X as default};