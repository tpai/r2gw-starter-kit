(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{117:function(e,t,n){"use strict";n.r(t);var r=n(25),o=n(59),a=n(80),i=n(2),u=n.n(i),c=n(0),l=n.n(c),f=n(39);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,b(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,i["PureComponent"]),n=t,(r=[{key:"render",value:function(){var e=this.props.data;return u.a.createElement("div",{className:"ts breadcrumb"},e.map(function(t,n){var r=n===e.length-1;return u.a.createElement("div",{key:"crumb".concat(n),className:"section ".concat(r?"active":"")},t.link?u.a.createElement(f.Link,{to:t.link},t.text):t.text,!r&&u.a.createElement("i",{className:"right angle icon divider"}))}))}}])&&p(n.prototype,r),o&&p(n,o),t}();d(h,"propTypes",{data:l.a.arrayOf(l.a.shape({link:l.a.string,text:l.a.string}))}),d(h,"defaultProps",{data:[]});var v=n(260);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),w(this,j(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,i["PureComponent"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.id,n=e.title,r=e.author,o=e.body;return u.a.createElement("div",null,t&&u.a.createElement("div",{className:"ts card text container"},u.a.createElement("div",{className:"image"},u.a.createElement(v.a,{url:"https://picsum.photos/1200/720?image=".concat(t),placeholder:"https://picsum.photos/60/36?image=".concat(t)})),u.a.createElement("div",{className:"content"},u.a.createElement("div",{className:"header"},n),u.a.createElement("div",{className:"bulleted meta"},"".concat(r.name||""," (").concat(r.email||"",")")),u.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:o}}))))}}])&&O(n.prototype,r),o&&O(n,o),t}();E(_,"propTypes",{id:l.a.number,title:l.a.string,author:l.a.shape({name:l.a.string,email:l.a.string}),body:l.a.string}),E(_,"defaultProps",{id:null,title:"",author:{name:"",email:""},body:""});var S=n(256);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var I=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),T(this,C(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(t,i["PureComponent"]),n=t,(r=[{key:"componentDidMount",value:function(){var e=this.props,t=e.id;(0,e.getPost)(t)}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.post,r=e.state;return u.a.createElement("div",null,"loading"===r&&u.a.createElement(S.a,null),u.a.createElement("div",{className:"ts text container"},u.a.createElement(h,{data:[{text:"Post List",link:"/"},{text:n.title}]}),u.a.createElement("div",{className:"ts divider"}),"idle"===r&&u.a.createElement(_,x({id:t},n))))}}])&&N(n.prototype,r),o&&N(n,o),t}();R(I,"propTypes",{id:l.a.number,post:l.a.object,state:l.a.oneOf(["loading","idle","failure"]),getPost:l.a.func}),R(I,"defaultProps",{id:null,post:{},state:"idle",getPost:function(){}});var L=I;t.default=Object(o.connect)(function(e,t){return{id:parseInt(t.match.params.id,10),post:e.post,state:e.state}},function(e){return Object(r.bindActionCreators)({getPost:a.b},e)})(L)},256:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(2),o=n.n(r);function a(){return o.a.createElement("div",{className:"ts active inverted dimmer"},o.a.createElement("div",{className:"ts text loader"},"Loading..."))}},258:function(e,t,n){e.exports={placeholder:"elements-placeholder-23ee2b",noBlur:"elements-noBlur-46c462"}},259:function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}void 0!==e&&e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},260:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var r=n(2),o=n.n(r),a=n(0),i=n.n(a),u=n(259),c=n.n(u),l=n(258),f=n.n(l);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=y(t).call(this),d(m(m(n=!o||"object"!==s(o)&&"function"!=typeof o?m(r):o)),"handleImageOnload",function(e){n.setState({url:e,noBlur:!0})}),n.state={url:e.placeholder,noBlur:!1},n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r["PureComponent"]),n=t,(a=[{key:"render",value:function(){var e,t=this,n=this.state,r=n.url,a=n.noBlur,i=this.props.url;return o.a.createElement("div",null,o.a.createElement("img",{ref:function(e){return t.component=e},style:{backgroundImage:"url('".concat(r,"')")},className:c()((e={},d(e,f.a.placeholder,!0),d(e,f.a.noBlur,a),e))}),o.a.createElement("img",{src:i,onLoad:function(){return setTimeout(function(){return t.handleImageOnload(i)},500)},style:{display:"none"}}))}}])&&p(n.prototype,a),i&&p(n,i),t}();d(h,"propTypes",{url:i.a.string.isRequired,placeholder:i.a.string.isRequired}),d(h,"defaultProps",{url:"",placeholder:""})}}]);