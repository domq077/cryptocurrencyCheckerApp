(self.webpackChunkcryptocurrency_checker_app=self.webpackChunkcryptocurrency_checker_app||[]).push([[11],{8181:function(t,e,n){"use strict";n.d(e,{ZP:function(){return wt},bO:function(){return S}});var r=n(7294),o=n(5697),i=n.n(o),a=n(8367),u=n(4087),c=n.n(u);function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=-1,r=function r(o){n<0&&(n=o),o-n>e?(t(o),n=-1):c()(r)};c()(r)}function s(t){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(t,e)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function y(){var t=function(){return null},e=!1,n=function n(r){if(!e){if(Array.isArray(r)){if(!r.length)return;var o=l(r),i=o[0],a=o.slice(1);return"number"===typeof i?void f(n.bind(null,a),i):(n(i),void f(n.bind(null,a)))}"object"===s(r)&&t(r),"function"===typeof r&&r()}};return{stop:function(){e=!0},start:function(t){e=!1,n(t)},subscribe:function(e){return t=e,function(){t=function(){return null}}}}}function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){h(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=["Webkit","Moz","O","ms"],d=["-webkit-","-moz-","-o-","-ms-"],O=["transform","transformOrigin","transition"],g=function(t){return t},j=function(t,e){return Object.keys(e).reduce((function(n,r){return m(m({},n),{},h({},r,t(r,e[r])))}),{})},S=function(t){return Object.keys(t).reduce((function(t,e){return m(m({},t),function(t,e){if(-1===O.indexOf(t))return h({},t,e);var n="transition"===t,r=t.replace(/(\w)/,(function(t){return t.toUpperCase()})),o=e;return v.reduce((function(t,i,a){return n&&(o=e.replace(/(transform|transform-origin)/gim,"".concat(d[a],"$1"))),m(m({},t),{},h({},i+r,o))}),{})}(e,t[e]))}),t)},A=function(t,e,n){return t.map((function(t){return"".concat((r=t,r.replace(/([A-Z])/g,(function(t){return"-".concat(t.toLowerCase())})))," ").concat(e,"ms ").concat(n);var r})).join(",")};function w(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(t,e)||E(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(t){return function(t){if(Array.isArray(t))return k(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||E(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(t,e){if(t){if("string"===typeof t)return k(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(t,e):void 0}}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var T=1e-4,C=function(t,e){return[0,3*t,3*e-6*t,3*t-3*e+1]},R=function(t,e){return t.map((function(t,n){return t*Math.pow(e,n)})).reduce((function(t,e){return t+e}))},_=function(t,e){return function(n){var r=C(t,e);return R(r,n)}},D=function(t,e){return function(n){var r=C(t,e),o=[].concat(P(r.map((function(t,e){return t*e})).slice(1)),[0]);return R(o,n)}},I=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e[0],o=e[1],i=e[2],a=e[3];if(1===e.length)switch(e[0]){case"linear":r=0,o=0,i=1,a=1;break;case"ease":r=.25,o=.1,i=.25,a=1;break;case"ease-in":r=.42,o=0,i=1,a=1;break;case"ease-out":r=.42,o=0,i=.58,a=1;break;case"ease-in-out":r=0,o=0,i=.58,a=1;break;default:var u=e[0].split("(");if("cubic-bezier"===u[0]&&4===u[1].split(")")[0].split(",").length){var c=u[1].split(")")[0].split(",").map((function(t){return parseFloat(t)})),f=w(c,4);r=f[0],o=f[1],i=f[2],a=f[3]}}[r,i,o,a].every((function(t){return"number"===typeof t&&t>=0&&t<=1}));var s=_(r,i),l=_(o,a),p=D(r,i),y=function(t){return t>1?1:t<0?0:t},b=function(t){for(var e=t>1?1:t,n=e,r=0;r<8;++r){var o=s(n)-e,i=p(n);if(Math.abs(o-e)<T||i<T)return l(n);n=y(n-o/i)}return l(n)};return b.isStepper=!1,b},x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.stiff,n=void 0===e?100:e,r=t.damping,o=void 0===r?8:r,i=t.dt,a=void 0===i?17:i,u=function(t,e,r){var i=r+(-(t-e)*n-r*o)*a/1e3,u=r*a/1e3+t;return Math.abs(u-e)<T&&Math.abs(i)<T?[e,0]:[u,i]};return u.isStepper=!0,u.dt=a,u};function N(t){return function(t){if(Array.isArray(t))return $(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||F(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?B(Object(n),!0).forEach((function(e){J(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function J(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function U(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(t,e)||F(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(t,e){if(t){if("string"===typeof t)return $(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(t,e):void 0}}function $(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var z=function(t,e,n){return t+(e-t)*n},q=function(t){return t.from!==t.to},W=function t(e,n,r){var o=j((function(t,n){if(q(n)){var r=U(e(n.from,n.to,n.velocity),2),o=r[0],i=r[1];return M(M({},n),{},{from:o,velocity:i})}return n}),n);return r<1?j((function(t,e){return q(e)?M(M({},e),{},{velocity:z(e.velocity,o[t].velocity,r),from:z(e.from,o[t].from,r)}):e}),n):t(e,o,r-1)},Z=function(t,e,n,r,o){var i,a,f,s,l=(i=t,a=e,[Object.keys(i),Object.keys(a)].reduce((function(t,e){return t.filter((function(t){return e.includes(t)}))}))),p=l.reduce((function(n,r){return M(M({},n),{},J({},r,[t[r],e[r]]))}),{}),y=l.reduce((function(n,r){return M(M({},n),{},J({},r,{from:t[r],velocity:0,to:e[r]}))}),{}),b=-1,m=function(){return null};return m=n.isStepper?function(r){f||(f=r);var i=(r-f)/n.dt;y=W(n,y,i),o(M(M(M({},t),e),j((function(t,e){return e.from}),y))),f=r,Object.values(y).filter(q).length&&(b=c()(m))}:function(i){s||(s=i);var a=(i-s)/r,u=j((function(t,e){return z.apply(void 0,N(e).concat([n(a)]))}),p);if(o(M(M(M({},t),e),u)),a<1)b=c()(m);else{var f=j((function(t,e){return z.apply(void 0,N(e).concat([n(1)]))}),p);o(M(M(M({},t),e),f))}},function(){return c()(m),function(){(0,u.cancel)(b)}}};function G(t){return(G="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function L(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function H(t){return function(t){if(Array.isArray(t))return K(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return K(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return K(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Q(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function V(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Q(Object(n),!0).forEach((function(e){X(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function X(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function tt(t,e){return(tt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function et(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=ot(t);if(e){var o=ot(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return nt(this,n)}}function nt(t,e){return!e||"object"!==G(e)&&"function"!==typeof e?rt(t):e}function rt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ot(t){return(ot=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var it=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&tt(t,e)}(u,t);var e,n,o,i=et(u);function u(t,e){var n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u);var r=(n=i.call(this,t,e)).props,o=r.isActive,a=r.attributeName,c=r.from,f=r.to,s=r.steps,l=r.children;if(n.handleStyleChange=n.handleStyleChange.bind(rt(n)),n.changeStyle=n.changeStyle.bind(rt(n)),!o)return n.state={style:{}},"function"===typeof l&&(n.state={style:f}),nt(n);if(s&&s.length)n.state={style:s[0].style};else if(c){if("function"===typeof l)return n.state={style:c},nt(n);n.state={style:a?X({},a,c):c}}else n.state={style:{}};return n}return e=u,(n=[{key:"componentDidMount",value:function(){var t=this.props,e=t.isActive,n=t.canBegin;this.mounted=!0,e&&n&&this.runAnimation(this.props)}},{key:"componentDidUpdate",value:function(t){var e=this.props,n=e.isActive,r=e.canBegin,o=e.attributeName,i=e.shouldReAnimate;if(r)if(n){if(!((0,a.deepEqual)(t.to,this.props.to)&&t.canBegin&&t.isActive)){var u=!t.canBegin||!t.isActive;this.manager&&this.manager.stop(),this.stopJSAnimation&&this.stopJSAnimation();var c=u||i?this.props.from:t.to;if(this.state&&this.state.style){var f={style:o?X({},o,c):c};(o&&this.state.style[o]!==c||!o&&this.state.style!==c)&&this.setState(f)}this.runAnimation(V(V({},this.props),{},{from:c,begin:0}))}}else{var s={style:o?X({},o,this.props.to):this.props.to};this.state&&this.state.style&&(o&&this.state.style[o]!==this.props.to||!o&&this.state.style!==this.props.to)&&this.setState(s)}}},{key:"componentWillUnmount",value:function(){this.mounted=!1,this.unSubscribe&&this.unSubscribe(),this.manager&&(this.manager.stop(),this.manager=null),this.stopJSAnimation&&this.stopJSAnimation()}},{key:"runJSAnimation",value:function(t){var e=this,n=t.from,r=t.to,o=t.duration,i=t.easing,a=t.begin,u=t.onAnimationEnd,c=t.onAnimationStart,f=Z(n,r,function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e[0];if("string"===typeof r)switch(r){case"ease":case"ease-in-out":case"ease-out":case"ease-in":case"linear":return I(r);case"spring":return x();default:if("cubic-bezier"===r.split("(")[0])return I(r)}return"function"===typeof r?r:null}(i),o,this.changeStyle);this.manager.start([c,a,function(){e.stopJSAnimation=f()},o,u])}},{key:"runStepAnimation",value:function(t){var e=this,n=t.steps,r=t.begin,o=t.onAnimationStart,i=n[0],a=i.style,u=i.duration,c=void 0===u?0:u;return this.manager.start([o].concat(H(n.reduce((function(t,r,o){if(0===o)return t;var i=r.duration,a=r.easing,u=void 0===a?"ease":a,c=r.style,f=r.properties,s=r.onAnimationEnd,l=o>0?n[o-1]:r,p=f||Object.keys(c);if("function"===typeof u||"spring"===u)return[].concat(H(t),[e.runJSAnimation.bind(e,{from:l.style,to:c,duration:i,easing:u}),i]);var y=A(p,i,u),b=V(V(V({},l.style),c),{},{transition:y});return[].concat(H(t),[b,i,s]).filter(g)}),[a,Math.max(c,r)])),[t.onAnimationEnd]))}},{key:"runAnimation",value:function(t){this.manager||(this.manager=y());var e=t.begin,n=t.duration,r=t.attributeName,o=t.to,i=t.easing,a=t.onAnimationStart,u=t.onAnimationEnd,c=t.steps,f=t.children,s=this.manager;if(this.unSubscribe=s.subscribe(this.handleStyleChange),"function"!==typeof i&&"function"!==typeof f&&"spring"!==i)if(c.length>1)this.runStepAnimation(t);else{var l=r?X({},r,o):o,p=A(Object.keys(l),n,i);s.start([a,e,V(V({},l),{},{transition:p}),n,u])}else this.runJSAnimation(t)}},{key:"handleStyleChange",value:function(t){this.changeStyle(t)}},{key:"changeStyle",value:function(t){this.mounted&&this.setState({style:t})}},{key:"render",value:function(){var t=this.props,e=t.children,n=(t.begin,t.duration,t.attributeName,t.easing,t.isActive),o=(t.steps,t.from,t.to,t.canBegin,t.onAnimationEnd,t.shouldReAnimate,t.onAnimationReStart,L(t,["children","begin","duration","attributeName","easing","isActive","steps","from","to","canBegin","onAnimationEnd","shouldReAnimate","onAnimationReStart"])),i=r.Children.count(e),a=S(this.state.style);if("function"===typeof e)return e(a);if(!n||0===i)return e;var u=function(t){var e=t.props,n=e.style,i=void 0===n?{}:n,u=e.className;return(0,r.cloneElement)(t,V(V({},o),{},{style:V(V({},i),a),className:u}))};return 1===i?u(r.Children.only(e)):r.createElement("div",null,r.Children.map(e,(function(t){return u(t)})))}}])&&Y(e.prototype,n),o&&Y(e,o),u}(r.PureComponent);it.displayName="Animate",it.propTypes={from:i().oneOfType([i().object,i().string]),to:i().oneOfType([i().object,i().string]),attributeName:i().string,duration:i().number,begin:i().number,easing:i().oneOfType([i().string,i().func]),steps:i().arrayOf(i().shape({duration:i().number.isRequired,style:i().object.isRequired,easing:i().oneOfType([i().oneOf(["ease","ease-in","ease-out","ease-in-out","linear"]),i().func]),properties:i().arrayOf("string"),onAnimationEnd:i().func})),children:i().oneOfType([i().node,i().func]),isActive:i().bool,canBegin:i().bool,onAnimationEnd:i().func,shouldReAnimate:i().bool,onAnimationStart:i().func,onAnimationReStart:i().func},it.defaultProps={begin:0,duration:1e3,from:"",to:"",attributeName:"",easing:"ease",isActive:!0,canBegin:!0,steps:[],onAnimationEnd:function(){},onAnimationStart:function(){}};var at=it,ut=n(4317);function ct(t){return(ct="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ft(){return(ft=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function st(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function lt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function pt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?lt(Object(n),!0).forEach((function(e){yt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):lt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function yt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function bt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function mt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ht(t,e){return(ht=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function vt(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Ot(t);if(e){var o=Ot(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return dt(this,n)}}function dt(t,e){return!e||"object"!==ct(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Ot(t){return(Ot=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}void 0===Number.isFinite&&(Number.isFinite=function(t){return"number"===typeof t&&isFinite(t)});var gt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.steps,n=t.duration;return e&&e.length?e.reduce((function(t,e){return t+(Number.isFinite(e.duration)&&e.duration>0?e.duration:0)}),0):Number.isFinite(n)?n:0},jt=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ht(t,e)}(a,t);var e,n,o,i=vt(a);function a(){var t;bt(this,a);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(t=i.call.apply(i,[this].concat(n))).state={isActive:!1},t.handleEnter=function(e,n){var r=t.props,o=r.appearOptions,i=r.enterOptions;t.handleStyleActive(n?o:i)},t.handleExit=function(){t.handleStyleActive(t.props.leaveOptions)},t}return e=a,(n=[{key:"handleStyleActive",value:function(t){if(t){var e=t.onAnimationEnd?function(){t.onAnimationEnd()}:null;this.setState(pt(pt({},t),{},{onAnimationEnd:e,isActive:!0}))}}},{key:"parseTimeout",value:function(){var t=this.props,e=t.appearOptions,n=t.enterOptions,r=t.leaveOptions;return gt(e)+gt(n)+gt(r)}},{key:"render",value:function(){var t=this,e=this.props,n=e.children,o=(e.appearOptions,e.enterOptions,e.leaveOptions,st(e,["children","appearOptions","enterOptions","leaveOptions"]));return r.createElement(ut.Transition,ft({},o,{onEnter:this.handleEnter,onExit:this.handleExit,timeout:this.parseTimeout()}),(function(){return r.createElement(at,t.state,r.Children.only(n))}))}}])&&mt(e.prototype,n),o&&mt(e,o),a}(r.Component);jt.propTypes={appearOptions:i().object,enterOptions:i().object,leaveOptions:i().object,children:i().element};var St=jt;function At(t){var e=t.component,n=t.children,o=t.appear,i=t.enter,a=t.leave;return r.createElement(ut.TransitionGroup,{component:e},r.Children.map(n,(function(t,e){return r.createElement(St,{appearOptions:o,enterOptions:i,leaveOptions:a,key:"child-".concat(e)},t)})))}At.propTypes={appear:i().object,enter:i().object,leave:i().object,children:i().oneOfType([i().array,i().element]),component:i().any},At.defaultProps={component:"span"};var wt=at}}]);