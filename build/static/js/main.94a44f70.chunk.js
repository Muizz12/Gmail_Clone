(this["webpackJsonpgmail-clone"]=this["webpackJsonpgmail-clone"]||[]).push([[0],{109:function(e,c,s){},110:function(e,c,s){},111:function(e,c,s){},112:function(e,c,s){},114:function(e,c,s){},115:function(e,c,s){},116:function(e,c,s){},118:function(e,c,s){},119:function(e,c,s){"use strict";s.r(c);var t=s(0),a=s.n(t),i=s(30),n=s.n(i),j=(s(91),s(92),s(63)),l=s.n(j),r=s(64),o=s.n(r),d=s(134),b=s(158),O=s(51),m=s.n(O),x=(s(93),s(65)),u=s.n(x),h=s(66),p=s.n(h),_=s(11),v=s(38),f=Object(v.b)({name:"user",initialState:{user:null},reducers:{login:function(e,c){e.user=c.payload},logout:function(e){e.user=null}}}),g=f.actions,N=g.login,S=g.logout,y=function(e){return e.user.user},I=f.reducer,M=s(40),T=s.n(M),w=T.a.initializeApp({apiKey:"AIzaSyCBu3yBlyYFu0M9_0LdGJuEo_Z5ZWsYFY8",authDomain:"clone-afb9e.firebaseapp.com",projectId:"clone-afb9e",storageBucket:"clone-afb9e.appspot.com",messagingSenderId:"657120198273",appId:"1:657120198273:web:d94d4be7beda2c69c0d780",measurementId:"G-79Z3KDE8SM"}).firestore(),C=T.a.auth(),k=new T.a.auth.GoogleAuthProvider,L=s(1);var q=function(){var e=Object(_.c)(y),c=Object(_.b)();return Object(L.jsxs)("div",{className:"header",children:[Object(L.jsxs)("div",{className:"header__left",children:[Object(L.jsx)(d.a,{children:Object(L.jsx)(l.a,{})}),Object(L.jsx)("img",{src:"https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png",alt:""})]}),Object(L.jsxs)("div",{className:"header__middle",children:[Object(L.jsx)(o.a,{}),Object(L.jsx)("input",{type:"text",placeholder:"Search mail"}),Object(L.jsx)(m.a,{className:"header__inputCaret"})]}),Object(L.jsxs)("div",{className:"header__right",children:[Object(L.jsxs)(d.a,{children:[Object(L.jsx)(u.a,{}),Object(L.jsx)(p.a,{})]}),Object(L.jsx)(b.a,{onClick:function(){C.signOut().then((function(){c(S())}))},src:null===e||void 0===e?void 0:e.photoURL})]})]})},B=s(135),E=s(67),U=s.n(E),A=(s(109),s(68)),P=s.n(A),R=s(69),z=s.n(R),D=s(70),F=s.n(D),G=s(72),J=s.n(G),Y=s(71),Z=s.n(Y),K=s(73),W=s.n(K),H=s(74),V=s.n(H),Q=s(75),X=s.n(Q),$=s(76),ee=s.n($),ce=s(77),se=s.n(ce);s(110);var te=function(e){var c=e.Icon,s=e.Title,t=e.number,a=e.selected;return Object(L.jsxs)("div",{className:"sidebaroptions ".concat(a&&"sidebaroption__active"),children:[Object(L.jsx)(c,{}),Object(L.jsx)("h3",{children:s}),Object(L.jsx)("p",{children:t})]})},ae=Object(v.b)({name:"mail",initialState:{selectedMail:null,sendMessageisOpen:!1},reducers:{selectmail:function(e,c){e.selectedMail=c.payload},openSendMessage:function(e){e.sendMessageisOpen=!0},closeSendMessage:function(e){e.sendMessageisOpen=!1}}}),ie=ae.actions,ne=ie.selectmail,je=ie.openSendMessage,le=ie.closeSendMessage,re=function(e){return e.mail.selectedMail},oe=function(e){return e.mail.sendMessageisOpen},de=ae.reducer;var be=function(){var e=Object(_.b)();return Object(L.jsxs)("div",{className:"sidebar",children:[Object(L.jsx)(B.a,{onClick:function(){return e(je())},startIcon:Object(L.jsx)(U.a,{fontSize:"Large"}),className:"sidebar__compose",children:"Compose"}),Object(L.jsx)(te,{Icon:P.a,Title:"Inbox",number:100,selected:!0}),Object(L.jsx)(te,{Icon:z.a,Title:"Starred",number:100}),Object(L.jsx)(te,{Icon:F.a,Title:"Snoozed",number:100}),Object(L.jsx)(te,{Icon:Z.a,Title:"Important",number:100}),Object(L.jsx)(te,{Icon:J.a,Title:"Sent",number:100}),Object(L.jsx)(te,{Icon:W.a,Title:"Draft",number:100}),Object(L.jsx)(te,{Icon:V.a,Title:"More",number:100}),Object(L.jsx)("div",{className:"sidebar__footer",children:Object(L.jsxs)("div",{className:"sidebar__footerIcons",children:[Object(L.jsx)(d.a,{children:Object(L.jsx)(X.a,{})}),Object(L.jsx)(d.a,{children:Object(L.jsx)(ee.a,{})}),Object(L.jsx)(d.a,{children:Object(L.jsx)(se.a,{})})]})})]})},Oe=s(81),me=s(6);s(111);var xe=function(){var e=Object(_.b)();return Object(L.jsx)("div",{className:"login",children:Object(L.jsxs)("div",{className:"login__container",children:[Object(L.jsx)("img",{src:"https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-3-1.png"}),Object(L.jsx)(B.a,{variant:"contained",color:"primary",onClick:function(){C.signInWithPopup(k).then((function(c){var s=c.user;e(N({displayname:s.displayName,email:s.email,photoURL:s.photoURL}))})).catch((function(e){alert(e)}))},children:"Login"}),"            "]})})},ue=s(136),he=s(137),pe=s(138),_e=s(139),ve=s(140),fe=s(141),ge=s(142),Ne=s(143),Se=s(144),ye=s(145),Ie=s(146),Me=s(147);s(112);var Te=function(){var e=Object(me.f)(),c=Object(_.c)(re);return Object(L.jsxs)("div",{className:"mail",children:[Object(L.jsxs)("div",{className:"mails__tool",children:[Object(L.jsxs)("div",{className:"mails__toolleft",children:[Object(L.jsx)(d.a,{onClick:function(){e.push("/")},children:Object(L.jsx)(ue.a,{})}),Object(L.jsx)(d.a,{children:Object(L.jsx)(he.a,{})}),Object(L.jsx)(d.a,{children:Object(L.jsx)(pe.a,{})}),Object(L.jsx)(d.a,{children:Object(L.jsx)(_e.a,{})}),Object(L.jsx)(d.a,{children:Object(L.jsx)(ve.a,{})}),Object(L.jsx)(d.a,{children:Object(L.jsx)(fe.a,{})}),Object(L.jsx)(d.a,{children:Object(L.jsx)(ge.a,{})}),Object(L.jsx)(d.a,{children:Object(L.jsx)(Ne.a,{})}),Object(L.jsx)(d.a,{children:Object(L.jsx)(Se.a,{})})]}),Object(L.jsxs)("div",{className:"mails__toolright",children:[Object(L.jsx)(d.a,{children:Object(L.jsx)(ye.a,{})}),Object(L.jsx)(d.a,{children:Object(L.jsx)(Ie.a,{})}),Object(L.jsx)(d.a,{children:Object(L.jsx)(Me.a,{})})]})]}),Object(L.jsxs)("div",{className:"mails__body",children:[Object(L.jsxs)("div",{className:"mails__bodyHeader",children:[Object(L.jsx)("h2",{children:null===c||void 0===c?void 0:c.subjet}),Object(L.jsx)(Ne.a,{className:"mails__important"}),Object(L.jsx)("p",{children:null===c||void 0===c?void 0:c.title}),Object(L.jsx)("p",{className:"mails__time",children:null===c||void 0===c?void 0:c.time})]}),Object(L.jsx)("div",{className:"mail__message",children:Object(L.jsx)("p",{children:null===c||void 0===c?void 0:c.description})})]})]})},we=s(29),Ce=s(157),ke=s(150),Le=s(151),qe=s(152),Be=s(153),Ee=s(154),Ue=s(155),Ae=s(80),Pe=s.n(Ae),Re=s(79),ze=s.n(Re),De=(s(114),s(115),s(148)),Fe=s(149);var Ge=function(e){var c=e.id,s=e.title,t=e.subjet,a=e.description,i=e.time,n=Object(me.f)(),j=Object(_.b)();return Object(L.jsxs)("div",{onClick:function(){j(ne({id:c,title:s,subjet:t,description:a,time:i})),n.push("/mail")},className:"emailrow",children:[Object(L.jsxs)("div",{className:"emailrow__options",children:[Object(L.jsx)(Ce.a,{}),Object(L.jsx)(d.a,{children:Object(L.jsx)(De.a,{})}),Object(L.jsx)(d.a,{children:Object(L.jsx)(Fe.a,{})})]}),Object(L.jsx)("div",{className:"emailrow__title",children:Object(L.jsx)("h3",{children:s})}),Object(L.jsx)("div",{className:"emailrow__message",children:Object(L.jsxs)("h4",{children:[t," "," ",Object(L.jsx)("span",{className:"emailrpw__description",children:a})]})}),Object(L.jsx)("p",{className:"emailrpw__time",children:i})]})};s(116);var Je=function(e){var c=e.Icon,s=e.title,t=e.color,a=e.selected;return Object(L.jsxs)("div",{className:"section ".concat(a&&"sections__selected"),style:{borderBottom:"3px solid ".concat(t),color:"".concat(a&&t)},children:[c,Object(L.jsx)("h4",{children:s})]})};var Ye=function(){var e=Object(t.useState)([]),c=Object(we.a)(e,2),s=c[0],a=c[1];return Object(t.useEffect)((function(){w.collection("emails").orderBy("timestamp","desc").onSnapshot((function(e){return a(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(L.jsxs)("div",{className:"emaillist",children:[Object(L.jsxs)("div",{className:"emaillist__settings",children:[Object(L.jsxs)("div",{className:"emaillist__settingsleft",children:[Object(L.jsx)(Ce.a,{}),Object(L.jsx)(d.a,{children:Object(L.jsx)(m.a,{})}),Object(L.jsx)(d.a,{children:Object(L.jsx)(ke.a,{})}),Object(L.jsx)(d.a,{children:Object(L.jsx)(Se.a,{})})]}),Object(L.jsxs)("div",{className:"emaillist__settingsright",children:[Object(L.jsx)(d.a,{children:Object(L.jsx)(Le.a,{})}),Object(L.jsx)(d.a,{children:Object(L.jsx)(qe.a,{})}),Object(L.jsx)(d.a,{children:Object(L.jsx)(Be.a,{})}),Object(L.jsx)(d.a,{children:Object(L.jsx)(Ee.a,{})})]})]}),Object(L.jsxs)("div",{className:"emaillist__sections",children:[Object(L.jsx)(Je,{Icon:Object(L.jsx)(Ue.a,{}),title:"Primary",color:"red",selected:!0}),Object(L.jsx)(Je,{Icon:Object(L.jsx)(ze.a,{}),title:"People",color:"#1A73E8"}),Object(L.jsx)(Je,{Icon:Object(L.jsx)(Pe.a,{}),title:"Promotions",color:"green"})]}),Object(L.jsx)("div",{className:"emaillist__list",children:s.map((function(e){var c=e.id,s=e.data,t=s.to,a=s.subject,i=s.timestamp,n=s.message;return Object(L.jsx)(Ge,{id:c,title:t,subjet:a,time:new Date(1e3*(null===i||void 0===i?void 0:i.seconds)).toUTCString(),description:n},c)}))})]})},Ze=s(53),Ke=s(156),We=s(82);s(118);var He=function(){var e=Object(_.b)(),c=Object(We.a)(),s=c.register,t=c.handleSubmit,a=(c.watch,c.formState.errors);return Object(L.jsxs)("div",{className:"sendmail",children:[Object(L.jsxs)("div",{className:"sendmail__header",children:[Object(L.jsx)("h3",{children:"New Message"}),Object(L.jsx)(Ke.a,{className:"sendmail__close",onClick:function(){return e(le())}})]}),Object(L.jsxs)("form",{onSubmit:t((function(c){console.log(c),w.collection("emails").add({to:c.To,subject:c.Subject,message:c.Message,timestamp:T.a.firestore.FieldValue.serverTimestamp()}),e(le())})),children:[Object(L.jsx)("input",Object(Ze.a)({placeholder:"To",type:"email"},s("To",{required:!0}))),a.To&&Object(L.jsx)("p",{className:"sendMail_error",children:"To is required !"}),Object(L.jsx)("input",Object(Ze.a)({placeholder:"Subject",type:"text"},s("Subject",{required:!0}))),a.Subject&&Object(L.jsx)("p",{className:"sendMail_error",children:"To is required !"}),Object(L.jsx)("input",Object(Ze.a)({placeholder:"Message",ype:"text",className:"sendmail__message"},s("Message",{required:!0}))),a.Message&&Object(L.jsx)("p",{className:"sendMail_error",children:"To is required !"}),Object(L.jsx)("div",{className:"sendmail__options",children:Object(L.jsx)(B.a,{className:"sendmail__send",varient:"contained",color:"primary",type:"submit",children:"Send"})})]})]})};var Ve=function(){var e=Object(_.c)(oe),c=Object(_.c)(y),s=Object(_.b)();return Object(t.useEffect)((function(){C.onAuthStateChanged((function(e){e&&s(N({displayname:e.displayName,email:e.email,photoURL:e.photoURL}))}))}),[]),Object(L.jsx)(Oe.a,{children:c?Object(L.jsxs)("div",{className:"app",children:[Object(L.jsx)(q,{}),Object(L.jsxs)("div",{className:"app__body",children:[Object(L.jsx)(be,{}),Object(L.jsxs)(me.c,{children:[Object(L.jsx)(me.a,{path:"/mail",children:Object(L.jsx)(Te,{})}),Object(L.jsx)(me.a,{path:"/",children:Object(L.jsx)(Ye,{})})]})]}),e&&Object(L.jsx)(He,{})]}):Object(L.jsx)(xe,{})})},Qe=Object(v.a)({reducer:{mail:de,user:I}});n.a.render(Object(L.jsx)(a.a.StrictMode,{children:Object(L.jsx)(_.a,{store:Qe,children:Object(L.jsx)(Ve,{})})}),document.getElementById("root"))},91:function(e,c,s){},92:function(e,c,s){},93:function(e,c,s){}},[[119,1,2]]]);
//# sourceMappingURL=main.94a44f70.chunk.js.map