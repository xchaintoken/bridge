"use strict";function _interopRequireDefault(o){return o&&o.__esModule?o:{default:o}}function _objectWithoutProperties(o,n){var r={};for(var t in o)n.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(o,t)&&(r[t]=o[t]);return r}function make(o,n){var r=n.left,t=n.right,e=n.up,a=n.down,p=n.top,i=n.bottom,s=n.mirror,l=n.opposite,u=(r?1:0)|(t?2:0)|(p||a?4:0)|(i||e?8:0)|(s?16:0)|(l?32:0)|(o?64:0);if(lookup.hasOwnProperty(u))return lookup[u];if(!s!=!(o&&l)){var d=[t,r,i,p,a,e];r=d[0],t=d[1],p=d[2],i=d[3],e=d[4],a=d[5]}var f=r||t,c=p||i||e||a,m=f||c,y=void 0,v=void 0,_=void 0,b=void 0,x=void 0,T=void 0,g=void 0,h=void 0,k=void 0,w=void 0,q=void 0,O=void 0,P=void 0,j=void 0;return o?(b=f?(t?"-":"")+"20px":0,x=c?(e||i?"":"-")+"10px":"0",T=(a||p?"":"-")+"20px",P=f?(r?"-":"")+"2000px":"0",j=c?(a||p?"-":"")+"2000px":"0"):(v=f?(r?"-":"")+"3000px":"0",_=c?(a||p?"-":"")+"3000px":"0",g=f?(t?"-":"")+"25px":"0",h=c?(e||i?"-":"")+"25px":"0",k=f?(r?"-":"")+"10px":"0",w=c?(a||p?"-":"")+"10px":"0",q=f?(t?"-":"")+"5px":"0",O=c?(e||i?"-":"")+"5px":"0"),y=m?o?"\n        20% {\n          transform: translate3d("+b+", "+x+", 0);\n          }\n        "+(c?"40%, 45% {\n            opacity: 1;\n            transform: translate3d(0, "+T+", 0);\n          }":"")+"\n          to {\n            opacity: 0;\n            transform: translate3d("+P+", "+j+", 0);\n        }\n      ":"from, 60%, 75%, 90%, to {\n        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n      }\n      from {\n        opacity: 0;\n        transform: translate3d("+v+", "+_+", 0);\n      }\n      60% {\n        opacity: 1;\n        transform: translate3d("+g+", "+h+", 0);\n      }\n      75% {\n        transform: translate3d("+k+", "+w+", 0);\n      }\n      90% {\n        transform: translate3d("+q+", "+O+", 0);\n      }\n      to {\n        transform: none;\n      }":o?"20% {\n          transform: scale3d(.9, .9, .9);\n        }\n        50%, 55% {\n          opacity: 1;\n          transform: scale3d(1.1, 1.1, 1.1);\n        }\n        to {\n          opacity: 0;\n          transform: scale3d(.3, .3, .3);\n      }":"from, 20%, 40%, 60%, 80%, to {\n        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n      }\n      0% {\n        opacity: 0;\n        transform: scale3d(.3, .3, .3);\n      }\n      20% {\n        transform: scale3d(1.1, 1.1, 1.1);\n      }\n      40% {\n        transform: scale3d(.9, .9, .9);\n      }\n      60% {\n        opacity: 1;\n        transform: scale3d(1.03, 1.03, 1.03);\n      }\n      80% {\n        transform: scale3d(.97, .97, .97);\n      }\n      to {\n        opacity: 1;\n        transform: scale3d(1, 1, 1);\n      }",lookup[u]=(0,_globals.animation)(y),lookup[u]}function Bounce(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_globals.defaults,n=o.children,r=(o.out,o.forever),t=o.timeout,e=o.duration,a=void 0===e?_globals.defaults.duration:e,p=o.delay,i=void 0===p?_globals.defaults.delay:p,s=o.count,l=void 0===s?_globals.defaults.count:s,u=_objectWithoutProperties(o,["children","out","forever","timeout","duration","delay","count"]),d={make:make,duration:void 0===t?a:t,delay:i,forever:r,count:l,style:{animationFillMode:"both"},reverse:u.left};return(0,_wrap2.default)(u,d,d,n)}Object.defineProperty(exports,"__esModule",{value:!0});var _propTypes=require("prop-types"),_wrap=require("./wrap"),_wrap2=_interopRequireDefault(_wrap),_globals=require("./globals"),propTypes={out:_propTypes.bool,left:_propTypes.bool,right:_propTypes.bool,top:_propTypes.bool,bottom:_propTypes.bool,mirror:_propTypes.bool,opposite:_propTypes.bool,duration:_propTypes.number,timeout:_propTypes.number,delay:_propTypes.number,count:_propTypes.number,forever:_propTypes.bool},lookup={};Bounce.propTypes=propTypes,exports.default=Bounce,module.exports=exports.default;