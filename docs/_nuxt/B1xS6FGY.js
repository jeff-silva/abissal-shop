const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DU_1ZcDt.js","./BR6Qh4uT.js","./D5VjKcZg.js","./QkZihlVS.js","./BCDKgOi3.js","./DIiyBbwU.js","./adMxDPZJ.js","./index.rXODTNaE.css","./CMGBYpWc.js","./admin.Chd_gRcJ.css","./2s1XYeAN.js","./DFws_RKX.js","./error-404.CoZKRZXM.css","./B4Pwrxtt.js","./error-500.D6506J9O.css"])))=>i.map(i=>d[i]);
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function _y(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const wt={},xa=[],ir=()=>{},GN=()=>!1,mc=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),by=e=>e.startsWith("onUpdate:"),Gt=Object.assign,wy=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},KN=Object.prototype.hasOwnProperty,vt=(e,t)=>KN.call(e,t),Be=Array.isArray,Ra=e=>vc(e)==="[object Map]",fI=e=>vc(e)==="[object Set]",YN=e=>vc(e)==="[object RegExp]",je=e=>typeof e=="function",Vt=e=>typeof e=="string",Wr=e=>typeof e=="symbol",Ct=e=>e!==null&&typeof e=="object",hI=e=>(Ct(e)||je(e))&&je(e.then)&&je(e.catch),mI=Object.prototype.toString,vc=e=>mI.call(e),QN=e=>vc(e).slice(8,-1),vI=e=>vc(e)==="[object Object]",Sy=e=>Vt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Va=_y(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vh=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},XN=/-(\w)/g,ni=vh(e=>e.replace(XN,(t,n)=>n?n.toUpperCase():"")),JN=/\B([A-Z])/g,Lo=vh(e=>e.replace(JN,"-$1").toLowerCase()),hr=vh(e=>e.charAt(0).toUpperCase()+e.slice(1)),Xm=vh(e=>e?`on${hr(e)}`:""),gs=(e,t)=>!Object.is(e,t),Da=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},gI=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},Xv=e=>{const t=parseFloat(e);return isNaN(t)?e:t},pI=e=>{const t=Vt(e)?Number(e):NaN;return isNaN(t)?e:t};let y0;const gh=()=>y0||(y0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ph(e){if(Be(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],r=Vt(i)?nO(i):ph(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(Vt(e)||Ct(e))return e}const ZN=/;(?![^(]*\))/g,eO=/:([^]+)/,tO=/\/\*[^]*?\*\//g;function nO(e){const t={};return e.replace(tO,"").split(ZN).forEach(n=>{if(n){const i=n.split(eO);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function yh(e){let t="";if(Vt(e))t=e;else if(Be(e))for(let n=0;n<e.length;n++){const i=yh(e[n]);i&&(t+=i+" ")}else if(Ct(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function iO(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Vt(t)&&(e.class=yh(t)),n&&(e.style=ph(n)),e}const rO="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sO=_y(rO);function yI(e){return!!e||e===""}const _I=e=>!!(e&&e.__v_isRef===!0),bI=e=>Vt(e)?e:e==null?"":Be(e)||Ct(e)&&(e.toString===mI||!je(e.toString))?_I(e)?bI(e.value):JSON.stringify(e,wI,2):String(e),wI=(e,t)=>_I(t)?wI(e,t.value):Ra(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,r],s)=>(n[Jm(i,s)+" =>"]=r,n),{})}:fI(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Jm(n))}:Wr(t)?Jm(t):Ct(t)&&!Be(t)&&!vI(t)?String(t):t,Jm=(e,t="")=>{var n;return Wr(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yn;class SI{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Yn,!t&&Yn&&(this.index=(Yn.scopes||(Yn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Yn;try{return Yn=this,t()}finally{Yn=n}}}on(){Yn=this}off(){Yn=this.parent}stop(t){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function gc(e){return new SI(e)}function TI(){return Yn}function jn(e,t=!1){Yn&&Yn.cleanups.push(e)}let St;const Zm=new WeakSet;class CI{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Yn&&Yn.active&&Yn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Zm.has(this)&&(Zm.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||II(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_0(this),kI(this);const t=St,n=Li;St=this,Li=!0;try{return this.fn()}finally{AI(this),St=t,Li=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ey(t);this.deps=this.depsTail=void 0,_0(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Zm.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Jv(this)&&this.run()}get dirty(){return Jv(this)}}let EI=0,uu,cu;function II(e,t=!1){if(e.flags|=8,t){e.next=cu,cu=e;return}e.next=uu,uu=e}function Ty(){EI++}function Cy(){if(--EI>0)return;if(cu){let t=cu;for(cu=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;uu;){let t=uu;for(uu=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){e||(e=i)}t=n}}if(e)throw e}function kI(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function AI(e){let t,n=e.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Ey(i),oO(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}e.deps=t,e.depsTail=n}function Jv(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(PI(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function PI(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===xu))return;e.globalVersion=xu;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!Jv(e)){e.flags&=-3;return}const n=St,i=Li;St=e,Li=!0;try{kI(e);const r=e.fn(e._value);(t.version===0||gs(r,e._value))&&(e._value=r,t.version++)}catch(r){throw t.version++,r}finally{St=n,Li=i,AI(e),e.flags&=-3}}function Ey(e,t=!1){const{dep:n,prevSub:i,nextSub:r}=e;if(i&&(i.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=i,e.nextSub=void 0),n.subs===e&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Ey(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function oO(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Li=!0;const xI=[];function Ls(){xI.push(Li),Li=!1}function Fs(){const e=xI.pop();Li=e===void 0?!0:e}function _0(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=St;St=void 0;try{t()}finally{St=n}}}let xu=0;class aO{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Iy{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!St||!Li||St===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==St)n=this.activeLink=new aO(St,this),St.deps?(n.prevDep=St.depsTail,St.depsTail.nextDep=n,St.depsTail=n):St.deps=St.depsTail=n,RI(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=St.depsTail,n.nextDep=void 0,St.depsTail.nextDep=n,St.depsTail=n,St.deps===n&&(St.deps=i)}return n}trigger(t){this.version++,xu++,this.notify(t)}notify(t){Ty();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Cy()}}}function RI(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)RI(i)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const lf=new WeakMap,uo=Symbol(""),Zv=Symbol(""),Ru=Symbol("");function Mn(e,t,n){if(Li&&St){let i=lf.get(e);i||lf.set(e,i=new Map);let r=i.get(n);r||(i.set(n,r=new Iy),r.map=i,r.key=n),r.track()}}function kr(e,t,n,i,r,s){const o=lf.get(e);if(!o){xu++;return}const a=l=>{l&&l.trigger()};if(Ty(),t==="clear")o.forEach(a);else{const l=Be(e),u=l&&Sy(n);if(l&&n==="length"){const c=Number(i);o.forEach((d,f)=>{(f==="length"||f===Ru||!Wr(f)&&f>=c)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Ru)),t){case"add":l?u&&a(o.get("length")):(a(o.get(uo)),Ra(e)&&a(o.get(Zv)));break;case"delete":l||(a(o.get(uo)),Ra(e)&&a(o.get(Zv)));break;case"set":Ra(e)&&a(o.get(uo));break}}Cy()}function lO(e,t){const n=lf.get(e);return n&&n.get(t)}function ua(e){const t=Oe(e);return t===e?t:(Mn(t,"iterate",Ru),Ii(e)?t:t.map(Nn))}function _h(e){return Mn(e=Oe(e),"iterate",Ru),e}const uO={__proto__:null,[Symbol.iterator](){return ev(this,Symbol.iterator,Nn)},concat(...e){return ua(this).concat(...e.map(t=>Be(t)?ua(t):t))},entries(){return ev(this,"entries",e=>(e[1]=Nn(e[1]),e))},every(e,t){return Tr(this,"every",e,t,void 0,arguments)},filter(e,t){return Tr(this,"filter",e,t,n=>n.map(Nn),arguments)},find(e,t){return Tr(this,"find",e,t,Nn,arguments)},findIndex(e,t){return Tr(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Tr(this,"findLast",e,t,Nn,arguments)},findLastIndex(e,t){return Tr(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Tr(this,"forEach",e,t,void 0,arguments)},includes(...e){return tv(this,"includes",e)},indexOf(...e){return tv(this,"indexOf",e)},join(e){return ua(this).join(e)},lastIndexOf(...e){return tv(this,"lastIndexOf",e)},map(e,t){return Tr(this,"map",e,t,void 0,arguments)},pop(){return zl(this,"pop")},push(...e){return zl(this,"push",e)},reduce(e,...t){return b0(this,"reduce",e,t)},reduceRight(e,...t){return b0(this,"reduceRight",e,t)},shift(){return zl(this,"shift")},some(e,t){return Tr(this,"some",e,t,void 0,arguments)},splice(...e){return zl(this,"splice",e)},toReversed(){return ua(this).toReversed()},toSorted(e){return ua(this).toSorted(e)},toSpliced(...e){return ua(this).toSpliced(...e)},unshift(...e){return zl(this,"unshift",e)},values(){return ev(this,"values",Nn)}};function ev(e,t,n){const i=_h(e),r=i[t]();return i!==e&&!Ii(e)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const cO=Array.prototype;function Tr(e,t,n,i,r,s){const o=_h(e),a=o!==e&&!Ii(e),l=o[t];if(l!==cO[t]){const d=l.apply(e,s);return a?Nn(d):d}let u=n;o!==e&&(a?u=function(d,f){return n.call(this,Nn(d),f,e)}:n.length>2&&(u=function(d,f){return n.call(this,d,f,e)}));const c=l.call(o,u,i);return a&&r?r(c):c}function b0(e,t,n,i){const r=_h(e);let s=n;return r!==e&&(Ii(e)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,e)}):s=function(o,a,l){return n.call(this,o,Nn(a),l,e)}),r[t](s,...i)}function tv(e,t,n){const i=Oe(e);Mn(i,"iterate",Ru);const r=i[t](...n);return(r===-1||r===!1)&&Py(n[0])?(n[0]=Oe(n[0]),i[t](...n)):r}function zl(e,t,n=[]){Ls(),Ty();const i=Oe(e)[t].apply(e,n);return Cy(),Fs(),i}const dO=_y("__proto__,__v_isRef,__isVue"),VI=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Wr));function fO(e){Wr(e)||(e=String(e));const t=Oe(this);return Mn(t,"has",e),t.hasOwnProperty(e)}class DI{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,i){if(n==="__v_skip")return t.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?SO:LI:s?OI:NI).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Be(t);if(!r){let l;if(o&&(l=uO[n]))return l;if(n==="hasOwnProperty")return fO}const a=Reflect.get(t,n,Nt(t)?t:i);return(Wr(n)?VI.has(n):dO(n))||(r||Mn(t,"get",n),s)?a:Nt(a)?o&&Sy(n)?a:a.value:Ct(a)?r?pc(a):Ft(a):a}}class MI extends DI{constructor(t=!1){super(!1,t)}set(t,n,i,r){let s=t[n];if(!this._isShallow){const l=Es(s);if(!Ii(i)&&!Es(i)&&(s=Oe(s),i=Oe(i)),!Be(t)&&Nt(s)&&!Nt(i))return l?!1:(s.value=i,!0)}const o=Be(t)&&Sy(n)?Number(n)<t.length:vt(t,n),a=Reflect.set(t,n,i,Nt(t)?t:r);return t===Oe(r)&&(o?gs(i,s)&&kr(t,"set",n,i):kr(t,"add",n,i)),a}deleteProperty(t,n){const i=vt(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&i&&kr(t,"delete",n,void 0),r}has(t,n){const i=Reflect.has(t,n);return(!Wr(n)||!VI.has(n))&&Mn(t,"has",n),i}ownKeys(t){return Mn(t,"iterate",Be(t)?"length":uo),Reflect.ownKeys(t)}}class hO extends DI{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const mO=new MI,vO=new hO,gO=new MI(!0);const eg=e=>e,rd=e=>Reflect.getPrototypeOf(e);function pO(e,t,n){return function(...i){const r=this.__v_raw,s=Oe(r),o=Ra(s),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=r[e](...i),c=n?eg:t?tg:Nn;return!t&&Mn(s,"iterate",l?Zv:uo),{next(){const{value:d,done:f}=u.next();return f?{value:d,done:f}:{value:a?[c(d[0]),c(d[1])]:c(d),done:f}},[Symbol.iterator](){return this}}}}function sd(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function yO(e,t){const n={get(r){const s=this.__v_raw,o=Oe(s),a=Oe(r);e||(gs(r,a)&&Mn(o,"get",r),Mn(o,"get",a));const{has:l}=rd(o),u=t?eg:e?tg:Nn;if(l.call(o,r))return u(s.get(r));if(l.call(o,a))return u(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!e&&Mn(Oe(r),"iterate",uo),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=Oe(s),a=Oe(r);return e||(gs(r,a)&&Mn(o,"has",r),Mn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Oe(a),u=t?eg:e?tg:Nn;return!e&&Mn(l,"iterate",uo),a.forEach((c,d)=>r.call(s,u(c),u(d),o))}};return Gt(n,e?{add:sd("add"),set:sd("set"),delete:sd("delete"),clear:sd("clear")}:{add(r){!t&&!Ii(r)&&!Es(r)&&(r=Oe(r));const s=Oe(this);return rd(s).has.call(s,r)||(s.add(r),kr(s,"add",r,r)),this},set(r,s){!t&&!Ii(s)&&!Es(s)&&(s=Oe(s));const o=Oe(this),{has:a,get:l}=rd(o);let u=a.call(o,r);u||(r=Oe(r),u=a.call(o,r));const c=l.call(o,r);return o.set(r,s),u?gs(s,c)&&kr(o,"set",r,s):kr(o,"add",r,s),this},delete(r){const s=Oe(this),{has:o,get:a}=rd(s);let l=o.call(s,r);l||(r=Oe(r),l=o.call(s,r)),a&&a.call(s,r);const u=s.delete(r);return l&&kr(s,"delete",r,void 0),u},clear(){const r=Oe(this),s=r.size!==0,o=r.clear();return s&&kr(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=pO(r,e,t)}),n}function ky(e,t){const n=yO(e,t);return(i,r,s)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?i:Reflect.get(vt(n,r)&&r in i?n:i,r,s)}const _O={get:ky(!1,!1)},bO={get:ky(!1,!0)},wO={get:ky(!0,!1)};const NI=new WeakMap,OI=new WeakMap,LI=new WeakMap,SO=new WeakMap;function TO(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function CO(e){return e.__v_skip||!Object.isExtensible(e)?0:TO(QN(e))}function Ft(e){return Es(e)?e:Ay(e,!1,mO,_O,NI)}function Pr(e){return Ay(e,!1,gO,bO,OI)}function pc(e){return Ay(e,!0,vO,wO,LI)}function Ay(e,t,n,i,r){if(!Ct(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=r.get(e);if(s)return s;const o=CO(e);if(o===0)return e;const a=new Proxy(e,o===2?i:n);return r.set(e,a),a}function co(e){return Es(e)?co(e.__v_raw):!!(e&&e.__v_isReactive)}function Es(e){return!!(e&&e.__v_isReadonly)}function Ii(e){return!!(e&&e.__v_isShallow)}function Py(e){return e?!!e.__v_raw:!1}function Oe(e){const t=e&&e.__v_raw;return t?Oe(t):e}function uf(e){return!vt(e,"__v_skip")&&Object.isExtensible(e)&&gI(e,"__v_skip",!0),e}const Nn=e=>Ct(e)?Ft(e):e,tg=e=>Ct(e)?pc(e):e;function Nt(e){return e?e.__v_isRef===!0:!1}function re(e){return FI(e,!1)}function ge(e){return FI(e,!0)}function FI(e,t){return Nt(e)?e:new EO(e,t)}class EO{constructor(t,n){this.dep=new Iy,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Oe(t),this._value=n?t:Nn(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,i=this.__v_isShallow||Ii(t)||Es(t);t=i?t:Oe(t),gs(t,n)&&(this._rawValue=t,this._value=i?t:Nn(t),this.dep.trigger())}}function Qe(e){return Nt(e)?e.value:e}const IO={get:(e,t,n)=>t==="__v_raw"?e:Qe(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const r=e[t];return Nt(r)&&!Nt(n)?(r.value=n,!0):Reflect.set(e,t,n,i)}};function BI(e){return co(e)?e:new Proxy(e,IO)}function Bs(e){const t=Be(e)?new Array(e.length):{};for(const n in e)t[n]=$I(e,n);return t}class kO{constructor(t,n,i){this._object=t,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return lO(Oe(this._object),this._key)}}class AO{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Q(e,t,n){return Nt(e)?e:je(e)?new AO(e):Ct(e)&&arguments.length>1?$I(e,t,n):re(e)}function $I(e,t,n){const i=e[t];return Nt(i)?i:new kO(e,t,n)}class PO{constructor(t,n,i){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Iy(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=xu-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&St!==this)return II(this,!0),!0}get value(){const t=this.dep.track();return PI(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function xO(e,t,n=!1){let i,r;return je(e)?i=e:(i=e.get,r=e.set),new PO(i,r,n)}const od={},cf=new WeakMap;let eo;function RO(e,t=!1,n=eo){if(n){let i=cf.get(n);i||cf.set(n,i=[]),i.push(e)}}function VO(e,t,n=wt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,u=x=>r?x:Ii(x)||r===!1||r===0?Ar(x,1):Ar(x);let c,d,f,m,g=!1,y=!1;if(Nt(e)?(d=()=>e.value,g=Ii(e)):co(e)?(d=()=>u(e),g=!0):Be(e)?(y=!0,g=e.some(x=>co(x)||Ii(x)),d=()=>e.map(x=>{if(Nt(x))return x.value;if(co(x))return u(x);if(je(x))return l?l(x,2):x()})):je(e)?t?d=l?()=>l(e,2):e:d=()=>{if(f){Ls();try{f()}finally{Fs()}}const x=eo;eo=c;try{return l?l(e,3,[m]):e(m)}finally{eo=x}}:d=ir,t&&r){const x=d,V=r===!0?1/0:r;d=()=>Ar(x(),V)}const p=TI(),S=()=>{c.stop(),p&&p.active&&wy(p.effects,c)};if(s&&t){const x=t;t=(...V)=>{x(...V),S()}}let w=y?new Array(e.length).fill(od):od;const T=x=>{if(!(!(c.flags&1)||!c.dirty&&!x))if(t){const V=c.run();if(r||g||(y?V.some((D,A)=>gs(D,w[A])):gs(V,w))){f&&f();const D=eo;eo=c;try{const A=[V,w===od?void 0:y&&w[0]===od?[]:w,m];l?l(t,3,A):t(...A),w=V}finally{eo=D}}}else c.run()};return a&&a(T),c=new CI(d),c.scheduler=o?()=>o(T,!1):T,m=x=>RO(x,!1,c),f=c.onStop=()=>{const x=cf.get(c);if(x){if(l)l(x,4);else for(const V of x)V();cf.delete(c)}},t?i?T(!0):w=c.run():o?o(T.bind(null,!0),!0):c.run(),S.pause=c.pause.bind(c),S.resume=c.resume.bind(c),S.stop=S,S}function Ar(e,t=1/0,n){if(t<=0||!Ct(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Nt(e))Ar(e.value,t,n);else if(Be(e))for(let i=0;i<e.length;i++)Ar(e[i],t,n);else if(fI(e)||Ra(e))e.forEach(i=>{Ar(i,t,n)});else if(vI(e)){for(const i in e)Ar(e[i],t,n);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&Ar(e[i],t,n)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yc(e,t,n,i){try{return i?e(...i):e()}catch(r){ul(r,t,n)}}function $i(e,t,n,i){if(je(e)){const r=yc(e,t,n,i);return r&&hI(r)&&r.catch(s=>{ul(s,t,n)}),r}if(Be(e)){const r=[];for(let s=0;s<e.length;s++)r.push($i(e[s],t,n,i));return r}}function ul(e,t,n,i=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||wt;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,l,u)===!1)return}a=a.parent}if(s){Ls(),yc(s,null,10,[e,l,u]),Fs();return}}DO(e,n,r,i,o)}function DO(e,t,n,i=!0,r=!1){if(r)throw e;console.error(e)}const Qn=[];let Ji=-1;const Ma=[];let is=null,ga=0;const UI=Promise.resolve();let df=null;function Ye(e){const t=df||UI;return e?t.then(this?e.bind(this):e):t}function MO(e){let t=Ji+1,n=Qn.length;for(;t<n;){const i=t+n>>>1,r=Qn[i],s=Vu(r);s<e||s===e&&r.flags&2?t=i+1:n=i}return t}function xy(e){if(!(e.flags&1)){const t=Vu(e),n=Qn[Qn.length-1];!n||!(e.flags&2)&&t>=Vu(n)?Qn.push(e):Qn.splice(MO(t),0,e),e.flags|=1,HI()}}function HI(){df||(df=UI.then(jI))}function ng(e){Be(e)?Ma.push(...e):is&&e.id===-1?is.splice(ga+1,0,e):e.flags&1||(Ma.push(e),e.flags|=1),HI()}function w0(e,t,n=Ji+1){for(;n<Qn.length;n++){const i=Qn[n];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;Qn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ff(e){if(Ma.length){const t=[...new Set(Ma)].sort((n,i)=>Vu(n)-Vu(i));if(Ma.length=0,is){is.push(...t);return}for(is=t,ga=0;ga<is.length;ga++){const n=is[ga];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}is=null,ga=0}}const Vu=e=>e.id==null?e.flags&2?-1:1/0:e.id;function jI(e){try{for(Ji=0;Ji<Qn.length;Ji++){const t=Qn[Ji];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),yc(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ji<Qn.length;Ji++){const t=Qn[Ji];t&&(t.flags&=-2)}Ji=-1,Qn.length=0,ff(),df=null,(Qn.length||Ma.length)&&jI()}}let un=null,WI=null;function hf(e){const t=un;return un=e,WI=e&&e.type.__scopeId||null,t}function zI(e,t=un,n){if(!t||e._n)return e;const i=(...r)=>{i._d&&O0(-1);const s=hf(t);let o;try{o=e(...r)}finally{hf(s),i._d&&O0(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Dt(e,t){if(un===null)return e;const n=Eh(un),i=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[s,o,a,l=wt]=t[r];s&&(je(s)&&(s={mounted:s,updated:s}),s.deep&&Ar(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function Zi(e,t,n,i){const r=e.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Ls(),$i(l,n,8,[e.el,a,e,t]),Fs())}}const qI=Symbol("_vte"),GI=e=>e.__isTeleport,du=e=>e&&(e.disabled||e.disabled===""),S0=e=>e&&(e.defer||e.defer===""),T0=e=>typeof SVGElement<"u"&&e instanceof SVGElement,C0=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,ig=(e,t)=>{const n=e&&e.to;return Vt(n)?t?t(n):null:n},KI={name:"Teleport",__isTeleport:!0,process(e,t,n,i,r,s,o,a,l,u){const{mc:c,pc:d,pbc:f,o:{insert:m,querySelector:g,createText:y,createComment:p}}=u,S=du(t.props);let{shapeFlag:w,children:T,dynamicChildren:x}=t;if(e==null){const V=t.el=y(""),D=t.anchor=y("");m(V,n,i),m(D,n,i);const A=(_,E)=>{w&16&&(r&&r.isCE&&(r.ce._teleportTarget=_),c(T,_,E,r,s,o,a,l))},b=()=>{const _=t.target=ig(t.props,g),E=YI(_,t,y,m);_&&(o!=="svg"&&T0(_)?o="svg":o!=="mathml"&&C0(_)&&(o="mathml"),S||(A(_,E),Ld(t,!1)))};S&&(A(n,D),Ld(t,!0)),S0(t.props)?an(()=>{b(),t.el.__isMounted=!0},s):b()}else{if(S0(t.props)&&!e.el.__isMounted){an(()=>{KI.process(e,t,n,i,r,s,o,a,l,u),delete e.el.__isMounted},s);return}t.el=e.el,t.targetStart=e.targetStart;const V=t.anchor=e.anchor,D=t.target=e.target,A=t.targetAnchor=e.targetAnchor,b=du(e.props),_=b?n:D,E=b?V:A;if(o==="svg"||T0(D)?o="svg":(o==="mathml"||C0(D))&&(o="mathml"),x?(f(e.dynamicChildren,x,_,r,s,o,a),By(e,t,!0)):l||d(e,t,_,E,r,s,o,a,!1),S)b?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):ad(t,n,V,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const k=t.target=ig(t.props,g);k&&ad(t,k,null,u,0)}else b&&ad(t,D,A,u,1);Ld(t,S)}},remove(e,t,n,{um:i,o:{remove:r}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:u,targetAnchor:c,target:d,props:f}=e;if(d&&(r(u),r(c)),s&&r(l),o&16){const m=s||!du(f);for(let g=0;g<a.length;g++){const y=a[g];i(y,t,n,m,!!y.dynamicChildren)}}},move:ad,hydrate:NO};function ad(e,t,n,{o:{insert:i},m:r},s=2){s===0&&i(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:l,children:u,props:c}=e,d=s===2;if(d&&i(o,t,n),(!d||du(c))&&l&16)for(let f=0;f<u.length;f++)r(u[f],t,n,2);d&&i(a,t,n)}function NO(e,t,n,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:u,createText:c}},d){const f=t.target=ig(t.props,l);if(f){const m=du(t.props),g=f._lpa||f.firstChild;if(t.shapeFlag&16)if(m)t.anchor=d(o(e),t,a(e),n,i,r,s),t.targetStart=g,t.targetAnchor=g&&o(g);else{t.anchor=o(e);let y=g;for(;y;){if(y&&y.nodeType===8){if(y.data==="teleport start anchor")t.targetStart=y;else if(y.data==="teleport anchor"){t.targetAnchor=y,f._lpa=t.targetAnchor&&o(t.targetAnchor);break}}y=o(y)}t.targetAnchor||YI(f,t,c,u),d(g&&o(g),t,f,n,i,r,s)}Ld(t,m)}return t.anchor&&o(t.anchor)}const OO=KI;function Ld(e,t){const n=e.ctx;if(n&&n.ut){let i,r;for(t?(i=e.el,r=e.anchor):(i=e.targetStart,r=e.targetAnchor);i&&i!==r;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function YI(e,t,n,i){const r=t.targetStart=n(""),s=t.targetAnchor=n("");return r[qI]=s,e&&(i(r,e),i(s,e)),s}const rs=Symbol("_leaveCb"),ld=Symbol("_enterCb");function QI(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Kt(()=>{e.isMounted=!0}),rn(()=>{e.isUnmounting=!0}),e}const bi=[Function,Array],XI={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:bi,onEnter:bi,onAfterEnter:bi,onEnterCancelled:bi,onBeforeLeave:bi,onLeave:bi,onAfterLeave:bi,onLeaveCancelled:bi,onBeforeAppear:bi,onAppear:bi,onAfterAppear:bi,onAppearCancelled:bi},JI=e=>{const t=e.subTree;return t.component?JI(t.component):t},LO={name:"BaseTransition",props:XI,setup(e,{slots:t}){const n=cl(),i=QI();return()=>{const r=t.default&&Ry(t.default(),!0);if(!r||!r.length)return;const s=ZI(r),o=Oe(e),{mode:a}=o;if(i.isLeaving)return nv(s);const l=E0(s);if(!l)return nv(s);let u=Du(l,o,i,n,d=>u=d);l.type!==Jt&&Is(l,u);let c=n.subTree&&E0(n.subTree);if(c&&c.type!==Jt&&!Di(l,c)&&JI(n).type!==Jt){let d=Du(c,o,i,n);if(Is(c,d),a==="out-in"&&l.type!==Jt)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,c=void 0},nv(s);a==="in-out"&&l.type!==Jt?d.delayLeave=(f,m,g)=>{const y=ek(i,c);y[String(c.key)]=c,f[rs]=()=>{m(),f[rs]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{g(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return s}}};function ZI(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Jt){t=n;break}}return t}const FO=LO;function ek(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function Du(e,t,n,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:f,onLeave:m,onAfterLeave:g,onLeaveCancelled:y,onBeforeAppear:p,onAppear:S,onAfterAppear:w,onAppearCancelled:T}=t,x=String(e.key),V=ek(n,e),D=(_,E)=>{_&&$i(_,i,9,E)},A=(_,E)=>{const k=E[1];D(_,E),Be(_)?_.every(I=>I.length<=1)&&k():_.length<=1&&k()},b={mode:o,persisted:a,beforeEnter(_){let E=l;if(!n.isMounted)if(s)E=p||l;else return;_[rs]&&_[rs](!0);const k=V[x];k&&Di(e,k)&&k.el[rs]&&k.el[rs](),D(E,[_])},enter(_){let E=u,k=c,I=d;if(!n.isMounted)if(s)E=S||u,k=w||c,I=T||d;else return;let R=!1;const B=_[ld]=$=>{R||(R=!0,$?D(I,[_]):D(k,[_]),b.delayedLeave&&b.delayedLeave(),_[ld]=void 0)};E?A(E,[_,B]):B()},leave(_,E){const k=String(e.key);if(_[ld]&&_[ld](!0),n.isUnmounting)return E();D(f,[_]);let I=!1;const R=_[rs]=B=>{I||(I=!0,E(),B?D(y,[_]):D(g,[_]),_[rs]=void 0,V[k]===e&&delete V[k])};V[k]=e,m?A(m,[_,R]):R()},clone(_){const E=Du(_,t,n,i,r);return r&&r(E),E}};return b}function nv(e){if(_c(e))return e=lr(e),e.children=null,e}function E0(e){if(!_c(e))return GI(e.type)&&e.children?ZI(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&je(n.default))return n.default()}}function Is(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Is(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ry(e,t=!1,n){let i=[],r=0;for(let s=0;s<e.length;s++){let o=e[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Te?(o.patchFlag&128&&r++,i=i.concat(Ry(o.children,t,a))):(t||o.type!==Jt)&&i.push(a!=null?lr(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Fo(e,t){return je(e)?Gt({name:e.name},t,{setup:e}):e}function Vy(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Mu(e,t,n,i,r=!1){if(Be(e)){e.forEach((g,y)=>Mu(g,t&&(Be(t)?t[y]:t),n,i,r));return}if(ps(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Mu(e,t,n,i.component.subTree);return}const s=i.shapeFlag&4?Eh(i.component):i.el,o=r?null:s,{i:a,r:l}=e,u=t&&t.r,c=a.refs===wt?a.refs={}:a.refs,d=a.setupState,f=Oe(d),m=d===wt?()=>!1:g=>vt(f,g);if(u!=null&&u!==l&&(Vt(u)?(c[u]=null,m(u)&&(d[u]=null)):Nt(u)&&(u.value=null)),je(l))yc(l,a,12,[o,c]);else{const g=Vt(l),y=Nt(l);if(g||y){const p=()=>{if(e.f){const S=g?m(l)?d[l]:c[l]:l.value;r?Be(S)&&wy(S,s):Be(S)?S.includes(s)||S.push(s):g?(c[l]=[s],m(l)&&(d[l]=c[l])):(l.value=[s],e.k&&(c[e.k]=l.value))}else g?(c[l]=o,m(l)&&(d[l]=o)):y&&(l.value=o,e.k&&(c[e.k]=o))};o?(p.id=-1,an(p,n)):p()}}}let I0=!1;const ca=()=>{I0||(console.error("Hydration completed but contains mismatches."),I0=!0)},BO=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",$O=e=>e.namespaceURI.includes("MathML"),ud=e=>{if(e.nodeType===1){if(BO(e))return"svg";if($O(e))return"mathml"}},Ta=e=>e.nodeType===8;function UO(e){const{mt:t,p:n,o:{patchProp:i,createText:r,nextSibling:s,parentNode:o,remove:a,insert:l,createComment:u}}=e,c=(T,x)=>{if(!x.hasChildNodes()){n(null,T,x),ff(),x._vnode=T;return}d(x.firstChild,T,null,null,null),ff(),x._vnode=T},d=(T,x,V,D,A,b=!1)=>{b=b||!!x.dynamicChildren;const _=Ta(T)&&T.data==="[",E=()=>y(T,x,V,D,A,_),{type:k,ref:I,shapeFlag:R,patchFlag:B}=x;let $=T.nodeType;x.el=T,B===-2&&(b=!1,x.dynamicChildren=null);let U=null;switch(k){case ys:$!==3?x.children===""?(l(x.el=r(""),o(T),T),U=T):U=E():(T.data!==x.children&&(ca(),T.data=x.children),U=s(T));break;case Jt:w(T)?(U=s(T),S(x.el=T.content.firstChild,T,V)):$!==8||_?U=E():U=s(T);break;case hu:if(_&&(T=s(T),$=T.nodeType),$===1||$===3){U=T;const q=!x.children.length;for(let F=0;F<x.staticCount;F++)q&&(x.children+=U.nodeType===1?U.outerHTML:U.data),F===x.staticCount-1&&(x.anchor=U),U=s(U);return _?s(U):U}else E();break;case Te:_?U=g(T,x,V,D,A,b):U=E();break;default:if(R&1)($!==1||x.type.toLowerCase()!==T.tagName.toLowerCase())&&!w(T)?U=E():U=f(T,x,V,D,A,b);else if(R&6){x.slotScopeIds=A;const q=o(T);if(_?U=p(T):Ta(T)&&T.data==="teleport start"?U=p(T,T.data,"teleport end"):U=s(T),t(x,q,null,V,D,ud(q),b),ps(x)&&!x.type.__asyncResolved){let F;_?(F=v(Te),F.anchor=U?U.previousSibling:q.lastChild):F=T.nodeType===3?ki(""):v("div"),F.el=T,x.component.subTree=F}}else R&64?$!==8?U=E():U=x.type.hydrate(T,x,V,D,A,b,e,m):R&128&&(U=x.type.hydrate(T,x,V,D,ud(o(T)),A,b,e,d))}return I!=null&&Mu(I,null,D,x),U},f=(T,x,V,D,A,b)=>{b=b||!!x.dynamicChildren;const{type:_,props:E,patchFlag:k,shapeFlag:I,dirs:R,transition:B}=x,$=_==="input"||_==="option";if($||k!==-1){R&&Zi(x,null,V,"created");let U=!1;if(w(T)){U=wk(null,B)&&V&&V.vnode.props&&V.vnode.props.appear;const F=T.content.firstChild;U&&B.beforeEnter(F),S(F,T,V),x.el=T=F}if(I&16&&!(E&&(E.innerHTML||E.textContent))){let F=m(T.firstChild,x,T,V,D,A,b);for(;F;){cd(T,1)||ca();const H=F;F=F.nextSibling,a(H)}}else if(I&8){let F=x.children;F[0]===`
`&&(T.tagName==="PRE"||T.tagName==="TEXTAREA")&&(F=F.slice(1)),T.textContent!==F&&(cd(T,0)||ca(),T.textContent=x.children)}if(E){if($||!b||k&48){const F=T.tagName.includes("-");for(const H in E)($&&(H.endsWith("value")||H==="indeterminate")||mc(H)&&!Va(H)||H[0]==="."||F)&&i(T,H,null,E[H],void 0,V)}else if(E.onClick)i(T,"onClick",null,E.onClick,void 0,V);else if(k&4&&co(E.style))for(const F in E.style)E.style[F]}let q;(q=E&&E.onVnodeBeforeMount)&&Jn(q,V,x),R&&Zi(x,null,V,"beforeMount"),((q=E&&E.onVnodeMounted)||R||U)&&kk(()=>{q&&Jn(q,V,x),U&&B.enter(T),R&&Zi(x,null,V,"mounted")},D)}return T.nextSibling},m=(T,x,V,D,A,b,_)=>{_=_||!!x.dynamicChildren;const E=x.children,k=E.length;for(let I=0;I<k;I++){const R=_?E[I]:E[I]=oi(E[I]),B=R.type===ys;T?(B&&!_&&I+1<k&&oi(E[I+1]).type===ys&&(l(r(T.data.slice(R.children.length)),V,s(T)),T.data=R.children),T=d(T,R,D,A,b,_)):B&&!R.children?l(R.el=r(""),V):(cd(V,1)||ca(),n(null,R,V,null,D,A,ud(V),b))}return T},g=(T,x,V,D,A,b)=>{const{slotScopeIds:_}=x;_&&(A=A?A.concat(_):_);const E=o(T),k=m(s(T),x,E,V,D,A,b);return k&&Ta(k)&&k.data==="]"?s(x.anchor=k):(ca(),l(x.anchor=u("]"),E,k),k)},y=(T,x,V,D,A,b)=>{if(cd(T.parentElement,1)||ca(),x.el=null,b){const k=p(T);for(;;){const I=s(T);if(I&&I!==k)a(I);else break}}const _=s(T),E=o(T);return a(T),n(null,x,E,_,V,D,ud(E),A),V&&(V.vnode.el=x.el,Ch(V,x.el)),_},p=(T,x="[",V="]")=>{let D=0;for(;T;)if(T=s(T),T&&Ta(T)&&(T.data===x&&D++,T.data===V)){if(D===0)return s(T);D--}return T},S=(T,x,V)=>{const D=x.parentNode;D&&D.replaceChild(T,x);let A=V;for(;A;)A.vnode.el===x&&(A.vnode.el=A.subTree.el=T),A=A.parent},w=T=>T.nodeType===1&&T.tagName==="TEMPLATE";return[c,d]}const k0="data-allow-mismatch",HO={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function cd(e,t){if(t===0||t===1)for(;e&&!e.hasAttribute(k0);)e=e.parentElement;const n=e&&e.getAttribute(k0);if(n==null)return!1;if(n==="")return!0;{const i=n.split(",");return t===0&&i.includes("children")?!0:n.split(",").includes(HO[t])}}gh().requestIdleCallback;gh().cancelIdleCallback;function jO(e,t){if(Ta(e)&&e.data==="["){let n=1,i=e.nextSibling;for(;i;){if(i.nodeType===1){if(t(i)===!1)break}else if(Ta(i))if(i.data==="]"){if(--n===0)break}else i.data==="["&&n++;i=i.nextSibling}}else t(e)}const ps=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function mf(e){je(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:i,delay:r=200,hydrate:s,timeout:o,suspensible:a=!0,onError:l}=e;let u=null,c,d=0;const f=()=>(d++,u=null,m()),m=()=>{let g;return u||(g=u=t().catch(y=>{if(y=y instanceof Error?y:new Error(String(y)),l)return new Promise((p,S)=>{l(y,()=>p(f()),()=>S(y),d+1)});throw y}).then(y=>g!==u&&u?u:(y&&(y.__esModule||y[Symbol.toStringTag]==="Module")&&(y=y.default),c=y,y)))};return Fo({name:"AsyncComponentWrapper",__asyncLoader:m,__asyncHydrate(g,y,p){const S=s?()=>{const w=s(p,T=>jO(g,T));w&&(y.bum||(y.bum=[])).push(w)}:p;c?S():m().then(()=>!y.isUnmounted&&S())},get __asyncResolved(){return c},setup(){const g=ln;if(Vy(g),c)return()=>iv(c,g);const y=T=>{u=null,ul(T,g,13,!i)};if(a&&g.suspense||Wa)return m().then(T=>()=>iv(T,g)).catch(T=>(y(T),()=>i?v(i,{error:T}):null));const p=re(!1),S=re(),w=re(!!r);return r&&setTimeout(()=>{w.value=!1},r),o!=null&&setTimeout(()=>{if(!p.value&&!S.value){const T=new Error(`Async component timed out after ${o}ms.`);y(T),S.value=T}},o),m().then(()=>{p.value=!0,g.parent&&_c(g.parent.vnode)&&g.parent.update()}).catch(T=>{y(T),S.value=T}),()=>{if(p.value&&c)return iv(c,g);if(S.value&&i)return v(i,{error:S.value});if(n&&!w.value)return v(n)}}})}function iv(e,t){const{ref:n,props:i,children:r,ce:s}=t.vnode,o=v(e,i,r);return o.ref=n,o.ce=s,delete t.vnode.ce,o}const _c=e=>e.type.__isKeepAlive,WO={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=cl(),i=n.ctx;if(!i.renderer)return()=>{const w=t.default&&t.default();return w&&w.length===1?w[0]:w};const r=new Map,s=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:u,um:c,o:{createElement:d}}}=i,f=d("div");i.activate=(w,T,x,V,D)=>{const A=w.component;u(w,T,x,0,a),l(A.vnode,w,T,x,A,a,V,w.slotScopeIds,D),an(()=>{A.isDeactivated=!1,A.a&&Da(A.a);const b=w.props&&w.props.onVnodeMounted;b&&Jn(b,A.parent,w)},a)},i.deactivate=w=>{const T=w.component;gf(T.m),gf(T.a),u(w,f,null,1,a),an(()=>{T.da&&Da(T.da);const x=w.props&&w.props.onVnodeUnmounted;x&&Jn(x,T.parent,w),T.isDeactivated=!0},a)};function m(w){rv(w),c(w,n,a,!0)}function g(w){r.forEach((T,x)=>{const V=dg(T.type);V&&!w(V)&&y(x)})}function y(w){const T=r.get(w);T&&(!o||!Di(T,o))?m(T):o&&rv(o),r.delete(w),s.delete(w)}ye(()=>[e.include,e.exclude],([w,T])=>{w&&g(x=>nu(w,x)),T&&g(x=>!nu(T,x))},{flush:"post",deep:!0});let p=null;const S=()=>{p!=null&&(pf(n.subTree.type)?an(()=>{r.set(p,dd(n.subTree))},n.subTree.suspense):r.set(p,dd(n.subTree)))};return Kt(S),Sh(S),rn(()=>{r.forEach(w=>{const{subTree:T,suspense:x}=n,V=dd(T);if(w.type===V.type&&w.key===V.key){rv(V);const D=V.component.da;D&&an(D,x);return}m(w)})}),()=>{if(p=null,!t.default)return o=null;const w=t.default(),T=w[0];if(w.length>1)return o=null,w;if(!ks(T)||!(T.shapeFlag&4)&&!(T.shapeFlag&128))return o=null,T;let x=dd(T);if(x.type===Jt)return o=null,x;const V=x.type,D=dg(ps(x)?x.type.__asyncResolved||{}:V),{include:A,exclude:b,max:_}=e;if(A&&(!D||!nu(A,D))||b&&D&&nu(b,D))return x.shapeFlag&=-257,o=x,T;const E=x.key==null?V:x.key,k=r.get(E);return x.el&&(x=lr(x),T.shapeFlag&128&&(T.ssContent=x)),p=E,k?(x.el=k.el,x.component=k.component,x.transition&&Is(x,x.transition),x.shapeFlag|=512,s.delete(E),s.add(E)):(s.add(E),_&&s.size>parseInt(_,10)&&y(s.values().next().value)),x.shapeFlag|=256,o=x,pf(T.type)?T:x}}},zO=WO;function nu(e,t){return Be(e)?e.some(n=>nu(n,t)):Vt(e)?e.split(",").includes(t):YN(e)?(e.lastIndex=0,e.test(t)):!1}function tk(e,t){nk(e,"a",t)}function Dy(e,t){nk(e,"da",t)}function nk(e,t,n=ln){const i=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(bh(t,i,n),n){let r=n.parent;for(;r&&r.parent;)_c(r.parent.vnode)&&qO(i,t,n,r),r=r.parent}}function qO(e,t,n,i){const r=bh(t,e,i,!0);My(()=>{wy(i[t],r)},n)}function rv(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function dd(e){return e.shapeFlag&128?e.ssContent:e}function bh(e,t,n=ln,i=!1){if(n){const r=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{Ls();const a=bc(n),l=$i(t,n,e,o);return a(),Fs(),l});return i?r.unshift(s):r.push(s),s}}const zr=e=>(t,n=ln)=>{(!Wa||e==="sp")&&bh(e,(...i)=>t(...i),n)},wh=zr("bm"),Kt=zr("m"),ik=zr("bu"),Sh=zr("u"),rn=zr("bum"),My=zr("um"),GO=zr("sp"),KO=zr("rtg"),YO=zr("rtc");function rk(e,t=ln){bh("ec",e,t)}const Ny="components",QO="directives";function XO(e,t){return Oy(Ny,e,!0,t)||e}const sk=Symbol.for("v-ndc");function ok(e){return Vt(e)?Oy(Ny,e,!1)||e:e||sk}function mi(e){return Oy(QO,e)}function Oy(e,t,n=!0,i=!1){const r=un||ln;if(r){const s=r.type;if(e===Ny){const a=dg(s,!1);if(a&&(a===t||a===ni(t)||a===hr(ni(t))))return s}const o=A0(r[e]||s[e],t)||A0(r.appContext[e],t);return!o&&i?s:o}}function A0(e,t){return e&&(e[t]||e[ni(t)]||e[hr(ni(t))])}function nne(e,t,n,i){let r;const s=n,o=Be(e);if(o||Vt(e)){const a=o&&co(e);let l=!1;a&&(l=!Ii(e),e=_h(e)),r=new Array(e.length);for(let u=0,c=e.length;u<c;u++)r[u]=t(l?Nn(e[u]):e[u],u,void 0,s)}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=t(a+1,a,void 0,s)}else if(Ct(e))if(e[Symbol.iterator])r=Array.from(e,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(e);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=t(e[c],c,l,s)}}else r=[];return r}function ine(e,t,n={},i,r){if(un.ce||un.parent&&ps(un.parent)&&un.parent.ce)return t!=="default"&&(n.name=t),Si(),er(Te,null,[v("slot",n,i&&i())],64);let s=e[t];s&&s._c&&(s._d=!1),Si();const o=s&&ak(s(n)),a=n.key||o&&o.key,l=er(Te,{key:(a&&!Wr(a)?a:`_${t}`)+(!o&&i?"_fb":"")},o||(i?i():[]),o&&e._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function ak(e){return e.some(t=>ks(t)?!(t.type===Jt||t.type===Te&&!ak(t.children)):!0)?e:null}const rg=e=>e?Dk(e)?Eh(e):rg(e.parent):null,fu=Gt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>rg(e.parent),$root:e=>rg(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ly(e),$forceUpdate:e=>e.f||(e.f=()=>{xy(e.update)}),$nextTick:e=>e.n||(e.n=Ye.bind(e.proxy)),$watch:e=>pL.bind(e)}),sv=(e,t)=>e!==wt&&!e.__isScriptSetup&&vt(e,t),JO={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=e;let u;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return i[t];case 2:return r[t];case 4:return n[t];case 3:return s[t]}else{if(sv(i,t))return o[t]=1,i[t];if(r!==wt&&vt(r,t))return o[t]=2,r[t];if((u=e.propsOptions[0])&&vt(u,t))return o[t]=3,s[t];if(n!==wt&&vt(n,t))return o[t]=4,n[t];sg&&(o[t]=0)}}const c=fu[t];let d,f;if(c)return t==="$attrs"&&Mn(e.attrs,"get",""),c(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(n!==wt&&vt(n,t))return o[t]=4,n[t];if(f=l.config.globalProperties,vt(f,t))return f[t]},set({_:e},t,n){const{data:i,setupState:r,ctx:s}=e;return sv(r,t)?(r[t]=n,!0):i!==wt&&vt(i,t)?(i[t]=n,!0):vt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||e!==wt&&vt(e,o)||sv(t,o)||(a=s[0])&&vt(a,o)||vt(i,o)||vt(fu,o)||vt(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:vt(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function P0(e){return Be(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let sg=!0;function ZO(e){const t=Ly(e),n=e.proxy,i=e.ctx;sg=!1,t.beforeCreate&&x0(t.beforeCreate,e,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:d,mounted:f,beforeUpdate:m,updated:g,activated:y,deactivated:p,beforeDestroy:S,beforeUnmount:w,destroyed:T,unmounted:x,render:V,renderTracked:D,renderTriggered:A,errorCaptured:b,serverPrefetch:_,expose:E,inheritAttrs:k,components:I,directives:R,filters:B}=t;if(u&&eL(u,i,null),o)for(const q in o){const F=o[q];je(F)&&(i[q]=F.bind(n))}if(r){const q=r.call(n,n);Ct(q)&&(e.data=Ft(q))}if(sg=!0,s)for(const q in s){const F=s[q],H=je(F)?F.bind(n,n):je(F.get)?F.get.bind(n,n):ir,j=!je(F)&&je(F.set)?F.set.bind(n):ir,W=P({get:H,set:j});Object.defineProperty(i,q,{enumerable:!0,configurable:!0,get:()=>W.value,set:Y=>W.value=Y})}if(a)for(const q in a)lk(a[q],i,n,q);if(l){const q=je(l)?l.call(n):l;Reflect.ownKeys(q).forEach(F=>{lt(F,q[F])})}c&&x0(c,e,"c");function U(q,F){Be(F)?F.forEach(H=>q(H.bind(n))):F&&q(F.bind(n))}if(U(wh,d),U(Kt,f),U(ik,m),U(Sh,g),U(tk,y),U(Dy,p),U(rk,b),U(YO,D),U(KO,A),U(rn,w),U(My,x),U(GO,_),Be(E))if(E.length){const q=e.exposed||(e.exposed={});E.forEach(F=>{Object.defineProperty(q,F,{get:()=>n[F],set:H=>n[F]=H})})}else e.exposed||(e.exposed={});V&&e.render===ir&&(e.render=V),k!=null&&(e.inheritAttrs=k),I&&(e.components=I),R&&(e.directives=R),_&&Vy(e)}function eL(e,t,n=ir){Be(e)&&(e=og(e));for(const i in e){const r=e[i];let s;Ct(r)?"default"in r?s=Fe(r.from||i,r.default,!0):s=Fe(r.from||i):s=Fe(r),Nt(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function x0(e,t,n){$i(Be(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function lk(e,t,n,i){let r=i.includes(".")?Tk(n,i):()=>n[i];if(Vt(e)){const s=t[e];je(s)&&ye(r,s)}else if(je(e))ye(r,e.bind(n));else if(Ct(e))if(Be(e))e.forEach(s=>lk(s,t,n,i));else{const s=je(e.handler)?e.handler.bind(n):t[e.handler];je(s)&&ye(r,s,e)}}function Ly(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!n&&!i?l=t:(l={},r.length&&r.forEach(u=>vf(l,u,o,!0)),vf(l,t,o)),Ct(t)&&s.set(t,l),l}function vf(e,t,n,i=!1){const{mixins:r,extends:s}=t;s&&vf(e,s,n,!0),r&&r.forEach(o=>vf(e,o,n,!0));for(const o in t)if(!(i&&o==="expose")){const a=tL[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const tL={data:R0,props:V0,emits:V0,methods:iu,computed:iu,beforeCreate:Kn,created:Kn,beforeMount:Kn,mounted:Kn,beforeUpdate:Kn,updated:Kn,beforeDestroy:Kn,beforeUnmount:Kn,destroyed:Kn,unmounted:Kn,activated:Kn,deactivated:Kn,errorCaptured:Kn,serverPrefetch:Kn,components:iu,directives:iu,watch:iL,provide:R0,inject:nL};function R0(e,t){return t?e?function(){return Gt(je(e)?e.call(this,this):e,je(t)?t.call(this,this):t)}:t:e}function nL(e,t){return iu(og(e),og(t))}function og(e){if(Be(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Kn(e,t){return e?[...new Set([].concat(e,t))]:t}function iu(e,t){return e?Gt(Object.create(null),e,t):t}function V0(e,t){return e?Be(e)&&Be(t)?[...new Set([...e,...t])]:Gt(Object.create(null),P0(e),P0(t??{})):t}function iL(e,t){if(!e)return t;if(!t)return e;const n=Gt(Object.create(null),e);for(const i in t)n[i]=Kn(e[i],t[i]);return n}function uk(){return{app:null,config:{isNativeTag:GN,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rL=0;function sL(e,t){return function(i,r=null){je(i)||(i=Gt({},i)),r!=null&&!Ct(r)&&(r=null);const s=uk(),o=new WeakSet,a=[];let l=!1;const u=s.app={_uid:rL++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Nk,get config(){return s.config},set config(c){},use(c,...d){return o.has(c)||(c&&je(c.install)?(o.add(c),c.install(u,...d)):je(c)&&(o.add(c),c(u,...d))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,d){return d?(s.components[c]=d,u):s.components[c]},directive(c,d){return d?(s.directives[c]=d,u):s.directives[c]},mount(c,d,f){if(!l){const m=u._ceVNode||v(i,r);return m.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),d&&t?t(m,c):e(m,c,f),l=!0,u._container=c,c.__vue_app__=u,Eh(m.component)}},onUnmount(c){a.push(c)},unmount(){l&&($i(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,d){return s.provides[c]=d,u},runWithContext(c){const d=fo;fo=u;try{return c()}finally{fo=d}}};return u}}let fo=null;function lt(e,t){if(ln){let n=ln.provides;const i=ln.parent&&ln.parent.provides;i===n&&(n=ln.provides=Object.create(i)),n[e]=t}}function Fe(e,t,n=!1){const i=ln||un;if(i||fo){const r=fo?fo._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&je(t)?t.call(i&&i.proxy):t}}function ck(){return!!(ln||un||fo)}const dk={},fk=()=>Object.create(dk),hk=e=>Object.getPrototypeOf(e)===dk;function oL(e,t,n,i=!1){const r={},s=fk();e.propsDefaults=Object.create(null),mk(e,t,r,s);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=i?r:Pr(r):e.type.props?e.props=r:e.props=s,e.attrs=s}function aL(e,t,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=e,a=Oe(r),[l]=e.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let f=c[d];if(Th(e.emitsOptions,f))continue;const m=t[f];if(l)if(vt(s,f))m!==s[f]&&(s[f]=m,u=!0);else{const g=ni(f);r[g]=ag(l,a,g,m,e,!1)}else m!==s[f]&&(s[f]=m,u=!0)}}}else{mk(e,t,r,s)&&(u=!0);let c;for(const d in a)(!t||!vt(t,d)&&((c=Lo(d))===d||!vt(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(r[d]=ag(l,a,d,void 0,e,!0)):delete r[d]);if(s!==a)for(const d in s)(!t||!vt(t,d))&&(delete s[d],u=!0)}u&&kr(e.attrs,"set","")}function mk(e,t,n,i){const[r,s]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(Va(l))continue;const u=t[l];let c;r&&vt(r,c=ni(l))?!s||!s.includes(c)?n[c]=u:(a||(a={}))[c]=u:Th(e.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(s){const l=Oe(n),u=a||wt;for(let c=0;c<s.length;c++){const d=s[c];n[d]=ag(r,l,d,u[d],e,!vt(u,d))}}return o}function ag(e,t,n,i,r,s){const o=e[n];if(o!=null){const a=vt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&je(l)){const{propsDefaults:u}=r;if(n in u)i=u[n];else{const c=bc(r);i=u[n]=l.call(null,t),c()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Lo(n))&&(i=!0))}return i}const lL=new WeakMap;function vk(e,t,n=!1){const i=n?lL:t.propsCache,r=i.get(e);if(r)return r;const s=e.props,o={},a=[];let l=!1;if(!je(e)){const c=d=>{l=!0;const[f,m]=vk(d,t,!0);Gt(o,f),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!s&&!l)return Ct(e)&&i.set(e,xa),xa;if(Be(s))for(let c=0;c<s.length;c++){const d=ni(s[c]);D0(d)&&(o[d]=wt)}else if(s)for(const c in s){const d=ni(c);if(D0(d)){const f=s[c],m=o[d]=Be(f)||je(f)?{type:f}:Gt({},f),g=m.type;let y=!1,p=!0;if(Be(g))for(let S=0;S<g.length;++S){const w=g[S],T=je(w)&&w.name;if(T==="Boolean"){y=!0;break}else T==="String"&&(p=!1)}else y=je(g)&&g.name==="Boolean";m[0]=y,m[1]=p,(y||vt(m,"default"))&&a.push(d)}}const u=[o,a];return Ct(e)&&i.set(e,u),u}function D0(e){return e[0]!=="$"&&!Va(e)}const gk=e=>e[0]==="_"||e==="$stable",Fy=e=>Be(e)?e.map(oi):[oi(e)],uL=(e,t,n)=>{if(t._n)return t;const i=zI((...r)=>Fy(t(...r)),n);return i._c=!1,i},pk=(e,t,n)=>{const i=e._ctx;for(const r in e){if(gk(r))continue;const s=e[r];if(je(s))t[r]=uL(r,s,i);else if(s!=null){const o=Fy(s);t[r]=()=>o}}},yk=(e,t)=>{const n=Fy(t);e.slots.default=()=>n},_k=(e,t,n)=>{for(const i in t)(n||i!=="_")&&(e[i]=t[i])},cL=(e,t,n)=>{const i=e.slots=fk();if(e.vnode.shapeFlag&32){const r=t._;r?(_k(i,t,n),n&&gI(i,"_",r,!0)):pk(t,i)}else t&&yk(e,t)},dL=(e,t,n)=>{const{vnode:i,slots:r}=e;let s=!0,o=wt;if(i.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:_k(r,t,n):(s=!t.$stable,pk(t,r)),o=t}else t&&(yk(e,t),o={default:1});if(s)for(const a in r)!gk(a)&&o[a]==null&&delete r[a]},an=kk;function fL(e){return bk(e)}function hL(e){return bk(e,UO)}function bk(e,t){const n=gh();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:d,nextSibling:f,setScopeId:m=ir,insertStaticContent:g}=e,y=(N,O,G,ee=null,X=null,ue=null,_e=void 0,fe=null,we=!!O.dynamicChildren)=>{if(N===O)return;N&&!Di(N,O)&&(ee=K(N),Y(N,X,ue,!0),N=null),O.patchFlag===-2&&(we=!1,O.dynamicChildren=null);const{type:he,ref:Me,shapeFlag:Ie}=O;switch(he){case ys:p(N,O,G,ee);break;case Jt:S(N,O,G,ee);break;case hu:N==null&&w(O,G,ee,_e);break;case Te:I(N,O,G,ee,X,ue,_e,fe,we);break;default:Ie&1?V(N,O,G,ee,X,ue,_e,fe,we):Ie&6?R(N,O,G,ee,X,ue,_e,fe,we):(Ie&64||Ie&128)&&he.process(N,O,G,ee,X,ue,_e,fe,we,le)}Me!=null&&X&&Mu(Me,N&&N.ref,ue,O||N,!O)},p=(N,O,G,ee)=>{if(N==null)i(O.el=a(O.children),G,ee);else{const X=O.el=N.el;O.children!==N.children&&u(X,O.children)}},S=(N,O,G,ee)=>{N==null?i(O.el=l(O.children||""),G,ee):O.el=N.el},w=(N,O,G,ee)=>{[N.el,N.anchor]=g(N.children,O,G,ee,N.el,N.anchor)},T=({el:N,anchor:O},G,ee)=>{let X;for(;N&&N!==O;)X=f(N),i(N,G,ee),N=X;i(O,G,ee)},x=({el:N,anchor:O})=>{let G;for(;N&&N!==O;)G=f(N),r(N),N=G;r(O)},V=(N,O,G,ee,X,ue,_e,fe,we)=>{O.type==="svg"?_e="svg":O.type==="math"&&(_e="mathml"),N==null?D(O,G,ee,X,ue,_e,fe,we):_(N,O,X,ue,_e,fe,we)},D=(N,O,G,ee,X,ue,_e,fe)=>{let we,he;const{props:Me,shapeFlag:Ie,transition:De,dirs:Re}=N;if(we=N.el=o(N.type,ue,Me&&Me.is,Me),Ie&8?c(we,N.children):Ie&16&&b(N.children,we,null,ee,X,ov(N,ue),_e,fe),Re&&Zi(N,null,ee,"created"),A(we,N,N.scopeId,_e,ee),Me){for(const ft in Me)ft!=="value"&&!Va(ft)&&s(we,ft,null,Me[ft],ue,ee);"value"in Me&&s(we,"value",null,Me.value,ue),(he=Me.onVnodeBeforeMount)&&Jn(he,ee,N)}Re&&Zi(N,null,ee,"beforeMount");const $e=wk(X,De);$e&&De.beforeEnter(we),i(we,O,G),((he=Me&&Me.onVnodeMounted)||$e||Re)&&an(()=>{he&&Jn(he,ee,N),$e&&De.enter(we),Re&&Zi(N,null,ee,"mounted")},X)},A=(N,O,G,ee,X)=>{if(G&&m(N,G),ee)for(let ue=0;ue<ee.length;ue++)m(N,ee[ue]);if(X){let ue=X.subTree;if(O===ue||pf(ue.type)&&(ue.ssContent===O||ue.ssFallback===O)){const _e=X.vnode;A(N,_e,_e.scopeId,_e.slotScopeIds,X.parent)}}},b=(N,O,G,ee,X,ue,_e,fe,we=0)=>{for(let he=we;he<N.length;he++){const Me=N[he]=fe?ss(N[he]):oi(N[he]);y(null,Me,O,G,ee,X,ue,_e,fe)}},_=(N,O,G,ee,X,ue,_e)=>{const fe=O.el=N.el;let{patchFlag:we,dynamicChildren:he,dirs:Me}=O;we|=N.patchFlag&16;const Ie=N.props||wt,De=O.props||wt;let Re;if(G&&Ys(G,!1),(Re=De.onVnodeBeforeUpdate)&&Jn(Re,G,O,N),Me&&Zi(O,N,G,"beforeUpdate"),G&&Ys(G,!0),(Ie.innerHTML&&De.innerHTML==null||Ie.textContent&&De.textContent==null)&&c(fe,""),he?E(N.dynamicChildren,he,fe,G,ee,ov(O,X),ue):_e||F(N,O,fe,null,G,ee,ov(O,X),ue,!1),we>0){if(we&16)k(fe,Ie,De,G,X);else if(we&2&&Ie.class!==De.class&&s(fe,"class",null,De.class,X),we&4&&s(fe,"style",Ie.style,De.style,X),we&8){const $e=O.dynamicProps;for(let ft=0;ft<$e.length;ft++){const ut=$e[ft],An=Ie[ut],hn=De[ut];(hn!==An||ut==="value")&&s(fe,ut,An,hn,X,G)}}we&1&&N.children!==O.children&&c(fe,O.children)}else!_e&&he==null&&k(fe,Ie,De,G,X);((Re=De.onVnodeUpdated)||Me)&&an(()=>{Re&&Jn(Re,G,O,N),Me&&Zi(O,N,G,"updated")},ee)},E=(N,O,G,ee,X,ue,_e)=>{for(let fe=0;fe<O.length;fe++){const we=N[fe],he=O[fe],Me=we.el&&(we.type===Te||!Di(we,he)||we.shapeFlag&70)?d(we.el):G;y(we,he,Me,null,ee,X,ue,_e,!0)}},k=(N,O,G,ee,X)=>{if(O!==G){if(O!==wt)for(const ue in O)!Va(ue)&&!(ue in G)&&s(N,ue,O[ue],null,X,ee);for(const ue in G){if(Va(ue))continue;const _e=G[ue],fe=O[ue];_e!==fe&&ue!=="value"&&s(N,ue,fe,_e,X,ee)}"value"in G&&s(N,"value",O.value,G.value,X)}},I=(N,O,G,ee,X,ue,_e,fe,we)=>{const he=O.el=N?N.el:a(""),Me=O.anchor=N?N.anchor:a("");let{patchFlag:Ie,dynamicChildren:De,slotScopeIds:Re}=O;Re&&(fe=fe?fe.concat(Re):Re),N==null?(i(he,G,ee),i(Me,G,ee),b(O.children||[],G,Me,X,ue,_e,fe,we)):Ie>0&&Ie&64&&De&&N.dynamicChildren?(E(N.dynamicChildren,De,G,X,ue,_e,fe),(O.key!=null||X&&O===X.subTree)&&By(N,O,!0)):F(N,O,G,Me,X,ue,_e,fe,we)},R=(N,O,G,ee,X,ue,_e,fe,we)=>{O.slotScopeIds=fe,N==null?O.shapeFlag&512?X.ctx.activate(O,G,ee,_e,we):B(O,G,ee,X,ue,_e,we):$(N,O,we)},B=(N,O,G,ee,X,ue,_e)=>{const fe=N.component=ML(N,ee,X);if(_c(N)&&(fe.ctx.renderer=le),NL(fe,!1,_e),fe.asyncDep){if(X&&X.registerDep(fe,U,_e),!N.el){const we=fe.subTree=v(Jt);S(null,we,O,G)}}else U(fe,N,O,G,X,ue,_e)},$=(N,O,G)=>{const ee=O.component=N.component;if(TL(N,O,G))if(ee.asyncDep&&!ee.asyncResolved){q(ee,O,G);return}else ee.next=O,ee.update();else O.el=N.el,ee.vnode=O},U=(N,O,G,ee,X,ue,_e)=>{const fe=()=>{if(N.isMounted){let{next:Ie,bu:De,u:Re,parent:$e,vnode:ft}=N;{const Pn=Sk(N);if(Pn){Ie&&(Ie.el=ft.el,q(N,Ie,_e)),Pn.asyncDep.then(()=>{N.isUnmounted||fe()});return}}let ut=Ie,An;Ys(N,!1),Ie?(Ie.el=ft.el,q(N,Ie,_e)):Ie=ft,De&&Da(De),(An=Ie.props&&Ie.props.onVnodeBeforeUpdate)&&Jn(An,$e,Ie,ft),Ys(N,!0);const hn=av(N),wn=N.subTree;N.subTree=hn,y(wn,hn,d(wn.el),K(wn),N,X,ue),Ie.el=hn.el,ut===null&&Ch(N,hn.el),Re&&an(Re,X),(An=Ie.props&&Ie.props.onVnodeUpdated)&&an(()=>Jn(An,$e,Ie,ft),X)}else{let Ie;const{el:De,props:Re}=O,{bm:$e,m:ft,parent:ut,root:An,type:hn}=N,wn=ps(O);if(Ys(N,!1),$e&&Da($e),!wn&&(Ie=Re&&Re.onVnodeBeforeMount)&&Jn(Ie,ut,O),Ys(N,!0),De&&Se){const Pn=()=>{N.subTree=av(N),Se(De,N.subTree,N,X,null)};wn&&hn.__asyncHydrate?hn.__asyncHydrate(De,N,Pn):Pn()}else{An.ce&&An.ce._injectChildStyle(hn);const Pn=N.subTree=av(N);y(null,Pn,G,ee,N,X,ue),O.el=Pn.el}if(ft&&an(ft,X),!wn&&(Ie=Re&&Re.onVnodeMounted)){const Pn=O;an(()=>Jn(Ie,ut,Pn),X)}(O.shapeFlag&256||ut&&ps(ut.vnode)&&ut.vnode.shapeFlag&256)&&N.a&&an(N.a,X),N.isMounted=!0,O=G=ee=null}};N.scope.on();const we=N.effect=new CI(fe);N.scope.off();const he=N.update=we.run.bind(we),Me=N.job=we.runIfDirty.bind(we);Me.i=N,Me.id=N.uid,we.scheduler=()=>xy(Me),Ys(N,!0),he()},q=(N,O,G)=>{O.component=N;const ee=N.vnode.props;N.vnode=O,N.next=null,aL(N,O.props,ee,G),dL(N,O.children,G),Ls(),w0(N),Fs()},F=(N,O,G,ee,X,ue,_e,fe,we=!1)=>{const he=N&&N.children,Me=N?N.shapeFlag:0,Ie=O.children,{patchFlag:De,shapeFlag:Re}=O;if(De>0){if(De&128){j(he,Ie,G,ee,X,ue,_e,fe,we);return}else if(De&256){H(he,Ie,G,ee,X,ue,_e,fe,we);return}}Re&8?(Me&16&&ie(he,X,ue),Ie!==he&&c(G,Ie)):Me&16?Re&16?j(he,Ie,G,ee,X,ue,_e,fe,we):ie(he,X,ue,!0):(Me&8&&c(G,""),Re&16&&b(Ie,G,ee,X,ue,_e,fe,we))},H=(N,O,G,ee,X,ue,_e,fe,we)=>{N=N||xa,O=O||xa;const he=N.length,Me=O.length,Ie=Math.min(he,Me);let De;for(De=0;De<Ie;De++){const Re=O[De]=we?ss(O[De]):oi(O[De]);y(N[De],Re,G,null,X,ue,_e,fe,we)}he>Me?ie(N,X,ue,!0,!1,Ie):b(O,G,ee,X,ue,_e,fe,we,Ie)},j=(N,O,G,ee,X,ue,_e,fe,we)=>{let he=0;const Me=O.length;let Ie=N.length-1,De=Me-1;for(;he<=Ie&&he<=De;){const Re=N[he],$e=O[he]=we?ss(O[he]):oi(O[he]);if(Di(Re,$e))y(Re,$e,G,null,X,ue,_e,fe,we);else break;he++}for(;he<=Ie&&he<=De;){const Re=N[Ie],$e=O[De]=we?ss(O[De]):oi(O[De]);if(Di(Re,$e))y(Re,$e,G,null,X,ue,_e,fe,we);else break;Ie--,De--}if(he>Ie){if(he<=De){const Re=De+1,$e=Re<Me?O[Re].el:ee;for(;he<=De;)y(null,O[he]=we?ss(O[he]):oi(O[he]),G,$e,X,ue,_e,fe,we),he++}}else if(he>De)for(;he<=Ie;)Y(N[he],X,ue,!0),he++;else{const Re=he,$e=he,ft=new Map;for(he=$e;he<=De;he++){const zn=O[he]=we?ss(O[he]):oi(O[he]);zn.key!=null&&ft.set(zn.key,he)}let ut,An=0;const hn=De-$e+1;let wn=!1,Pn=0;const Qr=new Array(hn);for(he=0;he<hn;he++)Qr[he]=0;for(he=Re;he<=Ie;he++){const zn=N[he];if(An>=hn){Y(zn,X,ue,!0);continue}let _i;if(zn.key!=null)_i=ft.get(zn.key);else for(ut=$e;ut<=De;ut++)if(Qr[ut-$e]===0&&Di(zn,O[ut])){_i=ut;break}_i===void 0?Y(zn,X,ue,!0):(Qr[_i-$e]=he+1,_i>=Pn?Pn=_i:wn=!0,y(zn,O[_i],G,null,X,ue,_e,fe,we),An++)}const ia=wn?mL(Qr):xa;for(ut=ia.length-1,he=hn-1;he>=0;he--){const zn=$e+he,_i=O[zn],ra=zn+1<Me?O[zn+1].el:ee;Qr[he]===0?y(null,_i,G,ra,X,ue,_e,fe,we):wn&&(ut<0||he!==ia[ut]?W(_i,G,ra,2):ut--)}}},W=(N,O,G,ee,X=null)=>{const{el:ue,type:_e,transition:fe,children:we,shapeFlag:he}=N;if(he&6){W(N.component.subTree,O,G,ee);return}if(he&128){N.suspense.move(O,G,ee);return}if(he&64){_e.move(N,O,G,le);return}if(_e===Te){i(ue,O,G);for(let Ie=0;Ie<we.length;Ie++)W(we[Ie],O,G,ee);i(N.anchor,O,G);return}if(_e===hu){T(N,O,G);return}if(ee!==2&&he&1&&fe)if(ee===0)fe.beforeEnter(ue),i(ue,O,G),an(()=>fe.enter(ue),X);else{const{leave:Ie,delayLeave:De,afterLeave:Re}=fe,$e=()=>i(ue,O,G),ft=()=>{Ie(ue,()=>{$e(),Re&&Re()})};De?De(ue,$e,ft):ft()}else i(ue,O,G)},Y=(N,O,G,ee=!1,X=!1)=>{const{type:ue,props:_e,ref:fe,children:we,dynamicChildren:he,shapeFlag:Me,patchFlag:Ie,dirs:De,cacheIndex:Re}=N;if(Ie===-2&&(X=!1),fe!=null&&Mu(fe,null,G,N,!0),Re!=null&&(O.renderCache[Re]=void 0),Me&256){O.ctx.deactivate(N);return}const $e=Me&1&&De,ft=!ps(N);let ut;if(ft&&(ut=_e&&_e.onVnodeBeforeUnmount)&&Jn(ut,O,N),Me&6)Ce(N.component,G,ee);else{if(Me&128){N.suspense.unmount(G,ee);return}$e&&Zi(N,null,O,"beforeUnmount"),Me&64?N.type.remove(N,O,G,le,ee):he&&!he.hasOnce&&(ue!==Te||Ie>0&&Ie&64)?ie(he,O,G,!1,!0):(ue===Te&&Ie&384||!X&&Me&16)&&ie(we,O,G),ee&&ce(N)}(ft&&(ut=_e&&_e.onVnodeUnmounted)||$e)&&an(()=>{ut&&Jn(ut,O,N),$e&&Zi(N,null,O,"unmounted")},G)},ce=N=>{const{type:O,el:G,anchor:ee,transition:X}=N;if(O===Te){pe(G,ee);return}if(O===hu){x(N);return}const ue=()=>{r(G),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(N.shapeFlag&1&&X&&!X.persisted){const{leave:_e,delayLeave:fe}=X,we=()=>_e(G,ue);fe?fe(N.el,ue,we):we()}else ue()},pe=(N,O)=>{let G;for(;N!==O;)G=f(N),r(N),N=G;r(O)},Ce=(N,O,G)=>{const{bum:ee,scope:X,job:ue,subTree:_e,um:fe,m:we,a:he}=N;gf(we),gf(he),ee&&Da(ee),X.stop(),ue&&(ue.flags|=8,Y(_e,N,O,G)),fe&&an(fe,O),an(()=>{N.isUnmounted=!0},O),O&&O.pendingBranch&&!O.isUnmounted&&N.asyncDep&&!N.asyncResolved&&N.suspenseId===O.pendingId&&(O.deps--,O.deps===0&&O.resolve())},ie=(N,O,G,ee=!1,X=!1,ue=0)=>{for(let _e=ue;_e<N.length;_e++)Y(N[_e],O,G,ee,X)},K=N=>{if(N.shapeFlag&6)return K(N.component.subTree);if(N.shapeFlag&128)return N.suspense.next();const O=f(N.anchor||N.el),G=O&&O[qI];return G?f(G):O};let se=!1;const de=(N,O,G)=>{N==null?O._vnode&&Y(O._vnode,null,null,!0):y(O._vnode||null,N,O,null,null,null,G),O._vnode=N,se||(se=!0,w0(),ff(),se=!1)},le={p:y,um:Y,m:W,r:ce,mt:B,mc:b,pc:F,pbc:E,n:K,o:e};let oe,Se;return t&&([oe,Se]=t(le)),{render:de,hydrate:oe,createApp:sL(de,oe)}}function ov({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ys({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function wk(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function By(e,t,n=!1){const i=e.children,r=t.children;if(Be(i)&&Be(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ss(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&By(o,a)),a.type===ys&&(a.el=o.el)}}function mL(e){const t=e.slice(),n=[0];let i,r,s,o,a;const l=e.length;for(i=0;i<l;i++){const u=e[i];if(u!==0){if(r=n[n.length-1],e[r]<u){t[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<u?s=a+1:o=a;u<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}function Sk(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Sk(t)}function gf(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const vL=Symbol.for("v-scx"),gL=()=>Fe(vL);function Ht(e,t){return $y(e,null,t)}function ye(e,t,n){return $y(e,t,n)}function $y(e,t,n=wt){const{immediate:i,deep:r,flush:s,once:o}=n,a=Gt({},n),l=t&&i||!t&&s!=="post";let u;if(Wa){if(s==="sync"){const m=gL();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=ir,m.resume=ir,m.pause=ir,m}}const c=ln;a.call=(m,g,y)=>$i(m,c,g,y);let d=!1;s==="post"?a.scheduler=m=>{an(m,c&&c.suspense)}:s!=="sync"&&(d=!0,a.scheduler=(m,g)=>{g?m():xy(m)}),a.augmentJob=m=>{t&&(m.flags|=4),d&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const f=VO(e,t,a);return Wa&&(u?u.push(f):l&&f()),f}function pL(e,t,n){const i=this.proxy,r=Vt(e)?e.includes(".")?Tk(i,e):()=>i[e]:e.bind(i,i);let s;je(t)?s=t:(s=t.handler,n=t);const o=bc(this),a=$y(r,s.bind(i),n);return o(),a}function Tk(e,t){const n=t.split(".");return()=>{let i=e;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const yL=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ni(t)}Modifiers`]||e[`${Lo(t)}Modifiers`];function _L(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||wt;let r=n;const s=t.startsWith("update:"),o=s&&yL(i,t.slice(7));o&&(o.trim&&(r=n.map(c=>Vt(c)?c.trim():c)),o.number&&(r=n.map(Xv)));let a,l=i[a=Xm(t)]||i[a=Xm(ni(t))];!l&&s&&(l=i[a=Xm(Lo(t))]),l&&$i(l,e,6,r);const u=i[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,$i(u,e,6,r)}}function Ck(e,t,n=!1){const i=t.emitsCache,r=i.get(e);if(r!==void 0)return r;const s=e.emits;let o={},a=!1;if(!je(e)){const l=u=>{const c=Ck(u,t,!0);c&&(a=!0,Gt(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(Ct(e)&&i.set(e,null),null):(Be(s)?s.forEach(l=>o[l]=null):Gt(o,s),Ct(e)&&i.set(e,o),o)}function Th(e,t){return!e||!mc(t)?!1:(t=t.slice(2).replace(/Once$/,""),vt(e,t[0].toLowerCase()+t.slice(1))||vt(e,Lo(t))||vt(e,t))}function av(e){const{type:t,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:d,data:f,setupState:m,ctx:g,inheritAttrs:y}=e,p=hf(e);let S,w;try{if(n.shapeFlag&4){const x=r||i,V=x;S=oi(u.call(V,x,c,d,m,f,g)),w=a}else{const x=t;S=oi(x.length>1?x(d,{attrs:a,slots:o,emit:l}):x(d,null)),w=t.props?a:wL(a)}}catch(x){mu.length=0,ul(x,e,1),S=v(Jt)}let T=S;if(w&&y!==!1){const x=Object.keys(w),{shapeFlag:V}=T;x.length&&V&7&&(s&&x.some(by)&&(w=SL(w,s)),T=lr(T,w,!1,!0))}return n.dirs&&(T=lr(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&Is(T,n.transition),S=T,hf(p),S}function bL(e,t=!0){let n;for(let i=0;i<e.length;i++){const r=e[i];if(ks(r)){if(r.type!==Jt||r.children==="v-if"){if(n)return;n=r}}else return}return n}const wL=e=>{let t;for(const n in e)(n==="class"||n==="style"||mc(n))&&((t||(t={}))[n]=e[n]);return t},SL=(e,t)=>{const n={};for(const i in e)(!by(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function TL(e,t,n){const{props:i,children:r,component:s}=e,{props:o,children:a,patchFlag:l}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?M0(i,o,u):!!o;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const f=c[d];if(o[f]!==i[f]&&!Th(u,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?M0(i,o,u):!0:!!o;return!1}function M0(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==e[s]&&!Th(n,s))return!0}return!1}function Ch({vnode:e,parent:t},n){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i===e)(e=t.vnode).el=n,t=t.parent;else break}}const pf=e=>e.__isSuspense;let lg=0;const CL={name:"Suspense",__isSuspense:!0,process(e,t,n,i,r,s,o,a,l,u){if(e==null)EL(t,n,i,r,s,o,a,l,u);else{if(s&&s.deps>0&&!e.suspense.isInFallback){t.suspense=e.suspense,t.suspense.vnode=t,t.el=e.el;return}IL(e,t,n,i,r,o,a,l,u)}},hydrate:kL,normalize:AL},Ek=CL;function Nu(e,t){const n=e.props&&e.props[t];je(n)&&n()}function EL(e,t,n,i,r,s,o,a,l){const{p:u,o:{createElement:c}}=l,d=c("div"),f=e.suspense=Ik(e,r,i,t,d,n,s,o,a,l);u(null,f.pendingBranch=e.ssContent,d,null,i,f,s,o),f.deps>0?(Nu(e,"onPending"),Nu(e,"onFallback"),u(null,e.ssFallback,t,n,i,null,s,o),Na(f,e.ssFallback)):f.resolve(!1,!0)}function IL(e,t,n,i,r,s,o,a,{p:l,um:u,o:{createElement:c}}){const d=t.suspense=e.suspense;d.vnode=t,t.el=e.el;const f=t.ssContent,m=t.ssFallback,{activeBranch:g,pendingBranch:y,isInFallback:p,isHydrating:S}=d;if(y)d.pendingBranch=f,Di(f,y)?(l(y,f,d.hiddenContainer,null,r,d,s,o,a),d.deps<=0?d.resolve():p&&(S||(l(g,m,n,i,r,null,s,o,a),Na(d,m)))):(d.pendingId=lg++,S?(d.isHydrating=!1,d.activeBranch=y):u(y,r,d),d.deps=0,d.effects.length=0,d.hiddenContainer=c("div"),p?(l(null,f,d.hiddenContainer,null,r,d,s,o,a),d.deps<=0?d.resolve():(l(g,m,n,i,r,null,s,o,a),Na(d,m))):g&&Di(f,g)?(l(g,f,n,i,r,d,s,o,a),d.resolve(!0)):(l(null,f,d.hiddenContainer,null,r,d,s,o,a),d.deps<=0&&d.resolve()));else if(g&&Di(f,g))l(g,f,n,i,r,d,s,o,a),Na(d,f);else if(Nu(t,"onPending"),d.pendingBranch=f,f.shapeFlag&512?d.pendingId=f.component.suspenseId:d.pendingId=lg++,l(null,f,d.hiddenContainer,null,r,d,s,o,a),d.deps<=0)d.resolve();else{const{timeout:w,pendingId:T}=d;w>0?setTimeout(()=>{d.pendingId===T&&d.fallback(m)},w):w===0&&d.fallback(m)}}function Ik(e,t,n,i,r,s,o,a,l,u,c=!1){const{p:d,m:f,um:m,n:g,o:{parentNode:y,remove:p}}=u;let S;const w=PL(e);w&&t&&t.pendingBranch&&(S=t.pendingId,t.deps++);const T=e.props?pI(e.props.timeout):void 0,x=s,V={vnode:e,parent:t,parentComponent:n,namespace:o,container:i,hiddenContainer:r,deps:0,pendingId:lg++,timeout:typeof T=="number"?T:-1,activeBranch:null,pendingBranch:null,isInFallback:!c,isHydrating:c,isUnmounted:!1,effects:[],resolve(D=!1,A=!1){const{vnode:b,activeBranch:_,pendingBranch:E,pendingId:k,effects:I,parentComponent:R,container:B}=V;let $=!1;V.isHydrating?V.isHydrating=!1:D||($=_&&E.transition&&E.transition.mode==="out-in",$&&(_.transition.afterLeave=()=>{k===V.pendingId&&(f(E,B,s===x?g(_):s,0),ng(I))}),_&&(y(_.el)===B&&(s=g(_)),m(_,R,V,!0)),$||f(E,B,s,0)),Na(V,E),V.pendingBranch=null,V.isInFallback=!1;let U=V.parent,q=!1;for(;U;){if(U.pendingBranch){U.effects.push(...I),q=!0;break}U=U.parent}!q&&!$&&ng(I),V.effects=[],w&&t&&t.pendingBranch&&S===t.pendingId&&(t.deps--,t.deps===0&&!A&&t.resolve()),Nu(b,"onResolve")},fallback(D){if(!V.pendingBranch)return;const{vnode:A,activeBranch:b,parentComponent:_,container:E,namespace:k}=V;Nu(A,"onFallback");const I=g(b),R=()=>{V.isInFallback&&(d(null,D,E,I,_,null,k,a,l),Na(V,D))},B=D.transition&&D.transition.mode==="out-in";B&&(b.transition.afterLeave=R),V.isInFallback=!0,m(b,_,null,!0),B||R()},move(D,A,b){V.activeBranch&&f(V.activeBranch,D,A,b),V.container=D},next(){return V.activeBranch&&g(V.activeBranch)},registerDep(D,A,b){const _=!!V.pendingBranch;_&&V.deps++;const E=D.vnode.el;D.asyncDep.catch(k=>{ul(k,D,0)}).then(k=>{if(D.isUnmounted||V.isUnmounted||V.pendingId!==D.suspenseId)return;D.asyncResolved=!0;const{vnode:I}=D;cg(D,k,!1),E&&(I.el=E);const R=!E&&D.subTree.el;A(D,I,y(E||D.subTree.el),E?null:g(D.subTree),V,o,b),R&&p(R),Ch(D,I.el),_&&--V.deps===0&&V.resolve()})},unmount(D,A){V.isUnmounted=!0,V.activeBranch&&m(V.activeBranch,n,D,A),V.pendingBranch&&m(V.pendingBranch,n,D,A)}};return V}function kL(e,t,n,i,r,s,o,a,l){const u=t.suspense=Ik(t,i,n,e.parentNode,document.createElement("div"),null,r,s,o,a,!0),c=l(e,u.pendingBranch=t.ssContent,n,u,s,o);return u.deps===0&&u.resolve(!1,!0),c}function AL(e){const{shapeFlag:t,children:n}=e,i=t&32;e.ssContent=N0(i?n.default:n),e.ssFallback=i?N0(n.fallback):v(Jt)}function N0(e){let t;if(je(e)){const n=ja&&e._c;n&&(e._d=!1,Si()),e=e(),n&&(e._d=!0,t=ei,Ak())}return Be(e)&&(e=bL(e)),e=oi(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function kk(e,t){t&&t.pendingBranch?Be(e)?t.effects.push(...e):t.effects.push(e):ng(e)}function Na(e,t){e.activeBranch=t;const{vnode:n,parentComponent:i}=e;let r=t.el;for(;!r&&t.component;)t=t.component.subTree,r=t.el;n.el=r,i&&i.subTree===n&&(i.vnode.el=r,Ch(i,r))}function PL(e){const t=e.props&&e.props.suspensible;return t!=null&&t!==!1}const Te=Symbol.for("v-fgt"),ys=Symbol.for("v-txt"),Jt=Symbol.for("v-cmt"),hu=Symbol.for("v-stc"),mu=[];let ei=null;function Si(e=!1){mu.push(ei=e?null:[])}function Ak(){mu.pop(),ei=mu[mu.length-1]||null}let ja=1;function O0(e,t=!1){ja+=e,e<0&&ei&&t&&(ei.hasOnce=!0)}function Pk(e){return e.dynamicChildren=ja>0?ei||xa:null,Ak(),ja>0&&ei&&ei.push(e),e}function xL(e,t,n,i,r,s){return Pk(Rk(e,t,n,i,r,s,!0))}function er(e,t,n,i,r){return Pk(v(e,t,n,i,r,!0))}function ks(e){return e?e.__v_isVNode===!0:!1}function Di(e,t){return e.type===t.type&&e.key===t.key}const xk=({key:e})=>e??null,Fd=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Vt(e)||Nt(e)||je(e)?{i:un,r:e,k:t,f:!!n}:e:null);function Rk(e,t=null,n=null,i=0,r=null,s=e===Te?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&xk(t),ref:t&&Fd(t),scopeId:WI,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:un};return a?(Uy(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=Vt(n)?8:16),ja>0&&!o&&ei&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&ei.push(l),l}const v=RL;function RL(e,t=null,n=null,i=0,r=null,s=!1){if((!e||e===sk)&&(e=Jt),ks(e)){const a=lr(e,t,!0);return n&&Uy(a,n),ja>0&&!s&&ei&&(a.shapeFlag&6?ei[ei.indexOf(e)]=a:ei.push(a)),a.patchFlag=-2,a}if(BL(e)&&(e=e.__vccOpts),t){t=Vk(t);let{class:a,style:l}=t;a&&!Vt(a)&&(t.class=yh(a)),Ct(l)&&(Py(l)&&!Be(l)&&(l=Gt({},l)),t.style=ph(l))}const o=Vt(e)?1:pf(e)?128:GI(e)?64:Ct(e)?4:je(e)?2:0;return Rk(e,t,n,i,r,o,s,!0)}function Vk(e){return e?Py(e)||hk(e)?Gt({},e):e:null}function lr(e,t,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=e,u=t?te(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&xk(u),ref:t&&t.ref?n&&s?Be(s)?s.concat(Fd(t)):[s,Fd(t)]:Fd(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Te?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&lr(e.ssContent),ssFallback:e.ssFallback&&lr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&i&&Is(c,l.clone(c)),c}function ki(e=" ",t=0){return v(ys,null,e,t)}function rne(e,t){const n=v(hu,null,e);return n.staticCount=t,n}function sne(e="",t=!1){return t?(Si(),er(Jt,null,e)):v(Jt,null,e)}function oi(e){return e==null||typeof e=="boolean"?v(Jt):Be(e)?v(Te,null,e.slice()):ks(e)?ss(e):v(ys,null,String(e))}function ss(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:lr(e)}function Uy(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(Be(t))n=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),Uy(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!hk(t)?t._ctx=un:r===3&&un&&(un.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else je(t)?(t={default:t,_ctx:un},n=32):(t=String(t),i&64?(n=16,t=[ki(t)]):n=8);e.children=t,e.shapeFlag|=n}function te(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=yh([t.class,i.class]));else if(r==="style")t.style=ph([t.style,i.style]);else if(mc(r)){const s=t[r],o=i[r];o&&s!==o&&!(Be(s)&&s.includes(o))&&(t[r]=s?[].concat(s,o):o)}else r!==""&&(t[r]=i[r])}return t}function Jn(e,t,n,i=null){$i(e,t,7,[n,i])}const VL=uk();let DL=0;function ML(e,t,n){const i=e.type,r=(t?t.appContext:e.appContext)||VL,s={uid:DL++,vnode:e,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new SI(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vk(i,r),emitsOptions:Ck(i,r),emit:null,emitted:null,propsDefaults:wt,inheritAttrs:i.inheritAttrs,ctx:wt,data:wt,props:wt,attrs:wt,slots:wt,refs:wt,setupState:wt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=_L.bind(null,s),e.ce&&e.ce(s),s}let ln=null;const cl=()=>ln||un;let yf,ug;{const e=gh(),t=(n,i)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};yf=t("__VUE_INSTANCE_SETTERS__",n=>ln=n),ug=t("__VUE_SSR_SETTERS__",n=>Wa=n)}const bc=e=>{const t=ln;return yf(e),e.scope.on(),()=>{e.scope.off(),yf(t)}},L0=()=>{ln&&ln.scope.off(),yf(null)};function Dk(e){return e.vnode.shapeFlag&4}let Wa=!1;function NL(e,t=!1,n=!1){t&&ug(t);const{props:i,children:r}=e.vnode,s=Dk(e);oL(e,i,s,t),cL(e,r,n);const o=s?OL(e,t):void 0;return t&&ug(!1),o}function OL(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,JO);const{setup:i}=n;if(i){Ls();const r=e.setupContext=i.length>1?FL(e):null,s=bc(e),o=yc(i,e,0,[e.props,r]),a=hI(o);if(Fs(),s(),(a||e.sp)&&!ps(e)&&Vy(e),a){if(o.then(L0,L0),t)return o.then(l=>{cg(e,l,t)}).catch(l=>{ul(l,e,0)});e.asyncDep=o}else cg(e,o,t)}else Mk(e,t)}function cg(e,t,n){je(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ct(t)&&(e.setupState=BI(t)),Mk(e,n)}let F0;function Mk(e,t,n){const i=e.type;if(!e.render){if(!t&&F0&&!i.render){const r=i.template||Ly(e).template;if(r){const{isCustomElement:s,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=i,u=Gt(Gt({isCustomElement:s,delimiters:a},o),l);i.render=F0(r,u)}}e.render=i.render||ir}{const r=bc(e);Ls();try{ZO(e)}finally{Fs(),r()}}}const LL={get(e,t){return Mn(e,"get",""),e[t]}};function FL(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,LL),slots:e.slots,emit:e.emit,expose:t}}function Eh(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(BI(uf(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in fu)return fu[n](e)},has(t,n){return n in t||n in fu}})):e.proxy}function dg(e,t=!0){return je(e)?e.displayName||e.name:e.name||t&&e.__name}function BL(e){return je(e)&&"__vccOpts"in e}const P=(e,t)=>xO(e,t,Wa);function qt(e,t,n){const i=arguments.length;return i===2?Ct(t)&&!Be(t)?ks(t)?v(e,null,[t]):v(e,t):v(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&ks(n)&&(n=[n]),v(e,t,n))}const Nk="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fg;const B0=typeof window<"u"&&window.trustedTypes;if(B0)try{fg=B0.createPolicy("vue",{createHTML:e=>e})}catch{}const Ok=fg?e=>fg.createHTML(e):e=>e,$L="http://www.w3.org/2000/svg",UL="http://www.w3.org/1998/Math/MathML",Ir=typeof document<"u"?document:null,$0=Ir&&Ir.createElement("template"),HL={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const r=t==="svg"?Ir.createElementNS($L,e):t==="mathml"?Ir.createElementNS(UL,e):n?Ir.createElement(e,{is:n}):Ir.createElement(e);return e==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:e=>Ir.createTextNode(e),createComment:e=>Ir.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ir.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,r,s){const o=n?n.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{$0.innerHTML=Ok(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const a=$0.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},es="transition",ql="animation",za=Symbol("_vtc"),Lk={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Fk=Gt({},XI,Lk),jL=e=>(e.displayName="Transition",e.props=Fk,e),Or=jL((e,{slots:t})=>qt(FO,Bk(e),t)),Qs=(e,t=[])=>{Be(e)?e.forEach(n=>n(...t)):e&&e(...t)},U0=e=>e?Be(e)?e.some(t=>t.length>1):e.length>1:!1;function Bk(e){const t={};for(const I in e)I in Lk||(t[I]=e[I]);if(e.css===!1)return t;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,g=WL(r),y=g&&g[0],p=g&&g[1],{onBeforeEnter:S,onEnter:w,onEnterCancelled:T,onLeave:x,onLeaveCancelled:V,onBeforeAppear:D=S,onAppear:A=w,onAppearCancelled:b=T}=t,_=(I,R,B,$)=>{I._enterCancelled=$,ns(I,R?c:a),ns(I,R?u:o),B&&B()},E=(I,R)=>{I._isLeaving=!1,ns(I,d),ns(I,m),ns(I,f),R&&R()},k=I=>(R,B)=>{const $=I?A:w,U=()=>_(R,I,B);Qs($,[R,U]),H0(()=>{ns(R,I?l:s),Xi(R,I?c:a),U0($)||j0(R,i,y,U)})};return Gt(t,{onBeforeEnter(I){Qs(S,[I]),Xi(I,s),Xi(I,o)},onBeforeAppear(I){Qs(D,[I]),Xi(I,l),Xi(I,u)},onEnter:k(!1),onAppear:k(!0),onLeave(I,R){I._isLeaving=!0;const B=()=>E(I,R);Xi(I,d),I._enterCancelled?(Xi(I,f),hg()):(hg(),Xi(I,f)),H0(()=>{I._isLeaving&&(ns(I,d),Xi(I,m),U0(x)||j0(I,i,p,B))}),Qs(x,[I,B])},onEnterCancelled(I){_(I,!1,void 0,!0),Qs(T,[I])},onAppearCancelled(I){_(I,!0,void 0,!0),Qs(b,[I])},onLeaveCancelled(I){E(I),Qs(V,[I])}})}function WL(e){if(e==null)return null;if(Ct(e))return[lv(e.enter),lv(e.leave)];{const t=lv(e);return[t,t]}}function lv(e){return pI(e)}function Xi(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[za]||(e[za]=new Set)).add(t)}function ns(e,t){t.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const n=e[za];n&&(n.delete(t),n.size||(e[za]=void 0))}function H0(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let zL=0;function j0(e,t,n,i){const r=e._endId=++zL,s=()=>{r===e._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=$k(e,t);if(!o)return i();const u=o+"end";let c=0;const d=()=>{e.removeEventListener(u,f),s()},f=m=>{m.target===e&&++c>=l&&d()};setTimeout(()=>{c<l&&d()},a+1),e.addEventListener(u,f)}function $k(e,t){const n=window.getComputedStyle(e),i=g=>(n[g]||"").split(", "),r=i(`${es}Delay`),s=i(`${es}Duration`),o=W0(r,s),a=i(`${ql}Delay`),l=i(`${ql}Duration`),u=W0(a,l);let c=null,d=0,f=0;t===es?o>0&&(c=es,d=o,f=s.length):t===ql?u>0&&(c=ql,d=u,f=l.length):(d=Math.max(o,u),c=d>0?o>u?es:ql:null,f=c?c===es?s.length:l.length:0);const m=c===es&&/\b(transform|all)(,|$)/.test(i(`${es}Property`).toString());return{type:c,timeout:d,propCount:f,hasTransform:m}}function W0(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,i)=>z0(n)+z0(e[i])))}function z0(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function hg(){return document.body.offsetHeight}function qL(e,t,n){const i=e[za];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const _f=Symbol("_vod"),Uk=Symbol("_vsh"),Yi={beforeMount(e,{value:t},{transition:n}){e[_f]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Gl(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:i}){!t!=!n&&(i?t?(i.beforeEnter(e),Gl(e,!0),i.enter(e)):i.leave(e,()=>{Gl(e,!1)}):Gl(e,t))},beforeUnmount(e,{value:t}){Gl(e,t)}};function Gl(e,t){e.style.display=t?e[_f]:"none",e[Uk]=!t}const GL=Symbol(""),KL=/(^|;)\s*display\s*:/;function YL(e,t,n){const i=e.style,r=Vt(n);let s=!1;if(n&&!r){if(t)if(Vt(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Bd(i,a,"")}else for(const o in t)n[o]==null&&Bd(i,o,"");for(const o in n)o==="display"&&(s=!0),Bd(i,o,n[o])}else if(r){if(t!==n){const o=i[GL];o&&(n+=";"+o),i.cssText=n,s=KL.test(n)}}else t&&e.removeAttribute("style");_f in e&&(e[_f]=s?i.display:"",e[Uk]&&(i.display="none"))}const q0=/\s*!important$/;function Bd(e,t,n){if(Be(n))n.forEach(i=>Bd(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=QL(e,t);q0.test(n)?e.setProperty(Lo(i),n.replace(q0,""),"important"):e[i]=n}}const G0=["Webkit","Moz","ms"],uv={};function QL(e,t){const n=uv[t];if(n)return n;let i=ni(t);if(i!=="filter"&&i in e)return uv[t]=i;i=hr(i);for(let r=0;r<G0.length;r++){const s=G0[r]+i;if(s in e)return uv[t]=s}return t}const K0="http://www.w3.org/1999/xlink";function Y0(e,t,n,i,r,s=sO(t)){i&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(K0,t.slice(6,t.length)):e.setAttributeNS(K0,t,n):n==null||s&&!yI(n)?e.removeAttribute(t):e.setAttribute(t,s?"":Wr(n)?String(n):n)}function Q0(e,t,n,i,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Ok(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=yI(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(r||t)}function pa(e,t,n,i){e.addEventListener(t,n,i)}function XL(e,t,n,i){e.removeEventListener(t,n,i)}const X0=Symbol("_vei");function JL(e,t,n,i,r=null){const s=e[X0]||(e[X0]={}),o=s[t];if(i&&o)o.value=i;else{const[a,l]=ZL(t);if(i){const u=s[t]=nF(i,r);pa(e,a,u,l)}else o&&(XL(e,a,o,l),s[t]=void 0)}}const J0=/(?:Once|Passive|Capture)$/;function ZL(e){let t;if(J0.test(e)){t={};let i;for(;i=e.match(J0);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Lo(e.slice(2)),t]}let cv=0;const eF=Promise.resolve(),tF=()=>cv||(eF.then(()=>cv=0),cv=Date.now());function nF(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;$i(iF(i,n.value),t,5,[i])};return n.value=e,n.attached=tF(),n}function iF(e,t){if(Be(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const Z0=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,rF=(e,t,n,i,r,s)=>{const o=r==="svg";t==="class"?qL(e,i,o):t==="style"?YL(e,n,i):mc(t)?by(t)||JL(e,t,n,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):sF(e,t,i,o))?(Q0(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Y0(e,t,i,o,s,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Vt(i))?Q0(e,ni(t),i,s,t):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),Y0(e,t,i,o))};function sF(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&Z0(t)&&je(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Z0(t)&&Vt(n)?!1:t in e}const Hk=new WeakMap,jk=new WeakMap,bf=Symbol("_moveCb"),eS=Symbol("_enterCb"),oF=e=>(delete e.props.mode,e),aF=oF({name:"TransitionGroup",props:Gt({},Fk,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=cl(),i=QI();let r,s;return Sh(()=>{if(!r.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!dF(r[0].el,n.vnode.el,o))return;r.forEach(lF),r.forEach(uF);const a=r.filter(cF);hg(),a.forEach(l=>{const u=l.el,c=u.style;Xi(u,o),c.transform=c.webkitTransform=c.transitionDuration="";const d=u[bf]=f=>{f&&f.target!==u||(!f||/transform$/.test(f.propertyName))&&(u.removeEventListener("transitionend",d),u[bf]=null,ns(u,o))};u.addEventListener("transitionend",d)})}),()=>{const o=Oe(e),a=Bk(o);let l=o.tag||Te;if(r=[],s)for(let u=0;u<s.length;u++){const c=s[u];c.el&&c.el instanceof Element&&(r.push(c),Is(c,Du(c,a,i,n)),Hk.set(c,c.el.getBoundingClientRect()))}s=t.default?Ry(t.default()):[];for(let u=0;u<s.length;u++){const c=s[u];c.key!=null&&Is(c,Du(c,a,i,n))}return v(l,null,s)}}}),Hy=aF;function lF(e){const t=e.el;t[bf]&&t[bf](),t[eS]&&t[eS]()}function uF(e){jk.set(e,e.el.getBoundingClientRect())}function cF(e){const t=Hk.get(e),n=jk.get(e),i=t.left-n.left,r=t.top-n.top;if(i||r){const s=e.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",e}}function dF(e,t,n){const i=e.cloneNode(),r=e[za];r&&r.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(i);const{hasTransform:o}=$k(i);return s.removeChild(i),o}const tS=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Be(t)?n=>Da(t,n):t};function fF(e){e.target.composing=!0}function nS(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const dv=Symbol("_assign"),hF={created(e,{modifiers:{lazy:t,trim:n,number:i}},r){e[dv]=tS(r);const s=i||r.props&&r.props.type==="number";pa(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),s&&(a=Xv(a)),e[dv](a)}),n&&pa(e,"change",()=>{e.value=e.value.trim()}),t||(pa(e,"compositionstart",fF),pa(e,"compositionend",nS),pa(e,"change",nS))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},o){if(e[dv]=tS(o),e.composing)return;const a=(s||e.type==="number")&&!/^0\d/.test(e.value)?Xv(e.value):e.value,l=t??"";a!==l&&(document.activeElement===e&&e.type!=="range"&&(i&&t===n||r&&e.value.trim()===l)||(e.value=l))}},mF=["ctrl","shift","alt","meta"],vF={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>mF.some(n=>e[`${n}Key`]&&!t.includes(n))},mg=(e,t)=>{const n=e._withMods||(e._withMods={}),i=t.join(".");return n[i]||(n[i]=(r,...s)=>{for(let o=0;o<t.length;o++){const a=vF[t[o]];if(a&&a(r,t))return}return e(r,...s)})},Wk=Gt({patchProp:rF},HL);let vu,iS=!1;function zk(){return vu||(vu=fL(Wk))}function gF(){return vu=iS?vu:hL(Wk),iS=!0,vu}const qk=(...e)=>{zk().render(...e)},pF=(...e)=>{const t=zk().createApp(...e),{mount:n}=t;return t.mount=i=>{const r=Kk(i);if(!r)return;const s=t._component;!je(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Gk(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t},yF=(...e)=>{const t=gF().createApp(...e),{mount:n}=t;return t.mount=i=>{const r=Kk(i);if(r)return n(r,!0,Gk(r))},t};function Gk(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Kk(e){return Vt(e)?document.querySelector(e):e}const _F=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,bF=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,wF=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function SF(e,t){if(e==="__proto__"||e==="constructor"&&t&&typeof t=="object"&&"prototype"in t){TF(e);return}return t}function TF(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}function wf(e,t={}){if(typeof e!="string")return e;const n=e.trim();if(e[0]==='"'&&e.endsWith('"')&&!e.includes("\\"))return n.slice(1,-1);if(n.length<=9){const i=n.toLowerCase();if(i==="true")return!0;if(i==="false")return!1;if(i==="undefined")return;if(i==="null")return null;if(i==="nan")return Number.NaN;if(i==="infinity")return Number.POSITIVE_INFINITY;if(i==="-infinity")return Number.NEGATIVE_INFINITY}if(!wF.test(e)){if(t.strict)throw new SyntaxError("[destr] Invalid JSON");return e}try{if(_F.test(e)||bF.test(e)){if(t.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(e,SF)}return JSON.parse(e)}catch(i){if(t.strict)throw i;return e}}const CF=/#/g,EF=/&/g,IF=/\//g,kF=/=/g,jy=/\+/g,AF=/%5e/gi,PF=/%60/gi,xF=/%7c/gi,RF=/%20/gi;function VF(e){return encodeURI(""+e).replace(xF,"|")}function vg(e){return VF(typeof e=="string"?e:JSON.stringify(e)).replace(jy,"%2B").replace(RF,"+").replace(CF,"%23").replace(EF,"%26").replace(PF,"`").replace(AF,"^").replace(IF,"%2F")}function fv(e){return vg(e).replace(kF,"%3D")}function Sf(e=""){try{return decodeURIComponent(""+e)}catch{return""+e}}function DF(e){return Sf(e.replace(jy," "))}function MF(e){return Sf(e.replace(jy," "))}function NF(e=""){const t={};e[0]==="?"&&(e=e.slice(1));for(const n of e.split("&")){const i=n.match(/([^=]+)=?(.*)/)||[];if(i.length<2)continue;const r=DF(i[1]);if(r==="__proto__"||r==="constructor")continue;const s=MF(i[2]||"");t[r]===void 0?t[r]=s:Array.isArray(t[r])?t[r].push(s):t[r]=[t[r],s]}return t}function OF(e,t){return(typeof t=="number"||typeof t=="boolean")&&(t=String(t)),t?Array.isArray(t)?t.map(n=>`${fv(e)}=${vg(n)}`).join("&"):`${fv(e)}=${vg(t)}`:fv(e)}function LF(e){return Object.keys(e).filter(t=>e[t]!==void 0).map(t=>OF(t,e[t])).filter(Boolean).join("&")}const FF=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,BF=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,$F=/^([/\\]\s*){2,}[^/\\]/,UF=/^[\s\0]*(blob|data|javascript|vbscript):$/i,HF=/\/$|\/\?|\/#/,jF=/^\.?\//;function Bo(e,t={}){return typeof t=="boolean"&&(t={acceptRelative:t}),t.strict?FF.test(e):BF.test(e)||(t.acceptRelative?$F.test(e):!1)}function WF(e){return!!e&&UF.test(e)}function gg(e="",t){return t?HF.test(e):e.endsWith("/")}function Wy(e="",t){if(!t)return(gg(e)?e.slice(0,-1):e)||"/";if(!gg(e,!0))return e||"/";let n=e,i="";const r=e.indexOf("#");r>=0&&(n=e.slice(0,r),i=e.slice(r));const[s,...o]=n.split("?");return((s.endsWith("/")?s.slice(0,-1):s)||"/")+(o.length>0?`?${o.join("?")}`:"")+i}function pg(e="",t){if(!t)return e.endsWith("/")?e:e+"/";if(gg(e,!0))return e||"/";let n=e,i="";const r=e.indexOf("#");if(r>=0&&(n=e.slice(0,r),i=e.slice(r),!n))return i;const[s,...o]=n.split("?");return s+"/"+(o.length>0?`?${o.join("?")}`:"")+i}function zF(e=""){return e.startsWith("/")}function rS(e=""){return zF(e)?e:"/"+e}function qF(e,t){if(Qk(t)||Bo(e))return e;const n=Wy(t);return e.startsWith(n)?e:zy(n,e)}function sS(e,t){if(Qk(t))return e;const n=Wy(t);if(!e.startsWith(n))return e;const i=e.slice(n.length);return i[0]==="/"?i:"/"+i}function Yk(e,t){const n=YF(e),i={...NF(n.search),...t};return n.search=LF(i),QF(n)}function Qk(e){return!e||e==="/"}function GF(e){return e&&e!=="/"}function zy(e,...t){let n=e||"";for(const i of t.filter(r=>GF(r)))if(n){const r=i.replace(jF,"");n=pg(n)+r}else n=i;return n}function Xk(...e){var o,a,l,u;const t=/\/(?!\/)/,n=e.filter(Boolean),i=[];let r=0;for(const c of n)if(!(!c||c==="/")){for(const[d,f]of c.split(t).entries())if(!(!f||f===".")){if(f===".."){if(i.length===1&&Bo(i[0]))continue;i.pop(),r--;continue}if(d===1&&((o=i[i.length-1])!=null&&o.endsWith(":/"))){i[i.length-1]+="/"+f;continue}i.push(f),r++}}let s=i.join("/");return r>=0?(a=n[0])!=null&&a.startsWith("/")&&!s.startsWith("/")?s="/"+s:(l=n[0])!=null&&l.startsWith("./")&&!s.startsWith("./")&&(s="./"+s):s="../".repeat(-1*r)+s,(u=n[n.length-1])!=null&&u.endsWith("/")&&!s.endsWith("/")&&(s+="/"),s}function KF(e,t,n={}){return n.trailingSlash||(e=pg(e),t=pg(t)),n.leadingSlash||(e=rS(e),t=rS(t)),n.encoding||(e=Sf(e),t=Sf(t)),e===t}const Jk=Symbol.for("ufo:protocolRelative");function YF(e="",t){const n=e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,d,f=""]=n;return{protocol:d.toLowerCase(),pathname:f,href:d+f,auth:"",host:"",search:"",hash:""}}if(!Bo(e,{acceptRelative:!0}))return oS(e);const[,i="",r,s=""]=e.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=s.match(/([^#/?]*)(.*)?/)||[];i==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:c}=oS(a);return{protocol:i.toLowerCase(),auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:o,pathname:l,search:u,hash:c,[Jk]:!i}}function oS(e=""){const[t="",n="",i=""]=(e.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:t,search:n,hash:i}}function QF(e){const t=e.pathname||"",n=e.search?(e.search.startsWith("?")?"":"?")+e.search:"",i=e.hash||"",r=e.auth?e.auth+"@":"",s=e.host||"";return(e.protocol||e[Jk]?(e.protocol||"")+"//":"")+r+s+t+n+i}class XF extends Error{constructor(t,n){super(t,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function JF(e){var l,u,c,d,f;const t=((l=e.error)==null?void 0:l.message)||((u=e.error)==null?void 0:u.toString())||"",n=((c=e.request)==null?void 0:c.method)||((d=e.options)==null?void 0:d.method)||"GET",i=((f=e.request)==null?void 0:f.url)||String(e.request)||"/",r=`[${n}] ${JSON.stringify(i)}`,s=e.response?`${e.response.status} ${e.response.statusText}`:"<no response>",o=`${r}: ${s}${t?` ${t}`:""}`,a=new XF(o,e.error?{cause:e.error}:void 0);for(const m of["request","options","response"])Object.defineProperty(a,m,{get(){return e[m]}});for(const[m,g]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,m,{get(){return e.response&&e.response[g]}});return a}const ZF=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function aS(e="GET"){return ZF.has(e.toUpperCase())}function e2(e){if(e===void 0)return!1;const t=typeof e;return t==="string"||t==="number"||t==="boolean"||t===null?!0:t!=="object"?!1:Array.isArray(e)?!0:e.buffer?!1:e.constructor&&e.constructor.name==="Object"||typeof e.toJSON=="function"}const t2=new Set(["image/svg","application/xml","application/xhtml","application/html"]),n2=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function i2(e=""){if(!e)return"json";const t=e.split(";").shift()||"";return n2.test(t)?"json":t2.has(t)||t.startsWith("text/")?"text":"blob"}function r2(e,t,n,i){const r=s2((t==null?void 0:t.headers)??(e==null?void 0:e.headers),n==null?void 0:n.headers,i);let s;return(n!=null&&n.query||n!=null&&n.params||t!=null&&t.params||t!=null&&t.query)&&(s={...n==null?void 0:n.params,...n==null?void 0:n.query,...t==null?void 0:t.params,...t==null?void 0:t.query}),{...n,...t,query:s,params:s,headers:r}}function s2(e,t,n){if(!t)return new n(e);const i=new n(t);if(e)for(const[r,s]of Symbol.iterator in e||Array.isArray(e)?e:new n(e))i.set(r,s);return i}async function fd(e,t){if(t)if(Array.isArray(t))for(const n of t)await n(e);else await t(e)}const o2=new Set([408,409,425,429,500,502,503,504]),a2=new Set([101,204,205,304]);function Zk(e={}){const{fetch:t=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:i=globalThis.AbortController}=e;async function r(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let c;typeof a.options.retry=="number"?c=a.options.retry:c=aS(a.options.method)?0:1;const d=a.response&&a.response.status||500;if(c>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(d):o2.has(d))){const f=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return f>0&&await new Promise(m=>setTimeout(m,f)),s(a.request,{...a.options,retry:c-1})}}const u=JF(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,s),u}const s=async function(l,u={}){const c={request:l,options:r2(l,u,e.defaults,n),response:void 0,error:void 0};c.options.method&&(c.options.method=c.options.method.toUpperCase()),c.options.onRequest&&await fd(c,c.options.onRequest),typeof c.request=="string"&&(c.options.baseURL&&(c.request=qF(c.request,c.options.baseURL)),c.options.query&&(c.request=Yk(c.request,c.options.query),delete c.options.query),"query"in c.options&&delete c.options.query,"params"in c.options&&delete c.options.params),c.options.body&&aS(c.options.method)&&(e2(c.options.body)?(c.options.body=typeof c.options.body=="string"?c.options.body:JSON.stringify(c.options.body),c.options.headers=new n(c.options.headers||{}),c.options.headers.has("content-type")||c.options.headers.set("content-type","application/json"),c.options.headers.has("accept")||c.options.headers.set("accept","application/json")):("pipeTo"in c.options.body&&typeof c.options.body.pipeTo=="function"||typeof c.options.body.pipe=="function")&&("duplex"in c.options||(c.options.duplex="half")));let d;if(!c.options.signal&&c.options.timeout){const m=new i;d=setTimeout(()=>{const g=new Error("[TimeoutError]: The operation was aborted due to timeout");g.name="TimeoutError",g.code=23,m.abort(g)},c.options.timeout),c.options.signal=m.signal}try{c.response=await t(c.request,c.options)}catch(m){return c.error=m,c.options.onRequestError&&await fd(c,c.options.onRequestError),await r(c)}finally{d&&clearTimeout(d)}if((c.response.body||c.response._bodyInit)&&!a2.has(c.response.status)&&c.options.method!=="HEAD"){const m=(c.options.parseResponse?"json":c.options.responseType)||i2(c.response.headers.get("content-type")||"");switch(m){case"json":{const g=await c.response.text(),y=c.options.parseResponse||wf;c.response._data=y(g);break}case"stream":{c.response._data=c.response.body||c.response._bodyInit;break}default:c.response._data=await c.response[m]()}}return c.options.onResponse&&await fd(c,c.options.onResponse),!c.options.ignoreResponseError&&c.response.status>=400&&c.response.status<600?(c.options.onResponseError&&await fd(c,c.options.onResponseError),await r(c)):c.response},o=async function(l,u){return(await s(l,u))._data};return o.raw=s,o.native=(...a)=>t(...a),o.create=(a={},l={})=>Zk({...e,...l,defaults:{...e.defaults,...l.defaults,...a}}),o}const Tf=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),l2=Tf.fetch?(...e)=>Tf.fetch(...e):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),u2=Tf.Headers,c2=Tf.AbortController,d2=Zk({fetch:l2,Headers:u2,AbortController:c2}),f2=d2,h2=()=>{var e;return((e=window==null?void 0:window.__NUXT__)==null?void 0:e.config)||{}},Cf=h2().app,m2=()=>Cf.baseURL,v2=()=>Cf.buildAssetsDir,qy=(...e)=>Xk(eA(),v2(),...e),eA=(...e)=>{const t=Cf.cdnURL||Cf.baseURL;return e.length?Xk(t,...e):t};globalThis.__buildAssetsURL=qy,globalThis.__publicAssetsURL=eA;globalThis.$fetch||(globalThis.$fetch=f2.create({baseURL:m2()}));function yg(e,t={},n){for(const i in e){const r=e[i],s=n?`${n}:${i}`:i;typeof r=="object"&&r!==null?yg(r,t,s):typeof r=="function"&&(t[s]=r)}return t}const g2={run:e=>e()},p2=()=>g2,tA=typeof console.createTask<"u"?console.createTask:p2;function y2(e,t){const n=t.shift(),i=tA(n);return e.reduce((r,s)=>r.then(()=>i.run(()=>s(...t))),Promise.resolve())}function _2(e,t){const n=t.shift(),i=tA(n);return Promise.all(e.map(r=>i.run(()=>r(...t))))}function hv(e,t){for(const n of[...e])n(t)}class b2{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,i={}){if(!t||typeof n!="function")return()=>{};const r=t;let s;for(;this._deprecatedHooks[t];)s=this._deprecatedHooks[t],t=s.to;if(s&&!i.allowDeprecated){let o=s.message;o||(o=`${r} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let i,r=(...s)=>(typeof i=="function"&&i(),i=void 0,r=void 0,n(...s));return i=this.hook(t,r),i}removeHook(t,n){if(this._hooks[t]){const i=this._hooks[t].indexOf(n);i!==-1&&this._hooks[t].splice(i,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const i=this._hooks[t]||[];delete this._hooks[t];for(const r of i)this.hook(t,r)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=yg(t),i=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(const r of i.splice(0,i.length))r()}}removeHooks(t){const n=yg(t);for(const i in n)this.removeHook(i,n[i])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith(y2,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(_2,t,...n)}callHookWith(t,n,...i){const r=this._before||this._after?{name:n,args:i,context:{}}:void 0;this._before&&hv(this._before,r);const s=t(n in this._hooks?[...this._hooks[n]]:[],i);return s instanceof Promise?s.finally(()=>{this._after&&r&&hv(this._after,r)}):(this._after&&r&&hv(this._after,r),s)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function nA(){return new b2}function w2(e={}){let t,n=!1;const i=o=>{if(t&&t!==o)throw new Error("Context conflict")};let r;if(e.asyncContext){const o=e.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?r=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const s=()=>{if(r&&t===void 0){const o=r.getStore();if(o!==void 0)return o}return t};return{use:()=>{const o=s();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>s(),set:(o,a)=>{a||i(o),t=o,n=!0},unset:()=>{t=void 0,n=!1},call:(o,a)=>{i(o),t=o;try{return r?r.run(o,a):a()}finally{n||(t=void 0)}},async callAsync(o,a){t=o;const l=()=>{t=o},u=()=>t===o?l:void 0;_g.add(u);try{const c=r?r.run(o,a):a();return n||(t=void 0),await c}finally{_g.delete(u)}}}}function S2(e={}){const t={};return{get(n,i={}){return t[n]||(t[n]=w2({...e,...i})),t[n],t[n]}}}const Ef=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},lS="__unctx__",T2=Ef[lS]||(Ef[lS]=S2()),C2=(e,t={})=>T2.get(e,t),uS="__unctx_async_handlers__",_g=Ef[uS]||(Ef[uS]=new Set);function Oa(e){const t=[];for(const r of _g){const s=r();s&&t.push(s)}const n=()=>{for(const r of t)r()};let i=e();return i&&typeof i=="object"&&"catch"in i&&(i=i.catch(r=>{throw n(),r})),[i,n]}const one=!1,bg=!1,E2=!1,ane={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},I2=null,k2="#__nuxt",iA="nuxt-app",cS=36e5,A2="vite:preloadError";function rA(e=iA){return C2(e,{asyncContext:!1})}const P2="__nuxt_plugin";function x2(e){var r;let t=0;const n={_id:e.id||iA||"nuxt-app",_scope:gc(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.14.1592"},get vue(){return n.vueApp.version}},payload:Pr({...((r=e.ssrContext)==null?void 0:r.payload)||{},data:Pr({}),state:Ft({}),once:new Set,_errors:Pr({})}),static:{data:{}},runWithContext(s){return n._scope.active&&!TI()?n._scope.run(()=>dS(n,s)):dS(n,s)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};t++;let s=!1;return()=>{if(!s&&(s=!0,t--,t===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Pr({}),_payloadRevivers:{},...e};{const s=window.__NUXT__;if(s)for(const o in s)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],s[o]);break;default:n.payload[o]=s[o]}}n.hooks=nA(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(s,o)=>{const a="$"+s;hd(n,a,o),hd(n.vueApp.config.globalProperties,a,o)},hd(n.vueApp,"$nuxt",n),hd(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(A2,o=>{n.callHook("app:chunkError",{error:o.payload}),(n.isHydrating||o.payload.message.includes("Unable to preload CSS"))&&o.preventDefault()}),window.useNuxtApp=window.useNuxtApp||tn;const s=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",s)}const i=n.payload.config;return n.provide("config",i),n}function R2(e,t){t.hooks&&e.hooks.addHooks(t.hooks)}async function V2(e,t){if(typeof t=="function"){const{provide:n}=await e.runWithContext(()=>t(e))||{};if(n&&typeof n=="object")for(const i in n)e.provide(i,n[i])}}async function D2(e,t){const n=[],i=[],r=[],s=[];let o=0;async function a(l){var c;const u=((c=l.dependsOn)==null?void 0:c.filter(d=>t.some(f=>f._name===d)&&!n.includes(d)))??[];if(u.length>0)i.push([new Set(u),l]);else{const d=V2(e,l).then(async()=>{l._name&&(n.push(l._name),await Promise.all(i.map(async([f,m])=>{f.has(l._name)&&(f.delete(l._name),f.size===0&&(o++,await a(m)))})))});l.parallel?r.push(d.catch(f=>s.push(f))):await d}}for(const l of t)R2(e,l);for(const l of t)await a(l);if(await Promise.all(r),o)for(let l=0;l<o;l++)await Promise.all(r);if(s.length)throw s[0]}function ii(e){if(typeof e=="function")return e;const t=e._name||e.name;return delete e.name,Object.assign(e.setup||(()=>{}),e,{[P2]:!0,_name:t})}const M2=ii;function dS(e,t,n){const i=()=>t();return rA(e._id).set(e),e.vueApp.runWithContext(i)}function N2(e){var n;let t;return ck()&&(t=(n=cl())==null?void 0:n.appContext.app.$nuxt),t=t||rA(e).tryUse(),t||null}function tn(e){const t=N2(e);if(!t)throw new Error("[nuxt] instance unavailable");return t}function wc(e){return tn().$config}function hd(e,t,n){Object.defineProperty(e,t,{get:()=>n})}function O2(e,t){return{ctx:{table:e},matchAll:n=>oA(n,e)}}function sA(e){const t={};for(const n in e)t[n]=n==="dynamic"?new Map(Object.entries(e[n]).map(([i,r])=>[i,sA(r)])):new Map(Object.entries(e[n]));return t}function L2(e){return O2(sA(e))}function oA(e,t,n){e.endsWith("/")&&(e=e.slice(0,-1)||"/");const i=[];for(const[s,o]of fS(t.wildcard))(e===s||e.startsWith(s+"/"))&&i.push(o);for(const[s,o]of fS(t.dynamic))if(e.startsWith(s+"/")){const a="/"+e.slice(s.length).split("/").splice(2).join("/");i.push(...oA(a,o))}const r=t.static.get(e);return r&&i.push(r),i.filter(Boolean)}function fS(e){return[...e.entries()].sort((t,n)=>t[0].length-n[0].length)}function mv(e){if(e===null||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in e?!1:Symbol.toStringTag in e?Object.prototype.toString.call(e)==="[object Module]":!0}function wg(e,t,n=".",i){if(!mv(t))return wg(e,{},n,i);const r=Object.assign({},t);for(const s in e){if(s==="__proto__"||s==="constructor")continue;const o=e[s];o!=null&&(i&&i(r,s,o,n)||(Array.isArray(o)&&Array.isArray(r[s])?r[s]=[...o,...r[s]]:mv(o)&&mv(r[s])?r[s]=wg(o,r[s],(n?`${n}.`:"")+s.toString(),i):r[s]=o))}return r}function F2(e){return(...t)=>t.reduce((n,i)=>wg(n,i,"",e),{})}const aA=F2();function B2(e,t){try{return t in e}catch{return!1}}var $2=Object.defineProperty,U2=(e,t,n)=>t in e?$2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,to=(e,t,n)=>(U2(e,typeof t!="symbol"?t+"":t,n),n);class Sg extends Error{constructor(t,n={}){super(t,n),to(this,"statusCode",500),to(this,"fatal",!1),to(this,"unhandled",!1),to(this,"statusMessage"),to(this,"data"),to(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const t={message:this.message,statusCode:Cg(this.statusCode,500)};return this.statusMessage&&(t.statusMessage=lA(this.statusMessage)),this.data!==void 0&&(t.data=this.data),t}}to(Sg,"__h3_error__",!0);function Tg(e){if(typeof e=="string")return new Sg(e);if(H2(e))return e;const t=new Sg(e.message??e.statusMessage??"",{cause:e.cause||e});if(B2(e,"stack"))try{Object.defineProperty(t,"stack",{get(){return e.stack}})}catch{try{t.stack=e.stack}catch{}}if(e.data&&(t.data=e.data),e.statusCode?t.statusCode=Cg(e.statusCode,t.statusCode):e.status&&(t.statusCode=Cg(e.status,t.statusCode)),e.statusMessage?t.statusMessage=e.statusMessage:e.statusText&&(t.statusMessage=e.statusText),t.statusMessage){const n=t.statusMessage;lA(t.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return e.fatal!==void 0&&(t.fatal=e.fatal),e.unhandled!==void 0&&(t.unhandled=e.unhandled),t}function H2(e){var t;return((t=e==null?void 0:e.constructor)==null?void 0:t.__h3_error__)===!0}const j2=/[^\u0009\u0020-\u007E]/g;function lA(e=""){return e.replace(j2,"")}function Cg(e,t=200){return!e||(typeof e=="string"&&(e=Number.parseInt(e,10)),e<100||e>999)?t:e}const W2=Symbol("layout-meta"),Ih=Symbol("route"),Ui=()=>{var e;return(e=tn())==null?void 0:e.$router},uA=()=>ck()?Fe(Ih,tn()._route):tn()._route;const z2=()=>{try{if(tn()._processingMiddleware)return!0}catch{return!1}return!1},lne=(e,t)=>{e||(e="/");const n=typeof e=="string"?e:"path"in e?q2(e):Ui().resolve(e).href;if(t!=null&&t.open){const{target:l="_blank",windowFeatures:u={}}=t.open,c=Object.entries(u).filter(([d,f])=>f!==void 0).map(([d,f])=>`${d.toLowerCase()}=${f}`).join(", ");return open(n,l,c),Promise.resolve()}const i=Bo(n,{acceptRelative:!0}),r=(t==null?void 0:t.external)||i;if(r){if(!(t!=null&&t.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&WF(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const s=z2();if(!r&&s)return e;const o=Ui(),a=tn();return r?(a._scope.stop(),t!=null&&t.replace?location.replace(n):location.href=n,s?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):t!=null&&t.replace?o.replace(e):o.push(e)};function q2(e){return Yk(e.path||"",e.query||{})+(e.hash||"")}const cA="__nuxt_error",kh=()=>Q(tn().payload,"error"),Ca=e=>{const t=Ah(e);try{const n=tn(),i=kh();n.hooks.callHook("app:error",t),i.value=i.value||t}catch{throw t}return t},G2=async(e={})=>{const t=tn(),n=kh();t.callHook("app:error:cleared",e),e.redirect&&await Ui().replace(e.redirect),n.value=I2},K2=e=>!!e&&typeof e=="object"&&cA in e,Ah=e=>{const t=Tg(e);return Object.defineProperty(t,cA,{value:!0,configurable:!1,writable:!1}),t};var hS={};/**
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
 */const dA={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const Ae=function(e,t){if(!e)throw dl(t)},dl=function(e){return new Error("Firebase Database ("+dA.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
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
 */const fA=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},Y2=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=e[n++],o=e[n++],a=e[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[i++]=String.fromCharCode(55296+(l>>10)),t[i++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Ph={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const s=e[r],o=r+1<e.length,a=o?e[r+1]:0,l=r+2<e.length,u=l?e[r+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(f=64)),i.push(n[c],n[d],n[f],n[m])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(fA(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Y2(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const s=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const d=r<e.length?n[e.charAt(r)]:64;if(++r,s==null||a==null||u==null||d==null)throw new Q2;const f=s<<2|a>>4;if(i.push(f),u!==64){const m=a<<4&240|u>>2;if(i.push(m),d!==64){const g=u<<6&192|d;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Q2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hA=function(e){const t=fA(e);return Ph.encodeByteArray(t,!0)},If=function(e){return hA(e).replace(/\./g,"")},kf=function(e){try{return Ph.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function X2(e){return mA(void 0,e)}function mA(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!J2(n)||(e[n]=mA(e[n],t[n]));return e}function J2(e){return e!=="__proto__"}/**
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
 */function Z2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const eB=()=>Z2().__FIREBASE_DEFAULTS__,tB=()=>{if(typeof process>"u"||typeof hS>"u")return;const e=hS.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},nB=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&kf(e[1]);return t&&JSON.parse(t)},xh=()=>{try{return eB()||tB()||nB()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},iB=e=>{var t,n;return(n=(t=xh())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},vA=e=>{const t=iB(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},gA=()=>{var e;return(e=xh())===null||e===void 0?void 0:e.config},rB=e=>{var t;return(t=xh())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Ou{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
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
 */function pA(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[If(JSON.stringify(n)),If(JSON.stringify(o)),""].join(".")}/**
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
 */function Hn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Hn())}function sB(){var e;const t=(e=xh())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function oB(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function aB(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function yA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lB(){const e=Hn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function _A(){return dA.NODE_ADMIN===!0}function uB(){return!sB()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bA(){try{return typeof indexedDB=="object"}catch{return!1}}function cB(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;t(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const dB="FirebaseError";class mr extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=dB,Object.setPrototypeOf(this,mr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fl.prototype.create)}}class fl{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},r=`${this.service}/${t}`,s=this.errors[t],o=s?fB(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new mr(r,a,i)}}function fB(e,t){return e.replace(hB,(n,i)=>{const r=t[i];return r!=null?String(r):`<${i}?>`})}const hB=/\{\$([^}]+)}/g;/**
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
 */function Lu(e){return JSON.parse(e)}function Tn(e){return JSON.stringify(e)}/**
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
 */const wA=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=Lu(kf(s[0])||""),n=Lu(kf(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:i,signature:r}},mB=function(e){const t=wA(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},vB=function(e){const t=wA(e).claims;return typeof t=="object"&&t.admin===!0};/**
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
 */function qr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function qa(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function Eg(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Af(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function Pf(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const s=e[r],o=t[r];if(mS(s)&&mS(o)){if(!Pf(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function mS(e){return e!==null&&typeof e=="object"}/**
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
 */function hl(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(r=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}/**
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
 */class gB{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const i=this.W_;if(typeof t=="string")for(let d=0;d<16;d++)i[d]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)i[d]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let d=16;d<80;d++){const f=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(f<<1|f>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(r<<5|r>>>27)+u+l+c+i[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=f}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<n;)if(s[o]=t.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=t[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)t[i]=this.chain_[r]>>s&255,++i;return t}}function pB(e,t){const n=new yB(e,t);return n.subscribe.bind(n)}class yB{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let r;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");_B(t,["next","error","complete"])?r=t:r={next:t,error:n,complete:i},r.next===void 0&&(r.next=vv),r.error===void 0&&(r.error=vv),r.complete===void 0&&(r.complete=vv);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _B(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function vv(){}function bB(e,t){return`${e} failed: ${t} argument `}/**
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
 */const wB=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,Ae(i<e.length,"Surrogate pair missing trail surrogate.");const o=e.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},Rh=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};/**
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
 */function En(e){return e&&e._delegate?e._delegate:e}class Hi{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const no="[DEFAULT]";/**
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
 */class SB{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new Ou;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(CB(t))try{this.getOrInitializeService({instanceIdentifier:no})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(t=no){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=no){return this.instances.has(t)}getOptions(t=no){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(t,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:TB(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=no){return this.component?this.component.multipleInstances?t:no:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TB(e){return e===no?void 0:e}function CB(e){return e.instantiationMode==="EAGER"}/**
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
 */class EB{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new SB(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Je;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Je||(Je={}));const IB={debug:Je.DEBUG,verbose:Je.VERBOSE,info:Je.INFO,warn:Je.WARN,error:Je.ERROR,silent:Je.SILENT},kB=Je.INFO,AB={[Je.DEBUG]:"log",[Je.VERBOSE]:"log",[Je.INFO]:"info",[Je.WARN]:"warn",[Je.ERROR]:"error"},PB=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),r=AB[t];if(r)console[r](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Sc{constructor(t){this.name=t,this._logLevel=kB,this._logHandler=PB,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Je))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?IB[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Je.DEBUG,...t),this._logHandler(this,Je.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Je.VERBOSE,...t),this._logHandler(this,Je.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Je.INFO,...t),this._logHandler(this,Je.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Je.WARN,...t),this._logHandler(this,Je.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Je.ERROR,...t),this._logHandler(this,Je.ERROR,...t)}}const xB=(e,t)=>t.some(n=>e instanceof n);let vS,gS;function RB(){return vS||(vS=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VB(){return gS||(gS=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const SA=new WeakMap,Ig=new WeakMap,TA=new WeakMap,gv=new WeakMap,Ky=new WeakMap;function DB(e){const t=new Promise((n,i)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(_s(e.result)),r()},o=()=>{i(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&SA.set(n,e)}).catch(()=>{}),Ky.set(t,e),t}function MB(e){if(Ig.has(e))return;const t=new Promise((n,i)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Ig.set(e,t)}let kg={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ig.get(e);if(t==="objectStoreNames")return e.objectStoreNames||TA.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _s(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function NB(e){kg=e(kg)}function OB(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(pv(this),t,...n);return TA.set(i,t.sort?t.sort():[t]),_s(i)}:VB().includes(e)?function(...t){return e.apply(pv(this),t),_s(SA.get(this))}:function(...t){return _s(e.apply(pv(this),t))}}function LB(e){return typeof e=="function"?OB(e):(e instanceof IDBTransaction&&MB(e),xB(e,RB())?new Proxy(e,kg):e)}function _s(e){if(e instanceof IDBRequest)return DB(e);if(gv.has(e))return gv.get(e);const t=LB(e);return t!==e&&(gv.set(e,t),Ky.set(t,e)),t}const pv=e=>Ky.get(e);function FB(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=_s(o);return i&&o.addEventListener("upgradeneeded",l=>{i(_s(o.result),l.oldVersion,l.newVersion,_s(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const BB=["get","getKey","getAll","getAllKeys","count"],$B=["put","add","delete","clear"],yv=new Map;function pS(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(yv.get(t))return yv.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=$B.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||BB.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let u=l.store;return i&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&l.done]))[0]};return yv.set(t,s),s}NB(e=>({...e,get:(t,n,i)=>pS(t,n)||e.get(t,n,i),has:(t,n)=>!!pS(t,n)||e.has(t,n)}));/**
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
 */class UB{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(HB(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function HB(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ag="@firebase/app",yS="0.10.16";/**
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
 */const Lr=new Sc("@firebase/app"),jB="@firebase/app-compat",WB="@firebase/analytics-compat",zB="@firebase/analytics",qB="@firebase/app-check-compat",GB="@firebase/app-check",KB="@firebase/auth",YB="@firebase/auth-compat",QB="@firebase/database",XB="@firebase/data-connect",JB="@firebase/database-compat",ZB="@firebase/functions",e$="@firebase/functions-compat",t$="@firebase/installations",n$="@firebase/installations-compat",i$="@firebase/messaging",r$="@firebase/messaging-compat",s$="@firebase/performance",o$="@firebase/performance-compat",a$="@firebase/remote-config",l$="@firebase/remote-config-compat",u$="@firebase/storage",c$="@firebase/storage-compat",d$="@firebase/firestore",f$="@firebase/vertexai",h$="@firebase/firestore-compat",m$="firebase",v$="11.0.2";/**
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
 */const Pg="[DEFAULT]",g$={[Ag]:"fire-core",[jB]:"fire-core-compat",[zB]:"fire-analytics",[WB]:"fire-analytics-compat",[GB]:"fire-app-check",[qB]:"fire-app-check-compat",[KB]:"fire-auth",[YB]:"fire-auth-compat",[QB]:"fire-rtdb",[XB]:"fire-data-connect",[JB]:"fire-rtdb-compat",[ZB]:"fire-fn",[e$]:"fire-fn-compat",[t$]:"fire-iid",[n$]:"fire-iid-compat",[i$]:"fire-fcm",[r$]:"fire-fcm-compat",[s$]:"fire-perf",[o$]:"fire-perf-compat",[a$]:"fire-rc",[l$]:"fire-rc-compat",[u$]:"fire-gcs",[c$]:"fire-gcs-compat",[d$]:"fire-fst",[h$]:"fire-fst-compat",[f$]:"fire-vertex","fire-js":"fire-js",[m$]:"fire-js-all"};/**
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
 */const xf=new Map,p$=new Map,xg=new Map;function _S(e,t){try{e.container.addComponent(t)}catch(n){Lr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ur(e){const t=e.name;if(xg.has(t))return Lr.debug(`There were multiple attempts to register component ${t}.`),!1;xg.set(t,e);for(const n of xf.values())_S(n,e);for(const n of p$.values())_S(n,e);return!0}function Yy(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function ms(e){return e.settings!==void 0}/**
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
 */const y$={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bs=new fl("app","Firebase",y$);/**
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
 */class _${constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Hi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw bs.create("app-deleted",{appName:this._name})}}/**
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
 */const $s=v$;function CA(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i=Object.assign({name:Pg,automaticDataCollectionEnabled:!1},t),r=i.name;if(typeof r!="string"||!r)throw bs.create("bad-app-name",{appName:String(r)});if(n||(n=gA()),!n)throw bs.create("no-options");const s=xf.get(r);if(s){if(Pf(n,s.options)&&Pf(i,s.config))return s;throw bs.create("duplicate-app",{appName:r})}const o=new EB(r);for(const l of xg.values())o.addComponent(l);const a=new _$(n,i,o);return xf.set(r,a),a}function Qy(e=Pg){const t=xf.get(e);if(!t&&e===Pg&&gA())return CA();if(!t)throw bs.create("no-app",{appName:e});return t}function ci(e,t,n){var i;let r=(i=g$[e])!==null&&i!==void 0?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Lr.warn(a.join(" "));return}ur(new Hi(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const b$="firebase-heartbeat-database",w$=1,Fu="firebase-heartbeat-store";let _v=null;function EA(){return _v||(_v=FB(b$,w$,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Fu)}catch(n){console.warn(n)}}}}).catch(e=>{throw bs.create("idb-open",{originalErrorMessage:e.message})})),_v}async function S$(e){try{const n=(await EA()).transaction(Fu),i=await n.objectStore(Fu).get(IA(e));return await n.done,i}catch(t){if(t instanceof mr)Lr.warn(t.message);else{const n=bs.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Lr.warn(n.message)}}}async function bS(e,t){try{const i=(await EA()).transaction(Fu,"readwrite");await i.objectStore(Fu).put(t,IA(e)),await i.done}catch(n){if(n instanceof mr)Lr.warn(n.message);else{const i=bs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Lr.warn(i.message)}}}function IA(e){return`${e.name}!${e.options.appId}`}/**
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
 */const T$=1024,C$=30*24*60*60*1e3;class E${constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new k$(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=wS();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=C$}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Lr.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wS(),{heartbeatsToSend:i,unsentEntries:r}=I$(this._heartbeatsCache.heartbeats),s=If(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Lr.warn(n),""}}}function wS(){return new Date().toISOString().substring(0,10)}function I$(e,t=T$){const n=[];let i=e.slice();for(const r of e){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),SS(n)>t){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),SS(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class k${constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bA()?cB().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await S$(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return bS(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return bS(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function SS(e){return If(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function A$(e){ur(new Hi("platform-logger",t=>new UB(t),"PRIVATE")),ur(new Hi("heartbeat",t=>new E$(t),"PRIVATE")),ci(Ag,yS,e),ci(Ag,yS,"esm2017"),ci("fire-js","")}A$("");var TS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ho,kA;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(A,b){function _(){}_.prototype=b.prototype,A.D=b.prototype,A.prototype=new _,A.prototype.constructor=A,A.C=function(E,k,I){for(var R=Array(arguments.length-2),B=2;B<arguments.length;B++)R[B-2]=arguments[B];return b.prototype[k].apply(E,R)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(A,b,_){_||(_=0);var E=Array(16);if(typeof b=="string")for(var k=0;16>k;++k)E[k]=b.charCodeAt(_++)|b.charCodeAt(_++)<<8|b.charCodeAt(_++)<<16|b.charCodeAt(_++)<<24;else for(k=0;16>k;++k)E[k]=b[_++]|b[_++]<<8|b[_++]<<16|b[_++]<<24;b=A.g[0],_=A.g[1],k=A.g[2];var I=A.g[3],R=b+(I^_&(k^I))+E[0]+3614090360&4294967295;b=_+(R<<7&4294967295|R>>>25),R=I+(k^b&(_^k))+E[1]+3905402710&4294967295,I=b+(R<<12&4294967295|R>>>20),R=k+(_^I&(b^_))+E[2]+606105819&4294967295,k=I+(R<<17&4294967295|R>>>15),R=_+(b^k&(I^b))+E[3]+3250441966&4294967295,_=k+(R<<22&4294967295|R>>>10),R=b+(I^_&(k^I))+E[4]+4118548399&4294967295,b=_+(R<<7&4294967295|R>>>25),R=I+(k^b&(_^k))+E[5]+1200080426&4294967295,I=b+(R<<12&4294967295|R>>>20),R=k+(_^I&(b^_))+E[6]+2821735955&4294967295,k=I+(R<<17&4294967295|R>>>15),R=_+(b^k&(I^b))+E[7]+4249261313&4294967295,_=k+(R<<22&4294967295|R>>>10),R=b+(I^_&(k^I))+E[8]+1770035416&4294967295,b=_+(R<<7&4294967295|R>>>25),R=I+(k^b&(_^k))+E[9]+2336552879&4294967295,I=b+(R<<12&4294967295|R>>>20),R=k+(_^I&(b^_))+E[10]+4294925233&4294967295,k=I+(R<<17&4294967295|R>>>15),R=_+(b^k&(I^b))+E[11]+2304563134&4294967295,_=k+(R<<22&4294967295|R>>>10),R=b+(I^_&(k^I))+E[12]+1804603682&4294967295,b=_+(R<<7&4294967295|R>>>25),R=I+(k^b&(_^k))+E[13]+4254626195&4294967295,I=b+(R<<12&4294967295|R>>>20),R=k+(_^I&(b^_))+E[14]+2792965006&4294967295,k=I+(R<<17&4294967295|R>>>15),R=_+(b^k&(I^b))+E[15]+1236535329&4294967295,_=k+(R<<22&4294967295|R>>>10),R=b+(k^I&(_^k))+E[1]+4129170786&4294967295,b=_+(R<<5&4294967295|R>>>27),R=I+(_^k&(b^_))+E[6]+3225465664&4294967295,I=b+(R<<9&4294967295|R>>>23),R=k+(b^_&(I^b))+E[11]+643717713&4294967295,k=I+(R<<14&4294967295|R>>>18),R=_+(I^b&(k^I))+E[0]+3921069994&4294967295,_=k+(R<<20&4294967295|R>>>12),R=b+(k^I&(_^k))+E[5]+3593408605&4294967295,b=_+(R<<5&4294967295|R>>>27),R=I+(_^k&(b^_))+E[10]+38016083&4294967295,I=b+(R<<9&4294967295|R>>>23),R=k+(b^_&(I^b))+E[15]+3634488961&4294967295,k=I+(R<<14&4294967295|R>>>18),R=_+(I^b&(k^I))+E[4]+3889429448&4294967295,_=k+(R<<20&4294967295|R>>>12),R=b+(k^I&(_^k))+E[9]+568446438&4294967295,b=_+(R<<5&4294967295|R>>>27),R=I+(_^k&(b^_))+E[14]+3275163606&4294967295,I=b+(R<<9&4294967295|R>>>23),R=k+(b^_&(I^b))+E[3]+4107603335&4294967295,k=I+(R<<14&4294967295|R>>>18),R=_+(I^b&(k^I))+E[8]+1163531501&4294967295,_=k+(R<<20&4294967295|R>>>12),R=b+(k^I&(_^k))+E[13]+2850285829&4294967295,b=_+(R<<5&4294967295|R>>>27),R=I+(_^k&(b^_))+E[2]+4243563512&4294967295,I=b+(R<<9&4294967295|R>>>23),R=k+(b^_&(I^b))+E[7]+1735328473&4294967295,k=I+(R<<14&4294967295|R>>>18),R=_+(I^b&(k^I))+E[12]+2368359562&4294967295,_=k+(R<<20&4294967295|R>>>12),R=b+(_^k^I)+E[5]+4294588738&4294967295,b=_+(R<<4&4294967295|R>>>28),R=I+(b^_^k)+E[8]+2272392833&4294967295,I=b+(R<<11&4294967295|R>>>21),R=k+(I^b^_)+E[11]+1839030562&4294967295,k=I+(R<<16&4294967295|R>>>16),R=_+(k^I^b)+E[14]+4259657740&4294967295,_=k+(R<<23&4294967295|R>>>9),R=b+(_^k^I)+E[1]+2763975236&4294967295,b=_+(R<<4&4294967295|R>>>28),R=I+(b^_^k)+E[4]+1272893353&4294967295,I=b+(R<<11&4294967295|R>>>21),R=k+(I^b^_)+E[7]+4139469664&4294967295,k=I+(R<<16&4294967295|R>>>16),R=_+(k^I^b)+E[10]+3200236656&4294967295,_=k+(R<<23&4294967295|R>>>9),R=b+(_^k^I)+E[13]+681279174&4294967295,b=_+(R<<4&4294967295|R>>>28),R=I+(b^_^k)+E[0]+3936430074&4294967295,I=b+(R<<11&4294967295|R>>>21),R=k+(I^b^_)+E[3]+3572445317&4294967295,k=I+(R<<16&4294967295|R>>>16),R=_+(k^I^b)+E[6]+76029189&4294967295,_=k+(R<<23&4294967295|R>>>9),R=b+(_^k^I)+E[9]+3654602809&4294967295,b=_+(R<<4&4294967295|R>>>28),R=I+(b^_^k)+E[12]+3873151461&4294967295,I=b+(R<<11&4294967295|R>>>21),R=k+(I^b^_)+E[15]+530742520&4294967295,k=I+(R<<16&4294967295|R>>>16),R=_+(k^I^b)+E[2]+3299628645&4294967295,_=k+(R<<23&4294967295|R>>>9),R=b+(k^(_|~I))+E[0]+4096336452&4294967295,b=_+(R<<6&4294967295|R>>>26),R=I+(_^(b|~k))+E[7]+1126891415&4294967295,I=b+(R<<10&4294967295|R>>>22),R=k+(b^(I|~_))+E[14]+2878612391&4294967295,k=I+(R<<15&4294967295|R>>>17),R=_+(I^(k|~b))+E[5]+4237533241&4294967295,_=k+(R<<21&4294967295|R>>>11),R=b+(k^(_|~I))+E[12]+1700485571&4294967295,b=_+(R<<6&4294967295|R>>>26),R=I+(_^(b|~k))+E[3]+2399980690&4294967295,I=b+(R<<10&4294967295|R>>>22),R=k+(b^(I|~_))+E[10]+4293915773&4294967295,k=I+(R<<15&4294967295|R>>>17),R=_+(I^(k|~b))+E[1]+2240044497&4294967295,_=k+(R<<21&4294967295|R>>>11),R=b+(k^(_|~I))+E[8]+1873313359&4294967295,b=_+(R<<6&4294967295|R>>>26),R=I+(_^(b|~k))+E[15]+4264355552&4294967295,I=b+(R<<10&4294967295|R>>>22),R=k+(b^(I|~_))+E[6]+2734768916&4294967295,k=I+(R<<15&4294967295|R>>>17),R=_+(I^(k|~b))+E[13]+1309151649&4294967295,_=k+(R<<21&4294967295|R>>>11),R=b+(k^(_|~I))+E[4]+4149444226&4294967295,b=_+(R<<6&4294967295|R>>>26),R=I+(_^(b|~k))+E[11]+3174756917&4294967295,I=b+(R<<10&4294967295|R>>>22),R=k+(b^(I|~_))+E[2]+718787259&4294967295,k=I+(R<<15&4294967295|R>>>17),R=_+(I^(k|~b))+E[9]+3951481745&4294967295,A.g[0]=A.g[0]+b&4294967295,A.g[1]=A.g[1]+(k+(R<<21&4294967295|R>>>11))&4294967295,A.g[2]=A.g[2]+k&4294967295,A.g[3]=A.g[3]+I&4294967295}i.prototype.u=function(A,b){b===void 0&&(b=A.length);for(var _=b-this.blockSize,E=this.B,k=this.h,I=0;I<b;){if(k==0)for(;I<=_;)r(this,A,I),I+=this.blockSize;if(typeof A=="string"){for(;I<b;)if(E[k++]=A.charCodeAt(I++),k==this.blockSize){r(this,E),k=0;break}}else for(;I<b;)if(E[k++]=A[I++],k==this.blockSize){r(this,E),k=0;break}}this.h=k,this.o+=b},i.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var b=1;b<A.length-8;++b)A[b]=0;var _=8*this.o;for(b=A.length-8;b<A.length;++b)A[b]=_&255,_/=256;for(this.u(A),A=Array(16),b=_=0;4>b;++b)for(var E=0;32>E;E+=8)A[_++]=this.g[b]>>>E&255;return A};function s(A,b){var _=a;return Object.prototype.hasOwnProperty.call(_,A)?_[A]:_[A]=b(A)}function o(A,b){this.h=b;for(var _=[],E=!0,k=A.length-1;0<=k;k--){var I=A[k]|0;E&&I==b||(_[k]=I,E=!1)}this.g=_}var a={};function l(A){return-128<=A&&128>A?s(A,function(b){return new o([b|0],0>b?-1:0)}):new o([A|0],0>A?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return d;if(0>A)return p(u(-A));for(var b=[],_=1,E=0;A>=_;E++)b[E]=A/_|0,_*=4294967296;return new o(b,0)}function c(A,b){if(A.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(A.charAt(0)=="-")return p(c(A.substring(1),b));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(b,8)),E=d,k=0;k<A.length;k+=8){var I=Math.min(8,A.length-k),R=parseInt(A.substring(k,k+I),b);8>I?(I=u(Math.pow(b,I)),E=E.j(I).add(u(R))):(E=E.j(_),E=E.add(u(R)))}return E}var d=l(0),f=l(1),m=l(16777216);e=o.prototype,e.m=function(){if(y(this))return-p(this).m();for(var A=0,b=1,_=0;_<this.g.length;_++){var E=this.i(_);A+=(0<=E?E:4294967296+E)*b,b*=4294967296}return A},e.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(g(this))return"0";if(y(this))return"-"+p(this).toString(A);for(var b=u(Math.pow(A,6)),_=this,E="";;){var k=x(_,b).g;_=S(_,k.j(b));var I=((0<_.g.length?_.g[0]:_.h)>>>0).toString(A);if(_=k,g(_))return I+E;for(;6>I.length;)I="0"+I;E=I+E}},e.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function g(A){if(A.h!=0)return!1;for(var b=0;b<A.g.length;b++)if(A.g[b]!=0)return!1;return!0}function y(A){return A.h==-1}e.l=function(A){return A=S(this,A),y(A)?-1:g(A)?0:1};function p(A){for(var b=A.g.length,_=[],E=0;E<b;E++)_[E]=~A.g[E];return new o(_,~A.h).add(f)}e.abs=function(){return y(this)?p(this):this},e.add=function(A){for(var b=Math.max(this.g.length,A.g.length),_=[],E=0,k=0;k<=b;k++){var I=E+(this.i(k)&65535)+(A.i(k)&65535),R=(I>>>16)+(this.i(k)>>>16)+(A.i(k)>>>16);E=R>>>16,I&=65535,R&=65535,_[k]=R<<16|I}return new o(_,_[_.length-1]&-2147483648?-1:0)};function S(A,b){return A.add(p(b))}e.j=function(A){if(g(this)||g(A))return d;if(y(this))return y(A)?p(this).j(p(A)):p(p(this).j(A));if(y(A))return p(this.j(p(A)));if(0>this.l(m)&&0>A.l(m))return u(this.m()*A.m());for(var b=this.g.length+A.g.length,_=[],E=0;E<2*b;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var k=0;k<A.g.length;k++){var I=this.i(E)>>>16,R=this.i(E)&65535,B=A.i(k)>>>16,$=A.i(k)&65535;_[2*E+2*k]+=R*$,w(_,2*E+2*k),_[2*E+2*k+1]+=I*$,w(_,2*E+2*k+1),_[2*E+2*k+1]+=R*B,w(_,2*E+2*k+1),_[2*E+2*k+2]+=I*B,w(_,2*E+2*k+2)}for(E=0;E<b;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=b;E<2*b;E++)_[E]=0;return new o(_,0)};function w(A,b){for(;(A[b]&65535)!=A[b];)A[b+1]+=A[b]>>>16,A[b]&=65535,b++}function T(A,b){this.g=A,this.h=b}function x(A,b){if(g(b))throw Error("division by zero");if(g(A))return new T(d,d);if(y(A))return b=x(p(A),b),new T(p(b.g),p(b.h));if(y(b))return b=x(A,p(b)),new T(p(b.g),b.h);if(30<A.g.length){if(y(A)||y(b))throw Error("slowDivide_ only works with positive integers.");for(var _=f,E=b;0>=E.l(A);)_=V(_),E=V(E);var k=D(_,1),I=D(E,1);for(E=D(E,2),_=D(_,2);!g(E);){var R=I.add(E);0>=R.l(A)&&(k=k.add(_),I=R),E=D(E,1),_=D(_,1)}return b=S(A,k.j(b)),new T(k,b)}for(k=d;0<=A.l(b);){for(_=Math.max(1,Math.floor(A.m()/b.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),I=u(_),R=I.j(b);y(R)||0<R.l(A);)_-=E,I=u(_),R=I.j(b);g(I)&&(I=f),k=k.add(I),A=S(A,R)}return new T(k,A)}e.A=function(A){return x(this,A).h},e.and=function(A){for(var b=Math.max(this.g.length,A.g.length),_=[],E=0;E<b;E++)_[E]=this.i(E)&A.i(E);return new o(_,this.h&A.h)},e.or=function(A){for(var b=Math.max(this.g.length,A.g.length),_=[],E=0;E<b;E++)_[E]=this.i(E)|A.i(E);return new o(_,this.h|A.h)},e.xor=function(A){for(var b=Math.max(this.g.length,A.g.length),_=[],E=0;E<b;E++)_[E]=this.i(E)^A.i(E);return new o(_,this.h^A.h)};function V(A){for(var b=A.g.length+1,_=[],E=0;E<b;E++)_[E]=A.i(E)<<1|A.i(E-1)>>>31;return new o(_,A.h)}function D(A,b){var _=b>>5;b%=32;for(var E=A.g.length-_,k=[],I=0;I<E;I++)k[I]=0<b?A.i(I+_)>>>b|A.i(I+_+1)<<32-b:A.i(I+_);return new o(k,A.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,kA=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=c,ho=o}).apply(typeof TS<"u"?TS:typeof self<"u"?self:typeof window<"u"?window:{});var md=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var AA,ru,PA,$d,Rg,xA,RA,VA;(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,C,M){return h==Array.prototype||h==Object.prototype||(h[C]=M.value),h};function n(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof md=="object"&&md];for(var C=0;C<h.length;++C){var M=h[C];if(M&&M.Math==Math)return M}throw Error("Cannot find global object")}var i=n(this);function r(h,C){if(C)e:{var M=i;h=h.split(".");for(var L=0;L<h.length-1;L++){var Z=h[L];if(!(Z in M))break e;M=M[Z]}h=h[h.length-1],L=M[h],C=C(L),C!=L&&C!=null&&t(M,h,{configurable:!0,writable:!0,value:C})}}function s(h,C){h instanceof String&&(h+="");var M=0,L=!1,Z={next:function(){if(!L&&M<h.length){var ae=M++;return{value:C(ae,h[ae]),done:!1}}return L=!0,{done:!0,value:void 0}}};return Z[Symbol.iterator]=function(){return Z},Z}r("Array.prototype.values",function(h){return h||function(){return s(this,function(C,M){return M})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(h){var C=typeof h;return C=C!="object"?C:h?Array.isArray(h)?"array":C:"null",C=="array"||C=="object"&&typeof h.length=="number"}function u(h){var C=typeof h;return C=="object"&&h!=null||C=="function"}function c(h,C,M){return h.call.apply(h.bind,arguments)}function d(h,C,M){if(!h)throw Error();if(2<arguments.length){var L=Array.prototype.slice.call(arguments,2);return function(){var Z=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(Z,L),h.apply(C,Z)}}return function(){return h.apply(C,arguments)}}function f(h,C,M){return f=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?c:d,f.apply(null,arguments)}function m(h,C){var M=Array.prototype.slice.call(arguments,1);return function(){var L=M.slice();return L.push.apply(L,arguments),h.apply(this,L)}}function g(h,C){function M(){}M.prototype=C.prototype,h.aa=C.prototype,h.prototype=new M,h.prototype.constructor=h,h.Qb=function(L,Z,ae){for(var ke=Array(arguments.length-2),bt=2;bt<arguments.length;bt++)ke[bt-2]=arguments[bt];return C.prototype[Z].apply(L,ke)}}function y(h){const C=h.length;if(0<C){const M=Array(C);for(let L=0;L<C;L++)M[L]=h[L];return M}return[]}function p(h,C){for(let M=1;M<arguments.length;M++){const L=arguments[M];if(l(L)){const Z=h.length||0,ae=L.length||0;h.length=Z+ae;for(let ke=0;ke<ae;ke++)h[Z+ke]=L[ke]}else h.push(L)}}class S{constructor(C,M){this.i=C,this.j=M,this.h=0,this.g=null}get(){let C;return 0<this.h?(this.h--,C=this.g,this.g=C.next,C.next=null):C=this.i(),C}}function w(h){return/^[\s\xa0]*$/.test(h)}function T(){var h=a.navigator;return h&&(h=h.userAgent)?h:""}function x(h){return x[" "](h),h}x[" "]=function(){};var V=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function D(h,C,M){for(const L in h)C.call(M,h[L],L,h)}function A(h,C){for(const M in h)C.call(void 0,h[M],M,h)}function b(h){const C={};for(const M in h)C[M]=h[M];return C}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(h,C){let M,L;for(let Z=1;Z<arguments.length;Z++){L=arguments[Z];for(M in L)h[M]=L[M];for(let ae=0;ae<_.length;ae++)M=_[ae],Object.prototype.hasOwnProperty.call(L,M)&&(h[M]=L[M])}}function k(h){var C=1;h=h.split(":");const M=[];for(;0<C&&h.length;)M.push(h.shift()),C--;return h.length&&M.push(h.join(":")),M}function I(h){a.setTimeout(()=>{throw h},0)}function R(){var h=H;let C=null;return h.g&&(C=h.g,h.g=h.g.next,h.g||(h.h=null),C.next=null),C}class B{constructor(){this.h=this.g=null}add(C,M){const L=$.get();L.set(C,M),this.h?this.h.next=L:this.g=L,this.h=L}}var $=new S(()=>new U,h=>h.reset());class U{constructor(){this.next=this.g=this.h=null}set(C,M){this.h=C,this.g=M,this.next=null}reset(){this.next=this.g=this.h=null}}let q,F=!1,H=new B,j=()=>{const h=a.Promise.resolve(void 0);q=()=>{h.then(W)}};var W=()=>{for(var h;h=R();){try{h.h.call(h.g)}catch(M){I(M)}var C=$;C.j(h),100>C.h&&(C.h++,h.next=C.g,C.g=h)}F=!1};function Y(){this.s=this.s,this.C=this.C}Y.prototype.s=!1,Y.prototype.ma=function(){this.s||(this.s=!0,this.N())},Y.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ce(h,C){this.type=h,this.g=this.target=C,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var pe=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var h=!1,C=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const M=()=>{};a.addEventListener("test",M,C),a.removeEventListener("test",M,C)}catch{}return h}();function Ce(h,C){if(ce.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var M=this.type=h.type,L=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=C,C=h.relatedTarget){if(V){e:{try{x(C.nodeName);var Z=!0;break e}catch{}Z=!1}Z||(C=null)}}else M=="mouseover"?C=h.fromElement:M=="mouseout"&&(C=h.toElement);this.relatedTarget=C,L?(this.clientX=L.clientX!==void 0?L.clientX:L.pageX,this.clientY=L.clientY!==void 0?L.clientY:L.pageY,this.screenX=L.screenX||0,this.screenY=L.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:ie[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Ce.aa.h.call(this)}}g(Ce,ce);var ie={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var K="closure_listenable_"+(1e6*Math.random()|0),se=0;function de(h,C,M,L,Z){this.listener=h,this.proxy=null,this.src=C,this.type=M,this.capture=!!L,this.ha=Z,this.key=++se,this.da=this.fa=!1}function le(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function oe(h){this.src=h,this.g={},this.h=0}oe.prototype.add=function(h,C,M,L,Z){var ae=h.toString();h=this.g[ae],h||(h=this.g[ae]=[],this.h++);var ke=N(h,C,L,Z);return-1<ke?(C=h[ke],M||(C.fa=!1)):(C=new de(C,this.src,ae,!!L,Z),C.fa=M,h.push(C)),C};function Se(h,C){var M=C.type;if(M in h.g){var L=h.g[M],Z=Array.prototype.indexOf.call(L,C,void 0),ae;(ae=0<=Z)&&Array.prototype.splice.call(L,Z,1),ae&&(le(C),h.g[M].length==0&&(delete h.g[M],h.h--))}}function N(h,C,M,L){for(var Z=0;Z<h.length;++Z){var ae=h[Z];if(!ae.da&&ae.listener==C&&ae.capture==!!M&&ae.ha==L)return Z}return-1}var O="closure_lm_"+(1e6*Math.random()|0),G={};function ee(h,C,M,L,Z){if(Array.isArray(C)){for(var ae=0;ae<C.length;ae++)ee(h,C[ae],M,L,Z);return null}return M=De(M),h&&h[K]?h.K(C,M,u(L)?!!L.capture:!!L,Z):X(h,C,M,!1,L,Z)}function X(h,C,M,L,Z,ae){if(!C)throw Error("Invalid event type");var ke=u(Z)?!!Z.capture:!!Z,bt=Me(h);if(bt||(h[O]=bt=new oe(h)),M=bt.add(C,M,L,ke,ae),M.proxy)return M;if(L=ue(),M.proxy=L,L.src=h,L.listener=M,h.addEventListener)pe||(Z=ke),Z===void 0&&(Z=!1),h.addEventListener(C.toString(),L,Z);else if(h.attachEvent)h.attachEvent(we(C.toString()),L);else if(h.addListener&&h.removeListener)h.addListener(L);else throw Error("addEventListener and attachEvent are unavailable.");return M}function ue(){function h(M){return C.call(h.src,h.listener,M)}const C=he;return h}function _e(h,C,M,L,Z){if(Array.isArray(C))for(var ae=0;ae<C.length;ae++)_e(h,C[ae],M,L,Z);else L=u(L)?!!L.capture:!!L,M=De(M),h&&h[K]?(h=h.i,C=String(C).toString(),C in h.g&&(ae=h.g[C],M=N(ae,M,L,Z),-1<M&&(le(ae[M]),Array.prototype.splice.call(ae,M,1),ae.length==0&&(delete h.g[C],h.h--)))):h&&(h=Me(h))&&(C=h.g[C.toString()],h=-1,C&&(h=N(C,M,L,Z)),(M=-1<h?C[h]:null)&&fe(M))}function fe(h){if(typeof h!="number"&&h&&!h.da){var C=h.src;if(C&&C[K])Se(C.i,h);else{var M=h.type,L=h.proxy;C.removeEventListener?C.removeEventListener(M,L,h.capture):C.detachEvent?C.detachEvent(we(M),L):C.addListener&&C.removeListener&&C.removeListener(L),(M=Me(C))?(Se(M,h),M.h==0&&(M.src=null,C[O]=null)):le(h)}}}function we(h){return h in G?G[h]:G[h]="on"+h}function he(h,C){if(h.da)h=!0;else{C=new Ce(C,this);var M=h.listener,L=h.ha||h.src;h.fa&&fe(h),h=M.call(L,C)}return h}function Me(h){return h=h[O],h instanceof oe?h:null}var Ie="__closure_events_fn_"+(1e9*Math.random()>>>0);function De(h){return typeof h=="function"?h:(h[Ie]||(h[Ie]=function(C){return h.handleEvent(C)}),h[Ie])}function Re(){Y.call(this),this.i=new oe(this),this.M=this,this.F=null}g(Re,Y),Re.prototype[K]=!0,Re.prototype.removeEventListener=function(h,C,M,L){_e(this,h,C,M,L)};function $e(h,C){var M,L=h.F;if(L)for(M=[];L;L=L.F)M.push(L);if(h=h.M,L=C.type||C,typeof C=="string")C=new ce(C,h);else if(C instanceof ce)C.target=C.target||h;else{var Z=C;C=new ce(L,h),E(C,Z)}if(Z=!0,M)for(var ae=M.length-1;0<=ae;ae--){var ke=C.g=M[ae];Z=ft(ke,L,!0,C)&&Z}if(ke=C.g=h,Z=ft(ke,L,!0,C)&&Z,Z=ft(ke,L,!1,C)&&Z,M)for(ae=0;ae<M.length;ae++)ke=C.g=M[ae],Z=ft(ke,L,!1,C)&&Z}Re.prototype.N=function(){if(Re.aa.N.call(this),this.i){var h=this.i,C;for(C in h.g){for(var M=h.g[C],L=0;L<M.length;L++)le(M[L]);delete h.g[C],h.h--}}this.F=null},Re.prototype.K=function(h,C,M,L){return this.i.add(String(h),C,!1,M,L)},Re.prototype.L=function(h,C,M,L){return this.i.add(String(h),C,!0,M,L)};function ft(h,C,M,L){if(C=h.i.g[String(C)],!C)return!0;C=C.concat();for(var Z=!0,ae=0;ae<C.length;++ae){var ke=C[ae];if(ke&&!ke.da&&ke.capture==M){var bt=ke.listener,Sn=ke.ha||ke.src;ke.fa&&Se(h.i,ke),Z=bt.call(Sn,L)!==!1&&Z}}return Z&&!L.defaultPrevented}function ut(h,C,M){if(typeof h=="function")M&&(h=f(h,M));else if(h&&typeof h.handleEvent=="function")h=f(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(C)?-1:a.setTimeout(h,C||0)}function An(h){h.g=ut(()=>{h.g=null,h.i&&(h.i=!1,An(h))},h.l);const C=h.h;h.h=null,h.m.apply(null,C)}class hn extends Y{constructor(C,M){super(),this.m=C,this.l=M,this.h=null,this.i=!1,this.g=null}j(C){this.h=arguments,this.g?this.i=!0:An(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wn(h){Y.call(this),this.h=h,this.g={}}g(wn,Y);var Pn=[];function Qr(h){D(h.g,function(C,M){this.g.hasOwnProperty(M)&&fe(C)},h),h.g={}}wn.prototype.N=function(){wn.aa.N.call(this),Qr(this)},wn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ia=a.JSON.stringify,zn=a.JSON.parse,_i=class{stringify(h){return a.JSON.stringify(h,void 0)}parse(h){return a.JSON.parse(h,void 0)}};function ra(){}ra.prototype.h=null;function kw(h){return h.h||(h.h=h.i())}function Aw(){}var Dl={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Lm(){ce.call(this,"d")}g(Lm,ce);function Fm(){ce.call(this,"c")}g(Fm,ce);var zs={},Pw=null;function jc(){return Pw=Pw||new Re}zs.La="serverreachability";function xw(h){ce.call(this,zs.La,h)}g(xw,ce);function Ml(h){const C=jc();$e(C,new xw(C))}zs.STAT_EVENT="statevent";function Rw(h,C){ce.call(this,zs.STAT_EVENT,h),this.stat=C}g(Rw,ce);function qn(h){const C=jc();$e(C,new Rw(C,h))}zs.Ma="timingevent";function Vw(h,C){ce.call(this,zs.Ma,h),this.size=C}g(Vw,ce);function Nl(h,C){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){h()},C)}function Ol(){this.g=!0}Ol.prototype.xa=function(){this.g=!1};function CN(h,C,M,L,Z,ae){h.info(function(){if(h.g)if(ae)for(var ke="",bt=ae.split("&"),Sn=0;Sn<bt.length;Sn++){var ct=bt[Sn].split("=");if(1<ct.length){var xn=ct[0];ct=ct[1];var Rn=xn.split("_");ke=2<=Rn.length&&Rn[1]=="type"?ke+(xn+"="+ct+"&"):ke+(xn+"=redacted&")}}else ke=null;else ke=ae;return"XMLHTTP REQ ("+L+") [attempt "+Z+"]: "+C+`
`+M+`
`+ke})}function EN(h,C,M,L,Z,ae,ke){h.info(function(){return"XMLHTTP RESP ("+L+") [ attempt "+Z+"]: "+C+`
`+M+`
`+ae+" "+ke})}function sa(h,C,M,L){h.info(function(){return"XMLHTTP TEXT ("+C+"): "+kN(h,M)+(L?" "+L:"")})}function IN(h,C){h.info(function(){return"TIMEOUT: "+C})}Ol.prototype.info=function(){};function kN(h,C){if(!h.g)return C;if(!C)return null;try{var M=JSON.parse(C);if(M){for(h=0;h<M.length;h++)if(Array.isArray(M[h])){var L=M[h];if(!(2>L.length)){var Z=L[1];if(Array.isArray(Z)&&!(1>Z.length)){var ae=Z[0];if(ae!="noop"&&ae!="stop"&&ae!="close")for(var ke=1;ke<Z.length;ke++)Z[ke]=""}}}}return ia(M)}catch{return C}}var Wc={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Dw={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Bm;function zc(){}g(zc,ra),zc.prototype.g=function(){return new XMLHttpRequest},zc.prototype.i=function(){return{}},Bm=new zc;function Xr(h,C,M,L){this.j=h,this.i=C,this.l=M,this.R=L||1,this.U=new wn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Mw}function Mw(){this.i=null,this.g="",this.h=!1}var Nw={},$m={};function Um(h,C,M){h.L=1,h.v=Yc(wr(C)),h.m=M,h.P=!0,Ow(h,null)}function Ow(h,C){h.F=Date.now(),qc(h),h.A=wr(h.v);var M=h.A,L=h.R;Array.isArray(L)||(L=[String(L)]),Qw(M.i,"t",L),h.C=0,M=h.j.J,h.h=new Mw,h.g=m0(h.j,M?C:null,!h.m),0<h.O&&(h.M=new hn(f(h.Y,h,h.g),h.O)),C=h.U,M=h.g,L=h.ca;var Z="readystatechange";Array.isArray(Z)||(Z&&(Pn[0]=Z.toString()),Z=Pn);for(var ae=0;ae<Z.length;ae++){var ke=ee(M,Z[ae],L||C.handleEvent,!1,C.h||C);if(!ke)break;C.g[ke.key]=ke}C=h.H?b(h.H):{},h.m?(h.u||(h.u="POST"),C["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,C)):(h.u="GET",h.g.ea(h.A,h.u,null,C)),Ml(),CN(h.i,h.u,h.A,h.l,h.R,h.m)}Xr.prototype.ca=function(h){h=h.target;const C=this.M;C&&Sr(h)==3?C.j():this.Y(h)},Xr.prototype.Y=function(h){try{if(h==this.g)e:{const Rn=Sr(this.g);var C=this.g.Ba();const la=this.g.Z();if(!(3>Rn)&&(Rn!=3||this.g&&(this.h.h||this.g.oa()||i0(this.g)))){this.J||Rn!=4||C==7||(C==8||0>=la?Ml(3):Ml(2)),Hm(this);var M=this.g.Z();this.X=M;t:if(Lw(this)){var L=i0(this.g);h="";var Z=L.length,ae=Sr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qs(this),Ll(this);var ke="";break t}this.h.i=new a.TextDecoder}for(C=0;C<Z;C++)this.h.h=!0,h+=this.h.i.decode(L[C],{stream:!(ae&&C==Z-1)});L.length=0,this.h.g+=h,this.C=0,ke=this.h.g}else ke=this.g.oa();if(this.o=M==200,EN(this.i,this.u,this.A,this.l,this.R,Rn,M),this.o){if(this.T&&!this.K){t:{if(this.g){var bt,Sn=this.g;if((bt=Sn.g?Sn.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(bt)){var ct=bt;break t}}ct=null}if(M=ct)sa(this.i,this.l,M,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jm(this,M);else{this.o=!1,this.s=3,qn(12),qs(this),Ll(this);break e}}if(this.P){M=!0;let Ri;for(;!this.J&&this.C<ke.length;)if(Ri=AN(this,ke),Ri==$m){Rn==4&&(this.s=4,qn(14),M=!1),sa(this.i,this.l,null,"[Incomplete Response]");break}else if(Ri==Nw){this.s=4,qn(15),sa(this.i,this.l,ke,"[Invalid Chunk]"),M=!1;break}else sa(this.i,this.l,Ri,null),jm(this,Ri);if(Lw(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rn!=4||ke.length!=0||this.h.h||(this.s=1,qn(16),M=!1),this.o=this.o&&M,!M)sa(this.i,this.l,ke,"[Invalid Chunked Response]"),qs(this),Ll(this);else if(0<ke.length&&!this.W){this.W=!0;var xn=this.j;xn.g==this&&xn.ba&&!xn.M&&(xn.j.info("Great, no buffering proxy detected. Bytes received: "+ke.length),Ym(xn),xn.M=!0,qn(11))}}else sa(this.i,this.l,ke,null),jm(this,ke);Rn==4&&qs(this),this.o&&!this.J&&(Rn==4?c0(this.j,this):(this.o=!1,qc(this)))}else zN(this.g),M==400&&0<ke.indexOf("Unknown SID")?(this.s=3,qn(12)):(this.s=0,qn(13)),qs(this),Ll(this)}}}catch{}finally{}};function Lw(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function AN(h,C){var M=h.C,L=C.indexOf(`
`,M);return L==-1?$m:(M=Number(C.substring(M,L)),isNaN(M)?Nw:(L+=1,L+M>C.length?$m:(C=C.slice(L,L+M),h.C=L+M,C)))}Xr.prototype.cancel=function(){this.J=!0,qs(this)};function qc(h){h.S=Date.now()+h.I,Fw(h,h.I)}function Fw(h,C){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Nl(f(h.ba,h),C)}function Hm(h){h.B&&(a.clearTimeout(h.B),h.B=null)}Xr.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(IN(this.i,this.A),this.L!=2&&(Ml(),qn(17)),qs(this),this.s=2,Ll(this)):Fw(this,this.S-h)};function Ll(h){h.j.G==0||h.J||c0(h.j,h)}function qs(h){Hm(h);var C=h.M;C&&typeof C.ma=="function"&&C.ma(),h.M=null,Qr(h.U),h.g&&(C=h.g,h.g=null,C.abort(),C.ma())}function jm(h,C){try{var M=h.j;if(M.G!=0&&(M.g==h||Wm(M.h,h))){if(!h.K&&Wm(M.h,h)&&M.G==3){try{var L=M.Da.g.parse(C)}catch{L=null}if(Array.isArray(L)&&L.length==3){var Z=L;if(Z[0]==0){e:if(!M.u){if(M.g)if(M.g.F+3e3<h.F)td(M),Zc(M);else break e;Km(M),qn(18)}}else M.za=Z[1],0<M.za-M.T&&37500>Z[2]&&M.F&&M.v==0&&!M.C&&(M.C=Nl(f(M.Za,M),6e3));if(1>=Uw(M.h)&&M.ca){try{M.ca()}catch{}M.ca=void 0}}else Ks(M,11)}else if((h.K||M.g==h)&&td(M),!w(C))for(Z=M.Da.g.parse(C),C=0;C<Z.length;C++){let ct=Z[C];if(M.T=ct[0],ct=ct[1],M.G==2)if(ct[0]=="c"){M.K=ct[1],M.ia=ct[2];const xn=ct[3];xn!=null&&(M.la=xn,M.j.info("VER="+M.la));const Rn=ct[4];Rn!=null&&(M.Aa=Rn,M.j.info("SVER="+M.Aa));const la=ct[5];la!=null&&typeof la=="number"&&0<la&&(L=1.5*la,M.L=L,M.j.info("backChannelRequestTimeoutMs_="+L)),L=M;const Ri=h.g;if(Ri){const id=Ri.g?Ri.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(id){var ae=L.h;ae.g||id.indexOf("spdy")==-1&&id.indexOf("quic")==-1&&id.indexOf("h2")==-1||(ae.j=ae.l,ae.g=new Set,ae.h&&(zm(ae,ae.h),ae.h=null))}if(L.D){const Qm=Ri.g?Ri.g.getResponseHeader("X-HTTP-Session-Id"):null;Qm&&(L.ya=Qm,kt(L.I,L.D,Qm))}}M.G=3,M.l&&M.l.ua(),M.ba&&(M.R=Date.now()-h.F,M.j.info("Handshake RTT: "+M.R+"ms")),L=M;var ke=h;if(L.qa=h0(L,L.J?L.ia:null,L.W),ke.K){Hw(L.h,ke);var bt=ke,Sn=L.L;Sn&&(bt.I=Sn),bt.B&&(Hm(bt),qc(bt)),L.g=ke}else l0(L);0<M.i.length&&ed(M)}else ct[0]!="stop"&&ct[0]!="close"||Ks(M,7);else M.G==3&&(ct[0]=="stop"||ct[0]=="close"?ct[0]=="stop"?Ks(M,7):Gm(M):ct[0]!="noop"&&M.l&&M.l.ta(ct),M.v=0)}}Ml(4)}catch{}}var PN=class{constructor(h,C){this.g=h,this.map=C}};function Bw(h){this.l=h||10,a.PerformanceNavigationTiming?(h=a.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $w(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Uw(h){return h.h?1:h.g?h.g.size:0}function Wm(h,C){return h.h?h.h==C:h.g?h.g.has(C):!1}function zm(h,C){h.g?h.g.add(C):h.h=C}function Hw(h,C){h.h&&h.h==C?h.h=null:h.g&&h.g.has(C)&&h.g.delete(C)}Bw.prototype.cancel=function(){if(this.i=jw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function jw(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let C=h.i;for(const M of h.g.values())C=C.concat(M.D);return C}return y(h.i)}function xN(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(l(h)){for(var C=[],M=h.length,L=0;L<M;L++)C.push(h[L]);return C}C=[],M=0;for(L in h)C[M++]=h[L];return C}function RN(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(l(h)||typeof h=="string"){var C=[];h=h.length;for(var M=0;M<h;M++)C.push(M);return C}C=[],M=0;for(const L in h)C[M++]=L;return C}}}function Ww(h,C){if(h.forEach&&typeof h.forEach=="function")h.forEach(C,void 0);else if(l(h)||typeof h=="string")Array.prototype.forEach.call(h,C,void 0);else for(var M=RN(h),L=xN(h),Z=L.length,ae=0;ae<Z;ae++)C.call(void 0,L[ae],M&&M[ae],h)}var zw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function VN(h,C){if(h){h=h.split("&");for(var M=0;M<h.length;M++){var L=h[M].indexOf("="),Z=null;if(0<=L){var ae=h[M].substring(0,L);Z=h[M].substring(L+1)}else ae=h[M];C(ae,Z?decodeURIComponent(Z.replace(/\+/g," ")):"")}}}function Gs(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Gs){this.h=h.h,Gc(this,h.j),this.o=h.o,this.g=h.g,Kc(this,h.s),this.l=h.l;var C=h.i,M=new $l;M.i=C.i,C.g&&(M.g=new Map(C.g),M.h=C.h),qw(this,M),this.m=h.m}else h&&(C=String(h).match(zw))?(this.h=!1,Gc(this,C[1]||"",!0),this.o=Fl(C[2]||""),this.g=Fl(C[3]||"",!0),Kc(this,C[4]),this.l=Fl(C[5]||"",!0),qw(this,C[6]||"",!0),this.m=Fl(C[7]||"")):(this.h=!1,this.i=new $l(null,this.h))}Gs.prototype.toString=function(){var h=[],C=this.j;C&&h.push(Bl(C,Gw,!0),":");var M=this.g;return(M||C=="file")&&(h.push("//"),(C=this.o)&&h.push(Bl(C,Gw,!0),"@"),h.push(encodeURIComponent(String(M)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),M=this.s,M!=null&&h.push(":",String(M))),(M=this.l)&&(this.g&&M.charAt(0)!="/"&&h.push("/"),h.push(Bl(M,M.charAt(0)=="/"?NN:MN,!0))),(M=this.i.toString())&&h.push("?",M),(M=this.m)&&h.push("#",Bl(M,LN)),h.join("")};function wr(h){return new Gs(h)}function Gc(h,C,M){h.j=M?Fl(C,!0):C,h.j&&(h.j=h.j.replace(/:$/,""))}function Kc(h,C){if(C){if(C=Number(C),isNaN(C)||0>C)throw Error("Bad port number "+C);h.s=C}else h.s=null}function qw(h,C,M){C instanceof $l?(h.i=C,FN(h.i,h.h)):(M||(C=Bl(C,ON)),h.i=new $l(C,h.h))}function kt(h,C,M){h.i.set(C,M)}function Yc(h){return kt(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Fl(h,C){return h?C?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Bl(h,C,M){return typeof h=="string"?(h=encodeURI(h).replace(C,DN),M&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function DN(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Gw=/[#\/\?@]/g,MN=/[#\?:]/g,NN=/[#\?]/g,ON=/[#\?@]/g,LN=/#/g;function $l(h,C){this.h=this.g=null,this.i=h||null,this.j=!!C}function Jr(h){h.g||(h.g=new Map,h.h=0,h.i&&VN(h.i,function(C,M){h.add(decodeURIComponent(C.replace(/\+/g," ")),M)}))}e=$l.prototype,e.add=function(h,C){Jr(this),this.i=null,h=oa(this,h);var M=this.g.get(h);return M||this.g.set(h,M=[]),M.push(C),this.h+=1,this};function Kw(h,C){Jr(h),C=oa(h,C),h.g.has(C)&&(h.i=null,h.h-=h.g.get(C).length,h.g.delete(C))}function Yw(h,C){return Jr(h),C=oa(h,C),h.g.has(C)}e.forEach=function(h,C){Jr(this),this.g.forEach(function(M,L){M.forEach(function(Z){h.call(C,Z,L,this)},this)},this)},e.na=function(){Jr(this);const h=Array.from(this.g.values()),C=Array.from(this.g.keys()),M=[];for(let L=0;L<C.length;L++){const Z=h[L];for(let ae=0;ae<Z.length;ae++)M.push(C[L])}return M},e.V=function(h){Jr(this);let C=[];if(typeof h=="string")Yw(this,h)&&(C=C.concat(this.g.get(oa(this,h))));else{h=Array.from(this.g.values());for(let M=0;M<h.length;M++)C=C.concat(h[M])}return C},e.set=function(h,C){return Jr(this),this.i=null,h=oa(this,h),Yw(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[C]),this.h+=1,this},e.get=function(h,C){return h?(h=this.V(h),0<h.length?String(h[0]):C):C};function Qw(h,C,M){Kw(h,C),0<M.length&&(h.i=null,h.g.set(oa(h,C),y(M)),h.h+=M.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],C=Array.from(this.g.keys());for(var M=0;M<C.length;M++){var L=C[M];const ae=encodeURIComponent(String(L)),ke=this.V(L);for(L=0;L<ke.length;L++){var Z=ae;ke[L]!==""&&(Z+="="+encodeURIComponent(String(ke[L]))),h.push(Z)}}return this.i=h.join("&")};function oa(h,C){return C=String(C),h.j&&(C=C.toLowerCase()),C}function FN(h,C){C&&!h.j&&(Jr(h),h.i=null,h.g.forEach(function(M,L){var Z=L.toLowerCase();L!=Z&&(Kw(this,L),Qw(this,Z,M))},h)),h.j=C}function BN(h,C){const M=new Ol;if(a.Image){const L=new Image;L.onload=m(Zr,M,"TestLoadImage: loaded",!0,C,L),L.onerror=m(Zr,M,"TestLoadImage: error",!1,C,L),L.onabort=m(Zr,M,"TestLoadImage: abort",!1,C,L),L.ontimeout=m(Zr,M,"TestLoadImage: timeout",!1,C,L),a.setTimeout(function(){L.ontimeout&&L.ontimeout()},1e4),L.src=h}else C(!1)}function $N(h,C){const M=new Ol,L=new AbortController,Z=setTimeout(()=>{L.abort(),Zr(M,"TestPingServer: timeout",!1,C)},1e4);fetch(h,{signal:L.signal}).then(ae=>{clearTimeout(Z),ae.ok?Zr(M,"TestPingServer: ok",!0,C):Zr(M,"TestPingServer: server error",!1,C)}).catch(()=>{clearTimeout(Z),Zr(M,"TestPingServer: error",!1,C)})}function Zr(h,C,M,L,Z){try{Z&&(Z.onload=null,Z.onerror=null,Z.onabort=null,Z.ontimeout=null),L(M)}catch{}}function UN(){this.g=new _i}function HN(h,C,M){const L=M||"";try{Ww(h,function(Z,ae){let ke=Z;u(Z)&&(ke=ia(Z)),C.push(L+ae+"="+encodeURIComponent(ke))})}catch(Z){throw C.push(L+"type="+encodeURIComponent("_badmap")),Z}}function Qc(h){this.l=h.Ub||null,this.j=h.eb||!1}g(Qc,ra),Qc.prototype.g=function(){return new Xc(this.l,this.j)},Qc.prototype.i=function(h){return function(){return h}}({});function Xc(h,C){Re.call(this),this.D=h,this.o=C,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}g(Xc,Re),e=Xc.prototype,e.open=function(h,C){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=C,this.readyState=1,Hl(this)},e.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const C={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(C.body=h),(this.D||a).fetch(new Request(this.A,C)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ul(this)),this.readyState=0},e.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Hl(this)),this.g&&(this.readyState=3,Hl(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xw(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xw(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}e.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var C=h.value?h.value:new Uint8Array(0);(C=this.v.decode(C,{stream:!h.done}))&&(this.response=this.responseText+=C)}h.done?Ul(this):Hl(this),this.readyState==3&&Xw(this)}},e.Ra=function(h){this.g&&(this.response=this.responseText=h,Ul(this))},e.Qa=function(h){this.g&&(this.response=h,Ul(this))},e.ga=function(){this.g&&Ul(this)};function Ul(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Hl(h)}e.setRequestHeader=function(h,C){this.u.append(h,C)},e.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],C=this.h.entries();for(var M=C.next();!M.done;)M=M.value,h.push(M[0]+": "+M[1]),M=C.next();return h.join(`\r
`)};function Hl(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Xc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Jw(h){let C="";return D(h,function(M,L){C+=L,C+=":",C+=M,C+=`\r
`}),C}function qm(h,C,M){e:{for(L in M){var L=!1;break e}L=!0}L||(M=Jw(M),typeof h=="string"?M!=null&&encodeURIComponent(String(M)):kt(h,C,M))}function Bt(h){Re.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}g(Bt,Re);var jN=/^https?$/i,WN=["POST","PUT"];e=Bt.prototype,e.Ha=function(h){this.J=h},e.ea=function(h,C,M,L){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);C=C?C.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Bm.g(),this.v=this.o?kw(this.o):kw(Bm),this.g.onreadystatechange=f(this.Ea,this);try{this.B=!0,this.g.open(C,String(h),!0),this.B=!1}catch(ae){Zw(this,ae);return}if(h=M||"",M=new Map(this.headers),L)if(Object.getPrototypeOf(L)===Object.prototype)for(var Z in L)M.set(Z,L[Z]);else if(typeof L.keys=="function"&&typeof L.get=="function")for(const ae of L.keys())M.set(ae,L.get(ae));else throw Error("Unknown input type for opt_headers: "+String(L));L=Array.from(M.keys()).find(ae=>ae.toLowerCase()=="content-type"),Z=a.FormData&&h instanceof a.FormData,!(0<=Array.prototype.indexOf.call(WN,C,void 0))||L||Z||M.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[ae,ke]of M)this.g.setRequestHeader(ae,ke);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{n0(this),this.u=!0,this.g.send(h),this.u=!1}catch(ae){Zw(this,ae)}};function Zw(h,C){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=C,h.m=5,e0(h),Jc(h)}function e0(h){h.A||(h.A=!0,$e(h,"complete"),$e(h,"error"))}e.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,$e(this,"complete"),$e(this,"abort"),Jc(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Jc(this,!0)),Bt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?t0(this):this.bb())},e.bb=function(){t0(this)};function t0(h){if(h.h&&typeof o<"u"&&(!h.v[1]||Sr(h)!=4||h.Z()!=2)){if(h.u&&Sr(h)==4)ut(h.Ea,0,h);else if($e(h,"readystatechange"),Sr(h)==4){h.h=!1;try{const ke=h.Z();e:switch(ke){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var C=!0;break e;default:C=!1}var M;if(!(M=C)){var L;if(L=ke===0){var Z=String(h.D).match(zw)[1]||null;!Z&&a.self&&a.self.location&&(Z=a.self.location.protocol.slice(0,-1)),L=!jN.test(Z?Z.toLowerCase():"")}M=L}if(M)$e(h,"complete"),$e(h,"success");else{h.m=6;try{var ae=2<Sr(h)?h.g.statusText:""}catch{ae=""}h.l=ae+" ["+h.Z()+"]",e0(h)}}finally{Jc(h)}}}}function Jc(h,C){if(h.g){n0(h);const M=h.g,L=h.v[0]?()=>{}:null;h.g=null,h.v=null,C||$e(h,"ready");try{M.onreadystatechange=L}catch{}}}function n0(h){h.I&&(a.clearTimeout(h.I),h.I=null)}e.isActive=function(){return!!this.g};function Sr(h){return h.g?h.g.readyState:0}e.Z=function(){try{return 2<Sr(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(h){if(this.g){var C=this.g.responseText;return h&&C.indexOf(h)==0&&(C=C.substring(h.length)),zn(C)}};function i0(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function zN(h){const C={};h=(h.g&&2<=Sr(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let L=0;L<h.length;L++){if(w(h[L]))continue;var M=k(h[L]);const Z=M[0];if(M=M[1],typeof M!="string")continue;M=M.trim();const ae=C[Z]||[];C[Z]=ae,ae.push(M)}A(C,function(L){return L.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function jl(h,C,M){return M&&M.internalChannelParams&&M.internalChannelParams[h]||C}function r0(h){this.Aa=0,this.i=[],this.j=new Ol,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=jl("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=jl("baseRetryDelayMs",5e3,h),this.cb=jl("retryDelaySeedMs",1e4,h),this.Wa=jl("forwardChannelMaxRetries",2,h),this.wa=jl("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Bw(h&&h.concurrentRequestLimit),this.Da=new UN,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=r0.prototype,e.la=8,e.G=1,e.connect=function(h,C,M,L){qn(0),this.W=h,this.H=C||{},M&&L!==void 0&&(this.H.OSID=M,this.H.OAID=L),this.F=this.X,this.I=h0(this,null,this.W),ed(this)};function Gm(h){if(s0(h),h.G==3){var C=h.U++,M=wr(h.I);if(kt(M,"SID",h.K),kt(M,"RID",C),kt(M,"TYPE","terminate"),Wl(h,M),C=new Xr(h,h.j,C),C.L=2,C.v=Yc(wr(M)),M=!1,a.navigator&&a.navigator.sendBeacon)try{M=a.navigator.sendBeacon(C.v.toString(),"")}catch{}!M&&a.Image&&(new Image().src=C.v,M=!0),M||(C.g=m0(C.j,null),C.g.ea(C.v)),C.F=Date.now(),qc(C)}f0(h)}function Zc(h){h.g&&(Ym(h),h.g.cancel(),h.g=null)}function s0(h){Zc(h),h.u&&(a.clearTimeout(h.u),h.u=null),td(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&a.clearTimeout(h.s),h.s=null)}function ed(h){if(!$w(h.h)&&!h.s){h.s=!0;var C=h.Ga;q||j(),F||(q(),F=!0),H.add(C,h),h.B=0}}function qN(h,C){return Uw(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=C.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Nl(f(h.Ga,h,C),d0(h,h.B)),h.B++,!0)}e.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const Z=new Xr(this,this.j,h);let ae=this.o;if(this.S&&(ae?(ae=b(ae),E(ae,this.S)):ae=this.S),this.m!==null||this.O||(Z.H=ae,ae=null),this.P)e:{for(var C=0,M=0;M<this.i.length;M++){t:{var L=this.i[M];if("__data__"in L.map&&(L=L.map.__data__,typeof L=="string")){L=L.length;break t}L=void 0}if(L===void 0)break;if(C+=L,4096<C){C=M;break e}if(C===4096||M===this.i.length-1){C=M+1;break e}}C=1e3}else C=1e3;C=a0(this,Z,C),M=wr(this.I),kt(M,"RID",h),kt(M,"CVER",22),this.D&&kt(M,"X-HTTP-Session-Id",this.D),Wl(this,M),ae&&(this.O?C="headers="+encodeURIComponent(String(Jw(ae)))+"&"+C:this.m&&qm(M,this.m,ae)),zm(this.h,Z),this.Ua&&kt(M,"TYPE","init"),this.P?(kt(M,"$req",C),kt(M,"SID","null"),Z.T=!0,Um(Z,M,null)):Um(Z,M,C),this.G=2}}else this.G==3&&(h?o0(this,h):this.i.length==0||$w(this.h)||o0(this))};function o0(h,C){var M;C?M=C.l:M=h.U++;const L=wr(h.I);kt(L,"SID",h.K),kt(L,"RID",M),kt(L,"AID",h.T),Wl(h,L),h.m&&h.o&&qm(L,h.m,h.o),M=new Xr(h,h.j,M,h.B+1),h.m===null&&(M.H=h.o),C&&(h.i=C.D.concat(h.i)),C=a0(h,M,1e3),M.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),zm(h.h,M),Um(M,L,C)}function Wl(h,C){h.H&&D(h.H,function(M,L){kt(C,L,M)}),h.l&&Ww({},function(M,L){kt(C,L,M)})}function a0(h,C,M){M=Math.min(h.i.length,M);var L=h.l?f(h.l.Na,h.l,h):null;e:{var Z=h.i;let ae=-1;for(;;){const ke=["count="+M];ae==-1?0<M?(ae=Z[0].g,ke.push("ofs="+ae)):ae=0:ke.push("ofs="+ae);let bt=!0;for(let Sn=0;Sn<M;Sn++){let ct=Z[Sn].g;const xn=Z[Sn].map;if(ct-=ae,0>ct)ae=Math.max(0,Z[Sn].g-100),bt=!1;else try{HN(xn,ke,"req"+ct+"_")}catch{L&&L(xn)}}if(bt){L=ke.join("&");break e}}}return h=h.i.splice(0,M),C.D=h,L}function l0(h){if(!h.g&&!h.u){h.Y=1;var C=h.Fa;q||j(),F||(q(),F=!0),H.add(C,h),h.v=0}}function Km(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Nl(f(h.Fa,h),d0(h,h.v)),h.v++,!0)}e.Fa=function(){if(this.u=null,u0(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Nl(f(this.ab,this),h)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,qn(10),Zc(this),u0(this))};function Ym(h){h.A!=null&&(a.clearTimeout(h.A),h.A=null)}function u0(h){h.g=new Xr(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var C=wr(h.qa);kt(C,"RID","rpc"),kt(C,"SID",h.K),kt(C,"AID",h.T),kt(C,"CI",h.F?"0":"1"),!h.F&&h.ja&&kt(C,"TO",h.ja),kt(C,"TYPE","xmlhttp"),Wl(h,C),h.m&&h.o&&qm(C,h.m,h.o),h.L&&(h.g.I=h.L);var M=h.g;h=h.ia,M.L=1,M.v=Yc(wr(C)),M.m=null,M.P=!0,Ow(M,h)}e.Za=function(){this.C!=null&&(this.C=null,Zc(this),Km(this),qn(19))};function td(h){h.C!=null&&(a.clearTimeout(h.C),h.C=null)}function c0(h,C){var M=null;if(h.g==C){td(h),Ym(h),h.g=null;var L=2}else if(Wm(h.h,C))M=C.D,Hw(h.h,C),L=1;else return;if(h.G!=0){if(C.o)if(L==1){M=C.m?C.m.length:0,C=Date.now()-C.F;var Z=h.B;L=jc(),$e(L,new Vw(L,M)),ed(h)}else l0(h);else if(Z=C.s,Z==3||Z==0&&0<C.X||!(L==1&&qN(h,C)||L==2&&Km(h)))switch(M&&0<M.length&&(C=h.h,C.i=C.i.concat(M)),Z){case 1:Ks(h,5);break;case 4:Ks(h,10);break;case 3:Ks(h,6);break;default:Ks(h,2)}}}function d0(h,C){let M=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(M*=2),M*C}function Ks(h,C){if(h.j.info("Error code "+C),C==2){var M=f(h.fb,h),L=h.Xa;const Z=!L;L=new Gs(L||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Gc(L,"https"),Yc(L),Z?BN(L.toString(),M):$N(L.toString(),M)}else qn(2);h.G=0,h.l&&h.l.sa(C),f0(h),s0(h)}e.fb=function(h){h?(this.j.info("Successfully pinged google.com"),qn(2)):(this.j.info("Failed to ping google.com"),qn(1))};function f0(h){if(h.G=0,h.ka=[],h.l){const C=jw(h.h);(C.length!=0||h.i.length!=0)&&(p(h.ka,C),p(h.ka,h.i),h.h.i.length=0,y(h.i),h.i.length=0),h.l.ra()}}function h0(h,C,M){var L=M instanceof Gs?wr(M):new Gs(M);if(L.g!="")C&&(L.g=C+"."+L.g),Kc(L,L.s);else{var Z=a.location;L=Z.protocol,C=C?C+"."+Z.hostname:Z.hostname,Z=+Z.port;var ae=new Gs(null);L&&Gc(ae,L),C&&(ae.g=C),Z&&Kc(ae,Z),M&&(ae.l=M),L=ae}return M=h.D,C=h.ya,M&&C&&kt(L,M,C),kt(L,"VER",h.la),Wl(h,L),L}function m0(h,C,M){if(C&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return C=h.Ca&&!h.pa?new Bt(new Qc({eb:M})):new Bt(h.pa),C.Ha(h.J),C}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function v0(){}e=v0.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function nd(){}nd.prototype.g=function(h,C){return new si(h,C)};function si(h,C){Re.call(this),this.g=new r0(C),this.l=h,this.h=C&&C.messageUrlParams||null,h=C&&C.messageHeaders||null,C&&C.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=C&&C.initMessageHeaders||null,C&&C.messageContentType&&(h?h["X-WebChannel-Content-Type"]=C.messageContentType:h={"X-WebChannel-Content-Type":C.messageContentType}),C&&C.va&&(h?h["X-WebChannel-Client-Profile"]=C.va:h={"X-WebChannel-Client-Profile":C.va}),this.g.S=h,(h=C&&C.Sb)&&!w(h)&&(this.g.m=h),this.v=C&&C.supportsCrossDomainXhr||!1,this.u=C&&C.sendRawJson||!1,(C=C&&C.httpSessionIdParam)&&!w(C)&&(this.g.D=C,h=this.h,h!==null&&C in h&&(h=this.h,C in h&&delete h[C])),this.j=new aa(this)}g(si,Re),si.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},si.prototype.close=function(){Gm(this.g)},si.prototype.o=function(h){var C=this.g;if(typeof h=="string"){var M={};M.__data__=h,h=M}else this.u&&(M={},M.__data__=ia(h),h=M);C.i.push(new PN(C.Ya++,h)),C.G==3&&ed(C)},si.prototype.N=function(){this.g.l=null,delete this.j,Gm(this.g),delete this.g,si.aa.N.call(this)};function g0(h){Lm.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var C=h.__sm__;if(C){e:{for(const M in C){h=M;break e}h=void 0}(this.i=h)&&(h=this.i,C=C!==null&&h in C?C[h]:void 0),this.data=C}else this.data=h}g(g0,Lm);function p0(){Fm.call(this),this.status=1}g(p0,Fm);function aa(h){this.g=h}g(aa,v0),aa.prototype.ua=function(){$e(this.g,"a")},aa.prototype.ta=function(h){$e(this.g,new g0(h))},aa.prototype.sa=function(h){$e(this.g,new p0)},aa.prototype.ra=function(){$e(this.g,"b")},nd.prototype.createWebChannel=nd.prototype.g,si.prototype.send=si.prototype.o,si.prototype.open=si.prototype.m,si.prototype.close=si.prototype.close,VA=function(){return new nd},RA=function(){return jc()},xA=zs,Rg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Wc.NO_ERROR=0,Wc.TIMEOUT=8,Wc.HTTP_ERROR=6,$d=Wc,Dw.COMPLETE="complete",PA=Dw,Aw.EventType=Dl,Dl.OPEN="a",Dl.CLOSE="b",Dl.ERROR="c",Dl.MESSAGE="d",Re.prototype.listen=Re.prototype.K,ru=Aw,Bt.prototype.listenOnce=Bt.prototype.L,Bt.prototype.getLastError=Bt.prototype.Ka,Bt.prototype.getLastErrorCode=Bt.prototype.Ba,Bt.prototype.getStatus=Bt.prototype.Z,Bt.prototype.getResponseJson=Bt.prototype.Oa,Bt.prototype.getResponseText=Bt.prototype.oa,Bt.prototype.send=Bt.prototype.ea,Bt.prototype.setWithCredentials=Bt.prototype.Ha,AA=Bt}).apply(typeof md<"u"?md:typeof self<"u"?self:typeof window<"u"?window:{});const CS="@firebase/firestore";/**
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
 */class Dn{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Dn.UNAUTHENTICATED=new Dn(null),Dn.GOOGLE_CREDENTIALS=new Dn("google-credentials-uid"),Dn.FIRST_PARTY=new Dn("first-party-uid"),Dn.MOCK_USER=new Dn("mock-user");/**
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
 */let ml="11.0.2";/**
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
 */const wo=new Sc("@firebase/firestore");function ya(){return wo.logLevel}function xe(e,...t){if(wo.logLevel<=Je.DEBUG){const n=t.map(Xy);wo.debug(`Firestore (${ml}): ${e}`,...n)}}function Fr(e,...t){if(wo.logLevel<=Je.ERROR){const n=t.map(Xy);wo.error(`Firestore (${ml}): ${e}`,...n)}}function Ga(e,...t){if(wo.logLevel<=Je.WARN){const n=t.map(Xy);wo.warn(`Firestore (${ml}): ${e}`,...n)}}function Xy(e){if(typeof e=="string")return e;try{/**
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
 */function ze(e="Unexpected state"){const t=`FIRESTORE (${ml}) INTERNAL ASSERTION FAILED: `+e;throw Fr(t),new Error(t)}function pt(e,t){e||ze()}function Ke(e,t){return e}/**
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
 */const ve={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ve extends mr{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ws{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class DA{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class P${getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Dn.UNAUTHENTICATED))}shutdown(){}}class x${constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class R${constructor(t){this.t=t,this.currentUser=Dn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){pt(this.o===void 0);let i=this.i;const r=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let s=new ws;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ws,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{xe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(xe("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ws)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(xe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(pt(typeof i.accessToken=="string"),new DA(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return pt(t===null||typeof t=="string"),new Dn(t)}}class V${constructor(t,n,i){this.l=t,this.h=n,this.P=i,this.type="FirstParty",this.user=Dn.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class D${constructor(t,n,i){this.l=t,this.h=n,this.P=i}getToken(){return Promise.resolve(new V$(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Dn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class M${constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class N${constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){pt(this.o===void 0);const i=s=>{s.error!=null&&xe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,xe("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>i(s))};const r=s=>{xe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):xe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(pt(typeof n.token=="string"),this.R=n.token,new M$(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function O$(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class MA{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const r=O$(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=t.charAt(r[s]%t.length))}return i}}function tt(e,t){return e<t?-1:e>t?1:0}function Ka(e,t,n){return e.length===t.length&&e.every((i,r)=>n(i,t[r]))}/**
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
 */class en{static now(){return en.fromMillis(Date.now())}static fromDate(t){return en.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*n));return new en(n,i)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new Ve(ve.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Ve(ve.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new Ve(ve.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Ve(ve.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?tt(this.nanoseconds,t.nanoseconds):tt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class qe{static fromTimestamp(t){return new qe(t)}static min(){return new qe(new en(0,0))}static max(){return new qe(new en(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Bu{constructor(t,n,i){n===void 0?n=0:n>t.length&&ze(),i===void 0?i=t.length-n:i>t.length-n&&ze(),this.segments=t,this.offset=n,this.len=i}get length(){return this.len}isEqual(t){return Bu.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Bu?t.forEach(i=>{n.push(i)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,i=this.limit();n<i;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const i=Math.min(t.length,n.length);for(let r=0;r<i;r++){const s=t.get(r),o=n.get(r);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class xt extends Bu{construct(t,n,i){return new xt(t,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const i of t){if(i.indexOf("//")>=0)throw new Ve(ve.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new xt(n)}static emptyPath(){return new xt([])}}const L$=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Cn extends Bu{construct(t,n,i){return new Cn(t,n,i)}static isValidIdentifier(t){return L$.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Cn.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Cn(["__name__"])}static fromServerFormat(t){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new Ve(ve.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new Ve(ve.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Ve(ve.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new Ve(ve.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Cn(n)}static emptyPath(){return new Cn([])}}/**
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
 */class Le{constructor(t){this.path=t}static fromPath(t){return new Le(xt.fromString(t))}static fromName(t){return new Le(xt.fromString(t).popFirst(5))}static empty(){return new Le(xt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&xt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return xt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Le(new xt(t.slice()))}}function F$(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,r=qe.fromTimestamp(i===1e9?new en(n+1,0):new en(n,i));return new As(r,Le.empty(),t)}function B$(e){return new As(e.readTime,e.key,-1)}class As{constructor(t,n,i){this.readTime=t,this.documentKey=n,this.largestBatchId=i}static min(){return new As(qe.min(),Le.empty(),-1)}static max(){return new As(qe.max(),Le.empty(),-1)}}function $$(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=Le.comparator(e.documentKey,t.documentKey),n!==0?n:tt(e.largestBatchId,t.largestBatchId))}/**
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
 */const U$="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class H${constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function vl(e){if(e.code!==ve.FAILED_PRECONDITION||e.message!==U$)throw e;xe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class me{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&ze(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new me((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof me?n:me.resolve(n)}catch(n){return me.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):me.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):me.reject(n)}static resolve(t){return new me((n,i)=>{n(t)})}static reject(t){return new me((n,i)=>{i(t)})}static waitFor(t){return new me((n,i)=>{let r=0,s=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&n()},l=>i(l))}),o=!0,s===r&&n()})}static or(t){let n=me.resolve(!1);for(const i of t)n=n.next(r=>r?me.resolve(r):i());return n}static forEach(t,n){const i=[];return t.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}static mapArray(t,n){return new me((i,r)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(t[u]).next(c=>{o[u]=c,++a,a===s&&i(o)},c=>r(c))}})}static doWhile(t,n){return new me((i,r)=>{const s=()=>{t()===!0?n().next(()=>{s()},r):i()};s()})}}function j$(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function gl(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Vh{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=i=>this.ie(i),this.se=i=>n.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Vh.oe=-1;function Dh(e){return e==null}function Rf(e){return e===0&&1/e==-1/0}function W$(e){return typeof e=="number"&&Number.isInteger(e)&&!Rf(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function z$(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=ES(t)),t=q$(e.get(n),t);return ES(t)}function q$(e,t){let n=t;const i=e.length;for(let r=0;r<i;r++){const s=e.charAt(r);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function ES(e){return e+""}/**
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
 */function IS(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function $o(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function NA(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */let nn=class Vg{constructor(t,n){this.comparator=t,this.root=n||Ss.EMPTY}insert(t,n){return new Vg(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Ss.BLACK,null,null))}remove(t){return new Vg(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ss.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(t){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(t,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,i)=>(t(n,i),!1))}toString(){const t=[];return this.inorderTraversal((n,i)=>(t.push(`${n}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new vd(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new vd(this.root,t,this.comparator,!1)}getReverseIterator(){return new vd(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new vd(this.root,t,this.comparator,!0)}},vd=class{constructor(t,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?i(t.key,n):1,n&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}},Ss=class Er{constructor(t,n,i,r,s){this.key=t,this.value=n,this.color=i??Er.RED,this.left=r??Er.EMPTY,this.right=s??Er.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,i,r,s){return new Er(t??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let r=this;const s=i(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Er.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let i,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return Er.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Er.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Er.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ze();const t=this.left.check();if(t!==this.right.check())throw ze();return t+(this.isRed()?0:1)}};Ss.EMPTY=null,Ss.RED=!0,Ss.BLACK=!1;Ss.EMPTY=new class{constructor(){this.size=0}get key(){throw ze()}get value(){throw ze()}get color(){throw ze()}get left(){throw ze()}get right(){throw ze()}copy(t,n,i,r,s){return this}insert(t,n,i){return new Ss(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class cn{constructor(t){this.comparator=t,this.data=new nn(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,i)=>(t(n),!1))}forEachInRange(t,n){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new kS(this.data.getIterator())}getIteratorFrom(t){return new kS(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(i=>{n=n.add(i)}),n}isEqual(t){if(!(t instanceof cn)||this.size!==t.size)return!1;const n=this.data.getIterator(),i=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new cn(this.comparator);return n.data=t,n}}class kS{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ni{constructor(t){this.fields=t,t.sort(Cn.comparator)}static empty(){return new Ni([])}unionWith(t){let n=new cn(Cn.comparator);for(const i of this.fields)n=n.add(i);for(const i of t)n=n.add(i);return new Ni(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ka(this.fields,t.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class OA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class In{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new OA("Invalid base64 string: "+s):s}}(t);return new In(n)}static fromUint8Array(t){const n=function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s}(t);return new In(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return tt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}In.EMPTY_BYTE_STRING=new In("");const G$=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ps(e){if(pt(!!e),typeof e=="string"){let t=0;const n=G$.exec(e);if(pt(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:zt(e.seconds),nanos:zt(e.nanos)}}function zt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function xs(e){return typeof e=="string"?In.fromBase64String(e):In.fromUint8Array(e)}/**
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
 */function Jy(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Mh(e){const t=e.mapValue.fields.__previous_value__;return Jy(t)?Mh(t):t}function $u(e){const t=Ps(e.mapValue.fields.__local_write_time__.timestampValue);return new en(t.seconds,t.nanos)}/**
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
 */class K${constructor(t,n,i,r,s,o,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Uu{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Uu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Uu&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const gd={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Rs(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Jy(e)?4:Q$(e)?9007199254740991:Y$(e)?10:11:ze()}function cr(e,t){if(e===t)return!0;const n=Rs(e);if(n!==Rs(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return $u(e).isEqual($u(t));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const o=Ps(r.timestampValue),a=Ps(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(r,s){return xs(r.bytesValue).isEqual(xs(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(r,s){return zt(r.geoPointValue.latitude)===zt(s.geoPointValue.latitude)&&zt(r.geoPointValue.longitude)===zt(s.geoPointValue.longitude)}(e,t);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return zt(r.integerValue)===zt(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const o=zt(r.doubleValue),a=zt(s.doubleValue);return o===a?Rf(o)===Rf(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Ka(e.arrayValue.values||[],t.arrayValue.values||[],cr);case 10:case 11:return function(r,s){const o=r.mapValue.fields||{},a=s.mapValue.fields||{};if(IS(o)!==IS(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!cr(o[l],a[l])))return!1;return!0}(e,t);default:return ze()}}function Hu(e,t){return(e.values||[]).find(n=>cr(n,t))!==void 0}function Ya(e,t){if(e===t)return 0;const n=Rs(e),i=Rs(t);if(n!==i)return tt(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return tt(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=zt(s.integerValue||s.doubleValue),l=zt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return AS(e.timestampValue,t.timestampValue);case 4:return AS($u(e),$u(t));case 5:return tt(e.stringValue,t.stringValue);case 6:return function(s,o){const a=xs(s),l=xs(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=tt(a[u],l[u]);if(c!==0)return c}return tt(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=tt(zt(s.latitude),zt(o.latitude));return a!==0?a:tt(zt(s.longitude),zt(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return PS(e.arrayValue,t.arrayValue);case 10:return function(s,o){var a,l,u,c;const d=s.fields||{},f=o.fields||{},m=(a=d.value)===null||a===void 0?void 0:a.arrayValue,g=(l=f.value)===null||l===void 0?void 0:l.arrayValue,y=tt(((u=m==null?void 0:m.values)===null||u===void 0?void 0:u.length)||0,((c=g==null?void 0:g.values)===null||c===void 0?void 0:c.length)||0);return y!==0?y:PS(m,g)}(e.mapValue,t.mapValue);case 11:return function(s,o){if(s===gd.mapValue&&o===gd.mapValue)return 0;if(s===gd.mapValue)return 1;if(o===gd.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let d=0;d<l.length&&d<c.length;++d){const f=tt(l[d],c[d]);if(f!==0)return f;const m=Ya(a[l[d]],u[c[d]]);if(m!==0)return m}return tt(l.length,c.length)}(e.mapValue,t.mapValue);default:throw ze()}}function AS(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return tt(e,t);const n=Ps(e),i=Ps(t),r=tt(n.seconds,i.seconds);return r!==0?r:tt(n.nanos,i.nanos)}function PS(e,t){const n=e.values||[],i=t.values||[];for(let r=0;r<n.length&&r<i.length;++r){const s=Ya(n[r],i[r]);if(s)return s}return tt(n.length,i.length)}function Qa(e){return Dg(e)}function Dg(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const i=Ps(n);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return xs(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return Le.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let i="[",r=!0;for(const s of n.values||[])r?r=!1:i+=",",i+=Dg(s);return i+"]"}(e.arrayValue):"mapValue"in e?function(n){const i=Object.keys(n.fields||{}).sort();let r="{",s=!0;for(const o of i)s?s=!1:r+=",",r+=`${o}:${Dg(n.fields[o])}`;return r+"}"}(e.mapValue):ze()}function Ud(e){switch(Rs(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Mh(e);return t?16+Ud(t):16;case 5:return 2*e.stringValue.length;case 6:return xs(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((r,s)=>r+Ud(s),0)}(e.arrayValue);case 10:case 11:return function(i){let r=0;return $o(i.fields,(s,o)=>{r+=s.length+Ud(o)}),r}(e.mapValue);default:throw ze()}}function xS(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Mg(e){return!!e&&"integerValue"in e}function Zy(e){return!!e&&"arrayValue"in e}function RS(e){return!!e&&"nullValue"in e}function VS(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Hd(e){return!!e&&"mapValue"in e}function Y$(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function gu(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return $o(e.mapValue.fields,(n,i)=>t.mapValue.fields[n]=gu(i)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=gu(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Q$(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ti{constructor(t){this.value=t}static empty(){return new Ti({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let i=0;i<t.length-1;++i)if(n=(n.mapValue.fields||{})[t.get(i)],!Hd(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=gu(n)}setAll(t){let n=Cn.emptyPath(),i={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=gu(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(t){const n=this.field(t.popLast());Hd(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return cr(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<t.length;++i){let r=n.mapValue.fields[t.get(i)];Hd(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,i){$o(n,(r,s)=>t[r]=s);for(const r of i)delete t[r]}clone(){return new Ti(gu(this.value))}}function LA(e){const t=[];return $o(e.fields,(n,i)=>{const r=new Cn([n]);if(Hd(i)){const s=LA(i.mapValue).fields;if(s.length===0)t.push(r);else for(const o of s)t.push(r.child(o))}else t.push(r)}),new Ni(t)}/**
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
 */class On{constructor(t,n,i,r,s,o,a){this.key=t,this.documentType=n,this.version=i,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new On(t,0,qe.min(),qe.min(),qe.min(),Ti.empty(),0)}static newFoundDocument(t,n,i,r){return new On(t,1,n,qe.min(),i,r,0)}static newNoDocument(t,n){return new On(t,2,n,qe.min(),qe.min(),Ti.empty(),0)}static newUnknownDocument(t,n){return new On(t,3,n,qe.min(),qe.min(),Ti.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(qe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ti.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ti.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=qe.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof On&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new On(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Vf{constructor(t,n){this.position=t,this.inclusive=n}}function DS(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){const s=t[r],o=e.position[r];if(s.field.isKeyField()?i=Le.comparator(Le.fromName(o.referenceValue),n.key):i=Ya(o,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function MS(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!cr(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class ju{constructor(t,n="asc"){this.field=t,this.dir=n}}function X$(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class FA{}class Zt extends FA{constructor(t,n,i){super(),this.field=t,this.op=n,this.value=i}static create(t,n,i){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,i):new Z$(t,n,i):n==="array-contains"?new nU(t,i):n==="in"?new iU(t,i):n==="not-in"?new rU(t,i):n==="array-contains-any"?new sU(t,i):new Zt(t,n,i)}static createKeyFieldInFilter(t,n,i){return n==="in"?new eU(t,i):new tU(t,i)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ya(n,this.value)):n!==null&&Rs(this.value)===Rs(n)&&this.matchesComparison(Ya(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return ze()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ji extends FA{constructor(t,n){super(),this.filters=t,this.op=n,this.ae=null}static create(t,n){return new ji(t,n)}matches(t){return BA(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function BA(e){return e.op==="and"}function $A(e){return J$(e)&&BA(e)}function J$(e){for(const t of e.filters)if(t instanceof ji)return!1;return!0}function Ng(e){if(e instanceof Zt)return e.field.canonicalString()+e.op.toString()+Qa(e.value);if($A(e))return e.filters.map(t=>Ng(t)).join(",");{const t=e.filters.map(n=>Ng(n)).join(",");return`${e.op}(${t})`}}function UA(e,t){return e instanceof Zt?function(i,r){return r instanceof Zt&&i.op===r.op&&i.field.isEqual(r.field)&&cr(i.value,r.value)}(e,t):e instanceof ji?function(i,r){return r instanceof ji&&i.op===r.op&&i.filters.length===r.filters.length?i.filters.reduce((s,o,a)=>s&&UA(o,r.filters[a]),!0):!1}(e,t):void ze()}function HA(e){return e instanceof Zt?function(n){return`${n.field.canonicalString()} ${n.op} ${Qa(n.value)}`}(e):e instanceof ji?function(n){return n.op.toString()+" {"+n.getFilters().map(HA).join(" ,")+"}"}(e):"Filter"}class Z$ extends Zt{constructor(t,n,i){super(t,n,i),this.key=Le.fromName(i.referenceValue)}matches(t){const n=Le.comparator(t.key,this.key);return this.matchesComparison(n)}}class eU extends Zt{constructor(t,n){super(t,"in",n),this.keys=jA("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class tU extends Zt{constructor(t,n){super(t,"not-in",n),this.keys=jA("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function jA(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>Le.fromName(i.referenceValue))}class nU extends Zt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Zy(n)&&Hu(n.arrayValue,this.value)}}class iU extends Zt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Hu(this.value.arrayValue,n)}}class rU extends Zt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Hu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Hu(this.value.arrayValue,n)}}class sU extends Zt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Zy(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Hu(this.value.arrayValue,i))}}/**
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
 */class oU{constructor(t,n=null,i=[],r=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function NS(e,t=null,n=[],i=[],r=null,s=null,o=null){return new oU(e,t,n,i,r,s,o)}function e_(e){const t=Ke(e);if(t.ue===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(i=>Ng(i)).join(","),n+="|ob:",n+=t.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Dh(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>Qa(i)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>Qa(i)).join(",")),t.ue=n}return t.ue}function t_(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!X$(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!UA(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!MS(e.startAt,t.startAt)&&MS(e.endAt,t.endAt)}function Og(e){return Le.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class pl{constructor(t,n=null,i=[],r=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function aU(e,t,n,i,r,s,o,a){return new pl(e,t,n,i,r,s,o,a)}function WA(e){return new pl(e)}function OS(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function zA(e){return e.collectionGroup!==null}function pu(e){const t=Ke(e);if(t.ce===null){t.ce=[];const n=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),n.add(s.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new cn(Cn.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.ce.push(new ju(s,i))}),n.has(Cn.keyField().canonicalString())||t.ce.push(new ju(Cn.keyField(),i))}return t.ce}function rr(e){const t=Ke(e);return t.le||(t.le=lU(t,pu(e))),t.le}function lU(e,t){if(e.limitType==="F")return NS(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new ju(r.field,s)});const n=e.endAt?new Vf(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Vf(e.startAt.position,e.startAt.inclusive):null;return NS(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}}function Lg(e,t){const n=e.filters.concat([t]);return new pl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Df(e,t,n){return new pl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Nh(e,t){return t_(rr(e),rr(t))&&e.limitType===t.limitType}function qA(e){return`${e_(rr(e))}|lt:${e.limitType}`}function _a(e){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(r=>HA(r)).join(", ")}]`),Dh(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(r=>Qa(r)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(r=>Qa(r)).join(",")),`Target(${i})`}(rr(e))}; limitType=${e.limitType})`}function Oh(e,t){return t.isFoundDocument()&&function(i,r){const s=r.key.path;return i.collectionGroup!==null?r.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(s):Le.isDocumentKey(i.path)?i.path.isEqual(s):i.path.isImmediateParentOf(s)}(e,t)&&function(i,r){for(const s of pu(i))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(e,t)&&function(i,r){for(const s of i.filters)if(!s.matches(r))return!1;return!0}(e,t)&&function(i,r){return!(i.startAt&&!function(o,a,l){const u=DS(o,a,l);return o.inclusive?u<=0:u<0}(i.startAt,pu(i),r)||i.endAt&&!function(o,a,l){const u=DS(o,a,l);return o.inclusive?u>=0:u>0}(i.endAt,pu(i),r))}(e,t)}function uU(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function GA(e){return(t,n)=>{let i=!1;for(const r of pu(e)){const s=cU(r,t,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function cU(e,t,n){const i=e.field.isKeyField()?Le.comparator(t.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Ya(l,u):ze()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return ze()}}/**
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
 */class Uo{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const i=this.mapKeyFn(t),r=this.inner[i];if(r===void 0)return this.inner[i]=[[t,n]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return i.length===1?delete this.inner[n]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(t){$o(this.inner,(n,i)=>{for(const[r,s]of i)t(r,s)})}isEmpty(){return NA(this.inner)}size(){return this.innerSize}}/**
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
 */const dU=new nn(Le.comparator);function Br(){return dU}const KA=new nn(Le.comparator);function su(...e){let t=KA;for(const n of e)t=t.insert(n.key,n);return t}function YA(e){let t=KA;return e.forEach((n,i)=>t=t.insert(n,i.overlayedDocument)),t}function ro(){return yu()}function QA(){return yu()}function yu(){return new Uo(e=>e.toString(),(e,t)=>e.isEqual(t))}const fU=new nn(Le.comparator),hU=new cn(Le.comparator);function Ze(...e){let t=hU;for(const n of e)t=t.add(n);return t}const mU=new cn(tt);function vU(){return mU}/**
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
 */function n_(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rf(t)?"-0":t}}function XA(e){return{integerValue:""+e}}function gU(e,t){return W$(t)?XA(t):n_(e,t)}/**
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
 */class Lh{constructor(){this._=void 0}}function pU(e,t,n){return e instanceof Mf?function(r,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&Jy(s)&&(s=Mh(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof Wu?ZA(e,t):e instanceof zu?eP(e,t):function(r,s){const o=JA(r,s),a=LS(o)+LS(r.Pe);return Mg(o)&&Mg(r.Pe)?XA(a):n_(r.serializer,a)}(e,t)}function yU(e,t,n){return e instanceof Wu?ZA(e,t):e instanceof zu?eP(e,t):n}function JA(e,t){return e instanceof Nf?function(i){return Mg(i)||function(s){return!!s&&"doubleValue"in s}(i)}(t)?t:{integerValue:0}:null}class Mf extends Lh{}class Wu extends Lh{constructor(t){super(),this.elements=t}}function ZA(e,t){const n=tP(t);for(const i of e.elements)n.some(r=>cr(r,i))||n.push(i);return{arrayValue:{values:n}}}class zu extends Lh{constructor(t){super(),this.elements=t}}function eP(e,t){let n=tP(t);for(const i of e.elements)n=n.filter(r=>!cr(r,i));return{arrayValue:{values:n}}}class Nf extends Lh{constructor(t,n){super(),this.serializer=t,this.Pe=n}}function LS(e){return zt(e.integerValue||e.doubleValue)}function tP(e){return Zy(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function _U(e,t){return e.field.isEqual(t.field)&&function(i,r){return i instanceof Wu&&r instanceof Wu||i instanceof zu&&r instanceof zu?Ka(i.elements,r.elements,cr):i instanceof Nf&&r instanceof Nf?cr(i.Pe,r.Pe):i instanceof Mf&&r instanceof Mf}(e.transform,t.transform)}class bU{constructor(t,n){this.version=t,this.transformResults=n}}class Fi{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Fi}static exists(t){return new Fi(void 0,t)}static updateTime(t){return new Fi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function jd(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Fh{}function nP(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new i_(e.key,Fi.none()):new Tc(e.key,e.data,Fi.none());{const n=e.data,i=Ti.empty();let r=new cn(Cn.comparator);for(let s of t.fields)if(!r.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?i.delete(s):i.set(s,o),r=r.add(s)}return new Ho(e.key,i,new Ni(r.toArray()),Fi.none())}}function wU(e,t,n){e instanceof Tc?function(r,s,o){const a=r.value.clone(),l=BS(r.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Ho?function(r,s,o){if(!jd(r.precondition,s))return void s.convertToUnknownDocument(o.version);const a=BS(r.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(iP(r)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(r,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function _u(e,t,n,i){return e instanceof Tc?function(s,o,a,l){if(!jd(s.precondition,o))return a;const u=s.value.clone(),c=$S(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,i):e instanceof Ho?function(s,o,a,l){if(!jd(s.precondition,o))return a;const u=$S(s.fieldTransforms,l,o),c=o.data;return c.setAll(iP(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(e,t,n,i):function(s,o,a){return jd(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function SU(e,t){let n=null;for(const i of e.fieldTransforms){const r=t.data.field(i.field),s=JA(i.transform,r||null);s!=null&&(n===null&&(n=Ti.empty()),n.set(i.field,s))}return n||null}function FS(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(i,r){return i===void 0&&r===void 0||!(!i||!r)&&Ka(i,r,(s,o)=>_U(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Tc extends Fh{constructor(t,n,i,r=[]){super(),this.key=t,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ho extends Fh{constructor(t,n,i,r,s=[]){super(),this.key=t,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function iP(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}}),t}function BS(e,t,n){const i=new Map;pt(e.length===n.length);for(let r=0;r<n.length;r++){const s=e[r],o=s.transform,a=t.data.field(s.field);i.set(s.field,yU(o,a,n[r]))}return i}function $S(e,t,n){const i=new Map;for(const r of e){const s=r.transform,o=n.data.field(r.field);i.set(r.field,pU(s,o,t))}return i}class i_ extends Fh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class TU extends Fh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class CU{constructor(t,n,i,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(t,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(t.key)&&wU(s,t,i[r])}}applyToLocalView(t,n){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(n=_u(i,t,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(n=_u(i,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const i=QA();return this.mutations.forEach(r=>{const s=t.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(r.key)?null:a;const l=nP(o,a);l!==null&&i.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(qe.min())}),i}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Ze())}isEqual(t){return this.batchId===t.batchId&&Ka(this.mutations,t.mutations,(n,i)=>FS(n,i))&&Ka(this.baseMutations,t.baseMutations,(n,i)=>FS(n,i))}}class r_{constructor(t,n,i,r){this.batch=t,this.commitVersion=n,this.mutationResults=i,this.docVersions=r}static from(t,n,i){pt(t.mutations.length===i.length);let r=function(){return fU}();const s=t.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,i[o].version);return new r_(t,n,i,r)}}/**
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
 */class EU{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class IU{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var Xt,rt;function kU(e){switch(e){default:return ze();case ve.CANCELLED:case ve.UNKNOWN:case ve.DEADLINE_EXCEEDED:case ve.RESOURCE_EXHAUSTED:case ve.INTERNAL:case ve.UNAVAILABLE:case ve.UNAUTHENTICATED:return!1;case ve.INVALID_ARGUMENT:case ve.NOT_FOUND:case ve.ALREADY_EXISTS:case ve.PERMISSION_DENIED:case ve.FAILED_PRECONDITION:case ve.ABORTED:case ve.OUT_OF_RANGE:case ve.UNIMPLEMENTED:case ve.DATA_LOSS:return!0}}function rP(e){if(e===void 0)return Fr("GRPC error has no .code"),ve.UNKNOWN;switch(e){case Xt.OK:return ve.OK;case Xt.CANCELLED:return ve.CANCELLED;case Xt.UNKNOWN:return ve.UNKNOWN;case Xt.DEADLINE_EXCEEDED:return ve.DEADLINE_EXCEEDED;case Xt.RESOURCE_EXHAUSTED:return ve.RESOURCE_EXHAUSTED;case Xt.INTERNAL:return ve.INTERNAL;case Xt.UNAVAILABLE:return ve.UNAVAILABLE;case Xt.UNAUTHENTICATED:return ve.UNAUTHENTICATED;case Xt.INVALID_ARGUMENT:return ve.INVALID_ARGUMENT;case Xt.NOT_FOUND:return ve.NOT_FOUND;case Xt.ALREADY_EXISTS:return ve.ALREADY_EXISTS;case Xt.PERMISSION_DENIED:return ve.PERMISSION_DENIED;case Xt.FAILED_PRECONDITION:return ve.FAILED_PRECONDITION;case Xt.ABORTED:return ve.ABORTED;case Xt.OUT_OF_RANGE:return ve.OUT_OF_RANGE;case Xt.UNIMPLEMENTED:return ve.UNIMPLEMENTED;case Xt.DATA_LOSS:return ve.DATA_LOSS;default:return ze()}}(rt=Xt||(Xt={}))[rt.OK=0]="OK",rt[rt.CANCELLED=1]="CANCELLED",rt[rt.UNKNOWN=2]="UNKNOWN",rt[rt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",rt[rt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",rt[rt.NOT_FOUND=5]="NOT_FOUND",rt[rt.ALREADY_EXISTS=6]="ALREADY_EXISTS",rt[rt.PERMISSION_DENIED=7]="PERMISSION_DENIED",rt[rt.UNAUTHENTICATED=16]="UNAUTHENTICATED",rt[rt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",rt[rt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",rt[rt.ABORTED=10]="ABORTED",rt[rt.OUT_OF_RANGE=11]="OUT_OF_RANGE",rt[rt.UNIMPLEMENTED=12]="UNIMPLEMENTED",rt[rt.INTERNAL=13]="INTERNAL",rt[rt.UNAVAILABLE=14]="UNAVAILABLE",rt[rt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function AU(){return new TextEncoder}/**
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
 */const PU=new ho([4294967295,4294967295],0);function US(e){const t=AU().encode(e),n=new kA;return n.update(t),new Uint8Array(n.digest())}function HS(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),r=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new ho([n,i],0),new ho([r,s],0)]}class s_{constructor(t,n,i){if(this.bitmap=t,this.padding=n,this.hashCount=i,n<0||n>=8)throw new ou(`Invalid padding: ${n}`);if(i<0)throw new ou(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new ou(`Invalid hash count: ${i}`);if(t.length===0&&n!==0)throw new ou(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ie=ho.fromNumber(this.Te)}Ee(t,n,i){let r=t.add(n.multiply(ho.fromNumber(i)));return r.compare(PU)===1&&(r=new ho([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ie).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=US(t),[i,r]=HS(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(i,r,s);if(!this.de(o))return!1}return!0}static create(t,n,i){const r=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new s_(s,r,n);return i.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=US(t),[i,r]=HS(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(i,r,s);this.Ae(o)}}Ae(t){const n=Math.floor(t/8),i=t%8;this.bitmap[n]|=1<<i}}class ou extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Bh{constructor(t,n,i,r,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,i){const r=new Map;return r.set(t,Cc.createSynthesizedTargetChangeForCurrentChange(t,n,i)),new Bh(qe.min(),r,new nn(tt),Br(),Ze())}}class Cc{constructor(t,n,i,r,s){this.resumeToken=t,this.current=n,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,i){return new Cc(i,n,Ze(),Ze(),Ze())}}/**
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
 */class Wd{constructor(t,n,i,r){this.Re=t,this.removedTargetIds=n,this.key=i,this.Ve=r}}class sP{constructor(t,n){this.targetId=t,this.me=n}}class oP{constructor(t,n,i=In.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=i,this.cause=r}}class jS{constructor(){this.fe=0,this.ge=WS(),this.pe=In.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=Ze(),n=Ze(),i=Ze();return this.ge.forEach((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:i=i.add(r);break;default:ze()}}),new Cc(this.pe,this.ye,t,n,i)}Ce(){this.we=!1,this.ge=WS()}Fe(t,n){this.we=!0,this.ge=this.ge.insert(t,n)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,pt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class xU{constructor(t){this.Le=t,this.Be=new Map,this.ke=Br(),this.qe=pd(),this.Qe=pd(),this.Ke=new nn(tt)}$e(t){for(const n of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.Ue(n,t.Ve):this.We(n,t.key,t.Ve);for(const n of t.removedTargetIds)this.We(n,t.key,t.Ve)}Ge(t){this.forEachTarget(t,n=>{const i=this.ze(n);switch(t.state){case 0:this.je(n)&&i.De(t.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(t.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(n);break;case 3:this.je(n)&&(i.Ne(),i.De(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),i.De(t.resumeToken));break;default:ze()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Be.forEach((i,r)=>{this.je(r)&&n(r)})}Je(t){const n=t.targetId,i=t.me.count,r=this.Ye(n);if(r){const s=r.target;if(Og(s))if(i===0){const o=new Le(s.path);this.We(n,o,On.newNoDocument(o,qe.min()))}else pt(i===1);else{const o=this.Ze(n);if(o!==i){const a=this.Xe(t),l=a?this.et(a,t,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(t){const n=t.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:r=0},hashCount:s=0}=n;let o,a;try{o=xs(i).toUint8Array()}catch(l){if(l instanceof OA)return Ga("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new s_(o,r,s)}catch(l){return Ga(l instanceof ou?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(t,n,i){return n.me.count===i-this.rt(t,n.targetId)?0:2}rt(t,n){const i=this.Le.getRemoteKeysForTarget(n);let r=0;return i.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.We(n,s,null),r++)}),r}it(t){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Og(a.target)){const l=new Le(a.target.path);this.st(l).has(o)||this.ot(o,l)||this.We(o,l,On.newNoDocument(l,t))}s.be&&(n.set(o,s.ve()),s.Ce())}});let i=Ze();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(t));const r=new Bh(t,n,this.Ke,this.ke,i);return this.ke=Br(),this.qe=pd(),this.Qe=pd(),this.Ke=new nn(tt),r}Ue(t,n){if(!this.je(t))return;const i=this.ot(t,n.key)?2:0;this.ze(t).Fe(n.key,i),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(t)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(t))}We(t,n,i){if(!this.je(t))return;const r=this.ze(t);this.ot(t,n)?r.Fe(n,1):r.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(t)),this.Qe=this.Qe.insert(n,this._t(n).add(t)),i&&(this.ke=this.ke.insert(n,i))}removeTarget(t){this.Be.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}xe(t){this.ze(t).xe()}ze(t){let n=this.Be.get(t);return n||(n=new jS,this.Be.set(t,n)),n}_t(t){let n=this.Qe.get(t);return n||(n=new cn(tt),this.Qe=this.Qe.insert(t,n)),n}st(t){let n=this.qe.get(t);return n||(n=new cn(tt),this.qe=this.qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||xe("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.Be.get(t);return n&&n.Se?null:this.Le.ut(t)}He(t){this.Be.set(t,new jS),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}ot(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function pd(){return new nn(Le.comparator)}function WS(){return new nn(Le.comparator)}const RU={asc:"ASCENDING",desc:"DESCENDING"},VU={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},DU={and:"AND",or:"OR"};class MU{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Fg(e,t){return e.useProto3Json||Dh(t)?t:{value:t}}function Of(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function aP(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function NU(e,t){return Of(e,t.toTimestamp())}function sr(e){return pt(!!e),qe.fromTimestamp(function(n){const i=Ps(n);return new en(i.seconds,i.nanos)}(e))}function o_(e,t){return Bg(e,t).canonicalString()}function Bg(e,t){const n=function(r){return new xt(["projects",r.projectId,"databases",r.database])}(e).child("documents");return t===void 0?n:n.child(t)}function lP(e){const t=xt.fromString(e);return pt(hP(t)),t}function $g(e,t){return o_(e.databaseId,t.path)}function bv(e,t){const n=lP(t);if(n.get(1)!==e.databaseId.projectId)throw new Ve(ve.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Ve(ve.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Le(cP(n))}function uP(e,t){return o_(e.databaseId,t)}function OU(e){const t=lP(e);return t.length===4?xt.emptyPath():cP(t)}function Ug(e){return new xt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function cP(e){return pt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function zS(e,t,n){return{name:$g(e,t),fields:n.value.mapValue.fields}}function LU(e,t){let n;if("targetChange"in t){t.targetChange;const i=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ze()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(pt(c===void 0||typeof c=="string"),In.fromBase64String(c||"")):(pt(c===void 0||c instanceof Buffer||c instanceof Uint8Array),In.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?ve.UNKNOWN:rP(u.code);return new Ve(c,u.message||"")}(o);n=new oP(i,r,s,a||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const r=bv(e,i.document.name),s=sr(i.document.updateTime),o=i.document.createTime?sr(i.document.createTime):qe.min(),a=new Ti({mapValue:{fields:i.document.fields}}),l=On.newFoundDocument(r,s,o,a),u=i.targetIds||[],c=i.removedTargetIds||[];n=new Wd(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const r=bv(e,i.document),s=i.readTime?sr(i.readTime):qe.min(),o=On.newNoDocument(r,s),a=i.removedTargetIds||[];n=new Wd([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const r=bv(e,i.document),s=i.removedTargetIds||[];n=new Wd([],s,r,null)}else{if(!("filter"in t))return ze();{t.filter;const i=t.filter;i.targetId;const{count:r=0,unchangedNames:s}=i,o=new IU(r,s),a=i.targetId;n=new sP(a,o)}}return n}function FU(e,t){let n;if(t instanceof Tc)n={update:zS(e,t.key,t.value)};else if(t instanceof i_)n={delete:$g(e,t.key)};else if(t instanceof Ho)n={update:zS(e,t.key,t.data),updateMask:GU(t.fieldMask)};else{if(!(t instanceof TU))return ze();n={verify:$g(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(i=>function(s,o){const a=o.transform;if(a instanceof Mf)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Wu)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof zu)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Nf)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ze()}(0,i))),t.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:NU(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ze()}(e,t.precondition)),n}function BU(e,t){return e&&e.length>0?(pt(t!==void 0),e.map(n=>function(r,s){let o=r.updateTime?sr(r.updateTime):sr(s);return o.isEqual(qe.min())&&(o=sr(s)),new bU(o,r.transformResults||[])}(n,t))):[]}function $U(e,t){return{documents:[uP(e,t.path)]}}function UU(e,t){const n={structuredQuery:{}},i=t.path;let r;t.collectionGroup!==null?(r=i,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=uP(e,r);const s=function(u){if(u.length!==0)return fP(ji.create(u,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(f){return{field:ba(f.field),direction:WU(f.dir)}}(c))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Fg(e,t.limit);return a!==null&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),{ct:n,parent:r}}function HU(e){let t=OU(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){pt(i===1);const c=n.from[0];c.allDescendants?r=c.collectionId:t=t.child(c.collectionId)}let s=[];n.where&&(s=function(d){const f=dP(d);return f instanceof ji&&$A(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(f=>function(g){return new ju(wa(g.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(d){let f;return f=typeof d=="object"?d.value:d,Dh(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(d){const f=!!d.before,m=d.values||[];return new Vf(m,f)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const f=!d.before,m=d.values||[];return new Vf(m,f)}(n.endAt)),aU(t,r,o,s,a,"F",l,u)}function jU(e,t){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ze()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function dP(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=wa(n.unaryFilter.field);return Zt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const r=wa(n.unaryFilter.field);return Zt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=wa(n.unaryFilter.field);return Zt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=wa(n.unaryFilter.field);return Zt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ze()}}(e):e.fieldFilter!==void 0?function(n){return Zt.create(wa(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ze()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return ji.create(n.compositeFilter.filters.map(i=>dP(i)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return ze()}}(n.compositeFilter.op))}(e):ze()}function WU(e){return RU[e]}function zU(e){return VU[e]}function qU(e){return DU[e]}function ba(e){return{fieldPath:e.canonicalString()}}function wa(e){return Cn.fromServerFormat(e.fieldPath)}function fP(e){return e instanceof Zt?function(n){if(n.op==="=="){if(VS(n.value))return{unaryFilter:{field:ba(n.field),op:"IS_NAN"}};if(RS(n.value))return{unaryFilter:{field:ba(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(VS(n.value))return{unaryFilter:{field:ba(n.field),op:"IS_NOT_NAN"}};if(RS(n.value))return{unaryFilter:{field:ba(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ba(n.field),op:zU(n.op),value:n.value}}}(e):e instanceof ji?function(n){const i=n.getFilters().map(r=>fP(r));return i.length===1?i[0]:{compositeFilter:{op:qU(n.op),filters:i}}}(e):ze()}function GU(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function hP(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class vs{constructor(t,n,i,r,s=qe.min(),o=qe.min(),a=In.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new vs(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new vs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new vs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new vs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class KU{constructor(t){this.ht=t}}function YU(e){const t=HU({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Df(t,t.limit,"L"):t}/**
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
 */class QU{constructor(){this.ln=new XU}addToCollectionParentIndex(t,n){return this.ln.add(n),me.resolve()}getCollectionParents(t,n){return me.resolve(this.ln.getEntries(n))}addFieldIndex(t,n){return me.resolve()}deleteFieldIndex(t,n){return me.resolve()}deleteAllFieldIndexes(t){return me.resolve()}createTargetIndexes(t,n){return me.resolve()}getDocumentsMatchingTarget(t,n){return me.resolve(null)}getIndexType(t,n){return me.resolve(0)}getFieldIndexes(t,n){return me.resolve([])}getNextCollectionGroupToUpdate(t){return me.resolve(null)}getMinOffset(t,n){return me.resolve(As.min())}getMinOffsetFromCollectionGroup(t,n){return me.resolve(As.min())}updateCollectionGroup(t,n,i){return me.resolve()}updateIndexEntries(t,n){return me.resolve()}}class XU{constructor(){this.index={}}add(t){const n=t.lastSegment(),i=t.popLast(),r=this.index[n]||new cn(xt.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(t){const n=t.lastSegment(),i=t.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(t){return(this.index[t]||new cn(xt.comparator)).toArray()}}/**
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
 */const qS={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Zn{static withCacheSize(t){return new Zn(t,Zn.DEFAULT_COLLECTION_PERCENTILE,Zn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}}/**
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
 */Zn.DEFAULT_COLLECTION_PERCENTILE=10,Zn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Zn.DEFAULT=new Zn(41943040,Zn.DEFAULT_COLLECTION_PERCENTILE,Zn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Zn.DISABLED=new Zn(-1,0,0);/**
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
 */class Xa{constructor(t){this.kn=t}next(){return this.kn+=2,this.kn}static qn(){return new Xa(0)}static Qn(){return new Xa(-1)}}/**
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
 */function GS([e,t],[n,i]){const r=tt(e,n);return r===0?tt(t,i):r}class JU{constructor(t){this.Gn=t,this.buffer=new cn(GS),this.zn=0}jn(){return++this.zn}Hn(t){const n=[t,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();GS(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class ZU{constructor(t,n,i){this.garbageCollector=t,this.asyncQueue=n,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(t){xe("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){gl(n)?xe("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await vl(n)}await this.Yn(3e5)})}}class e4{constructor(t,n){this.Zn=t,this.params=n}calculateTargetCount(t,n){return this.Zn.Xn(t).next(i=>Math.floor(n/100*i))}nthSequenceNumber(t,n){if(n===0)return me.resolve(Vh.oe);const i=new JU(n);return this.Zn.forEachTarget(t,r=>i.Hn(r.sequenceNumber)).next(()=>this.Zn.er(t,r=>i.Hn(r))).next(()=>i.maxValue)}removeTargets(t,n,i){return this.Zn.removeTargets(t,n,i)}removeOrphanedDocuments(t,n){return this.Zn.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(xe("LruGarbageCollector","Garbage collection skipped; disabled"),me.resolve(qS)):this.getCacheSize(t).next(i=>i<this.params.cacheSizeCollectionThreshold?(xe("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qS):this.tr(t,n))}getCacheSize(t){return this.Zn.getCacheSize(t)}tr(t,n){let i,r,s,o,a,l,u;const c=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(xe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),r=this.params.maximumSequenceNumbersToCollect):r=d,o=Date.now(),this.nthSequenceNumber(t,r))).next(d=>(i=d,a=Date.now(),this.removeTargets(t,i,n))).next(d=>(s=d,l=Date.now(),this.removeOrphanedDocuments(t,i))).next(d=>(u=Date.now(),ya()<=Je.DEBUG&&xe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-c}ms`),me.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:d})))}}function t4(e,t){return new e4(e,t)}/**
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
 */class n4{constructor(){this.changes=new Uo(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,On.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?me.resolve(i):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class i4{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class r4{constructor(t,n,i,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=r}getDocument(t,n){let i=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(i=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(i!==null&&_u(i.mutation,r,Ni.empty(),en.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.getLocalViewOfDocuments(t,i,Ze()).next(()=>i))}getLocalViewOfDocuments(t,n,i=Ze()){const r=ro();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,i).next(s=>{let o=su();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const i=ro();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,Ze()))}populateOverlays(t,n,i){const r=[];return i.forEach(s=>{n.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(t,r).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,i,r){let s=Br();const o=yu(),a=function(){return yu()}();return n.forEach((l,u)=>{const c=i.get(u.key);r.has(u.key)&&(c===void 0||c.mutation instanceof Ho)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),_u(c.mutation,u,c.mutation.getFieldMask(),en.now())):o.set(u.key,Ni.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new i4(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(t,n){const i=yu();let r=new nn((o,a)=>o-a),s=Ze();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=i.get(l)||Ni.empty();c=a.applyToLocalView(u,c),i.set(l,c);const d=(r.get(a.batchId)||Ze()).add(l);r=r.insert(a.batchId,d)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=QA();c.forEach(f=>{if(!s.has(f)){const m=nP(n.get(f),i.get(f));m!==null&&d.set(f,m),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,d))}return me.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,n,i,r){return function(o){return Le.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):zA(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,i,r):this.getDocumentsMatchingCollectionQuery(t,n,i,r)}getNextDocuments(t,n,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,i,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,i.largestBatchId,r-s.size):me.resolve(ro());let a=-1,l=s;return o.next(u=>me.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?me.resolve():this.remoteDocumentCache.getEntry(t,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,l,u,Ze())).next(c=>({batchId:a,changes:YA(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new Le(n)).next(i=>{let r=su();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,i,r){const s=n.collectionGroup;let o=su();return this.indexManager.getCollectionParents(t,s).next(a=>me.forEach(a,l=>{const u=function(d,f){return new pl(f,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(t,u,i,r).next(c=>{c.forEach((d,f)=>{o=o.insert(d,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,i,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,i.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,i,s,r))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,On.newInvalidDocument(c)))});let a=su();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&_u(c.mutation,u,Ni.empty(),en.now()),Oh(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class s4{constructor(t){this.serializer=t,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(t,n){return me.resolve(this.Tr.get(n))}saveBundleMetadata(t,n){return this.Tr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:sr(r.createTime)}}(n)),me.resolve()}getNamedQuery(t,n){return me.resolve(this.Ir.get(n))}saveNamedQuery(t,n){return this.Ir.set(n.name,function(r){return{name:r.name,query:YU(r.bundledQuery),readTime:sr(r.readTime)}}(n)),me.resolve()}}/**
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
 */class o4{constructor(){this.overlays=new nn(Le.comparator),this.Er=new Map}getOverlay(t,n){return me.resolve(this.overlays.get(n))}getOverlays(t,n){const i=ro();return me.forEach(n,r=>this.getOverlay(t,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(t,n,i){return i.forEach((r,s)=>{this.Tt(t,n,s)}),me.resolve()}removeOverlaysForBatchId(t,n,i){const r=this.Er.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.Er.delete(i)),me.resolve()}getOverlaysForCollection(t,n,i){const r=ro(),s=n.length+1,o=new Le(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>i&&r.set(l.getKey(),l)}return me.resolve(r)}getOverlaysForCollectionGroup(t,n,i,r){let s=new nn((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>i){let c=s.get(u.largestBatchId);c===null&&(c=ro(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=ro(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=r)););return me.resolve(a)}Tt(t,n,i){const r=this.overlays.get(i.key);if(r!==null){const o=this.Er.get(r.largestBatchId).delete(i.key);this.Er.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new EU(n,i));let s=this.Er.get(n);s===void 0&&(s=Ze(),this.Er.set(n,s)),this.Er.set(n,s.add(i.key))}}/**
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
 */class a4{constructor(){this.sessionToken=In.EMPTY_BYTE_STRING}getSessionToken(t){return me.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,me.resolve()}}/**
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
 */class a_{constructor(){this.dr=new cn(vn.Ar),this.Rr=new cn(vn.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(t,n){const i=new vn(t,n);this.dr=this.dr.add(i),this.Rr=this.Rr.add(i)}mr(t,n){t.forEach(i=>this.addReference(i,n))}removeReference(t,n){this.gr(new vn(t,n))}pr(t,n){t.forEach(i=>this.removeReference(i,n))}yr(t){const n=new Le(new xt([])),i=new vn(n,t),r=new vn(n,t+1),s=[];return this.Rr.forEachInRange([i,r],o=>{this.gr(o),s.push(o.key)}),s}wr(){this.dr.forEach(t=>this.gr(t))}gr(t){this.dr=this.dr.delete(t),this.Rr=this.Rr.delete(t)}Sr(t){const n=new Le(new xt([])),i=new vn(n,t),r=new vn(n,t+1);let s=Ze();return this.Rr.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new vn(t,0),i=this.dr.firstAfterOrEqual(n);return i!==null&&t.isEqual(i.key)}}class vn{constructor(t,n){this.key=t,this.br=n}static Ar(t,n){return Le.comparator(t.key,n.key)||tt(t.br,n.br)}static Vr(t,n){return tt(t.br,n.br)||Le.comparator(t.key,n.key)}}/**
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
 */class l4{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new cn(vn.Ar)}checkEmpty(t){return me.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,i,r){const s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new CU(s,n,i,r);this.mutationQueue.push(o);for(const a of r)this.vr=this.vr.add(new vn(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return me.resolve(o)}lookupMutationBatch(t,n){return me.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(t,n){const i=n+1,r=this.Fr(i),s=r<0?0:r;return me.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return me.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(t){return me.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const i=new vn(n,0),r=new vn(n,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([i,r],o=>{const a=this.Cr(o.br);s.push(a)}),me.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let i=new cn(tt);return n.forEach(r=>{const s=new vn(r,0),o=new vn(r,Number.POSITIVE_INFINITY);this.vr.forEachInRange([s,o],a=>{i=i.add(a.br)})}),me.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(t,n){const i=n.path,r=i.length+1;let s=i;Le.isDocumentKey(s)||(s=s.child(""));const o=new vn(new Le(s),0);let a=new cn(tt);return this.vr.forEachWhile(l=>{const u=l.key.path;return!!i.isPrefixOf(u)&&(u.length===r&&(a=a.add(l.br)),!0)},o),me.resolve(this.Mr(a))}Mr(t){const n=[];return t.forEach(i=>{const r=this.Cr(i);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){pt(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return me.forEach(n.mutations,r=>{const s=new vn(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.vr=i})}Ln(t){}containsKey(t,n){const i=new vn(n,0),r=this.vr.firstAfterOrEqual(i);return me.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,me.resolve()}Or(t,n){return this.Fr(t)}Fr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Cr(t){const n=this.Fr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class u4{constructor(t){this.Nr=t,this.docs=function(){return new nn(Le.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const i=n.key,r=this.docs.get(i),s=r?r.size:0,o=this.Nr(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const i=this.docs.get(n);return me.resolve(i?i.document.mutableCopy():On.newInvalidDocument(n))}getEntries(t,n){let i=Br();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():On.newInvalidDocument(r))}),me.resolve(i)}getDocumentsMatchingQuery(t,n,i,r){let s=Br();const o=n.path,a=new Le(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||$$(B$(c),i)<=0||(r.has(c.key)||Oh(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return me.resolve(s)}getAllFromCollectionGroup(t,n,i,r){ze()}Lr(t,n){return me.forEach(this.docs,i=>n(i))}newChangeBuffer(t){return new c4(this)}getSize(t){return me.resolve(this.size)}}class c4 extends n4{constructor(t){super(),this.hr=t}applyChanges(t){const n=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?n.push(this.hr.addEntry(t,r)):this.hr.removeEntry(i)}),me.waitFor(n)}getFromCache(t,n){return this.hr.getEntry(t,n)}getAllFromCache(t,n){return this.hr.getEntries(t,n)}}/**
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
 */class d4{constructor(t){this.persistence=t,this.Br=new Uo(n=>e_(n),t_),this.lastRemoteSnapshotVersion=qe.min(),this.highestTargetId=0,this.kr=0,this.qr=new a_,this.targetCount=0,this.Qr=Xa.qn()}forEachTarget(t,n){return this.Br.forEach((i,r)=>n(r)),me.resolve()}getLastRemoteSnapshotVersion(t){return me.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return me.resolve(this.kr)}allocateTargetId(t){return this.highestTargetId=this.Qr.next(),me.resolve(this.highestTargetId)}setTargetsMetadata(t,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.kr&&(this.kr=n),me.resolve()}Un(t){this.Br.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Qr=new Xa(n),this.highestTargetId=n),t.sequenceNumber>this.kr&&(this.kr=t.sequenceNumber)}addTargetData(t,n){return this.Un(n),this.targetCount+=1,me.resolve()}updateTargetData(t,n){return this.Un(n),me.resolve()}removeTargetData(t,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,me.resolve()}removeTargets(t,n,i){let r=0;const s=[];return this.Br.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Br.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),me.waitFor(s).next(()=>r)}getTargetCount(t){return me.resolve(this.targetCount)}getTargetData(t,n){const i=this.Br.get(n)||null;return me.resolve(i)}addMatchingKeys(t,n,i){return this.qr.mr(n,i),me.resolve()}removeMatchingKeys(t,n,i){this.qr.pr(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(o=>{s.push(r.markPotentiallyOrphaned(t,o))}),me.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.qr.yr(n),me.resolve()}getMatchingKeysForTargetId(t,n){const i=this.qr.Sr(n);return me.resolve(i)}containsKey(t,n){return me.resolve(this.qr.containsKey(n))}}/**
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
 */class mP{constructor(t,n){this.Kr={},this.overlays={},this.$r=new Vh(0),this.Ur=!1,this.Ur=!0,this.Wr=new a4,this.referenceDelegate=t(this),this.Gr=new d4(this),this.indexManager=new QU,this.remoteDocumentCache=function(r){return new u4(r)}(i=>this.referenceDelegate.zr(i)),this.serializer=new KU(n),this.jr=new s4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new o4,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let i=this.Kr[t.toKey()];return i||(i=new l4(n,this.referenceDelegate),this.Kr[t.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(t,n,i){xe("MemoryPersistence","Starting transaction:",t);const r=new f4(this.$r.next());return this.referenceDelegate.Hr(),i(r).next(s=>this.referenceDelegate.Jr(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Yr(t,n){return me.or(Object.values(this.Kr).map(i=>()=>i.containsKey(t,n)))}}class f4 extends H${constructor(t){super(),this.currentSequenceNumber=t}}class l_{constructor(t){this.persistence=t,this.Zr=new a_,this.Xr=null}static ei(t){return new l_(t)}get ti(){if(this.Xr)return this.Xr;throw ze()}addReference(t,n,i){return this.Zr.addReference(i,n),this.ti.delete(i.toString()),me.resolve()}removeReference(t,n,i){return this.Zr.removeReference(i,n),this.ti.add(i.toString()),me.resolve()}markPotentiallyOrphaned(t,n){return this.ti.add(n.toString()),me.resolve()}removeTarget(t,n){this.Zr.yr(n.targetId).forEach(r=>this.ti.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(s=>this.ti.add(s.toString()))}).next(()=>i.removeTargetData(t,n))}Hr(){this.Xr=new Set}Jr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return me.forEach(this.ti,i=>{const r=Le.fromPath(i);return this.ni(t,r).next(s=>{s||n.removeEntry(r,qe.min())})}).next(()=>(this.Xr=null,n.apply(t)))}updateLimboDocument(t,n){return this.ni(t,n).next(i=>{i?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(t){return 0}ni(t,n){return me.or([()=>me.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Yr(t,n)])}}class Lf{constructor(t,n){this.persistence=t,this.ri=new Uo(i=>z$(i.path),(i,r)=>i.isEqual(r)),this.garbageCollector=t4(this,n)}static ei(t,n){return new Lf(t,n)}Hr(){}Jr(t){return me.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}Xn(t){const n=this.nr(t);return this.persistence.getTargetCache().getTargetCount(t).next(i=>n.next(r=>i+r))}nr(t){let n=0;return this.er(t,i=>{n++}).next(()=>n)}er(t,n){return me.forEach(this.ri,(i,r)=>this.ir(t,i,r).next(s=>s?me.resolve():n(r)))}removeTargets(t,n,i){return this.persistence.getTargetCache().removeTargets(t,n,i)}removeOrphanedDocuments(t,n){let i=0;const r=this.persistence.getRemoteDocumentCache(),s=r.newChangeBuffer();return r.Lr(t,o=>this.ir(t,o,n).next(a=>{a||(i++,s.removeEntry(o,qe.min()))})).next(()=>s.apply(t)).next(()=>i)}markPotentiallyOrphaned(t,n){return this.ri.set(n,t.currentSequenceNumber),me.resolve()}removeTarget(t,n){const i=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,i)}addReference(t,n,i){return this.ri.set(i,t.currentSequenceNumber),me.resolve()}removeReference(t,n,i){return this.ri.set(i,t.currentSequenceNumber),me.resolve()}updateLimboDocument(t,n){return this.ri.set(n,t.currentSequenceNumber),me.resolve()}zr(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Ud(t.data.value)),n}ir(t,n,i){return me.or([()=>this.persistence.Yr(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const r=this.ri.get(n);return me.resolve(r!==void 0&&r>i)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class u_{constructor(t,n,i,r){this.targetId=t,this.fromCache=n,this.Wi=i,this.Gi=r}static zi(t,n){let i=Ze(),r=Ze();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new u_(t,n.fromCache,i,r)}}/**
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
 */class h4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class m4{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return uB()?8:j$(Hn())>0?6:4}()}initialize(t,n){this.Zi=t,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(t,n,i,r){const s={result:null};return this.Xi(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.es(t,n,r,i).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new h4;return this.ts(t,n,o).next(a=>{if(s.result=a,this.Hi)return this.ns(t,n,o,a.size)})}).next(()=>s.result)}ns(t,n,i,r){return i.documentReadCount<this.Ji?(ya()<=Je.DEBUG&&xe("QueryEngine","SDK will not create cache indexes for query:",_a(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),me.resolve()):(ya()<=Je.DEBUG&&xe("QueryEngine","Query:",_a(n),"scans",i.documentReadCount,"local documents and returns",r,"documents as results."),i.documentReadCount>this.Yi*r?(ya()<=Je.DEBUG&&xe("QueryEngine","The SDK decides to create cache indexes for query:",_a(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,rr(n))):me.resolve())}Xi(t,n){if(OS(n))return me.resolve(null);let i=rr(n);return this.indexManager.getIndexType(t,i).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Df(n,null,"F"),i=rr(n)),this.indexManager.getDocumentsMatchingTarget(t,i).next(s=>{const o=Ze(...s);return this.Zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,i).next(l=>{const u=this.rs(n,a);return this.ss(n,u,o,l.readTime)?this.Xi(t,Df(n,null,"F")):this.os(t,u,n,l)}))})))}es(t,n,i,r){return OS(n)||r.isEqual(qe.min())?me.resolve(null):this.Zi.getDocuments(t,i).next(s=>{const o=this.rs(n,s);return this.ss(n,o,i,r)?me.resolve(null):(ya()<=Je.DEBUG&&xe("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),_a(n)),this.os(t,o,n,F$(r,-1)).next(a=>a))})}rs(t,n){let i=new cn(GA(t));return n.forEach((r,s)=>{Oh(t,s)&&(i=i.add(s))}),i}ss(t,n,i,r){if(t.limit===null)return!1;if(i.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}ts(t,n,i){return ya()<=Je.DEBUG&&xe("QueryEngine","Using full collection scan to execute query:",_a(n)),this.Zi.getDocumentsMatchingQuery(t,n,As.min(),i)}os(t,n,i,r){return this.Zi.getDocumentsMatchingQuery(t,i,r).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class v4{constructor(t,n,i,r){this.persistence=t,this._s=n,this.serializer=r,this.us=new nn(tt),this.cs=new Uo(s=>e_(s),t_),this.ls=new Map,this.hs=t.getRemoteDocumentCache(),this.Gr=t.getTargetCache(),this.jr=t.getBundleCache(),this.Ps(i)}Ps(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new r4(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.us))}}function g4(e,t,n,i){return new v4(e,t,n,i)}async function vP(e,t){const n=Ke(e);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let r;return n.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,n.Ps(t),n.mutationQueue.getAllMutationBatches(i))).next(s=>{const o=[],a=[];let l=Ze();for(const u of r){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(i,l).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function p4(e,t){const n=Ke(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=t.batch.keys(),s=n.hs.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const d=u.batch,f=d.keys();let m=me.resolve();return f.forEach(g=>{m=m.next(()=>c.getEntry(l,g)).next(y=>{const p=u.docVersions.get(g);pt(p!==null),y.version.compareTo(p)<0&&(d.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),c.addEntry(y)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,i,t,s).next(()=>s.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(a){let l=Ze();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(t))).next(()=>n.localDocuments.getDocuments(i,r))})}function gP(e){const t=Ke(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Gr.getLastRemoteSnapshotVersion(n))}function y4(e,t){const n=Ke(e),i=t.snapshotVersion;let r=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});r=n.us;const a=[];t.targetChanges.forEach((c,d)=>{const f=r.get(d);if(!f)return;a.push(n.Gr.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Gr.addMatchingKeys(s,c.addedDocuments,d)));let m=f.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(d)!==null?m=m.withResumeToken(In.EMPTY_BYTE_STRING,qe.min()).withLastLimboFreeSnapshotVersion(qe.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,i)),r=r.insert(d,m),function(y,p,S){return y.resumeToken.approximateByteSize()===0||p.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(f,m,c)&&a.push(n.Gr.updateTargetData(s,m))});let l=Br(),u=Ze();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(_4(s,o,t.documentUpdates).next(c=>{l=c.Is,u=c.Es})),!i.isEqual(qe.min())){const c=n.Gr.getLastRemoteSnapshotVersion(s).next(d=>n.Gr.setTargetsMetadata(s,s.currentSequenceNumber,i));a.push(c)}return me.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.us=r,s))}function _4(e,t,n){let i=Ze(),r=Ze();return n.forEach(s=>i=i.add(s)),t.getEntries(e,i).next(s=>{let o=Br();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(qe.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):xe("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Is:o,Es:r}})}function b4(e,t){const n=Ke(e);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}function w4(e,t){const n=Ke(e);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return n.Gr.getTargetData(i,t).next(s=>s?(r=s,me.resolve(r)):n.Gr.allocateTargetId(i).next(o=>(r=new vs(t,o,"TargetPurposeListen",i.currentSequenceNumber),n.Gr.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=n.us.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.us=n.us.insert(i.targetId,i),n.cs.set(t,i.targetId)),i})}async function Hg(e,t,n){const i=Ke(e),r=i.us.get(t),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!gl(o))throw o;xe("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}i.us=i.us.remove(t),i.cs.delete(r.target)}function KS(e,t,n){const i=Ke(e);let r=qe.min(),s=Ze();return i.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const d=Ke(l),f=d.cs.get(c);return f!==void 0?me.resolve(d.us.get(f)):d.Gr.getTargetData(u,c)}(i,o,rr(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>i._s.getDocumentsMatchingQuery(o,t,n?r:qe.min(),n?s:Ze())).next(a=>(S4(i,uU(t),a),{documents:a,ds:s})))}function S4(e,t,n){let i=e.ls.get(t)||qe.min();n.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),e.ls.set(t,i)}class YS{constructor(){this.activeTargetIds=vU()}ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}ys(t){this.activeTargetIds=this.activeTargetIds.delete(t)}gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class T4{constructor(){this._o=new YS,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,i){}addLocalQueryTarget(t,n=!0){return n&&this._o.ps(t),this.ao[t]||"not-current"}updateQueryState(t,n,i){this.ao[t]=n}removeLocalQueryTarget(t){this._o.ys(t)}isLocalQueryTarget(t){return this._o.activeTargetIds.has(t)}clearQueryState(t){delete this.ao[t]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(t){return this._o.activeTargetIds.has(t)}start(){return this._o=new YS,Promise.resolve()}handleUserChange(t,n,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class C4{uo(t){}shutdown(){}}/**
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
 */class QS{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(t){this.To.push(t)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){xe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.To)t(0)}Po(){xe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.To)t(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let yd=null;function wv(){return yd===null?yd=function(){return 268435456+Math.round(2147483648*Math.random())}():yd++,"0x"+yd.toString(16)}/**
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
 */const E4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class I4{constructor(t){this.Eo=t.Eo,this.Ao=t.Ao}Ro(t){this.Vo=t}mo(t){this.fo=t}po(t){this.yo=t}onMessage(t){this.wo=t}close(){this.Ao()}send(t){this.Eo(t)}So(){this.Vo()}bo(){this.fo()}Do(t){this.yo(t)}vo(t){this.wo(t)}}/**
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
 */const Vn="WebChannelConnection";class k4 extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const i=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+n.host,this.Mo=`projects/${r}/databases/${s}`,this.xo=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Oo(n,i,r,s,o){const a=wv(),l=this.No(n,i.toUriEncodedString());xe("RestConnection",`Sending RPC '${n}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,s,o),this.Bo(n,l,u,r).then(c=>(xe("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Ga("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",r),c})}ko(n,i,r,s,o,a){return this.Oo(n,i,r,s,o)}Lo(n,i,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ml}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((s,o)=>n[o]=s),r&&r.headers.forEach((s,o)=>n[o]=s)}No(n,i){const r=E4[n];return`${this.Fo}/v1/${i}:${r}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Bo(t,n,i,r){const s=wv();return new Promise((o,a)=>{const l=new AA;l.setWithCredentials(!0),l.listenOnce(PA.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case $d.NO_ERROR:const c=l.getResponseJson();xe(Vn,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(c)),o(c);break;case $d.TIMEOUT:xe(Vn,`RPC '${t}' ${s} timed out`),a(new Ve(ve.DEADLINE_EXCEEDED,"Request time out"));break;case $d.HTTP_ERROR:const d=l.getStatus();if(xe(Vn,`RPC '${t}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const m=f==null?void 0:f.error;if(m&&m.status&&m.message){const g=function(p){const S=p.toLowerCase().replace(/_/g,"-");return Object.values(ve).indexOf(S)>=0?S:ve.UNKNOWN}(m.status);a(new Ve(g,m.message))}else a(new Ve(ve.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new Ve(ve.UNAVAILABLE,"Connection failed."));break;default:ze()}}finally{xe(Vn,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(r);xe(Vn,`RPC '${t}' ${s} sending request:`,r),l.send(n,"POST",u,i,15)})}qo(t,n,i){const r=wv(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=VA(),a=RA(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Lo(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const c=s.join("");xe(Vn,`Creating RPC '${t}' stream ${r}: ${c}`,l);const d=o.createWebChannel(c,l);let f=!1,m=!1;const g=new I4({Eo:p=>{m?xe(Vn,`Not sending because RPC '${t}' stream ${r} is closed:`,p):(f||(xe(Vn,`Opening RPC '${t}' stream ${r} transport.`),d.open(),f=!0),xe(Vn,`RPC '${t}' stream ${r} sending:`,p),d.send(p))},Ao:()=>d.close()}),y=(p,S,w)=>{p.listen(S,T=>{try{w(T)}catch(x){setTimeout(()=>{throw x},0)}})};return y(d,ru.EventType.OPEN,()=>{m||(xe(Vn,`RPC '${t}' stream ${r} transport opened.`),g.So())}),y(d,ru.EventType.CLOSE,()=>{m||(m=!0,xe(Vn,`RPC '${t}' stream ${r} transport closed`),g.Do())}),y(d,ru.EventType.ERROR,p=>{m||(m=!0,Ga(Vn,`RPC '${t}' stream ${r} transport errored:`,p),g.Do(new Ve(ve.UNAVAILABLE,"The operation could not be completed")))}),y(d,ru.EventType.MESSAGE,p=>{var S;if(!m){const w=p.data[0];pt(!!w);const T=w,x=(T==null?void 0:T.error)||((S=T[0])===null||S===void 0?void 0:S.error);if(x){xe(Vn,`RPC '${t}' stream ${r} received error:`,x);const V=x.status;let D=function(_){const E=Xt[_];if(E!==void 0)return rP(E)}(V),A=x.message;D===void 0&&(D=ve.INTERNAL,A="Unknown error status: "+V+" with message "+x.message),m=!0,g.Do(new Ve(D,A)),d.close()}else xe(Vn,`RPC '${t}' stream ${r} received:`,w),g.vo(w)}}),y(a,xA.STAT_EVENT,p=>{p.stat===Rg.PROXY?xe(Vn,`RPC '${t}' stream ${r} detected buffering proxy`):p.stat===Rg.NOPROXY&&xe(Vn,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.bo()},0),g}}function Sv(){return typeof document<"u"?document:null}/**
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
 */function $h(e){return new MU(e,!0)}/**
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
 */class pP{constructor(t,n,i=1e3,r=1.5,s=6e4){this.li=t,this.timerId=n,this.Qo=i,this.Ko=r,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(t){this.cancel();const n=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),r=Math.max(0,n-i);r>0&&xe("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,r,()=>(this.Go=Date.now(),t())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class yP{constructor(t,n,i,r,s,o,a,l){this.li=t,this.Yo=i,this.Zo=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new pP(t,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(t){this.l_(),this.stream.send(t)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(t,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,t!==4?this.r_.reset():n&&n.code===ve.RESOURCE_EXHAUSTED?(Fr(n.toString()),Fr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===ve.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.po(n)}P_(){}auth(){this.state=1;const t=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.Xo===n&&this.I_(i,r)},i=>{t(()=>{const r=new Ve(ve.UNKNOWN,"Fetching auth token failed: "+i.message);return this.E_(r)})})}I_(t,n){const i=this.T_(this.Xo);this.stream=this.d_(t,n),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(r=>{i(()=>this.E_(r))}),this.stream.onMessage(r=>{i(()=>++this.n_==1?this.A_(r):this.onNext(r))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(t){return xe("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}T_(t){return n=>{this.li.enqueueAndForget(()=>this.Xo===t?n():(xe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class A4 extends yP{constructor(t,n,i,r,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s}d_(t,n){return this.connection.qo("Listen",t,n)}A_(t){return this.onNext(t)}onNext(t){this.r_.reset();const n=LU(this.serializer,t),i=function(s){if(!("targetChange"in s))return qe.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?qe.min():o.readTime?sr(o.readTime):qe.min()}(t);return this.listener.R_(n,i)}V_(t){const n={};n.database=Ug(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Og(l)?{documents:$U(s,l)}:{query:UU(s,l).ct},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=aP(s,o.resumeToken);const u=Fg(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(qe.min())>0){a.readTime=Of(s,o.snapshotVersion.toTimestamp());const u=Fg(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const i=jU(this.serializer,t);i&&(n.labels=i),this.c_(n)}m_(t){const n={};n.database=Ug(this.serializer),n.removeTarget=t,this.c_(n)}}class P4 extends yP{constructor(t,n,i,r,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(t,n){return this.connection.qo("Write",t,n)}A_(t){return pt(!!t.streamToken),this.lastStreamToken=t.streamToken,pt(!t.writeResults||t.writeResults.length===0),this.listener.p_()}onNext(t){pt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.r_.reset();const n=BU(t.writeResults,t.commitTime),i=sr(t.commitTime);return this.listener.y_(i,n)}w_(){const t={};t.database=Ug(this.serializer),this.c_(t)}g_(t){const n={streamToken:this.lastStreamToken,writes:t.map(i=>FU(this.serializer,i))};this.c_(n)}}/**
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
 */class x4 extends class{}{constructor(t,n,i,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=i,this.serializer=r,this.S_=!1}b_(){if(this.S_)throw new Ve(ve.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(t,n,i,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Oo(t,Bg(n,i),r,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===ve.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Ve(ve.UNKNOWN,s.toString())})}ko(t,n,i,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.ko(t,Bg(n,i),r,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===ve.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Ve(ve.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class R4{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(t){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.M_("Offline")))}set(t){this.N_(),this.D_=0,t==="Online"&&(this.C_=!1),this.M_(t)}M_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}x_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Fr(n),this.C_=!1):xe("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class V4{constructor(t,n,i,r,s){this.localStore=t,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(o=>{i.enqueueAndForget(async()=>{jo(this)&&(xe("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=Ke(l);u.k_.add(4),await Ec(u),u.K_.set("Unknown"),u.k_.delete(4),await Uh(u)}(this))})}),this.K_=new R4(i,r)}}async function Uh(e){if(jo(e))for(const t of e.q_)await t(!0)}async function Ec(e){for(const t of e.q_)await t(!1)}function _P(e,t){const n=Ke(e);n.B_.has(t.targetId)||(n.B_.set(t.targetId,t),h_(n)?f_(n):yl(n).s_()&&d_(n,t))}function c_(e,t){const n=Ke(e),i=yl(n);n.B_.delete(t),i.s_()&&bP(n,t),n.B_.size===0&&(i.s_()?i.a_():jo(n)&&n.K_.set("Unknown"))}function d_(e,t){if(e.U_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(qe.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}yl(e).V_(t)}function bP(e,t){e.U_.xe(t),yl(e).m_(t)}function f_(e){e.U_=new xU({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.B_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),yl(e).start(),e.K_.F_()}function h_(e){return jo(e)&&!yl(e).i_()&&e.B_.size>0}function jo(e){return Ke(e).k_.size===0}function wP(e){e.U_=void 0}async function D4(e){e.K_.set("Online")}async function M4(e){e.B_.forEach((t,n)=>{d_(e,t)})}async function N4(e,t){wP(e),h_(e)?(e.K_.O_(t),f_(e)):e.K_.set("Unknown")}async function O4(e,t,n){if(e.K_.set("Online"),t instanceof oP&&t.state===2&&t.cause)try{await async function(r,s){const o=s.cause;for(const a of s.targetIds)r.B_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.B_.delete(a),r.U_.removeTarget(a))}(e,t)}catch(i){xe("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),i),await Ff(e,i)}else if(t instanceof Wd?e.U_.$e(t):t instanceof sP?e.U_.Je(t):e.U_.Ge(t),!n.isEqual(qe.min()))try{const i=await gP(e.localStore);n.compareTo(i)>=0&&await function(s,o){const a=s.U_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.B_.get(u);c&&s.B_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.B_.get(l);if(!c)return;s.B_.set(l,c.withResumeToken(In.EMPTY_BYTE_STRING,c.snapshotVersion)),bP(s,l);const d=new vs(c.target,l,u,c.sequenceNumber);d_(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(i){xe("RemoteStore","Failed to raise snapshot:",i),await Ff(e,i)}}async function Ff(e,t,n){if(!gl(t))throw t;e.k_.add(1),await Ec(e),e.K_.set("Offline"),n||(n=()=>gP(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{xe("RemoteStore","Retrying IndexedDB access"),await n(),e.k_.delete(1),await Uh(e)})}function SP(e,t){return t().catch(n=>Ff(e,n,t))}async function Hh(e){const t=Ke(e),n=Vs(t);let i=t.L_.length>0?t.L_[t.L_.length-1].batchId:-1;for(;L4(t);)try{const r=await b4(t.localStore,i);if(r===null){t.L_.length===0&&n.a_();break}i=r.batchId,F4(t,r)}catch(r){await Ff(t,r)}TP(t)&&CP(t)}function L4(e){return jo(e)&&e.L_.length<10}function F4(e,t){e.L_.push(t);const n=Vs(e);n.s_()&&n.f_&&n.g_(t.mutations)}function TP(e){return jo(e)&&!Vs(e).i_()&&e.L_.length>0}function CP(e){Vs(e).start()}async function B4(e){Vs(e).w_()}async function $4(e){const t=Vs(e);for(const n of e.L_)t.g_(n.mutations)}async function U4(e,t,n){const i=e.L_.shift(),r=r_.from(i,t,n);await SP(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await Hh(e)}async function H4(e,t){t&&Vs(e).f_&&await async function(i,r){if(function(o){return kU(o)&&o!==ve.ABORTED}(r.code)){const s=i.L_.shift();Vs(i).__(),await SP(i,()=>i.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Hh(i)}}(e,t),TP(e)&&CP(e)}async function XS(e,t){const n=Ke(e);n.asyncQueue.verifyOperationInProgress(),xe("RemoteStore","RemoteStore received new credentials");const i=jo(n);n.k_.add(3),await Ec(n),i&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.k_.delete(3),await Uh(n)}async function j4(e,t){const n=Ke(e);t?(n.k_.delete(2),await Uh(n)):t||(n.k_.add(2),await Ec(n),n.K_.set("Unknown"))}function yl(e){return e.W_||(e.W_=function(n,i,r){const s=Ke(n);return s.b_(),new A4(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(e.datastore,e.asyncQueue,{Ro:D4.bind(null,e),mo:M4.bind(null,e),po:N4.bind(null,e),R_:O4.bind(null,e)}),e.q_.push(async t=>{t?(e.W_.__(),h_(e)?f_(e):e.K_.set("Unknown")):(await e.W_.stop(),wP(e))})),e.W_}function Vs(e){return e.G_||(e.G_=function(n,i,r){const s=Ke(n);return s.b_(),new P4(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(e.datastore,e.asyncQueue,{Ro:()=>Promise.resolve(),mo:B4.bind(null,e),po:H4.bind(null,e),p_:$4.bind(null,e),y_:U4.bind(null,e)}),e.q_.push(async t=>{t?(e.G_.__(),await Hh(e)):(await e.G_.stop(),e.L_.length>0&&(xe("RemoteStore",`Stopping write stream with ${e.L_.length} pending writes`),e.L_=[]))})),e.G_}/**
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
 */class m_{constructor(t,n,i,r,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new ws,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,i,r,s){const o=Date.now()+i,a=new m_(t,n,o,r,s);return a.start(i),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ve(ve.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function v_(e,t){if(Fr("AsyncQueue",`${t}: ${e}`),gl(e))return new Ve(ve.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class La{static emptySet(t){return new La(t.comparator)}constructor(t){this.comparator=t?(n,i)=>t(n,i)||Le.comparator(n.key,i.key):(n,i)=>Le.comparator(n.key,i.key),this.keyedMap=su(),this.sortedSet=new nn(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,i)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof La)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const i=new La;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=n,i}}/**
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
 */class JS{constructor(){this.z_=new nn(Le.comparator)}track(t){const n=t.doc.key,i=this.z_.get(n);i?t.type!==0&&i.type===3?this.z_=this.z_.insert(n,t):t.type===3&&i.type!==1?this.z_=this.z_.insert(n,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.z_=this.z_.insert(n,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.z_=this.z_.insert(n,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.z_=this.z_.remove(n):t.type===1&&i.type===2?this.z_=this.z_.insert(n,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.z_=this.z_.insert(n,{type:2,doc:t.doc}):ze():this.z_=this.z_.insert(n,t)}j_(){const t=[];return this.z_.inorderTraversal((n,i)=>{t.push(i)}),t}}class Ja{constructor(t,n,i,r,s,o,a,l,u){this.query=t,this.docs=n,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,n,i,r,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ja(t,n,La.emptySet(n),o,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Nh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,i=t.docChanges;if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==i[r].type||!n[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
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
 */class W4{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(t=>t.Z_())}}class z4{constructor(){this.queries=ZS(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,i){const r=Ke(n),s=r.queries;r.queries=ZS(),s.forEach((o,a)=>{for(const l of a.J_)l.onError(i)})})(this,new Ve(ve.ABORTED,"Firestore shutting down"))}}function ZS(){return new Uo(e=>qA(e),Nh)}async function q4(e,t){const n=Ke(e);let i=3;const r=t.query;let s=n.queries.get(r);s?!s.Y_()&&t.Z_()&&(i=2):(s=new W4,i=t.Z_()?0:1);try{switch(i){case 0:s.H_=await n.onListen(r,!0);break;case 1:s.H_=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const a=v_(o,`Initialization of query '${_a(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.J_.push(t),t.ea(n.onlineState),s.H_&&t.ta(s.H_)&&g_(n)}async function G4(e,t){const n=Ke(e),i=t.query;let r=3;const s=n.queries.get(i);if(s){const o=s.J_.indexOf(t);o>=0&&(s.J_.splice(o,1),s.J_.length===0?r=t.Z_()?0:1:!s.Y_()&&t.Z_()&&(r=2))}switch(r){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function K4(e,t){const n=Ke(e);let i=!1;for(const r of t){const s=r.query,o=n.queries.get(s);if(o){for(const a of o.J_)a.ta(r)&&(i=!0);o.H_=r}}i&&g_(n)}function Y4(e,t,n){const i=Ke(e),r=i.queries.get(t);if(r)for(const s of r.J_)s.onError(n);i.queries.delete(t)}function g_(e){e.X_.forEach(t=>{t.next()})}var jg,eT;(eT=jg||(jg={})).na="default",eT.Cache="cache";class Q4{constructor(t,n,i){this.query=t,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(t){if(!this.options.includeMetadataChanges){const i=[];for(const r of t.docChanges)r.type!==3&&i.push(r);t=new Ja(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.ia?this.oa(t)&&(this.ra.next(t),n=!0):this._a(t,this.onlineState)&&(this.aa(t),n=!0),this.sa=t,n}onError(t){this.ra.error(t)}ea(t){this.onlineState=t;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,t)&&(this.aa(this.sa),n=!0),n}_a(t,n){if(!t.fromCache||!this.Z_())return!0;const i=n!=="Offline";return(!this.options.ua||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}oa(t){if(t.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(t){t=Ja.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ia=!0,this.ra.next(t)}Z_(){return this.options.source!==jg.Cache}}/**
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
 */class EP{constructor(t){this.key=t}}class IP{constructor(t){this.key=t}}class X4{constructor(t,n){this.query=t,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ze(),this.mutatedKeys=Ze(),this.Va=GA(t),this.ma=new La(this.Va)}get fa(){return this.da}ga(t,n){const i=n?n.pa:new JS,r=n?n.ma:this.ma;let s=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((c,d)=>{const f=r.get(c),m=Oh(this.query,d)?d:null,g=!!f&&this.mutatedKeys.has(f.key),y=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let p=!1;f&&m?f.data.isEqual(m.data)?g!==y&&(i.track({type:3,doc:m}),p=!0):this.ya(f,m)||(i.track({type:2,doc:m}),p=!0,(l&&this.Va(m,l)>0||u&&this.Va(m,u)<0)&&(a=!0)):!f&&m?(i.track({type:0,doc:m}),p=!0):f&&!m&&(i.track({type:1,doc:f}),p=!0,(l||u)&&(a=!0)),p&&(m?(o=o.add(m),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),i.track({type:1,doc:c})}return{ma:o,pa:i,ss:a,mutatedKeys:s}}ya(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,i,r){const s=this.ma;this.ma=t.ma,this.mutatedKeys=t.mutatedKeys;const o=t.pa.j_();o.sort((c,d)=>function(m,g){const y=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ze()}};return y(m)-y(g)}(c.type,d.type)||this.Va(c.doc,d.doc)),this.wa(i),r=r!=null&&r;const a=n&&!r?this.Sa():[],l=this.Ra.size===0&&this.current&&!r?1:0,u=l!==this.Aa;return this.Aa=l,o.length!==0||u?{snapshot:new Ja(this.query,t.ma,s,o,t.mutatedKeys,l===0,u,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new JS,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(t){return!this.da.has(t)&&!!this.ma.has(t)&&!this.ma.get(t).hasLocalMutations}wa(t){t&&(t.addedDocuments.forEach(n=>this.da=this.da.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=t.current)}Sa(){if(!this.current)return[];const t=this.Ra;this.Ra=Ze(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const n=[];return t.forEach(i=>{this.Ra.has(i)||n.push(new IP(i))}),this.Ra.forEach(i=>{t.has(i)||n.push(new EP(i))}),n}va(t){this.da=t.ds,this.Ra=Ze();const n=this.ga(t.documents);return this.applyChanges(n,!0)}Ca(){return Ja.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class J4{constructor(t,n,i){this.query=t,this.targetId=n,this.view=i}}class Z4{constructor(t){this.key=t,this.Fa=!1}}class eH{constructor(t,n,i,r,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Uo(a=>qA(a),Nh),this.Oa=new Map,this.Na=new Set,this.La=new nn(Le.comparator),this.Ba=new Map,this.ka=new a_,this.qa={},this.Qa=new Map,this.Ka=Xa.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function tH(e,t,n=!0){const i=VP(e);let r;const s=i.xa.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.Ca()):r=await kP(i,t,n,!0),r}async function nH(e,t){const n=VP(e);await kP(n,t,!0,!1)}async function kP(e,t,n,i){const r=await w4(e.localStore,rr(t)),s=r.targetId,o=e.sharedClientState.addLocalQueryTarget(s,n);let a;return i&&(a=await iH(e,t,s,o==="current",r.resumeToken)),e.isPrimaryClient&&n&&_P(e.remoteStore,r),a}async function iH(e,t,n,i,r){e.Ua=(d,f,m)=>async function(y,p,S,w){let T=p.view.ga(S);T.ss&&(T=await KS(y.localStore,p.query,!1).then(({documents:A})=>p.view.ga(A,T)));const x=w&&w.targetChanges.get(p.targetId),V=w&&w.targetMismatches.get(p.targetId)!=null,D=p.view.applyChanges(T,y.isPrimaryClient,x,V);return nT(y,p.targetId,D.ba),D.snapshot}(e,d,f,m);const s=await KS(e.localStore,t,!0),o=new X4(t,s.ds),a=o.ga(s.documents),l=Cc.createSynthesizedTargetChangeForCurrentChange(n,i&&e.onlineState!=="Offline",r),u=o.applyChanges(a,e.isPrimaryClient,l);nT(e,n,u.ba);const c=new J4(t,n,o);return e.xa.set(t,c),e.Oa.has(n)?e.Oa.get(n).push(t):e.Oa.set(n,[t]),u.snapshot}async function rH(e,t,n){const i=Ke(e),r=i.xa.get(t),s=i.Oa.get(r.targetId);if(s.length>1)return i.Oa.set(r.targetId,s.filter(o=>!Nh(o,t))),void i.xa.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(r.targetId),i.sharedClientState.isActiveQueryTarget(r.targetId)||await Hg(i.localStore,r.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(r.targetId),n&&c_(i.remoteStore,r.targetId),Wg(i,r.targetId)}).catch(vl)):(Wg(i,r.targetId),await Hg(i.localStore,r.targetId,!0))}async function sH(e,t){const n=Ke(e),i=n.xa.get(t),r=n.Oa.get(i.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),c_(n.remoteStore,i.targetId))}async function oH(e,t,n){const i=hH(e);try{const r=await function(o,a){const l=Ke(o),u=en.now(),c=a.reduce((m,g)=>m.add(g.key),Ze());let d,f;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let g=Br(),y=Ze();return l.hs.getEntries(m,c).next(p=>{g=p,g.forEach((S,w)=>{w.isValidDocument()||(y=y.add(S))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,g)).next(p=>{d=p;const S=[];for(const w of a){const T=SU(w,d.get(w.key).overlayedDocument);T!=null&&S.push(new Ho(w.key,T,LA(T.value.mapValue),Fi.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,S,a)}).next(p=>{f=p;const S=p.applyToLocalDocumentSet(d,y);return l.documentOverlayCache.saveOverlays(m,p.batchId,S)})}).then(()=>({batchId:f.batchId,changes:YA(d)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(r.batchId),function(o,a,l){let u=o.qa[o.currentUser.toKey()];u||(u=new nn(tt)),u=u.insert(a,l),o.qa[o.currentUser.toKey()]=u}(i,r.batchId,n),await Ic(i,r.changes),await Hh(i.remoteStore)}catch(r){const s=v_(r,"Failed to persist write");n.reject(s)}}async function AP(e,t){const n=Ke(e);try{const i=await y4(n.localStore,t);t.targetChanges.forEach((r,s)=>{const o=n.Ba.get(s);o&&(pt(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Fa=!0:r.modifiedDocuments.size>0?pt(o.Fa):r.removedDocuments.size>0&&(pt(o.Fa),o.Fa=!1))}),await Ic(n,i,t)}catch(i){await vl(i)}}function tT(e,t,n){const i=Ke(e);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.xa.forEach((s,o)=>{const a=o.view.ea(t);a.snapshot&&r.push(a.snapshot)}),function(o,a){const l=Ke(o);l.onlineState=a;let u=!1;l.queries.forEach((c,d)=>{for(const f of d.J_)f.ea(a)&&(u=!0)}),u&&g_(l)}(i.eventManager,t),r.length&&i.Ma.R_(r),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function aH(e,t,n){const i=Ke(e);i.sharedClientState.updateQueryState(t,"rejected",n);const r=i.Ba.get(t),s=r&&r.key;if(s){let o=new nn(Le.comparator);o=o.insert(s,On.newNoDocument(s,qe.min()));const a=Ze().add(s),l=new Bh(qe.min(),new Map,new nn(tt),o,a);await AP(i,l),i.La=i.La.remove(s),i.Ba.delete(t),p_(i)}else await Hg(i.localStore,t,!1).then(()=>Wg(i,t,n)).catch(vl)}async function lH(e,t){const n=Ke(e),i=t.batch.batchId;try{const r=await p4(n.localStore,t);xP(n,i,null),PP(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Ic(n,r)}catch(r){await vl(r)}}async function uH(e,t,n){const i=Ke(e);try{const r=await function(o,a){const l=Ke(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(pt(d!==null),c=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(i.localStore,t);xP(i,t,n),PP(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await Ic(i,r)}catch(r){await vl(r)}}function PP(e,t){(e.Qa.get(t)||[]).forEach(n=>{n.resolve()}),e.Qa.delete(t)}function xP(e,t,n){const i=Ke(e);let r=i.qa[i.currentUser.toKey()];if(r){const s=r.get(t);s&&(n?s.reject(n):s.resolve(),r=r.remove(t)),i.qa[i.currentUser.toKey()]=r}}function Wg(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.Oa.get(t))e.xa.delete(i),n&&e.Ma.Wa(i,n);e.Oa.delete(t),e.isPrimaryClient&&e.ka.yr(t).forEach(i=>{e.ka.containsKey(i)||RP(e,i)})}function RP(e,t){e.Na.delete(t.path.canonicalString());const n=e.La.get(t);n!==null&&(c_(e.remoteStore,n),e.La=e.La.remove(t),e.Ba.delete(n),p_(e))}function nT(e,t,n){for(const i of n)i instanceof EP?(e.ka.addReference(i.key,t),cH(e,i)):i instanceof IP?(xe("SyncEngine","Document no longer in limbo: "+i.key),e.ka.removeReference(i.key,t),e.ka.containsKey(i.key)||RP(e,i.key)):ze()}function cH(e,t){const n=t.key,i=n.path.canonicalString();e.La.get(n)||e.Na.has(i)||(xe("SyncEngine","New document in limbo: "+n),e.Na.add(i),p_(e))}function p_(e){for(;e.Na.size>0&&e.La.size<e.maxConcurrentLimboResolutions;){const t=e.Na.values().next().value;e.Na.delete(t);const n=new Le(xt.fromString(t)),i=e.Ka.next();e.Ba.set(i,new Z4(n)),e.La=e.La.insert(n,i),_P(e.remoteStore,new vs(rr(WA(n.path)),i,"TargetPurposeLimboResolution",Vh.oe))}}async function Ic(e,t,n){const i=Ke(e),r=[],s=[],o=[];i.xa.isEmpty()||(i.xa.forEach((a,l)=>{o.push(i.Ua(l,t,n).then(u=>{var c;if((u||n)&&i.isPrimaryClient){const d=u?!u.fromCache:(c=n==null?void 0:n.targetChanges.get(l.targetId))===null||c===void 0?void 0:c.current;i.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){r.push(u);const d=u_.zi(l.targetId,u);s.push(d)}}))}),await Promise.all(o),i.Ma.R_(r),await async function(l,u){const c=Ke(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>me.forEach(u,f=>me.forEach(f.Wi,m=>c.persistence.referenceDelegate.addReference(d,f.targetId,m)).next(()=>me.forEach(f.Gi,m=>c.persistence.referenceDelegate.removeReference(d,f.targetId,m)))))}catch(d){if(!gl(d))throw d;xe("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const f=d.targetId;if(!d.fromCache){const m=c.us.get(f),g=m.snapshotVersion,y=m.withLastLimboFreeSnapshotVersion(g);c.us=c.us.insert(f,y)}}}(i.localStore,s))}async function dH(e,t){const n=Ke(e);if(!n.currentUser.isEqual(t)){xe("SyncEngine","User change. New user:",t.toKey());const i=await vP(n.localStore,t);n.currentUser=t,function(s,o){s.Qa.forEach(a=>{a.forEach(l=>{l.reject(new Ve(ve.CANCELLED,o))})}),s.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await Ic(n,i.Ts)}}function fH(e,t){const n=Ke(e),i=n.Ba.get(t);if(i&&i.Fa)return Ze().add(i.key);{let r=Ze();const s=n.Oa.get(t);if(!s)return r;for(const o of s){const a=n.xa.get(o);r=r.unionWith(a.view.fa)}return r}}function VP(e){const t=Ke(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=AP.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=fH.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=aH.bind(null,t),t.Ma.R_=K4.bind(null,t.eventManager),t.Ma.Wa=Y4.bind(null,t.eventManager),t}function hH(e){const t=Ke(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=lH.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=uH.bind(null,t),t}class Bf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=$h(t.databaseInfo.databaseId),this.sharedClientState=this.za(t),this.persistence=this.ja(t),await this.persistence.start(),this.localStore=this.Ha(t),this.gcScheduler=this.Ja(t,this.localStore),this.indexBackfillerScheduler=this.Ya(t,this.localStore)}Ja(t,n){return null}Ya(t,n){return null}Ha(t){return g4(this.persistence,new m4,t.initialUser,this.serializer)}ja(t){return new mP(l_.ei,this.serializer)}za(t){return new T4}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Bf.provider={build:()=>new Bf};class mH extends Bf{constructor(t){super(),this.cacheSizeBytes=t}Ja(t,n){pt(this.persistence.referenceDelegate instanceof Lf);const i=this.persistence.referenceDelegate.garbageCollector;return new ZU(i,t.asyncQueue,n)}ja(t){const n=this.cacheSizeBytes!==void 0?Zn.withCacheSize(this.cacheSizeBytes):Zn.DEFAULT;return new mP(i=>Lf.ei(i,n),this.serializer)}}class zg{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>tT(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=dH.bind(null,this.syncEngine),await j4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new z4}()}createDatastore(t){const n=$h(t.databaseInfo.databaseId),i=function(s){return new k4(s)}(t.databaseInfo);return function(s,o,a,l){return new x4(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,i,n)}createRemoteStore(t){return function(i,r,s,o,a){return new V4(i,r,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>tT(this.syncEngine,n,0),function(){return QS.p()?new QS:new C4}())}createSyncEngine(t,n){return function(r,s,o,a,l,u,c){const d=new eH(r,s,o,a,l,u);return c&&(d.$a=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(r){const s=Ke(r);xe("RemoteStore","RemoteStore shutting down."),s.k_.add(5),await Ec(s),s.Q_.shutdown(),s.K_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}zg.provider={build:()=>new zg};/**
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
 */class vH{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Xa(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Xa(this.observer.error,t):Fr("Uncaught Error in snapshot listener:",t.toString()))}eu(){this.muted=!0}Xa(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class gH{constructor(t,n,i,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=Dn.UNAUTHENTICATED,this.clientId=MA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(i,async o=>{xe("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(i,o=>(xe("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ws;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=v_(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Tv(e,t){e.asyncQueue.verifyOperationInProgress(),xe("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async r=>{i.isEqual(r)||(await vP(t.localStore,r),i=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function iT(e,t){e.asyncQueue.verifyOperationInProgress();const n=await pH(e);xe("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(i=>XS(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>XS(t.remoteStore,r)),e._onlineComponents=t}async function pH(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){xe("FirestoreClient","Using user provided OfflineComponentProvider");try{await Tv(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(r){return r.name==="FirebaseError"?r.code===ve.FAILED_PRECONDITION||r.code===ve.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(n))throw n;Ga("Error using user provided cache. Falling back to memory cache: "+n),await Tv(e,new Bf)}}else xe("FirestoreClient","Using default OfflineComponentProvider"),await Tv(e,new mH(void 0));return e._offlineComponents}async function DP(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(xe("FirestoreClient","Using user provided OnlineComponentProvider"),await iT(e,e._uninitializedComponentsProvider._online)):(xe("FirestoreClient","Using default OnlineComponentProvider"),await iT(e,new zg))),e._onlineComponents}function yH(e){return DP(e).then(t=>t.syncEngine)}async function _H(e){const t=await DP(e),n=t.eventManager;return n.onListen=tH.bind(null,t.syncEngine),n.onUnlisten=rH.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=nH.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=sH.bind(null,t.syncEngine),n}function bH(e,t,n={}){const i=new ws;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new vH({next:f=>{c.eu(),o.enqueueAndForget(()=>G4(s,d)),f.fromCache&&l.source==="server"?u.reject(new Ve(ve.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(f)},error:f=>u.reject(f)}),d=new Q4(a,c,{includeMetadataChanges:!0,ua:!0});return q4(s,d)}(await _H(e),e.asyncQueue,t,n,i)),i.promise}/**
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
 */function MP(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const rT=new Map;/**
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
 */function NP(e,t,n){if(!n)throw new Ve(ve.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function wH(e,t,n,i){if(t===!0&&i===!0)throw new Ve(ve.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function sT(e){if(!Le.isDocumentKey(e))throw new Ve(ve.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function oT(e){if(Le.isDocumentKey(e))throw new Ve(ve.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function jh(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":ze()}function So(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ve(ve.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=jh(e);throw new Ve(ve.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function SH(e,t){if(t<=0)throw new Ve(ve.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
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
 */class aT{constructor(t){var n,i;if(t.host===void 0){if(t.ssl!==void 0)throw new Ve(ve.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Ve(ve.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}wH("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=MP((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Ve(ve.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Ve(ve.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Ve(ve.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Wh{constructor(t,n,i,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new aT({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ve(ve.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new Ve(ve.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new aT(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new P$;switch(i.type){case"firstParty":return new D$(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new Ve(ve.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=rT.get(n);i&&(xe("ComponentProvider","Removing Datastore"),rT.delete(n),i.terminate())}(this),Promise.resolve()}}function TH(e,t,n,i={}){var r;const s=(e=So(e,Wh))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ga("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let a,l;if(typeof i.mockUserToken=="string")a=i.mockUserToken,l=Dn.MOCK_USER;else{a=pA(i.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new Ve(ve.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Dn(u)}e._authCredentials=new x$(new DA(a,l))}}/**
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
 */class Us{constructor(t,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new Us(this.firestore,t,this._query)}}class di{constructor(t,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ts(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new di(this.firestore,t,this._key)}}class Ts extends Us{constructor(t,n,i){super(t,n,WA(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new di(this.firestore,null,new Le(t))}withConverter(t){return new Ts(this.firestore,t,this._path)}}function hne(e,t,...n){if(e=En(e),NP("collection","path",t),e instanceof Wh){const i=xt.fromString(t,...n);return oT(i),new Ts(e,null,i)}{if(!(e instanceof di||e instanceof Ts))throw new Ve(ve.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(xt.fromString(t,...n));return oT(i),new Ts(e.firestore,null,i)}}function CH(e,t,...n){if(e=En(e),arguments.length===1&&(t=MA.newId()),NP("doc","path",t),e instanceof Wh){const i=xt.fromString(t,...n);return sT(i),new di(e,null,new Le(i))}{if(!(e instanceof di||e instanceof Ts))throw new Ve(ve.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(xt.fromString(t,...n));return sT(i),new di(e.firestore,e instanceof Ts?e.converter:null,new Le(i))}}/**
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
 */class lT{constructor(t=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new pP(this,"async_queue_retry"),this.fu=()=>{const i=Sv();i&&xe("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=t;const n=Sv();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.yu(t)}enterRestrictedMode(t){if(!this.Eu){this.Eu=!0,this.Vu=t||!1;const n=Sv();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(t){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new ws;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Iu.push(t),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(t){if(!gl(t))throw t;xe("AsyncQueue","Operation failed with retryable error: "+t)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(t){const n=this.gu.then(()=>(this.Ru=!0,t().catch(i=>{this.Au=i,this.Ru=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw Fr("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Ru=!1,i))));return this.gu=n,n}enqueueAfterDelay(t,n,i){this.pu(),this.mu.indexOf(t)>-1&&(n=0);const r=m_.createAndSchedule(this,t,n,i,s=>this.Su(s));return this.du.push(r),r}pu(){this.Au&&ze()}verifyOperationInProgress(){}async bu(){let t;do t=this.gu,await t;while(t!==this.gu)}Du(t){for(const n of this.du)if(n.timerId===t)return!0;return!1}vu(t){return this.bu().then(()=>{this.du.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.du)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.bu()})}Cu(t){this.mu.push(t)}Su(t){const n=this.du.indexOf(t);this.du.splice(n,1)}}class kc extends Wh{constructor(t,n,i,r){super(t,n,i,r),this.type="firestore",this._queue=new lT,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new lT(t),this._firestoreClient=void 0,await t}}}function EH(e,t){const n=typeof e=="object"?e:Qy(),i=typeof e=="string"?e:"(default)",r=Yy(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=vA("firestore");s&&TH(r,...s)}return r}function OP(e){if(e._terminated)throw new Ve(ve.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||IH(e),e._firestoreClient}function IH(e){var t,n,i;const r=e._freezeSettings(),s=function(a,l,u,c){return new K$(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,MP(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,r);e._componentsProvider||!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(e._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),e._firestoreClient=new gH(e._authCredentials,e._appCheckCredentials,e._queue,s,e._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(e._componentsProvider))}/**
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
 */class Za{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Za(In.fromBase64String(t))}catch(n){throw new Ve(ve.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Za(In.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class y_{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new Ve(ve.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Cn(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class LP{constructor(t){this._methodName=t}}/**
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
 */class zh{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new Ve(ve.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new Ve(ve.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return tt(this._lat,t._lat)||tt(this._long,t._long)}}/**
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
 */class __{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,r){if(i.length!==r.length)return!1;for(let s=0;s<i.length;++s)if(i[s]!==r[s])return!1;return!0}(this._values,t._values)}}/**
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
 */const kH=/^__.*__$/;class AH{constructor(t,n,i){this.data=t,this.fieldMask=n,this.fieldTransforms=i}toMutation(t,n){return this.fieldMask!==null?new Ho(t,this.data,this.fieldMask,n,this.fieldTransforms):new Tc(t,this.data,n,this.fieldTransforms)}}function FP(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ze()}}class b_{constructor(t,n,i,r,s,o){this.settings=t,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(t){return new b_(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.xu({path:i,Nu:!1});return r.Lu(t),r}Bu(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.xu({path:i,Nu:!1});return r.Fu(),r}ku(t){return this.xu({path:void 0,Nu:!0})}qu(t){return $f(t,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Lu(this.path.get(t))}Lu(t){if(t.length===0)throw this.qu("Document fields must not be empty");if(FP(this.Mu)&&kH.test(t))throw this.qu('Document fields cannot begin and end with "__"')}}class PH{constructor(t,n,i){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=i||$h(t)}$u(t,n,i,r=!1){return new b_({Mu:t,methodName:n,Ku:i,path:Cn.emptyPath(),Nu:!1,Qu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function w_(e){const t=e._freezeSettings(),n=$h(e._databaseId);return new PH(e._databaseId,!!t.ignoreUndefinedProperties,n)}function BP(e,t,n,i,r,s={}){const o=e.$u(s.merge||s.mergeFields?2:0,t,n,r);HP("Data must be an object, but it was:",o,i);const a=$P(i,o);let l,u;if(s.merge)l=new Ni(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const f=RH(t,d,n);if(!o.contains(f))throw new Ve(ve.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);DH(c,f)||c.push(f)}l=new Ni(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new AH(new Ti(a),l,u)}function xH(e,t,n,i=!1){return S_(n,e.$u(i?4:3,t))}function S_(e,t){if(UP(e=En(e)))return HP("Unsupported field value:",t,e),$P(e,t);if(e instanceof LP)return function(i,r){if(!FP(r.Mu))throw r.qu(`${i._methodName}() can only be used with update() and set()`);if(!r.path)throw r.qu(`${i._methodName}() is not currently supported inside arrays`);const s=i._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Nu&&t.Mu!==4)throw t.qu("Nested arrays are not supported");return function(i,r){const s=[];let o=0;for(const a of i){let l=S_(a,r.ku(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(e,t)}return function(i,r){if((i=En(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return gU(r.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const s=en.fromDate(i);return{timestampValue:Of(r.serializer,s)}}if(i instanceof en){const s=new en(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Of(r.serializer,s)}}if(i instanceof zh)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Za)return{bytesValue:aP(r.serializer,i._byteString)};if(i instanceof di){const s=r.databaseId,o=i.firestore._databaseId;if(!o.isEqual(s))throw r.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:o_(i.firestore._databaseId||r.databaseId,i._key.path)}}if(i instanceof __)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.qu("VectorValues must only contain numeric values.");return n_(a.serializer,l)})}}}}}}(i,r);throw r.qu(`Unsupported field value: ${jh(i)}`)}(e,t)}function $P(e,t){const n={};return NA(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):$o(e,(i,r)=>{const s=S_(r,t.Ou(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function UP(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof en||e instanceof zh||e instanceof Za||e instanceof di||e instanceof LP||e instanceof __)}function HP(e,t,n){if(!UP(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const i=jh(n);throw i==="an object"?t.qu(e+" a custom object"):t.qu(e+" "+i)}}function RH(e,t,n){if((t=En(t))instanceof y_)return t._internalPath;if(typeof t=="string")return jP(e,t);throw $f("Field path arguments must be of type string or ",e,!1,void 0,n)}const VH=new RegExp("[~\\*/\\[\\]]");function jP(e,t,n){if(t.search(VH)>=0)throw $f(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new y_(...t.split("."))._internalPath}catch{throw $f(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function $f(e,t,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new Ve(ve.INVALID_ARGUMENT,a+e+l)}function DH(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class WP{constructor(t,n,i,r,s){this._firestore=t,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new di(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new MH(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(T_("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class MH extends WP{data(){return super.data()}}function T_(e,t){return typeof t=="string"?jP(e,t):t instanceof y_?t._internalPath:t._delegate._internalPath}/**
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
 */function NH(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new Ve(ve.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class C_{}class E_ extends C_{}function mne(e,t,...n){let i=[];t instanceof C_&&i.push(t),i=i.concat(n),function(s){const o=s.filter(l=>l instanceof k_).length,a=s.filter(l=>l instanceof I_).length;if(o>1||o>0&&a>0)throw new Ve(ve.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const r of i)e=r._apply(e);return e}class I_ extends E_{constructor(t,n,i){super(),this._field=t,this._op=n,this._value=i,this.type="where"}static _create(t,n,i){return new I_(t,n,i)}_apply(t){const n=this._parse(t);return zP(t._query,n),new Us(t.firestore,t.converter,Lg(t._query,n))}_parse(t){const n=w_(t.firestore);return function(s,o,a,l,u,c,d){let f;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new Ve(ve.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){cT(d,c);const m=[];for(const g of d)m.push(uT(l,s,g));f={arrayValue:{values:m}}}else f=uT(l,s,d)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||cT(d,c),f=xH(a,o,d,c==="in"||c==="not-in");return Zt.create(u,c,f)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class k_ extends C_{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new k_(t,n)}_parse(t){const n=this._queryConstraints.map(i=>i._parse(t)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:ji.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(r,s){let o=r;const a=s.getFlattenedFilters();for(const l of a)zP(o,l),o=Lg(o,l)}(t._query,n),new Us(t.firestore,t.converter,Lg(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class A_ extends E_{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new A_(t,n)}_apply(t){const n=function(r,s,o){if(r.startAt!==null)throw new Ve(ve.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new Ve(ve.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ju(s,o)}(t._query,this._field,this._direction);return new Us(t.firestore,t.converter,function(r,s){const o=r.explicitOrderBy.concat([s]);return new pl(r.path,r.collectionGroup,o,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(t._query,n))}}function vne(e,t="asc"){const n=t,i=T_("orderBy",e);return A_._create(i,n)}class P_ extends E_{constructor(t,n,i){super(),this.type=t,this._limit=n,this._limitType=i}static _create(t,n,i){return new P_(t,n,i)}_apply(t){return new Us(t.firestore,t.converter,Df(t._query,this._limit,this._limitType))}}function gne(e){return SH("limit",e),P_._create("limit",e,"F")}function uT(e,t,n){if(typeof(n=En(n))=="string"){if(n==="")throw new Ve(ve.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zA(t)&&n.indexOf("/")!==-1)throw new Ve(ve.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=t.path.child(xt.fromString(n));if(!Le.isDocumentKey(i))throw new Ve(ve.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return xS(e,new Le(i))}if(n instanceof di)return xS(e,n._key);throw new Ve(ve.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${jh(n)}.`)}function cT(e,t){if(!Array.isArray(e)||e.length===0)throw new Ve(ve.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function zP(e,t){const n=function(r,s){for(const o of r)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new Ve(ve.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Ve(ve.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class OH{convertValue(t,n="none"){switch(Rs(t)){case 0:return null;case 1:return t.booleanValue;case 2:return zt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(xs(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw ze()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const i={};return $o(t,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertVectorValue(t){var n,i,r;const s=(r=(i=(n=t.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||i===void 0?void 0:i.values)===null||r===void 0?void 0:r.map(o=>zt(o.doubleValue));return new __(s)}convertGeoPoint(t){return new zh(zt(t.latitude),zt(t.longitude))}convertArray(t,n){return(t.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(t,n){switch(n){case"previous":const i=Mh(t);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp($u(t));default:return null}}convertTimestamp(t){const n=Ps(t);return new en(n.seconds,n.nanos)}convertDocumentKey(t,n){const i=xt.fromString(t);pt(hP(i));const r=new Uu(i.get(1),i.get(3)),s=new Le(i.popFirst(5));return r.isEqual(n)||Fr(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function qP(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}/**
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
 */class _d{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class LH extends WP{constructor(t,n,i,r,s,o){super(t,n,i,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new zd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const i=this._document.data.field(T_("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class zd extends LH{data(t={}){return super.data(t)}}class FH{constructor(t,n,i,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new _d(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(i=>{t.call(n,new zd(this._firestore,this._userDataWriter,i.key,i,new _d(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Ve(ve.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const l=new zd(r._firestore,r._userDataWriter,a.doc.key,a.doc,new _d(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new zd(r._firestore,r._userDataWriter,a.doc.key,a.doc,new _d(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:BH(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function BH(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ze()}}class $H extends OH{constructor(t){super(),this.firestore=t}convertBytes(t){return new Za(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new di(this.firestore,null,n)}}function pne(e){e=So(e,Us);const t=So(e.firestore,kc),n=OP(t),i=new $H(t);return NH(e._query),bH(n,e._query).then(r=>new FH(t,i,e,r))}function yne(e,t,n){e=So(e,di);const i=So(e.firestore,kc),r=qP(e.converter,t,n);return x_(i,[BP(w_(i),"setDoc",e._key,r,e.converter!==null,n).toMutation(e._key,Fi.none())])}function _ne(e){return x_(So(e.firestore,kc),[new i_(e._key,Fi.none())])}function bne(e,t){const n=So(e.firestore,kc),i=CH(e),r=qP(e.converter,t);return x_(n,[BP(w_(e.firestore),"addDoc",i._key,r,e.converter!==null,{}).toMutation(i._key,Fi.exists(!1))]).then(()=>i)}function x_(e,t){return function(i,r){const s=new ws;return i.asyncQueue.enqueueAndForget(async()=>oH(await yH(i),r,s)),s.promise}(OP(e),t)}(function(t,n=!0){(function(r){ml=r})($s),ur(new Hi("firestore",(i,{instanceIdentifier:r,options:s})=>{const o=i.getProvider("app").getImmediate(),a=new kc(new R$(i.getProvider("auth-internal")),new N$(i.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Ve(ve.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Uu(u.options.projectId,c)}(o,r),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),ci(CS,"4.7.5",t),ci(CS,"4.7.5","esm2017")})();function dT(e){const t=HH(e),n=new ArrayBuffer(t.length),i=new DataView(n);for(let r=0;r<n.byteLength;r++)i.setUint8(r,t.charCodeAt(r));return n}const UH="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function HH(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,i=0;for(let r=0;r<e.length;r++)n<<=6,n|=UH.indexOf(e[r]),i+=6,i===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=i=0);return i===12?(n>>=4,t+=String.fromCharCode(n)):i===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const jH=-1,WH=-2,zH=-3,qH=-4,GH=-5,KH=-6;function YH(e,t){return QH(JSON.parse(e),t)}function QH(e,t){if(typeof e=="number")return r(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,i=Array(n.length);function r(s,o=!1){if(s===jH)return;if(s===zH)return NaN;if(s===qH)return 1/0;if(s===GH)return-1/0;if(s===KH)return-0;if(o)throw new Error("Invalid input");if(s in i)return i[s];const a=n[s];if(!a||typeof a!="object")i[s]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],u=t==null?void 0:t[l];if(u)return i[s]=u(r(a[1]));switch(l){case"Date":i[s]=new Date(a[1]);break;case"Set":const c=new Set;i[s]=c;for(let m=1;m<a.length;m+=1)c.add(r(a[m]));break;case"Map":const d=new Map;i[s]=d;for(let m=1;m<a.length;m+=2)d.set(r(a[m]),r(a[m+1]));break;case"RegExp":i[s]=new RegExp(a[1],a[2]);break;case"Object":i[s]=Object(a[1]);break;case"BigInt":i[s]=BigInt(a[1]);break;case"null":const f=Object.create(null);i[s]=f;for(let m=1;m<a.length;m+=2)f[a[m]]=r(a[m+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const m=globalThis[l],g=a[1],y=dT(g),p=new m(y);i[s]=p;break}case"ArrayBuffer":{const m=a[1],g=dT(m);i[s]=g;break}default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);i[s]=l;for(let u=0;u<a.length;u+=1){const c=a[u];c!==WH&&(l[u]=r(c))}}else{const l={};i[s]=l;for(const u in a){const c=a[u];l[u]=r(c)}}return i[s]}return r(0)}const XH=new Set(["title","titleTemplate","script","style","noscript"]),qd=new Set(["base","meta","link","style","script","noscript"]),JH=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),ZH=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),GP=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),ej=typeof window<"u";function Uf(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function qg(e){if(e._h)return e._h;if(e._d)return Uf(e._d);let t=`${e.tag}:${e.textContent||e.innerHTML||""}:`;for(const n in e.props)t+=`${n}:${String(e.props[n])},`;return Uf(t)}function tj(e,t){return e instanceof Promise?e.then(t):t(e)}function Gg(e,t,n,i){const r=i||YP(typeof t=="object"&&typeof t!="function"&&!(t instanceof Promise)?{...t}:{[e==="script"||e==="noscript"||e==="style"?"innerHTML":"textContent"]:t},e==="templateParams"||e==="titleTemplate");if(r instanceof Promise)return r.then(o=>Gg(e,t,n,o));const s={tag:e,props:r};for(const o of GP){const a=s.props[o]!==void 0?s.props[o]:n[o];a!==void 0&&((!(o==="innerHTML"||o==="textContent"||o==="children")||XH.has(s.tag))&&(s[o==="children"?"innerHTML":o]=a),delete s.props[o])}return s.props.body&&(s.tagPosition="bodyClose",delete s.props.body),s.tag==="script"&&typeof s.innerHTML=="object"&&(s.innerHTML=JSON.stringify(s.innerHTML),s.props.type=s.props.type||"application/json"),Array.isArray(s.props.content)?s.props.content.map(o=>({...s,props:{...s.props,content:o}})):s}function nj(e,t){var i;const n=e==="class"?" ":";";return t&&typeof t=="object"&&!Array.isArray(t)&&(t=Object.entries(t).filter(([,r])=>r).map(([r,s])=>e==="style"?`${r}:${s}`:r)),(i=String(Array.isArray(t)?t.join(n):t))==null?void 0:i.split(n).filter(r=>!!r.trim()).join(n)}function KP(e,t,n,i){for(let r=i;r<n.length;r+=1){const s=n[r];if(s==="class"||s==="style"){e[s]=nj(s,e[s]);continue}if(e[s]instanceof Promise)return e[s].then(o=>(e[s]=o,KP(e,t,n,r)));if(!t&&!GP.has(s)){const o=String(e[s]),a=s.startsWith("data-");o==="true"||o===""?e[s]=a?"true":!0:e[s]||(a&&o==="false"?e[s]="false":delete e[s])}}}function YP(e,t=!1){const n=KP(e,t,Object.keys(e),0);return n instanceof Promise?n.then(()=>e):e}const ij=10;function QP(e,t,n){for(let i=n;i<t.length;i+=1){const r=t[i];if(r instanceof Promise)return r.then(s=>(t[i]=s,QP(e,t,i)));Array.isArray(r)?e.push(...r):e.push(r)}}function rj(e){const t=[],n=e.resolvedInput;for(const r in n){if(!Object.prototype.hasOwnProperty.call(n,r))continue;const s=n[r];if(!(s===void 0||!JH.has(r))){if(Array.isArray(s)){for(const o of s)t.push(Gg(r,o,e));continue}t.push(Gg(r,s,e))}}if(t.length===0)return[];const i=[];return tj(QP(i,t,0),()=>i.map((r,s)=>(r._e=e._i,e.mode&&(r._m=e.mode),r._p=(e._i<<ij)+s,r)))}const fT=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),hT={base:-10,title:10},mT={critical:-80,high:-10,low:20};function Hf(e){const t=e.tagPriority;if(typeof t=="number")return t;let n=100;return e.tag==="meta"?e.props["http-equiv"]==="content-security-policy"?n=-30:e.props.charset?n=-20:e.props.name==="viewport"&&(n=-15):e.tag==="link"&&e.props.rel==="preconnect"?n=20:e.tag in hT&&(n=hT[e.tag]),t&&t in mT?n+mT[t]:n}const sj=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],oj=["name","property","http-equiv"];function XP(e){const{props:t,tag:n}=e;if(ZH.has(n))return n;if(n==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";if(t.id)return`${n}:id:${t.id}`;for(const i of oj)if(t[i]!==void 0)return`${n}:${i}:${t[i]}`;return!1}const os="%separator";function aj(e,t,n=!1){var r;let i;if(t==="s"||t==="pageTitle")i=e.pageTitle;else if(t.includes(".")){const s=t.indexOf(".");i=(r=e[t.substring(0,s)])==null?void 0:r[t.substring(s+1)]}else i=e[t];if(i!==void 0)return n?(i||"").replace(/"/g,'\\"'):i||""}const lj=new RegExp(`${os}(?:\\s*${os})*`,"g");function bd(e,t,n,i=!1){if(typeof e!="string"||!e.includes("%"))return e;let r=e;try{r=decodeURI(e)}catch{}const s=r.match(/%\w+(?:\.\w+)?/g);if(!s)return e;const o=e.includes(os);return e=e.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===os||!s.includes(a))return a;const l=aj(t,a.slice(1),i);return l!==void 0?l:a}).trim(),o&&(e.endsWith(os)&&(e=e.slice(0,-os.length)),e.startsWith(os)&&(e=e.slice(os.length)),e=e.replace(lj,n).trim()),e}function vT(e,t){return e==null?t||null:typeof e=="function"?e(t):e}async function JP(e,t={}){const n=t.document||e.resolvedOptions.document;if(!n||!e.dirty)return;const i={shouldRender:!0,tags:[]};if(await e.hooks.callHook("dom:beforeRender",i),!!i.shouldRender)return e._domUpdatePromise||(e._domUpdatePromise=new Promise(async r=>{var d;const s=(await e.resolveTags()).map(f=>({tag:f,id:qd.has(f.tag)?qg(f):f.tag,shouldRender:!0}));let o=e._dom;if(!o){o={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};const f=new Set;for(const m of["body","head"]){const g=(d=n[m])==null?void 0:d.children;for(const y of g){const p=y.tagName.toLowerCase();if(!qd.has(p))continue;const S={tag:p,props:await YP(y.getAttributeNames().reduce((V,D)=>({...V,[D]:y.getAttribute(D)}),{})),innerHTML:y.innerHTML},w=XP(S);let T=w,x=1;for(;T&&f.has(T);)T=`${w}:${x++}`;T&&(S._d=T,f.add(T)),o.elMap[y.getAttribute("data-hid")||qg(S)]=y}}}o.pendingSideEffects={...o.sideEffects},o.sideEffects={};function a(f,m,g){const y=`${f}:${m}`;o.sideEffects[y]=g,delete o.pendingSideEffects[y]}function l({id:f,$el:m,tag:g}){const y=g.tag.endsWith("Attrs");if(o.elMap[f]=m,y||(g.textContent&&g.textContent!==m.textContent&&(m.textContent=g.textContent),g.innerHTML&&g.innerHTML!==m.innerHTML&&(m.innerHTML=g.innerHTML),a(f,"el",()=>{var p;(p=o.elMap[f])==null||p.remove(),delete o.elMap[f]})),g._eventHandlers)for(const p in g._eventHandlers)Object.prototype.hasOwnProperty.call(g._eventHandlers,p)&&m.getAttribute(`data-${p}`)!==""&&((g.tag==="bodyAttrs"?n.defaultView:m).addEventListener(p.substring(2),g._eventHandlers[p].bind(m)),m.setAttribute(`data-${p}`,""));for(const p in g.props){if(!Object.prototype.hasOwnProperty.call(g.props,p))continue;const S=g.props[p],w=`attr:${p}`;if(p==="class"){if(!S)continue;for(const T of S.split(" "))y&&a(f,`${w}:${T}`,()=>m.classList.remove(T)),!m.classList.contains(T)&&m.classList.add(T)}else if(p==="style"){if(!S)continue;for(const T of S.split(";")){const x=T.indexOf(":"),V=T.substring(0,x).trim(),D=T.substring(x+1).trim();a(f,`${w}:${V}`,()=>{m.style.removeProperty(V)}),m.style.setProperty(V,D)}}else m.getAttribute(p)!==S&&m.setAttribute(p,S===!0?"":String(S)),y&&a(f,w,()=>m.removeAttribute(p))}}const u=[],c={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const f of s){const{tag:m,shouldRender:g,id:y}=f;if(g){if(m.tag==="title"){n.title=m.textContent;continue}f.$el=f.$el||o.elMap[y],f.$el?l(f):qd.has(m.tag)&&u.push(f)}}for(const f of u){const m=f.tag.tagPosition||"head";f.$el=n.createElement(f.tag.tag),l(f),c[m]=c[m]||n.createDocumentFragment(),c[m].appendChild(f.$el)}for(const f of s)await e.hooks.callHook("dom:renderTag",f,n,a);c.head&&n.head.appendChild(c.head),c.bodyOpen&&n.body.insertBefore(c.bodyOpen,n.body.firstChild),c.bodyClose&&n.body.appendChild(c.bodyClose);for(const f in o.pendingSideEffects)o.pendingSideEffects[f]();e._dom=o,await e.hooks.callHook("dom:rendered",{renders:s}),r()}).finally(()=>{e._domUpdatePromise=void 0,e.dirty=!1})),e._domUpdatePromise}function uj(e,t={}){const n=t.delayFn||(i=>setTimeout(i,10));return e._domDebouncedUpdatePromise=e._domDebouncedUpdatePromise||new Promise(i=>n(()=>JP(e,t).then(()=>{delete e._domDebouncedUpdatePromise,i()})))}function cj(e){return t=>{var i,r;const n=((r=(i=t.resolvedOptions.document)==null?void 0:i.head.querySelector('script[id="unhead:payload"]'))==null?void 0:r.innerHTML)||!1;return n&&t.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":s=>{uj(s,e)}}}}}const dj=new Set(["templateParams","htmlAttrs","bodyAttrs"]),fj={hooks:{"tag:normalise":({tag:e})=>{e.props.hid&&(e.key=e.props.hid,delete e.props.hid),e.props.vmid&&(e.key=e.props.vmid,delete e.props.vmid),e.props.key&&(e.key=e.props.key,delete e.props.key);const t=XP(e);t&&!t.startsWith("meta:og:")&&!t.startsWith("meta:twitter:")&&delete e.key;const n=t||(e.key?`${e.tag}:${e.key}`:!1);n&&(e._d=n)},"tags:resolve":e=>{const t=Object.create(null);for(const i of e.tags){const r=(i.key?`${i.tag}:${i.key}`:i._d)||qg(i),s=t[r];if(s){let a=i==null?void 0:i.tagDuplicateStrategy;if(!a&&dj.has(i.tag)&&(a="merge"),a==="merge"){const l=s.props;l.style&&i.props.style&&(l.style[l.style.length-1]!==";"&&(l.style+=";"),i.props.style=`${l.style} ${i.props.style}`),l.class&&i.props.class?i.props.class=`${l.class} ${i.props.class}`:l.class&&(i.props.class=l.class),t[r].props={...l,...i.props};continue}else if(i._e===s._e){s._duped=s._duped||[],i._d=`${s._d}:${s._duped.length+1}`,s._duped.push(i);continue}else if(Hf(i)>Hf(s))continue}if(!(i.innerHTML||i.textContent||Object.keys(i.props).length!==0)&&qd.has(i.tag)){delete t[r];continue}t[r]=i}const n=[];for(const i in t){const r=t[i],s=r._duped;n.push(r),s&&(delete r._duped,n.push(...s))}e.tags=n,e.tags=e.tags.filter(i=>!(i.tag==="meta"&&(i.props.name||i.props.property)&&!i.props.content))}}},hj=new Set(["script","link","bodyAttrs"]),mj=e=>({hooks:{"tags:resolve":t=>{for(const n of t.tags){if(!hj.has(n.tag))continue;const i=n.props;for(const r in i){if(r[0]!=="o"||r[1]!=="n"||!Object.prototype.hasOwnProperty.call(i,r))continue;const s=i[r];typeof s=="function"&&(e.ssr&&fT.has(r)?i[r]=`this.dataset.${r}fired = true`:delete i[r],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[r]=s)}e.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||Uf(n.props.src||n.props.href))}},"dom:renderTag":({$el:t,tag:n})=>{var r,s;const i=t==null?void 0:t.dataset;if(i)for(const o in i){if(!o.endsWith("fired"))continue;const a=o.slice(0,-5);fT.has(a)&&((s=(r=n._eventHandlers)==null?void 0:r[a])==null||s.call(t,new Event(a.substring(2))))}}}}),vj=new Set(["link","style","script","noscript"]),gj={hooks:{"tag:normalise":({tag:e})=>{e.key&&vj.has(e.tag)&&(e.props["data-hid"]=e._h=Uf(e.key))}}},pj={mode:"server",hooks:{"tags:beforeResolve":e=>{const t={};let n=!1;for(const i of e.tags)i._m!=="server"||i.tag!=="titleTemplate"&&i.tag!=="templateParams"&&i.tag!=="title"||(t[i.tag]=i.tag==="title"||i.tag==="titleTemplate"?i.textContent:i.props,n=!0);n&&e.tags.push({tag:"script",innerHTML:JSON.stringify(t),props:{id:"unhead:payload",type:"application/json"}})}}},yj={hooks:{"tags:resolve":e=>{var t;for(const n of e.tags)if(typeof n.tagPriority=="string")for(const{prefix:i,offset:r}of sj){if(!n.tagPriority.startsWith(i))continue;const s=n.tagPriority.substring(i.length),o=(t=e.tags.find(a=>a._d===s))==null?void 0:t._p;if(o!==void 0){n._p=o+r;break}}e.tags.sort((n,i)=>{const r=Hf(n),s=Hf(i);return r<s?-1:r>s?1:n._p-i._p})}}},_j={meta:"content",link:"href",htmlAttrs:"lang"},bj=["innerHTML","textContent"],wj=e=>({hooks:{"tags:resolve":t=>{var o;const{tags:n}=t;let i;for(let a=0;a<n.length;a+=1)n[a].tag==="templateParams"&&(i=t.tags.splice(a,1)[0].props,a-=1);const r=i||{},s=r.separator||"|";delete r.separator,r.pageTitle=bd(r.pageTitle||((o=n.find(a=>a.tag==="title"))==null?void 0:o.textContent)||"",r,s);for(const a of n){if(a.processTemplateParams===!1)continue;const l=_j[a.tag];if(l&&typeof a.props[l]=="string")a.props[l]=bd(a.props[l],r,s);else if(a.processTemplateParams||a.tag==="titleTemplate"||a.tag==="title")for(const u of bj)typeof a[u]=="string"&&(a[u]=bd(a[u],r,s,a.tag==="script"&&a.props.type.endsWith("json")))}e._templateParams=r,e._separator=s},"tags:afterResolve":({tags:t})=>{let n;for(let i=0;i<t.length;i+=1){const r=t[i];r.tag==="title"&&r.processTemplateParams!==!1&&(n=r)}n!=null&&n.textContent&&(n.textContent=bd(n.textContent,e._templateParams,e._separator))}}}),Sj={hooks:{"tags:resolve":e=>{const{tags:t}=e;let n,i;for(let r=0;r<t.length;r+=1){const s=t[r];s.tag==="title"?n=s:s.tag==="titleTemplate"&&(i=s)}if(i&&n){const r=vT(i.textContent,n.textContent);r!==null?n.textContent=r||n.textContent:e.tags.splice(e.tags.indexOf(n),1)}else if(i){const r=vT(i.textContent);r!==null&&(i.textContent=r,i.tag="title",i=void 0)}i&&e.tags.splice(e.tags.indexOf(i),1)}}},Tj={hooks:{"tags:afterResolve":e=>{for(const t of e.tags)typeof t.innerHTML=="string"&&(t.innerHTML&&(t.props.type==="application/ld+json"||t.props.type==="application/json")?t.innerHTML=t.innerHTML.replace(/</g,"\\u003C"):t.innerHTML=t.innerHTML.replace(new RegExp(`</${t.tag}`,"g"),`<\\/${t.tag}`))}}};let ZP;function Cj(e={}){const t=Ej(e);return t.use(cj()),ZP=t}function gT(e,t){return!e||e==="server"&&t||e==="client"&&!t}function Ej(e={}){const t=nA();t.addHooks(e.hooks||{}),e.document=e.document||(ej?document:void 0);const n=!e.document,i=()=>{a.dirty=!0,t.callHook("entries:updated",a)};let r=0,s=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:e,hooks:t,headEntries(){return s},use(l){const u=typeof l=="function"?l(a):l;(!u.key||!o.some(c=>c.key===u.key))&&(o.push(u),gT(u.mode,n)&&t.addHooks(u.hooks||{}))},push(l,u){u==null||delete u.head;const c={_i:r++,input:l,...u};return gT(c.mode,n)&&(s.push(c),i()),{dispose(){s=s.filter(d=>d._i!==c._i),i()},patch(d){for(const f of s)f._i===c._i&&(f.input=c.input=d);i()}}},async resolveTags(){const l={tags:[],entries:[...s]};await t.callHook("entries:resolve",l);for(const u of l.entries){const c=u.resolvedInput||u.input;if(u.resolvedInput=await(u.transform?u.transform(c):c),u.resolvedInput)for(const d of await rj(u)){const f={tag:d,entry:u,resolvedOptions:a.resolvedOptions};await t.callHook("tag:normalise",f),l.tags.push(f.tag)}}return await t.callHook("tags:beforeResolve",l),await t.callHook("tags:resolve",l),await t.callHook("tags:afterResolve",l),l.tags},ssr:n};return[fj,pj,mj,gj,yj,wj,Sj,Tj,...(e==null?void 0:e.plugins)||[]].forEach(l=>a.use(l)),a.hooks.callHook("init",a),a}function Ij(){return ZP}const kj=Nk[0]==="3";function Aj(e){return typeof e=="function"?e():Qe(e)}function Kg(e){if(e instanceof Promise||e instanceof Date||e instanceof RegExp)return e;const t=Aj(e);if(!e||!t)return t;if(Array.isArray(t))return t.map(n=>Kg(n));if(typeof t=="object"){const n={};for(const i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(i==="titleTemplate"||i[0]==="o"&&i[1]==="n"){n[i]=Qe(t[i]);continue}n[i]=Kg(t[i])}return n}return t}const Pj={hooks:{"entries:resolve":e=>{for(const t of e.entries)t.resolvedInput=Kg(t.input)}}},ex="usehead";function xj(e){return{install(n){kj&&(n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(ex,e))}}.install}function Rj(e={}){e.domDelayFn=e.domDelayFn||(n=>Ye(()=>setTimeout(()=>n(),0)));const t=Cj(e);return t.use(Pj),t.install=xj(t),t}const Yg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Qg="__unhead_injection_handler__";function Vj(e){Yg[Qg]=e}function wne(){if(Qg in Yg)return Yg[Qg]();const e=Fe(ex);return e||Ij()}let Gd,Kd;function Dj(){return Gd=$fetch(qy(`builds/meta/${wc().app.buildId}.json`),{responseType:"json"}),Gd.then(e=>{Kd=L2(e.matcher)}).catch(e=>{console.error("[nuxt] Error fetching app manifest.",e)}),Gd}function qh(){return Gd||Dj()}async function R_(e){if(await qh(),!Kd)return console.error("[nuxt] Error creating app manifest matcher.",Kd),{};try{return aA({},...Kd.matchAll(e).reverse())}catch(t){return console.error("[nuxt] Error matching route rules.",t),{}}}async function pT(e,t={}){const n=await Nj(e,t),i=tn(),r=i._payloadCache=i._payloadCache||{};return n in r?r[n]||null:(r[n]=nx(e).then(s=>s?tx(n).then(o=>o||(delete r[n],null)):(r[n]=null,null)),r[n])}const Mj="_payload.json";async function Nj(e,t={}){const n=new URL(e,"http://localhost");if(n.host!=="localhost"||Bo(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+e);const i=wc(),r=t.hash||(t.fresh?Date.now():i.app.buildId),s=i.app.cdnURL,o=s&&await nx(e)?s:i.app.baseURL;return zy(o,n.pathname,Mj+(r?`?${r}`:""))}async function tx(e){const t=fetch(e).then(n=>n.text().then(ix));try{return await t}catch(n){console.warn("[nuxt] Cannot load payload ",e,n)}return null}async function nx(e=uA().path){if(e=Wy(e),(await qh()).prerendered.includes(e))return!0;const n=await R_(e);return!!n.prerender&&!n.redirect}let Xs=null;async function Oj(){var i;if(Xs)return Xs;const e=document.getElementById("__NUXT_DATA__");if(!e)return{};const t=await ix(e.textContent||""),n=e.dataset.src?await tx(e.dataset.src):void 0;return Xs={...t,...n,...window.__NUXT__},(i=Xs.config)!=null&&i.public&&(Xs.config.public=Ft(Xs.config.public)),Xs}async function ix(e){return await YH(e,tn()._payloadRevivers)}function Yd(e,t){tn()._payloadRevivers[e]=t}const Lj=M2(()=>{Yd("FirebaseTimestamp",e=>uf(new en(e.seconds,e.nanoseconds))),Yd("FirebaseGeoPoint",e=>uf(new zh(e.latitude,e.longitude))),Yd("DocumentData",e=>{const t=typeof e=="string"?JSON.parse(e):e,n=t.id;return delete t.id,Object.defineProperty(t,"id",{value:n})})}),Fj=[["NuxtError",e=>Ah(e)],["EmptyShallowRef",e=>ge(e==="_"?void 0:e==="0n"?BigInt(0):wf(e))],["EmptyRef",e=>re(e==="_"?void 0:e==="0n"?BigInt(0):wf(e))],["ShallowRef",e=>ge(e)],["ShallowReactive",e=>Pr(e)],["Ref",e=>re(e)],["Reactive",e=>Ft(e)]],Bj=ii({name:"nuxt:revive-payload:client",order:-30,async setup(e){let t,n;for(const[i,r]of Fj)Yd(i,r);Object.assign(e.payload,([t,n]=Oa(()=>e.runWithContext(Oj)),t=await t,n(),t)),window.__NUXT__=e.payload}}),$j=[],Uj=ii({name:"nuxt:head",enforce:"pre",setup(e){const t=Rj({plugins:$j});Vj(()=>tn().vueApp._context.provides.usehead),e.vueApp.use(t);{let n=!0;const i=async()=>{n=!1,await JP(t)};t.hooks.hook("dom:beforeRender",r=>{r.shouldRender=!n}),e.hooks.hook("page:start",()=>{n=!0}),e.hooks.hook("page:finish",()=>{e.isHydrating||i()}),e.hooks.hook("app:error",i),e.hooks.hook("app:suspense:resolve",i)}}});/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Sa=typeof document<"u";function rx(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Hj(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&rx(e.default)}const mt=Object.assign;function Cv(e,t){const n={};for(const i in t){const r=t[i];n[i]=Wi(r)?r.map(e):e(r)}return n}const bu=()=>{},Wi=Array.isArray,sx=/#/g,jj=/&/g,Wj=/\//g,zj=/=/g,qj=/\?/g,ox=/\+/g,Gj=/%5B/g,Kj=/%5D/g,ax=/%5E/g,Yj=/%60/g,lx=/%7B/g,Qj=/%7C/g,ux=/%7D/g,Xj=/%20/g;function V_(e){return encodeURI(""+e).replace(Qj,"|").replace(Gj,"[").replace(Kj,"]")}function Jj(e){return V_(e).replace(lx,"{").replace(ux,"}").replace(ax,"^")}function Xg(e){return V_(e).replace(ox,"%2B").replace(Xj,"+").replace(sx,"%23").replace(jj,"%26").replace(Yj,"`").replace(lx,"{").replace(ux,"}").replace(ax,"^")}function Zj(e){return Xg(e).replace(zj,"%3D")}function e6(e){return V_(e).replace(sx,"%23").replace(qj,"%3F")}function t6(e){return e==null?"":e6(e).replace(Wj,"%2F")}function qu(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const n6=/\/$/,i6=e=>e.replace(n6,"");function Ev(e,t,n="/"){let i,r={},s="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),r=e(s)),a>-1&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=a6(i??t,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:qu(o)}}function r6(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function yT(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function s6(e,t,n){const i=t.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&el(t.matched[i],n.matched[r])&&cx(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function el(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function cx(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!o6(e[n],t[n]))return!1;return!0}function o6(e,t){return Wi(e)?_T(e,t):Wi(t)?_T(t,e):e===t}function _T(e,t){return Wi(t)?e.length===t.length&&e.every((n,i)=>n===t[i]):e.length===1&&e[0]===t}function a6(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const Vi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Gu;(function(e){e.pop="pop",e.push="push"})(Gu||(Gu={}));var wu;(function(e){e.back="back",e.forward="forward",e.unknown=""})(wu||(wu={}));function l6(e){if(!e)if(Sa){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),i6(e)}const u6=/^[^#]+#/;function c6(e,t){return e.replace(u6,"#")+t}function d6(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const Gh=()=>({left:window.scrollX,top:window.scrollY});function f6(e){let t;if("el"in e){const n=e.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=d6(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function bT(e,t){return(history.state?history.state.position-t:-1)+e}const Jg=new Map;function h6(e,t){Jg.set(e,t)}function m6(e){const t=Jg.get(e);return Jg.delete(e),t}let v6=()=>location.protocol+"//"+location.host;function dx(e,t){const{pathname:n,search:i,hash:r}=t,s=e.indexOf("#");if(s>-1){let a=r.includes(e.slice(s))?e.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),yT(l,"")}return yT(n,e)+i+r}function g6(e,t,n,i){let r=[],s=[],o=null;const a=({state:f})=>{const m=dx(e,location),g=n.value,y=t.value;let p=0;if(f){if(n.value=m,t.value=f,o&&o===g){o=null;return}p=y?f.position-y.position:0}else i(m);r.forEach(S=>{S(n.value,g,{delta:p,type:Gu.pop,direction:p?p>0?wu.forward:wu.back:wu.unknown})})};function l(){o=n.value}function u(f){r.push(f);const m=()=>{const g=r.indexOf(f);g>-1&&r.splice(g,1)};return s.push(m),m}function c(){const{history:f}=window;f.state&&f.replaceState(mt({},f.state,{scroll:Gh()}),"")}function d(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function wT(e,t,n,i=!1,r=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:r?Gh():null}}function p6(e){const{history:t,location:n}=window,i={value:dx(e,n)},r={value:t.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,u,c){const d=e.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:v6()+e+l;try{t[c?"replaceState":"pushState"](u,"",f),r.value=u}catch(m){console.error(m),n[c?"replace":"assign"](f)}}function o(l,u){const c=mt({},t.state,wT(r.value.back,l,r.value.forward,!0),u,{position:r.value.position});s(l,c,!0),i.value=l}function a(l,u){const c=mt({},r.value,t.state,{forward:l,scroll:Gh()});s(c.current,c,!0);const d=mt({},wT(i.value,l,null),{position:c.position+1},u);s(l,d,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function fx(e){e=l6(e);const t=p6(e),n=g6(e,t.state,t.location,t.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=mt({location:"",base:e,go:i,createHref:c6.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function y6(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),fx(e)}function _6(e){return typeof e=="string"||e&&typeof e=="object"}function hx(e){return typeof e=="string"||typeof e=="symbol"}const mx=Symbol("");var ST;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ST||(ST={}));function tl(e,t){return mt(new Error,{type:e,[mx]:!0},t)}function Cr(e,t){return e instanceof Error&&mx in e&&(t==null||!!(e.type&t))}const TT="[^/]+?",b6={sensitive:!1,strict:!1,start:!0,end:!0},w6=/[.+*?^${}()[\]/\\]/g;function S6(e,t){const n=mt({},b6,t),i=[];let r=n.start?"^":"";const s=[];for(const u of e){const c=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const f=u[d];let m=40+(n.sensitive?.25:0);if(f.type===0)d||(r+="/"),r+=f.value.replace(w6,"\\$&"),m+=40;else if(f.type===1){const{value:g,repeatable:y,optional:p,regexp:S}=f;s.push({name:g,repeatable:y,optional:p});const w=S||TT;if(w!==TT){m+=10;try{new RegExp(`(${w})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${g}" (${w}): `+x.message)}}let T=y?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;d||(T=p&&u.length<2?`(?:/${T})`:"/"+T),p&&(T+="?"),r+=T,m+=20,p&&(m+=-8),y&&(m+=-20),w===".*"&&(m+=-50)}c.push(m)}i.push(c)}if(n.strict&&n.end){const u=i.length-1;i[u][i[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const c=u.match(o),d={};if(!c)return null;for(let f=1;f<c.length;f++){const m=c[f]||"",g=s[f-1];d[g.name]=m&&g.repeatable?m.split("/"):m}return d}function l(u){let c="",d=!1;for(const f of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const m of f)if(m.type===0)c+=m.value;else if(m.type===1){const{value:g,repeatable:y,optional:p}=m,S=g in u?u[g]:"";if(Wi(S)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const w=Wi(S)?S.join("/"):S;if(!w)if(p)f.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);c+=w}}return c||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function T6(e,t){let n=0;for(;n<e.length&&n<t.length;){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function vx(e,t){let n=0;const i=e.score,r=t.score;for(;n<i.length&&n<r.length;){const s=T6(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(CT(i))return 1;if(CT(r))return-1}return r.length-i.length}function CT(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const C6={type:0,value:""},E6=/[a-zA-Z0-9_]/;function I6(e){if(!e)return[[]];if(e==="/")return[[C6]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,u="",c="";function d(){u&&(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function f(){u+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(u&&d(),o()):l===":"?(d(),n=1):f();break;case 4:f(),n=i;break;case 1:l==="("?n=2:E6.test(l)?f():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),d(),o(),r}function k6(e,t,n){const i=S6(I6(e.path),n),r=mt(i,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function A6(e,t){const n=[],i=new Map;t=AT({strict:!1,end:!0,sensitive:!1},t);function r(d){return i.get(d)}function s(d,f,m){const g=!m,y=IT(d);y.aliasOf=m&&m.record;const p=AT(t,d),S=[y];if("alias"in d){const x=typeof d.alias=="string"?[d.alias]:d.alias;for(const V of x)S.push(IT(mt({},y,{components:m?m.record.components:y.components,path:V,aliasOf:m?m.record:y})))}let w,T;for(const x of S){const{path:V}=x;if(f&&V[0]!=="/"){const D=f.record.path,A=D[D.length-1]==="/"?"":"/";x.path=f.record.path+(V&&A+V)}if(w=k6(x,f,p),m?m.alias.push(w):(T=T||w,T!==w&&T.alias.push(w),g&&d.name&&!kT(w)&&o(d.name)),gx(w)&&l(w),y.children){const D=y.children;for(let A=0;A<D.length;A++)s(D[A],w,m&&m.children[A])}m=m||w}return T?()=>{o(T)}:bu}function o(d){if(hx(d)){const f=i.get(d);f&&(i.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const f=R6(d,n);n.splice(f,0,d),d.record.name&&!kT(d)&&i.set(d.record.name,d)}function u(d,f){let m,g={},y,p;if("name"in d&&d.name){if(m=i.get(d.name),!m)throw tl(1,{location:d});p=m.record.name,g=mt(ET(f.params,m.keys.filter(T=>!T.optional).concat(m.parent?m.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),d.params&&ET(d.params,m.keys.map(T=>T.name))),y=m.stringify(g)}else if(d.path!=null)y=d.path,m=n.find(T=>T.re.test(y)),m&&(g=m.parse(y),p=m.record.name);else{if(m=f.name?i.get(f.name):n.find(T=>T.re.test(f.path)),!m)throw tl(1,{location:d,currentLocation:f});p=m.record.name,g=mt({},f.params,d.params),y=m.stringify(g)}const S=[];let w=m;for(;w;)S.unshift(w.record),w=w.parent;return{name:p,path:y,params:g,matched:S,meta:x6(S)}}e.forEach(d=>s(d));function c(){n.length=0,i.clear()}return{addRoute:s,resolve:u,removeRoute:o,clearRoutes:c,getRoutes:a,getRecordMatcher:r}}function ET(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function IT(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:P6(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function P6(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]=typeof n=="object"?n[i]:n;return t}function kT(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function x6(e){return e.reduce((t,n)=>mt(t,n.meta),{})}function AT(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function R6(e,t){let n=0,i=t.length;for(;n!==i;){const s=n+i>>1;vx(e,t[s])<0?i=s:n=s+1}const r=V6(e);return r&&(i=t.lastIndexOf(r,i-1)),i}function V6(e){let t=e;for(;t=t.parent;)if(gx(t)&&vx(e,t)===0)return t}function gx({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function D6(e){const t={};if(e===""||e==="?")return t;const i=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(ox," "),o=s.indexOf("="),a=qu(o<0?s:s.slice(0,o)),l=o<0?null:qu(s.slice(o+1));if(a in t){let u=t[a];Wi(u)||(u=t[a]=[u]),u.push(l)}else t[a]=l}return t}function PT(e){let t="";for(let n in e){const i=e[n];if(n=Zj(n),i==null){i!==void 0&&(t+=(t.length?"&":"")+n);continue}(Wi(i)?i.map(s=>s&&Xg(s)):[i&&Xg(i)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function M6(e){const t={};for(const n in e){const i=e[n];i!==void 0&&(t[n]=Wi(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return t}const N6=Symbol(""),xT=Symbol(""),D_=Symbol(""),M_=Symbol(""),Zg=Symbol("");function Kl(){let e=[];function t(i){return e.push(i),()=>{const r=e.indexOf(i);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function as(e,t,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const u=f=>{f===!1?l(tl(4,{from:n,to:t})):f instanceof Error?l(f):_6(f)?l(tl(2,{from:t,to:f})):(o&&i.enterCallbacks[r]===o&&typeof f=="function"&&o.push(f),a())},c=s(()=>e.call(i&&i.instances[r],t,n,u));let d=Promise.resolve(c);e.length<3&&(d=d.then(u)),d.catch(f=>l(f))})}function Iv(e,t,n,i,r=s=>s()){const s=[];for(const o of e)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(rx(l)){const c=(l.__vccOpts||l)[t];c&&s.push(as(c,n,i,o,a,r))}else{let u=l();s.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=Hj(c)?c.default:c;o.mods[a]=c,o.components[a]=d;const m=(d.__vccOpts||d)[t];return m&&as(m,n,i,o,a,r)()}))}}return s}function RT(e){const t=Fe(D_),n=Fe(M_),i=P(()=>{const l=Qe(e.to);return t.resolve(l)}),r=P(()=>{const{matched:l}=i.value,{length:u}=l,c=l[u-1],d=n.matched;if(!c||!d.length)return-1;const f=d.findIndex(el.bind(null,c));if(f>-1)return f;const m=VT(l[u-2]);return u>1&&VT(c)===m&&d[d.length-1].path!==m?d.findIndex(el.bind(null,l[u-2])):f}),s=P(()=>r.value>-1&&$6(n.params,i.value.params)),o=P(()=>r.value>-1&&r.value===n.matched.length-1&&cx(n.params,i.value.params));function a(l={}){if(B6(l)){const u=t[Qe(e.replace)?"replace":"push"](Qe(e.to)).catch(bu);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:i,href:P(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function O6(e){return e.length===1?e[0]:e}const L6=Fo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:RT,setup(e,{slots:t}){const n=Ft(RT(e)),{options:i}=Fe(D_),r=P(()=>({[DT(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[DT(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&O6(t.default(n));return e.custom?s:qt("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),F6=L6;function B6(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function $6(e,t){for(const n in t){const i=t[n],r=e[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Wi(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function VT(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const DT=(e,t,n)=>e??t??n,U6=Fo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=Fe(Zg),r=P(()=>e.route||i.value),s=Fe(xT,0),o=P(()=>{let u=Qe(s);const{matched:c}=r.value;let d;for(;(d=c[u])&&!d.components;)u++;return u}),a=P(()=>r.value.matched[o.value]);lt(xT,P(()=>o.value+1)),lt(N6,a),lt(Zg,r);const l=re();return ye(()=>[l.value,a.value,e.name],([u,c,d],[f,m,g])=>{c&&(c.instances[d]=u,m&&m!==c&&u&&u===f&&(c.leaveGuards.size||(c.leaveGuards=m.leaveGuards),c.updateGuards.size||(c.updateGuards=m.updateGuards))),u&&c&&(!m||!el(c,m)||!f)&&(c.enterCallbacks[d]||[]).forEach(y=>y(u))},{flush:"post"}),()=>{const u=r.value,c=e.name,d=a.value,f=d&&d.components[c];if(!f)return MT(n.default,{Component:f,route:u});const m=d.props[c],g=m?m===!0?u.params:typeof m=="function"?m(u):m:null,p=qt(f,mt({},g,t,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return MT(n.default,{Component:p,route:u})||p}}});function MT(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const px=U6;function H6(e){const t=A6(e.routes,e),n=e.parseQuery||D6,i=e.stringifyQuery||PT,r=e.history,s=Kl(),o=Kl(),a=Kl(),l=ge(Vi);let u=Vi;Sa&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Cv.bind(null,K=>""+K),d=Cv.bind(null,t6),f=Cv.bind(null,qu);function m(K,se){let de,le;return hx(K)?(de=t.getRecordMatcher(K),le=se):le=K,t.addRoute(le,de)}function g(K){const se=t.getRecordMatcher(K);se&&t.removeRoute(se)}function y(){return t.getRoutes().map(K=>K.record)}function p(K){return!!t.getRecordMatcher(K)}function S(K,se){if(se=mt({},se||l.value),typeof K=="string"){const O=Ev(n,K,se.path),G=t.resolve({path:O.path},se),ee=r.createHref(O.fullPath);return mt(O,G,{params:f(G.params),hash:qu(O.hash),redirectedFrom:void 0,href:ee})}let de;if(K.path!=null)de=mt({},K,{path:Ev(n,K.path,se.path).path});else{const O=mt({},K.params);for(const G in O)O[G]==null&&delete O[G];de=mt({},K,{params:d(O)}),se.params=d(se.params)}const le=t.resolve(de,se),oe=K.hash||"";le.params=c(f(le.params));const Se=r6(i,mt({},K,{hash:Jj(oe),path:le.path})),N=r.createHref(Se);return mt({fullPath:Se,hash:oe,query:i===PT?M6(K.query):K.query||{}},le,{redirectedFrom:void 0,href:N})}function w(K){return typeof K=="string"?Ev(n,K,l.value.path):mt({},K)}function T(K,se){if(u!==K)return tl(8,{from:se,to:K})}function x(K){return A(K)}function V(K){return x(mt(w(K),{replace:!0}))}function D(K){const se=K.matched[K.matched.length-1];if(se&&se.redirect){const{redirect:de}=se;let le=typeof de=="function"?de(K):de;return typeof le=="string"&&(le=le.includes("?")||le.includes("#")?le=w(le):{path:le},le.params={}),mt({query:K.query,hash:K.hash,params:le.path!=null?{}:K.params},le)}}function A(K,se){const de=u=S(K),le=l.value,oe=K.state,Se=K.force,N=K.replace===!0,O=D(de);if(O)return A(mt(w(O),{state:typeof O=="object"?mt({},oe,O.state):oe,force:Se,replace:N}),se||de);const G=de;G.redirectedFrom=se;let ee;return!Se&&s6(i,le,de)&&(ee=tl(16,{to:G,from:le}),W(le,le,!0,!1)),(ee?Promise.resolve(ee):E(G,le)).catch(X=>Cr(X)?Cr(X,2)?X:j(X):F(X,G,le)).then(X=>{if(X){if(Cr(X,2))return A(mt({replace:N},w(X.to),{state:typeof X.to=="object"?mt({},oe,X.to.state):oe,force:Se}),se||G)}else X=I(G,le,!0,N,oe);return k(G,le,X),X})}function b(K,se){const de=T(K,se);return de?Promise.reject(de):Promise.resolve()}function _(K){const se=pe.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(K):K()}function E(K,se){let de;const[le,oe,Se]=j6(K,se);de=Iv(le.reverse(),"beforeRouteLeave",K,se);for(const O of le)O.leaveGuards.forEach(G=>{de.push(as(G,K,se))});const N=b.bind(null,K,se);return de.push(N),ie(de).then(()=>{de=[];for(const O of s.list())de.push(as(O,K,se));return de.push(N),ie(de)}).then(()=>{de=Iv(oe,"beforeRouteUpdate",K,se);for(const O of oe)O.updateGuards.forEach(G=>{de.push(as(G,K,se))});return de.push(N),ie(de)}).then(()=>{de=[];for(const O of Se)if(O.beforeEnter)if(Wi(O.beforeEnter))for(const G of O.beforeEnter)de.push(as(G,K,se));else de.push(as(O.beforeEnter,K,se));return de.push(N),ie(de)}).then(()=>(K.matched.forEach(O=>O.enterCallbacks={}),de=Iv(Se,"beforeRouteEnter",K,se,_),de.push(N),ie(de))).then(()=>{de=[];for(const O of o.list())de.push(as(O,K,se));return de.push(N),ie(de)}).catch(O=>Cr(O,8)?O:Promise.reject(O))}function k(K,se,de){a.list().forEach(le=>_(()=>le(K,se,de)))}function I(K,se,de,le,oe){const Se=T(K,se);if(Se)return Se;const N=se===Vi,O=Sa?history.state:{};de&&(le||N?r.replace(K.fullPath,mt({scroll:N&&O&&O.scroll},oe)):r.push(K.fullPath,oe)),l.value=K,W(K,se,de,N),j()}let R;function B(){R||(R=r.listen((K,se,de)=>{if(!Ce.listening)return;const le=S(K),oe=D(le);if(oe){A(mt(oe,{replace:!0,force:!0}),le).catch(bu);return}u=le;const Se=l.value;Sa&&h6(bT(Se.fullPath,de.delta),Gh()),E(le,Se).catch(N=>Cr(N,12)?N:Cr(N,2)?(A(mt(w(N.to),{force:!0}),le).then(O=>{Cr(O,20)&&!de.delta&&de.type===Gu.pop&&r.go(-1,!1)}).catch(bu),Promise.reject()):(de.delta&&r.go(-de.delta,!1),F(N,le,Se))).then(N=>{N=N||I(le,Se,!1),N&&(de.delta&&!Cr(N,8)?r.go(-de.delta,!1):de.type===Gu.pop&&Cr(N,20)&&r.go(-1,!1)),k(le,Se,N)}).catch(bu)}))}let $=Kl(),U=Kl(),q;function F(K,se,de){j(K);const le=U.list();return le.length?le.forEach(oe=>oe(K,se,de)):console.error(K),Promise.reject(K)}function H(){return q&&l.value!==Vi?Promise.resolve():new Promise((K,se)=>{$.add([K,se])})}function j(K){return q||(q=!K,B(),$.list().forEach(([se,de])=>K?de(K):se()),$.reset()),K}function W(K,se,de,le){const{scrollBehavior:oe}=e;if(!Sa||!oe)return Promise.resolve();const Se=!de&&m6(bT(K.fullPath,0))||(le||!de)&&history.state&&history.state.scroll||null;return Ye().then(()=>oe(K,se,Se)).then(N=>N&&f6(N)).catch(N=>F(N,K,se))}const Y=K=>r.go(K);let ce;const pe=new Set,Ce={currentRoute:l,listening:!0,addRoute:m,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:p,getRoutes:y,resolve:S,options:e,push:x,replace:V,go:Y,back:()=>Y(-1),forward:()=>Y(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:U.add,isReady:H,install(K){const se=this;K.component("RouterLink",F6),K.component("RouterView",px),K.config.globalProperties.$router=se,Object.defineProperty(K.config.globalProperties,"$route",{enumerable:!0,get:()=>Qe(l)}),Sa&&!ce&&l.value===Vi&&(ce=!0,x(r.location).catch(oe=>{}));const de={};for(const oe in Vi)Object.defineProperty(de,oe,{get:()=>l.value[oe],enumerable:!0});K.provide(D_,se),K.provide(M_,Pr(de)),K.provide(Zg,l);const le=K.unmount;pe.add(K),K.unmount=function(){pe.delete(K),pe.size<1&&(u=Vi,R&&R(),R=null,l.value=Vi,ce=!1,q=!1),le()}}};function ie(K){return K.reduce((se,de)=>se.then(()=>_(de)),Promise.resolve())}return Ce}function j6(e,t){const n=[],i=[],r=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const a=t.matched[o];a&&(e.matched.find(u=>el(u,a))?i.push(a):n.push(a));const l=e.matched[o];l&&(t.matched.find(u=>el(u,l))||r.push(l))}return[n,i,r]}function Sne(e){return Fe(M_)}const W6=/(:\w+)\([^)]+\)/g,z6=/(:\w+)[?+*]/g,q6=/:\w+/g,G6=(e,t)=>t.path.replace(W6,"$1").replace(z6,"$1").replace(q6,n=>{var i;return((i=e.params[n.slice(1)])==null?void 0:i.toString())||""}),ep=(e,t)=>{const n=e.route.matched.find(r=>{var s;return((s=r.components)==null?void 0:s.default)===e.Component.type}),i=t??(n==null?void 0:n.meta.key)??(n&&G6(e.route,n));return typeof i=="function"?i(e.route):i},K6=(e,t)=>({default:()=>e?qt(zO,e===!0?{}:e,t):t});function N_(e){return Array.isArray(e)?e:[e]}const Y6="modulepreload",Q6=function(e,t){return new URL(e,t).href},NT={},mo=function(t,n,i){let r=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(n.map(u=>{if(u=Q6(u,i),u in NT)return;NT[u]=!0;const c=u.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(!!i)for(let g=o.length-1;g>=0;g--){const y=o[g];if(y.href===u&&(!c||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const m=document.createElement("link");if(m.rel=c?"stylesheet":Y6,c||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),c)return new Promise((g,y)=>{m.addEventListener("load",g),m.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})},kv=[{name:"admin",path:"/admin",component:()=>mo(()=>import("./DU_1ZcDt.js"),__vite__mapDeps([0,1]),import.meta.url)},{name:"admin-shop_product",path:"/admin/shop_product",component:()=>mo(()=>import("./D5VjKcZg.js"),__vite__mapDeps([2,3,4,1]),import.meta.url)},{name:"index",path:"/",component:()=>mo(()=>import("./DIiyBbwU.js"),__vite__mapDeps([5,6,3,7]),import.meta.url)}],X6=(e,t,n)=>(t=t===!0?{}:t,{default:()=>{var i;return t?qt(e,t,n):(i=n.default)==null?void 0:i.call(n)}}),J6=/(:\w+)\([^)]+\)/g,Z6=/(:\w+)[?+*]/g,eW=/:\w+/g;function OT(e){const t=(e==null?void 0:e.meta.key)??e.path.replace(J6,"$1").replace(Z6,"$1").replace(eW,n=>{var i;return((i=e.params[n.slice(1)])==null?void 0:i.toString())||""});return typeof t=="function"?t(e):t}function tW(e,t){return e===t||t===Vi?!1:OT(e)!==OT(t)?!0:!e.matched.every((i,r)=>{var s,o;return i.components&&i.components.default===((o=(s=t.matched[r])==null?void 0:s.components)==null?void 0:o.default)})}const nW={scrollBehavior(e,t,n){var u;const i=tn(),r=((u=Ui().options)==null?void 0:u.scrollBehaviorType)??"auto";let s=n||void 0;const o=typeof e.meta.scrollToTop=="function"?e.meta.scrollToTop(e,t):e.meta.scrollToTop;if(!s&&t&&e&&o!==!1&&tW(e,t)&&(s={left:0,top:0}),e.path===t.path)return t.hash&&!e.hash?{left:0,top:0}:e.hash?{el:e.hash,top:LT(e.hash),behavior:r}:!1;const a=c=>!!(c.meta.pageTransition??bg),l=a(t)&&a(e)?"page:transition:finish":"page:finish";return new Promise(c=>{i.hooks.hookOnce(l,async()=>{await new Promise(d=>setTimeout(d,0)),e.hash&&(s={el:e.hash,top:LT(e.hash),behavior:r}),c(s)})})}};function LT(e){try{const t=document.querySelector(e);if(t)return(Number.parseFloat(getComputedStyle(t).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}const iW={hashMode:!1,scrollBehaviorType:"auto"},wi={...iW,...nW},rW=async e=>{var l;let t,n;if(!((l=e.meta)!=null&&l.validate))return;const i=tn(),r=Ui(),s=([t,n]=Oa(()=>Promise.resolve(e.meta.validate(e))),t=await t,n(),t);if(s===!0)return;const o=Ah({statusCode:s&&s.statusCode||404,statusMessage:s&&s.statusMessage||`Page Not Found: ${e.fullPath}`,data:{path:e.fullPath}}),a=r.beforeResolve(u=>{if(a(),u===e){const c=r.afterEach(async()=>{c(),await i.runWithContext(()=>Ca(o)),window==null||window.history.pushState({},"",e.fullPath)});return!1}})},sW=async e=>{let t,n;const i=([t,n]=Oa(()=>R_(e.path)),t=await t,n(),t);if(i.redirect)return Bo(i.redirect,{acceptRelative:!0})?(window.location.href=i.redirect,!1):i.redirect},oW=[rW,sW],Su={};function aW(e,t,n){const{pathname:i,search:r,hash:s}=t,o=e.indexOf("#");if(o>-1){const u=s.includes(e.slice(o))?e.slice(o).length:1;let c=s.slice(u);return c[0]!=="/"&&(c="/"+c),sS(c,"")}const a=sS(i,e),l=!n||KF(a,n,{trailingSlash:!0})?a:n;return l+(l.includes("?")?"":r)+s}const lW=ii({name:"nuxt:router",enforce:"pre",async setup(e){var p;let t,n,i=wc().app.baseURL;wi.hashMode&&!i.includes("#")&&(i+="#");const r=((p=wi.history)==null?void 0:p.call(wi,i))??(wi.hashMode?y6(i):fx(i)),s=wi.routes?([t,n]=Oa(()=>wi.routes(kv)),t=await t,n(),t??kv):kv;let o;const a=H6({...wi,scrollBehavior:(S,w,T)=>{if(w===Vi){o=T;return}if(wi.scrollBehavior){if(a.options.scrollBehavior=wi.scrollBehavior,"scrollRestoration"in window.history){const x=a.beforeEach(()=>{x(),window.history.scrollRestoration="manual"})}return wi.scrollBehavior(S,Vi,o||T)}},history:r,routes:s});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),e.vueApp.use(a);const l=ge(a.currentRoute.value);a.afterEach((S,w)=>{l.value=w}),Object.defineProperty(e.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=aW(i,window.location,e.payload.path),c=ge(a.currentRoute.value),d=()=>{c.value=a.currentRoute.value};e.hook("page:finish",d),a.afterEach((S,w)=>{var T,x,V,D;((x=(T=S.matched[0])==null?void 0:T.components)==null?void 0:x.default)===((D=(V=w.matched[0])==null?void 0:V.components)==null?void 0:D.default)&&d()});const f={};for(const S in c.value)Object.defineProperty(f,S,{get:()=>c.value[S],enumerable:!0});e._route=Pr(f),e._middleware=e._middleware||{global:[],named:{}};const m=kh();a.afterEach(async(S,w,T)=>{delete e._processingMiddleware,!e.isHydrating&&m.value&&await e.runWithContext(G2),T&&await e.callHook("page:loading:end")});try{[t,n]=Oa(()=>a.isReady()),await t,n()}catch(S){[t,n]=Oa(()=>e.runWithContext(()=>Ca(S))),await t,n()}const g=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;d();const y=e.payload.state._layout;return a.beforeEach(async(S,w)=>{var T;await e.callHook("page:loading:start"),S.meta=Ft(S.meta),e.isHydrating&&y&&!Es(S.meta.layout)&&(S.meta.layout=y),e._processingMiddleware=!0;{const x=new Set([...oW,...e._middleware.global]);for(const V of S.matched){const D=V.meta.middleware;if(D)for(const A of N_(D))x.add(A)}{const V=await e.runWithContext(()=>R_(S.path));if(V.appMiddleware)for(const D in V.appMiddleware)V.appMiddleware[D]?x.add(D):x.delete(D)}for(const V of x){const D=typeof V=="string"?e._middleware.named[V]||await((T=Su[V])==null?void 0:T.call(Su).then(b=>b.default||b)):V;if(!D)throw new Error(`Unknown route middleware: '${V}'.`);const A=await e.runWithContext(()=>D(S,w));if(!e.payload.serverRendered&&e.isHydrating&&(A===!1||A instanceof Error)){const b=A||Tg({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await e.runWithContext(()=>Ca(b)),!1}if(A!==!0&&(A||A===!1))return A}}}),a.onError(async()=>{delete e._processingMiddleware,await e.callHook("page:loading:end")}),a.afterEach(async(S,w)=>{S.matched.length===0&&await e.runWithContext(()=>Ca(Tg({statusCode:404,fatal:!1,statusMessage:`Page not found: ${S.fullPath}`,data:{path:S.fullPath}})))}),e.hooks.hookOnce("app:created",async()=>{try{"name"in g&&(g.name=void 0),await a.replace({...g,force:!0}),a.options.scrollBehavior=wi.scrollBehavior}catch(S){await e.runWithContext(()=>Ca(S))}}),{provide:{router:a}}}}),FT=globalThis.requestIdleCallback||(e=>{const t=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-t))};return setTimeout(()=>{e(n)},1)}),Tne=globalThis.cancelIdleCallback||(e=>{clearTimeout(e)}),O_=e=>{const t=tn();t.isHydrating?t.hooks.hookOnce("app:suspense:resolve",()=>{FT(()=>e())}):FT(()=>e())},uW=ii({name:"nuxt:payload",setup(e){Ui().beforeResolve(async(t,n)=>{if(t.path===n.path)return;const i=await pT(t.path);i&&Object.assign(e.static.data,i.data)}),O_(()=>{var t;e.hooks.hook("link:prefetch",async n=>{const{hostname:i}=new URL(n,window.location.href);i===window.location.hostname&&await pT(n)}),((t=navigator.connection)==null?void 0:t.effectiveType)!=="slow-2g"&&setTimeout(qh,1e3)})}}),cW=ii(()=>{const e=Ui();O_(()=>{e.beforeResolve(async()=>{await new Promise(t=>{setTimeout(t,100),requestAnimationFrame(()=>{setTimeout(t,0)})})})})}),dW=ii(e=>{let t;async function n(){const i=await qh();t&&clearTimeout(t),t=setTimeout(n,cS);try{const r=await $fetch(qy("builds/latest.json")+`?${Date.now()}`);r.id!==i.id&&e.hooks.callHook("app:manifest:update",r)}catch{}}O_(()=>{t=setTimeout(n,cS)})});function fW(e={}){const t=e.path||window.location.pathname;let n={};try{n=wf(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(e.force||(n==null?void 0:n.path)!==t||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:t,expires:Date.now()+(e.ttl??1e4)}))}catch{}if(e.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:tn().payload.state}))}catch{}window.location.pathname!==t?window.location.href=t:window.location.reload()}}const hW=ii({name:"nuxt:chunk-reload",setup(e){const t=Ui(),n=wc(),i=new Set;t.beforeEach(()=>{i.clear()}),e.hook("app:chunkError",({error:s})=>{i.add(s)});function r(s){const a="href"in s&&s.href[0]==="#"?n.app.baseURL+s.href:zy(n.app.baseURL,s.fullPath);fW({path:a,persistState:!0})}e.hook("app:manifest:update",()=>{t.beforeResolve(r)}),t.onError((s,o)=>{i.has(s)&&r(o)})}}),mW=ii({name:"nuxt:global-components"}),wd={admin:mf(()=>mo(()=>import("./CMGBYpWc.js"),__vite__mapDeps([8,4,9]),import.meta.url)),ecommerce:mf(()=>mo(()=>import("./J921Pbn1.js"),[],import.meta.url))},vW=ii({name:"nuxt:prefetch",setup(e){const t=Ui();e.hooks.hook("app:mounted",()=>{t.beforeEach(async n=>{var r;const i=(r=n==null?void 0:n.meta)==null?void 0:r.layout;i&&typeof wd[i]=="function"&&await wd[i]()})}),e.hooks.hook("link:prefetch",n=>{if(Bo(n))return;const i=t.resolve(n);if(!i)return;const r=i.meta.layout;let s=N_(i.meta.middleware);s=s.filter(o=>typeof o=="string");for(const o of s)typeof Su[o]=="function"&&Su[o]();r&&typeof wd[r]=="function"&&wd[r]()})}});var gW="firebase",pW="11.0.2";/**
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
 */ci(gW,pW,"app");const yW=ii(()=>({provide:{firebaseApp:CA(wc().public.vuefire.config)}}));function L_(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]]);return n}function yx(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _x=yx,bx=new fl("auth","Firebase",yx());/**
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
 */const jf=new Sc("@firebase/auth");function _W(e,...t){jf.logLevel<=Je.WARN&&jf.warn(`Auth (${$s}): ${e}`,...t)}function Qd(e,...t){jf.logLevel<=Je.ERROR&&jf.error(`Auth (${$s}): ${e}`,...t)}/**
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
 */function $r(e,...t){throw F_(e,...t)}function or(e,...t){return F_(e,...t)}function wx(e,t,n){const i=Object.assign(Object.assign({},_x()),{[t]:n});return new fl("auth","Firebase",i).create(t,{appName:e.name})}function vo(e){return wx(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function F_(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return bx.create(e,...t)}function Ge(e,t,...n){if(!e)throw F_(t,...n)}function xr(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Qd(t),new Error(t)}function Ur(e,t){e||xr(t)}/**
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
 */function tp(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function bW(){return BT()==="http:"||BT()==="https:"}function BT(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function wW(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bW()||aB()||"connection"in navigator)?navigator.onLine:!0}function SW(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Ac{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ur(n>t,"Short delay should be less than long delay!"),this.isMobile=Gy()||yA()}get(){return wW()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function B_(e,t){Ur(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Sx{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const TW={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const CW=new Ac(3e4,6e4);function $_(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function _l(e,t,n,i,r={}){return Tx(e,r,async()=>{let s={},o={};i&&(t==="GET"?o=i:s={body:JSON.stringify(i)});const a=hl(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:l},s);return oB()||(u.referrerPolicy="no-referrer"),Sx.fetch()(Cx(e,e.config.apiHost,n,a),u)})}async function Tx(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},TW),t);try{const r=new IW(e),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Sd(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sd(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Sd(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw Sd(e,"user-disabled",o);const c=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw wx(e,c,u);$r(e,c)}}catch(r){if(r instanceof mr)throw r;$r(e,"network-request-failed",{message:String(r)})}}async function EW(e,t,n,i,r={}){const s=await _l(e,t,n,i,r);return"mfaPendingCredential"in s&&$r(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Cx(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?B_(e.config,r):`${e.config.apiScheme}://${r}`}class IW{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(or(this.auth,"network-request-failed")),CW.get())})}}function Sd(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=or(e,t,i);return r.customData._tokenResponse=n,r}/**
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
 */async function kW(e,t){return _l(e,"POST","/v1/accounts:delete",t)}async function Ex(e,t){return _l(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Tu(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function AW(e,t=!1){const n=En(e),i=await n.getIdToken(t),r=U_(i);Ge(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Tu(Av(r.auth_time)),issuedAtTime:Tu(Av(r.iat)),expirationTime:Tu(Av(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Av(e){return Number(e)*1e3}function U_(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return Qd("JWT malformed, contained fewer than 3 sections"),null;try{const r=kf(n);return r?JSON.parse(r):(Qd("Failed to decode base64 JWT payload"),null)}catch(r){return Qd("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function $T(e){const t=U_(e);return Ge(t,"internal-error"),Ge(typeof t.exp<"u","internal-error"),Ge(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ku(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof mr&&PW(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function PW({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class xW{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class np{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tu(this.lastLoginAt),this.creationTime=Tu(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Wf(e){var t;const n=e.auth,i=await e.getIdToken(),r=await Ku(e,Ex(n,{idToken:i}));Ge(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Ix(s.providerUserInfo):[],a=VW(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new np(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function RW(e){const t=En(e);await Wf(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function VW(e,t){return[...e.filter(i=>!t.some(r=>r.providerId===i.providerId)),...t]}function Ix(e){return e.map(t=>{var{providerId:n}=t,i=L_(t,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function DW(e,t){const n=await Tx(e,{},async()=>{const i=hl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=Cx(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Sx.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function MW(e,t){return _l(e,"POST","/v2/accounts:revokeToken",$_(e,t))}/**
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
 */class Fa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Ge(t.idToken,"internal-error"),Ge(typeof t.idToken<"u","internal-error"),Ge(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):$T(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){Ge(t.length!==0,"internal-error");const n=$T(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ge(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await DW(t,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new Fa;return i&&(Ge(typeof i=="string","internal-error",{appName:t}),o.refreshToken=i),r&&(Ge(typeof r=="string","internal-error",{appName:t}),o.accessToken=r),s&&(Ge(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Fa,this.toJSON())}_performRefresh(){return xr("not implemented")}}/**
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
 */function ts(e,t){Ge(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Rr{constructor(t){var{uid:n,auth:i,stsTokenManager:r}=t,s=L_(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xW(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new np(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Ku(this,this.stsTokenManager.getToken(this.auth,t));return Ge(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return AW(this,t)}reload(){return RW(this)}_assign(t){this!==t&&(Ge(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Rr(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){Ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await Wf(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ms(this.auth.app))return Promise.reject(vo(this.auth));const t=await this.getIdToken();return await Ku(this,kW(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var i,r,s,o,a,l,u,c;const d=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,p=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,S=(u=n.createdAt)!==null&&u!==void 0?u:void 0,w=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:T,emailVerified:x,isAnonymous:V,providerData:D,stsTokenManager:A}=n;Ge(T&&A,t,"internal-error");const b=Fa.fromJSON(this.name,A);Ge(typeof T=="string",t,"internal-error"),ts(d,t.name),ts(f,t.name),Ge(typeof x=="boolean",t,"internal-error"),Ge(typeof V=="boolean",t,"internal-error"),ts(m,t.name),ts(g,t.name),ts(y,t.name),ts(p,t.name),ts(S,t.name),ts(w,t.name);const _=new Rr({uid:T,auth:t,email:f,emailVerified:x,displayName:d,isAnonymous:V,photoURL:g,phoneNumber:m,tenantId:y,stsTokenManager:b,createdAt:S,lastLoginAt:w});return D&&Array.isArray(D)&&(_.providerData=D.map(E=>Object.assign({},E))),p&&(_._redirectEventId=p),_}static async _fromIdTokenResponse(t,n,i=!1){const r=new Fa;r.updateFromServerResponse(n);const s=new Rr({uid:n.localId,auth:t,stsTokenManager:r,isAnonymous:i});return await Wf(s),s}static async _fromGetAccountInfoResponse(t,n,i){const r=n.users[0];Ge(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?Ix(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),a=new Fa;a.updateFromIdToken(i);const l=new Rr({uid:r.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new np(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const UT=new Map;function Vr(e){Ur(e instanceof Function,"Expected a class definition");let t=UT.get(e);return t?(Ur(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,UT.set(e,t),t)}/**
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
 */class kx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}kx.type="NONE";const HT=kx;/**
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
 */function Xd(e,t,n){return`firebase:${e}:${t}:${n}`}class Ba{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Xd(this.userKey,r.apiKey,s),this.fullPersistenceKey=Xd("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Rr._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new Ba(Vr(HT),t,i);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=r[0]||Vr(HT);const o=Xd(i,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Rr._fromJSON(t,c);u!==s&&(a=d),s=u;break}}catch{}const l=r.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ba(s,t,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ba(s,t,i))}}/**
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
 */function jT(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Rx(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ax(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Dx(t))return"Blackberry";if(Mx(t))return"Webos";if(Px(t))return"Safari";if((t.includes("chrome/")||xx(t))&&!t.includes("edge/"))return"Chrome";if(Vx(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Ax(e=Hn()){return/firefox\//i.test(e)}function Px(e=Hn()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function xx(e=Hn()){return/crios\//i.test(e)}function Rx(e=Hn()){return/iemobile/i.test(e)}function Vx(e=Hn()){return/android/i.test(e)}function Dx(e=Hn()){return/blackberry/i.test(e)}function Mx(e=Hn()){return/webos/i.test(e)}function H_(e=Hn()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function NW(e=Hn()){var t;return H_(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function OW(){return lB()&&document.documentMode===10}function Nx(e=Hn()){return H_(e)||Vx(e)||Mx(e)||Dx(e)||/windows phone/i.test(e)||Rx(e)}/**
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
 */function Ox(e,t=[]){let n;switch(e){case"Browser":n=jT(Hn());break;case"Worker":n=`${jT(Hn())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${$s}/${i}`}/**
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
 */class LW{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function FW(e,t={}){return _l(e,"GET","/v2/passwordPolicy",$_(e,t))}/**
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
 */const BW=6;class $W{constructor(t){var n,i,r,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:BW,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=t.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,i,r,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=t.length>=i),r&&(n.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<t.length;r++)i=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class UW{constructor(t,n,i,r){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new WT(this),this.idTokenSubscription=new WT(this),this.beforeStateQueue=new LW(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Vr(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Ba.create(this,t),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Ex(this,{idToken:t}),i=await Rr._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(ms(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Wf(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=SW()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(ms(this.app))return Promise.reject(vo(this));const n=t?En(t):null;return n&&Ge(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&Ge(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return ms(this.app)?Promise.reject(vo(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return ms(this.app)?Promise.reject(vo(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vr(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await FW(this),n=new $W(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new fl("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await MW(this,i)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Vr(t)||this._popupRedirectResolver;Ge(n,this,"argument-error"),this.redirectPersistenceManager=await Ba.create(this,[Vr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ge(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,i,r);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ox(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&_W(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Lx(e){return En(e)}class WT{constructor(t){this.auth=t,this.observer=null,this.addObserver=pB(n=>this.observer=n)}get next(){return Ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let j_={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function HW(e){j_=e}function jW(e){return j_.loadJS(e)}function WW(){return j_.gapiScript}function zW(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */function qW(e,t){const n=Yy(e,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Pf(s,t??{}))return r;$r(r,"already-initialized")}return n.initialize({options:t})}function GW(e,t){const n=(t==null?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Vr);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}/**
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
 */class Fx{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return xr("not implemented")}_getIdTokenResponse(t){return xr("not implemented")}_linkToIdToken(t,n){return xr("not implemented")}_getReauthenticationResolver(t){return xr("not implemented")}}/**
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
 */async function $a(e,t){return EW(e,"POST","/v1/accounts:signInWithIdp",$_(e,t))}/**
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
 */const KW="http://localhost";class To extends Fx{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new To(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):$r("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:r}=n,s=L_(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new To(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return $a(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,$a(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,$a(t,n)}buildRequest(){const t={requestUri:KW,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=hl(n)}return t}}/**
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
 */class Bx{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pc extends Bx{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class ls extends Pc{constructor(){super("facebook.com")}static credential(t){return To._fromParams({providerId:ls.PROVIDER_ID,signInMethod:ls.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ls.credentialFromTaggedObject(t)}static credentialFromError(t){return ls.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ls.credential(t.oauthAccessToken)}catch{return null}}}ls.FACEBOOK_SIGN_IN_METHOD="facebook.com";ls.PROVIDER_ID="facebook.com";/**
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
 */class us extends Pc{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return To._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return us.credentialFromTaggedObject(t)}static credentialFromError(t){return us.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return us.credential(n,i)}catch{return null}}}us.GOOGLE_SIGN_IN_METHOD="google.com";us.PROVIDER_ID="google.com";/**
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
 */class cs extends Pc{constructor(){super("github.com")}static credential(t){return To._fromParams({providerId:cs.PROVIDER_ID,signInMethod:cs.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return cs.credentialFromTaggedObject(t)}static credentialFromError(t){return cs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return cs.credential(t.oauthAccessToken)}catch{return null}}}cs.GITHUB_SIGN_IN_METHOD="github.com";cs.PROVIDER_ID="github.com";/**
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
 */class ds extends Pc{constructor(){super("twitter.com")}static credential(t,n){return To._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return ds.credentialFromTaggedObject(t)}static credentialFromError(t){return ds.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return ds.credential(n,i)}catch{return null}}}ds.TWITTER_SIGN_IN_METHOD="twitter.com";ds.PROVIDER_ID="twitter.com";/**
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
 */class nl{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,r=!1){const s=await Rr._fromIdTokenResponse(t,i,r),o=zT(i);return new nl({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const r=zT(i);return new nl({user:t,providerId:r,_tokenResponse:i,operationType:n})}}function zT(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class zf extends mr{constructor(t,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,zf.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,r){return new zf(t,n,i,r)}}function $x(e,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?zf._fromErrorAndOperation(e,s,t,i):s})}async function YW(e,t,n=!1){const i=await Ku(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return nl._forOperation(e,"link",i)}/**
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
 */async function QW(e,t,n=!1){const{auth:i}=e;if(ms(i.app))return Promise.reject(vo(i));const r="reauthenticate";try{const s=await Ku(e,$x(i,r,t,e),n);Ge(s.idToken,i,"internal-error");const o=U_(s.idToken);Ge(o,i,"internal-error");const{sub:a}=o;return Ge(e.uid===a,i,"user-mismatch"),nl._forOperation(e,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&$r(i,"user-mismatch"),s}}/**
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
 */async function XW(e,t,n=!1){if(ms(e.app))return Promise.reject(vo(e));const i="signIn",r=await $x(e,i,t),s=await nl._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}function JW(e,t,n,i){return En(e).onIdTokenChanged(t,n,i)}const qf="__sak";/**
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
 */class Ux{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qf,"1"),this.storage.removeItem(qf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ZW=1e3,e5=10;class Hx extends Ux{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Nx(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&t(n,r,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=t.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);OW()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,e5):r()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},ZW)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Hx.type="LOCAL";const t5=Hx;/**
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
 */class jx extends Ux{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}jx.type="SESSION";const n5=jx;/**
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
 */function i5(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Kh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(r=>r.isListeningto(t));if(n)return n;const i=new Kh(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await i5(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kh.receivers=[];/**
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
 */function W_(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class r5{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=W_("",20);r.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ar(){return window}function s5(e){ar().location.href=e}/**
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
 */function Wx(){return typeof ar().WorkerGlobalScope<"u"&&typeof ar().importScripts=="function"}async function o5(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function a5(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function l5(){return Wx()?self:null}/**
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
 */const zx="firebaseLocalStorageDb",u5=1,Gf="firebaseLocalStorage",qx="fbase_key";class xc{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yh(e,t){return e.transaction([Gf],t?"readwrite":"readonly").objectStore(Gf)}function c5(){const e=indexedDB.deleteDatabase(zx);return new xc(e).toPromise()}function ip(){const e=indexedDB.open(zx,u5);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const i=e.result;try{i.createObjectStore(Gf,{keyPath:qx})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains(Gf)?t(i):(i.close(),await c5(),t(await ip()))})})}async function qT(e,t,n){const i=Yh(e,!0).put({[qx]:t,value:n});return new xc(i).toPromise()}async function d5(e,t){const n=Yh(e,!1).get(t),i=await new xc(n).toPromise();return i===void 0?null:i.value}function GT(e,t){const n=Yh(e,!0).delete(t);return new xc(n).toPromise()}const f5=800,h5=3;class Gx{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ip(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>h5)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wx()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kh._getInstance(l5()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await o5(),!this.activeServiceWorker)return;this.sender=new r5(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((t=i[0])===null||t===void 0)&&t.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||a5()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ip();return await qT(t,qf,"1"),await GT(t,qf),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>qT(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>d5(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>GT(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(r=>{const s=Yh(r,!1).getAll();return new xc(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(t.length!==0)for(const{fbase_key:r,value:s}of t)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),f5)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gx.type="LOCAL";const m5=Gx;new Ac(3e4,6e4);/**
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
 */function v5(e,t){return t?Vr(t):(Ge(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class z_ extends Fx{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return $a(t,this._buildIdpRequest())}_linkToIdToken(t,n){return $a(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return $a(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function g5(e){return XW(e.auth,new z_(e),e.bypassAuthState)}function p5(e){const{auth:t,user:n}=e;return Ge(n,t,"internal-error"),QW(n,new z_(e),e.bypassAuthState)}async function y5(e){const{auth:t,user:n}=e;return Ge(n,t,"internal-error"),YW(n,new z_(e),e.bypassAuthState)}/**
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
 */class Kx{constructor(t,n,i,r,s=!1){this.auth=t,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return g5;case"linkViaPopup":case"linkViaRedirect":return y5;case"reauthViaPopup":case"reauthViaRedirect":return p5;default:$r(this.auth,"internal-error")}}resolve(t){Ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _5=new Ac(2e3,1e4);class Ea extends Kx{constructor(t,n,i,r,s){super(t,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,Ea.currentPopupAction&&Ea.currentPopupAction.cancel(),Ea.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Ge(t,this.auth,"internal-error"),t}async onExecution(){Ur(this.filter.length===1,"Popup operations only handle one event");const t=W_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(or(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(or(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ea.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(or(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,_5.get())};t()}}Ea.currentPopupAction=null;/**
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
 */const b5="pendingRedirect",Jd=new Map;class w5 extends Kx{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let t=Jd.get(this.auth._key());if(!t){try{const i=await S5(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}Jd.set(this.auth._key(),t)}return this.bypassAuthState||Jd.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function S5(e,t){const n=E5(t),i=C5(e);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function T5(e,t){Jd.set(e._key(),t)}function C5(e){return Vr(e._redirectPersistence)}function E5(e){return Xd(b5,e.config.apiKey,e.name)}async function I5(e,t,n=!1){if(ms(e.app))return Promise.reject(vo(e));const i=Lx(e),r=v5(i,t),o=await new w5(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}/**
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
 */const k5=10*60*1e3;class A5{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!P5(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var i;if(t.error&&!Yx(t)){const r=((i=t.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(or(this.auth,r))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=k5&&this.cachedEventUids.clear(),this.cachedEventUids.has(KT(t))}saveEventToCache(t){this.cachedEventUids.add(KT(t)),this.lastProcessedEventTime=Date.now()}}function KT(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Yx({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function P5(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yx(e);default:return!1}}/**
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
 */async function x5(e,t={}){return _l(e,"GET","/v1/projects",t)}/**
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
 */const R5=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,V5=/^https?/;async function D5(e){if(e.config.emulator)return;const{authorizedDomains:t}=await x5(e);for(const n of t)try{if(M5(n))return}catch{}$r(e,"unauthorized-domain")}function M5(e){const t=tp(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&i===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!V5.test(n))return!1;if(R5.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const N5=new Ac(3e4,6e4);function YT(){const e=ar().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function O5(e){return new Promise((t,n)=>{var i,r,s;function o(){YT(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{YT(),n(or(e,"network-request-failed"))},timeout:N5.get()})}if(!((r=(i=ar().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)t(gapi.iframes.getContext());else if(!((s=ar().gapi)===null||s===void 0)&&s.load)o();else{const a=zW("iframefcb");return ar()[a]=()=>{gapi.load?o():n(or(e,"network-request-failed"))},jW(`${WW()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Zd=null,t})}let Zd=null;function L5(e){return Zd=Zd||O5(e),Zd}/**
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
 */const F5=new Ac(5e3,15e3),B5="__/auth/iframe",$5="emulator/auth/iframe",U5={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},H5=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function j5(e){const t=e.config;Ge(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?B_(t,$5):`https://${e.config.authDomain}/${B5}`,i={apiKey:t.apiKey,appName:e.name,v:$s},r=H5.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${hl(i).slice(1)}`}async function W5(e){const t=await L5(e),n=ar().gapi;return Ge(n,e,"internal-error"),t.open({where:document.body,url:j5(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:U5,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=or(e,"network-request-failed"),a=ar().setTimeout(()=>{s(o)},F5.get());function l(){ar().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const z5={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},q5=500,G5=600,K5="_blank",Y5="http://localhost";class QT{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Q5(e,t,n,i=q5,r=G5){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},z5),{width:i.toString(),height:r.toString(),top:s,left:o}),u=Hn().toLowerCase();n&&(a=xx(u)?K5:n),Ax(u)&&(t=t||Y5,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[m,g])=>`${f}${m}=${g},`,"");if(NW(u)&&a!=="_self")return X5(t||"",a),new QT(null);const d=window.open(t||"",a,c);Ge(d,e,"popup-blocked");try{d.focus()}catch{}return new QT(d)}function X5(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const J5="__/auth/handler",Z5="emulator/auth/handler",e3=encodeURIComponent("fac");async function XT(e,t,n,i,r,s){Ge(e.config.authDomain,e,"auth-domain-config-required"),Ge(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:$s,eventId:r};if(t instanceof Bx){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Eg(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,d]of Object.entries({}))o[c]=d}if(t instanceof Pc){const c=t.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await e._getAppCheckToken(),u=l?`#${e3}=${encodeURIComponent(l)}`:"";return`${t3(e)}?${hl(a).slice(1)}${u}`}function t3({config:e}){return e.emulator?B_(e,Z5):`https://${e.authDomain}/${J5}`}/**
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
 */const Pv="webStorageSupport";class n3{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=n5,this._completeRedirectFn=I5,this._overrideRedirectResult=T5}async _openPopup(t,n,i,r){var s;Ur((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await XT(t,n,i,tp(),r);return Q5(t,o,W_())}async _openRedirect(t,n,i,r){await this._originValidation(t);const s=await XT(t,n,i,tp(),r);return s5(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(Ur(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await W5(t),i=new A5(t);return n.register("authEvent",r=>(Ge(r==null?void 0:r.authEvent,t,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Pv,{type:Pv},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Pv];o!==void 0&&n(!!o),$r(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=D5(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Nx()||Px()||H_()}}const i3=n3;var JT="@firebase/auth",ZT="1.8.1";/**
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
 */class r3{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function s3(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function o3(e){ur(new Hi("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;Ge(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ox(e)},u=new UW(i,r,s,l);return GW(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),ur(new Hi("auth-internal",t=>{const n=Lx(t.getProvider("auth").getImmediate());return(i=>new r3(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ci(JT,ZT,s3(e)),ci(JT,ZT,"esm2017")}/**
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
 */const a3=5*60;rB("authIdTokenMaxAge");function l3(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}HW({loadJS(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=r=>{const s=or("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",l3().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});o3("Browser");/**
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
 */const u3=new Map,c3={activated:!1,tokenObservers:[]};function zi(e){return u3.get(e)||Object.assign({},c3)}const eC={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class d3{constructor(t,n,i,r,s){if(this.operation=t,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=r,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=r,r>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(t){this.stop();try{this.pending=new Ou,this.pending.promise.catch(n=>{}),await f3(this.getNextRun(t)),this.pending.resolve(),await this.pending.promise,this.pending=new Ou,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(t){if(t)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function f3(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */const h3={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Kf=new fl("appCheck","AppCheck",h3);function Qx(e){if(!zi(e).activated)throw Kf.create("use-before-activation",{appName:e.name})}/**
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
 */const m3="firebase-app-check-database",v3=1,rp="firebase-app-check-store";let Td=null;function g3(){return Td||(Td=new Promise((e,t)=>{try{const n=indexedDB.open(m3,v3);n.onsuccess=i=>{e(i.target.result)},n.onerror=i=>{var r;t(Kf.create("storage-open",{originalErrorMessage:(r=i.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=i=>{const r=i.target.result;switch(i.oldVersion){case 0:r.createObjectStore(rp,{keyPath:"compositeKey"})}}}catch(n){t(Kf.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Td)}function p3(e,t){return y3(_3(e),t)}async function y3(e,t){const i=(await g3()).transaction(rp,"readwrite"),s=i.objectStore(rp).put({compositeKey:e,value:t});return new Promise((o,a)=>{s.onsuccess=l=>{o()},i.onerror=l=>{var u;a(Kf.create("storage-set",{originalErrorMessage:(u=l.target.error)===null||u===void 0?void 0:u.message}))}})}function _3(e){return`${e.options.appId}-${e.name}`}/**
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
 */const sp=new Sc("@firebase/app-check");function tC(e,t){return bA()?p3(e,t).catch(n=>{sp.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const b3={error:"UNKNOWN_ERROR"};function w3(e){return Ph.encodeString(JSON.stringify(e),!1)}async function op(e,t=!1){const n=e.app;Qx(n);const i=zi(n);let r=i.token,s;if(r&&!au(r)&&(i.token=void 0,r=void 0),!r){const l=await i.cachedTokenPromise;l&&(au(l)?r=l:await tC(n,void 0))}if(!t&&r&&au(r))return{token:r.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),r=await zi(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?sp.warn(l.message):sp.error(l),s=l}let a;return r?s?au(r)?a={token:r.token,internalError:s}:a=iC(s):(a={token:r.token},i.token=r,await tC(n,r)):a=iC(s),o&&E3(n,a),a}async function S3(e){const t=e.app;Qx(t);const{provider:n}=zi(t);{const{token:i}=await n.getToken();return{token:i}}}function T3(e,t,n,i){const{app:r}=e,s=zi(r),o={next:n,error:i,type:t};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&au(s.token)){const a=s.token;Promise.resolve().then(()=>{n({token:a.token}),nC(e)}).catch(()=>{})}s.cachedTokenPromise.then(()=>nC(e))}function Xx(e,t){const n=zi(e),i=n.tokenObservers.filter(r=>r.next!==t);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function nC(e){const{app:t}=e,n=zi(t);let i=n.tokenRefresher;i||(i=C3(e),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function C3(e){const{app:t}=e;return new d3(async()=>{const n=zi(t);let i;if(n.token?i=await op(e,!0):i=await op(e),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=zi(t);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,r),Math.max(0,i-Date.now())}else return 0},eC.RETRIAL_MIN_WAIT,eC.RETRIAL_MAX_WAIT)}function E3(e,t){const n=zi(e).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&t.error!=null?i.error(t.error):i.next(t)}catch{}}function au(e){return e.expireTimeMillis-Date.now()>0}function iC(e){return{token:w3(b3),error:e}}/**
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
 */class I3{constructor(t,n){this.app=t,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:t}=zi(this.app);for(const n of t)Xx(this.app,n.next);return Promise.resolve()}}function k3(e,t){return new I3(e,t)}function A3(e){return{getToken:t=>op(e,t),getLimitedUseToken:()=>S3(e),addTokenListener:t=>T3(e,"INTERNAL",t),removeTokenListener:t=>Xx(e.app,t)}}const P3="@firebase/app-check",x3="0.8.10",R3="app-check",rC="app-check-internal";function V3(){ur(new Hi(R3,e=>{const t=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat");return k3(t,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider(rC).initialize()})),ur(new Hi(rC,e=>{const t=e.getProvider("app-check").getImmediate();return A3(t)},"PUBLIC").setInstantiationMode("EXPLICIT")),ci(P3,x3)}V3();const Jx=Symbol("firebaseApp");function Zx(e){return cl()&&Fe(Jx,null)||Qy(e)}const Cd=new WeakMap;function D3(e,t){if(!Cd.has(e)){const n=gc(!0);Cd.set(e,n);const{unmount:i}=t;t.unmount=()=>{i.call(t),n.stop(),Cd.delete(e)}}return Cd.get(e)}const M3=new WeakMap,Ed=new WeakMap;function N3(e){const t=Zx(e);if(!Ed.has(t)){let n;const r=[new Promise(s=>{n=s}),s=>{Ed.set(t,s),n(s.value)}];Ed.set(t,r)}return Ed.get(t)}function O3(e,t){JW(t,n=>{const i=N3();e.value=n,Array.isArray(i)&&i[1](e)})}var sC={};const oC="@firebase/database",aC="1.0.10";/**
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
 */let eR="";function L3(e){eR=e}/**
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
 */class F3{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),Tn(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:Lu(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
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
 */class B3{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return qr(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
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
 */const tR=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new F3(t)}}catch{}return new B3},so=tR("localStorage"),$3=tR("sessionStorage");/**
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
 */const Ua=new Sc("@firebase/database"),U3=function(){let e=1;return function(){return e++}}(),nR=function(e){const t=wB(e),n=new gB;n.update(t);const i=n.digest();return Ph.encodeByteArray(i)},Rc=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?t+=Rc.apply(null,i):typeof i=="object"?t+=Tn(i):t+=i,t+=" "}return t};let Cu=null,lC=!0;const H3=function(e,t){Ae(!t,"Can't turn on custom loggers persistently."),Ua.logLevel=Je.VERBOSE,Cu=Ua.log.bind(Ua)},Ln=function(...e){if(lC===!0&&(lC=!1,Cu===null&&$3.get("logging_enabled")===!0&&H3()),Cu){const t=Rc.apply(null,e);Cu(t)}},Vc=function(e){return function(...t){Ln(e,...t)}},ap=function(...e){const t="FIREBASE INTERNAL ERROR: "+Rc(...e);Ua.error(t)},Co=function(...e){const t=`FIREBASE FATAL ERROR: ${Rc(...e)}`;throw Ua.error(t),new Error(t)},fi=function(...e){const t="FIREBASE WARNING: "+Rc(...e);Ua.warn(t)},j3=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&fi("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},iR=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},W3=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},il="[MIN_NAME]",Eo="[MAX_NAME]",bl=function(e,t){if(e===t)return 0;if(e===il||t===Eo)return-1;if(t===il||e===Eo)return 1;{const n=uC(e),i=uC(t);return n!==null?i!==null?n-i===0?e.length-t.length:n-i:-1:i!==null?1:e<t?-1:1}},z3=function(e,t){return e===t?0:e<t?-1:1},Yl=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Tn(t))},q_=function(e){if(typeof e!="object"||e===null)return Tn(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)i!==0&&(n+=","),n+=Tn(t[i]),n+=":",n+=q_(e[t[i]]);return n+="}",n},rR=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function Ai(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const sR=function(e){Ae(!iR(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let r,s,o,a,l;e===0?(s=0,o=0,r=1/e===-1/0?1:0):(r=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),i),s=a+i,o=Math.round(e*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(e/Math.pow(2,1-i-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=t;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(r?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},q3=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},G3=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},K3=new RegExp("^-?(0*)\\d{1,10}$"),Y3=-2147483648,Q3=2147483647,uC=function(e){if(K3.test(e)){const t=Number(e);if(t>=Y3&&t<=Q3)return t}return null},Dc=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw fi("Exception was thrown by user callback.",n),t},Math.floor(0))}},X3=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Eu=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class J3{constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(t))}notifyForInvalidToken(){fi(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Z3{constructor(t,n,i){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ln("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',fi(t)}}/**
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
 */const G_="5",oR="v",aR="s",lR="r",uR="f",cR=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,dR="ls",fR="p",lp="ac",hR="websocket",mR="long_polling";/**
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
 */class ez{constructor(t,n,i,r,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=so.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&so.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function tz(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function vR(e,t,n){Ae(typeof t=="string","typeof type must == string"),Ae(typeof n=="object","typeof params must == object");let i;if(t===hR)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===mR)i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);tz(e)&&(n.ns=e.namespace);const r=[];return Ai(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
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
 */class nz{constructor(){this.counters_={}}incrementCounter(t,n=1){qr(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return X2(this.counters_)}}/**
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
 */const xv={},Rv={};function K_(e){const t=e.toString();return xv[t]||(xv[t]=new nz),xv[t]}function iz(e,t){const n=e.toString();return Rv[n]||(Rv[n]=t()),Rv[n]}/**
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
 */class rz{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&Dc(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const cC="start",sz="close",oz="pLPCommand",az="pRTLPCB",gR="id",pR="pw",yR="ser",lz="cb",uz="seg",cz="ts",dz="d",fz="dframe",_R=1870,bR=30,hz=_R-bR,mz=25e3,vz=3e4;class Ia{constructor(t,n,i,r,s,o,a){this.connId=t,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Vc(t),this.stats_=K_(n),this.urlFn=l=>(this.appCheckToken&&(l[lp]=this.appCheckToken),vR(n,mR,l))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new rz(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(vz)),W3(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Y_((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===cC)this.id=a,this.password=l;else if(o===sz)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[cC]="t",i[yR]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[lz]=this.scriptTagHolder.uniqueCallbackIdentifier),i[oR]=G_,this.transportSessionId&&(i[aR]=this.transportSessionId),this.lastSessionId&&(i[dR]=this.lastSessionId),this.applicationId&&(i[fR]=this.applicationId),this.appCheckToken&&(i[lp]=this.appCheckToken),typeof location<"u"&&location.hostname&&cR.test(location.hostname)&&(i[lR]=uR);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ia.forceAllow_=!0}static forceDisallow(){Ia.forceDisallow_=!0}static isAvailable(){return Ia.forceAllow_?!0:!Ia.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!q3()&&!G3()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=Tn(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=hA(n),r=rR(i,hz);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[fz]="t",i[gR]=t,i[pR]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=Tn(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Y_{constructor(t,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=U3(),window[oz+this.uniqueCallbackIdentifier]=t,window[az+this.uniqueCallbackIdentifier]=n,this.myIFrame=Y_.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ln("frame writing exception"),a.stack&&Ln(a.stack),Ln(a)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||Ln("No IE domain setting required")}catch{const i=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[gR]=this.myID,t[pR]=this.myPW,t[yR]=this.currentSerial;let n=this.urlFn(t),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+bR+i.length<=_R;){const o=this.pendingSegs.shift();i=i+"&"+uz+r+"="+o.seg+"&"+cz+r+"="+o.ts+"&"+dz+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,i){this.pendingSegs.push({seg:t,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(mz)),s=()=>{clearTimeout(r),i()};this.addTag(t,s)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Ln("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const gz=16384,pz=45e3;let Yf=null;typeof MozWebSocket<"u"?Yf=MozWebSocket:typeof WebSocket<"u"&&(Yf=WebSocket);class Mi{constructor(t,n,i,r,s,o,a){this.connId=t,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Vc(this.connId),this.stats_=K_(n),this.connURL=Mi.connectionURL_(n,o,a,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,i,r,s){const o={};return o[oR]=G_,typeof location<"u"&&location.hostname&&cR.test(location.hostname)&&(o[lR]=uR),n&&(o[aR]=n),i&&(o[dR]=i),r&&(o[lp]=r),s&&(o[fR]=s),vR(t,hR,o)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,so.set("previous_websocket_failure",!0);try{let i;_A(),this.mySock=new Yf(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Mi.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(t=!0)}return!t&&Yf!==null&&!Mi.forceDisallow_}static previouslyFailed(){return so.isInMemoryStorage||so.get("previous_websocket_failure")===!0}markConnectionHealthy(){so.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Lu(n);this.onMessage(i)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(Ae(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(t){this.resetKeepAlive();const n=Tn(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=rR(n,gz);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(pz))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Mi.responsesRequiredToBeHealthy=2;Mi.healthyTimeout=3e4;/**
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
 */class Yu{static get ALL_TRANSPORTS(){return[Ia,Mi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(t){this.initTransports_(t)}initTransports_(t){const n=Mi&&Mi.isAvailable();let i=n&&!Mi.previouslyFailed();if(t.webSocketOnly&&(n||fi("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Mi];else{const r=this.transports_=[];for(const s of Yu.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);Yu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Yu.globalTransportInitialized_=!1;/**
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
 */const yz=6e4,_z=5e3,bz=10*1024,wz=100*1024,Vv="t",dC="d",Sz="s",fC="r",Tz="e",hC="o",mC="a",vC="n",gC="p",Cz="h";class Ez{constructor(t,n,i,r,s,o,a,l,u,c){this.id=t,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Vc("c:"+this.id+":"),this.transportManager_=new Yu(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=t.healthyTimeout||0;r>0&&(this.healthyTimeout_=Eu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>wz?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>bz?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Vv in t){const n=t[Vv];n===mC?this.upgradeIfSecondaryHealthy_():n===fC?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===hC&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=Yl("t",t),i=Yl("d",t);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gC,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:mC,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:vC,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=Yl("t",t),i=Yl("d",t);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=Yl(Vv,t);if(dC in t){const i=t[dC];if(n===Cz){const r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===vC){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Sz?this.onConnectionShutdown_(i):n===fC?this.onReset_(i):n===Tz?ap("Server Error: "+i):n===hC?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ap("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,i=t.v,r=t.h;this.sessionId=t.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),G_!==i&&fi("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Eu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(yz))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Eu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(_z))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gC,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(so.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class wR{put(t,n,i,r){}merge(t,n,i,r){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,i){}onDisconnectMerge(t,n,i){}onDisconnectCancel(t,n){}reportStats(t){}}/**
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
 */class SR{constructor(t){this.allowedEvents_=t,this.listeners_={},Ae(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const i=[...this.listeners_[t]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(t,n,i){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:i});const r=this.getInitialEvent(t);r&&n.apply(i,r)}off(t,n,i){this.validateEventType_(t);const r=this.listeners_[t]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(t){Ae(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
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
 */class Qf extends SR{static getInstance(){return new Qf}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Gy()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(t){return Ae(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const pC=32,yC=768;class Mt{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function yt(){return new Mt("")}function st(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Ds(e){return e.pieces_.length-e.pieceNum_}function Pt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Mt(e.pieces_,t)}function TR(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Iz(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function CR(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function ER(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Mt(t,0)}function pn(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof Mt)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const i=t.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new Mt(n,0)}function nt(e){return e.pieceNum_>=e.pieces_.length}function Ci(e,t){const n=st(e),i=st(t);if(n===null)return t;if(n===i)return Ci(Pt(e),Pt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function IR(e,t){if(Ds(e)!==Ds(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Oi(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Ds(e)>Ds(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class kz{constructor(t,n){this.errorPrefix_=n,this.parts_=CR(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Rh(this.parts_[i]);kR(this)}}function Az(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Rh(t),kR(e)}function Pz(e){const t=e.parts_.pop();e.byteLength_-=Rh(t),e.parts_.length>0&&(e.byteLength_-=1)}function kR(e){if(e.byteLength_>yC)throw new Error(e.errorPrefix_+"has a key path longer than "+yC+" bytes ("+e.byteLength_+").");if(e.parts_.length>pC)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+pC+") or object contains a cycle "+io(e))}function io(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
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
 */class Q_ extends SR{static getInstance(){return new Q_}constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[t];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(t){return Ae(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
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
 */const Ql=1e3,xz=60*5*1e3,_C=30*1e3,Rz=1.3,Vz=3e4,Dz="server_kill",bC=3;class Nr extends wR{constructor(t,n,i,r,s,o,a,l){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Nr.nextPersistentConnectionId_++,this.log_=Vc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ql,this.maxReconnectDelay_=xz,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!_A())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Q_.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Qf.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,i){const r=++this.requestNumber_,s={r,a:t,b:n};this.log_(Tn(s)),Ae(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(t){this.initConnection_();const n=new Ou,r={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(t,n,i,r){this.initConnection_();const s=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),Ae(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Ae(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:t,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(t){const n=t.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";t.tag&&(s.q=n._queryObject,s.t=t.tag),s.h=t.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Nr.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===t&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(i,r),t.onComplete&&t.onComplete(u,l))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&qr(t,"w")){const i=qa(t,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();fi(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||vB(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=_C)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=mB(t)?"auth":"gauth",i={cred:t};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===t&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,i=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(t,n){const i=t._path.toString(),r=t._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),Ae(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,t._queryObject,n)}sendUnlisten_(t,n,i,r){this.log_("Unlisten on "+t+" for "+n);const s={p:t},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:i})}onDisconnectMerge(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:i})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+t,s),this.sendRequest(t,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(t,n,i,r){this.putInternal("p",t,n,i,r)}merge(t,n,i,r){this.putInternal("m",t,n,i,r)}putInternal(t,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:t,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,i=this.outstandingPuts_[t].request,r=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+Tn(t));const n=t.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):ap("Unrecognized action received from server: "+Tn(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){Ae(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ql,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=Ql,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Vz&&(this.reconnectDelay_=Ql),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Rz)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Nr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},u=function(d){Ae(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Ln("getToken() completed but was canceled"):(Ln("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new Ez(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,i,m=>{fi(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(Dz)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&fi(d),l())}}}interrupt(t){Ln("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){Ln("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Eg(this.interruptReasons_)&&(this.reconnectDelay_=Ql,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let i;n?i=n.map(s=>q_(s)).join("$"):i="default";const r=this.removeListen_(t,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(t,n){const i=new Mt(t).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(t,n){Ln("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=bC&&(this.reconnectDelay_=_C,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){Ln("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=bC&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+eR.replace(/\./g,"-")]=1,Gy()?t["framework.cordova"]=1:yA()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Qf.getInstance().currentlyOnline();return Eg(this.interruptReasons_)&&t}}Nr.nextPersistentConnectionId_=0;Nr.nextConnectionId_=0;/**
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
 */class ot{constructor(t,n){this.name=t,this.node=n}static Wrap(t,n){return new ot(t,n)}}/**
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
 */class Qh{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const i=new ot(il,t),r=new ot(il,n);return this.compare(i,r)!==0}minPost(){return ot.MIN}}/**
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
 */let Id;class AR extends Qh{static get __EMPTY_NODE(){return Id}static set __EMPTY_NODE(t){Id=t}compare(t,n){return bl(t.name,n.name)}isDefinedOn(t){throw dl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return ot.MIN}maxPost(){return new ot(Eo,Id)}makePost(t,n){return Ae(typeof t=="string","KeyIndex indexValue must always be a string."),new ot(t,Id)}toString(){return".key"}}const Ha=new AR;/**
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
 */class kd{constructor(t,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!t.isEmpty();)if(t=t,o=n?i(t.key,n):1,r&&(o*=-1),o<0)this.isReverse_?t=t.left:t=t.right;else if(o===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class gn{constructor(t,n,i,r,s){this.key=t,this.value=n,this.color=i??gn.RED,this.left=r??ti.EMPTY_NODE,this.right=s??ti.EMPTY_NODE}copy(t,n,i,r,s){return new gn(t??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let r=this;const s=i(t,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(t,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(t,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return ti.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let i,r;if(i=this,n(t,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(t,i.key)===0){if(i.right.isEmpty())return ti.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,gn.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,gn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}gn.RED=!0;gn.BLACK=!1;class Mz{copy(t,n,i,r,s){return this}insert(t,n,i){return new gn(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ti{constructor(t,n=ti.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new ti(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,gn.BLACK,null,null))}remove(t){return new ti(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,gn.BLACK,null,null))}get(t){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(t,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(t){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(t,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new kd(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new kd(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new kd(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new kd(this.root_,null,this.comparator_,!0,t)}}ti.EMPTY_NODE=new Mz;/**
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
 */function Nz(e,t){return bl(e.name,t.name)}function X_(e,t){return bl(e,t)}/**
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
 */let up;function Oz(e){up=e}const PR=function(e){return typeof e=="number"?"number:"+sR(e):"string:"+e},xR=function(e){if(e.isLeafNode()){const t=e.val();Ae(typeof t=="string"||typeof t=="number"||typeof t=="object"&&qr(t,".sv"),"Priority must be a string or number.")}else Ae(e===up||e.isEmpty(),"priority of unexpected type.");Ae(e===up||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let wC;class mn{static set __childrenNodeConstructor(t){wC=t}static get __childrenNodeConstructor(){return wC}constructor(t,n=mn.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,Ae(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),xR(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new mn(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:mn.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return nt(t)?this:st(t)===".priority"?this.priorityNode_:mn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:mn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const i=st(t);return i===null?n:n.isEmpty()&&i!==".priority"?this:(Ae(i!==".priority"||Ds(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,mn.__childrenNodeConstructor.EMPTY_NODE.updateChild(Pt(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+PR(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=sR(this.value_):t+=this.value_,this.lazyHash_=nR(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===mn.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof mn.__childrenNodeConstructor?-1:(Ae(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,i=typeof this.value_,r=mn.VALUE_TYPE_ORDER.indexOf(n),s=mn.VALUE_TYPE_ORDER.indexOf(i);return Ae(r>=0,"Unknown leaf type: "+n),Ae(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}mn.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let RR,VR;function Lz(e){RR=e}function Fz(e){VR=e}class Bz extends Qh{compare(t,n){const i=t.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?bl(t.name,n.name):s}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return ot.MIN}maxPost(){return new ot(Eo,new mn("[PRIORITY-POST]",VR))}makePost(t,n){const i=RR(t);return new ot(n,new mn("[PRIORITY-POST]",i))}toString(){return".priority"}}const Bn=new Bz;/**
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
 */const $z=Math.log(2);class Uz{constructor(t){const n=s=>parseInt(Math.log(s)/$z,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const r=i(this.count);this.bits_=t+1&r}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Xf=function(e,t,n,i){e.sort(t);const r=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=e[l],f=n?n(d):d,new gn(f,d.node,gn.BLACK,null,null);{const m=parseInt(c/2,10)+l,g=r(l,m),y=r(m+1,u);return d=e[m],f=n?n(d):d,new gn(f,d.node,gn.BLACK,g,y)}},s=function(l){let u=null,c=null,d=e.length;const f=function(g,y){const p=d-g,S=d;d-=g;const w=r(p+1,S),T=e[p],x=n?n(T):T;m(new gn(x,T.node,y,null,w))},m=function(g){u?(u.left=g,u=g):(c=g,u=g)};for(let g=0;g<l.count;++g){const y=l.nextBitIsOne(),p=Math.pow(2,l.count-(g+1));y?f(p,gn.BLACK):(f(p,gn.BLACK),f(p,gn.RED))}return c},o=new Uz(e.length),a=s(o);return new ti(i||t,a)};/**
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
 */let Dv;const da={};class Dr{static get Default(){return Ae(da&&Bn,"ChildrenNode.ts has not been loaded"),Dv=Dv||new Dr({".priority":da},{".priority":Bn}),Dv}constructor(t,n){this.indexes_=t,this.indexSet_=n}get(t){const n=qa(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof ti?n:null}hasIndex(t){return qr(this.indexSet_,t.toString())}addIndex(t,n){Ae(t!==Ha,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(ot.Wrap);let o=s.getNext();for(;o;)r=r||t.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=Xf(i,t.getCompare()):a=da;const l=t.toString(),u=Object.assign({},this.indexSet_);u[l]=t;const c=Object.assign({},this.indexes_);return c[l]=a,new Dr(c,u)}addToIndexes(t,n){const i=Af(this.indexes_,(r,s)=>{const o=qa(this.indexSet_,s);if(Ae(o,"Missing index implementation for "+s),r===da)if(o.isDefinedOn(t.node)){const a=[],l=n.getIterator(ot.Wrap);let u=l.getNext();for(;u;)u.name!==t.name&&a.push(u),u=l.getNext();return a.push(t),Xf(a,o.getCompare())}else return da;else{const a=n.get(t.name);let l=r;return a&&(l=l.remove(new ot(t.name,a))),l.insert(t,t.node)}});return new Dr(i,this.indexSet_)}removeFromIndexes(t,n){const i=Af(this.indexes_,r=>{if(r===da)return r;{const s=n.get(t.name);return s?r.remove(new ot(t.name,s)):r}});return new Dr(i,this.indexSet_)}}/**
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
 */let Xl;class gt{static get EMPTY_NODE(){return Xl||(Xl=new gt(new ti(X_),null,Dr.Default))}constructor(t,n,i){this.children_=t,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&xR(this.priorityNode_),this.children_.isEmpty()&&Ae(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Xl}updatePriority(t){return this.children_.isEmpty()?this:new gt(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?Xl:n}}getChild(t){const n=st(t);return n===null?this:this.getImmediateChild(n).getChild(Pt(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(Ae(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const i=new ot(t,n);let r,s;n.isEmpty()?(r=this.children_.remove(t),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(t,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?Xl:this.priorityNode_;return new gt(r,o,s)}}updateChild(t,n){const i=st(t);if(i===null)return n;{Ae(st(t)!==".priority"||Ds(t)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(Pt(t),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(Bn,(o,a)=>{n[o]=a.val(t),i++,s&&gt.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!t&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+PR(this.getPriority().val())+":"),this.forEachChild(Bn,(n,i)=>{const r=i.hash();r!==""&&(t+=":"+n+":"+r)}),this.lazyHash_=t===""?"":nR(t)}return this.lazyHash_}getPredecessorChildName(t,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new ot(t,n));return s?s.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new ot(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new ot(n,this.children_.get(n)):null}forEachChild(t,n){const i=this.resolveIndex_(t);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(t,r=>r);{const r=this.children_.getIteratorFrom(t.name,ot.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,t)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(t,r=>r);{const r=this.children_.getReverseIteratorFrom(t.name,ot.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,t)>0;)r.getNext(),s=r.peek();return r}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Mc?-1:0}withIndex(t){if(t===Ha||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new gt(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===Ha||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Bn),r=n.getIterator(Bn);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(t){return t===Ha?null:this.indexMap_.get(t.toString())}}gt.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Hz extends gt{constructor(){super(new ti(X_),gt.EMPTY_NODE,Dr.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return gt.EMPTY_NODE}isEmpty(){return!1}}const Mc=new Hz;Object.defineProperties(ot,{MIN:{value:new ot(il,gt.EMPTY_NODE)},MAX:{value:new ot(Eo,Mc)}});AR.__EMPTY_NODE=gt.EMPTY_NODE;mn.__childrenNodeConstructor=gt;Oz(Mc);Fz(Mc);/**
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
 */const jz=!0;function Fn(e,t=null){if(e===null)return gt.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),Ae(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new mn(n,Fn(t))}if(!(e instanceof Array)&&jz){const n=[];let i=!1;if(Ai(e,(o,a)=>{if(o.substring(0,1)!=="."){const l=Fn(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new ot(o,l)))}}),n.length===0)return gt.EMPTY_NODE;const s=Xf(n,Nz,o=>o.name,X_);if(i){const o=Xf(n,Bn.getCompare());return new gt(s,Fn(t),new Dr({".priority":o},{".priority":Bn}))}else return new gt(s,Fn(t),Dr.Default)}else{let n=gt.EMPTY_NODE;return Ai(e,(i,r)=>{if(qr(e,i)&&i.substring(0,1)!=="."){const s=Fn(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(Fn(t))}}Lz(Fn);/**
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
 */class Wz extends Qh{constructor(t){super(),this.indexPath_=t,Ae(!nt(t)&&st(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const i=this.extractChild(t.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?bl(t.name,n.name):s}makePost(t,n){const i=Fn(t),r=gt.EMPTY_NODE.updateChild(this.indexPath_,i);return new ot(n,r)}maxPost(){const t=gt.EMPTY_NODE.updateChild(this.indexPath_,Mc);return new ot(Eo,t)}toString(){return CR(this.indexPath_,0).join("/")}}/**
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
 */class zz extends Qh{compare(t,n){const i=t.node.compareTo(n.node);return i===0?bl(t.name,n.name):i}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return ot.MIN}maxPost(){return ot.MAX}makePost(t,n){const i=Fn(t);return new ot(n,i)}toString(){return".value"}}const qz=new zz;/**
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
 */function Gz(e){return{type:"value",snapshotNode:e}}function Kz(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Yz(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function SC(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Qz(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
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
 */class J_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Bn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return Ae(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Ae(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:il}hasEnd(){return this.endSet_}getIndexEndValue(){return Ae(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Ae(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Eo}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return Ae(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Bn}copy(){const t=new J_;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function TC(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Bn?n="$priority":e.index_===qz?n="$value":e.index_===Ha?n="$key":(Ae(e.index_ instanceof Wz,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Tn(n),e.startSet_){const i=e.startAfterSet_?"startAfter":"startAt";t[i]=Tn(e.indexStartValue_),e.startNameSet_&&(t[i]+=","+Tn(e.indexStartName_))}if(e.endSet_){const i=e.endBeforeSet_?"endBefore":"endAt";t[i]=Tn(e.indexEndValue_),e.endNameSet_&&(t[i]+=","+Tn(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function CC(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==Bn&&(t.i=e.index_.toString()),t}/**
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
 */class Jf extends wR{reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(Ae(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}constructor(t,n,i,r){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Vc("p:rest:"),this.listens_={}}listen(t,n,i,r){const s=t._path.toString();this.log_("Listen called for "+s+" "+t._queryIdentifier);const o=Jf.getListenId_(t,i),a={};this.listens_[o]=a;const l=TC(t._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,i),qa(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",r(f,null)}})}unlisten(t,n){const i=Jf.getListenId_(t,n);delete this.listens_[i]}get(t){const n=TC(t._queryParams),i=t._path.toString(),r=new Ou;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(t){}restRequest_(t,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+hl(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Lu(a.responseText)}catch{fi("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&fi("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Xz{constructor(){this.rootNode_=gt.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
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
 */function Zf(){return{value:null,children:new Map}}function DR(e,t,n){if(nt(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const i=st(t);e.children.has(i)||e.children.set(i,Zf());const r=e.children.get(i);t=Pt(t),DR(r,t,n)}}function cp(e,t,n){e.value!==null?n(t,e.value):Jz(e,(i,r)=>{const s=new Mt(t.toString()+"/"+i);cp(r,s,n)})}function Jz(e,t){e.children.forEach((n,i)=>{t(i,n)})}/**
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
 */class Zz{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&Ai(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=t,n}}/**
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
 */const EC=10*1e3,e9=30*1e3,t9=5*60*1e3;class n9{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Zz(t);const i=EC+(e9-EC)*Math.random();Eu(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const t=this.statsListener_.get(),n={};let i=!1;Ai(t,(r,s)=>{s>0&&qr(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),Eu(this.reportStats_.bind(this),Math.floor(Math.random()*2*t9))}}/**
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
 */var tr;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(tr||(tr={}));function MR(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function NR(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function OR(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
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
 */class eh{constructor(t,n,i){this.path=t,this.affectedTree=n,this.revert=i,this.type=tr.ACK_USER_WRITE,this.source=MR()}operationForChild(t){if(nt(this.path)){if(this.affectedTree.value!=null)return Ae(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Mt(t));return new eh(yt(),n,this.revert)}}else return Ae(st(this.path)===t,"operationForChild called for unrelated child."),new eh(Pt(this.path),this.affectedTree,this.revert)}}/**
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
 */class Io{constructor(t,n,i){this.source=t,this.path=n,this.snap=i,this.type=tr.OVERWRITE}operationForChild(t){return nt(this.path)?new Io(this.source,yt(),this.snap.getImmediateChild(t)):new Io(this.source,Pt(this.path),this.snap)}}/**
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
 */class Qu{constructor(t,n,i){this.source=t,this.path=n,this.children=i,this.type=tr.MERGE}operationForChild(t){if(nt(this.path)){const n=this.children.subtree(new Mt(t));return n.isEmpty()?null:n.value?new Io(this.source,yt(),n.value):new Qu(this.source,yt(),n)}else return Ae(st(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Qu(this.source,Pt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Z_{constructor(t,n,i){this.node_=t,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(nt(t))return this.isFullyInitialized()&&!this.filtered_;const n=st(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}function i9(e,t,n,i){const r=[],s=[];return t.forEach(o=>{o.type==="child_changed"&&e.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Qz(o.childName,o.snapshotNode))}),Jl(e,r,"child_removed",t,i,n),Jl(e,r,"child_added",t,i,n),Jl(e,r,"child_moved",s,i,n),Jl(e,r,"child_changed",t,i,n),Jl(e,r,"value",t,i,n),r}function Jl(e,t,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,l)=>s9(e,a,l)),o.forEach(a=>{const l=r9(e,a,s);r.forEach(u=>{u.respondsTo(a.type)&&t.push(u.createEvent(l,e.query_))})})}function r9(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function s9(e,t,n){if(t.childName==null||n.childName==null)throw dl("Should only compare child_ events.");const i=new ot(t.childName,t.snapshotNode),r=new ot(n.childName,n.snapshotNode);return e.index_.compare(i,r)}/**
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
 */function LR(e,t){return{eventCache:e,serverCache:t}}function Iu(e,t,n,i){return LR(new Z_(t,n,i),e.serverCache)}function FR(e,t,n,i){return LR(e.eventCache,new Z_(t,n,i))}function dp(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function ko(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
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
 */let Mv;const o9=()=>(Mv||(Mv=new ti(z3)),Mv);class At{static fromObject(t){let n=new At(null);return Ai(t,(i,r)=>{n=n.set(new Mt(i),r)}),n}constructor(t,n=o9()){this.value=t,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:yt(),value:this.value};if(nt(t))return null;{const i=st(t),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(Pt(t),n);return s!=null?{path:pn(new Mt(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(nt(t))return this;{const n=st(t),i=this.children.get(n);return i!==null?i.subtree(Pt(t)):new At(null)}}set(t,n){if(nt(t))return new At(n,this.children);{const i=st(t),s=(this.children.get(i)||new At(null)).set(Pt(t),n),o=this.children.insert(i,s);return new At(this.value,o)}}remove(t){if(nt(t))return this.children.isEmpty()?new At(null):new At(null,this.children);{const n=st(t),i=this.children.get(n);if(i){const r=i.remove(Pt(t));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new At(null):new At(this.value,s)}else return this}}get(t){if(nt(t))return this.value;{const n=st(t),i=this.children.get(n);return i?i.get(Pt(t)):null}}setTree(t,n){if(nt(t))return n;{const i=st(t),s=(this.children.get(i)||new At(null)).setTree(Pt(t),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new At(this.value,o)}}fold(t){return this.fold_(yt(),t)}fold_(t,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(pn(t,r),n)}),n(t,this.value,i)}findOnPath(t,n){return this.findOnPath_(t,yt(),n)}findOnPath_(t,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(nt(t))return null;{const s=st(t),o=this.children.get(s);return o?o.findOnPath_(Pt(t),pn(n,s),i):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,yt(),n)}foreachOnPath_(t,n,i){if(nt(t))return this;{this.value&&i(n,this.value);const r=st(t),s=this.children.get(r);return s?s.foreachOnPath_(Pt(t),pn(n,r),i):new At(null)}}foreach(t){this.foreach_(yt(),t)}foreach_(t,n){this.children.inorderTraversal((i,r)=>{r.foreach_(pn(t,i),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,i)=>{i.value&&t(n,i.value)})}}/**
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
 */class Bi{constructor(t){this.writeTree_=t}static empty(){return new Bi(new At(null))}}function ku(e,t,n){if(nt(t))return new Bi(new At(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(i!=null){const r=i.path;let s=i.value;const o=Ci(r,t);return s=s.updateChild(o,n),new Bi(e.writeTree_.set(r,s))}else{const r=new At(n),s=e.writeTree_.setTree(t,r);return new Bi(s)}}}function IC(e,t,n){let i=e;return Ai(n,(r,s)=>{i=ku(i,pn(t,r),s)}),i}function kC(e,t){if(nt(t))return Bi.empty();{const n=e.writeTree_.setTree(t,new At(null));return new Bi(n)}}function fp(e,t){return Wo(e,t)!=null}function Wo(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(Ci(n.path,t)):null}function AC(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Bn,(i,r)=>{t.push(new ot(i,r))}):e.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&t.push(new ot(i,r.value))}),t}function Cs(e,t){if(nt(t))return e;{const n=Wo(e,t);return n!=null?new Bi(new At(n)):new Bi(e.writeTree_.subtree(t))}}function hp(e){return e.writeTree_.isEmpty()}function rl(e,t){return BR(yt(),e.writeTree_,t)}function BR(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal((r,s)=>{r===".priority"?(Ae(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=BR(pn(e,r),s,n)}),!n.getChild(e).isEmpty()&&i!==null&&(n=n.updateChild(pn(e,".priority"),i)),n}}/**
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
 */function $R(e,t){return zR(t,e)}function a9(e,t,n,i,r){Ae(i>e.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=ku(e.visibleWrites,t,n)),e.lastWriteId=i}function l9(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function u9(e,t){const n=e.allWrites.findIndex(a=>a.writeId===t);Ae(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){const a=e.allWrites[o];a.visible&&(o>=n&&c9(a,i.path)?r=!1:Oi(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return d9(e),!0;if(i.snap)e.visibleWrites=kC(e.visibleWrites,i.path);else{const a=i.children;Ai(a,l=>{e.visibleWrites=kC(e.visibleWrites,pn(i.path,l))})}return!0}else return!1}function c9(e,t){if(e.snap)return Oi(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Oi(pn(e.path,n),t))return!0;return!1}function d9(e){e.visibleWrites=UR(e.allWrites,f9,yt()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function f9(e){return e.visible}function UR(e,t,n){let i=Bi.empty();for(let r=0;r<e.length;++r){const s=e[r];if(t(s)){const o=s.path;let a;if(s.snap)Oi(n,o)?(a=Ci(n,o),i=ku(i,a,s.snap)):Oi(o,n)&&(a=Ci(o,n),i=ku(i,yt(),s.snap.getChild(a)));else if(s.children){if(Oi(n,o))a=Ci(n,o),i=IC(i,a,s.children);else if(Oi(o,n))if(a=Ci(o,n),nt(a))i=IC(i,yt(),s.children);else{const l=qa(s.children,st(a));if(l){const u=l.getChild(Pt(a));i=ku(i,yt(),u)}}}else throw dl("WriteRecord should have .snap or .children")}}return i}function HR(e,t,n,i,r){if(!i&&!r){const s=Wo(e.visibleWrites,t);if(s!=null)return s;{const o=Cs(e.visibleWrites,t);if(hp(o))return n;if(n==null&&!fp(o,yt()))return null;{const a=n||gt.EMPTY_NODE;return rl(o,a)}}}else{const s=Cs(e.visibleWrites,t);if(!r&&hp(s))return n;if(!r&&n==null&&!fp(s,yt()))return null;{const o=function(u){return(u.visible||r)&&(!i||!~i.indexOf(u.writeId))&&(Oi(u.path,t)||Oi(t,u.path))},a=UR(e.allWrites,o,t),l=n||gt.EMPTY_NODE;return rl(a,l)}}}function h9(e,t,n){let i=gt.EMPTY_NODE;const r=Wo(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(Bn,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=Cs(e.visibleWrites,t);return n.forEachChild(Bn,(o,a)=>{const l=rl(Cs(s,new Mt(o)),a);i=i.updateImmediateChild(o,l)}),AC(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=Cs(e.visibleWrites,t);return AC(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function m9(e,t,n,i,r){Ae(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=pn(t,n);if(fp(e.visibleWrites,s))return null;{const o=Cs(e.visibleWrites,s);return hp(o)?r.getChild(n):rl(o,r.getChild(n))}}function v9(e,t,n,i){const r=pn(t,n),s=Wo(e.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=Cs(e.visibleWrites,r);return rl(o,i.getNode().getImmediateChild(n))}else return null}function g9(e,t){return Wo(e.visibleWrites,t)}function p9(e,t,n,i,r,s,o){let a;const l=Cs(e.visibleWrites,t),u=Wo(l,yt());if(u!=null)a=u;else if(n!=null)a=rl(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let m=f.getNext();for(;m&&c.length<r;)d(m,i)!==0&&c.push(m),m=f.getNext();return c}else return[]}function y9(){return{visibleWrites:Bi.empty(),allWrites:[],lastWriteId:-1}}function mp(e,t,n,i){return HR(e.writeTree,e.treePath,t,n,i)}function jR(e,t){return h9(e.writeTree,e.treePath,t)}function PC(e,t,n,i){return m9(e.writeTree,e.treePath,t,n,i)}function th(e,t){return g9(e.writeTree,pn(e.treePath,t))}function _9(e,t,n,i,r,s){return p9(e.writeTree,e.treePath,t,n,i,r,s)}function eb(e,t,n){return v9(e.writeTree,e.treePath,t,n)}function WR(e,t){return zR(pn(e.treePath,t),e.writeTree)}function zR(e,t){return{treePath:e,writeTree:t}}/**
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
 */class b9{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,i=t.childName;Ae(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),Ae(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,SC(i,t.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,Yz(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,Kz(i,t.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,SC(i,t.snapshotNode,r.oldSnap));else throw dl("Illegal combination of changes: "+t+" occurred after "+r)}else this.changeMap.set(i,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class w9{getCompleteChild(t){return null}getChildAfterChild(t,n,i){return null}}const qR=new w9;class tb{constructor(t,n,i=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const i=this.optCompleteServerCache_!=null?new Z_(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return eb(this.writes_,t,i)}}getChildAfterChild(t,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ko(this.viewCache_),s=_9(this.writes_,r,n,1,i,t);return s.length===0?null:s[0]}}function S9(e,t){Ae(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),Ae(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function T9(e,t,n,i,r){const s=new b9;let o,a;if(n.type===tr.OVERWRITE){const u=n;u.source.fromUser?o=vp(e,t,u.path,u.snap,i,r,s):(Ae(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered()&&!nt(u.path),o=nh(e,t,u.path,u.snap,i,r,a,s))}else if(n.type===tr.MERGE){const u=n;u.source.fromUser?o=E9(e,t,u.path,u.children,i,r,s):(Ae(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered(),o=gp(e,t,u.path,u.children,i,r,a,s))}else if(n.type===tr.ACK_USER_WRITE){const u=n;u.revert?o=A9(e,t,u.path,i,r,s):o=I9(e,t,u.path,u.affectedTree,i,r,s)}else if(n.type===tr.LISTEN_COMPLETE)o=k9(e,t,n.path,i,s);else throw dl("Unknown operation type: "+n.type);const l=s.getChanges();return C9(t,o,l),{viewCache:o,changes:l}}function C9(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=dp(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(Gz(dp(t)))}}function GR(e,t,n,i,r,s){const o=t.eventCache;if(th(i,n)!=null)return t;{let a,l;if(nt(n))if(Ae(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const u=ko(t),c=u instanceof gt?u:gt.EMPTY_NODE,d=jR(i,c);a=e.filter.updateFullNode(t.eventCache.getNode(),d,s)}else{const u=mp(i,ko(t));a=e.filter.updateFullNode(t.eventCache.getNode(),u,s)}else{const u=st(n);if(u===".priority"){Ae(Ds(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=t.serverCache.getNode();const d=PC(i,n,c,l);d!=null?a=e.filter.updatePriority(c,d):a=o.getNode()}else{const c=Pt(n);let d;if(o.isCompleteForChild(u)){l=t.serverCache.getNode();const f=PC(i,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=eb(i,u,t.serverCache);d!=null?a=e.filter.updateChild(o.getNode(),u,d,c,r,s):a=o.getNode()}}return Iu(t,a,o.isFullyInitialized()||nt(n),e.filter.filtersNodes())}}function nh(e,t,n,i,r,s,o,a){const l=t.serverCache;let u;const c=o?e.filter:e.filter.getIndexedFilter();if(nt(n))u=c.updateFullNode(l.getNode(),i,null);else if(c.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,i);u=c.updateFullNode(l.getNode(),m,null)}else{const m=st(n);if(!l.isCompleteForPath(n)&&Ds(n)>1)return t;const g=Pt(n),p=l.getNode().getImmediateChild(m).updateChild(g,i);m===".priority"?u=c.updatePriority(l.getNode(),p):u=c.updateChild(l.getNode(),m,p,g,qR,null)}const d=FR(t,u,l.isFullyInitialized()||nt(n),c.filtersNodes()),f=new tb(r,d,s);return GR(e,d,n,r,f,a)}function vp(e,t,n,i,r,s,o){const a=t.eventCache;let l,u;const c=new tb(r,t,s);if(nt(n))u=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=Iu(t,u,!0,e.filter.filtersNodes());else{const d=st(n);if(d===".priority")u=e.filter.updatePriority(t.eventCache.getNode(),i),l=Iu(t,u,a.isFullyInitialized(),a.isFiltered());else{const f=Pt(n),m=a.getNode().getImmediateChild(d);let g;if(nt(f))g=i;else{const y=c.getCompleteChild(d);y!=null?TR(f)===".priority"&&y.getChild(ER(f)).isEmpty()?g=y:g=y.updateChild(f,i):g=gt.EMPTY_NODE}if(m.equals(g))l=t;else{const y=e.filter.updateChild(a.getNode(),d,g,f,c,o);l=Iu(t,y,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function xC(e,t){return e.eventCache.isCompleteForChild(t)}function E9(e,t,n,i,r,s,o){let a=t;return i.foreach((l,u)=>{const c=pn(n,l);xC(t,st(c))&&(a=vp(e,a,c,u,r,s,o))}),i.foreach((l,u)=>{const c=pn(n,l);xC(t,st(c))||(a=vp(e,a,c,u,r,s,o))}),a}function RC(e,t,n){return n.foreach((i,r)=>{t=t.updateChild(i,r)}),t}function gp(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l=t,u;nt(n)?u=i:u=new At(null).setTree(n,i);const c=t.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const m=t.serverCache.getNode().getImmediateChild(d),g=RC(e,m,f);l=nh(e,l,new Mt(d),g,r,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const m=!t.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!m){const g=t.serverCache.getNode().getImmediateChild(d),y=RC(e,g,f);l=nh(e,l,new Mt(d),y,r,s,o,a)}}),l}function I9(e,t,n,i,r,s,o){if(th(r,n)!=null)return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(i.value!=null){if(nt(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return nh(e,t,n,l.getNode().getChild(n),r,s,a,o);if(nt(n)){let u=new At(null);return l.getNode().forEachChild(Ha,(c,d)=>{u=u.set(new Mt(c),d)}),gp(e,t,n,u,r,s,a,o)}else return t}else{let u=new At(null);return i.foreach((c,d)=>{const f=pn(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),gp(e,t,n,u,r,s,a,o)}}function k9(e,t,n,i,r){const s=t.serverCache,o=FR(t,s.getNode(),s.isFullyInitialized()||nt(n),s.isFiltered());return GR(e,o,n,i,qR,r)}function A9(e,t,n,i,r,s){let o;if(th(i,n)!=null)return t;{const a=new tb(i,t,r),l=t.eventCache.getNode();let u;if(nt(n)||st(n)===".priority"){let c;if(t.serverCache.isFullyInitialized())c=mp(i,ko(t));else{const d=t.serverCache.getNode();Ae(d instanceof gt,"serverChildren would be complete if leaf node"),c=jR(i,d)}c=c,u=e.filter.updateFullNode(l,c,s)}else{const c=st(n);let d=eb(i,c,t.serverCache);d==null&&t.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=e.filter.updateChild(l,c,d,Pt(n),a,s):t.eventCache.getNode().hasChild(c)?u=e.filter.updateChild(l,c,gt.EMPTY_NODE,Pt(n),a,s):u=l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=mp(i,ko(t)),o.isLeafNode()&&(u=e.filter.updateFullNode(u,o,s)))}return o=t.serverCache.isFullyInitialized()||th(i,yt())!=null,Iu(t,u,o,e.filter.filtersNodes())}}function P9(e,t){const n=ko(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!nt(t)&&!n.getImmediateChild(st(t)).isEmpty())?n.getChild(t):null}function VC(e,t,n,i){t.type===tr.MERGE&&t.source.queryId!==null&&(Ae(ko(e.viewCache_),"We should always have a full cache before handling merges"),Ae(dp(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,s=T9(e.processor_,r,t,n,i);return S9(e.processor_,s.viewCache),Ae(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,x9(e,s.changes,s.viewCache.eventCache.getNode())}function x9(e,t,n,i){const r=e.eventRegistrations_;return i9(e.eventGenerator_,t,n,r)}/**
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
 */let DC;function R9(e){Ae(!DC,"__referenceConstructor has already been defined"),DC=e}function nb(e,t,n,i){const r=t.source.queryId;if(r!==null){const s=e.views.get(r);return Ae(s!=null,"SyncTree gave us an op for an invalid query."),VC(s,t,n,i)}else{let s=[];for(const o of e.views.values())s=s.concat(VC(o,t,n,i));return s}}function ib(e,t){let n=null;for(const i of e.views.values())n=n||P9(i,t);return n}/**
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
 */let MC;function V9(e){Ae(!MC,"__referenceConstructor has already been defined"),MC=e}class NC{constructor(t){this.listenProvider_=t,this.syncPointTree_=new At(null),this.pendingWriteTree_=y9(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function D9(e,t,n,i,r){return a9(e.pendingWriteTree_,t,n,i,r),r?Jh(e,new Io(MR(),t,n)):[]}function ka(e,t,n=!1){const i=l9(e.pendingWriteTree_,t);if(u9(e.pendingWriteTree_,t)){let s=new At(null);return i.snap!=null?s=s.set(yt(),!0):Ai(i.children,o=>{s=s.set(new Mt(o),!0)}),Jh(e,new eh(i.path,s,n))}else return[]}function Xh(e,t,n){return Jh(e,new Io(NR(),t,n))}function M9(e,t,n){const i=At.fromObject(n);return Jh(e,new Qu(NR(),t,i))}function N9(e,t,n,i){const r=XR(e,i);if(r!=null){const s=JR(r),o=s.path,a=s.queryId,l=Ci(o,t),u=new Io(OR(a),l,n);return ZR(e,o,u)}else return[]}function O9(e,t,n,i){const r=XR(e,i);if(r){const s=JR(r),o=s.path,a=s.queryId,l=Ci(o,t),u=At.fromObject(n),c=new Qu(OR(a),l,u);return ZR(e,o,c)}else return[]}function KR(e,t,n){const r=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,(o,a)=>{const l=Ci(o,t),u=ib(a,l);if(u)return u});return HR(r,t,s,n,!0)}function Jh(e,t){return YR(t,e.syncPointTree_,null,$R(e.pendingWriteTree_,yt()))}function YR(e,t,n,i){if(nt(e.path))return QR(e,t,n,i);{const r=t.get(yt());n==null&&r!=null&&(n=ib(r,yt()));let s=[];const o=st(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=WR(i,o);s=s.concat(YR(a,l,u,c))}return r&&(s=s.concat(nb(r,e,i,n))),s}}function QR(e,t,n,i){const r=t.get(yt());n==null&&r!=null&&(n=ib(r,yt()));let s=[];return t.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=WR(i,o),c=e.operationForChild(o);c&&(s=s.concat(QR(c,a,l,u)))}),r&&(s=s.concat(nb(r,e,i,n))),s}function XR(e,t){return e.tagToQueryMap.get(t)}function JR(e){const t=e.indexOf("$");return Ae(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Mt(e.substr(0,t))}}function ZR(e,t,n){const i=e.syncPointTree_.get(t);Ae(i,"Missing sync point for query tag that we're tracking");const r=$R(e.pendingWriteTree_,t);return nb(i,n,r,null)}/**
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
 */class rb{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new rb(n)}node(){return this.node_}}class sb{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=pn(this.path_,t);return new sb(this.syncTree_,n)}node(){return KR(this.syncTree_,this.path_)}}const L9=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},OC=function(e,t,n){if(!e||typeof e!="object")return e;if(Ae(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return F9(e[".sv"],t,n);if(typeof e[".sv"]=="object")return B9(e[".sv"],t);Ae(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},F9=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:Ae(!1,"Unexpected server value: "+e)}},B9=function(e,t,n){e.hasOwnProperty("increment")||Ae(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;typeof i!="number"&&Ae(!1,"Unexpected increment value: "+i);const r=t.node();if(Ae(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},$9=function(e,t,n,i){return ob(t,new sb(n,e),i)},U9=function(e,t,n){return ob(e,new rb(t),n)};function ob(e,t,n){const i=e.getPriority().val(),r=OC(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const o=e,a=OC(o.getValue(),t,n);return a!==o.getValue()||r!==o.getPriority().val()?new mn(a,Fn(r)):e}else{const o=e;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new mn(r))),o.forEachChild(Bn,(a,l)=>{const u=ob(l,t.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class ab{constructor(t="",n=null,i={children:{},childCount:0}){this.name=t,this.parent=n,this.node=i}}function lb(e,t){let n=t instanceof Mt?t:new Mt(t),i=e,r=st(n);for(;r!==null;){const s=qa(i.node.children,r)||{children:{},childCount:0};i=new ab(r,i,s),n=Pt(n),r=st(n)}return i}function wl(e){return e.node.value}function e1(e,t){e.node.value=t,pp(e)}function t1(e){return e.node.childCount>0}function H9(e){return wl(e)===void 0&&!t1(e)}function Zh(e,t){Ai(e.node.children,(n,i)=>{t(new ab(n,e,i))})}function n1(e,t,n,i){n&&!i&&t(e),Zh(e,r=>{n1(r,t,!0,i)}),n&&i&&t(e)}function j9(e,t,n){let i=e.parent;for(;i!==null;){if(t(i))return!0;i=i.parent}return!1}function Nc(e){return new Mt(e.parent===null?e.name:Nc(e.parent)+"/"+e.name)}function pp(e){e.parent!==null&&W9(e.parent,e.name,e)}function W9(e,t,n){const i=H9(n),r=qr(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,pp(e)):!i&&!r&&(e.node.children[t]=n.node,e.node.childCount++,pp(e))}/**
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
 */const z9=/[\[\].#$\/\u0000-\u001F\u007F]/,q9=/[\[\].#$\u0000-\u001F\u007F]/,Nv=10*1024*1024,i1=function(e){return typeof e=="string"&&e.length!==0&&!z9.test(e)},G9=function(e){return typeof e=="string"&&e.length!==0&&!q9.test(e)},K9=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),G9(e)},r1=function(e,t,n){const i=n instanceof Mt?new kz(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+io(i));if(typeof t=="function")throw new Error(e+"contains a function "+io(i)+" with contents = "+t.toString());if(iR(t))throw new Error(e+"contains "+t.toString()+" "+io(i));if(typeof t=="string"&&t.length>Nv/3&&Rh(t)>Nv)throw new Error(e+"contains a string greater than "+Nv+" utf8 bytes "+io(i)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let r=!1,s=!1;if(Ai(t,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!i1(o)))throw new Error(e+" contains an invalid key ("+o+") "+io(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Az(i,o),r1(e,a,i),Pz(i)}),r&&s)throw new Error(e+' contains ".value" child '+io(i)+" in addition to actual children.")}},Y9=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!i1(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!K9(n))throw new Error(bB(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Q9{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function X9(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();n!==null&&!IR(s,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function zo(e,t,n){X9(e,n),J9(e,i=>Oi(i,t)||Oi(t,i))}function J9(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){const s=r.path;t(s)?(Z9(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Z9(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const i=n.getEventRunner();Cu&&Ln("event: "+n.toString()),Dc(i)}}}/**
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
 */const eq="repo_interrupt",tq=25;class nq{constructor(t,n,i,r){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Q9,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Zf(),this.transactionQueueTree_=new ab,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function iq(e,t,n){if(e.stats_=K_(e.repoInfo_),e.forceRestClient_||X3())e.server_=new Jf(e.repoInfo_,(i,r,s,o)=>{LC(e,i,r,s,o)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>FC(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Tn(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new Nr(e.repoInfo_,t,(i,r,s,o)=>{LC(e,i,r,s,o)},i=>{FC(e,i)},i=>{sq(e,i)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(i=>{e.server_.refreshAuthToken(i)}),e.appCheckProvider_.addTokenChangeListener(i=>{e.server_.refreshAppCheckToken(i.token)}),e.statsReporter_=iz(e.repoInfo_,()=>new n9(e.stats_,e.server_)),e.infoData_=new Xz,e.infoSyncTree_=new NC({startListening:(i,r,s,o)=>{let a=[];const l=e.infoData_.getNode(i._path);return l.isEmpty()||(a=Xh(e.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ub(e,"connected",!1),e.serverSyncTree_=new NC({startListening:(i,r,s,o)=>(e.server_.listen(i,s,r,(a,l)=>{const u=o(a,l);zo(e.eventQueue_,i._path,u)}),[]),stopListening:(i,r)=>{e.server_.unlisten(i,r)}})}function rq(e){const n=e.infoData_.getNode(new Mt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function s1(e){return L9({timestamp:rq(e)})}function LC(e,t,n,i,r){e.dataUpdateCount++;const s=new Mt(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r)if(i){const l=Af(n,u=>Fn(u));o=O9(e.serverSyncTree_,s,l,r)}else{const l=Fn(n);o=N9(e.serverSyncTree_,s,l,r)}else if(i){const l=Af(n,u=>Fn(u));o=M9(e.serverSyncTree_,s,l)}else{const l=Fn(n);o=Xh(e.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=db(e,s)),zo(e.eventQueue_,a,o)}function FC(e,t){ub(e,"connected",t),t===!1&&aq(e)}function sq(e,t){Ai(t,(n,i)=>{ub(e,n,i)})}function ub(e,t,n){const i=new Mt("/.info/"+t),r=Fn(n);e.infoData_.updateSnapshot(i,r);const s=Xh(e.infoSyncTree_,i,r);zo(e.eventQueue_,i,s)}function oq(e){return e.nextWriteId_++}function aq(e){o1(e,"onDisconnectEvents");const t=s1(e),n=Zf();cp(e.onDisconnect_,yt(),(r,s)=>{const o=$9(r,s,e.serverSyncTree_,t);DR(n,r,o)});let i=[];cp(n,yt(),(r,s)=>{i=i.concat(Xh(e.serverSyncTree_,r,s));const o=dq(e,r);db(e,o)}),e.onDisconnect_=Zf(),zo(e.eventQueue_,yt(),i)}function lq(e){e.persistentConnection_&&e.persistentConnection_.interrupt(eq)}function o1(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Ln(n,...t)}function a1(e,t,n){return KR(e.serverSyncTree_,t,n)||gt.EMPTY_NODE}function cb(e,t=e.transactionQueueTree_){if(t||em(e,t),wl(t)){const n=u1(e,t);Ae(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&uq(e,Nc(t),n)}else t1(t)&&Zh(t,n=>{cb(e,n)})}function uq(e,t,n){const i=n.map(u=>u.currentWriteId),r=a1(e,t,i);let s=r;const o=r.hash();for(let u=0;u<n.length;u++){const c=n[u];Ae(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=Ci(t,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,u=>{o1(e,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(ka(e.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();em(e,lb(e.transactionQueueTree_,t)),cb(e,e.transactionQueueTree_),zo(e.eventQueue_,t,c);for(let f=0;f<d.length;f++)Dc(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{fi("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}db(e,t)}},o)}function db(e,t){const n=l1(e,t),i=Nc(n),r=u1(e,n);return cq(e,r,i),i}function cq(e,t,n){if(t.length===0)return;const i=[];let r=[];const o=t.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<t.length;a++){const l=t[a],u=Ci(n,l.path);let c=!1,d;if(Ae(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,r=r.concat(ka(e.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=tq)c=!0,d="maxretry",r=r.concat(ka(e.serverSyncTree_,l.currentWriteId,!0));else{const f=a1(e,l.path,o);l.currentInputSnapshot=f;const m=t[a].update(f.val());if(m!==void 0){r1("transaction failed: Data returned ",m,l.path);let g=Fn(m);typeof m=="object"&&m!=null&&qr(m,".priority")||(g=g.updatePriority(f.getPriority()));const p=l.currentWriteId,S=s1(e),w=U9(g,f,S);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=w,l.currentWriteId=oq(e),o.splice(o.indexOf(p),1),r=r.concat(D9(e.serverSyncTree_,l.path,w,l.currentWriteId,l.applyLocally)),r=r.concat(ka(e.serverSyncTree_,p,!0))}else c=!0,d="nodata",r=r.concat(ka(e.serverSyncTree_,l.currentWriteId,!0))}zo(e.eventQueue_,n,r),r=[],c&&(t[a].status=2,function(f){setTimeout(f,Math.floor(0))}(t[a].unwatcher),t[a].onComplete&&(d==="nodata"?i.push(()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot)):i.push(()=>t[a].onComplete(new Error(d),!1,null))))}em(e,e.transactionQueueTree_);for(let a=0;a<i.length;a++)Dc(i[a]);cb(e,e.transactionQueueTree_)}function l1(e,t){let n,i=e.transactionQueueTree_;for(n=st(t);n!==null&&wl(i)===void 0;)i=lb(i,n),t=Pt(t),n=st(t);return i}function u1(e,t){const n=[];return c1(e,t,n),n.sort((i,r)=>i.order-r.order),n}function c1(e,t,n){const i=wl(t);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Zh(t,r=>{c1(e,r,n)})}function em(e,t){const n=wl(t);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,e1(t,n.length>0?n:void 0)}Zh(t,i=>{em(e,i)})}function dq(e,t){const n=Nc(l1(e,t)),i=lb(e.transactionQueueTree_,t);return j9(i,r=>{Ov(e,r)}),Ov(e,i),n1(i,r=>{Ov(e,r)}),n}function Ov(e,t){const n=wl(t);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(Ae(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(Ae(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(ka(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?e1(t,void 0):n.length=s+1,zo(e.eventQueue_,Nc(t),r);for(let o=0;o<i.length;o++)Dc(i[o])}}/**
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
 */function fq(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}t+="/"+r}return t}function hq(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):fi(`Invalid query segment '${n}' in query '${e}'`)}return t}const BC=function(e,t){const n=mq(e),i=n.namespace;n.domain==="firebase.com"&&Co(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Co("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||j3();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new ez(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new Mt(n.pathString)}},mq=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",l=443;if(typeof e=="string"){let u=e.indexOf("//");u>=0&&(a=e.substring(0,u-1),e=e.substring(u+2));let c=e.indexOf("/");c===-1&&(c=e.length);let d=e.indexOf("?");d===-1&&(d=e.length),t=e.substring(0,Math.min(c,d)),c<d&&(r=fq(e.substring(c,d)));const f=hq(e.substring(Math.min(e.length,d)));u=t.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(t.substring(u+1),10)):u=t.length;const m=t.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const g=t.indexOf(".");i=t.substring(0,g).toLowerCase(),n=t.substring(g+1),s=i}"ns"in f&&(s=f.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
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
 */class fb{constructor(t,n,i,r){this._repo=t,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return nt(this._path)?null:TR(this._path)}get ref(){return new Sl(this._repo,this._path)}get _queryIdentifier(){const t=CC(this._queryParams),n=q_(t);return n==="{}"?"default":n}get _queryObject(){return CC(this._queryParams)}isEqual(t){if(t=En(t),!(t instanceof fb))return!1;const n=this._repo===t._repo,i=IR(this._path,t._path),r=this._queryIdentifier===t._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+Iz(this._path)}}class Sl extends fb{constructor(t,n){super(t,n,new J_,!1)}get parent(){const t=ER(this._path);return t===null?null:new Sl(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}R9(Sl);V9(Sl);/**
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
 */const vq="FIREBASE_DATABASE_EMULATOR_HOST",yp={};let gq=!1;function pq(e,t,n,i,r){let s=i||e.options.databaseURL;s===void 0&&(e.options.projectId||Co("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ln("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o=BC(s,r),a=o.repoInfo,l;typeof process<"u"&&sC&&(l=sC[vq]),l?(s=`http://${l}?ns=${a.namespace}`,o=BC(s,r),a=o.repoInfo):o.repoInfo.secure;const u=new Z3(e.name,e.options,t);Y9("Invalid Firebase Database URL",o),nt(o.path)||Co("Database URL must point to the root of a Firebase Database (not including a child path).");const c=_q(a,e,u,new J3(e.name,n));return new bq(c,e)}function yq(e,t){const n=yp[t];(!n||n[e.key]!==e)&&Co(`Database ${t}(${e.repoInfo_}) has already been deleted.`),lq(e),delete n[e.key]}function _q(e,t,n,i){let r=yp[t.name];r||(r={},yp[t.name]=r);let s=r[e.toURLString()];return s&&Co("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new nq(e,gq,n,i),r[e.toURLString()]=s,s}class bq{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(iq(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Sl(this._repo,yt())),this._rootInternal}_delete(){return this._rootInternal!==null&&(yq(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&Co("Cannot call "+t+" on a deleted database.")}}/**
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
 */function wq(e){L3($s),ur(new Hi("database",(t,{instanceIdentifier:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return pq(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),ci(oC,aC,e),ci(oC,aC,"esm2017")}Nr.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};Nr.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};wq();/**
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
 */const d1="firebasestorage.googleapis.com",f1="storageBucket",Sq=2*60*1e3,Tq=10*60*1e3;/**
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
 */class Wt extends mr{constructor(t,n,i=0){super(Lv(t),`Firebase Storage: ${n} (${Lv(t)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Wt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Lv(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var jt;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(jt||(jt={}));function Lv(e){return"storage/"+e}function hb(){const e="An unknown error occurred, please check the error payload for server response.";return new Wt(jt.UNKNOWN,e)}function Cq(e){return new Wt(jt.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function Eq(e){return new Wt(jt.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Iq(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Wt(jt.UNAUTHENTICATED,e)}function kq(){return new Wt(jt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Aq(e){return new Wt(jt.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Pq(){return new Wt(jt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function xq(){return new Wt(jt.CANCELED,"User canceled the upload/download.")}function Rq(e){return new Wt(jt.INVALID_URL,"Invalid URL '"+e+"'.")}function Vq(e){return new Wt(jt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Dq(){return new Wt(jt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+f1+"' property when initializing the app?")}function Mq(){return new Wt(jt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Nq(){return new Wt(jt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Oq(e){return new Wt(jt.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function _p(e){return new Wt(jt.INVALID_ARGUMENT,e)}function h1(){return new Wt(jt.APP_DELETED,"The Firebase app was deleted.")}function Lq(e){return new Wt(jt.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Au(e,t){return new Wt(jt.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function Zl(e){throw new Wt(jt.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class li{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let i;try{i=li.makeFromUrl(t,n)}catch{return new li(t,"")}if(i.path==="")return i;throw Vq(t)}static makeFromUrl(t,n){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function u(x){x.path_=decodeURIComponent(x.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",m=new RegExp(`^https?://${d}/${c}/b/${r}/o${f}`,"i"),g={bucket:1,path:3},y=n===d1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,p="([^?#]*)",S=new RegExp(`^https?://${y}/${r}/${p}`,"i"),T=[{regex:a,indices:l,postModify:s},{regex:m,indices:g,postModify:u},{regex:S,indices:{bucket:1,path:2},postModify:u}];for(let x=0;x<T.length;x++){const V=T[x],D=V.regex.exec(t);if(D){const A=D[V.indices.bucket];let b=D[V.indices.path];b||(b=""),i=new li(A,b),V.postModify(i);break}}if(i==null)throw Rq(t);return i}}class Fq{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function Bq(e,t,n){let i=1,r=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...p){u||(u=!0,t.apply(null,p))}function d(p){r=setTimeout(()=>{r=null,e(m,l())},p)}function f(){s&&clearTimeout(s)}function m(p,...S){if(u){f();return}if(p){f(),c.call(null,p,...S);return}if(l()||o){f(),c.call(null,p,...S);return}i<64&&(i*=2);let T;a===1?(a=2,T=0):T=(i+Math.random())*1e3,d(T)}let g=!1;function y(p){g||(g=!0,f(),!u&&(r!==null?(p||(a=2),clearTimeout(r),d(0)):p||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function $q(e){e(!1)}/**
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
 */function Uq(e){return e!==void 0}function Hq(e){return typeof e=="object"&&!Array.isArray(e)}function mb(e){return typeof e=="string"||e instanceof String}function $C(e){return vb()&&e instanceof Blob}function vb(){return typeof Blob<"u"}function UC(e,t,n,i){if(i<t)throw _p(`Invalid value for '${e}'. Expected ${t} or greater.`);if(i>n)throw _p(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function tm(e,t,n){let i=t;return n==null&&(i=`https://${t}`),`${n}://${i}/v0${e}`}function m1(e){const t=encodeURIComponent;let n="?";for(const i in e)if(e.hasOwnProperty(i)){const r=t(i)+"="+t(e[i]);n=n+r+"&"}return n=n.slice(0,-1),n}var go;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(go||(go={}));/**
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
 */function jq(e,t){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||r||s}/**
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
 */class Wq{constructor(t,n,i,r,s,o,a,l,u,c,d,f=!0){this.url_=t,this.method_=n,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,g)=>{this.resolve_=m,this.reject_=g,this.start_()})}start_(){const t=(i,r)=>{if(r){i(!1,new Ad(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===go.NO_ERROR,l=s.getStatus();if(!a||jq(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===go.ABORT;i(!1,new Ad(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;i(!0,new Ad(u,s))})},n=(i,r)=>{const s=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Uq(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=hb();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?h1():xq();o(l)}else{const l=Pq();o(l)}};this.canceled_?n(!1,new Ad(!1,null,!0)):this.backoffId_=Bq(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&$q(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ad{constructor(t,n,i){this.wasSuccessCode=t,this.connection=n,this.canceled=!!i}}function zq(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function qq(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Gq(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Kq(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Yq(e,t,n,i,r,s,o=!0){const a=m1(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return Gq(u,t),zq(u,n),qq(u,s),Kq(u,i),new Wq(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,o)}/**
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
 */function Qq(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Xq(...e){const t=Qq();if(t!==void 0){const n=new t;for(let i=0;i<e.length;i++)n.append(e[i]);return n.getBlob()}else{if(vb())return new Blob(e);throw new Wt(jt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Jq(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function Zq(e){if(typeof atob>"u")throw Oq("base-64");return atob(e)}/**
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
 */const nr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Fv{constructor(t,n){this.data=t,this.contentType=n||null}}function eG(e,t){switch(e){case nr.RAW:return new Fv(v1(t));case nr.BASE64:case nr.BASE64URL:return new Fv(g1(e,t));case nr.DATA_URL:return new Fv(nG(t),iG(t))}throw hb()}function v1(e){const t=[];for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);if(i<=127)t.push(i);else if(i<=2047)t.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const s=i,o=e.charCodeAt(++n);i=65536|(s&1023)<<10|o&1023,t.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?t.push(239,191,189):t.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(t)}function tG(e){let t;try{t=decodeURIComponent(e)}catch{throw Au(nr.DATA_URL,"Malformed data URL.")}return v1(t)}function g1(e,t){switch(e){case nr.BASE64:{const r=t.indexOf("-")!==-1,s=t.indexOf("_")!==-1;if(r||s)throw Au(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case nr.BASE64URL:{const r=t.indexOf("+")!==-1,s=t.indexOf("/")!==-1;if(r||s)throw Au(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Zq(t)}catch(r){throw r.message.includes("polyfill")?r:Au(e,"Invalid character found")}const i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i}class p1{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw Au(nr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=n[1]||null;i!=null&&(this.base64=rG(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=t.substring(t.indexOf(",")+1)}}function nG(e){const t=new p1(e);return t.base64?g1(nr.BASE64,t.rest):tG(t.rest)}function iG(e){return new p1(e).contentType}function rG(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class fs{constructor(t,n){let i=0,r="";$C(t)?(this.data_=t,i=t.size,r=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),i=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),i=t.length),this.size_=i,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,n){if($C(this.data_)){const i=this.data_,r=Jq(i,t,n);return r===null?null:new fs(r)}else{const i=new Uint8Array(this.data_.buffer,t,n-t);return new fs(i,!0)}}static getBlob(...t){if(vb()){const n=t.map(i=>i instanceof fs?i.data_:i);return new fs(Xq.apply(null,n))}else{const n=t.map(o=>mb(o)?eG(nr.RAW,o).data:o.data_);let i=0;n.forEach(o=>{i+=o.byteLength});const r=new Uint8Array(i);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[s++]=o[a]}),new fs(r,!0)}}uploadData(){return this.data_}}/**
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
 */function y1(e){let t;try{t=JSON.parse(e)}catch{return null}return Hq(t)?t:null}/**
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
 */function sG(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function oG(e,t){const n=t.split("/").filter(i=>i.length>0).join("/");return e.length===0?n:e+"/"+n}function _1(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function aG(e,t){return t}class Gn{constructor(t,n,i,r){this.server=t,this.local=n||t,this.writable=!!i,this.xform=r||aG}}let Pd=null;function lG(e){return!mb(e)||e.length<2?e:_1(e)}function gb(){if(Pd)return Pd;const e=[];e.push(new Gn("bucket")),e.push(new Gn("generation")),e.push(new Gn("metageneration")),e.push(new Gn("name","fullPath",!0));function t(s,o){return lG(o)}const n=new Gn("name");n.xform=t,e.push(n);function i(s,o){return o!==void 0?Number(o):o}const r=new Gn("size");return r.xform=i,e.push(r),e.push(new Gn("timeCreated")),e.push(new Gn("updated")),e.push(new Gn("md5Hash",null,!0)),e.push(new Gn("cacheControl",null,!0)),e.push(new Gn("contentDisposition",null,!0)),e.push(new Gn("contentEncoding",null,!0)),e.push(new Gn("contentLanguage",null,!0)),e.push(new Gn("contentType",null,!0)),e.push(new Gn("metadata","customMetadata",!0)),Pd=e,Pd}function uG(e,t){function n(){const i=e.bucket,r=e.fullPath,s=new li(i,r);return t._makeStorageReference(s)}Object.defineProperty(e,"ref",{get:n})}function cG(e,t,n){const i={};i.type="file";const r=n.length;for(let s=0;s<r;s++){const o=n[s];i[o.local]=o.xform(i,t[o.server])}return uG(i,e),i}function b1(e,t,n){const i=y1(t);return i===null?null:cG(e,i,n)}function dG(e,t,n,i){const r=y1(t);if(r===null||!mb(r.downloadTokens))return null;const s=r.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=e.bucket,d=e.fullPath,f="/b/"+o(c)+"/o/"+o(d),m=tm(f,n,i),g=m1({alt:"media",token:u});return m+g})[0]}function fG(e,t){const n={},i=t.length;for(let r=0;r<i;r++){const s=t[r];s.writable&&(n[s.server]=e[s.local])}return JSON.stringify(n)}class pb{constructor(t,n,i,r){this.url=t,this.method=n,this.handler=i,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function w1(e){if(!e)throw hb()}function S1(e,t){function n(i,r){const s=b1(e,r,t);return w1(s!==null),s}return n}function hG(e,t){function n(i,r){const s=b1(e,r,t);return w1(s!==null),dG(s,r,e.host,e._protocol)}return n}function T1(e){function t(n,i){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=kq():r=Iq():n.getStatus()===402?r=Eq(e.bucket):n.getStatus()===403?r=Aq(e.path):r=i,r.status=n.getStatus(),r.serverResponse=i.serverResponse,r}return t}function C1(e){const t=T1(e);function n(i,r){let s=t(i,r);return i.getStatus()===404&&(s=Cq(e.path)),s.serverResponse=r.serverResponse,s}return n}function mG(e,t,n){const i=t.fullServerUrl(),r=tm(i,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new pb(r,s,S1(e,n),o);return a.errorHandler=C1(t),a}function vG(e,t,n){const i=t.fullServerUrl(),r=tm(i,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new pb(r,s,hG(e,n),o);return a.errorHandler=C1(t),a}function gG(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function pG(e,t,n){const i=Object.assign({},n);return i.fullPath=e.path,i.size=t.size(),i.contentType||(i.contentType=gG(null,t)),i}function yG(e,t,n,i,r){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let T="";for(let x=0;x<2;x++)T=T+Math.random().toString().slice(2);return T}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=pG(t,i,r),c=fG(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+l+"--",m=fs.getBlob(d,i,f);if(m===null)throw Mq();const g={name:u.fullPath},y=tm(s,e.host,e._protocol),p="POST",S=e.maxUploadRetryTime,w=new pb(y,p,S1(e,n),S);return w.urlParams=g,w.headers=o,w.body=m.uploadData(),w.errorHandler=T1(t),w}class _G{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=go.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=go.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=go.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,i,r){if(this.sent_)throw Zl("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),r!==void 0)for(const s in r)r.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,r[s].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Zl("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Zl("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Zl("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Zl("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class bG extends _G{initXhr(){this.xhr_.responseType="text"}}function yb(){return new bG}/**
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
 */class Ao{constructor(t,n){this._service=t,n instanceof li?this._location=n:this._location=li.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Ao(t,n)}get root(){const t=new li(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _1(this._location.path)}get storage(){return this._service}get parent(){const t=sG(this._location.path);if(t===null)return null;const n=new li(this._location.bucket,t);return new Ao(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw Lq(t)}}function wG(e,t,n){e._throwIfRoot("uploadBytes");const i=yG(e.storage,e._location,gb(),new fs(t,!0),n);return e.storage.makeRequestWithTokens(i,yb).then(r=>({metadata:r,ref:e}))}function SG(e){e._throwIfRoot("getMetadata");const t=mG(e.storage,e._location,gb());return e.storage.makeRequestWithTokens(t,yb)}function TG(e){e._throwIfRoot("getDownloadURL");const t=vG(e.storage,e._location,gb());return e.storage.makeRequestWithTokens(t,yb).then(n=>{if(n===null)throw Nq();return n})}function CG(e,t){const n=oG(e._location.path,t),i=new li(e._location.bucket,n);return new Ao(e.storage,i)}/**
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
 */function EG(e){return/^[A-Za-z]+:\/\//.test(e)}function IG(e,t){return new Ao(e,t)}function E1(e,t){if(e instanceof _b){const n=e;if(n._bucket==null)throw Dq();const i=new Ao(n,n._bucket);return t!=null?E1(i,t):i}else return t!==void 0?CG(e,t):e}function kG(e,t){if(t&&EG(t)){if(e instanceof _b)return IG(e,t);throw _p("To use ref(service, url), the first argument must be a Storage instance.")}else return E1(e,t)}function HC(e,t){const n=t==null?void 0:t[f1];return n==null?null:li.makeFromBucketSpec(n,e)}function AG(e,t,n,i={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:r}=i;r&&(e._overrideAuthToken=typeof r=="string"?r:pA(r,e.app.options.projectId))}class _b{constructor(t,n,i,r,s){this.app=t,this._authProvider=n,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=d1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Sq,this._maxUploadRetryTime=Tq,this._requests=new Set,r!=null?this._bucket=li.makeFromBucketSpec(r,this._host):this._bucket=HC(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=li.makeFromBucketSpec(this._url,t):this._bucket=HC(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){UC("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){UC("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Ao(this,t)}_makeRequest(t,n,i,r,s=!0){if(this._deleted)return new Fq(h1());{const o=Yq(t,this._appId,i,r,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,i,r).getPromise()}}const jC="@firebase/storage",WC="0.13.4";/**
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
 */const I1="storage";function Cne(e,t,n){return e=En(e),wG(e,t,n)}function Ene(e){return e=En(e),SG(e)}function Ine(e){return e=En(e),TG(e)}function kne(e,t){return e=En(e),kG(e,t)}function Ane(e=Qy(),t){e=En(e);const i=Yy(e,I1).getImmediate({identifier:t}),r=vA("storage");return r&&PG(i,...r),i}function PG(e,t,n,i={}){AG(e,t,n,i)}function xG(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new _b(n,i,r,t,$s)}function RG(){ur(new Hi(I1,xG,"PUBLIC").setMultipleInstances(!0)),ci(jC,WC,""),ci(jC,WC,"esm2017")}RG();function Pne(e){return EH(Zx(e))}const k1=Symbol("VueFireAuth");function VG({dependencies:e,initialUser:t}){return(n,i)=>{const[r,s]=DG(n,i,t,e);O3(r,s)}}function DG(e,t,n,i,r=qW(e,i)){const s=D3(e,t).run(()=>re(n));return M3.set(e,s),t.provide(k1,r),[s,r]}function MG(e,{firebaseApp:t,modules:n=[]}){e.provide(Jx,t);for(const i of n)i(t,e)}const NG=ii(e=>{const t=e.$firebaseApp;return VG({initialUser:e.payload.vuefireUser,dependencies:{errorMap:_x,persistence:[m5,t5],popupRedirectResolver:i3}})(t,e.vueApp),{provide:{firebaseAuth:e.vueApp.runWithContext(()=>Fe(k1))}}}),OG=ii(e=>{const t=e.$firebaseApp;e.vueApp.use(MG,{firebaseApp:t})}),Pu=/^[a-z0-9]+(-[a-z0-9]+)*$/,nm=(e,t,n,i="")=>{const r=e.split(":");if(e.slice(0,1)==="@"){if(r.length<2||r.length>3)return null;i=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const a=r.pop(),l=r.pop(),u={provider:r.length>0?r[0]:i,prefix:l,name:a};return t&&!ef(u)?null:u}const s=r[0],o=s.split("-");if(o.length>1){const a={provider:i,prefix:o.shift(),name:o.join("-")};return t&&!ef(a)?null:a}if(n&&i===""){const a={provider:i,prefix:"",name:s};return t&&!ef(a,n)?null:a}return null},ef=(e,t)=>e?!!((e.provider===""||e.provider.match(Pu))&&(t&&e.prefix===""||e.prefix.match(Pu))&&e.name.match(Pu)):!1,A1=Object.freeze({left:0,top:0,width:16,height:16}),ih=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),im=Object.freeze({...A1,...ih}),bp=Object.freeze({...im,body:"",hidden:!1});function LG(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const i=((e.rotate||0)+(t.rotate||0))%4;return i&&(n.rotate=i),n}function zC(e,t){const n=LG(e,t);for(const i in bp)i in ih?i in e&&!(i in n)&&(n[i]=ih[i]):i in t?n[i]=t[i]:i in e&&(n[i]=e[i]);return n}function FG(e,t){const n=e.icons,i=e.aliases||Object.create(null),r=Object.create(null);function s(o){if(n[o])return r[o]=[];if(!(o in r)){r[o]=null;const a=i[o]&&i[o].parent,l=a&&s(a);l&&(r[o]=[a].concat(l))}return r[o]}return Object.keys(n).concat(Object.keys(i)).forEach(s),r}function BG(e,t,n){const i=e.icons,r=e.aliases||Object.create(null);let s={};function o(a){s=zC(i[a]||r[a],s)}return o(t),n.forEach(o),zC(e,s)}function P1(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(r=>{t(r,null),n.push(r)});const i=FG(e);for(const r in i){const s=i[r];s&&(t(r,BG(e,r,s)),n.push(r))}return n}const $G={provider:"",aliases:{},not_found:{},...A1};function Bv(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function x1(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!Bv(e,$G))return null;const n=t.icons;for(const r in n){const s=n[r];if(!r.match(Pu)||typeof s.body!="string"||!Bv(s,bp))return null}const i=t.aliases||Object.create(null);for(const r in i){const s=i[r],o=s.parent;if(!r.match(Pu)||typeof o!="string"||!n[o]&&!i[o]||!Bv(s,bp))return null}return t}const qC=Object.create(null);function UG(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function Po(e,t){const n=qC[e]||(qC[e]=Object.create(null));return n[t]||(n[t]=UG(e,t))}function bb(e,t){return x1(t)?P1(t,(n,i)=>{i?e.icons[n]=i:e.missing.add(n)}):[]}function HG(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let Xu=!1;function R1(e){return typeof e=="boolean"&&(Xu=e),Xu}function jG(e){const t=typeof e=="string"?nm(e,!0,Xu):e;if(t){const n=Po(t.provider,t.prefix),i=t.name;return n.icons[i]||(n.missing.has(i)?null:void 0)}}function WG(e,t){const n=nm(e,!0,Xu);if(!n)return!1;const i=Po(n.provider,n.prefix);return HG(i,n.name,t)}function zG(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),Xu&&!t&&!e.prefix){let r=!1;return x1(e)&&(e.prefix="",P1(e,(s,o)=>{o&&WG(s,o)&&(r=!0)})),r}const n=e.prefix;if(!ef({provider:t,prefix:n,name:"a"}))return!1;const i=Po(t,n);return!!bb(i,e)}const V1=Object.freeze({width:null,height:null}),D1=Object.freeze({...V1,...ih}),qG=/(-?[0-9.]*[0-9]+[0-9.]*)/g,GG=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function GC(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const i=e.split(qG);if(i===null||!i.length)return e;const r=[];let s=i.shift(),o=GG.test(s);for(;;){if(o){const a=parseFloat(s);isNaN(a)?r.push(s):r.push(Math.ceil(a*t*n)/n)}else r.push(s);if(s=i.shift(),s===void 0)return r.join("");o=!o}}function KG(e,t="defs"){let n="";const i=e.indexOf("<"+t);for(;i>=0;){const r=e.indexOf(">",i),s=e.indexOf("</"+t);if(r===-1||s===-1)break;const o=e.indexOf(">",s);if(o===-1)break;n+=e.slice(r+1,s).trim(),e=e.slice(0,i).trim()+e.slice(o+1)}return{defs:n,content:e}}function YG(e,t){return e?"<defs>"+e+"</defs>"+t:t}function QG(e,t,n){const i=KG(e);return YG(i.defs,t+i.content+n)}const XG=e=>e==="unset"||e==="undefined"||e==="none";function JG(e,t){const n={...im,...e},i={...D1,...t},r={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,i].forEach(y=>{const p=[],S=y.hFlip,w=y.vFlip;let T=y.rotate;S?w?T+=2:(p.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),p.push("scale(-1 1)"),r.top=r.left=0):w&&(p.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),p.push("scale(1 -1)"),r.top=r.left=0);let x;switch(T<0&&(T-=Math.floor(T/4)*4),T=T%4,T){case 1:x=r.height/2+r.top,p.unshift("rotate(90 "+x.toString()+" "+x.toString()+")");break;case 2:p.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:x=r.width/2+r.left,p.unshift("rotate(-90 "+x.toString()+" "+x.toString()+")");break}T%2===1&&(r.left!==r.top&&(x=r.left,r.left=r.top,r.top=x),r.width!==r.height&&(x=r.width,r.width=r.height,r.height=x)),p.length&&(s=QG(s,'<g transform="'+p.join(" ")+'">',"</g>"))});const o=i.width,a=i.height,l=r.width,u=r.height;let c,d;o===null?(d=a===null?"1em":a==="auto"?u:a,c=GC(d,l/u)):(c=o==="auto"?l:o,d=a===null?GC(c,u/l):a==="auto"?u:a);const f={},m=(y,p)=>{XG(p)||(f[y]=p.toString())};m("width",c),m("height",d);const g=[r.left,r.top,l,u];return f.viewBox=g.join(" "),{attributes:f,viewBox:g,body:s}}const ZG=/\sid="(\S+)"/g,eK="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let tK=0;function nK(e,t=eK){const n=[];let i;for(;i=ZG.exec(e);)n.push(i[1]);if(!n.length)return e;const r="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(s=>{const o=typeof t=="function"?t(s):t+(tK++).toString(),a=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+o+r+"$3")}),e=e.replace(new RegExp(r,"g"),""),e}const wp=Object.create(null);function iK(e,t){wp[e]=t}function Sp(e){return wp[e]||wp[""]}function wb(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const Sb=Object.create(null),eu=["https://api.simplesvg.com","https://api.unisvg.com"],tf=[];for(;eu.length>0;)eu.length===1||Math.random()>.5?tf.push(eu.shift()):tf.push(eu.pop());Sb[""]=wb({resources:["https://api.iconify.design"].concat(tf)});function rK(e,t){const n=wb(t);return n===null?!1:(Sb[e]=n,!0)}function Tb(e){return Sb[e]}const sK=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let KC=sK();function oK(e,t){const n=Tb(e);if(!n)return 0;let i;if(!n.maxURL)i=0;else{let r=0;n.resources.forEach(o=>{r=Math.max(r,o.length)});const s=t+".json?icons=";i=n.maxURL-r-n.path.length-s.length}return i}function aK(e){return e===404}const lK=(e,t,n)=>{const i=[],r=oK(e,t),s="icons";let o={type:s,provider:e,prefix:t,icons:[]},a=0;return n.forEach((l,u)=>{a+=l.length+1,a>=r&&u>0&&(i.push(o),o={type:s,provider:e,prefix:t,icons:[]},a=l.length),o.icons.push(l)}),i.push(o),i};function uK(e){if(typeof e=="string"){const t=Tb(e);if(t)return t.path}return"/"}const cK=(e,t,n)=>{if(!KC){n("abort",424);return}let i=uK(t.provider);switch(t.type){case"icons":{const s=t.prefix,a=t.icons.join(","),l=new URLSearchParams({icons:a});i+=s+".json?"+l.toString();break}case"custom":{const s=t.uri;i+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let r=503;KC(e+i).then(s=>{const o=s.status;if(o!==200){setTimeout(()=>{n(aK(o)?"abort":"next",o)});return}return r=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",r)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",r)})},dK={prepare:lK,send:cK};function fK(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((r,s)=>r.provider!==s.provider?r.provider.localeCompare(s.provider):r.prefix!==s.prefix?r.prefix.localeCompare(s.prefix):r.name.localeCompare(s.name));let i={provider:"",prefix:"",name:""};return e.forEach(r=>{if(i.name===r.name&&i.prefix===r.prefix&&i.provider===r.provider)return;i=r;const s=r.provider,o=r.prefix,a=r.name,l=n[s]||(n[s]=Object.create(null)),u=l[o]||(l[o]=Po(s,o));let c;a in u.icons?c=t.loaded:o===""||u.missing.has(a)?c=t.missing:c=t.pending;const d={provider:s,prefix:o,name:a};c.push(d)}),t}function M1(e,t){e.forEach(n=>{const i=n.loaderCallbacks;i&&(n.loaderCallbacks=i.filter(r=>r.id!==t))})}function hK(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const i=e.provider,r=e.prefix;t.forEach(s=>{const o=s.icons,a=o.pending.length;o.pending=o.pending.filter(l=>{if(l.prefix!==r)return!0;const u=l.name;if(e.icons[u])o.loaded.push({provider:i,prefix:r,name:u});else if(e.missing.has(u))o.missing.push({provider:i,prefix:r,name:u});else return n=!0,!0;return!1}),o.pending.length!==a&&(n||M1([e],s.id),s.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),s.abort))})}))}let mK=0;function vK(e,t,n){const i=mK++,r=M1.bind(null,n,i);if(!t.pending.length)return r;const s={id:i,icons:t,callback:e,abort:r};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(s)}),r}function gK(e,t=!0,n=!1){const i=[];return e.forEach(r=>{const s=typeof r=="string"?nm(r,t,n):r;s&&i.push(s)}),i}var pK={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function yK(e,t,n,i){const r=e.resources.length,s=e.random?Math.floor(Math.random()*r):e.index;let o;if(e.random){let D=e.resources.slice(0);for(o=[];D.length>1;){const A=Math.floor(Math.random()*D.length);o.push(D[A]),D=D.slice(0,A).concat(D.slice(A+1))}o=o.concat(D)}else o=e.resources.slice(s).concat(e.resources.slice(0,s));const a=Date.now();let l="pending",u=0,c,d=null,f=[],m=[];typeof i=="function"&&m.push(i);function g(){d&&(clearTimeout(d),d=null)}function y(){l==="pending"&&(l="aborted"),g(),f.forEach(D=>{D.status==="pending"&&(D.status="aborted")}),f=[]}function p(D,A){A&&(m=[]),typeof D=="function"&&m.push(D)}function S(){return{startTime:a,payload:t,status:l,queriesSent:u,queriesPending:f.length,subscribe:p,abort:y}}function w(){l="failed",m.forEach(D=>{D(void 0,c)})}function T(){f.forEach(D=>{D.status==="pending"&&(D.status="aborted")}),f=[]}function x(D,A,b){const _=A!=="success";switch(f=f.filter(E=>E!==D),l){case"pending":break;case"failed":if(_||!e.dataAfterTimeout)return;break;default:return}if(A==="abort"){c=b,w();return}if(_){c=b,f.length||(o.length?V():w());return}if(g(),T(),!e.random){const E=e.resources.indexOf(D.resource);E!==-1&&E!==e.index&&(e.index=E)}l="completed",m.forEach(E=>{E(b)})}function V(){if(l!=="pending")return;g();const D=o.shift();if(D===void 0){if(f.length){d=setTimeout(()=>{g(),l==="pending"&&(T(),w())},e.timeout);return}w();return}const A={status:"pending",resource:D,callback:(b,_)=>{x(A,b,_)}};f.push(A),u++,d=setTimeout(V,e.rotate),n(D,t,A.callback)}return setTimeout(V),S}function N1(e){const t={...pK,...e};let n=[];function i(){n=n.filter(a=>a().status==="pending")}function r(a,l,u){const c=yK(t,a,l,(d,f)=>{i(),u&&u(d,f)});return n.push(c),c}function s(a){return n.find(l=>a(l))||null}return{query:r,find:s,setIndex:a=>{t.index=a},getIndex:()=>t.index,cleanup:i}}function YC(){}const $v=Object.create(null);function _K(e){if(!$v[e]){const t=Tb(e);if(!t)return;const n=N1(t),i={config:t,redundancy:n};$v[e]=i}return $v[e]}function bK(e,t,n){let i,r;if(typeof e=="string"){const s=Sp(e);if(!s)return n(void 0,424),YC;r=s.send;const o=_K(e);o&&(i=o.redundancy)}else{const s=wb(e);if(s){i=N1(s);const o=e.resources?e.resources[0]:"",a=Sp(o);a&&(r=a.send)}}return!i||!r?(n(void 0,424),YC):i.query(t,r,n)().abort}const QC="iconify2",Ju="iconify",O1=Ju+"-count",XC=Ju+"-version",L1=36e5,wK=168,SK=50;function Tp(e,t){try{return e.getItem(t)}catch{}}function Cb(e,t,n){try{return e.setItem(t,n),!0}catch{}}function JC(e,t){try{e.removeItem(t)}catch{}}function Cp(e,t){return Cb(e,O1,t.toString())}function Ep(e){return parseInt(Tp(e,O1))||0}const rm={local:!0,session:!0},F1={local:new Set,session:new Set};let Eb=!1;function TK(e){Eb=e}let xd=typeof window>"u"?{}:window;function B1(e){const t=e+"Storage";try{if(xd&&xd[t]&&typeof xd[t].length=="number")return xd[t]}catch{}rm[e]=!1}function $1(e,t){const n=B1(e);if(!n)return;const i=Tp(n,XC);if(i!==QC){if(i){const a=Ep(n);for(let l=0;l<a;l++)JC(n,Ju+l.toString())}Cb(n,XC,QC),Cp(n,0);return}const r=Math.floor(Date.now()/L1)-wK,s=a=>{const l=Ju+a.toString(),u=Tp(n,l);if(typeof u=="string"){try{const c=JSON.parse(u);if(typeof c=="object"&&typeof c.cached=="number"&&c.cached>r&&typeof c.provider=="string"&&typeof c.data=="object"&&typeof c.data.prefix=="string"&&t(c,a))return!0}catch{}JC(n,l)}};let o=Ep(n);for(let a=o-1;a>=0;a--)s(a)||(a===o-1?(o--,Cp(n,o)):F1[e].add(a))}function U1(){if(!Eb){TK(!0);for(const e in rm)$1(e,t=>{const n=t.data,i=t.provider,r=n.prefix,s=Po(i,r);if(!bb(s,n).length)return!1;const o=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,o):o,!0})}}function CK(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const i in rm)$1(i,r=>{const s=r.data;return r.provider!==e.provider||s.prefix!==e.prefix||s.lastModified===t});return!0}function EK(e,t){Eb||U1();function n(i){let r;if(!rm[i]||!(r=B1(i)))return;const s=F1[i];let o;if(s.size)s.delete(o=Array.from(s).shift());else if(o=Ep(r),o>=SK||!Cp(r,o+1))return;const a={cached:Math.floor(Date.now()/L1),provider:e.provider,data:t};return Cb(r,Ju+o.toString(),JSON.stringify(a))}t.lastModified&&!CK(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function ZC(){}function IK(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,hK(e)}))}function kK(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:i}=e,r=e.iconsToLoad;delete e.iconsToLoad;let s;if(!r||!(s=Sp(n)))return;s.prepare(n,i,r).forEach(a=>{bK(n,a,l=>{if(typeof l!="object")a.icons.forEach(u=>{e.missing.add(u)});else try{const u=bb(e,l);if(!u.length)return;const c=e.pendingIcons;c&&u.forEach(d=>{c.delete(d)}),EK(e,l)}catch(u){console.error(u)}IK(e)})})}))}const AK=(e,t)=>{const n=gK(e,!0,R1()),i=fK(n);if(!i.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(i.loaded,i.missing,i.pending,ZC)}),()=>{l=!1}}const r=Object.create(null),s=[];let o,a;return i.pending.forEach(l=>{const{provider:u,prefix:c}=l;if(c===a&&u===o)return;o=u,a=c,s.push(Po(u,c));const d=r[u]||(r[u]=Object.create(null));d[c]||(d[c]=[])}),i.pending.forEach(l=>{const{provider:u,prefix:c,name:d}=l,f=Po(u,c),m=f.pendingIcons||(f.pendingIcons=new Set);m.has(d)||(m.add(d),r[u][c].push(d))}),s.forEach(l=>{const{provider:u,prefix:c}=l;r[u][c].length&&kK(l,r[u][c])}),t?vK(t,i,s):ZC};function PK(e,t){const n={...e};for(const i in t){const r=t[i],s=typeof r;i in V1?(r===null||r&&(s==="string"||s==="number"))&&(n[i]=r):s===typeof n[i]&&(n[i]=i==="rotate"?r%4:r)}return n}const xK=/[\s,]+/;function RK(e,t){t.split(xK).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function VK(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function i(r){for(;r<0;)r+=4;return r%4}if(n===""){const r=parseInt(e);return isNaN(r)?0:i(r)}else if(n!==e){let r=0;switch(n){case"%":r=25;break;case"deg":r=90}if(r){let s=parseFloat(e.slice(0,e.length-n.length));return isNaN(s)?0:(s=s/r,s%1===0?i(s):0)}}return t}function DK(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const i in t)n+=" "+i+'="'+t[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function MK(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function NK(e){return"data:image/svg+xml,"+MK(e)}function OK(e){return'url("'+NK(e)+'")'}const eE={...D1,inline:!1},LK={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},FK={display:"inline-block"},Ip={backgroundColor:"currentColor"},H1={backgroundColor:"transparent"},tE={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},nE={webkitMask:Ip,mask:Ip,background:H1};for(const e in nE){const t=nE[e];for(const n in tE)t[e+n]=tE[n]}const nf={};["horizontal","vertical"].forEach(e=>{const t=e.slice(0,1)+"Flip";nf[e+"-flip"]=t,nf[e.slice(0,1)+"-flip"]=t,nf[e+"Flip"]=t});function iE(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const rE=(e,t)=>{const n=PK(eE,t),i={...LK},r=t.mode||"svg",s={},o=t.style,a=typeof o=="object"&&!(o instanceof Array)?o:{};for(let y in t){const p=t[y];if(p!==void 0)switch(y){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[y]=p===!0||p==="true"||p===1;break;case"flip":typeof p=="string"&&RK(n,p);break;case"color":s.color=p;break;case"rotate":typeof p=="string"?n[y]=VK(p):typeof p=="number"&&(n[y]=p);break;case"ariaHidden":case"aria-hidden":p!==!0&&p!=="true"&&delete i["aria-hidden"];break;default:{const S=nf[y];S?(p===!0||p==="true"||p===1)&&(n[S]=!0):eE[y]===void 0&&(i[y]=p)}}}const l=JG(e,n),u=l.attributes;if(n.inline&&(s.verticalAlign="-0.125em"),r==="svg"){i.style={...s,...a},Object.assign(i,u);let y=0,p=t.id;return typeof p=="string"&&(p=p.replace(/-/g,"_")),i.innerHTML=nK(l.body,p?()=>p+"ID"+y++:"iconifyVue"),qt("svg",i)}const{body:c,width:d,height:f}=e,m=r==="mask"||(r==="bg"?!1:c.indexOf("currentColor")!==-1),g=DK(c,{...u,width:d+"",height:f+""});return i.style={...s,"--svg":OK(g),width:iE(u.width),height:iE(u.height),...FK,...m?Ip:H1,...a},qt("span",i)};R1(!0);iK("",dK);if(typeof document<"u"&&typeof window<"u"){U1();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(i=>{try{(typeof i!="object"||i===null||i instanceof Array||typeof i.icons!="object"||typeof i.prefix!="string"||!zG(i))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const i="IconifyProviders["+n+"] is invalid.";try{const r=t[n];if(typeof r!="object"||!r||r.resources===void 0)continue;rK(n,r)||console.error(i)}catch{console.error(i)}}}}const BK={...im,body:""},$K=Fo({inheritAttrs:!1,data(){return{_name:"",_loadingIcon:null,iconMounted:!1,counter:0}},mounted(){this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(e,t){if(typeof e=="object"&&e!==null&&typeof e.body=="string")return this._name="",this.abortLoading(),{data:e};let n;if(typeof e!="string"||(n=nm(e,!1,!0))===null)return this.abortLoading(),null;const i=jG(n);if(!i)return(!this._loadingIcon||this._loadingIcon.name!==e)&&(this.abortLoading(),this._name="",i!==null&&(this._loadingIcon={name:e,abort:AK([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==e&&(this._name=e,t&&t(e));const r=["iconify"];return n.prefix!==""&&r.push("iconify--"+n.prefix),n.provider!==""&&r.push("iconify--"+n.provider),{data:i,classes:r}}},render(){this.counter;const e=this.$attrs,t=this.iconMounted||e.ssr?this.getIcon(e.icon,e.onLoad):null;if(!t)return rE(BK,e);let n=e;return t.classes&&(n={...e,class:(typeof e.class=="string"?e.class+" ":"")+t.classes.join(" ")}),rE({...im,...t.data},n)}});function Xn(e,t){let n;function i(){n=gc(),n.run(()=>t.length?t(()=>{n==null||n.stop(),i()}):t())}ye(e,r=>{r&&!n?i():r||(n==null||n.stop(),n=void 0)},{immediate:!0}),jn(()=>{n==null||n.stop()})}const it=typeof window<"u",Ib=it&&"IntersectionObserver"in window,UK=it&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),sE=it&&"EyeDropper"in window;function oE(e,t,n){HK(e,t),t.set(e,n)}function HK(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function jK(e,t,n){return e.set(j1(e,t),n),n}function Js(e,t){return e.get(j1(e,t))}function j1(e,t,n){if(typeof e=="function"?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}function W1(e,t,n){const i=t.length-1;if(i<0)return e===void 0?n:e;for(let r=0;r<i;r++){if(e==null)return n;e=e[t[r]]}return e==null||e[t[i]]===void 0?n:e[t[i]]}function vr(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime()||e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length!==Object.keys(t).length?!1:n.every(i=>vr(e[i],t[i]))}function xo(e,t,n){return e==null||!t||typeof t!="string"?n:e[t]!==void 0?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),W1(e,t.split("."),n))}function Ut(e,t,n){if(t===!0)return e===void 0?n:e;if(t==null||typeof t=="boolean")return n;if(e!==Object(e)){if(typeof t!="function")return n;const r=t(e,n);return typeof r>"u"?n:r}if(typeof t=="string")return xo(e,t,n);if(Array.isArray(t))return W1(e,t,n);if(typeof t!="function")return n;const i=t(e,n);return typeof i>"u"?n:i}function ui(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:e},(n,i)=>t+i)}function be(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(e==null||e===""))return isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${t}`:void 0}function kb(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function aE(e){let t;return e!==null&&typeof e=="object"&&((t=Object.getPrototypeOf(e))===Object.prototype||t===null)}function Ab(e){if(e&&"$el"in e){const t=e.$el;return(t==null?void 0:t.nodeType)===Node.TEXT_NODE?t.nextElementSibling:t}return e}const lE=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16}),kp=Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function z1(e){return Object.keys(e)}function oo(e,t){return t.every(n=>e.hasOwnProperty(n))}function Pb(e,t){const n={},i=new Set(Object.keys(e));for(const r of t)i.has(r)&&(n[r]=e[r]);return n}function Ap(e,t,n){const i=Object.create(null),r=Object.create(null);for(const s in e)t.some(o=>o instanceof RegExp?o.test(s):o===s)&&!(n!=null&&n.some(o=>o===s))?i[s]=e[s]:r[s]=e[s];return[i,r]}function dt(e,t){const n={...e};return t.forEach(i=>delete n[i]),n}function sm(e,t){const n={};return t.forEach(i=>n[i]=e[i]),n}const q1=/^on[^a-z]/,om=e=>q1.test(e),WK=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"],zK=["ArrowUp","ArrowDown","ArrowRight","ArrowLeft","Enter","Escape","Tab"," "];function qK(e){return e.isComposing&&zK.includes(e.key)}function Hs(e){const[t,n]=Ap(e,[q1]),i=dt(t,WK),[r,s]=Ap(n,["class","style","id",/^data-/]);return Object.assign(r,t),Object.assign(s,i),[r,s]}function Tt(e){return e==null?[]:Array.isArray(e)?e:[e]}function GK(e,t){let n=0;const i=function(){for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];clearTimeout(n),n=setTimeout(()=>e(...s),Qe(t))};return i.clear=()=>{clearTimeout(n)},i.immediate=e,i}function Rt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(t,Math.min(n,e))}function rh(e){const t=e.toString().trim();return t.includes(".")?t.length-t.indexOf(".")-1:0}function uE(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return e+n.repeat(Math.max(0,t-e.length))}function cE(e,t){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,t-e.length))+e}function KK(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let i=0;for(;i<e.length;)n.push(e.substr(i,t)),i+=t;return n}function YK(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return Array.from({length:Math.ceil(e.length/t)},(n,i)=>e.slice(i*t,i*t+t))}function dE(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;if(e<t)return`${e} B`;const n=t===1024?["Ki","Mi","Gi"]:["k","M","G"];let i=-1;for(;Math.abs(e)>=t&&i<n.length-1;)e/=t,++i;return`${e.toFixed(1)} ${n[i]}B`}function $n(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const i={};for(const r in e)i[r]=e[r];for(const r in t){const s=e[r],o=t[r];if(aE(s)&&aE(o)){i[r]=$n(s,o,n);continue}if(n&&Array.isArray(s)&&Array.isArray(o)){i[r]=n(s,o);continue}i[r]=o}return i}function G1(e){return e.map(t=>t.type===Te?G1(t.children):t).flat()}function po(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(po.cache.has(e))return po.cache.get(e);const t=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return po.cache.set(e,t),t}po.cache=new Map;function Aa(e,t){if(!t||typeof t!="object")return[];if(Array.isArray(t))return t.map(n=>Aa(e,n)).flat(1);if(t.suspense)return Aa(e,t.ssContent);if(Array.isArray(t.children))return t.children.map(n=>Aa(e,n)).flat(1);if(t.component){if(Object.getOwnPropertySymbols(t.component.provides).includes(e))return[t.component];if(t.component.subTree)return Aa(e,t.component.subTree).flat(1)}return[]}var Rd=new WeakMap,fa=new WeakMap;class QK{constructor(t){oE(this,Rd,[]),oE(this,fa,0),this.size=t}push(t){Js(Rd,this)[Js(fa,this)]=t,jK(fa,this,(Js(fa,this)+1)%this.size)}values(){return Js(Rd,this).slice(Js(fa,this)).concat(Js(Rd,this).slice(0,Js(fa,this)))}}function XK(e){return"touches"in e?{clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:{clientX:e.clientX,clientY:e.clientY}}function xb(e){const t=Ft({}),n=P(e);return Ht(()=>{for(const i in n.value)t[i]=n.value[i]},{flush:"sync"}),Bs(t)}function sh(e,t){return e.includes(t)}function K1(e){return e[2].toLowerCase()+e.slice(3)}const dn=()=>[Function,Array];function fE(e,t){return t="on"+hr(t),!!(e[t]||e[`${t}Once`]||e[`${t}Capture`]||e[`${t}OnceCapture`]||e[`${t}CaptureOnce`])}function Rb(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];if(Array.isArray(e))for(const r of e)r(...n);else typeof e=="function"&&e(...n)}function Zu(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const n=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map(i=>`${i}${t?':not([tabindex="-1"])':""}:not([disabled])`).join(", ");return[...e.querySelectorAll(n)]}function Y1(e,t,n){let i,r=e.indexOf(document.activeElement);const s=t==="next"?1:-1;do r+=s,i=e[r];while((!i||i.offsetParent==null||!((n==null?void 0:n(i))??!0))&&r<e.length&&r>=0);return i}function yo(e,t){var i,r,s,o;const n=Zu(e);if(!t)(e===document.activeElement||!e.contains(document.activeElement))&&((i=n[0])==null||i.focus());else if(t==="first")(r=n[0])==null||r.focus();else if(t==="last")(s=n.at(-1))==null||s.focus();else if(typeof t=="number")(o=n[t])==null||o.focus();else{const a=Y1(n,t);a?a.focus():yo(e,t==="next"?"first":"last")}}function Vd(e){return e==null||typeof e=="string"&&e.trim()===""}function Q1(){}function sl(e,t){if(!(it&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports(`selector(${t})`)))return null;try{return!!e&&e.matches(t)}catch{return null}}function am(e){return e.some(t=>ks(t)?t.type===Jt?!1:t.type!==Te||am(t.children):!0)?e:null}function JK(e,t){if(!it||e===0)return t(),()=>{};const n=window.setTimeout(t,e);return()=>window.clearTimeout(n)}function ZK(e,t){const n=e.clientX,i=e.clientY,r=t.getBoundingClientRect(),s=r.left,o=r.top,a=r.right,l=r.bottom;return n>=s&&n<=a&&i>=o&&i<=l}function oh(){const e=ge(),t=n=>{e.value=n};return Object.defineProperty(t,"value",{enumerable:!0,get:()=>e.value,set:n=>e.value=n}),Object.defineProperty(t,"el",{enumerable:!0,get:()=>Ab(e.value)}),t}function ah(e){const t=e.key.length===1,n=!e.ctrlKey&&!e.metaKey&&!e.altKey;return t&&n}const X1=["top","bottom"],e7=["start","end","left","right"];function Pp(e,t){let[n,i]=e.split(" ");return i||(i=sh(X1,n)?"start":sh(e7,n)?"top":"center"),{side:xp(n,t),align:xp(i,t)}}function xp(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function Uv(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function Hv(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function hE(e){return{side:e.align,align:e.side}}function mE(e){return sh(X1,e.side)?"y":"x"}class _o{constructor(t){let{x:n,y:i,width:r,height:s}=t;this.x=n,this.y=i,this.width=r,this.height=s}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function vE(e,t){return{x:{before:Math.max(0,t.left-e.left),after:Math.max(0,e.right-t.right)},y:{before:Math.max(0,t.top-e.top),after:Math.max(0,e.bottom-t.bottom)}}}function J1(e){return Array.isArray(e)?new _o({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function Vb(e){const t=e.getBoundingClientRect(),n=getComputedStyle(e),i=n.transform;if(i){let r,s,o,a,l;if(i.startsWith("matrix3d("))r=i.slice(9,-1).split(/, /),s=+r[0],o=+r[5],a=+r[12],l=+r[13];else if(i.startsWith("matrix("))r=i.slice(7,-1).split(/, /),s=+r[0],o=+r[3],a=+r[4],l=+r[5];else return new _o(t);const u=n.transformOrigin,c=t.x-a-(1-s)*parseFloat(u),d=t.y-l-(1-o)*parseFloat(u.slice(u.indexOf(" ")+1)),f=s?t.width/s:e.offsetWidth+1,m=o?t.height/o:e.offsetHeight+1;return new _o({x:c,y:d,width:f,height:m})}else return new _o(t)}function ao(e,t,n){if(typeof e.animate>"u")return{finished:Promise.resolve()};let i;try{i=e.animate(t,n)}catch{return{finished:Promise.resolve()}}return typeof i.finished>"u"&&(i.finished=new Promise(r=>{i.onfinish=()=>{r(i)}})),i}const rf=new WeakMap;function t7(e,t){Object.keys(t).forEach(n=>{if(om(n)){const i=K1(n),r=rf.get(e);if(t[n]==null)r==null||r.forEach(s=>{const[o,a]=s;o===i&&(e.removeEventListener(i,a),r.delete(s))});else if(!r||![...r].some(s=>s[0]===i&&s[1]===t[n])){e.addEventListener(i,t[n]);const s=r||new Set;s.add([i,t[n]]),rf.has(e)||rf.set(e,s)}}else t[n]==null?e.removeAttribute(n):e.setAttribute(n,t[n])})}function n7(e,t){Object.keys(t).forEach(n=>{if(om(n)){const i=K1(n),r=rf.get(e);r==null||r.forEach(s=>{const[o,a]=s;o===i&&(e.removeEventListener(i,a),r.delete(s))})}else e.removeAttribute(n)})}const ha=2.4,gE=.2126729,pE=.7151522,yE=.072175,i7=.55,r7=.58,s7=.57,o7=.62,Dd=.03,_E=1.45,a7=5e-4,l7=1.25,u7=1.25,bE=.078,wE=12.82051282051282,Md=.06,SE=.001;function TE(e,t){const n=(e.r/255)**ha,i=(e.g/255)**ha,r=(e.b/255)**ha,s=(t.r/255)**ha,o=(t.g/255)**ha,a=(t.b/255)**ha;let l=n*gE+i*pE+r*yE,u=s*gE+o*pE+a*yE;if(l<=Dd&&(l+=(Dd-l)**_E),u<=Dd&&(u+=(Dd-u)**_E),Math.abs(u-l)<a7)return 0;let c;if(u>l){const d=(u**i7-l**r7)*l7;c=d<SE?0:d<bE?d-d*wE*Md:d-Md}else{const d=(u**o7-l**s7)*u7;c=d>-SE?0:d>-bE?d-d*wE*Md:d+Md}return c*100}function c7(e,t){t=Array.isArray(t)?t.slice(0,-1).map(n=>`'${n}'`).join(", ")+` or '${t.at(-1)}'`:`'${t}'`}const lh=.20689655172413793,d7=e=>e>lh**3?Math.cbrt(e):e/(3*lh**2)+4/29,f7=e=>e>lh?e**3:3*lh**2*(e-4/29);function Z1(e){const t=d7,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function eV(e){const t=f7,n=(e[0]+16)/116;return[t(n+e[1]/500)*.95047,t(n),t(n-e[2]/200)*1.08883]}const h7=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],m7=e=>e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055,v7=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],g7=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function tV(e){const t=Array(3),n=m7,i=h7;for(let r=0;r<3;++r)t[r]=Math.round(Rt(n(i[r][0]*e[0]+i[r][1]*e[1]+i[r][2]*e[2]))*255);return{r:t[0],g:t[1],b:t[2]}}function Db(e){let{r:t,g:n,b:i}=e;const r=[0,0,0],s=g7,o=v7;t=s(t/255),n=s(n/255),i=s(i/255);for(let a=0;a<3;++a)r[a]=o[a][0]*t+o[a][1]*n+o[a][2]*i;return r}function Rp(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function p7(e){return Rp(e)&&!/^((rgb|hsl)a?\()?var\(--/.test(e)}const CE=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,y7={rgb:(e,t,n,i)=>({r:e,g:t,b:n,a:i}),rgba:(e,t,n,i)=>({r:e,g:t,b:n,a:i}),hsl:(e,t,n,i)=>EE({h:e,s:t,l:n,a:i}),hsla:(e,t,n,i)=>EE({h:e,s:t,l:n,a:i}),hsv:(e,t,n,i)=>Hr({h:e,s:t,v:n,a:i}),hsva:(e,t,n,i)=>Hr({h:e,s:t,v:n,a:i})};function Ei(e){if(typeof e=="number")return{r:(e&16711680)>>16,g:(e&65280)>>8,b:e&255};if(typeof e=="string"&&CE.test(e)){const{groups:t}=e.match(CE),{fn:n,values:i}=t,r=i.split(/,\s*/).map(s=>s.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(s)/100:parseFloat(s));return y7[n](...r)}else if(typeof e=="string"){let t=e.startsWith("#")?e.slice(1):e;return[3,4].includes(t.length)?t=t.split("").map(n=>n+n).join(""):[6,8].includes(t.length),oV(t)}else if(typeof e=="object"){if(oo(e,["r","g","b"]))return e;if(oo(e,["h","s","l"]))return Hr(Mb(e));if(oo(e,["h","s","v"]))return Hr(e)}throw new TypeError(`Invalid color: ${e==null?e:String(e)||e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function Hr(e){const{h:t,s:n,v:i,a:r}=e,s=a=>{const l=(a+t/60)%6;return i-i*n*Math.max(Math.min(l,4-l,1),0)},o=[s(5),s(3),s(1)].map(a=>Math.round(a*255));return{r:o[0],g:o[1],b:o[2],a:r}}function EE(e){return Hr(Mb(e))}function lm(e){if(!e)return{h:0,s:1,v:1,a:1};const t=e.r/255,n=e.g/255,i=e.b/255,r=Math.max(t,n,i),s=Math.min(t,n,i);let o=0;r!==s&&(r===t?o=60*(0+(n-i)/(r-s)):r===n?o=60*(2+(i-t)/(r-s)):r===i&&(o=60*(4+(t-n)/(r-s)))),o<0&&(o=o+360);const a=r===0?0:(r-s)/r,l=[o,a,r];return{h:l[0],s:l[1],v:l[2],a:e.a}}function nV(e){const{h:t,s:n,v:i,a:r}=e,s=i-i*n/2,o=s===1||s===0?0:(i-s)/Math.min(s,1-s);return{h:t,s:o,l:s,a:r}}function Mb(e){const{h:t,s:n,l:i,a:r}=e,s=i+n*Math.min(i,1-i),o=s===0?0:2-2*i/s;return{h:t,s:o,v:s,a:r}}function iV(e){let{r:t,g:n,b:i,a:r}=e;return r===void 0?`rgb(${t}, ${n}, ${i})`:`rgba(${t}, ${n}, ${i}, ${r})`}function rV(e){return iV(Hr(e))}function Nd(e){const t=Math.round(e).toString(16);return("00".substr(0,2-t.length)+t).toUpperCase()}function sV(e){let{r:t,g:n,b:i,a:r}=e;return`#${[Nd(t),Nd(n),Nd(i),r!==void 0?Nd(Math.round(r*255)):""].join("")}`}function oV(e){e=_7(e);let[t,n,i,r]=KK(e,2).map(s=>parseInt(s,16));return r=r===void 0?r:r/255,{r:t,g:n,b:i,a:r}}function aV(e){const t=oV(e);return lm(t)}function lV(e){return sV(Hr(e))}function _7(e){return e.startsWith("#")&&(e=e.slice(1)),e=e.replace(/([^0-9a-f])/gi,"F"),(e.length===3||e.length===4)&&(e=e.split("").map(t=>t+t).join("")),e.length!==6&&(e=uE(uE(e,6),8,"F")),e}function b7(e,t){const n=Z1(Db(e));return n[0]=n[0]+t*10,tV(eV(n))}function w7(e,t){const n=Z1(Db(e));return n[0]=n[0]-t*10,tV(eV(n))}function Vp(e){const t=Ei(e);return Db(t)[1]}function S7(e,t){const n=Vp(e),i=Vp(t),r=Math.max(n,i),s=Math.min(n,i);return(r+.05)/(s+.05)}function uV(e){const t=Math.abs(TE(Ei(0),Ei(e)));return Math.abs(TE(Ei(16777215),Ei(e)))>Math.min(t,50)?"#fff":"#000"}function z(e,t){return n=>Object.keys(e).reduce((i,r)=>{const o=typeof e[r]=="object"&&e[r]!=null&&!Array.isArray(e[r])?e[r]:{type:e[r]};return n&&r in n?i[r]={...o,default:n[r]}:i[r]=o,t&&!i[r].source&&(i[r].source=t),i},{})}const Ee=z({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component");function Ot(e,t){const n=cl();if(!n)throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);return n}function gr(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const t=Ot(e).type;return po((t==null?void 0:t.aliasName)||(t==null?void 0:t.name))}let cV=0,sf=new WeakMap;function _n(){const e=Ot("getUid");if(sf.has(e))return sf.get(e);{const t=cV++;return sf.set(e,t),t}}_n.reset=()=>{cV=0,sf=new WeakMap};function T7(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ot("injectSelf");const{provides:n}=t;if(n&&e in n)return n[e]}const ol=Symbol.for("vuetify:defaults");function C7(e){return re(e)}function Nb(){const e=Fe(ol);if(!e)throw new Error("[Vuetify] Could not find defaults instance");return e}function Et(e,t){const n=Nb(),i=re(e),r=P(()=>{if(Qe(t==null?void 0:t.disabled))return n.value;const o=Qe(t==null?void 0:t.scoped),a=Qe(t==null?void 0:t.reset),l=Qe(t==null?void 0:t.root);if(i.value==null&&!(o||a||l))return n.value;let u=$n(i.value,{prev:n.value});if(o)return u;if(a||l){const c=Number(a||1/0);for(let d=0;d<=c&&!(!u||!("prev"in u));d++)u=u.prev;return u&&typeof l=="string"&&l in u&&(u=$n($n(u,{prev:u}),u[l])),u}return u.prev?$n(u.prev,u):u});return lt(ol,r),r}function E7(e,t){var n,i;return typeof((n=e.props)==null?void 0:n[t])<"u"||typeof((i=e.props)==null?void 0:i[po(t)])<"u"}function I7(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Nb();const i=Ot("useDefaults");if(t=t??i.type.name??i.type.__name,!t)throw new Error("[Vuetify] Could not determine component name");const r=P(()=>{var l;return(l=n.value)==null?void 0:l[e._as??t]}),s=new Proxy(e,{get(l,u){var d,f,m,g,y,p,S;const c=Reflect.get(l,u);return u==="class"||u==="style"?[(d=r.value)==null?void 0:d[u],c].filter(w=>w!=null):typeof u=="string"&&!E7(i.vnode,u)?((f=r.value)==null?void 0:f[u])!==void 0?(m=r.value)==null?void 0:m[u]:((y=(g=n.value)==null?void 0:g.global)==null?void 0:y[u])!==void 0?(S=(p=n.value)==null?void 0:p.global)==null?void 0:S[u]:c:c}}),o=ge();Ht(()=>{if(r.value){const l=Object.entries(r.value).filter(u=>{let[c]=u;return c.startsWith(c[0].toUpperCase())});o.value=l.length?Object.fromEntries(l):void 0}else o.value=void 0});function a(){const l=T7(ol,i);lt(ol,P(()=>o.value?$n((l==null?void 0:l.value)??{},o.value):l==null?void 0:l.value))}return{props:s,provideSubDefaults:a}}function vi(e){if(e._setup=e._setup??e.setup,!e.name)return e;if(e._setup){e.props=z(e.props??{},e.name)();const t=Object.keys(e.props).filter(n=>n!=="class"&&n!=="style");e.filterProps=function(i){return Pb(i,t)},e.props._as=String,e.setup=function(i,r){const s=Nb();if(!s.value)return e._setup(i,r);const{props:o,provideSubDefaults:a}=I7(i,i._as??e.name,s),l=e._setup(o,r);return a(),l}}return e}function J(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t=>(e?vi:Fo)(t)}function k7(e,t){return t.props=e,t}function pr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return J()({name:n??hr(ni(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...Ee()},setup(i,r){let{slots:s}=r;return()=>{var o;return qt(i.tag,{class:[e,i.class],style:i.style},(o=s.default)==null?void 0:o.call(s))}}})}function dV(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}const ec="cubic-bezier(0.4, 0, 0.2, 1)",A7="cubic-bezier(0.0, 0, 0.2, 1)",P7="cubic-bezier(0.4, 0, 1, 1)";function IE(e,t,n){return Object.keys(e).filter(i=>om(i)&&i.endsWith(t)).reduce((i,r)=>(i[r.slice(0,-t.length)]=s=>e[r](s,n(s)),i),{})}function Ob(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(t?x7(e):Lb(e))return e;e=e.parentElement}return document.scrollingElement}function tc(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(Lb(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function Lb(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function x7(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["scroll","auto"].includes(t.overflowY)}function R7(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function ne(e){const t=Ot("useRender");t.render=e}function Pe(e,t,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:d=>d,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:d=>d;const s=Ot("useProxiedModel"),o=re(e[t]!==void 0?e[t]:n),a=po(t),u=P(a!==t?()=>{var d,f,m,g;return e[t],!!(((d=s.vnode.props)!=null&&d.hasOwnProperty(t)||(f=s.vnode.props)!=null&&f.hasOwnProperty(a))&&((m=s.vnode.props)!=null&&m.hasOwnProperty(`onUpdate:${t}`)||(g=s.vnode.props)!=null&&g.hasOwnProperty(`onUpdate:${a}`)))}:()=>{var d,f;return e[t],!!((d=s.vnode.props)!=null&&d.hasOwnProperty(t)&&((f=s.vnode.props)!=null&&f.hasOwnProperty(`onUpdate:${t}`)))});Xn(()=>!u.value,()=>{ye(()=>e[t],d=>{o.value=d})});const c=P({get(){const d=e[t];return i(u.value?d:o.value)},set(d){const f=r(d),m=Oe(u.value?e[t]:o.value);m===f||i(m)===d||(o.value=f,s==null||s.emit(`update:${t}`,f))}});return Object.defineProperty(c,"externalValue",{get:()=>u.value?e[t]:o.value}),c}const V7={badge:"Badge",open:"Open",close:"Close",dismiss:"Dismiss",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM",title:"Select Time"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},kE="$vuetify.",AE=(e,t)=>e.replace(/\{(\d+)\}/g,(n,i)=>String(t[+i])),fV=(e,t,n)=>function(i){for(var r=arguments.length,s=new Array(r>1?r-1:0),o=1;o<r;o++)s[o-1]=arguments[o];if(!i.startsWith(kE))return AE(i,s);const a=i.replace(kE,""),l=e.value&&n.value[e.value],u=t.value&&n.value[t.value];let c=xo(l,a,null);return c||(`${i}${e.value}`,c=xo(u,a,null)),c||(c=i),typeof c!="string"&&(c=i),AE(c,s)};function hV(e,t){return(n,i)=>new Intl.NumberFormat([e.value,t.value],i).format(n)}function jv(e,t,n){const i=Pe(e,t,e[t]??n.value);return i.value=e[t]??n.value,ye(n,r=>{e[t]==null&&(i.value=n.value)}),i}function mV(e){return t=>{const n=jv(t,"locale",e.current),i=jv(t,"fallback",e.fallback),r=jv(t,"messages",e.messages);return{name:"vuetify",current:n,fallback:i,messages:r,t:fV(n,i,r),n:hV(n,i),provide:mV({current:n,fallback:i,messages:r})}}}function D7(e){const t=ge((e==null?void 0:e.locale)??"en"),n=ge((e==null?void 0:e.fallback)??"en"),i=re({en:V7,...e==null?void 0:e.messages});return{name:"vuetify",current:t,fallback:n,messages:i,t:fV(t,n,i),n:hV(t,n),provide:mV({current:t,fallback:n,messages:i})}}const al=Symbol.for("vuetify:locale");function M7(e){return e.name!=null}function N7(e){const t=e!=null&&e.adapter&&M7(e==null?void 0:e.adapter)?e==null?void 0:e.adapter:D7(e),n=F7(t,e);return{...t,...n}}function _t(){const e=Fe(al);if(!e)throw new Error("[Vuetify] Could not find injected locale instance");return e}function O7(e){const t=Fe(al);if(!t)throw new Error("[Vuetify] Could not find injected locale instance");const n=t.provide(e),i=B7(n,t.rtl,e),r={...n,...i};return lt(al,r),r}function L7(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}function F7(e,t){const n=re((t==null?void 0:t.rtl)??L7()),i=P(()=>n.value[e.current.value]??!1);return{isRtl:i,rtl:n,rtlClasses:P(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}function B7(e,t,n){const i=P(()=>n.rtl??t.value[e.current.value]??!1);return{isRtl:i,rtl:t,rtlClasses:P(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}function sn(){const e=Fe(al);if(!e)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:e.isRtl,rtlClasses:e.rtlClasses}}const um={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function $7(e,t,n){const i=[];let r=[];const s=vV(e),o=gV(e),a=n??um[t.slice(-2).toUpperCase()]??0,l=(s.getDay()-a+7)%7,u=(o.getDay()-a+7)%7;for(let c=0;c<l;c++){const d=new Date(s);d.setDate(d.getDate()-(l-c)),r.push(d)}for(let c=1;c<=o.getDate();c++){const d=new Date(e.getFullYear(),e.getMonth(),c);r.push(d),r.length===7&&(i.push(r),r=[])}for(let c=1;c<7-u;c++){const d=new Date(o);d.setDate(d.getDate()+c),r.push(d)}return r.length>0&&i.push(r),i}function U7(e,t,n){const i=n??um[t.slice(-2).toUpperCase()]??0,r=new Date(e);for(;r.getDay()!==i;)r.setDate(r.getDate()-1);return r}function H7(e,t){const n=new Date(e),i=((um[t.slice(-2).toUpperCase()]??0)+6)%7;for(;n.getDay()!==i;)n.setDate(n.getDate()+1);return n}function vV(e){return new Date(e.getFullYear(),e.getMonth(),1)}function gV(e){return new Date(e.getFullYear(),e.getMonth()+1,0)}function j7(e){const t=e.split("-").map(Number);return new Date(t[0],t[1]-1,t[2])}const W7=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function pV(e){if(e==null)return new Date;if(e instanceof Date)return e;if(typeof e=="string"){let t;if(W7.test(e))return j7(e);if(t=Date.parse(e),!isNaN(t))return new Date(t)}return null}const PE=new Date(2e3,0,2);function z7(e,t){const n=t??um[e.slice(-2).toUpperCase()]??0;return ui(7).map(i=>{const r=new Date(PE);return r.setDate(PE.getDate()+n+i),new Intl.DateTimeFormat(e,{weekday:"narrow"}).format(r)})}function q7(e,t,n,i){const r=pV(e)??new Date,s=i==null?void 0:i[t];if(typeof s=="function")return s(r,t,n);let o={};switch(t){case"fullDate":o={year:"numeric",month:"long",day:"numeric"};break;case"fullDateWithWeekday":o={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;case"normalDate":const a=r.getDate(),l=new Intl.DateTimeFormat(n,{month:"long"}).format(r);return`${a} ${l}`;case"normalDateWithWeekday":o={weekday:"short",day:"numeric",month:"short"};break;case"shortDate":o={month:"short",day:"numeric"};break;case"year":o={year:"numeric"};break;case"month":o={month:"long"};break;case"monthShort":o={month:"short"};break;case"monthAndYear":o={month:"long",year:"numeric"};break;case"monthAndDate":o={month:"long",day:"numeric"};break;case"weekday":o={weekday:"long"};break;case"weekdayShort":o={weekday:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(n).format(r.getDate());case"hours12h":o={hour:"numeric",hour12:!0};break;case"hours24h":o={hour:"numeric",hour12:!1};break;case"minutes":o={minute:"numeric"};break;case"seconds":o={second:"numeric"};break;case"fullTime":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime12h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime24h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"fullDateTime":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime12h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime24h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDate":o={year:"numeric",month:"2-digit",day:"2-digit"};break;case"keyboardDateTime":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDateTime12h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"keyboardDateTime24h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;default:o=s??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,o).format(r)}function G7(e,t){const n=e.toJsDate(t),i=n.getFullYear(),r=cE(String(n.getMonth()+1),2,"0"),s=cE(String(n.getDate()),2,"0");return`${i}-${r}-${s}`}function K7(e){const[t,n,i]=e.split("-").map(Number);return new Date(t,n-1,i)}function Y7(e,t){const n=new Date(e);return n.setMinutes(n.getMinutes()+t),n}function Q7(e,t){const n=new Date(e);return n.setHours(n.getHours()+t),n}function X7(e,t){const n=new Date(e);return n.setDate(n.getDate()+t),n}function J7(e,t){const n=new Date(e);return n.setDate(n.getDate()+t*7),n}function Z7(e,t){const n=new Date(e);return n.setDate(1),n.setMonth(n.getMonth()+t),n}function eY(e){return e.getFullYear()}function tY(e){return e.getMonth()}function nY(e){return e.getDate()}function iY(e){return new Date(e.getFullYear(),e.getMonth()+1,1)}function rY(e){return new Date(e.getFullYear(),e.getMonth()-1,1)}function sY(e){return e.getHours()}function oY(e){return e.getMinutes()}function aY(e){return new Date(e.getFullYear(),0,1)}function lY(e){return new Date(e.getFullYear(),11,31)}function uY(e,t){return uh(e,t[0])&&fY(e,t[1])}function cY(e){const t=new Date(e);return t instanceof Date&&!isNaN(t.getTime())}function uh(e,t){return e.getTime()>t.getTime()}function dY(e,t){return uh(Dp(e),Dp(t))}function fY(e,t){return e.getTime()<t.getTime()}function xE(e,t){return e.getTime()===t.getTime()}function hY(e,t){return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function mY(e,t){return e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function vY(e,t){return e.getFullYear()===t.getFullYear()}function gY(e,t,n){const i=new Date(e),r=new Date(t);switch(n){case"years":return i.getFullYear()-r.getFullYear();case"quarters":return Math.floor((i.getMonth()-r.getMonth()+(i.getFullYear()-r.getFullYear())*12)/4);case"months":return i.getMonth()-r.getMonth()+(i.getFullYear()-r.getFullYear())*12;case"weeks":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60*24*7));case"days":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60*24));case"hours":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60));case"minutes":return Math.floor((i.getTime()-r.getTime())/(1e3*60));case"seconds":return Math.floor((i.getTime()-r.getTime())/1e3);default:return i.getTime()-r.getTime()}}function pY(e,t){const n=new Date(e);return n.setHours(t),n}function yY(e,t){const n=new Date(e);return n.setMinutes(t),n}function _Y(e,t){const n=new Date(e);return n.setMonth(t),n}function bY(e,t){const n=new Date(e);return n.setDate(t),n}function wY(e,t){const n=new Date(e);return n.setFullYear(t),n}function Dp(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0,0)}function SY(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate(),23,59,59,999)}class TY{constructor(t){this.locale=t.locale,this.formats=t.formats}date(t){return pV(t)}toJsDate(t){return t}toISO(t){return G7(this,t)}parseISO(t){return K7(t)}addMinutes(t,n){return Y7(t,n)}addHours(t,n){return Q7(t,n)}addDays(t,n){return X7(t,n)}addWeeks(t,n){return J7(t,n)}addMonths(t,n){return Z7(t,n)}getWeekArray(t,n){return $7(t,this.locale,n?Number(n):void 0)}startOfWeek(t,n){return U7(t,this.locale,n?Number(n):void 0)}endOfWeek(t){return H7(t,this.locale)}startOfMonth(t){return vV(t)}endOfMonth(t){return gV(t)}format(t,n){return q7(t,n,this.locale,this.formats)}isEqual(t,n){return xE(t,n)}isValid(t){return cY(t)}isWithinRange(t,n){return uY(t,n)}isAfter(t,n){return uh(t,n)}isAfterDay(t,n){return dY(t,n)}isBefore(t,n){return!uh(t,n)&&!xE(t,n)}isSameDay(t,n){return hY(t,n)}isSameMonth(t,n){return mY(t,n)}isSameYear(t,n){return vY(t,n)}setMinutes(t,n){return yY(t,n)}setHours(t,n){return pY(t,n)}setMonth(t,n){return _Y(t,n)}setDate(t,n){return bY(t,n)}setYear(t,n){return wY(t,n)}getDiff(t,n,i){return gY(t,n,i)}getWeekdays(t){return z7(this.locale,t?Number(t):void 0)}getYear(t){return eY(t)}getMonth(t){return tY(t)}getDate(t){return nY(t)}getNextMonth(t){return iY(t)}getPreviousMonth(t){return rY(t)}getHours(t){return sY(t)}getMinutes(t){return oY(t)}startOfDay(t){return Dp(t)}endOfDay(t){return SY(t)}startOfYear(t){return aY(t)}endOfYear(t){return lY(t)}}const yV=Symbol.for("vuetify:date-options"),RE=Symbol.for("vuetify:date-adapter");function CY(e,t){const n=$n({adapter:TY,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},e);return{options:n,instance:_V(n,t)}}function _V(e,t){const n=Ft(typeof e.adapter=="function"?new e.adapter({locale:e.locale[t.current.value]??t.current.value,formats:e.formats}):e.adapter);return ye(t.current,i=>{n.locale=e.locale[i]??i??n.locale}),n}function yr(){const e=Fe(yV);if(!e)throw new Error("[Vuetify] Could not find injected date options");const t=_t();return _V(e,t)}function EY(e,t){const n=e.toJsDate(t);let i=n.getFullYear(),r=new Date(i,0,1);if(n<r)i=i-1,r=new Date(i,0,1);else{const a=new Date(i+1,0,1);n>=a&&(i=i+1,r=a)}const s=Math.abs(n.getTime()-r.getTime()),o=Math.ceil(s/(1e3*60*60*24));return Math.floor(o/7)+1}const cm=["sm","md","lg","xl","xxl"],Mp=Symbol.for("vuetify:display"),VE={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},IY=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:VE;return $n(VE,e)};function DE(e){return it&&!e?window.innerWidth:typeof e=="object"&&e.clientWidth||0}function ME(e){return it&&!e?window.innerHeight:typeof e=="object"&&e.clientHeight||0}function NE(e){const t=it&&!e?window.navigator.userAgent:"ssr";function n(g){return!!t.match(g)}const i=n(/android/i),r=n(/iphone|ipad|ipod/i),s=n(/cordova/i),o=n(/electron/i),a=n(/chrome/i),l=n(/edge/i),u=n(/firefox/i),c=n(/opera/i),d=n(/win/i),f=n(/mac/i),m=n(/linux/i);return{android:i,ios:r,cordova:s,electron:o,chrome:a,edge:l,firefox:u,opera:c,win:d,mac:f,linux:m,touch:UK,ssr:t==="ssr"}}function kY(e,t){const{thresholds:n,mobileBreakpoint:i}=IY(e),r=ge(ME(t)),s=ge(NE(t)),o=Ft({}),a=ge(DE(t));function l(){r.value=ME(),a.value=DE()}function u(){l(),s.value=NE()}return Ht(()=>{const c=a.value<n.sm,d=a.value<n.md&&!c,f=a.value<n.lg&&!(d||c),m=a.value<n.xl&&!(f||d||c),g=a.value<n.xxl&&!(m||f||d||c),y=a.value>=n.xxl,p=c?"xs":d?"sm":f?"md":m?"lg":g?"xl":"xxl",S=typeof i=="number"?i:n[i],w=a.value<S;o.xs=c,o.sm=d,o.md=f,o.lg=m,o.xl=g,o.xxl=y,o.smAndUp=!c,o.mdAndUp=!(c||d),o.lgAndUp=!(c||d||f),o.xlAndUp=!(c||d||f||m),o.smAndDown=!(f||m||g||y),o.mdAndDown=!(m||g||y),o.lgAndDown=!(g||y),o.xlAndDown=!y,o.name=p,o.height=r.value,o.width=a.value,o.mobile=w,o.mobileBreakpoint=i,o.platform=s.value,o.thresholds=n}),it&&window.addEventListener("resize",l,{passive:!0}),{...Bs(o),update:u,ssr:!!t}}const qo=z({mobile:{type:Boolean,default:!1},mobileBreakpoint:[Number,String]},"display");function Pi(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:gr();const n=Fe(Mp);if(!n)throw new Error("Could not find Vuetify display injection");const i=P(()=>{if(e.mobile!=null)return e.mobile;if(!e.mobileBreakpoint)return n.mobile.value;const s=typeof e.mobileBreakpoint=="number"?e.mobileBreakpoint:n.thresholds.value[e.mobileBreakpoint];return n.width.value<s}),r=P(()=>t?{[`${t}--mobile`]:i.value}:{});return{...n,displayClasses:r,mobile:i}}const bV=Symbol.for("vuetify:goto");function wV(){return{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:e=>e,easeInQuad:e=>e**2,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e**2:-1+(4-2*e)*e,easeInCubic:e=>e**3,easeOutCubic:e=>--e**3+1,easeInOutCubic:e=>e<.5?4*e**3:(e-1)*(2*e-2)*(2*e-2)+1,easeInQuart:e=>e**4,easeOutQuart:e=>1- --e**4,easeInOutQuart:e=>e<.5?8*e**4:1-8*--e**4,easeInQuint:e=>e**5,easeOutQuint:e=>1+--e**5,easeInOutQuint:e=>e<.5?16*e**5:1+16*--e**5}}}function AY(e){return Fb(e)??(document.scrollingElement||document.body)}function Fb(e){return typeof e=="string"?document.querySelector(e):Ab(e)}function Wv(e,t,n){if(typeof e=="number")return t&&n?-e:e;let i=Fb(e),r=0;for(;i;)r+=t?i.offsetLeft:i.offsetTop,i=i.offsetParent;return r}function PY(e,t){return{rtl:t.isRtl,options:$n(wV(),e)}}async function OE(e,t,n,i){const r=n?"scrollLeft":"scrollTop",s=$n((i==null?void 0:i.options)??wV(),t),o=i==null?void 0:i.rtl.value,a=(typeof e=="number"?e:Fb(e))??0,l=s.container==="parent"&&a instanceof HTMLElement?a.parentElement:AY(s.container),u=typeof s.easing=="function"?s.easing:s.patterns[s.easing];if(!u)throw new TypeError(`Easing function "${s.easing}" not found.`);let c;if(typeof a=="number")c=Wv(a,n,o);else if(c=Wv(a,n,o)-Wv(l,n,o),s.layout){const g=window.getComputedStyle(a).getPropertyValue("--v-layout-top");g&&(c-=parseInt(g,10))}c+=s.offset,c=RY(l,c,!!o,!!n);const d=l[r]??0;if(c===d)return Promise.resolve(c);const f=performance.now();return new Promise(m=>requestAnimationFrame(function g(y){const S=(y-f)/s.duration,w=Math.floor(d+(c-d)*u(Rt(S,0,1)));if(l[r]=w,S>=1&&Math.abs(w-l[r])<10)return m(c);if(S>2)return m(l[r]);requestAnimationFrame(g)}))}function xY(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=Fe(bV),{isRtl:n}=sn();if(!t)throw new Error("[Vuetify] Could not find injected goto instance");const i={...t,rtl:P(()=>t.rtl.value||n.value)};async function r(s,o){return OE(s,$n(e,o),!1,i)}return r.horizontal=async(s,o)=>OE(s,$n(e,o),!0,i),r}function RY(e,t,n,i){const{scrollWidth:r,scrollHeight:s}=e,[o,a]=e===document.scrollingElement?[window.innerWidth,window.innerHeight]:[e.offsetWidth,e.offsetHeight];let l,u;return i?n?(l=-(r-o),u=0):(l=0,u=r-o):(l=0,u=s+-a),Math.max(Math.min(t,u),l)}const VY={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper"},DY={component:e=>qt($b,{...e,class:"mdi"})},Ne=[String,Function,Object,Array],Np=Symbol.for("vuetify:icons"),dm=z({icon:{type:Ne},tag:{type:String,required:!0}},"icon"),Op=J()({name:"VComponentIcon",props:dm(),setup(e,t){let{slots:n}=t;return()=>{const i=e.icon;return v(e.tag,null,{default:()=>{var r;return[e.icon?v(i,null,null):(r=n.default)==null?void 0:r.call(n)]}})}}}),Bb=vi({name:"VSvgIcon",inheritAttrs:!1,props:dm(),setup(e,t){let{attrs:n}=t;return()=>v(e.tag,te(n,{style:null}),{default:()=>[v("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(e.icon)?e.icon.map(i=>Array.isArray(i)?v("path",{d:i[0],"fill-opacity":i[1]},null):v("path",{d:i},null)):v("path",{d:e.icon},null)])]})}}),MY=vi({name:"VLigatureIcon",props:dm(),setup(e){return()=>v(e.tag,null,{default:()=>[e.icon]})}}),$b=vi({name:"VClassIcon",props:dm(),setup(e){return()=>v(e.tag,{class:e.icon},null)}});function NY(){return{svg:{component:Bb},class:{component:$b}}}function OY(e){const t=NY(),n=(e==null?void 0:e.defaultSet)??"mdi";return n==="mdi"&&!t.mdi&&(t.mdi=DY),$n({defaultSet:n,sets:t,aliases:{...VY,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z","vuetify-play":["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",.6]]}},e)}const LY=e=>{const t=Fe(Np);if(!t)throw new Error("Missing Vuetify Icons provide!");return{iconData:P(()=>{var l;const i=Qe(e);if(!i)return{component:Op};let r=i;if(typeof r=="string"&&(r=r.trim(),r.startsWith("$")&&(r=(l=t.aliases)==null?void 0:l[r.slice(1)])),Array.isArray(r))return{component:Bb,icon:r};if(typeof r!="string")return{component:Op,icon:r};const s=Object.keys(t.sets).find(u=>typeof r=="string"&&r.startsWith(`${u}:`)),o=s?r.slice(s.length+1):r;return{component:t.sets[s??t.defaultSet].component,icon:o}})}},nc=Symbol.for("vuetify:theme"),Xe=z({theme:String},"theme");function LE(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function FY(){var i,r;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:LE();const t=LE();if(!e)return{...t,isDisabled:!0};const n={};for(const[s,o]of Object.entries(e.themes??{})){const a=o.dark||s==="dark"?(i=t.themes)==null?void 0:i.dark:(r=t.themes)==null?void 0:r.light;n[s]=$n(a,o)}return $n(t,{...e,themes:n})}function BY(e){const t=FY(e),n=re(t.defaultTheme),i=re(t.themes),r=P(()=>{const c={};for(const[d,f]of Object.entries(i.value)){const m=c[d]={...f,colors:{...f.colors}};if(t.variations)for(const g of t.variations.colors){const y=m.colors[g];if(y)for(const p of["lighten","darken"]){const S=p==="lighten"?b7:w7;for(const w of ui(t.variations[p],1))m.colors[`${g}-${p}-${w}`]=sV(S(Ei(y),w))}}for(const g of Object.keys(m.colors)){if(/^on-[a-z]/.test(g)||m.colors[`on-${g}`])continue;const y=`on-${g}`,p=Ei(m.colors[g]);m.colors[y]=uV(p)}}return c}),s=P(()=>r.value[n.value]),o=P(()=>{var g;const c=[];(g=s.value)!=null&&g.dark&&Zs(c,":root",["color-scheme: dark"]),Zs(c,":root",FE(s.value));for(const[y,p]of Object.entries(r.value))Zs(c,`.v-theme--${y}`,[`color-scheme: ${p.dark?"dark":"normal"}`,...FE(p)]);const d=[],f=[],m=new Set(Object.values(r.value).flatMap(y=>Object.keys(y.colors)));for(const y of m)/^on-[a-z]/.test(y)?Zs(f,`.${y}`,[`color: rgb(var(--v-theme-${y})) !important`]):(Zs(d,`.bg-${y}`,[`--v-theme-overlay-multiplier: var(--v-theme-${y}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${y})) !important`,`color: rgb(var(--v-theme-on-${y})) !important`]),Zs(f,`.text-${y}`,[`color: rgb(var(--v-theme-${y})) !important`]),Zs(f,`.border-${y}`,[`--v-border-color: var(--v-theme-${y})`]));return c.push(...d,...f),c.map((y,p)=>p===0?y:`    ${y}`).join("")});function a(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:t.cspNonce||!1}]}}function l(c){if(t.isDisabled)return;const d=c._context.provides.usehead;if(d)if(d.push){const f=d.push(a);it&&ye(o,()=>{f.patch(a)})}else it?(d.addHeadObjs(P(a)),Ht(()=>d.updateDOM())):d.addHeadObjs(a());else{let m=function(){if(typeof document<"u"&&!f){const g=document.createElement("style");g.type="text/css",g.id="vuetify-theme-stylesheet",t.cspNonce&&g.setAttribute("nonce",t.cspNonce),f=g,document.head.appendChild(f)}f&&(f.innerHTML=o.value)},f=it?document.getElementById("vuetify-theme-stylesheet"):null;it?ye(o,m,{immediate:!0}):m()}}const u=P(()=>t.isDisabled?void 0:`v-theme--${n.value}`);return{install:l,isDisabled:t.isDisabled,name:n,themes:i,current:s,computedThemes:r,themeClasses:u,styles:o,global:{name:n,current:s}}}function at(e){Ot("provideTheme");const t=Fe(nc,null);if(!t)throw new Error("Could not find Vuetify theme injection");const n=P(()=>e.theme??t.name.value),i=P(()=>t.themes.value[n.value]),r=P(()=>t.isDisabled?void 0:`v-theme--${n.value}`),s={...t,name:n,current:i,themeClasses:r};return lt(nc,s),s}function SV(){Ot("useTheme");const e=Fe(nc,null);if(!e)throw new Error("Could not find Vuetify theme injection");return e}function Zs(e,t,n){e.push(`${t} {
`,...n.map(i=>`  ${i};
`),`}
`).splice(1).map(d=>({text:d.replace("webpack:/","").replace(".vue",".js").trim(),internal:d.includes("node_modules")&&!d.includes(".cache")||d.includes("internal")||d.includes("new Promise")})).map(d=>`<span class="stack${d.internal?" internal":""}">${d.text}</span>`).join(`
`);const i=Number(n.statusCode||500),r=i===404,s=n.statusMessage??(r?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,c=r?mf(()=>mo(()=>import("./2s1XYeAN.js"),__vite__mapDeps([10,6,11,12]),import.meta.url)):mf(()=>mo(()=>import("./B4Pwrxtt.js"),__vite__mapDeps([13,11,14]),import.meta.url));return(d,f)=>(Si(),er(Qe(c),iO(Vk({statusCode:Qe(i),statusMessage:Qe(s),description:Qe(o),stack:Qe(a)})),null,16))}},tne={key:0},uI={__name:"nuxt-root",setup(e){const t=()=>null,n=tn(),i=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",i);Ui().beforeEach(l)}const r=!1;lt(Ih,uA()),n.hooks.callHookWith(l=>l.map(u=>u()),"vue:setup");const s=kh(),o=!1;rk((l,u,c)=>{if(n.hooks.callHook("vue:error",l,u,c).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),K2(l)&&(l.fatal||l.unhandled))return n.runWithContext(()=>Ca(l)),!1});const a=!1;return(l,u)=>(Si(),er(Ek,{onResolve:Qe(i)},{default:zI(()=>[Qe(o)?(Si(),xL("div",tne)):Qe(s)?(Si(),er(Qe(ene),{key:1,error:Qe(s)},null,8,["error"])):Qe(a)?(Si(),er(Qe(t),{key:2,context:Qe(a)},null,8,["context"])):Qe(r)?(Si(),er(ok(Qe(r)),{key:3})):(Si(),er(Qe(Zte),{key:4}))]),_:1},8,["onResolve"]))}};let cI;{let e;cI=async function(){var o,a;if(e)return e;const i=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?yF(uI):pF(uI),r=x2({vueApp:i});async function s(l){await r.callHook("app:error",l),r.payload.error=r.payload.error||Ah(l)}i.config.errorHandler=s,r.hook("app:suspense:resolve",()=>{i.config.errorHandler===s&&(i.config.errorHandler=void 0)});try{await D2(r,Wte)}catch(l){s(l)}try{await r.hooks.callHook("app:created",i),await r.hooks.callHook("app:beforeMount",i),i.mount(k2),await r.hooks.callHook("app:mounted",i),await Ye()}catch(l){s(l)}return i},e=cI().catch(t=>{throw console.error("Error while mounting app:",t),t})}export{Bo as $,sne as A,mg as B,Fo as C,tn as D,Fe as E,Te as F,uA as G,Sne as H,Ui as I,wd as J,one as K,X6 as L,qt as M,Ye as N,lt as O,Ih as P,W2 as Q,rne as R,Ek as S,Or as T,Kt as U,O_ as V,FT as W,Tne as X,NF as Y,ane as Z,Qte as _,Rk as a,q2 as a0,zy as a1,lne as a2,pg as a3,Wy as a4,Pne as a5,Om as a6,CH as a7,yne as a8,hne as a9,bne as aa,vne as ab,gne as ac,mne as ad,pne as ae,_ne as af,Ene as ag,Ine as ah,Ane as ai,Cne as aj,kne as ak,iO as al,Vk as am,yh as an,ine as ao,ph as ap,Mm as aq,Nm as ar,v as b,xL as c,ki as d,Ht as e,Kg as f,ye as g,rn as h,wne as i,Dy as j,tk as k,cl as l,er as m,Ft as n,Si as o,XO as p,Dt as q,re as r,mi as s,bI as t,Qe as u,nne as v,zI as w,te as x,wc as y,P as z};