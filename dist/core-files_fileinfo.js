!function(t){const i=function(t){const i=this;_.each(t,(function(t,e){_.isFunction(t)||(i[e]=t)})),_.isUndefined(this.id)||(this.id=parseInt(t.id,10)),this.path=t.path||"","dir"===this.type?this.mimetype="httpd/unix-directory":this.mimetype=this.mimetype||"application/octet-stream",this.type||("httpd/unix-directory"===this.mimetype?this.type="dir":this.type="file")};i.prototype={id:null,name:null,path:null,mimetype:null,icon:null,type:null,permissions:null,mtime:null,etag:null,mountType:null,hasPreview:!0,sharePermissions:null,shareAttributes:[],quotaAvailableBytes:-1,canDownload:function(){for(const t in this.shareAttributes){const i=this.shareAttributes[t];if("permissions"===i.scope&&"download"===i.key)return i.enabled}return!0}},t.Files||(t.Files={}),t.Files.FileInfo=i}(OC);
//# sourceMappingURL=core-files_fileinfo.js.map?v=80d9cfb2471485e36856