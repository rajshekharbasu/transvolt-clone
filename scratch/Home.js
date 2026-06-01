import{a9 as reactExports,a4 as jsxRuntimeExports,D as Dropdown,b as DropdownItem,ab as requireReact,P as PageMeta}from"./index-CY0PCP32.js";import{h}from"./react-apexcharts.esm-Be82zlX2.js";import{f as flatpickr,S as SvgCalenderLine}from"./index-k2j4P_js.js";import"./index-BVowYwbD.js";const SvgMoredot=I=>reactExports.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...I},reactExports.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.2441 6C10.2441 5.0335 11.0276 4.25 11.9941 4.25H12.0041C12.9706 4.25 13.7541 5.0335 13.7541 6C13.7541 6.9665 12.9706 7.75 12.0041 7.75H11.9941C11.0276 7.75 10.2441 6.9665 10.2441 6ZM10.2441 18C10.2441 17.0335 11.0276 16.25 11.9941 16.25H12.0041C12.9706 16.25 13.7541 17.0335 13.7541 18C13.7541 18.9665 12.9706 19.75 12.0041 19.75H11.9941C11.0276 19.75 10.2441 18.9665 10.2441 18ZM11.9941 10.25C11.0276 10.25 10.2441 11.0335 10.2441 12C10.2441 12.9665 11.0276 13.75 11.9941 13.75H12.0041C12.9706 13.75 13.7541 12.9665 13.7541 12C13.7541 11.0335 12.9706 10.25 12.0041 10.25H11.9941Z",fill:"currentColor"})),metrics=[{label:"Organizations",value:"01",change:"+2.5%",trend:"success",borderClass:"border-b border-gray-200 sm:border-r xl:border-b-0 dark:border-gray-800"},{label:"Companies",value:"10",change:"+9.5%",trend:"success",borderClass:"border-b border-gray-200 xl:border-r xl:border-b-0 dark:border-gray-800"},{label:"Projects",value:"15",change:"-1.6%",trend:"error",borderClass:"border-b border-gray-200 sm:border-r sm:border-b-0 dark:border-gray-800"},{label:"Sites",value:"25",change:"+3.5%",trend:"success",borderClass:""}];function EcommerceMetrics(){return jsxRuntimeExports.jsxs("div",{className:"rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]",children:[jsxRuntimeExports.jsx("div",{className:"mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center",children:jsxRuntimeExports.jsx("h3",{className:"text-lg font-semibold text-gray-800 dark:text-white",children:"Overview"})}),jsxRuntimeExports.jsx("div",{className:"grid rounded-2xl border border-gray-200 bg-white sm:grid-cols-2 xl:grid-cols-4 dark:border-gray-800 dark:bg-gray-900",children:metrics.map(I=>jsxRuntimeExports.jsxs("div",{className:`px-6 py-5 ${I.borderClass}`,children:[jsxRuntimeExports.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:I.label}),jsxRuntimeExports.jsxs("div",{className:"mt-2 flex items-end gap-3",children:[jsxRuntimeExports.jsx("h4",{className:"text-title-xs sm:text-title-sm font-bold text-gray-800 dark:text-white/90",children:I.value}),jsxRuntimeExports.jsx("span",{className:`flex items-center gap-1 rounded-full py-0.5 pr-2.5 pl-2 text-sm font-medium ${I.trend==="success"?"bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500":"bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500"}`,children:I.change})]})]},I.label))})]})}function MonthlySalesChart(){const I={colors:["#465fff"],chart:{fontFamily:"Outfit, sans-serif",type:"bar",height:180,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"39%",borderRadius:5}},dataLabels:{enabled:!1},stroke:{show:!0,width:4,colors:["transparent"]},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1},axisTicks:{show:!1}},legend:{show:!0,position:"top",horizontalAlign:"left",fontFamily:"Outfit"},yaxis:{title:{text:""}},grid:{yaxis:{lines:{show:!0}}},fill:{opacity:1},tooltip:{x:{show:!1},y:{formatter:xe=>`${xe}`}}},w=[{name:"Sales",data:[168,385,201,298,187,195,291,110,215,390,280,112]}],[H,V]=reactExports.useState(!1),me=()=>V(!H),Q=()=>V(!1);return jsxRuntimeExports.jsxs("div",{className:"overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6",children:[jsxRuntimeExports.jsxs("div",{className:"flex items-center justify-between",children:[jsxRuntimeExports.jsx("h3",{className:"text-lg font-semibold text-gray-800 dark:text-white/90",children:"Monthly Sales"}),jsxRuntimeExports.jsxs("div",{className:"relative inline-block",children:[jsxRuntimeExports.jsx("button",{onClick:me,children:jsxRuntimeExports.jsx(SvgMoredot,{className:"text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 size-6"})}),jsxRuntimeExports.jsxs(Dropdown,{isOpen:H,onClose:Q,className:"w-40 p-2",children:[jsxRuntimeExports.jsx(DropdownItem,{onItemClick:Q,children:"View More"}),jsxRuntimeExports.jsx(DropdownItem,{onItemClick:Q,children:"Delete"})]})]})]}),jsxRuntimeExports.jsx("div",{className:"max-w-full overflow-x-auto custom-scrollbar",children:jsxRuntimeExports.jsx("div",{className:"-ml-5 min-w-[650px] xl:min-w-full pl-2",children:jsxRuntimeExports.jsx(h,{options:I,series:w,type:"bar",height:180})})})]})}const ChartTab=()=>{const[I,w]=reactExports.useState("optionOne"),H=V=>I===V?"shadow-theme-xs text-gray-900 dark:text-white bg-white dark:bg-gray-800":"text-gray-500 dark:text-gray-400";return jsxRuntimeExports.jsxs("div",{className:"flex items-center gap-0.5 rounded-lg bg-gray-100 p-0.5 dark:bg-gray-900",children:[jsxRuntimeExports.jsx("button",{onClick:()=>w("optionOne"),className:`px-3 py-2 font-medium w-full rounded-md text-theme-sm hover:text-gray-900   dark:hover:text-white ${H("optionOne")}`,children:"Monthly"}),jsxRuntimeExports.jsx("button",{onClick:()=>w("optionTwo"),className:`px-3 py-2 font-medium w-full rounded-md text-theme-sm hover:text-gray-900   dark:hover:text-white ${H("optionTwo")}`,children:"Quarterly"}),jsxRuntimeExports.jsx("button",{onClick:()=>w("optionThree"),className:`px-3 py-2 font-medium w-full rounded-md text-theme-sm hover:text-gray-900   dark:hover:text-white ${H("optionThree")}`,children:"Annually"})]})};function StatisticsChart(){const I=reactExports.useRef(null);reactExports.useEffect(()=>{if(!I.current)return;const V=new Date,me=new Date;me.setDate(V.getDate()-6);const Q=flatpickr(I.current,{mode:"range",static:!0,monthSelectorType:"static",dateFormat:"M d",defaultDate:[me,V],clickOpens:!0});return()=>{Q&&Q.destroy()}},[]);const w={legend:{show:!1,position:"top",horizontalAlign:"left"},colors:["#465FFF","#9CB9FF"],chart:{fontFamily:"Outfit, sans-serif",height:310,type:"line",toolbar:{show:!1}},stroke:{curve:"straight",width:[2,2]},fill:{type:"gradient",gradient:{opacityFrom:.55,opacityTo:0}},markers:{size:0,strokeColors:"#fff",strokeWidth:2,hover:{size:6}},grid:{xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}}},dataLabels:{enabled:!1},tooltip:{enabled:!0,x:{format:"dd MMM yyyy"}},xaxis:{type:"category",categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1},axisTicks:{show:!1},tooltip:{enabled:!1}},yaxis:{labels:{style:{fontSize:"12px",colors:["#6B7280"]}},title:{text:""}}},H=[{name:"Sales",data:[180,190,170,160,175,165,170,205,230,210,240,235]},{name:"Revenue",data:[40,30,50,40,55,40,70,100,110,120,150,140]}];return jsxRuntimeExports.jsxs("div",{className:"rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6",children:[jsxRuntimeExports.jsxs("div",{className:"flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between",children:[jsxRuntimeExports.jsxs("div",{className:"w-full",children:[jsxRuntimeExports.jsx("h3",{className:"text-lg font-semibold text-gray-800 dark:text-white/90",children:"Statistics"}),jsxRuntimeExports.jsx("p",{className:"mt-1 text-gray-500 text-theme-sm dark:text-gray-400",children:"Target you've set for each month"})]}),jsxRuntimeExports.jsxs("div",{className:"flex items-center gap-3 sm:justify-end",children:[jsxRuntimeExports.jsx(ChartTab,{}),jsxRuntimeExports.jsxs("div",{className:"relative inline-flex items-center",children:[jsxRuntimeExports.jsx(SvgCalenderLine,{className:"absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-500 pointer-events-none"}),jsxRuntimeExports.jsx("input",{ref:I,className:"h-10 w-40 pl-10 pr-3 py-2 rounded-lg border border-gray-200 bg-white text-sm text-gray-700 outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 cursor-pointer",placeholder:"Select date range"})]})]})]}),jsxRuntimeExports.jsx("div",{className:"max-w-full overflow-x-auto custom-scrollbar",children:jsxRuntimeExports.jsx("div",{className:"min-w-[1000px] xl:min-w-full",children:jsxRuntimeExports.jsx(h,{options:w,series:H,type:"area",height:310})})})]})}function MonthlyTarget(){const I=[75.55],w={colors:["#465FFF"],chart:{fontFamily:"Outfit, sans-serif",type:"radialBar",height:330,sparkline:{enabled:!0}},plotOptions:{radialBar:{startAngle:-85,endAngle:85,hollow:{size:"80%"},track:{background:"#E4E7EC",strokeWidth:"100%",margin:5},dataLabels:{name:{show:!1},value:{fontSize:"36px",fontWeight:"600",offsetY:-40,color:"#1D2939",formatter:xe=>`${xe}%`}}}},fill:{type:"solid",colors:["#465FFF"]},stroke:{lineCap:"round"},labels:["Progress"]},[H,V]=reactExports.useState(!1),me=()=>V(!H),Q=()=>V(!1);return jsxRuntimeExports.jsxs("div",{className:"rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-white/[0.03]",children:[jsxRuntimeExports.jsxs("div",{className:"px-5 pt-5 bg-white shadow-default rounded-2xl pb-11 dark:bg-gray-900 sm:px-6 sm:pt-6",children:[jsxRuntimeExports.jsxs("div",{className:"flex justify-between",children:[jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("h3",{className:"text-lg font-semibold text-gray-800 dark:text-white/90",children:"Monthly Target"}),jsxRuntimeExports.jsx("p",{className:"mt-1 text-gray-500 text-theme-sm dark:text-gray-400",children:"Target you’ve set for each month"})]}),jsxRuntimeExports.jsxs("div",{className:"relative inline-block",children:[jsxRuntimeExports.jsx("button",{onClick:me,children:jsxRuntimeExports.jsx(SvgMoredot,{className:"text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 size-6"})}),jsxRuntimeExports.jsxs(Dropdown,{isOpen:H,onClose:Q,className:"w-40 p-2",children:[jsxRuntimeExports.jsx(DropdownItem,{onItemClick:Q,children:"View More"}),jsxRuntimeExports.jsx(DropdownItem,{onItemClick:Q,children:"Delete"})]})]})]}),jsxRuntimeExports.jsxs("div",{className:"relative",children:[jsxRuntimeExports.jsx("div",{className:"max-h-[330px]",children:jsxRuntimeExports.jsx(h,{options:w,series:I,type:"radialBar",height:330})}),jsxRuntimeExports.jsx("span",{className:"absolute left-1/2 top-full -translate-x-1/2 -translate-y-[95%] rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600",children:"+10%"})]}),jsxRuntimeExports.jsx("p",{className:"mx-auto mt-10 w-full max-w-[380px] text-center text-sm text-gray-500 sm:text-base",children:"You earn $3287 today, it's higher than last month. Keep up your good work!"})]}),jsxRuntimeExports.jsx("div",{className:"flex items-center justify-center gap-5 px-6 py-3.5 sm:gap-8 sm:py-5",children:["Target","Revenue","Today"].map((xe,Ie)=>jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("p",{className:"mb-1 text-center text-gray-500 text-xs",children:xe}),jsxRuntimeExports.jsx("p",{className:"text-center font-semibold text-gray-800",children:"$20K"})]},Ie))})]})}var dist={exports:{}},jquery$1={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var jquery=jquery$1.exports,hasRequiredJquery;function requireJquery(){return hasRequiredJquery||(hasRequiredJquery=1,(function(I){(function(w,H){I.exports=w.document?H(w,!0):function(V){if(!V.document)throw new Error("jQuery requires a window with a document");return H(V)}})(typeof window<"u"?window:jquery,function(w,H){var V=[],me=Object.getPrototypeOf,Q=V.slice,xe=V.flat?function(e){return V.flat.call(e)}:function(e){return V.concat.apply([],e)},Ie=V.push,_e=V.indexOf,rn={},Wn=rn.toString,He=rn.hasOwnProperty,Vn=He.toString,It=Vn.call(Object),T={},L=function(n){return typeof n=="function"&&typeof n.nodeType!="number"&&typeof n.item!="function"},Be=function(n){return n!=null&&n===n.window},B=w.document,Bt={type:!0,src:!0,nonce:!0,noModule:!0};function Kn(e,n,t){t=t||B;var r,a,s=t.createElement("script");if(s.text=e,n)for(r in Bt)a=n[r]||n.getAttribute&&n.getAttribute(r),a&&s.setAttribute(r,a);t.head.appendChild(s).parentNode.removeChild(s)}function Te(e){return e==null?e+"":typeof e=="object"||typeof e=="function"?rn[Wn.call(e)]||"object":typeof e}var Hn="3.7.1",Tt=/HTML$/i,i=function(e,n){return new i.fn.init(e,n)};i.fn=i.prototype={jquery:Hn,constructor:i,length:0,toArray:function(){return Q.call(this)},get:function(e){return e==null?Q.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var n=i.merge(this.constructor(),e);return n.prevObject=this,n},each:function(e){return i.each(this,e)},map:function(e){return this.pushStack(i.map(this,function(n,t){return e.call(n,t,n)}))},slice:function(){return this.pushStack(Q.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(i.grep(this,function(e,n){return(n+1)%2}))},odd:function(){return this.pushStack(i.grep(this,function(e,n){return n%2}))},eq:function(e){var n=this.length,t=+e+(e<0?n:0);return this.pushStack(t>=0&&t<n?[this[t]]:[])},end:function(){return this.prevObject||this.constructor()},push:Ie,sort:V.sort,splice:V.splice},i.extend=i.fn.extend=function(){var e,n,t,r,a,s,o=arguments[0]||{},u=1,c=arguments.length,d=!1;for(typeof o=="boolean"&&(d=o,o=arguments[u]||{},u++),typeof o!="object"&&!L(o)&&(o={}),u===c&&(o=this,u--);u<c;u++)if((e=arguments[u])!=null)for(n in e)r=e[n],!(n==="__proto__"||o===r)&&(d&&r&&(i.isPlainObject(r)||(a=Array.isArray(r)))?(t=o[n],a&&!Array.isArray(t)?s=[]:!a&&!i.isPlainObject(t)?s={}:s=t,a=!1,o[n]=i.extend(d,s,r)):r!==void 0&&(o[n]=r));return o},i.extend({expando:"jQuery"+(Hn+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var n,t;return!e||Wn.call(e)!=="[object Object]"?!1:(n=me(e),n?(t=He.call(n,"constructor")&&n.constructor,typeof t=="function"&&Vn.call(t)===It):!0)},isEmptyObject:function(e){var n;for(n in e)return!1;return!0},globalEval:function(e,n,t){Kn(e,{nonce:n&&n.nonce},t)},each:function(e,n){var t,r=0;if(_n(e))for(t=e.length;r<t&&n.call(e[r],r,e[r])!==!1;r++);else for(r in e)if(n.call(e[r],r,e[r])===!1)break;return e},text:function(e){var n,t="",r=0,a=e.nodeType;if(!a)for(;n=e[r++];)t+=i.text(n);return a===1||a===11?e.textContent:a===9?e.documentElement.textContent:a===3||a===4?e.nodeValue:t},makeArray:function(e,n){var t=n||[];return e!=null&&(_n(Object(e))?i.merge(t,typeof e=="string"?[e]:e):Ie.call(t,e)),t},inArray:function(e,n,t){return n==null?-1:_e.call(n,e,t)},isXMLDoc:function(e){var n=e&&e.namespaceURI,t=e&&(e.ownerDocument||e).documentElement;return!Tt.test(n||t&&t.nodeName||"HTML")},merge:function(e,n){for(var t=+n.length,r=0,a=e.length;r<t;r++)e[a++]=n[r];return e.length=a,e},grep:function(e,n,t){for(var r,a=[],s=0,o=e.length,u=!t;s<o;s++)r=!n(e[s],s),r!==u&&a.push(e[s]);return a},map:function(e,n,t){var r,a,s=0,o=[];if(_n(e))for(r=e.length;s<r;s++)a=n(e[s],s,t),a!=null&&o.push(a);else for(s in e)a=n(e[s],s,t),a!=null&&o.push(a);return xe(o)},guid:1,support:T}),typeof Symbol=="function"&&(i.fn[Symbol.iterator]=V[Symbol.iterator]),i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,n){rn["[object "+n+"]"]=n.toLowerCase()});function _n(e){var n=!!e&&"length"in e&&e.length,t=Te(e);return L(e)||Be(e)?!1:t==="array"||n===0||typeof n=="number"&&n>0&&n-1 in e}function J(e,n){return e.nodeName&&e.nodeName.toLowerCase()===n.toLowerCase()}var Lt=V.pop,Ot=V.sort,Rt=V.splice,K="[\\x20\\t\\r\\n\\f]",Fe=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g");i.contains=function(e,n){var t=n&&n.parentNode;return e===t||!!(t&&t.nodeType===1&&(e.contains?e.contains(t):e.compareDocumentPosition&&e.compareDocumentPosition(t)&16))};var Pt=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function qt(e,n){return n?e==="\0"?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}i.escapeSelector=function(e){return(e+"").replace(Pt,qt)};var ge=B,gn=Ie;(function(){var e,n,t,r,a,s=gn,o,u,c,d,g,v=i.expando,m=0,y=0,j=dn(),N=dn(),O=dn(),z=dn(),G=function(l,p){return l===p&&(a=!0),0},ue="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",pe="(?:\\\\[\\da-fA-F]{1,6}"+K+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",q="\\["+K+"*("+pe+")(?:"+K+"*([*^$|!~]?=)"+K+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+pe+"))|)"+K+"*\\]",je=":("+pe+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+q+")*)|.*)\\)|)",U=new RegExp(K+"+","g"),Y=new RegExp("^"+K+"*,"+K+"*"),en=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),Ln=new RegExp(K+"|>"),de=new RegExp(je),nn=new RegExp("^"+pe+"$"),he={ID:new RegExp("^#("+pe+")"),CLASS:new RegExp("^\\.("+pe+")"),TAG:new RegExp("^("+pe+"|[*])"),ATTR:new RegExp("^"+q),PSEUDO:new RegExp("^"+je),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+ue+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},Ee=/^(?:input|select|textarea|button)$/i,we=/^h\d$/i,ie=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,On=/[+~]/,ye=new RegExp("\\\\[\\da-fA-F]{1,6}"+K+"?|\\\\([^\\r\\n\\f])","g"),be=function(l,p){var f="0x"+l.slice(1)-65536;return p||(f<0?String.fromCharCode(f+65536):String.fromCharCode(f>>10|55296,f&1023|56320))},Tr=function(){Me()},Lr=fn(function(l){return l.disabled===!0&&J(l,"fieldset")},{dir:"parentNode",next:"legend"});function Or(){try{return o.activeElement}catch{}}try{s.apply(V=Q.call(ge.childNodes),ge.childNodes),V[ge.childNodes.length].nodeType}catch{s={apply:function(p,f){gn.apply(p,Q.call(f))},call:function(p){gn.apply(p,Q.call(arguments,1))}}}function W(l,p,f,_){var A,b,x,M,E,R,S,D=p&&p.ownerDocument,P=p?p.nodeType:9;if(f=f||[],typeof l!="string"||!l||P!==1&&P!==9&&P!==11)return f;if(!_&&(Me(p),p=p||o,c)){if(P!==11&&(E=ie.exec(l)))if(A=E[1]){if(P===9)if(x=p.getElementById(A)){if(x.id===A)return s.call(f,x),f}else return f;else if(D&&(x=D.getElementById(A))&&W.contains(p,x)&&x.id===A)return s.call(f,x),f}else{if(E[2])return s.apply(f,p.getElementsByTagName(l)),f;if((A=E[3])&&p.getElementsByClassName)return s.apply(f,p.getElementsByClassName(A)),f}if(!z[l+" "]&&(!d||!d.test(l))){if(S=l,D=p,P===1&&(Ln.test(l)||en.test(l))){for(D=On.test(l)&&Rn(p.parentNode)||p,(D!=p||!T.scope)&&((M=p.getAttribute("id"))?M=i.escapeSelector(M):p.setAttribute("id",M=v)),R=tn(l),b=R.length;b--;)R[b]=(M?"#"+M:":scope")+" "+hn(R[b]);S=R.join(",")}try{return s.apply(f,D.querySelectorAll(S)),f}catch{z(l,!0)}finally{M===v&&p.removeAttribute("id")}}}return Dt(l.replace(Fe,"$1"),p,f,_)}function dn(){var l=[];function p(f,_){return l.push(f+" ")>n.cacheLength&&delete p[l.shift()],p[f+" "]=_}return p}function oe(l){return l[v]=!0,l}function Ve(l){var p=o.createElement("fieldset");try{return!!l(p)}catch{return!1}finally{p.parentNode&&p.parentNode.removeChild(p),p=null}}function Rr(l){return function(p){return J(p,"input")&&p.type===l}}function Pr(l){return function(p){return(J(p,"input")||J(p,"button"))&&p.type===l}}function St(l){return function(p){return"form"in p?p.parentNode&&p.disabled===!1?"label"in p?"label"in p.parentNode?p.parentNode.disabled===l:p.disabled===l:p.isDisabled===l||p.isDisabled!==!l&&Lr(p)===l:p.disabled===l:"label"in p?p.disabled===l:!1}}function De(l){return oe(function(p){return p=+p,oe(function(f,_){for(var A,b=l([],f.length,p),x=b.length;x--;)f[A=b[x]]&&(f[A]=!(_[A]=f[A]))})})}function Rn(l){return l&&typeof l.getElementsByTagName<"u"&&l}function Me(l){var p,f=l?l.ownerDocument||l:ge;return f==o||f.nodeType!==9||!f.documentElement||(o=f,u=o.documentElement,c=!i.isXMLDoc(o),g=u.matches||u.webkitMatchesSelector||u.msMatchesSelector,u.msMatchesSelector&&ge!=o&&(p=o.defaultView)&&p.top!==p&&p.addEventListener("unload",Tr),T.getById=Ve(function(_){return u.appendChild(_).id=i.expando,!o.getElementsByName||!o.getElementsByName(i.expando).length}),T.disconnectedMatch=Ve(function(_){return g.call(_,"*")}),T.scope=Ve(function(){return o.querySelectorAll(":scope")}),T.cssHas=Ve(function(){try{return o.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),T.getById?(n.filter.ID=function(_){var A=_.replace(ye,be);return function(b){return b.getAttribute("id")===A}},n.find.ID=function(_,A){if(typeof A.getElementById<"u"&&c){var b=A.getElementById(_);return b?[b]:[]}}):(n.filter.ID=function(_){var A=_.replace(ye,be);return function(b){var x=typeof b.getAttributeNode<"u"&&b.getAttributeNode("id");return x&&x.value===A}},n.find.ID=function(_,A){if(typeof A.getElementById<"u"&&c){var b,x,M,E=A.getElementById(_);if(E){if(b=E.getAttributeNode("id"),b&&b.value===_)return[E];for(M=A.getElementsByName(_),x=0;E=M[x++];)if(b=E.getAttributeNode("id"),b&&b.value===_)return[E]}return[]}}),n.find.TAG=function(_,A){return typeof A.getElementsByTagName<"u"?A.getElementsByTagName(_):A.querySelectorAll(_)},n.find.CLASS=function(_,A){if(typeof A.getElementsByClassName<"u"&&c)return A.getElementsByClassName(_)},d=[],Ve(function(_){var A;u.appendChild(_).innerHTML="<a id='"+v+"' href='' disabled='disabled'></a><select id='"+v+"-\r\\' disabled='disabled'><option selected=''></option></select>",_.querySelectorAll("[selected]").length||d.push("\\["+K+"*(?:value|"+ue+")"),_.querySelectorAll("[id~="+v+"-]").length||d.push("~="),_.querySelectorAll("a#"+v+"+*").length||d.push(".#.+[+~]"),_.querySelectorAll(":checked").length||d.push(":checked"),A=o.createElement("input"),A.setAttribute("type","hidden"),_.appendChild(A).setAttribute("name","D"),u.appendChild(_).disabled=!0,_.querySelectorAll(":disabled").length!==2&&d.push(":enabled",":disabled"),A=o.createElement("input"),A.setAttribute("name",""),_.appendChild(A),_.querySelectorAll("[name='']").length||d.push("\\["+K+"*name"+K+"*="+K+`*(?:''|"")`)}),T.cssHas||d.push(":has"),d=d.length&&new RegExp(d.join("|")),G=function(_,A){if(_===A)return a=!0,0;var b=!_.compareDocumentPosition-!A.compareDocumentPosition;return b||(b=(_.ownerDocument||_)==(A.ownerDocument||A)?_.compareDocumentPosition(A):1,b&1||!T.sortDetached&&A.compareDocumentPosition(_)===b?_===o||_.ownerDocument==ge&&W.contains(ge,_)?-1:A===o||A.ownerDocument==ge&&W.contains(ge,A)?1:r?_e.call(r,_)-_e.call(r,A):0:b&4?-1:1)}),o}W.matches=function(l,p){return W(l,null,null,p)},W.matchesSelector=function(l,p){if(Me(l),c&&!z[p+" "]&&(!d||!d.test(p)))try{var f=g.call(l,p);if(f||T.disconnectedMatch||l.document&&l.document.nodeType!==11)return f}catch{z(p,!0)}return W(p,o,null,[l]).length>0},W.contains=function(l,p){return(l.ownerDocument||l)!=o&&Me(l),i.contains(l,p)},W.attr=function(l,p){(l.ownerDocument||l)!=o&&Me(l);var f=n.attrHandle[p.toLowerCase()],_=f&&He.call(n.attrHandle,p.toLowerCase())?f(l,p,!c):void 0;return _!==void 0?_:l.getAttribute(p)},W.error=function(l){throw new Error("Syntax error, unrecognized expression: "+l)},i.uniqueSort=function(l){var p,f=[],_=0,A=0;if(a=!T.sortStable,r=!T.sortStable&&Q.call(l,0),Ot.call(l,G),a){for(;p=l[A++];)p===l[A]&&(_=f.push(A));for(;_--;)Rt.call(l,f[_],1)}return r=null,l},i.fn.uniqueSort=function(){return this.pushStack(i.uniqueSort(Q.apply(this)))},n=i.expr={cacheLength:50,createPseudo:oe,match:he,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(l){return l[1]=l[1].replace(ye,be),l[3]=(l[3]||l[4]||l[5]||"").replace(ye,be),l[2]==="~="&&(l[3]=" "+l[3]+" "),l.slice(0,4)},CHILD:function(l){return l[1]=l[1].toLowerCase(),l[1].slice(0,3)==="nth"?(l[3]||W.error(l[0]),l[4]=+(l[4]?l[5]+(l[6]||1):2*(l[3]==="even"||l[3]==="odd")),l[5]=+(l[7]+l[8]||l[3]==="odd")):l[3]&&W.error(l[0]),l},PSEUDO:function(l){var p,f=!l[6]&&l[2];return he.CHILD.test(l[0])?null:(l[3]?l[2]=l[4]||l[5]||"":f&&de.test(f)&&(p=tn(f,!0))&&(p=f.indexOf(")",f.length-p)-f.length)&&(l[0]=l[0].slice(0,p),l[2]=f.slice(0,p)),l.slice(0,3))}},filter:{TAG:function(l){var p=l.replace(ye,be).toLowerCase();return l==="*"?function(){return!0}:function(f){return J(f,p)}},CLASS:function(l){var p=j[l+" "];return p||(p=new RegExp("(^|"+K+")"+l+"("+K+"|$)"))&&j(l,function(f){return p.test(typeof f.className=="string"&&f.className||typeof f.getAttribute<"u"&&f.getAttribute("class")||"")})},ATTR:function(l,p,f){return function(_){var A=W.attr(_,l);return A==null?p==="!=":p?(A+="",p==="="?A===f:p==="!="?A!==f:p==="^="?f&&A.indexOf(f)===0:p==="*="?f&&A.indexOf(f)>-1:p==="$="?f&&A.slice(-f.length)===f:p==="~="?(" "+A.replace(U," ")+" ").indexOf(f)>-1:p==="|="?A===f||A.slice(0,f.length+1)===f+"-":!1):!0}},CHILD:function(l,p,f,_,A){var b=l.slice(0,3)!=="nth",x=l.slice(-4)!=="last",M=p==="of-type";return _===1&&A===0?function(E){return!!E.parentNode}:function(E,R,S){var D,P,C,F,te,X=b!==x?"nextSibling":"previousSibling",ae=E.parentNode,fe=M&&E.nodeName.toLowerCase(),Ke=!S&&!M,Z=!1;if(ae){if(b){for(;X;){for(C=E;C=C[X];)if(M?J(C,fe):C.nodeType===1)return!1;te=X=l==="only"&&!te&&"nextSibling"}return!0}if(te=[x?ae.firstChild:ae.lastChild],x&&Ke){for(P=ae[v]||(ae[v]={}),D=P[l]||[],F=D[0]===m&&D[1],Z=F&&D[2],C=F&&ae.childNodes[F];C=++F&&C&&C[X]||(Z=F=0)||te.pop();)if(C.nodeType===1&&++Z&&C===E){P[l]=[m,F,Z];break}}else if(Ke&&(P=E[v]||(E[v]={}),D=P[l]||[],F=D[0]===m&&D[1],Z=F),Z===!1)for(;(C=++F&&C&&C[X]||(Z=F=0)||te.pop())&&!((M?J(C,fe):C.nodeType===1)&&++Z&&(Ke&&(P=C[v]||(C[v]={}),P[l]=[m,Z]),C===E)););return Z-=A,Z===_||Z%_===0&&Z/_>=0}}},PSEUDO:function(l,p){var f,_=n.pseudos[l]||n.setFilters[l.toLowerCase()]||W.error("unsupported pseudo: "+l);return _[v]?_(p):_.length>1?(f=[l,l,"",p],n.setFilters.hasOwnProperty(l.toLowerCase())?oe(function(A,b){for(var x,M=_(A,p),E=M.length;E--;)x=_e.call(A,M[E]),A[x]=!(b[x]=M[E])}):function(A){return _(A,0,f)}):_}},pseudos:{not:oe(function(l){var p=[],f=[],_=Un(l.replace(Fe,"$1"));return _[v]?oe(function(A,b,x,M){for(var E,R=_(A,null,M,[]),S=A.length;S--;)(E=R[S])&&(A[S]=!(b[S]=E))}):function(A,b,x){return p[0]=A,_(p,null,x,f),p[0]=null,!f.pop()}}),has:oe(function(l){return function(p){return W(l,p).length>0}}),contains:oe(function(l){return l=l.replace(ye,be),function(p){return(p.textContent||i.text(p)).indexOf(l)>-1}}),lang:oe(function(l){return nn.test(l||"")||W.error("unsupported lang: "+l),l=l.replace(ye,be).toLowerCase(),function(p){var f;do if(f=c?p.lang:p.getAttribute("xml:lang")||p.getAttribute("lang"))return f=f.toLowerCase(),f===l||f.indexOf(l+"-")===0;while((p=p.parentNode)&&p.nodeType===1);return!1}}),target:function(l){var p=w.location&&w.location.hash;return p&&p.slice(1)===l.id},root:function(l){return l===u},focus:function(l){return l===Or()&&o.hasFocus()&&!!(l.type||l.href||~l.tabIndex)},enabled:St(!1),disabled:St(!0),checked:function(l){return J(l,"input")&&!!l.checked||J(l,"option")&&!!l.selected},selected:function(l){return l.parentNode&&l.parentNode.selectedIndex,l.selected===!0},empty:function(l){for(l=l.firstChild;l;l=l.nextSibling)if(l.nodeType<6)return!1;return!0},parent:function(l){return!n.pseudos.empty(l)},header:function(l){return we.test(l.nodeName)},input:function(l){return Ee.test(l.nodeName)},button:function(l){return J(l,"input")&&l.type==="button"||J(l,"button")},text:function(l){var p;return J(l,"input")&&l.type==="text"&&((p=l.getAttribute("type"))==null||p.toLowerCase()==="text")},first:De(function(){return[0]}),last:De(function(l,p){return[p-1]}),eq:De(function(l,p,f){return[f<0?f+p:f]}),even:De(function(l,p){for(var f=0;f<p;f+=2)l.push(f);return l}),odd:De(function(l,p){for(var f=1;f<p;f+=2)l.push(f);return l}),lt:De(function(l,p,f){var _;for(f<0?_=f+p:f>p?_=p:_=f;--_>=0;)l.push(_);return l}),gt:De(function(l,p,f){for(var _=f<0?f+p:f;++_<p;)l.push(_);return l})}},n.pseudos.nth=n.pseudos.eq;for(e in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})n.pseudos[e]=Rr(e);for(e in{submit:!0,reset:!0})n.pseudos[e]=Pr(e);function jt(){}jt.prototype=n.filters=n.pseudos,n.setFilters=new jt;function tn(l,p){var f,_,A,b,x,M,E,R=N[l+" "];if(R)return p?0:R.slice(0);for(x=l,M=[],E=n.preFilter;x;){(!f||(_=Y.exec(x)))&&(_&&(x=x.slice(_[0].length)||x),M.push(A=[])),f=!1,(_=en.exec(x))&&(f=_.shift(),A.push({value:f,type:_[0].replace(Fe," ")}),x=x.slice(f.length));for(b in n.filter)(_=he[b].exec(x))&&(!E[b]||(_=E[b](_)))&&(f=_.shift(),A.push({value:f,type:b,matches:_}),x=x.slice(f.length));if(!f)break}return p?x.length:x?W.error(l):N(l,M).slice(0)}function hn(l){for(var p=0,f=l.length,_="";p<f;p++)_+=l[p].value;return _}function fn(l,p,f){var _=p.dir,A=p.next,b=A||_,x=f&&b==="parentNode",M=y++;return p.first?function(E,R,S){for(;E=E[_];)if(E.nodeType===1||x)return l(E,R,S);return!1}:function(E,R,S){var D,P,C=[m,M];if(S){for(;E=E[_];)if((E.nodeType===1||x)&&l(E,R,S))return!0}else for(;E=E[_];)if(E.nodeType===1||x)if(P=E[v]||(E[v]={}),A&&J(E,A))E=E[_]||E;else{if((D=P[b])&&D[0]===m&&D[1]===M)return C[2]=D[2];if(P[b]=C,C[2]=l(E,R,S))return!0}return!1}}function Pn(l){return l.length>1?function(p,f,_){for(var A=l.length;A--;)if(!l[A](p,f,_))return!1;return!0}:l[0]}function qr(l,p,f){for(var _=0,A=p.length;_<A;_++)W(l,p[_],f);return f}function mn(l,p,f,_,A){for(var b,x=[],M=0,E=l.length,R=p!=null;M<E;M++)(b=l[M])&&(!f||f(b,_,A))&&(x.push(b),R&&p.push(M));return x}function qn(l,p,f,_,A,b){return _&&!_[v]&&(_=qn(_)),A&&!A[v]&&(A=qn(A,b)),oe(function(x,M,E,R){var S,D,P,C,F=[],te=[],X=M.length,ae=x||qr(p||"*",E.nodeType?[E]:E,[]),fe=l&&(x||!p)?mn(ae,F,l,E,R):ae;if(f?(C=A||(x?l:X||_)?[]:M,f(fe,C,E,R)):C=fe,_)for(S=mn(C,te),_(S,[],E,R),D=S.length;D--;)(P=S[D])&&(C[te[D]]=!(fe[te[D]]=P));if(x){if(A||l){if(A){for(S=[],D=C.length;D--;)(P=C[D])&&S.push(fe[D]=P);A(null,C=[],S,R)}for(D=C.length;D--;)(P=C[D])&&(S=A?_e.call(x,P):F[D])>-1&&(x[S]=!(M[S]=P))}}else C=mn(C===M?C.splice(X,C.length):C),A?A(null,M,C,R):s.apply(M,C)})}function Nn(l){for(var p,f,_,A=l.length,b=n.relative[l[0].type],x=b||n.relative[" "],M=b?1:0,E=fn(function(D){return D===p},x,!0),R=fn(function(D){return _e.call(p,D)>-1},x,!0),S=[function(D,P,C){var F=!b&&(C||P!=t)||((p=P).nodeType?E(D,P,C):R(D,P,C));return p=null,F}];M<A;M++)if(f=n.relative[l[M].type])S=[fn(Pn(S),f)];else{if(f=n.filter[l[M].type].apply(null,l[M].matches),f[v]){for(_=++M;_<A&&!n.relative[l[_].type];_++);return qn(M>1&&Pn(S),M>1&&hn(l.slice(0,M-1).concat({value:l[M-2].type===" "?"*":""})).replace(Fe,"$1"),f,M<_&&Nn(l.slice(M,_)),_<A&&Nn(l=l.slice(_)),_<A&&hn(l))}S.push(f)}return Pn(S)}function Nr(l,p){var f=p.length>0,_=l.length>0,A=function(b,x,M,E,R){var S,D,P,C=0,F="0",te=b&&[],X=[],ae=t,fe=b||_&&n.find.TAG("*",R),Ke=m+=ae==null?1:Math.random()||.1,Z=fe.length;for(R&&(t=x==o||x||R);F!==Z&&(S=fe[F])!=null;F++){if(_&&S){for(D=0,!x&&S.ownerDocument!=o&&(Me(S),M=!c);P=l[D++];)if(P(S,x||o,M)){s.call(E,S);break}R&&(m=Ke)}f&&((S=!P&&S)&&C--,b&&te.push(S))}if(C+=F,f&&F!==C){for(D=0;P=p[D++];)P(te,X,x,M);if(b){if(C>0)for(;F--;)te[F]||X[F]||(X[F]=Lt.call(E));X=mn(X)}s.apply(E,X),R&&!b&&X.length>0&&C+p.length>1&&i.uniqueSort(E)}return R&&(m=Ke,t=ae),te};return f?oe(A):A}function Un(l,p){var f,_=[],A=[],b=O[l+" "];if(!b){for(p||(p=tn(l)),f=p.length;f--;)b=Nn(p[f]),b[v]?_.push(b):A.push(b);b=O(l,Nr(A,_)),b.selector=l}return b}function Dt(l,p,f,_){var A,b,x,M,E,R=typeof l=="function"&&l,S=!_&&tn(l=R.selector||l);if(f=f||[],S.length===1){if(b=S[0]=S[0].slice(0),b.length>2&&(x=b[0]).type==="ID"&&p.nodeType===9&&c&&n.relative[b[1].type]){if(p=(n.find.ID(x.matches[0].replace(ye,be),p)||[])[0],p)R&&(p=p.parentNode);else return f;l=l.slice(b.shift().value.length)}for(A=he.needsContext.test(l)?0:b.length;A--&&(x=b[A],!n.relative[M=x.type]);)if((E=n.find[M])&&(_=E(x.matches[0].replace(ye,be),On.test(b[0].type)&&Rn(p.parentNode)||p))){if(b.splice(A,1),l=_.length&&hn(b),!l)return s.apply(f,_),f;break}}return(R||Un(l,S))(_,p,!c,f,!p||On.test(l)&&Rn(p.parentNode)||p),f}T.sortStable=v.split("").sort(G).join("")===v,Me(),T.sortDetached=Ve(function(l){return l.compareDocumentPosition(o.createElement("fieldset"))&1}),i.find=W,i.expr[":"]=i.expr.pseudos,i.unique=i.uniqueSort,W.compile=Un,W.select=Dt,W.setDocument=Me,W.tokenize=tn,W.escape=i.escapeSelector,W.getText=i.text,W.isXML=i.isXMLDoc,W.selectors=i.expr,W.support=i.support,W.uniqueSort=i.uniqueSort})();var Le=function(e,n,t){for(var r=[],a=t!==void 0;(e=e[n])&&e.nodeType!==9;)if(e.nodeType===1){if(a&&i(e).is(t))break;r.push(e)}return r},Fn=function(e,n){for(var t=[];e;e=e.nextSibling)e.nodeType===1&&e!==n&&t.push(e);return t},Jn=i.expr.match.needsContext,Qn=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function An(e,n,t){return L(n)?i.grep(e,function(r,a){return!!n.call(r,a,r)!==t}):n.nodeType?i.grep(e,function(r){return r===n!==t}):typeof n!="string"?i.grep(e,function(r){return _e.call(n,r)>-1!==t}):i.filter(n,e,t)}i.filter=function(e,n,t){var r=n[0];return t&&(e=":not("+e+")"),n.length===1&&r.nodeType===1?i.find.matchesSelector(r,e)?[r]:[]:i.find.matches(e,i.grep(n,function(a){return a.nodeType===1}))},i.fn.extend({find:function(e){var n,t,r=this.length,a=this;if(typeof e!="string")return this.pushStack(i(e).filter(function(){for(n=0;n<r;n++)if(i.contains(a[n],this))return!0}));for(t=this.pushStack([]),n=0;n<r;n++)i.find(e,a[n],t);return r>1?i.uniqueSort(t):t},filter:function(e){return this.pushStack(An(this,e||[],!1))},not:function(e){return this.pushStack(An(this,e||[],!0))},is:function(e){return!!An(this,typeof e=="string"&&Jn.test(e)?i(e):e||[],!1).length}});var Yn,Nt=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Ut=i.fn.init=function(e,n,t){var r,a;if(!e)return this;if(t=t||Yn,typeof e=="string")if(e[0]==="<"&&e[e.length-1]===">"&&e.length>=3?r=[null,e,null]:r=Nt.exec(e),r&&(r[1]||!n))if(r[1]){if(n=n instanceof i?n[0]:n,i.merge(this,i.parseHTML(r[1],n&&n.nodeType?n.ownerDocument||n:B,!0)),Qn.test(r[1])&&i.isPlainObject(n))for(r in n)L(this[r])?this[r](n[r]):this.attr(r,n[r]);return this}else return a=B.getElementById(r[2]),a&&(this[0]=a,this.length=1),this;else return!n||n.jquery?(n||t).find(e):this.constructor(n).find(e);else{if(e.nodeType)return this[0]=e,this.length=1,this;if(L(e))return t.ready!==void 0?t.ready(e):e(i)}return i.makeArray(e,this)};Ut.prototype=i.fn,Yn=i(B);var Wt=/^(?:parents|prev(?:Until|All))/,Vt={children:!0,contents:!0,next:!0,prev:!0};i.fn.extend({has:function(e){var n=i(e,this),t=n.length;return this.filter(function(){for(var r=0;r<t;r++)if(i.contains(this,n[r]))return!0})},closest:function(e,n){var t,r=0,a=this.length,s=[],o=typeof e!="string"&&i(e);if(!Jn.test(e)){for(;r<a;r++)for(t=this[r];t&&t!==n;t=t.parentNode)if(t.nodeType<11&&(o?o.index(t)>-1:t.nodeType===1&&i.find.matchesSelector(t,e))){s.push(t);break}}return this.pushStack(s.length>1?i.uniqueSort(s):s)},index:function(e){return e?typeof e=="string"?_e.call(i(e),this[0]):_e.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,n){return this.pushStack(i.uniqueSort(i.merge(this.get(),i(e,n))))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}});function Gn(e,n){for(;(e=e[n])&&e.nodeType!==1;);return e}i.each({parent:function(e){var n=e.parentNode;return n&&n.nodeType!==11?n:null},parents:function(e){return Le(e,"parentNode")},parentsUntil:function(e,n,t){return Le(e,"parentNode",t)},next:function(e){return Gn(e,"nextSibling")},prev:function(e){return Gn(e,"previousSibling")},nextAll:function(e){return Le(e,"nextSibling")},prevAll:function(e){return Le(e,"previousSibling")},nextUntil:function(e,n,t){return Le(e,"nextSibling",t)},prevUntil:function(e,n,t){return Le(e,"previousSibling",t)},siblings:function(e){return Fn((e.parentNode||{}).firstChild,e)},children:function(e){return Fn(e.firstChild)},contents:function(e){return e.contentDocument!=null&&me(e.contentDocument)?e.contentDocument:(J(e,"template")&&(e=e.content||e),i.merge([],e.childNodes))}},function(e,n){i.fn[e]=function(t,r){var a=i.map(this,n,t);return e.slice(-5)!=="Until"&&(r=t),r&&typeof r=="string"&&(a=i.filter(r,a)),this.length>1&&(Vt[e]||i.uniqueSort(a),Wt.test(e)&&a.reverse()),this.pushStack(a)}});var le=/[^\x20\t\r\n\f]+/g;function Kt(e){var n={};return i.each(e.match(le)||[],function(t,r){n[r]=!0}),n}i.Callbacks=function(e){e=typeof e=="string"?Kt(e):i.extend({},e);var n,t,r,a,s=[],o=[],u=-1,c=function(){for(a=a||e.once,r=n=!0;o.length;u=-1)for(t=o.shift();++u<s.length;)s[u].apply(t[0],t[1])===!1&&e.stopOnFalse&&(u=s.length,t=!1);e.memory||(t=!1),n=!1,a&&(t?s=[]:s="")},d={add:function(){return s&&(t&&!n&&(u=s.length-1,o.push(t)),(function g(v){i.each(v,function(m,y){L(y)?(!e.unique||!d.has(y))&&s.push(y):y&&y.length&&Te(y)!=="string"&&g(y)})})(arguments),t&&!n&&c()),this},remove:function(){return i.each(arguments,function(g,v){for(var m;(m=i.inArray(v,s,m))>-1;)s.splice(m,1),m<=u&&u--}),this},has:function(g){return g?i.inArray(g,s)>-1:s.length>0},empty:function(){return s&&(s=[]),this},disable:function(){return a=o=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=o=[],!t&&!n&&(s=t=""),this},locked:function(){return!!a},fireWith:function(g,v){return a||(v=v||[],v=[g,v.slice?v.slice():v],o.push(v),n||c()),this},fire:function(){return d.fireWith(this,arguments),this},fired:function(){return!!r}};return d};function Oe(e){return e}function an(e){throw e}function zn(e,n,t,r){var a;try{e&&L(a=e.promise)?a.call(e).done(n).fail(t):e&&L(a=e.then)?a.call(e,n,t):n.apply(void 0,[e].slice(r))}catch(s){t.apply(void 0,[s])}}i.extend({Deferred:function(e){var n=[["notify","progress",i.Callbacks("memory"),i.Callbacks("memory"),2],["resolve","done",i.Callbacks("once memory"),i.Callbacks("once memory"),0,"resolved"],["reject","fail",i.Callbacks("once memory"),i.Callbacks("once memory"),1,"rejected"]],t="pending",r={state:function(){return t},always:function(){return a.done(arguments).fail(arguments),this},catch:function(s){return r.then(null,s)},pipe:function(){var s=arguments;return i.Deferred(function(o){i.each(n,function(u,c){var d=L(s[c[4]])&&s[c[4]];a[c[1]](function(){var g=d&&d.apply(this,arguments);g&&L(g.promise)?g.promise().progress(o.notify).done(o.resolve).fail(o.reject):o[c[0]+"With"](this,d?[g]:arguments)})}),s=null}).promise()},then:function(s,o,u){var c=0;function d(g,v,m,y){return function(){var j=this,N=arguments,O=function(){var G,ue;if(!(g<c)){if(G=m.apply(j,N),G===v.promise())throw new TypeError("Thenable self-resolution");ue=G&&(typeof G=="object"||typeof G=="function")&&G.then,L(ue)?y?ue.call(G,d(c,v,Oe,y),d(c,v,an,y)):(c++,ue.call(G,d(c,v,Oe,y),d(c,v,an,y),d(c,v,Oe,v.notifyWith))):(m!==Oe&&(j=void 0,N=[G]),(y||v.resolveWith)(j,N))}},z=y?O:function(){try{O()}catch(G){i.Deferred.exceptionHook&&i.Deferred.exceptionHook(G,z.error),g+1>=c&&(m!==an&&(j=void 0,N=[G]),v.rejectWith(j,N))}};g?z():(i.Deferred.getErrorHook?z.error=i.Deferred.getErrorHook():i.Deferred.getStackHook&&(z.error=i.Deferred.getStackHook()),w.setTimeout(z))}}return i.Deferred(function(g){n[0][3].add(d(0,g,L(u)?u:Oe,g.notifyWith)),n[1][3].add(d(0,g,L(s)?s:Oe)),n[2][3].add(d(0,g,L(o)?o:an))}).promise()},promise:function(s){return s!=null?i.extend(s,r):r}},a={};return i.each(n,function(s,o){var u=o[2],c=o[5];r[o[1]]=u.add,c&&u.add(function(){t=c},n[3-s][2].disable,n[3-s][3].disable,n[0][2].lock,n[0][3].lock),u.add(o[3].fire),a[o[0]]=function(){return a[o[0]+"With"](this===a?void 0:this,arguments),this},a[o[0]+"With"]=u.fireWith}),r.promise(a),e&&e.call(a,a),a},when:function(e){var n=arguments.length,t=n,r=Array(t),a=Q.call(arguments),s=i.Deferred(),o=function(u){return function(c){r[u]=this,a[u]=arguments.length>1?Q.call(arguments):c,--n||s.resolveWith(r,a)}};if(n<=1&&(zn(e,s.done(o(t)).resolve,s.reject,!n),s.state()==="pending"||L(a[t]&&a[t].then)))return s.then();for(;t--;)zn(a[t],o(t),s.reject);return s.promise()}});var Ht=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;i.Deferred.exceptionHook=function(e,n){w.console&&w.console.warn&&e&&Ht.test(e.name)&&w.console.warn("jQuery.Deferred exception: "+e.message,e.stack,n)},i.readyException=function(e){w.setTimeout(function(){throw e})};var vn=i.Deferred();i.fn.ready=function(e){return vn.then(e).catch(function(n){i.readyException(n)}),this},i.extend({isReady:!1,readyWait:1,ready:function(e){(e===!0?--i.readyWait:i.isReady)||(i.isReady=!0,!(e!==!0&&--i.readyWait>0)&&vn.resolveWith(B,[i]))}}),i.ready.then=vn.then;function sn(){B.removeEventListener("DOMContentLoaded",sn),w.removeEventListener("load",sn),i.ready()}B.readyState==="complete"||B.readyState!=="loading"&&!B.documentElement.doScroll?w.setTimeout(i.ready):(B.addEventListener("DOMContentLoaded",sn),w.addEventListener("load",sn));var Ae=function(e,n,t,r,a,s,o){var u=0,c=e.length,d=t==null;if(Te(t)==="object"){a=!0;for(u in t)Ae(e,n,u,t[u],!0,s,o)}else if(r!==void 0&&(a=!0,L(r)||(o=!0),d&&(o?(n.call(e,r),n=null):(d=n,n=function(g,v,m){return d.call(i(g),m)})),n))for(;u<c;u++)n(e[u],t,o?r:r.call(e[u],u,n(e[u],t)));return a?e:d?n.call(e):c?n(e[0],t):s},Ft=/^-ms-/,Jt=/-([a-z])/g;function Qt(e,n){return n.toUpperCase()}function ce(e){return e.replace(Ft,"ms-").replace(Jt,Qt)}var Je=function(e){return e.nodeType===1||e.nodeType===9||!+e.nodeType};function Qe(){this.expando=i.expando+Qe.uid++}Qe.uid=1,Qe.prototype={cache:function(e){var n=e[this.expando];return n||(n={},Je(e)&&(e.nodeType?e[this.expando]=n:Object.defineProperty(e,this.expando,{value:n,configurable:!0}))),n},set:function(e,n,t){var r,a=this.cache(e);if(typeof n=="string")a[ce(n)]=t;else for(r in n)a[ce(r)]=n[r];return a},get:function(e,n){return n===void 0?this.cache(e):e[this.expando]&&e[this.expando][ce(n)]},access:function(e,n,t){return n===void 0||n&&typeof n=="string"&&t===void 0?this.get(e,n):(this.set(e,n,t),t!==void 0?t:n)},remove:function(e,n){var t,r=e[this.expando];if(r!==void 0){if(n!==void 0)for(Array.isArray(n)?n=n.map(ce):(n=ce(n),n=n in r?[n]:n.match(le)||[]),t=n.length;t--;)delete r[n[t]];(n===void 0||i.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var n=e[this.expando];return n!==void 0&&!i.isEmptyObject(n)}};var k=new Qe,$=new Qe,Yt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Gt=/[A-Z]/g;function zt(e){return e==="true"?!0:e==="false"?!1:e==="null"?null:e===+e+""?+e:Yt.test(e)?JSON.parse(e):e}function Xn(e,n,t){var r;if(t===void 0&&e.nodeType===1)if(r="data-"+n.replace(Gt,"-$&").toLowerCase(),t=e.getAttribute(r),typeof t=="string"){try{t=zt(t)}catch{}$.set(e,n,t)}else t=void 0;return t}i.extend({hasData:function(e){return $.hasData(e)||k.hasData(e)},data:function(e,n,t){return $.access(e,n,t)},removeData:function(e,n){$.remove(e,n)},_data:function(e,n,t){return k.access(e,n,t)},_removeData:function(e,n){k.remove(e,n)}}),i.fn.extend({data:function(e,n){var t,r,a,s=this[0],o=s&&s.attributes;if(e===void 0){if(this.length&&(a=$.get(s),s.nodeType===1&&!k.get(s,"hasDataAttrs"))){for(t=o.length;t--;)o[t]&&(r=o[t].name,r.indexOf("data-")===0&&(r=ce(r.slice(5)),Xn(s,r,a[r])));k.set(s,"hasDataAttrs",!0)}return a}return typeof e=="object"?this.each(function(){$.set(this,e)}):Ae(this,function(u){var c;if(s&&u===void 0)return c=$.get(s,e),c!==void 0||(c=Xn(s,e),c!==void 0)?c:void 0;this.each(function(){$.set(this,e,u)})},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){$.remove(this,e)})}}),i.extend({queue:function(e,n,t){var r;if(e)return n=(n||"fx")+"queue",r=k.get(e,n),t&&(!r||Array.isArray(t)?r=k.access(e,n,i.makeArray(t)):r.push(t)),r||[]},dequeue:function(e,n){n=n||"fx";var t=i.queue(e,n),r=t.length,a=t.shift(),s=i._queueHooks(e,n),o=function(){i.dequeue(e,n)};a==="inprogress"&&(a=t.shift(),r--),a&&(n==="fx"&&t.unshift("inprogress"),delete s.stop,a.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,n){var t=n+"queueHooks";return k.get(e,t)||k.access(e,t,{empty:i.Callbacks("once memory").add(function(){k.remove(e,[n+"queue",t])})})}}),i.fn.extend({queue:function(e,n){var t=2;return typeof e!="string"&&(n=e,e="fx",t--),arguments.length<t?i.queue(this[0],e):n===void 0?this:this.each(function(){var r=i.queue(this,e,n);i._queueHooks(this,e),e==="fx"&&r[0]!=="inprogress"&&i.dequeue(this,e)})},dequeue:function(e){return this.each(function(){i.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var t,r=1,a=i.Deferred(),s=this,o=this.length,u=function(){--r||a.resolveWith(s,[s])};for(typeof e!="string"&&(n=e,e=void 0),e=e||"fx";o--;)t=k.get(s[o],e+"queueHooks"),t&&t.empty&&(r++,t.empty.add(u));return u(),a.promise(n)}});var Zn=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ye=new RegExp("^(?:([+-])=|)("+Zn+")([a-z%]*)$","i"),ve=["Top","Right","Bottom","Left"],ke=B.documentElement,Re=function(e){return i.contains(e.ownerDocument,e)},Xt={composed:!0};ke.getRootNode&&(Re=function(e){return i.contains(e.ownerDocument,e)||e.getRootNode(Xt)===e.ownerDocument});var on=function(e,n){return e=n||e,e.style.display==="none"||e.style.display===""&&Re(e)&&i.css(e,"display")==="none"};function $n(e,n,t,r){var a,s,o=20,u=r?function(){return r.cur()}:function(){return i.css(e,n,"")},c=u(),d=t&&t[3]||(i.cssNumber[n]?"":"px"),g=e.nodeType&&(i.cssNumber[n]||d!=="px"&&+c)&&Ye.exec(i.css(e,n));if(g&&g[3]!==d){for(c=c/2,d=d||g[3],g=+c||1;o--;)i.style(e,n,g+d),(1-s)*(1-(s=u()/c||.5))<=0&&(o=0),g=g/s;g=g*2,i.style(e,n,g+d),t=t||[]}return t&&(g=+g||+c||0,a=t[1]?g+(t[1]+1)*t[2]:+t[2],r&&(r.unit=d,r.start=g,r.end=a)),a}var et={};function Zt(e){var n,t=e.ownerDocument,r=e.nodeName,a=et[r];return a||(n=t.body.appendChild(t.createElement(r)),a=i.css(n,"display"),n.parentNode.removeChild(n),a==="none"&&(a="block"),et[r]=a,a)}function Pe(e,n){for(var t,r,a=[],s=0,o=e.length;s<o;s++)r=e[s],r.style&&(t=r.style.display,n?(t==="none"&&(a[s]=k.get(r,"display")||null,a[s]||(r.style.display="")),r.style.display===""&&on(r)&&(a[s]=Zt(r))):t!=="none"&&(a[s]="none",k.set(r,"display",t)));for(s=0;s<o;s++)a[s]!=null&&(e[s].style.display=a[s]);return e}i.fn.extend({show:function(){return Pe(this,!0)},hide:function(){return Pe(this)},toggle:function(e){return typeof e=="boolean"?e?this.show():this.hide():this.each(function(){on(this)?i(this).show():i(this).hide()})}});var Ge=/^(?:checkbox|radio)$/i,nt=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,tt=/^$|^module$|\/(?:java|ecma)script/i;(function(){var e=B.createDocumentFragment(),n=e.appendChild(B.createElement("div")),t=B.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),n.appendChild(t),T.checkClone=n.cloneNode(!0).cloneNode(!0).lastChild.checked,n.innerHTML="<textarea>x</textarea>",T.noCloneChecked=!!n.cloneNode(!0).lastChild.defaultValue,n.innerHTML="<option></option>",T.option=!!n.lastChild})();var re={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};re.tbody=re.tfoot=re.colgroup=re.caption=re.thead,re.th=re.td,T.option||(re.optgroup=re.option=[1,"<select multiple='multiple'>","</select>"]);function ee(e,n){var t;return typeof e.getElementsByTagName<"u"?t=e.getElementsByTagName(n||"*"):typeof e.querySelectorAll<"u"?t=e.querySelectorAll(n||"*"):t=[],n===void 0||n&&J(e,n)?i.merge([e],t):t}function yn(e,n){for(var t=0,r=e.length;t<r;t++)k.set(e[t],"globalEval",!n||k.get(n[t],"globalEval"))}var $t=/<|&#?\w+;/;function rt(e,n,t,r,a){for(var s,o,u,c,d,g,v=n.createDocumentFragment(),m=[],y=0,j=e.length;y<j;y++)if(s=e[y],s||s===0)if(Te(s)==="object")i.merge(m,s.nodeType?[s]:s);else if(!$t.test(s))m.push(n.createTextNode(s));else{for(o=o||v.appendChild(n.createElement("div")),u=(nt.exec(s)||["",""])[1].toLowerCase(),c=re[u]||re._default,o.innerHTML=c[1]+i.htmlPrefilter(s)+c[2],g=c[0];g--;)o=o.lastChild;i.merge(m,o.childNodes),o=v.firstChild,o.textContent=""}for(v.textContent="",y=0;s=m[y++];){if(r&&i.inArray(s,r)>-1){a&&a.push(s);continue}if(d=Re(s),o=ee(v.appendChild(s),"script"),d&&yn(o),t)for(g=0;s=o[g++];)tt.test(s.type||"")&&t.push(s)}return v}var it=/^([^.]*)(?:\.(.+)|)/;function qe(){return!0}function Ne(){return!1}function bn(e,n,t,r,a,s){var o,u;if(typeof n=="object"){typeof t!="string"&&(r=r||t,t=void 0);for(u in n)bn(e,u,t,r,n[u],s);return e}if(r==null&&a==null?(a=t,r=t=void 0):a==null&&(typeof t=="string"?(a=r,r=void 0):(a=r,r=t,t=void 0)),a===!1)a=Ne;else if(!a)return e;return s===1&&(o=a,a=function(c){return i().off(c),o.apply(this,arguments)},a.guid=o.guid||(o.guid=i.guid++)),e.each(function(){i.event.add(this,n,a,r,t)})}i.event={global:{},add:function(e,n,t,r,a){var s,o,u,c,d,g,v,m,y,j,N,O=k.get(e);if(Je(e))for(t.handler&&(s=t,t=s.handler,a=s.selector),a&&i.find.matchesSelector(ke,a),t.guid||(t.guid=i.guid++),(c=O.events)||(c=O.events=Object.create(null)),(o=O.handle)||(o=O.handle=function(z){return typeof i<"u"&&i.event.triggered!==z.type?i.event.dispatch.apply(e,arguments):void 0}),n=(n||"").match(le)||[""],d=n.length;d--;)u=it.exec(n[d])||[],y=N=u[1],j=(u[2]||"").split(".").sort(),y&&(v=i.event.special[y]||{},y=(a?v.delegateType:v.bindType)||y,v=i.event.special[y]||{},g=i.extend({type:y,origType:N,data:r,handler:t,guid:t.guid,selector:a,needsContext:a&&i.expr.match.needsContext.test(a),namespace:j.join(".")},s),(m=c[y])||(m=c[y]=[],m.delegateCount=0,(!v.setup||v.setup.call(e,r,j,o)===!1)&&e.addEventListener&&e.addEventListener(y,o)),v.add&&(v.add.call(e,g),g.handler.guid||(g.handler.guid=t.guid)),a?m.splice(m.delegateCount++,0,g):m.push(g),i.event.global[y]=!0)},remove:function(e,n,t,r,a){var s,o,u,c,d,g,v,m,y,j,N,O=k.hasData(e)&&k.get(e);if(!(!O||!(c=O.events))){for(n=(n||"").match(le)||[""],d=n.length;d--;){if(u=it.exec(n[d])||[],y=N=u[1],j=(u[2]||"").split(".").sort(),!y){for(y in c)i.event.remove(e,y+n[d],t,r,!0);continue}for(v=i.event.special[y]||{},y=(r?v.delegateType:v.bindType)||y,m=c[y]||[],u=u[2]&&new RegExp("(^|\\.)"+j.join("\\.(?:.*\\.|)")+"(\\.|$)"),o=s=m.length;s--;)g=m[s],(a||N===g.origType)&&(!t||t.guid===g.guid)&&(!u||u.test(g.namespace))&&(!r||r===g.selector||r==="**"&&g.selector)&&(m.splice(s,1),g.selector&&m.delegateCount--,v.remove&&v.remove.call(e,g));o&&!m.length&&((!v.teardown||v.teardown.call(e,j,O.handle)===!1)&&i.removeEvent(e,y,O.handle),delete c[y])}i.isEmptyObject(c)&&k.remove(e,"handle events")}},dispatch:function(e){var n,t,r,a,s,o,u=new Array(arguments.length),c=i.event.fix(e),d=(k.get(this,"events")||Object.create(null))[c.type]||[],g=i.event.special[c.type]||{};for(u[0]=c,n=1;n<arguments.length;n++)u[n]=arguments[n];if(c.delegateTarget=this,!(g.preDispatch&&g.preDispatch.call(this,c)===!1)){for(o=i.event.handlers.call(this,c,d),n=0;(a=o[n++])&&!c.isPropagationStopped();)for(c.currentTarget=a.elem,t=0;(s=a.handlers[t++])&&!c.isImmediatePropagationStopped();)(!c.rnamespace||s.namespace===!1||c.rnamespace.test(s.namespace))&&(c.handleObj=s,c.data=s.data,r=((i.event.special[s.origType]||{}).handle||s.handler).apply(a.elem,u),r!==void 0&&(c.result=r)===!1&&(c.preventDefault(),c.stopPropagation()));return g.postDispatch&&g.postDispatch.call(this,c),c.result}},handlers:function(e,n){var t,r,a,s,o,u=[],c=n.delegateCount,d=e.target;if(c&&d.nodeType&&!(e.type==="click"&&e.button>=1)){for(;d!==this;d=d.parentNode||this)if(d.nodeType===1&&!(e.type==="click"&&d.disabled===!0)){for(s=[],o={},t=0;t<c;t++)r=n[t],a=r.selector+" ",o[a]===void 0&&(o[a]=r.needsContext?i(a,this).index(d)>-1:i.find(a,this,null,[d]).length),o[a]&&s.push(r);s.length&&u.push({elem:d,handlers:s})}}return d=this,c<n.length&&u.push({elem:d,handlers:n.slice(c)}),u},addProp:function(e,n){Object.defineProperty(i.Event.prototype,e,{enumerable:!0,configurable:!0,get:L(n)?function(){if(this.originalEvent)return n(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[i.expando]?e:new i.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var n=this||e;return Ge.test(n.type)&&n.click&&J(n,"input")&&ln(n,"click",!0),!1},trigger:function(e){var n=this||e;return Ge.test(n.type)&&n.click&&J(n,"input")&&ln(n,"click"),!0},_default:function(e){var n=e.target;return Ge.test(n.type)&&n.click&&J(n,"input")&&k.get(n,"click")||J(n,"a")}},beforeunload:{postDispatch:function(e){e.result!==void 0&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}};function ln(e,n,t){if(!t){k.get(e,n)===void 0&&i.event.add(e,n,qe);return}k.set(e,n,!1),i.event.add(e,n,{namespace:!1,handler:function(r){var a,s=k.get(this,n);if(r.isTrigger&1&&this[n]){if(s)(i.event.special[n]||{}).delegateType&&r.stopPropagation();else if(s=Q.call(arguments),k.set(this,n,s),this[n](),a=k.get(this,n),k.set(this,n,!1),s!==a)return r.stopImmediatePropagation(),r.preventDefault(),a}else s&&(k.set(this,n,i.event.trigger(s[0],s.slice(1),this)),r.stopPropagation(),r.isImmediatePropagationStopped=qe)}})}i.removeEvent=function(e,n,t){e.removeEventListener&&e.removeEventListener(n,t)},i.Event=function(e,n){if(!(this instanceof i.Event))return new i.Event(e,n);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.defaultPrevented===void 0&&e.returnValue===!1?qe:Ne,this.target=e.target&&e.target.nodeType===3?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,n&&i.extend(this,n),this.timeStamp=e&&e.timeStamp||Date.now(),this[i.expando]=!0},i.Event.prototype={constructor:i.Event,isDefaultPrevented:Ne,isPropagationStopped:Ne,isImmediatePropagationStopped:Ne,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=qe,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=qe,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=qe,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},i.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},i.event.addProp),i.each({focus:"focusin",blur:"focusout"},function(e,n){function t(r){if(B.documentMode){var a=k.get(this,"handle"),s=i.event.fix(r);s.type=r.type==="focusin"?"focus":"blur",s.isSimulated=!0,a(r),s.target===s.currentTarget&&a(s)}else i.event.simulate(n,r.target,i.event.fix(r))}i.event.special[e]={setup:function(){var r;if(ln(this,e,!0),B.documentMode)r=k.get(this,n),r||this.addEventListener(n,t),k.set(this,n,(r||0)+1);else return!1},trigger:function(){return ln(this,e),!0},teardown:function(){var r;if(B.documentMode)r=k.get(this,n)-1,r?k.set(this,n,r):(this.removeEventListener(n,t),k.remove(this,n));else return!1},_default:function(r){return k.get(r.target,e)},delegateType:n},i.event.special[n]={setup:function(){var r=this.ownerDocument||this.document||this,a=B.documentMode?this:r,s=k.get(a,n);s||(B.documentMode?this.addEventListener(n,t):r.addEventListener(e,t,!0)),k.set(a,n,(s||0)+1)},teardown:function(){var r=this.ownerDocument||this.document||this,a=B.documentMode?this:r,s=k.get(a,n)-1;s?k.set(a,n,s):(B.documentMode?this.removeEventListener(n,t):r.removeEventListener(e,t,!0),k.remove(a,n))}}}),i.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,n){i.event.special[e]={delegateType:n,bindType:n,handle:function(t){var r,a=this,s=t.relatedTarget,o=t.handleObj;return(!s||s!==a&&!i.contains(a,s))&&(t.type=o.origType,r=o.handler.apply(this,arguments),t.type=n),r}}}),i.fn.extend({on:function(e,n,t,r){return bn(this,e,n,t,r)},one:function(e,n,t,r){return bn(this,e,n,t,r,1)},off:function(e,n,t){var r,a;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,i(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if(typeof e=="object"){for(a in e)this.off(a,n,e[a]);return this}return(n===!1||typeof n=="function")&&(t=n,n=void 0),t===!1&&(t=Ne),this.each(function(){i.event.remove(this,e,t,n)})}});var er=/<script|<style|<link/i,nr=/checked\s*(?:[^=]|=\s*.checked.)/i,tr=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function at(e,n){return J(e,"table")&&J(n.nodeType!==11?n:n.firstChild,"tr")&&i(e).children("tbody")[0]||e}function rr(e){return e.type=(e.getAttribute("type")!==null)+"/"+e.type,e}function ir(e){return(e.type||"").slice(0,5)==="true/"?e.type=e.type.slice(5):e.removeAttribute("type"),e}function st(e,n){var t,r,a,s,o,u,c;if(n.nodeType===1){if(k.hasData(e)&&(s=k.get(e),c=s.events,c)){k.remove(n,"handle events");for(a in c)for(t=0,r=c[a].length;t<r;t++)i.event.add(n,a,c[a][t])}$.hasData(e)&&(o=$.access(e),u=i.extend({},o),$.set(n,u))}}function ar(e,n){var t=n.nodeName.toLowerCase();t==="input"&&Ge.test(e.type)?n.checked=e.checked:(t==="input"||t==="textarea")&&(n.defaultValue=e.defaultValue)}function Ue(e,n,t,r){n=xe(n);var a,s,o,u,c,d,g=0,v=e.length,m=v-1,y=n[0],j=L(y);if(j||v>1&&typeof y=="string"&&!T.checkClone&&nr.test(y))return e.each(function(N){var O=e.eq(N);j&&(n[0]=y.call(this,N,O.html())),Ue(O,n,t,r)});if(v&&(a=rt(n,e[0].ownerDocument,!1,e,r),s=a.firstChild,a.childNodes.length===1&&(a=s),s||r)){for(o=i.map(ee(a,"script"),rr),u=o.length;g<v;g++)c=a,g!==m&&(c=i.clone(c,!0,!0),u&&i.merge(o,ee(c,"script"))),t.call(e[g],c,g);if(u)for(d=o[o.length-1].ownerDocument,i.map(o,ir),g=0;g<u;g++)c=o[g],tt.test(c.type||"")&&!k.access(c,"globalEval")&&i.contains(d,c)&&(c.src&&(c.type||"").toLowerCase()!=="module"?i._evalUrl&&!c.noModule&&i._evalUrl(c.src,{nonce:c.nonce||c.getAttribute("nonce")},d):Kn(c.textContent.replace(tr,""),c,d))}return e}function ot(e,n,t){for(var r,a=n?i.filter(n,e):e,s=0;(r=a[s])!=null;s++)!t&&r.nodeType===1&&i.cleanData(ee(r)),r.parentNode&&(t&&Re(r)&&yn(ee(r,"script")),r.parentNode.removeChild(r));return e}i.extend({htmlPrefilter:function(e){return e},clone:function(e,n,t){var r,a,s,o,u=e.cloneNode(!0),c=Re(e);if(!T.noCloneChecked&&(e.nodeType===1||e.nodeType===11)&&!i.isXMLDoc(e))for(o=ee(u),s=ee(e),r=0,a=s.length;r<a;r++)ar(s[r],o[r]);if(n)if(t)for(s=s||ee(e),o=o||ee(u),r=0,a=s.length;r<a;r++)st(s[r],o[r]);else st(e,u);return o=ee(u,"script"),o.length>0&&yn(o,!c&&ee(e,"script")),u},cleanData:function(e){for(var n,t,r,a=i.event.special,s=0;(t=e[s])!==void 0;s++)if(Je(t)){if(n=t[k.expando]){if(n.events)for(r in n.events)a[r]?i.event.remove(t,r):i.removeEvent(t,r,n.handle);t[k.expando]=void 0}t[$.expando]&&(t[$.expando]=void 0)}}}),i.fn.extend({detach:function(e){return ot(this,e,!0)},remove:function(e){return ot(this,e)},text:function(e){return Ae(this,function(n){return n===void 0?i.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=n)})},null,e,arguments.length)},append:function(){return Ue(this,arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var n=at(this,e);n.appendChild(e)}})},prepend:function(){return Ue(this,arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var n=at(this,e);n.insertBefore(e,n.firstChild)}})},before:function(){return Ue(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ue(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,n=0;(e=this[n])!=null;n++)e.nodeType===1&&(i.cleanData(ee(e,!1)),e.textContent="");return this},clone:function(e,n){return e=e??!1,n=n??e,this.map(function(){return i.clone(this,e,n)})},html:function(e){return Ae(this,function(n){var t=this[0]||{},r=0,a=this.length;if(n===void 0&&t.nodeType===1)return t.innerHTML;if(typeof n=="string"&&!er.test(n)&&!re[(nt.exec(n)||["",""])[1].toLowerCase()]){n=i.htmlPrefilter(n);try{for(;r<a;r++)t=this[r]||{},t.nodeType===1&&(i.cleanData(ee(t,!1)),t.innerHTML=n);t=0}catch{}}t&&this.empty().append(n)},null,e,arguments.length)},replaceWith:function(){var e=[];return Ue(this,arguments,function(n){var t=this.parentNode;i.inArray(this,e)<0&&(i.cleanData(ee(this)),t&&t.replaceChild(n,this))},e)}}),i.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,n){i.fn[e]=function(t){for(var r,a=[],s=i(t),o=s.length-1,u=0;u<=o;u++)r=u===o?this:this.clone(!0),i(s[u])[n](r),Ie.apply(a,r.get());return this.pushStack(a)}});var xn=new RegExp("^("+Zn+")(?!px)[a-z%]+$","i"),En=/^--/,cn=function(e){var n=e.ownerDocument.defaultView;return(!n||!n.opener)&&(n=w),n.getComputedStyle(e)},lt=function(e,n,t){var r,a,s={};for(a in n)s[a]=e.style[a],e.style[a]=n[a];r=t.call(e);for(a in n)e.style[a]=s[a];return r},sr=new RegExp(ve.join("|"),"i");(function(){function e(){if(d){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",d.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ke.appendChild(c).appendChild(d);var g=w.getComputedStyle(d);t=g.top!=="1%",u=n(g.marginLeft)===12,d.style.right="60%",s=n(g.right)===36,r=n(g.width)===36,d.style.position="absolute",a=n(d.offsetWidth/3)===12,ke.removeChild(c),d=null}}function n(g){return Math.round(parseFloat(g))}var t,r,a,s,o,u,c=B.createElement("div"),d=B.createElement("div");d.style&&(d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",T.clearCloneStyle=d.style.backgroundClip==="content-box",i.extend(T,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),s},pixelPosition:function(){return e(),t},reliableMarginLeft:function(){return e(),u},scrollboxSize:function(){return e(),a},reliableTrDimensions:function(){var g,v,m,y;return o==null&&(g=B.createElement("table"),v=B.createElement("tr"),m=B.createElement("div"),g.style.cssText="position:absolute;left:-11111px;border-collapse:separate",v.style.cssText="box-sizing:content-box;border:1px solid",v.style.height="1px",m.style.height="9px",m.style.display="block",ke.appendChild(g).appendChild(v).appendChild(m),y=w.getComputedStyle(v),o=parseInt(y.height,10)+parseInt(y.borderTopWidth,10)+parseInt(y.borderBottomWidth,10)===v.offsetHeight,ke.removeChild(g)),o}}))})();function ze(e,n,t){var r,a,s,o,u=En.test(n),c=e.style;return t=t||cn(e),t&&(o=t.getPropertyValue(n)||t[n],u&&o&&(o=o.replace(Fe,"$1")||void 0),o===""&&!Re(e)&&(o=i.style(e,n)),!T.pixelBoxStyles()&&xn.test(o)&&sr.test(n)&&(r=c.width,a=c.minWidth,s=c.maxWidth,c.minWidth=c.maxWidth=c.width=o,o=t.width,c.width=r,c.minWidth=a,c.maxWidth=s)),o!==void 0?o+"":o}function ct(e,n){return{get:function(){if(e()){delete this.get;return}return(this.get=n).apply(this,arguments)}}}var ut=["Webkit","Moz","ms"],pt=B.createElement("div").style,dt={};function or(e){for(var n=e[0].toUpperCase()+e.slice(1),t=ut.length;t--;)if(e=ut[t]+n,e in pt)return e}function wn(e){var n=i.cssProps[e]||dt[e];return n||(e in pt?e:dt[e]=or(e)||e)}var lr=/^(none|table(?!-c[ea]).+)/,cr={position:"absolute",visibility:"hidden",display:"block"},ht={letterSpacing:"0",fontWeight:"400"};function ft(e,n,t){var r=Ye.exec(n);return r?Math.max(0,r[2]-(t||0))+(r[3]||"px"):n}function Mn(e,n,t,r,a,s){var o=n==="width"?1:0,u=0,c=0,d=0;if(t===(r?"border":"content"))return 0;for(;o<4;o+=2)t==="margin"&&(d+=i.css(e,t+ve[o],!0,a)),r?(t==="content"&&(c-=i.css(e,"padding"+ve[o],!0,a)),t!=="margin"&&(c-=i.css(e,"border"+ve[o]+"Width",!0,a))):(c+=i.css(e,"padding"+ve[o],!0,a),t!=="padding"?c+=i.css(e,"border"+ve[o]+"Width",!0,a):u+=i.css(e,"border"+ve[o]+"Width",!0,a));return!r&&s>=0&&(c+=Math.max(0,Math.ceil(e["offset"+n[0].toUpperCase()+n.slice(1)]-s-c-u-.5))||0),c+d}function mt(e,n,t){var r=cn(e),a=!T.boxSizingReliable()||t,s=a&&i.css(e,"boxSizing",!1,r)==="border-box",o=s,u=ze(e,n,r),c="offset"+n[0].toUpperCase()+n.slice(1);if(xn.test(u)){if(!t)return u;u="auto"}return(!T.boxSizingReliable()&&s||!T.reliableTrDimensions()&&J(e,"tr")||u==="auto"||!parseFloat(u)&&i.css(e,"display",!1,r)==="inline")&&e.getClientRects().length&&(s=i.css(e,"boxSizing",!1,r)==="border-box",o=c in e,o&&(u=e[c])),u=parseFloat(u)||0,u+Mn(e,n,t||(s?"border":"content"),o,r,u)+"px"}i.extend({cssHooks:{opacity:{get:function(e,n){if(n){var t=ze(e,"opacity");return t===""?"1":t}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,n,t,r){if(!(!e||e.nodeType===3||e.nodeType===8||!e.style)){var a,s,o,u=ce(n),c=En.test(n),d=e.style;if(c||(n=wn(u)),o=i.cssHooks[n]||i.cssHooks[u],t!==void 0){if(s=typeof t,s==="string"&&(a=Ye.exec(t))&&a[1]&&(t=$n(e,n,a),s="number"),t==null||t!==t)return;s==="number"&&!c&&(t+=a&&a[3]||(i.cssNumber[u]?"":"px")),!T.clearCloneStyle&&t===""&&n.indexOf("background")===0&&(d[n]="inherit"),(!o||!("set"in o)||(t=o.set(e,t,r))!==void 0)&&(c?d.setProperty(n,t):d[n]=t)}else return o&&"get"in o&&(a=o.get(e,!1,r))!==void 0?a:d[n]}},css:function(e,n,t,r){var a,s,o,u=ce(n),c=En.test(n);return c||(n=wn(u)),o=i.cssHooks[n]||i.cssHooks[u],o&&"get"in o&&(a=o.get(e,!0,t)),a===void 0&&(a=ze(e,n,r)),a==="normal"&&n in ht&&(a=ht[n]),t===""||t?(s=parseFloat(a),t===!0||isFinite(s)?s||0:a):a}}),i.each(["height","width"],function(e,n){i.cssHooks[n]={get:function(t,r,a){if(r)return lr.test(i.css(t,"display"))&&(!t.getClientRects().length||!t.getBoundingClientRect().width)?lt(t,cr,function(){return mt(t,n,a)}):mt(t,n,a)},set:function(t,r,a){var s,o=cn(t),u=!T.scrollboxSize()&&o.position==="absolute",c=u||a,d=c&&i.css(t,"boxSizing",!1,o)==="border-box",g=a?Mn(t,n,a,d,o):0;return d&&u&&(g-=Math.ceil(t["offset"+n[0].toUpperCase()+n.slice(1)]-parseFloat(o[n])-Mn(t,n,"border",!1,o)-.5)),g&&(s=Ye.exec(r))&&(s[3]||"px")!=="px"&&(t.style[n]=r,r=i.css(t,n)),ft(t,r,g)}}}),i.cssHooks.marginLeft=ct(T.reliableMarginLeft,function(e,n){if(n)return(parseFloat(ze(e,"marginLeft"))||e.getBoundingClientRect().left-lt(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),i.each({margin:"",padding:"",border:"Width"},function(e,n){i.cssHooks[e+n]={expand:function(t){for(var r=0,a={},s=typeof t=="string"?t.split(" "):[t];r<4;r++)a[e+ve[r]+n]=s[r]||s[r-2]||s[0];return a}},e!=="margin"&&(i.cssHooks[e+n].set=ft)}),i.fn.extend({css:function(e,n){return Ae(this,function(t,r,a){var s,o,u={},c=0;if(Array.isArray(r)){for(s=cn(t),o=r.length;c<o;c++)u[r[c]]=i.css(t,r[c],!1,s);return u}return a!==void 0?i.style(t,r,a):i.css(t,r)},e,n,arguments.length>1)}});function ne(e,n,t,r,a){return new ne.prototype.init(e,n,t,r,a)}i.Tween=ne,ne.prototype={constructor:ne,init:function(e,n,t,r,a,s){this.elem=e,this.prop=t,this.easing=a||i.easing._default,this.options=n,this.start=this.now=this.cur(),this.end=r,this.unit=s||(i.cssNumber[t]?"":"px")},cur:function(){var e=ne.propHooks[this.prop];return e&&e.get?e.get(this):ne.propHooks._default.get(this)},run:function(e){var n,t=ne.propHooks[this.prop];return this.options.duration?this.pos=n=i.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=n=e,this.now=(this.end-this.start)*n+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),t&&t.set?t.set(this):ne.propHooks._default.set(this),this}},ne.prototype.init.prototype=ne.prototype,ne.propHooks={_default:{get:function(e){var n;return e.elem.nodeType!==1||e.elem[e.prop]!=null&&e.elem.style[e.prop]==null?e.elem[e.prop]:(n=i.css(e.elem,e.prop,""),!n||n==="auto"?0:n)},set:function(e){i.fx.step[e.prop]?i.fx.step[e.prop](e):e.elem.nodeType===1&&(i.cssHooks[e.prop]||e.elem.style[wn(e.prop)]!=null)?i.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},ne.propHooks.scrollTop=ne.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},i.easing={linear:function(e){return e},swing:function(e){return .5-Math.cos(e*Math.PI)/2},_default:"swing"},i.fx=ne.prototype.init,i.fx.step={};var We,un,ur=/^(?:toggle|show|hide)$/,pr=/queueHooks$/;function kn(){un&&(B.hidden===!1&&w.requestAnimationFrame?w.requestAnimationFrame(kn):w.setTimeout(kn,i.fx.interval),i.fx.tick())}function _t(){return w.setTimeout(function(){We=void 0}),We=Date.now()}function pn(e,n){var t,r=0,a={height:e};for(n=n?1:0;r<4;r+=2-n)t=ve[r],a["margin"+t]=a["padding"+t]=e;return n&&(a.opacity=a.width=e),a}function gt(e,n,t){for(var r,a=(se.tweeners[n]||[]).concat(se.tweeners["*"]),s=0,o=a.length;s<o;s++)if(r=a[s].call(t,n,e))return r}function dr(e,n,t){var r,a,s,o,u,c,d,g,v="width"in n||"height"in n,m=this,y={},j=e.style,N=e.nodeType&&on(e),O=k.get(e,"fxshow");t.queue||(o=i._queueHooks(e,"fx"),o.unqueued==null&&(o.unqueued=0,u=o.empty.fire,o.empty.fire=function(){o.unqueued||u()}),o.unqueued++,m.always(function(){m.always(function(){o.unqueued--,i.queue(e,"fx").length||o.empty.fire()})}));for(r in n)if(a=n[r],ur.test(a)){if(delete n[r],s=s||a==="toggle",a===(N?"hide":"show"))if(a==="show"&&O&&O[r]!==void 0)N=!0;else continue;y[r]=O&&O[r]||i.style(e,r)}if(c=!i.isEmptyObject(n),!(!c&&i.isEmptyObject(y))){v&&e.nodeType===1&&(t.overflow=[j.overflow,j.overflowX,j.overflowY],d=O&&O.display,d==null&&(d=k.get(e,"display")),g=i.css(e,"display"),g==="none"&&(d?g=d:(Pe([e],!0),d=e.style.display||d,g=i.css(e,"display"),Pe([e]))),(g==="inline"||g==="inline-block"&&d!=null)&&i.css(e,"float")==="none"&&(c||(m.done(function(){j.display=d}),d==null&&(g=j.display,d=g==="none"?"":g)),j.display="inline-block")),t.overflow&&(j.overflow="hidden",m.always(function(){j.overflow=t.overflow[0],j.overflowX=t.overflow[1],j.overflowY=t.overflow[2]})),c=!1;for(r in y)c||(O?"hidden"in O&&(N=O.hidden):O=k.access(e,"fxshow",{display:d}),s&&(O.hidden=!N),N&&Pe([e],!0),m.done(function(){N||Pe([e]),k.remove(e,"fxshow");for(r in y)i.style(e,r,y[r])})),c=gt(N?O[r]:0,r,m),r in O||(O[r]=c.start,N&&(c.end=c.start,c.start=0))}}function hr(e,n){var t,r,a,s,o;for(t in e)if(r=ce(t),a=n[r],s=e[t],Array.isArray(s)&&(a=s[1],s=e[t]=s[0]),t!==r&&(e[r]=s,delete e[t]),o=i.cssHooks[r],o&&"expand"in o){s=o.expand(s),delete e[r];for(t in s)t in e||(e[t]=s[t],n[t]=a)}else n[r]=a}function se(e,n,t){var r,a,s=0,o=se.prefilters.length,u=i.Deferred().always(function(){delete c.elem}),c=function(){if(a)return!1;for(var v=We||_t(),m=Math.max(0,d.startTime+d.duration-v),y=m/d.duration||0,j=1-y,N=0,O=d.tweens.length;N<O;N++)d.tweens[N].run(j);return u.notifyWith(e,[d,j,m]),j<1&&O?m:(O||u.notifyWith(e,[d,1,0]),u.resolveWith(e,[d]),!1)},d=u.promise({elem:e,props:i.extend({},n),opts:i.extend(!0,{specialEasing:{},easing:i.easing._default},t),originalProperties:n,originalOptions:t,startTime:We||_t(),duration:t.duration,tweens:[],createTween:function(v,m){var y=i.Tween(e,d.opts,v,m,d.opts.specialEasing[v]||d.opts.easing);return d.tweens.push(y),y},stop:function(v){var m=0,y=v?d.tweens.length:0;if(a)return this;for(a=!0;m<y;m++)d.tweens[m].run(1);return v?(u.notifyWith(e,[d,1,0]),u.resolveWith(e,[d,v])):u.rejectWith(e,[d,v]),this}}),g=d.props;for(hr(g,d.opts.specialEasing);s<o;s++)if(r=se.prefilters[s].call(d,e,g,d.opts),r)return L(r.stop)&&(i._queueHooks(d.elem,d.opts.queue).stop=r.stop.bind(r)),r;return i.map(g,gt,d),L(d.opts.start)&&d.opts.start.call(e,d),d.progress(d.opts.progress).done(d.opts.done,d.opts.complete).fail(d.opts.fail).always(d.opts.always),i.fx.timer(i.extend(c,{elem:e,anim:d,queue:d.opts.queue})),d}i.Animation=i.extend(se,{tweeners:{"*":[function(e,n){var t=this.createTween(e,n);return $n(t.elem,e,Ye.exec(n),t),t}]},tweener:function(e,n){L(e)?(n=e,e=["*"]):e=e.match(le);for(var t,r=0,a=e.length;r<a;r++)t=e[r],se.tweeners[t]=se.tweeners[t]||[],se.tweeners[t].unshift(n)},prefilters:[dr],prefilter:function(e,n){n?se.prefilters.unshift(e):se.prefilters.push(e)}}),i.speed=function(e,n,t){var r=e&&typeof e=="object"?i.extend({},e):{complete:t||!t&&n||L(e)&&e,duration:e,easing:t&&n||n&&!L(n)&&n};return i.fx.off?r.duration=0:typeof r.duration!="number"&&(r.duration in i.fx.speeds?r.duration=i.fx.speeds[r.duration]:r.duration=i.fx.speeds._default),(r.queue==null||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){L(r.old)&&r.old.call(this),r.queue&&i.dequeue(this,r.queue)},r},i.fn.extend({fadeTo:function(e,n,t,r){return this.filter(on).css("opacity",0).show().end().animate({opacity:n},e,t,r)},animate:function(e,n,t,r){var a=i.isEmptyObject(e),s=i.speed(n,t,r),o=function(){var u=se(this,i.extend({},e),s);(a||k.get(this,"finish"))&&u.stop(!0)};return o.finish=o,a||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,t){var r=function(a){var s=a.stop;delete a.stop,s(t)};return typeof e!="string"&&(t=n,n=e,e=void 0),n&&this.queue(e||"fx",[]),this.each(function(){var a=!0,s=e!=null&&e+"queueHooks",o=i.timers,u=k.get(this);if(s)u[s]&&u[s].stop&&r(u[s]);else for(s in u)u[s]&&u[s].stop&&pr.test(s)&&r(u[s]);for(s=o.length;s--;)o[s].elem===this&&(e==null||o[s].queue===e)&&(o[s].anim.stop(t),a=!1,o.splice(s,1));(a||!t)&&i.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var n,t=k.get(this),r=t[e+"queue"],a=t[e+"queueHooks"],s=i.timers,o=r?r.length:0;for(t.finish=!0,i.queue(this,e,[]),a&&a.stop&&a.stop.call(this,!0),n=s.length;n--;)s[n].elem===this&&s[n].queue===e&&(s[n].anim.stop(!0),s.splice(n,1));for(n=0;n<o;n++)r[n]&&r[n].finish&&r[n].finish.call(this);delete t.finish})}}),i.each(["toggle","show","hide"],function(e,n){var t=i.fn[n];i.fn[n]=function(r,a,s){return r==null||typeof r=="boolean"?t.apply(this,arguments):this.animate(pn(n,!0),r,a,s)}}),i.each({slideDown:pn("show"),slideUp:pn("hide"),slideToggle:pn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,n){i.fn[e]=function(t,r,a){return this.animate(n,t,r,a)}}),i.timers=[],i.fx.tick=function(){var e,n=0,t=i.timers;for(We=Date.now();n<t.length;n++)e=t[n],!e()&&t[n]===e&&t.splice(n--,1);t.length||i.fx.stop(),We=void 0},i.fx.timer=function(e){i.timers.push(e),i.fx.start()},i.fx.interval=13,i.fx.start=function(){un||(un=!0,kn())},i.fx.stop=function(){un=null},i.fx.speeds={slow:600,fast:200,_default:400},i.fn.delay=function(e,n){return e=i.fx&&i.fx.speeds[e]||e,n=n||"fx",this.queue(n,function(t,r){var a=w.setTimeout(t,e);r.stop=function(){w.clearTimeout(a)}})},(function(){var e=B.createElement("input"),n=B.createElement("select"),t=n.appendChild(B.createElement("option"));e.type="checkbox",T.checkOn=e.value!=="",T.optSelected=t.selected,e=B.createElement("input"),e.value="t",e.type="radio",T.radioValue=e.value==="t"})();var At,Xe=i.expr.attrHandle;i.fn.extend({attr:function(e,n){return Ae(this,i.attr,e,n,arguments.length>1)},removeAttr:function(e){return this.each(function(){i.removeAttr(this,e)})}}),i.extend({attr:function(e,n,t){var r,a,s=e.nodeType;if(!(s===3||s===8||s===2)){if(typeof e.getAttribute>"u")return i.prop(e,n,t);if((s!==1||!i.isXMLDoc(e))&&(a=i.attrHooks[n.toLowerCase()]||(i.expr.match.bool.test(n)?At:void 0)),t!==void 0){if(t===null){i.removeAttr(e,n);return}return a&&"set"in a&&(r=a.set(e,t,n))!==void 0?r:(e.setAttribute(n,t+""),t)}return a&&"get"in a&&(r=a.get(e,n))!==null?r:(r=i.find.attr(e,n),r??void 0)}},attrHooks:{type:{set:function(e,n){if(!T.radioValue&&n==="radio"&&J(e,"input")){var t=e.value;return e.setAttribute("type",n),t&&(e.value=t),n}}}},removeAttr:function(e,n){var t,r=0,a=n&&n.match(le);if(a&&e.nodeType===1)for(;t=a[r++];)e.removeAttribute(t)}}),At={set:function(e,n,t){return n===!1?i.removeAttr(e,t):e.setAttribute(t,t),t}},i.each(i.expr.match.bool.source.match(/\w+/g),function(e,n){var t=Xe[n]||i.find.attr;Xe[n]=function(r,a,s){var o,u,c=a.toLowerCase();return s||(u=Xe[c],Xe[c]=o,o=t(r,a,s)!=null?c:null,Xe[c]=u),o}});var fr=/^(?:input|select|textarea|button)$/i,mr=/^(?:a|area)$/i;i.fn.extend({prop:function(e,n){return Ae(this,i.prop,e,n,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[i.propFix[e]||e]})}}),i.extend({prop:function(e,n,t){var r,a,s=e.nodeType;if(!(s===3||s===8||s===2))return(s!==1||!i.isXMLDoc(e))&&(n=i.propFix[n]||n,a=i.propHooks[n]),t!==void 0?a&&"set"in a&&(r=a.set(e,t,n))!==void 0?r:e[n]=t:a&&"get"in a&&(r=a.get(e,n))!==null?r:e[n]},propHooks:{tabIndex:{get:function(e){var n=i.find.attr(e,"tabindex");return n?parseInt(n,10):fr.test(e.nodeName)||mr.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),T.optSelected||(i.propHooks.selected={get:function(e){var n=e.parentNode;return n&&n.parentNode&&n.parentNode.selectedIndex,null},set:function(e){var n=e.parentNode;n&&(n.selectedIndex,n.parentNode&&n.parentNode.selectedIndex)}}),i.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){i.propFix[this.toLowerCase()]=this});function Ce(e){var n=e.match(le)||[];return n.join(" ")}function Se(e){return e.getAttribute&&e.getAttribute("class")||""}function Cn(e){return Array.isArray(e)?e:typeof e=="string"?e.match(le)||[]:[]}i.fn.extend({addClass:function(e){var n,t,r,a,s,o;return L(e)?this.each(function(u){i(this).addClass(e.call(this,u,Se(this)))}):(n=Cn(e),n.length?this.each(function(){if(r=Se(this),t=this.nodeType===1&&" "+Ce(r)+" ",t){for(s=0;s<n.length;s++)a=n[s],t.indexOf(" "+a+" ")<0&&(t+=a+" ");o=Ce(t),r!==o&&this.setAttribute("class",o)}}):this)},removeClass:function(e){var n,t,r,a,s,o;return L(e)?this.each(function(u){i(this).removeClass(e.call(this,u,Se(this)))}):arguments.length?(n=Cn(e),n.length?this.each(function(){if(r=Se(this),t=this.nodeType===1&&" "+Ce(r)+" ",t){for(s=0;s<n.length;s++)for(a=n[s];t.indexOf(" "+a+" ")>-1;)t=t.replace(" "+a+" "," ");o=Ce(t),r!==o&&this.setAttribute("class",o)}}):this):this.attr("class","")},toggleClass:function(e,n){var t,r,a,s,o=typeof e,u=o==="string"||Array.isArray(e);return L(e)?this.each(function(c){i(this).toggleClass(e.call(this,c,Se(this),n),n)}):typeof n=="boolean"&&u?n?this.addClass(e):this.removeClass(e):(t=Cn(e),this.each(function(){if(u)for(s=i(this),a=0;a<t.length;a++)r=t[a],s.hasClass(r)?s.removeClass(r):s.addClass(r);else(e===void 0||o==="boolean")&&(r=Se(this),r&&k.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||e===!1?"":k.get(this,"__className__")||""))}))},hasClass:function(e){var n,t,r=0;for(n=" "+e+" ";t=this[r++];)if(t.nodeType===1&&(" "+Ce(Se(t))+" ").indexOf(n)>-1)return!0;return!1}});var _r=/\r/g;i.fn.extend({val:function(e){var n,t,r,a=this[0];return arguments.length?(r=L(e),this.each(function(s){var o;this.nodeType===1&&(r?o=e.call(this,s,i(this).val()):o=e,o==null?o="":typeof o=="number"?o+="":Array.isArray(o)&&(o=i.map(o,function(u){return u==null?"":u+""})),n=i.valHooks[this.type]||i.valHooks[this.nodeName.toLowerCase()],(!n||!("set"in n)||n.set(this,o,"value")===void 0)&&(this.value=o))})):a?(n=i.valHooks[a.type]||i.valHooks[a.nodeName.toLowerCase()],n&&"get"in n&&(t=n.get(a,"value"))!==void 0?t:(t=a.value,typeof t=="string"?t.replace(_r,""):t??"")):void 0}}),i.extend({valHooks:{option:{get:function(e){var n=i.find.attr(e,"value");return n??Ce(i.text(e))}},select:{get:function(e){var n,t,r,a=e.options,s=e.selectedIndex,o=e.type==="select-one",u=o?null:[],c=o?s+1:a.length;for(s<0?r=c:r=o?s:0;r<c;r++)if(t=a[r],(t.selected||r===s)&&!t.disabled&&(!t.parentNode.disabled||!J(t.parentNode,"optgroup"))){if(n=i(t).val(),o)return n;u.push(n)}return u},set:function(e,n){for(var t,r,a=e.options,s=i.makeArray(n),o=a.length;o--;)r=a[o],(r.selected=i.inArray(i.valHooks.option.get(r),s)>-1)&&(t=!0);return t||(e.selectedIndex=-1),s}}}}),i.each(["radio","checkbox"],function(){i.valHooks[this]={set:function(e,n){if(Array.isArray(n))return e.checked=i.inArray(i(e).val(),n)>-1}},T.checkOn||(i.valHooks[this].get=function(e){return e.getAttribute("value")===null?"on":e.value})});var Ze=w.location,vt={guid:Date.now()},Sn=/\?/;i.parseXML=function(e){var n,t;if(!e||typeof e!="string")return null;try{n=new w.DOMParser().parseFromString(e,"text/xml")}catch{}return t=n&&n.getElementsByTagName("parsererror")[0],(!n||t)&&i.error("Invalid XML: "+(t?i.map(t.childNodes,function(r){return r.textContent}).join(`
`):e)),n};var yt=/^(?:focusinfocus|focusoutblur)$/,bt=function(e){e.stopPropagation()};i.extend(i.event,{trigger:function(e,n,t,r){var a,s,o,u,c,d,g,v,m=[t||B],y=He.call(e,"type")?e.type:e,j=He.call(e,"namespace")?e.namespace.split("."):[];if(s=v=o=t=t||B,!(t.nodeType===3||t.nodeType===8)&&!yt.test(y+i.event.triggered)&&(y.indexOf(".")>-1&&(j=y.split("."),y=j.shift(),j.sort()),c=y.indexOf(":")<0&&"on"+y,e=e[i.expando]?e:new i.Event(y,typeof e=="object"&&e),e.isTrigger=r?2:3,e.namespace=j.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+j.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=t),n=n==null?[e]:i.makeArray(n,[e]),g=i.event.special[y]||{},!(!r&&g.trigger&&g.trigger.apply(t,n)===!1))){if(!r&&!g.noBubble&&!Be(t)){for(u=g.delegateType||y,yt.test(u+y)||(s=s.parentNode);s;s=s.parentNode)m.push(s),o=s;o===(t.ownerDocument||B)&&m.push(o.defaultView||o.parentWindow||w)}for(a=0;(s=m[a++])&&!e.isPropagationStopped();)v=s,e.type=a>1?u:g.bindType||y,d=(k.get(s,"events")||Object.create(null))[e.type]&&k.get(s,"handle"),d&&d.apply(s,n),d=c&&s[c],d&&d.apply&&Je(s)&&(e.result=d.apply(s,n),e.result===!1&&e.preventDefault());return e.type=y,!r&&!e.isDefaultPrevented()&&(!g._default||g._default.apply(m.pop(),n)===!1)&&Je(t)&&c&&L(t[y])&&!Be(t)&&(o=t[c],o&&(t[c]=null),i.event.triggered=y,e.isPropagationStopped()&&v.addEventListener(y,bt),t[y](),e.isPropagationStopped()&&v.removeEventListener(y,bt),i.event.triggered=void 0,o&&(t[c]=o)),e.result}},simulate:function(e,n,t){var r=i.extend(new i.Event,t,{type:e,isSimulated:!0});i.event.trigger(r,null,n)}}),i.fn.extend({trigger:function(e,n){return this.each(function(){i.event.trigger(e,n,this)})},triggerHandler:function(e,n){var t=this[0];if(t)return i.event.trigger(e,n,t,!0)}});var gr=/\[\]$/,xt=/\r?\n/g,Ar=/^(?:submit|button|image|reset|file)$/i,vr=/^(?:input|select|textarea|keygen)/i;function jn(e,n,t,r){var a;if(Array.isArray(n))i.each(n,function(s,o){t||gr.test(e)?r(e,o):jn(e+"["+(typeof o=="object"&&o!=null?s:"")+"]",o,t,r)});else if(!t&&Te(n)==="object")for(a in n)jn(e+"["+a+"]",n[a],t,r);else r(e,n)}i.param=function(e,n){var t,r=[],a=function(s,o){var u=L(o)?o():o;r[r.length]=encodeURIComponent(s)+"="+encodeURIComponent(u??"")};if(e==null)return"";if(Array.isArray(e)||e.jquery&&!i.isPlainObject(e))i.each(e,function(){a(this.name,this.value)});else for(t in e)jn(t,e[t],n,a);return r.join("&")},i.fn.extend({serialize:function(){return i.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=i.prop(this,"elements");return e?i.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!i(this).is(":disabled")&&vr.test(this.nodeName)&&!Ar.test(e)&&(this.checked||!Ge.test(e))}).map(function(e,n){var t=i(this).val();return t==null?null:Array.isArray(t)?i.map(t,function(r){return{name:n.name,value:r.replace(xt,`\r
`)}}):{name:n.name,value:t.replace(xt,`\r
`)}}).get()}});var yr=/%20/g,br=/#.*$/,xr=/([?&])_=[^&]*/,Er=/^(.*?):[ \t]*([^\r\n]*)$/mg,wr=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mr=/^(?:GET|HEAD)$/,kr=/^\/\//,Et={},Dn={},wt="*/".concat("*"),In=B.createElement("a");In.href=Ze.href;function Mt(e){return function(n,t){typeof n!="string"&&(t=n,n="*");var r,a=0,s=n.toLowerCase().match(le)||[];if(L(t))for(;r=s[a++];)r[0]==="+"?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(t)):(e[r]=e[r]||[]).push(t)}}function kt(e,n,t,r){var a={},s=e===Dn;function o(u){var c;return a[u]=!0,i.each(e[u]||[],function(d,g){var v=g(n,t,r);if(typeof v=="string"&&!s&&!a[v])return n.dataTypes.unshift(v),o(v),!1;if(s)return!(c=v)}),c}return o(n.dataTypes[0])||!a["*"]&&o("*")}function Bn(e,n){var t,r,a=i.ajaxSettings.flatOptions||{};for(t in n)n[t]!==void 0&&((a[t]?e:r||(r={}))[t]=n[t]);return r&&i.extend(!0,e,r),e}function Cr(e,n,t){for(var r,a,s,o,u=e.contents,c=e.dataTypes;c[0]==="*";)c.shift(),r===void 0&&(r=e.mimeType||n.getResponseHeader("Content-Type"));if(r){for(a in u)if(u[a]&&u[a].test(r)){c.unshift(a);break}}if(c[0]in t)s=c[0];else{for(a in t){if(!c[0]||e.converters[a+" "+c[0]]){s=a;break}o||(o=a)}s=s||o}if(s)return s!==c[0]&&c.unshift(s),t[s]}function Sr(e,n,t,r){var a,s,o,u,c,d={},g=e.dataTypes.slice();if(g[1])for(o in e.converters)d[o.toLowerCase()]=e.converters[o];for(s=g.shift();s;)if(e.responseFields[s]&&(t[e.responseFields[s]]=n),!c&&r&&e.dataFilter&&(n=e.dataFilter(n,e.dataType)),c=s,s=g.shift(),s){if(s==="*")s=c;else if(c!=="*"&&c!==s){if(o=d[c+" "+s]||d["* "+s],!o){for(a in d)if(u=a.split(" "),u[1]===s&&(o=d[c+" "+u[0]]||d["* "+u[0]],o)){o===!0?o=d[a]:d[a]!==!0&&(s=u[0],g.unshift(u[1]));break}}if(o!==!0)if(o&&e.throws)n=o(n);else try{n=o(n)}catch(v){return{state:"parsererror",error:o?v:"No conversion from "+c+" to "+s}}}}return{state:"success",data:n}}i.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ze.href,type:"GET",isLocal:wr.test(Ze.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":wt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":i.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,n){return n?Bn(Bn(e,i.ajaxSettings),n):Bn(i.ajaxSettings,e)},ajaxPrefilter:Mt(Et),ajaxTransport:Mt(Dn),ajax:function(e,n){typeof e=="object"&&(n=e,e=void 0),n=n||{};var t,r,a,s,o,u,c,d,g,v,m=i.ajaxSetup({},n),y=m.context||m,j=m.context&&(y.nodeType||y.jquery)?i(y):i.event,N=i.Deferred(),O=i.Callbacks("once memory"),z=m.statusCode||{},G={},ue={},pe="canceled",q={readyState:0,getResponseHeader:function(U){var Y;if(c){if(!s)for(s={};Y=Er.exec(a);)s[Y[1].toLowerCase()+" "]=(s[Y[1].toLowerCase()+" "]||[]).concat(Y[2]);Y=s[U.toLowerCase()+" "]}return Y==null?null:Y.join(", ")},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(U,Y){return c==null&&(U=ue[U.toLowerCase()]=ue[U.toLowerCase()]||U,G[U]=Y),this},overrideMimeType:function(U){return c==null&&(m.mimeType=U),this},statusCode:function(U){var Y;if(U)if(c)q.always(U[q.status]);else for(Y in U)z[Y]=[z[Y],U[Y]];return this},abort:function(U){var Y=U||pe;return t&&t.abort(Y),je(0,Y),this}};if(N.promise(q),m.url=((e||m.url||Ze.href)+"").replace(kr,Ze.protocol+"//"),m.type=n.method||n.type||m.method||m.type,m.dataTypes=(m.dataType||"*").toLowerCase().match(le)||[""],m.crossDomain==null){u=B.createElement("a");try{u.href=m.url,u.href=u.href,m.crossDomain=In.protocol+"//"+In.host!=u.protocol+"//"+u.host}catch{m.crossDomain=!0}}if(m.data&&m.processData&&typeof m.data!="string"&&(m.data=i.param(m.data,m.traditional)),kt(Et,m,n,q),c)return q;d=i.event&&m.global,d&&i.active++===0&&i.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!Mr.test(m.type),r=m.url.replace(br,""),m.hasContent?m.data&&m.processData&&(m.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(m.data=m.data.replace(yr,"+")):(v=m.url.slice(r.length),m.data&&(m.processData||typeof m.data=="string")&&(r+=(Sn.test(r)?"&":"?")+m.data,delete m.data),m.cache===!1&&(r=r.replace(xr,"$1"),v=(Sn.test(r)?"&":"?")+"_="+vt.guid+++v),m.url=r+v),m.ifModified&&(i.lastModified[r]&&q.setRequestHeader("If-Modified-Since",i.lastModified[r]),i.etag[r]&&q.setRequestHeader("If-None-Match",i.etag[r])),(m.data&&m.hasContent&&m.contentType!==!1||n.contentType)&&q.setRequestHeader("Content-Type",m.contentType),q.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+(m.dataTypes[0]!=="*"?", "+wt+"; q=0.01":""):m.accepts["*"]);for(g in m.headers)q.setRequestHeader(g,m.headers[g]);if(m.beforeSend&&(m.beforeSend.call(y,q,m)===!1||c))return q.abort();if(pe="abort",O.add(m.complete),q.done(m.success),q.fail(m.error),t=kt(Dn,m,n,q),!t)je(-1,"No Transport");else{if(q.readyState=1,d&&j.trigger("ajaxSend",[q,m]),c)return q;m.async&&m.timeout>0&&(o=w.setTimeout(function(){q.abort("timeout")},m.timeout));try{c=!1,t.send(G,je)}catch(U){if(c)throw U;je(-1,U)}}function je(U,Y,en,Ln){var de,nn,he,Ee,we,ie=Y;c||(c=!0,o&&w.clearTimeout(o),t=void 0,a=Ln||"",q.readyState=U>0?4:0,de=U>=200&&U<300||U===304,en&&(Ee=Cr(m,q,en)),!de&&i.inArray("script",m.dataTypes)>-1&&i.inArray("json",m.dataTypes)<0&&(m.converters["text script"]=function(){}),Ee=Sr(m,Ee,q,de),de?(m.ifModified&&(we=q.getResponseHeader("Last-Modified"),we&&(i.lastModified[r]=we),we=q.getResponseHeader("etag"),we&&(i.etag[r]=we)),U===204||m.type==="HEAD"?ie="nocontent":U===304?ie="notmodified":(ie=Ee.state,nn=Ee.data,he=Ee.error,de=!he)):(he=ie,(U||!ie)&&(ie="error",U<0&&(U=0))),q.status=U,q.statusText=(Y||ie)+"",de?N.resolveWith(y,[nn,ie,q]):N.rejectWith(y,[q,ie,he]),q.statusCode(z),z=void 0,d&&j.trigger(de?"ajaxSuccess":"ajaxError",[q,m,de?nn:he]),O.fireWith(y,[q,ie]),d&&(j.trigger("ajaxComplete",[q,m]),--i.active||i.event.trigger("ajaxStop")))}return q},getJSON:function(e,n,t){return i.get(e,n,t,"json")},getScript:function(e,n){return i.get(e,void 0,n,"script")}}),i.each(["get","post"],function(e,n){i[n]=function(t,r,a,s){return L(r)&&(s=s||a,a=r,r=void 0),i.ajax(i.extend({url:t,type:n,dataType:s,data:r,success:a},i.isPlainObject(t)&&t))}}),i.ajaxPrefilter(function(e){var n;for(n in e.headers)n.toLowerCase()==="content-type"&&(e.contentType=e.headers[n]||"")}),i._evalUrl=function(e,n,t){return i.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(r){i.globalEval(r,n,t)}})},i.fn.extend({wrapAll:function(e){var n;return this[0]&&(L(e)&&(e=e.call(this[0])),n=i(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&n.insertBefore(this[0]),n.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t}).append(this)),this},wrapInner:function(e){return L(e)?this.each(function(n){i(this).wrapInner(e.call(this,n))}):this.each(function(){var n=i(this),t=n.contents();t.length?t.wrapAll(e):n.append(e)})},wrap:function(e){var n=L(e);return this.each(function(t){i(this).wrapAll(n?e.call(this,t):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){i(this).replaceWith(this.childNodes)}),this}}),i.expr.pseudos.hidden=function(e){return!i.expr.pseudos.visible(e)},i.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},i.ajaxSettings.xhr=function(){try{return new w.XMLHttpRequest}catch{}};var jr={0:200,1223:204},$e=i.ajaxSettings.xhr();T.cors=!!$e&&"withCredentials"in $e,T.ajax=$e=!!$e,i.ajaxTransport(function(e){var n,t;if(T.cors||$e&&!e.crossDomain)return{send:function(r,a){var s,o=e.xhr();if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(s in e.xhrFields)o[s]=e.xhrFields[s];e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),!e.crossDomain&&!r["X-Requested-With"]&&(r["X-Requested-With"]="XMLHttpRequest");for(s in r)o.setRequestHeader(s,r[s]);n=function(u){return function(){n&&(n=t=o.onload=o.onerror=o.onabort=o.ontimeout=o.onreadystatechange=null,u==="abort"?o.abort():u==="error"?typeof o.status!="number"?a(0,"error"):a(o.status,o.statusText):a(jr[o.status]||o.status,o.statusText,(o.responseType||"text")!=="text"||typeof o.responseText!="string"?{binary:o.response}:{text:o.responseText},o.getAllResponseHeaders()))}},o.onload=n(),t=o.onerror=o.ontimeout=n("error"),o.onabort!==void 0?o.onabort=t:o.onreadystatechange=function(){o.readyState===4&&w.setTimeout(function(){n&&t()})},n=n("abort");try{o.send(e.hasContent&&e.data||null)}catch(u){if(n)throw u}},abort:function(){n&&n()}}}),i.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),i.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return i.globalEval(e),e}}}),i.ajaxPrefilter("script",function(e){e.cache===void 0&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),i.ajaxTransport("script",function(e){if(e.crossDomain||e.scriptAttrs){var n,t;return{send:function(r,a){n=i("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",t=function(s){n.remove(),t=null,s&&a(s.type==="error"?404:200,s.type)}),B.head.appendChild(n[0])},abort:function(){t&&t()}}}});var Ct=[],Tn=/(=)\?(?=&|$)|\?\?/;i.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Ct.pop()||i.expando+"_"+vt.guid++;return this[e]=!0,e}}),i.ajaxPrefilter("json jsonp",function(e,n,t){var r,a,s,o=e.jsonp!==!1&&(Tn.test(e.url)?"url":typeof e.data=="string"&&(e.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Tn.test(e.data)&&"data");if(o||e.dataTypes[0]==="jsonp")return r=e.jsonpCallback=L(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,o?e[o]=e[o].replace(Tn,"$1"+r):e.jsonp!==!1&&(e.url+=(Sn.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return s||i.error(r+" was not called"),s[0]},e.dataTypes[0]="json",a=w[r],w[r]=function(){s=arguments},t.always(function(){a===void 0?i(w).removeProp(r):w[r]=a,e[r]&&(e.jsonpCallback=n.jsonpCallback,Ct.push(r)),s&&L(a)&&a(s[0]),s=a=void 0}),"script"}),T.createHTMLDocument=(function(){var e=B.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",e.childNodes.length===2})(),i.parseHTML=function(e,n,t){if(typeof e!="string")return[];typeof n=="boolean"&&(t=n,n=!1);var r,a,s;return n||(T.createHTMLDocument?(n=B.implementation.createHTMLDocument(""),r=n.createElement("base"),r.href=B.location.href,n.head.appendChild(r)):n=B),a=Qn.exec(e),s=!t&&[],a?[n.createElement(a[1])]:(a=rt([e],n,s),s&&s.length&&i(s).remove(),i.merge([],a.childNodes))},i.fn.load=function(e,n,t){var r,a,s,o=this,u=e.indexOf(" ");return u>-1&&(r=Ce(e.slice(u)),e=e.slice(0,u)),L(n)?(t=n,n=void 0):n&&typeof n=="object"&&(a="POST"),o.length>0&&i.ajax({url:e,type:a||"GET",dataType:"html",data:n}).done(function(c){s=arguments,o.html(r?i("<div>").append(i.parseHTML(c)).find(r):c)}).always(t&&function(c,d){o.each(function(){t.apply(this,s||[c.responseText,d,c])})}),this},i.expr.pseudos.animated=function(e){return i.grep(i.timers,function(n){return e===n.elem}).length},i.offset={setOffset:function(e,n,t){var r,a,s,o,u,c,d,g=i.css(e,"position"),v=i(e),m={};g==="static"&&(e.style.position="relative"),u=v.offset(),s=i.css(e,"top"),c=i.css(e,"left"),d=(g==="absolute"||g==="fixed")&&(s+c).indexOf("auto")>-1,d?(r=v.position(),o=r.top,a=r.left):(o=parseFloat(s)||0,a=parseFloat(c)||0),L(n)&&(n=n.call(e,t,i.extend({},u))),n.top!=null&&(m.top=n.top-u.top+o),n.left!=null&&(m.left=n.left-u.left+a),"using"in n?n.using.call(e,m):v.css(m)}},i.fn.extend({offset:function(e){if(arguments.length)return e===void 0?this:this.each(function(a){i.offset.setOffset(this,e,a)});var n,t,r=this[0];if(r)return r.getClientRects().length?(n=r.getBoundingClientRect(),t=r.ownerDocument.defaultView,{top:n.top+t.pageYOffset,left:n.left+t.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,n,t,r=this[0],a={top:0,left:0};if(i.css(r,"position")==="fixed")n=r.getBoundingClientRect();else{for(n=this.offset(),t=r.ownerDocument,e=r.offsetParent||t.documentElement;e&&(e===t.body||e===t.documentElement)&&i.css(e,"position")==="static";)e=e.parentNode;e&&e!==r&&e.nodeType===1&&(a=i(e).offset(),a.top+=i.css(e,"borderTopWidth",!0),a.left+=i.css(e,"borderLeftWidth",!0))}return{top:n.top-a.top-i.css(r,"marginTop",!0),left:n.left-a.left-i.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&i.css(e,"position")==="static";)e=e.offsetParent;return e||ke})}}),i.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var t=n==="pageYOffset";i.fn[e]=function(r){return Ae(this,function(a,s,o){var u;if(Be(a)?u=a:a.nodeType===9&&(u=a.defaultView),o===void 0)return u?u[n]:a[s];u?u.scrollTo(t?u.pageXOffset:o,t?o:u.pageYOffset):a[s]=o},e,r,arguments.length)}}),i.each(["top","left"],function(e,n){i.cssHooks[n]=ct(T.pixelPosition,function(t,r){if(r)return r=ze(t,n),xn.test(r)?i(t).position()[n]+"px":r})}),i.each({Height:"height",Width:"width"},function(e,n){i.each({padding:"inner"+e,content:n,"":"outer"+e},function(t,r){i.fn[r]=function(a,s){var o=arguments.length&&(t||typeof a!="boolean"),u=t||(a===!0||s===!0?"margin":"border");return Ae(this,function(c,d,g){var v;return Be(c)?r.indexOf("outer")===0?c["inner"+e]:c.document.documentElement["client"+e]:c.nodeType===9?(v=c.documentElement,Math.max(c.body["scroll"+e],v["scroll"+e],c.body["offset"+e],v["offset"+e],v["client"+e])):g===void 0?i.css(c,d,u):i.style(c,d,g,u)},n,o?a:void 0,o)}})}),i.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,n){i.fn[n]=function(t){return this.on(n,t)}}),i.fn.extend({bind:function(e,n,t){return this.on(e,null,n,t)},unbind:function(e,n){return this.off(e,null,n)},delegate:function(e,n,t,r){return this.on(n,e,t,r)},undelegate:function(e,n,t){return arguments.length===1?this.off(e,"**"):this.off(n,e||"**",t)},hover:function(e,n){return this.on("mouseenter",e).on("mouseleave",n||e)}}),i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){i.fn[n]=function(t,r){return arguments.length>0?this.on(n,null,t,r):this.trigger(n)}});var Dr=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;i.proxy=function(e,n){var t,r,a;if(typeof n=="string"&&(t=e[n],n=e,e=t),!!L(e))return r=Q.call(arguments,2),a=function(){return e.apply(n||this,r.concat(Q.call(arguments)))},a.guid=e.guid=e.guid||i.guid++,a},i.holdReady=function(e){e?i.readyWait++:i.ready(!0)},i.isArray=Array.isArray,i.parseJSON=JSON.parse,i.nodeName=J,i.isFunction=L,i.isWindow=Be,i.camelCase=ce,i.type=Te,i.now=Date.now,i.isNumeric=function(e){var n=i.type(e);return(n==="number"||n==="string")&&!isNaN(e-parseFloat(e))},i.trim=function(e){return e==null?"":(e+"").replace(Dr,"$1")};var Ir=w.jQuery,Br=w.$;return i.noConflict=function(e){return w.$===i&&(w.$=Br),e&&w.jQuery===i&&(w.jQuery=Ir),i},typeof H>"u"&&(w.jQuery=w.$=i),i})})(jquery$1)),jquery$1.exports}var hasRequiredDist;function requireDist(){return hasRequiredDist||(hasRequiredDist=1,(function(module,exports){(function(w,H){module.exports=H(requireJquery(),requireReact())})(self,function(__WEBPACK_EXTERNAL_MODULE_jquery__,__WEBPACK_EXTERNAL_MODULE_react__){return(()=>{var __webpack_modules__={"./src/components/MapContainer/MapContainer.tsx":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapContainer": () => (/* binding */ MapContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/MapContainer/styles.module.scss");



const MapContainer = ({
  containerRef,
  className,
  style
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  style: style,
  className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].root, className),
  ref: containerRef
});

//# sourceURL=webpack://@react-jvectormap/core/./src/components/MapContainer/MapContainer.tsx?`)}),"./src/components/MapContainer/index.ts":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapContainer": () => (/* reexport safe */ _MapContainer__WEBPACK_IMPORTED_MODULE_0__.MapContainer)
/* harmony export */ });
/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MapContainer */ "./src/components/MapContainer/MapContainer.tsx");


