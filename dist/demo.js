/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Time Component Demo for tingle
	 * @author shane.wuq
	 *
	 * Copyright 2014-2015, Tingle Team, Alinw.
	 * All rights reserved.
	 */
	'use strict';
	
	window.FaskClick && FastClick.attach(document.body);
	var Demo = __webpack_require__(1);
	React.render(React.createElement(Demo, null), document.getElementById('TingleDemo'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Time Component Demo for tingle
	 * @author shane.wuq
	 *
	 * Copyright 2014-2015, Tingle Team, Alinw.
	 * All rights reserved.
	 */
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var classnames = __webpack_require__(2);
	
	var Time = __webpack_require__(3);
	
	var Demo = (function (_React$Component) {
	    _inherits(Demo, _React$Component);
	
	    function Demo(props) {
	        _classCallCheck(this, Demo);
	
	        _get(Object.getPrototypeOf(Demo.prototype), 'constructor', this).call(this, props);
	        this.state = {};
	    }
	
	    //1422683666000
	    //Tue Oct 27 2015 16:50:17 GMT+0800 (CST
	
	    _createClass(Demo, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(Time, { stamp: '1446009194366', before: true }),
	                React.createElement(Time, { stamp: '1422683666000', format: 'YYYY-MM-DD' }),
	                React.createElement(Time, { stamp: '1445958112957', format: 'YYYY-MM-DD  hh:mm:ss' })
	            );
	        }
	    }]);
	
	    return Demo;
	})(React.Component);
	
	;
	
	module.exports = Demo;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = '';
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}
	
			return classes.substr(1);
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Time Component Style for tingle
	 * @author shane.wuq
	 *
	 * Copyright 2014-2015, Tingle Team, Alinw.
	 * All rights reserved.
	 */
	
	'use strict';
	
	module.exports = __webpack_require__(4);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Time Component for tingle
	 * @author shane.wuq
	 * Copyright 2014-2015, Tingle Team, Alinw.
	 * All rights reserved.
	 */
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var classnames = __webpack_require__(2);
	
	var Time = (function (_React$Component) {
	    _inherits(Time, _React$Component);
	
	    function Time(props) {
	        _classCallCheck(this, Time);
	
	        _get(Object.getPrototypeOf(Time.prototype), 'constructor', this).call(this, props);
	        this.state = {
	            before: props.before,
	            format: props.format,
	            displayTime: ''
	        };
	    }
	
	    _createClass(Time, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var t = this;
	            t._formatFn(t.state.before);
	        }
	    }, {
	        key: '_formatFn',
	        value: function _formatFn(isBefore) {
	            var _this = this;
	
	            var t = this;
	            var s = 1000;
	            var m = s * 60;
	            var h = m * 60;
	            var d = h * 24;
	            var mm = d * 30;
	
	            var displayTime = undefined;
	            var format = t.props.format.toLocaleUpperCase();
	            var time = new Date(parseInt(this.props.stamp, 10));
	
	            // 年,月,日,时,分,秒
	            var year = time.getFullYear();
	            var month = time.getMonth() + 1;
	            var day = time.getDate();
	            var hour = time.getHours();
	            var minute = time.getMinutes();
	            var second = time.getSeconds();
	
	            // 年月日分隔符
	            var yc = '-';
	            var mc = '-';
	            var dc = '-';
	
	            if (isBefore) {
	                (function () {
	                    /**
	                     * 1天前
	                     * 1小时前
	                     * 1分钟前
	                     */
	                    // 当前时间
	                    var nowTime = new Date().valueOf();
	
	                    // 与当前时间差
	                    var rangeTime = nowTime - _this.props.stamp;
	
	                    var arr = new Map([['分钟', m], ['小时', h], ['天', d], ['个月', mm]]);
	
	                    arr.forEach(function (value, key) {
	                        // FIXME: 中午12:00相对于昨天23:00，也回走'1小时前’的逻辑,因为一天(24小时)没到；
	                        rangeTime / value >= 1 ? displayTime = '1' + key + '前' : '';
	                    });
	                })();
	            } else {
	                /**
	                 * 默认格式:YYYY—MM-DD
	                 * 支持格式如下:
	                 * YYYY/MM/DD; YYYY年MM月DD日; YYYY-MM-DD hh:mm:ss
	                 * 支持简写 eg: YY-M-D 15-1-9
	                 */
	                if (/(Y+)/.test(format)) {
	                    var reg$ = RegExp.$1.length;
	                    if (reg$ === 2) {
	                        year = String(year).slice(2, 4);
	                    }
	                    yc = format.substr(reg$, 1);
	                }
	                if (/(M+)/.test(format)) {
	                    var reg$ = RegExp.$1.length;
	                    if (reg$ === 2 && month < 10) month = '0' + month;
	                    mc = format.substr(format.indexOf('M') + reg$, 1);
	                }
	                if (/(D+)/.test(format)) {
	                    var reg$ = RegExp.$1.length;
	                    if (reg$ === 2 && day < 10) day = '0' + day;
	                    dc = format.substr(format.indexOf('D') + reg$, 1);
	                }
	
	                displayTime = '' + year + yc + month + mc + day + dc;
	
	                if (format.indexOf('HH:MM:SS') > -1) {
	                    minute = minute < 10 ? '0' + minute : minute;
	                    second = second < 10 ? '0' + second : second;
	                    displayTime += ' ' + hour + ':' + minute + ':' + second;
	                }
	            }
	
	            t.setState({
	                displayTime: displayTime
	            });
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick() {
	            var t = this;
	
	            t._formatFn(!t.state.before);
	            t.setState({
	                before: !t.state.before
	            });
	        }
	    }, {
	        key: 'handleMouseOver',
	        value: function handleMouseOver() {}
	    }, {
	        key: 'handleMouseOut',
	        value: function handleMouseOut() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var t = this;
	            return React.createElement(
	                'div',
	                { ref: 'root', className: classnames('tTime', _defineProperty({}, t.props.className, !!t.props.className)), onClick: t.handleClick.bind(t) },
	                t.state.displayTime
	            );
	        }
	    }]);
	
	    return Time;
	})(React.Component);
	
	Time.defaultProps = {
	    before: false,
	    format: 'YYYY-MM-DD'
	};
	
	Time.propTypes = {
	    before: React.PropTypes.boolean,
	    format: React.PropTypes.string
	};
	
	Time.displayName = 'Time';
	
	module.exports = Time;

/***/ }
/******/ ]);
//# sourceMappingURL=demo.js.map