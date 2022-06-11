"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["view"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/effects.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/effects.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".press-effect{\n    transition: transform 100ms;\n}\n.press-effect:hover{\n    transform: scale(1.1);\n}\n.press-effect:active{\n    transform: scale(1);\n}\n\n.selected{\n    opacity: 1;\n}\n\n.fade-in {\n  opacity: 0;\n  animation: fadeIn 500ms;\n  animation-fill-mode: forwards;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.fade-out {\n  opacity: 1;\n  animation: fadeOut 300ms;\n  animation-fill-mode: forwards;\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}", "",{"version":3,"sources":["webpack://./src/effects.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;AAC/B;AACA;IACI,qBAAqB;AACzB;AACA;IACI,mBAAmB;AACvB;;AAEA;IACI,UAAU;AACd;;AAEA;EACE,UAAU;EACV,uBAAuB;EACvB,6BAA6B;AAC/B;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE,UAAU;EACV,wBAAwB;EACxB,6BAA6B;AAC/B;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF","sourcesContent":[".press-effect{\n    transition: transform 100ms;\n}\n.press-effect:hover{\n    transform: scale(1.1);\n}\n.press-effect:active{\n    transform: scale(1);\n}\n\n.selected{\n    opacity: 1;\n}\n\n.fade-in {\n  opacity: 0;\n  animation: fadeIn 500ms;\n  animation-fill-mode: forwards;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.fade-out {\n  opacity: 1;\n  animation: fadeOut 300ms;\n  animation-fill-mode: forwards;\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n\t--background-color: #272643;\n\t--project-sidebar-color: #e3f6f5;\n\t--text-color: #ffffff;\n\t--cancel-button-color: #ff8c8c;\n\t--save-button-color: #60d0b6;\n\t--content-area-color: rgb(239, 236, 241);\n}\n\n* {\n\tborder: none;\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\n.container {\n\twidth: 100vw;\n\theight: 100vh;\n\tdisplay: grid;\n\tgrid-template-columns: 2fr 8fr;\n\tgrid-template-rows: 8vh 92vh;\n\tgrid-template-areas:\n\t\t\"header header\"\n\t\t\"sidebar content\";\n\toverflow: hidden;\n\tcolor: var(--text-color);\n\tfont-family: 'Montserrat';\n\tbackground-color: var(--background-color);\n}\n\n.header{\n\tgrid-area: header;\n\tbackground-color: var(--background-color);\n\theight: 100%;\n\twidth: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 30px;\n}\n\n.sidebar{\n\theight: 100%;\n\twidth: 100%;\n\tgrid-area: sidebar;\n\tbackground-color: var(--background-color);\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 0 10px 10px 10px;\n}\n.sidebar-header{\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\theight: 26%;\n\twidth: 100%;\n\tbackground-color: #3e3c6b;\n\tjustify-content: space-between;\n\tpadding: 10px;\n\tborder-radius: 10px;\n}\n.project-list{\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 74%;\n\twidth: 100%;\n\tbackground-color: var(background-color);\n\toverflow-y: scroll;\n\n\t-ms-overflow-style: none;\n\tscrollbar-width: none;\n\tpadding: 10px;\n}\n.project::webkit-scrollbar{\n\tdisplay: none;\n}\n\n.content{\n\tgrid-area: content;\n\theight: 100%;\n\twidth: 100%;\n\tpadding: 20px;\n\tborder-radius: 20px 0 0 0;\n\tbackground-color: var(--content-area-color);\n}\n\n/* Task */\n.task{\n\twidth: 100%;\n\tborder: 1px solid var(--background-color);\n   \tborder-radius: 10px;\n\tpadding: 20px;\n\tcolor: var(--background-color);\n\tdisplay: grid;\n\tjustify-items: start;\n\talign-items: center;\n\tgrid-template-columns: 2fr 1fr 1fr 80px;\n\tgrid-template-rows: 1fr 4fr;\n\tgrid-template-areas:\n\t\t\"title date priority priority\"\n\t\t\"description description description options\";\n\trow-gap: 10px;\n}\n.task-title{\n\tgrid-area: title;\n\tfont-size: 1.5em;\n\tfont-weight: bold;\n\ttext-align: left;\n\twidth: 100%;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n}\n.task-due-date{\n\tgrid-area: date;\n\tfont-size: 1.5em;\n\ttext-align: center;\n\tjustify-self: end;\n}\n.task-priority{\n\tgrid-area: priority;\n\tfont-size: 1.5em;\n\tfont-weight: bold;\n\ttext-align: center;\n\tjustify-self: end;\n}\n.task-description{\n\tgrid-area: description;\n\tfont-size: 1.2em;\n\ttext-align: left;\n\toverflow-wrap: break-word;\n\toverflow: hidden;\n\n\twidth: 100%;\n\theight: 100%;\n}\n.task-options{\n\tgrid-area: options;\n\talign-self: end;\n}\n\n/* Project */\n.project{\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: grid;\n\tgrid-template-rows: 1fr 10fr;\n\talign-items: center;\n}\n.project-header{\n\tgrid-row: 1;\n\tfont-size: 1.5em;\n\tfont-weight: bold;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 0px 50px 0px 20px;\n\tbackground-color: var(--content-area-color);\n\tborder-bottom: 1px solid var(--background-color);\n\tcolor: var(--background-color);\n}\n.project-title{\n\tfont-size: 1.5em;\n\tfont-weight: bold;\n\tpadding: 20px;\n\twidth: 70%;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n}\n.task-container{\n\tgrid-row: 2;\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\talign-items: center;\n\tpadding: 20px;\n\trow-gap: 20px;\n\tbackground-color: var(--background-color2);\n\toverflow-y: scroll;\n\n\t-ms-overflow-style: none;\n\tscrollbar-width: none;\n}\n.task-container::webkit-scrollbar{\n\tdisplay: none;\n}\n\n.project-list-item{\n\twidth: 100%;\n\theight: 40px;\n\tborder-radius: 5px;\n\tmargin-top: 10px;\n\tbackground-color: var(--project-sidebar-color);\n\tcolor: var(--background-color);\n\topacity: 0.8;\n\tdisplay:grid;\n\tgrid-template-columns: 4fr 1fr;\n\tgrid-template-rows: 1fr;\n\tgrid-template-areas:\n\t\t\"title options\";\n\tpadding: 0px 10px;\n\talign-items: center;\n}\n.project-sidebar-title{\n\tgrid-area: title;\n\tfont-size: 1.2em;\n\tfont-weight: bold;\n\ttext-align: left;\n\theight: 100%;\n\tjustify-self: start;\n\twidth: 100%;\n\theight: 70%;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n}\n\n\n\n/* General */\n.UIButton{\n\twidth: fit-content;\n\tpadding: 0.75em;\n\tborder-radius: 0.5em;\n\tfont-size: 0.75em;\n\tbackground-color: var(--background-color);\n\tcolor: var(--text-color);\n}\n\n.block-screen{\n\twidth: 100%;\n\theight: 100%;\n\tposition: fixed;\n\tbackground-color: rgba(0,0,0,0.5);\n}\n.project-config{\n\twidth: 500px;\n\theight: 400px;\n\tbackground-color: var(--content-area-color);\n\tborder-radius: 10px;\n\tposition: fixed;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tdisplay: grid;\n\tgrid-template-rows: 1fr 1fr;\n\tgrid-template-columns: 1fr 1fr;\n\tgrid-template-areas:\n\t\t\"input input\"\n\t\t\"cancel save\";\n\n\tpadding: 20px;\n\talign-items: end;\n}\n\n.save-project-button{\n\tgrid-area: save;\n\tjustify-self: end;\n\twidth: 100px;\n\tbackground-color: var(--save-button-color);\n\tfont-size: 1em;\n}\n.cancel-project-button{\n\tgrid-area: cancel;\n\tjustify-self: start;\n\twidth: 100px;\n\tbackground-color: var(--cancel-button-color);\n\tfont-size: 1em;\n}\n.project-name{\n\tgrid-area: input;\n\twidth: 100%;\n\theight: 40px;\n\tborder: 1px solid var(--background-color);\n\tborder-radius: 5px;\n\tpadding: 10px;\n\tfont-size: 1.5em;\n\tfont-weight: bold;\n\ttext-align: left;\n}\n\n.task-config{\n\twidth: 600px;\n\theight: 700px;\n\tbackground-color: var(--content-area-color);\n\tborder-radius: 10px;\n\tposition: fixed;\n\tpadding: 20px;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tgrid-template-rows: 1fr 2fr 1fr 1fr;\n\tgrid-template-areas:\n\t\t\"title title\"\n\t\t\"description description\"\n\t\t\"priority due-date\"\n\t\t\"cancel save\";\n\talign-items: end;\n}\n.task-config-title{\n\tgrid-area: title;\n\twidth: 100%;\n\theight: 40px;\n\tborder: 1px solid var(--background-color);\n\tborder-radius: 10px;\n\tpadding: 10px;\n\tfont-size: 1.5em;\n\tfont-weight: bold;\n\ttext-align: left;\n\talign-self: center;\n}\n.task-config-description{\n\tgrid-area: description;\n\twidth: 100%;\n\theight: 100%;\n\tfont-size: 1.2em;\n\ttext-align: left;\n\tborder: 1px solid var(--background-color);\n\tborder-radius: 10px;\n\tpadding: 10px;\n}\n.task-config-priority{\n\tgrid-area: priority;\n\tfont-size: 1em;\n\tfont-weight: bold;\n\ttext-align: center;\n\twidth: 70%;\n\theight: 40px;\n\tborder: 1px solid var(--background-color);\n\tborder-radius: 10px;\n}\n.task-config-due-date{\n\tgrid-area: due-date;\n\tfont-size: 1.5em;\n\ttext-align: center;\n\tjustify-self: end;\n\twidth: 70%;\n\theight: 40px;\n\tborder: 1px solid var(--background-color);\n\tborder-radius: 10px;\n}\n.save-task-button{\n\tgrid-area: save;\n\tjustify-self: end;\n\twidth: 100px;\n\tbackground-color: var(--save-button-color);\n\tfont-size: 1em;\n\tjustify-self: end;\n}\n.cancel-task-button{\n\tgrid-area: cancel;\n\tjustify-self: start;\n\twidth: 100px;\n\tbackground-color: var(--cancel-button-color);\n\tfont-size: 1em;\n\tjustify-self: start;\n}\n\n\n.material-symbols-outlined {\n  font-variation-settings:\n  'FILL' 1,\n  'wght' 700,\n  'GRAD' 200,\n  'opsz' 30;\n}\n\n\n.more-menu{\n\tgrid-area: options;\n\twidth: 20px;\n\theight: 40px;\n\tmargin-right: 5px;\n\tjustify-self: end;\n\tpadding-left: 7px;\n}\n.more-menu-list{\n\tposition: absolute;\n\twidth: 100px;\n\theight: 100px;\n\tdisplay: none;\n\tbackground-color: #3f3e6367;\n\tborder-radius: 10px;\n\ttransform: translate(-100%, -50%);\n\tpadding: 10px;\n\tz-index: 3;\n}\n.more-menu-item{\n\twidth: 100%;\n\theight: 30px;\n\tborder-radius: 5px;\n\tfont-size: 0.8em;\n\tbackground-color: var(--background-color);\n\tcolor: var(--text-color);\n}\n\n.more-menu:hover{\n\tcursor: pointer;\n}\n.more-menu:hover .more-menu-list{\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-around;\n}\n\n.more-menu-icon{\n\twidth: 5px;\n\theight: 5px;\n\tdisplay: none;\n\tborder-radius: 50%;\n\tmargin-top: 18px;\n\tbackground-color: var(--background-color);\n}\n\n.more-menu-icon::before{\n\tcontent: \"\";\n\tdisplay: inherit;\n\tposition: relative;\n\twidth: 5px;\n\theight: 5px;\n\tbackground-color: var(--background-color);\n\tborder-radius: 50%;\n\ttransform: translate(0, -10px);\n}\n.more-menu-icon::after{\n\tcontent: \"\";\n\tdisplay: inherit;\n\tposition: relative;\n\twidth: 5px;\n\theight: 5px;\n\tbackground-color: var(--background-color);\n\tborder-radius: 50%;\n\ttransform: translate(0, 5px);\n}\n\n.project-list-item:hover .more-menu-icon, .task:hover .more-menu-icon{\n\tdisplay: block;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n\t--background-color: #272643;\n\t--project-sidebar-color: #e3f6f5;\n\t--text-color: #ffffff;\n\t--cancel-button-color: #ff8c8c;\n\t--save-button-color: #60d0b6;\n\t--content-area-color: rgb(239, 236, 241);\n}\n\n* {\n\tborder: none;\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\n.container {\n\twidth: 100vw;\n\theight: 100vh;\n\tdisplay: grid;\n\tgrid-template-columns: 2fr 8fr;\n\tgrid-template-rows: 8vh 92vh;\n\tgrid-template-areas:\n\t\t\"header header\"\n\t\t\"sidebar content\";\n\toverflow: hidden;\n\tcolor: var(--text-color);\n\tfont-family: 'Montserrat';\n\tbackground-color: var(--background-color);\n}\n\n.header{\n\tgrid-area: header;\n\tbackground-color: var(--background-color);\n\theight: 100%;\n\twidth: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 30px;\n}\n\n.sidebar{\n\theight: 100%;\n\twidth: 100%;\n\tgrid-area: sidebar;\n\tbackground-color: var(--background-color);\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 0 10px 10px 10px;\n}\n.sidebar-header{\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\theight: 26%;\n\twidth: 100%;\n\tbackground-color: #3e3c6b;\n\tjustify-content: space-between;\n\tpadding: 10px;\n\tborder-radius: 10px;\n}\n.project-list{\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 74%;\n\twidth: 100%;\n\tbackground-color: var(background-color);\n\toverflow-y: scroll;\n\n\t-ms-overflow-style: none;\n\tscrollbar-width: none;\n\tpadding: 10px;\n}\n.project::webkit-scrollbar{\n\tdisplay: none;\n}\n\n.content{\n\tgrid-area: content;\n\theight: 100%;\n\twidth: 100%;\n\tpadding: 20px;\n\tborder-radius: 20px 0 0 0;\n\tbackground-color: var(--content-area-color);\n}\n\n/* Task */\n.task{\n\twidth: 100%;\n\tborder: 1px solid var(--background-color);\n   \tborder-radius: 10px;\n\tpadding: 20px;\n\tcolor: var(--background-color);\n\tdisplay: grid;\n\tjustify-items: start;\n\talign-items: center;\n\tgrid-template-columns: 2fr 1fr 1fr 80px;\n\tgrid-template-rows: 1fr 4fr;\n\tgrid-template-areas:\n\t\t\"title date priority priority\"\n\t\t\"description description description options\";\n\trow-gap: 10px;\n}\n.task-title{\n\tgrid-area: title;\n\tfont-size: 1.5em;\n\tfont-weight: bold;\n\ttext-align: left;\n\twidth: 100%;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n}\n.task-due-date{\n\tgrid-area: date;\n\tfont-size: 1.5em;\n\ttext-align: center;\n\tjustify-self: end;\n}\n.task-priority{\n\tgrid-area: priority;\n\tfont-size: 1.5em;\n\tfont-weight: bold;\n\ttext-align: center;\n\tjustify-self: end;\n}\n.task-description{\n\tgrid-area: description;\n\tfont-size: 1.2em;\n\ttext-align: left;\n\toverflow-wrap: break-word;\n\toverflow: hidden;\n\n\twidth: 100%;\n\theight: 100%;\n}\n.task-options{\n\tgrid-area: options;\n\talign-self: end;\n}\n\n/* Project */\n.project{\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: grid;\n\tgrid-template-rows: 1fr 10fr;\n\talign-items: center;\n}\n.project-header{\n\tgrid-row: 1;\n\tfont-size: 1.5em;\n\tfont-weight: bold;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 0px 50px 0px 20px;\n\tbackground-color: var(--content-area-color);\n\tborder-bottom: 1px solid var(--background-color);\n\tcolor: var(--background-color);\n}\n.project-title{\n\tfont-size: 1.5em;\n\tfont-weight: bold;\n\tpadding: 20px;\n\twidth: 70%;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n}\n.task-container{\n\tgrid-row: 2;\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\talign-items: center;\n\tpadding: 20px;\n\trow-gap: 20px;\n\tbackground-color: var(--background-color2);\n\toverflow-y: scroll;\n\n\t-ms-overflow-style: none;\n\tscrollbar-width: none;\n}\n.task-container::webkit-scrollbar{\n\tdisplay: none;\n}\n\n.project-list-item{\n\twidth: 100%;\n\theight: 40px;\n\tborder-radius: 5px;\n\tmargin-top: 10px;\n\tbackground-color: var(--project-sidebar-color);\n\tcolor: var(--background-color);\n\topacity: 0.8;\n\tdisplay:grid;\n\tgrid-template-columns: 4fr 1fr;\n\tgrid-template-rows: 1fr;\n\tgrid-template-areas:\n\t\t\"title options\";\n\tpadding: 0px 10px;\n\talign-items: center;\n}\n.project-sidebar-title{\n\tgrid-area: title;\n\tfont-size: 1.2em;\n\tfont-weight: bold;\n\ttext-align: left;\n\theight: 100%;\n\tjustify-self: start;\n\twidth: 100%;\n\theight: 70%;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n}\n\n\n\n/* General */\n.UIButton{\n\twidth: fit-content;\n\tpadding: 0.75em;\n\tborder-radius: 0.5em;\n\tfont-size: 0.75em;\n\tbackground-color: var(--background-color);\n\tcolor: var(--text-color);\n}\n\n.block-screen{\n\twidth: 100%;\n\theight: 100%;\n\tposition: fixed;\n\tbackground-color: rgba(0,0,0,0.5);\n}\n.project-config{\n\twidth: 500px;\n\theight: 400px;\n\tbackground-color: var(--content-area-color);\n\tborder-radius: 10px;\n\tposition: fixed;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tdisplay: grid;\n\tgrid-template-rows: 1fr 1fr;\n\tgrid-template-columns: 1fr 1fr;\n\tgrid-template-areas:\n\t\t\"input input\"\n\t\t\"cancel save\";\n\n\tpadding: 20px;\n\talign-items: end;\n}\n\n.save-project-button{\n\tgrid-area: save;\n\tjustify-self: end;\n\twidth: 100px;\n\tbackground-color: var(--save-button-color);\n\tfont-size: 1em;\n}\n.cancel-project-button{\n\tgrid-area: cancel;\n\tjustify-self: start;\n\twidth: 100px;\n\tbackground-color: var(--cancel-button-color);\n\tfont-size: 1em;\n}\n.project-name{\n\tgrid-area: input;\n\twidth: 100%;\n\theight: 40px;\n\tborder: 1px solid var(--background-color);\n\tborder-radius: 5px;\n\tpadding: 10px;\n\tfont-size: 1.5em;\n\tfont-weight: bold;\n\ttext-align: left;\n}\n\n.task-config{\n\twidth: 600px;\n\theight: 700px;\n\tbackground-color: var(--content-area-color);\n\tborder-radius: 10px;\n\tposition: fixed;\n\tpadding: 20px;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tgrid-template-rows: 1fr 2fr 1fr 1fr;\n\tgrid-template-areas:\n\t\t\"title title\"\n\t\t\"description description\"\n\t\t\"priority due-date\"\n\t\t\"cancel save\";\n\talign-items: end;\n}\n.task-config-title{\n\tgrid-area: title;\n\twidth: 100%;\n\theight: 40px;\n\tborder: 1px solid var(--background-color);\n\tborder-radius: 10px;\n\tpadding: 10px;\n\tfont-size: 1.5em;\n\tfont-weight: bold;\n\ttext-align: left;\n\talign-self: center;\n}\n.task-config-description{\n\tgrid-area: description;\n\twidth: 100%;\n\theight: 100%;\n\tfont-size: 1.2em;\n\ttext-align: left;\n\tborder: 1px solid var(--background-color);\n\tborder-radius: 10px;\n\tpadding: 10px;\n}\n.task-config-priority{\n\tgrid-area: priority;\n\tfont-size: 1em;\n\tfont-weight: bold;\n\ttext-align: center;\n\twidth: 70%;\n\theight: 40px;\n\tborder: 1px solid var(--background-color);\n\tborder-radius: 10px;\n}\n.task-config-due-date{\n\tgrid-area: due-date;\n\tfont-size: 1.5em;\n\ttext-align: center;\n\tjustify-self: end;\n\twidth: 70%;\n\theight: 40px;\n\tborder: 1px solid var(--background-color);\n\tborder-radius: 10px;\n}\n.save-task-button{\n\tgrid-area: save;\n\tjustify-self: end;\n\twidth: 100px;\n\tbackground-color: var(--save-button-color);\n\tfont-size: 1em;\n\tjustify-self: end;\n}\n.cancel-task-button{\n\tgrid-area: cancel;\n\tjustify-self: start;\n\twidth: 100px;\n\tbackground-color: var(--cancel-button-color);\n\tfont-size: 1em;\n\tjustify-self: start;\n}\n\n\n.material-symbols-outlined {\n  font-variation-settings:\n  'FILL' 1,\n  'wght' 700,\n  'GRAD' 200,\n  'opsz' 30;\n}\n\n\n.more-menu{\n\tgrid-area: options;\n\twidth: 20px;\n\theight: 40px;\n\tmargin-right: 5px;\n\tjustify-self: end;\n\tpadding-left: 7px;\n}\n.more-menu-list{\n\tposition: absolute;\n\twidth: 100px;\n\theight: 100px;\n\tdisplay: none;\n\tbackground-color: #3f3e6367;\n\tborder-radius: 10px;\n\ttransform: translate(-100%, -50%);\n\tpadding: 10px;\n\tz-index: 3;\n}\n.more-menu-item{\n\twidth: 100%;\n\theight: 30px;\n\tborder-radius: 5px;\n\tfont-size: 0.8em;\n\tbackground-color: var(--background-color);\n\tcolor: var(--text-color);\n}\n\n.more-menu:hover{\n\tcursor: pointer;\n}\n.more-menu:hover .more-menu-list{\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-around;\n}\n\n.more-menu-icon{\n\twidth: 5px;\n\theight: 5px;\n\tdisplay: none;\n\tborder-radius: 50%;\n\tmargin-top: 18px;\n\tbackground-color: var(--background-color);\n}\n\n.more-menu-icon::before{\n\tcontent: \"\";\n\tdisplay: inherit;\n\tposition: relative;\n\twidth: 5px;\n\theight: 5px;\n\tbackground-color: var(--background-color);\n\tborder-radius: 50%;\n\ttransform: translate(0, -10px);\n}\n.more-menu-icon::after{\n\tcontent: \"\";\n\tdisplay: inherit;\n\tposition: relative;\n\twidth: 5px;\n\theight: 5px;\n\tbackground-color: var(--background-color);\n\tborder-radius: 50%;\n\ttransform: translate(0, 5px);\n}\n\n.project-list-item:hover .more-menu-icon, .task:hover .more-menu-icon{\n\tdisplay: block;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/effects.css":
/*!*************************!*\
  !*** ./src/effects.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_effects_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./effects.css */ "./node_modules/css-loader/dist/cjs.js!./src/effects.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_effects_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_effects_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "state": () => (/* binding */ state)
/* harmony export */ });
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.js */ "./src/model.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/view.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");