//# sourceURL=webpack://@react-jvectormap/core/./src/components/MapContainer/index.ts?`)}),"./src/components/MultiMap/MultiMap.tsx":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiMap": () => (/* binding */ MultiMap)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MapContainer */ "./src/components/MapContainer/index.ts");



const MultiMap = ({
  mapRef,
  style,
  className,
  ...props
}) => {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const mapContainer = containerRef.current;
    const {
      main,
      ...rest
    } = props;
    const {
      map: {
        name,
        content
      },
      ...restMain
    } = main;
    jquery__WEBPACK_IMPORTED_MODULE_1___default().fn.vectorMap("addMap", name, content);

    if (mapContainer) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(mapContainer).multiMap({
        main: { ...restMain,
          map: name
        },
        ...rest
      });
    }
  }, [mapRef, props]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MapContainer__WEBPACK_IMPORTED_MODULE_2__.MapContainer, {
    style: style,
    className: className,
    containerRef: containerRef
  });
};

//# sourceURL=webpack://@react-jvectormap/core/./src/components/MultiMap/MultiMap.tsx?`)}),"./src/components/MultiMap/index.ts":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiMap": () => (/* reexport safe */ _MultiMap__WEBPACK_IMPORTED_MODULE_0__.MultiMap)
/* harmony export */ });
/* harmony import */ var _MultiMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultiMap */ "./src/components/MultiMap/MultiMap.tsx");


