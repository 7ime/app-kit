(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{350:function(e,a,r){e.exports={authRegistration:"authRegistration__8Tgvf",description:"description__2vr9h",form:"form__1eDNd",submit:"submit__2XoNb",alert:"alert__3ISfv",alertContent:"alertContent__2o9Zi",alertMessage:"alertMessage__Jg900",alertIcon:"alertIcon__1EFaC",info:"info__2Xmyp",success:"success__34YHo"}},423:function(e,a,r){"use strict";r.r(a);var t=r(0),n=r(43),l=r(156),s=r(112),o=r(130),i=r(180),u=r(179),c=r(113),d=r.n(c),m=r(350),p=r.n(m),f=r(148),v=r(149),E=r(150),b=r(151),w=r(121),g=r(152),h=r(153),_=r(126),y=r(129),C=function(){return(C=Object.assign||function(e){for(var a,r=1,t=arguments.length;r<t;r++)for(var n in a=arguments[r])Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);return e}).apply(this,arguments)},N=function(e,a){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var t,n,l=r.call(e),s=[];try{for(;(void 0===a||a-- >0)&&!(t=l.next()).done;)s.push(t.value)}catch(e){n={error:e}}finally{try{t&&!t.done&&(r=l.return)&&r.call(l)}finally{if(n)throw n.error}}return s},O=function(){var e,a,r,n,l,c,m=Object(s.a)("auth").t,O=m("auth:registration.form",{returnObjects:!0}),S=O.fields,j=O.submit,M=N(t.useState(!0),2),V=M[0],q=M[1],R=N(t.useState(!1),2),I=R[0],k=R[1],J=u.b().shape({email:u.d().required(null===(e=S.email.errors)||void 0===e?void 0:e.required).email(null===(a=S.email.errors)||void 0===a?void 0:a.email),password:u.d().required(null===(r=S.password.errors)||void 0===r?void 0:r.required).min(8,null===(n=S.password.errors)||void 0===n?void 0:n.min),password2:u.d().required(null===(l=S.password2.errors)||void 0===l?void 0:l.required).oneOf([u.c("password")],null===(c=S.password2.errors)||void 0===c?void 0:c.confirm)}),T=Object(o.e)({resolver:Object(i.a)(J)}),x=T.handleSubmit,F=T.control,X=T.setValue,D=T.formState,H=D.errors,P=D.isSubmitted,Y=t.useCallback((function(e){console.log(e),k(!0)}),[]);return t.createElement("div",{className:p.a.authRegistration},t.createElement(f.a,null,t.createElement(v.a,null,m("auth:registration.title")),t.createElement(E.a,{parentClass:p.a.description},m("auth:registration.description")),V&&t.createElement(y.a,{onClose:function(){return q(!1)},parentClass:p.a.alert},t.createElement("div",{className:p.a.alertContent},t.createElement("div",{className:d()(p.a.alertIcon,p.a.info)}),t.createElement("div",{className:p.a.alertMessage},m("auth:registration.alert.info")))),I&&t.createElement(y.a,{type:"success",onClose:function(){return k(!1)},parentClass:p.a.alert},t.createElement("div",{className:p.a.alertContent},t.createElement("div",{className:d()(p.a.alertIcon,p.a.success)}),t.createElement("div",{className:p.a.alertMessage},m("auth:registration.alert.success")))),t.createElement(b.a,{onSubmit:x(Y),parentClass:p.a.form},t.createElement(h.a,null,t.createElement(o.a,{name:S.email.name,control:F,defaultValue:"",render:function(e){var a,r=e.field;return t.createElement(_.a,C({},r,{label:S.email.label,error:!!H.email,errorMessage:null===(a=H.email)||void 0===a?void 0:a.message,onReset:function(){return X("email","",{shouldValidate:P})}}))}})),t.createElement(h.a,null,t.createElement(o.a,{name:S.password.name,control:F,defaultValue:"",render:function(e){var a,r=e.field;return t.createElement(_.a,C({},r,{type:"password",label:S.password.label,error:!!H.password,errorMessage:null===(a=H.password)||void 0===a?void 0:a.message,onReset:function(){return X("password","",{shouldValidate:P})}}))}})),t.createElement(h.a,null,t.createElement(o.a,{name:S.password2.name,control:F,defaultValue:"",render:function(e){var a,r=e.field;return t.createElement(_.a,C({},r,{type:"password",label:S.password2.label,error:!!H.password2,errorMessage:null===(a=H.password2)||void 0===a?void 0:a.message,onReset:function(){return X("password2","",{shouldValidate:P})}}))}})),t.createElement(g.a,{parentClass:p.a.submit},t.createElement(w.a,{type:"primary",htmlType:"submit",fill:"solid"},j)))))};a.default=function(){var e=Object(s.a)("auth").t;return t.createElement(t.Fragment,null,t.createElement(n.a,null,t.createElement("title",null,e("auth:registration.pageTitle"))),t.createElement(l.a,null,t.createElement(O,null)))}}}]);