(function(e){function t(t){for(var s,n,i=t[0],l=t[1],c=t[2],m=0,d=[];m<i.length;m++)n=i[m],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],s=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(s=!1)}s&&(o.splice(t--,1),e=n(n.s=a[0]))}return e}var s={},r={app:0},o=[];function n(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=s,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/login-vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var s=a("85ec"),r=a.n(s);r.a},"039a":function(e,t,a){"use strict";var s=a("7174"),r=a.n(s);r.a},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=o,e.exports=r,r.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=a("8c4f"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-row",{staticClass:"register-container",style:{width:"700px",margin:"50px 0"}},[a("a-form",{staticClass:"register-form form-style",attrs:{form:e.form},on:{submit:e.handleSubmit}},[a("h2",{style:{marginBottom:"20px"}},[e._v("REGISTER")]),a("a-form-item",e._b({staticClass:"input-form ",style:{},attrs:{label:"E-mail",justify:"center","has-feedback":""}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]}],expression:"[\n          'email',\n          {\n            rules: [\n              {\n                type: 'email',\n                message: 'The input is not valid E-mail!'\n              },\n              {\n                required: true,\n                message: 'Please input your E-mail!'\n              }\n            ]\n          }\n        ]"}],attrs:{placeholder:"Email"}})],1),a("a-form-item",e._b({staticClass:"input-form ",style:{position:"relative"},attrs:{label:"Password"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"Please input your Password!"},,{validator:e.validateToNextPassword}]}],expression:"[\n          'password',\n          {\n            rules: [\n              { required: true, message: 'Please input your Password!' },\n              ,\n              {\n                validator: validateToNextPassword\n              }\n            ]\n          }\n        ]"}],attrs:{type:e.passwordFieldType,placeholder:"Password"}}),a("div",{staticClass:"show-password",style:{position:"absolute",transform:"translate(-50%,-50%)",right:"0px",top:"50%",fontSize:"16px",cursor:"pointer"},on:{click:e.showPassword}},["password"==e.passwordFieldType?a("a-icon",{attrs:{type:"eye"}}):a("a-icon",{attrs:{type:"eye-invisible"}})],1)],1),a("a-form-item",e._b({staticClass:"input-form ",style:{position:"relative"},attrs:{label:"Confirm password"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["confirm",{rules:[{required:!0,message:"Please input your Password!"},,{validator:e.compareToFirstPassword}]}],expression:"[\n          'confirm',\n          {\n            rules: [\n              { required: true, message: 'Please input your Password!' },\n              ,\n              {\n                validator: compareToFirstPassword\n              }\n            ]\n          }\n        ]"}],attrs:{type:e.passwordFieldType,placeholder:"Password"}}),a("div",{staticClass:"show-password",style:{position:"absolute",transform:"translate(-50%,-50%)",right:"0px",top:"50%",fontSize:"16px",cursor:"pointer"},on:{click:e.showPassword}},["password"==e.passwordFieldType?a("a-icon",{attrs:{type:"eye"}}):a("a-icon",{attrs:{type:"eye-invisible"}})],1)],1),a("a-form-item",e._b({staticClass:"input-form",attrs:{label:"First name"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["firstName"],expression:"['firstName']"}],attrs:{placeholder:"First name"}})],1),a("a-form-item",e._b({staticClass:"input-form",attrs:{label:"Last name"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["lastName"],expression:"['lastName']"}],attrs:{placeholder:"Last name"}})],1),a("a-form-item",e._b({staticClass:"input-form",attrs:{label:"Company"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["company"],expression:"['company']"}],attrs:{placeholder:"Company"}})],1),a("a-form-item",e._b({staticClass:"input-form",attrs:{label:"Phone"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["phone"],expression:"['phone']"}],attrs:{placeholder:"Phone"}})],1),a("a-form-item",e._b({staticClass:"input-form ",attrs:{label:"Country"}},"a-form-item",e.formItemLayout,!1),[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["country",{rules:[{required:!0,message:"Please select your country!"}]}],expression:"['country', { rules: [{ required: true, message: 'Please select your country!' }] }]"}],attrs:{"show-search":"","option-filter-prop":"children","filter-option":e.filterOption,placeholder:"Select your country"}},[a("a-select-option",{attrs:{value:"usa"}},[e._v(" United States ")]),a("a-select-option",{attrs:{value:"lithuania"}},[e._v(" Lithuania ")]),a("a-select-option",{attrs:{value:"italy"}},[e._v(" Italy ")])],1)],1),a("a-form-item",e._b({staticClass:"input-form",attrs:{label:"Map type"}},"a-form-item",e.formItemLayout,!1),[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["mapType",{rules:[{required:!0,message:"Please select a map type!"}]}],expression:"['mapType', { rules: [{ required: true, message: 'Please select a map type!' }] }]"}],attrs:{placeholder:"Select a map type","show-search":"","option-filter-prop":"children","filter-option":e.filterOption}},[a("a-select-option",{attrs:{value:"google"}},[e._v(" Google ")]),a("a-select-option",{attrs:{value:"bing"}},[e._v(" Bing ")]),a("a-select-option",{attrs:{value:"baidu"}},[e._v(" Baidu ")])],1)],1),a("a-form-item",e._b({staticClass:"input-form",attrs:{label:"Language"}},"a-form-item",e.formItemLayout,!1),[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["language",{rules:[{required:!0,message:"Please select a map type!"}]}],expression:"['language', { rules: [{ required: true, message: 'Please select a map type!' }] }]"}],attrs:{placeholder:"Select your language","show-search":"","option-filter-prop":"children","filter-option":e.filterOption}},[a("a-select-option",{attrs:{value:"english"}},[e._v(" English (United States) ")]),a("a-select-option",{attrs:{value:"lietuviu"}},[e._v(" Lietuvių (Lietuva) ")]),a("a-select-option",{attrs:{value:"italiano"}},[e._v(" Italiano (Italy) ")])],1)],1),a("a-form-item",e._b({staticClass:"input-form",attrs:{label:"Units"}},"a-form-item",e.formItemLayout,!1),[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["units",{rules:[{required:!0,message:"Please select units!"}]}],expression:"['units', { rules: [{ required: true, message: 'Please select units!' }] }]"}],attrs:{placeholder:"Select units","show-search":"","option-filter-prop":"children","filter-option":e.filterOption}},[a("a-select-option",{attrs:{value:"metric"}},[e._v(" Metric ")]),a("a-select-option",{attrs:{value:"imperial"}},[e._v(" Imperial ")])],1)],1),a("a-row",[a("a-form-item",{style:{margin:"0px auto",height:"60px"}},[a("a-checkbox",{directives:[{name:"decorator",rawName:"v-decorator",value:["agree-to-terms",{valuePropName:"checked",rules:[{required:!0,message:"Please agree to terms and conditions"}]}],expression:"[\n            'agree-to-terms',\n            {\n              valuePropName: 'checked',\n              rules: [{ required: true, message: 'Please agree to terms and conditions' }]\n            }\n          ]"}]}),e._v(" I agree to the"),a("router-link",{staticClass:"link",attrs:{to:"/login"}},[e._v(" terms and conditions")])],1),a("a-form-item",{style:{margin:"0px "}},[a("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v(" Register ")])],1)],1)],1)],1)},n=[],i=(a("4160"),a("c975"),a("159b"),{data:function(){return{formLayout:"horizontal",form:this.$form.createForm(this,{name:"coordinated"}),confirmDirty:!1,userExist:!1,passwordFieldType:"password"}},computed:{users:function(){return this.$store.state.usersArray},formItemLayout:function(){var e=this.formLayout;return"horizontal"===e?{labelCol:{span:6},wrapperCol:{span:16}}:{}}},methods:{handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFieldsAndScroll((function(e,a){if(!e){var s=t.form;s.getFieldValue("agree-to-terms")&&(t.checkIfUserAlreadyExist(a.email),t.userExist?(t.userAlreadyExist(),t.userExist=!1):t.createNewUser(a))}}))},checkIfUserAlreadyExist:function(e){var t=this;this.$store.state.usersArray.forEach((function(a){e===a.email&&(t.userExist=!0)}))},createNewUser:function(e){var t=(new Date).getTime(),a={id:t,email:e.email,password:e.password,firstName:e.firstName,lastName:e.lastName,company:e.company,phone:e.phone,country:e.country,mapType:e.mapType,language:e.language};this.$store.dispatch("addNewUser",a),this.userCreated()},compareToFirstPassword:function(e,t,a){var s=this.form;t&&t!==s.getFieldValue("password")?a("Two passwords that you enter is inconsistent!"):a()},validateToNextPassword:function(e,t,a){var s=this.form;t&&this.confirmDirty&&s.validateFields(["confirm"],{force:!0}),a()},showPassword:function(){this.passwordFieldType="password"===this.passwordFieldType?"text":"password"},filterOption:function(e,t){return t.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0},userCreated:function(){this.$info({content:"New user registered!"})},userAlreadyExist:function(){this.$error({content:"User with this email already exists!"})}}}),l=i,c=a("2877"),u=Object(c["a"])(l,o,n,!1,null,null,null),m=u.exports,d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-row",{staticClass:"contact-form form-style",style:{margin:"50px 0",width:"700px"}},[a("h2",{style:{marginBottom:"20px"}},[e._v("CONTACTS")]),a("a-row",{staticStyle:{},style:{marginBottom:"20px"},attrs:{type:"flex",justify:"center"}},[a("a-col",{staticClass:"column",attrs:{span:12,align:"start"}},[a("a-row",{style:{fontWeight:"bold"}},[e._v("Address:")]),a("a-row",[e._v("Company")]),a("a-row",[e._v("4647 Eagles Nest Drive")]),a("a-row",[e._v("Redding, CA 78134")]),a("a-row",[e._v("Phone: +1 447 204 8968")])],1),a("a-col",{attrs:{span:12,align:"start"}},[a("a-col",{staticClass:"column",attrs:{span:24,align:"start"}},[a("a-row",{style:{fontWeight:"bold"}},[e._v("Email:")]),a("a-row",[e._v("Support: support@company.com")]),a("a-row",[e._v("Sales: sales@company.com")])],1),a("a-col",{attrs:{span:24,align:"start"}},[a("a-row",{style:{fontWeight:"bold"}},[e._v("Websites:")]),a("a-row",[a("router-link",{staticClass:"link",style:{marginLeft:"0px"},attrs:{to:"/contact"}},[e._v("www.company.com")])],1)],1)],1)],1),a("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[a("a-form-item",e._b({staticClass:"input-form",attrs:{label:"Name"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"Please input your name"}]}],expression:"[\n          'name',\n          {\n            rules: [\n              {\n                required: true,\n                message: 'Please input your name'\n              }\n            ]\n          }\n        ]"}],staticClass:"input-field",attrs:{placeholder:"Name"}})],1),a("a-form-item",e._b({staticClass:"input-form",attrs:{justify:"center",label:"Email"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]}],expression:"[\n          'email',\n          {\n            rules: [\n              {\n                type: 'email',\n                message: 'The input is not valid E-mail!'\n              },\n              {\n                required: true,\n                message: 'Please input your E-mail!'\n              }\n            ]\n          }\n        ]"}],attrs:{placeholder:"Email"}})],1),a("a-form-item",e._b({attrs:{label:"Message"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["message",{rules:[{required:!0,message:"Please input your message"}]}],expression:"[\n          'message',\n          {\n            rules: [\n              {\n                required: true,\n                message: 'Please input your message'\n              }\n            ]\n          }\n        ]"}],style:{height:"180px"},attrs:{type:"textarea",placeholder:"Message"}})],1),a("a-form-item",{style:{margin:"0px"}},[a("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v(" Submit ")])],1)],1)],1)},p=[],f={data:function(){return{email:"",password:"",formLayout:"horizontal",form:this.$form.createForm(this,{name:"coordinated"})}},computed:{formItemLayout:function(){var e=this.formLayout;return"horizontal"===e?{labelCol:{span:3},wrapperCol:{span:21}}:{}}},methods:{handleSubmit:function(e){e.preventDefault(),this.form.validateFields((function(e,t){e||console.log("Received values of form: ",t)}))},handleFormLayoutChange:function(e){this.formLayout=e.target.value}}},h=f,g=Object(c["a"])(h,d,p,!1,null,"af6cf3f0",null),y=g.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-row",{style:{height:"calc(100vh - 70px)"},attrs:{type:"flex",align:"middle"}},[a("a-layout-content",{staticClass:"main-layout"},[a("a-form",{staticClass:"login-form form-style",attrs:{id:"components-form-login",form:e.form,layout:e.formLayout},on:{submit:e.handleSubmit}},[a("h2",{style:{marginBottom:"20px"}},[e._v("USER LOGIN")]),a("a-form-item",e._b({style:{width:"500px"},attrs:{label:"E-mail"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]}],expression:"[\n            'email',\n            {\n              rules: [\n                {\n                  type: 'email',\n                  message: 'The input is not valid E-mail!'\n                },\n                {\n                  required: true,\n                  message: 'Please input your E-mail!'\n                }\n              ]\n            }\n          ]"}],attrs:{placeholder:"Email"}},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),a("a-form-item",e._b({style:{width:"500px",position:"relative"},attrs:{label:"Password"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"Please input your Password!"}]}],expression:"['password', { rules: [{ required: true, message: 'Please input your Password!' }] }]"}],attrs:{type:e.passwordFieldType,placeholder:"Password"}},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1),a("div",{staticClass:"show-password",style:{position:"absolute",transform:"translate(-50%,-50%)",right:0,top:"50%",fontSize:"16px",cursor:"pointer"},on:{click:e.showPassword}},["password"==e.passwordFieldType?a("a-icon",{attrs:{type:"eye"}}):a("a-icon",{attrs:{type:"eye-invisible"}})],1)],1),a("a-form-item",{staticClass:"login-form-links",style:{margin:"0px"}},[a("a-form-item",{style:{margin:"0px auto",height:"60px"}},[a("a-checkbox",{directives:[{name:"decorator",rawName:"v-decorator",value:["agree-to-terms",{valuePropName:"checked",rules:[{required:!0,message:"Please agree to terms and conditions"}]}],expression:"[\n              'agree-to-terms',\n              {\n                valuePropName: 'checked',\n                rules: [{ required: true, message: 'Please agree to terms and conditions' }]\n              }\n            ]"}]}),e._v(" I agree to the "),a("router-link",{staticClass:"link",attrs:{to:"/login"}},[e._v(" terms and conditions")])],1),a("a-row",{attrs:{type:"flex",justify:"center"}},[a("a-col",{attrs:{span:14}},[a("a-button",{staticClass:"login-form-button",style:{marginBottom:"20px"},attrs:{type:"primary","html-type":"submit"}},[e._v(" Log in ")])],1)],1),a("a-row",{style:{margin:"0px"},attrs:{type:"flex",justify:"center"}},[a("a-col",{style:{textAlign:"start"},attrs:{span:7},on:{click:e.editSelectedMenuButton}},[a("router-link",{staticClass:"link",attrs:{to:"/register"}},[e._v(" Register")])],1),a("a-col",{style:{textAlign:"end"},attrs:{span:7}},[a("router-link",{staticClass:"link",attrs:{to:"/reminder"}},[e._v(" Forgot password")])],1)],1)],1)],1)],1)],1)},b=[],w={data:function(){return{loggedIn:!1,visible:!1,formLayout:"horizontal",passwordFieldType:"password"}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"normal_login"})},computed:{users:function(){return this.$store.state.usersArray},checkLogin:function(){return this.$store.state.isLoggedIn},formItemLayout:function(){var e=this.formLayout;return"horizontal"===e?{labelCol:{span:5},wrapperCol:{span:14}}:{}}},methods:{handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,a){if(!e){var s=t.form;s.getFieldValue("agree-to-terms")&&(t.$store.state.usersArray.forEach((function(e){a.email===e.email&&a.password===e.password&&(t.$store.dispatch("changeLoggedInUserId",e.id),t.$store.dispatch("changeLoginState",!0),t.$store.dispatch("editSelectedMenuButton"))})),t.checkLogin?R.push({name:"userpage"}):t.incorrectLoginInfo())}}))},showPassword:function(){this.passwordFieldType="password"===this.passwordFieldType?"text":"password"},editSelectedMenuButton:function(){this.$store.dispatch("editSelectedMenuButton")},showModal:function(){this.visible=!0},incorrectLoginInfo:function(){this.$error({content:"Incorrect email or password!"})}}},j=w,x=(a("039a"),Object(c["a"])(j,v,b,!1,null,null,null)),_=x.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return 1==e.checkLogin?a("div",{staticClass:"form-style",style:{marginTop:"50px",width:"50%"}},[e._l(e.LoggedInUserInfo,(function(t){return a("h2",{key:t.id,style:{marginBottom:"20px"}},[e._v("User "+e._s(t.email)+" is logged in")])})),e._l(e.LoggedInUserInfo,(function(t){return a("a-descriptions",{key:t.email,attrs:{bordered:""}},[a("a-descriptions-item",e._b({attrs:{label:"Email",span:3}},"a-descriptions-item",e.formItemLayout,!1),[e._v(" "+e._s(t.email)+" ")]),a("a-descriptions-item",{attrs:{label:"Password",span:3}},[e._v(" "+e._s(t.password)+" ")]),a("a-descriptions-item",{attrs:{label:"First Name",span:3}},[e._v(" "+e._s(t.firstName)+" ")]),a("a-descriptions-item",{attrs:{label:"Last Name",span:3}},[e._v(" "+e._s(t.lastName)+" ")]),a("a-descriptions-item",{attrs:{label:"Company",span:3}},[e._v(" "+e._s(t.company)+" ")]),a("a-descriptions-item",{attrs:{label:"Phone",span:3}},[e._v(" "+e._s(t.phone)+" ")]),a("a-descriptions-item",{attrs:{label:"Country",span:3}},[e._v(" "+e._s(t.country)+" ")]),a("a-descriptions-item",{attrs:{label:"Map type",span:3}},[e._v(" "+e._s(t.mapType)+" ")]),a("a-descriptions-item",{attrs:{label:"Language",span:3}},[e._v(" "+e._s(t.language)+" ")])],1)}))],2):e._e()},L=[],P=(a("4de4"),{data:function(){return{formLayout:"horizontal"}},computed:{users:function(){return this.$store.state.usersArray},checkLogin:function(){return this.$store.state.isLoggedIn},checkLoginUserId:function(){return this.$store.state.loggedInUserId},LoggedInUserInfo:function(){var e=this.checkLoginUserId;return this.users.filter((function(t){if(t.id===e)return t}))},formItemLayout:function(){var e=this.formLayout;return"horizontal"===e?{labelCol:{span:3},wrapperCol:{span:21}}:{}}}}),C=P,I=Object(c["a"])(C,k,L,!1,null,null,null),N=I.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-form",{style:{marginTop:"50px"},attrs:{form:e.form},on:{submit:e.handleSubmit}},[a("h1",[e._v("Password reminder")]),a("a-form-item",e._b({style:{width:"300px"},attrs:{label:"E-mail"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]}],expression:"[\n        'email',\n        {\n          rules: [\n            {\n              type: 'email',\n              message: 'The input is not valid E-mail!'\n            },\n            {\n              required: true,\n              message: 'Please input your E-mail!'\n            }\n          ]\n        }\n      ]"}]})],1),a("a-form-item",[a("a-button",{style:{width:"300px"},attrs:{type:"primary","html-type":"submit"}},[e._v(" Remind ")])],1)],1)},S=[],T={data:function(){return{formLayout:"horizontal",form:this.$form.createForm(this,{name:"coordinated"}),confirmDirty:!1,autoCompleteResult:[],emailExist:!1,userPassword:""}},computed:{formItemLayout:function(){var e=this.formLayout;return"horizontal"===e?{labelCol:{span:6},wrapperCol:{span:18}}:{}},users:function(){return this.$store.state.usersArray}},methods:{handleSubmit:function(e){var t=this;e.preventDefault();var a=this.users;this.form.validateFieldsAndScroll((function(e,s){e||t.checkIfUserExist(a,s)}))},checkIfUserExist:function(e,t){var a=this;e.forEach((function(e){t.email===e.email&&(a.emailExist=!0,a.userPassword=e.password)})),this.emailExist?this.passwordReminder("Your password is: "+this.userPassword):this.passwordReminder("User does not exist")},passwordReminder:function(e){this.$info({content:e})}}},z=T,U=Object(c["a"])(z,E,S,!1,null,null,null),O=U.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{style:{marginTop:"80px"}},[a("h2",[e._v("Page does not exist")])])},F=[],q={},M=q,B=Object(c["a"])(M,$,F,!1,null,null,null),A=B.exports;s["a"].use(r["a"]);var R=new r["a"]({base:"/login-vue",mode:"history",routes:[{name:"login",path:"/",component:_},{name:"userpage",path:"/userpage",component:N},{name:"register",path:"/register",component:m},{name:"contact",path:"/contact",component:y},{name:"reminder",path:"/reminder",component:O},{name:"wrongPage",path:"*",component:A}]}),D=a("2f62");s["a"].use(D["a"]);var G=new D["a"].Store({state:{usersArray:[{id:1,email:"admin@website.com",password:"123456",firstName:"John",lastName:"Gill",company:"Travel int",phone:"+3178461645",country:"United States",mapType:"Google",language:"English(United States)"},{id:2,email:"user@website.com",password:"123456",firstName:"Peter",lastName:"Till",company:"Global int",phone:"+3178461645",country:"United States",mapType:"Google",language:"English(United States)"},{id:4,email:"123@123.lt",password:"123",firstName:"Garret",lastName:"Hill",company:"Global int",phone:"+3178461645",country:"United States",mapType:"Google",language:"English(United States)"}],selectedMenuButton:3,isLoggedIn:!1,loggedInUserId:null},mutations:{addNewUser:function(e,t){e.usersArray.push(t)},changeLoginState:function(e,t){e.isLoggedIn=t},changeLoggedInUserId:function(e,t){e.loggedInUserId=t},editSelectedMenuButton:function(e){var t,a=window.location.pathname;switch(a){case"/":t=3;break;case"/register":t=2;break;case"/userpage":t=5;break;case"/contact":t=1;break;default:t=""}e.selectedMenuButton=t}},actions:{addNewUser:function(e,t){e.commit("addNewUser",t)},changeLoginState:function(e,t){e.commit("changeLoginState",t)},changeLoggedInUserId:function(e,t){e.commit("changeLoggedInUserId",t)},editSelectedMenuButton:function(e){e.commit("editSelectedMenuButton")}}}),W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("a-layout",{staticClass:"content-wrapper"},[a("a-row",{staticClass:"header",attrs:{type:"flex",justify:"space-between",align:"middle"}},[a("router-link",{staticClass:"logo-container",attrs:{to:"/"}},[a("div",{staticClass:"logo-image"}),a("div",{staticClass:"logo-text"},[e._v("COMPANY")])]),a("a-menu",{style:{lineHeight:"64px"},attrs:{theme:"light",mode:"horizontal","default-selected-keys":[e.selectedMenuButton],"selected-keys":[e.selectedMenuButton]},on:{click:e.editSelectedMenuButton}},[a("a-menu-item",{key:"1"},[a("router-link",{staticClass:"btn btn-contact",attrs:{to:"/contact"}},[e._v("Contact")])],1),0==e.checkLogin?a("a-menu-item",{key:"2"},[a("router-link",{staticClass:"btn btn-register",attrs:{to:"/register"}},[e._v("Register")])],1):e._e(),1==e.checkLogin?a("a-menu-item",{key:"5"},[a("router-link",{attrs:{to:"/userpage"}},[e._v("User")])],1):e._e(),0==e.checkLogin?a("a-menu-item",{key:"3"},[a("router-link",{attrs:{to:"/"}},[e._v("Login")])],1):a("a-menu-item",{key:"4",on:{click:e.logOut}},[e._v(" Log Out ")])],1)],1)],1),a("router-view")],1)},J=[],V=(a("d3b7"),a("25f0"),{computed:{selectedMenuButton:function(){return this.$store.state.selectedMenuButton.toString()},checkLogin:function(){return this.$store.state.isLoggedIn}},methods:{logOut:function(){this.$store.dispatch("changeLoginState",!1),R.push({name:"login"})},editSelectedMenuButton:function(){this.$store.dispatch("editSelectedMenuButton")}},mounted:function(){var e=this.checkLogin;this.$nextTick((function(){var t=window.location.pathname;"/userpage"===t&&!1===e?R.push({name:"login"}):this.editSelectedMenuButton(),"/reminder"===t&&!0===e&&R.push({name:"login"})}))},updated:function(){this.editSelectedMenuButton()}}),Y=V,H=(a("034f"),Object(c["a"])(Y,W,J,!1,null,null,null)),K=H.exports,Q=a("f23d");a("202f");s["a"].config.productionTip=!1,document.title="COMPANY",s["a"].use(Q["a"]),new s["a"]({store:G,router:R,render:function(e){return e(K)}}).$mount("#app")},7174:function(e,t,a){},"85ec":function(e,t,a){}});
//# sourceMappingURL=app.e168660f.js.map