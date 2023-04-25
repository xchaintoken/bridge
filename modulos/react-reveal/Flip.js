"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _objectWithoutProperties(e,o){var t={};for(var r in e)o.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}function make(e,o){var t=o.left,r=o.right,n=o.top,p=o.bottom,i=o.x,a=o.y,s=o.mirror,l=o.opposite,u=(t?1:0)|(r||a?2:0)|(n||i?4:0)|(p?8:0)|(s?16:0)|(l?32:0)|(e?64:0);if(lookup.hasOwnProperty(u))return lookup[u];if(!s!=!(e&&l)){var d=[r,t,p,n,a,i];t=d[0],r=d[1],n=d[2],p=d[3],i=d[4],a=d[5]}var f=void 0;if(i||a||t||r||n||p){var m=i||n||p?(p?"-":"")+"1":"0",c=a||r||t?(t?"-":"")+"1":"0";f=e?"from {\n          transform: perspective(400px);\n        }\n        30% {\n          transform: perspective(400px) rotate3d("+m+", "+c+", 0, -15deg);\n          opacity: 1;\n        }\n        to {\n          transform: perspective(400px) rotate3d("+m+", "+c+", 0, 90deg);\n          opacity: 0;\n        }":"from {\n          transform: perspective(400px) rotate3d("+m+", "+c+", 0, 90deg);\n          animation-timing-function: ease-in;\n          opacity: 0;\n        }\n        40% {\n          transform: perspective(400px) rotate3d("+m+", "+c+", 0, -20deg);\n          animation-timing-function: ease-in;\n        }\n        60% {\n          transform: perspective(400px) rotate3d("+m+", "+c+", 0, 10deg);\n          opacity: 1;\n        }\n        80% {\n          transform: perspective(400px) rotate3d("+m+", "+c+", 0, -5deg);\n        }\n        to {\n          transform: perspective(400px);\n        }"}else f="from {\n          transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n          animation-timing-function: ease-out;\n          opacity: "+(e?"1":"0")+";\n        }\n        40% {\n          transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n          animation-timing-function: ease-out;\n        }\n        50% {\n          transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n          animation-timing-function: ease-in;\n        }\n        to {\n          transform: perspective(400px);\n          animation-timing-function: ease-in;\n          opacity: "+(e?"0":"1")+";\n        }";return lookup[u]=(0,_globals.animation)(f),lookup[u]}function Flip(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_globals.defaults,o=e.children,t=(e.out,e.forever),r=e.timeout,n=e.duration,p=void 0===n?_globals.defaults.duration:n,i=e.delay,a=void 0===i?_globals.defaults.delay:i,s=e.count,l=void 0===s?_globals.defaults.count:s,u=_objectWithoutProperties(e,["children","out","forever","timeout","duration","delay","count"]),d={make:make,duration:void 0===r?p:r,delay:a,forever:t,count:l,style:{animationFillMode:"both",backfaceVisibility:"visible"}};return(0,_wrap2.default)(u,d,d,o)}Object.defineProperty(exports,"__esModule",{value:!0});var _propTypes=require("prop-types"),_wrap=require("./wrap"),_wrap2=_interopRequireDefault(_wrap),_globals=require("./globals"),propTypes={out:_propTypes.bool,left:_propTypes.bool,right:_propTypes.bool,top:_propTypes.bool,bottom:_propTypes.bool,mirror:_propTypes.bool,opposite:_propTypes.bool,duration:_propTypes.number,timeout:_propTypes.number,delay:_propTypes.number,count:_propTypes.number,forever:_propTypes.bool},lookup={};Flip.propTypes=propTypes,exports.default=Flip,module.exports=exports.default;