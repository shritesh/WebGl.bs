parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"rBqF":[function(require,module,exports) {
"use strict";function r(r,n,t){for(var a=new Array(t),e=0,o=n;e<t;)a[e]=r[o],e=e+1|0,o=o+1|0;return a}function n(r,n){for(;;){var t=n,a=r;if(!t)return a;n=t.tl,r=t.hd.length+a|0}}function t(r,n,t){for(;;){var a=t,e=n;if(!a)return;for(var o=a.hd,u=o.length,f=e,_=0;_<u;)r[f]=o[_],f=f+1|0,_=_+1|0;t=a.tl,n=f}}function a(r){var a=n(0,r),e=new Array(a);return t(e,0,r),e}function e(r,n,t){if(n<0||n>=r.length)throw{RE_EXN_ID:"Invalid_argument",_1:"index out of bounds",Error:new Error};r[n]=t}function o(r,n){if(n<0||n>=r.length)throw{RE_EXN_ID:"Invalid_argument",_1:"index out of bounds",Error:new Error};return r[n]}function u(r,n){for(var t=new Array(r),a=0;a<r;++a)t[a]=n;return t}function f(r){for(var n=new Array(r),t=0;t<r;++t)n[t]=0;return n}function _(r,n,t,a,e){if(a<=n)for(var o=0;o<e;++o)t[o+a|0]=r[o+n|0];else for(var u=e-1|0;u>=0;--u)t[u+a|0]=r[u+n|0]}function c(r){return r.slice(0)}exports.caml_array_dup=c,exports.caml_array_sub=r,exports.caml_array_concat=a,exports.caml_make_vect=u,exports.caml_make_float_vect=f,exports.caml_array_blit=_,exports.caml_array_get=o,exports.caml_array_set=e;
},{}],"Zxig":[function(require,module,exports) {
"use strict";var r=require("./caml_array.js");function n(e,t){for(;;){var u=t,c=e,a=c.length,s=0===a?1:a,i=s-u.length|0;if(0===i)return c.apply(null,u);if(i>=0)return function(r,e){return function(t){return n(r,e.concat([t]))}}(c,u);t=r.caml_array_sub(u,s,0|-i),e=c.apply(null,r.caml_array_sub(u,0,s))}}function e(r,e){var t=r.length;if(1===t)return r(e);switch(t){case 1:return r(e);case 2:return function(n){return r(e,n)};case 3:return function(n,t){return r(e,n,t)};case 4:return function(n,t,u){return r(e,n,t,u)};case 5:return function(n,t,u,c){return r(e,n,t,u,c)};case 6:return function(n,t,u,c,a){return r(e,n,t,u,c,a)};case 7:return function(n,t,u,c,a,s){return r(e,n,t,u,c,a,s)};default:return n(r,[e])}}function t(r){return 1===r.length?r:function(n){return e(r,n)}}function u(r,e,t){var u=r.length;if(2===u)return r(e,t);switch(u){case 1:return n(r(e),[t]);case 2:return r(e,t);case 3:return function(n){return r(e,t,n)};case 4:return function(n,u){return r(e,t,n,u)};case 5:return function(n,u,c){return r(e,t,n,u,c)};case 6:return function(n,u,c,a){return r(e,t,n,u,c,a)};case 7:return function(n,u,c,a,s){return r(e,t,n,u,c,a,s)};default:return n(r,[e,t])}}function c(r){return 2===r.length?r:function(n,e){return u(r,n,e)}}function a(r,e,t,u){var c=r.length;if(3===c)return r(e,t,u);switch(c){case 1:return n(r(e),[t,u]);case 2:return n(r(e,t),[u]);case 3:return r(e,t,u);case 4:return function(n){return r(e,t,u,n)};case 5:return function(n,c){return r(e,t,u,n,c)};case 6:return function(n,c,a){return r(e,t,u,n,c,a)};case 7:return function(n,c,a,s){return r(e,t,u,n,c,a,s)};default:return n(r,[e,t,u])}}function s(r){return 3===r.length?r:function(n,e,t){return a(r,n,e,t)}}function i(r,e,t,u,c){var a=r.length;if(4===a)return r(e,t,u,c);switch(a){case 1:return n(r(e),[t,u,c]);case 2:return n(r(e,t),[u,c]);case 3:return n(r(e,t,u),[c]);case 4:return r(e,t,u,c);case 5:return function(n){return r(e,t,u,c,n)};case 6:return function(n,a){return r(e,t,u,c,n,a)};case 7:return function(n,a,s){return r(e,t,u,c,n,a,s)};default:return n(r,[e,t,u,c])}}function f(r){return 4===r.length?r:function(n,e,t,u){return i(r,n,e,t,u)}}function o(r,e,t,u,c,a){var s=r.length;if(5===s)return r(e,t,u,c,a);switch(s){case 1:return n(r(e),[t,u,c,a]);case 2:return n(r(e,t),[u,c,a]);case 3:return n(r(e,t,u),[c,a]);case 4:return n(r(e,t,u,c),[a]);case 5:return r(e,t,u,c,a);case 6:return function(n){return r(e,t,u,c,a,n)};case 7:return function(n,s){return r(e,t,u,c,a,n,s)};default:return n(r,[e,t,u,c,a])}}function l(r){return 5===r.length?r:function(n,e,t,u,c){return o(r,n,e,t,u,c)}}function _(r,e,t,u,c,a,s){var i=r.length;if(6===i)return r(e,t,u,c,a,s);switch(i){case 1:return n(r(e),[t,u,c,a,s]);case 2:return n(r(e,t),[u,c,a,s]);case 3:return n(r(e,t,u),[c,a,s]);case 4:return n(r(e,t,u,c),[a,s]);case 5:return n(r(e,t,u,c,a),[s]);case 6:return r(e,t,u,c,a,s);case 7:return function(n){return r(e,t,u,c,a,s,n)};default:return n(r,[e,t,u,c,a,s])}}function h(r){return 6===r.length?r:function(n,e,t,u,c,a){return _(r,n,e,t,u,c,a)}}function p(r,e,t,u,c,a,s,i){var f=r.length;if(7===f)return r(e,t,u,c,a,s,i);switch(f){case 1:return n(r(e),[t,u,c,a,s,i]);case 2:return n(r(e,t),[u,c,a,s,i]);case 3:return n(r(e,t,u),[c,a,s,i]);case 4:return n(r(e,t,u,c),[a,s,i]);case 5:return n(r(e,t,u,c,a),[s,i]);case 6:return n(r(e,t,u,c,a,s),[i]);case 7:return r(e,t,u,c,a,s,i);default:return n(r,[e,t,u,c,a,s,i])}}function g(r){return 7===r.length?r:function(n,e,t,u,c,a,s){return p(r,n,e,t,u,c,a,s)}}function x(r,e,t,u,c,a,s,i,f){var o=r.length;if(8===o)return r(e,t,u,c,a,s,i,f);switch(o){case 1:return n(r(e),[t,u,c,a,s,i,f]);case 2:return n(r(e,t),[u,c,a,s,i,f]);case 3:return n(r(e,t,u),[c,a,s,i,f]);case 4:return n(r(e,t,u,c),[a,s,i,f]);case 5:return n(r(e,t,u,c,a),[s,i,f]);case 6:return n(r(e,t,u,c,a,s),[i,f]);case 7:return n(r(e,t,u,c,a,s,i),[f]);default:return n(r,[e,t,u,c,a,s,i,f])}}function v(r){return 8===r.length?r:function(n,e,t,u,c,a,s,i){return x(r,n,e,t,u,c,a,s,i)}}exports.app=n,exports._1=e,exports.__1=t,exports._2=u,exports.__2=c,exports._3=a,exports.__3=s,exports._4=i,exports.__4=f,exports._5=o,exports.__5=l,exports._6=_,exports.__6=h,exports._7=p,exports.__7=g,exports._8=x,exports.__8=v;
},{"./caml_array.js":"rBqF"}],"DdCv":[function(require,module,exports) {
"use strict";function r(r,t){return r===t}var t=2147483647,e=-2147483648;exports.equal=r,exports.max=t,exports.min=e;
},{}],"jRlH":[function(require,module,exports) {
"use strict";var r=require("./js_int.js");function t(r){return Math.ceil(r)}function n(t){return t>r.max?r.max:t<r.min?r.min:Math.ceil(t)}function o(r){return Math.floor(r)}function e(t){return t>r.max?r.max:t<r.min?r.min:Math.floor(t)}function i(r,t){return e(Math.random()*(t-r|0))+r|0}var a=n,u=e;exports.unsafe_ceil=t,exports.ceil_int=n,exports.ceil=a,exports.unsafe_floor=o,exports.floor_int=e,exports.floor=u,exports.random_int=i;
},{"./js_int.js":"DdCv"}],"e2Or":[function(require,module,exports) {
"use strict";function o(o){return void 0!==o.BS_PRIVATE_NESTED_SOME_NONE}function E(o){return void 0===o?{BS_PRIVATE_NESTED_SOME_NONE:0}:null!==o&&void 0!==o.BS_PRIVATE_NESTED_SOME_NONE?{BS_PRIVATE_NESTED_SOME_NONE:o.BS_PRIVATE_NESTED_SOME_NONE+1|0}:o}function _(o){return null==o?void 0:E(o)}function t(o){return void 0===o?void 0:E(o)}function n(o){return null===o?void 0:E(o)}function r(o){if(null===o||void 0===o.BS_PRIVATE_NESTED_SOME_NONE)return o;var E=o.BS_PRIVATE_NESTED_SOME_NONE;return 0===E?void 0:{BS_PRIVATE_NESTED_SOME_NONE:E-1|0}}function i(o){return void 0===o?void 0:r(o)}function u(o){return void 0!==o?o.VAL:o}exports.nullable_to_opt=_,exports.undefined_to_opt=t,exports.null_to_opt=n,exports.valFromOption=r,exports.some=E,exports.isNested=o,exports.option_get=i,exports.option_unwrap=u;
},{}],"QCFr":[function(require,module,exports) {
"use strict";function t(t,n){return t<n?-1:t===n?0:1}function n(t,n){return t?n?0:1:n?-1:0}function r(t,n){return t===n?0:t<n?-1:t>n||t==t?1:n==n?-1:0}function e(t,n){return t===n?0:t<n?-1:1}function o(t,n,r,e,o){for(;;){var a=r;if(a>=e)return o;var c=t[a],i=n[a];if(c>i)return 1;if(c<i)return-1;r=a+1|0}}function a(t,n){var r=t.length,e=n.length;return r===e?o(t,n,0,r,0):r<e?o(t,n,0,r,-1):o(t,n,0,e,1)}function c(t,n){var r=t.length;if(r!==n.length)return!1;for(var e=0;;){var o=e;if(o===r)return!0;if(t[o]!==n[o])return!1;e=o+1|0}}function i(t,n){return t?n:t}function u(t,n){return t<n?t:n}function _(t,n){return t<n?t:n}function m(t,n){return t<n?t:n}function l(t,n){return t<n?t:n}function f(t,n){return t<n?t:n}function p(t,n){return t||n}function s(t,n){return t>n?t:n}function x(t,n){return t>n?t:n}function v(t,n){return t>n?t:n}function g(t,n){return t>n?t:n}function b(t,n){return t>n?t:n}var h=t,y=t;exports.caml_bytes_compare=a,exports.caml_bytes_equal=c,exports.caml_int_compare=t,exports.caml_bool_compare=n,exports.caml_float_compare=r,exports.caml_nativeint_compare=h,exports.caml_string_compare=e,exports.caml_int32_compare=y,exports.caml_bool_min=i,exports.caml_int_min=u,exports.caml_float_min=_,exports.caml_string_min=m,exports.caml_nativeint_min=l,exports.caml_int32_min=f,exports.caml_bool_max=p,exports.caml_int_max=s,exports.caml_float_max=x,exports.caml_string_max=v,exports.caml_nativeint_max=g,exports.caml_int32_max=b;
},{}],"wJn3":[function(require,module,exports) {
"use strict";var r=require("./curry.js"),e=require("./js_math.js"),n=require("./caml_option.js"),t=require("./caml_primitive.js");function o(r,e){if(e>=0&&e<r.length)return n.some(r[e])}function u(r,e){if(!(e>=0&&e<r.length))throw new Error('File "belt_Array.ml", line 25, characters 6-12');return r[e]}function f(r,e,n){return e>=0&&e<r.length&&(r[e]=n,!0)}function i(r,e,n){if(!(e>=0&&e<r.length))throw new Error('File "belt_Array.ml", line 31, characters 4-10');r[e]=n}function a(r,e,n){var t=r[e];r[e]=r[n],r[n]=t}function c(r){for(var n=r.length,t=0;t<n;++t)a(r,t,e.random_int(t,n))}function s(r){var e=r.slice(0);return c(e),e}function p(r){for(var e=r.length,n=0,t=e/2|0;n<t;++n)a(r,0+n|0,((0+e|0)-n|0)-1|0)}function l(r){for(var e=r.length,n=new Array(e),t=0;t<e;++t)n[t]=r[(e-1|0)-t|0];return n}function x(r,e){if(r<=0)return[];for(var n=new Array(r),t=0;t<r;++t)n[t]=e;return n}function v(r,e){if(r<=0)return[];for(var n=new Array(r),t=0;t<r;++t)n[t]=e(t);return n}function h(e,n){return v(e,r.__1(n))}function _(r,e){var n=v(r,e);return c(n),n}function g(e,n){return _(e,r.__1(n))}function m(r,e){var n=e-r|0;if(n<0)return[];for(var t=new Array(n+1|0),o=0;o<=n;++o)t[o]=r+o|0;return t}function y(r,e,n){var t=e-r|0;if(t<0||n<=0)return[];for(var o=1+(t/n|0)|0,u=new Array(o),f=r,i=0;i<o;++i)u[i]=f,f=f+n|0;return u}function d(r,e){for(var n=r.length,t=e.length,o=n<t?n:t,u=new Array(o),f=0;f<o;++f)u[f]=[r[f],e[f]];return u}function w(r,e,n){for(var t=r.length,o=e.length,u=t<o?t:o,f=new Array(u),i=0;i<u;++i)f[i]=n(r[i],e[i]);return f}function A(e,n,t){return w(e,n,r.__2(t))}function U(r,e){for(var n=r.length,t=e.length,o=new Array(n+t|0),u=0;u<n;++u)o[u]=r[u];for(var f=0;f<t;++f)o[n+f|0]=e[f];return o}function I(r){for(var e=r.length,n=0,t=0;t<e;++t)n=n+r[t].length|0;var o=new Array(n);n=0;for(var u=0;u<e;++u)for(var f=r[u],i=0,a=f.length;i<a;++i)o[n]=f[i],n=n+1|0;return o}function k(r,e,n){if(n<=0)return[];var o=r.length,u=e<0?t.caml_int_max(o+e|0,0):e,f=o-u|0,i=f<n?f:n;if(i<=0)return[];for(var a=new Array(i),c=0;c<i;++c)a[c]=r[u+c|0];return a}function B(r,e){for(var n=r.length,o=e<0?t.caml_int_max(n+e|0,0):e,u=n-o|0,f=new Array(u),i=0;i<u;++i)f[i]=r[o+i|0];return f}function E(r,e,n,o){if(!(n<=0)){var u=r.length,f=e<0?t.caml_int_max(u+e|0,0):e,i=u-f|0,a=i<n?i:n;if(!(a<=0))for(var c=f,s=f+a|0;c<s;++c)r[c]=o}}function W(r,e,n,t,o){if(t<=e)for(var u=0;u<o;++u)n[u+t|0]=r[u+e|0];else for(var f=o-1|0;f>=0;--f)n[f+t|0]=r[f+e|0]}function q(r,e,n,o,u){var f=r.length,i=n.length,a=e<0?t.caml_int_max(f+e|0,0):e,c=o<0?t.caml_int_max(i+o|0,0):o,s=t.caml_int_min(u,t.caml_int_min(f-a|0,i-c|0));if(c<=a)for(var p=0;p<s;++p)n[p+c|0]=r[p+a|0];else for(var l=s-1|0;l>=0;--l)n[l+c|0]=r[l+a|0]}function j(r,e){for(var n=0,t=r.length;n<t;++n)e(r[n])}function b(e,n){return j(e,r.__1(n))}function z(r,e){for(var n=r.length,t=new Array(n),o=0;o<n;++o)t[o]=e(r[o]);return t}function R(e,n){return z(e,r.__1(n))}function F(r,e){for(var t,o=r.length,u=0;void 0===t&&u<o;){var f=r[u];e(f)&&(t=n.some(f)),u=u+1|0}return t}function M(e,n){return F(e,r.__1(n))}function P(r,e){for(var n,t=r.length,o=0;void 0===n&&o<t;){e(r[o])&&(n=o),o=o+1|0}return n}function S(e,n){return P(e,r.__1(n))}function O(r,e){for(var n=r.length,t=new Array(n),o=0,u=0;u<n;++u){var f=r[u];e(f)&&(t[o]=f,o=o+1|0)}return t.length=o,t}function T(e,n){return O(e,r.__1(n))}function C(r,e){for(var n=r.length,t=new Array(n),o=0,u=0;u<n;++u){var f=r[u];e(f,u)&&(t[o]=f,o=o+1|0)}return t.length=o,t}function D(e,n){return C(e,r.__2(n))}function G(r,e){for(var t=r.length,o=new Array(t),u=0,f=0;f<t;++f){var i=e(r[f]);void 0!==i&&(o[u]=n.valFromOption(i),u=u+1|0)}return o.length=u,o}function H(e,n){return G(e,r.__1(n))}function J(r,e){for(var n=0,t=r.length;n<t;++n)e(n,r[n])}function K(e,n){return J(e,r.__2(n))}function L(r,e){for(var n=r.length,t=new Array(n),o=0;o<n;++o)t[o]=e(o,r[o]);return t}function N(e,n){return L(e,r.__2(n))}function Q(r,e,n){for(var t=e,o=0,u=r.length;o<u;++o)t=n(t,r[o]);return t}function V(e,n,t){return Q(e,n,r.__2(t))}function X(r,e,n){for(var t=e,o=r.length-1|0;o>=0;--o)t=n(t,r[o]);return t}function Y(e,n,t){return X(e,n,r.__2(t))}function Z(r,e,n,o){for(var u=n,f=t.caml_int_min(r.length,e.length)-1|0;f>=0;--f)u=o(u,r[f],e[f]);return u}function $(e,n,t,o){return Z(e,n,t,r.__3(o))}function rr(r,e,n){for(var t=e,o=0,u=r.length;o<u;++o)t=n(t,r[o],o);return t}function er(e,n,t){return rr(e,n,r.__3(t))}function nr(r,e){for(var n=r.length,t=0;;){var o=t;if(o===n)return!0;if(!e(r[o]))return!1;t=o+1|0}}function tr(e,n){return nr(e,r.__1(n))}function or(r,e){for(var n=r.length,t=0;;){var o=t;if(o===n)return!1;if(e(r[o]))return!0;t=o+1|0}}function ur(e,n){return or(e,r.__1(n))}function fr(r,e,n,t,o){for(;;){var u=n;if(u===o)return!0;if(!t(r[u],e[u]))return!1;n=u+1|0}}function ir(r,e,n){return fr(r,e,0,n,t.caml_int_min(r.length,e.length))}function ar(e,n,t){return ir(e,n,r.__2(t))}function cr(r,e,n){for(var o=0,u=t.caml_int_min(r.length,e.length);;){var f=o;if(f===u)return!1;if(n(r[f],e[f]))return!0;o=f+1|0}}function sr(e,n,t){return cr(e,n,r.__2(t))}function pr(r,e,n){var t=r.length;return t===e.length&&fr(r,e,0,n,t)}function lr(e,n,t){return pr(e,n,r.__2(t))}function xr(r,e,n){var t=r.length,o=e.length;if(t>o)return 1;if(t<o)return-1;for(var u=0;;){var f=u;if(f===t)return 0;var i=n(r[f],e[f]);if(0!==i)return i;u=f+1|0}}function vr(e,n,t){return xr(e,n,r.__2(t))}function hr(r,e){for(var n=r.length,t=0,o=0,u=new Array(n),f=new Array(n),i=0;i<n;++i){var a=r[i];e(a)?(u[t]=a,t=t+1|0):(f[o]=a,o=o+1|0)}return u.length=t,f.length=o,[u,f]}function _r(e,n){return hr(e,r.__1(n))}function gr(r){for(var e=r.length,n=new Array(e),t=new Array(e),o=0;o<e;++o){var u=r[o];n[o]=u[0],t[o]=u[1]}return[n,t]}exports.get=o,exports.getExn=u,exports.set=f,exports.setExn=i,exports.shuffleInPlace=c,exports.shuffle=s,exports.reverseInPlace=p,exports.reverse=l,exports.make=x,exports.range=m,exports.rangeBy=y,exports.makeByU=v,exports.makeBy=h,exports.makeByAndShuffleU=_,exports.makeByAndShuffle=g,exports.zip=d,exports.zipByU=w,exports.zipBy=A,exports.unzip=gr,exports.concat=U,exports.concatMany=I,exports.slice=k,exports.sliceToEnd=B,exports.fill=E,exports.blit=q,exports.blitUnsafe=W,exports.forEachU=j,exports.forEach=b,exports.mapU=z,exports.map=R,exports.getByU=F,exports.getBy=M,exports.getIndexByU=P,exports.getIndexBy=S,exports.keepU=O,exports.keep=T,exports.keepWithIndexU=C,exports.keepWithIndex=D,exports.keepMapU=G,exports.keepMap=H,exports.forEachWithIndexU=J,exports.forEachWithIndex=K,exports.mapWithIndexU=L,exports.mapWithIndex=N,exports.partitionU=hr,exports.partition=_r,exports.reduceU=Q,exports.reduce=V,exports.reduceReverseU=X,exports.reduceReverse=Y,exports.reduceReverse2U=Z,exports.reduceReverse2=$,exports.reduceWithIndexU=rr,exports.reduceWithIndex=er,exports.someU=or,exports.some=ur,exports.everyU=nr,exports.every=tr,exports.every2U=ir,exports.every2=ar,exports.some2U=cr,exports.some2=sr,exports.cmpU=xr,exports.cmp=vr,exports.eqU=pr,exports.eq=lr;
},{"./curry.js":"Zxig","./js_math.js":"jRlH","./caml_option.js":"e2Or","./caml_primitive.js":"QCFr"}],"jyYa":[function(require,module,exports) {
"use strict";var r=require("bs-platform/lib/js/belt_Array.js");function t(r,t){return[r[0]+t[0],r[1]+t[1]]}function e(r,t){return[r[0]*t,r[1]*t]}function n(r,n,o){return t(e(r,o),e(n,1-o))}function o(t){var e=new Float32Array(t.length<<1);return r.forEachWithIndex(t,function(r,t){e[r<<1]=t[0],e[1+(r<<1)|0]=t[1]}),e.buffer}var s=8;exports.size=s,exports.add=t,exports.scale=e,exports.mix=n,exports.flatten=o;
},{"bs-platform/lib/js/belt_Array.js":"wJn3"}],"kx9t":[function(require,module,exports) {
"use strict";var t=require("bs-platform/lib/js/belt_Array.js");function r(t,r){return[t[0]+r[0],t[1]+r[1],t[2]+r[2]]}function e(t,r){return[t[0]*r,t[1]*r,t[2]*r]}function n(t,n,u){return r(e(t,u),e(n,1-u))}function u(r){var e=new Float32Array(Math.imul(3,r.length));return t.forEachWithIndex(r,function(t,r){e[Math.imul(t,3)]=r[0],e[1+Math.imul(3,t)|0]=r[1],e[2+Math.imul(3,t)|0]=r[2]}),e.buffer}var a=12;exports.size=a,exports.add=r,exports.scale=e,exports.mix=n,exports.flatten=u;
},{"bs-platform/lib/js/belt_Array.js":"wJn3"}],"cnZ9":[function(require,module,exports) {
"use strict";var o=require("./curry.js"),t=require("./caml_option.js");function r(o,r){if(void 0!==o)return r(t.valFromOption(o))}function n(t,n){return r(t,o.__1(n))}function i(o){if(void 0!==o)return t.valFromOption(o);throw new Error("getExn")}function e(o,r,n){return void 0!==o?n(t.valFromOption(o)):r}function u(t,r,n){return e(t,r,o.__1(n))}function p(o,r){if(void 0!==o)return t.some(r(t.valFromOption(o)))}function f(t,r){return p(t,o.__1(r))}function a(o,r){if(void 0!==o)return r(t.valFromOption(o))}function v(t,r){return a(t,o.__1(r))}function c(o,r){return void 0!==o?t.valFromOption(o):r}function s(o){return void 0!==o}function m(o){return void 0===o}function x(o,r,n){return void 0!==o?void 0!==r&&n(t.valFromOption(o),t.valFromOption(r)):void 0===r}function l(t,r,n){return x(t,r,o.__2(n))}function d(o,r,n){return void 0!==o?void 0!==r?n(t.valFromOption(o),t.valFromOption(r)):1:void 0!==r?-1:0}function _(t,r,n){return d(t,r,o.__2(n))}exports.forEachU=r,exports.forEach=n,exports.getExn=i,exports.mapWithDefaultU=e,exports.mapWithDefault=u,exports.mapU=p,exports.map=f,exports.flatMapU=a,exports.flatMap=v,exports.getWithDefault=c,exports.isSome=s,exports.isNone=m,exports.eqU=x,exports.eq=l,exports.cmpU=d,exports.cmp=_;
},{"./curry.js":"Zxig","./caml_option.js":"e2Or"}],"i88R":[function(require,module,exports) {
"use strict";var r=require("bs-platform/lib/js/belt_Option.js"),e=require("bs-platform/lib/js/caml_option.js");function t(t,a,n){return r.flatMap(e.nullable_to_opt(t.createShader(function(){switch(a){case"VertexShader":return 35633;case"FragmentShader":return 35632}}())),function(r){if(t.shaderSource(r,n),t.compileShader(r),t.getShaderParameter(r,35713))return e.some(r)})}function a(r,e){return t(r,"VertexShader",e)}function n(r,e){return t(r,"FragmentShader",e)}function o(t,a,n){return r.flatMap(t.createProgram(),function(r){if(t.attachShader(r,a),t.attachShader(r,n),t.linkProgram(r),t.getProgramParameter(r,35714))return e.some(r)})}function i(r,e,t){var a=r.getAttribLocation(e,t);if(-1!==a)return a}exports.makeVertexShader=a,exports.makeFragmentShader=n,exports.makeProgram=o,exports.getAttribLocation=i;
},{"bs-platform/lib/js/belt_Option.js":"cnZ9","bs-platform/lib/js/caml_option.js":"e2Or"}],"p6qH":[function(require,module,exports) {
"use strict";var e=require("bs-platform/lib/js/belt_Array.js"),t=require("./Vec2.bs.js"),r=require("./Vec3.bs.js"),o=require("bs-platform/lib/js/belt_Option.js"),n=require("bs-platform/lib/js/caml_option.js"),a=require("./WebGl.bs.js"),i=o.getExn(n.nullable_to_opt(document.querySelector("canvas"))),s=o.getExn(n.nullable_to_opt(i.getContext("webgl"))),l=o.getExn(a.makeVertexShader(s,"\n        attribute vec4 vPosition;\n        attribute vec4 vColor;\n        varying vec4 fColor;\n\n        void main() {\n            gl_Position = vPosition;\n            gl_PointSize = 5.0;\n            fColor = vColor;\n        }\n        ")),f=o.getExn(a.makeFragmentShader(s,"\n        precision mediump float;\n\n        varying vec4 fColor;\n\n        void main() {\n            gl_FragColor = fColor;\n        }\n        ")),b=o.getExn(a.makeProgram(s,l,f));s.useProgram(b);var u=o.getExn(n.nullable_to_opt(s.createBuffer()));s.bindBuffer(34962,u),s.bufferData(34962,Math.imul(t.size,200),35044);var c=o.getExn(a.getAttribLocation(s,b,"vPosition"));s.vertexAttribPointer(c,2,5126,!1,0,0),s.enableVertexAttribArray(c);var v=o.getExn(n.nullable_to_opt(s.createBuffer()));s.bindBuffer(34962,v),s.bufferData(34962,Math.imul(r.size,200),35044);var g=o.getExn(a.getAttribLocation(s,b,"vColor"));s.vertexAttribPointer(g,3,5126,!1,0,0),s.enableVertexAttribArray(g);var x={contents:0};function m(e){s.clear(16384);var t=x.contents;switch(t){case 0:break;case 1:s.drawArrays(0,0,1);break;case 2:s.drawArrays(1,0,2);break;default:s.drawArrays(5,0,t)}window.requestAnimationFrame(m)}i.addEventListener("click",function(n){if(!(x.contents>=200)){var a=[2*n.offsetX/i.width-1,2*(i.height-n.offsetY)/i.height-1];s.bindBuffer(34962,u),s.bufferSubData(34962,Math.imul(t.size,x.contents),t.flatten([a]));var l=o.getExn(e.get([[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[0,1,1]],x.contents%7));s.bindBuffer(34962,v),s.bufferSubData(34962,Math.imul(r.size,x.contents),r.flatten([l])),x.contents=x.contents+1|0}}),s.viewport(0,0,i.width,i.height),s.clearColor(.5,.5,.5,1),m(void 0);var p=200;exports.canvas=i,exports.gl=s,exports.program=b,exports.maxPoints=p,exports.positionBuffer=u,exports.vPosition=c,exports.colorBuffer=v,exports.vColor=g,exports.numPoints=x,exports.render=m;
},{"bs-platform/lib/js/belt_Array.js":"wJn3","./Vec2.bs.js":"jyYa","./Vec3.bs.js":"kx9t","bs-platform/lib/js/belt_Option.js":"cnZ9","bs-platform/lib/js/caml_option.js":"e2Or","./WebGl.bs.js":"i88R"}]},{},["p6qH"], null)
//# sourceMappingURL=Triangles.bs.72599632.js.map