/*! For license information please see 73.dd9533d4.chunk.js.LICENSE.txt */
(this["webpackJsonpe-brs"]=this["webpackJsonpe-brs"]||[]).push([[73],{1011:function(e,t,n){e.exports=n.p+"static/media/file-searching.521df1b9.svg"},1158:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(26),i=n(92),s=n(93),c=n(1011),l=n.n(c),u=n(73);t.default=()=>a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a,{breadCrumbItems:[{label:"Pages",path:"/pages/error-404"},{label:"404",path:"/pages/error-404",active:!0}],title:"404 Error"}),a.a.createElement(i.a,{className:"justify-content-center"},a.a.createElement(s.a,{lg:4},a.a.createElement("div",{className:"text-center"},a.a.createElement("img",{src:l.a,height:"90",alt:""}),a.a.createElement("h1",{className:"text-error mt-4"},"404"),a.a.createElement("h4",{className:"text-uppercase text-danger mt-3"},"Page Not Found"),a.a.createElement("p",{className:"text-muted mt-3"},"It's looking like you may have taken a wrong turn. Don't worry... it happens to the best of us. Here's a little tip that might help you get back on track."),a.a.createElement(o.b,{className:"btn btn-info mt-3",to:"/"},a.a.createElement("i",{className:"mdi mdi-reply"})," Return Home")))))},59:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},60:function(e,t,n){"use strict";n.r(t),n.d(t,"getScrollbarWidth",(function(){return i})),n.d(t,"setScrollbarWidth",(function(){return s})),n.d(t,"isBodyOverflowing",(function(){return c})),n.d(t,"getOriginalBodyPadding",(function(){return l})),n.d(t,"conditionallyUpdateScrollbar",(function(){return u})),n.d(t,"setGlobalCssModule",(function(){return d})),n.d(t,"mapToCssModules",(function(){return f})),n.d(t,"omit",(function(){return p})),n.d(t,"pick",(function(){return m})),n.d(t,"warnOnce",(function(){return g})),n.d(t,"deprecated",(function(){return y})),n.d(t,"DOMElement",(function(){return v})),n.d(t,"targetPropType",(function(){return E})),n.d(t,"tagPropType",(function(){return N})),n.d(t,"TransitionTimeouts",(function(){return O})),n.d(t,"TransitionPropTypeKeys",(function(){return T})),n.d(t,"TransitionStatuses",(function(){return j})),n.d(t,"keyCodes",(function(){return w})),n.d(t,"PopperPlacements",(function(){return x})),n.d(t,"canUseDOM",(function(){return M})),n.d(t,"isReactRefObj",(function(){return P})),n.d(t,"toNumber",(function(){return A})),n.d(t,"isObject",(function(){return k})),n.d(t,"isFunction",(function(){return I})),n.d(t,"findDOMElements",(function(){return S})),n.d(t,"isArrayOrNodeList",(function(){return D})),n.d(t,"getTarget",(function(){return $})),n.d(t,"defaultToggleEvents",(function(){return F})),n.d(t,"addMultipleEventListeners",(function(){return G})),n.d(t,"focusableElements",(function(){return R}));var r,a=n(11),o=n.n(a);function i(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function s(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){return document.body.clientWidth<window.innerWidth}function l(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function u(){var e=i(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;c()&&s(n+e)}function d(e){r=e}function f(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function p(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}function m(e,t){for(var n,r=Array.isArray(t)?t:[t],a=r.length,o={};a>0;)o[n=r[a-=1]]=e[n];return o}var b={};function g(e){b[e]||("undefined"!==typeof console&&console.error(e),b[e]=!0)}function y(e,t){return function(n,r,a){null!==n[r]&&"undefined"!==typeof n[r]&&g('"'+r+'" property of "'+a+'" has been deprecated.\n'+t);for(var o=arguments.length,i=new Array(o>3?o-3:0),s=3;s<o;s++)i[s-3]=arguments[s];return e.apply(void 0,[n,r,a].concat(i))}}var h="object"===typeof window&&window.Element||function(){};function v(e,t,n){if(!(e[t]instanceof h))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var E=o.a.oneOfType([o.a.string,o.a.func,v,o.a.shape({current:o.a.any})]),N=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),O={Fade:150,Collapse:350,Modal:300,Carousel:600},T=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],j={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},w={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},x=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],M=!("undefined"===typeof window||!window.document||!window.document.createElement);function P(e){return!(!e||"object"!==typeof e)&&"current"in e}function C(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function A(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===C(e))return NaN;if(k(e)){var n="function"===typeof e.valueOf?e.valueOf():e;e=k(n)?""+n:n}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var r=/^0b[01]+$/i.test(e);return r||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),r?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function k(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function I(e){if(!k(e))return!1;var t=C(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function S(e){if(P(e))return e.current;if(I(e))return e();if("string"===typeof e&&M){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function D(e){return null!==e&&(Array.isArray(e)||M&&"number"===typeof e.length)}function $(e,t){var n=S(e);return D(n)&&!t?n[0]:n}var F=["touchstart","click"];function G(e,t,n,r){var a=e;D(a)||(a=[a]);var o=n;if("string"===typeof o&&(o=o.split(/\s+/)),!D(a)||"function"!==typeof t||!Array.isArray(o))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(o,(function(e){Array.prototype.forEach.call(a,(function(n){n.addEventListener(e,t,r)}))})),function(){Array.prototype.forEach.call(o,(function(e){Array.prototype.forEach.call(a,(function(n){n.removeEventListener(e,t,r)}))}))}}var R=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},73:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(26),i=n(92),s=n(93),c=n(88),l=n(89);n(11);t.a=e=>a.a.createElement(i.a,null,a.a.createElement(s.a,null,a.a.createElement("div",{className:"page-title-box"},a.a.createElement("div",{className:"page-title-right"},a.a.createElement(c.a,null,a.a.createElement(l.a,null,a.a.createElement(o.b,{to:"/"},"Hyper")),e.breadCrumbItems.map((e,t)=>e.active?a.a.createElement(l.a,{active:!0,key:t},e.label):a.a.createElement(l.a,{key:t},a.a.createElement(o.b,{to:e.path},e.label))))),a.a.createElement("h4",{className:"page-title"},e.title))))},88:function(e,t,n){"use strict";var r=n(6),a=n(10),o=n(0),i=n.n(o),s=n(11),c=n.n(s),l=n(59),u=n.n(l),d=n(60),f={tag:d.tagPropType,listTag:d.tagPropType,className:c.a.string,listClassName:c.a.string,cssModule:c.a.object,children:c.a.node,"aria-label":c.a.string},p=function(e){var t=e.className,n=e.listClassName,o=e.cssModule,s=e.children,c=e.tag,l=e.listTag,f=e["aria-label"],p=Object(a.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),m=Object(d.mapToCssModules)(u()(t),o),b=Object(d.mapToCssModules)(u()("breadcrumb",n),o);return i.a.createElement(c,Object(r.a)({},p,{className:m,"aria-label":f}),i.a.createElement(l,{className:b},s))};p.propTypes=f,p.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=p},89:function(e,t,n){"use strict";var r=n(6),a=n(10),o=n(0),i=n.n(o),s=n(11),c=n.n(s),l=n(59),u=n.n(l),d=n(60),f={tag:d.tagPropType,active:c.a.bool,className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,n=e.cssModule,o=e.active,s=e.tag,c=Object(a.a)(e,["className","cssModule","active","tag"]),l=Object(d.mapToCssModules)(u()(t,!!o&&"active","breadcrumb-item"),n);return i.a.createElement(s,Object(r.a)({},c,{className:l,"aria-current":o?"page":void 0}))};p.propTypes=f,p.defaultProps={tag:"li"},t.a=p},92:function(e,t,n){"use strict";var r=n(6),a=n(10),o=n(0),i=n.n(o),s=n(11),c=n.n(s),l=n(59),u=n.n(l),d=n(60),f={tag:d.tagPropType,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool},p=function(e){var t=e.className,n=e.cssModule,o=e.noGutters,s=e.tag,c=e.form,l=Object(a.a)(e,["className","cssModule","noGutters","tag","form"]),f=Object(d.mapToCssModules)(u()(t,o?"no-gutters":null,c?"form-row":"row"),n);return i.a.createElement(s,Object(r.a)({},l,{className:f}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},93:function(e,t,n){"use strict";var r=n(6),a=n(10),o=n(0),i=n.n(o),s=n(11),c=n.n(s),l=n(59),u=n.n(l),d=n(60),f=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:f,offset:f})]),m={tag:d.tagPropType,xs:p,sm:p,md:p,lg:p,xl:p,className:c.a.string,cssModule:c.a.object,widths:c.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},y=function(e){var t=e.className,n=e.cssModule,o=e.widths,s=e.tag,c=Object(a.a)(e,["className","cssModule","widths","tag"]),l=[];o.forEach((function(t,r){var a=e[t];if(delete c[t],a||""===a){var o=!r;if(Object(d.isObject)(a)){var i,s=o?"-":"-"+t+"-",f=g(o,t,a.size);l.push(Object(d.mapToCssModules)(u()(((i={})[f]=a.size||""===a.size,i["order"+s+a.order]=a.order||0===a.order,i["offset"+s+a.offset]=a.offset||0===a.offset,i)),n))}else{var p=g(o,t,a);l.push(p)}}})),l.length||l.push("col");var f=Object(d.mapToCssModules)(u()(t,l),n);return i.a.createElement(s,Object(r.a)({},c,{className:f}))};y.propTypes=m,y.defaultProps=b,t.a=y}}]);
//# sourceMappingURL=73.dd9533d4.chunk.js.map