//# sourceURL=webpack://@react-jvectormap/core/./src/components/MultiMap/index.ts?`)}),"./src/components/VectorMap/VectorMap.tsx":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMap": () => (/* binding */ VectorMap)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MapContainer */ "./src/components/MapContainer/index.ts");



const VectorMap = ({
  map,
  mapRef,
  style,
  className,
  series,
  ...props
}) => {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const mapContainer = containerRef.current;

    if (!map) {
      console.error("[react-jvectormap]: no map was loaded!");
    }

    const {
      name,
      content
    } = map;
    jquery__WEBPACK_IMPORTED_MODULE_1___default().fn.vectorMap("addMap", name, content);

    if (mapContainer) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(mapContainer).vectorMap({
        map: name,
        series,
        ...props
      });

      if (map && (mapRef === null || mapRef === void 0 ? void 0 : mapRef.current) === null) {
        mapRef.current = jquery__WEBPACK_IMPORTED_MODULE_1___default()(mapContainer).vectorMap("get", "mapObject");
      }
    }
  }, [map, mapRef, props, series]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const mapContainer = containerRef.current;

    if (series && mapContainer) {
      const map = jquery__WEBPACK_IMPORTED_MODULE_1___default()(mapContainer).vectorMap("get", "mapObject");
      const {
        markers = [],
        regions = []
      } = series;
      regions.forEach(({
        values
      }, index) => {
        var _map$series;

        if (values && (_map$series = map.series) !== null && _map$series !== void 0 && _map$series.regions) {
          var _map$series2, _map$series2$regions$;

          (_map$series2 = map.series) === null || _map$series2 === void 0 ? void 0 : (_map$series2$regions$ = _map$series2.regions[index]) === null || _map$series2$regions$ === void 0 ? void 0 : _map$series2$regions$.clearAndSet(values);
        }
      });
      markers.forEach(({
        values
      }, index) => {
        var _map$series3;

        if (values && (_map$series3 = map.series) !== null && _map$series3 !== void 0 && _map$series3.markers) {
          var _map$series4, _map$series4$markers$;

          (_map$series4 = map.series) === null || _map$series4 === void 0 ? void 0 : (_map$series4$markers$ = _map$series4.markers[index]) === null || _map$series4$markers$ === void 0 ? void 0 : _map$series4$markers$.clearAndSet(values);
        }
      });
    }
  }, [series]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MapContainer__WEBPACK_IMPORTED_MODULE_2__.MapContainer, {
    className: className,
    style: style,
    containerRef: containerRef
  });
};

