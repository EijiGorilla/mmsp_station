"use strict";(self.webpackChunkmmsp_station=self.webpackChunkmmsp_station||[]).push([[656],{80656:(e,t,n)=>{n.d(t,{fetchCIMSymbolReference:()=>u});var a=n(71277),l=n(10064),r=n(66978),s=n(35995),o=n(7575),m=n(53283),c=n(38048),i=n(19951);async function u(e,t,n){if(!e.name)throw new l.Z("style-symbol-reference-name-missing","Missing name in style symbol reference");if(e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName)return async function(e,t){const a=c.wm.replaceAll(/\{SymbolName\}/gi,e.name);try{const e=await(0,c.EJ)(a,t);return(0,c.KV)(e.data)}catch(n){return(0,r.r9)(n),null}}(e,n);try{return async function(e,t,n,u){const y={portal:null!=(null===n||void 0===n?void 0:n.portal)?n.portal:o.Z.getDefault(),url:(0,s.mN)(e.baseUrl),origin:"portal-item"},f=(0,i.m)(t,e.data);if(!f)throw new l.Z("symbolstyleutils:symbol-name-not-found","The symbol name '".concat(t,"' could not be found"),{symbolName:t});let b=(0,m.f)((0,c.v9)(f,"cimRef"),y);(0,a.XO)()&&(b=(0,a.pJ)(b));try{const e=await(0,c.EJ)(b,u);return(0,c.KV)(e.data)}catch(p){return(0,r.r9)(p),null}}(await(0,c.n2)(e,t,n),e.name,t,n)}catch(u){return(0,r.r9)(u),null}}}}]);
//# sourceMappingURL=656.48226bc6.chunk.js.map