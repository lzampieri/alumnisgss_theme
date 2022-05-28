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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

(function (blocks, element) {
    var el = element.createElement;

    blocks.registerBlockType('alumnisgss-theme/block-content-and-image', {
        // apiVersion: 2,
        title: "Sezione: contenuto e immagine",
        name: "alumnisgss-theme/block-content-and-image",
        category: "theme",
        attributes: {
            content: {
                type: 'string',
                default: ''
            },
            mediaId: {
                type: 'number',
                default: 0
            },
            mediaSrc: {
                type: 'string',
                default: ''
            }
        },
        icon: "align-pull-right",
        edit: function (props) {
            const blockProps = wp.blockEditor.useBlockProps();

            return wp.element.createElement(
                "div",
                { className: "content-and-image-flex" },
                wp.element.createElement(
                    "div",
                    { className: "content-and-image-intraflex" },
                    wp.element.createElement(
                        "div",
                        { className: "two-side-content" },
                        wp.element.createElement(wp.blockEditor.RichText, {
                            value: props.attributes.content,
                            onChange: content => {
                                props.setAttributes({ content: content });
                            },
                            placeholder: "Contenuto..."
                        }),
                        wp.element.createElement(wp.blockEditor.InnerBlocks, null)
                    ),
                    wp.element.createElement("span", { "class": "separator" }),
                    wp.element.createElement(
                        "span",
                        {
                            "class": "content-and-image-image",
                            style: {
                                backgroundImage: "url(" + props.attributes.mediaSrc + ")"
                            } },
                        wp.element.createElement(wp.blockEditor.MediaUpload, {
                            allowedTypes: ['image'],
                            value: props.attributes.mediaId,
                            render: ({ open }) => wp.element.createElement(
                                "a",
                                {
                                    className: "button",
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
                    )
                )
            );
        },
        save: function (props) {
            const blockProps = wp.blockEditor.useBlockProps.save();

            return wp.element.createElement(
                "div",
                { className: "content-and-image-flex" },
                wp.element.createElement(
                    "div",
                    { className: "content-and-image-intraflex" },
                    wp.element.createElement(
                        "span",
                        { className: "two-side-content" },
                        wp.element.createElement(wp.blockEditor.RichText.Content, {
                            tagName: "div",
                            value: props.attributes.content
                        }),
                        wp.element.createElement(wp.blockEditor.InnerBlocks.Content, null)
                    ),
                    wp.element.createElement("span", { "class": "separator" }),
                    wp.element.createElement("span", {
                        "class": "content-and-image-image",
                        style: {
                            backgroundImage: "url(" + props.attributes.mediaSrc + ")"
                        } })
                )
            );
        }
    });
})(window.wp.blocks, window.wp.element);

/***/ })

/******/ });