//# sourceURL=webpack://@react-jvectormap/core/./src/components/VectorMap/VectorMap.tsx?`)}),"./src/components/VectorMap/index.ts":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMap": () => (/* reexport safe */ _VectorMap__WEBPACK_IMPORTED_MODULE_0__.VectorMap)
/* harmony export */ });
/* harmony import */ var _VectorMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VectorMap */ "./src/components/VectorMap/VectorMap.tsx");


//# sourceURL=webpack://@react-jvectormap/core/./src/components/VectorMap/index.ts?`)}),"./src/components/index.ts":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMap": () => (/* reexport safe */ _VectorMap__WEBPACK_IMPORTED_MODULE_0__.VectorMap),
/* harmony export */   "MultiMap": () => (/* reexport safe */ _MultiMap__WEBPACK_IMPORTED_MODULE_1__.MultiMap)
/* harmony export */ });
/* harmony import */ var _VectorMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VectorMap */ "./src/components/VectorMap/index.ts");
/* harmony import */ var _MultiMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultiMap */ "./src/components/MultiMap/index.ts");



//# sourceURL=webpack://@react-jvectormap/core/./src/components/index.ts?`)}),"./src/index.ts":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiMap": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.MultiMap),
/* harmony export */   "VectorMap": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.VectorMap),
/* harmony export */   "AttributeSeriesBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.AttributeSeriesBuilder),
/* harmony export */   "LabelsBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.LabelsBuilder),
/* harmony export */   "LabelsPropsBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.LabelsPropsBuilder),
/* harmony export */   "MarkerBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.MarkerBuilder),
/* harmony export */   "MultiMapBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.MultiMapBuilder),
/* harmony export */   "SeriesBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.SeriesBuilder),
/* harmony export */   "StyleBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.StyleBuilder),
/* harmony export */   "VectorMapBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.VectorMapBuilder)
/* harmony export */ });
/* harmony import */ var _react_jvectormap_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-jvectormap/lib */ "../jvectormap/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/components/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");




