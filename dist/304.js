/*! For license information please see 304.js.LICENSE.txt */
(self.webpackChunk_lit_lit_starter_ts=self.webpackChunk_lit_lit_starter_ts||[]).push([[304],{7221:function(t,e,r){"use strict";r.d(e,{e:function(){return a}}),r(7894);var o=r(1014),n=r(2224),i=r(1342);const s=n.YA,a=(0,o.o)((t=>class extends t{static createProperties(t){const e=this.prototype;for(let r in t)r in e||e._createPropertyAccessor(r)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let e=this.__dataAttributes[t];return e||(e=this.constructor.attributeNameForProperty(t),this.__dataAttributes[e]=t),e}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this.__data[t]},set:e?function(){}:function(e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,r){let o=this.__data[t],n=this._shouldPropertyChange(t,e,o);return n&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(t in this.__dataOld)&&(this.__dataOld[t]=o),this.__data[t]=e,this.__dataPending[t]=e),n}_isPropertyPending(t){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(t))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,s.run((()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())})))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const t=this.__data,e=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(t,e,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,r)),this.__dataCounter--}_shouldPropertiesChange(t,e,r){return Boolean(e)}_propertiesChanged(t,e,r){}_shouldPropertyChange(t,e,r){return r!==e&&(r==r||e==e)}attributeChangedCallback(t,e,r,o){e!==r&&this._attributeToProperty(t,r),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,r,o)}_attributeToProperty(t,e,r){if(!this.__serializing){const o=this.__dataAttributes,n=o&&o[t]||t;this[n]=this._deserializeValue(e,r||this.constructor.typeForProperty(n))}}_propertyToAttribute(t,e,r){this.__serializing=!0,r=arguments.length<3?this[t]:r,this._valueToNodeAttribute(this,r,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,r){const o=this._serializeValue(e);"class"!==r&&"name"!==r&&"slot"!==r||(t=(0,i.r)(t)),void 0===o?t.removeAttribute(r):t.setAttribute(r,""===o&&window.trustedTypes?window.trustedTypes.emptyScript:o)}_serializeValue(t){return"boolean"==typeof t?t?"":void 0:null!=t?t.toString():void 0}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}}))},3130:function(t,e,r){"use strict";r.d(e,{q:function(){return gt}}),r(7894);var o=r(1342),n=r(1014);function i(t){return t.indexOf(".")>=0}function s(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function a(t,e){return 0===e.indexOf(t+".")}function l(t,e,r){return e+r.slice(t.length)}function c(t){if(Array.isArray(t)){let e=[];for(let r=0;r<t.length;r++){let o=t[r].toString().split(".");for(let t=0;t<o.length;t++)e.push(o[t])}return e.join(".")}return t}function d(t){return Array.isArray(t)?c(t).split("."):t.toString().split(".")}function u(t,e,r){let o=t,n=d(e);for(let t=0;t<n.length;t++){if(!o)return;o=o[n[t]]}return r&&(r.path=n.join(".")),o}function h(t,e,r){let o=t,n=d(e),i=n[n.length-1];if(n.length>1){for(let t=0;t<n.length-1;t++)if(o=o[n[t]],!o)return;o[i]=r}else o[e]=r;return n.join(".")}const p={},m=/-[a-z]/g,f=/([A-Z])/g;function _(t){return p[t]||(p[t]=t.indexOf("-")<0?t:t.replace(m,(t=>t[1].toUpperCase())))}function g(t){return p[t]||(p[t]=t.replace(f,"-$1").toLowerCase())}var v=r(7221),y=r(5108);const b={};let x=HTMLElement.prototype;for(;x;){let t=Object.getOwnPropertyNames(x);for(let e=0;e<t.length;e++)b[t[e]]=!0;x=Object.getPrototypeOf(x)}const w=window.trustedTypes?t=>trustedTypes.isHTML(t)||trustedTypes.isScript(t)||trustedTypes.isScriptURL(t):()=>!1,C=(0,n.o)((t=>{const e=(0,v.e)(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(_(t[e]))}static attributeNameForProperty(t){return g(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){this.hasAttribute(t)||this._valueToNodeAttribute(this,e,t)}_serializeValue(t){if("object"==typeof t){if(t instanceof Date)return t.toString();if(t){if(w(t))return t;try{return JSON.stringify(t)}catch(t){return""}}}return super._serializeValue(t)}_deserializeValue(t,e){let r;switch(e){case Object:try{r=JSON.parse(t)}catch(e){r=t}break;case Array:try{r=JSON.parse(t)}catch(e){r=null,y.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${t}`)}break;case Date:r=isNaN(t)?String(t):Number(t),r=new Date(r);break;default:r=super._deserializeValue(t,e)}return r}_definePropertyAccessor(t,e){!function(t,e){if(!b[e]){let r=t[e];void 0!==r&&(t.__data?t._setPendingProperty(e,r):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=r))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}}));var A=r(5108);const E={"dom-if":!0,"dom-repeat":!0};let S=!1,P=!1;const O=(()=>{const t=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(e,r,o)=>{const n=r.getAttribute(o);t&&o.startsWith("on-")?e.setAttribute(o,t.createScript(n,o)):e.setAttribute(o,n)}})();function I(t){let e=t.getAttribute("is");if(e&&E[e]){let r=t;for(r.removeAttribute("is"),t=r.ownerDocument.createElement(e),r.parentNode.replaceChild(t,r),t.appendChild(r);r.attributes.length;){const{name:e}=r.attributes[0];O(t,r,e),r.removeAttribute(e)}}return t}function T(t,e){let r=e.parentInfo&&T(t,e.parentInfo);if(!r)return t;for(let t=r.firstChild,o=0;t;t=t.nextSibling)if(e.parentIndex===o++)return t}function k(t,e,r,o){o.id&&(e[o.id]=r)}function z(t,e,r){if(r.events&&r.events.length)for(let o,n=0,i=r.events;n<i.length&&(o=i[n]);n++)t._addMethodEventListenerToNode(e,o.name,o.value,t)}function N(t,e,r,o){r.templateInfo&&(e._templateInfo=r.templateInfo,e._parentTemplateInfo=o)}const L=(0,n.o)((t=>class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let r=t._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=Boolean(e),r.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute&&t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,r,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,r){return this._parseTemplateNode(t.content,e,r)}static _parseTemplateNode(t,e,r){let o=!1,n=t;return"template"!=n.localName||n.hasAttribute("preserve-content")?"slot"===n.localName&&(e.hasInsertionPoint=!0):o=this._parseTemplateNestedTemplate(n,e,r)||o,function(t){(function(){if(!S){S=!0;const t=document.createElement("textarea");t.placeholder="a",P=t.placeholder===t.textContent}return P})()&&"textarea"===t.localName&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}(n),n.firstChild&&this._parseTemplateChildNodes(n,e,r),n.hasAttributes&&n.hasAttributes()&&(o=this._parseTemplateNodeAttributes(n,e,r)||o),o||r.noted}static _parseTemplateChildNodes(t,e,r){if("script"!==t.localName&&"style"!==t.localName)for(let o,n=t.firstChild,i=0;n;n=o){if("template"==n.localName&&(n=I(n)),o=n.nextSibling,n.nodeType===Node.TEXT_NODE){let r=o;for(;r&&r.nodeType===Node.TEXT_NODE;)n.textContent+=r.textContent,o=r.nextSibling,t.removeChild(r),r=o;if(e.stripWhiteSpace&&!n.textContent.trim()){t.removeChild(n);continue}}let s={parentIndex:i,parentInfo:r};this._parseTemplateNode(n,e,s)&&(s.infoIndex=e.nodeInfoList.push(s)-1),n.parentNode&&i++}}static _parseTemplateNestedTemplate(t,e,r){let o=t,n=this._parseTemplate(o,e);return(n.content=o.content.ownerDocument.createDocumentFragment()).appendChild(o.content),r.templateInfo=n,!0}static _parseTemplateNodeAttributes(t,e,r){let o=!1,n=Array.from(t.attributes);for(let i,s=n.length-1;i=n[s];s--)o=this._parseTemplateNodeAttribute(t,e,r,i.name,i.value)||o;return o}static _parseTemplateNodeAttribute(t,e,r,o,n){return"on-"===o.slice(0,3)?(t.removeAttribute(o),r.events=r.events||[],r.events.push({name:o.slice(3),value:n}),!0):"id"===o&&(r.id=n,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t,e){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let r=(e=e||this.constructor._parseTemplate(t)).nodeInfoList,o=e.content||t.content,n=document.importNode(o,!0);n.__noInsertionPoint=!e.hasInsertionPoint;let i=n.nodeList=new Array(r.length);n.$={};for(let t,o=0,s=r.length;o<s&&(t=r[o]);o++){let r=i[o]=T(n,t);k(0,n.$,r,t),N(0,r,t,e),z(this,r,t)}return n}_addMethodEventListenerToNode(t,e,r,o){let n=function(t,e,r){return t=t._methodHost||t,function(e){t[r]?t[r](e,e.detail):A.warn("listener method `"+r+"` not defined")}}(o=o||t,0,r);return this._addEventListenerToNode(t,e,n),n}_addEventListenerToNode(t,e,r){t.addEventListener(e,r)}_removeEventListenerFromNode(t,e,r){t.removeEventListener(e,r)}}));var R=r(9387),M=r(5108);let j=0;const V=[],D={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},$="__computeInfo",H=/[A-Z]/;function B(t,e,r){let o=t[e];if(o){if(!t.hasOwnProperty(e)&&(o=t[e]=Object.create(t[e]),r))for(let t in o){let e=o[t],r=o[t]=Array(e.length);for(let t=0;t<e.length;t++)r[t]=e[t]}}else o=t[e]={};return o}function F(t,e,r,o,n,i){if(e){let a=!1;const l=j++;for(let c in r){let d=e[n?s(c):c];if(d)for(let e,s=0,u=d.length;s<u&&(e=d[s]);s++)e.info&&e.info.lastRun===l||n&&!q(c,e.trigger)||(e.info&&(e.info.lastRun=l),e.fn(t,c,r,o,e.info,n,i),a=!0)}return a}return!1}function U(t,e,r,o,n,i,a,l){let c=!1,d=e[a?s(o):o];if(d)for(let e,s=0,u=d.length;s<u&&(e=d[s]);s++)e.info&&e.info.lastRun===r||a&&!q(o,e.trigger)||(e.info&&(e.info.lastRun=r),e.fn(t,o,n,i,e.info,a,l),c=!0);return c}function q(t,e){if(e){let r=e.name;return r==t||!(!e.structured||!function(t,e){return 0===t.indexOf(e+".")}(r,t))||!(!e.wildcard||!a(r,t))}return!0}function W(t,e,r,o,n){let i="string"==typeof n.method?t[n.method]:n.method,s=n.property;i?i.call(t,t.__data[s],o[s]):n.dynamicFn||M.warn("observer method `"+n.method+"` not defined")}function Y(t,e,r){let o=s(e);return o!==e&&(G(t,g(o)+"-changed",r[e],e),!0)}function G(t,e,r,n){let i={value:r,queueProperty:!0};n&&(i.path=n),(0,o.r)(t).dispatchEvent(new CustomEvent(e,{detail:i}))}function K(t,e,r,o,n,i){let a=(i?s(e):e)!=e?e:null,l=a?u(t,a):t.__data[e];a&&void 0===l&&(l=r[e]),G(t,n.eventName,l,a)}function J(t,e,r,o,n){let i=t.__data[e];R.v1&&(i=(0,R.v1)(i,n.attrName,"attribute",t)),t._propertyToAttribute(e,n.attrName,i)}const X=(t,e,r)=>{let o=0,n=e.length-1,i=-1;for(;o<=n;){const s=o+n>>1,a=r.get(e[s].methodInfo)-r.get(t.methodInfo);if(a<0)o=s+1;else{if(!(a>0)){i=s;break}n=s-1}}i<0&&(i=n+1),e.splice(i,0,t)},Z=(t,e,r,o,n)=>{const i=e[n?s(t):t];if(i)for(let e=0;e<i.length;e++){const s=i[e];s.info.lastRun===j||n&&!q(t,s.trigger)||(s.info.lastRun=j,X(s.info,r,o))}};function Q(t,e,r,o,n){let i=st(t,e,r,0,n);if(i===V)return!1;let s=n.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[s]?t._setPendingProperty(s,i,!0):(t[s]=i,!1)}function tt(t,e,r,o,n,i,s){r.bindings=r.bindings||[];let a={kind:o,target:n,parts:i,literal:s,isCompound:1!==i.length};if(r.bindings.push(a),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(a)){let{event:t,negate:e}=a.parts[0];a.listenerEvent=t||g(n)+"-changed",a.listenerNegate=e}let l=e.nodeInfoList.length;for(let r=0;r<a.parts.length;r++){let o=a.parts[r];o.compoundIndex=r,et(t,e,a,o,l)}}function et(t,e,r,o,n){if(!o.literal)if("attribute"===r.kind&&"-"===r.target[0])M.warn("Cannot set attribute "+r.target+' because "-" is not a valid attribute starting character');else{let i=o.dependencies,s={index:n,binding:r,part:o,evaluator:t};for(let r=0;r<i.length;r++){let o=i[r];"string"==typeof o&&(o=pt(o),o.wildcard=!0),t._addTemplatePropertyEffect(e,o.rootProperty,{fn:rt,info:s,trigger:o})}}}function rt(t,e,r,o,n,i,s){let a=s[n.index],c=n.binding,d=n.part;if(i&&d.source&&e.length>d.source.length&&"property"==c.kind&&!c.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[c.target]){let o=r[e];e=l(d.source,c.target,e),a._setPendingPropertyOrPath(e,o,!1,!0)&&t._enqueueClient(a)}else{let s=n.evaluator._evaluateBinding(t,d,e,r,o,i);s!==V&&function(t,e,r,o,n){if(n=function(t,e,r,o){if(r.isCompound){let n=t.__dataCompoundStorage[r.target];n[o.compoundIndex]=e,e=n.join("")}return"attribute"!==r.kind&&("textContent"!==r.target&&("value"!==r.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e)),e}(e,n,r,o),R.v1&&(n=(0,R.v1)(n,r.target,r.kind,e)),"attribute"==r.kind)t._valueToNodeAttribute(e,n,r.target);else{let o=r.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[o]?e[D.READ_ONLY]&&e[D.READ_ONLY][o]||e._setPendingProperty(o,n)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,o,n)}}(t,a,c,d,s)}}function ot(t,e){if(e.isCompound){let r=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),n=e.parts,i=new Array(n.length);for(let t=0;t<n.length;t++)i[t]=n[t].literal;let s=e.target;r[s]=i,e.literal&&"property"==e.kind&&("className"===s&&(t=(0,o.r)(t)),t[s]=e.literal)}}function nt(t,e,r){if(r.listenerEvent){let o=r.parts[0];t.addEventListener(r.listenerEvent,(function(t){!function(t,e,r,o,n){let i,s=t.detail,a=s&&s.path;a?(o=l(r,o,a),i=s&&s.value):i=t.currentTarget[r],i=n?!i:i,e[D.READ_ONLY]&&e[D.READ_ONLY][o]||!e._setPendingPropertyOrPath(o,i,!0,Boolean(a))||s&&s.queueProperty||e._invalidateProperties()}(t,e,r.target,o.source,o.negate)}))}}function it(t,e,r,o,n,i){i=e.static||i&&("object"!=typeof i||i[e.methodName]);let s={methodName:e.methodName,args:e.args,methodInfo:n,dynamicFn:i};for(let n,i=0;i<e.args.length&&(n=e.args[i]);i++)n.literal||t._addPropertyEffect(n.rootProperty,r,{fn:o,info:s,trigger:n});return i&&t._addPropertyEffect(e.methodName,r,{fn:o,info:s}),s}function st(t,e,r,o,n){let i=t._methodHost||t,s=i[n.methodName];if(s){let o=t._marshalArgs(n.args,e,r);return o===V?V:s.apply(i,o)}n.dynamicFn||M.warn("method `"+n.methodName+"` not defined")}const at=[],lt="(?:[a-zA-Z_$][\\w.:$\\-*]*)",ct="(?:("+lt+"|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)",dt=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?("+lt+"\\s*(?:\\(\\s*(?:(?:"+ct+"(?:,\\s*"+ct+")*)?)\\)\\s*)?)(?:]]|}})","g");function ut(t){let e="";for(let r=0;r<t.length;r++)e+=t[r].literal||"";return e}function ht(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:at};return e[2].trim()?function(t,e){return e.args=t.map((function(t){let r=pt(t);return r.literal||(e.static=!1),r}),this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t):t}return null}function pt(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),r={name:e,value:"",literal:!1},o=e[0];switch("-"===o&&(o=e[1]),o>="0"&&o<="9"&&(o="#"),o){case"'":case'"':r.value=e.slice(1,-1),r.literal=!0;break;case"#":r.value=Number(e),r.literal=!0}return r.literal||(r.rootProperty=s(e),r.structured=i(e),r.structured&&(r.wildcard=".*"==e.slice(-2),r.wildcard&&(r.name=e.slice(0,-2)))),r}function mt(t,e,r){let o=u(t,r);return void 0===o&&(o=e[r]),o}function ft(t,e,r,o){const n={indexSplices:o};R.HY&&!t._overrideLegacyUndefined&&(e.splices=n),t.notifyPath(r+".splices",n),t.notifyPath(r+".length",e.length),R.HY&&!t._overrideLegacyUndefined&&(n.indexSplices=[])}function _t(t,e,r,o,n,i){ft(t,e,r,[{index:o,addedCount:n,removed:i,object:e,type:"splice"}])}const gt=(0,n.o)((t=>{const e=L(C(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return D}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(vt.length){let t=vt[vt.length-1];t._enqueueClient(this),this.__dataHost=t}}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[D.READ_ONLY];for(let r in t)e&&e[r]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[r]=this.__dataPending[r]=t[r])}_addPropertyEffect(t,e,r){this._createPropertyAccessor(t,e==D.READ_ONLY);let o=B(this,e,!0)[t];o||(o=this[e][t]=[]),o.push(r)}_removePropertyEffect(t,e,r){let o=B(this,e,!0)[t],n=o.indexOf(r);n>=0&&o.splice(n,1)}_hasPropertyEffect(t,e){let r=this[e];return Boolean(r&&r[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,D.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,D.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,D.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,D.COMPUTE)}_setPendingPropertyOrPath(t,e,r,o){if(o||s(Array.isArray(t)?t[0]:t)!==t){if(!o){let r=u(this,t);if(!(t=h(this,t,e))||!super._shouldPropertyChange(t,e,r))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,r))return function(t,e,r){let o=t.__dataLinkedPaths;if(o){let n;for(let i in o){let s=o[i];a(i,e)?(n=l(i,s,e),t._setPendingPropertyOrPath(n,r,!0,!0)):a(s,e)&&(n=l(s,i,e),t._setPendingPropertyOrPath(n,r,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,r);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,r){r===t[e]&&"object"!=typeof r||("className"===e&&(t=(0,o.r)(t)),t[e]=r)}_setPendingProperty(t,e,r){let o=this.__dataHasPaths&&i(t),n=o?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,n[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),o?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(o||this[D.NOTIFY]&&this[D.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=r),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let r=t[e];r.__dataEnabled?r.__dataPending&&r._flushProperties():r._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let r in t)!e&&this[D.READ_ONLY]&&this[D.READ_ONLY][r]||this._setPendingPropertyOrPath(r,t[r],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,r){let o,n=this.__dataHasPaths;this.__dataHasPaths=!1,function(t,e,r,o){let n=t[D.COMPUTE];if(n)if(R.ls){j++;const i=function(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const r=t[D.COMPUTE];let o,{counts:n,ready:i,total:s}=function(t){const e=t[$],r={},o=t[D.COMPUTE],n=[];let i=0;for(let t in e){const o=e[t];i+=r[t]=o.args.filter((t=>!t.literal)).length+(o.dynamicFn?1:0)}for(let t in o)e[t]||n.push(t);return{counts:r,ready:n,total:i}}(t);for(;o=i.shift();){e.set(o,e.size);const t=r[o];t&&t.forEach((t=>{const e=t.info.methodInfo;--s,0==--n[e]&&i.push(e)}))}if(0!==s){const e=t;M.warn(`Computed graph for ${e.localName} incomplete; circular?`)}t.constructor.__orderedComputedDeps=e}return e}(t),s=[];for(let t in e)Z(t,n,s,i,o);let a;for(;a=s.shift();)Q(t,"",e,0,a)&&Z(a.methodInfo,n,s,i,o);Object.assign(r,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let i=e;for(;F(t,n,i,r,o);)Object.assign(r,t.__dataOld),Object.assign(e,t.__dataPending),i=t.__dataPending,t.__dataPending=null}}(this,e,r,n),o=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(e,r,n),this._flushClients(),F(this,this[D.REFLECT],e,r,n),F(this,this[D.OBSERVE],e,r,n),o&&function(t,e,r,o,n){let i,s,a=t[D.NOTIFY],l=j++;for(let s in e)e[s]&&(a&&U(t,a,l,s,r,o,n)||n&&Y(t,s,r))&&(i=!0);i&&(s=t.__dataHost)&&s._invalidateProperties&&s._invalidateProperties()}(this,o,e,r,n),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,r){this[D.PROPAGATE]&&F(this,this[D.PROPAGATE],t,e,r),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,t,e,r)}_runEffectsForTemplate(t,e,r,o){const n=(e,o)=>{F(this,t.propertyEffects,e,r,o,t.nodeList);for(let n=t.firstChild;n;n=n.nextSibling)this._runEffectsForTemplate(n,e,r,o)};t.runEffects?t.runEffects(n,e,o):n(e,o)}linkPaths(t,e){t=c(t),e=c(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=c(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let r={path:""};ft(this,u(this,t,r),r.path,e)}get(t,e){return u(e||this,t)}set(t,e,r){r?h(r,t,e):this[D.READ_ONLY]&&this[D.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let r={path:""},o=u(this,t,r),n=o.length,i=o.push(...e);return e.length&&_t(this,o,r.path,n,e.length,[]),i}pop(t){let e={path:""},r=u(this,t,e),o=Boolean(r.length),n=r.pop();return o&&_t(this,r,e.path,r.length,0,[n]),n}splice(t,e,r,...o){let n,i={path:""},s=u(this,t,i);return e<0?e=s.length-Math.floor(-e):e&&(e=Math.floor(e)),n=2===arguments.length?s.splice(e):s.splice(e,r,...o),(o.length||n.length)&&_t(this,s,i.path,e,o.length,n),n}shift(t){let e={path:""},r=u(this,t,e),o=Boolean(r.length),n=r.shift();return o&&_t(this,r,e.path,0,0,[n]),n}unshift(t,...e){let r={path:""},o=u(this,t,r),n=o.unshift(...e);return e.length&&_t(this,o,r.path,0,e.length,[]),n}notifyPath(t,e){let r;if(1==arguments.length){let o={path:""};e=u(this,t,o),r=o.path}else r=Array.isArray(t)?c(t):t;this._setPendingPropertyOrPath(r,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var r;this._addPropertyEffect(t,D.READ_ONLY),e&&(this["_set"+(r=t,r[0].toUpperCase()+r.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,r){let o={property:t,method:e,dynamicFn:Boolean(r)};this._addPropertyEffect(t,D.OBSERVE,{fn:W,info:o,trigger:{name:t}}),r&&this._addPropertyEffect(e,D.OBSERVE,{fn:W,info:o,trigger:{name:e}})}_createMethodObserver(t,e){let r=ht(t);if(!r)throw new Error("Malformed observer expression '"+t+"'");it(this,r,D.OBSERVE,st,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,D.NOTIFY,{fn:K,info:{eventName:g(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?M.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,D.REFLECT,{fn:J,info:{attrName:e}})}_createComputedProperty(t,e,r){let o=ht(e);if(!o)throw new Error("Malformed computed expression '"+e+"'");const n=it(this,o,D.COMPUTE,Q,t,r);B(this,$)[t]=n}_marshalArgs(t,e,r){const o=this.__data,n=[];for(let i=0,s=t.length;i<s;i++){let{name:s,structured:l,wildcard:c,value:d,literal:h}=t[i];if(!h)if(c){const t=a(s,e),n=mt(o,r,t?e:s);d={path:t?e:s,value:n,base:t?u(o,s):n}}else d=l?mt(o,r,s):o[s];if(R.HY&&!this._overrideLegacyUndefined&&void 0===d&&t.length>1)return V;n[i]=d}return n}static addPropertyEffect(t,e,r){this.prototype._addPropertyEffect(t,e,r)}static createPropertyObserver(t,e,r){this.prototype._createPropertyObserver(t,e,r)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,r){this.prototype._createComputedProperty(t,e,r)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let r=this.constructor._parseTemplate(t),o=this.__preBoundTemplateInfo==r;if(!o)for(let t in r.propertyEffects)this._createPropertyAccessor(t);if(e)if(r=Object.create(r),r.wasPreBound=o,this.__templateInfo){const e=t._parentTemplateInfo||this.__templateInfo,o=e.lastChild;r.parent=e,e.lastChild=r,r.previousSibling=o,o?o.nextSibling=r:e.firstChild=r}else this.__templateInfo=r;else this.__preBoundTemplateInfo=r;return r}static _addTemplatePropertyEffect(t,e,r){(t.hostProps=t.hostProps||{})[e]=!0;let o=t.propertyEffects=t.propertyEffects||{};(o[e]=o[e]||[]).push(r)}_stampTemplate(t,e){e=e||this._bindTemplate(t,!0),vt.push(this);let r=super._stampTemplate(t,e);if(vt.pop(),e.nodeList=r.nodeList,!e.wasPreBound){let t=e.childNodes=[];for(let e=r.firstChild;e;e=e.nextSibling)t.push(e)}return r.templateInfo=e,function(t,e){let{nodeList:r,nodeInfoList:o}=e;if(o.length)for(let e=0;e<o.length;e++){let n=o[e],i=r[e],s=n.bindings;if(s)for(let e=0;e<s.length;e++){let r=s[e];ot(i,r),nt(i,t,r)}i.__dataHost=t}}(this,e),this.__dataClientsReady&&(this._runEffectsForTemplate(e,this.__data,null,!1),this._flushClients()),r}_removeBoundDom(t){const e=t.templateInfo,{previousSibling:r,nextSibling:n,parent:i}=e;r?r.nextSibling=n:i&&(i.firstChild=n),n?n.previousSibling=r:i&&(i.lastChild=r),e.nextSibling=e.previousSibling=null;let s=e.childNodes;for(let t=0;t<s.length;t++){let e=s[t];(0,o.r)((0,o.r)(e).parentNode).removeChild(e)}}static _parseTemplateNode(t,r,o){let n=e._parseTemplateNode.call(this,t,r,o);if(t.nodeType===Node.TEXT_NODE){let e=this._parseBindings(t.textContent,r);e&&(t.textContent=ut(e)||" ",tt(this,r,o,"text","textContent",e),n=!0)}return n}static _parseTemplateNodeAttribute(t,r,o,n,i){let s=this._parseBindings(i,r);if(s){let e=n,i="property";H.test(n)?i="attribute":"$"==n[n.length-1]&&(n=n.slice(0,-1),i="attribute");let a=ut(s);return a&&"attribute"==i&&("class"==n&&t.hasAttribute("class")&&(a+=" "+t.getAttribute(n)),t.setAttribute(n,a)),"attribute"==i&&"disable-upgrade$"==e&&t.setAttribute(n,""),"input"===t.localName&&"value"===e&&t.setAttribute(e,""),t.removeAttribute(e),"property"===i&&(n=_(n)),tt(this,r,o,i,n,s,a),!0}return e._parseTemplateNodeAttribute.call(this,t,r,o,n,i)}static _parseTemplateNestedTemplate(t,r,o){let n=e._parseTemplateNestedTemplate.call(this,t,r,o);const i=t.parentNode,s=o.templateInfo,a="dom-if"===i.localName,l="dom-repeat"===i.localName;R.gx&&(a||l)&&(i.removeChild(t),(o=o.parentInfo).templateInfo=s,o.noted=!0,n=!1);let c=s.hostProps;if(R.ew&&a)c&&(r.hostProps=Object.assign(r.hostProps||{},c),R.gx||(o.parentInfo.noted=!0));else{let t="{";for(let e in c)tt(this,r,o,"property","_host_"+e,[{mode:t,source:e,dependencies:[e],hostProp:!0}])}return n}static _parseBindings(t,e){let r,o=[],n=0;for(;null!==(r=dt.exec(t));){r.index>n&&o.push({literal:t.slice(n,r.index)});let i=r[1][0],s=Boolean(r[2]),a=r[3].trim(),l=!1,c="",d=-1;"{"==i&&(d=a.indexOf("::"))>0&&(c=a.substring(d+2),a=a.substring(0,d),l=!0);let u=ht(a),h=[];if(u){let{args:t,methodName:r}=u;for(let e=0;e<t.length;e++){let r=t[e];r.literal||h.push(r)}let o=e.dynamicFns;(o&&o[r]||u.static)&&(h.push(r),u.dynamicFn=!0)}else h.push(a);o.push({source:a,mode:i,negate:s,customEvent:l,signature:u,dependencies:h,event:c}),n=dt.lastIndex}if(n&&n<t.length){let e=t.substring(n);e&&o.push({literal:e})}return o.length?o:null}static _evaluateBinding(t,e,r,o,n,s){let a;return a=e.signature?st(t,r,o,0,e.signature):r!=e.source?u(t,e.source):s&&i(r)?u(t,r):t.__data[r],e.negate&&(a=!a),a}}})),vt=[]},2224:function(t,e,r){"use strict";r.d(e,{YA:function(){return c}}),r(7894);let o=0,n=0,i=[],s=0,a=!1,l=document.createTextNode("");new window.MutationObserver((function(){a=!1;const t=i.length;for(let e=0;e<t;e++){let t=i[e];if(t)try{t()}catch(t){setTimeout((()=>{throw t}))}}i.splice(0,t),n+=t})).observe(l,{characterData:!0});const c={run(t){return a||(a=!0,l.textContent=s++),i.push(t),o++},cancel(t){const e=t-n;if(e>=0){if(!i[e])throw new Error("invalid async handle: "+t);i[e]=null}}}},7894:function(){"use strict";window.JSCompiler_renameProperty=function(t,e){return t}},5557:function(t,e,r){"use strict";function o(t,e,r){return{index:t,removed:e,addedCount:r}}r.d(e,{o:function(){return h}}),r(7894);const n=0,i=1,s=2,a=3;function l(t,e){return t===e}var c=r(2224),d=r(1342);function u(t){return"slot"===t.localName}let h=class{static getFlattenedNodes(t){const e=(0,d.r)(t);return u(t)?e.assignedNodes({flatten:!0}):Array.from(e.childNodes).map((t=>u(t)?(0,d.r)(t).assignedNodes({flatten:!0}):[t])).reduce(((t,e)=>t.concat(e)),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){u(this._target)?this._listenSlots([this._target]):(0,d.r)(this._target).children&&(this._listenSlots((0,d.r)(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,(t=>{this._processMutations(t)})):(this._nativeChildrenObserver=new MutationObserver((t=>{this._processMutations(t)})),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){u(this._target)?this._unlistenSlots([this._target]):(0,d.r)(this._target).children&&(this._unlistenSlots((0,d.r)(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,c.YA.run((()=>this.flush())))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let r=t[e];r.addedNodes&&this._listenSlots(r.addedNodes),r.removedNodes&&this._unlistenSlots(r.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),r=(c=e,d=this._effectiveNodes,function(t,e,r,c,d,u){let h,p=0,m=0,f=Math.min(r-e,u-d);if(0==e&&0==d&&(p=function(t,e,r){for(let o=0;o<r;o++)if(!l(t[o],e[o]))return o;return r}(t,c,f)),r==t.length&&u==c.length&&(m=function(t,e,r){let o=t.length,n=e.length,i=0;for(;i<r&&l(t[--o],e[--n]);)i++;return i}(t,c,f-p)),d+=p,u-=m,(r-=m)-(e+=p)==0&&u-d==0)return[];if(e==r){for(h=o(e,[],0);d<u;)h.removed.push(c[d++]);return[h]}if(d==u)return[o(e,[],r-e)];let _=function(t){let e=t.length-1,r=t[0].length-1,o=t[e][r],l=[];for(;e>0||r>0;){if(0==e){l.push(s),r--;continue}if(0==r){l.push(a),e--;continue}let c,d=t[e-1][r-1],u=t[e-1][r],h=t[e][r-1];c=u<h?u<d?u:d:h<d?h:d,c==d?(d==o?l.push(n):(l.push(i),o=d),e--,r--):c==u?(l.push(a),e--,o=u):(l.push(s),r--,o=h)}return l.reverse(),l}(function(t,e,r,o,n,i){let s=i-n+1,a=r-e+1,c=new Array(s);for(let t=0;t<s;t++)c[t]=new Array(a),c[t][0]=t;for(let t=0;t<a;t++)c[0][t]=t;for(let r=1;r<s;r++)for(let i=1;i<a;i++)if(l(t[e+i-1],o[n+r-1]))c[r][i]=c[r-1][i-1];else{let t=c[r-1][i]+1,e=c[r][i-1]+1;c[r][i]=t<e?t:e}return c}(t,e,r,c,d,u));h=void 0;let g=[],v=e,y=d;for(let t=0;t<_.length;t++)switch(_[t]){case n:h&&(g.push(h),h=void 0),v++,y++;break;case i:h||(h=o(v,[],0)),h.addedCount++,v++,h.removed.push(c[y]),y++;break;case s:h||(h=o(v,[],0)),h.addedCount++,v++;break;case a:h||(h=o(v,[],0)),h.removed.push(c[y]),y++}return h&&g.push(h),g}(c,0,c.length,d,0,d.length));var c,d;for(let e,o=0;o<r.length&&(e=r[o]);o++)for(let r,o=0;o<e.removed.length&&(r=e.removed[o]);o++)t.removedNodes.push(r);for(let o,n=0;n<r.length&&(o=r[n]);n++)for(let r=o.index;r<o.index+o.addedCount;r++)t.addedNodes.push(e[r]);this._effectiveNodes=e;let u=!1;return(t.addedNodes.length||t.removedNodes.length)&&(u=!0,this.callback.call(this._target,t)),u}_listenSlots(t){for(let e=0;e<t.length;e++){let r=t[e];u(r)&&r.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let r=t[e];u(r)&&r.removeEventListener("slotchange",this._boundSchedule)}}}},1014:function(t,e,r){"use strict";r.d(e,{o:function(){return i}}),r(7894);let o=0;function n(){}n.prototype.__mixinApplications,n.prototype.__mixinSet;const i=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let r=o++;return function(o){let n=o.__mixinSet;if(n&&n[r])return o;let i=e,s=i.get(o);if(!s){s=t(o),i.set(o,s);let e=Object.create(s.__mixinSet||n||null);e[r]=!0,s.__mixinSet=e}return s}}},2223:function(t,e,r){"use strict";r.d(e,{T8:function(){return c},Zw:function(){return l}}),r(7894);let o=!1,n=[],i=[];function s(){o=!0,requestAnimationFrame((function(){o=!1,function(t){for(;t.length;)a(t.shift())}(n),setTimeout((function(){!function(t){for(let e=0,r=t.length;e<r;e++)a(t.shift())}(i)}))}))}function a(t){const e=t[0],r=t[1],o=t[2];try{r.apply(e,o)}catch(t){setTimeout((()=>{throw t}))}}function l(t,e,r){o||s(),n.push([t,e,r])}function c(t,e,r){o||s(),i.push([t,e,r])}},9967:function(t,e,r){"use strict";r.d(e,{Kk:function(){return a},Rq:function(){return l},iY:function(){return c}}),r(7894);let o,n,i=/(url\()([^)]*)(\))/g,s=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function a(t,e){if(t&&s.test(t))return t;if("//"===t)return t;if(void 0===o){o=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",o="http://a/c%20d"===t.href}catch(t){}}if(e||(e=document.baseURI||window.location.href),o)try{return new URL(t,e).href}catch(e){return t}return n||(n=document.implementation.createHTMLDocument("temp"),n.base=n.createElement("base"),n.head.appendChild(n.base),n.anchor=n.createElement("a"),n.body.appendChild(n.anchor)),n.base.href=e,n.anchor.href=t,n.anchor.href||t}function l(t,e){return t.replace(i,(function(t,r,o,n){return r+"'"+a(o.replace(/["']/g,""),e)+"'"+n}))}function c(t){return t.substring(0,t.lastIndexOf("/")+1)}},9387:function(t,e,r){"use strict";r.d(e,{FV:function(){return i},HY:function(){return p},Hr:function(){return h},XN:function(){return l},ZN:function(){return c},a2:function(){return u},ew:function(){return v},gx:function(){return g},ls:function(){return m},md:function(){return y},nL:function(){return d},sM:function(){return s},v1:function(){return a},xj:function(){return _}}),r(7894);var o=r(9967);const n=!window.ShadyDOM||!window.ShadyDOM.inUse,i=(Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback,n&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch(t){return!1}})());let s=window.Polymer&&window.Polymer.rootPath||(0,o.iY)(document.baseURI||window.location.href),a=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let l=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,c=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,d=window.Polymer&&window.Polymer.legacyOptimizations||!1,u=window.Polymer&&window.Polymer.legacyWarnings||!1,h=window.Polymer&&window.Polymer.syncInitialRender||!1,p=window.Polymer&&window.Polymer.legacyUndefined||!1,m=window.Polymer&&window.Polymer.orderedComputed||!1,f=!0;const _=function(t){f=t};let g=window.Polymer&&window.Polymer.removeNestedTemplates||!1,v=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications,window.Polymer&&window.Polymer.legacyNoObservedAttributes;let y=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1},1342:function(t,e,r){"use strict";r.d(e,{r:function(){return o}});const o=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t},1665:function(t,e,r){"use strict";r.d(e,{H3:function(){return R},dy:function(){return N}}),r(7894);var o=r(9387),n=r(1014),i=r(9967),s=r(5108);let a={},l={};function c(t,e){a[t]=l[t.toLowerCase()]=e}function d(t){return a[t]||l[t.toLowerCase()]}class u extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let r=d(t);return r&&e?r.querySelector(e):r}return null}attributeChangedCallback(t,e,r,o){e!==r&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=(0,i.Kk)(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=(0,i.iY)(e)}return this.__assetpath}register(t){if(t=t||this.id){if(o.XN&&void 0!==d(t))throw c(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,c(t,this),(e=this).querySelector("style")&&s.warn("dom-module %s has style outside template",e.id)}var e}}u.prototype.modules=a,customElements.define("dom-module",u);var h=r(5108);const p="link[rel=import][type~=css]",m="include",f="shady-unscoped";function _(t){return u.import(t)}function g(t){let e=t.body?t.body:t;const r=(0,i.Rq)(e.textContent,t.baseURI),o=document.createElement("style");return o.textContent=r,o}function v(t){const e=t.trim().split(/\s+/),r=[];for(let t=0;t<e.length;t++)r.push(...y(e[t]));return r}function y(t){const e=_(t);if(!e)return h.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...x(e));const r=e.querySelector("template");r&&t.push(...b(r,e.assetpath)),e._styles=t}return e._styles}function b(t,e){if(!t._styles){const r=[],o=t.content.querySelectorAll("style");for(let t=0;t<o.length;t++){let n=o[t],s=n.getAttribute(m);s&&r.push(...v(s).filter((function(t,e,r){return r.indexOf(t)===e}))),e&&(n.textContent=(0,i.Rq)(n.textContent,e)),r.push(n)}t._styles=r}return t._styles}function x(t){const e=[],r=t.querySelectorAll(p);for(let t=0;t<r.length;t++){let o=r[t];if(o.import){const t=o.import,r=o.hasAttribute(f);if(r&&!t._unscopedStyle){const e=g(t);e.setAttribute(f,""),t._unscopedStyle=e}else t._style||(t._style=g(t));e.push(r?t._unscopedStyle:t._style)}}return e}var w=r(3130);r(5108);const C=[];var A=r(7221);const E=(0,n.o)((t=>{const e=(0,A.e)(t);function r(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof n?e:null}function o(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const r=t.properties;r&&(e=function(t){const e={};for(let r in t){const o=t[r];e[r]="function"==typeof o?{type:o}:o}return e}(r))}t.__ownProperties=e}return t.__ownProperties}class n extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){t=this.prototype,C.push(t);const e=this._properties;this.__observedAttributes=e?Object.keys(e).map((t=>this.prototype._addPropertyToAttributeMap(t))):[]}var t;return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=r(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=o(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=r(this);this.__properties=Object.assign({},t&&t._properties,o(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n}));var S=r(1342),P=r(5108);const O=window.ShadyCSS&&window.ShadyCSS.cssBuild,I=(0,n.o)((t=>{const e=E((0,w.q)(t));return class extends e{static get polymerElementVersion(){return"3.5.1"}static _finalizeClass(){e._finalizeClass.call(this);const t=((r=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",r))||(r.__ownObservers=r.hasOwnProperty(JSCompiler_renameProperty("observers",r))?r.observers:null),r.__ownObservers);var r;t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){let t=this.template;t&&("string"==typeof t?(P.error("template getter must return HTMLTemplateElement"),t=null):o.nL||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(let i in t)e=this.prototype,r=i,n=t,(o=t[i]).computed&&(o.readOnly=!0),o.computed&&(e._hasReadOnlyEffect(r)?P.warn(`Cannot redefine computed property '${r}'.`):e._createComputedProperty(r,o.computed,n)),o.readOnly&&!e._hasReadOnlyEffect(r)?e._createReadOnlyProperty(r,!o.computed):!1===o.readOnly&&e._hasReadOnlyEffect(r)&&P.warn(`Cannot make readOnly property '${r}' non-readOnly.`),o.reflectToAttribute&&!e._hasReflectEffect(r)?e._createReflectedProperty(r):!1===o.reflectToAttribute&&e._hasReflectEffect(r)&&P.warn(`Cannot make reflected property '${r}' non-reflected.`),o.notify&&!e._hasNotifyEffect(r)?e._createNotifyingProperty(r):!1===o.notify&&e._hasNotifyEffect(r)&&P.warn(`Cannot make notify property '${r}' non-notify.`),o.observer&&e._createPropertyObserver(r,o.observer,n[o.observer]),e._addPropertyToAttributeMap(r);var e,r,o,n}static createObservers(t,e){const r=this.prototype;for(let o=0;o<t.length;o++)r._createMethodObserver(t[o],e)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let t=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;"function"==typeof t&&(t=t()),this._template=void 0!==t?t:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(t){let e=null;if(t&&(!o.XN||o.ZN)&&(e=u.import(t,"template"),o.XN&&!e))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${t}`);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=(0,i.iY)(t.url);else{const t=u.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=o.sM,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let r in e){let o=e[r];"value"in o&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[r]=o)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let r=t[e];if(this._canApplyPropertyDefault(e)){let t="function"==typeof r.value?r.value.call(this):r.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}_canApplyPropertyDefault(t){return!this.hasOwnProperty(t)}static _processStyleText(t,e){return(0,i.Rq)(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const r=this.importPath;(function(t,e,r,n){if(!O){const o=e.content.querySelectorAll("style"),i=b(e),s=function(t){let e=_(t);return e?x(e):[]}(r),a=e.content.firstElementChild;for(let r=0;r<s.length;r++){let o=s[r];o.textContent=t._processStyleText(o.textContent,n),e.content.insertBefore(o,a)}let l=0;for(let e=0;e<i.length;e++){let r=i[e],s=o[l];s!==r?(r=r.cloneNode(!0),s.parentNode.insertBefore(r,s)):l++,r.textContent=t._processStyleText(r.textContent,n)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,r),o.md&&O&&o.FV){const r=e.content.querySelectorAll("style");if(r){let e="";Array.from(r).forEach((t=>{e+=t.textContent,t.parentNode.removeChild(t)})),t._styleSheet=new CSSStyleSheet,t._styleSheet.replaceSync(e)}}})(this,e,t,r?(0,i.Kk)(r):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){const e=(0,S.r)(this);if(e.attachShadow)return t?(e.shadowRoot||(e.attachShadow({mode:"open",shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t),this.constructor._styleSheet&&(e.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),o.Hr&&window.ShadyDOM&&window.ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=(0,i.Kk)(this.importPath)),(0,i.Kk)(t,e)}static _parseTemplateContent(t,r,o){return r.dynamicFns=r.dynamicFns||this._properties,e._parseTemplateContent.call(this,t,r,o)}static _addTemplatePropertyEffect(t,r,n){return!o.a2||r in this._properties||n.info.part.signature&&n.info.part.signature.static||n.info.part.hostProp||t.nestedTemplate||P.warn(`Property '${r}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,t,r,n)}}})),T=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:t=>t});class k{constructor(t,e){L(t,e);const r=e.reduce(((e,r,o)=>e+z(r)+t[o+1]),t[0]);this.value=r.toString()}toString(){return this.value}}function z(t){if(t instanceof k)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}const N=function(t,...e){L(t,e);const r=document.createElement("template");let o=e.reduce(((e,r,o)=>e+function(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof k)return z(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}(r)+t[o+1]),t[0]);return T&&(o=T.createHTML(o)),r.innerHTML=o,r},L=(t,e)=>{if(!Array.isArray(t)||!Array.isArray(t.raw)||e.length!==t.length-1)throw new TypeError("Invalid call to the html template tag")},R=I(HTMLElement)},8219:function(t,e,r){"use strict";r.d(e,{F:function(){return at}});var o=r(5108);function n(t){return t=t||[],Array.isArray(t)?t:[t]}function i(t){return`[Vaadin.Router] ${t}`}const s="module",a="nomodule",l=[s,a];function c(t){if(!t.match(/.+\.[m]?js$/))throw new Error(i(`Unsupported type for bundle "${t}": .js or .mjs expected.`))}function d(t){if(!t||!_(t.path))throw new Error(i('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=t.bundle,r=["component","redirect","bundle"];if(!(f(t.action)||Array.isArray(t.children)||f(t.children)||m(e)||r.some((e=>_(t[e])))))throw new Error(i(`Expected route config "${t.path}" to include either "${r.join('", "')}" or "action" function but none found.`));if(e)if(_(e))c(e);else{if(!l.some((t=>t in e)))throw new Error(i('Expected route bundle to include either "'+a+'" or "'+s+'" keys, or both'));l.forEach((t=>t in e&&c(e[t])))}t.redirect&&["bundle","component"].forEach((e=>{e in t&&o.warn(i(`Route config "${t.path}" has both "redirect" and "${e}" properties, and "redirect" will always override the latter. Did you mean to only use "${e}"?`))}))}function u(t){n(t).forEach((t=>d(t)))}function h(t,e){let r=document.head.querySelector('script[src="'+t+'"][async]');return r||(r=document.createElement("script"),r.setAttribute("src",t),e===s?r.setAttribute("type",s):e===a&&r.setAttribute(a,""),r.async=!0),new Promise(((t,e)=>{r.onreadystatechange=r.onload=e=>{r.__dynamicImportLoaded=!0,t(e)},r.onerror=t=>{r.parentNode&&r.parentNode.removeChild(r),e(t)},null===r.parentNode?document.head.appendChild(r):r.__dynamicImportLoaded&&t()}))}function p(t,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${t}`,{cancelable:"go"===t,detail:e}))}function m(t){return"object"==typeof t&&!!t}function f(t){return"function"==typeof t}function _(t){return"string"==typeof t}function g(t){const e=new Error(i(`Page not found (${t.pathname})`));return e.context=t,e.code=404,e}const v=new class{};function y(t){if(t.defaultPrevented)return;if(0!==t.button)return;if(t.shiftKey||t.ctrlKey||t.altKey||t.metaKey)return;let e=t.target;const r=t.composedPath?t.composedPath():t.path||[];for(let t=0;t<r.length;t++){const o=r[t];if(o.nodeName&&"a"===o.nodeName.toLowerCase()){e=o;break}}for(;e&&"a"!==e.nodeName.toLowerCase();)e=e.parentNode;if(!e||"a"!==e.nodeName.toLowerCase())return;if(e.target&&"_self"!==e.target.toLowerCase())return;if(e.hasAttribute("download"))return;if(e.hasAttribute("router-ignore"))return;if(e.pathname===window.location.pathname&&""!==e.hash)return;const o=e.origin||function(t){const e=t.port,r=t.protocol;return`${r}//${"http:"===r&&"80"===e||"https:"===r&&"443"===e?t.hostname:t.host}`}(e);if(o!==window.location.origin)return;const{pathname:n,search:i,hash:s}=e;p("go",{pathname:n,search:i,hash:s})&&(t.preventDefault(),t&&"click"===t.type&&window.scrollTo(0,0))}const b={activate(){window.document.addEventListener("click",y)},inactivate(){window.document.removeEventListener("click",y)}};function x(t){if("vaadin-router-ignore"===t.state)return;const{pathname:e,search:r,hash:o}=window.location;p("go",{pathname:e,search:r,hash:o})}/Trident/.test(navigator.userAgent)&&!f(window.PopStateEvent)&&(window.PopStateEvent=function(t,e){e=e||{};var r=document.createEvent("Event");return r.initEvent(t,Boolean(e.bubbles),Boolean(e.cancelable)),r.state=e.state||null,r},window.PopStateEvent.prototype=window.Event.prototype);const w={activate(){window.addEventListener("popstate",x)},inactivate(){window.removeEventListener("popstate",x)}};var C=function t(e,r,o){return e instanceof RegExp?function(t,e){if(!e)return t;var r=t.source.match(/\((?!\?)/g);if(r)for(var o=0;o<r.length;o++)e.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return t}(e,r):Array.isArray(e)?function(e,r,o){for(var n=[],i=0;i<e.length;i++)n.push(t(e[i],r,o).source);return new RegExp("(?:"+n.join("|")+")",L(o))}(e,r,o):function(t,e,r){return R(T(t,r),e,r)}(e,r,o)},A=T,E=k,S=R,P="/",O="./",I=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function T(t,e){for(var r,o=[],n=0,i=0,s="",a=e&&e.delimiter||P,l=e&&e.delimiters||O,c=!1;null!==(r=I.exec(t));){var d=r[0],u=r[1],h=r.index;if(s+=t.slice(i,h),i=h+d.length,u)s+=u[1],c=!0;else{var p="",m=t[i],f=r[2],_=r[3],g=r[4],v=r[5];if(!c&&s.length){var y=s.length-1;l.indexOf(s[y])>-1&&(p=s[y],s=s.slice(0,y))}s&&(o.push(s),s="",c=!1);var b=""!==p&&void 0!==m&&m!==p,x="+"===v||"*"===v,w="?"===v||"*"===v,C=p||a,A=_||g;o.push({name:f||n++,prefix:p,delimiter:C,optional:w,repeat:x,partial:b,pattern:A?N(A):"[^"+z(C)+"]+?"})}}return(s||i<t.length)&&o.push(s+t.substr(i)),o}function k(t){for(var e=new Array(t.length),r=0;r<t.length;r++)"object"==typeof t[r]&&(e[r]=new RegExp("^(?:"+t[r].pattern+")$"));return function(r,o){for(var n="",i=o&&o.encode||encodeURIComponent,s=0;s<t.length;s++){var a=t[s];if("string"!=typeof a){var l,c=r?r[a.name]:void 0;if(Array.isArray(c)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(0===c.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var d=0;d<c.length;d++){if(l=i(c[d],a),!e[s].test(l))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');n+=(0===d?a.prefix:a.delimiter)+l}}else if("string"!=typeof c&&"number"!=typeof c&&"boolean"!=typeof c){if(!a.optional)throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"));a.partial&&(n+=a.prefix)}else{if(l=i(String(c),a),!e[s].test(l))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+l+'"');n+=a.prefix+l}}else n+=a}return n}}function z(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function N(t){return t.replace(/([=!:$/()])/g,"\\$1")}function L(t){return t&&t.sensitive?"":"i"}function R(t,e,r){for(var o=(r=r||{}).strict,n=!1!==r.start,i=!1!==r.end,s=z(r.delimiter||P),a=r.delimiters||O,l=[].concat(r.endsWith||[]).map(z).concat("$").join("|"),c=n?"^":"",d=0===t.length,u=0;u<t.length;u++){var h=t[u];if("string"==typeof h)c+=z(h),d=u===t.length-1&&a.indexOf(h[h.length-1])>-1;else{var p=h.repeat?"(?:"+h.pattern+")(?:"+z(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;e&&e.push(h),h.optional?h.partial?c+=z(h.prefix)+"("+p+")?":c+="(?:"+z(h.prefix)+"("+p+"))?":c+=z(h.prefix)+"("+p+")"}}return i?(o||(c+="(?:"+s+")?"),c+="$"===l?"$":"(?="+l+")"):(o||(c+="(?:"+s+"(?="+l+"))?"),d||(c+="(?="+s+"|"+l+")")),new RegExp(c,L(r))}C.parse=A,C.compile=function(t,e){return k(T(t,e))},C.tokensToFunction=E,C.tokensToRegExp=S;const{hasOwnProperty:M}=Object.prototype,j=new Map;function V(t){try{return decodeURIComponent(t)}catch(e){return t}}function D(t,e,r,o,n){let i,s,a=0,l=t.path||"";return"/"===l.charAt(0)&&(r&&(l=l.substr(1)),r=!0),{next(c){if(t===c)return{done:!0};const d=t.__children=t.__children||t.children;if(!i&&(i=function(t,e,r,o,n){const i=`${t}|${r=!!r}`;let s=j.get(i);if(!s){const e=[];s={keys:e,pattern:C(t,e,{end:r,strict:""===t})},j.set(i,s)}const a=s.pattern.exec(e);if(!a)return null;const l=Object.assign({},n);for(let t=1;t<a.length;t++){const e=s.keys[t-1],r=e.name,o=a[t];void 0===o&&M.call(l,r)||(e.repeat?l[r]=o?o.split(e.delimiter).map(V):[]:l[r]=o?V(o):o)}return{path:a[0],keys:(o||[]).concat(s.keys),params:l}}(l,e,!d,o,n),i))return{done:!1,value:{route:t,keys:i.keys,params:i.params,path:i.path}};if(i&&d)for(;a<d.length;){if(!s){const o=d[a];o.parent=t;let n=i.path.length;n>0&&"/"===e.charAt(n)&&(n+=1),s=D(o,e.substr(n),r,i.keys,i.params)}const o=s.next(c);if(!o.done)return{done:!1,value:o.value};s=null,a++}return{done:!0}}}}function $(t){if(f(t.route.action))return t.route.action(t)}j.set("|false",{keys:[],pattern:/(?:)/});class H{constructor(t,e={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=e.baseUrl||"",this.errorHandler=e.errorHandler,this.resolveRoute=e.resolveRoute||$,this.context=Object.assign({resolver:this},e.context),this.root=Array.isArray(t)?{path:"",__children:t,parent:null,__synthetic:!0}:t,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(t){u(t);const e=[...n(t)];this.root.__children=e}addRoutes(t){return u(t),this.root.__children.push(...n(t)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(t){const e=Object.assign({},this.context,_(t)?{pathname:t}:t),r=D(this.root,this.__normalizePathname(e.pathname),this.baseUrl),n=this.resolveRoute;let i=null,s=null,a=e;function l(t,o=i.value.route,c){const d=null===c&&i.value.route;return i=s||r.next(d),s=null,t||!i.done&&function(t,e){let r=e;for(;r;)if(r=r.parent,r===t)return!0;return!1}(o,i.value.route)?i.done?Promise.reject(g(e)):(a=Object.assign(a?{chain:a.chain?a.chain.slice(0):[]}:{},e,i.value),function(t,e){const{route:r,path:o}=e;if(r&&!r.__synthetic){const e={path:o,route:r};if(t.chain){if(r.parent){let e=t.chain.length;for(;e--&&t.chain[e].route&&t.chain[e].route!==r.parent;)t.chain.pop()}}else t.chain=[];t.chain.push(e)}}(a,i.value),Promise.resolve(n(a)).then((e=>null!=e&&e!==v?(a.result=e.result||e,a):l(t,o,e)))):(s=i,Promise.resolve(v))}return e.next=l,Promise.resolve().then((()=>l(!0,this.root))).catch((t=>{const e=function(t){let e=`Path '${t.pathname}' is not properly resolved due to an error.`;const r=(t.route||{}).path;return r&&(e+=` Resolution had failed on route: '${r}'`),e}(a);if(t?o.warn(e):t=new Error(e),t.context=t.context||a,t instanceof DOMException||(t.code=t.code||500),this.errorHandler)return a.result=this.errorHandler(t),a;throw t}))}static __createUrl(t,e){return new URL(t,e)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(t){if(!this.baseUrl)return t;const e=this.__effectiveBaseUrl,r=this.constructor.__createUrl(t,e).href;return r.slice(0,e.length)===e?r.slice(e.length):void 0}}H.pathToRegexp=C;const{pathToRegexp:B}=H,F=new Map;function U(t,e,r){const o=e.name||e.component;if(o&&(t.has(o)?t.get(o).push(e):t.set(o,[e])),Array.isArray(r))for(let o=0;o<r.length;o++){const n=r[o];n.parent=e,U(t,n,n.__children||n.children)}}function q(t,e){const r=t.get(e);if(r&&r.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return r&&r[0]}function W(t){let e=t.path;return e=Array.isArray(e)?e[0]:e,void 0!==e?e:""}function Y(t,e={}){if(!(t instanceof H))throw new TypeError("An instance of Resolver is expected");const r=new Map;return(o,n)=>{let i=q(r,o);if(!i&&(r.clear(),U(r,t.root,t.root.__children),i=q(r,o),!i))throw new Error(`Route "${o}" not found`);let s=F.get(i.fullPath);if(!s){let t=W(i),e=i.parent;for(;e;){const r=W(e);r&&(t=r.replace(/\/$/,"")+"/"+t.replace(/^\//,"")),e=e.parent}const r=B.parse(t),o=B.tokensToFunction(r),n=Object.create(null);for(let t=0;t<r.length;t++)_(r[t])||(n[r[t].name]=!0);s={toPath:o,keys:n},F.set(t,s),i.fullPath=t}let a=s.toPath(n,e)||"/";if(e.stringifyQueryParams&&n){const t={},r=Object.keys(n);for(let e=0;e<r.length;e++){const o=r[e];s.keys[o]||(t[o]=n[o])}const o=e.stringifyQueryParams(t);o&&(a+="?"===o.charAt(0)?o:`?${o}`)}return a}}let G=[];function K(t){G.forEach((t=>t.inactivate())),t.forEach((t=>t.activate())),G=t}const J=t=>{const e=getComputedStyle(t).getPropertyValue("animation-name");return e&&"none"!==e},X=(t,e)=>{const r=()=>{t.removeEventListener("animationend",r),e()};t.addEventListener("animationend",r)};function Z(t,e){return t.classList.add(e),new Promise((r=>{if(J(t)){const o=t.getBoundingClientRect(),n=`height: ${o.bottom-o.top}px; width: ${o.right-o.left}px`;t.setAttribute("style",`position: absolute; ${n}`),X(t,(()=>{t.classList.remove(e),t.removeAttribute("style"),r()}))}else t.classList.remove(e),r()}))}function Q(t){return null!=t}function tt({pathname:t="",search:e="",hash:r="",chain:o=[],params:n={},redirectFrom:i,resolver:s},a){const l=o.map((t=>t.route));return{baseUrl:s&&s.baseUrl||"",pathname:t,search:e,hash:r,routes:l,route:a||l.length&&l[l.length-1]||null,params:n,redirectFrom:i,getUrl:(t={})=>it(at.pathToRegexp.compile(st(l))(Object.assign({},n,t)),s)}}function et(t,e){const r=Object.assign({},t.params);return{redirect:{pathname:e,from:t.pathname,params:r}}}function rt(t,e,r){if(f(t))return t.apply(r,e)}function ot(t,e,r){return o=>o&&(o.cancel||o.redirect)?o:r?rt(r[t],e,r):void 0}function nt(t){if(t&&t.length){const e=t[0].parentNode;for(let r=0;r<t.length;r++)e.removeChild(t[r])}}function it(t,e){const r=e.__effectiveBaseUrl;return r?e.constructor.__createUrl(t.replace(/^\//,""),r).pathname:t}function st(t){return t.map((t=>t.path)).reduce(((t,e)=>e.length?t.replace(/\/$/,"")+"/"+e.replace(/^\//,""):t),"")}class at extends H{constructor(t,e){const r=document.head.querySelector("base"),o=r&&r.getAttribute("href");super([],Object.assign({baseUrl:o&&H.__createUrl(o,document.URL).pathname.replace(/[^\/]*$/,"")},e)),this.resolveRoute=t=>this.__resolveRoute(t);const n=at.NavigationTrigger;at.setTriggers.apply(at,Object.keys(n).map((t=>n[t]))),this.baseUrl,this.ready,this.ready=Promise.resolve(t),this.location,this.location=tt({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(t),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(t){const e=t.route;let r=Promise.resolve();f(e.children)&&(r=r.then((()=>e.children(function(t){const e=Object.assign({},t);return delete e.next,e}(t)))).then((t=>{Q(t)||f(e.children)||(t=e.children),function(t,e){if(!Array.isArray(t)&&!m(t))throw new Error(i(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${t}`));e.__children=[];const r=n(t);for(let t=0;t<r.length;t++)d(r[t]),e.__children.push(r[t])}(t,e)})));const o={redirect:e=>et(t,e),component:t=>{const e=document.createElement(t);return this.__createdByRouter.set(e,!0),e}};return r.then((()=>{if(this.__isLatestRender(t))return rt(e.action,[t,o],e)})).then((t=>{return Q(t)&&(t instanceof HTMLElement||t.redirect||t===v)?t:_(e.redirect)?o.redirect(e.redirect):e.bundle?(r=e.bundle,_(r)?h(r):Promise.race(l.filter((t=>t in r)).map((t=>h(r[t],t))))).then((()=>{}),(()=>{throw new Error(i(`Bundle not found: ${e.bundle}. Check if the file name is correct`))})):void 0;var r})).then((t=>Q(t)?t:_(e.component)?o.component(e.component):void 0))}setOutlet(t){t&&this.__ensureOutlet(t),this.__outlet=t}getOutlet(){return this.__outlet}setRoutes(t,e=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(t),e||this.__onNavigationEvent(),this.ready}render(t,e){const r=++this.__lastStartedRenderId,o=Object.assign({search:"",hash:""},_(t)?{pathname:t}:t,{__renderId:r});return this.ready=this.resolve(o).then((t=>this.__fullyResolveChain(t))).then((t=>{if(this.__isLatestRender(t)){const o=this.__previousContext;if(t===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=tt(t),e&&this.__updateBrowserHistory(t,1===r),p("location-changed",{router:this,location:this.location}),t.__skipAttach)return this.__copyUnchangedElements(t,o),this.__previousContext=t,this.location;this.__addAppearingContent(t,o);const n=this.__animateIfNeeded(t);return this.__runOnAfterEnterCallbacks(t),this.__runOnAfterLeaveCallbacks(t,o),n.then((()=>{if(this.__isLatestRender(t))return this.__removeDisappearingContent(),this.__previousContext=t,this.location}))}})).catch((t=>{if(r===this.__lastStartedRenderId)throw e&&this.__updateBrowserHistory(o),nt(this.__outlet&&this.__outlet.children),this.location=tt(Object.assign(o,{resolver:this})),p("error",Object.assign({router:this,error:t},o)),t})),this.ready}__fullyResolveChain(t,e=t){return this.__findComponentContextAfterAllRedirects(e).then((r=>{const o=r!==e?r:t,n=it(st(r.chain),r.resolver)===r.pathname,i=(t,e=t.route,r)=>t.next(void 0,e,r).then((r=>null===r||r===v?n?t:null!==e.parent?i(t,e.parent,r):r:r));return i(r).then((t=>{if(null===t||t===v)throw g(o);return t&&t!==v&&t!==r?this.__fullyResolveChain(o,t):this.__amendWithOnBeforeCallbacks(r)}))}))}__findComponentContextAfterAllRedirects(t){const e=t.result;return e instanceof HTMLElement?(function(t,e){e.location=tt(t);const r=t.chain.map((t=>t.route)).indexOf(t.route);t.chain[r].element=e}(t,e),Promise.resolve(t)):e.redirect?this.__redirect(e.redirect,t.__redirectCount,t.__renderId).then((t=>this.__findComponentContextAfterAllRedirects(t))):e instanceof Error?Promise.reject(e):Promise.reject(new Error(i(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${function(t){if("object"!=typeof t)return String(t);const e=Object.prototype.toString.call(t).match(/ (.*)\]$/)[1];return"Object"===e||"Array"===e?`${e} ${JSON.stringify(t)}`:e}(e)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(t){return this.__runOnBeforeCallbacks(t).then((e=>e===this.__previousContext||e===t?e:this.__fullyResolveChain(e)))}__runOnBeforeCallbacks(t){const e=this.__previousContext||{},r=e.chain||[],o=t.chain;let n=Promise.resolve();const i=()=>({cancel:!0}),s=e=>et(t,e);if(t.__divergedChainIndex=0,t.__skipAttach=!1,r.length){for(let e=0;e<Math.min(r.length,o.length)&&r[e].route===o[e].route&&(r[e].path===o[e].path||r[e].element===o[e].element)&&this.__isReusableElement(r[e].element,o[e].element);e=++t.__divergedChainIndex);if(t.__skipAttach=o.length===r.length&&t.__divergedChainIndex==o.length&&this.__isReusableElement(t.result,e.result),t.__skipAttach){for(let e=o.length-1;e>=0;e--)n=this.__runOnBeforeLeaveCallbacks(n,t,{prevent:i},r[e]);for(let e=0;e<o.length;e++)n=this.__runOnBeforeEnterCallbacks(n,t,{prevent:i,redirect:s},o[e]),r[e].element.location=tt(t,r[e].route)}else for(let e=r.length-1;e>=t.__divergedChainIndex;e--)n=this.__runOnBeforeLeaveCallbacks(n,t,{prevent:i},r[e])}if(!t.__skipAttach)for(let e=0;e<o.length;e++)e<t.__divergedChainIndex?e<r.length&&r[e].element&&(r[e].element.location=tt(t,r[e].route)):(n=this.__runOnBeforeEnterCallbacks(n,t,{prevent:i,redirect:s},o[e]),o[e].element&&(o[e].element.location=tt(t,o[e].route)));return n.then((e=>{if(e){if(e.cancel)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if(e.redirect)return this.__redirect(e.redirect,t.__redirectCount,t.__renderId)}return t}))}__runOnBeforeLeaveCallbacks(t,e,r,o){const n=tt(e);return t.then((t=>{if(this.__isLatestRender(e))return ot("onBeforeLeave",[n,r,this],o.element)(t)})).then((t=>{if(!(t||{}).redirect)return t}))}__runOnBeforeEnterCallbacks(t,e,r,o){const n=tt(e,o.route);return t.then((t=>{if(this.__isLatestRender(e))return ot("onBeforeEnter",[n,r,this],o.element)(t)}))}__isReusableElement(t,e){return!(!t||!e)&&(this.__createdByRouter.get(t)&&this.__createdByRouter.get(e)?t.localName===e.localName:t===e)}__isLatestRender(t){return t.__renderId===this.__lastStartedRenderId}__redirect(t,e,r){if(e>256)throw new Error(i(`Too many redirects when rendering ${t.from}`));return this.resolve({pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:(e||0)+1,__renderId:r})}__ensureOutlet(t=this.__outlet){if(!(t instanceof Node))throw new TypeError(i(`Expected router outlet to be a valid DOM Node (but got ${t})`))}__updateBrowserHistory({pathname:t,search:e="",hash:r=""},o){if(window.location.pathname!==t||window.location.search!==e||window.location.hash!==r){const n=o?"replaceState":"pushState";window.history[n](null,document.title,t+e+r),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(t,e){let r=this.__outlet;for(let o=0;o<t.__divergedChainIndex;o++){const n=e&&e.chain[o].element;if(n){if(n.parentNode!==r)break;t.chain[o].element=n,r=n}}return r}__addAppearingContent(t,e){this.__ensureOutlet(),this.__removeAppearingContent();const r=this.__copyUnchangedElements(t,e);this.__appearingContent=[],this.__disappearingContent=Array.from(r.children).filter((e=>this.__addedByRouter.get(e)&&e!==t.result));let o=r;for(let e=t.__divergedChainIndex;e<t.chain.length;e++){const n=t.chain[e].element;n&&(o.appendChild(n),this.__addedByRouter.set(n,!0),o===r&&this.__appearingContent.push(n),o=n)}}__removeDisappearingContent(){this.__disappearingContent&&nt(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(nt(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(t,e){if(e)for(let r=e.chain.length-1;r>=t.__divergedChainIndex&&this.__isLatestRender(t);r--){const o=e.chain[r].element;if(o)try{const r=tt(t);rt(o.onAfterLeave,[r,{},e.resolver],o)}finally{this.__disappearingContent.indexOf(o)>-1&&nt(o.children)}}}__runOnAfterEnterCallbacks(t){for(let e=t.__divergedChainIndex;e<t.chain.length&&this.__isLatestRender(t);e++){const r=t.chain[e].element||{},o=tt(t,t.chain[e].route);rt(r.onAfterEnter,[o,{},t.resolver],r)}}__animateIfNeeded(t){const e=(this.__disappearingContent||[])[0],r=(this.__appearingContent||[])[0],o=[],n=t.chain;let i;for(let t=n.length;t>0;t--)if(n[t-1].route.animate){i=n[t-1].route.animate;break}if(e&&r&&i){const t=m(i)&&i.leave||"leaving",n=m(i)&&i.enter||"entering";o.push(Z(e,t)),o.push(Z(r,n))}return Promise.all(o).then((()=>t))}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(t){const{pathname:e,search:r,hash:o}=t?t.detail:window.location;_(this.__normalizePathname(e))&&(t&&t.preventDefault&&t.preventDefault(),this.render({pathname:e,search:r,hash:o},!0))}static setTriggers(...t){K(t)}urlForName(t,e){return this.__urlForName||(this.__urlForName=Y(this)),it(this.__urlForName(t,e),this)}urlForPath(t,e){return it(at.pathToRegexp.compile(t)(e),this)}static go(t){const{pathname:e,search:r,hash:o}=_(t)?this.__createUrl(t,"http://a"):t;return p("go",{pathname:e,search:r,hash:o})}}const lt=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ct=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function dt(t,e){if("function"!=typeof t)return;const r=lt.exec(t.toString());if(r)try{t=new Function(r[1])}catch(t){o.log("vaadin-development-mode-detector: uncommentAndRun() failed",t)}return t(e)}window.Vaadin=window.Vaadin||{};void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(ct?!(ct&&Object.keys(ct).map((t=>ct[t])).filter((t=>t.productionMode)).length>0):!dt((function(){return!0})))}catch(t){return!1}}()),window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"}),function(t,e){if(window.Vaadin.developmentMode)dt(t,e)}((function(){})),at.NavigationTrigger={POPSTATE:w,CLICK:b}},9282:function(t,e,r){"use strict";var o=r(4155),n=r(5108);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}var s,a,l=r(2136).codes,c=l.ERR_AMBIGUOUS_ARGUMENT,d=l.ERR_INVALID_ARG_TYPE,u=l.ERR_INVALID_ARG_VALUE,h=l.ERR_INVALID_RETURN_VALUE,p=l.ERR_MISSING_ARGS,m=r(5961),f=r(9539).inspect,_=r(9539).types,g=_.isPromise,v=_.isRegExp,y=Object.assign?Object.assign:r(8091).assign,b=Object.is?Object.is:r(609);function x(){var t=r(9158);s=t.isDeepEqual,a=t.isDeepStrictEqual}new Map;var w=!1,C=t.exports=P,A={};function E(t){if(t.message instanceof Error)throw t.message;throw new m(t)}function S(t,e,r,o){if(!r){var n=!1;if(0===e)n=!0,o="No value argument passed to `assert.ok()`";else if(o instanceof Error)throw o;var i=new m({actual:r,expected:!0,message:o,operator:"==",stackStartFn:t});throw i.generatedMessage=n,i}}function P(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];S.apply(void 0,[P,e.length].concat(e))}C.fail=function t(e,r,i,s,a){var l,c=arguments.length;if(0===c?l="Failed":1===c?(i=e,e=void 0):(!1===w&&(w=!0,(o.emitWarning?o.emitWarning:n.warn.bind(n))("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.","DeprecationWarning","DEP0094")),2===c&&(s="!=")),i instanceof Error)throw i;var d={actual:e,expected:r,operator:void 0===s?"fail":s,stackStartFn:a||t};void 0!==i&&(d.message=i);var u=new m(d);throw l&&(u.message=l,u.generatedMessage=!0),u},C.AssertionError=m,C.ok=P,C.equal=function t(e,r,o){if(arguments.length<2)throw new p("actual","expected");e!=r&&E({actual:e,expected:r,message:o,operator:"==",stackStartFn:t})},C.notEqual=function t(e,r,o){if(arguments.length<2)throw new p("actual","expected");e==r&&E({actual:e,expected:r,message:o,operator:"!=",stackStartFn:t})},C.deepEqual=function t(e,r,o){if(arguments.length<2)throw new p("actual","expected");void 0===s&&x(),s(e,r)||E({actual:e,expected:r,message:o,operator:"deepEqual",stackStartFn:t})},C.notDeepEqual=function t(e,r,o){if(arguments.length<2)throw new p("actual","expected");void 0===s&&x(),s(e,r)&&E({actual:e,expected:r,message:o,operator:"notDeepEqual",stackStartFn:t})},C.deepStrictEqual=function t(e,r,o){if(arguments.length<2)throw new p("actual","expected");void 0===s&&x(),a(e,r)||E({actual:e,expected:r,message:o,operator:"deepStrictEqual",stackStartFn:t})},C.notDeepStrictEqual=function t(e,r,o){if(arguments.length<2)throw new p("actual","expected");void 0===s&&x(),a(e,r)&&E({actual:e,expected:r,message:o,operator:"notDeepStrictEqual",stackStartFn:t})},C.strictEqual=function t(e,r,o){if(arguments.length<2)throw new p("actual","expected");b(e,r)||E({actual:e,expected:r,message:o,operator:"strictEqual",stackStartFn:t})},C.notStrictEqual=function t(e,r,o){if(arguments.length<2)throw new p("actual","expected");b(e,r)&&E({actual:e,expected:r,message:o,operator:"notStrictEqual",stackStartFn:t})};var O=function t(e,r,o){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r.forEach((function(t){t in e&&(void 0!==o&&"string"==typeof o[t]&&v(e[t])&&e[t].test(o[t])?n[t]=o[t]:n[t]=e[t])}))};function I(t,e,r,o){if("function"!=typeof e){if(v(e))return e.test(t);if(2===arguments.length)throw new d("expected",["Function","RegExp"],e);if("object"!==i(t)||null===t){var n=new m({actual:t,expected:e,message:r,operator:"deepStrictEqual",stackStartFn:o});throw n.operator=o.name,n}var l=Object.keys(e);if(e instanceof Error)l.push("name","message");else if(0===l.length)throw new u("error",e,"may not be an empty object");return void 0===s&&x(),l.forEach((function(n){"string"==typeof t[n]&&v(e[n])&&e[n].test(t[n])||function(t,e,r,o,n,i){if(!(r in t)||!a(t[r],e[r])){if(!o){var s=new O(t,n),l=new O(e,n,t),c=new m({actual:s,expected:l,operator:"deepStrictEqual",stackStartFn:i});throw c.actual=t,c.expected=e,c.operator=i.name,c}E({actual:t,expected:e,message:o,operator:i.name,stackStartFn:i})}}(t,e,n,r,l,o)})),!0}return void 0!==e.prototype&&t instanceof e||!Error.isPrototypeOf(e)&&!0===e.call({},t)}function T(t){if("function"!=typeof t)throw new d("fn","Function",t);try{t()}catch(t){return t}return A}function k(t){return g(t)||null!==t&&"object"===i(t)&&"function"==typeof t.then&&"function"==typeof t.catch}function z(t){return Promise.resolve().then((function(){var e;if("function"==typeof t){if(!k(e=t()))throw new h("instance of Promise","promiseFn",e)}else{if(!k(t))throw new d("promiseFn",["Function","Promise"],t);e=t}return Promise.resolve().then((function(){return e})).then((function(){return A})).catch((function(t){return t}))}))}function N(t,e,r,o){if("string"==typeof r){if(4===arguments.length)throw new d("error",["Object","Error","Function","RegExp"],r);if("object"===i(e)&&null!==e){if(e.message===r)throw new c("error/message",'The error message "'.concat(e.message,'" is identical to the message.'))}else if(e===r)throw new c("error/message",'The error "'.concat(e,'" is identical to the message.'));o=r,r=void 0}else if(null!=r&&"object"!==i(r)&&"function"!=typeof r)throw new d("error",["Object","Error","Function","RegExp"],r);if(e===A){var n="";r&&r.name&&(n+=" (".concat(r.name,")")),n+=o?": ".concat(o):".";var s="rejects"===t.name?"rejection":"exception";E({actual:void 0,expected:r,operator:t.name,message:"Missing expected ".concat(s).concat(n),stackStartFn:t})}if(r&&!I(e,r,o,t))throw e}function L(t,e,r,o){if(e!==A){if("string"==typeof r&&(o=r,r=void 0),!r||I(e,r)){var n=o?": ".concat(o):".",i="doesNotReject"===t.name?"rejection":"exception";E({actual:e,expected:r,operator:t.name,message:"Got unwanted ".concat(i).concat(n,"\n")+'Actual message: "'.concat(e&&e.message,'"'),stackStartFn:t})}throw e}}function R(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];S.apply(void 0,[R,e.length].concat(e))}C.throws=function t(e){for(var r=arguments.length,o=new Array(r>1?r-1:0),n=1;n<r;n++)o[n-1]=arguments[n];N.apply(void 0,[t,T(e)].concat(o))},C.rejects=function t(e){for(var r=arguments.length,o=new Array(r>1?r-1:0),n=1;n<r;n++)o[n-1]=arguments[n];return z(e).then((function(e){return N.apply(void 0,[t,e].concat(o))}))},C.doesNotThrow=function t(e){for(var r=arguments.length,o=new Array(r>1?r-1:0),n=1;n<r;n++)o[n-1]=arguments[n];L.apply(void 0,[t,T(e)].concat(o))},C.doesNotReject=function t(e){for(var r=arguments.length,o=new Array(r>1?r-1:0),n=1;n<r;n++)o[n-1]=arguments[n];return z(e).then((function(e){return L.apply(void 0,[t,e].concat(o))}))},C.ifError=function t(e){if(null!=e){var r="ifError got unwanted exception: ";"object"===i(e)&&"string"==typeof e.message?0===e.message.length&&e.constructor?r+=e.constructor.name:r+=e.message:r+=f(e);var o=new m({actual:e,expected:null,operator:"ifError",message:r,stackStartFn:t}),n=e.stack;if("string"==typeof n){var s=n.split("\n");s.shift();for(var a=o.stack.split("\n"),l=0;l<s.length;l++){var c=a.indexOf(s[l]);if(-1!==c){a=a.slice(0,c);break}}o.stack="".concat(a.join("\n"),"\n").concat(s.join("\n"))}throw o}},C.strict=y(R,C,{equal:C.strictEqual,deepEqual:C.deepStrictEqual,notEqual:C.notStrictEqual,notDeepEqual:C.notDeepStrictEqual}),C.strict.strict=C.strict},5961:function(t,e,r){"use strict";var o=r(4155);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e){return!e||"object"!==h(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t){var e="function"==typeof Map?new Map:void 0;return l=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,o)}function o(){return c(t,arguments,u(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),d(o,t)},l(t)}function c(t,e,r){return c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,r){var o=[null];o.push.apply(o,e);var n=new(Function.bind.apply(t,o));return r&&d(n,r.prototype),n},c.apply(null,arguments)}function d(t,e){return d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},d(t,e)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}var p=r(9539).inspect,m=r(2136).codes.ERR_INVALID_ARG_TYPE;function f(t,e,r){return(void 0===r||r>t.length)&&(r=t.length),t.substring(r-e.length,r)===e}var _="",g="",v="",y="",b={deepStrictEqual:"Expected values to be strictly deep-equal:",strictEqual:"Expected values to be strictly equal:",strictEqualObject:'Expected "actual" to be reference-equal to "expected":',deepEqual:"Expected values to be loosely deep-equal:",equal:"Expected values to be loosely equal:",notDeepStrictEqual:'Expected "actual" not to be strictly deep-equal to:',notStrictEqual:'Expected "actual" to be strictly unequal to:',notStrictEqualObject:'Expected "actual" not to be reference-equal to "expected":',notDeepEqual:'Expected "actual" not to be loosely deep-equal to:',notEqual:'Expected "actual" to be loosely unequal to:',notIdentical:"Values identical but not reference-equal:"},x=10;function w(t){var e=Object.keys(t),r=Object.create(Object.getPrototypeOf(t));return e.forEach((function(e){r[e]=t[e]})),Object.defineProperty(r,"message",{value:t.message}),r}function C(t){return p(t,{compact:!1,customInspect:!1,depth:1e3,maxArrayLength:1/0,showHidden:!1,breakLength:1/0,showProxy:!1,sorted:!0,getters:!0})}var A=function(t){function e(t){var r;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),"object"!==h(t)||null===t)throw new m("options","Object",t);var n=t.message,i=t.operator,l=t.stackStartFn,c=t.actual,d=t.expected,p=Error.stackTraceLimit;if(Error.stackTraceLimit=0,null!=n)r=s(this,u(e).call(this,String(n)));else if(o.stderr&&o.stderr.isTTY&&(o.stderr&&o.stderr.getColorDepth&&1!==o.stderr.getColorDepth()?(_="[34m",g="[32m",y="[39m",v="[31m"):(_="",g="",y="",v="")),"object"===h(c)&&null!==c&&"object"===h(d)&&null!==d&&"stack"in c&&c instanceof Error&&"stack"in d&&d instanceof Error&&(c=w(c),d=w(d)),"deepStrictEqual"===i||"strictEqual"===i)r=s(this,u(e).call(this,function(t,e,r){var n="",i="",s=0,a="",l=!1,c=C(t),d=c.split("\n"),u=C(e).split("\n"),p=0,m="";if("strictEqual"===r&&"object"===h(t)&&"object"===h(e)&&null!==t&&null!==e&&(r="strictEqualObject"),1===d.length&&1===u.length&&d[0]!==u[0]){var w=d[0].length+u[0].length;if(w<=x){if(!("object"===h(t)&&null!==t||"object"===h(e)&&null!==e||0===t&&0===e))return"".concat(b[r],"\n\n")+"".concat(d[0]," !== ").concat(u[0],"\n")}else if("strictEqualObject"!==r&&w<(o.stderr&&o.stderr.isTTY?o.stderr.columns:80)){for(;d[0][p]===u[0][p];)p++;p>2&&(m="\n  ".concat(function(t,e){if(e=Math.floor(e),0==t.length||0==e)return"";var r=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+t.substring(0,r-t.length)}(" ",p),"^"),p=0)}}for(var A=d[d.length-1],E=u[u.length-1];A===E&&(p++<2?a="\n  ".concat(A).concat(a):n=A,d.pop(),u.pop(),0!==d.length&&0!==u.length);)A=d[d.length-1],E=u[u.length-1];var S=Math.max(d.length,u.length);if(0===S){var P=c.split("\n");if(P.length>30)for(P[26]="".concat(_,"...").concat(y);P.length>27;)P.pop();return"".concat(b.notIdentical,"\n\n").concat(P.join("\n"),"\n")}p>3&&(a="\n".concat(_,"...").concat(y).concat(a),l=!0),""!==n&&(a="\n  ".concat(n).concat(a),n="");var O=0,I=b[r]+"\n".concat(g,"+ actual").concat(y," ").concat(v,"- expected").concat(y),T=" ".concat(_,"...").concat(y," Lines skipped");for(p=0;p<S;p++){var k=p-s;if(d.length<p+1)k>1&&p>2&&(k>4?(i+="\n".concat(_,"...").concat(y),l=!0):k>3&&(i+="\n  ".concat(u[p-2]),O++),i+="\n  ".concat(u[p-1]),O++),s=p,n+="\n".concat(v,"-").concat(y," ").concat(u[p]),O++;else if(u.length<p+1)k>1&&p>2&&(k>4?(i+="\n".concat(_,"...").concat(y),l=!0):k>3&&(i+="\n  ".concat(d[p-2]),O++),i+="\n  ".concat(d[p-1]),O++),s=p,i+="\n".concat(g,"+").concat(y," ").concat(d[p]),O++;else{var z=u[p],N=d[p],L=N!==z&&(!f(N,",")||N.slice(0,-1)!==z);L&&f(z,",")&&z.slice(0,-1)===N&&(L=!1,N+=","),L?(k>1&&p>2&&(k>4?(i+="\n".concat(_,"...").concat(y),l=!0):k>3&&(i+="\n  ".concat(d[p-2]),O++),i+="\n  ".concat(d[p-1]),O++),s=p,i+="\n".concat(g,"+").concat(y," ").concat(N),n+="\n".concat(v,"-").concat(y," ").concat(z),O+=2):(i+=n,n="",1!==k&&0!==p||(i+="\n  ".concat(N),O++))}if(O>20&&p<S-2)return"".concat(I).concat(T,"\n").concat(i,"\n").concat(_,"...").concat(y).concat(n,"\n")+"".concat(_,"...").concat(y)}return"".concat(I).concat(l?T:"","\n").concat(i).concat(n).concat(a).concat(m)}(c,d,i)));else if("notDeepStrictEqual"===i||"notStrictEqual"===i){var A=b[i],E=C(c).split("\n");if("notStrictEqual"===i&&"object"===h(c)&&null!==c&&(A=b.notStrictEqualObject),E.length>30)for(E[26]="".concat(_,"...").concat(y);E.length>27;)E.pop();r=1===E.length?s(this,u(e).call(this,"".concat(A," ").concat(E[0]))):s(this,u(e).call(this,"".concat(A,"\n\n").concat(E.join("\n"),"\n")))}else{var S=C(c),P="",O=b[i];"notDeepEqual"===i||"notEqual"===i?(S="".concat(b[i],"\n\n").concat(S)).length>1024&&(S="".concat(S.slice(0,1021),"...")):(P="".concat(C(d)),S.length>512&&(S="".concat(S.slice(0,509),"...")),P.length>512&&(P="".concat(P.slice(0,509),"...")),"deepEqual"===i||"equal"===i?S="".concat(O,"\n\n").concat(S,"\n\nshould equal\n\n"):P=" ".concat(i," ").concat(P)),r=s(this,u(e).call(this,"".concat(S).concat(P)))}return Error.stackTraceLimit=p,r.generatedMessage=!n,Object.defineProperty(a(r),"name",{value:"AssertionError [ERR_ASSERTION]",enumerable:!1,writable:!0,configurable:!0}),r.code="ERR_ASSERTION",r.actual=c,r.expected=d,r.operator=i,Error.captureStackTrace&&Error.captureStackTrace(a(r),l),r.stack,r.name="AssertionError",s(r)}var r,l;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(e,t),r=e,l=[{key:"toString",value:function(){return"".concat(this.name," [").concat(this.code,"]: ").concat(this.message)}},{key:p.custom,value:function(t,e){return p(this,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),o.forEach((function(e){n(t,e,r[e])}))}return t}({},e,{customInspect:!1,depth:0}))}}],l&&i(r.prototype,l),e}(l(Error));t.exports=A},2136:function(t,e,r){"use strict";function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function n(t){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(t)}function i(t,e){return i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},i(t,e)}var s,a,l={};function c(t,e,r){r||(r=Error);var s=function(r){function s(r,i,a){var l;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),l=function(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}(this,n(s).call(this,function(t,r,o){return"string"==typeof e?e:e(t,r,o)}(r,i,a))),l.code=t,l}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(s,r),s}(r);l[t]=s}function d(t,e){if(Array.isArray(t)){var r=t.length;return t=t.map((function(t){return String(t)})),r>2?"one of ".concat(e," ").concat(t.slice(0,r-1).join(", "),", or ")+t[r-1]:2===r?"one of ".concat(e," ").concat(t[0]," or ").concat(t[1]):"of ".concat(e," ").concat(t[0])}return"of ".concat(e," ").concat(String(t))}c("ERR_AMBIGUOUS_ARGUMENT",'The "%s" argument is ambiguous. %s',TypeError),c("ERR_INVALID_ARG_TYPE",(function(t,e,n){var i,a,l,c,u;if(void 0===s&&(s=r(9282)),s("string"==typeof t,"'name' must be a string"),"string"==typeof e&&(a="not ",e.substr(0,a.length)===a)?(i="must not be",e=e.replace(/^not /,"")):i="must be",function(t,e,r){return(void 0===r||r>t.length)&&(r=t.length),t.substring(r-e.length,r)===e}(t," argument"))l="The ".concat(t," ").concat(i," ").concat(d(e,"type"));else{var h=("number"!=typeof u&&(u=0),u+".".length>(c=t).length||-1===c.indexOf(".",u)?"argument":"property");l='The "'.concat(t,'" ').concat(h," ").concat(i," ").concat(d(e,"type"))}return l+". Received type ".concat(o(n))}),TypeError),c("ERR_INVALID_ARG_VALUE",(function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"is invalid";void 0===a&&(a=r(9539));var n=a.inspect(e);return n.length>128&&(n="".concat(n.slice(0,128),"...")),"The argument '".concat(t,"' ").concat(o,". Received ").concat(n)}),TypeError,RangeError),c("ERR_INVALID_RETURN_VALUE",(function(t,e,r){var n;return n=r&&r.constructor&&r.constructor.name?"instance of ".concat(r.constructor.name):"type ".concat(o(r)),"Expected ".concat(t,' to be returned from the "').concat(e,'"')+" function but got ".concat(n,".")}),TypeError),c("ERR_MISSING_ARGS",(function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];void 0===s&&(s=r(9282)),s(e.length>0,"At least one arg needs to be specified");var n="The ",i=e.length;switch(e=e.map((function(t){return'"'.concat(t,'"')})),i){case 1:n+="".concat(e[0]," argument");break;case 2:n+="".concat(e[0]," and ").concat(e[1]," arguments");break;default:n+=e.slice(0,i-1).join(", "),n+=", and ".concat(e[i-1]," arguments")}return"".concat(n," must be specified")}),TypeError),t.exports.codes=l},9158:function(t,e,r){"use strict";function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=[],o=!0,n=!1,i=void 0;try{for(var s,a=t[Symbol.iterator]();!(o=(s=a.next()).done)&&(r.push(s.value),!e||r.length!==e);o=!0);}catch(t){n=!0,i=t}finally{try{o||null==a.return||a.return()}finally{if(n)throw i}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}var i=void 0!==/a/g.flags,s=function(t){var e=[];return t.forEach((function(t){return e.push(t)})),e},a=function(t){var e=[];return t.forEach((function(t,r){return e.push([r,t])})),e},l=Object.is?Object.is:r(609),c=Object.getOwnPropertySymbols?Object.getOwnPropertySymbols:function(){return[]},d=Number.isNaN?Number.isNaN:r(360);function u(t){return t.call.bind(t)}var h=u(Object.prototype.hasOwnProperty),p=u(Object.prototype.propertyIsEnumerable),m=u(Object.prototype.toString),f=r(9539).types,_=f.isAnyArrayBuffer,g=f.isArrayBufferView,v=f.isDate,y=f.isMap,b=f.isRegExp,x=f.isSet,w=f.isNativeError,C=f.isBoxedPrimitive,A=f.isNumberObject,E=f.isStringObject,S=f.isBooleanObject,P=f.isBigIntObject,O=f.isSymbolObject,I=f.isFloat32Array,T=f.isFloat64Array;function k(t){if(0===t.length||t.length>10)return!0;for(var e=0;e<t.length;e++){var r=t.charCodeAt(e);if(r<48||r>57)return!0}return 10===t.length&&t>=Math.pow(2,32)}function z(t){return Object.keys(t).filter(k).concat(c(t).filter(Object.prototype.propertyIsEnumerable.bind(t)))}function N(t,e){if(t===e)return 0;for(var r=t.length,o=e.length,n=0,i=Math.min(r,o);n<i;++n)if(t[n]!==e[n]){r=t[n],o=e[n];break}return r<o?-1:o<r?1:0}var L=0,R=1,M=2,j=3;function V(t,e,r,o){if(t===e)return 0!==t||!r||l(t,e);if(r){if("object"!==n(t))return"number"==typeof t&&d(t)&&d(e);if("object"!==n(e)||null===t||null===e)return!1;if(Object.getPrototypeOf(t)!==Object.getPrototypeOf(e))return!1}else{if(null===t||"object"!==n(t))return(null===e||"object"!==n(e))&&t==e;if(null===e||"object"!==n(e))return!1}var s,a,c,u,h=m(t);if(h!==m(e))return!1;if(Array.isArray(t)){if(t.length!==e.length)return!1;var p=z(t),f=z(e);return p.length===f.length&&$(t,e,r,o,R,p)}if("[object Object]"===h&&(!y(t)&&y(e)||!x(t)&&x(e)))return!1;if(v(t)){if(!v(e)||Date.prototype.getTime.call(t)!==Date.prototype.getTime.call(e))return!1}else if(b(t)){if(!b(e)||(c=t,u=e,!(i?c.source===u.source&&c.flags===u.flags:RegExp.prototype.toString.call(c)===RegExp.prototype.toString.call(u))))return!1}else if(w(t)||t instanceof Error){if(t.message!==e.message||t.name!==e.name)return!1}else{if(g(t)){if(r||!I(t)&&!T(t)){if(!function(t,e){return t.byteLength===e.byteLength&&0===N(new Uint8Array(t.buffer,t.byteOffset,t.byteLength),new Uint8Array(e.buffer,e.byteOffset,e.byteLength))}(t,e))return!1}else if(!function(t,e){if(t.byteLength!==e.byteLength)return!1;for(var r=0;r<t.byteLength;r++)if(t[r]!==e[r])return!1;return!0}(t,e))return!1;var k=z(t),V=z(e);return k.length===V.length&&$(t,e,r,o,L,k)}if(x(t))return!(!x(e)||t.size!==e.size)&&$(t,e,r,o,M);if(y(t))return!(!y(e)||t.size!==e.size)&&$(t,e,r,o,j);if(_(t)){if(a=e,(s=t).byteLength!==a.byteLength||0!==N(new Uint8Array(s),new Uint8Array(a)))return!1}else if(C(t)&&!function(t,e){return A(t)?A(e)&&l(Number.prototype.valueOf.call(t),Number.prototype.valueOf.call(e)):E(t)?E(e)&&String.prototype.valueOf.call(t)===String.prototype.valueOf.call(e):S(t)?S(e)&&Boolean.prototype.valueOf.call(t)===Boolean.prototype.valueOf.call(e):P(t)?P(e)&&BigInt.prototype.valueOf.call(t)===BigInt.prototype.valueOf.call(e):O(e)&&Symbol.prototype.valueOf.call(t)===Symbol.prototype.valueOf.call(e)}(t,e))return!1}return $(t,e,r,o,L)}function D(t,e){return e.filter((function(e){return p(t,e)}))}function $(t,e,r,i,l,d){if(5===arguments.length){d=Object.keys(t);var u=Object.keys(e);if(d.length!==u.length)return!1}for(var m=0;m<d.length;m++)if(!h(e,d[m]))return!1;if(r&&5===arguments.length){var f=c(t);if(0!==f.length){var _=0;for(m=0;m<f.length;m++){var g=f[m];if(p(t,g)){if(!p(e,g))return!1;d.push(g),_++}else if(p(e,g))return!1}var v=c(e);if(f.length!==v.length&&D(e,v).length!==_)return!1}else{var y=c(e);if(0!==y.length&&0!==D(e,y).length)return!1}}if(0===d.length&&(l===L||l===R&&0===t.length||0===t.size))return!0;if(void 0===i)i={val1:new Map,val2:new Map,position:0};else{var b=i.val1.get(t);if(void 0!==b){var x=i.val2.get(e);if(void 0!==x)return b===x}i.position++}i.val1.set(t,i.position),i.val2.set(e,i.position);var w=function(t,e,r,i,l,c){var d=0;if(c===M){if(!function(t,e,r,o){for(var i=null,a=s(t),l=0;l<a.length;l++){var c=a[l];if("object"===n(c)&&null!==c)null===i&&(i=new Set),i.add(c);else if(!e.has(c)){if(r)return!1;if(!F(t,e,c))return!1;null===i&&(i=new Set),i.add(c)}}if(null!==i){for(var d=s(e),u=0;u<d.length;u++){var h=d[u];if("object"===n(h)&&null!==h){if(!H(i,h,r,o))return!1}else if(!r&&!t.has(h)&&!H(i,h,r,o))return!1}return 0===i.size}return!0}(t,e,r,l))return!1}else if(c===j){if(!function(t,e,r,i){for(var s=null,l=a(t),c=0;c<l.length;c++){var d=o(l[c],2),u=d[0],h=d[1];if("object"===n(u)&&null!==u)null===s&&(s=new Set),s.add(u);else{var p=e.get(u);if(void 0===p&&!e.has(u)||!V(h,p,r,i)){if(r)return!1;if(!U(t,e,u,h,i))return!1;null===s&&(s=new Set),s.add(u)}}}if(null!==s){for(var m=a(e),f=0;f<m.length;f++){var _=o(m[f],2),g=(u=_[0],_[1]);if("object"===n(u)&&null!==u){if(!q(s,t,u,g,r,i))return!1}else if(!(r||t.has(u)&&V(t.get(u),g,!1,i)||q(s,t,u,g,!1,i)))return!1}return 0===s.size}return!0}(t,e,r,l))return!1}else if(c===R)for(;d<t.length;d++){if(!h(t,d)){if(h(e,d))return!1;for(var u=Object.keys(t);d<u.length;d++){var p=u[d];if(!h(e,p)||!V(t[p],e[p],r,l))return!1}return u.length===Object.keys(e).length}if(!h(e,d)||!V(t[d],e[d],r,l))return!1}for(d=0;d<i.length;d++){var m=i[d];if(!V(t[m],e[m],r,l))return!1}return!0}(t,e,r,d,i,l);return i.val1.delete(t),i.val2.delete(e),w}function H(t,e,r,o){for(var n=s(t),i=0;i<n.length;i++){var a=n[i];if(V(e,a,r,o))return t.delete(a),!0}return!1}function B(t){switch(n(t)){case"undefined":return null;case"object":return;case"symbol":return!1;case"string":t=+t;case"number":if(d(t))return!1}return!0}function F(t,e,r){var o=B(r);return null!=o?o:e.has(o)&&!t.has(o)}function U(t,e,r,o,n){var i=B(r);if(null!=i)return i;var s=e.get(i);return!(void 0===s&&!e.has(i)||!V(o,s,!1,n))&&!t.has(i)&&V(o,s,!1,n)}function q(t,e,r,o,n,i){for(var a=s(t),l=0;l<a.length;l++){var c=a[l];if(V(r,c,n,i)&&V(o,e.get(c),n,i))return t.delete(c),!0}return!1}t.exports={isDeepEqual:function(t,e){return V(t,e,false)},isDeepStrictEqual:function(t,e){return V(t,e,true)}}},1924:function(t,e,r){"use strict";var o=r(210),n=r(5559),i=n(o("String.prototype.indexOf"));t.exports=function(t,e){var r=o(t,!!e);return"function"==typeof r&&i(t,".prototype.")>-1?n(r):r}},5559:function(t,e,r){"use strict";var o=r(8612),n=r(210),i=n("%Function.prototype.apply%"),s=n("%Function.prototype.call%"),a=n("%Reflect.apply%",!0)||o.call(s,i),l=n("%Object.getOwnPropertyDescriptor%",!0),c=n("%Object.defineProperty%",!0),d=n("%Math.max%");if(c)try{c({},"a",{value:1})}catch(t){c=null}t.exports=function(t){var e=a(o,s,arguments);return l&&c&&l(e,"length").configurable&&c(e,"length",{value:1+d(0,t.length-(arguments.length-1))}),e};var u=function(){return a(o,i,arguments)};c?c(t.exports,"apply",{value:u}):t.exports.apply=u},5108:function(t,e,r){var o=r(9539),n=r(9282);function i(){return(new Date).getTime()}var s,a=Array.prototype.slice,l={};s=void 0!==r.g&&r.g.console?r.g.console:"undefined"!=typeof window&&window.console?window.console:{};for(var c=[[function(){},"log"],[function(){s.log.apply(s,arguments)},"info"],[function(){s.log.apply(s,arguments)},"warn"],[function(){s.warn.apply(s,arguments)},"error"],[function(t){l[t]=i()},"time"],[function(t){var e=l[t];if(!e)throw new Error("No such label: "+t);delete l[t];var r=i()-e;s.log(t+": "+r+"ms")},"timeEnd"],[function(){var t=new Error;t.name="Trace",t.message=o.format.apply(null,arguments),s.error(t.stack)},"trace"],[function(t){s.log(o.inspect(t)+"\n")},"dir"],[function(t){if(!t){var e=a.call(arguments,1);n.ok(!1,o.format.apply(null,e))}},"assert"]],d=0;d<c.length;d++){var u=c[d],h=u[0],p=u[1];s[p]||(s[p]=h)}t.exports=s},3645:function(t){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",o=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),o&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),o&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,o,n,i){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(o)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(s[l]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);o&&s[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),e.push(d))}},e}},8081:function(t){"use strict";t.exports=function(t){return t[1]}},4289:function(t,e,r){"use strict";var o=r(2215),n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,s=Array.prototype.concat,a=Object.defineProperty,l=r(1044)(),c=a&&l,d=function(t,e,r,o){if(e in t)if(!0===o){if(t[e]===r)return}else if("function"!=typeof(n=o)||"[object Function]"!==i.call(n)||!o())return;var n;c?a(t,e,{configurable:!0,enumerable:!1,value:r,writable:!0}):t[e]=r},u=function(t,e){var r=arguments.length>2?arguments[2]:{},i=o(e);n&&(i=s.call(i,Object.getOwnPropertySymbols(e)));for(var a=0;a<i.length;a+=1)d(t,i[a],e[i[a]],r[i[a]])};u.supportsDescriptors=!!c,t.exports=u},8091:function(t){"use strict";function e(t,e){if(null==t)throw new TypeError("Cannot convert first argument to object");for(var r=Object(t),o=1;o<arguments.length;o++){var n=arguments[o];if(null!=n)for(var i=Object.keys(Object(n)),s=0,a=i.length;s<a;s++){var l=i[s],c=Object.getOwnPropertyDescriptor(n,l);void 0!==c&&c.enumerable&&(r[l]=n[l])}}return r}t.exports={assign:e,polyfill:function(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:e})}}},4029:function(t,e,r){"use strict";var o=r(5320),n=Object.prototype.toString,i=Object.prototype.hasOwnProperty,s=function(t,e,r){for(var o=0,n=t.length;o<n;o++)i.call(t,o)&&(null==r?e(t[o],o,t):e.call(r,t[o],o,t))},a=function(t,e,r){for(var o=0,n=t.length;o<n;o++)null==r?e(t.charAt(o),o,t):e.call(r,t.charAt(o),o,t)},l=function(t,e,r){for(var o in t)i.call(t,o)&&(null==r?e(t[o],o,t):e.call(r,t[o],o,t))};t.exports=function(t,e,r){if(!o(e))throw new TypeError("iterator must be a function");var i;arguments.length>=3&&(i=r),"[object Array]"===n.call(t)?s(t,e,i):"string"==typeof t?a(t,e,i):l(t,e,i)}},7648:function(t){"use strict";var e="Function.prototype.bind called on incompatible ",r=Array.prototype.slice,o=Object.prototype.toString,n="[object Function]";t.exports=function(t){var i=this;if("function"!=typeof i||o.call(i)!==n)throw new TypeError(e+i);for(var s,a=r.call(arguments,1),l=Math.max(0,i.length-a.length),c=[],d=0;d<l;d++)c.push("$"+d);if(s=Function("binder","return function ("+c.join(",")+"){ return binder.apply(this,arguments); }")((function(){if(this instanceof s){var e=i.apply(this,a.concat(r.call(arguments)));return Object(e)===e?e:this}return i.apply(t,a.concat(r.call(arguments)))})),i.prototype){var u=function(){};u.prototype=i.prototype,s.prototype=new u,u.prototype=null}return s}},8612:function(t,e,r){"use strict";var o=r(7648);t.exports=Function.prototype.bind||o},210:function(t,e,r){"use strict";var o,n=SyntaxError,i=Function,s=TypeError,a=function(t){try{return i('"use strict"; return ('+t+").constructor;")()}catch(t){}},l=Object.getOwnPropertyDescriptor;if(l)try{l({},"")}catch(t){l=null}var c=function(){throw new s},d=l?function(){try{return c}catch(t){try{return l(arguments,"callee").get}catch(t){return c}}}():c,u=r(1405)(),h=Object.getPrototypeOf||function(t){return t.__proto__},p={},m="undefined"==typeof Uint8Array?o:h(Uint8Array),f={"%AggregateError%":"undefined"==typeof AggregateError?o:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?o:ArrayBuffer,"%ArrayIteratorPrototype%":u?h([][Symbol.iterator]()):o,"%AsyncFromSyncIteratorPrototype%":o,"%AsyncFunction%":p,"%AsyncGenerator%":p,"%AsyncGeneratorFunction%":p,"%AsyncIteratorPrototype%":p,"%Atomics%":"undefined"==typeof Atomics?o:Atomics,"%BigInt%":"undefined"==typeof BigInt?o:BigInt,"%BigInt64Array%":"undefined"==typeof BigInt64Array?o:BigInt64Array,"%BigUint64Array%":"undefined"==typeof BigUint64Array?o:BigUint64Array,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?o:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?o:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?o:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?o:FinalizationRegistry,"%Function%":i,"%GeneratorFunction%":p,"%Int8Array%":"undefined"==typeof Int8Array?o:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?o:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?o:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":u?h(h([][Symbol.iterator]())):o,"%JSON%":"object"==typeof JSON?JSON:o,"%Map%":"undefined"==typeof Map?o:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&u?h((new Map)[Symbol.iterator]()):o,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?o:Promise,"%Proxy%":"undefined"==typeof Proxy?o:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?o:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?o:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&u?h((new Set)[Symbol.iterator]()):o,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?o:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":u?h(""[Symbol.iterator]()):o,"%Symbol%":u?Symbol:o,"%SyntaxError%":n,"%ThrowTypeError%":d,"%TypedArray%":m,"%TypeError%":s,"%Uint8Array%":"undefined"==typeof Uint8Array?o:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?o:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?o:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?o:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?o:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?o:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?o:WeakSet};try{null.error}catch(t){var _=h(h(t));f["%Error.prototype%"]=_}var g=function t(e){var r;if("%AsyncFunction%"===e)r=a("async function () {}");else if("%GeneratorFunction%"===e)r=a("function* () {}");else if("%AsyncGeneratorFunction%"===e)r=a("async function* () {}");else if("%AsyncGenerator%"===e){var o=t("%AsyncGeneratorFunction%");o&&(r=o.prototype)}else if("%AsyncIteratorPrototype%"===e){var n=t("%AsyncGenerator%");n&&(r=h(n.prototype))}return f[e]=r,r},v={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},y=r(8612),b=r(7642),x=y.call(Function.call,Array.prototype.concat),w=y.call(Function.apply,Array.prototype.splice),C=y.call(Function.call,String.prototype.replace),A=y.call(Function.call,String.prototype.slice),E=y.call(Function.call,RegExp.prototype.exec),S=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,P=/\\(\\)?/g,O=function(t){var e=A(t,0,1),r=A(t,-1);if("%"===e&&"%"!==r)throw new n("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==e)throw new n("invalid intrinsic syntax, expected opening `%`");var o=[];return C(t,S,(function(t,e,r,n){o[o.length]=r?C(n,P,"$1"):e||t})),o},I=function(t,e){var r,o=t;if(b(v,o)&&(o="%"+(r=v[o])[0]+"%"),b(f,o)){var i=f[o];if(i===p&&(i=g(o)),void 0===i&&!e)throw new s("intrinsic "+t+" exists, but is not available. Please file an issue!");return{alias:r,name:o,value:i}}throw new n("intrinsic "+t+" does not exist!")};t.exports=function(t,e){if("string"!=typeof t||0===t.length)throw new s("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof e)throw new s('"allowMissing" argument must be a boolean');if(null===E(/^%?[^%]*%?$/,t))throw new n("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var r=O(t),o=r.length>0?r[0]:"",i=I("%"+o+"%",e),a=i.name,c=i.value,d=!1,u=i.alias;u&&(o=u[0],w(r,x([0,1],u)));for(var h=1,p=!0;h<r.length;h+=1){var m=r[h],_=A(m,0,1),g=A(m,-1);if(('"'===_||"'"===_||"`"===_||'"'===g||"'"===g||"`"===g)&&_!==g)throw new n("property names with quotes must have matching quotes");if("constructor"!==m&&p||(d=!0),b(f,a="%"+(o+="."+m)+"%"))c=f[a];else if(null!=c){if(!(m in c)){if(!e)throw new s("base intrinsic for "+t+" exists, but the property is not available.");return}if(l&&h+1>=r.length){var v=l(c,m);c=(p=!!v)&&"get"in v&&!("originalValue"in v.get)?v.get:c[m]}else p=b(c,m),c=c[m];p&&!d&&(f[a]=c)}}return c}},7296:function(t,e,r){"use strict";var o=r(210)("%Object.getOwnPropertyDescriptor%",!0);if(o)try{o([],"length")}catch(t){o=null}t.exports=o},1044:function(t,e,r){"use strict";var o=r(210)("%Object.defineProperty%",!0),n=function(){if(o)try{return o({},"a",{value:1}),!0}catch(t){return!1}return!1};n.hasArrayLengthDefineBug=function(){if(!n())return null;try{return 1!==o([],"length",{value:1}).length}catch(t){return!0}},t.exports=n},1405:function(t,e,r){"use strict";var o="undefined"!=typeof Symbol&&Symbol,n=r(5419);t.exports=function(){return"function"==typeof o&&"function"==typeof Symbol&&"symbol"==typeof o("foo")&&"symbol"==typeof Symbol("bar")&&n()}},5419:function(t){"use strict";t.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var t={},e=Symbol("test"),r=Object(e);if("string"==typeof e)return!1;if("[object Symbol]"!==Object.prototype.toString.call(e))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(e in t[e]=42,t)return!1;if("function"==typeof Object.keys&&0!==Object.keys(t).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;var o=Object.getOwnPropertySymbols(t);if(1!==o.length||o[0]!==e)return!1;if(!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var n=Object.getOwnPropertyDescriptor(t,e);if(42!==n.value||!0!==n.enumerable)return!1}return!0}},6410:function(t,e,r){"use strict";var o=r(5419);t.exports=function(){return o()&&!!Symbol.toStringTag}},7642:function(t,e,r){"use strict";var o=r(8612);t.exports=o.call(Function.call,Object.prototype.hasOwnProperty)},5717:function(t){"function"==typeof Object.create?t.exports=function(t,e){e&&(t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:t.exports=function(t,e){if(e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}}},2584:function(t,e,r){"use strict";var o=r(6410)(),n=r(1924)("Object.prototype.toString"),i=function(t){return!(o&&t&&"object"==typeof t&&Symbol.toStringTag in t)&&"[object Arguments]"===n(t)},s=function(t){return!!i(t)||null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Array]"!==n(t)&&"[object Function]"===n(t.callee)},a=function(){return i(arguments)}();i.isLegacyArguments=s,t.exports=a?i:s},5320:function(t){"use strict";var e,r,o=Function.prototype.toString,n="object"==typeof Reflect&&null!==Reflect&&Reflect.apply;if("function"==typeof n&&"function"==typeof Object.defineProperty)try{e=Object.defineProperty({},"length",{get:function(){throw r}}),r={},n((function(){throw 42}),null,e)}catch(t){t!==r&&(n=null)}else n=null;var i=/^\s*class\b/,s=function(t){try{var e=o.call(t);return i.test(e)}catch(t){return!1}},a=function(t){try{return!s(t)&&(o.call(t),!0)}catch(t){return!1}},l=Object.prototype.toString,c="function"==typeof Symbol&&!!Symbol.toStringTag,d=!(0 in[,]),u=function(){return!1};if("object"==typeof document){var h=document.all;l.call(h)===l.call(document.all)&&(u=function(t){if((d||!t)&&(void 0===t||"object"==typeof t))try{var e=l.call(t);return("[object HTMLAllCollection]"===e||"[object HTML document.all class]"===e||"[object HTMLCollection]"===e||"[object Object]"===e)&&null==t("")}catch(t){}return!1})}t.exports=n?function(t){if(u(t))return!0;if(!t)return!1;if("function"!=typeof t&&"object"!=typeof t)return!1;try{n(t,null,e)}catch(t){if(t!==r)return!1}return!s(t)&&a(t)}:function(t){if(u(t))return!0;if(!t)return!1;if("function"!=typeof t&&"object"!=typeof t)return!1;if(c)return a(t);if(s(t))return!1;var e=l.call(t);return!("[object Function]"!==e&&"[object GeneratorFunction]"!==e&&!/^\[object HTML/.test(e))&&a(t)}},8662:function(t,e,r){"use strict";var o,n=Object.prototype.toString,i=Function.prototype.toString,s=/^\s*(?:function)?\*/,a=r(6410)(),l=Object.getPrototypeOf;t.exports=function(t){if("function"!=typeof t)return!1;if(s.test(i.call(t)))return!0;if(!a)return"[object GeneratorFunction]"===n.call(t);if(!l)return!1;if(void 0===o){var e=function(){if(!a)return!1;try{return Function("return function*() {}")()}catch(t){}}();o=!!e&&l(e)}return l(t)===o}},8611:function(t){"use strict";t.exports=function(t){return t!=t}},360:function(t,e,r){"use strict";var o=r(5559),n=r(4289),i=r(8611),s=r(9415),a=r(3194),l=o(s(),Number);n(l,{getPolyfill:s,implementation:i,shim:a}),t.exports=l},9415:function(t,e,r){"use strict";var o=r(8611);t.exports=function(){return Number.isNaN&&Number.isNaN(NaN)&&!Number.isNaN("a")?Number.isNaN:o}},3194:function(t,e,r){"use strict";var o=r(4289),n=r(9415);t.exports=function(){var t=n();return o(Number,{isNaN:t},{isNaN:function(){return Number.isNaN!==t}}),t}},5692:function(t,e,r){"use strict";var o=r(4029),n=r(3083),i=r(1924),s=i("Object.prototype.toString"),a=r(6410)(),l=r(7296),c="undefined"==typeof globalThis?r.g:globalThis,d=n(),u=i("Array.prototype.indexOf",!0)||function(t,e){for(var r=0;r<t.length;r+=1)if(t[r]===e)return r;return-1},h=i("String.prototype.slice"),p={},m=Object.getPrototypeOf;a&&l&&m&&o(d,(function(t){var e=new c[t];if(Symbol.toStringTag in e){var r=m(e),o=l(r,Symbol.toStringTag);if(!o){var n=m(r);o=l(n,Symbol.toStringTag)}p[t]=o.get}})),t.exports=function(t){if(!t||"object"!=typeof t)return!1;if(!a||!(Symbol.toStringTag in t)){var e=h(s(t),8,-1);return u(d,e)>-1}return!!l&&function(t){var e=!1;return o(p,(function(r,o){if(!e)try{e=r.call(t)===o}catch(t){}})),e}(t)}},4244:function(t){"use strict";var e=function(t){return t!=t};t.exports=function(t,r){return 0===t&&0===r?1/t==1/r:t===r||!(!e(t)||!e(r))}},609:function(t,e,r){"use strict";var o=r(4289),n=r(5559),i=r(4244),s=r(5624),a=r(2281),l=n(s(),Object);o(l,{getPolyfill:s,implementation:i,shim:a}),t.exports=l},5624:function(t,e,r){"use strict";var o=r(4244);t.exports=function(){return"function"==typeof Object.is?Object.is:o}},2281:function(t,e,r){"use strict";var o=r(5624),n=r(4289);t.exports=function(){var t=o();return n(Object,{is:t},{is:function(){return Object.is!==t}}),t}},8987:function(t,e,r){"use strict";var o;if(!Object.keys){var n=Object.prototype.hasOwnProperty,i=Object.prototype.toString,s=r(1414),a=Object.prototype.propertyIsEnumerable,l=!a.call({toString:null},"toString"),c=a.call((function(){}),"prototype"),d=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],u=function(t){var e=t.constructor;return e&&e.prototype===t},h={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},p=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!h["$"+t]&&n.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{u(window[t])}catch(t){return!0}}catch(t){return!0}return!1}();o=function(t){var e=null!==t&&"object"==typeof t,r="[object Function]"===i.call(t),o=s(t),a=e&&"[object String]"===i.call(t),h=[];if(!e&&!r&&!o)throw new TypeError("Object.keys called on a non-object");var m=c&&r;if(a&&t.length>0&&!n.call(t,0))for(var f=0;f<t.length;++f)h.push(String(f));if(o&&t.length>0)for(var _=0;_<t.length;++_)h.push(String(_));else for(var g in t)m&&"prototype"===g||!n.call(t,g)||h.push(String(g));if(l)for(var v=function(t){if("undefined"==typeof window||!p)return u(t);try{return u(t)}catch(t){return!1}}(t),y=0;y<d.length;++y)v&&"constructor"===d[y]||!n.call(t,d[y])||h.push(d[y]);return h}}t.exports=o},2215:function(t,e,r){"use strict";var o=Array.prototype.slice,n=r(1414),i=Object.keys,s=i?function(t){return i(t)}:r(8987),a=Object.keys;s.shim=function(){if(Object.keys){var t=function(){var t=Object.keys(arguments);return t&&t.length===arguments.length}(1,2);t||(Object.keys=function(t){return n(t)?a(o.call(t)):a(t)})}else Object.keys=s;return Object.keys||s},t.exports=s},1414:function(t){"use strict";var e=Object.prototype.toString;t.exports=function(t){var r=e.call(t),o="[object Arguments]"===r;return o||(o="[object Array]"!==r&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Function]"===e.call(t.callee)),o}},4155:function(t){var e,r,o=t.exports={};function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(t){if(e===setTimeout)return setTimeout(t,0);if((e===n||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(r){try{return e.call(null,t,0)}catch(r){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:n}catch(t){e=n}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(t){r=i}}();var a,l=[],c=!1,d=-1;function u(){c&&a&&(c=!1,a.length?l=a.concat(l):d=-1,l.length&&h())}function h(){if(!c){var t=s(u);c=!0;for(var e=l.length;e;){for(a=l,l=[];++d<e;)a&&a[d].run();d=-1,e=l.length}a=null,c=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{return r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function m(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];l.push(new p(t,e)),1!==l.length||c||s(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},3379:function(t){"use strict";var e=[];function r(t){for(var r=-1,o=0;o<e.length;o++)if(e[o].identifier===t){r=o;break}return r}function o(t,o){for(var i={},s=[],a=0;a<t.length;a++){var l=t[a],c=o.base?l[0]+o.base:l[0],d=i[c]||0,u="".concat(c," ").concat(d);i[c]=d+1;var h=r(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)e[h].references++,e[h].updater(p);else{var m=n(p,o);o.byIndex=a,e.splice(a,0,{identifier:u,updater:m,references:1})}s.push(u)}return s}function n(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,n){var i=o(t=t||[],n=n||{});return function(t){t=t||[];for(var s=0;s<i.length;s++){var a=r(i[s]);e[a].references--}for(var l=o(t,n),c=0;c<i.length;c++){var d=r(i[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=l}}},569:function(t){"use strict";var e={};t.exports=function(t,r){var o=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}},9216:function(t){"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},3565:function(t,e,r){"use strict";t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},7795:function(t){"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var o="";r.supports&&(o+="@supports (".concat(r.supports,") {")),r.media&&(o+="@media ".concat(r.media," {"));var n=void 0!==r.layer;n&&(o+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),o+=r.css,n&&(o+="}"),r.media&&(o+="}"),r.supports&&(o+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},4589:function(t){"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},655:function(t,e,r){"use strict";function o(t,e,r,o){var n,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(i<3?n(s):i>3?n(e,r,s):n(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s}r.d(e,{gn:function(){return o}}),Object.create,Object.create},384:function(t){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},5955:function(t,e,r){"use strict";var o=r(2584),n=r(8662),i=r(6430),s=r(5692);function a(t){return t.call.bind(t)}var l="undefined"!=typeof BigInt,c="undefined"!=typeof Symbol,d=a(Object.prototype.toString),u=a(Number.prototype.valueOf),h=a(String.prototype.valueOf),p=a(Boolean.prototype.valueOf);if(l)var m=a(BigInt.prototype.valueOf);if(c)var f=a(Symbol.prototype.valueOf);function _(t,e){if("object"!=typeof t)return!1;try{return e(t),!0}catch(t){return!1}}function g(t){return"[object Map]"===d(t)}function v(t){return"[object Set]"===d(t)}function y(t){return"[object WeakMap]"===d(t)}function b(t){return"[object WeakSet]"===d(t)}function x(t){return"[object ArrayBuffer]"===d(t)}function w(t){return"undefined"!=typeof ArrayBuffer&&(x.working?x(t):t instanceof ArrayBuffer)}function C(t){return"[object DataView]"===d(t)}function A(t){return"undefined"!=typeof DataView&&(C.working?C(t):t instanceof DataView)}e.isArgumentsObject=o,e.isGeneratorFunction=n,e.isTypedArray=s,e.isPromise=function(t){return"undefined"!=typeof Promise&&t instanceof Promise||null!==t&&"object"==typeof t&&"function"==typeof t.then&&"function"==typeof t.catch},e.isArrayBufferView=function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):s(t)||A(t)},e.isUint8Array=function(t){return"Uint8Array"===i(t)},e.isUint8ClampedArray=function(t){return"Uint8ClampedArray"===i(t)},e.isUint16Array=function(t){return"Uint16Array"===i(t)},e.isUint32Array=function(t){return"Uint32Array"===i(t)},e.isInt8Array=function(t){return"Int8Array"===i(t)},e.isInt16Array=function(t){return"Int16Array"===i(t)},e.isInt32Array=function(t){return"Int32Array"===i(t)},e.isFloat32Array=function(t){return"Float32Array"===i(t)},e.isFloat64Array=function(t){return"Float64Array"===i(t)},e.isBigInt64Array=function(t){return"BigInt64Array"===i(t)},e.isBigUint64Array=function(t){return"BigUint64Array"===i(t)},g.working="undefined"!=typeof Map&&g(new Map),e.isMap=function(t){return"undefined"!=typeof Map&&(g.working?g(t):t instanceof Map)},v.working="undefined"!=typeof Set&&v(new Set),e.isSet=function(t){return"undefined"!=typeof Set&&(v.working?v(t):t instanceof Set)},y.working="undefined"!=typeof WeakMap&&y(new WeakMap),e.isWeakMap=function(t){return"undefined"!=typeof WeakMap&&(y.working?y(t):t instanceof WeakMap)},b.working="undefined"!=typeof WeakSet&&b(new WeakSet),e.isWeakSet=function(t){return b(t)},x.working="undefined"!=typeof ArrayBuffer&&x(new ArrayBuffer),e.isArrayBuffer=w,C.working="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView&&C(new DataView(new ArrayBuffer(1),0,1)),e.isDataView=A;var E="undefined"!=typeof SharedArrayBuffer?SharedArrayBuffer:void 0;function S(t){return"[object SharedArrayBuffer]"===d(t)}function P(t){return void 0!==E&&(void 0===S.working&&(S.working=S(new E)),S.working?S(t):t instanceof E)}function O(t){return _(t,u)}function I(t){return _(t,h)}function T(t){return _(t,p)}function k(t){return l&&_(t,m)}function z(t){return c&&_(t,f)}e.isSharedArrayBuffer=P,e.isAsyncFunction=function(t){return"[object AsyncFunction]"===d(t)},e.isMapIterator=function(t){return"[object Map Iterator]"===d(t)},e.isSetIterator=function(t){return"[object Set Iterator]"===d(t)},e.isGeneratorObject=function(t){return"[object Generator]"===d(t)},e.isWebAssemblyCompiledModule=function(t){return"[object WebAssembly.Module]"===d(t)},e.isNumberObject=O,e.isStringObject=I,e.isBooleanObject=T,e.isBigIntObject=k,e.isSymbolObject=z,e.isBoxedPrimitive=function(t){return O(t)||I(t)||T(t)||k(t)||z(t)},e.isAnyArrayBuffer=function(t){return"undefined"!=typeof Uint8Array&&(w(t)||P(t))},["isProxy","isExternal","isModuleNamespaceObject"].forEach((function(t){Object.defineProperty(e,t,{enumerable:!1,value:function(){throw new Error(t+" is not supported in userland")}})}))},9539:function(t,e,r){var o=r(4155),n=r(5108),i=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),r={},o=0;o<e.length;o++)r[e[o]]=Object.getOwnPropertyDescriptor(t,e[o]);return r},s=/%[sdj%]/g;e.format=function(t){if(!b(t)){for(var e=[],r=0;r<arguments.length;r++)e.push(d(arguments[r]));return e.join(" ")}r=1;for(var o=arguments,n=o.length,i=String(t).replace(s,(function(t){if("%%"===t)return"%";if(r>=n)return t;switch(t){case"%s":return String(o[r++]);case"%d":return Number(o[r++]);case"%j":try{return JSON.stringify(o[r++])}catch(t){return"[Circular]"}default:return t}})),a=o[r];r<n;a=o[++r])v(a)||!C(a)?i+=" "+a:i+=" "+d(a);return i},e.deprecate=function(t,r){if(void 0!==o&&!0===o.noDeprecation)return t;if(void 0===o)return function(){return e.deprecate(t,r).apply(this,arguments)};var i=!1;return function(){if(!i){if(o.throwDeprecation)throw new Error(r);o.traceDeprecation?n.trace(r):n.error(r),i=!0}return t.apply(this,arguments)}};var a={},l=/^$/;if(o.env.NODE_DEBUG){var c=o.env.NODE_DEBUG;c=c.replace(/[|\\{}()[\]^$+?.]/g,"\\$&").replace(/\*/g,".*").replace(/,/g,"$|^").toUpperCase(),l=new RegExp("^"+c+"$","i")}function d(t,r){var o={seen:[],stylize:h};return arguments.length>=3&&(o.depth=arguments[2]),arguments.length>=4&&(o.colors=arguments[3]),g(r)?o.showHidden=r:r&&e._extend(o,r),x(o.showHidden)&&(o.showHidden=!1),x(o.depth)&&(o.depth=2),x(o.colors)&&(o.colors=!1),x(o.customInspect)&&(o.customInspect=!0),o.colors&&(o.stylize=u),p(o,t,o.depth)}function u(t,e){var r=d.styles[e];return r?"["+d.colors[r][0]+"m"+t+"["+d.colors[r][1]+"m":t}function h(t,e){return t}function p(t,r,o){if(t.customInspect&&r&&S(r.inspect)&&r.inspect!==e.inspect&&(!r.constructor||r.constructor.prototype!==r)){var n=r.inspect(o,t);return b(n)||(n=p(t,n,o)),n}var i=function(t,e){if(x(e))return t.stylize("undefined","undefined");if(b(e)){var r="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(r,"string")}return y(e)?t.stylize(""+e,"number"):g(e)?t.stylize(""+e,"boolean"):v(e)?t.stylize("null","null"):void 0}(t,r);if(i)return i;var s=Object.keys(r),a=function(t){var e={};return t.forEach((function(t,r){e[t]=!0})),e}(s);if(t.showHidden&&(s=Object.getOwnPropertyNames(r)),E(r)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return m(r);if(0===s.length){if(S(r)){var l=r.name?": "+r.name:"";return t.stylize("[Function"+l+"]","special")}if(w(r))return t.stylize(RegExp.prototype.toString.call(r),"regexp");if(A(r))return t.stylize(Date.prototype.toString.call(r),"date");if(E(r))return m(r)}var c,d="",u=!1,h=["{","}"];return _(r)&&(u=!0,h=["[","]"]),S(r)&&(d=" [Function"+(r.name?": "+r.name:"")+"]"),w(r)&&(d=" "+RegExp.prototype.toString.call(r)),A(r)&&(d=" "+Date.prototype.toUTCString.call(r)),E(r)&&(d=" "+m(r)),0!==s.length||u&&0!=r.length?o<0?w(r)?t.stylize(RegExp.prototype.toString.call(r),"regexp"):t.stylize("[Object]","special"):(t.seen.push(r),c=u?function(t,e,r,o,n){for(var i=[],s=0,a=e.length;s<a;++s)T(e,String(s))?i.push(f(t,e,r,o,String(s),!0)):i.push("");return n.forEach((function(n){n.match(/^\d+$/)||i.push(f(t,e,r,o,n,!0))})),i}(t,r,o,a,s):s.map((function(e){return f(t,r,o,a,e,u)})),t.seen.pop(),function(t,e,r){return t.reduce((function(t,e){return e.indexOf("\n"),t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60?r[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+r[1]:r[0]+e+" "+t.join(", ")+" "+r[1]}(c,d,h)):h[0]+d+h[1]}function m(t){return"["+Error.prototype.toString.call(t)+"]"}function f(t,e,r,o,n,i){var s,a,l;if((l=Object.getOwnPropertyDescriptor(e,n)||{value:e[n]}).get?a=l.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):l.set&&(a=t.stylize("[Setter]","special")),T(o,n)||(s="["+n+"]"),a||(t.seen.indexOf(l.value)<0?(a=v(r)?p(t,l.value,null):p(t,l.value,r-1)).indexOf("\n")>-1&&(a=i?a.split("\n").map((function(t){return"  "+t})).join("\n").slice(2):"\n"+a.split("\n").map((function(t){return"   "+t})).join("\n")):a=t.stylize("[Circular]","special")),x(s)){if(i&&n.match(/^\d+$/))return a;(s=JSON.stringify(""+n)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.slice(1,-1),s=t.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=t.stylize(s,"string"))}return s+": "+a}function _(t){return Array.isArray(t)}function g(t){return"boolean"==typeof t}function v(t){return null===t}function y(t){return"number"==typeof t}function b(t){return"string"==typeof t}function x(t){return void 0===t}function w(t){return C(t)&&"[object RegExp]"===P(t)}function C(t){return"object"==typeof t&&null!==t}function A(t){return C(t)&&"[object Date]"===P(t)}function E(t){return C(t)&&("[object Error]"===P(t)||t instanceof Error)}function S(t){return"function"==typeof t}function P(t){return Object.prototype.toString.call(t)}function O(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(t){if(t=t.toUpperCase(),!a[t])if(l.test(t)){var r=o.pid;a[t]=function(){var o=e.format.apply(e,arguments);n.error("%s %d: %s",t,r,o)}}else a[t]=function(){};return a[t]},e.inspect=d,d.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},d.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.types=r(5955),e.isArray=_,e.isBoolean=g,e.isNull=v,e.isNullOrUndefined=function(t){return null==t},e.isNumber=y,e.isString=b,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=x,e.isRegExp=w,e.types.isRegExp=w,e.isObject=C,e.isDate=A,e.types.isDate=A,e.isError=E,e.types.isNativeError=E,e.isFunction=S,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=r(384);var I=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function T(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){var t,r;n.log("%s - %s",(r=[O((t=new Date).getHours()),O(t.getMinutes()),O(t.getSeconds())].join(":"),[t.getDate(),I[t.getMonth()],r].join(" ")),e.format.apply(e,arguments))},e.inherits=r(5717),e._extend=function(t,e){if(!e||!C(e))return t;for(var r=Object.keys(e),o=r.length;o--;)t[r[o]]=e[r[o]];return t};var k="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function z(t,e){if(!t){var r=new Error("Promise was rejected with a falsy value");r.reason=t,t=r}return e(t)}e.promisify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');if(k&&t[k]){var e;if("function"!=typeof(e=t[k]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,k,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,r,o=new Promise((function(t,o){e=t,r=o})),n=[],i=0;i<arguments.length;i++)n.push(arguments[i]);n.push((function(t,o){t?r(t):e(o)}));try{t.apply(this,n)}catch(t){r(t)}return o}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),k&&Object.defineProperty(e,k,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,i(t))},e.promisify.custom=k,e.callbackify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');function e(){for(var e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);var n=e.pop();if("function"!=typeof n)throw new TypeError("The last argument must be of type Function");var i=this,s=function(){return n.apply(i,arguments)};t.apply(this,e).then((function(t){o.nextTick(s.bind(null,null,t))}),(function(t){o.nextTick(z.bind(null,t,s))}))}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),Object.defineProperties(e,i(t)),e}},6430:function(t,e,r){"use strict";var o=r(4029),n=r(3083),i=r(1924),s=r(7296),a=i("Object.prototype.toString"),l=r(6410)(),c="undefined"==typeof globalThis?r.g:globalThis,d=n(),u=i("String.prototype.slice"),h={},p=Object.getPrototypeOf;l&&s&&p&&o(d,(function(t){if("function"==typeof c[t]){var e=new c[t];if(Symbol.toStringTag in e){var r=p(e),o=s(r,Symbol.toStringTag);if(!o){var n=p(r);o=s(n,Symbol.toStringTag)}h[t]=o.get}}}));var m=r(5692);t.exports=function(t){return!!m(t)&&(l&&Symbol.toStringTag in t?function(t){var e=!1;return o(h,(function(r,o){if(!e)try{var n=r.call(t);n===o&&(e=n)}catch(t){}})),e}(t):u(a(t),8,-1))}},3083:function(t,e,r){"use strict";var o=["BigInt64Array","BigUint64Array","Float32Array","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Uint8Array","Uint8ClampedArray"],n="undefined"==typeof globalThis?r.g:globalThis;t.exports=function(){for(var t=[],e=0;e<o.length;e++)"function"==typeof n[o[e]]&&(t[t.length]=o[e]);return t}},2146:function(t,e,r){"use strict";r(1195),r(9416),r(4173);var o=r(5128);(0,o.hC)("vaadin-app-layout",o.iv`
    [part='navbar']::before {
      background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    }

    :host(:not([dir='rtl']):not([overlay])) [part='drawer'] {
      border-right: 1px solid var(--lumo-contrast-10pct);
    }

    :host([dir='rtl']:not([overlay])) [part='drawer'] {
      border-left: 1px solid var(--lumo-contrast-10pct);
    }

    :host([overlay]) [part='drawer']::before {
      background: var(--lumo-base-color);
    }

    [part='navbar']::before,
    :host([overlay]) [part='drawer']::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    :host([overlay]) [part='drawer']::before {
      background: var(--lumo-base-color);
      height: var(--_vaadin-app-layout-drawer-scroll-size, 100%);
    }

    [part='backdrop'] {
      background-color: var(--lumo-shade-20pct);
      opacity: 1;
    }

    [part] ::slotted(h2),
    [part] ::slotted(h3),
    [part] ::slotted(h4) {
      margin-top: var(--lumo-space-xs) !important;
      margin-bottom: var(--lumo-space-xs) !important;
    }

    @supports (-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)) {
      [part='navbar']::before {
        opacity: 0.8;
      }

      [part='navbar'] {
        -webkit-backdrop-filter: blur(24px);
        backdrop-filter: blur(24px);
      }

      :host([overlay]) [part='drawer']::before {
        opacity: 0.9;
      }

      :host([overlay]) [part='drawer'] {
        -webkit-backdrop-filter: blur(24px);
        backdrop-filter: blur(24px);
      }
    }
  `,{moduleId:"lumo-app-layout"});const n=document.createElement("template");n.innerHTML="\n  <style>\n    /* Use units so that the values can be used in calc() */\n    html {\n      --safe-area-inset-top: env(safe-area-inset-top, 0px);\n      --safe-area-inset-right: env(safe-area-inset-right, 0px);\n      --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);\n      --safe-area-inset-left: env(safe-area-inset-left, 0px);\n    }\n  </style>\n",document.head.appendChild(n.content);var i=r(1037);function s(){if(i.gn){const t=window.innerHeight,e=window.innerWidth>t,r=document.documentElement.clientHeight;e&&r>t?document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom",r-t+"px"):document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom","")}}s(),window.addEventListener("resize",s);var a=r(5557),l=r(2223),c=r(1665),d=r(6155),u=r(2521),h=r(1732);class p extends((0,u.S)((0,o.Tb)((0,d.k)(c.H3)))){static get template(){return c.dy`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          height: 100%;
          --vaadin-app-layout-transition: 200ms;
          transition: padding var(--vaadin-app-layout-transition);
          --vaadin-app-layout-touch-optimized: false;
          --vaadin-app-layout-navbar-offset-top: var(--_vaadin-app-layout-navbar-offset-size);
          --vaadin-app-layout-navbar-offset-bottom: var(--_vaadin-app-layout-navbar-offset-size-bottom);
          padding-top: var(--vaadin-app-layout-navbar-offset-top);
          padding-bottom: var(--vaadin-app-layout-navbar-offset-bottom);
          padding-left: var(--vaadin-app-layout-navbar-offset-left);
        }

        :host([dir='rtl']) {
          padding-left: 0;
          padding-right: var(--vaadin-app-layout-navbar-offset-left);
        }

        :host([hidden]),
        [hidden] {
          display: none !important;
        }

        :host([no-anim]) {
          --vaadin-app-layout-transition: none !important;
        }

        :host([drawer-opened]) {
          --vaadin-app-layout-drawer-offset-left: var(--_vaadin-app-layout-drawer-offset-size);
        }

        :host([overlay]) {
          --vaadin-app-layout-drawer-offset-left: 0;
          --vaadin-app-layout-navbar-offset-left: 0;
        }

        :host(:not([no-scroll])) [content] {
          overflow: auto;
        }

        [content] {
          height: 100%;
        }

        @media (pointer: coarse) and (max-width: 800px) and (min-height: 500px) {
          :host {
            --vaadin-app-layout-touch-optimized: true;
          }
        }

        [part='navbar'],
        [part='navbar']::before {
          position: fixed;
          display: flex;
          align-items: center;
          top: 0;
          right: 0;
          left: 0;
          transition: left var(--vaadin-app-layout-transition);
          padding-top: var(--safe-area-inset-top);
          padding-left: var(--safe-area-inset-left);
          padding-right: var(--safe-area-inset-right);
          z-index: 1;
        }

        :host(:not([dir='rtl'])[primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {
          left: var(--vaadin-app-layout-drawer-offset-left, 0);
        }

        :host([dir='rtl'][primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {
          right: var(--vaadin-app-layout-drawer-offset-left, 0);
        }

        :host([primary-section='drawer']) [part='drawer'] {
          top: 0;
        }

        [part='navbar'][bottom] {
          top: auto;
          bottom: 0;
          padding-bottom: var(--safe-area-inset-bottom);
        }

        [part='drawer'] {
          overflow: auto;
          position: fixed;
          top: var(--vaadin-app-layout-navbar-offset-top, 0);
          right: auto;
          bottom: var(--vaadin-app-layout-navbar-offset-bottom, var(--vaadin-viewport-offset-bottom, 0));
          left: var(--vaadin-app-layout-navbar-offset-left, 0);
          transition: transform var(--vaadin-app-layout-transition), visibility var(--vaadin-app-layout-transition);
          transform: translateX(-100%);
          max-width: 90%;
          width: 16em;
          box-sizing: border-box;
          padding: var(--safe-area-inset-top) 0 var(--safe-area-inset-bottom) var(--safe-area-inset-left);
          outline: none;
          /* The drawer should be inaccessible by the tabbing navigation when it is closed. */
          visibility: hidden;
        }

        :host([drawer-opened]) [part='drawer'] {
          /* The drawer should be accessible by the tabbing navigation when it is opened. */
          visibility: visible;
          transform: translateX(0%);
          touch-action: manipulation;
        }

        [part='backdrop'] {
          background-color: #000;
          opacity: 0.3;
        }

        :host(:not([drawer-opened])) [part='backdrop'] {
          opacity: 0;
        }

        :host([overlay]) [part='backdrop'] {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          pointer-events: none;
          transition: opacity var(--vaadin-app-layout-transition);
          -webkit-tap-highlight-color: transparent;
        }

        :host([overlay]) [part='drawer'] {
          top: 0;
          bottom: 0;
        }

        :host([overlay]) [part='drawer'],
        :host([overlay]) [part='backdrop'] {
          z-index: 2;
        }

        :host([drawer-opened][overlay]) [part='backdrop'] {
          pointer-events: auto;
          touch-action: manipulation;
        }

        :host([dir='rtl']) [part='drawer'] {
          left: auto;
          right: var(--vaadin-app-layout-navbar-offset-start, 0);
          transform: translateX(100%);
        }

        :host([dir='rtl']) [part='navbar'],
        :host([dir='rtl']) [part='navbar']::before {
          transition: right var(--vaadin-app-layout-transition);
        }

        :host([dir='rtl'][drawer-opened]) [part='drawer'] {
          transform: translateX(0%);
        }

        :host(:not([dir='rtl'])[drawer-opened]:not([overlay])) {
          padding-left: var(--vaadin-app-layout-drawer-offset-left);
        }

        :host([dir='rtl'][drawer-opened]:not([overlay])) {
          padding-right: var(--vaadin-app-layout-drawer-offset-left);
        }

        @media (max-width: 800px), (max-height: 600px) {
          :host {
            --vaadin-app-layout-drawer-overlay: true;
          }

          [part='drawer'] {
            width: 20em;
          }
        }
      </style>
      <div part="navbar" id="navbarTop">
        <slot name="navbar"></slot>
      </div>
      <div part="backdrop" on-click="_onBackdropClick" on-touchend="_onBackdropTouchend"></div>
      <div part="drawer" id="drawer" on-keydown="__onDrawerKeyDown">
        <slot name="drawer" id="drawerSlot"></slot>
      </div>
      <div content>
        <slot></slot>
      </div>
      <div part="navbar" id="navbarBottom" bottom hidden>
        <slot name="navbar-bottom"></slot>
      </div>
      <div hidden><slot id="touchSlot" name="navbar touch-optimized"></slot></div>
    `}static get is(){return"vaadin-app-layout"}static get properties(){return{i18n:{type:Object,observer:"__i18nChanged",value:()=>({drawer:"Drawer"})},primarySection:{type:String,value:"navbar",notify:!0,reflectToAttribute:!0,observer:"__primarySectionChanged"},drawerOpened:{type:Boolean,notify:!0,value:!0,reflectToAttribute:!0,observer:"__drawerOpenedChanged"},overlay:{type:Boolean,notify:!0,readOnly:!0,value:!1,reflectToAttribute:!0},closeDrawerOn:{type:String,value:"vaadin-router-location-changed",observer:"_closeDrawerOnChanged"}}}static dispatchCloseOverlayDrawerEvent(){window.dispatchEvent(new CustomEvent("close-overlay-drawer"))}constructor(){super(),this.__boundResizeListener=this._resize.bind(this),this.__drawerToggleClickListener=this._drawerToggleClick.bind(this),this.__closeOverlayDrawerListener=this.__closeOverlayDrawer.bind(this),this.__trapFocusInDrawer=this.__trapFocusInDrawer.bind(this),this.__releaseFocusFromDrawer=this.__releaseFocusFromDrawer.bind(this),this.__focusTrapController=new h.f(this)}connectedCallback(){super.connectedCallback(),this._blockAnimationUntilAfterNextRender(),window.addEventListener("resize",this.__boundResizeListener),this.addEventListener("drawer-toggle-click",this.__drawerToggleClickListener),(0,l.Zw)(this,this._afterFirstRender),this._updateTouchOptimizedMode();const t=this.$.navbarTop.firstElementChild;this._navbarChildObserver=new a.o(t,(()=>{this._updateTouchOptimizedMode()})),this._touchChildObserver=new a.o(this.$.touchSlot,(()=>{this._updateTouchOptimizedMode()})),this._drawerChildObserver=new a.o(this.$.drawerSlot,(()=>{this._updateDrawerSize()})),this._updateDrawerSize(),this._updateOverlayMode(),this._navbarSizeObserver=new ResizeObserver((()=>{this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()})),this._navbarSizeObserver.observe(this.$.navbarTop),this._navbarSizeObserver.observe(this.$.navbarBottom),window.addEventListener("close-overlay-drawer",this.__closeOverlayDrawerListener)}ready(){super.ready(),this.addController(this.__focusTrapController),this.__setAriaExpanded()}disconnectedCallback(){super.disconnectedCallback(),this._navbarChildObserver&&this._navbarChildObserver.disconnect(),this._drawerChildObserver&&this._drawerChildObserver.disconnect(),this._touchChildObserver&&this._touchChildObserver.disconnect(),window.removeEventListener("resize",this.__boundResizeListener),this.removeEventListener("drawer-toggle-click",this.__drawerToggleClickListener),window.removeEventListener("close-overlay-drawer",this.__drawerToggleClickListener)}__primarySectionChanged(t){["navbar","drawer"].includes(t)||this.set("primarySection","navbar")}__drawerOpenedChanged(t,e){this.overlay&&(t?(this._updateDrawerHeight(),this.__trapFocusInDrawer()):e&&this.__releaseFocusFromDrawer()),this.__setAriaExpanded()}__i18nChanged(){this.__updateDrawerAriaAttributes()}_afterFirstRender(){this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}_drawerToggleClick(t){t.stopPropagation(),this.drawerOpened=!this.drawerOpened}__closeOverlayDrawer(){this.overlay&&(this.drawerOpened=!1)}__setAriaExpanded(){const t=this.querySelector("vaadin-drawer-toggle");t&&t.setAttribute("aria-expanded",this.drawerOpened)}_updateDrawerSize(){const t=this.querySelectorAll("[slot=drawer]").length,e=this.$.drawer;0===t?e.setAttribute("hidden",""):e.removeAttribute("hidden"),this._updateOffsetSize()}_resize(){this._blockAnimationUntilAfterNextRender(),this._updateTouchOptimizedMode(),this._updateOverlayMode()}_updateOffsetSize(){const t=this.$.navbarTop.getBoundingClientRect(),e=this.$.navbarBottom.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-navbar-offset-size",`${t.height}px`),this.style.setProperty("--_vaadin-app-layout-navbar-offset-size-bottom",`${e.height}px`);const r=this.$.drawer.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-drawer-offset-size",`${r.width}px`)}_updateDrawerHeight(){const{scrollHeight:t,offsetHeight:e}=this.$.drawer,r=t>e?`${t}px`:"100%";this.style.setProperty("--_vaadin-app-layout-drawer-scroll-size",r)}_updateOverlayMode(){const t="true"===this._getCustomPropertyValue("--vaadin-app-layout-drawer-overlay");!this.overlay&&t&&(this._drawerStateSaved=this.drawerOpened,this.drawerOpened=!1),this._setOverlay(t),!this.overlay&&this._drawerStateSaved&&(this.drawerOpened=this._drawerStateSaved,this._drawerStateSaved=null),this._updateDrawerHeight(),this.__updateDrawerAriaAttributes()}__updateDrawerAriaAttributes(){const t=this.$.drawer;this.overlay?(t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label",this.i18n.drawer)):(t.removeAttribute("role"),t.removeAttribute("aria-modal"),t.removeAttribute("aria-label"))}__drawerTransitionComplete(){return new Promise((t=>{"none"!==this._getCustomPropertyValue("--vaadin-app-layout-transition")?this.$.drawer.addEventListener("transitionend",t,{once:!0}):t()}))}async __trapFocusInDrawer(){await this.__drawerTransitionComplete(),this.drawerOpened&&(this.$.drawer.setAttribute("tabindex","0"),this.__focusTrapController.trapFocus(this.$.drawer))}async __releaseFocusFromDrawer(){if(await this.__drawerTransitionComplete(),this.drawerOpened)return;this.__focusTrapController.releaseFocus(),this.$.drawer.removeAttribute("tabindex");const t=this.querySelector("vaadin-drawer-toggle");t&&(t.focus(),t.setAttribute("focus-ring","focus"))}__onDrawerKeyDown(t){"Escape"===t.key&&this.overlay&&(this.drawerOpened=!1)}_closeDrawerOnChanged(t,e){e&&window.removeEventListener(e,this.__closeOverlayDrawerListener),t&&window.addEventListener(t,this.__closeOverlayDrawerListener)}_onBackdropClick(){this._close()}_onBackdropTouchend(t){t.preventDefault(),this._close()}_close(){this.drawerOpened=!1}_getCustomPropertyValue(t){return(getComputedStyle(this).getPropertyValue(t)||"").trim().toLowerCase()}_updateTouchOptimizedMode(){const t="true"===this._getCustomPropertyValue("--vaadin-app-layout-touch-optimized"),e=this.querySelectorAll('[slot*="navbar"]');e.length>0&&Array.from(e).forEach((e=>{e.getAttribute("slot").indexOf("touch-optimized")>-1&&(e.__touchOptimized=!0),t&&e.__touchOptimized?e.setAttribute("slot","navbar-bottom"):e.setAttribute("slot","navbar")})),0===this.$.navbarTop.querySelector("[name=navbar]").assignedNodes().length?this.$.navbarTop.setAttribute("hidden",""):this.$.navbarTop.removeAttribute("hidden"),t?this.$.navbarBottom.removeAttribute("hidden"):this.$.navbarBottom.setAttribute("hidden",""),this._updateOffsetSize()}_blockAnimationUntilAfterNextRender(){this.setAttribute("no-anim",""),(0,l.T8)(this,(()=>{this.removeAttribute("no-anim")}))}}customElements.define(p.is,p)},6253:function(t,e,r){"use strict";r(1195),r(9098),r(9416),r(9849),r(4173);var o=r(5128);const n=o.iv`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: calc(var(--lumo-button-size) * 2);
    height: var(--lumo-button-size);
    padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius-m) / 2);
    margin: var(--lumo-space-xs) 0;
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    color: var(--_lumo-button-color, var(--lumo-primary-text-color));
    background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Set only for the internal parts so we don't affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition: opacity 1.4s, transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  :host([theme~='primary'][focus-ring]) {
    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    background-color: transparent !important;
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    padding: 0 calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
    color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
    font-weight: 600;
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon),
  [part] ::slotted(iron-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']),
  [part] ::slotted(iron-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`;(0,o.hC)("vaadin-button",n,{moduleId:"lumo-button"});var i=r(1665),s=r(6155),a=r(2521),l=r(4463),c=r(354),d=r(2527),u=r(4062);const h=t=>class extends((0,c.D)((0,u.N)((0,d.W)(t)))){static get properties(){return{tabindex:{value:0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(t){super._onKeyDown(t),this._activeKeys.includes(t.key)&&(t.preventDefault(),this.click())}};class p extends(h((0,a.S)((0,o.Tb)((0,s.k)(i.H3))))){static get is(){return"vaadin-button"}static get template(){return i.dy`
      <style>
        :host {
          display: inline-block;
          position: relative;
          outline: none;
          white-space: nowrap;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Aligns the button with form fields when placed on the same line.
          Note, to make it work, the form fields should have the same "::before" pseudo-element. */
        .vaadin-button-container::before {
          content: '\\2003';
          display: inline-block;
          width: 0;
          max-height: 100%;
        }

        .vaadin-button-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 100%;
          height: 100%;
          min-height: inherit;
          text-shadow: inherit;
        }

        [part='prefix'],
        [part='suffix'] {
          flex: none;
        }

        [part='label'] {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>
      <div class="vaadin-button-container">
        <span part="prefix" aria-hidden="true">
          <slot name="prefix"></slot>
        </span>
        <span part="label">
          <slot></slot>
        </span>
        <span part="suffix" aria-hidden="true">
          <slot name="suffix"></slot>
        </span>
      </div>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new l.f(this),this.addController(this._tooltipController)}}customElements.define(p.is,p)},4501:function(t,e,r){"use strict";r(6545),r(1195),r(9098),r(9416),r(9849),r(4173);var o=r(2982),n=r(1251),i=r(5128);const s=i.iv`
  :host {
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    /* Effective height of vaadin-checkbox */
    height: var(--lumo-size-s);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([theme~='vertical']) [part='group-field'] {
    display: flex;
    flex-direction: column;
  }

  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([focused]:not([disabled])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([disabled]):not([focused])) [part='label'],
  :host(:hover:not([disabled]):not([focused])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([disabled]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }
`;(0,i.hC)("vaadin-checkbox-group",[n.l,o._,s],{moduleId:"lumo-checkbox-group"});var a=r(5557),l=r(1665),c=r(4408),d=r(1598),u=r(2521),h=r(2527),p=r(4463),m=r(8037),f=r(5108);class _ extends((0,m.f)((0,h.W)((0,d.f)((0,u.S)((0,i.Tb)(l.H3)))))){static get is(){return"vaadin-checkbox-group"}static get template(){return l.dy`
      <style>
        :host {
          display: inline-flex;
        }

        :host::before {
          content: '\\2003';
          width: 0;
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        .vaadin-group-field-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        :host(:not([has-label])) [part='label'] {
          display: none;
        }
      </style>

      <div class="vaadin-group-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div part="group-field">
          <slot></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{value:{type:Array,value:()=>[],notify:!0,observer:"__valueChanged"}}}constructor(){super(),this.__registerCheckbox=this.__registerCheckbox.bind(this),this.__unregisterCheckbox=this.__unregisterCheckbox.bind(this),this.__onCheckboxCheckedChanged=this.__onCheckboxCheckedChanged.bind(this)}ready(){super.ready(),this.ariaTarget=this,this.setAttribute("role","group"),this._observer=new a.o(this,(({addedNodes:t,removedNodes:e})=>{const r=this.__filterCheckboxes(t),o=this.__filterCheckboxes(e);r.forEach(this.__registerCheckbox),o.forEach(this.__unregisterCheckbox),this.__warnOfCheckboxesWithoutValue(r)})),this._tooltipController=new p.f(this),this.addController(this._tooltipController)}checkValidity(){return!this.required||this.value.length>0}__filterCheckboxes(t){return t.filter((t=>t instanceof c.X))}get __checkboxes(){return this.__filterCheckboxes([...this.children])}__warnOfCheckboxesWithoutValue(t){t.some((t=>{const{value:e}=t;return!(t.hasAttribute("value")||e&&"on"!==e)}))&&f.warn("Please provide the value attribute to all the checkboxes inside the checkbox group.")}__registerCheckbox(t){t.addEventListener("checked-changed",this.__onCheckboxCheckedChanged),this.disabled&&(t.disabled=!0),t.checked?this.__addCheckboxToValue(t.value):this.value.includes(t.value)&&(t.checked=!0)}__unregisterCheckbox(t){t.removeEventListener("checked-changed",this.__onCheckboxCheckedChanged),t.checked&&this.__removeCheckboxFromValue(t.value)}_disabledChanged(t,e){super._disabledChanged(t,e),(t||void 0!==e)&&e!==t&&this.__checkboxes.forEach((e=>{e.disabled=t}))}__addCheckboxToValue(t){this.value.includes(t)||(this.value=[...this.value,t])}__removeCheckboxFromValue(t){this.value.includes(t)&&(this.value=this.value.filter((e=>e!==t)))}__onCheckboxCheckedChanged(t){const e=t.target;e.checked?this.__addCheckboxToValue(e.value):this.__removeCheckboxFromValue(e.value)}__valueChanged(t,e){0===t.length&&void 0===e||(this.toggleAttribute("has-value",t.length>0),this.__checkboxes.forEach((e=>{e.checked=t.includes(e.value)})),void 0!==e&&this.validate())}_shouldRemoveFocus(t){return!this.contains(t.relatedTarget)}_setFocused(t){super._setFocused(t),t||this.validate()}}customElements.define(_.is,_)},4408:function(t,e,r){"use strict";r.d(e,{X:function(){return x}});var o=r(1665),n=r(354),i=r(6155),s=r(2521),a=r(4463),l=r(1014),c=r(1598),d=r(4530),u=r(167),h=r(6326);const p=(0,l.o)((t=>class extends((0,u.A)((0,c.f)((0,h.J)(t)))){static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"checked"]}_onChange(t){const e=t.target;this._toggleChecked(e.checked),(0,d.Qw)(e)||e.focus()}_toggleChecked(t){this.checked=t}}));var m=r(1987),f=r(993),_=r(6821),g=r(6729);class v{constructor(t,e,r){this.sourceSlot=t,this.targetFactory=e,this.copyCallback=r,t&&t.addEventListener("slotchange",(()=>{this.__copying?this.__copying=!1:this.__checkAndCopyNodesToSlotTarget()}))}hostConnected(){this.__sourceSlotObserver=new MutationObserver((()=>this.__checkAndCopyNodesToSlotTarget())),this.__copying||this.__checkAndCopyNodesToSlotTarget()}__checkAndCopyNodesToSlotTarget(){this.__sourceSlotObserver.disconnect();const t=this.targetFactory();if(!t)return;this.__slotTargetClones&&(this.__slotTargetClones.forEach((e=>{e.parentElement===t&&t.removeChild(e)})),delete this.__slotTargetClones);const e=this.sourceSlot.assignedNodes({flatten:!0}).filter((t=>!(t.nodeType===Node.TEXT_NODE&&""===t.textContent.trim())));e.length>0&&(t.innerHTML="",this.__copying=!0,this.__copyNodesToSlotTarget(e,t))}__copyNodesToSlotTarget(t,e){this.__slotTargetClones=this.__slotTargetClones||[],t.forEach((t=>{const r=t.cloneNode(!0);this.__slotTargetClones.push(r),e.appendChild(r),this.__sourceSlotObserver.observe(t,{attributes:!0,childList:!0,subtree:!0,characterData:!0})})),"function"==typeof this.copyCallback&&this.copyCallback(t)}}var y=r(5128),b=r(5108);class x extends((0,_.h)(p((0,m.B)((0,n.D)((0,s.S)((0,y.Tb)((0,i.k)(o.H3)))))))){static get is(){return"vaadin-checkbox"}static get template(){return o.dy`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([disabled]) {
          -webkit-tap-highlight-color: transparent;
        }

        .vaadin-checkbox-container {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: baseline;
        }

        [part='checkbox'],
        ::slotted(input),
        ::slotted(label) {
          grid-row: 1;
        }

        [part='checkbox'],
        ::slotted(input) {
          grid-column: 1;
        }

        [part='checkbox'] {
          width: var(--vaadin-checkbox-size, 1em);
          height: var(--vaadin-checkbox-size, 1em);
        }

        [part='checkbox']::before {
          display: block;
          content: '\\202F';
          line-height: var(--vaadin-checkbox-size, 1em);
          contain: paint;
        }

        /* visually hidden */
        ::slotted(input) {
          opacity: 0;
          cursor: inherit;
          margin: 0;
          align-self: stretch;
          -webkit-appearance: none;
        }
      </style>
      <div class="vaadin-checkbox-container">
        <div part="checkbox"></div>
        <slot name="input"></slot>
        <slot name="label"></slot>

        <div style="display: none !important">
          <slot id="noop"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}static get properties(){return{indeterminate:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},name:{type:String,value:""}}}static get delegateProps(){return[...super.delegateProps,"indeterminate"]}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("checkbox"),this.value="on"}ready(){super.ready(),this.addController(new f.b(this,(t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t}))),this.addController(new g.v(this.inputElement,this._labelController)),this.addController(new v(this.$.noop,(()=>this._labelController.node),(()=>this.__warnDeprecated()))),this._tooltipController=new a.f(this),this.addController(this._tooltipController)}__warnDeprecated(){b.warn('WARNING: Since Vaadin 22, placing the label as a direct child of a <vaadin-checkbox> is deprecated.\nPlease use <label slot="label"> wrapper or the label property instead.')}_shouldSetActive(t){return"a"!==t.target.localName&&super._shouldSetActive(t)}_toggleChecked(t){this.indeterminate&&(this.indeterminate=!1),super._toggleChecked(t)}}customElements.define(x.is,x)},6545:function(t,e,r){"use strict";r(1195),r(1735),r(9098),r(9416),r(9849),r(4173);var o=r(5128);(0,o.hC)("vaadin-checkbox",o.iv`
    :host {
      color: var(--lumo-body-text-color);
      font-size: var(--lumo-font-size-m);
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
      --_checkbox-size: var(--vaadin-checkbox-size, calc(var(--lumo-size-m) / 2));
    }

    :host([has-label]) ::slotted(label) {
      padding-block: var(--lumo-space-xs);
      padding-inline: var(--lumo-space-xs) var(--lumo-space-s);
    }

    [part='checkbox'] {
      width: var(--_checkbox-size);
      height: var(--_checkbox-size);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-20pct);
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      cursor: var(--lumo-clickable-cursor);
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--lumo-primary-color);
    }

    /* Checkmark */
    [part='checkbox']::after {
      pointer-events: none;
      font-family: 'lumo-icons';
      content: var(--lumo-icons-checkmark);
      color: var(--lumo-primary-contrast-color);
      font-size: calc(var(--_checkbox-size) + 2px);
      line-height: 1;
      position: absolute;
      top: -1px;
      left: -1px;
      contain: content;
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      content: '';
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='checkbox']::after {
      color: var(--lumo-contrast-30pct);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      pointer-events: none;
      color: transparent;
      width: 100%;
      height: 100%;
      line-height: var(--_checkbox-size);
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
      background-color: var(--lumo-contrast-30pct);
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
        background-color: var(--lumo-contrast-20pct);
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }
  `,{moduleId:"lumo-checkbox"}),r(4408)},3092:function(t,e,r){"use strict";r(6545),r(4408)},354:function(t,e,r){"use strict";r.d(e,{D:function(){return D}});var o=r(1598),n=r(7913);const i=!1,s=t=>t,a="string"==typeof document.head.style.touchAction,l="__polymerGestures",c="__polymerGesturesHandled",d="__polymerGesturesTouchAction",u=25,h=5,p=["mousedown","mousemove","mouseup","click"],m=[0,1,4,2],f=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function _(t){return p.indexOf(t)>-1}let g=!1;function v(t){if(!_(t)&&"touchend"!==t)return a&&g&&i?{passive:!0}:void 0}!function(){try{const t=Object.defineProperty({},"passive",{get(){g=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();const y=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),b={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function x(t){const e=t.type;if(!_(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!f&&(e=m[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}const w={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function C(t,e,r){t.movefn=e,t.upfn=r,document.addEventListener("mousemove",e),document.addEventListener("mouseup",r)}function A(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}const E=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],S={},P=[];function O(t){const e=E(t);return e.length>0?e[0]:t.target}function I(t){const e=t.type,r=t.currentTarget[l];if(!r)return;const o=r[e];if(!o)return;if(!t[c]&&(t[c]={},e.startsWith("touch"))){const r=t.changedTouches[0];if("touchstart"===e&&1===t.touches.length&&(w.touch.id=r.identifier),w.touch.id!==r.identifier)return;a||"touchstart"!==e&&"touchmove"!==e||function(t){const e=t.changedTouches[0],r=t.type;if("touchstart"===r)w.touch.x=e.clientX,w.touch.y=e.clientY,w.touch.scrollDecided=!1;else if("touchmove"===r){if(w.touch.scrollDecided)return;w.touch.scrollDecided=!0;const r=function(t){let e="auto";const r=E(t);for(let t,o=0;o<r.length;o++)if(t=r[o],t[d]){e=t[d];break}return e}(t);let o=!1;const n=Math.abs(w.touch.x-e.clientX),i=Math.abs(w.touch.y-e.clientY);t.cancelable&&("none"===r?o=!0:"pan-x"===r?o=i>n:"pan-y"===r&&(o=n>i)),o?t.preventDefault():N("track")}}(t)}const n=t[c];if(!n.skip){for(let e,r=0;r<P.length;r++)e=P[r],o[e.name]&&!n[e.name]&&e.flow&&e.flow.start.indexOf(t.type)>-1&&e.reset&&e.reset();for(let r,i=0;i<P.length;i++)r=P[i],o[r.name]&&!n[r.name]&&(n[r.name]=!0,r[e](t))}}function T(t,e,r){return!!S[e]&&(function(t,e,r){const o=S[e],i=o.deps,s=o.name;let c=t[l];c||(t[l]=c={});for(let e,r,o=0;o<i.length;o++)e=i[o],y&&_(e)&&"click"!==e||(r=c[e],r||(c[e]=r={_count:0}),0===r._count&&t.addEventListener(e,I,v(e)),r[s]=(r[s]||0)+1,r._count=(r._count||0)+1);t.addEventListener(e,r),o.touchAction&&function(t,e){a&&t instanceof HTMLElement&&n.YA.run((()=>{t.style.touchAction=e})),t[d]=e}(t,o.touchAction)}(t,e,r),!0)}function k(t){P.push(t);for(let e=0;e<t.emits.length;e++)S[t.emits[e]]=t}function z(t,e,r){const o=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(o.detail=r,s(t).dispatchEvent(o),o.defaultPrevented){const t=r.preventer||r.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function N(t){const e=function(t){for(let e,r=0;r<P.length;r++){e=P[r];for(let r,o=0;o<e.emits.length;o++)if(r=e.emits[o],r===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function L(t,e,r,o){e&&z(e,t,{x:r.clientX,y:r.clientY,sourceEvent:r,preventer:o,prevent(t){return N(t)}})}function R(t,e,r){if(t.prevent)return!1;if(t.started)return!0;const o=Math.abs(t.x-e),n=Math.abs(t.y-r);return o>=h||n>=h}function M(t,e,r){if(!e)return;const o=t.moves[t.moves.length-2],n=t.moves[t.moves.length-1],i=n.x-t.x,s=n.y-t.y;let a,l=0;o&&(a=n.x-o.x,l=n.y-o.y),z(e,"track",{state:t.state,x:r.clientX,y:r.clientY,dx:i,dy:s,ddx:a,ddy:l,sourceEvent:r,hover(){return function(t,e){let r=document.elementFromPoint(t,e),o=r;for(;o&&o.shadowRoot&&!window.ShadyDOM;){const n=o;if(o=o.shadowRoot.elementFromPoint(t,e),n===o)break;o&&(r=o)}return r}(r.clientX,r.clientY)}})}function j(t,e,r){const o=Math.abs(e.clientX-t.x),n=Math.abs(e.clientY-t.y),i=O(r||e);!i||b[i.localName]&&i.hasAttribute("disabled")||(isNaN(o)||isNaN(n)||o<=u&&n<=u||function(t){if("click"===t.type){if(0===t.detail)return!0;const e=O(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;const r=e.getBoundingClientRect(),o=t.pageX,n=t.pageY;return!(o>=r.left&&o<=r.right&&n>=r.top&&n<=r.bottom)}return!1}(e))&&(t.prevent||z(i,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:r}))}k({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){A(this.info)},mousedown(t){if(!x(t))return;const e=O(t),r=this;C(this.info,(t=>{x(t)||(L("up",e,t),A(r.info))}),(t=>{x(t)&&L("up",e,t),A(r.info)})),L("down",e,t)},touchstart(t){L("down",O(t),t.changedTouches[0],t)},touchend(t){L("up",O(t),t.changedTouches[0],t)}}),k({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,A(this.info)},mousedown(t){if(!x(t))return;const e=O(t),r=this,o=t=>{const o=t.clientX,n=t.clientY;R(r.info,o,n)&&(r.info.state=r.info.started?"mouseup"===t.type?"end":"track":"start","start"===r.info.state&&N("tap"),r.info.addMove({x:o,y:n}),x(t)||(r.info.state="end",A(r.info)),e&&M(r.info,e,t),r.info.started=!0)};C(this.info,o,(t=>{r.info.started&&o(t),A(r.info)})),this.info.x=t.clientX,this.info.y=t.clientY},touchstart(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove(t){const e=O(t),r=t.changedTouches[0],o=r.clientX,n=r.clientY;R(this.info,o,n)&&("start"===this.info.state&&N("tap"),this.info.addMove({x:o,y:n}),M(this.info,e,r),this.info.state="track",this.info.started=!0)},touchend(t){const e=O(t),r=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:r.clientX,y:r.clientY}),M(this.info,e,r))}}),k({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(t){x(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click(t){x(t)&&j(this.info,t)},touchstart(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend(t){j(this.info,t.changedTouches[0],t)}});var V=r(602);const D=t=>class extends((0,o.f)((0,V.L)(t))){get _activeKeys(){return[" "]}ready(){super.ready(),T(this,"down",(t=>{this._shouldSetActive(t)&&this._setActive(!0)})),T(this,"up",(()=>{this._setActive(!1)}))}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(t){return!this.disabled}_onKeyDown(t){super._onKeyDown(t),this._shouldSetActive(t)&&this._activeKeys.includes(t.key)&&(this._setActive(!0),document.addEventListener("keyup",(t=>{this._activeKeys.includes(t.key)&&this._setActive(!1)}),{once:!0}))}_setActive(t){this.toggleAttribute("active",t)}}},7913:function(t,e,r){"use strict";r.d(e,{Wc:function(){return c},YA:function(){return h},rs:function(){return d},t$:function(){return u}});let o=0,n=0;const i=[];let s=0,a=!1;const l=document.createTextNode("");new window.MutationObserver((function(){a=!1;const t=i.length;for(let e=0;e<t;e++){const t=i[e];if(t)try{t()}catch(t){setTimeout((()=>{throw t}))}}i.splice(0,t),n+=t})).observe(l,{characterData:!0});const c={after(t){return{run(e){return window.setTimeout(e,t)},cancel(t){window.clearTimeout(t)}}},run(t,e){return window.setTimeout(t,e)},cancel(t){window.clearTimeout(t)}},d={run(t){return window.requestAnimationFrame(t)},cancel(t){window.cancelAnimationFrame(t)}},u={run(t){return window.requestIdleCallback?window.requestIdleCallback(t):window.setTimeout(t,16)},cancel(t){window.cancelIdleCallback?window.cancelIdleCallback(t):window.clearTimeout(t)}},h={run(t){a||(a=!0,l.textContent=s,s+=1),i.push(t);const e=o;return o+=1,e},cancel(t){const e=t-n;if(e>=0){if(!i[e])throw new Error(`invalid async handle: ${t}`);i[e]=null}}}},1037:function(t,e,r){"use strict";r.d(e,{G6:function(){return a},T:function(){return l},gn:function(){return s}});const o=t=>t.test(navigator.userAgent),n=t=>t.test(navigator.platform);o(/Android/),o(/Chrome/)&&/Google Inc/.test(navigator.vendor),o(/Firefox/);const i=n(/^iPad/)||n(/^Mac/)&&navigator.maxTouchPoints>1,s=n(/^iPhone/)||i,a=o(/^((?!chrome|android).)*safari/i),l=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(t){return!1}})()},6155:function(t,e,r){"use strict";r.d(e,{k:function(){return o}});const o=(0,r(1014).o)((t=>class extends t{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach((t=>{t.hostConnected&&t.hostConnected()}))}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach((t=>{t.hostDisconnected&&t.hostDisconnected()}))}addController(t){this.__controllers.add(t),void 0!==this.$&&this.isConnected&&t.hostConnected&&t.hostConnected()}removeController(t){this.__controllers.delete(t)}}))},6139:function(t,e,r){"use strict";r.d(e,{Ex:function(){return i},dx:function(){return o},yl:function(){return a}});class o{static debounce(t,e,r){return t instanceof o?t._cancelAsync():t=new o,t.setConfig(e,r),t}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run((()=>{this._timer=null,n.delete(this),this._callback()}))}cancel(){this.isActive()&&(this._cancelAsync(),n.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}}let n=new Set;function i(t){n.add(t)}function s(){const t=Boolean(n.size);return n.forEach((t=>{try{t.flush()}catch(t){setTimeout((()=>{throw t}))}})),t}const a=()=>{let t;do{t=s()}while(t)}},676:function(t,e,r){"use strict";r.d(e,{U:function(){return l}});class o{static detectScrollType(){const t=document.createElement("div");t.textContent="ABCD",t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t);let e="reverse";return t.scrollLeft>0?e="default":(t.scrollLeft=2,t.scrollLeft<2&&(e="negative")),document.body.removeChild(t),e}static getNormalizedScrollLeft(t,e,r){const{scrollLeft:o}=r;if("rtl"!==e||!t)return o;switch(t){case"negative":return r.scrollWidth-r.clientWidth+o;case"reverse":return r.scrollWidth-r.clientWidth-o;default:return o}}static setNormalizedScrollLeft(t,e,r,o){if("rtl"===e&&t)switch(t){case"negative":r.scrollLeft=r.clientWidth-r.scrollWidth+o;break;case"reverse":r.scrollLeft=r.scrollWidth-r.clientWidth-o;break;default:r.scrollLeft=o}else r.scrollLeft=o}}const n=[];let i;function s(t,e,r=t.getAttribute("dir")){e?t.setAttribute("dir",e):null!=r&&t.removeAttribute("dir")}function a(){return document.documentElement.getAttribute("dir")}new MutationObserver((function(){const t=a();n.forEach((e=>{s(e,t)}))})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const l=t=>class extends t{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:t=>t||"",toAttribute:t=>""===t?null:t}}}}static finalize(){super.finalize(),i||(i=o.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")&&!this.__restoreSubscription||(this.__subscribe(),s(this,a(),null))}attributeChangedCallback(t,e,r){if(super.attributeChangedCallback(t,e,r),"dir"!==t)return;const o=a(),i=r===o&&-1===n.indexOf(this),l=!r&&e&&-1===n.indexOf(this),c=r!==o&&e===o;i||l?(this.__subscribe(),s(this,o,r)):c&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=n.includes(this),this.__unsubscribe()}_valueToNodeAttribute(t,e,r){("dir"!==r||""!==e||t.hasAttribute("dir"))&&super._valueToNodeAttribute(t,e,r)}_attributeToProperty(t,e,r){"dir"!==t||e?super._attributeToProperty(t,e,r):this.dir=""}__subscribe(){n.includes(this)||n.push(this)}__unsubscribe(){n.includes(this)&&n.splice(n.indexOf(this),1)}__getNormalizedScrollLeft(t){return o.getNormalizedScrollLeft(i,this.getAttribute("dir")||"ltr",t)}__setNormalizedScrollLeft(t,e){return o.setNormalizedScrollLeft(i,this.getAttribute("dir")||"ltr",t,e)}}},1598:function(t,e,r){"use strict";r.d(e,{f:function(){return o}});const o=(0,r(1014).o)((t=>class extends t{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(t){this._setAriaDisabled(t)}_setAriaDisabled(t){t?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}}))},3726:function(t,e,r){"use strict";function o(t){const e=[];for(;t;){if(t.nodeType===Node.DOCUMENT_NODE){e.push(t);break}t.nodeType!==Node.DOCUMENT_FRAGMENT_NODE?t=t.assignedSlot?t.assignedSlot:t.parentNode:(e.push(t),t=t.host)}return e}function n(t){return t?new Set(t.split(" ")):new Set}function i(t){return[...t].join(" ")}function s(t,e,r){const o=n(t.getAttribute(e));o.add(r),t.setAttribute(e,i(o))}function a(t,e,r){const o=n(t.getAttribute(e));o.delete(r),0!==o.size?t.setAttribute(e,i(o)):t.removeAttribute(e)}r.d(e,{$2:function(){return s},AD:function(){return o},x_:function(){return a}})},2521:function(t,e,r){"use strict";r.d(e,{S:function(){return d}});var o=r(9387),n=r(7913),i=r(6139),s=r(676),a=r(5108);let l;(0,o.xj)(!1),window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){};const c=new Set,d=t=>class extends((0,s.U)(t)){static get version(){return"23.3.7"}static finalize(){super.finalize();const{is:t}=this;t&&!c.has(t)&&(window.Vaadin.registrations.push(this),c.add(t),window.Vaadin.developmentModeCallback&&(l=i.dx.debounce(l,n.t$,(()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()})),(0,i.Ex)(l)))}constructor(){super(),null===document.doctype&&a.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}}},2527:function(t,e,r){"use strict";r.d(e,{W:function(){return i}});var o=r(1014),n=r(4530);const i=(0,o.o)((t=>class extends t{get _keyboardActive(){return(0,n.LQ)()}ready(){this.addEventListener("focusin",(t=>{this._shouldSetFocus(t)&&this._setFocused(!0)})),this.addEventListener("focusout",(t=>{this._shouldRemoveFocus(t)&&this._setFocused(!1)})),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(t){this.toggleAttribute("focused",t),this.toggleAttribute("focus-ring",t&&this._keyboardActive)}_shouldSetFocus(t){return!0}_shouldRemoveFocus(t){return!0}}))},1732:function(t,e,r){"use strict";r.d(e,{f:function(){return i}});var o=r(4530);const n=[];class i{constructor(t){this.host=t,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(t){if(this.__trapNode=t,0===this.__focusableElements.length)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");n.push(this),-1===this.__focusedElementIndex&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,n.pop()}__onKeyDown(t){if(this.__trapNode&&this===Array.from(n).pop()&&"Tab"===t.key){t.preventDefault();const e=t.shiftKey;this.__focusNextElement(e)}}__focusNextElement(t=!1){const e=this.__focusableElements,r=t?-1:1,o=this.__focusedElementIndex,n=e[(e.length+o+r)%e.length];n.focus(),"input"===n.localName&&n.select()}get __focusableElements(){return(0,o.GO)(this.__trapNode)}get __focusedElementIndex(){const t=this.__focusableElements;return t.indexOf(t.filter(o.Qw).pop())}}},4530:function(t,e,r){"use strict";r.d(e,{GO:function(){return c},LQ:function(){return n},Qw:function(){return l}});let o=!1;function n(){return o}function i(t,e){const r=Math.max(t.tabIndex,0),o=Math.max(e.tabIndex,0);return 0===r||0===o?o>r:r>o}function s(t){const e=t.length;if(e<2)return t;const r=Math.ceil(e/2);return function(t,e){const r=[];for(;t.length>0&&e.length>0;)i(t[0],e[0])?r.push(e.shift()):r.push(t.shift());return r.concat(t,e)}(s(t.slice(0,r)),s(t.slice(r)))}function a(t,e){if(t.nodeType!==Node.ELEMENT_NODE||function(t){const e=t.style;if("hidden"===e.visibility||"none"===e.display)return!0;const r=window.getComputedStyle(t);return"hidden"===r.visibility||"none"===r.display}(t))return!1;const r=t,o=function(t){if(!function(t){return!t.matches('[tabindex="-1"]')&&(t.matches("input, select, textarea, button, object")?t.matches(":not([disabled])"):t.matches("a[href], area[href], iframe, [tabindex], [contentEditable]"))}(t))return-1;const e=t.getAttribute("tabindex")||0;return Number(e)}(r);let n=o>0;o>=0&&e.push(r);let i=[];return i="slot"===r.localName?r.assignedNodes({flatten:!0}):(r.shadowRoot||r).children,[...i].forEach((t=>{n=a(t,e)||n})),n}function l(t){return t.getRootNode().activeElement===t}function c(t){const e=[];return a(t,e)?s(e):e}window.addEventListener("keydown",(()=>{o=!0}),{capture:!0}),window.addEventListener("mousedown",(()=>{o=!1}),{capture:!0})},602:function(t,e,r){"use strict";r.d(e,{L:function(){return o}});const o=(0,r(1014).o)((t=>class extends t{ready(){super.ready(),this.addEventListener("keydown",(t=>{this._onKeyDown(t)})),this.addEventListener("keyup",(t=>{this._onKeyUp(t)}))}_onKeyDown(t){switch(t.key){case"Enter":this._onEnter(t);break;case"Escape":this._onEscape(t)}}_onKeyUp(t){}_onEnter(t){}_onEscape(t){}}))},8591:function(t,e,r){"use strict";r.d(e,{n:function(){return i}});var o=r(5557),n=r(3971);class i extends EventTarget{static generateId(t,e){return`${t||"default"}-${e.localName}-${(0,n.l)()}`}constructor(t,e,r,o,n){super(),this.host=t,this.slotName=e,this.slotFactory=r,this.slotInitializer=o,n&&(this.defaultId=i.generateId(e,t))}hostConnected(){if(!this.initialized){let t=this.getSlotChild();t?(this.node=t,this.initCustomNode(t)):t=this.attachDefaultNode(),this.initNode(t),this.observe(),this.initialized=!0}}attachDefaultNode(){const{host:t,slotName:e,slotFactory:r}=this;let o=this.defaultNode;return!o&&r&&(o=r(t),o instanceof Element&&(""!==e&&o.setAttribute("slot",e),this.node=o,this.defaultNode=o)),o&&t.appendChild(o),o}getSlotChild(){const{slotName:t}=this;return Array.from(this.host.childNodes).find((e=>e.nodeType===Node.ELEMENT_NODE&&e.slot===t||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()&&""===t))}initNode(t){const{slotInitializer:e}=this;e&&e(this.host,t)}initCustomNode(t){}teardownNode(t){}observe(){const{slotName:t}=this,e=""===t?"slot:not([name])":`slot[name=${t}]`,r=this.host.shadowRoot.querySelector(e);this.__slotObserver=new o.o(r,(t=>{const e=this.node,r=t.addedNodes.find((t=>t!==e));t.removedNodes.length&&t.removedNodes.forEach((t=>{this.teardownNode(t)})),r&&(e&&e.isConnected&&this.host.removeChild(e),this.node=r,r!==this.defaultNode&&(this.initCustomNode(r),this.initNode(r)))}))}}},4062:function(t,e,r){"use strict";r.d(e,{N:function(){return n}});var o=r(1598);const n=t=>class extends((0,o.f)(t)){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(t,e){super._disabledChanged(t,e),t?(void 0!==this.tabindex&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):e&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(t){this.disabled&&-1!==t&&(this._lastTabIndex=t,this.tabindex=-1)}}},4463:function(t,e,r){"use strict";r.d(e,{f:function(){return n}});var o=r(8591);class n extends o.n{constructor(t){super(t,"tooltip"),this.setTarget(t)}initCustomNode(t){t.target=this.target,void 0!==this.context&&(t.context=this.context),void 0!==this.manual&&(t.manual=this.manual),void 0!==this.opened&&(t.opened=this.opened),void 0!==this.position&&(t._position=this.position),void 0!==this.shouldShow&&(t.shouldShow=this.shouldShow)}setContext(t){this.context=t;const e=this.node;e&&(e.context=t)}setManual(t){this.manual=t;const e=this.node;e&&(e.manual=t)}setOpened(t){this.opened=t;const e=this.node;e&&(e.opened=t)}setPosition(t){this.position=t;const e=this.node;e&&(e._position=t)}setShouldShow(t){this.shouldShow=t;const e=this.node;e&&(e.shouldShow=t)}setTarget(t){this.target=t;const e=this.node;e&&(e.target=t)}}},3971:function(t,e,r){"use strict";r.d(e,{l:function(){return n}});let o=0;function n(){return o++}},1987:function(t,e,r){"use strict";r.d(e,{B:function(){return s}});var o=r(1014),n=r(2527),i=r(4062);const s=(0,o.o)((t=>class extends((0,n.W)((0,i.N)(t))){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame((()=>{this.focus(),this.setAttribute("focus-ring","")}))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement&&(this.focusElement.blur(),this._setFocused(!1))}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(t,e){t?(t.disabled=this.disabled,this._addFocusListeners(t),this.__forwardTabIndex(this.tabindex)):e&&this._removeFocusListeners(e)}_addFocusListeners(t){t.addEventListener("blur",this._boundOnBlur),t.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(t){t.removeEventListener("blur",this._boundOnBlur),t.removeEventListener("focus",this._boundOnFocus)}_onFocus(t){t.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(t){t.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(t){return t.target===this.focusElement}_disabledChanged(t,e){super._disabledChanged(t,e),this.focusElement&&(this.focusElement.disabled=t),t&&this.blur()}_tabindexChanged(t){this.__forwardTabIndex(t)}__forwardTabIndex(t){void 0!==t&&this.focusElement&&(this.focusElement.tabIndex=t,-1!==t&&(this.tabindex=void 0)),this.disabled&&t&&(-1!==t&&(this._lastTabIndex=t),this.tabindex=void 0)}}))},167:function(t,e,r){"use strict";r.d(e,{A:function(){return o}});const o=(0,r(1014).o)((t=>class extends t{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(t){t&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach((t=>{this._delegateAttribute(t,this[t])}))}_ensurePropsDelegated(){this.constructor.delegateProps.forEach((t=>{this._delegateProperty(t,this[t])}))}_delegateAttrsChanged(...t){this.constructor.delegateAttrs.forEach(((e,r)=>{this._delegateAttribute(e,t[r])}))}_delegatePropsChanged(...t){this.constructor.delegateProps.forEach(((e,r)=>{this._delegateProperty(e,t[r])}))}_delegateAttribute(t,e){this.stateTarget&&("invalid"===t&&this._delegateAttribute("aria-invalid",!!e&&"true"),"boolean"==typeof e?this.stateTarget.toggleAttribute(t,e):e?this.stateTarget.setAttribute(t,e):this.stateTarget.removeAttribute(t))}_delegateProperty(t,e){this.stateTarget&&(this.stateTarget[t]=e)}}))},8037:function(t,e,r){"use strict";r.d(e,{f:function(){return u}});var o=r(6155),n=r(8591);class i extends n.n{constructor(t){super(t,"error-message",(()=>document.createElement("div")),((t,e)=>{this.__updateErrorId(e),this.__updateHasError()}),!0)}get errorId(){return this.node&&this.node.id}setErrorMessage(t){this.errorMessage=t,this.__updateHasError()}setInvalid(t){this.invalid=t,this.__updateHasError()}initCustomNode(t){this.__updateErrorId(t),t.textContent&&!this.errorMessage&&(this.errorMessage=t.textContent.trim()),this.__updateHasError()}teardownNode(t){let e=this.getSlotChild();e||t===this.defaultNode||(e=this.attachDefaultNode(),this.initNode(e)),this.__updateHasError()}__isNotEmpty(t){return Boolean(t&&""!==t.trim())}__updateHasError(){const t=this.node,e=Boolean(this.invalid&&this.__isNotEmpty(this.errorMessage));t&&(t.textContent=e?this.errorMessage:"",t.hidden=!e,e?t.setAttribute("role","alert"):t.removeAttribute("role")),this.host.toggleAttribute("has-error-message",e)}__updateErrorId(t){t.id||(t.id=this.defaultId)}}var s=r(3726);class a{constructor(t){this.host=t,this.__required=!1}setTarget(t){this.__target=t,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId)}setRequired(t){this.__setAriaRequiredAttribute(t),this.__required=t}setLabelId(t){this.__setLabelIdToAriaAttribute(t,this.__labelId),this.__labelId=t}setErrorId(t){this.__setErrorIdToAriaAttribute(t,this.__errorId),this.__errorId=t}setHelperId(t){this.__setHelperIdToAriaAttribute(t,this.__helperId),this.__helperId=t}get __isGroupField(){return this.__target===this.host}__setLabelIdToAriaAttribute(t,e){this.__setAriaAttributeId("aria-labelledby",t,e)}__setErrorIdToAriaAttribute(t,e){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",t,e):this.__setAriaAttributeId("aria-describedby",t,e)}__setHelperIdToAriaAttribute(t,e){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",t,e):this.__setAriaAttributeId("aria-describedby",t,e)}__setAriaRequiredAttribute(t){this.__target&&(["input","textarea"].includes(this.__target.localName)||(t?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required")))}__setAriaAttributeId(t,e,r){this.__target&&(r&&(0,s.x_)(this.__target,t,r),e&&(0,s.$2)(this.__target,t,e))}}class l extends n.n{constructor(t){super(t,"helper",null,null,!0)}get helperId(){return this.node&&this.node.id}initCustomNode(t){this.__updateHelperId(t),this.__observeHelper(t);const e=this.__hasHelper(t);this.__toggleHasHelper(e)}teardownNode(t){this.__helperIdObserver&&this.__helperIdObserver.disconnect();const e=this.getSlotChild();if(e&&e!==this.defaultNode){const t=this.__hasHelper(e);this.__toggleHasHelper(t)}else this.__applyDefaultHelper(this.helperText,e)}setHelperText(t){this.helperText=t;const e=this.getSlotChild();e&&e!==this.defaultNode||this.__applyDefaultHelper(t,e)}__hasHelper(t){return!!t&&(t.children.length>0||t.nodeType===Node.ELEMENT_NODE&&customElements.get(t.localName)||this.__isNotEmpty(t.textContent))}__isNotEmpty(t){return t&&""!==t.trim()}__applyDefaultHelper(t,e){const r=this.__isNotEmpty(t);r&&!e&&(this.slotFactory=()=>document.createElement("div"),e=this.attachDefaultNode(),this.__updateHelperId(e),this.__observeHelper(e)),e&&(e.textContent=t),this.__toggleHasHelper(r)}__observeHelper(t){this.__helperObserver=new MutationObserver((t=>{t.forEach((t=>{const e=t.target,r=e===this.node;if("attributes"===t.type)r&&e.id!==this.defaultId&&this.__updateHelperId(e);else if(r||e.parentElement===this.node){const t=this.__hasHelper(this.node);this.__toggleHasHelper(t)}}))})),this.__helperObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__toggleHasHelper(t){this.host.toggleAttribute("has-helper",t),this.dispatchEvent(new CustomEvent("helper-changed",{detail:{hasHelper:t,node:this.node}}))}__updateHelperId(t){t.id||(t.id=this.defaultId)}}var c=r(6821),d=r(4524);const u=t=>class extends((0,d.n)((0,c.h)((0,o.k)(t)))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}get _errorId(){return this._errorController.errorId}get _errorNode(){return this._errorController.node}get _helperId(){return this._helperController.helperId}get _helperNode(){return this._helperController.node}constructor(){super(),this._fieldAriaController=new a(this),this._helperController=new l(this),this._errorController=new i(this),this._labelController.addEventListener("label-changed",(t=>{const{hasLabel:e,node:r}=t.detail;this.__labelChanged(e,r)})),this._helperController.addEventListener("helper-changed",(t=>{const{hasHelper:e,node:r}=t.detail;this.__helperChanged(e,r)}))}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(t,e){t?this._fieldAriaController.setHelperId(e.id):this._fieldAriaController.setHelperId(null)}__labelChanged(t,e){t?this._fieldAriaController.setLabelId(e.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(t){this._errorController.setErrorMessage(t)}_helperTextChanged(t){this._helperController.setHelperText(t)}_ariaTargetChanged(t){t&&this._fieldAriaController.setTarget(t)}_requiredChanged(t){this._fieldAriaController.setRequired(t)}_invalidChanged(t){this._errorController.setInvalid(t),setTimeout((()=>{t?this._fieldAriaController.setErrorId(this._errorController.errorId):this._fieldAriaController.setErrorId(null)}))}}},9091:function(t,e,r){"use strict";r.d(e,{t:function(){return a}});var o=r(1014),n=r(167),i=r(6326),s=r(4524);const a=(0,o.o)((t=>class extends((0,n.A)((0,s.n)((0,i.J)(t)))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map((t=>this[t])))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(t){return t.some((t=>this.__isValidConstraint(t)))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(t,...e){if(!t)return;const r=this._hasValidConstraints(e),o=this.__previousHasConstraints&&!r;(this._hasValue||this.invalid)&&r?this.validate():o&&this._setInvalid(!1),this.__previousHasConstraints=r}_onChange(t){t.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable}))}__isValidConstraint(t){return Boolean(t)||0===t}}))},6174:function(t,e,r){"use strict";r.d(e,{L:function(){return p}});var o=r(7913),n=r(6139),i=r(602),s=r(1987),a=r(8037),l=r(9091),c=r(1014);const d=new WeakMap,u=(0,c.o)((t=>class extends t{get slotStyles(){return{}}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const t=this.getRootNode(),e=function(t){return d.has(t)||d.set(t,new Set),d.get(t)}(t);this.slotStyles.forEach((r=>{e.has(r)||(function(t,e){const r=document.createElement("style");r.textContent=t,e===document?document.head.appendChild(r):e.insertBefore(r,e.firstChild)}(r,t),e.add(r))}))}}));var h=r(5108);const p=t=>class extends(u((0,s.B)((0,l.t)((0,a.f)((0,i.L)(t)))))){static get properties(){return{allowedCharPattern:{type:String,observer:"_allowedCharPatternChanged"},autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}get clearElement(){return h.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}get slotStyles(){return["\n          :is(input[slot='input'], textarea[slot='textarea'])::placeholder {\n            font: inherit;\n            color: inherit;\n          }\n        "]}ready(){super.ready(),this.clearElement&&this.clearElement.addEventListener("click",(t=>this._onClearButtonClick(t)))}_onClearButtonClick(t){t.preventDefault(),this.inputElement.focus(),this.__clear()}_onFocus(t){super._onFocus(t),this.autoselect&&this.inputElement&&this.inputElement.select()}_onEscape(t){super._onEscape(t),this.clearButtonVisible&&this.value&&(t.stopPropagation(),this.__clear())}_onChange(t){t.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable}))}__clear(){this.clear(),this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}_addInputListeners(t){super._addInputListeners(t),t.addEventListener("paste",this._boundOnPaste),t.addEventListener("drop",this._boundOnDrop),t.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(t){super._removeInputListeners(t),t.removeEventListener("paste",this._boundOnPaste),t.removeEventListener("drop",this._boundOnDrop),t.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(t){super._onKeyDown(t),this.allowedCharPattern&&!this.__shouldAcceptKey(t)&&(t.preventDefault(),this._markInputPrevented())}_markInputPrevented(){this.setAttribute("input-prevented",""),this._preventInputDebouncer=n.dx.debounce(this._preventInputDebouncer,o.Wc.after(200),(()=>{this.removeAttribute("input-prevented")}))}__shouldAcceptKey(t){return t.metaKey||t.ctrlKey||!t.key||1!==t.key.length||this.__allowedCharRegExp.test(t.key)}_onPaste(t){if(this.allowedCharPattern){const e=t.clipboardData.getData("text");this.__allowedTextRegExp.test(e)||(t.preventDefault(),this._markInputPrevented())}}_onDrop(t){if(this.allowedCharPattern){const e=t.dataTransfer.getData("text");this.__allowedTextRegExp.test(e)||(t.preventDefault(),this._markInputPrevented())}}_onBeforeInput(t){this.allowedCharPattern&&t.data&&!this.__allowedTextRegExp.test(t.data)&&(t.preventDefault(),this._markInputPrevented())}_allowedCharPatternChanged(t){if(t)try{this.__allowedCharRegExp=new RegExp(`^${t}$`),this.__allowedTextRegExp=new RegExp(`^${t}*$`)}catch(t){h.error(t)}}}},993:function(t,e,r){"use strict";r.d(e,{b:function(){return n}});var o=r(8591);class n extends o.n{constructor(t,e){super(t,"input",(()=>document.createElement("input")),((t,r)=>{t.value&&r.setAttribute("value",t.value),t.type&&r.setAttribute("type",t.type),r.id=this.defaultId,"function"==typeof e&&e(r)}),!0)}}},422:function(t,e,r){"use strict";r.d(e,{j:function(){return i}});var o=r(6174),n=r(5108);const i=t=>class extends((0,o.L)(t)){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}_inputElementChanged(t){super._inputElementChanged(t),t&&(t.value&&t.value!==this.value&&(n.warn(`Please define value on the <${this.localName}> component!`),t.value=""),this.value&&(t.value=this.value))}get __data(){return this.__dataValue||{}}set __data(t){this.__dataValue=t}_setFocused(t){super._setFocused(t),t||this.validate()}_onInput(t){super._onInput(t),this.invalid&&this.validate()}_valueChanged(t,e){super._valueChanged(t,e),void 0!==e&&this.invalid&&this.validate()}}},6326:function(t,e,r){"use strict";r.d(e,{J:function(){return o}});const o=(0,r(1014).o)((t=>class extends t{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super(),this._boundOnInput=this.__onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}clear(){this.value=""}_addInputListeners(t){t.addEventListener("input",this._boundOnInput),t.addEventListener("change",this._boundOnChange)}_removeInputListeners(t){t.removeEventListener("input",this._boundOnInput),t.removeEventListener("change",this._boundOnChange)}_forwardInputValue(t){this.inputElement&&(this.inputElement.value=null!=t?t:"")}_inputElementChanged(t,e){t?this._addInputListeners(t):e&&this._removeInputListeners(e)}_hasInputValueChanged(t,e){(t||e)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(t){this._setHasInputValue(t),this._onInput(t)}_onInput(t){const e=t.composedPath()[0];this.__userInput=t.isTrusted,this.value=e.value,this.__userInput=!1}_onChange(t){}_toggleHasValue(t){this.toggleAttribute("has-value",t)}_valueChanged(t,e){this._toggleHasValue(this._hasValue),""===t&&void 0===e||this.__userInput||this._forwardInputValue(t)}get _hasValue(){return null!=this.value&&""!==this.value}_setHasInputValue(t){const e=t.composedPath()[0];this._hasInputValue=e.value.length>0}}))},6821:function(t,e,r){"use strict";r.d(e,{h:function(){return a}});var o=r(1014),n=r(6155),i=r(8591);class s extends i.n{constructor(t){super(t,"label",(()=>document.createElement("label")),((t,e)=>{this.__updateLabelId(e),this.__updateDefaultLabel(this.label),this.__observeLabel(e)}),!0)}get labelId(){return this.node.id}initCustomNode(t){this.__updateLabelId(t);const e=this.__hasLabel(t);this.__toggleHasLabel(e)}teardownNode(t){this.__labelObserver&&this.__labelObserver.disconnect();let e=this.getSlotChild();e||t===this.defaultNode||(e=this.attachDefaultNode(),this.initNode(e));const r=this.__hasLabel(e);this.__toggleHasLabel(r)}setLabel(t){this.label=t,this.__updateDefaultLabel(t)}__hasLabel(t){return!!t&&(t.children.length>0||this.__isNotEmpty(t.textContent))}__isNotEmpty(t){return Boolean(t&&""!==t.trim())}__observeLabel(t){this.__labelObserver=new MutationObserver((t=>{t.forEach((t=>{const e=t.target,r=e===this.node;if("attributes"===t.type)r&&e.id!==this.defaultId&&this.__updateLabelId(e);else if(r||e.parentElement===this.node){const t=this.__hasLabel(this.node);this.__toggleHasLabel(t)}}))})),this.__labelObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__toggleHasLabel(t){this.host.toggleAttribute("has-label",t),this.dispatchEvent(new CustomEvent("label-changed",{detail:{hasLabel:t,node:this.node}}))}__updateDefaultLabel(t){if(this.defaultNode&&(this.defaultNode.textContent=t,this.defaultNode===this.node)){const e=this.__isNotEmpty(t);this.__toggleHasLabel(e)}}__updateLabelId(t){t.id||(t.id=this.defaultId)}}const a=(0,o.o)((t=>class extends((0,n.k)(t)){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}get _labelId(){return this._labelController.labelId}get _labelNode(){return this._labelController.node}constructor(){super(),this._labelController=new s(this)}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(t){this._labelController.setLabel(t)}}))},6729:function(t,e,r){"use strict";r.d(e,{v:function(){return o}});class o{constructor(t,e){this.input=t,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),e.addEventListener("label-changed",(t=>{this.__initLabel(t.detail.node)})),this.__initLabel(e.node)}__initLabel(t){t&&(t.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&t.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const t=e=>{e.stopImmediatePropagation(),this.input.removeEventListener("click",t)};this.input.addEventListener("click",t)}}},9778:function(t,e,r){"use strict";r.d(e,{I:function(){return a}});var o=r(7913),n=r(6139),i=r(9091),s=r(5108);const a=t=>class extends((0,i.t)(t)){static get properties(){return{pattern:{type:String},preventInvalidInput:{type:Boolean,observer:"_preventInvalidInputChanged"}}}static get delegateAttrs(){return[...super.delegateAttrs,"pattern"]}static get constraints(){return[...super.constraints,"pattern"]}_checkInputValue(){if(this.preventInvalidInput){const t=this.inputElement;t&&t.value.length>0&&!this.checkValidity()&&(t.value=this.value||"",this.setAttribute("input-prevented",""),this._inputDebouncer=n.dx.debounce(this._inputDebouncer,o.Wc.after(200),(()=>{this.removeAttribute("input-prevented")})))}}_onInput(t){this._checkInputValue(),super._onInput(t)}_preventInvalidInputChanged(t){t&&s.warn('WARNING: Since Vaadin 23.2, "preventInvalidInput" is deprecated. Please use "allowedCharPattern" instead.')}}},2743:function(t,e,r){"use strict";r.d(e,{J:function(){return i}});var o=r(9392);const n=o.iv`
  [part='clear-button'] {
    display: none;
    cursor: default;
  }

  [part='clear-button']::before {
    content: '✕';
  }

  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
    display: block;
  }
`,i=[o.iv`
  :host {
    display: inline-flex;
    outline: none;
  }

  :host::before {
    content: '\\2003';
    width: 0;
    display: inline-block;
    /* Size and position this element on the same vertical position as the input-field element
          to make vertical align for the host element work as expected */
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([has-label])) [part='label'] {
    display: none;
  }
`,o.iv`
  [class$='container'] {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-field-default-width, 12em);
  }
`,n]},4524:function(t,e,r){"use strict";r.d(e,{n:function(){return o}});const o=(0,r(1014).o)((t=>class extends t{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){const t=this.checkValidity();return this._setInvalid(!t),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:t}})),t}checkValidity(){return!this.required||!!this.value}_setInvalid(t){this._shouldSetInvalid(t)&&(this.invalid=t)}_shouldSetInvalid(t){return!0}}))},1753:function(t,e,r){"use strict";r(9416);var o=r(5128);(0,o.hC)("vaadin-form-layout",o.iv`
    :host {
      --vaadin-form-layout-column-spacing: var(--lumo-space-l);
    }
  `,{moduleId:"lumo-form-layout"});var n=r(5557),i=r(1665),s=r(2521),a=r(1014),l=r(5108);const c=new ResizeObserver((t=>{setTimeout((()=>{t.forEach((t=>{t.target.resizables?t.target.resizables.forEach((e=>{e._onResize(t.contentRect)})):t.target._onResize(t.contentRect)}))}))})),d=(0,a.o)((t=>class extends t{connectedCallback(){if(super.connectedCallback(),c.observe(this),this._observeParent){const t=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;t.resizables||(t.resizables=new Set,c.observe(t)),t.resizables.add(this),this.__parent=t}}disconnectedCallback(){super.disconnectedCallback(),c.unobserve(this);const t=this.__parent;if(this._observeParent&&t){const e=t.resizables;e&&(e.delete(this),0===e.size&&c.unobserve(t)),this.__parent=null}}get _observeParent(){return!1}_onResize(t){}notifyResize(){l.warn("WARNING: Since Vaadin 23, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}}));var u=r(5108);class h extends(d((0,s.S)((0,o.Tb)(i.H3)))){static get template(){return i.dy`
      <style>
        :host {
          display: block;
          max-width: 100%;
          animation: 1ms vaadin-form-layout-appear;
          /* CSS API for host */
          --vaadin-form-item-label-width: 8em;
          --vaadin-form-item-label-spacing: 1em;
          --vaadin-form-item-row-spacing: 1em;
          --vaadin-form-layout-column-spacing: 2em; /* (default) */
          align-self: stretch;
        }

        @keyframes vaadin-form-layout-appear {
          to {
            opacity: 1 !important; /* stylelint-disable-line keyframe-declaration-no-important */
          }
        }

        :host([hidden]) {
          display: none !important;
        }

        #layout {
          display: flex;

          align-items: baseline; /* default \`stretch\` is not appropriate */

          flex-wrap: wrap; /* the items should wrap */
        }

        #layout ::slotted(*) {
          /* Items should neither grow nor shrink. */
          flex-grow: 0;
          flex-shrink: 0;

          /* Margins make spacing between the columns */
          margin-left: calc(0.5 * var(--vaadin-form-layout-column-spacing));
          margin-right: calc(0.5 * var(--vaadin-form-layout-column-spacing));
        }

        #layout ::slotted(br) {
          display: none;
        }
      </style>
      <div id="layout">
        <slot id="slot"></slot>
      </div>
    `}static get is(){return"vaadin-form-layout"}static get properties(){return{responsiveSteps:{type:Array,value(){return[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}]},observer:"_responsiveStepsChanged"},_columnCount:{type:Number},_labelsOnTop:{type:Boolean}}}static get observers(){return["_invokeUpdateLayout(_columnCount, _labelsOnTop)"]}ready(){this._styleElement=document.createElement("style"),this.appendChild(this._styleElement),this._styleElement.textContent=" ",super.ready(),this.addEventListener("animationend",this.__onAnimationEnd)}connectedCallback(){super.connectedCallback(),requestAnimationFrame((()=>this._selectResponsiveStep())),requestAnimationFrame((()=>this._updateLayout())),this._observeChildrenColspanChange()}disconnectedCallback(){super.disconnectedCallback(),this.__mutationObserver.disconnect(),this.__childObserver.disconnect()}_observeChildrenColspanChange(){const t={attributes:!0};this.__mutationObserver=new MutationObserver((t=>{t.forEach((t=>{"attributes"!==t.type||"colspan"!==t.attributeName&&"hidden"!==t.attributeName||this._updateLayout()}))})),this.__childObserver=new n.o(this,(e=>{const r=this._getObservableNodes(e.addedNodes),o=this._getObservableNodes(e.removedNodes);r.forEach((e=>{this.__mutationObserver.observe(e,t)})),(r.length>0||o.length>0)&&this._updateLayout()}))}_getObservableNodes(t){const e=["template","style","dom-repeat","dom-if"];return Array.from(t).filter((t=>t.nodeType===Node.ELEMENT_NODE&&-1===e.indexOf(t.localName.toLowerCase())))}_naturalNumberOrOne(t){return"number"==typeof t&&t>=1&&t<1/0?Math.floor(t):1}_isValidCSSLength(t){return"inherit"!==t&&"normal"!==t&&(this._styleElement.firstChild.nodeValue=`#styleElement { word-spacing: ${t}; }`,!this._styleElement.sheet||["",null].indexOf(this._styleElement.sheet.cssRules[0].style.getPropertyValue("word-spacing"))<0)}_responsiveStepsChanged(t,e){try{if(!Array.isArray(t))throw new Error('Invalid "responsiveSteps" type, an Array is required.');if(t.length<1)throw new Error('Invalid empty "responsiveSteps" array, at least one item is required.');t.forEach((t=>{if(this._naturalNumberOrOne(t.columns)!==t.columns)throw new Error(`Invalid 'columns' value of ${t.columns}, a natural number is required.`);if(void 0!==t.minWidth&&!this._isValidCSSLength(t.minWidth))throw new Error(`Invalid 'minWidth' value of ${t.minWidth}, a valid CSS length required.`);if(void 0!==t.labelsPosition&&-1===["aside","top"].indexOf(t.labelsPosition))throw new Error(`Invalid 'labelsPosition' value of ${t.labelsPosition}, 'aside' or 'top' string is required.`)}))}catch(r){e&&e!==t?(u.warn(`${r.message} Using previously set 'responsiveSteps' instead.`),this.responsiveSteps=e):(u.warn(`${r.message} Using default 'responsiveSteps' instead.`),this.responsiveSteps=[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}])}this._selectResponsiveStep()}__onAnimationEnd(t){0===t.animationName.indexOf("vaadin-form-layout-appear")&&this._selectResponsiveStep()}_selectResponsiveStep(){let t;const e="background-position";this.responsiveSteps.forEach((r=>{this.$.layout.style.setProperty(e,r.minWidth),parseFloat(getComputedStyle(this.$.layout).getPropertyValue(e))<=this.offsetWidth&&(t=r)})),this.$.layout.style.removeProperty(e),t&&(this._columnCount=t.columns,this._labelsOnTop="top"===t.labelsPosition)}_invokeUpdateLayout(){this._updateLayout()}updateStyles(t={}){u.warn("WARNING: Since Vaadin 23, updateStyles() is deprecated. Use the native element.style.setProperty API to set custom CSS property values."),Object.entries(t).forEach((([t,e])=>{this.style.setProperty(t,e)})),this._updateLayout()}_updateLayout(){const t=getComputedStyle(this),e=t.getPropertyValue("--vaadin-form-layout-column-spacing"),r=t.direction,o="margin-"+("ltr"===r?"left":"right"),n="margin-"+("ltr"===r?"right":"left"),i=this.offsetWidth;let s=0;Array.from(this.children).filter((t=>"br"===t.localName||"none"!==getComputedStyle(t).display)).forEach(((t,r,a)=>{if("br"===t.localName)return void(s=0);let l;l=this._naturalNumberOrOne(parseFloat(t.getAttribute("colspan"))),l=Math.min(l,this._columnCount);const c=l/this._columnCount;t.style.width=`calc(${99.9*c}% - ${1-c} * ${e})`,s+l>this._columnCount&&(s=0),0===s?t.style.setProperty(o,"0px"):t.style.removeProperty(o);const d=r+1,u=d<a.length&&"br"===a[d].localName;if(s+l===this._columnCount)t.style.setProperty(n,"0px");else if(u){const r=(this._columnCount-s-l)/this._columnCount;t.style.setProperty(n,`calc(${r*i}px + ${r} * ${e})`)}else t.style.removeProperty(n);s=(s+l)%this._columnCount,"vaadin-form-item"===t.localName&&(this._labelsOnTop?"top"!==t.getAttribute("label-position")&&(t.__useLayoutLabelPosition=!0,t.setAttribute("label-position","top")):t.__useLayoutLabelPosition&&(delete t.__useLayoutLabelPosition,t.removeAttribute("label-position")))}))}_onResize(){this._selectResponsiveStep()}}customElements.define(h.is,h)},2241:function(t,e,r){"use strict";var o=r(1665),n=r(676),i=r(5128);class s extends((0,i.Tb)((0,n.U)(o.H3))){static get is(){return"vaadin-input-container"}static get template(){return o.dy`
      <style>
        :host {
          display: flex;
          align-items: center;
          flex: 0 1 auto;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Reset the native input styles */
        ::slotted(input) {
          -webkit-appearance: none;
          -moz-appearance: none;
          flex: auto;
          white-space: nowrap;
          overflow: hidden;
          width: 100%;
          height: 100%;
          outline: none;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 0;
          min-width: 0;
          font: inherit;
          line-height: normal;
          color: inherit;
          background-color: transparent;
          /* Disable default invalid style in Firefox */
          box-shadow: none;
        }

        ::slotted(*) {
          flex: none;
        }

        ::slotted(:is(input, textarea))::placeholder {
          /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
          /* because ::slotted(...)::placeholder does not work in Safari. */
          font: inherit;
          color: inherit;
          /* Override default opacity in Firefox */
          opacity: 1;
        }
      </style>
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",(t=>{t.target===this&&t.preventDefault()})),this.addEventListener("click",(t=>{t.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach((t=>t.focus&&t.focus()))}))}}customElements.define(s.is,s)},3787:function(t,e,r){"use strict";r(1195),r(9098),r(9849),r(4173);var o=r(5128);(0,o.hC)("vaadin-input-container",o.iv`
    :host {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
      padding: 0 calc(0.375em + var(--lumo-border-radius-m) / 4 - 1px);
      font-weight: 500;
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: inherit;
      pointer-events: none;
      background-color: var(--lumo-contrast-50pct);
      opacity: 0;
      transition: transform 0.15s, opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--lumo-text-field-size, var(--lumo-size-m));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: 1px dashed var(--lumo-contrast-30pct);
    }

    /* Disabled */
    :host([disabled]) {
      background-color: var(--lumo-contrast-5pct);
    }

    :host([disabled]) ::slotted(*) {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    /* Invalid */
    :host([invalid]) {
      background-color: var(--lumo-error-color-10pct);
    }

    :host([invalid])::after {
      background-color: var(--lumo-error-color-50pct);
    }

    /* Slotted icons */
    ::slotted(iron-icon),
    ::slotted(vaadin-icon) {
      color: var(--lumo-contrast-60pct);
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(iron-icon[icon^='vaadin:']),
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-input-container"}),r(2241)},2301:function(t,e,r){"use strict";r(3787),r(9098);var o=r(4398),n=r(3208),i=r(5128);const s=i.iv`
  :host {
    width: 8em;
  }

  :host([step-buttons-visible]:not([theme~='align-right'])) ::slotted(input),
  :host([has-controls]:not([theme~='align-right'])) ::slotted(input) {
    text-align: center;
  }

  [part$='button'][disabled] {
    opacity: 0.2;
  }

  :host([step-buttons-visible]) [part='input-field'],
  :host([has-controls]) [part='input-field'] {
    padding: 0;
  }

  [part\$='button'] {
    cursor: pointer;
    font-size: var(--lumo-icon-size-s);
    width: 1.6em;
    height: 1.6em;
  }

  [part\$='button']::before {
    margin-top: 0.3em;
  }

  [part='decrease-button']::before {
    content: var(--lumo-icons-minus);
  }

  [part='increase-button']::before {
    content: var(--lumo-icons-plus);
  }

  /* RTL specific styles */
  :host([dir='rtl']:not([theme~='align-right'])) ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`;(0,i.hC)("vaadin-number-field",[n.J,o.q,s],{moduleId:"lumo-number-field"}),r(2241);var a=r(1665),l=r(2521),c=r(4463),d=r(993),u=r(422),h=r(6729),p=r(2743);(0,i.hC)("vaadin-number-field",p.J,{moduleId:"vaadin-number-field-styles"});class m extends((0,u.j)((0,i.Tb)((0,l.S)(a.H3)))){static get is(){return"vaadin-number-field"}static get template(){return a.dy`
      <style>
        :host([readonly]) [part$='button'] {
          pointer-events: none;
        }

        [part='decrease-button']::before {
          content: '−';
        }

        [part='increase-button']::before {
          content: '+';
        }

        [part='decrease-button'],
        [part='increase-button'] {
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([dir='rtl']) [part='input-field'] {
          direction: ltr;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <div
            disabled$="[[!_allowed(-1, value, min, max, step)]]"
            part="decrease-button"
            on-click="_decreaseValue"
            on-touchend="_decreaseButtonTouchend"
            hidden$="[[!_isStepButtonVisible(hasControls, stepButtonsVisible)]]"
            aria-hidden="true"
            slot="prefix"
          ></div>
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div
            disabled$="[[!_allowed(1, value, min, max, step)]]"
            part="increase-button"
            on-click="_increaseValue"
            on-touchend="_increaseButtonTouchend"
            hidden$="[[!_isStepButtonVisible(hasControls, stepButtonsVisible)]]"
            aria-hidden="true"
            slot="suffix"
          ></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{hasControls:{type:Boolean,value:!1,reflectToAttribute:!0},stepButtonsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},min:{type:Number},max:{type:Number},step:{type:Number}}}static get observers(){return["_stepChanged(step, inputElement)"]}static get delegateProps(){return[...super.delegateProps,"min","max"]}static get constraints(){return[...super.constraints,"min","max","step"]}constructor(){super(),this._setType("number")}get slotStyles(){const t=this.localName;return[...super.slotStyles,`\n        ${t} input[type="number"]::-webkit-outer-spin-button,\n        ${t} input[type="number"]::-webkit-inner-spin-button {\n          -webkit-appearance: none;\n          margin: 0;\n        }\n\n        ${t} input[type="number"] {\n          -moz-appearance: textfield;\n        }\n\n        ${t}[dir='rtl'] input[type="number"]::placeholder {\n          direction: rtl;\n        }\n\n        ${t}[dir='rtl']:not([step-buttons-visible]):not([has-controls]) input[type="number"]::placeholder {\n          text-align: left;\n        }\n      `]}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new d.b(this,(t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t}))),this.addController(new h.v(this.inputElement,this._labelController)),this._tooltipController=new c.f(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top")}checkValidity(){return this.inputElement?this.inputElement.checkValidity():!this.invalid}_decreaseButtonTouchend(t){t.preventDefault(),this._decreaseValue()}_increaseButtonTouchend(t){t.preventDefault(),this._increaseValue()}_decreaseValue(){this._incrementValue(-1)}_increaseValue(){this._incrementValue(1)}_incrementValue(t){if(this.disabled||this.readonly)return;const e=this.step||1;let r=parseFloat(this.value);this.value?r<this.min?(t=0,r=this.min):r>this.max&&(t=0,r=this.max):0===this.min&&t<0||0===this.max&&t>0||0===this.max&&0===this.min?(t=0,r=0):(null==this.max||this.max>=0)&&(null==this.min||this.min<=0)?r=0:this.min>0?(r=this.min,this.max<0&&t<0&&(r=this.max),t=0):this.max<0&&(r=this.max,t<0?t=0:this._getIncrement(1,r-e)>this.max?r-=2*e:r-=e);const o=this._getIncrement(t,r);this.value&&0!==t&&!this._incrementIsInsideTheLimits(t,r)||this._setValue(o)}_setValue(t){this.value=this.inputElement.value=String(parseFloat(t)),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_getIncrement(t,e){let r=this.step||1,o=this.min||0;const n=Math.max(this._getMultiplier(e),this._getMultiplier(r),this._getMultiplier(o));r*=n,o*=n;const i=((e=Math.round(e*n))-o)%r;return t>0?(e-i+r)/n:t<0?(e-(i||r))/n:e/n}_getDecimalCount(t){const e=String(t),r=e.indexOf(".");return-1===r?1:e.length-r-1}_getMultiplier(t){if(!isNaN(t))return 10**this._getDecimalCount(t)}_incrementIsInsideTheLimits(t,e){return t<0?null==this.min||this._getIncrement(t,e)>=this.min:t>0?null==this.max||this._getIncrement(t,e)<=this.max:this._getIncrement(t,e)<=this.max&&this._getIncrement(t,e)>=this.min}_allowed(t){const e=t*(this.step||1),r=parseFloat(this.value);return!this.value||!this.disabled&&this._incrementIsInsideTheLimits(e,r)}_stepChanged(t,e){e&&(e.step=t||"any")}_valueChanged(t,e){t&&isNaN(parseFloat(t))?this.value="":"string"!=typeof this.value&&(this.value=String(this.value)),super._valueChanged(this.value,e)}_onKeyDown(t){"ArrowUp"===t.key?(t.preventDefault(),this._increaseValue()):"ArrowDown"===t.key&&(t.preventDefault(),this._decreaseValue()),super._onKeyDown(t)}_isStepButtonVisible(t,e){return t||e}_setHasInputValue(t){const e=t.composedPath()[0];this._hasInputValue=e.value.length>0||e.validity.badInput}}customElements.define(m.is,m)},3547:function(t,e,r){"use strict";r(3787);var o=r(3208),n=r(5128);(0,n.hC)("vaadin-text-field",o.J,{moduleId:"lumo-text-field-styles"}),r(2241);var i=r(1665),s=r(2521),a=r(4463),l=r(993),c=r(422),d=r(6729),u=r(9778),h=r(2743);(0,n.hC)("vaadin-text-field",h.J,{moduleId:"vaadin-text-field-styles"});class p extends((0,u.I)((0,c.j)((0,n.Tb)((0,s.S)(i.H3))))){static get is(){return"vaadin-text-field"}static get template(){return i.dy`
      <style>
        [part='input-field'] {
          flex-grow: 0;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}static get properties(){return{maxlength:{type:Number},minlength:{type:Number}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength"]}static get constraints(){return[...super.constraints,"maxlength","minlength"]}constructor(){super(),this._setType("text")}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new l.b(this,(t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t}))),this.addController(new d.v(this.inputElement,this._labelController)),this._tooltipController=new a.f(this),this._tooltipController.setPosition("top"),this.addController(this._tooltipController)}}customElements.define(p.is,p)},7316:function(t,e,r){"use strict";r(1195),r(9416),r(9849);var o=r(510),n=r(5128);(0,n.hC)("vaadin-overlay",o.I,{moduleId:"lumo-vaadin-overlay"});var i=r(5557),s=r(2223),a=(r(7894),r(3130)),l=r(1014);function c(t,e,r,o,n){let i;n&&(i="object"==typeof r&&null!==r,i&&(o=t.__dataTemp[e]));let s=o!==r&&(o==o||r==r);return i&&s&&(t.__dataTemp[e]=r),s}const d=(0,l.o)((t=>class extends t{_shouldPropertyChange(t,e,r){return c(this,t,e,r,!0)}}));(0,l.o)((t=>class extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,e,r){return c(this,t,e,r,this.mutableData)}})),d._mutablePropertyChange=c;var u=r(9387),h=r(1342),p=r(5108);let m=null;function f(){return m}f.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:f,writable:!0}});const _=(0,a.q)(f),g=d(_),v=(0,a.q)(class{});class y extends v{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let t=this.root.firstChild;t;t=t.nextSibling)e.push(t),t.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let r=this.__templatizeOptions;(t&&r.instanceProps||!r.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(let e in t)this._setPendingProperty(e,t[e])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,r){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,(t=>{t.model=this,r(t)}));else{let o=this.__dataHost.__dataHost;o&&o._addEventListenerToNode(t,e,r)}}_showHideChildren(t){!function(t,e){for(let r=0;r<e.length;r++){let o=e[r];if(Boolean(t)!=Boolean(o.__hideTemplateChildren__))if(o.nodeType===Node.TEXT_NODE)t?(o.__polymerTextContent__=o.textContent,o.textContent=""):o.textContent=o.__polymerTextContent__;else if("slot"===o.localName)if(t)o.__polymerReplaced__=document.createComment("hidden-slot"),(0,h.r)((0,h.r)(o).parentNode).replaceChild(o.__polymerReplaced__,o);else{const t=o.__polymerReplaced__;t&&(0,h.r)((0,h.r)(t).parentNode).replaceChild(o,t)}else o.style&&(t?(o.__polymerDisplay__=o.style.display,o.style.display="none"):o.style.display=o.__polymerDisplay__);o.__hideTemplateChildren__=t,o._showHideChildren&&o._showHideChildren(t)}}(t,this.children)}_setUnmanagedPropertyToNode(t,e,r){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==e?t.__polymerTextContent__=r:super._setUnmanagedPropertyToNode(t,e,r)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do{t=t.__dataHost.__dataHost}while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}y.prototype.__dataHost,y.prototype.__templatizeOptions,y.prototype._methodHost,y.prototype.__templatizeOwner,y.prototype.__hostProps;const b=d(y);function x(t){let e=t.__dataHost;return e&&e._methodHost||e}function w(t,e){return function(t,r,o){e.call(t.__templatizeOwner,r.substring("_host_".length),o[r])}}function C(t,e){return function(t,r,o){e.call(t.__templatizeOwner,t,r,o[r])}}function A(t,e,r){if(u.XN&&!x(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(r=r||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let o=(e?e.constructor:y)._parseTemplate(t),n=o.templatizeInstanceClass;n||(n=function(t,e,r){let o=r.mutableData?b:y;A.mixin&&(o=A.mixin(o));let n=class extends o{};return n.prototype.__templatizeOptions=r,n.prototype._bindTemplate(t),function(t,e,r,o){let n=r.hostProps||{};for(let e in o.instanceProps){delete n[e];let r=o.notifyInstanceProp;r&&t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:C(0,r)})}if(o.forwardHostProp&&e.__dataHost)for(let e in n)r.hasHostProps||(r.hasHostProps=!0),t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,e,r){t.__dataHost._setPendingPropertyOrPath("_host_"+e,r[e],!0,!0)}})}(n,t,e,r),n}(t,o,r),o.templatizeInstanceClass=n);const i=x(t);!function(t,e,r,o){let n=r.forwardHostProp;if(n&&e.hasHostProps){const a="template"==t.localName;let l=e.templatizeTemplateClass;if(!l){if(a){let t=r.mutableData?g:_;class o extends t{}l=e.templatizeTemplateClass=o}else{const r=t.constructor;class o extends r{}l=e.templatizeTemplateClass=o}let i=e.hostProps;for(let t in i)l.prototype._addPropertyEffect("_host_"+t,l.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:w(0,n)}),l.prototype._createNotifyingProperty("_host_"+t);u.a2&&o&&function(t,e,r){const o=r.constructor._properties,{propertyEffects:n}=t,{instanceProps:i}=e;for(let t in n)if(!(o[t]||i&&i[t])){const e=n[t];for(let r=0;r<e.length;r++){const{part:o}=e[r].info;if(!o.signature||!o.signature.static){p.warn(`Property '${t}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}(e,r,o)}if(t.__dataProto&&Object.assign(t.__data,t.__dataProto),a)s=l,m=i=t,Object.setPrototypeOf(i,s.prototype),new s,m=null,t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties();else{Object.setPrototypeOf(t,l.prototype);const r=e.hostProps;for(let e in r)if(e="_host_"+e,e in t){const r=t[e];delete t[e],t.__data[e]=r}}}var i,s}(t,o,r,i);let s=class extends n{};return s.prototype._methodHost=i,s.prototype.__dataHost=t,s.prototype.__templatizeOwner=e,s.prototype.__hostProps=o.hostProps,s}var E=r(1665),S=r(1037),P=r(6155),O=r(676),I=r(1732);class T extends((0,n.Tb)((0,O.U)((0,P.k)(E.H3)))){static get template(){return E.dy`
      <style>
        :host {
          z-index: 200;
          position: fixed;

          /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

          /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
          top: 0;
          right: 0;
          bottom: var(--vaadin-overlay-viewport-bottom);
          left: 0;

          /* Use flexbox alignment for the overlay part. */
          display: flex;
          flex-direction: column; /* makes dropdowns sizing easier */
          /* Align to center by default. */
          align-items: center;
          justify-content: center;

          /* Allow centering when max-width/max-height applies. */
          margin: auto;

          /* The host is not clickable, only the overlay part is. */
          pointer-events: none;

          /* Remove tap highlight on touch devices. */
          -webkit-tap-highlight-color: transparent;

          /* CSS API for host */
          --vaadin-overlay-viewport-bottom: 0;
        }

        :host([hidden]),
        :host(:not([opened]):not([closing])) {
          display: none !important;
        }

        [part='overlay'] {
          -webkit-overflow-scrolling: touch;
          overflow: auto;
          pointer-events: auto;

          /* Prevent overflowing the host in MSIE 11 */
          max-width: 100%;
          box-sizing: border-box;

          -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
        }

        [part='backdrop'] {
          z-index: -1;
          content: '';
          background: rgba(0, 0, 0, 0.5);
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          pointer-events: auto;
        }
      </style>

      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,template:{type:Object,notify:!0},content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),this._observer=new i.o(this,(t=>{this._setTemplateFromNodes(t.addedNodes)})),this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this),S.gn&&(this._boundIosResizeListener=()=>this._detectIosNavbar()),this.__focusTrapController=new I.f(this)}ready(){super.ready(),this._observer.flush(),this.addEventListener("click",(()=>{})),this.$.backdrop.addEventListener("click",(()=>{})),this.addController(this.__focusTrapController)}_detectIosNavbar(){if(!this.opened)return;const t=window.innerHeight,e=window.innerWidth>t,r=document.documentElement.clientHeight;e&&r>t?this.style.setProperty("--vaadin-overlay-viewport-bottom",r-t+"px"):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_setTemplateFromNodes(t){this.template=t.find((t=>t.localName&&"template"===t.localName))||this.template}close(t){const e=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),e.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this.content,this.owner,this.model)}_ironOverlayCanceled(t){t.preventDefault()}_mouseDownListener(t){this._mouseDownInside=t.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(t){this._mouseUpInside=t.composedPath().indexOf(this.$.overlay)>=0}_outsideClickListener(t){if(t.composedPath().includes(this.$.overlay)||this._mouseDownInside||this._mouseUpInside)return this._mouseDownInside=!1,void(this._mouseUpInside=!1);if(!this._last)return;const e=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),this.opened&&!e.defaultPrevented&&this.close(t)}_keydownListener(t){if(this._last&&(!this.modeless||t.composedPath().includes(this.$.overlay))&&"Escape"===t.key){const e=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),this.opened&&!e.defaultPrevented&&this.close(t)}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}_openedChanged(t,e){this._instance||this._ensureTemplatized(),t?(this.__restoreFocusNode=this._getActiveElement(),this._animatedOpening(),(0,s.T8)(this,(()=>{this.focusTrap&&this.__focusTrapController.trapFocus(this.$.overlay);const t=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(t)})),document.addEventListener("keydown",this._boundKeydownListener),this.modeless||this._addGlobalListeners()):e&&(this.focusTrap&&this.__focusTrapController.releaseFocus(),this._animatedClosing(),document.removeEventListener("keydown",this._boundKeydownListener),this.modeless||this._removeGlobalListeners())}_hiddenChanged(t){t&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const t=getComputedStyle(this).getPropertyValue("animation-name");return!("none"===getComputedStyle(this).getPropertyValue("display"))&&t&&"none"!==t}_enqueueAnimation(t,e){const r=`__${t}Handler`,o=t=>{t&&t.target!==this||(e(),this.removeEventListener("animationend",o),delete this[r])};this[r]=o,this.addEventListener("animationend",o)}_flushAnimation(t){const e=`__${t}Handler`;"function"==typeof this[e]&&this[e]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening",""),this._shouldAnimate()?this._enqueueAnimation("opening",(()=>{this._finishOpening()})):this._finishOpening()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_finishOpening(){document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this.removeAttribute("opening")}_finishClosing(){document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this._detachOverlay(),this.$.overlay.style.removeProperty("pointer-events"),this.removeAttribute("closing")}_animatedClosing(){if(this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder){this._exitModalState();const t=this.restoreFocusNode||this.__restoreFocusNode;if(this.restoreFocusOnClose&&t){const e=this._getActiveElement();(e===document.body||this._deepContains(e))&&setTimeout((()=>t.focus())),this.__restoreFocusNode=null}this.setAttribute("closing",""),this.dispatchEvent(new CustomEvent("vaadin-overlay-closing")),this._shouldAnimate()?this._enqueueAnimation("closing",(()=>{this._finishClosing()})):this._finishClosing()}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}static get __attachedInstances(){return Array.from(document.body.children).filter((t=>t instanceof T&&!t.hasAttribute("closing"))).sort(((t,e)=>t.__zIndex-e.__zIndex||0))}get _last(){return this===T.__attachedInstances.pop()}_modelessChanged(t){t?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0)}_enterModalState(){"none"!==document.body.style.pointerEvents&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),T.__attachedInstances.forEach((t=>{t!==this&&(t.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")}))}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0)}_exitModalState(){void 0!==this._previousDocumentPointerEvents&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const t=T.__attachedInstances;let e;for(;(e=t.pop())&&(e===this||(e.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),e.modeless)););}_removeOldContent(){this.content&&this._contentNodes&&(this._observer.disconnect(),this._contentNodes.forEach((t=>{t.parentNode===this.content&&this.content.removeChild(t)})),this._originalContentPart&&(this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content),this.$.content=this._originalContentPart,this._originalContentPart=void 0),this._observer.connect(),this._contentNodes=void 0,this.content=void 0)}_stampOverlayTemplate(t){this._removeOldContent(),t._Templatizer||(t._Templatizer=A(t,this,{forwardHostProp(t,e){this._instance&&this._instance.forwardHostProp(t,e)}})),this._instance=new t._Templatizer({}),this._contentNodes=Array.from(this._instance.root.childNodes);const e=t._templateRoot||(t._templateRoot=t.getRootNode());if(e!==document){this.$.content.shadowRoot||this.$.content.attachShadow({mode:"open"});let t=Array.from(e.querySelectorAll("style")).reduce(((t,e)=>t+e.textContent),"");if(t=t.replace(/:host/g,":host-nomatch"),t){const e=document.createElement("style");e.textContent=t,this.$.content.shadowRoot.appendChild(e),this._contentNodes.unshift(e)}this.$.content.shadowRoot.appendChild(this._instance.root),this.content=this.$.content.shadowRoot}else this.appendChild(this._instance.root),this.content=this}_removeNewRendererOrTemplate(t,e,r,o){t!==e?this.template=void 0:r!==o&&(this.renderer=void 0)}_templateOrRendererChanged(t,e,r,o,n){if(t&&e)throw this._removeNewRendererOrTemplate(t,this._oldTemplate,e,this._oldRenderer),new Error("You should only use either a renderer or a template for overlay content");const i=this._oldOwner!==r||this._oldModel!==o;this._oldModel=o,this._oldOwner=r;const s=this._oldTemplate!==t;this._oldTemplate=t;const a=this._oldRenderer!==e;this._oldRenderer=e;const l=this._oldOpened!==n;this._oldOpened=n,a&&(this.content=this,this.content.innerHTML="",delete this.content._$litPart$),t&&s?this._stampOverlayTemplate(t):e&&(a||l||i)&&n&&this.requestContentUpdate()}_getActiveElement(){let t=document.activeElement||document.body;for(;t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}_deepContains(t){if(this.contains(t))return!0;let e=t;const r=t.ownerDocument;for(;e&&e!==r&&e!==this;)e=e.parentNode||e.host;return e===this}bringToFront(){let t="";const e=T.__attachedInstances.filter((t=>t!==this)).pop();e&&(t=e.__zIndex+1),this.style.zIndex=t,this.__zIndex=t||parseFloat(getComputedStyle(this).zIndex)}}customElements.define(T.is,T),r(9098);const k=n.iv`
  [part~='loader'] {
    box-sizing: border-box;
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
    border: 2px solid transparent;
    border-color: var(--lumo-primary-color-10pct) var(--lumo-primary-color-10pct) var(--lumo-primary-color)
      var(--lumo-primary-color);
    border-radius: calc(0.5 * var(--lumo-icon-size-s));
    opacity: 0;
    pointer-events: none;
  }

  :host(:not([loading])) [part~='loader'] {
    display: none;
  }

  :host([loading]) [part~='loader'] {
    animation: 1s linear infinite lumo-loader-rotate, 0.3s 0.1s lumo-loader-fade-in both;
  }

  @keyframes lumo-loader-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes lumo-loader-rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;var z=r(6754);const N=n.iv`
  [part='content'] {
    padding: 0;
  }

  :host {
    --_vaadin-combo-box-items-container-border-width: var(--lumo-space-xs);
    --_vaadin-combo-box-items-container-border-style: solid;
    --_vaadin-combo-box-items-container-border-color: transparent;
  }

  /* Loading state */

  /* When items are empty, the spinner needs some room */
  :host(:not([closing])) [part~='content'] {
    min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));
  }

  [part~='overlay'] {
    position: relative;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }

  [part~='loader'] {
    position: absolute;
    z-index: 1;
    left: var(--lumo-space-s);
    right: var(--lumo-space-s);
    top: var(--lumo-space-s);
    margin-left: auto;
    margin-inline-start: auto;
    margin-inline-end: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part~='loader'] {
    left: auto;
    margin-left: 0;
    margin-right: auto;
    margin-inline-start: 0;
    margin-inline-end: auto;
  }
`;(0,n.hC)("vaadin-combo-box-overlay",[o.I,z.e,N,k],{moduleId:"lumo-combo-box-overlay"}),r(1735),r(4173);const L=n.iv`
  :host {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-xs);
    padding: 0.5em calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4) 0.5em
      var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
    min-height: var(--lumo-size-m);
    outline: none;
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
  }

  /* Checkmark */
  [part='checkmark']::before {
    display: var(--_lumo-item-selected-icon-display, none);
    content: var(--lumo-icons-checkmark);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    line-height: 1;
    font-weight: normal;
    width: 1em;
    height: 1em;
    margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
    color: var(--lumo-primary-text-color);
    flex: none;
    opacity: 0;
    transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), opacity 0.1s;
  }

  :host([selected]) [part='checkmark']::before {
    opacity: 1;
  }

  :host([active]:not([selected])) [part='checkmark']::before {
    transform: scale(0.8);
    opacity: 0;
    transition-duration: 0s;
  }

  [part='content'] {
    flex: auto;
  }

  /* Disabled */
  :host([disabled]) {
    color: var(--lumo-disabled-text-color);
    cursor: default;
    pointer-events: none;
  }

  /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
  @media (any-hover: hover) {
    :host(:hover:not([disabled])) {
      background-color: var(--lumo-primary-color-10pct);
    }

    :host([focus-ring]:not([disabled])) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }
  }

  /* RTL specific styles */
  :host([dir='rtl']) {
    padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
  }

  /* Slotted icons */
  :host ::slotted(vaadin-icon),
  :host ::slotted(iron-icon) {
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }
`;(0,n.hC)("vaadin-item",L,{moduleId:"lumo-item"});const R=n.iv`
  :host {
    transition: background-color 100ms;
    overflow: hidden;
    --_lumo-item-selected-icon-display: block;
  }

  @media (any-hover: hover) {
    :host([focused]:not([disabled])) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }
  }
`;(0,n.hC)("vaadin-combo-box-item",[L,R],{moduleId:"lumo-combo-box-item"}),r(3787);var M=r(3208);const j=n.iv`
  [part~='toggle-button']::before {
    content: var(--lumo-icons-clock);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`;(0,n.hC)("vaadin-time-picker",[M.J,j],{moduleId:"lumo-time-picker"}),r(2241);class V extends((0,n.Tb)((0,O.U)(E.H3))){static get template(){return E.dy`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-combo-box-item"}static get properties(){return{index:Number,item:Object,label:String,selected:{type:Boolean,value:!1,reflectToAttribute:!0},focused:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,_oldRenderer:Function}}static get observers(){return["__rendererOrItemChanged(renderer, index, item.*, selected, focused)","__updateLabel(label, renderer)"]}connectedCallback(){super.connectedCallback(),this._comboBox=this.parentNode.comboBox;const t=this._comboBox.getAttribute("dir");t&&this.setAttribute("dir",t)}requestContentUpdate(){if(!this.renderer)return;const t={index:this.index,item:this.item,focused:this.focused,selected:this.selected};this.renderer(this,this._comboBox,t)}__rendererOrItemChanged(t,e,r){void 0!==r&&void 0!==e&&(this._oldRenderer!==t&&(this.innerHTML="",delete this._$litPart$),t&&(this._oldRenderer=t,this.requestContentUpdate()))}__updateLabel(t,e){e||(this.textContent=t)}}customElements.define(V.is,V);class D extends V{static get is(){return"vaadin-time-picker-item"}}customElements.define(D.is,D);var $=r(3971),H=r(7913),B=r(6139);const F=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),U=F&&F[1]>=8,q={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){const t=this._virtualCount;return Math.max(0,t-this._physicalCount)},get _virtualStart(){return this._virtualStartVal||0},set _virtualStart(t){t=this._clamp(t,0,this._maxVirtualStart),this._virtualStartVal=t},get _physicalStart(){return this._physicalStartVal||0},set _physicalStart(t){(t%=this._physicalCount)<0&&(t=this._physicalCount+t),this._physicalStartVal=t},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},get _physicalCount(){return this._physicalCountVal||0},set _physicalCount(t){this._physicalCountVal=t},get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){let t=this._firstVisibleIndexVal;if(null==t){let e=this._physicalTop+this._scrollOffset;t=this._iterateItems(((t,r)=>{if(e+=this._getPhysicalSizeIncrement(t),e>this._scrollPosition)return r}))||0,this._firstVisibleIndexVal=t}return t},get lastVisibleIndex(){let t=this._lastVisibleIndexVal;if(null==t){let e=this._physicalTop+this._scrollOffset;this._iterateItems(((r,o)=>{e<this._scrollBottom&&(t=o),e+=this._getPhysicalSizeIncrement(r)})),this._lastVisibleIndexVal=t}return t},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler(){const t=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let e=t-this._scrollPosition;const r=e>=0;if(this._scrollPosition=t,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(e)>this._physicalSize&&this._physicalSize>0){e-=this._scrollOffset;const t=Math.round(e/this._physicalAverage);this._virtualStart+=t,this._physicalStart+=t,this._physicalTop=Math.min(Math.floor(this._virtualStart)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){const t=this._getReusables(r);r?(this._physicalTop=t.physicalTop,this._virtualStart+=t.indexes.length,this._physicalStart+=t.indexes.length):(this._virtualStart-=t.indexes.length,this._physicalStart-=t.indexes.length),this._update(t.indexes,r?null:t.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),H.YA)}},_getReusables(t){let e,r,o;const n=[],i=this._hiddenContentSize*this._ratio,s=this._virtualStart,a=this._virtualEnd,l=this._physicalCount;let c=this._physicalTop+this._scrollOffset;const d=this._physicalBottom+this._scrollOffset,u=this._scrollPosition,h=this._scrollBottom;for(t?(e=this._physicalStart,r=u-c):(e=this._physicalEnd,r=d-h);o=this._getPhysicalSizeIncrement(e),r-=o,!(n.length>=l||r<=i);)if(t){if(a+n.length+1>=this._virtualCount)break;if(c+o>=u-this._scrollOffset)break;n.push(e),c+=o,e=(e+1)%l}else{if(s-n.length<=0)break;if(c+this._physicalSize-o<=h)break;n.push(e),c-=o,e=0===e?l-1:e-1}return{indexes:n,physicalTop:c-this._scrollOffset}},_update(t,e){if(!(t&&0===t.length||0===this._physicalCount)){if(this._assignModels(t),this._updateMetrics(t),e)for(;e.length;){const t=e.pop();this._physicalTop-=this._getPhysicalSizeIncrement(t)}this._positionItems(),this._updateScrollerSize()}},_isClientFull(){return 0!==this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded(t){const e=this._clamp(this._physicalCount+t,3,this._virtualCount-this._virtualStart)-this._physicalCount;let r=Math.round(.5*this._physicalCount);if(!(e<0)){if(e>0){const t=window.performance.now();[].push.apply(this._physicalItems,this._createPool(e));for(let t=0;t<e;t++)this._physicalSizes.push(0);this._physicalCount+=e,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=e),this._update(),this._templateCost=(window.performance.now()-t)/e,r=Math.round(.5*this._physicalCount)}this._virtualEnd>=this._virtualCount-1||0===r||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,r)),H.t$):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,r),H.YA))}},_render(){if(this.isAttached&&this._isVisible)if(0!==this._physicalCount){const t=this._getReusables(!0);this._physicalTop=t.physicalTop,this._virtualStart+=t.indexes.length,this._physicalStart+=t.indexes.length,this._update(t.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(3))},_itemsChanged(t){"items"===t.path&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,H.rs))},_iterateItems(t,e){let r,o,n,i;if(2===arguments.length&&e){for(i=0;i<e.length;i++)if(r=e[i],o=this._computeVidx(r),null!=(n=t.call(this,r,o)))return n}else{for(r=this._physicalStart,o=this._virtualStart;r<this._physicalCount;r++,o++)if(null!=(n=t.call(this,r,o)))return n;for(r=0;r<this._physicalStart;r++,o++)if(null!=(n=t.call(this,r,o)))return n}},_computeVidx(t){return t>=this._physicalStart?this._virtualStart+(t-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+t},_positionItems(){this._adjustScrollPosition();let t=this._physicalTop;this._iterateItems((e=>{this.translate3d(0,`${t}px`,0,this._physicalItems[e]),t+=this._physicalSizes[e]}))},_getPhysicalSizeIncrement(t){return this._physicalSizes[t]},_adjustScrollPosition(){const t=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(0!==t){this._physicalTop-=t;const e=this._scrollPosition;!U&&e>0&&this._resetScrollPosition(e-t)}},_resetScrollPosition(t){this.scrollTarget&&t>=0&&(this._scrollTop=t,this._scrollPosition=this._scrollTop)},_updateScrollerSize(t){this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,((t=(t=t||0===this._scrollHeight)||this._scrollPosition>=this._estScrollHeight-this._physicalSize)||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=`${this._estScrollHeight}px`,this._scrollHeight=this._estScrollHeight)},scrollToIndex(t){if("number"!=typeof t||t<0||t>this.items.length-1)return;if((0,B.yl)(),0===this._physicalCount)return;t=this._clamp(t,0,this._virtualCount-1),(!this._isIndexRendered(t)||t>=this._maxVirtualStart)&&(this._virtualStart=t-1),this._assignModels(),this._updateMetrics(),this._physicalTop=this._virtualStart*this._physicalAverage;let e=this._physicalStart,r=this._virtualStart,o=0;const n=this._hiddenContentSize;for(;r<t&&o<=n;)o+=this._getPhysicalSizeIncrement(e),e=(e+1)%this._physicalCount,r+=1;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+o),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null},_resetAverage(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler(){this._debounce("_render",(()=>{this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)}),H.rs)},_isIndexRendered(t){return t>=this._virtualStart&&t<=this._virtualEnd},_getPhysicalIndex(t){return(this._physicalStart+(t-this._virtualStart))%this._physicalCount},_clamp(t,e,r){return Math.min(r,Math.max(e,t))},_debounce(t,e,r){this._debouncers=this._debouncers||{},this._debouncers[t]=B.dx.debounce(this._debouncers[t],r,e.bind(this)),(0,B.Ex)(this._debouncers[t])}},W=1e3;class Y{constructor({createElements:t,updateElement:e,scrollTarget:r,scrollContainer:o,elementsContainer:n,reorderElements:i}){this.isAttached=!0,this._vidxOffset=0,this.createElements=t,this.updateElement=e,this.scrollTarget=r,this.scrollContainer=o,this.elementsContainer=n||o,this.reorderElements=i,this._maxPages=1.3,this.__placeholderHeight=200,this.__elementHeightQueue=Array(10),this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500,FIX_INVALID_ITEM_POSITIONING:100},this.__resizeObserver=new ResizeObserver((()=>this._resizeHandler())),"visible"===getComputedStyle(this.scrollTarget).overflow&&(this.scrollTarget.style.overflow="auto"),"static"===getComputedStyle(this.scrollContainer).position&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",(()=>this._scrollHandler())),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("wheel",(t=>this.__onWheel(t))),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",(()=>{this.__mouseDown=!0})),this.scrollTarget.addEventListener("mouseup",(()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()})))}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}scrollToIndex(t){if("number"!=typeof t||isNaN(t)||0===this.size||!this.scrollTarget.offsetHeight)return;t=this._clamp(t,0,this.size-1);const e=this.__getVisibleElements().length;let r=Math.floor(t/this.size*this._virtualCount);this._virtualCount-r<e?(r=this._virtualCount-(this.size-t),this._vidxOffset=this.size-this._virtualCount):r<e?t<W?(r=t,this._vidxOffset=0):(r=W,this._vidxOffset=t-r):this._vidxOffset=t-r,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(r),this.adjustedFirstVisibleIndex!==t&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(t)||0),this._scrollHandler()}flush(){0!==this.scrollTarget.offsetHeight&&(this._resizeHandler(),(0,B.yl)(),this._scrollHandler(),this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.flush(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush())}update(t=0,e=this.size-1){this.__getVisibleElements().forEach((r=>{r.__virtualIndex>=t&&r.__virtualIndex<=e&&this.__updateElement(r,r.__virtualIndex,!0)}))}_updateMetrics(t){(0,B.yl)();let e=0,r=0;const o=this._physicalAverageCount,n=this._physicalAverage;this._iterateItems(((t,o)=>{r+=this._physicalSizes[t],this._physicalSizes[t]=Math.ceil(this.__getBorderBoxHeight(this._physicalItems[t])),e+=this._physicalSizes[t],this._physicalAverageCount+=this._physicalSizes[t]?1:0}),t),this._physicalSize=this._physicalSize+e-r,this._physicalAverageCount!==o&&(this._physicalAverage=Math.round((n*o+e)/this._physicalAverageCount))}__getBorderBoxHeight(t){const e=getComputedStyle(t),r=parseFloat(e.height)||0;return"border-box"===e.boxSizing?r:r+(parseFloat(e.paddingBottom)||0)+(parseFloat(e.paddingTop)||0)+(parseFloat(e.borderBottomWidth)||0)+(parseFloat(e.borderTopWidth)||0)}__updateElement(t,e,r){t.style.paddingTop&&(t.style.paddingTop=""),this.__preventElementUpdates||t.__lastUpdatedIndex===e&&!r||(this.updateElement(t,e),t.__lastUpdatedIndex=e);const o=t.offsetHeight;if(0===o)t.style.paddingTop=`${this.__placeholderHeight}px`,requestAnimationFrame((()=>this._resizeHandler()));else{this.__elementHeightQueue.push(o),this.__elementHeightQueue.shift();const t=this.__elementHeightQueue.filter((t=>void 0!==t));this.__placeholderHeight=Math.round(t.reduce(((t,e)=>t+e),0)/t.length)}}__getIndexScrollOffset(t){const e=this.__getVisibleElements().find((e=>e.__virtualIndex===t));return e?this.scrollTarget.getBoundingClientRect().top-e.getBoundingClientRect().top:void 0}get size(){return this.__size}set size(t){if(t===this.size)return;let e,r;if(this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.cancel(),this._debouncers&&this._debouncers._increasePoolIfNeeded&&this._debouncers._increasePoolIfNeeded.cancel(),this.__preventElementUpdates=!0,t>0&&(e=this.adjustedFirstVisibleIndex,r=this.__getIndexScrollOffset(e)),this.__size=t,this._itemsChanged({path:"items"}),(0,B.yl)(),t>0){e=Math.min(e,t-1),this.scrollToIndex(e);const o=this.__getIndexScrollOffset(e);void 0!==r&&void 0!==o&&(this._scrollTop+=r-o)}this.elementsContainer.children.length||requestAnimationFrame((()=>this._resizeHandler())),this.__preventElementUpdates=!1,this._resizeHandler(),(0,B.yl)()}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(t){this.scrollTarget.scrollTop=t}get items(){return{length:Math.min(this.size,1e5)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){const t=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(t["padding-top"],10),this._isRTL=Boolean("rtl"===t.direction),this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(t){const e=this.createElements(t),r=document.createDocumentFragment();return e.forEach((t=>{t.style.position="absolute",r.appendChild(t),this.__resizeObserver.observe(t)})),this.elementsContainer.appendChild(r),e}_assignModels(t){this._iterateItems(((t,e)=>{const r=this._physicalItems[t];r.hidden=e>=this.size,r.hidden?delete r.__lastUpdatedIndex:(r.__virtualIndex=e+(this._vidxOffset||0),this.__updateElement(r,r.__virtualIndex))}),t)}_isClientFull(){return setTimeout((()=>{this.__clientFull=!0})),this.__clientFull||super._isClientFull()}translate3d(t,e,r,o){o.style.transform=`translateY(${e})`}toggleScrollListener(){}_scrollHandler(){this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0));const t=this.scrollTarget.scrollTop-this._scrollPosition;if(super._scrollHandler(),0!==this._physicalCount){const e=t>=0,r=this._getReusables(!e);r.indexes.length&&(this._physicalTop=r.physicalTop,e?(this._virtualStart-=r.indexes.length,this._physicalStart-=r.indexes.length):(this._virtualStart+=r.indexes.length,this._physicalStart+=r.indexes.length),this._resizeHandler())}t&&(this.__fixInvalidItemPositioningDebouncer=B.dx.debounce(this.__fixInvalidItemPositioningDebouncer,H.Wc.after(this.timeouts.FIX_INVALID_ITEM_POSITIONING),(()=>this.__fixInvalidItemPositioning()))),this.reorderElements&&(this.__scrollReorderDebouncer=B.dx.debounce(this.__scrollReorderDebouncer,H.Wc.after(this.timeouts.SCROLL_REORDER),(()=>this.__reorderElements()))),this.__previousScrollTop=this._scrollTop,0===this._scrollTop&&0!==this.firstVisibleIndex&&Math.abs(t)>0&&this.scrollToIndex(0)}__fixInvalidItemPositioning(){if(!this.scrollTarget.isConnected)return;const t=this._physicalTop>this._scrollTop,e=this._physicalBottom<this._scrollBottom,r=0===this.adjustedFirstVisibleIndex,o=this.adjustedLastVisibleIndex===this.size-1;if(t&&!r||e&&!o){const t=e,r=this._ratio;this._ratio=0,this._scrollPosition=this._scrollTop+(t?-1:1),this._scrollHandler(),this._ratio=r}}__onWheel(t){if(t.ctrlKey||this._hasScrolledAncestor(t.target,t.deltaX,t.deltaY))return;let e=t.deltaY;if(t.deltaMode===WheelEvent.DOM_DELTA_LINE?e*=this._scrollLineHeight:t.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(e*=this._scrollPageHeight),this._deltaYAcc=this._deltaYAcc||0,this._wheelAnimationFrame)return this._deltaYAcc+=e,void t.preventDefault();e+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this.__debouncerWheelAnimationFrame=B.dx.debounce(this.__debouncerWheelAnimationFrame,H.rs,(()=>{this._wheelAnimationFrame=!1}));const r=Math.abs(t.deltaX)+Math.abs(e);this._canScroll(this.scrollTarget,t.deltaX,e)?(t.preventDefault(),this.scrollTarget.scrollTop+=e,this.scrollTarget.scrollLeft+=t.deltaX,this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=B.dx.debounce(this._debouncerIgnoreNewWheel,H.Wc.after(this.timeouts.IGNORE_WHEEL),(()=>{this._ignoreNewWheel=!1}))):this._hasResidualMomentum&&r<=this._previousMomentum||this._ignoreNewWheel?t.preventDefault():r>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=r}_hasScrolledAncestor(t,e,r){return t!==this.scrollTarget&&t!==this.scrollTarget.getRootNode().host&&(!(!this._canScroll(t,e,r)||-1===["auto","scroll"].indexOf(getComputedStyle(t).overflow))||(t!==this&&t.parentElement?this._hasScrolledAncestor(t.parentElement,e,r):void 0))}_canScroll(t,e,r){return r>0&&t.scrollTop<t.scrollHeight-t.offsetHeight||r<0&&t.scrollTop>0||e>0&&t.scrollLeft<t.scrollWidth-t.offsetWidth||e<0&&t.scrollLeft>0}_getScrollLineHeight(){const t=document.createElement("div");t.style.fontSize="initial",t.style.display="none",document.body.appendChild(t);const e=window.getComputedStyle(t).fontSize;return document.body.removeChild(t),e?window.parseInt(e):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter((t=>!t.hidden))}__reorderElements(){if(this.__mouseDown)return void(this.__pendingReorder=!0);this.__pendingReorder=!1;const t=this._virtualStart+(this._vidxOffset||0),e=this.__getVisibleElements(),r=e.find((t=>t.contains(this.elementsContainer.getRootNode().activeElement)||t.contains(this.scrollTarget.getRootNode().activeElement)))||e[0];if(!r)return;const o=r.__virtualIndex-t,n=e.indexOf(r)-o;if(n>0)for(let t=0;t<n;t++)this.elementsContainer.appendChild(e[t]);else if(n<0)for(let t=e.length+n;t<e.length;t++)this.elementsContainer.insertBefore(e[t],e[0]);if(S.G6){const{transform:t}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout((()=>{this.scrollTarget.style.transform=t}))}}_adjustVirtualIndexOffset(t){if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust)this.__skipNextVirtualIndexAdjust=!1;else if(Math.abs(t)>1e4){const t=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.offsetHeight),e=t*this.size;this._vidxOffset=Math.round(e-t*this._virtualCount)}else{const t=this._vidxOffset,e=W,r=100;0===this._scrollTop?(this._vidxOffset=0,t!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<e&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,r),super.scrollToIndex(this.firstVisibleIndex+(t-this._vidxOffset)));const o=this.size-this._virtualCount;this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=o,t!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-e&&this._vidxOffset<o&&(this._vidxOffset+=Math.min(o-this._vidxOffset,r),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-t)))}}}Object.setPrototypeOf(Y.prototype,q);class G{constructor(t){this.__adapter=new Y(t)}get size(){return this.__adapter.size}set size(t){this.__adapter.size=t}scrollToIndex(t){this.__adapter.scrollToIndex(t)}update(t=0,e=this.size-1){this.__adapter.update(t,e)}flush(){this.__adapter.flush()}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}}const K=class{toString(){return""}};class J extends E.H3{static get is(){return"vaadin-combo-box-scroller"}static get template(){return E.dy`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-combo-box-items-container-border-width);
          border-style: var(--_vaadin-combo-box-items-container-border-style);
          border-color: var(--_vaadin-combo-box-items-container-border-color);
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}static get properties(){return{items:{type:Array,observer:"__itemsChanged"},focusedIndex:{type:Number,observer:"__focusedIndexChanged"},loading:{type:Boolean,observer:"__loadingChanged"},opened:{type:Boolean,observer:"__openedChanged"},selectedItem:{type:Object,observer:"__selectedItemChanged"},itemIdPath:{type:String},comboBox:{type:Object},getItemLabel:{type:Object},renderer:{type:Object,observer:"__rendererChanged"},theme:{type:String}}}constructor(){super(),this.__boundOnItemClick=this.__onItemClick.bind(this)}__openedChanged(t){t&&this.requestContentUpdate()}ready(){super.ready(),this.id=`${this.localName}-${(0,$.l)()}`,this.__hostTagName=this.constructor.is.replace("-scroller",""),this.setAttribute("role","listbox"),this.addEventListener("click",(t=>t.stopPropagation())),this.__patchWheelOverScrolling(),this.__virtualizer=new G({createElements:this.__createElements.bind(this),updateElement:this.__updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.$.selector})}requestContentUpdate(){this.__virtualizer&&this.__virtualizer.update()}scrollIntoView(t){if(!(this.opened&&t>=0))return;const e=this._visibleItemsCount();let r=t;t>this.__virtualizer.lastVisibleIndex-1?(this.__virtualizer.scrollToIndex(t),r=t-e+1):t>this.__virtualizer.firstVisibleIndex&&(r=this.__virtualizer.firstVisibleIndex),this.__virtualizer.scrollToIndex(Math.max(0,r));const o=[...this.children].find((t=>!t.hidden&&t.index===this.__virtualizer.lastVisibleIndex));if(!o||t!==o.index)return;const n=o.getBoundingClientRect(),i=this.getBoundingClientRect(),s=n.bottom-i.bottom+this._viewportTotalPaddingBottom;s>0&&(this.scrollTop+=s)}__getAriaRole(t){return void 0!==t&&"option"}__isItemFocused(t,e){return!this.loading&&t===e}_isItemSelected(t,e,r){return!(t instanceof K)&&(r&&void 0!==t&&void 0!==e?this.get(r,t)===this.get(r,e):t===e)}__itemsChanged(t){this.__virtualizer&&t&&(this.__virtualizer.size=t.length,this.__virtualizer.flush(),this.requestContentUpdate())}__loadingChanged(){this.requestContentUpdate()}__selectedItemChanged(){this.requestContentUpdate()}__focusedIndexChanged(t,e){t!==e&&this.requestContentUpdate(),t>=0&&!this.loading&&this.scrollIntoView(t)}__rendererChanged(t,e){(t||e)&&this.requestContentUpdate()}__createElements(t){return[...Array(t)].map((()=>{const t=document.createElement(`${this.__hostTagName}-item`);return t.addEventListener("click",this.__boundOnItemClick),t.tabIndex="-1",t.style.width="100%",t}))}__updateElement(t,e){const r=this.items[e],o=this.focusedIndex,n=this._isItemSelected(r,this.selectedItem,this.itemIdPath);t.setProperties({item:r,index:e,label:this.getItemLabel(r),selected:n,renderer:this.renderer,focused:this.__isItemFocused(o,e)}),t.id=`${this.__hostTagName}-item-${e}`,t.setAttribute("role",this.__getAriaRole(e)),t.setAttribute("aria-selected",n.toString()),t.setAttribute("aria-posinset",e+1),t.setAttribute("aria-setsize",this.items.length),this.theme?t.setAttribute("theme",this.theme):t.removeAttribute("theme"),r instanceof K&&this.__requestItemByIndex(e)}__onItemClick(t){this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:t.currentTarget.item}}))}__patchWheelOverScrolling(){this.$.selector.addEventListener("wheel",(t=>{const e=0===this.scrollTop,r=this.scrollHeight-this.scrollTop-this.clientHeight<=1;(e&&t.deltaY<0||r&&t.deltaY>0)&&t.preventDefault()}))}get _viewportTotalPaddingBottom(){if(void 0===this._cachedViewportTotalPaddingBottom){const t=window.getComputedStyle(this.$.selector);this._cachedViewportTotalPaddingBottom=[t.paddingBottom,t.borderBottomWidth].map((t=>parseInt(t,10))).reduce(((t,e)=>t+e))}return this._cachedViewportTotalPaddingBottom}__requestItemByIndex(t){requestAnimationFrame((()=>{this.dispatchEvent(new CustomEvent("index-requested",{detail:{index:t,currentScrollerPos:this._oldScrollerPosition}}))}))}_visibleItemsCount(){return this.__virtualizer.scrollToIndex(this.__virtualizer.firstVisibleIndex),this.__virtualizer.size>0?this.__virtualizer.lastVisibleIndex-this.__virtualizer.firstVisibleIndex+1:0}}customElements.define(J.is,J);class X extends J{static get is(){return"vaadin-time-picker-scroller"}}customElements.define(X.is,X);var Z=r(3726);const Q={start:"top",end:"bottom"},tt={start:"left",end:"right"},et=new ResizeObserver((t=>{setTimeout((()=>{t.forEach((t=>{t.target.__overlay&&t.target.__overlay._updatePosition()}))}))})),rt=t=>class extends t{static get properties(){return{positionTarget:{type:Object,value:null},horizontalAlign:{type:String,value:"start"},verticalAlign:{type:String,value:"top"},noHorizontalOverlap:{type:Boolean,value:!1},noVerticalOverlap:{type:Boolean,value:!1},requiredVerticalSpace:{type:Number,value:0}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap, requiredVerticalSpace)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.addEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes=(0,Z.AD)(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach((t=>{t.addEventListener("scroll",this.__onScroll,!0)}))}__removeUpdatePositionEventListeners(){window.removeEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach((t=>{t.removeEventListener("scroll",this.__onScroll,!0)})),this.__positionTargetAncestorRootNodes=null)}__overlayOpenedChanged(t,e){if(this.__removeUpdatePositionEventListeners(),e&&(e.__overlay=null,et.unobserve(e),t&&(this.__addUpdatePositionEventListeners(),e.__overlay=this,et.observe(e))),t){const t=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach((e=>{this.__margins[e]=parseInt(t[e],10)}))),this.setAttribute("dir",t.direction),this._updatePosition(),requestAnimationFrame((()=>this._updatePosition()))}}get __isRTL(){return"rtl"===this.getAttribute("dir")}__positionSettingsChanged(){this._updatePosition()}__onScroll(t){this.contains(t.target)||this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened)return;const t=this.positionTarget.getBoundingClientRect(),e=this.__shouldAlignStartVertically(t);this.style.justifyContent=e?"flex-start":"flex-end";const r=this.__shouldAlignStartHorizontally(t,this.__isRTL),o=!this.__isRTL&&r||this.__isRTL&&!r;this.style.alignItems=o?"flex-start":"flex-end";const n=this.getBoundingClientRect(),i=this.__calculatePositionInOneDimension(t,n,this.noVerticalOverlap,Q,this,e),s=this.__calculatePositionInOneDimension(t,n,this.noHorizontalOverlap,tt,this,r);Object.assign(this.style,i,s),this.toggleAttribute("bottom-aligned",!e),this.toggleAttribute("top-aligned",e),this.toggleAttribute("end-aligned",!o),this.toggleAttribute("start-aligned",o)}__shouldAlignStartHorizontally(t,e){const r=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const o=Math.min(window.innerWidth,document.documentElement.clientWidth),n=!e&&"start"===this.horizontalAlign||e&&"end"===this.horizontalAlign;return this.__shouldAlignStart(t,r,o,this.__margins,n,this.noHorizontalOverlap,tt)}__shouldAlignStartVertically(t){const e=this.requiredVerticalSpace||Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const r=Math.min(window.innerHeight,document.documentElement.clientHeight),o="top"===this.verticalAlign;return this.__shouldAlignStart(t,e,r,this.__margins,o,this.noVerticalOverlap,Q)}__shouldAlignStart(t,e,r,o,n,i,s){const a=r-t[i?s.end:s.start]-o[s.end],l=t[i?s.start:s.end]-o[s.start],c=n?a:l;return n===(c>(n?l:a)||c>e)}__adjustBottomProperty(t,e,r){let o;if(t===e.end){if(e.end===Q.end){const t=Math.min(window.innerHeight,document.documentElement.clientHeight);r>t&&this.__oldViewportHeight&&(o=r-(this.__oldViewportHeight-t)),this.__oldViewportHeight=t}if(e.end===tt.end){const t=Math.min(window.innerWidth,document.documentElement.clientWidth);r>t&&this.__oldViewportWidth&&(o=r-(this.__oldViewportWidth-t)),this.__oldViewportWidth=t}}return o}__calculatePositionInOneDimension(t,e,r,o,n,i){const s=i?o.start:o.end,a=i?o.end:o.start,l=parseFloat(n.style[s]||getComputedStyle(n)[s]),c=this.__adjustBottomProperty(s,o,l),d=e[i?o.start:o.end]-t[r===i?o.end:o.start];return{[s]:c?`${c}px`:`${l+d*(i?-1:1)}px`,[a]:""}}};let ot;(0,n.hC)("vaadin-combo-box-overlay",n.iv`
    #overlay {
      width: var(--vaadin-combo-box-overlay-width, var(--_vaadin-combo-box-overlay-default-width, auto));
    }

    [part='content'] {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  `,{moduleId:"vaadin-combo-box-overlay-styles"});class nt extends(rt(T)){static get is(){return"vaadin-combo-box-overlay"}static get template(){return ot||(ot=super.template.cloneNode(!0),ot.content.querySelector('[part~="overlay"]').removeAttribute("tabindex")),ot}static get observers(){return["_setOverlayWidth(positionTarget, opened)"]}connectedCallback(){super.connectedCallback();const t=this._comboBox,e=t&&t.getAttribute("dir");e&&this.setAttribute("dir",e)}ready(){super.ready();const t=document.createElement("div");t.setAttribute("part","loader");const e=this.shadowRoot.querySelector('[part~="content"]');e.parentNode.insertBefore(t,e),this.requiredVerticalSpace=200}_outsideClickListener(t){const e=t.composedPath();e.includes(this.positionTarget)||e.includes(this)||this.close()}_setOverlayWidth(t,e){if(t&&e){const e=this.localName;this.style.setProperty(`--_${e}-default-width`,`${t.clientWidth}px`);const r=getComputedStyle(this._comboBox).getPropertyValue(`--${e}-width`);""===r?this.style.removeProperty(`--${e}-width`):this.style.setProperty(`--${e}-width`,r),this._updatePosition()}}}customElements.define(nt.is,nt),(0,n.hC)("vaadin-time-picker-overlay",n.iv`
    #overlay {
      width: var(--vaadin-time-picker-overlay-width, var(--_vaadin-time-picker-overlay-default-width, auto));
    }
  `,{moduleId:"vaadin-time-picker-overlay-styles"});class it extends nt{static get is(){return"vaadin-time-picker-overlay"}}customElements.define(it.is,it);var st=r(1598),at=r(4530),lt=r(602),ct=r(5108),dt=r(6326);class ut{constructor(t){this.host=t,t.addEventListener("opened-changed",(()=>{t.opened||this.__setVirtualKeyboardEnabled(!1)})),t.addEventListener("blur",(()=>this.__setVirtualKeyboardEnabled(!0))),t.addEventListener("touchstart",(()=>this.__setVirtualKeyboardEnabled(!0)))}__setVirtualKeyboardEnabled(t){this.host.inputElement&&(this.host.inputElement.inputMode=t?"":"none")}}var ht=r(5108);function pt(t){return null!=t}function mt(t,e){return t.findIndex((t=>!(t instanceof K)&&e(t)))}const ft=t=>class extends((0,P.k)((0,lt.L)((0,dt.J)((0,st.f)(t))))){static get properties(){return{opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},autoOpenDisabled:{type:Boolean},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,items:{type:Array,observer:"_itemsChanged"},allowCustomValue:{type:Boolean,value:!1},filteredItems:{type:Array,observer:"_filteredItemsChanged"},_lastCommittedValue:String,loading:{type:Boolean,value:!1,reflectToAttribute:!0},_focusedIndex:{type:Number,observer:"_focusedIndexChanged",value:-1},filter:{type:String,value:"",notify:!0},selectedItem:{type:Object,notify:!0},itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged"},itemValuePath:{type:String,value:"value"},itemIdPath:String,_toggleElement:{type:Object,observer:"_toggleElementChanged"},_closeOnBlurIsPrevented:Boolean,_scroller:Object,_overlayOpened:{type:Boolean,observer:"_overlayOpenedChanged"}}}static get observers(){return["_selectedItemChanged(selectedItem, itemValuePath, itemLabelPath)","_openedOrItemsChanged(opened, filteredItems, loading)","_updateScroller(_scroller, filteredItems, opened, loading, selectedItem, itemIdPath, _focusedIndex, renderer, theme)"]}constructor(){super(),this._boundOnFocusout=this._onFocusout.bind(this),this._boundOverlaySelectedItemChanged=this._overlaySelectedItemChanged.bind(this),this._boundOnClearButtonMouseDown=this.__onClearButtonMouseDown.bind(this),this._boundOnClick=this._onClick.bind(this),this._boundOnOverlayTouchAction=this._onOverlayTouchAction.bind(this),this._boundOnTouchend=this._onTouchend.bind(this)}get _tagNamePrefix(){return"vaadin-combo-box"}get _inputElementValue(){return this.inputElement?this.inputElement[this._propertyForValue]:void 0}set _inputElementValue(t){this.inputElement&&(this.inputElement[this._propertyForValue]=t)}get _nativeInput(){return this.inputElement}_inputElementChanged(t){super._inputElementChanged(t);const e=this._nativeInput;e&&(e.autocomplete="off",e.autocapitalize="off",e.setAttribute("role","combobox"),e.setAttribute("aria-autocomplete","list"),e.setAttribute("aria-expanded",!!this.opened),e.setAttribute("spellcheck","false"),e.setAttribute("autocorrect","off"),this._revertInputValueToValue(),this.clearElement&&this.clearElement.addEventListener("mousedown",this._boundOnClearButtonMouseDown))}ready(){super.ready(),this._initOverlay(),this._initScroller(),this.addEventListener("focusout",this._boundOnFocusout),this._lastCommittedValue=this.value,this.addEventListener("click",this._boundOnClick),this.addEventListener("touchend",this._boundOnTouchend);const t=()=>{requestAnimationFrame((()=>{this.$.overlay.bringToFront()}))};var e;this.addEventListener("mousedown",t),this.addEventListener("touchstart",t),e=this,window.Vaadin&&window.Vaadin.templateRendererCallback?window.Vaadin.templateRendererCallback(e):e.querySelector("template")&&ct.warn(`WARNING: <template> inside <${e.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`),this.addController(new ut(this))}disconnectedCallback(){super.disconnectedCallback(),this.close()}requestContentUpdate(){this._scroller&&(this._scroller.requestContentUpdate(),this._getItemElements().forEach((t=>{t.requestContentUpdate()})))}open(){this.disabled||this.readonly||(this.opened=!0)}close(){this.opened=!1}_propertiesChanged(t,e,r){super._propertiesChanged(t,e,r),void 0!==e.filter&&this._filterChanged(e.filter)}_initOverlay(){const t=this.$.overlay;t._comboBox=this,t.addEventListener("touchend",this._boundOnOverlayTouchAction),t.addEventListener("touchmove",this._boundOnOverlayTouchAction),t.addEventListener("mousedown",(t=>t.preventDefault())),t.addEventListener("opened-changed",(t=>{this._overlayOpened=t.detail.value}))}_initScroller(t){const e=`${this._tagNamePrefix}-scroller`,r=this.$.overlay;r.renderer=t=>{t.firstChild||t.appendChild(document.createElement(e))},r.requestContentUpdate();const o=r.querySelector(e);o.comboBox=t||this,o.getItemLabel=this._getItemLabel.bind(this),o.addEventListener("selection-changed",this._boundOverlaySelectedItemChanged),this._scroller=o}_updateScroller(t,e,r,o,n,i,s,a,l){t&&(r&&(t.style.maxHeight=getComputedStyle(this).getPropertyValue(`--${this._tagNamePrefix}-overlay-max-height`)||"65vh"),t.setProperties({items:r?e:[],opened:r,loading:o,selectedItem:n,itemIdPath:i,focusedIndex:s,renderer:a,theme:l}))}_openedOrItemsChanged(t,e,r){this._overlayOpened=!(!t||!(r||e&&e.length))}_overlayOpenedChanged(t,e){t?(this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0})),this._onOpened()):e&&this.filteredItems&&this.filteredItems.length&&(this.close(),this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0})))}_focusedIndexChanged(t,e){void 0!==e&&this._updateActiveDescendant(t)}_isInputFocused(){return this.inputElement&&(0,at.Qw)(this.inputElement)}_updateActiveDescendant(t){const e=this._nativeInput;if(!e)return;const r=this._getItemElements().find((e=>e.index===t));r?e.setAttribute("aria-activedescendant",r.id):e.removeAttribute("aria-activedescendant")}_openedChanged(t,e){if(void 0===e)return;t?(this._openedWithFocusRing=this.hasAttribute("focus-ring"),this._isInputFocused()||S.T||this.focus(),this.$.overlay.restoreFocusOnClose=!0):(this._onClosed(),this._openedWithFocusRing&&this._isInputFocused()&&this.setAttribute("focus-ring",""));const r=this._nativeInput;r&&(r.setAttribute("aria-expanded",!!t),t?r.setAttribute("aria-controls",this._scroller.id):r.removeAttribute("aria-controls"))}_onOverlayTouchAction(){this._closeOnBlurIsPrevented=!0,this.inputElement.blur(),this._closeOnBlurIsPrevented=!1}_isClearButton(t){return t.composedPath()[0]===this.clearElement}_handleClearButtonClick(t){t.preventDefault(),this._clear(),this.opened&&this.requestContentUpdate()}_onToggleButtonClick(t){t.preventDefault(),this.opened?this.close():this.open()}_onHostClick(t){this.autoOpenDisabled||(t.preventDefault(),this.open())}_onClick(t){const e=t.composedPath();this._isClearButton(t)?this._handleClearButtonClick(t):e.indexOf(this._toggleElement)>-1?this._onToggleButtonClick(t):this._onHostClick(t)}_onKeyDown(t){super._onKeyDown(t),"Tab"===t.key?this.$.overlay.restoreFocusOnClose=!1:"ArrowDown"===t.key?(this._onArrowDown(),t.preventDefault()):"ArrowUp"===t.key&&(this._onArrowUp(),t.preventDefault())}_getItemLabel(t){let e=t&&this.itemLabelPath?this.get(this.itemLabelPath,t):void 0;return null==e&&(e=t?t.toString():""),e}_getItemValue(t){let e=t&&this.itemValuePath?this.get(this.itemValuePath,t):void 0;return void 0===e&&(e=t?t.toString():""),e}_onArrowDown(){if(this.opened){const t=this.filteredItems;t&&(this._focusedIndex=Math.min(t.length-1,this._focusedIndex+1),this._prefillFocusedItemLabel())}else this.open()}_onArrowUp(){if(this.opened){if(this._focusedIndex>-1)this._focusedIndex=Math.max(0,this._focusedIndex-1);else{const t=this.filteredItems;t&&(this._focusedIndex=t.length-1)}this._prefillFocusedItemLabel()}else this.open()}_prefillFocusedItemLabel(){if(this._focusedIndex>-1){const t=this.filteredItems[this._focusedIndex];this._inputElementValue=this._getItemLabel(t),this._markAllSelectionRange()}}_setSelectionRange(t,e){this._isInputFocused()&&this.inputElement.setSelectionRange&&this.inputElement.setSelectionRange(t,e)}_markAllSelectionRange(){void 0!==this._inputElementValue&&this._setSelectionRange(0,this._inputElementValue.length)}_clearSelectionRange(){if(void 0!==this._inputElementValue){const t=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(t,t)}}_closeOrCommit(){this.opened||this.loading?this.close():this._commitValue()}_onEnter(t){const e=this._focusedIndex<0&&""!==this._inputElementValue&&this._getItemLabel(this.selectedItem)!==this._inputElementValue;if(!this.allowCustomValue&&e)return t.preventDefault(),void t.stopPropagation();this.opened&&(t.preventDefault(),t.stopPropagation()),this._closeOrCommit()}_onEscape(t){this.autoOpenDisabled?this.opened||this.value!==this._inputElementValue&&this._inputElementValue.length>0?(t.stopPropagation(),this._focusedIndex=-1,this.cancel()):this.clearButtonVisible&&!this.opened&&this.value&&(t.stopPropagation(),this._clear()):this.opened?(t.stopPropagation(),this._focusedIndex>-1?(this._focusedIndex=-1,this._revertInputValue()):this.cancel()):this.clearButtonVisible&&this.value&&(t.stopPropagation(),this._clear())}_toggleElementChanged(t){t&&(t.addEventListener("mousedown",(t=>t.preventDefault())),t.addEventListener("click",(()=>{S.T&&!this._isInputFocused()&&document.activeElement.blur()})))}_clear(){this.selectedItem=null,this.allowCustomValue&&(this.value=""),this._detectAndDispatchChange()}cancel(){this._revertInputValueToValue(),this._lastCommittedValue=this.value,this._closeOrCommit()}_onOpened(){requestAnimationFrame((()=>{this._scrollIntoView(this._focusedIndex),this._updateActiveDescendant(this._focusedIndex)})),this._lastCommittedValue=this.value}_onClosed(){this.loading&&!this.allowCustomValue||this._commitValue()}_commitValue(){if(this._focusedIndex>-1){const t=this.filteredItems[this._focusedIndex];this.selectedItem!==t&&(this.selectedItem=t),this._inputElementValue=this._getItemLabel(this.selectedItem)}else if(""===this._inputElementValue||void 0===this._inputElementValue)this.selectedItem=null,this.allowCustomValue&&(this.value="");else{const t=[...this.filteredItems||[],this.selectedItem],e=t[this.__getItemIndexByLabel(t,this._inputElementValue)];if(this.allowCustomValue&&!e){const t=this._inputElementValue;this._lastCustomValue=t;const e=new CustomEvent("custom-value-set",{detail:t,composed:!0,cancelable:!0,bubbles:!0});this.dispatchEvent(e),e.defaultPrevented||(this.value=t)}else this.allowCustomValue||this.opened||!e?this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):this.value||"":this.value=this._getItemValue(e)}this._detectAndDispatchChange(),this._clearSelectionRange(),this.filter=""}get _propertyForValue(){return"value"}_onInput(t){const e=this._inputElementValue,r={};this.filter===e?this._filterChanged(this.filter):r.filter=e,this.opened||this._isClearButton(t)||this.autoOpenDisabled||(r.opened=!0),this.setProperties(r)}_onChange(t){t.stopPropagation()}_itemLabelPathChanged(t){"string"!=typeof t&&ht.error("You should set itemLabelPath to a valid string")}_filterChanged(t){this._scrollIntoView(0),this._focusedIndex=-1,this.items?this.filteredItems=this._filterItems(this.items,t):this._filteredItemsChanged(this.filteredItems)}_revertInputValue(){""!==this.filter?this._inputElementValue=this.filter:this._revertInputValueToValue(),this._clearSelectionRange()}_revertInputValueToValue(){this.allowCustomValue&&!this.selectedItem?this._inputElementValue=this.value:this._inputElementValue=this._getItemLabel(this.selectedItem)}_selectedItemChanged(t){if(null==t)this.filteredItems&&(this.allowCustomValue||(this.value=""),this._toggleHasValue(this._hasValue),this._inputElementValue=this.value);else{const e=this._getItemValue(t);if(this.value!==e&&(this.value=e,this.value!==e))return;this._toggleHasValue(!0),this._inputElementValue=this._getItemLabel(t)}this.filteredItems&&(this._focusedIndex=this.filteredItems.indexOf(t))}_valueChanged(t,e){""===t&&void 0===e||(pt(t)?(this._getItemValue(this.selectedItem)!==t&&this._selectItemForValue(t),!this.selectedItem&&this.allowCustomValue&&(this._inputElementValue=t),this._toggleHasValue(this._hasValue)):this.selectedItem=null,this.filter="",this._lastCommittedValue=void 0)}_detectAndDispatchChange(){this.value!==this._lastCommittedValue&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._lastCommittedValue=this.value)}_itemsChanged(t,e){this._ensureItemsOrDataProvider((()=>{this.items=e})),t?this.filteredItems=t.slice(0):e&&(this.filteredItems=null)}_filteredItemsChanged(t,e){const r=e?e[this._focusedIndex]:null,o=this.__getItemIndexByValue(t,this.value);(null===this.selectedItem||void 0===this.selectedItem)&&o>=0&&(this.selectedItem=t[o]);const n=this.__getItemIndexByValue(t,this._getItemValue(r));n>-1?this._focusedIndex=n:this.__setInitialFocusedIndex()}__setInitialFocusedIndex(){const t=this._inputElementValue;void 0===t||t===this._getItemLabel(this.selectedItem)?this._focusedIndex=this.__getItemIndexByLabel(this.filteredItems,this._getItemLabel(this.selectedItem)):this._focusedIndex=this.__getItemIndexByLabel(this.filteredItems,this.filter)}_filterItems(t,e){if(!t)return t;const r=t.filter((t=>(e=e?e.toString().toLowerCase():"",this._getItemLabel(t).toString().toLowerCase().indexOf(e)>-1)));return r}_selectItemForValue(t){const e=this.__getItemIndexByValue(this.filteredItems,t),r=this.selectedItem;e>=0?this.selectedItem=this.filteredItems[e]:this.dataProvider&&void 0===this.selectedItem?this.selectedItem=void 0:this.selectedItem=null,null===this.selectedItem&&null===r&&this._selectedItemChanged(this.selectedItem)}_getItemElements(){return Array.from(this._scroller.querySelectorAll(`${this._tagNamePrefix}-item`))}_scrollIntoView(t){this._scroller&&this._scroller.scrollIntoView(t)}__getItemIndexByValue(t,e){return t&&pt(e)?mt(t,(t=>this._getItemValue(t)===e)):-1}__getItemIndexByLabel(t,e){return t&&e?mt(t,(t=>this._getItemLabel(t).toString().toLowerCase()===e.toString().toLowerCase())):-1}_overlaySelectedItemChanged(t){t.stopPropagation(),t.detail.item instanceof K||this.opened&&(this._focusedIndex=this.filteredItems.indexOf(t.detail.item),this.close())}__onClearButtonMouseDown(t){t.preventDefault(),this.inputElement.focus()}_onFocusout(t){if(!t.relatedTarget||t.relatedTarget.localName!==`${this._tagNamePrefix}-item`)if(t.relatedTarget!==this.$.overlay){if(!this.readonly&&!this._closeOnBlurIsPrevented){if(!this.opened&&this.allowCustomValue&&this._inputElementValue===this._lastCustomValue)return void delete this._lastCustomValue;this._closeOrCommit()}}else t.composedPath()[0].focus()}_onTouchend(t){this.clearElement&&t.composedPath()[0]===this.clearElement&&(t.preventDefault(),this._clear())}};class _t extends(ft((0,n.Tb)(E.H3))){static get is(){return"vaadin-time-picker-combo-box"}static get template(){return E.dy`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <slot></slot>

      <vaadin-time-picker-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[positionTarget]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-time-picker-overlay>
    `}static get properties(){return{positionTarget:{type:Object}}}get _tagNamePrefix(){return"vaadin-time-picker"}get clearElement(){return this.querySelector('[part="clear-button"]')}ready(){super.ready(),this.allowCustomValue=!0,this._toggleElement=this.querySelector(".toggle-button"),this.setAttribute("dir","ltr")}}customElements.define(_t.is,_t);var gt=r(2521),vt=r(4463),yt=r(6174),bt=r(993),xt=r(6729),wt=r(9778),Ct=r(2743);const At="00:00:00.000",Et="23:59:59.999";(0,n.hC)("vaadin-time-picker",Ct.J,{moduleId:"vaadin-time-picker-styles"});class St extends((0,wt.I)((0,yt.L)((0,n.Tb)((0,gt.S)(E.H3))))){static get is(){return"vaadin-time-picker"}static get template(){return E.dy`
      <style>
        /* See https://github.com/vaadin/vaadin-time-picker/issues/145 */
        :host([dir='rtl']) [part='input-field'] {
          direction: ltr;
        }

        :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
          direction: rtl;
          text-align: left;
        }

        [part~='toggle-button'] {
          cursor: pointer;
        }
      </style>

      <div class="vaadin-time-picker-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-time-picker-combo-box
          id="comboBox"
          filtered-items="[[__dropdownItems]]"
          value="{{_comboBoxValue}}"
          opened="{{opened}}"
          disabled="[[disabled]]"
          readonly="[[readonly]]"
          clear-button-visible="[[clearButtonVisible]]"
          auto-open-disabled="[[autoOpenDisabled]]"
          position-target="[[_inputContainer]]"
          theme$="[[_theme]]"
          on-change="__onComboBoxChange"
        >
          <vaadin-input-container
            part="input-field"
            readonly="[[readonly]]"
            disabled="[[disabled]]"
            invalid="[[invalid]]"
            theme$="[[_theme]]"
          >
            <slot name="prefix" slot="prefix"></slot>
            <slot name="input"></slot>
            <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
            <div id="toggleButton" class="toggle-button" part="toggle-button" slot="suffix" aria-hidden="true"></div>
          </vaadin-input-container>
        </vaadin-time-picker-combo-box>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}static get properties(){return{value:{type:String,notify:!0,value:""},opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},min:{type:String,value:""},max:{type:String,value:""},step:{type:Number},autoOpenDisabled:Boolean,__dropdownItems:{type:Array},i18n:{type:Object,value:()=>({formatTime:t=>{if(!t)return;const e=(t=0,e="00")=>(e+t).substr((e+t).length-e.length);let r=`${e(t.hours)}:${e(t.minutes)}`;return void 0!==t.seconds&&(r+=`:${e(t.seconds)}`),void 0!==t.milliseconds&&(r+=`.${e(t.milliseconds,"000")}`),r},parseTime:t=>{const e="(\\d|[0-5]\\d)",r=new RegExp(`^(\\d|[0-1]\\d|2[0-3])(?::${e}(?::${e}(?:\\.(\\d{1,3}))?)?)?$`).exec(t);if(r){if(r[4])for(;r[4].length<3;)r[4]+="0";return{hours:r[1],minutes:r[2],seconds:r[3],milliseconds:r[4]}}}})},_comboBoxValue:{type:String,observer:"__comboBoxValueChanged"},_inputContainer:Object}}static get observers(){return["__updateDropdownItems(i18n.*, min, max, step)"]}static get constraints(){return[...super.constraints,"min","max"]}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new bt.b(this,(t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t}))),this.addController(new xt.v(this.inputElement,this._labelController)),this._inputContainer=this.shadowRoot.querySelector('[part~="input-field"]'),this._tooltipController=new vt.f(this),this._tooltipController.setShouldShow((t=>!t.opened)),this._tooltipController.setPosition("top"),this.addController(this._tooltipController)}_inputElementChanged(t){super._inputElementChanged(t),t&&this.$.comboBox._setInputElement(t)}open(){this.disabled||this.readonly||(this.opened=!0)}close(){this.opened=!1}checkValidity(){return!(!this.inputElement.checkValidity()||this.value&&!this._timeAllowed(this.i18n.parseTime(this.value))||this._comboBoxValue&&!this.i18n.parseTime(this._comboBoxValue))}_setFocused(t){super._setFocused(t),t||this.validate()}__validDayDivisor(t){return!t||86400%t==0||t<1&&t%1*1e3%1==0}_onKeyDown(t){if(super._onKeyDown(t),this.readonly||this.disabled||this.__dropdownItems.length)return;const e=this.__validDayDivisor(this.step)&&this.step||60;40===t.keyCode?this.__onArrowPressWithStep(-e):38===t.keyCode&&this.__onArrowPressWithStep(e)}_onEscape(){}__onArrowPressWithStep(t){const e=this.__addStep(this.__getMsec(this.__memoValue),t,!0);this.__memoValue=e,this.inputElement.value=this.i18n.formatTime(this.__validateTime(e)),this.__dispatchChange()}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__getMsec(t){let e=60*(t&&t.hours||0)*60*1e3;return e+=60*(t&&t.minutes||0)*1e3,e+=1e3*(t&&t.seconds||0),e+=t&&parseInt(t.milliseconds)||0,e}__getSec(t){let e=60*(t&&t.hours||0)*60;return e+=60*(t&&t.minutes||0),e+=t&&t.seconds||0,e+=t&&t.milliseconds/1e3||0,e}__addStep(t,e,r){0===t&&e<0&&(t=864e5);const o=1e3*e,n=t%o;o<0&&n&&r?t-=n:o>0&&n&&r?t-=n-o:t+=o;const i=Math.floor(t/1e3/60/60);t-=1e3*i*60*60;const s=Math.floor(t/1e3/60);t-=1e3*s*60;const a=Math.floor(t/1e3);return{hours:i<24?i:0,minutes:s,seconds:a,milliseconds:t-=1e3*a}}__updateDropdownItems(t,e,r,o){const n=this.__validateTime(this.__parseISO(e||At)),i=this.__getSec(n),s=this.__validateTime(this.__parseISO(r||Et)),a=this.__getSec(s);if(this.__adjustValue(i,a,n,s),this.__dropdownItems=this.__generateDropdownList(i,a,o),o!==this.__oldStep){this.__oldStep=o;const t=this.__validateTime(this.__parseISO(this.value));this.__updateValue(t)}this.value&&(this._comboBoxValue=this.i18n.formatTime(this.i18n.parseTime(this.value)))}__generateDropdownList(t,e,r){if(r<900||!this.__validDayDivisor(r))return[];const o=[];let n=-(r=r||3600)+t;for(;n+r>=t&&n+r<=e;){const t=this.__validateTime(this.__addStep(1e3*n,r));n+=r;const e=this.i18n.formatTime(t);o.push({label:e,value:e})}return o}__adjustValue(t,e,r,o){if(!this.__memoValue)return;const n=this.__getSec(this.__memoValue);n<t?this.__updateValue(r):n>e&&this.__updateValue(o)}_valueChanged(t,e){const r=this.__memoValue=this.__parseISO(t),o=this.__formatISO(r)||"";""===t||null===t||r?t!==o?this.value=o:this.__keepInvalidInput?delete this.__keepInvalidInput:this.__updateInputValue(r):this.value=void 0===e?"":e,this._toggleHasValue(this._hasValue)}__comboBoxValueChanged(t,e){if(""===t&&void 0===e)return;const r=this.i18n.parseTime(t),o=this.i18n.formatTime(r)||"";r?t!==o?this._comboBoxValue=o:this.__updateValue(r):(""!==t&&(this.__keepInvalidInput=!0),this.value="")}__onComboBoxChange(t){t.stopPropagation(),this.validate(),this.__dispatchChange()}__updateValue(t){const e=this.__formatISO(this.__validateTime(t))||"";this.value=e}__updateInputValue(t){const e=this.i18n.formatTime(this.__validateTime(t))||"";this._comboBoxValue=e}__validateTime(t){return t&&(t.hours=parseInt(t.hours),t.minutes=parseInt(t.minutes||0),t.seconds=this.__stepSegment<3?void 0:parseInt(t.seconds||0),t.milliseconds=this.__stepSegment<4?void 0:parseInt(t.milliseconds||0)),t}get __stepSegment(){return this.step%3600==0?1:this.step%60!=0&&this.step?this.step%1==0?3:this.step<1?4:void 0:2}__formatISO(t){return St.properties.i18n.value().formatTime(t)}__parseISO(t){return St.properties.i18n.value().parseTime(t)}_timeAllowed(t){const e=this.i18n.parseTime(this.min||At),r=this.i18n.parseTime(this.max||Et);return(!this.__getMsec(e)||this.__getMsec(t)>=this.__getMsec(e))&&(!this.__getMsec(r)||this.__getMsec(t)<=this.__getMsec(r))}_onClearButtonClick(){}_onChange(){}_onInput(){this._checkInputValue()}}customElements.define(St.is,St)},9625:function(t,e,r){"use strict";r.d(e,{$_:function(){return o.$_}}),r(4398),r(6754),r(510),r(1251),r(9849);var o=r(1195),n=(r(4173),r(5128));const i=n.iv`
  [theme~='badge'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0.4em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-primary-text-color);
    background-color: var(--lumo-primary-color-10pct);
    border-radius: var(--lumo-border-radius-s);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-s);
    line-height: 1;
    font-weight: 500;
    text-transform: initial;
    letter-spacing: initial;
    min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
  }

  /* Ensure proper vertical alignment */
  [theme~='badge']::before {
    display: inline-block;
    content: '\\2003';
    width: 0;
  }

  [theme~='badge'][theme~='small'] {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
  }

  /* Colors */

  [theme~='badge'][theme~='success'] {
    color: var(--lumo-success-text-color);
    background-color: var(--lumo-success-color-10pct);
  }

  [theme~='badge'][theme~='error'] {
    color: var(--lumo-error-text-color);
    background-color: var(--lumo-error-color-10pct);
  }

  [theme~='badge'][theme~='contrast'] {
    color: var(--lumo-contrast-80pct);
    background-color: var(--lumo-contrast-5pct);
  }

  /* Primary */

  [theme~='badge'][theme~='primary'] {
    color: var(--lumo-primary-contrast-color);
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='success'][theme~='primary'] {
    color: var(--lumo-success-contrast-color);
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error'][theme~='primary'] {
    color: var(--lumo-error-contrast-color);
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='contrast'][theme~='primary'] {
    color: var(--lumo-base-color);
    background-color: var(--lumo-contrast);
  }

  /* Links */

  [theme~='badge'][href]:hover {
    text-decoration: none;
  }

  /* Icon */

  [theme~='badge'] vaadin-icon,
  [theme~='badge'] iron-icon {
    margin: -0.25em 0;
    --iron-icon-width: 1.5em;
    --iron-icon-height: 1.5em;
  }

  [theme~='badge'] vaadin-icon:first-child,
  [theme~='badge'] iron-icon:first-child {
    margin-left: -0.375em;
  }

  [theme~='badge'] vaadin-icon:last-child,
  [theme~='badge'] iron-icon:last-child {
    margin-right: -0.375em;
  }

  iron-icon[theme~='badge'][icon],
  vaadin-icon[theme~='badge'][icon] {
    min-width: 0;
    padding: 0;
    font-size: 1rem;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  iron-icon[theme~='badge'][icon][theme~='small'],
  vaadin-icon[theme~='badge'][icon][theme~='small'] {
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
  }

  /* Empty */

  [theme~='badge']:not([icon]):empty {
    min-width: 0;
    width: 1em;
    height: 1em;
    padding: 0;
    border-radius: 50%;
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='small']:not([icon]):empty {
    width: 0.75em;
    height: 0.75em;
  }

  [theme~='badge'][theme~='contrast']:not([icon]):empty {
    background-color: var(--lumo-contrast);
  }

  [theme~='badge'][theme~='success']:not([icon]):empty {
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error']:not([icon]):empty {
    background-color: var(--lumo-error-color);
  }

  /* Pill */

  [theme~='badge'][theme~='pill'] {
    --lumo-border-radius-s: 1em;
  }

  /* RTL specific styles */

  [dir='rtl'][theme~='badge'] vaadin-icon:first-child,
  [dir='rtl'][theme~='badge'] iron-icon:first-child {
    margin-right: -0.375em;
    margin-left: 0;
  }

  [dir='rtl'][theme~='badge'] vaadin-icon:last-child,
  [dir='rtl'][theme~='badge'] iron-icon:last-child {
    margin-left: -0.375em;
    margin-right: 0;
  }
`;(0,n.hC)("",i,{moduleId:"lumo-badge"}),r(1735),r(9098),r(9416),r(4407);const s=n.iv`
  :host {
    --vaadin-user-color-0: #df0b92;
    --vaadin-user-color-1: #650acc;
    --vaadin-user-color-2: #097faa;
    --vaadin-user-color-3: #ad6200;
    --vaadin-user-color-4: #bf16f3;
    --vaadin-user-color-5: #084391;
    --vaadin-user-color-6: #078836;
  }

  [theme~='dark'] {
    --vaadin-user-color-0: #ff66c7;
    --vaadin-user-color-1: #9d8aff;
    --vaadin-user-color-2: #8aff66;
    --vaadin-user-color-3: #ffbd66;
    --vaadin-user-color-4: #dc6bff;
    --vaadin-user-color-5: #66fffa;
    --vaadin-user-color-6: #e6ff66;
  }
`,a=document.createElement("template");a.innerHTML=`<style>${s.toString().replace(":host","html")}</style>`,document.head.appendChild(a.content);const l=n.iv`
  /* === Screen readers === */
  .sr-only {
    border-width: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`,c=n.iv`
  /* === Background color === */
  .bg-base {
    background-color: var(--lumo-base-color);
  }

  .bg-transparent {
    background-color: transparent;
  }

  .bg-contrast-5 {
    background-color: var(--lumo-contrast-5pct);
  }
  .bg-contrast-10 {
    background-color: var(--lumo-contrast-10pct);
  }
  .bg-contrast-20 {
    background-color: var(--lumo-contrast-20pct);
  }
  .bg-contrast-30 {
    background-color: var(--lumo-contrast-30pct);
  }
  .bg-contrast-40 {
    background-color: var(--lumo-contrast-40pct);
  }
  .bg-contrast-50 {
    background-color: var(--lumo-contrast-50pct);
  }
  .bg-contrast-60 {
    background-color: var(--lumo-contrast-60pct);
  }
  .bg-contrast-70 {
    background-color: var(--lumo-contrast-70pct);
  }
  .bg-contrast-80 {
    background-color: var(--lumo-contrast-80pct);
  }
  .bg-contrast-90 {
    background-color: var(--lumo-contrast-90pct);
  }
  .bg-contrast {
    background-color: var(--lumo-contrast);
  }

  .bg-primary {
    background-color: var(--lumo-primary-color);
  }
  .bg-primary-50 {
    background-color: var(--lumo-primary-color-50pct);
  }
  .bg-primary-10 {
    background-color: var(--lumo-primary-color-10pct);
  }

  .bg-error {
    background-color: var(--lumo-error-color);
  }
  .bg-error-50 {
    background-color: var(--lumo-error-color-50pct);
  }
  .bg-error-10 {
    background-color: var(--lumo-error-color-10pct);
  }

  .bg-success {
    background-color: var(--lumo-success-color);
  }
  .bg-success-50 {
    background-color: var(--lumo-success-color-50pct);
  }
  .bg-success-10 {
    background-color: var(--lumo-success-color-10pct);
  }
`,d=n.iv`
  /* === Border === */
  .border-0 {
    border: none;
  }
  .border {
    border: 1px solid;
  }
  .border-b {
    border-bottom: 1px solid;
  }
  .border-l {
    border-left: 1px solid;
  }
  .border-r {
    border-right: 1px solid;
  }
  .border-t {
    border-top: 1px solid;
  }

  /* === Border color === */
  .border-contrast-5 {
    border-color: var(--lumo-contrast-5pct);
  }
  .border-contrast-10 {
    border-color: var(--lumo-contrast-10pct);
  }
  .border-contrast-20 {
    border-color: var(--lumo-contrast-20pct);
  }
  .border-contrast-30 {
    border-color: var(--lumo-contrast-30pct);
  }
  .border-contrast-40 {
    border-color: var(--lumo-contrast-40pct);
  }
  .border-contrast-50 {
    border-color: var(--lumo-contrast-50pct);
  }
  .border-contrast-60 {
    border-color: var(--lumo-contrast-60pct);
  }
  .border-contrast-70 {
    border-color: var(--lumo-contrast-70pct);
  }
  .border-contrast-80 {
    border-color: var(--lumo-contrast-80pct);
  }
  .border-contrast-90 {
    border-color: var(--lumo-contrast-90pct);
  }
  .border-contrast {
    border-color: var(--lumo-contrast);
  }

  .border-primary {
    border-color: var(--lumo-primary-color);
  }
  .border-primary-50 {
    border-color: var(--lumo-primary-color-50pct);
  }
  .border-primary-10 {
    border-color: var(--lumo-primary-color-10pct);
  }

  .border-error {
    border-color: var(--lumo-error-color);
  }
  .border-error-50 {
    border-color: var(--lumo-error-color-50pct);
  }
  .border-error-10 {
    border-color: var(--lumo-error-color-10pct);
  }

  .border-success {
    border-color: var(--lumo-success-color);
  }
  .border-success-50 {
    border-color: var(--lumo-success-color-50pct);
  }
  .border-success-10 {
    border-color: var(--lumo-success-color-10pct);
  }

  /* === Border radius === */
  .rounded-none {
    border-radius: 0;
  }
  .rounded-s {
    border-radius: var(--lumo-border-radius-s);
  }
  .rounded-m {
    border-radius: var(--lumo-border-radius-m);
  }
  .rounded-l {
    border-radius: var(--lumo-border-radius-l);
  }
`,u=n.iv`
  /* === Align content === */
  .content-center {
    align-content: center;
  }
  .content-end {
    align-content: flex-end;
  }
  .content-start {
    align-content: flex-start;
  }
  .content-around {
    align-content: space-around;
  }
  .content-between {
    align-content: space-between;
  }
  .content-evenly {
    align-content: space-evenly;
  }
  .content-stretch {
    align-content: stretch;
  }

  /* === Align items === */
  .items-baseline {
    align-items: baseline;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }

  /* === Align self === */
  .self-auto {
    align-self: auto;
  }
  .self-baseline {
    align-self: baseline;
  }
  .self-center {
    align-self: center;
  }
  .self-end {
    align-self: flex-end;
  }
  .self-start {
    align-self: flex-start;
  }
  .self-stretch {
    align-self: stretch;
  }

  /* === Flex === */
  .flex-auto {
    flex: auto;
  }
  .flex-none {
    flex: none;
  }

  /* === Flex direction === */
  .flex-col {
    flex-direction: column;
  }
  .flex-col-reverse {
    flex-direction: column-reverse;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-row-reverse {
    flex-direction: row-reverse;
  }

  /* === Flex grow === */
  .flex-grow-0 {
    flex-grow: 0;
  }
  .flex-grow {
    flex-grow: 1;
  }

  /* === Flex shrink === */
  .flex-shrink-0 {
    flex-shrink: 0;
  }
  .flex-shrink {
    flex-shrink: 1;
  }

  /* === Flex wrap === */
  .flex-nowrap {
    flex-wrap: nowrap;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .flex-wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  /* === Gap === */
  .gap-xs {
    gap: var(--lumo-space-xs);
  }
  .gap-s {
    gap: var(--lumo-space-s);
  }
  .gap-m {
    gap: var(--lumo-space-m);
  }
  .gap-l {
    gap: var(--lumo-space-l);
  }
  .gap-xl {
    gap: var(--lumo-space-xl);
  }

  /* === Gap (column) === */
  .gap-x-xs {
    column-gap: var(--lumo-space-xs);
  }
  .gap-x-s {
    column-gap: var(--lumo-space-s);
  }
  .gap-x-m {
    column-gap: var(--lumo-space-m);
  }
  .gap-x-l {
    column-gap: var(--lumo-space-l);
  }
  .gap-x-xl {
    column-gap: var(--lumo-space-xl);
  }

  /* === Gap (row) === */
  .gap-y-xs {
    row-gap: var(--lumo-space-xs);
  }
  .gap-y-s {
    row-gap: var(--lumo-space-s);
  }
  .gap-y-m {
    row-gap: var(--lumo-space-m);
  }
  .gap-y-l {
    row-gap: var(--lumo-space-l);
  }
  .gap-y-xl {
    row-gap: var(--lumo-space-xl);
  }

  /* === Grid auto flow === */
  .grid-flow-col {
    grid-auto-flow: column;
  }
  .grid-flow-row {
    grid-auto-flow: row;
  }

  /* === Grid columns === */
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .grid-cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
  .grid-cols-8 {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
  .grid-cols-9 {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }
  .grid-cols-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }
  .grid-cols-11 {
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }
  .grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  /* === Grid rows === */
  .grid-rows-1 {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }
  .grid-rows-2 {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
  .grid-rows-3 {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }
  .grid-rows-4 {
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }
  .grid-rows-5 {
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }
  .grid-rows-6 {
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }

  /* === Justify content === */
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .justify-around {
    justify-content: space-around;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-evenly {
    justify-content: space-evenly;
  }

  /* === Span (column) === */
  .col-span-1 {
    grid-column: span 1 / span 1;
  }
  .col-span-2 {
    grid-column: span 2 / span 2;
  }
  .col-span-3 {
    grid-column: span 3 / span 3;
  }
  .col-span-4 {
    grid-column: span 4 / span 4;
  }
  .col-span-5 {
    grid-column: span 5 / span 5;
  }
  .col-span-6 {
    grid-column: span 6 / span 6;
  }
  .col-span-7 {
    grid-column: span 7 / span 7;
  }
  .col-span-8 {
    grid-column: span 8 / span 8;
  }
  .col-span-9 {
    grid-column: span 9 / span 9;
  }
  .col-span-10 {
    grid-column: span 10 / span 10;
  }
  .col-span-11 {
    grid-column: span 11 / span 11;
  }
  .col-span-12 {
    grid-column: span 12 / span 12;
  }

  /* === Span (row) === */
  .row-span-1 {
    grid-row: span 1 / span 1;
  }
  .row-span-2 {
    grid-row: span 2 / span 2;
  }
  .row-span-3 {
    grid-row: span 3 / span 3;
  }
  .row-span-4 {
    grid-row: span 4 / span 4;
  }
  .row-span-5 {
    grid-row: span 5 / span 5;
  }
  .row-span-6 {
    grid-row: span 6 / span 6;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:flex-col {
      flex-direction: column;
    }
    .sm\\:flex-row {
      flex-direction: row;
    }
    .sm\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .sm\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .sm\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .sm\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .sm\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .sm\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .sm\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .sm\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .sm\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .sm\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .sm\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .sm\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }

  @media (min-width: 768px) {
    .md\\:flex-col {
      flex-direction: column;
    }
    .md\\:flex-row {
      flex-direction: row;
    }
    .md\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .md\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .md\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .md\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .md\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .md\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .md\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .md\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .md\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .md\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .md\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .md\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1024px) {
    .lg\\:flex-col {
      flex-direction: column;
    }
    .lg\\:flex-row {
      flex-direction: row;
    }
    .lg\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .lg\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .lg\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .lg\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .lg\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .lg\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .lg\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .lg\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .lg\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .lg\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .lg\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .lg\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1280px) {
    .xl\\:flex-col {
      flex-direction: column;
    }
    .xl\\:flex-row {
      flex-direction: row;
    }
    .xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:flex-col {
      flex-direction: column;
    }
    .\\32xl\\:flex-row {
      flex-direction: row;
    }
    .\\32xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
`,h=n.iv`
  /* === Box sizing === */
  .box-border {
    box-sizing: border-box;
  }
  .box-content {
    box-sizing: content-box;
  }

  /* === Display === */
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .inline-grid {
    display: inline-grid;
  }
  .grid {
    display: grid;
  }

  /* === Overflow === */
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-scroll {
    overflow: scroll;
  }

  /* === Position === */
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .static {
    position: static;
  }
  .sticky {
    position: sticky;
  }
  .relative {
    position: relative;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:flex {
      display: flex;
    }
    .sm\\:hidden {
      display: none;
    }
  }
  @media (min-width: 768px) {
    .md\\:flex {
      display: flex;
    }
    .md\\:hidden {
      display: none;
    }
  }
  @media (min-width: 1024px) {
    .lg\\:flex {
      display: flex;
    }
    .lg\\:hidden {
      display: none;
    }
  }
  @media (min-width: 1280px) {
    .xl\\:flex {
      display: flex;
    }
    .xl\\:hidden {
      display: none;
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:flex {
      display: flex;
    }
    .\\32xl\\:hidden {
      display: none;
    }
  }
`,p=n.iv`
  /* === Box shadows === */
  .shadow-xs {
    box-shadow: var(--lumo-box-shadow-xs);
  }
  .shadow-s {
    box-shadow: var(--lumo-box-shadow-s);
  }
  .shadow-m {
    box-shadow: var(--lumo-box-shadow-m);
  }
  .shadow-l {
    box-shadow: var(--lumo-box-shadow-l);
  }
  .shadow-xl {
    box-shadow: var(--lumo-box-shadow-xl);
  }
`,m=n.iv`
  /* === Height === */
  .h-0 {
    height: 0;
  }
  .h-xs {
    height: var(--lumo-size-xs);
  }
  .h-s {
    height: var(--lumo-size-s);
  }
  .h-m {
    height: var(--lumo-size-m);
  }
  .h-l {
    height: var(--lumo-size-l);
  }
  .h-xl {
    height: var(--lumo-size-xl);
  }
  .h-auto {
    height: auto;
  }
  .h-full {
    height: 100%;
  }
  .h-screen {
    height: 100vh;
  }

  /* === Height (max) === */
  .max-h-full {
    max-height: 100%;
  }
  .max-h-screen {
    max-height: 100vh;
  }

  /* === Height (min) === */
  .min-h-0 {
    min-height: 0;
  }
  .min-h-full {
    min-height: 100%;
  }
  .min-h-screen {
    min-height: 100vh;
  }

  /* === Icon sizing === */
  .icon-s {
    height: var(--lumo-icon-size-s);
    width: var(--lumo-icon-size-s);
  }
  .icon-m {
    height: var(--lumo-icon-size-m);
    width: var(--lumo-icon-size-m);
  }
  .icon-l {
    height: var(--lumo-icon-size-l);
    width: var(--lumo-icon-size-l);
  }

  /* === Width === */
  .w-xs {
    width: var(--lumo-size-xs);
  }
  .w-s {
    width: var(--lumo-size-s);
  }
  .w-m {
    width: var(--lumo-size-m);
  }
  .w-l {
    width: var(--lumo-size-l);
  }
  .w-xl {
    width: var(--lumo-size-xl);
  }
  .w-auto {
    width: auto;
  }
  .w-full {
    width: 100%;
  }

  /* === Width (max) === */
  .max-w-full {
    max-width: 100%;
  }
  .max-w-screen-sm {
    max-width: 640px;
  }
  .max-w-screen-md {
    max-width: 768px;
  }
  .max-w-screen-lg {
    max-width: 1024px;
  }
  .max-w-screen-xl {
    max-width: 1280px;
  }
  .max-w-screen-2xl {
    max-width: 1536px;
  }

  /* === Width (min) === */
  .min-w-0 {
    min-width: 0;
  }
  .min-w-full {
    min-width: 100%;
  }
`,f=n.iv`
  /* === Margin === */
  .m-auto {
    margin: auto;
  }
  .m-0 {
    margin: 0;
  }
  .m-xs {
    margin: var(--lumo-space-xs);
  }
  .m-s {
    margin: var(--lumo-space-s);
  }
  .m-m {
    margin: var(--lumo-space-m);
  }
  .m-l {
    margin: var(--lumo-space-l);
  }
  .m-xl {
    margin: var(--lumo-space-xl);
  }

  /* === Margin (bottom) === */
  .mb-auto {
    margin-bottom: auto;
  }
  .mb-0 {
    margin-bottom: 0;
  }
  .mb-xs {
    margin-bottom: var(--lumo-space-xs);
  }
  .mb-s {
    margin-bottom: var(--lumo-space-s);
  }
  .mb-m {
    margin-bottom: var(--lumo-space-m);
  }
  .mb-l {
    margin-bottom: var(--lumo-space-l);
  }
  .mb-xl {
    margin-bottom: var(--lumo-space-xl);
  }

  /* === Margin (end) === */
  .me-auto {
    margin-inline-end: auto;
  }
  .me-0 {
    margin-inline-end: 0;
  }
  .me-xs {
    margin-inline-end: var(--lumo-space-xs);
  }
  .me-s {
    margin-inline-end: var(--lumo-space-s);
  }
  .me-m {
    margin-inline-end: var(--lumo-space-m);
  }
  .me-l {
    margin-inline-end: var(--lumo-space-l);
  }
  .me-xl {
    margin-inline-end: var(--lumo-space-xl);
  }

  /* === Margin (horizontal) === */
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  .mx-0 {
    margin-left: 0;
    margin-right: 0;
  }
  .mx-xs {
    margin-left: var(--lumo-space-xs);
    margin-right: var(--lumo-space-xs);
  }
  .mx-s {
    margin-left: var(--lumo-space-s);
    margin-right: var(--lumo-space-s);
  }
  .mx-m {
    margin-left: var(--lumo-space-m);
    margin-right: var(--lumo-space-m);
  }
  .mx-l {
    margin-left: var(--lumo-space-l);
    margin-right: var(--lumo-space-l);
  }
  .mx-xl {
    margin-left: var(--lumo-space-xl);
    margin-right: var(--lumo-space-xl);
  }

  /* === Margin (left) === */
  .ml-auto {
    margin-left: auto;
  }
  .ml-0 {
    margin-left: 0;
  }
  .ml-xs {
    margin-left: var(--lumo-space-xs);
  }
  .ml-s {
    margin-left: var(--lumo-space-s);
  }
  .ml-m {
    margin-left: var(--lumo-space-m);
  }
  .ml-l {
    margin-left: var(--lumo-space-l);
  }
  .ml-xl {
    margin-left: var(--lumo-space-xl);
  }

  /* === Margin (right) === */
  .mr-auto {
    margin-right: auto;
  }
  .mr-0 {
    margin-right: 0;
  }
  .mr-xs {
    margin-right: var(--lumo-space-xs);
  }
  .mr-s {
    margin-right: var(--lumo-space-s);
  }
  .mr-m {
    margin-right: var(--lumo-space-m);
  }
  .mr-l {
    margin-right: var(--lumo-space-l);
  }
  .mr-xl {
    margin-right: var(--lumo-space-xl);
  }

  /* === Margin (start) === */
  .ms-auto {
    margin-inline-start: auto;
  }
  .ms-0 {
    margin-inline-start: 0;
  }
  .ms-xs {
    margin-inline-start: var(--lumo-space-xs);
  }
  .ms-s {
    margin-inline-start: var(--lumo-space-s);
  }
  .ms-m {
    margin-inline-start: var(--lumo-space-m);
  }
  .ms-l {
    margin-inline-start: var(--lumo-space-l);
  }
  .ms-xl {
    margin-inline-start: var(--lumo-space-xl);
  }

  /* === Margin (top) === */
  .mt-auto {
    margin-top: auto;
  }
  .mt-0 {
    margin-top: 0;
  }
  .mt-xs {
    margin-top: var(--lumo-space-xs);
  }
  .mt-s {
    margin-top: var(--lumo-space-s);
  }
  .mt-m {
    margin-top: var(--lumo-space-m);
  }
  .mt-l {
    margin-top: var(--lumo-space-l);
  }
  .mt-xl {
    margin-top: var(--lumo-space-xl);
  }

  /* === Margin (vertical) === */
  .my-auto {
    margin-bottom: auto;
    margin-top: auto;
  }
  .my-0 {
    margin-bottom: 0;
    margin-top: 0;
  }
  .my-xs {
    margin-bottom: var(--lumo-space-xs);
    margin-top: var(--lumo-space-xs);
  }
  .my-s {
    margin-bottom: var(--lumo-space-s);
    margin-top: var(--lumo-space-s);
  }
  .my-m {
    margin-bottom: var(--lumo-space-m);
    margin-top: var(--lumo-space-m);
  }
  .my-l {
    margin-bottom: var(--lumo-space-l);
    margin-top: var(--lumo-space-l);
  }
  .my-xl {
    margin-bottom: var(--lumo-space-xl);
    margin-top: var(--lumo-space-xl);
  }

  /* === Padding === */
  .p-0 {
    padding: 0;
  }
  .p-xs {
    padding: var(--lumo-space-xs);
  }
  .p-s {
    padding: var(--lumo-space-s);
  }
  .p-m {
    padding: var(--lumo-space-m);
  }
  .p-l {
    padding: var(--lumo-space-l);
  }
  .p-xl {
    padding: var(--lumo-space-xl);
  }

  /* === Padding (bottom) === */
  .pb-0 {
    padding-bottom: 0;
  }
  .pb-xs {
    padding-bottom: var(--lumo-space-xs);
  }
  .pb-s {
    padding-bottom: var(--lumo-space-s);
  }
  .pb-m {
    padding-bottom: var(--lumo-space-m);
  }
  .pb-l {
    padding-bottom: var(--lumo-space-l);
  }
  .pb-xl {
    padding-bottom: var(--lumo-space-xl);
  }

  /* === Padding (end) === */
  .pe-0 {
    padding-inline-end: 0;
  }
  .pe-xs {
    padding-inline-end: var(--lumo-space-xs);
  }
  .pe-s {
    padding-inline-end: var(--lumo-space-s);
  }
  .pe-m {
    padding-inline-end: var(--lumo-space-m);
  }
  .pe-l {
    padding-inline-end: var(--lumo-space-l);
  }
  .pe-xl {
    padding-inline-end: var(--lumo-space-xl);
  }

  /* === Padding (horizontal) === */
  .px-0 {
    padding-left: 0;
    padding-right: 0;
  }
  .px-xs {
    padding-left: var(--lumo-space-xs);
    padding-right: var(--lumo-space-xs);
  }
  .px-s {
    padding-left: var(--lumo-space-s);
    padding-right: var(--lumo-space-s);
  }
  .px-m {
    padding-left: var(--lumo-space-m);
    padding-right: var(--lumo-space-m);
  }
  .px-l {
    padding-left: var(--lumo-space-l);
    padding-right: var(--lumo-space-l);
  }
  .px-xl {
    padding-left: var(--lumo-space-xl);
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (left) === */
  .pl-0 {
    padding-left: 0;
  }
  .pl-xs {
    padding-left: var(--lumo-space-xs);
  }
  .pl-s {
    padding-left: var(--lumo-space-s);
  }
  .pl-m {
    padding-left: var(--lumo-space-m);
  }
  .pl-l {
    padding-left: var(--lumo-space-l);
  }
  .pl-xl {
    padding-left: var(--lumo-space-xl);
  }

  /* === Padding (right) === */
  .pr-0 {
    padding-right: 0;
  }
  .pr-xs {
    padding-right: var(--lumo-space-xs);
  }
  .pr-s {
    padding-right: var(--lumo-space-s);
  }
  .pr-m {
    padding-right: var(--lumo-space-m);
  }
  .pr-l {
    padding-right: var(--lumo-space-l);
  }
  .pr-xl {
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (start) === */
  .ps-0 {
    padding-inline-start: 0;
  }
  .ps-xs {
    padding-inline-start: var(--lumo-space-xs);
  }
  .ps-s {
    padding-inline-start: var(--lumo-space-s);
  }
  .ps-m {
    padding-inline-start: var(--lumo-space-m);
  }
  .ps-l {
    padding-inline-start: var(--lumo-space-l);
  }
  .ps-xl {
    padding-inline-start: var(--lumo-space-xl);
  }

  /* === Padding (top) === */
  .pt-0 {
    padding-top: 0;
  }
  .pt-xs {
    padding-top: var(--lumo-space-xs);
  }
  .pt-s {
    padding-top: var(--lumo-space-s);
  }
  .pt-m {
    padding-top: var(--lumo-space-m);
  }
  .pt-l {
    padding-top: var(--lumo-space-l);
  }
  .pt-xl {
    padding-top: var(--lumo-space-xl);
  }

  /* === Padding (vertical) === */
  .py-0 {
    padding-bottom: 0;
    padding-top: 0;
  }
  .py-xs {
    padding-bottom: var(--lumo-space-xs);
    padding-top: var(--lumo-space-xs);
  }
  .py-s {
    padding-bottom: var(--lumo-space-s);
    padding-top: var(--lumo-space-s);
  }
  .py-m {
    padding-bottom: var(--lumo-space-m);
    padding-top: var(--lumo-space-m);
  }
  .py-l {
    padding-bottom: var(--lumo-space-l);
    padding-top: var(--lumo-space-l);
  }
  .py-xl {
    padding-bottom: var(--lumo-space-xl);
    padding-top: var(--lumo-space-xl);
  }
`,_=n.iv`
  /* === Font size === */
  .text-2xs {
    font-size: var(--lumo-font-size-xxs);
  }
  .text-xs {
    font-size: var(--lumo-font-size-xs);
  }
  .text-s {
    font-size: var(--lumo-font-size-s);
  }
  .text-m {
    font-size: var(--lumo-font-size-m);
  }
  .text-l {
    font-size: var(--lumo-font-size-l);
  }
  .text-xl {
    font-size: var(--lumo-font-size-xl);
  }
  .text-2xl {
    font-size: var(--lumo-font-size-xxl);
  }
  .text-3xl {
    font-size: var(--lumo-font-size-xxxl);
  }

  /* === Font weight === */
  .font-thin {
    font-weight: 100;
  }
  .font-extralight {
    font-weight: 200;
  }
  .font-light {
    font-weight: 300;
  }
  .font-normal {
    font-weight: 400;
  }
  .font-medium {
    font-weight: 500;
  }
  .font-semibold {
    font-weight: 600;
  }
  .font-bold {
    font-weight: 700;
  }
  .font-extrabold {
    font-weight: 800;
  }
  .font-black {
    font-weight: 900;
  }

  /* === Line height === */
  .leading-none {
    line-height: 1;
  }
  .leading-xs {
    line-height: var(--lumo-line-height-xs);
  }
  .leading-s {
    line-height: var(--lumo-line-height-s);
  }
  .leading-m {
    line-height: var(--lumo-line-height-m);
  }

  /* === List style type === */
  .list-none {
    list-style-type: none;
  }

  /* === Text alignment === */
  .text-left {
    text-align: left;
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .text-justify {
    text-align: justify;
  }

  /* === Text color === */
  .text-header {
    color: var(--lumo-header-text-color);
  }
  .text-body {
    color: var(--lumo-body-text-color);
  }
  .text-secondary {
    color: var(--lumo-secondary-text-color);
  }
  .text-tertiary {
    color: var(--lumo-tertiary-text-color);
  }
  .text-disabled {
    color: var(--lumo-disabled-text-color);
  }
  .text-primary {
    color: var(--lumo-primary-text-color);
  }
  .text-primary-contrast {
    color: var(--lumo-primary-contrast-color);
  }
  .text-error {
    color: var(--lumo-error-text-color);
  }
  .text-error-contrast {
    color: var(--lumo-error-contrast-color);
  }
  .text-success {
    color: var(--lumo-success-text-color);
  }
  .text-success-contrast {
    color: var(--lumo-success-contrast-color);
  }

  /* === Text overflow === */
  .overflow-clip {
    text-overflow: clip;
  }
  .overflow-ellipsis {
    text-overflow: ellipsis;
  }

  /* === Text transform === */
  .capitalize {
    text-transform: capitalize;
  }
  .lowercase {
    text-transform: lowercase;
  }
  .uppercase {
    text-transform: uppercase;
  }

  /* === Whitespace === */
  .whitespace-normal {
    white-space: normal;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre {
    white-space: pre;
  }
  .whitespace-pre-line {
    white-space: pre-line;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .sm\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .sm\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .sm\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .sm\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .sm\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .sm\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .sm\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 768px) {
    .md\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .md\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .md\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .md\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .md\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .md\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .md\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .md\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1024px) {
    .lg\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .lg\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .lg\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .lg\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .lg\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .lg\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .lg\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .lg\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1280px) {
    .xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .\\32xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .\\32xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .\\32xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .\\32xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .\\32xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .\\32xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .\\32xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
`,g=n.iv`
${l}
${c}
${d}
${p}
${u}
${h}
${m}
${f}
${_}
`;(0,n.hC)("",g,{moduleId:"lumo-utility"});var v=r(1665),y=r(2521),b=r(9392),x=r(3692);const{I:w}=x.Al,C=t=>(...e)=>({_$litDirective$:t,values:e});class A{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}class E extends A{constructor(t){if(super(t),this.it=x.Ld,2!==t.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===x.Ld||null==t)return this._t=void 0,this.it=t;if(t===x.Jb)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}E.directiveName="unsafeHTML",E.resultType=1,C(E);class S extends E{}S.directiveName="unsafeSVG",S.resultType=2;const P=C(S);function O(t){let e=b.Ld;if(t){const r=t.cloneNode(!0);r.removeAttribute("id"),e=b.YP`${P(r.outerHTML)}`}return e}r(5108);const I={};class T extends((0,y.S)(v.H3)){static get template(){return null}static get is(){return"vaadin-iconset"}static get properties(){return{name:{type:String,observer:"__nameChanged"},size:{type:Number,value:24}}}static getIconset(t){let e=I[t];return e||(e=document.createElement("vaadin-iconset"),e.name=t,I[t]=e),e}connectedCallback(){super.connectedCallback(),this.style.display="none"}applyIcon(t){this._icons=this._icons||this.__createIconMap();const e=this._icons[this.__getIconId(t)];return{svg:O(e),size:this.size,viewBox:e?e.getAttribute("viewBox"):null}}__createIconMap(){const t={};return this.querySelectorAll("[id]").forEach((e=>{t[this.__getIconId(e.id)]=e})),t}__getIconId(t){return(t||"").replace(`${this.name}:`,"")}__nameChanged(t,e){e&&(I[t]=T.getIconset(e),delete I[e]),t&&(I[t]=this,document.dispatchEvent(new CustomEvent("vaadin-iconset-registered",{detail:t})))}}customElements.define(T.is,T);const k=document.createElement("template");k.innerHTML='<vaadin-iconset name="lumo" size="1000">\n<svg xmlns="http://www.w3.org/2000/svg">\n<defs>\n<g id="lumo:align-center"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m83 191c0-18 13-33 29-33H721c16 0 29 15 29 33 0 18-13 33-29 34H279C263 442 250 427 250 408zM250 792c0-18 13-33 29-34H721c16 0 29 15 29 34s-13 33-29 33H279C263 825 250 810 250 792z m-83-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>\n<g id="lumo:align-left"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m0 191c0-18 13-33 28-33H638c16 0 29 15 29 33 0 18-13 33-29 34H195C179 442 167 427 167 408zM167 792c0-18 13-33 28-34H638c16 0 29 15 29 34s-13 33-29 33H195C179 825 167 810 167 792z m0-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>\n<g id="lumo:align-right"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m166 191c0-18 13-33 29-33H805c16 0 29 15 28 33 0 18-13 33-28 34H362C346 442 333 427 333 408zM333 792c0-18 13-33 29-34H805c16 0 29 15 28 34s-13 33-28 33H362C346 825 333 810 333 792z m-166-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>\n<g id="lumo:angle-down"><path d="M283 391c-18-16-46-15-63 4-16 18-15 46 3 63l244 224c17 15 43 15 60 0l250-229c18-16 20-45 3-63-16-18-45-20-63-4l-220 203-214-198z"></path></g>\n<g id="lumo:angle-left"><path d="M601 710c16 18 15 46-3 63-18 16-46 15-63-4l-224-244c-15-17-15-43 0-59l229-250c16-18 45-20 63-4 18 16 20 45 3 63l-203 220 198 215z"></path></g>\n<g id="lumo:angle-right"><path d="M399 275c-16-18-15-46 3-63 18-16 46-15 63 4l224 244c15 17 15 43 0 59l-229 250c-16 18-45 20-63 4-18-16-20-45-3-63l203-220-198-215z"></path></g>\n<g id="lumo:angle-up"><path d="M283 635c-18 16-46 15-63-3-16-18-15-46 3-63l244-224c17-15 43-15 60 0l250 229c18 16 20 45 3 63-16 18-45 20-63 3l-220-202L283 635z"></path></g>\n<g id="lumo:arrow-down"><path d="M538 646l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166c0 0 0 0 0 0-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 646V312c0-21 17-38 38-37s38 17 37 37v334z"></path></g>\n<g id="lumo:arrow-left"><path d="M375 538l111 125c14 15 12 39-3 53-15 14-39 12-53-4l-166-187c0 0 0 0 0 0-13-14-12-36 0-50l166-187c14-15 37-17 53-4 15 14 17 37 3 53L375 463h333c21 0 38 17 38 37 0 21-17 38-38 38h-333z"></path></g>\n<g id="lumo:arrow-right"><path d="M625 538h-333c-21 0-38-17-38-38 0-21 17-38 38-37h333l-111-126c-14-15-12-39 3-53 15-14 39-12 53 4l166 187c13 14 13 36 0 50 0 0 0 0 0 0l-166 187c-14 15-37 17-53 4-15-14-17-37-3-53l111-125z"></path></g>\n<g id="lumo:arrow-up"><path d="M538 354V688c0 21-17 38-38 37s-38-17-38-38V354l-125 112c-15 14-39 12-53-4-14-15-12-39 4-53l187-166c14-13 36-13 50 0 0 0 0 0 0 0l187 166c15 14 17 37 4 53-14 15-37 17-53 4L538 354z"></path></g>\n<g id="lumo:bar-chart"><path d="M175 500h108c28 0 50 22 50 50v233c0 28-22 50-50 50H175c-28 0-50-22-50-50v-233c0-28 22-50 50-50z m33 67c-9 0-17 7-16 16v167c0 9 7 17 16 17h42c9 0 17-7 17-17v-167c0-9-7-17-17-16H208zM446 167h108c28 0 50 22 50 50v566c0 28-22 50-50 50h-108c-28 0-50-22-50-50V217c0-28 22-50 50-50z m33 66c-9 0-17 7-17 17v500c0 9 7 17 17 17h42c9 0 17-7 16-17V250c0-9-7-17-16-17h-42zM717 333h108c28 0 50 22 50 50v400c0 28-22 50-50 50h-108c-28 0-50-22-50-50V383c0-28 22-50 50-50z m33 67c-9 0-17 7-17 17v333c0 9 7 17 17 17h42c9 0 17-7 16-17v-333c0-9-7-17-16-17h-42z"></path></g>\n<g id="lumo:bell"><path d="M367 675H292v-258C292 325 366 250 459 250H458V208c0-23 18-42 42-41 23 0 42 18 42 41v42h-1C634 250 708 325 708 417V675h-75v-258c0-51-41-92-91-92h-84C408 325 367 366 367 417V675z m-159 37c0-21 17-38 38-37h508c21 0 37 17 38 37 0 21-17 38-38 38H246C225 750 208 733 208 713z m230 71h125v32c0 17-14 31-32 31h-62c-17 0-32-14-31-31v-32z"></path></g>\n<g id="lumo:calendar"><path d="M375 208h250v-20C625 176 634 167 646 167h41C699 167 708 176 708 188V208h74c23 0 41 19 41 42v42C823 315 804 333 782 333H218C196 333 177 315 177 292V250C177 227 196 208 218 208H292v-20C292 176 301 167 313 167h41C366 167 375 176 375 188V208zM229 375h42C283 375 292 384 292 396v41C292 449 282 458 271 458h-42C217 458 208 449 208 437v-41C208 384 218 375 229 375z m125 0h42C408 375 417 384 417 396v41C417 449 407 458 396 458h-42C342 458 333 449 333 437v-41C333 384 343 375 354 375z m125 0h42C533 375 542 384 542 396v41C542 449 532 458 521 458h-42C467 458 458 449 458 437v-41C458 384 468 375 479 375z m-250 125h42C283 500 292 509 292 521v41C292 574 282 583 271 583h-42C217 583 208 574 208 562v-41C208 509 218 500 229 500z m125 0h42C408 500 417 509 417 521v41C417 574 407 583 396 583h-42C342 583 333 574 333 562v-41C333 509 343 500 354 500z m125 0h42c12 0 21 9 21 21v41C542 574 532 583 521 583h-42C467 583 458 574 458 562v-41C458 509 468 500 479 500z m-250 125h42C283 625 292 634 292 646v41C292 699 282 708 271 708h-42C217 708 208 699 208 687v-41C208 634 218 625 229 625z m125 0h42C408 625 417 634 417 646v41C417 699 407 708 396 708h-42C342 708 333 699 333 687v-41C333 634 343 625 354 625z m125 0h42c12 0 21 9 21 21v41C542 699 532 708 521 708h-42C467 708 458 699 458 687v-41C458 634 468 625 479 625z m125-250h42C658 375 667 384 667 396v41C667 449 657 458 646 458h-42C592 458 583 449 583 437v-41C583 384 593 375 604 375z m0 125h42c12 0 21 9 21 21v41C667 574 657 583 646 583h-42C592 583 583 574 583 562v-41C583 509 593 500 604 500z m0 125h42c12 0 21 9 21 21v41C667 699 657 708 646 708h-42C592 708 583 699 583 687v-41C583 634 593 625 604 625z m125 0h42c12 0 21 9 21 21v41C792 699 782 708 771 708h-42C717 708 708 699 708 687v-41C708 634 718 625 729 625z m-500 125h42C283 750 292 759 292 771v41C292 824 282 833 271 833h-42C217 833 208 824 208 812v-41C208 759 218 750 229 750z m125 0h42C408 750 417 759 417 771v41C417 824 407 833 396 833h-42C342 833 333 824 333 812v-41C333 759 343 750 354 750z m125 0h42c12 0 21 9 21 21v41C542 824 532 833 521 833h-42C467 833 458 824 458 812v-41C458 759 468 750 479 750z m125 0h42c12 0 21 9 21 21v41C667 824 657 833 646 833h-42C592 833 583 824 583 812v-41C583 759 593 750 604 750z m125 0h42c12 0 21 9 21 21v41C792 824 782 833 771 833h-42C717 833 708 824 708 812v-41C708 759 718 750 729 750z m0-250h42c12 0 21 9 21 21v41C792 574 782 583 771 583h-42C717 583 708 574 708 562v-41C708 509 718 500 729 500z m0-125h42C783 375 792 384 792 396v41C792 449 782 458 771 458h-42C717 458 708 449 708 437v-41C708 384 718 375 729 375z"></path></g>\n<g id="lumo:checkmark"><path d="M318 493c-15-15-38-15-53 0-15 15-15 38 0 53l136 136c15 15 38 15 53 0l323-322c15-15 15-38 0-53-15-15-38-15-54 0l-295 296-110-110z"></path></g>\n<g id="lumo:chevron-down"><path d="M533 654l210-199c9-9 9-23 0-32C739 419 733 417 726 417H274C261 417 250 427 250 439c0 6 2 12 7 16l210 199c18 17 48 17 66 0z"></path></g>\n<g id="lumo:chevron-left"><path d="M346 533l199 210c9 9 23 9 32 0 4-4 7-10 6-17V274C583 261 573 250 561 250c-6 0-12 2-16 7l-199 210c-17 18-17 48 0 66z"></path></g>\n<g id="lumo:chevron-right"><path d="M654 533L455 743c-9 9-23 9-32 0C419 739 417 733 417 726V274C417 261 427 250 439 250c6 0 12 2 16 7l199 210c17 18 17 48 0 66z"></path></g>\n<g id="lumo:chevron-up"><path d="M533 346l210 199c9 9 9 23 0 32-4 4-10 7-17 6H274C261 583 250 573 250 561c0-6 2-12 7-16l210-199c18-17 48-17 66 0z"></path></g>\n<g id="lumo:clock"><path d="M538 489l85 85c15 15 15 38 0 53-15 15-38 15-53 0l-93-93a38 38 0 0 1-2-2C467 525 462 515 462 504V308c0-21 17-38 38-37 21 0 38 17 37 37v181zM500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265z"></path></g>\n<g id="lumo:cog"><path d="M833 458l-81-18c-8-25-17-50-29-75L767 292 708 233l-72 49c-21-12-46-25-75-30L542 167h-84l-19 79c-25 8-50 17-71 30L296 233 233 296l47 69c-12 21-21 46-29 71L167 458v84l84 25c8 25 17 50 29 75L233 708 292 767l76-44c21 12 46 25 75 29L458 833h84l19-81c25-8 50-17 75-29L708 767l59-59-44-66c12-21 25-46 29-75L833 542v-84z m-333 217c-96 0-175-79-175-175 0-96 79-175 175-175 96 0 175 79 175 175 0 96-79 175-175 175z"></path></g>\n<g id="lumo:cross"><path d="M445 500l-142-141c-15-15-15-40 0-56 15-15 40-15 56 0L500 445l141-142c15-15 40-15 56 0 15 15 15 40 0 56L555 500l142 141c15 15 15 40 0 56-15 15-40 15-56 0L500 555l-141 142c-15 15-40 15-56 0-15-15-15-40 0-56L445 500z"></path></g>\n<g id="lumo:download"><path d="M538 521l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166a38 38 0 0 1 0 0c-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 521V188c0-21 17-38 38-38s38 17 37 38v333zM758 704c0-21 17-38 38-37 21 0 38 17 37 37v92c0 21-17 38-37 37H204c-21 0-38-17-37-37v-92c0-21 17-38 37-37s38 17 38 37v54h516v-54z"></path></g>\n<g id="lumo:dropdown"><path d="M317 393c-15-14-39-13-53 3-14 15-13 39 3 53l206 189c14 13 36 13 50 0l210-193c15-14 17-38 3-53-14-15-38-17-53-3l-185 171L317 393z"></path></g>\n<g id="lumo:edit"><path d="M673 281l62 56-205 233c-9 10-38 24-85 39a8 8 0 0 1-5 0c-4-1-7-6-6-10l0 0c14-47 25-76 35-86l204-232z m37-42l52-59c15-17 41-18 58-2 17 16 18 42 3 59L772 295l-62-56zM626 208l-67 75h-226C305 283 283 306 283 333v334C283 695 306 717 333 717h334c28 0 50-22 50-50v-185L792 398v269C792 736 736 792 667 792H333C264 792 208 736 208 667V333C208 264 264 208 333 208h293z"></path></g>\n<g id="lumo:error"><path d="M500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265zM479 292h42c12 0 21 9 20 20l-11 217c0 8-6 13-13 13h-34c-7 0-13-6-13-13l-11-217C459 301 468 292 479 292zM483 608h34c12 0 21 9 20 21v33c0 12-9 21-20 21h-34c-12 0-21-9-21-21v-33c0-12 9-21 21-21z"></path></g>\n<g id="lumo:eye"><path d="M500 750c-187 0-417-163-417-250s230-250 417-250 417 163 417 250-230 250-417 250z m-336-231c20 22 47 46 78 69C322 644 411 678 500 678s178-34 258-90c31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69C678 356 589 322 500 322s-178 34-258 90c-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19zM500 646c-81 0-146-65-146-146s65-146 146-146 146 65 146 146-65 146-146 146z m0-75c39 0 71-32 71-71 0-39-32-71-71-71-39 0-71 32-71 71 0 39 32 71 71 71z"></path></g>\n<g id="lumo:eye-disabled"><path d="M396 735l60-60c15 2 30 3 44 3 89 0 178-34 258-90 31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69-8-5-15-11-23-15l50-51C862 397 917 458 917 500c0 87-230 250-417 250-34 0-69-5-104-15zM215 654C138 603 83 542 83 500c0-87 230-250 417-250 34 0 69 5 104 15l-59 60c-15-2-30-3-45-3-89 0-178 34-258 90-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19 20 22 47 46 78 69 8 5 16 11 24 16L215 654z m271-9l159-159c0 5 1 9 1 14 0 81-65 146-146 146-5 0-9 0-14-1z m-131-131C354 510 354 505 354 500c0-81 65-146 146-146 5 0 10 0 14 1l-159 159z m-167 257L780 179c12-12 32-12 44 0 12 12 12 32 0 44L232 815c-12 12-32 12-44 0s-12-32 0-44z"></path></g>\n<g id="lumo:menu"><path d="M167 292c0-23 19-42 41-42h584C815 250 833 268 833 292c0 23-19 42-41 41H208C185 333 167 315 167 292z m0 208c0-23 19-42 41-42h584C815 458 833 477 833 500c0 23-19 42-41 42H208C185 542 167 523 167 500z m0 208c0-23 19-42 41-41h584C815 667 833 685 833 708c0 23-19 42-41 42H208C185 750 167 732 167 708z"></path></g>\n<g id="lumo:minus"><path d="M261 461c-22 0-39 18-39 39 0 22 18 39 39 39h478c22 0 39-18 39-39 0-22-18-39-39-39H261z"></path></g>\n<g id="lumo:ordered-list"><path d="M138 333V198H136l-43 28v-38l45-31h45V333H138z m-61 128c0-35 27-59 68-59 39 0 66 21 66 53 0 20-11 37-43 64l-29 27v2h74V583H80v-30l55-52c26-24 32-33 33-43 0-13-10-22-24-22-15 0-26 10-26 25v1h-41v-1zM123 759v-31h21c15 0 25-8 25-21 0-13-10-21-25-21-15 0-26 9-26 23h-41c1-34 27-56 68-57 39 0 66 20 66 49 0 20-14 36-33 39v3c24 3 40 19 39 41 0 32-30 54-73 54-41 0-69-22-70-57h43c1 13 11 22 28 22 16 0 27-9 27-22 0-14-10-22-28-22h-21zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>\n<g id="lumo:phone"><path d="M296 208l42-37c17-15 44-13 58 4a42 42 0 0 1 5 7L459 282c12 20 5 45-15 57l-7 4c-17 10-25 30-19 48l20 66a420 420 0 0 0 93 157l41 45c13 14 35 17 51 8l7-5c20-12 45-5 57 16L745 777c12 20 5 45-15 57a42 42 0 0 1-8 4l-52 17c-61 21-129 4-174-43l-50-52c-81-85-141-189-175-302l-24-78c-19-62 0-129 49-172z"></path></g>\n<g id="lumo:photo"><path d="M208 167h584c69 0 125 56 125 125v416c0 69-56 125-125 125H208c-69 0-125-56-125-125V292c0-69 56-125 125-125z m584 75H208c-28 0-50 22-50 50v416c0 28 22 50 50 50h584c28 0 50-22 50-50V292c0-28-22-50-50-50zM239 740l167-167c12-12 31-14 45-6l73 43 172-201c13-15 34-18 50-7l95 67v92l-111-78-169 199c-12 14-32 17-47 8l-76-43-111 111H229c2-7 5-13 10-18zM458 427C458 490 407 542 344 542S229 490 229 427c0-63 51-115 115-115S458 364 458 427z m-62 0C396 398 373 375 344 375S292 398 292 427c0 29 23 52 52 52s52-23 52-52z"></path></g>\n<g id="lumo:play"><path d="M689 528l-298 175c-13 8-34 8-48 0-6-4-10-9-10-14V311C333 300 348 292 367 292c9 0 17 2 24 5l298 175c26 15 26 40 0 56z"></path></g>\n<g id="lumo:plus"><path d="M461 461H261c-22 0-39 18-39 39 0 22 18 39 39 39h200v200c0 22 18 39 39 39 22 0 39-18 39-39v-200h200c22 0 39-18 39-39 0-22-18-39-39-39h-200V261c0-22-18-39-39-39-22 0-39 18-39 39v200z"></path></g>\n<g id="lumo:redo"><path d="M290 614C312 523 393 458 491 458c55 0 106 22 144 57l-88 88c-3 3-5 7-5 11 0 8 6 15 15 15l193-5c17 0 31-15 31-32l5-192c0-4-1-8-4-11-6-6-16-6-22 0l-66 67C641 406 570 375 491 375c-136 0-248 90-281 215-1 2-1 5-1 8-8 44 45 68 73 32 4-5 7-11 8-16z"></path></g>\n<g id="lumo:reload"><path d="M500 233V137c0-9 7-16 15-16 4 0 8 2 10 4l133 140c12 12 12 32 0 45l-133 140c-6 6-15 6-21 0C502 447 500 443 500 438V308c-117 0-212 95-212 213 0 117 95 212 212 212 117 0 212-95 212-212 0-21 17-38 38-38s38 17 37 38c0 159-129 288-287 287-159 0-288-129-288-287 0-159 129-288 288-288z"></path></g>\n<g id="lumo:search"><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g>\n<g id="lumo:undo"><path d="M710 614C688 523 607 458 509 458c-55 0-106 22-144 57l88 88c3 3 5 7 5 11 0 8-6 15-15 15l-193-5c-17 0-31-15-31-32L214 400c0-4 1-8 4-11 6-6 16-6 22 0l66 67C359 406 430 375 509 375c136 0 248 90 281 215 1 2 1 5 1 8 8 44-45 68-73 32-4-5-7-11-8-16z"></path></g>\n<g id="lumo:unordered-list"><path d="M146 325c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>\n<g id="lumo:upload"><path d="M454 271V604c0 21-17 38-37 38s-38-17-38-38V271L254 382c-15 14-39 12-53-3-14-15-12-39 3-53L391 160c14-13 36-13 51-1 0 0 0 0 0 1l187 166c15 14 17 37 3 53-14 15-37 17-53 3L454 271zM675 704c0-21 17-38 37-37 21 0 38 17 38 37v92c0 21-17 38-38 37H121c-21 0-38-17-38-37v-92c0-21 17-38 38-37s38 17 37 37v54h517v-54z"></path></g>\n<g id="lumo:user"><path d="M500 500c-69 0-125-56-125-125s56-125 125-125 125 56 125 125-56 125-125 125z m-292 292c0-115 131-208 292-209s292 93 292 209H208z"></path></g>\n</defs>\n</svg>\n</vaadin-iconset>',document.head.appendChild(k.content)},1195:function(t,e,r){"use strict";r.d(e,{$_:function(){return s}}),r(4407);var o=r(5128);const n=o.iv`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;
  }
`,i=document.createElement("template");i.innerHTML=`<style>${n.toString().replace(":host","html")}</style>`,document.head.appendChild(i.content);const s=o.iv`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;(0,o.hC)("",s,{moduleId:"lumo-color"});const a=o.iv`
  :host {
    color: var(--lumo-body-text-color) !important;
    background-color: var(--lumo-base-color) !important;
  }
`;(0,o.hC)("",[s,a],{moduleId:"lumo-color-legacy"})},1735:function(t,e,r){"use strict";r(4407);const o=document.createElement("template");o.innerHTML='\n  <style>\n    @font-face {\n      font-family: \'lumo-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: "\\ea01";\n      --lumo-icons-align-left: "\\ea02";\n      --lumo-icons-align-right: "\\ea03";\n      --lumo-icons-angle-down: "\\ea04";\n      --lumo-icons-angle-left: "\\ea05";\n      --lumo-icons-angle-right: "\\ea06";\n      --lumo-icons-angle-up: "\\ea07";\n      --lumo-icons-arrow-down: "\\ea08";\n      --lumo-icons-arrow-left: "\\ea09";\n      --lumo-icons-arrow-right: "\\ea0a";\n      --lumo-icons-arrow-up: "\\ea0b";\n      --lumo-icons-bar-chart: "\\ea0c";\n      --lumo-icons-bell: "\\ea0d";\n      --lumo-icons-calendar: "\\ea0e";\n      --lumo-icons-checkmark: "\\ea0f";\n      --lumo-icons-chevron-down: "\\ea10";\n      --lumo-icons-chevron-left: "\\ea11";\n      --lumo-icons-chevron-right: "\\ea12";\n      --lumo-icons-chevron-up: "\\ea13";\n      --lumo-icons-clock: "\\ea14";\n      --lumo-icons-cog: "\\ea15";\n      --lumo-icons-cross: "\\ea16";\n      --lumo-icons-download: "\\ea17";\n      --lumo-icons-dropdown: "\\ea18";\n      --lumo-icons-edit: "\\ea19";\n      --lumo-icons-error: "\\ea1a";\n      --lumo-icons-eye: "\\ea1b";\n      --lumo-icons-eye-disabled: "\\ea1c";\n      --lumo-icons-menu: "\\ea1d";\n      --lumo-icons-minus: "\\ea1e";\n      --lumo-icons-ordered-list: "\\ea1f";\n      --lumo-icons-phone: "\\ea20";\n      --lumo-icons-photo: "\\ea21";\n      --lumo-icons-play: "\\ea22";\n      --lumo-icons-plus: "\\ea23";\n      --lumo-icons-redo: "\\ea24";\n      --lumo-icons-reload: "\\ea25";\n      --lumo-icons-search: "\\ea26";\n      --lumo-icons-undo: "\\ea27";\n      --lumo-icons-unordered-list: "\\ea28";\n      --lumo-icons-upload: "\\ea29";\n      --lumo-icons-user: "\\ea2a";\n    }\n  </style>\n',document.head.appendChild(o.content)},4398:function(t,e,r){"use strict";r.d(e,{q:function(){return n}}),r(1195),r(1735),r(9098),r(9849);var o=r(5128);const n=o.iv`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;(0,o.hC)("",n,{moduleId:"lumo-field-button"})},2982:function(t,e,r){"use strict";r.d(e,{_:function(){return o}}),r(1195),r(9098),r(9849),r(4173);const o=r(5128).iv`
  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: 0.4em;
  }

  [part='helper-text'] {
    display: block;
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`},3208:function(t,e,r){"use strict";r.d(e,{J:function(){return l}}),r(1195),r(1735),r(9098),r(9416),r(9849),r(4173);var o=r(5128),n=r(4398),i=r(2982),s=r(1251);const a=o.iv`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--lumo-secondary-text-color);
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--lumo-body-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
    opacity: 0.1;
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }

    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Focus-ring */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted(*) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Invalid style */
  :host([invalid][focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small']) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small']) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(iron-icon):not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`,l=[s.l,n.q,i._,a];(0,o.hC)("",l,{moduleId:"lumo-input-field-shared-styles"})},6754:function(t,e,r){"use strict";r.d(e,{e:function(){return i}}),r(9416),r(9849);var o=r(5128),n=r(510);const i=o.iv`
  :host([opening]),
  :host([closing]) {
    animation: 0.14s lumo-overlay-dummy-animation;
  }

  [part='overlay'] {
    will-change: opacity, transform;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-enter ease-out both;
  }

  @keyframes lumo-menu-overlay-enter {
    0% {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-exit both;
  }

  @keyframes lumo-menu-overlay-exit {
    100% {
      opacity: 0;
    }
  }
`;(0,o.hC)("",i,{moduleId:"lumo-menu-overlay-core"});const s=o.iv`
  /* Small viewport (bottom sheet) styles */
  /* Use direct media queries instead of the state attributes ([phone] and [fullscreen]) provided by the elements */
  @media (max-width: 420px), (max-height: 420px) {
    :host {
      top: 0 !important;
      right: 0 !important;
      bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
      left: 0 !important;
      align-items: stretch !important;
      justify-content: flex-end !important;
    }

    [part='overlay'] {
      max-height: 50vh;
      width: 100vw;
      border-radius: 0;
      box-shadow: var(--lumo-box-shadow-xl);
    }

    /* The content part scrolls instead of the overlay part, because of the gradient fade-out */
    [part='content'] {
      padding: 30px var(--lumo-space-m);
      max-height: inherit;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
      mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
    }

    [part='backdrop'] {
      display: block;
    }

    /* Animations */

    :host([opening]) [part='overlay'] {
      animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
    }

    :host([closing]),
    :host([closing]) [part='backdrop'] {
      animation-delay: 0.14s;
    }

    :host([closing]) [part='overlay'] {
      animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
    }
  }

  @keyframes lumo-mobile-menu-overlay-enter {
    0% {
      transform: translateY(150%);
    }
  }

  @keyframes lumo-mobile-menu-overlay-exit {
    100% {
      transform: translateY(150%);
    }
  }
`,a=[n.I,i,s];(0,o.hC)("",a,{moduleId:"lumo-menu-overlay"})},510:function(t,e,r){"use strict";r.d(e,{I:function(){return n}}),r(1195),r(9416),r(9849),r(4173);var o=r(5128);const n=o.iv`
  :host {
    top: var(--lumo-space-m);
    right: var(--lumo-space-m);
    bottom: var(--lumo-space-m);
    left: var(--lumo-space-m);
    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
    /* stylelint-disable-next-line */
    outline: 0px solid transparent;
  }

  [part='overlay'] {
    background-color: var(--lumo-base-color);
    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
    border-radius: var(--lumo-border-radius-m);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);
    color: var(--lumo-body-text-color);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 400;
    line-height: var(--lumo-line-height-m);
    letter-spacing: 0;
    text-transform: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [part='content'] {
    padding: var(--lumo-space-xs);
  }

  [part='backdrop'] {
    background-color: var(--lumo-shade-20pct);
    animation: 0.2s lumo-overlay-backdrop-enter both;
    will-change: opacity;
  }

  @keyframes lumo-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }

  :host([closing]) [part='backdrop'] {
    animation: 0.2s lumo-overlay-backdrop-exit both;
  }

  @keyframes lumo-overlay-backdrop-exit {
    100% {
      opacity: 0;
    }
  }

  @keyframes lumo-overlay-dummy-animation {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;(0,o.hC)("",n,{moduleId:"lumo-overlay"})},1251:function(t,e,r){"use strict";r.d(e,{l:function(){return n}}),r(1195),r(9416),r(9849),r(4173);var o=r(5128);const n=o.iv`
  [part='label'] {
    align-self: flex-start;
    color: var(--lumo-secondary-text-color);
    font-weight: 500;
    font-size: var(--lumo-font-size-s);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([has-label]) ::slotted([slot='tooltip']) {
    --vaadin-tooltip-offset-bottom: calc((var(--lumo-space-m) - var(--lumo-space-xs)) * -1);
  }

  :host([required]) [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '•');
    transition: opacity 0.2s;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-error-text-color);
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;(0,o.hC)("",n,{moduleId:"lumo-required-field"})},9098:function(t,e,r){"use strict";r(4407);const o=r(5128).iv`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`,n=document.createElement("template");n.innerHTML=`<style>${o.toString().replace(":host","html")}</style>`,document.head.appendChild(n.content)},9416:function(t,e,r){"use strict";r(4407);const o=r(5128).iv`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`,n=document.createElement("template");n.innerHTML=`<style>${o.toString().replace(":host","html")}</style>`,document.head.appendChild(n.content)},9849:function(t,e,r){"use strict";r(4407);var o=r(5128);const n=o.iv`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */
    --lumo-border-radius: 0.25em; /* Deprecated */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`,i=(o.iv`
  html {
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
  }
`,document.createElement("template"));i.innerHTML=`<style>${n.toString().replace(":host","html")}$</style>`,document.head.appendChild(i.content)},4173:function(t,e,r){"use strict";r(4407);var o=r(5128);const n=o.iv`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,i=o.iv`
  html,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size, var(--lumo-font-size-m));
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-top: 1.25em;
  }

  h1 {
    font-size: var(--lumo-font-size-xxxl);
    margin-bottom: 0.75em;
  }

  h2 {
    font-size: var(--lumo-font-size-xxl);
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: var(--lumo-font-size-xl);
    margin-bottom: 0.5em;
  }

  h4 {
    font-size: var(--lumo-font-size-l);
    margin-bottom: 0.5em;
  }

  h5 {
    font-size: var(--lumo-font-size-m);
    margin-bottom: 0.25em;
  }

  h6 {
    font-size: var(--lumo-font-size-xs);
    margin-bottom: 0;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;(0,o.hC)("",i,{moduleId:"lumo-typography"});const s=document.createElement("template");s.innerHTML=`<style>${n.toString().replace(":host","html")}</style>`,document.head.appendChild(s.content)},4407:function(t,e,r){"use strict";class o extends HTMLElement{static get version(){return"23.3.7"}}customElements.define("vaadin-lumo-styles",o)},5128:function(t,e,r){"use strict";r.d(e,{Tb:function(){return p},iv:function(){return o.iv},hC:function(){return a}});var o=r(9392);const n=t=>class extends t{static get properties(){return{theme:{type:String,reflectToAttribute:!0,observer:"__deprecatedThemePropertyChanged"},_theme:{type:String,readOnly:!0}}}__deprecatedThemePropertyChanged(t){this._set_theme(t)}};var i=r(5108);const s=[];function a(t,e,r={}){var n;t&&(n=t,h(customElements.get(n))&&i.warn(`The custom element definition for "${t}"\n      was finalized before a style module was registered.\n      Make sure to add component specific style modules before\n      importing the corresponding custom element.`)),e=function(t=[]){return[t].flat(1/0).filter((t=>t instanceof o.c3||(i.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1)))}(e),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(t,e,r):s.push({themeFor:t,styles:e,include:r.include,moduleId:r.moduleId})}function l(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():s}function c(t=""){let e=0;return t.startsWith("lumo-")||t.startsWith("material-")?e=1:t.startsWith("vaadin-")&&(e=2),e}function d(t){const e=[];return t.include&&[].concat(t.include).forEach((t=>{const r=l().find((e=>e.moduleId===t));r?e.push(...d(r),...r.styles):i.warn(`Included moduleId ${t} not found in style registry`)}),t.styles),e}function u(t){const e=`${t}-default-theme`,r=l().filter((r=>r.moduleId!==e&&function(t,e){return(t||"").split(" ").some((t=>new RegExp(`^${t.split("*").join(".*")}$`).test(e)))}(r.themeFor,t))).map((t=>({...t,styles:[...d(t),...t.styles],includePriority:c(t.moduleId)}))).sort(((t,e)=>e.includePriority-t.includePriority));return r.length>0?r:l().filter((t=>t.moduleId===e))}function h(t){return t&&Object.prototype.hasOwnProperty.call(t,"__themes")}const p=t=>class extends(n(t)){static finalize(){if(super.finalize(),this.elementStyles)return;const t=this.prototype._template;t&&!h(this)&&function(t,e){const r=document.createElement("style");r.innerHTML=t.map((t=>t.cssText)).join("\n"),e.content.appendChild(r)}(this.getStylesForThis(),t)}static finalizeStyles(t){const e=this.getStylesForThis();return t?[...super.finalizeStyles(t),...e]:e}static getStylesForThis(){const t=Object.getPrototypeOf(this.prototype),e=(t?t.constructor.__themes:[])||[];this.__themes=[...e,...u(this.is)];const r=this.__themes.flatMap((t=>t.styles));return r.filter(((t,e)=>e===r.lastIndexOf(t)))}}},3692:function(t,e,r){"use strict";var o;r.d(e,{Al:function(){return $},Jb:function(){return E},Ld:function(){return S},YP:function(){return A},dy:function(){return C},sY:function(){return B}});const n=window,i=n.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,a=`lit$${(Math.random()+"").slice(9)}$`,l="?"+a,c=`<${l}>`,d=document,u=(t="")=>d.createComment(t),h=t=>null===t||"object"!=typeof t&&"function"!=typeof t,p=Array.isArray,m=t=>p(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,g=/>/g,v=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),y=/'/g,b=/"/g,x=/^(?:script|style|textarea|title)$/i,w=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),C=w(1),A=w(2),E=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),P=new WeakMap,O=d.createTreeWalker(d,129,null,!1),I=(t,e)=>{const r=t.length-1,o=[];let n,i=2===e?"<svg>":"",l=f;for(let e=0;e<r;e++){const r=t[e];let s,d,u=-1,h=0;for(;h<r.length&&(l.lastIndex=h,d=l.exec(r),null!==d);)h=l.lastIndex,l===f?"!--"===d[1]?l=_:void 0!==d[1]?l=g:void 0!==d[2]?(x.test(d[2])&&(n=RegExp("</"+d[2],"g")),l=v):void 0!==d[3]&&(l=v):l===v?">"===d[0]?(l=null!=n?n:f,u=-1):void 0===d[1]?u=-2:(u=l.lastIndex-d[2].length,s=d[1],l=void 0===d[3]?v:'"'===d[3]?b:y):l===b||l===y?l=v:l===_||l===g?l=f:(l=v,n=void 0);const p=l===v&&t[e+1].startsWith("/>")?" ":"";i+=l===f?r+c:u>=0?(o.push(s),r.slice(0,u)+"$lit$"+r.slice(u)+a+p):r+a+(-2===u?(o.push(void 0),e):p)}const d=i+(t[r]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==s?s.createHTML(d):d,o]};class T{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let n=0,s=0;const c=t.length-1,d=this.parts,[h,p]=I(t,e);if(this.el=T.createElement(h,r),O.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=O.nextNode())&&d.length<c;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(a)){const r=p[s++];if(t.push(e),void 0!==r){const t=o.getAttribute(r.toLowerCase()+"$lit$").split(a),e=/([.?@])?(.*)/.exec(r);d.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?R:"?"===e[1]?j:"@"===e[1]?V:L})}else d.push({type:6,index:n})}for(const e of t)o.removeAttribute(e)}if(x.test(o.tagName)){const t=o.textContent.split(a),e=t.length-1;if(e>0){o.textContent=i?i.emptyScript:"";for(let r=0;r<e;r++)o.append(t[r],u()),O.nextNode(),d.push({type:2,index:++n});o.append(t[e],u())}}}else if(8===o.nodeType)if(o.data===l)d.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(a,t+1));)d.push({type:7,index:n}),t+=a.length-1}n++}}static createElement(t,e){const r=d.createElement("template");return r.innerHTML=t,r}}function k(t,e,r=t,o){var n,i,s,a;if(e===E)return e;let l=void 0!==o?null===(n=r._$Co)||void 0===n?void 0:n[o]:r._$Cl;const c=h(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(i=null==l?void 0:l._$AO)||void 0===i||i.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,r,o)),void 0!==o?(null!==(s=(a=r)._$Co)&&void 0!==s?s:a._$Co=[])[o]=l:r._$Cl=l),void 0!==l&&(e=k(t,l._$AS(t,e.values),l,o)),e}class z{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:r},parts:o}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:d).importNode(r,!0);O.currentNode=n;let i=O.nextNode(),s=0,a=0,l=o[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new N(i,i.nextSibling,this,t):1===l.type?e=new l.ctor(i,l.name,l.strings,this,t):6===l.type&&(e=new D(i,this,t)),this.u.push(e),l=o[++a]}s!==(null==l?void 0:l.index)&&(i=O.nextNode(),s++)}return n}p(t){let e=0;for(const r of this.u)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class N{constructor(t,e,r,o){var n;this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cm=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=k(this,t,e),h(t)?t===S||null==t||""===t?(this._$AH!==S&&this._$AR(),this._$AH=S):t!==this._$AH&&t!==E&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):m(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==S&&h(this._$AH)?this._$AA.nextSibling.data=t:this.T(d.createTextNode(t)),this._$AH=t}$(t){var e;const{values:r,_$litType$:o}=t,n="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=T.createElement(o.h,this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.p(r);else{const t=new z(n,this),e=t.v(this.options);t.p(r),this.T(e),this._$AH=t}}_$AC(t){let e=P.get(t.strings);return void 0===e&&P.set(t.strings,e=new T(t)),e}k(t){p(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,o=0;for(const n of t)o===e.length?e.push(r=new N(this.O(u()),this.O(u()),this,this.options)):r=e[o],r._$AI(n),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class L{constructor(t,e,r,o,n){this.type=1,this._$AH=S,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=S}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,o){const n=this.strings;let i=!1;if(void 0===n)t=k(this,t,e,0),i=!h(t)||t!==this._$AH&&t!==E,i&&(this._$AH=t);else{const o=t;let s,a;for(t=n[0],s=0;s<n.length-1;s++)a=k(this,o[r+s],e,s),a===E&&(a=this._$AH[s]),i||(i=!h(a)||a!==this._$AH[s]),a===S?t=S:t!==S&&(t+=(null!=a?a:"")+n[s+1]),this._$AH[s]=a}i&&!o&&this.j(t)}j(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class R extends L{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===S?void 0:t}}const M=i?i.emptyScript:"";class j extends L{constructor(){super(...arguments),this.type=4}j(t){t&&t!==S?this.element.setAttribute(this.name,M):this.element.removeAttribute(this.name)}}class V extends L{constructor(t,e,r,o,n){super(t,e,r,o,n),this.type=5}_$AI(t,e=this){var r;if((t=null!==(r=k(this,t,e,0))&&void 0!==r?r:S)===E)return;const o=this._$AH,n=t===S&&o!==S||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==S&&(o===S||n);n&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==r?r:this.element,t):this._$AH.handleEvent(t)}}class D{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){k(this,t)}}const $={P:"$lit$",A:a,M:l,C:1,L:I,R:z,D:m,V:k,I:N,H:L,N:j,U:V,B:R,F:D},H=n.litHtmlPolyfillSupport;null==H||H(T,N),(null!==(o=n.litHtmlVersions)&&void 0!==o?o:n.litHtmlVersions=[]).push("2.6.1");const B=(t,e,r)=>{var o,n;const i=null!==(o=null==r?void 0:r.renderBefore)&&void 0!==o?o:e;let s=i._$litPart$;if(void 0===s){const t=null!==(n=null==r?void 0:r.renderBefore)&&void 0!==n?n:null;i._$litPart$=s=new N(e.insertBefore(u(),t),t,void 0,null!=r?r:{})}return s._$AI(t),s}},7408:function(t,e,r){"use strict";r.d(e,{Mo:function(){return o},SB:function(){return i}});const o=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:r,elements:o}=e;return{kind:r,elements:o,finisher(e){customElements.define(t,e)}}})(t,e),n=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(r){r.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function i(t){return e={...t,state:!0},(t,r)=>void 0!==r?((t,e,r)=>{e.constructor.createProperty(r,t)})(e,t,r):n(e,t);var e}var s;null===(s=window.HTMLSlotElement)||void 0===s||s.prototype.assignedElements},9392:function(t,e,r){"use strict";r.d(e,{c3:function(){return a},oi:function(){return w},iv:function(){return l},dy:function(){return x.dy},Ld:function(){return x.Ld},YP:function(){return x.YP}});const o=window,n=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class a{constructor(t,e,r){if(this._$cssResult$=!0,r!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(n&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&s.set(e,t))}return t}toString(){return this.cssText}}const l=(t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,r,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[o+1]),t[0]);return new a(r,t,i)},c=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,i))(e)})(t):t;var d;const u=window,h=u.trustedTypes,p=h?h.emptyScript:"",m=u.reactiveElementPolyfillSupport,f={toAttribute(t,e){switch(e){case Boolean:t=t?p:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},_=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:_};class v extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,r)=>{const o=this._$Ep(r,e);void 0!==o&&(this._$Ev.set(o,r),t.push(o))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,r,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of e)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Ep(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,r;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(r=t.hostConnected)||void 0===r||r.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{n?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const r=document.createElement("style"),n=o.litNonce;void 0!==n&&r.setAttribute("nonce",n),r.textContent=e.cssText,t.appendChild(r)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e,r=g){var o;const n=this.constructor._$Ep(t,r);if(void 0!==n&&!0===r.reflect){const i=(void 0!==(null===(o=r.converter)||void 0===o?void 0:o.toAttribute)?r.converter:f).toAttribute(e,r.type);this._$El=t,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$El=null}}_$AK(t,e){var r;const o=this.constructor,n=o._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=o.getPropertyOptions(n),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(r=t.converter)||void 0===r?void 0:r.fromAttribute)?t.converter:f;this._$El=n,this[n]=i.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,r){let o=!0;void 0!==t&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||_)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,r))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(r)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==m||m({ReactiveElement:v}),(null!==(d=u.reactiveElementVersions)&&void 0!==d?d:u.reactiveElementVersions=[]).push("1.6.1");var y,b,x=r(3692);class w extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,x.sY)(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return x.Jb}}w.finalized=!0,w._$litElement$=!0,null===(y=globalThis.litElementHydrateSupport)||void 0===y||y.call(globalThis,{LitElement:w});const C=globalThis.litElementPolyfillSupport;null==C||C({LitElement:w}),(null!==(b=globalThis.litElementVersions)&&void 0!==b?b:globalThis.litElementVersions=[]).push("3.2.2")}}]);