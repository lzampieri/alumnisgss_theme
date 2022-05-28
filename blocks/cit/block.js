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

    blocks.registerBlockType('alumnisgss-theme/block-cit', {
        // apiVersion: 2,
        title: "Citazione (alumni)",
        name: "alumnisgss-theme/block-cit",
        category: "theme",
        attributes: {
            content: {
                type: 'string',
                default: ''
            },
            align: {
                type: 'string',
                default: 'c'
            },
            color: {
                type: 'string',
                default: 'dark'
            }
        },
        icon: "format-quote",
        edit: function (props) {

            // Alignment
            const align_classes = {
                'r': 'w-full flex flex-col items-start py-4',
                'c': 'w-full flex flex-col items-center py-4',
                'l': 'w-full flex flex-col items-end py-4'
            };
            const text_classes = {
                'r': 'text-left',
                'c': 'text-center',
                'l': 'text-right'
            };
            const align_icons = {
                'r': 'editor-alignleft',
                'c': 'editor-aligncenter',
                'l': 'editor-alignright'

                // Theme
            };const icon_url = {
                'dark': '/assets/quote_on_light.svg',
                'light': '/assets/quote_on_dark.svg'
            };
            const theme_labels = {
                'dark': 'Scuro',
                'light': 'Chiaro'
            };
            const text_color_classes = {
                'dark': 'opacity-75 text-light-tx',
                'light': 'opacity-75 text-dark-tx'
            };

            return wp.element.createElement(
                "div",
                { className: align_classes[props.attributes.align] },
                wp.element.createElement(
                    "div",
                    { className: "w-full flex flex-row justify-center" },
                    wp.element.createElement(wp.components.DropdownMenu, {
                        icon: align_icons[props.attributes.align],
                        controls: Object.keys(align_icons).map((k, i) => {
                            return {
                                icon: align_icons[k],
                                onClick: () => props.setAttributes({ align: k })
                            };
                        })
                    }),
                    wp.element.createElement(wp.components.DropdownMenu, {
                        icon: "color-picker",
                        controls: Object.keys(theme_labels).map((k, i) => {
                            return {
                                title: theme_labels[k],
                                onClick: () => props.setAttributes({ color: k })
                            };
                        })
                    })
                ),
                wp.element.createElement("img", {
                    className: "max-h-8 pb-2 opacity-75",
                    src: alumnisgssThemeBlockCitVars.templateDirectoryUri + icon_url[props.attributes.color]
                }),
                wp.element.createElement(wp.blockEditor.RichText, {
                    className: "italic text-lg md:text-xl " + text_classes[props.attributes.align] + " " + text_color_classes[props.attributes.color],
                    value: props.attributes.content,
                    onChange: content => {
                        props.setAttributes({ content: content });
                    },
                    placeholder: "Contenuto..."
                })
            );
        },
        save: function (props) {x

            // Alignment
            const align_classes = {
                'r': 'w-full flex flex-col items-start py-4',
                'c': 'w-full flex flex-col items-center py-4',
                'l': 'w-full flex flex-col items-end py-4'
            };
            const text_classes = {
                'r': 'text-left',
                'c': 'text-center',
                'l': 'text-right'
            };
            const align_icons = {
                'r': 'editor-alignleft',
                'c': 'editor-aligncenter',
                'l': 'editor-alignright'

                // Theme
            };const icon_url = {
                'dark': '/assets/quote_on_light.svg',
                'light': '/assets/quote_on_dark.svg'
            };
            const theme_labels = {
                'dark': 'Scuro',
                'light': 'Chiaro'
            };
            const text_color_classes = {
                'dark': 'opacity-75 text-light-tx',
                'light': 'opacity-75 text-dark-tx'
            };

            return wp.element.createElement(
                "div",
                { className: align_classes[props.attributes.align] },
                wp.element.createElement("img", {
                    className: "max-h-8 pb-2 opacity-75",
                    src: alumnisgssThemeBlockCitVars.templateDirectoryUri + icon_url[props.attributes.color]
                }),
                wp.element.createElement(wp.blockEditor.RichText.Content, {
                    tagName: "span",
                    className: "italic text-lg md:text-xl " + text_classes[props.attributes.align] + " " + text_color_classes[props.attributes.color],
                    value: props.attributes.content })
            );
        }
    });
})(window.wp.blocks, window.wp.element);

/***/ })

/******/ });