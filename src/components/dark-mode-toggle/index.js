"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactLottiePlayer=_interopRequireDefault(require("react-lottie-player"));var _parseUnit3=_interopRequireDefault(require("parse-unit"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap;_getRequireWildcardCache=function _getRequireWildcardCache(){return cache};return cache}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{default:obj}}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj)}return newObj}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}function _iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}var animationData=require("./animationData.json");var NightModeToggle=function NightModeToggle(_ref){var size=_ref.size,checked=_ref.checked,onChange=_ref.onChange,speed=_ref.speed,className=_ref.className;var _parseUnit=(0,_parseUnit3["default"])(size),_parseUnit2=_slicedToArray(_parseUnit,2),sizeValue=_parseUnit2[0],sizeUnit=_parseUnit2[1];var _useState=(0,_react.useState)(false),_useState2=_slicedToArray(_useState,2),isReadyToAnimate=_useState2[0],setReadyToAnimate=_useState2[1];var segmentsToPlay=checked?[2,50]:[51,96];var segmentToGoTo=checked?51:2;return _react["default"].createElement("button",{onClick:function onClick(){setReadyToAnimate(true);onChange(!checked)},style:{cursor:"pointer",overflow:"hidden",width:"".concat(sizeValue).concat(sizeUnit||"px"),height:"".concat(sizeValue*.47).concat(sizeUnit||"px"),appearance:"none",MozAppearance:"none",WebkitAppearance:"none",border:"none",backgroundColor:"transparent",padding:0},"aria-hidden":"true","tabIndex":"-1",className:className},_react["default"].createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"".concat(sizeValue*-.575).concat(sizeUnit||"px"),marginLeft:"".concat(sizeValue*-.32).concat(sizeUnit||"px"),width:"".concat(sizeValue*1.65).concat(sizeUnit||"px"),height:"".concat(sizeValue*1.65).concat(sizeUnit||"px")}},_react["default"].createElement(_reactLottiePlayer["default"],{key:"$preventGlitches",play:isReadyToAnimate,speed:speed,animationData:animationData,loop:false,segments:segmentsToPlay,goTo:segmentToGoTo})))};NightModeToggle.propTypes={size:_propTypes["default"].oneOfType([_propTypes["default"].number,_propTypes["default"].string]),checked:_propTypes["default"].bool,onChange:_propTypes["default"].func,speed:_propTypes["default"].number,className:_propTypes["default"].string};NightModeToggle.defaultProps={size:85,checked:false,onChange:function onChange(nextValue){return null},speed:1.3,className:null};var propsAreEqual=function propsAreEqual(prevProps,nextProps){return prevProps.size===nextProps.size&&prevProps.checked===nextProps.checked&&prevProps.speed===nextProps.speed&&prevProps.className===nextProps.className};var _default=(0,_react.memo)(NightModeToggle,propsAreEqual);exports["default"]=_default;