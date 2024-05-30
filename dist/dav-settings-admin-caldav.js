/*! For license information please see dav-settings-admin-caldav.js.license?v=55006e1f8b088efaa4a0 */
(()=>{"use strict";var t,e={19143:(t,e,n)=>{var a=n(85471),s=n(38613),r=n(53334),i=n(26287),d=n(63814),o=n(88837),l=n(32073);const c=(0,s.C)("dav","userSyncCalendarsDocUrl","#"),v={name:"CalDavSettings",components:{NcCheckboxRadioSwitch:l.A,NcSettingsSection:o.A},data:()=>({userSyncCalendarsDocUrl:c}),computed:{hint(){return this.$t("dav","Also install the {calendarappstoreopen}Calendar app{linkclose}, or {calendardocopen}connect your desktop & mobile for syncing ↗{linkclose}.").replace("{calendarappstoreopen}",'<a target="_blank" href="../apps/office/calendar">').replace("{calendardocopen}",'<a target="_blank" href="'.concat(c,'" rel="noreferrer noopener">')).replace(/\{linkclose\}/g,"</a>")},sendInvitationsHelpText(){return this.$t("dav","Please make sure to properly set up {emailopen}the email server{linkclose}.").replace("{emailopen}",'<a href="../admin#mail_general_settings">').replace("{linkclose}","</a>")},sendEventRemindersHelpText(){return this.$t("dav","Please make sure to properly set up {emailopen}the email server{linkclose}.").replace("{emailopen}",'<a href="../admin#mail_general_settings">').replace("{linkclose}","</a>")}},watch:{generateBirthdayCalendar(t){const e=t?"/apps/dav/enableBirthdayCalendar":"/apps/dav/disableBirthdayCalendar";i.A.post((0,d.Jv)(e))},sendInvitations(t){OCP.AppConfig.setValue("dav","sendInvitations",t?"yes":"no")},sendEventReminders(t){OCP.AppConfig.setValue("dav","sendEventReminders",t?"yes":"no")},sendEventRemindersToSharedUsers(t){OCP.AppConfig.setValue("dav","sendEventRemindersToSharedUsers",t?"yes":"no")},sendEventRemindersPush(t){OCP.AppConfig.setValue("dav","sendEventRemindersPush",t?"yes":"no")}}};var p=n(85072),h=n.n(p),m=n(97825),u=n.n(m),b=n(77659),C=n.n(b),f=n(55056),g=n.n(f),y=n(10540),S=n.n(y),A=n(41113),k=n.n(A),x=n(3153),R={};R.styleTagTransform=k(),R.setAttributes=g(),R.insert=C().bind(null,"head"),R.domAPI=u(),R.insertStyleElement=S(),h()(x.A,R),x.A&&x.A.locals&&x.A.locals;const w=(0,n(14486).A)(v,(function(){var t=this,e=t._self._c;return e("NcSettingsSection",{attrs:{name:t.$t("dav","Calendar server"),"doc-url":t.userSyncCalendarsDocUrl}},[e("p",{staticClass:"settings-hint",domProps:{innerHTML:t._s(t.hint)}}),t._v(" "),e("p",[e("NcCheckboxRadioSwitch",{attrs:{id:"caldavSendInvitations",checked:t.sendInvitations,type:"switch"},on:{"update:checked":function(e){t.sendInvitations=e}}},[t._v("\n\t\t\t"+t._s(t.$t("dav","Send invitations to attendees"))+"\n\t\t")]),t._v(" "),e("em",{domProps:{innerHTML:t._s(t.sendInvitationsHelpText)}})],1),t._v(" "),e("p",[e("NcCheckboxRadioSwitch",{staticClass:"checkbox",attrs:{id:"caldavGenerateBirthdayCalendar",checked:t.generateBirthdayCalendar,type:"switch"},on:{"update:checked":function(e){t.generateBirthdayCalendar=e}}},[t._v("\n\t\t\t"+t._s(t.$t("dav","Automatically generate a birthday calendar"))+"\n\t\t")]),t._v(" "),e("em",[t._v("\n\t\t\t"+t._s(t.$t("dav","Birthday calendars will be generated by a background job."))+"\n\t\t")]),t._v(" "),e("br"),t._v(" "),e("em",[t._v("\n\t\t\t"+t._s(t.$t("dav","Hence they will not be available immediately after enabling but will show up after some time."))+"\n\t\t")])],1),t._v(" "),e("p",[e("NcCheckboxRadioSwitch",{attrs:{id:"caldavSendEventReminders",checked:t.sendEventReminders,type:"switch"},on:{"update:checked":function(e){t.sendEventReminders=e}}},[t._v("\n\t\t\t"+t._s(t.$t("dav","Send notifications for events"))+"\n\t\t")]),t._v(" "),e("em",{domProps:{innerHTML:t._s(t.sendEventRemindersHelpText)}}),t._v(" "),e("br"),t._v(" "),e("em",[t._v("\n\t\t\t"+t._s(t.$t("dav","Notifications are sent via background jobs, so these must occur often enough."))+"\n\t\t")])],1),t._v(" "),e("p",{staticClass:"indented"},[e("NcCheckboxRadioSwitch",{attrs:{id:"caldavSendEventRemindersToSharedGroupMembers",checked:t.sendEventRemindersToSharedUsers,type:"switch",disabled:!t.sendEventReminders},on:{"update:checked":function(e){t.sendEventRemindersToSharedUsers=e}}},[t._v("\n\t\t\t"+t._s(t.$t("dav","Send reminder notifications to calendar sharees as well"))+"\n\t\t")]),t._v(" "),e("em",[t._v("\n\t\t\t"+t._s(t.$t("dav","Reminders are always sent to organizers and attendees."))+"\n\t\t")])],1),t._v(" "),e("p",{staticClass:"indented"},[e("NcCheckboxRadioSwitch",{attrs:{id:"caldavSendEventRemindersPush",checked:t.sendEventRemindersPush,type:"switch",disabled:!t.sendEventReminders},on:{"update:checked":function(e){t.sendEventRemindersPush=e}}},[t._v("\n\t\t\t"+t._s(t.$t("dav","Enable notifications for events via push"))+"\n\t\t")])],1)])}),[],!1,null,"fb5e0788",null).exports;a.Ay.prototype.$t=r.Tl,new(a.Ay.extend(w))({name:"CalDavSettingsView",data:()=>({sendInvitations:(0,s.C)("dav","sendInvitations"),generateBirthdayCalendar:(0,s.C)("dav","generateBirthdayCalendar"),sendEventReminders:(0,s.C)("dav","sendEventReminders"),sendEventRemindersToSharedUsers:(0,s.C)("dav","sendEventRemindersToSharedUsers"),sendEventRemindersPush:(0,s.C)("dav","sendEventRemindersPush")})}).$mount("#settings-admin-caldav")},3153:(t,e,n)=>{n.d(e,{A:()=>d});var a=n(71354),s=n.n(a),r=n(76314),i=n.n(r)()(s());i.push([t.id,"\n.indented[data-v-fb5e0788] {\n\tpadding-left: 28px;\n}\n/** Use deep selector to affect v-html */\n*[data-v-fb5e0788] a {\n\ttext-decoration: underline;\n}\n.settings-hint[data-v-fb5e0788] {\n\tmargin-top: -.2em;\n\tmargin-bottom: 1em;\n\topacity: .7;\n}\n","",{version:3,sources:["webpack://./apps/dav/src/views/CalDavSettings.vue"],names:[],mappings:";AAqKA;CACA,kBAAA;AACA;AACA,wCAAA;AACA;CACA,0BAAA;AACA;AACA;CACA,iBAAA;CACA,kBAAA;CACA,WAAA;AACA",sourcesContent:["\x3c!--\n  - SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors\n  - SPDX-License-Identifier: AGPL-3.0-or-later\n--\x3e\n<template>\n\t<NcSettingsSection :name=\"$t('dav', 'Calendar server')\"\n\t\t:doc-url=\"userSyncCalendarsDocUrl\">\n\t\t\x3c!-- Can use v-html as:\n\t\t\t- $t passes the translated string through DOMPurify.sanitize,\n\t\t\t- replacement strings are not user-controlled. --\x3e\n\t\t\x3c!-- eslint-disable-next-line vue/no-v-html --\x3e\n\t\t<p class=\"settings-hint\" v-html=\"hint\" />\n\t\t<p>\n\t\t\t<NcCheckboxRadioSwitch id=\"caldavSendInvitations\"\n\t\t\t\t:checked.sync=\"sendInvitations\"\n\t\t\t\ttype=\"switch\">\n\t\t\t\t{{ $t('dav', 'Send invitations to attendees') }}\n\t\t\t</NcCheckboxRadioSwitch>\n\t\t\t\x3c!-- Can use v-html as:\n\t\t\t\t- $t passes the translated string through DOMPurify.sanitize,\n\t\t\t\t- replacement strings are not user-controlled. --\x3e\n\t\t\t\x3c!-- eslint-disable-next-line vue/no-v-html --\x3e\n\t\t\t<em v-html=\"sendInvitationsHelpText\" />\n\t\t</p>\n\t\t<p>\n\t\t\t<NcCheckboxRadioSwitch id=\"caldavGenerateBirthdayCalendar\"\n\t\t\t\t:checked.sync=\"generateBirthdayCalendar\"\n\t\t\t\ttype=\"switch\"\n\t\t\t\tclass=\"checkbox\">\n\t\t\t\t{{ $t('dav', 'Automatically generate a birthday calendar') }}\n\t\t\t</NcCheckboxRadioSwitch>\n\t\t\t<em>\n\t\t\t\t{{ $t('dav', 'Birthday calendars will be generated by a background job.') }}\n\t\t\t</em>\n\t\t\t<br>\n\t\t\t<em>\n\t\t\t\t{{ $t('dav', 'Hence they will not be available immediately after enabling but will show up after some time.') }}\n\t\t\t</em>\n\t\t</p>\n\t\t<p>\n\t\t\t<NcCheckboxRadioSwitch id=\"caldavSendEventReminders\"\n\t\t\t\t:checked.sync=\"sendEventReminders\"\n\t\t\t\ttype=\"switch\">\n\t\t\t\t{{ $t('dav', 'Send notifications for events') }}\n\t\t\t</NcCheckboxRadioSwitch>\n\t\t\t\x3c!-- Can use v-html as:\n\t\t\t\t- $t passes the translated string through DOMPurify.sanitize,\n\t\t\t\t- replacement strings are not user-controlled. --\x3e\n\t\t\t\x3c!-- eslint-disable-next-line vue/no-v-html --\x3e\n\t\t\t<em v-html=\"sendEventRemindersHelpText\" />\n\t\t\t<br>\n\t\t\t<em>\n\t\t\t\t{{ $t('dav', 'Notifications are sent via background jobs, so these must occur often enough.') }}\n\t\t\t</em>\n\t\t</p>\n\t\t<p class=\"indented\">\n\t\t\t<NcCheckboxRadioSwitch id=\"caldavSendEventRemindersToSharedGroupMembers\"\n\t\t\t\t:checked.sync=\"sendEventRemindersToSharedUsers\"\n\t\t\t\ttype=\"switch\"\n\t\t\t\t:disabled=\"!sendEventReminders\">\n\t\t\t\t{{ $t('dav', 'Send reminder notifications to calendar sharees as well' ) }}\n\t\t\t</NcCheckboxRadioSwitch>\n\t\t\t<em>\n\t\t\t\t{{ $t('dav', 'Reminders are always sent to organizers and attendees.' ) }}\n\t\t\t</em>\n\t\t</p>\n\t\t<p class=\"indented\">\n\t\t\t<NcCheckboxRadioSwitch id=\"caldavSendEventRemindersPush\"\n\t\t\t\t:checked.sync=\"sendEventRemindersPush\"\n\t\t\t\ttype=\"switch\"\n\t\t\t\t:disabled=\"!sendEventReminders\">\n\t\t\t\t{{ $t('dav', 'Enable notifications for events via push') }}\n\t\t\t</NcCheckboxRadioSwitch>\n\t\t</p>\n\t</NcSettingsSection>\n</template>\n\n<script>\nimport axios from '@nextcloud/axios'\nimport { generateUrl } from '@nextcloud/router'\nimport { loadState } from '@nextcloud/initial-state'\nimport NcSettingsSection from '@nextcloud/vue/dist/Components/NcSettingsSection.js'\nimport NcCheckboxRadioSwitch from '@nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js'\n\nconst userSyncCalendarsDocUrl = loadState('dav', 'userSyncCalendarsDocUrl', '#')\n\nexport default {\n\tname: 'CalDavSettings',\n\tcomponents: {\n\t\tNcCheckboxRadioSwitch,\n\t\tNcSettingsSection,\n\t},\n\tdata() {\n\t\treturn {\n\t\t\tuserSyncCalendarsDocUrl,\n\t\t}\n\t},\n\tcomputed: {\n\t\thint() {\n\t\t\tconst translated = this.$t(\n\t\t\t\t'dav',\n\t\t\t\t'Also install the {calendarappstoreopen}Calendar app{linkclose}, or {calendardocopen}connect your desktop & mobile for syncing ↗{linkclose}.',\n\t\t\t)\n\t\t\treturn translated\n\t\t\t\t.replace('{calendarappstoreopen}', '<a target=\"_blank\" href=\"../apps/office/calendar\">')\n\t\t\t\t.replace('{calendardocopen}', `<a target=\"_blank\" href=\"${userSyncCalendarsDocUrl}\" rel=\"noreferrer noopener\">`)\n\t\t\t\t.replace(/\\{linkclose\\}/g, '</a>')\n\t\t},\n\t\tsendInvitationsHelpText() {\n\t\t\tconst translated = this.$t('dav', 'Please make sure to properly set up {emailopen}the email server{linkclose}.')\n\t\t\treturn translated\n\t\t\t\t.replace('{emailopen}', '<a href=\"../admin#mail_general_settings\">')\n\t\t\t\t.replace('{linkclose}', '</a>')\n\t\t},\n\t\tsendEventRemindersHelpText() {\n\t\t\tconst translated = this.$t('dav', 'Please make sure to properly set up {emailopen}the email server{linkclose}.')\n\t\t\treturn translated\n\t\t\t\t.replace('{emailopen}', '<a href=\"../admin#mail_general_settings\">')\n\t\t\t\t.replace('{linkclose}', '</a>')\n\t\t},\n\t},\n\twatch: {\n\t\tgenerateBirthdayCalendar(value) {\n\t\t\tconst baseUrl = value ? '/apps/dav/enableBirthdayCalendar' : '/apps/dav/disableBirthdayCalendar'\n\t\t\taxios.post(generateUrl(baseUrl))\n\t\t},\n\t\tsendInvitations(value) {\n\t\t\tOCP.AppConfig.setValue(\n\t\t\t\t'dav',\n\t\t\t\t'sendInvitations',\n\t\t\t\tvalue ? 'yes' : 'no'\n\t\t\t)\n\t\t},\n\t\tsendEventReminders(value) {\n\t\t\tOCP.AppConfig.setValue('dav', 'sendEventReminders', value ? 'yes' : 'no')\n\t\t},\n\t\tsendEventRemindersToSharedUsers(value) {\n\t\t\tOCP.AppConfig.setValue(\n\t\t\t\t'dav',\n\t\t\t\t'sendEventRemindersToSharedUsers',\n\t\t\t\tvalue ? 'yes' : 'no'\n\t\t\t)\n\t\t},\n\t\tsendEventRemindersPush(value) {\n\t\t\tOCP.AppConfig.setValue('dav', 'sendEventRemindersPush', value ? 'yes' : 'no')\n\t\t},\n\t},\n}\n<\/script>\n\n<style scoped>\n\t.indented {\n\t\tpadding-left: 28px;\n\t}\n\t/** Use deep selector to affect v-html */\n\t* >>> a {\n\t\ttext-decoration: underline;\n\t}\n\t.settings-hint {\n\t\tmargin-top: -.2em;\n\t\tmargin-bottom: 1em;\n\t\topacity: .7;\n\t}\n</style>\n"],sourceRoot:""}]);const d=i}},n={};function a(t){var s=n[t];if(void 0!==s)return s.exports;var r=n[t]={id:t,loaded:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=e,t=[],a.O=(e,n,s,r)=>{if(!n){var i=1/0;for(c=0;c<t.length;c++){n=t[c][0],s=t[c][1],r=t[c][2];for(var d=!0,o=0;o<n.length;o++)(!1&r||i>=r)&&Object.keys(a.O).every((t=>a.O[t](n[o])))?n.splice(o--,1):(d=!1,r<i&&(i=r));if(d){t.splice(c--,1);var l=s();void 0!==l&&(e=l)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[n,s,r]},a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.e=()=>Promise.resolve(),a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),a.j=1952,(()=>{a.b=document.baseURI||self.location.href;var t={1952:0};a.O.j=e=>0===t[e];var e=(e,n)=>{var s,r,i=n[0],d=n[1],o=n[2],l=0;if(i.some((e=>0!==t[e]))){for(s in d)a.o(d,s)&&(a.m[s]=d[s]);if(o)var c=o(a)}for(e&&e(n);l<i.length;l++)r=i[l],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(c)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),a.nc=void 0;var s=a.O(void 0,[4208],(()=>a(19143)));s=a.O(s)})();
//# sourceMappingURL=dav-settings-admin-caldav.js.map?v=55006e1f8b088efaa4a0