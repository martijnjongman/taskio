(function(e){function t(t){for(var a,i,r=t[0],l=t[1],s=t[2],u=0,f=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var l=n[r];0!==o[l]&&(a=!1)}a&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={app:0},c=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var s=0;s<r.length;s++)t(r[s]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"518b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),o={class:"main"},c={class:"main__preloader"},i={class:"main__header"},r={class:"main__tasks"};function l(e,t,n,l,s,d){var u=Object(a["m"])("Preloader"),f=Object(a["m"])("Head"),b=Object(a["m"])("Taskbar");return Object(a["j"])(),Object(a["e"])("div",o,[Object(a["h"])("div",c,[Object(a["h"])(u)]),Object(a["h"])("div",i,[Object(a["h"])(f)]),Object(a["h"])("div",r,[Object(a["h"])(b)])])}var s={key:0,class:"preloader"},d=Object(a["g"])('<div class="preloader__purple"></div><div class="preloader__red"></div><div class="preloader__green"></div><div class="preloader__blue"></div><div class="preloader__text"><h2>Taskio</h2><h1>Welcome</h1></div>',5);function u(e,t,n,o,c,i){return Object(a["j"])(),Object(a["e"])(a["b"],{name:"start"},{default:Object(a["p"])((function(){return[o.open?(Object(a["j"])(),Object(a["e"])("div",s,[d])):Object(a["f"])("",!0)]})),_:1})}var f={setup:function(){var e=Object(a["k"])(!0);function t(){setTimeout((function(){e.value=!1}),2e3)}return Object(a["i"])((function(){t()})),{open:e,onload:t}}};n("60db");f.render=u;var b=f,h={class:"head"},m={class:"head__balls"},p=Object(a["h"])("circle",{id:"Ellipse_5","data-name":"Ellipse 5",cx:"10",cy:"10",r:"10",fill:"#b19cf5"},null,-1),j=Object(a["h"])("circle",{id:"Ellipse_6","data-name":"Ellipse 6",cx:"10",cy:"10",r:"10",fill:"#f59c9c"},null,-1),v=Object(a["h"])("circle",{id:"Ellipse_7","data-name":"Ellipse 7",cx:"10",cy:"10",r:"10",fill:"#83cd9a"},null,-1),O=Object(a["h"])("ellipse",{id:"Ellipse_8","data-name":"Ellipse 8",cx:"10",cy:"10",r:"10",ry:"10",fill:"#8fb4e0"},null,-1);function g(e,t,n,o,c,i){return Object(a["j"])(),Object(a["e"])("div",h,[Object(a["h"])("h1",{onClick:t[1]||(t[1]=function(e){return o.switchBack()}),id:"switch"},"Taskio"),Object(a["h"])("div",m,[(Object(a["j"])(),Object(a["e"])("svg",{onClick:t[2]||(t[2]=function(e){return o.animatePurple()}),id:"animationPurple",class:"head__balls--ball",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},[p])),(Object(a["j"])(),Object(a["e"])("svg",{onClick:t[3]||(t[3]=function(e){return o.animateRed()}),id:"animationRed",class:"head__balls--ball",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},[j])),(Object(a["j"])(),Object(a["e"])("svg",{onClick:t[4]||(t[4]=function(e){return o.animateGreen()}),id:"animationGreen",class:"head__balls--ball",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},[v])),(Object(a["j"])(),Object(a["e"])("svg",{onClick:t[5]||(t[5]=function(e){return o.animateBlue()}),id:"animationBlue",class:"head__balls--ball",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},[O]))])])}var w={setup:function(){function e(){document.getElementById("switch").style.color=""}function t(){document.getElementById("animationPurple").style.animation="animate 1s ease",document.getElementById("switch").style.color="#b19cf5",setTimeout((function(){document.getElementById("animationPurple").style.animation=""}),1e3)}function n(){document.getElementById("animationRed").style.animation="animate 1s ease",document.getElementById("switch").style.color="#f59c9c",setTimeout((function(){document.getElementById("animationRed").style.animation=""}),1e3)}function a(){document.getElementById("animationGreen").style.animation="animate 1s ease",document.getElementById("switch").style.color="#83cd9a",setTimeout((function(){document.getElementById("animationGreen").style.animation=""}),1e3)}function o(){document.getElementById("animationBlue").style.animation="animate 1s ease",document.getElementById("switch").style.color="#8fb4e0",setTimeout((function(){document.getElementById("animationBlue").style.animation=""}),1e3)}return{switchBack:e,animatePurple:t,animateRed:n,animateGreen:a,animateBlue:o}}};n("b461");w.render=g;var k=w,y={class:"taskbar"},_=Object(a["h"])("button",null,[Object(a["h"])("svg",{class:"cross",xmlns:"http://www.w3.org/2000/svg",width:"15.5",height:"15.5",viewBox:"0 0 15.5 15.5"},[Object(a["h"])("path",{id:"Icon_awesome-plus","data-name":"Icon awesome-plus",d:"M14.393,8.339H9.411V3.357A1.107,1.107,0,0,0,8.3,2.25H7.2A1.107,1.107,0,0,0,6.089,3.357V8.339H1.107A1.107,1.107,0,0,0,0,9.446v1.107a1.107,1.107,0,0,0,1.107,1.107H6.089v4.982A1.107,1.107,0,0,0,7.2,17.75H8.3a1.107,1.107,0,0,0,1.107-1.107V11.661h4.982A1.107,1.107,0,0,0,15.5,10.554V9.446A1.107,1.107,0,0,0,14.393,8.339Z",transform:"translate(0 -2.25)",fill:"#c4c4c4"})])],-1),B={class:"list__task--field"},x=Object(a["h"])("label",{for:"blue"},null,-1),E=Object(a["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"34.833",height:"38.482",viewBox:"0 0 34.833 38.482"},[Object(a["h"])("g",{id:"Icon_feather-trash-2","data-name":"Icon feather-trash-2",transform:"translate(1 1)"},[Object(a["h"])("path",{id:"Path_2","data-name":"Path 2",d:"M4.5,9H37.333",transform:"translate(-4.5 -1.704)",fill:"none",stroke:"#f59c9c","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3"}),Object(a["h"])("path",{id:"Path_3","data-name":"Path 3",d:"M33.037,10.3V35.833a3.648,3.648,0,0,1-3.648,3.648H11.148A3.648,3.648,0,0,1,7.5,35.833V10.3m5.472,0V6.648A3.648,3.648,0,0,1,16.62,3h7.3a3.648,3.648,0,0,1,3.648,3.648V10.3",transform:"translate(-3.852 -3)",fill:"none",stroke:"#f59c9c","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3"}),Object(a["h"])("path",{id:"Path_4","data-name":"Path 4",d:"M15,16.5V27.444",transform:"translate(-2.231 -0.083)",fill:"none",stroke:"#f59c9c","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3"}),Object(a["h"])("path",{id:"Path_5","data-name":"Path 5",d:"M21,16.5V27.444",transform:"translate(-0.935 -0.083)",fill:"none",stroke:"#f59c9c","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3"})])],-1),I={key:0,class:"tasksPlaceholder"},P=Object(a["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"69.73",height:"58.839",viewBox:"0 0 69.73 58.839"},[Object(a["h"])("path",{id:"Icon_awesome-tasks","data-name":"Icon awesome-tasks",d:"M19.014,2.729a1.634,1.634,0,0,0-2.315,0L8.026,11.351,4.934,8.338a1.634,1.634,0,0,0-2.315,0L.481,10.479a1.634,1.634,0,0,0,0,2.315L6.962,19.25a1.741,1.741,0,0,0,2.4,0l2.123-2.127,9.833-9.832a1.647,1.647,0,0,0,.012-2.315Zm0,21.68a1.634,1.634,0,0,0-2.315,0L8.026,33.087l-3.092-3.01a1.634,1.634,0,0,0-2.315,0L.481,32.214a1.634,1.634,0,0,0,0,2.315L6.946,41a1.739,1.739,0,0,0,2.4,0l2.138-2.137,9.833-9.836a1.634,1.634,0,0,0,.012-2.3Zm-10.3,23.6a6.538,6.538,0,1,0,0,13.074,6.537,6.537,0,0,0,0-13.074Zm58.835,2.179H28.328a2.179,2.179,0,0,0-2.179,2.179v4.358a2.179,2.179,0,0,0,2.179,2.179H67.551a2.179,2.179,0,0,0,2.179-2.179V52.371A2.179,2.179,0,0,0,67.551,50.191Zm0-43.581H28.328a2.179,2.179,0,0,0-2.179,2.179v4.358a2.179,2.179,0,0,0,2.179,2.179H67.551a2.179,2.179,0,0,0,2.179-2.179V8.789A2.179,2.179,0,0,0,67.551,6.61Zm0,21.791H28.328a2.179,2.179,0,0,0-2.179,2.179v4.358a2.179,2.179,0,0,0,2.179,2.179H67.551a2.179,2.179,0,0,0,2.179-2.179V30.58A2.179,2.179,0,0,0,67.551,28.4Z",transform:"translate(0 -2.248)",fill:"#b4b4b4"})],-1),T=Object(a["h"])("p",null,"Let's add some tasks!",-1);function A(e,t,n,o,c,i){return Object(a["j"])(),Object(a["e"])(a["a"],null,[Object(a["h"])("div",y,[Object(a["h"])("form",{onSubmit:t[2]||(t[2]=Object(a["r"])((function(){return o.addNewTask&&o.addNewTask.apply(o,arguments)}),["prevent"])),class:"taskbar__inputfield",id:"error__handler"},[Object(a["q"])(Object(a["h"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.newTask=e}),type:"text",name:"newTask",class:"taskbar__inputfield--input",placeholder:"Add task",maxlength:"30"},null,512),[[a["o"],o.newTask]]),_],32)]),Object(a["h"])(a["c"],{tag:"ul",name:"list",class:"list"},{default:Object(a["p"])((function(){return[(Object(a["j"])(!0),Object(a["e"])(a["a"],null,Object(a["l"])(o.tasks,(function(e,t){return Object(a["j"])(),Object(a["e"])("li",{class:"list__task",key:e.id},[Object(a["h"])("div",B,[Object(a["h"])("input",{onClick:function(t){return o.toggleDone(e)},type:"checkbox"},null,8,["onClick"]),x,Object(a["h"])("p",{class:{done:e.done}},Object(a["n"])(e.content),3)]),Object(a["h"])("button",{class:"list__task--taskBtn",onClick:function(e){return o.removeTodo(t)}},[E],8,["onClick"])])})),128))]})),_:1}),Object(a["h"])(a["b"],{name:"fade"},{default:Object(a["p"])((function(){return[0===o.tasks.length?(Object(a["j"])(),Object(a["e"])("div",I,[P,T])):Object(a["f"])("",!0)]})),_:1})],64)}n("a434");var H={setup:function(){var e=Object(a["k"])(""),t=Object(a["k"])([]),n=JSON.parse(localStorage.getItem("tasks"))||t,o=Object(a["k"])(n);function c(){if(""!==e.value){var t=document.getElementById("error__handler");t.style.backgroundColor="#87d39e",setTimeout((function(){t.style.backgroundColor="#f4f4f4"}),1e3),o.value.unshift({id:Date.now(),done:!1,content:e.value}),e.value="",l()}else{var n=document.getElementById("error__handler");n.style.backgroundColor="#f59c9c",setTimeout((function(){n.style.backgroundColor="#f4f4f4"}),1e3)}}function i(e){e.done=!e.done,l()}function r(e){o.value.splice(e,1),l()}function l(){var e=JSON.stringify(o.value);localStorage.setItem("tasks",e)}return{tasks:o,newTask:e,addNewTask:c,toggleDone:i,removeTodo:r,saveData:l}}};n("fa66");H.render=A;var C=H,V={components:{Preloader:b,Head:k,Taskbar:C}};n("d38b");V.render=l;var S=V,M=n("9483");Object(M["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),Object(a["d"])(S).mount("#app")},"60db":function(e,t,n){"use strict";n("655a")},"655a":function(e,t,n){},"6f93":function(e,t,n){},b1de:function(e,t,n){},b461:function(e,t,n){"use strict";n("b1de")},d38b:function(e,t,n){"use strict";n("518b")},fa66:function(e,t,n){"use strict";n("6f93")}});
//# sourceMappingURL=app.39ec992c.js.map