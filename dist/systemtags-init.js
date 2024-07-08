(()=>{var t,e={49611:(t,e,s)=>{"use strict";var n=s(42166),i=s(53334),r=s(85072),o=s.n(r),a=s(97825),l=s.n(a),d=s(77659),c=s.n(d),A=s(55056),g=s.n(A),p=s(10540),m=s.n(p),u=s(41113),f=s.n(u),C=s(73911),v={};v.styleTagTransform=f(),v.setAttributes=g(),v.insert=c().bind(null,"head"),v.domAPI=l(),v.insertStyleElement=m(),o()(C.A,v),C.A&&C.A.locals&&C.A.locals;const y=function(t){var e;const s=null===(e=t.attributes)||void 0===e||null===(e=e["system-tags"])||void 0===e?void 0:e["system-tag"];return void 0===s?[]:[s].flat()},h=function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const s=document.createElement("li");return s.classList.add("files-list__system-tag"),s.textContent=t,e&&s.classList.add("files-list__system-tag--more"),s},b=new n.hY({id:"system-tags",displayName:()=>"",iconSvgInline:()=>"",enabled(t){if(1!==t.length)return!1;const e=t[0];return 0!==y(e).length},exec:async()=>null,async renderInline(t){const e=y(t);if(0===e.length)return null;const s=document.createElement("ul");if(s.classList.add("files-list__system-tags"),1===e.length)s.setAttribute("aria-label",(0,i.Tl)("files","This file has the tag {tag}",{tag:e[0]}));else{const t=e.slice(0,-1).join(", "),n=e[e.length-1];s.setAttribute("aria-label",(0,i.Tl)("files","This file has the tags {firstTags} and {lastTag}",{firstTags:t,lastTag:n}))}if(s.append(h(e[0])),e.length>1){const t=h("+"+(e.length-1),!0);t.setAttribute("title",e.slice(1).join(", ")),s.append(t)}return s},order:0});(0,n.Yc)("nc:system-tags"),(0,n.Gg)(b);var w=s(63814),x=s(21777),_=(s(65043),s(63623));const T=(0,w.dC)("dav"),B=(0,_.UU)(T),O=t=>{B.setHeaders({"X-Requested-With":"XMLHttpRequest",requesttoken:null!=t?t:""})};(0,x.zo)(O),O((0,x.do)());var L=s(71654);const j=(0,s(35947).YK)().setApp("systemtags").detectUser().build(),E=(0,n.H4)(),P=t=>(0,n.Al)(t),S=t=>'<?xml version="1.0"?>\n<oc:filter-files '.concat((0,n.CP)(),">\n\t<d:prop>\n\t\t").concat((0,n.VX)(),"\n\t</d:prop>\n    <oc:filter-rules>\n        <oc:systemtag>").concat(t,"</oc:systemtag>\n    </oc:filter-rules>\n</oc:filter-files>"),k=function(t){var e;return new n.vd({id:t.id,source:(0,w.dC)("dav/systemtags/"+t.id),owner:null===(e=(0,x.HW)())||void 0===e?void 0:e.uid,root:"/systemtags",permissions:n.aX.READ,attributes:{...t,"is-tag":!0}})};(0,n.bh)().register(new n.Ss({id:"tags",name:(0,i.Tl)("systemtags","Tags"),caption:(0,i.Tl)("systemtags","List of tags and their associated files and folders."),emptyTitle:(0,i.Tl)("systemtags","No tags found"),emptyCaption:(0,i.Tl)("systemtags","Tags you have created will show up here."),icon:'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-tag-multiple" viewBox="0 0 24 24"><path d="M5.5,9A1.5,1.5 0 0,0 7,7.5A1.5,1.5 0 0,0 5.5,6A1.5,1.5 0 0,0 4,7.5A1.5,1.5 0 0,0 5.5,9M17.41,11.58C17.77,11.94 18,12.44 18,13C18,13.55 17.78,14.05 17.41,14.41L12.41,19.41C12.05,19.77 11.55,20 11,20C10.45,20 9.95,19.78 9.58,19.41L2.59,12.42C2.22,12.05 2,11.55 2,11V6C2,4.89 2.89,4 4,4H9C9.55,4 10.05,4.22 10.41,4.58L17.41,11.58M13.54,5.71L14.54,4.71L21.41,11.58C21.78,11.94 22,12.45 22,13C22,13.55 21.78,14.05 21.42,14.41L16.04,19.79L15.04,18.79L20.75,13L13.54,5.71Z" /></svg>',order:25,getContents:async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/";const e=(await(async()=>{try{const{data:t}=await B.getDirectoryContents("/systemtags",{data:'<?xml version="1.0"?>\n<d:propfind  xmlns:d="DAV:" xmlns:oc="http://owncloud.org/ns">\n\t<d:prop>\n\t\t<oc:id />\n\t\t<oc:display-name />\n\t\t<oc:user-visible />\n\t\t<oc:user-assignable />\n\t\t<oc:can-assign />\n\t</d:prop>\n</d:propfind>',details:!0,glob:"/systemtags/*"});return(t=>t.map((t=>{let{props:e}=t;return Object.fromEntries(Object.entries(e).map((t=>{let[e,s]=t;return[(0,L.A)(e),"displayName"===(0,L.A)(e)?String(s):s]})))})))(t)}catch(t){throw j.error((0,i.Tl)("systemtags","Failed to load tags"),{error:t}),new Error((0,i.Tl)("systemtags","Failed to load tags"))}})()).filter((t=>t.userVisible));var s;if("/"===t)return{folder:new n.vd({id:0,source:(0,w.dC)("dav/systemtags"),owner:null===(s=(0,x.HW)())||void 0===s?void 0:s.uid,root:"/systemtags",permissions:n.aX.NONE}),contents:e.map(k)};const r=parseInt(t.replace("/",""),10),o=e.find((t=>t.id===r));if(!o)throw new Error("Tag not found");return{folder:k(o),contents:(await E.getDirectoryContents("/",{details:!0,data:S(r),headers:{method:"REPORT"}})).data.map(P)}}}))},73911:(t,e,s)=>{"use strict";s.d(e,{A:()=>a});var n=s(71354),i=s.n(n),r=s(76314),o=s.n(r)()(i());o.push([t.id,".files-list__system-tags{--min-size: 32px;display:none;justify-content:center;align-items:center;min-width:calc(var(--min-size)*2);max-width:300px}.files-list__system-tag{padding:5px 10px;border:1px solid;border-radius:var(--border-radius-pill);border-color:var(--color-border);color:var(--color-text-maxcontrast);height:var(--min-size);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:22px;text-align:center}.files-list__system-tag--more{overflow:visible;text-overflow:initial}.files-list__system-tag+.files-list__system-tag{margin-left:5px}@media(min-width: 512px){.files-list__system-tags{display:flex}}","",{version:3,sources:["webpack://./apps/systemtags/src/css/fileEntryInlineSystemTags.scss"],names:[],mappings:"AAKA,yBACC,gBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,iCAAA,CACA,eAAA,CAGD,wBACC,gBAAA,CACA,gBAAA,CACA,uCAAA,CACA,gCAAA,CACA,mCAAA,CACA,sBAAA,CACA,kBAAA,CACA,eAAA,CACA,sBAAA,CACA,gBAAA,CACA,iBAAA,CAEA,8BACC,gBAAA,CACA,qBAAA,CAID,gDACC,eAAA,CAIF,yBACC,yBACC,YAAA,CAAA",sourcesContent:["/**\n * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */\n\n.files-list__system-tags {\n\t--min-size: 32px;\n\tdisplay: none;\n\tjustify-content: center;\n\talign-items: center;\n\tmin-width: calc(var(--min-size) * 2);\n\tmax-width: 300px;\n}\n\n.files-list__system-tag {\n\tpadding: 5px 10px;\n\tborder: 1px solid;\n\tborder-radius: var(--border-radius-pill);\n\tborder-color: var(--color-border);\n\tcolor: var(--color-text-maxcontrast);\n\theight: var(--min-size);\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tline-height: 22px; // min-size - 2 * 5px padding\n\ttext-align: center;\n\n\t&--more {\n\t\toverflow: visible;\n\t\ttext-overflow: initial;\n\t}\n\n\t// Proper spacing if multiple shown\n\t& + .files-list__system-tag {\n\t\tmargin-left: 5px;\n\t}\n}\n\n@media (min-width: 512px) {\n\t.files-list__system-tags {\n\t\tdisplay: flex;\n\t}\n}\n"],sourceRoot:""}]);const a=o},42634:()=>{},15340:()=>{},79838:()=>{}},s={};function n(t){var i=s[t];if(void 0!==i)return i.exports;var r=s[t]={id:t,loaded:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=e,t=[],n.O=(e,s,i,r)=>{if(!s){var o=1/0;for(c=0;c<t.length;c++){s=t[c][0],i=t[c][1],r=t[c][2];for(var a=!0,l=0;l<s.length;l++)(!1&r||o>=r)&&Object.keys(n.O).every((t=>n.O[t](s[l])))?s.splice(l--,1):(a=!1,r<o&&(o=r));if(a){t.splice(c--,1);var d=i();void 0!==d&&(e=d)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[s,i,r]},n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.e=()=>Promise.resolve(),n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),n.j=2766,(()=>{n.b=document.baseURI||self.location.href;var t={2766:0};n.O.j=e=>0===t[e];var e=(e,s)=>{var i,r,o=s[0],a=s[1],l=s[2],d=0;if(o.some((e=>0!==t[e]))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(l)var c=l(n)}for(e&&e(s);d<o.length;d++)r=o[d],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},s=self.webpackChunknextcloud=self.webpackChunknextcloud||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))})(),n.nc=void 0;var i=n.O(void 0,[4208],(()=>n(49611)));i=n.O(i)})();
//# sourceMappingURL=systemtags-init.js.map?v=ae89c0a84ae23e473919