(0,_react_jvectormap_lib__WEBPACK_IMPORTED_MODULE_0__.loadJVectorMap)((jquery__WEBPACK_IMPORTED_MODULE_1___default()));

//# sourceURL=webpack://@react-jvectormap/core/./src/index.ts?`)}),"./src/utils/builders/AttributeSeriesBuilder.ts":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttributeSeriesBuilder": () => (/* binding */ AttributeSeriesBuilder)
/* harmony export */ });
class AttributeSeriesBuilder {
  constructor(attribute) {
    this.attribute = attribute;
  }
  /**
   *
   * @param value
   */


  setAttribute(value) {
    this.attribute = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setScale(value) {
    this.scale = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setValues(value) {
    this.values = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setNormalizeFunction(value) {
    this.normalizeFunction = value;
    return this;
  }

  build() {
    return {
      scale: this.scale,
      values: this.values,
      attribute: this.attribute,
      normalizeFunction: this.normalizeFunction
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/AttributeSeriesBuilder.ts?`)}),"./src/utils/builders/LabelsBuilder.ts":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelsBuilder": () => (/* binding */ LabelsBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/builders/utils.ts");

class LabelsBuilder {
  /**
   *
   * @param values
   */
  addMarkersLabelProps(...values) {
    if (!this.markers) {
      this.markers = [];
    }

    this.markers.push(...values);
    return this;
  }
  /**
   *
   * @param values
   */


  addRegionsLabelProps(...values) {
    if (!this.regions) {
      this.regions = [];
    }

    this.regions.push(...values);
    return this;
  }

  build() {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripUndefinedValues)({
      markers: this.markers,
      regions: this.regions
    });
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/LabelsBuilder.ts?`)}),"./src/utils/builders/LabelsPropsBuilder.ts":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelsPropsBuilder": () => (/* binding */ LabelsPropsBuilder)
/* harmony export */ });
class LabelsPropsBuilder {
  constructor(render, offsets) {
    this.render = render;
    this.offsets = offsets;
  }
  /**
   *
   * @param render
   */


  setRender(render) {
    this.render = render;
    return this;
  }
  /**
   *
   * @param offsets
   */


  setOffsets(offsets) {
    this.offsets = offsets;
    return this;
  }
  /**
   *
   */


  build() {
    return {
      render: this.render,
      offsets: this.offsets
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/LabelsPropsBuilder.ts?`)}),"./src/utils/builders/MarkerBuilder.ts":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkerBuilder": () => (/* binding */ MarkerBuilder)
/* harmony export */ });
class MarkerBuilder {
  constructor(value) {
    this.name = value;
  }
  /**
   *
   * @param value
   */


  setName(value) {
    this.name = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setCoords(value) {
    this.latLng = undefined;
    this.coords = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setLatLng(value) {
    this.coords = undefined;
    this.latLng = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setStyle(value) {
    this.style = value;
    return this;
  }
  /**
   *
   */


  build() {
    const commonProps = {
      name: this.name,
      style: this.style
    };

    if (this.coords) {
      return { ...commonProps,
        coords: this.coords
      };
    } else if (this.latLng) {
      return { ...commonProps,
        latLng: this.latLng
      };
    }

    return { ...commonProps,
      latLng: [0, 0]
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/MarkerBuilder.ts?`)}),"./src/utils/builders/MultiMapBuilder.ts":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiMapBuilder": () => (/* binding */ MultiMapBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/builders/utils.ts");

class MultiMapBuilder {
  constructor(mainMap, maxLevel = 1) {
    this.main = {
      map: mainMap
    };
    this.maxLevel = maxLevel;
  }
  /**
   *
   * @param value
   */


  setMainMap(value) {
    this.main.map = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setMaxLevel(value) {
    this.maxLevel = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setMapNameByCode(value) {
    this.mapNameByCode = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setUrlByCode(value) {
    this.mapUrlByCode = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setGetDrillDownMap(value) {
    this.getDrillDownMap = value;
    return this;
  }

  build() {
    const baseProps = {
      main: this.main,
      maxLevel: this.maxLevel
    };
    return { ...baseProps,
      ...(0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripUndefinedValues)({
        mapNameByCode: this.mapNameByCode,
        mapUrlByCode: this.mapUrlByCode,
        getDrillDownMap: this.getDrillDownMap
      })
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/MultiMapBuilder.ts?`)}),"./src/utils/builders/SeriesBuilder.ts":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeriesBuilder": () => (/* binding */ SeriesBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/builders/utils.ts");

class SeriesBuilder {
  /**
   *
   * @param values
   */
  addMarkersSeries(...values) {
    if (!this.markers) {
      this.markers = [];
    }

    this.markers.push(...values);
    return this;
  }
  /**
   *
   * @param values
   */


  addRegionsSeries(...values) {
    if (!this.regions) {
      this.regions = [];
    }

    this.regions.push(...values);
    return this;
  }

  build() {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripUndefinedValues)({
      markers: this.markers,
      regions: this.regions
    });
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/SeriesBuilder.ts?`)}),"./src/utils/builders/StyleBuilder.ts":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleBuilder": () => (/* binding */ StyleBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/builders/utils.ts");

class StyleBuilder {
  /**
   *
   * @param value
   */
  setInitial(value) {
    this.initial = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setSelected(value) {
    this.selected = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setHover(value) {
    this.hover = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setSelectedHover(value) {
    this.selectedHover = value;
    return this;
  }

  build() {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripUndefinedValues)({
      selected: this.selected,
      selectedHover: this.selectedHover,
      hover: this.hover,
      initial: this.initial
    });
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/StyleBuilder.ts?`)}),"./src/utils/builders/VectorMapBuilder.ts":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMapBuilder": () => (/* binding */ VectorMapBuilder)
/* harmony export */ });
class VectorMapBuilder {
  selectedRegions = [];

  constructor(map) {
    this.map = map;
  }
  /**
   *
   * @param value
   */


  setMap(value) {
    this.map = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setBackgroundColor(value) {
    this.backgroundColor = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setZoomMin(value) {
    this.zoomMin = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setZoomMax(value) {
    this.zoomMax = value;
    return this;
  }
  /**
   *
   * @param marker
   */


  addMarker(marker) {
    if (!this.markers) {
      this.markers = [];
    }

    this.markers.push(marker);
    return this;
  }
  /**
   *
   * @param value
   */


  setMarkerStyle(value) {
    this.markerStyle = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setRegionStyle(value) {
    this.regionStyle = value;
    return this;
  }
  /**
   *
   * @param value
   * @private
   */


  setMarkersSelectable(value) {
    this.markersSelectable = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setMarkers(value) {
    this.markers = value;
    return this;
  }
  /**
   *
   * @private
   * @param value
   */


  setRegionsSelectable(value) {
    this.regionsSelectable = value;
    return this;
  }
  /**
   *
   * @private
   * @param value
   */


  setOnRegionTipShow(value) {
    this.onRegionTipShow = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setSeries(value) {
    this.series = value;
    return this;
  }
  /**
   *
   * @param values
   */


  setLabels(values) {
    this.labels = values;
    return this;
  }
  /**
   *
   * @param value
   */


  setSelectedRegions(value) {
    this.selectedRegions = value;
    return this;
  }
  /**
   *
   */


  build() {
    return {
      map: this.map,
      series: this.series,
      backgroundColor: this.backgroundColor,
      zoomMax: this.zoomMax,
      zoomMin: this.zoomMin,
      markerStyle: this.markerStyle,
      regionStyle: this.regionStyle,
      markersSelectable: this.markersSelectable,
      regionsSelectable: this.regionsSelectable,
      markers: this.markers,
      labels: this.labels,
      selectedRegions: this.selectedRegions
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/VectorMapBuilder.ts?`)}),"./src/utils/builders/index.ts":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMapBuilder": () => (/* reexport safe */ _VectorMapBuilder__WEBPACK_IMPORTED_MODULE_0__.VectorMapBuilder),
/* harmony export */   "MarkerBuilder": () => (/* reexport safe */ _MarkerBuilder__WEBPACK_IMPORTED_MODULE_1__.MarkerBuilder),
/* harmony export */   "StyleBuilder": () => (/* reexport safe */ _StyleBuilder__WEBPACK_IMPORTED_MODULE_2__.StyleBuilder),
/* harmony export */   "AttributeSeriesBuilder": () => (/* reexport safe */ _AttributeSeriesBuilder__WEBPACK_IMPORTED_MODULE_3__.AttributeSeriesBuilder),
/* harmony export */   "SeriesBuilder": () => (/* reexport safe */ _SeriesBuilder__WEBPACK_IMPORTED_MODULE_4__.SeriesBuilder),
/* harmony export */   "LabelsBuilder": () => (/* reexport safe */ _LabelsBuilder__WEBPACK_IMPORTED_MODULE_5__.LabelsBuilder),
/* harmony export */   "LabelsPropsBuilder": () => (/* reexport safe */ _LabelsPropsBuilder__WEBPACK_IMPORTED_MODULE_6__.LabelsPropsBuilder),
/* harmony export */   "MultiMapBuilder": () => (/* reexport safe */ _MultiMapBuilder__WEBPACK_IMPORTED_MODULE_7__.MultiMapBuilder)
/* harmony export */ });
/* harmony import */ var _VectorMapBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VectorMapBuilder */ "./src/utils/builders/VectorMapBuilder.ts");
/* harmony import */ var _MarkerBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarkerBuilder */ "./src/utils/builders/MarkerBuilder.ts");
/* harmony import */ var _StyleBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyleBuilder */ "./src/utils/builders/StyleBuilder.ts");
/* harmony import */ var _AttributeSeriesBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AttributeSeriesBuilder */ "./src/utils/builders/AttributeSeriesBuilder.ts");
/* harmony import */ var _SeriesBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SeriesBuilder */ "./src/utils/builders/SeriesBuilder.ts");
/* harmony import */ var _LabelsBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LabelsBuilder */ "./src/utils/builders/LabelsBuilder.ts");
/* harmony import */ var _LabelsPropsBuilder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LabelsPropsBuilder */ "./src/utils/builders/LabelsPropsBuilder.ts");
/* harmony import */ var _MultiMapBuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MultiMapBuilder */ "./src/utils/builders/MultiMapBuilder.ts");









//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/index.ts?`)}),"./src/utils/builders/utils.ts":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stripUndefinedValues": () => (/* binding */ stripUndefinedValues)
/* harmony export */ });
/**
 * remove undefined values from object
 * @param object
 */
const stripUndefinedValues = object => Object.fromEntries(Object.entries(object).filter(entry => entry[1] !== undefined));

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/utils.ts?`)}),"./src/utils/index.ts":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttributeSeriesBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.AttributeSeriesBuilder),
/* harmony export */   "LabelsBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.LabelsBuilder),
/* harmony export */   "LabelsPropsBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.LabelsPropsBuilder),
/* harmony export */   "MarkerBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.MarkerBuilder),
/* harmony export */   "MultiMapBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.MultiMapBuilder),
/* harmony export */   "SeriesBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.SeriesBuilder),
/* harmony export */   "StyleBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder),
/* harmony export */   "VectorMapBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.VectorMapBuilder)
/* harmony export */ });
/* harmony import */ var _builders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builders */ "./src/utils/builders/index.ts");


//# sourceURL=webpack://@react-jvectormap/core/./src/utils/index.ts?`)}),"../../node_modules/classnames/index.js":((module,exports)=>{eval(`var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/classnames/index.js?`)}),"../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/components/MapContainer/styles.module.scss":((module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "../../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/gif;base64,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 */ "data:image/gif;base64,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"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".jvectormap-tip {\\n  position: absolute;\\n  display: none;\\n  border: solid 1px #cdcdcd;\\n  border-radius: 3px;\\n  background: #292929;\\n  color: white;\\n  font-family: sans-serif, Verdana;\\n  font-size: smaller;\\n  padding: 3px;\\n}\\n\\n._u5cITtZnGk9D_6uoElx {\\n  height: 100%;\\n  width: 100%;\\n}\\n._u5cITtZnGk9D_6uoElx svg {\\n  touch-action: none;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-container {\\n  width: 100%;\\n  height: 100%;\\n  position: relative;\\n  overflow: hidden;\\n  touch-action: none;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-zoomin {\\n  position: absolute;\\n  left: 10px;\\n  border-radius: 3px;\\n  background: #292929;\\n  padding: 3px;\\n  color: white;\\n  cursor: pointer;\\n  line-height: 10px;\\n  text-align: center;\\n  box-sizing: content-box;\\n  width: 10px;\\n  height: 10px;\\n  top: 10px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-zoomout {\\n  position: absolute;\\n  left: 10px;\\n  border-radius: 3px;\\n  background: #292929;\\n  padding: 3px;\\n  color: white;\\n  cursor: pointer;\\n  line-height: 10px;\\n  text-align: center;\\n  box-sizing: content-box;\\n  width: 10px;\\n  height: 10px;\\n  top: 30px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-goback {\\n  position: absolute;\\n  left: 10px;\\n  border-radius: 3px;\\n  background: #292929;\\n  color: white;\\n  cursor: pointer;\\n  line-height: 10px;\\n  text-align: center;\\n  box-sizing: content-box;\\n  bottom: 10px;\\n  z-index: 1000;\\n  padding: 6px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-spinner {\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  background: center no-repeat url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-title {\\n  font-weight: bold;\\n  font-size: 14px;\\n  text-align: center;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt {\\n  position: absolute;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h {\\n  bottom: 0;\\n  right: 0;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend {\\n  float: left;\\n  margin: 0 10px 10px 0;\\n  padding: 3px 3px 1px 3px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend .jvectormap-legend-tick {\\n  float: left;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend-tick {\\n  width: 40px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend-tick-sample {\\n  height: 15px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend-tick-text {\\n  text-align: center;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-v {\\n  top: 0;\\n  right: 0;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-v .jvectormap-legend {\\n  margin: 10px 10px 0 0;\\n  padding: 3px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-v .jvectormap-legend-tick-sample {\\n  height: 20px;\\n  width: 20px;\\n  display: inline-block;\\n  vertical-align: middle;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-v .jvectormap-legend-tick-text {\\n  display: inline-block;\\n  vertical-align: middle;\\n  line-height: 20px;\\n  padding-left: 3px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend {\\n  background: black;\\n  color: white;\\n  border-radius: 3px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-tick-text {\\n  font-size: 12px;\\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "_u5cITtZnGk9D_6uoElx"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


//# sourceURL=webpack://@react-jvectormap/core/./src/components/MapContainer/styles.module.scss?../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js`)}),"../../node_modules/css-loader/dist/runtime/api.js":(module=>{eval(`

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/css-loader/dist/runtime/api.js?`)}),"../../node_modules/css-loader/dist/runtime/getUrl.js":(module=>{eval(`

module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {
    return "\\"".concat(url.replace(/"/g, '\\\\"').replace(/\\n/g, "\\\\n"), "\\"");
  }

  return url;
};

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/css-loader/dist/runtime/getUrl.js?`)}),"../../node_modules/css-loader/dist/runtime/noSourceMaps.js":(module=>{eval(`

module.exports = function (i) {
  return i[1];
};

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/css-loader/dist/runtime/noSourceMaps.js?`)}),"./src/components/MapContainer/styles.module.scss":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./styles.module.scss */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/components/MapContainer/styles.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


//# sourceURL=webpack://@react-jvectormap/core/./src/components/MapContainer/styles.module.scss?`)}),"../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":(module=>{eval(`

var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?`)}),"../../node_modules/style-loader/dist/runtime/insertBySelector.js":(module=>{eval(`

var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/insertBySelector.js?`)}),"../../node_modules/style-loader/dist/runtime/insertStyleElement.js":(module=>{eval(`

/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/insertStyleElement.js?`)}),"../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":((module,__unused_webpack_exports,__webpack_require__)=>{eval(`

/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?`)}),"../../node_modules/style-loader/dist/runtime/styleDomAPI.js":(module=>{eval(`

/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/styleDomAPI.js?`)}),"../../node_modules/style-loader/dist/runtime/styleTagTransform.js":(module=>{eval(`

/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/styleTagTransform.js?`)}),"../jquery-mousewheel/jquery.mousewheel.js":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadJQueryMouseWheel": () => (/* binding */ loadJQueryMouseWheel)
/* harmony export */ });
/*!
 * jQuery Mousewheel 3.1.13
 * Copyright OpenJS Foundation and other contributors
 */

const loadJQueryMouseWheel = ($) =>
  (function (factory) {
    factory($);
  })(function ($) {
    var toFix = [
        "wheel",
        "mousewheel",
        "DOMMouseScroll",
        "MozMousePixelScroll",
      ],
      toBind =
        "onwheel" in window.document || window.document.documentMode >= 9
          ? ["wheel"]
          : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      slice = Array.prototype.slice,
      nullLowestDeltaTimeout,
      lowestDelta;

    if ($.event.fixHooks) {
      for (var i = toFix.length; i; ) {
        $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
      }
    }

    var special = ($.event.special.mousewheel = {
      version: "3.1.12",

      setup: function () {
        if (this.addEventListener) {
          for (var i = toBind.length; i; ) {
            this.addEventListener(toBind[--i], handler, false);
          }
        } else {
          this.onmousewheel = handler;
        }

        // Store the line height and page height for this particular element
        $.data(this, "mousewheel-line-height", special.getLineHeight(this));
        $.data(this, "mousewheel-page-height", special.getPageHeight(this));
      },

      teardown: function () {
        if (this.removeEventListener) {
          for (var i = toBind.length; i; ) {
            this.removeEventListener(toBind[--i], handler, false);
          }
        } else {
          this.onmousewheel = null;
        }

        // Clean up the data we added to the element
        $.removeData(this, "mousewheel-line-height");
        $.removeData(this, "mousewheel-page-height");
      },

      getLineHeight: function (elem) {
        var $elem = $(elem),
          $parent = $elem["offsetParent" in $.fn ? "offsetParent" : "parent"]();
        if (!$parent.length) {
          $parent = $("body");
        }
        return (
          parseInt($parent.css("fontSize"), 10) ||
          parseInt($elem.css("fontSize"), 10) ||
          16
        );
      },

      getPageHeight: function (elem) {
        return $(elem).height();
      },

      settings: {
        adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
        normalizeOffset: true, // calls getBoundingClientRect for each event
      },
    });

    $.fn.extend({
      mousewheel: function (fn) {
        return fn ? this.on("mousewheel", fn) : this.trigger("mousewheel");
      },

      unmousewheel: function (fn) {
        return this.off("mousewheel", fn);
      },
    });

    function handler(event) {
      var orgEvent = event || window.event,
        args = slice.call(arguments, 1),
        delta = 0,
        deltaX = 0,
        deltaY = 0,
        absDelta = 0;
      event = $.event.fix(orgEvent);
      event.type = "mousewheel";

      // Old school scrollwheel delta
      if ("detail" in orgEvent) {
        deltaY = orgEvent.detail * -1;
      }
      if ("wheelDelta" in orgEvent) {
        deltaY = orgEvent.wheelDelta;
      }
      if ("wheelDeltaY" in orgEvent) {
        deltaY = orgEvent.wheelDeltaY;
      }
      if ("wheelDeltaX" in orgEvent) {
        deltaX = orgEvent.wheelDeltaX * -1;
      }

      // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
      if ("axis" in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
        deltaX = deltaY * -1;
        deltaY = 0;
      }

      // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
      delta = deltaY === 0 ? deltaX : deltaY;

      // New school wheel delta (wheel event)
      if ("deltaY" in orgEvent) {
        deltaY = orgEvent.deltaY * -1;
        delta = deltaY;
      }
      if ("deltaX" in orgEvent) {
        deltaX = orgEvent.deltaX;
        if (deltaY === 0) {
          delta = deltaX * -1;
        }
      }

      // No change actually happened, no reason to go any further
      if (deltaY === 0 && deltaX === 0) {
        return;
      }

      // Need to convert lines and pages to pixels if we aren't already in pixels
      // There are three delta modes:
      //   * deltaMode 0 is by pixels, nothing to do
      //   * deltaMode 1 is by lines
      //   * deltaMode 2 is by pages
      if (orgEvent.deltaMode === 1) {
        var lineHeight = $.data(this, "mousewheel-line-height");
        delta *= lineHeight;
        deltaY *= lineHeight;
        deltaX *= lineHeight;
      } else if (orgEvent.deltaMode === 2) {
        var pageHeight = $.data(this, "mousewheel-page-height");
        delta *= pageHeight;
        deltaY *= pageHeight;
        deltaX *= pageHeight;
      }

      // Store lowest absolute delta to normalize the delta values
      absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));

      if (!lowestDelta || absDelta < lowestDelta) {
        lowestDelta = absDelta;

        // Adjust older deltas if necessary
        if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
          lowestDelta /= 40;
        }
      }

      // Adjust older deltas if necessary
      if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
        // Divide all the things by 40!
        delta /= 40;
        deltaX /= 40;
        deltaY /= 40;
      }

      // Get a whole, normalized value for the deltas
      delta = Math[delta >= 1 ? "floor" : "ceil"](delta / lowestDelta);
      deltaX = Math[deltaX >= 1 ? "floor" : "ceil"](deltaX / lowestDelta);
      deltaY = Math[deltaY >= 1 ? "floor" : "ceil"](deltaY / lowestDelta);

      // Normalise offsetX and offsetY properties
      if (special.settings.normalizeOffset && this.getBoundingClientRect) {
        var boundingRect = this.getBoundingClientRect();
        event.offsetX = event.clientX - boundingRect.left;
        event.offsetY = event.clientY - boundingRect.top;
      }

      // Add information to the event object
      event.deltaX = deltaX;
      event.deltaY = deltaY;
      event.deltaFactor = lowestDelta;

      // Go ahead and set deltaMode to 0 since we converted to pixels
      // Although this is a little odd since we overwrite the deltaX/Y
      // properties with normalized deltas.
      event.deltaMode = 0;

      // Add event and delta to the front of the arguments
      args.unshift(event, delta, deltaX, deltaY);

      // Clearout lowestDelta after sometime to better
      // handle multiple device types that give different
      // a different lowestDelta
      // Ex: trackpad = 3 and mouse wheel = 120
      if (nullLowestDeltaTimeout) {
        window.clearTimeout(nullLowestDeltaTimeout);
      }
      nullLowestDeltaTimeout = window.setTimeout(nullLowestDelta, 200);

      return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
      lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
      // If this is an older event and the delta is divisable by 120,
      // then we are assuming that the browser is treating this as an
      // older mouse wheel event and that we should divide the deltas
      // by 40 to try and get a more usable deltaFactor.
      // Side note, this actually impacts the reported scroll distance
      // in older browsers and can cause scrolling to be slower than native.
      // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
      return (
        special.settings.adjustOldDeltas &&
        orgEvent.type === "mousewheel" &&
        absDelta % 120 === 0
      );
    }
  });


//# sourceURL=webpack://@react-jvectormap/core/../jquery-mousewheel/jquery.mousewheel.js?`)}),"../jvectormap/index.js":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadJVectorMap": () => (/* reexport safe */ _jquery_jvectormap_min__WEBPACK_IMPORTED_MODULE_0__.loadJVectorMap)
/* harmony export */ });
/* harmony import */ var _jquery_jvectormap_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jquery.jvectormap.min */ "../jvectormap/jquery.jvectormap.min.js");



//# sourceURL=webpack://@react-jvectormap/core/../jvectormap/index.js?`)}),"../jvectormap/jquery.jvectormap.min.js":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadJVectorMap": () => (/* binding */ loadJVectorMap)
/* harmony export */ });
/* harmony import */ var _react_jvectormap_jquery_mousewheel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-jvectormap/jquery-mousewheel */ "../jquery-mousewheel/jquery.mousewheel.js");


/**
 * jVectorMap version 2.0.5
 *
 * Copyright 2011-2014, Kirill Lebedev
 *
 * inspired from: https://github.com/alex-pex/jvectormap/blob/master/jvectormap-next/src/jquery-jvectormap.js
 */
const loadJVectorMap = ($) =>
  (function (factory) {
    factory($);
  })(function ($) {
    (0,_react_jvectormap_jquery_mousewheel__WEBPACK_IMPORTED_MODULE_0__.loadJQueryMouseWheel)($);
    jvm.$ = $;
    window.jvm = jvm;

    const apiParams = {
      set: {
        colors: 1,
        values: 1,
        backgroundColor: 1,
        scaleColors: 1,
        normalizeFunction: 1,
        focus: 1,
      },
      get: {
        selectedRegions: 1,
        selectedMarkers: 1,
        mapObject: 1,
        regionName: 1,
      },
    };

    $.fn.multiMap = function (options) {
      options.container = this;
      new jvm.MultiMap(options);
      return this;
    };

    $.fn.vectorMap = function (options) {
      let map, methodName;
      map = this.children(".jvectormap-container").data("mapObject");
      if (options === "remove") {
        this.remove();
      } else if (options === "addMap") {
        jvm.Map.maps[arguments[1]] = arguments[2];
      } else if (
        (options === "set" || options === "get") &&
        apiParams[options][arguments[1]]
      ) {
        methodName =
          arguments[1].charAt(0).toUpperCase() + arguments[1].substr(1);
        return map[options + methodName].apply(
          map,
          Array.prototype.slice.call(arguments, 2),
        );
      } else if (!map) {
        options = options || {};
        options.container = this;
        map = new jvm.Map(options);
      }

      return this;
    };
  });
/**
 * @namespace jvm Holds core methods and classes used by jVectorMap.
 */
var jvm = {
  /**
   * Inherits child's prototype from the parent's one.
   * @param {Function} child
   * @param {Function} parent
   */
  inherits: function (child, parent) {
    function temp() {}
    temp.prototype = parent.prototype;
    child.prototype = new temp();
    child.prototype.constructor = child;
    child.parentClass = parent;
  },

  /**
   * Mixes in methods from the source constructor to the target one.
   * @param {Function} target
   * @param {Function} source
   */
  mixin: function (target, source) {
    var prop;

    for (prop in source.prototype) {
      if (source.prototype.hasOwnProperty(prop)) {
        target.prototype[prop] = source.prototype[prop];
      }
    }
  },

  min: function (values) {
    var min = Number.MAX_VALUE,
      i;

    if (values instanceof Array) {
      for (i = 0; i < values.length; i++) {
        if (values[i] < min) {
          min = values[i];
        }
      }
    } else {
      for (i in values) {
        if (values[i] < min) {
          min = values[i];
        }
      }
    }
    return min;
  },

  max: function (values) {
    var max = Number.MIN_VALUE,
      i;

    if (values instanceof Array) {
      for (i = 0; i < values.length; i++) {
        if (values[i] > max) {
          max = values[i];
        }
      }
    } else {
      for (i in values) {
        if (values[i] > max) {
          max = values[i];
        }
      }
    }
    return max;
  },

  keys: function (object) {
    var keys = [],
      key;

    for (key in object) {
      keys.push(key);
    }
    return keys;
  },

  values: function (object) {
    var values = [],
      key,
      i;

    for (i = 0; i < arguments.length; i++) {
      object = arguments[i];
      for (key in object) {
        values.push(object[key]);
      }
    }
    return values;
  },

  whenImageLoaded: function (url) {
    var deferred = new jvm.$.Deferred(),
      img = jvm.$("<img/>");

    img
      .on("error", function () {
        deferred.reject();
      })
      .on("load", function () {
        deferred.resolve(img);
      });
    img.attr("src", url);

    return deferred;
  },

  isImageUrl: function (s) {
    return /\\.\\w{3,4}$/.test(s);
  },
};

