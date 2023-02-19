import{E as Le,c as g,h as c,r as $,w as V,o as Se,g as Z,S as ue,v as re,R as de,Q as fe,Y as Ee,z as oe,B as ke,a5 as se,G as Ae,V as Ne,al as De,A as $e}from"./index.8dc0f8c9.js";import{c as we,Q as J,g as He}from"./QBtn.35f55ffd.js";import{Q as Te}from"./Ripple.072ebf4f.js";import{c as ee,a as ie,d as je}from"./render.8bc8b5bf.js";import{u as xe,e as Re,f as Ie,g as Me,v as he,h as Qe,i as Ue,j as Ke,k as We,l as Ge,m as Xe,n as Ye,r as me,s as Je,p as ge,o as Ve,q as ve,t as Ze,w as et,x as tt,y as nt,z as ot}from"./QTable.c6fd4c14.js";import{u as it}from"./uid.42677368.js";import{u as lt,a as at,g as rt}from"./scroll.fb76fc53.js";import{c as pe,u as st,a as ut,b as ct}from"./use-fullscreen.57fc9a83.js";import{u as dt,a as ft}from"./use-dark.e61fbf21.js";import{k as ht,g as mt,u as gt,a as vt,b as pt,d as yt,c as bt,e as Ct,f as ye}from"./use-key-composition.279c314e.js";import{u as St}from"./QForm.bed6012b.js";function Pe(e,t){if(t&&e===t)return null;const n=e.nodeName.toLowerCase();if(["div","li","ul","ol","blockquote"].includes(n)===!0)return e;const i=window.getComputedStyle?window.getComputedStyle(e):e.currentStyle,l=i.display;return l==="block"||l==="table"?e:Pe(e.parentNode)}function le(e,t,n){return!e||e===document.body?!1:n===!0&&e===t||(t===document?document.body:t).contains(e.parentNode)}function qe(e,t,n){if(n||(n=document.createRange(),n.selectNode(e),n.setStart(e,0)),t.count===0)n.setEnd(e,t.count);else if(t.count>0)if(e.nodeType===Node.TEXT_NODE)e.textContent.length<t.count?t.count-=e.textContent.length:(n.setEnd(e,t.count),t.count=0);else for(let i=0;t.count!==0&&i<e.childNodes.length;i++)n=qe(e.childNodes[i],t,n);return n}const kt=/^https?:\/\//;class wt{constructor(t,n){this.el=t,this.eVm=n,this._range=null}get selection(){if(this.el){const t=document.getSelection();if(le(t.anchorNode,this.el,!0)&&le(t.focusNode,this.el,!0))return t}return null}get hasSelection(){return this.selection!==null?this.selection.toString().length>0:!1}get range(){const t=this.selection;return t!==null&&t.rangeCount?t.getRangeAt(0):this._range}get parent(){const t=this.range;if(t!==null){const n=t.startContainer;return n.nodeType===document.ELEMENT_NODE?n:n.parentNode}return null}get blockParent(){const t=this.parent;return t!==null?Pe(t,this.el):null}save(t=this.range){t!==null&&(this._range=t)}restore(t=this._range){const n=document.createRange(),i=document.getSelection();t!==null?(n.setStart(t.startContainer,t.startOffset),n.setEnd(t.endContainer,t.endOffset),i.removeAllRanges(),i.addRange(n)):(i.selectAllChildren(this.el),i.collapseToEnd())}savePosition(){let t=-1,n;const i=document.getSelection(),l=this.el.parentNode;if(i.focusNode&&le(i.focusNode,l))for(n=i.focusNode,t=i.focusOffset;n&&n!==l;)n!==this.el&&n.previousSibling?(n=n.previousSibling,t+=n.textContent.length):n=n.parentNode;this.savedPos=t}restorePosition(t=0){if(this.savedPos>0&&this.savedPos<t){const n=window.getSelection(),i=qe(this.el,{count:this.savedPos});i&&(i.collapse(!1),n.removeAllRanges(),n.addRange(i))}}hasParent(t,n){const i=n?this.parent:this.blockParent;return i!==null?i.nodeName.toLowerCase()===t.toLowerCase():!1}hasParents(t,n,i=this.parent){return i===null?!1:t.includes(i.nodeName.toLowerCase())===!0?!0:n===!0?this.hasParents(t,n,i.parentNode):!1}is(t,n){if(this.selection===null)return!1;switch(t){case"formatBlock":return n==="DIV"&&this.parent===this.el||this.hasParent(n,n==="PRE");case"link":return this.hasParent("A",!0);case"fontSize":return document.queryCommandValue(t)===n;case"fontName":const i=document.queryCommandValue(t);return i===`"${n}"`||i===n;case"fullscreen":return this.eVm.inFullscreen.value;case"viewsource":return this.eVm.isViewingSource.value;case void 0:return!1;default:const l=document.queryCommandState(t);return n!==void 0?l===n:l}}getParentAttribute(t){return this.parent!==null?this.parent.getAttribute(t):null}can(t){if(t==="outdent")return this.hasParents(["blockquote","li"],!0);if(t==="indent")return this.hasParents(["li"],!0);if(t==="link")return this.selection!==null||this.is("link")}apply(t,n,i=Le){if(t==="formatBlock")["BLOCKQUOTE","H1","H2","H3","H4","H5","H6"].includes(n)&&this.is(t,n)&&(t="outdent",n=null),n==="PRE"&&this.is(t,"PRE")&&(n="P");else if(t==="print"){i();const l=window.open();l.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `),l.print(),l.close();return}else if(t==="link"){const l=this.getParentAttribute("href");if(l===null){const r=this.selectWord(this.selection),s=r?r.toString():"";if(!s.length&&(!this.range||!this.range.cloneContents().querySelector("img")))return;this.eVm.editLinkUrl.value=kt.test(s)?s:"https://",document.execCommand("createLink",!1,this.eVm.editLinkUrl.value),this.save(r.getRangeAt(0))}else this.eVm.editLinkUrl.value=l,this.range.selectNodeContents(this.parent),this.save();return}else if(t==="fullscreen"){this.eVm.toggleFullscreen(),i();return}else if(t==="viewsource"){this.eVm.isViewingSource.value=this.eVm.isViewingSource.value===!1,this.eVm.setContent(this.eVm.props.modelValue),i();return}document.execCommand(t,!1,n),i()}selectWord(t){if(t===null||t.isCollapsed!==!0||t.modify===void 0)return t;const n=document.createRange();n.setStart(t.anchorNode,t.anchorOffset),n.setEnd(t.focusNode,t.focusOffset);const i=n.collapsed?["backward","forward"]:["forward","backward"];n.detach();const l=t.focusNode,r=t.focusOffset;return t.collapse(t.anchorNode,t.anchorOffset),t.modify("move",i[0],"character"),t.modify("move",i[1],"word"),t.extend(l,r),t.modify("extend",i[1],"character"),t.modify("extend",i[0],"word"),t}}var Tt=ee({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:t}){const n=g(()=>{const i=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(l=>e[l]===!0).map(l=>`q-btn-group--${l}`).join(" ");return`q-btn-group row no-wrap${i.length>0?" "+i:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>c("div",{class:n.value},ie(t.default))}});const xt=Object.keys(we),Pt=e=>xt.reduce((t,n)=>{const i=e[n];return i!==void 0&&(t[n]=i),t},{});var qt=ee({name:"QBtnDropdown",props:{...we,...xe,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:t,emit:n}){const{proxy:i}=Z(),l=$(e.modelValue),r=$(null),s=it(),f=g(()=>{const d={"aria-expanded":l.value===!0?"true":"false","aria-haspopup":"true","aria-controls":s,"aria-label":e.toggleAriaLabel||i.$q.lang.label[l.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(d["aria-disabled"]="true"),d}),k=g(()=>"q-btn-dropdown__arrow"+(l.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),z=g(()=>He(e)),w=g(()=>Pt(e));V(()=>e.modelValue,d=>{r.value!==null&&r.value[d?"show":"hide"]()}),V(()=>e.split,T);function B(d){l.value=!0,n("beforeShow",d)}function C(d){n("show",d),n("update:modelValue",!0)}function S(d){l.value=!1,n("beforeHide",d)}function L(d){n("hide",d),n("update:modelValue",!1)}function m(d){n("click",d)}function N(d){ue(d),T(),n("click",d)}function E(d){r.value!==null&&r.value.toggle(d)}function u(d){r.value!==null&&r.value.show(d)}function T(d){r.value!==null&&r.value.hide(d)}return Object.assign(i,{show:u,hide:T,toggle:E}),Se(()=>{e.modelValue===!0&&u()}),()=>{const d=[c(Te,{class:k.value,name:e.dropdownIcon||i.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&d.push(c(Re,{ref:r,id:s,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:B,onShow:C,onBeforeHide:S,onHide:L},t.default)),e.split===!1?c(J,{class:"q-btn-dropdown q-btn-dropdown--simple",...w.value,...f.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:m},{default:()=>ie(t.label,[]).concat(d),loading:t.loading}):c(Tt,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...z.value,glossy:e.glossy,stretch:e.stretch},()=>[c(J,{class:"q-btn-dropdown--current",...w.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:N},{default:t.label,loading:t.loading}),c(J,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...f.value,...z.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>d)])}}}),zt=ee({name:"QTooltip",inheritAttrs:!1,props:{...Ie,...Me,...xe,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:he},self:{type:String,default:"top middle",validator:he},offset:{type:Array,default:()=>[14,14],validator:Qe},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...Ue],setup(e,{slots:t,emit:n,attrs:i}){let l,r;const s=Z(),{proxy:{$q:f}}=s,k=$(null),z=$(!1),w=g(()=>ge(e.anchor,f.lang.rtl)),B=g(()=>ge(e.self,f.lang.rtl)),C=g(()=>e.persistent!==!0),{registerTick:S,removeTick:L}=lt(),{registerTimeout:m}=at(),{transitionProps:N,transitionStyle:E}=Ke(e),{localScrollTarget:u,changeScrollEvent:T,unconfigureScrollTarget:d}=We(e,M),{anchorEl:x,canShow:v,anchorEvents:p}=Ge({showing:z,configureAnchorEl:A}),{show:D,hide:y}=Xe({showing:z,canShow:v,handleShow:K,handleHide:I,hideOnRouteChange:C,processOnMount:!0});Object.assign(p,{delayShow:h,delayHide:O});const{showPortal:P,hidePortal:R,renderPortal:U}=Ye(s,k,te,"tooltip");if(f.platform.is.mobile===!0){const q={anchorEl:x,innerRef:k,onClickOutside(_){return y(_),_.target.classList.contains("q-dialog__backdrop")&&oe(_),!0}},Q=g(()=>e.modelValue===null&&e.persistent!==!0&&z.value===!0);V(Q,_=>{(_===!0?Ve:me)(q)}),re(()=>{me(q)})}function K(q){P(),S(()=>{r=new MutationObserver(()=>H()),r.observe(k.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),H(),M()}),l===void 0&&(l=V(()=>f.screen.width+"|"+f.screen.height+"|"+e.self+"|"+e.anchor+"|"+f.lang.rtl,H)),m(()=>{P(!0),n("show",q)},e.transitionDuration)}function I(q){L(),R(),W(),m(()=>{R(!0),n("hide",q)},e.transitionDuration)}function W(){r!==void 0&&(r.disconnect(),r=void 0),l!==void 0&&(l(),l=void 0),d(),de(p,"tooltipTemp")}function H(){const q=k.value;x.value===null||!q||Je({el:q,offset:e.offset,anchorEl:x.value,anchorOrigin:w.value,selfOrigin:B.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function h(q){if(f.platform.is.mobile===!0){pe(),document.body.classList.add("non-selectable");const Q=x.value,_=["touchmove","touchcancel","touchend","click"].map(X=>[Q,X,"delayHide","passiveCapture"]);fe(p,"tooltipTemp",_)}m(()=>{D(q)},e.delay)}function O(q){f.platform.is.mobile===!0&&(de(p,"tooltipTemp"),pe(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),m(()=>{y(q)},e.hideDelay)}function A(){if(e.noParentEvent===!0||x.value===null)return;const q=f.platform.is.mobile===!0?[[x.value,"touchstart","delayShow","passive"]]:[[x.value,"mouseenter","delayShow","passive"],[x.value,"mouseleave","delayHide","passive"]];fe(p,"anchor",q)}function M(){if(x.value!==null||e.scrollTarget!==void 0){u.value=rt(x.value,e.scrollTarget);const q=e.noParentEvent===!0?H:y;T(u.value,q)}}function G(){return z.value===!0?c("div",{...i,ref:k,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",i.class],style:[i.style,E.value],role:"tooltip"},ie(t.default)):null}function te(){return c(Ee,N.value,G)}return re(W),Object.assign(s.proxy,{updatePosition:H}),U}});function ze(e,t,n){t.handler?t.handler(e,n,n.caret):n.runCmd(t.cmd,t.param)}function ce(e){return c("div",{class:"q-editor__toolbar-group"},e)}function Be(e,t,n,i=!1){const l=i||(t.type==="toggle"?t.toggled?t.toggled(e):t.cmd&&e.caret.is(t.cmd,t.param):!1),r=[];if(t.tip&&e.$q.platform.is.desktop){const s=t.key?c("div",[c("small",`(CTRL + ${String.fromCharCode(t.key)})`)]):null;r.push(c(zt,{delay:1e3},()=>[c("div",{innerHTML:t.tip}),s]))}return c(J,{...e.buttonProps.value,icon:t.icon!==null?t.icon:void 0,color:l?t.toggleColor||e.props.toolbarToggleColor:t.color||e.props.toolbarColor,textColor:l&&!e.props.toolbarPush?null:t.textColor||e.props.toolbarTextColor,label:t.label,disable:t.disable?typeof t.disable=="function"?t.disable(e):!0:!1,size:"sm",onClick(s){n&&n(),ze(s,t,e)}},()=>r)}function Bt(e,t){const n=t.list==="only-icons";let i=t.label,l=t.icon!==null?t.icon:void 0,r,s;function f(){z.component.proxy.hide()}if(n)s=t.options.map(w=>{const B=w.type===void 0?e.caret.is(w.cmd,w.param):!1;return B&&(i=w.tip,l=w.icon!==null?w.icon:void 0),Be(e,w,f,B)}),r=e.toolbarBackgroundClass.value,s=[ce(s)];else{const w=e.props.toolbarToggleColor!==void 0?`text-${e.props.toolbarToggleColor}`:null,B=e.props.toolbarTextColor!==void 0?`text-${e.props.toolbarTextColor}`:null,C=t.list==="no-icons";s=t.options.map(S=>{const L=S.disable?S.disable(e):!1,m=S.type===void 0?e.caret.is(S.cmd,S.param):!1;m&&(i=S.tip,l=S.icon!==null?S.icon:void 0);const N=S.htmlTip;return c(Ze,{active:m,activeClass:w,clickable:!0,disable:L,dense:!0,onClick(E){f(),e.contentRef.value!==null&&e.contentRef.value.focus(),e.caret.restore(),ze(E,S,e)}},()=>[C===!0?null:c(ve,{class:m?w:B,side:!0},()=>c(Te,{name:S.icon!==null?S.icon:void 0})),c(ve,N?()=>c("div",{class:"text-no-wrap",innerHTML:S.htmlTip}):S.tip?()=>c("div",{class:"text-no-wrap"},S.tip):void 0)])}),r=[e.toolbarBackgroundClass.value,B]}const k=t.highlight&&i!==t.label,z=c(qt,{...e.buttonProps.value,noCaps:!0,noWrap:!0,color:k?e.props.toolbarToggleColor:e.props.toolbarColor,textColor:k&&!e.props.toolbarPush?null:e.props.toolbarTextColor,label:t.fixedLabel?t.label:i,icon:t.fixedIcon?t.icon!==null?t.icon:void 0:l,contentClass:r},()=>s);return z}function Ot(e){if(e.caret)return e.buttons.value.filter(t=>!e.isViewingSource.value||t.find(n=>n.cmd==="viewsource")).map(t=>ce(t.map(n=>e.isViewingSource.value&&n.cmd!=="viewsource"?!1:n.type==="slot"?ie(e.slots[n.slot]):n.type==="dropdown"?Bt(e,n):Be(e,n))))}function Ft(e,t,n,i={}){const l=Object.keys(i);if(l.length===0)return{};const r={default_font:{cmd:"fontName",param:e,icon:n,tip:t}};return l.forEach(s=>{const f=i[s];r[s]={cmd:"fontName",param:f,icon:n,tip:f,htmlTip:`<font face="${f}">${f}</font>`}}),r}function _t(e){if(e.caret){const t=e.props.toolbarColor||e.props.toolbarTextColor;let n=e.editLinkUrl.value;const i=()=>{e.caret.restore(),n!==e.editLinkUrl.value&&document.execCommand("createLink",!1,n===""?" ":n),e.editLinkUrl.value=null};return[c("div",{class:`q-mx-xs text-${t}`},`${e.$q.lang.editor.url}: `),c("input",{key:"qedt_btm_input",class:"col q-editor__link-input",value:n,onInput:l=>{ue(l),n=l.target.value},onKeydown:l=>{if(ke(l)!==!0)switch(l.keyCode){case 13:return se(l),i();case 27:se(l),e.caret.restore(),(!e.editLinkUrl.value||e.editLinkUrl.value==="https://")&&document.execCommand("unlink"),e.editLinkUrl.value=null;break}}}),ce([c(J,{key:"qedt_btm_rem",tabindex:-1,...e.buttonProps.value,label:e.$q.lang.label.remove,noCaps:!0,onClick:()=>{e.caret.restore(),document.execCommand("unlink"),e.editLinkUrl.value=null}}),c(J,{key:"qedt_btm_upd",...e.buttonProps.value,label:e.$q.lang.label.update,noCaps:!0,onClick:i})])]}}const Lt=Object.prototype.toString,ae=Object.prototype.hasOwnProperty,Et=new Set(["Boolean","Number","String","Function","Array","Date","RegExp"].map(e=>"[object "+e+"]"));function be(e){if(e!==Object(e)||Et.has(Lt.call(e))===!0||e.constructor&&ae.call(e,"constructor")===!1&&ae.call(e.constructor.prototype,"isPrototypeOf")===!1)return!1;let t;for(t in e);return t===void 0||ae.call(e,t)}function Oe(){let e,t,n,i,l,r,s=arguments[0]||{},f=1,k=!1;const z=arguments.length;for(typeof s=="boolean"&&(k=s,s=arguments[1]||{},f=2),Object(s)!==s&&typeof s!="function"&&(s={}),z===f&&(s=this,f--);f<z;f++)if((e=arguments[f])!==null)for(t in e)n=s[t],i=e[t],s!==i&&(k===!0&&i&&((l=Array.isArray(i))||be(i)===!0)?(l===!0?r=Array.isArray(n)===!0?n:[]:r=be(n)===!0?n:{},s[t]=Oe(k,r,i)):i!==void 0&&(s[t]=i));return s}var Xt=ee({name:"QEditor",props:{...dt,...st,modelValue:{type:String,required:!0},readonly:Boolean,disable:Boolean,minHeight:{type:String,default:"10rem"},maxHeight:String,height:String,definitions:Object,fonts:Object,placeholder:String,toolbar:{type:Array,validator:e=>e.length===0||e.every(t=>t.length),default(){return[["left","center","right","justify"],["bold","italic","underline","strike"],["undo","redo"]]}},toolbarColor:String,toolbarBg:String,toolbarTextColor:String,toolbarToggleColor:{type:String,default:"primary"},toolbarOutline:Boolean,toolbarPush:Boolean,toolbarRounded:Boolean,paragraphTag:{type:String,validator:e=>["div","p"].includes(e),default:"div"},contentStyle:Object,contentClass:[Object,Array,String],square:Boolean,flat:Boolean,dense:Boolean},emits:[...ut,"update:modelValue","keydown","click","mouseup","keyup","touchend","focus","blur"],setup(e,{slots:t,emit:n,attrs:i}){const{proxy:l,vnode:r}=Z(),{$q:s}=l,f=ft(e,s),{inFullscreen:k,toggleFullscreen:z}=ct(),w=ht(i,r),B=$(null),C=$(null),S=$(null),L=$(!1),m=g(()=>!e.readonly&&!e.disable);let N,E,u=e.modelValue;document.execCommand("defaultParagraphSeparator",!1,e.paragraphTag),N=window.getComputedStyle(document.body).fontFamily;const T=g(()=>e.toolbarBg?` bg-${e.toolbarBg}`:""),d=g(()=>{const o=e.toolbarOutline!==!0&&e.toolbarPush!==!0;return{type:"a",flat:o,noWrap:!0,outline:e.toolbarOutline,push:e.toolbarPush,rounded:e.toolbarRounded,dense:!0,color:e.toolbarColor,disable:!m.value,size:"sm"}}),x=g(()=>{const o=s.lang.editor,a=s.iconSet.editor;return{bold:{cmd:"bold",icon:a.bold,tip:o.bold,key:66},italic:{cmd:"italic",icon:a.italic,tip:o.italic,key:73},strike:{cmd:"strikeThrough",icon:a.strikethrough,tip:o.strikethrough,key:83},underline:{cmd:"underline",icon:a.underline,tip:o.underline,key:85},unordered:{cmd:"insertUnorderedList",icon:a.unorderedList,tip:o.unorderedList},ordered:{cmd:"insertOrderedList",icon:a.orderedList,tip:o.orderedList},subscript:{cmd:"subscript",icon:a.subscript,tip:o.subscript,htmlTip:"x<subscript>2</subscript>"},superscript:{cmd:"superscript",icon:a.superscript,tip:o.superscript,htmlTip:"x<superscript>2</superscript>"},link:{cmd:"link",disable:b=>b.caret&&!b.caret.can("link"),icon:a.hyperlink,tip:o.hyperlink,key:76},fullscreen:{cmd:"fullscreen",icon:a.toggleFullscreen,tip:o.toggleFullscreen,key:70},viewsource:{cmd:"viewsource",icon:a.viewSource,tip:o.viewSource},quote:{cmd:"formatBlock",param:"BLOCKQUOTE",icon:a.quote,tip:o.quote,key:81},left:{cmd:"justifyLeft",icon:a.left,tip:o.left},center:{cmd:"justifyCenter",icon:a.center,tip:o.center},right:{cmd:"justifyRight",icon:a.right,tip:o.right},justify:{cmd:"justifyFull",icon:a.justify,tip:o.justify},print:{type:"no-state",cmd:"print",icon:a.print,tip:o.print,key:80},outdent:{type:"no-state",disable:b=>b.caret&&!b.caret.can("outdent"),cmd:"outdent",icon:a.outdent,tip:o.outdent},indent:{type:"no-state",disable:b=>b.caret&&!b.caret.can("indent"),cmd:"indent",icon:a.indent,tip:o.indent},removeFormat:{type:"no-state",cmd:"removeFormat",icon:a.removeFormat,tip:o.removeFormat},hr:{type:"no-state",cmd:"insertHorizontalRule",icon:a.hr,tip:o.hr},undo:{type:"no-state",cmd:"undo",icon:a.undo,tip:o.undo,key:90},redo:{type:"no-state",cmd:"redo",icon:a.redo,tip:o.redo,key:89},h1:{cmd:"formatBlock",param:"H1",icon:a.heading1||a.heading,tip:o.heading1,htmlTip:`<h1 class="q-ma-none">${o.heading1}</h1>`},h2:{cmd:"formatBlock",param:"H2",icon:a.heading2||a.heading,tip:o.heading2,htmlTip:`<h2 class="q-ma-none">${o.heading2}</h2>`},h3:{cmd:"formatBlock",param:"H3",icon:a.heading3||a.heading,tip:o.heading3,htmlTip:`<h3 class="q-ma-none">${o.heading3}</h3>`},h4:{cmd:"formatBlock",param:"H4",icon:a.heading4||a.heading,tip:o.heading4,htmlTip:`<h4 class="q-ma-none">${o.heading4}</h4>`},h5:{cmd:"formatBlock",param:"H5",icon:a.heading5||a.heading,tip:o.heading5,htmlTip:`<h5 class="q-ma-none">${o.heading5}</h5>`},h6:{cmd:"formatBlock",param:"H6",icon:a.heading6||a.heading,tip:o.heading6,htmlTip:`<h6 class="q-ma-none">${o.heading6}</h6>`},p:{cmd:"formatBlock",param:e.paragraphTag,icon:a.heading,tip:o.paragraph},code:{cmd:"formatBlock",param:"PRE",icon:a.code,htmlTip:`<code>${o.code}</code>`},"size-1":{cmd:"fontSize",param:"1",icon:a.size1||a.size,tip:o.size1,htmlTip:`<font size="1">${o.size1}</font>`},"size-2":{cmd:"fontSize",param:"2",icon:a.size2||a.size,tip:o.size2,htmlTip:`<font size="2">${o.size2}</font>`},"size-3":{cmd:"fontSize",param:"3",icon:a.size3||a.size,tip:o.size3,htmlTip:`<font size="3">${o.size3}</font>`},"size-4":{cmd:"fontSize",param:"4",icon:a.size4||a.size,tip:o.size4,htmlTip:`<font size="4">${o.size4}</font>`},"size-5":{cmd:"fontSize",param:"5",icon:a.size5||a.size,tip:o.size5,htmlTip:`<font size="5">${o.size5}</font>`},"size-6":{cmd:"fontSize",param:"6",icon:a.size6||a.size,tip:o.size6,htmlTip:`<font size="6">${o.size6}</font>`},"size-7":{cmd:"fontSize",param:"7",icon:a.size7||a.size,tip:o.size7,htmlTip:`<font size="7">${o.size7}</font>`}}}),v=g(()=>{const o=e.definitions||{},a=e.definitions||e.fonts?Oe(!0,{},x.value,o,Ft(N,s.lang.editor.defaultFont,s.iconSet.editor.font,e.fonts)):x.value;return e.toolbar.map(b=>b.map(F=>{if(F.options)return{type:"dropdown",icon:F.icon,label:F.label,size:"sm",dense:!0,fixedLabel:F.fixedLabel,fixedIcon:F.fixedIcon,highlight:F.highlight,list:F.list,options:F.options.map(_e=>a[_e])};const j=a[F];return j?j.type==="no-state"||o[F]&&(j.cmd===void 0||x.value[j.cmd]&&x.value[j.cmd].type==="no-state")?j:Object.assign({type:"toggle"},j):{type:"slot",slot:F}}))}),p={$q:s,props:e,slots:t,inFullscreen:k,toggleFullscreen:z,runCmd:Q,isViewingSource:L,editLinkUrl:S,toolbarBackgroundClass:T,buttonProps:d,contentRef:C,buttons:v,setContent:q};V(()=>e.modelValue,o=>{u!==o&&(u=o,q(o,!0))});const D=g(()=>e.toolbar&&e.toolbar.length>0),y=g(()=>{const o={},a=b=>{b.key&&(o[b.key]={cmd:b.cmd,param:b.param})};return v.value.forEach(b=>{b.forEach(F=>{F.options?F.options.forEach(a):a(F)})}),o}),P=g(()=>k.value?e.contentStyle:[{minHeight:e.minHeight,height:e.height,maxHeight:e.maxHeight},e.contentStyle]),R=g(()=>`q-editor q-editor--${L.value===!0?"source":"default"}`+(e.disable===!0?" disabled":"")+(k.value===!0?" fullscreen column":"")+(e.square===!0?" q-editor--square no-border-radius":"")+(e.flat===!0?" q-editor--flat":"")+(e.dense===!0?" q-editor--dense":"")+(f.value===!0?" q-editor--dark q-dark":"")),U=g(()=>[e.contentClass,"q-editor__content",{col:k.value,"overflow-auto":k.value||e.maxHeight}]),K=g(()=>e.disable===!0?{"aria-disabled":"true"}:e.readonly===!0?{"aria-readonly":"true"}:{});function I(){if(C.value!==null){const o=`inner${L.value===!0?"Text":"HTML"}`,a=C.value[o];a!==e.modelValue&&(u=a,n("update:modelValue",a))}}function W(o){if(n("keydown",o),o.ctrlKey!==!0||ke(o)===!0){_();return}const a=o.keyCode,b=y.value[a];if(b!==void 0){const{cmd:F,param:j}=b;oe(o),Q(F,j,!1)}}function H(o){_(),n("click",o)}function h(o){if(C.value!==null){const{scrollTop:a,scrollHeight:b}=C.value;E=b-a}p.caret.save(),n("blur",o)}function O(o){Ae(()=>{C.value!==null&&E!==void 0&&(C.value.scrollTop=C.value.scrollHeight-E)}),n("focus",o)}function A(o){const a=B.value;if(a!==null&&a.contains(o.target)===!0&&(o.relatedTarget===null||a.contains(o.relatedTarget)!==!0)){const b=`inner${L.value===!0?"Text":"HTML"}`;p.caret.restorePosition(C.value[b].length),_()}}function M(o){const a=B.value;a!==null&&a.contains(o.target)===!0&&(o.relatedTarget===null||a.contains(o.relatedTarget)!==!0)&&(p.caret.savePosition(),_())}function G(){E=void 0}function te(o){p.caret.save()}function q(o,a){if(C.value!==null){a===!0&&p.caret.savePosition();const b=`inner${L.value===!0?"Text":"HTML"}`;C.value[b]=o,a===!0&&(p.caret.restorePosition(C.value[b].length),_())}}function Q(o,a,b=!0){X(),p.caret.restore(),p.caret.apply(o,a,()=>{X(),p.caret.save(),b&&_()})}function _(){setTimeout(()=>{S.value=null,l.$forceUpdate()},1)}function X(){mt(()=>{C.value!==null&&C.value.focus({preventScroll:!0})})}function Fe(){return C.value}return Se(()=>{p.caret=l.caret=new wt(C.value,p),q(e.modelValue),_(),document.addEventListener("selectionchange",te)}),re(()=>{document.removeEventListener("selectionchange",te)}),Object.assign(l,{runCmd:Q,refreshToolbar:_,focus:X,getContentEl:Fe}),()=>{let o;if(D.value){const a=[c("div",{key:"qedt_top",class:"q-editor__toolbar row no-wrap scroll-x"+T.value},Ot(p))];S.value!==null&&a.push(c("div",{key:"qedt_btm",class:"q-editor__toolbar row no-wrap items-center scroll-x"+T.value},_t(p))),o=c("div",{key:"toolbar_ctainer",class:"q-editor__toolbars-container"},a)}return c("div",{ref:B,class:R.value,style:{height:k.value===!0?"100%":null},...K.value,onFocusin:A,onFocusout:M},[o,c("div",{ref:C,style:P.value,class:U.value,contenteditable:m.value,placeholder:e.placeholder,...w.listeners.value,onInput:I,onKeydown:W,onClick:H,onBlur:h,onFocus:O,onMousedown:G,onTouchstartPassive:G})])}}});function Y(e,t,n,i){const l=[];return e.forEach(r=>{i(r)===!0?l.push(r):t.push({failedPropValidation:n,file:r})}),l}function ne(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),oe(e)}const At={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},Nt=["rejected"];function Dt({editable:e,dnd:t,getFileInput:n,addFilesToQueue:i}){const{props:l,emit:r,proxy:s}=Z(),f=$(null),k=g(()=>l.accept!==void 0?l.accept.split(",").map(u=>(u=u.trim(),u==="*"?"*/":(u.endsWith("/*")&&(u=u.slice(0,u.length-1)),u.toUpperCase()))):null),z=g(()=>parseInt(l.maxFiles,10)),w=g(()=>parseInt(l.maxTotalSize,10));function B(u){if(e.value)if(u!==Object(u)&&(u={target:null}),u.target!==null&&u.target.matches('input[type="file"]')===!0)u.clientX===0&&u.clientY===0&&ue(u);else{const T=n();T&&T!==u.target&&T.click(u)}}function C(u){e.value&&u&&i(null,u)}function S(u,T,d,x){let v=Array.from(T||u.target.files);const p=[],D=()=>{p.length>0&&r("rejected",p)};if(l.accept!==void 0&&k.value.indexOf("*/")===-1&&(v=Y(v,p,"accept",y=>k.value.some(P=>y.type.toUpperCase().startsWith(P)||y.name.toUpperCase().endsWith(P))),v.length===0))return D();if(l.maxFileSize!==void 0){const y=parseInt(l.maxFileSize,10);if(v=Y(v,p,"max-file-size",P=>P.size<=y),v.length===0)return D()}if(l.multiple!==!0&&v.length>0&&(v=[v[0]]),v.forEach(y=>{y.__key=y.webkitRelativePath+y.lastModified+y.name+y.size}),x===!0){const y=d.map(P=>P.__key);v=Y(v,p,"duplicate",P=>y.includes(P.__key)===!1)}if(v.length===0)return D();if(l.maxTotalSize!==void 0){let y=x===!0?d.reduce((P,R)=>P+R.size,0):0;if(v=Y(v,p,"max-total-size",P=>(y+=P.size,y<=w.value)),v.length===0)return D()}if(typeof l.filter=="function"){const y=l.filter(v);v=Y(v,p,"filter",P=>y.includes(P))}if(l.maxFiles!==void 0){let y=x===!0?d.length:0;if(v=Y(v,p,"max-files",()=>(y++,y<=z.value)),v.length===0)return D()}if(D(),v.length>0)return v}function L(u){ne(u),t.value!==!0&&(t.value=!0)}function m(u){oe(u),(u.relatedTarget!==null||Ne.is.safari!==!0?u.relatedTarget!==f.value:document.elementsFromPoint(u.clientX,u.clientY).includes(f.value)===!1)===!0&&(t.value=!1)}function N(u){ne(u);const T=u.dataTransfer.files;T.length>0&&i(null,T),t.value=!1}function E(u){if(t.value===!0)return c("div",{ref:f,class:`q-${u}__dnd absolute-full`,onDragenter:ne,onDragover:ne,onDragleave:m,onDrop:N})}return Object.assign(s,{pickFiles:B,addFiles:C}),{pickFiles:B,addFiles:C,onDragover:L,onDragleave:m,processFiles:S,getDndNode:E,maxFilesNumber:z,maxTotalSizeNumber:w}}var Yt=ee({name:"QFile",inheritAttrs:!1,props:{...gt,...vt,...At,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...pt,...Nt],setup(e,{slots:t,emit:n,attrs:i}){const{proxy:l}=Z(),r=yt(),s=$(null),f=$(!1),k=bt(e),{pickFiles:z,onDragover:w,onDragleave:B,processFiles:C,getDndNode:S}=Dt({editable:r.editable,dnd:f,getFileInput:U,addFilesToQueue:K}),L=St(e),m=g(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),N=g(()=>ye(m.value)),E=g(()=>m.value.map(h=>h.name).join(", ")),u=g(()=>tt(m.value.reduce((h,O)=>h+O.size,0))),T=g(()=>({totalSize:u.value,filesNumber:m.value.length,maxFiles:e.maxFiles})),d=g(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:k.value,...i,id:r.targetUid.value,disabled:r.editable.value!==!0})),x=g(()=>"q-file q-field--auto-height"+(f.value===!0?" q-file--dnd":"")),v=g(()=>e.multiple===!0&&e.append===!0);function p(h){const O=m.value.slice();O.splice(h,1),y(O)}function D(h){const O=m.value.findIndex(h);O>-1&&p(O)}function y(h){n("update:modelValue",e.multiple===!0?h:h[0])}function P(h){h.keyCode===13&&se(h)}function R(h){(h.keyCode===13||h.keyCode===32)&&z(h)}function U(){return s.value}function K(h,O){const A=C(h,O,m.value,v.value),M=U();M!=null&&(M.value=""),A!==void 0&&((e.multiple===!0?e.modelValue&&A.every(G=>m.value.includes(G)):e.modelValue===A[0])||y(v.value===!0?m.value.concat(A):A))}function I(){return[c("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function W(){if(t.file!==void 0)return m.value.length===0?I():m.value.map((O,A)=>t.file({index:A,file:O,ref:this}));if(t.selected!==void 0)return m.value.length===0?I():t.selected({files:m.value,ref:this});if(e.useChips===!0)return m.value.length===0?I():m.value.map((O,A)=>c(et,{key:"file-"+A,removable:r.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{p(A)}},()=>c("span",{class:"ellipsis",textContent:O.name})));const h=e.displayValue!==void 0?e.displayValue:E.value;return h.length>0?[c("div",{class:e.inputClass,style:e.inputStyle,textContent:h})]:I()}function H(){const h={ref:s,...d.value,...L.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:K};return e.multiple===!0&&(h.multiple=!0),c("input",h)}return Object.assign(r,{fieldClass:x,emitValue:y,hasValue:N,inputRef:s,innerValue:m,floatingLabel:g(()=>N.value===!0||ye(e.displayValue)),computedCounter:g(()=>{if(e.counterLabel!==void 0)return e.counterLabel(T.value);const h=e.maxFiles;return`${m.value.length}${h!==void 0?" / "+h:""} (${u.value})`}),getControlChild:()=>S("file"),getControl:()=>{const h={ref:r.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return r.editable.value===!0&&Object.assign(h,{onDragover:w,onDragleave:B,onKeydown:P,onKeyup:R}),c("div",h,[H()].concat(W()))}}),Object.assign(l,{removeAtIndex:p,removeFile:D,getNativeElement:()=>s.value}),De(l,"nativeEl",()=>s.value),Ct(r)}});function Ce(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var Jt=je({name:"close-popup",beforeMount(e,{value:t}){const n={depth:Ce(t),handler(i){n.depth!==0&&setTimeout(()=>{const l=nt(e);l!==void 0&&ot(l,i,n.depth)})},handlerKey(i){$e(i,13)===!0&&n.handler(i)}};e.__qclosepopup=n,e.addEventListener("click",n.handler),e.addEventListener("keyup",n.handlerKey)},updated(e,{value:t,oldValue:n}){t!==n&&(e.__qclosepopup.depth=Ce(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});export{Jt as C,Xt as Q,Yt as a};