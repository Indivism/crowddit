(this.webpackJsonpcrowddit=this.webpackJsonpcrowddit||[]).push([[0],{54:function(e,t,n){e.exports=n(92)},66:function(e,t,n){},67:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"getStore",(function(){return Fe}));var a=n(0),r=n.n(a),c=n(22),o=n(10),s=n(34),i=n.n(s);n(65),n(66),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(20),l=n(17),d=(n(67),n(6)),p=n.n(d),m=n(7),f=n(93),h=n(116),E=n(94),w=n(95),g=n(96),v=n(97),b=n(98),y=n(99),O="https://crowddit-backend.herokuapp.com/db",A="https://crowddit-backend.herokuapp.com/reddit",k=function(e){var t=e.className;return console.log(e),r.a.createElement(f.a,null,r.a.createElement(h.a,{isOpen:e.modal,toggle:e.toggle,className:t,centered:!0},r.a.createElement("div",{className:"row",style:{height:350}},r.a.createElement("div",{className:"col-sm-3",id:"login-gradient-box"}),r.a.createElement("div",{className:"col",style:{marginLeft:"1rem"}},r.a.createElement("div",{className:"row",id:"login-text"},"Sign in"),r.a.createElement("div",{className:"row",style:{paddingTop:"1rem"}},r.a.createElement(E.a,{onSubmit:function(t){t.preventDefault(),e.login({username:document.getElementById("inputUsername").value,password:document.getElementById("inputPassword").value})}},r.a.createElement(w.a,null,r.a.createElement(g.a,{for:"exampleEmail",hidden:!0},"Username"),r.a.createElement(v.a,{type:"username",name:"username",id:"inputUsername",placeholder:"Username"})),r.a.createElement(w.a,null,r.a.createElement(g.a,{for:"inputPassword",hidden:!0},"Password"),r.a.createElement(v.a,{type:"password",name:"password",id:"inputPassword",placeholder:"Password"})),!e.invalidLoginAttempt&&r.a.createElement(b.a,{style:{height:"2rem"},id:"login-text-button"},"SIGN IN"),r.a.createElement(y.a,{color:"danger",isOpen:e.invalidLoginAttempt,toggle:function(){e.dismissLoginAttemptAlert()}},"Invalid username or password"))),r.a.createElement("div",{className:"row",style:{fontSize:"small",paddingTop:"1rem"}},r.a.createElement("p",null," New to Crowddit? "),r.a.createElement(u.b,{to:"/createUser",style:{paddingLeft:"0.5rem",fontWeight:"bold"}}," SIGN UP "))))))},j=n(19),S=n.n(j),U=(n(89),function(){var e=Object(m.a)(p.a.mark((function e(t){var n,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=2;break}return e.abrupt("return",{type:"DEFAULT"});case 2:return n=O+"/checkUsername?"+S.a.stringify({username:t}),a={method:"GET"},e.next=6,fetch(n,a).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 6:if(!(r=e.sent)||!r.status){e.next=11;break}return e.abrupt("return",{type:"USERNAME_BLUR",payload:{status:"success"==r.status}});case 11:return e.abrupt("return",{type:"USERNAME_BLUR",payload:{status:!1}});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),x=function(){var e=Object(m.a)(p.a.mark((function e(t){var n,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=2;break}return e.abrupt("return",{type:"DEFAULT"});case 2:return n=O+"/checkPassword?"+S.a.stringify({password:t}),a={method:"GET"},e.next=6,fetch(n,a).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 6:if(!(r=e.sent)||!r.status){e.next=11;break}return e.abrupt("return",{type:"PASSWORD_BLUR",payload:{status:"success"===r.status}});case 11:return e.abrupt("return",{type:"PASSWORD_BLUR",payload:{status:!1}});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(m.a)(p.a.mark((function e(){var t,n,a,r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=document.getElementById("username-input").value.trim(),n=document.getElementById("password-input").value.trim(),console.log(t,n),t!==n||""!==t){e.next=5;break}return e.abrupt("return",{type:"CREATE_USER_ALERT"});case 5:return a=O+"/createUser?"+S.a.stringify({username:t,password:n}),r={method:"GET"},e.next=9,fetch(a,r).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 9:if(c=e.sent,console.log(c),"success"!==c.status){e.next=16;break}return document.cookie="crowddit="+c.username,e.abrupt("return",{type:"CREATE_USER",payload:{status:!0,username:t}});case 16:return e.abrupt("return",{type:"CREATE_USER",payload:{status:!1,username:t}});case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(m.a)(p.a.mark((function e(t){var n,a,r,c,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,a=t.password,r=O+"/login?"+S.a.stringify({username:n,password:a}),e.next=4,fetch(r).then((function(e){return e.json()})).then((function(e){return e}));case 4:if(c=e.sent,console.log("response",c),"success"!==c.status){e.next=20;break}return o=O+"/getAssociations?"+S.a.stringify({crowddit:c.username}),e.next=10,fetch(o).then((function(e){return e.json()})).then((function(e){return e}));case 10:if("success"!==e.sent.status){e.next=17;break}return _(c.username),Fe().dispatch({type:"AUTH_SUCCESS",payload:"login"}),e.abrupt("return",{type:"LOGIN",payload:{username:c.username}});case 17:return e.abrupt("return",{type:"GET_ASSOCIATIONS",payload:{username:c.username}});case 18:e.next=21;break;case 20:return e.abrupt("return",{type:"INVALID_LOGIN"});case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=""===document.getElementById("username-input").value.trim(),t=""===document.getElementById("password-input").value.trim();return console.log("check me: ",e,t),e&&t?{type:"CREATE_USER_ALERT"}:{type:"DEFAULT"}},I=function(){var e=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=A+"/auth?"+S.a.stringify({crowddit:t}),fetch(n).then((function(e){return e.json()})).then((function(e){e.auth_url&&(window.location=e.auth_url)})),e.abrupt("return",{type:"AUTH"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(m.a)(p.a.mark((function e(){var t,n,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Fe().getState().app.username,n=O+"/getAssociations?"+S.a.stringify({crowddit:t}),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){return e}));case 4:if("success"!==e.sent.status){e.next=8;break}return _(t),e.abrupt("return",{type:"AUTH_SUCCESS",payload:"insert"});case 8:a=Fe().getState().router.location.hash,r=a.substring(a.indexOf("=")+1),e.t0=r,e.next="failure"===e.t0?13:"conflict"===e.t0?14:15;break;case 13:case 14:return e.abrupt("return",{type:"AUTH_FAIL",payload:r});case 15:return e.abrupt("return",{type:"DEFAULT"});case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(m.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=O+"/revoke?"+S.a.stringify({crowddit:Fe().getState().app.username}),n={method:"GET"},e.next=4,fetch(t,n).then((function(e){return e.json()})).then((function(e){return console.log(e)}));case 4:return e.abrupt("return",{type:"REVOKE_AUTH"});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(m.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=A+"/getCrowds?"+S.a.stringify({crowddit:t||Fe().getState().app.username}),e.next=3,fetch(n).then((function(e){return e.json()})).then((function(e){return e}));case 3:a=e.sent,Fe().dispatch({type:"GET_CROWDS",payload:a});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=Object(o.c)((function(e,t){return{modal:e.app.showLoginModal,invalidLoginAttempt:e.app.invalidLoginAttempt}}),(function(e){return{toggle:function(){return e({type:"TOGGLE_LOGIN"})},login:function(){var t=Object(m.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,N(n);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),dismissLoginAttemptAlert:function(){return e({type:"DISMISS_LOGIN_ALERT"})}}}))(k),B=n(53),P=n(100),D=n(101),M=n(102),F=n(103),H=n(104),J=n(105),W=n(106),K=n(107),X=function(e){var t=Object(a.useState)(!1),n=Object(B.a)(t,2),c=n[0],o=n[1];return console.log(e),r.a.createElement("div",null,r.a.createElement(P.a,{color:"light",light:!0,expand:"md"},r.a.createElement(D.a,{href:"https://indivism.github.io/crowddit/"},"crowddit"),r.a.createElement(M.a,{onClick:function(){return o(!c)}}),r.a.createElement(F.a,{isOpen:c,navbar:!0},r.a.createElement(H.a,{className:"mr-auto",navbar:!0},r.a.createElement(J.a,null,r.a.createElement(W.a,{href:"/about/"},"About")),r.a.createElement(J.a,null,r.a.createElement(W.a,{href:"https://github.com/Indivism/crowddit"},"GitHub")),e.cookie&&r.a.createElement(J.a,null,r.a.createElement(W.a,{onClick:function(){e.setPage("/settings")},style:{cursor:"pointer"}},"Settings")))),e.cookie&&r.a.createElement(K.a,{style:{paddingRight:"1rem"}},e.username),e.cookie&&r.a.createElement(b.a,{outline:!0,color:"secondary",onClick:function(){return e.logout()}},"Log Out"),!e.cookie&&r.a.createElement(b.a,{outline:!0,color:"secondary",onClick:function(){return e.login()}},"Log In")))},V=Object(o.c)((function(e,t){return{test:e.app.init_data,cookie:e.app.cookie,username:e.app.username,page:e.app.page}}),(function(e){return{login:function(){e({type:"TOGGLE_LOGIN"})},logout:function(){e((document.cookie="crowddit=; expires=Thu, 01 Jan 1970 00:00:01 GMT;",window.location="https://indivism.github.io/crowddit/#/",window.persistor.purge(),{type:"LOGOUT"}))},setPage:function(t){e((window.location=window.location.origin+window.location.pathname+"#/settings",{type:"DEFAULT"}))}}}))(X),z=Object(o.c)((function(e,t){return{showInitAlert:e.app.initAccountAlert}}),(function(e){return{}}))((function(e){return e.showInitAlert?r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row justify-content-center",style:{padding:"1rem"}},r.a.createElement("div",{className:"col-sm-10"},r.a.createElement(y.a,{className:"text-center",color:"info"},"To use Crowddit, you need to authenticate your Reddit account. Do so within the Crowddit ",r.a.createElement(u.b,{className:"alert-link",to:"/settings"},"account settings"),".")))):r.a.createElement("div",null)})),$=n(27),q=n(28),Q=n(29),Y=n(30),Z=n(50),ee=n(108),te=n(109),ne=n(110),ae=n(111),re=n(112),ce=function(e){var t=Object(Z.a)([parseInt(e.bannerBackgroundColor.substring(1,3),16),parseInt(e.bannerBackgroundColor.substring(3,5),16),parseInt(e.bannerBackgroundColor.substring(6),16)]),n="#FFFFFF";return(t>.179||isNaN(t))&&(n="#000000"),console.log("L",t),r.a.createElement("div",{style:{margin:"1rem"}},r.a.createElement(ee.a,{style:{height:"15rem",backgroundColor:e.bannerBackgroundColor,color:n}},r.a.createElement(te.a,null,r.a.createElement(ne.a,null,e.title),r.a.createElement(ae.a,null,e.subreddit),r.a.createElement(re.a,null,e.headerTitle),r.a.createElement(b.a,null,"Button"))))},oe=function(e){Object(Y.a)(n,e);var t=Object(Q.a)(n);function n(){return Object($.a)(this,n),t.apply(this,arguments)}return Object(q.a)(n,[{key:"render",value:function(){var e=this;return console.log("JSX:",this.props.jsx),this.props.loggedIn&&r.a.createElement("div",{className:"container"},r.a.createElement(b.a,{onClick:function(){return e.props.refreshCrowds()}},"Refresh"),r.a.createElement("div",{style:{paddingTop:"2rem",paddingBottom:"2rem"}},function(e){var t=e.map((function(e){return ce(e)}));return r.a.createElement("div",{className:"d-flex justify-content-around"},t)}(this.props.crowds||[])))}}]),n}(r.a.Component),se=Object(o.c)((function(e,t){return{loggedIn:e.app.cookie,crowds:e.app.crowds,subredditSet:e.app.subredditSet,jsx:e.app.crowdJSX}}),(function(){return{refreshCrowds:function(){var e=Object(m.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}))(oe);var ie=function(){return r.a.createElement("div",null,r.a.createElement(V,null),r.a.createElement(G,null),r.a.createElement(z,null),r.a.createElement(se,null))},ue=n(113),le=Object(o.c)((function(e,t){return{visible:e.app.showAuthAlert}}),(function(e){return{dismiss:function(){e({type:"DISMISS_AUTH_ALERT"})}}}))((function(e){return r.a.createElement("div",{className:"container-fluid"},window.location.toString().includes("success=insert")&&r.a.createElement("div",{className:"row  justify-content-center",style:{padding:"1rem"}},r.a.createElement("div",{className:"col-6"},r.a.createElement(y.a,{className:"text-center",color:"success",isOpen:e.visible,toggle:function(){return e.dismiss()}},"Successfully authenticated Reddit. At any time, you may revoke Crowddit's access within account settings."))),window.location.toString().includes("error=fail")&&r.a.createElement("div",{className:"row  justify-content-center",style:{padding:"1rem"}},r.a.createElement("div",{className:"col-6"},r.a.createElement(y.a,{className:"text-center",color:"danger",isOpen:e.visible,toggle:function(){return e.dismiss()}},"Hmm. Crowddit could not connect to Reddit. Try to join the Crowd again."))),window.location.toString().includes("error=conflict")&&r.a.createElement("div",{className:"row  justify-content-center",style:{padding:"1rem"}},r.a.createElement("div",{className:"col-6"},r.a.createElement(y.a,{className:"text-center",color:"warning",isOpen:e.visible,toggle:function(){return e.dismiss()}},"There appears to be an internal service error."))))})),de=n(18),pe=Object(o.c)((function(e,t){return{auth:e.app.auth}}),(function(e){return{revokeAuth:function(){var t=Object(m.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,R();case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}}))((function(e){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(de.a,{in:e.auth,tag:"h5",className:"mt-3"},r.a.createElement(b.a,{color:"secondary",onClick:function(){return e.revokeAuth()},style:{marginBottom:"1rem"}},"Revoke Crowddit Permissions"))))})),me=function(e){Object(Y.a)(n,e);var t=Object(Q.a)(n);function n(){return Object($.a)(this,n),t.apply(this,arguments)}return Object(q.a)(n,[{key:"componentDidUpdate",value:function(){this.props.onUpdate(),console.log("CHECK:",this.props)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(V,null),r.a.createElement(le,null),r.a.createElement("div",{className:"container-fluid",style:{padding:"3rem"}},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-6 justify-content-center"},!this.props.isAuthenticated&&r.a.createElement(ue.a,null,r.a.createElement("h1",{className:"display-5"},"Authenticate your Reddit"),r.a.createElement("p",{className:"lead"},"Crowddit uses Reddit's API to uncover other subreddits that you may be interested in."),r.a.createElement("hr",null),r.a.createElement("p",null,"Tokenized access ensures Crowddit will never ask for your password."),r.a.createElement("p",{className:"lead"},r.a.createElement(b.a,{color:"primary",onClick:function(){e.props.auth(e.props.crowddit)}},"Join the Crowdd"))),this.props.isAuthenticated&&r.a.createElement(pe,null)))))}}]),n}(r.a.Component),fe=Object(o.c)((function(e){return{crowddit:e.app.username,isAuthenticated:e.app.auth}}),(function(e){return{auth:function(){var t=Object(m.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,I(n);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),onUpdate:function(){var t=Object(m.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,C();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}}))(me),he=n(114),Ee=n(115),we=Object(o.c)((function(e,t){return{validUsername:e.app.validUsername,validPassword:e.app.validPassword,toggleUserAlert:e.app.createUserAlert,authenticated:e.app.cookie}}),(function(e){return{usernameBlur:function(){var t=Object(m.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,U(n);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),passwordBlur:function(){var t=Object(m.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,x(n);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),createUser:function(){var t=Object(m.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,L();case 3:t.t1=t.sent,(0,t.t0)(t.t1),e({type:"COOKIE"});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),createUserAlert:function(){var t=Object(m.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(T());case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}}))((function(e){return console.log("check me",e),r.a.createElement("div",null,e.authenticated&&r.a.createElement(l.a,{to:"/"}),r.a.createElement(V,null),r.a.createElement("div",{className:"container",style:{marginTop:"3rem"}},r.a.createElement(E.a,{onSubmit:function(){var t=Object(m.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,e.createUser();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},r.a.createElement(w.a,{onBlur:function(t){return e.usernameBlur(t.target.value.trim())}},r.a.createElement(g.a,{for:"exampleEmail"},"Username"),r.a.createElement(v.a,{id:"username-input",invalid:!1===e.validUsername&&""!==document.getElementById("username-input").value.trim(),valid:!0===e.validUsername}),e.validUsername&&r.a.createElement(he.a,{valid:!0},"Sweet! That username is available."),!1===e.validUsername&&r.a.createElement(he.a,{invalid:!0},"That username is invalid or already taken."),r.a.createElement(Ee.a,null,"Usernames can contain lowercase and uppercase letters and numbers.")),r.a.createElement(w.a,{onBlur:function(t){return e.passwordBlur(t.target.value.trim())}},r.a.createElement(g.a,{for:"examplePassword"},"Password"),r.a.createElement(v.a,{id:"password-input",invalid:!1===e.validPassword&&""!==document.getElementById("password-input").value.trim(),valid:!0===e.validPassword}),e.validPassword&&r.a.createElement(he.a,{valid:!0},"Great! This is a valid password."),!1===e.validPassword&&r.a.createElement(he.a,{invalid:!0},"Oh no! That password is invalid. Please try again. "),r.a.createElement(Ee.a,null,"Passwords must contain at least one numeric character and 1 capital letter.")),e.toggleUserAlert&&r.a.createElement(y.a,null,"Please input a username and password to sign in."),r.a.createElement(b.a,{id:"login-text-button",secondary:!0},r.a.createElement(u.b,{to:e.toggleUserAlert?"/createUser":"/",style:{color:"white"},onClick:function(){return e.createUserAlert()}},"SIGN UP")))))})),ge=function(){return r.a.createElement(u.a,null,r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/createUser"},r.a.createElement(we,null)),r.a.createElement(l.b,{exact:!0,path:"/settings"},r.a.createElement(fe,null)),r.a.createElement(l.b,{exact:!0,path:"/about"}),r.a.createElement(l.b,{path:"/"},r.a.createElement(ie,null))))},ve=n(24),be=n(16),ye=n(47),Oe=n(13),Ae=n(51),ke=n(52),je=n.n(ke),Se=n(38),Ue=n(11),xe={showLoginModal:!1,validUsername:null,cookie:document.cookie.includes("crowddit="),username:document.cookie.slice(document.cookie.indexOf("crowddit")+9),invalidLoginAttempt:!1,createUserAlert:!1,page:"/",initAccountAlert:!1,showAuthAlert:!0,auth:!1,crowds:void 0,subredditSet:[],crowdJSX:[]},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_LOGIN":return Object(Ue.a)({},e,{showLoginModal:!e.showLoginModal,invalidLoginAttempt:!1});case"USERNAME_BLUR":return Object(Ue.a)({},e,{validUsername:t.payload.status,createUserAlert:!1});case"PASSWORD_BLUR":return Object(Ue.a)({},e,{validPassword:t.payload.status,createUserAlert:!1});case"COOKIE":return Object(Ue.a)({},e,{cookie:document.cookie.includes("crowddit=")});case"CREATE_USER":return Object(Ue.a)({},e,{username:t.payload.username,showLoginModal:!1,initAccountAlert:!0});case"LOGOUT":return Object(Ue.a)({},xe);case"LOGIN":return Object(Ue.a)({},e,{showLoginModal:!1,username:t.payload.username,cookie:!0,invalidLoginAttempt:!1,initAccountAlert:!1,auth:!0});case"GET_ASSOCIATIONS":return Object(Ue.a)({},e,{showLoginModal:!1,username:t.payload.username,cookie:!0,invalidLoginAttempt:!1,initAccountAlert:!0,auth:!1});case"INVALID_LOGIN":return Object(Ue.a)({},e,{invalidLoginAttempt:!0});case"DISMISS_LOGIN_ALERT":return Object(Ue.a)({},e,{invalidLoginAttempt:!1});case"CREATE_USER_ALERT":return Object(Ue.a)({},e,{createUserAlert:!0});case"SET_PAGE":return Object(Ue.a)({},e,{page:t.payload});case"DISMISS_AUTH_ALERT":return Object(Ue.a)({},e,{showAuthAlert:!1});case"AUTH_SUCCESS":return Object(Ue.a)({},e,{auth:!0,initAccountAlert:!1});case"AUTH_FAIL":case"REVOKE_AUTH":return Object(Ue.a)({},e,{auth:!1});case"GET_CROWDS":return Object(Ue.a)({},e,{crowds:t.payload.subs,subredditSet:t.payload.subreddits});case"CROWDS_CARD_JSX":return Object(Ue.a)({},e,{crowdJSX:t.payload});default:return e}},Ne=function(e){return Object(be.c)({router:Object(ve.b)(e),app:Le})},Te=Object(Oe.a)(),Ie=[Object(ye.a)(Te),Ae.a,je.a],Ce=[be.a.apply(void 0,Ie)],Re={key:"root",storage:i.a,blacklist:["router"]},_e=Object(Se.a)(Re,Ne(Te)),Ge=Object(be.e)(_e,void 0,be.d.apply(void 0,Ce)),Be=Object(Se.b)(Ge),Pe={store:Ge,persistor:Be},De=Pe.store,Me=Pe.persistor;window.store=De,window.persistor=Me;var Fe=function(){return De};console.log(De,Me),Object(c.render)(r.a.createElement(o.a,{store:De},r.a.createElement(ve.a,{history:Te},r.a.createElement(ge,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.ba413fd5.chunk.js.map