import{u as F,a as Q}from"./use-size.6b9b6685.js";import{c as H,b as U,h as w,e as X}from"./render.e5faaf9e.js";import{c,h as v,g as T,x as Y,D as G,P as J,Q as W,R as Z,S as ee}from"./index.a7c5c2a5.js";const O="0 0 24 24",P=e=>e,A=e=>`ionicons ${e}`,V={"mdi-":e=>`mdi ${e}`,"icon-":P,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":A,"ion-ios":A,"ion-logo":A,"iconfont ":P,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},D={o_:"-outlined",r_:"-round",s_:"-sharp"},K={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},te=new RegExp("^("+Object.keys(V).join("|")+")"),re=new RegExp("^("+Object.keys(D).join("|")+")"),j=new RegExp("^("+Object.keys(K).join("|")+")"),ne=/^[Mm]\s?[-+]?\.?\d/,se=/^img:/,ae=/^svguse:/,oe=/^ion-/,ie=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var he=H({name:"QIcon",props:{...F,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=T(),r=Q(e),a=c(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),u=c(()=>{let o,s=e.name;if(s==="none"||!s)return{none:!0};if(n.iconMapFn!==null){const i=n.iconMapFn(s);if(i!==void 0)if(i.icon!==void 0){if(s=i.icon,s==="none"||!s)return{none:!0}}else return{cls:i.cls,content:i.content!==void 0?i.content:" "}}if(ne.test(s)===!0){const[i,p=O]=s.split("|");return{svg:!0,viewBox:p,nodes:i.split("&&").map(y=>{const[m,k,h]=y.split("@@");return v("path",{style:k,d:m,transform:h})})}}if(se.test(s)===!0)return{img:!0,src:s.substring(4)};if(ae.test(s)===!0){const[i,p=O]=s.split("|");return{svguse:!0,src:i.substring(7),viewBox:p}}let g=" ";const f=s.match(te);if(f!==null)o=V[f[1]](s);else if(ie.test(s)===!0)o=s;else if(oe.test(s)===!0)o=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${s.substring(3)}`;else if(j.test(s)===!0){o="notranslate material-symbols";const i=s.match(j);i!==null&&(s=s.substring(6),o+=K[i[1]]),g=s}else{o="notranslate material-icons";const i=s.match(re);i!==null&&(s=s.substring(2),o+=D[i[1]]),g=s}return{cls:o,content:g}});return()=>{const o={class:a.value,style:r.value,"aria-hidden":"true",role:"presentation"};return u.value.none===!0?v(e.tag,o,U(t.default)):u.value.img===!0?v("span",o,w(t.default,[v("img",{src:u.value.src})])):u.value.svg===!0?v("span",o,w(t.default,[v("svg",{viewBox:u.value.viewBox||"0 0 24 24"},u.value.nodes)])):u.value.svguse===!0?v("span",o,w(t.default,[v("svg",{viewBox:u.value.viewBox},[v("use",{"xlink:href":u.value.src})])])):(u.value.cls!==void 0&&(o.class+=" "+u.value.cls),v(e.tag,o,w(t.default,[u.value.content])))}}});function ye(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function z(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(n=>{z(e,n)}):e.add(t)}function ke(e){const t=new Set;return e.forEach(n=>{z(t,n)}),Array.from(t)}function ue(e){return e.appContext.config.globalProperties.$router!==void 0}function be(e){return e.isUnmounted===!0||e.isDeactivated===!0}function L(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function B(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function le(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(Array.isArray(a)===!1||a.length!==r.length||r.some((u,o)=>u!==a[o]))return!1}return!0}function M(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function ce(e,t){return Array.isArray(e)===!0?M(e,t):Array.isArray(t)===!0?M(t,e):e===t}function fe(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(ce(e[n],t[n])===!1)return!1;return!0}const $e={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function xe({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const n=T(),{props:r,proxy:a,emit:u}=n,o=ue(n),s=c(()=>r.disable!==!0&&r.href!==void 0),g=t===!0?c(()=>o===!0&&r.disable!==!0&&s.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""):c(()=>o===!0&&s.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""),f=c(()=>g.value===!0?q(r.to):null),i=c(()=>f.value!==null),p=c(()=>s.value===!0||i.value===!0),y=c(()=>r.type==="a"||p.value===!0?"a":r.tag||e||"div"),m=c(()=>s.value===!0?{href:r.href,target:r.target}:i.value===!0?{href:f.value.href,target:r.target}:{}),k=c(()=>{if(i.value===!1)return-1;const{matched:l}=f.value,{length:d}=l,b=l[d-1];if(b===void 0)return-1;const $=a.$route.matched;if($.length===0)return-1;const x=$.findIndex(B.bind(null,b));if(x>-1)return x;const C=L(l[d-2]);return d>1&&L(b)===C&&$[$.length-1].path!==C?$.findIndex(B.bind(null,l[d-2])):x}),h=c(()=>i.value===!0&&k.value!==-1&&le(a.$route.params,f.value.params)),E=c(()=>h.value===!0&&k.value===a.$route.matched.length-1&&fe(a.$route.params,f.value.params)),S=c(()=>i.value===!0?E.value===!0?` ${r.exactActiveClass} ${r.activeClass}`:r.exact===!0?"":h.value===!0?` ${r.activeClass}`:"":"");function q(l){try{return a.$router.resolve(l)}catch{}return null}function R(l,{returnRouterError:d,to:b=r.to,replace:$=r.replace}={}){if(r.disable===!0)return l.preventDefault(),Promise.resolve(!1);if(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey||l.button!==void 0&&l.button!==0||r.target==="_blank")return Promise.resolve(!1);l.preventDefault();const x=a.$router[$===!0?"replace":"push"](b);return d===!0?x:x.then(()=>{}).catch(()=>{})}function _(l){if(i.value===!0){const d=b=>R(l,b);u("click",l,d),l.defaultPrevented!==!0&&d()}else u("click",l)}return{hasRouterLink:i,hasHrefLink:s,hasLink:p,linkTag:y,resolvedLink:f,linkIsActive:h,linkIsExactActive:E,linkClass:S,linkAttrs:m,getLink:q,navigateToRouterLink:R,navigateOnClick:_}}function pe(e,t){const n=e.style;for(const r in t)n[r]=t[r]}function Re(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=Y(e);if(t)return t.$el||t}function _e(e,t){if(e==null||e.contains(t)===!0)return!0;for(let n=e.nextElementSibling;n!==null;n=n.nextElementSibling)if(n.contains(t))return!0;return!1}function de(e,t=250){let n=!1,r;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},t),r=e.apply(this,arguments)),r}}function I(e,t,n,r){n.modifiers.stop===!0&&Z(e);const a=n.modifiers.color;let u=n.modifiers.center;u=u===!0||r===!0;const o=document.createElement("span"),s=document.createElement("span"),g=ee(e),{left:f,top:i,width:p,height:y}=t.getBoundingClientRect(),m=Math.sqrt(p*p+y*y),k=m/2,h=`${(p-m)/2}px`,E=u?h:`${g.left-f-k}px`,S=`${(y-m)/2}px`,q=u?S:`${g.top-i-k}px`;s.className="q-ripple__inner",pe(s,{height:`${m}px`,width:`${m}px`,transform:`translate3d(${E},${q},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${a?" text-"+a:""}`,o.setAttribute("dir","ltr"),o.appendChild(s),t.appendChild(o);const R=()=>{o.remove(),clearTimeout(_)};n.abort.push(R);let _=setTimeout(()=>{s.classList.add("q-ripple__inner--enter"),s.style.transform=`translate3d(${h},${S},0) scale3d(1,1,1)`,s.style.opacity=.2,_=setTimeout(()=>{s.classList.remove("q-ripple__inner--enter"),s.classList.add("q-ripple__inner--leave"),s.style.opacity=0,_=setTimeout(()=>{o.remove(),n.abort.splice(n.abort.indexOf(R),1)},275)},250)},50)}function N(e,{modifiers:t,value:n,arg:r}){const a=Object.assign({},e.cfg.ripple,t,n);e.modifiers={early:a.early===!0,stop:a.stop===!0,center:a.center===!0,color:a.color||r,keyCodes:[].concat(a.keyCodes||13)}}var Ee=X({name:"ripple",beforeMount(e,t){const n=t.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const r={cfg:n,enabled:t.value!==!1,modifiers:{},abort:[],start(a){r.enabled===!0&&a.qSkipRipple!==!0&&a.type===(r.modifiers.early===!0?"pointerdown":"click")&&I(a,e,r,a.qKeyEvent===!0)},keystart:de(a=>{r.enabled===!0&&a.qSkipRipple!==!0&&G(a,r.modifiers.keyCodes)===!0&&a.type===`key${r.modifiers.early===!0?"down":"up"}`&&I(a,e,r,!0)},300)};N(r,t),e.__qripple=r,J(r,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const n=e.__qripple;n!==void 0&&(n.enabled=t.value!==!1,n.enabled===!0&&Object(t.value)===t.value&&N(n,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(n=>{n()}),W(t,"main"),delete e._qripple)}});export{he as Q,Ee as R,xe as a,ke as b,pe as c,ue as d,ye as e,_e as f,Re as g,$e as u,be as v};