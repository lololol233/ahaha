import{a1 as _,u as m,n as f,j as i,k as l,d as s,l as d,m as a,ac as n,p as h,ab as g,a3 as y,a4 as v,O as x,ad as S,ae as C,F as u,af as w,ag as Q,ah as k}from"./index.cdb24b33.js";import{Q as I}from"./Ripple.55575af3.js";import{Q as P}from"./QBtn.a5e0a354.js";import{Q as B}from"./QCardActions.08eba135.js";import{Q as $}from"./QCard.786bcaf2.js";import"./render.92d42912.js";import"./use-dark.de213629.js";const b=e=>(y("data-v-0c9677ed"),e=e(),v(),e),N={class:"q-pb-xl"},V=["src"],q=b(()=>a("div",{class:"label"},"more",-1)),A={class:"q-pa-md"},F={class:"text-h4"},j={class:"text-h6"},z={__name:"ProductCard",props:{_id:{type:String,default:""},name:{type:String,default:""},price:{type:Number,default:0},description:{type:String,default:""},image:{type:String,default:""},sell:{type:Boolean,default:!1},category:{type:String,default:""}},setup(e){const o=m(),{editCart:r}=o;return(c,t)=>{const p=f("router-link");return i(),l("div",N,[s($,{class:"card-product",flat:"",style:{width:"18rem",height:"31rem"}},{default:d(()=>[s(p,{class:"text-primary",to:"/products/"+e._id},{default:d(()=>[a("img",{class:"product-img",src:e.image,style:{width:"18rem",height:"20rem"}},null,8,V)]),_:1},8,["to"]),q,a("div",A,[a("div",F,n(e.name),1),a("div",j,"$"+n(e.price),1),s(B,null,{default:d(()=>[s(P,{color:"accent",onClick:t[0]||(t[0]=O=>h(r)({_id:e._id,quantity:1}))},{default:d(()=>[s(I,{name:"shopping_cart"}),g("Add Cart")]),_:1})]),_:1})])]),_:1})])}}};var D=_(z,[["__scopeId","data-v-0c9677ed"]]);const E=a("div",{class:"col-12"},[a("h3",{class:"title"},"Products")],-1),L={class:"row",style:{margin:"20px 150px"}},M={__name:"ItemsView",setup(e){const o=x([]);return(async()=>{var r,c;try{const{data:t}=await S.get("/products");o.push(...t.result)}catch(t){C.fire({icon:"error",title:"\u5931\u6557",text:((c=(r=t==null?void 0:t.response)==null?void 0:r.data)==null?void 0:c.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(r,c)=>(i(),l(u,null,[E,a("div",L,[(i(!0),l(u,null,w(o,t=>(i(),l("div",{class:"col-12 col-lg-3 col-md-4 col-sm-6",key:t._id},[s(D,Q(k(t)),null,16)]))),128))])],64))}};export{M as default};