const container = document.querySelector('.container');
const header = document.querySelector('.header');

const content = document.createElement('div');
content.classList.add('content');


container.appendChild(header);
container.appendChild(content);

const state = {
    container: container,
    content: content,
    projects: [],
    currentProject: null,
    inboxProject: null,
    todayProject: null,
    metadata: {
        currentPid: null,
        inboxPid: null,
        todayPid: null
    }
}

Object.keys(localStorage).forEach(key => {
    if(key !== 'metadata'){
        state.projects.push(_model_js__WEBPACK_IMPORTED_MODULE_0__.Project.fromJson(localStorage.getItem(key)));
    } 
});
state.projects.sort((a, b) => a.pid - b.pid);



if(localStorage.getItem('metadata')){
    state.metadata = JSON.parse(localStorage.getItem('metadata'));
    state.currentProject = state.projects.find(p => p.pid === state.metadata.currentPid);
    state.inboxProject = state.projects.find(p => p.pid === state.metadata.inboxPid);
    state.todayProject = state.projects.find(p => p.pid === state.metadata.todayPid);
    console.log("found metadata");
}

if(state.inboxProject === null){
    state.inboxProject = new _model_js__WEBPACK_IMPORTED_MODULE_0__.Project('Inbox');
    state.projects.push(state.inboxProject);
    state.metadata.inboxPid = state.inboxProject.pid;
    localStorage.setItem(state.inboxProject.pid, JSON.stringify(state.inboxProject));
    console.log("Inbox project created.");
}

if(state.todayProject === null){
    state.todayProject = new _model_js__WEBPACK_IMPORTED_MODULE_0__.Project('Today');
    state.projects.push(state.todayProject);
    state.metadata.todayPid = state.todayProject.pid;
    localStorage.setItem(state.todayProject.pid, JSON.stringify(state.todayProject));
    console.log("Today project created.");
}

