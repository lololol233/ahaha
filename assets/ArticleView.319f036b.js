import{Q as f,a as w}from"./QForm.d2a53223.js";import{Q as y}from"./QBtn.12326633.js";import{a0 as x,u as V,r as u,N as b,ad as S,ai as N,j as k,a1 as q,q as s,ac as i,d as l,l as _,n as B,aj as C,ak as I,ab as Q,a3 as D,a4 as j}from"./index.15a5b2e0.js";import"./use-key-composition.07d85765.js";import"./Ripple.e01b652b.js";import"./render.69756232.js";import"./use-dark.cb484cc0.js";import"./uid.42677368.js";const A=a=>(D("data-v-8693a358"),a=a(),j(),a),L={id:"New"},M={class:"row"},T={class:"col-12"},H={class:"text-center title"},R={class:"col-12"},U={class:"text-center"},E={class:"text-center"},F={class:"col-8"},G=["src"],P=A(()=>s("hr",null,null,-1)),$=["innerHTML"],z={class:"col-12"},J=["model-value"],K={__name:"ArticleView",setup(a){const m=C(),n=I(),p=V(),{editCart:v}=p,h=u(!1),r=u(0),c={required(t){return!!t||"\u6B04\u4F4D\u5FC5\u586B"},number(t){return t>0||"\u6578\u91CF\u932F\u8AA4"}},e=b({_id:"",name:"",description:"",image:"",sell:!0,category:"",date:""}),g=()=>{!h.value||v({_id:e._id,quantity:r.value})};return(async()=>{try{const{data:t}=await S.get("/news/"+m.params.id);e._id=t.result._id,e.name=t.result.name,e.description=t.result.description,e.image=t.result.image,e.sell=t.result.sell,e.category=t.result.category,e.date=t.result.date,document.title="\u8CFC\u7269\u7DB2 | "+e.name}catch{N.exports.Swal.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u6587\u7AE0\u5931\u6557"}),n.go(-1)}})(),(t,o)=>(k(),q("div",L,[s("div",M,[s("div",T,[s("h4",H,i(e.name),1)]),s("div",R,[s("h6",U,"Post Date\uFF1A"+i(new Date(e.date).toLocaleDateString()),1),s("h6",E,"Category\uFF1A["+i(e.category)+"]",1)]),s("div",F,[s("img",{src:e.image},null,8,G)]),P,s("div",{class:"word",innerHTML:e.description},null,8,$),s("div",z,[l(f,{onSubmit:g},{default:_(()=>[l(w,{class:"none",modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=d=>r.value=d),modelModifiers:{number:!0},type:"number",label:"\u6578\u91CF",rules:[c.required,c.number]},null,8,["modelValue","rules"])]),_:1})])]),s("div",{class:"align-center justify-center text-center",persistent:"persistent","model-value":!e.sell},[l(y,{onClick:o[1]||(o[1]=d=>B(n).go(-1))},{default:_(()=>[Q("Go Back")]),_:1})],8,J)]))}};var ae=x(K,[["__scopeId","data-v-8693a358"]]);export{ae as default};