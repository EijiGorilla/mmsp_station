/*! For license information please see 1908.bc674b5b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmmsp_station=self.webpackChunkmmsp_station||[]).push([[1908],{11908:(e,t,i)=>{i.r(t),i.d(t,{CalciteAlert:()=>M,defineCustomElement:()=>L});var n=i(51554),s=i(92358),a=i(64044),o=i(47242),l=i(46895),c=i(27871),r=i(52655),h=i(40120),d=i(1579),u=i(57601);const p={slow:14e3,medium:1e4,fast:6e3},m="actions-end",g="title",v="message",f="link",b="actions-end",k="close",x="container",y="container--queued",w="dismiss-progress",C="icon",z="container--slotted-in-shell",q="queue-count",A="queue-count--active",I="text-container",T=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteAlertBeforeClose=(0,n.yM)(this,"calciteAlertBeforeClose",6),this.calciteAlertClose=(0,n.yM)(this,"calciteAlertClose",6),this.calciteAlertBeforeOpen=(0,n.yM)(this,"calciteAlertBeforeOpen",6),this.calciteAlertOpen=(0,n.yM)(this,"calciteAlertOpen",6),this.calciteInternalAlertSync=(0,n.yM)(this,"calciteInternalAlertSync",6),this.calciteInternalAlertRegister=(0,n.yM)(this,"calciteInternalAlertRegister",6),this.autoCloseTimeoutId=null,this.totalOpenTime=0,this.totalHoverTime=0,this.openTransitionProp="opacity",this.setTransitionEl=e=>{this.transitionEl=e},this.closeAlert=()=>{this.autoCloseTimeoutId=null,this.queued=!1,this.open=!1,this.queue=this.queue.filter((e=>e!==this.el)),this.determineActiveAlert(),this.calciteInternalAlertSync.emit({queue:this.queue})},this.actionsEndSlotChangeHandler=e=>{this.hasEndActions=(0,s.e)(e)},this.handleMouseOver=()=>{window.clearTimeout(this.autoCloseTimeoutId),this.totalOpenTime=Date.now()-this.initialOpenTime,this.lastMouseOverBegin=Date.now()},this.handleMouseLeave=()=>{const e=Date.now()-this.lastMouseOverBegin,t=p[this.autoCloseDuration]-this.totalOpenTime+this.totalHoverTime;this.totalHoverTime=this.totalHoverTime?e+this.totalHoverTime:e,this.autoCloseTimeoutId=window.setTimeout((()=>this.closeAlert()),t)},this.open=!1,this.autoClose=!1,this.autoCloseDuration="medium",this.kind="brand",this.icon=void 0,this.iconFlipRtl=!1,this.label=void 0,this.numberingSystem=void 0,this.placement="bottom",this.scale="m",this.messages=void 0,this.messageOverrides=void 0,this.slottedInShell=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.hasEndActions=!1,this.queue=[],this.queueLength=0,this.queued=!1}openHandler(){(0,c.o)(this),this.open&&!this.queued&&this.calciteInternalAlertRegister.emit(),this.open||(this.queue=this.queue.filter((e=>e!==this.el)),this.calciteInternalAlertSync.emit({queue:this.queue}))}onMessagesChange(){}updateDuration(){this.autoClose&&this.autoCloseTimeoutId&&(window.clearTimeout(this.autoCloseTimeoutId),this.autoCloseTimeoutId=window.setTimeout((()=>this.closeAlert()),p[this.autoCloseDuration]))}connectedCallback(){(0,l.c)(this),(0,r.c)(this);this.open&&!this.queued&&this.calciteInternalAlertRegister.emit()}async componentWillLoad(){(0,o.a)(this),await(0,r.s)(this),this.open&&(0,c.o)(this)}componentDidLoad(){(0,o.s)(this)}disconnectedCallback(){window.dispatchEvent(new CustomEvent("calciteInternalAlertUnregister",{detail:{alert:this.el}})),window.clearTimeout(this.autoCloseTimeoutId),window.clearTimeout(this.queueTimeout),(0,l.d)(this),(0,r.d)(this),this.slottedInShell=!1}render(){l.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,signDisplay:"always"};const{open:e,autoClose:t,label:i,placement:a,queued:o}=this,c=t?"alert":"alertdialog",r=!e,d=(0,s.h)(h.K,this.icon,this.kind),u=this.queueLength>1;return(0,n.h)(n.AA,{"aria-hidden":(0,s.t)(r),"aria-label":i,"calcite-hydrated-hidden":r,role:c},(0,n.h)("div",{class:{[x]:!0,[y]:o,["".concat(x,"--").concat(a)]:!0,[z]:this.slottedInShell},onPointerEnter:this.autoClose&&this.autoCloseTimeoutId?this.handleMouseOver:null,onPointerLeave:this.autoClose&&this.autoCloseTimeoutId?this.handleMouseLeave:null,ref:this.setTransitionEl},d&&this.renderIcon(d),(0,n.h)("div",{class:I},(0,n.h)("slot",{name:g}),(0,n.h)("slot",{name:v}),(0,n.h)("slot",{name:f})),this.renderActionsEnd(),u?this.renderQueueCount():null,this.renderCloseButton(),e&&!o&&t?(0,n.h)("div",{class:w}):null))}renderCloseButton(){return(0,n.h)("button",{"aria-label":this.messages.close,class:k,key:"close",onClick:this.closeAlert,type:"button",ref:e=>this.closeButton=e},(0,n.h)("calcite-icon",{icon:"x",scale:(0,a.g)(this.scale)}))}renderQueueCount(){const e=this.queueLength>2?this.queueLength-1:1,t=l.n.numberFormatter.format(e);return(0,n.h)("div",{class:{[q]:!0,[A]:this.queueLength>1},key:"queue-count"},(0,n.h)("calcite-chip",{scale:this.scale,value:t},t))}renderActionsEnd(){return(0,n.h)("div",{class:b},(0,n.h)("slot",{name:m,onSlotchange:this.actionsEndSlotChangeHandler}))}renderIcon(e){return(0,n.h)("div",{class:C},(0,n.h)("calcite-icon",{flipRtl:this.iconFlipRtl,icon:e,scale:(0,a.g)(this.scale)}))}alertSync(e){this.queue!==e.detail.queue&&(this.queue=e.detail.queue),this.queueLength=this.queue.length,this.determineActiveAlert(),e.stopPropagation()}alertRegister(){this.open&&!this.queue.includes(this.el)&&(this.queued=!0,this.queue.push(this.el)),this.calciteInternalAlertSync.emit({queue:this.queue}),this.determineActiveAlert()}alertUnregister(e){const t=this.queue.filter((t=>t!==e.detail.alert));this.queue=t,window.dispatchEvent(new CustomEvent("calciteInternalAlertSync",{detail:{queue:t}}))}async setFocus(){await(0,o.c)(this);const e=(0,s.g)(this.el,{selector:"calcite-link"});if(this.closeButton||e)return e?e.setFocus():void(this.closeButton&&this.closeButton.focus())}effectiveLocaleChange(){(0,r.u)(this,this.effectiveLocale)}determineActiveAlert(){var e;(null===(e=this.queue)||void 0===e?void 0:e[0])===this.el&&(this.openAlert(),this.autoClose&&!this.autoCloseTimeoutId&&(this.initialOpenTime=Date.now(),this.autoCloseTimeoutId=window.setTimeout((()=>this.closeAlert()),p[this.autoCloseDuration])))}onBeforeOpen(){this.calciteAlertBeforeOpen.emit()}onOpen(){this.calciteAlertOpen.emit()}onBeforeClose(){this.calciteAlertBeforeClose.emit()}onClose(){this.calciteAlertClose.emit()}openAlert(){window.clearTimeout(this.queueTimeout),this.queueTimeout=window.setTimeout((()=>this.queued=!1),300)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{open:["openHandler"],messageOverrides:["onMessagesChange"],autoCloseDuration:["updateDuration"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return':host{--calcite-alert-edge-distance:2rem;display:block}.container{pointer-events:none;position:fixed;z-index:var(--calcite-app-z-index-toast);margin-inline:auto;margin-block:0px;box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:min-content;align-items:center;justify-content:center;background-color:var(--calcite-ui-foreground-1);text-align:start;opacity:0;--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);container:responsive-container/inline-size;border-radius:var(--calcite-border-radius);border-block-start:0 solid transparent;border-inline:1px solid var(--calcite-ui-border-3);border-block-end:1px solid var(--calcite-ui-border-3);inline-size:var(--calcite-alert-width);max-inline-size:calc(100% - var(--calcite-alert-edge-distance) * 2);transition:var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), all var(--calcite-animation-timing) ease-in-out}.container--bottom,.container--top{inset-inline-end:0;inset-inline-start:0}.container[class*=bottom]{transform:translate3d(0, var(--calcite-alert-edge-distance), 0);inset-block-end:var(--calcite-alert-edge-distance)}.container[class*=top]{transform:translate3d(0, calc(-1 * var(--calcite-alert-edge-distance)), 0);inset-block-start:var(--calcite-alert-edge-distance)}.container[class*=start]{inset-inline-start:var(--calcite-alert-edge-distance);inset-inline-end:auto}.container[class*=end]{inset-inline-end:var(--calcite-alert-edge-distance);inset-inline-start:auto}.icon{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0px;margin-block:auto;margin-inline-end:auto;padding-inline-start:var(--calcite-alert-spacing-token-large)}.close{display:flex;cursor:pointer;align-items:center;justify-content:flex-end;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-ui-text-3);outline:2px solid transparent;outline-offset:2px;-webkit-appearance:none;padding:var(--calcite-alert-spacing-token-large);outline-color:transparent}.close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.close:hover,.close:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.close:active{background-color:var(--calcite-ui-foreground-3)}.queue-count{visibility:hidden;display:flex;min-inline-size:min-content;cursor:default;align-items:center;justify-content:space-around;align-self:stretch;overflow:hidden;background-color:var(--calcite-ui-foreground-1);text-align:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2);opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline:0 solid transparent;border-start-end-radius:0}.queue-count--active{visibility:visible;opacity:1}.dismiss-progress{position:absolute;display:block;inline-size:100%;overflow:hidden;inset-inline:0;inset-block-start:-2px;block-size:2px;border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}.dismiss-progress:after{position:absolute;inset-block-start:0px;display:block;block-size:2px;content:"";background-color:var(--calcite-alert-dismiss-progress-background);inset-inline-end:0}.actions-end{display:flex;align-self:stretch}.text-container{box-sizing:border-box;display:flex;min-inline-size:0px;flex:1 1 auto;flex-direction:column;overflow-wrap:break-word;padding-block:var(--calcite-alert-spacing-token-small);padding-inline:var(--calcite-alert-spacing-token-large) var(--calcite-alert-spacing-token-small)}.footer{position:relative;display:flex;inline-size:auto;justify-content:flex-end;align-self:stretch;padding-block-start:1px;block-size:inherit}:host([scale=s]){--calcite-alert-width:40em;--calcite-alert-spacing-token-small:0.5rem;--calcite-alert-spacing-token-large:0.75rem;--calcite-alert-footer-height:2rem;--calcite-alert-footer-divider-gap:0.125rem}:host([scale=s]) slot[name=title]::slotted(*),:host([scale=s]) *::slotted([slot=title]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) slot[name=message]::slotted(*),:host([scale=s]) *::slotted([slot=message]){font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) slot[name=link]::slotted(*),:host([scale=s]) *::slotted([slot=link]){font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .queue-count{margin-inline:0.5rem}:host([scale=s]) .container{--calcite-alert-min-height:3.5rem}:host([scale=m]){--calcite-alert-width:50em;--calcite-alert-spacing-token-small:0.75rem;--calcite-alert-spacing-token-large:1rem;--calcite-alert-footer-height:3rem;--calcite-alert-footer-divider-gap:0.25rem}:host([scale=m]) slot[name=title]::slotted(*),:host([scale=m]) *::slotted([slot=title]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) slot[name=message]::slotted(*),:host([scale=m]) *::slotted([slot=message]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) slot[name=link]::slotted(*),:host([scale=m]) *::slotted([slot=link]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .queue-count{margin-inline:0.75rem}:host([scale=m]) .container{--calcite-alert-min-height:4.1875rem}:host([scale=l]){--calcite-alert-width:60em;--calcite-alert-spacing-token-small:1rem;--calcite-alert-spacing-token-large:1.25rem;--calcite-alert-footer-height:4rem;--calcite-alert-footer-divider-gap:0.5rem}:host([scale=l]) slot[name=title]::slotted(*),:host([scale=l]) *::slotted([slot=title]){margin-block-end:0.25rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) slot[name=message]::slotted(*),:host([scale=l]) *::slotted([slot=message]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) slot[name=link]::slotted(*),:host([scale=l]) *::slotted([slot=link]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .queue-count{margin-inline:1rem}:host([scale=l]) .container{--calcite-alert-min-height:5.625rem}:host([open]) .container:not(.container--queued){border-block-start-width:2px;opacity:1;pointer-events:initial}:host([open]) .container:not(.container--queued)[class*=bottom]{transform:translate3d(0, calc(-1 * var(--calcite-alert-edge-distance)), inherit)}:host([open]) .container:not(.container--queued)[class*=top]{transform:translate3d(0, var(--calcite-alert-edge-distance), inherit)}:host([auto-close])>.queue-count{border-inline-end:0 solid transparent}slot[name=title]::slotted(*),*::slotted([slot=title]){font-size:var(--calcite-font-size-0);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}slot[name=message]::slotted(*),*::slotted([slot=message]){margin:0px;display:inline;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);margin-inline-end:0.5rem}slot[name=link]::slotted(*),*::slotted([slot=link]){display:inline-flex;color:var(--calcite-ui-text-link)}:host([kind=brand]) .container{border-block-start-color:var(--calcite-ui-brand)}:host([kind=brand]) .container .icon{color:var(--calcite-ui-brand)}:host([kind=info]) .container{border-block-start-color:var(--calcite-ui-info)}:host([kind=info]) .container .icon{color:var(--calcite-ui-info)}:host([kind=danger]) .container{border-block-start-color:var(--calcite-ui-danger)}:host([kind=danger]) .container .icon{color:var(--calcite-ui-danger)}:host([kind=success]) .container{border-block-start-color:var(--calcite-ui-success)}:host([kind=success]) .container .icon{color:var(--calcite-ui-success)}:host([kind=warning]) .container{border-block-start-color:var(--calcite-ui-warning)}:host([kind=warning]) .container .icon{color:var(--calcite-ui-warning)}:host([auto-close-duration=fast]) .dismiss-progress:after{animation:dismissProgress 6000ms ease-out}:host(:hover[auto-close-duration=fast]) .dismiss-progress:after{animation-play-state:paused}:host([auto-close-duration=medium]) .dismiss-progress:after{animation:dismissProgress 10000ms ease-out}:host(:hover[auto-close-duration=medium]) .dismiss-progress:after{animation-play-state:paused}:host([auto-close-duration=slow]) .dismiss-progress:after{animation:dismissProgress 14000ms ease-out}:host(:hover[auto-close-duration=slow]) .dismiss-progress:after{animation-play-state:paused}@keyframes dismissProgress{0%{inline-size:0px;opacity:0.75}100%{inline-size:100%;opacity:1}}.container--slotted-in-shell{position:absolute}:host([hidden]){display:none}[hidden]{display:none}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}'}},[1,"calcite-alert",{open:[1540],autoClose:[516,"auto-close"],autoCloseDuration:[513,"auto-close-duration"],kind:[513],icon:[520],iconFlipRtl:[516,"icon-flip-rtl"],label:[1],numberingSystem:[513,"numbering-system"],placement:[513],scale:[513],messages:[1040],messageOverrides:[1040],slottedInShell:[1028,"slotted-in-shell"],defaultMessages:[32],effectiveLocale:[32],hasEndActions:[32],queue:[32],queueLength:[32],queued:[32],setFocus:[64]},[[8,"calciteInternalAlertSync","alertSync"],[8,"calciteInternalAlertRegister","alertRegister"],[8,"calciteInternalAlertUnregister","alertUnregister"]]]);function E(){if("undefined"===typeof customElements)return;["calcite-alert","calcite-chip","calcite-icon"].forEach((e=>{switch(e){case"calcite-alert":customElements.get(e)||customElements.define(e,T);break;case"calcite-chip":customElements.get(e)||(0,d.d)();break;case"calcite-icon":customElements.get(e)||(0,u.d)()}}))}E();const M=T,L=E},1579:(e,t,i)=>{i.d(t,{C:()=>O,d:()=>D});var n=i(51554),s=i(92358),a=i(19432),o=i(47242),l=i(52655),c=i(13160),r=i(46895),h=i(72021),d=i(19579),u=i(64044),p=i(57601);const m="title",g="close",v="image-container",f="chip-icon",b="text--slotted",k="container",x="image--slotted",y="closable",w="multiple",C="selectable",z="select-icon",q="select-icon--active",A="non-interactive",I="is-circle",T="image",E="x",M="circle",L="circle-f",S="check-circle-f",O=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteChipClose=(0,n.yM)(this,"calciteChipClose",6),this.calciteChipSelect=(0,n.yM)(this,"calciteChipSelect",6),this.calciteInternalChipKeyEvent=(0,n.yM)(this,"calciteInternalChipKeyEvent",6),this.mutationObserver=(0,h.c)("mutation",(()=>this.updateHasText())),this.close=()=>{this.calciteChipClose.emit(),this.selected=!1,this.closed=!0},this.closeButtonKeyDownHandler=e=>{(0,d.i)(e.key)&&(e.preventDefault(),this.close())},this.handleSlotImageChange=e=>{this.hasImage=(0,s.e)(e)},this.handleEmittingEvent=()=>{this.interactive&&this.calciteChipSelect.emit()},this.disabled=!1,this.appearance="solid",this.kind="neutral",this.closable=!1,this.icon=void 0,this.iconFlipRtl=!1,this.scale="m",this.label=void 0,this.value=void 0,this.closed=!1,this.selectionMode="none",this.selected=!1,this.messageOverrides=void 0,this.messages=void 0,this.interactive=!1,this.defaultMessages=void 0,this.effectiveLocale=void 0,this.hasText=!1,this.hasImage=!1}onMessagesChange(){}effectiveLocaleChange(){(0,l.u)(this,this.effectiveLocale)}connectedCallback(){var e;(0,a.c)(this),(0,c.c)(this),(0,r.c)(this),(0,l.c)(this),null===(e=this.mutationObserver)||void 0===e||e.observe(this.el,{childList:!0,subtree:!0})}componentDidLoad(){(0,o.s)(this)}componentDidRender(){(0,c.u)(this)}disconnectedCallback(){var e;(0,a.d)(this),(0,c.d)(this),(0,r.d)(this),(0,l.d)(this),null===(e=this.mutationObserver)||void 0===e||e.disconnect()}async componentWillLoad(){(0,o.a)(this),n.Z5.isBrowser&&(await(0,l.s)(this),this.updateHasText())}keyDownHandler(e){if(e.target===this.el)switch(e.key){case" ":case"Enter":this.handleEmittingEvent(),e.preventDefault();break;case"ArrowRight":case"ArrowLeft":case"Home":case"End":this.calciteInternalChipKeyEvent.emit(e),e.preventDefault()}}clickHandler(){!this.interactive&&this.closable&&this.closeButtonEl.focus()}async setFocus(){var e;if(await(0,o.c)(this),!this.disabled&&this.interactive)null===(e=this.containerEl)||void 0===e||e.focus();else if(!this.disabled&&this.closable){var t;null===(t=this.closeButtonEl)||void 0===t||t.focus()}}updateHasText(){this.hasText=this.el.textContent.trim().length>0}renderChipImage(){return(0,n.h)("div",{class:v},(0,n.h)("slot",{name:T,onSlotchange:this.handleSlotImageChange}))}renderSelectionIcon(){const e="multiple"===this.selectionMode&&this.selected?S:"multiple"===this.selectionMode?M:this.selected?L:void 0;return(0,n.h)("div",{class:{[z]:!0,[q]:"multiple"===this.selectionMode||this.selected}},(0,n.h)("calcite-icon",{icon:e,scale:(0,u.g)(this.scale)}))}renderCloseButton(){return(0,n.h)("button",{"aria-label":this.messages.dismissLabel,class:g,onClick:this.close,onKeyDown:this.closeButtonKeyDownHandler,tabIndex:this.disabled?-1:0,ref:e=>this.closeButtonEl=e},(0,n.h)("calcite-icon",{icon:E,scale:(0,u.g)(this.scale)}))}renderIcon(){return(0,n.h)("calcite-icon",{class:f,flipRtl:this.iconFlipRtl,icon:this.icon,scale:(0,u.g)(this.scale)})}render(){const e=this.disabled||!this.disabled&&!this.interactive,t="multiple"===this.selectionMode&&this.interactive?"checkbox":"none"!==this.selectionMode&&this.interactive?"radio":this.interactive?"button":void 0;return(0,n.h)(n.AA,null,(0,n.h)("div",{"aria-checked":"none"!==this.selectionMode&&this.interactive?(0,s.t)(this.selected):void 0,"aria-disabled":e?(0,s.t)(this.disabled):void 0,"aria-label":this.label,class:{[k]:!0,[b]:this.hasText,[x]:this.hasImage,[C]:"none"!==this.selectionMode,[w]:"multiple"===this.selectionMode,[y]:this.closable,[A]:!this.interactive,[I]:!this.closable&&!this.hasText&&(!this.icon||!this.hasImage)&&("none"===this.selectionMode||!!this.selectionMode&&"multiple"!==this.selectionMode&&!this.selected)},onClick:this.handleEmittingEvent,role:t,tabIndex:e?-1:0,ref:e=>this.containerEl=e},"none"!==this.selectionMode&&this.renderSelectionIcon(),this.renderChipImage(),this.icon&&this.renderIcon(),(0,n.h)("span",{class:m},(0,n.h)("slot",null)),this.closable&&this.renderCloseButton()))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([scale=s]){block-size:1.5rem;font-size:var(--calcite-font-size--2);--calcite-chip-spacing-s-internal:0.25rem;--calcite-chip-spacing-l-internal:0.5rem}:host([scale=s]) .close,:host([scale=s]) .select-icon--active{block-size:1rem;inline-size:1rem}:host([scale=s]) .image-container{block-size:1.25rem;inline-size:1.25rem}:host([scale=s]) .container.is-circle{block-size:1.5rem;inline-size:1.5rem}:host([scale=m]){block-size:2rem;font-size:var(--calcite-font-size--1);--calcite-chip-spacing-s-internal:0.375rem;--calcite-chip-spacing-l-internal:0.5rem}:host([scale=m]) .close,:host([scale=m]) .image-container,:host([scale=m]) .select-icon--active{block-size:1.5rem;inline-size:1.5rem}:host([scale=m]) .container.is-circle{block-size:2rem;inline-size:2rem}:host([scale=l]){block-size:2.75rem;font-size:var(--calcite-font-size-0);--calcite-chip-spacing-s-internal:0.5rem;--calcite-chip-spacing-l-internal:0.75rem}:host([scale=l]) .image-container,:host([scale=l]) .close,:host([scale=l]) .select-icon--active{block-size:2rem;inline-size:2rem}:host([scale=l]) .container.is-circle{block-size:2.75rem;inline-size:2.75rem}:host{display:inline-flex;cursor:default;border-radius:9999px}.container{box-sizing:border-box;display:inline-flex;block-size:100%;max-inline-size:100%;align-items:center;justify-content:center;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1);font-weight:var(--calcite-font-weight-medium);outline-color:transparent}.container:not(.is-circle){padding-inline:var(--calcite-chip-spacing-s-internal)}.container.selectable{cursor:pointer}.container:not(.non-interactive):focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([scale=s]) .container.image--slotted{padding-inline-start:calc(0.125rem / 2)}:host([scale=s]) .container.is-circle{padding-inline:0}.container.text--slotted .title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-inline:var(--calcite-chip-spacing-s-internal)}.container:not(.text--slotted) .title{display:none}.container:not(.image--slotted) .image-container{display:none}.container.closable{padding-inline-end:calc(var(--calcite-chip-spacing-l-internal) / 2)}.container:not(.is-circle).image--slotted{padding-inline-start:calc(var(--calcite-chip-spacing-l-internal) / 2)}.container:not(.is-circle).image--slotted .image-container{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle).image--slotted .image-container~.chip-icon{margin-inline-start:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle).selectable:not(.text--slotted) .chip-icon{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.selectable):not(.text--slotted) .chip-icon{margin-inline-start:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.text--slotted) .chip-icon{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.text-slotted).image--slotted .image-container{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.closable):not(.text--slotted).image--slotted.selectable .image-container{margin-inline-end:0}.container:not(.is-circle):not(.closable):not(.text--slotted).image--slotted.selectable .image-container~.chip-icon{margin-inline-start:calc(var(--calcite-chip-spacing-s-internal) * 2)}.chip-icon{position:relative;margin-block:0px;display:inline-flex;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline:var(--calcite-chip-spacing-s-internal)}.image-container{display:inline-flex;overflow:hidden;align-items:center;justify-content:center;pointer-events:none}.close{margin:0px;cursor:pointer;align-items:center;border-style:none;background-color:transparent;color:var(--calcite-ui-text-1);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;-webkit-appearance:none;display:flex;border-radius:50%;align-content:center;justify-content:center;--calcite-chip-transparent-hover:var(--calcite-button-transparent-hover);--calcite-chip-transparent-press:var(--calcite-button-transparent-press)}.close:hover{background-color:var(--calcite-chip-transparent-hover)}.close:focus{background-color:var(--calcite-chip-transparent-hover);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.close:active{background-color:var(--calcite-chip-transparent-press)}.close calcite-icon{color:inherit}.select-icon{align-self:center;justify-content:center;align-items:center;display:flex;inset-block-start:-1px;position:relative;visibility:hidden;inline-size:0;opacity:0;transition:opacity 0.15s ease-in-out, inline-size 0.15s ease-in-out}.select-icon.select-icon--active{visibility:visible;opacity:0.5}.container:not(.is-circle).image--slotted .select-icon.select-icon--active{margin-inline-end:var(--calcite-chip-spacing-s-internal)}:host([selected]) .select-icon{opacity:1}.container:hover .select-icon--active{opacity:1}slot[name=image]::slotted(*){display:flex;block-size:100%;inline-size:100%;overflow:hidden;border-radius:50%}:host([kind=neutral]){background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host([kind=neutral]) .container{border-color:transparent}:host([kind=neutral]) .close{color:var(--calcite-ui-text-3)}:host([kind=neutral]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-3))}:host([kind=inverse]){background-color:var(--calcite-ui-inverse);color:var(--calcite-ui-text-inverse)}:host([kind=inverse]) .container{border-color:transparent}:host([kind=inverse]) .close{color:var(--calcite-ui-text-inverse)}:host([kind=inverse]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-inverse))}:host([kind=brand]){background-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-inverse)}:host([kind=brand]) .container{border-color:transparent}:host([kind=brand]) .close{color:var(--calcite-ui-text-inverse)}:host([kind=brand]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-inverse))}:host([appearance=outline-fill]),:host([appearance=outline]){background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1)}:host([appearance=outline-fill]) .close,:host([appearance=outline]) .close{color:var(--calcite-ui-text-3)}:host([appearance=outline-fill]) .chip-icon,:host([appearance=outline]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-3))}:host([appearance=outline-fill]){background-color:var(--calcite-ui-foreground-1)}:host([appearance=outline]){background-color:transparent}:host([kind=neutral][appearance=outline-fill]) .container,:host([kind=neutral][appearance=outline]) .container{border-color:var(--calcite-ui-border-1)}:host([kind=inverse][appearance=outline-fill]) .container,:host([kind=inverse][appearance=outline]) .container{border-color:var(--calcite-ui-border-inverse)}:host([kind=brand][appearance=outline-fill]) .container,:host([kind=brand][appearance=outline]) .container{border-color:var(--calcite-ui-brand)}:host([kind=brand][appearance=solid]) button,:host([kind=inverse][appearance=solid]) button{outline-color:var(--calcite-ui-text-inverse)}:host([closed]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-chip",{disabled:[516],appearance:[513],kind:[513],closable:[516],icon:[513],iconFlipRtl:[516,"icon-flip-rtl"],scale:[513],label:[1],value:[8],closed:[1540],selectionMode:[1,"selection-mode"],selected:[1540],messageOverrides:[1040],messages:[1040],interactive:[4],defaultMessages:[32],effectiveLocale:[32],hasText:[32],hasImage:[32],setFocus:[64]},[[0,"keydown","keyDownHandler"],[0,"click","clickHandler"]]]);function D(){if("undefined"===typeof customElements)return;["calcite-chip","calcite-icon"].forEach((e=>{switch(e){case"calcite-chip":customElements.get(e)||customElements.define(e,O);break;case"calcite-icon":customElements.get(e)||(0,p.d)()}}))}D()},40120:(e,t,i)=>{var n;i.d(t,{K:()=>n}),function(e){e.brand="lightbulb",e.danger="exclamationMarkTriangle",e.info="information",e.success="checkCircle",e.warning="exclamationMarkTriangle"}(n||(n={}))}}]);
//# sourceMappingURL=1908.bc674b5b.chunk.js.map