"use strict";(self.webpackChunkmmsp_station=self.webpackChunkmmsp_station||[]).push([[7016],{7016:(n,t,e)=>{e.r(t),e.d(t,{registerFunctions:()=>P});var r=e(19545),a=e(72741),i=e(62357),o=e(22564),u=e(47238),c=e(44715),s=e(93249),l=e(95435),f=e(68860),d=e(53866),w=e(32238),h=e(84178),y=e(77577),m=e(585),g=e(80885),v=e(29909),p=e(77981),H=e(7575),Z=e(76200);async function F(n,t,e){var a;if(!(null===r.id||void 0===r.id?void 0:r.id.findCredential(n.restUrl)))return null;if("loaded"===n.loadStatus&&""===t&&null!==(a=n.user)&&void 0!==a&&a.sourceJSON&&!1===e)return n.user.sourceJSON;const i={responseType:"json",query:{f:"json"}};if(e&&(i.query.returnUserLicenseTypeExtensions=!0),""===t){const t=await(0,Z.Z)(n.restUrl+"/community/self",i);if(t.data){const n=t.data;if(null!==n&&void 0!==n&&n.username)return n}return null}const o=await(0,Z.Z)(n.restUrl+"/community/users/"+t,i);if(o.data){const n=o.data;return n.error?null:n}return null}function A(n){return 0===r.i8.indexOf("4.")?g.Z.fromExtent(n):new g.Z({spatialReference:n.spatialReference,rings:[[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]]})}function I(n,t,e){if((0,c.E)(n,2,2,t,e),n[0]instanceof w.Z&&n[1]instanceof w.Z);else if(n[0]instanceof w.Z&&null===n[1]);else if(n[1]instanceof w.Z&&null===n[0]);else if(null!==n[0]||null!==n[1])throw new o.aV(t,o.rH.InvalidParameter,e)}async function V(n,t){if("polygon"!==n.type&&"polyline"!==n.type&&"extent"!==n.type)return 0;let e=1;(n.spatialReference.vcsWkid||n.spatialReference.latestVcsWkid)&&(e=(0,l._R)(n.spatialReference)/(0,f.c9)(n.spatialReference));let r=0;if("polyline"===n.type)for(const i of n.paths)for(let n=1;n<i.length;n++)r+=(0,l.AW)(i[n],i[n-1],e);else if("polygon"===n.type)for(const i of n.rings){for(let n=1;n<i.length;n++)r+=(0,l.AW)(i[n],i[n-1],e);(i[0][0]!==i[i.length-1][0]||i[0][1]!==i[i.length-1][1]||void 0!==i[0][2]&&i[0][2]!==i[i.length-1][2])&&(r+=(0,l.AW)(i[0],i[i.length-1],e))}else"extent"===n.type&&(r+=2*(0,l.AW)([n.xmin,n.ymin,0],[n.xmax,n.ymin,0],e),r+=2*(0,l.AW)([n.xmin,n.ymin,0],[n.xmin,n.ymax,0],e),r*=2,r+=4*Math.abs((0,c.H)(n.zmax,0)*e-(0,c.H)(n.zmin,0)*e));const a=new v.Z({hasZ:!1,hasM:!1,spatialReference:n.spatialReference,paths:[[0,0],[0,r]]});return(0,h.sz)(a,t)}function P(n){"async"===n.mode&&(n.functions.disjoint=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>(I(a=(0,c.F)(a),t,e),null===a[0]||null===a[1]||(0,h.ED)(a[0],a[1]))))},n.functions.intersects=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>(I(a=(0,c.F)(a),t,e),null!==a[0]&&null!==a[1]&&(0,h.kK)(a[0],a[1]))))},n.functions.touches=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>(I(a=(0,c.F)(a),t,e),null!==a[0]&&null!==a[1]&&(0,h.W4)(a[0],a[1]))))},n.functions.crosses=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>(I(a=(0,c.F)(a),t,e),null!==a[0]&&null!==a[1]&&(0,h.jU)(a[0],a[1]))))},n.functions.within=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>(I(a=(0,c.F)(a),t,e),null!==a[0]&&null!==a[1]&&(0,h.uh)(a[0],a[1]))))},n.functions.contains=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>(I(a=(0,c.F)(a),t,e),null!==a[0]&&null!==a[1]&&(0,h.r3)(a[0],a[1]))))},n.functions.overlaps=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>(I(a=(0,c.F)(a),t,e),null!==a[0]&&null!==a[1]&&(0,h.Nm)(a[0],a[1]))))},n.functions.equals=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>((0,c.E)(a,2,2,t,e),a[0]===a[1]||(a[0]instanceof w.Z&&a[1]instanceof w.Z?(0,h.fS)(a[0],a[1]):((0,c.k)(a[0])&&(0,c.k)(a[1])||!!((0,c.n)(a[0])&&(0,c.n)(a[1])||(0,c.m)(a[0])&&(0,c.m)(a[1])))&&a[0].equals(a[1])))))},n.functions.relate=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>{if(a=(0,c.F)(a),(0,c.E)(a,3,3,t,e),a[0]instanceof w.Z&&a[1]instanceof w.Z)return(0,h.LV)(a[0],a[1],(0,c.j)(a[2]));if(a[0]instanceof w.Z&&null===a[1])return!1;if(a[1]instanceof w.Z&&null===a[0])return!1;if(null===a[0]&&null===a[1])return!1;throw new o.aV(t,o.rH.InvalidParameter,e)}))},n.functions.intersection=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>(I(a=(0,c.F)(a),t,e),null===a[0]||null===a[1]?null:(0,h.wf)(a[0],a[1]))))},n.functions.union=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>{const i=[];if(0===(a=(0,c.F)(a)).length)throw new o.aV(t,o.rH.WrongNumberOfParameters,e);if(1===a.length)if((0,c.o)(a[0])){const n=(0,c.F)(a[0]);for(let r=0;r<n.length;r++)if(null!==n[r]){if(!(n[r]instanceof w.Z))throw new o.aV(t,o.rH.InvalidParameter,e);i.push(n[r])}}else{if(!(0,c.q)(a[0])){if(a[0]instanceof w.Z)return(0,c.A)((0,u.r1)(a[0]),t.spatialReference);if(null===a[0])return null;throw new o.aV(t,o.rH.InvalidParameter,e)}{const n=(0,c.F)(a[0].toArray());for(let r=0;r<n.length;r++)if(null!==n[r]){if(!(n[r]instanceof w.Z))throw new o.aV(t,o.rH.InvalidParameter,e);i.push(n[r])}}}else for(let u=0;u<a.length;u++)if(null!==a[u]){if(!(a[u]instanceof w.Z))throw new o.aV(t,o.rH.InvalidParameter,e);i.push(a[u])}return 0===i.length?null:(0,h.G0)(i)}))},n.functions.difference=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>(I(a=(0,c.F)(a),t,e),null!==a[0]&&null===a[1]?(0,u.r1)(a[0]):null===a[0]?null:(0,h.e5)(a[0],a[1]))))},n.functions.symmetricdifference=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>(I(a=(0,c.F)(a),t,e),null===a[0]&&null===a[1]?null:null===a[0]?(0,u.r1)(a[1]):null===a[1]?(0,u.r1)(a[0]):(0,h.Sp)(a[0],a[1]))))},n.functions.clip=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>{if(a=(0,c.F)(a),(0,c.E)(a,2,2,t,e),!(a[1]instanceof d.Z)&&null!==a[1])throw new o.aV(t,o.rH.InvalidParameter,e);if(null===a[0])return null;if(!(a[0]instanceof w.Z))throw new o.aV(t,o.rH.InvalidParameter,e);return null===a[1]?null:(0,h.oq)(a[0],a[1])}))},n.functions.cut=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>{if(a=(0,c.F)(a),(0,c.E)(a,2,2,t,e),!(a[1]instanceof v.Z)&&null!==a[1])throw new o.aV(t,o.rH.InvalidParameter,e);if(null===a[0])return[];if(!(a[0]instanceof w.Z))throw new o.aV(t,o.rH.InvalidParameter,e);return null===a[1]?[(0,u.r1)(a[0])]:(0,h.z7)(a[0],a[1])}))},n.functions.area=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,a)=>{if((0,c.E)(a,1,2,t,e),null===(a=(0,c.F)(a))[0])return 0;if((0,c.u)(a[0])){const n=await a[0].sumArea((0,u.EI)((0,c.H)(a[1],-1)),!1,t.abortSignal);if(t.abortSignal.aborted)throw new o.aV(t,o.rH.Cancelled,e);return n}if((0,c.o)(a[0])||(0,c.q)(a[0])){const n=(0,c.G)(a[0],t.spatialReference);return null===n?0:(0,h.CJ)(n,(0,u.EI)((0,c.H)(a[1],-1)))}if(!(a[0]instanceof w.Z))throw new o.aV(t,o.rH.InvalidParameter,e);return(0,h.CJ)(a[0],(0,u.EI)((0,c.H)(a[1],-1)))}))},n.functions.areageodetic=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,a)=>{if((0,c.E)(a,1,2,t,e),null===(a=(0,c.F)(a))[0])return 0;if((0,c.u)(a[0])){const n=await a[0].sumArea((0,u.EI)((0,c.H)(a[1],-1)),!0,t.abortSignal);if(t.abortSignal.aborted)throw new o.aV(t,o.rH.Cancelled,e);return n}if((0,c.o)(a[0])||(0,c.q)(a[0])){const n=(0,c.G)(a[0],t.spatialReference);return null===n?0:(0,h.Y4)(n,(0,u.EI)((0,c.H)(a[1],-1)))}if(!(a[0]instanceof w.Z))throw new o.aV(t,o.rH.InvalidParameter,e);return(0,h.Y4)(a[0],(0,u.EI)((0,c.H)(a[1],-1)))}))},n.functions.length=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,a)=>{if((0,c.E)(a,1,2,t,e),null===(a=(0,c.F)(a))[0])return 0;if((0,c.u)(a[0])){const n=await a[0].sumLength((0,u.Lz)((0,c.H)(a[1],-1)),!1,t.abortSignal);if(t.abortSignal.aborted)throw new o.aV(t,o.rH.Cancelled,e);return n}if((0,c.o)(a[0])||(0,c.q)(a[0])){const n=(0,c.J)(a[0],t.spatialReference);return null===n?0:(0,h.sz)(n,(0,u.Lz)((0,c.H)(a[1],-1)))}if(!(a[0]instanceof w.Z))throw new o.aV(t,o.rH.InvalidParameter,e);return(0,h.sz)(a[0],(0,u.Lz)((0,c.H)(a[1],-1)))}))},n.functions.length3d=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>{if((0,c.E)(a,1,2,t,e),null===(a=(0,c.F)(a))[0])return 0;if((0,c.o)(a[0])||(0,c.q)(a[0])){const n=(0,c.J)(a[0],t.spatialReference);return null===n?0:!0===n.hasZ?V(n,(0,u.Lz)((0,c.H)(a[1],-1))):(0,h.sz)(n,(0,u.Lz)((0,c.H)(a[1],-1)))}if(!(a[0]instanceof w.Z))throw new o.aV(t,o.rH.InvalidParameter,e);return!0===a[0].hasZ?V(a[0],(0,u.Lz)((0,c.H)(a[1],-1))):(0,h.sz)(a[0],(0,u.Lz)((0,c.H)(a[1],-1)))}))},n.functions.lengthgeodetic=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,a)=>{if((0,c.E)(a,1,2,t,e),null===(a=(0,c.F)(a))[0])return 0;if((0,c.u)(a[0])){const n=await a[0].sumLength((0,u.Lz)((0,c.H)(a[1],-1)),!0,t.abortSignal);if(t.abortSignal.aborted)throw new o.aV(t,o.rH.Cancelled,e);return n}if((0,c.o)(a[0])||(0,c.q)(a[0])){const n=(0,c.J)(a[0],t.spatialReference);return null===n?0:(0,h.kQ)(n,(0,u.Lz)((0,c.H)(a[1],-1)))}if(!(a[0]instanceof w.Z))throw new o.aV(t,o.rH.InvalidParameter,e);return(0,h.kQ)(a[0],(0,u.Lz)((0,c.H)(a[1],-1)))}))},n.functions.distance=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>{a=(0,c.F)(a),(0,c.E)(a,2,3,t,e);let i=a[0];((0,c.o)(a[0])||(0,c.q)(a[0]))&&(i=(0,c.K)(a[0],t.spatialReference));let s=a[1];if(((0,c.o)(a[1])||(0,c.q)(a[1]))&&(s=(0,c.K)(a[1],t.spatialReference)),!(i instanceof w.Z))throw new o.aV(t,o.rH.InvalidParameter,e);if(!(s instanceof w.Z))throw new o.aV(t,o.rH.InvalidParameter,e);return(0,h.TE)(i,s,(0,u.Lz)((0,c.H)(a[2],-1)))}))},n.functions.distancegeodetic=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>{a=(0,c.F)(a),(0,c.E)(a,2,3,t,e);const i=a[0],s=a[1];if(!(i instanceof m.Z))throw new o.aV(t,o.rH.InvalidParameter,e);if(!(s instanceof m.Z))throw new o.aV(t,o.rH.InvalidParameter,e);const l=new v.Z({paths:[],spatialReference:i.spatialReference});return l.addPath([i,s]),(0,h.kQ)(l,(0,u.Lz)((0,c.H)(a[2],-1)))}))},n.functions.densify=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>{if(a=(0,c.F)(a),(0,c.E)(a,2,3,t,e),null===a[0])return null;if(!(a[0]instanceof w.Z))throw new o.aV(t,o.rH.InvalidParameter,e);const i=(0,c.g)(a[1]);if(isNaN(i))throw new o.aV(t,o.rH.InvalidParameter,e);if(i<=0)throw new o.aV(t,o.rH.InvalidParameter,e);return a[0]instanceof g.Z||a[0]instanceof v.Z?(0,h.Cz)(a[0],i,(0,u.Lz)((0,c.H)(a[2],-1))):a[0]instanceof d.Z?(0,h.Cz)(A(a[0]),i,(0,u.Lz)((0,c.H)(a[2],-1))):a[0]}))},n.functions.densifygeodetic=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>{if(a=(0,c.F)(a),(0,c.E)(a,2,3,t,e),null===a[0])return null;if(!(a[0]instanceof w.Z))throw new o.aV(t,o.rH.InvalidParameter,e);const i=(0,c.g)(a[1]);if(isNaN(i))throw new o.aV(t,o.rH.InvalidParameter,e);if(i<=0)throw new o.aV(t,o.rH.InvalidParameter,e);return a[0]instanceof g.Z||a[0]instanceof v.Z?(0,h.j2)(a[0],i,(0,u.Lz)((0,c.H)(a[2],-1))):a[0]instanceof d.Z?(0,h.j2)(A(a[0]),i,(0,u.Lz)((0,c.H)(a[2],-1))):a[0]}))},n.functions.generalize=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>{if(a=(0,c.F)(a),(0,c.E)(a,2,4,t,e),null===a[0])return null;if(!(a[0]instanceof w.Z))throw new o.aV(t,o.rH.InvalidParameter,e);const i=(0,c.g)(a[1]);if(isNaN(i))throw new o.aV(t,o.rH.InvalidParameter,e);return(0,h.D$)(a[0],i,(0,c.h)((0,c.H)(a[2],!0)),(0,u.Lz)((0,c.H)(a[3],-1)))}))},n.functions.buffer=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>{if(a=(0,c.F)(a),(0,c.E)(a,2,3,t,e),null===a[0])return null;if(!(a[0]instanceof w.Z))throw new o.aV(t,o.rH.InvalidParameter,e);const i=(0,c.g)(a[1]);if(isNaN(i))throw new o.aV(t,o.rH.InvalidParameter,e);return 0===i?(0,u.r1)(a[0]):(0,h.f3)(a[0],i,(0,u.Lz)((0,c.H)(a[2],-1)))}))},n.functions.buffergeodetic=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>{if(a=(0,c.F)(a),(0,c.E)(a,2,3,t,e),null===a[0])return null;if(!(a[0]instanceof w.Z))throw new o.aV(t,o.rH.InvalidParameter,e);const i=(0,c.g)(a[1]);if(isNaN(i))throw new o.aV(t,o.rH.InvalidParameter,e);return 0===i?(0,u.r1)(a[0]):(0,h.rd)(a[0],i,(0,u.Lz)((0,c.H)(a[2],-1)))}))},n.functions.offset=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>{if(a=(0,c.F)(a),(0,c.E)(a,2,6,t,e),null===a[0])return null;if(!(a[0]instanceof g.Z||a[0]instanceof v.Z))throw new o.aV(t,o.rH.InvalidParameter,e);const i=(0,c.g)(a[1]);if(isNaN(i))throw new o.aV(t,o.rH.InvalidParameter,e);const s=(0,c.g)((0,c.H)(a[4],10));if(isNaN(s))throw new o.aV(t,o.rH.InvalidParameter,e);const l=(0,c.g)((0,c.H)(a[5],0));if(isNaN(l))throw new o.aV(t,o.rH.InvalidParameter,e);return(0,h.cv)(a[0],i,(0,u.Lz)((0,c.H)(a[2],-1)),(0,c.j)((0,c.H)(a[3],"round")).toLowerCase(),s,l)}))},n.functions.rotate=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>{a=(0,c.F)(a),(0,c.E)(a,2,3,t,e);let i=a[0];if(null===i)return null;if(!(i instanceof w.Z))throw new o.aV(t,o.rH.InvalidParameter,e);i instanceof d.Z&&(i=g.Z.fromExtent(i));const u=(0,c.g)(a[1]);if(isNaN(u))throw new o.aV(t,o.rH.InvalidParameter,e);const s=(0,c.H)(a[2],null);if(null===s)return(0,h.U1)(i,u);if(s instanceof m.Z)return(0,h.U1)(i,u,s);throw new o.aV(t,o.rH.InvalidParameter,e)}))},n.functions.centroid=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>{if(a=(0,c.F)(a),(0,c.E)(a,1,1,t,e),null===a[0])return null;let i=a[0];if(((0,c.o)(a[0])||(0,c.q)(a[0]))&&(i=(0,c.K)(a[0],t.spatialReference)),null===i)return null;if(!(i instanceof w.Z))throw new o.aV(t,o.rH.InvalidParameter,e);return i instanceof m.Z?(0,c.A)((0,u.r1)(a[0]),t.spatialReference):i instanceof g.Z?i.centroid:i instanceof v.Z?(0,l.s9)(i):i instanceof y.Z?(0,l.Ay)(i):i instanceof d.Z?i.center:null}))},n.functions.multiparttosinglepart=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,a)=>{a=(0,c.F)(a),(0,c.E)(a,1,1,t,e);const i=[];if(null===a[0])return null;if(!(a[0]instanceof w.Z))throw new o.aV(t,o.rH.InvalidParameter,e);if(a[0]instanceof m.Z)return[(0,c.A)((0,u.r1)(a[0]),t.spatialReference)];if(a[0]instanceof d.Z)return[(0,c.A)((0,u.r1)(a[0]),t.spatialReference)];const s=await(0,h.og)(a[0]);if(s instanceof g.Z){const n=[],t=[];for(let e=0;e<s.rings.length;e++)if(s.isClockwise(s.rings[e])){const t=(0,p.im)({rings:[s.rings[e]],hasZ:!0===s.hasZ,hazM:!0===s.hasM,spatialReference:s.spatialReference.toJSON()});n.push(t)}else t.push({ring:s.rings[e],pt:s.getPoint(e,0)});for(let e=0;e<t.length;e++)for(let r=0;r<n.length;r++)if(n[r].contains(t[e].pt)){n[r].addRing(t[e].ring);break}return n}if(s instanceof v.Z){const n=[];for(let t=0;t<s.paths.length;t++){const e=(0,p.im)({paths:[s.paths[t]],hasZ:!0===s.hasZ,hazM:!0===s.hasM,spatialReference:s.spatialReference.toJSON()});n.push(e)}return n}if(a[0]instanceof y.Z){const n=(0,c.A)((0,u.r1)(a[0]),t.spatialReference);for(let t=0;t<n.points.length;t++)i.push(n.getPoint(t));return i}return null}))},n.functions.issimple=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>{if(a=(0,c.F)(a),(0,c.E)(a,1,1,t,e),null===a[0])return!0;if(!(a[0]instanceof w.Z))throw new o.aV(t,o.rH.InvalidParameter,e);return(0,h.Gg)(a[0])}))},n.functions.simplify=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>{if(a=(0,c.F)(a),(0,c.E)(a,1,1,t,e),null===a[0])return null;if(!(a[0]instanceof w.Z))throw new o.aV(t,o.rH.InvalidParameter,e);return(0,h.og)(a[0])}))},n.functions.convexhull=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>{if(a=(0,c.F)(a),(0,c.E)(a,1,1,t,e),null===a[0])return null;if(!(a[0]instanceof w.Z))throw new o.aV(t,o.rH.InvalidParameter,e);return(0,h.JI)(a[0])}))},n.functions.getuser=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,u)=>{(0,c.E)(u,0,2,t,e);let l=(0,c.H)(u[1],""),f=!0===l;if(l=!0===l||!1===l?"":(0,c.j)(l),0===u.length||u[0]instanceof a.Z){var d;let n=null;n=null!==(d=t.services)&&void 0!==d&&d.portal?t.services.portal:H.Z.getDefault(),u.length>0&&(n=(0,s._)(u[0],n));const e=await F(n,l,f);if(e){const n=JSON.parse(JSON.stringify(e));for(const t of["lastLogin","created","modified"])void 0!==n[t]&&null!==n[t]&&(n[t]=new Date(n[t]));return i.Z.convertObjectToArcadeDictionary(n,(0,c.L)(t))}return null}let w=null;if((0,c.u)(u[0])&&(w=u[0]),w){var h;if(f=!1,l)return null;await w.load();const n=await w.getOwningSystemUrl();if(!n){if(!l){const n=await w.getIdentityUser();return n?i.Z.convertObjectToArcadeDictionary({username:n},(0,c.L)(t)):null}return null}let e=null;e=null!==(h=t.services)&&void 0!==h&&h.portal?t.services.portal:H.Z.getDefault(),e=(0,s._)(new a.Z(n),e);const r=await F(e,l,f);if(r){const n=JSON.parse(JSON.stringify(r));for(const t of["lastLogin","created","modified"])void 0!==n[t]&&null!==n[t]&&(n[t]=new Date(n[t]));return i.Z.convertObjectToArcadeDictionary(n,(0,c.L)(t))}return null}throw new o.aV(t,o.rH.InvalidParameter,e)}))}),n.functions.nearestcoordinate=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,a)=>{if(a=(0,c.F)(a),(0,c.E)(a,2,2,t,e),!(a[0]instanceof w.Z||null===a[0]))throw new o.aV(t,o.rH.InvalidParameter,e);if(!(a[1]instanceof m.Z||null===a[1]))throw new o.aV(t,o.rH.InvalidParameter,e);if(null===a[0]||null===a[1])return null;const u=await(0,h.FH)(a[0],a[1]);return null===u?null:i.Z.convertObjectToArcadeDictionary({coordinate:u.coordinate,distance:u.distance},(0,c.L)(t),!1,!0)}))},n.functions.nearestvertex=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,a)=>{if(a=(0,c.F)(a),(0,c.E)(a,2,2,t,e),!(a[0]instanceof w.Z||null===a[0]))throw new o.aV(t,o.rH.InvalidParameter,e);if(!(a[1]instanceof m.Z||null===a[1]))throw new o.aV(t,o.rH.InvalidParameter,e);if(null===a[0]||null===a[1])return null;const u=await(0,h._L)(a[0],a[1]);return null===u?null:i.Z.convertObjectToArcadeDictionary({coordinate:u.coordinate,distance:u.distance},(0,c.L)(t),!1,!0)}))}}},93249:(n,t,e)=>{e.d(t,{_:()=>a});var r=e(7575);function a(n,t){return null===n?t:new r.Z({url:n.field("url")})}},84178:(n,t,e)=>{e.d(t,{CJ:()=>D,Cz:()=>q,D$:()=>j,ED:()=>Z,FH:()=>b,G0:()=>N,Gg:()=>I,JI:()=>P,LV:()=>A,Nm:()=>F,Sp:()=>z,TE:()=>m,U1:()=>k,W4:()=>p,Y4:()=>W,_L:()=>O,cv:()=>R,e5:()=>E,f3:()=>x,fS:()=>g,j2:()=>C,jU:()=>y,kK:()=>v,kQ:()=>T,og:()=>V,oq:()=>d,r3:()=>h,rd:()=>S,sz:()=>U,uh:()=>H,wf:()=>L,z7:()=>w});e(59486);var r=e(70431),a=e(585),i=e(77981);function o(n){var t;return Array.isArray(n)?null===(t=n[0])||void 0===t?void 0:t.spatialReference:null===n||void 0===n?void 0:n.spatialReference}function u(n){return n?Array.isArray(n)?n.map(u):n.toJSON?n.toJSON():n:n}function c(n){return Array.isArray(n)?n.map((n=>(0,i.im)(n))):(0,i.im)(n)}let s;async function l(){return s||(s=(0,r.bA)("geometryEngineWorker",{strategy:"distributed"})),s}async function f(n,t){return(await l()).invoke("executeGEOperation",{operation:n,parameters:u(t)})}async function d(n,t){return c(await f("clip",[o(n),n,t]))}async function w(n,t){return c(await f("cut",[o(n),n,t]))}function h(n,t){return f("contains",[o(n),n,t])}function y(n,t){return f("crosses",[o(n),n,t])}function m(n,t,e){return f("distance",[o(n),n,t,e])}function g(n,t){return f("equals",[o(n),n,t])}function v(n,t){return f("intersects",[o(n),n,t])}function p(n,t){return f("touches",[o(n),n,t])}function H(n,t){return f("within",[o(n),n,t])}function Z(n,t){return f("disjoint",[o(n),n,t])}function F(n,t){return f("overlaps",[o(n),n,t])}function A(n,t,e){return f("relate",[o(n),n,t,e])}function I(n){return f("isSimple",[o(n),n])}async function V(n){return c(await f("simplify",[o(n),n]))}async function P(n){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return c(await f("convexHull",[o(n),n,t]))}async function E(n,t){return c(await f("difference",[o(n),n,t]))}async function z(n,t){return c(await f("symmetricDifference",[o(n),n,t]))}async function L(n,t){return c(await f("intersect",[o(n),n,t]))}async function N(n){const t=function(n,t){let e;return Array.isArray(n)?e=n:(e=[],e.push(n),null!=t&&e.push(t)),e}(n,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null);return c(await f("union",[o(t),t]))}async function R(n,t,e,r,a,i){return c(await f("offset",[o(n),n,t,e,r,a,i]))}async function x(n,t,e){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const a=[o(n),n,t,e,r];return c(await f("buffer",a))}async function S(n,t,e,r,a,i){const u=[o(n),n,t,e,r,a,i];return c(await f("geodesicBuffer",u))}async function b(n,t){let e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const r=await f("nearestCoordinate",[o(n),n,t,e]);return{...r,coordinate:a.Z.fromJSON(r.coordinate)}}async function O(n,t){const e=await f("nearestVertex",[o(n),n,t]);return{...e,coordinate:a.Z.fromJSON(e.coordinate)}}function J(n){var t;return"xmin"in n?n.center:"x"in n?n:null===(t=n.extent)||void 0===t?void 0:t.center}async function k(n,t,e){var r;if(null==n)throw new _;const a=n.spatialReference;if(null==(e=null!==(r=e)&&void 0!==r?r:J(n)))throw new _;const i=n.constructor.fromJSON(await f("rotate",[a,n,t,e]));return i.spatialReference=a,i}async function j(n,t,e,r){return c(await f("generalize",[o(n),n,t,e,r]))}async function q(n,t,e){return c(await f("densify",[o(n),n,t,e]))}async function C(n,t,e){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return c(await f("geodesicDensify",[o(n),n,t,e,r]))}function D(n,t){return f("planarArea",[o(n),n,t])}function U(n,t){return f("planarLength",[o(n),n,t])}function W(n,t,e){return f("geodesicArea",[o(n),n,t,e])}function T(n,t,e){return f("geodesicLength",[o(n),n,t,e])}class _ extends Error{constructor(){super("Illegal Argument Exception")}}}}]);
//# sourceMappingURL=7016.876fc7cc.chunk.js.map