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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

(function (blocks, element) {
    var el = element.createElement;

    blocks.registerBlockType('alumnisgss-theme/block-only-content', {
        // apiVersion: 2,
        title: "Sezione: solo contenuto",
        name: "alumnisgss-theme/block-only-content",
        category: "theme",
        attributes: {
            content: {
                type: 'string',
                default: ''
            }
        },
        icon: "editor-justify",
        edit: function (props) {
            const blockProps = wp.blockEditor.useBlockProps();

            return wp.element.createElement(
                "div",
                {
                    className: "only-content-flex" },
                wp.element.createElement("span", { className: "separator" }),
                wp.element.createElement(
                    "div",
                    _extends({ className: "only-content-content" }, blockProps),
                    wp.element.createElement(wp.blockEditor.RichText, {
                        className: "text-center",
                        value: props.attributes.content,
                        onChange: content => {
                            props.setAttributes({ content: content });
                        },
                        placeholder: "Contenuto..."
                    }),
                    wp.element.createElement(wp.blockEditor.InnerBlocks, null)
                ),
                wp.element.createElement("span", { className: "separator" })
            );
        },
        save: function (props) {
            const blockProps = wp.blockEditor.useBlockProps.save();

            return wp.element.createElement(
                "div",
                { className: "only-content-flex" },
                wp.element.createElement("span", { className: "separator" }),
                wp.element.createElement(
                    "span",
                    _extends({ className: "only-content-content" }, blockProps),
                    wp.element.createElement(wp.blockEditor.RichText.Content, {
                        tagName: "div",
                        className: "text-center",
                        value: props.attributes.content
                    }),
                    wp.element.createElement(wp.blockEditor.InnerBlocks.Content, null)
                ),
                wp.element.createElement("span", { className: "separator" })
            );
        }
    });
})(window.wp.blocks, window.wp.element);

/***/ })
/******/ ]);