state.todayProject.clearTasks();
state.projects.forEach(project => {
    if(project.pid !== state.todayProject.pid){
        project.tasks.forEach(task => {
            if(task.dueDate.toLocaleDateString() === new Date().toLocaleDateString()){
                state.todayProject.addTask(task);
            }
        });
    }
});


(0,_view__WEBPACK_IMPORTED_MODULE_1__.sidebarView)(container);
if(state.currentProject){
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.projectView)(content);
}

localStorage.setItem('metadata', JSON.stringify(state.metadata));



/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
class Task{
	title;
	description;
	dueDate;
	priority;
	constructor(title, description, dueDate, priority){
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
	}

	get title(){
		return this.title;
	}
	get description(){
		return this.description;
	}
	get dueDate(){
		return this.dueDate;
	}
	get priority(){
		return this.priority;
	}

	toJSON(){
		return {
			title: this.title,
			description: this.description,
			dueDate: this.dueDate.toString(),
			priority: this.priority,
		};
	}

	//takes a jason string and returns a task object
	static fromJson(json){
		const obj = JSON.parse(json);

		const task = new Task(obj.title, obj.description, new Date(obj.dueDate), obj.priority);
		return task;

	}
}

class Project{
	name;
	tasks;
	#pid;
	constructor(name){
		this.name = name;
		this.#pid = Date.now();
		this.tasks = [];
	}
	
	get name(){
		return this.name;
	}
	get tasks(){
		return this.tasks;
	}
	get pid(){
		return this.#pid;
	}

	addTask(task){
		this.tasks.push(task);
		localStorage.setItem(this.#pid, JSON.stringify(this));
	}
	removeTask(task){
		this.tasks.splice(this.tasks.indexOf(task), 1);
		localStorage.setItem(this.#pid, JSON.stringify(this));
	}
	clearTasks(){
		this.tasks = [];
	}
	getTask(index){
		return this.tasks[index];
	}
	toJSON(){
		return {
			name: this.name,
			pid: this.#pid,
			tasks: this.tasks,
		};
	}

	#setProjectId(pid){
		this.#pid = pid;
	}

	//takes a jason string and returns a project object
	static fromJson(json){
		const obj = JSON.parse(json);

		const pr = new Project(obj.name);
		pr.#setProjectId(obj.pid);
		obj.tasks.forEach(task => { pr.addTask(Task.fromJson(JSON.stringify(task))); });
		return pr;
	}
}




/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectConfigView": () => (/* binding */ projectConfigView),
/* harmony export */   "projectView": () => (/* binding */ projectView),
/* harmony export */   "sidebarView": () => (/* binding */ sidebarView),
/* harmony export */   "taskConfigView": () => (/* binding */ taskConfigView),
/* harmony export */   "taskView": () => (/* binding */ taskView)
/* harmony export */ });
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.js */ "./src/model.js");
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller.js */ "./src/controller.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _effects_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./effects.css */ "./src/effects.css");





function taskView(task, parent){
    const taskElement = document.createElement('div');
    taskElement.classList.add('task', 'fade-in');

    const taskTitle = document.createElement('div');
    taskElement.appendChild(taskTitle);
    taskTitle.classList.add('task-title');
    taskTitle.innerHTML = task.title;

    const taskDescription = document.createElement('div');
    taskElement.appendChild(taskDescription);
    taskDescription.classList.add('task-description');
    taskDescription.innerHTML = task.description;

    const taskDueDate = document.createElement('div');
    taskElement.appendChild(taskDueDate);
    taskDueDate.classList.add('task-due-date');
    taskDueDate.innerHTML = "Due date: " + task.dueDate.toLocaleDateString();

    const taskPriority = document.createElement('div');
    taskElement.appendChild(taskPriority);
    taskPriority.classList.add('task-priority');
    taskPriority.innerHTML = "Priority: " + task.priority;


    const moreMenu = document.createElement('div');
    moreMenu.classList.add('task-options', 'more-menu');
    taskElement.appendChild(moreMenu);

    const icon = document.createElement('div');
    moreMenu.appendChild(icon);
    icon.classList.add('more-menu-icon');


    const moreMenuList = document.createElement('div');
    moreMenu.appendChild(moreMenuList);
    moreMenuList.classList.add('more-menu-list', 'fade-in');

    const deleteButton = document.createElement('button');
    moreMenuList.appendChild(deleteButton);
    deleteButton.classList.add('press-effect','more-menu-item');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', (e) => {
        taskElement.classList.add('fade-out');
        taskElement.addEventListener('animationend', () => {
            _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.currentProject.removeTask(task)
            parent.removeChild(taskElement);
            if(task.dueDate.toLocaleDateString() === new Date().toLocaleDateString()){
                _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.todayProject.removeTask(task);
            }
        });
    });

    const editButton = document.createElement('button');
    moreMenuList.appendChild(editButton);
    editButton.classList.add('press-effect','more-menu-item');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', (e) => {
        taskConfigView({task,
                        taskTitle,
                        taskDescription,
                        taskDueDate,
                        taskPriority}, 'edit');
    });

    parent.appendChild(taskElement);
}

function projectView(parent){
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');

    const projectHeader = document.createElement('div');
    projectElement.appendChild(projectHeader);
    projectHeader.classList.add('project-header');

    const projectTitle = document.createElement('div');
    projectHeader.appendChild(projectTitle);
    projectTitle.classList.add('project-title');
    projectTitle.innerHTML = _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.currentProject.name;

    if(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.currentProject.pid !== _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.metadata.todayPid){
        const addTaskButton = document.createElement('button');
        projectHeader.appendChild(addTaskButton);
        addTaskButton.classList.add('UIButton', 'press-effect');
        addTaskButton.textContent = 'Add Task';
        addTaskButton.addEventListener('click', () => {
            taskConfigView(taskContainer, 'create', projectElement);
        });
    }

    const taskContainer = document.createElement('div');
    projectElement.appendChild(taskContainer);
    taskContainer.classList.add('task-container');
    _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.currentProject.tasks.forEach(task => { taskView(task, taskContainer) });

    parent.appendChild(projectElement);
}

function projectSidebarView(project, parent){
    const projectElement = document.createElement('div');
    projectElement.classList.add('project-list-item');
    
    const projectTitle = document.createElement('div');
    projectElement.appendChild(projectTitle);
    projectTitle.classList.add('project-sidebar-title');
    projectTitle.innerHTML = project.name;

    projectElement.onclick = () => {
        if(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.currentProject.pid === project.pid){ return; }
        if(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.projectElement){
            _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.projectElement.classList.toggle('selected');
        }
        _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.projectElement = projectElement;
        projectElement.classList.toggle('selected');
        _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.currentProject = project;
        if(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.content.firstChild){
            _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.content.removeChild(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.content.firstChild);
        }
        projectView(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.content);

        _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.metadata.currentPid = project.pid;
        localStorage.setItem('metadata', JSON.stringify(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.metadata));
    };


    if(project.pid !== _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.metadata.inboxPid && project.pid !== _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.metadata.todayPid){
        const moreMenu = document.createElement('div');
        moreMenu.classList.add('more-menu');
        projectElement.appendChild(moreMenu);

        const icon = document.createElement('div');
        moreMenu.appendChild(icon);
        icon.classList.add('more-menu-icon');


        const moreMenuList = document.createElement('div');
        moreMenu.appendChild(moreMenuList);
        moreMenuList.classList.add('more-menu-list', 'fade-in');

        const deleteButton = document.createElement('button');
        moreMenuList.appendChild(deleteButton);
        deleteButton.classList.add('press-effect','more-menu-item');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', (e) => {
            _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.projects = _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.projects.filter(p => p.pid !== project.pid);
            localStorage.removeItem(project.pid);
            parent.removeChild(projectElement);
            _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.currentProject = _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.inboxProject;
            _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.metadata.currentPid = _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.currentProject.pid;
            if(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.content.firstChild){
                _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.content.removeChild(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.content.firstChild);
            }
            projectView(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.content);
            e.stopPropagation();
            localStorage.setItem('metadata', JSON.stringify(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.metadata));
        });

        const editButton = document.createElement('button');
        moreMenuList.appendChild(editButton);
        editButton.classList.add('press-effect','more-menu-item');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', (e) => {
            projectConfigView({ project, sidebar: projectTitle }, 'edit');
            e.stopPropagation();
        });
    }
    parent.appendChild(projectElement);
}

function sidebarHeaderView(pList, parent){
    const sidebarHeader = document.createElement('div');
    parent.appendChild(sidebarHeader);
    sidebarHeader.classList.add('sidebar-header');
    projectSidebarView(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.inboxProject, sidebarHeader);
    projectSidebarView(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.todayProject, sidebarHeader);

    const addProjectButton = document.createElement('button');
    sidebarHeader.appendChild(addProjectButton);
    addProjectButton.classList.add('UIButton', 'press-effect');
    addProjectButton.textContent = 'Add Project';
    addProjectButton.addEventListener('click', () => {
        projectConfigView(pList, 'create');
    });
}

function sidebarView(parent){
    const sidebarElement = document.createElement('div');
    sidebarElement.classList.add('sidebar');
    
    const projectList = document.createElement('div');
    projectList.classList.add('project-list');
    _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.projects.forEach(project => {
        if(project.pid !== _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.metadata.inboxPid && project.pid !== _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.metadata.todayPid){
            projectSidebarView(project, projectList)
        }
    });
    
    sidebarHeaderView(projectList, sidebarElement);
    sidebarElement.appendChild(projectList);
    parent.appendChild(sidebarElement);
}

function projectConfigView(context, mode){
    const screen = document.createElement('div');
    screen.classList.add('block-screen');

    const projectConfigElement = document.createElement('div');
    screen.appendChild(projectConfigElement);
    projectConfigElement.classList.add('project-config');

    const projectName = document.createElement('input');
    projectConfigElement.appendChild(projectName);
    projectName.classList.add('project-name');
    projectName.placeholder = 'Project Name';
    if(mode === 'edit'){
        projectName.value = context.project.name;
    }

    const cancelButton = document.createElement('button');
    projectConfigElement.appendChild(cancelButton);
    cancelButton.classList.add('UIButton', 'press-effect', 'cancel-project-button');
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('click', () => {
        _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.container.removeChild(screen);
    });

    const saveButton = document.createElement('button');
    projectConfigElement.appendChild(saveButton);
    saveButton.classList.add('UIButton', 'press-effect', 'save-project-button');
    saveButton.textContent = 'Save';
    saveButton.addEventListener('click', (e) => {
        if(mode === 'create'){
            const project = new _model_js__WEBPACK_IMPORTED_MODULE_0__.Project(`${projectName.value}`);
            _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.projects.push(project);
            localStorage.setItem(project.pid, JSON.stringify(project));
            _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.currentProject = project;
            if(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.content.firstChild){
                _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.content.removeChild(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.content.firstChild);
            }
            projectSidebarView(project, context);
            projectView(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.content);

            //Updating metadata.
            _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.metadata.currentPid = project.pid;
            localStorage.setItem('metadata', JSON.stringify(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.metadata));

        } else if(mode === 'edit'){
            context.project.name = projectName.value;
            context.sidebar.innerHTML = projectName.value;
            if(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.currentProject.pid === context.project.pid){
                if(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.content.firstChild){
                    _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.content.removeChild(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.content.firstChild);
                }
                projectView(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.content);
            }
            localStorage.setItem(context.project.pid, JSON.stringify(context.project));
        }

        _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.container.removeChild(screen);
        e.stopPropagation();
    });



    _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.container.appendChild(screen);
}

