(this.webpackJsonpcrowddit=this.webpackJsonpcrowddit||[]).push([[0],{49:function(e,t,n){e.exports=n(87)},58:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},80:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(18),c=n(19),s=n(22),i=n(17),u="https://crowddit-backend.herokuapp.com",l={showLoginModal:!1,validUsername:null,cookie:document.cookie.includes("crowddit="),username:document.cookie.slice(document.cookie.indexOf("crowddit")+9),invalidLoginAttempt:!1},d=Object(s.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_LOGIN":return Object(i.a)({},e,{showLoginModal:!e.showLoginModal});case"USERNAME_BLUR":return Object(i.a)({},e,{validUsername:t.payload.status});case"PASSWORD_BLUR":return Object(i.a)({},e,{validPassword:t.payload.status});case"COOKIE":return Object(i.a)({},e,{cookie:document.cookie.includes("crowddit=")});case"CREATE_USER":return Object(i.a)({},e,{username:t.payload.username});case"LOGOUT":return Object(i.a)({},e,{cookie:!1});case"LOGIN":return Object(i.a)({},e,{showLoginModal:!1,username:t.payload.username,cookie:!0,invalidLoginAttempt:!1});case"INVALID_LOGIN":return Object(i.a)({},e,{invalidLoginAttempt:!0});case"DISMISS_LOGIN_ALERT":return Object(i.a)({},e,{invalidLoginAttempt:!1});default:return e}}}),m=n(43),p=n.n(m),f=(n(58),n(8)),E=n.n(f),v=n(14),h=n(88),g=n(105),w=n(89),b=n(90),y=n(91),O=n(92),L=n(93),k=n(94),U=function(e){var t=e.className;return console.log(e),r.a.createElement(h.a,null,r.a.createElement(g.a,{isOpen:e.modal,toggle:e.toggle,className:t,centered:!0},r.a.createElement("div",{className:"row",style:{height:350}},r.a.createElement("div",{className:"col-sm-3",id:"login-gradient-box"}),r.a.createElement("div",{className:"col",style:{marginLeft:"1rem"}},r.a.createElement("div",{className:"row",id:"login-text"},"Sign in"),r.a.createElement("div",{className:"row",style:{paddingTop:"1rem"}},r.a.createElement(w.a,{onSubmit:function(t){t.preventDefault(),e.login({username:document.getElementById("inputUsername").value,password:document.getElementById("inputPassword").value})}},r.a.createElement(b.a,null,r.a.createElement(y.a,{for:"exampleEmail",hidden:!0},"Username"),r.a.createElement(O.a,{type:"username",name:"username",id:"inputUsername",placeholder:"Username"})),r.a.createElement(b.a,null,r.a.createElement(y.a,{for:"inputPassword",hidden:!0},"Password"),r.a.createElement(O.a,{type:"password",name:"password",id:"inputPassword",placeholder:"Password"})),!e.invalidLoginAttempt&&r.a.createElement(L.a,{style:{height:"2rem"},id:"login-text-button"},"SIGN IN"),r.a.createElement(k.a,{color:"danger",isOpen:e.invalidLoginAttempt,toggle:function(){e.dismissLoginAttemptAlert()}},"Invalid username or password"))),r.a.createElement("div",{className:"row",style:{fontSize:"small",paddingTop:"1rem"}},r.a.createElement("p",null," New to Crowddit? "),r.a.createElement("a",{href:"https://indivism.github.io/crowddit/createUser",style:{paddingLeft:"0.5rem",fontWeight:"bold"}}," SIGN UP "))))))},I=n(25),x=n.n(I),j=function(){var e=Object(v.a)(E.a.mark((function e(t){var n,a,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u+"/db/checkUsername?"+x.a.stringify({username:t}),a={method:"GET"},e.next=4,fetch(n,a).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 4:if(!(r=e.sent)||!r.status){e.next=9;break}return e.abrupt("return",{type:"USERNAME_BLUR",payload:{status:"success"==r.status}});case 9:return e.abrupt("return",{type:"USERNAME_BLUR",payload:{status:!1}});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(v.a)(E.a.mark((function e(t){var n,a,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u+"/db/checkPassword?"+x.a.stringify({password:t}),a={method:"GET"},e.next=4,fetch(n,a).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 4:if(!(r=e.sent)||!r.status){e.next=9;break}return e.abrupt("return",{type:"PASSWORD_BLUR",payload:{status:"success"==r.status}});case 9:return e.abrupt("return",{type:"PASSWORD_BLUR",payload:{status:!1}});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(v.a)(E.a.mark((function e(){var t,n,a,r,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("username-input").value.trim(),n=document.getElementById("password-input").value.trim(),console.log(t,n),a=u+"/db/createUser?"+x.a.stringify({username:t,password:n}),r={method:"GET"},e.next=7,fetch(a,r).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 7:if(o=e.sent,console.log(o),"success"!=o.status){e.next=16;break}return console.log("setting cookie"),document.cookie="crowddit="+o.username,document.location="https://indivism.github.io/crowddit/",e.abrupt("return",{type:"CREATE_USER",payload:{status:!0,username:t}});case 16:return e.abrupt("return",{type:"CREATE_USER",payload:{status:!1,username:t}});case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(v.a)(E.a.mark((function e(t){var n,a,r,o,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,a=t.password,r=u+"/db/login?"+x.a.stringify({username:n,password:a}),o={method:"GET"},e.next=5,fetch(r,o).then((function(e){return e.json()})).then((function(e){return e}));case 5:if(c=e.sent,console.log("response",c),"success"!=c.status){e.next=11;break}return e.abrupt("return",{type:"LOGIN",payload:{username:c.username}});case 11:return e.abrupt("return",{type:"INVALID_LOGIN"});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=Object(c.b)((function(e,t){return{modal:e.app.showLoginModal,invalidLoginAttempt:e.app.invalidLoginAttempt}}),(function(e){return{toggle:function(){return e({type:"TOGGLE_LOGIN"})},login:function(){var t=Object(v.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,S(n);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),dismissLoginAttemptAlert:function(){return e({type:"DISMISS_LOGIN_ALERT"})}}}))(U),T=n(48),P=n(95),R=n(96),B=n(97),_=n(98),M=n(99),C=n(100),D=n(101),W=n(102),J=function(e){var t=Object(a.useState)(!1),n=Object(T.a)(t,2),o=n[0],c=n[1];return r.a.createElement("div",null,r.a.createElement(P.a,{color:"light",light:!0,expand:"md"},r.a.createElement(R.a,{href:"/"},"crowddit"),r.a.createElement(B.a,{onClick:function(){return c(!o)}}),r.a.createElement(_.a,{isOpen:o,navbar:!0},r.a.createElement(M.a,{className:"mr-auto",navbar:!0},r.a.createElement(C.a,null,r.a.createElement(D.a,{href:"/about/"},"About")),r.a.createElement(C.a,null,r.a.createElement(D.a,{href:"https://github.com/Indivism/crowddit"},"GitHub")))),e.cookie&&r.a.createElement(W.a,{style:{paddingRight:"1rem"}},e.username),e.cookie&&r.a.createElement(L.a,{outline:!0,color:"secondary",onClick:function(){return e.logout()}},"Log Out"),!e.cookie&&r.a.createElement(L.a,{outline:!0,color:"secondary",onClick:function(){return e.login()}},"Log In")))},K=Object(c.b)((function(e,t){return{test:e.app.init_data,cookie:e.app.cookie,username:e.app.username}}),(function(e){return{login:function(){e({type:"TOGGLE_LOGIN"})},logout:function(){e((document.cookie="crowddit=; expires=Thu, 01 Jan 1970 00:00:01 GMT;",{type:"LOGOUT"}))}}}))(J);var V=function(){return r.a.createElement("div",null,r.a.createElement(K,null),r.a.createElement(A,null))};n(79),n(80),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=n(44),H=n(20),$=n(103),q=n(104),F=Object(c.b)((function(e,t){return{validUsername:e.app.validUsername,validPassword:e.app.validPassword}}),(function(e){return{usernameBlur:function(){var t=Object(v.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,j(n);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),passwordBlur:function(){var t=Object(v.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,N(n);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),createUser:function(){var t=Object(v.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,G();case 3:t.t1=t.sent,(0,t.t0)(t.t1),e({type:"COOKIE"});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))((function(e){return r.a.createElement("div",null,r.a.createElement(K,null),r.a.createElement("div",{className:"container",style:{marginTop:"3rem"}},r.a.createElement(w.a,{onSubmit:function(t){t.preventDefault(),e.createUser()}},r.a.createElement(b.a,{onBlur:function(t){return e.usernameBlur(t.target.value.trim())}},r.a.createElement(y.a,{for:"exampleEmail"},"Username"),r.a.createElement(O.a,{id:"username-input",invalid:!1===e.validUsername&&""!=document.getElementById("username-input").value.trim(),valid:!0===e.validUsername}),e.validUsername&&r.a.createElement($.a,{valid:!0},"Sweet! That username is available."),!1===e.validUsername&&r.a.createElement($.a,{invalid:!0},"That username is invalid or already taken."),r.a.createElement(q.a,null,"Usernames can contain lowercase and uppercase letters and numbers.")),r.a.createElement(b.a,{onBlur:function(t){return e.passwordBlur(t.target.value.trim())}},r.a.createElement(y.a,{for:"examplePassword"},"Password"),r.a.createElement(O.a,{id:"password-input",invalid:!1===e.validPassword&&""!=document.getElementById("password-input").value.trim(),valid:!0===e.validPassword}),e.validPassword&&r.a.createElement($.a,{valid:!0},"Great! This is a valid password."),!1===e.validPassword&&r.a.createElement($.a,{invalid:!0},"Oh no! That password is invalid. Please try again. "),r.a.createElement(q.a,null,"Passwords must contain at least one numeric character and 1 capital letter.")),r.a.createElement(L.a,{id:"login-text-button",secondary:!0},"SIGN UP"))))})),Q=function(){return r.a.createElement(z.a,{basename:"/"},r.a.createElement(H.c,null,r.a.createElement(H.a,{path:"/createUser"},r.a.createElement(F,null)),r.a.createElement(H.a,{path:"/"},r.a.createElement(V,null))))},X=n(47),Y=Object(s.d)(d,Object(s.a)(X.a,p.a));window.store=Y,Object(o.render)(r.a.createElement(c.a,{store:Y},r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.2f385eec.chunk.js.map