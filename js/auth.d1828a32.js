(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["auth"],{"0fdf":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("user-forgot")},r=[],n=s("bee2"),i=s("d4ec"),o=s("262e"),l=s("2caf"),c=s("9ab4"),u=s("60a3"),d=s("8336"),f=s("a523"),p=s("0e8f"),m=s("4bd4"),h=s("a722"),w=s("2677"),g=(s("498a"),function(){var t=this,e=t._self._c;return e(f["a"],{attrs:{"grid-list-sm":"","fill-height":""}},[e(h["a"],{directives:[{name:"show",rawName:"v-show",value:!t.sent,expression:"!sent"}],attrs:{"align-center":"",row:"",wrap:""}},[e(p["a"],{attrs:{xs12:"",sm8:"","offset-xs0":"","offset-sm2":""}},[e("p",{staticClass:"text-xs-center headline font-weight-medium"},[e("span",[t._v(t._s(t.$t("ResetLink")))])]),e(m["a"],{on:{submit:function(e){return e.preventDefault(),t.forgot()}}},[e(w["a"],{attrs:{name:"login",type:"text",label:t.$t("Username"),"prepend-inner-icon":"alternate_email",outline:""},model:{value:t.email,callback:function(e){t.email="string"===typeof e?e.trim():e},expression:"email"}}),e(d["a"],{attrs:{loading:t.isSending,disabled:t.isSending,block:"",color:"primary",type:"submit"}},[t._v(" "+t._s(t.$t("Send"))+" ")])],1),e("div",{staticClass:"text-xs-center"},[e("span",{staticClass:"body-2"},[t._v(" "+t._s(t.$t("AlreadyHaveAccount"))+" ")]),e(d["a"],{attrs:{flat:"",color:"primary",to:"/login"}},[t._v(" "+t._s(t.$t("SignIn"))+" ")])],1)],1),e(p["a"],{attrs:{xs12:"",sm8:"","offset-xs0":"","offset-sm2":""}})],1),e(h["a"],{directives:[{name:"show",rawName:"v-show",value:t.sent,expression:"sent"}],attrs:{"align-center":"",row:"",wrap:""}},[e(p["a"],{attrs:{xs12:"",sm8:"","offset-xs0":"","offset-sm2":""}},[e("p",{staticClass:"text-xs-center headline font-weight-medium"},[e("span",[t._v(t._s(t.$t("CheckEmail")))])]),e(m["a"],[e(w["a"],{attrs:{name:"login",type:"text",label:t.$t("Username"),"prepend-inner-icon":"alternate_email",outline:"",readonly:""},model:{value:t.email,callback:function(e){t.email="string"===typeof e?e.trim():e},expression:"email"}}),e(d["a"],{attrs:{block:"",color:"primary",to:"/login"}},[t._v(" "+t._s(t.$t("ReturnSignIn"))+" ")])],1),e("div",{staticClass:"text-xs-center"},[e("span",{staticClass:"body-2"},[t._v(" "+t._s(t.$t("AlreadyHaveAccount"))+" ")]),e(d["a"],{attrs:{flat:"",color:"primary",to:"/login"}},[t._v(" "+t._s(t.$t("SignIn"))+" ")])],1)],1),e(p["a"],{attrs:{xs12:"",sm8:"","offset-xs0":"","offset-sm2":""}})],1)],1)}),v=[],b={props:[],data:function(){return{email:null,message:null,sent:!1}},computed:{isSending:function(){return this.$store.state.auth.isSending}},methods:{forgot:function(){var t=this;this.$store.dispatch("auth/forgot",this.email).then((function(){t.$store.dispatch("notifications/success",i18n.t("ResetEmailSent"),{root:!0}),t.sent=!0}))}}},x=b,_=s("2877"),$=Object(_["a"])(x,g,v,!1,null,null,null),y=$.exports,P=function(t){Object(o["a"])(s,t);var e=Object(l["a"])(s);function s(){return Object(i["a"])(this,s),e.apply(this,arguments)}return Object(n["a"])(s)}(u["c"]);P=Object(c["a"])([Object(u["a"])({components:{UserForgot:y}})],P);var O=P,j=O,C=Object(_["a"])(j,a,r,!1,null,null,null);e["default"]=C.exports},"34c3":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("user-signup")},r=[],n=s("bee2"),i=s("d4ec"),o=s("262e"),l=s("2caf"),c=s("9ab4"),u=s("60a3"),d=s("8336"),f=s("a523"),p=s("0e8f"),m=s("4bd4"),h=s("a722"),w=s("2677"),g=(s("b0c0"),s("498a"),function(){var t=this,e=t._self._c;return e(f["a"],{attrs:{"grid-list-sm":"","fill-height":""}},[e(h["a"],{attrs:{"align-center":"",row:"",wrap:""}},[e(p["a"],{attrs:{xs12:"",sm8:"","offset-xs0":"","offset-sm2":""}},[e("p",{staticClass:"text-xs-center headline font-weight-medium"},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.signupEnabled,expression:"signupEnabled"}]},[t._v(" "+t._s(t.$t("CreateAlertaAccount"))+" ")]),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.signupEnabled,expression:"!signupEnabled"}]},[t._v(" "+t._s(t.$t("SignUpNotAvailable"))+" ")])]),e(m["a"],{ref:"form"},[e(w["a"],{attrs:{name:"name",type:"text",label:t.$t("FullName"),disabled:!t.signupEnabled,outline:"",rules:[t.rules.required],required:""},model:{value:t.name,callback:function(e){t.name="string"===typeof e?e.trim():e},expression:"name"}}),e(w["a"],{attrs:{name:"login",type:"text",label:t.$t("Username"),"prepend-inner-icon":"alternate_email",disabled:!t.signupEnabled,outline:"",rules:[t.rules.required],required:""},model:{value:t.email,callback:function(e){t.email="string"===typeof e?e.trim():e},expression:"email"}}),e(w["a"],{attrs:{name:"password",type:t.showPassword?"text":"password",label:t.$t("Password"),"append-icon":t.showPassword?"visibility_off":"visibility",disabled:!t.signupEnabled,outline:"",rules:[t.rules.min],required:""},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),e(w["a"],{attrs:{name:"confirm-password","append-icon":t.showPassword?"visibility_off":"visibility",type:t.showPassword?"text":"password",label:t.$t("ConfirmPassword"),disabled:!t.signupEnabled,outline:"",rules:[t.rules.passwordMatch],required:""},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}}),e(w["a"],{attrs:{name:"text",type:"text",label:t.$t("Description"),disabled:!t.signupEnabled,outline:""},model:{value:t.text,callback:function(e){t.text="string"===typeof e?e.trim():e},expression:"text"}}),e(d["a"],{attrs:{loading:t.isSending,disabled:!t.signupEnabled||t.isSending,block:"",color:"primary"},on:{click:t.validate}},[t._v(" "+t._s(t.$t("SignUp"))+" ")])],1),e("div",{staticClass:"text-xs-center"},[e("span",{staticClass:"body-2"},[t._v(" "+t._s(t.$t("AlreadyHaveAccount"))+" ")]),e(d["a"],{attrs:{flat:"",color:"primary",to:"/login"}},[t._v(" "+t._s(t.$t("SignIn"))+" ")])],1)],1),e(p["a"],{attrs:{xs12:"",sm8:"","offset-xs0":"","offset-sm2":""}})],1)],1)}),v=[],b=(s("14d9"),s("fe0b")),x={props:[],data:function(t){return{name:null,email:null,password:"",confirmPassword:"",showPassword:!1,text:null,rules:{required:function(t){return!!t||b["a"].t("Required")},min:function(t){return t&&t.length>=6||b["a"].t("Min6Char")},passwordMatch:function(e){return e&&e==t.password||b["a"].t("PasswordNotMatch")}}}},computed:{isSending:function(){return this.$store.state.auth.isSending},signupEnabled:function(){return this.$store.getters.getConfig("signup_enabled")},emailVerification:function(){return this.$store.getters.getConfig("email_verification")}},methods:{validate:function(){this.$refs.form.validate()&&(this.$refs.form.resetValidation(),this.signup())},signup:function(){var t=this,e={name:this.name,email:this.email,password:this.password,text:this.text};this.$store.dispatch("auth/signup",e).then((function(){return t.$router.push({path:t.$route.query.redirect||"/"})})).catch((function(e){403===e.response.status&&t.emailVerification&&t.$router.push({name:"login"})}))}}},_=x,$=s("2877"),y=Object($["a"])(_,g,v,!1,null,null,null),P=y.exports,O=function(t){Object(o["a"])(s,t);var e=Object(l["a"])(s);function s(){return Object(i["a"])(this,s),e.apply(this,arguments)}return Object(n["a"])(s)}(u["c"]);O=Object(c["a"])([Object(u["a"])({components:{UserSignup:P}})],O);var j=O,C=j,k=Object($["a"])(C,a,r,!1,null,null,null);e["default"]=k.exports},"3fef":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("user-reset")},r=[],n=s("bee2"),i=s("d4ec"),o=s("262e"),l=s("2caf"),c=s("9ab4"),u=s("60a3"),d=s("8336"),f=s("a523"),p=s("0e8f"),m=s("4bd4"),h=s("a722"),w=s("2677"),g=function(){var t=this,e=t._self._c;return e(f["a"],{attrs:{"grid-list-sm":"","fill-height":""}},[e(h["a"],{attrs:{"align-center":"",row:"",wrap:""}},[e(p["a"],{attrs:{xs12:"",sm8:"","offset-xs0":"","offset-sm2":""}},[e("p",{staticClass:"text-xs-center headline font-weight-medium"},[e("span",[t._v(t._s(t.$t("ChooseNewPassword")))])]),e(m["a"],{on:{submit:function(e){return e.preventDefault(),t.reset()}}},[e(w["a"],{attrs:{name:"password",type:t.showPassword?"text":"password",label:t.$t("Password"),"append-icon":t.showPassword?"visibility_off":"visibility",outline:""},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),e(w["a"],{attrs:{name:"confirm-password",type:t.showPassword?"text":"password",label:t.$t("ConfirmPassword"),"append-icon":t.showPassword?"visibility_off":"visibility",outline:""},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}}),e(d["a"],{attrs:{block:"",color:"primary",type:"submit"}},[t._v(" "+t._s(t.$t("ResetPassword"))+" ")])],1),e("div",{staticClass:"text-xs-center"},[e("span",{staticClass:"body-2"},[t._v(" "+t._s(t.$t("AlreadyHaveAccount"))+" ")]),e(d["a"],{attrs:{flat:"",color:"primary",to:"/login"}},[t._v(" "+t._s(t.$t("SignIn"))+" ")])],1)],1),e(p["a"],{attrs:{xs12:"",sm8:"","offset-xs0":"","offset-sm2":""}})],1)],1)},v=[],b={props:[],data:function(){return{password:null,confirmPassword:null,showPassword:!1}},methods:{reset:function(){this.$store.dispatch("auth/reset",[this.$route.params.token,this.password]).then((function(){}))}}},x=b,_=s("2877"),$=Object(_["a"])(x,g,v,!1,null,null,null),y=$.exports,P=function(t){Object(o["a"])(s,t);var e=Object(l["a"])(s);function s(){return Object(i["a"])(this,s),e.apply(this,arguments)}return Object(n["a"])(s)}(u["c"]);P=Object(c["a"])([Object(u["a"])({components:{UserReset:y}})],P);var O=P,j=O,C=Object(_["a"])(j,a,r,!1,null,null,null);e["default"]=C.exports},a55b:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("user-login")},r=[],n=s("bee2"),i=s("d4ec"),o=s("262e"),l=s("2caf"),c=s("9ab4"),u=s("60a3"),d=s("8336"),f=s("a523"),p=s("0e8f"),m=s("4bd4"),h=s("a722"),w=s("2677"),g=(s("498a"),function(){var t=this,e=t._self._c;return e(f["a"],{attrs:{"grid-list-sm":"","fill-height":""}},[e(h["a"],{attrs:{"align-center":"",row:"",wrap:""}},[t.isBasicAuth?e(p["a"],{attrs:{xs12:"",sm8:"","offset-xs0":"","offset-sm2":""}},[e("p",{staticClass:"text-xs-center headline font-weight-medium"},[t._v(" "+t._s(t.$t("LoginToContinue"))+" ")]),e(m["a"],{on:{submit:function(e){return e.preventDefault(),t.login()}}},[e(w["a"],{attrs:{name:"login",type:"text",label:t.$t("Username"),"prepend-inner-icon":"alternate_email",outline:""},model:{value:t.username,callback:function(e){t.username="string"===typeof e?e.trim():e},expression:"username"}}),e(w["a"],{attrs:{name:"password",type:t.showPassword?"text":"password",label:t.$t("Password"),"append-icon":t.showPassword?"visibility_off":"visibility",outline:""},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),e(d["a"],{attrs:{block:"",color:"primary",type:"submit"}},[t._v(" "+t._s(t.$t("LogIn"))+" ")])],1),e("div",{staticClass:"text-xs-center"},[e(d["a"],{attrs:{flat:"",color:"primary",to:"/signup",disabled:!t.signupEnabled}},[t._v(" "+t._s(t.$t("CreateAccount"))+" ")]),e(d["a"],{attrs:{flat:"",color:"primary",to:"/forgot"}},[t._v(" "+t._s(t.$t("ForgotPassword"))+" ")])],1)],1):"saml2"==t.$config.provider?e(p["a"],{attrs:{xs12:"",sm8:"","offset-xs0":"","offset-sm2":""}},[e("div",[e("p",{staticClass:"text-xs-center headline font-weight-medium"},[t._v(" SAML2 Authentication uses pop-up windows. ")]),e("p",{staticClass:"text-xs-center subheading font-weight-medium"},[t._v(" Please allow pop-ups from "),e("kbd",[t._v(t._s(t.host))])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.message&&!t.error,expression:"message && !error"}]},[e("p",{staticClass:"text-xs-center headline font-weight-medium"},[t._v(" "+t._s(t.message)+" ")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}]},[e("p",{staticClass:"text-xs-center headline font-weight-medium"},[t._v(" "+t._s(t.$t("UnspecifiedProblem"))+" "),e("a",{attrs:{href:"#"},on:{click:t.authenticateUsingSAML}},[t._v(" "+t._s(t.$t("TryAgain"))+" ")])]),e("p",{staticClass:"text-xs-center subheading font-weight-medium"},[t._v(" "+t._s(t.$t("Error"))+": "+t._s(t.error)+" ")])])]):e(p["a"],{attrs:{xs12:"",sm8:"","offset-xs0":"","offset-sm2":""}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.message&&!t.error,expression:"message && !error"}]},[e("p",{staticClass:"text-xs-center headline font-weight-medium"},[t._v(" "+t._s(t.message)+" ")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}]},[e("p",{staticClass:"text-xs-center headline font-weight-medium"},[t._v(" "+t._s(t.$t("UnspecifiedProblem"))+" "),e("a",{attrs:{href:"#"},on:{click:t.authenticate}},[t._v(" "+t._s(t.$t("TryAgain"))+" ")])]),e("p",{staticClass:"text-xs-center subheading font-weight-medium"},[t._v(" "+t._s(t.$t("Error"))+": "+t._s(t.error)+" ")])])]),e(p["a"],{attrs:{xs12:"",sm8:"","offset-xs0":"","offset-sm2":""}})],1)],1)}),v=[],b=(s("b0c0"),s("14d9"),s("e9c4"),s("fe0b")),x={props:[],data:function(){return{host:window.location.origin,username:null,password:null,showPassword:!1,message:null,error:null}},computed:{isBasicAuth:function(){return"basic"==this.$config.provider||"ldap"==this.$config.provider},authProvider:function(){var t=this.$store.getters["auth/getOptions"]["providers"];return t[this.$config.provider]?t[this.$config.provider].name:null},signupEnabled:function(){return this.$store.getters.getConfig("signup_enabled")}},created:function(){"saml2"==this.$config.provider?this.authenticateUsingSAML():this.authProvider&&this.authenticate()},methods:{login:function(){var t=this,e={username:this.username,password:this.password};this.$store.dispatch("auth/login",e).then((function(){return t.$router.push({path:t.$route.query.redirect||"/"})})).catch((function(e){return t.error=e.response.data.message}))},authenticate:function(){var t=this;this.authProvider?(this.message="Authenticating with ".concat(this.authProvider," ..."),this.$store.dispatch("auth/authenticate",this.$config.provider).then((function(){return t.$router.push({path:t.$route.query.redirect||"/"})})).catch((function(e){return t.error=e.response.data.message}))):(this.message=b["a"].t("AuthNotPossible"),this.error="Unknown authentication provider (".concat(this.$config.provider,")"))},authenticateUsingSAML:function(){var t,e=this;window.addEventListener("message",(function(s){s.source===t&&(s.data&&s.data.status&&"ok"===s.data.status&&s.data.token?e.$store.dispatch("auth/setToken",s.data).then((function(){return e.$router.push({path:e.$route.query.redirect||"/"})})).catch((function(t){return e.error=t.response.data.message})):(e.message=b["a"].t("AuthNotPossible"),e.error=s.data.message?s.data.message:JSON.stringify(s)))})),t=window.open(this.$config.endpoint+"/auth/saml",b["a"].t("AuthInProgress"))}}},_=x,$=s("2877"),y=Object($["a"])(_,g,v,!1,null,null,null),P=y.exports,O=function(t){Object(o["a"])(s,t);var e=Object(l["a"])(s);function s(){return Object(i["a"])(this,s),e.apply(this,arguments)}return Object(n["a"])(s)}(u["c"]);O=Object(c["a"])([Object(u["a"])({components:{UserLogin:P}})],O);var j=O,C=j,k=Object($["a"])(C,a,r,!1,null,null,null);e["default"]=k.exports},c100:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("user-logout")},r=[],n=s("bee2"),i=s("d4ec"),o=s("262e"),l=s("2caf"),c=s("9ab4"),u=s("60a3"),d=s("a523"),f=s("0e8f"),p=s("a722"),m=function(){var t=this,e=t._self._c;return e(d["a"],{attrs:{"grid-list-sm":"","fill-height":""}},[e(p["a"],{attrs:{"align-center":"",row:"",wrap:""}},[e(f["a"],{attrs:{xs12:"",sm8:"","offset-xs0":"","offset-sm2":""}},[e("p",{staticClass:"text-xs-center headline font-weight-medium"},[t._v(" "+t._s(t.$t("LoggedOut"))+" ")])]),e(f["a"],{attrs:{xs12:"",sm8:"","offset-xs0":"","offset-sm2":""}})],1)],1)},h=[],w={},g=w,v=s("2877"),b=Object(v["a"])(g,m,h,!1,null,null,null),x=b.exports,_=function(t){Object(o["a"])(s,t);var e=Object(l["a"])(s);function s(){return Object(i["a"])(this,s),e.apply(this,arguments)}return Object(n["a"])(s)}(u["c"]);_=Object(c["a"])([Object(u["a"])({components:{UserLogout:x}})],_);var $=_,y=$,P=Object(v["a"])(y,a,r,!1,null,null,null);e["default"]=P.exports},e116:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("user-confirm")},r=[],n=s("bee2"),i=s("d4ec"),o=s("262e"),l=s("2caf"),c=s("9ab4"),u=s("60a3"),d=s("a523"),f=s("0e8f"),p=s("a722"),m=function(){var t=this,e=t._self._c;return e(d["a"],{attrs:{"grid-list-sm":"","fill-height":""}},[e(p["a"],{attrs:{"align-center":"",row:"",wrap:""}},[e(f["a"],{attrs:{xs12:"",sm8:"","offset-xs0":"","offset-sm2":""}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.message,expression:"message"}]},[e("p",{staticClass:"text-xs-center headline font-weight-medium"},[t._v(" "+t._s(t.$t("Thanks"))+" "+t._s(t.message)+t._s(t.$t("YouCanNowLogin1"))+" "),e("a",{attrs:{href:"/login"}},[t._v(" "+t._s(t.$t("YouCanNowLogin2"))+" ")])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}]},[e("p",{staticClass:"text-xs-center headline font-weight-medium"},[t._v(" "+t._s(t.$t("EmailConfirmFailed"))+" "),e("a",{attrs:{href:"/"}},[t._v(" "+t._s(t.$t("TryAgain"))+" ")])]),e("p",{staticClass:"text-xs-center subheading font-weight-medium"},[t._v(" "+t._s(t.$t("Error"))+": "+t._s(t.error)+" ")])])]),e(f["a"],{attrs:{xs12:"",sm8:"","offset-xs0":"","offset-sm2":""}})],1)],1)},h=[],w={data:function(){return{message:null,error:null}},mounted:function(){var t=this;this.$store.dispatch("auth/confirm",this.$route.params.token).then((function(e){return t.message=e.message})).catch((function(e){return t.error=e.response.data.message}))}},g=w,v=s("2877"),b=Object(v["a"])(g,m,h,!1,null,null,null),x=b.exports,_=function(t){Object(o["a"])(s,t);var e=Object(l["a"])(s);function s(){return Object(i["a"])(this,s),e.apply(this,arguments)}return Object(n["a"])(s)}(u["c"]);_=Object(c["a"])([Object(u["a"])({components:{UserConfirm:x}})],_);var $=_,y=$,P=Object(v["a"])(y,a,r,!1,null,null,null);e["default"]=P.exports}}]);
//# sourceMappingURL=auth.d1828a32.js.map