import{u as s,a as d}from"./use-dark.e61fbf21.js";import{c as u,a as n}from"./render.8bc8b5bf.js";import{c,h as l,g as q}from"./index.8dc0f8c9.js";var g=u({name:"QCard",props:{...s,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:r}){const{proxy:{$q:e}}=q(),t=d(a,e),o=c(()=>"q-card"+(t.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>l(a.tag,{class:o.value},n(r.default))}});export{g as Q};