(this["webpackJsonpe-brs"]=this["webpackJsonpe-brs"]||[]).push([[107],{1276:function(e,a,t){"use strict";var l=t(79),n=t(78),r=t(111),s=t(114),c=t(112),o=t(195),i=t(113),m=t(0),p=t.n(m),u=t(109),d=t(665),E=t(657),h=t(658),b=t(1319),v=(t(33),function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(s.a)(this,Object(c.a)(a).call(this,e))).handleAcceptedFiles=function(e){var a,n=e;t.props.showPreview&&(e.map((function(e){return Object.assign(e,{preview:"image"===e.type.split("/")[0]?URL.createObjectURL(e):null,formattedSize:t.formatBytes(e.size)})})),(a=n=t.state.selectedFiles).push.apply(a,Object(l.a)(e)),t.setState({selectedFiles:n}));t.props.onFileUpload&&t.props.onFileUpload(n)},t.formatBytes=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var t=1024,l=a<0?0:a,n=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],r=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,r)).toFixed(l))+" "+n[r]},t.handleAcceptedFiles=t.handleAcceptedFiles.bind(Object(o.a)(t)),t.state={selectedFiles:[]},t}return Object(i.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this;return p.a.createElement(p.a.Fragment,null,p.a.createElement(b.a,Object.assign({onDrop:function(a){return e.handleAcceptedFiles(a)}},this.props),(function(e){var a=e.getRootProps,t=e.getInputProps;return p.a.createElement("div",{className:"dropzone"},p.a.createElement("div",Object.assign({className:"dz-message needsclick"},a()),p.a.createElement("input",t()),p.a.createElement("i",{className:"h1 text-muted dripicons-cloud-upload"}),p.a.createElement("h5",null,"Drop files here or click to upload."),p.a.createElement("span",{className:"text-muted font-13"},"(This is just a demo dropzone. Selected files are ",p.a.createElement("strong",null,"not")," actually uploaded.)")))})),this.props.showPreview&&p.a.createElement("div",{className:"dropzone-previews mt-3",id:"file-previews"},this.state.selectedFiles.map((function(e,a){return p.a.createElement(d.a,{className:"mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete",key:a+"-file"},p.a.createElement("div",{className:"p-2"},p.a.createElement(E.a,{className:"align-items-center"},e.preview&&p.a.createElement(h.a,{className:"col-auto"},p.a.createElement("img",{"data-dz-thumbnail":"",className:"avatar-sm rounded bg-light",alt:e.name,src:e.preview})),!e.preview&&p.a.createElement(h.a,{className:"col-auto"},p.a.createElement("div",{className:"avatar-sm"},p.a.createElement("span",{className:"avatar-title bg-primary rounded"},e.type.split("/")[0]))),p.a.createElement(h.a,{className:"pl-0"},p.a.createElement(u.b,{to:"#",className:"text-muted font-weight-bold"},e.name),p.a.createElement("p",{className:"mb-0"},p.a.createElement("strong",null,e.formattedSize))))))}))))}}]),a}(m.Component));v.defaultProps={showPreview:!0},a.a=v},1771:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(657),s=t(658),c=t(665),o=t(666),i=t(637),m=t(1276);a.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{breadCrumbItems:[{label:"Forms",path:"/forms/upload"},{label:"Form Upload",path:"/forms/upload",active:!0}],title:"Form Upload"}),n.a.createElement(r.a,null,n.a.createElement(s.a,null,n.a.createElement(c.a,null,n.a.createElement(o.a,null,n.a.createElement("h4",{className:"header-title mb-3"},"Dropzone File Upload"),n.a.createElement("p",{className:"text-muted font-13 m-b-30"},"DropzoneJS is an open source library that provides drag\u2019n\u2019drop file uploads with image previews."),n.a.createElement(m.a,{onFileUpload:function(e){console.log(e)}}))))))}},637:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(109),s=t(657),c=t(658),o=t(655),i=t(656);t(33);a.a=function(e){return n.a.createElement(s.a,null,n.a.createElement(c.a,null,n.a.createElement("div",{className:"page-title-box"},n.a.createElement("div",{className:"page-title-right"},n.a.createElement(o.a,null,n.a.createElement(i.a,null,n.a.createElement(r.b,{to:"/"},"e-BRS")),e.breadCrumbItems.map((function(e,a){return e.active?n.a.createElement(i.a,{active:!0,key:a},e.label):n.a.createElement(i.a,{key:a},n.a.createElement(r.b,{to:e.path},e.label))})))),n.a.createElement("h4",{className:"page-title"},e.title))))}}}]);
//# sourceMappingURL=107.14da600b.chunk.js.map