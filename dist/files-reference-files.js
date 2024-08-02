/*! For license information please see files-reference-files.js.LICENSE.txt */
(()=>{"use strict";var e,t,i,n={50777:(e,t,i)=>{var n=i(85471),r=i(53334),l=(i(97306),i(40708)),o=(i(7159),i(63814)),a=i(43627),s=i.n(a),c=i(96763);const d={name:"ReferenceFileWidget",props:{richObject:{type:Object,required:!0},accessible:{type:Boolean,default:!0}},data(){return{previewUrl:window.OC.MimeType.getIconUrl(this.richObject.mimetype)}},computed:{fileSize(){return window.OC.Util.humanFileSize(this.richObject.size)},fileMtime(){return window.OC.Util.relativeModifiedDate(1e3*this.richObject.mtime)},filePath(){return s().dirname(this.richObject.path)},filePreview(){return this.previewUrl?{backgroundImage:"url("+this.previewUrl+")"}:{backgroundImage:"url("+window.OC.MimeType.getIconUrl(this.richObject.mimetype)+")"}},filePreviewClass(){return this.previewUrl?"widget-file--image--preview":"widget-file--image--icon"}},mounted(){if(this.richObject["preview-available"]){const e=(0,o.Jv)("/core/preview?fileId={fileId}&x=250&y=250",{fileId:this.richObject.id}),t=new Image;t.onload=()=>{this.previewUrl=e},t.onerror=e=>{c.error("could not load recommendation preview",e)},t.src=e}},methods:{navigate(){OCA.Viewer&&-1!==OCA.Viewer.mimetypes.indexOf(this.richObject.mimetype)?OCA.Viewer.open({path:this.richObject.path}):window.location=this.richObject.link}}};var A=i(85072),p=i.n(A),f=i(97825),u=i.n(f),v=i(77659),h=i.n(v),g=i(55056),m=i.n(g),w=i(10540),C=i.n(w),b=i(41113),y=i.n(b),k=i(75568),x={};x.styleTagTransform=y(),x.setAttributes=m(),x.insert=h().bind(null,"head"),x.domAPI=u(),x.insertStyleElement=C(),p()(k.A,x),k.A&&k.A.locals&&k.A.locals;var O=i(14486);const j=(0,O.A)(d,(function(){var e=this,t=e._self._c;return e.accessible?t("a",{staticClass:"widget-file",attrs:{href:e.richObject.link},on:{click:function(t){return t.preventDefault(),e.navigate.apply(null,arguments)}}},[t("div",{staticClass:"widget-file--image",class:e.filePreviewClass,style:e.filePreview}),e._v(" "),t("div",{staticClass:"widget-file--details"},[t("p",{staticClass:"widget-file--title"},[e._v(e._s(e.richObject.name))]),e._v(" "),t("p",{staticClass:"widget-file--description"},[e._v(e._s(e.fileSize)),t("br"),e._v(e._s(e.fileMtime))]),e._v(" "),t("p",{staticClass:"widget-file--link"},[e._v(e._s(e.filePath))])])]):t("div",{staticClass:"widget-file widget-file--no-access"},[t("div",{staticClass:"widget-file--image widget-file--image--icon icon-folder"}),e._v(" "),t("div",{staticClass:"widget-file--details"},[t("p",{staticClass:"widget-file--title"},[e._v("\n\t\t\t"+e._s(e.t("files","File cannot be accessed"))+"\n\t\t")]),e._v(" "),t("p",{staticClass:"widget-file--description"},[e._v("\n\t\t\t"+e._s(e.t("files","You might not have have permissions to view it, ask the sender to share it"))+"\n\t\t")])])])}),[],!1,null,"3f729da0",null).exports;var _=i(11873);const P=(0,n.pM)({name:"FileReferencePickerElement",components:{FilePicker:_.FilePickerVue},props:{providerId:{type:String,required:!0},accessible:{type:Boolean,default:!1}},computed:{containerId:()=>"filepicker-".concat(Math.random().toString(36).slice(7)),filepickerOptions(){return{allowPickDirectory:!1,buttons:this.buttonFactory,container:"#".concat(this.containerId),multiselect:!1,name:(0,r.Tl)("files","Select file or folder to link to")}}},methods:{t:r.Tl,buttonFactory(e){const t=[];return 0===e.length?t.push({label:(0,r.Tl)("files","Choose file"),type:"tertiary",callback:this.onClose}):t.push({label:(0,r.Tl)("files","Choose {file}",{file:e[0].basename}),type:"primary",callback:this.onClose}),t},onClose(e){void 0===e||0===e.length?this.$emit("cancel"):this.onSubmit(e[0])},onSubmit(e){const t=new URL(window.location.href);t.pathname=(0,o.Jv)("/f/{fileId}",{fileId:e.fileid}),t.search="",this.$emit("submit",t.href)}}}),I=(0,O.A)(P,(function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{attrs:{id:e.containerId}},[t("FilePicker",e._b({on:{close:e.onClose}},"FilePicker",e.filepickerOptions,!1))],1)}),[],!1,null,null,null).exports;n.Ay.mixin({methods:{t:r.Tl}}),(0,l.r)("file",((e,t)=>{let{richObjectType:i,richObject:r,accessible:l}=t;new(n.Ay.extend(j))({propsData:{richObjectType:i,richObject:r,accessible:l}}).$mount(e)})),(0,l.b)("files",((e,t)=>{let{providerId:i,accessible:r}=t;const o=new(n.Ay.extend(I))({propsData:{providerId:i,accessible:r}}).$mount(e);return new l.N(o.$el,o)}),((e,t)=>{t.object.$destroy()}))},75568:(e,t,i)=>{i.d(t,{A:()=>a});var n=i(71354),r=i.n(n),l=i(76314),o=i.n(l)()(r());o.push([e.id,".widget-file[data-v-3f729da0]{display:flex;flex-grow:1;color:var(--color-main-text) !important;text-decoration:none !important}.widget-file--image[data-v-3f729da0]{min-width:40%;background-position:center;background-size:cover;background-repeat:no-repeat}.widget-file--image.widget-file--image--icon[data-v-3f729da0]{min-width:88px;background-size:44px}.widget-file--title[data-v-3f729da0]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:bold}.widget-file--details[data-v-3f729da0]{padding:12px;flex-grow:1;display:flex;flex-direction:column}.widget-file--details p[data-v-3f729da0]{margin:0;padding:0}.widget-file--description[data-v-3f729da0]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;line-clamp:3;-webkit-box-orient:vertical}.widget-file--link[data-v-3f729da0]{color:var(--color-text-maxcontrast)}.widget-file.widget-file--no-access[data-v-3f729da0]{padding:12px}.widget-file.widget-file--no-access .widget-file--details[data-v-3f729da0]{padding:0}","",{version:3,sources:["webpack://./apps/files/src/views/ReferenceFileWidget.vue"],names:[],mappings:"AACA,8BACC,YAAA,CACA,WAAA,CACA,uCAAA,CACA,+BAAA,CAEA,qCACC,aAAA,CACA,0BAAA,CACA,qBAAA,CACA,2BAAA,CAEA,8DACC,cAAA,CACA,oBAAA,CAIF,qCACC,eAAA,CACA,sBAAA,CACA,kBAAA,CACA,gBAAA,CAGD,uCACC,YAAA,CACA,WAAA,CACA,YAAA,CACA,qBAAA,CAEA,yCACC,QAAA,CACA,SAAA,CAIF,2CACC,eAAA,CACA,sBAAA,CACA,mBAAA,CACA,oBAAA,CACA,YAAA,CACA,2BAAA,CAGD,oCACC,mCAAA,CAGD,qDACC,YAAA,CAEA,2EACC,SAAA",sourcesContent:["\n.widget-file {\n\tdisplay: flex;\n\tflex-grow: 1;\n\tcolor: var(--color-main-text) !important;\n\ttext-decoration: none !important;\n\n\t&--image {\n\t\tmin-width: 40%;\n\t\tbackground-position: center;\n\t\tbackground-size: cover;\n\t\tbackground-repeat: no-repeat;\n\n\t\t&.widget-file--image--icon {\n\t\t\tmin-width: 88px;\n\t\t\tbackground-size: 44px;\n\t\t}\n\t}\n\n\t&--title {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\twhite-space: nowrap;\n\t\tfont-weight: bold;\n\t}\n\n\t&--details {\n\t\tpadding: 12px;\n\t\tflex-grow: 1;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\n\t\tp {\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t}\n\t}\n\n\t&--description {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\tdisplay: -webkit-box;\n\t\t-webkit-line-clamp: 3;\n\t\tline-clamp: 3;\n\t\t-webkit-box-orient: vertical;\n\t}\n\n\t&--link {\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t&.widget-file--no-access {\n\t\tpadding: 12px;\n\n\t\t.widget-file--details {\n\t\t\tpadding: 0;\n\t\t}\n\t}\n}\n"],sourceRoot:""}]);const a=o},11873:(e,t,i)=>{i.d(t,{FilePickerVue:()=>n});const n=(0,i(85471).$V)((()=>Promise.all([i.e(4208),i.e(4065)]).then(i.bind(i,17207))))}},r={};function l(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={id:e,loaded:!1,exports:{}};return n[e].call(i.exports,i,i.exports,l),i.loaded=!0,i.exports}l.m=n,e=[],l.O=(t,i,n,r)=>{if(!i){var o=1/0;for(d=0;d<e.length;d++){i=e[d][0],n=e[d][1],r=e[d][2];for(var a=!0,s=0;s<i.length;s++)(!1&r||o>=r)&&Object.keys(l.O).every((e=>l.O[e](i[s])))?i.splice(s--,1):(a=!1,r<o&&(o=r));if(a){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[i,n,r]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var i in t)l.o(t,i)&&!l.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,i)=>(l.f[i](e,t),t)),[])),l.u=e=>e+"-"+e+".js?v=8ce35ae6dd9d1ce3481a",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},i="nextcloud:",l.l=(e,n,r,o)=>{if(t[e])t[e].push(n);else{var a,s;if(void 0!==r)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var A=c[d];if(A.getAttribute("src")==e||A.getAttribute("data-webpack")==i+r){a=A;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,l.nc&&a.setAttribute("nonce",l.nc),a.setAttribute("data-webpack",i+r),a.src=e),t[e]=[n];var p=(i,n)=>{a.onerror=a.onload=null,clearTimeout(f);var r=t[e];if(delete t[e],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((e=>e(n))),i)return i(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),s&&document.head.appendChild(a)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),l.j=54,(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var n=i.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=i[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{l.b=document.baseURI||self.location.href;var e={54:0,4254:0};l.f.j=(t,i)=>{var n=l.o(e,t)?e[t]:void 0;if(0!==n)if(n)i.push(n[2]);else{var r=new Promise(((i,r)=>n=e[t]=[i,r]));i.push(n[2]=r);var o=l.p+l.u(t),a=new Error;l.l(o,(i=>{if(l.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var r=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;a.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",a.name="ChunkLoadError",a.type=r,a.request=o,n[1](a)}}),"chunk-"+t,t)}},l.O.j=t=>0===e[t];var t=(t,i)=>{var n,r,o=i[0],a=i[1],s=i[2],c=0;if(o.some((t=>0!==e[t]))){for(n in a)l.o(a,n)&&(l.m[n]=a[n]);if(s)var d=s(l)}for(t&&t(i);c<o.length;c++)r=o[c],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(d)},i=self.webpackChunknextcloud=self.webpackChunknextcloud||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),l.nc=void 0;var o=l.O(void 0,[4208],(()=>l(50777)));o=l.O(o)})();
//# sourceMappingURL=files-reference-files.js.map?v=c1c53ab72a1ed32a1951