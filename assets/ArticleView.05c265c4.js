import{Q as y,a as f}from"./QForm.fa683454.js";import{Q as w}from"./QBtn.42928f86.js";import{a1 as x,u as b,r as u,O as V,ad as S,ai as k,j as B,k as C,m as s,ac as i,d as l,l as _,p as D,aj as I,ak as N,ab as Q,a3 as q,a4 as j}from"./index.ed43af46.js";import"./use-key-composition.85e976d2.js";import"./Ripple.ff1a089e.js";import"./render.2a3052e7.js";import"./use-dark.67e2047a.js";import"./uid.42677368.js";const A=a=>(q("data-v-17334631"),a=a(),j(),a),L={id:"New"},M={class:"row"},T={class:"col-12"},H={class:"text-center title"},R={class:"col-12"},U={class:"text-center"},E={class:"text-center"},F={class:"col-8"},G=["src"],O=A(()=>s("hr",null,null,-1)),P=["innerHTML"],$={class:"col-12"},z=["model-value"],J={__name:"ArticleView",setup(a){const m=I(),n=N(),p=b(),{editCart:v}=p,g=u(!1),r=u(0),c={required(t){return!!t||"\u6B04\u4F4D\u5FC5\u586B"},number(t){return t>0||"\u6578\u91CF\u932F\u8AA4"}},e=V({_id:"",name:"",description:"",image:"",sell:!0,category:"",date:""}),h=()=>{!g.value||v({_id:e._id,quantity:r.value})};return(async()=>{try{const{data:t}=await S.get("/news/"+m.params.id);e._id=t.result._id,e.name=t.result.name,e.description=t.result.description,e.image=t.result.image,e.sell=t.result.sell,e.category=t.result.category,e.date=t.result.date,document.title="Dostoevsky | "+e.name}catch{k.exports.Swal.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u6587\u7AE0\u5931\u6557"}),n.go(-1)}})(),(t,o)=>(B(),C("div",L,[s("div",M,[s("div",T,[s("h4",H,i(e.name),1)]),s("div",R,[s("h6",U,"Post Date\uFF1A"+i(new Date(e.date).toLocaleDateString()),1),s("h6",E,"Category\uFF1A["+i(e.category)+"]",1)]),s("div",F,[s("img",{src:e.image},null,8,G)]),O,s("div",{class:"word",innerHTML:e.description},null,8,P),s("div",$,[l(y,{onSubmit:h},{default:_(()=>[l(f,{class:"none",modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=d=>r.value=d),modelModifiers:{number:!0},type:"number",label:"\u6578\u91CF",rules:[c.required,c.number]},null,8,["modelValue","rules"])]),_:1})])]),s("div",{class:"align-center justify-center text-center",persistent:"persistent","model-value":!e.sell},[l(w,{onClick:o[1]||(o[1]=d=>D(n).go(-1)),style:{"margin-bottom":"3rem"}},{default:_(()=>[Q("Go Back")]),_:1})],8,z)]))}};var ae=x(J,[["__scopeId","data-v-17334631"]]);export{ae as default};