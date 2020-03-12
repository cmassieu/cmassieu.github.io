/*! For license information please see 48.490994d6.chunk.js.LICENSE.txt */
(this["webpackJsonpe-brs"]=this["webpackJsonpe-brs"]||[]).push([[48],{1164:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(0),o=a.n(r),l=a(90),s=a(91),i=a(98),c=a(99),u=a(26),m=a(69),d=a(553),p=a.n(d),f=a(554),b=a.n(f),g=a(555),h=a.n(g),y=a(910),E=a.n(y);const v=e=>{const t=e.summary||{};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"border p-3 mt-4 mt-lg-0 rounded"},o.a.createElement("h4",{className:"header-title mb-3"},"Order Summary"),o.a.createElement("div",{className:"table-responsive"},o.a.createElement("table",{className:"table mb-0"},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Grand Total :"),o.a.createElement("td",null,"$",t.gross_total.toFixed(2))),o.a.createElement("tr",null,o.a.createElement("td",null,"Discount : "),o.a.createElement("td",null,"-$",t.discount.toFixed(2))),o.a.createElement("tr",null,o.a.createElement("td",null,"Shipping Charge :"),o.a.createElement("td",null,"$",t.shipping_charge.toFixed(2))),o.a.createElement("tr",null,o.a.createElement("td",null,"Estimated Tax : "),o.a.createElement("td",null,"$",t.tax.toFixed(2))),o.a.createElement("tr",null,o.a.createElement("th",null,"Total :"),o.a.createElement("th",null,"$",t.net_total.toFixed(2))))))),o.a.createElement("div",{className:"alert alert-warning mt-3",role:"alert"},"Use coupon code ",o.a.createElement("strong",null,"HYPBM")," and get 10% discount!"),o.a.createElement("div",{className:"input-group mt-3"},o.a.createElement("input",{type:"text",className:"form-control form-control-light",placeholder:"Coupon code","aria-label":"Recipient's username"}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("button",{className:"btn btn-light",type:"button"},"Apply"))))};class N extends r.Component{constructor(e){super(e),this.onQtyChange=(e,t)=>{var a=[...this.state.items],r=a.findIndex(e=>e.id===t.id),o=e.target.value,l=a[r].price*o;a[r]=Object(n.a)({},t,{qty:o,total:l}),this._adjustCart(a)},this.removeItem=(e,t)=>{e.preventDefault();var a=this.state.items.filter(e=>e.id!==t.id);this._adjustCart(a)},this._adjustCart=e=>{var t=0,a=!0,r=!1,o=void 0;try{for(var l,s=e[Symbol.iterator]();!(a=(l=s.next()).done);a=!0){t+=l.value.total}}catch(c){r=!0,o=c}finally{try{a||null==s.return||s.return()}finally{if(r)throw o}}var i=t-this.state.summary.discount+this.state.summary.shipping_charge+this.state.summary.tax;this.setState({items:e,summary:Object(n.a)({},this.state.summary,{gross_total:t,net_total:i})})},this.state={items:[{id:1,image:b.a,name:"Amazing Modern Chair",size:"Large",color:"Light Green",price:148.66,qty:5,total:743.3},{id:2,image:E.a,name:"Biblio Plastic Armchair",size:"Small",color:"Brown",price:99,qty:2,total:198},{id:3,image:h.a,name:"Designer Awesome Chair",size:"Medium",color:"Green",price:49.99,qty:3,total:499.9},{id:4,image:p.a,name:"Unpowered aircraft",size:"Large",color:"Orange",price:129.99,qty:1,total:129.99}],summary:{gross_total:1571.19,discount:157.11,shipping_charge:25,tax:19.22,net_total:1458.3}},this.onQtyChange=this.onQtyChange.bind(this),this.removeItem=this.removeItem.bind(this)}render(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{breadCrumbItems:[{label:"eCommerce",path:"/apps/ecommerce/shopping-cart"},{label:"Cart",path:"/apps/ecommerce/shopping-cart",active:!0}],title:"Shopping Cart"}),o.a.createElement(l.a,null,o.a.createElement(s.a,null,o.a.createElement(i.a,null,o.a.createElement(c.a,null,o.a.createElement(l.a,null,o.a.createElement(s.a,{lg:8},o.a.createElement("div",{className:"table-responsive"},o.a.createElement("table",{className:"table table-borderless table-centered mb-0"},o.a.createElement("thead",{className:"thead-light"},o.a.createElement("tr",null,o.a.createElement("th",null,"Product"),o.a.createElement("th",null,"Price"),o.a.createElement("th",null,"Quantity"),o.a.createElement("th",null,"Total"),o.a.createElement("th",{style:{width:"50px"}}))),o.a.createElement("tbody",null,this.state.items.map((e,t)=>o.a.createElement("tr",{key:t},o.a.createElement("td",null,o.a.createElement("img",{src:e.image,alt:e.name,title:"contact-img",className:"rounded mr-3",height:"64"}),o.a.createElement("p",{className:"m-0 d-inline-block align-middle font-16"},o.a.createElement(u.b,{to:"/",className:"text-body"},e.name),o.a.createElement("br",null),o.a.createElement("small",{className:"mr-2"},o.a.createElement("b",null,"Size:")," ",e.size," "),o.a.createElement("small",null,o.a.createElement("b",null,"Color:")," ",e.color," "))),o.a.createElement("td",null,"$",e.price.toFixed(2)),o.a.createElement("td",null,o.a.createElement("input",{type:"number",min:"1",value:e.qty,className:"form-control",placeholder:"Qty",style:{width:"90px"},onChange:t=>{this.onQtyChange(t,e)}})),o.a.createElement("td",null,"$",e.total.toFixed(2)),o.a.createElement("td",null,o.a.createElement(u.b,{to:"/",className:"action-icon",onClick:t=>{this.removeItem(t,e)}}," ",o.a.createElement("i",{className:"mdi mdi-delete"})))))))),o.a.createElement("div",{className:"mt-3"},o.a.createElement("label",{htmlFor:"example-textarea"},"Add a Note:"),o.a.createElement("textarea",{className:"form-control",id:"example-textarea",rows:"3",placeholder:"Write some note.."})),o.a.createElement(l.a,{className:"mt-4"},o.a.createElement(s.a,{sm:6},o.a.createElement("a",{href:"/",className:"btn text-muted d-none d-sm-inline-block btn-link font-weight-semibold"},o.a.createElement("i",{className:"mdi mdi-arrow-left"})," Continue Shopping"," ")),o.a.createElement(s.a,{sm:6},o.a.createElement("div",{className:"text-sm-right"},o.a.createElement("a",{href:"/",className:"btn btn-danger"},o.a.createElement("i",{className:"mdi mdi-cart-plus mr-1"})," Checkout"," "))))),o.a.createElement(s.a,{lg:4},o.a.createElement(v,{summary:this.state.summary}))))))))}}t.default=N},553:function(e,t,a){e.exports=a.p+"static/media/product-5.cbc48175.jpg"},554:function(e,t,a){e.exports=a.p+"static/media/product-1.cbe5c484.jpg"},555:function(e,t,a){e.exports=a.p+"static/media/product-3.f18833ea.jpg"},59:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===o)for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},60:function(e,t,a){"use strict";a.r(t),a.d(t,"getScrollbarWidth",(function(){return l})),a.d(t,"setScrollbarWidth",(function(){return s})),a.d(t,"isBodyOverflowing",(function(){return i})),a.d(t,"getOriginalBodyPadding",(function(){return c})),a.d(t,"conditionallyUpdateScrollbar",(function(){return u})),a.d(t,"setGlobalCssModule",(function(){return m})),a.d(t,"mapToCssModules",(function(){return d})),a.d(t,"omit",(function(){return p})),a.d(t,"pick",(function(){return f})),a.d(t,"warnOnce",(function(){return g})),a.d(t,"deprecated",(function(){return h})),a.d(t,"DOMElement",(function(){return E})),a.d(t,"targetPropType",(function(){return v})),a.d(t,"tagPropType",(function(){return N})),a.d(t,"TransitionTimeouts",(function(){return j})),a.d(t,"TransitionPropTypeKeys",(function(){return x})),a.d(t,"TransitionStatuses",(function(){return O})),a.d(t,"keyCodes",(function(){return T})),a.d(t,"PopperPlacements",(function(){return w})),a.d(t,"canUseDOM",(function(){return C})),a.d(t,"isReactRefObj",(function(){return M})),a.d(t,"toNumber",(function(){return A})),a.d(t,"isObject",(function(){return S})),a.d(t,"isFunction",(function(){return k})),a.d(t,"findDOMElements",(function(){return F})),a.d(t,"isArrayOrNodeList",(function(){return I})),a.d(t,"getTarget",(function(){return $})),a.d(t,"defaultToggleEvents",(function(){return R})),a.d(t,"addMultipleEventListeners",(function(){return _})),a.d(t,"focusableElements",(function(){return z}));var n,r=a(11),o=a.n(r);function l(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function s(e){document.body.style.paddingRight=e>0?e+"px":null}function i(){return document.body.clientWidth<window.innerWidth}function c(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function u(){var e=l(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],a=t?parseInt(t.style.paddingRight||0,10):0;i()&&s(a+e)}function m(e){n=e}function d(e,t){return void 0===e&&(e=""),void 0===t&&(t=n),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function p(e,t){var a={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(a[n]=e[n])})),a}function f(e,t){for(var a,n=Array.isArray(t)?t:[t],r=n.length,o={};r>0;)o[a=n[r-=1]]=e[a];return o}var b={};function g(e){b[e]||("undefined"!==typeof console&&console.error(e),b[e]=!0)}function h(e,t){return function(a,n,r){null!==a[n]&&"undefined"!==typeof a[n]&&g('"'+n+'" property of "'+r+'" has been deprecated.\n'+t);for(var o=arguments.length,l=new Array(o>3?o-3:0),s=3;s<o;s++)l[s-3]=arguments[s];return e.apply(void 0,[a,n,r].concat(l))}}var y="object"===typeof window&&window.Element||function(){};function E(e,t,a){if(!(e[t]instanceof y))return new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Expected prop to be an instance of Element. Validation failed.")}var v=o.a.oneOfType([o.a.string,o.a.func,E,o.a.shape({current:o.a.any})]),N=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),j={Fade:150,Collapse:350,Modal:300,Carousel:600},x=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],O={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},T={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},w=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],C=!("undefined"===typeof window||!window.document||!window.document.createElement);function M(e){return!(!e||"object"!==typeof e)&&"current"in e}function P(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function A(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===P(e))return NaN;if(S(e)){var a="function"===typeof e.valueOf?e.valueOf():e;e=S(a)?""+a:a}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var n=/^0b[01]+$/i.test(e);return n||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),n?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function S(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function k(e){if(!S(e))return!1;var t=P(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function F(e){if(M(e))return e.current;if(k(e))return e();if("string"===typeof e&&C){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function I(e){return null!==e&&(Array.isArray(e)||C&&"number"===typeof e.length)}function $(e,t){var a=F(e);return I(a)&&!t?a[0]:a}var R=["touchstart","click"];function _(e,t,a,n){var r=e;I(r)||(r=[r]);var o=a;if("string"===typeof o&&(o=o.split(/\s+/)),!I(r)||"function"!==typeof t||!Array.isArray(o))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(o,(function(e){Array.prototype.forEach.call(r,(function(a){a.addEventListener(e,t,n)}))})),function(){Array.prototype.forEach.call(o,(function(e){Array.prototype.forEach.call(r,(function(a){a.removeEventListener(e,t,n)}))}))}}var z=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},69:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(26),l=a(90),s=a(91),i=a(86),c=a(87);a(11);t.a=e=>r.a.createElement(l.a,null,r.a.createElement(s.a,null,r.a.createElement("div",{className:"page-title-box"},r.a.createElement("div",{className:"page-title-right"},r.a.createElement(i.a,null,r.a.createElement(c.a,null,r.a.createElement(o.b,{to:"/"},"e-BRS")),e.breadCrumbItems.map((e,t)=>e.active?r.a.createElement(c.a,{active:!0,key:t},e.label):r.a.createElement(c.a,{key:t},r.a.createElement(o.b,{to:e.path},e.label))))),r.a.createElement("h4",{className:"page-title"},e.title))))},86:function(e,t,a){"use strict";var n=a(6),r=a(10),o=a(0),l=a.n(o),s=a(11),i=a.n(s),c=a(59),u=a.n(c),m=a(60),d={tag:m.tagPropType,listTag:m.tagPropType,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},p=function(e){var t=e.className,a=e.listClassName,o=e.cssModule,s=e.children,i=e.tag,c=e.listTag,d=e["aria-label"],p=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),f=Object(m.mapToCssModules)(u()(t),o),b=Object(m.mapToCssModules)(u()("breadcrumb",a),o);return l.a.createElement(i,Object(n.a)({},p,{className:f,"aria-label":d}),l.a.createElement(c,{className:b},s))};p.propTypes=d,p.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=p},87:function(e,t,a){"use strict";var n=a(6),r=a(10),o=a(0),l=a.n(o),s=a(11),i=a.n(s),c=a(59),u=a.n(c),m=a(60),d={tag:m.tagPropType,active:i.a.bool,className:i.a.string,cssModule:i.a.object},p=function(e){var t=e.className,a=e.cssModule,o=e.active,s=e.tag,i=Object(r.a)(e,["className","cssModule","active","tag"]),c=Object(m.mapToCssModules)(u()(t,!!o&&"active","breadcrumb-item"),a);return l.a.createElement(s,Object(n.a)({},i,{className:c,"aria-current":o?"page":void 0}))};p.propTypes=d,p.defaultProps={tag:"li"},t.a=p},90:function(e,t,a){"use strict";var n=a(6),r=a(10),o=a(0),l=a.n(o),s=a(11),i=a.n(s),c=a(59),u=a.n(c),m=a(60),d={tag:m.tagPropType,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool},p=function(e){var t=e.className,a=e.cssModule,o=e.noGutters,s=e.tag,i=e.form,c=Object(r.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(m.mapToCssModules)(u()(t,o?"no-gutters":null,i?"form-row":"row"),a);return l.a.createElement(s,Object(n.a)({},c,{className:d}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},91:function(e,t,a){"use strict";var n=a(6),r=a(10),o=a(0),l=a.n(o),s=a(11),i=a.n(s),c=a(59),u=a.n(c),m=a(60),d=i.a.oneOfType([i.a.number,i.a.string]),p=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:d,offset:d})]),f={tag:m.tagPropType,xs:p,sm:p,md:p,lg:p,xl:p,className:i.a.string,cssModule:i.a.object,widths:i.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},h=function(e){var t=e.className,a=e.cssModule,o=e.widths,s=e.tag,i=Object(r.a)(e,["className","cssModule","widths","tag"]),c=[];o.forEach((function(t,n){var r=e[t];if(delete i[t],r||""===r){var o=!n;if(Object(m.isObject)(r)){var l,s=o?"-":"-"+t+"-",d=g(o,t,r.size);c.push(Object(m.mapToCssModules)(u()(((l={})[d]=r.size||""===r.size,l["order"+s+r.order]=r.order||0===r.order,l["offset"+s+r.offset]=r.offset||0===r.offset,l)),a))}else{var p=g(o,t,r);c.push(p)}}})),c.length||c.push("col");var d=Object(m.mapToCssModules)(u()(t,c),a);return l.a.createElement(s,Object(n.a)({},i,{className:d}))};h.propTypes=f,h.defaultProps=b,t.a=h},910:function(e,t,a){e.exports=a.p+"static/media/product-2.fc1eb8f4.jpg"},98:function(e,t,a){"use strict";var n=a(6),r=a(10),o=a(0),l=a.n(o),s=a(11),i=a.n(s),c=a(59),u=a.n(c),m=a(60),d={tag:m.tagPropType,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},p=function(e){var t=e.className,a=e.cssModule,o=e.color,s=e.body,i=e.inverse,c=e.outline,d=e.tag,p=e.innerRef,f=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(m.mapToCssModules)(u()(t,"card",!!i&&"text-white",!!s&&"card-body",!!o&&(c?"border":"bg")+"-"+o),a);return l.a.createElement(d,Object(n.a)({},f,{className:b,ref:p}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},99:function(e,t,a){"use strict";var n=a(6),r=a(10),o=a(0),l=a.n(o),s=a(11),i=a.n(s),c=a(59),u=a.n(c),m=a(60),d={tag:m.tagPropType,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},p=function(e){var t=e.className,a=e.cssModule,o=e.innerRef,s=e.tag,i=Object(r.a)(e,["className","cssModule","innerRef","tag"]),c=Object(m.mapToCssModules)(u()(t,"card-body"),a);return l.a.createElement(s,Object(n.a)({},i,{className:c,ref:o}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p}}]);
//# sourceMappingURL=48.490994d6.chunk.js.map