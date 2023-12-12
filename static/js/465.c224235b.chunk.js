"use strict";(self.webpackChunkmmsp_station=self.webpackChunkmmsp_station||[]).push([[465],{17493:(e,t,n)=>{n.d(t,{CP:()=>a,JG:()=>h,LL:()=>l,NZ:()=>c,fV:()=>m,vj:()=>g,yT:()=>w,zE:()=>y});var r=n(76200),o=n(63780),i=n(66978),s=n(18277);class a{constructor(e,t,n){this.assetName=e,this.assetMimeType=t,this.parts=n}equals(e){return this===e||this.assetName===e.assetName&&this.assetMimeType===e.assetMimeType&&(0,o.fS)(this.parts,e.parts,((e,t)=>e.equals(t)))}isOnService(e){return this.parts.every((t=>t.isOnService(e)))}makeHash(){let e="";for(const t of this.parts)e+=t.partHash;return e}async toBlob(e){const{parts:t}=this;if(1===t.length)return t[0].toBlob(e);const n=await Promise.all(t.map((t=>t.toBlob(e))));return(0,i.k_)(e),new Blob(n)}}class l{constructor(e,t){this.partUrl=e,this.partHash=t}equals(e){return this===e||this.partUrl===e.partUrl&&this.partHash===e.partHash}isOnService(e){return this.partUrl.startsWith("".concat(e.path,"/assets/"))}async toBlob(e){const{data:t}=await(0,r.Z)(this.partUrl,{responseType:"blob"});return(0,i.k_)(e),t}}function c(e){return function(e){if(!e)return!1;if(Array.isArray(e))return e.some(d);return d(e)}(null===e||void 0===e?void 0:e.source)}function u(e){return!!Array.isArray(e)&&e.every((e=>e instanceof a))}const p=/^(model\/gltf\+json)|(model\/gltf-binary)$/,f=/\.(gltf|glb)/i;function d(e){if(e instanceof File){const{type:t,name:n}=e;return p.test(t)||f.test(n)}return p.test(e.assetMimeType)||f.test(e.assetName)}function h(e,t){if(!e)return!1;const{source:n}=e;return function(e,t){if(Array.isArray(e)){const n=e;return n.length>0&&n.every((e=>v(e,t)))}return v(e,t)}(n,t)}function m(e,t){if(e===t)return!0;const{source:n}=e,{source:r}=t;if(n===r)return!0;if(u(n)&&u(r)){if(n.length!==r.length)return!1;const e=(e,t)=>e.assetName<t.assetName?-1:e.assetName>t.assetName?1:0,t=[...n].sort(e),o=[...r].sort(e);for(let n=0;n<t.length;++n)if(!t[n].equals(o[n]))return!1;return!0}return!1}function v(e,t){return e instanceof a&&e.isOnService(t)}function g(e,t){var n;return e instanceof File?(0,s.dm)(e,t):null!==(n=(0,s.S0)(e.assetMimeType,t))&&void 0!==n?n:(0,s.Ow)(e.assetName,t)}function y(e){return Array.isArray(e)?e:[e]}function w(e){return!!e.original}},50465:(e,t,n)=>{n.r(t),n.d(t,{assetMapFromAssetMapsJSON:()=>tt,extractMesh:()=>$e,meshFeatureSetFromJSON:()=>Xe});var r=n(52639),o=n(32718),i=n(77427),s=n(71353),a=n(53866),l=n(27366),c=n(10064),u=n(54472),p=n(67426),f=n(66978),d=n(94172),h=n(49861),m=(n(25243),n(63780),n(93169),n(69912)),v=n(32238),g=n(585),y=n(80885),w=n(45238),x=n(64995);class b extends c.Z{constructor(){super("mesh-not-loaded","Mesh must be loaded before applying operations")}}class A extends c.Z{constructor(){super("component-not-found","Provided component is not part of the list of components")}}class S extends c.Z{constructor(){super("invalid-polygon","expected polygon to be a Polygon instance")}}class Z extends c.Z{constructor(){super("invalid-input:location","Expected location to be a Point instance")}}class R extends c.Z{constructor(){super("invalid-input:no-layer","A layer is needed to convert the files")}}class F extends c.Z{constructor(){super("invalid-input:no-model","No supported model found")}}class M extends c.Z{constructor(){super("invalid-input:multiple-models","Multiple supported models found")}}var C=n(80880),L=n(8623),_=n(50250),P=n(76046),E=n(27474),O=n(91320),j=n(57898);let k=null;function T(e,t){let n=1/0,r=1/0,o=1/0,i=-1/0,s=-1/0,l=-1/0;const c=e.length;let u=0;for(;u<c;){const t=e[u++],a=e[u++],c=e[u++];n=Math.min(n,t),r=Math.min(r,a),o=Math.min(o,c),i=Math.max(i,t),s=Math.max(s,a),l=Math.max(l,c)}return new a.Z({xmin:n,ymin:r,zmin:o,xmax:i,ymax:s,zmax:l,spatialReference:t})}var N=n(11186),z=n(68859),D=n(26548);const U="esri.geometry.support.meshUtils.centerAt";function I(e,t,n){var r,i;if(null===(r=e.vertexAttributes)||void 0===r||!r.position)return;const{vertexSpace:a}=e,l=null!==(i=null===n||void 0===n?void 0:n.origin)&&void 0!==i?i:e.origin;a.isRelative?((0,D.A)(a,U,n),function(e,t,n){const{vertexSpace:r}=e;if(!r.isRelative)return;const i=G,a=B;if(!(0,z.K)(t,a,e.spatialReference))return void o.Z.getLogger(U).error("Failed to project centerAt location (wkid:".concat(t.spatialReference.wkid,") to mesh spatial reference (wkid:").concat(e.spatialReference.wkid,"). Projection may be possible after calling projection.load()."));if(!(0,z.K)(n,i,e.spatialReference)){const t=e.origin;i[0]=t.x,i[1]=t.y,i[2]=t.z,o.Z.getLogger(U).error("Failed to project specified origin (wkid:".concat(n.spatialReference.wkid,") to mesh spatial reference (wkid:").concat(e.spatialReference.wkid,"). Projection may be possible after calling projection.load()."))}const l=(0,N.f)(V,a,i),c=r.origin;r.origin=(0,N.g)((0,s.c)(),c,l)}(e,t,l)):(0,D.h)(e.spatialReference,n)?function(e,t,n){const r=(0,j.FF)(e.vertexAttributes,n,{geographic:!0}),{position:o,normal:i,tangent:s}=(0,j.iv)(r,t,{geographic:!0});e.vertexAttributes.position=o,e.vertexAttributes.normal=i,e.vertexAttributes.tangent=s,e.vertexAttributesChanged()}(e,t,l):function(e,t,n){const r=G,i=B;if((0,z.K)(t,i,e.spatialReference)){if(!(0,z.K)(n,r,e.spatialReference)){const t=e.origin;r[0]=t.x,r[1]=t.y,r[2]=t.z,o.Z.getLogger(U).error("Failed to project specified origin (wkid:".concat(n.spatialReference.wkid,") to mesh spatial reference (wkid:").concat(e.spatialReference.wkid,"). Projection may be possible after calling projection.load()."))}(function(e,t,n){if(e)for(let r=0;r<e.length;r+=3)for(let o=0;o<3;o++)e[r+o]+=t[o]-n[o]})(e.vertexAttributes.position,i,r),e.vertexAttributesChanged()}else o.Z.getLogger(U).error("Failed to project centerAt location (wkid:".concat(t.spatialReference.wkid,") to mesh spatial reference (wkid:").concat(e.spatialReference.wkid,"). Projection may be possible after calling projection.load()."))}(e,t,l)}const B=(0,s.c)(),G=(0,s.c)(),V=(0,s.c)();n(65905),n(76200);var H=n(35995);n(68401);async function K(e,t,r){const{source:o}=t,{loadGLTFMesh:i}=await(0,f.Hl)(n.e(9626).then(n.bind(n,89626)),r),s=await async function(e,t){if(Array.isArray(e)){if(!e.length)throw new c.Z("mesh-load-external:missing-assets","There must be at least one file to load");return e[0]instanceof File?function(e){return Q(e.map((e=>({name:e.name,mimeType:e.type,source:Y(e)}))))}(e):async function(e,t){const n=await(0,f.OT)(e.map((async e=>{const n=await async function(e,t){const{parts:n,assetMimeType:r,assetName:o}=e;if(1===n.length)return new ee(n[0].partUrl);const i=await e.toBlob(t);return(0,f.k_)(t),ee.fromBlob(i,te(o,r))}(e);return(0,f.k_)(t),{name:e.assetName,mimeType:e.assetMimeType,source:n}})));if((0,f.Hc)(t))throw n.forEach((e=>e.source.dispose())),(0,f.zE)();return Q(n)}(e,t)}return Y(e)}(o,r);(0,f.k_)(r);const a=i(new g.Z({x:0,y:0,z:0,spatialReference:e.spatialReference}),s.url,{resolveFile:W(s),requestFile:void 0,useTransform:!0,signal:null===r||void 0===r?void 0:r.signal,expectedType:s.type});a.then((()=>s.dispose()),(()=>s.dispose()));const{vertexAttributes:l,components:u}=await a;e.vertexAttributes=l,e.components=u}function W(e){const t=(0,H.Yd)(e.url);return n=>{var r;const o=(0,H.PF)(n,t,t),i=o?o.replace(/^ *\.\//,""):null;return null!==(r=i?e.files.get(i):null)&&void 0!==r?r:n}}function Y(e){return ee.fromBlob(e,te(e.name,e.type))}const q=/^model\/gltf\+json$/,J=/^model\/gltf-binary$/,X=/\.gltf$/i,$=/\.glb$/i;function Q(e){const t=new Map;let n,r=null;for(const{name:o,mimeType:i,source:s}of e)null===r&&(q.test(i)||X.test(o)?(r=s.url,n="gltf"):(J.test(i)||$.test(o))&&(r=s.url,n="glb")),t.set(o,s.url),s.files.forEach(((e,n)=>t.set(n,e)));if(null==r)throw new c.Z("mesh-load-external:missing-files","Missing files to load external mesh source");return new ee(r,(()=>e.forEach((e=>{let{source:t}=e;return t.dispose()}))),t,n)}class ee{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Map,r=arguments.length>3?arguments[3]:void 0;this.url=e,this.dispose=t,this.files=n,this.type=r}static fromBlob(e,t){const n=URL.createObjectURL(e);return new ee(n,(()=>URL.revokeObjectURL(n)),void 0,t)}}function te(e,t){return q.test(t)||X.test(e)?"gltf":J.test(t)||X.test(e)?"glb":void 0}var ne=n(11582),re=n(80987),oe=n(17493);let ie=class extends ne.j{constructor(){super(),this.externalSources=new re.Z,this._explicitDisplaySource=null,this.addHandles((0,d.on)((()=>this.externalSources),"after-remove",(e=>{let{item:t}=e;t===this._explicitDisplaySource&&(this._explicitDisplaySource=null)}),{sync:!0,onListenerRemove:()=>this._explicitDisplaySource=null}))}get displaySource(){var e;return null!==(e=this._explicitDisplaySource)&&void 0!==e?e:this._implicitDisplaySource}set displaySource(e){if(null!=e&&!(0,oe.NZ)(e))throw new Error("Cannot use this source for display: it is not in a supported format.");this._explicitDisplaySource=e,e&&this.externalSources.every((t=>!(0,oe.fV)(t,e)))&&this.externalSources.add(e)}clearSources(){this.externalSources.removeAll()}getExternalSourcesOnService(e){return this.externalSources.items.filter((t=>(0,oe.JG)(t,e)))}get _implicitDisplaySource(){return this.externalSources.find(oe.NZ)}};(0,l._)([(0,h.Cb)()],ie.prototype,"externalSources",void 0),(0,l._)([(0,h.Cb)()],ie.prototype,"displaySource",null),(0,l._)([(0,h.Cb)()],ie.prototype,"_implicitDisplaySource",null),(0,l._)([(0,h.Cb)()],ie.prototype,"_explicitDisplaySource",void 0),ie=(0,l._)([(0,m.j)("esri.geometry.support.meshUtils.Metadata")],ie);var se=n(22753),ae=n(11873),le=n(81949),ce=n(29691),ue=n(37998),pe=n(11700);function fe(e,t,n){var r;if(null===(r=e.vertexAttributes)||void 0===r||!r.position)return;const{vertexSpace:o}=e;o.isRelative?((0,D.A)(o,"esri.geometry.support.meshUtils.offset",n),function(e,t){const n=e.origin;e.origin=(0,N.g)((0,s.c)(),n,t)}(o,t)):(0,D.h)(e.spatialReference,n)?function(e,t){const n=e.spatialReference,r=e.vertexAttributes.position,o=e.vertexAttributes.normal,i=e.vertexAttributes.tangent,s=new Float64Array(r.length),a=null!=o?new Float32Array(o.length):null,l=null!=i?new Float32Array(i.length):null,c=e.extent.center,u=he;(0,ue.B)(n,[c.x,c.y,c.z],me,(0,ce.rS)(n)),(0,se.f)(ve,me),(0,N.t)(u,t,ve),(0,pe.XO)(r,n,s),null!=o&&null!=a&&(0,pe.Iz)(o,r,s,n,a),null!=i&&null!=l&&(0,pe.wi)(i,r,s,n,l),de(s,u),(0,pe.To)(s,r,n),null!=o&&null!=a&&(0,pe.Yk)(a,r,s,n,o),null!=i&&null!=l&&(0,pe.M2)(l,r,s,n,i),e.vertexAttributesChanged()}(e,t):function(e,t){de(e.vertexAttributes.position,t),e.vertexAttributesChanged()}(e,t)}function de(e,t){if(e)for(let n=0;n<e.length;n+=3)for(let r=0;r<3;r++)e[n+r]+=t[r]}const he=(0,s.c)(),me=(0,le.a)(),ve=(0,ae.a)();const ge={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[3,1,2],west:[-3,-1,2],north:[-1,3,2],south:[1,-3,2],up:[1,2,3],down:[1,-2,-3]}};function ye(e,t,n){e.isPlane||function(e){for(let t=0;t<e.position.length;t+=3)e.position[t+2]+=.5}(e),function(e,t){if(null==t)return;const n="number"==typeof t?[t,t,t]:[null!=t.width?t.width:1,null!=t.depth?t.depth:1,null!=t.height?t.height:1];Ae[0]=n[0],Ae[4]=n[1],Ae[8]=n[2];for(let r=0;r<e.position.length;r+=3){for(let t=0;t<3;t++)be[t]=e.position[r+t];(0,N.t)(be,be,Ae);for(let t=0;t<3;t++)e.position[r+t]=be[t]}if(n[0]!==n[1]||n[1]!==n[2]){Ae[0]=1/n[0],Ae[4]=1/n[1],Ae[8]=1/n[2];for(let t=0;t<e.normal.length;t+=3){for(let n=0;n<3;n++)be[n]=e.normal[t+n];(0,N.t)(be,be,Ae),(0,N.n)(be,be);for(let n=0;n<3;n++)e.normal[t+n]=be[n]}}}(e,null===n||void 0===n?void 0:n.size);const{vertexAttributes:r,vertexSpace:o,transform:i}=(0,j.w1)(e,t,n);return{vertexAttributes:new E.Q({...r,uv:e.uv}),vertexSpace:o,transform:i,components:[new x.Z({faces:e.faces,material:(null===n||void 0===n?void 0:n.material)||null})],spatialReference:t.spatialReference}}const we={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},xe={south:0,east:1,north:2,west:3,up:4,down:5},be=(0,s.c)(),Ae=(0,ae.a)();var Se=n(14226);const Ze="esri.geometry.support.meshUtils.rotate";function Re(e,t,n){var r;if(null===(r=e.vertexAttributes)||void 0===r||!r.position||0===t[3])return;const{spatialReference:i,vertexSpace:a}=e;if(a.isRelative){var l,c;(0,D.A)(a,Ze,n);const r=null!==(l=null===n||void 0===n?void 0:n.origin)&&void 0!==l?l:e.origin;null!==(c=e.transform)&&void 0!==c||(e.transform=new P.Z),function(e,t,n,r){var o;const i=t.origin,a=(0,N.s)(Me,r.x,r.y,null!==(o=r.z)&&void 0!==o?o:0),l=(0,N.f)(Me,a,i);e.applyLocalInverse(l,Ce),e.rotation=(0,w.qC)(e.rotation,n,(0,w.Ue)()),e.applyLocalInverse(l,l),(0,N.f)(l,l,Ce),e.translation=(0,N.g)((0,s.c)(),e.translation,l)}(e.transform,a,t,r)}else{var u;const r=null!==(u=null===n||void 0===n?void 0:n.origin)&&void 0!==u?u:e.origin;(0,D.h)(i,n)?function(e,t,n){const r=e.spatialReference,o=(0,ce.rS)(r),i=Ee;(0,z.K)(n,i,o)||(0,z.K)(e.origin,i,o);const s=e.vertexAttributes.position,a=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,c=new Float64Array(s.length),u=null!=a?new Float32Array(a.length):null,p=null!=l?new Float32Array(l.length):null;(0,ue.B)(o,i,_e,o),(0,se.f)(Pe,_e);const f=Le;(0,N.t)((0,w.ZZ)(Le),(0,w.ZZ)(t),Pe),f[3]=t[3],(0,pe.XO)(s,r,c),null!=a&&null!=u&&(0,pe.Iz)(a,s,c,r,u),null!=l&&null!=p&&(0,pe.wi)(l,s,c,r,p),Fe(c,f,3,i),(0,pe.To)(c,s,r),null!=a&&null!=u&&(Fe(u,f,3),(0,pe.Yk)(u,s,c,r,a)),null!=l&&null!=p&&(Fe(p,f,4),(0,pe.M2)(p,s,c,r,l)),e.vertexAttributesChanged()}(e,t,r):function(e,t,n){const r=Ee;if(!(0,z.K)(n,r,e.spatialReference)){const t=e.origin;r[0]=t.x,r[1]=t.y,r[2]=t.z,o.Z.getLogger(Ze).error("Failed to project specified origin (wkid:".concat(n.spatialReference.wkid,") to mesh spatial reference (wkid:").concat(e.spatialReference.wkid,"). Projection may be possible after calling projection.load()."))}Fe(e.vertexAttributes.position,t,3,r),Fe(e.vertexAttributes.normal,t,3),Fe(e.vertexAttributes.tangent,t,4),e.vertexAttributesChanged()}(e,t,r)}}function Fe(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:s.Z;if(null!=e){(0,Se.c)(_e,(0,w.WH)(t),(0,w.ZZ)(t));for(let t=0;t<e.length;t+=n){for(let n=0;n<3;n++)Me[n]=e[t+n]-r[n];(0,N.e)(Me,Me,_e);for(let n=0;n<3;n++)e[t+n]=Me[n]+r[n]}}}const Me=(0,s.c)(),Ce=(0,s.c)(),Le=(0,w.Ue)(),_e=(0,le.a)(),Pe=(0,ae.a)(),Ee=(0,s.c)(),Oe="esri.geometry.support.meshUtils.scale";function je(e,t,n){var r;if(null===(r=e.vertexAttributes)||void 0===r||!r.position)return;const{spatialReference:i,vertexSpace:a}=e;if(a.isRelative){var l,c;(0,D.A)(a,Oe,n);const r=null!==(l=null===n||void 0===n?void 0:n.origin)&&void 0!==l?l:e.origin;null!==(c=e.transform)&&void 0!==c||(e.transform=new P.Z),function(e,t,n,r){const o=t.origin,i=(0,N.s)(Te,r.x,r.y,r.z),a=(0,N.f)(Te,i,o);e.applyLocalInverse(a,Ne);const l=(0,N.i)((0,s.c)(),e.scale,n);e.scale=l,e.applyLocalInverse(a,a),(0,N.f)(a,a,Ne),e.translation=(0,N.g)((0,s.c)(),e.translation,a)}(e.transform,a,t,r)}else{var u;const r=(0,D.h)(i,n),s=null!==(u=null===n||void 0===n?void 0:n.origin)&&void 0!==u?u:e.origin;r?function(e,t,n){const r=e.spatialReference,o=(0,ce.rS)(r),i=ze;(0,z.K)(n,i,o)||(0,z.K)(e.origin,i,o);const s=e.vertexAttributes.position,a=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,c=new Float64Array(s.length),u=null!=a?new Float32Array(a.length):null,p=null!=l?new Float32Array(l.length):null;(0,pe.XO)(s,r,c),null!=a&&null!=u&&(0,pe.Iz)(a,s,c,r,u),null!=l&&null!=p&&(0,pe.wi)(l,s,c,r,p),ke(c,t,i),(0,pe.To)(c,s,r),null!=a&&null!=u&&(0,pe.Yk)(u,s,c,r,a),null!=l&&null!=p&&(0,pe.M2)(p,s,c,r,l),e.vertexAttributesChanged()}(e,t,s):function(e,t,n){const r=ze;if(!(0,z.K)(n,r,e.spatialReference)){const t=e.origin;r[0]=t.x,r[1]=t.y,r[2]=t.z,o.Z.getLogger(Oe).error("Failed to project specified origin (wkid:".concat(n.spatialReference.wkid,") to mesh spatial reference (wkid:").concat(e.spatialReference.wkid,"). Projection may be possible after calling projection.load()."))}ke(e.vertexAttributes.position,t,r),e.vertexAttributesChanged()}(e,t,s)}}function ke(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s.Z;if(e)for(let r=0;r<e.length;r+=3){for(let t=0;t<3;t++)Te[t]=e[r+t]-n[t];(0,N.i)(Te,Te,t);for(let t=0;t<3;t++)e[r+t]=Te[t]+n[t]}}const Te=(0,s.c)(),Ne=(0,s.c)(),ze=(0,s.c)();var De,Ue=n(18277);async function Ie(e){const{BlobReader:t,ZipReader:r,BlobWriter:o}=await n.e(581).then(n.bind(n,10581)),i=[],s=new r(new t(e));return(await s.getEntries()).forEach((e=>{var t;if(e.directory||/^__MACOS/i.test(e.filename))return;const n=new o,r=null===(t=e.getData)||void 0===t?void 0:t.call(e,n).then((t=>new File([t],e.filename)));r&&i.push(r)})),Promise.all(i)}const Be="esri.geometry.Mesh",Ge={base:null,key:"type",defaultKeyValue:"georeferenced",typeMap:{georeferenced:L.Z,"georeferenced-relative":C.Z,local:_.Z}};let Ve=De=class extends(u.Z.LoadableMixin((0,p.v)(v.Z))){constructor(e){super(e),this.components=null,this.vertexSpace=new L.Z,this.transform=null,this.metadata=new ie,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new E.Q,this.type="mesh"}initialize(){(0===this.metadata.externalSources.length||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when((()=>{this.addHandles((0,d.YP)((()=>{var e;return{vertexAttributes:this.vertexAttributes,components:null===(e=this.components)||void 0===e?void 0:e.map((e=>e.clone()))}}),(()=>this._clearSources()),{once:!0,sync:!0}))}))}get hasExtent(){var e;return this.loaded?this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0):null!=(null===(e=this.metadata.displaySource)||void 0===e?void 0:e.extent)}get _transformedExtent(){const{components:e,spatialReference:t,vertexAttributes:n,vertexSpace:r}=this,o=n.position;if(0===o.length||e&&0===e.length)return new a.Z({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:t});if("local"===r.type){const{_untransformedExtent:e,transform:n}=this;return function(e,t,n,r){var o,i,s;let{xmin:a,xmax:l,ymin:c,ymax:u,zmin:p,zmax:f}=e;null!==(o=p)&&void 0!==o||(p=0),null!==(i=f)&&void 0!==i||(f=0),null!==(s=k)&&void 0!==s||(k=new Float64Array(24));const d=k;return d[0]=a,d[1]=c,d[2]=p,d[3]=a,d[4]=u,d[5]=p,d[6]=l,d[7]=u,d[8]=p,d[9]=l,d[10]=c,d[11]=p,d[12]=a,d[13]=c,d[14]=f,d[15]=a,d[16]=u,d[17]=f,d[18]=l,d[19]=u,d[20]=f,d[21]=l,d[22]=c,d[23]=f,(0,j.project)({positions:d,transform:t,vertexSpace:n,inSpatialReference:r,outSpatialReference:r,outPositions:d}),T(d,r)}(e,n,r,t)}if("georeferenced-relative"===r.type){const{transform:e}=this;return T((0,j.project)({positions:o,transform:e,vertexSpace:r,inSpatialReference:t,outSpatialReference:t}),t)}return T(o,t)}get _untransformedExtent(){return T(this.vertexAttributes.position,this.spatialReference)}get anchor(){const{vertexSpace:e}=this;if(e.isRelative)return e.getOriginPoint(this.spatialReference);const{center:t,zmin:n}=this._transformedExtent;return new g.Z({x:t.x,y:t.y,z:n,spatialReference:this.spatialReference})}get origin(){const{vertexSpace:e}=this;return e.isRelative?e.getOriginPoint(this.spatialReference):this._transformedExtent.center}get extent(){var e;return this.loaded||null==(null===(e=this.metadata)||void 0===e||null===(e=e.displaySource)||void 0===e?void 0:e.extent)?this._transformedExtent:this.metadata.displaySource.extent.clone()}addComponent(e){if(!this.loaded)return o.Z.getLogger(this).error("addComponent()",(new b).message);this.components||(this.components=[]),this.components.push(x.Z.from(e)),this.notifyChange("components")}removeComponent(e){if(!this.loaded)return o.Z.getLogger(this).error("removeComponent()",(new b).message);if(this.components){const t=this.components.indexOf(e);if(-1!==t)return this.components.splice(t,1),void this.notifyChange("components")}o.Z.getLogger(this).error("removeComponent()",(new A).message)}rotate(e,t,n,r){return(0,w.qw)(e,t,n,Ke),Re(this,Ke,r),this}offset(e,t,n,r){return this.loaded?(He[0]=e,He[1]=t,He[2]=n,fe(this,He,r),this):(o.Z.getLogger(this).error("offset()",(new b).message),this)}scale(e,t){return this.loaded?(je(this,e,t),this):(o.Z.getLogger(this).error("scale()",(new b).message),this)}centerAt(e,t){return this.loaded?(I(this,e,t),this):(o.Z.getLogger(this).error("centerAt()",(new b).message),this)}load(e){const{metadata:{displaySource:t}}=this;return t&&this.addResolvingPromise(K(this,t,e)),Promise.resolve(this)}addExternalSources(e){this.metadata.externalSources.addMany(e)}updateDisplaySource(e){this.metadata.displaySource=e}clone(){return this.cloneWithVertexSpace(this.vertexSpace.clone())}cloneWithVertexSpace(e){var t,n;let r=null;if(this.components){const e=new Map,t=new Map;r=this.components.map((n=>n.cloneWithDeduplication(e,t)))}const o={components:r,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),vertexSpace:e,transform:null!==(t=null===(n=this.transform)||void 0===n?void 0:n.clone())&&void 0!==t?t:null,metadata:this.metadata.clone()};return new De(o)}cloneShallow(){return new De({components:this.components,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes,vertexSpace:this.vertexSpace.clone(),transform:this.transform,metadata:this.metadata})}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(e){const t=n.e(1553).then(n.bind(n,11553)),r=this.load(),o=await Promise.all([t,r]),{toBinaryGLTF:i}=o[0];return i(this,e)}get memoryUsage(){let e=0;if(e+=this.vertexAttributes.memoryUsage,null!=this.components)for(const t of this.components)e+=t.memoryUsage;return e}_clearSources(){this.metadata.clearSources()}static createBox(e,t){if(!(e instanceof g.Z))return o.Z.getLogger(Be).error(".createBox()",(new Z).message),null;const n=new De(ye(function(){const{faceDescriptions:e,faceVertexOffsets:t,uvScales:n}=we,r=4*e.length,o=new Float64Array(3*r),i=new Float32Array(3*r),s=new Float32Array(2*r),a=new Uint32Array(2*e.length*3);let l=0,c=0,u=0,p=0;for(let f=0;f<e.length;f++){const r=e[f],d=l/3;for(const e of t)a[p++]=d+e;const h=r.corners;for(let e=0;e<4;e++){const t=h[e];let a=0;s[u++]=.25*n[e][0]+r.uvOrigin[0],s[u++]=r.uvOrigin[1]-.25*n[e][1];for(let e=0;e<3;e++)0!==r.axis[e]?(o[l++]=.5*r.axis[e],i[c++]=r.axis[e]):(o[l++]=.5*t[a++],i[c++]=0)}}return{position:o,normal:i,uv:s,faces:a}}(),e,t));return null!==t&&void 0!==t&&t.imageFace&&"all"!==t.imageFace?function(e,t){const n=e.components[0],r=n.faces,o=xe[t],i=6*o,s=new Array(6),a=new Array(r.length-6);let l=0,c=0;for(let u=0;u<r.length;u++)u>=i&&u<i+6?s[l++]=r[u]:a[c++]=r[u];if(null!=e.vertexAttributes.uv){const t=new Float32Array(e.vertexAttributes.uv),n=4*o*2,r=[0,1,1,1,1,0,0,0];for(let e=0;e<r.length;e++)t[n+e]=r[e];e.vertexAttributes.uv=t}return e.components=[new x.Z({faces:s,material:n.material}),new x.Z({faces:a})],e}(n,t.imageFace):n}static createSphere(e,t){return e instanceof g.Z?new De(ye(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const t=Math.round(8*2**e),n=2*t,r=(t-1)*(n+1)+2*n,o=new Float64Array(3*r),i=new Float32Array(3*r),s=new Float32Array(2*r),a=new Uint32Array((t-1)*n*2*3);let l=0,c=0,u=0,p=0;for(let f=0;f<=t;f++){const e=f/t*Math.PI+.5*Math.PI,r=Math.cos(e),d=Math.sin(e);be[2]=d;const h=0===f||f===t,m=h?n-1:n;for(let v=0;v<=m;v++){const e=v/m*2*Math.PI;be[0]=-Math.sin(e)*r,be[1]=Math.cos(e)*r;for(let t=0;t<3;t++)o[l]=.5*be[t],i[l]=be[t],++l;s[c++]=(v+(h?.5:0))/n,s[c++]=f/t,0!==f&&v!==n&&(f!==t&&(a[u++]=p,a[u++]=p+1,a[u++]=p-n),1!==f&&(a[u++]=p,a[u++]=p-n,a[u++]=p-n-1)),p++}}return{position:o,normal:i,uv:s,faces:a}}((null===t||void 0===t?void 0:t.densificationFactor)||0),e,t)):(o.Z.getLogger(Be).error(".createSphere()",(new Z).message),null)}static createCylinder(e,t){return e instanceof g.Z?new De(ye(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const t=Math.round(16*2**e),n=4*(t+1)+2*t,r=new Float64Array(3*n),o=new Float32Array(3*n),i=new Float32Array(2*n),s=new Uint32Array(4*t*3);let a=0,l=0,c=0,u=0,p=0;for(let f=0;f<=5;f++){const e=0===f||5===f,n=f<=1||f>=4,d=2===f||4===f,h=e?t-1:t;for(let m=0;m<=h;m++){const v=m/h*2*Math.PI,g=e?0:.5;be[0]=g*Math.sin(v),be[1]=g*-Math.cos(v),be[2]=f<=2?.5:-.5;for(let e=0;e<3;e++)r[a++]=be[e],o[l++]=n?2===e?f<=1?1:-1:0:2===e?0:be[e]/g;i[c++]=(m+(e?.5:0))/t,i[c++]=f<=1?1*f/3:f<=3?1*(f-2)/3+1/3:1*(f-4)/3+2/3,d||0===f||m===t||(5!==f&&(s[u++]=p,s[u++]=p+1,s[u++]=p-t),1!==f&&(s[u++]=p,s[u++]=p-t,s[u++]=p-t-1)),p++}}return{position:r,normal:o,uv:i,faces:s}}((null===t||void 0===t?void 0:t.densificationFactor)||0),e,t)):(o.Z.getLogger(Be).error(".createCylinder()",(new Z).message),null)}static createPlane(e,t){var n;if(!(e instanceof g.Z))return o.Z.getLogger(Be).error(".createPlane()",(new Z).message),null;const r=null!==(n=null===t||void 0===t?void 0:t.facing)&&void 0!==n?n:"up",i=function(e,t){const n="number"==typeof t?t:null!=t?t.width:1,r="number"==typeof t?t:null!=t?t.height:1;switch(e){case"up":case"down":return{width:n,depth:r};case"north":case"south":return{width:n,height:r};case"east":case"west":return{depth:n,height:r}}}(r,null===t||void 0===t?void 0:t.size);return new De(ye(function(e){const t=ge.facingAxisOrderSwap[e],n=ge.position,r=ge.normal,o=new Float64Array(n.length),i=new Float32Array(r.length);let s=0;for(let a=0;a<4;a++){const e=s;for(let a=0;a<3;a++){const l=t[a],c=Math.abs(l)-1,u=l>=0?1:-1;o[s]=n[e+c]*u,i[s]=r[e+c]*u,s++}}return{position:o,normal:i,uv:new Float32Array(ge.uv),faces:new Uint32Array(ge.faces),isPlane:!0}}(r),e,{...t,size:i}))}static createFromPolygon(e,t){var n;if(!(e instanceof y.Z))return o.Z.getLogger(Be).error(".createFromPolygon()",(new S).message),null;const r=(0,O.bT)(e);return new De({vertexAttributes:new E.Q({position:r.position}),components:[new x.Z({faces:r.faces,shading:"flat",material:null!==(n=null===t||void 0===t?void 0:t.material)&&void 0!==n?n:null})],spatialReference:e.spatialReference,vertexSpace:new L.Z})}static async createFromGLTF(e,t,r){if(!(e instanceof g.Z)){const e=new Z;throw o.Z.getLogger(Be).error(".createfromGLTF()",e.message),e}const{loadGLTFMesh:i}=await(0,f.Hl)(n.e(9626).then(n.bind(n,89626)),r);return new De(await i(e,t,r))}static async createFromFiles(e,t,n){const r=e=>o.Z.getLogger(Be).error(".createFromFiles()",e.message);if(!(e instanceof g.Z)){const e=new Z;throw r(e),e}const i=null===n||void 0===n?void 0:n.layer;if(!i){const e=new R;throw r(e),e}const s=await De.extractAndFilterFiles(t,i),a=s.reduce(((e,t)=>(0,Ue.$z)(i.infoFor3D,t)?e+1:e),0);if(0===a){const e=new F;throw r(e),e}if(a>1){const e=new M;throw r(e),e}const l=De.createWithExternalSource(e,s),[c]=await i.uploadAssets([l],n);return c}static async extractAndFilterFiles(e,t){const n=null===t||void 0===t?void 0:t.infoFor3D;return n?(await async function(e){const t=[];for(const n of e)n.name.toLowerCase().endsWith(".zip")?t.push(Ie(n)):t.push(Promise.resolve(n));return(await Promise.all(t)).flat()}(e)).filter((e=>(0,Ue.F7)(n,e))):e}static createWithExternalSource(e,t,n){var r,o,i,s;const a=null!==(r=null===n||void 0===n?void 0:n.extent)&&void 0!==r?r:null,{x:l,y:c,z:u,spatialReference:p}=e,f=null!==(o=null===n||void 0===n||null===(i=n.transform)||void 0===i?void 0:i.clone())&&void 0!==o?o:new P.Z,d=null!==(s=null===n||void 0===n?void 0:n.vertexSpace)&&void 0!==s?s:new _.Z({origin:[l,c,null!==u&&void 0!==u?u:0]}),h={source:t,extent:a},m=new ie;return m.externalSources.push(h),new De({metadata:m,transform:f,vertexSpace:d,spatialReference:p})}static createIncomplete(e,t){var n,r,o;const{x:i,y:s,z:a,spatialReference:l}=e,u=null!==(n=null===t||void 0===t||null===(r=t.transform)||void 0===r?void 0:r.clone())&&void 0!==n?n:new P.Z,p=null!==(o=null===t||void 0===t?void 0:t.vertexSpace)&&void 0!==o?o:new _.Z({origin:[i,s,null!==a&&void 0!==a?a:0]}),f=new De({transform:u,vertexSpace:p,spatialReference:l});return f.addResolvingPromise(Promise.reject(new c.Z("mesh-incomplete","Mesh resources are not complete"))),f}};(0,l._)([(0,h.Cb)({type:[x.Z],json:{write:!0}})],Ve.prototype,"components",void 0),(0,l._)([(0,h.Cb)({nonNullable:!0,types:Ge,constructOnly:!0,json:{write:!0}})],Ve.prototype,"vertexSpace",void 0),(0,l._)([(0,h.Cb)({type:P.Z,json:{write:!0}})],Ve.prototype,"transform",void 0),(0,l._)([(0,h.Cb)({constructOnly:!0})],Ve.prototype,"metadata",void 0),(0,l._)([(0,h.Cb)()],Ve.prototype,"hasExtent",null),(0,l._)([(0,h.Cb)()],Ve.prototype,"_transformedExtent",null),(0,l._)([(0,h.Cb)()],Ve.prototype,"_untransformedExtent",null),(0,l._)([(0,h.Cb)()],Ve.prototype,"anchor",null),(0,l._)([(0,h.Cb)()],Ve.prototype,"origin",null),(0,l._)([(0,h.Cb)({readOnly:!0,json:{read:!1}})],Ve.prototype,"extent",null),(0,l._)([(0,h.Cb)({readOnly:!0,json:{read:!1,write:!0,default:!0}})],Ve.prototype,"hasZ",void 0),(0,l._)([(0,h.Cb)({readOnly:!0,json:{read:!1,write:!0,default:!1}})],Ve.prototype,"hasM",void 0),(0,l._)([(0,h.Cb)({type:E.Q,nonNullable:!0,json:{write:!0}})],Ve.prototype,"vertexAttributes",void 0),Ve=De=(0,l._)([(0,m.j)(Be)],Ve);const He=(0,s.c)(),Ke=(0,w.Ue)(),We=Ve;var Ye=n(78952),qe=n(49818);const Je=()=>o.Z.getLogger("esri.rest.support.meshFeatureSet");function Xe(e,t,n){var o;const i=n.features;n.features=[],delete n.geometryType;const s=qe.Z.fromJSON(n);if(s.geometryType="mesh",!n.assetMaps)return s;const a=tt(t,n.assetMaps),l=null!==(o=e.sourceSpatialReference)&&void 0!==o?o:Ye.Z.WGS84,c=n.globalIdFieldName,{outFields:u}=e,p=null!=u&&u.length>0?(f=u.includes("*")?null:new Set(u),e=>{let{attributes:t}=e;if(!t)return{};if(!f)return t;for(const n in t)f.has(n)||delete t[n];return t}):()=>({});var f;for(const d of i){const e=$e(d,c,l,t,a);null!=e&&s.features.push(new r.Z({geometry:e,attributes:p(d)}))}return s}function $e(e,t,n,r,o){const i=e.attributes[t],l=o.get(i);if(null==l)return Je().error("mesh-feature-set:asset-not-found","Service returned a feature which was not found in the asset map",e),null;if(!e.geometry)return Je().error("mesh-feature-set:no-geometry","Service returned a feature without geometry",e),null;const{originPoint:c,originVector:u}=function(e,t,n){let{attributes:r}=e,{transformFieldRoles:o}=n;const i=r[o.originX],a=r[o.originY],l=r[o.originZ];return{originPoint:new g.Z({x:i,y:a,z:l,spatialReference:t}),originVector:(0,s.f)(i,a,l)}}(e,n,r),p=a.Z.fromJSON(e.geometry);p.spatialReference=n;const f=function(e,t){let{transformFieldRoles:n}=t;return new P.Z({translation:[e[n.translationX],-e[n.translationZ],e[n.translationY]],rotationAxis:[e[n.rotationX],-e[n.rotationZ],e[n.rotationY]],rotationAngle:e[n.rotationDeg],scale:[e[n.scaleX],e[n.scaleZ],e[n.scaleY]]})}(e.attributes,r),d=l.projectVertices?new C.Z({origin:u}):new _.Z({origin:u}),h=function(e){const t=Array.from(e.files.values()),n=new Array;for(const r of t){if(r.status!==Qe.COMPLETED)return null;const e=new Array;for(const t of r.parts){if(!t)return null;e.push(new oe.LL(t.url,t.hash))}n.push(new oe.CP(r.name,r.mimeType,e))}return n}(l);return h?We.createWithExternalSource(c,h,{extent:p,transform:f,vertexSpace:d}):We.createIncomplete(c,{extent:p,transform:f,vertexSpace:d})}var Qe,et;function tt(e,t){const n=new Map;for(const r of t){const t=r.parentGlobalId;if(null==t)continue;const o=r.assetName,s=r.assetType,a=r.assetHash,l=r.assetURL,c=r.conversionStatus,u=r.seqNo,p=(0,Ue.d1)(s,e.supportedFormats);if(!p){Je().error("mesh-feature-set:unknown-format","Service returned an asset of type ".concat(s,", but it does not list it as a supported type"));continue}const f=(0,i.s1)(n,t,(()=>({projectVertices:rt(r.flags).projectVertices,files:new Map})));(0,i.s1)(f.files,o,(()=>({name:o,type:s,mimeType:p,status:nt(c),parts:[]}))).parts[u]={hash:a,url:l}}return n}function nt(e){switch(e){case"COMPLETED":case"SUBMITTED":return Qe.COMPLETED;case"INPROGRESS":return Qe.PENDING;default:return Qe.FAILED}}function rt(e){return{projectVertices:e.includes("PROJECT_VERTICES")}}(et=Qe||(Qe={}))[et.FAILED=0]="FAILED",et[et.PENDING=1]="PENDING",et[et.COMPLETED=2]="COMPLETED"}}]);
//# sourceMappingURL=465.c224235b.chunk.js.map