(this["webpackJsonpteams-and-players-tables"]=this["webpackJsonpteams-and-players-tables"]||[]).push([[0],{13:function(e,t,a){e.exports={disableArrows:"TableHeader_disableArrows__VnBz-",upArrow:"TableHeader_upArrow__6BW9x",downArrow:"TableHeader_downArrow__5D0ql"}},16:function(e,t,a){e.exports={wrapper:"Players_wrapper__2InU7",teamTitle:"Players_teamTitle__307_h"}},18:function(e,t,a){e.exports={wrapper:"TeamsTable_wrapper__o5wJv",table:"TeamsTable_table__1sPLa"}},21:function(e,t,a){e.exports={preloader:"Preloader_preloader__36TmS"}},22:function(e,t,a){e.exports={wrapper:"PlayersTable_wrapper__3xwTp",playersTable:"PlayersTable_playersTable__3h3rN",table:"PlayersTable_table__3vxxw"}},30:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(20),r=a.n(n),s=a(12),o=a(2),l=a(11),i=a(9),j=a(7),b=a(21),d=a.n(b),u=a.p+"static/media/preloader.5788b05c.svg",h=a(0),x=function(){return Object(h.jsx)("img",{className:d.a.preloader,src:u,alt:"preloader"})};a(30);var O=function(e){return Object(h.jsxs)("form",{children:[Object(h.jsx)("input",{type:"text",placeholder:"Search by name...",value:e.searchValue,onChange:e.searchValueOnChange}),Object(h.jsxs)("div",{className:"positionLabels",children:[Object(h.jsxs)("label",{children:["Goalkeepers",Object(h.jsx)("input",{type:"checkbox",name:"goalkeeper",checked:e.checkBoxValues.goalkeeper,onChange:e.CheckBoxesOnChange})]}),Object(h.jsxs)("label",{children:["Defender",Object(h.jsx)("input",{type:"checkbox",name:"defender",checked:e.checkBoxValues.defender,onChange:e.CheckBoxesOnChange})]}),Object(h.jsxs)("label",{children:["Midfielder",Object(h.jsx)("input",{type:"checkbox",name:"midfielder",checked:e.checkBoxValues.midfielder,onChange:e.CheckBoxesOnChange})]}),Object(h.jsxs)("label",{children:["Attacker",Object(h.jsx)("input",{type:"checkbox",name:"attacker",checked:e.checkBoxValues.attacker,onChange:e.CheckBoxesOnChange})]})]})]})},m=a(13),p=a.n(m);var f=function(e){return e.sortedColumn===e.columnName.toLowerCase()?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("th",{onClick:function(){e.sortData(e.columnName.toLowerCase())},className:e.sortedDirection?p.a.upArrow:p.a.downArrow,children:e.columnName})}):Object(h.jsx)("th",{onClick:function(){e.sortData(e.columnName.toLowerCase())},className:p.a.disableArrows,children:e.columnName})};var k=function(e){return Object(h.jsxs)("tr",{className:"playerTr",children:[Object(h.jsx)("td",{children:e.firstColumn}),Object(h.jsx)("td",{children:e.secondColumn}),Object(h.jsx)("td",{children:e.thirdColumn})]})},C=a(22),_=a.n(C);var g=function(e){var t=Object(c.useState)(),a=Object(j.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(""),o=Object(j.a)(s,2),l=o[0],b=o[1],d=Object(c.useState)(!0),u=Object(j.a)(d,2),x=u[0],O=u[1],m=function(t){var a=e.tableData.squad.slice().sort(function(e,t){return function(a,c){return a[t]===c[t]?0:null===a[t]?1:null===c[t]?-1:e?a[t]<c[t]?-1:1:a[t]<c[t]?1:-1}}(x,t));l&&x||l&&l!==t?(b(""),O(!0),r(e.tableData)):(b(t),O(!x),r(Object(i.a)(Object(i.a)({},e.tableData),{},{squad:a})))},p=n?n.squad:e.tableData.squad,C=[];return p.forEach((function(t){-1!==t.name.toLowerCase().indexOf(e.searchValue.toLowerCase())&&(e.checkBoxValues.goalkeeper&&"Goalkeeper"!==t.position||e.checkBoxValues.defender&&"Defender"!==t.position||e.checkBoxValues.midfielder&&"Midfielder"!==t.position||e.checkBoxValues.attacker&&"Attacker"!==t.position||C.push(Object(h.jsx)(k,{firstColumn:t.name,secondColumn:t.position,thirdColumn:t.nationality},t.id)))})),Object(c.useEffect)((function(){m("name")}),[]),Object(h.jsx)("div",{children:Object(h.jsxs)("table",{className:_.a.playersTable,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)(f,{columnName:"Name",sortData:m,sortedColumn:l,sortedDirection:x}),Object(h.jsx)(f,{columnName:"Position",sortData:m,sortedColumn:l,sortedDirection:x}),Object(h.jsx)(f,{columnName:"Nationality",sortData:m,sortedColumn:l,sortedDirection:x})]})}),Object(h.jsx)("tbody",{children:C})]})})},w=a(16),v=a.n(w),y=function(){var e=Object(c.useState)(),t=Object(j.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(j.a)(r,2),b=s[0],d=s[1],u=Object(c.useState)({goalkeeper:!1,defender:!1,midfielder:!1,attacker:!1}),m=Object(j.a)(u,2),p=m[0],f=m[1],k=Object(o.f)().teamId;Object(c.useEffect)((function(){fetch("https://api.football-data.org/v2/teams/".concat(k),{headers:{"X-Auth-Token":"061f154cba17464c936d726dac2d34b2"}}).then((function(e){return e.json()})).then((function(e){return n(e)}))}),[k]);return a?Object(h.jsxs)("div",{className:v.a.wrapper,children:[Object(h.jsxs)("div",{className:v.a.teamTitle,children:[Object(h.jsx)("b",{children:a.name}),Object(h.jsx)("img",{src:a.crestUrl,alt:"logo",height:"50"})]}),Object(h.jsx)(O,{searchValue:b,searchValueOnChange:function(e){d(e.target.value)},checkBoxValues:p,CheckBoxesOnChange:function(e){var t=e.target.name;f(Object(i.a)(Object(i.a)({},p),{},Object(l.a)({},t,!p[t])))}}),Object(h.jsx)(g,{tableData:a,searchValue:b,checkBoxValues:p})]}):Object(h.jsx)(x,{})},D=a(18),N=a.n(D);var T=function(e){var t=e.tableData.standings[0].table.map((function(e){return Object(h.jsx)("tr",{children:Object(h.jsx)("td",{children:Object(h.jsxs)(s.b,{to:"/players/".concat(e.team.id),children:[Object(h.jsx)("div",{children:e.team.name}),Object(h.jsx)("img",{src:e.team.crestUrl,alt:"logo",height:"45px"})]})})},e.team.id)}));return Object(h.jsx)("div",{className:N.a.wrapper,children:Object(h.jsxs)("table",{className:N.a.table,children:[Object(h.jsx)("thead",{children:Object(h.jsx)("tr",{children:Object(h.jsxs)("th",{children:[e.tableData.competition.name," (",e.tableData.competition.area.name,")"]})})}),Object(h.jsx)("tbody",{children:t})]})})};var B=function(){var e=Object(c.useState)(),t=Object(j.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){fetch("https://api.football-data.org/v2/competitions/2021/standings",{headers:{"X-Auth-Token":"061f154cba17464c936d726dac2d34b2"}}).then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]),a?Object(h.jsx)(T,{tableData:a}):Object(h.jsx)(x,{})};a(36);var V=function(){return Object(h.jsx)(s.a,{children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/players/:teamId",children:Object(h.jsx)(y,{})}),Object(h.jsx)(o.a,{path:"/teams",children:Object(h.jsx)(B,{})}),Object(h.jsx)(o.a,{path:"/",children:Object(h.jsx)(B,{})})]})})};r.a.render(Object(h.jsx)(V,{}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.4e3eb3ba.chunk.js.map