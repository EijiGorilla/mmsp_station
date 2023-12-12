/*! For license information please see 7042.fe028ff2.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmmsp_station=self.webpackChunkmmsp_station||[]).push([[7042],{27042:(e,t,i)=>{i.r(t),i.d(t,{CalciteStepperItem:()=>y,defineCustomElement:()=>x});var o=i(51554),r=i(13160),s=i(46895),n=i(47242),a=i(52655),l=i(57601);const c="container",d="stepper-item-content",p="stepper-item-description",h="stepper-item-header",m="stepper-item-heading",u="stepper-item-header-text",b="stepper-item-number",v="visually-hidden",g=(0,o.GH)(class extends o.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalStepperItemKeyEvent=(0,o.yM)(this,"calciteInternalStepperItemKeyEvent",6),this.calciteInternalStepperItemSelect=(0,o.yM)(this,"calciteInternalStepperItemSelect",6),this.calciteInternalUserRequestedStepperItemSelect=(0,o.yM)(this,"calciteInternalUserRequestedStepperItemSelect",6),this.calciteInternalStepperItemRegister=(0,o.yM)(this,"calciteInternalStepperItemRegister",6),this.keyDownHandler=e=>{if(!this.disabled&&e.target===this.el)switch(e.key){case" ":case"Enter":this.emitUserRequestedItem(),e.preventDefault();break;case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"Home":case"End":this.calciteInternalStepperItemKeyEvent.emit({item:e}),e.preventDefault()}},this.handleItemClick=e=>{this.disabled||"horizontal"===this.layout&&e.composedPath().some((e=>{var t;return null===(t=e.classList)||void 0===t?void 0:t.contains("stepper-item-content")}))||this.emitUserRequestedItem()},this.emitUserRequestedItem=()=>{if(this.emitRequestedItem(),!this.disabled){const e=this.itemPosition;this.calciteInternalUserRequestedStepperItemSelect.emit({position:e})}},this.emitRequestedItem=()=>{if(!this.disabled){const e=this.itemPosition;this.calciteInternalStepperItemSelect.emit({position:e})}},this.selected=!1,this.complete=!1,this.error=!1,this.disabled=!1,this.heading=void 0,this.description=void 0,this.iconFlipRtl=!1,this.numberingSystem=void 0,this.icon=!1,this.layout=void 0,this.messages=void 0,this.numbered=!1,this.scale="m",this.multipleViewMode=!1,this.messageOverrides=void 0,this.defaultMessages=void 0,this.effectiveLocale=""}selectedHandler(){this.selected&&this.emitRequestedItem()}disabledWatcher(){this.registerStepperItem()}onMessagesChange(){}effectiveLocaleWatcher(e){s.n.numberFormatOptions={locale:e,numberingSystem:this.numberingSystem,useGrouping:!1},(0,a.u)(this,this.effectiveLocale)}connectedCallback(){(0,r.c)(this),(0,s.c)(this),(0,a.c)(this)}async componentWillLoad(){(0,n.a)(this),this.parentStepperEl=this.el.parentElement,this.itemPosition=this.getItemPosition(),this.registerStepperItem(),this.selected&&this.emitRequestedItem(),await(0,a.s)(this)}componentDidLoad(){(0,n.s)(this)}componentDidRender(){(0,r.u)(this,!0)}disconnectedCallback(){(0,r.d)(this),(0,s.d)(this),(0,a.d)(this)}render(){return(0,o.h)(o.AA,{"aria-current":this.selected?"step":"false",onClick:this.handleItemClick,onKeyDown:this.keyDownHandler},(0,o.h)("div",{class:c},this.complete&&(0,o.h)("span",{"aria-live":"polite",class:v},this.messages.complete),(0,o.h)("div",{class:h,tabIndex:"horizontal"===this.layout&&!this.disabled&&this.multipleViewMode?0:null,ref:e=>this.headerEl=e},this.icon?this.renderIcon():null,this.numbered?(0,o.h)("div",{class:b},this.renderNumbers(),"."):null,(0,o.h)("div",{class:u},(0,o.h)("span",{class:m},this.heading),(0,o.h)("span",{class:p},this.description))),(0,o.h)("div",{class:d},(0,o.h)("slot",null))))}updateActiveItemOnChange(e){(e.target===this.parentStepperEl||e.composedPath().includes(this.parentStepperEl))&&(this.selectedPosition=e.detail.position,this.determineSelectedItem())}async setFocus(){var e;await(0,n.c)(this),null===(e="vertical"===this.layout?this.el:this.headerEl)||void 0===e||e.focus()}renderIcon(){let e="circle";return this.selected&&(this.multipleViewMode||!this.error&&!this.complete)?e="circleF":this.error?e="exclamationMarkCircleF":this.complete&&(e="checkCircleF"),(0,o.h)("calcite-icon",{class:"stepper-item-icon",flipRtl:this.iconFlipRtl,icon:e,scale:"s"})}determineSelectedItem(){this.selected=!this.disabled&&this.itemPosition===this.selectedPosition}registerStepperItem(){this.calciteInternalStepperItemRegister.emit({position:this.itemPosition})}getItemPosition(){var e;return Array.from(null===(e=this.parentStepperEl)||void 0===e?void 0:e.querySelectorAll("calcite-stepper-item")).indexOf(this.el)}renderNumbers(){return s.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:!1},s.n.numberFormatter.format(this.itemPosition+1)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{selected:["selectedHandler"],disabled:["disabledWatcher"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleWatcher"]}}static get style(){return":host([layout=horizontal][disabled]) .stepper-item-header,:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([layout=horizontal][disabled]) .stepper-item-header *,:host([disabled]) *,:host([layout=horizontal][disabled]) .stepper-item-header ::slotted(*),:host([disabled]) ::slotted(*){pointer-events:none}:host([scale=s]){--calcite-stepper-item-spacing-unit-s:0.25rem;--calcite-stepper-item-spacing-unit-m:0.75rem;--calcite-stepper-item-spacing-unit-l:1rem;--calcite-internal-stepper-action-inline-size:2rem;font-size:var(--calcite-font-size--1);line-height:1rem;margin-inline-end:0.25rem}:host([scale=s]) .stepper-item-description{font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-stepper-item-spacing-unit-s:0.5rem;--calcite-stepper-item-spacing-unit-m:1rem;--calcite-stepper-item-spacing-unit-l:1.25rem;--calcite-internal-stepper-action-inline-size:2.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-inline-end:0.5rem}:host([scale=m]) .stepper-item-description{font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-stepper-item-spacing-unit-s:0.75rem;--calcite-stepper-item-spacing-unit-m:1.25rem;--calcite-stepper-item-spacing-unit-l:1.5rem;--calcite-internal-stepper-action-inline-size:3rem;font-size:var(--calcite-font-size-1);line-height:1.5rem;margin-inline-end:0.75rem}:host([scale=l]) .stepper-item-description{font-size:var(--calcite-font-size-0);line-height:1.25rem}:host{position:relative;display:flex;flex-grow:1;flex-direction:column;align-self:flex-start;margin-block-end:var(--calcite-stepper-item-spacing-unit-s)}:host .container{position:relative;display:flex;flex-grow:1;cursor:pointer;flex-direction:column;border-width:0px;border-block-start-width:2px;border-style:solid;border-color:var(--calcite-ui-border-3);color:var(--calcite-ui-text-3);text-decoration-line:none;outline:2px solid transparent;outline-offset:2px;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host{outline-color:transparent}:host(:focus){outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host .stepper-item-header{display:flex;cursor:pointer;align-items:flex-start}:host .stepper-item-content,:host .stepper-item-header{transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);padding-block:var(--calcite-stepper-item-spacing-unit-l);padding-inline-end:var(--calcite-stepper-item-spacing-unit-m);text-align:start}:host .stepper-item-header *{display:inline-flex;align-items:center;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .stepper-item-content{display:none;inline-size:100%;flex-direction:column;font-size:var(--calcite-font-size--2);line-height:1.375}:host .stepper-item-icon{margin-inline-end:var(--calcite-stepper-item-spacing-unit-m);margin-block-start:1px;display:inline-flex;block-size:0.75rem;flex-shrink:0;align-self:flex-start;color:var(--calcite-ui-text-3);opacity:var(--calcite-ui-opacity-disabled);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .stepper-item-header-text{flex-direction:column;text-align:initial;margin-inline-end:auto}:host .stepper-item-heading,:host .stepper-item-description{display:flex;inline-size:100%}:host .stepper-item-heading{margin-block-end:0.25rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}:host .stepper-item-description{color:var(--calcite-ui-text-3)}:host .stepper-item-number{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:var(--calcite-stepper-item-spacing-unit-m)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([complete]) .container{border-color:rgba(0, 122, 194, 0.5)}:host([complete]) .container .stepper-item-icon{color:var(--calcite-ui-brand)}:host([error]) .container{border-block-start-color:var(--calcite-ui-danger)}:host([error]) .container .stepper-item-number{color:var(--calcite-ui-danger)}:host([error]) .container .stepper-item-icon{opacity:1;color:var(--calcite-ui-danger)}:host(:hover:not([disabled]):not([selected])) .container,:host(:focus:not([disabled]):not([selected])) .container{border-block-start-color:var(--calcite-ui-brand)}:host(:hover:not([disabled]):not([selected])) .container .stepper-item-heading,:host(:focus:not([disabled]):not([selected])) .container .stepper-item-heading{color:var(--calcite-ui-text-1)}:host(:hover:not([disabled]):not([selected])) .container .stepper-item-description,:host(:focus:not([disabled]):not([selected])) .container .stepper-item-description{color:var(--calcite-ui-text-2)}:host([error]:hover:not([disabled]):not([selected])) .container,:host([error]:focus:not([disabled]):not([selected])) .container{border-block-start-color:var(--calcite-ui-danger-hover)}:host([selected]) .container{border-block-start-color:var(--calcite-ui-brand)}:host([selected]) .container .stepper-item-heading{color:var(--calcite-ui-text-1)}:host([selected]) .container .stepper-item-description{color:var(--calcite-ui-text-2)}:host([selected]) .container .stepper-item-number{color:var(--calcite-ui-brand)}:host([selected]) .container .stepper-item-icon{color:var(--calcite-ui-brand);opacity:1}:host([selected]) .container .stepper-item-content{display:flex}:host([layout=vertical]) .container{margin-inline:0px;margin-block-start:0px;flex:1 1 auto;border-block-start-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);padding-block:0px;border-inline-start-width:2px;padding-inline-start:var(--calcite-stepper-item-spacing-unit-l)}:host([layout=vertical]) .container .stepper-item-icon{order:3;margin-block:1px 0px;padding-inline-start:var(--calcite-stepper-item-spacing-unit-s);margin-inline-start:auto}:host([layout=vertical]) .container .stepper-item-header{padding-inline-end:0px}:host([layout=vertical]) .container .stepper-item-content{padding:0px}:host([layout=vertical][complete]) .container{border-color:rgba(0, 122, 194, 0.5)}:host([layout=vertical][complete]:hover:not([disabled]):not([selected])) .container,:host([layout=vertical][complete]:focus:not([disabled]):not([selected])) .container{border-color:var(--calcite-ui-brand)}:host([layout=vertical][error]) .container{border-color:var(--calcite-ui-danger)}:host([layout=vertical][selected]) .container{border-color:var(--calcite-ui-brand)}:host([layout=vertical][selected]) .container .stepper-item-content:not(:empty){margin-block-end:var(--calcite-stepper-item-spacing-unit-l)}:host([layout=vertical]:hover:not([disabled]):not([selected])) .container,:host([layout=vertical]:focus:not([disabled]):not([selected])) .container{border-color:rgba(0, 122, 194, 0.5)}:host([layout=vertical][error]:hover:not([disabled]):not([selected])) .container,:host([layout=vertical][error]:focus:not([disabled]):not([selected])) .container{border-color:var(--calcite-ui-danger-hover)}:host([layout=horizontal]){display:contents}:host([layout=horizontal]) .container{display:contents}:host([layout=horizontal]) .stepper-item-header{border-width:0px;border-block-start-width:2px;border-style:solid;border-color:var(--calcite-ui-border-3);outline-color:transparent;grid-row:items}:host([layout=horizontal]) .stepper-item-header:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([layout=horizontal]) .stepper-item-content{cursor:auto;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);padding-block:0;padding-inline-end:var(--calcite-stepper-item-spacing-unit-m);text-align:start}:host([layout=horizontal][selected]) .stepper-item-content{grid-area:2/1/2/-1}:host([layout=horizontal][complete]) .stepper-item-header{border-color:rgba(0, 122, 194, 0.5)}:host([layout=horizontal][complete]:hover:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal][complete]:focus:not([disabled]):not([selected])) .stepper-item-header{border-color:var(--calcite-ui-brand)}:host([layout=horizontal][error]) .stepper-item-header{border-color:var(--calcite-ui-danger)}:host([layout=horizontal][selected][multiple-view-mode]) .stepper-item-header{border-color:var(--calcite-ui-brand)}:host([layout=horizontal]:hover:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal]:focus:not([disabled]):not([selected])) .stepper-item-header{border-color:rgba(0, 122, 194, 0.5)}:host([layout=horizontal][error]:hover:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal][error]:focus:not([disabled]):not([selected])) .stepper-item-header{border-color:var(--calcite-ui-danger-hover)}@media (forced-colors: active){:host .container{outline-width:0;outline-offset:0}:host(:focus),:host(:focus-visible){outline-color:canvasText}:host([selected]) .container{border-block-start-color:highlight}:host([selected]) .container .stepper-item-number{color:highlight}:host([selected]) .container .stepper-item-icon{color:highlight}:host([layout=vertical][selected]) .container{border-color:highlight}}:host([layout=horizontal]:not([multiple-view-mode])) .stepper-item-header{margin-inline-end:0px;border-style:none;inline-size:100%;padding-inline:calc(var(--calcite-internal-stepper-action-inline-size) + 0.5rem)}:host([layout=horizontal][error]:not([multiple-view-mode])) .container .stepper-item-number{color:var(--calcite-ui-danger)}:host([layout=horizontal][error]:not([multiple-view-mode])) .container .stepper-item-icon{opacity:1;color:var(--calcite-ui-danger)}:host([layout=horizontal][error][selected]:not([multiple-view-mode])),:host([layout=horizontal][complete][selected]:not([multiple-view-mode])) .container{color:var(--calcite-ui-text-3)}:host([layout=horizontal][error][selected]:not([multiple-view-mode])) .stepper-item-heading,:host([layout=horizontal][complete][selected]:not([multiple-view-mode])) .container .stepper-item-heading{color:var(--calcite-ui-text-2)}:host([layout=horizontal][complete][selected]:not([multiple-view-mode])) .container .stepper-item-icon{opacity:var(--calcite-ui-opacity-disabled)}:host([layout=horizontal][complete][selected]:not([multiple-view-mode])) .container .stepper-item-number{color:var(--calcite-ui-text-3)}.visually-hidden{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-stepper-item",{selected:[1540],complete:[516],error:[516],disabled:[516],heading:[1],description:[1],iconFlipRtl:[516,"icon-flip-rtl"],numberingSystem:[1,"numbering-system"],icon:[4],layout:[513],messages:[1040],numbered:[4],scale:[513],multipleViewMode:[516,"multiple-view-mode"],messageOverrides:[1040],defaultMessages:[32],effectiveLocale:[32],setFocus:[64]},[[16,"calciteInternalStepperItemChange","updateActiveItemOnChange"]]]);function f(){if("undefined"===typeof customElements)return;["calcite-stepper-item","calcite-icon"].forEach((e=>{switch(e){case"calcite-stepper-item":customElements.get(e)||customElements.define(e,g);break;case"calcite-icon":customElements.get(e)||(0,l.d)()}}))}f();const y=g,x=f}}]);
//# sourceMappingURL=7042.fe028ff2.chunk.js.map