function taskConfigView(context, mode){
    const screen = document.createElement('div');
    screen.classList.add('block-screen');
    
    const taskConfigElement = document.createElement('div');
    screen.appendChild(taskConfigElement);
    taskConfigElement.classList.add('task-config');
    
    const taskTitle = document.createElement('input');
    taskConfigElement.appendChild(taskTitle);
    taskTitle.classList.add('task-config-title');
    taskTitle.placeholder = 'Task Title';
    if(mode === 'edit'){
        taskTitle.value = context.task.title;
    }
    
    const taskDescription = document.createElement('textarea');
    taskConfigElement.appendChild(taskDescription);
    taskDescription.classList.add('task-config-description');
    taskDescription.placeholder = 'Task Description';
    if(mode === 'edit'){
        taskDescription.value = context.task.description;
    }
    
    const taskDueDate = document.createElement('input');
    taskConfigElement.appendChild(taskDueDate);
    taskDueDate.classList.add('task-config-due-date');
    taskDueDate.setAttribute('type', 'date');
    const todayDate = new Date();
    taskDueDate.value = todayDate.getFullYear().toString() + '-'
                        + (todayDate.getMonth() + 1).toString().padStart(2,0) + '-'
                        + todayDate.getDate().toString().padStart(2,0);
    if(mode === 'edit'){
        taskDueDate.value = context.task.dueDate.getFullYear().toString() + '-'
                        + (context.task.dueDate.getMonth() + 1).toString().padStart(2,0) + '-'
                        + context.task.dueDate.getDate().toString().padStart(2,0);
    }


    const taskPriority = document.createElement('select');
    taskConfigElement.appendChild(taskPriority);
    taskPriority.classList.add('task-config-priority');
    taskPriority.options.add(new Option('Low'));
    taskPriority.options.add(new Option('Medium'));
    taskPriority.options.add(new Option('High'));
    if(mode === 'edit'){
        taskPriority.value = context.task.priority;
    }

    const cancelButton = document.createElement('button');
    taskConfigElement.appendChild(cancelButton);
    cancelButton.classList.add('UIButton', 'press-effect', 'cancel-task-button');
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('click', () => { _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.container.removeChild(screen); });

    const saveButton = document.createElement('button');
    taskConfigElement.appendChild(saveButton);
    saveButton.classList.add('UIButton', 'press-effect', 'save-task-button');
    saveButton.textContent = 'Save';
    saveButton.addEventListener('click', () => {
        if(mode == 'create'){
            const task = new _model_js__WEBPACK_IMPORTED_MODULE_0__.Task(`${taskTitle.value}`, `${taskDescription.value}`, new Date(
                taskDueDate.value.split('-')[0],
                taskDueDate.value.split('-')[1] - 1,
                taskDueDate.value.split('-')[2]
            ), `${taskPriority.value}`);
    
    
            _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.currentProject.addTask(task);
            
            taskView(task, context);
            console.log(new Date(Date.now()).toISOString());
            if(task.dueDate.toLocaleDateString() === new Date().toLocaleDateString()){
                _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.todayProject.addTask(task);
            }
        } else if(mode == 'edit'){
            context.task.title = taskTitle.value;
            context.task.description = taskDescription.value;
            context.task.dueDate = new Date(
                taskDueDate.value.split('-')[0],
                taskDueDate.value.split('-')[1] - 1,
                taskDueDate.value.split('-')[2]
            );
            context.task.priority = taskPriority.value;

            context.taskTitle.innerHTML = taskTitle.value;
            context.taskDescription.innerHTML = taskDescription.value;
            context.taskDueDate.innerHTML = "Due Date: " + taskDueDate.valueAsDate.toLocaleDateString();
            context.taskPriority.innerHTML = "Priority: " + taskPriority.value;

            localStorage.setItem(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.currentProject.pid, JSON.stringify(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.currentProject));
        }

        _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.container.removeChild(screen);
    });

    _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.container.appendChild(screen);
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/view.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxPQUFPLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFNBQVMsVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxTQUFTLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFFBQVEsS0FBSyxRQUFRLEtBQUssT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFB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QjtBQUNuQztBQUNBLEtBQUs7Ozs7QUFJTCxJQUFJLHVFQUEyQjtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELHVFQUEyQixXQUFXOztBQUV6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsMkNBQUksSUFBSSxnQkFBZ0IsTUFBTSxzQkFBc0I7QUFDakY7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0EsWUFBWSx3RUFBNEI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0VBQTBCO0FBQzFDO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLG9FQUF3QixpQkFBaUIsZ0VBQW9CO0FBQzlGOztBQUVBLFFBQVEsdUVBQTJCO0FBQ25DLEtBQUs7O0FBRUwsSUFBSSx1RUFBMkI7QUFDL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZWZmZWN0cy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZWZmZWN0cy5jc3M/NTkyOCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucHJlc3MtZWZmZWN0e1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXM7XFxufVxcbi5wcmVzcy1lZmZlY3Q6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLnByZXNzLWVmZmVjdDphY3RpdmV7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5zZWxlY3RlZHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmZhZGUtaW4ge1xcbiAgb3BhY2l0eTogMDtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDUwMG1zO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4uZmFkZS1vdXQge1xcbiAgb3BhY2l0eTogMTtcXG4gIGFuaW1hdGlvbjogZmFkZU91dCAzMDBtcztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9lZmZlY3RzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLFVBQVU7RUFDVix3QkFBd0I7RUFDeEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wcmVzcy1lZmZlY3R7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcztcXG59XFxuLnByZXNzLWVmZmVjdDpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4ucHJlc3MtZWZmZWN0OmFjdGl2ZXtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnNlbGVjdGVke1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uZmFkZS1pbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gNTAwbXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi5mYWRlLW91dCB7XFxuICBvcGFjaXR5OiAxO1xcbiAgYW5pbWF0aW9uOiBmYWRlT3V0IDMwMG1zO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZU91dCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxuXFx0LS1iYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNjQzO1xcblxcdC0tcHJvamVjdC1zaWRlYmFyLWNvbG9yOiAjZTNmNmY1O1xcblxcdC0tdGV4dC1jb2xvcjogI2ZmZmZmZjtcXG5cXHQtLWNhbmNlbC1idXR0b24tY29sb3I6ICNmZjhjOGM7XFxuXFx0LS1zYXZlLWJ1dHRvbi1jb2xvcjogIzYwZDBiNjtcXG5cXHQtLWNvbnRlbnQtYXJlYS1jb2xvcjogcmdiKDIzOSwgMjM2LCAyNDEpO1xcbn1cXG5cXG4qIHtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA4ZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiA4dmggOTJ2aDtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxcblxcdFxcdFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcblxcdFxcdFxcXCJzaWRlYmFyIGNvbnRlbnRcXFwiO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcblxcdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi5oZWFkZXJ7XFxuXFx0Z3JpZC1hcmVhOiBoZWFkZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAzMHB4O1xcbn1cXG5cXG4uc2lkZWJhcntcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Z3JpZC1hcmVhOiBzaWRlYmFyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRwYWRkaW5nOiAwIDEwcHggMTBweCAxMHB4O1xcbn1cXG4uc2lkZWJhci1oZWFkZXJ7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0aGVpZ2h0OiAyNiU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzNlM2M2YjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4ucHJvamVjdC1saXN0e1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRoZWlnaHQ6IDc0JTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoYmFja2dyb3VuZC1jb2xvcik7XFxuXFx0b3ZlcmZsb3cteTogc2Nyb2xsO1xcblxcblxcdC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXG5cXHRzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuXFx0cGFkZGluZzogMTBweDtcXG59XFxuLnByb2plY3Q6OndlYmtpdC1zY3JvbGxiYXJ7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbnRlbnR7XFxuXFx0Z3JpZC1hcmVhOiBjb250ZW50O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDIwcHggMCAwIDA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1hcmVhLWNvbG9yKTtcXG59XFxuXFxuLyogVGFzayAqL1xcbi50YXNre1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgIFxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHRjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAxZnIgODBweDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHRcXFwidGl0bGUgZGF0ZSBwcmlvcml0eSBwcmlvcml0eVxcXCJcXG5cXHRcXHRcXFwiZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gb3B0aW9uc1xcXCI7XFxuXFx0cm93LWdhcDogMTBweDtcXG59XFxuLnRhc2stdGl0bGV7XFxuXFx0Z3JpZC1hcmVhOiB0aXRsZTtcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4udGFzay1kdWUtZGF0ZXtcXG5cXHRncmlkLWFyZWE6IGRhdGU7XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcbi50YXNrLXByaW9yaXR5e1xcblxcdGdyaWQtYXJlYTogcHJpb3JpdHk7XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcbi50YXNrLWRlc2NyaXB0aW9ue1xcblxcdGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxuXFx0Zm9udC1zaXplOiAxLjJlbTtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxufVxcbi50YXNrLW9wdGlvbnN7XFxuXFx0Z3JpZC1hcmVhOiBvcHRpb25zO1xcblxcdGFsaWduLXNlbGY6IGVuZDtcXG59XFxuXFxuLyogUHJvamVjdCAqL1xcbi5wcm9qZWN0e1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnByb2plY3QtaGVhZGVye1xcblxcdGdyaWQtcm93OiAxO1xcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAwcHggNTBweCAwcHggMjBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWFyZWEtY29sb3IpO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG5cXHRjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxufVxcbi5wcm9qZWN0LXRpdGxle1xcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHR3aWR0aDogNzAlO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLnRhc2stY29udGFpbmVye1xcblxcdGdyaWQtcm93OiAyO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHRyb3ctZ2FwOiAyMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IyKTtcXG5cXHRvdmVyZmxvdy15OiBzY3JvbGw7XFxuXFxuXFx0LW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcblxcdHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG59XFxuLnRhc2stY29udGFpbmVyOjp3ZWJraXQtc2Nyb2xsYmFye1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LWxpc3QtaXRlbXtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDQwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdG1hcmdpbi10b3A6IDEwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdC1zaWRlYmFyLWNvbG9yKTtcXG5cXHRjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuXFx0b3BhY2l0eTogMC44O1xcblxcdGRpc3BsYXk6Z3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHRcXFwidGl0bGUgb3B0aW9uc1xcXCI7XFxuXFx0cGFkZGluZzogMHB4IDEwcHg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnByb2plY3Qtc2lkZWJhci10aXRsZXtcXG5cXHRncmlkLWFyZWE6IHRpdGxlO1xcblxcdGZvbnQtc2l6ZTogMS4yZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0anVzdGlmeS1zZWxmOiBzdGFydDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDcwJTtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcblxcblxcbi8qIEdlbmVyYWwgKi9cXG4uVUlCdXR0b257XFxuXFx0d2lkdGg6IGZpdC1jb250ZW50O1xcblxcdHBhZGRpbmc6IDAuNzVlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVlbTtcXG5cXHRmb250LXNpemU6IDAuNzVlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbi5ibG9jay1zY3JlZW57XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxufVxcbi5wcm9qZWN0LWNvbmZpZ3tcXG5cXHR3aWR0aDogNTAwcHg7XFxuXFx0aGVpZ2h0OiA0MDBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWFyZWEtY29sb3IpO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHRvcDogNTAlO1xcblxcdGxlZnQ6IDUwJTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHRcXFwiaW5wdXQgaW5wdXRcXFwiXFxuXFx0XFx0XFxcImNhbmNlbCBzYXZlXFxcIjtcXG5cXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdGFsaWduLWl0ZW1zOiBlbmQ7XFxufVxcblxcbi5zYXZlLXByb2plY3QtYnV0dG9ue1xcblxcdGdyaWQtYXJlYTogc2F2ZTtcXG5cXHRqdXN0aWZ5LXNlbGY6IGVuZDtcXG5cXHR3aWR0aDogMTAwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2F2ZS1idXR0b24tY29sb3IpO1xcblxcdGZvbnQtc2l6ZTogMWVtO1xcbn1cXG4uY2FuY2VsLXByb2plY3QtYnV0dG9ue1xcblxcdGdyaWQtYXJlYTogY2FuY2VsO1xcblxcdGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuXFx0d2lkdGg6IDEwMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbmNlbC1idXR0b24tY29sb3IpO1xcblxcdGZvbnQtc2l6ZTogMWVtO1xcbn1cXG4ucHJvamVjdC1uYW1le1xcblxcdGdyaWQtYXJlYTogaW5wdXQ7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiA0MHB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLnRhc2stY29uZmlne1xcblxcdHdpZHRoOiA2MDBweDtcXG5cXHRoZWlnaHQ6IDcwMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtYXJlYS1jb2xvcik7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHR0b3A6IDUwJTtcXG5cXHRsZWZ0OiA1MCU7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDFmciAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHRcXFwidGl0bGUgdGl0bGVcXFwiXFxuXFx0XFx0XFxcImRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uXFxcIlxcblxcdFxcdFxcXCJwcmlvcml0eSBkdWUtZGF0ZVxcXCJcXG5cXHRcXHRcXFwiY2FuY2VsIHNhdmVcXFwiO1xcblxcdGFsaWduLWl0ZW1zOiBlbmQ7XFxufVxcbi50YXNrLWNvbmZpZy10aXRsZXtcXG5cXHRncmlkLWFyZWE6IHRpdGxlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogNDBweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLnRhc2stY29uZmlnLWRlc2NyaXB0aW9ue1xcblxcdGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGZvbnQtc2l6ZTogMS4yZW07XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdHBhZGRpbmc6IDEwcHg7XFxufVxcbi50YXNrLWNvbmZpZy1wcmlvcml0eXtcXG5cXHRncmlkLWFyZWE6IHByaW9yaXR5O1xcblxcdGZvbnQtc2l6ZTogMWVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR3aWR0aDogNzAlO1xcblxcdGhlaWdodDogNDBweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4udGFzay1jb25maWctZHVlLWRhdGV7XFxuXFx0Z3JpZC1hcmVhOiBkdWUtZGF0ZTtcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LXNlbGY6IGVuZDtcXG5cXHR3aWR0aDogNzAlO1xcblxcdGhlaWdodDogNDBweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uc2F2ZS10YXNrLWJ1dHRvbntcXG5cXHRncmlkLWFyZWE6IHNhdmU7XFxuXFx0anVzdGlmeS1zZWxmOiBlbmQ7XFxuXFx0d2lkdGg6IDEwMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNhdmUtYnV0dG9uLWNvbG9yKTtcXG5cXHRmb250LXNpemU6IDFlbTtcXG5cXHRqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuLmNhbmNlbC10YXNrLWJ1dHRvbntcXG5cXHRncmlkLWFyZWE6IGNhbmNlbDtcXG5cXHRqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcblxcdHdpZHRoOiAxMDBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYW5jZWwtYnV0dG9uLWNvbG9yKTtcXG5cXHRmb250LXNpemU6IDFlbTtcXG5cXHRqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXG4gICdGSUxMJyAxLFxcbiAgJ3dnaHQnIDcwMCxcXG4gICdHUkFEJyAyMDAsXFxuICAnb3BzeicgMzA7XFxufVxcblxcblxcbi5tb3JlLW1lbnV7XFxuXFx0Z3JpZC1hcmVhOiBvcHRpb25zO1xcblxcdHdpZHRoOiAyMHB4O1xcblxcdGhlaWdodDogNDBweDtcXG5cXHRtYXJnaW4tcmlnaHQ6IDVweDtcXG5cXHRqdXN0aWZ5LXNlbGY6IGVuZDtcXG5cXHRwYWRkaW5nLWxlZnQ6IDdweDtcXG59XFxuLm1vcmUtbWVudS1saXN0e1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR3aWR0aDogMTAwcHg7XFxuXFx0aGVpZ2h0OiAxMDBweDtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMzZjNlNjM2NztcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAtNTAlKTtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdHotaW5kZXg6IDM7XFxufVxcbi5tb3JlLW1lbnUtaXRlbXtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDMwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGZvbnQtc2l6ZTogMC44ZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG5cXG4ubW9yZS1tZW51OmhvdmVye1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1vcmUtbWVudTpob3ZlciAubW9yZS1tZW51LWxpc3R7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5tb3JlLW1lbnUtaWNvbntcXG5cXHR3aWR0aDogNXB4O1xcblxcdGhlaWdodDogNXB4O1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdG1hcmdpbi10b3A6IDE4cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi5tb3JlLW1lbnUtaWNvbjo6YmVmb3Jle1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdGRpc3BsYXk6IGluaGVyaXQ7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHdpZHRoOiA1cHg7XFxuXFx0aGVpZ2h0OiA1cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMHB4KTtcXG59XFxuLm1vcmUtbWVudS1pY29uOjphZnRlcntcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRkaXNwbGF5OiBpbmhlcml0O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR3aWR0aDogNXB4O1xcblxcdGhlaWdodDogNXB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1cHgpO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0LWl0ZW06aG92ZXIgLm1vcmUtbWVudS1pY29uLCAudGFzazpob3ZlciAubW9yZS1tZW51LWljb257XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsMkJBQTJCO0NBQzNCLGdDQUFnQztDQUNoQyxxQkFBcUI7Q0FDckIsOEJBQThCO0NBQzlCLDRCQUE0QjtDQUM1Qix3Q0FBd0M7QUFDekM7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osU0FBUztDQUNULFVBQVU7Q0FDVixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsNEJBQTRCO0NBQzVCOzttQkFFa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLHdCQUF3QjtDQUN4Qix5QkFBeUI7Q0FDekIseUNBQXlDO0FBQzFDOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLHlDQUF5QztDQUN6QyxZQUFZO0NBQ1osV0FBVztDQUNYLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsYUFBYTtBQUNkOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIseUNBQXlDO0NBQ3pDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsV0FBVztDQUNYLHlCQUF5QjtDQUN6Qiw4QkFBOEI7Q0FDOUIsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixXQUFXO0NBQ1gsV0FBVztDQUNYLHVDQUF1QztDQUN2QyxrQkFBa0I7O0NBRWxCLHdCQUF3QjtDQUN4QixxQkFBcUI7Q0FDckIsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLFdBQVc7Q0FDWCxhQUFhO0NBQ2IseUJBQXlCO0NBQ3pCLDJDQUEyQztBQUM1Qzs7QUFFQSxTQUFTO0FBQ1Q7Q0FDQyxXQUFXO0NBQ1gseUNBQXlD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QkFBa0I7Q0FDbEIsV0FBVztDQUNYLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixhQUFhO0NBQ2IsYUFBYTtDQUNiLDJCQUEyQjtDQUMzQixtQkFBbUI7Q0FDbkIsaUNBQWlDO0NBQ2pDLGFBQWE7Q0FDYixVQUFVO0FBQ1g7QUFDQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQix5Q0FBeUM7Q0FDekMsd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0MsVUFBVTtDQUNWLFdBQVc7Q0FDWCxhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQix5Q0FBeUM7QUFDMUM7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsV0FBVztDQUNYLHlDQUF5QztDQUN6QyxrQkFBa0I7Q0FDbEIsOEJBQThCO0FBQy9CO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsV0FBVztDQUNYLHlDQUF5QztDQUN6QyxrQkFBa0I7Q0FDbEIsNEJBQTRCO0FBQzdCOztBQUVBO0NBQ0MsY0FBYztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcblxcdC0tYmFja2dyb3VuZC1jb2xvcjogIzI3MjY0MztcXG5cXHQtLXByb2plY3Qtc2lkZWJhci1jb2xvcjogI2UzZjZmNTtcXG5cXHQtLXRleHQtY29sb3I6ICNmZmZmZmY7XFxuXFx0LS1jYW5jZWwtYnV0dG9uLWNvbG9yOiAjZmY4YzhjO1xcblxcdC0tc2F2ZS1idXR0b24tY29sb3I6ICM2MGQwYjY7XFxuXFx0LS1jb250ZW50LWFyZWEtY29sb3I6IHJnYigyMzksIDIzNiwgMjQxKTtcXG59XFxuXFxuKiB7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5jb250YWluZXIge1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgOGZyO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogOHZoIDkydmg7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHRcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG5cXHRcXHRcXFwic2lkZWJhciBjb250ZW50XFxcIjtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG5cXHRmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4uaGVhZGVye1xcblxcdGdyaWQtYXJlYTogaGVhZGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMzBweDtcXG59XFxuXFxuLnNpZGViYXJ7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGdyaWQtYXJlYTogc2lkZWJhcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0cGFkZGluZzogMCAxMHB4IDEwcHggMTBweDtcXG59XFxuLnNpZGViYXItaGVhZGVye1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGhlaWdodDogMjYlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMzZTNjNmI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLnByb2plY3QtbGlzdHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0aGVpZ2h0OiA3NCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKGJhY2tncm91bmQtY29sb3IpO1xcblxcdG92ZXJmbG93LXk6IHNjcm9sbDtcXG5cXG5cXHQtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxuXFx0c2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxufVxcbi5wcm9qZWN0Ojp3ZWJraXQtc2Nyb2xsYmFye1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jb250ZW50e1xcblxcdGdyaWQtYXJlYTogY29udGVudDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4IDAgMCAwO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtYXJlYS1jb2xvcik7XFxufVxcblxcbi8qIFRhc2sgKi9cXG4udGFza3tcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICBcXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0Y29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0anVzdGlmeS1pdGVtczogc3RhcnQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMWZyIDgwcHg7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuXFx0XFx0XFxcInRpdGxlIGRhdGUgcHJpb3JpdHkgcHJpb3JpdHlcXFwiXFxuXFx0XFx0XFxcImRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIG9wdGlvbnNcXFwiO1xcblxcdHJvdy1nYXA6IDEwcHg7XFxufVxcbi50YXNrLXRpdGxle1xcblxcdGdyaWQtYXJlYTogdGl0bGU7XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLnRhc2stZHVlLWRhdGV7XFxuXFx0Z3JpZC1hcmVhOiBkYXRlO1xcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG4udGFzay1wcmlvcml0eXtcXG5cXHRncmlkLWFyZWE6IHByaW9yaXR5O1xcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG4udGFzay1kZXNjcmlwdGlvbntcXG5cXHRncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcblxcdGZvbnQtc2l6ZTogMS4yZW07XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcbn1cXG4udGFzay1vcHRpb25ze1xcblxcdGdyaWQtYXJlYTogb3B0aW9ucztcXG5cXHRhbGlnbi1zZWxmOiBlbmQ7XFxufVxcblxcbi8qIFByb2plY3QgKi9cXG4ucHJvamVjdHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wcm9qZWN0LWhlYWRlcntcXG5cXHRncmlkLXJvdzogMTtcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMHB4IDUwcHggMHB4IDIwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1hcmVhLWNvbG9yKTtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuXFx0Y29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG4ucHJvamVjdC10aXRsZXtcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0d2lkdGg6IDcwJTtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi50YXNrLWNvbnRhaW5lcntcXG5cXHRncmlkLXJvdzogMjtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0cm93LWdhcDogMjBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yMik7XFxuXFx0b3ZlcmZsb3cteTogc2Nyb2xsO1xcblxcblxcdC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXG5cXHRzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxufVxcbi50YXNrLWNvbnRhaW5lcjo6d2Via2l0LXNjcm9sbGJhcntcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0LWl0ZW17XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiA0MHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRtYXJnaW4tdG9wOiAxMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3Qtc2lkZWJhci1jb2xvcik7XFxuXFx0Y29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcblxcdG9wYWNpdHk6IDAuODtcXG5cXHRkaXNwbGF5OmdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMWZyO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuXFx0XFx0XFxcInRpdGxlIG9wdGlvbnNcXFwiO1xcblxcdHBhZGRpbmc6IDBweCAxMHB4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wcm9qZWN0LXNpZGViYXItdGl0bGV7XFxuXFx0Z3JpZC1hcmVhOiB0aXRsZTtcXG5cXHRmb250LXNpemU6IDEuMmVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiA3MCU7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5cXG5cXG4vKiBHZW5lcmFsICovXFxuLlVJQnV0dG9ue1xcblxcdHdpZHRoOiBmaXQtY29udGVudDtcXG5cXHRwYWRkaW5nOiAwLjc1ZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41ZW07XFxuXFx0Zm9udC1zaXplOiAwLjc1ZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG5cXG4uYmxvY2stc2NyZWVue1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xcbn1cXG4ucHJvamVjdC1jb25maWd7XFxuXFx0d2lkdGg6IDUwMHB4O1xcblxcdGhlaWdodDogNDAwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1hcmVhLWNvbG9yKTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR0b3A6IDUwJTtcXG5cXHRsZWZ0OiA1MCU7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuXFx0XFx0XFxcImlucHV0IGlucHV0XFxcIlxcblxcdFxcdFxcXCJjYW5jZWwgc2F2ZVxcXCI7XFxuXFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHRhbGlnbi1pdGVtczogZW5kO1xcbn1cXG5cXG4uc2F2ZS1wcm9qZWN0LWJ1dHRvbntcXG5cXHRncmlkLWFyZWE6IHNhdmU7XFxuXFx0anVzdGlmeS1zZWxmOiBlbmQ7XFxuXFx0d2lkdGg6IDEwMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNhdmUtYnV0dG9uLWNvbG9yKTtcXG5cXHRmb250LXNpemU6IDFlbTtcXG59XFxuLmNhbmNlbC1wcm9qZWN0LWJ1dHRvbntcXG5cXHRncmlkLWFyZWE6IGNhbmNlbDtcXG5cXHRqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcblxcdHdpZHRoOiAxMDBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYW5jZWwtYnV0dG9uLWNvbG9yKTtcXG5cXHRmb250LXNpemU6IDFlbTtcXG59XFxuLnByb2plY3QtbmFtZXtcXG5cXHRncmlkLWFyZWE6IGlucHV0O1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogNDBweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi50YXNrLWNvbmZpZ3tcXG5cXHR3aWR0aDogNjAwcHg7XFxuXFx0aGVpZ2h0OiA3MDBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWFyZWEtY29sb3IpO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0dG9wOiA1MCU7XFxuXFx0bGVmdDogNTAlO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnIgMWZyO1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuXFx0XFx0XFxcInRpdGxlIHRpdGxlXFxcIlxcblxcdFxcdFxcXCJkZXNjcmlwdGlvbiBkZXNjcmlwdGlvblxcXCJcXG5cXHRcXHRcXFwicHJpb3JpdHkgZHVlLWRhdGVcXFwiXFxuXFx0XFx0XFxcImNhbmNlbCBzYXZlXFxcIjtcXG5cXHRhbGlnbi1pdGVtczogZW5kO1xcbn1cXG4udGFzay1jb25maWctdGl0bGV7XFxuXFx0Z3JpZC1hcmVhOiB0aXRsZTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDQwcHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi50YXNrLWNvbmZpZy1kZXNjcmlwdGlvbntcXG5cXHRncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRmb250LXNpemU6IDEuMmVtO1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcbn1cXG4udGFzay1jb25maWctcHJpb3JpdHl7XFxuXFx0Z3JpZC1hcmVhOiBwcmlvcml0eTtcXG5cXHRmb250LXNpemU6IDFlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0d2lkdGg6IDcwJTtcXG5cXHRoZWlnaHQ6IDQwcHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLnRhc2stY29uZmlnLWR1ZS1kYXRle1xcblxcdGdyaWQtYXJlYTogZHVlLWRhdGU7XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1zZWxmOiBlbmQ7XFxuXFx0d2lkdGg6IDcwJTtcXG5cXHRoZWlnaHQ6IDQwcHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLnNhdmUtdGFzay1idXR0b257XFxuXFx0Z3JpZC1hcmVhOiBzYXZlO1xcblxcdGp1c3RpZnktc2VsZjogZW5kO1xcblxcdHdpZHRoOiAxMDBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zYXZlLWJ1dHRvbi1jb2xvcik7XFxuXFx0Zm9udC1zaXplOiAxZW07XFxuXFx0anVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcbi5jYW5jZWwtdGFzay1idXR0b257XFxuXFx0Z3JpZC1hcmVhOiBjYW5jZWw7XFxuXFx0anVzdGlmeS1zZWxmOiBzdGFydDtcXG5cXHR3aWR0aDogMTAwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FuY2VsLWJ1dHRvbi1jb2xvcik7XFxuXFx0Zm9udC1zaXplOiAxZW07XFxuXFx0anVzdGlmeS1zZWxmOiBzdGFydDtcXG59XFxuXFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XFxuICAnRklMTCcgMSxcXG4gICd3Z2h0JyA3MDAsXFxuICAnR1JBRCcgMjAwLFxcbiAgJ29wc3onIDMwO1xcbn1cXG5cXG5cXG4ubW9yZS1tZW51e1xcblxcdGdyaWQtYXJlYTogb3B0aW9ucztcXG5cXHR3aWR0aDogMjBweDtcXG5cXHRoZWlnaHQ6IDQwcHg7XFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxuXFx0anVzdGlmeS1zZWxmOiBlbmQ7XFxuXFx0cGFkZGluZy1sZWZ0OiA3cHg7XFxufVxcbi5tb3JlLW1lbnUtbGlzdHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0d2lkdGg6IDEwMHB4O1xcblxcdGhlaWdodDogMTAwcHg7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2YzZTYzNjc7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgLTUwJSk7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHR6LWluZGV4OiAzO1xcbn1cXG4ubW9yZS1tZW51LWl0ZW17XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAzMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRmb250LXNpemU6IDAuOGVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLm1vcmUtbWVudTpob3ZlcntcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tb3JlLW1lbnU6aG92ZXIgLm1vcmUtbWVudS1saXN0e1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ubW9yZS1tZW51LWljb257XFxuXFx0d2lkdGg6IDVweDtcXG5cXHRoZWlnaHQ6IDVweDtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHRtYXJnaW4tdG9wOiAxOHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4ubW9yZS1tZW51LWljb246OmJlZm9yZXtcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRkaXNwbGF5OiBpbmhlcml0O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR3aWR0aDogNXB4O1xcblxcdGhlaWdodDogNXB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTBweCk7XFxufVxcbi5tb3JlLW1lbnUtaWNvbjo6YWZ0ZXJ7XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0ZGlzcGxheTogaW5oZXJpdDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0d2lkdGg6IDVweDtcXG5cXHRoZWlnaHQ6IDVweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNXB4KTtcXG59XFxuXFxuLnByb2plY3QtbGlzdC1pdGVtOmhvdmVyIC5tb3JlLW1lbnUtaWNvbiwgLnRhc2s6aG92ZXIgLm1vcmUtbWVudS1pY29ue1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9lZmZlY3RzLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IHsgVGFzaywgUHJvamVjdCB9IGZyb20gJy4vbW9kZWwuanMnO1xuaW1wb3J0IHsgcHJvamVjdFZpZXcsIHNpZGViYXJWaWV3LCB0YXNrQ29uZmlnVmlld30gZnJvbSBcIi4vdmlld1wiO1xuaW1wb3J0IHsgY29tcGFyZUFzYyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcblxuXG5jb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuY29uc3Qgc3RhdGUgPSB7XG4gICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgY29udGVudDogY29udGVudCxcbiAgICBwcm9qZWN0czogW10sXG4gICAgY3VycmVudFByb2plY3Q6IG51bGwsXG4gICAgaW5ib3hQcm9qZWN0OiBudWxsLFxuICAgIHRvZGF5UHJvamVjdDogbnVsbCxcbiAgICBtZXRhZGF0YToge1xuICAgICAgICBjdXJyZW50UGlkOiBudWxsLFxuICAgICAgICBpbmJveFBpZDogbnVsbCxcbiAgICAgICAgdG9kYXlQaWQ6IG51bGxcbiAgICB9XG59XG5cbk9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaChrZXkgPT4ge1xuICAgIGlmKGtleSAhPT0gJ21ldGFkYXRhJyl7XG4gICAgICAgIHN0YXRlLnByb2plY3RzLnB1c2goUHJvamVjdC5mcm9tSnNvbihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSk7XG4gICAgfSBcbn0pO1xuc3RhdGUucHJvamVjdHMuc29ydCgoYSwgYikgPT4gYS5waWQgLSBiLnBpZCk7XG5cblxuXG5pZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbWV0YWRhdGEnKSl7XG4gICAgc3RhdGUubWV0YWRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtZXRhZGF0YScpKTtcbiAgICBzdGF0ZS5jdXJyZW50UHJvamVjdCA9IHN0YXRlLnByb2plY3RzLmZpbmQocCA9PiBwLnBpZCA9PT0gc3RhdGUubWV0YWRhdGEuY3VycmVudFBpZCk7XG4gICAgc3RhdGUuaW5ib3hQcm9qZWN0ID0gc3RhdGUucHJvamVjdHMuZmluZChwID0+IHAucGlkID09PSBzdGF0ZS5tZXRhZGF0YS5pbmJveFBpZCk7XG4gICAgc3RhdGUudG9kYXlQcm9qZWN0ID0gc3RhdGUucHJvamVjdHMuZmluZChwID0+IHAucGlkID09PSBzdGF0ZS5tZXRhZGF0YS50b2RheVBpZCk7XG4gICAgY29uc29sZS5sb2coXCJmb3VuZCBtZXRhZGF0YVwiKTtcbn1cblxuaWYoc3RhdGUuaW5ib3hQcm9qZWN0ID09PSBudWxsKXtcbiAgICBzdGF0ZS5pbmJveFByb2plY3QgPSBuZXcgUHJvamVjdCgnSW5ib3gnKTtcbiAgICBzdGF0ZS5wcm9qZWN0cy5wdXNoKHN0YXRlLmluYm94UHJvamVjdCk7XG4gICAgc3RhdGUubWV0YWRhdGEuaW5ib3hQaWQgPSBzdGF0ZS5pbmJveFByb2plY3QucGlkO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0YXRlLmluYm94UHJvamVjdC5waWQsIEpTT04uc3RyaW5naWZ5KHN0YXRlLmluYm94UHJvamVjdCkpO1xuICAgIGNvbnNvbGUubG9nKFwiSW5ib3ggcHJvamVjdCBjcmVhdGVkLlwiKTtcbn1cblxuaWYoc3RhdGUudG9kYXlQcm9qZWN0ID09PSBudWxsKXtcbiAgICBzdGF0ZS50b2RheVByb2plY3QgPSBuZXcgUHJvamVjdCgnVG9kYXknKTtcbiAgICBzdGF0ZS5wcm9qZWN0cy5wdXNoKHN0YXRlLnRvZGF5UHJvamVjdCk7XG4gICAgc3RhdGUubWV0YWRhdGEudG9kYXlQaWQgPSBzdGF0ZS50b2RheVByb2plY3QucGlkO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0YXRlLnRvZGF5UHJvamVjdC5waWQsIEpTT04uc3RyaW5naWZ5KHN0YXRlLnRvZGF5UHJvamVjdCkpO1xuICAgIGNvbnNvbGUubG9nKFwiVG9kYXkgcHJvamVjdCBjcmVhdGVkLlwiKTtcbn1cblxuc3RhdGUudG9kYXlQcm9qZWN0LmNsZWFyVGFza3MoKTtcbnN0YXRlLnByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgaWYocHJvamVjdC5waWQgIT09IHN0YXRlLnRvZGF5UHJvamVjdC5waWQpe1xuICAgICAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBpZih0YXNrLmR1ZURhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCkgPT09IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCkpe1xuICAgICAgICAgICAgICAgIHN0YXRlLnRvZGF5UHJvamVjdC5hZGRUYXNrKHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59KTtcblxuXG5zaWRlYmFyVmlldyhjb250YWluZXIpO1xuaWYoc3RhdGUuY3VycmVudFByb2plY3Qpe1xuICAgIHByb2plY3RWaWV3KGNvbnRlbnQpO1xufVxuXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbWV0YWRhdGEnLCBKU09OLnN0cmluZ2lmeShzdGF0ZS5tZXRhZGF0YSkpO1xuXG5leHBvcnQgeyBzdGF0ZSB9OyIsImNsYXNzIFRhc2t7XG5cdHRpdGxlO1xuXHRkZXNjcmlwdGlvbjtcblx0ZHVlRGF0ZTtcblx0cHJpb3JpdHk7XG5cdGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpe1xuXHRcdHRoaXMudGl0bGUgPSB0aXRsZTtcblx0XHR0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG5cdFx0dGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcblx0XHR0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cdH1cblxuXHRnZXQgdGl0bGUoKXtcblx0XHRyZXR1cm4gdGhpcy50aXRsZTtcblx0fVxuXHRnZXQgZGVzY3JpcHRpb24oKXtcblx0XHRyZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcblx0fVxuXHRnZXQgZHVlRGF0ZSgpe1xuXHRcdHJldHVybiB0aGlzLmR1ZURhdGU7XG5cdH1cblx0Z2V0IHByaW9yaXR5KCl7XG5cdFx0cmV0dXJuIHRoaXMucHJpb3JpdHk7XG5cdH1cblxuXHR0b0pTT04oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGl0bGU6IHRoaXMudGl0bGUsXG5cdFx0XHRkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcblx0XHRcdGR1ZURhdGU6IHRoaXMuZHVlRGF0ZS50b1N0cmluZygpLFxuXHRcdFx0cHJpb3JpdHk6IHRoaXMucHJpb3JpdHksXG5cdFx0fTtcblx0fVxuXG5cdC8vdGFrZXMgYSBqYXNvbiBzdHJpbmcgYW5kIHJldHVybnMgYSB0YXNrIG9iamVjdFxuXHRzdGF0aWMgZnJvbUpzb24oanNvbil7XG5cdFx0Y29uc3Qgb2JqID0gSlNPTi5wYXJzZShqc29uKTtcblxuXHRcdGNvbnN0IHRhc2sgPSBuZXcgVGFzayhvYmoudGl0bGUsIG9iai5kZXNjcmlwdGlvbiwgbmV3IERhdGUob2JqLmR1ZURhdGUpLCBvYmoucHJpb3JpdHkpO1xuXHRcdHJldHVybiB0YXNrO1xuXG5cdH1cbn1cblxuY2xhc3MgUHJvamVjdHtcblx0bmFtZTtcblx0dGFza3M7XG5cdCNwaWQ7XG5cdGNvbnN0cnVjdG9yKG5hbWUpe1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy4jcGlkID0gRGF0ZS5ub3coKTtcblx0XHR0aGlzLnRhc2tzID0gW107XG5cdH1cblx0XG5cdGdldCBuYW1lKCl7XG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcblx0fVxuXHRnZXQgdGFza3MoKXtcblx0XHRyZXR1cm4gdGhpcy50YXNrcztcblx0fVxuXHRnZXQgcGlkKCl7XG5cdFx0cmV0dXJuIHRoaXMuI3BpZDtcblx0fVxuXG5cdGFkZFRhc2sodGFzayl7XG5cdFx0dGhpcy50YXNrcy5wdXNoKHRhc2spO1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuI3BpZCwgSlNPTi5zdHJpbmdpZnkodGhpcykpO1xuXHR9XG5cdHJlbW92ZVRhc2sodGFzayl7XG5cdFx0dGhpcy50YXNrcy5zcGxpY2UodGhpcy50YXNrcy5pbmRleE9mKHRhc2spLCAxKTtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLiNwaWQsIEpTT04uc3RyaW5naWZ5KHRoaXMpKTtcblx0fVxuXHRjbGVhclRhc2tzKCl7XG5cdFx0dGhpcy50YXNrcyA9IFtdO1xuXHR9XG5cdGdldFRhc2soaW5kZXgpe1xuXHRcdHJldHVybiB0aGlzLnRhc2tzW2luZGV4XTtcblx0fVxuXHR0b0pTT04oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmFtZTogdGhpcy5uYW1lLFxuXHRcdFx0cGlkOiB0aGlzLiNwaWQsXG5cdFx0XHR0YXNrczogdGhpcy50YXNrcyxcblx0XHR9O1xuXHR9XG5cblx0I3NldFByb2plY3RJZChwaWQpe1xuXHRcdHRoaXMuI3BpZCA9IHBpZDtcblx0fVxuXG5cdC8vdGFrZXMgYSBqYXNvbiBzdHJpbmcgYW5kIHJldHVybnMgYSBwcm9qZWN0IG9iamVjdFxuXHRzdGF0aWMgZnJvbUpzb24oanNvbil7XG5cdFx0Y29uc3Qgb2JqID0gSlNPTi5wYXJzZShqc29uKTtcblxuXHRcdGNvbnN0IHByID0gbmV3IFByb2plY3Qob2JqLm5hbWUpO1xuXHRcdHByLiNzZXRQcm9qZWN0SWQob2JqLnBpZCk7XG5cdFx0b2JqLnRhc2tzLmZvckVhY2godGFzayA9PiB7IHByLmFkZFRhc2soVGFzay5mcm9tSnNvbihKU09OLnN0cmluZ2lmeSh0YXNrKSkpOyB9KTtcblx0XHRyZXR1cm4gcHI7XG5cdH1cbn1cblxuXG5leHBvcnQgeyBUYXNrLCBQcm9qZWN0IH07IiwiaW1wb3J0IHsgVGFzaywgUHJvamVjdCB9IGZyb20gJy4vbW9kZWwuanMnO1xuaW1wb3J0IHsgc3RhdGUgfSBmcm9tICcuL2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0ICcuL2VmZmVjdHMuY3NzJztcblxuZnVuY3Rpb24gdGFza1ZpZXcodGFzaywgcGFyZW50KXtcbiAgICBjb25zdCB0YXNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2snLCAnZmFkZS1pbicpO1xuXG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuICAgIHRhc2tUaXRsZS5pbm5lckhUTUwgPSB0YXNrLnRpdGxlO1xuXG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcbiAgICB0YXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjcmlwdGlvbicpO1xuICAgIHRhc2tEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSB0YXNrLmRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG4gICAgdGFza0R1ZURhdGUuY2xhc3NMaXN0LmFkZCgndGFzay1kdWUtZGF0ZScpO1xuICAgIHRhc2tEdWVEYXRlLmlubmVySFRNTCA9IFwiRHVlIGRhdGU6IFwiICsgdGFzay5kdWVEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuXG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndGFzay1wcmlvcml0eScpO1xuICAgIHRhc2tQcmlvcml0eS5pbm5lckhUTUwgPSBcIlByaW9yaXR5OiBcIiArIHRhc2sucHJpb3JpdHk7XG5cblxuICAgIGNvbnN0IG1vcmVNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9yZU1lbnUuY2xhc3NMaXN0LmFkZCgndGFzay1vcHRpb25zJywgJ21vcmUtbWVudScpO1xuICAgIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKG1vcmVNZW51KTtcblxuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb3JlTWVudS5hcHBlbmRDaGlsZChpY29uKTtcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ21vcmUtbWVudS1pY29uJyk7XG5cblxuICAgIGNvbnN0IG1vcmVNZW51TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vcmVNZW51LmFwcGVuZENoaWxkKG1vcmVNZW51TGlzdCk7XG4gICAgbW9yZU1lbnVMaXN0LmNsYXNzTGlzdC5hZGQoJ21vcmUtbWVudS1saXN0JywgJ2ZhZGUtaW4nKTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1vcmVNZW51TGlzdC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcmVzcy1lZmZlY3QnLCdtb3JlLW1lbnUtaXRlbScpO1xuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHRhc2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZhZGUtb3V0Jyk7XG4gICAgICAgIHRhc2tFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgICAgIHN0YXRlLmN1cnJlbnRQcm9qZWN0LnJlbW92ZVRhc2sodGFzaylcbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZCh0YXNrRWxlbWVudCk7XG4gICAgICAgICAgICBpZih0YXNrLmR1ZURhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCkgPT09IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCkpe1xuICAgICAgICAgICAgICAgIHN0YXRlLnRvZGF5UHJvamVjdC5yZW1vdmVUYXNrKHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtb3JlTWVudUxpc3QuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcmVzcy1lZmZlY3QnLCdtb3JlLW1lbnUtaXRlbScpO1xuICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHRhc2tDb25maWdWaWV3KHt0YXNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza1RpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0R1ZURhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHl9LCAnZWRpdCcpO1xuICAgIH0pO1xuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gcHJvamVjdFZpZXcocGFyZW50KXtcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcblxuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0RWxlbWVudC5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcbiAgICBwcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaGVhZGVyJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKTtcbiAgICBwcm9qZWN0VGl0bGUuaW5uZXJIVE1MID0gc3RhdGUuY3VycmVudFByb2plY3QubmFtZTtcblxuICAgIGlmKHN0YXRlLmN1cnJlbnRQcm9qZWN0LnBpZCAhPT0gc3RhdGUubWV0YWRhdGEudG9kYXlQaWQpe1xuICAgICAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG4gICAgICAgIGFkZFRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnVUlCdXR0b24nLCAncHJlc3MtZWZmZWN0Jyk7XG4gICAgICAgIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuICAgICAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGFza0NvbmZpZ1ZpZXcodGFza0NvbnRhaW5lciwgJ2NyZWF0ZScsIHByb2plY3RFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RFbGVtZW50LmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXInKTtcbiAgICBzdGF0ZS5jdXJyZW50UHJvamVjdC50YXNrcy5mb3JFYWNoKHRhc2sgPT4geyB0YXNrVmlldyh0YXNrLCB0YXNrQ29udGFpbmVyKSB9KTtcblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RTaWRlYmFyVmlldyhwcm9qZWN0LCBwYXJlbnQpe1xuICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saXN0LWl0ZW0nKTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0RWxlbWVudC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXNpZGViYXItdGl0bGUnKTtcbiAgICBwcm9qZWN0VGl0bGUuaW5uZXJIVE1MID0gcHJvamVjdC5uYW1lO1xuXG4gICAgcHJvamVjdEVsZW1lbnQub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgaWYoc3RhdGUuY3VycmVudFByb2plY3QucGlkID09PSBwcm9qZWN0LnBpZCl7IHJldHVybjsgfVxuICAgICAgICBpZihzdGF0ZS5wcm9qZWN0RWxlbWVudCl7XG4gICAgICAgICAgICBzdGF0ZS5wcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlWydwcm9qZWN0RWxlbWVudCddID0gcHJvamVjdEVsZW1lbnQ7XG4gICAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XG4gICAgICAgIHN0YXRlLmN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgaWYoc3RhdGUuY29udGVudC5maXJzdENoaWxkKXtcbiAgICAgICAgICAgIHN0YXRlLmNvbnRlbnQucmVtb3ZlQ2hpbGQoc3RhdGUuY29udGVudC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0VmlldyhzdGF0ZS5jb250ZW50KTtcblxuICAgICAgICBzdGF0ZS5tZXRhZGF0YS5jdXJyZW50UGlkID0gcHJvamVjdC5waWQ7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtZXRhZGF0YScsIEpTT04uc3RyaW5naWZ5KHN0YXRlLm1ldGFkYXRhKSk7XG4gICAgfTtcblxuXG4gICAgaWYocHJvamVjdC5waWQgIT09IHN0YXRlLm1ldGFkYXRhLmluYm94UGlkICYmIHByb2plY3QucGlkICE9PSBzdGF0ZS5tZXRhZGF0YS50b2RheVBpZCl7XG4gICAgICAgIGNvbnN0IG1vcmVNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vcmVNZW51LmNsYXNzTGlzdC5hZGQoJ21vcmUtbWVudScpO1xuICAgICAgICBwcm9qZWN0RWxlbWVudC5hcHBlbmRDaGlsZChtb3JlTWVudSk7XG5cbiAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtb3JlTWVudS5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdtb3JlLW1lbnUtaWNvbicpO1xuXG5cbiAgICAgICAgY29uc3QgbW9yZU1lbnVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vcmVNZW51LmFwcGVuZENoaWxkKG1vcmVNZW51TGlzdCk7XG4gICAgICAgIG1vcmVNZW51TGlzdC5jbGFzc0xpc3QuYWRkKCdtb3JlLW1lbnUtbGlzdCcsICdmYWRlLWluJyk7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG1vcmVNZW51TGlzdC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJlc3MtZWZmZWN0JywnbW9yZS1tZW51LWl0ZW0nKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5wcm9qZWN0cyA9IHN0YXRlLnByb2plY3RzLmZpbHRlcihwID0+IHAucGlkICE9PSBwcm9qZWN0LnBpZCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9qZWN0LnBpZCk7XG4gICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocHJvamVjdEVsZW1lbnQpO1xuICAgICAgICAgICAgc3RhdGUuY3VycmVudFByb2plY3QgPSBzdGF0ZS5pbmJveFByb2plY3Q7XG4gICAgICAgICAgICBzdGF0ZS5tZXRhZGF0YS5jdXJyZW50UGlkID0gc3RhdGUuY3VycmVudFByb2plY3QucGlkO1xuICAgICAgICAgICAgaWYoc3RhdGUuY29udGVudC5maXJzdENoaWxkKXtcbiAgICAgICAgICAgICAgICBzdGF0ZS5jb250ZW50LnJlbW92ZUNoaWxkKHN0YXRlLmNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9qZWN0VmlldyhzdGF0ZS5jb250ZW50KTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbWV0YWRhdGEnLCBKU09OLnN0cmluZ2lmeShzdGF0ZS5tZXRhZGF0YSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG1vcmVNZW51TGlzdC5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICAgICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcmVzcy1lZmZlY3QnLCdtb3JlLW1lbnUtaXRlbScpO1xuICAgICAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHByb2plY3RDb25maWdWaWV3KHsgcHJvamVjdCwgc2lkZWJhcjogcHJvamVjdFRpdGxlIH0sICdlZGl0Jyk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gc2lkZWJhckhlYWRlclZpZXcocExpc3QsIHBhcmVudCl7XG4gICAgY29uc3Qgc2lkZWJhckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChzaWRlYmFySGVhZGVyKTtcbiAgICBzaWRlYmFySGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItaGVhZGVyJyk7XG4gICAgcHJvamVjdFNpZGViYXJWaWV3KHN0YXRlLmluYm94UHJvamVjdCwgc2lkZWJhckhlYWRlcik7XG4gICAgcHJvamVjdFNpZGViYXJWaWV3KHN0YXRlLnRvZGF5UHJvamVjdCwgc2lkZWJhckhlYWRlcik7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2lkZWJhckhlYWRlci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ1VJQnV0dG9uJywgJ3ByZXNzLWVmZmVjdCcpO1xuICAgIGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3RDb25maWdWaWV3KHBMaXN0LCAnY3JlYXRlJyk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNpZGViYXJWaWV3KHBhcmVudCl7XG4gICAgY29uc3Qgc2lkZWJhckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG4gICAgXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3QnKTtcbiAgICBzdGF0ZS5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBpZihwcm9qZWN0LnBpZCAhPT0gc3RhdGUubWV0YWRhdGEuaW5ib3hQaWQgJiYgcHJvamVjdC5waWQgIT09IHN0YXRlLm1ldGFkYXRhLnRvZGF5UGlkKXtcbiAgICAgICAgICAgIHByb2plY3RTaWRlYmFyVmlldyhwcm9qZWN0LCBwcm9qZWN0TGlzdClcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIHNpZGViYXJIZWFkZXJWaWV3KHByb2plY3RMaXN0LCBzaWRlYmFyRWxlbWVudCk7XG4gICAgc2lkZWJhckVsZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdExpc3QpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChzaWRlYmFyRWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RDb25maWdWaWV3KGNvbnRleHQsIG1vZGUpe1xuICAgIGNvbnN0IHNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNjcmVlbi5jbGFzc0xpc3QuYWRkKCdibG9jay1zY3JlZW4nKTtcblxuICAgIGNvbnN0IHByb2plY3RDb25maWdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2NyZWVuLmFwcGVuZENoaWxkKHByb2plY3RDb25maWdFbGVtZW50KTtcbiAgICBwcm9qZWN0Q29uZmlnRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbmZpZycpO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3RDb25maWdFbGVtZW50LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICBwcm9qZWN0TmFtZS5wbGFjZWhvbGRlciA9ICdQcm9qZWN0IE5hbWUnO1xuICAgIGlmKG1vZGUgPT09ICdlZGl0Jyl7XG4gICAgICAgIHByb2plY3ROYW1lLnZhbHVlID0gY29udGV4dC5wcm9qZWN0Lm5hbWU7XG4gICAgfVxuXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdENvbmZpZ0VsZW1lbnQuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcbiAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnVUlCdXR0b24nLCAncHJlc3MtZWZmZWN0JywgJ2NhbmNlbC1wcm9qZWN0LWJ1dHRvbicpO1xuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc3RhdGUuY29udGFpbmVyLnJlbW92ZUNoaWxkKHNjcmVlbik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdENvbmZpZ0VsZW1lbnQuYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbik7XG4gICAgc2F2ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdVSUJ1dHRvbicsICdwcmVzcy1lZmZlY3QnLCAnc2F2ZS1wcm9qZWN0LWJ1dHRvbicpO1xuICAgIHNhdmVCdXR0b24udGV4dENvbnRlbnQgPSAnU2F2ZSc7XG4gICAgc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmKG1vZGUgPT09ICdjcmVhdGUnKXtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChgJHtwcm9qZWN0TmFtZS52YWx1ZX1gKTtcbiAgICAgICAgICAgIHN0YXRlLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0LnBpZCwgSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpO1xuICAgICAgICAgICAgc3RhdGUuY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICAgICAgaWYoc3RhdGUuY29udGVudC5maXJzdENoaWxkKXtcbiAgICAgICAgICAgICAgICBzdGF0ZS5jb250ZW50LnJlbW92ZUNoaWxkKHN0YXRlLmNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9qZWN0U2lkZWJhclZpZXcocHJvamVjdCwgY29udGV4dCk7XG4gICAgICAgICAgICBwcm9qZWN0VmlldyhzdGF0ZS5jb250ZW50KTtcblxuICAgICAgICAgICAgLy9VcGRhdGluZyBtZXRhZGF0YS5cbiAgICAgICAgICAgIHN0YXRlLm1ldGFkYXRhLmN1cnJlbnRQaWQgPSBwcm9qZWN0LnBpZDtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtZXRhZGF0YScsIEpTT04uc3RyaW5naWZ5KHN0YXRlLm1ldGFkYXRhKSk7XG5cbiAgICAgICAgfSBlbHNlIGlmKG1vZGUgPT09ICdlZGl0Jyl7XG4gICAgICAgICAgICBjb250ZXh0LnByb2plY3QubmFtZSA9IHByb2plY3ROYW1lLnZhbHVlO1xuICAgICAgICAgICAgY29udGV4dC5zaWRlYmFyLmlubmVySFRNTCA9IHByb2plY3ROYW1lLnZhbHVlO1xuICAgICAgICAgICAgaWYoc3RhdGUuY3VycmVudFByb2plY3QucGlkID09PSBjb250ZXh0LnByb2plY3QucGlkKXtcbiAgICAgICAgICAgICAgICBpZihzdGF0ZS5jb250ZW50LmZpcnN0Q2hpbGQpe1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5jb250ZW50LnJlbW92ZUNoaWxkKHN0YXRlLmNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb2plY3RWaWV3KHN0YXRlLmNvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY29udGV4dC5wcm9qZWN0LnBpZCwgSlNPTi5zdHJpbmdpZnkoY29udGV4dC5wcm9qZWN0KSk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZS5jb250YWluZXIucmVtb3ZlQ2hpbGQoc2NyZWVuKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcblxuXG5cbiAgICBzdGF0ZS5jb250YWluZXIuYXBwZW5kQ2hpbGQoc2NyZWVuKTtcbn1cblxuZnVuY3Rpb24gdGFza0NvbmZpZ1ZpZXcoY29udGV4dCwgbW9kZSl7XG4gICAgY29uc3Qgc2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrLXNjcmVlbicpO1xuICAgIFxuICAgIGNvbnN0IHRhc2tDb25maWdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2NyZWVuLmFwcGVuZENoaWxkKHRhc2tDb25maWdFbGVtZW50KTtcbiAgICB0YXNrQ29uZmlnRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbmZpZycpO1xuICAgIFxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza0NvbmZpZ0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay1jb25maWctdGl0bGUnKTtcbiAgICB0YXNrVGl0bGUucGxhY2Vob2xkZXIgPSAnVGFzayBUaXRsZSc7XG4gICAgaWYobW9kZSA9PT0gJ2VkaXQnKXtcbiAgICAgICAgdGFza1RpdGxlLnZhbHVlID0gY29udGV4dC50YXNrLnRpdGxlO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIHRhc2tDb25maWdFbGVtZW50LmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG4gICAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29uZmlnLWRlc2NyaXB0aW9uJyk7XG4gICAgdGFza0Rlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gJ1Rhc2sgRGVzY3JpcHRpb24nO1xuICAgIGlmKG1vZGUgPT09ICdlZGl0Jyl7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi52YWx1ZSA9IGNvbnRleHQudGFzay5kZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRhc2tDb25maWdFbGVtZW50LmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcbiAgICB0YXNrRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbmZpZy1kdWUtZGF0ZScpO1xuICAgIHRhc2tEdWVEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgY29uc3QgdG9kYXlEYXRlID0gbmV3IERhdGUoKTtcbiAgICB0YXNrRHVlRGF0ZS52YWx1ZSA9IHRvZGF5RGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkgKyAnLSdcbiAgICAgICAgICAgICAgICAgICAgICAgICsgKHRvZGF5RGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApICsgJy0nXG4gICAgICAgICAgICAgICAgICAgICAgICArIHRvZGF5RGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApO1xuICAgIGlmKG1vZGUgPT09ICdlZGl0Jyl7XG4gICAgICAgIHRhc2tEdWVEYXRlLnZhbHVlID0gY29udGV4dC50YXNrLmR1ZURhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpICsgJy0nXG4gICAgICAgICAgICAgICAgICAgICAgICArIChjb250ZXh0LnRhc2suZHVlRGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApICsgJy0nXG4gICAgICAgICAgICAgICAgICAgICAgICArIGNvbnRleHQudGFzay5kdWVEYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCk7XG4gICAgfVxuXG5cbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICB0YXNrQ29uZmlnRWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbmZpZy1wcmlvcml0eScpO1xuICAgIHRhc2tQcmlvcml0eS5vcHRpb25zLmFkZChuZXcgT3B0aW9uKCdMb3cnKSk7XG4gICAgdGFza1ByaW9yaXR5Lm9wdGlvbnMuYWRkKG5ldyBPcHRpb24oJ01lZGl1bScpKTtcbiAgICB0YXNrUHJpb3JpdHkub3B0aW9ucy5hZGQobmV3IE9wdGlvbignSGlnaCcpKTtcbiAgICBpZihtb2RlID09PSAnZWRpdCcpe1xuICAgICAgICB0YXNrUHJpb3JpdHkudmFsdWUgPSBjb250ZXh0LnRhc2sucHJpb3JpdHk7XG4gICAgfVxuXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFza0NvbmZpZ0VsZW1lbnQuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcbiAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnVUlCdXR0b24nLCAncHJlc3MtZWZmZWN0JywgJ2NhbmNlbC10YXNrLWJ1dHRvbicpO1xuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgc3RhdGUuY29udGFpbmVyLnJlbW92ZUNoaWxkKHNjcmVlbik7IH0pO1xuXG4gICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRhc2tDb25maWdFbGVtZW50LmFwcGVuZENoaWxkKHNhdmVCdXR0b24pO1xuICAgIHNhdmVCdXR0b24uY2xhc3NMaXN0LmFkZCgnVUlCdXR0b24nLCAncHJlc3MtZWZmZWN0JywgJ3NhdmUtdGFzay1idXR0b24nKTtcbiAgICBzYXZlQnV0dG9uLnRleHRDb250ZW50ID0gJ1NhdmUnO1xuICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmKG1vZGUgPT0gJ2NyZWF0ZScpe1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKGAke3Rhc2tUaXRsZS52YWx1ZX1gLCBgJHt0YXNrRGVzY3JpcHRpb24udmFsdWV9YCwgbmV3IERhdGUoXG4gICAgICAgICAgICAgICAgdGFza0R1ZURhdGUudmFsdWUuc3BsaXQoJy0nKVswXSxcbiAgICAgICAgICAgICAgICB0YXNrRHVlRGF0ZS52YWx1ZS5zcGxpdCgnLScpWzFdIC0gMSxcbiAgICAgICAgICAgICAgICB0YXNrRHVlRGF0ZS52YWx1ZS5zcGxpdCgnLScpWzJdXG4gICAgICAgICAgICApLCBgJHt0YXNrUHJpb3JpdHkudmFsdWV9YCk7XG4gICAgXG4gICAgXG4gICAgICAgICAgICBzdGF0ZS5jdXJyZW50UHJvamVjdC5hZGRUYXNrKHRhc2spO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0YXNrVmlldyh0YXNrLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ldyBEYXRlKERhdGUubm93KCkpLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICAgICAgaWYodGFzay5kdWVEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpID09PSBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpKXtcbiAgICAgICAgICAgICAgICBzdGF0ZS50b2RheVByb2plY3QuYWRkVGFzayh0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmKG1vZGUgPT0gJ2VkaXQnKXtcbiAgICAgICAgICAgIGNvbnRleHQudGFzay50aXRsZSA9IHRhc2tUaXRsZS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnRleHQudGFzay5kZXNjcmlwdGlvbiA9IHRhc2tEZXNjcmlwdGlvbi52YWx1ZTtcbiAgICAgICAgICAgIGNvbnRleHQudGFzay5kdWVEYXRlID0gbmV3IERhdGUoXG4gICAgICAgICAgICAgICAgdGFza0R1ZURhdGUudmFsdWUuc3BsaXQoJy0nKVswXSxcbiAgICAgICAgICAgICAgICB0YXNrRHVlRGF0ZS52YWx1ZS5zcGxpdCgnLScpWzFdIC0gMSxcbiAgICAgICAgICAgICAgICB0YXNrRHVlRGF0ZS52YWx1ZS5zcGxpdCgnLScpWzJdXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29udGV4dC50YXNrLnByaW9yaXR5ID0gdGFza1ByaW9yaXR5LnZhbHVlO1xuXG4gICAgICAgICAgICBjb250ZXh0LnRhc2tUaXRsZS5pbm5lckhUTUwgPSB0YXNrVGl0bGUudmFsdWU7XG4gICAgICAgICAgICBjb250ZXh0LnRhc2tEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSB0YXNrRGVzY3JpcHRpb24udmFsdWU7XG4gICAgICAgICAgICBjb250ZXh0LnRhc2tEdWVEYXRlLmlubmVySFRNTCA9IFwiRHVlIERhdGU6IFwiICsgdGFza0R1ZURhdGUudmFsdWVBc0RhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgICAgICAgICBjb250ZXh0LnRhc2tQcmlvcml0eS5pbm5lckhUTUwgPSBcIlByaW9yaXR5OiBcIiArIHRhc2tQcmlvcml0eS52YWx1ZTtcblxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RhdGUuY3VycmVudFByb2plY3QucGlkLCBKU09OLnN0cmluZ2lmeShzdGF0ZS5jdXJyZW50UHJvamVjdCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUuY29udGFpbmVyLnJlbW92ZUNoaWxkKHNjcmVlbik7XG4gICAgfSk7XG5cbiAgICBzdGF0ZS5jb250YWluZXIuYXBwZW5kQ2hpbGQoc2NyZWVuKTtcbn1cblxuZXhwb3J0IHsgdGFza1ZpZXcsIHByb2plY3RWaWV3LCBzaWRlYmFyVmlldywgcHJvamVjdENvbmZpZ1ZpZXcsIHRhc2tDb25maWdWaWV3IH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9