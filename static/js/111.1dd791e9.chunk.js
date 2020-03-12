(this["webpackJsonpe-brs"]=this["webpackJsonpe-brs"]||[]).push([[111],{1221:function(e,a,t){"use strict";t.r(a);var s=t(360),n=t(0),l=t.n(n),c=t(26),r=t(152),i=t(98),m=t(99),o=t(90),d=t(91),p=t(155),u=t(182),g=t(59),b=t.n(g),E=t(402),h=t(1135),v=t(69);const N=[{id:"1",name:"Draft the new contract document for sales team",start:"2019-07-16",end:"2019-07-20",progress:55},{id:"2",name:"Find out the old contract documents",start:"2019-07-19",end:"2019-07-21",progress:85,dependencies:"1"},{id:"3",name:"Organize meeting with sales associates to understand need in detail",start:"2019-07-21",end:"2019-07-22",progress:80,dependencies:"2"},{id:"4",name:"iOS App home page",start:"2019-07-15",end:"2019-07-17",progress:80},{id:"5",name:"Write a release note",start:"2019-07-18",end:"2019-07-22",progress:65,dependencies:"4"},{id:"6",name:"Setup new sales project",start:"2019-07-20",end:"2019-07-31",progress:15},{id:"7",name:"Invite user to a project",start:"2019-07-25",end:"2019-07-26",progress:99,dependencies:"6"},{id:"8",name:"Coordinate with business development",start:"2019-07-28",end:"2019-07-30",progress:35,dependencies:"7"},{id:"9",name:"Kanban board design",start:"2019-08-01",end:"2019-08-03",progress:25,dependencies:"8"},{id:"10",name:"Enable analytics tracking",start:"2019-08-05",end:"2019-08-07",progress:60,dependencies:"9"}],j=[{id:"proj101",name:"Lunar",status:"On-Track",icon:"uil uil-moonset"},{id:"proj102",name:"Dark Moon",status:"On-Track",icon:"uil uil-moon-eclipse"},{id:"proj103",name:"Aurora",status:"Locked",icon:"uil uil-mountains"},{id:"proj104",name:"Blue Moon",status:"Locked",icon:"uil uil-moon"},{id:"proj105",name:"Casanova",status:"Delayed",icon:"uil uil-ship"},{id:"proj106",name:"Darwin",status:"On-Track",icon:"uil uil-subway-alt"},{id:"proj107",name:"Eagle",status:"Delayed",icon:"uil uil-gold"}],k=({project:e,onSelectProject:a,selectedProject:t})=>l.a.createElement(c.b,{to:"#",className:"text-body",onClick:t=>a(e)},l.a.createElement(r.a,{className:b()("mt-2","p-2",{"bg-light":t&&t.id===e.id})},l.a.createElement("div",{className:"avatar-sm"},"On-Track"===e.status&&l.a.createElement("span",{className:"avatar-title bg-success-lighten rounded-circle text-success"},l.a.createElement("i",{className:b()(e.icon,"font-24")})),"Locked"===e.status&&l.a.createElement("span",{className:"avatar-title bg-warning-lighten rounded-circle text-warning"},l.a.createElement("i",{className:b()(e.icon,"font-24")})),"Delayed"===e.status&&l.a.createElement("span",{className:"avatar-title bg-danger-lighten rounded-circle text-danger"},l.a.createElement("i",{className:b()(e.icon,"font-24")}))),l.a.createElement(r.a,{body:!0,className:"ml-2"},l.a.createElement("h5",{className:"mt-0 mb-0"},e.name,l.a.createElement("span",{className:b()("badge","ml-1",{"badge-success-lighten":"On-Track"===e.status,"badge-warning-lighten":"Locked"===e.status,"badge-danger-lighten":"Delayed"===e.status})},e.status)),l.a.createElement("p",{className:"mt-1 mb-0 text-muted"},"ID: ",e.id))));a.default=()=>{const e=Object(n.useState)([...j]),a=Object(s.a)(e,1)[0],t=Object(n.useState)(j[1]),r=Object(s.a)(t,2),g=r[0],b=r[1],y=Object(n.useState)("Week"),w=Object(s.a)(y,2),f=w[0],x=w[1],O=Object(n.useState)(null),D=Object(s.a)(O,2),S=D[0],_=D[1];Object(n.useEffect)(()=>{const e=new h.a("#tasks-gantt",[...N],{view_modes:["Quarter Day","Half Day","Day","Week","Month"],bar_height:20,padding:18,view_mode:"Week",custom_popup_html:e=>'<div class="popover fade show bs-popover-right gantt-task-details" role="tooltip"><div class="arrow"></div><div class="popover-body">'+"<h5>".concat(e.name,'</h5><p class="mb-2">Expected to finish by ').concat(e.end_date,"</p>")+'<div class="progress mb-2" style="height: 10px;">'+'<div class="progress-bar" role="progressbar" style="width: '.concat(e.progress,'%;" aria-valuenow="').concat(e.progress,'"')+' aria-valuemin="0" aria-valuemax="100">'.concat(e.progress,"%</div>")+"</div></div></div>"});_(e)},[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{breadCrumbItems:[{label:"Projects",path:"/apps/projects"},{label:"Gantt",path:"/apps/projects/gantt",active:!0}],title:"Gantt"}),l.a.createElement(i.a,null,l.a.createElement(m.a,null,l.a.createElement(o.a,null,l.a.createElement(d.a,{xl:3},l.a.createElement("div",{className:"pr-xl-3"},l.a.createElement("h5",{className:"mt-0 mb-3"},"Projects"),l.a.createElement("div",{className:"app-search"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group position-relative"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"search by name..."}),l.a.createElement("span",{className:"mdi mdi-magnify"})))),l.a.createElement(o.a,null,l.a.createElement(d.a,null,l.a.createElement(E.a,{style:{maxHeight:"535px",width:"100%"}},a.map((e,a)=>l.a.createElement(k,{project:e,key:a,selectedProject:g,onSelectProject:e=>b(e)}))))))),l.a.createElement(d.a,{xl:9,className:"mt-4 mt-xl-0"},l.a.createElement("div",{className:"pl-xl-3"},l.a.createElement(o.a,null,l.a.createElement(d.a,{className:"col-auto"},l.a.createElement(c.b,{to:"#",className:"btn btn-success btn-sm mb-2"},"Add New Task")),l.a.createElement(d.a,{className:"text-sm-right"},l.a.createElement(p.a,null,["Quarter Day","Half Day","Day","Week","Month"].map((e,a)=>l.a.createElement(u.a,{color:"light",size:"sm",key:a,onClick:()=>(e=>{x(e),S&&S.change_view_mode(e)})(e),active:f===e},e))))),l.a.createElement(o.a,null,l.a.createElement(d.a,{className:"mt-3"},l.a.createElement("svg",{id:"tasks-gantt"})))))))))}},69:function(e,a,t){"use strict";var s=t(0),n=t.n(s),l=t(26),c=t(90),r=t(91),i=t(86),m=t(87);t(11);a.a=e=>n.a.createElement(c.a,null,n.a.createElement(r.a,null,n.a.createElement("div",{className:"page-title-box"},n.a.createElement("div",{className:"page-title-right"},n.a.createElement(i.a,null,n.a.createElement(m.a,null,n.a.createElement(l.b,{to:"/"},"e-BRS")),e.breadCrumbItems.map((e,a)=>e.active?n.a.createElement(m.a,{active:!0,key:a},e.label):n.a.createElement(m.a,{key:a},n.a.createElement(l.b,{to:e.path},e.label))))),n.a.createElement("h4",{className:"page-title"},e.title))))}}]);
//# sourceMappingURL=111.1dd791e9.chunk.js.map