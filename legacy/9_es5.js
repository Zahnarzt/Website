(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{352:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(3);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f=function(e,t,r,n){var o,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===("undefined"==typeof Reflect?"undefined":s(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(c=(i<3?o(c):i>3?o(t,r,c):o(t,r))||c);return i>3&&c&&Object.defineProperty(t,r,c),c},d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(d,e);var t,r,n,s,f=(t=d,function(){var e,r=a(t);if(u()){var n=a(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return c(this,e)});function d(){var e;return o(this,d),(e=f.apply(this,arguments)).active=!1,e}return r=d,(n=[{key:"shouldUpdate",value:function(){return this.active}}])&&i(r.prototype,n),s&&i(r,s),d}(n.a);f([Object(n.e)({type:Boolean})],d.prototype,"active",void 0)},384:function(e,t,r){"use strict";r.r(t),r.d(t,"ViewContact",(function(){return R}));var n=r(3),o=r(352),i=r(63),c=n.b`:host{display:block}:host *{box-sizing:border-box}.grid-container--intro{grid-template-rows:repeat(5,minmax(50px,auto));grid-template-areas:". header header ." "picture picture picture ." ". address address ." ". phone phone ." ". times times .";padding:0 0 64px 0}h1,h2,h4{margin:0}h1{display:flex;flex-direction:column;font-size:2em;letter-spacing:.067em}h1 span{margin-right:auto}h2{color:#7b7b7b}h4{margin-bottom:1em}header{grid-area:header;display:flex;flex-direction:column;justify-content:flex-end}.maps{position:relative;grid-area:picture;background-color:#fff;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.maps:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform:translate(12px,12px);border-width:1px;border-style:dashed;border-color:#242a49;z-index:-1}iframe{position:absolute;top:0;left:0;width:100%!important;height:100%!important}.address{position:relative;grid-area:address;padding:24px;font-style:normal;background-color:#f7f7f7}.phone{position:relative;grid-area:phone;padding:24px;background-color:#f7f7f7;border-width:1px;border-style:solid;border-color:#00e;color:inherit;text-decoration:none}.phone .number{color:#00e;text-decoration:underline}.address:before,.phone:before,.times:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform:translate(12px,12px);background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzIDMiIHdpZHRoPSczJyBoZWlnaHQ9JzMnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMgMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyNDJBNDk7fQo8L3N0eWxlPgo8Zz4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMC41Ii8+CjwvZz4KPC9zdmc+Cg==);background-repeat:repeat;background-position:bottom right;z-index:-1}.times{position:relative;grid-area:times;padding:24px;background-color:var(--app-background-color-gray)}.times .time-row{display:flex;max-width:200px}.times .time-row time{margin-left:auto}@media (min-width:768px){.grid-container--intro{grid-template-rows:repeat(3,minmax(50px,auto));grid-template-areas:". header header header header header . . . . ." "picture picture picture picture picture picture picture picture picture . ." ". address address address phone phone phone times times times ."}}@media (min-width:1025px){.grid-container--intro{grid-template-rows:repeat(7,minmax(50px,auto));grid-template-areas:". header header header header header . . . . ." ". header header header header header . address address address ." "picture picture picture picture picture picture picture address address address ." "picture picture picture picture picture picture picture phone phone phone ." "picture picture picture picture picture picture picture phone phone phone ." "picture picture picture picture picture picture picture times times times ." "picture picture picture picture picture picture picture times times times ."}}@media (min-width:1281px){.grid-container--intro{grid-template-areas:". . header header header header . . . . ." ". . header header header header . address address address ." "picture picture picture picture picture picture picture address address address ." "picture picture picture picture picture picture picture phone phone phone ." "picture picture picture picture picture picture picture phone phone phone ." "picture picture picture picture picture picture picture times times times ." "picture picture picture picture picture picture picture times times times ."}}`;function u(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n      <section class="grid-container grid-container--intro">\n        <header>\n          <h2>Wo & wie Sie uns finden</h2>\n          <h1>Kontakt</h1>\n        </header>\n        <div class="maps">\n          <iframe\n            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2509.747655486801!2d6.88280045121726!3d51.0208105794577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf31b57cf1f951%3A0x79dde2ee6e58c33!2sWeilerweg%2033%2C%2050765%20K%C3%B6ln!5e0!3m2!1sde!2sde!4v1585387018486!5m2!1sde!2sde"\n            frameborder="0"\n            allowfullscreen=""\n            aria-hidden="false"\n            tabindex="0">\n          </iframe>\n        </div>\n        <address class="address">\n          <h4>Anschrift</h4>\n          Zahnarztpraxis<br>\n          Dr. Hilgner & Dr. Vogt<br>\n          Weilerweg 33<br>\n          50765 Köln\n        </address>\n        <a class="phone" href="tel:+49221795014">\n          <h4>Terminvereinbarungen</h4>\n          <p>Rufen Sie einfach an:<br>\n          <b class="number">0221 / 79 50 14</b></p>\n        </a>\n        <div class="times ','">\n          <h4>Öffnungszeiten</h4>\n          <span class="time-row"><b>Mo-Do:</b><time>08:00 - 20:00 Uhr</time></span>\n          <span class="time-row"><b>Fr:</b><time>07:00 - 19:00 Uhr</time></span>\n          <span class="time-state">',"</span>\n        </div>\n      </section>\n    "]);return u=function(){return e},e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var h=function(e,t,r,n){var o,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===("undefined"==typeof Reflect?"undefined":b(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(c=(i<3?o(c):i>3?o(t,r,c):o(t,r))||c);return i>3&&c&&Object.defineProperty(t,r,c),c},y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(y,e);var t,r,o,b,h=(t=y,function(){var e,r=d(t);if(f()){var n=d(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return s(this,e)});function y(){var e;return a(this,y),(e=h.apply(this,arguments))._date=new Date,e._businessOpen=!1,e}return r=y,b=[{key:"styles",get:function(){return[i.a,c]}}],(o=[{key:"render",value:function(){var e=this._businessOpen?"open":"closed";return Object(n.d)(u(),e,e)}}])&&p(r.prototype,o),b&&p(r,b),y}(n.a);function m(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n      <section-contact></section-contact>\n    "]);return m=function(){return e},e}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}h([Object(n.e)({type:Date})],y.prototype,"_date",void 0),h([Object(n.e)({type:Boolean})],y.prototype,"_businessOpen",void 0),y=h([Object(n.c)("section-contact")],y);var P=function(e,t,r,n){var o,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===("undefined"==typeof Reflect?"undefined":I(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(c=(i<3?o(c):i>3?o(t,r,c):o(t,r))||c);return i>3&&c&&Object.defineProperty(t,r,c),c},R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(u,e);var t,r,o,i,c=(t=u,function(){var e,r=O(t);if(j()){var n=O(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return w(this,e)});function u(){return g(this,u),c.apply(this,arguments)}return r=u,(o=[{key:"render",value:function(){return Object(n.d)(m())}}])&&v(r.prototype,o),i&&v(r,i),u}(o.a);R=P([Object(n.c)("view-contact")],R)}}]);