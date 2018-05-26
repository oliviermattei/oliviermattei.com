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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// based on http://codepen.io/dleatherman/pen/kAzgw\r\nlet canvas = document.querySelector('canvas'),\r\n\r\n    ctx = canvas.getContext('2d'),\r\n    color = 'black',\r\n    idle = null;\r\n\r\ncanvas.width = window.innerWidth;\r\ncanvas.height = window.innerHeight;\r\ncanvas.style.display = 'block';\r\ncanvas.style.margin = '0 auto';\r\n\r\nctx.fillStyle = color;\r\nctx.lineWidth = .1;\r\nctx.strokeStyle = color;\r\n\r\nlet mousePosition = {x: 30 * canvas.width / 100, y: 30 * canvas.height / 100},\r\n    dots = {nb: (canvas.width < 640 ? 35 : 150), distance: 80, d_radius: 150, array: []};\r\n\r\nfunction Dot() {\r\n    this.x = Math.random() * canvas.width;\r\n    this.y = Math.random() * canvas.height;\r\n\r\n    this.vx = -.5 + Math.random();\r\n    this.vy = -.5 + Math.random();\r\n\r\n    this.radius = Math.random();\r\n}\r\n\r\nDot.prototype = {\r\n    create: function () {\r\n        ctx.beginPath();\r\n        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);\r\n        ctx.fill();\r\n    },\r\n\r\n    animate: function () {\r\n\r\n        for (let i = 0, dot = false; i < dots.nb; i++) {\r\n\r\n            dot = dots.array[i];\r\n\r\n            if (dot.y < 0 || dot.y > canvas.height) {\r\n                dot.vx = dot.vx;\r\n                dot.vy = -dot.vy;\r\n            } else if (dot.x < 0 || dot.x > canvas.width) {\r\n                dot.vx = -dot.vx;\r\n                dot.vy = dot.vy;\r\n            }\r\n            dot.x += dot.vx;\r\n            dot.y += dot.vy;\r\n        }\r\n    },\r\n\r\n    line: function () {\r\n        for (let i = 0; i < dots.nb; i++) {\r\n            for (let j = 0; j < dots.nb; j++) {\r\n                i_dot = dots.array[i];\r\n                j_dot = dots.array[j];\r\n\r\n                if ((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > -dots.distance && (i_dot.y - j_dot.y) > -dots.distance) {\r\n                    if ((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > -dots.d_radius && (i_dot.y - mousePosition.y) > -dots.d_radius) {\r\n                        ctx.beginPath();\r\n                        ctx.moveTo(i_dot.x, i_dot.y);\r\n                        ctx.lineTo(j_dot.x, j_dot.y);\r\n                        ctx.stroke();\r\n                        ctx.closePath();\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n};\r\n\r\nfunction createDots() {\r\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\r\n    for (let i = 0; i < dots.nb; i++) {\r\n        dots.array.push(new Dot());\r\n        dot = dots.array[i];\r\n\r\n        dot.create();\r\n    }\r\n\r\n    dot.line();\r\n    dot.animate();\r\n}\r\n\r\nidle = setInterval(createDots, 1000 / 30);\r\n\r\ncanvas.addEventListener('mousemove', function (e) {\r\n    mousePosition.x = e.pageX;\r\n    mousePosition.y = e.pageY;\r\n\r\n});\r\ncanvas.addEventListener('mouseleave', function (e) {\r\n    mousePosition.x = canvas.width / 2;\r\n    mousePosition.y = canvas.height / 2;\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ });