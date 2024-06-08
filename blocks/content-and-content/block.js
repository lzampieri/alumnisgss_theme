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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),

/***/ 7:
/***/ (function(module, exports) {

(function (blocks, element) {
    var el = element.createElement;

    blocks.registerBlockType('alumnisgss-theme/block-content-and-content', {
        // apiVersion: 2,
        title: "Sezione: doppio contenuto",
        name: "alumnisgss-theme/block-content-and-content",
        category: "theme",
        attributes: {
            theme: {
                type: 'string',
                default: 'dark'
            }
        },
        icon: "columns",
        edit: function (props) {
            const innerBlocksProps = wp.blockEditor.useInnerBlocksProps(wp.blockEditor.useBlockProps({
                className: 'two-cols-intraflex'
            }), {
                allowedBlocks: ['alumnisgss-theme/block-content-and-content-thecontent', 'alumnisgss-theme/block-content-and-content-theseparator'],
                template: [['alumnisgss-theme/block-content-and-content-thecontent'], ['alumnisgss-theme/block-content-and-content-theseparator'], ['alumnisgss-theme/block-content-and-content-thecontent']],
                renderAppender: false
            });

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
                { className: 'content-and-content-flex ' + section_classes[props.attributes.theme] },
                wp.element.createElement(wp.components.DropdownMenu, {
                    icon: "color-picker",
                    controls: Object.keys(theme_labels).map((k, i) => {
                        return {
                            title: theme_labels[k],
                            onClick: () => props.setAttributes({ theme: k })
                        };
                    })
                }),
                wp.element.createElement("div", innerBlocksProps)
            );
        },
        save: function (props) {
            const section_classes = {
                'dark': 'section-dark',
                'light': 'section-light'
            };

            const blockProps = wp.blockEditor.useBlockProps.save({
                className: 'two-cols-intraflex'
            });

            const innerBlocksProps = wp.blockEditor.useInnerBlocksProps.save(blockProps);

            return wp.element.createElement(
                "div",
                { className: 'two-cols-flex ' + section_classes[props.attributes.theme] },
                wp.element.createElement("div", innerBlocksProps)
            );
        }
    });
})(window.wp.blocks, window.wp.element);

/***/ })

/******/ });