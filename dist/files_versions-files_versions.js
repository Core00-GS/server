/*! For license information please see files_versions-files_versions.js.LICENSE.txt */
(()=>{"use strict";var e,i,n,s={62335:(e,i,n)=>{var s=n(85471),o=n(53334),r=n(43627),l=n.n(r),a=n(85168),c=n(16406),d=n(61338),u=n(21777),f=n(84237),v=n(34499),p=n(71225),h=n(63814),m=n(19231),A=n(78791);const b=function(e){const t=(e.startsWith("/")?e:"/".concat(e)).split("/");let i="";return t.forEach((e=>{""!==e&&(i+="/"+encodeURIComponent(e))})),i};var g=n(44719);const _=(0,h.dC)("dav"),C=(0,g.UU)(_),w=e=>{C.setHeaders({"X-Requested-With":"XMLHttpRequest",requesttoken:null!=e?e:""})};(0,u.zo)(w),w((0,u.do)());const y=C,V=(0,n(53529).YK)().setApp("files_version").detectUser().build();const x={name:"BackupRestoreIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var k=n(14486);const L=(0,k.A)(x,(function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon backup-restore-icon",attrs:{"aria-hidden":!e.title||null,"aria-label":e.title,role:"img"},on:{click:function(t){return e.$emit("click",t)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M12,3A9,9 0 0,0 3,12H0L4,16L8,12H5A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19C10.5,19 9.09,18.5 7.94,17.7L6.5,19.14C8.04,20.3 9.94,21 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])}),[],!1,null,null,null).exports,S={name:"DownloadIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},I=(0,k.A)(S,(function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon download-icon",attrs:{"aria-hidden":!e.title||null,"aria-label":e.title,role:"img"},on:{click:function(t){return e.$emit("click",t)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])}),[],!1,null,null,null).exports,H={name:"FileCompareIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},T=(0,k.A)(H,(function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon file-compare-icon",attrs:{"aria-hidden":!e.title||null,"aria-label":e.title,role:"img"},on:{click:function(t){return e.$emit("click",t)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M10,18H6V16H10V18M10,14H6V12H10V14M10,1V2H6C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V23H12V1H10M20,8V20C20,21.11 19.11,22 18,22H14V20H18V11H14V9H18.5L14,4.5V2L20,8M16,14H14V12H16V14M16,18H14V16H16V18Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])}),[],!1,null,null,null).exports;var B=n(93919),z=n(11037);const E={name:"ImageOffOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},N=(0,k.A)(E,(function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon image-off-outline-icon",attrs:{"aria-hidden":!e.title||null,"aria-label":e.title,role:"img"},on:{click:function(t){return e.$emit("click",t)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M22 20.7L3.3 2L2 3.3L3 4.3V19C3 20.1 3.9 21 5 21H19.7L20.7 22L22 20.7M5 19V6.3L12.6 13.9L11.1 15.8L9 13.1L6 17H15.7L17.7 19H5M8.8 5L6.8 3H19C20.1 3 21 3.9 21 5V17.2L19 15.2V5H8.8"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])}),[],!1,null,null,null).exports;var O=n(89257),D=n(73267),P=n(80763),M=n(18300),R=n(32981);const F=0;function U(e,t){return e!==F&&(e&t)===t}const $={name:"Version",components:{NcActionLink:D.A,NcActionButton:O.A,NcListItem:P.N,BackupRestore:L,Download:I,FileCompare:T,Pencil:B.A,Delete:z.A,ImageOffOutline:N},directives:{tooltip:M.A},filters:{humanReadableSize:e=>OC.Util.humanFileSize(e),humanDateFromNow:e=>(0,m.A)(e).fromNow()},props:{version:{type:Object,required:!0},fileInfo:{type:Object,required:!0},isCurrent:{type:Boolean,default:!1},isFirstVersion:{type:Boolean,default:!1},loadPreview:{type:Boolean,default:!1},canView:{type:Boolean,default:!1},canCompare:{type:Boolean,default:!1}},data:()=>({previewLoaded:!1,previewErrored:!1,capabilities:(0,R.C)("core","capabilities",{files:{version_labeling:!1,version_deletion:!1}})}),computed:{versionLabel(){var e;const t=null!==(e=this.version.label)&&void 0!==e?e:"";return this.isCurrent?""===t?(0,o.Tl)("files_versions","Current version"):"".concat(t," (").concat((0,o.Tl)("files_versions","Current version"),")"):this.isFirstVersion&&""===t?(0,o.Tl)("files_versions","Initial version"):t},downloadURL(){return this.isCurrent?(0,h.aU)()+(0,p.HS)("/remote.php/webdav",this.fileInfo.path,this.fileInfo.name):(0,h.aU)()+this.version.url},formattedDate(){return(0,m.A)(this.version.mtime).format("LLL")},enableLabeling(){return!0===this.capabilities.files.version_labeling},enableDeletion(){return!0===this.capabilities.files.version_deletion},hasDeletePermissions(){return U(this.fileInfo.permissions,A.aX.DELETE)},hasUpdatePermissions(){return U(this.fileInfo.permissions,A.aX.UPDATE)},isDownloadable(){if(!(this.fileInfo.permissions&A.aX.READ))return!1;if("shared"===this.fileInfo.mountType){const e=this.fileInfo.shareAttributes.find((e=>"permissions"===e.scope&&"download"===e.key));if(void 0!==e&&!1===e.enabled)return!1}return!0}},methods:{labelUpdate(){this.$emit("label-update-request")},restoreVersion(){this.$emit("restore",this.version)},deleteVersion(){this.$emit("delete",this.version)},click(){this.canView?this.$emit("click",{version:this.version}):window.location=this.downloadURL},compareVersion(){if(!this.canView)throw new Error("Cannot compare version of this file");this.$emit("compare",{version:this.version})},t:o.Tl}};var j=n(85072),q=n.n(j),W=n(97825),Y=n.n(W),K=n(77659),X=n.n(K),G=n(55056),Z=n.n(G),Q=n(10540),J=n.n(Q),ee=n(41113),te=n.n(ee),ie=n(91351),ne={};ne.styleTagTransform=te(),ne.setAttributes=Z(),ne.insert=X().bind(null,"head"),ne.domAPI=Y(),ne.insertStyleElement=J(),q()(ie.A,ne),ie.A&&ie.A.locals&&ie.A.locals;const se=(0,k.A)($,(function(){var e=this,t=e._self._c;return t("NcListItem",{staticClass:"version",attrs:{name:e.versionLabel,"force-display-actions":!0,"data-files-versions-version":""},on:{click:e.click},scopedSlots:e._u([{key:"icon",fn:function(){return[e.loadPreview||e.previewLoaded?!e.isCurrent&&!e.version.hasPreview||e.previewErrored?t("div",{staticClass:"version__image"},[t("ImageOffOutline",{attrs:{size:20}})],1):t("img",{staticClass:"version__image",attrs:{src:e.version.previewUrl,alt:"",decoding:"async",fetchpriority:"low",loading:"lazy"},on:{load:function(t){e.previewLoaded=!0},error:function(t){e.previewErrored=!0}}}):t("div",{staticClass:"version__image"})]},proxy:!0},{key:"subname",fn:function(){return[t("div",{staticClass:"version__info"},[t("span",{attrs:{title:e.formattedDate}},[e._v(e._s(e._f("humanDateFromNow")(e.version.mtime)))]),e._v(" "),t("span",{staticClass:"version__info__size"},[e._v("•")]),e._v(" "),t("span",{staticClass:"version__info__size"},[e._v(e._s(e._f("humanReadableSize")(e.version.size)))])])]},proxy:!0},{key:"actions",fn:function(){return[e.enableLabeling&&e.hasUpdatePermissions?t("NcActionButton",{attrs:{"close-after-click":!0},on:{click:e.labelUpdate},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Pencil",{attrs:{size:22}})]},proxy:!0}],null,!1,3072546167)},[e._v("\n\t\t\t"+e._s(""===e.version.label?e.t("files_versions","Name this version"):e.t("files_versions","Edit version name"))+"\n\t\t")]):e._e(),e._v(" "),!e.isCurrent&&e.canView&&e.canCompare?t("NcActionButton",{attrs:{"close-after-click":!0},on:{click:e.compareVersion},scopedSlots:e._u([{key:"icon",fn:function(){return[t("FileCompare",{attrs:{size:22}})]},proxy:!0}],null,!1,1958207595)},[e._v("\n\t\t\t"+e._s(e.t("files_versions","Compare to current version"))+"\n\t\t")]):e._e(),e._v(" "),!e.isCurrent&&e.hasUpdatePermissions?t("NcActionButton",{attrs:{"close-after-click":!0},on:{click:e.restoreVersion},scopedSlots:e._u([{key:"icon",fn:function(){return[t("BackupRestore",{attrs:{size:22}})]},proxy:!0}],null,!1,2239038444)},[e._v("\n\t\t\t"+e._s(e.t("files_versions","Restore version"))+"\n\t\t")]):e._e(),e._v(" "),e.isDownloadable?t("NcActionLink",{attrs:{href:e.downloadURL,"close-after-click":!0,download:e.downloadURL},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Download",{attrs:{size:22}})]},proxy:!0}],null,!1,927269758)},[e._v("\n\t\t\t"+e._s(e.t("files_versions","Download version"))+"\n\t\t")]):e._e(),e._v(" "),!e.isCurrent&&e.enableDeletion&&e.hasDeletePermissions?t("NcActionButton",{attrs:{"close-after-click":!0},on:{click:e.deleteVersion},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Delete",{attrs:{size:22}})]},proxy:!0}],null,!1,2429175571)},[e._v("\n\t\t\t"+e._s(e.t("files_versions","Delete version"))+"\n\t\t")]):e._e()]},proxy:!0}])})}),[],!1,null,"5b3703ac",null).exports,oe=(0,s.pM)({name:"VirtualScrolling",props:{sections:{type:Array,required:!0},containerElement:{type:HTMLElement,default:null},useWindow:{type:Boolean,default:!1},headerHeight:{type:Number,default:75},renderDistance:{type:Number,default:.5},bottomBufferRatio:{type:Number,default:2},scrollToKey:{type:String,default:""}},data:()=>({scrollPosition:0,containerHeight:0,rowsContainerHeight:0,resizeObserver:null}),computed:{visibleSections(){V.debug("[VirtualScrolling] Computing visible section",{sections:this.sections});const e=this.containerHeight,t=this.scrollPosition,i=t+e;let n=0,s=0;const o=this.sections.map((o=>(s+=this.headerHeight,{...o,rows:o.rows.reduce(((o,r)=>{n=s,s+=r.height;let l=0;return s<t?l=(t-s)/e:n>i&&(l=(n-i)/e),l>this.renderDistance?o:[...o,{...r,distance:l}]}),[])}))).filter((e=>e.rows.length>0)),r=o.flatMap((e=>{let{rows:t}=e;return t})).flatMap((e=>{let{items:t}=e;return t})),l=this._rowIdToKeyMap;r.forEach((e=>e.key=l[e.id]));const a=r.map((e=>{let{key:t}=e;return t})).filter((e=>void 0!==e)),c=Object.values(l).filter((e=>!a.includes(e)));return r.filter((e=>{let{key:t}=e;return void 0===t})).forEach((e=>{var t;return e.key=null!==(t=c.pop())&&void 0!==t?t:Math.random().toString(36).substr(2)})),this._rowIdToKeyMap=r.reduce(((e,t)=>{let{id:i,key:n}=t;return{...e,["".concat(i)]:n}}),{}),o},totalHeight(){return this.sections.map((e=>this.headerHeight+e.height)).reduce(((e,t)=>e+t),0)+0},paddingTop(){if(0===this.visibleSections.length)return 0;let e=0;for(const t of this.sections)if(t.key===this.visibleSections[0].rows[0].sectionKey){for(const i of t.rows){if(i.key===this.visibleSections[0].rows[0].key)return e;e+=i.height}e+=this.headerHeight}else e+=this.headerHeight+t.height;return e},rowsContainerStyle(){return{height:"".concat(this.totalHeight,"px"),paddingTop:"".concat(this.paddingTop,"px")}},isNearBottom(){const e=this.containerHeight*this.bottomBufferRatio;return this.scrollPosition+this.containerHeight>=this.totalHeight-e},container(){return V.debug("[VirtualScrolling] Computing container"),null!==this.containerElement?this.containerElement:this.useWindow?window:this.$refs.container}},watch:{isNearBottom(e){V.debug("[VirtualScrolling] isNearBottom changed",{value:e}),e&&this.$emit("need-content")},visibleSections(){this.isNearBottom&&this.$emit("need-content")},scrollToKey(e){let t=0;for(const i of this.sections){if(i.key===e)break;t+=this.headerHeight+i.height}V.debug("[VirtualScrolling] Scrolling to",{currentRowTopDistanceFromTop:t}),this.container.scrollTo({top:t,behavior:"smooth"})}},beforeCreate(){this._rowIdToKeyMap={}},mounted(){this.resizeObserver=new ResizeObserver((e=>{for(const t of e){const e=t.contentRect;t.target===this.container&&(this.containerHeight=e.height),t.target.classList.contains("vs-rows-container")&&(this.rowsContainerHeight=e.height)}})),this.useWindow?(window.addEventListener("resize",this.updateContainerSize,{passive:!0}),this.containerHeight=window.innerHeight):this.resizeObserver.observe(this.container),this.resizeObserver.observe(this.$refs.rowsContainer),this.container.addEventListener("scroll",this.updateScrollPosition,{passive:!0})},beforeDestroy(){var e;this.useWindow&&window.removeEventListener("resize",this.updateContainerSize),null===(e=this.resizeObserver)||void 0===e||e.disconnect(),this.container.removeEventListener("scroll",this.updateScrollPosition)},methods:{updateScrollPosition(){var e;null!==(e=this._onScrollHandle)&&void 0!==e||(this._onScrollHandle=requestAnimationFrame((()=>{this._onScrollHandle=null,this.useWindow?this.scrollPosition=this.container.scrollY:this.scrollPosition=this.container.scrollTop})))},updateContainerSize(){this.containerHeight=window.innerHeight}}});var re=n(6659),le={};le.styleTagTransform=te(),le.setAttributes=Z(),le.insert=X().bind(null,"head"),le.domAPI=Y(),le.insertStyleElement=J(),q()(re.A,le),re.A&&re.A.locals&&re.A.locals;const ae=(0,k.A)(oe,(function(){var e=this,t=e._self._c;return e._self._setupProxy,e.useWindow||null!==e.containerElement?t("div",{ref:"rowsContainer",staticClass:"vs-rows-container",style:e.rowsContainerStyle},[e._t("default",null,{visibleSections:e.visibleSections}),e._v(" "),e._t("loader")],2):t("div",{ref:"container",staticClass:"vs-container"},[t("div",{ref:"rowsContainer",staticClass:"vs-rows-container",style:e.rowsContainerStyle},[e._t("default",null,{visibleSections:e.visibleSections}),e._v(" "),e._t("loader")],2)])}),[],!1,null,"11dbbae6",null).exports;var ce=n(85338),de=n(54332),ue=n(82182);const fe=(0,s.pM)({name:"VersionLabelForm",components:{NcButton:de.A,NcTextField:ue.A,Check:ce.A},props:{versionLabel:{type:String,default:""}},data(){return{innerVersionLabel:this.versionLabel}},mounted(){this.$nextTick((()=>{this.$refs.labelInput.$el.getElementsByTagName("input")[0].focus()}))},methods:{setVersionLabel(e){this.$emit("label-update",e)},t:o.Tl}});var ve=n(43100),pe={};pe.styleTagTransform=te(),pe.setAttributes=Z(),pe.insert=X().bind(null,"head"),pe.domAPI=Y(),pe.insertStyleElement=J(),q()(ve.A,pe),ve.A&&ve.A.locals&&ve.A.locals;const he={name:"VersionTab",components:{Version:se,VirtualScrolling:ae,VersionLabelForm:(0,k.A)(fe,(function(){var e=this,t=e._self._c;return e._self._setupProxy,t("form",{staticClass:"version-label-modal",on:{submit:function(t){return t.preventDefault(),e.setVersionLabel(e.innerVersionLabel)}}},[t("label",[t("div",{staticClass:"version-label-modal__title"},[e._v(e._s(e.t("files_versions","Version name")))]),e._v(" "),t("NcTextField",{ref:"labelInput",attrs:{value:e.innerVersionLabel,placeholder:e.t("files_versions","Version name"),"label-outside":!0},on:{"update:value":function(t){e.innerVersionLabel=t}}})],1),e._v(" "),t("div",{staticClass:"version-label-modal__info"},[e._v("\n\t\t"+e._s(e.t("files_versions","Named versions are persisted, and excluded from automatic cleanups when your storage quota is full."))+"\n\t")]),e._v(" "),t("div",{staticClass:"version-label-modal__actions"},[t("NcButton",{attrs:{disabled:0===e.innerVersionLabel.trim().length},on:{click:function(t){return e.setVersionLabel("")}}},[e._v("\n\t\t\t"+e._s(e.t("files_versions","Remove version name"))+"\n\t\t")]),e._v(" "),t("NcButton",{attrs:{type:"primary","native-type":"submit"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Check")]},proxy:!0}])},[e._v("\n\t\t\t"+e._s(e.t("files_versions","Save version name"))+"\n\t\t")])],1)])}),[],!1,null,"58311f0c",null).exports,NcLoadingIcon:f.A,NcModal:v.A},mixins:[c.A],data:()=>({fileInfo:null,isActive:!1,versions:[],loading:!1,showVersionLabelForm:!1}),computed:{sections(){return[{key:"versions",rows:this.orderedVersions.map((e=>({key:e.mtime,height:68,sectionKey:"versions",items:[e]}))),height:68*this.orderedVersions.length}]},orderedVersions(){return[...this.versions].sort(((e,t)=>e.mtime===this.fileInfo.mtime?-1:t.mtime===this.fileInfo.mtime?1:t.mtime-e.mtime))},initialVersionMtime(){return this.versions.map((e=>e.mtime)).reduce(((e,t)=>Math.min(e,t)))},viewerFileInfo(){let e="";return 1&this.fileInfo.permissions&&(e+="R"),2&this.fileInfo.permissions&&(e+="W"),8&this.fileInfo.permissions&&(e+="D"),{...this.fileInfo,mime:this.fileInfo.mimetype,basename:this.fileInfo.name,filename:this.fileInfo.path+"/"+this.fileInfo.name,permissions:e,fileid:this.fileInfo.id}},canView(){var e;return null===(e=window.OCA.Viewer)||void 0===e||null===(e=e.mimetypesCompare)||void 0===e?void 0:e.includes(this.fileInfo.mimetype)},canCompare(){return!this.isMobile}},mounted(){(0,d.B1)("files_versions:restore:restored",this.fetchVersions)},beforeUnmount(){(0,d.al)("files_versions:restore:restored",this.fetchVersions)},methods:{async update(e){this.fileInfo=e,this.resetState(),this.fetchVersions()},async setIsActive(e){this.isActive=e},async fetchVersions(){try{this.loading=!0,this.versions=await async function(e){var t;const i="/versions/".concat(null===(t=(0,u.HW)())||void 0===t?void 0:t.uid,"/versions/").concat(e.id);try{return(await y.getDirectoryContents(i,{data:'<?xml version="1.0"?>\n<d:propfind xmlns:d="DAV:"\n\txmlns:oc="http://owncloud.org/ns"\n\txmlns:nc="http://nextcloud.org/ns"\n\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t<d:prop>\n\t\t<d:getcontentlength />\n\t\t<d:getcontenttype />\n\t\t<d:getlastmodified />\n\t\t<d:getetag />\n\t\t<nc:version-label />\n\t\t<nc:has-preview />\n\t</d:prop>\n</d:propfind>',details:!0})).data.filter((e=>{let{mime:t}=e;return""!==t})).map((t=>function(e,t){const i=1e3*(0,m.A)(e.lastmod).unix();let n="";return n=i===t.mtime?(0,h.Jv)("/core/preview?fileId={fileId}&c={fileEtag}&x=250&y=250&forceIcon=0&a=0",{fileId:t.id,fileEtag:t.etag}):(0,h.Jv)("/apps/files_versions/preview?file={file}&version={fileVersion}",{file:(0,p.HS)(t.path,t.name),fileVersion:e.basename}),{fileId:t.id,label:e.props["version-label"]&&String(e.props["version-label"]),filename:e.filename,basename:(0,m.A)(i).format("LLL"),mime:e.mime,etag:"".concat(e.props.getetag),size:e.size,type:e.type,mtime:i,permissions:"R",hasPreview:1===e.props["has-preview"],previewUrl:n,url:(0,p.HS)("/remote.php/dav",e.filename),source:(0,h.dC)("dav")+b(e.filename),fileVersion:e.basename}}(t,e)))}catch(e){throw V.error("Could not fetch version",{exception:e}),e}}(this.fileInfo)}finally{this.loading=!1}},async handleRestore(e){const i=this.fileInfo;this.fileInfo={...this.fileInfo,size:e.size,mtime:e.mtime};const n={preventDefault:!1,fileInfo:this.fileInfo,version:e};if((0,d.Ic)("files_versions:restore:requested",n),!n.preventDefault)try{await async function(e){try{var t,i;V.debug("Restoring version",{url:e.url}),await y.moveFile("/versions/".concat(null===(t=(0,u.HW)())||void 0===t?void 0:t.uid,"/versions/").concat(e.fileId,"/").concat(e.fileVersion),"/versions/".concat(null===(i=(0,u.HW)())||void 0===i?void 0:i.uid,"/restore/target"))}catch(e){throw V.error("Could not restore version",{exception:e}),e}}(e),""!==e.label?(0,a.Te)(t("files_versions","".concat(e.label," restored"))):e.mtime===this.initialVersionMtime?(0,a.Te)(t("files_versions","Initial version restored")):(0,a.Te)(t("files_versions","Version restored")),(0,d.Ic)("files_versions:restore:restored",e)}catch(n){this.fileInfo=i,(0,a.Qg)(t("files_versions","Could not restore version")),(0,d.Ic)("files_versions:restore:failed",e)}},handleLabelUpdateRequest(e){this.showVersionLabelForm=!0,this.editedVersion=e},async handleLabelUpdate(e){const t=this.editedVersion.label;this.editedVersion.label=e,this.showVersionLabelForm=!1;try{await async function(e,t){return await y.customRequest(e.filename,{method:"PROPPATCH",data:'<?xml version="1.0"?>\n\t\t\t\t\t<d:propertyupdate xmlns:d="DAV:"\n\t\t\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t\t<d:set>\n\t\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t\t<nc:version-label>'.concat(t,"</nc:version-label>\n\t\t\t\t\t\t</d:prop>\n\t\t\t\t\t</d:set>\n\t\t\t\t\t</d:propertyupdate>")})}(this.editedVersion,e),this.editedVersion=null}catch(e){this.editedVersion.label=t,(0,a.Qg)(this.t("files_versions","Could not set version label")),logger.error("Could not set version label",{exception:e})}},async handleDelete(e){const i=this.versions.indexOf(e);this.versions.splice(i,1);try{await async function(e){await y.deleteFile(e.filename)}(e)}catch(i){this.versions.push(e),(0,a.Qg)(t("files_versions","Could not delete version"))}},resetState(){this.$set(this,"versions",[])},openVersion(e){let{version:t}=e;if(t.mtime===this.fileInfo.mtime)return void OCA.Viewer.open({fileInfo:this.viewerFileInfo});const i=this.versions.map((e=>{var t,i;return{...e,filename:e.mtime===this.fileInfo.mtime?l().join("files",null!==(t=null===(i=(0,u.HW)())||void 0===i?void 0:i.uid)&&void 0!==t?t:"",this.fileInfo.path,this.fileInfo.name):e.filename,hasPreview:!1,previewUrl:void 0}}));OCA.Viewer.open({fileInfo:i.find((e=>e.source===t.source)),enableSidebar:!1})},compareVersion(e){let{version:t}=e;const i=this.versions.map((e=>({...e,hasPreview:!1,previewUrl:void 0})));OCA.Viewer.compare(this.viewerFileInfo,i.find((e=>e.source===t.source)))}}};var me=n(11507),Ae={};Ae.styleTagTransform=te(),Ae.setAttributes=Z(),Ae.insert=X().bind(null,"head"),Ae.domAPI=Y(),Ae.insertStyleElement=J(),q()(me.A,Ae),me.A&&me.A.locals&&me.A.locals;const be=(0,k.A)(he,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"versions-tab__container"},[t("VirtualScrolling",{attrs:{sections:e.sections,"header-height":0},scopedSlots:e._u([{key:"default",fn:function(i){let{visibleSections:n}=i;return[t("ul",{attrs:{"data-files-versions-versions-list":""}},[1===n.length?e._l(n[0].rows,(function(i){return t("Version",{key:i.items[0].mtime,attrs:{"can-view":e.canView,"can-compare":e.canCompare,"load-preview":e.isActive,version:i.items[0],"file-info":e.fileInfo,"is-current":i.items[0].mtime===e.fileInfo.mtime,"is-first-version":i.items[0].mtime===e.initialVersionMtime},on:{click:e.openVersion,compare:e.compareVersion,restore:e.handleRestore,"label-update-request":function(t){return e.handleLabelUpdateRequest(i.items[0])},delete:e.handleDelete}})})):e._e()],2)]}}])},[e._v(" "),e.loading?t("NcLoadingIcon",{staticClass:"files-list-viewer__loader",attrs:{slot:"loader"},slot:"loader"}):e._e()],1),e._v(" "),e.showVersionLabelForm?t("NcModal",{attrs:{title:e.t("files_versions","Name this version")},on:{close:function(t){e.showVersionLabelForm=!1}}},[t("VersionLabelForm",{attrs:{"version-label":e.editedVersion.label},on:{"label-update":e.handleLabelUpdate}})],1):e._e()],1)}),[],!1,null,null,null).exports;var ge=n(80284);s.Ay.prototype.t=o.Tl,s.Ay.prototype.n=o.zw,s.Ay.use(ge.Ay);const _e=s.Ay.extend(be);let Ce=null;window.addEventListener("DOMContentLoaded",(function(){var e;void 0!==(null===(e=OCA.Files)||void 0===e?void 0:e.Sidebar)&&OCA.Files.Sidebar.registerTab(new OCA.Files.Sidebar.Tab({id:"version_vue",name:(0,o.Tl)("files_versions","Versions"),iconSvg:'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-backup-restore" viewBox="0 0 24 24"><path d="M12,3A9,9 0 0,0 3,12H0L4,16L8,12H5A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19C10.5,19 9.09,18.5 7.94,17.7L6.5,19.14C8.04,20.3 9.94,21 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12Z" /></svg>',async mount(e,t,i){Ce&&Ce.$destroy(),Ce=new _e({parent:i}),await Ce.update(t),Ce.$mount(e)},update(e){Ce.update(e)},setIsActive(e){Ce&&Ce.setIsActive(e)},destroy(){Ce.$destroy(),Ce=null},enabled(e){var t;return!(null===(t=null==e?void 0:e.isDirectory())||void 0===t||t)}}))}))},91351:(e,t,i)=>{i.d(t,{A:()=>l});var n=i(71354),s=i.n(n),o=i(76314),r=i.n(o)()(s());r.push([e.id,".version[data-v-5b3703ac]{display:flex;flex-direction:row}.version__info[data-v-5b3703ac]{display:flex;flex-direction:row;align-items:center;gap:.5rem}.version__info__size[data-v-5b3703ac]{color:var(--color-text-lighter)}.version__image[data-v-5b3703ac]{width:3rem;height:3rem;border:1px solid var(--color-border);border-radius:var(--border-radius-large);display:flex;justify-content:center;color:var(--color-text-light)}","",{version:3,sources:["webpack://./apps/files_versions/src/components/Version.vue"],names:[],mappings:"AACA,0BACC,YAAA,CACA,kBAAA,CAEA,gCACC,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,SAAA,CAEA,sCACC,+BAAA,CAIF,iCACC,UAAA,CACA,WAAA,CACA,oCAAA,CACA,wCAAA,CAGA,YAAA,CACA,sBAAA,CACA,6BAAA",sourcesContent:["\n.version {\n\tdisplay: flex;\n\tflex-direction: row;\n\n\t&__info {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\talign-items: center;\n\t\tgap: 0.5rem;\n\n\t\t&__size {\n\t\t\tcolor: var(--color-text-lighter);\n\t\t}\n\t}\n\n\t&__image {\n\t\twidth: 3rem;\n\t\theight: 3rem;\n\t\tborder: 1px solid var(--color-border);\n\t\tborder-radius: var(--border-radius-large);\n\n\t\t// Useful to display no preview icon.\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tcolor: var(--color-text-light);\n\t}\n}\n"],sourceRoot:""}]);const l=r},43100:(e,t,i)=>{i.d(t,{A:()=>l});var n=i(71354),s=i.n(n),o=i(76314),r=i.n(o)()(s());r.push([e.id,".version-label-modal[data-v-58311f0c]{display:flex;justify-content:space-between;flex-direction:column;height:250px;padding:16px}.version-label-modal__title[data-v-58311f0c]{margin-bottom:12px;font-weight:600}.version-label-modal__info[data-v-58311f0c]{margin-top:12px;color:var(--color-text-maxcontrast)}.version-label-modal__actions[data-v-58311f0c]{display:flex;justify-content:space-between;margin-top:64px}","",{version:3,sources:["webpack://./apps/files_versions/src/components/VersionLabelForm.vue"],names:[],mappings:"AACA,sCACC,YAAA,CACA,6BAAA,CACA,qBAAA,CACA,YAAA,CACA,YAAA,CAEA,6CACC,kBAAA,CACA,eAAA,CAGD,4CACC,eAAA,CACA,mCAAA,CAGD,+CACC,YAAA,CACA,6BAAA,CACA,eAAA",sourcesContent:["\n.version-label-modal {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tflex-direction: column;\n\theight: 250px;\n\tpadding: 16px;\n\n\t&__title {\n\t\tmargin-bottom: 12px;\n\t\tfont-weight: 600;\n\t}\n\n\t&__info {\n\t\tmargin-top: 12px;\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t&__actions {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tmargin-top: 64px;\n\t}\n}\n"],sourceRoot:""}]);const l=r},6659:(e,t,i)=>{i.d(t,{A:()=>l});var n=i(71354),s=i.n(n),o=i(76314),r=i.n(o)()(s());r.push([e.id,".vs-container[data-v-11dbbae6]{overflow-y:scroll;height:100%}.vs-rows-container[data-v-11dbbae6]{box-sizing:border-box;will-change:scroll-position,padding;contain:layout paint style}","",{version:3,sources:["webpack://./apps/files_versions/src/components/VirtualScrolling.vue"],names:[],mappings:"AACA,+BACC,iBAAA,CACA,WAAA,CAGD,oCACC,qBAAA,CACA,mCAAA,CACA,0BAAA",sourcesContent:["\n.vs-container {\n\toverflow-y: scroll;\n\theight: 100%;\n}\n\n.vs-rows-container {\n\tbox-sizing: border-box;\n\twill-change: scroll-position, padding;\n\tcontain: layout paint style;\n}\n"],sourceRoot:""}]);const l=r},11507:(e,t,i)=>{i.d(t,{A:()=>l});var n=i(71354),s=i.n(n),o=i(76314),r=i.n(o)()(s());r.push([e.id,".versions-tab__container{height:100%}","",{version:3,sources:["webpack://./apps/files_versions/src/views/VersionTab.vue"],names:[],mappings:"AACA,yBACC,WAAA",sourcesContent:["\n.versions-tab__container {\n\theight: 100%;\n}\n"],sourceRoot:""}]);const l=r}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={id:e,loaded:!1,exports:{}};return s[e].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=s,e=[],r.O=(t,i,n,s)=>{if(!i){var o=1/0;for(d=0;d<e.length;d++){i=e[d][0],n=e[d][1],s=e[d][2];for(var l=!0,a=0;a<i.length;a++)(!1&s||o>=s)&&Object.keys(r.O).every((e=>r.O[e](i[a])))?i.splice(a--,1):(l=!1,s<o&&(o=s));if(l){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[i,n,s]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,i)=>(r.f[i](e,t),t)),[])),r.u=e=>e+"-"+e+".js?v="+{4065:"e0744ecca882f5202a32",4254:"96661b9f421b07ce7189"}[e],r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i={},n="nextcloud:",r.l=(e,t,s,o)=>{if(i[e])i[e].push(t);else{var l,a;if(void 0!==s)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==n+s){l=u;break}}l||(a=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",n+s),l.src=e),i[e]=[t];var f=(t,n)=>{l.onerror=l.onload=null,clearTimeout(v);var s=i[e];if(delete i[e],l.parentNode&&l.parentNode.removeChild(l),s&&s.forEach((e=>e(n))),t)return t(n)},v=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),a&&document.head.appendChild(l)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.j=2250,(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var n=i.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=i[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{r.b=document.baseURI||self.location.href;var e={2250:0};r.f.j=(t,i)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)i.push(n[2]);else{var s=new Promise(((i,s)=>n=e[t]=[i,s]));i.push(n[2]=s);var o=r.p+r.u(t),l=new Error;r.l(o,(i=>{if(r.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var s=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",l.name="ChunkLoadError",l.type=s,l.request=o,n[1](l)}}),"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,i)=>{var n,s,o=i[0],l=i[1],a=i[2],c=0;if(o.some((t=>0!==e[t]))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(a)var d=a(r)}for(t&&t(i);c<o.length;c++)s=o[c],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(d)},i=self.webpackChunknextcloud=self.webpackChunknextcloud||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),r.nc=void 0;var l=r.O(void 0,[4208],(()=>r(62335)));l=r.O(l)})();
//# sourceMappingURL=files_versions-files_versions.js.map?v=3c813b8742ee6526b9aa