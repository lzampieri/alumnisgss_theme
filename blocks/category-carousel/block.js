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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),

/***/ 9:
/***/ (function(module, exports) {

(function (blocks, element) {
    blocks.registerBlockType('alumnisgss-theme/block-category-carousel', {
        // apiVersion: 2,
        title: "Carosello categorie",
        name: "alumnisgss-theme/block-category-carousel",
        category: "theme",
        attributes: {
            categoryId: {
                type: 'number',
                default: 0
            }
        },
        icon: "menu",
        edit: function (props) {
            const { cats } = wp.data.useSelect(select => {
                return { cats: select('core').getEntityRecords('taxonomy', 'category') };
            });

            if (cats == null) {
                return wp.element.createElement(
                    "div",
                    { className: "content-and-image-flex" },
                    "Loading..."
                );
            }

            var options = cats.map(m => {
                return { label: m['name'], value: m['id'] };
            });
            options.unshift({ label: "Nessuno", value: 0 });

            return wp.element.createElement(
                "div",
                { className: "content-and-image-flex" },
                wp.element.createElement(wp.components.SelectControl, {
                    label: "Categoria:",
                    value: props.attributes.categoryId,
                    options: options,
                    onChange: newCatId => props.setAttributes({ categoryId: parseInt(newCatId) })
                }),
                wp.element.createElement(wp.serverSideRender, {
                    block: "alumnisgss-theme/block-category-carousel",
                    attributes: { categoryId: props.attributes.categoryId } })
            );
        },
        save(props) {
            return null;
        }
    });
})(window.wp.blocks, window.wp.element);

/***/ })

/******/ });