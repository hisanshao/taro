(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{1808:function(t,e,a){"use strict";a.d(e,"a",(function(){return O})),a.d(e,"b",(function(){return d}));var r=a(0),n=a.n(r);function b(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){b(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},b=Object.keys(t);for(r=0;r<b.length;r++)a=b[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);for(r=0;r<b.length;r++)a=b[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=n.a.createContext({}),i=function(t){var e=n.a.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},O=function(t){var e=i(t.components);return n.a.createElement(p.Provider,{value:e},t.children)},j={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},m=n.a.forwardRef((function(t,e){var a=t.components,r=t.mdxType,b=t.originalType,c=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),O=i(a),m=r,d=O["".concat(c,".").concat(m)]||O[m]||j[m]||b;return a?n.a.createElement(d,l(l({ref:e},p),{},{components:a})):n.a.createElement(d,l({ref:e},p))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var b=a.length,c=new Array(b);c[0]=m;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:r,c[1]=l;for(var p=2;p<b;p++)c[p]=a[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},281:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return l})),a.d(e,"metadata",(function(){return o})),a.d(e,"rightToc",(function(){return p})),a.d(e,"default",(function(){return O}));var r=a(3),n=a(7),b=(a(0),a(1808)),c=["components"],l={title:"SocketTask",sidebar_label:"SocketTask"},o={unversionedId:"apis/network/socket/SocketTask",id:"version-1.x/apis/network/socket/SocketTask",isDocsHomePage:!1,title:"SocketTask",description:"WebSocket \u4efb\u52a1\uff0c\u53ef\u901a\u8fc7 wx.connectSocket() \u63a5\u53e3\u521b\u5efa\u8fd4\u56de\u3002",source:"@site/versioned_docs/version-1.x/apis/network/socket/SocketTask.md",slug:"/apis/network/socket/SocketTask",permalink:"/taro/docs/1.x/apis/network/socket/SocketTask",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/network/socket/SocketTask.md",version:"1.x",sidebar_label:"SocketTask",sidebar:"version-1.x/API",previous:{title:"Taro.onSocketError",permalink:"/taro/docs/1.x/apis/network/socket/onSocketError"},next:{title:"Taro.chooseAddress(OBJECT)",permalink:"/taro/docs/1.x/apis/open-api/address/chooseAddress"}},p=[{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],i={rightToc:p};function O(t){var e=t.components,a=Object(n.a)(t,c);return Object(b.b)("wrapper",Object(r.a)({},i,a,{components:e,mdxType:"MDXLayout"}),Object(b.b)("p",null,"WebSocket \u4efb\u52a1\uff0c\u53ef\u901a\u8fc7 ",Object(b.b)("a",{parentName:"p",href:"/taro/docs/1.x/apis/network/socket/connectSocket"},"wx.connectSocket()")," \u63a5\u53e3\u521b\u5efa\u8fd4\u56de\u3002"),Object(b.b)("p",null,"\u5c5e\u6027"),Object(b.b)("p",null,"socketTask.readyState: WebSocket \u5f53\u524d\u7684\u8fde\u63a5\u72b6\u6001\u3002"),Object(b.b)("p",null,"socketTask.CONNECTING: WebSocket \u72b6\u6001\u503c\uff1a\u8fde\u63a5\u4e2d\u3002"),Object(b.b)("p",null,"socketTask.OPEN: WebSocket \u72b6\u6001\u503c\uff1a\u5df2\u8fde\u63a5\u3002"),Object(b.b)("p",null,"socketTask.CLOSING: WebSocket \u72b6\u6001\u503c\uff1a\u5173\u95ed\u4e2d\u3002"),Object(b.b)("p",null,"socketTask.CLOSED: WebSocket \u72b6\u6001\u503c\uff1a\u5df2\u5173\u95ed\u3002"),Object(b.b)("p",null,"socketTask.ws: \u6d4f\u89c8\u5668 WebSocket \u5b9e\u4f8b\u3002\uff08",Object(b.b)("strong",{parentName:"p"},"H5 \u7aef\u72ec\u6709"),"\uff09"),Object(b.b)("p",null,"\u65b9\u6cd5"),Object(b.b)("p",null,"SocketTask.send(OBJECT)"),Object(b.b)("p",null,"\u901a\u8fc7 WebSocket \u8fde\u63a5\u53d1\u9001\u6570\u636e\u3002"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"OBJECT \u53c2\u6570\u8bf4\u660e\uff1a")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),Object(b.b)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),Object(b.b)("th",{parentName:"tr",align:"left"},"\u5fc5\u586b"),Object(b.b)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"data"),Object(b.b)("td",{parentName:"tr",align:"left"},"String/ArrayBuffer"),Object(b.b)("td",{parentName:"tr",align:"left"},"\u662f"),Object(b.b)("td",{parentName:"tr",align:"left"},"\u9700\u8981\u53d1\u9001\u7684\u5185\u5bb9")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"success"),Object(b.b)("td",{parentName:"tr",align:"left"},"Function"),Object(b.b)("td",{parentName:"tr",align:"left"},"\u5426"),Object(b.b)("td",{parentName:"tr",align:"left"},"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"fail"),Object(b.b)("td",{parentName:"tr",align:"left"},"Function"),Object(b.b)("td",{parentName:"tr",align:"left"},"\u5426"),Object(b.b)("td",{parentName:"tr",align:"left"},"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"complete"),Object(b.b)("td",{parentName:"tr",align:"left"},"Function"),Object(b.b)("td",{parentName:"tr",align:"left"},"\u5426"),Object(b.b)("td",{parentName:"tr",align:"left"},"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),Object(b.b)("p",null,"SocketTask.close(OBJECT)"),Object(b.b)("p",null,"\u5173\u95ed WebSocket \u8fde\u63a5\u3002"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"OBJECT \u53c2\u6570\u8bf4\u660e\uff1a")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),Object(b.b)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),Object(b.b)("th",{parentName:"tr",align:"left"},"\u5fc5\u586b"),Object(b.b)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"code"),Object(b.b)("td",{parentName:"tr",align:"left"},"Number"),Object(b.b)("td",{parentName:"tr",align:"left"},"\u5426"),Object(b.b)("td",{parentName:"tr",align:"left"},"\u4e00\u4e2a\u6570\u5b57\u503c\u8868\u793a\u5173\u95ed\u8fde\u63a5\u7684\u72b6\u6001\u53f7\uff0c\u8868\u793a\u8fde\u63a5\u88ab\u5173\u95ed\u7684\u539f\u56e0\u3002\u5982\u679c\u8fd9\u4e2a\u53c2\u6570\u6ca1\u6709\u88ab\u6307\u5b9a\uff0c\u9ed8\u8ba4\u7684\u53d6\u503c\u662f 1000 \uff08\u8868\u793a\u6b63\u5e38\u8fde\u63a5\u5173\u95ed\uff09")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"reason"),Object(b.b)("td",{parentName:"tr",align:"left"},"String"),Object(b.b)("td",{parentName:"tr",align:"left"},"\u5426"),Object(b.b)("td",{parentName:"tr",align:"left"},"\u4e00\u4e2a\u53ef\u8bfb\u7684\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u8fde\u63a5\u88ab\u5173\u95ed\u7684\u539f\u56e0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"success"),Object(b.b)("td",{parentName:"tr",align:"left"},"Function"),Object(b.b)("td",{parentName:"tr",align:"left"},"\u5426"),Object(b.b)("td",{parentName:"tr",align:"left"},"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"fail"),Object(b.b)("td",{parentName:"tr",align:"left"},"Function"),Object(b.b)("td",{parentName:"tr",align:"left"},"\u5426"),Object(b.b)("td",{parentName:"tr",align:"left"},"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"complete"),Object(b.b)("td",{parentName:"tr",align:"left"},"Function"),Object(b.b)("td",{parentName:"tr",align:"left"},"\u5426"),Object(b.b)("td",{parentName:"tr",align:"left"},"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),Object(b.b)("p",null,"SocketTask.onOpen(CALLBACK)"),Object(b.b)("p",null,"\u76d1\u542c WebSocket \u8fde\u63a5\u6253\u5f00\u4e8b\u4ef6\u3002"),Object(b.b)("p",null,"SocketTask.onClose(CALLBACK)"),Object(b.b)("p",null,"\u76d1\u542c WebSocket \u8fde\u63a5\u5173\u95ed\u4e8b\u4ef6\u3002"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"CALLBACK \u8fd4\u56de\u53c2\u6570")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),Object(b.b)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),Object(b.b)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"code"),Object(b.b)("td",{parentName:"tr",align:"left"},"Number"),Object(b.b)("td",{parentName:"tr",align:"left"},"\u5173\u95ed\u8fde\u63a5\u7684\u72b6\u6001\u53f7")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"reason"),Object(b.b)("td",{parentName:"tr",align:"left"},"String"),Object(b.b)("td",{parentName:"tr",align:"left"},"\u8fde\u63a5\u88ab\u5173\u95ed\u7684\u539f\u56e0")))),Object(b.b)("p",null,"SocketTask.onError(CALLBACK)"),Object(b.b)("p",null,"\u76d1\u542c WebSocket \u9519\u8bef\u3002"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"CALLBACK \u8fd4\u56de\u53c2\u6570")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),Object(b.b)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),Object(b.b)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"errMsg"),Object(b.b)("td",{parentName:"tr",align:"left"},"String"),Object(b.b)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u4fe1\u606f")))),Object(b.b)("p",null,"SocketTask.onMessage(CALLBACK)"),Object(b.b)("p",null,"\u76d1\u542c WebSocket \u63a5\u53d7\u5230\u670d\u52a1\u5668\u7684\u6d88\u606f\u4e8b\u4ef6\u3002"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"CALLBACK \u8fd4\u56de\u53c2\u6570")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),Object(b.b)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),Object(b.b)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"data"),Object(b.b)("td",{parentName:"tr",align:"left"},"String/ArrayBuffer"),Object(b.b)("td",{parentName:"tr",align:"left"},"\u670d\u52a1\u5668\u8fd4\u56de\u7684\u6d88\u606f")))),Object(b.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"API"),Object(b.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",{parentName:"tr",align:"center"},"H5"),Object(b.b)("th",{parentName:"tr",align:"center"},"React Native"),Object(b.b)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"SocketTask"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}O.isMDXComponent=!0}}]);