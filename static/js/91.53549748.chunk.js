(this["webpackJsonpe-brs"]=this["webpackJsonpe-brs"]||[]).push([[91],{1150:function(e,a,t){"use strict";t.r(a);var n=t(7),l=t(0),s=t.n(l),r=t(26),i=t(149),o=t(249),c=t(248),m=t(257),d=t(92),u=t(93),p=t(174),b=t(175),g=t(177),f=t(159),h=t(98),E=t(99),N=t(182),v=t(547),y=t.n(v),O=t(549),P=t.n(O),j=t(550),x=t.n(j),z=t(59),w=t.n(z),F=t(73),T=t(571);const S=e=>{const a=O.Search.SearchBar;return s.a.createElement(j.PaginationProvider,{bootstrap4:!0,pagination:x()(Object(n.a)({},e.paginationOptions,{paginationTotalRenderer:(e,a,t)=>s.a.createElement("label",{className:"react-bootstrap-table-pagination-total ml-2"},"Showing ",e," to ",a," of ",t),custom:!0,sizePerPageRenderer:({options:e,currSizePerPage:a,onSizePerPageChange:t})=>s.a.createElement(s.a.Fragment,null,s.a.createElement("label",{className:"d-inline mr-1"},"Display"),s.a.createElement(i.a,{className:"d-inline dropdown-sm"},s.a.createElement(o.a,{caret:!0,tag:"button",type:"button",className:"btn btn-outline-secondary btn-sm"},a),s.a.createElement(c.a,null,e.map((e,n)=>s.a.createElement(m.a,{key:n,type:"button",className:w()({active:a+""===e.page+""}),onClick:()=>t(e.page)},e.text)))),s.a.createElement("label",{className:"d-inline ml-1"},"orders"))})),keyField:"id",data:e.data,columns:e.columns},({paginationProps:t,paginationTableProps:n})=>s.a.createElement(P.a,{keyField:"id",data:e.data,columns:e.columns,search:!0},e=>s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{className:"mt-2"},s.a.createElement(u.a,{md:12,sm:12},s.a.createElement(p.a,{inline:!0,className:"mb-2 float-right"},s.a.createElement(b.a,{className:"mb-2 mr-sm-2 mb-sm-0"},s.a.createElement(g.a,{htmlFor:"search",className:"mr-sm-2"},"Search:"),s.a.createElement(a,e.searchProps)),s.a.createElement(b.a,{className:"mb-2 mr-sm-2 mb-sm-0"},s.a.createElement(g.a,{htmlFor:"status",className:"mr-sm-2"},"Status:"),s.a.createElement(f.a,{type:"select",name:"select",id:"status",className:"custom-select"},s.a.createElement("option",null,"Choose..."),s.a.createElement("option",{value:"1"},"Paid"),s.a.createElement("option",{value:"2"},"Awaiting Authorization"),s.a.createElement("option",{value:"3"},"Payment failed"),s.a.createElement("option",{value:"4"},"Cash On Delivery"),s.a.createElement("option",{value:"5"},"Fulfilled"),s.a.createElement("option",{value:"6"},"Unfulfilled")))))),s.a.createElement(y.a,Object.assign({},e.baseProps,{bordered:!1,headerClasses:"thead-light",wrapperClasses:"table-responsive"},n)),s.a.createElement(d.a,null,s.a.createElement(u.a,null,s.a.createElement(j.SizePerPageDropdownStandalone,t),s.a.createElement(j.PaginationTotalStandalone,Object.assign({},t,{dataSize:T.b.length}))),s.a.createElement(u.a,{className:"react-bootstrap-table-pagination-list"},s.a.createElement(j.PaginationListStandalone,t))))))};a.default=()=>{const e=[{dataField:"order_id",text:"Order ID",sort:!0,formatter:(e,a,t,n)=>s.a.createElement(s.a.Fragment,null,s.a.createElement(r.b,{to:"/",className:"text-body font-weight-bold"},"#BM",e))},{dataField:"order_date",text:"Date",sort:!1,formatter:(e,a,t,n)=>s.a.createElement(s.a.Fragment,null,e," ",s.a.createElement("small",{className:"text-muted"},a.order_time))},{dataField:"payment_status",text:"Payment Status",sort:!1,formatter:(e,a,t,n)=>s.a.createElement(s.a.Fragment,null,s.a.createElement("h5",null,s.a.createElement("span",{className:w()("badge",{"badge-success-lighten":"Paid"===e,"badge-danger-lighten":"Payment Failed"===e,"badge-info-lighten":"Unpaid"===e,"badge-warning-lighten":"Awaiting Authorization"===e})},"Paid"===e&&s.a.createElement("i",{className:"mdi mdi-coin mr-1"}),"Payment Failed"===e&&s.a.createElement("i",{className:"mdi mdi-cancel mr-1"}),"Unpaid"===e&&s.a.createElement("i",{className:"mdi mdi-cash mr-1"}),"Awaiting Authorization"===e&&s.a.createElement("i",{className:"mdi mdi-timer-sand mr-1"}),e)))},{dataField:"total",text:"Total",sort:!1},{dataField:"payment_method",text:"Payment Method",sort:!1},{dataField:"order_status",text:"Status",sort:!1,formatter:(e,a,t,n)=>s.a.createElement(s.a.Fragment,null,s.a.createElement("h5",null,s.a.createElement("span",{className:w()("badge",{"badge-success-lighten":"Delivered"===e,"badge-danger-lighten":"Cancelled"===e,"badge-info-lighten":"Shipped"===e,"badge-warning-lighten":"Processing"===e})},e)))},{dataField:"action",isDummyColumn:!0,text:"Action",sort:!1,classes:"table-action",formatter:(e,a,t,n)=>s.a.createElement(s.a.Fragment,null,s.a.createElement(r.b,{to:"/",className:"action-icon"}," ",s.a.createElement("i",{className:"mdi mdi-eye"})),s.a.createElement(r.b,{to:"/",className:"action-icon"}," ",s.a.createElement("i",{className:"mdi mdi-square-edit-outline"})),s.a.createElement(r.b,{to:"/",className:"action-icon"}," ",s.a.createElement("i",{className:"mdi mdi-delete"})))}];return s.a.createElement(s.a.Fragment,null,s.a.createElement(F.a,{breadCrumbItems:[{label:"eCommerce",path:"/apps/ecommerce/orders"},{label:"Orders",path:"/apps/ecommerce/orders",active:!0}],title:"Orders"}),s.a.createElement(d.a,null,s.a.createElement(u.a,null,s.a.createElement(h.a,null,s.a.createElement(E.a,null,s.a.createElement(d.a,null,s.a.createElement(u.a,{sm:4},s.a.createElement(N.a,{color:"danger",className:"mb-2"},s.a.createElement("i",{className:"mdi mdi-plus-circle mr-2"})," Add New Order")),s.a.createElement(u.a,{sm:8},s.a.createElement("div",{className:"text-sm-right"},s.a.createElement(N.a,{color:"light",className:"mb-2 mr-1"},"Export")))),s.a.createElement(S,{data:T.b,columns:e,paginationOptions:{paginationSize:5,pageStartIndex:1,withFirstAndLast:!1,showTotal:!0,sizePerPageList:[{text:"10",value:10},{text:"20",value:20},{text:"50",value:50}]}}))))))}},159:function(e,a,t){"use strict";var n=t(6),l=t(10),s=t(62),r=t(15),i=t(0),o=t.n(i),c=t(11),m=t.n(c),d=t(59),u=t.n(d),p=t(60),b={children:m.a.node,type:m.a.string,size:m.a.string,bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.focus=t.focus.bind(Object(s.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.type,r=e.bsSize,i=e.valid,c=e.invalid,m=e.tag,d=e.addon,b=e.plaintext,g=e.innerRef,f=Object(l.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(s)>-1,E=new RegExp("\\D","g"),N=m||("select"===s||"textarea"===s?s:"input"),v="form-control";b?(v+="-plaintext",N=m||"input"):"file"===s?v+="-file":h&&(v=d?null:"form-check-input"),f.size&&E.test(f.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=f.size,delete f.size);var y=Object(p.mapToCssModules)(u()(a,c&&"is-invalid",i&&"is-valid",!!r&&"form-control-"+r,v),t);return("input"===N||m&&"function"===typeof m)&&(f.type=s),f.children&&!b&&"select"!==s&&"string"===typeof N&&"select"!==N&&(Object(p.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete f.children),o.a.createElement(N,Object(n.a)({},f,{ref:g,className:y}))},a}(o.a.Component);g.propTypes=b,g.defaultProps={type:"text"},a.a=g},174:function(e,a,t){"use strict";var n=t(6),l=t(10),s=t(62),r=t(15),i=t(0),o=t.n(i),c=t(11),m=t.n(c),d=t(59),u=t.n(d),p=t(60),b={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.submit=t.submit.bind(Object(s.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.inline,r=e.tag,i=e.innerRef,c=Object(l.a)(e,["className","cssModule","inline","tag","innerRef"]),m=Object(p.mapToCssModules)(u()(a,!!s&&"form-inline"),t);return o.a.createElement(r,Object(n.a)({},c,{ref:i,className:m}))},a}(i.Component);g.propTypes=b,g.defaultProps={tag:"form"},a.a=g},175:function(e,a,t){"use strict";var n=t(6),l=t(10),s=t(0),r=t.n(s),i=t(11),o=t.n(i),c=t(59),m=t.n(c),d=t(60),u={children:o.a.node,row:o.a.bool,check:o.a.bool,inline:o.a.bool,disabled:o.a.bool,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object},p=function(e){var a=e.className,t=e.cssModule,s=e.row,i=e.disabled,o=e.check,c=e.inline,u=e.tag,p=Object(l.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),b=Object(d.mapToCssModules)(m()(a,!!s&&"row",o?"form-check":"form-group",!(!o||!c)&&"form-check-inline",!(!o||!i)&&"disabled"),t);return"fieldset"===u&&(p.disabled=i),r.a.createElement(u,Object(n.a)({},p,{className:b}))};p.propTypes=u,p.defaultProps={tag:"div"},a.a=p},177:function(e,a,t){"use strict";var n=t(6),l=t(10),s=t(0),r=t.n(s),i=t(11),o=t.n(i),c=t(59),m=t.n(c),d=t(60),u=o.a.oneOfType([o.a.number,o.a.string]),p=o.a.oneOfType([o.a.string,o.a.number,o.a.shape({size:u,order:u,offset:u})]),b={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:o.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},f=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,s=e.hidden,i=e.widths,o=e.tag,c=e.check,u=e.size,p=e.for,b=Object(l.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),g=[];i.forEach((function(a,n){var l=e[a];if(delete b[a],l||""===l){var s,r=!n;if(Object(d.isObject)(l)){var i,o=r?"-":"-"+a+"-";s=f(r,a,l.size),g.push(Object(d.mapToCssModules)(m()(((i={})[s]=l.size||""===l.size,i["order"+o+l.order]=l.order||0===l.order,i["offset"+o+l.offset]=l.offset||0===l.offset,i))),t)}else s=f(r,a,l),g.push(s)}}));var h=Object(d.mapToCssModules)(m()(a,!!s&&"sr-only",!!c&&"form-check-label",!!u&&"col-form-label-"+u,g,!!g.length&&"col-form-label"),t);return r.a.createElement(o,Object(n.a)({htmlFor:p},b,{className:h}))};h.propTypes=b,h.defaultProps=g,a.a=h}}]);
//# sourceMappingURL=91.53549748.chunk.js.map