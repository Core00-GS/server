(()=>{"use strict";var e,r,n,o={96363:(e,r,n)=>{var o=n(85471),i=n(21777),a=n(53334),l=n(85168),s=n(32981),d=n(88837),c=n(9518);const u={name:"TwitterIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var p=n(14486);const f=(0,p.A)(u,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon twitter-icon",attrs:{"aria-hidden":!t.title||null,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports,h={name:"FacebookIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},g=(0,p.A)(h,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon facebook-icon",attrs:{"aria-hidden":!t.title||null,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports;var C=n(73662);const m={name:"ClipboardIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},b=(0,p.A)(m,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon clipboard-icon",attrs:{"aria-hidden":!t.title||null,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports,v={name:"PersonalSettings",components:{NcButton:c.A,NcSettingsSection:d.A,Twitter:f,Facebook:g,Web:C.A,Clipboard:b},data:()=>({color:(0,s.C)("federatedfilesharing","color"),textColor:(0,s.C)("federatedfilesharing","textColor"),logoPath:(0,s.C)("federatedfilesharing","logoPath"),reference:(0,s.C)("federatedfilesharing","reference"),cloudId:(0,s.C)("federatedfilesharing","cloudId"),docUrlFederated:(0,s.C)("federatedfilesharing","docUrlFederated"),showHtml:!1,isCopied:!1}),computed:{messageWithURL(){return t("federatedfilesharing","Share with me through my #Nextcloud Federated Cloud ID, see {url}",{url:this.reference})},messageWithoutURL:()=>t("federatedfilesharing","Share with me through my #Nextcloud Federated Cloud ID"),shareDiasporaUrl(){return"https://share.diasporafoundation.org/?title=".concat(encodeURIComponent(this.messageWithoutURL),"&url=").concat(encodeURIComponent(this.reference))},shareTwitterUrl(){return"https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(this.messageWithURL))},shareFacebookUrl(){return"https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(this.reference))},logoPathAbsolute(){return window.location.protocol+"//"+window.location.host+this.logoPath},backgroundStyle(){return"padding:10px;background-color:".concat(this.color,";color:").concat(this.textColor,";border-radius:3px;padding-left:4px;")},linkStyle(){return"background-image:url(".concat(this.logoPathAbsolute,");width:50px;height:30px;position:relative;top:8px;background-size:contain;display:inline-block;background-repeat:no-repeat; background-position: center center;")},htmlCode(){return'<a target="_blank" rel="noreferrer noopener" href="'.concat(this.reference,'" style="').concat(this.backgroundStyle,'">\n\t<span style="').concat(this.linkStyle,'"></span>\n\t').concat(t("federatedfilesharing","Share with me via Nextcloud"),"\n</a>")},copyLinkTooltip(){return this.isCopied?t("federatedfilesharing","Cloud ID copied to the clipboard"):t("federatedfilesharing","Copy to clipboard")}},methods:{async copyCloudId(){navigator.clipboard?(await navigator.clipboard.writeText(this.cloudId),this.isCopied=!0,(0,l.Te)(t("federatedfilesharing","Copied!")),this.$refs.clipboard.$el.focus()):(0,l.Qg)(t("federatedfilesharing","Clipboard is not available"))},goTo(t){window.location.href=t}}};var A=n(85072),y=n.n(A),w=n(97825),_=n.n(w),k=n(77659),x=n.n(k),S=n(55056),T=n.n(S),B=n(10540),I=n.n(B),N=n(41113),U=n.n(N),F=n(28051),O={};O.styleTagTransform=U(),O.setAttributes=T(),O.insert=x().bind(null,"head"),O.domAPI=_(),O.insertStyleElement=I(),y()(F.A,O),F.A&&F.A.locals&&F.A.locals;const z=(0,p.A)(v,(function(){var t=this,e=t._self._c;return e("NcSettingsSection",{attrs:{name:t.t("federatedfilesharing","Federated Cloud"),description:t.t("federatedfilesharing","You can share with anyone who uses a Nextcloud server or other Open Cloud Mesh (OCM) compatible servers and services! Just put their Federated Cloud ID in the share dialog. It looks like person@cloud.example.com"),"doc-url":t.docUrlFederated}},[e("p",{staticClass:"cloud-id-text"},[t._v("\n\t\t"+t._s(t.t("federatedfilesharing","Your Federated Cloud ID:"))+"\n\t\t"),e("strong",{attrs:{id:"cloudid"}},[t._v(t._s(t.cloudId))]),t._v(" "),e("NcButton",{ref:"clipboard",staticClass:"clipboard",attrs:{title:t.copyLinkTooltip,"aria-label":t.copyLinkTooltip,type:"tertiary-no-background"},on:{click:function(e){return e.preventDefault(),t.copyCloudId.apply(null,arguments)}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Clipboard",{attrs:{size:20}})]},proxy:!0}])})],1),t._v(" "),e("p",{staticClass:"social-button"},[t._v("\n\t\t"+t._s(t.t("federatedfilesharing","Share it so your friends can share files with you:"))),e("br"),t._v(" "),e("NcButton",{on:{click:function(e){return t.goTo(t.shareFacebookUrl)}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Facebook",{attrs:{size:20}})]},proxy:!0}])},[t._v("\n\t\t\t"+t._s(t.t("federatedfilesharing","Facebook"))+"\n\t\t\t")]),t._v(" "),e("NcButton",{on:{click:function(e){return t.goTo(t.shareTwitterUrl)}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Twitter",{attrs:{size:20}})]},proxy:!0}])},[t._v("\n\t\t\t"+t._s(t.t("federatedfilesharing","Twitter"))+"\n\t\t\t")]),t._v(" "),e("NcButton",{on:{click:function(e){return t.goTo(t.shareDiasporaUrl)}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("svg",{attrs:{width:"20",height:"20",viewBox:"-10 -5 1034 1034",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{fill:"currentColor",d:"M502 197q-96 0-96.5 1.5t-1.5 137-1.5 138-2 2.5T266 432.5 132.5 390t-30 94T74 578l232 77q21 8 21 10t-79.5 117.5T168 899t79.5 56.5T328 1011t81-110 82-110 41 55l83 115q43 60 44 60t79.5-58 79-59-76-112.5-76-113.5T795 632.5t129.5-44-28-94T867 400t-128 42-128.5 43-2.5-7.5-1-38.5l-3-108q-4-133-5-133.5t-97-.5z"}})])]},proxy:!0}])},[t._v("\n\t\t\t"+t._s(t.t("federatedfilesharing","Diaspora"))+"\n\t\t\t")]),t._v(" "),e("NcButton",{staticClass:"social-button__website-button",on:{click:function(e){t.showHtml=!t.showHtml}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Web",{attrs:{size:20}})]},proxy:!0}])},[t._v("\n\t\t\t"+t._s(t.t("federatedfilesharing","Add to your website"))+"\n\t\t")])],1),t._v(" "),t.showHtml?[e("p",{staticStyle:{margin:"10px 0"}},[e("a",{style:t.backgroundStyle,attrs:{target:"_blank",rel:"noreferrer noopener",href:t.reference}},[e("span",{style:t.linkStyle}),t._v("\n\t\t\t\t"+t._s(t.t("federatedfilesharing","Share with me via Nextcloud"))+"\n\t\t\t")])]),t._v(" "),e("p",[t._v("\n\t\t\t"+t._s(t.t("federatedfilesharing","HTML Code:"))+"\n\t\t\t"),e("br"),t._v(" "),e("pre",[t._v(t._s(t.htmlCode))])])]:t._e()],2)}),[],!1,null,"96d5edde",null).exports;n.nc=btoa((0,i.do)()),o.Ay.mixin({methods:{t:a.Tl}}),(new(o.Ay.extend(z))).$mount("#vue-personal-federated")},28051:(t,e,r)=>{r.d(e,{A:()=>l});var n=r(71354),o=r.n(n),i=r(76314),a=r.n(i)()(o());a.push([t.id,".social-button[data-v-96d5edde]{margin-top:.5rem}.social-button button[data-v-96d5edde]{display:inline-flex;margin-left:.5rem;margin-top:1rem}.social-button__website-button[data-v-96d5edde]{width:min(100%,400px) !important}.cloud-id-text[data-v-96d5edde]{display:flex;align-items:center;flex-wrap:wrap}.cloud-id-text button[data-v-96d5edde]{display:inline-flex}pre[data-v-96d5edde]{margin-top:0;white-space:pre-wrap}#cloudid[data-v-96d5edde]{margin-left:.25rem}","",{version:3,sources:["webpack://./apps/federatedfilesharing/src/components/PersonalSettings.vue"],names:[],mappings:"AACA,gCACC,gBAAA,CACA,uCACC,mBAAA,CACA,iBAAA,CACA,eAAA,CAED,gDACC,gCAAA,CAGF,gCACC,YAAA,CACA,kBAAA,CACA,cAAA,CACA,uCACC,mBAAA,CAGF,qBACC,YAAA,CACA,oBAAA,CAED,0BACC,kBAAA",sourcesContent:["\n.social-button {\n\tmargin-top: 0.5rem;\n\tbutton {\n\t\tdisplay: inline-flex;\n\t\tmargin-left: 0.5rem;\n\t\tmargin-top: 1rem;\n\t}\n\t&__website-button {\n\t\twidth: min(100%, 400px) !important;\n\t}\n}\n.cloud-id-text {\n\tdisplay: flex;\n\talign-items: center;\n\tflex-wrap: wrap;\n\tbutton {\n\t\tdisplay: inline-flex;\n\t}\n}\npre {\n\tmargin-top: 0;\n\twhite-space: pre-wrap;\n}\n#cloudid {\n\tmargin-left: 0.25rem;\n}\n"],sourceRoot:""}]);const l=a}},i={};function a(t){var e=i[t];if(void 0!==e)return e.exports;var r=i[t]={id:t,loaded:!1,exports:{}};return o[t].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=o,e=[],a.O=(t,r,n,o)=>{if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],n=e[c][1],o=e[c][2];for(var l=!0,s=0;s<r.length;s++)(!1&o||i>=o)&&Object.keys(a.O).every((t=>a.O[t](r[s])))?r.splice(s--,1):(l=!1,o<i&&(i=o));if(l){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,n,o]},a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},a.f={},a.e=t=>Promise.all(Object.keys(a.f).reduce(((e,r)=>(a.f[r](t,e),e)),[])),a.u=t=>t+"-"+t+".js?v="+{1110:"2909496e7e35d6258214",8902:"17934a2895db8c736979"}[t],a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r={},n="nextcloud:",a.l=(t,e,o,i)=>{if(r[t])r[t].push(e);else{var l,s;if(void 0!==o)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==n+o){l=u;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",n+o),l.src=t),r[t]=[e];var p=(e,n)=>{l.onerror=l.onload=null,clearTimeout(f);var o=r[t];if(delete r[t],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((t=>t(n))),e)return e(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}},a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),a.j=7949,(()=>{var t;a.g.importScripts&&(t=a.g.location+"");var e=a.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!t||!/^http(s?):/.test(t));)t=r[n--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=t})(),(()=>{a.b=document.baseURI||self.location.href;var t={7949:0};a.f.j=(e,r)=>{var n=a.o(t,e)?t[e]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=t[e]=[r,o]));r.push(n[2]=o);var i=a.p+a.u(e),l=new Error;a.l(i,(r=>{if(a.o(t,e)&&(0!==(n=t[e])&&(t[e]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,n[1](l)}}),"chunk-"+e,e)}},a.O.j=e=>0===t[e];var e=(e,r)=>{var n,o,i=r[0],l=r[1],s=r[2],d=0;if(i.some((e=>0!==t[e]))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(s)var c=s(a)}for(e&&e(r);d<i.length;d++)o=i[d],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(c)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),a.nc=void 0;var l=a.O(void 0,[4208],(()=>a(96363)));l=a.O(l)})();
//# sourceMappingURL=federatedfilesharing-vue-settings-personal.js.map?v=03ccae1625ff72e846ab