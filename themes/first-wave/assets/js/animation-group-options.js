(()=>{var t={942:(t,e)=>{var r;!function(){"use strict";var o={}.hasOwnProperty;function i(){for(var t="",e=0;e<arguments.length;e++){var r=arguments[e];r&&(t=s(t,n(r)))}return t}function n(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return i.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var r in t)o.call(t,r)&&t[r]&&(e=s(e,r));return e}function s(t,e){return e?t?t+" "+e:t+e:t}t.exports?(i.default=i,t.exports=i):void 0===(r=function(){return i}.apply(e,[]))||(t.exports=r)}()}},e={};function r(o){var i=e[o];if(void 0!==i)return i.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,r),n.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t=window.wp.compose,e=window.wp.components,o=window.wp.blockEditor,i=window.wp.element,n=window.wp.i18n;var s=r(942),a=r.n(s);const u=window.ReactJSXRuntime,c=["core/image"];wp.hooks.addFilter("blocks.registerBlockType","custom-attributes/set-sidebar-select-attribute",((t,e)=>c.includes(e)?Object.assign({},t,{attributes:Object.assign({},t.attributes,{imageAttribute:{type:"string"}})}):t));const l=(0,t.createHigherOrderComponent)((t=>r=>{if(!c.includes(r.name))return(0,u.jsx)(t,{...r});const{attributes:s,setAttributes:a}=r,{imageAttribute:l}=s;return(0,u.jsxs)(i.Fragment,{children:[(0,u.jsx)(t,{...r}),(0,u.jsx)(o.InspectorControls,{children:(0,u.jsx)(e.PanelBody,{title:(0,n.__)("Image Custom Attributes"),children:(0,u.jsx)(e.SelectControl,{label:(0,n.__)("Custom Attribute"),value:l,options:[{label:(0,n.__)("None"),value:""},{label:(0,n.__)("One"),value:"one"}],onChange:t=>{a({imageAttribute:t})}})})})]})}),"withSidebarSelect");wp.hooks.addFilter("editor.BlockEdit","custom-attributes/with-sidebar-select",l);const d=(0,t.createHigherOrderComponent)((t=>e=>{if(!c.includes(e.name))return(0,u.jsx)(t,{...e});const{attributes:r}=e,{imageAttribute:o}=r;return o?(0,u.jsx)(t,{...e,className:"has-option-"+o}):(0,u.jsx)(t,{...e})}),"withSidebarSelectProp");wp.hooks.addFilter("editor.BlockListBlock","custom-attributes/with-sidebar-select-prop",d),wp.hooks.addFilter("blocks.getSaveContent.extraProps","custom-attributes/save-sidebar-select-attribute",((t,e,r)=>{if(c.includes(e.name)){const{imageAttribute:e}=r;e&&(t.className=a()(t.className,"has-option-"+e))}return t}))})()})();