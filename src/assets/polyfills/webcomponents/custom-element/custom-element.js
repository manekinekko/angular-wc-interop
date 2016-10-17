/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';(function(){function c(){this.a=new Map;this.j=new Map;this.h=new Map;this.o=new Set;this.C=new MutationObserver(this.D.bind(this));this.f=null;this.F=new Set;this.enableFlush=!0;this.s=!1;this.m=null}function g(){return h.customElements}function k(a){if(!/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a)||-1!==q.indexOf(a))return Error("The element name '"+a+"' is not valid.")}function l(a,b,d,e){var c=g();a=d?m.call(a,b,d):m.call(a,b);(b=c.a.get(b.toLowerCase()))&&c.u(a,b,e);c.b(a);return a}
function n(a,b,d,e){b=b.toLowerCase();var c=a.getAttribute(b);e.call(a,b,d);1==a.__$CE_upgraded&&(e=g().a.get(a.localName),d=e.A,(e=e.i)&&0<=d.indexOf(b)&&(d=a.getAttribute(b),d!==c&&e.call(a,b,c,d,null)))}var f=document,h=window;if(g()&&(g().g=function(){},!g().forcePolyfill))return;var q="annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ");c.prototype.L=function(a,b){function d(a){var b=f[a];if(void 0!==b&&"function"!==typeof b)throw Error(c+
" '"+a+"' is not a Function");return b}if("function"!==typeof b)throw new TypeError("constructor must be a Constructor");var e=k(a);if(e)throw e;if(this.a.has(a))throw Error("An element with name '"+a+"' is already defined");if(this.j.has(b))throw Error("Definition failed for '"+a+"': The constructor is already used.");var c=a,f=b.prototype;if("object"!==typeof f)throw new TypeError("Definition failed for '"+a+"': constructor.prototype must be an object");var e=d("connectedCallback"),g=d("disconnectedCallback"),
h=d("attributeChangedCallback");this.a.set(c,{name:a,localName:c,constructor:b,v:e,w:g,i:h,A:h&&b.observedAttributes||[]});this.j.set(b,c);this.K();if(a=this.h.get(c))a.resolve(void 0),this.h.delete(c)};c.prototype.get=function(a){return(a=this.a.get(a))?a.constructor:void 0};c.prototype.M=function(a){var b=k(a);if(b)return Promise.reject(b);if(this.a.has(a))return Promise.resolve();if(b=this.h.get(a))return b.N;var d,e=new Promise(function(a){d=a}),b={N:e,resolve:d};this.h.set(a,b);return e};c.prototype.g=
function(){this.enableFlush&&(this.l(this.m.takeRecords()),this.D(this.C.takeRecords()),this.o.forEach(function(a){this.l(a.takeRecords())},this))};c.prototype.K=function(){var a=this;if(!this.s){this.s=!0;var b=function(){a.s=!1;a.m||(a.m=a.b(f));a.c(f.childNodes)};window.HTMLImports?window.HTMLImports.whenReady(b):b()}};c.prototype.I=function(a){this.f=a};c.prototype.b=function(a){if(null!=a.__$CE_observer)return a.__$CE_observer;a.__$CE_observer=new MutationObserver(this.l.bind(this));a.__$CE_observer.observe(a,
{childList:!0,subtree:!0});this.enableFlush&&this.o.add(a.__$CE_observer);return a.__$CE_observer};c.prototype.J=function(a){null!=a.__$CE_observer&&(a.__$CE_observer.disconnect(),this.enableFlush&&this.o.delete(a.__$CE_observer),a.__$CE_observer=null)};c.prototype.l=function(a){for(var b=0;b<a.length;b++){var d=a[b];if("childList"===d.type){var e=d.removedNodes;this.c(d.addedNodes);this.H(e)}}};c.prototype.c=function(a,b){b=b||new Set;for(var d=0;d<a.length;d++){var e=a[d];if(e.nodeType===Node.ELEMENT_NODE){this.J(e);
e=f.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,null,!1);do this.G(e.currentNode,b);while(e.nextNode())}}};c.prototype.G=function(a,b){if(!b.has(a)){b.add(a);var d=this.a.get(a.localName);if(d){a.__$CE_upgraded||this.u(a,d,!0);var e;if(e=a.__$CE_upgraded&&!a.__$CE_attached)a:{e=a;do{if(e.__$CE_attached||e.nodeType===Node.DOCUMENT_NODE){e=!0;break a}e=e.parentNode||e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host}while(e);e=!1}e&&(a.__$CE_attached=!0,d.v&&d.v.call(a))}a.shadowRoot&&this.c(a.shadowRoot.childNodes,
b);"LINK"===a.tagName&&a.rel&&-1!==a.rel.toLowerCase().split(" ").indexOf("import")&&this.B(a,b)}};c.prototype.B=function(a,b){var d=a.import;if(d)b.has(d)||(b.add(d),d.__$CE_observer||this.b(d),this.c(d.childNodes,b));else if(b=a.href,!this.F.has(b)){this.F.add(b);var e=this,c=function(){a.removeEventListener("load",c);a.import.__$CE_observer||e.b(a.import);e.c(a.import.childNodes)};a.addEventListener("load",c)}};c.prototype.H=function(a){for(var b=0;b<a.length;b++){var d=a[b];if(d.nodeType===Node.ELEMENT_NODE){this.b(d);
d=f.createTreeWalker(d,NodeFilter.SHOW_ELEMENT,null,!1);do{var e=d.currentNode;if(e.__$CE_upgraded&&e.__$CE_attached){e.__$CE_attached=!1;var c=this.a.get(e.localName);c&&c.w&&c.w.call(e)}}while(d.nextNode())}}};c.prototype.u=function(a,b,d){a.__proto__=b.constructor.prototype;d&&(this.I(a),new b.constructor,a.__$CE_upgraded=!0,console.assert(!this.f));d=b.A;if((b=b.i)&&0<d.length){this.C.observe(a,{attributes:!0,attributeOldValue:!0,attributeFilter:d});for(var e=0;e<d.length;e++){var c=d[e];if(a.hasAttribute(c)){var f=
a.getAttribute(c);b.call(a,c,null,f,null)}}}};c.prototype.D=function(a){for(var b=0;b<a.length;b++){var d=a[b];if("attributes"===d.type){var c=d.target,f=this.a.get(c.localName),g=d.attributeName,h=d.oldValue,k=c.getAttribute(g);k!==h&&f.i.call(c,g,h,k,d.attributeNamespace)}}};window.CustomElementRegistry=c;c.prototype.define=c.prototype.L;c.prototype.get=c.prototype.get;c.prototype.whenDefined=c.prototype.M;c.prototype.flush=c.prototype.g;c.prototype.polyfilled=!0;c.prototype._observeRoot=c.prototype.b;
c.prototype._addImport=c.prototype.B;var r=h.HTMLElement;h.HTMLElement=function(){var a=g();if(a.f){var b=a.f;a.f=null;return b}if(this.constructor)return a=a.j.get(this.constructor),l(f,a,void 0,!1);throw Error("Unknown constructor. Did you call customElements.define()?");};h.HTMLElement.prototype=Object.create(r.prototype,{constructor:{value:h.HTMLElement,configurable:!0,writable:!0}});var m=f.createElement;f.createElement=function(a,b){return l(f,a,b,!0)};var t=f.createElementNS;f.createElementNS=
function(a,b){return"http://www.w3.org/1999/xhtml"===a?f.createElement(b):t.call(f,a,b)};var p=Element.prototype.attachShadow;p&&Object.defineProperty(Element.prototype,"attachShadow",{value:function(a){a=p.call(this,a);g().b(a);return a}});var u=f.importNode;f.importNode=function(a,b){a=u.call(f,a,b);g().c(a.nodeType===Node.ELEMENT_NODE?[a]:a.childNodes);return a};var v=Element.prototype.setAttribute;Element.prototype.setAttribute=function(a,b){n(this,a,b,v)};var w=Element.prototype.removeAttribute;
Element.prototype.removeAttribute=function(a){n(this,a,null,w)};Object.defineProperty(window,"customElements",{value:new c,configurable:!0,enumerable:!0});window.CustomElements={takeRecords:function(){g().g&&g().g()}}})();

//# sourceMappingURL=custom-elements.min.js.map
