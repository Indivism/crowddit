(this.webpackJsonpcrowddit=this.webpackJsonpcrowddit||[]).push([[0],{44:function(e,t,n){e.exports=n(79)},56:function(e,t,n){},57:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},79:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),o=n(10),s=n(26),i=n(25),u=n.n(i),l=n(14),d=n(11),m="https://crowddit-backend.herokuapp.com",p={showLoginModal:!1,validUsername:null,cookie:document.cookie.includes("crowddit="),username:document.cookie.slice(document.cookie.indexOf("crowddit")+9),invalidLoginAttempt:!1,createUserAlert:!1,page:"/",initAccountAlert:!1,showAuthAlert:!0},f=Object(l.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_LOGIN":return Object(d.a)({},e,{showLoginModal:!e.showLoginModal,invalidLoginAttempt:!1});case"USERNAME_BLUR":return Object(d.a)({},e,{validUsername:t.payload.status,createUserAlert:!1});case"PASSWORD_BLUR":return Object(d.a)({},e,{validPassword:t.payload.status,createUserAlert:!1});case"COOKIE":return Object(d.a)({},e,{cookie:document.cookie.includes("crowddit=")});case"CREATE_USER":return Object(d.a)({},e,{username:t.payload.username,showLoginModal:!1,initAccountAlert:!0});case"LOGOUT":return Object(d.a)({},e,{cookie:!1,initAccountAlert:!1});case"LOGIN":return Object(d.a)({},e,{showLoginModal:!1,username:t.payload.username,cookie:!0,invalidLoginAttempt:!1});case"GET_ASSOCIATIONS":return Object(d.a)({},e,{showLoginModal:!1,username:t.payload.username,cookie:!0,invalidLoginAttempt:!1,initAccountAlert:!0});case"INVALID_LOGIN":return Object(d.a)({},e,{invalidLoginAttempt:!0});case"DISMISS_LOGIN_ALERT":return Object(d.a)({},e,{invalidLoginAttempt:!1});case"CREATE_USER_ALERT":return Object(d.a)({},e,{createUserAlert:!0});case"SET_PAGE":return Object(d.a)({},e,{page:t.payload});case"DISMISS_AUTH_ALERT":return Object(d.a)({},e,{showAuthAlert:!1});default:return e}}}),E=n(30),g=n.n(E);n(55),n(56),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=n(17),w=n(19),v=(n(57),n(6)),b=n.n(v),y=n(9),A=n(80),O=n(98),k=n(81),U=n(82),L=n(83),j=n(84),N=n(85),x=n(86),S=function(e){var t=e.className;return console.log(e),r.a.createElement(A.a,null,r.a.createElement(O.a,{isOpen:e.modal,toggle:e.toggle,className:t,centered:!0},r.a.createElement("div",{className:"row",style:{height:350}},r.a.createElement("div",{className:"col-sm-3",id:"login-gradient-box"}),r.a.createElement("div",{className:"col",style:{marginLeft:"1rem"}},r.a.createElement("div",{className:"row",id:"login-text"},"Sign in"),r.a.createElement("div",{className:"row",style:{paddingTop:"1rem"}},r.a.createElement(k.a,{onSubmit:function(t){t.preventDefault(),e.login({username:document.getElementById("inputUsername").value,password:document.getElementById("inputPassword").value})}},r.a.createElement(U.a,null,r.a.createElement(L.a,{for:"exampleEmail",hidden:!0},"Username"),r.a.createElement(j.a,{type:"username",name:"username",id:"inputUsername",placeholder:"Username"})),r.a.createElement(U.a,null,r.a.createElement(L.a,{for:"inputPassword",hidden:!0},"Password"),r.a.createElement(j.a,{type:"password",name:"password",id:"inputPassword",placeholder:"Password"})),!e.invalidLoginAttempt&&r.a.createElement(N.a,{style:{height:"2rem"},id:"login-text-button"},"SIGN IN"),r.a.createElement(x.a,{color:"danger",isOpen:e.invalidLoginAttempt,toggle:function(){e.dismissLoginAttemptAlert()}},"Invalid username or password"))),r.a.createElement("div",{className:"row",style:{fontSize:"small",paddingTop:"1rem"}},r.a.createElement("p",null," New to Crowddit? "),r.a.createElement(h.b,{to:"/createUser",style:{paddingLeft:"0.5rem",fontWeight:"bold"}}," SIGN UP "))))))},T=n(21),I=n.n(T),R=function(){var e=Object(y.a)(b.a.mark((function e(t){var n,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=2;break}return e.abrupt("return",{type:"DEFAULT"});case 2:return n=m+"/db/checkUsername?"+I.a.stringify({username:t}),a={method:"GET"},e.next=6,fetch(n,a).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 6:if(!(r=e.sent)||!r.status){e.next=11;break}return e.abrupt("return",{type:"USERNAME_BLUR",payload:{status:"success"==r.status}});case 11:return e.abrupt("return",{type:"USERNAME_BLUR",payload:{status:!1}});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(y.a)(b.a.mark((function e(t){var n,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=2;break}return e.abrupt("return",{type:"DEFAULT"});case 2:return n=m+"/db/checkPassword?"+I.a.stringify({password:t}),a={method:"GET"},e.next=6,fetch(n,a).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 6:if(!(r=e.sent)||!r.status){e.next=11;break}return e.abrupt("return",{type:"PASSWORD_BLUR",payload:{status:"success"===r.status}});case 11:return e.abrupt("return",{type:"PASSWORD_BLUR",payload:{status:!1}});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(y.a)(b.a.mark((function e(){var t,n,a,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=document.getElementById("username-input").value.trim(),n=document.getElementById("password-input").value.trim(),console.log(t,n),t!==n||""!==t){e.next=5;break}return e.abrupt("return",{type:"CREATE_USER_ALERT"});case 5:return a=m+"/db/createUser?"+I.a.stringify({username:t,password:n}),r={method:"GET"},e.next=9,fetch(a,r).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 9:if(c=e.sent,console.log(c),"success"!==c.status){e.next=17;break}return console.log("setting cookie"),document.cookie="crowddit="+c.username,e.abrupt("return",{type:"CREATE_USER",payload:{status:!0,username:t}});case 17:return e.abrupt("return",{type:"CREATE_USER",payload:{status:!1,username:t}});case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(y.a)(b.a.mark((function e(t){var n,a,r,c,o,s,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,a=t.password,r=m+"/db/login?"+I.a.stringify({username:n,password:a}),c={method:"GET"},e.next=5,fetch(r,c).then((function(e){return e.json()})).then((function(e){return e}));case 5:if(o=e.sent,console.log("response",o),"success"!==o.status){e.next=20;break}return s=m+"/db/getAssociations?"+I.a.stringify({crowddit:o.username}),e.next=11,fetch(s,c).then((function(e){return e.json()})).then((function(e){return e}));case 11:if(i=e.sent,console.log(i.data),!i.data){e.next=17;break}return e.abrupt("return",{type:"LOGIN",payload:{username:o.username}});case 17:return e.abrupt("return",{type:"GET_ASSOCIATIONS",payload:{username:o.username}});case 18:e.next=21;break;case 20:return e.abrupt("return",{type:"INVALID_LOGIN"});case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=""===document.getElementById("username-input").value.trim(),t=""===document.getElementById("password-input").value.trim();return console.log("check me: ",e,t),e&&t?{type:"CREATE_USER_ALERT"}:{type:"DEFAULT"}},B=function(){var e=Object(y.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET"},a=m+"/reddit/auth?"+I.a.stringify({crowddit:t}),fetch(a,n).then((function(e){return e.json()})).then((function(e){e.auth_url&&(window.location=e.auth_url)})),e.abrupt("return",{type:"AUTH"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=Object(o.b)((function(e,t){return{modal:e.app.showLoginModal,invalidLoginAttempt:e.app.invalidLoginAttempt}}),(function(e){return{toggle:function(){return e({type:"TOGGLE_LOGIN"})},login:function(){var t=Object(y.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,P(n);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),dismissLoginAttemptAlert:function(){return e({type:"DISMISS_LOGIN_ALERT"})}}}))(S),M=n(43),W=n(87),H=n(88),J=n(89),F=n(90),z=n(91),K=n(92),V=n(93),$=n(94),q=function(e){var t=Object(a.useState)(!1),n=Object(M.a)(t,2),c=n[0],o=n[1];return console.log(e),r.a.createElement("div",null,"/settings"===e.page&&r.a.createElement(w.a,{to:"/settings"}),"/about"===e.page&&r.a.createElement(w.a,{to:"/about"}),r.a.createElement(W.a,{color:"light",light:!0,expand:"md"},r.a.createElement(H.a,{href:"https://indivism.github.io/crowddit/"},"crowddit"),r.a.createElement(J.a,{onClick:function(){return o(!c)}}),r.a.createElement(F.a,{isOpen:c,navbar:!0},r.a.createElement(z.a,{className:"mr-auto",navbar:!0},r.a.createElement(K.a,null,r.a.createElement(V.a,{href:"/about/"},"About")),r.a.createElement(K.a,null,r.a.createElement(V.a,{href:"https://github.com/Indivism/crowddit"},"GitHub")),e.cookie&&r.a.createElement(K.a,null,r.a.createElement(V.a,{onClick:function(){e.setPage("/settings")},style:{cursor:"pointer"}},"Settings")))),e.cookie&&r.a.createElement($.a,{style:{paddingRight:"1rem"}},e.username),e.cookie&&r.a.createElement(N.a,{outline:!0,color:"secondary",onClick:function(){return e.logout()}},"Log Out"),!e.cookie&&r.a.createElement(N.a,{outline:!0,color:"secondary",onClick:function(){return e.login()}},"Log In")))},Q=Object(o.b)((function(e,t){return{test:e.app.init_data,cookie:e.app.cookie,username:e.app.username,page:e.app.page}}),(function(e){return{login:function(){e({type:"TOGGLE_LOGIN"})},logout:function(){e((document.cookie="crowddit=; expires=Thu, 01 Jan 1970 00:00:01 GMT;",window.location="https://indivism.github.io/crowddit/#/",{type:"LOGOUT"}))},setPage:function(t){e(function(e){return{type:"SET_PAGE",payload:e}}(t))}}}))(q),X=Object(o.b)((function(e,t){return{showInitAlert:e.app.initAccountAlert}}),(function(e){return{}}))((function(e){return console.log(e),e.showInitAlert?r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row justify-content-center",style:{padding:"1rem"}},r.a.createElement("div",{className:"col-sm-10"},r.a.createElement(x.a,{className:"text-center",color:"info"},"To use Crowddit, you need to authenticate your Reddit account. Do so within the Crowddit ",r.a.createElement(h.b,{className:"alert-link",to:"/settings"},"account settings"),".")))):r.a.createElement("div",null)}));var Y=function(){return r.a.createElement("div",null,r.a.createElement(Q,null),r.a.createElement(D,null),r.a.createElement(X,null))},Z=n(95),ee=Object(o.b)((function(e,t){return{visible:e.app.showAuthAlert}}),(function(e){return{dismiss:function(){e({type:"DISMISS_AUTH_ALERT"})}}}))((function(e){return r.a.createElement("div",{className:"container-fluid"},window.location.toString().includes("success=insert")&&r.a.createElement("div",{className:"row  justify-content-center",style:{padding:"1rem"}},r.a.createElement("div",{className:"col-6"},r.a.createElement(x.a,{className:"text-center",color:"success",isOpen:e.visible,toggle:function(){return e.dismiss()}},"Successfully authenticated Reddit. At any time, you may revoke Crowddit's access within account settings."))),window.location.toString().includes("error=fail")&&r.a.createElement("div",{className:"row  justify-content-center",style:{padding:"1rem"}},r.a.createElement("div",{className:"col-6"},r.a.createElement(x.a,{className:"text-center",color:"danger",isOpen:e.visible,toggle:function(){return e.dismiss()}},"Hmm. Crowddit could not connect to Reddit. Try to join the Crowd again."))),window.location.toString().includes("error=conflict")&&r.a.createElement("div",{className:"row  justify-content-center",style:{padding:"1rem"}},r.a.createElement("div",{className:"col-6"},r.a.createElement(x.a,{className:"text-center",color:"warning",isOpen:e.visible,toggle:function(){return e.dismiss()}},"There appears to be an internal service error."))))})),te=Object(o.b)((function(e,t){return{crowddit:e.app.username}}),(function(e){return{auth:function(){var t=Object(y.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,B(n);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))((function(e){return r.a.createElement("div",null,r.a.createElement(Q,null),r.a.createElement(ee,null),r.a.createElement("div",{className:"container-fluid",style:{padding:"3rem"}},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-6 justify-contents-center"},r.a.createElement(Z.a,null,r.a.createElement("h1",{className:"display-5"},"Authenticate your Reddit"),r.a.createElement("p",{className:"lead"},"Crowddit uses Reddit's API to uncover other subreddits that you may be interested in."),r.a.createElement("hr",null),r.a.createElement("p",null,"Tokenized access ensures Crowddit will never ask for your password."),r.a.createElement("p",{className:"lead"},r.a.createElement(N.a,{color:"primary",onClick:function(){e.auth(e.crowddit)}},"Join the Crowdd")))))))})),ne=n(96),ae=n(97),re=Object(o.b)((function(e,t){return{validUsername:e.app.validUsername,validPassword:e.app.validPassword,toggleUserAlert:e.app.createUserAlert,authenticated:e.app.cookie}}),(function(e){return{usernameBlur:function(){var t=Object(y.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,R(n);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),passwordBlur:function(){var t=Object(y.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,_(n);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),createUser:function(){var t=Object(y.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,G();case 3:t.t1=t.sent,(0,t.t0)(t.t1),e({type:"COOKIE"});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),createUserAlert:function(){var t=Object(y.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(C());case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}}))((function(e){return console.log("check me",e),r.a.createElement("div",null,e.authenticated&&r.a.createElement(w.a,{to:"/"}),r.a.createElement(Q,null),r.a.createElement("div",{className:"container",style:{marginTop:"3rem"}},r.a.createElement(k.a,{onSubmit:function(){var t=Object(y.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,e.createUser();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},r.a.createElement(U.a,{onBlur:function(t){return e.usernameBlur(t.target.value.trim())}},r.a.createElement(L.a,{for:"exampleEmail"},"Username"),r.a.createElement(j.a,{id:"username-input",invalid:!1===e.validUsername&&""!==document.getElementById("username-input").value.trim(),valid:!0===e.validUsername}),e.validUsername&&r.a.createElement(ne.a,{valid:!0},"Sweet! That username is available."),!1===e.validUsername&&r.a.createElement(ne.a,{invalid:!0},"That username is invalid or already taken."),r.a.createElement(ae.a,null,"Usernames can contain lowercase and uppercase letters and numbers.")),r.a.createElement(U.a,{onBlur:function(t){return e.passwordBlur(t.target.value.trim())}},r.a.createElement(L.a,{for:"examplePassword"},"Password"),r.a.createElement(j.a,{id:"password-input",invalid:!1===e.validPassword&&""!==document.getElementById("password-input").value.trim(),valid:!0===e.validPassword}),e.validPassword&&r.a.createElement(ne.a,{valid:!0},"Great! This is a valid password."),!1===e.validPassword&&r.a.createElement(ne.a,{invalid:!0},"Oh no! That password is invalid. Please try again. "),r.a.createElement(ae.a,null,"Passwords must contain at least one numeric character and 1 capital letter.")),e.toggleUserAlert&&r.a.createElement(x.a,null,"Please input a username and password to sign in."),r.a.createElement(N.a,{id:"login-text-button",secondary:!0},r.a.createElement(h.b,{to:e.toggleUserAlert?"/createUser":"/",style:{color:"white"},onClick:function(){return e.createUserAlert()}},"SIGN UP")))))})),ce=function(){return r.a.createElement(h.a,null,r.a.createElement(w.d,null,r.a.createElement(w.b,{exact:!0,path:"/"},r.a.createElement(Y,null)),r.a.createElement(w.b,{path:"/createUser"},r.a.createElement(re,null)),r.a.createElement(w.b,{path:"/settings"},r.a.createElement(te,null))))},oe=n(31),se={key:"app",storage:u.a,whitelist:["app"]},ie=Object(s.a)(se,f),ue=Object(l.a)(oe.a,g.a),le=Object(l.d)(ie,ue);Object(s.b)(le);Object(c.render)(r.a.createElement(o.a,{store:le},r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.69012c73.chunk.js.map