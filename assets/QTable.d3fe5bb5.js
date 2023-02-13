import{Q as De}from"./Ripple.805d1d16.js";import{c as M,b as le,d as dt,h as Me}from"./render.e5faaf9e.js";import{h as r,g as z,c as s,r as N,w as Q,a4 as vt,o as ft,M as gt,L as bt,l as mt,J as Te,$ as Se,an as $e,ao as St,I as Ve,ap as yt,ah as E}from"./index.a7c5c2a5.js";import{u as H,a as U}from"./use-dark.6b8c6f37.js";import{u as ht,a as qt,c as je,Q as be,b as _t}from"./QCheckbox.353d08ff.js";import{g as wt}from"./scroll.8c08f3b5.js";import{u as Pt,a as Ct}from"./use-size.6b9b6685.js";import{Q as ee}from"./QBtn.30a6edbd.js";import{u as kt,a as Rt,b as xt}from"./use-fullscreen.e21e7b60.js";var Bt=M({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:l,emit:n}){const v=z(),{proxy:{$q:i}}=v,g=u=>{n("click",u)};return()=>{if(e.props===void 0)return r("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:g},le(l.default));let u,d;const c=v.vnode.key;if(c){if(u=e.props.colsMap[c],u===void 0)return}else u=e.props.col;if(u.sortable===!0){const a=u.align==="right"?"unshift":"push";d=dt(l.default,[]),d[a](r(De,{class:u.__iconClass,name:i.iconSet.table.arrowUp}))}else d=le(l.default);const m={class:u.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:u.headerStyle,onClick:a=>{u.sortable===!0&&e.props.sort(u),g(a)}};return r("th",m,d)}}});const Tt={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},me={xs:2,sm:4,md:8,lg:16,xl:24};var $t=M({name:"QSeparator",props:{...H,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const l=z(),n=U(e,l.proxy.$q),v=s(()=>e.vertical===!0?"vertical":"horizontal"),i=s(()=>` q-separator--${v.value}`),g=s(()=>e.inset!==!1?`${i.value}-${Tt[e.inset]}`:""),u=s(()=>`q-separator${i.value}${g.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(n.value===!0?" q-separator--dark":"")),d=s(()=>{const c={};if(e.size!==void 0&&(c[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const m=e.spaced===!0?`${me.md}px`:e.spaced in me?`${me[e.spaced]}px`:e.spaced,a=e.vertical===!0?["Left","Right"]:["Top","Bottom"];c[`margin${a[0]}`]=c[`margin${a[1]}`]=m}return c});return()=>r("hr",{class:u.value,style:d.value,"aria-orientation":v.value})}}),Ot=M({name:"QList",props:{...H,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:l}){const n=z(),v=U(e,n.proxy.$q),i=s(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(v.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>r(e.tag,{class:i.value},le(l.default))}});const Lt=["horizontal","vertical","cell","none"];var Ft=M({name:"QMarkupTable",props:{...H,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>Lt.includes(e)}},setup(e,{slots:l}){const n=z(),v=U(e,n.proxy.$q),i=s(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(v.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>r("div",{class:i.value},[r("table",{class:"q-table"},le(l.default))])}});function Ae(e,l){return r("div",e,[r("table",{class:"q-table"},l)])}const Dt={list:Ot,table:Ft},Mt=["list","table","__qtable"];var Vt=M({name:"QVirtualScroll",props:{...ht,type:{type:String,default:"list",validator:e=>Mt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:l,attrs:n}){let v;const i=N(null),g=s(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:u,localResetVirtualScroll:d,padVirtualScroll:c,onVirtualScrollEvt:m}=qt({virtualScrollLength:g,getVirtualScrollTarget:P,getVirtualScrollEl:w}),a=s(()=>{if(g.value===0)return[];const $=(O,R)=>({index:u.value.from+R,item:O});return e.itemsFn===void 0?e.items.slice(u.value.from,u.value.to).map($):e.itemsFn(u.value.from,u.value.to-u.value.from).map($)}),y=s(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),_=s(()=>e.scrollTarget!==void 0?{}:{tabindex:0});Q(g,()=>{d()}),Q(()=>e.scrollTarget,()=>{h(),q()});function w(){return i.value.$el||i.value}function P(){return v}function q(){v=wt(w(),e.scrollTarget),v.addEventListener("scroll",m,Te.passive)}function h(){v!==void 0&&(v.removeEventListener("scroll",m,Te.passive),v=void 0)}function T(){let $=c(e.type==="list"?"div":"tbody",a.value.map(l.default));return l.before!==void 0&&($=l.before().concat($)),Me(l.after,$)}return vt(()=>{d()}),ft(()=>{q()}),gt(()=>{q()}),bt(()=>{h()}),mt(()=>{h()}),()=>{if(l.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?Ae({ref:i,class:"q-table__middle "+y.value},T()):r(Dt[e.type],{...n,ref:i,class:[n.class,y.value],..._.value},T)}}});const jt={xs:2,sm:4,md:6,lg:10,xl:14};function Oe(e,l,n){return{transform:l===!0?`translateX(${n.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var At=M({name:"QLinearProgress",props:{...H,...Pt,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:l}){const{proxy:n}=z(),v=U(e,n.$q),i=Ct(e,jt),g=s(()=>e.indeterminate===!0||e.query===!0),u=s(()=>e.reverse!==e.query),d=s(()=>({...i.value!==null?i.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),c=s(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),m=s(()=>Oe(e.buffer!==void 0?e.buffer:1,u.value,n.$q)),a=s(()=>`with${e.instantFeedback===!0?"out":""}-transition`),y=s(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${a.value} q-linear-progress__track--${v.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),_=s(()=>Oe(g.value===!0?1:e.value,u.value,n.$q)),w=s(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${a.value} q-linear-progress__model--${g.value===!0?"in":""}determinate`),P=s(()=>({width:`${e.value*100}%`})),q=s(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${a.value}`);return()=>{const h=[r("div",{class:y.value,style:m.value}),r("div",{class:w.value,style:_.value})];return e.stripe===!0&&g.value===!1&&h.push(r("div",{class:q.value,style:P.value})),r("div",{class:c.value,style:d.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},Me(l.default,h))}}});function Qt(e,l){return new Date(e)-new Date(l)}const zt={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Et(e,l,n,v){const i=s(()=>{const{sortBy:d}=l.value;return d&&n.value.find(c=>c.name===d)||null}),g=s(()=>e.sortMethod!==void 0?e.sortMethod:(d,c,m)=>{const a=n.value.find(w=>w.name===c);if(a===void 0||a.field===void 0)return d;const y=m===!0?-1:1,_=typeof a.field=="function"?w=>a.field(w):w=>w[a.field];return d.sort((w,P)=>{let q=_(w),h=_(P);return q==null?-1*y:h==null?1*y:a.sort!==void 0?a.sort(q,h,w,P)*y:Se(q)===!0&&Se(h)===!0?(q-h)*y:$e(q)===!0&&$e(h)===!0?Qt(q,h)*y:typeof q=="boolean"&&typeof h=="boolean"?(q-h)*y:([q,h]=[q,h].map(T=>(T+"").toLocaleString().toLowerCase()),q<h?-1*y:q===h?0:y)})});function u(d){let c=e.columnSortOrder;if(St(d)===!0)d.sortOrder&&(c=d.sortOrder),d=d.name;else{const y=n.value.find(_=>_.name===d);y!==void 0&&y.sortOrder&&(c=y.sortOrder)}let{sortBy:m,descending:a}=l.value;m!==d?(m=d,a=c==="da"):e.binaryStateSort===!0?a=!a:a===!0?c==="ad"?m=null:a=!1:c==="ad"?a=!0:m=null,v({sortBy:m,descending:a,page:1})}return{columnToSort:i,computedSortMethod:g,sort:u}}const Nt={filter:[String,Object],filterMethod:Function};function Ht(e,l){const n=s(()=>e.filterMethod!==void 0?e.filterMethod:(v,i,g,u)=>{const d=i?i.toLowerCase():"";return v.filter(c=>g.some(m=>{const a=u(m,c)+"";return(a==="undefined"||a==="null"?"":a.toLowerCase()).indexOf(d)!==-1}))});return Q(()=>e.filter,()=>{Ve(()=>{l({page:1},!0)})},{deep:!0}),{computedFilterMethod:n}}function Ut(e,l){for(const n in l)if(l[n]!==e[n])return!1;return!0}function Le(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const It={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function Kt(e,l){const{props:n,emit:v}=e,i=N(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:n.rowsPerPageOptions.length>0?n.rowsPerPageOptions[0]:5},n.pagination)),g=s(()=>{const a=n["onUpdate:pagination"]!==void 0?{...i.value,...n.pagination}:i.value;return Le(a)}),u=s(()=>g.value.rowsNumber!==void 0);function d(a){c({pagination:a,filter:n.filter})}function c(a={}){Ve(()=>{v("request",{pagination:a.pagination||g.value,filter:a.filter||n.filter,getCellValue:l})})}function m(a,y){const _=Le({...g.value,...a});if(Ut(g.value,_)===!0){u.value===!0&&y===!0&&d(_);return}if(u.value===!0){d(_);return}n.pagination!==void 0&&n["onUpdate:pagination"]!==void 0?v("update:pagination",_):i.value=_}return{innerPagination:i,computedPagination:g,isServerSide:u,requestServerInteraction:c,setPagination:m}}function Wt(e,l,n,v,i,g){const{props:u,emit:d,proxy:{$q:c}}=e,m=s(()=>v.value===!0?n.value.rowsNumber||0:g.value),a=s(()=>{const{page:R,rowsPerPage:x}=n.value;return(R-1)*x}),y=s(()=>{const{page:R,rowsPerPage:x}=n.value;return R*x}),_=s(()=>n.value.page===1),w=s(()=>n.value.rowsPerPage===0?1:Math.max(1,Math.ceil(m.value/n.value.rowsPerPage))),P=s(()=>y.value===0?!0:n.value.page>=w.value),q=s(()=>(u.rowsPerPageOptions.includes(l.value.rowsPerPage)?u.rowsPerPageOptions:[l.value.rowsPerPage].concat(u.rowsPerPageOptions)).map(x=>({label:x===0?c.lang.table.allRows:""+x,value:x})));Q(w,(R,x)=>{if(R===x)return;const I=n.value.page;R&&!I?i({page:1}):R<I&&i({page:R})});function h(){i({page:1})}function T(){const{page:R}=n.value;R>1&&i({page:R-1})}function $(){const{page:R,rowsPerPage:x}=n.value;y.value>0&&R*x<m.value&&i({page:R+1})}function O(){i({page:w.value})}return u["onUpdate:pagination"]!==void 0&&d("update:pagination",{...n.value}),{firstRowIndex:a,lastRowIndex:y,isFirstPage:_,isLastPage:P,pagesNumber:w,computedRowsPerPageOptions:q,computedRowsNumber:m,firstPage:h,prevPage:T,nextPage:$,lastPage:O}}const Gt={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},Jt=["update:selected","selection"];function Xt(e,l,n,v){const i=s(()=>{const P={};return e.selected.map(v.value).forEach(q=>{P[q]=!0}),P}),g=s(()=>e.selection!=="none"),u=s(()=>e.selection==="single"),d=s(()=>e.selection==="multiple"),c=s(()=>n.value.length>0&&n.value.every(P=>i.value[v.value(P)]===!0)),m=s(()=>c.value!==!0&&n.value.some(P=>i.value[v.value(P)]===!0)),a=s(()=>e.selected.length);function y(P){return i.value[P]===!0}function _(){l("update:selected",[])}function w(P,q,h,T){l("selection",{rows:q,added:h,keys:P,evt:T});const $=u.value===!0?h===!0?q:[]:h===!0?e.selected.concat(q):e.selected.filter(O=>P.includes(v.value(O))===!1);l("update:selected",$)}return{hasSelectionMode:g,singleSelection:u,multipleSelection:d,allRowsSelected:c,someRowsSelected:m,rowsSelectedNumber:a,isRowSelected:y,clearSelection:_,updateSelection:w}}function Fe(e){return Array.isArray(e)?e.slice():[]}const Yt={expanded:Array},Zt=["update:expanded"];function pt(e,l){const n=N(Fe(e.expanded));Q(()=>e.expanded,u=>{n.value=Fe(u)});function v(u){return n.value.includes(u)}function i(u){e.expanded!==void 0?l("update:expanded",u):n.value=u}function g(u,d){const c=n.value.slice(),m=c.indexOf(u);d===!0?m===-1&&(c.push(u),i(c)):m!==-1&&(c.splice(m,1),i(c))}return{isRowExpanded:v,setExpanded:i,updateExpanded:g}}const el={visibleColumns:Array};function tl(e,l,n){const v=s(()=>{if(e.columns!==void 0)return e.columns;const d=e.rows[0];return d!==void 0?Object.keys(d).map(c=>({name:c,label:c.toUpperCase(),field:c,align:Se(d[c])?"right":"left",sortable:!0})):[]}),i=s(()=>{const{sortBy:d,descending:c}=l.value;return(e.visibleColumns!==void 0?v.value.filter(a=>a.required===!0||e.visibleColumns.includes(a.name)===!0):v.value).map(a=>{const y=a.align||"right",_=`text-${y}`;return{...a,align:y,__iconClass:`q-table__sort-icon q-table__sort-icon--${y}`,__thClass:_+(a.headerClasses!==void 0?" "+a.headerClasses:"")+(a.sortable===!0?" sortable":"")+(a.name===d?` sorted ${c===!0?"sort-desc":""}`:""),__tdStyle:a.style!==void 0?typeof a.style!="function"?()=>a.style:a.style:()=>null,__tdClass:a.classes!==void 0?typeof a.classes!="function"?()=>_+" "+a.classes:w=>_+" "+a.classes(w):()=>_}})}),g=s(()=>{const d={};return i.value.forEach(c=>{d[c.name]=c}),d}),u=s(()=>e.tableColspan!==void 0?e.tableColspan:i.value.length+(n.value===!0?1:0));return{colList:v,computedCols:i,computedColsMap:g,computedColspan:u}}const te="q-table__bottom row items-center",Qe={};je.forEach(e=>{Qe[e]={}});var dl=M({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...Qe,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...H,...kt,...el,...Nt,...It,...Yt,...Gt,...zt},emits:["request","virtualScroll",...Rt,...Zt,...Jt],setup(e,{slots:l,emit:n}){const v=z(),{proxy:{$q:i}}=v,g=U(e,i),{inFullscreen:u,toggleFullscreen:d}=xt(),c=s(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),m=N(null),a=N(null),y=s(()=>e.grid!==!0&&e.virtualScroll===!0),_=s(()=>" q-table__card"+(g.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),w=s(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":_.value)+(g.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(u.value===!0?" fullscreen scroll":"")),P=s(()=>w.value+(e.loading===!0?" q-table--loading":""));Q(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+w.value,()=>{y.value===!0&&a.value!==null&&a.value.reset()});const{innerPagination:q,computedPagination:h,isServerSide:T,requestServerInteraction:$,setPagination:O}=Kt(v,j),{computedFilterMethod:R}=Ht(e,O),{isRowExpanded:x,setExpanded:I,updateExpanded:ze}=pt(e,n),ae=s(()=>{let t=e.rows;if(T.value===!0||t.length===0)return t;const{sortBy:o,descending:f}=h.value;return e.filter&&(t=R.value(t,e.filter,L.value,j)),Ie.value!==null&&(t=Ke.value(e.rows===t?t.slice():t,o,f)),t}),ye=s(()=>ae.value.length),D=s(()=>{let t=ae.value;if(T.value===!0)return t;const{rowsPerPage:o}=h.value;return o!==0&&(W.value===0&&e.rows!==t?t.length>G.value&&(t=t.slice(0,G.value)):t=t.slice(W.value,G.value)),t}),{hasSelectionMode:V,singleSelection:Ee,multipleSelection:he,allRowsSelected:Ne,someRowsSelected:qe,rowsSelectedNumber:ne,isRowSelected:re,clearSelection:He,updateSelection:K}=Xt(e,n,D,c),{colList:Ue,computedCols:L,computedColsMap:_e,computedColspan:we}=tl(e,h,V),{columnToSort:Ie,computedSortMethod:Ke,sort:oe}=Et(e,h,Ue,O),{firstRowIndex:W,lastRowIndex:G,isFirstPage:ie,isLastPage:se,pagesNumber:J,computedRowsPerPageOptions:We,computedRowsNumber:X,firstPage:ue,prevPage:ce,nextPage:de,lastPage:ve}=Wt(v,q,h,T,O,ye),Ge=s(()=>D.value.length===0),Je=s(()=>{const t={};return je.forEach(o=>{t[o]=e[o]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function Xe(){y.value===!0&&a.value.reset()}function Ye(){if(e.grid===!0)return ut();const t=e.hideHeader!==!0?xe:null;if(y.value===!0){const f=l["top-row"],b=l["bottom-row"],S={default:k=>Ce(k.item,l.body,k.index)};if(f!==void 0){const k=r("tbody",f({cols:L.value}));S.before=t===null?()=>k:()=>[t()].concat(k)}else t!==null&&(S.before=t);return b!==void 0&&(S.after=()=>r("tbody",b({cols:L.value}))),r(Vt,{ref:a,class:e.tableClass,style:e.tableStyle,...Je.value,scrollTarget:e.virtualScrollTarget,items:D.value,type:"__qtable",tableColspan:we.value,onVirtualScroll:pe},S)}const o=[et()];return t!==null&&o.unshift(t()),Ae({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},o)}function Ze(t,o){if(a.value!==null){a.value.scrollTo(t,o);return}t=parseInt(t,10);const f=m.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(f!==null){const b=m.value.querySelector(".q-table__middle.scroll"),S=f.offsetTop-e.virtualScrollStickySizeStart,k=S<b.scrollTop?"decrease":"increase";b.scrollTop=S,n("virtualScroll",{index:t,from:0,to:q.value.rowsPerPage-1,direction:k})}}function pe(t){n("virtualScroll",t)}function Pe(){return[r(At,{class:"q-table__linear-progress",color:e.color,dark:g.value,indeterminate:!0,trackColor:"transparent"})]}function Ce(t,o,f){const b=c.value(t),S=re(b);if(o!==void 0)return o(ke({key:b,row:t,pageIndex:f,__trClass:S?"selected":""}));const k=l["body-cell"],C=L.value.map(B=>{const Z=l[`body-cell-${B.name}`],p=Z!==void 0?Z:k;return p!==void 0?p(tt({key:b,row:t,pageIndex:f,col:B})):r("td",{class:B.__tdClass(t),style:B.__tdStyle(t)},j(B,t))});if(V.value===!0){const B=l["body-selection"],Z=B!==void 0?B(lt({key:b,row:t,pageIndex:f})):[r(be,{modelValue:S,color:e.color,dark:g.value,dense:e.dense,"onUpdate:modelValue":(p,ct)=>{K([b],[t],p,ct)}})];C.unshift(r("td",{class:"q-table--col-auto-width"},Z))}const F={key:b,class:{selected:S}};return e.onRowClick!==void 0&&(F.class["cursor-pointer"]=!0,F.onClick=B=>{n("RowClick",B,t,f)}),e.onRowDblclick!==void 0&&(F.class["cursor-pointer"]=!0,F.onDblclick=B=>{n("RowDblclick",B,t,f)}),e.onRowContextmenu!==void 0&&(F.class["cursor-pointer"]=!0,F.onContextmenu=B=>{n("RowContextmenu",B,t,f)}),r("tr",F,C)}function et(){const t=l.body,o=l["top-row"],f=l["bottom-row"];let b=D.value.map((S,k)=>Ce(S,t,k));return o!==void 0&&(b=o({cols:L.value}).concat(b)),f!==void 0&&(b=b.concat(f({cols:L.value}))),r("tbody",b)}function ke(t){return fe(t),t.cols=t.cols.map(o=>E({...o},"value",()=>j(o,t.row))),t}function tt(t){return fe(t),E(t,"value",()=>j(t.col,t.row)),t}function lt(t){return fe(t),t}function fe(t){Object.assign(t,{cols:L.value,colsMap:_e.value,sort:oe,rowIndex:W.value+t.pageIndex,color:e.color,dark:g.value,dense:e.dense}),V.value===!0&&E(t,"selected",()=>re(t.key),(o,f)=>{K([t.key],[t.row],o,f)}),E(t,"expand",()=>x(t.key),o=>{ze(t.key,o)})}function j(t,o){const f=typeof t.field=="function"?t.field(o):o[t.field];return t.format!==void 0?t.format(f,o):f}const A=s(()=>({pagination:h.value,pagesNumber:J.value,isFirstPage:ie.value,isLastPage:se.value,firstPage:ue,prevPage:ce,nextPage:de,lastPage:ve,inFullscreen:u.value,toggleFullscreen:d}));function at(){const t=l.top,o=l["top-left"],f=l["top-right"],b=l["top-selection"],S=V.value===!0&&b!==void 0&&ne.value>0,k="q-table__top relative-position row items-center";if(t!==void 0)return r("div",{class:k},[t(A.value)]);let C;if(S===!0?C=b(A.value).slice():(C=[],o!==void 0?C.push(r("div",{class:"q-table-control"},[o(A.value)])):e.title&&C.push(r("div",{class:"q-table__control"},[r("div",{class:["q-table__title",e.titleClass]},e.title)]))),f!==void 0&&(C.push(r("div",{class:"q-table__separator col"})),C.push(r("div",{class:"q-table__control"},[f(A.value)]))),C.length!==0)return r("div",{class:k},C)}const Re=s(()=>qe.value===!0?null:Ne.value);function xe(){const t=nt();return e.loading===!0&&l.loading===void 0&&t.push(r("tr",{class:"q-table__progress"},[r("th",{class:"relative-position",colspan:we.value},Pe())])),r("thead",t)}function nt(){const t=l.header,o=l["header-cell"];if(t!==void 0)return t(ge({header:!0})).slice();const f=L.value.map(b=>{const S=l[`header-cell-${b.name}`],k=S!==void 0?S:o,C=ge({col:b});return k!==void 0?k(C):r(Bt,{key:b.name,props:C},()=>b.label)});if(Ee.value===!0&&e.grid!==!0)f.unshift(r("th",{class:"q-table--col-auto-width"}," "));else if(he.value===!0){const b=l["header-selection"],S=b!==void 0?b(ge({})):[r(be,{color:e.color,modelValue:Re.value,dark:g.value,dense:e.dense,"onUpdate:modelValue":Be})];f.unshift(r("th",{class:"q-table--col-auto-width"},S))}return[r("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},f)]}function ge(t){return Object.assign(t,{cols:L.value,sort:oe,colsMap:_e.value,color:e.color,dark:g.value,dense:e.dense}),he.value===!0&&E(t,"selected",()=>Re.value,Be),t}function Be(t){qe.value===!0&&(t=!1),K(D.value.map(c.value),D.value,t)}const Y=s(()=>{const t=[e.iconFirstPage||i.iconSet.table.firstPage,e.iconPrevPage||i.iconSet.table.prevPage,e.iconNextPage||i.iconSet.table.nextPage,e.iconLastPage||i.iconSet.table.lastPage];return i.lang.rtl===!0?t.reverse():t});function rt(){if(e.hideBottom===!0)return;if(Ge.value===!0){if(e.hideNoData===!0)return;const f=e.loading===!0?e.loadingLabel||i.lang.table.loading:e.filter?e.noResultsLabel||i.lang.table.noResults:e.noDataLabel||i.lang.table.noData,b=l["no-data"],S=b!==void 0?[b({message:f,icon:i.iconSet.table.warning,filter:e.filter})]:[r(De,{class:"q-table__bottom-nodata-icon",name:i.iconSet.table.warning}),f];return r("div",{class:te+" q-table__bottom--nodata"},S)}const t=l.bottom;if(t!==void 0)return r("div",{class:te},[t(A.value)]);const o=e.hideSelectedBanner!==!0&&V.value===!0&&ne.value>0?[r("div",{class:"q-table__control"},[r("div",[(e.selectedRowsLabel||i.lang.table.selectedRecords)(ne.value)])])]:[];if(e.hidePagination!==!0)return r("div",{class:te+" justify-end"},it(o));if(o.length>0)return r("div",{class:te},o)}function ot(t){O({page:1,rowsPerPage:t.value})}function it(t){let o;const{rowsPerPage:f}=h.value,b=e.paginationLabel||i.lang.table.pagination,S=l.pagination,k=e.rowsPerPageOptions.length>1;if(t.push(r("div",{class:"q-table__separator col"})),k===!0&&t.push(r("div",{class:"q-table__control"},[r("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||i.lang.table.recordsPerPage]),r(_t,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:f,options:We.value,displayValue:f===0?i.lang.table.allRows:f,dark:g.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":ot})])),S!==void 0)o=S(A.value);else if(o=[r("span",f!==0?{class:"q-table__bottom-item"}:{},[f?b(W.value+1,Math.min(G.value,X.value),X.value):b(1,ye.value,X.value)])],f!==0&&J.value>1){const C={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(C.size="sm"),J.value>2&&o.push(r(ee,{key:"pgFirst",...C,icon:Y.value[0],disable:ie.value,onClick:ue})),o.push(r(ee,{key:"pgPrev",...C,icon:Y.value[1],disable:ie.value,onClick:ce}),r(ee,{key:"pgNext",...C,icon:Y.value[2],disable:se.value,onClick:de})),J.value>2&&o.push(r(ee,{key:"pgLast",...C,icon:Y.value[3],disable:se.value,onClick:ve}))}return t.push(r("div",{class:"q-table__control"},o)),t}function st(){const t=e.gridHeader===!0?[r("table",{class:"q-table"},[xe()])]:e.loading===!0&&l.loading===void 0?Pe():void 0;return r("div",{class:"q-table__middle"},t)}function ut(){const t=l.item!==void 0?l.item:o=>{const f=o.cols.map(S=>r("div",{class:"q-table__grid-item-row"},[r("div",{class:"q-table__grid-item-title"},[S.label]),r("div",{class:"q-table__grid-item-value"},[S.value])]));if(V.value===!0){const S=l["body-selection"],k=S!==void 0?S(o):[r(be,{modelValue:o.selected,color:e.color,dark:g.value,dense:e.dense,"onUpdate:modelValue":(C,F)=>{K([o.key],[o.row],C,F)}})];f.unshift(r("div",{class:"q-table__grid-item-row"},k),r($t,{dark:g.value}))}const b={class:["q-table__grid-item-card"+_.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(b.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(b.onClick=S=>{n("RowClick",S,o.row,o.pageIndex)}),e.onRowDblclick!==void 0&&(b.onDblclick=S=>{n("RowDblclick",S,o.row,o.pageIndex)})),r("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(o.selected===!0?" q-table__grid-item--selected":"")},[r("div",b,f)])};return r("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},D.value.map((o,f)=>t(ke({key:c.value(o),row:o,pageIndex:f}))))}return Object.assign(v.proxy,{requestServerInteraction:$,setPagination:O,firstPage:ue,prevPage:ce,nextPage:de,lastPage:ve,isRowSelected:re,clearSelection:He,isRowExpanded:x,setExpanded:I,sort:oe,resetVirtualScroll:Xe,scrollTo:Ze,getCellValue:j}),yt(v.proxy,{filteredSortedRows:()=>ae.value,computedRows:()=>D.value,computedRowsNumber:()=>X.value}),()=>{const t=[at()],o={ref:m,class:P.value};return e.grid===!0?t.push(st()):Object.assign(o,{class:[o.class,e.cardClass],style:e.cardStyle}),t.push(Ye(),rt()),e.loading===!0&&l.loading!==void 0&&t.push(l.loading()),r("div",o,t)}}});export{dl as Q};