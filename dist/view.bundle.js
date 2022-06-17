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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n\t--background-color: #272643;\n\t--project-sidebar-color: #e3f6f5;\n\t--text-color: #ffffff;\n\t--cancel-button-color: #ff8c8c;\n\t--save-button-color: #60d0b6;\n\t--content-area-color: rgb(239, 236, 241);\n}\n\n* {\n\tborder: none;\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\n.container {\n\twidth: 100vw;\n\theight: 100vh;\n\tdisplay: grid;\n\tgrid-template-columns: 2fr 8fr;\n\tgrid-template-rows: 8vh 92vh;\n\tgrid-template-areas:\n\t\t\"header header\"\n\t\t\"sidebar content\";\n\toverflow: hidden;\n\tcolor: var(--text-color);\n\tfont-family: 'Montserrat';\n\tbackground-color: var(--background-color);\n}\n\n.header{\n\tgrid-area: header;\n\tbackground-color: var(--background-color);\n\theight: 100%;\n\twidth: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 30px;\n}\n\n.sidebar{\n\theight: 100%;\n\twidth: 100%;\n\tgrid-area: sidebar;\n\tbackground-color: var(--background-color);\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 0 10px 10px 10px;\n}\n.sidebar-header{\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\theight: 26%;\n\twidth: 100%;\n\tbackground-color: #3e3c6b;\n\tjustify-content: space-between;\n\tpadding: 10px;\n\tborder-radius: 10px;\n}\n.project-list{\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 74%;\n\twidth: 100%;\n\tbackground-color: var(background-color);\n\toverflow-y: scroll;\n\n\t-ms-overflow-style: none;\n\tscrollbar-width: none;\n\tpadding: 10px;\n}\n.project::webkit-scrollbar{\n\tdisplay: none;\n}\n\n.content{\n\tgrid-area: content;\n\theight: 100%;\n\twidth: 100%;\n\tpadding: 20px;\n\tborder-radius: 20px 0 0 0;\n\tbackground-color: var(--content-area-color);\n\toverflow: hidden;\n}\n\n/* Task */\n.task{\n\twidth: 100%;\n\tborder: 1px solid var(--background-color);\n   \tborder-radius: 10px;\n\tpadding: 20px;\n\tcolor: var(--background-color);\n\tdisplay: grid;\n\tjustify-items: start;\n\talign-items: center;\n\tgrid-template-columns: 2fr 1fr 1fr 80px;\n\tgrid-template-rows: 1fr 4fr;\n\tgrid-template-areas:\n\t\t\"title date priority priority\"\n\t\t\"description description description options\";\n\trow-gap: 10px;\n}\n.task-title{\n\tgrid-area: title;\n\tfont-size: 1.5em;\n\tfont-weight: bold;\n\ttext-align: left;\n\twidth: 100%;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n}\n.task-due-date{\n\tgrid-area: date;\n\tfont-size: 1.5em;\n\ttext-align: center;\n\tjustify-self: end;\n}\n.task-priority{\n\tgrid-area: priority;\n\tfont-size: 1.5em;\n\tfont-weight: bold;\n\ttext-align: center;\n\tjustify-self: end;\n}\n.task-description{\n\tgrid-area: description;\n\tfont-size: 1.2em;\n\ttext-align: left;\n\toverflow-wrap: break-word;\n\toverflow: hidden;\n\n\twidth: 100%;\n\theight: 100%;\n}\n.task-options{\n\tgrid-area: options;\n\talign-self: end;\n}\n\n/* Project */\n.project{\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: grid;\n\tgrid-template-rows: 1fr 10fr;\n\talign-items: center;\n}\n.project-header{\n\tgrid-row: 1;\n\tfont-size: 1.5em;\n\tfont-weight: bold;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 0px 50px 0px 20px;\n\tbackground-color: var(--content-area-color);\n\tborder-bottom: 1px solid var(--background-color);\n\tcolor: var(--background-color);\n}\n.project-title{\n\tfont-size: 1.5em;\n\tfont-weight: bold;\n\tpadding: 20px;\n\twidth: 70%;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n}\n.task-container{\n\tgrid-row: 2;\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\talign-items: center;\n\tpadding: 20px;\n\trow-gap: 20px;\n\tbackground-color: var(--background-color2);\n\toverflow-y: scroll;\n\n\t-ms-overflow-style: none;\n\tscrollbar-width: none;\n}\n.task-container::webkit-scrollbar{\n\tdisplay: none;\n}\n\n.project-list-item{\n\twidth: 100%;\n\theight: 40px;\n\tborder-radius: 5px;\n\tmargin-top: 10px;\n\tbackground-color: var(--project-sidebar-color);\n\tcolor: var(--background-color);\n\topacity: 0.8;\n\tdisplay:grid;\n\tgrid-template-columns: 4fr 1fr;\n\tgrid-template-rows: 1fr;\n\tgrid-template-areas:\n\t\t\"title options\";\n\tpadding: 0px 10px;\n\talign-items: center;\n}\n.project-sidebar-title{\n\tgrid-area: title;\n\tfont-size: 1.2em;\n\tfont-weight: bold;\n\ttext-align: left;\n\theight: 100%;\n\tjustify-self: start;\n\twidth: 100%;\n\theight: 70%;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n}\n\n\n\n/* General */\n.UIButton{\n\twidth: fit-content;\n\tpadding: 0.75em;\n\tborder-radius: 0.5em;\n\tfont-size: 0.75em;\n\tbackground-color: var(--background-color);\n\tcolor: var(--text-color);\n}\n\n.block-screen{\n\twidth: 100%;\n\theight: 100%;\n\tposition: fixed;\n\tbackground-color: rgba(0,0,0,0.5);\n}\n.project-config{\n\twidth: 500px;\n\theight: 400px;\n\tbackground-color: var(--content-area-color);\n\tborder-radius: 10px;\n\tposition: fixed;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tdisplay: grid;\n\tgrid-template-rows: 1fr 1fr;\n\tgrid-template-columns: 1fr 1fr;\n\tgrid-template-areas:\n\t\t\"input input\"\n\t\t\"cancel save\";\n\n\tpadding: 20px;\n\talign-items: end;\n}\n\n.save-project-button{\n\tgrid-area: save;\n\tjustify-self: end;\n\twidth: 100px;\n\tbackground-color: var(--save-button-color);\n\tfont-size: 1em;\n}\n.cancel-project-button{\n\tgrid-area: cancel;\n\tjustify-self: start;\n\twidth: 100px;\n\tbackground-color: var(--cancel-button-color);\n\tfont-size: 1em;\n}\n.project-name{\n\tgrid-area: input;\n\twidth: 100%;\n\theight: 40px;\n\tborder: 1px solid var(--background-color);\n\tborder-radius: 5px;\n\tpadding: 10px;\n\tfont-size: 1.5em;\n\tfont-weight: bold;\n\ttext-align: left;\n}\n\n.task-config{\n\twidth: 600px;\n\theight: 700px;\n\tbackground-color: var(--content-area-color);\n\tborder-radius: 10px;\n\tposition: fixed;\n\tpadding: 20px;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tgrid-template-rows: 1fr 2fr 1fr 1fr;\n\tgrid-template-areas:\n\t\t\"title title\"\n\t\t\"description description\"\n\t\t\"priority due-date\"\n\t\t\"cancel save\";\n\talign-items: end;\n}\n.task-config-title{\n\tgrid-area: title;\n\twidth: 100%;\n\theight: 40px;\n\tborder: 1px solid var(--background-color);\n\tborder-radius: 10px;\n\tpadding: 10px;\n\tfont-size: 1.5em;\n\tfont-weight: bold;\n\ttext-align: left;\n\talign-self: center;\n}\n.task-config-description{\n\tgrid-area: description;\n\twidth: 100%;\n\theight: 100%;\n\tfont-size: 1.2em;\n\ttext-align: left;\n\tborder: 1px solid var(--background-color);\n\tborder-radius: 10px;\n\tpadding: 10px;\n}\n.task-config-priority{\n\tgrid-area: priority;\n\tfont-size: 1em;\n\tfont-weight: bold;\n\ttext-align: center;\n\twidth: 70%;\n\theight: 40px;\n\tborder: 1px solid var(--background-color);\n\tborder-radius: 10px;\n}\n.task-config-due-date{\n\tgrid-area: due-date;\n\tfont-size: 1.5em;\n\ttext-align: center;\n\tjustify-self: end;\n\twidth: 70%;\n\theight: 40px;\n\tborder: 1px solid var(--background-color);\n\tborder-radius: 10px;\n}\n.save-task-button{\n\tgrid-area: save;\n\tjustify-self: end;\n\twidth: 100px;\n\tbackground-color: var(--save-button-color);\n\tfont-size: 1em;\n\tjustify-self: end;\n}\n.cancel-task-button{\n\tgrid-area: cancel;\n\tjustify-self: start;\n\twidth: 100px;\n\tbackground-color: var(--cancel-button-color);\n\tfont-size: 1em;\n\tjustify-self: start;\n}\n\n\n.material-symbols-outlined {\n  font-variation-settings:\n  'FILL' 1,\n  'wght' 700,\n  'GRAD' 200,\n  'opsz' 30;\n}\n\n\n.more-menu{\n\tgrid-area: options;\n\twidth: 40px;\n\theight: 40px;\n\tmargin-right: 5px;\n\tjustify-self: end;\n\tpadding-left: 18px;\n\tborder-radius: 10px;\n}\n.more-menu-list{\n\tposition: relative;\n\twidth: 100px;\n\theight: 100px;\n\tbackground-color: #3f3e6367;\n\tborder-radius: 10px;\n\tpadding: 10px;\n\tz-index: 3;\n\ttransform: translate(-115%, -50%);\n\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-around;\n\tvisibility: hidden;\n}\n.more-menu-item{\n\twidth: 100%;\n\theight: 30px;\n\tborder-radius: 5px;\n\tfont-size: 0.8em;\n\tbackground-color: var(--background-color);\n\tcolor: var(--text-color);\n}\n\n.more-menu:hover{\n\tcursor: pointer;\n\tbackground-color: #545276\n}\n.more-menu.clicked{\n\tbackground-color: #545276\n}\n.more-menu.clicked .more-menu-icon{\n\tdisplay: block;\n}\n\n.more-menu.clicked .more-menu-list{\n\tvisibility: visible;\n}\n\n\n\n.more-menu-icon{\n\twidth: 5px;\n\theight: 5px;\n\tdisplay: none;\n\tborder-radius: 50%;\n\tmargin-top: 18px;\n\tbackground-color: var(--background-color);\n}\n\n.more-menu-icon::before{\n\tcontent: \"\";\n\tdisplay: inherit;\n\tposition: relative;\n\twidth: 5px;\n\theight: 5px;\n\tbackground-color: var(--background-color);\n\tborder-radius: 50%;\n\ttransform: translate(0, -10px);\n}\n.more-menu-icon::after{\n\tcontent: \"\";\n\tdisplay: inherit;\n\tposition: relative;\n\twidth: 5px;\n\theight: 5px;\n\tbackground-color: var(--background-color);\n\tborder-radius: 50%;\n\ttransform: translate(0, 5px);\n}\n\n.project-list-item:hover .more-menu-icon, .task:hover .more-menu-icon{\n\tdisplay: block;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;CACC,2BAA2B;CAC3B,gCAAgC;CAChC,qBAAqB;CACrB,8BAA8B;CAC9B,4BAA4B;CAC5B,wCAAwC;AACzC;;AAEA;CACC,YAAY;CACZ,SAAS;CACT,UAAU;CACV,sBAAsB;AACvB;;AAEA;CACC,YAAY;CACZ,aAAa;CACb,aAAa;CACb,8BAA8B;CAC9B,4BAA4B;CAC5B;;mBAEkB;CAClB,gBAAgB;CAChB,wBAAwB;CACxB,yBAAyB;CACzB,yCAAyC;AAC1C;;AAEA;CACC,iBAAiB;CACjB,yCAAyC;CACzC,YAAY;CACZ,WAAW;CACX,aAAa;CACb,mBAAmB;CACnB,aAAa;AACd;;AAEA;CACC,YAAY;CACZ,WAAW;CACX,kBAAkB;CAClB,yCAAyC;CACzC,aAAa;CACb,sBAAsB;CACtB,yBAAyB;AAC1B;AACA;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,WAAW;CACX,WAAW;CACX,yBAAyB;CACzB,8BAA8B;CAC9B,aAAa;CACb,mBAAmB;AACpB;AACA;CACC,aAAa;CACb,sBAAsB;CACtB,WAAW;CACX,WAAW;CACX,uCAAuC;CACvC,kBAAkB;;CAElB,wBAAwB;CACxB,qBAAqB;CACrB,aAAa;AACd;AACA;CACC,aAAa;AACd;;AAEA;CACC,kBAAkB;CAClB,YAAY;CACZ,WAAW;CACX,aAAa;CACb,yBAAyB;CACzB,2CAA2C;CAC3C,gBAAgB;AACjB;;AAEA,SAAS;AACT;CACC,WAAW;CACX,yCAAyC;IACtC,mBAAmB;CACtB,aAAa;CACb,8BAA8B;CAC9B,aAAa;CACb,oBAAoB;CACpB,mBAAmB;CACnB,uCAAuC;CACvC,2BAA2B;CAC3B;;+CAE8C;CAC9C,aAAa;AACd;AACA;CACC,gBAAgB;CAChB,gBAAgB;CAChB,iBAAiB;CACjB,gBAAgB;CAChB,WAAW;CACX,gBAAgB;CAChB,uBAAuB;CACvB,mBAAmB;AACpB;AACA;CACC,eAAe;CACf,gBAAgB;CAChB,kBAAkB;CAClB,iBAAiB;AAClB;AACA;CACC,mBAAmB;CACnB,gBAAgB;CAChB,iBAAiB;CACjB,kBAAkB;CAClB,iBAAiB;AAClB;AACA;CACC,sBAAsB;CACtB,gBAAgB;CAChB,gBAAgB;CAChB,yBAAyB;CACzB,gBAAgB;;CAEhB,WAAW;CACX,YAAY;AACb;AACA;CACC,kBAAkB;CAClB,eAAe;AAChB;;AAEA,YAAY;AACZ;CACC,WAAW;CACX,YAAY;CACZ,aAAa;CACb,4BAA4B;CAC5B,mBAAmB;AACpB;AACA;CACC,WAAW;CACX,gBAAgB;CAChB,iBAAiB;CACjB,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;CACnB,0BAA0B;CAC1B,2CAA2C;CAC3C,gDAAgD;CAChD,8BAA8B;AAC/B;AACA;CACC,gBAAgB;CAChB,iBAAiB;CACjB,aAAa;CACb,UAAU;CACV,gBAAgB;CAChB,uBAAuB;CACvB,mBAAmB;AACpB;AACA;CACC,WAAW;CACX,WAAW;CACX,YAAY;CACZ,aAAa;CACb,sBAAsB;CACtB,2BAA2B;CAC3B,mBAAmB;CACnB,aAAa;CACb,aAAa;CACb,0CAA0C;CAC1C,kBAAkB;;CAElB,wBAAwB;CACxB,qBAAqB;AACtB;AACA;CACC,aAAa;AACd;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,kBAAkB;CAClB,gBAAgB;CAChB,8CAA8C;CAC9C,8BAA8B;CAC9B,YAAY;CACZ,YAAY;CACZ,8BAA8B;CAC9B,uBAAuB;CACvB;iBACgB;CAChB,iBAAiB;CACjB,mBAAmB;AACpB;AACA;CACC,gBAAgB;CAChB,gBAAgB;CAChB,iBAAiB;CACjB,gBAAgB;CAChB,YAAY;CACZ,mBAAmB;CACnB,WAAW;CACX,WAAW;CACX,gBAAgB;CAChB,uBAAuB;CACvB,mBAAmB;AACpB;;;;AAIA,YAAY;AACZ;CACC,kBAAkB;CAClB,eAAe;CACf,oBAAoB;CACpB,iBAAiB;CACjB,yCAAyC;CACzC,wBAAwB;AACzB;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,eAAe;CACf,iCAAiC;AAClC;AACA;CACC,YAAY;CACZ,aAAa;CACb,2CAA2C;CAC3C,mBAAmB;CACnB,eAAe;CACf,QAAQ;CACR,SAAS;CACT,gCAAgC;CAChC,aAAa;CACb,2BAA2B;CAC3B,8BAA8B;CAC9B;;eAEc;;CAEd,aAAa;CACb,gBAAgB;AACjB;;AAEA;CACC,eAAe;CACf,iBAAiB;CACjB,YAAY;CACZ,0CAA0C;CAC1C,cAAc;AACf;AACA;CACC,iBAAiB;CACjB,mBAAmB;CACnB,YAAY;CACZ,4CAA4C;CAC5C,cAAc;AACf;AACA;CACC,gBAAgB;CAChB,WAAW;CACX,YAAY;CACZ,yCAAyC;CACzC,kBAAkB;CAClB,aAAa;CACb,gBAAgB;CAChB,iBAAiB;CACjB,gBAAgB;AACjB;;AAEA;CACC,YAAY;CACZ,aAAa;CACb,2CAA2C;CAC3C,mBAAmB;CACnB,eAAe;CACf,aAAa;CACb,QAAQ;CACR,SAAS;CACT,gCAAgC;CAChC,aAAa;CACb,8BAA8B;CAC9B,mCAAmC;CACnC;;;;eAIc;CACd,gBAAgB;AACjB;AACA;CACC,gBAAgB;CAChB,WAAW;CACX,YAAY;CACZ,yCAAyC;CACzC,mBAAmB;CACnB,aAAa;CACb,gBAAgB;CAChB,iBAAiB;CACjB,gBAAgB;CAChB,kBAAkB;AACnB;AACA;CACC,sBAAsB;CACtB,WAAW;CACX,YAAY;CACZ,gBAAgB;CAChB,gBAAgB;CAChB,yCAAyC;CACzC,mBAAmB;CACnB,aAAa;AACd;AACA;CACC,mBAAmB;CACnB,cAAc;CACd,iBAAiB;CACjB,kBAAkB;CAClB,UAAU;CACV,YAAY;CACZ,yCAAyC;CACzC,mBAAmB;AACpB;AACA;CACC,mBAAmB;CACnB,gBAAgB;CAChB,kBAAkB;CAClB,iBAAiB;CACjB,UAAU;CACV,YAAY;CACZ,yCAAyC;CACzC,mBAAmB;AACpB;AACA;CACC,eAAe;CACf,iBAAiB;CACjB,YAAY;CACZ,0CAA0C;CAC1C,cAAc;CACd,iBAAiB;AAClB;AACA;CACC,iBAAiB;CACjB,mBAAmB;CACnB,YAAY;CACZ,4CAA4C;CAC5C,cAAc;CACd,mBAAmB;AACpB;;;AAGA;EACE;;;;WAIS;AACX;;;AAGA;CACC,kBAAkB;CAClB,WAAW;CACX,YAAY;CACZ,iBAAiB;CACjB,iBAAiB;CACjB,kBAAkB;CAClB,mBAAmB;AACpB;AACA;CACC,kBAAkB;CAClB,YAAY;CACZ,aAAa;CACb,2BAA2B;CAC3B,mBAAmB;CACnB,aAAa;CACb,UAAU;CACV,iCAAiC;;CAEjC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,6BAA6B;CAC7B,kBAAkB;AACnB;AACA;CACC,WAAW;CACX,YAAY;CACZ,kBAAkB;CAClB,gBAAgB;CAChB,yCAAyC;CACzC,wBAAwB;AACzB;;AAEA;CACC,eAAe;CACf;AACD;AACA;CACC;AACD;AACA;CACC,cAAc;AACf;;AAEA;CACC,mBAAmB;AACpB;;;;AAIA;CACC,UAAU;CACV,WAAW;CACX,aAAa;CACb,kBAAkB;CAClB,gBAAgB;CAChB,yCAAyC;AAC1C;;AAEA;CACC,WAAW;CACX,gBAAgB;CAChB,kBAAkB;CAClB,UAAU;CACV,WAAW;CACX,yCAAyC;CACzC,kBAAkB;CAClB,8BAA8B;AAC/B;AACA;CACC,WAAW;CACX,gBAAgB;CAChB,kBAAkB;CAClB,UAAU;CACV,WAAW;CACX,yCAAyC;CACzC,kBAAkB;CAClB,4BAA4B;AAC7B;;AAEA;CACC,cAAc;AACf","sourcesContent":[":root{\n\t--background-color: #272643;\n\t--project-sidebar-color: #e3f6f5;\n\t--text-color: #ffffff;\n\t--cancel-button-color: #ff8c8c;\n\t--save-button-color: #60d0b6;\n\t--content-area-color: rgb(239, 236, 241);\n}\n\n* {\n\tborder: none;\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\n.container {\n\twidth: 100vw;\n\theight: 100vh;\n\tdisplay: grid;\n\tgrid-template-columns: 2fr 8fr;\n\tgrid-template-rows: 8vh 92vh;\n\tgrid-template-areas:\n\t\t\"header header\"\n\t\t\"sidebar content\";\n\toverflow: hidden;\n\tcolor: var(--text-color);\n\tfont-family: 'Montserrat';\n\tbackground-color: var(--background-color);\n}\n\n.header{\n\tgrid-area: header;\n\tbackground-color: var(--background-color);\n\theight: 100%;\n\twidth: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 30px;\n}\n\n.sidebar{\n\theight: 100%;\n\twidth: 100%;\n\tgrid-area: sidebar;\n\tbackground-color: var(--background-color);\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 0 10px 10px 10px;\n}\n.sidebar-header{\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\theight: 26%;\n\twidth: 100%;\n\tbackground-color: #3e3c6b;\n\tjustify-content: space-between;\n\tpadding: 10px;\n\tborder-radius: 10px;\n}\n.project-list{\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 74%;\n\twidth: 100%;\n\tbackground-color: var(background-color);\n\toverflow-y: scroll;\n\n\t-ms-overflow-style: none;\n\tscrollbar-width: none;\n\tpadding: 10px;\n}\n.project::webkit-scrollbar{\n\tdisplay: none;\n}\n\n.content{\n\tgrid-area: content;\n\theight: 100%;\n\twidth: 100%;\n\tpadding: 20px;\n\tborder-radius: 20px 0 0 0;\n\tbackground-color: var(--content-area-color);\n\toverflow: hidden;\n}\n\n/* Task */\n.task{\n\twidth: 100%;\n\tborder: 1px solid var(--background-color);\n   \tborder-radius: 10px;\n\tpadding: 20px;\n\tcolor: var(--background-color);\n\tdisplay: grid;\n\tjustify-items: start;\n\talign-items: center;\n\tgrid-template-columns: 2fr 1fr 1fr 80px;\n\tgrid-template-rows: 1fr 4fr;\n\tgrid-template-areas:\n\t\t\"title date priority priority\"\n\t\t\"description description description options\";\n\trow-gap: 10px;\n}\n.task-title{\n\tgrid-area: title;\n\tfont-size: 1.5em;\n\tfont-weight: bold;\n\ttext-align: left;\n\twidth: 100%;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n}\n.task-due-date{\n\tgrid-area: date;\n\tfont-size: 1.5em;\n\ttext-align: center;\n\tjustify-self: end;\n}\n.task-priority{\n\tgrid-area: priority;\n\tfont-size: 1.5em;\n\tfont-weight: bold;\n\ttext-align: center;\n\tjustify-self: end;\n}\n.task-description{\n\tgrid-area: description;\n\tfont-size: 1.2em;\n\ttext-align: left;\n\toverflow-wrap: break-word;\n\toverflow: hidden;\n\n\twidth: 100%;\n\theight: 100%;\n}\n.task-options{\n\tgrid-area: options;\n\talign-self: end;\n}\n\n/* Project */\n.project{\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: grid;\n\tgrid-template-rows: 1fr 10fr;\n\talign-items: center;\n}\n.project-header{\n\tgrid-row: 1;\n\tfont-size: 1.5em;\n\tfont-weight: bold;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 0px 50px 0px 20px;\n\tbackground-color: var(--content-area-color);\n\tborder-bottom: 1px solid var(--background-color);\n\tcolor: var(--background-color);\n}\n.project-title{\n\tfont-size: 1.5em;\n\tfont-weight: bold;\n\tpadding: 20px;\n\twidth: 70%;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n}\n.task-container{\n\tgrid-row: 2;\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\talign-items: center;\n\tpadding: 20px;\n\trow-gap: 20px;\n\tbackground-color: var(--background-color2);\n\toverflow-y: scroll;\n\n\t-ms-overflow-style: none;\n\tscrollbar-width: none;\n}\n.task-container::webkit-scrollbar{\n\tdisplay: none;\n}\n\n.project-list-item{\n\twidth: 100%;\n\theight: 40px;\n\tborder-radius: 5px;\n\tmargin-top: 10px;\n\tbackground-color: var(--project-sidebar-color);\n\tcolor: var(--background-color);\n\topacity: 0.8;\n\tdisplay:grid;\n\tgrid-template-columns: 4fr 1fr;\n\tgrid-template-rows: 1fr;\n\tgrid-template-areas:\n\t\t\"title options\";\n\tpadding: 0px 10px;\n\talign-items: center;\n}\n.project-sidebar-title{\n\tgrid-area: title;\n\tfont-size: 1.2em;\n\tfont-weight: bold;\n\ttext-align: left;\n\theight: 100%;\n\tjustify-self: start;\n\twidth: 100%;\n\theight: 70%;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n}\n\n\n\n/* General */\n.UIButton{\n\twidth: fit-content;\n\tpadding: 0.75em;\n\tborder-radius: 0.5em;\n\tfont-size: 0.75em;\n\tbackground-color: var(--background-color);\n\tcolor: var(--text-color);\n}\n\n.block-screen{\n\twidth: 100%;\n\theight: 100%;\n\tposition: fixed;\n\tbackground-color: rgba(0,0,0,0.5);\n}\n.project-config{\n\twidth: 500px;\n\theight: 400px;\n\tbackground-color: var(--content-area-color);\n\tborder-radius: 10px;\n\tposition: fixed;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tdisplay: grid;\n\tgrid-template-rows: 1fr 1fr;\n\tgrid-template-columns: 1fr 1fr;\n\tgrid-template-areas:\n\t\t\"input input\"\n\t\t\"cancel save\";\n\n\tpadding: 20px;\n\talign-items: end;\n}\n\n.save-project-button{\n\tgrid-area: save;\n\tjustify-self: end;\n\twidth: 100px;\n\tbackground-color: var(--save-button-color);\n\tfont-size: 1em;\n}\n.cancel-project-button{\n\tgrid-area: cancel;\n\tjustify-self: start;\n\twidth: 100px;\n\tbackground-color: var(--cancel-button-color);\n\tfont-size: 1em;\n}\n.project-name{\n\tgrid-area: input;\n\twidth: 100%;\n\theight: 40px;\n\tborder: 1px solid var(--background-color);\n\tborder-radius: 5px;\n\tpadding: 10px;\n\tfont-size: 1.5em;\n\tfont-weight: bold;\n\ttext-align: left;\n}\n\n.task-config{\n\twidth: 600px;\n\theight: 700px;\n\tbackground-color: var(--content-area-color);\n\tborder-radius: 10px;\n\tposition: fixed;\n\tpadding: 20px;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tgrid-template-rows: 1fr 2fr 1fr 1fr;\n\tgrid-template-areas:\n\t\t\"title title\"\n\t\t\"description description\"\n\t\t\"priority due-date\"\n\t\t\"cancel save\";\n\talign-items: end;\n}\n.task-config-title{\n\tgrid-area: title;\n\twidth: 100%;\n\theight: 40px;\n\tborder: 1px solid var(--background-color);\n\tborder-radius: 10px;\n\tpadding: 10px;\n\tfont-size: 1.5em;\n\tfont-weight: bold;\n\ttext-align: left;\n\talign-self: center;\n}\n.task-config-description{\n\tgrid-area: description;\n\twidth: 100%;\n\theight: 100%;\n\tfont-size: 1.2em;\n\ttext-align: left;\n\tborder: 1px solid var(--background-color);\n\tborder-radius: 10px;\n\tpadding: 10px;\n}\n.task-config-priority{\n\tgrid-area: priority;\n\tfont-size: 1em;\n\tfont-weight: bold;\n\ttext-align: center;\n\twidth: 70%;\n\theight: 40px;\n\tborder: 1px solid var(--background-color);\n\tborder-radius: 10px;\n}\n.task-config-due-date{\n\tgrid-area: due-date;\n\tfont-size: 1.5em;\n\ttext-align: center;\n\tjustify-self: end;\n\twidth: 70%;\n\theight: 40px;\n\tborder: 1px solid var(--background-color);\n\tborder-radius: 10px;\n}\n.save-task-button{\n\tgrid-area: save;\n\tjustify-self: end;\n\twidth: 100px;\n\tbackground-color: var(--save-button-color);\n\tfont-size: 1em;\n\tjustify-self: end;\n}\n.cancel-task-button{\n\tgrid-area: cancel;\n\tjustify-self: start;\n\twidth: 100px;\n\tbackground-color: var(--cancel-button-color);\n\tfont-size: 1em;\n\tjustify-self: start;\n}\n\n\n.material-symbols-outlined {\n  font-variation-settings:\n  'FILL' 1,\n  'wght' 700,\n  'GRAD' 200,\n  'opsz' 30;\n}\n\n\n.more-menu{\n\tgrid-area: options;\n\twidth: 40px;\n\theight: 40px;\n\tmargin-right: 5px;\n\tjustify-self: end;\n\tpadding-left: 18px;\n\tborder-radius: 10px;\n}\n.more-menu-list{\n\tposition: relative;\n\twidth: 100px;\n\theight: 100px;\n\tbackground-color: #3f3e6367;\n\tborder-radius: 10px;\n\tpadding: 10px;\n\tz-index: 3;\n\ttransform: translate(-115%, -50%);\n\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-around;\n\tvisibility: hidden;\n}\n.more-menu-item{\n\twidth: 100%;\n\theight: 30px;\n\tborder-radius: 5px;\n\tfont-size: 0.8em;\n\tbackground-color: var(--background-color);\n\tcolor: var(--text-color);\n}\n\n.more-menu:hover{\n\tcursor: pointer;\n\tbackground-color: #545276\n}\n.more-menu.clicked{\n\tbackground-color: #545276\n}\n.more-menu.clicked .more-menu-icon{\n\tdisplay: block;\n}\n\n.more-menu.clicked .more-menu-list{\n\tvisibility: visible;\n}\n\n\n\n.more-menu-icon{\n\twidth: 5px;\n\theight: 5px;\n\tdisplay: none;\n\tborder-radius: 50%;\n\tmargin-top: 18px;\n\tbackground-color: var(--background-color);\n}\n\n.more-menu-icon::before{\n\tcontent: \"\";\n\tdisplay: inherit;\n\tposition: relative;\n\twidth: 5px;\n\theight: 5px;\n\tbackground-color: var(--background-color);\n\tborder-radius: 50%;\n\ttransform: translate(0, -10px);\n}\n.more-menu-icon::after{\n\tcontent: \"\";\n\tdisplay: inherit;\n\tposition: relative;\n\twidth: 5px;\n\theight: 5px;\n\tbackground-color: var(--background-color);\n\tborder-radius: 50%;\n\ttransform: translate(0, 5px);\n}\n\n.project-list-item:hover .more-menu-icon, .task:hover .more-menu-icon{\n\tdisplay: block;\n}"],"sourceRoot":""}]);
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





