import{n as F,g as K,p as f,q as J,u as l,o as _,m as N,s as Z,c as E,F as B,v as z,x as G,y as I,z as T,A as L,B as Q,C as q,D as X,E as Y,G as tt,H as et,I as st,J as at,K as nt,L as ot,M as lt,N as it,O as rt,w,b as p,a as c,P as ut,d as j,Q as C,t as dt}from"./DncZHcTT.js";import{_ as ct}from"./ggZsvH6e.js";var mt=Object.defineProperty,pt=(n,t,e)=>t in n?mt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,P=(n,t,e)=>pt(n,typeof t!="symbol"?t+"":t,e);const O={"#":{pattern:/[0-9]/},"@":{pattern:/[a-zA-Z]/},"*":{pattern:/[a-zA-Z0-9]/}},W=(n,t,e)=>n.replaceAll(t,"").replace(e,".").replace("..",".").replace(/[^.\d]/g,""),$=(n,t,e)=>{var s;return new Intl.NumberFormat(((s=e.number)==null?void 0:s.locale)??"en",{minimumFractionDigits:n,maximumFractionDigits:t,roundingMode:"trunc"})},ht=(n,t=!0,e)=>{var s,a,o,u;const m=((s=e.number)==null?void 0:s.unsigned)!==!0&&n.startsWith("-")?"-":"",h=((a=e.number)==null?void 0:a.fraction)??0;let d=$(0,h,e);const y=d.formatToParts(1000.12),v=((o=y.find(i=>i.type==="group"))==null?void 0:o.value)??" ",M=((u=y.find(i=>i.type==="decimal"))==null?void 0:u.value)??".",x=W(n,v,M);if(Number.isNaN(parseFloat(x)))return m;const V=x.split(".");if(V[1]!=null&&V[1].length>=1){const i=V[1].length<=h?V[1].length:h;d=$(i,h,e)}let k=d.format(parseFloat(x));return t?h>0&&x.endsWith(".")&&!x.slice(0,-1).includes(".")&&(k+=M):k=W(k,v,M),m+k};class vt{constructor(t={}){P(this,"opts",{}),P(this,"memo",new Map);const e={...t};if(e.tokens!=null){e.tokens=e.tokensReplace?{...e.tokens}:{...O,...e.tokens};for(const s of Object.values(e.tokens))typeof s.pattern=="string"&&(s.pattern=new RegExp(s.pattern))}else e.tokens=O;Array.isArray(e.mask)&&(e.mask.length>1?e.mask=[...e.mask].sort((s,a)=>s.length-a.length):e.mask=e.mask[0]??""),e.mask===""&&(e.mask=null),this.opts=e}masked(t){return this.process(t,this.findMask(t))}unmasked(t){return this.process(t,this.findMask(t),!1)}isEager(){return this.opts.eager===!0}isReversed(){return this.opts.reversed===!0}completed(t){const e=this.findMask(t);if(this.opts.mask==null||e==null)return!1;const s=this.process(t,e).length;return typeof this.opts.mask=="string"?s>=this.opts.mask.length:s>=e.length}findMask(t){const e=this.opts.mask;if(e==null)return null;if(typeof e=="string")return e;if(typeof e=="function")return e(t);const s=this.process(t,e.slice(-1).pop()??"",!1);return e.find(a=>this.process(t,a,!1).length>=s.length)??""}escapeMask(t){const e=[],s=[];return t.split("").forEach((a,o)=>{a==="!"&&t[o-1]!=="!"?s.push(o-s.length):e.push(a)}),{mask:e.join(""),escaped:s}}process(t,e,s=!0){if(this.opts.number!=null)return ht(t,s,this.opts);if(e==null)return t;const a=`v=${t},mr=${e},m=${s?1:0}`;if(this.memo.has(a))return this.memo.get(a);const{mask:o,escaped:u}=this.escapeMask(e),m=[],h=this.opts.tokens!=null?this.opts.tokens:{},d=this.isReversed()?-1:1,y=this.isReversed()?"unshift":"push",v=this.isReversed()?0:o.length-1,M=this.isReversed()?()=>i>-1&&g>-1:()=>i<o.length&&g<t.length,x=A=>!this.isReversed()&&A<=v||this.isReversed()&&A>=v;let V,k=-1,i=this.isReversed()?o.length-1:0,g=this.isReversed()?t.length-1:0,R=!1;for(;M();){const A=o.charAt(i),b=h[A],r=(b==null?void 0:b.transform)!=null?b.transform(t.charAt(g)):t.charAt(g);if(!u.includes(i)&&b!=null?(r.match(b.pattern)!=null?(m[y](r),b.repeated?(k===-1?k=i:i===v&&i!==k&&(i=k-d),v===k&&(i-=d)):b.multiple&&(R=!0,i-=d),i+=d):b.multiple?R&&(i+=d,g-=d,R=!1):r===V?V=void 0:b.optional&&(i+=d,g-=d),g+=d):(s&&!this.isEager()&&m[y](A),r===A&&!this.isEager()?g+=d:V=A,this.isEager()||(i+=d)),this.isEager())for(;x(i)&&(h[o.charAt(i)]==null||u.includes(i));){if(s){if(m[y](o.charAt(i)),t.charAt(g)===o.charAt(i)){i+=d,g+=d;continue}}else o.charAt(i)===t.charAt(g)&&(g+=d);i+=d}}return this.memo.set(a,m.join("")),this.memo.get(a)}}const H=n=>JSON.parse(n.replaceAll("'",'"')),ft=(n,t={})=>{const e={...t};n.dataset.maska!=null&&n.dataset.maska!==""&&(e.mask=gt(n.dataset.maska)),n.dataset.maskaEager!=null&&(e.eager=D(n.dataset.maskaEager)),n.dataset.maskaReversed!=null&&(e.reversed=D(n.dataset.maskaReversed)),n.dataset.maskaTokensReplace!=null&&(e.tokensReplace=D(n.dataset.maskaTokensReplace)),n.dataset.maskaTokens!=null&&(e.tokens=kt(n.dataset.maskaTokens));const s={};return n.dataset.maskaNumberLocale!=null&&(s.locale=n.dataset.maskaNumberLocale),n.dataset.maskaNumberFraction!=null&&(s.fraction=parseInt(n.dataset.maskaNumberFraction)),n.dataset.maskaNumberUnsigned!=null&&(s.unsigned=D(n.dataset.maskaNumberUnsigned)),(n.dataset.maskaNumber!=null||Object.values(s).length>0)&&(e.number=s),e},D=n=>n!==""?!!JSON.parse(n):!0,gt=n=>n.startsWith("[")&&n.endsWith("]")?H(n):n,kt=n=>{if(n.startsWith("{")&&n.endsWith("}"))return H(n);const t={};return n.split("|").forEach(e=>{const s=e.split(":");t[s[0]]={pattern:new RegExp(s[1]),optional:s[2]==="optional",multiple:s[2]==="multiple",repeated:s[2]==="repeated"}}),t};class bt{constructor(t,e={}){P(this,"items",new Map),P(this,"eventAbortController"),P(this,"onInput",s=>{if(s instanceof CustomEvent&&s.type==="input"&&!s.isTrusted&&!s.bubbles)return;const a=s.target,o=this.items.get(a),u="inputType"in s&&s.inputType.startsWith("delete"),m=o.isEager(),h=u&&m&&o.unmasked(a.value)===""?"":a.value;this.fixCursor(a,u,()=>this.setValue(a,h))}),this.options=e,this.eventAbortController=new AbortController,this.init(this.getInputs(t))}update(t={}){this.options={...t},this.init(Array.from(this.items.keys()))}updateValue(t){t.value!==""&&t.value!==this.processInput(t).masked&&this.setValue(t,t.value)}destroy(){this.eventAbortController.abort(),this.items.clear()}init(t){const e=this.getOptions(this.options);for(const s of t){if(!this.items.has(s)){const{signal:o}=this.eventAbortController;s.addEventListener("input",this.onInput,{capture:!0,signal:o})}const a=new vt(ft(s,e));this.items.set(s,a),queueMicrotask(()=>this.updateValue(s)),s.selectionStart===null&&a.isEager()&&console.warn("Maska: input of `%s` type is not supported",s.type)}}getInputs(t){return typeof t=="string"?Array.from(document.querySelectorAll(t)):"length"in t?Array.from(t):[t]}getOptions(t){const{onMaska:e,preProcess:s,postProcess:a,...o}=t;return o}fixCursor(t,e,s){const a=t.selectionStart,o=t.value;if(s(),a===null||a===o.length&&!e)return;const u=t.value,m=o.slice(0,a),h=u.slice(0,a),d=this.processInput(t,m).unmasked,y=this.processInput(t,h).unmasked;let v=a;m!==h&&(v+=e?u.length-o.length:d.length-y.length),t.setSelectionRange(v,v)}setValue(t,e){const s=this.processInput(t,e);t.value=s.masked,this.options.onMaska!=null&&(Array.isArray(this.options.onMaska)?this.options.onMaska.forEach(a=>a(s)):this.options.onMaska(s)),t.dispatchEvent(new CustomEvent("maska",{detail:s})),t.dispatchEvent(new CustomEvent("input",{detail:s.masked}))}processInput(t,e){const s=this.items.get(t);let a=e??t.value;this.options.preProcess!=null&&(a=this.options.preProcess(a));let o=s.masked(a);return this.options.postProcess!=null&&(o=this.options.postProcess(o)),{masked:o,unmasked:s.unmasked(a),completed:s.completed(a)}}}const U=new WeakMap,_t=(n,t)=>{if(n.arg==null||n.instance==null)return;const e="setup"in n.instance.$.type;n.arg in n.instance?n.instance[n.arg]=t:e&&console.warn("Maska: please expose `%s` using defineExpose",n.arg)},yt=(n,t)=>{var e;const s=n instanceof HTMLInputElement?n:n.querySelector("input");if(s==null||(s==null?void 0:s.type)==="file")return;let a={};if(t.value!=null&&(a=typeof t.value=="string"?{mask:t.value}:{...t.value}),t.arg!=null){const o=u=>{const m=t.modifiers.unmasked?u.unmasked:t.modifiers.completed?u.completed:u.masked;_t(t,m)};a.onMaska=a.onMaska==null?o:Array.isArray(a.onMaska)?[...a.onMaska,o]:[a.onMaska,o]}U.has(s)?(e=U.get(s))==null||e.update(a):U.set(s,new bt(s,a))},Vt={__name:"money",props:{modelValue:{type:[Number],default:null}},emits:["update:modelValue"],setup(n,{emit:t}){const e=t,s=n,a=F({value:parseFloat(s.modelValue).toFixed(2),options:{mask:"9.99#,##",reversed:!0,tokens:{9:{pattern:/[0-9]/,repeated:!0}}},handler(o){e("update:modelValue",o.detail.unmasked/100)}});return K(()=>s.modelValue,o=>{a.value=parseFloat(o).toFixed(2)}),(o,u)=>{const m=f("v-text-field");return J((_(),N(m,{"model-value":l(a).value,onMaska:l(a).handler},null,8,["model-value","onMaska"])),[[l(yt),l(a).options]])}}},wt={class:"d-flex ga-1"},xt={__name:"actions",props:{actions:{type:Function,default:()=>[]}},setup(n){const t=n;return(e,s)=>{const a=f("v-btn"),o=Z("tooltip");return _(),E("div",wt,[(_(!0),E(B,null,z(t.actions(),u=>J((_(),N(a,G({ref_for:!0},u,{flat:"",rounded:"0",size:"40"}),null,16)),[[o,u.text??void 0]])),256))])}}};class At{constructor(){this.save=new Mt(this),this.search=new Et(this),this.delete=new Rt(this),this.storage=new Nt(this),this.events=[]}collection(){return"app"}defaults(){return{}}getDefaults(){return{id:null,...this.defaults(),created_at:null,updated_at:null}}toJson(){let t={};return Object.entries(this.getDefaults()).map(([e,s])=>{t[e]=s??null}),t}searchParams(){return{}}getSearchParams(){return{limit:20,order:"desc",order_by:"updated_at",...this.searchParams()}}on(t,e){this.events.push({name:t,call:e})}dispatch(t,...e){this.events.map(({name:s,call:a})=>{s==t&&a(...e)})}}class Mt{constructor(t){this.busy=!1,this.data=t.toJson(),this.on=(...e)=>t.on(...e),this.dispatch=(...e)=>t.dispatch(...e),this.toJson=()=>t.toJson(),this.collection=()=>t.collection()}set(t={}){return this.data={...this.toJson(),...t},this}fill(t={}){for(let e in t)this[e]=t[e];return this}async submit(){let t=this.data;const e=I();if(this.busy=!0,t.id){t.updated_at=T().format();const s=L(e,this.collection(),t.id);Q(s,t,{merge:!0}),this.dispatch("updated",t),this.dispatch("saved",t)}else{t.created_at=t.updated_at=T().format();const s=q(e,this.collection()),a=await X(s,t);t.id=a.id,this.dispatch("created",t),this.dispatch("saved",t)}this.busy=!1}}class Et{constructor(t){this.busy=!1,this.collection=t.collection(),this.params=t.getSearchParams(),this.data=[],this.on=(...e)=>t.on(...e),this.dispatch=(...e)=>t.dispatch(...e)}async submit(){this.busy=!0;const t=I();let s=[q(t,this.collection),Y(this.params.order_by,this.params.order),tt(this.params.limit)];const a=et(...s),o=await st(a);this.data=o.docs.map(u=>({...u.data(),id:u.id})),this.busy=!1}}class Rt{constructor(t){this.busy=!1,this.collection=()=>t.collection(),this.data=t.toJson(),this.on=(...e)=>t.on(...e),this.dispatch=(...e)=>t.dispatch(...e)}async submit(t){this.busy=!0,this.data=t;const e=I(),s=L(e,this.collection(),t.id);await at(s),this.dispatch("deleted",t),this.busy=!1}}class Nt{constructor(t){this.busy=!1,this.collection=()=>t.collection(),this.on=(...e)=>t.on(...e),this.dispatch=(...e)=>t.dispatch(...e)}async storeUploadData(t){const e=await nt(t);return{url:await ot(t),name:e.name,mime:e.contentType,size:e.size}}browse(){Object.assign(document.createElement("input"),{type:"file",onchange:t=>{t.target.files[0]&&this.upload(t.target.files[0])}}).click()}async upload(t){this.busy=!0;const e=lt(),s=await it(rt(e,t.name),t),a=await this.storeUploadData(s.ref);return this.busy=!1,a}remove(t){}}class Pt extends At{collection(){return"shop_product"}defaults(){return{id:null,sku:"",name:"",thumbnail:null,dimona_slug:"",amount:null,active:null,colors:[],sizes:[],prints:[]}}}const Ct={class:"pa-0"},Dt=["src"],St={class:"pa-1"},Ut={class:"pa-1",colspan:"4"},Ft=["src"],jt={__name:"shop_product",setup(n){const t=F(new Pt);t.search.submit(),t.on("saved",()=>{t.search.submit(),e.set(null)}),t.on("deleted",()=>{t.search.submit(),e.set(null)});const e=F({value:!1,set(s={}){t.save.set(s||{}),e.value=!!s}});return(s,a)=>{const o=f("v-chip"),u=Vt,m=xt,h=f("v-table"),d=f("v-container"),y=f("v-card-title"),v=f("v-text-field"),M=f("v-checkbox"),x=f("v-file-input"),V=f("v-card-text"),k=f("v-btn"),i=f("v-card-actions"),g=f("v-card"),R=f("v-form"),A=f("v-dialog"),b=ct;return _(),N(b,{name:"admin"},{default:w(()=>[p(d,null,{default:w(()=>[a[11]||(a[11]=c("div",{class:"d-flex justify-end"},null,-1)),p(h,{class:"border"},{default:w(()=>[a[9]||(a[9]=c("colgroup",null,[c("col",{width:"50px"}),c("col",{width:"*"}),c("col",{width:"50px"}),c("col",{width:"150px"}),c("col",{width:"0"})],-1)),a[10]||(a[10]=c("thead",null,[c("tr",null,[c("th"),c("th",null,"Produto"),c("th",null,"Ativo"),c("th",null,"Preço"),c("th",null,"Ações")])],-1)),c("tbody",null,[(_(!0),E(B,null,z(l(t).search.data,r=>(_(),E("tr",null,[c("td",Ct,[r.thumbnail?(_(),E("img",{key:0,src:r.thumbnail.url,alt:"",style:{width:"100%",height:"50px","object-fit":"cover"}},null,8,Dt)):C("",!0)]),c("td",null,dt(r.name),1),c("td",null,[p(o,{modelValue:r.active,"onUpdate:modelValue":S=>r.active=S,color:"success"},{default:w(()=>a[8]||(a[8]=[j("Ativo")])),_:2},1032,["modelValue","onUpdate:modelValue"])]),c("td",null,[p(u,{modelValue:r.amount,"onUpdate:modelValue":S=>r.amount=S,"hide-details":"",density:"compact",variant:"plain",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),c("td",St,[p(m,{actions:()=>[{icon:l(t).delete.busy&&l(t).delete.data.id==r.id?"eos-icons:loading":"mdi-pen",color:"primary",text:"Edit",onClick(){l(e).set(r)}},{icon:"mdi-delete",color:"error",text:"Delete",onClick(){l(t).delete.submit(r)}}]},null,8,["actions"])])]))),256)),c("tr",null,[c("td",Ut,[p(m,{class:"justify-end",actions:()=>[{icon:"mdi-plus",color:"success",text:"Edit",onClick(){l(e).set({})}}]},null,8,["actions"])])])])]),_:1})]),_:1}),p(A,{modelValue:l(e).value,"onUpdate:modelValue":a[7]||(a[7]=r=>l(e).value=r),"max-width":"700",scrollable:""},{default:w(()=>[p(R,{onSubmit:a[6]||(a[6]=ut(r=>l(t).save.submit(),["prevent"]))},{default:w(()=>[p(g,null,{default:w(()=>[p(y,null,{default:w(()=>a[12]||(a[12]=[j("Editar item")])),_:1}),p(V,null,{default:w(()=>[p(v,{label:"Nome",modelValue:l(t).save.data.name,"onUpdate:modelValue":a[0]||(a[0]=r=>l(t).save.data.name=r)},null,8,["modelValue"]),p(v,{label:"SKU",modelValue:l(t).save.data.sku,"onUpdate:modelValue":a[1]||(a[1]=r=>l(t).save.data.sku=r)},null,8,["modelValue"]),p(M,{label:l(t).save.data.active?"Ativo":"Inativo",modelValue:l(t).save.data.active,"onUpdate:modelValue":a[2]||(a[2]=r=>l(t).save.data.active=r),"true-value":!0,"false-value":null},null,8,["label","modelValue"]),p(u,{label:"Valor",modelValue:l(t).save.data.amount,"onUpdate:modelValue":a[3]||(a[3]=r=>l(t).save.data.amount=r),modelModifiers:{number:!0}},null,8,["modelValue"]),l(t).save.data.thumbnail?C("",!0):(_(),N(x,{key:0,label:"Thumbnail",loading:l(t).storage.busy,"onUpdate:modelValue":a[4]||(a[4]=async r=>{l(t).save.data.thumbnail=await l(t).storage.upload(r)})},null,8,["loading"])),l(t).save.data.thumbnail&&l(t).save.data.thumbnail.mime.startsWith("image/")?(_(),E("img",{key:1,src:l(t).save.data.thumbnail.url,alt:"",class:"bg-surface-light rounded",style:{width:"100%","max-height":"300px","object-fit":"contain"}},null,8,Ft)):C("",!0),l(t).save.data.thumbnail?(_(),N(v,{key:2,label:"Valor",modelValue:l(t).save.data.thumbnail.name,"onUpdate:modelValue":a[5]||(a[5]=r=>l(t).save.data.thumbnail.name=r)},null,8,["modelValue"])):C("",!0)]),_:1}),p(i,null,{default:w(()=>[p(k,{text:"Salvar",class:"bg-primary",type:"submit",loading:l(t).save.busy},null,8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}};export{jt as default};
