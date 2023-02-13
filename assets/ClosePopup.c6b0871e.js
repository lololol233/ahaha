import{e as M,h as X,g as Y,f as G}from"./QCheckbox.75ad47f0.js";import{u as H,a as J,b as Z,d as ee,c as te,e as ne,f as R}from"./use-key-composition.e8bfb011.js";import{r as O,c as d,g as Q,R as le,C as W,W as ie,h as F,ah as ae,a2 as ue,D as re}from"./index.739fefb5.js";import{u as se}from"./QForm.440978a6.js";import{c as oe,e as ce}from"./render.bb05bb94.js";function x(e,a,o,v){const u=[];return e.forEach(c=>{v(c)===!0?u.push(c):a.push({failedPropValidation:o,file:c})}),u}function j(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),W(e)}const fe={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},de=["rejected"];function me({editable:e,dnd:a,getFileInput:o,addFilesToQueue:v}){const{props:u,emit:c,proxy:y}=Q(),b=O(null),_=d(()=>u.accept!==void 0?u.accept.split(",").map(t=>(t=t.trim(),t==="*"?"*/":(t.endsWith("/*")&&(t=t.slice(0,t.length-1)),t.toUpperCase()))):null),z=d(()=>parseInt(u.maxFiles,10)),V=d(()=>parseInt(u.maxTotalSize,10));function P(t){if(e.value)if(t!==Object(t)&&(t={target:null}),t.target!==null&&t.target.matches('input[type="file"]')===!0)t.clientX===0&&t.clientY===0&&le(t);else{const p=o();p&&p!==t.target&&p.click(t)}}function k(t){e.value&&t&&v(null,t)}function A(t,p,C,S){let l=Array.from(p||t.target.files);const m=[],h=()=>{m.length>0&&c("rejected",m)};if(u.accept!==void 0&&_.value.indexOf("*/")===-1&&(l=x(l,m,"accept",i=>_.value.some(s=>i.type.toUpperCase().startsWith(s)||i.name.toUpperCase().endsWith(s))),l.length===0))return h();if(u.maxFileSize!==void 0){const i=parseInt(u.maxFileSize,10);if(l=x(l,m,"max-file-size",s=>s.size<=i),l.length===0)return h()}if(u.multiple!==!0&&l.length>0&&(l=[l[0]]),l.forEach(i=>{i.__key=i.webkitRelativePath+i.lastModified+i.name+i.size}),S===!0){const i=C.map(s=>s.__key);l=x(l,m,"duplicate",s=>i.includes(s.__key)===!1)}if(l.length===0)return h();if(u.maxTotalSize!==void 0){let i=S===!0?C.reduce((s,E)=>s+E.size,0):0;if(l=x(l,m,"max-total-size",s=>(i+=s.size,i<=V.value)),l.length===0)return h()}if(typeof u.filter=="function"){const i=u.filter(l);l=x(l,m,"filter",s=>i.includes(s))}if(u.maxFiles!==void 0){let i=S===!0?C.length:0;if(l=x(l,m,"max-files",()=>(i++,i<=z.value)),l.length===0)return h()}if(h(),l.length>0)return l}function I(t){j(t),a.value!==!0&&(a.value=!0)}function r(t){W(t),(t.relatedTarget!==null||ie.is.safari!==!0?t.relatedTarget!==b.value:document.elementsFromPoint(t.clientX,t.clientY).includes(b.value)===!1)===!0&&(a.value=!1)}function D(t){j(t);const p=t.dataTransfer.files;p.length>0&&v(null,p),a.value=!1}function q(t){if(a.value===!0)return F("div",{ref:b,class:`q-${t}__dnd absolute-full`,onDragenter:j,onDragover:j,onDragleave:r,onDrop:D})}return Object.assign(y,{pickFiles:P,addFiles:k}),{pickFiles:P,addFiles:k,onDragover:I,onDragleave:r,processFiles:A,getDndNode:q,maxFilesNumber:z,maxTotalSizeNumber:V}}var Fe=oe({name:"QFile",inheritAttrs:!1,props:{...H,...J,...fe,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Z,...de],setup(e,{slots:a,emit:o,attrs:v}){const{proxy:u}=Q(),c=ee(),y=O(null),b=O(!1),_=te(e),{pickFiles:z,onDragover:V,onDragleave:P,processFiles:k,getDndNode:A}=me({editable:c.editable,dnd:b,getFileInput:L,addFilesToQueue:K}),I=se(e),r=d(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),D=d(()=>R(r.value)),q=d(()=>r.value.map(n=>n.name).join(", ")),t=d(()=>X(r.value.reduce((n,f)=>n+f.size,0))),p=d(()=>({totalSize:t.value,filesNumber:r.value.length,maxFiles:e.maxFiles})),C=d(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:_.value,...v,id:c.targetUid.value,disabled:c.editable.value!==!0})),S=d(()=>"q-file q-field--auto-height"+(b.value===!0?" q-file--dnd":"")),l=d(()=>e.multiple===!0&&e.append===!0);function m(n){const f=r.value.slice();f.splice(n,1),i(f)}function h(n){const f=r.value.findIndex(n);f>-1&&m(f)}function i(n){o("update:modelValue",e.multiple===!0?n:n[0])}function s(n){n.keyCode===13&&ue(n)}function E(n){(n.keyCode===13||n.keyCode===32)&&z(n)}function L(){return y.value}function K(n,f){const g=k(n,f,r.value,l.value),T=L();T!=null&&(T.value=""),g!==void 0&&((e.multiple===!0?e.modelValue&&g.every(B=>r.value.includes(B)):e.modelValue===g[0])||i(l.value===!0?r.value.concat(g):g))}function N(){return[F("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function $(){if(a.file!==void 0)return r.value.length===0?N():r.value.map((f,g)=>a.file({index:g,file:f,ref:this}));if(a.selected!==void 0)return r.value.length===0?N():a.selected({files:r.value,ref:this});if(e.useChips===!0)return r.value.length===0?N():r.value.map((f,g)=>F(M,{key:"file-"+g,removable:c.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{m(g)}},()=>F("span",{class:"ellipsis",textContent:f.name})));const n=e.displayValue!==void 0?e.displayValue:q.value;return n.length>0?[F("div",{class:e.inputClass,style:e.inputStyle,textContent:n})]:N()}function w(){const n={ref:y,...C.value,...I.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:K};return e.multiple===!0&&(n.multiple=!0),F("input",n)}return Object.assign(c,{fieldClass:S,emitValue:i,hasValue:D,inputRef:y,innerValue:r,floatingLabel:d(()=>D.value===!0||R(e.displayValue)),computedCounter:d(()=>{if(e.counterLabel!==void 0)return e.counterLabel(p.value);const n=e.maxFiles;return`${r.value.length}${n!==void 0?" / "+n:""} (${t.value})`}),getControlChild:()=>A("file"),getControl:()=>{const n={ref:c.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return c.editable.value===!0&&Object.assign(n,{onDragover:V,onDragleave:P,onKeydown:s,onKeyup:E}),F("div",n,[w()].concat($()))}}),Object.assign(u,{removeAtIndex:m,removeFile:h,getNativeElement:()=>y.value}),ae(u,"nativeEl",()=>y.value),ne(c)}});function U(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const a=parseInt(e,10);return isNaN(a)?0:a}var be=ce({name:"close-popup",beforeMount(e,{value:a}){const o={depth:U(a),handler(v){o.depth!==0&&setTimeout(()=>{const u=Y(e);u!==void 0&&G(u,v,o.depth)})},handlerKey(v){re(v,13)===!0&&o.handler(v)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:a,oldValue:o}){a!==o&&(e.__qclosepopup.depth=U(a))},beforeUnmount(e){const a=e.__qclosepopup;e.removeEventListener("click",a.handler),e.removeEventListener("keyup",a.handlerKey),delete e.__qclosepopup}});export{be as C,Fe as Q};
