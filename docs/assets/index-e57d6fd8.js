import{z as W,d as I,o as a,f as m,a as h,t as $,A as X,B as E,l as D,C as Y,r as d,F as L,g as w,u as y,D as Z,c as i,w as r,b as l,E as s,e as B,G as ee,p as te,i as oe,H as ae,I as le}from"./index-4bc5d242.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";const C=W("drag",{state:()=>({dragEl:{},formList:[],currentClickItem:{}}),getters:{funform(){console.log(this.formList)}},actions:{setDrag(o){this.dragEl=o},pushFormList(o){this.formList.push(o)},setFormList(o){this.formList.splice(this.formList.findIndex(e=>e.id==o.id),1,o)},delFormList(o){this.formList.splice(this.formList.findIndex(e=>e.id==o.id),1)},setCurrentClickItem(o){this.currentClickItem=o}}});let v;const re=new Uint8Array(16);function ne(){if(!v&&(v=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!v))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return v(re)}const c=[];for(let o=0;o<256;++o)c.push((o+256).toString(16).slice(1));function de(o,e=0){return(c[o[e+0]]+c[o[e+1]]+c[o[e+2]]+c[o[e+3]]+"-"+c[o[e+4]]+c[o[e+5]]+"-"+c[o[e+6]]+c[o[e+7]]+"-"+c[o[e+8]]+c[o[e+9]]+"-"+c[o[e+10]]+c[o[e+11]]+c[o[e+12]]+c[o[e+13]]+c[o[e+14]]+c[o[e+15]]).toLowerCase()}const ce=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),S={randomUUID:ce};function se(o,e,n){if(S.randomUUID&&!e&&!o)return S.randomUUID();o=o||{};const p=o.random||(o.rng||ne)();if(p[6]=p[6]&15|64,p[8]=p[8]&63|128,e){n=n||0;for(let _=0;_<16;++_)e[n+_]=p[_];return e}return de(p)}const ie=["draggable"],ue={class:"label"},pe=I({__name:"el",props:{formItem:null,source:null},setup(o){const e=o,n=C();function p(f){if(e.source!=="list")return;console.log(e.source,"source");const g={id:se(),data:{...e.formItem.data},index:n.formList.length,type:e.formItem.type};n.setDrag(g)}function _(){e.source!="list"&&n.setCurrentClickItem(n.formList.filter(f=>f.id===e.formItem.id)[0])}return(f,g)=>(a(),m("div",{class:"dropEl",draggable:e.source=="list",onDragstart:g[0]||(g[0]=k=>p()),onClick:_},[h("span",ue,$(e.formItem.data.label)+"：",1),X(f.$slots,"default",{},void 0,!0)],40,ie))}});const u=x(pe,[["__scopeId","data-v-1dfe6de0"]]),_e=o=>(te("data-v-6fabbd57"),o=o(),oe(),o),me={class:"itemBox"},fe=_e(()=>h("div",{class:"el-upload__tip"}," jpg/png files with a size less than 500kb ",-1)),ye={key:0,class:"buttons"},ge=I({__name:"dragBox",setup(o){let e=C();const{formList:n}=E(e),p=D();function _(k){e.pushFormList(e.dragEl),e.setCurrentClickItem(e.dragEl)}function f(){e.delFormList(e.currentClickItem)}let g=D(700);return Y(()=>{g.value=window.innerHeight-100}),(k,b)=>{const z=d("el-autocomplete"),A=d("el-input"),F=d("el-cascader"),R=d("el-checkbox"),T=d("el-color-picker"),H=d("el-date-picker"),N=d("el-radio"),j=d("el-radio-group"),M=d("el-rate"),O=d("el-slider"),G=d("el-switch"),J=d("el-time-picker"),P=d("el-transfer"),q=d("el-button"),K=d("el-upload"),Q=d("Editor"),U=d("icon");return a(),m("div",{class:"dragTargetBox",onDragover:b[0]||(b[0]=t=>{t.preventDefault()}),onDrop:_,ref_key:"dragBox",ref:p,style:Z({height:y(g)+"px"})},[(a(!0),m(L,null,w(y(n),(t,Ue)=>(a(),m("div",me,[h("div",{class:ee(["box",[t.id===y(e).currentClickItem.id?"action":""]])},[t.type=="autocomplete"?(a(),i(u,{key:0,formItem:t,type:"autocomplete",source:"dragContentBox",id:t.id},{default:r(()=>[l(z,{clearable:"",class:"inline-input w-50",placeholder:"Please Input"})]),_:2},1032,["formItem","id"])):s("",!0),t.type=="input"?(a(),i(u,{key:1,formItem:t,type:"input",source:"dragContentBox",id:t.id},{default:r(()=>[l(A,{modelValue:t.data.value,"onUpdate:modelValue":V=>t.data.value=V,placeholder:t.data.placeholder},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["formItem","id"])):s("",!0),t.type=="cascader"?(a(),i(u,{key:2,formItem:t,type:"cascader",source:"dragContentBox",id:t.id},{default:r(()=>[l(F)]),_:2},1032,["formItem","id"])):s("",!0),t.type=="checkbox"?(a(),i(u,{key:3,formItem:t,type:"checkbox",source:"dragContentBox",id:t.id},{default:r(()=>[l(R,{label:"Option 1",size:"large"})]),_:2},1032,["formItem","id"])):s("",!0),t.type=="color-picker"?(a(),i(u,{key:4,formItem:t,type:"color-picker",source:"dragContentBox",id:t.id},{default:r(()=>[l(T,{modelValue:t.data.value,"onUpdate:modelValue":V=>t.data.value=V},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["formItem","id"])):s("",!0),t.type=="date-picker"?(a(),i(u,{key:5,formItem:t,type:"date-picker",source:"dragContentBox",id:t.id},{default:r(()=>[l(H,{type:"daterange","unlink-panels":"","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date"})]),_:2},1032,["formItem","id"])):s("",!0),t.type=="radio"?(a(),i(u,{key:6,formItem:t,type:"radio",source:"dragContentBox"},{default:r(()=>[l(j,null,{default:r(()=>[l(N,null,{default:r(()=>[B("Option A")]),_:1})]),_:1})]),_:2},1032,["formItem"])):s("",!0),t.type=="rate"?(a(),i(u,{key:7,formItem:t,type:"rate",source:"dragContentBox",id:t.id},{default:r(()=>[l(M,{clearable:""})]),_:2},1032,["formItem","id"])):s("",!0),t.type=="slider"?(a(),i(u,{key:8,formItem:t,type:"slider",source:"dragContentBox",id:t.id},{default:r(()=>[l(O,{"show-input":""})]),_:2},1032,["formItem","id"])):s("",!0),t.type=="switch"?(a(),i(u,{key:9,formItem:t,type:"switch",source:"dragContentBox",id:t.id},{default:r(()=>[l(G)]),_:2},1032,["formItem","id"])):s("",!0),t.type=="time-picker"?(a(),i(u,{key:10,formItem:t,type:"time-picker",source:"dragContentBox",id:t.id},{default:r(()=>[l(J,{placeholder:"Arbitrary time"})]),_:2},1032,["formItem","id"])):s("",!0),t.type=="transfer"?(a(),i(u,{key:11,formItem:t,type:"time-picker",source:"dragContentBox",id:t.id},{default:r(()=>[l(P,{filterable:"","filter-placeholder":"State Abbreviations"})]),_:2},1032,["formItem","id"])):s("",!0),t.type=="upload"?(a(),i(u,{key:12,formItem:t,type:"upload",source:"dragContentBox",id:t.id},{default:r(()=>[l(K,{class:"upload-demo",action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15","list-type":"picture"},{tip:r(()=>[fe]),default:r(()=>[l(q,{type:"primary"},{default:r(()=>[B("Click to upload")]),_:1})]),_:1})]),_:2},1032,["formItem","id"])):s("",!0),t.type=="editor"?(a(),i(u,{key:13,formItem:t,type:"editor",source:"dragContentBox",id:t.id},{default:r(()=>[l(Q,{"api-key":"yfycp4lfoy30yk39nix1traf87r0gicugdxyybxlnzi8sa8l"})]),_:2},1032,["formItem","id"])):s("",!0)],2),t.id===y(e).currentClickItem.id?(a(),m("div",ye,[l(U,{icon:"ic:outline-copy-all",color:"#4b96d6",style:{border:"solid 1px #ccc"}}),l(U,{onClick:f,icon:"material-symbols:delete-outline",color:"#fc6f6f",style:{border:"solid 1px #ccc"}})])):s("",!0)]))),256))],36)}}});const ke=x(ge,[["__scopeId","data-v-6fabbd57"]]),he=[{type:"input",icon:"line-md:edit",data:{defaultVal:"",label:"输入框",key:"name",placeholder:"请输入",value:""}},{type:"cascader",icon:"entypo:flow-cascade",data:{defaultVal:"",label:"级联选择器",key:"",placeholder:""}},{type:"checkbox",icon:"healthicons:i-exam-multiple-choice-outline",data:{defaultVal:"",label:"多选框",key:""}},{type:"color-picker",icon:"carbon:color-palette",data:{defaultVal:"",label:"取色器",key:"",value:""}},{type:"date-picker",icon:"gg:calendar-dates",data:{defaultVal:"",label:"时间区间选择器",key:"",placeholder:""}},{type:"radio",icon:"ic:sharp-radio-button-checked",data:{defaultVal:"",label:"单选框",key:""}},{type:"rate",icon:"ic:outline-grade",data:{defaultVal:"",label:"评分",key:""}},{type:"slider",icon:"uil:slider-h",data:{defaultVal:"",label:"滑块",key:""}},{type:"switch",icon:"mdi:toggle-switch-off-outline",data:{defaultVal:"",label:"开关",key:""}},{type:"time-picker",icon:"ic:round-access-time",data:{defaultVal:"",label:"时间选择器",key:"",placeholder:""}},{type:"transfer",icon:"solar:transfer-horizontal-linear",data:{defaultVal:"",label:"穿梭框",key:"",placeholder:""}},{type:"upload",icon:"ic:round-upload-file",data:{defaultVal:"",label:"文件上传",key:""}},{type:"editor",icon:"gala:editor",data:{defaultVal:"",label:"富文本",key:"",placeholder:""}}],Ie=I({__name:"dragList",setup(o){return(e,n)=>{const p=d("icon");return a(),m("div",null,[(a(!0),m(L,null,w(y(he),_=>(a(),i(u,{class:"leftDragItem",formItem:_,source:"list"},{default:r(()=>[l(p,{icon:_.icon},null,8,["icon"])]),_:2},1032,["formItem"]))),256))])}}});const xe=x(Ie,[["__scopeId","data-v-612b9c01"]]),be={key:0},ve=I({__name:"attr",setup(o){const e=C(),{currentClickItem:n}=E(e);return e.$subscribe(()=>{console.log(n.value,"currentClickItem")}),(p,_)=>{const f=d("el-input");return y(n).data?(a(),m("ul",be,[(a(!0),m(L,null,w(y(n).data,(g,k)=>(a(),m("li",null,[h("span",null,$(k)+":",1),l(f,{modelValue:y(n).data[k],"onUpdate:modelValue":b=>y(n).data[k]=b,placeholder:y(n).data.placeholder},null,8,["modelValue","onUpdate:modelValue","placeholder"])]))),256))])):s("",!0)}}});const Ce=x(ve,[["__scopeId","data-v-f1d342a1"]]),Ve={class:"dragMain"},Be={class:"header"},Le={class:"main"},we=I({__name:"index",setup(o){let e=C();ae(()=>{}),le(()=>{});function n(){e.formList,console.log(e.formList)}return(p,_)=>{const f=d("el-button");return a(),m("div",Ve,[h("div",Be,[l(f,{type:"primary",onClick:n},{default:r(()=>[B("导出")]),_:1})]),h("div",Le,[l(xe),l(ke),l(Ce)])])}}});const $e=x(we,[["__scopeId","data-v-798a851d"]]);export{$e as default};