(this.webpackJsonpwikilinks=this.webpackJsonpwikilinks||[]).push([[0],{20:function(e,a,t){e.exports=t(37)},25:function(e,a,t){},27:function(e,a,t){},31:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(18),l=t.n(c),s=(t(25),t(10)),i=t.n(s),o=t(13),u=t(7),m=(t(27),t(11)),p=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)([]),s=Object(u.a)(l,2),p=(s[0],s[1]),h=Object(n.useState)([]),f=Object(u.a)(h,2),g=(f[0],f[1]),E=Object(n.useState)([]),b=Object(u.a)(E,2),v=b[0],d=b[1];Object(n.useEffect)((function(){k()}),[]);var k=function(){var e=Object(o.a)(i.a.mark((function e(){var a,t,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=epstein+didn%27t+kill+himself");case 2:return a=e.sent,e.next=5,a.json();case 5:for(t=e.sent,p(t[1]),g(t[3]),n=[],r=0;r<t[1].length;r++)n.push({searchTitle:t[1][r],searchPage:t[3][r]});d(n);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(i.a.mark((function e(a){var n,r,l,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),0!==t.length){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,fetch("https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=".concat(t));case 7:return n=e.sent,e.next=10,n.json();case 10:for(r=e.sent,p(r[1]),g(r[3]),c(""),l=[],s=0;s<r[1].length;s++)l.push({searchTitle:r[1][s],searchPage:r[3][s]});d(l);case 18:case 19:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),N=function(e){var a=e.target.getAttribute("data-title"),t=e.target.getAttribute("data-page");localStorage.setItem(a,t)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"search-bar-container",onSubmit:w},r.a.createElement("input",{className:"search-bar",type:"text",placeholder:"Epstein didnt kill himself...",name:"search",value:t,onChange:function(e){c(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"search-button"},r.a.createElement("i",{className:"fas fa-search"}))),r.a.createElement("div",{className:"results"},v.map((function(e){return r.a.createElement("div",{className:"result-card",key:e.searchTitle},r.a.createElement("p",null,e.searchTitle),r.a.createElement("div",{className:"result-card-buttons"},r.a.createElement("a",{href:e.searchPage,target:"_blank",rel:"noopener noreferrer",className:"view-search"},"View Page"),r.a.createElement("a",{target:"_blank",className:"view-search",onClick:N,"data-title":e.searchTitle,"data-page":e.searchPage},"Save Page"),r.a.createElement(m.CopyToClipboard,{text:e.searchPage},r.a.createElement("a",{className:"view-search"},"Copy Link"))))}))))},h=function(){return r.a.createElement(r.a.Fragment,null)},f=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],c=a[1];Object(n.useEffect)((function(){var e=[];for(var a in localStorage)null!==localStorage.getItem(a)&&e.push([a,localStorage.getItem(a)]);c(e)}),[]);var l=function(e){var a=e.target.getAttribute("data-title");e.target.getAttribute("data-page");localStorage.removeItem(a),window.location.reload(!0)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"results"},t.map((function(e){return r.a.createElement("div",{className:"result-card",key:e[0]},r.a.createElement("p",null,e[0]),r.a.createElement("div",{className:"result-card-buttons"},r.a.createElement("a",{href:e[1],target:"_blank",rel:"noopener noreferrer",className:"view-search"},"View Page"),r.a.createElement("a",{target:"_blank",className:"view-search",onClick:l,"data-title":e[0],"data-page":e[1]},"Remove Page"),r.a.createElement(m.CopyToClipboard,{text:e[1]},r.a.createElement("a",{className:"view-search"},"Copy Link"))))}))))},g=(t(31),t(8)),E=function(){return r.a.createElement("nav",null,r.a.createElement("h1",{className:"title"},"WikiLinks"),r.a.createElement("ul",{className:"nav-links-bar"},r.a.createElement(g.b,{to:"/",className:"nav-links"},r.a.createElement("li",null,"Home")),r.a.createElement(g.b,{to:"/search",className:"nav-links"},r.a.createElement("li",null,"Search")),r.a.createElement(g.b,{to:"/mywikilinks",className:"nav-links"},r.a.createElement("li",null,"My WikiLinks"))))},b=t(1),v=function(){return r.a.createElement(g.a,null,r.a.createElement(E,null),r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",component:p}),r.a.createElement(b.a,{exact:!0,path:"/search",component:h}),r.a.createElement(b.a,{exact:!0,path:"/mywikilinks",component:f})))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.3cabd266.chunk.js.map