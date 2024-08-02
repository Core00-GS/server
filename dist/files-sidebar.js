/*! For license information please see files-sidebar.js.LICENSE.txt */
(()=>{"use strict";var e,i,n,s={9165:(t,e,i)=>{i.d(e,{NZC:()=>n,ZL5:()=>r,dF:()=>a,fEr:()=>s});var n="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z",s="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z",r="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",a="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"},85638:(t,e,i)=>{const{XMLParser:n,XMLValidator:s}=i(86454),r=t=>{if(null==t)return!1;if(0===(t=t.toString().trim()).length)return!1;if(!0!==s.validate(t))return!1;let e;const i=new n;try{e=i.parse(t)}catch(t){return!1}return!!e&&"svg"in e};t.exports=r,t.exports.default=r},8471:(e,i,n)=>{var s=n(85471),r=n(53334),a=n(21777),o=n(87485),l=n(85168),d=n(61338),c=n(78791),u=n(71225),f=n(63814),h=n(77905),p=n(9165),g=n(26287),m=n(74692),v=n.n(m),y=n(26694),b=n(89257),A=n(4604),w=n(34196),T=n(6695);const _={name:"LegacyView",props:{component:{type:Object,required:!0},fileInfo:{type:Object,default:()=>{},required:!0}},watch:{fileInfo(t){this.setFileInfo(t)}},mounted(){this.component.$el.replaceAll(this.$el),this.setFileInfo(this.fileInfo)},methods:{setFileInfo(t){this.component.setFileInfo(new OCA.Files.FileInfoModel(t))}}};var S=n(14486);const C=(0,S.A)(_,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null).exports,I={name:"SidebarTab",components:{NcAppSidebarTab:n(46503).A,NcEmptyContent:w.A},props:{fileInfo:{type:Object,default:()=>{},required:!0},id:{type:String,required:!0},name:{type:String,required:!0},icon:{type:String,required:!1},onMount:{type:Function,required:!0},onUpdate:{type:Function,required:!0},onDestroy:{type:Function,required:!0},onScrollBottomReached:{type:Function,default:()=>{}}},data:()=>({loading:!0}),computed:{activeTab(){return this.$parent.activeTab}},watch:{async fileInfo(t,e){t.id!==e.id&&(this.loading=!0,await this.onUpdate(this.fileInfo),this.loading=!1)}},async mounted(){this.loading=!0,await this.onMount(this.$refs.mount,this.fileInfo,this.$refs.tab),this.loading=!1},async beforeDestroy(){await this.onDestroy()}},x=(0,S.A)(I,(function(){var t=this,e=t._self._c;return e("NcAppSidebarTab",{ref:"tab",attrs:{id:t.id,name:t.name,icon:t.icon},on:{bottomReached:t.onScrollBottomReached},scopedSlots:t._u([{key:"icon",fn:function(){return[t._t("icon")]},proxy:!0}],null,!0)},[t._v(" "),t.loading?e("NcEmptyContent",{attrs:{icon:"icon-loading"}}):t._e(),t._v(" "),e("div",{ref:"mount"})],1)}),[],!1,null,null,null).exports;var F=n(84237),L=n(5212),O=n(71654);const E={userVisible:!0,userAssignable:!0,canAssign:!0},N=t=>t.map((t=>{let{props:e}=t;return Object.fromEntries(Object.entries(e).map((t=>{let[e,i]=t;return[(0,O.A)(e),"displayName"===(0,O.A)(e)?String(i):i]})))})),k=t=>{const e={...t};return e.name&&!e.displayName||(e.name=e.displayName,delete e.displayName),e};var P=n(44719);const M=(0,f.dC)("dav"),D=(0,P.UU)(M),B=t=>{D.setHeaders({"X-Requested-With":"XMLHttpRequest",requesttoken:null!=t?t:""})};(0,a.zo)(B),B((0,a.do)());var R=n(53529);const j=(0,R.YK)().setApp("systemtags").detectUser().build(),q='<?xml version="1.0"?>\n<d:propfind  xmlns:d="DAV:" xmlns:oc="http://owncloud.org/ns">\n\t<d:prop>\n\t\t<oc:id />\n\t\t<oc:display-name />\n\t\t<oc:user-visible />\n\t\t<oc:user-assignable />\n\t\t<oc:can-assign />\n\t</d:prop>\n</d:propfind>',U=async(e,i)=>{const n="/systemtags-relations/files/"+i+"/"+e.id,s=k(e);try{await D.customRequest(n,{method:"PUT",data:s})}catch(e){throw j.error(t("systemtags","Failed to set tag for file"),{error:e}),new Error(t("systemtags","Failed to set tag for file"))}},z=s.Ay.extend({name:"SystemTags",components:{NcLoadingIcon:F.A,NcSelectTags:L.A},props:{fileId:{type:Number,required:!0}},data:()=>({sortedTags:[],selectedTags:[],loadingTags:!1,loading:!1}),async created(){try{const t=await(async()=>{try{const{data:t}=await D.getDirectoryContents("/systemtags",{data:q,details:!0,glob:"/systemtags/*"});return N(t)}catch(t){throw j.error((0,r.Tl)("systemtags","Failed to load tags"),{error:t}),new Error((0,r.Tl)("systemtags","Failed to load tags"))}})(),e=await(async()=>{const t=(0,f.Jv)("/apps/systemtags/lastused");try{const{data:e}=await g.A.get(t);return e.map(Number)}catch(t){throw j.error((0,r.Tl)("systemtags","Failed to load last used tags"),{error:t}),new Error((0,r.Tl)("systemtags","Failed to load last used tags"))}})(),i=[],n=[];for(const s of t)e.includes(s.id)?i.push(s):n.push(s);const s=(t,i)=>e.indexOf(t.id)-e.indexOf(i.id);i.sort(s),this.sortedTags=[...i,...n]}catch(t){(0,l.Qg)((0,r.Tl)("systemtags","Failed to load tags"))}},watch:{fileId:{immediate:!0,async handler(){this.loadingTags=!0;try{this.selectedTags=await(async e=>{const i="/systemtags-relations/files/"+this.fileId;try{const{data:t}=await D.getDirectoryContents(i,{data:q,details:!0,glob:"/systemtags-relations/files/*/*"});return N(t)}catch(e){throw j.error(t("systemtags","Failed to load tags for file"),{error:e}),new Error(t("systemtags","Failed to load tags for file"))}})(),this.$emit("has-tags",this.selectedTags.length>0)}catch(t){(0,l.Qg)((0,r.Tl)("systemtags","Failed to load selected tags"))}this.loadingTags=!1}}},methods:{t:r.Tl,createOption(t){for(const e of this.sortedTags){const{id:i,displayName:n,...s}=e;if(n===t&&Object.entries(s).every((t=>{let[e,i]=t;return E[e]===i})))return e}return{...E,displayName:t}},handleInput(t){this.selectedTags=t.filter((t=>Boolean(t.id)))},async handleSelect(t){const e=t[t.length-1];if(!e.id)return;const i=e;this.loading=!0;try{await U(i,this.fileId);const t=(t,e)=>t.id===i.id?-1:e.id===i.id?1:0;this.sortedTags.sort(t)}catch(t){(0,l.Qg)((0,r.Tl)("systemtags","Failed to select tag"))}this.loading=!1},async handleCreate(t){this.loading=!0;try{const e=await(async(t,e)=>{const i=k(t),n=await(async t=>{const e=k(t);try{const{headers:t}=await D.customRequest("/systemtags",{method:"POST",data:e}),i=t.get("content-location");if(i)return(t=>{const e=t.indexOf("?");e>0&&(t=t.substring(0,e));const i=t.split("/");let n;do{n=i[i.length-1],i.pop()}while(!n&&i.length>0);return Number(n)})(i);throw j.error((0,r.Tl)("systemtags",'Missing "Content-Location" header')),new Error((0,r.Tl)("systemtags",'Missing "Content-Location" header'))}catch(t){throw j.error((0,r.Tl)("systemtags","Failed to create tag"),{error:t}),new Error((0,r.Tl)("systemtags","Failed to create tag"))}})(i),s={...i,id:n};return await U(s,e),s.id})(t,this.fileId),i={...t,id:e};this.sortedTags.unshift(i),this.selectedTags.push(i)}catch(t){(0,l.Qg)((0,r.Tl)("systemtags","Failed to create tag"))}this.loading=!1},async handleDeselect(e){this.loading=!0;try{await(async(e,i)=>{const n="/systemtags-relations/files/"+this.fileId+"/"+e.id;try{await D.deleteFile(n)}catch(e){throw j.error(t("systemtags","Failed to delete tag for file"),{error:e}),new Error(t("systemtags","Failed to delete tag for file"))}})(e)}catch(t){(0,l.Qg)((0,r.Tl)("systemtags","Failed to delete tag"))}this.loading=!1}}});var H=n(85072),$=n.n(H),V=n(97825),W=n.n(V),Z=n(77659),K=n.n(Z),X=n(55056),Q=n.n(X),Y=n(10540),G=n.n(Y),J=n(41113),tt=n.n(J),et=n(25332),it={};it.styleTagTransform=tt(),it.setAttributes=Q(),it.insert=K().bind(null,"head"),it.domAPI=W(),it.insertStyleElement=G(),$()(et.A,it),et.A&&et.A.locals&&et.A.locals;const nt=(0,S.A)(z,(function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",{staticClass:"system-tags"},[t.loadingTags?e("NcLoadingIcon",{attrs:{name:t.t("systemtags","Loading collaborative tags …"),size:32}}):[e("NcSelectTags",{staticClass:"system-tags__select",attrs:{"input-label":t.t("systemtags","Search or create collaborative tags"),placeholder:t.t("systemtags","Collaborative tags …"),options:t.sortedTags,value:t.selectedTags,"create-option":t.createOption,taggable:!0,passthru:!0,"fetch-tags":!1,loading:t.loading},on:{input:t.handleInput,"option:selected":t.handleSelect,"option:created":t.handleCreate,"option:deselected":t.handleDeselect},scopedSlots:t._u([{key:"no-options",fn:function(){return[t._v("\n\t\t\t\t"+t._s(t.t("systemtags","No tags to select, type to create a new tag"))+"\n\t\t\t")]},proxy:!0}])})]],2)}),[],!1,null,"ff76457c",null).exports,st=(0,R.YK)().setApp("files").detectUser().build();var rt=n(96763);const at={name:"Sidebar",components:{LegacyView:C,NcActionButton:b.A,NcAppSidebar:y.N,NcDateTime:A.A,NcEmptyContent:w.A,NcIconSvgWrapper:T.A,SidebarTab:x,SystemTags:nt},setup:()=>({currentUser:(0,a.HW)(),mdiStar:p.ZL5,mdiStarOutline:p.dF}),data:()=>({Sidebar:OCA.Files.Sidebar.state,showTags:!1,showTagsDefault:!0,error:null,loading:!0,fileInfo:null,isFullScreen:!1,hasLowHeight:!1}),computed:{file(){return this.Sidebar.file},tabs(){return this.Sidebar.tabs},views(){return this.Sidebar.views},davPath(){const t=this.currentUser.uid;return(0,f.dC)("dav/files/".concat(t).concat((0,u.O0)(this.file)))},activeTab(){return this.Sidebar.activeTab},size(){var t;return(0,c.v7)(null===(t=this.fileInfo)||void 0===t?void 0:t.size)},background(){return this.getPreviewIfAny(this.fileInfo)},appSidebar(){return this.fileInfo?{"data-mimetype":this.fileInfo.mimetype,active:this.activeTab,background:this.background,class:{"app-sidebar--has-preview":this.fileInfo.hasPreview&&!this.isFullScreen,"app-sidebar--full":this.isFullScreen},compact:this.hasLowHeight||!this.fileInfo.hasPreview||this.isFullScreen,loading:this.loading,name:this.fileInfo.name,title:this.fileInfo.name}:this.error?{key:"error",subname:"",name:"",class:{"app-sidebar--full":this.isFullScreen}}:{loading:this.loading,subname:"",name:"",class:{"app-sidebar--full":this.isFullScreen}}},defaultAction(){return this.fileInfo&&OCA.Files&&OCA.Files.App&&OCA.Files.App.fileList&&OCA.Files.App.fileList.fileActions&&OCA.Files.App.fileList.fileActions.getDefaultFileAction&&OCA.Files.App.fileList.fileActions.getDefaultFileAction(this.fileInfo.mimetype,this.fileInfo.type,OC.PERMISSION_READ)},defaultActionListener(){return this.defaultAction?"figure-click":null},isSystemTagsEnabled(){var t;return!0===(null===(t=(0,o.F)())||void 0===t||null===(t=t.systemtags)||void 0===t?void 0:t.enabled)}},created(){(0,d.B1)("files:node:deleted",this.onNodeDeleted),window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize()},beforeDestroy(){(0,d.al)("file:node:deleted",this.onNodeDeleted),window.removeEventListener("resize",this.handleWindowResize)},methods:{canDisplay(t){return t.enabled(this.fileInfo)},resetData(){this.error=null,this.fileInfo=null,this.$nextTick((()=>{this.$refs.tabs&&this.$refs.tabs.updateTabs()}))},getPreviewIfAny(t){return null!=t&&t.hasPreview&&!this.isFullScreen?(0,f.Jv)("/core/preview?fileId=".concat(t.id,"&x=").concat(screen.width,"&y=").concat(screen.height,"&a=true")):this.getIconUrl(t)},getIconUrl(t){const e=(null==t?void 0:t.mimetype)||"application/octet-stream";return"httpd/unix-directory"===e?"shared"===t.mountType||"shared-root"===t.mountType?OC.MimeType.getIconUrl("dir-shared"):"external-root"===t.mountType?OC.MimeType.getIconUrl("dir-external"):void 0!==t.mountType&&""!==t.mountType?OC.MimeType.getIconUrl("dir-"+t.mountType):t.shareTypes&&(t.shareTypes.indexOf(h.ShareTypes.SHARE_TYPE_LINK)>-1||t.shareTypes.indexOf(h.ShareTypes.SHARE_TYPE_EMAIL)>-1)?OC.MimeType.getIconUrl("dir-public"):t.shareTypes&&t.shareTypes.length>0?OC.MimeType.getIconUrl("dir-shared"):OC.MimeType.getIconUrl("dir"):OC.MimeType.getIconUrl(e)},setActiveTab(t){OCA.Files.Sidebar.setActiveTab(t),this.tabs.forEach((e=>{try{e.setIsActive(t===e.id)}catch(t){st.error("Error while setting tab active state",{error:t,id:e.id,tab:e})}}))},async toggleStarred(e){try{await(0,g.A)({method:"PROPPATCH",url:this.davPath,data:'<?xml version="1.0"?>\n\t\t\t\t\t\t<d:propertyupdate xmlns:d="DAV:" xmlns:oc="http://owncloud.org/ns">\n\t\t\t\t\t\t'.concat(e?"<d:set>":"<d:remove>","\n\t\t\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t\t\t<oc:favorite>1</oc:favorite>\n\t\t\t\t\t\t\t</d:prop>\n\t\t\t\t\t\t").concat(e?"</d:set>":"</d:remove>","\n\t\t\t\t\t\t</d:propertyupdate>")});const t="dir"===this.fileInfo.type,i=t?c.vd:c.ZH;(0,d.Ic)(e?"files:favorites:added":"files:favorites:removed",new i({fileid:this.fileInfo.id,source:this.davPath,root:"/files/".concat((0,a.HW)().uid),mime:t?void 0:this.fileInfo.mimetype})),this.fileInfo.isFavourited=e}catch(e){(0,l.Qg)(t("files","Unable to change the favourite state of the file")),st.error("Unable to change favourite state",{error:e})}},onDefaultAction(){this.defaultAction&&this.defaultAction.action(this.fileInfo.name,{fileInfo:this.fileInfo,dir:this.fileInfo.dir,fileList:OCA.Files.App.fileList,$file:v()("body")})},toggleTags(){this.showTagsDefault=this.showTags=!this.showTags},async open(e){if(!e||""===e.trim())throw new Error("Invalid path '".concat(e,"'"));const i=!!this.Sidebar.file;this.Sidebar.file=e,this.error=null,this.loading=!0;try{this.fileInfo=await async function(t){const e=await(0,g.A)({method:"PROPFIND",url:t,data:(0,c.VL)()}),i=OC.Files.getClient()._client.parseMultiStatus(e.data),n=OC.Files.getClient()._parseFileInfo(i[0]);return n.get=t=>n[t],n.isDirectory=()=>"httpd/unix-directory"===n.mimetype,n}(this.davPath),this.fileInfo.dir=this.file.split("/").slice(0,-1).join("/"),this.views.forEach((t=>{t.setFileInfo(this.fileInfo)})),await this.$nextTick(),this.setActiveTab(this.Sidebar.activeTab||this.tabs[0].id),this.loading=!1,await this.$nextTick(),i&&this.$refs.sidebar.focusActiveTabContent()}catch(e){throw this.loading=!1,this.error=t("files","Error while loading the file data"),rt.error("Error while loading the file data",e),new Error(e)}},close(){this.Sidebar.file="",this.showTags=!1,this.resetData()},onNodeDeleted(t){this.fileInfo&&t&&this.fileInfo.id===t.fileid&&this.close()},setFullScreenMode(t){var e,i,n,s;this.isFullScreen=t,t?(null===(e=document.querySelector("#content"))||void 0===e?void 0:e.classList.add("with-sidebar--full"))||null===(i=document.querySelector("#content-vue"))||void 0===i||i.classList.add("with-sidebar--full"):(null===(n=document.querySelector("#content"))||void 0===n?void 0:n.classList.remove("with-sidebar--full"))||null===(s=document.querySelector("#content-vue"))||void 0===s||s.classList.remove("with-sidebar--full")},setShowTagsDefault(t){this.showTagsDefault=t},handleOpening(){(0,d.Ic)("files:sidebar:opening")},handleOpened(){(0,d.Ic)("files:sidebar:opened")},handleClosing(){(0,d.Ic)("files:sidebar:closing")},handleClosed(){(0,d.Ic)("files:sidebar:closed")},handleWindowResize(){this.hasLowHeight=document.documentElement.clientHeight<1024}}};var ot=n(79501),lt={};lt.styleTagTransform=tt(),lt.setAttributes=Q(),lt.insert=K().bind(null,"head"),lt.domAPI=W(),lt.insertStyleElement=G(),$()(ot.A,lt),ot.A&&ot.A.locals&&ot.A.locals;const dt=(0,S.A)(at,(function(){var t=this,e=t._self._c;return t.file?e("NcAppSidebar",t._b({ref:"sidebar",attrs:{"data-cy-sidebar":"","force-menu":!0},on:t._d({close:t.close,"update:active":t.setActiveTab,opening:t.handleOpening,opened:t.handleOpened,closing:t.handleClosing,closed:t.handleClosed},[t.defaultActionListener,function(e){return e.stopPropagation(),e.preventDefault(),t.onDefaultAction.apply(null,arguments)}]),scopedSlots:t._u([t.fileInfo?{key:"subname",fn:function(){return[t.fileInfo.isFavourited?e("NcIconSvgWrapper",{attrs:{path:t.mdiStar,name:t.t("files","Favorite"),inline:""}}):t._e(),t._v("\n\t\t"+t._s(t.size)+"\n\t\t"),e("NcDateTime",{attrs:{timestamp:t.fileInfo.mtime}})]},proxy:!0}:null,t.fileInfo?{key:"description",fn:function(){return[e("div",{staticClass:"sidebar__description"},[t.isSystemTagsEnabled&&t.showTagsDefault?e("SystemTags",{directives:[{name:"show",rawName:"v-show",value:t.showTags,expression:"showTags"}],attrs:{"file-id":t.fileInfo.id},on:{"has-tags":e=>t.showTags=e}}):t._e(),t._v(" "),t._l(t.views,(function(i){return e("LegacyView",{key:i.cid,attrs:{component:i,"file-info":t.fileInfo}})}))],2)]},proxy:!0}:null,t.fileInfo?{key:"secondary-actions",fn:function(){return[e("NcActionButton",{attrs:{"close-after-click":!0},on:{click:function(e){return t.toggleStarred(!t.fileInfo.isFavourited)}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("NcIconSvgWrapper",{attrs:{path:t.fileInfo.isFavourited?t.mdiStarOutline:t.mdiStar}})]},proxy:!0}],null,!1,3772937801)},[t._v("\n\t\t\t"+t._s(t.fileInfo.isFavourited?t.t("files","Remove from favorites"):t.t("files","Add to favorites"))+"\n\t\t")]),t._v(" "),t.isSystemTagsEnabled?e("NcActionButton",{attrs:{"close-after-click":!0,icon:"icon-tag"},on:{click:t.toggleTags}},[t._v("\n\t\t\t"+t._s(t.t("files","Tags"))+"\n\t\t")]):t._e()]},proxy:!0}:null],null,!0)},"NcAppSidebar",t.appSidebar,!1),[t._v(" "),t._v(" "),t._v(" "),t.error?e("NcEmptyContent",{attrs:{icon:"icon-error"}},[t._v("\n\t\t"+t._s(t.error)+"\n\t")]):t.fileInfo?t._l(t.tabs,(function(i){return[i.enabled(t.fileInfo)?e("SidebarTab",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],key:i.id,attrs:{id:i.id,name:i.name,icon:i.icon,"on-mount":i.mount,"on-update":i.update,"on-destroy":i.destroy,"on-scroll-bottom-reached":i.scrollBottomReached,"file-info":t.fileInfo},scopedSlots:t._u([void 0!==i.iconSvg?{key:"icon",fn:function(){return[e("span",{staticClass:"svg-icon",domProps:{innerHTML:t._s(i.iconSvg)}})]},proxy:!0}:null],null,!0)}):t._e()]})):t._e()],2):t._e()}),[],!1,null,"42f1f086",null).exports;var ct=n(96763);var ut=n(48287),ft=n(85638),ht=n.n(ft);function pt(t,e,i){return(e=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:e+""}(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}s.Ay.prototype.t=r.Tl,window.OCA.Files||(window.OCA.Files={}),Object.assign(window.OCA.Files,{Sidebar:new class{constructor(){var t,e,i;t=this,i=void 0,(e=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:e+""}(e="_state"))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,this._state={},this._state.tabs=[],this._state.views=[],this._state.file="",this._state.activeTab="",ct.debug("OCA.Files.Sidebar initialized")}get state(){return this._state}registerTab(t){return this._state.tabs.findIndex((e=>e.id===t.id))>-1?(ct.error("An tab with the same id ".concat(t.id," already exists"),t),!1):(this._state.tabs.push(t),!0)}registerSecondaryView(t){return this._state.views.findIndex((e=>e.id===t.id))>-1?(ct.error("A similar view already exists",t),!1):(this._state.views.push(t),!0)}get file(){return this._state.file}setActiveTab(t){this._state.activeTab=t}}}),Object.assign(window.OCA.Files.Sidebar,{Tab:class{constructor(){let{id:t,name:e,icon:i,iconSvg:n,mount:s,setIsActive:r,update:a,destroy:o,enabled:l,scrollBottomReached:d}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(pt(this,"_id",void 0),pt(this,"_name",void 0),pt(this,"_icon",void 0),pt(this,"_iconSvgSanitized",void 0),pt(this,"_mount",void 0),pt(this,"_setIsActive",void 0),pt(this,"_update",void 0),pt(this,"_destroy",void 0),pt(this,"_enabled",void 0),pt(this,"_scrollBottomReached",void 0),void 0===l&&(l=()=>!0),void 0===d&&(d=()=>{}),"string"!=typeof t||""===t.trim())throw new Error("The id argument is not a valid string");if("string"!=typeof e||""===e.trim())throw new Error("The name argument is not a valid string");if(("string"!=typeof i||""===i.trim())&&"string"!=typeof n)throw new Error("Missing valid string for icon or iconSvg argument");if("function"!=typeof s)throw new Error("The mount argument should be a function");if(void 0!==r&&"function"!=typeof r)throw new Error("The setIsActive argument should be a function");if("function"!=typeof a)throw new Error("The update argument should be a function");if("function"!=typeof o)throw new Error("The destroy argument should be a function");if("function"!=typeof l)throw new Error("The enabled argument should be a function");if("function"!=typeof d)throw new Error("The scrollBottomReached argument should be a function");this._id=t,this._name=e,this._icon=i,this._mount=s,this._setIsActive=r,this._update=a,this._destroy=o,this._enabled=l,this._scrollBottomReached=d,"string"==typeof n&&(async t=>{if(!t)throw new Error("Not an svg");let e="";if(e=ut.Buffer.isBuffer(t)||t instanceof File?await(t=>new Promise((e=>{if(void 0!==t.size){const i=new FileReader;i.onload=()=>{e(i.result)},i.readAsText(t)}else e(t.toString("utf-8"))})))(t):t,!ht()(e))throw new Error("Not an svg");const i=document.createElement("div");i.innerHTML=e;const n=i.firstElementChild,s=!!Array.from(n.attributes).map((({name:t})=>t)).find((t=>t.startsWith("on")));return 0!==n.getElementsByTagName("script").length||s?null:t})(n).then((t=>{this._iconSvgSanitized=t}))}get id(){return this._id}get name(){return this._name}get icon(){return this._icon}get iconSvg(){return this._iconSvgSanitized}get mount(){return this._mount}get setIsActive(){return this._setIsActive||(()=>{})}get update(){return this._update}get destroy(){return this._destroy}get enabled(){return this._enabled}get scrollBottomReached(){return this._scrollBottomReached}}}),window.addEventListener("DOMContentLoaded",(function(){const t=document.querySelector("body > .content")||document.querySelector("body > #content");if(t&&!document.getElementById("app-sidebar")){const e=document.createElement("div");e.id="app-sidebar",t.appendChild(e)}const e=new(s.Ay.extend(dt))({name:"SidebarRoot"});e.$mount("#app-sidebar"),window.OCA.Files.Sidebar.open=e.open,window.OCA.Files.Sidebar.close=e.close,window.OCA.Files.Sidebar.setFullScreenMode=e.setFullScreenMode,window.OCA.Files.Sidebar.setShowTagsDefault=e.setShowTagsDefault}))},79501:(t,e,i)=>{i.d(e,{A:()=>o});var n=i(71354),s=i.n(n),r=i(76314),a=i.n(r)()(s());a.push([t.id,'.app-sidebar--has-preview[data-v-42f1f086] .app-sidebar-header__figure{background-size:cover}.app-sidebar--has-preview[data-v-42f1f086][data-mimetype="text/plain"] .app-sidebar-header__figure,.app-sidebar--has-preview[data-v-42f1f086][data-mimetype="text/markdown"] .app-sidebar-header__figure{background-size:contain}.app-sidebar--full[data-v-42f1f086]{position:fixed !important;z-index:2025 !important;top:0 !important;height:100% !important}.app-sidebar[data-v-42f1f086] .app-sidebar-header__description{margin:0 16px 4px 16px !important}.app-sidebar .svg-icon[data-v-42f1f086] svg{width:20px;height:20px;fill:currentColor}.sidebar__description[data-v-42f1f086]{display:flex;flex-direction:column;width:100%;gap:8px 0}',"",{version:3,sources:["webpack://./apps/files/src/views/Sidebar.vue"],names:[],mappings:"AAGE,uEACC,qBAAA,CAKA,yMACC,uBAAA,CAKH,oCACC,yBAAA,CACA,uBAAA,CACA,gBAAA,CACA,sBAAA,CAIA,+DACC,iCAAA,CAKD,4CACC,UAAA,CACA,WAAA,CACA,iBAAA,CAKH,uCACC,YAAA,CACA,qBAAA,CACA,UAAA,CACA,SAAA",sourcesContent:['\n.app-sidebar {\n\t&--has-preview:deep {\n\t\t.app-sidebar-header__figure {\n\t\t\tbackground-size: cover;\n\t\t}\n\n\t\t&[data-mimetype="text/plain"],\n\t\t&[data-mimetype="text/markdown"] {\n\t\t\t.app-sidebar-header__figure {\n\t\t\t\tbackground-size: contain;\n\t\t\t}\n\t\t}\n\t}\n\n\t&--full {\n\t\tposition: fixed !important;\n\t\tz-index: 2025 !important;\n\t\ttop: 0 !important;\n\t\theight: 100% !important;\n\t}\n\n\t:deep {\n\t\t.app-sidebar-header__description {\n\t\t\tmargin: 0 16px 4px 16px !important;\n\t\t}\n\t}\n\n\t.svg-icon {\n\t\t::v-deep svg {\n\t\t\twidth: 20px;\n\t\t\theight: 20px;\n\t\t\tfill: currentColor;\n\t\t}\n\t}\n}\n\n.sidebar__description {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\tgap: 8px 0;\n}\n'],sourceRoot:""}]);const o=a},25332:(t,e,i)=>{i.d(e,{A:()=>o});var n=i(71354),s=i.n(n),r=i(76314),a=i.n(r)()(s());a.push([t.id,".system-tags[data-v-ff76457c]{display:flex;flex-direction:column}.system-tags__select[data-v-ff76457c]{width:100%}.system-tags__select[data-v-ff76457c] .vs__deselect{padding:0}","",{version:3,sources:["webpack://./apps/systemtags/src/components/SystemTags.vue"],names:[],mappings:"AACA,8BACC,YAAA,CACA,qBAAA,CAGA,sCACC,UAAA,CAEC,oDACC,SAAA",sourcesContent:["\n.system-tags {\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t// Fix issue with AppSidebar styles overwriting NcSelect styles\n\t&__select {\n\t\twidth: 100%;\n\t\t:deep {\n\t\t\t.vs__deselect {\n\t\t\t\tpadding: 0;\n\t\t\t}\n\t\t}\n\t}\n}\n"],sourceRoot:""}]);const o=a},86454:(t,e,i)=>{const n=i(43918),s=i(32923),r=i(8904);t.exports={XMLParser:s,XMLValidator:n,XMLBuilder:r}}},r={};function a(t){var e=r[t];if(void 0!==e)return e.exports;var i=r[t]={id:t,loaded:!1,exports:{}};return s[t].call(i.exports,i,i.exports,a),i.loaded=!0,i.exports}a.m=s,e=[],a.O=(t,i,n,s)=>{if(!i){var r=1/0;for(c=0;c<e.length;c++){i=e[c][0],n=e[c][1],s=e[c][2];for(var o=!0,l=0;l<i.length;l++)(!1&s||r>=s)&&Object.keys(a.O).every((t=>a.O[t](i[l])))?i.splice(l--,1):(o=!1,s<r&&(r=s));if(o){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[i,n,s]},a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},a.f={},a.e=t=>Promise.all(Object.keys(a.f).reduce(((e,i)=>(a.f[i](t,e),e)),[])),a.u=t=>t+"-"+t+".js?v="+{4065:"8ce35ae6dd9d1ce3481a",4254:"96661b9f421b07ce7189"}[t],a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i={},n="nextcloud:",a.l=(t,e,s,r)=>{if(i[t])i[t].push(e);else{var o,l;if(void 0!==s)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==n+s){o=u;break}}o||(l=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",n+s),o.src=t),i[t]=[e];var f=(e,n)=>{o.onerror=o.onload=null,clearTimeout(h);var s=i[t];if(delete i[t],o.parentNode&&o.parentNode.removeChild(o),s&&s.forEach((t=>t(n))),e)return e(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=f.bind(null,o.onerror),o.onload=f.bind(null,o.onload),l&&document.head.appendChild(o)}},a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),a.j=4763,(()=>{var t;a.g.importScripts&&(t=a.g.location+"");var e=a.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var i=e.getElementsByTagName("script");if(i.length)for(var n=i.length-1;n>-1&&(!t||!/^http(s?):/.test(t));)t=i[n--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=t})(),(()=>{a.b=document.baseURI||self.location.href;var t={4763:0};a.f.j=(e,i)=>{var n=a.o(t,e)?t[e]:void 0;if(0!==n)if(n)i.push(n[2]);else{var s=new Promise(((i,s)=>n=t[e]=[i,s]));i.push(n[2]=s);var r=a.p+a.u(e),o=new Error;a.l(r,(i=>{if(a.o(t,e)&&(0!==(n=t[e])&&(t[e]=void 0),n)){var s=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;o.message="Loading chunk "+e+" failed.\n("+s+": "+r+")",o.name="ChunkLoadError",o.type=s,o.request=r,n[1](o)}}),"chunk-"+e,e)}},a.O.j=e=>0===t[e];var e=(e,i)=>{var n,s,r=i[0],o=i[1],l=i[2],d=0;if(r.some((e=>0!==t[e]))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(l)var c=l(a)}for(e&&e(i);d<r.length;d++)s=r[d],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(c)},i=self.webpackChunknextcloud=self.webpackChunknextcloud||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))})(),a.nc=void 0;var o=a.O(void 0,[4208],(()=>a(8471)));o=a.O(o)})();
//# sourceMappingURL=files-sidebar.js.map?v=f325da9f5ab1cb31ecbe