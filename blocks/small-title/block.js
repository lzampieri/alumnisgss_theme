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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ }),

/***/ 17:
/***/ (function(module, exports) {

(function (blocks, element) {

    blocks.registerBlockType('alumnisgss-theme/block-small-title', {
        // apiVersion: 2,
        title: "Titoletto",
        name: "alumnisgss-theme/block-small-title",
        category: "theme",
        attributes: {
            text: {
                type: 'text',
                default: ''
            },
            subtext: {
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
                    { "class": "text-2xl md:text-5xl font-bold two-fifths border-b-4 border-details-bg rounded text-body-tx text-center" },
                    wp.element.createElement(wp.blockEditor.RichText, {
                        value: props.attributes.text,
                        onChange: text => {
                            props.setAttributes({ text: text });
                        },
                        placeholder: "Titolo"
                    })
                ),
                wp.element.createElement(
                    "span",
                    { "class": "text-lg md:text-2xl font-bold two-fifths text-body-tx text-center opacity-50" },
                    wp.element.createElement(wp.blockEditor.RichText, {
                        value: props.attributes.subtext,
                        onChange: subtext => {
                            props.setAttributes({ subtext: subtext });
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
                    className: "text-2xl md:text-5xl font-bold two-fifths border-b-4 border-details-bg rounded text-body-tx text-center",
                    value: props.attributes.text
                }),
                wp.element.createElement(wp.blockEditor.RichText.Content, {
                    tagName: "span",
                    className: "text-lg md:text-2xl font-bold two-fifths text-body-tx text-center opacity-50",
                    value: props.attributes.subtext
                })
            );
        }
    });
})(window.wp.blocks, window.wp.element);

/***/ })

/******/ });