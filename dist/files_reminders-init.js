/*! For license information please see files_reminders-init.js.LICENSE.txt */
(()=>{"use strict";var e,t,r,n={24539:(e,t,r)=>{var n=r(78791),i=r(53334);const o="set-reminder-menu",a=new n.hY({id:o,displayName:()=>(0,i.Tl)("files_reminders","Set reminder"),iconSvgInline:()=>'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-alarm" viewBox="0 0 24 24"><path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M12.5,8H11V14L15.75,16.85L16.5,15.62L12.5,13.25V8M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72Z" /></svg>',enabled:()=>!0,exec:async()=>null,order:20});var s=r(85471),d=r(61338),l=r(26287),m=r(63814);const c=async(e,t)=>{const r=(0,m.KT)("/apps/files_reminders/api/v1/{fileId}",{fileId:e});return(await l.A.put(r,{dueDate:t.toISOString()})).data.ocs.data};var u,f=r(19231);!function(e){e.LaterToday="later-today",e.Tomorrow="tomorrow",e.ThisWeekend="this-weekend",e.NextWeek="next-week"}(u||(u={}));const A=e=>({[u.LaterToday]:()=>{const e=(0,f.A)(),t=(0,f.A)().startOf("day").add(18,"hour"),r=t.clone().subtract(1,"hour");return e.isSameOrAfter(r)?null:t.toDate()},[u.Tomorrow]:()=>(0,f.A)().add(1,"day").startOf("day").add(8,"hour").toDate(),[u.ThisWeekend]:()=>{const e=(0,f.A)();return[5,6,7].includes(e.isoWeekday())?null:(0,f.A)().startOf("isoWeek").add(5,"day").add(8,"hour").toDate()},[u.NextWeek]:()=>7===(0,f.A)().isoWeekday()?null:(0,f.A)().startOf("isoWeek").add(1,"week").add(8,"hour").toDate()}[e]()),p=()=>{const e=(0,f.A)().get("hour");return(0,f.A)().startOf("day").add(e+2,"hour").toDate()},h=e=>{let t={hour:"numeric",minute:"2-digit"};const r=(0,f.A)(e),n=(0,f.A)();return r.isSame(n,"date")||(t={...t,weekday:"short"}),r.isSame(n,"week")||(t={...t,month:"short",day:"numeric"}),e.toLocaleString((0,i.lO)(),t)},g=e=>e.toLocaleString((0,i.lO)(),{weekday:"long",hour:"numeric",minute:"2-digit",month:"long",day:"numeric"}),v=new n.hY({id:"clear-reminder",displayName:()=>(0,i.Tl)("files_reminders","Clear reminder"),title:e=>{const t=e.at(0),r=new Date(t.attributes["reminder-due-date"]);return"".concat((0,i.Tl)("files_reminders","Clear reminder")," – ").concat(g(r))},iconSvgInline:()=>'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-alarm-off" viewBox="0 0 24 24"><path d="M8,3.28L6.6,1.86L5.74,2.57L7.16,4M16.47,18.39C15.26,19.39 13.7,20 12,20A7,7 0 0,1 5,13C5,11.3 5.61,9.74 6.61,8.53M2.92,2.29L1.65,3.57L3,4.9L1.87,5.83L3.29,7.25L4.4,6.31L5.2,7.11C3.83,8.69 3,10.75 3,13A9,9 0 0,0 12,22C14.25,22 16.31,21.17 17.89,19.8L20.09,22L21.36,20.73L3.89,3.27L2.92,2.29M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72M12,6A7,7 0 0,1 19,13C19,13.84 18.84,14.65 18.57,15.4L20.09,16.92C20.67,15.73 21,14.41 21,13A9,9 0 0,0 12,4C10.59,4 9.27,4.33 8.08,4.91L9.6,6.43C10.35,6.16 11.16,6 12,6Z" /></svg>',enabled:e=>{if(1!==e.length)return!1;const t=e.at(0).attributes["reminder-due-date"];return Boolean(t)},async exec(e){if(e.fileid)try{return await(async e=>{const t=(0,m.KT)("/apps/files_reminders/api/v1/{fileId}",{fileId:e});return(await l.A.delete(t)).data.ocs.data})(e.fileid),s.Ay.set(e.attributes,"reminder-due-date",""),(0,d.Ic)("files:node:updated",e),!0}catch(e){return!1}return null},order:19});var b=r(85168);const C=(0,r(53529).YK)().setApp("files_reminders").detectUser().build();var y=r(85072),w=r.n(y),T=r(97825),_=r.n(T),S=r(77659),x=r.n(S),L=r(55056),D=r.n(L),k=r(10540),N=r.n(k),P=r(41113),I=r.n(P),O=r(19672),M={};M.styleTagTransform=I(),M.setAttributes=D(),M.insert=x().bind(null,"head"),M.domAPI=_(),M.insertStyleElement=N(),w()(O.A,M),O.A&&O.A.locals&&O.A.locals;const E={dateTimePreset:u.LaterToday,label:(0,i.Tl)("files_reminders","Later today"),ariaLabel:(0,i.Tl)("files_reminders","Set reminder for later today"),dateString:"",verboseDateString:""},B={dateTimePreset:u.Tomorrow,label:(0,i.Tl)("files_reminders","Tomorrow"),ariaLabel:(0,i.Tl)("files_reminders","Set reminder for tomorrow"),dateString:"",verboseDateString:""},V={dateTimePreset:u.ThisWeekend,label:(0,i.Tl)("files_reminders","This weekend"),ariaLabel:(0,i.Tl)("files_reminders","Set reminder for this weekend"),dateString:"",verboseDateString:""},j={dateTimePreset:u.NextWeek,label:(0,i.Tl)("files_reminders","Next week"),ariaLabel:(0,i.Tl)("files_reminders","Set reminder for next week"),dateString:"",verboseDateString:""};[E,B,V,j].forEach((e=>{const t=A(e.dateTimePreset);t&&(e.dateString=h(t),e.verboseDateString=g(t),setInterval((()=>{const t=A(e.dateTimePreset);t&&(e.dateString=h(t),e.verboseDateString=g(t))}),18e5))}));const R=[E,B,V,j].map((e=>new n.hY({id:"set-reminder-".concat(e.dateTimePreset),displayName:()=>"".concat(e.label," – ").concat(e.dateString),title:()=>"".concat(e.ariaLabel," – ").concat(e.verboseDateString),iconSvgInline:()=>"<svg></svg>",enabled:()=>Boolean(A(e.dateTimePreset)),parent:o,async exec(t){if(!t.fileid)return C.error("Failed to set reminder, missing file id"),(0,b.Qg)((0,i.Tl)("files_reminders","Failed to set reminder")),null;try{const r=A(e.dateTimePreset);await c(t.fileid,r),s.Ay.set(t.attributes,"reminder-due-date",r.toISOString()),(0,d.Ic)("files:node:updated",t),(0,b.Te)((0,i.Tl)("files_reminders",'Reminder set for "{fileName}"',{fileName:t.basename}))}catch(e){C.error("Failed to set reminder",{error:e}),(0,b.Qg)((0,i.Tl)("files_reminders","Failed to set reminder"))}return null},order:21})));var W=r(54332),G=r(4604),H=r(31126),Y=r(71650),F=r(52201);const U=s.Ay.extend({name:"SetCustomReminderModal",components:{NcButton:W.A,NcDateTime:G.A,NcDateTimePickerNative:H.A,NcModal:Y.A,NcNoteCard:F.A},data:()=>({node:void 0,opened:!1,isValid:!0,customDueDate:p(),nowDate:new Date}),computed:{fileId(){return this.node.fileid},fileName(){return this.node.basename},title(){return(0,i.Tl)("files_reminders",'Set reminder for "{fileName}"',{fileName:this.fileName})},label:()=>(0,i.Tl)("files_reminders","Set reminder at custom date & time"),clearAriaLabel:()=>(0,i.Tl)("files_reminders","Clear reminder")},methods:{t:i.Tl,getDateString:h,async open(e){this.node=e,this.isValid=!0,this.opened=!0,this.customDueDate=p(),this.nowDate=new Date,setTimeout((()=>{const e=document.getElementById("set-custom-reminder");e.focus(),e.showPicker()}),300)},async setCustom(){if(this.customDueDate instanceof Date&&!isNaN(this.customDueDate))try{await c(this.fileId,this.customDueDate),s.Ay.set(this.node.attributes,"reminder-due-date",this.customDueDate.toISOString()),(0,d.Ic)("files:node:updated",this.node),(0,b.Te)((0,i.Tl)("files_reminders",'Reminder set for "{fileName}"',{fileName:this.fileName})),this.onClose()}catch(e){C.error("Failed to set reminder",{error:e}),(0,b.Qg)((0,i.Tl)("files_reminders","Failed to set reminder"))}else(0,b.Qg)((0,i.Tl)("files_reminders","Please choose a valid date & time"))},onClose(){this.opened=!1,this.$emit("close")},onInput(){const e=document.getElementById("set-custom-reminder");this.isValid=e.checkValidity()}}});var Q=r(68217),$={};$.styleTagTransform=I(),$.setAttributes=D(),$.insert=x().bind(null,"head"),$.domAPI=_(),$.insertStyleElement=N(),w()(Q.A,$),Q.A&&Q.A.locals&&Q.A.locals;const z=(0,r(14486).A)(U,(function(){var e=this,t=e._self._c;return e._self._setupProxy,e.opened?t("NcModal",{attrs:{"out-transition":!0,size:"small"},on:{close:e.onClose}},[t("form",{staticClass:"custom-reminder-modal",on:{submit:function(t){return t.preventDefault(),e.setCustom.apply(null,arguments)}}},[t("h2",{staticClass:"custom-reminder-modal__title"},[e._v("\n\t\t\t"+e._s(e.title)+"\n\t\t")]),e._v(" "),t("NcDateTimePickerNative",{attrs:{id:"set-custom-reminder",label:e.label,min:e.nowDate,required:!0,type:"datetime-local"},on:{input:e.onInput},model:{value:e.customDueDate,callback:function(t){e.customDueDate=t},expression:"customDueDate"}}),e._v(" "),e.isValid?t("NcNoteCard",{attrs:{type:"info"}},[e._v("\n\t\t\t"+e._s(e.t("files_reminders","We will remind you of this file"))+"\n\t\t\t"),t("NcDateTime",{attrs:{timestamp:e.customDueDate}})],1):t("NcNoteCard",{attrs:{type:"error"}},[e._v("\n\t\t\t"+e._s(e.t("files_reminders","Please choose a valid date & time"))+"\n\t\t")]),e._v(" "),t("div",{staticClass:"custom-reminder-modal__buttons"},[t("NcButton",{on:{click:e.onClose}},[e._v("\n\t\t\t\t"+e._s(e.t("files_reminders","Cancel"))+"\n\t\t\t")]),e._v(" "),t("NcButton",{attrs:{disabled:!e.isValid,"native-type":"submit",type:"primary"}},[e._v("\n\t\t\t\t"+e._s(e.t("files_reminders","Set reminder"))+"\n\t\t\t")])],1)],1)]):e._e()}),[],!1,null,"0105318b",null).exports,K=s.Ay.extend(z),Z=document.createElement("div");Z.id="set-custom-reminder-modal",document.body.appendChild(Z);const q=new K({name:"SetCustomReminderModal",el:Z}),J=new n.hY({id:"set-reminder-custom",displayName:()=>(0,i.Tl)("files_reminders","Set custom reminder"),title:()=>(0,i.Tl)("files_reminders","Set reminder at custom date & time"),iconSvgInline:()=>'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-calendar-clock" viewBox="0 0 24 24"><path d="M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z" /></svg>',enabled:()=>!0,parent:o,exec:async e=>((async e=>{q.open(e),new Promise((e=>{q.$on("close",e)}))})(e),null),order:22});(0,n.Yc)("nc:reminder-due-date",{nc:"http://nextcloud.org/ns"}),(0,n.Gg)(v),(0,n.Gg)(a),(0,n.Gg)(J),R.forEach((e=>(0,n.Gg)(e)))},19672:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(71354),i=r.n(n),o=r(76314),a=r.n(o)()(i());a.push([e.id,'.files-list__row-action-set-reminder-custom{margin-top:13px;position:relative}.files-list__row-action-set-reminder-custom::before{content:"";margin:3px 10px 3px 15px;border-bottom:1px solid var(--color-border-dark);cursor:default;display:flex;height:0;position:absolute;left:0;right:0;top:-10px}',"",{version:3,sources:["webpack://./apps/files_reminders/src/actions/setReminderSuggestionActions.scss"],names:[],mappings:"AAuBA,4CACC,eAAA,CACA,iBAAA,CAEA,oDACC,UAAA,CACA,wBAAA,CACA,gDAAA,CACA,cAAA,CACA,YAAA,CACA,QAAA,CACA,iBAAA,CACA,MAAA,CACA,OAAA,CACA,SAAA",sourcesContent:['/**\n * @copyright Copyright (c) 2023 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license AGPL-3.0-or-later\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n // TODO: remove when/if the actions API supports a separator\n // This the last preset action, so we need to add a separator\n.files-list__row-action-set-reminder-custom {\n\tmargin-top: 13px;\n\tposition: relative;\n\n\t&::before {\n\t\tcontent: "";\n\t\tmargin: 3px 10px 3px 15px;\n\t\tborder-bottom: 1px solid var(--color-border-dark);\n\t\tcursor: default;\n\t\tdisplay: flex;\n\t\theight: 0;\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\tright: 0;\n\t\ttop: -10px;\n\t}\n}\n'],sourceRoot:""}]);const s=a},68217:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(71354),i=r.n(n),o=r(76314),a=r.n(o)()(i());a.push([e.id,".custom-reminder-modal[data-v-0105318b]{margin:30px}.custom-reminder-modal__title[data-v-0105318b]{font-size:16px;line-height:2em}.custom-reminder-modal__buttons[data-v-0105318b]{display:flex;justify-content:flex-end;margin-top:30px}.custom-reminder-modal__buttons button[data-v-0105318b]{margin-left:10px}","",{version:3,sources:["webpack://./apps/files_reminders/src/components/SetCustomReminderModal.vue"],names:[],mappings:"AACA,wCACC,WAAA,CAEA,+CACC,cAAA,CACA,eAAA,CAGD,iDACC,YAAA,CACA,wBAAA,CACA,eAAA,CAEA,wDACC,gBAAA",sourcesContent:["\n.custom-reminder-modal {\n\tmargin: 30px;\n\n\t&__title {\n\t\tfont-size: 16px;\n\t\tline-height: 2em;\n\t}\n\n\t&__buttons {\n\t\tdisplay: flex;\n\t\tjustify-content: flex-end;\n\t\tmargin-top: 30px;\n\n\t\tbutton {\n\t\t\tmargin-left: 10px;\n\t\t}\n\t}\n}\n"],sourceRoot:""}]);const s=a}},i={};function o(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}o.m=n,e=[],o.O=(t,r,n,i)=>{if(!r){var a=1/0;for(m=0;m<e.length;m++){r=e[m][0],n=e[m][1],i=e[m][2];for(var s=!0,d=0;d<r.length;d++)(!1&i||a>=i)&&Object.keys(o.O).every((e=>o.O[e](r[d])))?r.splice(d--,1):(s=!1,i<a&&(a=i));if(s){e.splice(m--,1);var l=n();void 0!==l&&(t=l)}}return t}i=i||0;for(var m=e.length;m>0&&e[m-1][2]>i;m--)e[m]=e[m-1];e[m]=[r,n,i]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[])),o.u=e=>e+"-"+e+".js?v="+{4065:"8ce35ae6dd9d1ce3481a",4254:"96661b9f421b07ce7189"}[e],o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="nextcloud:",o.l=(e,n,i,a)=>{if(t[e])t[e].push(n);else{var s,d;if(void 0!==i)for(var l=document.getElementsByTagName("script"),m=0;m<l.length;m++){var c=l[m];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==r+i){s=c;break}}s||(d=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",r+i),s.src=e),t[e]=[n];var u=(r,n)=>{s.onerror=s.onload=null,clearTimeout(f);var i=t[e];if(delete t[e],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(n))),r)return r(n)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=u.bind(null,s.onerror),s.onload=u.bind(null,s.onload),d&&document.head.appendChild(s)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.j=9735,(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{o.b=document.baseURI||self.location.href;var e={9735:0};o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise(((r,i)=>n=e[t]=[r,i]));r.push(n[2]=i);var a=o.p+o.u(t),s=new Error;o.l(a,(r=>{if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,n[1](s)}}),"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,r)=>{var n,i,a=r[0],s=r[1],d=r[2],l=0;if(a.some((t=>0!==e[t]))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(d)var m=d(o)}for(t&&t(r);l<a.length;l++)i=a[l],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(m)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),o.nc=void 0;var a=o.O(void 0,[4208],(()=>o(24539)));a=o.O(a)})();
//# sourceMappingURL=files_reminders-init.js.map?v=2d6d2f479926e7940312