webpackHotUpdate(0,{

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Calculator = function (_React$Component) {
	  _inherits(Calculator, _React$Component);

	  function Calculator(props) {
	    _classCallCheck(this, Calculator);

	    var _this = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this, props));

	    _this.state = { num1: "", num2: "", result: 0 };
	    _this.setNum1 = _this.setNum1.bind(_this);
	    _this.setNum2 = _this.setNum2.bind(_this);
	    _this.add = _this.add.bind(_this);
	    _this.subtract = _this.subtract.bind(_this);
	    _this.divide = _this.divide.bind(_this);
	    _this.multiply = _this.multiply.bind(_this);
	    _this.clear = _this.clear.bind(_this);
	    // your code here
	    return _this;
	  }

	  // your code here

	  _createClass(Calculator, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "h1",
	          null,
	          this.state.result
	        ),
	        _react2.default.createElement("input", { onChange: this.setNum1, value: this.state.num1 }),
	        _react2.default.createElement("input", { onChange: this.setNum2, value: this.state.num2 }),
	        _react2.default.createElement("br", null),
	        _react2.default.createElement(
	          "button",
	          { onClick: this.clear },
	          "Clear"
	        ),
	        _react2.default.createElement(
	          "button",
	          { onClick: this.add },
	          "Add"
	        ),
	        _react2.default.createElement(
	          "button",
	          { onClick: this.divide },
	          "Divide"
	        ),
	        _react2.default.createElement(
	          "button",
	          { onClick: this.multiply },
	          "Multiply"
	        ),
	        _react2.default.createElement(
	          "button",
	          { onClick: this.subtract },
	          "Subtract"
	        )
	      );
	    }
	  }, {
	    key: "clear",
	    value: function clear(e) {

	      this.setState({ num1: "" });
	      this.setState({ num2: "" });
	      this.setState({ result: 0 });
	    }
	  }, {
	    key: "setNum1",
	    value: function setNum1(e) {
	      var num1 = e.target.value ? parseInt(e.target.value) : "";
	      this.setState({ num1: num1 });
	    }
	  }, {
	    key: "setNum2",
	    value: function setNum2(e) {
	      var num2 = e.target.value ? parseInt(e.target.value) : "";
	      this.setState({ num2: num2 });
	    }
	  }, {
	    key: "add",
	    value: function add(e) {
	      var result = this.state.num1 + this.state.num2;
	      this.setState({ result: result });
	    }
	  }, {
	    key: "subtract",
	    value: function subtract(e) {
	      var result = this.state.num1 - this.state.num2;
	      this.setState({ result: result });
	    }
	  }, {
	    key: "divide",
	    value: function divide(e) {
	      var result = this.state.num1 / this.state.num2;
	      this.setState({ result: result });
	    }
	  }, {
	    key: "multiply",
	    value: function multiply(e) {
	      var result = this.state.num1 * this.state.num2;
	      this.setState({ result: result });
	    }
	  }]);

	  return Calculator;
	}(_react2.default.Component);

	exports.default = Calculator;

/***/ }

})