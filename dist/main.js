/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// based on http://codepen.io/dleatherman/pen/kAzgw\nvar canvas = document.querySelector('canvas'),\n    ctx = canvas.getContext('2d'),\n    color = 'black',\n    idle = null;\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\ncanvas.style.display = 'block';\ncanvas.style.margin = '0 auto';\nctx.fillStyle = color;\nctx.lineWidth = .1;\nctx.strokeStyle = color;\nvar mousePosition = {\n  x: 30 * canvas.width / 100,\n  y: 30 * canvas.height / 100\n},\n    dots = {\n  nb: canvas.width < 640 ? 35 : 150,\n  distance: 80,\n  d_radius: 150,\n  array: []\n};\n\nfunction Dot() {\n  this.x = Math.random() * canvas.width;\n  this.y = Math.random() * canvas.height;\n  this.vx = -.5 + Math.random();\n  this.vy = -.5 + Math.random();\n  this.radius = Math.random();\n}\n\nDot.prototype = {\n  create: function create() {\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);\n    ctx.fill();\n  },\n  animate: function animate() {\n    for (var i = 0, _dot = false; i < dots.nb; i++) {\n      _dot = dots.array[i];\n\n      if (_dot.y < 0 || _dot.y > canvas.height) {\n        _dot.vx = _dot.vx;\n        _dot.vy = -_dot.vy;\n      } else if (_dot.x < 0 || _dot.x > canvas.width) {\n        _dot.vx = -_dot.vx;\n        _dot.vy = _dot.vy;\n      }\n\n      _dot.x += _dot.vx;\n      _dot.y += _dot.vy;\n    }\n  },\n  line: function line() {\n    for (var i = 0; i < dots.nb; i++) {\n      for (var j = 0; j < dots.nb; j++) {\n        i_dot = dots.array[i];\n        j_dot = dots.array[j];\n\n        if (i_dot.x - j_dot.x < dots.distance && i_dot.y - j_dot.y < dots.distance && i_dot.x - j_dot.x > -dots.distance && i_dot.y - j_dot.y > -dots.distance) {\n          if (i_dot.x - mousePosition.x < dots.d_radius && i_dot.y - mousePosition.y < dots.d_radius && i_dot.x - mousePosition.x > -dots.d_radius && i_dot.y - mousePosition.y > -dots.d_radius) {\n            ctx.beginPath();\n            ctx.moveTo(i_dot.x, i_dot.y);\n            ctx.lineTo(j_dot.x, j_dot.y);\n            ctx.stroke();\n            ctx.closePath();\n          }\n        }\n      }\n    }\n  }\n};\n\nfunction createDots() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n\n  for (var i = 0; i < dots.nb; i++) {\n    dots.array.push(new Dot());\n    dot = dots.array[i];\n    dot.create();\n  }\n\n  dot.line();\n  dot.animate();\n}\n\nidle = setInterval(createDots, 1000 / 30);\ncanvas.addEventListener('mousemove', function (e) {\n  mousePosition.x = e.pageX;\n  mousePosition.y = e.pageY;\n});\ncanvas.addEventListener('mouseleave', function (e) {\n  mousePosition.x = canvas.width / 2;\n  mousePosition.y = canvas.height / 2;\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/js/index.js */\"./src/js/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/index.js?");

/***/ })

/******/ });