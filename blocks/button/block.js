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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),

/***/ 15:
/***/ (function(module, exports) {

(function (blocks, element) {

    blocks.registerBlockType('alumnisgss-theme/block-button', {
        // apiVersion: 2,
        title: "Bottone",
        name: "alumnisgss-theme/block-button",
        category: "theme",
        attributes: {
            text: {
                type: 'string',
                default: ''
            },
            url: {
                type: 'string',
                default: ''
            },
            align: {
                type: 'string',
                default: 'c'
            }

        },
        icon: "button",
        edit: function (props) {
            const align_classes = {
                'l': 'w-full flex flex-row justify-start items-center py-4',
                'c': 'w-full flex flex-row justify-center items-center py-4',
                'r': 'w-full flex flex-row justify-end items-center py-4'
            };
            const align_icons = {
                'l': 'editor-alignleft',
                'c': 'editor-aligncenter',
                'r': 'editor-alignright'
            };

            return wp.element.createElement(
                "div",
                { className: align_classes[props.attributes.align] },
                wp.element.createElement(wp.blockEditor.URLInputButton, {
                    url: props.attributes.url,
                    onChange: newUrl => props.setAttributes({ url: newUrl })
                }),
                wp.element.createElement(wp.components.DropdownMenu, {
                    icon: align_icons[props.attributes.align],
                    controls: Object.keys(align_icons).map((k, i) => {
                        return {
                            icon: align_icons[k],
                            onClick: () => props.setAttributes({ align: k })
                        };
                    })
                }),
                wp.element.createElement(wp.components.TextControl, {
                    className: "border-4 border-details-bg rounded-full bg-light-bg hover:bg-details-bg text-light-tx hover:text-details-tx cursor-pointer p-2",
                    value: props.attributes.text,
                    onChange: newText => props.setAttributes({ text: newText }),
                    placeholder: "Testo..."
                })
            );
        },
        save: function (props) {
            const align_classes = {
                'l': 'w-full flex flex-row justify-start py-4',
                'c': 'w-full flex flex-row justify-center py-4',
                'r': 'w-full flex flex-row justify-end py-4'
            };

            return wp.element.createElement(
                "div",
                { className: align_classes[props.attributes.align] },
                wp.element.createElement(
                    "a",
                    {
                        href: props.attributes.url,
                        "class": "border-4 border-details-bg rounded-full bg-light-bg hover:bg-details-bg text-light-tx hover:text-details-tx cursor-pointer p-2" },
                    props.attributes.text
                )
            );
        }
    });
})(window.wp.blocks, window.wp.element);

/***/ })

/******/ });