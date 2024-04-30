"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-scroll-up";
exports.ids = ["vendor-chunks/react-scroll-up"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-scroll-up/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-scroll-up/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("/**\n * @author  Milos Janda\n * @licence MIT\n */\n\n\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"(ssr)/./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _tweenFunctions = __webpack_require__(/*! tween-functions */ \"(ssr)/./node_modules/tween-functions/index.js\");\n\nvar _tweenFunctions2 = _interopRequireDefault(_tweenFunctions);\n\nvar _detectPassiveEvents = __webpack_require__(/*! detect-passive-events */ \"(ssr)/./node_modules/detect-passive-events/dist/detect-passive-events.esm.js\");\n\nvar _objectAssign = __webpack_require__(/*! object-assign */ \"(ssr)/./node_modules/object-assign/index.js\");\n\nvar _objectAssign2 = _interopRequireDefault(_objectAssign);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ScrollUp = function (_React$Component) {\n    _inherits(ScrollUp, _React$Component);\n\n    function ScrollUp(props) {\n        _classCallCheck(this, ScrollUp);\n\n        // set default state\n        var _this = _possibleConstructorReturn(this, (ScrollUp.__proto__ || Object.getPrototypeOf(ScrollUp)).call(this, props));\n\n        _this.state = { show: false };\n\n        // default property `data`\n        _this.data = {\n            startValue: 0,\n            currentTime: 0, // store current time of animation\n            startTime: null,\n            rafId: null\n        };\n\n        // bind\n        _this.handleClick = _this.handleClick.bind(_this);\n        _this.handleScroll = _this.handleScroll.bind(_this);\n        _this.scrollStep = _this.scrollStep.bind(_this);\n        _this.stopScrolling = _this.stopScrolling.bind(_this);\n        return _this;\n    }\n\n    _createClass(ScrollUp, [{\n        key: 'shouldComponentUpdate',\n        value: function shouldComponentUpdate(nextProps, nextState) {\n            return nextState.show !== this.state.show;\n        }\n    }, {\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.handleScroll(); // initialize state\n\n            // Add all listeners which can start scroll\n            window.addEventListener('scroll', this.handleScroll);\n            window.addEventListener(\"wheel\", this.stopScrolling, _detectPassiveEvents.supportsPassiveEvents ? { passive: true } : false);\n            window.addEventListener(\"touchstart\", this.stopScrolling, _detectPassiveEvents.supportsPassiveEvents ? { passive: true } : false);\n        }\n    }, {\n        key: 'componentWillUnmount',\n        value: function componentWillUnmount() {\n            // Remove all listeners which was registered\n            window.removeEventListener('scroll', this.handleScroll);\n            window.removeEventListener(\"wheel\", this.stopScrolling, false);\n            window.removeEventListener(\"touchstart\", this.stopScrolling, false);\n        }\n\n        /**\n         * call onShow callback if passed valid props\n         */\n\n    }, {\n        key: 'notifyOnShow',\n        value: function notifyOnShow() {\n            if (this.props.onShow && typeof this.props.onShow === \"function\") {\n                this.props.onShow();\n            }\n        }\n\n        /**\n         * call onHide callback if passed valid props\n         */\n\n    }, {\n        key: 'notifyOnHide',\n        value: function notifyOnHide() {\n            if (this.props.onHide && typeof this.props.onHide === \"function\") {\n                this.props.onHide();\n            }\n        }\n\n        /**\n         * Evaluate show/hide this component, depend on new position\n         */\n\n    }, {\n        key: 'handleScroll',\n        value: function handleScroll() {\n            if (window.pageYOffset > this.props.showUnder) {\n                if (!this.state.show) {\n                    this.setState({ show: true });\n                    this.notifyOnShow();\n                }\n            } else {\n                if (this.state.show) {\n                    this.setState({ show: false });\n                    this.notifyOnHide();\n                }\n            }\n        }\n\n        /**\n         * Handle click on the button\n         */\n\n    }, {\n        key: 'handleClick',\n        value: function handleClick() {\n            this.stopScrolling();\n            this.data.startValue = window.pageYOffset;\n            this.data.currentTime = 0;\n            this.data.startTime = null;\n            this.data.rafId = window.requestAnimationFrame(this.scrollStep);\n        }\n\n        /**\n         * Calculate new position\n         * and scroll screen to new position or stop scrolling\n         * @param timestamp\n         */\n\n    }, {\n        key: 'scrollStep',\n        value: function scrollStep(timestamp) {\n            if (!this.data.startTime) {\n                this.data.startTime = timestamp;\n            }\n\n            this.data.currentTime = timestamp - this.data.startTime;\n\n            var position = _tweenFunctions2.default[this.props.easing](this.data.currentTime, this.data.startValue, this.props.topPosition, this.props.duration);\n\n            if (window.pageYOffset <= this.props.topPosition) {\n                this.stopScrolling();\n            } else {\n                window.scrollTo(window.pageYOffset, position);\n                this.data.rafId = window.requestAnimationFrame(this.scrollStep);\n            }\n        }\n\n        /**\n         * Stop Animation Frame\n         */\n\n    }, {\n        key: 'stopScrolling',\n        value: function stopScrolling() {\n            window.cancelAnimationFrame(this.data.rafId);\n        }\n\n        /**\n         * Render component\n         */\n\n    }, {\n        key: 'render',\n        value: function render() {\n\n            var propStyle = this.props.style;\n            var element = _react2.default.createElement(\n                'div',\n                { style: propStyle, onClick: this.handleClick },\n                this.props.children\n            );\n\n            var style = (0, _objectAssign2.default)({}, ScrollUp.defaultProps.style);\n            style = (0, _objectAssign2.default)(style, propStyle);\n            style.opacity = this.state.show ? 1 : 0;\n            style.visibility = this.state.show ? 'visible' : 'hidden';\n            style.transitionProperty = 'opacity, visibility';\n\n            return _react2.default.cloneElement(element, { style: style });\n        }\n    }]);\n\n    return ScrollUp;\n}(_react2.default.Component);\n\n// Set default props\n\n\nexports[\"default\"] = ScrollUp;\nScrollUp.defaultProps = {\n    duration: 250,\n    easing: 'easeOutCubic',\n    style: {\n        position: 'fixed',\n        bottom: 50,\n        right: 30,\n        cursor: 'pointer',\n        transitionDuration: '0.2s',\n        transitionTimingFunction: 'linear',\n        transitionDelay: '0s'\n    },\n    topPosition: 0\n};\n\n// Set validation property types\nScrollUp.propTypes = {\n    topPosition: _propTypes2.default.number,\n    showUnder: _propTypes2.default.number.isRequired, // show button under this position,\n    easing: _propTypes2.default.oneOf(['linear', 'easeInQuad', 'easeOutQuad', 'easeInOutQuad', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic', 'easeInQuart', 'easeOutQuart', 'easeInOutQuart', 'easeInQuint', 'easeOutQuint', 'easeInOutQuint', 'easeInSine', 'easeOutSine', 'easeInOutSine', 'easeInExpo', 'easeOutExpo', 'easeInOutExpo', 'easeInCirc', 'easeOutCirc', 'easeInOutCirc', 'easeInElastic', 'easeOutElastic', 'easeInOutElastic', 'easeInBack', 'easeOutBack', 'easeInOutBack', 'easeInBounce', 'easeOutBounce', 'easeInOutBounce']),\n    duration: _propTypes2.default.number, // seconds\n    style: _propTypes2.default.object,\n    onShow: _propTypes2.default.func,\n    onHide: _propTypes2.default.func\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2Nyb2xsLXVwL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQzs7QUFFRixpQ0FBaUMsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsK0RBQStELHlEQUF5RCxxRUFBcUUsNkRBQTZELHdCQUF3Qjs7QUFFampCLGFBQWEsbUJBQU8sQ0FBQyx3R0FBTzs7QUFFNUI7O0FBRUEsaUJBQWlCLG1CQUFPLENBQUMsNERBQVk7O0FBRXJDOztBQUVBLHNCQUFzQixtQkFBTyxDQUFDLHNFQUFpQjs7QUFFL0M7O0FBRUEsMkJBQTJCLG1CQUFPLENBQUMsMkdBQXVCOztBQUUxRCxvQkFBb0IsbUJBQU8sQ0FBQyxrRUFBZTs7QUFFM0M7O0FBRUEsdUNBQXVDLHVDQUF1Qzs7QUFFOUUsa0RBQWtELDBDQUEwQzs7QUFFNUYsa0RBQWtELGFBQWEseUZBQXlGOztBQUV4SiwyQ0FBMkMsK0RBQStELHVHQUF1Ryx5RUFBeUUsZUFBZSwwRUFBMEUsR0FBRzs7QUFFdFg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQSxnSEFBZ0gsZ0JBQWdCO0FBQ2hJLHFIQUFxSCxnQkFBZ0I7QUFDckk7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxZQUFZO0FBQ2hEO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxvQ0FBb0MsYUFBYTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw2Q0FBNkM7QUFDL0Q7QUFDQTs7QUFFQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkRBQTJELGNBQWM7QUFDekU7QUFDQSxLQUFLOztBQUVMO0FBQ0EsQ0FBQzs7QUFFRDs7O0FBR0Esa0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2Nyb2xsLXVwL2luZGV4LmpzP2I2MWUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yICBNaWxvcyBKYW5kYVxuICogQGxpY2VuY2UgTUlUXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfdHdlZW5GdW5jdGlvbnMgPSByZXF1aXJlKCd0d2Vlbi1mdW5jdGlvbnMnKTtcblxudmFyIF90d2VlbkZ1bmN0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90d2VlbkZ1bmN0aW9ucyk7XG5cbnZhciBfZGV0ZWN0UGFzc2l2ZUV2ZW50cyA9IHJlcXVpcmUoJ2RldGVjdC1wYXNzaXZlLWV2ZW50cycpO1xuXG52YXIgX29iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIF9vYmplY3RBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0QXNzaWduKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgU2Nyb2xsVXAgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhTY3JvbGxVcCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBTY3JvbGxVcChwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2Nyb2xsVXApO1xuXG4gICAgICAgIC8vIHNldCBkZWZhdWx0IHN0YXRlXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTY3JvbGxVcC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNjcm9sbFVwKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLnN0YXRlID0geyBzaG93OiBmYWxzZSB9O1xuXG4gICAgICAgIC8vIGRlZmF1bHQgcHJvcGVydHkgYGRhdGFgXG4gICAgICAgIF90aGlzLmRhdGEgPSB7XG4gICAgICAgICAgICBzdGFydFZhbHVlOiAwLFxuICAgICAgICAgICAgY3VycmVudFRpbWU6IDAsIC8vIHN0b3JlIGN1cnJlbnQgdGltZSBvZiBhbmltYXRpb25cbiAgICAgICAgICAgIHN0YXJ0VGltZTogbnVsbCxcbiAgICAgICAgICAgIHJhZklkOiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gYmluZFxuICAgICAgICBfdGhpcy5oYW5kbGVDbGljayA9IF90aGlzLmhhbmRsZUNsaWNrLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5oYW5kbGVTY3JvbGwgPSBfdGhpcy5oYW5kbGVTY3JvbGwuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLnNjcm9sbFN0ZXAgPSBfdGhpcy5zY3JvbGxTdGVwLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5zdG9wU2Nyb2xsaW5nID0gX3RoaXMuc3RvcFNjcm9sbGluZy5iaW5kKF90aGlzKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhTY3JvbGxVcCwgW3tcbiAgICAgICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5leHRTdGF0ZS5zaG93ICE9PSB0aGlzLnN0YXRlLnNob3c7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwoKTsgLy8gaW5pdGlhbGl6ZSBzdGF0ZVxuXG4gICAgICAgICAgICAvLyBBZGQgYWxsIGxpc3RlbmVycyB3aGljaCBjYW4gc3RhcnQgc2Nyb2xsXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCB0aGlzLnN0b3BTY3JvbGxpbmcsIF9kZXRlY3RQYXNzaXZlRXZlbnRzLnN1cHBvcnRzUGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2UpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuc3RvcFNjcm9sbGluZywgX2RldGVjdFBhc3NpdmVFdmVudHMuc3VwcG9ydHNQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiB0cnVlIH0gOiBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIGFsbCBsaXN0ZW5lcnMgd2hpY2ggd2FzIHJlZ2lzdGVyZWRcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIHRoaXMuc3RvcFNjcm9sbGluZywgZmFsc2UpO1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuc3RvcFNjcm9sbGluZywgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGNhbGwgb25TaG93IGNhbGxiYWNrIGlmIHBhc3NlZCB2YWxpZCBwcm9wc1xuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbm90aWZ5T25TaG93JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG5vdGlmeU9uU2hvdygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uU2hvdyAmJiB0eXBlb2YgdGhpcy5wcm9wcy5vblNob3cgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25TaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogY2FsbCBvbkhpZGUgY2FsbGJhY2sgaWYgcGFzc2VkIHZhbGlkIHByb3BzXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdub3RpZnlPbkhpZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbm90aWZ5T25IaWRlKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25IaWRlICYmIHR5cGVvZiB0aGlzLnByb3BzLm9uSGlkZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFdmFsdWF0ZSBzaG93L2hpZGUgdGhpcyBjb21wb25lbnQsIGRlcGVuZCBvbiBuZXcgcG9zaXRpb25cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZVNjcm9sbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVTY3JvbGwoKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gdGhpcy5wcm9wcy5zaG93VW5kZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUuc2hvdykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlPblNob3coKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3c6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeU9uSGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIYW5kbGUgY2xpY2sgb24gdGhlIGJ1dHRvblxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlQ2xpY2snLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zdGFydFZhbHVlID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICAgICAgdGhpcy5kYXRhLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zdGFydFRpbWUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5kYXRhLnJhZklkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnNjcm9sbFN0ZXApO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGN1bGF0ZSBuZXcgcG9zaXRpb25cbiAgICAgICAgICogYW5kIHNjcm9sbCBzY3JlZW4gdG8gbmV3IHBvc2l0aW9uIG9yIHN0b3Agc2Nyb2xsaW5nXG4gICAgICAgICAqIEBwYXJhbSB0aW1lc3RhbXBcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Njcm9sbFN0ZXAnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2Nyb2xsU3RlcCh0aW1lc3RhbXApIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLnN0YXJ0VGltZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5zdGFydFRpbWUgPSB0aW1lc3RhbXA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZGF0YS5jdXJyZW50VGltZSA9IHRpbWVzdGFtcCAtIHRoaXMuZGF0YS5zdGFydFRpbWU7XG5cbiAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IF90d2VlbkZ1bmN0aW9uczIuZGVmYXVsdFt0aGlzLnByb3BzLmVhc2luZ10odGhpcy5kYXRhLmN1cnJlbnRUaW1lLCB0aGlzLmRhdGEuc3RhcnRWYWx1ZSwgdGhpcy5wcm9wcy50b3BQb3NpdGlvbiwgdGhpcy5wcm9wcy5kdXJhdGlvbik7XG5cbiAgICAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPD0gdGhpcy5wcm9wcy50b3BQb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8od2luZG93LnBhZ2VZT2Zmc2V0LCBwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLnJhZklkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnNjcm9sbFN0ZXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0b3AgQW5pbWF0aW9uIEZyYW1lXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzdG9wU2Nyb2xsaW5nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3BTY3JvbGxpbmcoKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5kYXRhLnJhZklkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW5kZXIgY29tcG9uZW50XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXG4gICAgICAgICAgICB2YXIgcHJvcFN0eWxlID0gdGhpcy5wcm9wcy5zdHlsZTtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBzdHlsZTogcHJvcFN0eWxlLCBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrIH0sXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdmFyIHN0eWxlID0gKDAsIF9vYmplY3RBc3NpZ24yLmRlZmF1bHQpKHt9LCBTY3JvbGxVcC5kZWZhdWx0UHJvcHMuc3R5bGUpO1xuICAgICAgICAgICAgc3R5bGUgPSAoMCwgX29iamVjdEFzc2lnbjIuZGVmYXVsdCkoc3R5bGUsIHByb3BTdHlsZSk7XG4gICAgICAgICAgICBzdHlsZS5vcGFjaXR5ID0gdGhpcy5zdGF0ZS5zaG93ID8gMSA6IDA7XG4gICAgICAgICAgICBzdHlsZS52aXNpYmlsaXR5ID0gdGhpcy5zdGF0ZS5zaG93ID8gJ3Zpc2libGUnIDogJ2hpZGRlbic7XG4gICAgICAgICAgICBzdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSAnb3BhY2l0eSwgdmlzaWJpbGl0eSc7XG5cbiAgICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGVsZW1lbnQsIHsgc3R5bGU6IHN0eWxlIH0pO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFNjcm9sbFVwO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuLy8gU2V0IGRlZmF1bHQgcHJvcHNcblxuXG5leHBvcnRzLmRlZmF1bHQgPSBTY3JvbGxVcDtcblNjcm9sbFVwLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBkdXJhdGlvbjogMjUwLFxuICAgIGVhc2luZzogJ2Vhc2VPdXRDdWJpYycsXG4gICAgc3R5bGU6IHtcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgIGJvdHRvbTogNTAsXG4gICAgICAgIHJpZ2h0OiAzMCxcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogJzAuMnMnLFxuICAgICAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246ICdsaW5lYXInLFxuICAgICAgICB0cmFuc2l0aW9uRGVsYXk6ICcwcydcbiAgICB9LFxuICAgIHRvcFBvc2l0aW9uOiAwXG59O1xuXG4vLyBTZXQgdmFsaWRhdGlvbiBwcm9wZXJ0eSB0eXBlc1xuU2Nyb2xsVXAucHJvcFR5cGVzID0ge1xuICAgIHRvcFBvc2l0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgICBzaG93VW5kZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLmlzUmVxdWlyZWQsIC8vIHNob3cgYnV0dG9uIHVuZGVyIHRoaXMgcG9zaXRpb24sXG4gICAgZWFzaW5nOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKFsnbGluZWFyJywgJ2Vhc2VJblF1YWQnLCAnZWFzZU91dFF1YWQnLCAnZWFzZUluT3V0UXVhZCcsICdlYXNlSW5DdWJpYycsICdlYXNlT3V0Q3ViaWMnLCAnZWFzZUluT3V0Q3ViaWMnLCAnZWFzZUluUXVhcnQnLCAnZWFzZU91dFF1YXJ0JywgJ2Vhc2VJbk91dFF1YXJ0JywgJ2Vhc2VJblF1aW50JywgJ2Vhc2VPdXRRdWludCcsICdlYXNlSW5PdXRRdWludCcsICdlYXNlSW5TaW5lJywgJ2Vhc2VPdXRTaW5lJywgJ2Vhc2VJbk91dFNpbmUnLCAnZWFzZUluRXhwbycsICdlYXNlT3V0RXhwbycsICdlYXNlSW5PdXRFeHBvJywgJ2Vhc2VJbkNpcmMnLCAnZWFzZU91dENpcmMnLCAnZWFzZUluT3V0Q2lyYycsICdlYXNlSW5FbGFzdGljJywgJ2Vhc2VPdXRFbGFzdGljJywgJ2Vhc2VJbk91dEVsYXN0aWMnLCAnZWFzZUluQmFjaycsICdlYXNlT3V0QmFjaycsICdlYXNlSW5PdXRCYWNrJywgJ2Vhc2VJbkJvdW5jZScsICdlYXNlT3V0Qm91bmNlJywgJ2Vhc2VJbk91dEJvdW5jZSddKSxcbiAgICBkdXJhdGlvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsIC8vIHNlY29uZHNcbiAgICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gICAgb25TaG93OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgb25IaWRlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmNcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-scroll-up/index.js\n");

/***/ })

};
;