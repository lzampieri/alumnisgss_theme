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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

(function (blocks, element) {
    var el = element.createElement;

    blocks.registerBlockType('alumnisgss-theme/block-only-image', {
        // apiVersion: 2,
        title: "Sezione: solo immagine",
        name: "alumnisgss-theme/block-only-image",
        category: "theme",
        attributes: {
            mediaId: {
                type: 'number',
                default: 0
            },
            mediaSrc: {
                type: 'string',
                default: ''
            },
            theme: {
                type: 'string',
                default: 'dark'
            },
            direction: {
                type: 'integer',
                default: 'right'
            }
        },
        icon: "cover-image",
        edit: function (props) {

            const theme_labels = {
                'dark': 'Scuro',
                'light': 'Chiaro'
            };
            const section_classes = {
                'dark': 'section-dark',
                'light': 'section-light'
            };

            return wp.element.createElement(
                "div",
                { className: 'only-content-flex ' + section_classes[props.attributes.theme] },
                wp.element.createElement("span", { className: "separator" }),
                wp.element.createElement(
                    "div",
                    { className: "only-content-content" },
                    wp.element.createElement(wp.components.DropdownMenu, {
                        icon: "color-picker",
                        controls: Object.keys(theme_labels).map((k, i) => {
                            return {
                                title: theme_labels[k],
                                onClick: () => props.setAttributes({ theme: k })
                            };
                        })
                    }),
                    wp.element.createElement("img", { src: props.attributes.mediaSrc }),
                    wp.element.createElement(wp.blockEditor.MediaUpload, {
                        allowedTypes: ['image'],
                        value: props.attributes.mediaId,
                        render: ({ open }) => wp.element.createElement(
                            "a",
                            {
                                className: "button no-underline",
                                onClick: open
                            },
                            props.attributes.mediaId == 0 ? "Scegli" : "Cambia",
                            " immagine"
                        ),
                        onSelect: media => {
                            props.setAttributes({
                                mediaId: media.id,
                                mediaSrc: media.url
                            });
                        }
                    })
                ),
                wp.element.createElement("span", { className: "separator" })
            );
        },
        save: function (props) {
            const section_classes = {
                'dark': 'section-dark',
                'light': 'section-light'
            };

            return wp.element.createElement(
                "div",
                { className: 'only-content-flex ' + section_classes[props.attributes.theme] },
                wp.element.createElement("span", { className: "separator" }),
                wp.element.createElement(
                    "div",
                    { className: "only-content-content" },
                    wp.element.createElement("img", { className: "max-w-full max-h-[250px]",
                        src: props.attributes.mediaSrc })
                ),
                wp.element.createElement("span", { className: "separator" })
            );
        }
    });
})(window.wp.blocks, window.wp.element);

/***/ })
/******/ ]);