function taskView(task, parent) {
	const taskElement = document.createElement("div");
	taskElement.classList.add("task", "fade-in");

	const taskTitle = document.createElement("div");
	taskElement.appendChild(taskTitle);
	taskTitle.classList.add("task-title");
	taskTitle.innerHTML = task.title;

	const taskDescription = document.createElement("div");
	taskElement.appendChild(taskDescription);
	taskDescription.classList.add("task-description");
	taskDescription.innerHTML = task.description;

	const taskDueDate = document.createElement("div");
	taskElement.appendChild(taskDueDate);
	taskDueDate.classList.add("task-due-date");
	taskDueDate.innerHTML = "Due date: " + task.dueDate.toLocaleDateString();

	const taskPriority = document.createElement("div");
	taskElement.appendChild(taskPriority);
	taskPriority.classList.add("task-priority");
	taskPriority.innerHTML = "Priority: " + task.priority;

	const moreMenu = document.createElement("div");
	moreMenu.classList.add("task-options", "more-menu");
	taskElement.appendChild(moreMenu);

	moreMenu.onclick = () => {
		moreMenu.classList.toggle("clicked");
	}

	const icon = document.createElement("div");
	moreMenu.appendChild(icon);
	icon.classList.add("more-menu-icon");

	const moreMenuList = document.createElement("div");
	moreMenu.appendChild(moreMenuList);
	moreMenuList.classList.add("more-menu-list", "fade-in");

	const deleteButton = document.createElement("button");
	moreMenuList.appendChild(deleteButton);
	deleteButton.classList.add("press-effect", "more-menu-item");
	deleteButton.textContent = "Delete";
	deleteButton.addEventListener("click", (e) => {
		taskElement.classList.add("fade-out");
		taskElement.addEventListener("animationend", () => {
			_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.currentProject.removeTask(task);
			parent.removeChild(taskElement);
			if (
				task.dueDate.toLocaleDateString() === new Date().toLocaleDateString()
			) {
				_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.todayProject.removeTask(task);
			}
		});
	});

	const editButton = document.createElement("button");
	moreMenuList.appendChild(editButton);
	editButton.classList.add("press-effect", "more-menu-item");
	editButton.textContent = "Edit";
	editButton.addEventListener("click", (e) => {
		taskConfigView(
			{ task, taskTitle, taskDescription, taskDueDate, taskPriority },
			"edit"
		);
	});

	parent.appendChild(taskElement);
}

