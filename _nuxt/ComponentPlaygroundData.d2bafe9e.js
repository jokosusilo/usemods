import b from"./TabsHeader.abc5650d.js";import g from"./ComponentPlaygroundProps.0c16fdbc.js";import{_ as v}from"./ComponentPlaygroundSlots.vue.f994ee0f.js";import{_ as x}from"./ComponentPlaygroundTokens.vue.e9b43e82.js";import{d as k,as as D,r as V,b as n,c as C,g as P,K as o,Y as m,at as T,f as s,k as B}from"./entry.6042ece0.js";import"./ProseH4.27e23dac.js";import"./ProseCodeInline.aee91103.js";import"./Badge.2d1bbdea.js";import"./slot.6b579c8e.js";import"./node.ec15223b.js";import"./ProseP.d611a776.js";const I={class:"component-playground-data"},j=k({__name:"ComponentPlaygroundData",props:{modelValue:{type:Object,required:!1,default:()=>({})},componentData:{type:Object,required:!1,default:()=>({})}},emits:["update:modelValue"],setup(t,{emit:p}){const a=D(t,"modelValue",p),e=V(0),r=[{label:"Props"},{label:"Slots"},{label:"Design Tokens"}],d=c=>e.value=c;return(c,l)=>{const u=b,_=g,i=v,f=x;return n(),C("div",I,[P(u,{"active-tab-index":o(e),tabs:r,"onUpdate:activeTabIndex":d},null,8,["active-tab-index"]),o(e)===0?(n(),m(_,{key:0,modelValue:o(a),"onUpdate:modelValue":l[0]||(l[0]=y=>T(a)?a.value=y:null),"component-data":t.componentData},null,8,["modelValue","component-data"])):s("",!0),o(e)===1?(n(),m(i,{key:1,"component-data":t.componentData},null,8,["component-data"])):s("",!0),o(e)===2?(n(),m(f,{key:2,"component-data":t.componentData},null,8,["component-data"])):s("",!0)])}}});const h=B(j,[["__scopeId","data-v-ef4d9ec9"]]);export{h as default};