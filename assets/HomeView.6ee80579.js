import{e as J,b as W,c as Z,f as ee,h as te}from"./render.bb05bb94.js";import{W as B,H as ne,X as ae,P as M,Y as F,S as X,C as O,Q,r as L,c as d,w as U,g as G,I as oe,h as f,Z as ie,_ as re,o as le,l as ue,$ as se,a0 as ce,n as ve,a1 as de,d as V,q as fe}from"./index.739fefb5.js";import{c as me,u as pe,a as ge,b as he}from"./use-fullscreen.1c541a60.js";import{b as _e}from"./Ripple.b8857d57.js";import{Q as j}from"./QBtn.7faca946.js";import{u as ye,a as xe}from"./use-dark.51c8344e.js";import"./use-size.20ba4e13.js";import"./QSpinner.adb6de04.js";const H={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},be=Object.keys(H);H.all=!0;function Y(e){const n={};for(const r of be)e[r]===!0&&(n[r]=!0);return Object.keys(n).length===0?H:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}function K(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function Ce(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((r,m)=>{const o=parseFloat(r);o&&(n[m]=o)}),n}var Pe=J({name:"touch-swipe",beforeMount(e,{value:n,arg:r,modifiers:m}){if(m.mouse!==!0&&B.has.touch!==!0)return;const o=m.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:Ce(r),direction:Y(m),noop:ne,mouseStart(i){K(i,t)&&ae(i)&&(M(t,"temp",[[document,"mousemove","move",`notPassive${o}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(i,!0))},touchStart(i){if(K(i,t)){const v=i.target;M(t,"temp",[[v,"touchmove","move","notPassiveCapture"],[v,"touchcancel","end","notPassiveCapture"],[v,"touchend","end","notPassiveCapture"]]),t.start(i)}},start(i,v){B.is.firefox===!0&&F(e,!0);const h=X(i);t.event={x:h.left,y:h.top,time:Date.now(),mouse:v===!0,dir:!1}},move(i){if(t.event===void 0)return;if(t.event.dir!==!1){O(i);return}const v=Date.now()-t.event.time;if(v===0)return;const h=X(i),_=h.left-t.event.x,u=Math.abs(_),y=h.top-t.event.y,s=Math.abs(y);if(t.event.mouse!==!0){if(u<t.sensitivity[1]&&s<t.sensitivity[1]){t.end(i);return}}else if(u<t.sensitivity[2]&&s<t.sensitivity[2])return;const p=u/v,x=s/v;t.direction.vertical===!0&&u<s&&u<100&&x>t.sensitivity[0]&&(t.event.dir=y<0?"up":"down"),t.direction.horizontal===!0&&u>s&&s<100&&p>t.sensitivity[0]&&(t.event.dir=_<0?"left":"right"),t.direction.up===!0&&u<s&&y<0&&u<100&&x>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&u<s&&y>0&&u<100&&x>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&u>s&&_<0&&s<100&&p>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&u>s&&_>0&&s<100&&p>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(O(i),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),me(),t.styleCleanup=S=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const b=()=>{document.body.classList.remove("no-pointer-events--children")};S===!0?setTimeout(b,50):b()}),t.handler({evt:i,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:v,distance:{x:u,y:s}})):t.end(i)},end(i){t.event!==void 0&&(Q(t,"temp"),B.is.firefox===!0&&F(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),i!==void 0&&t.event.dir!==!1&&O(i),t.event=void 0)}};if(e.__qtouchswipe=t,m.mouse===!0){const i=m.mouseCapture===!0||m.mousecapture===!0?"Capture":"";M(t,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}B.has.touch===!0&&M(t,"main",[[e,"touchstart","touchStart",`passive${m.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const r=e.__qtouchswipe;r!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&r.end(),r.handler=n.value),r.direction=Y(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(Q(n,"main"),Q(n,"temp"),B.is.firefox===!0&&F(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function qe(){const e=new Map;return{getCache:function(n,r){return e[n]===void 0?e[n]=r:e[n]},getCacheWithFn:function(n,r){return e[n]===void 0?e[n]=r():e[n]}}}const we={name:{required:!0},disable:Boolean},R={setup(e,{slots:n}){return()=>f("div",{class:"q-panel scroll",role:"tabpanel"},W(n.default))}},Se={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},ke=["update:modelValue","beforeTransition","transition"];function Te(){const{props:e,emit:n,proxy:r}=G(),{getCacheWithFn:m}=qe();let o,t;const i=L(null),v=L(null);function h(a){const l=e.vertical===!0?"up":"left";C((r.$q.lang.rtl===!0?-1:1)*(a.direction===l?1:-1))}const _=d(()=>[[Pe,h,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),u=d(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),y=d(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),s=d(()=>`--q-transition-duration: ${e.transitionDuration}ms`),p=d(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),x=d(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),S=d(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);U(()=>e.modelValue,(a,l)=>{const g=P(a)===!0?I(a):-1;t!==!0&&k(g===-1?0:g<I(l)?-1:1),i.value!==g&&(i.value=g,n("beforeTransition",a,l),oe(()=>{n("transition",a,l)}))});function b(){C(1)}function N(){C(-1)}function T(a){n("update:modelValue",a)}function P(a){return a!=null&&a!==""}function I(a){return o.findIndex(l=>l.props.name===a&&l.props.disable!==""&&l.props.disable!==!0)}function D(){return o.filter(a=>a.props.disable!==""&&a.props.disable!==!0)}function k(a){const l=a!==0&&e.animated===!0&&i.value!==-1?"q-transition--"+(a===-1?u.value:y.value):null;v.value!==l&&(v.value=l)}function C(a,l=i.value){let g=l+a;for(;g>-1&&g<o.length;){const w=o[g];if(w!==void 0&&w.props.disable!==""&&w.props.disable!==!0){k(a),t=!0,n("update:modelValue",w.props.name),setTimeout(()=>{t=!1});return}g+=a}e.infinite===!0&&o.length>0&&l!==-1&&l!==o.length&&C(a,a===-1?o.length:-1)}function $(){const a=I(e.modelValue);return i.value!==a&&(i.value=a),!0}function E(){const a=P(e.modelValue)===!0&&$()&&o[i.value];return e.keepAlive===!0?[f(re,x.value,[f(S.value===!0?m(p.value,()=>({...R,name:p.value})):R,{key:p.value,style:s.value},()=>a)])]:[f("div",{class:"q-panel scroll",style:s.value,key:p.value,role:"tabpanel"},[a])]}function c(){if(o.length!==0)return e.animated===!0?[f(ie,{name:v.value},E)]:E()}function q(a){return o=_e(W(a.default,[])).filter(l=>l.props!==null&&l.props.slot===void 0&&P(l.props.name)===!0),o.length}function A(){return o}return Object.assign(r,{next:b,previous:N,goTo:T}),{panelIndex:i,panelDirectives:_,updatePanelsList:q,updatePanelIndex:$,getPanelContent:c,getEnabledPanels:D,getPanels:A,isValidPanelName:P,keepAliveProps:x,needsUniqueKeepAliveWrapper:S,goToPanelByOffset:C,goToPanel:T,nextPanel:b,previousPanel:N}}var z=Z({name:"QCarouselSlide",props:{...we,imgSrc:String},setup(e,{slots:n}){const r=d(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>f("div",{class:"q-carousel__slide",style:r.value},W(n.default))}});const Ie=["top","right","bottom","left"],$e=["regular","flat","outline","push","unelevated"];var Ae=Z({name:"QCarousel",props:{...ye,...Se,...pe,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>$e.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Ie.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...ge,...ke],setup(e,{slots:n}){const{proxy:{$q:r}}=G(),m=xe(e,r);let o=null,t;const{updatePanelsList:i,getPanelContent:v,panelDirectives:h,goToPanel:_,previousPanel:u,nextPanel:y,getEnabledPanels:s,panelIndex:p}=Te(),{inFullscreen:x}=he(),S=d(()=>x.value!==!0&&e.height!==void 0?{height:e.height}:{}),b=d(()=>e.vertical===!0?"vertical":"horizontal"),N=d(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(x.value===!0?" fullscreen":"")+(m.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${b.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${D.value}`:"")),T=d(()=>{const c=[e.prevIcon||r.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||r.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&r.lang.rtl===!0?c.reverse():c}),P=d(()=>e.navigationIcon||r.iconSet.carousel.navigationIcon),I=d(()=>e.navigationActiveIcon||P.value),D=d(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),k=d(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));U(()=>e.modelValue,()=>{e.autoplay&&C()}),U(()=>e.autoplay,c=>{c?C():o!==null&&(clearTimeout(o),o=null)});function C(){const c=se(e.autoplay)===!0?Math.abs(e.autoplay):5e3;o!==null&&clearTimeout(o),o=setTimeout(()=>{o=null,c>=0?y():u()},c)}le(()=>{e.autoplay&&C()}),ue(()=>{o!==null&&clearTimeout(o)});function $(c,q){return f("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${c} q-carousel__navigation--${D.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[f("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},s().map(q))])}function E(){const c=[];if(e.navigation===!0){const q=n["navigation-icon"]!==void 0?n["navigation-icon"]:a=>f(j,{key:"nav"+a.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${a.active===!0?"":"in"}active`,...a.btnProps,onClick:a.onClick}),A=t-1;c.push($("buttons",(a,l)=>{const g=a.props.name,w=p.value===l;return q({index:l,maxIndex:A,name:g,active:w,btnProps:{icon:w===!0?I.value:P.value,size:"sm",...k.value},onClick:()=>{_(g)}})}))}else if(e.thumbnails===!0){const q=e.controlColor!==void 0?` text-${e.controlColor}`:"";c.push($("thumbnails",A=>{const a=A.props;return f("img",{key:"tmb#"+a.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${a.name===e.modelValue?"":"in"}active`+q,src:a.imgSrc||a["img-src"],onClick:()=>{_(a.name)}})}))}return e.arrows===!0&&p.value>=0&&((e.infinite===!0||p.value>0)&&c.push(f("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${b.value} absolute flex flex-center`},[f(j,{icon:T.value[0],...k.value,onClick:u})])),(e.infinite===!0||p.value<t-1)&&c.push(f("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${b.value} absolute flex flex-center`},[f(j,{icon:T.value[1],...k.value,onClick:y})]))),te(n.control,c)}return()=>(t=i(n),f("div",{class:N.value,style:S.value},[ee("div",{class:"q-carousel__slides-container"},v(),"sl-cont",e.swipeable,()=>h.value)].concat(E())))}}),Be="/quasar-test/assets/Dosto1.b11ef9dd.png";const Ve={class:"q-pa-md"},Ne={__name:"HomeView",setup(e){const n=L(1),r=L(!0);return(m,o)=>(ve(),de("div",Ve,[V(Ae,{animated:"",modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=t=>n.value=t),navigation:"",infinite:"",autoplay:r.value,arrows:"","transition-prev":"slide-right","transition-next":"slide-left",height:"700px",margin:"0",onMouseenter:o[1]||(o[1]=t=>r.value=!1),onMouseleave:o[2]||(o[2]=t=>r.value=!0)},{default:fe(()=>[V(z,{name:1,"img-src":Be}),V(z,{name:2,"img-src":"https://cdn.quasar.dev/img/parallax1.jpg"}),V(z,{name:3,"img-src":"https://cdn.quasar.dev/img/parallax2.jpg"}),V(z,{name:4,"img-src":"https://cdn.quasar.dev/img/quasar.jpg"})]),_:1},8,["modelValue","autoplay"])]))}};var je=ce(Ne,[["__scopeId","data-v-b04b37a2"]]);export{je as default};
