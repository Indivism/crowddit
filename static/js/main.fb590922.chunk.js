(this.webpackJsonpcrowddit=this.webpackJsonpcrowddit||[]).push([[0],{53:function(e,t,n){e.exports=n(91)},65:function(e,t,n){},66:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"getStore",(function(){return Te}));var a=n(0),r=n.n(a),c=n(20),o=n(10),s=n(30),i=n.n(s);n(64),n(65),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(19),l=n(17),d=(n(66),n(6)),m=n.n(d),p=n(9),f=n(92),E=n(110),h=n(93),v=n(94),g=n(95),w=n(96),y=n(97),b=n(98),A="https://crowddit-backend.herokuapp.com",O=function(e){var t=e.className;return console.log(e),r.a.createElement(f.a,null,r.a.createElement(E.a,{isOpen:e.modal,toggle:e.toggle,className:t,centered:!0},r.a.createElement("div",{className:"row",style:{height:350}},r.a.createElement("div",{className:"col-sm-3",id:"login-gradient-box"}),r.a.createElement("div",{className:"col",style:{marginLeft:"1rem"}},r.a.createElement("div",{className:"row",id:"login-text"},"Sign in"),r.a.createElement("div",{className:"row",style:{paddingTop:"1rem"}},r.a.createElement(h.a,{onSubmit:function(t){t.preventDefault(),e.login({username:document.getElementById("inputUsername").value,password:document.getElementById("inputPassword").value})}},r.a.createElement(v.a,null,r.a.createElement(g.a,{for:"exampleEmail",hidden:!0},"Username"),r.a.createElement(w.a,{type:"username",name:"username",id:"inputUsername",placeholder:"Username"})),r.a.createElement(v.a,null,r.a.createElement(g.a,{for:"inputPassword",hidden:!0},"Password"),r.a.createElement(w.a,{type:"password",name:"password",id:"inputPassword",placeholder:"Password"})),!e.invalidLoginAttempt&&r.a.createElement(y.a,{style:{height:"2rem"},id:"login-text-button"},"SIGN IN"),r.a.createElement(b.a,{color:"danger",isOpen:e.invalidLoginAttempt,toggle:function(){e.dismissLoginAttemptAlert()}},"Invalid username or password"))),r.a.createElement("div",{className:"row",style:{fontSize:"small",paddingTop:"1rem"}},r.a.createElement("p",null," New to Crowddit? "),r.a.createElement(u.b,{to:"/createUser",style:{paddingLeft:"0.5rem",fontWeight:"bold"}}," SIGN UP "))))))},k=n(22),j=n.n(k),U=(n(88),function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=2;break}return e.abrupt("return",{type:"DEFAULT"});case 2:return n=A+"/db/checkUsername?"+j.a.stringify({username:t}),a={method:"GET"},e.next=6,fetch(n,a).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 6:if(!(r=e.sent)||!r.status){e.next=11;break}return e.abrupt("return",{type:"USERNAME_BLUR",payload:{status:"success"==r.status}});case 11:return e.abrupt("return",{type:"USERNAME_BLUR",payload:{status:!1}});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),S=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=2;break}return e.abrupt("return",{type:"DEFAULT"});case 2:return n=A+"/db/checkPassword?"+j.a.stringify({password:t}),a={method:"GET"},e.next=6,fetch(n,a).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 6:if(!(r=e.sent)||!r.status){e.next=11;break}return e.abrupt("return",{type:"PASSWORD_BLUR",payload:{status:"success"===r.status}});case 11:return e.abrupt("return",{type:"PASSWORD_BLUR",payload:{status:!1}});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(p.a)(m.a.mark((function e(){var t,n,a,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=document.getElementById("username-input").value.trim(),n=document.getElementById("password-input").value.trim(),console.log(t,n),t!==n||""!==t){e.next=5;break}return e.abrupt("return",{type:"CREATE_USER_ALERT"});case 5:return a=A+"/db/createUser?"+j.a.stringify({username:t,password:n}),r={method:"GET"},e.next=9,fetch(a,r).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 9:if(c=e.sent,console.log(c),"success"!==c.status){e.next=16;break}return document.cookie="crowddit="+c.username,e.abrupt("return",{type:"CREATE_USER",payload:{status:!0,username:t}});case 16:return e.abrupt("return",{type:"CREATE_USER",payload:{status:!1,username:t}});case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a,r,c,o,s,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,a=t.password,r=A+"/db/login?"+j.a.stringify({username:n,password:a}),c={method:"GET"},e.next=5,fetch(r,c).then((function(e){return e.json()})).then((function(e){return e}));case 5:if(o=e.sent,console.log("response",o),"success"!==o.status){e.next=20;break}return s=A+"/db/getAssociations?"+j.a.stringify({crowddit:o.username}),e.next=11,fetch(s,c).then((function(e){return e.json()})).then((function(e){return e}));case 11:if(i=e.sent,console.log("DATA: ",i),!i.data){e.next=17;break}return e.abrupt("return",{type:"LOGIN",payload:{username:o.username}});case 17:return e.abrupt("return",{type:"GET_ASSOCIATIONS",payload:{username:o.username}});case 18:e.next=21;break;case 20:return e.abrupt("return",{type:"INVALID_LOGIN"});case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=""===document.getElementById("username-input").value.trim(),t=""===document.getElementById("password-input").value.trim();return console.log("check me: ",e,t),e&&t?{type:"CREATE_USER_ALERT"}:{type:"DEFAULT"}},N=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET"},a=A+"/reddit/auth?"+j.a.stringify({crowddit:t}),fetch(a,n).then((function(e){return e.json()})).then((function(e){e.auth_url&&(window.location=e.auth_url)})),e.abrupt("return",{type:"AUTH"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(p.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=A+"/revoke?"+j.a.stringify({crowddit:Te().getState().app.username}),n={method:"GET"},e.next=4,fetch(t,n).then((function(e){return e.json()})).then((function(e){return console.log(e)}));case 4:return e.abrupt("return",{type:"REVOKE_AUTH"});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=Object(o.c)((function(e,t){return{modal:e.app.showLoginModal,invalidLoginAttempt:e.app.invalidLoginAttempt}}),(function(e){return{toggle:function(){return e({type:"TOGGLE_LOGIN"})},login:function(){var t=Object(p.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,x(n);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),dismissLoginAttemptAlert:function(){return e({type:"DISMISS_LOGIN_ALERT"})}}}))(O),_=n(51),C=n(99),G=n(100),P=n(101),B=n(102),D=n(103),M=n(104),H=n(105),F=n(106),W=function(e){var t=Object(a.useState)(!1),n=Object(_.a)(t,2),c=n[0],o=n[1];return console.log(e),r.a.createElement("div",null,"/settings"===e.page&&r.a.createElement(l.a,{to:"/settings"}),"/about"===e.page&&r.a.createElement(l.a,{to:"/about"}),r.a.createElement(C.a,{color:"light",light:!0,expand:"md"},r.a.createElement(G.a,{href:"https://indivism.github.io/crowddit/"},"crowddit"),r.a.createElement(P.a,{onClick:function(){return o(!c)}}),r.a.createElement(B.a,{isOpen:c,navbar:!0},r.a.createElement(D.a,{className:"mr-auto",navbar:!0},r.a.createElement(M.a,null,r.a.createElement(H.a,{href:"/about/"},"About")),r.a.createElement(M.a,null,r.a.createElement(H.a,{href:"https://github.com/Indivism/crowddit"},"GitHub")),e.cookie&&r.a.createElement(M.a,null,r.a.createElement(H.a,{onClick:function(){e.setPage("/settings")},style:{cursor:"pointer"}},"Settings")))),e.cookie&&r.a.createElement(F.a,{style:{paddingRight:"1rem"}},e.username),e.cookie&&r.a.createElement(y.a,{outline:!0,color:"secondary",onClick:function(){return e.logout()}},"Log Out"),!e.cookie&&r.a.createElement(y.a,{outline:!0,color:"secondary",onClick:function(){return e.login()}},"Log In")))},K=Object(o.c)((function(e,t){return{test:e.app.init_data,cookie:e.app.cookie,username:e.app.username,page:e.app.page}}),(function(e){return{login:function(){e({type:"TOGGLE_LOGIN"})},logout:function(){e((document.cookie="crowddit=; expires=Thu, 01 Jan 1970 00:00:01 GMT;",window.location.href="https://indivism.github.io/crowddit/#/",window.persistor.purge(),{type:"LOGOUT"})),e({type:"PURGE"})},setPage:function(t){e(function(e){return{type:"SET_PAGE",payload:e}}(t))}}}))(W),J=Object(o.c)((function(e,t){return{showInitAlert:e.app.initAccountAlert}}),(function(e){return{}}))((function(e){return console.log(e),e.showInitAlert?r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row justify-content-center",style:{padding:"1rem"}},r.a.createElement("div",{className:"col-sm-10"},r.a.createElement(b.a,{className:"text-center",color:"info"},"To use Crowddit, you need to authenticate your Reddit account. Do so within the Crowddit ",r.a.createElement(u.b,{className:"alert-link",to:"/settings"},"account settings"),".")))):r.a.createElement("div",null)}));var V=function(){return r.a.createElement("div",null,r.a.createElement(K,null),r.a.createElement(R,null),r.a.createElement(J,null))},z=n(46),$=n(47),q=n(50),Q=n(52),X=n(107),Y=Object(o.c)((function(e,t){return{visible:e.app.showAuthAlert}}),(function(e){return{dismiss:function(){e({type:"DISMISS_AUTH_ALERT"})}}}))((function(e){return r.a.createElement("div",{className:"container-fluid"},window.location.toString().includes("success=insert")&&r.a.createElement("div",{className:"row  justify-content-center",style:{padding:"1rem"}},r.a.createElement("div",{className:"col-6"},r.a.createElement(b.a,{className:"text-center",color:"success",isOpen:e.visible,toggle:function(){return e.dismiss()}},"Successfully authenticated Reddit. At any time, you may revoke Crowddit's access within account settings."))),window.location.toString().includes("error=fail")&&r.a.createElement("div",{className:"row  justify-content-center",style:{padding:"1rem"}},r.a.createElement("div",{className:"col-6"},r.a.createElement(b.a,{className:"text-center",color:"danger",isOpen:e.visible,toggle:function(){return e.dismiss()}},"Hmm. Crowddit could not connect to Reddit. Try to join the Crowd again."))),window.location.toString().includes("error=conflict")&&r.a.createElement("div",{className:"row  justify-content-center",style:{padding:"1rem"}},r.a.createElement("div",{className:"col-6"},r.a.createElement(b.a,{className:"text-center",color:"warning",isOpen:e.visible,toggle:function(){return e.dismiss()}},"There appears to be an internal service error."))))})),Z=n(18),ee=Object(o.c)((function(e,t){return{auth:e.app.auth}}),(function(e){return{revokeAuth:function(){var t=Object(p.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,I();case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}}))((function(e){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(Z.a,{in:e.auth,tag:"h5",className:"mt-3"},r.a.createElement(y.a,{color:"secondary",onClick:function(){return e.revokeAuth()},style:{marginBottom:"1rem"}},"Revoke Crowddit Permissions"))))})),te=function(e){Object(Q.a)(n,e);var t=Object(q.a)(n);function n(){return Object(z.a)(this,n),t.apply(this,arguments)}return Object($.a)(n,[{key:"componentDidMount",value:function(){this.props.onMount(),console.log("CHECK:",this.props)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(K,null),r.a.createElement(Y,null),r.a.createElement("div",{className:"container-fluid",style:{padding:"3rem"}},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-6 justify-content-center"},!this.props.isAuthenticated&&r.a.createElement(X.a,null,r.a.createElement("h1",{className:"display-5"},"Authenticate your Reddit"),r.a.createElement("p",{className:"lead"},"Crowddit uses Reddit's API to uncover other subreddits that you may be interested in."),r.a.createElement("hr",null),r.a.createElement("p",null,"Tokenized access ensures Crowddit will never ask for your password."),r.a.createElement("p",{className:"lead"},r.a.createElement(y.a,{color:"primary",onClick:function(){e.props.auth(e.props.crowddit)}},"Join the Crowdd"))),this.props.isAuthenticated&&r.a.createElement(ee,null)))))}}]),n}(r.a.Component),ne=Object(o.c)((function(e,t){return{crowddit:e.app.username,isAuthenticated:e.app.auth}}),(function(e){return{auth:function(){var t=Object(p.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,N(n);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),onMount:function(){e(function(){var e=Te().getState().router.location.hash,t=e.substring(e.indexOf("=")+1);switch(t){case"insert":return{type:"AUTH_SUCCESS",payload:t};case"failure":case"conflict":return{type:"AUTH_FAIL",payload:t};default:return{type:"DEFAULT"}}}())}}}))(te),ae=n(108),re=n(109),ce=Object(o.c)((function(e,t){return{validUsername:e.app.validUsername,validPassword:e.app.validPassword,toggleUserAlert:e.app.createUserAlert,authenticated:e.app.cookie}}),(function(e){return{usernameBlur:function(){var t=Object(p.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,U(n);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),passwordBlur:function(){var t=Object(p.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,S(n);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),createUser:function(){var t=Object(p.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,T();case 3:t.t1=t.sent,(0,t.t0)(t.t1),e({type:"COOKIE"});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),createUserAlert:function(){var t=Object(p.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(L());case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}}))((function(e){return console.log("check me",e),r.a.createElement("div",null,e.authenticated&&r.a.createElement(l.a,{to:"/"}),r.a.createElement(K,null),r.a.createElement("div",{className:"container",style:{marginTop:"3rem"}},r.a.createElement(h.a,{onSubmit:function(){var t=Object(p.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,e.createUser();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},r.a.createElement(v.a,{onBlur:function(t){return e.usernameBlur(t.target.value.trim())}},r.a.createElement(g.a,{for:"exampleEmail"},"Username"),r.a.createElement(w.a,{id:"username-input",invalid:!1===e.validUsername&&""!==document.getElementById("username-input").value.trim(),valid:!0===e.validUsername}),e.validUsername&&r.a.createElement(ae.a,{valid:!0},"Sweet! That username is available."),!1===e.validUsername&&r.a.createElement(ae.a,{invalid:!0},"That username is invalid or already taken."),r.a.createElement(re.a,null,"Usernames can contain lowercase and uppercase letters and numbers.")),r.a.createElement(v.a,{onBlur:function(t){return e.passwordBlur(t.target.value.trim())}},r.a.createElement(g.a,{for:"examplePassword"},"Password"),r.a.createElement(w.a,{id:"password-input",invalid:!1===e.validPassword&&""!==document.getElementById("password-input").value.trim(),valid:!0===e.validPassword}),e.validPassword&&r.a.createElement(ae.a,{valid:!0},"Great! This is a valid password."),!1===e.validPassword&&r.a.createElement(ae.a,{invalid:!0},"Oh no! That password is invalid. Please try again. "),r.a.createElement(re.a,null,"Passwords must contain at least one numeric character and 1 capital letter.")),e.toggleUserAlert&&r.a.createElement(b.a,null,"Please input a username and password to sign in."),r.a.createElement(y.a,{id:"login-text-button",secondary:!0},r.a.createElement(u.b,{to:e.toggleUserAlert?"/createUser":"/",style:{color:"white"},onClick:function(){return e.createUserAlert()}},"SIGN UP")))))})),oe=function(){return r.a.createElement(u.a,null,r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/createUser"},r.a.createElement(ce,null)),r.a.createElement(l.b,{exact:!0,path:"/settings"},r.a.createElement(ne,null)),r.a.createElement(l.b,{exact:!0,path:"/about"}),r.a.createElement(l.b,{path:"/"},r.a.createElement(V,null))))},se=n(24),ie=n(16),ue=n(43),le=n(13),de=n(48),me=n(49),pe=n.n(me),fe=n(34),Ee=n(11),he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_LOGIN":return Object(Ee.a)({},e,{showLoginModal:!e.showLoginModal,invalidLoginAttempt:!1});case"USERNAME_BLUR":return Object(Ee.a)({},e,{validUsername:t.payload.status,createUserAlert:!1});case"PASSWORD_BLUR":return Object(Ee.a)({},e,{validPassword:t.payload.status,createUserAlert:!1});case"COOKIE":return Object(Ee.a)({},e,{cookie:document.cookie.includes("crowddit=")});case"CREATE_USER":return Object(Ee.a)({},e,{username:t.payload.username,showLoginModal:!1,initAccountAlert:!0});case"LOGOUT":return Object(Ee.a)({},e,{cookie:!1,initAccountAlert:!1,auth:!1});case"LOGIN":return Object(Ee.a)({},e,{showLoginModal:!1,username:t.payload.username,cookie:!0,invalidLoginAttempt:!1,initAccountAlert:!1,auth:!0});case"GET_ASSOCIATIONS":return Object(Ee.a)({},e,{showLoginModal:!1,username:t.payload.username,cookie:!0,invalidLoginAttempt:!1,initAccountAlert:!0,auth:!1});case"INVALID_LOGIN":return Object(Ee.a)({},e,{invalidLoginAttempt:!0});case"DISMISS_LOGIN_ALERT":return Object(Ee.a)({},e,{invalidLoginAttempt:!1});case"CREATE_USER_ALERT":return Object(Ee.a)({},e,{createUserAlert:!0});case"SET_PAGE":return Object(Ee.a)({},e,{page:t.payload});case"DISMISS_AUTH_ALERT":return Object(Ee.a)({},e,{showAuthAlert:!1});case"AUTH_SUCCESS":return Object(Ee.a)({},e,{auth:!0});case"AUTH_FAIL":case"REVOKE_AUTH":return Object(Ee.a)({},e,{auth:!1});default:return e}},ve=function(e){return Object(ie.c)({router:Object(se.b)(e),app:he})},ge=Object(le.a)(),we=[Object(ue.a)(ge),de.a,pe.a],ye=[ie.a.apply(void 0,we)],be={key:"root",storage:i.a,blacklist:["router"]},Ae=Object(fe.a)(be,ve(ge)),Oe=Object(ie.e)(Ae,void 0,ie.d.apply(void 0,ye)),ke=Object(fe.b)(Oe),je={store:Oe,persistor:ke},Ue=je.store,Se=je.persistor;window.store=Ue,window.persistor=Se;var Te=function(){return Ue};console.log(Ue,Se),Object(c.render)(r.a.createElement(o.a,{store:Ue},r.a.createElement(se.a,{history:ge},r.a.createElement(oe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.fb590922.chunk.js.map