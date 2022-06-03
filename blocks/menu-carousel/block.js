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

    blocks.registerBlockType('alumnisgss-theme/block-menu-carousel', {
        // apiVersion: 2,
        title: "Carosello",
        name: "alumnisgss-theme/block-menu-carousel",
        category: "theme",
        attributes: {
            menuId: {
                type: 'number',
                default: 0
            }
        },
        icon: "menu",
        edit: function (props) {
            const { menus } = wp.data.useSelect(select => {
                return { menus: select('core').getMenus() };
            });

            if (menus == null) {
                return wp.element.createElement(
                    "div",
                    { className: "content-and-image-flex" },
                    "Loading..."
                );
            }

            var options = menus.map(m => {
                return { label: m['name'], value: m['id'] };
            });
            options.unshift({ label: "Nessuno", value: 0 });

            return wp.element.createElement(
                "div",
                { className: "content-and-image-flex" },
                wp.element.createElement(wp.components.SelectControl, {
                    label: "Menu:",
                    value: props.attributes.menuId,
                    options: options,
                    onChange: newMenuId => props.setAttributes({ menuId: parseInt(newMenuId) })
                }),
                wp.element.createElement(wp.serverSideRender, {
                    block: "alumnisgss-theme/block-menu-carousel",
                    attributes: { menuId: props.attributes.menuId } })
            );
        },
        save(props) {
            return null;
        }
    });
})(window.wp.blocks, window.wp.element);

/***/ })

/******/ });