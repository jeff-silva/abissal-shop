const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./C0ZnLqaV.js","./C1Tl7LAG.js","./CahqTvgE.js","./DHwZOQgq.js","./j5k-7Ym2.js","./index.rXODTNaE.css","./DkRmm7mj.js","./admin.Chd_gRcJ.css","./Svodkn5M.js","./K2O3SsAC.js","./error-404.CoZKRZXM.css","./5Wsuepg9.js","./error-500.D6506J9O.css"])))=>i.map(i=>d[i]);
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ty(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const bt={},_a=[],Xi=()=>{},WM=()=>!1,ec=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ny=e=>e.startsWith("onUpdate:"),zt=Object.assign,iy=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},zM=Object.prototype.hasOwnProperty,vt=(e,t)=>zM.call(e,t),Be=Array.isArray,ba=e=>tc(e)==="[object Map]",DI=e=>tc(e)==="[object Set]",qM=e=>tc(e)==="[object RegExp]",je=e=>typeof e=="function",Rt=e=>typeof e=="string",Fr=e=>typeof e=="symbol",Ct=e=>e!==null&&typeof e=="object",MI=e=>(Ct(e)||je(e))&&je(e.then)&&je(e.catch),OI=Object.prototype.toString,tc=e=>OI.call(e),GM=e=>tc(e).slice(8,-1),NI=e=>tc(e)==="[object Object]",ry=e=>Rt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,wa=ty(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yf=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},KM=/-(\w)/g,Jn=Yf(e=>e.replace(KM,(t,n)=>n?n.toUpperCase():"")),YM=/\B([A-Z])/g,Ao=Yf(e=>e.replace(YM,"-$1").toLowerCase()),ar=Yf(e=>e.charAt(0).toUpperCase()+e.slice(1)),xm=Yf(e=>e?`on${ar(e)}`:""),cs=(e,t)=>!Object.is(e,t),Sa=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},LI=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},xv=e=>{const t=parseFloat(e);return isNaN(t)?e:t},FI=e=>{const t=Rt(e)?Number(e):NaN;return isNaN(t)?e:t};let Fw;const Qf=()=>Fw||(Fw=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xf(e){if(Be(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],r=Rt(i)?ZM(i):Xf(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(Rt(e)||Ct(e))return e}const QM=/;(?![^(]*\))/g,XM=/:([^]+)/,JM=/\/\*[^]*?\*\//g;function ZM(e){const t={};return e.replace(JM,"").split(QM).forEach(n=>{if(n){const i=n.split(XM);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Jf(e){let t="";if(Rt(e))t=e;else if(Be(e))for(let n=0;n<e.length;n++){const i=Jf(e[n]);i&&(t+=i+" ")}else if(Ct(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function eO(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Rt(t)&&(e.class=Jf(t)),n&&(e.style=Xf(n)),e}const tO="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",nO=ty(tO);function BI(e){return!!e||e===""}const $I=e=>!!(e&&e.__v_isRef===!0),UI=e=>Rt(e)?e:e==null?"":Be(e)||Ct(e)&&(e.toString===OI||!je(e.toString))?$I(e)?UI(e.value):JSON.stringify(e,HI,2):String(e),HI=(e,t)=>$I(t)?HI(e,t.value):ba(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,r],s)=>(n[Rm(i,s)+" =>"]=r,n),{})}:DI(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Rm(n))}:Fr(t)?Rm(t):Ct(t)&&!Be(t)&&!NI(t)?String(t):t,Rm=(e,t="")=>{var n;return Fr(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zn;class jI{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=zn,!t&&zn&&(this.index=(zn.scopes||(zn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=zn;try{return zn=this,t()}finally{zn=n}}}on(){zn=this}off(){zn=this.parent}stop(t){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function nc(e){return new jI(e)}function WI(){return zn}function $n(e,t=!1){zn&&zn.cleanups.push(e)}let wt;const Vm=new WeakSet;class zI{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,zn&&zn.active&&zn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Vm.has(this)&&(Vm.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||GI(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bw(this),KI(this);const t=wt,n=Ri;wt=this,Ri=!0;try{return this.fn()}finally{YI(this),wt=t,Ri=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ay(t);this.deps=this.depsTail=void 0,Bw(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Vm.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Rv(this)&&this.run()}get dirty(){return Rv(this)}}let qI=0,Jl,Zl;function GI(e,t=!1){if(e.flags|=8,t){e.next=Zl,Zl=e;return}e.next=Jl,Jl=e}function sy(){qI++}function oy(){if(--qI>0)return;if(Zl){let t=Zl;for(Zl=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Jl;){let t=Jl;for(Jl=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){e||(e=i)}t=n}}if(e)throw e}function KI(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function YI(e){let t,n=e.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),ay(i),iO(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}e.deps=t,e.depsTail=n}function Rv(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(QI(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function QI(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===yu))return;e.globalVersion=yu;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!Rv(e)){e.flags&=-3;return}const n=wt,i=Ri;wt=e,Ri=!0;try{KI(e);const r=e.fn(e._value);(t.version===0||cs(r,e._value))&&(e._value=r,t.version++)}catch(r){throw t.version++,r}finally{wt=n,Ri=i,YI(e),e.flags&=-3}}function ay(e,t=!1){const{dep:n,prevSub:i,nextSub:r}=e;if(i&&(i.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=i,e.nextSub=void 0),n.subs===e&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)ay(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function iO(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ri=!0;const XI=[];function xs(){XI.push(Ri),Ri=!1}function Rs(){const e=XI.pop();Ri=e===void 0?!0:e}function Bw(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=wt;wt=void 0;try{t()}finally{wt=n}}}let yu=0;class rO{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ly{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!wt||!Ri||wt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==wt)n=this.activeLink=new rO(wt,this),wt.deps?(n.prevDep=wt.depsTail,wt.depsTail.nextDep=n,wt.depsTail=n):wt.deps=wt.depsTail=n,JI(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=wt.depsTail,n.nextDep=void 0,wt.depsTail.nextDep=n,wt.depsTail=n,wt.deps===n&&(wt.deps=i)}return n}trigger(t){this.version++,yu++,this.notify(t)}notify(t){sy();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{oy()}}}function JI(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)JI(i)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const jd=new WeakMap,to=Symbol(""),Vv=Symbol(""),_u=Symbol("");function xn(e,t,n){if(Ri&&wt){let i=jd.get(e);i||jd.set(e,i=new Map);let r=i.get(n);r||(i.set(n,r=new ly),r.map=i,r.key=n),r.track()}}function Sr(e,t,n,i,r,s){const o=jd.get(e);if(!o){yu++;return}const a=l=>{l&&l.trigger()};if(sy(),t==="clear")o.forEach(a);else{const l=Be(e),u=l&&ry(n);if(l&&n==="length"){const c=Number(i);o.forEach((d,f)=>{(f==="length"||f===_u||!Fr(f)&&f>=c)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(_u)),t){case"add":l?u&&a(o.get("length")):(a(o.get(to)),ba(e)&&a(o.get(Vv)));break;case"delete":l||(a(o.get(to)),ba(e)&&a(o.get(Vv)));break;case"set":ba(e)&&a(o.get(to));break}}oy()}function sO(e,t){const n=jd.get(e);return n&&n.get(t)}function Jo(e){const t=Ne(e);return t===e?t:(xn(t,"iterate",_u),_i(e)?t:t.map(Rn))}function Zf(e){return xn(e=Ne(e),"iterate",_u),e}const oO={__proto__:null,[Symbol.iterator](){return Dm(this,Symbol.iterator,Rn)},concat(...e){return Jo(this).concat(...e.map(t=>Be(t)?Jo(t):t))},entries(){return Dm(this,"entries",e=>(e[1]=Rn(e[1]),e))},every(e,t){return yr(this,"every",e,t,void 0,arguments)},filter(e,t){return yr(this,"filter",e,t,n=>n.map(Rn),arguments)},find(e,t){return yr(this,"find",e,t,Rn,arguments)},findIndex(e,t){return yr(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return yr(this,"findLast",e,t,Rn,arguments)},findLastIndex(e,t){return yr(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return yr(this,"forEach",e,t,void 0,arguments)},includes(...e){return Mm(this,"includes",e)},indexOf(...e){return Mm(this,"indexOf",e)},join(e){return Jo(this).join(e)},lastIndexOf(...e){return Mm(this,"lastIndexOf",e)},map(e,t){return yr(this,"map",e,t,void 0,arguments)},pop(){return Ol(this,"pop")},push(...e){return Ol(this,"push",e)},reduce(e,...t){return $w(this,"reduce",e,t)},reduceRight(e,...t){return $w(this,"reduceRight",e,t)},shift(){return Ol(this,"shift")},some(e,t){return yr(this,"some",e,t,void 0,arguments)},splice(...e){return Ol(this,"splice",e)},toReversed(){return Jo(this).toReversed()},toSorted(e){return Jo(this).toSorted(e)},toSpliced(...e){return Jo(this).toSpliced(...e)},unshift(...e){return Ol(this,"unshift",e)},values(){return Dm(this,"values",Rn)}};function Dm(e,t,n){const i=Zf(e),r=i[t]();return i!==e&&!_i(e)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const aO=Array.prototype;function yr(e,t,n,i,r,s){const o=Zf(e),a=o!==e&&!_i(e),l=o[t];if(l!==aO[t]){const d=l.apply(e,s);return a?Rn(d):d}let u=n;o!==e&&(a?u=function(d,f){return n.call(this,Rn(d),f,e)}:n.length>2&&(u=function(d,f){return n.call(this,d,f,e)}));const c=l.call(o,u,i);return a&&r?r(c):c}function $w(e,t,n,i){const r=Zf(e);let s=n;return r!==e&&(_i(e)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,e)}):s=function(o,a,l){return n.call(this,o,Rn(a),l,e)}),r[t](s,...i)}function Mm(e,t,n){const i=Ne(e);xn(i,"iterate",_u);const r=i[t](...n);return(r===-1||r===!1)&&dy(n[0])?(n[0]=Ne(n[0]),i[t](...n)):r}function Ol(e,t,n=[]){xs(),sy();const i=Ne(e)[t].apply(e,n);return oy(),Rs(),i}const lO=ty("__proto__,__v_isRef,__isVue"),ZI=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Fr));function uO(e){Fr(e)||(e=String(e));const t=Ne(this);return xn(t,"has",e),t.hasOwnProperty(e)}class ek{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,i){if(n==="__v_skip")return t.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?_O:rk:s?ik:nk).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Be(t);if(!r){let l;if(o&&(l=oO[n]))return l;if(n==="hasOwnProperty")return uO}const a=Reflect.get(t,n,Mt(t)?t:i);return(Fr(n)?ZI.has(n):lO(n))||(r||xn(t,"get",n),s)?a:Mt(a)?o&&ry(n)?a:a.value:Ct(a)?r?ic(a):Lt(a):a}}class tk extends ek{constructor(t=!1){super(!1,t)}set(t,n,i,r){let s=t[n];if(!this._isShallow){const l=ys(s);if(!_i(i)&&!ys(i)&&(s=Ne(s),i=Ne(i)),!Be(t)&&Mt(s)&&!Mt(i))return l?!1:(s.value=i,!0)}const o=Be(t)&&ry(n)?Number(n)<t.length:vt(t,n),a=Reflect.set(t,n,i,Mt(t)?t:r);return t===Ne(r)&&(o?cs(i,s)&&Sr(t,"set",n,i):Sr(t,"add",n,i)),a}deleteProperty(t,n){const i=vt(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&i&&Sr(t,"delete",n,void 0),r}has(t,n){const i=Reflect.has(t,n);return(!Fr(n)||!ZI.has(n))&&xn(t,"has",n),i}ownKeys(t){return xn(t,"iterate",Be(t)?"length":to),Reflect.ownKeys(t)}}class cO extends ek{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const dO=new tk,fO=new cO,hO=new tk(!0);const Dv=e=>e,Hc=e=>Reflect.getPrototypeOf(e);function mO(e,t,n){return function(...i){const r=this.__v_raw,s=Ne(r),o=ba(s),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=r[e](...i),c=n?Dv:t?Mv:Rn;return!t&&xn(s,"iterate",l?Vv:to),{next(){const{value:d,done:f}=u.next();return f?{value:d,done:f}:{value:a?[c(d[0]),c(d[1])]:c(d),done:f}},[Symbol.iterator](){return this}}}}function jc(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function vO(e,t){const n={get(r){const s=this.__v_raw,o=Ne(s),a=Ne(r);e||(cs(r,a)&&xn(o,"get",r),xn(o,"get",a));const{has:l}=Hc(o),u=t?Dv:e?Mv:Rn;if(l.call(o,r))return u(s.get(r));if(l.call(o,a))return u(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!e&&xn(Ne(r),"iterate",to),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=Ne(s),a=Ne(r);return e||(cs(r,a)&&xn(o,"has",r),xn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Ne(a),u=t?Dv:e?Mv:Rn;return!e&&xn(l,"iterate",to),a.forEach((c,d)=>r.call(s,u(c),u(d),o))}};return zt(n,e?{add:jc("add"),set:jc("set"),delete:jc("delete"),clear:jc("clear")}:{add(r){!t&&!_i(r)&&!ys(r)&&(r=Ne(r));const s=Ne(this);return Hc(s).has.call(s,r)||(s.add(r),Sr(s,"add",r,r)),this},set(r,s){!t&&!_i(s)&&!ys(s)&&(s=Ne(s));const o=Ne(this),{has:a,get:l}=Hc(o);let u=a.call(o,r);u||(r=Ne(r),u=a.call(o,r));const c=l.call(o,r);return o.set(r,s),u?cs(s,c)&&Sr(o,"set",r,s):Sr(o,"add",r,s),this},delete(r){const s=Ne(this),{has:o,get:a}=Hc(s);let l=o.call(s,r);l||(r=Ne(r),l=o.call(s,r)),a&&a.call(s,r);const u=s.delete(r);return l&&Sr(s,"delete",r,void 0),u},clear(){const r=Ne(this),s=r.size!==0,o=r.clear();return s&&Sr(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=mO(r,e,t)}),n}function uy(e,t){const n=vO(e,t);return(i,r,s)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?i:Reflect.get(vt(n,r)&&r in i?n:i,r,s)}const gO={get:uy(!1,!1)},pO={get:uy(!1,!0)},yO={get:uy(!0,!1)};const nk=new WeakMap,ik=new WeakMap,rk=new WeakMap,_O=new WeakMap;function bO(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wO(e){return e.__v_skip||!Object.isExtensible(e)?0:bO(GM(e))}function Lt(e){return ys(e)?e:cy(e,!1,dO,gO,nk)}function Tr(e){return cy(e,!1,hO,pO,ik)}function ic(e){return cy(e,!0,fO,yO,rk)}function cy(e,t,n,i,r){if(!Ct(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=r.get(e);if(s)return s;const o=wO(e);if(o===0)return e;const a=new Proxy(e,o===2?i:n);return r.set(e,a),a}function no(e){return ys(e)?no(e.__v_raw):!!(e&&e.__v_isReactive)}function ys(e){return!!(e&&e.__v_isReadonly)}function _i(e){return!!(e&&e.__v_isShallow)}function dy(e){return e?!!e.__v_raw:!1}function Ne(e){const t=e&&e.__v_raw;return t?Ne(t):e}function Wd(e){return!vt(e,"__v_skip")&&Object.isExtensible(e)&&LI(e,"__v_skip",!0),e}const Rn=e=>Ct(e)?Lt(e):e,Mv=e=>Ct(e)?ic(e):e;function Mt(e){return e?e.__v_isRef===!0:!1}function re(e){return sk(e,!1)}function ve(e){return sk(e,!0)}function sk(e,t){return Mt(e)?e:new SO(e,t)}class SO{constructor(t,n){this.dep=new ly,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Ne(t),this._value=n?t:Rn(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,i=this.__v_isShallow||_i(t)||ys(t);t=i?t:Ne(t),cs(t,n)&&(this._rawValue=t,this._value=i?t:Rn(t),this.dep.trigger())}}function Ye(e){return Mt(e)?e.value:e}const CO={get:(e,t,n)=>t==="__v_raw"?e:Ye(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const r=e[t];return Mt(r)&&!Mt(n)?(r.value=n,!0):Reflect.set(e,t,n,i)}};function ok(e){return no(e)?e:new Proxy(e,CO)}function Vs(e){const t=Be(e)?new Array(e.length):{};for(const n in e)t[n]=ak(e,n);return t}class TO{constructor(t,n,i){this._object=t,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return sO(Ne(this._object),this._key)}}class IO{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Q(e,t,n){return Mt(e)?e:je(e)?new IO(e):Ct(e)&&arguments.length>1?ak(e,t,n):re(e)}function ak(e,t,n){const i=e[t];return Mt(i)?i:new TO(e,t,n)}class kO{constructor(t,n,i){this.fn=t,this.setter=n,this._value=void 0,this.dep=new ly(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=yu-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&wt!==this)return GI(this,!0),!0}get value(){const t=this.dep.track();return QI(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function EO(e,t,n=!1){let i,r;return je(e)?i=e:(i=e.get,r=e.set),new kO(i,r,n)}const Wc={},zd=new WeakMap;let qs;function AO(e,t=!1,n=qs){if(n){let i=zd.get(n);i||zd.set(n,i=[]),i.push(e)}}function PO(e,t,n=bt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,u=x=>r?x:_i(x)||r===!1||r===0?Cr(x,1):Cr(x);let c,d,f,m,g=!1,y=!1;if(Mt(e)?(d=()=>e.value,g=_i(e)):no(e)?(d=()=>u(e),g=!0):Be(e)?(y=!0,g=e.some(x=>no(x)||_i(x)),d=()=>e.map(x=>{if(Mt(x))return x.value;if(no(x))return u(x);if(je(x))return l?l(x,2):x()})):je(e)?t?d=l?()=>l(e,2):e:d=()=>{if(f){xs();try{f()}finally{Rs()}}const x=qs;qs=c;try{return l?l(e,3,[m]):e(m)}finally{qs=x}}:d=Xi,t&&r){const x=d,V=r===!0?1/0:r;d=()=>Cr(x(),V)}const p=WI(),S=()=>{c.stop(),p&&p.active&&iy(p.effects,c)};if(s&&t){const x=t;t=(...V)=>{x(...V),S()}}let w=y?new Array(e.length).fill(Wc):Wc;const T=x=>{if(!(!(c.flags&1)||!c.dirty&&!x))if(t){const V=c.run();if(r||g||(y?V.some((D,A)=>cs(D,w[A])):cs(V,w))){f&&f();const D=qs;qs=c;try{const A=[V,w===Wc?void 0:y&&w[0]===Wc?[]:w,m];l?l(t,3,A):t(...A),w=V}finally{qs=D}}}else c.run()};return a&&a(T),c=new zI(d),c.scheduler=o?()=>o(T,!1):T,m=x=>AO(x,!1,c),f=c.onStop=()=>{const x=zd.get(c);if(x){if(l)l(x,4);else for(const V of x)V();zd.delete(c)}},t?i?T(!0):w=c.run():o?o(T.bind(null,!0),!0):c.run(),S.pause=c.pause.bind(c),S.resume=c.resume.bind(c),S.stop=S,S}function Cr(e,t=1/0,n){if(t<=0||!Ct(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Mt(e))Cr(e.value,t,n);else if(Be(e))for(let i=0;i<e.length;i++)Cr(e[i],t,n);else if(DI(e)||ba(e))e.forEach(i=>{Cr(i,t,n)});else if(NI(e)){for(const i in e)Cr(e[i],t,n);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&Cr(e[i],t,n)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rc(e,t,n,i){try{return i?e(...i):e()}catch(r){Za(r,t,n)}}function Di(e,t,n,i){if(je(e)){const r=rc(e,t,n,i);return r&&MI(r)&&r.catch(s=>{Za(s,t,n)}),r}if(Be(e)){const r=[];for(let s=0;s<e.length;s++)r.push(Di(e[s],t,n,i));return r}}function Za(e,t,n,i=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||bt;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,l,u)===!1)return}a=a.parent}if(s){xs(),rc(s,null,10,[e,l,u]),Rs();return}}xO(e,n,r,i,o)}function xO(e,t,n,i=!0,r=!1){if(r)throw e;console.error(e)}const qn=[];let qi=-1;const Ca=[];let Xr=null,sa=0;const lk=Promise.resolve();let qd=null;function Ke(e){const t=qd||lk;return e?t.then(this?e.bind(this):e):t}function RO(e){let t=qi+1,n=qn.length;for(;t<n;){const i=t+n>>>1,r=qn[i],s=bu(r);s<e||s===e&&r.flags&2?t=i+1:n=i}return t}function fy(e){if(!(e.flags&1)){const t=bu(e),n=qn[qn.length-1];!n||!(e.flags&2)&&t>=bu(n)?qn.push(e):qn.splice(RO(t),0,e),e.flags|=1,uk()}}function uk(){qd||(qd=lk.then(ck))}function Ov(e){Be(e)?Ca.push(...e):Xr&&e.id===-1?Xr.splice(sa+1,0,e):e.flags&1||(Ca.push(e),e.flags|=1),uk()}function Uw(e,t,n=qi+1){for(;n<qn.length;n++){const i=qn[n];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;qn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Gd(e){if(Ca.length){const t=[...new Set(Ca)].sort((n,i)=>bu(n)-bu(i));if(Ca.length=0,Xr){Xr.push(...t);return}for(Xr=t,sa=0;sa<Xr.length;sa++){const n=Xr[sa];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Xr=null,sa=0}}const bu=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ck(e){try{for(qi=0;qi<qn.length;qi++){const t=qn[qi];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),rc(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;qi<qn.length;qi++){const t=qn[qi];t&&(t.flags&=-2)}qi=-1,qn.length=0,Gd(),qd=null,(qn.length||Ca.length)&&ck()}}let sn=null,dk=null;function Kd(e){const t=sn;return sn=e,dk=e&&e.type.__scopeId||null,t}function fk(e,t=sn,n){if(!t||e._n)return e;const i=(...r)=>{i._d&&n0(-1);const s=Kd(t);let o;try{o=e(...r)}finally{Kd(s),i._d&&n0(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Vt(e,t){if(sn===null)return e;const n=sh(sn),i=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[s,o,a,l=bt]=t[r];s&&(je(s)&&(s={mounted:s,updated:s}),s.deep&&Cr(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function Gi(e,t,n,i){const r=e.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(xs(),Di(l,n,8,[e.el,a,e,t]),Rs())}}const hk=Symbol("_vte"),mk=e=>e.__isTeleport,eu=e=>e&&(e.disabled||e.disabled===""),Hw=e=>e&&(e.defer||e.defer===""),jw=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Ww=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Nv=(e,t)=>{const n=e&&e.to;return Rt(n)?t?t(n):null:n},vk={name:"Teleport",__isTeleport:!0,process(e,t,n,i,r,s,o,a,l,u){const{mc:c,pc:d,pbc:f,o:{insert:m,querySelector:g,createText:y,createComment:p}}=u,S=eu(t.props);let{shapeFlag:w,children:T,dynamicChildren:x}=t;if(e==null){const V=t.el=y(""),D=t.anchor=y("");m(V,n,i),m(D,n,i);const A=(_,I)=>{w&16&&(r&&r.isCE&&(r.ce._teleportTarget=_),c(T,_,I,r,s,o,a,l))},b=()=>{const _=t.target=Nv(t.props,g),I=gk(_,t,y,m);_&&(o!=="svg"&&jw(_)?o="svg":o!=="mathml"&&Ww(_)&&(o="mathml"),S||(A(_,I),bd(t,!1)))};S&&(A(n,D),bd(t,!0)),Hw(t.props)?nn(()=>{b(),t.el.__isMounted=!0},s):b()}else{if(Hw(t.props)&&!e.el.__isMounted){nn(()=>{vk.process(e,t,n,i,r,s,o,a,l,u),delete e.el.__isMounted},s);return}t.el=e.el,t.targetStart=e.targetStart;const V=t.anchor=e.anchor,D=t.target=e.target,A=t.targetAnchor=e.targetAnchor,b=eu(e.props),_=b?n:D,I=b?V:A;if(o==="svg"||jw(D)?o="svg":(o==="mathml"||Ww(D))&&(o="mathml"),x?(f(e.dynamicChildren,x,_,r,s,o,a),wy(e,t,!0)):l||d(e,t,_,I,r,s,o,a,!1),S)b?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):zc(t,n,V,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const E=t.target=Nv(t.props,g);E&&zc(t,E,null,u,0)}else b&&zc(t,D,A,u,1);bd(t,S)}},remove(e,t,n,{um:i,o:{remove:r}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:u,targetAnchor:c,target:d,props:f}=e;if(d&&(r(u),r(c)),s&&r(l),o&16){const m=s||!eu(f);for(let g=0;g<a.length;g++){const y=a[g];i(y,t,n,m,!!y.dynamicChildren)}}},move:zc,hydrate:VO};function zc(e,t,n,{o:{insert:i},m:r},s=2){s===0&&i(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:l,children:u,props:c}=e,d=s===2;if(d&&i(o,t,n),(!d||eu(c))&&l&16)for(let f=0;f<u.length;f++)r(u[f],t,n,2);d&&i(a,t,n)}function VO(e,t,n,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:u,createText:c}},d){const f=t.target=Nv(t.props,l);if(f){const m=eu(t.props),g=f._lpa||f.firstChild;if(t.shapeFlag&16)if(m)t.anchor=d(o(e),t,a(e),n,i,r,s),t.targetStart=g,t.targetAnchor=g&&o(g);else{t.anchor=o(e);let y=g;for(;y;){if(y&&y.nodeType===8){if(y.data==="teleport start anchor")t.targetStart=y;else if(y.data==="teleport anchor"){t.targetAnchor=y,f._lpa=t.targetAnchor&&o(t.targetAnchor);break}}y=o(y)}t.targetAnchor||gk(f,t,c,u),d(g&&o(g),t,f,n,i,r,s)}bd(t,m)}return t.anchor&&o(t.anchor)}const DO=vk;function bd(e,t){const n=e.ctx;if(n&&n.ut){let i,r;for(t?(i=e.el,r=e.anchor):(i=e.targetStart,r=e.targetAnchor);i&&i!==r;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function gk(e,t,n,i){const r=t.targetStart=n(""),s=t.targetAnchor=n("");return r[hk]=s,e&&(i(r,e),i(s,e)),s}const Jr=Symbol("_leaveCb"),qc=Symbol("_enterCb");function pk(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qt(()=>{e.isMounted=!0}),Zt(()=>{e.isUnmounting=!0}),e}const mi=[Function,Array],yk={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:mi,onEnter:mi,onAfterEnter:mi,onEnterCancelled:mi,onBeforeLeave:mi,onLeave:mi,onAfterLeave:mi,onLeaveCancelled:mi,onBeforeAppear:mi,onAppear:mi,onAfterAppear:mi,onAppearCancelled:mi},_k=e=>{const t=e.subTree;return t.component?_k(t.component):t},MO={name:"BaseTransition",props:yk,setup(e,{slots:t}){const n=el(),i=pk();return()=>{const r=t.default&&hy(t.default(),!0);if(!r||!r.length)return;const s=bk(r),o=Ne(e),{mode:a}=o;if(i.isLeaving)return Om(s);const l=zw(s);if(!l)return Om(s);let u=wu(l,o,i,n,d=>u=d);l.type!==Qt&&_s(l,u);let c=n.subTree&&zw(n.subTree);if(c&&c.type!==Qt&&!Ei(l,c)&&_k(n).type!==Qt){let d=wu(c,o,i,n);if(_s(c,d),a==="out-in"&&l.type!==Qt)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,c=void 0},Om(s);a==="in-out"&&l.type!==Qt?d.delayLeave=(f,m,g)=>{const y=wk(i,c);y[String(c.key)]=c,f[Jr]=()=>{m(),f[Jr]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{g(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return s}}};function bk(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Qt){t=n;break}}return t}const OO=MO;function wk(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function wu(e,t,n,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:f,onLeave:m,onAfterLeave:g,onLeaveCancelled:y,onBeforeAppear:p,onAppear:S,onAfterAppear:w,onAppearCancelled:T}=t,x=String(e.key),V=wk(n,e),D=(_,I)=>{_&&Di(_,i,9,I)},A=(_,I)=>{const E=I[1];D(_,I),Be(_)?_.every(k=>k.length<=1)&&E():_.length<=1&&E()},b={mode:o,persisted:a,beforeEnter(_){let I=l;if(!n.isMounted)if(s)I=p||l;else return;_[Jr]&&_[Jr](!0);const E=V[x];E&&Ei(e,E)&&E.el[Jr]&&E.el[Jr](),D(I,[_])},enter(_){let I=u,E=c,k=d;if(!n.isMounted)if(s)I=S||u,E=w||c,k=T||d;else return;let R=!1;const B=_[qc]=$=>{R||(R=!0,$?D(k,[_]):D(E,[_]),b.delayedLeave&&b.delayedLeave(),_[qc]=void 0)};I?A(I,[_,B]):B()},leave(_,I){const E=String(e.key);if(_[qc]&&_[qc](!0),n.isUnmounting)return I();D(f,[_]);let k=!1;const R=_[Jr]=B=>{k||(k=!0,I(),B?D(y,[_]):D(g,[_]),_[Jr]=void 0,V[E]===e&&delete V[E])};V[E]=e,m?A(m,[_,R]):R()},clone(_){const I=wu(_,t,n,i,r);return r&&r(I),I}};return b}function Om(e){if(sc(e))return e=tr(e),e.children=null,e}function zw(e){if(!sc(e))return mk(e.type)&&e.children?bk(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&je(n.default))return n.default()}}function _s(e,t){e.shapeFlag&6&&e.component?(e.transition=t,_s(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function hy(e,t=!1,n){let i=[],r=0;for(let s=0;s<e.length;s++){let o=e[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Ce?(o.patchFlag&128&&r++,i=i.concat(hy(o.children,t,a))):(t||o.type!==Qt)&&i.push(a!=null?tr(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Po(e,t){return je(e)?zt({name:e.name},t,{setup:e}):e}function my(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Su(e,t,n,i,r=!1){if(Be(e)){e.forEach((g,y)=>Su(g,t&&(Be(t)?t[y]:t),n,i,r));return}if(ds(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Su(e,t,n,i.component.subTree);return}const s=i.shapeFlag&4?sh(i.component):i.el,o=r?null:s,{i:a,r:l}=e,u=t&&t.r,c=a.refs===bt?a.refs={}:a.refs,d=a.setupState,f=Ne(d),m=d===bt?()=>!1:g=>vt(f,g);if(u!=null&&u!==l&&(Rt(u)?(c[u]=null,m(u)&&(d[u]=null)):Mt(u)&&(u.value=null)),je(l))rc(l,a,12,[o,c]);else{const g=Rt(l),y=Mt(l);if(g||y){const p=()=>{if(e.f){const S=g?m(l)?d[l]:c[l]:l.value;r?Be(S)&&iy(S,s):Be(S)?S.includes(s)||S.push(s):g?(c[l]=[s],m(l)&&(d[l]=c[l])):(l.value=[s],e.k&&(c[e.k]=l.value))}else g?(c[l]=o,m(l)&&(d[l]=o)):y&&(l.value=o,e.k&&(c[e.k]=o))};o?(p.id=-1,nn(p,n)):p()}}}let qw=!1;const Zo=()=>{qw||(console.error("Hydration completed but contains mismatches."),qw=!0)},NO=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",LO=e=>e.namespaceURI.includes("MathML"),Gc=e=>{if(e.nodeType===1){if(NO(e))return"svg";if(LO(e))return"mathml"}},fa=e=>e.nodeType===8;function FO(e){const{mt:t,p:n,o:{patchProp:i,createText:r,nextSibling:s,parentNode:o,remove:a,insert:l,createComment:u}}=e,c=(T,x)=>{if(!x.hasChildNodes()){n(null,T,x),Gd(),x._vnode=T;return}d(x.firstChild,T,null,null,null),Gd(),x._vnode=T},d=(T,x,V,D,A,b=!1)=>{b=b||!!x.dynamicChildren;const _=fa(T)&&T.data==="[",I=()=>y(T,x,V,D,A,_),{type:E,ref:k,shapeFlag:R,patchFlag:B}=x;let $=T.nodeType;x.el=T,B===-2&&(b=!1,x.dynamicChildren=null);let U=null;switch(E){case fs:$!==3?x.children===""?(l(x.el=r(""),o(T),T),U=T):U=I():(T.data!==x.children&&(Zo(),T.data=x.children),U=s(T));break;case Qt:w(T)?(U=s(T),S(x.el=T.content.firstChild,T,V)):$!==8||_?U=I():U=s(T);break;case nu:if(_&&(T=s(T),$=T.nodeType),$===1||$===3){U=T;const q=!x.children.length;for(let F=0;F<x.staticCount;F++)q&&(x.children+=U.nodeType===1?U.outerHTML:U.data),F===x.staticCount-1&&(x.anchor=U),U=s(U);return _?s(U):U}else I();break;case Ce:_?U=g(T,x,V,D,A,b):U=I();break;default:if(R&1)($!==1||x.type.toLowerCase()!==T.tagName.toLowerCase())&&!w(T)?U=I():U=f(T,x,V,D,A,b);else if(R&6){x.slotScopeIds=A;const q=o(T);if(_?U=p(T):fa(T)&&T.data==="teleport start"?U=p(T,T.data,"teleport end"):U=s(T),t(x,q,null,V,D,Gc(q),b),ds(x)&&!x.type.__asyncResolved){let F;_?(F=v(Ce),F.anchor=U?U.previousSibling:q.lastChild):F=T.nodeType===3?wi(""):v("div"),F.el=T,x.component.subTree=F}}else R&64?$!==8?U=I():U=x.type.hydrate(T,x,V,D,A,b,e,m):R&128&&(U=x.type.hydrate(T,x,V,D,Gc(o(T)),A,b,e,d))}return k!=null&&Su(k,null,D,x),U},f=(T,x,V,D,A,b)=>{b=b||!!x.dynamicChildren;const{type:_,props:I,patchFlag:E,shapeFlag:k,dirs:R,transition:B}=x,$=_==="input"||_==="option";if($||E!==-1){R&&Gi(x,null,V,"created");let U=!1;if(w(T)){U=Hk(null,B)&&V&&V.vnode.props&&V.vnode.props.appear;const F=T.content.firstChild;U&&B.beforeEnter(F),S(F,T,V),x.el=T=F}if(k&16&&!(I&&(I.innerHTML||I.textContent))){let F=m(T.firstChild,x,T,V,D,A,b);for(;F;){Kc(T,1)||Zo();const H=F;F=F.nextSibling,a(H)}}else if(k&8){let F=x.children;F[0]===`
`&&(T.tagName==="PRE"||T.tagName==="TEXTAREA")&&(F=F.slice(1)),T.textContent!==F&&(Kc(T,0)||Zo(),T.textContent=x.children)}if(I){if($||!b||E&48){const F=T.tagName.includes("-");for(const H in I)($&&(H.endsWith("value")||H==="indeterminate")||ec(H)&&!wa(H)||H[0]==="."||F)&&i(T,H,null,I[H],void 0,V)}else if(I.onClick)i(T,"onClick",null,I.onClick,void 0,V);else if(E&4&&no(I.style))for(const F in I.style)I.style[F]}let q;(q=I&&I.onVnodeBeforeMount)&&Kn(q,V,x),R&&Gi(x,null,V,"beforeMount"),((q=I&&I.onVnodeMounted)||R||U)&&Kk(()=>{q&&Kn(q,V,x),U&&B.enter(T),R&&Gi(x,null,V,"mounted")},D)}return T.nextSibling},m=(T,x,V,D,A,b,_)=>{_=_||!!x.dynamicChildren;const I=x.children,E=I.length;for(let k=0;k<E;k++){const R=_?I[k]:I[k]=ni(I[k]),B=R.type===fs;T?(B&&!_&&k+1<E&&ni(I[k+1]).type===fs&&(l(r(T.data.slice(R.children.length)),V,s(T)),T.data=R.children),T=d(T,R,D,A,b,_)):B&&!R.children?l(R.el=r(""),V):(Kc(V,1)||Zo(),n(null,R,V,null,D,A,Gc(V),b))}return T},g=(T,x,V,D,A,b)=>{const{slotScopeIds:_}=x;_&&(A=A?A.concat(_):_);const I=o(T),E=m(s(T),x,I,V,D,A,b);return E&&fa(E)&&E.data==="]"?s(x.anchor=E):(Zo(),l(x.anchor=u("]"),I,E),E)},y=(T,x,V,D,A,b)=>{if(Kc(T.parentElement,1)||Zo(),x.el=null,b){const E=p(T);for(;;){const k=s(T);if(k&&k!==E)a(k);else break}}const _=s(T),I=o(T);return a(T),n(null,x,I,_,V,D,Gc(I),A),V&&(V.vnode.el=x.el,rh(V,x.el)),_},p=(T,x="[",V="]")=>{let D=0;for(;T;)if(T=s(T),T&&fa(T)&&(T.data===x&&D++,T.data===V)){if(D===0)return s(T);D--}return T},S=(T,x,V)=>{const D=x.parentNode;D&&D.replaceChild(T,x);let A=V;for(;A;)A.vnode.el===x&&(A.vnode.el=A.subTree.el=T),A=A.parent},w=T=>T.nodeType===1&&T.tagName==="TEMPLATE";return[c,d]}const Gw="data-allow-mismatch",BO={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Kc(e,t){if(t===0||t===1)for(;e&&!e.hasAttribute(Gw);)e=e.parentElement;const n=e&&e.getAttribute(Gw);if(n==null)return!1;if(n==="")return!0;{const i=n.split(",");return t===0&&i.includes("children")?!0:n.split(",").includes(BO[t])}}Qf().requestIdleCallback;Qf().cancelIdleCallback;function $O(e,t){if(fa(e)&&e.data==="["){let n=1,i=e.nextSibling;for(;i;){if(i.nodeType===1){if(t(i)===!1)break}else if(fa(i))if(i.data==="]"){if(--n===0)break}else i.data==="["&&n++;i=i.nextSibling}}else t(e)}const ds=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Yd(e){je(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:i,delay:r=200,hydrate:s,timeout:o,suspensible:a=!0,onError:l}=e;let u=null,c,d=0;const f=()=>(d++,u=null,m()),m=()=>{let g;return u||(g=u=t().catch(y=>{if(y=y instanceof Error?y:new Error(String(y)),l)return new Promise((p,S)=>{l(y,()=>p(f()),()=>S(y),d+1)});throw y}).then(y=>g!==u&&u?u:(y&&(y.__esModule||y[Symbol.toStringTag]==="Module")&&(y=y.default),c=y,y)))};return Po({name:"AsyncComponentWrapper",__asyncLoader:m,__asyncHydrate(g,y,p){const S=s?()=>{const w=s(p,T=>$O(g,T));w&&(y.bum||(y.bum=[])).push(w)}:p;c?S():m().then(()=>!y.isUnmounted&&S())},get __asyncResolved(){return c},setup(){const g=rn;if(my(g),c)return()=>Nm(c,g);const y=T=>{u=null,Za(T,g,13,!i)};if(a&&g.suspense||Ma)return m().then(T=>()=>Nm(T,g)).catch(T=>(y(T),()=>i?v(i,{error:T}):null));const p=re(!1),S=re(),w=re(!!r);return r&&setTimeout(()=>{w.value=!1},r),o!=null&&setTimeout(()=>{if(!p.value&&!S.value){const T=new Error(`Async component timed out after ${o}ms.`);y(T),S.value=T}},o),m().then(()=>{p.value=!0,g.parent&&sc(g.parent.vnode)&&g.parent.update()}).catch(T=>{y(T),S.value=T}),()=>{if(p.value&&c)return Nm(c,g);if(S.value&&i)return v(i,{error:S.value});if(n&&!w.value)return v(n)}}})}function Nm(e,t){const{ref:n,props:i,children:r,ce:s}=t.vnode,o=v(e,i,r);return o.ref=n,o.ce=s,delete t.vnode.ce,o}const sc=e=>e.type.__isKeepAlive,UO={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=el(),i=n.ctx;if(!i.renderer)return()=>{const w=t.default&&t.default();return w&&w.length===1?w[0]:w};const r=new Map,s=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:u,um:c,o:{createElement:d}}}=i,f=d("div");i.activate=(w,T,x,V,D)=>{const A=w.component;u(w,T,x,0,a),l(A.vnode,w,T,x,A,a,V,w.slotScopeIds,D),nn(()=>{A.isDeactivated=!1,A.a&&Sa(A.a);const b=w.props&&w.props.onVnodeMounted;b&&Kn(b,A.parent,w)},a)},i.deactivate=w=>{const T=w.component;Xd(T.m),Xd(T.a),u(w,f,null,1,a),nn(()=>{T.da&&Sa(T.da);const x=w.props&&w.props.onVnodeUnmounted;x&&Kn(x,T.parent,w),T.isDeactivated=!0},a)};function m(w){Lm(w),c(w,n,a,!0)}function g(w){r.forEach((T,x)=>{const V=Wv(T.type);V&&!w(V)&&y(x)})}function y(w){const T=r.get(w);T&&(!o||!Ei(T,o))?m(T):o&&Lm(o),r.delete(w),s.delete(w)}pe(()=>[e.include,e.exclude],([w,T])=>{w&&g(x=>zl(w,x)),T&&g(x=>!zl(T,x))},{flush:"post",deep:!0});let p=null;const S=()=>{p!=null&&(Jd(n.subTree.type)?nn(()=>{r.set(p,Yc(n.subTree))},n.subTree.suspense):r.set(p,Yc(n.subTree)))};return qt(S),nh(S),Zt(()=>{r.forEach(w=>{const{subTree:T,suspense:x}=n,V=Yc(T);if(w.type===V.type&&w.key===V.key){Lm(V);const D=V.component.da;D&&nn(D,x);return}m(w)})}),()=>{if(p=null,!t.default)return o=null;const w=t.default(),T=w[0];if(w.length>1)return o=null,w;if(!bs(T)||!(T.shapeFlag&4)&&!(T.shapeFlag&128))return o=null,T;let x=Yc(T);if(x.type===Qt)return o=null,x;const V=x.type,D=Wv(ds(x)?x.type.__asyncResolved||{}:V),{include:A,exclude:b,max:_}=e;if(A&&(!D||!zl(A,D))||b&&D&&zl(b,D))return x.shapeFlag&=-257,o=x,T;const I=x.key==null?V:x.key,E=r.get(I);return x.el&&(x=tr(x),T.shapeFlag&128&&(T.ssContent=x)),p=I,E?(x.el=E.el,x.component=E.component,x.transition&&_s(x,x.transition),x.shapeFlag|=512,s.delete(I),s.add(I)):(s.add(I),_&&s.size>parseInt(_,10)&&y(s.values().next().value)),x.shapeFlag|=256,o=x,Jd(T.type)?T:x}}},HO=UO;function zl(e,t){return Be(e)?e.some(n=>zl(n,t)):Rt(e)?e.split(",").includes(t):qM(e)?(e.lastIndex=0,e.test(t)):!1}function Sk(e,t){Ck(e,"a",t)}function vy(e,t){Ck(e,"da",t)}function Ck(e,t,n=rn){const i=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(eh(t,i,n),n){let r=n.parent;for(;r&&r.parent;)sc(r.parent.vnode)&&jO(i,t,n,r),r=r.parent}}function jO(e,t,n,i){const r=eh(t,e,i,!0);gy(()=>{iy(i[t],r)},n)}function Lm(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Yc(e){return e.shapeFlag&128?e.ssContent:e}function eh(e,t,n=rn,i=!1){if(n){const r=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{xs();const a=oc(n),l=Di(t,n,e,o);return a(),Rs(),l});return i?r.unshift(s):r.push(s),s}}const Br=e=>(t,n=rn)=>{(!Ma||e==="sp")&&eh(e,(...i)=>t(...i),n)},th=Br("bm"),qt=Br("m"),Tk=Br("bu"),nh=Br("u"),Zt=Br("bum"),gy=Br("um"),WO=Br("sp"),zO=Br("rtg"),qO=Br("rtc");function Ik(e,t=rn){eh("ec",e,t)}const py="components",GO="directives";function KO(e,t){return yy(py,e,!0,t)||e}const kk=Symbol.for("v-ndc");function Ek(e){return Rt(e)?yy(py,e,!1)||e:e||kk}function li(e){return yy(GO,e)}function yy(e,t,n=!0,i=!1){const r=sn||rn;if(r){const s=r.type;if(e===py){const a=Wv(s,!1);if(a&&(a===t||a===Jn(t)||a===ar(Jn(t))))return s}const o=Kw(r[e]||s[e],t)||Kw(r.appContext[e],t);return!o&&i?s:o}}function Kw(e,t){return e&&(e[t]||e[Jn(t)]||e[ar(Jn(t))])}function eee(e,t,n,i){let r;const s=n,o=Be(e);if(o||Rt(e)){const a=o&&no(e);let l=!1;a&&(l=!_i(e),e=Zf(e)),r=new Array(e.length);for(let u=0,c=e.length;u<c;u++)r[u]=t(l?Rn(e[u]):e[u],u,void 0,s)}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=t(a+1,a,void 0,s)}else if(Ct(e))if(e[Symbol.iterator])r=Array.from(e,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(e);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=t(e[c],c,l,s)}}else r=[];return r}function tee(e,t,n={},i,r){if(sn.ce||sn.parent&&ds(sn.parent)&&sn.parent.ce)return t!=="default"&&(n.name=t),gi(),Ki(Ce,null,[v("slot",n,i&&i())],64);let s=e[t];s&&s._c&&(s._d=!1),gi();const o=s&&Ak(s(n)),a=n.key||o&&o.key,l=Ki(Ce,{key:(a&&!Fr(a)?a:`_${t}`)+(!o&&i?"_fb":"")},o||(i?i():[]),o&&e._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function Ak(e){return e.some(t=>bs(t)?!(t.type===Qt||t.type===Ce&&!Ak(t.children)):!0)?e:null}const Lv=e=>e?eE(e)?sh(e):Lv(e.parent):null,tu=zt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Lv(e.parent),$root:e=>Lv(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>_y(e),$forceUpdate:e=>e.f||(e.f=()=>{fy(e.update)}),$nextTick:e=>e.n||(e.n=Ke.bind(e.proxy)),$watch:e=>mN.bind(e)}),Fm=(e,t)=>e!==bt&&!e.__isScriptSetup&&vt(e,t),YO={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=e;let u;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return i[t];case 2:return r[t];case 4:return n[t];case 3:return s[t]}else{if(Fm(i,t))return o[t]=1,i[t];if(r!==bt&&vt(r,t))return o[t]=2,r[t];if((u=e.propsOptions[0])&&vt(u,t))return o[t]=3,s[t];if(n!==bt&&vt(n,t))return o[t]=4,n[t];Fv&&(o[t]=0)}}const c=tu[t];let d,f;if(c)return t==="$attrs"&&xn(e.attrs,"get",""),c(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(n!==bt&&vt(n,t))return o[t]=4,n[t];if(f=l.config.globalProperties,vt(f,t))return f[t]},set({_:e},t,n){const{data:i,setupState:r,ctx:s}=e;return Fm(r,t)?(r[t]=n,!0):i!==bt&&vt(i,t)?(i[t]=n,!0):vt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||e!==bt&&vt(e,o)||Fm(t,o)||(a=s[0])&&vt(a,o)||vt(i,o)||vt(tu,o)||vt(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:vt(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Yw(e){return Be(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Fv=!0;function QO(e){const t=_y(e),n=e.proxy,i=e.ctx;Fv=!1,t.beforeCreate&&Qw(t.beforeCreate,e,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:d,mounted:f,beforeUpdate:m,updated:g,activated:y,deactivated:p,beforeDestroy:S,beforeUnmount:w,destroyed:T,unmounted:x,render:V,renderTracked:D,renderTriggered:A,errorCaptured:b,serverPrefetch:_,expose:I,inheritAttrs:E,components:k,directives:R,filters:B}=t;if(u&&XO(u,i,null),o)for(const q in o){const F=o[q];je(F)&&(i[q]=F.bind(n))}if(r){const q=r.call(n,n);Ct(q)&&(e.data=Lt(q))}if(Fv=!0,s)for(const q in s){const F=s[q],H=je(F)?F.bind(n,n):je(F.get)?F.get.bind(n,n):Xi,j=!je(F)&&je(F.set)?F.set.bind(n):Xi,W=P({get:H,set:j});Object.defineProperty(i,q,{enumerable:!0,configurable:!0,get:()=>W.value,set:Y=>W.value=Y})}if(a)for(const q in a)Pk(a[q],i,n,q);if(l){const q=je(l)?l.call(n):l;Reflect.ownKeys(q).forEach(F=>{lt(F,q[F])})}c&&Qw(c,e,"c");function U(q,F){Be(F)?F.forEach(H=>q(H.bind(n))):F&&q(F.bind(n))}if(U(th,d),U(qt,f),U(Tk,m),U(nh,g),U(Sk,y),U(vy,p),U(Ik,b),U(qO,D),U(zO,A),U(Zt,w),U(gy,x),U(WO,_),Be(I))if(I.length){const q=e.exposed||(e.exposed={});I.forEach(F=>{Object.defineProperty(q,F,{get:()=>n[F],set:H=>n[F]=H})})}else e.exposed||(e.exposed={});V&&e.render===Xi&&(e.render=V),E!=null&&(e.inheritAttrs=E),k&&(e.components=k),R&&(e.directives=R),_&&my(e)}function XO(e,t,n=Xi){Be(e)&&(e=Bv(e));for(const i in e){const r=e[i];let s;Ct(r)?"default"in r?s=Le(r.from||i,r.default,!0):s=Le(r.from||i):s=Le(r),Mt(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function Qw(e,t,n){Di(Be(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function Pk(e,t,n,i){let r=i.includes(".")?Wk(n,i):()=>n[i];if(Rt(e)){const s=t[e];je(s)&&pe(r,s)}else if(je(e))pe(r,e.bind(n));else if(Ct(e))if(Be(e))e.forEach(s=>Pk(s,t,n,i));else{const s=je(e.handler)?e.handler.bind(n):t[e.handler];je(s)&&pe(r,s,e)}}function _y(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!n&&!i?l=t:(l={},r.length&&r.forEach(u=>Qd(l,u,o,!0)),Qd(l,t,o)),Ct(t)&&s.set(t,l),l}function Qd(e,t,n,i=!1){const{mixins:r,extends:s}=t;s&&Qd(e,s,n,!0),r&&r.forEach(o=>Qd(e,o,n,!0));for(const o in t)if(!(i&&o==="expose")){const a=JO[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const JO={data:Xw,props:Jw,emits:Jw,methods:ql,computed:ql,beforeCreate:Wn,created:Wn,beforeMount:Wn,mounted:Wn,beforeUpdate:Wn,updated:Wn,beforeDestroy:Wn,beforeUnmount:Wn,destroyed:Wn,unmounted:Wn,activated:Wn,deactivated:Wn,errorCaptured:Wn,serverPrefetch:Wn,components:ql,directives:ql,watch:eN,provide:Xw,inject:ZO};function Xw(e,t){return t?e?function(){return zt(je(e)?e.call(this,this):e,je(t)?t.call(this,this):t)}:t:e}function ZO(e,t){return ql(Bv(e),Bv(t))}function Bv(e){if(Be(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Wn(e,t){return e?[...new Set([].concat(e,t))]:t}function ql(e,t){return e?zt(Object.create(null),e,t):t}function Jw(e,t){return e?Be(e)&&Be(t)?[...new Set([...e,...t])]:zt(Object.create(null),Yw(e),Yw(t??{})):t}function eN(e,t){if(!e)return t;if(!t)return e;const n=zt(Object.create(null),e);for(const i in t)n[i]=Wn(e[i],t[i]);return n}function xk(){return{app:null,config:{isNativeTag:WM,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tN=0;function nN(e,t){return function(i,r=null){je(i)||(i=zt({},i)),r!=null&&!Ct(r)&&(r=null);const s=xk(),o=new WeakSet,a=[];let l=!1;const u=s.app={_uid:tN++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:nE,get config(){return s.config},set config(c){},use(c,...d){return o.has(c)||(c&&je(c.install)?(o.add(c),c.install(u,...d)):je(c)&&(o.add(c),c(u,...d))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,d){return d?(s.components[c]=d,u):s.components[c]},directive(c,d){return d?(s.directives[c]=d,u):s.directives[c]},mount(c,d,f){if(!l){const m=u._ceVNode||v(i,r);return m.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),d&&t?t(m,c):e(m,c,f),l=!0,u._container=c,c.__vue_app__=u,sh(m.component)}},onUnmount(c){a.push(c)},unmount(){l&&(Di(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,d){return s.provides[c]=d,u},runWithContext(c){const d=io;io=u;try{return c()}finally{io=d}}};return u}}let io=null;function lt(e,t){if(rn){let n=rn.provides;const i=rn.parent&&rn.parent.provides;i===n&&(n=rn.provides=Object.create(i)),n[e]=t}}function Le(e,t,n=!1){const i=rn||sn;if(i||io){const r=io?io._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&je(t)?t.call(i&&i.proxy):t}}function Rk(){return!!(rn||sn||io)}const Vk={},Dk=()=>Object.create(Vk),Mk=e=>Object.getPrototypeOf(e)===Vk;function iN(e,t,n,i=!1){const r={},s=Dk();e.propsDefaults=Object.create(null),Ok(e,t,r,s);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=i?r:Tr(r):e.type.props?e.props=r:e.props=s,e.attrs=s}function rN(e,t,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=e,a=Ne(r),[l]=e.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let f=c[d];if(ih(e.emitsOptions,f))continue;const m=t[f];if(l)if(vt(s,f))m!==s[f]&&(s[f]=m,u=!0);else{const g=Jn(f);r[g]=$v(l,a,g,m,e,!1)}else m!==s[f]&&(s[f]=m,u=!0)}}}else{Ok(e,t,r,s)&&(u=!0);let c;for(const d in a)(!t||!vt(t,d)&&((c=Ao(d))===d||!vt(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(r[d]=$v(l,a,d,void 0,e,!0)):delete r[d]);if(s!==a)for(const d in s)(!t||!vt(t,d))&&(delete s[d],u=!0)}u&&Sr(e.attrs,"set","")}function Ok(e,t,n,i){const[r,s]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(wa(l))continue;const u=t[l];let c;r&&vt(r,c=Jn(l))?!s||!s.includes(c)?n[c]=u:(a||(a={}))[c]=u:ih(e.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(s){const l=Ne(n),u=a||bt;for(let c=0;c<s.length;c++){const d=s[c];n[d]=$v(r,l,d,u[d],e,!vt(u,d))}}return o}function $v(e,t,n,i,r,s){const o=e[n];if(o!=null){const a=vt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&je(l)){const{propsDefaults:u}=r;if(n in u)i=u[n];else{const c=oc(r);i=u[n]=l.call(null,t),c()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Ao(n))&&(i=!0))}return i}const sN=new WeakMap;function Nk(e,t,n=!1){const i=n?sN:t.propsCache,r=i.get(e);if(r)return r;const s=e.props,o={},a=[];let l=!1;if(!je(e)){const c=d=>{l=!0;const[f,m]=Nk(d,t,!0);zt(o,f),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!s&&!l)return Ct(e)&&i.set(e,_a),_a;if(Be(s))for(let c=0;c<s.length;c++){const d=Jn(s[c]);Zw(d)&&(o[d]=bt)}else if(s)for(const c in s){const d=Jn(c);if(Zw(d)){const f=s[c],m=o[d]=Be(f)||je(f)?{type:f}:zt({},f),g=m.type;let y=!1,p=!0;if(Be(g))for(let S=0;S<g.length;++S){const w=g[S],T=je(w)&&w.name;if(T==="Boolean"){y=!0;break}else T==="String"&&(p=!1)}else y=je(g)&&g.name==="Boolean";m[0]=y,m[1]=p,(y||vt(m,"default"))&&a.push(d)}}const u=[o,a];return Ct(e)&&i.set(e,u),u}function Zw(e){return e[0]!=="$"&&!wa(e)}const Lk=e=>e[0]==="_"||e==="$stable",by=e=>Be(e)?e.map(ni):[ni(e)],oN=(e,t,n)=>{if(t._n)return t;const i=fk((...r)=>by(t(...r)),n);return i._c=!1,i},Fk=(e,t,n)=>{const i=e._ctx;for(const r in e){if(Lk(r))continue;const s=e[r];if(je(s))t[r]=oN(r,s,i);else if(s!=null){const o=by(s);t[r]=()=>o}}},Bk=(e,t)=>{const n=by(t);e.slots.default=()=>n},$k=(e,t,n)=>{for(const i in t)(n||i!=="_")&&(e[i]=t[i])},aN=(e,t,n)=>{const i=e.slots=Dk();if(e.vnode.shapeFlag&32){const r=t._;r?($k(i,t,n),n&&LI(i,"_",r,!0)):Fk(t,i)}else t&&Bk(e,t)},lN=(e,t,n)=>{const{vnode:i,slots:r}=e;let s=!0,o=bt;if(i.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:$k(r,t,n):(s=!t.$stable,Fk(t,r)),o=t}else t&&(Bk(e,t),o={default:1});if(s)for(const a in r)!Lk(a)&&o[a]==null&&delete r[a]},nn=Kk;function uN(e){return Uk(e)}function cN(e){return Uk(e,FO)}function Uk(e,t){const n=Qf();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:d,nextSibling:f,setScopeId:m=Xi,insertStaticContent:g}=e,y=(O,N,G,ee=null,X=null,ue=null,ye=void 0,fe=null,be=!!N.dynamicChildren)=>{if(O===N)return;O&&!Ei(O,N)&&(ee=K(O),Y(O,X,ue,!0),O=null),N.patchFlag===-2&&(be=!1,N.dynamicChildren=null);const{type:he,ref:Me,shapeFlag:ke}=N;switch(he){case fs:p(O,N,G,ee);break;case Qt:S(O,N,G,ee);break;case nu:O==null&&w(N,G,ee,ye);break;case Ce:k(O,N,G,ee,X,ue,ye,fe,be);break;default:ke&1?V(O,N,G,ee,X,ue,ye,fe,be):ke&6?R(O,N,G,ee,X,ue,ye,fe,be):(ke&64||ke&128)&&he.process(O,N,G,ee,X,ue,ye,fe,be,le)}Me!=null&&X&&Su(Me,O&&O.ref,ue,N||O,!N)},p=(O,N,G,ee)=>{if(O==null)i(N.el=a(N.children),G,ee);else{const X=N.el=O.el;N.children!==O.children&&u(X,N.children)}},S=(O,N,G,ee)=>{O==null?i(N.el=l(N.children||""),G,ee):N.el=O.el},w=(O,N,G,ee)=>{[O.el,O.anchor]=g(O.children,N,G,ee,O.el,O.anchor)},T=({el:O,anchor:N},G,ee)=>{let X;for(;O&&O!==N;)X=f(O),i(O,G,ee),O=X;i(N,G,ee)},x=({el:O,anchor:N})=>{let G;for(;O&&O!==N;)G=f(O),r(O),O=G;r(N)},V=(O,N,G,ee,X,ue,ye,fe,be)=>{N.type==="svg"?ye="svg":N.type==="math"&&(ye="mathml"),O==null?D(N,G,ee,X,ue,ye,fe,be):_(O,N,X,ue,ye,fe,be)},D=(O,N,G,ee,X,ue,ye,fe)=>{let be,he;const{props:Me,shapeFlag:ke,transition:De,dirs:xe}=O;if(be=O.el=o(O.type,ue,Me&&Me.is,Me),ke&8?c(be,O.children):ke&16&&b(O.children,be,null,ee,X,Bm(O,ue),ye,fe),xe&&Gi(O,null,ee,"created"),A(be,O,O.scopeId,ye,ee),Me){for(const ft in Me)ft!=="value"&&!wa(ft)&&s(be,ft,null,Me[ft],ue,ee);"value"in Me&&s(be,"value",null,Me.value,ue),(he=Me.onVnodeBeforeMount)&&Kn(he,ee,O)}xe&&Gi(O,null,ee,"beforeMount");const $e=Hk(X,De);$e&&De.beforeEnter(be),i(be,N,G),((he=Me&&Me.onVnodeMounted)||$e||xe)&&nn(()=>{he&&Kn(he,ee,O),$e&&De.enter(be),xe&&Gi(O,null,ee,"mounted")},X)},A=(O,N,G,ee,X)=>{if(G&&m(O,G),ee)for(let ue=0;ue<ee.length;ue++)m(O,ee[ue]);if(X){let ue=X.subTree;if(N===ue||Jd(ue.type)&&(ue.ssContent===N||ue.ssFallback===N)){const ye=X.vnode;A(O,ye,ye.scopeId,ye.slotScopeIds,X.parent)}}},b=(O,N,G,ee,X,ue,ye,fe,be=0)=>{for(let he=be;he<O.length;he++){const Me=O[he]=fe?Zr(O[he]):ni(O[he]);y(null,Me,N,G,ee,X,ue,ye,fe)}},_=(O,N,G,ee,X,ue,ye)=>{const fe=N.el=O.el;let{patchFlag:be,dynamicChildren:he,dirs:Me}=N;be|=O.patchFlag&16;const ke=O.props||bt,De=N.props||bt;let xe;if(G&&Us(G,!1),(xe=De.onVnodeBeforeUpdate)&&Kn(xe,G,N,O),Me&&Gi(N,O,G,"beforeUpdate"),G&&Us(G,!0),(ke.innerHTML&&De.innerHTML==null||ke.textContent&&De.textContent==null)&&c(fe,""),he?I(O.dynamicChildren,he,fe,G,ee,Bm(N,X),ue):ye||F(O,N,fe,null,G,ee,Bm(N,X),ue,!1),be>0){if(be&16)E(fe,ke,De,G,X);else if(be&2&&ke.class!==De.class&&s(fe,"class",null,De.class,X),be&4&&s(fe,"style",ke.style,De.style,X),be&8){const $e=N.dynamicProps;for(let ft=0;ft<$e.length;ft++){const ut=$e[ft],Tn=ke[ut],cn=De[ut];(cn!==Tn||ut==="value")&&s(fe,ut,Tn,cn,X,G)}}be&1&&O.children!==N.children&&c(fe,N.children)}else!ye&&he==null&&E(fe,ke,De,G,X);((xe=De.onVnodeUpdated)||Me)&&nn(()=>{xe&&Kn(xe,G,N,O),Me&&Gi(N,O,G,"updated")},ee)},I=(O,N,G,ee,X,ue,ye)=>{for(let fe=0;fe<N.length;fe++){const be=O[fe],he=N[fe],Me=be.el&&(be.type===Ce||!Ei(be,he)||be.shapeFlag&70)?d(be.el):G;y(be,he,Me,null,ee,X,ue,ye,!0)}},E=(O,N,G,ee,X)=>{if(N!==G){if(N!==bt)for(const ue in N)!wa(ue)&&!(ue in G)&&s(O,ue,N[ue],null,X,ee);for(const ue in G){if(wa(ue))continue;const ye=G[ue],fe=N[ue];ye!==fe&&ue!=="value"&&s(O,ue,fe,ye,X,ee)}"value"in G&&s(O,"value",N.value,G.value,X)}},k=(O,N,G,ee,X,ue,ye,fe,be)=>{const he=N.el=O?O.el:a(""),Me=N.anchor=O?O.anchor:a("");let{patchFlag:ke,dynamicChildren:De,slotScopeIds:xe}=N;xe&&(fe=fe?fe.concat(xe):xe),O==null?(i(he,G,ee),i(Me,G,ee),b(N.children||[],G,Me,X,ue,ye,fe,be)):ke>0&&ke&64&&De&&O.dynamicChildren?(I(O.dynamicChildren,De,G,X,ue,ye,fe),(N.key!=null||X&&N===X.subTree)&&wy(O,N,!0)):F(O,N,G,Me,X,ue,ye,fe,be)},R=(O,N,G,ee,X,ue,ye,fe,be)=>{N.slotScopeIds=fe,O==null?N.shapeFlag&512?X.ctx.activate(N,G,ee,ye,be):B(N,G,ee,X,ue,ye,be):$(O,N,be)},B=(O,N,G,ee,X,ue,ye)=>{const fe=O.component=RN(O,ee,X);if(sc(O)&&(fe.ctx.renderer=le),VN(fe,!1,ye),fe.asyncDep){if(X&&X.registerDep(fe,U,ye),!O.el){const be=fe.subTree=v(Qt);S(null,be,N,G)}}else U(fe,O,N,G,X,ue,ye)},$=(O,N,G)=>{const ee=N.component=O.component;if(bN(O,N,G))if(ee.asyncDep&&!ee.asyncResolved){q(ee,N,G);return}else ee.next=N,ee.update();else N.el=O.el,ee.vnode=N},U=(O,N,G,ee,X,ue,ye)=>{const fe=()=>{if(O.isMounted){let{next:ke,bu:De,u:xe,parent:$e,vnode:ft}=O;{const In=jk(O);if(In){ke&&(ke.el=ft.el,q(O,ke,ye)),In.asyncDep.then(()=>{O.isUnmounted||fe()});return}}let ut=ke,Tn;Us(O,!1),ke?(ke.el=ft.el,q(O,ke,ye)):ke=ft,De&&Sa(De),(Tn=ke.props&&ke.props.onVnodeBeforeUpdate)&&Kn(Tn,$e,ke,ft),Us(O,!0);const cn=$m(O),_n=O.subTree;O.subTree=cn,y(_n,cn,d(_n.el),K(_n),O,X,ue),ke.el=cn.el,ut===null&&rh(O,cn.el),xe&&nn(xe,X),(Tn=ke.props&&ke.props.onVnodeUpdated)&&nn(()=>Kn(Tn,$e,ke,ft),X)}else{let ke;const{el:De,props:xe}=N,{bm:$e,m:ft,parent:ut,root:Tn,type:cn}=O,_n=ds(N);if(Us(O,!1),$e&&Sa($e),!_n&&(ke=xe&&xe.onVnodeBeforeMount)&&Kn(ke,ut,N),Us(O,!0),De&&we){const In=()=>{O.subTree=$m(O),we(De,O.subTree,O,X,null)};_n&&cn.__asyncHydrate?cn.__asyncHydrate(De,O,In):In()}else{Tn.ce&&Tn.ce._injectChildStyle(cn);const In=O.subTree=$m(O);y(null,In,G,ee,O,X,ue),N.el=In.el}if(ft&&nn(ft,X),!_n&&(ke=xe&&xe.onVnodeMounted)){const In=N;nn(()=>Kn(ke,ut,In),X)}(N.shapeFlag&256||ut&&ds(ut.vnode)&&ut.vnode.shapeFlag&256)&&O.a&&nn(O.a,X),O.isMounted=!0,N=G=ee=null}};O.scope.on();const be=O.effect=new zI(fe);O.scope.off();const he=O.update=be.run.bind(be),Me=O.job=be.runIfDirty.bind(be);Me.i=O,Me.id=O.uid,be.scheduler=()=>fy(Me),Us(O,!0),he()},q=(O,N,G)=>{N.component=O;const ee=O.vnode.props;O.vnode=N,O.next=null,rN(O,N.props,ee,G),lN(O,N.children,G),xs(),Uw(O),Rs()},F=(O,N,G,ee,X,ue,ye,fe,be=!1)=>{const he=O&&O.children,Me=O?O.shapeFlag:0,ke=N.children,{patchFlag:De,shapeFlag:xe}=N;if(De>0){if(De&128){j(he,ke,G,ee,X,ue,ye,fe,be);return}else if(De&256){H(he,ke,G,ee,X,ue,ye,fe,be);return}}xe&8?(Me&16&&ie(he,X,ue),ke!==he&&c(G,ke)):Me&16?xe&16?j(he,ke,G,ee,X,ue,ye,fe,be):ie(he,X,ue,!0):(Me&8&&c(G,""),xe&16&&b(ke,G,ee,X,ue,ye,fe,be))},H=(O,N,G,ee,X,ue,ye,fe,be)=>{O=O||_a,N=N||_a;const he=O.length,Me=N.length,ke=Math.min(he,Me);let De;for(De=0;De<ke;De++){const xe=N[De]=be?Zr(N[De]):ni(N[De]);y(O[De],xe,G,null,X,ue,ye,fe,be)}he>Me?ie(O,X,ue,!0,!1,ke):b(N,G,ee,X,ue,ye,fe,be,ke)},j=(O,N,G,ee,X,ue,ye,fe,be)=>{let he=0;const Me=N.length;let ke=O.length-1,De=Me-1;for(;he<=ke&&he<=De;){const xe=O[he],$e=N[he]=be?Zr(N[he]):ni(N[he]);if(Ei(xe,$e))y(xe,$e,G,null,X,ue,ye,fe,be);else break;he++}for(;he<=ke&&he<=De;){const xe=O[ke],$e=N[De]=be?Zr(N[De]):ni(N[De]);if(Ei(xe,$e))y(xe,$e,G,null,X,ue,ye,fe,be);else break;ke--,De--}if(he>ke){if(he<=De){const xe=De+1,$e=xe<Me?N[xe].el:ee;for(;he<=De;)y(null,N[he]=be?Zr(N[he]):ni(N[he]),G,$e,X,ue,ye,fe,be),he++}}else if(he>De)for(;he<=ke;)Y(O[he],X,ue,!0),he++;else{const xe=he,$e=he,ft=new Map;for(he=$e;he<=De;he++){const Hn=N[he]=be?Zr(N[he]):ni(N[he]);Hn.key!=null&&ft.set(Hn.key,he)}let ut,Tn=0;const cn=De-$e+1;let _n=!1,In=0;const Wr=new Array(cn);for(he=0;he<cn;he++)Wr[he]=0;for(he=xe;he<=ke;he++){const Hn=O[he];if(Tn>=cn){Y(Hn,X,ue,!0);continue}let hi;if(Hn.key!=null)hi=ft.get(Hn.key);else for(ut=$e;ut<=De;ut++)if(Wr[ut-$e]===0&&Ei(Hn,N[ut])){hi=ut;break}hi===void 0?Y(Hn,X,ue,!0):(Wr[hi-$e]=he+1,hi>=In?In=hi:_n=!0,y(Hn,N[hi],G,null,X,ue,ye,fe,be),Tn++)}const qo=_n?dN(Wr):_a;for(ut=qo.length-1,he=cn-1;he>=0;he--){const Hn=$e+he,hi=N[Hn],Go=Hn+1<Me?N[Hn+1].el:ee;Wr[he]===0?y(null,hi,G,Go,X,ue,ye,fe,be):_n&&(ut<0||he!==qo[ut]?W(hi,G,Go,2):ut--)}}},W=(O,N,G,ee,X=null)=>{const{el:ue,type:ye,transition:fe,children:be,shapeFlag:he}=O;if(he&6){W(O.component.subTree,N,G,ee);return}if(he&128){O.suspense.move(N,G,ee);return}if(he&64){ye.move(O,N,G,le);return}if(ye===Ce){i(ue,N,G);for(let ke=0;ke<be.length;ke++)W(be[ke],N,G,ee);i(O.anchor,N,G);return}if(ye===nu){T(O,N,G);return}if(ee!==2&&he&1&&fe)if(ee===0)fe.beforeEnter(ue),i(ue,N,G),nn(()=>fe.enter(ue),X);else{const{leave:ke,delayLeave:De,afterLeave:xe}=fe,$e=()=>i(ue,N,G),ft=()=>{ke(ue,()=>{$e(),xe&&xe()})};De?De(ue,$e,ft):ft()}else i(ue,N,G)},Y=(O,N,G,ee=!1,X=!1)=>{const{type:ue,props:ye,ref:fe,children:be,dynamicChildren:he,shapeFlag:Me,patchFlag:ke,dirs:De,cacheIndex:xe}=O;if(ke===-2&&(X=!1),fe!=null&&Su(fe,null,G,O,!0),xe!=null&&(N.renderCache[xe]=void 0),Me&256){N.ctx.deactivate(O);return}const $e=Me&1&&De,ft=!ds(O);let ut;if(ft&&(ut=ye&&ye.onVnodeBeforeUnmount)&&Kn(ut,N,O),Me&6)Te(O.component,G,ee);else{if(Me&128){O.suspense.unmount(G,ee);return}$e&&Gi(O,null,N,"beforeUnmount"),Me&64?O.type.remove(O,N,G,le,ee):he&&!he.hasOnce&&(ue!==Ce||ke>0&&ke&64)?ie(he,N,G,!1,!0):(ue===Ce&&ke&384||!X&&Me&16)&&ie(be,N,G),ee&&ce(O)}(ft&&(ut=ye&&ye.onVnodeUnmounted)||$e)&&nn(()=>{ut&&Kn(ut,N,O),$e&&Gi(O,null,N,"unmounted")},G)},ce=O=>{const{type:N,el:G,anchor:ee,transition:X}=O;if(N===Ce){ge(G,ee);return}if(N===nu){x(O);return}const ue=()=>{r(G),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(O.shapeFlag&1&&X&&!X.persisted){const{leave:ye,delayLeave:fe}=X,be=()=>ye(G,ue);fe?fe(O.el,ue,be):be()}else ue()},ge=(O,N)=>{let G;for(;O!==N;)G=f(O),r(O),O=G;r(N)},Te=(O,N,G)=>{const{bum:ee,scope:X,job:ue,subTree:ye,um:fe,m:be,a:he}=O;Xd(be),Xd(he),ee&&Sa(ee),X.stop(),ue&&(ue.flags|=8,Y(ye,O,N,G)),fe&&nn(fe,N),nn(()=>{O.isUnmounted=!0},N),N&&N.pendingBranch&&!N.isUnmounted&&O.asyncDep&&!O.asyncResolved&&O.suspenseId===N.pendingId&&(N.deps--,N.deps===0&&N.resolve())},ie=(O,N,G,ee=!1,X=!1,ue=0)=>{for(let ye=ue;ye<O.length;ye++)Y(O[ye],N,G,ee,X)},K=O=>{if(O.shapeFlag&6)return K(O.component.subTree);if(O.shapeFlag&128)return O.suspense.next();const N=f(O.anchor||O.el),G=N&&N[hk];return G?f(G):N};let se=!1;const de=(O,N,G)=>{O==null?N._vnode&&Y(N._vnode,null,null,!0):y(N._vnode||null,O,N,null,null,null,G),N._vnode=O,se||(se=!0,Uw(),Gd(),se=!1)},le={p:y,um:Y,m:W,r:ce,mt:B,mc:b,pc:F,pbc:I,n:K,o:e};let oe,we;return t&&([oe,we]=t(le)),{render:de,hydrate:oe,createApp:nN(de,oe)}}function Bm({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Us({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Hk(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function wy(e,t,n=!1){const i=e.children,r=t.children;if(Be(i)&&Be(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Zr(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&wy(o,a)),a.type===fs&&(a.el=o.el)}}function dN(e){const t=e.slice(),n=[0];let i,r,s,o,a;const l=e.length;for(i=0;i<l;i++){const u=e[i];if(u!==0){if(r=n[n.length-1],e[r]<u){t[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<u?s=a+1:o=a;u<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}function jk(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:jk(t)}function Xd(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const fN=Symbol.for("v-scx"),hN=()=>Le(fN);function Ht(e,t){return Sy(e,null,t)}function pe(e,t,n){return Sy(e,t,n)}function Sy(e,t,n=bt){const{immediate:i,deep:r,flush:s,once:o}=n,a=zt({},n),l=t&&i||!t&&s!=="post";let u;if(Ma){if(s==="sync"){const m=hN();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Xi,m.resume=Xi,m.pause=Xi,m}}const c=rn;a.call=(m,g,y)=>Di(m,c,g,y);let d=!1;s==="post"?a.scheduler=m=>{nn(m,c&&c.suspense)}:s!=="sync"&&(d=!0,a.scheduler=(m,g)=>{g?m():fy(m)}),a.augmentJob=m=>{t&&(m.flags|=4),d&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const f=PO(e,t,a);return Ma&&(u?u.push(f):l&&f()),f}function mN(e,t,n){const i=this.proxy,r=Rt(e)?e.includes(".")?Wk(i,e):()=>i[e]:e.bind(i,i);let s;je(t)?s=t:(s=t.handler,n=t);const o=oc(this),a=Sy(r,s.bind(i),n);return o(),a}function Wk(e,t){const n=t.split(".");return()=>{let i=e;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const vN=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Jn(t)}Modifiers`]||e[`${Ao(t)}Modifiers`];function gN(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||bt;let r=n;const s=t.startsWith("update:"),o=s&&vN(i,t.slice(7));o&&(o.trim&&(r=n.map(c=>Rt(c)?c.trim():c)),o.number&&(r=n.map(xv)));let a,l=i[a=xm(t)]||i[a=xm(Jn(t))];!l&&s&&(l=i[a=xm(Ao(t))]),l&&Di(l,e,6,r);const u=i[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Di(u,e,6,r)}}function zk(e,t,n=!1){const i=t.emitsCache,r=i.get(e);if(r!==void 0)return r;const s=e.emits;let o={},a=!1;if(!je(e)){const l=u=>{const c=zk(u,t,!0);c&&(a=!0,zt(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(Ct(e)&&i.set(e,null),null):(Be(s)?s.forEach(l=>o[l]=null):zt(o,s),Ct(e)&&i.set(e,o),o)}function ih(e,t){return!e||!ec(t)?!1:(t=t.slice(2).replace(/Once$/,""),vt(e,t[0].toLowerCase()+t.slice(1))||vt(e,Ao(t))||vt(e,t))}function $m(e){const{type:t,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:d,data:f,setupState:m,ctx:g,inheritAttrs:y}=e,p=Kd(e);let S,w;try{if(n.shapeFlag&4){const x=r||i,V=x;S=ni(u.call(V,x,c,d,m,f,g)),w=a}else{const x=t;S=ni(x.length>1?x(d,{attrs:a,slots:o,emit:l}):x(d,null)),w=t.props?a:yN(a)}}catch(x){iu.length=0,Za(x,e,1),S=v(Qt)}let T=S;if(w&&y!==!1){const x=Object.keys(w),{shapeFlag:V}=T;x.length&&V&7&&(s&&x.some(ny)&&(w=_N(w,s)),T=tr(T,w,!1,!0))}return n.dirs&&(T=tr(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&_s(T,n.transition),S=T,Kd(p),S}function pN(e,t=!0){let n;for(let i=0;i<e.length;i++){const r=e[i];if(bs(r)){if(r.type!==Qt||r.children==="v-if"){if(n)return;n=r}}else return}return n}const yN=e=>{let t;for(const n in e)(n==="class"||n==="style"||ec(n))&&((t||(t={}))[n]=e[n]);return t},_N=(e,t)=>{const n={};for(const i in e)(!ny(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function bN(e,t,n){const{props:i,children:r,component:s}=e,{props:o,children:a,patchFlag:l}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?e0(i,o,u):!!o;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const f=c[d];if(o[f]!==i[f]&&!ih(u,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?e0(i,o,u):!0:!!o;return!1}function e0(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==e[s]&&!ih(n,s))return!0}return!1}function rh({vnode:e,parent:t},n){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i===e)(e=t.vnode).el=n,t=t.parent;else break}}const Jd=e=>e.__isSuspense;let Uv=0;const wN={name:"Suspense",__isSuspense:!0,process(e,t,n,i,r,s,o,a,l,u){if(e==null)SN(t,n,i,r,s,o,a,l,u);else{if(s&&s.deps>0&&!e.suspense.isInFallback){t.suspense=e.suspense,t.suspense.vnode=t,t.el=e.el;return}CN(e,t,n,i,r,o,a,l,u)}},hydrate:TN,normalize:IN},qk=wN;function Cu(e,t){const n=e.props&&e.props[t];je(n)&&n()}function SN(e,t,n,i,r,s,o,a,l){const{p:u,o:{createElement:c}}=l,d=c("div"),f=e.suspense=Gk(e,r,i,t,d,n,s,o,a,l);u(null,f.pendingBranch=e.ssContent,d,null,i,f,s,o),f.deps>0?(Cu(e,"onPending"),Cu(e,"onFallback"),u(null,e.ssFallback,t,n,i,null,s,o),Ta(f,e.ssFallback)):f.resolve(!1,!0)}function CN(e,t,n,i,r,s,o,a,{p:l,um:u,o:{createElement:c}}){const d=t.suspense=e.suspense;d.vnode=t,t.el=e.el;const f=t.ssContent,m=t.ssFallback,{activeBranch:g,pendingBranch:y,isInFallback:p,isHydrating:S}=d;if(y)d.pendingBranch=f,Ei(f,y)?(l(y,f,d.hiddenContainer,null,r,d,s,o,a),d.deps<=0?d.resolve():p&&(S||(l(g,m,n,i,r,null,s,o,a),Ta(d,m)))):(d.pendingId=Uv++,S?(d.isHydrating=!1,d.activeBranch=y):u(y,r,d),d.deps=0,d.effects.length=0,d.hiddenContainer=c("div"),p?(l(null,f,d.hiddenContainer,null,r,d,s,o,a),d.deps<=0?d.resolve():(l(g,m,n,i,r,null,s,o,a),Ta(d,m))):g&&Ei(f,g)?(l(g,f,n,i,r,d,s,o,a),d.resolve(!0)):(l(null,f,d.hiddenContainer,null,r,d,s,o,a),d.deps<=0&&d.resolve()));else if(g&&Ei(f,g))l(g,f,n,i,r,d,s,o,a),Ta(d,f);else if(Cu(t,"onPending"),d.pendingBranch=f,f.shapeFlag&512?d.pendingId=f.component.suspenseId:d.pendingId=Uv++,l(null,f,d.hiddenContainer,null,r,d,s,o,a),d.deps<=0)d.resolve();else{const{timeout:w,pendingId:T}=d;w>0?setTimeout(()=>{d.pendingId===T&&d.fallback(m)},w):w===0&&d.fallback(m)}}function Gk(e,t,n,i,r,s,o,a,l,u,c=!1){const{p:d,m:f,um:m,n:g,o:{parentNode:y,remove:p}}=u;let S;const w=kN(e);w&&t&&t.pendingBranch&&(S=t.pendingId,t.deps++);const T=e.props?FI(e.props.timeout):void 0,x=s,V={vnode:e,parent:t,parentComponent:n,namespace:o,container:i,hiddenContainer:r,deps:0,pendingId:Uv++,timeout:typeof T=="number"?T:-1,activeBranch:null,pendingBranch:null,isInFallback:!c,isHydrating:c,isUnmounted:!1,effects:[],resolve(D=!1,A=!1){const{vnode:b,activeBranch:_,pendingBranch:I,pendingId:E,effects:k,parentComponent:R,container:B}=V;let $=!1;V.isHydrating?V.isHydrating=!1:D||($=_&&I.transition&&I.transition.mode==="out-in",$&&(_.transition.afterLeave=()=>{E===V.pendingId&&(f(I,B,s===x?g(_):s,0),Ov(k))}),_&&(y(_.el)===B&&(s=g(_)),m(_,R,V,!0)),$||f(I,B,s,0)),Ta(V,I),V.pendingBranch=null,V.isInFallback=!1;let U=V.parent,q=!1;for(;U;){if(U.pendingBranch){U.effects.push(...k),q=!0;break}U=U.parent}!q&&!$&&Ov(k),V.effects=[],w&&t&&t.pendingBranch&&S===t.pendingId&&(t.deps--,t.deps===0&&!A&&t.resolve()),Cu(b,"onResolve")},fallback(D){if(!V.pendingBranch)return;const{vnode:A,activeBranch:b,parentComponent:_,container:I,namespace:E}=V;Cu(A,"onFallback");const k=g(b),R=()=>{V.isInFallback&&(d(null,D,I,k,_,null,E,a,l),Ta(V,D))},B=D.transition&&D.transition.mode==="out-in";B&&(b.transition.afterLeave=R),V.isInFallback=!0,m(b,_,null,!0),B||R()},move(D,A,b){V.activeBranch&&f(V.activeBranch,D,A,b),V.container=D},next(){return V.activeBranch&&g(V.activeBranch)},registerDep(D,A,b){const _=!!V.pendingBranch;_&&V.deps++;const I=D.vnode.el;D.asyncDep.catch(E=>{Za(E,D,0)}).then(E=>{if(D.isUnmounted||V.isUnmounted||V.pendingId!==D.suspenseId)return;D.asyncResolved=!0;const{vnode:k}=D;jv(D,E,!1),I&&(k.el=I);const R=!I&&D.subTree.el;A(D,k,y(I||D.subTree.el),I?null:g(D.subTree),V,o,b),R&&p(R),rh(D,k.el),_&&--V.deps===0&&V.resolve()})},unmount(D,A){V.isUnmounted=!0,V.activeBranch&&m(V.activeBranch,n,D,A),V.pendingBranch&&m(V.pendingBranch,n,D,A)}};return V}function TN(e,t,n,i,r,s,o,a,l){const u=t.suspense=Gk(t,i,n,e.parentNode,document.createElement("div"),null,r,s,o,a,!0),c=l(e,u.pendingBranch=t.ssContent,n,u,s,o);return u.deps===0&&u.resolve(!1,!0),c}function IN(e){const{shapeFlag:t,children:n}=e,i=t&32;e.ssContent=t0(i?n.default:n),e.ssFallback=i?t0(n.fallback):v(Qt)}function t0(e){let t;if(je(e)){const n=Da&&e._c;n&&(e._d=!1,gi()),e=e(),n&&(e._d=!0,t=Qn,Yk())}return Be(e)&&(e=pN(e)),e=ni(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function Kk(e,t){t&&t.pendingBranch?Be(e)?t.effects.push(...e):t.effects.push(e):Ov(e)}function Ta(e,t){e.activeBranch=t;const{vnode:n,parentComponent:i}=e;let r=t.el;for(;!r&&t.component;)t=t.component.subTree,r=t.el;n.el=r,i&&i.subTree===n&&(i.vnode.el=r,rh(i,r))}function kN(e){const t=e.props&&e.props.suspensible;return t!=null&&t!==!1}const Ce=Symbol.for("v-fgt"),fs=Symbol.for("v-txt"),Qt=Symbol.for("v-cmt"),nu=Symbol.for("v-stc"),iu=[];let Qn=null;function gi(e=!1){iu.push(Qn=e?null:[])}function Yk(){iu.pop(),Qn=iu[iu.length-1]||null}let Da=1;function n0(e,t=!1){Da+=e,e<0&&Qn&&t&&(Qn.hasOnce=!0)}function Qk(e){return e.dynamicChildren=Da>0?Qn||_a:null,Yk(),Da>0&&Qn&&Qn.push(e),e}function EN(e,t,n,i,r,s){return Qk(Jk(e,t,n,i,r,s,!0))}function Ki(e,t,n,i,r){return Qk(v(e,t,n,i,r,!0))}function bs(e){return e?e.__v_isVNode===!0:!1}function Ei(e,t){return e.type===t.type&&e.key===t.key}const Xk=({key:e})=>e??null,wd=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Rt(e)||Mt(e)||je(e)?{i:sn,r:e,k:t,f:!!n}:e:null);function Jk(e,t=null,n=null,i=0,r=null,s=e===Ce?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Xk(t),ref:t&&wd(t),scopeId:dk,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:sn};return a?(Cy(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=Rt(n)?8:16),Da>0&&!o&&Qn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Qn.push(l),l}const v=AN;function AN(e,t=null,n=null,i=0,r=null,s=!1){if((!e||e===kk)&&(e=Qt),bs(e)){const a=tr(e,t,!0);return n&&Cy(a,n),Da>0&&!s&&Qn&&(a.shapeFlag&6?Qn[Qn.indexOf(e)]=a:Qn.push(a)),a.patchFlag=-2,a}if(NN(e)&&(e=e.__vccOpts),t){t=Zk(t);let{class:a,style:l}=t;a&&!Rt(a)&&(t.class=Jf(a)),Ct(l)&&(dy(l)&&!Be(l)&&(l=zt({},l)),t.style=Xf(l))}const o=Rt(e)?1:Jd(e)?128:mk(e)?64:Ct(e)?4:je(e)?2:0;return Jk(e,t,n,i,r,o,s,!0)}function Zk(e){return e?dy(e)||Mk(e)?zt({},e):e:null}function tr(e,t,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=e,u=t?te(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Xk(u),ref:t&&t.ref?n&&s?Be(s)?s.concat(wd(t)):[s,wd(t)]:wd(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ce?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&tr(e.ssContent),ssFallback:e.ssFallback&&tr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&i&&_s(c,l.clone(c)),c}function wi(e=" ",t=0){return v(fs,null,e,t)}function nee(e,t){const n=v(nu,null,e);return n.staticCount=t,n}function iee(e="",t=!1){return t?(gi(),Ki(Qt,null,e)):v(Qt,null,e)}function ni(e){return e==null||typeof e=="boolean"?v(Qt):Be(e)?v(Ce,null,e.slice()):bs(e)?Zr(e):v(fs,null,String(e))}function Zr(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:tr(e)}function Cy(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(Be(t))n=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),Cy(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!Mk(t)?t._ctx=sn:r===3&&sn&&(sn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else je(t)?(t={default:t,_ctx:sn},n=32):(t=String(t),i&64?(n=16,t=[wi(t)]):n=8);e.children=t,e.shapeFlag|=n}function te(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=Jf([t.class,i.class]));else if(r==="style")t.style=Xf([t.style,i.style]);else if(ec(r)){const s=t[r],o=i[r];o&&s!==o&&!(Be(s)&&s.includes(o))&&(t[r]=s?[].concat(s,o):o)}else r!==""&&(t[r]=i[r])}return t}function Kn(e,t,n,i=null){Di(e,t,7,[n,i])}const PN=xk();let xN=0;function RN(e,t,n){const i=e.type,r=(t?t.appContext:e.appContext)||PN,s={uid:xN++,vnode:e,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new jI(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nk(i,r),emitsOptions:zk(i,r),emit:null,emitted:null,propsDefaults:bt,inheritAttrs:i.inheritAttrs,ctx:bt,data:bt,props:bt,attrs:bt,slots:bt,refs:bt,setupState:bt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=gN.bind(null,s),e.ce&&e.ce(s),s}let rn=null;const el=()=>rn||sn;let Zd,Hv;{const e=Qf(),t=(n,i)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Zd=t("__VUE_INSTANCE_SETTERS__",n=>rn=n),Hv=t("__VUE_SSR_SETTERS__",n=>Ma=n)}const oc=e=>{const t=rn;return Zd(e),e.scope.on(),()=>{e.scope.off(),Zd(t)}},i0=()=>{rn&&rn.scope.off(),Zd(null)};function eE(e){return e.vnode.shapeFlag&4}let Ma=!1;function VN(e,t=!1,n=!1){t&&Hv(t);const{props:i,children:r}=e.vnode,s=eE(e);iN(e,i,s,t),aN(e,r,n);const o=s?DN(e,t):void 0;return t&&Hv(!1),o}function DN(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,YO);const{setup:i}=n;if(i){xs();const r=e.setupContext=i.length>1?ON(e):null,s=oc(e),o=rc(i,e,0,[e.props,r]),a=MI(o);if(Rs(),s(),(a||e.sp)&&!ds(e)&&my(e),a){if(o.then(i0,i0),t)return o.then(l=>{jv(e,l,t)}).catch(l=>{Za(l,e,0)});e.asyncDep=o}else jv(e,o,t)}else tE(e,t)}function jv(e,t,n){je(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ct(t)&&(e.setupState=ok(t)),tE(e,n)}let r0;function tE(e,t,n){const i=e.type;if(!e.render){if(!t&&r0&&!i.render){const r=i.template||_y(e).template;if(r){const{isCustomElement:s,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=i,u=zt(zt({isCustomElement:s,delimiters:a},o),l);i.render=r0(r,u)}}e.render=i.render||Xi}{const r=oc(e);xs();try{QO(e)}finally{Rs(),r()}}}const MN={get(e,t){return xn(e,"get",""),e[t]}};function ON(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,MN),slots:e.slots,emit:e.emit,expose:t}}function sh(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ok(Wd(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in tu)return tu[n](e)},has(t,n){return n in t||n in tu}})):e.proxy}function Wv(e,t=!0){return je(e)?e.displayName||e.name:e.name||t&&e.__name}function NN(e){return je(e)&&"__vccOpts"in e}const P=(e,t)=>EO(e,t,Ma);function Wt(e,t,n){const i=arguments.length;return i===2?Ct(t)&&!Be(t)?bs(t)?v(e,null,[t]):v(e,t):v(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&bs(n)&&(n=[n]),v(e,t,n))}const nE="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zv;const s0=typeof window<"u"&&window.trustedTypes;if(s0)try{zv=s0.createPolicy("vue",{createHTML:e=>e})}catch{}const iE=zv?e=>zv.createHTML(e):e=>e,LN="http://www.w3.org/2000/svg",FN="http://www.w3.org/1998/Math/MathML",wr=typeof document<"u"?document:null,o0=wr&&wr.createElement("template"),BN={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const r=t==="svg"?wr.createElementNS(LN,e):t==="mathml"?wr.createElementNS(FN,e):n?wr.createElement(e,{is:n}):wr.createElement(e);return e==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:e=>wr.createTextNode(e),createComment:e=>wr.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>wr.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,r,s){const o=n?n.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{o0.innerHTML=iE(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const a=o0.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Kr="transition",Nl="animation",Oa=Symbol("_vtc"),rE={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},sE=zt({},yk,rE),$N=e=>(e.displayName="Transition",e.props=sE,e),Rr=$N((e,{slots:t})=>Wt(OO,oE(e),t)),Hs=(e,t=[])=>{Be(e)?e.forEach(n=>n(...t)):e&&e(...t)},a0=e=>e?Be(e)?e.some(t=>t.length>1):e.length>1:!1;function oE(e){const t={};for(const k in e)k in rE||(t[k]=e[k]);if(e.css===!1)return t;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,g=UN(r),y=g&&g[0],p=g&&g[1],{onBeforeEnter:S,onEnter:w,onEnterCancelled:T,onLeave:x,onLeaveCancelled:V,onBeforeAppear:D=S,onAppear:A=w,onAppearCancelled:b=T}=t,_=(k,R,B,$)=>{k._enterCancelled=$,Qr(k,R?c:a),Qr(k,R?u:o),B&&B()},I=(k,R)=>{k._isLeaving=!1,Qr(k,d),Qr(k,m),Qr(k,f),R&&R()},E=k=>(R,B)=>{const $=k?A:w,U=()=>_(R,k,B);Hs($,[R,U]),l0(()=>{Qr(R,k?l:s),zi(R,k?c:a),a0($)||u0(R,i,y,U)})};return zt(t,{onBeforeEnter(k){Hs(S,[k]),zi(k,s),zi(k,o)},onBeforeAppear(k){Hs(D,[k]),zi(k,l),zi(k,u)},onEnter:E(!1),onAppear:E(!0),onLeave(k,R){k._isLeaving=!0;const B=()=>I(k,R);zi(k,d),k._enterCancelled?(zi(k,f),qv()):(qv(),zi(k,f)),l0(()=>{k._isLeaving&&(Qr(k,d),zi(k,m),a0(x)||u0(k,i,p,B))}),Hs(x,[k,B])},onEnterCancelled(k){_(k,!1,void 0,!0),Hs(T,[k])},onAppearCancelled(k){_(k,!0,void 0,!0),Hs(b,[k])},onLeaveCancelled(k){I(k),Hs(V,[k])}})}function UN(e){if(e==null)return null;if(Ct(e))return[Um(e.enter),Um(e.leave)];{const t=Um(e);return[t,t]}}function Um(e){return FI(e)}function zi(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Oa]||(e[Oa]=new Set)).add(t)}function Qr(e,t){t.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const n=e[Oa];n&&(n.delete(t),n.size||(e[Oa]=void 0))}function l0(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let HN=0;function u0(e,t,n,i){const r=e._endId=++HN,s=()=>{r===e._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=aE(e,t);if(!o)return i();const u=o+"end";let c=0;const d=()=>{e.removeEventListener(u,f),s()},f=m=>{m.target===e&&++c>=l&&d()};setTimeout(()=>{c<l&&d()},a+1),e.addEventListener(u,f)}function aE(e,t){const n=window.getComputedStyle(e),i=g=>(n[g]||"").split(", "),r=i(`${Kr}Delay`),s=i(`${Kr}Duration`),o=c0(r,s),a=i(`${Nl}Delay`),l=i(`${Nl}Duration`),u=c0(a,l);let c=null,d=0,f=0;t===Kr?o>0&&(c=Kr,d=o,f=s.length):t===Nl?u>0&&(c=Nl,d=u,f=l.length):(d=Math.max(o,u),c=d>0?o>u?Kr:Nl:null,f=c?c===Kr?s.length:l.length:0);const m=c===Kr&&/\b(transform|all)(,|$)/.test(i(`${Kr}Property`).toString());return{type:c,timeout:d,propCount:f,hasTransform:m}}function c0(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,i)=>d0(n)+d0(e[i])))}function d0(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function qv(){return document.body.offsetHeight}function jN(e,t,n){const i=e[Oa];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ef=Symbol("_vod"),lE=Symbol("_vsh"),ji={beforeMount(e,{value:t},{transition:n}){e[ef]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Ll(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:i}){!t!=!n&&(i?t?(i.beforeEnter(e),Ll(e,!0),i.enter(e)):i.leave(e,()=>{Ll(e,!1)}):Ll(e,t))},beforeUnmount(e,{value:t}){Ll(e,t)}};function Ll(e,t){e.style.display=t?e[ef]:"none",e[lE]=!t}const WN=Symbol(""),zN=/(^|;)\s*display\s*:/;function qN(e,t,n){const i=e.style,r=Rt(n);let s=!1;if(n&&!r){if(t)if(Rt(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Sd(i,a,"")}else for(const o in t)n[o]==null&&Sd(i,o,"");for(const o in n)o==="display"&&(s=!0),Sd(i,o,n[o])}else if(r){if(t!==n){const o=i[WN];o&&(n+=";"+o),i.cssText=n,s=zN.test(n)}}else t&&e.removeAttribute("style");ef in e&&(e[ef]=s?i.display:"",e[lE]&&(i.display="none"))}const f0=/\s*!important$/;function Sd(e,t,n){if(Be(n))n.forEach(i=>Sd(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=GN(e,t);f0.test(n)?e.setProperty(Ao(i),n.replace(f0,""),"important"):e[i]=n}}const h0=["Webkit","Moz","ms"],Hm={};function GN(e,t){const n=Hm[t];if(n)return n;let i=Jn(t);if(i!=="filter"&&i in e)return Hm[t]=i;i=ar(i);for(let r=0;r<h0.length;r++){const s=h0[r]+i;if(s in e)return Hm[t]=s}return t}const m0="http://www.w3.org/1999/xlink";function v0(e,t,n,i,r,s=nO(t)){i&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(m0,t.slice(6,t.length)):e.setAttributeNS(m0,t,n):n==null||s&&!BI(n)?e.removeAttribute(t):e.setAttribute(t,s?"":Fr(n)?String(n):n)}function g0(e,t,n,i,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?iE(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=BI(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(r||t)}function oa(e,t,n,i){e.addEventListener(t,n,i)}function KN(e,t,n,i){e.removeEventListener(t,n,i)}const p0=Symbol("_vei");function YN(e,t,n,i,r=null){const s=e[p0]||(e[p0]={}),o=s[t];if(i&&o)o.value=i;else{const[a,l]=QN(t);if(i){const u=s[t]=ZN(i,r);oa(e,a,u,l)}else o&&(KN(e,a,o,l),s[t]=void 0)}}const y0=/(?:Once|Passive|Capture)$/;function QN(e){let t;if(y0.test(e)){t={};let i;for(;i=e.match(y0);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ao(e.slice(2)),t]}let jm=0;const XN=Promise.resolve(),JN=()=>jm||(XN.then(()=>jm=0),jm=Date.now());function ZN(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Di(eL(i,n.value),t,5,[i])};return n.value=e,n.attached=JN(),n}function eL(e,t){if(Be(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const _0=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,tL=(e,t,n,i,r,s)=>{const o=r==="svg";t==="class"?jN(e,i,o):t==="style"?qN(e,n,i):ec(t)?ny(t)||YN(e,t,n,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):nL(e,t,i,o))?(g0(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&v0(e,t,i,o,s,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Rt(i))?g0(e,Jn(t),i,s,t):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),v0(e,t,i,o))};function nL(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&_0(t)&&je(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return _0(t)&&Rt(n)?!1:t in e}const uE=new WeakMap,cE=new WeakMap,tf=Symbol("_moveCb"),b0=Symbol("_enterCb"),iL=e=>(delete e.props.mode,e),rL=iL({name:"TransitionGroup",props:zt({},sE,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=el(),i=pk();let r,s;return nh(()=>{if(!r.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!lL(r[0].el,n.vnode.el,o))return;r.forEach(sL),r.forEach(oL);const a=r.filter(aL);qv(),a.forEach(l=>{const u=l.el,c=u.style;zi(u,o),c.transform=c.webkitTransform=c.transitionDuration="";const d=u[tf]=f=>{f&&f.target!==u||(!f||/transform$/.test(f.propertyName))&&(u.removeEventListener("transitionend",d),u[tf]=null,Qr(u,o))};u.addEventListener("transitionend",d)})}),()=>{const o=Ne(e),a=oE(o);let l=o.tag||Ce;if(r=[],s)for(let u=0;u<s.length;u++){const c=s[u];c.el&&c.el instanceof Element&&(r.push(c),_s(c,wu(c,a,i,n)),uE.set(c,c.el.getBoundingClientRect()))}s=t.default?hy(t.default()):[];for(let u=0;u<s.length;u++){const c=s[u];c.key!=null&&_s(c,wu(c,a,i,n))}return v(l,null,s)}}}),Ty=rL;function sL(e){const t=e.el;t[tf]&&t[tf](),t[b0]&&t[b0]()}function oL(e){cE.set(e,e.el.getBoundingClientRect())}function aL(e){const t=uE.get(e),n=cE.get(e),i=t.left-n.left,r=t.top-n.top;if(i||r){const s=e.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",e}}function lL(e,t,n){const i=e.cloneNode(),r=e[Oa];r&&r.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(i);const{hasTransform:o}=aE(i);return s.removeChild(i),o}const w0=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Be(t)?n=>Sa(t,n):t};function uL(e){e.target.composing=!0}function S0(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Wm=Symbol("_assign"),cL={created(e,{modifiers:{lazy:t,trim:n,number:i}},r){e[Wm]=w0(r);const s=i||r.props&&r.props.type==="number";oa(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),s&&(a=xv(a)),e[Wm](a)}),n&&oa(e,"change",()=>{e.value=e.value.trim()}),t||(oa(e,"compositionstart",uL),oa(e,"compositionend",S0),oa(e,"change",S0))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},o){if(e[Wm]=w0(o),e.composing)return;const a=(s||e.type==="number")&&!/^0\d/.test(e.value)?xv(e.value):e.value,l=t??"";a!==l&&(document.activeElement===e&&e.type!=="range"&&(i&&t===n||r&&e.value.trim()===l)||(e.value=l))}},dL=["ctrl","shift","alt","meta"],fL={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>dL.some(n=>e[`${n}Key`]&&!t.includes(n))},Gv=(e,t)=>{const n=e._withMods||(e._withMods={}),i=t.join(".");return n[i]||(n[i]=(r,...s)=>{for(let o=0;o<t.length;o++){const a=fL[t[o]];if(a&&a(r,t))return}return e(r,...s)})},dE=zt({patchProp:tL},BN);let ru,C0=!1;function fE(){return ru||(ru=uN(dE))}function hL(){return ru=C0?ru:cN(dE),C0=!0,ru}const hE=(...e)=>{fE().render(...e)},mL=(...e)=>{const t=fE().createApp(...e),{mount:n}=t;return t.mount=i=>{const r=vE(i);if(!r)return;const s=t._component;!je(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,mE(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t},vL=(...e)=>{const t=hL().createApp(...e),{mount:n}=t;return t.mount=i=>{const r=vE(i);if(r)return n(r,!0,mE(r))},t};function mE(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function vE(e){return Rt(e)?document.querySelector(e):e}const gL=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,pL=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,yL=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function _L(e,t){if(e==="__proto__"||e==="constructor"&&t&&typeof t=="object"&&"prototype"in t){bL(e);return}return t}function bL(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}function nf(e,t={}){if(typeof e!="string")return e;const n=e.trim();if(e[0]==='"'&&e.endsWith('"')&&!e.includes("\\"))return n.slice(1,-1);if(n.length<=9){const i=n.toLowerCase();if(i==="true")return!0;if(i==="false")return!1;if(i==="undefined")return;if(i==="null")return null;if(i==="nan")return Number.NaN;if(i==="infinity")return Number.POSITIVE_INFINITY;if(i==="-infinity")return Number.NEGATIVE_INFINITY}if(!yL.test(e)){if(t.strict)throw new SyntaxError("[destr] Invalid JSON");return e}try{if(gL.test(e)||pL.test(e)){if(t.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(e,_L)}return JSON.parse(e)}catch(i){if(t.strict)throw i;return e}}const wL=/#/g,SL=/&/g,CL=/\//g,TL=/=/g,Iy=/\+/g,IL=/%5e/gi,kL=/%60/gi,EL=/%7c/gi,AL=/%20/gi;function PL(e){return encodeURI(""+e).replace(EL,"|")}function Kv(e){return PL(typeof e=="string"?e:JSON.stringify(e)).replace(Iy,"%2B").replace(AL,"+").replace(wL,"%23").replace(SL,"%26").replace(kL,"`").replace(IL,"^").replace(CL,"%2F")}function zm(e){return Kv(e).replace(TL,"%3D")}function rf(e=""){try{return decodeURIComponent(""+e)}catch{return""+e}}function xL(e){return rf(e.replace(Iy," "))}function RL(e){return rf(e.replace(Iy," "))}function VL(e=""){const t={};e[0]==="?"&&(e=e.slice(1));for(const n of e.split("&")){const i=n.match(/([^=]+)=?(.*)/)||[];if(i.length<2)continue;const r=xL(i[1]);if(r==="__proto__"||r==="constructor")continue;const s=RL(i[2]||"");t[r]===void 0?t[r]=s:Array.isArray(t[r])?t[r].push(s):t[r]=[t[r],s]}return t}function DL(e,t){return(typeof t=="number"||typeof t=="boolean")&&(t=String(t)),t?Array.isArray(t)?t.map(n=>`${zm(e)}=${Kv(n)}`).join("&"):`${zm(e)}=${Kv(t)}`:zm(e)}function ML(e){return Object.keys(e).filter(t=>e[t]!==void 0).map(t=>DL(t,e[t])).filter(Boolean).join("&")}const OL=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,NL=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,LL=/^([/\\]\s*){2,}[^/\\]/,FL=/^[\s\0]*(blob|data|javascript|vbscript):$/i,BL=/\/$|\/\?|\/#/,$L=/^\.?\//;function xo(e,t={}){return typeof t=="boolean"&&(t={acceptRelative:t}),t.strict?OL.test(e):NL.test(e)||(t.acceptRelative?LL.test(e):!1)}function UL(e){return!!e&&FL.test(e)}function Yv(e="",t){return t?BL.test(e):e.endsWith("/")}function ky(e="",t){if(!t)return(Yv(e)?e.slice(0,-1):e)||"/";if(!Yv(e,!0))return e||"/";let n=e,i="";const r=e.indexOf("#");r>=0&&(n=e.slice(0,r),i=e.slice(r));const[s,...o]=n.split("?");return((s.endsWith("/")?s.slice(0,-1):s)||"/")+(o.length>0?`?${o.join("?")}`:"")+i}function Qv(e="",t){if(!t)return e.endsWith("/")?e:e+"/";if(Yv(e,!0))return e||"/";let n=e,i="";const r=e.indexOf("#");if(r>=0&&(n=e.slice(0,r),i=e.slice(r),!n))return i;const[s,...o]=n.split("?");return s+"/"+(o.length>0?`?${o.join("?")}`:"")+i}function HL(e=""){return e.startsWith("/")}function T0(e=""){return HL(e)?e:"/"+e}function jL(e,t){if(pE(t)||xo(e))return e;const n=ky(t);return e.startsWith(n)?e:Ey(n,e)}function I0(e,t){if(pE(t))return e;const n=ky(t);if(!e.startsWith(n))return e;const i=e.slice(n.length);return i[0]==="/"?i:"/"+i}function gE(e,t){const n=qL(e),i={...VL(n.search),...t};return n.search=ML(i),GL(n)}function pE(e){return!e||e==="/"}function WL(e){return e&&e!=="/"}function Ey(e,...t){let n=e||"";for(const i of t.filter(r=>WL(r)))if(n){const r=i.replace($L,"");n=Qv(n)+r}else n=i;return n}function yE(...e){var o,a,l,u;const t=/\/(?!\/)/,n=e.filter(Boolean),i=[];let r=0;for(const c of n)if(!(!c||c==="/")){for(const[d,f]of c.split(t).entries())if(!(!f||f===".")){if(f===".."){if(i.length===1&&xo(i[0]))continue;i.pop(),r--;continue}if(d===1&&((o=i[i.length-1])!=null&&o.endsWith(":/"))){i[i.length-1]+="/"+f;continue}i.push(f),r++}}let s=i.join("/");return r>=0?(a=n[0])!=null&&a.startsWith("/")&&!s.startsWith("/")?s="/"+s:(l=n[0])!=null&&l.startsWith("./")&&!s.startsWith("./")&&(s="./"+s):s="../".repeat(-1*r)+s,(u=n[n.length-1])!=null&&u.endsWith("/")&&!s.endsWith("/")&&(s+="/"),s}function zL(e,t,n={}){return n.trailingSlash||(e=Qv(e),t=Qv(t)),n.leadingSlash||(e=T0(e),t=T0(t)),n.encoding||(e=rf(e),t=rf(t)),e===t}const _E=Symbol.for("ufo:protocolRelative");function qL(e="",t){const n=e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,d,f=""]=n;return{protocol:d.toLowerCase(),pathname:f,href:d+f,auth:"",host:"",search:"",hash:""}}if(!xo(e,{acceptRelative:!0}))return k0(e);const[,i="",r,s=""]=e.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=s.match(/([^#/?]*)(.*)?/)||[];i==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:c}=k0(a);return{protocol:i.toLowerCase(),auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:o,pathname:l,search:u,hash:c,[_E]:!i}}function k0(e=""){const[t="",n="",i=""]=(e.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:t,search:n,hash:i}}function GL(e){const t=e.pathname||"",n=e.search?(e.search.startsWith("?")?"":"?")+e.search:"",i=e.hash||"",r=e.auth?e.auth+"@":"",s=e.host||"";return(e.protocol||e[_E]?(e.protocol||"")+"//":"")+r+s+t+n+i}class KL extends Error{constructor(t,n){super(t,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function YL(e){var l,u,c,d,f;const t=((l=e.error)==null?void 0:l.message)||((u=e.error)==null?void 0:u.toString())||"",n=((c=e.request)==null?void 0:c.method)||((d=e.options)==null?void 0:d.method)||"GET",i=((f=e.request)==null?void 0:f.url)||String(e.request)||"/",r=`[${n}] ${JSON.stringify(i)}`,s=e.response?`${e.response.status} ${e.response.statusText}`:"<no response>",o=`${r}: ${s}${t?` ${t}`:""}`,a=new KL(o,e.error?{cause:e.error}:void 0);for(const m of["request","options","response"])Object.defineProperty(a,m,{get(){return e[m]}});for(const[m,g]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,m,{get(){return e.response&&e.response[g]}});return a}const QL=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function E0(e="GET"){return QL.has(e.toUpperCase())}function XL(e){if(e===void 0)return!1;const t=typeof e;return t==="string"||t==="number"||t==="boolean"||t===null?!0:t!=="object"?!1:Array.isArray(e)?!0:e.buffer?!1:e.constructor&&e.constructor.name==="Object"||typeof e.toJSON=="function"}const JL=new Set(["image/svg","application/xml","application/xhtml","application/html"]),ZL=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function eF(e=""){if(!e)return"json";const t=e.split(";").shift()||"";return ZL.test(t)?"json":JL.has(t)||t.startsWith("text/")?"text":"blob"}function tF(e,t,n,i){const r=nF((t==null?void 0:t.headers)??(e==null?void 0:e.headers),n==null?void 0:n.headers,i);let s;return(n!=null&&n.query||n!=null&&n.params||t!=null&&t.params||t!=null&&t.query)&&(s={...n==null?void 0:n.params,...n==null?void 0:n.query,...t==null?void 0:t.params,...t==null?void 0:t.query}),{...n,...t,query:s,params:s,headers:r}}function nF(e,t,n){if(!t)return new n(e);const i=new n(t);if(e)for(const[r,s]of Symbol.iterator in e||Array.isArray(e)?e:new n(e))i.set(r,s);return i}async function Qc(e,t){if(t)if(Array.isArray(t))for(const n of t)await n(e);else await t(e)}const iF=new Set([408,409,425,429,500,502,503,504]),rF=new Set([101,204,205,304]);function bE(e={}){const{fetch:t=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:i=globalThis.AbortController}=e;async function r(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let c;typeof a.options.retry=="number"?c=a.options.retry:c=E0(a.options.method)?0:1;const d=a.response&&a.response.status||500;if(c>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(d):iF.has(d))){const f=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return f>0&&await new Promise(m=>setTimeout(m,f)),s(a.request,{...a.options,retry:c-1})}}const u=YL(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,s),u}const s=async function(l,u={}){const c={request:l,options:tF(l,u,e.defaults,n),response:void 0,error:void 0};c.options.method&&(c.options.method=c.options.method.toUpperCase()),c.options.onRequest&&await Qc(c,c.options.onRequest),typeof c.request=="string"&&(c.options.baseURL&&(c.request=jL(c.request,c.options.baseURL)),c.options.query&&(c.request=gE(c.request,c.options.query),delete c.options.query),"query"in c.options&&delete c.options.query,"params"in c.options&&delete c.options.params),c.options.body&&E0(c.options.method)&&(XL(c.options.body)?(c.options.body=typeof c.options.body=="string"?c.options.body:JSON.stringify(c.options.body),c.options.headers=new n(c.options.headers||{}),c.options.headers.has("content-type")||c.options.headers.set("content-type","application/json"),c.options.headers.has("accept")||c.options.headers.set("accept","application/json")):("pipeTo"in c.options.body&&typeof c.options.body.pipeTo=="function"||typeof c.options.body.pipe=="function")&&("duplex"in c.options||(c.options.duplex="half")));let d;if(!c.options.signal&&c.options.timeout){const m=new i;d=setTimeout(()=>{const g=new Error("[TimeoutError]: The operation was aborted due to timeout");g.name="TimeoutError",g.code=23,m.abort(g)},c.options.timeout),c.options.signal=m.signal}try{c.response=await t(c.request,c.options)}catch(m){return c.error=m,c.options.onRequestError&&await Qc(c,c.options.onRequestError),await r(c)}finally{d&&clearTimeout(d)}if((c.response.body||c.response._bodyInit)&&!rF.has(c.response.status)&&c.options.method!=="HEAD"){const m=(c.options.parseResponse?"json":c.options.responseType)||eF(c.response.headers.get("content-type")||"");switch(m){case"json":{const g=await c.response.text(),y=c.options.parseResponse||nf;c.response._data=y(g);break}case"stream":{c.response._data=c.response.body||c.response._bodyInit;break}default:c.response._data=await c.response[m]()}}return c.options.onResponse&&await Qc(c,c.options.onResponse),!c.options.ignoreResponseError&&c.response.status>=400&&c.response.status<600?(c.options.onResponseError&&await Qc(c,c.options.onResponseError),await r(c)):c.response},o=async function(l,u){return(await s(l,u))._data};return o.raw=s,o.native=(...a)=>t(...a),o.create=(a={},l={})=>bE({...e,...l,defaults:{...e.defaults,...l.defaults,...a}}),o}const sf=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),sF=sf.fetch?(...e)=>sf.fetch(...e):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),oF=sf.Headers,aF=sf.AbortController,lF=bE({fetch:sF,Headers:oF,AbortController:aF}),uF=lF,cF=()=>{var e;return((e=window==null?void 0:window.__NUXT__)==null?void 0:e.config)||{}},of=cF().app,dF=()=>of.baseURL,fF=()=>of.buildAssetsDir,Ay=(...e)=>yE(wE(),fF(),...e),wE=(...e)=>{const t=of.cdnURL||of.baseURL;return e.length?yE(t,...e):t};globalThis.__buildAssetsURL=Ay,globalThis.__publicAssetsURL=wE;globalThis.$fetch||(globalThis.$fetch=uF.create({baseURL:dF()}));function Xv(e,t={},n){for(const i in e){const r=e[i],s=n?`${n}:${i}`:i;typeof r=="object"&&r!==null?Xv(r,t,s):typeof r=="function"&&(t[s]=r)}return t}const hF={run:e=>e()},mF=()=>hF,SE=typeof console.createTask<"u"?console.createTask:mF;function vF(e,t){const n=t.shift(),i=SE(n);return e.reduce((r,s)=>r.then(()=>i.run(()=>s(...t))),Promise.resolve())}function gF(e,t){const n=t.shift(),i=SE(n);return Promise.all(e.map(r=>i.run(()=>r(...t))))}function qm(e,t){for(const n of[...e])n(t)}class pF{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,i={}){if(!t||typeof n!="function")return()=>{};const r=t;let s;for(;this._deprecatedHooks[t];)s=this._deprecatedHooks[t],t=s.to;if(s&&!i.allowDeprecated){let o=s.message;o||(o=`${r} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let i,r=(...s)=>(typeof i=="function"&&i(),i=void 0,r=void 0,n(...s));return i=this.hook(t,r),i}removeHook(t,n){if(this._hooks[t]){const i=this._hooks[t].indexOf(n);i!==-1&&this._hooks[t].splice(i,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const i=this._hooks[t]||[];delete this._hooks[t];for(const r of i)this.hook(t,r)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=Xv(t),i=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(const r of i.splice(0,i.length))r()}}removeHooks(t){const n=Xv(t);for(const i in n)this.removeHook(i,n[i])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith(vF,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(gF,t,...n)}callHookWith(t,n,...i){const r=this._before||this._after?{name:n,args:i,context:{}}:void 0;this._before&&qm(this._before,r);const s=t(n in this._hooks?[...this._hooks[n]]:[],i);return s instanceof Promise?s.finally(()=>{this._after&&r&&qm(this._after,r)}):(this._after&&r&&qm(this._after,r),s)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function CE(){return new pF}function yF(e={}){let t,n=!1;const i=o=>{if(t&&t!==o)throw new Error("Context conflict")};let r;if(e.asyncContext){const o=e.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?r=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const s=()=>{if(r&&t===void 0){const o=r.getStore();if(o!==void 0)return o}return t};return{use:()=>{const o=s();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>s(),set:(o,a)=>{a||i(o),t=o,n=!0},unset:()=>{t=void 0,n=!1},call:(o,a)=>{i(o),t=o;try{return r?r.run(o,a):a()}finally{n||(t=void 0)}},async callAsync(o,a){t=o;const l=()=>{t=o},u=()=>t===o?l:void 0;Jv.add(u);try{const c=r?r.run(o,a):a();return n||(t=void 0),await c}finally{Jv.delete(u)}}}}function _F(e={}){const t={};return{get(n,i={}){return t[n]||(t[n]=yF({...e,...i})),t[n],t[n]}}}const af=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},A0="__unctx__",bF=af[A0]||(af[A0]=_F()),wF=(e,t={})=>bF.get(e,t),P0="__unctx_async_handlers__",Jv=af[P0]||(af[P0]=new Set);function Ia(e){const t=[];for(const r of Jv){const s=r();s&&t.push(s)}const n=()=>{for(const r of t)r()};let i=e();return i&&typeof i=="object"&&"catch"in i&&(i=i.catch(r=>{throw n(),r})),[i,n]}const ree=!1,Zv=!1,SF=!1,see={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},CF=null,TF="#__nuxt",TE="nuxt-app",x0=36e5,IF="vite:preloadError";function IE(e=TE){return wF(e,{asyncContext:!1})}const kF="__nuxt_plugin";function EF(e){var r;let t=0;const n={_id:e.id||TE||"nuxt-app",_scope:nc(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.14.1592"},get vue(){return n.vueApp.version}},payload:Tr({...((r=e.ssrContext)==null?void 0:r.payload)||{},data:Tr({}),state:Lt({}),once:new Set,_errors:Tr({})}),static:{data:{}},runWithContext(s){return n._scope.active&&!WI()?n._scope.run(()=>R0(n,s)):R0(n,s)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};t++;let s=!1;return()=>{if(!s&&(s=!0,t--,t===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Tr({}),_payloadRevivers:{},...e};{const s=window.__NUXT__;if(s)for(const o in s)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],s[o]);break;default:n.payload[o]=s[o]}}n.hooks=CE(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(s,o)=>{const a="$"+s;Xc(n,a,o),Xc(n.vueApp.config.globalProperties,a,o)},Xc(n.vueApp,"$nuxt",n),Xc(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(IF,o=>{n.callHook("app:chunkError",{error:o.payload}),(n.isHydrating||o.payload.message.includes("Unable to preload CSS"))&&o.preventDefault()}),window.useNuxtApp=window.useNuxtApp||Jt;const s=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",s)}const i=n.payload.config;return n.provide("config",i),n}function AF(e,t){t.hooks&&e.hooks.addHooks(t.hooks)}async function PF(e,t){if(typeof t=="function"){const{provide:n}=await e.runWithContext(()=>t(e))||{};if(n&&typeof n=="object")for(const i in n)e.provide(i,n[i])}}async function xF(e,t){const n=[],i=[],r=[],s=[];let o=0;async function a(l){var c;const u=((c=l.dependsOn)==null?void 0:c.filter(d=>t.some(f=>f._name===d)&&!n.includes(d)))??[];if(u.length>0)i.push([new Set(u),l]);else{const d=PF(e,l).then(async()=>{l._name&&(n.push(l._name),await Promise.all(i.map(async([f,m])=>{f.has(l._name)&&(f.delete(l._name),f.size===0&&(o++,await a(m)))})))});l.parallel?r.push(d.catch(f=>s.push(f))):await d}}for(const l of t)AF(e,l);for(const l of t)await a(l);if(await Promise.all(r),o)for(let l=0;l<o;l++)await Promise.all(r);if(s.length)throw s[0]}function Zn(e){if(typeof e=="function")return e;const t=e._name||e.name;return delete e.name,Object.assign(e.setup||(()=>{}),e,{[kF]:!0,_name:t})}const RF=Zn;function R0(e,t,n){const i=()=>t();return IE(e._id).set(e),e.vueApp.runWithContext(i)}function VF(e){var n;let t;return Rk()&&(t=(n=el())==null?void 0:n.appContext.app.$nuxt),t=t||IE(e).tryUse(),t||null}function Jt(e){const t=VF(e);if(!t)throw new Error("[nuxt] instance unavailable");return t}function ac(e){return Jt().$config}function Xc(e,t,n){Object.defineProperty(e,t,{get:()=>n})}function DF(e,t){return{ctx:{table:e},matchAll:n=>EE(n,e)}}function kE(e){const t={};for(const n in e)t[n]=n==="dynamic"?new Map(Object.entries(e[n]).map(([i,r])=>[i,kE(r)])):new Map(Object.entries(e[n]));return t}function MF(e){return DF(kE(e))}function EE(e,t,n){e.endsWith("/")&&(e=e.slice(0,-1)||"/");const i=[];for(const[s,o]of V0(t.wildcard))(e===s||e.startsWith(s+"/"))&&i.push(o);for(const[s,o]of V0(t.dynamic))if(e.startsWith(s+"/")){const a="/"+e.slice(s.length).split("/").splice(2).join("/");i.push(...EE(a,o))}const r=t.static.get(e);return r&&i.push(r),i.filter(Boolean)}function V0(e){return[...e.entries()].sort((t,n)=>t[0].length-n[0].length)}function Gm(e){if(e===null||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in e?!1:Symbol.toStringTag in e?Object.prototype.toString.call(e)==="[object Module]":!0}function eg(e,t,n=".",i){if(!Gm(t))return eg(e,{},n,i);const r=Object.assign({},t);for(const s in e){if(s==="__proto__"||s==="constructor")continue;const o=e[s];o!=null&&(i&&i(r,s,o,n)||(Array.isArray(o)&&Array.isArray(r[s])?r[s]=[...o,...r[s]]:Gm(o)&&Gm(r[s])?r[s]=eg(o,r[s],(n?`${n}.`:"")+s.toString(),i):r[s]=o))}return r}function OF(e){return(...t)=>t.reduce((n,i)=>eg(n,i,"",e),{})}const AE=OF();function NF(e,t){try{return t in e}catch{return!1}}var LF=Object.defineProperty,FF=(e,t,n)=>t in e?LF(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Gs=(e,t,n)=>(FF(e,typeof t!="symbol"?t+"":t,n),n);class tg extends Error{constructor(t,n={}){super(t,n),Gs(this,"statusCode",500),Gs(this,"fatal",!1),Gs(this,"unhandled",!1),Gs(this,"statusMessage"),Gs(this,"data"),Gs(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const t={message:this.message,statusCode:ig(this.statusCode,500)};return this.statusMessage&&(t.statusMessage=PE(this.statusMessage)),this.data!==void 0&&(t.data=this.data),t}}Gs(tg,"__h3_error__",!0);function ng(e){if(typeof e=="string")return new tg(e);if(BF(e))return e;const t=new tg(e.message??e.statusMessage??"",{cause:e.cause||e});if(NF(e,"stack"))try{Object.defineProperty(t,"stack",{get(){return e.stack}})}catch{try{t.stack=e.stack}catch{}}if(e.data&&(t.data=e.data),e.statusCode?t.statusCode=ig(e.statusCode,t.statusCode):e.status&&(t.statusCode=ig(e.status,t.statusCode)),e.statusMessage?t.statusMessage=e.statusMessage:e.statusText&&(t.statusMessage=e.statusText),t.statusMessage){const n=t.statusMessage;PE(t.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return e.fatal!==void 0&&(t.fatal=e.fatal),e.unhandled!==void 0&&(t.unhandled=e.unhandled),t}function BF(e){var t;return((t=e==null?void 0:e.constructor)==null?void 0:t.__h3_error__)===!0}const $F=/[^\u0009\u0020-\u007E]/g;function PE(e=""){return e.replace($F,"")}function ig(e,t=200){return!e||(typeof e=="string"&&(e=Number.parseInt(e,10)),e<100||e>999)?t:e}const UF=Symbol("layout-meta"),oh=Symbol("route"),Mi=()=>{var e;return(e=Jt())==null?void 0:e.$router},xE=()=>Rk()?Le(oh,Jt()._route):Jt()._route;const HF=()=>{try{if(Jt()._processingMiddleware)return!0}catch{return!1}return!1},oee=(e,t)=>{e||(e="/");const n=typeof e=="string"?e:"path"in e?jF(e):Mi().resolve(e).href;if(t!=null&&t.open){const{target:l="_blank",windowFeatures:u={}}=t.open,c=Object.entries(u).filter(([d,f])=>f!==void 0).map(([d,f])=>`${d.toLowerCase()}=${f}`).join(", ");return open(n,l,c),Promise.resolve()}const i=xo(n,{acceptRelative:!0}),r=(t==null?void 0:t.external)||i;if(r){if(!(t!=null&&t.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&UL(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const s=HF();if(!r&&s)return e;const o=Mi(),a=Jt();return r?(a._scope.stop(),t!=null&&t.replace?location.replace(n):location.href=n,s?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):t!=null&&t.replace?o.replace(e):o.push(e)};function jF(e){return gE(e.path||"",e.query||{})+(e.hash||"")}const RE="__nuxt_error",ah=()=>Q(Jt().payload,"error"),ha=e=>{const t=lh(e);try{const n=Jt(),i=ah();n.hooks.callHook("app:error",t),i.value=i.value||t}catch{throw t}return t},WF=async(e={})=>{const t=Jt(),n=ah();t.callHook("app:error:cleared",e),e.redirect&&await Mi().replace(e.redirect),n.value=CF},zF=e=>!!e&&typeof e=="object"&&RE in e,lh=e=>{const t=ng(e);return Object.defineProperty(t,RE,{value:!0,configurable:!1,writable:!1}),t};var D0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae=function(e,t){if(!e)throw tl(t)},tl=function(e){return new Error("Firebase Database ("+VE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},qF=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=e[n++],o=e[n++],a=e[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[i++]=String.fromCharCode(55296+(l>>10)),t[i++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return t.join("")},uh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const s=e[r],o=r+1<e.length,a=o?e[r+1]:0,l=r+2<e.length,u=l?e[r+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(f=64)),i.push(n[c],n[d],n[f],n[m])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(DE(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):qF(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const s=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const d=r<e.length?n[e.charAt(r)]:64;if(++r,s==null||a==null||u==null||d==null)throw new GF;const f=s<<2|a>>4;if(i.push(f),u!==64){const m=a<<4&240|u>>2;if(i.push(m),d!==64){const g=u<<6&192|d;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class GF extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ME=function(e){const t=DE(e);return uh.encodeByteArray(t,!0)},lf=function(e){return ME(e).replace(/\./g,"")},uf=function(e){try{return uh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KF(e){return OE(void 0,e)}function OE(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!YF(n)||(e[n]=OE(e[n],t[n]));return e}function YF(e){return e!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QF(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XF=()=>QF().__FIREBASE_DEFAULTS__,JF=()=>{if(typeof process>"u"||typeof D0>"u")return;const e=D0.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ZF=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&uf(e[1]);return t&&JSON.parse(t)},ch=()=>{try{return XF()||JF()||ZF()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},e2=e=>{var t,n;return(n=(t=ch())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},t2=e=>{const t=e2(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},NE=()=>{var e;return(e=ch())===null||e===void 0?void 0:e.config},n2=e=>{var t;return(t=ch())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i2(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[lf(JSON.stringify(n)),lf(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Py(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bn())}function r2(){var e;const t=(e=ch())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function s2(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function o2(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function LE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function a2(){const e=Bn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function FE(){return VE.NODE_ADMIN===!0}function l2(){return!r2()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function BE(){try{return typeof indexedDB=="object"}catch{return!1}}function u2(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;t(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c2="FirebaseError";class lr extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=c2,Object.setPrototypeOf(this,lr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nl.prototype.create)}}class nl{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},r=`${this.service}/${t}`,s=this.errors[t],o=s?d2(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new lr(r,a,i)}}function d2(e,t){return e.replace(f2,(n,i)=>{const r=t[i];return r!=null?String(r):`<${i}?>`})}const f2=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(e){return JSON.parse(e)}function wn(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=Iu(uf(s[0])||""),n=Iu(uf(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:i,signature:r}},h2=function(e){const t=$E(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},m2=function(e){const t=$E(e).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Na(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function rg(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function cf(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function df(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const s=e[r],o=t[r];if(M0(s)&&M0(o)){if(!df(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function M0(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(r=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const i=this.W_;if(typeof t=="string")for(let d=0;d<16;d++)i[d]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)i[d]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let d=16;d<80;d++){const f=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(f<<1|f>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(r<<5|r>>>27)+u+l+c+i[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=f}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<n;)if(s[o]=t.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=t[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)t[i]=this.chain_[r]>>s&255,++i;return t}}function g2(e,t){const n=new p2(e,t);return n.subscribe.bind(n)}class p2{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let r;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");y2(t,["next","error","complete"])?r=t:r={next:t,error:n,complete:i},r.next===void 0&&(r.next=Km),r.error===void 0&&(r.error=Km),r.complete===void 0&&(r.complete=Km);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function y2(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Km(){}function _2(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b2=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,Ae(i<e.length,"Surrogate pair missing trail surrogate.");const o=e.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},dh=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(e){return e&&e._delegate?e._delegate:e}class Ni{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new Tu;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(C2(t))try{this.getOrInitializeService({instanceIdentifier:Ks})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(t=Ks){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ks){return this.instances.has(t)}getOptions(t=Ks){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(t,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:S2(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Ks){return this.component?this.component.multipleInstances?t:Ks:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function S2(e){return e===Ks?void 0:e}function C2(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new w2(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Xe||(Xe={}));const I2={debug:Xe.DEBUG,verbose:Xe.VERBOSE,info:Xe.INFO,warn:Xe.WARN,error:Xe.ERROR,silent:Xe.SILENT},k2=Xe.INFO,E2={[Xe.DEBUG]:"log",[Xe.VERBOSE]:"log",[Xe.INFO]:"info",[Xe.WARN]:"warn",[Xe.ERROR]:"error"},A2=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),r=E2[t];if(r)console[r](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class lc{constructor(t){this.name=t,this._logLevel=k2,this._logHandler=A2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Xe))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?I2[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Xe.DEBUG,...t),this._logHandler(this,Xe.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Xe.VERBOSE,...t),this._logHandler(this,Xe.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Xe.INFO,...t),this._logHandler(this,Xe.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Xe.WARN,...t),this._logHandler(this,Xe.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Xe.ERROR,...t),this._logHandler(this,Xe.ERROR,...t)}}const P2=(e,t)=>t.some(n=>e instanceof n);let O0,N0;function x2(){return O0||(O0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function R2(){return N0||(N0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const UE=new WeakMap,sg=new WeakMap,HE=new WeakMap,Ym=new WeakMap,xy=new WeakMap;function V2(e){const t=new Promise((n,i)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(hs(e.result)),r()},o=()=>{i(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&UE.set(n,e)}).catch(()=>{}),xy.set(t,e),t}function D2(e){if(sg.has(e))return;const t=new Promise((n,i)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});sg.set(e,t)}let og={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return sg.get(e);if(t==="objectStoreNames")return e.objectStoreNames||HE.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hs(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function M2(e){og=e(og)}function O2(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(Qm(this),t,...n);return HE.set(i,t.sort?t.sort():[t]),hs(i)}:R2().includes(e)?function(...t){return e.apply(Qm(this),t),hs(UE.get(this))}:function(...t){return hs(e.apply(Qm(this),t))}}function N2(e){return typeof e=="function"?O2(e):(e instanceof IDBTransaction&&D2(e),P2(e,x2())?new Proxy(e,og):e)}function hs(e){if(e instanceof IDBRequest)return V2(e);if(Ym.has(e))return Ym.get(e);const t=N2(e);return t!==e&&(Ym.set(e,t),xy.set(t,e)),t}const Qm=e=>xy.get(e);function L2(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=hs(o);return i&&o.addEventListener("upgradeneeded",l=>{i(hs(o.result),l.oldVersion,l.newVersion,hs(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const F2=["get","getKey","getAll","getAllKeys","count"],B2=["put","add","delete","clear"],Xm=new Map;function L0(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Xm.get(t))return Xm.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=B2.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||F2.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let u=l.store;return i&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&l.done]))[0]};return Xm.set(t,s),s}M2(e=>({...e,get:(t,n,i)=>L0(t,n)||e.get(t,n,i),has:(t,n)=>!!L0(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(U2(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function U2(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ag="@firebase/app",F0="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new lc("@firebase/app"),H2="@firebase/app-compat",j2="@firebase/analytics-compat",W2="@firebase/analytics",z2="@firebase/app-check-compat",q2="@firebase/app-check",G2="@firebase/auth",K2="@firebase/auth-compat",Y2="@firebase/database",Q2="@firebase/data-connect",X2="@firebase/database-compat",J2="@firebase/functions",Z2="@firebase/functions-compat",eB="@firebase/installations",tB="@firebase/installations-compat",nB="@firebase/messaging",iB="@firebase/messaging-compat",rB="@firebase/performance",sB="@firebase/performance-compat",oB="@firebase/remote-config",aB="@firebase/remote-config-compat",lB="@firebase/storage",uB="@firebase/storage-compat",cB="@firebase/firestore",dB="@firebase/vertexai",fB="@firebase/firestore-compat",hB="firebase",mB="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg="[DEFAULT]",vB={[ag]:"fire-core",[H2]:"fire-core-compat",[W2]:"fire-analytics",[j2]:"fire-analytics-compat",[q2]:"fire-app-check",[z2]:"fire-app-check-compat",[G2]:"fire-auth",[K2]:"fire-auth-compat",[Y2]:"fire-rtdb",[Q2]:"fire-data-connect",[X2]:"fire-rtdb-compat",[J2]:"fire-fn",[Z2]:"fire-fn-compat",[eB]:"fire-iid",[tB]:"fire-iid-compat",[nB]:"fire-fcm",[iB]:"fire-fcm-compat",[rB]:"fire-perf",[sB]:"fire-perf-compat",[oB]:"fire-rc",[aB]:"fire-rc-compat",[lB]:"fire-gcs",[uB]:"fire-gcs-compat",[cB]:"fire-fst",[fB]:"fire-fst-compat",[dB]:"fire-vertex","fire-js":"fire-js",[hB]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff=new Map,gB=new Map,ug=new Map;function B0(e,t){try{e.container.addComponent(t)}catch(n){Vr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function nr(e){const t=e.name;if(ug.has(t))return Vr.debug(`There were multiple attempts to register component ${t}.`),!1;ug.set(t,e);for(const n of ff.values())B0(n,e);for(const n of gB.values())B0(n,e);return!0}function jE(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function as(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pB={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ms=new nl("app","Firebase",pB);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yB{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ni("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ms.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=mB;function WE(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i=Object.assign({name:lg,automaticDataCollectionEnabled:!1},t),r=i.name;if(typeof r!="string"||!r)throw ms.create("bad-app-name",{appName:String(r)});if(n||(n=NE()),!n)throw ms.create("no-options");const s=ff.get(r);if(s){if(df(n,s.options)&&df(i,s.config))return s;throw ms.create("duplicate-app",{appName:r})}const o=new T2(r);for(const l of ug.values())o.addComponent(l);const a=new yB(n,i,o);return ff.set(r,a),a}function zE(e=lg){const t=ff.get(e);if(!t&&e===lg&&NE())return WE();if(!t)throw ms.create("no-app",{appName:e});return t}function si(e,t,n){var i;let r=(i=vB[e])!==null&&i!==void 0?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Vr.warn(a.join(" "));return}nr(new Ni(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _B="firebase-heartbeat-database",bB=1,ku="firebase-heartbeat-store";let Jm=null;function qE(){return Jm||(Jm=L2(_B,bB,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ku)}catch(n){console.warn(n)}}}}).catch(e=>{throw ms.create("idb-open",{originalErrorMessage:e.message})})),Jm}async function wB(e){try{const n=(await qE()).transaction(ku),i=await n.objectStore(ku).get(GE(e));return await n.done,i}catch(t){if(t instanceof lr)Vr.warn(t.message);else{const n=ms.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Vr.warn(n.message)}}}async function $0(e,t){try{const i=(await qE()).transaction(ku,"readwrite");await i.objectStore(ku).put(t,GE(e)),await i.done}catch(n){if(n instanceof lr)Vr.warn(n.message);else{const i=ms.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vr.warn(i.message)}}}function GE(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SB=1024,CB=30*24*60*60*1e3;class TB{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kB(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=U0();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=CB}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Vr.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=U0(),{heartbeatsToSend:i,unsentEntries:r}=IB(this._heartbeatsCache.heartbeats),s=lf(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Vr.warn(n),""}}}function U0(){return new Date().toISOString().substring(0,10)}function IB(e,t=SB){const n=[];let i=e.slice();for(const r of e){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),H0(n)>t){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),H0(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class kB{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return BE()?u2().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wB(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return $0(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return $0(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function H0(e){return lf(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EB(e){nr(new Ni("platform-logger",t=>new $2(t),"PRIVATE")),nr(new Ni("heartbeat",t=>new TB(t),"PRIVATE")),si(ag,F0,e),si(ag,F0,"esm2017"),si("fire-js","")}EB("");var j0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ro,KE;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(A,b){function _(){}_.prototype=b.prototype,A.D=b.prototype,A.prototype=new _,A.prototype.constructor=A,A.C=function(I,E,k){for(var R=Array(arguments.length-2),B=2;B<arguments.length;B++)R[B-2]=arguments[B];return b.prototype[E].apply(I,R)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(A,b,_){_||(_=0);var I=Array(16);if(typeof b=="string")for(var E=0;16>E;++E)I[E]=b.charCodeAt(_++)|b.charCodeAt(_++)<<8|b.charCodeAt(_++)<<16|b.charCodeAt(_++)<<24;else for(E=0;16>E;++E)I[E]=b[_++]|b[_++]<<8|b[_++]<<16|b[_++]<<24;b=A.g[0],_=A.g[1],E=A.g[2];var k=A.g[3],R=b+(k^_&(E^k))+I[0]+3614090360&4294967295;b=_+(R<<7&4294967295|R>>>25),R=k+(E^b&(_^E))+I[1]+3905402710&4294967295,k=b+(R<<12&4294967295|R>>>20),R=E+(_^k&(b^_))+I[2]+606105819&4294967295,E=k+(R<<17&4294967295|R>>>15),R=_+(b^E&(k^b))+I[3]+3250441966&4294967295,_=E+(R<<22&4294967295|R>>>10),R=b+(k^_&(E^k))+I[4]+4118548399&4294967295,b=_+(R<<7&4294967295|R>>>25),R=k+(E^b&(_^E))+I[5]+1200080426&4294967295,k=b+(R<<12&4294967295|R>>>20),R=E+(_^k&(b^_))+I[6]+2821735955&4294967295,E=k+(R<<17&4294967295|R>>>15),R=_+(b^E&(k^b))+I[7]+4249261313&4294967295,_=E+(R<<22&4294967295|R>>>10),R=b+(k^_&(E^k))+I[8]+1770035416&4294967295,b=_+(R<<7&4294967295|R>>>25),R=k+(E^b&(_^E))+I[9]+2336552879&4294967295,k=b+(R<<12&4294967295|R>>>20),R=E+(_^k&(b^_))+I[10]+4294925233&4294967295,E=k+(R<<17&4294967295|R>>>15),R=_+(b^E&(k^b))+I[11]+2304563134&4294967295,_=E+(R<<22&4294967295|R>>>10),R=b+(k^_&(E^k))+I[12]+1804603682&4294967295,b=_+(R<<7&4294967295|R>>>25),R=k+(E^b&(_^E))+I[13]+4254626195&4294967295,k=b+(R<<12&4294967295|R>>>20),R=E+(_^k&(b^_))+I[14]+2792965006&4294967295,E=k+(R<<17&4294967295|R>>>15),R=_+(b^E&(k^b))+I[15]+1236535329&4294967295,_=E+(R<<22&4294967295|R>>>10),R=b+(E^k&(_^E))+I[1]+4129170786&4294967295,b=_+(R<<5&4294967295|R>>>27),R=k+(_^E&(b^_))+I[6]+3225465664&4294967295,k=b+(R<<9&4294967295|R>>>23),R=E+(b^_&(k^b))+I[11]+643717713&4294967295,E=k+(R<<14&4294967295|R>>>18),R=_+(k^b&(E^k))+I[0]+3921069994&4294967295,_=E+(R<<20&4294967295|R>>>12),R=b+(E^k&(_^E))+I[5]+3593408605&4294967295,b=_+(R<<5&4294967295|R>>>27),R=k+(_^E&(b^_))+I[10]+38016083&4294967295,k=b+(R<<9&4294967295|R>>>23),R=E+(b^_&(k^b))+I[15]+3634488961&4294967295,E=k+(R<<14&4294967295|R>>>18),R=_+(k^b&(E^k))+I[4]+3889429448&4294967295,_=E+(R<<20&4294967295|R>>>12),R=b+(E^k&(_^E))+I[9]+568446438&4294967295,b=_+(R<<5&4294967295|R>>>27),R=k+(_^E&(b^_))+I[14]+3275163606&4294967295,k=b+(R<<9&4294967295|R>>>23),R=E+(b^_&(k^b))+I[3]+4107603335&4294967295,E=k+(R<<14&4294967295|R>>>18),R=_+(k^b&(E^k))+I[8]+1163531501&4294967295,_=E+(R<<20&4294967295|R>>>12),R=b+(E^k&(_^E))+I[13]+2850285829&4294967295,b=_+(R<<5&4294967295|R>>>27),R=k+(_^E&(b^_))+I[2]+4243563512&4294967295,k=b+(R<<9&4294967295|R>>>23),R=E+(b^_&(k^b))+I[7]+1735328473&4294967295,E=k+(R<<14&4294967295|R>>>18),R=_+(k^b&(E^k))+I[12]+2368359562&4294967295,_=E+(R<<20&4294967295|R>>>12),R=b+(_^E^k)+I[5]+4294588738&4294967295,b=_+(R<<4&4294967295|R>>>28),R=k+(b^_^E)+I[8]+2272392833&4294967295,k=b+(R<<11&4294967295|R>>>21),R=E+(k^b^_)+I[11]+1839030562&4294967295,E=k+(R<<16&4294967295|R>>>16),R=_+(E^k^b)+I[14]+4259657740&4294967295,_=E+(R<<23&4294967295|R>>>9),R=b+(_^E^k)+I[1]+2763975236&4294967295,b=_+(R<<4&4294967295|R>>>28),R=k+(b^_^E)+I[4]+1272893353&4294967295,k=b+(R<<11&4294967295|R>>>21),R=E+(k^b^_)+I[7]+4139469664&4294967295,E=k+(R<<16&4294967295|R>>>16),R=_+(E^k^b)+I[10]+3200236656&4294967295,_=E+(R<<23&4294967295|R>>>9),R=b+(_^E^k)+I[13]+681279174&4294967295,b=_+(R<<4&4294967295|R>>>28),R=k+(b^_^E)+I[0]+3936430074&4294967295,k=b+(R<<11&4294967295|R>>>21),R=E+(k^b^_)+I[3]+3572445317&4294967295,E=k+(R<<16&4294967295|R>>>16),R=_+(E^k^b)+I[6]+76029189&4294967295,_=E+(R<<23&4294967295|R>>>9),R=b+(_^E^k)+I[9]+3654602809&4294967295,b=_+(R<<4&4294967295|R>>>28),R=k+(b^_^E)+I[12]+3873151461&4294967295,k=b+(R<<11&4294967295|R>>>21),R=E+(k^b^_)+I[15]+530742520&4294967295,E=k+(R<<16&4294967295|R>>>16),R=_+(E^k^b)+I[2]+3299628645&4294967295,_=E+(R<<23&4294967295|R>>>9),R=b+(E^(_|~k))+I[0]+4096336452&4294967295,b=_+(R<<6&4294967295|R>>>26),R=k+(_^(b|~E))+I[7]+1126891415&4294967295,k=b+(R<<10&4294967295|R>>>22),R=E+(b^(k|~_))+I[14]+2878612391&4294967295,E=k+(R<<15&4294967295|R>>>17),R=_+(k^(E|~b))+I[5]+4237533241&4294967295,_=E+(R<<21&4294967295|R>>>11),R=b+(E^(_|~k))+I[12]+1700485571&4294967295,b=_+(R<<6&4294967295|R>>>26),R=k+(_^(b|~E))+I[3]+2399980690&4294967295,k=b+(R<<10&4294967295|R>>>22),R=E+(b^(k|~_))+I[10]+4293915773&4294967295,E=k+(R<<15&4294967295|R>>>17),R=_+(k^(E|~b))+I[1]+2240044497&4294967295,_=E+(R<<21&4294967295|R>>>11),R=b+(E^(_|~k))+I[8]+1873313359&4294967295,b=_+(R<<6&4294967295|R>>>26),R=k+(_^(b|~E))+I[15]+4264355552&4294967295,k=b+(R<<10&4294967295|R>>>22),R=E+(b^(k|~_))+I[6]+2734768916&4294967295,E=k+(R<<15&4294967295|R>>>17),R=_+(k^(E|~b))+I[13]+1309151649&4294967295,_=E+(R<<21&4294967295|R>>>11),R=b+(E^(_|~k))+I[4]+4149444226&4294967295,b=_+(R<<6&4294967295|R>>>26),R=k+(_^(b|~E))+I[11]+3174756917&4294967295,k=b+(R<<10&4294967295|R>>>22),R=E+(b^(k|~_))+I[2]+718787259&4294967295,E=k+(R<<15&4294967295|R>>>17),R=_+(k^(E|~b))+I[9]+3951481745&4294967295,A.g[0]=A.g[0]+b&4294967295,A.g[1]=A.g[1]+(E+(R<<21&4294967295|R>>>11))&4294967295,A.g[2]=A.g[2]+E&4294967295,A.g[3]=A.g[3]+k&4294967295}i.prototype.u=function(A,b){b===void 0&&(b=A.length);for(var _=b-this.blockSize,I=this.B,E=this.h,k=0;k<b;){if(E==0)for(;k<=_;)r(this,A,k),k+=this.blockSize;if(typeof A=="string"){for(;k<b;)if(I[E++]=A.charCodeAt(k++),E==this.blockSize){r(this,I),E=0;break}}else for(;k<b;)if(I[E++]=A[k++],E==this.blockSize){r(this,I),E=0;break}}this.h=E,this.o+=b},i.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var b=1;b<A.length-8;++b)A[b]=0;var _=8*this.o;for(b=A.length-8;b<A.length;++b)A[b]=_&255,_/=256;for(this.u(A),A=Array(16),b=_=0;4>b;++b)for(var I=0;32>I;I+=8)A[_++]=this.g[b]>>>I&255;return A};function s(A,b){var _=a;return Object.prototype.hasOwnProperty.call(_,A)?_[A]:_[A]=b(A)}function o(A,b){this.h=b;for(var _=[],I=!0,E=A.length-1;0<=E;E--){var k=A[E]|0;I&&k==b||(_[E]=k,I=!1)}this.g=_}var a={};function l(A){return-128<=A&&128>A?s(A,function(b){return new o([b|0],0>b?-1:0)}):new o([A|0],0>A?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return d;if(0>A)return p(u(-A));for(var b=[],_=1,I=0;A>=_;I++)b[I]=A/_|0,_*=4294967296;return new o(b,0)}function c(A,b){if(A.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(A.charAt(0)=="-")return p(c(A.substring(1),b));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(b,8)),I=d,E=0;E<A.length;E+=8){var k=Math.min(8,A.length-E),R=parseInt(A.substring(E,E+k),b);8>k?(k=u(Math.pow(b,k)),I=I.j(k).add(u(R))):(I=I.j(_),I=I.add(u(R)))}return I}var d=l(0),f=l(1),m=l(16777216);e=o.prototype,e.m=function(){if(y(this))return-p(this).m();for(var A=0,b=1,_=0;_<this.g.length;_++){var I=this.i(_);A+=(0<=I?I:4294967296+I)*b,b*=4294967296}return A},e.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(g(this))return"0";if(y(this))return"-"+p(this).toString(A);for(var b=u(Math.pow(A,6)),_=this,I="";;){var E=x(_,b).g;_=S(_,E.j(b));var k=((0<_.g.length?_.g[0]:_.h)>>>0).toString(A);if(_=E,g(_))return k+I;for(;6>k.length;)k="0"+k;I=k+I}},e.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function g(A){if(A.h!=0)return!1;for(var b=0;b<A.g.length;b++)if(A.g[b]!=0)return!1;return!0}function y(A){return A.h==-1}e.l=function(A){return A=S(this,A),y(A)?-1:g(A)?0:1};function p(A){for(var b=A.g.length,_=[],I=0;I<b;I++)_[I]=~A.g[I];return new o(_,~A.h).add(f)}e.abs=function(){return y(this)?p(this):this},e.add=function(A){for(var b=Math.max(this.g.length,A.g.length),_=[],I=0,E=0;E<=b;E++){var k=I+(this.i(E)&65535)+(A.i(E)&65535),R=(k>>>16)+(this.i(E)>>>16)+(A.i(E)>>>16);I=R>>>16,k&=65535,R&=65535,_[E]=R<<16|k}return new o(_,_[_.length-1]&-2147483648?-1:0)};function S(A,b){return A.add(p(b))}e.j=function(A){if(g(this)||g(A))return d;if(y(this))return y(A)?p(this).j(p(A)):p(p(this).j(A));if(y(A))return p(this.j(p(A)));if(0>this.l(m)&&0>A.l(m))return u(this.m()*A.m());for(var b=this.g.length+A.g.length,_=[],I=0;I<2*b;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(var E=0;E<A.g.length;E++){var k=this.i(I)>>>16,R=this.i(I)&65535,B=A.i(E)>>>16,$=A.i(E)&65535;_[2*I+2*E]+=R*$,w(_,2*I+2*E),_[2*I+2*E+1]+=k*$,w(_,2*I+2*E+1),_[2*I+2*E+1]+=R*B,w(_,2*I+2*E+1),_[2*I+2*E+2]+=k*B,w(_,2*I+2*E+2)}for(I=0;I<b;I++)_[I]=_[2*I+1]<<16|_[2*I];for(I=b;I<2*b;I++)_[I]=0;return new o(_,0)};function w(A,b){for(;(A[b]&65535)!=A[b];)A[b+1]+=A[b]>>>16,A[b]&=65535,b++}function T(A,b){this.g=A,this.h=b}function x(A,b){if(g(b))throw Error("division by zero");if(g(A))return new T(d,d);if(y(A))return b=x(p(A),b),new T(p(b.g),p(b.h));if(y(b))return b=x(A,p(b)),new T(p(b.g),b.h);if(30<A.g.length){if(y(A)||y(b))throw Error("slowDivide_ only works with positive integers.");for(var _=f,I=b;0>=I.l(A);)_=V(_),I=V(I);var E=D(_,1),k=D(I,1);for(I=D(I,2),_=D(_,2);!g(I);){var R=k.add(I);0>=R.l(A)&&(E=E.add(_),k=R),I=D(I,1),_=D(_,1)}return b=S(A,E.j(b)),new T(E,b)}for(E=d;0<=A.l(b);){for(_=Math.max(1,Math.floor(A.m()/b.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),k=u(_),R=k.j(b);y(R)||0<R.l(A);)_-=I,k=u(_),R=k.j(b);g(k)&&(k=f),E=E.add(k),A=S(A,R)}return new T(E,A)}e.A=function(A){return x(this,A).h},e.and=function(A){for(var b=Math.max(this.g.length,A.g.length),_=[],I=0;I<b;I++)_[I]=this.i(I)&A.i(I);return new o(_,this.h&A.h)},e.or=function(A){for(var b=Math.max(this.g.length,A.g.length),_=[],I=0;I<b;I++)_[I]=this.i(I)|A.i(I);return new o(_,this.h|A.h)},e.xor=function(A){for(var b=Math.max(this.g.length,A.g.length),_=[],I=0;I<b;I++)_[I]=this.i(I)^A.i(I);return new o(_,this.h^A.h)};function V(A){for(var b=A.g.length+1,_=[],I=0;I<b;I++)_[I]=A.i(I)<<1|A.i(I-1)>>>31;return new o(_,A.h)}function D(A,b){var _=b>>5;b%=32;for(var I=A.g.length-_,E=[],k=0;k<I;k++)E[k]=0<b?A.i(k+_)>>>b|A.i(k+_+1)<<32-b:A.i(k+_);return new o(E,A.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,KE=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=c,ro=o}).apply(typeof j0<"u"?j0:typeof self<"u"?self:typeof window<"u"?window:{});var Jc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var YE,Gl,QE,Cd,cg,XE,JE,ZE;(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,C,M){return h==Array.prototype||h==Object.prototype||(h[C]=M.value),h};function n(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Jc=="object"&&Jc];for(var C=0;C<h.length;++C){var M=h[C];if(M&&M.Math==Math)return M}throw Error("Cannot find global object")}var i=n(this);function r(h,C){if(C)e:{var M=i;h=h.split(".");for(var L=0;L<h.length-1;L++){var Z=h[L];if(!(Z in M))break e;M=M[Z]}h=h[h.length-1],L=M[h],C=C(L),C!=L&&C!=null&&t(M,h,{configurable:!0,writable:!0,value:C})}}function s(h,C){h instanceof String&&(h+="");var M=0,L=!1,Z={next:function(){if(!L&&M<h.length){var ae=M++;return{value:C(ae,h[ae]),done:!1}}return L=!0,{done:!0,value:void 0}}};return Z[Symbol.iterator]=function(){return Z},Z}r("Array.prototype.values",function(h){return h||function(){return s(this,function(C,M){return M})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(h){var C=typeof h;return C=C!="object"?C:h?Array.isArray(h)?"array":C:"null",C=="array"||C=="object"&&typeof h.length=="number"}function u(h){var C=typeof h;return C=="object"&&h!=null||C=="function"}function c(h,C,M){return h.call.apply(h.bind,arguments)}function d(h,C,M){if(!h)throw Error();if(2<arguments.length){var L=Array.prototype.slice.call(arguments,2);return function(){var Z=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(Z,L),h.apply(C,Z)}}return function(){return h.apply(C,arguments)}}function f(h,C,M){return f=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?c:d,f.apply(null,arguments)}function m(h,C){var M=Array.prototype.slice.call(arguments,1);return function(){var L=M.slice();return L.push.apply(L,arguments),h.apply(this,L)}}function g(h,C){function M(){}M.prototype=C.prototype,h.aa=C.prototype,h.prototype=new M,h.prototype.constructor=h,h.Qb=function(L,Z,ae){for(var Ee=Array(arguments.length-2),_t=2;_t<arguments.length;_t++)Ee[_t-2]=arguments[_t];return C.prototype[Z].apply(L,Ee)}}function y(h){const C=h.length;if(0<C){const M=Array(C);for(let L=0;L<C;L++)M[L]=h[L];return M}return[]}function p(h,C){for(let M=1;M<arguments.length;M++){const L=arguments[M];if(l(L)){const Z=h.length||0,ae=L.length||0;h.length=Z+ae;for(let Ee=0;Ee<ae;Ee++)h[Z+Ee]=L[Ee]}else h.push(L)}}class S{constructor(C,M){this.i=C,this.j=M,this.h=0,this.g=null}get(){let C;return 0<this.h?(this.h--,C=this.g,this.g=C.next,C.next=null):C=this.i(),C}}function w(h){return/^[\s\xa0]*$/.test(h)}function T(){var h=a.navigator;return h&&(h=h.userAgent)?h:""}function x(h){return x[" "](h),h}x[" "]=function(){};var V=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function D(h,C,M){for(const L in h)C.call(M,h[L],L,h)}function A(h,C){for(const M in h)C.call(void 0,h[M],M,h)}function b(h){const C={};for(const M in h)C[M]=h[M];return C}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(h,C){let M,L;for(let Z=1;Z<arguments.length;Z++){L=arguments[Z];for(M in L)h[M]=L[M];for(let ae=0;ae<_.length;ae++)M=_[ae],Object.prototype.hasOwnProperty.call(L,M)&&(h[M]=L[M])}}function E(h){var C=1;h=h.split(":");const M=[];for(;0<C&&h.length;)M.push(h.shift()),C--;return h.length&&M.push(h.join(":")),M}function k(h){a.setTimeout(()=>{throw h},0)}function R(){var h=H;let C=null;return h.g&&(C=h.g,h.g=h.g.next,h.g||(h.h=null),C.next=null),C}class B{constructor(){this.h=this.g=null}add(C,M){const L=$.get();L.set(C,M),this.h?this.h.next=L:this.g=L,this.h=L}}var $=new S(()=>new U,h=>h.reset());class U{constructor(){this.next=this.g=this.h=null}set(C,M){this.h=C,this.g=M,this.next=null}reset(){this.next=this.g=this.h=null}}let q,F=!1,H=new B,j=()=>{const h=a.Promise.resolve(void 0);q=()=>{h.then(W)}};var W=()=>{for(var h;h=R();){try{h.h.call(h.g)}catch(M){k(M)}var C=$;C.j(h),100>C.h&&(C.h++,h.next=C.g,C.g=h)}F=!1};function Y(){this.s=this.s,this.C=this.C}Y.prototype.s=!1,Y.prototype.ma=function(){this.s||(this.s=!0,this.N())},Y.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ce(h,C){this.type=h,this.g=this.target=C,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var ge=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var h=!1,C=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const M=()=>{};a.addEventListener("test",M,C),a.removeEventListener("test",M,C)}catch{}return h}();function Te(h,C){if(ce.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var M=this.type=h.type,L=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=C,C=h.relatedTarget){if(V){e:{try{x(C.nodeName);var Z=!0;break e}catch{}Z=!1}Z||(C=null)}}else M=="mouseover"?C=h.fromElement:M=="mouseout"&&(C=h.toElement);this.relatedTarget=C,L?(this.clientX=L.clientX!==void 0?L.clientX:L.pageX,this.clientY=L.clientY!==void 0?L.clientY:L.pageY,this.screenX=L.screenX||0,this.screenY=L.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:ie[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Te.aa.h.call(this)}}g(Te,ce);var ie={2:"touch",3:"pen",4:"mouse"};Te.prototype.h=function(){Te.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var K="closure_listenable_"+(1e6*Math.random()|0),se=0;function de(h,C,M,L,Z){this.listener=h,this.proxy=null,this.src=C,this.type=M,this.capture=!!L,this.ha=Z,this.key=++se,this.da=this.fa=!1}function le(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function oe(h){this.src=h,this.g={},this.h=0}oe.prototype.add=function(h,C,M,L,Z){var ae=h.toString();h=this.g[ae],h||(h=this.g[ae]=[],this.h++);var Ee=O(h,C,L,Z);return-1<Ee?(C=h[Ee],M||(C.fa=!1)):(C=new de(C,this.src,ae,!!L,Z),C.fa=M,h.push(C)),C};function we(h,C){var M=C.type;if(M in h.g){var L=h.g[M],Z=Array.prototype.indexOf.call(L,C,void 0),ae;(ae=0<=Z)&&Array.prototype.splice.call(L,Z,1),ae&&(le(C),h.g[M].length==0&&(delete h.g[M],h.h--))}}function O(h,C,M,L){for(var Z=0;Z<h.length;++Z){var ae=h[Z];if(!ae.da&&ae.listener==C&&ae.capture==!!M&&ae.ha==L)return Z}return-1}var N="closure_lm_"+(1e6*Math.random()|0),G={};function ee(h,C,M,L,Z){if(Array.isArray(C)){for(var ae=0;ae<C.length;ae++)ee(h,C[ae],M,L,Z);return null}return M=De(M),h&&h[K]?h.K(C,M,u(L)?!!L.capture:!!L,Z):X(h,C,M,!1,L,Z)}function X(h,C,M,L,Z,ae){if(!C)throw Error("Invalid event type");var Ee=u(Z)?!!Z.capture:!!Z,_t=Me(h);if(_t||(h[N]=_t=new oe(h)),M=_t.add(C,M,L,Ee,ae),M.proxy)return M;if(L=ue(),M.proxy=L,L.src=h,L.listener=M,h.addEventListener)ge||(Z=Ee),Z===void 0&&(Z=!1),h.addEventListener(C.toString(),L,Z);else if(h.attachEvent)h.attachEvent(be(C.toString()),L);else if(h.addListener&&h.removeListener)h.addListener(L);else throw Error("addEventListener and attachEvent are unavailable.");return M}function ue(){function h(M){return C.call(h.src,h.listener,M)}const C=he;return h}function ye(h,C,M,L,Z){if(Array.isArray(C))for(var ae=0;ae<C.length;ae++)ye(h,C[ae],M,L,Z);else L=u(L)?!!L.capture:!!L,M=De(M),h&&h[K]?(h=h.i,C=String(C).toString(),C in h.g&&(ae=h.g[C],M=O(ae,M,L,Z),-1<M&&(le(ae[M]),Array.prototype.splice.call(ae,M,1),ae.length==0&&(delete h.g[C],h.h--)))):h&&(h=Me(h))&&(C=h.g[C.toString()],h=-1,C&&(h=O(C,M,L,Z)),(M=-1<h?C[h]:null)&&fe(M))}function fe(h){if(typeof h!="number"&&h&&!h.da){var C=h.src;if(C&&C[K])we(C.i,h);else{var M=h.type,L=h.proxy;C.removeEventListener?C.removeEventListener(M,L,h.capture):C.detachEvent?C.detachEvent(be(M),L):C.addListener&&C.removeListener&&C.removeListener(L),(M=Me(C))?(we(M,h),M.h==0&&(M.src=null,C[N]=null)):le(h)}}}function be(h){return h in G?G[h]:G[h]="on"+h}function he(h,C){if(h.da)h=!0;else{C=new Te(C,this);var M=h.listener,L=h.ha||h.src;h.fa&&fe(h),h=M.call(L,C)}return h}function Me(h){return h=h[N],h instanceof oe?h:null}var ke="__closure_events_fn_"+(1e9*Math.random()>>>0);function De(h){return typeof h=="function"?h:(h[ke]||(h[ke]=function(C){return h.handleEvent(C)}),h[ke])}function xe(){Y.call(this),this.i=new oe(this),this.M=this,this.F=null}g(xe,Y),xe.prototype[K]=!0,xe.prototype.removeEventListener=function(h,C,M,L){ye(this,h,C,M,L)};function $e(h,C){var M,L=h.F;if(L)for(M=[];L;L=L.F)M.push(L);if(h=h.M,L=C.type||C,typeof C=="string")C=new ce(C,h);else if(C instanceof ce)C.target=C.target||h;else{var Z=C;C=new ce(L,h),I(C,Z)}if(Z=!0,M)for(var ae=M.length-1;0<=ae;ae--){var Ee=C.g=M[ae];Z=ft(Ee,L,!0,C)&&Z}if(Ee=C.g=h,Z=ft(Ee,L,!0,C)&&Z,Z=ft(Ee,L,!1,C)&&Z,M)for(ae=0;ae<M.length;ae++)Ee=C.g=M[ae],Z=ft(Ee,L,!1,C)&&Z}xe.prototype.N=function(){if(xe.aa.N.call(this),this.i){var h=this.i,C;for(C in h.g){for(var M=h.g[C],L=0;L<M.length;L++)le(M[L]);delete h.g[C],h.h--}}this.F=null},xe.prototype.K=function(h,C,M,L){return this.i.add(String(h),C,!1,M,L)},xe.prototype.L=function(h,C,M,L){return this.i.add(String(h),C,!0,M,L)};function ft(h,C,M,L){if(C=h.i.g[String(C)],!C)return!0;C=C.concat();for(var Z=!0,ae=0;ae<C.length;++ae){var Ee=C[ae];if(Ee&&!Ee.da&&Ee.capture==M){var _t=Ee.listener,bn=Ee.ha||Ee.src;Ee.fa&&we(h.i,Ee),Z=_t.call(bn,L)!==!1&&Z}}return Z&&!L.defaultPrevented}function ut(h,C,M){if(typeof h=="function")M&&(h=f(h,M));else if(h&&typeof h.handleEvent=="function")h=f(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(C)?-1:a.setTimeout(h,C||0)}function Tn(h){h.g=ut(()=>{h.g=null,h.i&&(h.i=!1,Tn(h))},h.l);const C=h.h;h.h=null,h.m.apply(null,C)}class cn extends Y{constructor(C,M){super(),this.m=C,this.l=M,this.h=null,this.i=!1,this.g=null}j(C){this.h=arguments,this.g?this.i=!0:Tn(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _n(h){Y.call(this),this.h=h,this.g={}}g(_n,Y);var In=[];function Wr(h){D(h.g,function(C,M){this.g.hasOwnProperty(M)&&fe(C)},h),h.g={}}_n.prototype.N=function(){_n.aa.N.call(this),Wr(this)},_n.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qo=a.JSON.stringify,Hn=a.JSON.parse,hi=class{stringify(h){return a.JSON.stringify(h,void 0)}parse(h){return a.JSON.parse(h,void 0)}};function Go(){}Go.prototype.h=null;function Gb(h){return h.h||(h.h=h.i())}function Kb(){}var Cl={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function gm(){ce.call(this,"d")}g(gm,ce);function pm(){ce.call(this,"c")}g(pm,ce);var Ls={},Yb=null;function Ec(){return Yb=Yb||new xe}Ls.La="serverreachability";function Qb(h){ce.call(this,Ls.La,h)}g(Qb,ce);function Tl(h){const C=Ec();$e(C,new Qb(C))}Ls.STAT_EVENT="statevent";function Xb(h,C){ce.call(this,Ls.STAT_EVENT,h),this.stat=C}g(Xb,ce);function jn(h){const C=Ec();$e(C,new Xb(C,h))}Ls.Ma="timingevent";function Jb(h,C){ce.call(this,Ls.Ma,h),this.size=C}g(Jb,ce);function Il(h,C){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){h()},C)}function kl(){this.g=!0}kl.prototype.xa=function(){this.g=!1};function wM(h,C,M,L,Z,ae){h.info(function(){if(h.g)if(ae)for(var Ee="",_t=ae.split("&"),bn=0;bn<_t.length;bn++){var ct=_t[bn].split("=");if(1<ct.length){var kn=ct[0];ct=ct[1];var En=kn.split("_");Ee=2<=En.length&&En[1]=="type"?Ee+(kn+"="+ct+"&"):Ee+(kn+"=redacted&")}}else Ee=null;else Ee=ae;return"XMLHTTP REQ ("+L+") [attempt "+Z+"]: "+C+`
`+M+`
`+Ee})}function SM(h,C,M,L,Z,ae,Ee){h.info(function(){return"XMLHTTP RESP ("+L+") [ attempt "+Z+"]: "+C+`
`+M+`
`+ae+" "+Ee})}function Ko(h,C,M,L){h.info(function(){return"XMLHTTP TEXT ("+C+"): "+TM(h,M)+(L?" "+L:"")})}function CM(h,C){h.info(function(){return"TIMEOUT: "+C})}kl.prototype.info=function(){};function TM(h,C){if(!h.g)return C;if(!C)return null;try{var M=JSON.parse(C);if(M){for(h=0;h<M.length;h++)if(Array.isArray(M[h])){var L=M[h];if(!(2>L.length)){var Z=L[1];if(Array.isArray(Z)&&!(1>Z.length)){var ae=Z[0];if(ae!="noop"&&ae!="stop"&&ae!="close")for(var Ee=1;Ee<Z.length;Ee++)Z[Ee]=""}}}}return qo(M)}catch{return C}}var Ac={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Zb={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ym;function Pc(){}g(Pc,Go),Pc.prototype.g=function(){return new XMLHttpRequest},Pc.prototype.i=function(){return{}},ym=new Pc;function zr(h,C,M,L){this.j=h,this.i=C,this.l=M,this.R=L||1,this.U=new _n(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ew}function ew(){this.i=null,this.g="",this.h=!1}var tw={},_m={};function bm(h,C,M){h.L=1,h.v=Dc(gr(C)),h.m=M,h.P=!0,nw(h,null)}function nw(h,C){h.F=Date.now(),xc(h),h.A=gr(h.v);var M=h.A,L=h.R;Array.isArray(L)||(L=[String(L)]),gw(M.i,"t",L),h.C=0,M=h.j.J,h.h=new ew,h.g=Mw(h.j,M?C:null,!h.m),0<h.O&&(h.M=new cn(f(h.Y,h,h.g),h.O)),C=h.U,M=h.g,L=h.ca;var Z="readystatechange";Array.isArray(Z)||(Z&&(In[0]=Z.toString()),Z=In);for(var ae=0;ae<Z.length;ae++){var Ee=ee(M,Z[ae],L||C.handleEvent,!1,C.h||C);if(!Ee)break;C.g[Ee.key]=Ee}C=h.H?b(h.H):{},h.m?(h.u||(h.u="POST"),C["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,C)):(h.u="GET",h.g.ea(h.A,h.u,null,C)),Tl(),wM(h.i,h.u,h.A,h.l,h.R,h.m)}zr.prototype.ca=function(h){h=h.target;const C=this.M;C&&pr(h)==3?C.j():this.Y(h)},zr.prototype.Y=function(h){try{if(h==this.g)e:{const En=pr(this.g);var C=this.g.Ba();const Xo=this.g.Z();if(!(3>En)&&(En!=3||this.g&&(this.h.h||this.g.oa()||Cw(this.g)))){this.J||En!=4||C==7||(C==8||0>=Xo?Tl(3):Tl(2)),wm(this);var M=this.g.Z();this.X=M;t:if(iw(this)){var L=Cw(this.g);h="";var Z=L.length,ae=pr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fs(this),El(this);var Ee="";break t}this.h.i=new a.TextDecoder}for(C=0;C<Z;C++)this.h.h=!0,h+=this.h.i.decode(L[C],{stream:!(ae&&C==Z-1)});L.length=0,this.h.g+=h,this.C=0,Ee=this.h.g}else Ee=this.g.oa();if(this.o=M==200,SM(this.i,this.u,this.A,this.l,this.R,En,M),this.o){if(this.T&&!this.K){t:{if(this.g){var _t,bn=this.g;if((_t=bn.g?bn.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(_t)){var ct=_t;break t}}ct=null}if(M=ct)Ko(this.i,this.l,M,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sm(this,M);else{this.o=!1,this.s=3,jn(12),Fs(this),El(this);break e}}if(this.P){M=!0;let Ii;for(;!this.J&&this.C<Ee.length;)if(Ii=IM(this,Ee),Ii==_m){En==4&&(this.s=4,jn(14),M=!1),Ko(this.i,this.l,null,"[Incomplete Response]");break}else if(Ii==tw){this.s=4,jn(15),Ko(this.i,this.l,Ee,"[Invalid Chunk]"),M=!1;break}else Ko(this.i,this.l,Ii,null),Sm(this,Ii);if(iw(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),En!=4||Ee.length!=0||this.h.h||(this.s=1,jn(16),M=!1),this.o=this.o&&M,!M)Ko(this.i,this.l,Ee,"[Invalid Chunked Response]"),Fs(this),El(this);else if(0<Ee.length&&!this.W){this.W=!0;var kn=this.j;kn.g==this&&kn.ba&&!kn.M&&(kn.j.info("Great, no buffering proxy detected. Bytes received: "+Ee.length),Am(kn),kn.M=!0,jn(11))}}else Ko(this.i,this.l,Ee,null),Sm(this,Ee);En==4&&Fs(this),this.o&&!this.J&&(En==4?xw(this.j,this):(this.o=!1,xc(this)))}else HM(this.g),M==400&&0<Ee.indexOf("Unknown SID")?(this.s=3,jn(12)):(this.s=0,jn(13)),Fs(this),El(this)}}}catch{}finally{}};function iw(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function IM(h,C){var M=h.C,L=C.indexOf(`
`,M);return L==-1?_m:(M=Number(C.substring(M,L)),isNaN(M)?tw:(L+=1,L+M>C.length?_m:(C=C.slice(L,L+M),h.C=L+M,C)))}zr.prototype.cancel=function(){this.J=!0,Fs(this)};function xc(h){h.S=Date.now()+h.I,rw(h,h.I)}function rw(h,C){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Il(f(h.ba,h),C)}function wm(h){h.B&&(a.clearTimeout(h.B),h.B=null)}zr.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(CM(this.i,this.A),this.L!=2&&(Tl(),jn(17)),Fs(this),this.s=2,El(this)):rw(this,this.S-h)};function El(h){h.j.G==0||h.J||xw(h.j,h)}function Fs(h){wm(h);var C=h.M;C&&typeof C.ma=="function"&&C.ma(),h.M=null,Wr(h.U),h.g&&(C=h.g,h.g=null,C.abort(),C.ma())}function Sm(h,C){try{var M=h.j;if(M.G!=0&&(M.g==h||Cm(M.h,h))){if(!h.K&&Cm(M.h,h)&&M.G==3){try{var L=M.Da.g.parse(C)}catch{L=null}if(Array.isArray(L)&&L.length==3){var Z=L;if(Z[0]==0){e:if(!M.u){if(M.g)if(M.g.F+3e3<h.F)Bc(M),Lc(M);else break e;Em(M),jn(18)}}else M.za=Z[1],0<M.za-M.T&&37500>Z[2]&&M.F&&M.v==0&&!M.C&&(M.C=Il(f(M.Za,M),6e3));if(1>=aw(M.h)&&M.ca){try{M.ca()}catch{}M.ca=void 0}}else $s(M,11)}else if((h.K||M.g==h)&&Bc(M),!w(C))for(Z=M.Da.g.parse(C),C=0;C<Z.length;C++){let ct=Z[C];if(M.T=ct[0],ct=ct[1],M.G==2)if(ct[0]=="c"){M.K=ct[1],M.ia=ct[2];const kn=ct[3];kn!=null&&(M.la=kn,M.j.info("VER="+M.la));const En=ct[4];En!=null&&(M.Aa=En,M.j.info("SVER="+M.Aa));const Xo=ct[5];Xo!=null&&typeof Xo=="number"&&0<Xo&&(L=1.5*Xo,M.L=L,M.j.info("backChannelRequestTimeoutMs_="+L)),L=M;const Ii=h.g;if(Ii){const Uc=Ii.g?Ii.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Uc){var ae=L.h;ae.g||Uc.indexOf("spdy")==-1&&Uc.indexOf("quic")==-1&&Uc.indexOf("h2")==-1||(ae.j=ae.l,ae.g=new Set,ae.h&&(Tm(ae,ae.h),ae.h=null))}if(L.D){const Pm=Ii.g?Ii.g.getResponseHeader("X-HTTP-Session-Id"):null;Pm&&(L.ya=Pm,kt(L.I,L.D,Pm))}}M.G=3,M.l&&M.l.ua(),M.ba&&(M.R=Date.now()-h.F,M.j.info("Handshake RTT: "+M.R+"ms")),L=M;var Ee=h;if(L.qa=Dw(L,L.J?L.ia:null,L.W),Ee.K){lw(L.h,Ee);var _t=Ee,bn=L.L;bn&&(_t.I=bn),_t.B&&(wm(_t),xc(_t)),L.g=Ee}else Aw(L);0<M.i.length&&Fc(M)}else ct[0]!="stop"&&ct[0]!="close"||$s(M,7);else M.G==3&&(ct[0]=="stop"||ct[0]=="close"?ct[0]=="stop"?$s(M,7):km(M):ct[0]!="noop"&&M.l&&M.l.ta(ct),M.v=0)}}Tl(4)}catch{}}var kM=class{constructor(h,C){this.g=h,this.map=C}};function sw(h){this.l=h||10,a.PerformanceNavigationTiming?(h=a.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ow(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function aw(h){return h.h?1:h.g?h.g.size:0}function Cm(h,C){return h.h?h.h==C:h.g?h.g.has(C):!1}function Tm(h,C){h.g?h.g.add(C):h.h=C}function lw(h,C){h.h&&h.h==C?h.h=null:h.g&&h.g.has(C)&&h.g.delete(C)}sw.prototype.cancel=function(){if(this.i=uw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function uw(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let C=h.i;for(const M of h.g.values())C=C.concat(M.D);return C}return y(h.i)}function EM(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(l(h)){for(var C=[],M=h.length,L=0;L<M;L++)C.push(h[L]);return C}C=[],M=0;for(L in h)C[M++]=h[L];return C}function AM(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(l(h)||typeof h=="string"){var C=[];h=h.length;for(var M=0;M<h;M++)C.push(M);return C}C=[],M=0;for(const L in h)C[M++]=L;return C}}}function cw(h,C){if(h.forEach&&typeof h.forEach=="function")h.forEach(C,void 0);else if(l(h)||typeof h=="string")Array.prototype.forEach.call(h,C,void 0);else for(var M=AM(h),L=EM(h),Z=L.length,ae=0;ae<Z;ae++)C.call(void 0,L[ae],M&&M[ae],h)}var dw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function PM(h,C){if(h){h=h.split("&");for(var M=0;M<h.length;M++){var L=h[M].indexOf("="),Z=null;if(0<=L){var ae=h[M].substring(0,L);Z=h[M].substring(L+1)}else ae=h[M];C(ae,Z?decodeURIComponent(Z.replace(/\+/g," ")):"")}}}function Bs(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Bs){this.h=h.h,Rc(this,h.j),this.o=h.o,this.g=h.g,Vc(this,h.s),this.l=h.l;var C=h.i,M=new xl;M.i=C.i,C.g&&(M.g=new Map(C.g),M.h=C.h),fw(this,M),this.m=h.m}else h&&(C=String(h).match(dw))?(this.h=!1,Rc(this,C[1]||"",!0),this.o=Al(C[2]||""),this.g=Al(C[3]||"",!0),Vc(this,C[4]),this.l=Al(C[5]||"",!0),fw(this,C[6]||"",!0),this.m=Al(C[7]||"")):(this.h=!1,this.i=new xl(null,this.h))}Bs.prototype.toString=function(){var h=[],C=this.j;C&&h.push(Pl(C,hw,!0),":");var M=this.g;return(M||C=="file")&&(h.push("//"),(C=this.o)&&h.push(Pl(C,hw,!0),"@"),h.push(encodeURIComponent(String(M)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),M=this.s,M!=null&&h.push(":",String(M))),(M=this.l)&&(this.g&&M.charAt(0)!="/"&&h.push("/"),h.push(Pl(M,M.charAt(0)=="/"?VM:RM,!0))),(M=this.i.toString())&&h.push("?",M),(M=this.m)&&h.push("#",Pl(M,MM)),h.join("")};function gr(h){return new Bs(h)}function Rc(h,C,M){h.j=M?Al(C,!0):C,h.j&&(h.j=h.j.replace(/:$/,""))}function Vc(h,C){if(C){if(C=Number(C),isNaN(C)||0>C)throw Error("Bad port number "+C);h.s=C}else h.s=null}function fw(h,C,M){C instanceof xl?(h.i=C,OM(h.i,h.h)):(M||(C=Pl(C,DM)),h.i=new xl(C,h.h))}function kt(h,C,M){h.i.set(C,M)}function Dc(h){return kt(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Al(h,C){return h?C?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Pl(h,C,M){return typeof h=="string"?(h=encodeURI(h).replace(C,xM),M&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function xM(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var hw=/[#\/\?@]/g,RM=/[#\?:]/g,VM=/[#\?]/g,DM=/[#\?@]/g,MM=/#/g;function xl(h,C){this.h=this.g=null,this.i=h||null,this.j=!!C}function qr(h){h.g||(h.g=new Map,h.h=0,h.i&&PM(h.i,function(C,M){h.add(decodeURIComponent(C.replace(/\+/g," ")),M)}))}e=xl.prototype,e.add=function(h,C){qr(this),this.i=null,h=Yo(this,h);var M=this.g.get(h);return M||this.g.set(h,M=[]),M.push(C),this.h+=1,this};function mw(h,C){qr(h),C=Yo(h,C),h.g.has(C)&&(h.i=null,h.h-=h.g.get(C).length,h.g.delete(C))}function vw(h,C){return qr(h),C=Yo(h,C),h.g.has(C)}e.forEach=function(h,C){qr(this),this.g.forEach(function(M,L){M.forEach(function(Z){h.call(C,Z,L,this)},this)},this)},e.na=function(){qr(this);const h=Array.from(this.g.values()),C=Array.from(this.g.keys()),M=[];for(let L=0;L<C.length;L++){const Z=h[L];for(let ae=0;ae<Z.length;ae++)M.push(C[L])}return M},e.V=function(h){qr(this);let C=[];if(typeof h=="string")vw(this,h)&&(C=C.concat(this.g.get(Yo(this,h))));else{h=Array.from(this.g.values());for(let M=0;M<h.length;M++)C=C.concat(h[M])}return C},e.set=function(h,C){return qr(this),this.i=null,h=Yo(this,h),vw(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[C]),this.h+=1,this},e.get=function(h,C){return h?(h=this.V(h),0<h.length?String(h[0]):C):C};function gw(h,C,M){mw(h,C),0<M.length&&(h.i=null,h.g.set(Yo(h,C),y(M)),h.h+=M.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],C=Array.from(this.g.keys());for(var M=0;M<C.length;M++){var L=C[M];const ae=encodeURIComponent(String(L)),Ee=this.V(L);for(L=0;L<Ee.length;L++){var Z=ae;Ee[L]!==""&&(Z+="="+encodeURIComponent(String(Ee[L]))),h.push(Z)}}return this.i=h.join("&")};function Yo(h,C){return C=String(C),h.j&&(C=C.toLowerCase()),C}function OM(h,C){C&&!h.j&&(qr(h),h.i=null,h.g.forEach(function(M,L){var Z=L.toLowerCase();L!=Z&&(mw(this,L),gw(this,Z,M))},h)),h.j=C}function NM(h,C){const M=new kl;if(a.Image){const L=new Image;L.onload=m(Gr,M,"TestLoadImage: loaded",!0,C,L),L.onerror=m(Gr,M,"TestLoadImage: error",!1,C,L),L.onabort=m(Gr,M,"TestLoadImage: abort",!1,C,L),L.ontimeout=m(Gr,M,"TestLoadImage: timeout",!1,C,L),a.setTimeout(function(){L.ontimeout&&L.ontimeout()},1e4),L.src=h}else C(!1)}function LM(h,C){const M=new kl,L=new AbortController,Z=setTimeout(()=>{L.abort(),Gr(M,"TestPingServer: timeout",!1,C)},1e4);fetch(h,{signal:L.signal}).then(ae=>{clearTimeout(Z),ae.ok?Gr(M,"TestPingServer: ok",!0,C):Gr(M,"TestPingServer: server error",!1,C)}).catch(()=>{clearTimeout(Z),Gr(M,"TestPingServer: error",!1,C)})}function Gr(h,C,M,L,Z){try{Z&&(Z.onload=null,Z.onerror=null,Z.onabort=null,Z.ontimeout=null),L(M)}catch{}}function FM(){this.g=new hi}function BM(h,C,M){const L=M||"";try{cw(h,function(Z,ae){let Ee=Z;u(Z)&&(Ee=qo(Z)),C.push(L+ae+"="+encodeURIComponent(Ee))})}catch(Z){throw C.push(L+"type="+encodeURIComponent("_badmap")),Z}}function Mc(h){this.l=h.Ub||null,this.j=h.eb||!1}g(Mc,Go),Mc.prototype.g=function(){return new Oc(this.l,this.j)},Mc.prototype.i=function(h){return function(){return h}}({});function Oc(h,C){xe.call(this),this.D=h,this.o=C,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}g(Oc,xe),e=Oc.prototype,e.open=function(h,C){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=C,this.readyState=1,Vl(this)},e.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const C={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(C.body=h),(this.D||a).fetch(new Request(this.A,C)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rl(this)),this.readyState=0},e.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Vl(this)),this.g&&(this.readyState=3,Vl(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;pw(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function pw(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}e.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var C=h.value?h.value:new Uint8Array(0);(C=this.v.decode(C,{stream:!h.done}))&&(this.response=this.responseText+=C)}h.done?Rl(this):Vl(this),this.readyState==3&&pw(this)}},e.Ra=function(h){this.g&&(this.response=this.responseText=h,Rl(this))},e.Qa=function(h){this.g&&(this.response=h,Rl(this))},e.ga=function(){this.g&&Rl(this)};function Rl(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Vl(h)}e.setRequestHeader=function(h,C){this.u.append(h,C)},e.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],C=this.h.entries();for(var M=C.next();!M.done;)M=M.value,h.push(M[0]+": "+M[1]),M=C.next();return h.join(`\r
`)};function Vl(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Oc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function yw(h){let C="";return D(h,function(M,L){C+=L,C+=":",C+=M,C+=`\r
`}),C}function Im(h,C,M){e:{for(L in M){var L=!1;break e}L=!0}L||(M=yw(M),typeof h=="string"?M!=null&&encodeURIComponent(String(M)):kt(h,C,M))}function Bt(h){xe.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}g(Bt,xe);var $M=/^https?$/i,UM=["POST","PUT"];e=Bt.prototype,e.Ha=function(h){this.J=h},e.ea=function(h,C,M,L){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);C=C?C.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ym.g(),this.v=this.o?Gb(this.o):Gb(ym),this.g.onreadystatechange=f(this.Ea,this);try{this.B=!0,this.g.open(C,String(h),!0),this.B=!1}catch(ae){_w(this,ae);return}if(h=M||"",M=new Map(this.headers),L)if(Object.getPrototypeOf(L)===Object.prototype)for(var Z in L)M.set(Z,L[Z]);else if(typeof L.keys=="function"&&typeof L.get=="function")for(const ae of L.keys())M.set(ae,L.get(ae));else throw Error("Unknown input type for opt_headers: "+String(L));L=Array.from(M.keys()).find(ae=>ae.toLowerCase()=="content-type"),Z=a.FormData&&h instanceof a.FormData,!(0<=Array.prototype.indexOf.call(UM,C,void 0))||L||Z||M.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[ae,Ee]of M)this.g.setRequestHeader(ae,Ee);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Sw(this),this.u=!0,this.g.send(h),this.u=!1}catch(ae){_w(this,ae)}};function _w(h,C){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=C,h.m=5,bw(h),Nc(h)}function bw(h){h.A||(h.A=!0,$e(h,"complete"),$e(h,"error"))}e.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,$e(this,"complete"),$e(this,"abort"),Nc(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Nc(this,!0)),Bt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?ww(this):this.bb())},e.bb=function(){ww(this)};function ww(h){if(h.h&&typeof o<"u"&&(!h.v[1]||pr(h)!=4||h.Z()!=2)){if(h.u&&pr(h)==4)ut(h.Ea,0,h);else if($e(h,"readystatechange"),pr(h)==4){h.h=!1;try{const Ee=h.Z();e:switch(Ee){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var C=!0;break e;default:C=!1}var M;if(!(M=C)){var L;if(L=Ee===0){var Z=String(h.D).match(dw)[1]||null;!Z&&a.self&&a.self.location&&(Z=a.self.location.protocol.slice(0,-1)),L=!$M.test(Z?Z.toLowerCase():"")}M=L}if(M)$e(h,"complete"),$e(h,"success");else{h.m=6;try{var ae=2<pr(h)?h.g.statusText:""}catch{ae=""}h.l=ae+" ["+h.Z()+"]",bw(h)}}finally{Nc(h)}}}}function Nc(h,C){if(h.g){Sw(h);const M=h.g,L=h.v[0]?()=>{}:null;h.g=null,h.v=null,C||$e(h,"ready");try{M.onreadystatechange=L}catch{}}}function Sw(h){h.I&&(a.clearTimeout(h.I),h.I=null)}e.isActive=function(){return!!this.g};function pr(h){return h.g?h.g.readyState:0}e.Z=function(){try{return 2<pr(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(h){if(this.g){var C=this.g.responseText;return h&&C.indexOf(h)==0&&(C=C.substring(h.length)),Hn(C)}};function Cw(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function HM(h){const C={};h=(h.g&&2<=pr(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let L=0;L<h.length;L++){if(w(h[L]))continue;var M=E(h[L]);const Z=M[0];if(M=M[1],typeof M!="string")continue;M=M.trim();const ae=C[Z]||[];C[Z]=ae,ae.push(M)}A(C,function(L){return L.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Dl(h,C,M){return M&&M.internalChannelParams&&M.internalChannelParams[h]||C}function Tw(h){this.Aa=0,this.i=[],this.j=new kl,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Dl("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Dl("baseRetryDelayMs",5e3,h),this.cb=Dl("retryDelaySeedMs",1e4,h),this.Wa=Dl("forwardChannelMaxRetries",2,h),this.wa=Dl("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new sw(h&&h.concurrentRequestLimit),this.Da=new FM,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=Tw.prototype,e.la=8,e.G=1,e.connect=function(h,C,M,L){jn(0),this.W=h,this.H=C||{},M&&L!==void 0&&(this.H.OSID=M,this.H.OAID=L),this.F=this.X,this.I=Dw(this,null,this.W),Fc(this)};function km(h){if(Iw(h),h.G==3){var C=h.U++,M=gr(h.I);if(kt(M,"SID",h.K),kt(M,"RID",C),kt(M,"TYPE","terminate"),Ml(h,M),C=new zr(h,h.j,C),C.L=2,C.v=Dc(gr(M)),M=!1,a.navigator&&a.navigator.sendBeacon)try{M=a.navigator.sendBeacon(C.v.toString(),"")}catch{}!M&&a.Image&&(new Image().src=C.v,M=!0),M||(C.g=Mw(C.j,null),C.g.ea(C.v)),C.F=Date.now(),xc(C)}Vw(h)}function Lc(h){h.g&&(Am(h),h.g.cancel(),h.g=null)}function Iw(h){Lc(h),h.u&&(a.clearTimeout(h.u),h.u=null),Bc(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&a.clearTimeout(h.s),h.s=null)}function Fc(h){if(!ow(h.h)&&!h.s){h.s=!0;var C=h.Ga;q||j(),F||(q(),F=!0),H.add(C,h),h.B=0}}function jM(h,C){return aw(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=C.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Il(f(h.Ga,h,C),Rw(h,h.B)),h.B++,!0)}e.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const Z=new zr(this,this.j,h);let ae=this.o;if(this.S&&(ae?(ae=b(ae),I(ae,this.S)):ae=this.S),this.m!==null||this.O||(Z.H=ae,ae=null),this.P)e:{for(var C=0,M=0;M<this.i.length;M++){t:{var L=this.i[M];if("__data__"in L.map&&(L=L.map.__data__,typeof L=="string")){L=L.length;break t}L=void 0}if(L===void 0)break;if(C+=L,4096<C){C=M;break e}if(C===4096||M===this.i.length-1){C=M+1;break e}}C=1e3}else C=1e3;C=Ew(this,Z,C),M=gr(this.I),kt(M,"RID",h),kt(M,"CVER",22),this.D&&kt(M,"X-HTTP-Session-Id",this.D),Ml(this,M),ae&&(this.O?C="headers="+encodeURIComponent(String(yw(ae)))+"&"+C:this.m&&Im(M,this.m,ae)),Tm(this.h,Z),this.Ua&&kt(M,"TYPE","init"),this.P?(kt(M,"$req",C),kt(M,"SID","null"),Z.T=!0,bm(Z,M,null)):bm(Z,M,C),this.G=2}}else this.G==3&&(h?kw(this,h):this.i.length==0||ow(this.h)||kw(this))};function kw(h,C){var M;C?M=C.l:M=h.U++;const L=gr(h.I);kt(L,"SID",h.K),kt(L,"RID",M),kt(L,"AID",h.T),Ml(h,L),h.m&&h.o&&Im(L,h.m,h.o),M=new zr(h,h.j,M,h.B+1),h.m===null&&(M.H=h.o),C&&(h.i=C.D.concat(h.i)),C=Ew(h,M,1e3),M.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Tm(h.h,M),bm(M,L,C)}function Ml(h,C){h.H&&D(h.H,function(M,L){kt(C,L,M)}),h.l&&cw({},function(M,L){kt(C,L,M)})}function Ew(h,C,M){M=Math.min(h.i.length,M);var L=h.l?f(h.l.Na,h.l,h):null;e:{var Z=h.i;let ae=-1;for(;;){const Ee=["count="+M];ae==-1?0<M?(ae=Z[0].g,Ee.push("ofs="+ae)):ae=0:Ee.push("ofs="+ae);let _t=!0;for(let bn=0;bn<M;bn++){let ct=Z[bn].g;const kn=Z[bn].map;if(ct-=ae,0>ct)ae=Math.max(0,Z[bn].g-100),_t=!1;else try{BM(kn,Ee,"req"+ct+"_")}catch{L&&L(kn)}}if(_t){L=Ee.join("&");break e}}}return h=h.i.splice(0,M),C.D=h,L}function Aw(h){if(!h.g&&!h.u){h.Y=1;var C=h.Fa;q||j(),F||(q(),F=!0),H.add(C,h),h.v=0}}function Em(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Il(f(h.Fa,h),Rw(h,h.v)),h.v++,!0)}e.Fa=function(){if(this.u=null,Pw(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Il(f(this.ab,this),h)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,jn(10),Lc(this),Pw(this))};function Am(h){h.A!=null&&(a.clearTimeout(h.A),h.A=null)}function Pw(h){h.g=new zr(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var C=gr(h.qa);kt(C,"RID","rpc"),kt(C,"SID",h.K),kt(C,"AID",h.T),kt(C,"CI",h.F?"0":"1"),!h.F&&h.ja&&kt(C,"TO",h.ja),kt(C,"TYPE","xmlhttp"),Ml(h,C),h.m&&h.o&&Im(C,h.m,h.o),h.L&&(h.g.I=h.L);var M=h.g;h=h.ia,M.L=1,M.v=Dc(gr(C)),M.m=null,M.P=!0,nw(M,h)}e.Za=function(){this.C!=null&&(this.C=null,Lc(this),Em(this),jn(19))};function Bc(h){h.C!=null&&(a.clearTimeout(h.C),h.C=null)}function xw(h,C){var M=null;if(h.g==C){Bc(h),Am(h),h.g=null;var L=2}else if(Cm(h.h,C))M=C.D,lw(h.h,C),L=1;else return;if(h.G!=0){if(C.o)if(L==1){M=C.m?C.m.length:0,C=Date.now()-C.F;var Z=h.B;L=Ec(),$e(L,new Jb(L,M)),Fc(h)}else Aw(h);else if(Z=C.s,Z==3||Z==0&&0<C.X||!(L==1&&jM(h,C)||L==2&&Em(h)))switch(M&&0<M.length&&(C=h.h,C.i=C.i.concat(M)),Z){case 1:$s(h,5);break;case 4:$s(h,10);break;case 3:$s(h,6);break;default:$s(h,2)}}}function Rw(h,C){let M=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(M*=2),M*C}function $s(h,C){if(h.j.info("Error code "+C),C==2){var M=f(h.fb,h),L=h.Xa;const Z=!L;L=new Bs(L||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Rc(L,"https"),Dc(L),Z?NM(L.toString(),M):LM(L.toString(),M)}else jn(2);h.G=0,h.l&&h.l.sa(C),Vw(h),Iw(h)}e.fb=function(h){h?(this.j.info("Successfully pinged google.com"),jn(2)):(this.j.info("Failed to ping google.com"),jn(1))};function Vw(h){if(h.G=0,h.ka=[],h.l){const C=uw(h.h);(C.length!=0||h.i.length!=0)&&(p(h.ka,C),p(h.ka,h.i),h.h.i.length=0,y(h.i),h.i.length=0),h.l.ra()}}function Dw(h,C,M){var L=M instanceof Bs?gr(M):new Bs(M);if(L.g!="")C&&(L.g=C+"."+L.g),Vc(L,L.s);else{var Z=a.location;L=Z.protocol,C=C?C+"."+Z.hostname:Z.hostname,Z=+Z.port;var ae=new Bs(null);L&&Rc(ae,L),C&&(ae.g=C),Z&&Vc(ae,Z),M&&(ae.l=M),L=ae}return M=h.D,C=h.ya,M&&C&&kt(L,M,C),kt(L,"VER",h.la),Ml(h,L),L}function Mw(h,C,M){if(C&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return C=h.Ca&&!h.pa?new Bt(new Mc({eb:M})):new Bt(h.pa),C.Ha(h.J),C}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ow(){}e=Ow.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function $c(){}$c.prototype.g=function(h,C){return new ti(h,C)};function ti(h,C){xe.call(this),this.g=new Tw(C),this.l=h,this.h=C&&C.messageUrlParams||null,h=C&&C.messageHeaders||null,C&&C.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=C&&C.initMessageHeaders||null,C&&C.messageContentType&&(h?h["X-WebChannel-Content-Type"]=C.messageContentType:h={"X-WebChannel-Content-Type":C.messageContentType}),C&&C.va&&(h?h["X-WebChannel-Client-Profile"]=C.va:h={"X-WebChannel-Client-Profile":C.va}),this.g.S=h,(h=C&&C.Sb)&&!w(h)&&(this.g.m=h),this.v=C&&C.supportsCrossDomainXhr||!1,this.u=C&&C.sendRawJson||!1,(C=C&&C.httpSessionIdParam)&&!w(C)&&(this.g.D=C,h=this.h,h!==null&&C in h&&(h=this.h,C in h&&delete h[C])),this.j=new Qo(this)}g(ti,xe),ti.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ti.prototype.close=function(){km(this.g)},ti.prototype.o=function(h){var C=this.g;if(typeof h=="string"){var M={};M.__data__=h,h=M}else this.u&&(M={},M.__data__=qo(h),h=M);C.i.push(new kM(C.Ya++,h)),C.G==3&&Fc(C)},ti.prototype.N=function(){this.g.l=null,delete this.j,km(this.g),delete this.g,ti.aa.N.call(this)};function Nw(h){gm.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var C=h.__sm__;if(C){e:{for(const M in C){h=M;break e}h=void 0}(this.i=h)&&(h=this.i,C=C!==null&&h in C?C[h]:void 0),this.data=C}else this.data=h}g(Nw,gm);function Lw(){pm.call(this),this.status=1}g(Lw,pm);function Qo(h){this.g=h}g(Qo,Ow),Qo.prototype.ua=function(){$e(this.g,"a")},Qo.prototype.ta=function(h){$e(this.g,new Nw(h))},Qo.prototype.sa=function(h){$e(this.g,new Lw)},Qo.prototype.ra=function(){$e(this.g,"b")},$c.prototype.createWebChannel=$c.prototype.g,ti.prototype.send=ti.prototype.o,ti.prototype.open=ti.prototype.m,ti.prototype.close=ti.prototype.close,ZE=function(){return new $c},JE=function(){return Ec()},XE=Ls,cg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ac.NO_ERROR=0,Ac.TIMEOUT=8,Ac.HTTP_ERROR=6,Cd=Ac,Zb.COMPLETE="complete",QE=Zb,Kb.EventType=Cl,Cl.OPEN="a",Cl.CLOSE="b",Cl.ERROR="c",Cl.MESSAGE="d",xe.prototype.listen=xe.prototype.K,Gl=Kb,Bt.prototype.listenOnce=Bt.prototype.L,Bt.prototype.getLastError=Bt.prototype.Ka,Bt.prototype.getLastErrorCode=Bt.prototype.Ba,Bt.prototype.getStatus=Bt.prototype.Z,Bt.prototype.getResponseJson=Bt.prototype.Oa,Bt.prototype.getResponseText=Bt.prototype.oa,Bt.prototype.send=Bt.prototype.ea,Bt.prototype.setWithCredentials=Bt.prototype.Ha,YE=Bt}).apply(typeof Jc<"u"?Jc:typeof self<"u"?self:typeof window<"u"?window:{});const W0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Pn.UNAUTHENTICATED=new Pn(null),Pn.GOOGLE_CREDENTIALS=new Pn("google-credentials-uid"),Pn.FIRST_PARTY=new Pn("first-party-uid"),Pn.MOCK_USER=new Pn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rl="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=new lc("@firebase/firestore");function aa(){return mo.logLevel}function Re(e,...t){if(mo.logLevel<=Xe.DEBUG){const n=t.map(Ry);mo.debug(`Firestore (${rl}): ${e}`,...n)}}function Dr(e,...t){if(mo.logLevel<=Xe.ERROR){const n=t.map(Ry);mo.error(`Firestore (${rl}): ${e}`,...n)}}function La(e,...t){if(mo.logLevel<=Xe.WARN){const n=t.map(Ry);mo.warn(`Firestore (${rl}): ${e}`,...n)}}function Ry(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(e="Unexpected state"){const t=`FIRESTORE (${rl}) INTERNAL ASSERTION FAILED: `+e;throw Dr(t),new Error(t)}function Ft(e,t){e||Ge()}function st(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ve extends lr{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class AB{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Pn.UNAUTHENTICATED))}shutdown(){}}class PB{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class xB{constructor(t){this.t=t,this.currentUser=Pn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Ft(this.o===void 0);let i=this.i;const r=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let s=new so;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new so,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{Re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Re("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new so)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(Re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ft(typeof i.accessToken=="string"),new eA(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Ft(t===null||typeof t=="string"),new Pn(t)}}class RB{constructor(t,n,i){this.l=t,this.h=n,this.P=i,this.type="FirstParty",this.user=Pn.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class VB{constructor(t,n,i){this.l=t,this.h=n,this.P=i}getToken(){return Promise.resolve(new RB(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Pn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class DB{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class MB{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){Ft(this.o===void 0);const i=s=>{s.error!=null&&Re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Re("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>i(s))};const r=s=>{Re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):Re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ft(typeof n.token=="string"),this.R=n.token,new DB(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OB(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const r=OB(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=t.charAt(r[s]%t.length))}return i}}function nt(e,t){return e<t?-1:e>t?1:0}function Fa(e,t,n){return e.length===t.length&&e.every((i,r)=>n(i,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{static now(){return on.fromMillis(Date.now())}static fromDate(t){return on.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*n));return new on(n,i)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new Ve(Se.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Ve(Se.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new Ve(Se.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Ve(Se.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?nt(this.nanoseconds,t.nanoseconds):nt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{static fromTimestamp(t){return new ze(t)}static min(){return new ze(new on(0,0))}static max(){return new ze(new on(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(t,n,i){n===void 0?n=0:n>t.length&&Ge(),i===void 0?i=t.length-n:i>t.length-n&&Ge(),this.segments=t,this.offset=n,this.len=i}get length(){return this.len}isEqual(t){return Eu.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Eu?t.forEach(i=>{n.push(i)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,i=this.limit();n<i;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const i=Math.min(t.length,n.length);for(let r=0;r<i;r++){const s=t.get(r),o=n.get(r);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class Pt extends Eu{construct(t,n,i){return new Pt(t,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const i of t){if(i.indexOf("//")>=0)throw new Ve(Se.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new Pt(n)}static emptyPath(){return new Pt([])}}const NB=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class On extends Eu{construct(t,n,i){return new On(t,n,i)}static isValidIdentifier(t){return NB.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),On.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new On(["__name__"])}static fromServerFormat(t){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new Ve(Se.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new Ve(Se.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Ve(Se.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new Ve(Se.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new On(n)}static emptyPath(){return new On([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t){this.path=t}static fromPath(t){return new Fe(Pt.fromString(t))}static fromName(t){return new Fe(Pt.fromString(t).popFirst(5))}static empty(){return new Fe(Pt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Pt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Pt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Fe(new Pt(t.slice()))}}function LB(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,r=ze.fromTimestamp(i===1e9?new on(n+1,0):new on(n,i));return new ws(r,Fe.empty(),t)}function FB(e){return new ws(e.readTime,e.key,-1)}class ws{constructor(t,n,i){this.readTime=t,this.documentKey=n,this.largestBatchId=i}static min(){return new ws(ze.min(),Fe.empty(),-1)}static max(){return new ws(ze.max(),Fe.empty(),-1)}}function BB(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=Fe.comparator(e.documentKey,t.documentKey),n!==0?n:nt(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $B="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class UB{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fh(e){if(e.code!==Se.FAILED_PRECONDITION||e.message!==$B)throw e;Re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Ge(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new me((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof me?n:me.resolve(n)}catch(n){return me.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):me.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):me.reject(n)}static resolve(t){return new me((n,i)=>{n(t)})}static reject(t){return new me((n,i)=>{i(t)})}static waitFor(t){return new me((n,i)=>{let r=0,s=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&n()},l=>i(l))}),o=!0,s===r&&n()})}static or(t){let n=me.resolve(!1);for(const i of t)n=n.next(r=>r?me.resolve(r):i());return n}static forEach(t,n){const i=[];return t.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}static mapArray(t,n){return new me((i,r)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(t[u]).next(c=>{o[u]=c,++a,a===s&&i(o)},c=>r(c))}})}static doWhile(t,n){return new me((i,r)=>{const s=()=>{t()===!0?n().next(()=>{s()},r):i()};s()})}}function HB(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function sl(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=i=>this.ie(i),this.se=i=>n.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}hh.oe=-1;function mh(e){return e==null}function hf(e){return e===0&&1/e==-1/0}function jB(e){return typeof e=="number"&&Number.isInteger(e)&&!hf(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WB(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=z0(t)),t=zB(e.get(n),t);return z0(t)}function zB(e,t){let n=t;const i=e.length;for(let r=0;r<i;r++){const s=e.charAt(r);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function z0(e){return e+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ol(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function nA(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vn=class dg{constructor(t,n){this.comparator=t,this.root=n||vs.EMPTY}insert(t,n){return new dg(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,vs.BLACK,null,null))}remove(t){return new dg(this.comparator,this.root.remove(t,this.comparator).copy(null,null,vs.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(t){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(t,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,i)=>(t(n,i),!1))}toString(){const t=[];return this.inorderTraversal((n,i)=>(t.push(`${n}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Zc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Zc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Zc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Zc(this.root,t,this.comparator,!0)}},Zc=class{constructor(t,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?i(t.key,n):1,n&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}},vs=class br{constructor(t,n,i,r,s){this.key=t,this.value=n,this.color=i??br.RED,this.left=r??br.EMPTY,this.right=s??br.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,i,r,s){return new br(t??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let r=this;const s=i(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return br.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let i,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return br.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,br.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,br.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ge();const t=this.left.check();if(t!==this.right.check())throw Ge();return t+(this.isRed()?0:1)}};vs.EMPTY=null,vs.RED=!0,vs.BLACK=!1;vs.EMPTY=new class{constructor(){this.size=0}get key(){throw Ge()}get value(){throw Ge()}get color(){throw Ge()}get left(){throw Ge()}get right(){throw Ge()}copy(t,n,i,r,s){return this}insert(t,n,i){return new vs(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(t){this.comparator=t,this.data=new vn(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,i)=>(t(n),!1))}forEachInRange(t,n){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new G0(this.data.getIterator())}getIteratorFrom(t){return new G0(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(i=>{n=n.add(i)}),n}isEqual(t){if(!(t instanceof an)||this.size!==t.size)return!1;const n=this.data.getIterator(),i=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new an(this.comparator);return n.data=t,n}}class G0{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(t){this.fields=t,t.sort(On.comparator)}static empty(){return new ls([])}unionWith(t){let n=new an(On.comparator);for(const i of this.fields)n=n.add(i);for(const i of t)n=n.add(i);return new ls(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Fa(this.fields,t.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new iA("Invalid base64 string: "+s):s}}(t);return new Sn(n)}static fromUint8Array(t){const n=function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s}(t);return new Sn(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return nt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Sn.EMPTY_BYTE_STRING=new Sn("");const qB=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ss(e){if(Ft(!!e),typeof e=="string"){let t=0;const n=qB.exec(e);if(Ft(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:jt(e.seconds),nanos:jt(e.nanos)}}function jt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Cs(e){return typeof e=="string"?Sn.fromBase64String(e):Sn.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function vh(e){const t=e.mapValue.fields.__previous_value__;return Vy(t)?vh(t):t}function Au(e){const t=Ss(e.mapValue.fields.__local_write_time__.timestampValue);return new on(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GB{constructor(t,n,i,r,s,o,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Pu{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Pu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Pu&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ts(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Vy(e)?4:YB(e)?9007199254740991:KB(e)?10:11:Ge()}function ir(e,t){if(e===t)return!0;const n=Ts(e);if(n!==Ts(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Au(e).isEqual(Au(t));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const o=Ss(r.timestampValue),a=Ss(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(r,s){return Cs(r.bytesValue).isEqual(Cs(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(r,s){return jt(r.geoPointValue.latitude)===jt(s.geoPointValue.latitude)&&jt(r.geoPointValue.longitude)===jt(s.geoPointValue.longitude)}(e,t);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return jt(r.integerValue)===jt(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const o=jt(r.doubleValue),a=jt(s.doubleValue);return o===a?hf(o)===hf(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Fa(e.arrayValue.values||[],t.arrayValue.values||[],ir);case 10:case 11:return function(r,s){const o=r.mapValue.fields||{},a=s.mapValue.fields||{};if(q0(o)!==q0(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!ir(o[l],a[l])))return!1;return!0}(e,t);default:return Ge()}}function xu(e,t){return(e.values||[]).find(n=>ir(n,t))!==void 0}function Ba(e,t){if(e===t)return 0;const n=Ts(e),i=Ts(t);if(n!==i)return nt(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return nt(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=jt(s.integerValue||s.doubleValue),l=jt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return K0(e.timestampValue,t.timestampValue);case 4:return K0(Au(e),Au(t));case 5:return nt(e.stringValue,t.stringValue);case 6:return function(s,o){const a=Cs(s),l=Cs(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=nt(a[u],l[u]);if(c!==0)return c}return nt(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=nt(jt(s.latitude),jt(o.latitude));return a!==0?a:nt(jt(s.longitude),jt(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return Y0(e.arrayValue,t.arrayValue);case 10:return function(s,o){var a,l,u,c;const d=s.fields||{},f=o.fields||{},m=(a=d.value)===null||a===void 0?void 0:a.arrayValue,g=(l=f.value)===null||l===void 0?void 0:l.arrayValue,y=nt(((u=m==null?void 0:m.values)===null||u===void 0?void 0:u.length)||0,((c=g==null?void 0:g.values)===null||c===void 0?void 0:c.length)||0);return y!==0?y:Y0(m,g)}(e.mapValue,t.mapValue);case 11:return function(s,o){if(s===ed.mapValue&&o===ed.mapValue)return 0;if(s===ed.mapValue)return 1;if(o===ed.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let d=0;d<l.length&&d<c.length;++d){const f=nt(l[d],c[d]);if(f!==0)return f;const m=Ba(a[l[d]],u[c[d]]);if(m!==0)return m}return nt(l.length,c.length)}(e.mapValue,t.mapValue);default:throw Ge()}}function K0(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return nt(e,t);const n=Ss(e),i=Ss(t),r=nt(n.seconds,i.seconds);return r!==0?r:nt(n.nanos,i.nanos)}function Y0(e,t){const n=e.values||[],i=t.values||[];for(let r=0;r<n.length&&r<i.length;++r){const s=Ba(n[r],i[r]);if(s)return s}return nt(n.length,i.length)}function $a(e){return fg(e)}function fg(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const i=Ss(n);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Cs(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return Fe.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let i="[",r=!0;for(const s of n.values||[])r?r=!1:i+=",",i+=fg(s);return i+"]"}(e.arrayValue):"mapValue"in e?function(n){const i=Object.keys(n.fields||{}).sort();let r="{",s=!0;for(const o of i)s?s=!1:r+=",",r+=`${o}:${fg(n.fields[o])}`;return r+"}"}(e.mapValue):Ge()}function Td(e){switch(Ts(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=vh(e);return t?16+Td(t):16;case 5:return 2*e.stringValue.length;case 6:return Cs(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((r,s)=>r+Td(s),0)}(e.arrayValue);case 10:case 11:return function(i){let r=0;return ol(i.fields,(s,o)=>{r+=s.length+Td(o)}),r}(e.mapValue);default:throw Ge()}}function Q0(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function hg(e){return!!e&&"integerValue"in e}function Dy(e){return!!e&&"arrayValue"in e}function X0(e){return!!e&&"nullValue"in e}function J0(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Zm(e){return!!e&&"mapValue"in e}function KB(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function su(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ol(e.mapValue.fields,(n,i)=>t.mapValue.fields[n]=su(i)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=su(e.arrayValue.values[n]);return t}return Object.assign({},e)}function YB(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(t){this.value=t}static empty(){return new Yi({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let i=0;i<t.length-1;++i)if(n=(n.mapValue.fields||{})[t.get(i)],!Zm(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=su(n)}setAll(t){let n=On.emptyPath(),i={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=su(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(t){const n=this.field(t.popLast());Zm(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ir(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<t.length;++i){let r=n.mapValue.fields[t.get(i)];Zm(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,i){ol(n,(r,s)=>t[r]=s);for(const r of i)delete t[r]}clone(){return new Yi(su(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(t,n,i,r,s,o,a){this.key=t,this.documentType=n,this.version=i,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Vn(t,0,ze.min(),ze.min(),ze.min(),Yi.empty(),0)}static newFoundDocument(t,n,i,r){return new Vn(t,1,n,ze.min(),i,r,0)}static newNoDocument(t,n){return new Vn(t,2,n,ze.min(),ze.min(),Yi.empty(),0)}static newUnknownDocument(t,n){return new Vn(t,3,n,ze.min(),ze.min(),Yi.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(ze.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Yi.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Yi.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ze.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Vn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Vn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t,n){this.position=t,this.inclusive=n}}function Z0(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){const s=t[r],o=e.position[r];if(s.field.isKeyField()?i=Fe.comparator(Fe.fromName(o.referenceValue),n.key):i=Ba(o,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function eS(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ir(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(t,n="asc"){this.field=t,this.dir=n}}function QB(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{}class Xt extends rA{constructor(t,n,i){super(),this.field=t,this.op=n,this.value=i}static create(t,n,i){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,i):new JB(t,n,i):n==="array-contains"?new t$(t,i):n==="in"?new n$(t,i):n==="not-in"?new i$(t,i):n==="array-contains-any"?new r$(t,i):new Xt(t,n,i)}static createKeyFieldInFilter(t,n,i){return n==="in"?new ZB(t,i):new e$(t,i)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ba(n,this.value)):n!==null&&Ts(this.value)===Ts(n)&&this.matchesComparison(Ba(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Ge()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Li extends rA{constructor(t,n){super(),this.filters=t,this.op=n,this.ae=null}static create(t,n){return new Li(t,n)}matches(t){return sA(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function sA(e){return e.op==="and"}function oA(e){return XB(e)&&sA(e)}function XB(e){for(const t of e.filters)if(t instanceof Li)return!1;return!0}function mg(e){if(e instanceof Xt)return e.field.canonicalString()+e.op.toString()+$a(e.value);if(oA(e))return e.filters.map(t=>mg(t)).join(",");{const t=e.filters.map(n=>mg(n)).join(",");return`${e.op}(${t})`}}function aA(e,t){return e instanceof Xt?function(i,r){return r instanceof Xt&&i.op===r.op&&i.field.isEqual(r.field)&&ir(i.value,r.value)}(e,t):e instanceof Li?function(i,r){return r instanceof Li&&i.op===r.op&&i.filters.length===r.filters.length?i.filters.reduce((s,o,a)=>s&&aA(o,r.filters[a]),!0):!1}(e,t):void Ge()}function lA(e){return e instanceof Xt?function(n){return`${n.field.canonicalString()} ${n.op} ${$a(n.value)}`}(e):e instanceof Li?function(n){return n.op.toString()+" {"+n.getFilters().map(lA).join(" ,")+"}"}(e):"Filter"}class JB extends Xt{constructor(t,n,i){super(t,n,i),this.key=Fe.fromName(i.referenceValue)}matches(t){const n=Fe.comparator(t.key,this.key);return this.matchesComparison(n)}}class ZB extends Xt{constructor(t,n){super(t,"in",n),this.keys=uA("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class e$ extends Xt{constructor(t,n){super(t,"not-in",n),this.keys=uA("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function uA(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>Fe.fromName(i.referenceValue))}class t$ extends Xt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Dy(n)&&xu(n.arrayValue,this.value)}}class n$ extends Xt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&xu(this.value.arrayValue,n)}}class i$ extends Xt{constructor(t,n){super(t,"not-in",n)}matches(t){if(xu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!xu(this.value.arrayValue,n)}}class r$ extends Xt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Dy(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>xu(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s${constructor(t,n=null,i=[],r=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function tS(e,t=null,n=[],i=[],r=null,s=null,o=null){return new s$(e,t,n,i,r,s,o)}function My(e){const t=st(e);if(t.ue===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(i=>mg(i)).join(","),n+="|ob:",n+=t.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),mh(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>$a(i)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>$a(i)).join(",")),t.ue=n}return t.ue}function Oy(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!QB(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!aA(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!eS(e.startAt,t.startAt)&&eS(e.endAt,t.endAt)}function vg(e){return Fe.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(t,n=null,i=[],r=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function o$(e,t,n,i,r,s,o,a){return new al(e,t,n,i,r,s,o,a)}function cA(e){return new al(e)}function nS(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function dA(e){return e.collectionGroup!==null}function ou(e){const t=st(e);if(t.ce===null){t.ce=[];const n=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),n.add(s.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new an(On.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.ce.push(new Ru(s,i))}),n.has(On.keyField().canonicalString())||t.ce.push(new Ru(On.keyField(),i))}return t.ce}function Ji(e){const t=st(e);return t.le||(t.le=a$(t,ou(e))),t.le}function a$(e,t){if(e.limitType==="F")return tS(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new Ru(r.field,s)});const n=e.endAt?new mf(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new mf(e.startAt.position,e.startAt.inclusive):null;return tS(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}}function gg(e,t){const n=e.filters.concat([t]);return new al(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function pg(e,t,n){return new al(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function gh(e,t){return Oy(Ji(e),Ji(t))&&e.limitType===t.limitType}function fA(e){return`${My(Ji(e))}|lt:${e.limitType}`}function la(e){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(r=>lA(r)).join(", ")}]`),mh(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(r=>$a(r)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(r=>$a(r)).join(",")),`Target(${i})`}(Ji(e))}; limitType=${e.limitType})`}function ph(e,t){return t.isFoundDocument()&&function(i,r){const s=r.key.path;return i.collectionGroup!==null?r.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(s):Fe.isDocumentKey(i.path)?i.path.isEqual(s):i.path.isImmediateParentOf(s)}(e,t)&&function(i,r){for(const s of ou(i))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(e,t)&&function(i,r){for(const s of i.filters)if(!s.matches(r))return!1;return!0}(e,t)&&function(i,r){return!(i.startAt&&!function(o,a,l){const u=Z0(o,a,l);return o.inclusive?u<=0:u<0}(i.startAt,ou(i),r)||i.endAt&&!function(o,a,l){const u=Z0(o,a,l);return o.inclusive?u>=0:u>0}(i.endAt,ou(i),r))}(e,t)}function l$(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function hA(e){return(t,n)=>{let i=!1;for(const r of ou(e)){const s=u$(r,t,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function u$(e,t,n){const i=e.field.isKeyField()?Fe.comparator(t.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Ba(l,u):Ge()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return Ge()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const i=this.mapKeyFn(t),r=this.inner[i];if(r===void 0)return this.inner[i]=[[t,n]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return i.length===1?delete this.inner[n]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(t){ol(this.inner,(n,i)=>{for(const[r,s]of i)t(r,s)})}isEmpty(){return nA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c$=new vn(Fe.comparator);function Is(){return c$}const mA=new vn(Fe.comparator);function Kl(...e){let t=mA;for(const n of e)t=t.insert(n.key,n);return t}function d$(e){let t=mA;return e.forEach((n,i)=>t=t.insert(n,i.overlayedDocument)),t}function Qs(){return au()}function vA(){return au()}function au(){return new Ro(e=>e.toString(),(e,t)=>e.isEqual(t))}const f$=new an(Fe.comparator);function at(...e){let t=f$;for(const n of e)t=t.add(n);return t}const h$=new an(nt);function m$(){return h$}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hf(t)?"-0":t}}function gA(e){return{integerValue:""+e}}function v$(e,t){return jB(t)?gA(t):Ny(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(){this._=void 0}}function g$(e,t,n){return e instanceof yg?function(r,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&Vy(s)&&(s=vh(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof vf?pA(e,t):e instanceof gf?yA(e,t):function(r,s){const o=y$(r,s),a=iS(o)+iS(r.Pe);return hg(o)&&hg(r.Pe)?gA(a):Ny(r.serializer,a)}(e,t)}function p$(e,t,n){return e instanceof vf?pA(e,t):e instanceof gf?yA(e,t):n}function y$(e,t){return e instanceof _g?function(i){return hg(i)||function(s){return!!s&&"doubleValue"in s}(i)}(t)?t:{integerValue:0}:null}class yg extends yh{}class vf extends yh{constructor(t){super(),this.elements=t}}function pA(e,t){const n=_A(t);for(const i of e.elements)n.some(r=>ir(r,i))||n.push(i);return{arrayValue:{values:n}}}class gf extends yh{constructor(t){super(),this.elements=t}}function yA(e,t){let n=_A(t);for(const i of e.elements)n=n.filter(r=>!ir(r,i));return{arrayValue:{values:n}}}class _g extends yh{constructor(t,n){super(),this.serializer=t,this.Pe=n}}function iS(e){return jt(e.integerValue||e.doubleValue)}function _A(e){return Dy(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function _$(e,t){return e.field.isEqual(t.field)&&function(i,r){return i instanceof vf&&r instanceof vf||i instanceof gf&&r instanceof gf?Fa(i.elements,r.elements,ir):i instanceof _g&&r instanceof _g?ir(i.Pe,r.Pe):i instanceof yg&&r instanceof yg}(e.transform,t.transform)}class oo{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new oo}static exists(t){return new oo(void 0,t)}static updateTime(t){return new oo(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Id(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Ly{}function bA(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new w$(e.key,oo.none()):new Fy(e.key,e.data,oo.none());{const n=e.data,i=Yi.empty();let r=new an(On.comparator);for(let s of t.fields)if(!r.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?i.delete(s):i.set(s,o),r=r.add(s)}return new _h(e.key,i,new ls(r.toArray()),oo.none())}}function b$(e,t,n){e instanceof Fy?function(r,s,o){const a=r.value.clone(),l=sS(r.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof _h?function(r,s,o){if(!Id(r.precondition,s))return void s.convertToUnknownDocument(o.version);const a=sS(r.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(wA(r)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(r,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function lu(e,t,n,i){return e instanceof Fy?function(s,o,a,l){if(!Id(s.precondition,o))return a;const u=s.value.clone(),c=oS(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,i):e instanceof _h?function(s,o,a,l){if(!Id(s.precondition,o))return a;const u=oS(s.fieldTransforms,l,o),c=o.data;return c.setAll(wA(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(e,t,n,i):function(s,o,a){return Id(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function rS(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(i,r){return i===void 0&&r===void 0||!(!i||!r)&&Fa(i,r,(s,o)=>_$(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Fy extends Ly{constructor(t,n,i,r=[]){super(),this.key=t,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class _h extends Ly{constructor(t,n,i,r,s=[]){super(),this.key=t,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function wA(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}}),t}function sS(e,t,n){const i=new Map;Ft(e.length===n.length);for(let r=0;r<n.length;r++){const s=e[r],o=s.transform,a=t.data.field(s.field);i.set(s.field,p$(o,a,n[r]))}return i}function oS(e,t,n){const i=new Map;for(const r of e){const s=r.transform,o=n.data.field(r.field);i.set(r.field,g$(s,o,t))}return i}class w$ extends Ly{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S${constructor(t,n,i,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(t,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(t.key)&&b$(s,t,i[r])}}applyToLocalView(t,n){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(n=lu(i,t,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(n=lu(i,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const i=vA();return this.mutations.forEach(r=>{const s=t.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(r.key)?null:a;const l=bA(o,a);l!==null&&i.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(ze.min())}),i}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),at())}isEqual(t){return this.batchId===t.batchId&&Fa(this.mutations,t.mutations,(n,i)=>rS(n,i))&&Fa(this.baseMutations,t.baseMutations,(n,i)=>rS(n,i))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C${constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T${constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yt,tt;function SA(e){if(e===void 0)return Dr("GRPC error has no .code"),Se.UNKNOWN;switch(e){case Yt.OK:return Se.OK;case Yt.CANCELLED:return Se.CANCELLED;case Yt.UNKNOWN:return Se.UNKNOWN;case Yt.DEADLINE_EXCEEDED:return Se.DEADLINE_EXCEEDED;case Yt.RESOURCE_EXHAUSTED:return Se.RESOURCE_EXHAUSTED;case Yt.INTERNAL:return Se.INTERNAL;case Yt.UNAVAILABLE:return Se.UNAVAILABLE;case Yt.UNAUTHENTICATED:return Se.UNAUTHENTICATED;case Yt.INVALID_ARGUMENT:return Se.INVALID_ARGUMENT;case Yt.NOT_FOUND:return Se.NOT_FOUND;case Yt.ALREADY_EXISTS:return Se.ALREADY_EXISTS;case Yt.PERMISSION_DENIED:return Se.PERMISSION_DENIED;case Yt.FAILED_PRECONDITION:return Se.FAILED_PRECONDITION;case Yt.ABORTED:return Se.ABORTED;case Yt.OUT_OF_RANGE:return Se.OUT_OF_RANGE;case Yt.UNIMPLEMENTED:return Se.UNIMPLEMENTED;case Yt.DATA_LOSS:return Se.DATA_LOSS;default:return Ge()}}(tt=Yt||(Yt={}))[tt.OK=0]="OK",tt[tt.CANCELLED=1]="CANCELLED",tt[tt.UNKNOWN=2]="UNKNOWN",tt[tt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",tt[tt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",tt[tt.NOT_FOUND=5]="NOT_FOUND",tt[tt.ALREADY_EXISTS=6]="ALREADY_EXISTS",tt[tt.PERMISSION_DENIED=7]="PERMISSION_DENIED",tt[tt.UNAUTHENTICATED=16]="UNAUTHENTICATED",tt[tt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",tt[tt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",tt[tt.ABORTED=10]="ABORTED",tt[tt.OUT_OF_RANGE=11]="OUT_OF_RANGE",tt[tt.UNIMPLEMENTED=12]="UNIMPLEMENTED",tt[tt.INTERNAL=13]="INTERNAL",tt[tt.UNAVAILABLE=14]="UNAVAILABLE",tt[tt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I$(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k$=new ro([4294967295,4294967295],0);function aS(e){const t=I$().encode(e),n=new KE;return n.update(t),new Uint8Array(n.digest())}function lS(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),r=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new ro([n,i],0),new ro([r,s],0)]}class By{constructor(t,n,i){if(this.bitmap=t,this.padding=n,this.hashCount=i,n<0||n>=8)throw new Yl(`Invalid padding: ${n}`);if(i<0)throw new Yl(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new Yl(`Invalid hash count: ${i}`);if(t.length===0&&n!==0)throw new Yl(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ie=ro.fromNumber(this.Te)}Ee(t,n,i){let r=t.add(n.multiply(ro.fromNumber(i)));return r.compare(k$)===1&&(r=new ro([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ie).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=aS(t),[i,r]=lS(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(i,r,s);if(!this.de(o))return!1}return!0}static create(t,n,i){const r=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new By(s,r,n);return i.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=aS(t),[i,r]=lS(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(i,r,s);this.Ae(o)}}Ae(t){const n=Math.floor(t/8),i=t%8;this.bitmap[n]|=1<<i}}class Yl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(t,n,i,r,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,i){const r=new Map;return r.set(t,uc.createSynthesizedTargetChangeForCurrentChange(t,n,i)),new bh(ze.min(),r,new vn(nt),Is(),at())}}class uc{constructor(t,n,i,r,s){this.resumeToken=t,this.current=n,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,i){return new uc(i,n,at(),at(),at())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(t,n,i,r){this.Re=t,this.removedTargetIds=n,this.key=i,this.Ve=r}}class CA{constructor(t,n){this.targetId=t,this.me=n}}class TA{constructor(t,n,i=Sn.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=i,this.cause=r}}class uS{constructor(){this.fe=0,this.ge=cS(),this.pe=Sn.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=at(),n=at(),i=at();return this.ge.forEach((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:i=i.add(r);break;default:Ge()}}),new uc(this.pe,this.ye,t,n,i)}Ce(){this.we=!1,this.ge=cS()}Fe(t,n){this.we=!0,this.ge=this.ge.insert(t,n)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Ft(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class E${constructor(t){this.Le=t,this.Be=new Map,this.ke=Is(),this.qe=td(),this.Qe=td(),this.Ke=new vn(nt)}$e(t){for(const n of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.Ue(n,t.Ve):this.We(n,t.key,t.Ve);for(const n of t.removedTargetIds)this.We(n,t.key,t.Ve)}Ge(t){this.forEachTarget(t,n=>{const i=this.ze(n);switch(t.state){case 0:this.je(n)&&i.De(t.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(t.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(n);break;case 3:this.je(n)&&(i.Ne(),i.De(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),i.De(t.resumeToken));break;default:Ge()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Be.forEach((i,r)=>{this.je(r)&&n(r)})}Je(t){const n=t.targetId,i=t.me.count,r=this.Ye(n);if(r){const s=r.target;if(vg(s))if(i===0){const o=new Fe(s.path);this.We(n,o,Vn.newNoDocument(o,ze.min()))}else Ft(i===1);else{const o=this.Ze(n);if(o!==i){const a=this.Xe(t),l=a?this.et(a,t,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(t){const n=t.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:r=0},hashCount:s=0}=n;let o,a;try{o=Cs(i).toUint8Array()}catch(l){if(l instanceof iA)return La("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new By(o,r,s)}catch(l){return La(l instanceof Yl?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(t,n,i){return n.me.count===i-this.rt(t,n.targetId)?0:2}rt(t,n){const i=this.Le.getRemoteKeysForTarget(n);let r=0;return i.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.We(n,s,null),r++)}),r}it(t){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&vg(a.target)){const l=new Fe(a.target.path);this.st(l).has(o)||this.ot(o,l)||this.We(o,l,Vn.newNoDocument(l,t))}s.be&&(n.set(o,s.ve()),s.Ce())}});let i=at();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(t));const r=new bh(t,n,this.Ke,this.ke,i);return this.ke=Is(),this.qe=td(),this.Qe=td(),this.Ke=new vn(nt),r}Ue(t,n){if(!this.je(t))return;const i=this.ot(t,n.key)?2:0;this.ze(t).Fe(n.key,i),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(t)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(t))}We(t,n,i){if(!this.je(t))return;const r=this.ze(t);this.ot(t,n)?r.Fe(n,1):r.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(t)),this.Qe=this.Qe.insert(n,this._t(n).add(t)),i&&(this.ke=this.ke.insert(n,i))}removeTarget(t){this.Be.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}xe(t){this.ze(t).xe()}ze(t){let n=this.Be.get(t);return n||(n=new uS,this.Be.set(t,n)),n}_t(t){let n=this.Qe.get(t);return n||(n=new an(nt),this.Qe=this.Qe.insert(t,n)),n}st(t){let n=this.qe.get(t);return n||(n=new an(nt),this.qe=this.qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||Re("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.Be.get(t);return n&&n.Se?null:this.Le.ut(t)}He(t){this.Be.set(t,new uS),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}ot(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function td(){return new vn(Fe.comparator)}function cS(){return new vn(Fe.comparator)}const A$={asc:"ASCENDING",desc:"DESCENDING"},P$={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},x$={and:"AND",or:"OR"};class R${constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function bg(e,t){return e.useProto3Json||mh(t)?t:{value:t}}function wg(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function IA(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function ka(e){return Ft(!!e),ze.fromTimestamp(function(n){const i=Ss(n);return new on(i.seconds,i.nanos)}(e))}function kA(e,t){return Sg(e,t).canonicalString()}function Sg(e,t){const n=function(r){return new Pt(["projects",r.projectId,"databases",r.database])}(e).child("documents");return t===void 0?n:n.child(t)}function EA(e){const t=Pt.fromString(e);return Ft(VA(t)),t}function ev(e,t){const n=EA(t);if(n.get(1)!==e.databaseId.projectId)throw new Ve(Se.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Ve(Se.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Fe(PA(n))}function AA(e,t){return kA(e.databaseId,t)}function V$(e){const t=EA(e);return t.length===4?Pt.emptyPath():PA(t)}function dS(e){return new Pt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function PA(e){return Ft(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function D$(e,t){let n;if("targetChange"in t){t.targetChange;const i=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Ge()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(Ft(c===void 0||typeof c=="string"),Sn.fromBase64String(c||"")):(Ft(c===void 0||c instanceof Buffer||c instanceof Uint8Array),Sn.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?Se.UNKNOWN:SA(u.code);return new Ve(c,u.message||"")}(o);n=new TA(i,r,s,a||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const r=ev(e,i.document.name),s=ka(i.document.updateTime),o=i.document.createTime?ka(i.document.createTime):ze.min(),a=new Yi({mapValue:{fields:i.document.fields}}),l=Vn.newFoundDocument(r,s,o,a),u=i.targetIds||[],c=i.removedTargetIds||[];n=new kd(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const r=ev(e,i.document),s=i.readTime?ka(i.readTime):ze.min(),o=Vn.newNoDocument(r,s),a=i.removedTargetIds||[];n=new kd([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const r=ev(e,i.document),s=i.removedTargetIds||[];n=new kd([],s,r,null)}else{if(!("filter"in t))return Ge();{t.filter;const i=t.filter;i.targetId;const{count:r=0,unchangedNames:s}=i,o=new T$(r,s),a=i.targetId;n=new CA(a,o)}}return n}function M$(e,t){return{documents:[AA(e,t.path)]}}function O$(e,t){const n={structuredQuery:{}},i=t.path;let r;t.collectionGroup!==null?(r=i,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=AA(e,r);const s=function(u){if(u.length!==0)return RA(Li.create(u,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(f){return{field:ua(f.field),direction:F$(f.dir)}}(c))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=bg(e,t.limit);return a!==null&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),{ct:n,parent:r}}function N$(e){let t=V$(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){Ft(i===1);const c=n.from[0];c.allDescendants?r=c.collectionId:t=t.child(c.collectionId)}let s=[];n.where&&(s=function(d){const f=xA(d);return f instanceof Li&&oA(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(f=>function(g){return new Ru(ca(g.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(d){let f;return f=typeof d=="object"?d.value:d,mh(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(d){const f=!!d.before,m=d.values||[];return new mf(m,f)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const f=!d.before,m=d.values||[];return new mf(m,f)}(n.endAt)),o$(t,r,o,s,a,"F",l,u)}function L$(e,t){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ge()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function xA(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=ca(n.unaryFilter.field);return Xt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const r=ca(n.unaryFilter.field);return Xt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ca(n.unaryFilter.field);return Xt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ca(n.unaryFilter.field);return Xt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Ge()}}(e):e.fieldFilter!==void 0?function(n){return Xt.create(ca(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ge()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Li.create(n.compositeFilter.filters.map(i=>xA(i)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return Ge()}}(n.compositeFilter.op))}(e):Ge()}function F$(e){return A$[e]}function B$(e){return P$[e]}function $$(e){return x$[e]}function ua(e){return{fieldPath:e.canonicalString()}}function ca(e){return On.fromServerFormat(e.fieldPath)}function RA(e){return e instanceof Xt?function(n){if(n.op==="=="){if(J0(n.value))return{unaryFilter:{field:ua(n.field),op:"IS_NAN"}};if(X0(n.value))return{unaryFilter:{field:ua(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(J0(n.value))return{unaryFilter:{field:ua(n.field),op:"IS_NOT_NAN"}};if(X0(n.value))return{unaryFilter:{field:ua(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ua(n.field),op:B$(n.op),value:n.value}}}(e):e instanceof Li?function(n){const i=n.getFilters().map(r=>RA(r));return i.length===1?i[0]:{compositeFilter:{op:$$(n.op),filters:i}}}(e):Ge()}function VA(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(t,n,i,r,s=ze.min(),o=ze.min(),a=Sn.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new us(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new us(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new us(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new us(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U${constructor(t){this.ht=t}}function H$(e){const t=N$({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?pg(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j${constructor(){this.ln=new W$}addToCollectionParentIndex(t,n){return this.ln.add(n),me.resolve()}getCollectionParents(t,n){return me.resolve(this.ln.getEntries(n))}addFieldIndex(t,n){return me.resolve()}deleteFieldIndex(t,n){return me.resolve()}deleteAllFieldIndexes(t){return me.resolve()}createTargetIndexes(t,n){return me.resolve()}getDocumentsMatchingTarget(t,n){return me.resolve(null)}getIndexType(t,n){return me.resolve(0)}getFieldIndexes(t,n){return me.resolve([])}getNextCollectionGroupToUpdate(t){return me.resolve(null)}getMinOffset(t,n){return me.resolve(ws.min())}getMinOffsetFromCollectionGroup(t,n){return me.resolve(ws.min())}updateCollectionGroup(t,n,i){return me.resolve()}updateIndexEntries(t,n){return me.resolve()}}class W${constructor(){this.index={}}add(t){const n=t.lastSegment(),i=t.popLast(),r=this.index[n]||new an(Pt.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(t){const n=t.lastSegment(),i=t.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(t){return(this.index[t]||new an(Pt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Yn{static withCacheSize(t){return new Yn(t,Yn.DEFAULT_COLLECTION_PERCENTILE,Yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yn.DEFAULT_COLLECTION_PERCENTILE=10,Yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Yn.DEFAULT=new Yn(41943040,Yn.DEFAULT_COLLECTION_PERCENTILE,Yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Yn.DISABLED=new Yn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(t){this.kn=t}next(){return this.kn+=2,this.kn}static qn(){return new Ua(0)}static Qn(){return new Ua(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS([e,t],[n,i]){const r=nt(e,n);return r===0?nt(t,i):r}class z${constructor(t){this.Gn=t,this.buffer=new an(hS),this.zn=0}jn(){return++this.zn}Hn(t){const n=[t,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();hS(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class q${constructor(t,n,i){this.garbageCollector=t,this.asyncQueue=n,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(t){Re("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){sl(n)?Re("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await fh(n)}await this.Yn(3e5)})}}class G${constructor(t,n){this.Zn=t,this.params=n}calculateTargetCount(t,n){return this.Zn.Xn(t).next(i=>Math.floor(n/100*i))}nthSequenceNumber(t,n){if(n===0)return me.resolve(hh.oe);const i=new z$(n);return this.Zn.forEachTarget(t,r=>i.Hn(r.sequenceNumber)).next(()=>this.Zn.er(t,r=>i.Hn(r))).next(()=>i.maxValue)}removeTargets(t,n,i){return this.Zn.removeTargets(t,n,i)}removeOrphanedDocuments(t,n){return this.Zn.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(Re("LruGarbageCollector","Garbage collection skipped; disabled"),me.resolve(fS)):this.getCacheSize(t).next(i=>i<this.params.cacheSizeCollectionThreshold?(Re("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fS):this.tr(t,n))}getCacheSize(t){return this.Zn.getCacheSize(t)}tr(t,n){let i,r,s,o,a,l,u;const c=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(Re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),r=this.params.maximumSequenceNumbersToCollect):r=d,o=Date.now(),this.nthSequenceNumber(t,r))).next(d=>(i=d,a=Date.now(),this.removeTargets(t,i,n))).next(d=>(s=d,l=Date.now(),this.removeOrphanedDocuments(t,i))).next(d=>(u=Date.now(),aa()<=Xe.DEBUG&&Re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-c}ms`),me.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:d})))}}function K$(e,t){return new G$(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y${constructor(){this.changes=new Ro(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Vn.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?me.resolve(i):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q${constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X${constructor(t,n,i,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=r}getDocument(t,n){let i=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(i=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(i!==null&&lu(i.mutation,r,ls.empty(),on.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.getLocalViewOfDocuments(t,i,at()).next(()=>i))}getLocalViewOfDocuments(t,n,i=at()){const r=Qs();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,i).next(s=>{let o=Kl();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const i=Qs();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,at()))}populateOverlays(t,n,i){const r=[];return i.forEach(s=>{n.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(t,r).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,i,r){let s=Is();const o=au(),a=function(){return au()}();return n.forEach((l,u)=>{const c=i.get(u.key);r.has(u.key)&&(c===void 0||c.mutation instanceof _h)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),lu(c.mutation,u,c.mutation.getFieldMask(),on.now())):o.set(u.key,ls.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new Q$(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(t,n){const i=au();let r=new vn((o,a)=>o-a),s=at();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=i.get(l)||ls.empty();c=a.applyToLocalView(u,c),i.set(l,c);const d=(r.get(a.batchId)||at()).add(l);r=r.insert(a.batchId,d)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=vA();c.forEach(f=>{if(!s.has(f)){const m=bA(n.get(f),i.get(f));m!==null&&d.set(f,m),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,d))}return me.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,n,i,r){return function(o){return Fe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):dA(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,i,r):this.getDocumentsMatchingCollectionQuery(t,n,i,r)}getNextDocuments(t,n,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,i,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,i.largestBatchId,r-s.size):me.resolve(Qs());let a=-1,l=s;return o.next(u=>me.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?me.resolve():this.remoteDocumentCache.getEntry(t,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,l,u,at())).next(c=>({batchId:a,changes:d$(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new Fe(n)).next(i=>{let r=Kl();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,i,r){const s=n.collectionGroup;let o=Kl();return this.indexManager.getCollectionParents(t,s).next(a=>me.forEach(a,l=>{const u=function(d,f){return new al(f,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(t,u,i,r).next(c=>{c.forEach((d,f)=>{o=o.insert(d,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,i,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,i.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,i,s,r))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,Vn.newInvalidDocument(c)))});let a=Kl();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&lu(c.mutation,u,ls.empty(),on.now()),ph(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J${constructor(t){this.serializer=t,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(t,n){return me.resolve(this.Tr.get(n))}saveBundleMetadata(t,n){return this.Tr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:ka(r.createTime)}}(n)),me.resolve()}getNamedQuery(t,n){return me.resolve(this.Ir.get(n))}saveNamedQuery(t,n){return this.Ir.set(n.name,function(r){return{name:r.name,query:H$(r.bundledQuery),readTime:ka(r.readTime)}}(n)),me.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z${constructor(){this.overlays=new vn(Fe.comparator),this.Er=new Map}getOverlay(t,n){return me.resolve(this.overlays.get(n))}getOverlays(t,n){const i=Qs();return me.forEach(n,r=>this.getOverlay(t,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(t,n,i){return i.forEach((r,s)=>{this.Tt(t,n,s)}),me.resolve()}removeOverlaysForBatchId(t,n,i){const r=this.Er.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.Er.delete(i)),me.resolve()}getOverlaysForCollection(t,n,i){const r=Qs(),s=n.length+1,o=new Fe(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>i&&r.set(l.getKey(),l)}return me.resolve(r)}getOverlaysForCollectionGroup(t,n,i,r){let s=new vn((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>i){let c=s.get(u.largestBatchId);c===null&&(c=Qs(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Qs(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=r)););return me.resolve(a)}Tt(t,n,i){const r=this.overlays.get(i.key);if(r!==null){const o=this.Er.get(r.largestBatchId).delete(i.key);this.Er.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new C$(n,i));let s=this.Er.get(n);s===void 0&&(s=at(),this.Er.set(n,s)),this.Er.set(n,s.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eU{constructor(){this.sessionToken=Sn.EMPTY_BYTE_STRING}getSessionToken(t){return me.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,me.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(){this.dr=new an(fn.Ar),this.Rr=new an(fn.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(t,n){const i=new fn(t,n);this.dr=this.dr.add(i),this.Rr=this.Rr.add(i)}mr(t,n){t.forEach(i=>this.addReference(i,n))}removeReference(t,n){this.gr(new fn(t,n))}pr(t,n){t.forEach(i=>this.removeReference(i,n))}yr(t){const n=new Fe(new Pt([])),i=new fn(n,t),r=new fn(n,t+1),s=[];return this.Rr.forEachInRange([i,r],o=>{this.gr(o),s.push(o.key)}),s}wr(){this.dr.forEach(t=>this.gr(t))}gr(t){this.dr=this.dr.delete(t),this.Rr=this.Rr.delete(t)}Sr(t){const n=new Fe(new Pt([])),i=new fn(n,t),r=new fn(n,t+1);let s=at();return this.Rr.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new fn(t,0),i=this.dr.firstAfterOrEqual(n);return i!==null&&t.isEqual(i.key)}}class fn{constructor(t,n){this.key=t,this.br=n}static Ar(t,n){return Fe.comparator(t.key,n.key)||nt(t.br,n.br)}static Vr(t,n){return nt(t.br,n.br)||Fe.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tU{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new an(fn.Ar)}checkEmpty(t){return me.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,i,r){const s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new S$(s,n,i,r);this.mutationQueue.push(o);for(const a of r)this.vr=this.vr.add(new fn(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return me.resolve(o)}lookupMutationBatch(t,n){return me.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(t,n){const i=n+1,r=this.Fr(i),s=r<0?0:r;return me.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return me.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(t){return me.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const i=new fn(n,0),r=new fn(n,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([i,r],o=>{const a=this.Cr(o.br);s.push(a)}),me.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let i=new an(nt);return n.forEach(r=>{const s=new fn(r,0),o=new fn(r,Number.POSITIVE_INFINITY);this.vr.forEachInRange([s,o],a=>{i=i.add(a.br)})}),me.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(t,n){const i=n.path,r=i.length+1;let s=i;Fe.isDocumentKey(s)||(s=s.child(""));const o=new fn(new Fe(s),0);let a=new an(nt);return this.vr.forEachWhile(l=>{const u=l.key.path;return!!i.isPrefixOf(u)&&(u.length===r&&(a=a.add(l.br)),!0)},o),me.resolve(this.Mr(a))}Mr(t){const n=[];return t.forEach(i=>{const r=this.Cr(i);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){Ft(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return me.forEach(n.mutations,r=>{const s=new fn(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.vr=i})}Ln(t){}containsKey(t,n){const i=new fn(n,0),r=this.vr.firstAfterOrEqual(i);return me.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,me.resolve()}Or(t,n){return this.Fr(t)}Fr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Cr(t){const n=this.Fr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nU{constructor(t){this.Nr=t,this.docs=function(){return new vn(Fe.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const i=n.key,r=this.docs.get(i),s=r?r.size:0,o=this.Nr(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const i=this.docs.get(n);return me.resolve(i?i.document.mutableCopy():Vn.newInvalidDocument(n))}getEntries(t,n){let i=Is();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():Vn.newInvalidDocument(r))}),me.resolve(i)}getDocumentsMatchingQuery(t,n,i,r){let s=Is();const o=n.path,a=new Fe(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||BB(FB(c),i)<=0||(r.has(c.key)||ph(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return me.resolve(s)}getAllFromCollectionGroup(t,n,i,r){Ge()}Lr(t,n){return me.forEach(this.docs,i=>n(i))}newChangeBuffer(t){return new iU(this)}getSize(t){return me.resolve(this.size)}}class iU extends Y${constructor(t){super(),this.hr=t}applyChanges(t){const n=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?n.push(this.hr.addEntry(t,r)):this.hr.removeEntry(i)}),me.waitFor(n)}getFromCache(t,n){return this.hr.getEntry(t,n)}getAllFromCache(t,n){return this.hr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rU{constructor(t){this.persistence=t,this.Br=new Ro(n=>My(n),Oy),this.lastRemoteSnapshotVersion=ze.min(),this.highestTargetId=0,this.kr=0,this.qr=new $y,this.targetCount=0,this.Qr=Ua.qn()}forEachTarget(t,n){return this.Br.forEach((i,r)=>n(r)),me.resolve()}getLastRemoteSnapshotVersion(t){return me.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return me.resolve(this.kr)}allocateTargetId(t){return this.highestTargetId=this.Qr.next(),me.resolve(this.highestTargetId)}setTargetsMetadata(t,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.kr&&(this.kr=n),me.resolve()}Un(t){this.Br.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Qr=new Ua(n),this.highestTargetId=n),t.sequenceNumber>this.kr&&(this.kr=t.sequenceNumber)}addTargetData(t,n){return this.Un(n),this.targetCount+=1,me.resolve()}updateTargetData(t,n){return this.Un(n),me.resolve()}removeTargetData(t,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,me.resolve()}removeTargets(t,n,i){let r=0;const s=[];return this.Br.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Br.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),me.waitFor(s).next(()=>r)}getTargetCount(t){return me.resolve(this.targetCount)}getTargetData(t,n){const i=this.Br.get(n)||null;return me.resolve(i)}addMatchingKeys(t,n,i){return this.qr.mr(n,i),me.resolve()}removeMatchingKeys(t,n,i){this.qr.pr(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(o=>{s.push(r.markPotentiallyOrphaned(t,o))}),me.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.qr.yr(n),me.resolve()}getMatchingKeysForTargetId(t,n){const i=this.qr.Sr(n);return me.resolve(i)}containsKey(t,n){return me.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(t,n){this.Kr={},this.overlays={},this.$r=new hh(0),this.Ur=!1,this.Ur=!0,this.Wr=new eU,this.referenceDelegate=t(this),this.Gr=new rU(this),this.indexManager=new j$,this.remoteDocumentCache=function(r){return new nU(r)}(i=>this.referenceDelegate.zr(i)),this.serializer=new U$(n),this.jr=new J$(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Z$,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let i=this.Kr[t.toKey()];return i||(i=new tU(n,this.referenceDelegate),this.Kr[t.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(t,n,i){Re("MemoryPersistence","Starting transaction:",t);const r=new sU(this.$r.next());return this.referenceDelegate.Hr(),i(r).next(s=>this.referenceDelegate.Jr(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Yr(t,n){return me.or(Object.values(this.Kr).map(i=>()=>i.containsKey(t,n)))}}class sU extends UB{constructor(t){super(),this.currentSequenceNumber=t}}class Uy{constructor(t){this.persistence=t,this.Zr=new $y,this.Xr=null}static ei(t){return new Uy(t)}get ti(){if(this.Xr)return this.Xr;throw Ge()}addReference(t,n,i){return this.Zr.addReference(i,n),this.ti.delete(i.toString()),me.resolve()}removeReference(t,n,i){return this.Zr.removeReference(i,n),this.ti.add(i.toString()),me.resolve()}markPotentiallyOrphaned(t,n){return this.ti.add(n.toString()),me.resolve()}removeTarget(t,n){this.Zr.yr(n.targetId).forEach(r=>this.ti.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(s=>this.ti.add(s.toString()))}).next(()=>i.removeTargetData(t,n))}Hr(){this.Xr=new Set}Jr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return me.forEach(this.ti,i=>{const r=Fe.fromPath(i);return this.ni(t,r).next(s=>{s||n.removeEntry(r,ze.min())})}).next(()=>(this.Xr=null,n.apply(t)))}updateLimboDocument(t,n){return this.ni(t,n).next(i=>{i?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(t){return 0}ni(t,n){return me.or([()=>me.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Yr(t,n)])}}class pf{constructor(t,n){this.persistence=t,this.ri=new Ro(i=>WB(i.path),(i,r)=>i.isEqual(r)),this.garbageCollector=K$(this,n)}static ei(t,n){return new pf(t,n)}Hr(){}Jr(t){return me.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}Xn(t){const n=this.nr(t);return this.persistence.getTargetCache().getTargetCount(t).next(i=>n.next(r=>i+r))}nr(t){let n=0;return this.er(t,i=>{n++}).next(()=>n)}er(t,n){return me.forEach(this.ri,(i,r)=>this.ir(t,i,r).next(s=>s?me.resolve():n(r)))}removeTargets(t,n,i){return this.persistence.getTargetCache().removeTargets(t,n,i)}removeOrphanedDocuments(t,n){let i=0;const r=this.persistence.getRemoteDocumentCache(),s=r.newChangeBuffer();return r.Lr(t,o=>this.ir(t,o,n).next(a=>{a||(i++,s.removeEntry(o,ze.min()))})).next(()=>s.apply(t)).next(()=>i)}markPotentiallyOrphaned(t,n){return this.ri.set(n,t.currentSequenceNumber),me.resolve()}removeTarget(t,n){const i=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,i)}addReference(t,n,i){return this.ri.set(i,t.currentSequenceNumber),me.resolve()}removeReference(t,n,i){return this.ri.set(i,t.currentSequenceNumber),me.resolve()}updateLimboDocument(t,n){return this.ri.set(n,t.currentSequenceNumber),me.resolve()}zr(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Td(t.data.value)),n}ir(t,n,i){return me.or([()=>this.persistence.Yr(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const r=this.ri.get(n);return me.resolve(r!==void 0&&r>i)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(t,n,i,r){this.targetId=t,this.fromCache=n,this.Wi=i,this.Gi=r}static zi(t,n){let i=at(),r=at();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Hy(t,n.fromCache,i,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oU{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aU{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return l2()?8:HB(Bn())>0?6:4}()}initialize(t,n){this.Zi=t,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(t,n,i,r){const s={result:null};return this.Xi(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.es(t,n,r,i).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new oU;return this.ts(t,n,o).next(a=>{if(s.result=a,this.Hi)return this.ns(t,n,o,a.size)})}).next(()=>s.result)}ns(t,n,i,r){return i.documentReadCount<this.Ji?(aa()<=Xe.DEBUG&&Re("QueryEngine","SDK will not create cache indexes for query:",la(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),me.resolve()):(aa()<=Xe.DEBUG&&Re("QueryEngine","Query:",la(n),"scans",i.documentReadCount,"local documents and returns",r,"documents as results."),i.documentReadCount>this.Yi*r?(aa()<=Xe.DEBUG&&Re("QueryEngine","The SDK decides to create cache indexes for query:",la(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ji(n))):me.resolve())}Xi(t,n){if(nS(n))return me.resolve(null);let i=Ji(n);return this.indexManager.getIndexType(t,i).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=pg(n,null,"F"),i=Ji(n)),this.indexManager.getDocumentsMatchingTarget(t,i).next(s=>{const o=at(...s);return this.Zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,i).next(l=>{const u=this.rs(n,a);return this.ss(n,u,o,l.readTime)?this.Xi(t,pg(n,null,"F")):this.os(t,u,n,l)}))})))}es(t,n,i,r){return nS(n)||r.isEqual(ze.min())?me.resolve(null):this.Zi.getDocuments(t,i).next(s=>{const o=this.rs(n,s);return this.ss(n,o,i,r)?me.resolve(null):(aa()<=Xe.DEBUG&&Re("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),la(n)),this.os(t,o,n,LB(r,-1)).next(a=>a))})}rs(t,n){let i=new an(hA(t));return n.forEach((r,s)=>{ph(t,s)&&(i=i.add(s))}),i}ss(t,n,i,r){if(t.limit===null)return!1;if(i.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}ts(t,n,i){return aa()<=Xe.DEBUG&&Re("QueryEngine","Using full collection scan to execute query:",la(n)),this.Zi.getDocumentsMatchingQuery(t,n,ws.min(),i)}os(t,n,i,r){return this.Zi.getDocumentsMatchingQuery(t,i,r).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lU{constructor(t,n,i,r){this.persistence=t,this._s=n,this.serializer=r,this.us=new vn(nt),this.cs=new Ro(s=>My(s),Oy),this.ls=new Map,this.hs=t.getRemoteDocumentCache(),this.Gr=t.getTargetCache(),this.jr=t.getBundleCache(),this.Ps(i)}Ps(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new X$(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.us))}}function uU(e,t,n,i){return new lU(e,t,n,i)}async function MA(e,t){const n=st(e);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let r;return n.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,n.Ps(t),n.mutationQueue.getAllMutationBatches(i))).next(s=>{const o=[],a=[];let l=at();for(const u of r){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(i,l).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function OA(e){const t=st(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Gr.getLastRemoteSnapshotVersion(n))}function cU(e,t){const n=st(e),i=t.snapshotVersion;let r=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});r=n.us;const a=[];t.targetChanges.forEach((c,d)=>{const f=r.get(d);if(!f)return;a.push(n.Gr.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Gr.addMatchingKeys(s,c.addedDocuments,d)));let m=f.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(d)!==null?m=m.withResumeToken(Sn.EMPTY_BYTE_STRING,ze.min()).withLastLimboFreeSnapshotVersion(ze.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,i)),r=r.insert(d,m),function(y,p,S){return y.resumeToken.approximateByteSize()===0||p.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(f,m,c)&&a.push(n.Gr.updateTargetData(s,m))});let l=Is(),u=at();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(dU(s,o,t.documentUpdates).next(c=>{l=c.Is,u=c.Es})),!i.isEqual(ze.min())){const c=n.Gr.getLastRemoteSnapshotVersion(s).next(d=>n.Gr.setTargetsMetadata(s,s.currentSequenceNumber,i));a.push(c)}return me.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.us=r,s))}function dU(e,t,n){let i=at(),r=at();return n.forEach(s=>i=i.add(s)),t.getEntries(e,i).next(s=>{let o=Is();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(ze.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):Re("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Is:o,Es:r}})}function fU(e,t){const n=st(e);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return n.Gr.getTargetData(i,t).next(s=>s?(r=s,me.resolve(r)):n.Gr.allocateTargetId(i).next(o=>(r=new us(t,o,"TargetPurposeListen",i.currentSequenceNumber),n.Gr.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=n.us.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.us=n.us.insert(i.targetId,i),n.cs.set(t,i.targetId)),i})}async function Cg(e,t,n){const i=st(e),r=i.us.get(t),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!sl(o))throw o;Re("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}i.us=i.us.remove(t),i.cs.delete(r.target)}function mS(e,t,n){const i=st(e);let r=ze.min(),s=at();return i.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const d=st(l),f=d.cs.get(c);return f!==void 0?me.resolve(d.us.get(f)):d.Gr.getTargetData(u,c)}(i,o,Ji(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>i._s.getDocumentsMatchingQuery(o,t,n?r:ze.min(),n?s:at())).next(a=>(hU(i,l$(t),a),{documents:a,ds:s})))}function hU(e,t,n){let i=e.ls.get(t)||ze.min();n.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),e.ls.set(t,i)}class vS{constructor(){this.activeTargetIds=m$()}ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}ys(t){this.activeTargetIds=this.activeTargetIds.delete(t)}gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class mU{constructor(){this._o=new vS,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,i){}addLocalQueryTarget(t,n=!0){return n&&this._o.ps(t),this.ao[t]||"not-current"}updateQueryState(t,n,i){this.ao[t]=n}removeLocalQueryTarget(t){this._o.ys(t)}isLocalQueryTarget(t){return this._o.activeTargetIds.has(t)}clearQueryState(t){delete this.ao[t]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(t){return this._o.activeTargetIds.has(t)}start(){return this._o=new vS,Promise.resolve()}handleUserChange(t,n,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vU{uo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(t){this.To.push(t)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){Re("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.To)t(0)}Po(){Re("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.To)t(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nd=null;function tv(){return nd===null?nd=function(){return 268435456+Math.round(2147483648*Math.random())}():nd++,"0x"+nd.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gU={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pU{constructor(t){this.Eo=t.Eo,this.Ao=t.Ao}Ro(t){this.Vo=t}mo(t){this.fo=t}po(t){this.yo=t}onMessage(t){this.wo=t}close(){this.Ao()}send(t){this.Eo(t)}So(){this.Vo()}bo(){this.fo()}Do(t){this.yo(t)}vo(t){this.wo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An="WebChannelConnection";class yU extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const i=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+n.host,this.Mo=`projects/${r}/databases/${s}`,this.xo=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Oo(n,i,r,s,o){const a=tv(),l=this.No(n,i.toUriEncodedString());Re("RestConnection",`Sending RPC '${n}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,s,o),this.Bo(n,l,u,r).then(c=>(Re("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw La("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",r),c})}ko(n,i,r,s,o,a){return this.Oo(n,i,r,s,o)}Lo(n,i,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rl}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((s,o)=>n[o]=s),r&&r.headers.forEach((s,o)=>n[o]=s)}No(n,i){const r=gU[n];return`${this.Fo}/v1/${i}:${r}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Bo(t,n,i,r){const s=tv();return new Promise((o,a)=>{const l=new YE;l.setWithCredentials(!0),l.listenOnce(QE.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Cd.NO_ERROR:const c=l.getResponseJson();Re(An,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(c)),o(c);break;case Cd.TIMEOUT:Re(An,`RPC '${t}' ${s} timed out`),a(new Ve(Se.DEADLINE_EXCEEDED,"Request time out"));break;case Cd.HTTP_ERROR:const d=l.getStatus();if(Re(An,`RPC '${t}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const m=f==null?void 0:f.error;if(m&&m.status&&m.message){const g=function(p){const S=p.toLowerCase().replace(/_/g,"-");return Object.values(Se).indexOf(S)>=0?S:Se.UNKNOWN}(m.status);a(new Ve(g,m.message))}else a(new Ve(Se.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new Ve(Se.UNAVAILABLE,"Connection failed."));break;default:Ge()}}finally{Re(An,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(r);Re(An,`RPC '${t}' ${s} sending request:`,r),l.send(n,"POST",u,i,15)})}qo(t,n,i){const r=tv(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=ZE(),a=JE(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Lo(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const c=s.join("");Re(An,`Creating RPC '${t}' stream ${r}: ${c}`,l);const d=o.createWebChannel(c,l);let f=!1,m=!1;const g=new pU({Eo:p=>{m?Re(An,`Not sending because RPC '${t}' stream ${r} is closed:`,p):(f||(Re(An,`Opening RPC '${t}' stream ${r} transport.`),d.open(),f=!0),Re(An,`RPC '${t}' stream ${r} sending:`,p),d.send(p))},Ao:()=>d.close()}),y=(p,S,w)=>{p.listen(S,T=>{try{w(T)}catch(x){setTimeout(()=>{throw x},0)}})};return y(d,Gl.EventType.OPEN,()=>{m||(Re(An,`RPC '${t}' stream ${r} transport opened.`),g.So())}),y(d,Gl.EventType.CLOSE,()=>{m||(m=!0,Re(An,`RPC '${t}' stream ${r} transport closed`),g.Do())}),y(d,Gl.EventType.ERROR,p=>{m||(m=!0,La(An,`RPC '${t}' stream ${r} transport errored:`,p),g.Do(new Ve(Se.UNAVAILABLE,"The operation could not be completed")))}),y(d,Gl.EventType.MESSAGE,p=>{var S;if(!m){const w=p.data[0];Ft(!!w);const T=w,x=(T==null?void 0:T.error)||((S=T[0])===null||S===void 0?void 0:S.error);if(x){Re(An,`RPC '${t}' stream ${r} received error:`,x);const V=x.status;let D=function(_){const I=Yt[_];if(I!==void 0)return SA(I)}(V),A=x.message;D===void 0&&(D=Se.INTERNAL,A="Unknown error status: "+V+" with message "+x.message),m=!0,g.Do(new Ve(D,A)),d.close()}else Re(An,`RPC '${t}' stream ${r} received:`,w),g.vo(w)}}),y(a,XE.STAT_EVENT,p=>{p.stat===cg.PROXY?Re(An,`RPC '${t}' stream ${r} detected buffering proxy`):p.stat===cg.NOPROXY&&Re(An,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.bo()},0),g}}function nv(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(e){return new R$(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(t,n,i=1e3,r=1.5,s=6e4){this.li=t,this.timerId=n,this.Qo=i,this.Ko=r,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(t){this.cancel();const n=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),r=Math.max(0,n-i);r>0&&Re("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,r,()=>(this.Go=Date.now(),t())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _U{constructor(t,n,i,r,s,o,a,l){this.li=t,this.Yo=i,this.Zo=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new NA(t,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(t){this.l_(),this.stream.send(t)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(t,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,t!==4?this.r_.reset():n&&n.code===Se.RESOURCE_EXHAUSTED?(Dr(n.toString()),Dr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===Se.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.po(n)}P_(){}auth(){this.state=1;const t=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.Xo===n&&this.I_(i,r)},i=>{t(()=>{const r=new Ve(Se.UNKNOWN,"Fetching auth token failed: "+i.message);return this.E_(r)})})}I_(t,n){const i=this.T_(this.Xo);this.stream=this.d_(t,n),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(r=>{i(()=>this.E_(r))}),this.stream.onMessage(r=>{i(()=>++this.n_==1?this.A_(r):this.onNext(r))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(t){return Re("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}T_(t){return n=>{this.li.enqueueAndForget(()=>this.Xo===t?n():(Re("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bU extends _U{constructor(t,n,i,r,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s}d_(t,n){return this.connection.qo("Listen",t,n)}A_(t){return this.onNext(t)}onNext(t){this.r_.reset();const n=D$(this.serializer,t),i=function(s){if(!("targetChange"in s))return ze.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ze.min():o.readTime?ka(o.readTime):ze.min()}(t);return this.listener.R_(n,i)}V_(t){const n={};n.database=dS(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=vg(l)?{documents:M$(s,l)}:{query:O$(s,l).ct},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=IA(s,o.resumeToken);const u=bg(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ze.min())>0){a.readTime=wg(s,o.snapshotVersion.toTimestamp());const u=bg(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const i=L$(this.serializer,t);i&&(n.labels=i),this.c_(n)}m_(t){const n={};n.database=dS(this.serializer),n.removeTarget=t,this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wU extends class{}{constructor(t,n,i,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=i,this.serializer=r,this.S_=!1}b_(){if(this.S_)throw new Ve(Se.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(t,n,i,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Oo(t,Sg(n,i),r,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Se.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Ve(Se.UNKNOWN,s.toString())})}ko(t,n,i,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.ko(t,Sg(n,i),r,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===Se.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Ve(Se.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class SU{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(t){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.M_("Offline")))}set(t){this.N_(),this.D_=0,t==="Online"&&(this.C_=!1),this.M_(t)}M_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}x_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Dr(n),this.C_=!1):Re("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CU{constructor(t,n,i,r,s){this.localStore=t,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(o=>{i.enqueueAndForget(async()=>{dc(this)&&(Re("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=st(l);u.k_.add(4),await cc(u),u.K_.set("Unknown"),u.k_.delete(4),await Sh(u)}(this))})}),this.K_=new SU(i,r)}}async function Sh(e){if(dc(e))for(const t of e.q_)await t(!0)}async function cc(e){for(const t of e.q_)await t(!1)}function LA(e,t){const n=st(e);n.B_.has(t.targetId)||(n.B_.set(t.targetId,t),qy(n)?zy(n):ll(n).s_()&&Wy(n,t))}function jy(e,t){const n=st(e),i=ll(n);n.B_.delete(t),i.s_()&&FA(n,t),n.B_.size===0&&(i.s_()?i.a_():dc(n)&&n.K_.set("Unknown"))}function Wy(e,t){if(e.U_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ze.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ll(e).V_(t)}function FA(e,t){e.U_.xe(t),ll(e).m_(t)}function zy(e){e.U_=new E$({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.B_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),ll(e).start(),e.K_.F_()}function qy(e){return dc(e)&&!ll(e).i_()&&e.B_.size>0}function dc(e){return st(e).k_.size===0}function BA(e){e.U_=void 0}async function TU(e){e.K_.set("Online")}async function IU(e){e.B_.forEach((t,n)=>{Wy(e,t)})}async function kU(e,t){BA(e),qy(e)?(e.K_.O_(t),zy(e)):e.K_.set("Unknown")}async function EU(e,t,n){if(e.K_.set("Online"),t instanceof TA&&t.state===2&&t.cause)try{await async function(r,s){const o=s.cause;for(const a of s.targetIds)r.B_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.B_.delete(a),r.U_.removeTarget(a))}(e,t)}catch(i){Re("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),i),await pS(e,i)}else if(t instanceof kd?e.U_.$e(t):t instanceof CA?e.U_.Je(t):e.U_.Ge(t),!n.isEqual(ze.min()))try{const i=await OA(e.localStore);n.compareTo(i)>=0&&await function(s,o){const a=s.U_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.B_.get(u);c&&s.B_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.B_.get(l);if(!c)return;s.B_.set(l,c.withResumeToken(Sn.EMPTY_BYTE_STRING,c.snapshotVersion)),FA(s,l);const d=new us(c.target,l,u,c.sequenceNumber);Wy(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(i){Re("RemoteStore","Failed to raise snapshot:",i),await pS(e,i)}}async function pS(e,t,n){if(!sl(t))throw t;e.k_.add(1),await cc(e),e.K_.set("Offline"),n||(n=()=>OA(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{Re("RemoteStore","Retrying IndexedDB access"),await n(),e.k_.delete(1),await Sh(e)})}async function yS(e,t){const n=st(e);n.asyncQueue.verifyOperationInProgress(),Re("RemoteStore","RemoteStore received new credentials");const i=dc(n);n.k_.add(3),await cc(n),i&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.k_.delete(3),await Sh(n)}async function AU(e,t){const n=st(e);t?(n.k_.delete(2),await Sh(n)):t||(n.k_.add(2),await cc(n),n.K_.set("Unknown"))}function ll(e){return e.W_||(e.W_=function(n,i,r){const s=st(n);return s.b_(),new bU(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(e.datastore,e.asyncQueue,{Ro:TU.bind(null,e),mo:IU.bind(null,e),po:kU.bind(null,e),R_:EU.bind(null,e)}),e.q_.push(async t=>{t?(e.W_.__(),qy(e)?zy(e):e.K_.set("Unknown")):(await e.W_.stop(),BA(e))})),e.W_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(t,n,i,r,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new so,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,i,r,s){const o=Date.now()+i,a=new Gy(t,n,o,r,s);return a.start(i),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ve(Se.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $A(e,t){if(Dr("AsyncQueue",`${t}: ${e}`),sl(e))return new Ve(Se.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{static emptySet(t){return new Ea(t.comparator)}constructor(t){this.comparator=t?(n,i)=>t(n,i)||Fe.comparator(n.key,i.key):(n,i)=>Fe.comparator(n.key,i.key),this.keyedMap=Kl(),this.sortedSet=new vn(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,i)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ea)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const i=new Ea;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(){this.z_=new vn(Fe.comparator)}track(t){const n=t.doc.key,i=this.z_.get(n);i?t.type!==0&&i.type===3?this.z_=this.z_.insert(n,t):t.type===3&&i.type!==1?this.z_=this.z_.insert(n,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.z_=this.z_.insert(n,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.z_=this.z_.insert(n,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.z_=this.z_.remove(n):t.type===1&&i.type===2?this.z_=this.z_.insert(n,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.z_=this.z_.insert(n,{type:2,doc:t.doc}):Ge():this.z_=this.z_.insert(n,t)}j_(){const t=[];return this.z_.inorderTraversal((n,i)=>{t.push(i)}),t}}class Ha{constructor(t,n,i,r,s,o,a,l,u){this.query=t,this.docs=n,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,n,i,r,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ha(t,n,Ea.emptySet(n),o,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&gh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,i=t.docChanges;if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==i[r].type||!n[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PU{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(t=>t.Z_())}}class xU{constructor(){this.queries=bS(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,i){const r=st(n),s=r.queries;r.queries=bS(),s.forEach((o,a)=>{for(const l of a.J_)l.onError(i)})})(this,new Ve(Se.ABORTED,"Firestore shutting down"))}}function bS(){return new Ro(e=>fA(e),gh)}async function RU(e,t){const n=st(e);let i=3;const r=t.query;let s=n.queries.get(r);s?!s.Y_()&&t.Z_()&&(i=2):(s=new PU,i=t.Z_()?0:1);try{switch(i){case 0:s.H_=await n.onListen(r,!0);break;case 1:s.H_=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const a=$A(o,`Initialization of query '${la(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.J_.push(t),t.ea(n.onlineState),s.H_&&t.ta(s.H_)&&Ky(n)}async function VU(e,t){const n=st(e),i=t.query;let r=3;const s=n.queries.get(i);if(s){const o=s.J_.indexOf(t);o>=0&&(s.J_.splice(o,1),s.J_.length===0?r=t.Z_()?0:1:!s.Y_()&&t.Z_()&&(r=2))}switch(r){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function DU(e,t){const n=st(e);let i=!1;for(const r of t){const s=r.query,o=n.queries.get(s);if(o){for(const a of o.J_)a.ta(r)&&(i=!0);o.H_=r}}i&&Ky(n)}function MU(e,t,n){const i=st(e),r=i.queries.get(t);if(r)for(const s of r.J_)s.onError(n);i.queries.delete(t)}function Ky(e){e.X_.forEach(t=>{t.next()})}var Tg,wS;(wS=Tg||(Tg={})).na="default",wS.Cache="cache";class OU{constructor(t,n,i){this.query=t,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(t){if(!this.options.includeMetadataChanges){const i=[];for(const r of t.docChanges)r.type!==3&&i.push(r);t=new Ha(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.ia?this.oa(t)&&(this.ra.next(t),n=!0):this._a(t,this.onlineState)&&(this.aa(t),n=!0),this.sa=t,n}onError(t){this.ra.error(t)}ea(t){this.onlineState=t;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,t)&&(this.aa(this.sa),n=!0),n}_a(t,n){if(!t.fromCache||!this.Z_())return!0;const i=n!=="Offline";return(!this.options.ua||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}oa(t){if(t.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(t){t=Ha.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ia=!0,this.ra.next(t)}Z_(){return this.options.source!==Tg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(t){this.key=t}}class HA{constructor(t){this.key=t}}class NU{constructor(t,n){this.query=t,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=at(),this.mutatedKeys=at(),this.Va=hA(t),this.ma=new Ea(this.Va)}get fa(){return this.da}ga(t,n){const i=n?n.pa:new _S,r=n?n.ma:this.ma;let s=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((c,d)=>{const f=r.get(c),m=ph(this.query,d)?d:null,g=!!f&&this.mutatedKeys.has(f.key),y=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let p=!1;f&&m?f.data.isEqual(m.data)?g!==y&&(i.track({type:3,doc:m}),p=!0):this.ya(f,m)||(i.track({type:2,doc:m}),p=!0,(l&&this.Va(m,l)>0||u&&this.Va(m,u)<0)&&(a=!0)):!f&&m?(i.track({type:0,doc:m}),p=!0):f&&!m&&(i.track({type:1,doc:f}),p=!0,(l||u)&&(a=!0)),p&&(m?(o=o.add(m),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),i.track({type:1,doc:c})}return{ma:o,pa:i,ss:a,mutatedKeys:s}}ya(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,i,r){const s=this.ma;this.ma=t.ma,this.mutatedKeys=t.mutatedKeys;const o=t.pa.j_();o.sort((c,d)=>function(m,g){const y=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ge()}};return y(m)-y(g)}(c.type,d.type)||this.Va(c.doc,d.doc)),this.wa(i),r=r!=null&&r;const a=n&&!r?this.Sa():[],l=this.Ra.size===0&&this.current&&!r?1:0,u=l!==this.Aa;return this.Aa=l,o.length!==0||u?{snapshot:new Ha(this.query,t.ma,s,o,t.mutatedKeys,l===0,u,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new _S,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(t){return!this.da.has(t)&&!!this.ma.has(t)&&!this.ma.get(t).hasLocalMutations}wa(t){t&&(t.addedDocuments.forEach(n=>this.da=this.da.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=t.current)}Sa(){if(!this.current)return[];const t=this.Ra;this.Ra=at(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const n=[];return t.forEach(i=>{this.Ra.has(i)||n.push(new HA(i))}),this.Ra.forEach(i=>{t.has(i)||n.push(new UA(i))}),n}va(t){this.da=t.ds,this.Ra=at();const n=this.ga(t.documents);return this.applyChanges(n,!0)}Ca(){return Ha.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class LU{constructor(t,n,i){this.query=t,this.targetId=n,this.view=i}}class FU{constructor(t){this.key=t,this.Fa=!1}}class BU{constructor(t,n,i,r,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Ro(a=>fA(a),gh),this.Oa=new Map,this.Na=new Set,this.La=new vn(Fe.comparator),this.Ba=new Map,this.ka=new $y,this.qa={},this.Qa=new Map,this.Ka=Ua.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function $U(e,t,n=!0){const i=GA(e);let r;const s=i.xa.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.Ca()):r=await jA(i,t,n,!0),r}async function UU(e,t){const n=GA(e);await jA(n,t,!0,!1)}async function jA(e,t,n,i){const r=await fU(e.localStore,Ji(t)),s=r.targetId,o=e.sharedClientState.addLocalQueryTarget(s,n);let a;return i&&(a=await HU(e,t,s,o==="current",r.resumeToken)),e.isPrimaryClient&&n&&LA(e.remoteStore,r),a}async function HU(e,t,n,i,r){e.Ua=(d,f,m)=>async function(y,p,S,w){let T=p.view.ga(S);T.ss&&(T=await mS(y.localStore,p.query,!1).then(({documents:A})=>p.view.ga(A,T)));const x=w&&w.targetChanges.get(p.targetId),V=w&&w.targetMismatches.get(p.targetId)!=null,D=p.view.applyChanges(T,y.isPrimaryClient,x,V);return CS(y,p.targetId,D.ba),D.snapshot}(e,d,f,m);const s=await mS(e.localStore,t,!0),o=new NU(t,s.ds),a=o.ga(s.documents),l=uc.createSynthesizedTargetChangeForCurrentChange(n,i&&e.onlineState!=="Offline",r),u=o.applyChanges(a,e.isPrimaryClient,l);CS(e,n,u.ba);const c=new LU(t,n,o);return e.xa.set(t,c),e.Oa.has(n)?e.Oa.get(n).push(t):e.Oa.set(n,[t]),u.snapshot}async function jU(e,t,n){const i=st(e),r=i.xa.get(t),s=i.Oa.get(r.targetId);if(s.length>1)return i.Oa.set(r.targetId,s.filter(o=>!gh(o,t))),void i.xa.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(r.targetId),i.sharedClientState.isActiveQueryTarget(r.targetId)||await Cg(i.localStore,r.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(r.targetId),n&&jy(i.remoteStore,r.targetId),Ig(i,r.targetId)}).catch(fh)):(Ig(i,r.targetId),await Cg(i.localStore,r.targetId,!0))}async function WU(e,t){const n=st(e),i=n.xa.get(t),r=n.Oa.get(i.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),jy(n.remoteStore,i.targetId))}async function WA(e,t){const n=st(e);try{const i=await cU(n.localStore,t);t.targetChanges.forEach((r,s)=>{const o=n.Ba.get(s);o&&(Ft(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Fa=!0:r.modifiedDocuments.size>0?Ft(o.Fa):r.removedDocuments.size>0&&(Ft(o.Fa),o.Fa=!1))}),await qA(n,i,t)}catch(i){await fh(i)}}function SS(e,t,n){const i=st(e);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.xa.forEach((s,o)=>{const a=o.view.ea(t);a.snapshot&&r.push(a.snapshot)}),function(o,a){const l=st(o);l.onlineState=a;let u=!1;l.queries.forEach((c,d)=>{for(const f of d.J_)f.ea(a)&&(u=!0)}),u&&Ky(l)}(i.eventManager,t),r.length&&i.Ma.R_(r),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function zU(e,t,n){const i=st(e);i.sharedClientState.updateQueryState(t,"rejected",n);const r=i.Ba.get(t),s=r&&r.key;if(s){let o=new vn(Fe.comparator);o=o.insert(s,Vn.newNoDocument(s,ze.min()));const a=at().add(s),l=new bh(ze.min(),new Map,new vn(nt),o,a);await WA(i,l),i.La=i.La.remove(s),i.Ba.delete(t),Yy(i)}else await Cg(i.localStore,t,!1).then(()=>Ig(i,t,n)).catch(fh)}function Ig(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.Oa.get(t))e.xa.delete(i),n&&e.Ma.Wa(i,n);e.Oa.delete(t),e.isPrimaryClient&&e.ka.yr(t).forEach(i=>{e.ka.containsKey(i)||zA(e,i)})}function zA(e,t){e.Na.delete(t.path.canonicalString());const n=e.La.get(t);n!==null&&(jy(e.remoteStore,n),e.La=e.La.remove(t),e.Ba.delete(n),Yy(e))}function CS(e,t,n){for(const i of n)i instanceof UA?(e.ka.addReference(i.key,t),qU(e,i)):i instanceof HA?(Re("SyncEngine","Document no longer in limbo: "+i.key),e.ka.removeReference(i.key,t),e.ka.containsKey(i.key)||zA(e,i.key)):Ge()}function qU(e,t){const n=t.key,i=n.path.canonicalString();e.La.get(n)||e.Na.has(i)||(Re("SyncEngine","New document in limbo: "+n),e.Na.add(i),Yy(e))}function Yy(e){for(;e.Na.size>0&&e.La.size<e.maxConcurrentLimboResolutions;){const t=e.Na.values().next().value;e.Na.delete(t);const n=new Fe(Pt.fromString(t)),i=e.Ka.next();e.Ba.set(i,new FU(n)),e.La=e.La.insert(n,i),LA(e.remoteStore,new us(Ji(cA(n.path)),i,"TargetPurposeLimboResolution",hh.oe))}}async function qA(e,t,n){const i=st(e),r=[],s=[],o=[];i.xa.isEmpty()||(i.xa.forEach((a,l)=>{o.push(i.Ua(l,t,n).then(u=>{var c;if((u||n)&&i.isPrimaryClient){const d=u?!u.fromCache:(c=n==null?void 0:n.targetChanges.get(l.targetId))===null||c===void 0?void 0:c.current;i.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){r.push(u);const d=Hy.zi(l.targetId,u);s.push(d)}}))}),await Promise.all(o),i.Ma.R_(r),await async function(l,u){const c=st(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>me.forEach(u,f=>me.forEach(f.Wi,m=>c.persistence.referenceDelegate.addReference(d,f.targetId,m)).next(()=>me.forEach(f.Gi,m=>c.persistence.referenceDelegate.removeReference(d,f.targetId,m)))))}catch(d){if(!sl(d))throw d;Re("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const f=d.targetId;if(!d.fromCache){const m=c.us.get(f),g=m.snapshotVersion,y=m.withLastLimboFreeSnapshotVersion(g);c.us=c.us.insert(f,y)}}}(i.localStore,s))}async function GU(e,t){const n=st(e);if(!n.currentUser.isEqual(t)){Re("SyncEngine","User change. New user:",t.toKey());const i=await MA(n.localStore,t);n.currentUser=t,function(s,o){s.Qa.forEach(a=>{a.forEach(l=>{l.reject(new Ve(Se.CANCELLED,o))})}),s.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await qA(n,i.Ts)}}function KU(e,t){const n=st(e),i=n.Ba.get(t);if(i&&i.Fa)return at().add(i.key);{let r=at();const s=n.Oa.get(t);if(!s)return r;for(const o of s){const a=n.xa.get(o);r=r.unionWith(a.view.fa)}return r}}function GA(e){const t=st(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=WA.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=KU.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=zU.bind(null,t),t.Ma.R_=DU.bind(null,t.eventManager),t.Ma.Wa=MU.bind(null,t.eventManager),t}class yf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=wh(t.databaseInfo.databaseId),this.sharedClientState=this.za(t),this.persistence=this.ja(t),await this.persistence.start(),this.localStore=this.Ha(t),this.gcScheduler=this.Ja(t,this.localStore),this.indexBackfillerScheduler=this.Ya(t,this.localStore)}Ja(t,n){return null}Ya(t,n){return null}Ha(t){return uU(this.persistence,new aU,t.initialUser,this.serializer)}ja(t){return new DA(Uy.ei,this.serializer)}za(t){return new mU}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yf.provider={build:()=>new yf};class YU extends yf{constructor(t){super(),this.cacheSizeBytes=t}Ja(t,n){Ft(this.persistence.referenceDelegate instanceof pf);const i=this.persistence.referenceDelegate.garbageCollector;return new q$(i,t.asyncQueue,n)}ja(t){const n=this.cacheSizeBytes!==void 0?Yn.withCacheSize(this.cacheSizeBytes):Yn.DEFAULT;return new DA(i=>pf.ei(i,n),this.serializer)}}class kg{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>SS(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=GU.bind(null,this.syncEngine),await AU(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new xU}()}createDatastore(t){const n=wh(t.databaseInfo.databaseId),i=function(s){return new yU(s)}(t.databaseInfo);return function(s,o,a,l){return new wU(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,i,n)}createRemoteStore(t){return function(i,r,s,o,a){return new CU(i,r,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>SS(this.syncEngine,n,0),function(){return gS.p()?new gS:new vU}())}createSyncEngine(t,n){return function(r,s,o,a,l,u,c){const d=new BU(r,s,o,a,l,u);return c&&(d.$a=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(r){const s=st(r);Re("RemoteStore","RemoteStore shutting down."),s.k_.add(5),await cc(s),s.Q_.shutdown(),s.K_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}kg.provider={build:()=>new kg};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QU{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Xa(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Xa(this.observer.error,t):Dr("Uncaught Error in snapshot listener:",t.toString()))}eu(){this.muted=!0}Xa(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XU{constructor(t,n,i,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=Pn.UNAUTHENTICATED,this.clientId=tA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(i,async o=>{Re("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(i,o=>(Re("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new so;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=$A(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function iv(e,t){e.asyncQueue.verifyOperationInProgress(),Re("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async r=>{i.isEqual(r)||(await MA(t.localStore,r),i=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function TS(e,t){e.asyncQueue.verifyOperationInProgress();const n=await JU(e);Re("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(i=>yS(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>yS(t.remoteStore,r)),e._onlineComponents=t}async function JU(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Re("FirestoreClient","Using user provided OfflineComponentProvider");try{await iv(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(r){return r.name==="FirebaseError"?r.code===Se.FAILED_PRECONDITION||r.code===Se.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(n))throw n;La("Error using user provided cache. Falling back to memory cache: "+n),await iv(e,new yf)}}else Re("FirestoreClient","Using default OfflineComponentProvider"),await iv(e,new YU(void 0));return e._offlineComponents}async function ZU(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Re("FirestoreClient","Using user provided OnlineComponentProvider"),await TS(e,e._uninitializedComponentsProvider._online)):(Re("FirestoreClient","Using default OnlineComponentProvider"),await TS(e,new kg))),e._onlineComponents}async function e4(e){const t=await ZU(e),n=t.eventManager;return n.onListen=$U.bind(null,t.syncEngine),n.onUnlisten=jU.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=UU.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=WU.bind(null,t.syncEngine),n}function t4(e,t,n={}){const i=new so;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new QU({next:f=>{c.eu(),o.enqueueAndForget(()=>VU(s,d)),f.fromCache&&l.source==="server"?u.reject(new Ve(Se.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(f)},error:f=>u.reject(f)}),d=new OU(a,c,{includeMetadataChanges:!0,ua:!0});return RU(s,d)}(await e4(e),e.asyncQueue,t,n,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YA(e,t,n){if(!n)throw new Ve(Se.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function n4(e,t,n,i){if(t===!0&&i===!0)throw new Ve(Se.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function kS(e){if(!Fe.isDocumentKey(e))throw new Ve(Se.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ES(e){if(Fe.isDocumentKey(e))throw new Ve(Se.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ch(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Ge()}function Eg(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ve(Se.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ch(e);throw new Ve(Se.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(t){var n,i;if(t.host===void 0){if(t.ssl!==void 0)throw new Ve(Se.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Ve(Se.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}n4("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=KA((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Ve(Se.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Ve(Se.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Ve(Se.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Th{constructor(t,n,i,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new AS({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ve(Se.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new Ve(Se.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new AS(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new AB;switch(i.type){case"firstParty":return new VB(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new Ve(Se.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=IS.get(n);i&&(Re("ComponentProvider","Removing Datastore"),IS.delete(n),i.terminate())}(this),Promise.resolve()}}function i4(e,t,n,i={}){var r;const s=(e=Eg(e,Th))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&La("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let a,l;if(typeof i.mockUserToken=="string")a=i.mockUserToken,l=Pn.MOCK_USER;else{a=i2(i.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new Ve(Se.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Pn(u)}e._authCredentials=new PB(new eA(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(t,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new Vo(this.firestore,t,this._query)}}class bi{constructor(t,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gs(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new bi(this.firestore,t,this._key)}}class gs extends Vo{constructor(t,n,i){super(t,n,cA(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new bi(this.firestore,null,new Fe(t))}withConverter(t){return new gs(this.firestore,t,this._path)}}function dee(e,t,...n){if(e=Oi(e),YA("collection","path",t),e instanceof Th){const i=Pt.fromString(t,...n);return ES(i),new gs(e,null,i)}{if(!(e instanceof bi||e instanceof gs))throw new Ve(Se.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Pt.fromString(t,...n));return ES(i),new gs(e.firestore,null,i)}}function fee(e,t,...n){if(e=Oi(e),arguments.length===1&&(t=tA.newId()),YA("doc","path",t),e instanceof Th){const i=Pt.fromString(t,...n);return kS(i),new bi(e,null,new Fe(i))}{if(!(e instanceof bi||e instanceof gs))throw new Ve(Se.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Pt.fromString(t,...n));return kS(i),new bi(e.firestore,e instanceof gs?e.converter:null,new Fe(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(t=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new NA(this,"async_queue_retry"),this.fu=()=>{const i=nv();i&&Re("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=t;const n=nv();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.yu(t)}enterRestrictedMode(t){if(!this.Eu){this.Eu=!0,this.Vu=t||!1;const n=nv();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(t){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new so;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Iu.push(t),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(t){if(!sl(t))throw t;Re("AsyncQueue","Operation failed with retryable error: "+t)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(t){const n=this.gu.then(()=>(this.Ru=!0,t().catch(i=>{this.Au=i,this.Ru=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw Dr("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Ru=!1,i))));return this.gu=n,n}enqueueAfterDelay(t,n,i){this.pu(),this.mu.indexOf(t)>-1&&(n=0);const r=Gy.createAndSchedule(this,t,n,i,s=>this.Su(s));return this.du.push(r),r}pu(){this.Au&&Ge()}verifyOperationInProgress(){}async bu(){let t;do t=this.gu,await t;while(t!==this.gu)}Du(t){for(const n of this.du)if(n.timerId===t)return!0;return!1}vu(t){return this.bu().then(()=>{this.du.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.du)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.bu()})}Cu(t){this.mu.push(t)}Su(t){const n=this.du.indexOf(t);this.du.splice(n,1)}}class QA extends Th{constructor(t,n,i,r){super(t,n,i,r),this.type="firestore",this._queue=new PS,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new PS(t),this._firestoreClient=void 0,await t}}}function r4(e,t){const n=typeof e=="object"?e:zE(),i=typeof e=="string"?e:"(default)",r=jE(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=t2("firestore");s&&i4(r,...s)}return r}function s4(e){if(e._terminated)throw new Ve(Se.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||o4(e),e._firestoreClient}function o4(e){var t,n,i;const r=e._freezeSettings(),s=function(a,l,u,c){return new GB(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,KA(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,r);e._componentsProvider||!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(e._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),e._firestoreClient=new XU(e._authCredentials,e._appCheckCredentials,e._queue,s,e._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(e._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ja(Sn.fromBase64String(t))}catch(n){throw new Ve(Se.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ja(Sn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new Ve(Se.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new On(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new Ve(Se.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new Ve(Se.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return nt(this._lat,t._lat)||nt(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,r){if(i.length!==r.length)return!1;for(let s=0;s<i.length;++s)if(i[s]!==r[s])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a4=/^__.*__$/;function ZA(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ge()}}class Xy{constructor(t,n,i,r,s,o){this.settings=t,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(t){return new Xy(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.xu({path:i,Nu:!1});return r.Lu(t),r}Bu(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.xu({path:i,Nu:!1});return r.Fu(),r}ku(t){return this.xu({path:void 0,Nu:!0})}qu(t){return Ag(t,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Lu(this.path.get(t))}Lu(t){if(t.length===0)throw this.qu("Document fields must not be empty");if(ZA(this.Mu)&&a4.test(t))throw this.qu('Document fields cannot begin and end with "__"')}}class l4{constructor(t,n,i){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=i||wh(t)}$u(t,n,i,r=!1){return new Xy({Mu:t,methodName:n,Ku:i,path:On.emptyPath(),Nu:!1,Qu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function u4(e){const t=e._freezeSettings(),n=wh(e._databaseId);return new l4(e._databaseId,!!t.ignoreUndefinedProperties,n)}function c4(e,t,n,i=!1){return Jy(n,e.$u(i?4:3,t))}function Jy(e,t){if(eP(e=Oi(e)))return f4("Unsupported field value:",t,e),d4(e,t);if(e instanceof JA)return function(i,r){if(!ZA(r.Mu))throw r.qu(`${i._methodName}() can only be used with update() and set()`);if(!r.path)throw r.qu(`${i._methodName}() is not currently supported inside arrays`);const s=i._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Nu&&t.Mu!==4)throw t.qu("Nested arrays are not supported");return function(i,r){const s=[];let o=0;for(const a of i){let l=Jy(a,r.ku(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(e,t)}return function(i,r){if((i=Oi(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return v$(r.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const s=on.fromDate(i);return{timestampValue:wg(r.serializer,s)}}if(i instanceof on){const s=new on(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:wg(r.serializer,s)}}if(i instanceof Ih)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof ja)return{bytesValue:IA(r.serializer,i._byteString)};if(i instanceof bi){const s=r.databaseId,o=i.firestore._databaseId;if(!o.isEqual(s))throw r.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:kA(i.firestore._databaseId||r.databaseId,i._key.path)}}if(i instanceof Qy)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.qu("VectorValues must only contain numeric values.");return Ny(a.serializer,l)})}}}}}}(i,r);throw r.qu(`Unsupported field value: ${Ch(i)}`)}(e,t)}function d4(e,t){const n={};return nA(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ol(e,(i,r)=>{const s=Jy(r,t.Ou(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function eP(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof on||e instanceof Ih||e instanceof ja||e instanceof bi||e instanceof JA||e instanceof Qy)}function f4(e,t,n){if(!eP(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const i=Ch(n);throw i==="an object"?t.qu(e+" a custom object"):t.qu(e+" "+i)}}const h4=new RegExp("[~\\*/\\[\\]]");function m4(e,t,n){if(t.search(h4)>=0)throw Ag(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new XA(...t.split("."))._internalPath}catch{throw Ag(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Ag(e,t,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new Ve(Se.INVALID_ARGUMENT,a+e+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(t,n,i,r,s){this._firestore=t,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new bi(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new v4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Zy("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class v4 extends tP{data(){return super.data()}}function Zy(e,t){return typeof t=="string"?m4(e,t):t instanceof XA?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g4(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new Ve(Se.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class e_{}class nP extends e_{}function hee(e,t,...n){let i=[];t instanceof e_&&i.push(t),i=i.concat(n),function(s){const o=s.filter(l=>l instanceof n_).length,a=s.filter(l=>l instanceof t_).length;if(o>1||o>0&&a>0)throw new Ve(Se.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const r of i)e=r._apply(e);return e}class t_ extends nP{constructor(t,n,i){super(),this._field=t,this._op=n,this._value=i,this.type="where"}static _create(t,n,i){return new t_(t,n,i)}_apply(t){const n=this._parse(t);return iP(t._query,n),new Vo(t.firestore,t.converter,gg(t._query,n))}_parse(t){const n=u4(t.firestore);return function(s,o,a,l,u,c,d){let f;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new Ve(Se.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){RS(d,c);const m=[];for(const g of d)m.push(xS(l,s,g));f={arrayValue:{values:m}}}else f=xS(l,s,d)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||RS(d,c),f=c4(a,o,d,c==="in"||c==="not-in");return Xt.create(u,c,f)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class n_ extends e_{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new n_(t,n)}_parse(t){const n=this._queryConstraints.map(i=>i._parse(t)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:Li.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(r,s){let o=r;const a=s.getFlattenedFilters();for(const l of a)iP(o,l),o=gg(o,l)}(t._query,n),new Vo(t.firestore,t.converter,gg(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class i_ extends nP{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new i_(t,n)}_apply(t){const n=function(r,s,o){if(r.startAt!==null)throw new Ve(Se.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new Ve(Se.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ru(s,o)}(t._query,this._field,this._direction);return new Vo(t.firestore,t.converter,function(r,s){const o=r.explicitOrderBy.concat([s]);return new al(r.path,r.collectionGroup,o,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(t._query,n))}}function mee(e,t="asc"){const n=t,i=Zy("orderBy",e);return i_._create(i,n)}function xS(e,t,n){if(typeof(n=Oi(n))=="string"){if(n==="")throw new Ve(Se.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dA(t)&&n.indexOf("/")!==-1)throw new Ve(Se.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=t.path.child(Pt.fromString(n));if(!Fe.isDocumentKey(i))throw new Ve(Se.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Q0(e,new Fe(i))}if(n instanceof bi)return Q0(e,n._key);throw new Ve(Se.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ch(n)}.`)}function RS(e,t){if(!Array.isArray(e)||e.length===0)throw new Ve(Se.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function iP(e,t){const n=function(r,s){for(const o of r)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new Ve(Se.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Ve(Se.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class p4{convertValue(t,n="none"){switch(Ts(t)){case 0:return null;case 1:return t.booleanValue;case 2:return jt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Cs(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw Ge()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const i={};return ol(t,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertVectorValue(t){var n,i,r;const s=(r=(i=(n=t.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||i===void 0?void 0:i.values)===null||r===void 0?void 0:r.map(o=>jt(o.doubleValue));return new Qy(s)}convertGeoPoint(t){return new Ih(jt(t.latitude),jt(t.longitude))}convertArray(t,n){return(t.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(t,n){switch(n){case"previous":const i=vh(t);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Au(t));default:return null}}convertTimestamp(t){const n=Ss(t);return new on(n.seconds,n.nanos)}convertDocumentKey(t,n){const i=Pt.fromString(t);Ft(VA(i));const r=new Pu(i.get(1),i.get(3)),s=new Fe(i.popFirst(5));return r.isEqual(n)||Dr(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class y4 extends tP{constructor(t,n,i,r,s,o){super(t,n,i,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Ed(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const i=this._document.data.field(Zy("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Ed extends y4{data(t={}){return super.data(t)}}class _4{constructor(t,n,i,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new id(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(i=>{t.call(n,new Ed(this._firestore,this._userDataWriter,i.key,i,new id(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Ve(Se.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const l=new Ed(r._firestore,r._userDataWriter,a.doc.key,a.doc,new id(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Ed(r._firestore,r._userDataWriter,a.doc.key,a.doc,new id(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:b4(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function b4(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ge()}}class w4 extends p4{constructor(t){super(),this.firestore=t}convertBytes(t){return new ja(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new bi(this.firestore,null,n)}}function vee(e){e=Eg(e,Vo);const t=Eg(e.firestore,QA),n=s4(t),i=new w4(t);return g4(e._query),t4(n,e._query).then(r=>new _4(t,i,e,r))}(function(t,n=!0){(function(r){rl=r})(Ds),nr(new Ni("firestore",(i,{instanceIdentifier:r,options:s})=>{const o=i.getProvider("app").getImmediate(),a=new QA(new xB(i.getProvider("auth-internal")),new MB(i.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Ve(Se.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pu(u.options.projectId,c)}(o,r),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),si(W0,"4.7.5",t),si(W0,"4.7.5","esm2017")})();function VS(e){const t=C4(e),n=new ArrayBuffer(t.length),i=new DataView(n);for(let r=0;r<n.byteLength;r++)i.setUint8(r,t.charCodeAt(r));return n}const S4="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function C4(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,i=0;for(let r=0;r<e.length;r++)n<<=6,n|=S4.indexOf(e[r]),i+=6,i===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=i=0);return i===12?(n>>=4,t+=String.fromCharCode(n)):i===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const T4=-1,I4=-2,k4=-3,E4=-4,A4=-5,P4=-6;function x4(e,t){return R4(JSON.parse(e),t)}function R4(e,t){if(typeof e=="number")return r(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,i=Array(n.length);function r(s,o=!1){if(s===T4)return;if(s===k4)return NaN;if(s===E4)return 1/0;if(s===A4)return-1/0;if(s===P4)return-0;if(o)throw new Error("Invalid input");if(s in i)return i[s];const a=n[s];if(!a||typeof a!="object")i[s]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],u=t==null?void 0:t[l];if(u)return i[s]=u(r(a[1]));switch(l){case"Date":i[s]=new Date(a[1]);break;case"Set":const c=new Set;i[s]=c;for(let m=1;m<a.length;m+=1)c.add(r(a[m]));break;case"Map":const d=new Map;i[s]=d;for(let m=1;m<a.length;m+=2)d.set(r(a[m]),r(a[m+1]));break;case"RegExp":i[s]=new RegExp(a[1],a[2]);break;case"Object":i[s]=Object(a[1]);break;case"BigInt":i[s]=BigInt(a[1]);break;case"null":const f=Object.create(null);i[s]=f;for(let m=1;m<a.length;m+=2)f[a[m]]=r(a[m+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const m=globalThis[l],g=a[1],y=VS(g),p=new m(y);i[s]=p;break}case"ArrayBuffer":{const m=a[1],g=VS(m);i[s]=g;break}default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);i[s]=l;for(let u=0;u<a.length;u+=1){const c=a[u];c!==I4&&(l[u]=r(c))}}else{const l={};i[s]=l;for(const u in a){const c=a[u];l[u]=r(c)}}return i[s]}return r(0)}const V4=new Set(["title","titleTemplate","script","style","noscript"]),Ad=new Set(["base","meta","link","style","script","noscript"]),D4=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),M4=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),rP=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),O4=typeof window<"u";function _f(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Pg(e){if(e._h)return e._h;if(e._d)return _f(e._d);let t=`${e.tag}:${e.textContent||e.innerHTML||""}:`;for(const n in e.props)t+=`${n}:${String(e.props[n])},`;return _f(t)}function N4(e,t){return e instanceof Promise?e.then(t):t(e)}function xg(e,t,n,i){const r=i||oP(typeof t=="object"&&typeof t!="function"&&!(t instanceof Promise)?{...t}:{[e==="script"||e==="noscript"||e==="style"?"innerHTML":"textContent"]:t},e==="templateParams"||e==="titleTemplate");if(r instanceof Promise)return r.then(o=>xg(e,t,n,o));const s={tag:e,props:r};for(const o of rP){const a=s.props[o]!==void 0?s.props[o]:n[o];a!==void 0&&((!(o==="innerHTML"||o==="textContent"||o==="children")||V4.has(s.tag))&&(s[o==="children"?"innerHTML":o]=a),delete s.props[o])}return s.props.body&&(s.tagPosition="bodyClose",delete s.props.body),s.tag==="script"&&typeof s.innerHTML=="object"&&(s.innerHTML=JSON.stringify(s.innerHTML),s.props.type=s.props.type||"application/json"),Array.isArray(s.props.content)?s.props.content.map(o=>({...s,props:{...s.props,content:o}})):s}function L4(e,t){var i;const n=e==="class"?" ":";";return t&&typeof t=="object"&&!Array.isArray(t)&&(t=Object.entries(t).filter(([,r])=>r).map(([r,s])=>e==="style"?`${r}:${s}`:r)),(i=String(Array.isArray(t)?t.join(n):t))==null?void 0:i.split(n).filter(r=>!!r.trim()).join(n)}function sP(e,t,n,i){for(let r=i;r<n.length;r+=1){const s=n[r];if(s==="class"||s==="style"){e[s]=L4(s,e[s]);continue}if(e[s]instanceof Promise)return e[s].then(o=>(e[s]=o,sP(e,t,n,r)));if(!t&&!rP.has(s)){const o=String(e[s]),a=s.startsWith("data-");o==="true"||o===""?e[s]=a?"true":!0:e[s]||(a&&o==="false"?e[s]="false":delete e[s])}}}function oP(e,t=!1){const n=sP(e,t,Object.keys(e),0);return n instanceof Promise?n.then(()=>e):e}const F4=10;function aP(e,t,n){for(let i=n;i<t.length;i+=1){const r=t[i];if(r instanceof Promise)return r.then(s=>(t[i]=s,aP(e,t,i)));Array.isArray(r)?e.push(...r):e.push(r)}}function B4(e){const t=[],n=e.resolvedInput;for(const r in n){if(!Object.prototype.hasOwnProperty.call(n,r))continue;const s=n[r];if(!(s===void 0||!D4.has(r))){if(Array.isArray(s)){for(const o of s)t.push(xg(r,o,e));continue}t.push(xg(r,s,e))}}if(t.length===0)return[];const i=[];return N4(aP(i,t,0),()=>i.map((r,s)=>(r._e=e._i,e.mode&&(r._m=e.mode),r._p=(e._i<<F4)+s,r)))}const DS=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),MS={base:-10,title:10},OS={critical:-80,high:-10,low:20};function bf(e){const t=e.tagPriority;if(typeof t=="number")return t;let n=100;return e.tag==="meta"?e.props["http-equiv"]==="content-security-policy"?n=-30:e.props.charset?n=-20:e.props.name==="viewport"&&(n=-15):e.tag==="link"&&e.props.rel==="preconnect"?n=20:e.tag in MS&&(n=MS[e.tag]),t&&t in OS?n+OS[t]:n}const $4=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],U4=["name","property","http-equiv"];function lP(e){const{props:t,tag:n}=e;if(M4.has(n))return n;if(n==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";if(t.id)return`${n}:id:${t.id}`;for(const i of U4)if(t[i]!==void 0)return`${n}:${i}:${t[i]}`;return!1}const es="%separator";function H4(e,t,n=!1){var r;let i;if(t==="s"||t==="pageTitle")i=e.pageTitle;else if(t.includes(".")){const s=t.indexOf(".");i=(r=e[t.substring(0,s)])==null?void 0:r[t.substring(s+1)]}else i=e[t];if(i!==void 0)return n?(i||"").replace(/"/g,'\\"'):i||""}const j4=new RegExp(`${es}(?:\\s*${es})*`,"g");function rd(e,t,n,i=!1){if(typeof e!="string"||!e.includes("%"))return e;let r=e;try{r=decodeURI(e)}catch{}const s=r.match(/%\w+(?:\.\w+)?/g);if(!s)return e;const o=e.includes(es);return e=e.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===es||!s.includes(a))return a;const l=H4(t,a.slice(1),i);return l!==void 0?l:a}).trim(),o&&(e.endsWith(es)&&(e=e.slice(0,-es.length)),e.startsWith(es)&&(e=e.slice(es.length)),e=e.replace(j4,n).trim()),e}function NS(e,t){return e==null?t||null:typeof e=="function"?e(t):e}async function uP(e,t={}){const n=t.document||e.resolvedOptions.document;if(!n||!e.dirty)return;const i={shouldRender:!0,tags:[]};if(await e.hooks.callHook("dom:beforeRender",i),!!i.shouldRender)return e._domUpdatePromise||(e._domUpdatePromise=new Promise(async r=>{var d;const s=(await e.resolveTags()).map(f=>({tag:f,id:Ad.has(f.tag)?Pg(f):f.tag,shouldRender:!0}));let o=e._dom;if(!o){o={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};const f=new Set;for(const m of["body","head"]){const g=(d=n[m])==null?void 0:d.children;for(const y of g){const p=y.tagName.toLowerCase();if(!Ad.has(p))continue;const S={tag:p,props:await oP(y.getAttributeNames().reduce((V,D)=>({...V,[D]:y.getAttribute(D)}),{})),innerHTML:y.innerHTML},w=lP(S);let T=w,x=1;for(;T&&f.has(T);)T=`${w}:${x++}`;T&&(S._d=T,f.add(T)),o.elMap[y.getAttribute("data-hid")||Pg(S)]=y}}}o.pendingSideEffects={...o.sideEffects},o.sideEffects={};function a(f,m,g){const y=`${f}:${m}`;o.sideEffects[y]=g,delete o.pendingSideEffects[y]}function l({id:f,$el:m,tag:g}){const y=g.tag.endsWith("Attrs");if(o.elMap[f]=m,y||(g.textContent&&g.textContent!==m.textContent&&(m.textContent=g.textContent),g.innerHTML&&g.innerHTML!==m.innerHTML&&(m.innerHTML=g.innerHTML),a(f,"el",()=>{var p;(p=o.elMap[f])==null||p.remove(),delete o.elMap[f]})),g._eventHandlers)for(const p in g._eventHandlers)Object.prototype.hasOwnProperty.call(g._eventHandlers,p)&&m.getAttribute(`data-${p}`)!==""&&((g.tag==="bodyAttrs"?n.defaultView:m).addEventListener(p.substring(2),g._eventHandlers[p].bind(m)),m.setAttribute(`data-${p}`,""));for(const p in g.props){if(!Object.prototype.hasOwnProperty.call(g.props,p))continue;const S=g.props[p],w=`attr:${p}`;if(p==="class"){if(!S)continue;for(const T of S.split(" "))y&&a(f,`${w}:${T}`,()=>m.classList.remove(T)),!m.classList.contains(T)&&m.classList.add(T)}else if(p==="style"){if(!S)continue;for(const T of S.split(";")){const x=T.indexOf(":"),V=T.substring(0,x).trim(),D=T.substring(x+1).trim();a(f,`${w}:${V}`,()=>{m.style.removeProperty(V)}),m.style.setProperty(V,D)}}else m.getAttribute(p)!==S&&m.setAttribute(p,S===!0?"":String(S)),y&&a(f,w,()=>m.removeAttribute(p))}}const u=[],c={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const f of s){const{tag:m,shouldRender:g,id:y}=f;if(g){if(m.tag==="title"){n.title=m.textContent;continue}f.$el=f.$el||o.elMap[y],f.$el?l(f):Ad.has(m.tag)&&u.push(f)}}for(const f of u){const m=f.tag.tagPosition||"head";f.$el=n.createElement(f.tag.tag),l(f),c[m]=c[m]||n.createDocumentFragment(),c[m].appendChild(f.$el)}for(const f of s)await e.hooks.callHook("dom:renderTag",f,n,a);c.head&&n.head.appendChild(c.head),c.bodyOpen&&n.body.insertBefore(c.bodyOpen,n.body.firstChild),c.bodyClose&&n.body.appendChild(c.bodyClose);for(const f in o.pendingSideEffects)o.pendingSideEffects[f]();e._dom=o,await e.hooks.callHook("dom:rendered",{renders:s}),r()}).finally(()=>{e._domUpdatePromise=void 0,e.dirty=!1})),e._domUpdatePromise}function W4(e,t={}){const n=t.delayFn||(i=>setTimeout(i,10));return e._domDebouncedUpdatePromise=e._domDebouncedUpdatePromise||new Promise(i=>n(()=>uP(e,t).then(()=>{delete e._domDebouncedUpdatePromise,i()})))}function z4(e){return t=>{var i,r;const n=((r=(i=t.resolvedOptions.document)==null?void 0:i.head.querySelector('script[id="unhead:payload"]'))==null?void 0:r.innerHTML)||!1;return n&&t.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":s=>{W4(s,e)}}}}}const q4=new Set(["templateParams","htmlAttrs","bodyAttrs"]),G4={hooks:{"tag:normalise":({tag:e})=>{e.props.hid&&(e.key=e.props.hid,delete e.props.hid),e.props.vmid&&(e.key=e.props.vmid,delete e.props.vmid),e.props.key&&(e.key=e.props.key,delete e.props.key);const t=lP(e);t&&!t.startsWith("meta:og:")&&!t.startsWith("meta:twitter:")&&delete e.key;const n=t||(e.key?`${e.tag}:${e.key}`:!1);n&&(e._d=n)},"tags:resolve":e=>{const t=Object.create(null);for(const i of e.tags){const r=(i.key?`${i.tag}:${i.key}`:i._d)||Pg(i),s=t[r];if(s){let a=i==null?void 0:i.tagDuplicateStrategy;if(!a&&q4.has(i.tag)&&(a="merge"),a==="merge"){const l=s.props;l.style&&i.props.style&&(l.style[l.style.length-1]!==";"&&(l.style+=";"),i.props.style=`${l.style} ${i.props.style}`),l.class&&i.props.class?i.props.class=`${l.class} ${i.props.class}`:l.class&&(i.props.class=l.class),t[r].props={...l,...i.props};continue}else if(i._e===s._e){s._duped=s._duped||[],i._d=`${s._d}:${s._duped.length+1}`,s._duped.push(i);continue}else if(bf(i)>bf(s))continue}if(!(i.innerHTML||i.textContent||Object.keys(i.props).length!==0)&&Ad.has(i.tag)){delete t[r];continue}t[r]=i}const n=[];for(const i in t){const r=t[i],s=r._duped;n.push(r),s&&(delete r._duped,n.push(...s))}e.tags=n,e.tags=e.tags.filter(i=>!(i.tag==="meta"&&(i.props.name||i.props.property)&&!i.props.content))}}},K4=new Set(["script","link","bodyAttrs"]),Y4=e=>({hooks:{"tags:resolve":t=>{for(const n of t.tags){if(!K4.has(n.tag))continue;const i=n.props;for(const r in i){if(r[0]!=="o"||r[1]!=="n"||!Object.prototype.hasOwnProperty.call(i,r))continue;const s=i[r];typeof s=="function"&&(e.ssr&&DS.has(r)?i[r]=`this.dataset.${r}fired = true`:delete i[r],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[r]=s)}e.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||_f(n.props.src||n.props.href))}},"dom:renderTag":({$el:t,tag:n})=>{var r,s;const i=t==null?void 0:t.dataset;if(i)for(const o in i){if(!o.endsWith("fired"))continue;const a=o.slice(0,-5);DS.has(a)&&((s=(r=n._eventHandlers)==null?void 0:r[a])==null||s.call(t,new Event(a.substring(2))))}}}}),Q4=new Set(["link","style","script","noscript"]),X4={hooks:{"tag:normalise":({tag:e})=>{e.key&&Q4.has(e.tag)&&(e.props["data-hid"]=e._h=_f(e.key))}}},J4={mode:"server",hooks:{"tags:beforeResolve":e=>{const t={};let n=!1;for(const i of e.tags)i._m!=="server"||i.tag!=="titleTemplate"&&i.tag!=="templateParams"&&i.tag!=="title"||(t[i.tag]=i.tag==="title"||i.tag==="titleTemplate"?i.textContent:i.props,n=!0);n&&e.tags.push({tag:"script",innerHTML:JSON.stringify(t),props:{id:"unhead:payload",type:"application/json"}})}}},Z4={hooks:{"tags:resolve":e=>{var t;for(const n of e.tags)if(typeof n.tagPriority=="string")for(const{prefix:i,offset:r}of $4){if(!n.tagPriority.startsWith(i))continue;const s=n.tagPriority.substring(i.length),o=(t=e.tags.find(a=>a._d===s))==null?void 0:t._p;if(o!==void 0){n._p=o+r;break}}e.tags.sort((n,i)=>{const r=bf(n),s=bf(i);return r<s?-1:r>s?1:n._p-i._p})}}},eH={meta:"content",link:"href",htmlAttrs:"lang"},tH=["innerHTML","textContent"],nH=e=>({hooks:{"tags:resolve":t=>{var o;const{tags:n}=t;let i;for(let a=0;a<n.length;a+=1)n[a].tag==="templateParams"&&(i=t.tags.splice(a,1)[0].props,a-=1);const r=i||{},s=r.separator||"|";delete r.separator,r.pageTitle=rd(r.pageTitle||((o=n.find(a=>a.tag==="title"))==null?void 0:o.textContent)||"",r,s);for(const a of n){if(a.processTemplateParams===!1)continue;const l=eH[a.tag];if(l&&typeof a.props[l]=="string")a.props[l]=rd(a.props[l],r,s);else if(a.processTemplateParams||a.tag==="titleTemplate"||a.tag==="title")for(const u of tH)typeof a[u]=="string"&&(a[u]=rd(a[u],r,s,a.tag==="script"&&a.props.type.endsWith("json")))}e._templateParams=r,e._separator=s},"tags:afterResolve":({tags:t})=>{let n;for(let i=0;i<t.length;i+=1){const r=t[i];r.tag==="title"&&r.processTemplateParams!==!1&&(n=r)}n!=null&&n.textContent&&(n.textContent=rd(n.textContent,e._templateParams,e._separator))}}}),iH={hooks:{"tags:resolve":e=>{const{tags:t}=e;let n,i;for(let r=0;r<t.length;r+=1){const s=t[r];s.tag==="title"?n=s:s.tag==="titleTemplate"&&(i=s)}if(i&&n){const r=NS(i.textContent,n.textContent);r!==null?n.textContent=r||n.textContent:e.tags.splice(e.tags.indexOf(n),1)}else if(i){const r=NS(i.textContent);r!==null&&(i.textContent=r,i.tag="title",i=void 0)}i&&e.tags.splice(e.tags.indexOf(i),1)}}},rH={hooks:{"tags:afterResolve":e=>{for(const t of e.tags)typeof t.innerHTML=="string"&&(t.innerHTML&&(t.props.type==="application/ld+json"||t.props.type==="application/json")?t.innerHTML=t.innerHTML.replace(/</g,"\\u003C"):t.innerHTML=t.innerHTML.replace(new RegExp(`</${t.tag}`,"g"),`<\\/${t.tag}`))}}};let cP;function sH(e={}){const t=oH(e);return t.use(z4()),cP=t}function LS(e,t){return!e||e==="server"&&t||e==="client"&&!t}function oH(e={}){const t=CE();t.addHooks(e.hooks||{}),e.document=e.document||(O4?document:void 0);const n=!e.document,i=()=>{a.dirty=!0,t.callHook("entries:updated",a)};let r=0,s=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:e,hooks:t,headEntries(){return s},use(l){const u=typeof l=="function"?l(a):l;(!u.key||!o.some(c=>c.key===u.key))&&(o.push(u),LS(u.mode,n)&&t.addHooks(u.hooks||{}))},push(l,u){u==null||delete u.head;const c={_i:r++,input:l,...u};return LS(c.mode,n)&&(s.push(c),i()),{dispose(){s=s.filter(d=>d._i!==c._i),i()},patch(d){for(const f of s)f._i===c._i&&(f.input=c.input=d);i()}}},async resolveTags(){const l={tags:[],entries:[...s]};await t.callHook("entries:resolve",l);for(const u of l.entries){const c=u.resolvedInput||u.input;if(u.resolvedInput=await(u.transform?u.transform(c):c),u.resolvedInput)for(const d of await B4(u)){const f={tag:d,entry:u,resolvedOptions:a.resolvedOptions};await t.callHook("tag:normalise",f),l.tags.push(f.tag)}}return await t.callHook("tags:beforeResolve",l),await t.callHook("tags:resolve",l),await t.callHook("tags:afterResolve",l),l.tags},ssr:n};return[G4,J4,Y4,X4,Z4,nH,iH,rH,...(e==null?void 0:e.plugins)||[]].forEach(l=>a.use(l)),a.hooks.callHook("init",a),a}function aH(){return cP}const lH=nE[0]==="3";function uH(e){return typeof e=="function"?e():Ye(e)}function Rg(e){if(e instanceof Promise||e instanceof Date||e instanceof RegExp)return e;const t=uH(e);if(!e||!t)return t;if(Array.isArray(t))return t.map(n=>Rg(n));if(typeof t=="object"){const n={};for(const i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(i==="titleTemplate"||i[0]==="o"&&i[1]==="n"){n[i]=Ye(t[i]);continue}n[i]=Rg(t[i])}return n}return t}const cH={hooks:{"entries:resolve":e=>{for(const t of e.entries)t.resolvedInput=Rg(t.input)}}},dP="usehead";function dH(e){return{install(n){lH&&(n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(dP,e))}}.install}function fH(e={}){e.domDelayFn=e.domDelayFn||(n=>Ke(()=>setTimeout(()=>n(),0)));const t=sH(e);return t.use(cH),t.install=dH(t),t}const Vg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Dg="__unhead_injection_handler__";function hH(e){Vg[Dg]=e}function gee(){if(Dg in Vg)return Vg[Dg]();const e=Le(dP);return e||aH()}let Pd,xd;function mH(){return Pd=$fetch(Ay(`builds/meta/${ac().app.buildId}.json`),{responseType:"json"}),Pd.then(e=>{xd=MF(e.matcher)}).catch(e=>{console.error("[nuxt] Error fetching app manifest.",e)}),Pd}function kh(){return Pd||mH()}async function r_(e){if(await kh(),!xd)return console.error("[nuxt] Error creating app manifest matcher.",xd),{};try{return AE({},...xd.matchAll(e).reverse())}catch(t){return console.error("[nuxt] Error matching route rules.",t),{}}}async function FS(e,t={}){const n=await gH(e,t),i=Jt(),r=i._payloadCache=i._payloadCache||{};return n in r?r[n]||null:(r[n]=hP(e).then(s=>s?fP(n).then(o=>o||(delete r[n],null)):(r[n]=null,null)),r[n])}const vH="_payload.json";async function gH(e,t={}){const n=new URL(e,"http://localhost");if(n.host!=="localhost"||xo(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+e);const i=ac(),r=t.hash||(t.fresh?Date.now():i.app.buildId),s=i.app.cdnURL,o=s&&await hP(e)?s:i.app.baseURL;return Ey(o,n.pathname,vH+(r?`?${r}`:""))}async function fP(e){const t=fetch(e).then(n=>n.text().then(mP));try{return await t}catch(n){console.warn("[nuxt] Cannot load payload ",e,n)}return null}async function hP(e=xE().path){if(e=ky(e),(await kh()).prerendered.includes(e))return!0;const n=await r_(e);return!!n.prerender&&!n.redirect}let js=null;async function pH(){var i;if(js)return js;const e=document.getElementById("__NUXT_DATA__");if(!e)return{};const t=await mP(e.textContent||""),n=e.dataset.src?await fP(e.dataset.src):void 0;return js={...t,...n,...window.__NUXT__},(i=js.config)!=null&&i.public&&(js.config.public=Lt(js.config.public)),js}async function mP(e){return await x4(e,Jt()._payloadRevivers)}function Rd(e,t){Jt()._payloadRevivers[e]=t}const yH=RF(()=>{Rd("FirebaseTimestamp",e=>Wd(new on(e.seconds,e.nanoseconds))),Rd("FirebaseGeoPoint",e=>Wd(new Ih(e.latitude,e.longitude))),Rd("DocumentData",e=>{const t=typeof e=="string"?JSON.parse(e):e,n=t.id;return delete t.id,Object.defineProperty(t,"id",{value:n})})}),_H=[["NuxtError",e=>lh(e)],["EmptyShallowRef",e=>ve(e==="_"?void 0:e==="0n"?BigInt(0):nf(e))],["EmptyRef",e=>re(e==="_"?void 0:e==="0n"?BigInt(0):nf(e))],["ShallowRef",e=>ve(e)],["ShallowReactive",e=>Tr(e)],["Ref",e=>re(e)],["Reactive",e=>Lt(e)]],bH=Zn({name:"nuxt:revive-payload:client",order:-30,async setup(e){let t,n;for(const[i,r]of _H)Rd(i,r);Object.assign(e.payload,([t,n]=Ia(()=>e.runWithContext(pH)),t=await t,n(),t)),window.__NUXT__=e.payload}}),wH=[],SH=Zn({name:"nuxt:head",enforce:"pre",setup(e){const t=fH({plugins:wH});hH(()=>Jt().vueApp._context.provides.usehead),e.vueApp.use(t);{let n=!0;const i=async()=>{n=!1,await uP(t)};t.hooks.hook("dom:beforeRender",r=>{r.shouldRender=!n}),e.hooks.hook("page:start",()=>{n=!0}),e.hooks.hook("page:finish",()=>{e.isHydrating||i()}),e.hooks.hook("app:error",i),e.hooks.hook("app:suspense:resolve",i)}}});/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const da=typeof document<"u";function vP(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function CH(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&vP(e.default)}const mt=Object.assign;function rv(e,t){const n={};for(const i in t){const r=t[i];n[i]=Fi(r)?r.map(e):e(r)}return n}const uu=()=>{},Fi=Array.isArray,gP=/#/g,TH=/&/g,IH=/\//g,kH=/=/g,EH=/\?/g,pP=/\+/g,AH=/%5B/g,PH=/%5D/g,yP=/%5E/g,xH=/%60/g,_P=/%7B/g,RH=/%7C/g,bP=/%7D/g,VH=/%20/g;function s_(e){return encodeURI(""+e).replace(RH,"|").replace(AH,"[").replace(PH,"]")}function DH(e){return s_(e).replace(_P,"{").replace(bP,"}").replace(yP,"^")}function Mg(e){return s_(e).replace(pP,"%2B").replace(VH,"+").replace(gP,"%23").replace(TH,"%26").replace(xH,"`").replace(_P,"{").replace(bP,"}").replace(yP,"^")}function MH(e){return Mg(e).replace(kH,"%3D")}function OH(e){return s_(e).replace(gP,"%23").replace(EH,"%3F")}function NH(e){return e==null?"":OH(e).replace(IH,"%2F")}function Vu(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const LH=/\/$/,FH=e=>e.replace(LH,"");function sv(e,t,n="/"){let i,r={},s="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),r=e(s)),a>-1&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=HH(i??t,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:Vu(o)}}function BH(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function BS(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function $H(e,t,n){const i=t.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Wa(t.matched[i],n.matched[r])&&wP(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Wa(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function wP(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!UH(e[n],t[n]))return!1;return!0}function UH(e,t){return Fi(e)?$S(e,t):Fi(t)?$S(t,e):e===t}function $S(e,t){return Fi(t)?e.length===t.length&&e.every((n,i)=>n===t[i]):e.length===1&&e[0]===t}function HH(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const ki={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Du;(function(e){e.pop="pop",e.push="push"})(Du||(Du={}));var cu;(function(e){e.back="back",e.forward="forward",e.unknown=""})(cu||(cu={}));function jH(e){if(!e)if(da){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),FH(e)}const WH=/^[^#]+#/;function zH(e,t){return e.replace(WH,"#")+t}function qH(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const Eh=()=>({left:window.scrollX,top:window.scrollY});function GH(e){let t;if("el"in e){const n=e.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=qH(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function US(e,t){return(history.state?history.state.position-t:-1)+e}const Og=new Map;function KH(e,t){Og.set(e,t)}function YH(e){const t=Og.get(e);return Og.delete(e),t}let QH=()=>location.protocol+"//"+location.host;function SP(e,t){const{pathname:n,search:i,hash:r}=t,s=e.indexOf("#");if(s>-1){let a=r.includes(e.slice(s))?e.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),BS(l,"")}return BS(n,e)+i+r}function XH(e,t,n,i){let r=[],s=[],o=null;const a=({state:f})=>{const m=SP(e,location),g=n.value,y=t.value;let p=0;if(f){if(n.value=m,t.value=f,o&&o===g){o=null;return}p=y?f.position-y.position:0}else i(m);r.forEach(S=>{S(n.value,g,{delta:p,type:Du.pop,direction:p?p>0?cu.forward:cu.back:cu.unknown})})};function l(){o=n.value}function u(f){r.push(f);const m=()=>{const g=r.indexOf(f);g>-1&&r.splice(g,1)};return s.push(m),m}function c(){const{history:f}=window;f.state&&f.replaceState(mt({},f.state,{scroll:Eh()}),"")}function d(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function HS(e,t,n,i=!1,r=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:r?Eh():null}}function JH(e){const{history:t,location:n}=window,i={value:SP(e,n)},r={value:t.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,u,c){const d=e.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:QH()+e+l;try{t[c?"replaceState":"pushState"](u,"",f),r.value=u}catch(m){console.error(m),n[c?"replace":"assign"](f)}}function o(l,u){const c=mt({},t.state,HS(r.value.back,l,r.value.forward,!0),u,{position:r.value.position});s(l,c,!0),i.value=l}function a(l,u){const c=mt({},r.value,t.state,{forward:l,scroll:Eh()});s(c.current,c,!0);const d=mt({},HS(i.value,l,null),{position:c.position+1},u);s(l,d,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function CP(e){e=jH(e);const t=JH(e),n=XH(e,t.state,t.location,t.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=mt({location:"",base:e,go:i,createHref:zH.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function ZH(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),CP(e)}function ej(e){return typeof e=="string"||e&&typeof e=="object"}function TP(e){return typeof e=="string"||typeof e=="symbol"}const IP=Symbol("");var jS;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(jS||(jS={}));function za(e,t){return mt(new Error,{type:e,[IP]:!0},t)}function _r(e,t){return e instanceof Error&&IP in e&&(t==null||!!(e.type&t))}const WS="[^/]+?",tj={sensitive:!1,strict:!1,start:!0,end:!0},nj=/[.+*?^${}()[\]/\\]/g;function ij(e,t){const n=mt({},tj,t),i=[];let r=n.start?"^":"";const s=[];for(const u of e){const c=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const f=u[d];let m=40+(n.sensitive?.25:0);if(f.type===0)d||(r+="/"),r+=f.value.replace(nj,"\\$&"),m+=40;else if(f.type===1){const{value:g,repeatable:y,optional:p,regexp:S}=f;s.push({name:g,repeatable:y,optional:p});const w=S||WS;if(w!==WS){m+=10;try{new RegExp(`(${w})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${g}" (${w}): `+x.message)}}let T=y?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;d||(T=p&&u.length<2?`(?:/${T})`:"/"+T),p&&(T+="?"),r+=T,m+=20,p&&(m+=-8),y&&(m+=-20),w===".*"&&(m+=-50)}c.push(m)}i.push(c)}if(n.strict&&n.end){const u=i.length-1;i[u][i[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const c=u.match(o),d={};if(!c)return null;for(let f=1;f<c.length;f++){const m=c[f]||"",g=s[f-1];d[g.name]=m&&g.repeatable?m.split("/"):m}return d}function l(u){let c="",d=!1;for(const f of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const m of f)if(m.type===0)c+=m.value;else if(m.type===1){const{value:g,repeatable:y,optional:p}=m,S=g in u?u[g]:"";if(Fi(S)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const w=Fi(S)?S.join("/"):S;if(!w)if(p)f.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);c+=w}}return c||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function rj(e,t){let n=0;for(;n<e.length&&n<t.length;){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function kP(e,t){let n=0;const i=e.score,r=t.score;for(;n<i.length&&n<r.length;){const s=rj(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(zS(i))return 1;if(zS(r))return-1}return r.length-i.length}function zS(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const sj={type:0,value:""},oj=/[a-zA-Z0-9_]/;function aj(e){if(!e)return[[]];if(e==="/")return[[sj]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,u="",c="";function d(){u&&(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function f(){u+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(u&&d(),o()):l===":"?(d(),n=1):f();break;case 4:f(),n=i;break;case 1:l==="("?n=2:oj.test(l)?f():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),d(),o(),r}function lj(e,t,n){const i=ij(aj(e.path),n),r=mt(i,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function uj(e,t){const n=[],i=new Map;t=YS({strict:!1,end:!0,sensitive:!1},t);function r(d){return i.get(d)}function s(d,f,m){const g=!m,y=GS(d);y.aliasOf=m&&m.record;const p=YS(t,d),S=[y];if("alias"in d){const x=typeof d.alias=="string"?[d.alias]:d.alias;for(const V of x)S.push(GS(mt({},y,{components:m?m.record.components:y.components,path:V,aliasOf:m?m.record:y})))}let w,T;for(const x of S){const{path:V}=x;if(f&&V[0]!=="/"){const D=f.record.path,A=D[D.length-1]==="/"?"":"/";x.path=f.record.path+(V&&A+V)}if(w=lj(x,f,p),m?m.alias.push(w):(T=T||w,T!==w&&T.alias.push(w),g&&d.name&&!KS(w)&&o(d.name)),EP(w)&&l(w),y.children){const D=y.children;for(let A=0;A<D.length;A++)s(D[A],w,m&&m.children[A])}m=m||w}return T?()=>{o(T)}:uu}function o(d){if(TP(d)){const f=i.get(d);f&&(i.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const f=fj(d,n);n.splice(f,0,d),d.record.name&&!KS(d)&&i.set(d.record.name,d)}function u(d,f){let m,g={},y,p;if("name"in d&&d.name){if(m=i.get(d.name),!m)throw za(1,{location:d});p=m.record.name,g=mt(qS(f.params,m.keys.filter(T=>!T.optional).concat(m.parent?m.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),d.params&&qS(d.params,m.keys.map(T=>T.name))),y=m.stringify(g)}else if(d.path!=null)y=d.path,m=n.find(T=>T.re.test(y)),m&&(g=m.parse(y),p=m.record.name);else{if(m=f.name?i.get(f.name):n.find(T=>T.re.test(f.path)),!m)throw za(1,{location:d,currentLocation:f});p=m.record.name,g=mt({},f.params,d.params),y=m.stringify(g)}const S=[];let w=m;for(;w;)S.unshift(w.record),w=w.parent;return{name:p,path:y,params:g,matched:S,meta:dj(S)}}e.forEach(d=>s(d));function c(){n.length=0,i.clear()}return{addRoute:s,resolve:u,removeRoute:o,clearRoutes:c,getRoutes:a,getRecordMatcher:r}}function qS(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function GS(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:cj(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function cj(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]=typeof n=="object"?n[i]:n;return t}function KS(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function dj(e){return e.reduce((t,n)=>mt(t,n.meta),{})}function YS(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function fj(e,t){let n=0,i=t.length;for(;n!==i;){const s=n+i>>1;kP(e,t[s])<0?i=s:n=s+1}const r=hj(e);return r&&(i=t.lastIndexOf(r,i-1)),i}function hj(e){let t=e;for(;t=t.parent;)if(EP(t)&&kP(e,t)===0)return t}function EP({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function mj(e){const t={};if(e===""||e==="?")return t;const i=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(pP," "),o=s.indexOf("="),a=Vu(o<0?s:s.slice(0,o)),l=o<0?null:Vu(s.slice(o+1));if(a in t){let u=t[a];Fi(u)||(u=t[a]=[u]),u.push(l)}else t[a]=l}return t}function QS(e){let t="";for(let n in e){const i=e[n];if(n=MH(n),i==null){i!==void 0&&(t+=(t.length?"&":"")+n);continue}(Fi(i)?i.map(s=>s&&Mg(s)):[i&&Mg(i)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function vj(e){const t={};for(const n in e){const i=e[n];i!==void 0&&(t[n]=Fi(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return t}const gj=Symbol(""),XS=Symbol(""),o_=Symbol(""),a_=Symbol(""),Ng=Symbol("");function Fl(){let e=[];function t(i){return e.push(i),()=>{const r=e.indexOf(i);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function ts(e,t,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const u=f=>{f===!1?l(za(4,{from:n,to:t})):f instanceof Error?l(f):ej(f)?l(za(2,{from:t,to:f})):(o&&i.enterCallbacks[r]===o&&typeof f=="function"&&o.push(f),a())},c=s(()=>e.call(i&&i.instances[r],t,n,u));let d=Promise.resolve(c);e.length<3&&(d=d.then(u)),d.catch(f=>l(f))})}function ov(e,t,n,i,r=s=>s()){const s=[];for(const o of e)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(vP(l)){const c=(l.__vccOpts||l)[t];c&&s.push(ts(c,n,i,o,a,r))}else{let u=l();s.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=CH(c)?c.default:c;o.mods[a]=c,o.components[a]=d;const m=(d.__vccOpts||d)[t];return m&&ts(m,n,i,o,a,r)()}))}}return s}function JS(e){const t=Le(o_),n=Le(a_),i=P(()=>{const l=Ye(e.to);return t.resolve(l)}),r=P(()=>{const{matched:l}=i.value,{length:u}=l,c=l[u-1],d=n.matched;if(!c||!d.length)return-1;const f=d.findIndex(Wa.bind(null,c));if(f>-1)return f;const m=ZS(l[u-2]);return u>1&&ZS(c)===m&&d[d.length-1].path!==m?d.findIndex(Wa.bind(null,l[u-2])):f}),s=P(()=>r.value>-1&&wj(n.params,i.value.params)),o=P(()=>r.value>-1&&r.value===n.matched.length-1&&wP(n.params,i.value.params));function a(l={}){if(bj(l)){const u=t[Ye(e.replace)?"replace":"push"](Ye(e.to)).catch(uu);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:i,href:P(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function pj(e){return e.length===1?e[0]:e}const yj=Po({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:JS,setup(e,{slots:t}){const n=Lt(JS(e)),{options:i}=Le(o_),r=P(()=>({[eC(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[eC(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&pj(t.default(n));return e.custom?s:Wt("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),_j=yj;function bj(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function wj(e,t){for(const n in t){const i=t[n],r=e[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Fi(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function ZS(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const eC=(e,t,n)=>e??t??n,Sj=Po({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=Le(Ng),r=P(()=>e.route||i.value),s=Le(XS,0),o=P(()=>{let u=Ye(s);const{matched:c}=r.value;let d;for(;(d=c[u])&&!d.components;)u++;return u}),a=P(()=>r.value.matched[o.value]);lt(XS,P(()=>o.value+1)),lt(gj,a),lt(Ng,r);const l=re();return pe(()=>[l.value,a.value,e.name],([u,c,d],[f,m,g])=>{c&&(c.instances[d]=u,m&&m!==c&&u&&u===f&&(c.leaveGuards.size||(c.leaveGuards=m.leaveGuards),c.updateGuards.size||(c.updateGuards=m.updateGuards))),u&&c&&(!m||!Wa(c,m)||!f)&&(c.enterCallbacks[d]||[]).forEach(y=>y(u))},{flush:"post"}),()=>{const u=r.value,c=e.name,d=a.value,f=d&&d.components[c];if(!f)return tC(n.default,{Component:f,route:u});const m=d.props[c],g=m?m===!0?u.params:typeof m=="function"?m(u):m:null,p=Wt(f,mt({},g,t,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return tC(n.default,{Component:p,route:u})||p}}});function tC(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const AP=Sj;function Cj(e){const t=uj(e.routes,e),n=e.parseQuery||mj,i=e.stringifyQuery||QS,r=e.history,s=Fl(),o=Fl(),a=Fl(),l=ve(ki);let u=ki;da&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=rv.bind(null,K=>""+K),d=rv.bind(null,NH),f=rv.bind(null,Vu);function m(K,se){let de,le;return TP(K)?(de=t.getRecordMatcher(K),le=se):le=K,t.addRoute(le,de)}function g(K){const se=t.getRecordMatcher(K);se&&t.removeRoute(se)}function y(){return t.getRoutes().map(K=>K.record)}function p(K){return!!t.getRecordMatcher(K)}function S(K,se){if(se=mt({},se||l.value),typeof K=="string"){const N=sv(n,K,se.path),G=t.resolve({path:N.path},se),ee=r.createHref(N.fullPath);return mt(N,G,{params:f(G.params),hash:Vu(N.hash),redirectedFrom:void 0,href:ee})}let de;if(K.path!=null)de=mt({},K,{path:sv(n,K.path,se.path).path});else{const N=mt({},K.params);for(const G in N)N[G]==null&&delete N[G];de=mt({},K,{params:d(N)}),se.params=d(se.params)}const le=t.resolve(de,se),oe=K.hash||"";le.params=c(f(le.params));const we=BH(i,mt({},K,{hash:DH(oe),path:le.path})),O=r.createHref(we);return mt({fullPath:we,hash:oe,query:i===QS?vj(K.query):K.query||{}},le,{redirectedFrom:void 0,href:O})}function w(K){return typeof K=="string"?sv(n,K,l.value.path):mt({},K)}function T(K,se){if(u!==K)return za(8,{from:se,to:K})}function x(K){return A(K)}function V(K){return x(mt(w(K),{replace:!0}))}function D(K){const se=K.matched[K.matched.length-1];if(se&&se.redirect){const{redirect:de}=se;let le=typeof de=="function"?de(K):de;return typeof le=="string"&&(le=le.includes("?")||le.includes("#")?le=w(le):{path:le},le.params={}),mt({query:K.query,hash:K.hash,params:le.path!=null?{}:K.params},le)}}function A(K,se){const de=u=S(K),le=l.value,oe=K.state,we=K.force,O=K.replace===!0,N=D(de);if(N)return A(mt(w(N),{state:typeof N=="object"?mt({},oe,N.state):oe,force:we,replace:O}),se||de);const G=de;G.redirectedFrom=se;let ee;return!we&&$H(i,le,de)&&(ee=za(16,{to:G,from:le}),W(le,le,!0,!1)),(ee?Promise.resolve(ee):I(G,le)).catch(X=>_r(X)?_r(X,2)?X:j(X):F(X,G,le)).then(X=>{if(X){if(_r(X,2))return A(mt({replace:O},w(X.to),{state:typeof X.to=="object"?mt({},oe,X.to.state):oe,force:we}),se||G)}else X=k(G,le,!0,O,oe);return E(G,le,X),X})}function b(K,se){const de=T(K,se);return de?Promise.reject(de):Promise.resolve()}function _(K){const se=ge.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(K):K()}function I(K,se){let de;const[le,oe,we]=Tj(K,se);de=ov(le.reverse(),"beforeRouteLeave",K,se);for(const N of le)N.leaveGuards.forEach(G=>{de.push(ts(G,K,se))});const O=b.bind(null,K,se);return de.push(O),ie(de).then(()=>{de=[];for(const N of s.list())de.push(ts(N,K,se));return de.push(O),ie(de)}).then(()=>{de=ov(oe,"beforeRouteUpdate",K,se);for(const N of oe)N.updateGuards.forEach(G=>{de.push(ts(G,K,se))});return de.push(O),ie(de)}).then(()=>{de=[];for(const N of we)if(N.beforeEnter)if(Fi(N.beforeEnter))for(const G of N.beforeEnter)de.push(ts(G,K,se));else de.push(ts(N.beforeEnter,K,se));return de.push(O),ie(de)}).then(()=>(K.matched.forEach(N=>N.enterCallbacks={}),de=ov(we,"beforeRouteEnter",K,se,_),de.push(O),ie(de))).then(()=>{de=[];for(const N of o.list())de.push(ts(N,K,se));return de.push(O),ie(de)}).catch(N=>_r(N,8)?N:Promise.reject(N))}function E(K,se,de){a.list().forEach(le=>_(()=>le(K,se,de)))}function k(K,se,de,le,oe){const we=T(K,se);if(we)return we;const O=se===ki,N=da?history.state:{};de&&(le||O?r.replace(K.fullPath,mt({scroll:O&&N&&N.scroll},oe)):r.push(K.fullPath,oe)),l.value=K,W(K,se,de,O),j()}let R;function B(){R||(R=r.listen((K,se,de)=>{if(!Te.listening)return;const le=S(K),oe=D(le);if(oe){A(mt(oe,{replace:!0,force:!0}),le).catch(uu);return}u=le;const we=l.value;da&&KH(US(we.fullPath,de.delta),Eh()),I(le,we).catch(O=>_r(O,12)?O:_r(O,2)?(A(mt(w(O.to),{force:!0}),le).then(N=>{_r(N,20)&&!de.delta&&de.type===Du.pop&&r.go(-1,!1)}).catch(uu),Promise.reject()):(de.delta&&r.go(-de.delta,!1),F(O,le,we))).then(O=>{O=O||k(le,we,!1),O&&(de.delta&&!_r(O,8)?r.go(-de.delta,!1):de.type===Du.pop&&_r(O,20)&&r.go(-1,!1)),E(le,we,O)}).catch(uu)}))}let $=Fl(),U=Fl(),q;function F(K,se,de){j(K);const le=U.list();return le.length?le.forEach(oe=>oe(K,se,de)):console.error(K),Promise.reject(K)}function H(){return q&&l.value!==ki?Promise.resolve():new Promise((K,se)=>{$.add([K,se])})}function j(K){return q||(q=!K,B(),$.list().forEach(([se,de])=>K?de(K):se()),$.reset()),K}function W(K,se,de,le){const{scrollBehavior:oe}=e;if(!da||!oe)return Promise.resolve();const we=!de&&YH(US(K.fullPath,0))||(le||!de)&&history.state&&history.state.scroll||null;return Ke().then(()=>oe(K,se,we)).then(O=>O&&GH(O)).catch(O=>F(O,K,se))}const Y=K=>r.go(K);let ce;const ge=new Set,Te={currentRoute:l,listening:!0,addRoute:m,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:p,getRoutes:y,resolve:S,options:e,push:x,replace:V,go:Y,back:()=>Y(-1),forward:()=>Y(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:U.add,isReady:H,install(K){const se=this;K.component("RouterLink",_j),K.component("RouterView",AP),K.config.globalProperties.$router=se,Object.defineProperty(K.config.globalProperties,"$route",{enumerable:!0,get:()=>Ye(l)}),da&&!ce&&l.value===ki&&(ce=!0,x(r.location).catch(oe=>{}));const de={};for(const oe in ki)Object.defineProperty(de,oe,{get:()=>l.value[oe],enumerable:!0});K.provide(o_,se),K.provide(a_,Tr(de)),K.provide(Ng,l);const le=K.unmount;ge.add(K),K.unmount=function(){ge.delete(K),ge.size<1&&(u=ki,R&&R(),R=null,l.value=ki,ce=!1,q=!1),le()}}};function ie(K){return K.reduce((se,de)=>se.then(()=>_(de)),Promise.resolve())}return Te}function Tj(e,t){const n=[],i=[],r=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const a=t.matched[o];a&&(e.matched.find(u=>Wa(u,a))?i.push(a):n.push(a));const l=e.matched[o];l&&(t.matched.find(u=>Wa(u,l))||r.push(l))}return[n,i,r]}function pee(e){return Le(a_)}const Ij=/(:\w+)\([^)]+\)/g,kj=/(:\w+)[?+*]/g,Ej=/:\w+/g,Aj=(e,t)=>t.path.replace(Ij,"$1").replace(kj,"$1").replace(Ej,n=>{var i;return((i=e.params[n.slice(1)])==null?void 0:i.toString())||""}),Lg=(e,t)=>{const n=e.route.matched.find(r=>{var s;return((s=r.components)==null?void 0:s.default)===e.Component.type}),i=t??(n==null?void 0:n.meta.key)??(n&&Aj(e.route,n));return typeof i=="function"?i(e.route):i},Pj=(e,t)=>({default:()=>e?Wt(HO,e===!0?{}:e,t):t});function l_(e){return Array.isArray(e)?e:[e]}const xj="modulepreload",Rj=function(e,t){return new URL(e,t).href},nC={},ao=function(t,n,i){let r=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(n.map(u=>{if(u=Rj(u,i),u in nC)return;nC[u]=!0;const c=u.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(!!i)for(let g=o.length-1;g>=0;g--){const y=o[g];if(y.href===u&&(!c||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const m=document.createElement("link");if(m.rel=c?"stylesheet":xj,c||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),c)return new Promise((g,y)=>{m.addEventListener("load",g),m.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})},av=[{name:"admin",path:"/admin",component:()=>ao(()=>import("./C0ZnLqaV.js"),__vite__mapDeps([0,1]),import.meta.url)},{name:"admin-shop_product",path:"/admin/shop_product",component:()=>ao(()=>import("./CahqTvgE.js"),__vite__mapDeps([2,1]),import.meta.url)},{name:"index",path:"/",component:()=>ao(()=>import("./DHwZOQgq.js"),__vite__mapDeps([3,4,5]),import.meta.url)}],Vj=(e,t,n)=>(t=t===!0?{}:t,{default:()=>{var i;return t?Wt(e,t,n):(i=n.default)==null?void 0:i.call(n)}}),Dj=/(:\w+)\([^)]+\)/g,Mj=/(:\w+)[?+*]/g,Oj=/:\w+/g;function iC(e){const t=(e==null?void 0:e.meta.key)??e.path.replace(Dj,"$1").replace(Mj,"$1").replace(Oj,n=>{var i;return((i=e.params[n.slice(1)])==null?void 0:i.toString())||""});return typeof t=="function"?t(e):t}function Nj(e,t){return e===t||t===ki?!1:iC(e)!==iC(t)?!0:!e.matched.every((i,r)=>{var s,o;return i.components&&i.components.default===((o=(s=t.matched[r])==null?void 0:s.components)==null?void 0:o.default)})}const Lj={scrollBehavior(e,t,n){var u;const i=Jt(),r=((u=Mi().options)==null?void 0:u.scrollBehaviorType)??"auto";let s=n||void 0;const o=typeof e.meta.scrollToTop=="function"?e.meta.scrollToTop(e,t):e.meta.scrollToTop;if(!s&&t&&e&&o!==!1&&Nj(e,t)&&(s={left:0,top:0}),e.path===t.path)return t.hash&&!e.hash?{left:0,top:0}:e.hash?{el:e.hash,top:rC(e.hash),behavior:r}:!1;const a=c=>!!(c.meta.pageTransition??Zv),l=a(t)&&a(e)?"page:transition:finish":"page:finish";return new Promise(c=>{i.hooks.hookOnce(l,async()=>{await new Promise(d=>setTimeout(d,0)),e.hash&&(s={el:e.hash,top:rC(e.hash),behavior:r}),c(s)})})}};function rC(e){try{const t=document.querySelector(e);if(t)return(Number.parseFloat(getComputedStyle(t).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}const Fj={hashMode:!1,scrollBehaviorType:"auto"},vi={...Fj,...Lj},Bj=async e=>{var l;let t,n;if(!((l=e.meta)!=null&&l.validate))return;const i=Jt(),r=Mi(),s=([t,n]=Ia(()=>Promise.resolve(e.meta.validate(e))),t=await t,n(),t);if(s===!0)return;const o=lh({statusCode:s&&s.statusCode||404,statusMessage:s&&s.statusMessage||`Page Not Found: ${e.fullPath}`,data:{path:e.fullPath}}),a=r.beforeResolve(u=>{if(a(),u===e){const c=r.afterEach(async()=>{c(),await i.runWithContext(()=>ha(o)),window==null||window.history.pushState({},"",e.fullPath)});return!1}})},$j=async e=>{let t,n;const i=([t,n]=Ia(()=>r_(e.path)),t=await t,n(),t);if(i.redirect)return xo(i.redirect,{acceptRelative:!0})?(window.location.href=i.redirect,!1):i.redirect},Uj=[Bj,$j],du={};function Hj(e,t,n){const{pathname:i,search:r,hash:s}=t,o=e.indexOf("#");if(o>-1){const u=s.includes(e.slice(o))?e.slice(o).length:1;let c=s.slice(u);return c[0]!=="/"&&(c="/"+c),I0(c,"")}const a=I0(i,e),l=!n||zL(a,n,{trailingSlash:!0})?a:n;return l+(l.includes("?")?"":r)+s}const jj=Zn({name:"nuxt:router",enforce:"pre",async setup(e){var p;let t,n,i=ac().app.baseURL;vi.hashMode&&!i.includes("#")&&(i+="#");const r=((p=vi.history)==null?void 0:p.call(vi,i))??(vi.hashMode?ZH(i):CP(i)),s=vi.routes?([t,n]=Ia(()=>vi.routes(av)),t=await t,n(),t??av):av;let o;const a=Cj({...vi,scrollBehavior:(S,w,T)=>{if(w===ki){o=T;return}if(vi.scrollBehavior){if(a.options.scrollBehavior=vi.scrollBehavior,"scrollRestoration"in window.history){const x=a.beforeEach(()=>{x(),window.history.scrollRestoration="manual"})}return vi.scrollBehavior(S,ki,o||T)}},history:r,routes:s});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),e.vueApp.use(a);const l=ve(a.currentRoute.value);a.afterEach((S,w)=>{l.value=w}),Object.defineProperty(e.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=Hj(i,window.location,e.payload.path),c=ve(a.currentRoute.value),d=()=>{c.value=a.currentRoute.value};e.hook("page:finish",d),a.afterEach((S,w)=>{var T,x,V,D;((x=(T=S.matched[0])==null?void 0:T.components)==null?void 0:x.default)===((D=(V=w.matched[0])==null?void 0:V.components)==null?void 0:D.default)&&d()});const f={};for(const S in c.value)Object.defineProperty(f,S,{get:()=>c.value[S],enumerable:!0});e._route=Tr(f),e._middleware=e._middleware||{global:[],named:{}};const m=ah();a.afterEach(async(S,w,T)=>{delete e._processingMiddleware,!e.isHydrating&&m.value&&await e.runWithContext(WF),T&&await e.callHook("page:loading:end")});try{[t,n]=Ia(()=>a.isReady()),await t,n()}catch(S){[t,n]=Ia(()=>e.runWithContext(()=>ha(S))),await t,n()}const g=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;d();const y=e.payload.state._layout;return a.beforeEach(async(S,w)=>{var T;await e.callHook("page:loading:start"),S.meta=Lt(S.meta),e.isHydrating&&y&&!ys(S.meta.layout)&&(S.meta.layout=y),e._processingMiddleware=!0;{const x=new Set([...Uj,...e._middleware.global]);for(const V of S.matched){const D=V.meta.middleware;if(D)for(const A of l_(D))x.add(A)}{const V=await e.runWithContext(()=>r_(S.path));if(V.appMiddleware)for(const D in V.appMiddleware)V.appMiddleware[D]?x.add(D):x.delete(D)}for(const V of x){const D=typeof V=="string"?e._middleware.named[V]||await((T=du[V])==null?void 0:T.call(du).then(b=>b.default||b)):V;if(!D)throw new Error(`Unknown route middleware: '${V}'.`);const A=await e.runWithContext(()=>D(S,w));if(!e.payload.serverRendered&&e.isHydrating&&(A===!1||A instanceof Error)){const b=A||ng({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await e.runWithContext(()=>ha(b)),!1}if(A!==!0&&(A||A===!1))return A}}}),a.onError(async()=>{delete e._processingMiddleware,await e.callHook("page:loading:end")}),a.afterEach(async(S,w)=>{S.matched.length===0&&await e.runWithContext(()=>ha(ng({statusCode:404,fatal:!1,statusMessage:`Page not found: ${S.fullPath}`,data:{path:S.fullPath}})))}),e.hooks.hookOnce("app:created",async()=>{try{"name"in g&&(g.name=void 0),await a.replace({...g,force:!0}),a.options.scrollBehavior=vi.scrollBehavior}catch(S){await e.runWithContext(()=>ha(S))}}),{provide:{router:a}}}}),sC=globalThis.requestIdleCallback||(e=>{const t=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-t))};return setTimeout(()=>{e(n)},1)}),yee=globalThis.cancelIdleCallback||(e=>{clearTimeout(e)}),u_=e=>{const t=Jt();t.isHydrating?t.hooks.hookOnce("app:suspense:resolve",()=>{sC(()=>e())}):sC(()=>e())},Wj=Zn({name:"nuxt:payload",setup(e){Mi().beforeResolve(async(t,n)=>{if(t.path===n.path)return;const i=await FS(t.path);i&&Object.assign(e.static.data,i.data)}),u_(()=>{var t;e.hooks.hook("link:prefetch",async n=>{const{hostname:i}=new URL(n,window.location.href);i===window.location.hostname&&await FS(n)}),((t=navigator.connection)==null?void 0:t.effectiveType)!=="slow-2g"&&setTimeout(kh,1e3)})}}),zj=Zn(()=>{const e=Mi();u_(()=>{e.beforeResolve(async()=>{await new Promise(t=>{setTimeout(t,100),requestAnimationFrame(()=>{setTimeout(t,0)})})})})}),qj=Zn(e=>{let t;async function n(){const i=await kh();t&&clearTimeout(t),t=setTimeout(n,x0);try{const r=await $fetch(Ay("builds/latest.json")+`?${Date.now()}`);r.id!==i.id&&e.hooks.callHook("app:manifest:update",r)}catch{}}u_(()=>{t=setTimeout(n,x0)})});function Gj(e={}){const t=e.path||window.location.pathname;let n={};try{n=nf(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(e.force||(n==null?void 0:n.path)!==t||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:t,expires:Date.now()+(e.ttl??1e4)}))}catch{}if(e.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Jt().payload.state}))}catch{}window.location.pathname!==t?window.location.href=t:window.location.reload()}}const Kj=Zn({name:"nuxt:chunk-reload",setup(e){const t=Mi(),n=ac(),i=new Set;t.beforeEach(()=>{i.clear()}),e.hook("app:chunkError",({error:s})=>{i.add(s)});function r(s){const a="href"in s&&s.href[0]==="#"?n.app.baseURL+s.href:Ey(n.app.baseURL,s.fullPath);Gj({path:a,persistState:!0})}e.hook("app:manifest:update",()=>{t.beforeResolve(r)}),t.onError((s,o)=>{i.has(s)&&r(o)})}}),Yj=Zn({name:"nuxt:global-components"}),sd={admin:Yd(()=>ao(()=>import("./DkRmm7mj.js"),__vite__mapDeps([6,7]),import.meta.url)),ecommerce:Yd(()=>ao(()=>import("./lilS9bBl.js"),[],import.meta.url))},Qj=Zn({name:"nuxt:prefetch",setup(e){const t=Mi();e.hooks.hook("app:mounted",()=>{t.beforeEach(async n=>{var r;const i=(r=n==null?void 0:n.meta)==null?void 0:r.layout;i&&typeof sd[i]=="function"&&await sd[i]()})}),e.hooks.hook("link:prefetch",n=>{if(xo(n))return;const i=t.resolve(n);if(!i)return;const r=i.meta.layout;let s=l_(i.meta.middleware);s=s.filter(o=>typeof o=="string");for(const o of s)typeof du[o]=="function"&&du[o]();r&&typeof sd[r]=="function"&&sd[r]()})}});var Xj="firebase",Jj="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */si(Xj,Jj,"app");const Zj=Zn(()=>({provide:{firebaseApp:WE(ac().public.vuefire.config)}}));function c_(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]]);return n}function PP(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xP=PP,RP=new nl("auth","Firebase",PP());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf=new lc("@firebase/auth");function e6(e,...t){wf.logLevel<=Xe.WARN&&wf.warn(`Auth (${Ds}): ${e}`,...t)}function Vd(e,...t){wf.logLevel<=Xe.ERROR&&wf.error(`Auth (${Ds}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(e,...t){throw d_(e,...t)}function Zi(e,...t){return d_(e,...t)}function VP(e,t,n){const i=Object.assign(Object.assign({},xP()),{[t]:n});return new nl("auth","Firebase",i).create(t,{appName:e.name})}function lo(e){return VP(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function d_(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return RP.create(e,...t)}function qe(e,t,...n){if(!e)throw d_(t,...n)}function Ir(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Vd(t),new Error(t)}function Or(e,t){e||Ir(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function t6(){return oC()==="http:"||oC()==="https:"}function oC(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n6(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(t6()||o2()||"connection"in navigator)?navigator.onLine:!0}function i6(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(t,n){this.shortDelay=t,this.longDelay=n,Or(n>t,"Short delay should be less than long delay!"),this.isMobile=Py()||LE()}get(){return n6()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(e,t){Or(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r6={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s6=new fc(3e4,6e4);function h_(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ul(e,t,n,i,r={}){return MP(e,r,async()=>{let s={},o={};i&&(t==="GET"?o=i:s={body:JSON.stringify(i)});const a=il(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:l},s);return s2()||(u.referrerPolicy="no-referrer"),DP.fetch()(OP(e,e.config.apiHost,n,a),u)})}async function MP(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},r6),t);try{const r=new a6(e),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw od(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw od(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw od(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw od(e,"user-disabled",o);const c=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw VP(e,c,u);Mr(e,c)}}catch(r){if(r instanceof lr)throw r;Mr(e,"network-request-failed",{message:String(r)})}}async function o6(e,t,n,i,r={}){const s=await ul(e,t,n,i,r);return"mfaPendingCredential"in s&&Mr(e,"multi-factor-auth-required",{_serverResponse:s}),s}function OP(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?f_(e.config,r):`${e.config.apiScheme}://${r}`}class a6{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Zi(this.auth,"network-request-failed")),s6.get())})}}function od(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Zi(e,t,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l6(e,t){return ul(e,"POST","/v1/accounts:delete",t)}async function NP(e,t){return ul(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function u6(e,t=!1){const n=Oi(e),i=await n.getIdToken(t),r=m_(i);qe(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:fu(lv(r.auth_time)),issuedAtTime:fu(lv(r.iat)),expirationTime:fu(lv(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function lv(e){return Number(e)*1e3}function m_(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return Vd("JWT malformed, contained fewer than 3 sections"),null;try{const r=uf(n);return r?JSON.parse(r):(Vd("Failed to decode base64 JWT payload"),null)}catch(r){return Vd("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function aC(e){const t=m_(e);return qe(t,"internal-error"),qe(typeof t.exp<"u","internal-error"),qe(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mu(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof lr&&c6(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function c6({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d6{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fu(this.lastLoginAt),this.creationTime=fu(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sf(e){var t;const n=e.auth,i=await e.getIdToken(),r=await Mu(e,NP(n,{idToken:i}));qe(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?LP(s.providerUserInfo):[],a=h6(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Bg(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function f6(e){const t=Oi(e);await Sf(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function h6(e,t){return[...e.filter(i=>!t.some(r=>r.providerId===i.providerId)),...t]}function LP(e){return e.map(t=>{var{providerId:n}=t,i=c_(t,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m6(e,t){const n=await MP(e,{},async()=>{const i=il({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=OP(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",DP.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function v6(e,t){return ul(e,"POST","/v2/accounts:revokeToken",h_(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){qe(t.idToken,"internal-error"),qe(typeof t.idToken<"u","internal-error"),qe(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):aC(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){qe(t.length!==0,"internal-error");const n=aC(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(qe(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await m6(t,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new Aa;return i&&(qe(typeof i=="string","internal-error",{appName:t}),o.refreshToken=i),r&&(qe(typeof r=="string","internal-error",{appName:t}),o.accessToken=r),s&&(qe(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Aa,this.toJSON())}_performRefresh(){return Ir("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(e,t){qe(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class kr{constructor(t){var{uid:n,auth:i,stsTokenManager:r}=t,s=c_(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new d6(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Bg(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Mu(this,this.stsTokenManager.getToken(this.auth,t));return qe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return u6(this,t)}reload(){return f6(this)}_assign(t){this!==t&&(qe(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new kr(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){qe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await Sf(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(as(this.auth.app))return Promise.reject(lo(this.auth));const t=await this.getIdToken();return await Mu(this,l6(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var i,r,s,o,a,l,u,c;const d=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,p=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,S=(u=n.createdAt)!==null&&u!==void 0?u:void 0,w=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:T,emailVerified:x,isAnonymous:V,providerData:D,stsTokenManager:A}=n;qe(T&&A,t,"internal-error");const b=Aa.fromJSON(this.name,A);qe(typeof T=="string",t,"internal-error"),Yr(d,t.name),Yr(f,t.name),qe(typeof x=="boolean",t,"internal-error"),qe(typeof V=="boolean",t,"internal-error"),Yr(m,t.name),Yr(g,t.name),Yr(y,t.name),Yr(p,t.name),Yr(S,t.name),Yr(w,t.name);const _=new kr({uid:T,auth:t,email:f,emailVerified:x,displayName:d,isAnonymous:V,photoURL:g,phoneNumber:m,tenantId:y,stsTokenManager:b,createdAt:S,lastLoginAt:w});return D&&Array.isArray(D)&&(_.providerData=D.map(I=>Object.assign({},I))),p&&(_._redirectEventId=p),_}static async _fromIdTokenResponse(t,n,i=!1){const r=new Aa;r.updateFromServerResponse(n);const s=new kr({uid:n.localId,auth:t,stsTokenManager:r,isAnonymous:i});return await Sf(s),s}static async _fromGetAccountInfoResponse(t,n,i){const r=n.users[0];qe(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?LP(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),a=new Aa;a.updateFromIdToken(i);const l=new kr({uid:r.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new Bg(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC=new Map;function Er(e){Or(e instanceof Function,"Expected a class definition");let t=lC.get(e);return t?(Or(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,lC.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}FP.type="NONE";const uC=FP;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(e,t,n){return`firebase:${e}:${t}:${n}`}class Pa{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Dd(this.userKey,r.apiKey,s),this.fullPersistenceKey=Dd("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?kr._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new Pa(Er(uC),t,i);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=r[0]||Er(uC);const o=Dd(i,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=kr._fromJSON(t,c);u!==s&&(a=d),s=u;break}}catch{}const l=r.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Pa(s,t,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Pa(s,t,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(HP(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(BP(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(WP(t))return"Blackberry";if(zP(t))return"Webos";if($P(t))return"Safari";if((t.includes("chrome/")||UP(t))&&!t.includes("edge/"))return"Chrome";if(jP(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function BP(e=Bn()){return/firefox\//i.test(e)}function $P(e=Bn()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function UP(e=Bn()){return/crios\//i.test(e)}function HP(e=Bn()){return/iemobile/i.test(e)}function jP(e=Bn()){return/android/i.test(e)}function WP(e=Bn()){return/blackberry/i.test(e)}function zP(e=Bn()){return/webos/i.test(e)}function v_(e=Bn()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function g6(e=Bn()){var t;return v_(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function p6(){return a2()&&document.documentMode===10}function qP(e=Bn()){return v_(e)||jP(e)||zP(e)||WP(e)||/windows phone/i.test(e)||HP(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GP(e,t=[]){let n;switch(e){case"Browser":n=cC(Bn());break;case"Worker":n=`${cC(Bn())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ds}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y6{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _6(e,t={}){return ul(e,"GET","/v2/passwordPolicy",h_(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b6=6;class w6{constructor(t){var n,i,r,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:b6,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=t.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,i,r,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=t.length>=i),r&&(n.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<t.length;r++)i=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S6{constructor(t,n,i,r){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dC(this),this.idTokenSubscription=new dC(this),this.beforeStateQueue=new y6(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=RP,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Er(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Pa.create(this,t),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await NP(this,{idToken:t}),i=await kr._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(as(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return qe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Sf(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=i6()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(as(this.app))return Promise.reject(lo(this));const n=t?Oi(t):null;return n&&qe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&qe(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return as(this.app)?Promise.reject(lo(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return as(this.app)?Promise.reject(lo(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Er(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await _6(this),n=new w6(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new nl("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await v6(this,i)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Er(t)||this._popupRedirectResolver;qe(n,this,"argument-error"),this.redirectPersistenceManager=await Pa.create(this,[Er(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(qe(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,i,r);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return qe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=GP(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&e6(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function KP(e){return Oi(e)}class dC{constructor(t){this.auth=t,this.observer=null,this.addObserver=g2(n=>this.observer=n)}get next(){return qe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let g_={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function C6(e){g_=e}function T6(e){return g_.loadJS(e)}function I6(){return g_.gapiScript}function k6(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E6(e,t){const n=jE(e,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(df(s,t??{}))return r;Mr(r,"already-initialized")}return n.initialize({options:t})}function A6(e,t){const n=(t==null?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Er);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Ir("not implemented")}_getIdTokenResponse(t){return Ir("not implemented")}_linkToIdToken(t,n){return Ir("not implemented")}_getReauthenticationResolver(t){return Ir("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xa(e,t){return o6(e,"POST","/v1/accounts:signInWithIdp",h_(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P6="http://localhost";class vo extends YP{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new vo(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Mr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:r}=n,s=c_(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new vo(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return xa(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,xa(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,xa(t,n)}buildRequest(){const t={requestUri:P6,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=il(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc extends QP{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends hc{constructor(){super("facebook.com")}static credential(t){return vo._fromParams({providerId:ns.PROVIDER_ID,signInMethod:ns.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ns.credentialFromTaggedObject(t)}static credentialFromError(t){return ns.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ns.credential(t.oauthAccessToken)}catch{return null}}}ns.FACEBOOK_SIGN_IN_METHOD="facebook.com";ns.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is extends hc{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return vo._fromParams({providerId:is.PROVIDER_ID,signInMethod:is.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return is.credentialFromTaggedObject(t)}static credentialFromError(t){return is.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return is.credential(n,i)}catch{return null}}}is.GOOGLE_SIGN_IN_METHOD="google.com";is.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs extends hc{constructor(){super("github.com")}static credential(t){return vo._fromParams({providerId:rs.PROVIDER_ID,signInMethod:rs.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return rs.credentialFromTaggedObject(t)}static credentialFromError(t){return rs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return rs.credential(t.oauthAccessToken)}catch{return null}}}rs.GITHUB_SIGN_IN_METHOD="github.com";rs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends hc{constructor(){super("twitter.com")}static credential(t,n){return vo._fromParams({providerId:ss.PROVIDER_ID,signInMethod:ss.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return ss.credentialFromTaggedObject(t)}static credentialFromError(t){return ss.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return ss.credential(n,i)}catch{return null}}}ss.TWITTER_SIGN_IN_METHOD="twitter.com";ss.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,r=!1){const s=await kr._fromIdTokenResponse(t,i,r),o=fC(i);return new qa({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const r=fC(i);return new qa({user:t,providerId:r,_tokenResponse:i,operationType:n})}}function fC(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf extends lr{constructor(t,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Cf.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,r){return new Cf(t,n,i,r)}}function XP(e,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Cf._fromErrorAndOperation(e,s,t,i):s})}async function x6(e,t,n=!1){const i=await Mu(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return qa._forOperation(e,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R6(e,t,n=!1){const{auth:i}=e;if(as(i.app))return Promise.reject(lo(i));const r="reauthenticate";try{const s=await Mu(e,XP(i,r,t,e),n);qe(s.idToken,i,"internal-error");const o=m_(s.idToken);qe(o,i,"internal-error");const{sub:a}=o;return qe(e.uid===a,i,"user-mismatch"),qa._forOperation(e,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Mr(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V6(e,t,n=!1){if(as(e.app))return Promise.reject(lo(e));const i="signIn",r=await XP(e,i,t),s=await qa._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}function D6(e,t,n,i){return Oi(e).onIdTokenChanged(t,n,i)}const Tf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Tf,"1"),this.storage.removeItem(Tf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M6=1e3,O6=10;class ZP extends JP{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qP(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&t(n,r,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=t.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);p6()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,O6):r()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},M6)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}ZP.type="LOCAL";const N6=ZP;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex extends JP{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}ex.type="SESSION";const L6=ex;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F6(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(r=>r.isListeningto(t));if(n)return n;const i=new Ah(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await F6(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ah.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B6{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=p_("",20);r.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(){return window}function $6(e){er().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tx(){return typeof er().WorkerGlobalScope<"u"&&typeof er().importScripts=="function"}async function U6(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function H6(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function j6(){return tx()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx="firebaseLocalStorageDb",W6=1,If="firebaseLocalStorage",ix="fbase_key";class mc{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ph(e,t){return e.transaction([If],t?"readwrite":"readonly").objectStore(If)}function z6(){const e=indexedDB.deleteDatabase(nx);return new mc(e).toPromise()}function $g(){const e=indexedDB.open(nx,W6);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const i=e.result;try{i.createObjectStore(If,{keyPath:ix})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains(If)?t(i):(i.close(),await z6(),t(await $g()))})})}async function hC(e,t,n){const i=Ph(e,!0).put({[ix]:t,value:n});return new mc(i).toPromise()}async function q6(e,t){const n=Ph(e,!1).get(t),i=await new mc(n).toPromise();return i===void 0?null:i.value}function mC(e,t){const n=Ph(e,!0).delete(t);return new mc(n).toPromise()}const G6=800,K6=3;class rx{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $g(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>K6)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tx()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ah._getInstance(j6()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await U6(),!this.activeServiceWorker)return;this.sender=new B6(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((t=i[0])===null||t===void 0)&&t.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||H6()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await $g();return await hC(t,Tf,"1"),await mC(t,Tf),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>hC(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>q6(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>mC(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(r=>{const s=Ph(r,!1).getAll();return new mc(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(t.length!==0)for(const{fbase_key:r,value:s}of t)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),G6)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rx.type="LOCAL";const Y6=rx;new fc(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q6(e,t){return t?Er(t):(qe(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_ extends YP{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return xa(t,this._buildIdpRequest())}_linkToIdToken(t,n){return xa(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return xa(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function X6(e){return V6(e.auth,new y_(e),e.bypassAuthState)}function J6(e){const{auth:t,user:n}=e;return qe(n,t,"internal-error"),R6(n,new y_(e),e.bypassAuthState)}async function Z6(e){const{auth:t,user:n}=e;return qe(n,t,"internal-error"),x6(n,new y_(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(t,n,i,r,s=!1){this.auth=t,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return X6;case"linkViaPopup":case"linkViaRedirect":return Z6;case"reauthViaPopup":case"reauthViaRedirect":return J6;default:Mr(this.auth,"internal-error")}}resolve(t){Or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e5=new fc(2e3,1e4);class ma extends sx{constructor(t,n,i,r,s){super(t,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,ma.currentPopupAction&&ma.currentPopupAction.cancel(),ma.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return qe(t,this.auth,"internal-error"),t}async onExecution(){Or(this.filter.length===1,"Popup operations only handle one event");const t=p_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Zi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ma.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,e5.get())};t()}}ma.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t5="pendingRedirect",Md=new Map;class n5 extends sx{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let t=Md.get(this.auth._key());if(!t){try{const i=await i5(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}Md.set(this.auth._key(),t)}return this.bypassAuthState||Md.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function i5(e,t){const n=o5(t),i=s5(e);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function r5(e,t){Md.set(e._key(),t)}function s5(e){return Er(e._redirectPersistence)}function o5(e){return Dd(t5,e.config.apiKey,e.name)}async function a5(e,t,n=!1){if(as(e.app))return Promise.reject(lo(e));const i=KP(e),r=Q6(i,t),o=await new n5(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l5=10*60*1e3;class u5{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!c5(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var i;if(t.error&&!ox(t)){const r=((i=t.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Zi(this.auth,r))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=l5&&this.cachedEventUids.clear(),this.cachedEventUids.has(vC(t))}saveEventToCache(t){this.cachedEventUids.add(vC(t)),this.lastProcessedEventTime=Date.now()}}function vC(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function ox({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function c5(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ox(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d5(e,t={}){return ul(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f5=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,h5=/^https?/;async function m5(e){if(e.config.emulator)return;const{authorizedDomains:t}=await d5(e);for(const n of t)try{if(v5(n))return}catch{}Mr(e,"unauthorized-domain")}function v5(e){const t=Fg(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&i===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!h5.test(n))return!1;if(f5.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g5=new fc(3e4,6e4);function gC(){const e=er().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function p5(e){return new Promise((t,n)=>{var i,r,s;function o(){gC(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{gC(),n(Zi(e,"network-request-failed"))},timeout:g5.get()})}if(!((r=(i=er().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)t(gapi.iframes.getContext());else if(!((s=er().gapi)===null||s===void 0)&&s.load)o();else{const a=k6("iframefcb");return er()[a]=()=>{gapi.load?o():n(Zi(e,"network-request-failed"))},T6(`${I6()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Od=null,t})}let Od=null;function y5(e){return Od=Od||p5(e),Od}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _5=new fc(5e3,15e3),b5="__/auth/iframe",w5="emulator/auth/iframe",S5={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},C5=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function T5(e){const t=e.config;qe(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?f_(t,w5):`https://${e.config.authDomain}/${b5}`,i={apiKey:t.apiKey,appName:e.name,v:Ds},r=C5.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${il(i).slice(1)}`}async function I5(e){const t=await y5(e),n=er().gapi;return qe(n,e,"internal-error"),t.open({where:document.body,url:T5(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:S5,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=Zi(e,"network-request-failed"),a=er().setTimeout(()=>{s(o)},_5.get());function l(){er().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k5={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},E5=500,A5=600,P5="_blank",x5="http://localhost";class pC{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function R5(e,t,n,i=E5,r=A5){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},k5),{width:i.toString(),height:r.toString(),top:s,left:o}),u=Bn().toLowerCase();n&&(a=UP(u)?P5:n),BP(u)&&(t=t||x5,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[m,g])=>`${f}${m}=${g},`,"");if(g6(u)&&a!=="_self")return V5(t||"",a),new pC(null);const d=window.open(t||"",a,c);qe(d,e,"popup-blocked");try{d.focus()}catch{}return new pC(d)}function V5(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D5="__/auth/handler",M5="emulator/auth/handler",O5=encodeURIComponent("fac");async function yC(e,t,n,i,r,s){qe(e.config.authDomain,e,"auth-domain-config-required"),qe(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:Ds,eventId:r};if(t instanceof QP){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",rg(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,d]of Object.entries({}))o[c]=d}if(t instanceof hc){const c=t.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await e._getAppCheckToken(),u=l?`#${O5}=${encodeURIComponent(l)}`:"";return`${N5(e)}?${il(a).slice(1)}${u}`}function N5({config:e}){return e.emulator?f_(e,M5):`https://${e.authDomain}/${D5}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv="webStorageSupport";class L5{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=L6,this._completeRedirectFn=a5,this._overrideRedirectResult=r5}async _openPopup(t,n,i,r){var s;Or((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await yC(t,n,i,Fg(),r);return R5(t,o,p_())}async _openRedirect(t,n,i,r){await this._originValidation(t);const s=await yC(t,n,i,Fg(),r);return $6(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(Or(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await I5(t),i=new u5(t);return n.register("authEvent",r=>(qe(r==null?void 0:r.authEvent,t,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(uv,{type:uv},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[uv];o!==void 0&&n(!!o),Mr(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=m5(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return qP()||$P()||v_()}}const F5=L5;var _C="@firebase/auth",bC="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B5{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){qe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $5(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function U5(e){nr(new Ni("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;qe(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:GP(e)},u=new S6(i,r,s,l);return A6(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),nr(new Ni("auth-internal",t=>{const n=KP(t.getProvider("auth").getImmediate());return(i=>new B5(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),si(_C,bC,$5(e)),si(_C,bC,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H5=5*60;n2("authIdTokenMaxAge");function j5(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}C6({loadJS(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=r=>{const s=Zi("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",j5().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});U5("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W5=new Map,z5={activated:!1,tokenObservers:[]};function Bi(e){return W5.get(e)||Object.assign({},z5)}const wC={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q5{constructor(t,n,i,r,s){if(this.operation=t,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=r,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=r,r>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(t){this.stop();try{this.pending=new Tu,this.pending.promise.catch(n=>{}),await G5(this.getNextRun(t)),this.pending.resolve(),await this.pending.promise,this.pending=new Tu,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(t){if(t)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function G5(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K5={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},kf=new nl("appCheck","AppCheck",K5);function ax(e){if(!Bi(e).activated)throw kf.create("use-before-activation",{appName:e.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y5="firebase-app-check-database",Q5=1,Ug="firebase-app-check-store";let ad=null;function X5(){return ad||(ad=new Promise((e,t)=>{try{const n=indexedDB.open(Y5,Q5);n.onsuccess=i=>{e(i.target.result)},n.onerror=i=>{var r;t(kf.create("storage-open",{originalErrorMessage:(r=i.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=i=>{const r=i.target.result;switch(i.oldVersion){case 0:r.createObjectStore(Ug,{keyPath:"compositeKey"})}}}catch(n){t(kf.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ad)}function J5(e,t){return Z5(eW(e),t)}async function Z5(e,t){const i=(await X5()).transaction(Ug,"readwrite"),s=i.objectStore(Ug).put({compositeKey:e,value:t});return new Promise((o,a)=>{s.onsuccess=l=>{o()},i.onerror=l=>{var u;a(kf.create("storage-set",{originalErrorMessage:(u=l.target.error)===null||u===void 0?void 0:u.message}))}})}function eW(e){return`${e.options.appId}-${e.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=new lc("@firebase/app-check");function SC(e,t){return BE()?J5(e,t).catch(n=>{Hg.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tW={error:"UNKNOWN_ERROR"};function nW(e){return uh.encodeString(JSON.stringify(e),!1)}async function jg(e,t=!1){const n=e.app;ax(n);const i=Bi(n);let r=i.token,s;if(r&&!Ql(r)&&(i.token=void 0,r=void 0),!r){const l=await i.cachedTokenPromise;l&&(Ql(l)?r=l:await SC(n,void 0))}if(!t&&r&&Ql(r))return{token:r.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),r=await Bi(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Hg.warn(l.message):Hg.error(l),s=l}let a;return r?s?Ql(r)?a={token:r.token,internalError:s}:a=TC(s):(a={token:r.token},i.token=r,await SC(n,r)):a=TC(s),o&&oW(n,a),a}async function iW(e){const t=e.app;ax(t);const{provider:n}=Bi(t);{const{token:i}=await n.getToken();return{token:i}}}function rW(e,t,n,i){const{app:r}=e,s=Bi(r),o={next:n,error:i,type:t};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&Ql(s.token)){const a=s.token;Promise.resolve().then(()=>{n({token:a.token}),CC(e)}).catch(()=>{})}s.cachedTokenPromise.then(()=>CC(e))}function lx(e,t){const n=Bi(e),i=n.tokenObservers.filter(r=>r.next!==t);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function CC(e){const{app:t}=e,n=Bi(t);let i=n.tokenRefresher;i||(i=sW(e),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function sW(e){const{app:t}=e;return new q5(async()=>{const n=Bi(t);let i;if(n.token?i=await jg(e,!0):i=await jg(e),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=Bi(t);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,r),Math.max(0,i-Date.now())}else return 0},wC.RETRIAL_MIN_WAIT,wC.RETRIAL_MAX_WAIT)}function oW(e,t){const n=Bi(e).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&t.error!=null?i.error(t.error):i.next(t)}catch{}}function Ql(e){return e.expireTimeMillis-Date.now()>0}function TC(e){return{token:nW(tW),error:e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aW{constructor(t,n){this.app=t,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:t}=Bi(this.app);for(const n of t)lx(this.app,n.next);return Promise.resolve()}}function lW(e,t){return new aW(e,t)}function uW(e){return{getToken:t=>jg(e,t),getLimitedUseToken:()=>iW(e),addTokenListener:t=>rW(e,"INTERNAL",t),removeTokenListener:t=>lx(e.app,t)}}const cW="@firebase/app-check",dW="0.8.10",fW="app-check",IC="app-check-internal";function hW(){nr(new Ni(fW,e=>{const t=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat");return lW(t,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider(IC).initialize()})),nr(new Ni(IC,e=>{const t=e.getProvider("app-check").getImmediate();return uW(t)},"PUBLIC").setInstantiationMode("EXPLICIT")),si(cW,dW)}hW();const ux=Symbol("firebaseApp");function cx(e){return el()&&Le(ux,null)||zE(e)}const ld=new WeakMap;function mW(e,t){if(!ld.has(e)){const n=nc(!0);ld.set(e,n);const{unmount:i}=t;t.unmount=()=>{i.call(t),n.stop(),ld.delete(e)}}return ld.get(e)}const vW=new WeakMap,ud=new WeakMap;function gW(e){const t=cx(e);if(!ud.has(t)){let n;const r=[new Promise(s=>{n=s}),s=>{ud.set(t,s),n(s.value)}];ud.set(t,r)}return ud.get(t)}function pW(e,t){D6(t,n=>{const i=gW();e.value=n,Array.isArray(i)&&i[1](e)})}var kC={};const EC="@firebase/database",AC="1.0.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dx="";function yW(e){dx=e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _W{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),wn(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:Iu(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bW{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return $r(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new _W(t)}}catch{}return new bW},Xs=fx("localStorage"),wW=fx("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra=new lc("@firebase/database"),SW=function(){let e=1;return function(){return e++}}(),hx=function(e){const t=b2(e),n=new v2;n.update(t);const i=n.digest();return uh.encodeByteArray(i)},vc=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?t+=vc.apply(null,i):typeof i=="object"?t+=wn(i):t+=i,t+=" "}return t};let hu=null,PC=!0;const CW=function(e,t){Ae(!t,"Can't turn on custom loggers persistently."),Ra.logLevel=Xe.VERBOSE,hu=Ra.log.bind(Ra)},Dn=function(...e){if(PC===!0&&(PC=!1,hu===null&&wW.get("logging_enabled")===!0&&CW()),hu){const t=vc.apply(null,e);hu(t)}},gc=function(e){return function(...t){Dn(e,...t)}},Wg=function(...e){const t="FIREBASE INTERNAL ERROR: "+vc(...e);Ra.error(t)},go=function(...e){const t=`FIREBASE FATAL ERROR: ${vc(...e)}`;throw Ra.error(t),new Error(t)},oi=function(...e){const t="FIREBASE WARNING: "+vc(...e);Ra.warn(t)},TW=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&oi("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},mx=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},IW=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ga="[MIN_NAME]",po="[MAX_NAME]",cl=function(e,t){if(e===t)return 0;if(e===Ga||t===po)return-1;if(t===Ga||e===po)return 1;{const n=xC(e),i=xC(t);return n!==null?i!==null?n-i===0?e.length-t.length:n-i:-1:i!==null?1:e<t?-1:1}},kW=function(e,t){return e===t?0:e<t?-1:1},Bl=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+wn(t))},__=function(e){if(typeof e!="object"||e===null)return wn(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)i!==0&&(n+=","),n+=wn(t[i]),n+=":",n+=__(e[t[i]]);return n+="}",n},vx=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function Si(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const gx=function(e){Ae(!mx(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let r,s,o,a,l;e===0?(s=0,o=0,r=1/e===-1/0?1:0):(r=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),i),s=a+i,o=Math.round(e*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(e/Math.pow(2,1-i-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=t;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(r?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},EW=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},AW=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},PW=new RegExp("^-?(0*)\\d{1,10}$"),xW=-2147483648,RW=2147483647,xC=function(e){if(PW.test(e)){const t=Number(e);if(t>=xW&&t<=RW)return t}return null},pc=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw oi("Exception was thrown by user callback.",n),t},Math.floor(0))}},VW=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},mu=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DW{constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(t))}notifyForInvalidToken(){oi(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MW{constructor(t,n,i){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(Dn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',oi(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_="5",px="v",yx="s",_x="r",bx="f",wx=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Sx="ls",Cx="p",zg="ac",Tx="websocket",Ix="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OW{constructor(t,n,i,r,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Xs.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Xs.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function NW(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function kx(e,t,n){Ae(typeof t=="string","typeof type must == string"),Ae(typeof n=="object","typeof params must == object");let i;if(t===Tx)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===Ix)i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);NW(e)&&(n.ns=e.namespace);const r=[];return Si(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LW{constructor(){this.counters_={}}incrementCounter(t,n=1){$r(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return KF(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv={},dv={};function w_(e){const t=e.toString();return cv[t]||(cv[t]=new LW),cv[t]}function FW(e,t){const n=e.toString();return dv[n]||(dv[n]=t()),dv[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BW{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&pc(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC="start",$W="close",UW="pLPCommand",HW="pRTLPCB",Ex="id",Ax="pw",Px="ser",jW="cb",WW="seg",zW="ts",qW="d",GW="dframe",xx=1870,Rx=30,KW=xx-Rx,YW=25e3,QW=3e4;class va{constructor(t,n,i,r,s,o,a){this.connId=t,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=gc(t),this.stats_=w_(n),this.urlFn=l=>(this.appCheckToken&&(l[zg]=this.appCheckToken),kx(n,Ix,l))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new BW(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(QW)),IW(()=>{if(this.isClosed_)return;this.scriptTagHolder=new S_((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===RC)this.id=a,this.password=l;else if(o===$W)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[RC]="t",i[Px]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[jW]=this.scriptTagHolder.uniqueCallbackIdentifier),i[px]=b_,this.transportSessionId&&(i[yx]=this.transportSessionId),this.lastSessionId&&(i[Sx]=this.lastSessionId),this.applicationId&&(i[Cx]=this.applicationId),this.appCheckToken&&(i[zg]=this.appCheckToken),typeof location<"u"&&location.hostname&&wx.test(location.hostname)&&(i[_x]=bx);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){va.forceAllow_=!0}static forceDisallow(){va.forceDisallow_=!0}static isAvailable(){return va.forceAllow_?!0:!va.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!EW()&&!AW()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=wn(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=ME(n),r=vx(i,KW);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[GW]="t",i[Ex]=t,i[Ax]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=wn(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class S_{constructor(t,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=SW(),window[UW+this.uniqueCallbackIdentifier]=t,window[HW+this.uniqueCallbackIdentifier]=n,this.myIFrame=S_.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Dn("frame writing exception"),a.stack&&Dn(a.stack),Dn(a)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||Dn("No IE domain setting required")}catch{const i=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[Ex]=this.myID,t[Ax]=this.myPW,t[Px]=this.currentSerial;let n=this.urlFn(t),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Rx+i.length<=xx;){const o=this.pendingSegs.shift();i=i+"&"+WW+r+"="+o.seg+"&"+zW+r+"="+o.ts+"&"+qW+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,i){this.pendingSegs.push({seg:t,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(YW)),s=()=>{clearTimeout(r),i()};this.addTag(t,s)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Dn("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XW=16384,JW=45e3;let Ef=null;typeof MozWebSocket<"u"?Ef=MozWebSocket:typeof WebSocket<"u"&&(Ef=WebSocket);class Ai{constructor(t,n,i,r,s,o,a){this.connId=t,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=gc(this.connId),this.stats_=w_(n),this.connURL=Ai.connectionURL_(n,o,a,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,i,r,s){const o={};return o[px]=b_,typeof location<"u"&&location.hostname&&wx.test(location.hostname)&&(o[_x]=bx),n&&(o[yx]=n),i&&(o[Sx]=i),r&&(o[zg]=r),s&&(o[Cx]=s),kx(t,Tx,o)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Xs.set("previous_websocket_failure",!0);try{let i;FE(),this.mySock=new Ef(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Ai.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(t=!0)}return!t&&Ef!==null&&!Ai.forceDisallow_}static previouslyFailed(){return Xs.isInMemoryStorage||Xs.get("previous_websocket_failure")===!0}markConnectionHealthy(){Xs.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Iu(n);this.onMessage(i)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(Ae(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(t){this.resetKeepAlive();const n=wn(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=vx(n,XW);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(JW))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ai.responsesRequiredToBeHealthy=2;Ai.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{static get ALL_TRANSPORTS(){return[va,Ai]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(t){this.initTransports_(t)}initTransports_(t){const n=Ai&&Ai.isAvailable();let i=n&&!Ai.previouslyFailed();if(t.webSocketOnly&&(n||oi("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Ai];else{const r=this.transports_=[];for(const s of Ou.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);Ou.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ou.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZW=6e4,e3=5e3,t3=10*1024,n3=100*1024,fv="t",VC="d",i3="s",DC="r",r3="e",MC="o",OC="a",NC="n",LC="p",s3="h";class o3{constructor(t,n,i,r,s,o,a,l,u,c){this.id=t,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=gc("c:"+this.id+":"),this.transportManager_=new Ou(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=t.healthyTimeout||0;r>0&&(this.healthyTimeout_=mu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>n3?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>t3?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(fv in t){const n=t[fv];n===OC?this.upgradeIfSecondaryHealthy_():n===DC?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===MC&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=Bl("t",t),i=Bl("d",t);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:LC,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:OC,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:NC,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=Bl("t",t),i=Bl("d",t);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=Bl(fv,t);if(VC in t){const i=t[VC];if(n===s3){const r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===NC){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===i3?this.onConnectionShutdown_(i):n===DC?this.onReset_(i):n===r3?Wg("Server Error: "+i):n===MC?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Wg("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,i=t.v,r=t.h;this.sessionId=t.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),b_!==i&&oi("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),mu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ZW))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):mu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(e3))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:LC,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Xs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{put(t,n,i,r){}merge(t,n,i,r){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,i){}onDisconnectMerge(t,n,i){}onDisconnectCancel(t,n){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(t){this.allowedEvents_=t,this.listeners_={},Ae(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const i=[...this.listeners_[t]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(t,n,i){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:i});const r=this.getInitialEvent(t);r&&n.apply(i,r)}off(t,n,i){this.validateEventType_(t);const r=this.listeners_[t]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(t){Ae(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af extends Dx{static getInstance(){return new Af}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Py()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(t){return Ae(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=32,BC=768;class Dt{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function pt(){return new Dt("")}function it(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ks(e){return e.pieces_.length-e.pieceNum_}function At(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Dt(e.pieces_,t)}function Mx(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function a3(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function Ox(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Nx(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Dt(t,0)}function mn(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof Dt)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const i=t.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new Dt(n,0)}function Ze(e){return e.pieceNum_>=e.pieces_.length}function pi(e,t){const n=it(e),i=it(t);if(n===null)return t;if(n===i)return pi(At(e),At(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Lx(e,t){if(ks(e)!==ks(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Pi(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(ks(e)>ks(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class l3{constructor(t,n){this.errorPrefix_=n,this.parts_=Ox(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=dh(this.parts_[i]);Fx(this)}}function u3(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=dh(t),Fx(e)}function c3(e){const t=e.parts_.pop();e.byteLength_-=dh(t),e.parts_.length>0&&(e.byteLength_-=1)}function Fx(e){if(e.byteLength_>BC)throw new Error(e.errorPrefix_+"has a key path longer than "+BC+" bytes ("+e.byteLength_+").");if(e.parts_.length>FC)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+FC+") or object contains a cycle "+Ys(e))}function Ys(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_ extends Dx{static getInstance(){return new C_}constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[t];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(t){return Ae(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l=1e3,d3=60*5*1e3,$C=30*1e3,f3=1.3,h3=3e4,m3="server_kill",UC=3;class xr extends Vx{constructor(t,n,i,r,s,o,a,l){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=xr.nextPersistentConnectionId_++,this.log_=gc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=$l,this.maxReconnectDelay_=d3,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!FE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");C_.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Af.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,i){const r=++this.requestNumber_,s={r,a:t,b:n};this.log_(wn(s)),Ae(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(t){this.initConnection_();const n=new Tu,r={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(t,n,i,r){this.initConnection_();const s=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),Ae(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Ae(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:t,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(t){const n=t.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";t.tag&&(s.q=n._queryObject,s.t=t.tag),s.h=t.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;xr.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===t&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(i,r),t.onComplete&&t.onComplete(u,l))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&$r(t,"w")){const i=Na(t,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();oi(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||m2(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=$C)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=h2(t)?"auth":"gauth",i={cred:t};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===t&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,i=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(t,n){const i=t._path.toString(),r=t._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),Ae(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,t._queryObject,n)}sendUnlisten_(t,n,i,r){this.log_("Unlisten on "+t+" for "+n);const s={p:t},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:i})}onDisconnectMerge(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:i})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+t,s),this.sendRequest(t,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(t,n,i,r){this.putInternal("p",t,n,i,r)}merge(t,n,i,r){this.putInternal("m",t,n,i,r)}putInternal(t,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:t,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,i=this.outstandingPuts_[t].request,r=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+wn(t));const n=t.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):Wg("Unrecognized action received from server: "+wn(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){Ae(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=$l,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=$l,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>h3&&(this.reconnectDelay_=$l),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*f3)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+xr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},u=function(d){Ae(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Dn("getToken() completed but was canceled"):(Dn("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new o3(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,i,m=>{oi(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(m3)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&oi(d),l())}}}interrupt(t){Dn("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){Dn("Resuming connection for reason: "+t),delete this.interruptReasons_[t],rg(this.interruptReasons_)&&(this.reconnectDelay_=$l,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let i;n?i=n.map(s=>__(s)).join("$"):i="default";const r=this.removeListen_(t,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(t,n){const i=new Dt(t).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(t,n){Dn("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=UC&&(this.reconnectDelay_=$C,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){Dn("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=UC&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+dx.replace(/\./g,"-")]=1,Py()?t["framework.cordova"]=1:LE()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Af.getInstance().currentlyOnline();return rg(this.interruptReasons_)&&t}}xr.nextPersistentConnectionId_=0;xr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t,n){this.name=t,this.node=n}static Wrap(t,n){return new rt(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const i=new rt(Ga,t),r=new rt(Ga,n);return this.compare(i,r)!==0}minPost(){return rt.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cd;class Bx extends xh{static get __EMPTY_NODE(){return cd}static set __EMPTY_NODE(t){cd=t}compare(t,n){return cl(t.name,n.name)}isDefinedOn(t){throw tl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return rt.MIN}maxPost(){return new rt(po,cd)}makePost(t,n){return Ae(typeof t=="string","KeyIndex indexValue must always be a string."),new rt(t,cd)}toString(){return".key"}}const Va=new Bx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(t,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!t.isEmpty();)if(t=t,o=n?i(t.key,n):1,r&&(o*=-1),o<0)this.isReverse_?t=t.left:t=t.right;else if(o===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class hn{constructor(t,n,i,r,s){this.key=t,this.value=n,this.color=i??hn.RED,this.left=r??Xn.EMPTY_NODE,this.right=s??Xn.EMPTY_NODE}copy(t,n,i,r,s){return new hn(t??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let r=this;const s=i(t,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(t,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(t,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Xn.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let i,r;if(i=this,n(t,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(t,i.key)===0){if(i.right.isEmpty())return Xn.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,hn.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,hn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}hn.RED=!0;hn.BLACK=!1;class v3{copy(t,n,i,r,s){return this}insert(t,n,i){return new hn(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Xn{constructor(t,n=Xn.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new Xn(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,hn.BLACK,null,null))}remove(t){return new Xn(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,hn.BLACK,null,null))}get(t){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(t,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(t){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(t,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new dd(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new dd(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new dd(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new dd(this.root_,null,this.comparator_,!0,t)}}Xn.EMPTY_NODE=new v3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g3(e,t){return cl(e.name,t.name)}function T_(e,t){return cl(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qg;function p3(e){qg=e}const $x=function(e){return typeof e=="number"?"number:"+gx(e):"string:"+e},Ux=function(e){if(e.isLeafNode()){const t=e.val();Ae(typeof t=="string"||typeof t=="number"||typeof t=="object"&&$r(t,".sv"),"Priority must be a string or number.")}else Ae(e===qg||e.isEmpty(),"priority of unexpected type.");Ae(e===qg||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let HC;class dn{static set __childrenNodeConstructor(t){HC=t}static get __childrenNodeConstructor(){return HC}constructor(t,n=dn.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,Ae(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ux(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new dn(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:dn.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return Ze(t)?this:it(t)===".priority"?this.priorityNode_:dn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:dn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const i=it(t);return i===null?n:n.isEmpty()&&i!==".priority"?this:(Ae(i!==".priority"||ks(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,dn.__childrenNodeConstructor.EMPTY_NODE.updateChild(At(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+$x(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=gx(this.value_):t+=this.value_,this.lazyHash_=hx(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===dn.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof dn.__childrenNodeConstructor?-1:(Ae(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,i=typeof this.value_,r=dn.VALUE_TYPE_ORDER.indexOf(n),s=dn.VALUE_TYPE_ORDER.indexOf(i);return Ae(r>=0,"Unknown leaf type: "+n),Ae(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}dn.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hx,jx;function y3(e){Hx=e}function _3(e){jx=e}class b3 extends xh{compare(t,n){const i=t.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?cl(t.name,n.name):s}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return rt.MIN}maxPost(){return new rt(po,new dn("[PRIORITY-POST]",jx))}makePost(t,n){const i=Hx(t);return new rt(n,new dn("[PRIORITY-POST]",i))}toString(){return".priority"}}const Nn=new b3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w3=Math.log(2);class S3{constructor(t){const n=s=>parseInt(Math.log(s)/w3,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const r=i(this.count);this.bits_=t+1&r}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Pf=function(e,t,n,i){e.sort(t);const r=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=e[l],f=n?n(d):d,new hn(f,d.node,hn.BLACK,null,null);{const m=parseInt(c/2,10)+l,g=r(l,m),y=r(m+1,u);return d=e[m],f=n?n(d):d,new hn(f,d.node,hn.BLACK,g,y)}},s=function(l){let u=null,c=null,d=e.length;const f=function(g,y){const p=d-g,S=d;d-=g;const w=r(p+1,S),T=e[p],x=n?n(T):T;m(new hn(x,T.node,y,null,w))},m=function(g){u?(u.left=g,u=g):(c=g,u=g)};for(let g=0;g<l.count;++g){const y=l.nextBitIsOne(),p=Math.pow(2,l.count-(g+1));y?f(p,hn.BLACK):(f(p,hn.BLACK),f(p,hn.RED))}return c},o=new S3(e.length),a=s(o);return new Xn(i||t,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hv;const ea={};class Ar{static get Default(){return Ae(ea&&Nn,"ChildrenNode.ts has not been loaded"),hv=hv||new Ar({".priority":ea},{".priority":Nn}),hv}constructor(t,n){this.indexes_=t,this.indexSet_=n}get(t){const n=Na(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof Xn?n:null}hasIndex(t){return $r(this.indexSet_,t.toString())}addIndex(t,n){Ae(t!==Va,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(rt.Wrap);let o=s.getNext();for(;o;)r=r||t.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=Pf(i,t.getCompare()):a=ea;const l=t.toString(),u=Object.assign({},this.indexSet_);u[l]=t;const c=Object.assign({},this.indexes_);return c[l]=a,new Ar(c,u)}addToIndexes(t,n){const i=cf(this.indexes_,(r,s)=>{const o=Na(this.indexSet_,s);if(Ae(o,"Missing index implementation for "+s),r===ea)if(o.isDefinedOn(t.node)){const a=[],l=n.getIterator(rt.Wrap);let u=l.getNext();for(;u;)u.name!==t.name&&a.push(u),u=l.getNext();return a.push(t),Pf(a,o.getCompare())}else return ea;else{const a=n.get(t.name);let l=r;return a&&(l=l.remove(new rt(t.name,a))),l.insert(t,t.node)}});return new Ar(i,this.indexSet_)}removeFromIndexes(t,n){const i=cf(this.indexes_,r=>{if(r===ea)return r;{const s=n.get(t.name);return s?r.remove(new rt(t.name,s)):r}});return new Ar(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ul;class gt{static get EMPTY_NODE(){return Ul||(Ul=new gt(new Xn(T_),null,Ar.Default))}constructor(t,n,i){this.children_=t,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Ux(this.priorityNode_),this.children_.isEmpty()&&Ae(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ul}updatePriority(t){return this.children_.isEmpty()?this:new gt(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?Ul:n}}getChild(t){const n=it(t);return n===null?this:this.getImmediateChild(n).getChild(At(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(Ae(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const i=new rt(t,n);let r,s;n.isEmpty()?(r=this.children_.remove(t),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(t,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?Ul:this.priorityNode_;return new gt(r,o,s)}}updateChild(t,n){const i=it(t);if(i===null)return n;{Ae(it(t)!==".priority"||ks(t)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(At(t),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(Nn,(o,a)=>{n[o]=a.val(t),i++,s&&gt.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!t&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+$x(this.getPriority().val())+":"),this.forEachChild(Nn,(n,i)=>{const r=i.hash();r!==""&&(t+=":"+n+":"+r)}),this.lazyHash_=t===""?"":hx(t)}return this.lazyHash_}getPredecessorChildName(t,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new rt(t,n));return s?s.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new rt(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new rt(n,this.children_.get(n)):null}forEachChild(t,n){const i=this.resolveIndex_(t);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(t,r=>r);{const r=this.children_.getIteratorFrom(t.name,rt.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,t)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(t,r=>r);{const r=this.children_.getReverseIteratorFrom(t.name,rt.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,t)>0;)r.getNext(),s=r.peek();return r}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===yc?-1:0}withIndex(t){if(t===Va||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new gt(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===Va||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Nn),r=n.getIterator(Nn);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(t){return t===Va?null:this.indexMap_.get(t.toString())}}gt.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class C3 extends gt{constructor(){super(new Xn(T_),gt.EMPTY_NODE,Ar.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return gt.EMPTY_NODE}isEmpty(){return!1}}const yc=new C3;Object.defineProperties(rt,{MIN:{value:new rt(Ga,gt.EMPTY_NODE)},MAX:{value:new rt(po,yc)}});Bx.__EMPTY_NODE=gt.EMPTY_NODE;dn.__childrenNodeConstructor=gt;p3(yc);_3(yc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T3=!0;function Mn(e,t=null){if(e===null)return gt.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),Ae(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new dn(n,Mn(t))}if(!(e instanceof Array)&&T3){const n=[];let i=!1;if(Si(e,(o,a)=>{if(o.substring(0,1)!=="."){const l=Mn(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new rt(o,l)))}}),n.length===0)return gt.EMPTY_NODE;const s=Pf(n,g3,o=>o.name,T_);if(i){const o=Pf(n,Nn.getCompare());return new gt(s,Mn(t),new Ar({".priority":o},{".priority":Nn}))}else return new gt(s,Mn(t),Ar.Default)}else{let n=gt.EMPTY_NODE;return Si(e,(i,r)=>{if($r(e,i)&&i.substring(0,1)!=="."){const s=Mn(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(Mn(t))}}y3(Mn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I3 extends xh{constructor(t){super(),this.indexPath_=t,Ae(!Ze(t)&&it(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const i=this.extractChild(t.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?cl(t.name,n.name):s}makePost(t,n){const i=Mn(t),r=gt.EMPTY_NODE.updateChild(this.indexPath_,i);return new rt(n,r)}maxPost(){const t=gt.EMPTY_NODE.updateChild(this.indexPath_,yc);return new rt(po,t)}toString(){return Ox(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k3 extends xh{compare(t,n){const i=t.node.compareTo(n.node);return i===0?cl(t.name,n.name):i}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return rt.MIN}maxPost(){return rt.MAX}makePost(t,n){const i=Mn(t);return new rt(n,i)}toString(){return".value"}}const E3=new k3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A3(e){return{type:"value",snapshotNode:e}}function P3(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function x3(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function jC(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function R3(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Nn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return Ae(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Ae(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ga}hasEnd(){return this.endSet_}getIndexEndValue(){return Ae(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Ae(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:po}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return Ae(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Nn}copy(){const t=new I_;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function WC(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Nn?n="$priority":e.index_===E3?n="$value":e.index_===Va?n="$key":(Ae(e.index_ instanceof I3,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=wn(n),e.startSet_){const i=e.startAfterSet_?"startAfter":"startAt";t[i]=wn(e.indexStartValue_),e.startNameSet_&&(t[i]+=","+wn(e.indexStartName_))}if(e.endSet_){const i=e.endBeforeSet_?"endBefore":"endAt";t[i]=wn(e.indexEndValue_),e.endNameSet_&&(t[i]+=","+wn(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function zC(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==Nn&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf extends Vx{reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(Ae(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}constructor(t,n,i,r){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=gc("p:rest:"),this.listens_={}}listen(t,n,i,r){const s=t._path.toString();this.log_("Listen called for "+s+" "+t._queryIdentifier);const o=xf.getListenId_(t,i),a={};this.listens_[o]=a;const l=WC(t._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,i),Na(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",r(f,null)}})}unlisten(t,n){const i=xf.getListenId_(t,n);delete this.listens_[i]}get(t){const n=WC(t._queryParams),i=t._path.toString(),r=new Tu;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(t){}restRequest_(t,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+il(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Iu(a.responseText)}catch{oi("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&oi("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V3{constructor(){this.rootNode_=gt.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(){return{value:null,children:new Map}}function Wx(e,t,n){if(Ze(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const i=it(t);e.children.has(i)||e.children.set(i,Rf());const r=e.children.get(i);t=At(t),Wx(r,t,n)}}function Gg(e,t,n){e.value!==null?n(t,e.value):D3(e,(i,r)=>{const s=new Dt(t.toString()+"/"+i);Gg(r,s,n)})}function D3(e,t){e.children.forEach((n,i)=>{t(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M3{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&Si(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC=10*1e3,O3=30*1e3,N3=5*60*1e3;class L3{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new M3(t);const i=qC+(O3-qC)*Math.random();mu(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const t=this.statsListener_.get(),n={};let i=!1;Si(t,(r,s)=>{s>0&&$r(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),mu(this.reportStats_.bind(this),Math.floor(Math.random()*2*N3))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qi;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Qi||(Qi={}));function zx(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function qx(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Gx(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(t,n,i){this.path=t,this.affectedTree=n,this.revert=i,this.type=Qi.ACK_USER_WRITE,this.source=zx()}operationForChild(t){if(Ze(this.path)){if(this.affectedTree.value!=null)return Ae(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Dt(t));return new Vf(pt(),n,this.revert)}}else return Ae(it(this.path)===t,"operationForChild called for unrelated child."),new Vf(At(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(t,n,i){this.source=t,this.path=n,this.snap=i,this.type=Qi.OVERWRITE}operationForChild(t){return Ze(this.path)?new yo(this.source,pt(),this.snap.getImmediateChild(t)):new yo(this.source,At(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(t,n,i){this.source=t,this.path=n,this.children=i,this.type=Qi.MERGE}operationForChild(t){if(Ze(this.path)){const n=this.children.subtree(new Dt(t));return n.isEmpty()?null:n.value?new yo(this.source,pt(),n.value):new Nu(this.source,pt(),n)}else return Ae(it(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Nu(this.source,At(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(t,n,i){this.node_=t,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(Ze(t))return this.isFullyInitialized()&&!this.filtered_;const n=it(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}function F3(e,t,n,i){const r=[],s=[];return t.forEach(o=>{o.type==="child_changed"&&e.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(R3(o.childName,o.snapshotNode))}),Hl(e,r,"child_removed",t,i,n),Hl(e,r,"child_added",t,i,n),Hl(e,r,"child_moved",s,i,n),Hl(e,r,"child_changed",t,i,n),Hl(e,r,"value",t,i,n),r}function Hl(e,t,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,l)=>$3(e,a,l)),o.forEach(a=>{const l=B3(e,a,s);r.forEach(u=>{u.respondsTo(a.type)&&t.push(u.createEvent(l,e.query_))})})}function B3(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function $3(e,t,n){if(t.childName==null||n.childName==null)throw tl("Should only compare child_ events.");const i=new rt(t.childName,t.snapshotNode),r=new rt(n.childName,n.snapshotNode);return e.index_.compare(i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kx(e,t){return{eventCache:e,serverCache:t}}function vu(e,t,n,i){return Kx(new k_(t,n,i),e.serverCache)}function Yx(e,t,n,i){return Kx(e.eventCache,new k_(t,n,i))}function Kg(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function _o(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mv;const U3=()=>(mv||(mv=new Xn(kW)),mv);class Et{static fromObject(t){let n=new Et(null);return Si(t,(i,r)=>{n=n.set(new Dt(i),r)}),n}constructor(t,n=U3()){this.value=t,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:pt(),value:this.value};if(Ze(t))return null;{const i=it(t),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(At(t),n);return s!=null?{path:mn(new Dt(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(Ze(t))return this;{const n=it(t),i=this.children.get(n);return i!==null?i.subtree(At(t)):new Et(null)}}set(t,n){if(Ze(t))return new Et(n,this.children);{const i=it(t),s=(this.children.get(i)||new Et(null)).set(At(t),n),o=this.children.insert(i,s);return new Et(this.value,o)}}remove(t){if(Ze(t))return this.children.isEmpty()?new Et(null):new Et(null,this.children);{const n=it(t),i=this.children.get(n);if(i){const r=i.remove(At(t));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new Et(null):new Et(this.value,s)}else return this}}get(t){if(Ze(t))return this.value;{const n=it(t),i=this.children.get(n);return i?i.get(At(t)):null}}setTree(t,n){if(Ze(t))return n;{const i=it(t),s=(this.children.get(i)||new Et(null)).setTree(At(t),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new Et(this.value,o)}}fold(t){return this.fold_(pt(),t)}fold_(t,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(mn(t,r),n)}),n(t,this.value,i)}findOnPath(t,n){return this.findOnPath_(t,pt(),n)}findOnPath_(t,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(Ze(t))return null;{const s=it(t),o=this.children.get(s);return o?o.findOnPath_(At(t),mn(n,s),i):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,pt(),n)}foreachOnPath_(t,n,i){if(Ze(t))return this;{this.value&&i(n,this.value);const r=it(t),s=this.children.get(r);return s?s.foreachOnPath_(At(t),mn(n,r),i):new Et(null)}}foreach(t){this.foreach_(pt(),t)}foreach_(t,n){this.children.inorderTraversal((i,r)=>{r.foreach_(mn(t,i),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,i)=>{i.value&&t(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(t){this.writeTree_=t}static empty(){return new Vi(new Et(null))}}function gu(e,t,n){if(Ze(t))return new Vi(new Et(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(i!=null){const r=i.path;let s=i.value;const o=pi(r,t);return s=s.updateChild(o,n),new Vi(e.writeTree_.set(r,s))}else{const r=new Et(n),s=e.writeTree_.setTree(t,r);return new Vi(s)}}}function GC(e,t,n){let i=e;return Si(n,(r,s)=>{i=gu(i,mn(t,r),s)}),i}function KC(e,t){if(Ze(t))return Vi.empty();{const n=e.writeTree_.setTree(t,new Et(null));return new Vi(n)}}function Yg(e,t){return Do(e,t)!=null}function Do(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(pi(n.path,t)):null}function YC(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Nn,(i,r)=>{t.push(new rt(i,r))}):e.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&t.push(new rt(i,r.value))}),t}function ps(e,t){if(Ze(t))return e;{const n=Do(e,t);return n!=null?new Vi(new Et(n)):new Vi(e.writeTree_.subtree(t))}}function Qg(e){return e.writeTree_.isEmpty()}function Ka(e,t){return Qx(pt(),e.writeTree_,t)}function Qx(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal((r,s)=>{r===".priority"?(Ae(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=Qx(mn(e,r),s,n)}),!n.getChild(e).isEmpty()&&i!==null&&(n=n.updateChild(mn(e,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xx(e,t){return n1(t,e)}function H3(e,t,n,i,r){Ae(i>e.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=gu(e.visibleWrites,t,n)),e.lastWriteId=i}function j3(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function W3(e,t){const n=e.allWrites.findIndex(a=>a.writeId===t);Ae(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){const a=e.allWrites[o];a.visible&&(o>=n&&z3(a,i.path)?r=!1:Pi(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return q3(e),!0;if(i.snap)e.visibleWrites=KC(e.visibleWrites,i.path);else{const a=i.children;Si(a,l=>{e.visibleWrites=KC(e.visibleWrites,mn(i.path,l))})}return!0}else return!1}function z3(e,t){if(e.snap)return Pi(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Pi(mn(e.path,n),t))return!0;return!1}function q3(e){e.visibleWrites=Jx(e.allWrites,G3,pt()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function G3(e){return e.visible}function Jx(e,t,n){let i=Vi.empty();for(let r=0;r<e.length;++r){const s=e[r];if(t(s)){const o=s.path;let a;if(s.snap)Pi(n,o)?(a=pi(n,o),i=gu(i,a,s.snap)):Pi(o,n)&&(a=pi(o,n),i=gu(i,pt(),s.snap.getChild(a)));else if(s.children){if(Pi(n,o))a=pi(n,o),i=GC(i,a,s.children);else if(Pi(o,n))if(a=pi(o,n),Ze(a))i=GC(i,pt(),s.children);else{const l=Na(s.children,it(a));if(l){const u=l.getChild(At(a));i=gu(i,pt(),u)}}}else throw tl("WriteRecord should have .snap or .children")}}return i}function Zx(e,t,n,i,r){if(!i&&!r){const s=Do(e.visibleWrites,t);if(s!=null)return s;{const o=ps(e.visibleWrites,t);if(Qg(o))return n;if(n==null&&!Yg(o,pt()))return null;{const a=n||gt.EMPTY_NODE;return Ka(o,a)}}}else{const s=ps(e.visibleWrites,t);if(!r&&Qg(s))return n;if(!r&&n==null&&!Yg(s,pt()))return null;{const o=function(u){return(u.visible||r)&&(!i||!~i.indexOf(u.writeId))&&(Pi(u.path,t)||Pi(t,u.path))},a=Jx(e.allWrites,o,t),l=n||gt.EMPTY_NODE;return Ka(a,l)}}}function K3(e,t,n){let i=gt.EMPTY_NODE;const r=Do(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(Nn,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=ps(e.visibleWrites,t);return n.forEachChild(Nn,(o,a)=>{const l=Ka(ps(s,new Dt(o)),a);i=i.updateImmediateChild(o,l)}),YC(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=ps(e.visibleWrites,t);return YC(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Y3(e,t,n,i,r){Ae(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=mn(t,n);if(Yg(e.visibleWrites,s))return null;{const o=ps(e.visibleWrites,s);return Qg(o)?r.getChild(n):Ka(o,r.getChild(n))}}function Q3(e,t,n,i){const r=mn(t,n),s=Do(e.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=ps(e.visibleWrites,r);return Ka(o,i.getNode().getImmediateChild(n))}else return null}function X3(e,t){return Do(e.visibleWrites,t)}function J3(e,t,n,i,r,s,o){let a;const l=ps(e.visibleWrites,t),u=Do(l,pt());if(u!=null)a=u;else if(n!=null)a=Ka(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let m=f.getNext();for(;m&&c.length<r;)d(m,i)!==0&&c.push(m),m=f.getNext();return c}else return[]}function Z3(){return{visibleWrites:Vi.empty(),allWrites:[],lastWriteId:-1}}function Xg(e,t,n,i){return Zx(e.writeTree,e.treePath,t,n,i)}function e1(e,t){return K3(e.writeTree,e.treePath,t)}function QC(e,t,n,i){return Y3(e.writeTree,e.treePath,t,n,i)}function Df(e,t){return X3(e.writeTree,mn(e.treePath,t))}function e9(e,t,n,i,r,s){return J3(e.writeTree,e.treePath,t,n,i,r,s)}function E_(e,t,n){return Q3(e.writeTree,e.treePath,t,n)}function t1(e,t){return n1(mn(e.treePath,t),e.writeTree)}function n1(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t9{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,i=t.childName;Ae(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),Ae(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,jC(i,t.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,x3(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,P3(i,t.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,jC(i,t.snapshotNode,r.oldSnap));else throw tl("Illegal combination of changes: "+t+" occurred after "+r)}else this.changeMap.set(i,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n9{getCompleteChild(t){return null}getChildAfterChild(t,n,i){return null}}const i1=new n9;class A_{constructor(t,n,i=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const i=this.optCompleteServerCache_!=null?new k_(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return E_(this.writes_,t,i)}}getChildAfterChild(t,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:_o(this.viewCache_),s=e9(this.writes_,r,n,1,i,t);return s.length===0?null:s[0]}}function i9(e,t){Ae(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),Ae(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function r9(e,t,n,i,r){const s=new t9;let o,a;if(n.type===Qi.OVERWRITE){const u=n;u.source.fromUser?o=Jg(e,t,u.path,u.snap,i,r,s):(Ae(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered()&&!Ze(u.path),o=Mf(e,t,u.path,u.snap,i,r,a,s))}else if(n.type===Qi.MERGE){const u=n;u.source.fromUser?o=o9(e,t,u.path,u.children,i,r,s):(Ae(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered(),o=Zg(e,t,u.path,u.children,i,r,a,s))}else if(n.type===Qi.ACK_USER_WRITE){const u=n;u.revert?o=u9(e,t,u.path,i,r,s):o=a9(e,t,u.path,u.affectedTree,i,r,s)}else if(n.type===Qi.LISTEN_COMPLETE)o=l9(e,t,n.path,i,s);else throw tl("Unknown operation type: "+n.type);const l=s.getChanges();return s9(t,o,l),{viewCache:o,changes:l}}function s9(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Kg(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(A3(Kg(t)))}}function r1(e,t,n,i,r,s){const o=t.eventCache;if(Df(i,n)!=null)return t;{let a,l;if(Ze(n))if(Ae(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const u=_o(t),c=u instanceof gt?u:gt.EMPTY_NODE,d=e1(i,c);a=e.filter.updateFullNode(t.eventCache.getNode(),d,s)}else{const u=Xg(i,_o(t));a=e.filter.updateFullNode(t.eventCache.getNode(),u,s)}else{const u=it(n);if(u===".priority"){Ae(ks(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=t.serverCache.getNode();const d=QC(i,n,c,l);d!=null?a=e.filter.updatePriority(c,d):a=o.getNode()}else{const c=At(n);let d;if(o.isCompleteForChild(u)){l=t.serverCache.getNode();const f=QC(i,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=E_(i,u,t.serverCache);d!=null?a=e.filter.updateChild(o.getNode(),u,d,c,r,s):a=o.getNode()}}return vu(t,a,o.isFullyInitialized()||Ze(n),e.filter.filtersNodes())}}function Mf(e,t,n,i,r,s,o,a){const l=t.serverCache;let u;const c=o?e.filter:e.filter.getIndexedFilter();if(Ze(n))u=c.updateFullNode(l.getNode(),i,null);else if(c.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,i);u=c.updateFullNode(l.getNode(),m,null)}else{const m=it(n);if(!l.isCompleteForPath(n)&&ks(n)>1)return t;const g=At(n),p=l.getNode().getImmediateChild(m).updateChild(g,i);m===".priority"?u=c.updatePriority(l.getNode(),p):u=c.updateChild(l.getNode(),m,p,g,i1,null)}const d=Yx(t,u,l.isFullyInitialized()||Ze(n),c.filtersNodes()),f=new A_(r,d,s);return r1(e,d,n,r,f,a)}function Jg(e,t,n,i,r,s,o){const a=t.eventCache;let l,u;const c=new A_(r,t,s);if(Ze(n))u=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=vu(t,u,!0,e.filter.filtersNodes());else{const d=it(n);if(d===".priority")u=e.filter.updatePriority(t.eventCache.getNode(),i),l=vu(t,u,a.isFullyInitialized(),a.isFiltered());else{const f=At(n),m=a.getNode().getImmediateChild(d);let g;if(Ze(f))g=i;else{const y=c.getCompleteChild(d);y!=null?Mx(f)===".priority"&&y.getChild(Nx(f)).isEmpty()?g=y:g=y.updateChild(f,i):g=gt.EMPTY_NODE}if(m.equals(g))l=t;else{const y=e.filter.updateChild(a.getNode(),d,g,f,c,o);l=vu(t,y,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function XC(e,t){return e.eventCache.isCompleteForChild(t)}function o9(e,t,n,i,r,s,o){let a=t;return i.foreach((l,u)=>{const c=mn(n,l);XC(t,it(c))&&(a=Jg(e,a,c,u,r,s,o))}),i.foreach((l,u)=>{const c=mn(n,l);XC(t,it(c))||(a=Jg(e,a,c,u,r,s,o))}),a}function JC(e,t,n){return n.foreach((i,r)=>{t=t.updateChild(i,r)}),t}function Zg(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l=t,u;Ze(n)?u=i:u=new Et(null).setTree(n,i);const c=t.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const m=t.serverCache.getNode().getImmediateChild(d),g=JC(e,m,f);l=Mf(e,l,new Dt(d),g,r,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const m=!t.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!m){const g=t.serverCache.getNode().getImmediateChild(d),y=JC(e,g,f);l=Mf(e,l,new Dt(d),y,r,s,o,a)}}),l}function a9(e,t,n,i,r,s,o){if(Df(r,n)!=null)return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(i.value!=null){if(Ze(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Mf(e,t,n,l.getNode().getChild(n),r,s,a,o);if(Ze(n)){let u=new Et(null);return l.getNode().forEachChild(Va,(c,d)=>{u=u.set(new Dt(c),d)}),Zg(e,t,n,u,r,s,a,o)}else return t}else{let u=new Et(null);return i.foreach((c,d)=>{const f=mn(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),Zg(e,t,n,u,r,s,a,o)}}function l9(e,t,n,i,r){const s=t.serverCache,o=Yx(t,s.getNode(),s.isFullyInitialized()||Ze(n),s.isFiltered());return r1(e,o,n,i,i1,r)}function u9(e,t,n,i,r,s){let o;if(Df(i,n)!=null)return t;{const a=new A_(i,t,r),l=t.eventCache.getNode();let u;if(Ze(n)||it(n)===".priority"){let c;if(t.serverCache.isFullyInitialized())c=Xg(i,_o(t));else{const d=t.serverCache.getNode();Ae(d instanceof gt,"serverChildren would be complete if leaf node"),c=e1(i,d)}c=c,u=e.filter.updateFullNode(l,c,s)}else{const c=it(n);let d=E_(i,c,t.serverCache);d==null&&t.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=e.filter.updateChild(l,c,d,At(n),a,s):t.eventCache.getNode().hasChild(c)?u=e.filter.updateChild(l,c,gt.EMPTY_NODE,At(n),a,s):u=l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Xg(i,_o(t)),o.isLeafNode()&&(u=e.filter.updateFullNode(u,o,s)))}return o=t.serverCache.isFullyInitialized()||Df(i,pt())!=null,vu(t,u,o,e.filter.filtersNodes())}}function c9(e,t){const n=_o(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Ze(t)&&!n.getImmediateChild(it(t)).isEmpty())?n.getChild(t):null}function ZC(e,t,n,i){t.type===Qi.MERGE&&t.source.queryId!==null&&(Ae(_o(e.viewCache_),"We should always have a full cache before handling merges"),Ae(Kg(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,s=r9(e.processor_,r,t,n,i);return i9(e.processor_,s.viewCache),Ae(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,d9(e,s.changes,s.viewCache.eventCache.getNode())}function d9(e,t,n,i){const r=e.eventRegistrations_;return F3(e.eventGenerator_,t,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eT;function f9(e){Ae(!eT,"__referenceConstructor has already been defined"),eT=e}function P_(e,t,n,i){const r=t.source.queryId;if(r!==null){const s=e.views.get(r);return Ae(s!=null,"SyncTree gave us an op for an invalid query."),ZC(s,t,n,i)}else{let s=[];for(const o of e.views.values())s=s.concat(ZC(o,t,n,i));return s}}function x_(e,t){let n=null;for(const i of e.views.values())n=n||c9(i,t);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tT;function h9(e){Ae(!tT,"__referenceConstructor has already been defined"),tT=e}class nT{constructor(t){this.listenProvider_=t,this.syncPointTree_=new Et(null),this.pendingWriteTree_=Z3(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function m9(e,t,n,i,r){return H3(e.pendingWriteTree_,t,n,i,r),r?Vh(e,new yo(zx(),t,n)):[]}function ga(e,t,n=!1){const i=j3(e.pendingWriteTree_,t);if(W3(e.pendingWriteTree_,t)){let s=new Et(null);return i.snap!=null?s=s.set(pt(),!0):Si(i.children,o=>{s=s.set(new Dt(o),!0)}),Vh(e,new Vf(i.path,s,n))}else return[]}function Rh(e,t,n){return Vh(e,new yo(qx(),t,n))}function v9(e,t,n){const i=Et.fromObject(n);return Vh(e,new Nu(qx(),t,i))}function g9(e,t,n,i){const r=l1(e,i);if(r!=null){const s=u1(r),o=s.path,a=s.queryId,l=pi(o,t),u=new yo(Gx(a),l,n);return c1(e,o,u)}else return[]}function p9(e,t,n,i){const r=l1(e,i);if(r){const s=u1(r),o=s.path,a=s.queryId,l=pi(o,t),u=Et.fromObject(n),c=new Nu(Gx(a),l,u);return c1(e,o,c)}else return[]}function s1(e,t,n){const r=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,(o,a)=>{const l=pi(o,t),u=x_(a,l);if(u)return u});return Zx(r,t,s,n,!0)}function Vh(e,t){return o1(t,e.syncPointTree_,null,Xx(e.pendingWriteTree_,pt()))}function o1(e,t,n,i){if(Ze(e.path))return a1(e,t,n,i);{const r=t.get(pt());n==null&&r!=null&&(n=x_(r,pt()));let s=[];const o=it(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=t1(i,o);s=s.concat(o1(a,l,u,c))}return r&&(s=s.concat(P_(r,e,i,n))),s}}function a1(e,t,n,i){const r=t.get(pt());n==null&&r!=null&&(n=x_(r,pt()));let s=[];return t.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=t1(i,o),c=e.operationForChild(o);c&&(s=s.concat(a1(c,a,l,u)))}),r&&(s=s.concat(P_(r,e,i,n))),s}function l1(e,t){return e.tagToQueryMap.get(t)}function u1(e){const t=e.indexOf("$");return Ae(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Dt(e.substr(0,t))}}function c1(e,t,n){const i=e.syncPointTree_.get(t);Ae(i,"Missing sync point for query tag that we're tracking");const r=Xx(e.pendingWriteTree_,t);return P_(i,n,r,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new R_(n)}node(){return this.node_}}class V_{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=mn(this.path_,t);return new V_(this.syncTree_,n)}node(){return s1(this.syncTree_,this.path_)}}const y9=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},iT=function(e,t,n){if(!e||typeof e!="object")return e;if(Ae(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return _9(e[".sv"],t,n);if(typeof e[".sv"]=="object")return b9(e[".sv"],t);Ae(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},_9=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:Ae(!1,"Unexpected server value: "+e)}},b9=function(e,t,n){e.hasOwnProperty("increment")||Ae(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;typeof i!="number"&&Ae(!1,"Unexpected increment value: "+i);const r=t.node();if(Ae(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},w9=function(e,t,n,i){return D_(t,new V_(n,e),i)},S9=function(e,t,n){return D_(e,new R_(t),n)};function D_(e,t,n){const i=e.getPriority().val(),r=iT(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const o=e,a=iT(o.getValue(),t,n);return a!==o.getValue()||r!==o.getPriority().val()?new dn(a,Mn(r)):e}else{const o=e;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new dn(r))),o.forEachChild(Nn,(a,l)=>{const u=D_(l,t.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(t="",n=null,i={children:{},childCount:0}){this.name=t,this.parent=n,this.node=i}}function O_(e,t){let n=t instanceof Dt?t:new Dt(t),i=e,r=it(n);for(;r!==null;){const s=Na(i.node.children,r)||{children:{},childCount:0};i=new M_(r,i,s),n=At(n),r=it(n)}return i}function dl(e){return e.node.value}function d1(e,t){e.node.value=t,ep(e)}function f1(e){return e.node.childCount>0}function C9(e){return dl(e)===void 0&&!f1(e)}function Dh(e,t){Si(e.node.children,(n,i)=>{t(new M_(n,e,i))})}function h1(e,t,n,i){n&&!i&&t(e),Dh(e,r=>{h1(r,t,!0,i)}),n&&i&&t(e)}function T9(e,t,n){let i=e.parent;for(;i!==null;){if(t(i))return!0;i=i.parent}return!1}function _c(e){return new Dt(e.parent===null?e.name:_c(e.parent)+"/"+e.name)}function ep(e){e.parent!==null&&I9(e.parent,e.name,e)}function I9(e,t,n){const i=C9(n),r=$r(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,ep(e)):!i&&!r&&(e.node.children[t]=n.node,e.node.childCount++,ep(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k9=/[\[\].#$\/\u0000-\u001F\u007F]/,E9=/[\[\].#$\u0000-\u001F\u007F]/,vv=10*1024*1024,m1=function(e){return typeof e=="string"&&e.length!==0&&!k9.test(e)},A9=function(e){return typeof e=="string"&&e.length!==0&&!E9.test(e)},P9=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),A9(e)},v1=function(e,t,n){const i=n instanceof Dt?new l3(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+Ys(i));if(typeof t=="function")throw new Error(e+"contains a function "+Ys(i)+" with contents = "+t.toString());if(mx(t))throw new Error(e+"contains "+t.toString()+" "+Ys(i));if(typeof t=="string"&&t.length>vv/3&&dh(t)>vv)throw new Error(e+"contains a string greater than "+vv+" utf8 bytes "+Ys(i)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let r=!1,s=!1;if(Si(t,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!m1(o)))throw new Error(e+" contains an invalid key ("+o+") "+Ys(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);u3(i,o),v1(e,a,i),c3(i)}),r&&s)throw new Error(e+' contains ".value" child '+Ys(i)+" in addition to actual children.")}},x9=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!m1(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!P9(n))throw new Error(_2(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R9{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function V9(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();n!==null&&!Lx(s,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function Mo(e,t,n){V9(e,n),D9(e,i=>Pi(i,t)||Pi(t,i))}function D9(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){const s=r.path;t(s)?(M9(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function M9(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const i=n.getEventRunner();hu&&Dn("event: "+n.toString()),pc(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O9="repo_interrupt",N9=25;class L9{constructor(t,n,i,r){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new R9,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Rf(),this.transactionQueueTree_=new M_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function F9(e,t,n){if(e.stats_=w_(e.repoInfo_),e.forceRestClient_||VW())e.server_=new xf(e.repoInfo_,(i,r,s,o)=>{rT(e,i,r,s,o)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>sT(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{wn(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new xr(e.repoInfo_,t,(i,r,s,o)=>{rT(e,i,r,s,o)},i=>{sT(e,i)},i=>{$9(e,i)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(i=>{e.server_.refreshAuthToken(i)}),e.appCheckProvider_.addTokenChangeListener(i=>{e.server_.refreshAppCheckToken(i.token)}),e.statsReporter_=FW(e.repoInfo_,()=>new L3(e.stats_,e.server_)),e.infoData_=new V3,e.infoSyncTree_=new nT({startListening:(i,r,s,o)=>{let a=[];const l=e.infoData_.getNode(i._path);return l.isEmpty()||(a=Rh(e.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),N_(e,"connected",!1),e.serverSyncTree_=new nT({startListening:(i,r,s,o)=>(e.server_.listen(i,s,r,(a,l)=>{const u=o(a,l);Mo(e.eventQueue_,i._path,u)}),[]),stopListening:(i,r)=>{e.server_.unlisten(i,r)}})}function B9(e){const n=e.infoData_.getNode(new Dt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function g1(e){return y9({timestamp:B9(e)})}function rT(e,t,n,i,r){e.dataUpdateCount++;const s=new Dt(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r)if(i){const l=cf(n,u=>Mn(u));o=p9(e.serverSyncTree_,s,l,r)}else{const l=Mn(n);o=g9(e.serverSyncTree_,s,l,r)}else if(i){const l=cf(n,u=>Mn(u));o=v9(e.serverSyncTree_,s,l)}else{const l=Mn(n);o=Rh(e.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=F_(e,s)),Mo(e.eventQueue_,a,o)}function sT(e,t){N_(e,"connected",t),t===!1&&H9(e)}function $9(e,t){Si(t,(n,i)=>{N_(e,n,i)})}function N_(e,t,n){const i=new Dt("/.info/"+t),r=Mn(n);e.infoData_.updateSnapshot(i,r);const s=Rh(e.infoSyncTree_,i,r);Mo(e.eventQueue_,i,s)}function U9(e){return e.nextWriteId_++}function H9(e){p1(e,"onDisconnectEvents");const t=g1(e),n=Rf();Gg(e.onDisconnect_,pt(),(r,s)=>{const o=w9(r,s,e.serverSyncTree_,t);Wx(n,r,o)});let i=[];Gg(n,pt(),(r,s)=>{i=i.concat(Rh(e.serverSyncTree_,r,s));const o=q9(e,r);F_(e,o)}),e.onDisconnect_=Rf(),Mo(e.eventQueue_,pt(),i)}function j9(e){e.persistentConnection_&&e.persistentConnection_.interrupt(O9)}function p1(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Dn(n,...t)}function y1(e,t,n){return s1(e.serverSyncTree_,t,n)||gt.EMPTY_NODE}function L_(e,t=e.transactionQueueTree_){if(t||Mh(e,t),dl(t)){const n=b1(e,t);Ae(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&W9(e,_c(t),n)}else f1(t)&&Dh(t,n=>{L_(e,n)})}function W9(e,t,n){const i=n.map(u=>u.currentWriteId),r=y1(e,t,i);let s=r;const o=r.hash();for(let u=0;u<n.length;u++){const c=n[u];Ae(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=pi(t,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,u=>{p1(e,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(ga(e.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Mh(e,O_(e.transactionQueueTree_,t)),L_(e,e.transactionQueueTree_),Mo(e.eventQueue_,t,c);for(let f=0;f<d.length;f++)pc(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{oi("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}F_(e,t)}},o)}function F_(e,t){const n=_1(e,t),i=_c(n),r=b1(e,n);return z9(e,r,i),i}function z9(e,t,n){if(t.length===0)return;const i=[];let r=[];const o=t.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<t.length;a++){const l=t[a],u=pi(n,l.path);let c=!1,d;if(Ae(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,r=r.concat(ga(e.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=N9)c=!0,d="maxretry",r=r.concat(ga(e.serverSyncTree_,l.currentWriteId,!0));else{const f=y1(e,l.path,o);l.currentInputSnapshot=f;const m=t[a].update(f.val());if(m!==void 0){v1("transaction failed: Data returned ",m,l.path);let g=Mn(m);typeof m=="object"&&m!=null&&$r(m,".priority")||(g=g.updatePriority(f.getPriority()));const p=l.currentWriteId,S=g1(e),w=S9(g,f,S);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=w,l.currentWriteId=U9(e),o.splice(o.indexOf(p),1),r=r.concat(m9(e.serverSyncTree_,l.path,w,l.currentWriteId,l.applyLocally)),r=r.concat(ga(e.serverSyncTree_,p,!0))}else c=!0,d="nodata",r=r.concat(ga(e.serverSyncTree_,l.currentWriteId,!0))}Mo(e.eventQueue_,n,r),r=[],c&&(t[a].status=2,function(f){setTimeout(f,Math.floor(0))}(t[a].unwatcher),t[a].onComplete&&(d==="nodata"?i.push(()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot)):i.push(()=>t[a].onComplete(new Error(d),!1,null))))}Mh(e,e.transactionQueueTree_);for(let a=0;a<i.length;a++)pc(i[a]);L_(e,e.transactionQueueTree_)}function _1(e,t){let n,i=e.transactionQueueTree_;for(n=it(t);n!==null&&dl(i)===void 0;)i=O_(i,n),t=At(t),n=it(t);return i}function b1(e,t){const n=[];return w1(e,t,n),n.sort((i,r)=>i.order-r.order),n}function w1(e,t,n){const i=dl(t);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Dh(t,r=>{w1(e,r,n)})}function Mh(e,t){const n=dl(t);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,d1(t,n.length>0?n:void 0)}Dh(t,i=>{Mh(e,i)})}function q9(e,t){const n=_c(_1(e,t)),i=O_(e.transactionQueueTree_,t);return T9(i,r=>{gv(e,r)}),gv(e,i),h1(i,r=>{gv(e,r)}),n}function gv(e,t){const n=dl(t);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(Ae(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(Ae(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(ga(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?d1(t,void 0):n.length=s+1,Mo(e.eventQueue_,_c(t),r);for(let o=0;o<i.length;o++)pc(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G9(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}t+="/"+r}return t}function K9(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):oi(`Invalid query segment '${n}' in query '${e}'`)}return t}const oT=function(e,t){const n=Y9(e),i=n.namespace;n.domain==="firebase.com"&&go(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&go("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||TW();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new OW(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new Dt(n.pathString)}},Y9=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",l=443;if(typeof e=="string"){let u=e.indexOf("//");u>=0&&(a=e.substring(0,u-1),e=e.substring(u+2));let c=e.indexOf("/");c===-1&&(c=e.length);let d=e.indexOf("?");d===-1&&(d=e.length),t=e.substring(0,Math.min(c,d)),c<d&&(r=G9(e.substring(c,d)));const f=K9(e.substring(Math.min(e.length,d)));u=t.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(t.substring(u+1),10)):u=t.length;const m=t.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const g=t.indexOf(".");i=t.substring(0,g).toLowerCase(),n=t.substring(g+1),s=i}"ns"in f&&(s=f.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(t,n,i,r){this._repo=t,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return Ze(this._path)?null:Mx(this._path)}get ref(){return new fl(this._repo,this._path)}get _queryIdentifier(){const t=zC(this._queryParams),n=__(t);return n==="{}"?"default":n}get _queryObject(){return zC(this._queryParams)}isEqual(t){if(t=Oi(t),!(t instanceof B_))return!1;const n=this._repo===t._repo,i=Lx(this._path,t._path),r=this._queryIdentifier===t._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+a3(this._path)}}class fl extends B_{constructor(t,n){super(t,n,new I_,!1)}get parent(){const t=Nx(this._path);return t===null?null:new fl(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}f9(fl);h9(fl);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q9="FIREBASE_DATABASE_EMULATOR_HOST",tp={};let X9=!1;function J9(e,t,n,i,r){let s=i||e.options.databaseURL;s===void 0&&(e.options.projectId||go("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Dn("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o=oT(s,r),a=o.repoInfo,l;typeof process<"u"&&kC&&(l=kC[Q9]),l?(s=`http://${l}?ns=${a.namespace}`,o=oT(s,r),a=o.repoInfo):o.repoInfo.secure;const u=new MW(e.name,e.options,t);x9("Invalid Firebase Database URL",o),Ze(o.path)||go("Database URL must point to the root of a Firebase Database (not including a child path).");const c=ez(a,e,u,new DW(e.name,n));return new tz(c,e)}function Z9(e,t){const n=tp[t];(!n||n[e.key]!==e)&&go(`Database ${t}(${e.repoInfo_}) has already been deleted.`),j9(e),delete n[e.key]}function ez(e,t,n,i){let r=tp[t.name];r||(r={},tp[t.name]=r);let s=r[e.toURLString()];return s&&go("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new L9(e,X9,n,i),r[e.toURLString()]=s,s}class tz{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(F9(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new fl(this._repo,pt())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Z9(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&go("Cannot call "+t+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nz(e){yW(Ds),nr(new Ni("database",(t,{instanceIdentifier:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return J9(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),si(EC,AC,e),si(EC,AC,"esm2017")}xr.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};xr.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};nz();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1="firebasestorage.googleapis.com",iz="storageBucket",rz=2*60*1e3,sz=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends lr{constructor(t,n,i=0){super(pv(t),`Firebase Storage: ${n} (${pv(t)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ur.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return pv(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var rr;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(rr||(rr={}));function pv(e){return"storage/"+e}function oz(){const e="An unknown error occurred, please check the error payload for server response.";return new ur(rr.UNKNOWN,e)}function az(){return new ur(rr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function lz(){return new ur(rr.CANCELED,"User canceled the upload/download.")}function uz(e){return new ur(rr.INVALID_URL,"Invalid URL '"+e+"'.")}function cz(e){return new ur(rr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function aT(e){return new ur(rr.INVALID_ARGUMENT,e)}function C1(){return new ur(rr.APP_DELETED,"The Firebase app was deleted.")}function dz(e){return new ur(rr.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let i;try{i=xi.makeFromUrl(t,n)}catch{return new xi(t,"")}if(i.path==="")return i;throw cz(t)}static makeFromUrl(t,n){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function u(x){x.path_=decodeURIComponent(x.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",m=new RegExp(`^https?://${d}/${c}/b/${r}/o${f}`,"i"),g={bucket:1,path:3},y=n===S1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,p="([^?#]*)",S=new RegExp(`^https?://${y}/${r}/${p}`,"i"),T=[{regex:a,indices:l,postModify:s},{regex:m,indices:g,postModify:u},{regex:S,indices:{bucket:1,path:2},postModify:u}];for(let x=0;x<T.length;x++){const V=T[x],D=V.regex.exec(t);if(D){const A=D[V.indices.bucket];let b=D[V.indices.path];b||(b=""),i=new xi(A,b),V.postModify(i);break}}if(i==null)throw uz(t);return i}}class fz{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hz(e,t,n){let i=1,r=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...p){u||(u=!0,t.apply(null,p))}function d(p){r=setTimeout(()=>{r=null,e(m,l())},p)}function f(){s&&clearTimeout(s)}function m(p,...S){if(u){f();return}if(p){f(),c.call(null,p,...S);return}if(l()||o){f(),c.call(null,p,...S);return}i<64&&(i*=2);let T;a===1?(a=2,T=0):T=(i+Math.random())*1e3,d(T)}let g=!1;function y(p){g||(g=!0,f(),!u&&(r!==null?(p||(a=2),clearTimeout(r),d(0)):p||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function mz(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vz(e){return e!==void 0}function lT(e,t,n,i){if(i<t)throw aT(`Invalid value for '${e}'. Expected ${t} or greater.`);if(i>n)throw aT(`Invalid value for '${e}'. Expected ${n} or less.`)}function gz(e){const t=encodeURIComponent;let n="?";for(const i in e)if(e.hasOwnProperty(i)){const r=t(i)+"="+t(e[i]);n=n+r+"&"}return n=n.slice(0,-1),n}var Of;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Of||(Of={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pz(e,t){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||r||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yz{constructor(t,n,i,r,s,o,a,l,u,c,d,f=!0){this.url_=t,this.method_=n,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,g)=>{this.resolve_=m,this.reject_=g,this.start_()})}start_(){const t=(i,r)=>{if(r){i(!1,new fd(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Of.NO_ERROR,l=s.getStatus();if(!a||pz(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Of.ABORT;i(!1,new fd(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;i(!0,new fd(u,s))})},n=(i,r)=>{const s=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());vz(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=oz();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?C1():lz();o(l)}else{const l=az();o(l)}};this.canceled_?n(!1,new fd(!1,null,!0)):this.backoffId_=hz(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&mz(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class fd{constructor(t,n,i){this.wasSuccessCode=t,this.connection=n,this.canceled=!!i}}function _z(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function bz(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function wz(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Sz(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Cz(e,t,n,i,r,s,o=!0){const a=gz(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return wz(u,t),_z(u,n),bz(u,s),Sz(u,i),new yz(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tz(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Iz(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(t,n){this._service=t,n instanceof xi?this._location=n:this._location=xi.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Nf(t,n)}get root(){const t=new xi(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Iz(this._location.path)}get storage(){return this._service}get parent(){const t=Tz(this._location.path);if(t===null)return null;const n=new xi(this._location.bucket,t);return new Nf(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw dz(t)}}function uT(e,t){const n=t==null?void 0:t[iz];return n==null?null:xi.makeFromBucketSpec(n,e)}class kz{constructor(t,n,i,r,s){this.app=t,this._authProvider=n,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=S1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=rz,this._maxUploadRetryTime=sz,this._requests=new Set,r!=null?this._bucket=xi.makeFromBucketSpec(r,this._host):this._bucket=uT(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=xi.makeFromBucketSpec(this._url,t):this._bucket=uT(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){lT("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){lT("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Nf(this,t)}_makeRequest(t,n,i,r,s=!0){if(this._deleted)return new fz(C1());{const o=Cz(t,this._appId,i,r,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,i,r).getPromise()}}const cT="@firebase/storage",dT="0.13.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ez="storage";function Az(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new kz(n,i,r,t,Ds)}function Pz(){nr(new Ni(Ez,Az,"PUBLIC").setMultipleInstances(!0)),si(cT,dT,""),si(cT,dT,"esm2017")}Pz();function _ee(e){return r4(cx(e))}const T1=Symbol("VueFireAuth");function xz({dependencies:e,initialUser:t}){return(n,i)=>{const[r,s]=Rz(n,i,t,e);pW(r,s)}}function Rz(e,t,n,i,r=E6(e,i)){const s=mW(e,t).run(()=>re(n));return vW.set(e,s),t.provide(T1,r),[s,r]}function Vz(e,{firebaseApp:t,modules:n=[]}){e.provide(ux,t);for(const i of n)i(t,e)}const Dz=Zn(e=>{const t=e.$firebaseApp;return xz({initialUser:e.payload.vuefireUser,dependencies:{errorMap:xP,persistence:[Y6,N6],popupRedirectResolver:F5}})(t,e.vueApp),{provide:{firebaseAuth:e.vueApp.runWithContext(()=>Le(T1))}}}),Mz=Zn(e=>{const t=e.$firebaseApp;e.vueApp.use(Vz,{firebaseApp:t})}),pu=/^[a-z0-9]+(-[a-z0-9]+)*$/,Oh=(e,t,n,i="")=>{const r=e.split(":");if(e.slice(0,1)==="@"){if(r.length<2||r.length>3)return null;i=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const a=r.pop(),l=r.pop(),u={provider:r.length>0?r[0]:i,prefix:l,name:a};return t&&!Nd(u)?null:u}const s=r[0],o=s.split("-");if(o.length>1){const a={provider:i,prefix:o.shift(),name:o.join("-")};return t&&!Nd(a)?null:a}if(n&&i===""){const a={provider:i,prefix:"",name:s};return t&&!Nd(a,n)?null:a}return null},Nd=(e,t)=>e?!!((e.provider===""||e.provider.match(pu))&&(t&&e.prefix===""||e.prefix.match(pu))&&e.name.match(pu)):!1,I1=Object.freeze({left:0,top:0,width:16,height:16}),Lf=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Nh=Object.freeze({...I1,...Lf}),np=Object.freeze({...Nh,body:"",hidden:!1});function Oz(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const i=((e.rotate||0)+(t.rotate||0))%4;return i&&(n.rotate=i),n}function fT(e,t){const n=Oz(e,t);for(const i in np)i in Lf?i in e&&!(i in n)&&(n[i]=Lf[i]):i in t?n[i]=t[i]:i in e&&(n[i]=e[i]);return n}function Nz(e,t){const n=e.icons,i=e.aliases||Object.create(null),r=Object.create(null);function s(o){if(n[o])return r[o]=[];if(!(o in r)){r[o]=null;const a=i[o]&&i[o].parent,l=a&&s(a);l&&(r[o]=[a].concat(l))}return r[o]}return Object.keys(n).concat(Object.keys(i)).forEach(s),r}function Lz(e,t,n){const i=e.icons,r=e.aliases||Object.create(null);let s={};function o(a){s=fT(i[a]||r[a],s)}return o(t),n.forEach(o),fT(e,s)}function k1(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(r=>{t(r,null),n.push(r)});const i=Nz(e);for(const r in i){const s=i[r];s&&(t(r,Lz(e,r,s)),n.push(r))}return n}const Fz={provider:"",aliases:{},not_found:{},...I1};function yv(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function E1(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!yv(e,Fz))return null;const n=t.icons;for(const r in n){const s=n[r];if(!r.match(pu)||typeof s.body!="string"||!yv(s,np))return null}const i=t.aliases||Object.create(null);for(const r in i){const s=i[r],o=s.parent;if(!r.match(pu)||typeof o!="string"||!n[o]&&!i[o]||!yv(s,np))return null}return t}const hT=Object.create(null);function Bz(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function bo(e,t){const n=hT[e]||(hT[e]=Object.create(null));return n[t]||(n[t]=Bz(e,t))}function $_(e,t){return E1(t)?k1(t,(n,i)=>{i?e.icons[n]=i:e.missing.add(n)}):[]}function $z(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let Lu=!1;function A1(e){return typeof e=="boolean"&&(Lu=e),Lu}function Uz(e){const t=typeof e=="string"?Oh(e,!0,Lu):e;if(t){const n=bo(t.provider,t.prefix),i=t.name;return n.icons[i]||(n.missing.has(i)?null:void 0)}}function Hz(e,t){const n=Oh(e,!0,Lu);if(!n)return!1;const i=bo(n.provider,n.prefix);return $z(i,n.name,t)}function jz(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),Lu&&!t&&!e.prefix){let r=!1;return E1(e)&&(e.prefix="",k1(e,(s,o)=>{o&&Hz(s,o)&&(r=!0)})),r}const n=e.prefix;if(!Nd({provider:t,prefix:n,name:"a"}))return!1;const i=bo(t,n);return!!$_(i,e)}const P1=Object.freeze({width:null,height:null}),x1=Object.freeze({...P1,...Lf}),Wz=/(-?[0-9.]*[0-9]+[0-9.]*)/g,zz=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function mT(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const i=e.split(Wz);if(i===null||!i.length)return e;const r=[];let s=i.shift(),o=zz.test(s);for(;;){if(o){const a=parseFloat(s);isNaN(a)?r.push(s):r.push(Math.ceil(a*t*n)/n)}else r.push(s);if(s=i.shift(),s===void 0)return r.join("");o=!o}}function qz(e,t="defs"){let n="";const i=e.indexOf("<"+t);for(;i>=0;){const r=e.indexOf(">",i),s=e.indexOf("</"+t);if(r===-1||s===-1)break;const o=e.indexOf(">",s);if(o===-1)break;n+=e.slice(r+1,s).trim(),e=e.slice(0,i).trim()+e.slice(o+1)}return{defs:n,content:e}}function Gz(e,t){return e?"<defs>"+e+"</defs>"+t:t}function Kz(e,t,n){const i=qz(e);return Gz(i.defs,t+i.content+n)}const Yz=e=>e==="unset"||e==="undefined"||e==="none";function Qz(e,t){const n={...Nh,...e},i={...x1,...t},r={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,i].forEach(y=>{const p=[],S=y.hFlip,w=y.vFlip;let T=y.rotate;S?w?T+=2:(p.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),p.push("scale(-1 1)"),r.top=r.left=0):w&&(p.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),p.push("scale(1 -1)"),r.top=r.left=0);let x;switch(T<0&&(T-=Math.floor(T/4)*4),T=T%4,T){case 1:x=r.height/2+r.top,p.unshift("rotate(90 "+x.toString()+" "+x.toString()+")");break;case 2:p.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:x=r.width/2+r.left,p.unshift("rotate(-90 "+x.toString()+" "+x.toString()+")");break}T%2===1&&(r.left!==r.top&&(x=r.left,r.left=r.top,r.top=x),r.width!==r.height&&(x=r.width,r.width=r.height,r.height=x)),p.length&&(s=Kz(s,'<g transform="'+p.join(" ")+'">',"</g>"))});const o=i.width,a=i.height,l=r.width,u=r.height;let c,d;o===null?(d=a===null?"1em":a==="auto"?u:a,c=mT(d,l/u)):(c=o==="auto"?l:o,d=a===null?mT(c,u/l):a==="auto"?u:a);const f={},m=(y,p)=>{Yz(p)||(f[y]=p.toString())};m("width",c),m("height",d);const g=[r.left,r.top,l,u];return f.viewBox=g.join(" "),{attributes:f,viewBox:g,body:s}}const Xz=/\sid="(\S+)"/g,Jz="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Zz=0;function eq(e,t=Jz){const n=[];let i;for(;i=Xz.exec(e);)n.push(i[1]);if(!n.length)return e;const r="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(s=>{const o=typeof t=="function"?t(s):t+(Zz++).toString(),a=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+o+r+"$3")}),e=e.replace(new RegExp(r,"g"),""),e}const ip=Object.create(null);function tq(e,t){ip[e]=t}function rp(e){return ip[e]||ip[""]}function U_(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const H_=Object.create(null),jl=["https://api.simplesvg.com","https://api.unisvg.com"],Ld=[];for(;jl.length>0;)jl.length===1||Math.random()>.5?Ld.push(jl.shift()):Ld.push(jl.pop());H_[""]=U_({resources:["https://api.iconify.design"].concat(Ld)});function nq(e,t){const n=U_(t);return n===null?!1:(H_[e]=n,!0)}function j_(e){return H_[e]}const iq=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let vT=iq();function rq(e,t){const n=j_(e);if(!n)return 0;let i;if(!n.maxURL)i=0;else{let r=0;n.resources.forEach(o=>{r=Math.max(r,o.length)});const s=t+".json?icons=";i=n.maxURL-r-n.path.length-s.length}return i}function sq(e){return e===404}const oq=(e,t,n)=>{const i=[],r=rq(e,t),s="icons";let o={type:s,provider:e,prefix:t,icons:[]},a=0;return n.forEach((l,u)=>{a+=l.length+1,a>=r&&u>0&&(i.push(o),o={type:s,provider:e,prefix:t,icons:[]},a=l.length),o.icons.push(l)}),i.push(o),i};function aq(e){if(typeof e=="string"){const t=j_(e);if(t)return t.path}return"/"}const lq=(e,t,n)=>{if(!vT){n("abort",424);return}let i=aq(t.provider);switch(t.type){case"icons":{const s=t.prefix,a=t.icons.join(","),l=new URLSearchParams({icons:a});i+=s+".json?"+l.toString();break}case"custom":{const s=t.uri;i+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let r=503;vT(e+i).then(s=>{const o=s.status;if(o!==200){setTimeout(()=>{n(sq(o)?"abort":"next",o)});return}return r=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",r)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",r)})},uq={prepare:oq,send:lq};function cq(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((r,s)=>r.provider!==s.provider?r.provider.localeCompare(s.provider):r.prefix!==s.prefix?r.prefix.localeCompare(s.prefix):r.name.localeCompare(s.name));let i={provider:"",prefix:"",name:""};return e.forEach(r=>{if(i.name===r.name&&i.prefix===r.prefix&&i.provider===r.provider)return;i=r;const s=r.provider,o=r.prefix,a=r.name,l=n[s]||(n[s]=Object.create(null)),u=l[o]||(l[o]=bo(s,o));let c;a in u.icons?c=t.loaded:o===""||u.missing.has(a)?c=t.missing:c=t.pending;const d={provider:s,prefix:o,name:a};c.push(d)}),t}function R1(e,t){e.forEach(n=>{const i=n.loaderCallbacks;i&&(n.loaderCallbacks=i.filter(r=>r.id!==t))})}function dq(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const i=e.provider,r=e.prefix;t.forEach(s=>{const o=s.icons,a=o.pending.length;o.pending=o.pending.filter(l=>{if(l.prefix!==r)return!0;const u=l.name;if(e.icons[u])o.loaded.push({provider:i,prefix:r,name:u});else if(e.missing.has(u))o.missing.push({provider:i,prefix:r,name:u});else return n=!0,!0;return!1}),o.pending.length!==a&&(n||R1([e],s.id),s.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),s.abort))})}))}let fq=0;function hq(e,t,n){const i=fq++,r=R1.bind(null,n,i);if(!t.pending.length)return r;const s={id:i,icons:t,callback:e,abort:r};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(s)}),r}function mq(e,t=!0,n=!1){const i=[];return e.forEach(r=>{const s=typeof r=="string"?Oh(r,t,n):r;s&&i.push(s)}),i}var vq={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function gq(e,t,n,i){const r=e.resources.length,s=e.random?Math.floor(Math.random()*r):e.index;let o;if(e.random){let D=e.resources.slice(0);for(o=[];D.length>1;){const A=Math.floor(Math.random()*D.length);o.push(D[A]),D=D.slice(0,A).concat(D.slice(A+1))}o=o.concat(D)}else o=e.resources.slice(s).concat(e.resources.slice(0,s));const a=Date.now();let l="pending",u=0,c,d=null,f=[],m=[];typeof i=="function"&&m.push(i);function g(){d&&(clearTimeout(d),d=null)}function y(){l==="pending"&&(l="aborted"),g(),f.forEach(D=>{D.status==="pending"&&(D.status="aborted")}),f=[]}function p(D,A){A&&(m=[]),typeof D=="function"&&m.push(D)}function S(){return{startTime:a,payload:t,status:l,queriesSent:u,queriesPending:f.length,subscribe:p,abort:y}}function w(){l="failed",m.forEach(D=>{D(void 0,c)})}function T(){f.forEach(D=>{D.status==="pending"&&(D.status="aborted")}),f=[]}function x(D,A,b){const _=A!=="success";switch(f=f.filter(I=>I!==D),l){case"pending":break;case"failed":if(_||!e.dataAfterTimeout)return;break;default:return}if(A==="abort"){c=b,w();return}if(_){c=b,f.length||(o.length?V():w());return}if(g(),T(),!e.random){const I=e.resources.indexOf(D.resource);I!==-1&&I!==e.index&&(e.index=I)}l="completed",m.forEach(I=>{I(b)})}function V(){if(l!=="pending")return;g();const D=o.shift();if(D===void 0){if(f.length){d=setTimeout(()=>{g(),l==="pending"&&(T(),w())},e.timeout);return}w();return}const A={status:"pending",resource:D,callback:(b,_)=>{x(A,b,_)}};f.push(A),u++,d=setTimeout(V,e.rotate),n(D,t,A.callback)}return setTimeout(V),S}function V1(e){const t={...vq,...e};let n=[];function i(){n=n.filter(a=>a().status==="pending")}function r(a,l,u){const c=gq(t,a,l,(d,f)=>{i(),u&&u(d,f)});return n.push(c),c}function s(a){return n.find(l=>a(l))||null}return{query:r,find:s,setIndex:a=>{t.index=a},getIndex:()=>t.index,cleanup:i}}function gT(){}const _v=Object.create(null);function pq(e){if(!_v[e]){const t=j_(e);if(!t)return;const n=V1(t),i={config:t,redundancy:n};_v[e]=i}return _v[e]}function yq(e,t,n){let i,r;if(typeof e=="string"){const s=rp(e);if(!s)return n(void 0,424),gT;r=s.send;const o=pq(e);o&&(i=o.redundancy)}else{const s=U_(e);if(s){i=V1(s);const o=e.resources?e.resources[0]:"",a=rp(o);a&&(r=a.send)}}return!i||!r?(n(void 0,424),gT):i.query(t,r,n)().abort}const pT="iconify2",Fu="iconify",D1=Fu+"-count",yT=Fu+"-version",M1=36e5,_q=168,bq=50;function sp(e,t){try{return e.getItem(t)}catch{}}function W_(e,t,n){try{return e.setItem(t,n),!0}catch{}}function _T(e,t){try{e.removeItem(t)}catch{}}function op(e,t){return W_(e,D1,t.toString())}function ap(e){return parseInt(sp(e,D1))||0}const Lh={local:!0,session:!0},O1={local:new Set,session:new Set};let z_=!1;function wq(e){z_=e}let hd=typeof window>"u"?{}:window;function N1(e){const t=e+"Storage";try{if(hd&&hd[t]&&typeof hd[t].length=="number")return hd[t]}catch{}Lh[e]=!1}function L1(e,t){const n=N1(e);if(!n)return;const i=sp(n,yT);if(i!==pT){if(i){const a=ap(n);for(let l=0;l<a;l++)_T(n,Fu+l.toString())}W_(n,yT,pT),op(n,0);return}const r=Math.floor(Date.now()/M1)-_q,s=a=>{const l=Fu+a.toString(),u=sp(n,l);if(typeof u=="string"){try{const c=JSON.parse(u);if(typeof c=="object"&&typeof c.cached=="number"&&c.cached>r&&typeof c.provider=="string"&&typeof c.data=="object"&&typeof c.data.prefix=="string"&&t(c,a))return!0}catch{}_T(n,l)}};let o=ap(n);for(let a=o-1;a>=0;a--)s(a)||(a===o-1?(o--,op(n,o)):O1[e].add(a))}function F1(){if(!z_){wq(!0);for(const e in Lh)L1(e,t=>{const n=t.data,i=t.provider,r=n.prefix,s=bo(i,r);if(!$_(s,n).length)return!1;const o=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,o):o,!0})}}function Sq(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const i in Lh)L1(i,r=>{const s=r.data;return r.provider!==e.provider||s.prefix!==e.prefix||s.lastModified===t});return!0}function Cq(e,t){z_||F1();function n(i){let r;if(!Lh[i]||!(r=N1(i)))return;const s=O1[i];let o;if(s.size)s.delete(o=Array.from(s).shift());else if(o=ap(r),o>=bq||!op(r,o+1))return;const a={cached:Math.floor(Date.now()/M1),provider:e.provider,data:t};return W_(r,Fu+o.toString(),JSON.stringify(a))}t.lastModified&&!Sq(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function bT(){}function Tq(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,dq(e)}))}function Iq(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:i}=e,r=e.iconsToLoad;delete e.iconsToLoad;let s;if(!r||!(s=rp(n)))return;s.prepare(n,i,r).forEach(a=>{yq(n,a,l=>{if(typeof l!="object")a.icons.forEach(u=>{e.missing.add(u)});else try{const u=$_(e,l);if(!u.length)return;const c=e.pendingIcons;c&&u.forEach(d=>{c.delete(d)}),Cq(e,l)}catch(u){console.error(u)}Tq(e)})})}))}const kq=(e,t)=>{const n=mq(e,!0,A1()),i=cq(n);if(!i.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(i.loaded,i.missing,i.pending,bT)}),()=>{l=!1}}const r=Object.create(null),s=[];let o,a;return i.pending.forEach(l=>{const{provider:u,prefix:c}=l;if(c===a&&u===o)return;o=u,a=c,s.push(bo(u,c));const d=r[u]||(r[u]=Object.create(null));d[c]||(d[c]=[])}),i.pending.forEach(l=>{const{provider:u,prefix:c,name:d}=l,f=bo(u,c),m=f.pendingIcons||(f.pendingIcons=new Set);m.has(d)||(m.add(d),r[u][c].push(d))}),s.forEach(l=>{const{provider:u,prefix:c}=l;r[u][c].length&&Iq(l,r[u][c])}),t?hq(t,i,s):bT};function Eq(e,t){const n={...e};for(const i in t){const r=t[i],s=typeof r;i in P1?(r===null||r&&(s==="string"||s==="number"))&&(n[i]=r):s===typeof n[i]&&(n[i]=i==="rotate"?r%4:r)}return n}const Aq=/[\s,]+/;function Pq(e,t){t.split(Aq).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function xq(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function i(r){for(;r<0;)r+=4;return r%4}if(n===""){const r=parseInt(e);return isNaN(r)?0:i(r)}else if(n!==e){let r=0;switch(n){case"%":r=25;break;case"deg":r=90}if(r){let s=parseFloat(e.slice(0,e.length-n.length));return isNaN(s)?0:(s=s/r,s%1===0?i(s):0)}}return t}function Rq(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const i in t)n+=" "+i+'="'+t[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function Vq(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Dq(e){return"data:image/svg+xml,"+Vq(e)}function Mq(e){return'url("'+Dq(e)+'")'}const wT={...x1,inline:!1},Oq={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Nq={display:"inline-block"},lp={backgroundColor:"currentColor"},B1={backgroundColor:"transparent"},ST={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},CT={webkitMask:lp,mask:lp,background:B1};for(const e in CT){const t=CT[e];for(const n in ST)t[e+n]=ST[n]}const Fd={};["horizontal","vertical"].forEach(e=>{const t=e.slice(0,1)+"Flip";Fd[e+"-flip"]=t,Fd[e.slice(0,1)+"-flip"]=t,Fd[e+"Flip"]=t});function TT(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const IT=(e,t)=>{const n=Eq(wT,t),i={...Oq},r=t.mode||"svg",s={},o=t.style,a=typeof o=="object"&&!(o instanceof Array)?o:{};for(let y in t){const p=t[y];if(p!==void 0)switch(y){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[y]=p===!0||p==="true"||p===1;break;case"flip":typeof p=="string"&&Pq(n,p);break;case"color":s.color=p;break;case"rotate":typeof p=="string"?n[y]=xq(p):typeof p=="number"&&(n[y]=p);break;case"ariaHidden":case"aria-hidden":p!==!0&&p!=="true"&&delete i["aria-hidden"];break;default:{const S=Fd[y];S?(p===!0||p==="true"||p===1)&&(n[S]=!0):wT[y]===void 0&&(i[y]=p)}}}const l=Qz(e,n),u=l.attributes;if(n.inline&&(s.verticalAlign="-0.125em"),r==="svg"){i.style={...s,...a},Object.assign(i,u);let y=0,p=t.id;return typeof p=="string"&&(p=p.replace(/-/g,"_")),i.innerHTML=eq(l.body,p?()=>p+"ID"+y++:"iconifyVue"),Wt("svg",i)}const{body:c,width:d,height:f}=e,m=r==="mask"||(r==="bg"?!1:c.indexOf("currentColor")!==-1),g=Rq(c,{...u,width:d+"",height:f+""});return i.style={...s,"--svg":Mq(g),width:TT(u.width),height:TT(u.height),...Nq,...m?lp:B1,...a},Wt("span",i)};A1(!0);tq("",uq);if(typeof document<"u"&&typeof window<"u"){F1();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(i=>{try{(typeof i!="object"||i===null||i instanceof Array||typeof i.icons!="object"||typeof i.prefix!="string"||!jz(i))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const i="IconifyProviders["+n+"] is invalid.";try{const r=t[n];if(typeof r!="object"||!r||r.resources===void 0)continue;nq(n,r)||console.error(i)}catch{console.error(i)}}}}const Lq={...Nh,body:""},Fq=Po({inheritAttrs:!1,data(){return{_name:"",_loadingIcon:null,iconMounted:!1,counter:0}},mounted(){this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(e,t){if(typeof e=="object"&&e!==null&&typeof e.body=="string")return this._name="",this.abortLoading(),{data:e};let n;if(typeof e!="string"||(n=Oh(e,!1,!0))===null)return this.abortLoading(),null;const i=Uz(n);if(!i)return(!this._loadingIcon||this._loadingIcon.name!==e)&&(this.abortLoading(),this._name="",i!==null&&(this._loadingIcon={name:e,abort:kq([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==e&&(this._name=e,t&&t(e));const r=["iconify"];return n.prefix!==""&&r.push("iconify--"+n.prefix),n.provider!==""&&r.push("iconify--"+n.provider),{data:i,classes:r}}},render(){this.counter;const e=this.$attrs,t=this.iconMounted||e.ssr?this.getIcon(e.icon,e.onLoad):null;if(!t)return IT(Lq,e);let n=e;return t.classes&&(n={...e,class:(typeof e.class=="string"?e.class+" ":"")+t.classes.join(" ")}),IT({...Nh,...t.data},n)}});function Gn(e,t){let n;function i(){n=nc(),n.run(()=>t.length?t(()=>{n==null||n.stop(),i()}):t())}pe(e,r=>{r&&!n?i():r||(n==null||n.stop(),n=void 0)},{immediate:!0}),$n(()=>{n==null||n.stop()})}const et=typeof window<"u",q_=et&&"IntersectionObserver"in window,Bq=et&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),kT=et&&"EyeDropper"in window;function ET(e,t,n){$q(e,t),t.set(e,n)}function $q(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Uq(e,t,n){return e.set($1(e,t),n),n}function Ws(e,t){return e.get($1(e,t))}function $1(e,t,n){if(typeof e=="function"?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}function U1(e,t,n){const i=t.length-1;if(i<0)return e===void 0?n:e;for(let r=0;r<i;r++){if(e==null)return n;e=e[t[r]]}return e==null||e[t[i]]===void 0?n:e[t[i]]}function cr(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime()||e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length!==Object.keys(t).length?!1:n.every(i=>cr(e[i],t[i]))}function wo(e,t,n){return e==null||!t||typeof t!="string"?n:e[t]!==void 0?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),U1(e,t.split("."),n))}function Ut(e,t,n){if(t===!0)return e===void 0?n:e;if(t==null||typeof t=="boolean")return n;if(e!==Object(e)){if(typeof t!="function")return n;const r=t(e,n);return typeof r>"u"?n:r}if(typeof t=="string")return wo(e,t,n);if(Array.isArray(t))return U1(e,t,n);if(typeof t!="function")return n;const i=t(e,n);return typeof i>"u"?n:i}function ri(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:e},(n,i)=>t+i)}function _e(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(e==null||e===""))return isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${t}`:void 0}function G_(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function AT(e){let t;return e!==null&&typeof e=="object"&&((t=Object.getPrototypeOf(e))===Object.prototype||t===null)}function K_(e){if(e&&"$el"in e){const t=e.$el;return(t==null?void 0:t.nodeType)===Node.TEXT_NODE?t.nextElementSibling:t}return e}const PT=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16}),up=Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function H1(e){return Object.keys(e)}function Js(e,t){return t.every(n=>e.hasOwnProperty(n))}function Y_(e,t){const n={},i=new Set(Object.keys(e));for(const r of t)i.has(r)&&(n[r]=e[r]);return n}function cp(e,t,n){const i=Object.create(null),r=Object.create(null);for(const s in e)t.some(o=>o instanceof RegExp?o.test(s):o===s)&&!(n!=null&&n.some(o=>o===s))?i[s]=e[s]:r[s]=e[s];return[i,r]}function dt(e,t){const n={...e};return t.forEach(i=>delete n[i]),n}function Fh(e,t){const n={};return t.forEach(i=>n[i]=e[i]),n}const j1=/^on[^a-z]/,Bh=e=>j1.test(e),Hq=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"],jq=["ArrowUp","ArrowDown","ArrowRight","ArrowLeft","Enter","Escape","Tab"," "];function Wq(e){return e.isComposing&&jq.includes(e.key)}function Ms(e){const[t,n]=cp(e,[j1]),i=dt(t,Hq),[r,s]=cp(n,["class","style","id",/^data-/]);return Object.assign(r,t),Object.assign(s,i),[r,s]}function St(e){return e==null?[]:Array.isArray(e)?e:[e]}function zq(e,t){let n=0;const i=function(){for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];clearTimeout(n),n=setTimeout(()=>e(...s),Ye(t))};return i.clear=()=>{clearTimeout(n)},i.immediate=e,i}function xt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(t,Math.min(n,e))}function Ff(e){const t=e.toString().trim();return t.includes(".")?t.length-t.indexOf(".")-1:0}function xT(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return e+n.repeat(Math.max(0,t-e.length))}function RT(e,t){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,t-e.length))+e}function qq(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let i=0;for(;i<e.length;)n.push(e.substr(i,t)),i+=t;return n}function Gq(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return Array.from({length:Math.ceil(e.length/t)},(n,i)=>e.slice(i*t,i*t+t))}function VT(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;if(e<t)return`${e} B`;const n=t===1024?["Ki","Mi","Gi"]:["k","M","G"];let i=-1;for(;Math.abs(e)>=t&&i<n.length-1;)e/=t,++i;return`${e.toFixed(1)} ${n[i]}B`}function Ln(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const i={};for(const r in e)i[r]=e[r];for(const r in t){const s=e[r],o=t[r];if(AT(s)&&AT(o)){i[r]=Ln(s,o,n);continue}if(n&&Array.isArray(s)&&Array.isArray(o)){i[r]=n(s,o);continue}i[r]=o}return i}function W1(e){return e.map(t=>t.type===Ce?W1(t.children):t).flat()}function uo(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(uo.cache.has(e))return uo.cache.get(e);const t=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return uo.cache.set(e,t),t}uo.cache=new Map;function pa(e,t){if(!t||typeof t!="object")return[];if(Array.isArray(t))return t.map(n=>pa(e,n)).flat(1);if(t.suspense)return pa(e,t.ssContent);if(Array.isArray(t.children))return t.children.map(n=>pa(e,n)).flat(1);if(t.component){if(Object.getOwnPropertySymbols(t.component.provides).includes(e))return[t.component];if(t.component.subTree)return pa(e,t.component.subTree).flat(1)}return[]}var md=new WeakMap,ta=new WeakMap;class Kq{constructor(t){ET(this,md,[]),ET(this,ta,0),this.size=t}push(t){Ws(md,this)[Ws(ta,this)]=t,Uq(ta,this,(Ws(ta,this)+1)%this.size)}values(){return Ws(md,this).slice(Ws(ta,this)).concat(Ws(md,this).slice(0,Ws(ta,this)))}}function Yq(e){return"touches"in e?{clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:{clientX:e.clientX,clientY:e.clientY}}function Q_(e){const t=Lt({}),n=P(e);return Ht(()=>{for(const i in n.value)t[i]=n.value[i]},{flush:"sync"}),Vs(t)}function Bf(e,t){return e.includes(t)}function z1(e){return e[2].toLowerCase()+e.slice(3)}const ln=()=>[Function,Array];function DT(e,t){return t="on"+ar(t),!!(e[t]||e[`${t}Once`]||e[`${t}Capture`]||e[`${t}OnceCapture`]||e[`${t}CaptureOnce`])}function X_(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];if(Array.isArray(e))for(const r of e)r(...n);else typeof e=="function"&&e(...n)}function Bu(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const n=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map(i=>`${i}${t?':not([tabindex="-1"])':""}:not([disabled])`).join(", ");return[...e.querySelectorAll(n)]}function q1(e,t,n){let i,r=e.indexOf(document.activeElement);const s=t==="next"?1:-1;do r+=s,i=e[r];while((!i||i.offsetParent==null||!((n==null?void 0:n(i))??!0))&&r<e.length&&r>=0);return i}function co(e,t){var i,r,s,o;const n=Bu(e);if(!t)(e===document.activeElement||!e.contains(document.activeElement))&&((i=n[0])==null||i.focus());else if(t==="first")(r=n[0])==null||r.focus();else if(t==="last")(s=n.at(-1))==null||s.focus();else if(typeof t=="number")(o=n[t])==null||o.focus();else{const a=q1(n,t);a?a.focus():co(e,t==="next"?"first":"last")}}function vd(e){return e==null||typeof e=="string"&&e.trim()===""}function G1(){}function Ya(e,t){if(!(et&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports(`selector(${t})`)))return null;try{return!!e&&e.matches(t)}catch{return null}}function $h(e){return e.some(t=>bs(t)?t.type===Qt?!1:t.type!==Ce||$h(t.children):!0)?e:null}function Qq(e,t){if(!et||e===0)return t(),()=>{};const n=window.setTimeout(t,e);return()=>window.clearTimeout(n)}function Xq(e,t){const n=e.clientX,i=e.clientY,r=t.getBoundingClientRect(),s=r.left,o=r.top,a=r.right,l=r.bottom;return n>=s&&n<=a&&i>=o&&i<=l}function $f(){const e=ve(),t=n=>{e.value=n};return Object.defineProperty(t,"value",{enumerable:!0,get:()=>e.value,set:n=>e.value=n}),Object.defineProperty(t,"el",{enumerable:!0,get:()=>K_(e.value)}),t}function Uf(e){const t=e.key.length===1,n=!e.ctrlKey&&!e.metaKey&&!e.altKey;return t&&n}const K1=["top","bottom"],Jq=["start","end","left","right"];function dp(e,t){let[n,i]=e.split(" ");return i||(i=Bf(K1,n)?"start":Bf(Jq,n)?"top":"center"),{side:fp(n,t),align:fp(i,t)}}function fp(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function bv(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function wv(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function MT(e){return{side:e.align,align:e.side}}function OT(e){return Bf(K1,e.side)?"y":"x"}class fo{constructor(t){let{x:n,y:i,width:r,height:s}=t;this.x=n,this.y=i,this.width=r,this.height=s}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function NT(e,t){return{x:{before:Math.max(0,t.left-e.left),after:Math.max(0,e.right-t.right)},y:{before:Math.max(0,t.top-e.top),after:Math.max(0,e.bottom-t.bottom)}}}function Y1(e){return Array.isArray(e)?new fo({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function J_(e){const t=e.getBoundingClientRect(),n=getComputedStyle(e),i=n.transform;if(i){let r,s,o,a,l;if(i.startsWith("matrix3d("))r=i.slice(9,-1).split(/, /),s=+r[0],o=+r[5],a=+r[12],l=+r[13];else if(i.startsWith("matrix("))r=i.slice(7,-1).split(/, /),s=+r[0],o=+r[3],a=+r[4],l=+r[5];else return new fo(t);const u=n.transformOrigin,c=t.x-a-(1-s)*parseFloat(u),d=t.y-l-(1-o)*parseFloat(u.slice(u.indexOf(" ")+1)),f=s?t.width/s:e.offsetWidth+1,m=o?t.height/o:e.offsetHeight+1;return new fo({x:c,y:d,width:f,height:m})}else return new fo(t)}function Zs(e,t,n){if(typeof e.animate>"u")return{finished:Promise.resolve()};let i;try{i=e.animate(t,n)}catch{return{finished:Promise.resolve()}}return typeof i.finished>"u"&&(i.finished=new Promise(r=>{i.onfinish=()=>{r(i)}})),i}const Bd=new WeakMap;function Zq(e,t){Object.keys(t).forEach(n=>{if(Bh(n)){const i=z1(n),r=Bd.get(e);if(t[n]==null)r==null||r.forEach(s=>{const[o,a]=s;o===i&&(e.removeEventListener(i,a),r.delete(s))});else if(!r||![...r].some(s=>s[0]===i&&s[1]===t[n])){e.addEventListener(i,t[n]);const s=r||new Set;s.add([i,t[n]]),Bd.has(e)||Bd.set(e,s)}}else t[n]==null?e.removeAttribute(n):e.setAttribute(n,t[n])})}function eG(e,t){Object.keys(t).forEach(n=>{if(Bh(n)){const i=z1(n),r=Bd.get(e);r==null||r.forEach(s=>{const[o,a]=s;o===i&&(e.removeEventListener(i,a),r.delete(s))})}else e.removeAttribute(n)})}const na=2.4,LT=.2126729,FT=.7151522,BT=.072175,tG=.55,nG=.58,iG=.57,rG=.62,gd=.03,$T=1.45,sG=5e-4,oG=1.25,aG=1.25,UT=.078,HT=12.82051282051282,pd=.06,jT=.001;function WT(e,t){const n=(e.r/255)**na,i=(e.g/255)**na,r=(e.b/255)**na,s=(t.r/255)**na,o=(t.g/255)**na,a=(t.b/255)**na;let l=n*LT+i*FT+r*BT,u=s*LT+o*FT+a*BT;if(l<=gd&&(l+=(gd-l)**$T),u<=gd&&(u+=(gd-u)**$T),Math.abs(u-l)<sG)return 0;let c;if(u>l){const d=(u**tG-l**nG)*oG;c=d<jT?0:d<UT?d-d*HT*pd:d-pd}else{const d=(u**rG-l**iG)*aG;c=d>-jT?0:d>-UT?d-d*HT*pd:d+pd}return c*100}function lG(e,t){t=Array.isArray(t)?t.slice(0,-1).map(n=>`'${n}'`).join(", ")+` or '${t.at(-1)}'`:`'${t}'`}const Hf=.20689655172413793,uG=e=>e>Hf**3?Math.cbrt(e):e/(3*Hf**2)+4/29,cG=e=>e>Hf?e**3:3*Hf**2*(e-4/29);function Q1(e){const t=uG,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function X1(e){const t=cG,n=(e[0]+16)/116;return[t(n+e[1]/500)*.95047,t(n),t(n-e[2]/200)*1.08883]}const dG=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],fG=e=>e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055,hG=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],mG=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function J1(e){const t=Array(3),n=fG,i=dG;for(let r=0;r<3;++r)t[r]=Math.round(xt(n(i[r][0]*e[0]+i[r][1]*e[1]+i[r][2]*e[2]))*255);return{r:t[0],g:t[1],b:t[2]}}function Z_(e){let{r:t,g:n,b:i}=e;const r=[0,0,0],s=mG,o=hG;t=s(t/255),n=s(n/255),i=s(i/255);for(let a=0;a<3;++a)r[a]=o[a][0]*t+o[a][1]*n+o[a][2]*i;return r}function hp(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function vG(e){return hp(e)&&!/^((rgb|hsl)a?\()?var\(--/.test(e)}const zT=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,gG={rgb:(e,t,n,i)=>({r:e,g:t,b:n,a:i}),rgba:(e,t,n,i)=>({r:e,g:t,b:n,a:i}),hsl:(e,t,n,i)=>qT({h:e,s:t,l:n,a:i}),hsla:(e,t,n,i)=>qT({h:e,s:t,l:n,a:i}),hsv:(e,t,n,i)=>Nr({h:e,s:t,v:n,a:i}),hsva:(e,t,n,i)=>Nr({h:e,s:t,v:n,a:i})};function yi(e){if(typeof e=="number")return{r:(e&16711680)>>16,g:(e&65280)>>8,b:e&255};if(typeof e=="string"&&zT.test(e)){const{groups:t}=e.match(zT),{fn:n,values:i}=t,r=i.split(/,\s*/).map(s=>s.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(s)/100:parseFloat(s));return gG[n](...r)}else if(typeof e=="string"){let t=e.startsWith("#")?e.slice(1):e;return[3,4].includes(t.length)?t=t.split("").map(n=>n+n).join(""):[6,8].includes(t.length),iR(t)}else if(typeof e=="object"){if(Js(e,["r","g","b"]))return e;if(Js(e,["h","s","l"]))return Nr(eb(e));if(Js(e,["h","s","v"]))return Nr(e)}throw new TypeError(`Invalid color: ${e==null?e:String(e)||e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function Nr(e){const{h:t,s:n,v:i,a:r}=e,s=a=>{const l=(a+t/60)%6;return i-i*n*Math.max(Math.min(l,4-l,1),0)},o=[s(5),s(3),s(1)].map(a=>Math.round(a*255));return{r:o[0],g:o[1],b:o[2],a:r}}function qT(e){return Nr(eb(e))}function Uh(e){if(!e)return{h:0,s:1,v:1,a:1};const t=e.r/255,n=e.g/255,i=e.b/255,r=Math.max(t,n,i),s=Math.min(t,n,i);let o=0;r!==s&&(r===t?o=60*(0+(n-i)/(r-s)):r===n?o=60*(2+(i-t)/(r-s)):r===i&&(o=60*(4+(t-n)/(r-s)))),o<0&&(o=o+360);const a=r===0?0:(r-s)/r,l=[o,a,r];return{h:l[0],s:l[1],v:l[2],a:e.a}}function Z1(e){const{h:t,s:n,v:i,a:r}=e,s=i-i*n/2,o=s===1||s===0?0:(i-s)/Math.min(s,1-s);return{h:t,s:o,l:s,a:r}}function eb(e){const{h:t,s:n,l:i,a:r}=e,s=i+n*Math.min(i,1-i),o=s===0?0:2-2*i/s;return{h:t,s:o,v:s,a:r}}function eR(e){let{r:t,g:n,b:i,a:r}=e;return r===void 0?`rgb(${t}, ${n}, ${i})`:`rgba(${t}, ${n}, ${i}, ${r})`}function tR(e){return eR(Nr(e))}function yd(e){const t=Math.round(e).toString(16);return("00".substr(0,2-t.length)+t).toUpperCase()}function nR(e){let{r:t,g:n,b:i,a:r}=e;return`#${[yd(t),yd(n),yd(i),r!==void 0?yd(Math.round(r*255)):""].join("")}`}function iR(e){e=pG(e);let[t,n,i,r]=qq(e,2).map(s=>parseInt(s,16));return r=r===void 0?r:r/255,{r:t,g:n,b:i,a:r}}function rR(e){const t=iR(e);return Uh(t)}function sR(e){return nR(Nr(e))}function pG(e){return e.startsWith("#")&&(e=e.slice(1)),e=e.replace(/([^0-9a-f])/gi,"F"),(e.length===3||e.length===4)&&(e=e.split("").map(t=>t+t).join("")),e.length!==6&&(e=xT(xT(e,6),8,"F")),e}function yG(e,t){const n=Q1(Z_(e));return n[0]=n[0]+t*10,J1(X1(n))}function _G(e,t){const n=Q1(Z_(e));return n[0]=n[0]-t*10,J1(X1(n))}function mp(e){const t=yi(e);return Z_(t)[1]}function bG(e,t){const n=mp(e),i=mp(t),r=Math.max(n,i),s=Math.min(n,i);return(r+.05)/(s+.05)}function oR(e){const t=Math.abs(WT(yi(0),yi(e)));return Math.abs(WT(yi(16777215),yi(e)))>Math.min(t,50)?"#fff":"#000"}function z(e,t){return n=>Object.keys(e).reduce((i,r)=>{const o=typeof e[r]=="object"&&e[r]!=null&&!Array.isArray(e[r])?e[r]:{type:e[r]};return n&&r in n?i[r]={...o,default:n[r]}:i[r]=o,t&&!i[r].source&&(i[r].source=t),i},{})}const Ie=z({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component");function Ot(e,t){const n=el();if(!n)throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);return n}function dr(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const t=Ot(e).type;return uo((t==null?void 0:t.aliasName)||(t==null?void 0:t.name))}let aR=0,$d=new WeakMap;function pn(){const e=Ot("getUid");if($d.has(e))return $d.get(e);{const t=aR++;return $d.set(e,t),t}}pn.reset=()=>{aR=0,$d=new WeakMap};function wG(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ot("injectSelf");const{provides:n}=t;if(n&&e in n)return n[e]}const Qa=Symbol.for("vuetify:defaults");function SG(e){return re(e)}function tb(){const e=Le(Qa);if(!e)throw new Error("[Vuetify] Could not find defaults instance");return e}function Tt(e,t){const n=tb(),i=re(e),r=P(()=>{if(Ye(t==null?void 0:t.disabled))return n.value;const o=Ye(t==null?void 0:t.scoped),a=Ye(t==null?void 0:t.reset),l=Ye(t==null?void 0:t.root);if(i.value==null&&!(o||a||l))return n.value;let u=Ln(i.value,{prev:n.value});if(o)return u;if(a||l){const c=Number(a||1/0);for(let d=0;d<=c&&!(!u||!("prev"in u));d++)u=u.prev;return u&&typeof l=="string"&&l in u&&(u=Ln(Ln(u,{prev:u}),u[l])),u}return u.prev?Ln(u.prev,u):u});return lt(Qa,r),r}function CG(e,t){var n,i;return typeof((n=e.props)==null?void 0:n[t])<"u"||typeof((i=e.props)==null?void 0:i[uo(t)])<"u"}function TG(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:tb();const i=Ot("useDefaults");if(t=t??i.type.name??i.type.__name,!t)throw new Error("[Vuetify] Could not determine component name");const r=P(()=>{var l;return(l=n.value)==null?void 0:l[e._as??t]}),s=new Proxy(e,{get(l,u){var d,f,m,g,y,p,S;const c=Reflect.get(l,u);return u==="class"||u==="style"?[(d=r.value)==null?void 0:d[u],c].filter(w=>w!=null):typeof u=="string"&&!CG(i.vnode,u)?((f=r.value)==null?void 0:f[u])!==void 0?(m=r.value)==null?void 0:m[u]:((y=(g=n.value)==null?void 0:g.global)==null?void 0:y[u])!==void 0?(S=(p=n.value)==null?void 0:p.global)==null?void 0:S[u]:c:c}}),o=ve();Ht(()=>{if(r.value){const l=Object.entries(r.value).filter(u=>{let[c]=u;return c.startsWith(c[0].toUpperCase())});o.value=l.length?Object.fromEntries(l):void 0}else o.value=void 0});function a(){const l=wG(Qa,i);lt(Qa,P(()=>o.value?Ln((l==null?void 0:l.value)??{},o.value):l==null?void 0:l.value))}return{props:s,provideSubDefaults:a}}function ui(e){if(e._setup=e._setup??e.setup,!e.name)return e;if(e._setup){e.props=z(e.props??{},e.name)();const t=Object.keys(e.props).filter(n=>n!=="class"&&n!=="style");e.filterProps=function(i){return Y_(i,t)},e.props._as=String,e.setup=function(i,r){const s=tb();if(!s.value)return e._setup(i,r);const{props:o,provideSubDefaults:a}=TG(i,i._as??e.name,s),l=e._setup(o,r);return a(),l}}return e}function J(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t=>(e?ui:Po)(t)}function IG(e,t){return t.props=e,t}function fr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return J()({name:n??ar(Jn(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...Ie()},setup(i,r){let{slots:s}=r;return()=>{var o;return Wt(i.tag,{class:[e,i.class],style:i.style},(o=s.default)==null?void 0:o.call(s))}}})}function lR(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}const $u="cubic-bezier(0.4, 0, 0.2, 1)",kG="cubic-bezier(0.0, 0, 0.2, 1)",EG="cubic-bezier(0.4, 0, 1, 1)";function GT(e,t,n){return Object.keys(e).filter(i=>Bh(i)&&i.endsWith(t)).reduce((i,r)=>(i[r.slice(0,-t.length)]=s=>e[r](s,n(s)),i),{})}function nb(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(t?AG(e):ib(e))return e;e=e.parentElement}return document.scrollingElement}function Uu(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(ib(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function ib(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function AG(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["scroll","auto"].includes(t.overflowY)}function PG(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function ne(e){const t=Ot("useRender");t.render=e}function Pe(e,t,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:d=>d,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:d=>d;const s=Ot("useProxiedModel"),o=re(e[t]!==void 0?e[t]:n),a=uo(t),u=P(a!==t?()=>{var d,f,m,g;return e[t],!!(((d=s.vnode.props)!=null&&d.hasOwnProperty(t)||(f=s.vnode.props)!=null&&f.hasOwnProperty(a))&&((m=s.vnode.props)!=null&&m.hasOwnProperty(`onUpdate:${t}`)||(g=s.vnode.props)!=null&&g.hasOwnProperty(`onUpdate:${a}`)))}:()=>{var d,f;return e[t],!!((d=s.vnode.props)!=null&&d.hasOwnProperty(t)&&((f=s.vnode.props)!=null&&f.hasOwnProperty(`onUpdate:${t}`)))});Gn(()=>!u.value,()=>{pe(()=>e[t],d=>{o.value=d})});const c=P({get(){const d=e[t];return i(u.value?d:o.value)},set(d){const f=r(d),m=Ne(u.value?e[t]:o.value);m===f||i(m)===d||(o.value=f,s==null||s.emit(`update:${t}`,f))}});return Object.defineProperty(c,"externalValue",{get:()=>u.value?e[t]:o.value}),c}const xG={badge:"Badge",open:"Open",close:"Close",dismiss:"Dismiss",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM",title:"Select Time"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},KT="$vuetify.",YT=(e,t)=>e.replace(/\{(\d+)\}/g,(n,i)=>String(t[+i])),uR=(e,t,n)=>function(i){for(var r=arguments.length,s=new Array(r>1?r-1:0),o=1;o<r;o++)s[o-1]=arguments[o];if(!i.startsWith(KT))return YT(i,s);const a=i.replace(KT,""),l=e.value&&n.value[e.value],u=t.value&&n.value[t.value];let c=wo(l,a,null);return c||(`${i}${e.value}`,c=wo(u,a,null)),c||(c=i),typeof c!="string"&&(c=i),YT(c,s)};function cR(e,t){return(n,i)=>new Intl.NumberFormat([e.value,t.value],i).format(n)}function Sv(e,t,n){const i=Pe(e,t,e[t]??n.value);return i.value=e[t]??n.value,pe(n,r=>{e[t]==null&&(i.value=n.value)}),i}function dR(e){return t=>{const n=Sv(t,"locale",e.current),i=Sv(t,"fallback",e.fallback),r=Sv(t,"messages",e.messages);return{name:"vuetify",current:n,fallback:i,messages:r,t:uR(n,i,r),n:cR(n,i),provide:dR({current:n,fallback:i,messages:r})}}}function RG(e){const t=ve((e==null?void 0:e.locale)??"en"),n=ve((e==null?void 0:e.fallback)??"en"),i=re({en:xG,...e==null?void 0:e.messages});return{name:"vuetify",current:t,fallback:n,messages:i,t:uR(t,n,i),n:cR(t,n),provide:dR({current:t,fallback:n,messages:i})}}const Xa=Symbol.for("vuetify:locale");function VG(e){return e.name!=null}function DG(e){const t=e!=null&&e.adapter&&VG(e==null?void 0:e.adapter)?e==null?void 0:e.adapter:RG(e),n=NG(t,e);return{...t,...n}}function yt(){const e=Le(Xa);if(!e)throw new Error("[Vuetify] Could not find injected locale instance");return e}function MG(e){const t=Le(Xa);if(!t)throw new Error("[Vuetify] Could not find injected locale instance");const n=t.provide(e),i=LG(n,t.rtl,e),r={...n,...i};return lt(Xa,r),r}function OG(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}function NG(e,t){const n=re((t==null?void 0:t.rtl)??OG()),i=P(()=>n.value[e.current.value]??!1);return{isRtl:i,rtl:n,rtlClasses:P(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}function LG(e,t,n){const i=P(()=>n.rtl??t.value[e.current.value]??!1);return{isRtl:i,rtl:t,rtlClasses:P(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}function en(){const e=Le(Xa);if(!e)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:e.isRtl,rtlClasses:e.rtlClasses}}const Hh={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function FG(e,t,n){const i=[];let r=[];const s=fR(e),o=hR(e),a=n??Hh[t.slice(-2).toUpperCase()]??0,l=(s.getDay()-a+7)%7,u=(o.getDay()-a+7)%7;for(let c=0;c<l;c++){const d=new Date(s);d.setDate(d.getDate()-(l-c)),r.push(d)}for(let c=1;c<=o.getDate();c++){const d=new Date(e.getFullYear(),e.getMonth(),c);r.push(d),r.length===7&&(i.push(r),r=[])}for(let c=1;c<7-u;c++){const d=new Date(o);d.setDate(d.getDate()+c),r.push(d)}return r.length>0&&i.push(r),i}function BG(e,t,n){const i=n??Hh[t.slice(-2).toUpperCase()]??0,r=new Date(e);for(;r.getDay()!==i;)r.setDate(r.getDate()-1);return r}function $G(e,t){const n=new Date(e),i=((Hh[t.slice(-2).toUpperCase()]??0)+6)%7;for(;n.getDay()!==i;)n.setDate(n.getDate()+1);return n}function fR(e){return new Date(e.getFullYear(),e.getMonth(),1)}function hR(e){return new Date(e.getFullYear(),e.getMonth()+1,0)}function UG(e){const t=e.split("-").map(Number);return new Date(t[0],t[1]-1,t[2])}const HG=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function mR(e){if(e==null)return new Date;if(e instanceof Date)return e;if(typeof e=="string"){let t;if(HG.test(e))return UG(e);if(t=Date.parse(e),!isNaN(t))return new Date(t)}return null}const QT=new Date(2e3,0,2);function jG(e,t){const n=t??Hh[e.slice(-2).toUpperCase()]??0;return ri(7).map(i=>{const r=new Date(QT);return r.setDate(QT.getDate()+n+i),new Intl.DateTimeFormat(e,{weekday:"narrow"}).format(r)})}function WG(e,t,n,i){const r=mR(e)??new Date,s=i==null?void 0:i[t];if(typeof s=="function")return s(r,t,n);let o={};switch(t){case"fullDate":o={year:"numeric",month:"long",day:"numeric"};break;case"fullDateWithWeekday":o={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;case"normalDate":const a=r.getDate(),l=new Intl.DateTimeFormat(n,{month:"long"}).format(r);return`${a} ${l}`;case"normalDateWithWeekday":o={weekday:"short",day:"numeric",month:"short"};break;case"shortDate":o={month:"short",day:"numeric"};break;case"year":o={year:"numeric"};break;case"month":o={month:"long"};break;case"monthShort":o={month:"short"};break;case"monthAndYear":o={month:"long",year:"numeric"};break;case"monthAndDate":o={month:"long",day:"numeric"};break;case"weekday":o={weekday:"long"};break;case"weekdayShort":o={weekday:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(n).format(r.getDate());case"hours12h":o={hour:"numeric",hour12:!0};break;case"hours24h":o={hour:"numeric",hour12:!1};break;case"minutes":o={minute:"numeric"};break;case"seconds":o={second:"numeric"};break;case"fullTime":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime12h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime24h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"fullDateTime":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime12h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime24h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDate":o={year:"numeric",month:"2-digit",day:"2-digit"};break;case"keyboardDateTime":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDateTime12h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"keyboardDateTime24h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;default:o=s??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,o).format(r)}function zG(e,t){const n=e.toJsDate(t),i=n.getFullYear(),r=RT(String(n.getMonth()+1),2,"0"),s=RT(String(n.getDate()),2,"0");return`${i}-${r}-${s}`}function qG(e){const[t,n,i]=e.split("-").map(Number);return new Date(t,n-1,i)}function GG(e,t){const n=new Date(e);return n.setMinutes(n.getMinutes()+t),n}function KG(e,t){const n=new Date(e);return n.setHours(n.getHours()+t),n}function YG(e,t){const n=new Date(e);return n.setDate(n.getDate()+t),n}function QG(e,t){const n=new Date(e);return n.setDate(n.getDate()+t*7),n}function XG(e,t){const n=new Date(e);return n.setDate(1),n.setMonth(n.getMonth()+t),n}function JG(e){return e.getFullYear()}function ZG(e){return e.getMonth()}function eK(e){return e.getDate()}function tK(e){return new Date(e.getFullYear(),e.getMonth()+1,1)}function nK(e){return new Date(e.getFullYear(),e.getMonth()-1,1)}function iK(e){return e.getHours()}function rK(e){return e.getMinutes()}function sK(e){return new Date(e.getFullYear(),0,1)}function oK(e){return new Date(e.getFullYear(),11,31)}function aK(e,t){return jf(e,t[0])&&cK(e,t[1])}function lK(e){const t=new Date(e);return t instanceof Date&&!isNaN(t.getTime())}function jf(e,t){return e.getTime()>t.getTime()}function uK(e,t){return jf(vp(e),vp(t))}function cK(e,t){return e.getTime()<t.getTime()}function XT(e,t){return e.getTime()===t.getTime()}function dK(e,t){return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function fK(e,t){return e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function hK(e,t){return e.getFullYear()===t.getFullYear()}function mK(e,t,n){const i=new Date(e),r=new Date(t);switch(n){case"years":return i.getFullYear()-r.getFullYear();case"quarters":return Math.floor((i.getMonth()-r.getMonth()+(i.getFullYear()-r.getFullYear())*12)/4);case"months":return i.getMonth()-r.getMonth()+(i.getFullYear()-r.getFullYear())*12;case"weeks":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60*24*7));case"days":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60*24));case"hours":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60));case"minutes":return Math.floor((i.getTime()-r.getTime())/(1e3*60));case"seconds":return Math.floor((i.getTime()-r.getTime())/1e3);default:return i.getTime()-r.getTime()}}function vK(e,t){const n=new Date(e);return n.setHours(t),n}function gK(e,t){const n=new Date(e);return n.setMinutes(t),n}function pK(e,t){const n=new Date(e);return n.setMonth(t),n}function yK(e,t){const n=new Date(e);return n.setDate(t),n}function _K(e,t){const n=new Date(e);return n.setFullYear(t),n}function vp(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0,0)}function bK(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate(),23,59,59,999)}class wK{constructor(t){this.locale=t.locale,this.formats=t.formats}date(t){return mR(t)}toJsDate(t){return t}toISO(t){return zG(this,t)}parseISO(t){return qG(t)}addMinutes(t,n){return GG(t,n)}addHours(t,n){return KG(t,n)}addDays(t,n){return YG(t,n)}addWeeks(t,n){return QG(t,n)}addMonths(t,n){return XG(t,n)}getWeekArray(t,n){return FG(t,this.locale,n?Number(n):void 0)}startOfWeek(t,n){return BG(t,this.locale,n?Number(n):void 0)}endOfWeek(t){return $G(t,this.locale)}startOfMonth(t){return fR(t)}endOfMonth(t){return hR(t)}format(t,n){return WG(t,n,this.locale,this.formats)}isEqual(t,n){return XT(t,n)}isValid(t){return lK(t)}isWithinRange(t,n){return aK(t,n)}isAfter(t,n){return jf(t,n)}isAfterDay(t,n){return uK(t,n)}isBefore(t,n){return!jf(t,n)&&!XT(t,n)}isSameDay(t,n){return dK(t,n)}isSameMonth(t,n){return fK(t,n)}isSameYear(t,n){return hK(t,n)}setMinutes(t,n){return gK(t,n)}setHours(t,n){return vK(t,n)}setMonth(t,n){return pK(t,n)}setDate(t,n){return yK(t,n)}setYear(t,n){return _K(t,n)}getDiff(t,n,i){return mK(t,n,i)}getWeekdays(t){return jG(this.locale,t?Number(t):void 0)}getYear(t){return JG(t)}getMonth(t){return ZG(t)}getDate(t){return eK(t)}getNextMonth(t){return tK(t)}getPreviousMonth(t){return nK(t)}getHours(t){return iK(t)}getMinutes(t){return rK(t)}startOfDay(t){return vp(t)}endOfDay(t){return bK(t)}startOfYear(t){return sK(t)}endOfYear(t){return oK(t)}}const vR=Symbol.for("vuetify:date-options"),JT=Symbol.for("vuetify:date-adapter");function SK(e,t){const n=Ln({adapter:wK,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},e);return{options:n,instance:gR(n,t)}}function gR(e,t){const n=Lt(typeof e.adapter=="function"?new e.adapter({locale:e.locale[t.current.value]??t.current.value,formats:e.formats}):e.adapter);return pe(t.current,i=>{n.locale=e.locale[i]??i??n.locale}),n}function hr(){const e=Le(vR);if(!e)throw new Error("[Vuetify] Could not find injected date options");const t=yt();return gR(e,t)}function CK(e,t){const n=e.toJsDate(t);let i=n.getFullYear(),r=new Date(i,0,1);if(n<r)i=i-1,r=new Date(i,0,1);else{const a=new Date(i+1,0,1);n>=a&&(i=i+1,r=a)}const s=Math.abs(n.getTime()-r.getTime()),o=Math.ceil(s/(1e3*60*60*24));return Math.floor(o/7)+1}const jh=["sm","md","lg","xl","xxl"],gp=Symbol.for("vuetify:display"),ZT={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},TK=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ZT;return Ln(ZT,e)};function eI(e){return et&&!e?window.innerWidth:typeof e=="object"&&e.clientWidth||0}function tI(e){return et&&!e?window.innerHeight:typeof e=="object"&&e.clientHeight||0}function nI(e){const t=et&&!e?window.navigator.userAgent:"ssr";function n(g){return!!t.match(g)}const i=n(/android/i),r=n(/iphone|ipad|ipod/i),s=n(/cordova/i),o=n(/electron/i),a=n(/chrome/i),l=n(/edge/i),u=n(/firefox/i),c=n(/opera/i),d=n(/win/i),f=n(/mac/i),m=n(/linux/i);return{android:i,ios:r,cordova:s,electron:o,chrome:a,edge:l,firefox:u,opera:c,win:d,mac:f,linux:m,touch:Bq,ssr:t==="ssr"}}function IK(e,t){const{thresholds:n,mobileBreakpoint:i}=TK(e),r=ve(tI(t)),s=ve(nI(t)),o=Lt({}),a=ve(eI(t));function l(){r.value=tI(),a.value=eI()}function u(){l(),s.value=nI()}return Ht(()=>{const c=a.value<n.sm,d=a.value<n.md&&!c,f=a.value<n.lg&&!(d||c),m=a.value<n.xl&&!(f||d||c),g=a.value<n.xxl&&!(m||f||d||c),y=a.value>=n.xxl,p=c?"xs":d?"sm":f?"md":m?"lg":g?"xl":"xxl",S=typeof i=="number"?i:n[i],w=a.value<S;o.xs=c,o.sm=d,o.md=f,o.lg=m,o.xl=g,o.xxl=y,o.smAndUp=!c,o.mdAndUp=!(c||d),o.lgAndUp=!(c||d||f),o.xlAndUp=!(c||d||f||m),o.smAndDown=!(f||m||g||y),o.mdAndDown=!(m||g||y),o.lgAndDown=!(g||y),o.xlAndDown=!y,o.name=p,o.height=r.value,o.width=a.value,o.mobile=w,o.mobileBreakpoint=i,o.platform=s.value,o.thresholds=n}),et&&window.addEventListener("resize",l,{passive:!0}),{...Vs(o),update:u,ssr:!!t}}const Oo=z({mobile:{type:Boolean,default:!1},mobileBreakpoint:[Number,String]},"display");function Ci(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:dr();const n=Le(gp);if(!n)throw new Error("Could not find Vuetify display injection");const i=P(()=>{if(e.mobile!=null)return e.mobile;if(!e.mobileBreakpoint)return n.mobile.value;const s=typeof e.mobileBreakpoint=="number"?e.mobileBreakpoint:n.thresholds.value[e.mobileBreakpoint];return n.width.value<s}),r=P(()=>t?{[`${t}--mobile`]:i.value}:{});return{...n,displayClasses:r,mobile:i}}const pR=Symbol.for("vuetify:goto");function yR(){return{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:e=>e,easeInQuad:e=>e**2,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e**2:-1+(4-2*e)*e,easeInCubic:e=>e**3,easeOutCubic:e=>--e**3+1,easeInOutCubic:e=>e<.5?4*e**3:(e-1)*(2*e-2)*(2*e-2)+1,easeInQuart:e=>e**4,easeOutQuart:e=>1- --e**4,easeInOutQuart:e=>e<.5?8*e**4:1-8*--e**4,easeInQuint:e=>e**5,easeOutQuint:e=>1+--e**5,easeInOutQuint:e=>e<.5?16*e**5:1+16*--e**5}}}function kK(e){return rb(e)??(document.scrollingElement||document.body)}function rb(e){return typeof e=="string"?document.querySelector(e):K_(e)}function Cv(e,t,n){if(typeof e=="number")return t&&n?-e:e;let i=rb(e),r=0;for(;i;)r+=t?i.offsetLeft:i.offsetTop,i=i.offsetParent;return r}function EK(e,t){return{rtl:t.isRtl,options:Ln(yR(),e)}}async function iI(e,t,n,i){const r=n?"scrollLeft":"scrollTop",s=Ln((i==null?void 0:i.options)??yR(),t),o=i==null?void 0:i.rtl.value,a=(typeof e=="number"?e:rb(e))??0,l=s.container==="parent"&&a instanceof HTMLElement?a.parentElement:kK(s.container),u=typeof s.easing=="function"?s.easing:s.patterns[s.easing];if(!u)throw new TypeError(`Easing function "${s.easing}" not found.`);let c;if(typeof a=="number")c=Cv(a,n,o);else if(c=Cv(a,n,o)-Cv(l,n,o),s.layout){const g=window.getComputedStyle(a).getPropertyValue("--v-layout-top");g&&(c-=parseInt(g,10))}c+=s.offset,c=PK(l,c,!!o,!!n);const d=l[r]??0;if(c===d)return Promise.resolve(c);const f=performance.now();return new Promise(m=>requestAnimationFrame(function g(y){const S=(y-f)/s.duration,w=Math.floor(d+(c-d)*u(xt(S,0,1)));if(l[r]=w,S>=1&&Math.abs(w-l[r])<10)return m(c);if(S>2)return m(l[r]);requestAnimationFrame(g)}))}function AK(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=Le(pR),{isRtl:n}=en();if(!t)throw new Error("[Vuetify] Could not find injected goto instance");const i={...t,rtl:P(()=>t.rtl.value||n.value)};async function r(s,o){return iI(s,Ln(e,o),!1,i)}return r.horizontal=async(s,o)=>iI(s,Ln(e,o),!0,i),r}function PK(e,t,n,i){const{scrollWidth:r,scrollHeight:s}=e,[o,a]=e===document.scrollingElement?[window.innerWidth,window.innerHeight]:[e.offsetWidth,e.offsetHeight];let l,u;return i?n?(l=-(r-o),u=0):(l=0,u=r-o):(l=0,u=s+-a),Math.max(Math.min(t,u),l)}const xK={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper"},RK={component:e=>Wt(ob,{...e,class:"mdi"})},Oe=[String,Function,Object,Array],pp=Symbol.for("vuetify:icons"),Wh=z({icon:{type:Oe},tag:{type:String,required:!0}},"icon"),yp=J()({name:"VComponentIcon",props:Wh(),setup(e,t){let{slots:n}=t;return()=>{const i=e.icon;return v(e.tag,null,{default:()=>{var r;return[e.icon?v(i,null,null):(r=n.default)==null?void 0:r.call(n)]}})}}}),sb=ui({name:"VSvgIcon",inheritAttrs:!1,props:Wh(),setup(e,t){let{attrs:n}=t;return()=>v(e.tag,te(n,{style:null}),{default:()=>[v("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(e.icon)?e.icon.map(i=>Array.isArray(i)?v("path",{d:i[0],"fill-opacity":i[1]},null):v("path",{d:i},null)):v("path",{d:e.icon},null)])]})}}),VK=ui({name:"VLigatureIcon",props:Wh(),setup(e){return()=>v(e.tag,null,{default:()=>[e.icon]})}}),ob=ui({name:"VClassIcon",props:Wh(),setup(e){return()=>v(e.tag,{class:e.icon},null)}});function DK(){return{svg:{component:sb},class:{component:ob}}}function MK(e){const t=DK(),n=(e==null?void 0:e.defaultSet)??"mdi";return n==="mdi"&&!t.mdi&&(t.mdi=RK),Ln({defaultSet:n,sets:t,aliases:{...xK,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z","vuetify-play":["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",.6]]}},e)}const OK=e=>{const t=Le(pp);if(!t)throw new Error("Missing Vuetify Icons provide!");return{iconData:P(()=>{var l;const i=Ye(e);if(!i)return{component:yp};let r=i;if(typeof r=="string"&&(r=r.trim(),r.startsWith("$")&&(r=(l=t.aliases)==null?void 0:l[r.slice(1)])),Array.isArray(r))return{component:sb,icon:r};if(typeof r!="string")return{component:yp,icon:r};const s=Object.keys(t.sets).find(u=>typeof r=="string"&&r.startsWith(`${u}:`)),o=s?r.slice(s.length+1):r;return{component:t.sets[s??t.defaultSet].component,icon:o}})}},Hu=Symbol.for("vuetify:theme"),Qe=z({theme:String},"theme");function rI(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function NK(){var i,r;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:rI();const t=rI();if(!e)return{...t,isDisabled:!0};const n={};for(const[s,o]of Object.entries(e.themes??{})){const a=o.dark||s==="dark"?(i=t.themes)==null?void 0:i.dark:(r=t.themes)==null?void 0:r.light;n[s]=Ln(a,o)}return Ln(t,{...e,themes:n})}function LK(e){const t=NK(e),n=re(t.defaultTheme),i=re(t.themes),r=P(()=>{const c={};for(const[d,f]of Object.entries(i.value)){const m=c[d]={...f,colors:{...f.colors}};if(t.variations)for(const g of t.variations.colors){const y=m.colors[g];if(y)for(const p of["lighten","darken"]){const S=p==="lighten"?yG:_G;for(const w of ri(t.variations[p],1))m.colors[`${g}-${p}-${w}`]=nR(S(yi(y),w))}}for(const g of Object.keys(m.colors)){if(/^on-[a-z]/.test(g)||m.colors[`on-${g}`])continue;const y=`on-${g}`,p=yi(m.colors[g]);m.colors[y]=oR(p)}}return c}),s=P(()=>r.value[n.value]),o=P(()=>{var g;const c=[];(g=s.value)!=null&&g.dark&&zs(c,":root",["color-scheme: dark"]),zs(c,":root",sI(s.value));for(const[y,p]of Object.entries(r.value))zs(c,`.v-theme--${y}`,[`color-scheme: ${p.dark?"dark":"normal"}`,...sI(p)]);const d=[],f=[],m=new Set(Object.values(r.value).flatMap(y=>Object.keys(y.colors)));for(const y of m)/^on-[a-z]/.test(y)?zs(f,`.${y}`,[`color: rgb(var(--v-theme-${y})) !important`]):(zs(d,`.bg-${y}`,[`--v-theme-overlay-multiplier: var(--v-theme-${y}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${y})) !important`,`color: rgb(var(--v-theme-on-${y})) !important`]),zs(f,`.text-${y}`,[`color: rgb(var(--v-theme-${y})) !important`]),zs(f,`.border-${y}`,[`--v-border-color: var(--v-theme-${y})`]));return c.push(...d,...f),c.map((y,p)=>p===0?y:`    ${y}`).join("")});function a(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:t.cspNonce||!1}]}}function l(c){if(t.isDisabled)return;const d=c._context.provides.usehead;if(d)if(d.push){const f=d.push(a);et&&pe(o,()=>{f.patch(a)})}else et?(d.addHeadObjs(P(a)),Ht(()=>d.updateDOM())):d.addHeadObjs(a());else{let m=function(){if(typeof document<"u"&&!f){const g=document.createElement("style");g.type="text/css",g.id="vuetify-theme-stylesheet",t.cspNonce&&g.setAttribute("nonce",t.cspNonce),f=g,document.head.appendChild(f)}f&&(f.innerHTML=o.value)},f=et?document.getElementById("vuetify-theme-stylesheet"):null;et?pe(o,m,{immediate:!0}):m()}}const u=P(()=>t.isDisabled?void 0:`v-theme--${n.value}`);return{install:l,isDisabled:t.isDisabled,name:n,themes:i,current:s,computedThemes:r,themeClasses:u,styles:o,global:{name:n,current:s}}}function ot(e){Ot("provideTheme");const t=Le(Hu,null);if(!t)throw new Error("Could not find Vuetify theme injection");const n=P(()=>e.theme??t.name.value),i=P(()=>t.themes.value[n.value]),r=P(()=>t.isDisabled?void 0:`v-theme--${n.value}`),s={...t,name:n,current:i,themeClasses:r};return lt(Hu,s),s}function _R(){Ot("useTheme");const e=Le(Hu,null);if(!e)throw new Error("Could not find Vuetify theme injection");return e}function zs(e,t,n){e.push(`${t} {
`,...n.map(i=>`  ${i};
`),`}
`).splice(1).map(d=>({text:d.replace("webpack:/","").replace(".vue",".js").trim(),internal:d.includes("node_modules")&&!d.includes(".cache")||d.includes("internal")||d.includes("new Promise")})).map(d=>`<span class="stack${d.internal?" internal":""}">${d.text}</span>`).join(`
`);const i=Number(n.statusCode||500),r=i===404,s=n.statusMessage??(r?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,c=r?Yd(()=>ao(()=>import("./Svodkn5M.js"),__vite__mapDeps([8,4,9,10]),import.meta.url)):Yd(()=>ao(()=>import("./5Wsuepg9.js"),__vite__mapDeps([11,9,12]),import.meta.url));return(d,f)=>(gi(),Ki(Ye(c),eO(Zk({statusCode:Ye(i),statusMessage:Ye(s),description:Ye(o),stack:Ye(a)})),null,16))}},ZZ={key:0},xI={__name:"nuxt-root",setup(e){const t=()=>null,n=Jt(),i=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",i);Mi().beforeEach(l)}const r=!1;lt(oh,xE()),n.hooks.callHookWith(l=>l.map(u=>u()),"vue:setup");const s=ah(),o=!1;Ik((l,u,c)=>{if(n.hooks.callHook("vue:error",l,u,c).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),zF(l)&&(l.fatal||l.unhandled))return n.runWithContext(()=>ha(l)),!1});const a=!1;return(l,u)=>(gi(),Ki(qk,{onResolve:Ye(i)},{default:fk(()=>[Ye(o)?(gi(),EN("div",ZZ)):Ye(s)?(gi(),Ki(Ye(JZ),{key:1,error:Ye(s)},null,8,["error"])):Ye(a)?(gi(),Ki(Ye(t),{key:2,context:Ye(a)},null,8,["context"])):Ye(r)?(gi(),Ki(Ek(Ye(r)),{key:3})):(gi(),Ki(Ye(XZ),{key:4}))]),_:1},8,["onResolve"]))}};let RI;{let e;RI=async function(){var o,a;if(e)return e;const i=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?vL(xI):mL(xI),r=EF({vueApp:i});async function s(l){await r.callHook("app:error",l),r.payload.error=r.payload.error||lh(l)}i.config.errorHandler=s,r.hook("app:suspense:resolve",()=>{i.config.errorHandler===s&&(i.config.errorHandler=void 0)});try{await xF(r,HZ)}catch(l){s(l)}try{await r.hooks.callHook("app:created",i),await r.hooks.callHook("app:beforeMount",i),i.mount(TF),await r.hooks.callHook("app:mounted",i),await Ke()}catch(l){s(l)}return i},e=RI().catch(t=>{throw console.error("Error while mounting app:",t),t})}export{u_ as $,hee as A,vee as B,Lt as C,Ye as D,Gv as E,Ce as F,Po as G,Jt as H,Le as I,xE as J,pee as K,P as L,Mi as M,sd as N,ree as O,oh as P,Vj as Q,Wt as R,Ke as S,qk as T,Rr as U,lt as V,UF as W,nee as X,iee as Y,qt as Z,KZ as _,Jk as a,sC as a0,yee as a1,VL as a2,see as a3,xo as a4,jF as a5,Ey as a6,oee as a7,ac as a8,Qv as a9,ky as aa,hm as ab,mm as ac,eO as ad,Zk as ae,Jf as af,tee as ag,Xf as ah,v as b,EN as c,wi as d,Ht as e,Rg as f,pe as g,Zt as h,gee as i,vy as j,Sk as k,el as l,Ki as m,KO as n,gi as o,li as p,eee as q,re as r,Vt as s,UI as t,te as u,_ee as v,fk as w,dee as x,fee as y,mee as z};