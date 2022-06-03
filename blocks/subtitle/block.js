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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),

/***/ 13:
/***/ (function(module, exports) {

(function (blocks, element) {

    blocks.registerBlockType('alumnisgss-theme/block-subtitle', {
        // apiVersion: 2,
        title: "Sottotitolo",
        name: "alumnisgss-theme/block-subtitle",
        category: "theme",
        attributes: {
            text: {
                type: 'text',
                default: ''
            }
        },
        icon: "book",
        edit: function (props) {
            return wp.element.createElement(
                "div",
                { "class": "flex flex-col items-center w-full py-16" },
                wp.element.createElement(
                    "span",
                    { "class": "text-xl md:text-3xl font-bold w-5/6 md:w-2/5 text-body-tx text-center opacity-50" },
                    wp.element.createElement(wp.blockEditor.RichText, {
                        value: props.attributes.text,
                        onChange: text => {
                            props.setAttributes({ text: text });
                        },
                        placeholder: "Ev. sottotitolo"
                    })
                )
            );
        },
        save: function (props) {
            return wp.element.createElement(
                "div",
                { "class": "flex flex-col items-center w-full py-16" },
                wp.element.createElement(wp.blockEditor.RichText.Content, {
                    tagName: "span",
                    className: "text-xl md:text-3xl font-bold w-5/6 md:w-2/5 text-body-tx text-center opacity-50",
                    value: props.attributes.text
                })
            );
        }
    });
})(window.wp.blocks, window.wp.element);

/***/ })

/******/ });