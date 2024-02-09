/*! For license information please see settings-vue-settings-admin-basic-settings.js.LICENSE.txt */
(()=>{var e,s,n,o={92107:(e,s,n)=>{"use strict";var o=n(20144),r=n(77958),a=n(43554),i=n(31352);const l=(0,n(17499).IY)().setApp("settings").detectUser().build();var c=n(64024),d=n(93664),u=n(79753),g=n(7820);n(65509);const A=Object.freeze({ADDRESS:"address",AVATAR:"avatar",BIOGRAPHY:"biography",DISPLAYNAME:"displayname",EMAIL_COLLECTION:"additional_mail",EMAIL:"email",HEADLINE:"headline",NOTIFICATION_EMAIL:"notify_email",FEDIVERSE:"fediverse",ORGANISATION:"organisation",PHONE:"phone",PROFILE_ENABLED:"profile_enabled",ROLE:"role",TWITTER:"twitter",WEBSITE:"website"}),p=Object.freeze({ADDRESS:(0,i.Iu)("settings","Location"),AVATAR:(0,i.Iu)("settings","Profile picture"),BIOGRAPHY:(0,i.Iu)("settings","About"),DISPLAYNAME:(0,i.Iu)("settings","Full name"),EMAIL_COLLECTION:(0,i.Iu)("settings","Additional email"),EMAIL:(0,i.Iu)("settings","Email"),HEADLINE:(0,i.Iu)("settings","Headline"),ORGANISATION:(0,i.Iu)("settings","Organisation"),PHONE:(0,i.Iu)("settings","Phone number"),PROFILE_ENABLED:(0,i.Iu)("settings","Profile"),ROLE:(0,i.Iu)("settings","Role"),TWITTER:(0,i.Iu)("settings","X (formerly Twitter)"),FEDIVERSE:(0,i.Iu)("settings","Fediverse (e.g. Mastodon)"),WEBSITE:(0,i.Iu)("settings","Website")}),b=(Object.freeze({[A.ADDRESS]:p.ADDRESS,[A.AVATAR]:p.AVATAR,[A.BIOGRAPHY]:p.BIOGRAPHY,[A.DISPLAYNAME]:p.DISPLAYNAME,[A.EMAIL_COLLECTION]:p.EMAIL_COLLECTION,[A.EMAIL]:p.EMAIL,[A.HEADLINE]:p.HEADLINE,[A.ORGANISATION]:p.ORGANISATION,[A.PHONE]:p.PHONE,[A.PROFILE_ENABLED]:p.PROFILE_ENABLED,[A.ROLE]:p.ROLE,[A.TWITTER]:p.TWITTER,[A.FEDIVERSE]:p.FEDIVERSE,[A.WEBSITE]:p.WEBSITE}),Object.freeze({PROFILE_VISIBILITY:(0,i.Iu)("settings","Profile visibility")}),Object.freeze({[p.ADDRESS]:A.ADDRESS,[p.AVATAR]:A.AVATAR,[p.BIOGRAPHY]:A.BIOGRAPHY,[p.DISPLAYNAME]:A.DISPLAYNAME,[p.EMAIL_COLLECTION]:A.EMAIL_COLLECTION,[p.EMAIL]:A.EMAIL,[p.HEADLINE]:A.HEADLINE,[p.ORGANISATION]:A.ORGANISATION,[p.PHONE]:A.PHONE,[p.PROFILE_ENABLED]:A.PROFILE_ENABLED,[p.ROLE]:A.ROLE,[p.TWITTER]:A.TWITTER,[p.FEDIVERSE]:A.FEDIVERSE,[p.WEBSITE]:A.WEBSITE}),Object.freeze({LANGUAGE:"language",LOCALE:"locale"}),Object.freeze({LANGUAGE:(0,i.Iu)("settings","Language"),LOCALE:(0,i.Iu)("settings","Locale")}),Object.freeze({PRIVATE:"v2-private",LOCAL:"v2-local",FEDERATED:"v2-federated",PUBLISHED:"v2-published"}));Object.freeze({[p.ADDRESS]:[b.LOCAL,b.PRIVATE],[p.AVATAR]:[b.LOCAL,b.PRIVATE],[p.BIOGRAPHY]:[b.LOCAL,b.PRIVATE],[p.DISPLAYNAME]:[b.LOCAL],[p.EMAIL_COLLECTION]:[b.LOCAL],[p.EMAIL]:[b.LOCAL],[p.HEADLINE]:[b.LOCAL,b.PRIVATE],[p.ORGANISATION]:[b.LOCAL,b.PRIVATE],[p.PHONE]:[b.LOCAL,b.PRIVATE],[p.PROFILE_ENABLED]:[b.LOCAL,b.PRIVATE],[p.ROLE]:[b.LOCAL,b.PRIVATE],[p.TWITTER]:[b.LOCAL,b.PRIVATE],[p.FEDIVERSE]:[b.LOCAL,b.PRIVATE],[p.WEBSITE]:[b.LOCAL,b.PRIVATE]}),Object.freeze([p.BIOGRAPHY,p.HEADLINE,p.ORGANISATION,p.ROLE]),Object.freeze({[b.PRIVATE]:{name:b.PRIVATE,displayName:(0,i.Iu)("settings","Private"),tooltip:(0,i.Iu)("settings","Only visible to people matched via phone number integration through Talk on mobile"),tooltipDisabled:(0,i.Iu)("settings","Not available as this property is required for core functionality including file sharing and calendar invitations"),iconClass:"icon-phone"},[b.LOCAL]:{name:b.LOCAL,displayName:(0,i.Iu)("settings","Local"),tooltip:(0,i.Iu)("settings","Only visible to people on this instance and guests"),iconClass:"icon-password"},[b.FEDERATED]:{name:b.FEDERATED,displayName:(0,i.Iu)("settings","Federated"),tooltip:(0,i.Iu)("settings","Only synchronize to trusted servers"),tooltipDisabled:(0,i.Iu)("settings","Not available as federation has been disabled for your account, contact your system administrator if you have any questions"),iconClass:"icon-contacts-dark"},[b.PUBLISHED]:{name:b.PUBLISHED,displayName:(0,i.Iu)("settings","Published"),tooltip:(0,i.Iu)("settings","Synchronize to trusted servers and the global and public address book"),tooltipDisabled:(0,i.Iu)("settings","Not available as publishing user specific data to the lookup server is not allowed, contact your system administrator if you have any questions"),iconClass:"icon-link"}}),b.LOCAL,Object.freeze({NOT_VERIFIED:0,VERIFICATION_IN_PROGRESS:1,VERIFIED:2});var E=n(9359);const m=(0,a.j)("settings","profileEnabledByDefault",!0),j={name:"ProfileSettings",components:{NcCheckboxRadioSwitch:E.Z},data:()=>({initialProfileEnabledByDefault:m}),methods:{async onProfileDefaultChange(e){"boolean"==typeof e&&await this.updateProfileDefault(e)},async updateProfileDefault(e){try{const t=await(async e=>{e=e?"1":"0";const t=(0,u.generateOcsUrl)("/apps/provisioning_api/api/v1/config/apps/{appId}/{key}",{appId:"settings",key:"profile_enabled_by_default"});return await(0,g.Z)(),(await d.Z.post(t,{value:e})).data})(e);this.handleResponse({isEnabled:e,status:t.ocs?.meta?.status})}catch(e){this.handleResponse({errorMessage:t("settings","Unable to update profile default setting"),error:e})}},handleResponse(e){let{isEnabled:t,status:s,errorMessage:n,error:o}=e;"ok"===s?this.initialProfileEnabledByDefault=t:((0,c.x2)(n),l.error(n,o))}}};var h=n(51900);const v=(0,h.Z)(j,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"section",attrs:{id:"profile-settings"}},[t("h2",{staticClass:"inlineblock"},[e._v("\n\t\t"+e._s(e.t("settings","Profile"))+"\n\t")]),e._v(" "),t("p",{staticClass:"settings-hint"},[e._v("\n\t\t"+e._s(e.t("settings","Enable or disable profile by default for new users."))+"\n\t")]),e._v(" "),t("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.initialProfileEnabledByDefault},on:{"update:checked":[function(t){e.initialProfileEnabledByDefault=t},e.onProfileDefaultChange]}},[e._v("\n\t\t"+e._s(e.t("settings","Enable"))+"\n\t")])],1)}),[],!1,null,"5afdc030",null).exports;var I=n(90580),f=n(50323),L=n(80351),O=n.n(L),C=n(25108);const y=(0,a.j)("settings","lastCron"),k=(0,a.j)("settings","cronMaxAge",""),R=(0,a.j)("settings","backgroundJobsMode","cron"),T=(0,a.j)("settings","cliBasedCronPossible",!0),N=(0,a.j)("settings","cliBasedCronUser","www-data"),P=(0,a.j)("settings","backgroundJobsDocUrl"),w={name:"BackgroundJob",components:{NcCheckboxRadioSwitch:E.Z,NcSettingsSection:I.Z,NcNoteCard:f.Z},data:()=>({lastCron:y,cronMaxAge:k,backgroundJobsMode:R,cliBasedCronPossible:T,cliBasedCronUser:N,backgroundJobsDocUrl:P,relativeTime:O()(1e3*y).fromNow(),maxAgeRelativeTime:O()(1e3*k).fromNow()}),computed:{cronLabel(){let e=t("settings","Use system cron service to call the cron.php file every 5 minutes.");return this.cliBasedCronPossible?e+="<br>"+t("settings",'The cron.php needs to be executed by the system user "{user}".',{user:this.cliBasedCronUser}):e+="<br>"+t("settings","The PHP POSIX extension is required. See {linkstart}PHP documentation{linkend} for more details.",{linkstart:'<a target="_blank" rel="noreferrer nofollow" class="external" href="https://www.php.net/manual/en/book.posix.php">',linkend:"</a>"},void 0,{escape:!1,sanitize:!1}),e},oldExecution(){return Date.now()/1e3-this.lastCron>600},longExecutionNotCron(){return Date.now()/1e3-this.cronMaxAge>43200&&"cron"!==this.backgroundJobsMode},longExecutionCron(){return Date.now()/1e3-this.cronMaxAge>86400&&"cron"===this.backgroundJobsMode}},methods:{async onBackgroundJobModeChanged(e){const s=(0,u.generateOcsUrl)("/apps/provisioning_api/api/v1/config/apps/{appId}/{key}",{appId:"core",key:"backgroundjobs_mode"});await(0,g.Z)();try{const{data:t}=await d.Z.post(s,{value:e});this.handleResponse({status:t.ocs?.meta?.status})}catch(e){this.handleResponse({errorMessage:t("settings","Unable to update background job mode"),error:e})}},async handleResponse(e){let{status:t,errorMessage:s,error:n}=e;"ok"===t?await this.deleteError():((0,c.x2)(s),C.error(s,n))},async deleteError(){const e=(0,u.generateOcsUrl)("/apps/provisioning_api/api/v1/config/apps/{appId}/{key}",{appId:"core",key:"cronErrors"});await(0,g.Z)();try{await d.Z.delete(e)}catch(e){C.error(e)}}}},S=w;var D=n(93379),_=n.n(D),x=n(7795),M=n.n(x),B=n(90569),z=n.n(B),V=n(3565),H=n.n(V),F=n(19216),J=n.n(F),U=n(44589),G=n.n(U),Z=n(70368),W={};W.styleTagTransform=G(),W.setAttributes=H(),W.insert=z().bind(null,"head"),W.domAPI=M(),W.insertStyleElement=J(),_()(Z.Z,W),Z.Z&&Z.Z.locals&&Z.Z.locals;const Y=(0,h.Z)(S,(function(){var e=this,t=e._self._c;return t("NcSettingsSection",{attrs:{name:e.t("settings","Background jobs"),description:e.t("settings","For the server to work properly, it's important to configure background jobs correctly. Cron is the recommended setting. Please see the documentation for more information."),"doc-url":e.backgroundJobsDocUrl}},[0!==e.lastCron?[e.oldExecution?t("NcNoteCard",{attrs:{type:"error"}},[e._v("\n\t\t\t"+e._s(e.t("settings","Last job execution ran {time}. Something seems wrong.",{time:e.relativeTime}))+"\n\t\t")]):e.longExecutionCron?t("NcNoteCard",{attrs:{type:"warning"}},[e._v("\n\t\t\t"+e._s(e.t("settings","Some jobs have not been executed since {maxAgeRelativeTime}. Please consider increasing the execution frequency.",{maxAgeRelativeTime:e.maxAgeRelativeTime}))+"\n\t\t")]):e.longExecutionNotCron?t("NcNoteCard",{attrs:{type:"warning"}},[e._v("\n\t\t\t"+e._s(e.t("settings","Some jobs have not been executed since {maxAgeRelativeTime}. Please consider switching to system cron.",{maxAgeRelativeTime:e.maxAgeRelativeTime}))+"\n\t\t")]):t("NcNoteCard",{attrs:{type:"success"}},[e._v("\n\t\t\t"+e._s(e.t("settings","Last job ran {relativeTime}.",{relativeTime:e.relativeTime}))+"\n\t\t")])]:t("NcNoteCard",{attrs:{type:"error"}},[e._v("\n\t\t"+e._s(e.t("settings","Background job did not run yet!"))+"\n\t")]),e._v(" "),t("NcCheckboxRadioSwitch",{staticClass:"ajaxSwitch",attrs:{type:"radio",checked:e.backgroundJobsMode,name:"backgroundJobsMode",value:"ajax"},on:{"update:checked":[function(t){e.backgroundJobsMode=t},e.onBackgroundJobModeChanged]}},[e._v("\n\t\t"+e._s(e.t("settings","AJAX"))+"\n\t")]),e._v(" "),t("em",[e._v(e._s(e.t("settings","Execute one task with each page loaded. Use case: Single user instance.")))]),e._v(" "),t("NcCheckboxRadioSwitch",{attrs:{type:"radio",checked:e.backgroundJobsMode,name:"backgroundJobsMode",value:"webcron"},on:{"update:checked":[function(t){e.backgroundJobsMode=t},e.onBackgroundJobModeChanged]}},[e._v("\n\t\t"+e._s(e.t("settings","Webcron"))+"\n\t")]),e._v(" "),t("em",[e._v(e._s(e.t("settings","cron.php is registered at a webcron service to call cron.php every 5 minutes over HTTP. Use case: Very small instance (1–5 users depending on the usage).")))]),e._v(" "),t("NcCheckboxRadioSwitch",{attrs:{type:"radio",disabled:!e.cliBasedCronPossible,checked:e.backgroundJobsMode,value:"cron",name:"backgroundJobsMode"},on:{"update:checked":[function(t){e.backgroundJobsMode=t},e.onBackgroundJobModeChanged]}},[e._v("\n\t\t"+e._s(e.t("settings","Cron (Recommended)"))+"\n\t")]),e._v(" "),t("em",{domProps:{innerHTML:e._s(e.cronLabel)}})],2)}),[],!1,null,"722418aa",null).exports;n.nc=btoa((0,r.IH)());const q=(0,a.j)("settings","profileEnabledGlobally",!0);o.ZP.mixin({props:{logger:l},methods:{t:i.Iu}}),(new(o.ZP.extend(Y))).$mount("#vue-admin-background-job"),q&&(new(o.ZP.extend(v))).$mount("#vue-admin-profile-settings")},70368:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var n=s(87537),o=s.n(n),r=s(23645),a=s.n(r)()(o());a.push([e.id,".error[data-v-722418aa]{margin-top:8px;padding:5px;border-radius:var(--border-radius);color:var(--color-primary-element-text);background-color:var(--color-error);width:initial}.warning[data-v-722418aa]{margin-top:8px;padding:5px;border-radius:var(--border-radius);color:var(--color-primary-element-text);background-color:var(--color-warning);width:initial}.ajaxSwitch[data-v-722418aa]{margin-top:1rem}","",{version:3,sources:["webpack://./apps/settings/src/components/BasicSettings/BackgroundJob.vue"],names:[],mappings:"AACA,wBACC,cAAA,CACA,WAAA,CACA,kCAAA,CACA,uCAAA,CACA,mCAAA,CACA,aAAA,CAED,0BACC,cAAA,CACA,WAAA,CACA,kCAAA,CACA,uCAAA,CACA,qCAAA,CACA,aAAA,CAED,6BACC,eAAA",sourcesContent:["\n.error {\n\tmargin-top: 8px;\n\tpadding: 5px;\n\tborder-radius: var(--border-radius);\n\tcolor: var(--color-primary-element-text);\n\tbackground-color: var(--color-error);\n\twidth: initial;\n}\n.warning {\n\tmargin-top: 8px;\n\tpadding: 5px;\n\tborder-radius: var(--border-radius);\n\tcolor: var(--color-primary-element-text);\n\tbackground-color: var(--color-warning);\n\twidth: initial;\n}\n.ajaxSwitch {\n\tmargin-top: 1rem;\n}\n"],sourceRoot:""}]);const i=a},46700:(e,t,s)=>{var n={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function o(e){var t=r(e);return s(t)}function r(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=46700}},r={};function a(e){var t=r[e];if(void 0!==t)return t.exports;var s=r[e]={id:e,loaded:!1,exports:{}};return o[e].call(s.exports,s,s.exports,a),s.loaded=!0,s.exports}a.m=o,e=[],a.O=(t,s,n,o)=>{if(!s){var r=1/0;for(d=0;d<e.length;d++){s=e[d][0],n=e[d][1],o=e[d][2];for(var i=!0,l=0;l<s.length;l++)(!1&o||r>=o)&&Object.keys(a.O).every((e=>a.O[e](s[l])))?s.splice(l--,1):(i=!1,o<r&&(r=o));if(i){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[s,n,o]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,s)=>(a.f[s](e,t),t)),[])),a.u=e=>e+"-"+e+".js?v="+{4720:"67ff1816113751e83e78",6512:"930a9f0a458cd206d9d1"}[e],a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s={},n="nextcloud:",a.l=(e,t,o,r)=>{if(s[e])s[e].push(t);else{var i,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==n+o){i=u;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",n+o),i.src=e),s[e]=[t];var g=(t,n)=>{i.onerror=i.onload=null,clearTimeout(A);var o=s[e];if(delete s[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),t)return t(n)},A=setTimeout(g.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=g.bind(null,i.onerror),i.onload=g.bind(null,i.onload),l&&document.head.appendChild(i)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a.j=6192,(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var s=t.getElementsByTagName("script");if(s.length)for(var n=s.length-1;n>-1&&!e;)e=s[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{a.b=document.baseURI||self.location.href;var e={6192:0};a.f.j=(t,s)=>{var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)s.push(n[2]);else{var o=new Promise(((s,o)=>n=e[t]=[s,o]));s.push(n[2]=o);var r=a.p+a.u(t),i=new Error;a.l(r,(s=>{if(a.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=s&&("load"===s.type?"missing":s.type),r=s&&s.target&&s.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",i.name="ChunkLoadError",i.type=o,i.request=r,n[1](i)}}),"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,s)=>{var n,o,r=s[0],i=s[1],l=s[2],c=0;if(r.some((t=>0!==e[t]))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(l)var d=l(a)}for(t&&t(s);c<r.length;c++)o=r[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},s=self.webpackChunknextcloud=self.webpackChunknextcloud||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})(),a.nc=void 0;var i=a.O(void 0,[7874],(()=>a(92107)));i=a.O(i)})();
//# sourceMappingURL=settings-vue-settings-admin-basic-settings.js.map?v=acd9645ca7f49fe4474d