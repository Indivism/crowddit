(this.webpackJsonpcrowddit=this.webpackJsonpcrowddit||[]).push([[0],{42:function(e,t,n){e.exports=n(75)},51:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),o=n(13),s=n(20),i=n(12),u="https://crowddit-backend.herokuapp.com",l={showLoginModal:!1,validUsername:null,cookie:document.cookie.includes("crowddit="),username:document.cookie.slice(document.cookie.indexOf("crowddit")+9),invalidLoginAttempt:!1,createUserAlert:!1,page:"/",initAccountAlert:!1},d=Object(s.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_LOGIN":return Object(i.a)({},e,{showLoginModal:!e.showLoginModal,invalidLoginAttempt:!1});case"USERNAME_BLUR":return Object(i.a)({},e,{validUsername:t.payload.status,createUserAlert:!1});case"PASSWORD_BLUR":return Object(i.a)({},e,{validPassword:t.payload.status,createUserAlert:!1});case"COOKIE":return Object(i.a)({},e,{cookie:document.cookie.includes("crowddit=")});case"CREATE_USER":return Object(i.a)({},e,{username:t.payload.username,showLoginModal:!1,initAccountAlert:!0});case"LOGOUT":return Object(i.a)({},e,{cookie:!1,initAccountAlert:!1});case"LOGIN":return Object(i.a)({},e,{showLoginModal:!1,username:t.payload.username,cookie:!0,invalidLoginAttempt:!1});case"GET_ASSOCIATIONS":return Object(i.a)({},e,{showLoginModal:!1,username:t.payload.username,cookie:!0,invalidLoginAttempt:!1,initAccountAlert:!0});case"INVALID_LOGIN":return Object(i.a)({},e,{invalidLoginAttempt:!0});case"DISMISS_LOGIN_ALERT":return Object(i.a)({},e,{invalidLoginAttempt:!1});case"CREATE_USER_ALERT":return Object(i.a)({},e,{createUserAlert:!0});case"SET_PAGE":return Object(i.a)({},e,{page:t.payload});default:return e}}}),m=n(38),p=n.n(m),f=(n(51),n(6)),E=n.n(f),g=n(9),h=n(76),w=n(94),v=n(77),y=n(78),b=n(79),A=n(80),O=n(81),k=n(82),U=n(16),L=function(e){var t=e.className;return console.log(e),r.a.createElement(h.a,null,r.a.createElement(w.a,{isOpen:e.modal,toggle:e.toggle,className:t,centered:!0},r.a.createElement("div",{className:"row",style:{height:350}},r.a.createElement("div",{className:"col-sm-3",id:"login-gradient-box"}),r.a.createElement("div",{className:"col",style:{marginLeft:"1rem"}},r.a.createElement("div",{className:"row",id:"login-text"},"Sign in"),r.a.createElement("div",{className:"row",style:{paddingTop:"1rem"}},r.a.createElement(v.a,{onSubmit:function(t){t.preventDefault(),e.login({username:document.getElementById("inputUsername").value,password:document.getElementById("inputPassword").value})}},r.a.createElement(y.a,null,r.a.createElement(b.a,{for:"exampleEmail",hidden:!0},"Username"),r.a.createElement(A.a,{type:"username",name:"username",id:"inputUsername",placeholder:"Username"})),r.a.createElement(y.a,null,r.a.createElement(b.a,{for:"inputPassword",hidden:!0},"Password"),r.a.createElement(A.a,{type:"password",name:"password",id:"inputPassword",placeholder:"Password"})),!e.invalidLoginAttempt&&r.a.createElement(O.a,{style:{height:"2rem"},id:"login-text-button"},"SIGN IN"),r.a.createElement(k.a,{color:"danger",isOpen:e.invalidLoginAttempt,toggle:function(){e.dismissLoginAttemptAlert()}},"Invalid username or password"))),r.a.createElement("div",{className:"row",style:{fontSize:"small",paddingTop:"1rem"}},r.a.createElement("p",null," New to Crowddit? "),r.a.createElement(U.b,{to:"/createUser",style:{paddingLeft:"0.5rem",fontWeight:"bold"}}," SIGN UP "))))))},N=n(21),x=n.n(N),j=function(){var e=Object(g.a)(E.a.mark((function e(t){var n,a,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=2;break}return e.abrupt("return",{type:"DEFAULT"});case 2:return n=u+"/db/checkUsername?"+x.a.stringify({username:t}),a={method:"GET"},e.next=6,fetch(n,a).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 6:if(!(r=e.sent)||!r.status){e.next=11;break}return e.abrupt("return",{type:"USERNAME_BLUR",payload:{status:"success"==r.status}});case 11:return e.abrupt("return",{type:"USERNAME_BLUR",payload:{status:!1}});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(g.a)(E.a.mark((function e(t){var n,a,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=2;break}return e.abrupt("return",{type:"DEFAULT"});case 2:return n=u+"/db/checkPassword?"+x.a.stringify({password:t}),a={method:"GET"},e.next=6,fetch(n,a).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 6:if(!(r=e.sent)||!r.status){e.next=11;break}return e.abrupt("return",{type:"PASSWORD_BLUR",payload:{status:"success"===r.status}});case 11:return e.abrupt("return",{type:"PASSWORD_BLUR",payload:{status:!1}});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(g.a)(E.a.mark((function e(){var t,n,a,r,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=document.getElementById("username-input").value.trim(),n=document.getElementById("password-input").value.trim(),console.log(t,n),t!==n||""!==t){e.next=5;break}return e.abrupt("return",{type:"CREATE_USER_ALERT"});case 5:return a=u+"/db/createUser?"+x.a.stringify({username:t,password:n}),r={method:"GET"},e.next=9,fetch(a,r).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 9:if(c=e.sent,console.log(c),"success"!==c.status){e.next=17;break}return console.log("setting cookie"),document.cookie="crowddit="+c.username,e.abrupt("return",{type:"CREATE_USER",payload:{status:!0,username:t}});case 17:return e.abrupt("return",{type:"CREATE_USER",payload:{status:!1,username:t}});case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(g.a)(E.a.mark((function e(t){var n,a,r,c,o,s,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,a=t.password,r=u+"/db/login?"+x.a.stringify({username:n,password:a}),c={method:"GET"},e.next=5,fetch(r,c).then((function(e){return e.json()})).then((function(e){return e}));case 5:if(o=e.sent,console.log("response",o),"success"!==o.status){e.next=20;break}return s=u+"/db/getAssociations?"+x.a.stringify({crowddit:o.username}),e.next=11,fetch(s,c).then((function(e){return e.json()})).then((function(e){return e}));case 11:if(i=e.sent,console.log(i.data),!i.data){e.next=17;break}return e.abrupt("return",{type:"LOGIN",payload:{username:o.username}});case 17:return e.abrupt("return",{type:"GET_ASSOCIATIONS",payload:{username:o.username}});case 18:e.next=21;break;case 20:return e.abrupt("return",{type:"INVALID_LOGIN"});case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=""===document.getElementById("username-input").value.trim(),t=""===document.getElementById("password-input").value.trim();return console.log("check me: ",e,t),e&&t?{type:"CREATE_USER_ALERT"}:{type:"DEFAULT"}},G=function(){var e=Object(g.a)(E.a.mark((function e(t){var n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET"},a=u+"/reddit/auth?"+x.a.stringify({crowddit:t}),fetch(a,n).then((function(e){return e.json()})).then((function(e){e.auth_url&&(window.location=e.auth_url)})),e.abrupt("return",{type:"AUTH"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=Object(o.b)((function(e,t){return{modal:e.app.showLoginModal,invalidLoginAttempt:e.app.invalidLoginAttempt}}),(function(e){return{toggle:function(){return e({type:"TOGGLE_LOGIN"})},login:function(){var t=Object(g.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,I(n);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),dismissLoginAttemptAlert:function(){return e({type:"DISMISS_LOGIN_ALERT"})}}}))(L),P=n(41),C=n(83),B=n(84),D=n(85),M=n(86),W=n(87),J=n(88),F=n(89),H=n(90),z=n(18),K=function(e){var t=Object(a.useState)(!1),n=Object(P.a)(t,2),c=n[0],o=n[1];return r.a.createElement("div",null,"/settings"===e.page&&r.a.createElement(z.a,{to:"/settings"}),"/about"===e.page&&r.a.createElement(z.a,{to:"/about"}),r.a.createElement(C.a,{color:"light",light:!0,expand:"md"},r.a.createElement(B.a,{href:"https://indivism.github.io/crowddit/"},"crowddit"),r.a.createElement(D.a,{onClick:function(){return o(!c)}}),r.a.createElement(M.a,{isOpen:c,navbar:!0},r.a.createElement(W.a,{className:"mr-auto",navbar:!0},r.a.createElement(J.a,null,r.a.createElement(F.a,{href:"/about/"},"About")),r.a.createElement(J.a,null,r.a.createElement(F.a,{href:"https://github.com/Indivism/crowddit"},"GitHub")),r.a.createElement(J.a,null,r.a.createElement(F.a,{onClick:function(){e.setPage("/settings")}},"Settings")))),e.cookie&&r.a.createElement(H.a,{style:{paddingRight:"1rem"}},e.username),e.cookie&&r.a.createElement(O.a,{outline:!0,color:"secondary",onClick:function(){return e.logout()}},"Log Out"),!e.cookie&&r.a.createElement(O.a,{outline:!0,color:"secondary",onClick:function(){return e.login()}},"Log In")))},V=Object(o.b)((function(e,t){return{test:e.app.init_data,cookie:e.app.cookie,username:e.app.username,page:e.app.page}}),(function(e){return{login:function(){e({type:"TOGGLE_LOGIN"})},logout:function(){e((document.cookie="crowddit=; expires=Thu, 01 Jan 1970 00:00:01 GMT;",{type:"LOGOUT"}))},setPage:function(t){e(function(e){return{type:"SET_PAGE",payload:e}}(t))}}}))(K),$=Object(o.b)((function(e,t){return{showInitAlert:e.app.initAccountAlert}}),(function(e){return{}}))((function(e){return console.log(e),e.showInitAlert?r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row justify-content-center",style:{padding:"1rem"}},r.a.createElement("div",{className:"col-sm-10"},r.a.createElement(k.a,{className:"text-center",color:"info"},"To use Crowddit, you need to authenticate your Reddit account. Do so within the Crowddit ",r.a.createElement(U.b,{className:"alert-link",to:"/settings"},"account settings"),".")))):r.a.createElement("div",null)}));var q=function(){return r.a.createElement("div",null,r.a.createElement(V,null),r.a.createElement(_,null),r.a.createElement($,null))};n(73),n(74),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=n(91),X=function(e){return r.a.createElement("div",{className:"container-fluid"},window.location.toString().includes("success=insert")&&r.a.createElement("div",{className:"row  justify-content-center",style:{padding:"1rem"}},r.a.createElement("div",{className:"col-6"},r.a.createElement(k.a,{className:"text-center",color:"success"},"Successfully authenticated Reddit. At any time, you may revoke Crowddit's access within account settings."))),window.location.toString().includes("error=fail")&&r.a.createElement("div",{className:"row  justify-content-center",style:{padding:"1rem"}},r.a.createElement("div",{className:"col-6"},r.a.createElement(k.a,{className:"text-center",color:"danger"},"Hmm. Crowddit could not connect to Reddit. Try to join the Crowd again."))),window.location.toString().includes("error=conflict")&&r.a.createElement("div",{className:"row  justify-content-center",style:{padding:"1rem"}},r.a.createElement("div",{className:"col-6"},r.a.createElement(k.a,{className:"text-center",color:"warning"},"There appears to be an internal service error."))))},Y=Object(o.b)((function(e,t){return{crowddit:e.app.username}}),(function(e){return{auth:function(){var t=Object(g.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,G(n);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))((function(e){return r.a.createElement("div",null,r.a.createElement(V,null),r.a.createElement(X,null),r.a.createElement("div",{className:"container-fluid",style:{padding:"3rem"}},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-6 justify-contents-center"},r.a.createElement(Q.a,null,r.a.createElement("h1",{className:"display-5"},"Authenticate your Reddit"),r.a.createElement("p",{className:"lead"},"Crowddit uses Reddit's API to uncover other subreddits that you may be interested in."),r.a.createElement("hr",null),r.a.createElement("p",null,"Tokenized access ensures Crowddit will never ask for your password."),r.a.createElement("p",{className:"lead"},r.a.createElement(O.a,{color:"primary",onClick:function(){e.auth(e.crowddit)}},"Join the Crowd")))))))})),Z=n(92),ee=n(93),te=Object(o.b)((function(e,t){return{validUsername:e.app.validUsername,validPassword:e.app.validPassword,toggleUserAlert:e.app.createUserAlert,authenticated:e.app.cookie}}),(function(e){return{usernameBlur:function(){var t=Object(g.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,j(n);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),passwordBlur:function(){var t=Object(g.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,T(n);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),createUser:function(){var t=Object(g.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,S();case 3:t.t1=t.sent,(0,t.t0)(t.t1),e({type:"COOKIE"});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),createUserAlert:function(){var t=Object(g.a)(E.a.mark((function t(){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(R());case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}}))((function(e){return console.log("check me",e),r.a.createElement("div",null,e.authenticated&&r.a.createElement(z.a,{to:"/"}),r.a.createElement(V,null),r.a.createElement("div",{className:"container",style:{marginTop:"3rem"}},r.a.createElement(v.a,{onSubmit:function(){var t=Object(g.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,e.createUser();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},r.a.createElement(y.a,{onBlur:function(t){return e.usernameBlur(t.target.value.trim())}},r.a.createElement(b.a,{for:"exampleEmail"},"Username"),r.a.createElement(A.a,{id:"username-input",invalid:!1===e.validUsername&&""!==document.getElementById("username-input").value.trim(),valid:!0===e.validUsername}),e.validUsername&&r.a.createElement(Z.a,{valid:!0},"Sweet! That username is available."),!1===e.validUsername&&r.a.createElement(Z.a,{invalid:!0},"That username is invalid or already taken."),r.a.createElement(ee.a,null,"Usernames can contain lowercase and uppercase letters and numbers.")),r.a.createElement(y.a,{onBlur:function(t){return e.passwordBlur(t.target.value.trim())}},r.a.createElement(b.a,{for:"examplePassword"},"Password"),r.a.createElement(A.a,{id:"password-input",invalid:!1===e.validPassword&&""!==document.getElementById("password-input").value.trim(),valid:!0===e.validPassword}),e.validPassword&&r.a.createElement(Z.a,{valid:!0},"Great! This is a valid password."),!1===e.validPassword&&r.a.createElement(Z.a,{invalid:!0},"Oh no! That password is invalid. Please try again. "),r.a.createElement(ee.a,null,"Passwords must contain at least one numeric character and 1 capital letter.")),e.toggleUserAlert&&r.a.createElement(k.a,null,"Please input a username and password to sign in."),r.a.createElement(O.a,{id:"login-text-button",secondary:!0},r.a.createElement(U.b,{to:e.toggleUserAlert?"/createUser":"/",style:{color:"white"},onClick:function(){return e.createUserAlert()}},"SIGN UP")))))})),ne=function(){return r.a.createElement(U.a,null,r.a.createElement(z.d,null,r.a.createElement(z.b,{exact:!0,path:"/"},r.a.createElement(q,null)),r.a.createElement(z.b,{path:"/createUser"},r.a.createElement(te,null)),r.a.createElement(z.b,{path:"/settings"},r.a.createElement(Y,null))))},ae=n(40),re=Object(s.d)(d,Object(s.a)(ae.a,p.a));window.store=re,Object(c.render)(r.a.createElement(o.a,{store:re},r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.ab6d444f.chunk.js.map