function VM(a,e){for(var i=0;i<e.length;i++){const s=e[i];if(typeof s!="string"&&!Array.isArray(s)){for(const l in s)if(l!=="default"&&!(l in a)){const u=Object.getOwnPropertyDescriptor(s,l);u&&Object.defineProperty(a,l,u.get?u:{enumerable:!0,get:()=>s[l]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function kM(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var qd={exports:{}},el={};var F0;function XM(){if(F0)return el;F0=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var c=null;if(u!==void 0&&(c=""+u),l.key!==void 0&&(c=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:a,type:s,key:c,ref:l!==void 0?l:null,props:u}}return el.Fragment=e,el.jsx=i,el.jsxs=i,el}var z0;function WM(){return z0||(z0=1,qd.exports=XM()),qd.exports}var Ht=WM(),Yd={exports:{}},bt={};var I0;function qM(){if(I0)return bt;I0=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function S(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,y={};function M(P,Y,xe){this.props=P,this.context=Y,this.refs=y,this.updater=xe||T}M.prototype.isReactComponent={},M.prototype.setState=function(P,Y){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,Y,"setState")},M.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function w(){}w.prototype=M.prototype;function U(P,Y,xe){this.props=P,this.context=Y,this.refs=y,this.updater=xe||T}var N=U.prototype=new w;N.constructor=U,A(N,M.prototype),N.isPureReactComponent=!0;var H=Array.isArray;function B(){}var z={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function D(P,Y,xe){var Re=xe.ref;return{$$typeof:a,type:P,key:Y,ref:Re!==void 0?Re:null,props:xe}}function re(P,Y){return D(P.type,Y,P.props)}function G(P){return typeof P=="object"&&P!==null&&P.$$typeof===a}function K(P){var Y={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(xe){return Y[xe]})}var ie=/\/+/g;function ee(P,Y){return typeof P=="object"&&P!==null&&P.key!=null?K(""+P.key):Y.toString(36)}function Z(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(B,B):(P.status="pending",P.then(function(Y){P.status==="pending"&&(P.status="fulfilled",P.value=Y)},function(Y){P.status==="pending"&&(P.status="rejected",P.reason=Y)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function O(P,Y,xe,Re,Ge){var ne=typeof P;(ne==="undefined"||ne==="boolean")&&(P=null);var Se=!1;if(P===null)Se=!0;else switch(ne){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(P.$$typeof){case a:case e:Se=!0;break;case _:return Se=P._init,O(Se(P._payload),Y,xe,Re,Ge)}}if(Se)return Ge=Ge(P),Se=Re===""?"."+ee(P,0):Re,H(Ge)?(xe="",Se!=null&&(xe=Se.replace(ie,"$&/")+"/"),O(Ge,Y,xe,"",function(ut){return ut})):Ge!=null&&(G(Ge)&&(Ge=re(Ge,xe+(Ge.key==null||P&&P.key===Ge.key?"":(""+Ge.key).replace(ie,"$&/")+"/")+Se)),Y.push(Ge)),1;Se=0;var Te=Re===""?".":Re+":";if(H(P))for(var Ze=0;Ze<P.length;Ze++)Re=P[Ze],ne=Te+ee(Re,Ze),Se+=O(Re,Y,xe,ne,Ge);else if(Ze=S(P),typeof Ze=="function")for(P=Ze.call(P),Ze=0;!(Re=P.next()).done;)Re=Re.value,ne=Te+ee(Re,Ze++),Se+=O(Re,Y,xe,ne,Ge);else if(ne==="object"){if(typeof P.then=="function")return O(Z(P),Y,xe,Re,Ge);throw Y=String(P),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return Se}function I(P,Y,xe){if(P==null)return P;var Re=[],Ge=0;return O(P,Re,"","",function(ne){return Y.call(xe,ne,Ge++)}),Re}function oe(P){if(P._status===-1){var Y=P._result;Y=Y(),Y.then(function(xe){(P._status===0||P._status===-1)&&(P._status=1,P._result=xe)},function(xe){(P._status===0||P._status===-1)&&(P._status=2,P._result=xe)}),P._status===-1&&(P._status=0,P._result=Y)}if(P._status===1)return P._result.default;throw P._result}var ce=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},be={map:I,forEach:function(P,Y,xe){I(P,function(){Y.apply(this,arguments)},xe)},count:function(P){var Y=0;return I(P,function(){Y++}),Y},toArray:function(P){return I(P,function(Y){return Y})||[]},only:function(P){if(!G(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return bt.Activity=v,bt.Children=be,bt.Component=M,bt.Fragment=i,bt.Profiler=l,bt.PureComponent=U,bt.StrictMode=s,bt.Suspense=m,bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,bt.__COMPILER_RUNTIME={__proto__:null,c:function(P){return z.H.useMemoCache(P)}},bt.cache=function(P){return function(){return P.apply(null,arguments)}},bt.cacheSignal=function(){return null},bt.cloneElement=function(P,Y,xe){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Re=A({},P.props),Ge=P.key;if(Y!=null)for(ne in Y.key!==void 0&&(Ge=""+Y.key),Y)!b.call(Y,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&Y.ref===void 0||(Re[ne]=Y[ne]);var ne=arguments.length-2;if(ne===1)Re.children=xe;else if(1<ne){for(var Se=Array(ne),Te=0;Te<ne;Te++)Se[Te]=arguments[Te+2];Re.children=Se}return D(P.type,Ge,Re)},bt.createContext=function(P){return P={$$typeof:c,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:u,_context:P},P},bt.createElement=function(P,Y,xe){var Re,Ge={},ne=null;if(Y!=null)for(Re in Y.key!==void 0&&(ne=""+Y.key),Y)b.call(Y,Re)&&Re!=="key"&&Re!=="__self"&&Re!=="__source"&&(Ge[Re]=Y[Re]);var Se=arguments.length-2;if(Se===1)Ge.children=xe;else if(1<Se){for(var Te=Array(Se),Ze=0;Ze<Se;Ze++)Te[Ze]=arguments[Ze+2];Ge.children=Te}if(P&&P.defaultProps)for(Re in Se=P.defaultProps,Se)Ge[Re]===void 0&&(Ge[Re]=Se[Re]);return D(P,ne,Ge)},bt.createRef=function(){return{current:null}},bt.forwardRef=function(P){return{$$typeof:h,render:P}},bt.isValidElement=G,bt.lazy=function(P){return{$$typeof:_,_payload:{_status:-1,_result:P},_init:oe}},bt.memo=function(P,Y){return{$$typeof:p,type:P,compare:Y===void 0?null:Y}},bt.startTransition=function(P){var Y=z.T,xe={};z.T=xe;try{var Re=P(),Ge=z.S;Ge!==null&&Ge(xe,Re),typeof Re=="object"&&Re!==null&&typeof Re.then=="function"&&Re.then(B,ce)}catch(ne){ce(ne)}finally{Y!==null&&xe.types!==null&&(Y.types=xe.types),z.T=Y}},bt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},bt.use=function(P){return z.H.use(P)},bt.useActionState=function(P,Y,xe){return z.H.useActionState(P,Y,xe)},bt.useCallback=function(P,Y){return z.H.useCallback(P,Y)},bt.useContext=function(P){return z.H.useContext(P)},bt.useDebugValue=function(){},bt.useDeferredValue=function(P,Y){return z.H.useDeferredValue(P,Y)},bt.useEffect=function(P,Y){return z.H.useEffect(P,Y)},bt.useEffectEvent=function(P){return z.H.useEffectEvent(P)},bt.useId=function(){return z.H.useId()},bt.useImperativeHandle=function(P,Y,xe){return z.H.useImperativeHandle(P,Y,xe)},bt.useInsertionEffect=function(P,Y){return z.H.useInsertionEffect(P,Y)},bt.useLayoutEffect=function(P,Y){return z.H.useLayoutEffect(P,Y)},bt.useMemo=function(P,Y){return z.H.useMemo(P,Y)},bt.useOptimistic=function(P,Y){return z.H.useOptimistic(P,Y)},bt.useReducer=function(P,Y,xe){return z.H.useReducer(P,Y,xe)},bt.useRef=function(P){return z.H.useRef(P)},bt.useState=function(P){return z.H.useState(P)},bt.useSyncExternalStore=function(P,Y,xe){return z.H.useSyncExternalStore(P,Y,xe)},bt.useTransition=function(){return z.H.useTransition()},bt.version="19.2.3",bt}var B0;function Pp(){return B0||(B0=1,Yd.exports=qM()),Yd.exports}var se=Pp();const YM=kM(se),jM=VM({__proto__:null,default:YM},[se]);var jd={exports:{}},tl={},Zd={exports:{}},Kd={};var H0;function ZM(){return H0||(H0=1,(function(a){function e(O,I){var oe=O.length;O.push(I);e:for(;0<oe;){var ce=oe-1>>>1,be=O[ce];if(0<l(be,I))O[ce]=I,O[oe]=be,oe=ce;else break e}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var I=O[0],oe=O.pop();if(oe!==I){O[0]=oe;e:for(var ce=0,be=O.length,P=be>>>1;ce<P;){var Y=2*(ce+1)-1,xe=O[Y],Re=Y+1,Ge=O[Re];if(0>l(xe,oe))Re<be&&0>l(Ge,xe)?(O[ce]=Ge,O[Re]=oe,ce=Re):(O[ce]=xe,O[Y]=oe,ce=Y);else if(Re<be&&0>l(Ge,oe))O[ce]=Ge,O[Re]=oe,ce=Re;else break e}}return I}function l(O,I){var oe=O.sortIndex-I.sortIndex;return oe!==0?oe:O.id-I.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var c=Date,h=c.now();a.unstable_now=function(){return c.now()-h}}var m=[],p=[],_=1,v=null,g=3,S=!1,T=!1,A=!1,y=!1,M=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function N(O){for(var I=i(p);I!==null;){if(I.callback===null)s(p);else if(I.startTime<=O)s(p),I.sortIndex=I.expirationTime,e(m,I);else break;I=i(p)}}function H(O){if(A=!1,N(O),!T)if(i(m)!==null)T=!0,B||(B=!0,K());else{var I=i(p);I!==null&&Z(H,I.startTime-O)}}var B=!1,z=-1,b=5,D=-1;function re(){return y?!0:!(a.unstable_now()-D<b)}function G(){if(y=!1,B){var O=a.unstable_now();D=O;var I=!0;try{e:{T=!1,A&&(A=!1,w(z),z=-1),S=!0;var oe=g;try{t:{for(N(O),v=i(m);v!==null&&!(v.expirationTime>O&&re());){var ce=v.callback;if(typeof ce=="function"){v.callback=null,g=v.priorityLevel;var be=ce(v.expirationTime<=O);if(O=a.unstable_now(),typeof be=="function"){v.callback=be,N(O),I=!0;break t}v===i(m)&&s(m),N(O)}else s(m);v=i(m)}if(v!==null)I=!0;else{var P=i(p);P!==null&&Z(H,P.startTime-O),I=!1}}break e}finally{v=null,g=oe,S=!1}I=void 0}}finally{I?K():B=!1}}}var K;if(typeof U=="function")K=function(){U(G)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,ee=ie.port2;ie.port1.onmessage=G,K=function(){ee.postMessage(null)}}else K=function(){M(G,0)};function Z(O,I){z=M(function(){O(a.unstable_now())},I)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(O){O.callback=null},a.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<O?Math.floor(1e3/O):5},a.unstable_getCurrentPriorityLevel=function(){return g},a.unstable_next=function(O){switch(g){case 1:case 2:case 3:var I=3;break;default:I=g}var oe=g;g=I;try{return O()}finally{g=oe}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(O,I){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var oe=g;g=O;try{return I()}finally{g=oe}},a.unstable_scheduleCallback=function(O,I,oe){var ce=a.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?ce+oe:ce):oe=ce,O){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=oe+be,O={id:_++,callback:I,priorityLevel:O,startTime:oe,expirationTime:be,sortIndex:-1},oe>ce?(O.sortIndex=oe,e(p,O),i(m)===null&&O===i(p)&&(A?(w(z),z=-1):A=!0,Z(H,oe-ce))):(O.sortIndex=be,e(m,O),T||S||(T=!0,B||(B=!0,K()))),O},a.unstable_shouldYield=re,a.unstable_wrapCallback=function(O){var I=g;return function(){var oe=g;g=I;try{return O.apply(this,arguments)}finally{g=oe}}}})(Kd)),Kd}var G0;function KM(){return G0||(G0=1,Zd.exports=ZM()),Zd.exports}var Qd={exports:{}},Wn={};var V0;function QM(){if(V0)return Wn;V0=1;var a=Pp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var c=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Wn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,_)},Wn.flushSync=function(m){var p=c.T,_=s.p;try{if(c.T=null,s.p=2,m)return m()}finally{c.T=p,s.p=_,s.d.f()}},Wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Wn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:S}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Wn.requestFormReset=function(m){s.d.r(m)},Wn.unstable_batchedUpdates=function(m,p){return m(p)},Wn.useFormState=function(m,p,_){return c.H.useFormState(m,p,_)},Wn.useFormStatus=function(){return c.H.useHostTransitionStatus()},Wn.version="19.2.3",Wn}var k0;function Sx(){if(k0)return Qd.exports;k0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Qd.exports=QM(),Qd.exports}var X0;function JM(){if(X0)return tl;X0=1;var a=KM(),e=Pp(),i=Sx();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,r=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(r=n.return),t=n.return;while(t)}return n.tag===3?r:null}function c(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var r=t,o=n;;){var f=r.return;if(f===null)break;var d=f.alternate;if(d===null){if(o=f.return,o!==null){r=o;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===r)return m(f),t;if(d===o)return m(f),n;d=d.sibling}throw Error(s(188))}if(r.return!==o.return)r=f,o=d;else{for(var E=!1,C=f.child;C;){if(C===r){E=!0,r=f,o=d;break}if(C===o){E=!0,o=f,r=d;break}C=C.sibling}if(!E){for(C=d.child;C;){if(C===r){E=!0,r=d,o=f;break}if(C===o){E=!0,o=d,r=f;break}C=C.sibling}if(!E)throw Error(s(189))}}if(r.alternate!==o)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),U=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),re=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var ie=Symbol.for("react.client.reference");function ee(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ie?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case M:return"Profiler";case y:return"StrictMode";case H:return"Suspense";case B:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case U:return t.displayName||"Context";case w:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:ee(t.type)||"Memo";case b:n=t._payload,t=t._init;try{return ee(t(n))}catch{}}return null}var Z=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},ce=[],be=-1;function P(t){return{current:t}}function Y(t){0>be||(t.current=ce[be],ce[be]=null,be--)}function xe(t,n){be++,ce[be]=t.current,t.current=n}var Re=P(null),Ge=P(null),ne=P(null),Se=P(null);function Te(t,n){switch(xe(ne,n),xe(Ge,t),xe(Re,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?r0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=r0(n),t=s0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Y(Re),xe(Re,t)}function Ze(){Y(Re),Y(Ge),Y(ne)}function ut(t){t.memoizedState!==null&&xe(Se,t);var n=Re.current,r=s0(n,t.type);n!==r&&(xe(Ge,t),xe(Re,r))}function pt(t){Ge.current===t&&(Y(Re),Y(Ge)),Se.current===t&&(Y(Se),Ko._currentValue=oe)}var hn,dt;function St(t){if(hn===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);hn=n&&n[1]||"",dt=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+hn+t+dt}var Ft=!1;function _t(t,n){if(!t||Ft)return"";Ft=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Ee=function(){throw Error()};if(Object.defineProperty(Ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ee,[])}catch(ve){var de=ve}Reflect.construct(t,[],Ee)}else{try{Ee.call()}catch(ve){de=ve}t.call(Ee.prototype)}}else{try{throw Error()}catch(ve){de=ve}(Ee=t())&&typeof Ee.catch=="function"&&Ee.catch(function(){})}}catch(ve){if(ve&&de&&typeof ve.stack=="string")return[ve.stack,de.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),E=d[0],C=d[1];if(E&&C){var k=E.split(`
`),ue=C.split(`
`);for(f=o=0;o<k.length&&!k[o].includes("DetermineComponentFrameRoot");)o++;for(;f<ue.length&&!ue[f].includes("DetermineComponentFrameRoot");)f++;if(o===k.length||f===ue.length)for(o=k.length-1,f=ue.length-1;1<=o&&0<=f&&k[o]!==ue[f];)f--;for(;1<=o&&0<=f;o--,f--)if(k[o]!==ue[f]){if(o!==1||f!==1)do if(o--,f--,0>f||k[o]!==ue[f]){var ye=`
`+k[o].replace(" at new "," at ");return t.displayName&&ye.includes("<anonymous>")&&(ye=ye.replace("<anonymous>",t.displayName)),ye}while(1<=o&&0<=f);break}}}finally{Ft=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?St(r):""}function qt(t,n){switch(t.tag){case 26:case 27:case 5:return St(t.type);case 16:return St("Lazy");case 13:return t.child!==n&&n!==null?St("Suspense Fallback"):St("Suspense");case 19:return St("SuspenseList");case 0:case 15:return _t(t.type,!1);case 11:return _t(t.type.render,!1);case 1:return _t(t.type,!0);case 31:return St("Activity");default:return""}}function X(t){try{var n="",r=null;do n+=qt(t,r),r=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var tn=Object.prototype.hasOwnProperty,Ut=a.unstable_scheduleCallback,Gt=a.unstable_cancelCallback,et=a.unstable_shouldYield,L=a.unstable_requestPaint,x=a.unstable_now,F=a.unstable_getCurrentPriorityLevel,J=a.unstable_ImmediatePriority,ge=a.unstable_UserBlockingPriority,fe=a.unstable_NormalPriority,Pe=a.unstable_LowPriority,Ue=a.unstable_IdlePriority,tt=a.log,ct=a.unstable_setDisableYieldValue,we=null,De=null;function He(t){if(typeof tt=="function"&&ct(t),De&&typeof De.setStrictMode=="function")try{De.setStrictMode(we,t)}catch{}}var Ve=Math.clz32?Math.clz32:j,qe=Math.log,Et=Math.LN2;function j(t){return t>>>=0,t===0?32:31-(qe(t)/Et|0)|0}var Oe=256,Le=262144,Ye=4194304;function Ce(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _e(t,n,r){var o=t.pendingLanes;if(o===0)return 0;var f=0,d=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var C=o&134217727;return C!==0?(o=C&~d,o!==0?f=Ce(o):(E&=C,E!==0?f=Ce(E):r||(r=C&~t,r!==0&&(f=Ce(r))))):(C=o&~d,C!==0?f=Ce(C):E!==0?f=Ce(E):r||(r=o&~t,r!==0&&(f=Ce(r)))),f===0?0:n!==0&&n!==f&&(n&d)===0&&(d=f&-f,r=n&-n,d>=r||d===32&&(r&4194048)!==0)?n:f}function Qe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function vt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jt(){var t=Ye;return Ye<<=1,(Ye&62914560)===0&&(Ye=4194304),t}function Lt(t){for(var n=[],r=0;31>r;r++)n.push(t);return n}function An(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ti(t,n,r,o,f,d){var E=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var C=t.entanglements,k=t.expirationTimes,ue=t.hiddenUpdates;for(r=E&~r;0<r;){var ye=31-Ve(r),Ee=1<<ye;C[ye]=0,k[ye]=-1;var de=ue[ye];if(de!==null)for(ue[ye]=null,ye=0;ye<de.length;ye++){var ve=de[ye];ve!==null&&(ve.lane&=-536870913)}r&=~Ee}o!==0&&wr(t,o,0),d!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=d&~(E&~n))}function wr(t,n,r){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ve(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|r&261930}function Ya(t,n){var r=t.entangledLanes|=n;for(t=t.entanglements;r;){var o=31-Ve(r),f=1<<o;f&n|t[o]&n&&(t[o]|=n),r&=~f}}function V(t,n){var r=n&-n;return r=(r&42)!==0?1:Q(r),(r&(t.suspendedLanes|n))!==0?0:r}function Q(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function he(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ae(){var t=I.p;return t!==0?t:(t=window.event,t===void 0?32:w0(t.type))}function Ne(t,n){var r=I.p;try{return I.p=t,n()}finally{I.p=r}}var Je=Math.random().toString(36).slice(2),Fe="__reactFiber$"+Je,Xe="__reactProps$"+Je,Ke="__reactContainer$"+Je,ot="__reactEvents$"+Je,ft="__reactListeners$"+Je,lt="__reactHandles$"+Je,Wt="__reactResources$"+Je,wt="__reactMarker$"+Je;function nn(t){delete t[Fe],delete t[Xe],delete t[ot],delete t[ft],delete t[lt]}function fn(t){var n=t[Fe];if(n)return n;for(var r=t.parentNode;r;){if(n=r[Ke]||r[Fe]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(t=h0(t);t!==null;){if(r=t[Fe])return r;t=h0(t)}return n}t=r,r=t.parentNode}return null}function gn(t){if(t=t[Fe]||t[Ke]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function zt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function R(t){var n=t[Wt];return n||(n=t[Wt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function W(t){t[wt]=!0}var me=new Set,ae={};function te(t,n){ze(t,n),ze(t+"Capture",n)}function ze(t,n){for(ae[t]=n,t=0;t<n.length;t++)me.add(n[t])}var We=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ie={},$e={};function it(t){return tn.call($e,t)?!0:tn.call(Ie,t)?!1:We.test(t)?$e[t]=!0:(Ie[t]=!0,!1)}function Be(t,n,r){if(it(n))if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+r)}}function rt(t,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+r)}}function je(t,n,r,o){if(o===null)t.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(n,r,""+o)}}function gt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function an(t,n,r){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return f.call(this)},set:function(E){r=""+E,d.call(this,E)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(E){r=""+E},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Vt(t){if(!t._valueTracker){var n=xt(t)?"checked":"value";t._valueTracker=an(t,n,""+t[n])}}function Sn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return t&&(o=xt(t)?t.checked?"true":"false":t.value),t=o,t!==r?(n.setValue(t),!0):!1}function at(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Zn=/[\n"\\]/g;function Mt(t){return t.replace(Zn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Kn(t,n,r,o,f,d,E,C){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),n!=null?E==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+gt(n)):t.value!==""+gt(n)&&(t.value=""+gt(n)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),n!=null?Hi(t,E,gt(n)):r!=null?Hi(t,E,gt(r)):o!=null&&t.removeAttribute("value"),f==null&&d!=null&&(t.defaultChecked=!!d),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+gt(C):t.removeAttribute("name")}function fi(t,n,r,o,f,d,E,C){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Vt(t);return}r=r!=null?""+gt(r):"",n=n!=null?""+gt(n):r,C||n===t.value||(t.value=n),t.defaultValue=n}o=o??f,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=C?t.checked:!!o,t.defaultChecked=!!o,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E),Vt(t)}function Hi(t,n,r){n==="number"&&at(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function di(t,n,r,o){if(t=t.options,n){n={};for(var f=0;f<r.length;f++)n["$"+r[f]]=!0;for(r=0;r<t.length;r++)f=n.hasOwnProperty("$"+t[r].value),t[r].selected!==f&&(t[r].selected=f),f&&o&&(t[r].defaultSelected=!0)}else{for(r=""+gt(r),n=null,f=0;f<t.length;f++){if(t[f].value===r){t[f].selected=!0,o&&(t[f].defaultSelected=!0);return}n!==null||t[f].disabled||(n=t[f])}n!==null&&(n.selected=!0)}}function en(t,n,r){if(n!=null&&(n=""+gt(n),n!==t.value&&(t.value=n),r==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=r!=null?""+gt(r):""}function Rn(t,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(s(92));if(Z(o)){if(1<o.length)throw Error(s(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=gt(n),t.defaultValue=r,o=t.textContent,o===r&&o!==""&&o!==null&&(t.value=o),Vt(t)}function Qn(t,n){if(n){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=n;return}}t.textContent=n}var Cn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gi(t,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,r):typeof r!="number"||r===0||Cn.has(n)?n==="float"?t.cssFloat=r:t[n]=(""+r).trim():t[n]=r+"px"}function ma(t,n,r){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var f in n)o=n[f],n.hasOwnProperty(f)&&r[f]!==o&&Gi(t,f,o)}else for(var d in n)n.hasOwnProperty(d)&&Gi(t,d,n[d])}function os(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Iy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),By=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ol(t){return By.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ga(){}var Vc=null;function kc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ls=null,us=null;function am(t){var n=gn(t);if(n&&(t=n.stateNode)){var r=t[Xe]||null;e:switch(t=n.stateNode,n.type){case"input":if(Kn(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Mt(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==t&&o.form===t.form){var f=o[Xe]||null;if(!f)throw Error(s(90));Kn(o,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===t.form&&Sn(o)}break e;case"textarea":en(t,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&di(t,!!r.multiple,n,!1)}}}var Xc=!1;function rm(t,n,r){if(Xc)return t(n,r);Xc=!0;try{var o=t(n);return o}finally{if(Xc=!1,(ls!==null||us!==null)&&(Su(),ls&&(n=ls,t=us,us=ls=null,am(n),t)))for(n=0;n<t.length;n++)am(t[n])}}function ho(t,n){var r=t.stateNode;if(r===null)return null;var o=r[Xe]||null;if(o===null)return null;r=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(s(231,n,typeof r));return r}var va=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wc=!1;if(va)try{var po={};Object.defineProperty(po,"passive",{get:function(){Wc=!0}}),window.addEventListener("test",po,po),window.removeEventListener("test",po,po)}catch{Wc=!1}var ja=null,qc=null,Pl=null;function sm(){if(Pl)return Pl;var t,n=qc,r=n.length,o,f="value"in ja?ja.value:ja.textContent,d=f.length;for(t=0;t<r&&n[t]===f[t];t++);var E=r-t;for(o=1;o<=E&&n[r-o]===f[d-o];o++);return Pl=f.slice(t,1<o?1-o:void 0)}function Fl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function zl(){return!0}function om(){return!1}function ni(t){function n(r,o,f,d,E){this._reactName=r,this._targetInst=f,this.type=o,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(r=t[C],this[C]=r?r(d):d[C]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?zl:om,this.isPropagationStopped=om,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=zl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=zl)},persist:function(){},isPersistent:zl}),n}var Dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Il=ni(Dr),mo=v({},Dr,{view:0,detail:0}),Hy=ni(mo),Yc,jc,go,Bl=v({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==go&&(go&&t.type==="mousemove"?(Yc=t.screenX-go.screenX,jc=t.screenY-go.screenY):jc=Yc=0,go=t),Yc)},movementY:function(t){return"movementY"in t?t.movementY:jc}}),lm=ni(Bl),Gy=v({},Bl,{dataTransfer:0}),Vy=ni(Gy),ky=v({},mo,{relatedTarget:0}),Zc=ni(ky),Xy=v({},Dr,{animationName:0,elapsedTime:0,pseudoElement:0}),Wy=ni(Xy),qy=v({},Dr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Yy=ni(qy),jy=v({},Dr,{data:0}),um=ni(jy),Zy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ky={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jy(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Qy[t])?!!n[t]:!1}function Kc(){return Jy}var $y=v({},mo,{key:function(t){if(t.key){var n=Zy[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ky[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kc,charCode:function(t){return t.type==="keypress"?Fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),eS=ni($y),tS=v({},Bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cm=ni(tS),nS=v({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kc}),iS=ni(nS),aS=v({},Dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),rS=ni(aS),sS=v({},Bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),oS=ni(sS),lS=v({},Dr,{newState:0,oldState:0}),uS=ni(lS),cS=[9,13,27,32],Qc=va&&"CompositionEvent"in window,vo=null;va&&"documentMode"in document&&(vo=document.documentMode);var fS=va&&"TextEvent"in window&&!vo,fm=va&&(!Qc||vo&&8<vo&&11>=vo),dm=" ",hm=!1;function pm(t,n){switch(t){case"keyup":return cS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cs=!1;function dS(t,n){switch(t){case"compositionend":return mm(n);case"keypress":return n.which!==32?null:(hm=!0,dm);case"textInput":return t=n.data,t===dm&&hm?null:t;default:return null}}function hS(t,n){if(cs)return t==="compositionend"||!Qc&&pm(t,n)?(t=sm(),Pl=qc=ja=null,cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return fm&&n.locale!=="ko"?null:n.data;default:return null}}var pS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!pS[t.type]:n==="textarea"}function vm(t,n,r,o){ls?us?us.push(o):us=[o]:ls=o,n=Cu(n,"onChange"),0<n.length&&(r=new Il("onChange","change",null,r,o),t.push({event:r,listeners:n}))}var _o=null,xo=null;function mS(t){$v(t,0)}function Hl(t){var n=zt(t);if(Sn(n))return t}function _m(t,n){if(t==="change")return n}var xm=!1;if(va){var Jc;if(va){var $c="oninput"in document;if(!$c){var ym=document.createElement("div");ym.setAttribute("oninput","return;"),$c=typeof ym.oninput=="function"}Jc=$c}else Jc=!1;xm=Jc&&(!document.documentMode||9<document.documentMode)}function Sm(){_o&&(_o.detachEvent("onpropertychange",Mm),xo=_o=null)}function Mm(t){if(t.propertyName==="value"&&Hl(xo)){var n=[];vm(n,xo,t,kc(t)),rm(mS,n)}}function gS(t,n,r){t==="focusin"?(Sm(),_o=n,xo=r,_o.attachEvent("onpropertychange",Mm)):t==="focusout"&&Sm()}function vS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(xo)}function _S(t,n){if(t==="click")return Hl(n)}function xS(t,n){if(t==="input"||t==="change")return Hl(n)}function yS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var hi=typeof Object.is=="function"?Object.is:yS;function yo(t,n){if(hi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var r=Object.keys(t),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var f=r[o];if(!tn.call(n,f)||!hi(t[f],n[f]))return!1}return!0}function Em(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bm(t,n){var r=Em(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=n&&o>=n)return{node:r,offset:n-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Em(r)}}function Tm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Tm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Am(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=at(t.document);n instanceof t.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)t=n.contentWindow;else break;n=at(t.document)}return n}function ef(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var SS=va&&"documentMode"in document&&11>=document.documentMode,fs=null,tf=null,So=null,nf=!1;function Rm(t,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;nf||fs==null||fs!==at(o)||(o=fs,"selectionStart"in o&&ef(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),So&&yo(So,o)||(So=o,o=Cu(tf,"onSelect"),0<o.length&&(n=new Il("onSelect","select",null,n,r),t.push({event:n,listeners:o}),n.target=fs)))}function Ur(t,n){var r={};return r[t.toLowerCase()]=n.toLowerCase(),r["Webkit"+t]="webkit"+n,r["Moz"+t]="moz"+n,r}var ds={animationend:Ur("Animation","AnimationEnd"),animationiteration:Ur("Animation","AnimationIteration"),animationstart:Ur("Animation","AnimationStart"),transitionrun:Ur("Transition","TransitionRun"),transitionstart:Ur("Transition","TransitionStart"),transitioncancel:Ur("Transition","TransitionCancel"),transitionend:Ur("Transition","TransitionEnd")},af={},Cm={};va&&(Cm=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function Lr(t){if(af[t])return af[t];if(!ds[t])return t;var n=ds[t],r;for(r in n)if(n.hasOwnProperty(r)&&r in Cm)return af[t]=n[r];return t}var wm=Lr("animationend"),Dm=Lr("animationiteration"),Um=Lr("animationstart"),MS=Lr("transitionrun"),ES=Lr("transitionstart"),bS=Lr("transitioncancel"),Lm=Lr("transitionend"),Nm=new Map,rf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");rf.push("scrollEnd");function Vi(t,n){Nm.set(t,n),te(n,[t])}var Gl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},bi=[],hs=0,sf=0;function Vl(){for(var t=hs,n=sf=hs=0;n<t;){var r=bi[n];bi[n++]=null;var o=bi[n];bi[n++]=null;var f=bi[n];bi[n++]=null;var d=bi[n];if(bi[n++]=null,o!==null&&f!==null){var E=o.pending;E===null?f.next=f:(f.next=E.next,E.next=f),o.pending=f}d!==0&&Om(r,f,d)}}function kl(t,n,r,o){bi[hs++]=t,bi[hs++]=n,bi[hs++]=r,bi[hs++]=o,sf|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function of(t,n,r,o){return kl(t,n,r,o),Xl(t)}function Nr(t,n){return kl(t,null,null,n),Xl(t)}function Om(t,n,r){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r);for(var f=!1,d=t.return;d!==null;)d.childLanes|=r,o=d.alternate,o!==null&&(o.childLanes|=r),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(f=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,f&&n!==null&&(f=31-Ve(r),t=d.hiddenUpdates,o=t[f],o===null?t[f]=[n]:o.push(n),n.lane=r|536870912),d):null}function Xl(t){if(50<ko)throw ko=0,gd=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ps={};function TS(t,n,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(t,n,r,o){return new TS(t,n,r,o)}function lf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _a(t,n){var r=t.alternate;return r===null?(r=pi(t.tag,n,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=n,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,n=t.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function Pm(t,n){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,n=r.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Wl(t,n,r,o,f,d){var E=0;if(o=t,typeof t=="function")lf(t)&&(E=1);else if(typeof t=="string")E=DM(t,r,Re.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=pi(31,r,n,f),t.elementType=D,t.lanes=d,t;case A:return Or(r.children,f,d,n);case y:E=8,f|=24;break;case M:return t=pi(12,r,n,f|2),t.elementType=M,t.lanes=d,t;case H:return t=pi(13,r,n,f),t.elementType=H,t.lanes=d,t;case B:return t=pi(19,r,n,f),t.elementType=B,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:E=10;break e;case w:E=9;break e;case N:E=11;break e;case z:E=14;break e;case b:E=16,o=null;break e}E=29,r=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=pi(E,r,n,f),n.elementType=t,n.type=o,n.lanes=d,n}function Or(t,n,r,o){return t=pi(7,t,o,n),t.lanes=r,t}function uf(t,n,r){return t=pi(6,t,null,n),t.lanes=r,t}function Fm(t){var n=pi(18,null,null,0);return n.stateNode=t,n}function cf(t,n,r){return n=pi(4,t.children!==null?t.children:[],t.key,n),n.lanes=r,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var zm=new WeakMap;function Ti(t,n){if(typeof t=="object"&&t!==null){var r=zm.get(t);return r!==void 0?r:(n={value:t,source:n,stack:X(n)},zm.set(t,n),n)}return{value:t,source:n,stack:X(n)}}var ms=[],gs=0,ql=null,Mo=0,Ai=[],Ri=0,Za=null,na=1,ia="";function xa(t,n){ms[gs++]=Mo,ms[gs++]=ql,ql=t,Mo=n}function Im(t,n,r){Ai[Ri++]=na,Ai[Ri++]=ia,Ai[Ri++]=Za,Za=t;var o=na;t=ia;var f=32-Ve(o)-1;o&=~(1<<f),r+=1;var d=32-Ve(n)+f;if(30<d){var E=f-f%5;d=(o&(1<<E)-1).toString(32),o>>=E,f-=E,na=1<<32-Ve(n)+f|r<<f|o,ia=d+t}else na=1<<d|r<<f|o,ia=t}function ff(t){t.return!==null&&(xa(t,1),Im(t,1,0))}function df(t){for(;t===ql;)ql=ms[--gs],ms[gs]=null,Mo=ms[--gs],ms[gs]=null;for(;t===Za;)Za=Ai[--Ri],Ai[Ri]=null,ia=Ai[--Ri],Ai[Ri]=null,na=Ai[--Ri],Ai[Ri]=null}function Bm(t,n){Ai[Ri++]=na,Ai[Ri++]=ia,Ai[Ri++]=Za,na=n.id,ia=n.overflow,Za=t}var Hn=null,pn=null,kt=!1,Ka=null,Ci=!1,hf=Error(s(519));function Qa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Eo(Ti(n,t)),hf}function Hm(t){var n=t.stateNode,r=t.type,o=t.memoizedProps;switch(n[Fe]=t,n[Xe]=o,r){case"dialog":Pt("cancel",n),Pt("close",n);break;case"iframe":case"object":case"embed":Pt("load",n);break;case"video":case"audio":for(r=0;r<Wo.length;r++)Pt(Wo[r],n);break;case"source":Pt("error",n);break;case"img":case"image":case"link":Pt("error",n),Pt("load",n);break;case"details":Pt("toggle",n);break;case"input":Pt("invalid",n),fi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Pt("invalid",n);break;case"textarea":Pt("invalid",n),Rn(n,o.value,o.defaultValue,o.children)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||i0(n.textContent,r)?(o.popover!=null&&(Pt("beforetoggle",n),Pt("toggle",n)),o.onScroll!=null&&Pt("scroll",n),o.onScrollEnd!=null&&Pt("scrollend",n),o.onClick!=null&&(n.onclick=ga),n=!0):n=!1,n||Qa(t,!0)}function Gm(t){for(Hn=t.return;Hn;)switch(Hn.tag){case 5:case 31:case 13:Ci=!1;return;case 27:case 3:Ci=!0;return;default:Hn=Hn.return}}function vs(t){if(t!==Hn)return!1;if(!kt)return Gm(t),kt=!0,!1;var n=t.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||Ud(t.type,t.memoizedProps)),r=!r),r&&pn&&Qa(t),Gm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));pn=d0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));pn=d0(t)}else n===27?(n=pn,fr(t.type)?(t=Fd,Fd=null,pn=t):pn=n):pn=Hn?Di(t.stateNode.nextSibling):null;return!0}function Pr(){pn=Hn=null,kt=!1}function pf(){var t=Ka;return t!==null&&(si===null?si=t:si.push.apply(si,t),Ka=null),t}function Eo(t){Ka===null?Ka=[t]:Ka.push(t)}var mf=P(null),Fr=null,ya=null;function Ja(t,n,r){xe(mf,n._currentValue),n._currentValue=r}function Sa(t){t._currentValue=mf.current,Y(mf)}function gf(t,n,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===r)break;t=t.return}}function vf(t,n,r,o){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var d=f.dependencies;if(d!==null){var E=f.child;d=d.firstContext;e:for(;d!==null;){var C=d;d=f;for(var k=0;k<n.length;k++)if(C.context===n[k]){d.lanes|=r,C=d.alternate,C!==null&&(C.lanes|=r),gf(d.return,r,t),o||(E=null);break e}d=C.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(s(341));E.lanes|=r,d=E.alternate,d!==null&&(d.lanes|=r),gf(E,r,t),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===t){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function _s(t,n,r,o){t=null;for(var f=n,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var C=f.type;hi(f.pendingProps.value,E.value)||(t!==null?t.push(C):t=[C])}}else if(f===Se.current){if(E=f.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Ko):t=[Ko])}f=f.return}t!==null&&vf(n,t,r,o),n.flags|=262144}function Yl(t){for(t=t.firstContext;t!==null;){if(!hi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function zr(t){Fr=t,ya=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Gn(t){return Vm(Fr,t)}function jl(t,n){return Fr===null&&zr(t),Vm(t,n)}function Vm(t,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},ya===null){if(t===null)throw Error(s(308));ya=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ya=ya.next=n;return r}var AS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(r,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(r){return r()})}},RS=a.unstable_scheduleCallback,CS=a.unstable_NormalPriority,wn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _f(){return{controller:new AS,data:new Map,refCount:0}}function bo(t){t.refCount--,t.refCount===0&&RS(CS,function(){t.controller.abort()})}var To=null,xf=0,xs=0,ys=null;function wS(t,n){if(To===null){var r=To=[];xf=0,xs=Md(),ys={status:"pending",value:void 0,then:function(o){r.push(o)}}}return xf++,n.then(km,km),n}function km(){if(--xf===0&&To!==null){ys!==null&&(ys.status="fulfilled");var t=To;To=null,xs=0,ys=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function DS(t,n){var r=[],o={status:"pending",value:null,reason:null,then:function(f){r.push(f)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var f=0;f<r.length;f++)(0,r[f])(n)},function(f){for(o.status="rejected",o.reason=f,f=0;f<r.length;f++)(0,r[f])(void 0)}),o}var Xm=O.S;O.S=function(t,n){Rv=x(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&wS(t,n),Xm!==null&&Xm(t,n)};var Ir=P(null);function yf(){var t=Ir.current;return t!==null?t:dn.pooledCache}function Zl(t,n){n===null?xe(Ir,Ir.current):xe(Ir,n.pool)}function Wm(){var t=yf();return t===null?null:{parent:wn._currentValue,pool:t}}var Ss=Error(s(460)),Sf=Error(s(474)),Kl=Error(s(542)),Ql={then:function(){}};function qm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ym(t,n,r){switch(r=t[r],r===void 0?t.push(n):r!==n&&(n.then(ga,ga),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Zm(t),t;default:if(typeof n.status=="string")n.then(ga,ga);else{if(t=dn,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=o}},function(o){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Zm(t),t}throw Hr=n,Ss}}function Br(t){try{var n=t._init;return n(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Hr=r,Ss):r}}var Hr=null;function jm(){if(Hr===null)throw Error(s(459));var t=Hr;return Hr=null,t}function Zm(t){if(t===Ss||t===Kl)throw Error(s(483))}var Ms=null,Ao=0;function Jl(t){var n=Ao;return Ao+=1,Ms===null&&(Ms=[]),Ym(Ms,t,n)}function Ro(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function $l(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Km(t){function n($,q){if(t){var le=$.deletions;le===null?($.deletions=[q],$.flags|=16):le.push(q)}}function r($,q){if(!t)return null;for(;q!==null;)n($,q),q=q.sibling;return null}function o($){for(var q=new Map;$!==null;)$.key!==null?q.set($.key,$):q.set($.index,$),$=$.sibling;return q}function f($,q){return $=_a($,q),$.index=0,$.sibling=null,$}function d($,q,le){return $.index=le,t?(le=$.alternate,le!==null?(le=le.index,le<q?($.flags|=67108866,q):le):($.flags|=67108866,q)):($.flags|=1048576,q)}function E($){return t&&$.alternate===null&&($.flags|=67108866),$}function C($,q,le,Me){return q===null||q.tag!==6?(q=uf(le,$.mode,Me),q.return=$,q):(q=f(q,le),q.return=$,q)}function k($,q,le,Me){var ht=le.type;return ht===A?ye($,q,le.props.children,Me,le.key):q!==null&&(q.elementType===ht||typeof ht=="object"&&ht!==null&&ht.$$typeof===b&&Br(ht)===q.type)?(q=f(q,le.props),Ro(q,le),q.return=$,q):(q=Wl(le.type,le.key,le.props,null,$.mode,Me),Ro(q,le),q.return=$,q)}function ue($,q,le,Me){return q===null||q.tag!==4||q.stateNode.containerInfo!==le.containerInfo||q.stateNode.implementation!==le.implementation?(q=cf(le,$.mode,Me),q.return=$,q):(q=f(q,le.children||[]),q.return=$,q)}function ye($,q,le,Me,ht){return q===null||q.tag!==7?(q=Or(le,$.mode,Me,ht),q.return=$,q):(q=f(q,le),q.return=$,q)}function Ee($,q,le){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=uf(""+q,$.mode,le),q.return=$,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case S:return le=Wl(q.type,q.key,q.props,null,$.mode,le),Ro(le,q),le.return=$,le;case T:return q=cf(q,$.mode,le),q.return=$,q;case b:return q=Br(q),Ee($,q,le)}if(Z(q)||K(q))return q=Or(q,$.mode,le,null),q.return=$,q;if(typeof q.then=="function")return Ee($,Jl(q),le);if(q.$$typeof===U)return Ee($,jl($,q),le);$l($,q)}return null}function de($,q,le,Me){var ht=q!==null?q.key:null;if(typeof le=="string"&&le!==""||typeof le=="number"||typeof le=="bigint")return ht!==null?null:C($,q,""+le,Me);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case S:return le.key===ht?k($,q,le,Me):null;case T:return le.key===ht?ue($,q,le,Me):null;case b:return le=Br(le),de($,q,le,Me)}if(Z(le)||K(le))return ht!==null?null:ye($,q,le,Me,null);if(typeof le.then=="function")return de($,q,Jl(le),Me);if(le.$$typeof===U)return de($,q,jl($,le),Me);$l($,le)}return null}function ve($,q,le,Me,ht){if(typeof Me=="string"&&Me!==""||typeof Me=="number"||typeof Me=="bigint")return $=$.get(le)||null,C(q,$,""+Me,ht);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case S:return $=$.get(Me.key===null?le:Me.key)||null,k(q,$,Me,ht);case T:return $=$.get(Me.key===null?le:Me.key)||null,ue(q,$,Me,ht);case b:return Me=Br(Me),ve($,q,le,Me,ht)}if(Z(Me)||K(Me))return $=$.get(le)||null,ye(q,$,Me,ht,null);if(typeof Me.then=="function")return ve($,q,le,Jl(Me),ht);if(Me.$$typeof===U)return ve($,q,le,jl(q,Me),ht);$l(q,Me)}return null}function nt($,q,le,Me){for(var ht=null,Zt=null,st=q,Rt=q=0,Bt=null;st!==null&&Rt<le.length;Rt++){st.index>Rt?(Bt=st,st=null):Bt=st.sibling;var Kt=de($,st,le[Rt],Me);if(Kt===null){st===null&&(st=Bt);break}t&&st&&Kt.alternate===null&&n($,st),q=d(Kt,q,Rt),Zt===null?ht=Kt:Zt.sibling=Kt,Zt=Kt,st=Bt}if(Rt===le.length)return r($,st),kt&&xa($,Rt),ht;if(st===null){for(;Rt<le.length;Rt++)st=Ee($,le[Rt],Me),st!==null&&(q=d(st,q,Rt),Zt===null?ht=st:Zt.sibling=st,Zt=st);return kt&&xa($,Rt),ht}for(st=o(st);Rt<le.length;Rt++)Bt=ve(st,$,Rt,le[Rt],Me),Bt!==null&&(t&&Bt.alternate!==null&&st.delete(Bt.key===null?Rt:Bt.key),q=d(Bt,q,Rt),Zt===null?ht=Bt:Zt.sibling=Bt,Zt=Bt);return t&&st.forEach(function(gr){return n($,gr)}),kt&&xa($,Rt),ht}function mt($,q,le,Me){if(le==null)throw Error(s(151));for(var ht=null,Zt=null,st=q,Rt=q=0,Bt=null,Kt=le.next();st!==null&&!Kt.done;Rt++,Kt=le.next()){st.index>Rt?(Bt=st,st=null):Bt=st.sibling;var gr=de($,st,Kt.value,Me);if(gr===null){st===null&&(st=Bt);break}t&&st&&gr.alternate===null&&n($,st),q=d(gr,q,Rt),Zt===null?ht=gr:Zt.sibling=gr,Zt=gr,st=Bt}if(Kt.done)return r($,st),kt&&xa($,Rt),ht;if(st===null){for(;!Kt.done;Rt++,Kt=le.next())Kt=Ee($,Kt.value,Me),Kt!==null&&(q=d(Kt,q,Rt),Zt===null?ht=Kt:Zt.sibling=Kt,Zt=Kt);return kt&&xa($,Rt),ht}for(st=o(st);!Kt.done;Rt++,Kt=le.next())Kt=ve(st,$,Rt,Kt.value,Me),Kt!==null&&(t&&Kt.alternate!==null&&st.delete(Kt.key===null?Rt:Kt.key),q=d(Kt,q,Rt),Zt===null?ht=Kt:Zt.sibling=Kt,Zt=Kt);return t&&st.forEach(function(GM){return n($,GM)}),kt&&xa($,Rt),ht}function cn($,q,le,Me){if(typeof le=="object"&&le!==null&&le.type===A&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case S:e:{for(var ht=le.key;q!==null;){if(q.key===ht){if(ht=le.type,ht===A){if(q.tag===7){r($,q.sibling),Me=f(q,le.props.children),Me.return=$,$=Me;break e}}else if(q.elementType===ht||typeof ht=="object"&&ht!==null&&ht.$$typeof===b&&Br(ht)===q.type){r($,q.sibling),Me=f(q,le.props),Ro(Me,le),Me.return=$,$=Me;break e}r($,q);break}else n($,q);q=q.sibling}le.type===A?(Me=Or(le.props.children,$.mode,Me,le.key),Me.return=$,$=Me):(Me=Wl(le.type,le.key,le.props,null,$.mode,Me),Ro(Me,le),Me.return=$,$=Me)}return E($);case T:e:{for(ht=le.key;q!==null;){if(q.key===ht)if(q.tag===4&&q.stateNode.containerInfo===le.containerInfo&&q.stateNode.implementation===le.implementation){r($,q.sibling),Me=f(q,le.children||[]),Me.return=$,$=Me;break e}else{r($,q);break}else n($,q);q=q.sibling}Me=cf(le,$.mode,Me),Me.return=$,$=Me}return E($);case b:return le=Br(le),cn($,q,le,Me)}if(Z(le))return nt($,q,le,Me);if(K(le)){if(ht=K(le),typeof ht!="function")throw Error(s(150));return le=ht.call(le),mt($,q,le,Me)}if(typeof le.then=="function")return cn($,q,Jl(le),Me);if(le.$$typeof===U)return cn($,q,jl($,le),Me);$l($,le)}return typeof le=="string"&&le!==""||typeof le=="number"||typeof le=="bigint"?(le=""+le,q!==null&&q.tag===6?(r($,q.sibling),Me=f(q,le),Me.return=$,$=Me):(r($,q),Me=uf(le,$.mode,Me),Me.return=$,$=Me),E($)):r($,q)}return function($,q,le,Me){try{Ao=0;var ht=cn($,q,le,Me);return Ms=null,ht}catch(st){if(st===Ss||st===Kl)throw st;var Zt=pi(29,st,null,$.mode);return Zt.lanes=Me,Zt.return=$,Zt}}}var Gr=Km(!0),Qm=Km(!1),$a=!1;function Mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ef(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function er(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function tr(t,n,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Jt&2)!==0){var f=o.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),o.pending=n,n=Xl(t),Om(t,null,r),n}return kl(t,o,n,r),Xl(t)}function Co(t,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,Ya(t,r)}}function bf(t,n){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var f=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var E={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?f=d=E:d=d.next=E,r=r.next}while(r!==null);d===null?f=d=n:d=d.next=n}else f=d=n;r={baseState:o.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=n:t.next=n,r.lastBaseUpdate=n}var Tf=!1;function wo(){if(Tf){var t=ys;if(t!==null)throw t}}function Do(t,n,r,o){Tf=!1;var f=t.updateQueue;$a=!1;var d=f.firstBaseUpdate,E=f.lastBaseUpdate,C=f.shared.pending;if(C!==null){f.shared.pending=null;var k=C,ue=k.next;k.next=null,E===null?d=ue:E.next=ue,E=k;var ye=t.alternate;ye!==null&&(ye=ye.updateQueue,C=ye.lastBaseUpdate,C!==E&&(C===null?ye.firstBaseUpdate=ue:C.next=ue,ye.lastBaseUpdate=k))}if(d!==null){var Ee=f.baseState;E=0,ye=ue=k=null,C=d;do{var de=C.lane&-536870913,ve=de!==C.lane;if(ve?(It&de)===de:(o&de)===de){de!==0&&de===xs&&(Tf=!0),ye!==null&&(ye=ye.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var nt=t,mt=C;de=n;var cn=r;switch(mt.tag){case 1:if(nt=mt.payload,typeof nt=="function"){Ee=nt.call(cn,Ee,de);break e}Ee=nt;break e;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=mt.payload,de=typeof nt=="function"?nt.call(cn,Ee,de):nt,de==null)break e;Ee=v({},Ee,de);break e;case 2:$a=!0}}de=C.callback,de!==null&&(t.flags|=64,ve&&(t.flags|=8192),ve=f.callbacks,ve===null?f.callbacks=[de]:ve.push(de))}else ve={lane:de,tag:C.tag,payload:C.payload,callback:C.callback,next:null},ye===null?(ue=ye=ve,k=Ee):ye=ye.next=ve,E|=de;if(C=C.next,C===null){if(C=f.shared.pending,C===null)break;ve=C,C=ve.next,ve.next=null,f.lastBaseUpdate=ve,f.shared.pending=null}}while(!0);ye===null&&(k=Ee),f.baseState=k,f.firstBaseUpdate=ue,f.lastBaseUpdate=ye,d===null&&(f.shared.lanes=0),sr|=E,t.lanes=E,t.memoizedState=Ee}}function Jm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function $m(t,n){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)Jm(r[t],n)}var Es=P(null),eu=P(0);function eg(t,n){t=Da,xe(eu,t),xe(Es,n),Da=t|n.baseLanes}function Af(){xe(eu,Da),xe(Es,Es.current)}function Rf(){Da=eu.current,Y(Es),Y(eu)}var mi=P(null),wi=null;function nr(t){var n=t.alternate;xe(Mn,Mn.current&1),xe(mi,t),wi===null&&(n===null||Es.current!==null||n.memoizedState!==null)&&(wi=t)}function Cf(t){xe(Mn,Mn.current),xe(mi,t),wi===null&&(wi=t)}function tg(t){t.tag===22?(xe(Mn,Mn.current),xe(mi,t),wi===null&&(wi=t)):ir()}function ir(){xe(Mn,Mn.current),xe(mi,mi.current)}function gi(t){Y(mi),wi===t&&(wi=null),Y(Mn)}var Mn=P(0);function tu(t){for(var n=t;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Od(r)||Pd(r)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ma=0,At=null,ln=null,Dn=null,nu=!1,bs=!1,Vr=!1,iu=0,Uo=0,Ts=null,US=0;function _n(){throw Error(s(321))}function wf(t,n){if(n===null)return!1;for(var r=0;r<n.length&&r<t.length;r++)if(!hi(t[r],n[r]))return!1;return!0}function Df(t,n,r,o,f,d){return Ma=d,At=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?Ig:Wf,Vr=!1,d=r(o,f),Vr=!1,bs&&(d=ig(n,r,o,f)),ng(t),d}function ng(t){O.H=Oo;var n=ln!==null&&ln.next!==null;if(Ma=0,Dn=ln=At=null,nu=!1,Uo=0,Ts=null,n)throw Error(s(300));t===null||Un||(t=t.dependencies,t!==null&&Yl(t)&&(Un=!0))}function ig(t,n,r,o){At=t;var f=0;do{if(bs&&(Ts=null),Uo=0,bs=!1,25<=f)throw Error(s(301));if(f+=1,Dn=ln=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}O.H=Bg,d=n(r,o)}while(bs);return d}function LS(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?Lo(n):n,t=t.useState()[0],(ln!==null?ln.memoizedState:null)!==t&&(At.flags|=1024),n}function Uf(){var t=iu!==0;return iu=0,t}function Lf(t,n,r){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~r}function Nf(t){if(nu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}nu=!1}Ma=0,Dn=ln=At=null,bs=!1,Uo=iu=0,Ts=null}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dn===null?At.memoizedState=Dn=t:Dn=Dn.next=t,Dn}function En(){if(ln===null){var t=At.alternate;t=t!==null?t.memoizedState:null}else t=ln.next;var n=Dn===null?At.memoizedState:Dn.next;if(n!==null)Dn=n,ln=t;else{if(t===null)throw At.alternate===null?Error(s(467)):Error(s(310));ln=t,t={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},Dn===null?At.memoizedState=Dn=t:Dn=Dn.next=t}return Dn}function au(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(t){var n=Uo;return Uo+=1,Ts===null&&(Ts=[]),t=Ym(Ts,t,n),n=At,(Dn===null?n.memoizedState:Dn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Ig:Wf),t}function ru(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Lo(t);if(t.$$typeof===U)return Gn(t)}throw Error(s(438,String(t)))}function Of(t){var n=null,r=At.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=At.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=au(),At.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(t),o=0;o<t;o++)r[o]=re;return n.index++,r}function Ea(t,n){return typeof n=="function"?n(t):n}function su(t){var n=En();return Pf(n,ln,t)}function Pf(t,n,r){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=r;var f=t.baseQueue,d=o.pending;if(d!==null){if(f!==null){var E=f.next;f.next=d.next,d.next=E}n.baseQueue=f=d,o.pending=null}if(d=t.baseState,f===null)t.memoizedState=d;else{n=f.next;var C=E=null,k=null,ue=n,ye=!1;do{var Ee=ue.lane&-536870913;if(Ee!==ue.lane?(It&Ee)===Ee:(Ma&Ee)===Ee){var de=ue.revertLane;if(de===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),Ee===xs&&(ye=!0);else if((Ma&de)===de){ue=ue.next,de===xs&&(ye=!0);continue}else Ee={lane:0,revertLane:ue.revertLane,gesture:null,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null},k===null?(C=k=Ee,E=d):k=k.next=Ee,At.lanes|=de,sr|=de;Ee=ue.action,Vr&&r(d,Ee),d=ue.hasEagerState?ue.eagerState:r(d,Ee)}else de={lane:Ee,revertLane:ue.revertLane,gesture:ue.gesture,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null},k===null?(C=k=de,E=d):k=k.next=de,At.lanes|=Ee,sr|=Ee;ue=ue.next}while(ue!==null&&ue!==n);if(k===null?E=d:k.next=C,!hi(d,t.memoizedState)&&(Un=!0,ye&&(r=ys,r!==null)))throw r;t.memoizedState=d,t.baseState=E,t.baseQueue=k,o.lastRenderedState=d}return f===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Ff(t){var n=En(),r=n.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=t;var o=r.dispatch,f=r.pending,d=n.memoizedState;if(f!==null){r.pending=null;var E=f=f.next;do d=t(d,E.action),E=E.next;while(E!==f);hi(d,n.memoizedState)||(Un=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),r.lastRenderedState=d}return[d,o]}function ag(t,n,r){var o=At,f=En(),d=kt;if(d){if(r===void 0)throw Error(s(407));r=r()}else r=n();var E=!hi((ln||f).memoizedState,r);if(E&&(f.memoizedState=r,Un=!0),f=f.queue,Bf(og.bind(null,o,f,t),[t]),f.getSnapshot!==n||E||Dn!==null&&Dn.memoizedState.tag&1){if(o.flags|=2048,As(9,{destroy:void 0},sg.bind(null,o,f,r,n),null),dn===null)throw Error(s(349));d||(Ma&127)!==0||rg(o,n,r)}return r}function rg(t,n,r){t.flags|=16384,t={getSnapshot:n,value:r},n=At.updateQueue,n===null?(n=au(),At.updateQueue=n,n.stores=[t]):(r=n.stores,r===null?n.stores=[t]:r.push(t))}function sg(t,n,r,o){n.value=r,n.getSnapshot=o,lg(n)&&ug(t)}function og(t,n,r){return r(function(){lg(n)&&ug(t)})}function lg(t){var n=t.getSnapshot;t=t.value;try{var r=n();return!hi(t,r)}catch{return!0}}function ug(t){var n=Nr(t,2);n!==null&&oi(n,t,2)}function zf(t){var n=Jn();if(typeof t=="function"){var r=t;if(t=r(),Vr){He(!0);try{r()}finally{He(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},n}function cg(t,n,r,o){return t.baseState=r,Pf(t,ln,typeof o=="function"?o:Ea)}function NS(t,n,r,o,f){if(uu(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){d.listeners.push(E)}};O.T!==null?r(!0):d.isTransition=!1,o(d),r=n.pending,r===null?(d.next=n.pending=d,fg(n,d)):(d.next=r.next,n.pending=r.next=d)}}function fg(t,n){var r=n.action,o=n.payload,f=t.state;if(n.isTransition){var d=O.T,E={};O.T=E;try{var C=r(f,o),k=O.S;k!==null&&k(E,C),dg(t,n,C)}catch(ue){If(t,n,ue)}finally{d!==null&&E.types!==null&&(d.types=E.types),O.T=d}}else try{d=r(f,o),dg(t,n,d)}catch(ue){If(t,n,ue)}}function dg(t,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){hg(t,n,o)},function(o){return If(t,n,o)}):hg(t,n,r)}function hg(t,n,r){n.status="fulfilled",n.value=r,pg(n),t.state=r,n=t.pending,n!==null&&(r=n.next,r===n?t.pending=null:(r=r.next,n.next=r,fg(t,r)))}function If(t,n,r){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,pg(n),n=n.next;while(n!==o)}t.action=null}function pg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function mg(t,n){return n}function gg(t,n){if(kt){var r=dn.formState;if(r!==null){e:{var o=At;if(kt){if(pn){t:{for(var f=pn,d=Ci;f.nodeType!==8;){if(!d){f=null;break t}if(f=Di(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){pn=Di(f.nextSibling),o=f.data==="F!";break e}}Qa(o)}o=!1}o&&(n=r[0])}}return r=Jn(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mg,lastRenderedState:n},r.queue=o,r=Pg.bind(null,At,o),o.dispatch=r,o=zf(!1),d=Xf.bind(null,At,!1,o.queue),o=Jn(),f={state:n,dispatch:null,action:t,pending:null},o.queue=f,r=NS.bind(null,At,f,d,r),f.dispatch=r,o.memoizedState=t,[n,r,!1]}function vg(t){var n=En();return _g(n,ln,t)}function _g(t,n,r){if(n=Pf(t,n,mg)[0],t=su(Ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Lo(n)}catch(E){throw E===Ss?Kl:E}else o=n;n=En();var f=n.queue,d=f.dispatch;return r!==n.memoizedState&&(At.flags|=2048,As(9,{destroy:void 0},OS.bind(null,f,r),null)),[o,d,t]}function OS(t,n){t.action=n}function xg(t){var n=En(),r=ln;if(r!==null)return _g(n,r,t);En(),n=n.memoizedState,r=En();var o=r.queue.dispatch;return r.memoizedState=t,[n,o,!1]}function As(t,n,r,o){return t={tag:t,create:r,deps:o,inst:n,next:null},n=At.updateQueue,n===null&&(n=au(),At.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,n.lastEffect=t),t}function yg(){return En().memoizedState}function ou(t,n,r,o){var f=Jn();At.flags|=t,f.memoizedState=As(1|n,{destroy:void 0},r,o===void 0?null:o)}function lu(t,n,r,o){var f=En();o=o===void 0?null:o;var d=f.memoizedState.inst;ln!==null&&o!==null&&wf(o,ln.memoizedState.deps)?f.memoizedState=As(n,d,r,o):(At.flags|=t,f.memoizedState=As(1|n,d,r,o))}function Sg(t,n){ou(8390656,8,t,n)}function Bf(t,n){lu(2048,8,t,n)}function PS(t){At.flags|=4;var n=At.updateQueue;if(n===null)n=au(),At.updateQueue=n,n.events=[t];else{var r=n.events;r===null?n.events=[t]:r.push(t)}}function Mg(t){var n=En().memoizedState;return PS({ref:n,nextImpl:t}),function(){if((Jt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Eg(t,n){return lu(4,2,t,n)}function bg(t,n){return lu(4,4,t,n)}function Tg(t,n){if(typeof n=="function"){t=t();var r=n(t);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Ag(t,n,r){r=r!=null?r.concat([t]):null,lu(4,4,Tg.bind(null,n,t),r)}function Hf(){}function Rg(t,n){var r=En();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&wf(n,o[1])?o[0]:(r.memoizedState=[t,n],t)}function Cg(t,n){var r=En();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&wf(n,o[1]))return o[0];if(o=t(),Vr){He(!0);try{t()}finally{He(!1)}}return r.memoizedState=[o,n],o}function Gf(t,n,r){return r===void 0||(Ma&1073741824)!==0&&(It&261930)===0?t.memoizedState=n:(t.memoizedState=r,t=wv(),At.lanes|=t,sr|=t,r)}function wg(t,n,r,o){return hi(r,n)?r:Es.current!==null?(t=Gf(t,r,o),hi(t,n)||(Un=!0),t):(Ma&42)===0||(Ma&1073741824)!==0&&(It&261930)===0?(Un=!0,t.memoizedState=r):(t=wv(),At.lanes|=t,sr|=t,n)}function Dg(t,n,r,o,f){var d=I.p;I.p=d!==0&&8>d?d:8;var E=O.T,C={};O.T=C,Xf(t,!1,n,r);try{var k=f(),ue=O.S;if(ue!==null&&ue(C,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var ye=DS(k,o);No(t,n,ye,xi(t))}else No(t,n,o,xi(t))}catch(Ee){No(t,n,{then:function(){},status:"rejected",reason:Ee},xi())}finally{I.p=d,E!==null&&C.types!==null&&(E.types=C.types),O.T=E}}function FS(){}function Vf(t,n,r,o){if(t.tag!==5)throw Error(s(476));var f=Ug(t).queue;Dg(t,f,n,oe,r===null?FS:function(){return Lg(t),r(o)})}function Ug(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:oe},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:r},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Lg(t){var n=Ug(t);n.next===null&&(n=t.alternate.memoizedState),No(t,n.next.queue,{},xi())}function kf(){return Gn(Ko)}function Ng(){return En().memoizedState}function Og(){return En().memoizedState}function zS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var r=xi();t=er(r);var o=tr(n,t,r);o!==null&&(oi(o,n,r),Co(o,n,r)),n={cache:_f()},t.payload=n;return}n=n.return}}function IS(t,n,r){var o=xi();r={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},uu(t)?Fg(n,r):(r=of(t,n,r,o),r!==null&&(oi(r,t,o),zg(r,n,o)))}function Pg(t,n,r){var o=xi();No(t,n,r,o)}function No(t,n,r,o){var f={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(uu(t))Fg(n,f);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var E=n.lastRenderedState,C=d(E,r);if(f.hasEagerState=!0,f.eagerState=C,hi(C,E))return kl(t,n,f,0),dn===null&&Vl(),!1}catch{}if(r=of(t,n,f,o),r!==null)return oi(r,t,o),zg(r,n,o),!0}return!1}function Xf(t,n,r,o){if(o={lane:2,revertLane:Md(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},uu(t)){if(n)throw Error(s(479))}else n=of(t,r,o,2),n!==null&&oi(n,t,2)}function uu(t){var n=t.alternate;return t===At||n!==null&&n===At}function Fg(t,n){bs=nu=!0;var r=t.pending;r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n}function zg(t,n,r){if((r&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,Ya(t,r)}}var Oo={readContext:Gn,use:ru,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useLayoutEffect:_n,useInsertionEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useSyncExternalStore:_n,useId:_n,useHostTransitionStatus:_n,useFormState:_n,useActionState:_n,useOptimistic:_n,useMemoCache:_n,useCacheRefresh:_n};Oo.useEffectEvent=_n;var Ig={readContext:Gn,use:ru,useCallback:function(t,n){return Jn().memoizedState=[t,n===void 0?null:n],t},useContext:Gn,useEffect:Sg,useImperativeHandle:function(t,n,r){r=r!=null?r.concat([t]):null,ou(4194308,4,Tg.bind(null,n,t),r)},useLayoutEffect:function(t,n){return ou(4194308,4,t,n)},useInsertionEffect:function(t,n){ou(4,2,t,n)},useMemo:function(t,n){var r=Jn();n=n===void 0?null:n;var o=t();if(Vr){He(!0);try{t()}finally{He(!1)}}return r.memoizedState=[o,n],o},useReducer:function(t,n,r){var o=Jn();if(r!==void 0){var f=r(n);if(Vr){He(!0);try{r(n)}finally{He(!1)}}}else f=n;return o.memoizedState=o.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},o.queue=t,t=t.dispatch=IS.bind(null,At,t),[o.memoizedState,t]},useRef:function(t){var n=Jn();return t={current:t},n.memoizedState=t},useState:function(t){t=zf(t);var n=t.queue,r=Pg.bind(null,At,n);return n.dispatch=r,[t.memoizedState,r]},useDebugValue:Hf,useDeferredValue:function(t,n){var r=Jn();return Gf(r,t,n)},useTransition:function(){var t=zf(!1);return t=Dg.bind(null,At,t.queue,!0,!1),Jn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,r){var o=At,f=Jn();if(kt){if(r===void 0)throw Error(s(407));r=r()}else{if(r=n(),dn===null)throw Error(s(349));(It&127)!==0||rg(o,n,r)}f.memoizedState=r;var d={value:r,getSnapshot:n};return f.queue=d,Sg(og.bind(null,o,d,t),[t]),o.flags|=2048,As(9,{destroy:void 0},sg.bind(null,o,d,r,n),null),r},useId:function(){var t=Jn(),n=dn.identifierPrefix;if(kt){var r=ia,o=na;r=(o&~(1<<32-Ve(o)-1)).toString(32)+r,n="_"+n+"R_"+r,r=iu++,0<r&&(n+="H"+r.toString(32)),n+="_"}else r=US++,n="_"+n+"r_"+r.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:kf,useFormState:gg,useActionState:gg,useOptimistic:function(t){var n=Jn();n.memoizedState=n.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=Xf.bind(null,At,!0,r),r.dispatch=n,[t,n]},useMemoCache:Of,useCacheRefresh:function(){return Jn().memoizedState=zS.bind(null,At)},useEffectEvent:function(t){var n=Jn(),r={impl:t};return n.memoizedState=r,function(){if((Jt&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}},Wf={readContext:Gn,use:ru,useCallback:Rg,useContext:Gn,useEffect:Bf,useImperativeHandle:Ag,useInsertionEffect:Eg,useLayoutEffect:bg,useMemo:Cg,useReducer:su,useRef:yg,useState:function(){return su(Ea)},useDebugValue:Hf,useDeferredValue:function(t,n){var r=En();return wg(r,ln.memoizedState,t,n)},useTransition:function(){var t=su(Ea)[0],n=En().memoizedState;return[typeof t=="boolean"?t:Lo(t),n]},useSyncExternalStore:ag,useId:Ng,useHostTransitionStatus:kf,useFormState:vg,useActionState:vg,useOptimistic:function(t,n){var r=En();return cg(r,ln,t,n)},useMemoCache:Of,useCacheRefresh:Og};Wf.useEffectEvent=Mg;var Bg={readContext:Gn,use:ru,useCallback:Rg,useContext:Gn,useEffect:Bf,useImperativeHandle:Ag,useInsertionEffect:Eg,useLayoutEffect:bg,useMemo:Cg,useReducer:Ff,useRef:yg,useState:function(){return Ff(Ea)},useDebugValue:Hf,useDeferredValue:function(t,n){var r=En();return ln===null?Gf(r,t,n):wg(r,ln.memoizedState,t,n)},useTransition:function(){var t=Ff(Ea)[0],n=En().memoizedState;return[typeof t=="boolean"?t:Lo(t),n]},useSyncExternalStore:ag,useId:Ng,useHostTransitionStatus:kf,useFormState:xg,useActionState:xg,useOptimistic:function(t,n){var r=En();return ln!==null?cg(r,ln,t,n):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:Of,useCacheRefresh:Og};Bg.useEffectEvent=Mg;function qf(t,n,r,o){n=t.memoizedState,r=r(o,n),r=r==null?n:v({},n,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Yf={enqueueSetState:function(t,n,r){t=t._reactInternals;var o=xi(),f=er(o);f.payload=n,r!=null&&(f.callback=r),n=tr(t,f,o),n!==null&&(oi(n,t,o),Co(n,t,o))},enqueueReplaceState:function(t,n,r){t=t._reactInternals;var o=xi(),f=er(o);f.tag=1,f.payload=n,r!=null&&(f.callback=r),n=tr(t,f,o),n!==null&&(oi(n,t,o),Co(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var r=xi(),o=er(r);o.tag=2,n!=null&&(o.callback=n),n=tr(t,o,r),n!==null&&(oi(n,t,r),Co(n,t,r))}};function Hg(t,n,r,o,f,d,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,E):n.prototype&&n.prototype.isPureReactComponent?!yo(r,o)||!yo(f,d):!0}function Gg(t,n,r,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==t&&Yf.enqueueReplaceState(n,n.state,null)}function kr(t,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(t=t.defaultProps){r===n&&(r=v({},r));for(var f in t)r[f]===void 0&&(r[f]=t[f])}return r}function Vg(t){Gl(t)}function kg(t){console.error(t)}function Xg(t){Gl(t)}function cu(t,n){try{var r=t.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Wg(t,n,r){try{var o=t.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function jf(t,n,r){return r=er(r),r.tag=3,r.payload={element:null},r.callback=function(){cu(t,n)},r}function qg(t){return t=er(t),t.tag=3,t}function Yg(t,n,r,o){var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var d=o.value;t.payload=function(){return f(d)},t.callback=function(){Wg(n,r,o)}}var E=r.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){Wg(n,r,o),typeof f!="function"&&(or===null?or=new Set([this]):or.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function BS(t,n,r,o,f){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&_s(n,r,f,!0),r=mi.current,r!==null){switch(r.tag){case 31:case 13:return wi===null?Mu():r.alternate===null&&xn===0&&(xn=3),r.flags&=-257,r.flags|=65536,r.lanes=f,o===Ql?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),xd(t,o,f)),!1;case 22:return r.flags|=65536,o===Ql?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),xd(t,o,f)),!1}throw Error(s(435,r.tag))}return xd(t,o,f),Mu(),!1}if(kt)return n=mi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,o!==hf&&(t=Error(s(422),{cause:o}),Eo(Ti(t,r)))):(o!==hf&&(n=Error(s(423),{cause:o}),Eo(Ti(n,r))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,o=Ti(o,r),f=jf(t.stateNode,o,f),bf(t,f),xn!==4&&(xn=2)),!1;var d=Error(s(520),{cause:o});if(d=Ti(d,r),Vo===null?Vo=[d]:Vo.push(d),xn!==4&&(xn=2),n===null)return!0;o=Ti(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,t=f&-f,r.lanes|=t,t=jf(r.stateNode,o,t),bf(r,t),!1;case 1:if(n=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(or===null||!or.has(d))))return r.flags|=65536,f&=-f,r.lanes|=f,f=qg(f),Yg(f,t,r,o),bf(r,f),!1}r=r.return}while(r!==null);return!1}var Zf=Error(s(461)),Un=!1;function Vn(t,n,r,o){n.child=t===null?Qm(n,null,r,o):Gr(n,t.child,r,o)}function jg(t,n,r,o,f){r=r.render;var d=n.ref;if("ref"in o){var E={};for(var C in o)C!=="ref"&&(E[C]=o[C])}else E=o;return zr(n),o=Df(t,n,r,E,d,f),C=Uf(),t!==null&&!Un?(Lf(t,n,f),ba(t,n,f)):(kt&&C&&ff(n),n.flags|=1,Vn(t,n,o,f),n.child)}function Zg(t,n,r,o,f){if(t===null){var d=r.type;return typeof d=="function"&&!lf(d)&&d.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=d,Kg(t,n,d,o,f)):(t=Wl(r.type,null,o,n,n.mode,f),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!id(t,f)){var E=d.memoizedProps;if(r=r.compare,r=r!==null?r:yo,r(E,o)&&t.ref===n.ref)return ba(t,n,f)}return n.flags|=1,t=_a(d,o),t.ref=n.ref,t.return=n,n.child=t}function Kg(t,n,r,o,f){if(t!==null){var d=t.memoizedProps;if(yo(d,o)&&t.ref===n.ref)if(Un=!1,n.pendingProps=o=d,id(t,f))(t.flags&131072)!==0&&(Un=!0);else return n.lanes=t.lanes,ba(t,n,f)}return Kf(t,n,r,o,f)}function Qg(t,n,r,o){var f=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|r:r,t!==null){for(o=n.child=t.child,f=0;o!==null;)f=f|o.lanes|o.childLanes,o=o.sibling;o=f&~d}else o=0,n.child=null;return Jg(t,n,d,r,o)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Zl(n,d!==null?d.cachePool:null),d!==null?eg(n,d):Af(),tg(n);else return o=n.lanes=536870912,Jg(t,n,d!==null?d.baseLanes|r:r,r,o)}else d!==null?(Zl(n,d.cachePool),eg(n,d),ir(),n.memoizedState=null):(t!==null&&Zl(n,null),Af(),ir());return Vn(t,n,f,r),n.child}function Po(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Jg(t,n,r,o,f){var d=yf();return d=d===null?null:{parent:wn._currentValue,pool:d},n.memoizedState={baseLanes:r,cachePool:d},t!==null&&Zl(n,null),Af(),tg(n),t!==null&&_s(t,n,o,!0),n.childLanes=f,null}function fu(t,n){return n=hu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function $g(t,n,r){return Gr(n,t.child,null,r),t=fu(n,n.pendingProps),t.flags|=2,gi(n),n.memoizedState=null,t}function HS(t,n,r){var o=n.pendingProps,f=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(kt){if(o.mode==="hidden")return t=fu(n,o),n.lanes=536870912,Po(null,t);if(Cf(n),(t=pn)?(t=f0(t,Ci),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Za!==null?{id:na,overflow:ia}:null,retryLane:536870912,hydrationErrors:null},r=Fm(t),r.return=n,n.child=r,Hn=n,pn=null)):t=null,t===null)throw Qa(n);return n.lanes=536870912,null}return fu(n,o)}var d=t.memoizedState;if(d!==null){var E=d.dehydrated;if(Cf(n),f)if(n.flags&256)n.flags&=-257,n=$g(t,n,r);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(Un||_s(t,n,r,!1),f=(r&t.childLanes)!==0,Un||f){if(o=dn,o!==null&&(E=V(o,r),E!==0&&E!==d.retryLane))throw d.retryLane=E,Nr(t,E),oi(o,t,E),Zf;Mu(),n=$g(t,n,r)}else t=d.treeContext,pn=Di(E.nextSibling),Hn=n,kt=!0,Ka=null,Ci=!1,t!==null&&Bm(n,t),n=fu(n,o),n.flags|=4096;return n}return t=_a(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function du(t,n){var r=n.ref;if(r===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(t===null||t.ref!==r)&&(n.flags|=4194816)}}function Kf(t,n,r,o,f){return zr(n),r=Df(t,n,r,o,void 0,f),o=Uf(),t!==null&&!Un?(Lf(t,n,f),ba(t,n,f)):(kt&&o&&ff(n),n.flags|=1,Vn(t,n,r,f),n.child)}function ev(t,n,r,o,f,d){return zr(n),n.updateQueue=null,r=ig(n,o,r,f),ng(t),o=Uf(),t!==null&&!Un?(Lf(t,n,d),ba(t,n,d)):(kt&&o&&ff(n),n.flags|=1,Vn(t,n,r,d),n.child)}function tv(t,n,r,o,f){if(zr(n),n.stateNode===null){var d=ps,E=r.contextType;typeof E=="object"&&E!==null&&(d=Gn(E)),d=new r(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Yf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Mf(n),E=r.contextType,d.context=typeof E=="object"&&E!==null?Gn(E):ps,d.state=n.memoizedState,E=r.getDerivedStateFromProps,typeof E=="function"&&(qf(n,r,E,o),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(E=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),E!==d.state&&Yf.enqueueReplaceState(d,d.state,null),Do(n,o,d,f),wo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var C=n.memoizedProps,k=kr(r,C);d.props=k;var ue=d.context,ye=r.contextType;E=ps,typeof ye=="object"&&ye!==null&&(E=Gn(ye));var Ee=r.getDerivedStateFromProps;ye=typeof Ee=="function"||typeof d.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,ye||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(C||ue!==E)&&Gg(n,d,o,E),$a=!1;var de=n.memoizedState;d.state=de,Do(n,o,d,f),wo(),ue=n.memoizedState,C||de!==ue||$a?(typeof Ee=="function"&&(qf(n,r,Ee,o),ue=n.memoizedState),(k=$a||Hg(n,r,k,o,de,ue,E))?(ye||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ue),d.props=o,d.state=ue,d.context=E,o=k):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Ef(t,n),E=n.memoizedProps,ye=kr(r,E),d.props=ye,Ee=n.pendingProps,de=d.context,ue=r.contextType,k=ps,typeof ue=="object"&&ue!==null&&(k=Gn(ue)),C=r.getDerivedStateFromProps,(ue=typeof C=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E!==Ee||de!==k)&&Gg(n,d,o,k),$a=!1,de=n.memoizedState,d.state=de,Do(n,o,d,f),wo();var ve=n.memoizedState;E!==Ee||de!==ve||$a||t!==null&&t.dependencies!==null&&Yl(t.dependencies)?(typeof C=="function"&&(qf(n,r,C,o),ve=n.memoizedState),(ye=$a||Hg(n,r,ye,o,de,ve,k)||t!==null&&t.dependencies!==null&&Yl(t.dependencies))?(ue||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ve,k),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ve,k)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||E===t.memoizedProps&&de===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&de===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ve),d.props=o,d.state=ve,d.context=k,o=ye):(typeof d.componentDidUpdate!="function"||E===t.memoizedProps&&de===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&de===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,du(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Gr(n,t.child,null,f),n.child=Gr(n,null,r,f)):Vn(t,n,r,f),n.memoizedState=d.state,t=n.child):t=ba(t,n,f),t}function nv(t,n,r,o){return Pr(),n.flags|=256,Vn(t,n,r,o),n.child}var Qf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Jf(t){return{baseLanes:t,cachePool:Wm()}}function $f(t,n,r){return t=t!==null?t.childLanes&~r:0,n&&(t|=_i),t}function iv(t,n,r){var o=n.pendingProps,f=!1,d=(n.flags&128)!==0,E;if((E=d)||(E=t!==null&&t.memoizedState===null?!1:(Mn.current&2)!==0),E&&(f=!0,n.flags&=-129),E=(n.flags&32)!==0,n.flags&=-33,t===null){if(kt){if(f?nr(n):ir(),(t=pn)?(t=f0(t,Ci),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Za!==null?{id:na,overflow:ia}:null,retryLane:536870912,hydrationErrors:null},r=Fm(t),r.return=n,n.child=r,Hn=n,pn=null)):t=null,t===null)throw Qa(n);return Pd(t)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,f?(ir(),f=n.mode,C=hu({mode:"hidden",children:C},f),o=Or(o,f,r,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=Jf(r),o.childLanes=$f(t,E,r),n.memoizedState=Qf,Po(null,o)):(nr(n),ed(n,C))}var k=t.memoizedState;if(k!==null&&(C=k.dehydrated,C!==null)){if(d)n.flags&256?(nr(n),n.flags&=-257,n=td(t,n,r)):n.memoizedState!==null?(ir(),n.child=t.child,n.flags|=128,n=null):(ir(),C=o.fallback,f=n.mode,o=hu({mode:"visible",children:o.children},f),C=Or(C,f,r,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,Gr(n,t.child,null,r),o=n.child,o.memoizedState=Jf(r),o.childLanes=$f(t,E,r),n.memoizedState=Qf,n=Po(null,o));else if(nr(n),Pd(C)){if(E=C.nextSibling&&C.nextSibling.dataset,E)var ue=E.dgst;E=ue,o=Error(s(419)),o.stack="",o.digest=E,Eo({value:o,source:null,stack:null}),n=td(t,n,r)}else if(Un||_s(t,n,r,!1),E=(r&t.childLanes)!==0,Un||E){if(E=dn,E!==null&&(o=V(E,r),o!==0&&o!==k.retryLane))throw k.retryLane=o,Nr(t,o),oi(E,t,o),Zf;Od(C)||Mu(),n=td(t,n,r)}else Od(C)?(n.flags|=192,n.child=t.child,n=null):(t=k.treeContext,pn=Di(C.nextSibling),Hn=n,kt=!0,Ka=null,Ci=!1,t!==null&&Bm(n,t),n=ed(n,o.children),n.flags|=4096);return n}return f?(ir(),C=o.fallback,f=n.mode,k=t.child,ue=k.sibling,o=_a(k,{mode:"hidden",children:o.children}),o.subtreeFlags=k.subtreeFlags&65011712,ue!==null?C=_a(ue,C):(C=Or(C,f,r,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,Po(null,o),o=n.child,C=t.child.memoizedState,C===null?C=Jf(r):(f=C.cachePool,f!==null?(k=wn._currentValue,f=f.parent!==k?{parent:k,pool:k}:f):f=Wm(),C={baseLanes:C.baseLanes|r,cachePool:f}),o.memoizedState=C,o.childLanes=$f(t,E,r),n.memoizedState=Qf,Po(t.child,o)):(nr(n),r=t.child,t=r.sibling,r=_a(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,t!==null&&(E=n.deletions,E===null?(n.deletions=[t],n.flags|=16):E.push(t)),n.child=r,n.memoizedState=null,r)}function ed(t,n){return n=hu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function hu(t,n){return t=pi(22,t,null,n),t.lanes=0,t}function td(t,n,r){return Gr(n,t.child,null,r),t=ed(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function av(t,n,r){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),gf(t.return,n,r)}function nd(t,n,r,o,f,d){var E=t.memoizedState;E===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:f,treeForkCount:d}:(E.isBackwards=n,E.rendering=null,E.renderingStartTime=0,E.last=o,E.tail=r,E.tailMode=f,E.treeForkCount=d)}function rv(t,n,r){var o=n.pendingProps,f=o.revealOrder,d=o.tail;o=o.children;var E=Mn.current,C=(E&2)!==0;if(C?(E=E&1|2,n.flags|=128):E&=1,xe(Mn,E),Vn(t,n,o,r),o=kt?Mo:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&av(t,r,n);else if(t.tag===19)av(t,r,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(r=n.child,f=null;r!==null;)t=r.alternate,t!==null&&tu(t)===null&&(f=r),r=r.sibling;r=f,r===null?(f=n.child,n.child=null):(f=r.sibling,r.sibling=null),nd(n,!1,f,r,d,o);break;case"backwards":case"unstable_legacy-backwards":for(r=null,f=n.child,n.child=null;f!==null;){if(t=f.alternate,t!==null&&tu(t)===null){n.child=f;break}t=f.sibling,f.sibling=r,r=f,f=t}nd(n,!0,r,null,d,o);break;case"together":nd(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ba(t,n,r){if(t!==null&&(n.dependencies=t.dependencies),sr|=n.lanes,(r&n.childLanes)===0)if(t!==null){if(_s(t,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,r=_a(t,t.pendingProps),n.child=r,r.return=n;t.sibling!==null;)t=t.sibling,r=r.sibling=_a(t,t.pendingProps),r.return=n;r.sibling=null}return n.child}function id(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Yl(t)))}function GS(t,n,r){switch(n.tag){case 3:Te(n,n.stateNode.containerInfo),Ja(n,wn,t.memoizedState.cache),Pr();break;case 27:case 5:ut(n);break;case 4:Te(n,n.stateNode.containerInfo);break;case 10:Ja(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Cf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(nr(n),n.flags|=128,null):(r&n.child.childLanes)!==0?iv(t,n,r):(nr(n),t=ba(t,n,r),t!==null?t.sibling:null);nr(n);break;case 19:var f=(t.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(_s(t,n,r,!1),o=(r&n.childLanes)!==0),f){if(o)return rv(t,n,r);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),xe(Mn,Mn.current),o)break;return null;case 22:return n.lanes=0,Qg(t,n,r,n.pendingProps);case 24:Ja(n,wn,t.memoizedState.cache)}return ba(t,n,r)}function sv(t,n,r){if(t!==null)if(t.memoizedProps!==n.pendingProps)Un=!0;else{if(!id(t,r)&&(n.flags&128)===0)return Un=!1,GS(t,n,r);Un=(t.flags&131072)!==0}else Un=!1,kt&&(n.flags&1048576)!==0&&Im(n,Mo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Br(n.elementType),n.type=t,typeof t=="function")lf(t)?(o=kr(t,o),n.tag=1,n=tv(null,n,t,o,r)):(n.tag=0,n=Kf(null,n,t,o,r));else{if(t!=null){var f=t.$$typeof;if(f===N){n.tag=11,n=jg(null,n,t,o,r);break e}else if(f===z){n.tag=14,n=Zg(null,n,t,o,r);break e}}throw n=ee(t)||t,Error(s(306,n,""))}}return n;case 0:return Kf(t,n,n.type,n.pendingProps,r);case 1:return o=n.type,f=kr(o,n.pendingProps),tv(t,n,o,f,r);case 3:e:{if(Te(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;f=d.element,Ef(t,n),Do(n,o,null,r);var E=n.memoizedState;if(o=E.cache,Ja(n,wn,o),o!==d.cache&&vf(n,[wn],r,!0),wo(),o=E.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:E.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=nv(t,n,o,r);break e}else if(o!==f){f=Ti(Error(s(424)),n),Eo(f),n=nv(t,n,o,r);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,pn=Di(t.firstChild),Hn=n,kt=!0,Ka=null,Ci=!0,r=Qm(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Pr(),o===f){n=ba(t,n,r);break e}Vn(t,n,o,r)}n=n.child}return n;case 26:return du(t,n),t===null?(r=v0(n.type,null,n.pendingProps,null))?n.memoizedState=r:kt||(r=n.type,t=n.pendingProps,o=wu(ne.current).createElement(r),o[Fe]=n,o[Xe]=t,kn(o,r,t),W(o),n.stateNode=o):n.memoizedState=v0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ut(n),t===null&&kt&&(o=n.stateNode=p0(n.type,n.pendingProps,ne.current),Hn=n,Ci=!0,f=pn,fr(n.type)?(Fd=f,pn=Di(o.firstChild)):pn=f),Vn(t,n,n.pendingProps.children,r),du(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&kt&&((f=o=pn)&&(o=vM(o,n.type,n.pendingProps,Ci),o!==null?(n.stateNode=o,Hn=n,pn=Di(o.firstChild),Ci=!1,f=!0):f=!1),f||Qa(n)),ut(n),f=n.type,d=n.pendingProps,E=t!==null?t.memoizedProps:null,o=d.children,Ud(f,d)?o=null:E!==null&&Ud(f,E)&&(n.flags|=32),n.memoizedState!==null&&(f=Df(t,n,LS,null,null,r),Ko._currentValue=f),du(t,n),Vn(t,n,o,r),n.child;case 6:return t===null&&kt&&((t=r=pn)&&(r=_M(r,n.pendingProps,Ci),r!==null?(n.stateNode=r,Hn=n,pn=null,t=!0):t=!1),t||Qa(n)),null;case 13:return iv(t,n,r);case 4:return Te(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Gr(n,null,o,r):Vn(t,n,o,r),n.child;case 11:return jg(t,n,n.type,n.pendingProps,r);case 7:return Vn(t,n,n.pendingProps,r),n.child;case 8:return Vn(t,n,n.pendingProps.children,r),n.child;case 12:return Vn(t,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,Ja(n,n.type,o.value),Vn(t,n,o.children,r),n.child;case 9:return f=n.type._context,o=n.pendingProps.children,zr(n),f=Gn(f),o=o(f),n.flags|=1,Vn(t,n,o,r),n.child;case 14:return Zg(t,n,n.type,n.pendingProps,r);case 15:return Kg(t,n,n.type,n.pendingProps,r);case 19:return rv(t,n,r);case 31:return HS(t,n,r);case 22:return Qg(t,n,r,n.pendingProps);case 24:return zr(n),o=Gn(wn),t===null?(f=yf(),f===null&&(f=dn,d=_f(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=r),f=d),n.memoizedState={parent:o,cache:f},Mf(n),Ja(n,wn,f)):((t.lanes&r)!==0&&(Ef(t,n),Do(n,null,null,r),wo()),f=t.memoizedState,d=n.memoizedState,f.parent!==o?(f={parent:o,cache:o},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),Ja(n,wn,o)):(o=d.cache,Ja(n,wn,o),o!==f.cache&&vf(n,[wn],r,!0))),Vn(t,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ta(t){t.flags|=4}function ad(t,n,r,o,f){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(Nv())t.flags|=8192;else throw Hr=Ql,Sf}else t.flags&=-16777217}function ov(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!M0(n))if(Nv())t.flags|=8192;else throw Hr=Ql,Sf}function pu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?jt():536870912,t.lanes|=n,Ds|=n)}function Fo(t,n){if(!kt)switch(t.tailMode){case"hidden":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function mn(t){var n=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(n)for(var f=t.child;f!==null;)r|=f.lanes|f.childLanes,o|=f.subtreeFlags&65011712,o|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)r|=f.lanes|f.childLanes,o|=f.subtreeFlags,o|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=o,t.childLanes=r,n}function VS(t,n,r){var o=n.pendingProps;switch(df(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(n),null;case 1:return mn(n),null;case 3:return r=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Sa(wn),Ze(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(vs(n)?Ta(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,pf())),mn(n),null;case 26:var f=n.type,d=n.memoizedState;return t===null?(Ta(n),d!==null?(mn(n),ov(n,d)):(mn(n),ad(n,f,null,o,r))):d?d!==t.memoizedState?(Ta(n),mn(n),ov(n,d)):(mn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&Ta(n),mn(n),ad(n,f,t,o,r)),null;case 27:if(pt(n),r=ne.current,f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ta(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return mn(n),null}t=Re.current,vs(n)?Hm(n):(t=p0(f,o,r),n.stateNode=t,Ta(n))}return mn(n),null;case 5:if(pt(n),f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ta(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return mn(n),null}if(d=Re.current,vs(n))Hm(n);else{var E=wu(ne.current);switch(d){case 1:d=E.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=E.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=E.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=E.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=E.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?E.createElement("select",{is:o.is}):E.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?E.createElement(f,{is:o.is}):E.createElement(f)}}d[Fe]=n,d[Xe]=o;e:for(E=n.child;E!==null;){if(E.tag===5||E.tag===6)d.appendChild(E.stateNode);else if(E.tag!==4&&E.tag!==27&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===n)break e;for(;E.sibling===null;){if(E.return===null||E.return===n)break e;E=E.return}E.sibling.return=E.return,E=E.sibling}n.stateNode=d;e:switch(kn(d,f,o),f){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Ta(n)}}return mn(n),ad(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,r),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Ta(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ne.current,vs(n)){if(t=n.stateNode,r=n.memoizedProps,o=null,f=Hn,f!==null)switch(f.tag){case 27:case 5:o=f.memoizedProps}t[Fe]=n,t=!!(t.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||i0(t.nodeValue,r)),t||Qa(n,!0)}else t=wu(t).createTextNode(o),t[Fe]=n,n.stateNode=t}return mn(n),null;case 31:if(r=n.memoizedState,t===null||t.memoizedState!==null){if(o=vs(n),r!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Fe]=n}else Pr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;mn(n),t=!1}else r=pf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return n.flags&256?(gi(n),n):(gi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return mn(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=vs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!f)throw Error(s(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Fe]=n}else Pr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;mn(n),f=!1}else f=pf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(gi(n),n):(gi(n),null)}return gi(n),(n.flags&128)!==0?(n.lanes=r,n):(r=o!==null,t=t!==null&&t.memoizedState!==null,r&&(o=n.child,f=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(f=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==f&&(o.flags|=2048)),r!==t&&r&&(n.child.flags|=8192),pu(n,n.updateQueue),mn(n),null);case 4:return Ze(),t===null&&Ad(n.stateNode.containerInfo),mn(n),null;case 10:return Sa(n.type),mn(n),null;case 19:if(Y(Mn),o=n.memoizedState,o===null)return mn(n),null;if(f=(n.flags&128)!==0,d=o.rendering,d===null)if(f)Fo(o,!1);else{if(xn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=tu(t),d!==null){for(n.flags|=128,Fo(o,!1),t=d.updateQueue,n.updateQueue=t,pu(n,t),n.subtreeFlags=0,t=r,r=n.child;r!==null;)Pm(r,t),r=r.sibling;return xe(Mn,Mn.current&1|2),kt&&xa(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&x()>xu&&(n.flags|=128,f=!0,Fo(o,!1),n.lanes=4194304)}else{if(!f)if(t=tu(d),t!==null){if(n.flags|=128,f=!0,t=t.updateQueue,n.updateQueue=t,pu(n,t),Fo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!kt)return mn(n),null}else 2*x()-o.renderingStartTime>xu&&r!==536870912&&(n.flags|=128,f=!0,Fo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=x(),t.sibling=null,r=Mn.current,xe(Mn,f?r&1|2:r&1),kt&&xa(n,o.treeForkCount),t):(mn(n),null);case 22:case 23:return gi(n),Rf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(mn(n),n.subtreeFlags&6&&(n.flags|=8192)):mn(n),r=n.updateQueue,r!==null&&pu(n,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),t!==null&&Y(Ir),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Sa(wn),mn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function kS(t,n){switch(df(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Sa(wn),Ze(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return pt(n),null;case 31:if(n.memoizedState!==null){if(gi(n),n.alternate===null)throw Error(s(340));Pr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(gi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Pr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Y(Mn),null;case 4:return Ze(),null;case 10:return Sa(n.type),null;case 22:case 23:return gi(n),Rf(),t!==null&&Y(Ir),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Sa(wn),null;case 25:return null;default:return null}}function lv(t,n){switch(df(n),n.tag){case 3:Sa(wn),Ze();break;case 26:case 27:case 5:pt(n);break;case 4:Ze();break;case 31:n.memoizedState!==null&&gi(n);break;case 13:gi(n);break;case 19:Y(Mn);break;case 10:Sa(n.type);break;case 22:case 23:gi(n),Rf(),t!==null&&Y(Ir);break;case 24:Sa(wn)}}function zo(t,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var f=o.next;r=f;do{if((r.tag&t)===t){o=void 0;var d=r.create,E=r.inst;o=d(),E.destroy=o}r=r.next}while(r!==f)}}catch(C){sn(n,n.return,C)}}function ar(t,n,r){try{var o=n.updateQueue,f=o!==null?o.lastEffect:null;if(f!==null){var d=f.next;o=d;do{if((o.tag&t)===t){var E=o.inst,C=E.destroy;if(C!==void 0){E.destroy=void 0,f=n;var k=r,ue=C;try{ue()}catch(ye){sn(f,k,ye)}}}o=o.next}while(o!==d)}}catch(ye){sn(n,n.return,ye)}}function uv(t){var n=t.updateQueue;if(n!==null){var r=t.stateNode;try{$m(n,r)}catch(o){sn(t,t.return,o)}}}function cv(t,n,r){r.props=kr(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(o){sn(t,n,o)}}function Io(t,n){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof r=="function"?t.refCleanup=r(o):r.current=o}}catch(f){sn(t,n,f)}}function aa(t,n){var r=t.ref,o=t.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(f){sn(t,n,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(f){sn(t,n,f)}else r.current=null}function fv(t){var n=t.type,r=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(f){sn(t,t.return,f)}}function rd(t,n,r){try{var o=t.stateNode;fM(o,t.type,r,n),o[Xe]=n}catch(f){sn(t,t.return,f)}}function dv(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&fr(t.type)||t.tag===4}function sd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&fr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function od(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(t),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=ga));else if(o!==4&&(o===27&&fr(t.type)&&(r=t.stateNode,n=null),t=t.child,t!==null))for(od(t,n,r),t=t.sibling;t!==null;)od(t,n,r),t=t.sibling}function mu(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(o!==4&&(o===27&&fr(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(mu(t,n,r),t=t.sibling;t!==null;)mu(t,n,r),t=t.sibling}function hv(t){var n=t.stateNode,r=t.memoizedProps;try{for(var o=t.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);kn(n,o,r),n[Fe]=t,n[Xe]=r}catch(d){sn(t,t.return,d)}}var Aa=!1,Ln=!1,ld=!1,pv=typeof WeakSet=="function"?WeakSet:Set,In=null;function XS(t,n){if(t=t.containerInfo,wd=Fu,t=Am(t),ef(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var f=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break e}var E=0,C=-1,k=-1,ue=0,ye=0,Ee=t,de=null;t:for(;;){for(var ve;Ee!==r||f!==0&&Ee.nodeType!==3||(C=E+f),Ee!==d||o!==0&&Ee.nodeType!==3||(k=E+o),Ee.nodeType===3&&(E+=Ee.nodeValue.length),(ve=Ee.firstChild)!==null;)de=Ee,Ee=ve;for(;;){if(Ee===t)break t;if(de===r&&++ue===f&&(C=E),de===d&&++ye===o&&(k=E),(ve=Ee.nextSibling)!==null)break;Ee=de,de=Ee.parentNode}Ee=ve}r=C===-1||k===-1?null:{start:C,end:k}}else r=null}r=r||{start:0,end:0}}else r=null;for(Dd={focusedElem:t,selectionRange:r},Fu=!1,In=n;In!==null;)if(n=In,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,In=t;else for(;In!==null;){switch(n=In,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)f=t[r],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,r=n,f=d.memoizedProps,d=d.memoizedState,o=r.stateNode;try{var nt=kr(r.type,f);t=o.getSnapshotBeforeUpdate(nt,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(mt){sn(r,r.return,mt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,r=t.nodeType,r===9)Nd(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Nd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,In=t;break}In=n.return}}function mv(t,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:Ca(t,r),o&4&&zo(5,r);break;case 1:if(Ca(t,r),o&4)if(t=r.stateNode,n===null)try{t.componentDidMount()}catch(E){sn(r,r.return,E)}else{var f=kr(r.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(f,n,t.__reactInternalSnapshotBeforeUpdate)}catch(E){sn(r,r.return,E)}}o&64&&uv(r),o&512&&Io(r,r.return);break;case 3:if(Ca(t,r),o&64&&(t=r.updateQueue,t!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{$m(t,n)}catch(E){sn(r,r.return,E)}}break;case 27:n===null&&o&4&&hv(r);case 26:case 5:Ca(t,r),n===null&&o&4&&fv(r),o&512&&Io(r,r.return);break;case 12:Ca(t,r);break;case 31:Ca(t,r),o&4&&_v(t,r);break;case 13:Ca(t,r),o&4&&xv(t,r),o&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=$S.bind(null,r),xM(t,r))));break;case 22:if(o=r.memoizedState!==null||Aa,!o){n=n!==null&&n.memoizedState!==null||Ln,f=Aa;var d=Ln;Aa=o,(Ln=n)&&!d?wa(t,r,(r.subtreeFlags&8772)!==0):Ca(t,r),Aa=f,Ln=d}break;case 30:break;default:Ca(t,r)}}function gv(t){var n=t.alternate;n!==null&&(t.alternate=null,gv(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&nn(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var vn=null,ii=!1;function Ra(t,n,r){for(r=r.child;r!==null;)vv(t,n,r),r=r.sibling}function vv(t,n,r){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(we,r)}catch{}switch(r.tag){case 26:Ln||aa(r,n),Ra(t,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Ln||aa(r,n);var o=vn,f=ii;fr(r.type)&&(vn=r.stateNode,ii=!1),Ra(t,n,r),Yo(r.stateNode),vn=o,ii=f;break;case 5:Ln||aa(r,n);case 6:if(o=vn,f=ii,vn=null,Ra(t,n,r),vn=o,ii=f,vn!==null)if(ii)try{(vn.nodeType===9?vn.body:vn.nodeName==="HTML"?vn.ownerDocument.body:vn).removeChild(r.stateNode)}catch(d){sn(r,n,d)}else try{vn.removeChild(r.stateNode)}catch(d){sn(r,n,d)}break;case 18:vn!==null&&(ii?(t=vn,u0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),Is(t)):u0(vn,r.stateNode));break;case 4:o=vn,f=ii,vn=r.stateNode.containerInfo,ii=!0,Ra(t,n,r),vn=o,ii=f;break;case 0:case 11:case 14:case 15:ar(2,r,n),Ln||ar(4,r,n),Ra(t,n,r);break;case 1:Ln||(aa(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&cv(r,n,o)),Ra(t,n,r);break;case 21:Ra(t,n,r);break;case 22:Ln=(o=Ln)||r.memoizedState!==null,Ra(t,n,r),Ln=o;break;default:Ra(t,n,r)}}function _v(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Is(t)}catch(r){sn(n,n.return,r)}}}function xv(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Is(t)}catch(r){sn(n,n.return,r)}}function WS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new pv),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new pv),n;default:throw Error(s(435,t.tag))}}function gu(t,n){var r=WS(t);n.forEach(function(o){if(!r.has(o)){r.add(o);var f=eM.bind(null,t,o);o.then(f,f)}})}function ai(t,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var f=r[o],d=t,E=n,C=E;e:for(;C!==null;){switch(C.tag){case 27:if(fr(C.type)){vn=C.stateNode,ii=!1;break e}break;case 5:vn=C.stateNode,ii=!1;break e;case 3:case 4:vn=C.stateNode.containerInfo,ii=!0;break e}C=C.return}if(vn===null)throw Error(s(160));vv(d,E,f),vn=null,ii=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)yv(n,t),n=n.sibling}var ki=null;function yv(t,n){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ai(n,t),ri(t),o&4&&(ar(3,t,t.return),zo(3,t),ar(5,t,t.return));break;case 1:ai(n,t),ri(t),o&512&&(Ln||r===null||aa(r,r.return)),o&64&&Aa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var f=ki;if(ai(n,t),ri(t),o&512&&(Ln||r===null||aa(r,r.return)),o&4){var d=r!==null?r.memoizedState:null;if(o=t.memoizedState,r===null)if(o===null)if(t.stateNode===null){e:{o=t.type,r=t.memoizedProps,f=f.ownerDocument||f;t:switch(o){case"title":d=f.getElementsByTagName("title")[0],(!d||d[wt]||d[Fe]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(o),f.head.insertBefore(d,f.querySelector("head > title"))),kn(d,o,r),d[Fe]=t,W(d),o=d;break e;case"link":var E=y0("link","href",f).get(o+(r.href||""));if(E){for(var C=0;C<E.length;C++)if(d=E[C],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){E.splice(C,1);break t}}d=f.createElement(o),kn(d,o,r),f.head.appendChild(d);break;case"meta":if(E=y0("meta","content",f).get(o+(r.content||""))){for(C=0;C<E.length;C++)if(d=E[C],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){E.splice(C,1);break t}}d=f.createElement(o),kn(d,o,r),f.head.appendChild(d);break;default:throw Error(s(468,o))}d[Fe]=t,W(d),o=d}t.stateNode=o}else S0(f,t.type,t.stateNode);else t.stateNode=x0(f,o,t.memoizedProps);else d!==o?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,o===null?S0(f,t.type,t.stateNode):x0(f,o,t.memoizedProps)):o===null&&t.stateNode!==null&&rd(t,t.memoizedProps,r.memoizedProps)}break;case 27:ai(n,t),ri(t),o&512&&(Ln||r===null||aa(r,r.return)),r!==null&&o&4&&rd(t,t.memoizedProps,r.memoizedProps);break;case 5:if(ai(n,t),ri(t),o&512&&(Ln||r===null||aa(r,r.return)),t.flags&32){f=t.stateNode;try{Qn(f,"")}catch(nt){sn(t,t.return,nt)}}o&4&&t.stateNode!=null&&(f=t.memoizedProps,rd(t,f,r!==null?r.memoizedProps:f)),o&1024&&(ld=!0);break;case 6:if(ai(n,t),ri(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,r=t.stateNode;try{r.nodeValue=o}catch(nt){sn(t,t.return,nt)}}break;case 3:if(Lu=null,f=ki,ki=Du(n.containerInfo),ai(n,t),ki=f,ri(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Is(n.containerInfo)}catch(nt){sn(t,t.return,nt)}ld&&(ld=!1,Sv(t));break;case 4:o=ki,ki=Du(t.stateNode.containerInfo),ai(n,t),ri(t),ki=o;break;case 12:ai(n,t),ri(t);break;case 31:ai(n,t),ri(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,gu(t,o)));break;case 13:ai(n,t),ri(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(_u=x()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,gu(t,o)));break;case 22:f=t.memoizedState!==null;var k=r!==null&&r.memoizedState!==null,ue=Aa,ye=Ln;if(Aa=ue||f,Ln=ye||k,ai(n,t),Ln=ye,Aa=ue,ri(t),o&8192)e:for(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(r===null||k||Aa||Ln||Xr(t)),r=null,n=t;;){if(n.tag===5||n.tag===26){if(r===null){k=r=n;try{if(d=k.stateNode,f)E=d.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{C=k.stateNode;var Ee=k.memoizedProps.style,de=Ee!=null&&Ee.hasOwnProperty("display")?Ee.display:null;C.style.display=de==null||typeof de=="boolean"?"":(""+de).trim()}}catch(nt){sn(k,k.return,nt)}}}else if(n.tag===6){if(r===null){k=n;try{k.stateNode.nodeValue=f?"":k.memoizedProps}catch(nt){sn(k,k.return,nt)}}}else if(n.tag===18){if(r===null){k=n;try{var ve=k.stateNode;f?c0(ve,!0):c0(k.stateNode,!1)}catch(nt){sn(k,k.return,nt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,gu(t,r))));break;case 19:ai(n,t),ri(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,gu(t,o)));break;case 30:break;case 21:break;default:ai(n,t),ri(t)}}function ri(t){var n=t.flags;if(n&2){try{for(var r,o=t.return;o!==null;){if(dv(o)){r=o;break}o=o.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var f=r.stateNode,d=sd(t);mu(t,d,f);break;case 5:var E=r.stateNode;r.flags&32&&(Qn(E,""),r.flags&=-33);var C=sd(t);mu(t,C,E);break;case 3:case 4:var k=r.stateNode.containerInfo,ue=sd(t);od(t,ue,k);break;default:throw Error(s(161))}}catch(ye){sn(t,t.return,ye)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Sv(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Sv(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ca(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)mv(t,n.alternate,n),n=n.sibling}function Xr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ar(4,n,n.return),Xr(n);break;case 1:aa(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&cv(n,n.return,r),Xr(n);break;case 27:Yo(n.stateNode);case 26:case 5:aa(n,n.return),Xr(n);break;case 22:n.memoizedState===null&&Xr(n);break;case 30:Xr(n);break;default:Xr(n)}t=t.sibling}}function wa(t,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,f=t,d=n,E=d.flags;switch(d.tag){case 0:case 11:case 15:wa(f,d,r),zo(4,d);break;case 1:if(wa(f,d,r),o=d,f=o.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ue){sn(o,o.return,ue)}if(o=d,f=o.updateQueue,f!==null){var C=o.stateNode;try{var k=f.shared.hiddenCallbacks;if(k!==null)for(f.shared.hiddenCallbacks=null,f=0;f<k.length;f++)Jm(k[f],C)}catch(ue){sn(o,o.return,ue)}}r&&E&64&&uv(d),Io(d,d.return);break;case 27:hv(d);case 26:case 5:wa(f,d,r),r&&o===null&&E&4&&fv(d),Io(d,d.return);break;case 12:wa(f,d,r);break;case 31:wa(f,d,r),r&&E&4&&_v(f,d);break;case 13:wa(f,d,r),r&&E&4&&xv(f,d);break;case 22:d.memoizedState===null&&wa(f,d,r),Io(d,d.return);break;case 30:break;default:wa(f,d,r)}n=n.sibling}}function ud(t,n){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&bo(r))}function cd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&bo(t))}function Xi(t,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Mv(t,n,r,o),n=n.sibling}function Mv(t,n,r,o){var f=n.flags;switch(n.tag){case 0:case 11:case 15:Xi(t,n,r,o),f&2048&&zo(9,n);break;case 1:Xi(t,n,r,o);break;case 3:Xi(t,n,r,o),f&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&bo(t)));break;case 12:if(f&2048){Xi(t,n,r,o),t=n.stateNode;try{var d=n.memoizedProps,E=d.id,C=d.onPostCommit;typeof C=="function"&&C(E,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(k){sn(n,n.return,k)}}else Xi(t,n,r,o);break;case 31:Xi(t,n,r,o);break;case 13:Xi(t,n,r,o);break;case 23:break;case 22:d=n.stateNode,E=n.alternate,n.memoizedState!==null?d._visibility&2?Xi(t,n,r,o):Bo(t,n):d._visibility&2?Xi(t,n,r,o):(d._visibility|=2,Rs(t,n,r,o,(n.subtreeFlags&10256)!==0||!1)),f&2048&&ud(E,n);break;case 24:Xi(t,n,r,o),f&2048&&cd(n.alternate,n);break;default:Xi(t,n,r,o)}}function Rs(t,n,r,o,f){for(f=f&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,E=n,C=r,k=o,ue=E.flags;switch(E.tag){case 0:case 11:case 15:Rs(d,E,C,k,f),zo(8,E);break;case 23:break;case 22:var ye=E.stateNode;E.memoizedState!==null?ye._visibility&2?Rs(d,E,C,k,f):Bo(d,E):(ye._visibility|=2,Rs(d,E,C,k,f)),f&&ue&2048&&ud(E.alternate,E);break;case 24:Rs(d,E,C,k,f),f&&ue&2048&&cd(E.alternate,E);break;default:Rs(d,E,C,k,f)}n=n.sibling}}function Bo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=t,o=n,f=o.flags;switch(o.tag){case 22:Bo(r,o),f&2048&&ud(o.alternate,o);break;case 24:Bo(r,o),f&2048&&cd(o.alternate,o);break;default:Bo(r,o)}n=n.sibling}}var Ho=8192;function Cs(t,n,r){if(t.subtreeFlags&Ho)for(t=t.child;t!==null;)Ev(t,n,r),t=t.sibling}function Ev(t,n,r){switch(t.tag){case 26:Cs(t,n,r),t.flags&Ho&&t.memoizedState!==null&&UM(r,ki,t.memoizedState,t.memoizedProps);break;case 5:Cs(t,n,r);break;case 3:case 4:var o=ki;ki=Du(t.stateNode.containerInfo),Cs(t,n,r),ki=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Ho,Ho=16777216,Cs(t,n,r),Ho=o):Cs(t,n,r));break;default:Cs(t,n,r)}}function bv(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Go(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];In=o,Av(o,t)}bv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Tv(t),t=t.sibling}function Tv(t){switch(t.tag){case 0:case 11:case 15:Go(t),t.flags&2048&&ar(9,t,t.return);break;case 3:Go(t);break;case 12:Go(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,vu(t)):Go(t);break;default:Go(t)}}function vu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];In=o,Av(o,t)}bv(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ar(8,n,n.return),vu(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,vu(n));break;default:vu(n)}t=t.sibling}}function Av(t,n){for(;In!==null;){var r=In;switch(r.tag){case 0:case 11:case 15:ar(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:bo(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,In=o;else e:for(r=t;In!==null;){o=In;var f=o.sibling,d=o.return;if(gv(o),o===r){In=null;break e}if(f!==null){f.return=d,In=f;break e}In=d}}}var qS={getCacheForType:function(t){var n=Gn(wn),r=n.data.get(t);return r===void 0&&(r=t(),n.data.set(t,r)),r},cacheSignal:function(){return Gn(wn).controller.signal}},YS=typeof WeakMap=="function"?WeakMap:Map,Jt=0,dn=null,Ot=null,It=0,rn=0,vi=null,rr=!1,ws=!1,fd=!1,Da=0,xn=0,sr=0,Wr=0,dd=0,_i=0,Ds=0,Vo=null,si=null,hd=!1,_u=0,Rv=0,xu=1/0,yu=null,or=null,Pn=0,lr=null,Us=null,Ua=0,pd=0,md=null,Cv=null,ko=0,gd=null;function xi(){return(Jt&2)!==0&&It!==0?It&-It:O.T!==null?Md():Ae()}function wv(){if(_i===0)if((It&536870912)===0||kt){var t=Le;Le<<=1,(Le&3932160)===0&&(Le=262144),_i=t}else _i=536870912;return t=mi.current,t!==null&&(t.flags|=32),_i}function oi(t,n,r){(t===dn&&(rn===2||rn===9)||t.cancelPendingCommit!==null)&&(Ls(t,0),ur(t,It,_i,!1)),An(t,r),((Jt&2)===0||t!==dn)&&(t===dn&&((Jt&2)===0&&(Wr|=r),xn===4&&ur(t,It,_i,!1)),ra(t))}function Dv(t,n,r){if((Jt&6)!==0)throw Error(s(327));var o=!r&&(n&127)===0&&(n&t.expiredLanes)===0||Qe(t,n),f=o?KS(t,n):_d(t,n,!0),d=o;do{if(f===0){ws&&!o&&ur(t,n,0,!1);break}else{if(r=t.current.alternate,d&&!jS(r)){f=_d(t,n,!1),d=!1;continue}if(f===2){if(d=n,t.errorRecoveryDisabledLanes&d)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){n=E;e:{var C=t;f=Vo;var k=C.current.memoizedState.isDehydrated;if(k&&(Ls(C,E).flags|=256),E=_d(C,E,!1),E!==2){if(fd&&!k){C.errorRecoveryDisabledLanes|=d,Wr|=d,f=4;break e}d=si,si=f,d!==null&&(si===null?si=d:si.push.apply(si,d))}f=E}if(d=!1,f!==2)continue}}if(f===1){Ls(t,0),ur(t,n,0,!0);break}e:{switch(o=t,d=f,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ur(o,n,_i,!rr);break e;case 2:si=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(f=_u+300-x(),10<f)){if(ur(o,n,_i,!rr),_e(o,0,!0)!==0)break e;Ua=n,o.timeoutHandle=o0(Uv.bind(null,o,r,si,yu,hd,n,_i,Wr,Ds,rr,d,"Throttled",-0,0),f);break e}Uv(o,r,si,yu,hd,n,_i,Wr,Ds,rr,d,null,-0,0)}}break}while(!0);ra(t)}function Uv(t,n,r,o,f,d,E,C,k,ue,ye,Ee,de,ve){if(t.timeoutHandle=-1,Ee=n.subtreeFlags,Ee&8192||(Ee&16785408)===16785408){Ee={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ga},Ev(n,d,Ee);var nt=(d&62914560)===d?_u-x():(d&4194048)===d?Rv-x():0;if(nt=LM(Ee,nt),nt!==null){Ua=d,t.cancelPendingCommit=nt(Bv.bind(null,t,n,d,r,o,f,E,C,k,ye,Ee,null,de,ve)),ur(t,d,E,!ue);return}}Bv(t,n,d,r,o,f,E,C,k)}function jS(t){for(var n=t;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var f=r[o],d=f.getSnapshot;f=f.value;try{if(!hi(d(),f))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ur(t,n,r,o){n&=~dd,n&=~Wr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var f=n;0<f;){var d=31-Ve(f),E=1<<d;o[d]=-1,f&=~E}r!==0&&wr(t,r,n)}function Su(){return(Jt&6)===0?(Xo(0),!1):!0}function vd(){if(Ot!==null){if(rn===0)var t=Ot.return;else t=Ot,ya=Fr=null,Nf(t),Ms=null,Ao=0,t=Ot;for(;t!==null;)lv(t.alternate,t),t=t.return;Ot=null}}function Ls(t,n){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,pM(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),Ua=0,vd(),dn=t,Ot=r=_a(t.current,null),It=n,rn=0,vi=null,rr=!1,ws=Qe(t,n),fd=!1,Ds=_i=dd=Wr=sr=xn=0,si=Vo=null,hd=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var f=31-Ve(o),d=1<<f;n|=t[f],o&=~d}return Da=n,Vl(),r}function Lv(t,n){At=null,O.H=Oo,n===Ss||n===Kl?(n=jm(),rn=3):n===Sf?(n=jm(),rn=4):rn=n===Zf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,vi=n,Ot===null&&(xn=1,cu(t,Ti(n,t.current)))}function Nv(){var t=mi.current;return t===null?!0:(It&4194048)===It?wi===null:(It&62914560)===It||(It&536870912)!==0?t===wi:!1}function Ov(){var t=O.H;return O.H=Oo,t===null?Oo:t}function Pv(){var t=O.A;return O.A=qS,t}function Mu(){xn=4,rr||(It&4194048)!==It&&mi.current!==null||(ws=!0),(sr&134217727)===0&&(Wr&134217727)===0||dn===null||ur(dn,It,_i,!1)}function _d(t,n,r){var o=Jt;Jt|=2;var f=Ov(),d=Pv();(dn!==t||It!==n)&&(yu=null,Ls(t,n)),n=!1;var E=xn;e:do try{if(rn!==0&&Ot!==null){var C=Ot,k=vi;switch(rn){case 8:vd(),E=6;break e;case 3:case 2:case 9:case 6:mi.current===null&&(n=!0);var ue=rn;if(rn=0,vi=null,Ns(t,C,k,ue),r&&ws){E=0;break e}break;default:ue=rn,rn=0,vi=null,Ns(t,C,k,ue)}}ZS(),E=xn;break}catch(ye){Lv(t,ye)}while(!0);return n&&t.shellSuspendCounter++,ya=Fr=null,Jt=o,O.H=f,O.A=d,Ot===null&&(dn=null,It=0,Vl()),E}function ZS(){for(;Ot!==null;)Fv(Ot)}function KS(t,n){var r=Jt;Jt|=2;var o=Ov(),f=Pv();dn!==t||It!==n?(yu=null,xu=x()+500,Ls(t,n)):ws=Qe(t,n);e:do try{if(rn!==0&&Ot!==null){n=Ot;var d=vi;t:switch(rn){case 1:rn=0,vi=null,Ns(t,n,d,1);break;case 2:case 9:if(qm(d)){rn=0,vi=null,zv(n);break}n=function(){rn!==2&&rn!==9||dn!==t||(rn=7),ra(t)},d.then(n,n);break e;case 3:rn=7;break e;case 4:rn=5;break e;case 7:qm(d)?(rn=0,vi=null,zv(n)):(rn=0,vi=null,Ns(t,n,d,7));break;case 5:var E=null;switch(Ot.tag){case 26:E=Ot.memoizedState;case 5:case 27:var C=Ot;if(E?M0(E):C.stateNode.complete){rn=0,vi=null;var k=C.sibling;if(k!==null)Ot=k;else{var ue=C.return;ue!==null?(Ot=ue,Eu(ue)):Ot=null}break t}}rn=0,vi=null,Ns(t,n,d,5);break;case 6:rn=0,vi=null,Ns(t,n,d,6);break;case 8:vd(),xn=6;break e;default:throw Error(s(462))}}QS();break}catch(ye){Lv(t,ye)}while(!0);return ya=Fr=null,O.H=o,O.A=f,Jt=r,Ot!==null?0:(dn=null,It=0,Vl(),xn)}function QS(){for(;Ot!==null&&!et();)Fv(Ot)}function Fv(t){var n=sv(t.alternate,t,Da);t.memoizedProps=t.pendingProps,n===null?Eu(t):Ot=n}function zv(t){var n=t,r=n.alternate;switch(n.tag){case 15:case 0:n=ev(r,n,n.pendingProps,n.type,void 0,It);break;case 11:n=ev(r,n,n.pendingProps,n.type.render,n.ref,It);break;case 5:Nf(n);default:lv(r,n),n=Ot=Pm(n,Da),n=sv(r,n,Da)}t.memoizedProps=t.pendingProps,n===null?Eu(t):Ot=n}function Ns(t,n,r,o){ya=Fr=null,Nf(n),Ms=null,Ao=0;var f=n.return;try{if(BS(t,f,n,r,It)){xn=1,cu(t,Ti(r,t.current)),Ot=null;return}}catch(d){if(f!==null)throw Ot=f,d;xn=1,cu(t,Ti(r,t.current)),Ot=null;return}n.flags&32768?(kt||o===1?t=!0:ws||(It&536870912)!==0?t=!1:(rr=t=!0,(o===2||o===9||o===3||o===6)&&(o=mi.current,o!==null&&o.tag===13&&(o.flags|=16384))),Iv(n,t)):Eu(n)}function Eu(t){var n=t;do{if((n.flags&32768)!==0){Iv(n,rr);return}t=n.return;var r=VS(n.alternate,n,Da);if(r!==null){Ot=r;return}if(n=n.sibling,n!==null){Ot=n;return}Ot=n=t}while(n!==null);xn===0&&(xn=5)}function Iv(t,n){do{var r=kS(t.alternate,t);if(r!==null){r.flags&=32767,Ot=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(t=t.sibling,t!==null)){Ot=t;return}Ot=t=r}while(t!==null);xn=6,Ot=null}function Bv(t,n,r,o,f,d,E,C,k){t.cancelPendingCommit=null;do bu();while(Pn!==0);if((Jt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=sf,ti(t,r,d,E,C,k),t===dn&&(Ot=dn=null,It=0),Us=n,lr=t,Ua=r,pd=d,md=f,Cv=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,tM(fe,function(){return Xv(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,f=I.p,I.p=2,E=Jt,Jt|=4;try{XS(t,n,r)}finally{Jt=E,I.p=f,O.T=o}}Pn=1,Hv(),Gv(),Vv()}}function Hv(){if(Pn===1){Pn=0;var t=lr,n=Us,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=O.T,O.T=null;var o=I.p;I.p=2;var f=Jt;Jt|=4;try{yv(n,t);var d=Dd,E=Am(t.containerInfo),C=d.focusedElem,k=d.selectionRange;if(E!==C&&C&&C.ownerDocument&&Tm(C.ownerDocument.documentElement,C)){if(k!==null&&ef(C)){var ue=k.start,ye=k.end;if(ye===void 0&&(ye=ue),"selectionStart"in C)C.selectionStart=ue,C.selectionEnd=Math.min(ye,C.value.length);else{var Ee=C.ownerDocument||document,de=Ee&&Ee.defaultView||window;if(de.getSelection){var ve=de.getSelection(),nt=C.textContent.length,mt=Math.min(k.start,nt),cn=k.end===void 0?mt:Math.min(k.end,nt);!ve.extend&&mt>cn&&(E=cn,cn=mt,mt=E);var $=bm(C,mt),q=bm(C,cn);if($&&q&&(ve.rangeCount!==1||ve.anchorNode!==$.node||ve.anchorOffset!==$.offset||ve.focusNode!==q.node||ve.focusOffset!==q.offset)){var le=Ee.createRange();le.setStart($.node,$.offset),ve.removeAllRanges(),mt>cn?(ve.addRange(le),ve.extend(q.node,q.offset)):(le.setEnd(q.node,q.offset),ve.addRange(le))}}}}for(Ee=[],ve=C;ve=ve.parentNode;)ve.nodeType===1&&Ee.push({element:ve,left:ve.scrollLeft,top:ve.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Ee.length;C++){var Me=Ee[C];Me.element.scrollLeft=Me.left,Me.element.scrollTop=Me.top}}Fu=!!wd,Dd=wd=null}finally{Jt=f,I.p=o,O.T=r}}t.current=n,Pn=2}}function Gv(){if(Pn===2){Pn=0;var t=lr,n=Us,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=O.T,O.T=null;var o=I.p;I.p=2;var f=Jt;Jt|=4;try{mv(t,n.alternate,n)}finally{Jt=f,I.p=o,O.T=r}}Pn=3}}function Vv(){if(Pn===4||Pn===3){Pn=0,L();var t=lr,n=Us,r=Ua,o=Cv;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Pn=5:(Pn=0,Us=lr=null,kv(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(or=null),he(r),n=n.stateNode,De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(we,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,f=I.p,I.p=2,O.T=null;try{for(var d=t.onRecoverableError,E=0;E<o.length;E++){var C=o[E];d(C.value,{componentStack:C.stack})}}finally{O.T=n,I.p=f}}(Ua&3)!==0&&bu(),ra(t),f=t.pendingLanes,(r&261930)!==0&&(f&42)!==0?t===gd?ko++:(ko=0,gd=t):ko=0,Xo(0)}}function kv(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,bo(n)))}function bu(){return Hv(),Gv(),Vv(),Xv()}function Xv(){if(Pn!==5)return!1;var t=lr,n=pd;pd=0;var r=he(Ua),o=O.T,f=I.p;try{I.p=32>r?32:r,O.T=null,r=md,md=null;var d=lr,E=Ua;if(Pn=0,Us=lr=null,Ua=0,(Jt&6)!==0)throw Error(s(331));var C=Jt;if(Jt|=4,Tv(d.current),Mv(d,d.current,E,r),Jt=C,Xo(0,!1),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(we,d)}catch{}return!0}finally{I.p=f,O.T=o,kv(t,n)}}function Wv(t,n,r){n=Ti(r,n),n=jf(t.stateNode,n,2),t=tr(t,n,2),t!==null&&(An(t,2),ra(t))}function sn(t,n,r){if(t.tag===3)Wv(t,t,r);else for(;n!==null;){if(n.tag===3){Wv(n,t,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(or===null||!or.has(o))){t=Ti(r,t),r=qg(2),o=tr(n,r,2),o!==null&&(Yg(r,o,n,t),An(o,2),ra(o));break}}n=n.return}}function xd(t,n,r){var o=t.pingCache;if(o===null){o=t.pingCache=new YS;var f=new Set;o.set(n,f)}else f=o.get(n),f===void 0&&(f=new Set,o.set(n,f));f.has(r)||(fd=!0,f.add(r),t=JS.bind(null,t,n,r),n.then(t,t))}function JS(t,n,r){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,dn===t&&(It&r)===r&&(xn===4||xn===3&&(It&62914560)===It&&300>x()-_u?(Jt&2)===0&&Ls(t,0):dd|=r,Ds===It&&(Ds=0)),ra(t)}function qv(t,n){n===0&&(n=jt()),t=Nr(t,n),t!==null&&(An(t,n),ra(t))}function $S(t){var n=t.memoizedState,r=0;n!==null&&(r=n.retryLane),qv(t,r)}function eM(t,n){var r=0;switch(t.tag){case 31:case 13:var o=t.stateNode,f=t.memoizedState;f!==null&&(r=f.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),qv(t,r)}function tM(t,n){return Ut(t,n)}var Tu=null,Os=null,yd=!1,Au=!1,Sd=!1,cr=0;function ra(t){t!==Os&&t.next===null&&(Os===null?Tu=Os=t:Os=Os.next=t),Au=!0,yd||(yd=!0,iM())}function Xo(t,n){if(!Sd&&Au){Sd=!0;do for(var r=!1,o=Tu;o!==null;){if(t!==0){var f=o.pendingLanes;if(f===0)var d=0;else{var E=o.suspendedLanes,C=o.pingedLanes;d=(1<<31-Ve(42|t)+1)-1,d&=f&~(E&~C),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,Kv(o,d))}else d=It,d=_e(o,o===dn?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Qe(o,d)||(r=!0,Kv(o,d));o=o.next}while(r);Sd=!1}}function nM(){Yv()}function Yv(){Au=yd=!1;var t=0;cr!==0&&hM()&&(t=cr);for(var n=x(),r=null,o=Tu;o!==null;){var f=o.next,d=jv(o,n);d===0?(o.next=null,r===null?Tu=f:r.next=f,f===null&&(Os=r)):(r=o,(t!==0||(d&3)!==0)&&(Au=!0)),o=f}Pn!==0&&Pn!==5||Xo(t),cr!==0&&(cr=0)}function jv(t,n){for(var r=t.suspendedLanes,o=t.pingedLanes,f=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var E=31-Ve(d),C=1<<E,k=f[E];k===-1?((C&r)===0||(C&o)!==0)&&(f[E]=vt(C,n)):k<=n&&(t.expiredLanes|=C),d&=~C}if(n=dn,r=It,r=_e(t,t===n?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,r===0||t===n&&(rn===2||rn===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Gt(o),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||Qe(t,r)){if(n=r&-r,n===t.callbackPriority)return n;switch(o!==null&&Gt(o),he(r)){case 2:case 8:r=ge;break;case 32:r=fe;break;case 268435456:r=Ue;break;default:r=fe}return o=Zv.bind(null,t),r=Ut(r,o),t.callbackPriority=n,t.callbackNode=r,n}return o!==null&&o!==null&&Gt(o),t.callbackPriority=2,t.callbackNode=null,2}function Zv(t,n){if(Pn!==0&&Pn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(bu()&&t.callbackNode!==r)return null;var o=It;return o=_e(t,t===dn?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Dv(t,o,n),jv(t,x()),t.callbackNode!=null&&t.callbackNode===r?Zv.bind(null,t):null)}function Kv(t,n){if(bu())return null;Dv(t,n,!0)}function iM(){mM(function(){(Jt&6)!==0?Ut(J,nM):Yv()})}function Md(){if(cr===0){var t=xs;t===0&&(t=Oe,Oe<<=1,(Oe&261888)===0&&(Oe=256)),cr=t}return cr}function Qv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ol(""+t)}function Jv(t,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,t.id&&r.setAttribute("form",t.id),n.parentNode.insertBefore(r,n),t=new FormData(t),r.parentNode.removeChild(r),t}function aM(t,n,r,o,f){if(n==="submit"&&r&&r.stateNode===f){var d=Qv((f[Xe]||null).action),E=o.submitter;E&&(n=(n=E[Xe]||null)?Qv(n.formAction):E.getAttribute("formAction"),n!==null&&(d=n,E=null));var C=new Il("action","action",null,o,f);t.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(cr!==0){var k=E?Jv(f,E):new FormData(f);Vf(r,{pending:!0,data:k,method:f.method,action:d},null,k)}}else typeof d=="function"&&(C.preventDefault(),k=E?Jv(f,E):new FormData(f),Vf(r,{pending:!0,data:k,method:f.method,action:d},d,k))},currentTarget:f}]})}}for(var Ed=0;Ed<rf.length;Ed++){var bd=rf[Ed],rM=bd.toLowerCase(),sM=bd[0].toUpperCase()+bd.slice(1);Vi(rM,"on"+sM)}Vi(wm,"onAnimationEnd"),Vi(Dm,"onAnimationIteration"),Vi(Um,"onAnimationStart"),Vi("dblclick","onDoubleClick"),Vi("focusin","onFocus"),Vi("focusout","onBlur"),Vi(MS,"onTransitionRun"),Vi(ES,"onTransitionStart"),Vi(bS,"onTransitionCancel"),Vi(Lm,"onTransitionEnd"),ze("onMouseEnter",["mouseout","mouseover"]),ze("onMouseLeave",["mouseout","mouseover"]),ze("onPointerEnter",["pointerout","pointerover"]),ze("onPointerLeave",["pointerout","pointerover"]),te("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),te("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),te("onBeforeInput",["compositionend","keypress","textInput","paste"]),te("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),te("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),te("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wo));function $v(t,n){n=(n&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],f=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var E=o.length-1;0<=E;E--){var C=o[E],k=C.instance,ue=C.currentTarget;if(C=C.listener,k!==d&&f.isPropagationStopped())break e;d=C,f.currentTarget=ue;try{d(f)}catch(ye){Gl(ye)}f.currentTarget=null,d=k}else for(E=0;E<o.length;E++){if(C=o[E],k=C.instance,ue=C.currentTarget,C=C.listener,k!==d&&f.isPropagationStopped())break e;d=C,f.currentTarget=ue;try{d(f)}catch(ye){Gl(ye)}f.currentTarget=null,d=k}}}}function Pt(t,n){var r=n[ot];r===void 0&&(r=n[ot]=new Set);var o=t+"__bubble";r.has(o)||(e0(n,t,2,!1),r.add(o))}function Td(t,n,r){var o=0;n&&(o|=4),e0(r,t,o,n)}var Ru="_reactListening"+Math.random().toString(36).slice(2);function Ad(t){if(!t[Ru]){t[Ru]=!0,me.forEach(function(r){r!=="selectionchange"&&(oM.has(r)||Td(r,!1,t),Td(r,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ru]||(n[Ru]=!0,Td("selectionchange",!1,n))}}function e0(t,n,r,o){switch(w0(n)){case 2:var f=PM;break;case 8:f=FM;break;default:f=Gd}r=f.bind(null,n,r,t),f=void 0,!Wc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),o?f!==void 0?t.addEventListener(n,r,{capture:!0,passive:f}):t.addEventListener(n,r,!0):f!==void 0?t.addEventListener(n,r,{passive:f}):t.addEventListener(n,r,!1)}function Rd(t,n,r,o,f){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var E=o.tag;if(E===3||E===4){var C=o.stateNode.containerInfo;if(C===f)break;if(E===4)for(E=o.return;E!==null;){var k=E.tag;if((k===3||k===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;C!==null;){if(E=fn(C),E===null)return;if(k=E.tag,k===5||k===6||k===26||k===27){o=d=E;continue e}C=C.parentNode}}o=o.return}rm(function(){var ue=d,ye=kc(r),Ee=[];e:{var de=Nm.get(t);if(de!==void 0){var ve=Il,nt=t;switch(t){case"keypress":if(Fl(r)===0)break e;case"keydown":case"keyup":ve=eS;break;case"focusin":nt="focus",ve=Zc;break;case"focusout":nt="blur",ve=Zc;break;case"beforeblur":case"afterblur":ve=Zc;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ve=lm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ve=Vy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ve=iS;break;case wm:case Dm:case Um:ve=Wy;break;case Lm:ve=rS;break;case"scroll":case"scrollend":ve=Hy;break;case"wheel":ve=oS;break;case"copy":case"cut":case"paste":ve=Yy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ve=cm;break;case"toggle":case"beforetoggle":ve=uS}var mt=(n&4)!==0,cn=!mt&&(t==="scroll"||t==="scrollend"),$=mt?de!==null?de+"Capture":null:de;mt=[];for(var q=ue,le;q!==null;){var Me=q;if(le=Me.stateNode,Me=Me.tag,Me!==5&&Me!==26&&Me!==27||le===null||$===null||(Me=ho(q,$),Me!=null&&mt.push(qo(q,Me,le))),cn)break;q=q.return}0<mt.length&&(de=new ve(de,nt,null,r,ye),Ee.push({event:de,listeners:mt}))}}if((n&7)===0){e:{if(de=t==="mouseover"||t==="pointerover",ve=t==="mouseout"||t==="pointerout",de&&r!==Vc&&(nt=r.relatedTarget||r.fromElement)&&(fn(nt)||nt[Ke]))break e;if((ve||de)&&(de=ye.window===ye?ye:(de=ye.ownerDocument)?de.defaultView||de.parentWindow:window,ve?(nt=r.relatedTarget||r.toElement,ve=ue,nt=nt?fn(nt):null,nt!==null&&(cn=u(nt),mt=nt.tag,nt!==cn||mt!==5&&mt!==27&&mt!==6)&&(nt=null)):(ve=null,nt=ue),ve!==nt)){if(mt=lm,Me="onMouseLeave",$="onMouseEnter",q="mouse",(t==="pointerout"||t==="pointerover")&&(mt=cm,Me="onPointerLeave",$="onPointerEnter",q="pointer"),cn=ve==null?de:zt(ve),le=nt==null?de:zt(nt),de=new mt(Me,q+"leave",ve,r,ye),de.target=cn,de.relatedTarget=le,Me=null,fn(ye)===ue&&(mt=new mt($,q+"enter",nt,r,ye),mt.target=le,mt.relatedTarget=cn,Me=mt),cn=Me,ve&&nt)t:{for(mt=lM,$=ve,q=nt,le=0,Me=$;Me;Me=mt(Me))le++;Me=0;for(var ht=q;ht;ht=mt(ht))Me++;for(;0<le-Me;)$=mt($),le--;for(;0<Me-le;)q=mt(q),Me--;for(;le--;){if($===q||q!==null&&$===q.alternate){mt=$;break t}$=mt($),q=mt(q)}mt=null}else mt=null;ve!==null&&t0(Ee,de,ve,mt,!1),nt!==null&&cn!==null&&t0(Ee,cn,nt,mt,!0)}}e:{if(de=ue?zt(ue):window,ve=de.nodeName&&de.nodeName.toLowerCase(),ve==="select"||ve==="input"&&de.type==="file")var Zt=_m;else if(gm(de))if(xm)Zt=xS;else{Zt=vS;var st=gS}else ve=de.nodeName,!ve||ve.toLowerCase()!=="input"||de.type!=="checkbox"&&de.type!=="radio"?ue&&os(ue.elementType)&&(Zt=_m):Zt=_S;if(Zt&&(Zt=Zt(t,ue))){vm(Ee,Zt,r,ye);break e}st&&st(t,de,ue),t==="focusout"&&ue&&de.type==="number"&&ue.memoizedProps.value!=null&&Hi(de,"number",de.value)}switch(st=ue?zt(ue):window,t){case"focusin":(gm(st)||st.contentEditable==="true")&&(fs=st,tf=ue,So=null);break;case"focusout":So=tf=fs=null;break;case"mousedown":nf=!0;break;case"contextmenu":case"mouseup":case"dragend":nf=!1,Rm(Ee,r,ye);break;case"selectionchange":if(SS)break;case"keydown":case"keyup":Rm(Ee,r,ye)}var Rt;if(Qc)e:{switch(t){case"compositionstart":var Bt="onCompositionStart";break e;case"compositionend":Bt="onCompositionEnd";break e;case"compositionupdate":Bt="onCompositionUpdate";break e}Bt=void 0}else cs?pm(t,r)&&(Bt="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(Bt="onCompositionStart");Bt&&(fm&&r.locale!=="ko"&&(cs||Bt!=="onCompositionStart"?Bt==="onCompositionEnd"&&cs&&(Rt=sm()):(ja=ye,qc="value"in ja?ja.value:ja.textContent,cs=!0)),st=Cu(ue,Bt),0<st.length&&(Bt=new um(Bt,t,null,r,ye),Ee.push({event:Bt,listeners:st}),Rt?Bt.data=Rt:(Rt=mm(r),Rt!==null&&(Bt.data=Rt)))),(Rt=fS?dS(t,r):hS(t,r))&&(Bt=Cu(ue,"onBeforeInput"),0<Bt.length&&(st=new um("onBeforeInput","beforeinput",null,r,ye),Ee.push({event:st,listeners:Bt}),st.data=Rt)),aM(Ee,t,ue,r,ye)}$v(Ee,n)})}function qo(t,n,r){return{instance:t,listener:n,currentTarget:r}}function Cu(t,n){for(var r=n+"Capture",o=[];t!==null;){var f=t,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=ho(t,r),f!=null&&o.unshift(qo(t,f,d)),f=ho(t,n),f!=null&&o.push(qo(t,f,d))),t.tag===3)return o;t=t.return}return[]}function lM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function t0(t,n,r,o,f){for(var d=n._reactName,E=[];r!==null&&r!==o;){var C=r,k=C.alternate,ue=C.stateNode;if(C=C.tag,k!==null&&k===o)break;C!==5&&C!==26&&C!==27||ue===null||(k=ue,f?(ue=ho(r,d),ue!=null&&E.unshift(qo(r,ue,k))):f||(ue=ho(r,d),ue!=null&&E.push(qo(r,ue,k)))),r=r.return}E.length!==0&&t.push({event:n,listeners:E})}var uM=/\r\n?/g,cM=/\u0000|\uFFFD/g;function n0(t){return(typeof t=="string"?t:""+t).replace(uM,`
`).replace(cM,"")}function i0(t,n){return n=n0(n),n0(t)===n}function un(t,n,r,o,f,d){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Qn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Qn(t,""+o);break;case"className":rt(t,"class",o);break;case"tabIndex":rt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":rt(t,r,o);break;case"style":ma(t,o,d);break;case"data":if(n!=="object"){rt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){t.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=Ol(""+o),t.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(n!=="input"&&un(t,n,"name",f.name,f,null),un(t,n,"formEncType",f.formEncType,f,null),un(t,n,"formMethod",f.formMethod,f,null),un(t,n,"formTarget",f.formTarget,f,null)):(un(t,n,"encType",f.encType,f,null),un(t,n,"method",f.method,f,null),un(t,n,"target",f.target,f,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=Ol(""+o),t.setAttribute(r,o);break;case"onClick":o!=null&&(t.onclick=ga);break;case"onScroll":o!=null&&Pt("scroll",t);break;case"onScrollEnd":o!=null&&Pt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(f.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}r=Ol(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""+o):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":o===!0?t.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,o):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(r,o):t.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(r):t.setAttribute(r,o);break;case"popover":Pt("beforetoggle",t),Pt("toggle",t),Be(t,"popover",o);break;case"xlinkActuate":je(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":je(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":je(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":je(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":je(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":je(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":je(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":je(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":je(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Be(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Iy.get(r)||r,Be(t,r,o))}}function Cd(t,n,r,o,f,d){switch(r){case"style":ma(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(f.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"children":typeof o=="string"?Qn(t,o):(typeof o=="number"||typeof o=="bigint")&&Qn(t,""+o);break;case"onScroll":o!=null&&Pt("scroll",t);break;case"onScrollEnd":o!=null&&Pt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ga);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ae.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(f=r.endsWith("Capture"),n=r.slice(2,f?r.length-7:void 0),d=t[Xe]||null,d=d!=null?d[r]:null,typeof d=="function"&&t.removeEventListener(n,d,f),typeof o=="function")){typeof d!="function"&&d!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(n,o,f);break e}r in t?t[r]=o:o===!0?t.setAttribute(r,""):Be(t,r,o)}}}function kn(t,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pt("error",t),Pt("load",t);var o=!1,f=!1,d;for(d in r)if(r.hasOwnProperty(d)){var E=r[d];if(E!=null)switch(d){case"src":o=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:un(t,n,d,E,r,null)}}f&&un(t,n,"srcSet",r.srcSet,r,null),o&&un(t,n,"src",r.src,r,null);return;case"input":Pt("invalid",t);var C=d=E=f=null,k=null,ue=null;for(o in r)if(r.hasOwnProperty(o)){var ye=r[o];if(ye!=null)switch(o){case"name":f=ye;break;case"type":E=ye;break;case"checked":k=ye;break;case"defaultChecked":ue=ye;break;case"value":d=ye;break;case"defaultValue":C=ye;break;case"children":case"dangerouslySetInnerHTML":if(ye!=null)throw Error(s(137,n));break;default:un(t,n,o,ye,r,null)}}fi(t,d,C,k,ue,E,f,!1);return;case"select":Pt("invalid",t),o=E=d=null;for(f in r)if(r.hasOwnProperty(f)&&(C=r[f],C!=null))switch(f){case"value":d=C;break;case"defaultValue":E=C;break;case"multiple":o=C;default:un(t,n,f,C,r,null)}n=d,r=E,t.multiple=!!o,n!=null?di(t,!!o,n,!1):r!=null&&di(t,!!o,r,!0);return;case"textarea":Pt("invalid",t),d=f=o=null;for(E in r)if(r.hasOwnProperty(E)&&(C=r[E],C!=null))switch(E){case"value":o=C;break;case"defaultValue":f=C;break;case"children":d=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:un(t,n,E,C,r,null)}Rn(t,o,f,d);return;case"option":for(k in r)r.hasOwnProperty(k)&&(o=r[k],o!=null)&&(k==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":un(t,n,k,o,r,null));return;case"dialog":Pt("beforetoggle",t),Pt("toggle",t),Pt("cancel",t),Pt("close",t);break;case"iframe":case"object":Pt("load",t);break;case"video":case"audio":for(o=0;o<Wo.length;o++)Pt(Wo[o],t);break;case"image":Pt("error",t),Pt("load",t);break;case"details":Pt("toggle",t);break;case"embed":case"source":case"link":Pt("error",t),Pt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ue in r)if(r.hasOwnProperty(ue)&&(o=r[ue],o!=null))switch(ue){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:un(t,n,ue,o,r,null)}return;default:if(os(n)){for(ye in r)r.hasOwnProperty(ye)&&(o=r[ye],o!==void 0&&Cd(t,n,ye,o,r,void 0));return}}for(C in r)r.hasOwnProperty(C)&&(o=r[C],o!=null&&un(t,n,C,o,r,null))}function fM(t,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,E=null,C=null,k=null,ue=null,ye=null;for(ve in r){var Ee=r[ve];if(r.hasOwnProperty(ve)&&Ee!=null)switch(ve){case"checked":break;case"value":break;case"defaultValue":k=Ee;default:o.hasOwnProperty(ve)||un(t,n,ve,null,o,Ee)}}for(var de in o){var ve=o[de];if(Ee=r[de],o.hasOwnProperty(de)&&(ve!=null||Ee!=null))switch(de){case"type":d=ve;break;case"name":f=ve;break;case"checked":ue=ve;break;case"defaultChecked":ye=ve;break;case"value":E=ve;break;case"defaultValue":C=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(s(137,n));break;default:ve!==Ee&&un(t,n,de,ve,o,Ee)}}Kn(t,E,C,k,ue,ye,d,f);return;case"select":ve=E=C=de=null;for(d in r)if(k=r[d],r.hasOwnProperty(d)&&k!=null)switch(d){case"value":break;case"multiple":ve=k;default:o.hasOwnProperty(d)||un(t,n,d,null,o,k)}for(f in o)if(d=o[f],k=r[f],o.hasOwnProperty(f)&&(d!=null||k!=null))switch(f){case"value":de=d;break;case"defaultValue":C=d;break;case"multiple":E=d;default:d!==k&&un(t,n,f,d,o,k)}n=C,r=E,o=ve,de!=null?di(t,!!r,de,!1):!!o!=!!r&&(n!=null?di(t,!!r,n,!0):di(t,!!r,r?[]:"",!1));return;case"textarea":ve=de=null;for(C in r)if(f=r[C],r.hasOwnProperty(C)&&f!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:un(t,n,C,null,o,f)}for(E in o)if(f=o[E],d=r[E],o.hasOwnProperty(E)&&(f!=null||d!=null))switch(E){case"value":de=f;break;case"defaultValue":ve=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==d&&un(t,n,E,f,o,d)}en(t,de,ve);return;case"option":for(var nt in r)de=r[nt],r.hasOwnProperty(nt)&&de!=null&&!o.hasOwnProperty(nt)&&(nt==="selected"?t.selected=!1:un(t,n,nt,null,o,de));for(k in o)de=o[k],ve=r[k],o.hasOwnProperty(k)&&de!==ve&&(de!=null||ve!=null)&&(k==="selected"?t.selected=de&&typeof de!="function"&&typeof de!="symbol":un(t,n,k,de,o,ve));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var mt in r)de=r[mt],r.hasOwnProperty(mt)&&de!=null&&!o.hasOwnProperty(mt)&&un(t,n,mt,null,o,de);for(ue in o)if(de=o[ue],ve=r[ue],o.hasOwnProperty(ue)&&de!==ve&&(de!=null||ve!=null))switch(ue){case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(s(137,n));break;default:un(t,n,ue,de,o,ve)}return;default:if(os(n)){for(var cn in r)de=r[cn],r.hasOwnProperty(cn)&&de!==void 0&&!o.hasOwnProperty(cn)&&Cd(t,n,cn,void 0,o,de);for(ye in o)de=o[ye],ve=r[ye],!o.hasOwnProperty(ye)||de===ve||de===void 0&&ve===void 0||Cd(t,n,ye,de,o,ve);return}}for(var $ in r)de=r[$],r.hasOwnProperty($)&&de!=null&&!o.hasOwnProperty($)&&un(t,n,$,null,o,de);for(Ee in o)de=o[Ee],ve=r[Ee],!o.hasOwnProperty(Ee)||de===ve||de==null&&ve==null||un(t,n,Ee,de,o,ve)}function a0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function dM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,r=performance.getEntriesByType("resource"),o=0;o<r.length;o++){var f=r[o],d=f.transferSize,E=f.initiatorType,C=f.duration;if(d&&C&&a0(E)){for(E=0,C=f.responseEnd,o+=1;o<r.length;o++){var k=r[o],ue=k.startTime;if(ue>C)break;var ye=k.transferSize,Ee=k.initiatorType;ye&&a0(Ee)&&(k=k.responseEnd,E+=ye*(k<C?1:(C-ue)/(k-ue)))}if(--o,n+=8*(d+E)/(f.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var wd=null,Dd=null;function wu(t){return t.nodeType===9?t:t.ownerDocument}function r0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function s0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Ud(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ld=null;function hM(){var t=window.event;return t&&t.type==="popstate"?t===Ld?!1:(Ld=t,!0):(Ld=null,!1)}var o0=typeof setTimeout=="function"?setTimeout:void 0,pM=typeof clearTimeout=="function"?clearTimeout:void 0,l0=typeof Promise=="function"?Promise:void 0,mM=typeof queueMicrotask=="function"?queueMicrotask:typeof l0<"u"?function(t){return l0.resolve(null).then(t).catch(gM)}:o0;function gM(t){setTimeout(function(){throw t})}function fr(t){return t==="head"}function u0(t,n){var r=n,o=0;do{var f=r.nextSibling;if(t.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"||r==="/&"){if(o===0){t.removeChild(f),Is(n);return}o--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")o++;else if(r==="html")Yo(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Yo(r);for(var d=r.firstChild;d;){var E=d.nextSibling,C=d.nodeName;d[wt]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&d.rel.toLowerCase()==="stylesheet"||r.removeChild(d),d=E}}else r==="body"&&Yo(t.ownerDocument.body);r=f}while(r);Is(n)}function c0(t,n){var r=t;t=0;do{var o=r.nextSibling;if(r.nodeType===1?n?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(n?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=o}while(r)}function Nd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Nd(r),nn(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function vM(t,n,r,o){for(;t.nodeType===1;){var f=r;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[wt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Di(t.nextSibling),t===null)break}return null}function _M(t,n,r){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=Di(t.nextSibling),t===null))return null;return t}function f0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Di(t.nextSibling),t===null))return null;return t}function Od(t){return t.data==="$?"||t.data==="$~"}function Pd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function xM(t,n){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||r.readyState!=="loading")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Di(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Fd=null;function d0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(n===0)return Di(t.nextSibling);n--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||n++}t=t.nextSibling}return null}function h0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(n===0)return t;n--}else r!=="/$"&&r!=="/&"||n++}t=t.previousSibling}return null}function p0(t,n,r){switch(n=wu(r),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Yo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);nn(t)}var Ui=new Map,m0=new Set;function Du(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var La=I.d;I.d={f:yM,r:SM,D:MM,C:EM,L:bM,m:TM,X:RM,S:AM,M:CM};function yM(){var t=La.f(),n=Su();return t||n}function SM(t){var n=gn(t);n!==null&&n.tag===5&&n.type==="form"?Lg(n):La.r(t)}var Ps=typeof document>"u"?null:document;function g0(t,n,r){var o=Ps;if(o&&typeof n=="string"&&n){var f=Mt(n);f='link[rel="'+t+'"][href="'+f+'"]',typeof r=="string"&&(f+='[crossorigin="'+r+'"]'),m0.has(f)||(m0.add(f),t={rel:t,crossOrigin:r,href:n},o.querySelector(f)===null&&(n=o.createElement("link"),kn(n,"link",t),W(n),o.head.appendChild(n)))}}function MM(t){La.D(t),g0("dns-prefetch",t,null)}function EM(t,n){La.C(t,n),g0("preconnect",t,n)}function bM(t,n,r){La.L(t,n,r);var o=Ps;if(o&&t&&n){var f='link[rel="preload"][as="'+Mt(n)+'"]';n==="image"&&r&&r.imageSrcSet?(f+='[imagesrcset="'+Mt(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(f+='[imagesizes="'+Mt(r.imageSizes)+'"]')):f+='[href="'+Mt(t)+'"]';var d=f;switch(n){case"style":d=Fs(t);break;case"script":d=zs(t)}Ui.has(d)||(t=v({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:t,as:n},r),Ui.set(d,t),o.querySelector(f)!==null||n==="style"&&o.querySelector(jo(d))||n==="script"&&o.querySelector(Zo(d))||(n=o.createElement("link"),kn(n,"link",t),W(n),o.head.appendChild(n)))}}function TM(t,n){La.m(t,n);var r=Ps;if(r&&t){var o=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+Mt(o)+'"][href="'+Mt(t)+'"]',d=f;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=zs(t)}if(!Ui.has(d)&&(t=v({rel:"modulepreload",href:t},n),Ui.set(d,t),r.querySelector(f)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Zo(d)))return}o=r.createElement("link"),kn(o,"link",t),W(o),r.head.appendChild(o)}}}function AM(t,n,r){La.S(t,n,r);var o=Ps;if(o&&t){var f=R(o).hoistableStyles,d=Fs(t);n=n||"default";var E=f.get(d);if(!E){var C={loading:0,preload:null};if(E=o.querySelector(jo(d)))C.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},r),(r=Ui.get(d))&&zd(t,r);var k=E=o.createElement("link");W(k),kn(k,"link",t),k._p=new Promise(function(ue,ye){k.onload=ue,k.onerror=ye}),k.addEventListener("load",function(){C.loading|=1}),k.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Uu(E,n,o)}E={type:"stylesheet",instance:E,count:1,state:C},f.set(d,E)}}}function RM(t,n){La.X(t,n);var r=Ps;if(r&&t){var o=R(r).hoistableScripts,f=zs(t),d=o.get(f);d||(d=r.querySelector(Zo(f)),d||(t=v({src:t,async:!0},n),(n=Ui.get(f))&&Id(t,n),d=r.createElement("script"),W(d),kn(d,"link",t),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(f,d))}}function CM(t,n){La.M(t,n);var r=Ps;if(r&&t){var o=R(r).hoistableScripts,f=zs(t),d=o.get(f);d||(d=r.querySelector(Zo(f)),d||(t=v({src:t,async:!0,type:"module"},n),(n=Ui.get(f))&&Id(t,n),d=r.createElement("script"),W(d),kn(d,"link",t),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(f,d))}}function v0(t,n,r,o){var f=(f=ne.current)?Du(f):null;if(!f)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=Fs(r.href),r=R(f).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=Fs(r.href);var d=R(f).hoistableStyles,E=d.get(t);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,E),(d=f.querySelector(jo(t)))&&!d._p&&(E.instance=d,E.state.loading=5),Ui.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Ui.set(t,r),d||wM(f,t,r,E.state))),n&&o===null)throw Error(s(528,""));return E}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=zs(r),r=R(f).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Fs(t){return'href="'+Mt(t)+'"'}function jo(t){return'link[rel="stylesheet"]['+t+"]"}function _0(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function wM(t,n,r,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),kn(n,"link",r),W(n),t.head.appendChild(n))}function zs(t){return'[src="'+Mt(t)+'"]'}function Zo(t){return"script[async]"+t}function x0(t,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Mt(r.href)+'"]');if(o)return n.instance=o,W(o),o;var f=v({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),W(o),kn(o,"style",f),Uu(o,r.precedence,t),n.instance=o;case"stylesheet":f=Fs(r.href);var d=t.querySelector(jo(f));if(d)return n.state.loading|=4,n.instance=d,W(d),d;o=_0(r),(f=Ui.get(f))&&zd(o,f),d=(t.ownerDocument||t).createElement("link"),W(d);var E=d;return E._p=new Promise(function(C,k){E.onload=C,E.onerror=k}),kn(d,"link",o),n.state.loading|=4,Uu(d,r.precedence,t),n.instance=d;case"script":return d=zs(r.src),(f=t.querySelector(Zo(d)))?(n.instance=f,W(f),f):(o=r,(f=Ui.get(d))&&(o=v({},r),Id(o,f)),t=t.ownerDocument||t,f=t.createElement("script"),W(f),kn(f,"link",o),t.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Uu(o,r.precedence,t));return n.instance}function Uu(t,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=o.length?o[o.length-1]:null,d=f,E=0;E<o.length;E++){var C=o[E];if(C.dataset.precedence===n)d=C;else if(d!==f)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(t,n.firstChild))}function zd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Id(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Lu=null;function y0(t,n,r){if(Lu===null){var o=new Map,f=Lu=new Map;f.set(r,o)}else f=Lu,o=f.get(r),o||(o=new Map,f.set(r,o));if(o.has(t))return o;for(o.set(t,null),r=r.getElementsByTagName(t),f=0;f<r.length;f++){var d=r[f];if(!(d[wt]||d[Fe]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var E=d.getAttribute(n)||"";E=t+E;var C=o.get(E);C?C.push(d):o.set(E,[d])}}return o}function S0(t,n,r){t=t.ownerDocument||t,t.head.insertBefore(r,n==="title"?t.querySelector("head > title"):null)}function DM(t,n,r){if(r===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function M0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function UM(t,n,r,o){if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Fs(o.href),d=n.querySelector(jo(f));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Nu.bind(t),n.then(t,t)),r.state.loading|=4,r.instance=d,W(d);return}d=n.ownerDocument||n,o=_0(o),(f=Ui.get(f))&&zd(o,f),d=d.createElement("link"),W(d);var E=d;E._p=new Promise(function(C,k){E.onload=C,E.onerror=k}),kn(d,"link",o),r.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=Nu.bind(t),n.addEventListener("load",r),n.addEventListener("error",r))}}var Bd=0;function LM(t,n){return t.stylesheets&&t.count===0&&Pu(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var o=setTimeout(function(){if(t.stylesheets&&Pu(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&Bd===0&&(Bd=62500*dM());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Pu(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>Bd?50:800)+n);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(f)}}:null}function Nu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Pu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ou=null;function Pu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ou=new Map,n.forEach(NM,t),Ou=null,Nu.call(t))}function NM(t,n){if(!(n.state.loading&4)){var r=Ou.get(t);if(r)var o=r.get(null);else{r=new Map,Ou.set(t,r);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var E=f[d];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(r.set(E.dataset.precedence,E),o=E)}o&&r.set(null,o)}f=n.instance,E=f.getAttribute("data-precedence"),d=r.get(E)||o,d===o&&r.set(null,f),r.set(E,f),this.count++,o=Nu.bind(this),f.addEventListener("load",o),f.addEventListener("error",o),d?d.parentNode.insertBefore(f,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),n.state.loading|=4}}var Ko={$$typeof:U,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function OM(t,n,r,o,f,d,E,C,k){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Lt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lt(0),this.hiddenUpdates=Lt(null),this.identifierPrefix=o,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function E0(t,n,r,o,f,d,E,C,k,ue,ye,Ee){return t=new OM(t,n,r,E,k,ue,ye,Ee,C),n=1,d===!0&&(n|=24),d=pi(3,null,null,n),t.current=d,d.stateNode=t,n=_f(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:r,cache:n},Mf(d),t}function b0(t){return t?(t=ps,t):ps}function T0(t,n,r,o,f,d){f=b0(f),o.context===null?o.context=f:o.pendingContext=f,o=er(n),o.payload={element:r},d=d===void 0?null:d,d!==null&&(o.callback=d),r=tr(t,o,n),r!==null&&(oi(r,t,n),Co(r,t,n))}function A0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<n?r:n}}function Hd(t,n){A0(t,n),(t=t.alternate)&&A0(t,n)}function R0(t){if(t.tag===13||t.tag===31){var n=Nr(t,67108864);n!==null&&oi(n,t,67108864),Hd(t,67108864)}}function C0(t){if(t.tag===13||t.tag===31){var n=xi();n=Q(n);var r=Nr(t,n);r!==null&&oi(r,t,n),Hd(t,n)}}var Fu=!0;function PM(t,n,r,o){var f=O.T;O.T=null;var d=I.p;try{I.p=2,Gd(t,n,r,o)}finally{I.p=d,O.T=f}}function FM(t,n,r,o){var f=O.T;O.T=null;var d=I.p;try{I.p=8,Gd(t,n,r,o)}finally{I.p=d,O.T=f}}function Gd(t,n,r,o){if(Fu){var f=Vd(o);if(f===null)Rd(t,n,o,zu,r),D0(t,o);else if(IM(f,t,n,r,o))o.stopPropagation();else if(D0(t,o),n&4&&-1<zM.indexOf(t)){for(;f!==null;){var d=gn(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var E=Ce(d.pendingLanes);if(E!==0){var C=d;for(C.pendingLanes|=2,C.entangledLanes|=2;E;){var k=1<<31-Ve(E);C.entanglements[1]|=k,E&=~k}ra(d),(Jt&6)===0&&(xu=x()+500,Xo(0))}}break;case 31:case 13:C=Nr(d,2),C!==null&&oi(C,d,2),Su(),Hd(d,2)}if(d=Vd(o),d===null&&Rd(t,n,o,zu,r),d===f)break;f=d}f!==null&&o.stopPropagation()}else Rd(t,n,o,null,r)}}function Vd(t){return t=kc(t),kd(t)}var zu=null;function kd(t){if(zu=null,t=fn(t),t!==null){var n=u(t);if(n===null)t=null;else{var r=n.tag;if(r===13){if(t=c(n),t!==null)return t;t=null}else if(r===31){if(t=h(n),t!==null)return t;t=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return zu=t,null}function w0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(F()){case J:return 2;case ge:return 8;case fe:case Pe:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var Xd=!1,dr=null,hr=null,pr=null,Qo=new Map,Jo=new Map,mr=[],zM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function D0(t,n){switch(t){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":Qo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(n.pointerId)}}function $o(t,n,r,o,f,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:d,targetContainers:[f]},n!==null&&(n=gn(n),n!==null&&R0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),t)}function IM(t,n,r,o,f){switch(n){case"focusin":return dr=$o(dr,t,n,r,o,f),!0;case"dragenter":return hr=$o(hr,t,n,r,o,f),!0;case"mouseover":return pr=$o(pr,t,n,r,o,f),!0;case"pointerover":var d=f.pointerId;return Qo.set(d,$o(Qo.get(d)||null,t,n,r,o,f)),!0;case"gotpointercapture":return d=f.pointerId,Jo.set(d,$o(Jo.get(d)||null,t,n,r,o,f)),!0}return!1}function U0(t){var n=fn(t.target);if(n!==null){var r=u(n);if(r!==null){if(n=r.tag,n===13){if(n=c(r),n!==null){t.blockedOn=n,Ne(t.priority,function(){C0(r)});return}}else if(n===31){if(n=h(r),n!==null){t.blockedOn=n,Ne(t.priority,function(){C0(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Iu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var r=Vd(t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);Vc=o,r.target.dispatchEvent(o),Vc=null}else return n=gn(r),n!==null&&R0(n),t.blockedOn=r,!1;n.shift()}return!0}function L0(t,n,r){Iu(t)&&r.delete(n)}function BM(){Xd=!1,dr!==null&&Iu(dr)&&(dr=null),hr!==null&&Iu(hr)&&(hr=null),pr!==null&&Iu(pr)&&(pr=null),Qo.forEach(L0),Jo.forEach(L0)}function Bu(t,n){t.blockedOn===n&&(t.blockedOn=null,Xd||(Xd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,BM)))}var Hu=null;function N0(t){Hu!==t&&(Hu=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Hu===t&&(Hu=null);for(var n=0;n<t.length;n+=3){var r=t[n],o=t[n+1],f=t[n+2];if(typeof o!="function"){if(kd(o||r)===null)continue;break}var d=gn(r);d!==null&&(t.splice(n,3),n-=3,Vf(d,{pending:!0,data:f,method:r.method,action:o},o,f))}}))}function Is(t){function n(k){return Bu(k,t)}dr!==null&&Bu(dr,t),hr!==null&&Bu(hr,t),pr!==null&&Bu(pr,t),Qo.forEach(n),Jo.forEach(n);for(var r=0;r<mr.length;r++){var o=mr[r];o.blockedOn===t&&(o.blockedOn=null)}for(;0<mr.length&&(r=mr[0],r.blockedOn===null);)U0(r),r.blockedOn===null&&mr.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var f=r[o],d=r[o+1],E=f[Xe]||null;if(typeof d=="function")E||N0(r);else if(E){var C=null;if(d&&d.hasAttribute("formAction")){if(f=d,E=d[Xe]||null)C=E.formAction;else if(kd(f)!==null)continue}else C=E.action;typeof C=="function"?r[o+1]=C:(r.splice(o,3),o-=3),N0(r)}}}function O0(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(E){return f=E})},focusReset:"manual",scroll:"manual"})}function n(){f!==null&&(f(),f=null),o||setTimeout(r,20)}function r(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(r,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),f!==null&&(f(),f=null)}}}function Wd(t){this._internalRoot=t}Gu.prototype.render=Wd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var r=n.current,o=xi();T0(r,o,t,n,null,null)},Gu.prototype.unmount=Wd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;T0(t.current,2,null,t,null,null),Su(),n[Ke]=null}};function Gu(t){this._internalRoot=t}Gu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ae();t={blockedOn:null,target:t,priority:n};for(var r=0;r<mr.length&&n!==0&&n<mr[r].priority;r++);mr.splice(r,0,t),r===0&&U0(t)}};var P0=e.version;if(P0!=="19.2.3")throw Error(s(527,P0,"19.2.3"));I.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var HM={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vu.isDisabled&&Vu.supportsFiber)try{we=Vu.inject(HM),De=Vu}catch{}}return tl.createRoot=function(t,n){if(!l(t))throw Error(s(299));var r=!1,o="",f=Vg,d=kg,E=Xg;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(E=n.onRecoverableError)),n=E0(t,1,!1,null,null,r,o,null,f,d,E,O0),t[Ke]=n.current,Ad(t),new Wd(n)},tl.hydrateRoot=function(t,n,r){if(!l(t))throw Error(s(299));var o=!1,f="",d=Vg,E=kg,C=Xg,k=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(E=r.onCaughtError),r.onRecoverableError!==void 0&&(C=r.onRecoverableError),r.formState!==void 0&&(k=r.formState)),n=E0(t,1,!0,n,r??null,o,f,k,d,E,C,O0),n.context=b0(null),r=n.current,o=xi(),o=Q(o),f=er(o),f.callback=null,tr(r,f,o),r=o,n.current.lanes=r,An(n,r),ra(n),t[Ke]=n.current,Ad(t),new Gu(n)},tl.version="19.2.3",tl}var W0;function $M(){if(W0)return jd.exports;W0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),jd.exports=JM(),jd.exports}var eE=$M();const Mx=(...a)=>a.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();const tE=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const nE=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase());const q0=a=>{const e=nE(a);return e.charAt(0).toUpperCase()+e.slice(1)};var iE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const aE=a=>{for(const e in a)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};const rE=se.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:c,...h},m)=>se.createElement("svg",{ref:m,...iE,width:e,height:e,stroke:a,strokeWidth:s?Number(i)*24/Number(e):i,className:Mx("lucide",l),...!u&&!aE(h)&&{"aria-hidden":"true"},...h},[...c.map(([p,_])=>se.createElement(p,_)),...Array.isArray(u)?u:[u]]));const Fp=(a,e)=>{const i=se.forwardRef(({className:s,...l},u)=>se.createElement(rE,{ref:u,iconNode:e,className:Mx(`lucide-${tE(q0(a))}`,`lucide-${a}`,s),...l}));return i.displayName=q0(a),i};const sE=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],oE=Fp("chevron-left",sE);const lE=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],uE=Fp("chevron-right",lE);const cE=[["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],fE=Fp("trash",cE);var Ex=a=>{throw TypeError(a)},dE=(a,e,i)=>e.has(a)||Ex("Cannot "+i),Jd=(a,e,i)=>(dE(a,e,"read from private field"),i?i.call(a):e.get(a)),hE=(a,e,i)=>e.has(a)?Ex("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(a):e.set(a,i),Y0="popstate";function j0(a){return typeof a=="object"&&a!=null&&"pathname"in a&&"search"in a&&"hash"in a&&"state"in a&&"key"in a}function pE(a={}){function e(s,l){let u=l.state?.masked,{pathname:c,search:h,hash:m}=u||s.location;return xl("",{pathname:c,search:h,hash:m},l.state&&l.state.usr||null,l.state&&l.state.key||"default",u?{pathname:s.location.pathname,search:s.location.search,hash:s.location.hash}:void 0)}function i(s,l){return typeof l=="string"?l:fa(l)}return gE(e,i,null,a)}function Nt(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function bn(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function mE(){return Math.random().toString(36).substring(2,10)}function Z0(a,e){return{usr:a.state,key:a.key,idx:e,masked:a.unstable_mask?{pathname:a.pathname,search:a.search,hash:a.hash}:void 0}}function xl(a,e,i=null,s,l){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof e=="string"?Xa(e):e,state:i,key:e&&e.key||s||mE(),unstable_mask:l}}function fa({pathname:a="/",search:e="",hash:i=""}){return e&&e!=="?"&&(a+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(a+=i.charAt(0)==="#"?i:"#"+i),a}function Xa(a){let e={};if(a){let i=a.indexOf("#");i>=0&&(e.hash=a.substring(i),a=a.substring(0,i));let s=a.indexOf("?");s>=0&&(e.search=a.substring(s),a=a.substring(0,s)),a&&(e.pathname=a)}return e}function gE(a,e,i,s={}){let{window:l=document.defaultView,v5Compat:u=!1}=s,c=l.history,h="POP",m=null,p=_();p==null&&(p=0,c.replaceState({...c.state,idx:p},""));function _(){return(c.state||{idx:null}).idx}function v(){h="POP";let y=_(),M=y==null?null:y-p;p=y,m&&m({action:h,location:A.location,delta:M})}function g(y,M){h="PUSH";let w=j0(y)?y:xl(A.location,y,M);p=_()+1;let U=Z0(w,p),N=A.createHref(w.unstable_mask||w);try{c.pushState(U,"",N)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;l.location.assign(N)}u&&m&&m({action:h,location:A.location,delta:1})}function S(y,M){h="REPLACE";let w=j0(y)?y:xl(A.location,y,M);p=_();let U=Z0(w,p),N=A.createHref(w.unstable_mask||w);c.replaceState(U,"",N),u&&m&&m({action:h,location:A.location,delta:0})}function T(y){return bx(y)}let A={get action(){return h},get location(){return a(l,c)},listen(y){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(Y0,v),m=y,()=>{l.removeEventListener(Y0,v),m=null}},createHref(y){return e(l,y)},createURL:T,encodeLocation(y){let M=T(y);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:g,replace:S,go(y){return c.go(y)}};return A}function bx(a,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Nt(i,"No window.location.(origin|href) available to create URL");let s=typeof a=="string"?a:fa(a);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=i+s),new URL(s,i)}var hl,K0=class{constructor(a){if(hE(this,hl,new Map),a)for(let[e,i]of a)this.set(e,i)}get(a){if(Jd(this,hl).has(a))return Jd(this,hl).get(a);if(a.defaultValue!==void 0)return a.defaultValue;throw new Error("No value found for context")}set(a,e){Jd(this,hl).set(a,e)}};hl=new WeakMap;var vE=new Set(["lazy","caseSensitive","path","id","index","children"]);function _E(a){return vE.has(a)}var xE=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function yE(a){return xE.has(a)}function SE(a){return a.index===!0}function yl(a,e,i=[],s={},l=!1){return a.map((u,c)=>{let h=[...i,String(c)],m=typeof u.id=="string"?u.id:h.join("-");if(Nt(u.index!==!0||!u.children,"Cannot specify children on an index route"),Nt(l||!s[m],`Found a route id collision on id "${m}".  Route id's must be globally unique within Data Router usages`),SE(u)){let p={...u,id:m};return s[m]=Q0(p,e(p)),p}else{let p={...u,id:m,children:void 0};return s[m]=Q0(p,e(p)),u.children&&(p.children=yl(u.children,e,h,s,l)),p}})}function Q0(a,e){return Object.assign(a,{...e,...typeof e.lazy=="object"&&e.lazy!=null?{lazy:{...a.lazy,...e.lazy}}:{}})}function Er(a,e,i="/"){return pl(a,e,i,!1)}function pl(a,e,i,s){let l=typeof e=="string"?Xa(e):e,u=Ii(l.pathname||"/",i);if(u==null)return null;let c=Tx(a);EE(c);let h=null;for(let m=0;h==null&&m<c.length;++m){let p=OE(u);h=LE(c[m],p,s)}return h}function ME(a,e){let{route:i,pathname:s,params:l}=a;return{id:i.id,pathname:s,params:l,data:e[i.id],loaderData:e[i.id],handle:i.handle}}function Tx(a,e=[],i=[],s="",l=!1){let u=(c,h,m=l,p)=>{let _={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:h,route:c};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(s)&&m)return;Nt(_.relativePath.startsWith(s),`Absolute route path "${_.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(s.length)}let v=Qi([s,_.relativePath]),g=i.concat(_);c.children&&c.children.length>0&&(Nt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Tx(c.children,e,g,v,m)),!(c.path==null&&!c.index)&&e.push({path:v,score:DE(v,c.index),routesMeta:g})};return a.forEach((c,h)=>{if(c.path===""||!c.path?.includes("?"))u(c,h);else for(let m of Ax(c.path))u(c,h,!0,m)}),e}function Ax(a){let e=a.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(s.length===0)return l?[u,""]:[u];let c=Ax(s.join("/")),h=[];return h.push(...c.map(m=>m===""?u:[u,m].join("/"))),l&&h.push(...c),h.map(m=>a.startsWith("/")&&m===""?"/":m)}function EE(a){a.sort((e,i)=>e.score!==i.score?i.score-e.score:UE(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var bE=/^:[\w-]+$/,TE=3,AE=2,RE=1,CE=10,wE=-2,J0=a=>a==="*";function DE(a,e){let i=a.split("/"),s=i.length;return i.some(J0)&&(s+=wE),e&&(s+=AE),i.filter(l=>!J0(l)).reduce((l,u)=>l+(bE.test(u)?TE:u===""?RE:CE),s)}function UE(a,e){return a.length===e.length&&a.slice(0,-1).every((s,l)=>s===e[l])?a[a.length-1]-e[e.length-1]:0}function LE(a,e,i=!1){let{routesMeta:s}=a,l={},u="/",c=[];for(let h=0;h<s.length;++h){let m=s[h],p=h===s.length-1,_=u==="/"?e:e.slice(u.length)||"/",v=Ac({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},_),g=m.route;if(!v&&p&&i&&!s[s.length-1].route.index&&(v=Ac({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},_)),!v)return null;Object.assign(l,v.params),c.push({params:l,pathname:Qi([u,v.pathname]),pathnameBase:zE(Qi([u,v.pathnameBase])),route:g}),v.pathnameBase!=="/"&&(u=Qi([u,v.pathnameBase]))}return c}function Ac(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[i,s]=NE(a.path,a.caseSensitive,a.end),l=e.match(i);if(!l)return null;let u=l[0],c=u.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:s.reduce((p,{paramName:_,isOptional:v},g)=>{if(_==="*"){let T=h[g]||"";c=u.slice(0,u.length-T.length).replace(/(.)\/+$/,"$1")}const S=h[g];return v&&!S?p[_]=void 0:p[_]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:c,pattern:a}}function NE(a,e=!1,i=!0){bn(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let s=[],l="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,h,m,p,_)=>{if(s.push({paramName:h,isOptional:m!=null}),m){let v=_.charAt(p+c.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(s.push({paramName:"*"}),l+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":a!==""&&a!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function OE(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return bn(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),a}}function Ii(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=a.charAt(i);return s&&s!=="/"?null:a.slice(i)||"/"}function PE({basename:a,pathname:e}){return e==="/"?a:Qi([a,e])}var Rx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zp=a=>Rx.test(a);function FE(a,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof a=="string"?Xa(a):a,u;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?u=$0(i.substring(1),"/"):u=$0(i,e)):u=e,{pathname:u,search:IE(s),hash:BE(l)}}function $0(a,e){let i=e.replace(/\/+$/,"").split("/");return a.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function $d(a,e,i,s){return`Cannot include a '${a}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Cx(a){return a.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Ip(a){let e=Cx(a);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function Oc(a,e,i,s=!1){let l;typeof a=="string"?l=Xa(a):(l={...a},Nt(!l.pathname||!l.pathname.includes("?"),$d("?","pathname","search",l)),Nt(!l.pathname||!l.pathname.includes("#"),$d("#","pathname","hash",l)),Nt(!l.search||!l.search.includes("#"),$d("#","search","hash",l)));let u=a===""||l.pathname==="",c=u?"/":l.pathname,h;if(c==null)h=i;else{let v=e.length-1;if(!s&&c.startsWith("..")){let g=c.split("/");for(;g[0]==="..";)g.shift(),v-=1;l.pathname=g.join("/")}h=v>=0?e[v]:"/"}let m=FE(l,h),p=c&&c!=="/"&&c.endsWith("/"),_=(u||c===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||_)&&(m.pathname+="/"),m}var Qi=a=>a.join("/").replace(/\/\/+/g,"/"),zE=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),IE=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,BE=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,Tl=class{constructor(a,e,i,s=!1){this.status=a,this.statusText=e||"",this.internal=s,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function Sl(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function Al(a){return a.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var wx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Dx(a,e){let i=a;if(typeof i!="string"||!Rx.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let s=i,l=!1;if(wx)try{let u=new URL(window.location.href),c=i.startsWith("//")?new URL(u.protocol+i):new URL(i),h=Ii(c.pathname,e);c.origin===u.origin&&h!=null?i=h+c.search+c.hash:l=!0}catch{bn(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:l,to:i}}var Ar=Symbol("Uninstrumented");function HE(a,e){let i={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};a.forEach(l=>l({id:e.id,index:e.index,path:e.path,instrument(u){let c=Object.keys(i);for(let h of c)u[h]&&i[h].push(u[h])}}));let s={};if(typeof e.lazy=="function"&&i.lazy.length>0){let l=eo(i.lazy,e.lazy,()=>{});l&&(s.lazy=l)}if(typeof e.lazy=="object"){let l=e.lazy;["middleware","loader","action"].forEach(u=>{let c=l[u],h=i[`lazy.${u}`];if(typeof c=="function"&&h.length>0){let m=eo(h,c,()=>{});m&&(s.lazy=Object.assign(s.lazy||{},{[u]:m}))}})}return["loader","action"].forEach(l=>{let u=e[l];if(typeof u=="function"&&i[l].length>0){let c=u[Ar]??u,h=eo(i[l],c,(...m)=>e_(m[0]));h&&(l==="loader"&&c.hydrate===!0&&(h.hydrate=!0),h[Ar]=c,s[l]=h)}}),e.middleware&&e.middleware.length>0&&i.middleware.length>0&&(s.middleware=e.middleware.map(l=>{let u=l[Ar]??l,c=eo(i.middleware,u,(...h)=>e_(h[0]));return c?(c[Ar]=u,c):l})),s}function GE(a,e){let i={navigate:[],fetch:[]};if(e.forEach(s=>s({instrument(l){let u=Object.keys(l);for(let c of u)l[c]&&i[c].push(l[c])}})),i.navigate.length>0){let s=a.navigate[Ar]??a.navigate,l=eo(i.navigate,s,(...u)=>{let[c,h]=u;return{to:typeof c=="number"||typeof c=="string"?c:c?fa(c):".",...t_(a,h??{})}});l&&(l[Ar]=s,a.navigate=l)}if(i.fetch.length>0){let s=a.fetch[Ar]??a.fetch,l=eo(i.fetch,s,(...u)=>{let[c,,h,m]=u;return{href:h??".",fetcherKey:c,...t_(a,m??{})}});l&&(l[Ar]=s,a.fetch=l)}return a}function eo(a,e,i){return a.length===0?null:async(...s)=>{let l=await Ux(a,i(...s),()=>e(...s),a.length-1);if(l.type==="error")throw l.value;return l.value}}async function Ux(a,e,i,s){let l=a[s],u;if(l){let c,h=async()=>(c?console.error("You cannot call instrumented handlers more than once"):c=Ux(a,e,i,s-1),u=await c,Nt(u,"Expected a result"),u.type==="error"&&u.value instanceof Error?{status:"error",error:u.value}:{status:"success",error:void 0});try{await l(h,e)}catch(m){console.error("An instrumentation function threw an error:",m)}c||await h(),await c}else try{u={type:"success",value:await i()}}catch(c){u={type:"error",value:c}}return u||{type:"error",value:new Error("No result assigned in instrumentation chain.")}}function e_(a){let{request:e,context:i,params:s,unstable_pattern:l}=a;return{request:VE(e),params:{...s},unstable_pattern:l,context:kE(i)}}function t_(a,e){return{currentUrl:fa(a.state.location),..."formMethod"in e?{formMethod:e.formMethod}:{},..."formEncType"in e?{formEncType:e.formEncType}:{},..."formData"in e?{formData:e.formData}:{},..."body"in e?{body:e.body}:{}}}function VE(a){return{method:a.method,url:a.url,headers:{get:(...e)=>a.headers.get(...e)}}}function kE(a){if(WE(a)){let e={...a};return Object.freeze(e),e}else return{get:e=>a.get(e)}}var XE=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function WE(a){if(a===null||typeof a!="object")return!1;const e=Object.getPrototypeOf(a);return e===Object.prototype||e===null||Object.getOwnPropertyNames(e).sort().join("\0")===XE}var Lx=["POST","PUT","PATCH","DELETE"],qE=new Set(Lx),YE=["GET",...Lx],jE=new Set(YE),Nx=new Set([301,302,303,307,308]),ZE=new Set([307,308]),eh={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},KE={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},nl={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},QE=a=>({hasErrorBoundary:!!a.hasErrorBoundary}),Ox="remix-router-transitions",Px=Symbol("ResetLoaderData");function JE(a){const e=a.window?a.window:typeof window<"u"?window:void 0,i=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u";Nt(a.routes.length>0,"You must provide a non-empty routes array to createRouter");let s=a.hydrationRouteProperties||[],l=a.mapRouteProperties||QE,u=l;if(a.unstable_instrumentations){let V=a.unstable_instrumentations;u=Q=>({...l(Q),...HE(V.map(he=>he.route).filter(Boolean),Q)})}let c={},h=yl(a.routes,u,void 0,c),m,p=a.basename||"/";p.startsWith("/")||(p=`/${p}`);let _=a.dataStrategy||ib,v={...a.future},g=null,S=new Set,T=null,A=null,y=null,M=a.hydrationData!=null,w=Er(h,a.history.location,p),U=!1,N=null,H,B;if(w==null&&!a.patchRoutesOnNavigation){let V=Ni(404,{pathname:a.history.location.pathname}),{matches:Q,route:he}=ku(h);H=!0,B=!H,w=Q,N={[he.id]:V}}else if(w&&!a.hydrationData&&Lt(w,h,a.history.location.pathname).active&&(w=null),w)if(w.some(V=>V.route.lazy))H=!1,B=!H;else if(!w.some(V=>Bp(V.route)))H=!0,B=!H;else{let V=a.hydrationData?a.hydrationData.loaderData:null,Q=a.hydrationData?a.hydrationData.errors:null,he=w;if(Q){let Ae=w.findIndex(Ne=>Q[Ne.route.id]!==void 0);he=he.slice(0,Ae+1)}B=!1,H=he.every(Ae=>{let Ne=Fx(Ae.route,V,Q);return B=B||Ne.renderFallback,!Ne.shouldLoad})}else{H=!1,B=!H,w=[];let V=Lt(null,h,a.history.location.pathname);V.active&&V.matches&&(U=!0,w=V.matches)}let z,b={historyAction:a.history.action,location:a.history.location,matches:w,initialized:H,renderFallback:B,navigation:eh,restoreScrollPosition:a.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:a.hydrationData&&a.hydrationData.loaderData||{},actionData:a.hydrationData&&a.hydrationData.actionData||null,errors:a.hydrationData&&a.hydrationData.errors||N,fetchers:new Map,blockers:new Map},D="POP",re=null,G=!1,K,ie=!1,ee=new Map,Z=null,O=!1,I=!1,oe=new Set,ce=new Map,be=0,P=-1,Y=new Map,xe=new Set,Re=new Map,Ge=new Map,ne=new Set,Se=new Map,Te,Ze=null;function ut(){if(g=a.history.listen(({action:V,location:Q,delta:he})=>{if(Te){Te(),Te=void 0;return}bn(Se.size===0||he!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let Ae=Ye({currentLocation:b.location,nextLocation:Q,historyAction:V});if(Ae&&he!=null){let Ne=new Promise(Je=>{Te=Je});a.history.go(he*-1),Le(Ae,{state:"blocked",location:Q,proceed(){Le(Ae,{state:"proceeding",proceed:void 0,reset:void 0,location:Q}),Ne.then(()=>a.history.go(he))},reset(){let Je=new Map(b.blockers);Je.set(Ae,nl),dt({blockers:Je})}}),re?.resolve(),re=null;return}return qt(V,Q)}),i){Sb(e,ee);let V=()=>Mb(e,ee);e.addEventListener("pagehide",V),Z=()=>e.removeEventListener("pagehide",V)}return b.initialized||qt("POP",b.location,{initialHydration:!0}),z}function pt(){g&&g(),Z&&Z(),S.clear(),K&&K.abort(),b.fetchers.forEach((V,Q)=>we(Q)),b.blockers.forEach((V,Q)=>Oe(Q))}function hn(V){return S.add(V),()=>S.delete(V)}function dt(V,Q={}){V.matches&&(V.matches=V.matches.map(Ne=>{let Je=c[Ne.route.id],Fe=Ne.route;return Fe.element!==Je.element||Fe.errorElement!==Je.errorElement||Fe.hydrateFallbackElement!==Je.hydrateFallbackElement?{...Ne,route:Je}:Ne})),b={...b,...V};let he=[],Ae=[];b.fetchers.forEach((Ne,Je)=>{Ne.state==="idle"&&(ne.has(Je)?he.push(Je):Ae.push(Je))}),ne.forEach(Ne=>{!b.fetchers.has(Ne)&&!ce.has(Ne)&&he.push(Ne)}),[...S].forEach(Ne=>Ne(b,{deletedFetchers:he,newErrors:V.errors??null,viewTransitionOpts:Q.viewTransitionOpts,flushSync:Q.flushSync===!0})),he.forEach(Ne=>we(Ne)),Ae.forEach(Ne=>b.fetchers.delete(Ne))}function St(V,Q,{flushSync:he}={}){let Ae=b.actionData!=null&&b.navigation.formMethod!=null&&jn(b.navigation.formMethod)&&b.navigation.state==="loading"&&V.state?._isRedirect!==!0,Ne;Q.actionData?Object.keys(Q.actionData).length>0?Ne=Q.actionData:Ne=null:Ae?Ne=b.actionData:Ne=null;let Je=Q.loaderData?f_(b.loaderData,Q.loaderData,Q.matches||[],Q.errors):b.loaderData,Fe=b.blockers;Fe.size>0&&(Fe=new Map(Fe),Fe.forEach((ft,lt)=>Fe.set(lt,nl)));let Xe=O?!1:jt(V,Q.matches||b.matches),Ke=G===!0||b.navigation.formMethod!=null&&jn(b.navigation.formMethod)&&V.state?._isRedirect!==!0;m&&(h=m,m=void 0),O||D==="POP"||(D==="PUSH"?a.history.push(V,V.state):D==="REPLACE"&&a.history.replace(V,V.state));let ot;if(D==="POP"){let ft=ee.get(b.location.pathname);ft&&ft.has(V.pathname)?ot={currentLocation:b.location,nextLocation:V}:ee.has(V.pathname)&&(ot={currentLocation:V,nextLocation:b.location})}else if(ie){let ft=ee.get(b.location.pathname);ft?ft.add(V.pathname):(ft=new Set([V.pathname]),ee.set(b.location.pathname,ft)),ot={currentLocation:b.location,nextLocation:V}}dt({...Q,actionData:Ne,loaderData:Je,historyAction:D,location:V,initialized:!0,renderFallback:!1,navigation:eh,revalidation:"idle",restoreScrollPosition:Xe,preventScrollReset:Ke,blockers:Fe},{viewTransitionOpts:ot,flushSync:he===!0}),D="POP",G=!1,ie=!1,O=!1,I=!1,re?.resolve(),re=null,Ze?.resolve(),Ze=null}async function Ft(V,Q){if(re?.resolve(),re=null,typeof V=="number"){re||(re=m_());let nn=re.promise;return a.history.go(V),nn}let he=Ih(b.location,b.matches,p,V,Q?.fromRouteId,Q?.relative),{path:Ae,submission:Ne,error:Je}=n_(!1,he,Q),Fe;Q?.unstable_mask&&(Fe={pathname:"",search:"",hash:"",...typeof Q.unstable_mask=="string"?Xa(Q.unstable_mask):{...b.location.unstable_mask,...Q.unstable_mask}});let Xe=b.location,Ke=xl(Xe,Ae,Q&&Q.state,void 0,Fe);Ke={...Ke,...a.history.encodeLocation(Ke)};let ot=Q&&Q.replace!=null?Q.replace:void 0,ft="PUSH";ot===!0?ft="REPLACE":ot===!1||Ne!=null&&jn(Ne.formMethod)&&Ne.formAction===b.location.pathname+b.location.search&&(ft="REPLACE");let lt=Q&&"preventScrollReset"in Q?Q.preventScrollReset===!0:void 0,Wt=(Q&&Q.flushSync)===!0,wt=Ye({currentLocation:Xe,nextLocation:Ke,historyAction:ft});if(wt){Le(wt,{state:"blocked",location:Ke,proceed(){Le(wt,{state:"proceeding",proceed:void 0,reset:void 0,location:Ke}),Ft(V,Q)},reset(){let nn=new Map(b.blockers);nn.set(wt,nl),dt({blockers:nn})}});return}await qt(ft,Ke,{submission:Ne,pendingError:Je,preventScrollReset:lt,replace:Q&&Q.replace,enableViewTransition:Q&&Q.viewTransition,flushSync:Wt,callSiteDefaultShouldRevalidate:Q&&Q.unstable_defaultShouldRevalidate})}function _t(){Ze||(Ze=m_()),fe(),dt({revalidation:"loading"});let V=Ze.promise;return b.navigation.state==="submitting"?V:b.navigation.state==="idle"?(qt(b.historyAction,b.location,{startUninterruptedRevalidation:!0}),V):(qt(D||b.historyAction,b.navigation.location,{overrideNavigation:b.navigation,enableViewTransition:ie===!0}),V)}async function qt(V,Q,he){K&&K.abort(),K=null,D=V,O=(he&&he.startUninterruptedRevalidation)===!0,vt(b.location,b.matches),G=(he&&he.preventScrollReset)===!0,ie=(he&&he.enableViewTransition)===!0;let Ae=m||h,Ne=he&&he.overrideNavigation,Je=he?.initialHydration&&b.matches&&b.matches.length>0&&!U?b.matches:Er(Ae,Q,p),Fe=(he&&he.flushSync)===!0;if(Je&&b.initialized&&!I&&fb(b.location,Q)&&!(he&&he.submission&&jn(he.submission.formMethod))){St(Q,{matches:Je},{flushSync:Fe});return}let Xe=Lt(Je,Ae,Q.pathname);if(Xe.active&&Xe.matches&&(Je=Xe.matches),!Je){let{error:fn,notFoundMatches:gn,route:zt}=Ce(Q.pathname);St(Q,{matches:gn,loaderData:{},errors:{[zt.id]:fn}},{flushSync:Fe});return}K=new AbortController;let Ke=$s(a.history,Q,K.signal,he&&he.submission),ot=a.getContext?await a.getContext():new K0,ft;if(he&&he.pendingError)ft=[br(Je).route.id,{type:"error",error:he.pendingError}];else if(he&&he.submission&&jn(he.submission.formMethod)){let fn=await X(Ke,Q,he.submission,Je,ot,Xe.active,he&&he.initialHydration===!0,{replace:he.replace,flushSync:Fe});if(fn.shortCircuited)return;if(fn.pendingActionResult){let[gn,zt]=fn.pendingActionResult;if(Mi(zt)&&Sl(zt.error)&&zt.error.status===404){K=null,St(Q,{matches:fn.matches,loaderData:{},errors:{[gn]:zt.error}});return}}Je=fn.matches||Je,ft=fn.pendingActionResult,Ne=th(Q,he.submission),Fe=!1,Xe.active=!1,Ke=$s(a.history,Ke.url,Ke.signal)}let{shortCircuited:lt,matches:Wt,loaderData:wt,errors:nn}=await tn(Ke,Q,Je,ot,Xe.active,Ne,he&&he.submission,he&&he.fetcherSubmission,he&&he.replace,he&&he.initialHydration===!0,Fe,ft,he&&he.callSiteDefaultShouldRevalidate);lt||(K=null,St(Q,{matches:Wt||Je,...d_(ft),loaderData:wt,errors:nn}))}async function X(V,Q,he,Ae,Ne,Je,Fe,Xe={}){fe();let Ke=xb(Q,he);if(dt({navigation:Ke},{flushSync:Xe.flushSync===!0}),Je){let lt=await An(Ae,Q.pathname,V.signal);if(lt.type==="aborted")return{shortCircuited:!0};if(lt.type==="error"){if(lt.partialMatches.length===0){let{matches:wt,route:nn}=ku(h);return{matches:wt,pendingActionResult:[nn.id,{type:"error",error:lt.error}]}}let Wt=br(lt.partialMatches).route.id;return{matches:lt.partialMatches,pendingActionResult:[Wt,{type:"error",error:lt.error}]}}else if(lt.matches)Ae=lt.matches;else{let{notFoundMatches:Wt,error:wt,route:nn}=Ce(Q.pathname);return{matches:Wt,pendingActionResult:[nn.id,{type:"error",error:wt}]}}}let ot,ft=vc(Ae,Q);if(!ft.route.action&&!ft.route.lazy)ot={type:"error",error:Ni(405,{method:V.method,pathname:Q.pathname,routeId:ft.route.id})};else{let lt=to(u,c,V,Ae,ft,Fe?[]:s,Ne),Wt=await J(V,lt,Ne,null);if(ot=Wt[ft.route.id],!ot){for(let wt of Ae)if(Wt[wt.route.id]){ot=Wt[wt.route.id];break}}if(V.signal.aborted)return{shortCircuited:!0}}if(ts(ot)){let lt;return Xe&&Xe.replace!=null?lt=Xe.replace:lt=l_(ot.response.headers.get("Location"),new URL(V.url),p,a.history)===b.location.pathname+b.location.search,await F(V,ot,!0,{submission:he,replace:lt}),{shortCircuited:!0}}if(Mi(ot)){let lt=br(Ae,ft.route.id);return(Xe&&Xe.replace)!==!0&&(D="PUSH"),{matches:Ae,pendingActionResult:[lt.route.id,ot,ft.route.id]}}return{matches:Ae,pendingActionResult:[ft.route.id,ot]}}async function tn(V,Q,he,Ae,Ne,Je,Fe,Xe,Ke,ot,ft,lt,Wt){let wt=Je||th(Q,Fe),nn=Fe||Xe||p_(wt),fn=!O&&!ot;if(Ne){if(fn){let rt=Ut(lt);dt({navigation:wt,...rt!==void 0?{actionData:rt}:{}},{flushSync:ft})}let Be=await An(he,Q.pathname,V.signal);if(Be.type==="aborted")return{shortCircuited:!0};if(Be.type==="error"){if(Be.partialMatches.length===0){let{matches:je,route:gt}=ku(h);return{matches:je,loaderData:{},errors:{[gt.id]:Be.error}}}let rt=br(Be.partialMatches).route.id;return{matches:Be.partialMatches,loaderData:{},errors:{[rt]:Be.error}}}else if(Be.matches)he=Be.matches;else{let{error:rt,notFoundMatches:je,route:gt}=Ce(Q.pathname);return{matches:je,loaderData:{},errors:{[gt.id]:rt}}}}let gn=m||h,{dsMatches:zt,revalidatingFetchers:R}=i_(V,Ae,u,c,a.history,b,he,nn,Q,ot?[]:s,ot===!0,I,oe,ne,Re,xe,gn,p,a.patchRoutesOnNavigation!=null,lt,Wt);if(P=++be,!a.dataStrategy&&!zt.some(Be=>Be.shouldLoad)&&!zt.some(Be=>Be.route.middleware&&Be.route.middleware.length>0)&&R.length===0){let Be=qe();return St(Q,{matches:he,loaderData:{},errors:lt&&Mi(lt[1])?{[lt[0]]:lt[1].error}:null,...d_(lt),...Be?{fetchers:new Map(b.fetchers)}:{}},{flushSync:ft}),{shortCircuited:!0}}if(fn){let Be={};if(!Ne){Be.navigation=wt;let rt=Ut(lt);rt!==void 0&&(Be.actionData=rt)}R.length>0&&(Be.fetchers=Gt(R)),dt(Be,{flushSync:ft})}R.forEach(Be=>{He(Be.key),Be.controller&&ce.set(Be.key,Be.controller)});let W=()=>R.forEach(Be=>He(Be.key));K&&K.signal.addEventListener("abort",W);let{loaderResults:me,fetcherResults:ae}=await ge(zt,R,V,Ae);if(V.signal.aborted)return{shortCircuited:!0};K&&K.signal.removeEventListener("abort",W),R.forEach(Be=>ce.delete(Be.key));let te=Xu(me);if(te)return await F(V,te.result,!0,{replace:Ke}),{shortCircuited:!0};if(te=Xu(ae),te)return xe.add(te.key),await F(V,te.result,!0,{replace:Ke}),{shortCircuited:!0};let{loaderData:ze,errors:We}=c_(b,he,me,lt,R,ae);ot&&b.errors&&(We={...b.errors,...We});let Ie=qe(),$e=Et(P),it=Ie||$e||R.length>0;return{matches:he,loaderData:ze,errors:We,...it?{fetchers:new Map(b.fetchers)}:{}}}function Ut(V){if(V&&!Mi(V[1]))return{[V[0]]:V[1].data};if(b.actionData)return Object.keys(b.actionData).length===0?null:b.actionData}function Gt(V){return V.forEach(Q=>{let he=b.fetchers.get(Q.key),Ae=il(void 0,he?he.data:void 0);b.fetchers.set(Q.key,Ae)}),new Map(b.fetchers)}async function et(V,Q,he,Ae){He(V);let Ne=(Ae&&Ae.flushSync)===!0,Je=m||h,Fe=Ih(b.location,b.matches,p,he,Q,Ae?.relative),Xe=Er(Je,Fe,p),Ke=Lt(Xe,Je,Fe);if(Ke.active&&Ke.matches&&(Xe=Ke.matches),!Xe){Ue(V,Q,Ni(404,{pathname:Fe}),{flushSync:Ne});return}let{path:ot,submission:ft,error:lt}=n_(!0,Fe,Ae);if(lt){Ue(V,Q,lt,{flushSync:Ne});return}let Wt=a.getContext?await a.getContext():new K0,wt=(Ae&&Ae.preventScrollReset)===!0;if(ft&&jn(ft.formMethod)){await L(V,Q,ot,Xe,Wt,Ke.active,Ne,wt,ft,Ae&&Ae.unstable_defaultShouldRevalidate);return}Re.set(V,{routeId:Q,path:ot}),await x(V,Q,ot,Xe,Wt,Ke.active,Ne,wt,ft)}async function L(V,Q,he,Ae,Ne,Je,Fe,Xe,Ke,ot){fe(),Re.delete(V);let ft=b.fetchers.get(V);Pe(V,yb(Ke,ft),{flushSync:Fe});let lt=new AbortController,Wt=$s(a.history,he,lt.signal,Ke);if(Je){let xt=await An(Ae,new URL(Wt.url).pathname,Wt.signal,V);if(xt.type==="aborted")return;if(xt.type==="error"){Ue(V,Q,xt.error,{flushSync:Fe});return}else if(xt.matches)Ae=xt.matches;else{Ue(V,Q,Ni(404,{pathname:he}),{flushSync:Fe});return}}let wt=vc(Ae,he);if(!wt.route.action&&!wt.route.lazy){let xt=Ni(405,{method:Ke.formMethod,pathname:he,routeId:Q});Ue(V,Q,xt,{flushSync:Fe});return}ce.set(V,lt);let nn=be,fn=to(u,c,Wt,Ae,wt,s,Ne),gn=await J(Wt,fn,Ne,V),zt=gn[wt.route.id];if(!zt){for(let xt of fn)if(gn[xt.route.id]){zt=gn[xt.route.id];break}}if(Wt.signal.aborted){ce.get(V)===lt&&ce.delete(V);return}if(ne.has(V)){if(ts(zt)||Mi(zt)){Pe(V,Ia(void 0));return}}else{if(ts(zt))if(ce.delete(V),P>nn){Pe(V,Ia(void 0));return}else return xe.add(V),Pe(V,il(Ke)),F(Wt,zt,!1,{fetcherSubmission:Ke,preventScrollReset:Xe});if(Mi(zt)){Ue(V,Q,zt.error);return}}let R=b.navigation.location||b.location,W=$s(a.history,R,lt.signal),me=m||h,ae=b.navigation.state!=="idle"?Er(me,b.navigation.location,p):b.matches;Nt(ae,"Didn't find any matches after fetcher action");let te=++be;Y.set(V,te);let ze=il(Ke,zt.data);b.fetchers.set(V,ze);let{dsMatches:We,revalidatingFetchers:Ie}=i_(W,Ne,u,c,a.history,b,ae,Ke,R,s,!1,I,oe,ne,Re,xe,me,p,a.patchRoutesOnNavigation!=null,[wt.route.id,zt],ot);Ie.filter(xt=>xt.key!==V).forEach(xt=>{let an=xt.key,Vt=b.fetchers.get(an),Sn=il(void 0,Vt?Vt.data:void 0);b.fetchers.set(an,Sn),He(an),xt.controller&&ce.set(an,xt.controller)}),dt({fetchers:new Map(b.fetchers)});let $e=()=>Ie.forEach(xt=>He(xt.key));lt.signal.addEventListener("abort",$e);let{loaderResults:it,fetcherResults:Be}=await ge(We,Ie,W,Ne);if(lt.signal.aborted)return;if(lt.signal.removeEventListener("abort",$e),Y.delete(V),ce.delete(V),Ie.forEach(xt=>ce.delete(xt.key)),b.fetchers.has(V)){let xt=Ia(zt.data);b.fetchers.set(V,xt)}let rt=Xu(it);if(rt)return F(W,rt.result,!1,{preventScrollReset:Xe});if(rt=Xu(Be),rt)return xe.add(rt.key),F(W,rt.result,!1,{preventScrollReset:Xe});let{loaderData:je,errors:gt}=c_(b,ae,it,void 0,Ie,Be);Et(te),b.navigation.state==="loading"&&te>P?(Nt(D,"Expected pending action"),K&&K.abort(),St(b.navigation.location,{matches:ae,loaderData:je,errors:gt,fetchers:new Map(b.fetchers)})):(dt({errors:gt,loaderData:f_(b.loaderData,je,ae,gt),fetchers:new Map(b.fetchers)}),I=!1)}async function x(V,Q,he,Ae,Ne,Je,Fe,Xe,Ke){let ot=b.fetchers.get(V);Pe(V,il(Ke,ot?ot.data:void 0),{flushSync:Fe});let ft=new AbortController,lt=$s(a.history,he,ft.signal);if(Je){let zt=await An(Ae,new URL(lt.url).pathname,lt.signal,V);if(zt.type==="aborted")return;if(zt.type==="error"){Ue(V,Q,zt.error,{flushSync:Fe});return}else if(zt.matches)Ae=zt.matches;else{Ue(V,Q,Ni(404,{pathname:he}),{flushSync:Fe});return}}let Wt=vc(Ae,he);ce.set(V,ft);let wt=be,nn=to(u,c,lt,Ae,Wt,s,Ne),gn=(await J(lt,nn,Ne,V))[Wt.route.id];if(ce.get(V)===ft&&ce.delete(V),!lt.signal.aborted){if(ne.has(V)){Pe(V,Ia(void 0));return}if(ts(gn))if(P>wt){Pe(V,Ia(void 0));return}else{xe.add(V),await F(lt,gn,!1,{preventScrollReset:Xe});return}if(Mi(gn)){Ue(V,Q,gn.error);return}Pe(V,Ia(gn.data))}}async function F(V,Q,he,{submission:Ae,fetcherSubmission:Ne,preventScrollReset:Je,replace:Fe}={}){he||(re?.resolve(),re=null),Q.response.headers.has("X-Remix-Revalidate")&&(I=!0);let Xe=Q.response.headers.get("Location");Nt(Xe,"Expected a Location header on the redirect Response"),Xe=l_(Xe,new URL(V.url),p,a.history);let Ke=xl(b.location,Xe,{_isRedirect:!0});if(i){let nn=!1;if(Q.response.headers.has("X-Remix-Reload-Document"))nn=!0;else if(zp(Xe)){const fn=bx(Xe,!0);nn=fn.origin!==e.location.origin||Ii(fn.pathname,p)==null}if(nn){Fe?e.location.replace(Xe):e.location.assign(Xe);return}}K=null;let ot=Fe===!0||Q.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:ft,formAction:lt,formEncType:Wt}=b.navigation;!Ae&&!Ne&&ft&&lt&&Wt&&(Ae=p_(b.navigation));let wt=Ae||Ne;if(ZE.has(Q.response.status)&&wt&&jn(wt.formMethod))await qt(ot,Ke,{submission:{...wt,formAction:Xe},preventScrollReset:Je||G,enableViewTransition:he?ie:void 0});else{let nn=th(Ke,Ae);await qt(ot,Ke,{overrideNavigation:nn,fetcherSubmission:Ne,preventScrollReset:Je||G,enableViewTransition:he?ie:void 0})}}async function J(V,Q,he,Ae){let Ne,Je={};try{Ne=await rb(_,V,Q,Ae,he,!1)}catch(Fe){return Q.filter(Xe=>Xe.shouldLoad).forEach(Xe=>{Je[Xe.route.id]={type:"error",error:Fe}}),Je}if(V.signal.aborted)return Je;if(!jn(V.method))for(let Fe of Q){if(Ne[Fe.route.id]?.type==="error")break;!Ne.hasOwnProperty(Fe.route.id)&&!b.loaderData.hasOwnProperty(Fe.route.id)&&(!b.errors||!b.errors.hasOwnProperty(Fe.route.id))&&Fe.shouldCallHandler()&&(Ne[Fe.route.id]={type:"error",result:new Error(`No result returned from dataStrategy for route ${Fe.route.id}`)})}for(let[Fe,Xe]of Object.entries(Ne))if(mb(Xe)){let Ke=Xe.result;Je[Fe]={type:"redirect",response:ub(Ke,V,Fe,Q,p)}}else Je[Fe]=await lb(Xe);return Je}async function ge(V,Q,he,Ae){let Ne=J(he,V,Ae,null),Je=Promise.all(Q.map(async Ke=>{if(Ke.matches&&Ke.match&&Ke.request&&Ke.controller){let ft=(await J(Ke.request,Ke.matches,Ae,Ke.key))[Ke.match.route.id];return{[Ke.key]:ft}}else return Promise.resolve({[Ke.key]:{type:"error",error:Ni(404,{pathname:Ke.path})}})})),Fe=await Ne,Xe=(await Je).reduce((Ke,ot)=>Object.assign(Ke,ot),{});return{loaderResults:Fe,fetcherResults:Xe}}function fe(){I=!0,Re.forEach((V,Q)=>{ce.has(Q)&&oe.add(Q),He(Q)})}function Pe(V,Q,he={}){b.fetchers.set(V,Q),dt({fetchers:new Map(b.fetchers)},{flushSync:(he&&he.flushSync)===!0})}function Ue(V,Q,he,Ae={}){let Ne=br(b.matches,Q);we(V),dt({errors:{[Ne.route.id]:he},fetchers:new Map(b.fetchers)},{flushSync:(Ae&&Ae.flushSync)===!0})}function tt(V){return Ge.set(V,(Ge.get(V)||0)+1),ne.has(V)&&ne.delete(V),b.fetchers.get(V)||KE}function ct(V,Q){He(V,Q?.reason),Pe(V,Ia(null))}function we(V){let Q=b.fetchers.get(V);ce.has(V)&&!(Q&&Q.state==="loading"&&Y.has(V))&&He(V),Re.delete(V),Y.delete(V),xe.delete(V),ne.delete(V),oe.delete(V),b.fetchers.delete(V)}function De(V){let Q=(Ge.get(V)||0)-1;Q<=0?(Ge.delete(V),ne.add(V)):Ge.set(V,Q),dt({fetchers:new Map(b.fetchers)})}function He(V,Q){let he=ce.get(V);he&&(he.abort(Q),ce.delete(V))}function Ve(V){for(let Q of V){let he=tt(Q),Ae=Ia(he.data);b.fetchers.set(Q,Ae)}}function qe(){let V=[],Q=!1;for(let he of xe){let Ae=b.fetchers.get(he);Nt(Ae,`Expected fetcher: ${he}`),Ae.state==="loading"&&(xe.delete(he),V.push(he),Q=!0)}return Ve(V),Q}function Et(V){let Q=[];for(let[he,Ae]of Y)if(Ae<V){let Ne=b.fetchers.get(he);Nt(Ne,`Expected fetcher: ${he}`),Ne.state==="loading"&&(He(he),Y.delete(he),Q.push(he))}return Ve(Q),Q.length>0}function j(V,Q){let he=b.blockers.get(V)||nl;return Se.get(V)!==Q&&Se.set(V,Q),he}function Oe(V){b.blockers.delete(V),Se.delete(V)}function Le(V,Q){let he=b.blockers.get(V)||nl;Nt(he.state==="unblocked"&&Q.state==="blocked"||he.state==="blocked"&&Q.state==="blocked"||he.state==="blocked"&&Q.state==="proceeding"||he.state==="blocked"&&Q.state==="unblocked"||he.state==="proceeding"&&Q.state==="unblocked",`Invalid blocker state transition: ${he.state} -> ${Q.state}`);let Ae=new Map(b.blockers);Ae.set(V,Q),dt({blockers:Ae})}function Ye({currentLocation:V,nextLocation:Q,historyAction:he}){if(Se.size===0)return;Se.size>1&&bn(!1,"A router only supports one blocker at a time");let Ae=Array.from(Se.entries()),[Ne,Je]=Ae[Ae.length-1],Fe=b.blockers.get(Ne);if(!(Fe&&Fe.state==="proceeding")&&Je({currentLocation:V,nextLocation:Q,historyAction:he}))return Ne}function Ce(V){let Q=Ni(404,{pathname:V}),he=m||h,{matches:Ae,route:Ne}=ku(he);return{notFoundMatches:Ae,route:Ne,error:Q}}function _e(V,Q,he){if(T=V,y=Q,A=he||null,!M&&b.navigation===eh){M=!0;let Ae=jt(b.location,b.matches);Ae!=null&&dt({restoreScrollPosition:Ae})}return()=>{T=null,y=null,A=null}}function Qe(V,Q){return A&&A(V,Q.map(Ae=>ME(Ae,b.loaderData)))||V.key}function vt(V,Q){if(T&&y){let he=Qe(V,Q);T[he]=y()}}function jt(V,Q){if(T){let he=Qe(V,Q),Ae=T[he];if(typeof Ae=="number")return Ae}return null}function Lt(V,Q,he){if(a.patchRoutesOnNavigation)if(V){if(Object.keys(V[0].params).length>0)return{active:!0,matches:pl(Q,he,p,!0)}}else return{active:!0,matches:pl(Q,he,p,!0)||[]};return{active:!1,matches:null}}async function An(V,Q,he,Ae){if(!a.patchRoutesOnNavigation)return{type:"success",matches:V};let Ne=V;for(;;){let Je=m==null,Fe=m||h,Xe=c;try{await a.patchRoutesOnNavigation({signal:he,path:Q,matches:Ne,fetcherKey:Ae,patch:(ft,lt)=>{he.aborted||a_(ft,lt,Fe,Xe,u,!1)}})}catch(ft){return{type:"error",error:ft,partialMatches:Ne}}finally{Je&&!he.aborted&&(h=[...h])}if(he.aborted)return{type:"aborted"};let Ke=Er(Fe,Q,p),ot=null;if(Ke){if(Object.keys(Ke[0].params).length===0)return{type:"success",matches:Ke};if(ot=pl(Fe,Q,p,!0),!(ot&&Ne.length<ot.length&&ti(Ne,ot.slice(0,Ne.length))))return{type:"success",matches:Ke}}if(ot||(ot=pl(Fe,Q,p,!0)),!ot||ti(Ne,ot))return{type:"success",matches:null};Ne=ot}}function ti(V,Q){return V.length===Q.length&&V.every((he,Ae)=>he.route.id===Q[Ae].route.id)}function wr(V){c={},m=yl(V,u,void 0,c)}function Ya(V,Q,he=!1){let Ae=m==null;a_(V,Q,m||h,c,u,he),Ae&&(h=[...h],dt({}))}return z={get basename(){return p},get future(){return v},get state(){return b},get routes(){return h},get window(){return e},initialize:ut,subscribe:hn,enableScrollRestoration:_e,navigate:Ft,fetch:et,revalidate:_t,createHref:V=>a.history.createHref(V),encodeLocation:V=>a.history.encodeLocation(V),getFetcher:tt,resetFetcher:ct,deleteFetcher:De,dispose:pt,getBlocker:j,deleteBlocker:Oe,patchRoutes:Ya,_internalFetchControllers:ce,_internalSetRoutes:wr,_internalSetStateDoNotUseOrYouWillBreakYourApp(V){dt(V)}},a.unstable_instrumentations&&(z=GE(z,a.unstable_instrumentations.map(V=>V.router).filter(Boolean))),z}function $E(a){return a!=null&&("formData"in a&&a.formData!=null||"body"in a&&a.body!==void 0)}function Ih(a,e,i,s,l,u){let c,h;if(l){c=[];for(let p of e)if(c.push(p),p.route.id===l){h=p;break}}else c=e,h=e[e.length-1];let m=Oc(s||".",Ip(c),Ii(a.pathname,i)||a.pathname,u==="path");if(s==null&&(m.search=a.search,m.hash=a.hash),(s==null||s===""||s===".")&&h){let p=Gp(m.search);if(h.route.index&&!p)m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index";else if(!h.route.index&&p){let _=new URLSearchParams(m.search),v=_.getAll("index");_.delete("index"),v.filter(S=>S).forEach(S=>_.append("index",S));let g=_.toString();m.search=g?`?${g}`:""}}return i!=="/"&&(m.pathname=PE({basename:i,pathname:m.pathname})),fa(m)}function n_(a,e,i){if(!i||!$E(i))return{path:e};if(i.formMethod&&!_b(i.formMethod))return{path:e,error:Ni(405,{method:i.formMethod})};let s=()=>({path:e,error:Ni(400,{type:"invalid-body"})}),u=(i.formMethod||"get").toUpperCase(),c=Vx(e);if(i.body!==void 0){if(i.formEncType==="text/plain"){if(!jn(u))return s();let v=typeof i.body=="string"?i.body:i.body instanceof FormData||i.body instanceof URLSearchParams?Array.from(i.body.entries()).reduce((g,[S,T])=>`${g}${S}=${T}
`,""):String(i.body);return{path:e,submission:{formMethod:u,formAction:c,formEncType:i.formEncType,formData:void 0,json:void 0,text:v}}}else if(i.formEncType==="application/json"){if(!jn(u))return s();try{let v=typeof i.body=="string"?JSON.parse(i.body):i.body;return{path:e,submission:{formMethod:u,formAction:c,formEncType:i.formEncType,formData:void 0,json:v,text:void 0}}}catch{return s()}}}Nt(typeof FormData=="function","FormData is not available in this environment");let h,m;if(i.formData)h=Hh(i.formData),m=i.formData;else if(i.body instanceof FormData)h=Hh(i.body),m=i.body;else if(i.body instanceof URLSearchParams)h=i.body,m=u_(h);else if(i.body==null)h=new URLSearchParams,m=new FormData;else try{h=new URLSearchParams(i.body),m=u_(h)}catch{return s()}let p={formMethod:u,formAction:c,formEncType:i&&i.formEncType||"application/x-www-form-urlencoded",formData:m,json:void 0,text:void 0};if(jn(p.formMethod))return{path:e,submission:p};let _=Xa(e);return a&&_.search&&Gp(_.search)&&h.append("index",""),_.search=`?${h}`,{path:fa(_),submission:p}}function i_(a,e,i,s,l,u,c,h,m,p,_,v,g,S,T,A,y,M,w,U,N){let H=U?Mi(U[1])?U[1].error:U[1].data:void 0,B=l.createURL(u.location),z=l.createURL(m),b;if(_&&u.errors){let Z=Object.keys(u.errors)[0];b=c.findIndex(O=>O.route.id===Z)}else if(U&&Mi(U[1])){let Z=U[0];b=c.findIndex(O=>O.route.id===Z)-1}let D=U?U[1].statusCode:void 0,re=D&&D>=400,G={currentUrl:B,currentParams:u.matches[0]?.params||{},nextUrl:z,nextParams:c[0].params,...h,actionResult:H,actionStatus:D},K=Al(c),ie=c.map((Z,O)=>{let{route:I}=Z,oe=null;if(b!=null&&O>b)oe=!1;else if(I.lazy)oe=!0;else if(!Bp(I))oe=!1;else if(_){let{shouldLoad:Y}=Fx(I,u.loaderData,u.errors);oe=Y}else eb(u.loaderData,u.matches[O],Z)&&(oe=!0);if(oe!==null)return Bh(i,s,a,K,Z,p,e,oe);let ce=!1;typeof N=="boolean"?ce=N:re?ce=!1:(v||B.pathname+B.search===z.pathname+z.search||B.search!==z.search||tb(u.matches[O],Z))&&(ce=!0);let be={...G,defaultShouldRevalidate:ce},P=_l(Z,be);return Bh(i,s,a,K,Z,p,e,P,be,N)}),ee=[];return T.forEach((Z,O)=>{if(_||!c.some(Re=>Re.route.id===Z.routeId)||S.has(O))return;let I=u.fetchers.get(O),oe=I&&I.state!=="idle"&&I.data===void 0,ce=Er(y,Z.path,M);if(!ce){if(w&&oe)return;ee.push({key:O,routeId:Z.routeId,path:Z.path,matches:null,match:null,request:null,controller:null});return}if(A.has(O))return;let be=vc(ce,Z.path),P=new AbortController,Y=$s(l,Z.path,P.signal),xe=null;if(g.has(O))g.delete(O),xe=to(i,s,Y,ce,be,p,e);else if(oe)v&&(xe=to(i,s,Y,ce,be,p,e));else{let Re;typeof N=="boolean"?Re=N:re?Re=!1:Re=v;let Ge={...G,defaultShouldRevalidate:Re};_l(be,Ge)&&(xe=to(i,s,Y,ce,be,p,e,Ge))}xe&&ee.push({key:O,routeId:Z.routeId,path:Z.path,matches:xe,match:be,request:Y,controller:P})}),{dsMatches:ie,revalidatingFetchers:ee}}function Bp(a){return a.loader!=null||a.middleware!=null&&a.middleware.length>0}function Fx(a,e,i){if(a.lazy)return{shouldLoad:!0,renderFallback:!0};if(!Bp(a))return{shouldLoad:!1,renderFallback:!1};let s=e!=null&&a.id in e,l=i!=null&&i[a.id]!==void 0;if(!s&&l)return{shouldLoad:!1,renderFallback:!1};if(typeof a.loader=="function"&&a.loader.hydrate===!0)return{shouldLoad:!0,renderFallback:!s};let u=!s&&!l;return{shouldLoad:u,renderFallback:u}}function eb(a,e,i){let s=!e||i.route.id!==e.route.id,l=!a.hasOwnProperty(i.route.id);return s||l}function tb(a,e){let i=a.route.path;return a.pathname!==e.pathname||i!=null&&i.endsWith("*")&&a.params["*"]!==e.params["*"]}function _l(a,e){if(a.route.shouldRevalidate){let i=a.route.shouldRevalidate(e);if(typeof i=="boolean")return i}return e.defaultShouldRevalidate}function a_(a,e,i,s,l,u){let c;if(a){let p=s[a];Nt(p,`No route found to patch children into: routeId = ${a}`),p.children||(p.children=[]),c=p.children}else c=i;let h=[],m=[];if(e.forEach(p=>{let _=c.find(v=>zx(p,v));_?m.push({existingRoute:_,newRoute:p}):h.push(p)}),h.length>0){let p=yl(h,l,[a||"_","patch",String(c?.length||"0")],s);c.push(...p)}if(u&&m.length>0)for(let p=0;p<m.length;p++){let{existingRoute:_,newRoute:v}=m[p],g=_,[S]=yl([v],l,[],{},!0);Object.assign(g,{element:S.element?S.element:g.element,errorElement:S.errorElement?S.errorElement:g.errorElement,hydrateFallbackElement:S.hydrateFallbackElement?S.hydrateFallbackElement:g.hydrateFallbackElement})}}function zx(a,e){return"id"in a&&"id"in e&&a.id===e.id?!0:a.index===e.index&&a.path===e.path&&a.caseSensitive===e.caseSensitive?(!a.children||a.children.length===0)&&(!e.children||e.children.length===0)?!0:a.children?.every((i,s)=>e.children?.some(l=>zx(i,l)))??!1:!1}var r_=new WeakMap,Ix=({key:a,route:e,manifest:i,mapRouteProperties:s})=>{let l=i[e.id];if(Nt(l,"No route found in manifest"),!l.lazy||typeof l.lazy!="object")return;let u=l.lazy[a];if(!u)return;let c=r_.get(l);c||(c={},r_.set(l,c));let h=c[a];if(h)return h;let m=(async()=>{let p=_E(a),v=l[a]!==void 0&&a!=="hasErrorBoundary";if(p)bn(!p,"Route property "+a+" is not a supported lazy route property. This property will be ignored."),c[a]=Promise.resolve();else if(v)bn(!1,`Route "${l.id}" has a static property "${a}" defined. The lazy property will be ignored.`);else{let g=await u();g!=null&&(Object.assign(l,{[a]:g}),Object.assign(l,s(l)))}typeof l.lazy=="object"&&(l.lazy[a]=void 0,Object.values(l.lazy).every(g=>g===void 0)&&(l.lazy=void 0))})();return c[a]=m,m},s_=new WeakMap;function nb(a,e,i,s,l){let u=i[a.id];if(Nt(u,"No route found in manifest"),!a.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof a.lazy=="function"){let _=s_.get(u);if(_)return{lazyRoutePromise:_,lazyHandlerPromise:_};let v=(async()=>{Nt(typeof a.lazy=="function","No lazy route function found");let g=await a.lazy(),S={};for(let T in g){let A=g[T];if(A===void 0)continue;let y=yE(T),w=u[T]!==void 0&&T!=="hasErrorBoundary";y?bn(!y,"Route property "+T+" is not a supported property to be returned from a lazy route function. This property will be ignored."):w?bn(!w,`Route "${u.id}" has a static property "${T}" defined but its lazy function is also returning a value for this property. The lazy route property "${T}" will be ignored.`):S[T]=A}Object.assign(u,S),Object.assign(u,{...s(u),lazy:void 0})})();return s_.set(u,v),v.catch(()=>{}),{lazyRoutePromise:v,lazyHandlerPromise:v}}let c=Object.keys(a.lazy),h=[],m;for(let _ of c){if(l&&l.includes(_))continue;let v=Ix({key:_,route:a,manifest:i,mapRouteProperties:s});v&&(h.push(v),_===e&&(m=v))}let p=h.length>0?Promise.all(h).then(()=>{}):void 0;return p?.catch(()=>{}),m?.catch(()=>{}),{lazyRoutePromise:p,lazyHandlerPromise:m}}async function o_(a){let e=a.matches.filter(l=>l.shouldLoad),i={};return(await Promise.all(e.map(l=>l.resolve()))).forEach((l,u)=>{i[e[u].route.id]=l}),i}async function ib(a){return a.matches.some(e=>e.route.middleware)?Bx(a,()=>o_(a)):o_(a)}function Bx(a,e){return ab(a,e,s=>{if(vb(s))throw s;return s},hb,i);function i(s,l,u){if(u)return Promise.resolve(Object.assign(u.value,{[l]:{type:"error",result:s}}));{let{matches:c}=a,h=Math.min(Math.max(c.findIndex(p=>p.route.id===l),0),Math.max(c.findIndex(p=>p.shouldCallHandler()),0)),m=br(c,c[h].route.id).route.id;return Promise.resolve({[m]:{type:"error",result:s}})}}}async function ab(a,e,i,s,l){let{matches:u,request:c,params:h,context:m,unstable_pattern:p}=a,_=u.flatMap(g=>g.route.middleware?g.route.middleware.map(S=>[g.route.id,S]):[]);return await Hx({request:c,params:h,context:m,unstable_pattern:p},_,e,i,s,l)}async function Hx(a,e,i,s,l,u,c=0){let{request:h}=a;if(h.signal.aborted)throw h.signal.reason??new Error(`Request aborted: ${h.method} ${h.url}`);let m=e[c];if(!m)return await i();let[p,_]=m,v,g=async()=>{if(v)throw new Error("You may only call `next()` once per middleware");try{return v={value:await Hx(a,e,i,s,l,u,c+1)},v.value}catch(S){return v={value:await u(S,p,v)},v.value}};try{let S=await _(a,g),T=S!=null?s(S):void 0;return l(T)?T:v?T??v.value:(v={value:await g()},v.value)}catch(S){return await u(S,p,v)}}function Gx(a,e,i,s,l){let u=Ix({key:"middleware",route:s.route,manifest:e,mapRouteProperties:a}),c=nb(s.route,jn(i.method)?"action":"loader",e,a,l);return{middleware:u,route:c.lazyRoutePromise,handler:c.lazyHandlerPromise}}function Bh(a,e,i,s,l,u,c,h,m=null,p){let _=!1,v=Gx(a,e,i,l,u);return{...l,_lazyPromises:v,shouldLoad:h,shouldRevalidateArgs:m,shouldCallHandler(g){return _=!0,m?typeof p=="boolean"?_l(l,{...m,defaultShouldRevalidate:p}):typeof g=="boolean"?_l(l,{...m,defaultShouldRevalidate:g}):_l(l,m):h},resolve(g){let{lazy:S,loader:T,middleware:A}=l.route,y=_||h||g&&!jn(i.method)&&(S||T),M=A&&A.length>0&&!T&&!S;return y&&(jn(i.method)||!M)?sb({request:i,unstable_pattern:s,match:l,lazyHandlerPromise:v?.handler,lazyRoutePromise:v?.route,handlerOverride:g,scopedContext:c}):Promise.resolve({type:"data",result:void 0})}}}function to(a,e,i,s,l,u,c,h=null){return s.map(m=>m.route.id!==l.route.id?{...m,shouldLoad:!1,shouldRevalidateArgs:h,shouldCallHandler:()=>!1,_lazyPromises:Gx(a,e,i,m,u),resolve:()=>Promise.resolve({type:"data",result:void 0})}:Bh(a,e,i,Al(s),m,u,c,!0,h))}async function rb(a,e,i,s,l,u){i.some(p=>p._lazyPromises?.middleware)&&await Promise.all(i.map(p=>p._lazyPromises?.middleware));let c={request:e,unstable_pattern:Al(i),params:i[0].params,context:l,matches:i},m=await a({...c,fetcherKey:s,runClientMiddleware:p=>{let _=c;return Bx(_,()=>p({..._,fetcherKey:s,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(i.flatMap(p=>[p._lazyPromises?.handler,p._lazyPromises?.route]))}catch{}return m}async function sb({request:a,unstable_pattern:e,match:i,lazyHandlerPromise:s,lazyRoutePromise:l,handlerOverride:u,scopedContext:c}){let h,m,p=jn(a.method),_=p?"action":"loader",v=g=>{let S,T=new Promise((M,w)=>S=w);m=()=>S(),a.signal.addEventListener("abort",m);let A=M=>typeof g!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${_}" [routeId: ${i.route.id}]`)):g({request:a,unstable_pattern:e,params:i.params,context:c},...M!==void 0?[M]:[]),y=(async()=>{try{return{type:"data",result:await(u?u(w=>A(w)):A())}}catch(M){return{type:"error",result:M}}})();return Promise.race([y,T])};try{let g=p?i.route.action:i.route.loader;if(s||l)if(g){let S,[T]=await Promise.all([v(g).catch(A=>{S=A}),s,l]);if(S!==void 0)throw S;h=T}else{await s;let S=p?i.route.action:i.route.loader;if(S)[h]=await Promise.all([v(S),l]);else if(_==="action"){let T=new URL(a.url),A=T.pathname+T.search;throw Ni(405,{method:a.method,pathname:A,routeId:i.route.id})}else return{type:"data",result:void 0}}else if(g)h=await v(g);else{let S=new URL(a.url),T=S.pathname+S.search;throw Ni(404,{pathname:T})}}catch(g){return{type:"error",result:g}}finally{m&&a.signal.removeEventListener("abort",m)}return h}async function ob(a){let e=a.headers.get("Content-Type");return e&&/\bapplication\/json\b/.test(e)?a.body==null?null:a.json():a.text()}async function lb(a){let{result:e,type:i}=a;if(Hp(e)){let s;try{s=await ob(e)}catch(l){return{type:"error",error:l}}return i==="error"?{type:"error",error:new Tl(e.status,e.statusText,s),statusCode:e.status,headers:e.headers}:{type:"data",data:s,statusCode:e.status,headers:e.headers}}return i==="error"?h_(e)?e.data instanceof Error?{type:"error",error:e.data,statusCode:e.init?.status,headers:e.init?.headers?new Headers(e.init.headers):void 0}:{type:"error",error:db(e),statusCode:Sl(e)?e.status:void 0,headers:e.init?.headers?new Headers(e.init.headers):void 0}:{type:"error",error:e,statusCode:Sl(e)?e.status:void 0}:h_(e)?{type:"data",data:e.data,statusCode:e.init?.status,headers:e.init?.headers?new Headers(e.init.headers):void 0}:{type:"data",data:e}}function ub(a,e,i,s,l){let u=a.headers.get("Location");if(Nt(u,"Redirects returned/thrown from loaders/actions must have a Location header"),!zp(u)){let c=s.slice(0,s.findIndex(h=>h.route.id===i)+1);u=Ih(new URL(e.url),c,l,u),a.headers.set("Location",u)}return a}function l_(a,e,i,s){let l=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(zp(a)){let u=a,c=u.startsWith("//")?new URL(e.protocol+u):new URL(u);if(l.includes(c.protocol))throw new Error("Invalid redirect location");let h=Ii(c.pathname,i)!=null;if(c.origin===e.origin&&h)return c.pathname+c.search+c.hash}try{let u=s.createURL(a);if(l.includes(u.protocol))throw new Error("Invalid redirect location")}catch{}return a}function $s(a,e,i,s){let l=a.createURL(Vx(e)).toString(),u={signal:i};if(s&&jn(s.formMethod)){let{formMethod:c,formEncType:h}=s;u.method=c.toUpperCase(),h==="application/json"?(u.headers=new Headers({"Content-Type":h}),u.body=JSON.stringify(s.json)):h==="text/plain"?u.body=s.text:h==="application/x-www-form-urlencoded"&&s.formData?u.body=Hh(s.formData):u.body=s.formData}return new Request(l,u)}function Hh(a){let e=new URLSearchParams;for(let[i,s]of a.entries())e.append(i,typeof s=="string"?s:s.name);return e}function u_(a){let e=new FormData;for(let[i,s]of a.entries())e.append(i,s);return e}function cb(a,e,i,s=!1,l=!1){let u={},c=null,h,m=!1,p={},_=i&&Mi(i[1])?i[1].error:void 0;return a.forEach(v=>{if(!(v.route.id in e))return;let g=v.route.id,S=e[g];if(Nt(!ts(S),"Cannot handle redirect results in processLoaderData"),Mi(S)){let T=S.error;if(_!==void 0&&(T=_,_=void 0),c=c||{},l)c[g]=T;else{let A=br(a,g);c[A.route.id]==null&&(c[A.route.id]=T)}s||(u[g]=Px),m||(m=!0,h=Sl(S.error)?S.error.status:500),S.headers&&(p[g]=S.headers)}else u[g]=S.data,S.statusCode&&S.statusCode!==200&&!m&&(h=S.statusCode),S.headers&&(p[g]=S.headers)}),_!==void 0&&i&&(c={[i[0]]:_},i[2]&&(u[i[2]]=void 0)),{loaderData:u,errors:c,statusCode:h||200,loaderHeaders:p}}function c_(a,e,i,s,l,u){let{loaderData:c,errors:h}=cb(e,i,s);return l.filter(m=>!m.matches||m.matches.some(p=>p.shouldLoad)).forEach(m=>{let{key:p,match:_,controller:v}=m;if(v&&v.signal.aborted)return;let g=u[p];if(Nt(g,"Did not find corresponding fetcher result"),Mi(g)){let S=br(a.matches,_?.route.id);h&&h[S.route.id]||(h={...h,[S.route.id]:g.error}),a.fetchers.delete(p)}else if(ts(g))Nt(!1,"Unhandled fetcher revalidation redirect");else{let S=Ia(g.data);a.fetchers.set(p,S)}}),{loaderData:c,errors:h}}function f_(a,e,i,s){let l=Object.entries(e).filter(([,u])=>u!==Px).reduce((u,[c,h])=>(u[c]=h,u),{});for(let u of i){let c=u.route.id;if(!e.hasOwnProperty(c)&&a.hasOwnProperty(c)&&u.route.loader&&(l[c]=a[c]),s&&s.hasOwnProperty(c))break}return l}function d_(a){return a?Mi(a[1])?{actionData:{}}:{actionData:{[a[0]]:a[1].data}}:{}}function br(a,e){return(e?a.slice(0,a.findIndex(s=>s.route.id===e)+1):[...a]).reverse().find(s=>s.route.hasErrorBoundary===!0)||a[0]}function ku(a){let e=a.length===1?a[0]:a.find(i=>i.index||!i.path||i.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Ni(a,{pathname:e,routeId:i,method:s,type:l,message:u}={}){let c="Unknown Server Error",h="Unknown @remix-run/router error";return a===400?(c="Bad Request",s&&e&&i?h=`You made a ${s} request to "${e}" but did not provide a \`loader\` for route "${i}", so there is no way to handle the request.`:l==="invalid-body"&&(h="Unable to encode submission body")):a===403?(c="Forbidden",h=`Route "${i}" does not match URL "${e}"`):a===404?(c="Not Found",h=`No route matches URL "${e}"`):a===405&&(c="Method Not Allowed",s&&e&&i?h=`You made a ${s.toUpperCase()} request to "${e}" but did not provide an \`action\` for route "${i}", so there is no way to handle the request.`:s&&(h=`Invalid request method "${s.toUpperCase()}"`)),new Tl(a||500,c,new Error(h),!0)}function Xu(a){let e=Object.entries(a);for(let i=e.length-1;i>=0;i--){let[s,l]=e[i];if(ts(l))return{key:s,result:l}}}function Vx(a){let e=typeof a=="string"?Xa(a):a;return fa({...e,hash:""})}function fb(a,e){return a.pathname!==e.pathname||a.search!==e.search?!1:a.hash===""?e.hash!=="":a.hash===e.hash?!0:e.hash!==""}function db(a){return new Tl(a.init?.status??500,a.init?.statusText??"Internal Server Error",a.data)}function hb(a){return a!=null&&typeof a=="object"&&Object.entries(a).every(([e,i])=>typeof e=="string"&&pb(i))}function pb(a){return a!=null&&typeof a=="object"&&"type"in a&&"result"in a&&(a.type==="data"||a.type==="error")}function mb(a){return Hp(a.result)&&Nx.has(a.result.status)}function Mi(a){return a.type==="error"}function ts(a){return(a&&a.type)==="redirect"}function h_(a){return typeof a=="object"&&a!=null&&"type"in a&&"data"in a&&"init"in a&&a.type==="DataWithResponseInit"}function Hp(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.headers=="object"&&typeof a.body<"u"}function gb(a){return Nx.has(a)}function vb(a){return Hp(a)&&gb(a.status)&&a.headers.has("Location")}function _b(a){return jE.has(a.toUpperCase())}function jn(a){return qE.has(a.toUpperCase())}function Gp(a){return new URLSearchParams(a).getAll("index").some(e=>e==="")}function vc(a,e){let i=typeof e=="string"?Xa(e).search:e.search;if(a[a.length-1].route.index&&Gp(i||""))return a[a.length-1];let s=Cx(a);return s[s.length-1]}function p_(a){let{formMethod:e,formAction:i,formEncType:s,text:l,formData:u,json:c}=a;if(!(!e||!i||!s)){if(l!=null)return{formMethod:e,formAction:i,formEncType:s,formData:void 0,json:void 0,text:l};if(u!=null)return{formMethod:e,formAction:i,formEncType:s,formData:u,json:void 0,text:void 0};if(c!==void 0)return{formMethod:e,formAction:i,formEncType:s,formData:void 0,json:c,text:void 0}}}function th(a,e){return e?{state:"loading",location:a,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:a,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function xb(a,e){return{state:"submitting",location:a,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function il(a,e){return a?{state:"loading",formMethod:a.formMethod,formAction:a.formAction,formEncType:a.formEncType,formData:a.formData,json:a.json,text:a.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function yb(a,e){return{state:"submitting",formMethod:a.formMethod,formAction:a.formAction,formEncType:a.formEncType,formData:a.formData,json:a.json,text:a.text,data:e?e.data:void 0}}function Ia(a){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:a}}function Sb(a,e){try{let i=a.sessionStorage.getItem(Ox);if(i){let s=JSON.parse(i);for(let[l,u]of Object.entries(s||{}))u&&Array.isArray(u)&&e.set(l,new Set(u||[]))}}catch{}}function Mb(a,e){if(e.size>0){let i={};for(let[s,l]of e)i[s]=[...l];try{a.sessionStorage.setItem(Ox,JSON.stringify(i))}catch(s){bn(!1,`Failed to save applied view transitions in sessionStorage (${s}).`)}}}function m_(){let a,e,i=new Promise((s,l)=>{a=async u=>{s(u);try{await i}catch{}},e=async u=>{l(u);try{await i}catch{}}});return{promise:i,resolve:a,reject:e}}var ss=se.createContext(null);ss.displayName="DataRouter";var Rl=se.createContext(null);Rl.displayName="DataRouterState";var kx=se.createContext(!1);function Eb(){return se.useContext(kx)}var Vp=se.createContext({isTransitioning:!1});Vp.displayName="ViewTransition";var Xx=se.createContext(new Map);Xx.displayName="Fetchers";var bb=se.createContext(null);bb.displayName="Await";var Bi=se.createContext(null);Bi.displayName="Navigation";var Pc=se.createContext(null);Pc.displayName="Location";var Wa=se.createContext({outlet:null,matches:[],isDataRoute:!1});Wa.displayName="Route";var kp=se.createContext(null);kp.displayName="RouteError";var Wx="REACT_ROUTER_ERROR",Tb="REDIRECT",Ab="ROUTE_ERROR_RESPONSE";function Rb(a){if(a.startsWith(`${Wx}:${Tb}:{`))try{let e=JSON.parse(a.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function Cb(a){if(a.startsWith(`${Wx}:${Ab}:{`))try{let e=JSON.parse(a.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new Tl(e.status,e.statusText,e.data)}catch{}}function wb(a,{relative:e}={}){Nt(Cl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=se.useContext(Bi),{hash:l,pathname:u,search:c}=wl(a,{relative:e}),h=u;return i!=="/"&&(h=u==="/"?i:Qi([i,u])),s.createHref({pathname:h,search:c,hash:l})}function Cl(){return se.useContext(Pc)!=null}function qa(){return Nt(Cl(),"useLocation() may be used only in the context of a <Router> component."),se.useContext(Pc).location}var qx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Yx(a){se.useContext(Bi).static||se.useLayoutEffect(a)}function Fc(){let{isDataRoute:a}=se.useContext(Wa);return a?Vb():Db()}function Db(){Nt(Cl(),"useNavigate() may be used only in the context of a <Router> component.");let a=se.useContext(ss),{basename:e,navigator:i}=se.useContext(Bi),{matches:s}=se.useContext(Wa),{pathname:l}=qa(),u=JSON.stringify(Ip(s)),c=se.useRef(!1);return Yx(()=>{c.current=!0}),se.useCallback((m,p={})=>{if(bn(c.current,qx),!c.current)return;if(typeof m=="number"){i.go(m);return}let _=Oc(m,JSON.parse(u),l,p.relative==="path");a==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Qi([e,_.pathname])),(p.replace?i.replace:i.push)(_,p.state,p)},[e,i,u,l,a])}se.createContext(null);function wl(a,{relative:e}={}){let{matches:i}=se.useContext(Wa),{pathname:s}=qa(),l=JSON.stringify(Ip(i));return se.useMemo(()=>Oc(a,JSON.parse(l),s,e==="path"),[a,l,s,e])}function Ub(a,e,i){Nt(Cl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=se.useContext(Bi),{matches:l}=se.useContext(Wa),u=l[l.length-1],c=u?u.params:{},h=u?u.pathname:"/",m=u?u.pathnameBase:"/",p=u&&u.route;{let y=p&&p.path||"";Zx(h,!p||y.endsWith("*")||y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y==="/"?"*":`${y}/*`}">.`)}let _=qa(),v;v=_;let g=v.pathname||"/",S=g;if(m!=="/"){let y=m.replace(/^\//,"").split("/");S="/"+g.replace(/^\//,"").split("/").slice(y.length).join("/")}let T=Er(a,{pathname:S});return bn(p||T!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),bn(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Fb(T&&T.map(y=>Object.assign({},y,{params:Object.assign({},c,y.params),pathname:Qi([m,s.encodeLocation?s.encodeLocation(y.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?m:Qi([m,s.encodeLocation?s.encodeLocation(y.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathnameBase])})),l,i)}function Lb(){let a=Gb(),e=Sl(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),i=a instanceof Error?a.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",a),c=se.createElement(se.Fragment,null,se.createElement("p",null,"💿 Hey developer 👋"),se.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",se.createElement("code",{style:u},"ErrorBoundary")," or"," ",se.createElement("code",{style:u},"errorElement")," prop on your route.")),se.createElement(se.Fragment,null,se.createElement("h2",null,"Unexpected Application Error!"),se.createElement("h3",{style:{fontStyle:"italic"}},e),i?se.createElement("pre",{style:l},i):null,c)}var Nb=se.createElement(Lb,null),jx=class extends se.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,e){return e.location!==a.location||e.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:e.error,location:e.location,revalidation:a.revalidation||e.revalidation}}componentDidCatch(a,e){this.props.onError?this.props.onError(a,e):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const i=Cb(a.digest);i&&(a=i)}let e=a!==void 0?se.createElement(Wa.Provider,{value:this.props.routeContext},se.createElement(kp.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?se.createElement(Ob,{error:a},e):e}};jx.contextType=kx;var nh=new WeakMap;function Ob({children:a,error:e}){let{basename:i}=se.useContext(Bi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=Rb(e.digest);if(s){let l=nh.get(e);if(l)throw l;let u=Dx(s.location,i);if(wx&&!nh.get(e))if(u.isExternal||s.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:s.replace}));throw nh.set(e,c),c}return se.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return a}function Pb({routeContext:a,match:e,children:i}){let s=se.useContext(ss);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),se.createElement(Wa.Provider,{value:a},i)}function Fb(a,e=[],i){let s=i?.state;if(a==null){if(!s)return null;if(s.errors)a=s.matches;else if(e.length===0&&!s.initialized&&s.matches.length>0)a=s.matches;else return null}let l=a,u=s?.errors;if(u!=null){let _=l.findIndex(v=>v.route.id&&u?.[v.route.id]!==void 0);Nt(_>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,_+1))}let c=!1,h=-1;if(i&&s){c=s.renderFallback;for(let _=0;_<l.length;_++){let v=l[_];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(h=_),v.route.id){let{loaderData:g,errors:S}=s,T=v.route.loader&&!g.hasOwnProperty(v.route.id)&&(!S||S[v.route.id]===void 0);if(v.route.lazy||T){i.isStatic&&(c=!0),h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}}let m=i?.onError,p=s&&m?(_,v)=>{m(_,{location:s.location,params:s.matches?.[0]?.params??{},unstable_pattern:Al(s.matches),errorInfo:v})}:void 0;return l.reduceRight((_,v,g)=>{let S,T=!1,A=null,y=null;s&&(S=u&&v.route.id?u[v.route.id]:void 0,A=v.route.errorElement||Nb,c&&(h<0&&g===0?(Zx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,y=null):h===g&&(T=!0,y=v.route.hydrateFallbackElement||null)));let M=e.concat(l.slice(0,g+1)),w=()=>{let U;return S?U=A:T?U=y:v.route.Component?U=se.createElement(v.route.Component,null):v.route.element?U=v.route.element:U=_,se.createElement(Pb,{match:v,routeContext:{outlet:_,matches:M,isDataRoute:s!=null},children:U})};return s&&(v.route.ErrorBoundary||v.route.errorElement||g===0)?se.createElement(jx,{location:s.location,revalidation:s.revalidation,component:A,error:S,children:w(),routeContext:{outlet:null,matches:M,isDataRoute:!0},onError:p}):w()},null)}function Xp(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zb(a){let e=se.useContext(ss);return Nt(e,Xp(a)),e}function Ib(a){let e=se.useContext(Rl);return Nt(e,Xp(a)),e}function Bb(a){let e=se.useContext(Wa);return Nt(e,Xp(a)),e}function Wp(a){let e=Bb(a),i=e.matches[e.matches.length-1];return Nt(i.route.id,`${a} can only be used on routes that contain a unique "id"`),i.route.id}function Hb(){return Wp("useRouteId")}function Gb(){let a=se.useContext(kp),e=Ib("useRouteError"),i=Wp("useRouteError");return a!==void 0?a:e.errors?.[i]}function Vb(){let{router:a}=zb("useNavigate"),e=Wp("useNavigate"),i=se.useRef(!1);return Yx(()=>{i.current=!0}),se.useCallback(async(l,u={})=>{bn(i.current,qx),i.current&&(typeof l=="number"?await a.navigate(l):await a.navigate(l,{fromRouteId:e,...u}))},[a,e])}var g_={};function Zx(a,e,i){!e&&!g_[a]&&(g_[a]=!0,bn(!1,i))}var v_={};function __(a,e){!a&&!v_[e]&&(v_[e]=!0,console.warn(e))}var kb="useOptimistic",x_=jM[kb],Xb=()=>{};function Wb(a){return x_?x_(a):[a,Xb]}function qb(a){let e={hasErrorBoundary:a.hasErrorBoundary||a.ErrorBoundary!=null||a.errorElement!=null};return a.Component&&(a.element&&bn(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(e,{element:se.createElement(a.Component),Component:void 0})),a.HydrateFallback&&(a.hydrateFallbackElement&&bn(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(e,{hydrateFallbackElement:se.createElement(a.HydrateFallback),HydrateFallback:void 0})),a.ErrorBoundary&&(a.errorElement&&bn(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(e,{errorElement:se.createElement(a.ErrorBoundary),ErrorBoundary:void 0})),e}var Yb=["HydrateFallback","hydrateFallbackElement"],jb=class{constructor(){this.status="pending",this.promise=new Promise((a,e)=>{this.resolve=i=>{this.status==="pending"&&(this.status="resolved",a(i))},this.reject=i=>{this.status==="pending"&&(this.status="rejected",e(i))}})}};function Zb({router:a,flushSync:e,onError:i,unstable_useTransitions:s}){s=Eb()||s;let[u,c]=se.useState(a.state),[h,m]=Wb(u),[p,_]=se.useState(),[v,g]=se.useState({isTransitioning:!1}),[S,T]=se.useState(),[A,y]=se.useState(),[M,w]=se.useState(),U=se.useRef(new Map),N=se.useCallback((b,{deletedFetchers:D,newErrors:re,flushSync:G,viewTransitionOpts:K})=>{re&&i&&Object.values(re).forEach(ee=>i(ee,{location:b.location,params:b.matches[0]?.params??{},unstable_pattern:Al(b.matches)})),b.fetchers.forEach((ee,Z)=>{ee.data!==void 0&&U.current.set(Z,ee.data)}),D.forEach(ee=>U.current.delete(ee)),__(G===!1||e!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let ie=a.window!=null&&a.window.document!=null&&typeof a.window.document.startViewTransition=="function";if(__(K==null||ie,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!K||!ie){e&&G?e(()=>c(b)):s===!1?c(b):se.startTransition(()=>{s===!0&&m(ee=>y_(ee,b)),c(b)});return}if(e&&G){e(()=>{A&&(S?.resolve(),A.skipTransition()),g({isTransitioning:!0,flushSync:!0,currentLocation:K.currentLocation,nextLocation:K.nextLocation})});let ee=a.window.document.startViewTransition(()=>{e(()=>c(b))});ee.finished.finally(()=>{e(()=>{T(void 0),y(void 0),_(void 0),g({isTransitioning:!1})})}),e(()=>y(ee));return}A?(S?.resolve(),A.skipTransition(),w({state:b,currentLocation:K.currentLocation,nextLocation:K.nextLocation})):(_(b),g({isTransitioning:!0,flushSync:!1,currentLocation:K.currentLocation,nextLocation:K.nextLocation}))},[a.window,e,A,S,s,m,i]);se.useLayoutEffect(()=>a.subscribe(N),[a,N]),se.useEffect(()=>{v.isTransitioning&&!v.flushSync&&T(new jb)},[v]),se.useEffect(()=>{if(S&&p&&a.window){let b=p,D=S.promise,re=a.window.document.startViewTransition(async()=>{s===!1?c(b):se.startTransition(()=>{s===!0&&m(G=>y_(G,b)),c(b)}),await D});re.finished.finally(()=>{T(void 0),y(void 0),_(void 0),g({isTransitioning:!1})}),y(re)}},[p,S,a.window,s,m]),se.useEffect(()=>{S&&p&&h.location.key===p.location.key&&S.resolve()},[S,A,h.location,p]),se.useEffect(()=>{!v.isTransitioning&&M&&(_(M.state),g({isTransitioning:!0,flushSync:!1,currentLocation:M.currentLocation,nextLocation:M.nextLocation}),w(void 0))},[v.isTransitioning,M]);let H=se.useMemo(()=>({createHref:a.createHref,encodeLocation:a.encodeLocation,go:b=>a.navigate(b),push:(b,D,re)=>a.navigate(b,{state:D,preventScrollReset:re?.preventScrollReset}),replace:(b,D,re)=>a.navigate(b,{replace:!0,state:D,preventScrollReset:re?.preventScrollReset})}),[a]),B=a.basename||"/",z=se.useMemo(()=>({router:a,navigator:H,static:!1,basename:B,onError:i}),[a,H,B,i]);return se.createElement(se.Fragment,null,se.createElement(ss.Provider,{value:z},se.createElement(Rl.Provider,{value:h},se.createElement(Xx.Provider,{value:U.current},se.createElement(Vp.Provider,{value:v},se.createElement(Jb,{basename:B,location:h.location,navigationType:h.historyAction,navigator:H,unstable_useTransitions:s},se.createElement(Kb,{routes:a.routes,future:a.future,state:h,isStatic:!1,onError:i})))))),null)}function y_(a,e){return{...a,navigation:e.navigation.state!=="idle"?e.navigation:a.navigation,revalidation:e.revalidation!=="idle"?e.revalidation:a.revalidation,actionData:e.navigation.state!=="submitting"?e.actionData:a.actionData,fetchers:e.fetchers}}var Kb=se.memo(Qb);function Qb({routes:a,future:e,state:i,isStatic:s,onError:l}){return Ub(a,void 0,{state:i,isStatic:s,onError:l})}function Jb({basename:a="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:u=!1,unstable_useTransitions:c}){Nt(!Cl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=a.replace(/^\/*/,"/"),m=se.useMemo(()=>({basename:h,navigator:l,static:u,unstable_useTransitions:c,future:{}}),[h,l,u,c]);typeof i=="string"&&(i=Xa(i));let{pathname:p="/",search:_="",hash:v="",state:g=null,key:S="default",unstable_mask:T}=i,A=se.useMemo(()=>{let y=Ii(p,h);return y==null?null:{location:{pathname:y,search:_,hash:v,state:g,key:S,unstable_mask:T},navigationType:s}},[h,p,_,v,g,S,s,T]);return bn(A!=null,`<Router basename="${h}"> is not able to match the URL "${p}${_}${v}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:se.createElement(Bi.Provider,{value:m},se.createElement(Pc.Provider,{children:e,value:A}))}var _c="get",xc="application/x-www-form-urlencoded";function zc(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function $b(a){return zc(a)&&a.tagName.toLowerCase()==="button"}function eT(a){return zc(a)&&a.tagName.toLowerCase()==="form"}function tT(a){return zc(a)&&a.tagName.toLowerCase()==="input"}function nT(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function iT(a,e){return a.button===0&&(!e||e==="_self")&&!nT(a)}function Gh(a=""){return new URLSearchParams(typeof a=="string"||Array.isArray(a)||a instanceof URLSearchParams?a:Object.keys(a).reduce((e,i)=>{let s=a[i];return e.concat(Array.isArray(s)?s.map(l=>[i,l]):[[i,s]])},[]))}function aT(a,e){let i=Gh(a);return e&&e.forEach((s,l)=>{i.has(l)||e.getAll(l).forEach(u=>{i.append(l,u)})}),i}var Wu=null;function rT(){if(Wu===null)try{new FormData(document.createElement("form"),0),Wu=!1}catch{Wu=!0}return Wu}var sT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ih(a){return a!=null&&!sT.has(a)?(bn(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xc}"`),null):a}function oT(a,e){let i,s,l,u,c;if(eT(a)){let h=a.getAttribute("action");s=h?Ii(h,e):null,i=a.getAttribute("method")||_c,l=ih(a.getAttribute("enctype"))||xc,u=new FormData(a)}else if($b(a)||tT(a)&&(a.type==="submit"||a.type==="image")){let h=a.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=a.getAttribute("formaction")||h.getAttribute("action");if(s=m?Ii(m,e):null,i=a.getAttribute("formmethod")||h.getAttribute("method")||_c,l=ih(a.getAttribute("formenctype"))||ih(h.getAttribute("enctype"))||xc,u=new FormData(h,a),!rT()){let{name:p,type:_,value:v}=a;if(_==="image"){let g=p?`${p}.`:"";u.append(`${g}x`,"0"),u.append(`${g}y`,"0")}else p&&u.append(p,v)}}else{if(zc(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=_c,s=null,l=xc,c=a}return u&&l==="text/plain"&&(c=u,u=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:u,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function qp(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function lT(a,e,i,s){let l=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${s}`:l.pathname=`${l.pathname}.${s}`:l.pathname==="/"?l.pathname=`_root.${s}`:e&&Ii(l.pathname,e)==="/"?l.pathname=`${e.replace(/\/$/,"")}/_root.${s}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${s}`,l}async function uT(a,e){if(a.id in e)return e[a.id];try{let i=await import(a.module);return e[a.id]=i,i}catch(i){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function cT(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function fT(a,e,i){let s=await Promise.all(a.map(async l=>{let u=e.routes[l.route.id];if(u){let c=await uT(u,i);return c.links?c.links():[]}return[]}));return mT(s.flat(1).filter(cT).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function S_(a,e,i,s,l,u){let c=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return u==="assets"?e.filter((m,p)=>c(m,p)||h(m,p)):u==="data"?e.filter((m,p)=>{let _=s.routes[m.route.id];if(!_||!_.hasLoader)return!1;if(c(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function dT(a,e,{includeHydrateFallback:i}={}){return hT(a.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function hT(a){return[...new Set(a)]}function pT(a){let e={},i=Object.keys(a).sort();for(let s of i)e[s]=a[s];return e}function mT(a,e){let i=new Set;return new Set(e),a.reduce((s,l)=>{let u=JSON.stringify(pT(l));return i.has(u)||(i.add(u),s.push({key:u,link:l})),s},[])}function Kx(){let a=se.useContext(ss);return qp(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function gT(){let a=se.useContext(Rl);return qp(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Yp=se.createContext(void 0);Yp.displayName="FrameworkContext";function Qx(){let a=se.useContext(Yp);return qp(a,"You must render this element inside a <HydratedRouter> element"),a}function vT(a,e){let i=se.useContext(Yp),[s,l]=se.useState(!1),[u,c]=se.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:_,onTouchStart:v}=e,g=se.useRef(null);se.useEffect(()=>{if(a==="render"&&c(!0),a==="viewport"){let A=M=>{M.forEach(w=>{c(w.isIntersecting)})},y=new IntersectionObserver(A,{threshold:.5});return g.current&&y.observe(g.current),()=>{y.disconnect()}}},[a]),se.useEffect(()=>{if(s){let A=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(A)}}},[s]);let S=()=>{l(!0)},T=()=>{l(!1),c(!1)};return i?a!=="intent"?[u,g,{}]:[u,g,{onFocus:al(h,S),onBlur:al(m,T),onMouseEnter:al(p,S),onMouseLeave:al(_,T),onTouchStart:al(v,S)}]:[!1,g,{}]}function al(a,e){return i=>{a&&a(i),i.defaultPrevented||e(i)}}function _T({page:a,...e}){let{router:i}=Kx(),s=se.useMemo(()=>Er(i.routes,a,i.basename),[i.routes,a,i.basename]);return s?se.createElement(yT,{page:a,matches:s,...e}):null}function xT(a){let{manifest:e,routeModules:i}=Qx(),[s,l]=se.useState([]);return se.useEffect(()=>{let u=!1;return fT(a,e,i).then(c=>{u||l(c)}),()=>{u=!0}},[a,e,i]),s}function yT({page:a,matches:e,...i}){let s=qa(),{future:l,manifest:u,routeModules:c}=Qx(),{basename:h}=Kx(),{loaderData:m,matches:p}=gT(),_=se.useMemo(()=>S_(a,e,p,u,s,"data"),[a,e,p,u,s]),v=se.useMemo(()=>S_(a,e,p,u,s,"assets"),[a,e,p,u,s]),g=se.useMemo(()=>{if(a===s.pathname+s.search+s.hash)return[];let A=new Set,y=!1;if(e.forEach(w=>{let U=u.routes[w.route.id];!U||!U.hasLoader||(!_.some(N=>N.route.id===w.route.id)&&w.route.id in m&&c[w.route.id]?.shouldRevalidate||U.hasClientLoader?y=!0:A.add(w.route.id))}),A.size===0)return[];let M=lT(a,h,l.unstable_trailingSlashAwareDataRequests,"data");return y&&A.size>0&&M.searchParams.set("_routes",e.filter(w=>A.has(w.route.id)).map(w=>w.route.id).join(",")),[M.pathname+M.search]},[h,l.unstable_trailingSlashAwareDataRequests,m,s,u,_,e,a,c]),S=se.useMemo(()=>dT(v,u),[v,u]),T=xT(v);return se.createElement(se.Fragment,null,g.map(A=>se.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...i})),S.map(A=>se.createElement("link",{key:A,rel:"modulepreload",href:A,...i})),T.map(({key:A,link:y})=>se.createElement("link",{key:A,nonce:i.nonce,...y,crossOrigin:y.crossOrigin??i.crossOrigin})))}function ST(...a){return e=>{a.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var MT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{MT&&(window.__reactRouterVersion="7.13.1")}catch{}function ET(a,e){return JE({basename:e?.basename,getContext:e?.getContext,future:e?.future,history:pE({window:e?.window}),hydrationData:bT(),routes:a,mapRouteProperties:qb,hydrationRouteProperties:Yb,dataStrategy:e?.dataStrategy,patchRoutesOnNavigation:e?.patchRoutesOnNavigation,window:e?.window,unstable_instrumentations:e?.unstable_instrumentations}).initialize()}function bT(){let a=window?.__staticRouterHydrationData;return a&&a.errors&&(a={...a,errors:TT(a.errors)}),a}function TT(a){if(!a)return null;let e=Object.entries(a),i={};for(let[s,l]of e)if(l&&l.__type==="RouteErrorResponse")i[s]=new Tl(l.status,l.statusText,l.data,l.internal===!0);else if(l&&l.__type==="Error"){if(l.__subType){let u=window[l.__subType];if(typeof u=="function")try{let c=new u(l.message);c.stack="",i[s]=c}catch{}}if(i[s]==null){let u=new Error(l.message);u.stack="",i[s]=u}}else i[s]=l;return i}var Jx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$x=se.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:u,replace:c,unstable_mask:h,state:m,target:p,to:_,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:S,...T},A){let{basename:y,navigator:M,unstable_useTransitions:w}=se.useContext(Bi),U=typeof _=="string"&&Jx.test(_),N=Dx(_,y);_=N.to;let H=wb(_,{relative:l}),B=qa(),z=null;if(h){let Z=Oc(h,[],B.unstable_mask?B.unstable_mask.pathname:"/",!0);y!=="/"&&(Z.pathname=Z.pathname==="/"?y:Qi([y,Z.pathname])),z=M.createHref(Z)}let[b,D,re]=vT(s,T),G=wT(_,{replace:c,unstable_mask:h,state:m,target:p,preventScrollReset:v,relative:l,viewTransition:g,unstable_defaultShouldRevalidate:S,unstable_useTransitions:w});function K(Z){e&&e(Z),Z.defaultPrevented||G(Z)}let ie=!(N.isExternal||u),ee=se.createElement("a",{...T,...re,href:(ie?z:void 0)||N.absoluteURL||H,onClick:ie?K:e,ref:ST(A,D),target:p,"data-discover":!U&&i==="render"?"true":void 0});return b&&!U?se.createElement(se.Fragment,null,ee,se.createElement(_T,{page:H})):ee});$x.displayName="Link";var AT=se.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:u,to:c,viewTransition:h,children:m,...p},_){let v=wl(c,{relative:p.relative}),g=qa(),S=se.useContext(Rl),{navigator:T,basename:A}=se.useContext(Bi),y=S!=null&&PT(v)&&h===!0,M=T.encodeLocation?T.encodeLocation(v).pathname:v.pathname,w=g.pathname,U=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(w=w.toLowerCase(),U=U?U.toLowerCase():null,M=M.toLowerCase()),U&&A&&(U=Ii(U,A)||U);const N=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let H=w===M||!l&&w.startsWith(M)&&w.charAt(N)==="/",B=U!=null&&(U===M||!l&&U.startsWith(M)&&U.charAt(M.length)==="/"),z={isActive:H,isPending:B,isTransitioning:y},b=H?e:void 0,D;typeof s=="function"?D=s(z):D=[s,H?"active":null,B?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let re=typeof u=="function"?u(z):u;return se.createElement($x,{...p,"aria-current":b,className:D,ref:_,style:re,to:c,viewTransition:h},typeof m=="function"?m(z):m)});AT.displayName="NavLink";var RT=se.forwardRef(({discover:a="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:u,method:c=_c,action:h,onSubmit:m,relative:p,preventScrollReset:_,viewTransition:v,unstable_defaultShouldRevalidate:g,...S},T)=>{let{unstable_useTransitions:A}=se.useContext(Bi),y=NT(),M=OT(h,{relative:p}),w=c.toLowerCase()==="get"?"get":"post",U=typeof h=="string"&&Jx.test(h),N=H=>{if(m&&m(H),H.defaultPrevented)return;H.preventDefault();let B=H.nativeEvent.submitter,z=B?.getAttribute("formmethod")||c,b=()=>y(B||H.currentTarget,{fetcherKey:e,method:z,navigate:i,replace:l,state:u,relative:p,preventScrollReset:_,viewTransition:v,unstable_defaultShouldRevalidate:g});A&&i!==!1?se.startTransition(()=>b()):b()};return se.createElement("form",{ref:T,method:w,action:M,onSubmit:s?m:N,...S,"data-discover":!U&&a==="render"?"true":void 0})});RT.displayName="Form";function CT(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ey(a){let e=se.useContext(ss);return Nt(e,CT(a)),e}function wT(a,{target:e,replace:i,unstable_mask:s,state:l,preventScrollReset:u,relative:c,viewTransition:h,unstable_defaultShouldRevalidate:m,unstable_useTransitions:p}={}){let _=Fc(),v=qa(),g=wl(a,{relative:c});return se.useCallback(S=>{if(iT(S,e)){S.preventDefault();let T=i!==void 0?i:fa(v)===fa(g),A=()=>_(a,{replace:T,unstable_mask:s,state:l,preventScrollReset:u,relative:c,viewTransition:h,unstable_defaultShouldRevalidate:m});p?se.startTransition(()=>A()):A()}},[v,_,g,i,s,l,e,a,u,c,h,m,p])}function DT(a){bn(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let e=se.useRef(Gh(a)),i=se.useRef(!1),s=qa(),l=se.useMemo(()=>aT(s.search,i.current?null:e.current),[s.search]),u=Fc(),c=se.useCallback((h,m)=>{const p=Gh(typeof h=="function"?h(new URLSearchParams(l)):h);i.current=!0,u("?"+p,m)},[u,l]);return[l,c]}var UT=0,LT=()=>`__${String(++UT)}__`;function NT(){let{router:a}=ey("useSubmit"),{basename:e}=se.useContext(Bi),i=Hb(),s=a.fetch,l=a.navigate;return se.useCallback(async(u,c={})=>{let{action:h,method:m,encType:p,formData:_,body:v}=oT(u,e);if(c.navigate===!1){let g=c.fetcherKey||LT();await s(g,i,c.action||h,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:_,body:v,formMethod:c.method||m,formEncType:c.encType||p,flushSync:c.flushSync})}else await l(c.action||h,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:_,body:v,formMethod:c.method||m,formEncType:c.encType||p,replace:c.replace,state:c.state,fromRouteId:i,flushSync:c.flushSync,viewTransition:c.viewTransition})},[s,l,e,i])}function OT(a,{relative:e}={}){let{basename:i}=se.useContext(Bi),s=se.useContext(Wa);Nt(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),u={...wl(a||".",{relative:e})},c=qa();if(a==null){u.search=c.search;let h=new URLSearchParams(u.search),m=h.getAll("index");if(m.some(_=>_==="")){h.delete("index"),m.filter(v=>v).forEach(v=>h.append("index",v));let _=h.toString();u.search=_?`?${_}`:""}}return(!a||a===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:Qi([i,u.pathname])),fa(u)}function PT(a,{relative:e}={}){let i=se.useContext(Vp);Nt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=ey("useViewTransitionState"),l=wl(a,{relative:e});if(!i.isTransitioning)return!1;let u=Ii(i.currentLocation.pathname,s)||i.currentLocation.pathname,c=Ii(i.nextLocation.pathname,s)||i.nextLocation.pathname;return Ac(l.pathname,c)!=null||Ac(l.pathname,u)!=null}function FT(a){const e=Fc();function i(s){const l=new URLSearchParams;l.set("title",s.title),l.set("description",s.description),e(`/task?${l.toString()}`)}return Ht.jsx("ul",{className:"space-y-4 p-6 bg-slate-200 rounded-md shadow",children:a.tasks.map(s=>Ht.jsxs("li",{className:"flex gap-2",children:[Ht.jsx("button",{onClick:()=>a.onTaskClick(s.id),className:`bg-slate-400 text-left text-white p-2 rounded-md w-full ${s.isCompleted?"line-through":""}`,children:s.title}),Ht.jsx("button",{onClick:()=>i(s),className:"bg-slate-400 p-2 rounded-md text-white",children:Ht.jsx(uE,{})}),Ht.jsx("button",{onClick:()=>a.onDeleteTaskClick(s.id),className:"bg-slate-400 p-2 rounded-md text-white",children:Ht.jsx(fE,{})})]},s.id))})}function zT({onAddTaskSubmit:a}){const[e,i]=se.useState(""),[s,l]=se.useState("");return Ht.jsxs("div",{className:"space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col",children:[Ht.jsx("input",{type:"text",placeholder:"Digite o título da tarefa",className:"border border-slate-700 outline-slate-400 px-4 py-2 rounded-md  text-black",value:e,onChange:u=>i(u.target.value)}),Ht.jsx("input",{type:"text",placeholder:"Digite a descrição da tarefa",className:"border border-slate-700 outline-slate-400 px-4 py-2 rounded-md text-black",value:s,onChange:u=>l(u.target.value)}),Ht.jsx("button",{onClick:()=>{if(!e.trim()||!s.trim())return alert("Preencha os campos para adicionar uma tarefa");a(e,s),i(""),l("")},children:"Adicionar"})]})}const jp="183",IT=0,M_=1,BT=2,yc=1,HT=2,ml=3,Cr=0,ui=1,Ba=2,Ha=0,no=1,Vh=2,E_=3,b_=4,GT=5,$r=100,VT=101,kT=102,XT=103,WT=104,qT=200,YT=201,jT=202,ZT=203,kh=204,Xh=205,KT=206,QT=207,JT=208,$T=209,e1=210,t1=211,n1=212,i1=213,a1=214,Wh=0,qh=1,Yh=2,ao=3,jh=4,Zh=5,Kh=6,Qh=7,ty=0,r1=1,s1=2,ca=0,ny=1,iy=2,ay=3,ry=4,sy=5,oy=6,ly=7,uy=300,rs=301,ro=302,ah=303,rh=304,Ic=306,Jh=1e3,Ei=1001,$h=1002,Xn=1003,o1=1004,qu=1005,On=1006,sh=1007,ns=1008,Pi=1009,cy=1010,fy=1011,Ml=1012,Zp=1013,da=1014,Ki=1015,ha=1016,Kp=1017,Qp=1018,El=1020,dy=35902,hy=35899,py=1021,my=1022,Fi=1023,Va=1026,is=1027,gy=1028,Jp=1029,so=1030,$p=1031,em=1033,Sc=33776,Mc=33777,Ec=33778,bc=33779,ep=35840,tp=35841,np=35842,ip=35843,ap=36196,rp=37492,sp=37496,op=37488,lp=37489,up=37490,cp=37491,fp=37808,dp=37809,hp=37810,pp=37811,mp=37812,gp=37813,vp=37814,_p=37815,xp=37816,yp=37817,Sp=37818,Mp=37819,Ep=37820,bp=37821,Tp=36492,Ap=36494,Rp=36495,Cp=36283,wp=36284,Dp=36285,Up=36286,l1=3200,u1=0,c1=1,Tr="",Oi="srgb",oo="srgb-linear",Rc="linear",on="srgb",Bs=7680,T_=519,f1=512,d1=513,h1=514,tm=515,p1=516,m1=517,nm=518,g1=519,A_=35044,R_="300 es",ua=2e3,Cc=2001;function v1(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function wc(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function _1(){const a=wc("canvas");return a.style.display="block",a}const C_={};function w_(...a){const e="THREE."+a.shift();console.log(e,...a)}function vy(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=a[1];i&&i.isStackTrace?a[0]+=" "+i.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function yt(...a){a=vy(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...a)}}function Qt(...a){a=vy(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...a)}}function Dc(...a){const e=a.join(" ");e in C_||(C_[e]=!0,yt(...a))}function x1(a,e,i){return new Promise(function(s,l){function u(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:l();break;case a.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const y1={[Wh]:qh,[Yh]:Kh,[jh]:Qh,[ao]:Zh,[qh]:Wh,[Kh]:Yh,[Qh]:jh,[Zh]:ao};class uo{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,c=l.length;u<c;u++)l[u].call(this,e);e.target=null}}}const qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],oh=Math.PI/180,Lp=180/Math.PI;function Dl(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(qn[a&255]+qn[a>>8&255]+qn[a>>16&255]+qn[a>>24&255]+"-"+qn[e&255]+qn[e>>8&255]+"-"+qn[e>>16&15|64]+qn[e>>24&255]+"-"+qn[i&63|128]+qn[i>>8&255]+"-"+qn[i>>16&255]+qn[i>>24&255]+qn[s&255]+qn[s>>8&255]+qn[s>>16&255]+qn[s>>24&255]).toLowerCase()}function Xt(a,e,i){return Math.max(e,Math.min(i,a))}function S1(a,e){return(a%e+e)%e}function lh(a,e,i){return(1-i)*a+i*e}function rl(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function li(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Tt{constructor(e=0,i=0){Tt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Xt(this.x,e.x,i.x),this.y=Xt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Xt(this.x,e,i),this.y=Xt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Xt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Xt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,c=this.y-e.y;return this.x=u*s-c*l+e.x,this.y=u*l+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class co{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,c,h){let m=s[l+0],p=s[l+1],_=s[l+2],v=s[l+3],g=u[c+0],S=u[c+1],T=u[c+2],A=u[c+3];if(v!==A||m!==g||p!==S||_!==T){let y=m*g+p*S+_*T+v*A;y<0&&(g=-g,S=-S,T=-T,A=-A,y=-y);let M=1-h;if(y<.9995){const w=Math.acos(y),U=Math.sin(w);M=Math.sin(M*w)/U,h=Math.sin(h*w)/U,m=m*M+g*h,p=p*M+S*h,_=_*M+T*h,v=v*M+A*h}else{m=m*M+g*h,p=p*M+S*h,_=_*M+T*h,v=v*M+A*h;const w=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=w,p*=w,_*=w,v*=w}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,u,c){const h=s[l],m=s[l+1],p=s[l+2],_=s[l+3],v=u[c],g=u[c+1],S=u[c+2],T=u[c+3];return e[i]=h*T+_*v+m*S-p*g,e[i+1]=m*T+_*g+p*v-h*S,e[i+2]=p*T+_*S+h*g-m*v,e[i+3]=_*T-h*v-m*g-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,c=e._order,h=Math.cos,m=Math.sin,p=h(s/2),_=h(l/2),v=h(u/2),g=m(s/2),S=m(l/2),T=m(u/2);switch(c){case"XYZ":this._x=g*_*v+p*S*T,this._y=p*S*v-g*_*T,this._z=p*_*T+g*S*v,this._w=p*_*v-g*S*T;break;case"YXZ":this._x=g*_*v+p*S*T,this._y=p*S*v-g*_*T,this._z=p*_*T-g*S*v,this._w=p*_*v+g*S*T;break;case"ZXY":this._x=g*_*v-p*S*T,this._y=p*S*v+g*_*T,this._z=p*_*T+g*S*v,this._w=p*_*v-g*S*T;break;case"ZYX":this._x=g*_*v-p*S*T,this._y=p*S*v+g*_*T,this._z=p*_*T-g*S*v,this._w=p*_*v+g*S*T;break;case"YZX":this._x=g*_*v+p*S*T,this._y=p*S*v+g*_*T,this._z=p*_*T-g*S*v,this._w=p*_*v-g*S*T;break;case"XZY":this._x=g*_*v-p*S*T,this._y=p*S*v-g*_*T,this._z=p*_*T+g*S*v,this._w=p*_*v+g*S*T;break;default:yt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],c=i[1],h=i[5],m=i[9],p=i[2],_=i[6],v=i[10],g=s+h+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(_-m)*S,this._y=(u-p)*S,this._z=(c-l)*S}else if(s>h&&s>v){const S=2*Math.sqrt(1+s-h-v);this._w=(_-m)/S,this._x=.25*S,this._y=(l+c)/S,this._z=(u+p)/S}else if(h>v){const S=2*Math.sqrt(1+h-s-v);this._w=(u-p)/S,this._x=(l+c)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+v-s-h);this._w=(c-l)/S,this._x=(u+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,c=e._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+c*h+l*p-u*m,this._y=l*_+c*m+u*h-s*p,this._z=u*_+c*p+s*m-l*h,this._w=c*_-s*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,u=e._z,c=e._w,h=this.dot(e);h<0&&(s=-s,l=-l,u=-u,c=-c,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+c*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+c*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class pe{constructor(e=0,i=0,s=0){pe.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(D_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(D_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,c=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*c,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*c,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*c,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,c=e.y,h=e.z,m=e.w,p=2*(c*l-h*s),_=2*(h*i-u*l),v=2*(u*s-c*i);return this.x=i+m*p+c*v-h*_,this.y=s+m*_+h*p-u*v,this.z=l+m*v+u*_-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Xt(this.x,e.x,i.x),this.y=Xt(this.y,e.y,i.y),this.z=Xt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Xt(this.x,e,i),this.y=Xt(this.y,e,i),this.z=Xt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Xt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,c=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*c-s*m,this.z=s*h-l*c,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return uh.copy(this).projectOnVector(e),this.sub(uh)}reflect(e){return this.sub(uh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Xt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uh=new pe,D_=new co;class Ct{constructor(e,i,s,l,u,c,h,m,p){Ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,c,h,m,p)}set(e,i,s,l,u,c,h,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=i,_[4]=u,_[5]=m,_[6]=s,_[7]=c,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,c=s[0],h=s[3],m=s[6],p=s[1],_=s[4],v=s[7],g=s[2],S=s[5],T=s[8],A=l[0],y=l[3],M=l[6],w=l[1],U=l[4],N=l[7],H=l[2],B=l[5],z=l[8];return u[0]=c*A+h*w+m*H,u[3]=c*y+h*U+m*B,u[6]=c*M+h*N+m*z,u[1]=p*A+_*w+v*H,u[4]=p*y+_*U+v*B,u[7]=p*M+_*N+v*z,u[2]=g*A+S*w+T*H,u[5]=g*y+S*U+T*B,u[8]=g*M+S*N+T*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],c=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return i*c*_-i*h*p-s*u*_+s*h*m+l*u*p-l*c*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],c=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=_*c-h*p,g=h*m-_*u,S=p*u-c*m,T=i*v+s*g+l*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(l*p-_*s)*A,e[2]=(h*s-l*c)*A,e[3]=g*A,e[4]=(_*i-l*m)*A,e[5]=(l*u-h*i)*A,e[6]=S*A,e[7]=(s*m-p*i)*A,e[8]=(c*i-s*u)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,c,h){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*c+p*h)+c+e,-l*p,l*m,-l*(-p*c+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(ch.makeScale(e,i)),this}rotate(e){return this.premultiply(ch.makeRotation(-e)),this}translate(e,i){return this.premultiply(ch.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ch=new Ct,U_=new Ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),L_=new Ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function M1(){const a={enabled:!0,workingColorSpace:oo,spaces:{},convert:function(l,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===on&&(l.r=Ga(l.r),l.g=Ga(l.g),l.b=Ga(l.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===on&&(l.r=io(l.r),l.g=io(l.g),l.b=io(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Tr?Rc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,c){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Dc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Dc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return a.define({[oo]:{primaries:e,whitePoint:s,transfer:Rc,toXYZ:U_,fromXYZ:L_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Oi},outputColorSpaceConfig:{drawingBufferColorSpace:Oi}},[Oi]:{primaries:e,whitePoint:s,transfer:on,toXYZ:U_,fromXYZ:L_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Oi}}}),a}const Yt=M1();function Ga(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function io(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Hs;class E1{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Hs===void 0&&(Hs=wc("canvas")),Hs.width=e.width,Hs.height=e.height;const l=Hs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Hs}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=wc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let c=0;c<u.length;c++)u[c]=Ga(u[c]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ga(i[s]/255)*255):i[s]=Ga(i[s]);return{data:i,width:e.width,height:e.height}}else return yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let b1=0;class im{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:b1++}),this.uuid=Dl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let c=0,h=l.length;c<h;c++)l[c].isDataTexture?u.push(fh(l[c].image)):u.push(fh(l[c]))}else u=fh(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function fh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?E1.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(yt("Texture: Unable to serialize Texture."),{})}let T1=0;const dh=new pe;class ei extends uo{constructor(e=ei.DEFAULT_IMAGE,i=ei.DEFAULT_MAPPING,s=Ei,l=Ei,u=On,c=ns,h=Fi,m=Pi,p=ei.DEFAULT_ANISOTROPY,_=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T1++}),this.uuid=Dl(),this.name="",this.source=new im(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=c,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(dh).x}get height(){return this.source.getSize(dh).y}get depth(){return this.source.getSize(dh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){yt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){yt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jh:e.x=e.x-Math.floor(e.x);break;case Ei:e.x=e.x<0?0:1;break;case $h:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jh:e.y=e.y-Math.floor(e.y);break;case Ei:e.y=e.y<0?0:1;break;case $h:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=uy;ei.DEFAULT_ANISOTROPY=1;class yn{constructor(e=0,i=0,s=0,l=1){yn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l+c[12]*u,this.y=c[1]*i+c[5]*s+c[9]*l+c[13]*u,this.z=c[2]*i+c[6]*s+c[10]*l+c[14]*u,this.w=c[3]*i+c[7]*s+c[11]*l+c[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],_=m[4],v=m[8],g=m[1],S=m[5],T=m[9],A=m[2],y=m[6],M=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-A)<.01&&Math.abs(T-y)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+A)<.1&&Math.abs(T+y)<.1&&Math.abs(p+S+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,N=(S+1)/2,H=(M+1)/2,B=(_+g)/4,z=(v+A)/4,b=(T+y)/4;return U>N&&U>H?U<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(U),l=B/s,u=z/s):N>H?N<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(N),s=B/l,u=b/l):H<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(H),s=z/u,l=b/u),this.set(s,l,u,i),this}let w=Math.sqrt((y-T)*(y-T)+(v-A)*(v-A)+(g-_)*(g-_));return Math.abs(w)<.001&&(w=1),this.x=(y-T)/w,this.y=(v-A)/w,this.z=(g-_)/w,this.w=Math.acos((p+S+M-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Xt(this.x,e.x,i.x),this.y=Xt(this.y,e.y,i.y),this.z=Xt(this.z,e.z,i.z),this.w=Xt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Xt(this.x,e,i),this.y=Xt(this.y,e,i),this.z=Xt(this.z,e,i),this.w=Xt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Xt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class A1 extends uo{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new yn(0,0,e,i),this.scissorTest=!1,this.viewport=new yn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},u=new ei(l),c=s.count;for(let h=0;h<c;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new im(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends A1{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class _y extends ei{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class R1 extends ei{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tn{constructor(e,i,s,l,u,c,h,m,p,_,v,g,S,T,A,y){Tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,c,h,m,p,_,v,g,S,T,A,y)}set(e,i,s,l,u,c,h,m,p,_,v,g,S,T,A,y){const M=this.elements;return M[0]=e,M[4]=i,M[8]=s,M[12]=l,M[1]=u,M[5]=c,M[9]=h,M[13]=m,M[2]=p,M[6]=_,M[10]=v,M[14]=g,M[3]=S,M[7]=T,M[11]=A,M[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Gs.setFromMatrixColumn(e,0).length(),u=1/Gs.setFromMatrixColumn(e,1).length(),c=1/Gs.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*c,i[9]=s[9]*c,i[10]=s[10]*c,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,c=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const g=c*_,S=c*v,T=h*_,A=h*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=S+T*p,i[5]=g-A*p,i[9]=-h*m,i[2]=A-g*p,i[6]=T+S*p,i[10]=c*m}else if(e.order==="YXZ"){const g=m*_,S=m*v,T=p*_,A=p*v;i[0]=g+A*h,i[4]=T*h-S,i[8]=c*p,i[1]=c*v,i[5]=c*_,i[9]=-h,i[2]=S*h-T,i[6]=A+g*h,i[10]=c*m}else if(e.order==="ZXY"){const g=m*_,S=m*v,T=p*_,A=p*v;i[0]=g-A*h,i[4]=-c*v,i[8]=T+S*h,i[1]=S+T*h,i[5]=c*_,i[9]=A-g*h,i[2]=-c*p,i[6]=h,i[10]=c*m}else if(e.order==="ZYX"){const g=c*_,S=c*v,T=h*_,A=h*v;i[0]=m*_,i[4]=T*p-S,i[8]=g*p+A,i[1]=m*v,i[5]=A*p+g,i[9]=S*p-T,i[2]=-p,i[6]=h*m,i[10]=c*m}else if(e.order==="YZX"){const g=c*m,S=c*p,T=h*m,A=h*p;i[0]=m*_,i[4]=A-g*v,i[8]=T*v+S,i[1]=v,i[5]=c*_,i[9]=-h*_,i[2]=-p*_,i[6]=S*v+T,i[10]=g-A*v}else if(e.order==="XZY"){const g=c*m,S=c*p,T=h*m,A=h*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=g*v+A,i[5]=c*_,i[9]=S*v-T,i[2]=T*v-S,i[6]=h*_,i[10]=A*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(C1,e,w1)}lookAt(e,i,s){const l=this.elements;return yi.subVectors(e,i),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),vr.crossVectors(s,yi),vr.lengthSq()===0&&(Math.abs(s.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),vr.crossVectors(s,yi)),vr.normalize(),Yu.crossVectors(yi,vr),l[0]=vr.x,l[4]=Yu.x,l[8]=yi.x,l[1]=vr.y,l[5]=Yu.y,l[9]=yi.y,l[2]=vr.z,l[6]=Yu.z,l[10]=yi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,c=s[0],h=s[4],m=s[8],p=s[12],_=s[1],v=s[5],g=s[9],S=s[13],T=s[2],A=s[6],y=s[10],M=s[14],w=s[3],U=s[7],N=s[11],H=s[15],B=l[0],z=l[4],b=l[8],D=l[12],re=l[1],G=l[5],K=l[9],ie=l[13],ee=l[2],Z=l[6],O=l[10],I=l[14],oe=l[3],ce=l[7],be=l[11],P=l[15];return u[0]=c*B+h*re+m*ee+p*oe,u[4]=c*z+h*G+m*Z+p*ce,u[8]=c*b+h*K+m*O+p*be,u[12]=c*D+h*ie+m*I+p*P,u[1]=_*B+v*re+g*ee+S*oe,u[5]=_*z+v*G+g*Z+S*ce,u[9]=_*b+v*K+g*O+S*be,u[13]=_*D+v*ie+g*I+S*P,u[2]=T*B+A*re+y*ee+M*oe,u[6]=T*z+A*G+y*Z+M*ce,u[10]=T*b+A*K+y*O+M*be,u[14]=T*D+A*ie+y*I+M*P,u[3]=w*B+U*re+N*ee+H*oe,u[7]=w*z+U*G+N*Z+H*ce,u[11]=w*b+U*K+N*O+H*be,u[15]=w*D+U*ie+N*I+H*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],c=e[1],h=e[5],m=e[9],p=e[13],_=e[2],v=e[6],g=e[10],S=e[14],T=e[3],A=e[7],y=e[11],M=e[15],w=m*S-p*g,U=h*S-p*v,N=h*g-m*v,H=c*S-p*_,B=c*g-m*_,z=c*v-h*_;return i*(A*w-y*U+M*N)-s*(T*w-y*H+M*B)+l*(T*U-A*H+M*z)-u*(T*N-A*B+y*z)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],c=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=e[9],g=e[10],S=e[11],T=e[12],A=e[13],y=e[14],M=e[15],w=i*h-s*c,U=i*m-l*c,N=i*p-u*c,H=s*m-l*h,B=s*p-u*h,z=l*p-u*m,b=_*A-v*T,D=_*y-g*T,re=_*M-S*T,G=v*y-g*A,K=v*M-S*A,ie=g*M-S*y,ee=w*ie-U*K+N*G+H*re-B*D+z*b;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/ee;return e[0]=(h*ie-m*K+p*G)*Z,e[1]=(l*K-s*ie-u*G)*Z,e[2]=(A*z-y*B+M*H)*Z,e[3]=(g*B-v*z-S*H)*Z,e[4]=(m*re-c*ie-p*D)*Z,e[5]=(i*ie-l*re+u*D)*Z,e[6]=(y*N-T*z-M*U)*Z,e[7]=(_*z-g*N+S*U)*Z,e[8]=(c*K-h*re+p*b)*Z,e[9]=(s*re-i*K-u*b)*Z,e[10]=(T*B-A*N+M*w)*Z,e[11]=(v*N-_*B-S*w)*Z,e[12]=(h*D-c*G-m*b)*Z,e[13]=(i*G-s*D+l*b)*Z,e[14]=(A*U-T*H-y*w)*Z,e[15]=(_*H-v*U+g*w)*Z,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,c=e.x,h=e.y,m=e.z,p=u*c,_=u*h;return this.set(p*c+s,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+s,_*m-l*c,0,p*m-l*h,_*m+l*c,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,c){return this.set(1,s,u,0,e,1,c,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,c=i._y,h=i._z,m=i._w,p=u+u,_=c+c,v=h+h,g=u*p,S=u*_,T=u*v,A=c*_,y=c*v,M=h*v,w=m*p,U=m*_,N=m*v,H=s.x,B=s.y,z=s.z;return l[0]=(1-(A+M))*H,l[1]=(S+N)*H,l[2]=(T-U)*H,l[3]=0,l[4]=(S-N)*B,l[5]=(1-(g+M))*B,l[6]=(y+w)*B,l[7]=0,l[8]=(T+U)*z,l[9]=(y-w)*z,l[10]=(1-(g+A))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const u=this.determinant();if(u===0)return s.set(1,1,1),i.identity(),this;let c=Gs.set(l[0],l[1],l[2]).length();const h=Gs.set(l[4],l[5],l[6]).length(),m=Gs.set(l[8],l[9],l[10]).length();u<0&&(c=-c),Wi.copy(this);const p=1/c,_=1/h,v=1/m;return Wi.elements[0]*=p,Wi.elements[1]*=p,Wi.elements[2]*=p,Wi.elements[4]*=_,Wi.elements[5]*=_,Wi.elements[6]*=_,Wi.elements[8]*=v,Wi.elements[9]*=v,Wi.elements[10]*=v,i.setFromRotationMatrix(Wi),s.x=c,s.y=h,s.z=m,this}makePerspective(e,i,s,l,u,c,h=ua,m=!1){const p=this.elements,_=2*u/(i-e),v=2*u/(s-l),g=(i+e)/(i-e),S=(s+l)/(s-l);let T,A;if(m)T=u/(c-u),A=c*u/(c-u);else if(h===ua)T=-(c+u)/(c-u),A=-2*c*u/(c-u);else if(h===Cc)T=-c/(c-u),A=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,u,c,h=ua,m=!1){const p=this.elements,_=2/(i-e),v=2/(s-l),g=-(i+e)/(i-e),S=-(s+l)/(s-l);let T,A;if(m)T=1/(c-u),A=c/(c-u);else if(h===ua)T=-2/(c-u),A=-(c+u)/(c-u);else if(h===Cc)T=-1/(c-u),A=-u/(c-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Gs=new pe,Wi=new Tn,C1=new pe(0,0,0),w1=new pe(1,1,1),vr=new pe,Yu=new pe,yi=new pe,N_=new Tn,O_=new co;class ka{constructor(e=0,i=0,s=0,l=ka.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],c=l[4],h=l[8],m=l[1],p=l[5],_=l[9],v=l[2],g=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Xt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(Xt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-_,S),this._y=0);break;default:yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return N_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(N_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return O_.setFromEuler(this),this.setFromQuaternion(O_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ka.DEFAULT_ORDER="XYZ";class xy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let D1=0;const P_=new pe,Vs=new co,Na=new Tn,ju=new pe,sl=new pe,U1=new pe,L1=new co,F_=new pe(1,0,0),z_=new pe(0,1,0),I_=new pe(0,0,1),B_={type:"added"},N1={type:"removed"},ks={type:"childadded",child:null},hh={type:"childremoved",child:null};class ci extends uo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:D1++}),this.uuid=Dl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ci.DEFAULT_UP.clone();const e=new pe,i=new ka,s=new co,l=new pe(1,1,1);function u(){s.setFromEuler(i,!1)}function c(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Tn},normalMatrix:{value:new Ct}}),this.matrix=new Tn,this.matrixWorld=new Tn,this.matrixAutoUpdate=ci.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Vs.setFromAxisAngle(e,i),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,i){return Vs.setFromAxisAngle(e,i),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(F_,e)}rotateY(e){return this.rotateOnAxis(z_,e)}rotateZ(e){return this.rotateOnAxis(I_,e)}translateOnAxis(e,i){return P_.copy(e).applyQuaternion(this.quaternion),this.position.add(P_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(F_,e)}translateY(e){return this.translateOnAxis(z_,e)}translateZ(e){return this.translateOnAxis(I_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Na.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?ju.copy(e):ju.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Na.lookAt(sl,ju,this.up):Na.lookAt(ju,sl,this.up),this.quaternion.setFromRotationMatrix(Na),l&&(Na.extractRotation(l.matrixWorld),Vs.setFromRotationMatrix(Na),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Qt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(B_),ks.child=e,this.dispatchEvent(ks),ks.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(N1),hh.child=e,this.dispatchEvent(hh),hh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Na.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Na.multiply(e.parent.matrixWorld)),e.applyMatrix4(Na),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(B_),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const c=this.children[s].getObjectByProperty(e,i);if(c!==void 0)return c}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,c=l.length;u<c;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,e,U1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,L1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*s-u[8]*l,u[13]+=s-u[1]*i-u[5]*s-u[9]*l,u[14]+=l-u[2]*i-u[6]*s-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,c=l.length;u<c;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=c(e.geometries),m=c(e.materials),p=c(e.textures),_=c(e.images),v=c(e.shapes),g=c(e.skeletons),S=c(e.animations),T=c(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),S.length>0&&(s.animations=S),T.length>0&&(s.nodes=T)}return s.object=l,s;function c(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}ci.DEFAULT_UP=new pe(0,1,0);ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zu extends ci{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O1={type:"move"};class ph{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new pe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new pe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new pe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new pe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,c=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const A of e.hand.values()){const y=i.getJointPose(A,s),M=this._getHandJoint(p,A);y!==null&&(M.matrix.fromArray(y.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=y.radius),M.visible=y!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),S=.02,T=.005;p.inputState.pinching&&g>S+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=S-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(O1)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Zu;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const yy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},Ku={h:0,s:0,l:0};function mh(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class $t{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Yt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Yt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Yt.workingColorSpace){if(e=S1(e,1),i=Xt(i,0,1),s=Xt(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,c=2*s-u;this.r=mh(c,u,e+1/3),this.g=mh(c,u,e),this.b=mh(c,u,e-1/3)}return Yt.colorSpaceToWorking(this,l),this}setStyle(e,i=Oi){function s(u){u!==void 0&&parseFloat(u)<1&&yt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const c=l[1],h=l[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:yt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(c===6)return this.setHex(parseInt(u,16),i);yt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Oi){const s=yy[e.toLowerCase()];return s!==void 0?this.setHex(s,i):yt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}copyLinearToSRGB(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Oi){return Yt.workingToColorSpace(Yn.copy(this),e),Math.round(Xt(Yn.r*255,0,255))*65536+Math.round(Xt(Yn.g*255,0,255))*256+Math.round(Xt(Yn.b*255,0,255))}getHexString(e=Oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Yt.workingColorSpace){Yt.workingToColorSpace(Yn.copy(this),i);const s=Yn.r,l=Yn.g,u=Yn.b,c=Math.max(s,l,u),h=Math.min(s,l,u);let m,p;const _=(h+c)/2;if(h===c)m=0,p=0;else{const v=c-h;switch(p=_<=.5?v/(c+h):v/(2-c-h),c){case s:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-s)/v+2;break;case u:m=(s-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Yt.workingColorSpace){return Yt.workingToColorSpace(Yn.copy(this),i),e.r=Yn.r,e.g=Yn.g,e.b=Yn.b,e}getStyle(e=Oi){Yt.workingToColorSpace(Yn.copy(this),e);const i=Yn.r,s=Yn.g,l=Yn.b;return e!==Oi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+i,_r.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(_r),e.getHSL(Ku);const s=lh(_r.h,Ku.h,i),l=lh(_r.s,Ku.s,i),u=lh(_r.l,Ku.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yn=new $t;$t.NAMES=yy;class H_ extends ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ka,this.environmentIntensity=1,this.environmentRotation=new ka,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const qi=new pe,Oa=new pe,gh=new pe,Pa=new pe,Xs=new pe,Ws=new pe,G_=new pe,vh=new pe,_h=new pe,xh=new pe,yh=new yn,Sh=new yn,Mh=new yn;class Zi{constructor(e=new pe,i=new pe,s=new pe){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),qi.subVectors(e,i),l.cross(qi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){qi.subVectors(l,i),Oa.subVectors(s,i),gh.subVectors(e,i);const c=qi.dot(qi),h=qi.dot(Oa),m=qi.dot(gh),p=Oa.dot(Oa),_=Oa.dot(gh),v=c*p-h*h;if(v===0)return u.set(0,0,0),null;const g=1/v,S=(p*m-h*_)*g,T=(c*_-h*m)*g;return u.set(1-S-T,T,S)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Pa)===null?!1:Pa.x>=0&&Pa.y>=0&&Pa.x+Pa.y<=1}static getInterpolation(e,i,s,l,u,c,h,m){return this.getBarycoord(e,i,s,l,Pa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Pa.x),m.addScaledVector(c,Pa.y),m.addScaledVector(h,Pa.z),m)}static getInterpolatedAttribute(e,i,s,l,u,c){return yh.setScalar(0),Sh.setScalar(0),Mh.setScalar(0),yh.fromBufferAttribute(e,i),Sh.fromBufferAttribute(e,s),Mh.fromBufferAttribute(e,l),c.setScalar(0),c.addScaledVector(yh,u.x),c.addScaledVector(Sh,u.y),c.addScaledVector(Mh,u.z),c}static isFrontFacing(e,i,s,l){return qi.subVectors(s,i),Oa.subVectors(e,i),qi.cross(Oa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qi.subVectors(this.c,this.b),Oa.subVectors(this.a,this.b),qi.cross(Oa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Zi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return Zi.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return Zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let c,h;Xs.subVectors(l,s),Ws.subVectors(u,s),vh.subVectors(e,s);const m=Xs.dot(vh),p=Ws.dot(vh);if(m<=0&&p<=0)return i.copy(s);_h.subVectors(e,l);const _=Xs.dot(_h),v=Ws.dot(_h);if(_>=0&&v<=_)return i.copy(l);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return c=m/(m-_),i.copy(s).addScaledVector(Xs,c);xh.subVectors(e,u);const S=Xs.dot(xh),T=Ws.dot(xh);if(T>=0&&S<=T)return i.copy(u);const A=S*p-m*T;if(A<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(s).addScaledVector(Ws,h);const y=_*T-S*v;if(y<=0&&v-_>=0&&S-T>=0)return G_.subVectors(u,l),h=(v-_)/(v-_+(S-T)),i.copy(l).addScaledVector(G_,h);const M=1/(y+A+g);return c=A*M,h=g*M,i.copy(s).addScaledVector(Xs,c).addScaledVector(Ws,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ul{constructor(e=new pe(1/0,1/0,1/0),i=new pe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Yi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Yi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Yi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let c=0,h=u.count;c<h;c++)e.isMesh===!0?e.getVertexPosition(c,Yi):Yi.fromBufferAttribute(u,c),Yi.applyMatrix4(e.matrixWorld),this.expandByPoint(Yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qu.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Qu.copy(s.boundingBox)),Qu.applyMatrix4(e.matrixWorld),this.union(Qu)}const l=e.children;for(let u=0,c=l.length;u<c;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ol),Ju.subVectors(this.max,ol),qs.subVectors(e.a,ol),Ys.subVectors(e.b,ol),js.subVectors(e.c,ol),xr.subVectors(Ys,qs),yr.subVectors(js,Ys),qr.subVectors(qs,js);let i=[0,-xr.z,xr.y,0,-yr.z,yr.y,0,-qr.z,qr.y,xr.z,0,-xr.x,yr.z,0,-yr.x,qr.z,0,-qr.x,-xr.y,xr.x,0,-yr.y,yr.x,0,-qr.y,qr.x,0];return!Eh(i,qs,Ys,js,Ju)||(i=[1,0,0,0,1,0,0,0,1],!Eh(i,qs,Ys,js,Ju))?!1:($u.crossVectors(xr,yr),i=[$u.x,$u.y,$u.z],Eh(i,qs,Ys,js,Ju))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fa=[new pe,new pe,new pe,new pe,new pe,new pe,new pe,new pe],Yi=new pe,Qu=new Ul,qs=new pe,Ys=new pe,js=new pe,xr=new pe,yr=new pe,qr=new pe,ol=new pe,Ju=new pe,$u=new pe,Yr=new pe;function Eh(a,e,i,s,l){for(let u=0,c=a.length-3;u<=c;u+=3){Yr.fromArray(a,u);const h=l.x*Math.abs(Yr.x)+l.y*Math.abs(Yr.y)+l.z*Math.abs(Yr.z),m=e.dot(Yr),p=i.dot(Yr),_=s.dot(Yr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const Nn=new pe,ec=new Tt;let P1=0;class $i{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:P1++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=A_,this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)ec.fromBufferAttribute(this,i),ec.applyMatrix3(e),this.setXY(i,ec.x,ec.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Nn.fromBufferAttribute(this,i),Nn.applyMatrix3(e),this.setXYZ(i,Nn.x,Nn.y,Nn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)Nn.fromBufferAttribute(this,i),Nn.applyMatrix4(e),this.setXYZ(i,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Nn.fromBufferAttribute(this,i),Nn.applyNormalMatrix(e),this.setXYZ(i,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Nn.fromBufferAttribute(this,i),Nn.transformDirection(e),this.setXYZ(i,Nn.x,Nn.y,Nn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=rl(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=li(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=rl(i,this.array)),i}setX(e,i){return this.normalized&&(i=li(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=rl(i,this.array)),i}setY(e,i){return this.normalized&&(i=li(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=rl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=li(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=rl(i,this.array)),i}setW(e,i){return this.normalized&&(i=li(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=li(i,this.array),s=li(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=li(i,this.array),s=li(s,this.array),l=li(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=li(i,this.array),s=li(s,this.array),l=li(l,this.array),u=li(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==A_&&(e.usage=this.usage),e}}class Sy extends $i{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class My extends $i{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class ea extends $i{constructor(e,i,s){super(new Float32Array(e),i,s)}}const F1=new Ul,ll=new pe,bh=new pe;class Bc{constructor(e=new pe,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):F1.setFromPoints(e).getCenter(s);let l=0;for(let u=0,c=e.length;u<c;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ll.subVectors(e,this.center);const i=ll.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(ll,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ll.copy(e.center).add(bh)),this.expandByPoint(ll.copy(e.center).sub(bh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let z1=0;const Li=new Tn,Th=new ci,Zs=new pe,Si=new Ul,ul=new Ul,Bn=new pe;class ta extends uo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z1++}),this.uuid=Dl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(v1(e)?My:Sy)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new Ct().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Li.makeRotationFromQuaternion(e),this.applyMatrix4(Li),this}rotateX(e){return Li.makeRotationX(e),this.applyMatrix4(Li),this}rotateY(e){return Li.makeRotationY(e),this.applyMatrix4(Li),this}rotateZ(e){return Li.makeRotationZ(e),this.applyMatrix4(Li),this}translate(e,i,s){return Li.makeTranslation(e,i,s),this.applyMatrix4(Li),this}scale(e,i,s){return Li.makeScale(e,i,s),this.applyMatrix4(Li),this}lookAt(e){return Th.lookAt(e),Th.updateMatrix(),this.applyMatrix4(Th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const c=e[l];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new ea(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ul);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new pe(-1/0,-1/0,-1/0),new pe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];Si.setFromBufferAttribute(u),this.morphTargetsRelative?(Bn.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(Bn),Bn.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(Bn)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new pe,1/0);return}if(e){const s=this.boundingSphere.center;if(Si.setFromBufferAttribute(e),i)for(let u=0,c=i.length;u<c;u++){const h=i[u];ul.setFromBufferAttribute(h),this.morphTargetsRelative?(Bn.addVectors(Si.min,ul.min),Si.expandByPoint(Bn),Bn.addVectors(Si.max,ul.max),Si.expandByPoint(Bn)):(Si.expandByPoint(ul.min),Si.expandByPoint(ul.max))}Si.getCenter(s);let l=0;for(let u=0,c=e.count;u<c;u++)Bn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(Bn));if(i)for(let u=0,c=i.length;u<c;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)Bn.fromBufferAttribute(h,p),m&&(Zs.fromBufferAttribute(e,p),Bn.add(Zs)),l=Math.max(l,s.distanceToSquared(Bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $i(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),h=[],m=[];for(let b=0;b<s.count;b++)h[b]=new pe,m[b]=new pe;const p=new pe,_=new pe,v=new pe,g=new Tt,S=new Tt,T=new Tt,A=new pe,y=new pe;function M(b,D,re){p.fromBufferAttribute(s,b),_.fromBufferAttribute(s,D),v.fromBufferAttribute(s,re),g.fromBufferAttribute(u,b),S.fromBufferAttribute(u,D),T.fromBufferAttribute(u,re),_.sub(p),v.sub(p),S.sub(g),T.sub(g);const G=1/(S.x*T.y-T.x*S.y);isFinite(G)&&(A.copy(_).multiplyScalar(T.y).addScaledVector(v,-S.y).multiplyScalar(G),y.copy(v).multiplyScalar(S.x).addScaledVector(_,-T.x).multiplyScalar(G),h[b].add(A),h[D].add(A),h[re].add(A),m[b].add(y),m[D].add(y),m[re].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let b=0,D=w.length;b<D;++b){const re=w[b],G=re.start,K=re.count;for(let ie=G,ee=G+K;ie<ee;ie+=3)M(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const U=new pe,N=new pe,H=new pe,B=new pe;function z(b){H.fromBufferAttribute(l,b),B.copy(H);const D=h[b];U.copy(D),U.sub(H.multiplyScalar(H.dot(D))).normalize(),N.crossVectors(B,D);const G=N.dot(m[b])<0?-1:1;c.setXYZW(b,U.x,U.y,U.z,G)}for(let b=0,D=w.length;b<D;++b){const re=w[b],G=re.start,K=re.count;for(let ie=G,ee=G+K;ie<ee;ie+=3)z(e.getX(ie+0)),z(e.getX(ie+1)),z(e.getX(ie+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new $i(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,S=s.count;g<S;g++)s.setXYZ(g,0,0,0);const l=new pe,u=new pe,c=new pe,h=new pe,m=new pe,p=new pe,_=new pe,v=new pe;if(e)for(let g=0,S=e.count;g<S;g+=3){const T=e.getX(g+0),A=e.getX(g+1),y=e.getX(g+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,A),c.fromBufferAttribute(i,y),_.subVectors(c,u),v.subVectors(l,u),_.cross(v),h.fromBufferAttribute(s,T),m.fromBufferAttribute(s,A),p.fromBufferAttribute(s,y),h.add(_),m.add(_),p.add(_),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let g=0,S=i.count;g<S;g+=3)l.fromBufferAttribute(i,g+0),u.fromBufferAttribute(i,g+1),c.fromBufferAttribute(i,g+2),_.subVectors(c,u),v.subVectors(l,u),_.cross(v),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Bn.fromBufferAttribute(e,i),Bn.normalize(),e.setXYZ(i,Bn.x,Bn.y,Bn.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,v=h.normalized,g=new p.constructor(m.length*_);let S=0,T=0;for(let A=0,y=m.length;A<y;A++){h.isInterleavedBufferAttribute?S=m[A]*h.data.stride+h.offset:S=m[A]*_;for(let M=0;M<_;M++)g[T++]=p[S++]}return new $i(g,_,v)}if(this.index===null)return yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ta,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let _=0,v=p.length;_<v;_++){const g=p[_],S=e(g,s);m.push(S)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let h=0,m=c.length;h<m;h++){const p=c[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const S=p[v];_.push(S.toJSON(e.data))}_.length>0&&(l[m]=_,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=e.morphAttributes;for(const p in u){const _=[],v=u[p];for(let g=0,S=v.length;g<S;g++)_.push(v[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,_=c.length;p<_;p++){const v=c[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let I1=0;class Ll extends uo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:I1++}),this.uuid=Dl(),this.name="",this.type="Material",this.blending=no,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kh,this.blendDst=Xh,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=T_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){yt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){yt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==no&&(s.blending=this.blending),this.side!==Cr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==kh&&(s.blendSrc=this.blendSrc),this.blendDst!==Xh&&(s.blendDst=this.blendDst),this.blendEquation!==$r&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==T_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const c=[];for(const h in u){const m=u[h];delete m.metadata,c.push(m)}return c}if(i){const u=l(e.textures),c=l(e.images);u.length>0&&(s.textures=u),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const za=new pe,Ah=new pe,tc=new pe,Sr=new pe,Rh=new pe,nc=new pe,Ch=new pe;class Ey{constructor(e=new pe,i=new pe(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,za)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=za.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(za.copy(this.origin).addScaledVector(this.direction,i),za.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Ah.copy(e).add(i).multiplyScalar(.5),tc.copy(i).sub(e).normalize(),Sr.copy(this.origin).sub(Ah);const u=e.distanceTo(i)*.5,c=-this.direction.dot(tc),h=Sr.dot(this.direction),m=-Sr.dot(tc),p=Sr.lengthSq(),_=Math.abs(1-c*c);let v,g,S,T;if(_>0)if(v=c*m-h,g=c*h-m,T=u*_,v>=0)if(g>=-T)if(g<=T){const A=1/_;v*=A,g*=A,S=v*(v+c*g+2*h)+g*(c*v+g+2*m)+p}else g=u,v=Math.max(0,-(c*g+h)),S=-v*v+g*(g+2*m)+p;else g=-u,v=Math.max(0,-(c*g+h)),S=-v*v+g*(g+2*m)+p;else g<=-T?(v=Math.max(0,-(-c*u+h)),g=v>0?-u:Math.min(Math.max(-u,-m),u),S=-v*v+g*(g+2*m)+p):g<=T?(v=0,g=Math.min(Math.max(-u,-m),u),S=g*(g+2*m)+p):(v=Math.max(0,-(c*u+h)),g=v>0?u:Math.min(Math.max(-u,-m),u),S=-v*v+g*(g+2*m)+p);else g=c>0?-u:u,v=Math.max(0,-(c*g+h)),S=-v*v+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Ah).addScaledVector(tc,g),S}intersectSphere(e,i){za.subVectors(e.center,this.origin);const s=za.dot(this.direction),l=za.dot(za)-s*s,u=e.radius*e.radius;if(l>u)return null;const c=Math.sqrt(u-l),h=s-c,m=s+c;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,c,h,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(s=(e.min.x-g.x)*p,l=(e.max.x-g.x)*p):(s=(e.max.x-g.x)*p,l=(e.min.x-g.x)*p),_>=0?(u=(e.min.y-g.y)*_,c=(e.max.y-g.y)*_):(u=(e.max.y-g.y)*_,c=(e.min.y-g.y)*_),s>c||u>l||((u>s||isNaN(s))&&(s=u),(c<l||isNaN(l))&&(l=c),v>=0?(h=(e.min.z-g.z)*v,m=(e.max.z-g.z)*v):(h=(e.max.z-g.z)*v,m=(e.min.z-g.z)*v),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,za)!==null}intersectTriangle(e,i,s,l,u){Rh.subVectors(i,e),nc.subVectors(s,e),Ch.crossVectors(Rh,nc);let c=this.direction.dot(Ch),h;if(c>0){if(l)return null;h=1}else if(c<0)h=-1,c=-c;else return null;Sr.subVectors(this.origin,e);const m=h*this.direction.dot(nc.crossVectors(Sr,nc));if(m<0)return null;const p=h*this.direction.dot(Rh.cross(Sr));if(p<0||m+p>c)return null;const _=-h*Sr.dot(Ch);return _<0?null:this.at(_/c,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class by extends Ll{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ka,this.combine=ty,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const V_=new Tn,jr=new Ey,ic=new Bc,k_=new pe,ac=new pe,rc=new pe,sc=new pe,wh=new pe,oc=new pe,X_=new pe,lc=new pe;class zi extends ci{constructor(e=new ta,i=new by){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=l.length;u<c;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,c=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){oc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=h[m],v=u[m];_!==0&&(wh.fromBufferAttribute(v,e),c?oc.addScaledVector(wh,_):oc.addScaledVector(wh.sub(i),_))}i.add(oc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),ic.copy(s.boundingSphere),ic.applyMatrix4(u),jr.copy(e.ray).recast(e.near),!(ic.containsPoint(jr.origin)===!1&&(jr.intersectSphere(ic,k_)===null||jr.origin.distanceToSquared(k_)>(e.far-e.near)**2))&&(V_.copy(u).invert(),jr.copy(e.ray).applyMatrix4(V_),!(s.boundingBox!==null&&jr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,jr)))}_computeIntersections(e,i,s){let l;const u=this.geometry,c=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,g=u.groups,S=u.drawRange;if(h!==null)if(Array.isArray(c))for(let T=0,A=g.length;T<A;T++){const y=g[T],M=c[y.materialIndex],w=Math.max(y.start,S.start),U=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let N=w,H=U;N<H;N+=3){const B=h.getX(N),z=h.getX(N+1),b=h.getX(N+2);l=uc(this,M,e,s,p,_,v,B,z,b),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),A=Math.min(h.count,S.start+S.count);for(let y=T,M=A;y<M;y+=3){const w=h.getX(y),U=h.getX(y+1),N=h.getX(y+2);l=uc(this,c,e,s,p,_,v,w,U,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(c))for(let T=0,A=g.length;T<A;T++){const y=g[T],M=c[y.materialIndex],w=Math.max(y.start,S.start),U=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let N=w,H=U;N<H;N+=3){const B=N,z=N+1,b=N+2;l=uc(this,M,e,s,p,_,v,B,z,b),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),A=Math.min(m.count,S.start+S.count);for(let y=T,M=A;y<M;y+=3){const w=y,U=y+1,N=y+2;l=uc(this,c,e,s,p,_,v,w,U,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function B1(a,e,i,s,l,u,c,h){let m;if(e.side===ui?m=s.intersectTriangle(c,u,l,!0,h):m=s.intersectTriangle(l,u,c,e.side===Cr,h),m===null)return null;lc.copy(h),lc.applyMatrix4(a.matrixWorld);const p=i.ray.origin.distanceTo(lc);return p<i.near||p>i.far?null:{distance:p,point:lc.clone(),object:a}}function uc(a,e,i,s,l,u,c,h,m,p){a.getVertexPosition(h,ac),a.getVertexPosition(m,rc),a.getVertexPosition(p,sc);const _=B1(a,e,i,s,ac,rc,sc,X_);if(_){const v=new pe;Zi.getBarycoord(X_,ac,rc,sc,v),l&&(_.uv=Zi.getInterpolatedAttribute(l,h,m,p,v,new Tt)),u&&(_.uv1=Zi.getInterpolatedAttribute(u,h,m,p,v,new Tt)),c&&(_.normal=Zi.getInterpolatedAttribute(c,h,m,p,v,new pe),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new pe,materialIndex:0};Zi.getNormal(ac,rc,sc,g.normal),_.face=g,_.barycoord=v}return _}class Ty extends ei{constructor(e=null,i=1,s=1,l,u,c,h,m,p=Xn,_=Xn,v,g){super(null,c,h,m,p,_,l,u,v,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dh=new pe,H1=new pe,G1=new Ct;class Jr{constructor(e=new pe(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Dh.subVectors(s,i).cross(H1.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Dh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||G1.getNormalMatrix(e),l=this.coplanarPoint(Dh).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zr=new Bc,V1=new Tt(.5,.5),cc=new pe;class Ay{constructor(e=new Jr,i=new Jr,s=new Jr,l=new Jr,u=new Jr,c=new Jr){this.planes=[e,i,s,l,u,c]}set(e,i,s,l,u,c){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(u),h[5].copy(c),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ua,s=!1){const l=this.planes,u=e.elements,c=u[0],h=u[1],m=u[2],p=u[3],_=u[4],v=u[5],g=u[6],S=u[7],T=u[8],A=u[9],y=u[10],M=u[11],w=u[12],U=u[13],N=u[14],H=u[15];if(l[0].setComponents(p-c,S-_,M-T,H-w).normalize(),l[1].setComponents(p+c,S+_,M+T,H+w).normalize(),l[2].setComponents(p+h,S+v,M+A,H+U).normalize(),l[3].setComponents(p-h,S-v,M-A,H-U).normalize(),s)l[4].setComponents(m,g,y,N).normalize(),l[5].setComponents(p-m,S-g,M-y,H-N).normalize();else if(l[4].setComponents(p-m,S-g,M-y,H-N).normalize(),i===ua)l[5].setComponents(p+m,S+g,M+y,H+N).normalize();else if(i===Cc)l[5].setComponents(m,g,y,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(e){Zr.center.set(0,0,0);const i=V1.distanceTo(e.center);return Zr.radius=.7071067811865476+i,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(cc.x=l.normal.x>0?e.max.x:e.min.x,cc.y=l.normal.y>0?e.max.y:e.min.y,cc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(cc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class k1 extends Ll{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Uc=new pe,Lc=new pe,W_=new Tn,cl=new Ey,fc=new Bc,Uh=new pe,q_=new pe;class X1 extends ci{constructor(e=new ta,i=new k1){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)Uc.fromBufferAttribute(i,l-1),Lc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Uc.distanceTo(Lc);e.setAttribute("lineDistance",new ea(s,1))}else yt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,c=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),fc.copy(s.boundingSphere),fc.applyMatrix4(l),fc.radius+=u,e.ray.intersectsSphere(fc)===!1)return;W_.copy(l).invert(),cl.copy(e.ray).applyMatrix4(W_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,_=s.index,g=s.attributes.position;if(_!==null){const S=Math.max(0,c.start),T=Math.min(_.count,c.start+c.count);for(let A=S,y=T-1;A<y;A+=p){const M=_.getX(A),w=_.getX(A+1),U=dc(this,e,cl,m,M,w,A);U&&i.push(U)}if(this.isLineLoop){const A=_.getX(T-1),y=_.getX(S),M=dc(this,e,cl,m,A,y,T-1);M&&i.push(M)}}else{const S=Math.max(0,c.start),T=Math.min(g.count,c.start+c.count);for(let A=S,y=T-1;A<y;A+=p){const M=dc(this,e,cl,m,A,A+1,A);M&&i.push(M)}if(this.isLineLoop){const A=dc(this,e,cl,m,T-1,S,T-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=l.length;u<c;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function dc(a,e,i,s,l,u,c){const h=a.geometry.attributes.position;if(Uc.fromBufferAttribute(h,l),Lc.fromBufferAttribute(h,u),i.distanceSqToSegment(Uc,Lc,Uh,q_)>s)return;Uh.applyMatrix4(a.matrixWorld);const p=e.ray.origin.distanceTo(Uh);if(!(p<e.near||p>e.far))return{distance:p,point:q_.clone().applyMatrix4(a.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:a}}const Y_=new pe,j_=new pe;class W1 extends X1{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)Y_.fromBufferAttribute(i,l),j_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Y_.distanceTo(j_);e.setAttribute("lineDistance",new ea(s,1))}else yt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ry extends ei{constructor(e=[],i=rs,s,l,u,c,h,m,p,_){super(e,i,s,l,u,c,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bl extends ei{constructor(e,i,s=da,l,u,c,h=Xn,m=Xn,p,_=Va,v=1){if(_!==Va&&_!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:v};super(g,l,u,c,h,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new im(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class q1 extends bl{constructor(e,i=da,s=rs,l,u,c=Xn,h=Xn,m,p=Va){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,i,s,l,u,c,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Cy extends ei{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Nl extends ta{constructor(e=1,i=1,s=1,l=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:c};const h=this;l=Math.floor(l),u=Math.floor(u),c=Math.floor(c);const m=[],p=[],_=[],v=[];let g=0,S=0;T("z","y","x",-1,-1,s,i,e,c,u,0),T("z","y","x",1,-1,s,i,-e,c,u,1),T("x","z","y",1,1,e,s,i,l,c,2),T("x","z","y",1,-1,e,s,-i,l,c,3),T("x","y","z",1,-1,e,i,s,l,u,4),T("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new ea(p,3)),this.setAttribute("normal",new ea(_,3)),this.setAttribute("uv",new ea(v,2));function T(A,y,M,w,U,N,H,B,z,b,D){const re=N/z,G=H/b,K=N/2,ie=H/2,ee=B/2,Z=z+1,O=b+1;let I=0,oe=0;const ce=new pe;for(let be=0;be<O;be++){const P=be*G-ie;for(let Y=0;Y<Z;Y++){const xe=Y*re-K;ce[A]=xe*w,ce[y]=P*U,ce[M]=ee,p.push(ce.x,ce.y,ce.z),ce[A]=0,ce[y]=0,ce[M]=B>0?1:-1,_.push(ce.x,ce.y,ce.z),v.push(Y/z),v.push(1-be/b),I+=1}}for(let be=0;be<b;be++)for(let P=0;P<z;P++){const Y=g+P+Z*be,xe=g+P+Z*(be+1),Re=g+(P+1)+Z*(be+1),Ge=g+(P+1)+Z*be;m.push(Y,xe,Ge),m.push(xe,Re,Ge),oe+=6}h.addGroup(S,oe,D),S+=oe,g+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class as extends ta{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,c=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,_=m+1,v=e/h,g=i/m,S=[],T=[],A=[],y=[];for(let M=0;M<_;M++){const w=M*g-c;for(let U=0;U<p;U++){const N=U*v-u;T.push(N,-w,0),A.push(0,0,1),y.push(U/h),y.push(1-M/m)}}for(let M=0;M<m;M++)for(let w=0;w<h;w++){const U=w+p*M,N=w+p*(M+1),H=w+1+p*(M+1),B=w+1+p*M;S.push(U,N,B),S.push(N,H,B)}this.setIndex(S),this.setAttribute("position",new ea(T,3)),this.setAttribute("normal",new ea(A,3)),this.setAttribute("uv",new ea(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.width,e.height,e.widthSegments,e.heightSegments)}}function lo(a){const e={};for(const i in a){e[i]={};for(const s in a[i]){const l=a[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function $n(a){const e={};for(let i=0;i<a.length;i++){const s=lo(a[i]);for(const l in s)e[l]=s[l]}return e}function Y1(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function wy(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Yt.workingColorSpace}const j1={clone:lo,merge:$n};var Z1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pa extends Ll{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Z1,this.fragmentShader=K1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lo(e.uniforms),this.uniformsGroups=Y1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const c=this.uniforms[l].value;c&&c.isTexture?i.uniforms[l]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?i.uniforms[l]={type:"c",value:c.getHex()}:c&&c.isVector2?i.uniforms[l]={type:"v2",value:c.toArray()}:c&&c.isVector3?i.uniforms[l]={type:"v3",value:c.toArray()}:c&&c.isVector4?i.uniforms[l]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?i.uniforms[l]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?i.uniforms[l]={type:"m4",value:c.toArray()}:i.uniforms[l]={value:c}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class gl extends pa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Q1 extends Ll{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=l1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class J1 extends Ll{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hc=new pe,pc=new co,sa=new pe;class Nc extends ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tn,this.projectionMatrix=new Tn,this.projectionMatrixInverse=new Tn,this.coordinateSystem=ua,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(hc,pc,sa),sa.x===1&&sa.y===1&&sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hc,pc,sa.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(hc,pc,sa),sa.x===1&&sa.y===1&&sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hc,pc,sa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Mr=new pe,Z_=new Tt,K_=new Tt;class ji extends Nc{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Lp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lp*2*Math.atan(Math.tan(oh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,i){return this.getViewBounds(e,Z_,K_),i.subVectors(K_,Z_)}setViewOffset(e,i,s,l,u,c){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(oh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const c=this.view;if(this.view!==null&&this.view.enabled){const m=c.fullWidth,p=c.fullHeight;u+=c.offsetX*l/m,i-=c.offsetY*s/p,l*=c.width/m,s*=c.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Dy extends Nc{constructor(e=-1,i=1,s=1,l=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,c=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,c=u+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(u,c,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ks=-90,Qs=1;class $1 extends ci{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ji(Ks,Qs,e,i);l.layers=this.layers,this.add(l);const u=new ji(Ks,Qs,e,i);u.layers=this.layers,this.add(u);const c=new ji(Ks,Qs,e,i);c.layers=this.layers,this.add(c);const h=new ji(Ks,Qs,e,i);h.layers=this.layers,this.add(h);const m=new ji(Ks,Qs,e,i);m.layers=this.layers,this.add(m);const p=new ji(Ks,Qs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,c,h,m]=i;for(const p of i)this.remove(p);if(e===ua)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Cc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,c,h,m,p,_]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(s,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,_),e.setRenderTarget(v,g,S),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class eA extends ji{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class tA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,yt("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function Q_(a,e,i,s){const l=nA(s);switch(i){case py:return a*e;case gy:return a*e/l.components*l.byteLength;case Jp:return a*e/l.components*l.byteLength;case so:return a*e*2/l.components*l.byteLength;case $p:return a*e*2/l.components*l.byteLength;case my:return a*e*3/l.components*l.byteLength;case Fi:return a*e*4/l.components*l.byteLength;case em:return a*e*4/l.components*l.byteLength;case Sc:case Mc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Ec:case bc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case tp:case ip:return Math.max(a,16)*Math.max(e,8)/4;case ep:case np:return Math.max(a,8)*Math.max(e,8)/2;case ap:case rp:case op:case lp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case sp:case up:case cp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case fp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case dp:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case hp:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case pp:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case mp:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case gp:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case vp:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case _p:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case xp:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case yp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Sp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Mp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Ep:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case bp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Tp:case Ap:case Rp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Cp:case wp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Dp:case Up:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function nA(a){switch(a){case Pi:case cy:return{byteLength:1,components:1};case Ml:case fy:case ha:return{byteLength:2,components:1};case Kp:case Qp:return{byteLength:2,components:4};case da:case Zp:case Ki:return{byteLength:4,components:1};case dy:case hy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jp}}));typeof window<"u"&&(window.__THREE__?yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jp);function Uy(){let a=null,e=!1,i=null,s=null;function l(u,c){i(u,c),s=a.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=a.requestAnimationFrame(l),e=!0)},stop:function(){a.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){a=u}}}function iA(a){const e=new WeakMap;function i(h,m){const p=h.array,_=h.usage,v=p.byteLength,g=a.createBuffer();a.bindBuffer(m,g),a.bufferData(m,p,_),h.onUploadCallback();let S;if(p instanceof Float32Array)S=a.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=a.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=a.HALF_FLOAT:S=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=a.SHORT;else if(p instanceof Uint32Array)S=a.UNSIGNED_INT;else if(p instanceof Int32Array)S=a.INT;else if(p instanceof Int8Array)S=a.BYTE;else if(p instanceof Uint8Array)S=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,m,p){const _=m.array,v=m.updateRanges;if(a.bindBuffer(p,h),v.length===0)a.bufferSubData(p,0,_);else{v.sort((S,T)=>S.start-T.start);let g=0;for(let S=1;S<v.length;S++){const T=v[g],A=v[S];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++g,v[g]=A)}v.length=g+1;for(let S=0,T=v.length;S<T;S++){const A=v[S];a.bufferSubData(p,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(a.deleteBuffer(m.buffer),e.delete(h))}function c(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:c}}var aA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,hA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_A=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,MA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,EA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,TA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,AA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,RA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,CA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,DA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,UA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,OA="gl_FragColor = linearToOutputTexel( gl_FragColor );",PA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,FA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,zA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,IA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,BA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,GA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,VA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,YA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,KA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,QA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$A=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nR=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,aR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rR=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_R=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,MR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ER=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,AR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,RR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,UR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,NR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,OR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,HR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,GR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,VR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,WR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,YR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,QR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,JR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$R=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_C=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,MC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,CC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,LC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dt={alphahash_fragment:aA,alphahash_pars_fragment:rA,alphamap_fragment:sA,alphamap_pars_fragment:oA,alphatest_fragment:lA,alphatest_pars_fragment:uA,aomap_fragment:cA,aomap_pars_fragment:fA,batching_pars_vertex:dA,batching_vertex:hA,begin_vertex:pA,beginnormal_vertex:mA,bsdfs:gA,iridescence_fragment:vA,bumpmap_pars_fragment:_A,clipping_planes_fragment:xA,clipping_planes_pars_fragment:yA,clipping_planes_pars_vertex:SA,clipping_planes_vertex:MA,color_fragment:EA,color_pars_fragment:bA,color_pars_vertex:TA,color_vertex:AA,common:RA,cube_uv_reflection_fragment:CA,defaultnormal_vertex:wA,displacementmap_pars_vertex:DA,displacementmap_vertex:UA,emissivemap_fragment:LA,emissivemap_pars_fragment:NA,colorspace_fragment:OA,colorspace_pars_fragment:PA,envmap_fragment:FA,envmap_common_pars_fragment:zA,envmap_pars_fragment:IA,envmap_pars_vertex:BA,envmap_physical_pars_fragment:KA,envmap_vertex:HA,fog_vertex:GA,fog_pars_vertex:VA,fog_fragment:kA,fog_pars_fragment:XA,gradientmap_pars_fragment:WA,lightmap_pars_fragment:qA,lights_lambert_fragment:YA,lights_lambert_pars_fragment:jA,lights_pars_begin:ZA,lights_toon_fragment:QA,lights_toon_pars_fragment:JA,lights_phong_fragment:$A,lights_phong_pars_fragment:eR,lights_physical_fragment:tR,lights_physical_pars_fragment:nR,lights_fragment_begin:iR,lights_fragment_maps:aR,lights_fragment_end:rR,logdepthbuf_fragment:sR,logdepthbuf_pars_fragment:oR,logdepthbuf_pars_vertex:lR,logdepthbuf_vertex:uR,map_fragment:cR,map_pars_fragment:fR,map_particle_fragment:dR,map_particle_pars_fragment:hR,metalnessmap_fragment:pR,metalnessmap_pars_fragment:mR,morphinstance_vertex:gR,morphcolor_vertex:vR,morphnormal_vertex:_R,morphtarget_pars_vertex:xR,morphtarget_vertex:yR,normal_fragment_begin:SR,normal_fragment_maps:MR,normal_pars_fragment:ER,normal_pars_vertex:bR,normal_vertex:TR,normalmap_pars_fragment:AR,clearcoat_normal_fragment_begin:RR,clearcoat_normal_fragment_maps:CR,clearcoat_pars_fragment:wR,iridescence_pars_fragment:DR,opaque_fragment:UR,packing:LR,premultiplied_alpha_fragment:NR,project_vertex:OR,dithering_fragment:PR,dithering_pars_fragment:FR,roughnessmap_fragment:zR,roughnessmap_pars_fragment:IR,shadowmap_pars_fragment:BR,shadowmap_pars_vertex:HR,shadowmap_vertex:GR,shadowmask_pars_fragment:VR,skinbase_vertex:kR,skinning_pars_vertex:XR,skinning_vertex:WR,skinnormal_vertex:qR,specularmap_fragment:YR,specularmap_pars_fragment:jR,tonemapping_fragment:ZR,tonemapping_pars_fragment:KR,transmission_fragment:QR,transmission_pars_fragment:JR,uv_pars_fragment:$R,uv_pars_vertex:eC,uv_vertex:tC,worldpos_vertex:nC,background_vert:iC,background_frag:aC,backgroundCube_vert:rC,backgroundCube_frag:sC,cube_vert:oC,cube_frag:lC,depth_vert:uC,depth_frag:cC,distance_vert:fC,distance_frag:dC,equirect_vert:hC,equirect_frag:pC,linedashed_vert:mC,linedashed_frag:gC,meshbasic_vert:vC,meshbasic_frag:_C,meshlambert_vert:xC,meshlambert_frag:yC,meshmatcap_vert:SC,meshmatcap_frag:MC,meshnormal_vert:EC,meshnormal_frag:bC,meshphong_vert:TC,meshphong_frag:AC,meshphysical_vert:RC,meshphysical_frag:CC,meshtoon_vert:wC,meshtoon_frag:DC,points_vert:UC,points_frag:LC,shadow_vert:NC,shadow_frag:OC,sprite_vert:PC,sprite_frag:FC},ke={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ct}},envmap:{envMap:{value:null},envMapRotation:{value:new Ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ct},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0},uvTransform:{value:new Ct}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}}},la={basic:{uniforms:$n([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:$n([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new $t(0)},envMapIntensity:{value:1}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:$n([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:$n([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:$n([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new $t(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:$n([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:$n([ke.points,ke.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:$n([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:$n([ke.common,ke.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:$n([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:$n([ke.sprite,ke.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ct}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distance:{uniforms:$n([ke.common,ke.displacementmap,{referencePosition:{value:new pe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distance_vert,fragmentShader:Dt.distance_frag},shadow:{uniforms:$n([ke.lights,ke.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};la.physical={uniforms:$n([la.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ct},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ct},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ct},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ct},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ct},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ct}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const mc={r:0,b:0,g:0},Kr=new ka,zC=new Tn;function IC(a,e,i,s,l,u){const c=new $t(0);let h=l===!0?0:1,m,p,_=null,v=0,g=null;function S(w){let U=w.isScene===!0?w.background:null;if(U&&U.isTexture){const N=w.backgroundBlurriness>0;U=e.get(U,N)}return U}function T(w){let U=!1;const N=S(w);N===null?y(c,h):N&&N.isColor&&(y(N,1),U=!0);const H=a.xr.getEnvironmentBlendMode();H==="additive"?i.buffers.color.setClear(0,0,0,1,u):H==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(a.autoClear||U)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function A(w,U){const N=S(U);N&&(N.isCubeTexture||N.mapping===Ic)?(p===void 0&&(p=new zi(new Nl(1,1,1),new pa({name:"BackgroundCubeMaterial",uniforms:lo(la.backgroundCube.uniforms),vertexShader:la.backgroundCube.vertexShader,fragmentShader:la.backgroundCube.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(H,B,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),Kr.copy(U.backgroundRotation),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),p.material.uniforms.envMap.value=N,p.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(zC.makeRotationFromEuler(Kr)),p.material.toneMapped=Yt.getTransfer(N.colorSpace)!==on,(_!==N||v!==N.version||g!==a.toneMapping)&&(p.material.needsUpdate=!0,_=N,v=N.version,g=a.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new zi(new as(2,2),new pa({name:"BackgroundMaterial",uniforms:lo(la.background.uniforms),vertexShader:la.background.vertexShader,fragmentShader:la.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Yt.getTransfer(N.colorSpace)!==on,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||v!==N.version||g!==a.toneMapping)&&(m.material.needsUpdate=!0,_=N,v=N.version,g=a.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function y(w,U){w.getRGB(mc,wy(a)),i.buffers.color.setClear(mc.r,mc.g,mc.b,U,u)}function M(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return c},setClearColor:function(w,U=1){c.set(w),h=U,y(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(w){h=w,y(c,h)},render:T,addToRenderList:A,dispose:M}}function BC(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),s={},l=g(null);let u=l,c=!1;function h(G,K,ie,ee,Z){let O=!1;const I=v(G,ee,ie,K);u!==I&&(u=I,p(u.object)),O=S(G,ee,ie,Z),O&&T(G,ee,ie,Z),Z!==null&&e.update(Z,a.ELEMENT_ARRAY_BUFFER),(O||c)&&(c=!1,N(G,K,ie,ee),Z!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function m(){return a.createVertexArray()}function p(G){return a.bindVertexArray(G)}function _(G){return a.deleteVertexArray(G)}function v(G,K,ie,ee){const Z=ee.wireframe===!0;let O=s[K.id];O===void 0&&(O={},s[K.id]=O);const I=G.isInstancedMesh===!0?G.id:0;let oe=O[I];oe===void 0&&(oe={},O[I]=oe);let ce=oe[ie.id];ce===void 0&&(ce={},oe[ie.id]=ce);let be=ce[Z];return be===void 0&&(be=g(m()),ce[Z]=be),be}function g(G){const K=[],ie=[],ee=[];for(let Z=0;Z<i;Z++)K[Z]=0,ie[Z]=0,ee[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ie,attributeDivisors:ee,object:G,attributes:{},index:null}}function S(G,K,ie,ee){const Z=u.attributes,O=K.attributes;let I=0;const oe=ie.getAttributes();for(const ce in oe)if(oe[ce].location>=0){const P=Z[ce];let Y=O[ce];if(Y===void 0&&(ce==="instanceMatrix"&&G.instanceMatrix&&(Y=G.instanceMatrix),ce==="instanceColor"&&G.instanceColor&&(Y=G.instanceColor)),P===void 0||P.attribute!==Y||Y&&P.data!==Y.data)return!0;I++}return u.attributesNum!==I||u.index!==ee}function T(G,K,ie,ee){const Z={},O=K.attributes;let I=0;const oe=ie.getAttributes();for(const ce in oe)if(oe[ce].location>=0){let P=O[ce];P===void 0&&(ce==="instanceMatrix"&&G.instanceMatrix&&(P=G.instanceMatrix),ce==="instanceColor"&&G.instanceColor&&(P=G.instanceColor));const Y={};Y.attribute=P,P&&P.data&&(Y.data=P.data),Z[ce]=Y,I++}u.attributes=Z,u.attributesNum=I,u.index=ee}function A(){const G=u.newAttributes;for(let K=0,ie=G.length;K<ie;K++)G[K]=0}function y(G){M(G,0)}function M(G,K){const ie=u.newAttributes,ee=u.enabledAttributes,Z=u.attributeDivisors;ie[G]=1,ee[G]===0&&(a.enableVertexAttribArray(G),ee[G]=1),Z[G]!==K&&(a.vertexAttribDivisor(G,K),Z[G]=K)}function w(){const G=u.newAttributes,K=u.enabledAttributes;for(let ie=0,ee=K.length;ie<ee;ie++)K[ie]!==G[ie]&&(a.disableVertexAttribArray(ie),K[ie]=0)}function U(G,K,ie,ee,Z,O,I){I===!0?a.vertexAttribIPointer(G,K,ie,Z,O):a.vertexAttribPointer(G,K,ie,ee,Z,O)}function N(G,K,ie,ee){A();const Z=ee.attributes,O=ie.getAttributes(),I=K.defaultAttributeValues;for(const oe in O){const ce=O[oe];if(ce.location>=0){let be=Z[oe];if(be===void 0&&(oe==="instanceMatrix"&&G.instanceMatrix&&(be=G.instanceMatrix),oe==="instanceColor"&&G.instanceColor&&(be=G.instanceColor)),be!==void 0){const P=be.normalized,Y=be.itemSize,xe=e.get(be);if(xe===void 0)continue;const Re=xe.buffer,Ge=xe.type,ne=xe.bytesPerElement,Se=Ge===a.INT||Ge===a.UNSIGNED_INT||be.gpuType===Zp;if(be.isInterleavedBufferAttribute){const Te=be.data,Ze=Te.stride,ut=be.offset;if(Te.isInstancedInterleavedBuffer){for(let pt=0;pt<ce.locationSize;pt++)M(ce.location+pt,Te.meshPerAttribute);G.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let pt=0;pt<ce.locationSize;pt++)y(ce.location+pt);a.bindBuffer(a.ARRAY_BUFFER,Re);for(let pt=0;pt<ce.locationSize;pt++)U(ce.location+pt,Y/ce.locationSize,Ge,P,Ze*ne,(ut+Y/ce.locationSize*pt)*ne,Se)}else{if(be.isInstancedBufferAttribute){for(let Te=0;Te<ce.locationSize;Te++)M(ce.location+Te,be.meshPerAttribute);G.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Te=0;Te<ce.locationSize;Te++)y(ce.location+Te);a.bindBuffer(a.ARRAY_BUFFER,Re);for(let Te=0;Te<ce.locationSize;Te++)U(ce.location+Te,Y/ce.locationSize,Ge,P,Y*ne,Y/ce.locationSize*Te*ne,Se)}}else if(I!==void 0){const P=I[oe];if(P!==void 0)switch(P.length){case 2:a.vertexAttrib2fv(ce.location,P);break;case 3:a.vertexAttrib3fv(ce.location,P);break;case 4:a.vertexAttrib4fv(ce.location,P);break;default:a.vertexAttrib1fv(ce.location,P)}}}}w()}function H(){D();for(const G in s){const K=s[G];for(const ie in K){const ee=K[ie];for(const Z in ee){const O=ee[Z];for(const I in O)_(O[I].object),delete O[I];delete ee[Z]}}delete s[G]}}function B(G){if(s[G.id]===void 0)return;const K=s[G.id];for(const ie in K){const ee=K[ie];for(const Z in ee){const O=ee[Z];for(const I in O)_(O[I].object),delete O[I];delete ee[Z]}}delete s[G.id]}function z(G){for(const K in s){const ie=s[K];for(const ee in ie){const Z=ie[ee];if(Z[G.id]===void 0)continue;const O=Z[G.id];for(const I in O)_(O[I].object),delete O[I];delete Z[G.id]}}}function b(G){for(const K in s){const ie=s[K],ee=G.isInstancedMesh===!0?G.id:0,Z=ie[ee];if(Z!==void 0){for(const O in Z){const I=Z[O];for(const oe in I)_(I[oe].object),delete I[oe];delete Z[O]}delete ie[ee],Object.keys(ie).length===0&&delete s[K]}}}function D(){re(),c=!0,u!==l&&(u=l,p(u.object))}function re(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:D,resetDefaultState:re,dispose:H,releaseStatesOfGeometry:B,releaseStatesOfObject:b,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:y,disableUnusedAttributes:w}}function HC(a,e,i){let s;function l(p){s=p}function u(p,_){a.drawArrays(s,p,_),i.update(_,s,1)}function c(p,_,v){v!==0&&(a.drawArraysInstanced(s,p,_,v),i.update(_,s,v))}function h(p,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,v);let S=0;for(let T=0;T<v;T++)S+=_[T];i.update(S,s,1)}function m(p,_,v,g){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<p.length;T++)c(p[T],_[T],g[T]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,_,0,g,0,v);let T=0;for(let A=0;A<v;A++)T+=_[A]*g[A];i.update(T,s,1)}}this.setMode=l,this.render=u,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function GC(a,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=a.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function c(z){return!(z!==Fi&&s.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const b=z===ha&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Pi&&s.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Ki&&!b)}function m(z){if(z==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(yt("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),T=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),M=a.getParameter(a.MAX_VERTEX_ATTRIBS),w=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),U=a.getParameter(a.MAX_VARYING_VECTORS),N=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),H=a.getParameter(a.MAX_SAMPLES),B=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:c,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:w,maxVaryings:U,maxFragmentUniforms:N,maxSamples:H,samples:B}}function VC(a){const e=this;let i=null,s=0,l=!1,u=!1;const c=new Jr,h=new Ct,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||s!==0||l;return l=g,s=v.length,S},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,S){const T=v.clippingPlanes,A=v.clipIntersection,y=v.clipShadows,M=a.get(v);if(!l||T===null||T.length===0||u&&!y)u?_(null):p();else{const w=u?0:s,U=w*4;let N=M.clippingState||null;m.value=N,N=_(T,g,U,S);for(let H=0;H!==U;++H)N[H]=i[H];M.clippingState=N,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=w}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(v,g,S,T){const A=v!==null?v.length:0;let y=null;if(A!==0){if(y=m.value,T!==!0||y===null){const M=S+A*4,w=g.matrixWorldInverse;h.getNormalMatrix(w),(y===null||y.length<M)&&(y=new Float32Array(M));for(let U=0,N=S;U!==A;++U,N+=4)c.copy(v[U]).applyMatrix4(w,h),c.normal.toArray(y,N),y[N+3]=c.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}const Rr=4,J_=[.125,.215,.35,.446,.526,.582],es=20,kC=256,fl=new Dy,$_=new $t;let Lh=null,Nh=0,Oh=0,Ph=!1;const XC=new pe;class ex{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,u={}){const{size:c=256,position:h=XC}=u;Lh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ix(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Lh,Nh,Oh),this._renderer.xr.enabled=Ph,e.scissorTest=!1,Js(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===rs||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:On,minFilter:On,generateMipmaps:!1,type:ha,format:Fi,colorSpace:oo,depthBuffer:!1},l=tx(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tx(e,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=WC(u)),this._blurMaterial=YC(u,e,i),this._ggxMaterial=qC(u,e,i)}return l}_compileMaterial(e){const i=new zi(new ta,e);this._renderer.compile(i,fl)}_sceneToCubeUV(e,i,s,l,u){const m=new ji(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor($_),v.toneMapping=ca,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new zi(new Nl,new by({name:"PMREM.Background",side:ui,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let M=!1;const w=e.background;w?w.isColor&&(y.color.copy(w),e.background=null,M=!0):(y.color.copy($_),M=!0);for(let U=0;U<6;U++){const N=U%3;N===0?(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[U],u.y,u.z)):N===1?(m.up.set(0,0,p[U]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[U],u.z)):(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[U]));const H=this._cubeSize;Js(l,N*H,U>2?H:0,H,H),v.setRenderTarget(l),M&&v.render(A,m),v.render(e,m)}v.toneMapping=S,v.autoClear=g,e.background=w}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===rs||e.mapping===ro;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ix()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nx());const u=l?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=u;const h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;Js(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(c,fl)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,u=this._pingPongRenderTarget,c=this._ggxMaterial,h=this._lodMeshes[s];h.material=c;const m=c.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,S=v*g,{_lodMax:T}=this,A=this._sizeLods[s],y=3*A*(s>T-Rr?s-T+Rr:0),M=4*(this._cubeSize-A);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=T-i,Js(u,y,M,3*A,2*A),l.setRenderTarget(u),l.render(h,fl),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=T-s,Js(e,y,M,3*A,2*A),l.setRenderTarget(e),l.render(h,fl)}_blur(e,i,s,l,u){const c=this._pingPongRenderTarget;this._halfBlur(e,c,i,s,l,"latitudinal",u),this._halfBlur(c,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,c,h){const m=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Qt("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=p;const g=p.uniforms,S=this._sizeLods[s]-1,T=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*es-1),A=u/T,y=isFinite(u)?1+Math.floor(_*A):es;y>es&&yt(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${es}`);const M=[];let w=0;for(let z=0;z<es;++z){const b=z/A,D=Math.exp(-b*b/2);M.push(D),z===0?w+=D:z<y&&(w+=2*D)}for(let z=0;z<M.length;z++)M[z]=M[z]/w;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=M,g.latitudinal.value=c==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:U}=this;g.dTheta.value=T,g.mipInt.value=U-s;const N=this._sizeLods[l],H=3*N*(l>U-Rr?l-U+Rr:0),B=4*(this._cubeSize-N);Js(i,H,B,3*N,2*N),m.setRenderTarget(i),m.render(v,fl)}}function WC(a){const e=[],i=[],s=[];let l=a;const u=a-Rr+1+J_.length;for(let c=0;c<u;c++){const h=Math.pow(2,l);e.push(h);let m=1/h;c>a-Rr?m=J_[c-a+Rr-1]:c===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,T=6,A=3,y=2,M=1,w=new Float32Array(A*T*S),U=new Float32Array(y*T*S),N=new Float32Array(M*T*S);for(let B=0;B<S;B++){const z=B%3*2/3-1,b=B>2?0:-1,D=[z,b,0,z+2/3,b,0,z+2/3,b+1,0,z,b,0,z+2/3,b+1,0,z,b+1,0];w.set(D,A*T*B),U.set(g,y*T*B);const re=[B,B,B,B,B,B];N.set(re,M*T*B)}const H=new ta;H.setAttribute("position",new $i(w,A)),H.setAttribute("uv",new $i(U,y)),H.setAttribute("faceIndex",new $i(N,M)),s.push(new zi(H,null)),l>Rr&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function tx(a,e,i){const s=new Ji(a,e,i);return s.texture.mapping=Ic,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Js(a,e,i,s,l){a.viewport.set(e,i,s,l),a.scissor.set(e,i,s,l)}function qC(a,e,i){return new pa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function YC(a,e,i){const s=new Float32Array(es),l=new pe(0,1,0);return new pa({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function nx(){return new pa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function ix(){return new pa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Hc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ly extends Ji{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Ry(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Nl(5,5,5),u=new pa({name:"CubemapFromEquirect",uniforms:lo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ui,blending:Ha});u.uniforms.tEquirect.value=i;const c=new zi(l,u),h=i.minFilter;return i.minFilter===ns&&(i.minFilter=On),new $1(1,10,this).update(e,c),i.minFilter=h,c.geometry.dispose(),c.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const u=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(i,s,l);e.setRenderTarget(u)}}function jC(a){let e=new WeakMap,i=new WeakMap,s=null;function l(g,S=!1){return g==null?null:S?c(g):u(g)}function u(g){if(g&&g.isTexture){const S=g.mapping;if(S===ah||S===rh)if(e.has(g)){const T=e.get(g).texture;return h(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const A=new Ly(T.height);return A.fromEquirectangularTexture(a,g),e.set(g,A),g.addEventListener("dispose",p),h(A.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const S=g.mapping,T=S===ah||S===rh,A=S===rs||S===ro;if(T||A){let y=i.get(g);const M=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==M)return s===null&&(s=new ex(a)),y=T?s.fromEquirectangular(g,y):s.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const w=g.image;return T&&w&&w.height>0||A&&w&&m(w)?(s===null&&(s=new ex(a)),y=T?s.fromEquirectangular(g):s.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",_),y.texture):null}}}return g}function h(g,S){return S===ah?g.mapping=rs:S===rh&&(g.mapping=ro),g}function m(g){let S=0;const T=6;for(let A=0;A<T;A++)g[A]!==void 0&&S++;return S===T}function p(g){const S=g.target;S.removeEventListener("dispose",p);const T=e.get(S);T!==void 0&&(e.delete(S),T.dispose())}function _(g){const S=g.target;S.removeEventListener("dispose",_);const T=i.get(S);T!==void 0&&(i.delete(S),T.dispose())}function v(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function ZC(a){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=a.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Dc("WebGLRenderer: "+s+" extension not supported."),l}}}function KC(a,e,i,s){const l={},u=new WeakMap;function c(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",c),delete l[g.id];const S=u.get(g);S&&(e.remove(S),u.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(v,g){return l[g.id]===!0||(g.addEventListener("dispose",c),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const S in g)e.update(g[S],a.ARRAY_BUFFER)}function p(v){const g=[],S=v.index,T=v.attributes.position;let A=0;if(T===void 0)return;if(S!==null){const w=S.array;A=S.version;for(let U=0,N=w.length;U<N;U+=3){const H=w[U+0],B=w[U+1],z=w[U+2];g.push(H,B,B,z,z,H)}}else{const w=T.array;A=T.version;for(let U=0,N=w.length/3-1;U<N;U+=3){const H=U+0,B=U+1,z=U+2;g.push(H,B,B,z,z,H)}}const y=new(T.count>=65535?My:Sy)(g,1);y.version=A;const M=u.get(v);M&&e.remove(M),u.set(v,y)}function _(v){const g=u.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&p(v)}else p(v);return u.get(v)}return{get:h,update:m,getWireframeAttribute:_}}function QC(a,e,i){let s;function l(g){s=g}let u,c;function h(g){u=g.type,c=g.bytesPerElement}function m(g,S){a.drawElements(s,S,u,g*c),i.update(S,s,1)}function p(g,S,T){T!==0&&(a.drawElementsInstanced(s,S,u,g*c,T),i.update(S,s,T))}function _(g,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,u,g,0,T);let y=0;for(let M=0;M<T;M++)y+=S[M];i.update(y,s,1)}function v(g,S,T,A){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<g.length;M++)p(g[M]/c,S[M],A[M]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,u,g,0,A,0,T);let M=0;for(let w=0;w<T;w++)M+=S[w]*A[w];i.update(M,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function JC(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,c,h){switch(i.calls++,c){case a.TRIANGLES:i.triangles+=h*(u/3);break;case a.LINES:i.lines+=h*(u/2);break;case a.LINE_STRIP:i.lines+=h*(u-1);break;case a.LINE_LOOP:i.lines+=h*u;break;case a.POINTS:i.points+=h*u;break;default:Qt("WebGLInfo: Unknown draw mode:",c);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function $C(a,e,i){const s=new WeakMap,l=new yn;function u(c,h,m){const p=c.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let g=s.get(h);if(g===void 0||g.count!==v){let re=function(){b.dispose(),s.delete(h),h.removeEventListener("dispose",re)};var S=re;g!==void 0&&g.texture.dispose();const T=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let N=0;T===!0&&(N=1),A===!0&&(N=2),y===!0&&(N=3);let H=h.attributes.position.count*N,B=1;H>e.maxTextureSize&&(B=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const z=new Float32Array(H*B*4*v),b=new _y(z,H,B,v);b.type=Ki,b.needsUpdate=!0;const D=N*4;for(let G=0;G<v;G++){const K=M[G],ie=w[G],ee=U[G],Z=H*B*4*G;for(let O=0;O<K.count;O++){const I=O*D;T===!0&&(l.fromBufferAttribute(K,O),z[Z+I+0]=l.x,z[Z+I+1]=l.y,z[Z+I+2]=l.z,z[Z+I+3]=0),A===!0&&(l.fromBufferAttribute(ie,O),z[Z+I+4]=l.x,z[Z+I+5]=l.y,z[Z+I+6]=l.z,z[Z+I+7]=0),y===!0&&(l.fromBufferAttribute(ee,O),z[Z+I+8]=l.x,z[Z+I+9]=l.y,z[Z+I+10]=l.z,z[Z+I+11]=ee.itemSize===4?l.w:1)}}g={count:v,texture:b,size:new Tt(H,B)},s.set(h,g),h.addEventListener("dispose",re)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",c.morphTexture,i);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const A=h.morphTargetsRelative?1:1-T;m.getUniforms().setValue(a,"morphTargetBaseInfluence",A),m.getUniforms().setValue(a,"morphTargetInfluences",p)}m.getUniforms().setValue(a,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",g.size)}return{update:u}}function ew(a,e,i,s,l){let u=new WeakMap;function c(p){const _=l.render.frame,v=p.geometry,g=e.get(p,v);if(u.get(g)!==_&&(e.update(g),u.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),u.get(p)!==_&&(i.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,a.ARRAY_BUFFER),u.set(p,_))),p.isSkinnedMesh){const S=p.skeleton;u.get(S)!==_&&(S.update(),u.set(S,_))}return g}function h(){u=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:c,dispose:h}}const tw={[ny]:"LINEAR_TONE_MAPPING",[iy]:"REINHARD_TONE_MAPPING",[ay]:"CINEON_TONE_MAPPING",[ry]:"ACES_FILMIC_TONE_MAPPING",[oy]:"AGX_TONE_MAPPING",[ly]:"NEUTRAL_TONE_MAPPING",[sy]:"CUSTOM_TONE_MAPPING"};function nw(a,e,i,s,l){const u=new Ji(e,i,{type:a,depthBuffer:s,stencilBuffer:l}),c=new Ji(e,i,{type:ha,depthBuffer:!1,stencilBuffer:!1}),h=new ta;h.setAttribute("position",new ea([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ea([0,2,0,0,2,0],2));const m=new gl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new zi(h,m),_=new Dy(-1,1,1,-1,0,1);let v=null,g=null,S=!1,T,A=null,y=[],M=!1;this.setSize=function(w,U){u.setSize(w,U),c.setSize(w,U);for(let N=0;N<y.length;N++){const H=y[N];H.setSize&&H.setSize(w,U)}},this.setEffects=function(w){y=w,M=y.length>0&&y[0].isRenderPass===!0;const U=u.width,N=u.height;for(let H=0;H<y.length;H++){const B=y[H];B.setSize&&B.setSize(U,N)}},this.begin=function(w,U){if(S||w.toneMapping===ca&&y.length===0)return!1;if(A=U,U!==null){const N=U.width,H=U.height;(u.width!==N||u.height!==H)&&this.setSize(N,H)}return M===!1&&w.setRenderTarget(u),T=w.toneMapping,w.toneMapping=ca,!0},this.hasRenderPass=function(){return M},this.end=function(w,U){w.toneMapping=T,S=!0;let N=u,H=c;for(let B=0;B<y.length;B++){const z=y[B];if(z.enabled!==!1&&(z.render(w,H,N,U),z.needsSwap!==!1)){const b=N;N=H,H=b}}if(v!==w.outputColorSpace||g!==w.toneMapping){v=w.outputColorSpace,g=w.toneMapping,m.defines={},Yt.getTransfer(v)===on&&(m.defines.SRGB_TRANSFER="");const B=tw[g];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,w.setRenderTarget(A),w.render(p,_),A=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){u.dispose(),c.dispose(),h.dispose(),m.dispose()}}const Ny=new ei,Np=new bl(1,1),Oy=new _y,Py=new R1,Fy=new Ry,ax=[],rx=[],sx=new Float32Array(16),ox=new Float32Array(9),lx=new Float32Array(4);function fo(a,e,i){const s=a[0];if(s<=0||s>0)return a;const l=e*i;let u=ax[l];if(u===void 0&&(u=new Float32Array(l),ax[l]=u),e!==0){s.toArray(u,0);for(let c=1,h=0;c!==e;++c)h+=i,a[c].toArray(u,h)}return u}function Fn(a,e){if(a.length!==e.length)return!1;for(let i=0,s=a.length;i<s;i++)if(a[i]!==e[i])return!1;return!0}function zn(a,e){for(let i=0,s=e.length;i<s;i++)a[i]=e[i]}function Gc(a,e){let i=rx[e];i===void 0&&(i=new Int32Array(e),rx[e]=i);for(let s=0;s!==e;++s)i[s]=a.allocateTextureUnit();return i}function iw(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function aw(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Fn(i,e))return;a.uniform2fv(this.addr,e),zn(i,e)}}function rw(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Fn(i,e))return;a.uniform3fv(this.addr,e),zn(i,e)}}function sw(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Fn(i,e))return;a.uniform4fv(this.addr,e),zn(i,e)}}function ow(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(Fn(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),zn(i,e)}else{if(Fn(i,s))return;lx.set(s),a.uniformMatrix2fv(this.addr,!1,lx),zn(i,s)}}function lw(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(Fn(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),zn(i,e)}else{if(Fn(i,s))return;ox.set(s),a.uniformMatrix3fv(this.addr,!1,ox),zn(i,s)}}function uw(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(Fn(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),zn(i,e)}else{if(Fn(i,s))return;sx.set(s),a.uniformMatrix4fv(this.addr,!1,sx),zn(i,s)}}function cw(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function fw(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Fn(i,e))return;a.uniform2iv(this.addr,e),zn(i,e)}}function dw(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Fn(i,e))return;a.uniform3iv(this.addr,e),zn(i,e)}}function hw(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Fn(i,e))return;a.uniform4iv(this.addr,e),zn(i,e)}}function pw(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function mw(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Fn(i,e))return;a.uniform2uiv(this.addr,e),zn(i,e)}}function gw(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Fn(i,e))return;a.uniform3uiv(this.addr,e),zn(i,e)}}function vw(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Fn(i,e))return;a.uniform4uiv(this.addr,e),zn(i,e)}}function _w(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l);let u;this.type===a.SAMPLER_2D_SHADOW?(Np.compareFunction=i.isReversedDepthBuffer()?nm:tm,u=Np):u=Ny,i.setTexture2D(e||u,l)}function xw(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Py,l)}function yw(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Fy,l)}function Sw(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Oy,l)}function Mw(a){switch(a){case 5126:return iw;case 35664:return aw;case 35665:return rw;case 35666:return sw;case 35674:return ow;case 35675:return lw;case 35676:return uw;case 5124:case 35670:return cw;case 35667:case 35671:return fw;case 35668:case 35672:return dw;case 35669:case 35673:return hw;case 5125:return pw;case 36294:return mw;case 36295:return gw;case 36296:return vw;case 35678:case 36198:case 36298:case 36306:case 35682:return _w;case 35679:case 36299:case 36307:return xw;case 35680:case 36300:case 36308:case 36293:return yw;case 36289:case 36303:case 36311:case 36292:return Sw}}function Ew(a,e){a.uniform1fv(this.addr,e)}function bw(a,e){const i=fo(e,this.size,2);a.uniform2fv(this.addr,i)}function Tw(a,e){const i=fo(e,this.size,3);a.uniform3fv(this.addr,i)}function Aw(a,e){const i=fo(e,this.size,4);a.uniform4fv(this.addr,i)}function Rw(a,e){const i=fo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function Cw(a,e){const i=fo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function ww(a,e){const i=fo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function Dw(a,e){a.uniform1iv(this.addr,e)}function Uw(a,e){a.uniform2iv(this.addr,e)}function Lw(a,e){a.uniform3iv(this.addr,e)}function Nw(a,e){a.uniform4iv(this.addr,e)}function Ow(a,e){a.uniform1uiv(this.addr,e)}function Pw(a,e){a.uniform2uiv(this.addr,e)}function Fw(a,e){a.uniform3uiv(this.addr,e)}function zw(a,e){a.uniform4uiv(this.addr,e)}function Iw(a,e,i){const s=this.cache,l=e.length,u=Gc(i,l);Fn(s,u)||(a.uniform1iv(this.addr,u),zn(s,u));let c;this.type===a.SAMPLER_2D_SHADOW?c=Np:c=Ny;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||c,u[h])}function Bw(a,e,i){const s=this.cache,l=e.length,u=Gc(i,l);Fn(s,u)||(a.uniform1iv(this.addr,u),zn(s,u));for(let c=0;c!==l;++c)i.setTexture3D(e[c]||Py,u[c])}function Hw(a,e,i){const s=this.cache,l=e.length,u=Gc(i,l);Fn(s,u)||(a.uniform1iv(this.addr,u),zn(s,u));for(let c=0;c!==l;++c)i.setTextureCube(e[c]||Fy,u[c])}function Gw(a,e,i){const s=this.cache,l=e.length,u=Gc(i,l);Fn(s,u)||(a.uniform1iv(this.addr,u),zn(s,u));for(let c=0;c!==l;++c)i.setTexture2DArray(e[c]||Oy,u[c])}function Vw(a){switch(a){case 5126:return Ew;case 35664:return bw;case 35665:return Tw;case 35666:return Aw;case 35674:return Rw;case 35675:return Cw;case 35676:return ww;case 5124:case 35670:return Dw;case 35667:case 35671:return Uw;case 35668:case 35672:return Lw;case 35669:case 35673:return Nw;case 5125:return Ow;case 36294:return Pw;case 36295:return Fw;case 36296:return zw;case 35678:case 36198:case 36298:case 36306:case 35682:return Iw;case 35679:case 36299:case 36307:return Bw;case 35680:case 36300:case 36308:case 36293:return Hw;case 36289:case 36303:case 36311:case 36292:return Gw}}class kw{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Mw(i.type)}}class Xw{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Vw(i.type)}}class Ww{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,c=l.length;u!==c;++u){const h=l[u];h.setValue(e,i[h.id],s)}}}const Fh=/(\w+)(\])?(\[|\.)?/g;function ux(a,e){a.seq.push(e),a.map[e.id]=e}function qw(a,e,i){const s=a.name,l=s.length;for(Fh.lastIndex=0;;){const u=Fh.exec(s),c=Fh.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&c+2===l){ux(i,p===void 0?new kw(h,a,e):new Xw(h,a,e));break}else{let v=i.map[h];v===void 0&&(v=new Ww(h),ux(i,v)),i=v}}}class Tc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let c=0;c<s;++c){const h=e.getActiveUniform(i,c),m=e.getUniformLocation(i,h.name);qw(h,m,this)}const l=[],u=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(c):u.push(c);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,c=i.length;u!==c;++u){const h=i[u],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const c=e[l];c.id in i&&s.push(c)}return s}}function cx(a,e,i){const s=a.createShader(e);return a.shaderSource(s,i),a.compileShader(s),s}const Yw=37297;let jw=0;function Zw(a,e){const i=a.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let c=l;c<u;c++){const h=c+1;s.push(`${h===e?">":" "} ${h}: ${i[c]}`)}return s.join(`
`)}const fx=new Ct;function Kw(a){Yt._getMatrix(fx,Yt.workingColorSpace,a);const e=`mat3( ${fx.elements.map(i=>i.toFixed(4))} )`;switch(Yt.getTransfer(a)){case Rc:return[e,"LinearTransferOETF"];case on:return[e,"sRGBTransferOETF"];default:return yt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function dx(a,e,i){const s=a.getShaderParameter(e,a.COMPILE_STATUS),u=(a.getShaderInfoLog(e)||"").trim();if(s&&u==="")return"";const c=/ERROR: 0:(\d+)/.exec(u);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+u+`

`+Zw(a.getShaderSource(e),h)}else return u}function Qw(a,e){const i=Kw(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const Jw={[ny]:"Linear",[iy]:"Reinhard",[ay]:"Cineon",[ry]:"ACESFilmic",[oy]:"AgX",[ly]:"Neutral",[sy]:"Custom"};function $w(a,e){const i=Jw[e];return i===void 0?(yt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const gc=new pe;function e2(){Yt.getLuminanceCoefficients(gc);const a=gc.x.toFixed(4),e=gc.y.toFixed(4),i=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t2(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vl).join(`
`)}function n2(a){const e=[];for(const i in a){const s=a[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function i2(a,e){const i={},s=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=a.getActiveAttrib(e,l),c=u.name;let h=1;u.type===a.FLOAT_MAT2&&(h=2),u.type===a.FLOAT_MAT3&&(h=3),u.type===a.FLOAT_MAT4&&(h=4),i[c]={type:u.type,location:a.getAttribLocation(e,c),locationSize:h}}return i}function vl(a){return a!==""}function hx(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function px(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const a2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Op(a){return a.replace(a2,s2)}const r2=new Map;function s2(a,e){let i=Dt[e];if(i===void 0){const s=r2.get(e);if(s!==void 0)i=Dt[s],yt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Op(i)}const o2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mx(a){return a.replace(o2,l2)}function l2(a,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function gx(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const u2={[yc]:"SHADOWMAP_TYPE_PCF",[ml]:"SHADOWMAP_TYPE_VSM"};function c2(a){return u2[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const f2={[rs]:"ENVMAP_TYPE_CUBE",[ro]:"ENVMAP_TYPE_CUBE",[Ic]:"ENVMAP_TYPE_CUBE_UV"};function d2(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":f2[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const h2={[ro]:"ENVMAP_MODE_REFRACTION"};function p2(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":h2[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const m2={[ty]:"ENVMAP_BLENDING_MULTIPLY",[r1]:"ENVMAP_BLENDING_MIX",[s1]:"ENVMAP_BLENDING_ADD"};function g2(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":m2[a.combine]||"ENVMAP_BLENDING_NONE"}function v2(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function _2(a,e,i,s){const l=a.getContext(),u=i.defines;let c=i.vertexShader,h=i.fragmentShader;const m=c2(i),p=d2(i),_=p2(i),v=g2(i),g=v2(i),S=t2(i),T=n2(u),A=l.createProgram();let y,M,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(vl).join(`
`),y.length>0&&(y+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(vl).join(`
`),M.length>0&&(M+=`
`)):(y=[gx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vl).join(`
`),M=[gx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ca?"#define TONE_MAPPING":"",i.toneMapping!==ca?Dt.tonemapping_pars_fragment:"",i.toneMapping!==ca?$w("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,Qw("linearToOutputTexel",i.outputColorSpace),e2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(vl).join(`
`)),c=Op(c),c=hx(c,i),c=px(c,i),h=Op(h),h=hx(h,i),h=px(h,i),c=mx(c),h=mx(h),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,M=["#define varying in",i.glslVersion===R_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===R_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const U=w+y+c,N=w+M+h,H=cx(l,l.VERTEX_SHADER,U),B=cx(l,l.FRAGMENT_SHADER,N);l.attachShader(A,H),l.attachShader(A,B),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function z(G){if(a.debug.checkShaderErrors){const K=l.getProgramInfoLog(A)||"",ie=l.getShaderInfoLog(H)||"",ee=l.getShaderInfoLog(B)||"",Z=K.trim(),O=ie.trim(),I=ee.trim();let oe=!0,ce=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(oe=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(l,A,H,B);else{const be=dx(l,H,"vertex"),P=dx(l,B,"fragment");Qt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Z+`
`+be+`
`+P)}else Z!==""?yt("WebGLProgram: Program Info Log:",Z):(O===""||I==="")&&(ce=!1);ce&&(G.diagnostics={runnable:oe,programLog:Z,vertexShader:{log:O,prefix:y},fragmentShader:{log:I,prefix:M}})}l.deleteShader(H),l.deleteShader(B),b=new Tc(l,A),D=i2(l,A)}let b;this.getUniforms=function(){return b===void 0&&z(this),b};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let re=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return re===!1&&(re=l.getProgramParameter(A,Yw)),re},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=jw++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=H,this.fragmentShader=B,this}let x2=0;class y2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(l)===!1&&(c.add(l),l.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new S2(e),i.set(e,s)),s}}class S2{constructor(e){this.id=x2++,this.code=e,this.usedTimes=0}}function M2(a,e,i,s,l,u){const c=new xy,h=new y2,m=new Set,p=[],_=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function A(b,D,re,G,K){const ie=G.fog,ee=K.geometry,Z=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?G.environment:null,O=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,I=e.get(b.envMap||Z,O),oe=I&&I.mapping===Ic?I.image.height:null,ce=S[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&yt("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const be=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,P=be!==void 0?be.length:0;let Y=0;ee.morphAttributes.position!==void 0&&(Y=1),ee.morphAttributes.normal!==void 0&&(Y=2),ee.morphAttributes.color!==void 0&&(Y=3);let xe,Re,Ge,ne;if(ce){const Lt=la[ce];xe=Lt.vertexShader,Re=Lt.fragmentShader}else xe=b.vertexShader,Re=b.fragmentShader,h.update(b),Ge=h.getVertexShaderID(b),ne=h.getFragmentShaderID(b);const Se=a.getRenderTarget(),Te=a.state.buffers.depth.getReversed(),Ze=K.isInstancedMesh===!0,ut=K.isBatchedMesh===!0,pt=!!b.map,hn=!!b.matcap,dt=!!I,St=!!b.aoMap,Ft=!!b.lightMap,_t=!!b.bumpMap,qt=!!b.normalMap,X=!!b.displacementMap,tn=!!b.emissiveMap,Ut=!!b.metalnessMap,Gt=!!b.roughnessMap,et=b.anisotropy>0,L=b.clearcoat>0,x=b.dispersion>0,F=b.iridescence>0,J=b.sheen>0,ge=b.transmission>0,fe=et&&!!b.anisotropyMap,Pe=L&&!!b.clearcoatMap,Ue=L&&!!b.clearcoatNormalMap,tt=L&&!!b.clearcoatRoughnessMap,ct=F&&!!b.iridescenceMap,we=F&&!!b.iridescenceThicknessMap,De=J&&!!b.sheenColorMap,He=J&&!!b.sheenRoughnessMap,Ve=!!b.specularMap,qe=!!b.specularColorMap,Et=!!b.specularIntensityMap,j=ge&&!!b.transmissionMap,Oe=ge&&!!b.thicknessMap,Le=!!b.gradientMap,Ye=!!b.alphaMap,Ce=b.alphaTest>0,_e=!!b.alphaHash,Qe=!!b.extensions;let vt=ca;b.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(vt=a.toneMapping);const jt={shaderID:ce,shaderType:b.type,shaderName:b.name,vertexShader:xe,fragmentShader:Re,defines:b.defines,customVertexShaderID:Ge,customFragmentShaderID:ne,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:ut,batchingColor:ut&&K._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&K.instanceColor!==null,instancingMorph:Ze&&K.morphTexture!==null,outputColorSpace:Se===null?a.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:oo,alphaToCoverage:!!b.alphaToCoverage,map:pt,matcap:hn,envMap:dt,envMapMode:dt&&I.mapping,envMapCubeUVHeight:oe,aoMap:St,lightMap:Ft,bumpMap:_t,normalMap:qt,displacementMap:X,emissiveMap:tn,normalMapObjectSpace:qt&&b.normalMapType===c1,normalMapTangentSpace:qt&&b.normalMapType===u1,metalnessMap:Ut,roughnessMap:Gt,anisotropy:et,anisotropyMap:fe,clearcoat:L,clearcoatMap:Pe,clearcoatNormalMap:Ue,clearcoatRoughnessMap:tt,dispersion:x,iridescence:F,iridescenceMap:ct,iridescenceThicknessMap:we,sheen:J,sheenColorMap:De,sheenRoughnessMap:He,specularMap:Ve,specularColorMap:qe,specularIntensityMap:Et,transmission:ge,transmissionMap:j,thicknessMap:Oe,gradientMap:Le,opaque:b.transparent===!1&&b.blending===no&&b.alphaToCoverage===!1,alphaMap:Ye,alphaTest:Ce,alphaHash:_e,combine:b.combine,mapUv:pt&&T(b.map.channel),aoMapUv:St&&T(b.aoMap.channel),lightMapUv:Ft&&T(b.lightMap.channel),bumpMapUv:_t&&T(b.bumpMap.channel),normalMapUv:qt&&T(b.normalMap.channel),displacementMapUv:X&&T(b.displacementMap.channel),emissiveMapUv:tn&&T(b.emissiveMap.channel),metalnessMapUv:Ut&&T(b.metalnessMap.channel),roughnessMapUv:Gt&&T(b.roughnessMap.channel),anisotropyMapUv:fe&&T(b.anisotropyMap.channel),clearcoatMapUv:Pe&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:we&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:De&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:He&&T(b.sheenRoughnessMap.channel),specularMapUv:Ve&&T(b.specularMap.channel),specularColorMapUv:qe&&T(b.specularColorMap.channel),specularIntensityMapUv:Et&&T(b.specularIntensityMap.channel),transmissionMapUv:j&&T(b.transmissionMap.channel),thicknessMapUv:Oe&&T(b.thicknessMap.channel),alphaMapUv:Ye&&T(b.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(qt||et),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ee.attributes.uv&&(pt||Ye),fog:!!ie,useFog:b.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||ee.attributes.normal===void 0&&qt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Te,skinning:K.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:Y,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:a.shadowMap.enabled&&re.length>0,shadowMapType:a.shadowMap.type,toneMapping:vt,decodeVideoTexture:pt&&b.map.isVideoTexture===!0&&Yt.getTransfer(b.map.colorSpace)===on,decodeVideoTextureEmissive:tn&&b.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(b.emissiveMap.colorSpace)===on,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ba,flipSided:b.side===ui,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Qe&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&b.extensions.multiDraw===!0||ut)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return jt.vertexUv1s=m.has(1),jt.vertexUv2s=m.has(2),jt.vertexUv3s=m.has(3),m.clear(),jt}function y(b){const D=[];if(b.shaderID?D.push(b.shaderID):(D.push(b.customVertexShaderID),D.push(b.customFragmentShaderID)),b.defines!==void 0)for(const re in b.defines)D.push(re),D.push(b.defines[re]);return b.isRawShaderMaterial===!1&&(M(D,b),w(D,b),D.push(a.outputColorSpace)),D.push(b.customProgramCacheKey),D.join()}function M(b,D){b.push(D.precision),b.push(D.outputColorSpace),b.push(D.envMapMode),b.push(D.envMapCubeUVHeight),b.push(D.mapUv),b.push(D.alphaMapUv),b.push(D.lightMapUv),b.push(D.aoMapUv),b.push(D.bumpMapUv),b.push(D.normalMapUv),b.push(D.displacementMapUv),b.push(D.emissiveMapUv),b.push(D.metalnessMapUv),b.push(D.roughnessMapUv),b.push(D.anisotropyMapUv),b.push(D.clearcoatMapUv),b.push(D.clearcoatNormalMapUv),b.push(D.clearcoatRoughnessMapUv),b.push(D.iridescenceMapUv),b.push(D.iridescenceThicknessMapUv),b.push(D.sheenColorMapUv),b.push(D.sheenRoughnessMapUv),b.push(D.specularMapUv),b.push(D.specularColorMapUv),b.push(D.specularIntensityMapUv),b.push(D.transmissionMapUv),b.push(D.thicknessMapUv),b.push(D.combine),b.push(D.fogExp2),b.push(D.sizeAttenuation),b.push(D.morphTargetsCount),b.push(D.morphAttributeCount),b.push(D.numDirLights),b.push(D.numPointLights),b.push(D.numSpotLights),b.push(D.numSpotLightMaps),b.push(D.numHemiLights),b.push(D.numRectAreaLights),b.push(D.numDirLightShadows),b.push(D.numPointLightShadows),b.push(D.numSpotLightShadows),b.push(D.numSpotLightShadowsWithMaps),b.push(D.numLightProbes),b.push(D.shadowMapType),b.push(D.toneMapping),b.push(D.numClippingPlanes),b.push(D.numClipIntersection),b.push(D.depthPacking)}function w(b,D){c.disableAll(),D.instancing&&c.enable(0),D.instancingColor&&c.enable(1),D.instancingMorph&&c.enable(2),D.matcap&&c.enable(3),D.envMap&&c.enable(4),D.normalMapObjectSpace&&c.enable(5),D.normalMapTangentSpace&&c.enable(6),D.clearcoat&&c.enable(7),D.iridescence&&c.enable(8),D.alphaTest&&c.enable(9),D.vertexColors&&c.enable(10),D.vertexAlphas&&c.enable(11),D.vertexUv1s&&c.enable(12),D.vertexUv2s&&c.enable(13),D.vertexUv3s&&c.enable(14),D.vertexTangents&&c.enable(15),D.anisotropy&&c.enable(16),D.alphaHash&&c.enable(17),D.batching&&c.enable(18),D.dispersion&&c.enable(19),D.batchingColor&&c.enable(20),D.gradientMap&&c.enable(21),b.push(c.mask),c.disableAll(),D.fog&&c.enable(0),D.useFog&&c.enable(1),D.flatShading&&c.enable(2),D.logarithmicDepthBuffer&&c.enable(3),D.reversedDepthBuffer&&c.enable(4),D.skinning&&c.enable(5),D.morphTargets&&c.enable(6),D.morphNormals&&c.enable(7),D.morphColors&&c.enable(8),D.premultipliedAlpha&&c.enable(9),D.shadowMapEnabled&&c.enable(10),D.doubleSided&&c.enable(11),D.flipSided&&c.enable(12),D.useDepthPacking&&c.enable(13),D.dithering&&c.enable(14),D.transmission&&c.enable(15),D.sheen&&c.enable(16),D.opaque&&c.enable(17),D.pointsUvs&&c.enable(18),D.decodeVideoTexture&&c.enable(19),D.decodeVideoTextureEmissive&&c.enable(20),D.alphaToCoverage&&c.enable(21),b.push(c.mask)}function U(b){const D=S[b.type];let re;if(D){const G=la[D];re=j1.clone(G.uniforms)}else re=b.uniforms;return re}function N(b,D){let re=_.get(D);return re!==void 0?++re.usedTimes:(re=new _2(a,D,b,l),p.push(re),_.set(D,re)),re}function H(b){if(--b.usedTimes===0){const D=p.indexOf(b);p[D]=p[p.length-1],p.pop(),_.delete(b.cacheKey),b.destroy()}}function B(b){h.remove(b)}function z(){h.dispose()}return{getParameters:A,getProgramCacheKey:y,getUniforms:U,acquireProgram:N,releaseProgram:H,releaseShaderCache:B,programs:p,dispose:z}}function E2(){let a=new WeakMap;function e(c){return a.has(c)}function i(c){let h=a.get(c);return h===void 0&&(h={},a.set(c,h)),h}function s(c){a.delete(c)}function l(c,h,m){a.get(c)[h]=m}function u(){a=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function b2(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function vx(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function _x(){const a=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function c(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function h(g,S,T,A,y,M){let w=a[e];return w===void 0?(w={id:g.id,object:g,geometry:S,material:T,materialVariant:c(g),groupOrder:A,renderOrder:g.renderOrder,z:y,group:M},a[e]=w):(w.id=g.id,w.object=g,w.geometry=S,w.material=T,w.materialVariant=c(g),w.groupOrder=A,w.renderOrder=g.renderOrder,w.z=y,w.group=M),e++,w}function m(g,S,T,A,y,M){const w=h(g,S,T,A,y,M);T.transmission>0?s.push(w):T.transparent===!0?l.push(w):i.push(w)}function p(g,S,T,A,y,M){const w=h(g,S,T,A,y,M);T.transmission>0?s.unshift(w):T.transparent===!0?l.unshift(w):i.unshift(w)}function _(g,S){i.length>1&&i.sort(g||b2),s.length>1&&s.sort(S||vx),l.length>1&&l.sort(S||vx)}function v(){for(let g=e,S=a.length;g<S;g++){const T=a[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:m,unshift:p,finish:v,sort:_}}function T2(){let a=new WeakMap;function e(s,l){const u=a.get(s);let c;return u===void 0?(c=new _x,a.set(s,[c])):l>=u.length?(c=new _x,u.push(c)):c=u[l],c}function i(){a=new WeakMap}return{get:e,dispose:i}}function A2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new pe,color:new $t};break;case"SpotLight":i={position:new pe,direction:new pe,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new pe,color:new $t,distance:0,decay:0};break;case"HemisphereLight":i={direction:new pe,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":i={color:new $t,position:new pe,halfWidth:new pe,halfHeight:new pe};break}return a[e.id]=i,i}}}function R2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let C2=0;function w2(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function D2(a){const e=new A2,i=R2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new pe);const l=new pe,u=new Tn,c=new Tn;function h(p){let _=0,v=0,g=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let S=0,T=0,A=0,y=0,M=0,w=0,U=0,N=0,H=0,B=0,z=0;p.sort(w2);for(let D=0,re=p.length;D<re;D++){const G=p[D],K=G.color,ie=G.intensity,ee=G.distance;let Z=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===so?Z=G.shadow.map.texture:Z=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=K.r*ie,v+=K.g*ie,g+=K.b*ie;else if(G.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(G.sh.coefficients[O],ie);z++}else if(G.isDirectionalLight){const O=e.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const I=G.shadow,oe=i.get(G);oe.shadowIntensity=I.intensity,oe.shadowBias=I.bias,oe.shadowNormalBias=I.normalBias,oe.shadowRadius=I.radius,oe.shadowMapSize=I.mapSize,s.directionalShadow[S]=oe,s.directionalShadowMap[S]=Z,s.directionalShadowMatrix[S]=G.shadow.matrix,w++}s.directional[S]=O,S++}else if(G.isSpotLight){const O=e.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy(K).multiplyScalar(ie),O.distance=ee,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,s.spot[A]=O;const I=G.shadow;if(G.map&&(s.spotLightMap[H]=G.map,H++,I.updateMatrices(G),G.castShadow&&B++),s.spotLightMatrix[A]=I.matrix,G.castShadow){const oe=i.get(G);oe.shadowIntensity=I.intensity,oe.shadowBias=I.bias,oe.shadowNormalBias=I.normalBias,oe.shadowRadius=I.radius,oe.shadowMapSize=I.mapSize,s.spotShadow[A]=oe,s.spotShadowMap[A]=Z,N++}A++}else if(G.isRectAreaLight){const O=e.get(G);O.color.copy(K).multiplyScalar(ie),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),s.rectArea[y]=O,y++}else if(G.isPointLight){const O=e.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),O.distance=G.distance,O.decay=G.decay,G.castShadow){const I=G.shadow,oe=i.get(G);oe.shadowIntensity=I.intensity,oe.shadowBias=I.bias,oe.shadowNormalBias=I.normalBias,oe.shadowRadius=I.radius,oe.shadowMapSize=I.mapSize,oe.shadowCameraNear=I.camera.near,oe.shadowCameraFar=I.camera.far,s.pointShadow[T]=oe,s.pointShadowMap[T]=Z,s.pointShadowMatrix[T]=G.shadow.matrix,U++}s.point[T]=O,T++}else if(G.isHemisphereLight){const O=e.get(G);O.skyColor.copy(G.color).multiplyScalar(ie),O.groundColor.copy(G.groundColor).multiplyScalar(ie),s.hemi[M]=O,M++}}y>0&&(a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ke.LTC_FLOAT_1,s.rectAreaLTC2=ke.LTC_FLOAT_2):(s.rectAreaLTC1=ke.LTC_HALF_1,s.rectAreaLTC2=ke.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==S||b.pointLength!==T||b.spotLength!==A||b.rectAreaLength!==y||b.hemiLength!==M||b.numDirectionalShadows!==w||b.numPointShadows!==U||b.numSpotShadows!==N||b.numSpotMaps!==H||b.numLightProbes!==z)&&(s.directional.length=S,s.spot.length=A,s.rectArea.length=y,s.point.length=T,s.hemi.length=M,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=N+H-B,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=z,b.directionalLength=S,b.pointLength=T,b.spotLength=A,b.rectAreaLength=y,b.hemiLength=M,b.numDirectionalShadows=w,b.numPointShadows=U,b.numSpotShadows=N,b.numSpotMaps=H,b.numLightProbes=z,s.version=C2++)}function m(p,_){let v=0,g=0,S=0,T=0,A=0;const y=_.matrixWorldInverse;for(let M=0,w=p.length;M<w;M++){const U=p[M];if(U.isDirectionalLight){const N=s.directional[v];N.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),v++}else if(U.isSpotLight){const N=s.spot[S];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),S++}else if(U.isRectAreaLight){const N=s.rectArea[T];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(y),c.identity(),u.copy(U.matrixWorld),u.premultiply(y),c.extractRotation(u),N.halfWidth.set(U.width*.5,0,0),N.halfHeight.set(0,U.height*.5,0),N.halfWidth.applyMatrix4(c),N.halfHeight.applyMatrix4(c),T++}else if(U.isPointLight){const N=s.point[g];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(y),g++}else if(U.isHemisphereLight){const N=s.hemi[A];N.direction.setFromMatrixPosition(U.matrixWorld),N.direction.transformDirection(y),A++}}}return{setup:h,setupView:m,state:s}}function xx(a){const e=new D2(a),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function u(_){i.push(_)}function c(_){s.push(_)}function h(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:c}}function U2(a){let e=new WeakMap;function i(l,u=0){const c=e.get(l);let h;return c===void 0?(h=new xx(a),e.set(l,[h])):u>=c.length?(h=new xx(a),c.push(h)):h=c[u],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const L2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,O2=[new pe(1,0,0),new pe(-1,0,0),new pe(0,1,0),new pe(0,-1,0),new pe(0,0,1),new pe(0,0,-1)],P2=[new pe(0,-1,0),new pe(0,-1,0),new pe(0,0,1),new pe(0,0,-1),new pe(0,-1,0),new pe(0,-1,0)],yx=new Tn,dl=new pe,zh=new pe;function F2(a,e,i){let s=new Ay;const l=new Tt,u=new Tt,c=new yn,h=new Q1,m=new J1,p={},_=i.maxTextureSize,v={[Cr]:ui,[ui]:Cr,[Ba]:Ba},g=new pa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:L2,fragmentShader:N2}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const T=new ta;T.setAttribute("position",new $i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new zi(T,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yc;let M=this.type;this.render=function(B,z,b){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;this.type===HT&&(yt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=yc);const D=a.getRenderTarget(),re=a.getActiveCubeFace(),G=a.getActiveMipmapLevel(),K=a.state;K.setBlending(Ha),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ie=M!==this.type;ie&&z.traverse(function(ee){ee.material&&(Array.isArray(ee.material)?ee.material.forEach(Z=>Z.needsUpdate=!0):ee.material.needsUpdate=!0)});for(let ee=0,Z=B.length;ee<Z;ee++){const O=B[ee],I=O.shadow;if(I===void 0){yt("WebGLShadowMap:",O,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;l.copy(I.mapSize);const oe=I.getFrameExtents();l.multiply(oe),u.copy(I.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/oe.x),l.x=u.x*oe.x,I.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/oe.y),l.y=u.y*oe.y,I.mapSize.y=u.y));const ce=a.state.buffers.depth.getReversed();if(I.camera._reversedDepth=ce,I.map===null||ie===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===ml){if(O.isPointLight){yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Ji(l.x,l.y,{format:so,type:ha,minFilter:On,magFilter:On,generateMipmaps:!1}),I.map.texture.name=O.name+".shadowMap",I.map.depthTexture=new bl(l.x,l.y,Ki),I.map.depthTexture.name=O.name+".shadowMapDepth",I.map.depthTexture.format=Va,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Xn,I.map.depthTexture.magFilter=Xn}else O.isPointLight?(I.map=new Ly(l.x),I.map.depthTexture=new q1(l.x,da)):(I.map=new Ji(l.x,l.y),I.map.depthTexture=new bl(l.x,l.y,da)),I.map.depthTexture.name=O.name+".shadowMap",I.map.depthTexture.format=Va,this.type===yc?(I.map.depthTexture.compareFunction=ce?nm:tm,I.map.depthTexture.minFilter=On,I.map.depthTexture.magFilter=On):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Xn,I.map.depthTexture.magFilter=Xn);I.camera.updateProjectionMatrix()}const be=I.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<be;P++){if(I.map.isWebGLCubeRenderTarget)a.setRenderTarget(I.map,P),a.clear();else{P===0&&(a.setRenderTarget(I.map),a.clear());const Y=I.getViewport(P);c.set(u.x*Y.x,u.y*Y.y,u.x*Y.z,u.y*Y.w),K.viewport(c)}if(O.isPointLight){const Y=I.camera,xe=I.matrix,Re=O.distance||Y.far;Re!==Y.far&&(Y.far=Re,Y.updateProjectionMatrix()),dl.setFromMatrixPosition(O.matrixWorld),Y.position.copy(dl),zh.copy(Y.position),zh.add(O2[P]),Y.up.copy(P2[P]),Y.lookAt(zh),Y.updateMatrixWorld(),xe.makeTranslation(-dl.x,-dl.y,-dl.z),yx.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),I._frustum.setFromProjectionMatrix(yx,Y.coordinateSystem,Y.reversedDepth)}else I.updateMatrices(O);s=I.getFrustum(),N(z,b,I.camera,O,this.type)}I.isPointLightShadow!==!0&&this.type===ml&&w(I,b),I.needsUpdate=!1}M=this.type,y.needsUpdate=!1,a.setRenderTarget(D,re,G)};function w(B,z){const b=e.update(A);g.defines.VSM_SAMPLES!==B.blurSamples&&(g.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Ji(l.x,l.y,{format:so,type:ha})),g.uniforms.shadow_pass.value=B.map.depthTexture,g.uniforms.resolution.value=B.mapSize,g.uniforms.radius.value=B.radius,a.setRenderTarget(B.mapPass),a.clear(),a.renderBufferDirect(z,null,b,g,A,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,a.setRenderTarget(B.map),a.clear(),a.renderBufferDirect(z,null,b,S,A,null)}function U(B,z,b,D){let re=null;const G=b.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(G!==void 0)re=G;else if(re=b.isPointLight===!0?m:h,a.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const K=re.uuid,ie=z.uuid;let ee=p[K];ee===void 0&&(ee={},p[K]=ee);let Z=ee[ie];Z===void 0&&(Z=re.clone(),ee[ie]=Z,z.addEventListener("dispose",H)),re=Z}if(re.visible=z.visible,re.wireframe=z.wireframe,D===ml?re.side=z.shadowSide!==null?z.shadowSide:z.side:re.side=z.shadowSide!==null?z.shadowSide:v[z.side],re.alphaMap=z.alphaMap,re.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,re.map=z.map,re.clipShadows=z.clipShadows,re.clippingPlanes=z.clippingPlanes,re.clipIntersection=z.clipIntersection,re.displacementMap=z.displacementMap,re.displacementScale=z.displacementScale,re.displacementBias=z.displacementBias,re.wireframeLinewidth=z.wireframeLinewidth,re.linewidth=z.linewidth,b.isPointLight===!0&&re.isMeshDistanceMaterial===!0){const K=a.properties.get(re);K.light=b}return re}function N(B,z,b,D,re){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&re===ml)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,B.matrixWorld);const ie=e.update(B),ee=B.material;if(Array.isArray(ee)){const Z=ie.groups;for(let O=0,I=Z.length;O<I;O++){const oe=Z[O],ce=ee[oe.materialIndex];if(ce&&ce.visible){const be=U(B,ce,D,re);B.onBeforeShadow(a,B,z,b,ie,be,oe),a.renderBufferDirect(b,null,ie,be,B,oe),B.onAfterShadow(a,B,z,b,ie,be,oe)}}}else if(ee.visible){const Z=U(B,ee,D,re);B.onBeforeShadow(a,B,z,b,ie,Z,null),a.renderBufferDirect(b,null,ie,Z,B,null),B.onAfterShadow(a,B,z,b,ie,Z,null)}}const K=B.children;for(let ie=0,ee=K.length;ie<ee;ie++)N(K[ie],z,b,D,re)}function H(B){B.target.removeEventListener("dispose",H);for(const b in p){const D=p[b],re=B.target.uuid;re in D&&(D[re].dispose(),delete D[re])}}}function z2(a,e){function i(){let j=!1;const Oe=new yn;let Le=null;const Ye=new yn(0,0,0,0);return{setMask:function(Ce){Le!==Ce&&!j&&(a.colorMask(Ce,Ce,Ce,Ce),Le=Ce)},setLocked:function(Ce){j=Ce},setClear:function(Ce,_e,Qe,vt,jt){jt===!0&&(Ce*=vt,_e*=vt,Qe*=vt),Oe.set(Ce,_e,Qe,vt),Ye.equals(Oe)===!1&&(a.clearColor(Ce,_e,Qe,vt),Ye.copy(Oe))},reset:function(){j=!1,Le=null,Ye.set(-1,0,0,0)}}}function s(){let j=!1,Oe=!1,Le=null,Ye=null,Ce=null;return{setReversed:function(_e){if(Oe!==_e){const Qe=e.get("EXT_clip_control");_e?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),Oe=_e;const vt=Ce;Ce=null,this.setClear(vt)}},getReversed:function(){return Oe},setTest:function(_e){_e?Se(a.DEPTH_TEST):Te(a.DEPTH_TEST)},setMask:function(_e){Le!==_e&&!j&&(a.depthMask(_e),Le=_e)},setFunc:function(_e){if(Oe&&(_e=y1[_e]),Ye!==_e){switch(_e){case Wh:a.depthFunc(a.NEVER);break;case qh:a.depthFunc(a.ALWAYS);break;case Yh:a.depthFunc(a.LESS);break;case ao:a.depthFunc(a.LEQUAL);break;case jh:a.depthFunc(a.EQUAL);break;case Zh:a.depthFunc(a.GEQUAL);break;case Kh:a.depthFunc(a.GREATER);break;case Qh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ye=_e}},setLocked:function(_e){j=_e},setClear:function(_e){Ce!==_e&&(Ce=_e,Oe&&(_e=1-_e),a.clearDepth(_e))},reset:function(){j=!1,Le=null,Ye=null,Ce=null,Oe=!1}}}function l(){let j=!1,Oe=null,Le=null,Ye=null,Ce=null,_e=null,Qe=null,vt=null,jt=null;return{setTest:function(Lt){j||(Lt?Se(a.STENCIL_TEST):Te(a.STENCIL_TEST))},setMask:function(Lt){Oe!==Lt&&!j&&(a.stencilMask(Lt),Oe=Lt)},setFunc:function(Lt,An,ti){(Le!==Lt||Ye!==An||Ce!==ti)&&(a.stencilFunc(Lt,An,ti),Le=Lt,Ye=An,Ce=ti)},setOp:function(Lt,An,ti){(_e!==Lt||Qe!==An||vt!==ti)&&(a.stencilOp(Lt,An,ti),_e=Lt,Qe=An,vt=ti)},setLocked:function(Lt){j=Lt},setClear:function(Lt){jt!==Lt&&(a.clearStencil(Lt),jt=Lt)},reset:function(){j=!1,Oe=null,Le=null,Ye=null,Ce=null,_e=null,Qe=null,vt=null,jt=null}}}const u=new i,c=new s,h=new l,m=new WeakMap,p=new WeakMap;let _={},v={},g=new WeakMap,S=[],T=null,A=!1,y=null,M=null,w=null,U=null,N=null,H=null,B=null,z=new $t(0,0,0),b=0,D=!1,re=null,G=null,K=null,ie=null,ee=null;const Z=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,I=0;const oe=a.getParameter(a.VERSION);oe.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(oe)[1]),O=I>=1):oe.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),O=I>=2);let ce=null,be={};const P=a.getParameter(a.SCISSOR_BOX),Y=a.getParameter(a.VIEWPORT),xe=new yn().fromArray(P),Re=new yn().fromArray(Y);function Ge(j,Oe,Le,Ye){const Ce=new Uint8Array(4),_e=a.createTexture();a.bindTexture(j,_e),a.texParameteri(j,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(j,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Qe=0;Qe<Le;Qe++)j===a.TEXTURE_3D||j===a.TEXTURE_2D_ARRAY?a.texImage3D(Oe,0,a.RGBA,1,1,Ye,0,a.RGBA,a.UNSIGNED_BYTE,Ce):a.texImage2D(Oe+Qe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ce);return _e}const ne={};ne[a.TEXTURE_2D]=Ge(a.TEXTURE_2D,a.TEXTURE_2D,1),ne[a.TEXTURE_CUBE_MAP]=Ge(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[a.TEXTURE_2D_ARRAY]=Ge(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ne[a.TEXTURE_3D]=Ge(a.TEXTURE_3D,a.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),h.setClear(0),Se(a.DEPTH_TEST),c.setFunc(ao),_t(!1),qt(M_),Se(a.CULL_FACE),St(Ha);function Se(j){_[j]!==!0&&(a.enable(j),_[j]=!0)}function Te(j){_[j]!==!1&&(a.disable(j),_[j]=!1)}function Ze(j,Oe){return v[j]!==Oe?(a.bindFramebuffer(j,Oe),v[j]=Oe,j===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=Oe),j===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=Oe),!0):!1}function ut(j,Oe){let Le=S,Ye=!1;if(j){Le=g.get(Oe),Le===void 0&&(Le=[],g.set(Oe,Le));const Ce=j.textures;if(Le.length!==Ce.length||Le[0]!==a.COLOR_ATTACHMENT0){for(let _e=0,Qe=Ce.length;_e<Qe;_e++)Le[_e]=a.COLOR_ATTACHMENT0+_e;Le.length=Ce.length,Ye=!0}}else Le[0]!==a.BACK&&(Le[0]=a.BACK,Ye=!0);Ye&&a.drawBuffers(Le)}function pt(j){return T!==j?(a.useProgram(j),T=j,!0):!1}const hn={[$r]:a.FUNC_ADD,[VT]:a.FUNC_SUBTRACT,[kT]:a.FUNC_REVERSE_SUBTRACT};hn[XT]=a.MIN,hn[WT]=a.MAX;const dt={[qT]:a.ZERO,[YT]:a.ONE,[jT]:a.SRC_COLOR,[kh]:a.SRC_ALPHA,[e1]:a.SRC_ALPHA_SATURATE,[JT]:a.DST_COLOR,[KT]:a.DST_ALPHA,[ZT]:a.ONE_MINUS_SRC_COLOR,[Xh]:a.ONE_MINUS_SRC_ALPHA,[$T]:a.ONE_MINUS_DST_COLOR,[QT]:a.ONE_MINUS_DST_ALPHA,[t1]:a.CONSTANT_COLOR,[n1]:a.ONE_MINUS_CONSTANT_COLOR,[i1]:a.CONSTANT_ALPHA,[a1]:a.ONE_MINUS_CONSTANT_ALPHA};function St(j,Oe,Le,Ye,Ce,_e,Qe,vt,jt,Lt){if(j===Ha){A===!0&&(Te(a.BLEND),A=!1);return}if(A===!1&&(Se(a.BLEND),A=!0),j!==GT){if(j!==y||Lt!==D){if((M!==$r||N!==$r)&&(a.blendEquation(a.FUNC_ADD),M=$r,N=$r),Lt)switch(j){case no:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Vh:a.blendFunc(a.ONE,a.ONE);break;case E_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case b_:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Qt("WebGLState: Invalid blending: ",j);break}else switch(j){case no:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Vh:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case E_:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case b_:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",j);break}w=null,U=null,H=null,B=null,z.set(0,0,0),b=0,y=j,D=Lt}return}Ce=Ce||Oe,_e=_e||Le,Qe=Qe||Ye,(Oe!==M||Ce!==N)&&(a.blendEquationSeparate(hn[Oe],hn[Ce]),M=Oe,N=Ce),(Le!==w||Ye!==U||_e!==H||Qe!==B)&&(a.blendFuncSeparate(dt[Le],dt[Ye],dt[_e],dt[Qe]),w=Le,U=Ye,H=_e,B=Qe),(vt.equals(z)===!1||jt!==b)&&(a.blendColor(vt.r,vt.g,vt.b,jt),z.copy(vt),b=jt),y=j,D=!1}function Ft(j,Oe){j.side===Ba?Te(a.CULL_FACE):Se(a.CULL_FACE);let Le=j.side===ui;Oe&&(Le=!Le),_t(Le),j.blending===no&&j.transparent===!1?St(Ha):St(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),c.setFunc(j.depthFunc),c.setTest(j.depthTest),c.setMask(j.depthWrite),u.setMask(j.colorWrite);const Ye=j.stencilWrite;h.setTest(Ye),Ye&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),tn(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Se(a.SAMPLE_ALPHA_TO_COVERAGE):Te(a.SAMPLE_ALPHA_TO_COVERAGE)}function _t(j){re!==j&&(j?a.frontFace(a.CW):a.frontFace(a.CCW),re=j)}function qt(j){j!==IT?(Se(a.CULL_FACE),j!==G&&(j===M_?a.cullFace(a.BACK):j===BT?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Te(a.CULL_FACE),G=j}function X(j){j!==K&&(O&&a.lineWidth(j),K=j)}function tn(j,Oe,Le){j?(Se(a.POLYGON_OFFSET_FILL),(ie!==Oe||ee!==Le)&&(ie=Oe,ee=Le,c.getReversed()&&(Oe=-Oe),a.polygonOffset(Oe,Le))):Te(a.POLYGON_OFFSET_FILL)}function Ut(j){j?Se(a.SCISSOR_TEST):Te(a.SCISSOR_TEST)}function Gt(j){j===void 0&&(j=a.TEXTURE0+Z-1),ce!==j&&(a.activeTexture(j),ce=j)}function et(j,Oe,Le){Le===void 0&&(ce===null?Le=a.TEXTURE0+Z-1:Le=ce);let Ye=be[Le];Ye===void 0&&(Ye={type:void 0,texture:void 0},be[Le]=Ye),(Ye.type!==j||Ye.texture!==Oe)&&(ce!==Le&&(a.activeTexture(Le),ce=Le),a.bindTexture(j,Oe||ne[j]),Ye.type=j,Ye.texture=Oe)}function L(){const j=be[ce];j!==void 0&&j.type!==void 0&&(a.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function x(){try{a.compressedTexImage2D(...arguments)}catch(j){Qt("WebGLState:",j)}}function F(){try{a.compressedTexImage3D(...arguments)}catch(j){Qt("WebGLState:",j)}}function J(){try{a.texSubImage2D(...arguments)}catch(j){Qt("WebGLState:",j)}}function ge(){try{a.texSubImage3D(...arguments)}catch(j){Qt("WebGLState:",j)}}function fe(){try{a.compressedTexSubImage2D(...arguments)}catch(j){Qt("WebGLState:",j)}}function Pe(){try{a.compressedTexSubImage3D(...arguments)}catch(j){Qt("WebGLState:",j)}}function Ue(){try{a.texStorage2D(...arguments)}catch(j){Qt("WebGLState:",j)}}function tt(){try{a.texStorage3D(...arguments)}catch(j){Qt("WebGLState:",j)}}function ct(){try{a.texImage2D(...arguments)}catch(j){Qt("WebGLState:",j)}}function we(){try{a.texImage3D(...arguments)}catch(j){Qt("WebGLState:",j)}}function De(j){xe.equals(j)===!1&&(a.scissor(j.x,j.y,j.z,j.w),xe.copy(j))}function He(j){Re.equals(j)===!1&&(a.viewport(j.x,j.y,j.z,j.w),Re.copy(j))}function Ve(j,Oe){let Le=p.get(Oe);Le===void 0&&(Le=new WeakMap,p.set(Oe,Le));let Ye=Le.get(j);Ye===void 0&&(Ye=a.getUniformBlockIndex(Oe,j.name),Le.set(j,Ye))}function qe(j,Oe){const Ye=p.get(Oe).get(j);m.get(Oe)!==Ye&&(a.uniformBlockBinding(Oe,Ye,j.__bindingPointIndex),m.set(Oe,Ye))}function Et(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),c.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),_={},ce=null,be={},v={},g=new WeakMap,S=[],T=null,A=!1,y=null,M=null,w=null,U=null,N=null,H=null,B=null,z=new $t(0,0,0),b=0,D=!1,re=null,G=null,K=null,ie=null,ee=null,xe.set(0,0,a.canvas.width,a.canvas.height),Re.set(0,0,a.canvas.width,a.canvas.height),u.reset(),c.reset(),h.reset()}return{buffers:{color:u,depth:c,stencil:h},enable:Se,disable:Te,bindFramebuffer:Ze,drawBuffers:ut,useProgram:pt,setBlending:St,setMaterial:Ft,setFlipSided:_t,setCullFace:qt,setLineWidth:X,setPolygonOffset:tn,setScissorTest:Ut,activeTexture:Gt,bindTexture:et,unbindTexture:L,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:ct,texImage3D:we,updateUBOMapping:Ve,uniformBlockBinding:qe,texStorage2D:Ue,texStorage3D:tt,texSubImage2D:J,texSubImage3D:ge,compressedTexSubImage2D:fe,compressedTexSubImage3D:Pe,scissor:De,viewport:He,reset:Et}}function I2(a,e,i,s,l,u,c){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Tt,_=new WeakMap;let v;const g=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,x){return S?new OffscreenCanvas(L,x):wc("canvas")}function A(L,x,F){let J=1;const ge=et(L);if((ge.width>F||ge.height>F)&&(J=F/Math.max(ge.width,ge.height)),J<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const fe=Math.floor(J*ge.width),Pe=Math.floor(J*ge.height);v===void 0&&(v=T(fe,Pe));const Ue=x?T(fe,Pe):v;return Ue.width=fe,Ue.height=Pe,Ue.getContext("2d").drawImage(L,0,0,fe,Pe),yt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+fe+"x"+Pe+")."),Ue}else return"data"in L&&yt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),L;return L}function y(L){return L.generateMipmaps}function M(L){a.generateMipmap(L)}function w(L){return L.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?a.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function U(L,x,F,J,ge=!1){if(L!==null){if(a[L]!==void 0)return a[L];yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let fe=x;if(x===a.RED&&(F===a.FLOAT&&(fe=a.R32F),F===a.HALF_FLOAT&&(fe=a.R16F),F===a.UNSIGNED_BYTE&&(fe=a.R8)),x===a.RED_INTEGER&&(F===a.UNSIGNED_BYTE&&(fe=a.R8UI),F===a.UNSIGNED_SHORT&&(fe=a.R16UI),F===a.UNSIGNED_INT&&(fe=a.R32UI),F===a.BYTE&&(fe=a.R8I),F===a.SHORT&&(fe=a.R16I),F===a.INT&&(fe=a.R32I)),x===a.RG&&(F===a.FLOAT&&(fe=a.RG32F),F===a.HALF_FLOAT&&(fe=a.RG16F),F===a.UNSIGNED_BYTE&&(fe=a.RG8)),x===a.RG_INTEGER&&(F===a.UNSIGNED_BYTE&&(fe=a.RG8UI),F===a.UNSIGNED_SHORT&&(fe=a.RG16UI),F===a.UNSIGNED_INT&&(fe=a.RG32UI),F===a.BYTE&&(fe=a.RG8I),F===a.SHORT&&(fe=a.RG16I),F===a.INT&&(fe=a.RG32I)),x===a.RGB_INTEGER&&(F===a.UNSIGNED_BYTE&&(fe=a.RGB8UI),F===a.UNSIGNED_SHORT&&(fe=a.RGB16UI),F===a.UNSIGNED_INT&&(fe=a.RGB32UI),F===a.BYTE&&(fe=a.RGB8I),F===a.SHORT&&(fe=a.RGB16I),F===a.INT&&(fe=a.RGB32I)),x===a.RGBA_INTEGER&&(F===a.UNSIGNED_BYTE&&(fe=a.RGBA8UI),F===a.UNSIGNED_SHORT&&(fe=a.RGBA16UI),F===a.UNSIGNED_INT&&(fe=a.RGBA32UI),F===a.BYTE&&(fe=a.RGBA8I),F===a.SHORT&&(fe=a.RGBA16I),F===a.INT&&(fe=a.RGBA32I)),x===a.RGB&&(F===a.UNSIGNED_INT_5_9_9_9_REV&&(fe=a.RGB9_E5),F===a.UNSIGNED_INT_10F_11F_11F_REV&&(fe=a.R11F_G11F_B10F)),x===a.RGBA){const Pe=ge?Rc:Yt.getTransfer(J);F===a.FLOAT&&(fe=a.RGBA32F),F===a.HALF_FLOAT&&(fe=a.RGBA16F),F===a.UNSIGNED_BYTE&&(fe=Pe===on?a.SRGB8_ALPHA8:a.RGBA8),F===a.UNSIGNED_SHORT_4_4_4_4&&(fe=a.RGBA4),F===a.UNSIGNED_SHORT_5_5_5_1&&(fe=a.RGB5_A1)}return(fe===a.R16F||fe===a.R32F||fe===a.RG16F||fe===a.RG32F||fe===a.RGBA16F||fe===a.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function N(L,x){let F;return L?x===null||x===da||x===El?F=a.DEPTH24_STENCIL8:x===Ki?F=a.DEPTH32F_STENCIL8:x===Ml&&(F=a.DEPTH24_STENCIL8,yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===da||x===El?F=a.DEPTH_COMPONENT24:x===Ki?F=a.DEPTH_COMPONENT32F:x===Ml&&(F=a.DEPTH_COMPONENT16),F}function H(L,x){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==Xn&&L.minFilter!==On?Math.log2(Math.max(x.width,x.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?x.mipmaps.length:1}function B(L){const x=L.target;x.removeEventListener("dispose",B),b(x),x.isVideoTexture&&_.delete(x)}function z(L){const x=L.target;x.removeEventListener("dispose",z),re(x)}function b(L){const x=s.get(L);if(x.__webglInit===void 0)return;const F=L.source,J=g.get(F);if(J){const ge=J[x.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&D(L),Object.keys(J).length===0&&g.delete(F)}s.remove(L)}function D(L){const x=s.get(L);a.deleteTexture(x.__webglTexture);const F=L.source,J=g.get(F);delete J[x.__cacheKey],c.memory.textures--}function re(L){const x=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(x.__webglFramebuffer[J]))for(let ge=0;ge<x.__webglFramebuffer[J].length;ge++)a.deleteFramebuffer(x.__webglFramebuffer[J][ge]);else a.deleteFramebuffer(x.__webglFramebuffer[J]);x.__webglDepthbuffer&&a.deleteRenderbuffer(x.__webglDepthbuffer[J])}else{if(Array.isArray(x.__webglFramebuffer))for(let J=0;J<x.__webglFramebuffer.length;J++)a.deleteFramebuffer(x.__webglFramebuffer[J]);else a.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&a.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&a.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let J=0;J<x.__webglColorRenderbuffer.length;J++)x.__webglColorRenderbuffer[J]&&a.deleteRenderbuffer(x.__webglColorRenderbuffer[J]);x.__webglDepthRenderbuffer&&a.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=L.textures;for(let J=0,ge=F.length;J<ge;J++){const fe=s.get(F[J]);fe.__webglTexture&&(a.deleteTexture(fe.__webglTexture),c.memory.textures--),s.remove(F[J])}s.remove(L)}let G=0;function K(){G=0}function ie(){const L=G;return L>=l.maxTextures&&yt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),G+=1,L}function ee(L){const x=[];return x.push(L.wrapS),x.push(L.wrapT),x.push(L.wrapR||0),x.push(L.magFilter),x.push(L.minFilter),x.push(L.anisotropy),x.push(L.internalFormat),x.push(L.format),x.push(L.type),x.push(L.generateMipmaps),x.push(L.premultiplyAlpha),x.push(L.flipY),x.push(L.unpackAlignment),x.push(L.colorSpace),x.join()}function Z(L,x){const F=s.get(L);if(L.isVideoTexture&&Ut(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&F.__version!==L.version){const J=L.image;if(J===null)yt("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)yt("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(F,L,x);return}}else L.isExternalTexture&&(F.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,F.__webglTexture,a.TEXTURE0+x)}function O(L,x){const F=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&F.__version!==L.version){ne(F,L,x);return}else L.isExternalTexture&&(F.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(a.TEXTURE_2D_ARRAY,F.__webglTexture,a.TEXTURE0+x)}function I(L,x){const F=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&F.__version!==L.version){ne(F,L,x);return}i.bindTexture(a.TEXTURE_3D,F.__webglTexture,a.TEXTURE0+x)}function oe(L,x){const F=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&F.__version!==L.version){Se(F,L,x);return}i.bindTexture(a.TEXTURE_CUBE_MAP,F.__webglTexture,a.TEXTURE0+x)}const ce={[Jh]:a.REPEAT,[Ei]:a.CLAMP_TO_EDGE,[$h]:a.MIRRORED_REPEAT},be={[Xn]:a.NEAREST,[o1]:a.NEAREST_MIPMAP_NEAREST,[qu]:a.NEAREST_MIPMAP_LINEAR,[On]:a.LINEAR,[sh]:a.LINEAR_MIPMAP_NEAREST,[ns]:a.LINEAR_MIPMAP_LINEAR},P={[f1]:a.NEVER,[g1]:a.ALWAYS,[d1]:a.LESS,[tm]:a.LEQUAL,[h1]:a.EQUAL,[nm]:a.GEQUAL,[p1]:a.GREATER,[m1]:a.NOTEQUAL};function Y(L,x){if(x.type===Ki&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===On||x.magFilter===sh||x.magFilter===qu||x.magFilter===ns||x.minFilter===On||x.minFilter===sh||x.minFilter===qu||x.minFilter===ns)&&yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(L,a.TEXTURE_WRAP_S,ce[x.wrapS]),a.texParameteri(L,a.TEXTURE_WRAP_T,ce[x.wrapT]),(L===a.TEXTURE_3D||L===a.TEXTURE_2D_ARRAY)&&a.texParameteri(L,a.TEXTURE_WRAP_R,ce[x.wrapR]),a.texParameteri(L,a.TEXTURE_MAG_FILTER,be[x.magFilter]),a.texParameteri(L,a.TEXTURE_MIN_FILTER,be[x.minFilter]),x.compareFunction&&(a.texParameteri(L,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(L,a.TEXTURE_COMPARE_FUNC,P[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Xn||x.minFilter!==qu&&x.minFilter!==ns||x.type===Ki&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||s.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");a.texParameterf(L,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,l.getMaxAnisotropy())),s.get(x).__currentAnisotropy=x.anisotropy}}}function xe(L,x){let F=!1;L.__webglInit===void 0&&(L.__webglInit=!0,x.addEventListener("dispose",B));const J=x.source;let ge=g.get(J);ge===void 0&&(ge={},g.set(J,ge));const fe=ee(x);if(fe!==L.__cacheKey){ge[fe]===void 0&&(ge[fe]={texture:a.createTexture(),usedTimes:0},c.memory.textures++,F=!0),ge[fe].usedTimes++;const Pe=ge[L.__cacheKey];Pe!==void 0&&(ge[L.__cacheKey].usedTimes--,Pe.usedTimes===0&&D(x)),L.__cacheKey=fe,L.__webglTexture=ge[fe].texture}return F}function Re(L,x,F){return Math.floor(Math.floor(L/F)/x)}function Ge(L,x,F,J){const fe=L.updateRanges;if(fe.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,x.width,x.height,F,J,x.data);else{fe.sort((we,De)=>we.start-De.start);let Pe=0;for(let we=1;we<fe.length;we++){const De=fe[Pe],He=fe[we],Ve=De.start+De.count,qe=Re(He.start,x.width,4),Et=Re(De.start,x.width,4);He.start<=Ve+1&&qe===Et&&Re(He.start+He.count-1,x.width,4)===qe?De.count=Math.max(De.count,He.start+He.count-De.start):(++Pe,fe[Pe]=He)}fe.length=Pe+1;const Ue=a.getParameter(a.UNPACK_ROW_LENGTH),tt=a.getParameter(a.UNPACK_SKIP_PIXELS),ct=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,x.width);for(let we=0,De=fe.length;we<De;we++){const He=fe[we],Ve=Math.floor(He.start/4),qe=Math.ceil(He.count/4),Et=Ve%x.width,j=Math.floor(Ve/x.width),Oe=qe,Le=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,Et),a.pixelStorei(a.UNPACK_SKIP_ROWS,j),i.texSubImage2D(a.TEXTURE_2D,0,Et,j,Oe,Le,F,J,x.data)}L.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,Ue),a.pixelStorei(a.UNPACK_SKIP_PIXELS,tt),a.pixelStorei(a.UNPACK_SKIP_ROWS,ct)}}function ne(L,x,F){let J=a.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=a.TEXTURE_2D_ARRAY),x.isData3DTexture&&(J=a.TEXTURE_3D);const ge=xe(L,x),fe=x.source;i.bindTexture(J,L.__webglTexture,a.TEXTURE0+F);const Pe=s.get(fe);if(fe.version!==Pe.__version||ge===!0){i.activeTexture(a.TEXTURE0+F);const Ue=Yt.getPrimaries(Yt.workingColorSpace),tt=x.colorSpace===Tr?null:Yt.getPrimaries(x.colorSpace),ct=x.colorSpace===Tr||Ue===tt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,x.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,x.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let we=A(x.image,!1,l.maxTextureSize);we=Gt(x,we);const De=u.convert(x.format,x.colorSpace),He=u.convert(x.type);let Ve=U(x.internalFormat,De,He,x.colorSpace,x.isVideoTexture);Y(J,x);let qe;const Et=x.mipmaps,j=x.isVideoTexture!==!0,Oe=Pe.__version===void 0||ge===!0,Le=fe.dataReady,Ye=H(x,we);if(x.isDepthTexture)Ve=N(x.format===is,x.type),Oe&&(j?i.texStorage2D(a.TEXTURE_2D,1,Ve,we.width,we.height):i.texImage2D(a.TEXTURE_2D,0,Ve,we.width,we.height,0,De,He,null));else if(x.isDataTexture)if(Et.length>0){j&&Oe&&i.texStorage2D(a.TEXTURE_2D,Ye,Ve,Et[0].width,Et[0].height);for(let Ce=0,_e=Et.length;Ce<_e;Ce++)qe=Et[Ce],j?Le&&i.texSubImage2D(a.TEXTURE_2D,Ce,0,0,qe.width,qe.height,De,He,qe.data):i.texImage2D(a.TEXTURE_2D,Ce,Ve,qe.width,qe.height,0,De,He,qe.data);x.generateMipmaps=!1}else j?(Oe&&i.texStorage2D(a.TEXTURE_2D,Ye,Ve,we.width,we.height),Le&&Ge(x,we,De,He)):i.texImage2D(a.TEXTURE_2D,0,Ve,we.width,we.height,0,De,He,we.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){j&&Oe&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Ye,Ve,Et[0].width,Et[0].height,we.depth);for(let Ce=0,_e=Et.length;Ce<_e;Ce++)if(qe=Et[Ce],x.format!==Fi)if(De!==null)if(j){if(Le)if(x.layerUpdates.size>0){const Qe=Q_(qe.width,qe.height,x.format,x.type);for(const vt of x.layerUpdates){const jt=qe.data.subarray(vt*Qe/qe.data.BYTES_PER_ELEMENT,(vt+1)*Qe/qe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Ce,0,0,vt,qe.width,qe.height,1,De,jt)}x.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Ce,0,0,0,qe.width,qe.height,we.depth,De,qe.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Ce,Ve,qe.width,qe.height,we.depth,0,qe.data,0,0);else yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Le&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,Ce,0,0,0,qe.width,qe.height,we.depth,De,He,qe.data):i.texImage3D(a.TEXTURE_2D_ARRAY,Ce,Ve,qe.width,qe.height,we.depth,0,De,He,qe.data)}else{j&&Oe&&i.texStorage2D(a.TEXTURE_2D,Ye,Ve,Et[0].width,Et[0].height);for(let Ce=0,_e=Et.length;Ce<_e;Ce++)qe=Et[Ce],x.format!==Fi?De!==null?j?Le&&i.compressedTexSubImage2D(a.TEXTURE_2D,Ce,0,0,qe.width,qe.height,De,qe.data):i.compressedTexImage2D(a.TEXTURE_2D,Ce,Ve,qe.width,qe.height,0,qe.data):yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Le&&i.texSubImage2D(a.TEXTURE_2D,Ce,0,0,qe.width,qe.height,De,He,qe.data):i.texImage2D(a.TEXTURE_2D,Ce,Ve,qe.width,qe.height,0,De,He,qe.data)}else if(x.isDataArrayTexture)if(j){if(Oe&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Ye,Ve,we.width,we.height,we.depth),Le)if(x.layerUpdates.size>0){const Ce=Q_(we.width,we.height,x.format,x.type);for(const _e of x.layerUpdates){const Qe=we.data.subarray(_e*Ce/we.data.BYTES_PER_ELEMENT,(_e+1)*Ce/we.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,_e,we.width,we.height,1,De,He,Qe)}x.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,De,He,we.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,Ve,we.width,we.height,we.depth,0,De,He,we.data);else if(x.isData3DTexture)j?(Oe&&i.texStorage3D(a.TEXTURE_3D,Ye,Ve,we.width,we.height,we.depth),Le&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,De,He,we.data)):i.texImage3D(a.TEXTURE_3D,0,Ve,we.width,we.height,we.depth,0,De,He,we.data);else if(x.isFramebufferTexture){if(Oe)if(j)i.texStorage2D(a.TEXTURE_2D,Ye,Ve,we.width,we.height);else{let Ce=we.width,_e=we.height;for(let Qe=0;Qe<Ye;Qe++)i.texImage2D(a.TEXTURE_2D,Qe,Ve,Ce,_e,0,De,He,null),Ce>>=1,_e>>=1}}else if(Et.length>0){if(j&&Oe){const Ce=et(Et[0]);i.texStorage2D(a.TEXTURE_2D,Ye,Ve,Ce.width,Ce.height)}for(let Ce=0,_e=Et.length;Ce<_e;Ce++)qe=Et[Ce],j?Le&&i.texSubImage2D(a.TEXTURE_2D,Ce,0,0,De,He,qe):i.texImage2D(a.TEXTURE_2D,Ce,Ve,De,He,qe);x.generateMipmaps=!1}else if(j){if(Oe){const Ce=et(we);i.texStorage2D(a.TEXTURE_2D,Ye,Ve,Ce.width,Ce.height)}Le&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,De,He,we)}else i.texImage2D(a.TEXTURE_2D,0,Ve,De,He,we);y(x)&&M(J),Pe.__version=fe.version,x.onUpdate&&x.onUpdate(x)}L.__version=x.version}function Se(L,x,F){if(x.image.length!==6)return;const J=xe(L,x),ge=x.source;i.bindTexture(a.TEXTURE_CUBE_MAP,L.__webglTexture,a.TEXTURE0+F);const fe=s.get(ge);if(ge.version!==fe.__version||J===!0){i.activeTexture(a.TEXTURE0+F);const Pe=Yt.getPrimaries(Yt.workingColorSpace),Ue=x.colorSpace===Tr?null:Yt.getPrimaries(x.colorSpace),tt=x.colorSpace===Tr||Pe===Ue?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,x.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,x.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);const ct=x.isCompressedTexture||x.image[0].isCompressedTexture,we=x.image[0]&&x.image[0].isDataTexture,De=[];for(let _e=0;_e<6;_e++)!ct&&!we?De[_e]=A(x.image[_e],!0,l.maxCubemapSize):De[_e]=we?x.image[_e].image:x.image[_e],De[_e]=Gt(x,De[_e]);const He=De[0],Ve=u.convert(x.format,x.colorSpace),qe=u.convert(x.type),Et=U(x.internalFormat,Ve,qe,x.colorSpace),j=x.isVideoTexture!==!0,Oe=fe.__version===void 0||J===!0,Le=ge.dataReady;let Ye=H(x,He);Y(a.TEXTURE_CUBE_MAP,x);let Ce;if(ct){j&&Oe&&i.texStorage2D(a.TEXTURE_CUBE_MAP,Ye,Et,He.width,He.height);for(let _e=0;_e<6;_e++){Ce=De[_e].mipmaps;for(let Qe=0;Qe<Ce.length;Qe++){const vt=Ce[Qe];x.format!==Fi?Ve!==null?j?Le&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Qe,0,0,vt.width,vt.height,Ve,vt.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Qe,Et,vt.width,vt.height,0,vt.data):yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Le&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Qe,0,0,vt.width,vt.height,Ve,qe,vt.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Qe,Et,vt.width,vt.height,0,Ve,qe,vt.data)}}}else{if(Ce=x.mipmaps,j&&Oe){Ce.length>0&&Ye++;const _e=et(De[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,Ye,Et,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(we){j?Le&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,De[_e].width,De[_e].height,Ve,qe,De[_e].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Et,De[_e].width,De[_e].height,0,Ve,qe,De[_e].data);for(let Qe=0;Qe<Ce.length;Qe++){const jt=Ce[Qe].image[_e].image;j?Le&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Qe+1,0,0,jt.width,jt.height,Ve,qe,jt.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Qe+1,Et,jt.width,jt.height,0,Ve,qe,jt.data)}}else{j?Le&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ve,qe,De[_e]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Et,Ve,qe,De[_e]);for(let Qe=0;Qe<Ce.length;Qe++){const vt=Ce[Qe];j?Le&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Qe+1,0,0,Ve,qe,vt.image[_e]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Qe+1,Et,Ve,qe,vt.image[_e])}}}y(x)&&M(a.TEXTURE_CUBE_MAP),fe.__version=ge.version,x.onUpdate&&x.onUpdate(x)}L.__version=x.version}function Te(L,x,F,J,ge,fe){const Pe=u.convert(F.format,F.colorSpace),Ue=u.convert(F.type),tt=U(F.internalFormat,Pe,Ue,F.colorSpace),ct=s.get(x),we=s.get(F);if(we.__renderTarget=x,!ct.__hasExternalTextures){const De=Math.max(1,x.width>>fe),He=Math.max(1,x.height>>fe);ge===a.TEXTURE_3D||ge===a.TEXTURE_2D_ARRAY?i.texImage3D(ge,fe,tt,De,He,x.depth,0,Pe,Ue,null):i.texImage2D(ge,fe,tt,De,He,0,Pe,Ue,null)}i.bindFramebuffer(a.FRAMEBUFFER,L),tn(x)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,J,ge,we.__webglTexture,0,X(x)):(ge===a.TEXTURE_2D||ge>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,J,ge,we.__webglTexture,fe),i.bindFramebuffer(a.FRAMEBUFFER,null)}function Ze(L,x,F){if(a.bindRenderbuffer(a.RENDERBUFFER,L),x.depthBuffer){const J=x.depthTexture,ge=J&&J.isDepthTexture?J.type:null,fe=N(x.stencilBuffer,ge),Pe=x.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;tn(x)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,X(x),fe,x.width,x.height):F?a.renderbufferStorageMultisample(a.RENDERBUFFER,X(x),fe,x.width,x.height):a.renderbufferStorage(a.RENDERBUFFER,fe,x.width,x.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Pe,a.RENDERBUFFER,L)}else{const J=x.textures;for(let ge=0;ge<J.length;ge++){const fe=J[ge],Pe=u.convert(fe.format,fe.colorSpace),Ue=u.convert(fe.type),tt=U(fe.internalFormat,Pe,Ue,fe.colorSpace);tn(x)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,X(x),tt,x.width,x.height):F?a.renderbufferStorageMultisample(a.RENDERBUFFER,X(x),tt,x.width,x.height):a.renderbufferStorage(a.RENDERBUFFER,tt,x.width,x.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ut(L,x,F){const J=x.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(a.FRAMEBUFFER,L),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=s.get(x.depthTexture);if(ge.__renderTarget=x,(!ge.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),J){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,x.depthTexture.addEventListener("dispose",B)),ge.__webglTexture===void 0){ge.__webglTexture=a.createTexture(),i.bindTexture(a.TEXTURE_CUBE_MAP,ge.__webglTexture),Y(a.TEXTURE_CUBE_MAP,x.depthTexture);const ct=u.convert(x.depthTexture.format),we=u.convert(x.depthTexture.type);let De;x.depthTexture.format===Va?De=a.DEPTH_COMPONENT24:x.depthTexture.format===is&&(De=a.DEPTH24_STENCIL8);for(let He=0;He<6;He++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,De,x.width,x.height,0,ct,we,null)}}else Z(x.depthTexture,0);const fe=ge.__webglTexture,Pe=X(x),Ue=J?a.TEXTURE_CUBE_MAP_POSITIVE_X+F:a.TEXTURE_2D,tt=x.depthTexture.format===is?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(x.depthTexture.format===Va)tn(x)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,tt,Ue,fe,0,Pe):a.framebufferTexture2D(a.FRAMEBUFFER,tt,Ue,fe,0);else if(x.depthTexture.format===is)tn(x)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,tt,Ue,fe,0,Pe):a.framebufferTexture2D(a.FRAMEBUFFER,tt,Ue,fe,0);else throw new Error("Unknown depthTexture format")}function pt(L){const x=s.get(L),F=L.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==L.depthTexture){const J=L.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),J){const ge=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,J.removeEventListener("dispose",ge)};J.addEventListener("dispose",ge),x.__depthDisposeCallback=ge}x.__boundDepthTexture=J}if(L.depthTexture&&!x.__autoAllocateDepthBuffer)if(F)for(let J=0;J<6;J++)ut(x.__webglFramebuffer[J],L,J);else{const J=L.texture.mipmaps;J&&J.length>0?ut(x.__webglFramebuffer[0],L,0):ut(x.__webglFramebuffer,L,0)}else if(F){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(i.bindFramebuffer(a.FRAMEBUFFER,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]===void 0)x.__webglDepthbuffer[J]=a.createRenderbuffer(),Ze(x.__webglDepthbuffer[J],L,!1);else{const ge=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,fe=x.__webglDepthbuffer[J];a.bindRenderbuffer(a.RENDERBUFFER,fe),a.framebufferRenderbuffer(a.FRAMEBUFFER,ge,a.RENDERBUFFER,fe)}}else{const J=L.texture.mipmaps;if(J&&J.length>0?i.bindFramebuffer(a.FRAMEBUFFER,x.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=a.createRenderbuffer(),Ze(x.__webglDepthbuffer,L,!1);else{const ge=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,fe=x.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,fe),a.framebufferRenderbuffer(a.FRAMEBUFFER,ge,a.RENDERBUFFER,fe)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function hn(L,x,F){const J=s.get(L);x!==void 0&&Te(J.__webglFramebuffer,L,L.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),F!==void 0&&pt(L)}function dt(L){const x=L.texture,F=s.get(L),J=s.get(x);L.addEventListener("dispose",z);const ge=L.textures,fe=L.isWebGLCubeRenderTarget===!0,Pe=ge.length>1;if(Pe||(J.__webglTexture===void 0&&(J.__webglTexture=a.createTexture()),J.__version=x.version,c.memory.textures++),fe){F.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[Ue]=[];for(let tt=0;tt<x.mipmaps.length;tt++)F.__webglFramebuffer[Ue][tt]=a.createFramebuffer()}else F.__webglFramebuffer[Ue]=a.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let Ue=0;Ue<x.mipmaps.length;Ue++)F.__webglFramebuffer[Ue]=a.createFramebuffer()}else F.__webglFramebuffer=a.createFramebuffer();if(Pe)for(let Ue=0,tt=ge.length;Ue<tt;Ue++){const ct=s.get(ge[Ue]);ct.__webglTexture===void 0&&(ct.__webglTexture=a.createTexture(),c.memory.textures++)}if(L.samples>0&&tn(L)===!1){F.__webglMultisampledFramebuffer=a.createFramebuffer(),F.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Ue=0;Ue<ge.length;Ue++){const tt=ge[Ue];F.__webglColorRenderbuffer[Ue]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,F.__webglColorRenderbuffer[Ue]);const ct=u.convert(tt.format,tt.colorSpace),we=u.convert(tt.type),De=U(tt.internalFormat,ct,we,tt.colorSpace,L.isXRRenderTarget===!0),He=X(L);a.renderbufferStorageMultisample(a.RENDERBUFFER,He,De,L.width,L.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ue,a.RENDERBUFFER,F.__webglColorRenderbuffer[Ue])}a.bindRenderbuffer(a.RENDERBUFFER,null),L.depthBuffer&&(F.__webglDepthRenderbuffer=a.createRenderbuffer(),Ze(F.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(fe){i.bindTexture(a.TEXTURE_CUBE_MAP,J.__webglTexture),Y(a.TEXTURE_CUBE_MAP,x);for(let Ue=0;Ue<6;Ue++)if(x.mipmaps&&x.mipmaps.length>0)for(let tt=0;tt<x.mipmaps.length;tt++)Te(F.__webglFramebuffer[Ue][tt],L,x,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,tt);else Te(F.__webglFramebuffer[Ue],L,x,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);y(x)&&M(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pe){for(let Ue=0,tt=ge.length;Ue<tt;Ue++){const ct=ge[Ue],we=s.get(ct);let De=a.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(De=L.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(De,we.__webglTexture),Y(De,ct),Te(F.__webglFramebuffer,L,ct,a.COLOR_ATTACHMENT0+Ue,De,0),y(ct)&&M(De)}i.unbindTexture()}else{let Ue=a.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ue=L.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Ue,J.__webglTexture),Y(Ue,x),x.mipmaps&&x.mipmaps.length>0)for(let tt=0;tt<x.mipmaps.length;tt++)Te(F.__webglFramebuffer[tt],L,x,a.COLOR_ATTACHMENT0,Ue,tt);else Te(F.__webglFramebuffer,L,x,a.COLOR_ATTACHMENT0,Ue,0);y(x)&&M(Ue),i.unbindTexture()}L.depthBuffer&&pt(L)}function St(L){const x=L.textures;for(let F=0,J=x.length;F<J;F++){const ge=x[F];if(y(ge)){const fe=w(L),Pe=s.get(ge).__webglTexture;i.bindTexture(fe,Pe),M(fe),i.unbindTexture()}}}const Ft=[],_t=[];function qt(L){if(L.samples>0){if(tn(L)===!1){const x=L.textures,F=L.width,J=L.height;let ge=a.COLOR_BUFFER_BIT;const fe=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Pe=s.get(L),Ue=x.length>1;if(Ue)for(let ct=0;ct<x.length;ct++)i.bindFramebuffer(a.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ct,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,Pe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ct,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const tt=L.texture.mipmaps;tt&&tt.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let ct=0;ct<x.length;ct++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ge|=a.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ge|=a.STENCIL_BUFFER_BIT)),Ue){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Pe.__webglColorRenderbuffer[ct]);const we=s.get(x[ct]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,we,0)}a.blitFramebuffer(0,0,F,J,0,0,F,J,ge,a.NEAREST),m===!0&&(Ft.length=0,_t.length=0,Ft.push(a.COLOR_ATTACHMENT0+ct),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ft.push(fe),_t.push(fe),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,_t)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Ft))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Ue)for(let ct=0;ct<x.length;ct++){i.bindFramebuffer(a.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ct,a.RENDERBUFFER,Pe.__webglColorRenderbuffer[ct]);const we=s.get(x[ct]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,Pe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ct,a.TEXTURE_2D,we,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const x=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[x])}}}function X(L){return Math.min(l.maxSamples,L.samples)}function tn(L){const x=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ut(L){const x=c.render.frame;_.get(L)!==x&&(_.set(L,x),L.update())}function Gt(L,x){const F=L.colorSpace,J=L.format,ge=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||F!==oo&&F!==Tr&&(Yt.getTransfer(F)===on?(J!==Fi||ge!==Pi)&&yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",F)),x}function et(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=ie,this.resetTextureUnits=K,this.setTexture2D=Z,this.setTexture2DArray=O,this.setTexture3D=I,this.setTextureCube=oe,this.rebindTextures=hn,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=tn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function B2(a,e){function i(s,l=Tr){let u;const c=Yt.getTransfer(l);if(s===Pi)return a.UNSIGNED_BYTE;if(s===Kp)return a.UNSIGNED_SHORT_4_4_4_4;if(s===Qp)return a.UNSIGNED_SHORT_5_5_5_1;if(s===dy)return a.UNSIGNED_INT_5_9_9_9_REV;if(s===hy)return a.UNSIGNED_INT_10F_11F_11F_REV;if(s===cy)return a.BYTE;if(s===fy)return a.SHORT;if(s===Ml)return a.UNSIGNED_SHORT;if(s===Zp)return a.INT;if(s===da)return a.UNSIGNED_INT;if(s===Ki)return a.FLOAT;if(s===ha)return a.HALF_FLOAT;if(s===py)return a.ALPHA;if(s===my)return a.RGB;if(s===Fi)return a.RGBA;if(s===Va)return a.DEPTH_COMPONENT;if(s===is)return a.DEPTH_STENCIL;if(s===gy)return a.RED;if(s===Jp)return a.RED_INTEGER;if(s===so)return a.RG;if(s===$p)return a.RG_INTEGER;if(s===em)return a.RGBA_INTEGER;if(s===Sc||s===Mc||s===Ec||s===bc)if(c===on)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Sc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===bc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Sc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Mc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ec)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===bc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ep||s===tp||s===np||s===ip)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===ep)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===tp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===np)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ip)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ap||s===rp||s===sp||s===op||s===lp||s===up||s===cp)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===ap||s===rp)return c===on?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===sp)return c===on?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===op)return u.COMPRESSED_R11_EAC;if(s===lp)return u.COMPRESSED_SIGNED_R11_EAC;if(s===up)return u.COMPRESSED_RG11_EAC;if(s===cp)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===fp||s===dp||s===hp||s===pp||s===mp||s===gp||s===vp||s===_p||s===xp||s===yp||s===Sp||s===Mp||s===Ep||s===bp)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===fp)return c===on?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===dp)return c===on?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===hp)return c===on?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===pp)return c===on?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===mp)return c===on?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gp)return c===on?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===vp)return c===on?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===_p)return c===on?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xp)return c===on?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===yp)return c===on?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Sp)return c===on?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Mp)return c===on?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ep)return c===on?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===bp)return c===on?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Tp||s===Ap||s===Rp)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===Tp)return c===on?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ap)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Rp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Cp||s===wp||s===Dp||s===Up)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===Cp)return u.COMPRESSED_RED_RGTC1_EXT;if(s===wp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Dp)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Up)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===El?a.UNSIGNED_INT_24_8:a[s]!==void 0?a[s]:null}return{convert:i}}const H2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,G2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class V2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Cy(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new pa({vertexShader:H2,fragmentShader:G2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new zi(new as(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class k2 extends uo{constructor(e,i){super();const s=this;let l=null,u=1,c=null,h="local-floor",m=1,p=null,_=null,v=null,g=null,S=null,T=null;const A=typeof XRWebGLBinding<"u",y=new V2,M={},w=i.getContextAttributes();let U=null,N=null;const H=[],B=[],z=new Tt;let b=null;const D=new ji;D.viewport=new yn;const re=new ji;re.viewport=new yn;const G=[D,re],K=new eA;let ie=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let Se=H[ne];return Se===void 0&&(Se=new ph,H[ne]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(ne){let Se=H[ne];return Se===void 0&&(Se=new ph,H[ne]=Se),Se.getGripSpace()},this.getHand=function(ne){let Se=H[ne];return Se===void 0&&(Se=new ph,H[ne]=Se),Se.getHandSpace()};function Z(ne){const Se=B.indexOf(ne.inputSource);if(Se===-1)return;const Te=H[Se];Te!==void 0&&(Te.update(ne.inputSource,ne.frame,p||c),Te.dispatchEvent({type:ne.type,data:ne.inputSource}))}function O(){l.removeEventListener("select",Z),l.removeEventListener("selectstart",Z),l.removeEventListener("selectend",Z),l.removeEventListener("squeeze",Z),l.removeEventListener("squeezestart",Z),l.removeEventListener("squeezeend",Z),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",I);for(let ne=0;ne<H.length;ne++){const Se=B[ne];Se!==null&&(B[ne]=null,H[ne].disconnect(Se))}ie=null,ee=null,y.reset();for(const ne in M)delete M[ne];e.setRenderTarget(U),S=null,g=null,v=null,l=null,N=null,Ge.stop(),s.isPresenting=!1,e.setPixelRatio(b),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){u=ne,s.isPresenting===!0&&yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){h=ne,s.isPresenting===!0&&yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(ne){p=ne},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ne){if(l=ne,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",Z),l.addEventListener("selectstart",Z),l.addEventListener("selectend",Z),l.addEventListener("squeeze",Z),l.addEventListener("squeezestart",Z),l.addEventListener("squeezeend",Z),l.addEventListener("end",O),l.addEventListener("inputsourceschange",I),w.xrCompatible!==!0&&await i.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(z),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Ze=null,ut=null;w.depth&&(ut=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Te=w.stencil?is:Va,Ze=w.stencil?El:da);const pt={colorFormat:i.RGBA8,depthFormat:ut,scaleFactor:u};v=this.getBinding(),g=v.createProjectionLayer(pt),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),N=new Ji(g.textureWidth,g.textureHeight,{format:Fi,type:Pi,depthTexture:new bl(g.textureWidth,g.textureHeight,Ze,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Te={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(l,i,Te),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new Ji(S.framebufferWidth,S.framebufferHeight,{format:Fi,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,c=await l.requestReferenceSpace(h),Ge.setContext(l),Ge.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function I(ne){for(let Se=0;Se<ne.removed.length;Se++){const Te=ne.removed[Se],Ze=B.indexOf(Te);Ze>=0&&(B[Ze]=null,H[Ze].disconnect(Te))}for(let Se=0;Se<ne.added.length;Se++){const Te=ne.added[Se];let Ze=B.indexOf(Te);if(Ze===-1){for(let pt=0;pt<H.length;pt++)if(pt>=B.length){B.push(Te),Ze=pt;break}else if(B[pt]===null){B[pt]=Te,Ze=pt;break}if(Ze===-1)break}const ut=H[Ze];ut&&ut.connect(Te)}}const oe=new pe,ce=new pe;function be(ne,Se,Te){oe.setFromMatrixPosition(Se.matrixWorld),ce.setFromMatrixPosition(Te.matrixWorld);const Ze=oe.distanceTo(ce),ut=Se.projectionMatrix.elements,pt=Te.projectionMatrix.elements,hn=ut[14]/(ut[10]-1),dt=ut[14]/(ut[10]+1),St=(ut[9]+1)/ut[5],Ft=(ut[9]-1)/ut[5],_t=(ut[8]-1)/ut[0],qt=(pt[8]+1)/pt[0],X=hn*_t,tn=hn*qt,Ut=Ze/(-_t+qt),Gt=Ut*-_t;if(Se.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Gt),ne.translateZ(Ut),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),ut[10]===-1)ne.projectionMatrix.copy(Se.projectionMatrix),ne.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const et=hn+Ut,L=dt+Ut,x=X-Gt,F=tn+(Ze-Gt),J=St*dt/L*et,ge=Ft*dt/L*et;ne.projectionMatrix.makePerspective(x,F,J,ge,et,L),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function P(ne,Se){Se===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(Se.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(l===null)return;let Se=ne.near,Te=ne.far;y.texture!==null&&(y.depthNear>0&&(Se=y.depthNear),y.depthFar>0&&(Te=y.depthFar)),K.near=re.near=D.near=Se,K.far=re.far=D.far=Te,(ie!==K.near||ee!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),ie=K.near,ee=K.far),K.layers.mask=ne.layers.mask|6,D.layers.mask=K.layers.mask&-5,re.layers.mask=K.layers.mask&-3;const Ze=ne.parent,ut=K.cameras;P(K,Ze);for(let pt=0;pt<ut.length;pt++)P(ut[pt],Ze);ut.length===2?be(K,D,re):K.projectionMatrix.copy(D.projectionMatrix),Y(ne,K,Ze)};function Y(ne,Se,Te){Te===null?ne.matrix.copy(Se.matrixWorld):(ne.matrix.copy(Te.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(Se.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(Se.projectionMatrix),ne.projectionMatrixInverse.copy(Se.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Lp*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(g===null&&S===null))return m},this.setFoveation=function(ne){m=ne,g!==null&&(g.fixedFoveation=ne),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ne)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(K)},this.getCameraTexture=function(ne){return M[ne]};let xe=null;function Re(ne,Se){if(_=Se.getViewerPose(p||c),T=Se,_!==null){const Te=_.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let Ze=!1;Te.length!==K.cameras.length&&(K.cameras.length=0,Ze=!0);for(let dt=0;dt<Te.length;dt++){const St=Te[dt];let Ft=null;if(S!==null)Ft=S.getViewport(St);else{const qt=v.getViewSubImage(g,St);Ft=qt.viewport,dt===0&&(e.setRenderTargetTextures(N,qt.colorTexture,qt.depthStencilTexture),e.setRenderTarget(N))}let _t=G[dt];_t===void 0&&(_t=new ji,_t.layers.enable(dt),_t.viewport=new yn,G[dt]=_t),_t.matrix.fromArray(St.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(St.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),dt===0&&(K.matrix.copy(_t.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ze===!0&&K.cameras.push(_t)}const ut=l.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){v=s.getBinding();const dt=v.getDepthInformation(Te[0]);dt&&dt.isValid&&dt.texture&&y.init(dt,l.renderState)}if(ut&&ut.includes("camera-access")&&A){e.state.unbindTexture(),v=s.getBinding();for(let dt=0;dt<Te.length;dt++){const St=Te[dt].camera;if(St){let Ft=M[St];Ft||(Ft=new Cy,M[St]=Ft);const _t=v.getCameraImage(St);Ft.sourceTexture=_t}}}}for(let Te=0;Te<H.length;Te++){const Ze=B[Te],ut=H[Te];Ze!==null&&ut!==void 0&&ut.update(Ze,Se,p||c)}xe&&xe(ne,Se),Se.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Se}),T=null}const Ge=new Uy;Ge.setAnimationLoop(Re),this.setAnimationLoop=function(ne){xe=ne},this.dispose=function(){}}}const Qr=new ka,X2=new Tn;function W2(a,e){function i(y,M){y.matrixAutoUpdate===!0&&y.updateMatrix(),M.value.copy(y.matrix)}function s(y,M){M.color.getRGB(y.fogColor.value,wy(a)),M.isFog?(y.fogNear.value=M.near,y.fogFar.value=M.far):M.isFogExp2&&(y.fogDensity.value=M.density)}function l(y,M,w,U,N){M.isMeshBasicMaterial?u(y,M):M.isMeshLambertMaterial?(u(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(u(y,M),v(y,M)):M.isMeshPhongMaterial?(u(y,M),_(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(u(y,M),g(y,M),M.isMeshPhysicalMaterial&&S(y,M,N)):M.isMeshMatcapMaterial?(u(y,M),T(y,M)):M.isMeshDepthMaterial?u(y,M):M.isMeshDistanceMaterial?(u(y,M),A(y,M)):M.isMeshNormalMaterial?u(y,M):M.isLineBasicMaterial?(c(y,M),M.isLineDashedMaterial&&h(y,M)):M.isPointsMaterial?m(y,M,w,U):M.isSpriteMaterial?p(y,M):M.isShadowMaterial?(y.color.value.copy(M.color),y.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function u(y,M){y.opacity.value=M.opacity,M.color&&y.diffuse.value.copy(M.color),M.emissive&&y.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.bumpMap&&(y.bumpMap.value=M.bumpMap,i(M.bumpMap,y.bumpMapTransform),y.bumpScale.value=M.bumpScale,M.side===ui&&(y.bumpScale.value*=-1)),M.normalMap&&(y.normalMap.value=M.normalMap,i(M.normalMap,y.normalMapTransform),y.normalScale.value.copy(M.normalScale),M.side===ui&&y.normalScale.value.negate()),M.displacementMap&&(y.displacementMap.value=M.displacementMap,i(M.displacementMap,y.displacementMapTransform),y.displacementScale.value=M.displacementScale,y.displacementBias.value=M.displacementBias),M.emissiveMap&&(y.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,y.emissiveMapTransform)),M.specularMap&&(y.specularMap.value=M.specularMap,i(M.specularMap,y.specularMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest);const w=e.get(M),U=w.envMap,N=w.envMapRotation;U&&(y.envMap.value=U,Qr.copy(N),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),y.envMapRotation.value.setFromMatrix4(X2.makeRotationFromEuler(Qr)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=M.reflectivity,y.ior.value=M.ior,y.refractionRatio.value=M.refractionRatio),M.lightMap&&(y.lightMap.value=M.lightMap,y.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,y.lightMapTransform)),M.aoMap&&(y.aoMap.value=M.aoMap,y.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,y.aoMapTransform))}function c(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform))}function h(y,M){y.dashSize.value=M.dashSize,y.totalSize.value=M.dashSize+M.gapSize,y.scale.value=M.scale}function m(y,M,w,U){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.size.value=M.size*w,y.scale.value=U*.5,M.map&&(y.map.value=M.map,i(M.map,y.uvTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function p(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.rotation.value=M.rotation,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function _(y,M){y.specular.value.copy(M.specular),y.shininess.value=Math.max(M.shininess,1e-4)}function v(y,M){M.gradientMap&&(y.gradientMap.value=M.gradientMap)}function g(y,M){y.metalness.value=M.metalness,M.metalnessMap&&(y.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,y.metalnessMapTransform)),y.roughness.value=M.roughness,M.roughnessMap&&(y.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,y.roughnessMapTransform)),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)}function S(y,M,w){y.ior.value=M.ior,M.sheen>0&&(y.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),y.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(y.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,y.sheenColorMapTransform)),M.sheenRoughnessMap&&(y.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,y.sheenRoughnessMapTransform))),M.clearcoat>0&&(y.clearcoat.value=M.clearcoat,y.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(y.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,y.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(y.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===ui&&y.clearcoatNormalScale.value.negate())),M.dispersion>0&&(y.dispersion.value=M.dispersion),M.iridescence>0&&(y.iridescence.value=M.iridescence,y.iridescenceIOR.value=M.iridescenceIOR,y.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(y.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,y.iridescenceMapTransform)),M.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),M.transmission>0&&(y.transmission.value=M.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),M.transmissionMap&&(y.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,y.transmissionMapTransform)),y.thickness.value=M.thickness,M.thicknessMap&&(y.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=M.attenuationDistance,y.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(y.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(y.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=M.specularIntensity,y.specularColor.value.copy(M.specularColor),M.specularColorMap&&(y.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,y.specularColorMapTransform)),M.specularIntensityMap&&(y.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,M){M.matcap&&(y.matcap.value=M.matcap)}function A(y,M){const w=e.get(M).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function q2(a,e,i,s){let l={},u={},c=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,U){const N=U.program;s.uniformBlockBinding(w,N)}function p(w,U){let N=l[w.id];N===void 0&&(T(w),N=_(w),l[w.id]=N,w.addEventListener("dispose",y));const H=U.program;s.updateUBOMapping(w,H);const B=e.render.frame;u[w.id]!==B&&(g(w),u[w.id]=B)}function _(w){const U=v();w.__bindingPointIndex=U;const N=a.createBuffer(),H=w.__size,B=w.usage;return a.bindBuffer(a.UNIFORM_BUFFER,N),a.bufferData(a.UNIFORM_BUFFER,H,B),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,U,N),N}function v(){for(let w=0;w<h;w++)if(c.indexOf(w)===-1)return c.push(w),w;return Qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const U=l[w.id],N=w.uniforms,H=w.__cache;a.bindBuffer(a.UNIFORM_BUFFER,U);for(let B=0,z=N.length;B<z;B++){const b=Array.isArray(N[B])?N[B]:[N[B]];for(let D=0,re=b.length;D<re;D++){const G=b[D];if(S(G,B,D,H)===!0){const K=G.__offset,ie=Array.isArray(G.value)?G.value:[G.value];let ee=0;for(let Z=0;Z<ie.length;Z++){const O=ie[Z],I=A(O);typeof O=="number"||typeof O=="boolean"?(G.__data[0]=O,a.bufferSubData(a.UNIFORM_BUFFER,K+ee,G.__data)):O.isMatrix3?(G.__data[0]=O.elements[0],G.__data[1]=O.elements[1],G.__data[2]=O.elements[2],G.__data[3]=0,G.__data[4]=O.elements[3],G.__data[5]=O.elements[4],G.__data[6]=O.elements[5],G.__data[7]=0,G.__data[8]=O.elements[6],G.__data[9]=O.elements[7],G.__data[10]=O.elements[8],G.__data[11]=0):(O.toArray(G.__data,ee),ee+=I.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,K,G.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function S(w,U,N,H){const B=w.value,z=U+"_"+N;if(H[z]===void 0)return typeof B=="number"||typeof B=="boolean"?H[z]=B:H[z]=B.clone(),!0;{const b=H[z];if(typeof B=="number"||typeof B=="boolean"){if(b!==B)return H[z]=B,!0}else if(b.equals(B)===!1)return b.copy(B),!0}return!1}function T(w){const U=w.uniforms;let N=0;const H=16;for(let z=0,b=U.length;z<b;z++){const D=Array.isArray(U[z])?U[z]:[U[z]];for(let re=0,G=D.length;re<G;re++){const K=D[re],ie=Array.isArray(K.value)?K.value:[K.value];for(let ee=0,Z=ie.length;ee<Z;ee++){const O=ie[ee],I=A(O),oe=N%H,ce=oe%I.boundary,be=oe+ce;N+=ce,be!==0&&H-be<I.storage&&(N+=H-be),K.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=N,N+=I.storage}}}const B=N%H;return B>0&&(N+=H-B),w.__size=N,w.__cache={},this}function A(w){const U={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(U.boundary=4,U.storage=4):w.isVector2?(U.boundary=8,U.storage=8):w.isVector3||w.isColor?(U.boundary=16,U.storage=12):w.isVector4?(U.boundary=16,U.storage=16):w.isMatrix3?(U.boundary=48,U.storage=48):w.isMatrix4?(U.boundary=64,U.storage=64):w.isTexture?yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):yt("WebGLRenderer: Unsupported uniform value type.",w),U}function y(w){const U=w.target;U.removeEventListener("dispose",y);const N=c.indexOf(U.__bindingPointIndex);c.splice(N,1),a.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function M(){for(const w in l)a.deleteBuffer(l[w]);c=[],l={},u={}}return{bind:m,update:p,dispose:M}}const Y2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let oa=null;function j2(){return oa===null&&(oa=new Ty(Y2,16,16,so,ha),oa.name="DFG_LUT",oa.minFilter=On,oa.magFilter=On,oa.wrapS=Ei,oa.wrapT=Ei,oa.generateMipmaps=!1,oa.needsUpdate=!0),oa}class Z2{constructor(e={}){const{canvas:i=_1(),context:s=null,depth:l=!0,stencil:u=!1,alpha:c=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=Pi}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=c;const A=S,y=new Set([em,$p,Jp]),M=new Set([Pi,da,Ml,El,Kp,Qp]),w=new Uint32Array(4),U=new Int32Array(4);let N=null,H=null;const B=[],z=[];let b=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ca,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let re=!1;this._outputColorSpace=Oi;let G=0,K=0,ie=null,ee=-1,Z=null;const O=new yn,I=new yn;let oe=null;const ce=new $t(0);let be=0,P=i.width,Y=i.height,xe=1,Re=null,Ge=null;const ne=new yn(0,0,P,Y),Se=new yn(0,0,P,Y);let Te=!1;const Ze=new Ay;let ut=!1,pt=!1;const hn=new Tn,dt=new pe,St=new yn,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function qt(){return ie===null?xe:1}let X=s;function tn(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${jp}`),i.addEventListener("webglcontextlost",Qe,!1),i.addEventListener("webglcontextrestored",vt,!1),i.addEventListener("webglcontextcreationerror",jt,!1),X===null){const W="webgl2";if(X=tn(W,R),X===null)throw tn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Qt("WebGLRenderer: "+R.message),R}let Ut,Gt,et,L,x,F,J,ge,fe,Pe,Ue,tt,ct,we,De,He,Ve,qe,Et,j,Oe,Le,Ye;function Ce(){Ut=new ZC(X),Ut.init(),Oe=new B2(X,Ut),Gt=new GC(X,Ut,e,Oe),et=new z2(X,Ut),Gt.reversedDepthBuffer&&g&&et.buffers.depth.setReversed(!0),L=new JC(X),x=new E2,F=new I2(X,Ut,et,x,Gt,Oe,L),J=new jC(D),ge=new iA(X),Le=new BC(X,ge),fe=new KC(X,ge,L,Le),Pe=new ew(X,fe,ge,Le,L),qe=new $C(X,Gt,F),De=new VC(x),Ue=new M2(D,J,Ut,Gt,Le,De),tt=new W2(D,x),ct=new T2,we=new U2(Ut),Ve=new IC(D,J,et,Pe,T,m),He=new F2(D,Pe,Gt),Ye=new q2(X,L,Gt,et),Et=new HC(X,Ut,L),j=new QC(X,Ut,L),L.programs=Ue.programs,D.capabilities=Gt,D.extensions=Ut,D.properties=x,D.renderLists=ct,D.shadowMap=He,D.state=et,D.info=L}Ce(),A!==Pi&&(b=new nw(A,i.width,i.height,l,u));const _e=new k2(D,X);this.xr=_e,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const R=Ut.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ut.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(R){R!==void 0&&(xe=R,this.setSize(P,Y,!1))},this.getSize=function(R){return R.set(P,Y)},this.setSize=function(R,W,me=!0){if(_e.isPresenting){yt("WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,Y=W,i.width=Math.floor(R*xe),i.height=Math.floor(W*xe),me===!0&&(i.style.width=R+"px",i.style.height=W+"px"),b!==null&&b.setSize(i.width,i.height),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(P*xe,Y*xe).floor()},this.setDrawingBufferSize=function(R,W,me){P=R,Y=W,xe=me,i.width=Math.floor(R*me),i.height=Math.floor(W*me),this.setViewport(0,0,R,W)},this.setEffects=function(R){if(A===Pi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let W=0;W<R.length;W++)if(R[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(ne)},this.setViewport=function(R,W,me,ae){R.isVector4?ne.set(R.x,R.y,R.z,R.w):ne.set(R,W,me,ae),et.viewport(O.copy(ne).multiplyScalar(xe).round())},this.getScissor=function(R){return R.copy(Se)},this.setScissor=function(R,W,me,ae){R.isVector4?Se.set(R.x,R.y,R.z,R.w):Se.set(R,W,me,ae),et.scissor(I.copy(Se).multiplyScalar(xe).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(R){et.setScissorTest(Te=R)},this.setOpaqueSort=function(R){Re=R},this.setTransparentSort=function(R){Ge=R},this.getClearColor=function(R){return R.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,me=!0){let ae=0;if(R){let te=!1;if(ie!==null){const ze=ie.texture.format;te=y.has(ze)}if(te){const ze=ie.texture.type,We=M.has(ze),Ie=Ve.getClearColor(),$e=Ve.getClearAlpha(),it=Ie.r,Be=Ie.g,rt=Ie.b;We?(w[0]=it,w[1]=Be,w[2]=rt,w[3]=$e,X.clearBufferuiv(X.COLOR,0,w)):(U[0]=it,U[1]=Be,U[2]=rt,U[3]=$e,X.clearBufferiv(X.COLOR,0,U))}else ae|=X.COLOR_BUFFER_BIT}W&&(ae|=X.DEPTH_BUFFER_BIT),me&&(ae|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&X.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Qe,!1),i.removeEventListener("webglcontextrestored",vt,!1),i.removeEventListener("webglcontextcreationerror",jt,!1),Ve.dispose(),ct.dispose(),we.dispose(),x.dispose(),J.dispose(),Pe.dispose(),Le.dispose(),Ye.dispose(),Ue.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Q),_e.removeEventListener("sessionend",he),Ae.stop()};function Qe(R){R.preventDefault(),w_("WebGLRenderer: Context Lost."),re=!0}function vt(){w_("WebGLRenderer: Context Restored."),re=!1;const R=L.autoReset,W=He.enabled,me=He.autoUpdate,ae=He.needsUpdate,te=He.type;Ce(),L.autoReset=R,He.enabled=W,He.autoUpdate=me,He.needsUpdate=ae,He.type=te}function jt(R){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Lt(R){const W=R.target;W.removeEventListener("dispose",Lt),An(W)}function An(R){ti(R),x.remove(R)}function ti(R){const W=x.get(R).programs;W!==void 0&&(W.forEach(function(me){Ue.releaseProgram(me)}),R.isShaderMaterial&&Ue.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,me,ae,te,ze){W===null&&(W=Ft);const We=te.isMesh&&te.matrixWorld.determinant()<0,Ie=Wt(R,W,me,ae,te);et.setMaterial(ae,We);let $e=me.index,it=1;if(ae.wireframe===!0){if($e=fe.getWireframeAttribute(me),$e===void 0)return;it=2}const Be=me.drawRange,rt=me.attributes.position;let je=Be.start*it,gt=(Be.start+Be.count)*it;ze!==null&&(je=Math.max(je,ze.start*it),gt=Math.min(gt,(ze.start+ze.count)*it)),$e!==null?(je=Math.max(je,0),gt=Math.min(gt,$e.count)):rt!=null&&(je=Math.max(je,0),gt=Math.min(gt,rt.count));const xt=gt-je;if(xt<0||xt===1/0)return;Le.setup(te,ae,Ie,me,$e);let an,Vt=Et;if($e!==null&&(an=ge.get($e),Vt=j,Vt.setIndex(an)),te.isMesh)ae.wireframe===!0?(et.setLineWidth(ae.wireframeLinewidth*qt()),Vt.setMode(X.LINES)):Vt.setMode(X.TRIANGLES);else if(te.isLine){let Sn=ae.linewidth;Sn===void 0&&(Sn=1),et.setLineWidth(Sn*qt()),te.isLineSegments?Vt.setMode(X.LINES):te.isLineLoop?Vt.setMode(X.LINE_LOOP):Vt.setMode(X.LINE_STRIP)}else te.isPoints?Vt.setMode(X.POINTS):te.isSprite&&Vt.setMode(X.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)Dc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Vt.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(Ut.get("WEBGL_multi_draw"))Vt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const Sn=te._multiDrawStarts,at=te._multiDrawCounts,Zn=te._multiDrawCount,Mt=$e?ge.get($e).bytesPerElement:1,Kn=x.get(ae).currentProgram.getUniforms();for(let fi=0;fi<Zn;fi++)Kn.setValue(X,"_gl_DrawID",fi),Vt.render(Sn[fi]/Mt,at[fi])}else if(te.isInstancedMesh)Vt.renderInstances(je,xt,te.count);else if(me.isInstancedBufferGeometry){const Sn=me._maxInstanceCount!==void 0?me._maxInstanceCount:1/0,at=Math.min(me.instanceCount,Sn);Vt.renderInstances(je,xt,at)}else Vt.render(je,xt)};function wr(R,W,me){R.transparent===!0&&R.side===Ba&&R.forceSinglePass===!1?(R.side=ui,R.needsUpdate=!0,ot(R,W,me),R.side=Cr,R.needsUpdate=!0,ot(R,W,me),R.side=Ba):ot(R,W,me)}this.compile=function(R,W,me=null){me===null&&(me=R),H=we.get(me),H.init(W),z.push(H),me.traverseVisible(function(te){te.isLight&&te.layers.test(W.layers)&&(H.pushLight(te),te.castShadow&&H.pushShadow(te))}),R!==me&&R.traverseVisible(function(te){te.isLight&&te.layers.test(W.layers)&&(H.pushLight(te),te.castShadow&&H.pushShadow(te))}),H.setupLights();const ae=new Set;return R.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const ze=te.material;if(ze)if(Array.isArray(ze))for(let We=0;We<ze.length;We++){const Ie=ze[We];wr(Ie,me,te),ae.add(Ie)}else wr(ze,me,te),ae.add(ze)}),H=z.pop(),ae},this.compileAsync=function(R,W,me=null){const ae=this.compile(R,W,me);return new Promise(te=>{function ze(){if(ae.forEach(function(We){x.get(We).currentProgram.isReady()&&ae.delete(We)}),ae.size===0){te(R);return}setTimeout(ze,10)}Ut.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let Ya=null;function V(R){Ya&&Ya(R)}function Q(){Ae.stop()}function he(){Ae.start()}const Ae=new Uy;Ae.setAnimationLoop(V),typeof self<"u"&&Ae.setContext(self),this.setAnimationLoop=function(R){Ya=R,_e.setAnimationLoop(R),R===null?Ae.stop():Ae.start()},_e.addEventListener("sessionstart",Q),_e.addEventListener("sessionend",he),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(re===!0)return;const me=_e.enabled===!0&&_e.isPresenting===!0,ae=b!==null&&(ie===null||me)&&b.begin(D,ie);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(W),W=_e.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,W,ie),H=we.get(R,z.length),H.init(W),z.push(H),hn.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Ze.setFromProjectionMatrix(hn,ua,W.reversedDepth),pt=this.localClippingEnabled,ut=De.init(this.clippingPlanes,pt),N=ct.get(R,B.length),N.init(),B.push(N),_e.enabled===!0&&_e.isPresenting===!0){const We=D.xr.getDepthSensingMesh();We!==null&&Ne(We,W,-1/0,D.sortObjects)}Ne(R,W,0,D.sortObjects),N.finish(),D.sortObjects===!0&&N.sort(Re,Ge),_t=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,_t&&Ve.addToRenderList(N,R),this.info.render.frame++,ut===!0&&De.beginShadows();const te=H.state.shadowsArray;if(He.render(te,R,W),ut===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ae&&b.hasRenderPass())===!1){const We=N.opaque,Ie=N.transmissive;if(H.setupLights(),W.isArrayCamera){const $e=W.cameras;if(Ie.length>0)for(let it=0,Be=$e.length;it<Be;it++){const rt=$e[it];Fe(We,Ie,R,rt)}_t&&Ve.render(R);for(let it=0,Be=$e.length;it<Be;it++){const rt=$e[it];Je(N,R,rt,rt.viewport)}}else Ie.length>0&&Fe(We,Ie,R,W),_t&&Ve.render(R),Je(N,R,W)}ie!==null&&K===0&&(F.updateMultisampleRenderTarget(ie),F.updateRenderTargetMipmap(ie)),ae&&b.end(D),R.isScene===!0&&R.onAfterRender(D,R,W),Le.resetDefaultState(),ee=-1,Z=null,z.pop(),z.length>0?(H=z[z.length-1],ut===!0&&De.setGlobalState(D.clippingPlanes,H.state.camera)):H=null,B.pop(),B.length>0?N=B[B.length-1]:N=null};function Ne(R,W,me,ae){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)me=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)H.pushLight(R),R.castShadow&&H.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ze.intersectsSprite(R)){ae&&St.setFromMatrixPosition(R.matrixWorld).applyMatrix4(hn);const We=Pe.update(R),Ie=R.material;Ie.visible&&N.push(R,We,Ie,me,St.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ze.intersectsObject(R))){const We=Pe.update(R),Ie=R.material;if(ae&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),St.copy(R.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),St.copy(We.boundingSphere.center)),St.applyMatrix4(R.matrixWorld).applyMatrix4(hn)),Array.isArray(Ie)){const $e=We.groups;for(let it=0,Be=$e.length;it<Be;it++){const rt=$e[it],je=Ie[rt.materialIndex];je&&je.visible&&N.push(R,We,je,me,St.z,rt)}}else Ie.visible&&N.push(R,We,Ie,me,St.z,null)}}const ze=R.children;for(let We=0,Ie=ze.length;We<Ie;We++)Ne(ze[We],W,me,ae)}function Je(R,W,me,ae){const{opaque:te,transmissive:ze,transparent:We}=R;H.setupLightsView(me),ut===!0&&De.setGlobalState(D.clippingPlanes,me),ae&&et.viewport(O.copy(ae)),te.length>0&&Xe(te,W,me),ze.length>0&&Xe(ze,W,me),We.length>0&&Xe(We,W,me),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function Fe(R,W,me,ae){if((me.isScene===!0?me.overrideMaterial:null)!==null)return;if(H.state.transmissionRenderTarget[ae.id]===void 0){const je=Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float");H.state.transmissionRenderTarget[ae.id]=new Ji(1,1,{generateMipmaps:!0,type:je?ha:Pi,minFilter:ns,samples:Gt.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace})}const ze=H.state.transmissionRenderTarget[ae.id],We=ae.viewport||O;ze.setSize(We.z*D.transmissionResolutionScale,We.w*D.transmissionResolutionScale);const Ie=D.getRenderTarget(),$e=D.getActiveCubeFace(),it=D.getActiveMipmapLevel();D.setRenderTarget(ze),D.getClearColor(ce),be=D.getClearAlpha(),be<1&&D.setClearColor(16777215,.5),D.clear(),_t&&Ve.render(me);const Be=D.toneMapping;D.toneMapping=ca;const rt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),H.setupLightsView(ae),ut===!0&&De.setGlobalState(D.clippingPlanes,ae),Xe(R,me,ae),F.updateMultisampleRenderTarget(ze),F.updateRenderTargetMipmap(ze),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let gt=0,xt=W.length;gt<xt;gt++){const an=W[gt],{object:Vt,geometry:Sn,material:at,group:Zn}=an;if(at.side===Ba&&Vt.layers.test(ae.layers)){const Mt=at.side;at.side=ui,at.needsUpdate=!0,Ke(Vt,me,ae,Sn,at,Zn),at.side=Mt,at.needsUpdate=!0,je=!0}}je===!0&&(F.updateMultisampleRenderTarget(ze),F.updateRenderTargetMipmap(ze))}D.setRenderTarget(Ie,$e,it),D.setClearColor(ce,be),rt!==void 0&&(ae.viewport=rt),D.toneMapping=Be}function Xe(R,W,me){const ae=W.isScene===!0?W.overrideMaterial:null;for(let te=0,ze=R.length;te<ze;te++){const We=R[te],{object:Ie,geometry:$e,group:it}=We;let Be=We.material;Be.allowOverride===!0&&ae!==null&&(Be=ae),Ie.layers.test(me.layers)&&Ke(Ie,W,me,$e,Be,it)}}function Ke(R,W,me,ae,te,ze){R.onBeforeRender(D,W,me,ae,te,ze),R.modelViewMatrix.multiplyMatrices(me.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),te.onBeforeRender(D,W,me,ae,R,ze),te.transparent===!0&&te.side===Ba&&te.forceSinglePass===!1?(te.side=ui,te.needsUpdate=!0,D.renderBufferDirect(me,W,ae,te,R,ze),te.side=Cr,te.needsUpdate=!0,D.renderBufferDirect(me,W,ae,te,R,ze),te.side=Ba):D.renderBufferDirect(me,W,ae,te,R,ze),R.onAfterRender(D,W,me,ae,te,ze)}function ot(R,W,me){W.isScene!==!0&&(W=Ft);const ae=x.get(R),te=H.state.lights,ze=H.state.shadowsArray,We=te.state.version,Ie=Ue.getParameters(R,te.state,ze,W,me),$e=Ue.getProgramCacheKey(Ie);let it=ae.programs;ae.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?W.environment:null,ae.fog=W.fog;const Be=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ae.envMap=J.get(R.envMap||ae.environment,Be),ae.envMapRotation=ae.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,it===void 0&&(R.addEventListener("dispose",Lt),it=new Map,ae.programs=it);let rt=it.get($e);if(rt!==void 0){if(ae.currentProgram===rt&&ae.lightsStateVersion===We)return lt(R,Ie),rt}else Ie.uniforms=Ue.getUniforms(R),R.onBeforeCompile(Ie,D),rt=Ue.acquireProgram(Ie,$e),it.set($e,rt),ae.uniforms=Ie.uniforms;const je=ae.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(je.clippingPlanes=De.uniform),lt(R,Ie),ae.needsLights=nn(R),ae.lightsStateVersion=We,ae.needsLights&&(je.ambientLightColor.value=te.state.ambient,je.lightProbe.value=te.state.probe,je.directionalLights.value=te.state.directional,je.directionalLightShadows.value=te.state.directionalShadow,je.spotLights.value=te.state.spot,je.spotLightShadows.value=te.state.spotShadow,je.rectAreaLights.value=te.state.rectArea,je.ltc_1.value=te.state.rectAreaLTC1,je.ltc_2.value=te.state.rectAreaLTC2,je.pointLights.value=te.state.point,je.pointLightShadows.value=te.state.pointShadow,je.hemisphereLights.value=te.state.hemi,je.directionalShadowMatrix.value=te.state.directionalShadowMatrix,je.spotLightMatrix.value=te.state.spotLightMatrix,je.spotLightMap.value=te.state.spotLightMap,je.pointShadowMatrix.value=te.state.pointShadowMatrix),ae.currentProgram=rt,ae.uniformsList=null,rt}function ft(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Tc.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function lt(R,W){const me=x.get(R);me.outputColorSpace=W.outputColorSpace,me.batching=W.batching,me.batchingColor=W.batchingColor,me.instancing=W.instancing,me.instancingColor=W.instancingColor,me.instancingMorph=W.instancingMorph,me.skinning=W.skinning,me.morphTargets=W.morphTargets,me.morphNormals=W.morphNormals,me.morphColors=W.morphColors,me.morphTargetsCount=W.morphTargetsCount,me.numClippingPlanes=W.numClippingPlanes,me.numIntersection=W.numClipIntersection,me.vertexAlphas=W.vertexAlphas,me.vertexTangents=W.vertexTangents,me.toneMapping=W.toneMapping}function Wt(R,W,me,ae,te){W.isScene!==!0&&(W=Ft),F.resetTextureUnits();const ze=W.fog,We=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?W.environment:null,Ie=ie===null?D.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:oo,$e=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,it=J.get(ae.envMap||We,$e),Be=ae.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,rt=!!me.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),je=!!me.morphAttributes.position,gt=!!me.morphAttributes.normal,xt=!!me.morphAttributes.color;let an=ca;ae.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(an=D.toneMapping);const Vt=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,Sn=Vt!==void 0?Vt.length:0,at=x.get(ae),Zn=H.state.lights;if(ut===!0&&(pt===!0||R!==Z)){const Cn=R===Z&&ae.id===ee;De.setState(ae,R,Cn)}let Mt=!1;ae.version===at.__version?(at.needsLights&&at.lightsStateVersion!==Zn.state.version||at.outputColorSpace!==Ie||te.isBatchedMesh&&at.batching===!1||!te.isBatchedMesh&&at.batching===!0||te.isBatchedMesh&&at.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&at.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&at.instancing===!1||!te.isInstancedMesh&&at.instancing===!0||te.isSkinnedMesh&&at.skinning===!1||!te.isSkinnedMesh&&at.skinning===!0||te.isInstancedMesh&&at.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&at.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&at.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&at.instancingMorph===!1&&te.morphTexture!==null||at.envMap!==it||ae.fog===!0&&at.fog!==ze||at.numClippingPlanes!==void 0&&(at.numClippingPlanes!==De.numPlanes||at.numIntersection!==De.numIntersection)||at.vertexAlphas!==Be||at.vertexTangents!==rt||at.morphTargets!==je||at.morphNormals!==gt||at.morphColors!==xt||at.toneMapping!==an||at.morphTargetsCount!==Sn)&&(Mt=!0):(Mt=!0,at.__version=ae.version);let Kn=at.currentProgram;Mt===!0&&(Kn=ot(ae,W,te));let fi=!1,Hi=!1,di=!1;const en=Kn.getUniforms(),Rn=at.uniforms;if(et.useProgram(Kn.program)&&(fi=!0,Hi=!0,di=!0),ae.id!==ee&&(ee=ae.id,Hi=!0),fi||Z!==R){et.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),en.setValue(X,"projectionMatrix",R.projectionMatrix),en.setValue(X,"viewMatrix",R.matrixWorldInverse);const Gi=en.map.cameraPosition;Gi!==void 0&&Gi.setValue(X,dt.setFromMatrixPosition(R.matrixWorld)),Gt.logarithmicDepthBuffer&&en.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&en.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),Z!==R&&(Z=R,Hi=!0,di=!0)}if(at.needsLights&&(Zn.state.directionalShadowMap.length>0&&en.setValue(X,"directionalShadowMap",Zn.state.directionalShadowMap,F),Zn.state.spotShadowMap.length>0&&en.setValue(X,"spotShadowMap",Zn.state.spotShadowMap,F),Zn.state.pointShadowMap.length>0&&en.setValue(X,"pointShadowMap",Zn.state.pointShadowMap,F)),te.isSkinnedMesh){en.setOptional(X,te,"bindMatrix"),en.setOptional(X,te,"bindMatrixInverse");const Cn=te.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),en.setValue(X,"boneTexture",Cn.boneTexture,F))}te.isBatchedMesh&&(en.setOptional(X,te,"batchingTexture"),en.setValue(X,"batchingTexture",te._matricesTexture,F),en.setOptional(X,te,"batchingIdTexture"),en.setValue(X,"batchingIdTexture",te._indirectTexture,F),en.setOptional(X,te,"batchingColorTexture"),te._colorsTexture!==null&&en.setValue(X,"batchingColorTexture",te._colorsTexture,F));const Qn=me.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&qe.update(te,me,Kn),(Hi||at.receiveShadow!==te.receiveShadow)&&(at.receiveShadow=te.receiveShadow,en.setValue(X,"receiveShadow",te.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&W.environment!==null&&(Rn.envMapIntensity.value=W.environmentIntensity),Rn.dfgLUT!==void 0&&(Rn.dfgLUT.value=j2()),Hi&&(en.setValue(X,"toneMappingExposure",D.toneMappingExposure),at.needsLights&&wt(Rn,di),ze&&ae.fog===!0&&tt.refreshFogUniforms(Rn,ze),tt.refreshMaterialUniforms(Rn,ae,xe,Y,H.state.transmissionRenderTarget[R.id]),Tc.upload(X,ft(at),Rn,F)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Tc.upload(X,ft(at),Rn,F),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&en.setValue(X,"center",te.center),en.setValue(X,"modelViewMatrix",te.modelViewMatrix),en.setValue(X,"normalMatrix",te.normalMatrix),en.setValue(X,"modelMatrix",te.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const Cn=ae.uniformsGroups;for(let Gi=0,ma=Cn.length;Gi<ma;Gi++){const os=Cn[Gi];Ye.update(os,Kn),Ye.bind(os,Kn)}}return Kn}function wt(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function nn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(R,W,me){const ae=x.get(R);ae.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),x.get(R.texture).__webglTexture=W,x.get(R.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:me,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const me=x.get(R);me.__webglFramebuffer=W,me.__useDefaultFramebuffer=W===void 0};const fn=X.createFramebuffer();this.setRenderTarget=function(R,W=0,me=0){ie=R,G=W,K=me;let ae=null,te=!1,ze=!1;if(R){const Ie=x.get(R);if(Ie.__useDefaultFramebuffer!==void 0){et.bindFramebuffer(X.FRAMEBUFFER,Ie.__webglFramebuffer),O.copy(R.viewport),I.copy(R.scissor),oe=R.scissorTest,et.viewport(O),et.scissor(I),et.setScissorTest(oe),ee=-1;return}else if(Ie.__webglFramebuffer===void 0)F.setupRenderTarget(R);else if(Ie.__hasExternalTextures)F.rebindTextures(R,x.get(R.texture).__webglTexture,x.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Be=R.depthTexture;if(Ie.__boundDepthTexture!==Be){if(Be!==null&&x.has(Be)&&(R.width!==Be.image.width||R.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(R)}}const $e=R.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(ze=!0);const it=x.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(it[W])?ae=it[W][me]:ae=it[W],te=!0):R.samples>0&&F.useMultisampledRTT(R)===!1?ae=x.get(R).__webglMultisampledFramebuffer:Array.isArray(it)?ae=it[me]:ae=it,O.copy(R.viewport),I.copy(R.scissor),oe=R.scissorTest}else O.copy(ne).multiplyScalar(xe).floor(),I.copy(Se).multiplyScalar(xe).floor(),oe=Te;if(me!==0&&(ae=fn),et.bindFramebuffer(X.FRAMEBUFFER,ae)&&et.drawBuffers(R,ae),et.viewport(O),et.scissor(I),et.setScissorTest(oe),te){const Ie=x.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ie.__webglTexture,me)}else if(ze){const Ie=W;for(let $e=0;$e<R.textures.length;$e++){const it=x.get(R.textures[$e]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+$e,it.__webglTexture,me,Ie)}}else if(R!==null&&me!==0){const Ie=x.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ie.__webglTexture,me)}ee=-1},this.readRenderTargetPixels=function(R,W,me,ae,te,ze,We,Ie=0){if(!(R&&R.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=x.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&We!==void 0&&($e=$e[We]),$e){et.bindFramebuffer(X.FRAMEBUFFER,$e);try{const it=R.textures[Ie],Be=it.format,rt=it.type;if(R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ie),!Gt.textureFormatReadable(Be)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(rt)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-ae&&me>=0&&me<=R.height-te&&X.readPixels(W,me,ae,te,Oe.convert(Be),Oe.convert(rt),ze)}finally{const it=ie!==null?x.get(ie).__webglFramebuffer:null;et.bindFramebuffer(X.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(R,W,me,ae,te,ze,We,Ie=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=x.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&We!==void 0&&($e=$e[We]),$e)if(W>=0&&W<=R.width-ae&&me>=0&&me<=R.height-te){et.bindFramebuffer(X.FRAMEBUFFER,$e);const it=R.textures[Ie],Be=it.format,rt=it.type;if(R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ie),!Gt.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,je),X.bufferData(X.PIXEL_PACK_BUFFER,ze.byteLength,X.STREAM_READ),X.readPixels(W,me,ae,te,Oe.convert(Be),Oe.convert(rt),0);const gt=ie!==null?x.get(ie).__webglFramebuffer:null;et.bindFramebuffer(X.FRAMEBUFFER,gt);const xt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await x1(X,xt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,je),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,ze),X.deleteBuffer(je),X.deleteSync(xt),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,me=0){const ae=Math.pow(2,-me),te=Math.floor(R.image.width*ae),ze=Math.floor(R.image.height*ae),We=W!==null?W.x:0,Ie=W!==null?W.y:0;F.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,me,0,0,We,Ie,te,ze),et.unbindTexture()};const gn=X.createFramebuffer(),zt=X.createFramebuffer();this.copyTextureToTexture=function(R,W,me=null,ae=null,te=0,ze=0){let We,Ie,$e,it,Be,rt,je,gt,xt;const an=R.isCompressedTexture?R.mipmaps[ze]:R.image;if(me!==null)We=me.max.x-me.min.x,Ie=me.max.y-me.min.y,$e=me.isBox3?me.max.z-me.min.z:1,it=me.min.x,Be=me.min.y,rt=me.isBox3?me.min.z:0;else{const Rn=Math.pow(2,-te);We=Math.floor(an.width*Rn),Ie=Math.floor(an.height*Rn),R.isDataArrayTexture?$e=an.depth:R.isData3DTexture?$e=Math.floor(an.depth*Rn):$e=1,it=0,Be=0,rt=0}ae!==null?(je=ae.x,gt=ae.y,xt=ae.z):(je=0,gt=0,xt=0);const Vt=Oe.convert(W.format),Sn=Oe.convert(W.type);let at;W.isData3DTexture?(F.setTexture3D(W,0),at=X.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(F.setTexture2DArray(W,0),at=X.TEXTURE_2D_ARRAY):(F.setTexture2D(W,0),at=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,W.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,W.unpackAlignment);const Zn=X.getParameter(X.UNPACK_ROW_LENGTH),Mt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Kn=X.getParameter(X.UNPACK_SKIP_PIXELS),fi=X.getParameter(X.UNPACK_SKIP_ROWS),Hi=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,an.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,an.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,it),X.pixelStorei(X.UNPACK_SKIP_ROWS,Be),X.pixelStorei(X.UNPACK_SKIP_IMAGES,rt);const di=R.isDataArrayTexture||R.isData3DTexture,en=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const Rn=x.get(R),Qn=x.get(W),Cn=x.get(Rn.__renderTarget),Gi=x.get(Qn.__renderTarget);et.bindFramebuffer(X.READ_FRAMEBUFFER,Cn.__webglFramebuffer),et.bindFramebuffer(X.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let ma=0;ma<$e;ma++)di&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,x.get(R).__webglTexture,te,rt+ma),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,x.get(W).__webglTexture,ze,xt+ma)),X.blitFramebuffer(it,Be,We,Ie,je,gt,We,Ie,X.DEPTH_BUFFER_BIT,X.NEAREST);et.bindFramebuffer(X.READ_FRAMEBUFFER,null),et.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(te!==0||R.isRenderTargetTexture||x.has(R)){const Rn=x.get(R),Qn=x.get(W);et.bindFramebuffer(X.READ_FRAMEBUFFER,gn),et.bindFramebuffer(X.DRAW_FRAMEBUFFER,zt);for(let Cn=0;Cn<$e;Cn++)di?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Rn.__webglTexture,te,rt+Cn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Rn.__webglTexture,te),en?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Qn.__webglTexture,ze,xt+Cn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Qn.__webglTexture,ze),te!==0?X.blitFramebuffer(it,Be,We,Ie,je,gt,We,Ie,X.COLOR_BUFFER_BIT,X.NEAREST):en?X.copyTexSubImage3D(at,ze,je,gt,xt+Cn,it,Be,We,Ie):X.copyTexSubImage2D(at,ze,je,gt,it,Be,We,Ie);et.bindFramebuffer(X.READ_FRAMEBUFFER,null),et.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else en?R.isDataTexture||R.isData3DTexture?X.texSubImage3D(at,ze,je,gt,xt,We,Ie,$e,Vt,Sn,an.data):W.isCompressedArrayTexture?X.compressedTexSubImage3D(at,ze,je,gt,xt,We,Ie,$e,Vt,an.data):X.texSubImage3D(at,ze,je,gt,xt,We,Ie,$e,Vt,Sn,an):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,ze,je,gt,We,Ie,Vt,Sn,an.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,ze,je,gt,an.width,an.height,Vt,an.data):X.texSubImage2D(X.TEXTURE_2D,ze,je,gt,We,Ie,Vt,Sn,an);X.pixelStorei(X.UNPACK_ROW_LENGTH,Zn),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Mt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Kn),X.pixelStorei(X.UNPACK_SKIP_ROWS,fi),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Hi),ze===0&&W.generateMipmaps&&X.generateMipmap(at),et.unbindTexture()},this.initRenderTarget=function(R){x.get(R).__webglFramebuffer===void 0&&F.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?F.setTextureCube(R,0):R.isData3DTexture?F.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?F.setTexture2DArray(R,0):F.setTexture2D(R,0),et.unbindTexture()},this.resetState=function(){G=0,K=0,ie=null,et.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ua}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Yt._getUnpackColorSpace()}}function zy({mouseForce:a=20,cursorSize:e=100,isViscous:i=!1,viscous:s=30,iterationsViscous:l=32,iterationsPoisson:u=32,dt:c=.014,BFECC:h=!0,resolution:m=.5,isBounce:p=!1,colors:_=["#5227FF","#FF9FFC","#B19EEF"],style:v={},className:g="",autoDemo:S=!0,autoSpeed:T=.5,autoIntensity:A=2.2,takeoverDuration:y=.25,autoResumeDelay:M=1e3,autoRampDuration:w=.6}){const U=se.useRef(null),N=se.useRef(null),H=se.useRef(null),B=se.useRef(null),z=se.useRef(null),b=se.useRef(!0),D=se.useRef(null);return se.useEffect(()=>{if(!U.current)return;function re(L){let x;Array.isArray(L)&&L.length>0?L.length===1?x=[L[0],L[0]]:x=L:x=["#ffffff","#ffffff"];const F=x.length,J=new Uint8Array(F*4);for(let fe=0;fe<F;fe++){const Pe=new $t(x[fe]);J[fe*4+0]=Math.round(Pe.r*255),J[fe*4+1]=Math.round(Pe.g*255),J[fe*4+2]=Math.round(Pe.b*255),J[fe*4+3]=255}const ge=new Ty(J,F,1,Fi);return ge.magFilter=On,ge.minFilter=On,ge.wrapS=Ei,ge.wrapT=Ei,ge.generateMipmaps=!1,ge.needsUpdate=!0,ge}const G=re(_),K=new yn(0,0,0,0);class ie{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(x){this.container=x,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new Z2({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new $t(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new tA,this.clock.start()}resize(){if(!this.container)return;const x=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(x.width)),this.height=Math.max(1,Math.floor(x.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const ee=new ie;class Z{constructor(){this.mouseMoved=!1,this.coords=new Tt,this.coords_old=new Tt,this.diff=new Tt,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new Tt,this.takeoverTo=new Tt,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(x){this.container=x,this.docTarget=x.ownerDocument||null;const F=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);F&&(this.listenerTarget=F,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(x,F){if(!this.container)return!1;const J=this.container.getBoundingClientRect();return J.width===0||J.height===0?!1:x>=J.left&&x<=J.right&&F>=J.top&&F<=J.bottom}updateHoverState(x,F){return this.isHoverInside=this.isPointInside(x,F),this.isHoverInside}setCoords(x,F){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const J=this.container.getBoundingClientRect();if(J.width===0||J.height===0)return;const ge=(x-J.left)/J.width,fe=(F-J.top)/J.height;this.coords.set(ge*2-1,-(fe*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(x,F){this.coords.set(x,F),this.mouseMoved=!0}onDocumentMouseMove(x){if(this.updateHoverState(x.clientX,x.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const F=this.container.getBoundingClientRect();if(F.width===0||F.height===0)return;const J=(x.clientX-F.left)/F.width,ge=(x.clientY-F.top)/F.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(J*2-1,-(ge*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(x.clientX,x.clientY),this.hasUserControl=!0}}onDocumentTouchStart(x){if(x.touches.length!==1)return;const F=x.touches[0];this.updateHoverState(F.clientX,F.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(F.clientX,F.clientY),this.hasUserControl=!0)}onDocumentTouchMove(x){if(x.touches.length!==1)return;const F=x.touches[0];this.updateHoverState(F.clientX,F.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(F.clientX,F.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const x=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(x>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const F=x*x*(3-2*x);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,F)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const O=new Z;class I{constructor(x,F,J){this.mouse=x,this.manager=F,this.enabled=J.enabled,this.speed=J.speed,this.resumeDelay=J.resumeDelay||3e3,this.rampDurationMs=(J.rampDuration||0)*1e3,this.active=!1,this.current=new Tt(0,0),this.target=new Tt,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new Tt,this.pickNewTarget()}pickNewTarget(){const x=Math.random;this.target.set((x()*2-1)*(1-this.margin),(x()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const x=performance.now();if(x-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=x,this.activationTime=x),!this.active)return;this.mouse.isAutoActive=!0;let J=(x-this.lastTime)/1e3;this.lastTime=x,J>.2&&(J=.016);const ge=this._tmpDir.subVectors(this.target,this.current),fe=ge.length();if(fe<.01){this.pickNewTarget();return}ge.normalize();let Pe=1;if(this.rampDurationMs>0){const ct=Math.min(1,(x-this.activationTime)/this.rampDurationMs);Pe=ct*ct*(3-2*ct)}const Ue=this.speed*J*Pe,tt=Math.min(Ue,fe);this.current.addScaledVector(ge,tt),this.mouse.setNormalized(this.current.x,this.current.y)}}const oe=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,ce=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,be=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,P=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,Y=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,xe=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,Re=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,Ge=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,ne=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,Se=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class Te{constructor(x){this.props=x||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new H_,this.camera=new Nc,this.uniforms&&(this.material=new gl(this.props.material),this.geometry=new as(2,2),this.plane=new zi(this.geometry,this.material),this.scene.add(this.plane))}update(){ee.renderer.setRenderTarget(this.props.output||null),ee.renderer.render(this.scene,this.camera),ee.renderer.setRenderTarget(null)}}class Ze extends Te{constructor(x){super({material:{vertexShader:oe,fragmentShader:P,uniforms:{boundarySpace:{value:x.cellScale},px:{value:x.cellScale},fboSize:{value:x.fboSize},velocity:{value:x.src.texture},dt:{value:x.dt},isBFECC:{value:!0}}},output:x.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const x=new ta,F=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);x.setAttribute("position",new $i(F,3));const J=new gl({vertexShader:ce,fragmentShader:P,uniforms:this.uniforms});this.line=new W1(x,J),this.scene.add(this.line)}update({dt:x,isBounce:F,BFECC:J}){this.uniforms.dt.value=x,this.line.visible=F,this.uniforms.isBFECC.value=J,super.update()}}class ut extends Te{constructor(x){super({output:x.dst}),this.init(x)}init(x){super.init();const F=new as(1,1),J=new gl({vertexShader:be,fragmentShader:Re,blending:Vh,depthWrite:!1,uniforms:{px:{value:x.cellScale},force:{value:new Tt(0,0)},center:{value:new Tt(0,0)},scale:{value:new Tt(x.cursor_size,x.cursor_size)}}});this.mouse=new zi(F,J),this.scene.add(this.mouse)}update(x){const F=O.diff.x/2*x.mouse_force,J=O.diff.y/2*x.mouse_force,ge=x.cursor_size*x.cellScale.x,fe=x.cursor_size*x.cellScale.y,Pe=Math.min(Math.max(O.coords.x,-1+ge+x.cellScale.x*2),1-ge-x.cellScale.x*2),Ue=Math.min(Math.max(O.coords.y,-1+fe+x.cellScale.y*2),1-fe-x.cellScale.y*2),tt=this.mouse.material.uniforms;tt.force.value.set(F,J),tt.center.value.set(Pe,Ue),tt.scale.value.set(x.cursor_size,x.cursor_size),super.update()}}class pt extends Te{constructor(x){super({material:{vertexShader:oe,fragmentShader:Se,uniforms:{boundarySpace:{value:x.boundarySpace},velocity:{value:x.src.texture},velocity_new:{value:x.dst_.texture},v:{value:x.viscous},px:{value:x.cellScale},dt:{value:x.dt}}},output:x.dst,output0:x.dst_,output1:x.dst}),this.init()}update({viscous:x,iterations:F,dt:J}){let ge,fe;this.uniforms.v.value=x;for(let Pe=0;Pe<F;Pe++)Pe%2===0?(ge=this.props.output0,fe=this.props.output1):(ge=this.props.output1,fe=this.props.output0),this.uniforms.velocity_new.value=ge.texture,this.props.output=fe,this.uniforms.dt.value=J,super.update();return fe}}class hn extends Te{constructor(x){super({material:{vertexShader:oe,fragmentShader:xe,uniforms:{boundarySpace:{value:x.boundarySpace},velocity:{value:x.src.texture},px:{value:x.cellScale},dt:{value:x.dt}}},output:x.dst}),this.init()}update({vel:x}){this.uniforms.velocity.value=x.texture,super.update()}}class dt extends Te{constructor(x){super({material:{vertexShader:oe,fragmentShader:Ge,uniforms:{boundarySpace:{value:x.boundarySpace},pressure:{value:x.dst_.texture},divergence:{value:x.src.texture},px:{value:x.cellScale}}},output:x.dst,output0:x.dst_,output1:x.dst}),this.init()}update({iterations:x}){let F,J;for(let ge=0;ge<x;ge++)ge%2===0?(F=this.props.output0,J=this.props.output1):(F=this.props.output1,J=this.props.output0),this.uniforms.pressure.value=F.texture,this.props.output=J,super.update();return J}}class St extends Te{constructor(x){super({material:{vertexShader:oe,fragmentShader:ne,uniforms:{boundarySpace:{value:x.boundarySpace},pressure:{value:x.src_p.texture},velocity:{value:x.src_v.texture},px:{value:x.cellScale},dt:{value:x.dt}}},output:x.dst}),this.init()}update({vel:x,pressure:F}){this.uniforms.velocity.value=x.texture,this.uniforms.pressure.value=F.texture,super.update()}}class Ft{constructor(x){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...x},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new Tt,this.cellScale=new Tt,this.boundarySpace=new Tt,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?ha:Ki}createAllFBO(){const F={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:On,magFilter:On,wrapS:Ei,wrapT:Ei};for(let J in this.fbos)this.fbos[J]=new Ji(this.fboSize.x,this.fboSize.y,F)}createShaderPass(){this.advection=new Ze({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new ut({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new pt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new hn({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new dt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new St({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const x=Math.max(1,Math.round(this.options.resolution*ee.width)),F=Math.max(1,Math.round(this.options.resolution*ee.height)),J=1/x,ge=1/F;this.cellScale.set(J,ge),this.fboSize.set(x,F)}resize(){this.calcSize();for(let x in this.fbos)this.fbos[x].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let x=this.fbos.vel_1;this.options.isViscous&&(x=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:x});const F=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:x,pressure:F})}}class _t{constructor(){this.init()}init(){this.simulation=new Ft,this.scene=new H_,this.camera=new Nc,this.output=new zi(new as(2,2),new gl({vertexShader:oe,fragmentShader:Y,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new Tt},palette:{value:G},bgColor:{value:K}}})),this.scene.add(this.output)}addScene(x){this.scene.add(x)}resize(){this.simulation.resize()}render(){ee.renderer.setRenderTarget(null),ee.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class qt{constructor(x){this.props=x,ee.init(x.$wrapper),O.init(x.$wrapper),O.autoIntensity=x.autoIntensity,O.takeoverDuration=x.takeoverDuration,this.lastUserInteraction=performance.now(),O.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new I(O,this,{enabled:x.autoDemo,speed:x.autoSpeed,resumeDelay:x.autoResumeDelay,rampDuration:x.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():b.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(ee.renderer.domElement),this.output=new _t}resize(){ee.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),O.update(),ee.update(),this.output.update()}loop(){this.running&&(this.render(),B.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,B.current&&(cancelAnimationFrame(B.current),B.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),O.dispose(),ee.renderer){const x=ee.renderer.domElement;x&&x.parentNode&&x.parentNode.removeChild(x),ee.renderer.dispose()}}catch{}}}const X=U.current;X.style.position=X.style.position||"relative",X.style.overflow=X.style.overflow||"hidden";const tn=new qt({$wrapper:X,autoDemo:S,autoSpeed:T,autoIntensity:A,takeoverDuration:y,autoResumeDelay:M,autoRampDuration:w});N.current=tn,(()=>{if(!N.current)return;const L=N.current.output?.simulation;if(!L)return;const x=L.options.resolution;Object.assign(L.options,{mouse_force:a,cursor_size:e,isViscous:i,viscous:s,iterations_viscous:l,iterations_poisson:u,dt:c,BFECC:h,resolution:m,isBounce:p}),m!==x&&L.resize()})(),tn.start();const Gt=new IntersectionObserver(L=>{const x=L[0],F=x.isIntersecting&&x.intersectionRatio>0;b.current=F,N.current&&(F&&!document.hidden?N.current.start():N.current.pause())},{threshold:[0,.01,.1]});Gt.observe(X),z.current=Gt;const et=new ResizeObserver(()=>{N.current&&(D.current&&cancelAnimationFrame(D.current),D.current=requestAnimationFrame(()=>{N.current&&N.current.resize()}))});return et.observe(X),H.current=et,()=>{if(B.current&&cancelAnimationFrame(B.current),H.current)try{H.current.disconnect()}catch{}if(z.current)try{z.current.disconnect()}catch{}N.current&&N.current.dispose(),N.current=null}},[h,e,c,p,i,u,l,a,m,s,_,S,T,A,y,M,w]),se.useEffect(()=>{const re=N.current;if(!re)return;const G=re.output?.simulation;if(!G)return;const K=G.options.resolution;Object.assign(G.options,{mouse_force:a,cursor_size:e,isViscous:i,viscous:s,iterations_viscous:l,iterations_poisson:u,dt:c,BFECC:h,resolution:m,isBounce:p}),re.autoDriver&&(re.autoDriver.enabled=S,re.autoDriver.speed=T,re.autoDriver.resumeDelay=M,re.autoDriver.rampDurationMs=w*1e3,re.autoDriver.mouse&&(re.autoDriver.mouse.autoIntensity=A,re.autoDriver.mouse.takeoverDuration=y)),m!==K&&G.resize()},[a,e,i,s,l,u,c,h,m,p,S,T,A,y,M,w]),Ht.jsx("div",{ref:U,className:`w-full h-full relative overflow-hidden pointer-events-none touch-none ${g||""}`,style:v})}function K2(){const[a,e]=se.useState(JSON.parse(localStorage.getItem("tasks"))||[{id:1,title:"Estudar Programação",description:"Estudar React e JavaScript",isCompleted:!1},{id:2,title:"Fazer Exercícios",description:"Praticar exercícios físicos por 30 minutos",isCompleted:!1},{id:3,title:"Ler um Livro",description:"Ler pelo menos 20 páginas de um livro",isCompleted:!1}]);se.useEffect(()=>{localStorage.setItem("tasks",JSON.stringify(a))},[a]);function i(u){const c=a.map(h=>h.id===u?{...h,isCompleted:!h.isCompleted}:h);e(c)}function s(u){const c=a.filter(h=>h.id!=u);e(c)}function l(u,c){const h={id:a.length+2,title:u,description:c,isCompleted:!1};e([...a,h])}return Ht.jsxs("div",{className:"w-screen h-screen flex justify-center p-6 overflow-hidden relative",children:[Ht.jsx("div",{className:"absolute inset-0 z-[-1]",children:Ht.jsx("div",{style:{width:"100%",height:680,position:"relative"},children:Ht.jsx(zy,{colors:["#5227FF","#FF9FFC","#B19EEF"],mouseForce:20,cursorSize:100,isViscous:!0,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6,color0:"#5227FF",color1:"#FF9FFC",color2:"#B19EEF"})})}),Ht.jsxs("div",{className:"w-[500px] space-y-4",children:[Ht.jsx("h1",{className:"text-3xl text-slate-100 font-bold text-center",children:"Gerenciador de Tarefas"}),Ht.jsx(zT,{onAddTaskSubmit:l}),Ht.jsx(FT,{tasks:a,onTaskClick:i,onDeleteTaskClick:s})]})]})}var Q2=Sx();function J2(a){return se.createElement(Zb,{flushSync:Q2.flushSync,...a})}function $2(){const a=Fc(),[e]=DT(),i=e.get("title"),s=e.get("description");return Ht.jsxs("div",{className:"w-screen h-screen flex justify-center p-6 overflow-hidden relative",children:[Ht.jsx("div",{className:"absolute inset-0 z-[-1]",children:Ht.jsx("div",{style:{width:"100%",height:680,position:"relative"},children:Ht.jsx(zy,{colors:["#5227FF","#FF9FFC","#B19EEF"],mouseForce:20,cursorSize:100,isViscous:!0,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6,color0:"#5227FF",color1:"#FF9FFC",color2:"#B19EEF"})})}),Ht.jsxs("div",{className:"w-[500px] space-y-4",children:[Ht.jsx("div",{className:"flex justify-center relative mb-6",children:Ht.jsx("h1",{className:"text-3xl text-slate-100 font-bold text-center",children:"Detalhes da Tarefa"})}),Ht.jsxs("div",{className:"bg-slate-100 p-4 rounded-md",children:[Ht.jsx("button",{onClick:()=>a(-1),className:"absolute p-2",children:Ht.jsx(oE,{})}),Ht.jsx("h2",{className:"text-xl text-black font-semibold text-center",children:i}),Ht.jsx("p",{className:"text-slate-800 text-center",children:s})]})]})]})}const e3=ET([{path:"/",element:Ht.jsx(K2,{})},{path:"/task",element:Ht.jsx($2,{})}]);eE.createRoot(document.getElementById("root")).render(Ht.jsx(se.StrictMode,{children:Ht.jsx(J2,{router:e3})}));
