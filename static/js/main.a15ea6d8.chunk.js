(this.webpackJsonpcrowddit=this.webpackJsonpcrowddit||[]).push([[0],{53:function(e,t,n){e.exports=n(91)},66:function(e,t,n){},67:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"getStore",(function(){return ke}));var a=n(0),r=n.n(a),c=n(20),o=n(10),s=n(28),i=n(24),u=n.n(i),l=n(14),d=n(25),m=n(11),p="https://crowddit-backend.herokuapp.com",f={showLoginModal:!1,validUsername:null,cookie:document.cookie.includes("crowddit="),username:document.cookie.slice(document.cookie.indexOf("crowddit")+9),invalidLoginAttempt:!1,createUserAlert:!1,page:"/",initAccountAlert:!1,showAuthAlert:!0,auth:!1},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_LOGIN":return Object(m.a)({},e,{showLoginModal:!e.showLoginModal,invalidLoginAttempt:!1});case"USERNAME_BLUR":return Object(m.a)({},e,{validUsername:t.payload.status,createUserAlert:!1});case"PASSWORD_BLUR":return Object(m.a)({},e,{validPassword:t.payload.status,createUserAlert:!1});case"COOKIE":return Object(m.a)({},e,{cookie:document.cookie.includes("crowddit=")});case"CREATE_USER":return Object(m.a)({},e,{username:t.payload.username,showLoginModal:!1,initAccountAlert:!0});case"LOGOUT":return Object(m.a)({},e,{cookie:!1,initAccountAlert:!1,auth:!1});case"LOGIN":return Object(m.a)({},e,{showLoginModal:!1,username:t.payload.username,cookie:!0,invalidLoginAttempt:!1,initAccountAlert:!1,auth:!0});case"GET_ASSOCIATIONS":return Object(m.a)({},e,{showLoginModal:!1,username:t.payload.username,cookie:!0,invalidLoginAttempt:!1,initAccountAlert:!0,auth:!1});case"INVALID_LOGIN":return Object(m.a)({},e,{invalidLoginAttempt:!0});case"DISMISS_LOGIN_ALERT":return Object(m.a)({},e,{invalidLoginAttempt:!1});case"CREATE_USER_ALERT":return Object(m.a)({},e,{createUserAlert:!0});case"SET_PAGE":return Object(m.a)({},e,{page:t.payload});case"DISMISS_AUTH_ALERT":return Object(m.a)({},e,{showAuthAlert:!1});case"AUTH_SUCCESS":return Object(m.a)({},e,{auth:!0});case"AUTH_FAIL":case"REVOKE_AUTH":return Object(m.a)({},e,{auth:!1});default:return e}},h=function(e){return Object(l.c)({router:Object(d.b)(e),app:E})},g=n(32),v=n.n(g);n(65),n(66),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=n(19),b=n(17),y=(n(67),n(6)),A=n.n(y),O=n(9),k=n(92),j=n(110),U=n(93),L=n(94),S=n(95),T=n(96),x=n(97),N=n(98),I=function(e){var t=e.className;return console.log(e),r.a.createElement(k.a,null,r.a.createElement(j.a,{isOpen:e.modal,toggle:e.toggle,className:t,centered:!0},r.a.createElement("div",{className:"row",style:{height:350}},r.a.createElement("div",{className:"col-sm-3",id:"login-gradient-box"}),r.a.createElement("div",{className:"col",style:{marginLeft:"1rem"}},r.a.createElement("div",{className:"row",id:"login-text"},"Sign in"),r.a.createElement("div",{className:"row",style:{paddingTop:"1rem"}},r.a.createElement(U.a,{onSubmit:function(t){t.preventDefault(),e.login({username:document.getElementById("inputUsername").value,password:document.getElementById("inputPassword").value})}},r.a.createElement(L.a,null,r.a.createElement(S.a,{for:"exampleEmail",hidden:!0},"Username"),r.a.createElement(T.a,{type:"username",name:"username",id:"inputUsername",placeholder:"Username"})),r.a.createElement(L.a,null,r.a.createElement(S.a,{for:"inputPassword",hidden:!0},"Password"),r.a.createElement(T.a,{type:"password",name:"password",id:"inputPassword",placeholder:"Password"})),!e.invalidLoginAttempt&&r.a.createElement(x.a,{style:{height:"2rem"},id:"login-text-button"},"SIGN IN"),r.a.createElement(N.a,{color:"danger",isOpen:e.invalidLoginAttempt,toggle:function(){e.dismissLoginAttemptAlert()}},"Invalid username or password"))),r.a.createElement("div",{className:"row",style:{fontSize:"small",paddingTop:"1rem"}},r.a.createElement("p",null," New to Crowddit? "),r.a.createElement(w.b,{to:"/createUser",style:{paddingLeft:"0.5rem",fontWeight:"bold"}}," SIGN UP "))))))},_=n(22),R=n.n(_),C=(n(88),function(){var e=Object(O.a)(A.a.mark((function e(t){var n,a,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=2;break}return e.abrupt("return",{type:"DEFAULT"});case 2:return n=p+"/db/checkUsername?"+R.a.stringify({username:t}),a={method:"GET"},e.next=6,fetch(n,a).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 6:if(!(r=e.sent)||!r.status){e.next=11;break}return e.abrupt("return",{type:"USERNAME_BLUR",payload:{status:"success"==r.status}});case 11:return e.abrupt("return",{type:"USERNAME_BLUR",payload:{status:!1}});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),G=function(){var e=Object(O.a)(A.a.mark((function e(t){var n,a,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=2;break}return e.abrupt("return",{type:"DEFAULT"});case 2:return n=p+"/db/checkPassword?"+R.a.stringify({password:t}),a={method:"GET"},e.next=6,fetch(n,a).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 6:if(!(r=e.sent)||!r.status){e.next=11;break}return e.abrupt("return",{type:"PASSWORD_BLUR",payload:{status:"success"===r.status}});case 11:return e.abrupt("return",{type:"PASSWORD_BLUR",payload:{status:!1}});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(O.a)(A.a.mark((function e(){var t,n,a,r,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=document.getElementById("username-input").value.trim(),n=document.getElementById("password-input").value.trim(),console.log(t,n),t!==n||""!==t){e.next=5;break}return e.abrupt("return",{type:"CREATE_USER_ALERT"});case 5:return a=p+"/db/createUser?"+R.a.stringify({username:t,password:n}),r={method:"GET"},e.next=9,fetch(a,r).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 9:if(c=e.sent,console.log(c),"success"!==c.status){e.next=16;break}return document.cookie="crowddit="+c.username,e.abrupt("return",{type:"CREATE_USER",payload:{status:!0,username:t}});case 16:return e.abrupt("return",{type:"CREATE_USER",payload:{status:!1,username:t}});case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(O.a)(A.a.mark((function e(t){var n,a,r,c,o,s,i;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,a=t.password,r=p+"/db/login?"+R.a.stringify({username:n,password:a}),c={method:"GET"},e.next=5,fetch(r,c).then((function(e){return e.json()})).then((function(e){return e}));case 5:if(o=e.sent,console.log("response",o),"success"!==o.status){e.next=20;break}return s=p+"/db/getAssociations?"+R.a.stringify({crowddit:o.username}),e.next=11,fetch(s,c).then((function(e){return e.json()})).then((function(e){return e}));case 11:if(i=e.sent,console.log("DATA: ",i),!i.data){e.next=17;break}return e.abrupt("return",{type:"LOGIN",payload:{username:o.username}});case 17:return e.abrupt("return",{type:"GET_ASSOCIATIONS",payload:{username:o.username}});case 18:e.next=21;break;case 20:return e.abrupt("return",{type:"INVALID_LOGIN"});case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=""===document.getElementById("username-input").value.trim(),t=""===document.getElementById("password-input").value.trim();return console.log("check me: ",e,t),e&&t?{type:"CREATE_USER_ALERT"}:{type:"DEFAULT"}},M=function(){var e=Object(O.a)(A.a.mark((function e(t){var n,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET"},a=p+"/reddit/auth?"+R.a.stringify({crowddit:t}),fetch(a,n).then((function(e){return e.json()})).then((function(e){e.auth_url&&(window.location=e.auth_url)})),e.abrupt("return",{type:"AUTH"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(O.a)(A.a.mark((function e(){var t,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p+"/revoke?"+R.a.stringify({crowddit:ke().getState().app.username}),n={method:"GET"},e.next=4,fetch(t,n).then((function(e){return e.json()})).then((function(e){return console.log(e)}));case 4:return e.abrupt("return",{type:"REVOKE_AUTH"});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=Object(o.c)((function(e,t){return{modal:e.app.showLoginModal,invalidLoginAttempt:e.app.invalidLoginAttempt}}),(function(e){return{toggle:function(){return e({type:"TOGGLE_LOGIN"})},login:function(){var t=Object(O.a)(A.a.mark((function t(n){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,B(n);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),dismissLoginAttemptAlert:function(){return e({type:"DISMISS_LOGIN_ALERT"})}}}))(I),W=n(51),K=n(99),J=n(100),V=n(101),z=n(102),$=n(103),q=n(104),Q=n(105),X=n(106),Y=function(e){var t=Object(a.useState)(!1),n=Object(W.a)(t,2),c=n[0],o=n[1];return console.log(e),r.a.createElement("div",null,"/settings"===e.page&&r.a.createElement(b.a,{to:"/settings"}),"/about"===e.page&&r.a.createElement(b.a,{to:"/about"}),r.a.createElement(K.a,{color:"light",light:!0,expand:"md"},r.a.createElement(J.a,{href:"https://indivism.github.io/crowddit/"},"crowddit"),r.a.createElement(V.a,{onClick:function(){return o(!c)}}),r.a.createElement(z.a,{isOpen:c,navbar:!0},r.a.createElement($.a,{className:"mr-auto",navbar:!0},r.a.createElement(q.a,null,r.a.createElement(Q.a,{href:"/about/"},"About")),r.a.createElement(q.a,null,r.a.createElement(Q.a,{href:"https://github.com/Indivism/crowddit"},"GitHub")),e.cookie&&r.a.createElement(q.a,null,r.a.createElement(Q.a,{onClick:function(){e.setPage("/settings")},style:{cursor:"pointer"}},"Settings")))),e.cookie&&r.a.createElement(X.a,{style:{paddingRight:"1rem"}},e.username),e.cookie&&r.a.createElement(x.a,{outline:!0,color:"secondary",onClick:function(){return e.logout()}},"Log Out"),!e.cookie&&r.a.createElement(x.a,{outline:!0,color:"secondary",onClick:function(){return e.login()}},"Log In")))},Z=Object(o.c)((function(e,t){return{test:e.app.init_data,cookie:e.app.cookie,username:e.app.username,page:e.app.page}}),(function(e){return{login:function(){e({type:"TOGGLE_LOGIN"})},logout:function(){e((document.cookie="crowddit=; expires=Thu, 01 Jan 1970 00:00:01 GMT;",window.location.href="https://indivism.github.io/crowddit/#/",{type:"LOGOUT"}))},setPage:function(t){e(function(e){return{type:"SET_PAGE",payload:e}}(t))}}}))(Y),ee=Object(o.c)((function(e,t){return{showInitAlert:e.app.initAccountAlert}}),(function(e){return{}}))((function(e){return console.log(e),e.showInitAlert?r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row justify-content-center",style:{padding:"1rem"}},r.a.createElement("div",{className:"col-sm-10"},r.a.createElement(N.a,{className:"text-center",color:"info"},"To use Crowddit, you need to authenticate your Reddit account. Do so within the Crowddit ",r.a.createElement(w.b,{className:"alert-link",to:"/settings"},"account settings"),".")))):r.a.createElement("div",null)}));var te=function(){return r.a.createElement("div",null,r.a.createElement(Z,null),r.a.createElement(F,null),r.a.createElement(ee,null))},ne=n(47),ae=n(48),re=n(50),ce=n(52),oe=n(107),se=Object(o.c)((function(e,t){return{visible:e.app.showAuthAlert}}),(function(e){return{dismiss:function(){e({type:"DISMISS_AUTH_ALERT"})}}}))((function(e){return r.a.createElement("div",{className:"container-fluid"},window.location.toString().includes("success=insert")&&r.a.createElement("div",{className:"row  justify-content-center",style:{padding:"1rem"}},r.a.createElement("div",{className:"col-6"},r.a.createElement(N.a,{className:"text-center",color:"success",isOpen:e.visible,toggle:function(){return e.dismiss()}},"Successfully authenticated Reddit. At any time, you may revoke Crowddit's access within account settings."))),window.location.toString().includes("error=fail")&&r.a.createElement("div",{className:"row  justify-content-center",style:{padding:"1rem"}},r.a.createElement("div",{className:"col-6"},r.a.createElement(N.a,{className:"text-center",color:"danger",isOpen:e.visible,toggle:function(){return e.dismiss()}},"Hmm. Crowddit could not connect to Reddit. Try to join the Crowd again."))),window.location.toString().includes("error=conflict")&&r.a.createElement("div",{className:"row  justify-content-center",style:{padding:"1rem"}},r.a.createElement("div",{className:"col-6"},r.a.createElement(N.a,{className:"text-center",color:"warning",isOpen:e.visible,toggle:function(){return e.dismiss()}},"There appears to be an internal service error."))))})),ie=n(18),ue=Object(o.c)((function(e,t){return{auth:e.app.auth}}),(function(e){return{revokeAuth:function(){var t=Object(O.a)(A.a.mark((function t(){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,H();case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}}))((function(e){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(ie.a,{in:e.auth,tag:"h5",className:"mt-3"},r.a.createElement(x.a,{color:"secondary",onClick:function(){return e.revokeAuth()},style:{marginBottom:"1rem"}},"Revoke Crowddit Permissions"))))})),le=function(e){Object(ce.a)(n,e);var t=Object(re.a)(n);function n(){return Object(ne.a)(this,n),t.apply(this,arguments)}return Object(ae.a)(n,[{key:"componentDidMount",value:function(){this.props.onMount(),console.log("CHECK:",this.props)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(Z,null),r.a.createElement(se,null),r.a.createElement("div",{className:"container-fluid",style:{padding:"3rem"}},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-6 justify-content-center"},!this.props.isAuthenticated&&r.a.createElement(oe.a,null,r.a.createElement("h1",{className:"display-5"},"Authenticate your Reddit"),r.a.createElement("p",{className:"lead"},"Crowddit uses Reddit's API to uncover other subreddits that you may be interested in."),r.a.createElement("hr",null),r.a.createElement("p",null,"Tokenized access ensures Crowddit will never ask for your password."),r.a.createElement("p",{className:"lead"},r.a.createElement(x.a,{color:"primary",onClick:function(){e.props.auth(e.props.crowddit)}},"Join the Crowdd"))),this.props.isAuthenticated&&r.a.createElement(ue,null)))))}}]),n}(r.a.Component),de=Object(o.c)((function(e,t){return{crowddit:e.app.username,isAuthenticated:e.app.auth}}),(function(e){return{auth:function(){var t=Object(O.a)(A.a.mark((function t(n){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,M(n);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),onMount:function(){e(function(){var e=ke().getState().router.location.hash,t=e.substring(e.indexOf("=")+1);switch(t){case"insert":return{type:"AUTH_SUCCESS",payload:t};case"failure":case"conflict":return{type:"AUTH_FAIL",payload:t};default:return{type:"DEFAULT"}}}())}}}))(le),me=n(108),pe=n(109),fe=Object(o.c)((function(e,t){return{validUsername:e.app.validUsername,validPassword:e.app.validPassword,toggleUserAlert:e.app.createUserAlert,authenticated:e.app.cookie}}),(function(e){return{usernameBlur:function(){var t=Object(O.a)(A.a.mark((function t(n){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,C(n);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),passwordBlur:function(){var t=Object(O.a)(A.a.mark((function t(n){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,G(n);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),createUser:function(){var t=Object(O.a)(A.a.mark((function t(n){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,P();case 3:t.t1=t.sent,(0,t.t0)(t.t1),e({type:"COOKIE"});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),createUserAlert:function(){var t=Object(O.a)(A.a.mark((function t(){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(D());case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}}))((function(e){return console.log("check me",e),r.a.createElement("div",null,e.authenticated&&r.a.createElement(b.a,{to:"/"}),r.a.createElement(Z,null),r.a.createElement("div",{className:"container",style:{marginTop:"3rem"}},r.a.createElement(U.a,{onSubmit:function(){var t=Object(O.a)(A.a.mark((function t(n){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,e.createUser();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},r.a.createElement(L.a,{onBlur:function(t){return e.usernameBlur(t.target.value.trim())}},r.a.createElement(S.a,{for:"exampleEmail"},"Username"),r.a.createElement(T.a,{id:"username-input",invalid:!1===e.validUsername&&""!==document.getElementById("username-input").value.trim(),valid:!0===e.validUsername}),e.validUsername&&r.a.createElement(me.a,{valid:!0},"Sweet! That username is available."),!1===e.validUsername&&r.a.createElement(me.a,{invalid:!0},"That username is invalid or already taken."),r.a.createElement(pe.a,null,"Usernames can contain lowercase and uppercase letters and numbers.")),r.a.createElement(L.a,{onBlur:function(t){return e.passwordBlur(t.target.value.trim())}},r.a.createElement(S.a,{for:"examplePassword"},"Password"),r.a.createElement(T.a,{id:"password-input",invalid:!1===e.validPassword&&""!==document.getElementById("password-input").value.trim(),valid:!0===e.validPassword}),e.validPassword&&r.a.createElement(me.a,{valid:!0},"Great! This is a valid password."),!1===e.validPassword&&r.a.createElement(me.a,{invalid:!0},"Oh no! That password is invalid. Please try again. "),r.a.createElement(pe.a,null,"Passwords must contain at least one numeric character and 1 capital letter.")),e.toggleUserAlert&&r.a.createElement(N.a,null,"Please input a username and password to sign in."),r.a.createElement(x.a,{id:"login-text-button",secondary:!0},r.a.createElement(w.b,{to:e.toggleUserAlert?"/createUser":"/",style:{color:"white"},onClick:function(){return e.createUserAlert()}},"SIGN UP")))))})),Ee=function(){return r.a.createElement(w.a,null,r.a.createElement(b.d,null,r.a.createElement(b.b,{exact:!0,path:"/"},r.a.createElement(te,null)),r.a.createElement(b.b,{path:"/createUser"},r.a.createElement(fe,null)),r.a.createElement(b.b,{path:"/settings"},r.a.createElement(de,null)),r.a.createElement(b.b,{path:"/about"},r.a.createElement("img",{src:"abdu.jpg"}))))},he=n(44),ge=n(13),ve=n(49),we=Object(ge.a)(),be={key:"app",storage:u.a,whitelist:["app"]},ye=function(){var e=Object(l.e)(Object(s.a)(be,h(we)),Object(l.d)(Object(l.a)(Object(he.a)(we),ve.a,v.a)));return{store:e,persistor:Object(s.b)(e)}}(),Ae=ye.store,Oe=ye.persistor;window.store=Ae;var ke=function(){return Ae};Object(c.render)(r.a.createElement(o.a,{store:Ae},r.a.createElement(i.PersistGate,{loading:null,persistor:Oe},r.a.createElement(d.a,{history:we},r.a.createElement(Ee,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.a15ea6d8.chunk.js.map