function projectView(parent) {
	const projectElement = document.createElement("div");
	projectElement.classList.add("project");

	const projectHeader = document.createElement("div");
	projectElement.appendChild(projectHeader);
	projectHeader.classList.add("project-header");

	const projectTitle = document.createElement("div");
	projectHeader.appendChild(projectTitle);
	projectTitle.classList.add("project-title");
	projectTitle.innerHTML = _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.currentProject.name;

	if (_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.currentProject.pid !== _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.metadata.todayPid) {
		const addTaskButton = document.createElement("button");
		projectHeader.appendChild(addTaskButton);
		addTaskButton.classList.add("UIButton", "press-effect");
		addTaskButton.textContent = "Add Task";
		addTaskButton.addEventListener("click", () => {
			taskConfigView(taskContainer, "create", projectElement);
		});
	}

	const taskContainer = document.createElement("div");
	projectElement.appendChild(taskContainer);
	taskContainer.classList.add("task-container");
	_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.currentProject.tasks.forEach((task) => {
		taskView(task, taskContainer);
	});

	parent.appendChild(projectElement);
}

function projectSidebarView(project, parent) {
	const projectElement = document.createElement("div");
	projectElement.classList.add("project-list-item");

	const projectTitle = document.createElement("div");
	projectElement.appendChild(projectTitle);
	projectTitle.classList.add("project-sidebar-title");
	projectTitle.innerHTML = project.name;

	projectElement.onclick = () => {
		if (_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.currentProject.pid === project.pid) {
			return;
		}
		if (_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.projectElement) {
			_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.projectElement.classList.toggle("selected");
		}
		_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.projectElement = projectElement;
		projectElement.classList.toggle("selected");
		_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.currentProject = project;
		if (_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.content.firstChild) {
			_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.content.removeChild(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.content.firstChild);
		}
		projectView(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.content);

		_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.metadata.currentPid = project.pid;
		localStorage.setItem("metadata", JSON.stringify(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.metadata));
	};

	if (
		project.pid !== _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.metadata.inboxPid &&
		project.pid !== _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.metadata.todayPid
	) {
		const moreMenu = document.createElement("div");
		moreMenu.classList.add("more-menu");
		projectElement.appendChild(moreMenu);

		moreMenu.onclick = () => {
			moreMenu.classList.toggle("clicked");
		}

		const icon = document.createElement("div");
		moreMenu.appendChild(icon);
		icon.classList.add("more-menu-icon");

		const moreMenuList = document.createElement("div");
		moreMenu.appendChild(moreMenuList);
		moreMenuList.classList.add("more-menu-list", "fade-in");

		const deleteButton = document.createElement("button");
		moreMenuList.appendChild(deleteButton);
		deleteButton.classList.add("press-effect", "more-menu-item");
		deleteButton.textContent = "Delete";
		deleteButton.addEventListener("click", (e) => {
			_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.projects = _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.projects.filter((p) => p.pid !== project.pid);
			localStorage.removeItem(project.pid);
			parent.removeChild(projectElement);
			_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.currentProject = _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.inboxProject;
			_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.metadata.currentPid = _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.currentProject.pid;
			if (_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.content.firstChild) {
				_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.content.removeChild(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.content.firstChild);
			}
			projectView(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.content);
			e.stopPropagation();
			localStorage.setItem("metadata", JSON.stringify(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.metadata));
		});

		const editButton = document.createElement("button");
		moreMenuList.appendChild(editButton);
		editButton.classList.add("press-effect", "more-menu-item");
		editButton.textContent = "Edit";
		editButton.addEventListener("click", (e) => {
			projectConfigView({ project, sidebar: projectTitle }, "edit");
			e.stopPropagation();
		});
	}
	parent.appendChild(projectElement);
}

function sidebarHeaderView(pList, parent) {
	const sidebarHeader = document.createElement("div");
	parent.appendChild(sidebarHeader);
	sidebarHeader.classList.add("sidebar-header");
	projectSidebarView(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.inboxProject, sidebarHeader);
	projectSidebarView(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.todayProject, sidebarHeader);

	const addProjectButton = document.createElement("button");
	sidebarHeader.appendChild(addProjectButton);
	addProjectButton.classList.add("UIButton", "press-effect");
	addProjectButton.textContent = "Add Project";
	addProjectButton.addEventListener("click", () => {
		projectConfigView(pList, "create");
	});
}

function sidebarView(parent) {
	const sidebarElement = document.createElement("div");
	sidebarElement.classList.add("sidebar");

	const projectList = document.createElement("div");
	projectList.classList.add("project-list");
	_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.projects.forEach((project) => {
		if (
			project.pid !== _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.metadata.inboxPid &&
			project.pid !== _controller_js__WEBPACK_IMPORTED_MODULE_1__.state.metadata.todayPid
		) {
			projectSidebarView(project, projectList);
		}
	});

	sidebarHeaderView(projectList, sidebarElement);
	sidebarElement.appendChild(projectList);
	parent.appendChild(sidebarElement);
}

function projectConfigView(context, mode) {
	const screen = document.createElement("div");
	screen.classList.add("block-screen");

	const projectConfigElement = document.createElement("div");
	screen.appendChild(projectConfigElement);
	projectConfigElement.classList.add("project-config");

	const projectName = document.createElement("input");
	projectConfigElement.appendChild(projectName);
	projectName.classList.add("project-name");
	projectName.placeholder = "Project Name";
	if (mode === "edit") {
		projectName.value = context.project.name;
	}

	const cancelButton = document.createElement("button");
	projectConfigElement.appendChild(cancelButton);
	cancelButton.classList.add(
		"UIButton",
		"press-effect",
		"cancel-project-button"
	);
	cancelButton.textContent = "Cancel";
	cancelButton.addEventListener("click", () => {
		_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.container.removeChild(screen);
	});

	const saveButton = document.createElement("button");
	projectConfigElement.appendChild(saveButton);
	saveButton.classList.add("UIButton", "press-effect", "save-project-button");
	saveButton.textContent = "Save";
	saveButton.addEventListener("click", (e) => {
		if (mode === "create") {
			const project = new _model_js__WEBPACK_IMPORTED_MODULE_0__.Project(`${projectName.value}`);
			_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.projects.push(project);
			localStorage.setItem(project.pid, JSON.stringify(project));
			_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.currentProject = project;
			if (_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.content.firstChild) {
				_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.content.removeChild(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.content.firstChild);
			}
			projectSidebarView(project, context);
			projectView(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.content);

			//Updating metadata.
			_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.metadata.currentPid = project.pid;
			localStorage.setItem("metadata", JSON.stringify(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.metadata));
		} else if (mode === "edit") {
			context.project.name = projectName.value;
			context.sidebar.innerHTML = projectName.value;
			if (_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.currentProject.pid === context.project.pid) {
				if (_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.content.firstChild) {
					_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.content.removeChild(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.content.firstChild);
				}
				projectView(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.content);
			}
			localStorage.setItem(
				context.project.pid,
				JSON.stringify(context.project)
			);
		}

		_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.container.removeChild(screen);
		e.stopPropagation();
	});

	_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.container.appendChild(screen);
}