/**
 * indexOf polyfill for IE < 9
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 */
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement, fromIndex) {
    var k;

    // 1. Let O be the result of calling ToObject passing
    //    the this value as the argument.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get
    //    internal method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If len is 0, return -1.
    if (len === 0) {
      return -1;
    }

    // 5. If argument fromIndex was passed let n be
    //    ToInteger(fromIndex); else let n be 0.
    var n = +fromIndex || 0;

    if (Math.abs(n) === Infinity) {
      n = 0;
    }

    // 6. If n >= len, return -1.
    if (n >= len) {
      return -1;
    }

    // 7. If n >= 0, then Let k be n.
    // 8. Else, n<0, Let k be len - abs(n).
    //    If k is less than 0, then let k be 0.
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // 9. Repeat, while k < len
    while (k < len) {
      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the
      //    HasProperty internal method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      //    i.  Let elementK be the result of calling the Get
      //        internal method of O with the argument ToString(k).
      //   ii.  Let same be the result of applying the
      //        Strict Equality Comparison Algorithm to
      //        searchElement and elementK.
      //  iii.  If same is true, return k.
      if (k in O && O[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}
/**
 * Basic wrapper for DOM element.
 * @constructor
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */
jvm.AbstractElement = function(name, config){
  /**
   * Underlying DOM element
   * @type {DOMElement}
   * @private
   */
  this.node = this.createElement(name);

  /**
   * Name of underlying element
   * @type {String}
   * @private
   */
  this.name = name;

  /**
   * Internal store of attributes
   * @type {Object}
   * @private
   */
  this.properties = {};

  if (config) {
    this.set(config);
  }
};

/**
 * Set attribute of the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Set of parameters to initialize element with
 */
jvm.AbstractElement.prototype.set = function(property, value){
  var key;

  if (typeof property === 'object') {
    for (key in property) {
      this.properties[key] = property[key];
      this.applyAttr(key, property[key]);
    }
  } else {
    this.properties[property] = value;
    this.applyAttr(property, value);
  }
};

/**
 * Returns value of attribute.
 * @param {String} name Name of attribute
 */
jvm.AbstractElement.prototype.get = function(property){
  return this.properties[property];
};

/**
 * Applies attribute value to the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Value of attribute to apply
 * @private
 */
jvm.AbstractElement.prototype.applyAttr = function(property, value){
  if (!Number.isNaN(value)) {
    this.node.setAttribute(property, value);
  }
};

jvm.AbstractElement.prototype.remove = function(){
  jvm.$(this.node).remove();
};/**
 * Implements abstract vector canvas.
 * @constructor
 * @param {HTMLElement} container Container to put element to.
 * @param {Number} width Width of canvas.
 * @param {Number} height Height of canvas.
 */
jvm.AbstractCanvasElement = function(container, width, height){
  this.container = container;
  this.setSize(width, height);
  this.rootElement = new jvm[this.classPrefix+'GroupElement']();
  this.node.appendChild( this.rootElement.node );
  this.container.appendChild(this.node);
}

/**
 * Add element to the certain group inside of the canvas.
 * @param {HTMLElement} element Element to add to canvas.
 * @param {HTMLElement} group Group to add element into or into root group if not provided.
 */
jvm.AbstractCanvasElement.prototype.add = function(element, group){
  group = group || this.rootElement;
  group.add(element);
  element.canvas = this;
}

/**
 * Create path and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add path into.
 */
jvm.AbstractCanvasElement.prototype.addPath = function(config, style, group){
  var el = new jvm[this.classPrefix+'PathElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create circle and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addCircle = function(config, style, group){
  var el = new jvm[this.classPrefix+'CircleElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create circle and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addImage = function(config, style, group){
  var el = new jvm[this.classPrefix+'ImageElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create text and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addText = function(config, style, group){
  var el = new jvm[this.classPrefix+'TextElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Add group to the another group inside of the canvas.
 * @param {HTMLElement} group Group to add circle into or root group if not provided.
 */
jvm.AbstractCanvasElement.prototype.addGroup = function(parentGroup){
  var el = new jvm[this.classPrefix+'GroupElement']();

  if (parentGroup) {
    parentGroup.node.appendChild(el.node);
  } else {
    this.node.appendChild(el.node);
  }
  el.canvas = this;
  return el;
};/**
 * Abstract shape element. Shape element represents some visual vector or raster object.
 * @constructor
 * @param {String} name Tag name of the element.
 * @param {Object} config Set of parameters to initialize element with.
 * @param {Object} style Object with styles to set on element initialization.
 */
jvm.AbstractShapeElement = function(name, config, style){
  this.style = style || {};
  this.style.current = this.style.current || {};
  this.isHovered = false;
  this.isSelected = false;
  this.updateStyle();
};

/**
 * Set element's style.
 * @param {Object|String} property Could be string to set only one property or object to set several style properties at once.
 * @param {String} value Value to set in case only one property should be set.
 */
jvm.AbstractShapeElement.prototype.setStyle = function(property, value){
  var styles = {};

  if (typeof property === 'object') {
    styles = property;
  } else {
    styles[property] = value;
  }
  jvm.$.extend(this.style.current, styles);
  this.updateStyle();
};


jvm.AbstractShapeElement.prototype.updateStyle = function(){
  var attrs = {};

  jvm.AbstractShapeElement.mergeStyles(attrs, this.style.initial);
  jvm.AbstractShapeElement.mergeStyles(attrs, this.style.current);
  if (this.isHovered) {
    jvm.AbstractShapeElement.mergeStyles(attrs, this.style.hover);
  }
  if (this.isSelected) {
    jvm.AbstractShapeElement.mergeStyles(attrs, this.style.selected);
    if (this.isHovered) {
      jvm.AbstractShapeElement.mergeStyles(attrs, this.style.selectedHover);
    }
  }
  this.set(attrs);
};

jvm.AbstractShapeElement.mergeStyles = function(styles, newStyles){
  var key;

  newStyles = newStyles || {};
  for (key in newStyles) {
    if (newStyles[key] === null) {
      delete styles[key];
    } else {
      styles[key] = newStyles[key];
    }
  }
}/**
 * Wrapper for SVG element.
 * @constructor
 * @extends jvm.AbstractElement
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */

jvm.SVGElement = function(name, config){
  jvm.SVGElement.parentClass.apply(this, arguments);
}

jvm.inherits(jvm.SVGElement, jvm.AbstractElement);

jvm.SVGElement.svgns = "http://www.w3.org/2000/svg";

/**
 * Creates DOM element.
 * @param {String} tagName Name of element
 * @private
 * @returns DOMElement
 */
jvm.SVGElement.prototype.createElement = function( tagName ){
  return document.createElementNS( jvm.SVGElement.svgns, tagName );
};

/**
 * Adds CSS class for underlying DOM element.
 * @param {String} className Name of CSS class name
 */
jvm.SVGElement.prototype.addClass = function( className ){
  this.node.setAttribute('class', className);
};

/**
 * Returns constructor for element by name prefixed with 'VML'.
 * @param {String} ctr Name of basic constructor to return
 * proper implementation for.
 * @returns Function
 * @private
 */
jvm.SVGElement.prototype.getElementCtr = function( ctr ){
  return jvm['SVG'+ctr];
};

jvm.SVGElement.prototype.getBBox = function(){
  return this.node.getBBox();
};jvm.SVGGroupElement = function(){
  jvm.SVGGroupElement.parentClass.call(this, 'g');
}

jvm.inherits(jvm.SVGGroupElement, jvm.SVGElement);

jvm.SVGGroupElement.prototype.add = function(element){
  this.node.appendChild( element.node );
};jvm.SVGCanvasElement = function (container, width, height) {
  this.classPrefix = "SVG";
  jvm.SVGCanvasElement.parentClass.call(this, "svg");

  this.defsElement = new jvm.SVGElement("defs");
  this.node.appendChild(this.defsElement.node);

  jvm.AbstractCanvasElement.apply(this, arguments);
};

jvm.inherits(jvm.SVGCanvasElement, jvm.SVGElement);
jvm.mixin(jvm.SVGCanvasElement, jvm.AbstractCanvasElement);

jvm.SVGCanvasElement.prototype.setSize = function (width, height) {
  this.width = width;
  this.height = height;
  this.node.setAttribute("width", width);
  this.node.setAttribute("height", height);
};

jvm.SVGCanvasElement.prototype.applyTransformParams = function (
  scale,
  transX,
  transY,
) {
  this.scale = scale;
  this.transX = transX;
  this.transY = transY;
  if (!isNaN(transX) && !isNaN(transY) && !isNaN(scale)) {
    this.rootElement.node.setAttribute(
      "transform",
      "scale(" + scale + ") translate(" + transX + ", " + transY + ")",
    );
  }
};
jvm.SVGShapeElement = function(name, config, style){
  jvm.SVGShapeElement.parentClass.call(this, name, config);
  jvm.AbstractShapeElement.apply(this, arguments);
};

jvm.inherits(jvm.SVGShapeElement, jvm.SVGElement);
jvm.mixin(jvm.SVGShapeElement, jvm.AbstractShapeElement);

jvm.SVGShapeElement.prototype.applyAttr = function(attr, value){
  var patternEl,
      imageEl,
      that = this;

  if (attr === 'fill' && jvm.isImageUrl(value)) {
    if (!jvm.SVGShapeElement.images[value]) {
      jvm.whenImageLoaded(value).then(function(img){
        imageEl = new jvm.SVGElement('image');
        imageEl.node.setAttributeNS('http://www.w3.org/1999/xlink', 'href', value);
        imageEl.applyAttr('x', '0');
        imageEl.applyAttr('y', '0');
        imageEl.applyAttr('width', img[0].width);
        imageEl.applyAttr('height', img[0].height);

        patternEl = new jvm.SVGElement('pattern');
        patternEl.applyAttr('id', 'image'+jvm.SVGShapeElement.imageCounter);
        patternEl.applyAttr('x', 0);
        patternEl.applyAttr('y', 0);
        patternEl.applyAttr('width', img[0].width / 2);
        patternEl.applyAttr('height', img[0].height / 2);
        patternEl.applyAttr('viewBox', '0 0 '+img[0].width+' '+img[0].height);
        patternEl.applyAttr('patternUnits', 'userSpaceOnUse');
        patternEl.node.appendChild( imageEl.node );

        that.canvas.defsElement.node.appendChild( patternEl.node );

        jvm.SVGShapeElement.images[value] = jvm.SVGShapeElement.imageCounter++;

        that.applyAttr('fill', 'url(#image'+jvm.SVGShapeElement.images[value]+')');
      });
    } else {
      this.applyAttr('fill', 'url(#image'+jvm.SVGShapeElement.images[value]+')');
    }
  } else {
    jvm.SVGShapeElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};

jvm.SVGShapeElement.imageCounter = 1;
jvm.SVGShapeElement.images = {};jvm.SVGPathElement = function(config, style){
  jvm.SVGPathElement.parentClass.call(this, 'path', config, style);
  this.node.setAttribute('fill-rule', 'evenodd');
}

jvm.inherits(jvm.SVGPathElement, jvm.SVGShapeElement);jvm.SVGCircleElement = function(config, style){
  jvm.SVGCircleElement.parentClass.call(this, 'circle', config, style);
};

jvm.inherits(jvm.SVGCircleElement, jvm.SVGShapeElement);jvm.SVGImageElement = function(config, style){
  jvm.SVGImageElement.parentClass.call(this, 'image', config, style);
};

jvm.inherits(jvm.SVGImageElement, jvm.SVGShapeElement);

jvm.SVGImageElement.prototype.applyAttr = function(attr, value){
  var that = this,
      imageOffset,
      imageUrl;

  if (attr == 'image') {
    if (typeof value == 'object') {
      imageUrl = value.url;
      this.offset = value.offset;
    } else {
      imageUrl = value;
      this.offset = [0, 0];
    }

    jvm.whenImageLoaded(imageUrl).then(function(img){
      that.node.setAttributeNS('http://www.w3.org/1999/xlink', 'href', imageUrl);
      that.width = img[0].width;
      that.height = img[0].height;
      that.applyAttr('width', that.width);
      that.applyAttr('height', that.height);

      that.applyAttr('x', that.cx - that.width / 2 + that.offset[0]);
      that.applyAttr('y', that.cy - that.height / 2 + that.offset[1]);

      jvm.$(that.node).trigger('imageloaded', [img]);
    });
  } else if(attr == 'cx') {
    this.cx = value;
    if (this.width) {
      this.applyAttr('x', value - this.width / 2 + this.offset[0]);
    }
  } else if(attr == 'cy') {
    this.cy = value;
    if (this.height) {
      this.applyAttr('y', value - this.height / 2 + this.offset[1]);
    }
  } else {
    jvm.SVGImageElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};jvm.SVGTextElement = function(config, style){
  jvm.SVGTextElement.parentClass.call(this, 'text', config, style);
}

jvm.inherits(jvm.SVGTextElement, jvm.SVGShapeElement);

jvm.SVGTextElement.prototype.applyAttr = function(attr, value){
  if (attr === 'text') {
    this.node.textContent = value;
  } else {
    jvm.SVGTextElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};/**
 * Wrapper for VML element.
 * @constructor
 * @extends jvm.AbstractElement
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */

jvm.VMLElement = function(name, config){
  if (!jvm.VMLElement.VMLInitialized) {
    jvm.VMLElement.initializeVML();
  }

  jvm.VMLElement.parentClass.apply(this, arguments);
};

jvm.inherits(jvm.VMLElement, jvm.AbstractElement);

/**
 * Shows if VML was already initialized for the current document or not.
 * @static
 * @private
 * @type {Boolean}
 */
jvm.VMLElement.VMLInitialized = false;

/**
 * Initializes VML handling before creating the first element
 * (adds CSS class and creates namespace). Adds one of two forms
 * of createElement method depending of support by browser.
 * @static
 * @private
 */

 // The following method of VML handling is borrowed from the
 // Raphael library by Dmitry Baranovsky.

jvm.VMLElement.initializeVML = function(){
  try {
    if (!document.namespaces.rvml) {
      document.namespaces.add("rvml","urn:schemas-microsoft-com:vml");
    }
    /**
     * Creates DOM element.
     * @param {String} tagName Name of element
     * @private
     * @returns DOMElement
     */
    jvm.VMLElement.prototype.createElement = function (tagName) {
      return document.createElement('<rvml:' + tagName + ' class="rvml">');
    };
  } catch (e) {
    /**
     * @private
     */
    jvm.VMLElement.prototype.createElement = function (tagName) {
      return document.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
    };
  }
  document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
  jvm.VMLElement.VMLInitialized = true;
};

/**
 * Returns constructor for element by name prefixed with 'VML'.
 * @param {String} ctr Name of basic constructor to return
 * proper implementation for.
 * @returns Function
 * @private
 */
jvm.VMLElement.prototype.getElementCtr = function( ctr ){
  return jvm['VML'+ctr];
};

/**
 * Adds CSS class for underlying DOM element.
 * @param {String} className Name of CSS class name
 */
jvm.VMLElement.prototype.addClass = function( className ){
  jvm.$(this.node).addClass(className);
};

/**
 * Applies attribute value to the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Value of attribute to apply
 * @private
 */
jvm.VMLElement.prototype.applyAttr = function( attr, value ){
  this.node[attr] = value;
};

/**
 * Returns boundary box for the element.
 * @returns {Object} Boundary box with numeric fields: x, y, width, height
 * @override
 */
jvm.VMLElement.prototype.getBBox = function(){
  var node = jvm.$(this.node);

  return {
    x: node.position().left / this.canvas.scale,
    y: node.position().top / this.canvas.scale,
    width: node.width() / this.canvas.scale,
    height: node.height() / this.canvas.scale
  };
};jvm.VMLGroupElement = function(){
  jvm.VMLGroupElement.parentClass.call(this, 'group');

  this.node.style.left = '0px';
  this.node.style.top = '0px';
  this.node.coordorigin = "0 0";
};

jvm.inherits(jvm.VMLGroupElement, jvm.VMLElement);

jvm.VMLGroupElement.prototype.add = function(element){
  this.node.appendChild( element.node );
};jvm.VMLCanvasElement = function(container, width, height){
  this.classPrefix = 'VML';
  jvm.VMLCanvasElement.parentClass.call(this, 'group');
  jvm.AbstractCanvasElement.apply(this, arguments);
  this.node.style.position = 'absolute';
};

jvm.inherits(jvm.VMLCanvasElement, jvm.VMLElement);
jvm.mixin(jvm.VMLCanvasElement, jvm.AbstractCanvasElement);

jvm.VMLCanvasElement.prototype.setSize = function(width, height){
  var paths,
      groups,
      i,
      l;

  this.width = width;
  this.height = height;
  this.node.style.width = width + "px";
  this.node.style.height = height + "px";
  this.node.coordsize = width+' '+height;
  this.node.coordorigin = "0 0";
  if (this.rootElement) {
    paths = this.rootElement.node.getElementsByTagName('shape');
    for(i = 0, l = paths.length; i < l; i++) {
      paths[i].coordsize = width+' '+height;
      paths[i].style.width = width+'px';
      paths[i].style.height = height+'px';
    }
    groups = this.node.getElementsByTagName('group');
    for(i = 0, l = groups.length; i < l; i++) {
      groups[i].coordsize = width+' '+height;
      groups[i].style.width = width+'px';
      groups[i].style.height = height+'px';
    }
  }
};

jvm.VMLCanvasElement.prototype.applyTransformParams = function(scale, transX, transY) {
  this.scale = scale;
  this.transX = transX;
  this.transY = transY;
  this.rootElement.node.coordorigin = (this.width-transX-this.width/100)+','+(this.height-transY-this.height/100);
  this.rootElement.node.coordsize = this.width/scale+','+this.height/scale;
};jvm.VMLShapeElement = function(name, config){
  jvm.VMLShapeElement.parentClass.call(this, name, config);

  this.fillElement = new jvm.VMLElement('fill');
  this.strokeElement = new jvm.VMLElement('stroke');
  this.node.appendChild(this.fillElement.node);
  this.node.appendChild(this.strokeElement.node);
  this.node.stroked = false;

  jvm.AbstractShapeElement.apply(this, arguments);
};

jvm.inherits(jvm.VMLShapeElement, jvm.VMLElement);
jvm.mixin(jvm.VMLShapeElement, jvm.AbstractShapeElement);

jvm.VMLShapeElement.prototype.applyAttr = function(attr, value){
  switch (attr) {
    case 'fill':
      this.node.fillcolor = value;
      break;
    case 'fill-opacity':
      this.fillElement.node.opacity = Math.round(value*100)+'%';
      break;
    case 'stroke':
      if (value === 'none') {
        this.node.stroked = false;
      } else {
        this.node.stroked = true;
      }
      this.node.strokecolor = value;
      break;
    case 'stroke-opacity':
      this.strokeElement.node.opacity = Math.round(value*100)+'%';
      break;
    case 'stroke-width':
      if (parseInt(value, 10) === 0) {
        this.node.stroked = false;
      } else {
        this.node.stroked = true;
      }
      this.node.strokeweight = value;
      break;
    case 'd':
      this.node.path = jvm.VMLPathElement.pathSvgToVml(value);
      break;
    default:
      jvm.VMLShapeElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};jvm.VMLPathElement = function(config, style){
  var scale = new jvm.VMLElement('skew');

  jvm.VMLPathElement.parentClass.call(this, 'shape', config, style);

  this.node.coordorigin = "0 0";

  scale.node.on = true;
  scale.node.matrix = '0.01,0,0,0.01,0,0';
  scale.node.offset = '0,0';

  this.node.appendChild(scale.node);
};

jvm.inherits(jvm.VMLPathElement, jvm.VMLShapeElement);

jvm.VMLPathElement.prototype.applyAttr = function(attr, value){
  if (attr === 'd') {
    this.node.path = jvm.VMLPathElement.pathSvgToVml(value);
  } else {
    jvm.VMLShapeElement.prototype.applyAttr.call(this, attr, value);
  }
};

jvm.VMLPathElement.pathSvgToVml = function(path) {
  var cx = 0, cy = 0, ctrlx, ctrly;

  path = path.replace(/(-?\\d+)e(-?\\d+)/g, '0');
  return path.replace(/([MmLlHhVvCcSs])\\s*((?:-?\\d*(?:\\.\\d+)?\\s*,?\\s*)+)/g, function(segment, letter, coords, index){
    coords = coords.replace(/(\\d)-/g, '$1,-')
            .replace(/^\\s+/g, '')
            .replace(/\\s+$/g, '')
            .replace(/\\s+/g, ',').split(',');
    if (!coords[0]) coords.shift();
    for (var i=0, l=coords.length; i<l; i++) {
      coords[i] = Math.round(100*coords[i]);
    }
    switch (letter) {
      case 'm':
        cx += coords[0];
        cy += coords[1];
        return 't'+coords.join(',');
      case 'M':
        cx = coords[0];
        cy = coords[1];
        return 'm'+coords.join(',');
      case 'l':
        cx += coords[0];
        cy += coords[1];
        return 'r'+coords.join(',');
      case 'L':
        cx = coords[0];
        cy = coords[1];
        return 'l'+coords.join(',');
      case 'h':
        cx += coords[0];
        return 'r'+coords[0]+',0';
      case 'H':
        cx = coords[0];
        return 'l'+cx+','+cy;
      case 'v':
        cy += coords[0];
        return 'r0,'+coords[0];
      case 'V':
        cy = coords[0];
        return 'l'+cx+','+cy;
      case 'c':
        ctrlx = cx + coords[coords.length-4];
        ctrly = cy + coords[coords.length-3];
        cx += coords[coords.length-2];
        cy += coords[coords.length-1];
        return 'v'+coords.join(',');
      case 'C':
        ctrlx = coords[coords.length-4];
        ctrly = coords[coords.length-3];
        cx = coords[coords.length-2];
        cy = coords[coords.length-1];
        return 'c'+coords.join(',');
      case 's':
        coords.unshift(cy-ctrly);
        coords.unshift(cx-ctrlx);
        ctrlx = cx + coords[coords.length-4];
        ctrly = cy + coords[coords.length-3];
        cx += coords[coords.length-2];
        cy += coords[coords.length-1];
        return 'v'+coords.join(',');
      case 'S':
        coords.unshift(cy+cy-ctrly);
        coords.unshift(cx+cx-ctrlx);
        ctrlx = coords[coords.length-4];
        ctrly = coords[coords.length-3];
        cx = coords[coords.length-2];
        cy = coords[coords.length-1];
        return 'c'+coords.join(',');
    }
    return '';
  }).replace(/z/g, 'e');
};jvm.VMLCircleElement = function(config, style){
  jvm.VMLCircleElement.parentClass.call(this, 'oval', config, style);
};

jvm.inherits(jvm.VMLCircleElement, jvm.VMLShapeElement);

jvm.VMLCircleElement.prototype.applyAttr = function(attr, value){
  switch (attr) {
    case 'r':
      this.node.style.width = value*2+'px';
      this.node.style.height = value*2+'px';
      this.applyAttr('cx', this.get('cx') || 0);
      this.applyAttr('cy', this.get('cy') || 0);
      break;
    case 'cx':
      if (!value) return;
      this.node.style.left = value - (this.get('r') || 0) + 'px';
      break;
    case 'cy':
      if (!value) return;
      this.node.style.top = value - (this.get('r') || 0) + 'px';
      break;
    default:
      jvm.VMLCircleElement.parentClass.prototype.applyAttr.call(this, attr, value);
  }
};/**
 * Class for vector images manipulations.
 * @constructor
 * @param {DOMElement} container to place canvas to
 * @param {Number} width
 * @param {Number} height
 */
jvm.VectorCanvas = function(container, width, height) {
  this.mode = window.SVGAngle ? 'svg' : 'vml';

  if (this.mode == 'svg') {
    this.impl = new jvm.SVGCanvasElement(container, width, height);
  } else {
    this.impl = new jvm.VMLCanvasElement(container, width, height);
  }
  this.impl.mode = this.mode;
  return this.impl;
};jvm.SimpleScale = function(scale){
  this.scale = scale;
};

jvm.SimpleScale.prototype.getValue = function(value){
  return value;
};jvm.OrdinalScale = function(scale){
  this.scale = scale;
};

jvm.OrdinalScale.prototype.getValue = function(value){
  return this.scale[value];
};

jvm.OrdinalScale.prototype.getTicks = function(){
  var ticks = [],
      key;

  for (key in this.scale) {
    ticks.push({
      label: key,
      value: this.scale[key]
    });
  }

  return ticks;
};jvm.NumericScale = function(scale, normalizeFunction, minValue, maxValue) {
  this.scale = [];

  normalizeFunction = normalizeFunction || 'linear';

  if (scale) this.setScale(scale);
  if (normalizeFunction) this.setNormalizeFunction(normalizeFunction);
  if (typeof minValue !== 'undefined' ) this.setMin(minValue);
  if (typeof maxValue !== 'undefined' ) this.setMax(maxValue);
};

jvm.NumericScale.prototype = {
  setMin: function(min) {
    this.clearMinValue = min;
    if (typeof this.normalize === 'function') {
      this.minValue = this.normalize(min);
    } else {
      this.minValue = min;
    }
  },

  setMax: function(max) {
    this.clearMaxValue = max;
    if (typeof this.normalize === 'function') {
      this.maxValue = this.normalize(max);
    } else {
      this.maxValue = max;
    }
  },

  setScale: function(scale) {
    var i;

    this.scale = [];
    for (i = 0; i < scale.length; i++) {
      this.scale[i] = [scale[i]];
    }
  },

  setNormalizeFunction: function(f) {
    if (f === 'polynomial') {
      this.normalize = function(value) {
        return Math.pow(value, 0.2);
      }
    } else if (f === 'linear') {
      delete this.normalize;
    } else {
      this.normalize = f;
    }
    this.setMin(this.clearMinValue);
    this.setMax(this.clearMaxValue);
  },

  getValue: function(value) {
    var lengthes = [],
        fullLength = 0,
        l,
        i = 0,
        c;

    if (typeof this.normalize === 'function') {
      value = this.normalize(value);
    }
    for (i = 0; i < this.scale.length-1; i++) {
      l = this.vectorLength(this.vectorSubtract(this.scale[i+1], this.scale[i]));
      lengthes.push(l);
      fullLength += l;
    }

    c = (this.maxValue - this.minValue) / fullLength;
    for (i=0; i<lengthes.length; i++) {
      lengthes[i] *= c;
    }

    i = 0;
    value -= this.minValue;
    while (value - lengthes[i] >= 0) {
      value -= lengthes[i];
      i++;
    }

    if (i == this.scale.length - 1) {
      value = this.vectorToNum(this.scale[i])
    } else {
      value = (
        this.vectorToNum(
          this.vectorAdd(this.scale[i],
            this.vectorMult(
              this.vectorSubtract(this.scale[i+1], this.scale[i]),
              (value) / (lengthes[i])
            )
          )
        )
      );
    }

    return value;
  },

  vectorToNum: function(vector) {
    var num = 0,
        i;

    for (i = 0; i < vector.length; i++) {
      num += Math.round(vector[i])*Math.pow(256, vector.length-i-1);
    }
    return num;
  },

  vectorSubtract: function(vector1, vector2) {
    var vector = [],
        i;

    for (i = 0; i < vector1.length; i++) {
      vector[i] = vector1[i] - vector2[i];
    }
    return vector;
  },

  vectorAdd: function(vector1, vector2) {
    var vector = [],
        i;

    for (i = 0; i < vector1.length; i++) {
      vector[i] = vector1[i] + vector2[i];
    }
    return vector;
  },

  vectorMult: function(vector, num) {
    var result = [],
        i;

    for (i = 0; i < vector.length; i++) {
      result[i] = vector[i] * num;
    }
    return result;
  },

  vectorLength: function(vector) {
    var result = 0,
        i;
    for (i = 0; i < vector.length; i++) {
      result += vector[i] * vector[i];
    }
    return Math.sqrt(result);
  },

  /* Derived from d3 implementation https://github.com/mbostock/d3/blob/master/src/scale/linear.js#L94 */
  getTicks: function(){
    var m = 5,
        extent = [this.clearMinValue, this.clearMaxValue],
        span = extent[1] - extent[0],
        step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)),
        err = m / span * step,
        ticks = [],
        tick,
        v;

    if (err <= .15) step *= 10;
    else if (err <= .35) step *= 5;
    else if (err <= .75) step *= 2;

    extent[0] = Math.floor(extent[0] / step) * step;
    extent[1] = Math.ceil(extent[1] / step) * step;

    tick = extent[0];
    while (tick <= extent[1]) {
      if (tick == extent[0]) {
        v = this.clearMinValue;
      } else if (tick == extent[1]) {
        v = this.clearMaxValue;
      } else {
        v = tick;
      }
      ticks.push({
        label: tick,
        value: this.getValue(v)
      });
      tick += step;
    }

    return ticks;
  }
};
jvm.ColorScale = function(colors, normalizeFunction, minValue, maxValue) {
  jvm.ColorScale.parentClass.apply(this, arguments);
}

jvm.inherits(jvm.ColorScale, jvm.NumericScale);

jvm.ColorScale.prototype.setScale = function(scale) {
  var i;

  for (i = 0; i < scale.length; i++) {
    this.scale[i] = jvm.ColorScale.rgbToArray(scale[i]);
  }
};

jvm.ColorScale.prototype.getValue = function(value) {
  return jvm.ColorScale.numToRgb(jvm.ColorScale.parentClass.prototype.getValue.call(this, value));
};

jvm.ColorScale.arrayToRgb = function(ar) {
  var rgb = '#',
      d,
      i;

  for (i = 0; i < ar.length; i++) {
    d = ar[i].toString(16);
    rgb += d.length == 1 ? '0'+d : d;
  }
  return rgb;
};

jvm.ColorScale.numToRgb = function(num) {
  num = num.toString(16);

  while (num.length < 6) {
    num = '0' + num;
  }

  return '#'+num;
};

jvm.ColorScale.rgbToArray = function(rgb) {
  rgb = rgb.substr(1);
  return [parseInt(rgb.substr(0, 2), 16), parseInt(rgb.substr(2, 2), 16), parseInt(rgb.substr(4, 2), 16)];
};/**
 * Represents map legend.
 * @constructor
 * @param {Object} params Configuration parameters.
 * @param {String} params.cssClass Additional CSS class to apply to legend element.
 * @param {Boolean} params.vertical If <code>true</code> legend will be rendered as vertical.
 * @param {String} params.title Legend title.
 * @param {Function} params.labelRender Method to convert series values to legend labels.
 */
jvm.Legend = function(params) {
  this.params = params || {};
  this.map = this.params.map;
  this.series = this.params.series;
  this.body = jvm.$('<div/>');
  this.body.addClass('jvectormap-legend');
  if (this.params.cssClass) {
    this.body.addClass(this.params.cssClass);
  }

  if (params.vertical) {
    this.map.legendCntVertical.append( this.body );
  } else {
    this.map.legendCntHorizontal.append( this.body );
  }

  this.render();
}

jvm.Legend.prototype.render = function(){
  var ticks = this.series.scale.getTicks(),
      i,
      inner = jvm.$('<div/>').addClass('jvectormap-legend-inner'),
      tick,
      sample,
      label;

  this.body.html('');
  if (this.params.title) {
    this.body.append(
      jvm.$('<div/>').addClass('jvectormap-legend-title').html(this.params.title)
    );
  }
  this.body.append(inner);

  for (i = 0; i < ticks.length; i++) {
    tick = jvm.$('<div/>').addClass('jvectormap-legend-tick');
    sample = jvm.$('<div/>').addClass('jvectormap-legend-tick-sample');

    switch (this.series.params.attribute) {
      case 'fill':
        if (jvm.isImageUrl(ticks[i].value)) {
          sample.css('background', 'url('+ticks[i].value+')');
        } else {
          sample.css('background', ticks[i].value);
        }
        break;
      case 'stroke':
        sample.css('background', ticks[i].value);
        break;
      case 'image':
        sample.css('background', 'url('+(typeof ticks[i].value === 'object' ? ticks[i].value.url : ticks[i].value)+') no-repeat center center');
        break;
      case 'r':
        jvm.$('<div/>').css({
          'border-radius': ticks[i].value,
          border: this.map.params.markerStyle.initial['stroke-width']+'px '+
                  this.map.params.markerStyle.initial['stroke']+' solid',
          width: ticks[i].value * 2 + 'px',
          height: ticks[i].value * 2 + 'px',
          background: this.map.params.markerStyle.initial['fill']
        }).appendTo(sample);
        break;
    }
    tick.append( sample );
    label = ticks[i].label;
    if (this.params.labelRender) {
      label = this.params.labelRender(label);
    }
    tick.append( jvm.$('<div>'+label+' </div>').addClass('jvectormap-legend-tick-text') );
    inner.append(tick);
  }
  inner.append( jvm.$('<div/>').css('clear', 'both') );
}/**
 * Creates data series.
 * @constructor
 * @param {Object} params Parameters to initialize series with.
 * @param {Array} params.values The data set to visualize.
 * @param {String} params.attribute Numeric, color or image attribute to use for data visualization. This could be: <code>fill</code>, <code>stroke</code>, <code>fill-opacity</code>, <code>stroke-opacity</code> for markers and regions and <code>r</code> (radius) or <code>image</code> for markers only.
 * @param {Array} params.scale Values used to map a dimension of data to a visual representation. The first value sets visualization for minimum value from the data set and the last value sets visualization for the maximum value. There also could be intermidiate values. Default value is <code>['#C8EEFF', '#0071A4']</code>.
 * @param {Function|String} params.normalizeFunction The function used to map input values to the provided scale. This parameter could be provided as function or one of the strings: <code>'linear'</code> or <code>'polynomial'</code>, while <code>'linear'</code> is used by default. The function provided takes value from the data set as an input and returns corresponding value from the scale.
 * @param {Number} params.min Minimum value of the data set. Could be calculated automatically if not provided.
 * @param {Number} params.max Maximum value of the data set. Could be calculated automatically if not provided.
 */
jvm.DataSeries = function (params, elements, map) {
  var scaleConstructor;

  params = params || {};
  params.attribute = params.attribute || "fill";

  this.elements = elements;
  this.params = params;
  this.map = map;

  if (params.attributes) {
    this.setAttributes(params.attributes);
  }

  if (jvm.$.isArray(params.scale)) {
    scaleConstructor =
      params.attribute === "fill" || params.attribute === "stroke"
        ? jvm.ColorScale
        : jvm.NumericScale;
    this.scale = new scaleConstructor(
      params.scale,
      params.normalizeFunction,
      params.min,
      params.max,
    );
  } else if (params.scale) {
    this.scale = new jvm.OrdinalScale(params.scale);
  } else {
    this.scale = new jvm.SimpleScale(params.scale);
  }

  this.values = params.values || {};
  this.setValues(this.values);

  if (this.params.legend) {
    this.legend = new jvm.Legend(
      jvm.$.extend(
        {
          map: this.map,
          series: this,
        },
        this.params.legend,
      ),
    );
  }
};

jvm.DataSeries.prototype = {
  setAttributes: function (key, attr) {
    var attrs = key,
      code;

    if (typeof key == "string") {
      if (this.elements[key]) {
        this.elements[key].setStyle(this.params.attribute, attr);
      }
    } else {
      for (code in attrs) {
        if (this.elements[code]) {
          this.elements[code].element.setStyle(
            this.params.attribute,
            attrs[code],
          );
        }
      }
    }
  },

  /**
   * Set values for the data set.
   * @param {Object} values Object which maps codes of regions or markers to values.
   */
  setValues: function (values) {
    var max = -Number.MAX_VALUE,
      min = Number.MAX_VALUE,
      val,
      cc,
      attrs = {};

    if (
      !(this.scale instanceof jvm.OrdinalScale) &&
      !(this.scale instanceof jvm.SimpleScale)
    ) {
      // we have a color scale as an array
      if (
        typeof this.params.min === "undefined" ||
        typeof this.params.max === "undefined"
      ) {
        // min and/or max are not defined, so calculate them
        for (cc in values) {
          val = parseFloat(values[cc]);
          if (val > max) max = val;
          if (val < min) min = val;
        }
      }

      if (typeof this.params.min === "undefined") {
        this.scale.setMin(min);
        this.params.min = min;
      } else {
        this.scale.setMin(this.params.min);
      }

      if (typeof this.params.max === "undefined") {
        this.scale.setMax(max);
        this.params.max = max;
      } else {
        this.scale.setMax(this.params.max);
      }

      for (cc in values) {
        if (cc != "indexOf") {
          val = parseFloat(values[cc]);
          if (!isNaN(val)) {
            attrs[cc] = this.scale.getValue(val);
          } else {
            attrs[cc] =
              this.elements[cc].element.style.initial[this.params.attribute];
          }
        }
      }
    } else {
      for (cc in values) {
        if (values[cc]) {
          attrs[cc] = this.scale.getValue(values[cc]);
        } else {
          attrs[cc] =
            this.elements[cc].element.style.initial[this.params.attribute];
        }
      }
    }

    this.setAttributes(attrs);
    jvm.$.extend(this.values, values);
  },

  clear: function () {
    var key,
      attrs = {};

    for (key in this.values) {
      if (this.elements[key]) {
        attrs[key] =
          this.elements[key].element.shape.style.initial[this.params.attribute];
      }
    }
    this.setAttributes(attrs);
    this.values = {};
  },

  clearAndSet: function (values) {
    this.clear();
    this.setValues(values);
  },

  /**
   * Set scale of the data series.
   * @param {Array} scale Values representing scale.
   */
  setScale: function (scale) {
    this.scale.setScale(scale);
    if (this.values) {
      this.setValues(this.values);
    }
  },

  /**
   * Set normalize function of the data series.
   * @param {Function|String} f Normalize function.
   */
  setNormalizeFunction: function (f) {
    this.scale.setNormalizeFunction(f);
    if (this.values) {
      this.setValues(this.values);
    }
  },
};
/**
 * Contains methods for transforming point on sphere to
 * Cartesian coordinates using various projections.
 * @class
 */
jvm.Proj = {
  degRad: 180 / Math.PI,
  radDeg: Math.PI / 180,
  radius: 6381372,

  sgn: function(n){
    if (n > 0) {
      return 1;
    } else if (n < 0) {
      return -1;
    } else {
      return n;
    }
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Miller projection
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  mill: function(lat, lng, c){
    return {
      x: this.radius * (lng - c) * this.radDeg,
      y: - this.radius * Math.log(Math.tan((45 + 0.4 * lat) * this.radDeg)) / 0.8
    };
  },

  /**
   * Inverse function of mill()
   * Converts Cartesian coordinates to point on sphere using Miller projection
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  mill_inv: function(x, y, c){
    return {
      lat: (2.5 * Math.atan(Math.exp(0.8 * y / this.radius)) - 5 * Math.PI / 8) * this.degRad,
      lng: (c * this.radDeg + x / this.radius) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Mercator projection
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  merc: function(lat, lng, c){
    return {
      x: this.radius * (lng - c) * this.radDeg,
      y: - this.radius * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360))
    };
  },

  /**
   * Inverse function of merc()
   * Converts Cartesian coordinates to point on sphere using Mercator projection
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  merc_inv: function(x, y, c){
    return {
      lat: (2 * Math.atan(Math.exp(y / this.radius)) - Math.PI / 2) * this.degRad,
      lng: (c * this.radDeg + x / this.radius) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Albers Equal-Area Conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/AlbersEqual-AreaConicProjection.html">Albers Equal-Area Conic projection</a>
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  aea: function(lat, lng, c){
    var fi0 = 0,
        lambda0 = c * this.radDeg,
        fi1 = 29.5 * this.radDeg,
        fi2 = 45.5 * this.radDeg,
        fi = lat * this.radDeg,
        lambda = lng * this.radDeg,
        n = (Math.sin(fi1)+Math.sin(fi2)) / 2,
        C = Math.cos(fi1)*Math.cos(fi1)+2*n*Math.sin(fi1),
        theta = n*(lambda-lambda0),
        ro = Math.sqrt(C-2*n*Math.sin(fi))/n,
        ro0 = Math.sqrt(C-2*n*Math.sin(fi0))/n;

    return {
      x: ro * Math.sin(theta) * this.radius,
      y: - (ro0 - ro * Math.cos(theta)) * this.radius
    };
  },

  /**
   * Converts Cartesian coordinates to the point on sphere using Albers Equal-Area Conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/AlbersEqual-AreaConicProjection.html">Albers Equal-Area Conic projection</a>
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  aea_inv: function(xCoord, yCoord, c){
    var x = xCoord / this.radius,
        y = yCoord / this.radius,
        fi0 = 0,
        lambda0 = c * this.radDeg,
        fi1 = 29.5 * this.radDeg,
        fi2 = 45.5 * this.radDeg,
        n = (Math.sin(fi1)+Math.sin(fi2)) / 2,
        C = Math.cos(fi1)*Math.cos(fi1)+2*n*Math.sin(fi1),
        ro0 = Math.sqrt(C-2*n*Math.sin(fi0))/n,
        ro = Math.sqrt(x*x+(ro0-y)*(ro0-y)),
        theta = Math.atan( x / (ro0 - y) );

    return {
      lat: (Math.asin((C - ro * ro * n * n) / (2 * n))) * this.degRad,
      lng: (lambda0 + theta / n) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Lambert conformal
   * conic projection
   * @see <a href="http://mathworld.wolfram.com/LambertConformalConicProjection.html">Lambert Conformal Conic Projection</a>
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  lcc: function(lat, lng, c){
    var fi0 = 0,
        lambda0 = c * this.radDeg,
        lambda = lng * this.radDeg,
        fi1 = 33 * this.radDeg,
        fi2 = 45 * this.radDeg,
        fi = lat * this.radDeg,
        n = Math.log( Math.cos(fi1) * (1 / Math.cos(fi2)) ) / Math.log( Math.tan( Math.PI / 4 + fi2 / 2) * (1 / Math.tan( Math.PI / 4 + fi1 / 2) ) ),
        F = ( Math.cos(fi1) * Math.pow( Math.tan( Math.PI / 4 + fi1 / 2 ), n ) ) / n,
        ro = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi / 2 ), n ),
        ro0 = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi0 / 2 ), n );

    return {
      x: ro * Math.sin( n * (lambda - lambda0) ) * this.radius,
      y: - (ro0 - ro * Math.cos( n * (lambda - lambda0) ) ) * this.radius
    };
  },

  /**
   * Converts Cartesian coordinates to the point on sphere using Lambert conformal conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/LambertConformalConicProjection.html">Lambert Conformal Conic Projection</a>
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  lcc_inv: function(xCoord, yCoord, c){
    var x = xCoord / this.radius,
        y = yCoord / this.radius,
        fi0 = 0,
        lambda0 = c * this.radDeg,
        fi1 = 33 * this.radDeg,
        fi2 = 45 * this.radDeg,
        n = Math.log( Math.cos(fi1) * (1 / Math.cos(fi2)) ) / Math.log( Math.tan( Math.PI / 4 + fi2 / 2) * (1 / Math.tan( Math.PI / 4 + fi1 / 2) ) ),
        F = ( Math.cos(fi1) * Math.pow( Math.tan( Math.PI / 4 + fi1 / 2 ), n ) ) / n,
        ro0 = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi0 / 2 ), n ),
        ro = this.sgn(n) * Math.sqrt(x*x+(ro0-y)*(ro0-y)),
        theta = Math.atan( x / (ro0 - y) );

    return {
      lat: (2 * Math.atan(Math.pow(F/ro, 1/n)) - Math.PI / 2) * this.degRad,
      lng: (lambda0 + theta / n) * this.degRad
    };
  }
};jvm.MapObject = function(config){};

jvm.MapObject.prototype.getLabelText = function(key){
  var text;

  if (this.config.label) {
    if (typeof this.config.label.render === 'function') {
      text = this.config.label.render(key);
    } else {
      text = key;
    }
  } else {
    text = null;
  }
  return text;
}

jvm.MapObject.prototype.getLabelOffsets = function(key){
  var offsets;

  if (this.config.label) {
    if (typeof this.config.label.offsets === 'function') {
      offsets = this.config.label.offsets(key);
    } else if (typeof this.config.label.offsets === 'object') {
      offsets = this.config.label.offsets[key];
    }
  }
  return offsets || [0, 0];
}

/**
 * Set hovered state to the element. Hovered state means mouse cursor is over element. Styles will be updates respectively.
 * @param {Boolean} isHovered <code>true</code> to make element hovered, <code>false</code> otherwise.
 */
jvm.MapObject.prototype.setHovered = function(isHovered){
  if (this.isHovered !== isHovered) {
    this.isHovered = isHovered;
    this.shape.isHovered = isHovered;
    this.shape.updateStyle();
    if (this.label) {
      this.label.isHovered = isHovered;
      this.label.updateStyle();
    }
  }
};

/**
 * Set selected state to the element. Styles will be updates respectively.
 * @param {Boolean} isSelected <code>true</code> to make element selected, <code>false</code> otherwise.
 */
jvm.MapObject.prototype.setSelected = function(isSelected){
  if (this.isSelected !== isSelected) {
    this.isSelected = isSelected;
    this.shape.isSelected = isSelected;
    this.shape.updateStyle();
    if (this.label) {
      this.label.isSelected = isSelected;
      this.label.updateStyle();
    }
    jvm.$(this.shape).trigger('selected', [isSelected]);
  }
};

jvm.MapObject.prototype.setStyle = function(){
	this.shape.setStyle.apply(this.shape, arguments);
};

jvm.MapObject.prototype.remove = function(){
  this.shape.remove();
  if (this.label) {
    this.label.remove();
  }
};jvm.Region = function(config){
  var bbox,
      text,
      offsets,
      labelDx,
      labelDy;

  this.config = config;
  this.map = this.config.map;

  this.shape = config.canvas.addPath({
    d: config.path,
    'data-code': config.code
  }, config.style, config.canvas.rootElement);
  this.shape.addClass('jvectormap-region jvectormap-element');

  bbox = this.shape.getBBox();

  text = this.getLabelText(config.code);
  if (this.config.label && text) {
    offsets = this.getLabelOffsets(config.code);
    this.labelX = bbox.x + bbox.width / 2 + offsets[0];
    this.labelY = bbox.y + bbox.height / 2 + offsets[1];
    this.label = config.canvas.addText({
      text: text,
      'text-anchor': 'middle',
      'alignment-baseline': 'central',
      x: this.labelX,
      y: this.labelY,
      'data-code': config.code
    }, config.labelStyle, config.labelsGroup);
    this.label.addClass('jvectormap-region jvectormap-element');
  }
};

jvm.inherits(jvm.Region, jvm.MapObject);

jvm.Region.prototype.updateLabelPosition = function(){
  if (this.label) {
    this.label.set({
      x: this.labelX * this.map.scale + this.map.transX * this.map.scale,
      y: this.labelY * this.map.scale + this.map.transY * this.map.scale
    });
  }
};jvm.Marker = function(config){
  var text,
      offsets;

  this.config = config;
  this.map = this.config.map;

  this.isImage = !!this.config.style.initial.image;
  this.createShape();

  text = this.getLabelText(config.index);
  if (this.config.label && text) {
    this.offsets = this.getLabelOffsets(config.index);
    this.labelX = config.cx / this.map.scale - this.map.transX;
    this.labelY = config.cy / this.map.scale - this.map.transY;
    this.label = config.canvas.addText({
      text: text,
      'data-index': config.index,
      dy: "0.6ex",
      x: this.labelX,
      y: this.labelY
    }, config.labelStyle, config.labelsGroup);

    this.label.addClass('jvectormap-marker jvectormap-element');
  }
};

jvm.inherits(jvm.Marker, jvm.MapObject);

jvm.Marker.prototype.createShape = function(){
  var that = this;

  if (this.shape) {
    this.shape.remove();
  }
  this.shape = this.config.canvas[this.isImage ? 'addImage' : 'addCircle']({
    "data-index": this.config.index,
    cx: this.config.cx,
    cy: this.config.cy
  }, this.config.style, this.config.group);

  this.shape.addClass('jvectormap-marker jvectormap-element');

  if (this.isImage) {
    jvm.$(this.shape.node).on('imageloaded', function(){
      that.updateLabelPosition();
    });
  }
};

jvm.Marker.prototype.updateLabelPosition = function(){
  if (this.label) {
    this.label.set({
      x: this.labelX * this.map.scale + this.offsets[0] +
         this.map.transX * this.map.scale + 5 + (this.isImage ? (this.shape.width || 0) / 2 : this.shape.properties.r),
      y: this.labelY * this.map.scale + this.map.transY * this.map.scale + this.offsets[1]
    });
  }
};

jvm.Marker.prototype.setStyle = function(property, value){
  var isImage;

  jvm.Marker.parentClass.prototype.setStyle.apply(this, arguments);

  if (property === 'r') {
    this.updateLabelPosition();
  }

  isImage = !!this.shape.get('image');
  if (isImage != this.isImage) {
    this.isImage = isImage;
    this.config.style = jvm.$.extend(true, {}, this.shape.style);
    this.createShape();
  }
};/**
 * Creates map, draws paths, binds events.
 * @constructor
 * @param {Object} params Parameters to initialize map with.
 * @param {String} params.map Name of the map in the format <code>territory_proj_lang</code> where <code>territory</code> is a unique code or name of the territory which the map represents (ISO 3166 standard is used where possible), <code>proj</code> is a name of projection used to generate representation of the map on the plane (projections are named according to the conventions of proj4 utility) and <code>lang</code> is a code of the language, used for the names of regions.
 * @param {String} params.backgroundColor Background color of the map in CSS format.
 * @param {Boolean} params.zoomOnScroll When set to true map could be zoomed using mouse scroll. Default value is <code>true</code>.
 * @param {Number} params.zoomOnScrollSpeed Mouse scroll speed. Number from 1 to 10. Default value is <code>3</code>.
 * @param {Boolean} params.panOnDrag When set to true, the map pans when being dragged. Default value is <code>true</code>.
 * @param {Number} params.zoomMax Indicates the maximum zoom ratio which could be reached zooming the map. Default value is <code>8</code>.
 * @param {Number} params.zoomMin Indicates the minimum zoom ratio which could be reached zooming the map. Default value is <code>1</code>.
 * @param {Number} params.zoomStep Indicates the multiplier used to zoom map with +/- buttons. Default value is <code>1.6</code>.
 * @param {Boolean} params.zoomAnimate Indicates whether or not to animate changing of map zoom with zoom buttons.
 * @param {Boolean} params.regionsSelectable When set to true regions of the map could be selected. Default value is <code>false</code>.
 * @param {Boolean} params.regionsSelectableOne Allow only one region to be selected at the moment. Default value is <code>false</code>.
 * @param {Boolean} params.markersSelectable When set to true markers on the map could be selected. Default value is <code>false</code>.
 * @param {Boolean} params.markersSelectableOne Allow only one marker to be selected at the moment. Default value is <code>false</code>.
 * @param {Object} params.regionStyle Set the styles for the map's regions. Each region or marker has four states: <code>initial</code> (default state), <code>hover</code> (when the mouse cursor is over the region or marker), <code>selected</code> (when region or marker is selected), <code>selectedHover</code> (when the mouse cursor is over the region or marker and it's selected simultaneously). Styles could be set for each of this states. Default value for that parameter is:
<pre>{
  initial: {
    fill: 'white',
    "fill-opacity": 1,
    stroke: 'none',
    "stroke-width": 0,
    "stroke-opacity": 1
  },
  hover: {
    "fill-opacity": 0.8,
    cursor: 'pointer'
  },
  selected: {
    fill: 'yellow'
  },
  selectedHover: {
  }
}</pre>
* @param {Object} params.regionLabelStyle Set the styles for the regions' labels. Each region or marker has four states: <code>initial</code> (default state), <code>hover</code> (when the mouse cursor is over the region or marker), <code>selected</code> (when region or marker is selected), <code>selectedHover</code> (when the mouse cursor is over the region or marker and it's selected simultaneously). Styles could be set for each of this states. Default value for that parameter is:
<pre>{
  initial: {
    'font-family': 'Verdana',
    'font-size': '12',
    'font-weight': 'bold',
    cursor: 'default',
    fill: 'black'
  },
  hover: {
    cursor: 'pointer'
  }
}</pre>
 * @param {Object} params.markerStyle Set the styles for the map's markers. Any parameter suitable for <code>regionStyle</code> could be used as well as numeric parameter <code>r</code> to set the marker's radius. Default value for that parameter is:
<pre>{
  initial: {
    fill: 'grey',
    stroke: '#505050',
    "fill-opacity": 1,
    "stroke-width": 1,
    "stroke-opacity": 1,
    r: 5
  },
  hover: {
    stroke: 'black',
    "stroke-width": 2,
    cursor: 'pointer'
  },
  selected: {
    fill: 'blue'
  },
  selectedHover: {
  }
}</pre>
You can also use <code>image</code> style attribute for markers. By default marker images are centered with the target point on map. To supply a custom offset please use the following format:
<pre>{
  url: 'image/url',
  offset: [-10, 5]
}</pre>
 * @param {Object} params.markerLabelStyle Set the styles for the markers' labels. Default value for that parameter is:
<pre>{
  initial: {
    'font-family': 'Verdana',
    'font-size': '12',
    'font-weight': 'bold',
    cursor: 'default',
    fill: 'black'
  },
  hover: {
    cursor: 'pointer'
  }
}</pre>
 * @param {Object|Array} params.markers Set of markers to add to the map during initialization. In case of array is provided, codes of markers will be set as string representations of array indexes. Each marker is represented by <code>latLng</code> (array of two numeric values), <code>name</code> (string which will be show on marker's tip) and any marker styles.
 * @param {Object} params.series Object with two keys: <code>markers</code> and <code>regions</code>. Each of which is an array of series configs to be applied to the respective map elements. See <a href="jvm.DataSeries.html">DataSeries</a> description for a list of parameters available.
 * @param {Object|String} params.focusOn This parameter sets the initial position and scale of the map viewport. See <code>setFocus</code> docuemntation for possible parameters.
 * @param {Object} params.labels Defines parameters for rendering static labels. Object could contain two keys: <code>regions</code> and <code>markers</code>. Each key value defines configuration object with the following possible options:
<ul>
  <li><code>render {Function}</code> - defines method for converting region code or marker index to actual label value.</li>
  <li><code>offsets {Object|Function}</code> - provides method or object which could be used to define label offset by region code or marker index.</li>
</ul>
<b>Plase note: static labels feature is not supported in Internet Explorer 8 and below.</b>
 * @param {Array|Object|String} params.selectedRegions Set initially selected regions.
 * @param {Array|Object|String} params.selectedMarkers Set initially selected markers.
 * @param {Function} params.onRegionTipShow <code>(Event e, Object tip, String code)</code> Will be called right before the region tip is going to be shown.
 * @param {Function} params.onRegionOver <code>(Event e, String code)</code> Will be called on region mouse over event.
 * @param {Function} params.onRegionOut <code>(Event e, String code)</code> Will be called on region mouse out event.
 * @param {Function} params.onRegionClick <code>(Event e, String code)</code> Will be called on region click event.
 * @param {Function} params.onRegionSelected <code>(Event e, String code, Boolean isSelected, Array selectedRegions)</code> Will be called when region is (de)selected. <code>isSelected</code> parameter of the callback indicates whether region is selected or not. <code>selectedRegions</code> contains codes of all currently selected regions.
 * @param {Function} params.onMarkerTipShow <code>(Event e, Object tip, String code)</code> Will be called right before the marker tip is going to be shown.
 * @param {Function} params.onMarkerOver <code>(Event e, String code)</code> Will be called on marker mouse over event.
 * @param {Function} params.onMarkerOut <code>(Event e, String code)</code> Will be called on marker mouse out event.
 * @param {Function} params.onMarkerClick <code>(Event e, String code)</code> Will be called on marker click event.
 * @param {Function} params.onMarkerSelected <code>(Event e, String code, Boolean isSelected, Array selectedMarkers)</code> Will be called when marker is (de)selected. <code>isSelected</code> parameter of the callback indicates whether marker is selected or not. <code>selectedMarkers</code> contains codes of all currently selected markers.
 * @param {Function} params.onViewportChange <code>(Event e, Number scale)</code> Triggered when the map's viewport is changed (map was panned or zoomed).
 */
jvm.Map = function (params) {
  var map = this,
    e;

  this.params = jvm.$.extend(true, {}, jvm.Map.defaultParams, params);

  if (!jvm.Map.maps[this.params.map]) {
    throw new Error(
      "Attempt to use map which was not loaded: " + this.params.map,
    );
  }

  this.mapData = jvm.Map.maps[this.params.map];
  this.markers = {};
  this.regions = {};
  this.regionsColors = {};
  this.regionsData = {};

  this.container = jvm.$("<div>").addClass("jvectormap-container");
  if (this.params.container) {
    this.params.container.append(this.container);
  }
  this.container.data("mapObject", this);

  this.defaultWidth = this.mapData.width;
  this.defaultHeight = this.mapData.height;

  this.setBackgroundColor(this.params.backgroundColor);

  this.onResize = function () {
    map.updateSize();
  };
  jvm.$(window).resize(this.onResize);

  for (e in jvm.Map.apiEvents) {
    if (this.params[e]) {
      this.container.bind(jvm.Map.apiEvents[e] + ".jvectormap", this.params[e]);
    }
  }

  this.canvas = new jvm.VectorCanvas(
    this.container[0],
    this.width,
    this.height,
  );

  if (this.params.bindTouchEvents) {
    if (
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch)
    ) {
      this.bindContainerTouchEvents();
    } else if (window.MSGesture) {
      this.bindContainerPointerEvents();
    }
  }
  this.bindContainerEvents();
  this.bindElementEvents();
  this.createTip();
  if (this.params.zoomButtons) {
    this.bindZoomButtons();
  }

  this.createRegions();
  this.createMarkers(this.params.markers || {});

  this.updateSize();

  if (this.params.focusOn) {
    if (typeof this.params.focusOn === "string") {
      this.params.focusOn = { region: this.params.focusOn };
    } else if (jvm.$.isArray(this.params.focusOn)) {
      this.params.focusOn = { regions: this.params.focusOn };
    }
    this.setFocus(this.params.focusOn);
  }

  if (this.params.selectedRegions) {
    this.setSelectedRegions(this.params.selectedRegions);
  }
  if (this.params.selectedMarkers) {
    this.setSelectedMarkers(this.params.selectedMarkers);
  }

  this.legendCntHorizontal = jvm
    .$("<div/>")
    .addClass("jvectormap-legend-cnt jvectormap-legend-cnt-h");
  this.legendCntVertical = jvm
    .$("<div/>")
    .addClass("jvectormap-legend-cnt jvectormap-legend-cnt-v");
  this.container.append(this.legendCntHorizontal);
  this.container.append(this.legendCntVertical);

  if (this.params.series) {
    this.createSeries();
  }
};

jvm.Map.prototype = {
  transX: 0,
  transY: 0,
  scale: 1,
  baseTransX: 0,
  baseTransY: 0,
  baseScale: 1,

  width: 0,
  height: 0,

  /**
   * Set background color of the map.
   * @param {String} backgroundColor Background color in CSS format.
   */
  setBackgroundColor: function (backgroundColor) {
    this.container.css("background-color", backgroundColor);
  },

  resize: function () {
    var curBaseScale = this.baseScale;
    if (this.width / this.height > this.defaultWidth / this.defaultHeight) {
      this.baseScale = this.height / this.defaultHeight;
      this.baseTransX =
        Math.abs(this.width - this.defaultWidth * this.baseScale) /
        (2 * this.baseScale);
    } else {
      this.baseScale = this.width / this.defaultWidth;
      this.baseTransY =
        Math.abs(this.height - this.defaultHeight * this.baseScale) /
        (2 * this.baseScale);
    }
    this.scale *= this.baseScale / curBaseScale;
    this.transX *= this.baseScale / curBaseScale;
    this.transY *= this.baseScale / curBaseScale;
  },

  /**
   * Synchronize the size of the map with the size of the container. Suitable in situations where the size of the container is changed programmatically or container is shown after it became visible.
   */
  updateSize: function () {
    this.width = this.container.width();
    this.height = this.container.height();
    this.resize();
    this.canvas.setSize(this.width, this.height);
    this.applyTransform();
  },

  /**
   * Reset all the series and show the map with the initial zoom.
   */
  reset: function () {
    var key, i;

    for (key in this.series) {
      for (i = 0; i < this.series[key].length; i++) {
        this.series[key][i].clear();
      }
    }
    this.scale = this.baseScale;
    this.transX = this.baseTransX;
    this.transY = this.baseTransY;
    this.applyTransform();
  },

  applyTransform: function () {
    var maxTransX, maxTransY, minTransX, minTransY;

    if (this.defaultWidth * this.scale <= this.width) {
      maxTransX =
        (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
      minTransX =
        (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
    } else {
      maxTransX = 0;
      minTransX = (this.width - this.defaultWidth * this.scale) / this.scale;
    }

    if (this.defaultHeight * this.scale <= this.height) {
      maxTransY =
        (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
      minTransY =
        (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
    } else {
      maxTransY = 0;
      minTransY = (this.height - this.defaultHeight * this.scale) / this.scale;
    }

    if (this.transY > maxTransY) {
      this.transY = maxTransY;
    } else if (this.transY < minTransY) {
      this.transY = minTransY;
    }
    if (this.transX > maxTransX) {
      this.transX = maxTransX;
    } else if (this.transX < minTransX) {
      this.transX = minTransX;
    }

    this.canvas.applyTransformParams(this.scale, this.transX, this.transY);

    if (this.markers) {
      this.repositionMarkers();
    }

    this.repositionLabels();

    this.container.trigger("viewportChange", [
      this.scale / this.baseScale,
      this.transX,
      this.transY,
    ]);
  },

  bindContainerEvents: function () {
    var mouseDown = false,
      oldPageX,
      oldPageY,
      map = this;

    if (this.params.panOnDrag) {
      this.container
        .mousemove(function (e) {
          if (mouseDown) {
            map.transX -= (oldPageX - e.pageX) / map.scale;
            map.transY -= (oldPageY - e.pageY) / map.scale;

            map.applyTransform();

            oldPageX = e.pageX;
            oldPageY = e.pageY;
          }
          return false;
        })
        .mousedown(function (e) {
          mouseDown = true;
          oldPageX = e.pageX;
          oldPageY = e.pageY;
          return false;
        });

      this.onContainerMouseUp = function () {
        mouseDown = false;
      };
      jvm.$("body").mouseup(this.onContainerMouseUp);
    }

    if (this.params.zoomOnScroll) {
      this.container.mousewheel(function (event, delta, deltaX, deltaY) {
        var offset = jvm.$(map.container).offset(),
          centerX = event.pageX - offset.left,
          centerY = event.pageY - offset.top,
          zoomStep = Math.pow(
            1 + map.params.zoomOnScrollSpeed / 1000,
            event.deltaFactor * event.deltaY,
          );

        map.tip.hide();

        map.setScale(map.scale * zoomStep, centerX, centerY);
        event.preventDefault();
      });
    }
  },

  bindContainerTouchEvents: function () {
    var touchStartScale,
      touchStartDistance,
      map = this,
      touchX,
      touchY,
      centerTouchX,
      centerTouchY,
      lastTouchesLength,
      handleTouchEvent = function (e) {
        var touches = e.originalEvent.touches,
          offset,
          scale,
          transXOld,
          transYOld;

        if (e.type == "touchstart") {
          lastTouchesLength = 0;
        }

        if (touches.length == 1) {
          if (lastTouchesLength == 1) {
            transXOld = map.transX;
            transYOld = map.transY;
            map.transX -= (touchX - touches[0].pageX) / map.scale;
            map.transY -= (touchY - touches[0].pageY) / map.scale;
            map.applyTransform();
            map.tip.hide();
            if (transXOld != map.transX || transYOld != map.transY) {
              e.preventDefault();
            }
          }
          touchX = touches[0].pageX;
          touchY = touches[0].pageY;
        } else if (touches.length == 2) {
          if (lastTouchesLength == 2) {
            scale =
              Math.sqrt(
                Math.pow(touches[0].pageX - touches[1].pageX, 2) +
                  Math.pow(touches[0].pageY - touches[1].pageY, 2),
              ) / touchStartDistance;
            map.setScale(touchStartScale * scale, centerTouchX, centerTouchY);
            map.tip.hide();
            e.preventDefault();
          } else {
            offset = jvm.$(map.container).offset();
            if (touches[0].pageX > touches[1].pageX) {
              centerTouchX =
                touches[1].pageX + (touches[0].pageX - touches[1].pageX) / 2;
            } else {
              centerTouchX =
                touches[0].pageX + (touches[1].pageX - touches[0].pageX) / 2;
            }
            if (touches[0].pageY > touches[1].pageY) {
              centerTouchY =
                touches[1].pageY + (touches[0].pageY - touches[1].pageY) / 2;
            } else {
              centerTouchY =
                touches[0].pageY + (touches[1].pageY - touches[0].pageY) / 2;
            }
            centerTouchX -= offset.left;
            centerTouchY -= offset.top;
            touchStartScale = map.scale;
            touchStartDistance = Math.sqrt(
              Math.pow(touches[0].pageX - touches[1].pageX, 2) +
                Math.pow(touches[0].pageY - touches[1].pageY, 2),
            );
          }
        }

        lastTouchesLength = touches.length;
      };

    jvm.$(this.container).bind("touchstart", handleTouchEvent);
    jvm.$(this.container).bind("touchmove", handleTouchEvent);
  },

  bindContainerPointerEvents: function () {
    var map = this,
      gesture = new MSGesture(),
      element = this.container[0],
      handlePointerDownEvent = function (e) {
        gesture.addPointer(e.pointerId);
      },
      handleGestureEvent = function (e) {
        var offset, scale, transXOld, transYOld;

        if (e.translationX != 0 || e.translationY != 0) {
          transXOld = map.transX;
          transYOld = map.transY;
          map.transX += e.translationX / map.scale;
          map.transY += e.translationY / map.scale;
          map.applyTransform();
          map.tip.hide();
          if (transXOld != map.transX || transYOld != map.transY) {
            e.preventDefault();
          }
        }
        if (e.scale != 1) {
          map.setScale(map.scale * e.scale, e.offsetX, e.offsetY);
          map.tip.hide();
          e.preventDefault();
        }
      };

    gesture.target = element;
    element.addEventListener("MSGestureChange", handleGestureEvent, false);
    element.addEventListener("pointerdown", handlePointerDownEvent, false);
  },

  bindElementEvents: function () {
    var map = this,
      pageX,
      pageY,
      mouseMoved;

    this.container.mousemove(function (e) {
      if (Math.abs(pageX - e.pageX) + Math.abs(pageY - e.pageY) > 2) {
        mouseMoved = true;
      }
    });

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate(
      "[class~='jvectormap-element']",
      "mouseover mouseout",
      function (e) {
        var baseVal =
            jvm.$(this).attr("class").baseVal || jvm.$(this).attr("class"),
          type =
            baseVal.indexOf("jvectormap-region") === -1 ? "marker" : "region",
          code =
            type == "region"
              ? jvm.$(this).attr("data-code")
              : jvm.$(this).attr("data-index"),
          element =
            type == "region"
              ? map.regions[code].element
              : map.markers[code].element,
          tipText =
            type == "region"
              ? map.mapData.paths[code].name
              : map.markers[code].config.name || "",
          tipShowEvent = jvm.$.Event(type + "TipShow.jvectormap"),
          overEvent = jvm.$.Event(type + "Over.jvectormap");

        if (e.type == "mouseover") {
          map.container.trigger(overEvent, [code]);
          if (!overEvent.isDefaultPrevented()) {
            element.setHovered(true);
          }

          map.tip.text(tipText);
          map.container.trigger(tipShowEvent, [map.tip, code]);
          if (!tipShowEvent.isDefaultPrevented()) {
            map.tip.show();
            map.tipWidth = map.tip.width();
            map.tipHeight = map.tip.height();
          }
        } else {
          element.setHovered(false);
          map.tip.hide();
          map.container.trigger(type + "Out.jvectormap", [code]);
        }
      },
    );

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate(
      "[class~='jvectormap-element']",
      "mousedown",
      function (e) {
        pageX = e.pageX;
        pageY = e.pageY;
        mouseMoved = false;
      },
    );

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate(
      "[class~='jvectormap-element']",
      "mouseup",
      function () {
        var baseVal = jvm.$(this).attr("class").baseVal
            ? jvm.$(this).attr("class").baseVal
            : jvm.$(this).attr("class"),
          type =
            baseVal.indexOf("jvectormap-region") === -1 ? "marker" : "region",
          code =
            type == "region"
              ? jvm.$(this).attr("data-code")
              : jvm.$(this).attr("data-index"),
          clickEvent = jvm.$.Event(type + "Click.jvectormap"),
          element =
            type == "region"
              ? map.regions[code].element
              : map.markers[code].element;

        if (!mouseMoved) {
          map.container.trigger(clickEvent, [code]);
          if (
            (type === "region" && map.params.regionsSelectable) ||
            (type === "marker" && map.params.markersSelectable)
          ) {
            if (!clickEvent.isDefaultPrevented()) {
              if (map.params[type + "sSelectableOne"]) {
                map.clearSelected(type + "s");
              }
              element.setSelected(!element.isSelected);
            }
          }
        }
      },
    );
  },

  bindZoomButtons: function () {
    var map = this;

    jvm
      .$("<div/>")
      .addClass("jvectormap-zoomin")
      .text("+")
      .appendTo(this.container);
    jvm
      .$("<div/>")
      .addClass("jvectormap-zoomout")
      .html("&#x2212;")
      .appendTo(this.container);

    this.container.find(".jvectormap-zoomin").click(function () {
      map.setScale(
        map.scale * map.params.zoomStep,
        map.width / 2,
        map.height / 2,
        false,
        map.params.zoomAnimate,
      );
    });
    this.container.find(".jvectormap-zoomout").click(function () {
      map.setScale(
        map.scale / map.params.zoomStep,
        map.width / 2,
        map.height / 2,
        false,
        map.params.zoomAnimate,
      );
    });
  },

  createTip: function () {
    var map = this;

    this.tip = jvm
      .$("<div/>")
      .addClass("jvectormap-tip")
      .appendTo(jvm.$("body"));

    this.container.mousemove(function (e) {
      var left = e.pageX - 15 - map.tipWidth,
        top = e.pageY - 15 - map.tipHeight;

      if (left < 5) {
        left = e.pageX + 15;
      }
      if (top < 5) {
        top = e.pageY + 15;
      }

      map.tip.css({
        left: left,
        top: top,
      });
    });
  },

  setScale: function (scale, anchorX, anchorY, isCentered, animate) {
    var viewportChangeEvent = jvm.$.Event("zoom.jvectormap"),
      interval,
      that = this,
      i = 0,
      count = Math.abs(
        Math.round(((scale - this.scale) * 60) / Math.max(scale, this.scale)),
      ),
      scaleStart,
      scaleDiff,
      transXStart,
      transXDiff,
      transYStart,
      transYDiff,
      transX,
      transY,
      deferred = new jvm.$.Deferred();

    if (scale > this.params.zoomMax * this.baseScale) {
      scale = this.params.zoomMax * this.baseScale;
    } else if (scale < this.params.zoomMin * this.baseScale) {
      scale = this.params.zoomMin * this.baseScale;
    }

    if (typeof anchorX != "undefined" && typeof anchorY != "undefined") {
      const zoomStep = scale / this.scale;
      if (isCentered) {
        transX =
          anchorX +
          (this.defaultWidth * (this.width / (this.defaultWidth * scale))) / 2;
        transY =
          anchorY +
          (this.defaultHeight * (this.height / (this.defaultHeight * scale))) /
            2;
      } else {
        transX = this.transX - ((zoomStep - 1) / scale) * anchorX;
        transY = this.transY - ((zoomStep - 1) / scale) * anchorY;
      }
    }

    if (animate && count > 0) {
      scaleStart = this.scale;
      scaleDiff = (scale - scaleStart) / count;
      transXStart = this.transX * this.scale;
      transYStart = this.transY * this.scale;
      transXDiff = (transX * scale - transXStart) / count;
      transYDiff = (transY * scale - transYStart) / count;
      interval = setInterval(function () {
        i += 1;
        that.scale = scaleStart + scaleDiff * i;
        that.transX = (transXStart + transXDiff * i) / that.scale;
        that.transY = (transYStart + transYDiff * i) / that.scale;
        that.applyTransform();
        if (i == count) {
          clearInterval(interval);
          that.container.trigger(viewportChangeEvent, [scale / that.baseScale]);
          deferred.resolve();
        }
      }, 10);
    } else {
      this.transX = transX;
      this.transY = transY;
      this.scale = scale;
      this.applyTransform();
      this.container.trigger(viewportChangeEvent, [scale / this.baseScale]);
      deferred.resolve();
    }

    return deferred;
  },

  /**
   * Set the map's viewport to the specific point and set zoom of the map to the specific level. Point and zoom level could be defined in two ways: using the code of some region to focus on or a central point and zoom level as numbers.
   * @param This method takes a configuration object as the single argument. The options passed to it are the following:
   * @param {Array} params.regions Array of region codes to zoom to.
   * @param {String} params.region Region code to zoom to.
   * @param {Number} params.scale Map scale to set.
   * @param {Number} params.lat Latitude to set viewport to.
   * @param {Number} params.lng Longitude to set viewport to.
   * @param {Number} params.x Number from 0 to 1 specifying the horizontal coordinate of the central point of the viewport.
   * @param {Number} params.y Number from 0 to 1 specifying the vertical coordinate of the central point of the viewport.
   * @param {Boolean} params.animate Indicates whether or not to animate the scale change and transition.
   */
  setFocus: function (config) {
    var bbox, itemBbox, newBbox, codes, i, point;

    config = config || {};

    if (config.region) {
      codes = [config.region];
    } else if (config.regions) {
      codes = config.regions;
    }

    if (codes) {
      for (i = 0; i < codes.length; i++) {
        if (this.regions[codes[i]]) {
          itemBbox = this.regions[codes[i]].element.shape.getBBox();
          if (itemBbox) {
            if (typeof bbox == "undefined") {
              bbox = itemBbox;
            } else {
              newBbox = {
                x: Math.min(bbox.x, itemBbox.x),
                y: Math.min(bbox.y, itemBbox.y),
                width:
                  Math.max(bbox.x + bbox.width, itemBbox.x + itemBbox.width) -
                  Math.min(bbox.x, itemBbox.x),
                height:
                  Math.max(bbox.y + bbox.height, itemBbox.y + itemBbox.height) -
                  Math.min(bbox.y, itemBbox.y),
              };
              bbox = newBbox;
            }
          }
        }
      }
      return this.setScale(
        Math.min(this.width / bbox.width, this.height / bbox.height),
        -(bbox.x + bbox.width / 2),
        -(bbox.y + bbox.height / 2),
        true,
        config.animate,
      );
    } else {
      if (config.lat !== undefined && config.lng !== undefined) {
        point = this.latLngToPoint(config.lat, config.lng);
        config.x = this.transX - point.x / this.scale;
        config.y = this.transY - point.y / this.scale;
      } else if (config.x && config.y) {
        config.x *= -this.defaultWidth;
        config.y *= -this.defaultHeight;
      }
      return this.setScale(
        config.scale * this.baseScale,
        config.x,
        config.y,
        true,
        config.animate,
      );
    }
  },

  getSelected: function (type) {
    var key,
      selected = [];

    for (key in this[type]) {
      if (this[type][key].element.isSelected) {
        selected.push(key);
      }
    }
    return selected;
  },

  /**
   * Return the codes of currently selected regions.
   * @returns {Array}
   */
  getSelectedRegions: function () {
    return this.getSelected("regions");
  },

  /**
   * Return the codes of currently selected markers.
   * @returns {Array}
   */
  getSelectedMarkers: function () {
    return this.getSelected("markers");
  },

  setSelected: function (type, keys) {
    var i;

    if (typeof keys != "object") {
      keys = [keys];
    }

    if (jvm.$.isArray(keys)) {
      for (i = 0; i < keys.length; i++) {
        this[type][keys[i]].element.setSelected(true);
      }
    } else {
      for (i in keys) {
        this[type][i].element.setSelected(!!keys[i]);
      }
    }
  },

  /**
   * Set or remove selected state for the regions.
   * @param {String|Array|Object} keys If <code>String</code> or <code>Array</code> the region(s) with the corresponding code(s) will be selected. If <code>Object</code> was provided its keys are  codes of regions, state of which should be changed. Selected state will be set if value is true, removed otherwise.
   */
  setSelectedRegions: function (keys) {
    this.setSelected("regions", keys);
  },

  /**
   * Set or remove selected state for the markers.
   * @param {String|Array|Object} keys If <code>String</code> or <code>Array</code> the marker(s) with the corresponding code(s) will be selected. If <code>Object</code> was provided its keys are  codes of markers, state of which should be changed. Selected state will be set if value is true, removed otherwise.
   */
  setSelectedMarkers: function (keys) {
    this.setSelected("markers", keys);
  },

  clearSelected: function (type) {
    var select = {},
      selected = this.getSelected(type),
      i;

    for (i = 0; i < selected.length; i++) {
      select[selected[i]] = false;
    }

    this.setSelected(type, select);
  },

  /**
   * Remove the selected state from all the currently selected regions.
   */
  clearSelectedRegions: function () {
    this.clearSelected("regions");
  },

  /**
   * Remove the selected state from all the currently selected markers.
   */
  clearSelectedMarkers: function () {
    this.clearSelected("markers");
  },

  /**
   * Return the instance of Map. Useful when instantiated as a jQuery plug-in.
   * @returns {Map}
   */
  getMapObject: function () {
    return this;
  },

  /**
   * Return the name of the region by region code.
   * @returns {String}
   */
  getRegionName: function (code) {
    return this.mapData.paths[code].name;
  },

  createRegions: function () {
    var key,
      region,
      map = this;

    this.regionLabelsGroup = this.regionLabelsGroup || this.canvas.addGroup();

    for (key in this.mapData.paths) {
      const regionStyle =
        typeof this.params.regionStyle === "function"
          ? {
              ...jvm.Map.defaultParams.regionStyle,
              ...this.params.regionStyle(key),
            }
          : this.params.regionStyle;
      region = new jvm.Region({
        map: this,
        path: this.mapData.paths[key].path,
        code: key,
        style: jvm.$.extend(true, {}, regionStyle),
        labelStyle: jvm.$.extend(true, {}, this.params.regionLabelStyle),
        canvas: this.canvas,
        labelsGroup: this.regionLabelsGroup,
        label:
          this.canvas.mode != "vml"
            ? this.params.labels && this.params.labels.regions
            : null,
      });

      jvm.$(region.shape).bind("selected", function (e, isSelected) {
        map.container.trigger("regionSelected.jvectormap", [
          jvm.$(this.node).attr("data-code"),
          isSelected,
          map.getSelectedRegions(),
        ]);
      });
      this.regions[key] = {
        element: region,
        config: this.mapData.paths[key],
      };
    }
  },

  createMarkers: function (markers) {
    var i,
      marker,
      point,
      markerConfig,
      markersArray,
      map = this;

    this.markersGroup = this.markersGroup || this.canvas.addGroup();
    this.markerLabelsGroup = this.markerLabelsGroup || this.canvas.addGroup();

    if (jvm.$.isArray(markers)) {
      markersArray = markers.slice();
      markers = {};
      for (i = 0; i < markersArray.length; i++) {
        markers[i] = markersArray[i];
      }
    }

    for (i in markers) {
      markerConfig =
        markers[i] instanceof Array ? { latLng: markers[i] } : markers[i];
      point = this.getMarkerPosition(markerConfig);

      if (point !== false) {
        marker = new jvm.Marker({
          map: this,
          style: jvm.$.extend(true, {}, this.params.markerStyle, {
            initial: markerConfig.style || {},
          }),
          labelStyle: jvm.$.extend(true, {}, this.params.markerLabelStyle),
          index: i,
          cx: point.x,
          cy: point.y,
          group: this.markersGroup,
          canvas: this.canvas,
          labelsGroup: this.markerLabelsGroup,
          label:
            this.canvas.mode != "vml"
              ? this.params.labels && this.params.labels.markers
              : null,
        });

        jvm.$(marker.shape).bind("selected", function (e, isSelected) {
          map.container.trigger("markerSelected.jvectormap", [
            jvm.$(this.node).attr("data-index"),
            isSelected,
            map.getSelectedMarkers(),
          ]);
        });
        if (this.markers[i]) {
          this.removeMarkers([i]);
        }
        this.markers[i] = { element: marker, config: markerConfig };
      }
    }
  },

  repositionMarkers: function () {
    var i, point;

    for (i in this.markers) {
      point = this.getMarkerPosition(this.markers[i].config);
      if (point !== false) {
        this.markers[i].element.setStyle({ cx: point.x, cy: point.y });
      }
    }
  },

  repositionLabels: function () {
    var key;

    for (key in this.regions) {
      this.regions[key].element.updateLabelPosition();
    }

    for (key in this.markers) {
      this.markers[key].element.updateLabelPosition();
    }
  },

  getMarkerPosition: function (markerConfig) {
    if (jvm.Map.maps[this.params.map].projection) {
      return this.latLngToPoint.apply(this, markerConfig.latLng || [0, 0]);
    } else {
      return {
        x: markerConfig.coords[0] * this.scale + this.transX * this.scale,
        y: markerConfig.coords[1] * this.scale + this.transY * this.scale,
      };
    }
  },

  /**
   * Add one marker to the map.
   * @param {String} key Marker unique code.
   * @param {Object} marker Marker configuration parameters.
   * @param {Array} seriesData Values to add to the data series.
   */
  addMarker: function (key, marker, seriesData) {
    var markers = {},
      data = [],
      values,
      i,
      seriesData = seriesData || [];

    markers[key] = marker;

    for (i = 0; i < seriesData.length; i++) {
      values = {};
      if (typeof seriesData[i] !== "undefined") {
        values[key] = seriesData[i];
      }
      data.push(values);
    }
    this.addMarkers(markers, data);
  },

  /**
   * Add set of marker to the map.
   * @param {Object|Array} markers Markers to add to the map. In case of array is provided, codes of markers will be set as string representations of array indexes.
   * @param {Array} seriesData Values to add to the data series.
   */
  addMarkers: function (markers, seriesData) {
    var i;

    seriesData = seriesData || [];

    this.createMarkers(markers);
    for (i = 0; i < seriesData.length; i++) {
      this.series.markers[i].setValues(seriesData[i] || {});
    }
  },

  /**
   * Remove some markers from the map.
   * @param {Array} markers Array of marker codes to be removed.
   */
  removeMarkers: function (markers) {
    var i;

    for (i = 0; i < markers.length; i++) {
      this.markers[markers[i]].element.remove();
      delete this.markers[markers[i]];
    }
  },

  /**
   * Remove all markers from the map.
   */
  removeAllMarkers: function () {
    var i,
      markers = [];

    for (i in this.markers) {
      markers.push(i);
    }
    this.removeMarkers(markers);
  },

  /**
   * Converts coordinates expressed as latitude and longitude to the coordinates in pixels on the map.
   * @param {Number} lat Latitide of point in degrees.
   * @param {Number} lng Longitude of point in degrees.
   */
  latLngToPoint: function (lat, lng) {
    var point,
      proj = jvm.Map.maps[this.params.map].projection,
      centralMeridian = proj.centralMeridian,
      inset,
      bbox;

    if (lng < -180 + centralMeridian) {
      lng += 360;
    }

    point = jvm.Proj[proj.type](lat, lng, centralMeridian);

    inset = this.getInsetForPoint(point.x, point.y);
    if (inset) {
      bbox = inset.bbox;

      point.x =
        ((point.x - bbox[0].x) / (bbox[1].x - bbox[0].x)) *
        inset.width *
        this.scale;
      point.y =
        ((point.y - bbox[0].y) / (bbox[1].y - bbox[0].y)) *
        inset.height *
        this.scale;

      return {
        x: point.x + this.transX * this.scale + inset.left * this.scale,
        y: point.y + this.transY * this.scale + inset.top * this.scale,
      };
    } else {
      return false;
    }
  },

  /**
   * Converts cartesian coordinates into coordinates expressed as latitude and longitude.
   * @param {Number} x X-axis of point on map in pixels.
   * @param {Number} y Y-axis of point on map in pixels.
   */
  pointToLatLng: function (x, y) {
    var proj = jvm.Map.maps[this.params.map].projection,
      centralMeridian = proj.centralMeridian,
      insets = jvm.Map.maps[this.params.map].insets,
      i,
      inset,
      bbox,
      nx,
      ny;

    for (i = 0; i < insets.length; i++) {
      inset = insets[i];
      bbox = inset.bbox;

      nx = x - (this.transX * this.scale + inset.left * this.scale);
      ny = y - (this.transY * this.scale + inset.top * this.scale);

      nx =
        (nx / (inset.width * this.scale)) * (bbox[1].x - bbox[0].x) + bbox[0].x;
      ny =
        (ny / (inset.height * this.scale)) * (bbox[1].y - bbox[0].y) +
        bbox[0].y;

      if (
        nx > bbox[0].x &&
        nx < bbox[1].x &&
        ny > bbox[0].y &&
        ny < bbox[1].y
      ) {
        return jvm.Proj[proj.type + "_inv"](nx, -ny, centralMeridian);
      }
    }

    return false;
  },

  getInsetForPoint: function (x, y) {
    var insets = jvm.Map.maps[this.params.map].insets,
      i,
      bbox;

    for (i = 0; i < insets.length; i++) {
      bbox = insets[i].bbox;
      if (x > bbox[0].x && x < bbox[1].x && y > bbox[0].y && y < bbox[1].y) {
        return insets[i];
      }
    }
  },

  createSeries: function () {
    var i, key;

    this.series = {
      markers: [],
      regions: [],
    };

    for (key in this.params.series) {
      for (i = 0; i < this.params.series[key].length; i++) {
        this.series[key][i] = new jvm.DataSeries(
          this.params.series[key][i],
          this[key],
          this,
        );
      }
    }
  },

  /**
   * Gracefully remove the map and and all its accessories, unbind event handlers.
   */
  remove: function () {
    this.tip.remove();
    this.container.remove();
    jvm.$(window).unbind("resize", this.onResize);
    jvm.$("body").unbind("mouseup", this.onContainerMouseUp);
  },
};

jvm.Map.maps = {};
jvm.Map.defaultParams = {
  map: "world_mill_en",
  backgroundColor: "#505050",
  zoomButtons: true,
  zoomOnScroll: true,
  zoomOnScrollSpeed: 3,
  panOnDrag: true,
  zoomMax: 8,
  zoomMin: 1,
  zoomStep: 1.6,
  zoomAnimate: true,
  regionsSelectable: false,
  markersSelectable: false,
  bindTouchEvents: true,
  regionStyle: {
    initial: {
      fill: "white",
      "fill-opacity": 1,
      stroke: "none",
      "stroke-width": 0,
      "stroke-opacity": 1,
    },
    hover: {
      "fill-opacity": 0.8,
      cursor: "pointer",
    },
    selected: {
      fill: "yellow",
    },
    selectedHover: {},
  },
  regionLabelStyle: {
    initial: {
      "font-family": "Verdana",
      "font-size": "12",
      "font-weight": "bold",
      cursor: "default",
      fill: "black",
    },
    hover: {
      cursor: "pointer",
    },
  },
  markerStyle: {
    initial: {
      fill: "grey",
      stroke: "#505050",
      "fill-opacity": 1,
      "stroke-width": 1,
      "stroke-opacity": 1,
      r: 5,
    },
    hover: {
      stroke: "black",
      "stroke-width": 2,
      cursor: "pointer",
    },
    selected: {
      fill: "blue",
    },
    selectedHover: {},
  },
  markerLabelStyle: {
    initial: {
      "font-family": "Verdana",
      "font-size": "12",
      "font-weight": "bold",
      cursor: "default",
      fill: "black",
    },
    hover: {
      cursor: "pointer",
    },
  },
};
jvm.Map.apiEvents = {
  onRegionTipShow: "regionTipShow",
  onRegionOver: "regionOver",
  onRegionOut: "regionOut",
  onRegionClick: "regionClick",
  onRegionSelected: "regionSelected",
  onMarkerTipShow: "markerTipShow",
  onMarkerOver: "markerOver",
  onMarkerOut: "markerOut",
  onMarkerClick: "markerClick",
  onMarkerSelected: "markerSelected",
  onViewportChange: "viewportChange",
};
/**
 * Creates map with drill-down functionality.
 * @constructor
 * @param {Object} params Parameters to initialize map with.
 * @param {Number} params.maxLevel Maximum number of levels user can go through
 * @param {Object} params.main Config of the main map. See <a href="./jvm-map/">jvm.Map</a> for more information.
 * @param {Function} params.mapNameByCode Function to generate map name by region code. Default value is:
<pre>
function(code, multiMap) {
  return code.toLowerCase()+'_'+
         multiMap.defaultProjection+'_en';
}
</pre>
 * @param {Function} params.mapUrlByCode Function to generate map url by region code. Default value is:
<pre>
function(code, multiMap){
  return 'jquery-jvectormap-data-'+
         code.toLowerCase()+'-'+
         multiMap.defaultProjection+'-en.js';
}
</pre>
 */
jvm.MultiMap = function (params) {
  var that = this;

  this.maps = {};
  this.params = jvm.$.extend(true, {}, jvm.MultiMap.defaultParams, params);
  this.params.maxLevel = this.params.maxLevel || Number.MAX_VALUE;
  this.params.main = this.params.main || {};
  this.params.main.multiMapLevel = 0;
  this.history = [this.addMap(this.params.main.map, this.params.main)];
  this.defaultProjection = this.history[0].mapData.projection.type;
  this.mapsLoaded = {};
  this.mapsLoadedData = {};

  this.params.container.css({ position: "relative" });
  this.backButton = jvm
    .$("<div/>")
    .addClass("jvectormap-goback")
    .text("Back")
    .appendTo(this.params.container);
  this.backButton.hide();
  this.backButton.click(function () {
    that.goBack();
  });

  this.spinner = jvm
    .$("<div/>")
    .addClass("jvectormap-spinner")
    .appendTo(this.params.container);
  this.spinner.hide();
};

jvm.MultiMap.prototype = {
  addMap: function (name, config) {
    var cnt = jvm.$("<div/>").css({
      width: "100%",
      height: "100%",
    });

    this.params.container.append(cnt);

    this.maps[name] = new jvm.Map(jvm.$.extend(config, { container: cnt }));
    if (this.params.maxLevel > config.multiMapLevel) {
      this.maps[name].container.on(
        "regionClick.jvectormap",
        { scope: this },
        function (e, code) {
          var multimap = e.data.scope,
            mapName = multimap.params.mapNameByCode(code, multimap);

          if (
            !multimap.drillDownPromise ||
            multimap.drillDownPromise.state() !== "pending"
          ) {
            multimap.drillDown(mapName, code);
          }
        },
      );
    }

    return this.maps[name];
  },

  downloadMap: function (code) {
    var that = this,
      deferred = jvm.$.Deferred();
    const { getDrillDownMap } = this.params;

    const handleMapData = function (data) {
      that.mapsLoaded[code] = true;
      that.mapsLoadedData[code] = data;
      deferred.resolve();
    };

    if (!this.mapsLoaded[code]) {
      if (getDrillDownMap && typeof getDrillDownMap === "function") {
        const result = getDrillDownMap(code);
        if (result && typeof result.then === "function") {
          result
            .then((data) => {
              handleMapData(data);
            })
            .catch(() => {
              deferred.reject();
            });
        } else {
          handleMapData(result);
        }
        return deferred;
      }
      jvm.$.get(this.params.mapUrlByCode(code, this)).then(
        function (data) {
          handleMapData(data);
        },
        function () {
          deferred.reject();
        },
      );
    } else {
      deferred.resolve();
    }
    return deferred;
  },

  drillDown: function (name, code) {
    var currentMap = this.history[this.history.length - 1],
      that = this,
      focusPromise = currentMap.setFocus({ region: code, animate: true }),
      downloadPromise = this.downloadMap(code);

    focusPromise.then(function () {
      if (downloadPromise.state() === "pending") {
        that.spinner.show();
      }
    });
    downloadPromise.always(function () {
      that.spinner.hide();
    });
    this.drillDownPromise = jvm.$.when(downloadPromise, focusPromise);
    this.drillDownPromise.then(function () {
      const { content } = that.mapsLoadedData[code];
      currentMap.params.container.hide();
      if (!that.maps[name]) {
        jvm.$.fn.vectorMap("addMap", name, content);
        that.addMap(name, {
          map: name,
          multiMapLevel: currentMap.params.multiMapLevel + 1,
        });
      } else {
        that.maps[name].params.container.show();
      }
      that.history.push(that.maps[name]);
      that.backButton.show();
    });
  },

  goBack: function () {
    var currentMap = this.history.pop(),
      prevMap = this.history[this.history.length - 1],
      that = this;

    currentMap
      .setFocus({ scale: 1, x: 0.5, y: 0.5, animate: true })
      .then(function () {
        currentMap.params.container.hide();
        prevMap.params.container.show();
        prevMap.updateSize();
        if (that.history.length === 1) {
          that.backButton.hide();
        }
        prevMap.setFocus({ scale: 1, x: 0.5, y: 0.5, animate: true });
      });
  },
};

jvm.MultiMap.defaultParams = {
  mapNameByCode: function (code, multiMap) {
    return code.toLowerCase() + "_" + multiMap.defaultProjection + "_en";
  },
  mapUrlByCode: function (code, multiMap) {
    return (
      "jquery-jvectormap-data-" +
      code.toLowerCase() +
      "-" +
      multiMap.defaultProjection +
      "-en.js"
    );
  },
};


//# sourceURL=webpack://@react-jvectormap/core/../jvectormap/jquery.jvectormap.min.js?`)}),"data:image/gif;base64,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":(module=>{eval(`module.exports = "data:image/gif;base64,R0lGODlhIAAgAPMAAP///wAAAMbGxoSEhLa2tpqamjY2NlZWVtjY2OTk5Ly8vB4eHgQEBAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHRLYKhKP1oZmADdEAAAh+QQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY/CZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB+A4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6+Ho7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq+B6QDtuetcaBPnW6+O7wDHpIiK9SaVK5GgV543tzjgGcghAgAh+QQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK++G+w48edZPK+M6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE+G+cD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm+FNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk+aV+oJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0/VNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc+XiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30/iI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE/jiuL04RGEBgwWhShRgQExHBAAh+QQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR+ipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY+Yip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd+MFCN6HAAIKgNggY0KtEBAAh+QQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1+vsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d+jYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg+ygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0+bm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h+Kr0SJ8MFihpNbx+4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX+BP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA==";

//# sourceURL=webpack://@react-jvectormap/core/data:image/gif;base64,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?`)}),jquery:(I=>{I.exports=__WEBPACK_EXTERNAL_MODULE_jquery__}),react:(I=>{I.exports=__WEBPACK_EXTERNAL_MODULE_react__})},__webpack_module_cache__={};function __webpack_require__(I){var w=__webpack_module_cache__[I];if(w!==void 0)return w.exports;var H=__webpack_module_cache__[I]={id:I,exports:{}};return __webpack_modules__[I](H,H.exports,__webpack_require__),H.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.n=I=>{var w=I&&I.__esModule?()=>I.default:()=>I;return __webpack_require__.d(w,{a:w}),w},__webpack_require__.d=(I,w)=>{for(var H in w)__webpack_require__.o(w,H)&&!__webpack_require__.o(I,H)&&Object.defineProperty(I,H,{enumerable:!0,get:w[H]})},__webpack_require__.o=(I,w)=>Object.prototype.hasOwnProperty.call(I,w),__webpack_require__.r=I=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(I,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(I,"__esModule",{value:!0})},__webpack_require__.b=document.baseURI||self.location.href;var __webpack_exports__=__webpack_require__("./src/index.ts");return __webpack_exports__})()})})(dist)),dist.exports}requireDist();function Home(){return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(PageMeta,{title:"React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template",description:"This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"}),jsxRuntimeExports.jsxs("div",{className:"grid grid-cols-12 gap-4 md:gap-6",children:[jsxRuntimeExports.jsxs("div",{className:"col-span-12 space-y-6 xl:col-span-7",children:[jsxRuntimeExports.jsx(EcommerceMetrics,{}),jsxRuntimeExports.jsx(MonthlySalesChart,{})]}),jsxRuntimeExports.jsx("div",{className:"col-span-12 xl:col-span-5",children:jsxRuntimeExports.jsx(MonthlyTarget,{})}),jsxRuntimeExports.jsx("div",{className:"col-span-12",children:jsxRuntimeExports.jsx(StatisticsChart,{})})]})]})}export{Home as default};