function taskConfigView(context, mode) {
	const screen = document.createElement("div");
	screen.classList.add("block-screen");

	const taskConfigElement = document.createElement("div");
	screen.appendChild(taskConfigElement);
	taskConfigElement.classList.add("task-config");

	const taskTitle = document.createElement("input");
	taskConfigElement.appendChild(taskTitle);
	taskTitle.classList.add("task-config-title");
	taskTitle.placeholder = "Task Title";
	if (mode === "edit") {
		taskTitle.value = context.task.title;
	}

	const taskDescription = document.createElement("textarea");
	taskConfigElement.appendChild(taskDescription);
	taskDescription.classList.add("task-config-description");
	taskDescription.placeholder = "Task Description";
	if (mode === "edit") {
		taskDescription.value = context.task.description;
	}

	const taskDueDate = document.createElement("input");
	taskConfigElement.appendChild(taskDueDate);
	taskDueDate.classList.add("task-config-due-date");
	taskDueDate.setAttribute("type", "date");
	const todayDate = new Date();
	taskDueDate.value =
		todayDate.getFullYear().toString() +
		"-" +
		(todayDate.getMonth() + 1).toString().padStart(2, 0) +
		"-" +
		todayDate.getDate().toString().padStart(2, 0);
	if (mode === "edit") {
		taskDueDate.value =
			context.task.dueDate.getFullYear().toString() +
			"-" +
			(context.task.dueDate.getMonth() + 1).toString().padStart(2, 0) +
			"-" +
			context.task.dueDate.getDate().toString().padStart(2, 0);
	}

	const taskPriority = document.createElement("select");
	taskConfigElement.appendChild(taskPriority);
	taskPriority.classList.add("task-config-priority");
	taskPriority.options.add(new Option("Low"));
	taskPriority.options.add(new Option("Medium"));
	taskPriority.options.add(new Option("High"));
	if (mode === "edit") {
		taskPriority.value = context.task.priority;
	}

	const cancelButton = document.createElement("button");
	taskConfigElement.appendChild(cancelButton);
	cancelButton.classList.add("UIButton", "press-effect", "cancel-task-button");
	cancelButton.textContent = "Cancel";
	cancelButton.addEventListener("click", () => {
		_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.container.removeChild(screen);
	});

	const saveButton = document.createElement("button");
	taskConfigElement.appendChild(saveButton);
	saveButton.classList.add("UIButton", "press-effect", "save-task-button");
	saveButton.textContent = "Save";
	saveButton.addEventListener("click", () => {
		if (mode == "create") {
			const task = new _model_js__WEBPACK_IMPORTED_MODULE_0__.Task(
				`${taskTitle.value}`,
				`${taskDescription.value}`,
				new Date(
					taskDueDate.value.split("-")[0],
					taskDueDate.value.split("-")[1] - 1,
					taskDueDate.value.split("-")[2]
				),
				`${taskPriority.value}`
			);

			_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.currentProject.addTask(task);

			taskView(task, context);
			console.log(new Date(Date.now()).toISOString());
			if (
				task.dueDate.toLocaleDateString() === new Date().toLocaleDateString()
			) {
				_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.todayProject.addTask(task);
			}
		} else if (mode == "edit") {
			context.task.title = taskTitle.value;
			context.task.description = taskDescription.value;
			context.task.dueDate = new Date(
				taskDueDate.value.split("-")[0],
				taskDueDate.value.split("-")[1] - 1,
				taskDueDate.value.split("-")[2]
			);
			context.task.priority = taskPriority.value;

			context.taskTitle.innerHTML = taskTitle.value;
			context.taskDescription.innerHTML = taskDescription.value;
			context.taskDueDate.innerHTML =
				"Due Date: " + taskDueDate.valueAsDate.toLocaleDateString();
			context.taskPriority.innerHTML = "Priority: " + taskPriority.value;

			localStorage.setItem(
				_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.currentProject.pid,
				JSON.stringify(_controller_js__WEBPACK_IMPORTED_MODULE_1__.state.currentProject)
			);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUJBQW1CLEdBQUcsT0FBTyxpRkFBaUYsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxjQUFjLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGNBQWMsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sT0FBTyxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxTQUFTLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsU0FBUyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxRQUFRLEtBQUssUUFBUSxLQUFLLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFNBQVMsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsK0JBQStCLGdDQUFnQyxxQ0FBcUMsMEJBQTBCLG1DQUFtQyxpQ0FBaUMsNkNBQTZDLEdBQUcsT0FBTyxpQkFBaUIsY0FBYyxlQUFlLDJCQUEyQixHQUFHLGdCQUFnQixpQkFBaUIsa0JBQWtCLGtCQUFrQixtQ0FBbUMsaUNBQWlDLHlFQUF5RSxxQkFBcUIsNkJBQTZCLDhCQUE4Qiw4Q0FBOEMsR0FBRyxZQUFZLHNCQUFzQiw4Q0FBOEMsaUJBQWlCLGdCQUFnQixrQkFBa0Isd0JBQXdCLGtCQUFrQixHQUFHLGFBQWEsaUJBQWlCLGdCQUFnQix1QkFBdUIsOENBQThDLGtCQUFrQiwyQkFBMkIsOEJBQThCLEdBQUcsa0JBQWtCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGdCQUFnQixnQkFBZ0IsOEJBQThCLG1DQUFtQyxrQkFBa0Isd0JBQXdCLEdBQUcsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsZ0JBQWdCLGdCQUFnQiw0Q0FBNEMsdUJBQXVCLCtCQUErQiwwQkFBMEIsa0JBQWtCLEdBQUcsNkJBQTZCLGtCQUFrQixHQUFHLGFBQWEsdUJBQXVCLGlCQUFpQixnQkFBZ0Isa0JBQWtCLDhCQUE4QixnREFBZ0QscUJBQXFCLEdBQUcsc0JBQXNCLGdCQUFnQiw4Q0FBOEMsMkJBQTJCLGtCQUFrQixtQ0FBbUMsa0JBQWtCLHlCQUF5Qix3QkFBd0IsNENBQTRDLGdDQUFnQyxvSEFBb0gsa0JBQWtCLEdBQUcsY0FBYyxxQkFBcUIscUJBQXFCLHNCQUFzQixxQkFBcUIsZ0JBQWdCLHFCQUFxQiw0QkFBNEIsd0JBQXdCLEdBQUcsaUJBQWlCLG9CQUFvQixxQkFBcUIsdUJBQXVCLHNCQUFzQixHQUFHLGlCQUFpQix3QkFBd0IscUJBQXFCLHNCQUFzQix1QkFBdUIsc0JBQXNCLEdBQUcsb0JBQW9CLDJCQUEyQixxQkFBcUIscUJBQXFCLDhCQUE4QixxQkFBcUIsa0JBQWtCLGlCQUFpQixHQUFHLGdCQUFnQix1QkFBdUIsb0JBQW9CLEdBQUcsNEJBQTRCLGdCQUFnQixpQkFBaUIsa0JBQWtCLGlDQUFpQyx3QkFBd0IsR0FBRyxrQkFBa0IsZ0JBQWdCLHFCQUFxQixzQkFBc0Isa0JBQWtCLG1DQUFtQyx3QkFBd0IsK0JBQStCLGdEQUFnRCxxREFBcUQsbUNBQW1DLEdBQUcsaUJBQWlCLHFCQUFxQixzQkFBc0Isa0JBQWtCLGVBQWUscUJBQXFCLDRCQUE0Qix3QkFBd0IsR0FBRyxrQkFBa0IsZ0JBQWdCLGdCQUFnQixpQkFBaUIsa0JBQWtCLDJCQUEyQixnQ0FBZ0Msd0JBQXdCLGtCQUFrQixrQkFBa0IsK0NBQStDLHVCQUF1QiwrQkFBK0IsMEJBQTBCLEdBQUcsb0NBQW9DLGtCQUFrQixHQUFHLHVCQUF1QixnQkFBZ0IsaUJBQWlCLHVCQUF1QixxQkFBcUIsbURBQW1ELG1DQUFtQyxpQkFBaUIsaUJBQWlCLG1DQUFtQyw0QkFBNEIsZ0RBQWdELHNCQUFzQix3QkFBd0IsR0FBRyx5QkFBeUIscUJBQXFCLHFCQUFxQixzQkFBc0IscUJBQXFCLGlCQUFpQix3QkFBd0IsZ0JBQWdCLGdCQUFnQixxQkFBcUIsNEJBQTRCLHdCQUF3QixHQUFHLGlDQUFpQyx1QkFBdUIsb0JBQW9CLHlCQUF5QixzQkFBc0IsOENBQThDLDZCQUE2QixHQUFHLGtCQUFrQixnQkFBZ0IsaUJBQWlCLG9CQUFvQixzQ0FBc0MsR0FBRyxrQkFBa0IsaUJBQWlCLGtCQUFrQixnREFBZ0Qsd0JBQXdCLG9CQUFvQixhQUFhLGNBQWMscUNBQXFDLGtCQUFrQixnQ0FBZ0MsbUNBQW1DLG1FQUFtRSxvQkFBb0IscUJBQXFCLEdBQUcseUJBQXlCLG9CQUFvQixzQkFBc0IsaUJBQWlCLCtDQUErQyxtQkFBbUIsR0FBRyx5QkFBeUIsc0JBQXNCLHdCQUF3QixpQkFBaUIsaURBQWlELG1CQUFtQixHQUFHLGdCQUFnQixxQkFBcUIsZ0JBQWdCLGlCQUFpQiw4Q0FBOEMsdUJBQXVCLGtCQUFrQixxQkFBcUIsc0JBQXNCLHFCQUFxQixHQUFHLGlCQUFpQixpQkFBaUIsa0JBQWtCLGdEQUFnRCx3QkFBd0Isb0JBQW9CLGtCQUFrQixhQUFhLGNBQWMscUNBQXFDLGtCQUFrQixtQ0FBbUMsd0NBQXdDLCtIQUErSCxxQkFBcUIsR0FBRyxxQkFBcUIscUJBQXFCLGdCQUFnQixpQkFBaUIsOENBQThDLHdCQUF3QixrQkFBa0IscUJBQXFCLHNCQUFzQixxQkFBcUIsdUJBQXVCLEdBQUcsMkJBQTJCLDJCQUEyQixnQkFBZ0IsaUJBQWlCLHFCQUFxQixxQkFBcUIsOENBQThDLHdCQUF3QixrQkFBa0IsR0FBRyx3QkFBd0Isd0JBQXdCLG1CQUFtQixzQkFBc0IsdUJBQXVCLGVBQWUsaUJBQWlCLDhDQUE4Qyx3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLHFCQUFxQix1QkFBdUIsc0JBQXNCLGVBQWUsaUJBQWlCLDhDQUE4Qyx3QkFBd0IsR0FBRyxvQkFBb0Isb0JBQW9CLHNCQUFzQixpQkFBaUIsK0NBQStDLG1CQUFtQixzQkFBc0IsR0FBRyxzQkFBc0Isc0JBQXNCLHdCQUF3QixpQkFBaUIsaURBQWlELG1CQUFtQix3QkFBd0IsR0FBRyxrQ0FBa0MscUZBQXFGLEdBQUcsaUJBQWlCLHVCQUF1QixnQkFBZ0IsaUJBQWlCLHNCQUFzQixzQkFBc0IsdUJBQXVCLHdCQUF3QixHQUFHLGtCQUFrQix1QkFBdUIsaUJBQWlCLGtCQUFrQixnQ0FBZ0Msd0JBQXdCLGtCQUFrQixlQUFlLHNDQUFzQyxvQkFBb0IsMkJBQTJCLHdCQUF3QixrQ0FBa0MsdUJBQXVCLEdBQUcsa0JBQWtCLGdCQUFnQixpQkFBaUIsdUJBQXVCLHFCQUFxQiw4Q0FBOEMsNkJBQTZCLEdBQUcscUJBQXFCLG9CQUFvQixnQ0FBZ0MscUJBQXFCLGdDQUFnQyxxQ0FBcUMsbUJBQW1CLEdBQUcsdUNBQXVDLHdCQUF3QixHQUFHLHdCQUF3QixlQUFlLGdCQUFnQixrQkFBa0IsdUJBQXVCLHFCQUFxQiw4Q0FBOEMsR0FBRyw0QkFBNEIsa0JBQWtCLHFCQUFxQix1QkFBdUIsZUFBZSxnQkFBZ0IsOENBQThDLHVCQUF1QixtQ0FBbUMsR0FBRyx5QkFBeUIsa0JBQWtCLHFCQUFxQix1QkFBdUIsZUFBZSxnQkFBZ0IsOENBQThDLHVCQUF1QixpQ0FBaUMsR0FBRywwRUFBMEUsbUJBQW1CLEdBQUcsbUJBQW1CO0FBQ2ozc0I7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnlGO0FBQ3pGLFlBQXlGOztBQUV6Rjs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyx3RkFBTzs7OztBQUl4QixpRUFBZSwrRkFBYyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pzRDtBQUN6RixZQUF3Rjs7QUFFeEY7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJeEIsaUVBQWUsOEZBQWMsTUFBTTs7Ozs7Ozs7OztBQ1p0Qjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUVBQXFFLHFCQUFxQixjQUFjOztBQUV4Rzs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVRMkM7QUFDc0I7QUFDM0I7QUFDaEI7O0FBRXRCO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLHVEQUFnQjtBQUM1QztBQUNBLENBQUM7QUFDRDs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLDhDQUFPO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsOENBQU87QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUM7OztBQUdELGtEQUFXO0FBQ1g7QUFDQSxJQUFJLGtEQUFXO0FBQ2Y7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLGtEQUFrRDtBQUNoRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRzJDO0FBQ0g7QUFDbEI7QUFDQzs7QUFFdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsMkVBQStCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5RUFBNkI7QUFDakM7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDZEQUE2RDtBQUNsRTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHFFQUF5Qjs7QUFFbkQsS0FBSyxvRUFBd0IsS0FBSyxtRUFBdUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsOEVBQWtDO0FBQ25DO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sb0VBQXdCO0FBQzlCO0FBQ0E7QUFDQSxNQUFNLGdFQUFvQjtBQUMxQixHQUFHLGlGQUFxQztBQUN4QztBQUNBLEVBQUUsZ0VBQXVCO0FBQ3pCO0FBQ0EsRUFBRSxnRUFBb0I7QUFDdEIsTUFBTSxvRUFBd0I7QUFDOUIsR0FBRyxxRUFBeUIsQ0FBQyxvRUFBd0I7QUFDckQ7QUFDQSxjQUFjLHlEQUFhOztBQUUzQixFQUFFLHFFQUF5QjtBQUMzQixrREFBa0QsMERBQWM7QUFDaEU7O0FBRUE7QUFDQSxrQkFBa0IsbUVBQXVCO0FBQ3pDLGtCQUFrQixtRUFBdUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsMERBQWMsR0FBRyxpRUFBcUI7QUFDekM7QUFDQTtBQUNBLEdBQUcsZ0VBQW9CLEdBQUcsOERBQWtCO0FBQzVDLEdBQUcscUVBQXlCLEdBQUcsb0VBQXdCO0FBQ3ZELE9BQU8sb0VBQXdCO0FBQy9CLElBQUkscUVBQXlCLENBQUMsb0VBQXdCO0FBQ3REO0FBQ0EsZUFBZSx5REFBYTtBQUM1QjtBQUNBLG1EQUFtRCwwREFBYztBQUNqRSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0NBQWdDO0FBQ3ZEO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw4REFBa0I7QUFDdEMsb0JBQW9CLDhEQUFrQjs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxrRUFBc0I7QUFDdkI7QUFDQSxtQkFBbUIsbUVBQXVCO0FBQzFDLG1CQUFtQixtRUFBdUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdUVBQTJCO0FBQzdCLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDhDQUFPLElBQUksa0JBQWtCO0FBQ3BELEdBQUcsK0RBQW1CO0FBQ3RCO0FBQ0EsR0FBRyxnRUFBb0I7QUFDdkIsT0FBTyxvRUFBd0I7QUFDL0IsSUFBSSxxRUFBeUIsQ0FBQyxvRUFBd0I7QUFDdEQ7QUFDQTtBQUNBLGVBQWUseURBQWE7O0FBRTVCO0FBQ0EsR0FBRyxxRUFBeUI7QUFDNUIsbURBQW1ELDBEQUFjO0FBQ2pFLElBQUk7QUFDSjtBQUNBO0FBQ0EsT0FBTyxvRUFBd0I7QUFDL0IsUUFBUSxvRUFBd0I7QUFDaEMsS0FBSyxxRUFBeUIsQ0FBQyxvRUFBd0I7QUFDdkQ7QUFDQSxnQkFBZ0IseURBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsdUVBQTJCO0FBQzdCO0FBQ0EsRUFBRTs7QUFFRixDQUFDLHVFQUEyQjtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1RUFBMkI7QUFDN0IsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkNBQUk7QUFDeEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxzQkFBc0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sbUJBQW1CO0FBQzFCOztBQUVBLEdBQUcsd0VBQTRCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzRUFBMEI7QUFDOUI7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxvRUFBd0I7QUFDNUIsbUJBQW1CLGdFQUFvQjtBQUN2QztBQUNBOztBQUVBLEVBQUUsdUVBQTJCO0FBQzdCLEVBQUU7O0FBRUYsQ0FBQyx1RUFBMkI7QUFDNUI7O0FBUUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZWZmZWN0cy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZWZmZWN0cy5jc3M/NTkyOCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucHJlc3MtZWZmZWN0e1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXM7XFxufVxcbi5wcmVzcy1lZmZlY3Q6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLnByZXNzLWVmZmVjdDphY3RpdmV7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5zZWxlY3RlZHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmZhZGUtaW4ge1xcbiAgb3BhY2l0eTogMDtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDUwMG1zO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4uZmFkZS1vdXQge1xcbiAgb3BhY2l0eTogMTtcXG4gIGFuaW1hdGlvbjogZmFkZU91dCAzMDBtcztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9lZmZlY3RzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLFVBQVU7RUFDVix3QkFBd0I7RUFDeEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wcmVzcy1lZmZlY3R7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcztcXG59XFxuLnByZXNzLWVmZmVjdDpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4ucHJlc3MtZWZmZWN0OmFjdGl2ZXtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnNlbGVjdGVke1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uZmFkZS1pbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gNTAwbXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi5mYWRlLW91dCB7XFxuICBvcGFjaXR5OiAxO1xcbiAgYW5pbWF0aW9uOiBmYWRlT3V0IDMwMG1zO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZU91dCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxuXFx0LS1iYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNjQzO1xcblxcdC0tcHJvamVjdC1zaWRlYmFyLWNvbG9yOiAjZTNmNmY1O1xcblxcdC0tdGV4dC1jb2xvcjogI2ZmZmZmZjtcXG5cXHQtLWNhbmNlbC1idXR0b24tY29sb3I6ICNmZjhjOGM7XFxuXFx0LS1zYXZlLWJ1dHRvbi1jb2xvcjogIzYwZDBiNjtcXG5cXHQtLWNvbnRlbnQtYXJlYS1jb2xvcjogcmdiKDIzOSwgMjM2LCAyNDEpO1xcbn1cXG5cXG4qIHtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA4ZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiA4dmggOTJ2aDtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxcblxcdFxcdFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcblxcdFxcdFxcXCJzaWRlYmFyIGNvbnRlbnRcXFwiO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcblxcdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi5oZWFkZXJ7XFxuXFx0Z3JpZC1hcmVhOiBoZWFkZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAzMHB4O1xcbn1cXG5cXG4uc2lkZWJhcntcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Z3JpZC1hcmVhOiBzaWRlYmFyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRwYWRkaW5nOiAwIDEwcHggMTBweCAxMHB4O1xcbn1cXG4uc2lkZWJhci1oZWFkZXJ7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0aGVpZ2h0OiAyNiU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzNlM2M2YjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4ucHJvamVjdC1saXN0e1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRoZWlnaHQ6IDc0JTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoYmFja2dyb3VuZC1jb2xvcik7XFxuXFx0b3ZlcmZsb3cteTogc2Nyb2xsO1xcblxcblxcdC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXG5cXHRzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuXFx0cGFkZGluZzogMTBweDtcXG59XFxuLnByb2plY3Q6OndlYmtpdC1zY3JvbGxiYXJ7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbnRlbnR7XFxuXFx0Z3JpZC1hcmVhOiBjb250ZW50O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDIwcHggMCAwIDA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1hcmVhLWNvbG9yKTtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiBUYXNrICovXFxuLnRhc2t7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDFmciA4MHB4O1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmcjtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxcblxcdFxcdFxcXCJ0aXRsZSBkYXRlIHByaW9yaXR5IHByaW9yaXR5XFxcIlxcblxcdFxcdFxcXCJkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBvcHRpb25zXFxcIjtcXG5cXHRyb3ctZ2FwOiAxMHB4O1xcbn1cXG4udGFzay10aXRsZXtcXG5cXHRncmlkLWFyZWE6IHRpdGxlO1xcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi50YXNrLWR1ZS1kYXRle1xcblxcdGdyaWQtYXJlYTogZGF0ZTtcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuLnRhc2stcHJpb3JpdHl7XFxuXFx0Z3JpZC1hcmVhOiBwcmlvcml0eTtcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuLnRhc2stZGVzY3JpcHRpb257XFxuXFx0Z3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXG5cXHRmb250LXNpemU6IDEuMmVtO1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG59XFxuLnRhc2stb3B0aW9uc3tcXG5cXHRncmlkLWFyZWE6IG9wdGlvbnM7XFxuXFx0YWxpZ24tc2VsZjogZW5kO1xcbn1cXG5cXG4vKiBQcm9qZWN0ICovXFxuLnByb2plY3R7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucHJvamVjdC1oZWFkZXJ7XFxuXFx0Z3JpZC1yb3c6IDE7XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBhZGRpbmc6IDBweCA1MHB4IDBweCAyMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtYXJlYS1jb2xvcik7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcblxcdGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuLnByb2plY3QtdGl0bGV7XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdHdpZHRoOiA3MCU7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4udGFzay1jb250YWluZXJ7XFxuXFx0Z3JpZC1yb3c6IDI7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdHJvdy1nYXA6IDIwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcjIpO1xcblxcdG92ZXJmbG93LXk6IHNjcm9sbDtcXG5cXG5cXHQtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxuXFx0c2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbn1cXG4udGFzay1jb250YWluZXI6OndlYmtpdC1zY3JvbGxiYXJ7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtbGlzdC1pdGVte1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogNDBweDtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0bWFyZ2luLXRvcDogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0LXNpZGViYXItY29sb3IpO1xcblxcdGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG5cXHRvcGFjaXR5OiAwLjg7XFxuXFx0ZGlzcGxheTpncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxcblxcdFxcdFxcXCJ0aXRsZSBvcHRpb25zXFxcIjtcXG5cXHRwYWRkaW5nOiAwcHggMTBweDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucHJvamVjdC1zaWRlYmFyLXRpdGxle1xcblxcdGdyaWQtYXJlYTogdGl0bGU7XFxuXFx0Zm9udC1zaXplOiAxLjJlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogNzAlO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuXFxuXFxuLyogR2VuZXJhbCAqL1xcbi5VSUJ1dHRvbntcXG5cXHR3aWR0aDogZml0LWNvbnRlbnQ7XFxuXFx0cGFkZGluZzogMC43NWVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcblxcdGZvbnQtc2l6ZTogMC43NWVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLmJsb2NrLXNjcmVlbntcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcXG59XFxuLnByb2plY3QtY29uZmlne1xcblxcdHdpZHRoOiA1MDBweDtcXG5cXHRoZWlnaHQ6IDQwMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtYXJlYS1jb2xvcik7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0dG9wOiA1MCU7XFxuXFx0bGVmdDogNTAlO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxcblxcdFxcdFxcXCJpbnB1dCBpbnB1dFxcXCJcXG5cXHRcXHRcXFwiY2FuY2VsIHNhdmVcXFwiO1xcblxcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0YWxpZ24taXRlbXM6IGVuZDtcXG59XFxuXFxuLnNhdmUtcHJvamVjdC1idXR0b257XFxuXFx0Z3JpZC1hcmVhOiBzYXZlO1xcblxcdGp1c3RpZnktc2VsZjogZW5kO1xcblxcdHdpZHRoOiAxMDBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zYXZlLWJ1dHRvbi1jb2xvcik7XFxuXFx0Zm9udC1zaXplOiAxZW07XFxufVxcbi5jYW5jZWwtcHJvamVjdC1idXR0b257XFxuXFx0Z3JpZC1hcmVhOiBjYW5jZWw7XFxuXFx0anVzdGlmeS1zZWxmOiBzdGFydDtcXG5cXHR3aWR0aDogMTAwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FuY2VsLWJ1dHRvbi1jb2xvcik7XFxuXFx0Zm9udC1zaXplOiAxZW07XFxufVxcbi5wcm9qZWN0LW5hbWV7XFxuXFx0Z3JpZC1hcmVhOiBpbnB1dDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDQwcHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4udGFzay1jb25maWd7XFxuXFx0d2lkdGg6IDYwMHB4O1xcblxcdGhlaWdodDogNzAwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1hcmVhLWNvbG9yKTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdHRvcDogNTAlO1xcblxcdGxlZnQ6IDUwJTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMWZyIDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxcblxcdFxcdFxcXCJ0aXRsZSB0aXRsZVxcXCJcXG5cXHRcXHRcXFwiZGVzY3JpcHRpb24gZGVzY3JpcHRpb25cXFwiXFxuXFx0XFx0XFxcInByaW9yaXR5IGR1ZS1kYXRlXFxcIlxcblxcdFxcdFxcXCJjYW5jZWwgc2F2ZVxcXCI7XFxuXFx0YWxpZ24taXRlbXM6IGVuZDtcXG59XFxuLnRhc2stY29uZmlnLXRpdGxle1xcblxcdGdyaWQtYXJlYTogdGl0bGU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiA0MHB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4udGFzay1jb25maWctZGVzY3JpcHRpb257XFxuXFx0Z3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0Zm9udC1zaXplOiAxLjJlbTtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0cGFkZGluZzogMTBweDtcXG59XFxuLnRhc2stY29uZmlnLXByaW9yaXR5e1xcblxcdGdyaWQtYXJlYTogcHJpb3JpdHk7XFxuXFx0Zm9udC1zaXplOiAxZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHdpZHRoOiA3MCU7XFxuXFx0aGVpZ2h0OiA0MHB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi50YXNrLWNvbmZpZy1kdWUtZGF0ZXtcXG5cXHRncmlkLWFyZWE6IGR1ZS1kYXRlO1xcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGp1c3RpZnktc2VsZjogZW5kO1xcblxcdHdpZHRoOiA3MCU7XFxuXFx0aGVpZ2h0OiA0MHB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5zYXZlLXRhc2stYnV0dG9ue1xcblxcdGdyaWQtYXJlYTogc2F2ZTtcXG5cXHRqdXN0aWZ5LXNlbGY6IGVuZDtcXG5cXHR3aWR0aDogMTAwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2F2ZS1idXR0b24tY29sb3IpO1xcblxcdGZvbnQtc2l6ZTogMWVtO1xcblxcdGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG4uY2FuY2VsLXRhc2stYnV0dG9ue1xcblxcdGdyaWQtYXJlYTogY2FuY2VsO1xcblxcdGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuXFx0d2lkdGg6IDEwMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbmNlbC1idXR0b24tY29sb3IpO1xcblxcdGZvbnQtc2l6ZTogMWVtO1xcblxcdGp1c3RpZnktc2VsZjogc3RhcnQ7XFxufVxcblxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxcbiAgJ0ZJTEwnIDEsXFxuICAnd2dodCcgNzAwLFxcbiAgJ0dSQUQnIDIwMCxcXG4gICdvcHN6JyAzMDtcXG59XFxuXFxuXFxuLm1vcmUtbWVudXtcXG5cXHRncmlkLWFyZWE6IG9wdGlvbnM7XFxuXFx0d2lkdGg6IDQwcHg7XFxuXFx0aGVpZ2h0OiA0MHB4O1xcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcblxcdGp1c3RpZnktc2VsZjogZW5kO1xcblxcdHBhZGRpbmctbGVmdDogMThweDtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4ubW9yZS1tZW51LWxpc3R7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHdpZHRoOiAxMDBweDtcXG5cXHRoZWlnaHQ6IDEwMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMzZjNlNjM2NztcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0ei1pbmRleDogMztcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTE1JSwgLTUwJSk7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4ubW9yZS1tZW51LWl0ZW17XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAzMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRmb250LXNpemU6IDAuOGVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLm1vcmUtbWVudTpob3ZlcntcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzU0NTI3Nlxcbn1cXG4ubW9yZS1tZW51LmNsaWNrZWR7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzU0NTI3Nlxcbn1cXG4ubW9yZS1tZW51LmNsaWNrZWQgLm1vcmUtbWVudS1pY29ue1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubW9yZS1tZW51LmNsaWNrZWQgLm1vcmUtbWVudS1saXN0e1xcblxcdHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcblxcblxcbi5tb3JlLW1lbnUtaWNvbntcXG5cXHR3aWR0aDogNXB4O1xcblxcdGhlaWdodDogNXB4O1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdG1hcmdpbi10b3A6IDE4cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi5tb3JlLW1lbnUtaWNvbjo6YmVmb3Jle1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdGRpc3BsYXk6IGluaGVyaXQ7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHdpZHRoOiA1cHg7XFxuXFx0aGVpZ2h0OiA1cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMHB4KTtcXG59XFxuLm1vcmUtbWVudS1pY29uOjphZnRlcntcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRkaXNwbGF5OiBpbmhlcml0O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR3aWR0aDogNXB4O1xcblxcdGhlaWdodDogNXB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1cHgpO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0LWl0ZW06aG92ZXIgLm1vcmUtbWVudS1pY29uLCAudGFzazpob3ZlciAubW9yZS1tZW51LWljb257XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsMkJBQTJCO0NBQzNCLGdDQUFnQztDQUNoQyxxQkFBcUI7Q0FDckIsOEJBQThCO0NBQzlCLDRCQUE0QjtDQUM1Qix3Q0FBd0M7QUFDekM7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osU0FBUztDQUNULFVBQVU7Q0FDVixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsNEJBQTRCO0NBQzVCOzttQkFFa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLHdCQUF3QjtDQUN4Qix5QkFBeUI7Q0FDekIseUNBQXlDO0FBQzFDOztBQUVB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LGVBQWU7Q0FDZjtBQUNEO0FBQ0E7Q0FDQztBQUNEO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7Ozs7QUFJQTtDQUNDLFVBQVU7Q0FDVixXQUFXO0NBQ1gsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIseUNBQXlDO0FBQzFDOztBQUVBO0NBQ0MsV0FBVztDQUNYLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFdBQVc7Q0FDWCx5Q0FBeUM7Q0FDekMsa0JBQWtCO0NBQ2xCLDhCQUE4QjtBQUMvQjtBQUNBO0NBQ0MsV0FBVztDQUNYLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFdBQVc7Q0FDWCx5Q0FBeUM7Q0FDekMsa0JBQWtCO0NBQ2xCLDRCQUE0QjtBQUM3Qjs7QUFFQTtDQUNDLGNBQWM7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXG5cXHQtLWJhY2tncm91bmQtY29sb3I6ICMyNzI2NDM7XFxuXFx0LS1wcm9qZWN0LXNpZGViYXItY29sb3I6ICNlM2Y2ZjU7XFxuXFx0LS10ZXh0LWNvbG9yOiAjZmZmZmZmO1xcblxcdC0tY2FuY2VsLWJ1dHRvbi1jb2xvcjogI2ZmOGM4YztcXG5cXHQtLXNhdmUtYnV0dG9uLWNvbG9yOiAjNjBkMGI2O1xcblxcdC0tY29udGVudC1hcmVhLWNvbG9yOiByZ2IoMjM5LCAyMzYsIDI0MSk7XFxufVxcblxcbioge1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDhmcjtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDh2aCA5MnZoO1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuXFx0XFx0XFxcImhlYWRlciBoZWFkZXJcXFwiXFxuXFx0XFx0XFxcInNpZGViYXIgY29udGVudFxcXCI7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuXFx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxuLmhlYWRlcntcXG5cXHRncmlkLWFyZWE6IGhlYWRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi5zaWRlYmFye1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRncmlkLWFyZWE6IHNpZGViYXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XFxufVxcbi5zaWRlYmFyLWhlYWRlcntcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRoZWlnaHQ6IDI2JTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2UzYzZiO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5wcm9qZWN0LWxpc3R7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGhlaWdodDogNzQlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcihiYWNrZ3JvdW5kLWNvbG9yKTtcXG5cXHRvdmVyZmxvdy15OiBzY3JvbGw7XFxuXFxuXFx0LW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcblxcdHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcbn1cXG4ucHJvamVjdDo6d2Via2l0LXNjcm9sbGJhcntcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY29udGVudHtcXG5cXHRncmlkLWFyZWE6IGNvbnRlbnQ7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweCAwIDAgMDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWFyZWEtY29sb3IpO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIFRhc2sgKi9cXG4udGFza3tcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICBcXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0Y29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0anVzdGlmeS1pdGVtczogc3RhcnQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMWZyIDgwcHg7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuXFx0XFx0XFxcInRpdGxlIGRhdGUgcHJpb3JpdHkgcHJpb3JpdHlcXFwiXFxuXFx0XFx0XFxcImRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIG9wdGlvbnNcXFwiO1xcblxcdHJvdy1nYXA6IDEwcHg7XFxufVxcbi50YXNrLXRpdGxle1xcblxcdGdyaWQtYXJlYTogdGl0bGU7XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLnRhc2stZHVlLWRhdGV7XFxuXFx0Z3JpZC1hcmVhOiBkYXRlO1xcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG4udGFzay1wcmlvcml0eXtcXG5cXHRncmlkLWFyZWE6IHByaW9yaXR5O1xcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG4udGFzay1kZXNjcmlwdGlvbntcXG5cXHRncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcblxcdGZvbnQtc2l6ZTogMS4yZW07XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcbn1cXG4udGFzay1vcHRpb25ze1xcblxcdGdyaWQtYXJlYTogb3B0aW9ucztcXG5cXHRhbGlnbi1zZWxmOiBlbmQ7XFxufVxcblxcbi8qIFByb2plY3QgKi9cXG4ucHJvamVjdHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wcm9qZWN0LWhlYWRlcntcXG5cXHRncmlkLXJvdzogMTtcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMHB4IDUwcHggMHB4IDIwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1hcmVhLWNvbG9yKTtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuXFx0Y29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG4ucHJvamVjdC10aXRsZXtcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0d2lkdGg6IDcwJTtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi50YXNrLWNvbnRhaW5lcntcXG5cXHRncmlkLXJvdzogMjtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0cm93LWdhcDogMjBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yMik7XFxuXFx0b3ZlcmZsb3cteTogc2Nyb2xsO1xcblxcblxcdC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXG5cXHRzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxufVxcbi50YXNrLWNvbnRhaW5lcjo6d2Via2l0LXNjcm9sbGJhcntcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0LWl0ZW17XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiA0MHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRtYXJnaW4tdG9wOiAxMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3Qtc2lkZWJhci1jb2xvcik7XFxuXFx0Y29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcblxcdG9wYWNpdHk6IDAuODtcXG5cXHRkaXNwbGF5OmdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMWZyO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuXFx0XFx0XFxcInRpdGxlIG9wdGlvbnNcXFwiO1xcblxcdHBhZGRpbmc6IDBweCAxMHB4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wcm9qZWN0LXNpZGViYXItdGl0bGV7XFxuXFx0Z3JpZC1hcmVhOiB0aXRsZTtcXG5cXHRmb250LXNpemU6IDEuMmVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiA3MCU7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5cXG5cXG4vKiBHZW5lcmFsICovXFxuLlVJQnV0dG9ue1xcblxcdHdpZHRoOiBmaXQtY29udGVudDtcXG5cXHRwYWRkaW5nOiAwLjc1ZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41ZW07XFxuXFx0Zm9udC1zaXplOiAwLjc1ZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG5cXG4uYmxvY2stc2NyZWVue1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xcbn1cXG4ucHJvamVjdC1jb25maWd7XFxuXFx0d2lkdGg6IDUwMHB4O1xcblxcdGhlaWdodDogNDAwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1hcmVhLWNvbG9yKTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR0b3A6IDUwJTtcXG5cXHRsZWZ0OiA1MCU7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuXFx0XFx0XFxcImlucHV0IGlucHV0XFxcIlxcblxcdFxcdFxcXCJjYW5jZWwgc2F2ZVxcXCI7XFxuXFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHRhbGlnbi1pdGVtczogZW5kO1xcbn1cXG5cXG4uc2F2ZS1wcm9qZWN0LWJ1dHRvbntcXG5cXHRncmlkLWFyZWE6IHNhdmU7XFxuXFx0anVzdGlmeS1zZWxmOiBlbmQ7XFxuXFx0d2lkdGg6IDEwMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNhdmUtYnV0dG9uLWNvbG9yKTtcXG5cXHRmb250LXNpemU6IDFlbTtcXG59XFxuLmNhbmNlbC1wcm9qZWN0LWJ1dHRvbntcXG5cXHRncmlkLWFyZWE6IGNhbmNlbDtcXG5cXHRqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcblxcdHdpZHRoOiAxMDBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYW5jZWwtYnV0dG9uLWNvbG9yKTtcXG5cXHRmb250LXNpemU6IDFlbTtcXG59XFxuLnByb2plY3QtbmFtZXtcXG5cXHRncmlkLWFyZWE6IGlucHV0O1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogNDBweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi50YXNrLWNvbmZpZ3tcXG5cXHR3aWR0aDogNjAwcHg7XFxuXFx0aGVpZ2h0OiA3MDBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWFyZWEtY29sb3IpO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0dG9wOiA1MCU7XFxuXFx0bGVmdDogNTAlO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnIgMWZyO1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuXFx0XFx0XFxcInRpdGxlIHRpdGxlXFxcIlxcblxcdFxcdFxcXCJkZXNjcmlwdGlvbiBkZXNjcmlwdGlvblxcXCJcXG5cXHRcXHRcXFwicHJpb3JpdHkgZHVlLWRhdGVcXFwiXFxuXFx0XFx0XFxcImNhbmNlbCBzYXZlXFxcIjtcXG5cXHRhbGlnbi1pdGVtczogZW5kO1xcbn1cXG4udGFzay1jb25maWctdGl0bGV7XFxuXFx0Z3JpZC1hcmVhOiB0aXRsZTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDQwcHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi50YXNrLWNvbmZpZy1kZXNjcmlwdGlvbntcXG5cXHRncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRmb250LXNpemU6IDEuMmVtO1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcbn1cXG4udGFzay1jb25maWctcHJpb3JpdHl7XFxuXFx0Z3JpZC1hcmVhOiBwcmlvcml0eTtcXG5cXHRmb250LXNpemU6IDFlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0d2lkdGg6IDcwJTtcXG5cXHRoZWlnaHQ6IDQwcHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLnRhc2stY29uZmlnLWR1ZS1kYXRle1xcblxcdGdyaWQtYXJlYTogZHVlLWRhdGU7XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1zZWxmOiBlbmQ7XFxuXFx0d2lkdGg6IDcwJTtcXG5cXHRoZWlnaHQ6IDQwcHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLnNhdmUtdGFzay1idXR0b257XFxuXFx0Z3JpZC1hcmVhOiBzYXZlO1xcblxcdGp1c3RpZnktc2VsZjogZW5kO1xcblxcdHdpZHRoOiAxMDBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zYXZlLWJ1dHRvbi1jb2xvcik7XFxuXFx0Zm9udC1zaXplOiAxZW07XFxuXFx0anVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcbi5jYW5jZWwtdGFzay1idXR0b257XFxuXFx0Z3JpZC1hcmVhOiBjYW5jZWw7XFxuXFx0anVzdGlmeS1zZWxmOiBzdGFydDtcXG5cXHR3aWR0aDogMTAwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FuY2VsLWJ1dHRvbi1jb2xvcik7XFxuXFx0Zm9udC1zaXplOiAxZW07XFxuXFx0anVzdGlmeS1zZWxmOiBzdGFydDtcXG59XFxuXFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XFxuICAnRklMTCcgMSxcXG4gICd3Z2h0JyA3MDAsXFxuICAnR1JBRCcgMjAwLFxcbiAgJ29wc3onIDMwO1xcbn1cXG5cXG5cXG4ubW9yZS1tZW51e1xcblxcdGdyaWQtYXJlYTogb3B0aW9ucztcXG5cXHR3aWR0aDogNDBweDtcXG5cXHRoZWlnaHQ6IDQwcHg7XFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxuXFx0anVzdGlmeS1zZWxmOiBlbmQ7XFxuXFx0cGFkZGluZy1sZWZ0OiAxOHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5tb3JlLW1lbnUtbGlzdHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0d2lkdGg6IDEwMHB4O1xcblxcdGhlaWdodDogMTAwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzNmM2U2MzY3O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHR6LWluZGV4OiAzO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMTUlLCAtNTAlKTtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5tb3JlLW1lbnUtaXRlbXtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDMwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGZvbnQtc2l6ZTogMC44ZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG5cXG4ubW9yZS1tZW51OmhvdmVye1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ1Mjc2XFxufVxcbi5tb3JlLW1lbnUuY2xpY2tlZHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ1Mjc2XFxufVxcbi5tb3JlLW1lbnUuY2xpY2tlZCAubW9yZS1tZW51LWljb257XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tb3JlLW1lbnUuY2xpY2tlZCAubW9yZS1tZW51LWxpc3R7XFxuXFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuXFxuXFxuLm1vcmUtbWVudS1pY29ue1xcblxcdHdpZHRoOiA1cHg7XFxuXFx0aGVpZ2h0OiA1cHg7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0bWFyZ2luLXRvcDogMThweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxuLm1vcmUtbWVudS1pY29uOjpiZWZvcmV7XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0ZGlzcGxheTogaW5oZXJpdDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0d2lkdGg6IDVweDtcXG5cXHRoZWlnaHQ6IDVweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwcHgpO1xcbn1cXG4ubW9yZS1tZW51LWljb246OmFmdGVye1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdGRpc3BsYXk6IGluaGVyaXQ7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHdpZHRoOiA1cHg7XFxuXFx0aGVpZ2h0OiA1cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDVweCk7XFxufVxcblxcbi5wcm9qZWN0LWxpc3QtaXRlbTpob3ZlciAubW9yZS1tZW51LWljb24sIC50YXNrOmhvdmVyIC5tb3JlLW1lbnUtaWNvbntcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZWZmZWN0cy5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB7IFRhc2ssIFByb2plY3QgfSBmcm9tICcuL21vZGVsLmpzJztcbmltcG9ydCB7IHByb2plY3RWaWV3LCBzaWRlYmFyVmlldywgdGFza0NvbmZpZ1ZpZXd9IGZyb20gXCIuL3ZpZXdcIjtcbmltcG9ydCB7IGNvbXBhcmVBc2MgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG5cblxuY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbmNvbnN0IHN0YXRlID0ge1xuICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgcHJvamVjdHM6IFtdLFxuICAgIGN1cnJlbnRQcm9qZWN0OiBudWxsLFxuICAgIGluYm94UHJvamVjdDogbnVsbCxcbiAgICB0b2RheVByb2plY3Q6IG51bGwsXG4gICAgbWV0YWRhdGE6IHtcbiAgICAgICAgY3VycmVudFBpZDogbnVsbCxcbiAgICAgICAgaW5ib3hQaWQ6IG51bGwsXG4gICAgICAgIHRvZGF5UGlkOiBudWxsXG4gICAgfVxufVxuXG5PYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goa2V5ID0+IHtcbiAgICBpZihrZXkgIT09ICdtZXRhZGF0YScpe1xuICAgICAgICBzdGF0ZS5wcm9qZWN0cy5wdXNoKFByb2plY3QuZnJvbUpzb24obG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkpO1xuICAgIH0gXG59KTtcbnN0YXRlLnByb2plY3RzLnNvcnQoKGEsIGIpID0+IGEucGlkIC0gYi5waWQpO1xuXG5cblxuaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21ldGFkYXRhJykpe1xuICAgIHN0YXRlLm1ldGFkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbWV0YWRhdGEnKSk7XG4gICAgc3RhdGUuY3VycmVudFByb2plY3QgPSBzdGF0ZS5wcm9qZWN0cy5maW5kKHAgPT4gcC5waWQgPT09IHN0YXRlLm1ldGFkYXRhLmN1cnJlbnRQaWQpO1xuICAgIHN0YXRlLmluYm94UHJvamVjdCA9IHN0YXRlLnByb2plY3RzLmZpbmQocCA9PiBwLnBpZCA9PT0gc3RhdGUubWV0YWRhdGEuaW5ib3hQaWQpO1xuICAgIHN0YXRlLnRvZGF5UHJvamVjdCA9IHN0YXRlLnByb2plY3RzLmZpbmQocCA9PiBwLnBpZCA9PT0gc3RhdGUubWV0YWRhdGEudG9kYXlQaWQpO1xuICAgIGNvbnNvbGUubG9nKFwiZm91bmQgbWV0YWRhdGFcIik7XG59XG5cbmlmKHN0YXRlLmluYm94UHJvamVjdCA9PT0gbnVsbCl7XG4gICAgc3RhdGUuaW5ib3hQcm9qZWN0ID0gbmV3IFByb2plY3QoJ0luYm94Jyk7XG4gICAgc3RhdGUucHJvamVjdHMucHVzaChzdGF0ZS5pbmJveFByb2plY3QpO1xuICAgIHN0YXRlLm1ldGFkYXRhLmluYm94UGlkID0gc3RhdGUuaW5ib3hQcm9qZWN0LnBpZDtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdGF0ZS5pbmJveFByb2plY3QucGlkLCBKU09OLnN0cmluZ2lmeShzdGF0ZS5pbmJveFByb2plY3QpKTtcbiAgICBjb25zb2xlLmxvZyhcIkluYm94IHByb2plY3QgY3JlYXRlZC5cIik7XG59XG5cbmlmKHN0YXRlLnRvZGF5UHJvamVjdCA9PT0gbnVsbCl7XG4gICAgc3RhdGUudG9kYXlQcm9qZWN0ID0gbmV3IFByb2plY3QoJ1RvZGF5Jyk7XG4gICAgc3RhdGUucHJvamVjdHMucHVzaChzdGF0ZS50b2RheVByb2plY3QpO1xuICAgIHN0YXRlLm1ldGFkYXRhLnRvZGF5UGlkID0gc3RhdGUudG9kYXlQcm9qZWN0LnBpZDtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdGF0ZS50b2RheVByb2plY3QucGlkLCBKU09OLnN0cmluZ2lmeShzdGF0ZS50b2RheVByb2plY3QpKTtcbiAgICBjb25zb2xlLmxvZyhcIlRvZGF5IHByb2plY3QgY3JlYXRlZC5cIik7XG59XG5cbnN0YXRlLnRvZGF5UHJvamVjdC5jbGVhclRhc2tzKCk7XG5zdGF0ZS5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgIGlmKHByb2plY3QucGlkICE9PSBzdGF0ZS50b2RheVByb2plY3QucGlkKXtcbiAgICAgICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgaWYodGFzay5kdWVEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpID09PSBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpKXtcbiAgICAgICAgICAgICAgICBzdGF0ZS50b2RheVByb2plY3QuYWRkVGFzayh0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5cblxuc2lkZWJhclZpZXcoY29udGFpbmVyKTtcbmlmKHN0YXRlLmN1cnJlbnRQcm9qZWN0KXtcbiAgICBwcm9qZWN0Vmlldyhjb250ZW50KTtcbn1cblxubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21ldGFkYXRhJywgSlNPTi5zdHJpbmdpZnkoc3RhdGUubWV0YWRhdGEpKTtcblxuZXhwb3J0IHsgc3RhdGUgfTsiLCJjbGFzcyBUYXNre1xuXHR0aXRsZTtcblx0ZGVzY3JpcHRpb247XG5cdGR1ZURhdGU7XG5cdHByaW9yaXR5O1xuXHRjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KXtcblx0XHR0aGlzLnRpdGxlID0gdGl0bGU7XG5cdFx0dGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuXHRcdHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG5cdFx0dGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuXHR9XG5cblx0Z2V0IHRpdGxlKCl7XG5cdFx0cmV0dXJuIHRoaXMudGl0bGU7XG5cdH1cblx0Z2V0IGRlc2NyaXB0aW9uKCl7XG5cdFx0cmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG5cdH1cblx0Z2V0IGR1ZURhdGUoKXtcblx0XHRyZXR1cm4gdGhpcy5kdWVEYXRlO1xuXHR9XG5cdGdldCBwcmlvcml0eSgpe1xuXHRcdHJldHVybiB0aGlzLnByaW9yaXR5O1xuXHR9XG5cblx0dG9KU09OKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRpdGxlOiB0aGlzLnRpdGxlLFxuXHRcdFx0ZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG5cdFx0XHRkdWVEYXRlOiB0aGlzLmR1ZURhdGUudG9TdHJpbmcoKSxcblx0XHRcdHByaW9yaXR5OiB0aGlzLnByaW9yaXR5LFxuXHRcdH07XG5cdH1cblxuXHQvL3Rha2VzIGEgamFzb24gc3RyaW5nIGFuZCByZXR1cm5zIGEgdGFzayBvYmplY3Rcblx0c3RhdGljIGZyb21Kc29uKGpzb24pe1xuXHRcdGNvbnN0IG9iaiA9IEpTT04ucGFyc2UoanNvbik7XG5cblx0XHRjb25zdCB0YXNrID0gbmV3IFRhc2sob2JqLnRpdGxlLCBvYmouZGVzY3JpcHRpb24sIG5ldyBEYXRlKG9iai5kdWVEYXRlKSwgb2JqLnByaW9yaXR5KTtcblx0XHRyZXR1cm4gdGFzaztcblxuXHR9XG59XG5cbmNsYXNzIFByb2plY3R7XG5cdG5hbWU7XG5cdHRhc2tzO1xuXHQjcGlkO1xuXHRjb25zdHJ1Y3RvcihuYW1lKXtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuI3BpZCA9IERhdGUubm93KCk7XG5cdFx0dGhpcy50YXNrcyA9IFtdO1xuXHR9XG5cdFxuXHRnZXQgbmFtZSgpe1xuXHRcdHJldHVybiB0aGlzLm5hbWU7XG5cdH1cblx0Z2V0IHRhc2tzKCl7XG5cdFx0cmV0dXJuIHRoaXMudGFza3M7XG5cdH1cblx0Z2V0IHBpZCgpe1xuXHRcdHJldHVybiB0aGlzLiNwaWQ7XG5cdH1cblxuXHRhZGRUYXNrKHRhc2spe1xuXHRcdHRoaXMudGFza3MucHVzaCh0YXNrKTtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLiNwaWQsIEpTT04uc3RyaW5naWZ5KHRoaXMpKTtcblx0fVxuXHRyZW1vdmVUYXNrKHRhc2spe1xuXHRcdHRoaXMudGFza3Muc3BsaWNlKHRoaXMudGFza3MuaW5kZXhPZih0YXNrKSwgMSk7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy4jcGlkLCBKU09OLnN0cmluZ2lmeSh0aGlzKSk7XG5cdH1cblx0Y2xlYXJUYXNrcygpe1xuXHRcdHRoaXMudGFza3MgPSBbXTtcblx0fVxuXHRnZXRUYXNrKGluZGV4KXtcblx0XHRyZXR1cm4gdGhpcy50YXNrc1tpbmRleF07XG5cdH1cblx0dG9KU09OKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5hbWU6IHRoaXMubmFtZSxcblx0XHRcdHBpZDogdGhpcy4jcGlkLFxuXHRcdFx0dGFza3M6IHRoaXMudGFza3MsXG5cdFx0fTtcblx0fVxuXG5cdCNzZXRQcm9qZWN0SWQocGlkKXtcblx0XHR0aGlzLiNwaWQgPSBwaWQ7XG5cdH1cblxuXHQvL3Rha2VzIGEgamFzb24gc3RyaW5nIGFuZCByZXR1cm5zIGEgcHJvamVjdCBvYmplY3Rcblx0c3RhdGljIGZyb21Kc29uKGpzb24pe1xuXHRcdGNvbnN0IG9iaiA9IEpTT04ucGFyc2UoanNvbik7XG5cblx0XHRjb25zdCBwciA9IG5ldyBQcm9qZWN0KG9iai5uYW1lKTtcblx0XHRwci4jc2V0UHJvamVjdElkKG9iai5waWQpO1xuXHRcdG9iai50YXNrcy5mb3JFYWNoKHRhc2sgPT4geyBwci5hZGRUYXNrKFRhc2suZnJvbUpzb24oSlNPTi5zdHJpbmdpZnkodGFzaykpKTsgfSk7XG5cdFx0cmV0dXJuIHByO1xuXHR9XG59XG5cblxuZXhwb3J0IHsgVGFzaywgUHJvamVjdCB9OyIsImltcG9ydCB7IFRhc2ssIFByb2plY3QgfSBmcm9tIFwiLi9tb2RlbC5qc1wiO1xuaW1wb3J0IHsgc3RhdGUgfSBmcm9tIFwiLi9jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBcIi4vZWZmZWN0cy5jc3NcIjtcblxuZnVuY3Rpb24gdGFza1ZpZXcodGFzaywgcGFyZW50KSB7XG5cdGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dGFza0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2tcIiwgXCJmYWRlLWluXCIpO1xuXG5cdGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG5cdHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGFzay10aXRsZVwiKTtcblx0dGFza1RpdGxlLmlubmVySFRNTCA9IHRhc2sudGl0bGU7XG5cblx0Y29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcblx0dGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlc2NyaXB0aW9uXCIpO1xuXHR0YXNrRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gdGFzay5kZXNjcmlwdGlvbjtcblxuXHRjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcblx0dGFza0R1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRhc2stZHVlLWRhdGVcIik7XG5cdHRhc2tEdWVEYXRlLmlubmVySFRNTCA9IFwiRHVlIGRhdGU6IFwiICsgdGFzay5kdWVEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuXG5cdGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XG5cdHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidGFzay1wcmlvcml0eVwiKTtcblx0dGFza1ByaW9yaXR5LmlubmVySFRNTCA9IFwiUHJpb3JpdHk6IFwiICsgdGFzay5wcmlvcml0eTtcblxuXHRjb25zdCBtb3JlTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdG1vcmVNZW51LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLW9wdGlvbnNcIiwgXCJtb3JlLW1lbnVcIik7XG5cdHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKG1vcmVNZW51KTtcblxuXHRtb3JlTWVudS5vbmNsaWNrID0gKCkgPT4ge1xuXHRcdG1vcmVNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJjbGlja2VkXCIpO1xuXHR9XG5cblx0Y29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdG1vcmVNZW51LmFwcGVuZENoaWxkKGljb24pO1xuXHRpY29uLmNsYXNzTGlzdC5hZGQoXCJtb3JlLW1lbnUtaWNvblwiKTtcblxuXHRjb25zdCBtb3JlTWVudUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRtb3JlTWVudS5hcHBlbmRDaGlsZChtb3JlTWVudUxpc3QpO1xuXHRtb3JlTWVudUxpc3QuY2xhc3NMaXN0LmFkZChcIm1vcmUtbWVudS1saXN0XCIsIFwiZmFkZS1pblwiKTtcblxuXHRjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRtb3JlTWVudUxpc3QuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblx0ZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcmVzcy1lZmZlY3RcIiwgXCJtb3JlLW1lbnUtaXRlbVwiKTtcblx0ZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblx0ZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdHRhc2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmYWRlLW91dFwiKTtcblx0XHR0YXNrRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+IHtcblx0XHRcdHN0YXRlLmN1cnJlbnRQcm9qZWN0LnJlbW92ZVRhc2sodGFzayk7XG5cdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQodGFza0VsZW1lbnQpO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHR0YXNrLmR1ZURhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCkgPT09IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKClcblx0XHRcdCkge1xuXHRcdFx0XHRzdGF0ZS50b2RheVByb2plY3QucmVtb3ZlVGFzayh0YXNrKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG5cblx0Y29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdG1vcmVNZW51TGlzdC5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblx0ZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHJlc3MtZWZmZWN0XCIsIFwibW9yZS1tZW51LWl0ZW1cIik7XG5cdGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcblx0ZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHR0YXNrQ29uZmlnVmlldyhcblx0XHRcdHsgdGFzaywgdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEdWVEYXRlLCB0YXNrUHJpb3JpdHkgfSxcblx0XHRcdFwiZWRpdFwiXG5cdFx0KTtcblx0fSk7XG5cblx0cGFyZW50LmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gcHJvamVjdFZpZXcocGFyZW50KSB7XG5cdGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0cHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG5cblx0Y29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHByb2plY3RFbGVtZW50LmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuXHRwcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWhlYWRlclwiKTtcblxuXHRjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG5cdHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZVwiKTtcblx0cHJvamVjdFRpdGxlLmlubmVySFRNTCA9IHN0YXRlLmN1cnJlbnRQcm9qZWN0Lm5hbWU7XG5cblx0aWYgKHN0YXRlLmN1cnJlbnRQcm9qZWN0LnBpZCAhPT0gc3RhdGUubWV0YWRhdGEudG9kYXlQaWQpIHtcblx0XHRjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuXHRcdGFkZFRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZChcIlVJQnV0dG9uXCIsIFwicHJlc3MtZWZmZWN0XCIpO1xuXHRcdGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG5cdFx0YWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0dGFza0NvbmZpZ1ZpZXcodGFza0NvbnRhaW5lciwgXCJjcmVhdGVcIiwgcHJvamVjdEVsZW1lbnQpO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHByb2plY3RFbGVtZW50LmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuXHR0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lclwiKTtcblx0c3RhdGUuY3VycmVudFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuXHRcdHRhc2tWaWV3KHRhc2ssIHRhc2tDb250YWluZXIpO1xuXHR9KTtcblxuXHRwYXJlbnQuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0U2lkZWJhclZpZXcocHJvamVjdCwgcGFyZW50KSB7XG5cdGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0cHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGlzdC1pdGVtXCIpO1xuXG5cdGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHByb2plY3RFbGVtZW50LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG5cdHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1zaWRlYmFyLXRpdGxlXCIpO1xuXHRwcm9qZWN0VGl0bGUuaW5uZXJIVE1MID0gcHJvamVjdC5uYW1lO1xuXG5cdHByb2plY3RFbGVtZW50Lm9uY2xpY2sgPSAoKSA9PiB7XG5cdFx0aWYgKHN0YXRlLmN1cnJlbnRQcm9qZWN0LnBpZCA9PT0gcHJvamVjdC5waWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKHN0YXRlLnByb2plY3RFbGVtZW50KSB7XG5cdFx0XHRzdGF0ZS5wcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwic2VsZWN0ZWRcIik7XG5cdFx0fVxuXHRcdHN0YXRlW1wicHJvamVjdEVsZW1lbnRcIl0gPSBwcm9qZWN0RWxlbWVudDtcblx0XHRwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwic2VsZWN0ZWRcIik7XG5cdFx0c3RhdGUuY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuXHRcdGlmIChzdGF0ZS5jb250ZW50LmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0YXRlLmNvbnRlbnQucmVtb3ZlQ2hpbGQoc3RhdGUuY29udGVudC5maXJzdENoaWxkKTtcblx0XHR9XG5cdFx0cHJvamVjdFZpZXcoc3RhdGUuY29udGVudCk7XG5cblx0XHRzdGF0ZS5tZXRhZGF0YS5jdXJyZW50UGlkID0gcHJvamVjdC5waWQ7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtZXRhZGF0YVwiLCBKU09OLnN0cmluZ2lmeShzdGF0ZS5tZXRhZGF0YSkpO1xuXHR9O1xuXG5cdGlmIChcblx0XHRwcm9qZWN0LnBpZCAhPT0gc3RhdGUubWV0YWRhdGEuaW5ib3hQaWQgJiZcblx0XHRwcm9qZWN0LnBpZCAhPT0gc3RhdGUubWV0YWRhdGEudG9kYXlQaWRcblx0KSB7XG5cdFx0Y29uc3QgbW9yZU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdG1vcmVNZW51LmNsYXNzTGlzdC5hZGQoXCJtb3JlLW1lbnVcIik7XG5cdFx0cHJvamVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQobW9yZU1lbnUpO1xuXG5cdFx0bW9yZU1lbnUub25jbGljayA9ICgpID0+IHtcblx0XHRcdG1vcmVNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJjbGlja2VkXCIpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdG1vcmVNZW51LmFwcGVuZENoaWxkKGljb24pO1xuXHRcdGljb24uY2xhc3NMaXN0LmFkZChcIm1vcmUtbWVudS1pY29uXCIpO1xuXG5cdFx0Y29uc3QgbW9yZU1lbnVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRtb3JlTWVudS5hcHBlbmRDaGlsZChtb3JlTWVudUxpc3QpO1xuXHRcdG1vcmVNZW51TGlzdC5jbGFzc0xpc3QuYWRkKFwibW9yZS1tZW51LWxpc3RcIiwgXCJmYWRlLWluXCIpO1xuXG5cdFx0Y29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRtb3JlTWVudUxpc3QuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblx0XHRkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcInByZXNzLWVmZmVjdFwiLCBcIm1vcmUtbWVudS1pdGVtXCIpO1xuXHRcdGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG5cdFx0ZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0c3RhdGUucHJvamVjdHMgPSBzdGF0ZS5wcm9qZWN0cy5maWx0ZXIoKHApID0+IHAucGlkICE9PSBwcm9qZWN0LnBpZCk7XG5cdFx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9qZWN0LnBpZCk7XG5cdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQocHJvamVjdEVsZW1lbnQpO1xuXHRcdFx0c3RhdGUuY3VycmVudFByb2plY3QgPSBzdGF0ZS5pbmJveFByb2plY3Q7XG5cdFx0XHRzdGF0ZS5tZXRhZGF0YS5jdXJyZW50UGlkID0gc3RhdGUuY3VycmVudFByb2plY3QucGlkO1xuXHRcdFx0aWYgKHN0YXRlLmNvbnRlbnQuZmlyc3RDaGlsZCkge1xuXHRcdFx0XHRzdGF0ZS5jb250ZW50LnJlbW92ZUNoaWxkKHN0YXRlLmNvbnRlbnQuZmlyc3RDaGlsZCk7XG5cdFx0XHR9XG5cdFx0XHRwcm9qZWN0VmlldyhzdGF0ZS5jb250ZW50KTtcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1ldGFkYXRhXCIsIEpTT04uc3RyaW5naWZ5KHN0YXRlLm1ldGFkYXRhKSk7XG5cdFx0fSk7XG5cblx0XHRjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRtb3JlTWVudUxpc3QuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cdFx0ZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHJlc3MtZWZmZWN0XCIsIFwibW9yZS1tZW51LWl0ZW1cIik7XG5cdFx0ZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuXHRcdGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHRwcm9qZWN0Q29uZmlnVmlldyh7IHByb2plY3QsIHNpZGViYXI6IHByb2plY3RUaXRsZSB9LCBcImVkaXRcIik7XG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH0pO1xuXHR9XG5cdHBhcmVudC5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHNpZGViYXJIZWFkZXJWaWV3KHBMaXN0LCBwYXJlbnQpIHtcblx0Y29uc3Qgc2lkZWJhckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHBhcmVudC5hcHBlbmRDaGlsZChzaWRlYmFySGVhZGVyKTtcblx0c2lkZWJhckhlYWRlci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1oZWFkZXJcIik7XG5cdHByb2plY3RTaWRlYmFyVmlldyhzdGF0ZS5pbmJveFByb2plY3QsIHNpZGViYXJIZWFkZXIpO1xuXHRwcm9qZWN0U2lkZWJhclZpZXcoc3RhdGUudG9kYXlQcm9qZWN0LCBzaWRlYmFySGVhZGVyKTtcblxuXHRjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0c2lkZWJhckhlYWRlci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcblx0YWRkUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiVUlCdXR0b25cIiwgXCJwcmVzcy1lZmZlY3RcIik7XG5cdGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XG5cdGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRwcm9qZWN0Q29uZmlnVmlldyhwTGlzdCwgXCJjcmVhdGVcIik7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBzaWRlYmFyVmlldyhwYXJlbnQpIHtcblx0Y29uc3Qgc2lkZWJhckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRzaWRlYmFyRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclwiKTtcblxuXHRjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHByb2plY3RMaXN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3RcIik7XG5cdHN0YXRlLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcblx0XHRpZiAoXG5cdFx0XHRwcm9qZWN0LnBpZCAhPT0gc3RhdGUubWV0YWRhdGEuaW5ib3hQaWQgJiZcblx0XHRcdHByb2plY3QucGlkICE9PSBzdGF0ZS5tZXRhZGF0YS50b2RheVBpZFxuXHRcdCkge1xuXHRcdFx0cHJvamVjdFNpZGViYXJWaWV3KHByb2plY3QsIHByb2plY3RMaXN0KTtcblx0XHR9XG5cdH0pO1xuXG5cdHNpZGViYXJIZWFkZXJWaWV3KHByb2plY3RMaXN0LCBzaWRlYmFyRWxlbWVudCk7XG5cdHNpZGViYXJFbGVtZW50LmFwcGVuZENoaWxkKHByb2plY3RMaXN0KTtcblx0cGFyZW50LmFwcGVuZENoaWxkKHNpZGViYXJFbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gcHJvamVjdENvbmZpZ1ZpZXcoY29udGV4dCwgbW9kZSkge1xuXHRjb25zdCBzY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRzY3JlZW4uY2xhc3NMaXN0LmFkZChcImJsb2NrLXNjcmVlblwiKTtcblxuXHRjb25zdCBwcm9qZWN0Q29uZmlnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHNjcmVlbi5hcHBlbmRDaGlsZChwcm9qZWN0Q29uZmlnRWxlbWVudCk7XG5cdHByb2plY3RDb25maWdFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNvbmZpZ1wiKTtcblxuXHRjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0cHJvamVjdENvbmZpZ0VsZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuXHRwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lXCIpO1xuXHRwcm9qZWN0TmFtZS5wbGFjZWhvbGRlciA9IFwiUHJvamVjdCBOYW1lXCI7XG5cdGlmIChtb2RlID09PSBcImVkaXRcIikge1xuXHRcdHByb2plY3ROYW1lLnZhbHVlID0gY29udGV4dC5wcm9qZWN0Lm5hbWU7XG5cdH1cblxuXHRjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRwcm9qZWN0Q29uZmlnRWxlbWVudC5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXHRjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZChcblx0XHRcIlVJQnV0dG9uXCIsXG5cdFx0XCJwcmVzcy1lZmZlY3RcIixcblx0XHRcImNhbmNlbC1wcm9qZWN0LWJ1dHRvblwiXG5cdCk7XG5cdGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cdGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdHN0YXRlLmNvbnRhaW5lci5yZW1vdmVDaGlsZChzY3JlZW4pO1xuXHR9KTtcblxuXHRjb25zdCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0cHJvamVjdENvbmZpZ0VsZW1lbnQuYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbik7XG5cdHNhdmVCdXR0b24uY2xhc3NMaXN0LmFkZChcIlVJQnV0dG9uXCIsIFwicHJlc3MtZWZmZWN0XCIsIFwic2F2ZS1wcm9qZWN0LWJ1dHRvblwiKTtcblx0c2F2ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2F2ZVwiO1xuXHRzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdGlmIChtb2RlID09PSBcImNyZWF0ZVwiKSB7XG5cdFx0XHRjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QoYCR7cHJvamVjdE5hbWUudmFsdWV9YCk7XG5cdFx0XHRzdGF0ZS5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdC5waWQsIEpTT04uc3RyaW5naWZ5KHByb2plY3QpKTtcblx0XHRcdHN0YXRlLmN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcblx0XHRcdGlmIChzdGF0ZS5jb250ZW50LmZpcnN0Q2hpbGQpIHtcblx0XHRcdFx0c3RhdGUuY29udGVudC5yZW1vdmVDaGlsZChzdGF0ZS5jb250ZW50LmZpcnN0Q2hpbGQpO1xuXHRcdFx0fVxuXHRcdFx0cHJvamVjdFNpZGViYXJWaWV3KHByb2plY3QsIGNvbnRleHQpO1xuXHRcdFx0cHJvamVjdFZpZXcoc3RhdGUuY29udGVudCk7XG5cblx0XHRcdC8vVXBkYXRpbmcgbWV0YWRhdGEuXG5cdFx0XHRzdGF0ZS5tZXRhZGF0YS5jdXJyZW50UGlkID0gcHJvamVjdC5waWQ7XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1ldGFkYXRhXCIsIEpTT04uc3RyaW5naWZ5KHN0YXRlLm1ldGFkYXRhKSk7XG5cdFx0fSBlbHNlIGlmIChtb2RlID09PSBcImVkaXRcIikge1xuXHRcdFx0Y29udGV4dC5wcm9qZWN0Lm5hbWUgPSBwcm9qZWN0TmFtZS52YWx1ZTtcblx0XHRcdGNvbnRleHQuc2lkZWJhci5pbm5lckhUTUwgPSBwcm9qZWN0TmFtZS52YWx1ZTtcblx0XHRcdGlmIChzdGF0ZS5jdXJyZW50UHJvamVjdC5waWQgPT09IGNvbnRleHQucHJvamVjdC5waWQpIHtcblx0XHRcdFx0aWYgKHN0YXRlLmNvbnRlbnQuZmlyc3RDaGlsZCkge1xuXHRcdFx0XHRcdHN0YXRlLmNvbnRlbnQucmVtb3ZlQ2hpbGQoc3RhdGUuY29udGVudC5maXJzdENoaWxkKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwcm9qZWN0VmlldyhzdGF0ZS5jb250ZW50KTtcblx0XHRcdH1cblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuXHRcdFx0XHRjb250ZXh0LnByb2plY3QucGlkLFxuXHRcdFx0XHRKU09OLnN0cmluZ2lmeShjb250ZXh0LnByb2plY3QpXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHN0YXRlLmNvbnRhaW5lci5yZW1vdmVDaGlsZChzY3JlZW4pO1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdH0pO1xuXG5cdHN0YXRlLmNvbnRhaW5lci5hcHBlbmRDaGlsZChzY3JlZW4pO1xufVxuXG5mdW5jdGlvbiB0YXNrQ29uZmlnVmlldyhjb250ZXh0LCBtb2RlKSB7XG5cdGNvbnN0IHNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHNjcmVlbi5jbGFzc0xpc3QuYWRkKFwiYmxvY2stc2NyZWVuXCIpO1xuXG5cdGNvbnN0IHRhc2tDb25maWdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c2NyZWVuLmFwcGVuZENoaWxkKHRhc2tDb25maWdFbGVtZW50KTtcblx0dGFza0NvbmZpZ0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2stY29uZmlnXCIpO1xuXG5cdGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0dGFza0NvbmZpZ0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcblx0dGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbmZpZy10aXRsZVwiKTtcblx0dGFza1RpdGxlLnBsYWNlaG9sZGVyID0gXCJUYXNrIFRpdGxlXCI7XG5cdGlmIChtb2RlID09PSBcImVkaXRcIikge1xuXHRcdHRhc2tUaXRsZS52YWx1ZSA9IGNvbnRleHQudGFzay50aXRsZTtcblx0fVxuXG5cdGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcblx0dGFza0NvbmZpZ0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcblx0dGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbmZpZy1kZXNjcmlwdGlvblwiKTtcblx0dGFza0Rlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gXCJUYXNrIERlc2NyaXB0aW9uXCI7XG5cdGlmIChtb2RlID09PSBcImVkaXRcIikge1xuXHRcdHRhc2tEZXNjcmlwdGlvbi52YWx1ZSA9IGNvbnRleHQudGFzay5kZXNjcmlwdGlvbjtcblx0fVxuXG5cdGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHR0YXNrQ29uZmlnRWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG5cdHRhc2tEdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbmZpZy1kdWUtZGF0ZVwiKTtcblx0dGFza0R1ZURhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG5cdGNvbnN0IHRvZGF5RGF0ZSA9IG5ldyBEYXRlKCk7XG5cdHRhc2tEdWVEYXRlLnZhbHVlID1cblx0XHR0b2RheURhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpICtcblx0XHRcIi1cIiArXG5cdFx0KHRvZGF5RGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAwKSArXG5cdFx0XCItXCIgK1xuXHRcdHRvZGF5RGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAwKTtcblx0aWYgKG1vZGUgPT09IFwiZWRpdFwiKSB7XG5cdFx0dGFza0R1ZURhdGUudmFsdWUgPVxuXHRcdFx0Y29udGV4dC50YXNrLmR1ZURhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpICtcblx0XHRcdFwiLVwiICtcblx0XHRcdChjb250ZXh0LnRhc2suZHVlRGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAwKSArXG5cdFx0XHRcIi1cIiArXG5cdFx0XHRjb250ZXh0LnRhc2suZHVlRGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAwKTtcblx0fVxuXG5cdGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5cdHRhc2tDb25maWdFbGVtZW50LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XG5cdHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidGFzay1jb25maWctcHJpb3JpdHlcIik7XG5cdHRhc2tQcmlvcml0eS5vcHRpb25zLmFkZChuZXcgT3B0aW9uKFwiTG93XCIpKTtcblx0dGFza1ByaW9yaXR5Lm9wdGlvbnMuYWRkKG5ldyBPcHRpb24oXCJNZWRpdW1cIikpO1xuXHR0YXNrUHJpb3JpdHkub3B0aW9ucy5hZGQobmV3IE9wdGlvbihcIkhpZ2hcIikpO1xuXHRpZiAobW9kZSA9PT0gXCJlZGl0XCIpIHtcblx0XHR0YXNrUHJpb3JpdHkudmFsdWUgPSBjb250ZXh0LnRhc2sucHJpb3JpdHk7XG5cdH1cblxuXHRjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHR0YXNrQ29uZmlnRWxlbWVudC5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXHRjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZChcIlVJQnV0dG9uXCIsIFwicHJlc3MtZWZmZWN0XCIsIFwiY2FuY2VsLXRhc2stYnV0dG9uXCIpO1xuXHRjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXHRjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRzdGF0ZS5jb250YWluZXIucmVtb3ZlQ2hpbGQoc2NyZWVuKTtcblx0fSk7XG5cblx0Y29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdHRhc2tDb25maWdFbGVtZW50LmFwcGVuZENoaWxkKHNhdmVCdXR0b24pO1xuXHRzYXZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJVSUJ1dHRvblwiLCBcInByZXNzLWVmZmVjdFwiLCBcInNhdmUtdGFzay1idXR0b25cIik7XG5cdHNhdmVCdXR0b24udGV4dENvbnRlbnQgPSBcIlNhdmVcIjtcblx0c2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGlmIChtb2RlID09IFwiY3JlYXRlXCIpIHtcblx0XHRcdGNvbnN0IHRhc2sgPSBuZXcgVGFzayhcblx0XHRcdFx0YCR7dGFza1RpdGxlLnZhbHVlfWAsXG5cdFx0XHRcdGAke3Rhc2tEZXNjcmlwdGlvbi52YWx1ZX1gLFxuXHRcdFx0XHRuZXcgRGF0ZShcblx0XHRcdFx0XHR0YXNrRHVlRGF0ZS52YWx1ZS5zcGxpdChcIi1cIilbMF0sXG5cdFx0XHRcdFx0dGFza0R1ZURhdGUudmFsdWUuc3BsaXQoXCItXCIpWzFdIC0gMSxcblx0XHRcdFx0XHR0YXNrRHVlRGF0ZS52YWx1ZS5zcGxpdChcIi1cIilbMl1cblx0XHRcdFx0KSxcblx0XHRcdFx0YCR7dGFza1ByaW9yaXR5LnZhbHVlfWBcblx0XHRcdCk7XG5cblx0XHRcdHN0YXRlLmN1cnJlbnRQcm9qZWN0LmFkZFRhc2sodGFzayk7XG5cblx0XHRcdHRhc2tWaWV3KHRhc2ssIGNvbnRleHQpO1xuXHRcdFx0Y29uc29sZS5sb2cobmV3IERhdGUoRGF0ZS5ub3coKSkudG9JU09TdHJpbmcoKSk7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHRhc2suZHVlRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKSA9PT0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHN0YXRlLnRvZGF5UHJvamVjdC5hZGRUYXNrKHRhc2spO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAobW9kZSA9PSBcImVkaXRcIikge1xuXHRcdFx0Y29udGV4dC50YXNrLnRpdGxlID0gdGFza1RpdGxlLnZhbHVlO1xuXHRcdFx0Y29udGV4dC50YXNrLmRlc2NyaXB0aW9uID0gdGFza0Rlc2NyaXB0aW9uLnZhbHVlO1xuXHRcdFx0Y29udGV4dC50YXNrLmR1ZURhdGUgPSBuZXcgRGF0ZShcblx0XHRcdFx0dGFza0R1ZURhdGUudmFsdWUuc3BsaXQoXCItXCIpWzBdLFxuXHRcdFx0XHR0YXNrRHVlRGF0ZS52YWx1ZS5zcGxpdChcIi1cIilbMV0gLSAxLFxuXHRcdFx0XHR0YXNrRHVlRGF0ZS52YWx1ZS5zcGxpdChcIi1cIilbMl1cblx0XHRcdCk7XG5cdFx0XHRjb250ZXh0LnRhc2sucHJpb3JpdHkgPSB0YXNrUHJpb3JpdHkudmFsdWU7XG5cblx0XHRcdGNvbnRleHQudGFza1RpdGxlLmlubmVySFRNTCA9IHRhc2tUaXRsZS52YWx1ZTtcblx0XHRcdGNvbnRleHQudGFza0Rlc2NyaXB0aW9uLmlubmVySFRNTCA9IHRhc2tEZXNjcmlwdGlvbi52YWx1ZTtcblx0XHRcdGNvbnRleHQudGFza0R1ZURhdGUuaW5uZXJIVE1MID1cblx0XHRcdFx0XCJEdWUgRGF0ZTogXCIgKyB0YXNrRHVlRGF0ZS52YWx1ZUFzRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKTtcblx0XHRcdGNvbnRleHQudGFza1ByaW9yaXR5LmlubmVySFRNTCA9IFwiUHJpb3JpdHk6IFwiICsgdGFza1ByaW9yaXR5LnZhbHVlO1xuXG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcblx0XHRcdFx0c3RhdGUuY3VycmVudFByb2plY3QucGlkLFxuXHRcdFx0XHRKU09OLnN0cmluZ2lmeShzdGF0ZS5jdXJyZW50UHJvamVjdClcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0c3RhdGUuY29udGFpbmVyLnJlbW92ZUNoaWxkKHNjcmVlbik7XG5cdH0pO1xuXG5cdHN0YXRlLmNvbnRhaW5lci5hcHBlbmRDaGlsZChzY3JlZW4pO1xufVxuXG5leHBvcnQge1xuXHR0YXNrVmlldyxcblx0cHJvamVjdFZpZXcsXG5cdHNpZGViYXJWaWV3LFxuXHRwcm9qZWN0Q29uZmlnVmlldyxcblx0dGFza0NvbmZpZ1ZpZXcsXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9