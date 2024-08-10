/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/SankofaDisplay-Regular.ttf */ "./src/fonts/SankofaDisplay-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! fonts/RobotoCondensed-VariableFont_wght.ttf */ "./src/fonts/RobotoCondensed-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! img/down.svg */ "./src/img/down.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! img/up.svg */ "./src/img/up.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: "logo";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
    font-family: "myFont";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

:root {
    --font-size : 1.2em;
    --background-color :white ;
    --first-color: #735DA5;
    --second-color: #D3C5E5 ;
}

.taskCard {
    display: grid !important;
    grid-template-columns: 9fr 1fr;
}

.taskCard p {
    display: none;
}
.taskCard p.collapse {
    display: block;
}
.taskCard .expand {
    content: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

.taskCard .expand.collapse {
    content: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}
body {
    margin: 0;
    background-color: var(--first-color);
    font-size: 1.2em;
    font-family: "myFont";
}

.container {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

button,input {
    font-family: "myFont";
}
.header {
    padding: 1.5em 5em;
    box-shadow: 0px 0.5px 3px -2px black;
}

.header h2 {
    font-family: "logo";
    font-size: 2em;
    padding: 0;
    margin: 0;
}
.main {
    flex-grow: 1;
    display: grid;
    grid-template-columns: 1fr 5fr;
    
}

.sidebar {
    padding:2em 0.5em;
    /* background-color: #282c34; */
    display: flex;
    flex-direction: column;
    gap: 2em;
    box-shadow: 0px 0.5px 4px -2px black;
}

.sidebar img {
    height: 1.5em;
}

.side-button {
    display: grid;
    gap: 1em;
    margin-left: auto;
    margin-right: auto;
}
.side-button div {
    display: flex;
    gap: 1em;
    align-items: center;
    padding-inline: 4em;
    padding-block: 0.5em;
    transition: 0.3s;
}
.side-button div:hover {
    background-color: var(--second-color);
    /* background-image: linear-gradient(90deg,var(--second-color),var(--first-color) ); */
}


/* project  */

.add-project {
    font-size: 1.5em;
    text-align: center;
    padding-block: 0.15em;
    margin: 0 0.4em;
    border-radius: 5px;
    color: var(--second-color);
    background-color: var(--first-color);
    border: 2px solid var(--second-color);
    transition: 0.3s;
}
.add-project:hover{
    background-color: var(--second-color);
    color: var(--first-color);
    border: none;
}
#project-dialog {
    display: flex;
    flex-direction: column;
    margin-left: 0.5em;
}

#project-dialog input {
    font-size: 1em;
    padding: 0.5em 1em;
    margin-bottom: 0.5em;
    background-color: var(--first-color);
    border: 2px solid var(--second-color);
}
#project-dialog input:focus {
    outline: none;
}
#project-dialog div {
    display: flex;
    justify-content: space-between;
    gap: 1em;
    margin-right: 0.5em;
}

#project-dialog div button {
    flex: 1;
    font-size: 1em;
    padding: 0.5em 0;
}
#project-dialog div button:first-child {
    background-color: #20948B;
    color: white;
    border: none;
    outline: none;
}

#project-dialog div button:last-child {
    background-color: var(--second-color);
    border: none;
    outline: none;
}

.project-card {
    display: flex;
    margin: 0.5em;
    align-items: center;
    justify-content: space-between;
    padding-block: 0.5em;
    padding-inline: 1.2em;
    background-color: var(--second-color);
    transition: 0.3s;
}
.project-card img {
    opacity: 0.5;
    width: 1.3em;
}

.project-card img:hover{
    opacity: 1;
}
.project h3 {
    text-align: center;
}

/* end project */

/* task  */


.tasks .task-add {
    font-size: 1em;
    margin-top: 1em;
    border: none;
    width: 100%;
    padding-block: 0.5em;
    transition: 1s;
    color: var(--second-color);
    background-color: var(--first-color);
    border: 2px solid var(--second-color);
    transition: 0.3s;
   
}
.task-add:hover {
    border: none;
    background-color: var(--second-color);
    color: var(--first-color);
}
.tasks {
    padding-inline: 20% 20%;
}
.tasks #tasklist {
    margin-top: 1.5em;
    display: flex;
    flex-direction: column;
    gap: 1em;
}
.tasks #tasklist h2{
    text-align: center;
}

.taskCard {
    display: flex;
    justify-content: space-between;
    gap: 0.5em;
    padding: 0.5em 1em;
    background-color: var(--second-color);
}

.taskCard .check {
    height: 1.3em;
    width: 1.3em;
    -webkit-appearance: none; /* For Safari and Chrome */
    -moz-appearance: none; /* For Firefox */
    appearance: none;
    border: 1px solid #000000;
    border-radius: 50%; /* Makes the checkbox round */
    outline: none;
    cursor: pointer;


}

.taskCard .check:checked {
    background-color: var(--first-color);
}

.taskCard img {
    width: 1.3em;
    opacity: 0.5;
}
.taskCard img:hover {
    opacity: 1;
}
/* .taskCard > * {
    flex:1;
} */
.taskCard .task-text{
    flex-grow: 1;
    display: flex;
    align-items: center;
    gap: 0.5em;
    margin-right: 1em;
}

.taskCard .task-text .title {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.task-buttons {
    display: flex;
    gap: 1em;
}
/* end task  */

#project-dialog{
    display: none;
}

#add-task {
    display: block;
}

dialog {
    background-color: var(--first-color);
    width: 20%;
}
form ul li{
    display: grid;
    gap: 0.2em;
}

form ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin: 0;
    padding: 0;
}

form {
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    font-size: 1em;
    gap: 1em;
    padding: 1em;
    color: white;
    font-weight: 400;
}
dialog {
    border: none;
    box-shadow: 10px 10px 0px var(--second-color);
}

dialog::backdrop{
    background-color: black;
    opacity: 0.3;
}
/* form div {
    align-self: flex-end;
} */

form div {
    align-self: flex-end;
}
form div button {
    /* margin: 10px;
    padding: 10px; */
    /* font-size: 1em; */
    border: none;
    /* border-radius: 15px; */
    padding: 0.5em 1em;
    background-color: var(--second-color);
    font-size: 1em;
    
}
form div button:last-child {
    color: white;
    background-color: #20948B;
    border: none;
}
form input,textarea,select {
    font-size: 1em;
    padding: 0.5em;
    background-color: var(--second-color);
    border: none;
    font-family: "myFont";
    /* border-radius: 10px; */
}
form input,textarea,select:focus {
    outline: none;
}
form li label {
    align-self: center;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: \"logo\";\n    src: url('fonts/SankofaDisplay-Regular.ttf');\n}\n\n@font-face {\n    font-family: \"myFont\";\n    src: url(\"fonts/RobotoCondensed-VariableFont_wght.ttf\");\n}\n\n:root {\n    --font-size : 1.2em;\n    --background-color :white ;\n    --first-color: #735DA5;\n    --second-color: #D3C5E5 ;\n}\n\n.taskCard {\n    display: grid !important;\n    grid-template-columns: 9fr 1fr;\n}\n\n.taskCard p {\n    display: none;\n}\n.taskCard p.collapse {\n    display: block;\n}\n.taskCard .expand {\n    content: url(\"img/down.svg\");\n}\n\n.taskCard .expand.collapse {\n    content: url(\"img/up.svg\");\n}\nbody {\n    margin: 0;\n    background-color: var(--first-color);\n    font-size: 1.2em;\n    font-family: \"myFont\";\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\nbutton,input {\n    font-family: \"myFont\";\n}\n.header {\n    padding: 1.5em 5em;\n    box-shadow: 0px 0.5px 3px -2px black;\n}\n\n.header h2 {\n    font-family: \"logo\";\n    font-size: 2em;\n    padding: 0;\n    margin: 0;\n}\n.main {\n    flex-grow: 1;\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    \n}\n\n.sidebar {\n    padding:2em 0.5em;\n    /* background-color: #282c34; */\n    display: flex;\n    flex-direction: column;\n    gap: 2em;\n    box-shadow: 0px 0.5px 4px -2px black;\n}\n\n.sidebar img {\n    height: 1.5em;\n}\n\n.side-button {\n    display: grid;\n    gap: 1em;\n    margin-left: auto;\n    margin-right: auto;\n}\n.side-button div {\n    display: flex;\n    gap: 1em;\n    align-items: center;\n    padding-inline: 4em;\n    padding-block: 0.5em;\n    transition: 0.3s;\n}\n.side-button div:hover {\n    background-color: var(--second-color);\n    /* background-image: linear-gradient(90deg,var(--second-color),var(--first-color) ); */\n}\n\n\n/* project  */\n\n.add-project {\n    font-size: 1.5em;\n    text-align: center;\n    padding-block: 0.15em;\n    margin: 0 0.4em;\n    border-radius: 5px;\n    color: var(--second-color);\n    background-color: var(--first-color);\n    border: 2px solid var(--second-color);\n    transition: 0.3s;\n}\n.add-project:hover{\n    background-color: var(--second-color);\n    color: var(--first-color);\n    border: none;\n}\n#project-dialog {\n    display: flex;\n    flex-direction: column;\n    margin-left: 0.5em;\n}\n\n#project-dialog input {\n    font-size: 1em;\n    padding: 0.5em 1em;\n    margin-bottom: 0.5em;\n    background-color: var(--first-color);\n    border: 2px solid var(--second-color);\n}\n#project-dialog input:focus {\n    outline: none;\n}\n#project-dialog div {\n    display: flex;\n    justify-content: space-between;\n    gap: 1em;\n    margin-right: 0.5em;\n}\n\n#project-dialog div button {\n    flex: 1;\n    font-size: 1em;\n    padding: 0.5em 0;\n}\n#project-dialog div button:first-child {\n    background-color: #20948B;\n    color: white;\n    border: none;\n    outline: none;\n}\n\n#project-dialog div button:last-child {\n    background-color: var(--second-color);\n    border: none;\n    outline: none;\n}\n\n.project-card {\n    display: flex;\n    margin: 0.5em;\n    align-items: center;\n    justify-content: space-between;\n    padding-block: 0.5em;\n    padding-inline: 1.2em;\n    background-color: var(--second-color);\n    transition: 0.3s;\n}\n.project-card img {\n    opacity: 0.5;\n    width: 1.3em;\n}\n\n.project-card img:hover{\n    opacity: 1;\n}\n.project h3 {\n    text-align: center;\n}\n\n/* end project */\n\n/* task  */\n\n\n.tasks .task-add {\n    font-size: 1em;\n    margin-top: 1em;\n    border: none;\n    width: 100%;\n    padding-block: 0.5em;\n    transition: 1s;\n    color: var(--second-color);\n    background-color: var(--first-color);\n    border: 2px solid var(--second-color);\n    transition: 0.3s;\n   \n}\n.task-add:hover {\n    border: none;\n    background-color: var(--second-color);\n    color: var(--first-color);\n}\n.tasks {\n    padding-inline: 20% 20%;\n}\n.tasks #tasklist {\n    margin-top: 1.5em;\n    display: flex;\n    flex-direction: column;\n    gap: 1em;\n}\n.tasks #tasklist h2{\n    text-align: center;\n}\n\n.taskCard {\n    display: flex;\n    justify-content: space-between;\n    gap: 0.5em;\n    padding: 0.5em 1em;\n    background-color: var(--second-color);\n}\n\n.taskCard .check {\n    height: 1.3em;\n    width: 1.3em;\n    -webkit-appearance: none; /* For Safari and Chrome */\n    -moz-appearance: none; /* For Firefox */\n    appearance: none;\n    border: 1px solid #000000;\n    border-radius: 50%; /* Makes the checkbox round */\n    outline: none;\n    cursor: pointer;\n\n\n}\n\n.taskCard .check:checked {\n    background-color: var(--first-color);\n}\n\n.taskCard img {\n    width: 1.3em;\n    opacity: 0.5;\n}\n.taskCard img:hover {\n    opacity: 1;\n}\n/* .taskCard > * {\n    flex:1;\n} */\n.taskCard .task-text{\n    flex-grow: 1;\n    display: flex;\n    align-items: center;\n    gap: 0.5em;\n    margin-right: 1em;\n}\n\n.taskCard .task-text .title {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n}\n\n.task-buttons {\n    display: flex;\n    gap: 1em;\n}\n/* end task  */\n\n#project-dialog{\n    display: none;\n}\n\n#add-task {\n    display: block;\n}\n\ndialog {\n    background-color: var(--first-color);\n    width: 20%;\n}\nform ul li{\n    display: grid;\n    gap: 0.2em;\n}\n\nform ul {\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    gap: 1em;\n    margin: 0;\n    padding: 0;\n}\n\nform {\n    margin-top: 1em;\n    display: flex;\n    flex-direction: column;\n    font-size: 1em;\n    gap: 1em;\n    padding: 1em;\n    color: white;\n    font-weight: 400;\n}\ndialog {\n    border: none;\n    box-shadow: 10px 10px 0px var(--second-color);\n}\n\ndialog::backdrop{\n    background-color: black;\n    opacity: 0.3;\n}\n/* form div {\n    align-self: flex-end;\n} */\n\nform div {\n    align-self: flex-end;\n}\nform div button {\n    /* margin: 10px;\n    padding: 10px; */\n    /* font-size: 1em; */\n    border: none;\n    /* border-radius: 15px; */\n    padding: 0.5em 1em;\n    background-color: var(--second-color);\n    font-size: 1em;\n    \n}\nform div button:last-child {\n    color: white;\n    background-color: #20948B;\n    border: none;\n}\nform input,textarea,select {\n    font-size: 1em;\n    padding: 0.5em;\n    background-color: var(--second-color);\n    border: none;\n    font-family: \"myFont\";\n    /* border-radius: 10px; */\n}\nform input,textarea,select:focus {\n    outline: none;\n}\nform li label {\n    align-self: center;\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/To-do.js":
/*!**********************!*\
  !*** ./src/To-do.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/helper.js");


class Todo {
    constructor() {
        this.projects = []
    }

    setProject(projects) {
        this.projects = projects
    }

    addProject(name) {
        
        const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](name)
        this.projects.push(newProject);
        // helper.updateLocalStorage()
    }

    removeProject(index) {
        this.projects.splice(index,1);
        // helper.updateLocalStorage()
    }

    getProjects() {
        return this.projects;
    }

    getProject(name) {
        const result = this.projects.find(project => project.getName() === name);
        return result
    }
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

/***/ }),

/***/ "./src/card.js":
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
/* harmony import */ var _img_edit_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/edit.svg */ "./src/img/edit.svg");
/* harmony import */ var _img_delete_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/delete.svg */ "./src/img/delete.svg");
/* harmony import */ var _img_up_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/up.svg */ "./src/img/up.svg");
/* harmony import */ var _img_down_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/down.svg */ "./src/img/down.svg");






const card = (() => {
    let currentIndex = null;
    let projectName = '';
    const dialogEdit = document.querySelector('#edit-task-dialog')
    const titleEdit = document.querySelector('#edit-task-title')
    const dateEdit = document.querySelector('#edit-task-date')
    const priorityEdit = document.querySelector('#edit-task-priority')
    const discriptionEdit = document.querySelector('#edit-task-info')
    let list = []

    function setPriority(task,taskCard) {
        const priority = task.getPriority();
        if(priority === "High") {
            taskCard.style.boxShadow = "inset 0.3em 0 #F52549"
        }

        if(priority === "Medium") {
            taskCard.style.boxShadow = "inset 0.3em 0 #F98866"
        }   

        if(priority === "Low") {
            taskCard.style.boxShadow = "inset 0.3em 0 #1E2761"
        }
    }
    function create(project,task,index,display) {
        list = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks(project.getName());
        let taskCard = document.createElement('div');
        taskCard.classList.add('taskCard');
        let textDiv = document.createElement('div');
        textDiv.classList.add('task-text')
        let check = document.createElement('INPUT');']['
        check.setAttribute("type","checkbox");
        check.classList.add("check")
        check.dataset.index = index;
        check.checked = task.getComplete();
        let title = document.createElement('div')
        title.classList.add('title')
        let span1 = document.createElement('span');
        span1.dataset.index = index;
        let span2 = document.createElement('span');
        let buttonDiv = document.createElement('div');
        buttonDiv.classList.add('task-buttons');
        let del = document.createElement('img');
        del.src = _img_delete_svg__WEBPACK_IMPORTED_MODULE_2__;
        del.alt = "Delete"
        let edit = document.createElement('img');
        edit.src = _img_edit_svg__WEBPACK_IMPORTED_MODULE_1__;
        edit.alt = "Edit"
        edit.dataset.index = index;
        edit.dataset.project = project.getName()
        del.dataset.project = project.getName()
        del.dataset.index = index;
        span1.textContent = task.getTitle();
        span2.textContent = task.getDate();



        setPriority(task,taskCard);

        if(task.getComplete()) {
            span1.style.textDecoration = "line-through"
        }
    

        check.addEventListener('click', e => {
            _helper__WEBPACK_IMPORTED_MODULE_0__["default"].changeComplete(project.getName(),index)
            display();
        })

        title.addEventListener('click', e => {
            _helper__WEBPACK_IMPORTED_MODULE_0__["default"].changeComplete(project.getName(),index)
            display()
        })


        edit.addEventListener('click', e => {
            currentIndex = e.target.dataset.index;
            projectName = e.target.dataset.project;
            dialogEdit.showModal()
            titleEdit.value = task.getTitle();
            priorityEdit.value = task.getPriority();
            discriptionEdit.value= task.getDiscription();
            dateEdit.value = task.getDate()
        })
    
        del.addEventListener('click', e => {
            _helper__WEBPACK_IMPORTED_MODULE_0__["default"].removeTask(e.target.dataset.project,e.target.dataset.index)
            display()
        })
    
        title.append(span1)
        title.append(span2)
        textDiv.append(check);
        textDiv.append(title);
        buttonDiv.append(edit);
        buttonDiv.append(del);
        taskCard.append(textDiv);
        taskCard.append(buttonDiv);
        
        tasklist.append(taskCard);  

        if(task.getDiscription() != ''){
            const expand = document.createElement('img');
            expand.classList.add('expand')
            const span3 = document.createElement('p');
            span3.textContent = task.getDiscription();
            expand.addEventListener('click', e=> {
                span3.classList.toggle('collapse');
                expand.classList.toggle('collapse')
            }) 
            buttonDiv.append(expand); 
            taskCard.append(span3); 
        }
    }


    function buttonListners(display) {
        const cancelEdit = document.querySelector('#edit-task-cancel')
        const confirmEdit = document.querySelector('#edit-task-confirm')

        let Cancel = cancelEdit.cloneNode(true);
        let Confirm = confirmEdit.cloneNode(true);
        
        cancelEdit.replaceWith(Cancel)
        confirmEdit.replaceWith(Confirm)
    
        Cancel.addEventListener('click', e => {
            e.preventDefault();
            dialogEdit.close();
        })
    
        Confirm.addEventListener('click', e => {
            e.preventDefault();
            if(titleEdit.value != '') {
                _helper__WEBPACK_IMPORTED_MODULE_0__["default"].editTask(projectName,currentIndex,titleEdit.value,dateEdit.value,priorityEdit.value,discriptionEdit.value);
                display();
            }
            dialogEdit.close()
        })
    }

    return {
        create,
        buttonListners
    }

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (card);

/***/ }),

/***/ "./src/dueDom.js":
/*!***********************!*\
  !*** ./src/dueDom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isPast.mjs");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/card.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/helper.js");



let Due = () => {
    const addTask = document.querySelector('.task-add')
    addTask.style.display = 'none'
    const taskList = document.querySelector('#tasklist');
    let tasks = []
    // const todo = helper.retrive();
    // const projects = todo.getProjects();
    function todayDisplay(){
        const projects = _helper__WEBPACK_IMPORTED_MODULE_1__["default"].getProjects()
        taskList.textContent = '';
        let title = document.createElement('h2');
        title.textContent = "Past Due";
        taskList.append(title)
        for(let i=0;i<projects.length;i++){
            
            let project = projects[i];

            tasks = _helper__WEBPACK_IMPORTED_MODULE_1__["default"].getTasks(project.getName());
            for(let j=0;j<tasks.length;j++) {
                let task = tasks[j];
                if((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isPast)(task.getDate()) && !task.getComplete()) {
                    _card__WEBPACK_IMPORTED_MODULE_0__["default"].create(project,task,j,todayDisplay)
                }     

            }
        }
    }

    _card__WEBPACK_IMPORTED_MODULE_0__["default"].buttonListners(todayDisplay) 
    todayDisplay();
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Due);

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _To_do__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./To-do */ "./src/To-do.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/task.js");




let helper = (() => {

    function updateLocalStorage(data) {
        const todoJson = JSON.stringify(data)
        localStorage.setItem('todo', todoJson)
    }

    function retrive() {
        // const data = localStorage.getItem('todo')
        // if(data === null) {return new Todo()}
        const todoList = Object.assign(new _To_do__WEBPACK_IMPORTED_MODULE_0__["default"](),JSON.parse(localStorage.getItem('todo')));
        todoList.setProject(todoList.getProjects().map((project) => Object.assign(new _project__WEBPACK_IMPORTED_MODULE_1__["default"](), project)));
        todoList.getProjects().forEach((project) => project.setTasks(project.getTasks().map((task) => Object.assign(new _task__WEBPACK_IMPORTED_MODULE_2__["default"](), task))))
        return todoList
    }

    // function retrive() {
    //     const revivedTodo = new Todo();
    //     const data = localStorage.getItem('todo');
    //     if(data) {
    //         const todoData = JSON.parse(data)
    //         for(const projectData of todoData.projects) {
    //             Object.assign()
    //             const revivedProject = new Project(projectData.name)
    //             for(const taskData of projectData.list) {
    //                 const revivedtask = new Task(taskData.name,taskData.date,taskData.priority,taskData.complete)
    //                 revivedProject.addTask(revivedtask)
    //             }
    //             revivedTodo.addProject(revivedProject)
    //         }
    //     }
        
    //     return revivedTodo;
    // }

    function addProject(name) {
        const todoList = retrive();
        todoList.addProject(name);
        updateLocalStorage(todoList);
    }

    function removeProject(index) {
        const todoList = retrive();
        todoList.removeProject(index);
        updateLocalStorage(todoList);
    }

    function getProjects() {
        const todoList = retrive();
        return todoList.getProjects();
    }

    function removeTask(projectName,index) {
        const todoList = retrive();
        const project = todoList.getProject(projectName)
        if(project !== undefined) {
            project.removeTask(index)
        }
        updateLocalStorage(todoList);
    }

    function addTask(projectName,name,date,priority,discription) {
        const todoList = retrive();
        const project = todoList.getProject(projectName);
        project.addTask(name,date,priority,discription)
        updateLocalStorage(todoList);
    }

    function editTask(projectName,index,name,date,priority,discription) {
        const todoList = retrive();
        const project = todoList.getProject(projectName)
        const tasks = project.getTasks();
        tasks[index].setTask(name,date,priority,discription)
        updateLocalStorage(todoList);
    }

    function getTasks(projectName) {
        const todoList = retrive();
        const project = todoList.getProject(projectName);
        return project.getTasks()
    }

    function changeComplete(projectName,index){
        const todoList = retrive();
        const project = todoList.getProject(projectName);
        const task = project.getTasks()[index];
        task.changeComplete();
        updateLocalStorage(todoList);
    }  
    return {
        updateLocalStorage,
        retrive,
        addProject,
        removeProject,
        getProjects,
        addTask,
        removeTask,
        getTasks,
        editTask,
        changeComplete
    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (helper);

/***/ }),

/***/ "./src/homeDom.js":
/*!************************!*\
  !*** ./src/homeDom.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/card.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
// import todo from "./To-do";



let homeDom = () => {
    const addTask = document.querySelector('.task-add')
    addTask.style.display = 'none'
    const taskList = document.querySelector('#tasklist');
    let tasks = []
    function homeDisplay(){
        const projects = _helper__WEBPACK_IMPORTED_MODULE_1__["default"].getProjects();
        taskList.textContent = '';
        let title = document.createElement('h2');
        title.textContent = "Home";
        taskList.append(title)

    
        for(let i=0;i<projects.length;i++){
            let project = projects[i];
            tasks = _helper__WEBPACK_IMPORTED_MODULE_1__["default"].getTasks(project.getName());
            for(let j=0;j<tasks.length;j++) {
                let task = tasks[j];     
                _card__WEBPACK_IMPORTED_MODULE_0__["default"].create(project,task,j,homeDisplay)
            }
        }
        
    }

    _card__WEBPACK_IMPORTED_MODULE_0__["default"].buttonListners(homeDisplay)
    homeDisplay();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeDom);

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/helper.js");



class Project {
    constructor(name) {
        this.name = name;
        this.list = []
    }

    setTasks(tasks) {
        this.list = tasks;
    }
    removeTask(index){
        this.list.splice(index,1)
        _helper__WEBPACK_IMPORTED_MODULE_1__["default"].updateLocalStorage();
    }

    addTask(name,date,priority,discription) {
        this.list.push(new _task__WEBPACK_IMPORTED_MODULE_0__["default"](name,date,priority,discription,false));
        _helper__WEBPACK_IMPORTED_MODULE_1__["default"].updateLocalStorage()
    }

    getTasks() {
    return this.list;
    }

    getName() {
        return this.name;
    }

    getTask(name) {
        const result = this.list.find(_task__WEBPACK_IMPORTED_MODULE_0__["default"] = _task__WEBPACK_IMPORTED_MODULE_0__["default"].getTitle() === name);
        return result
    }
}

/***/ }),

/***/ "./src/projectDom.js":
/*!***************************!*\
  !*** ./src/projectDom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskDom */ "./src/taskDom.js");
/* harmony import */ var _homeDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeDom */ "./src/homeDom.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
/* harmony import */ var _img_delete_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/delete.svg */ "./src/img/delete.svg");
/* harmony import */ var _selected__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selected */ "./src/selected.js");






let projectDom = function () {
    const content = document.querySelector("#content");
    const projectDisplay = document.createElement('div');
    content.append(projectDisplay)
    const button = document.querySelector('.add-project');
    const dialog = document.querySelector('#project-dialog');
    const projectInput = document.querySelector('#project-title');
    const cancelBtn = document.querySelector('#cancel');
    const confirmBtn = document.querySelector('#confirm');
    projectInput.value = ""
    function dialogVisible() {
        dialog.style.display='block';
    }

    function dialogHidden() {
        dialog.style.display='none';
    }

    let display = () => {
        projectDisplay.textContent = '';
        // const todo = helper.retrive();
        // let projects = todo.getProjects();
        let projects = _helper__WEBPACK_IMPORTED_MODULE_2__["default"].getProjects();
        for(let i = 0; i < projects.length ; i++) {
            let project = projects[i];
            const div = document.createElement('div')
            div.classList.add("project-card")
            div.dataset.index = i;
            const title = document.createElement('span');
            // const del = document.createElement('button');
            const del = document.createElement('img');
            del.src = _img_delete_svg__WEBPACK_IMPORTED_MODULE_3__;
            del.alt = "Delete";
            div.append(title);
            div.append(del);

            div.addEventListener('click', (e) => { 
                _selected__WEBPACK_IMPORTED_MODULE_4__["default"].addShadow(e);
                (0,_taskDom__WEBPACK_IMPORTED_MODULE_0__["default"])(project);
            });

            del.addEventListener('click', (e)=> {
                e.stopPropagation();
                _helper__WEBPACK_IMPORTED_MODULE_2__["default"].removeProject(div.dataset.index);
                (0,_homeDom__WEBPACK_IMPORTED_MODULE_1__["default"])();
                display();
            });

            title.textContent = project.getName();
            projectDisplay.append(div)
        }
    }


    button.addEventListener('click', ()=>{
        // dialog.show()
        dialogVisible()
        button.replaceWith(dialog)
        projectInput.focus();
        button.style.display='none';
    });

    cancelBtn.addEventListener('click', ()=>{
        // dialog.close()
        dialogHidden()
        button.style.display='block';
        dialog.replaceWith(button)
        projectInput.value=""
    });

    confirmBtn.addEventListener('click', e => {
        // e.target.preventDefault();
        // dialog.close()
        dialogHidden()
        button.style.display='block';
        dialog.replaceWith(button);
        if(projectInput.value != ''){
            _helper__WEBPACK_IMPORTED_MODULE_2__["default"].addProject(projectInput.value);
            const todo = _helper__WEBPACK_IMPORTED_MODULE_2__["default"].retrive();
            const project = todo.getProject(projectInput.value);
            (0,_taskDom__WEBPACK_IMPORTED_MODULE_0__["default"])(project)
            display();
            _selected__WEBPACK_IMPORTED_MODULE_4__["default"].addShadowLatestProject()
        }
        projectInput.value=""
        
    })

    display()
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectDom);

/***/ }),

/***/ "./src/selected.js":
/*!*************************!*\
  !*** ./src/selected.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


let select = (() => {

    const home = document.querySelector('#home');
    const today = document.querySelector('#today');
    const due = document.querySelector('#due');
    const shadow = "inset 0.5em 0 #20948B";

    function clearAllShadows() {
        const projects = Array.from(document.querySelectorAll(".project-card"));
        projects.forEach( project => {
            project.style.boxShadow = "none";
        })
        today.style.boxShadow = "none";
        due.style.boxShadow = "none";
        home.style.boxShadow = "none"
    }

    function selectHome() {
        clearAllShadows();
        home.style.boxShadow = shadow
    }

    function selectToday() {
        clearAllShadows();
        today.style.boxShadow = shadow
    }

    function selectDue() {
        clearAllShadows();
        due.style.boxShadow = shadow
    }


    function selectProject(e){
        clearAllShadows()
        e.target.style.boxShadow = shadow;
    }

    function addShadow(event) {
        clearAllShadows();
        // Find the closest parent div with class "parent-div"
        var targetDiv = event.target.closest('.project-card');
        if (targetDiv) {
            targetDiv.style.boxShadow = shadow; // Add shadow
        }
    }

    function addShadowLatestProject() {
        select.clearAllShadows();
        const projectDom = Array.from(document.querySelectorAll(".project-card"));
        projectDom[projectDom.length-1].style.boxShadow = shadow;
    }

    return {
        selectHome,
        selectToday,
        selectDue,
        selectProject,
        addShadow,
        clearAllShadows,
        addShadowLatestProject
    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (select);

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");

class Task {

    constructor(name,date,priority,discription,complete) {
        this.name = name;
        this.date = date;
        this.priority = priority;
        this.discription = discription;
        this.complete = complete
    }

    setTask(name,date,priority,discription) {
        this.name = name;
        this.date = date;
        this.priority = priority;
        this.discription = discription;
        _helper__WEBPACK_IMPORTED_MODULE_0__["default"].updateLocalStorage()
    }

    changeComplete() {
        this.complete = !this.complete
        _helper__WEBPACK_IMPORTED_MODULE_0__["default"].updateLocalStorage()
    }
    getTitle() {
        return this.name;
    }

    getDate() {
        return this.date;
    }

    getPriority() {
        return this.priority;
    }

    getComplete() {
        return this.complete;
    }

    getDiscription() {
        return this.discription;
    }
}

/***/ }),

/***/ "./src/taskDom.js":
/*!************************!*\
  !*** ./src/taskDom.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/card.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/helper.js");


let taskDom = (project) => {
    const tasklist = document.querySelector('#tasklist');
    const button = document.querySelector('#add-task');
    const cancel = document.querySelector('#task-cancel')
    const confirm = document.querySelector('#task-confirm')
    const dialog = document.querySelector('#task-dialog')
    const title = document.querySelector('#task-title')
    const date = document.querySelector('#task-date')
    const priority = document.querySelector('#task-priority')
    const discription = document.querySelector('#task-info')
    const addTask = document.querySelector('.task-add')

    addTask.style.display = 'block';
    let list = []
    function display() {
        let title = document.createElement('h2');
        title.textContent = project.getName();
        tasklist.textContent = '';
        tasklist.append(title)
        list = _helper__WEBPACK_IMPORTED_MODULE_1__["default"].getTasks(project.getName());
        for(let i=0;i<list.length;i++){
            let task = list[i]
            _card__WEBPACK_IMPORTED_MODULE_0__["default"].create(project,task,i,display)
        }
    }

    display()

    _card__WEBPACK_IMPORTED_MODULE_0__["default"].buttonListners(display)
    function removeListeners() {
        let newButton = button.cloneNode(true);
        let newCancel = cancel.cloneNode(true);
        let newConfirm = confirm.cloneNode(true);

        button.replaceWith(newButton)
        cancel.replaceWith(newCancel)
        confirm.replaceWith(newConfirm)

        newButton.addEventListener('click',(e)=> {
            dialog.showModal();
        });
      
        newCancel.addEventListener('click',(e)=>{
            e.preventDefault();
            dialog.close();
            title.value =""
            priority.value =""
            discription.value=""
            date.value= ""
        })
    
        newConfirm.addEventListener('click', e=>{
            e.preventDefault();
            if(title.value != ''){
                _helper__WEBPACK_IMPORTED_MODULE_1__["default"].addTask(project.getName(),title.value,date.value,priority.value,discription.value)
                display()
            }
            title.value =""
            priority.value =""
            discription.value=""
            date.value= ""
            dialog.close();
        })

    }
    
    removeListeners();
 
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskDom);

/***/ }),

/***/ "./src/todayDom.js":
/*!*************************!*\
  !*** ./src/todayDom.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/card.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
// import todo from "./To-do";



let today = () => {
    const addTask = document.querySelector('.task-add')
    addTask.style.display = 'none'
    const taskList = document.querySelector('#tasklist');
    // const todo = helper.retrive();
    // const projects = todo.getProjects();
    let tasks = []
    
    function getTodayDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    
    function todayDisplay(){
        taskList.textContent = '';
        const projects = _helper__WEBPACK_IMPORTED_MODULE_1__["default"].getProjects();
        let title = document.createElement('h2');
        title.textContent = "Today";
        taskList.append(title)
        for(let i=0;i<projects.length;i++){
            
            let project = projects[i];

            tasks = _helper__WEBPACK_IMPORTED_MODULE_1__["default"].getTasks(project.getName());
            for(let j=0;j<tasks.length;j++) {
                let task = tasks[j];
                let currentDate = getTodayDate();

                if(task.getDate() === currentDate) {
                    _card__WEBPACK_IMPORTED_MODULE_0__["default"].create(project,task,j,todayDisplay)
                }     

            }
        }
    }

    _card__WEBPACK_IMPORTED_MODULE_0__["default"].buttonListners(todayDisplay) 
    todayDisplay();
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (today);

/***/ }),

/***/ "./src/fonts/RobotoCondensed-VariableFont_wght.ttf":
/*!*********************************************************!*\
  !*** ./src/fonts/RobotoCondensed-VariableFont_wght.ttf ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff29b2791402495b1616.ttf";

/***/ }),

/***/ "./src/fonts/SankofaDisplay-Regular.ttf":
/*!**********************************************!*\
  !*** ./src/fonts/SankofaDisplay-Regular.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "51a47901aed080ac2842.ttf";

/***/ }),

/***/ "./src/img/alert.svg":
/*!***************************!*\
  !*** ./src/img/alert.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3be5b6299f8bb28c771e.svg";

/***/ }),

/***/ "./src/img/delete.svg":
/*!****************************!*\
  !*** ./src/img/delete.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2ba2572368d3d3ba9f8b.svg";

/***/ }),

/***/ "./src/img/down.svg":
/*!**************************!*\
  !*** ./src/img/down.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da1d4548b671a011dfa4.svg";

/***/ }),

/***/ "./src/img/edit.svg":
/*!**************************!*\
  !*** ./src/img/edit.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c11ca64583db9195885d.svg";

/***/ }),

/***/ "./src/img/home.svg":
/*!**************************!*\
  !*** ./src/img/home.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0d9baccf8b169af5e0bb.svg";

/***/ }),

/***/ "./src/img/today.svg":
/*!***************************!*\
  !*** ./src/img/today.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3faae0cf01e4ecd160ef.svg";

/***/ }),

/***/ "./src/img/up.svg":
/*!************************!*\
  !*** ./src/img/up.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c3bd4beab414bf074b0.svg";

/***/ }),

/***/ "./node_modules/date-fns/isPast.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/isPast.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isPast: () => (/* binding */ isPast)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name isPast
 * @category Common Helpers
 * @summary Is the given date in the past?
 * @pure false
 *
 * @description
 * Is the given date in the past?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is in the past
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * const result = isPast(new Date(2014, 6, 2))
 * //=> true
 */
function isPast(date) {
  return +(0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date) < Date.now();
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPast);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projectDom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectDom.js */ "./src/projectDom.js");
/* harmony import */ var _homeDom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeDom.js */ "./src/homeDom.js");
/* harmony import */ var _todayDom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todayDom.js */ "./src/todayDom.js");
/* harmony import */ var _dueDom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dueDom.js */ "./src/dueDom.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _img_home_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/home.svg */ "./src/img/home.svg");
/* harmony import */ var _img_alert_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/alert.svg */ "./src/img/alert.svg");
/* harmony import */ var _img_today_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/today.svg */ "./src/img/today.svg");
/* harmony import */ var _selected_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./selected.js */ "./src/selected.js");












const home = document.querySelector('#home');
const today = document.querySelector('#today');
const due = document.querySelector('#due');

// const homeImg = document.createElement('img');
// homeImg.src = homeSvg;
// const homeSpan = document.createElement('span');
// homeSpan.textContent = "Home";
// home.append(homeImg);
// home.append(homeSpan);


function createTabs(main,name,img) {
    const Img = document.createElement('img');
    Img.src = img;
    const Span = document.createElement('span');
    Span.textContent = name;
    main.append(Img);
    main.append(Span);
}

createTabs(home,"Home",_img_home_svg__WEBPACK_IMPORTED_MODULE_5__);
createTabs(today,"Today",_img_today_svg__WEBPACK_IMPORTED_MODULE_7__);
createTabs(due,"Past Due",_img_alert_svg__WEBPACK_IMPORTED_MODULE_6__);

_selected_js__WEBPACK_IMPORTED_MODULE_8__["default"].selectHome()
;(0,_homeDom_js__WEBPACK_IMPORTED_MODULE_1__["default"])()

home.addEventListener('click', ()=> {
    _selected_js__WEBPACK_IMPORTED_MODULE_8__["default"].selectHome();
    (0,_homeDom_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
})

today.addEventListener('click', ()=> {
    _selected_js__WEBPACK_IMPORTED_MODULE_8__["default"].selectToday();
    (0,_todayDom_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
})

due.addEventListener('click', ()=> {
    _selected_js__WEBPACK_IMPORTED_MODULE_8__["default"].selectDue();
    (0,_dueDom_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
})


;(0,_projectDom_js__WEBPACK_IMPORTED_MODULE_0__["default"])()



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtJQUFtRDtBQUMvRiw0Q0FBNEMscUtBQThEO0FBQzFHLDRDQUE0Qyx1R0FBK0I7QUFDM0UsNENBQTRDLG1HQUE2QjtBQUN6RSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQ0FBbUM7QUFDdEQ7O0FBRUE7QUFDQSxtQkFBbUIsbUNBQW1DO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RkFBeUY7QUFDekY7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsdUJBQXVCO0FBQ3ZCO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFFBQVEsV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxPQUFPLGFBQWEsYUFBYSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSx3QkFBd0IseUJBQXlCLGFBQWEsYUFBYSx5QkFBeUIsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsS0FBSyxXQUFXLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxPQUFPLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksc0NBQXNDLDRCQUE0QixtREFBbUQsR0FBRyxnQkFBZ0IsOEJBQThCLGdFQUFnRSxHQUFHLFdBQVcsMEJBQTBCLGlDQUFpQyw2QkFBNkIsK0JBQStCLEdBQUcsZUFBZSwrQkFBK0IscUNBQXFDLEdBQUcsaUJBQWlCLG9CQUFvQixHQUFHLHdCQUF3QixxQkFBcUIsR0FBRyxxQkFBcUIscUNBQXFDLEdBQUcsZ0NBQWdDLG1DQUFtQyxHQUFHLFFBQVEsZ0JBQWdCLDJDQUEyQyx1QkFBdUIsOEJBQThCLEdBQUcsZ0JBQWdCLG9CQUFvQiw2QkFBNkIsb0JBQW9CLEdBQUcsa0JBQWtCLDhCQUE4QixHQUFHLFdBQVcseUJBQXlCLDJDQUEyQyxHQUFHLGdCQUFnQiw0QkFBNEIscUJBQXFCLGlCQUFpQixnQkFBZ0IsR0FBRyxTQUFTLG1CQUFtQixvQkFBb0IscUNBQXFDLFNBQVMsY0FBYyx3QkFBd0Isb0NBQW9DLHNCQUFzQiw2QkFBNkIsZUFBZSwyQ0FBMkMsR0FBRyxrQkFBa0Isb0JBQW9CLEdBQUcsa0JBQWtCLG9CQUFvQixlQUFlLHdCQUF3Qix5QkFBeUIsR0FBRyxvQkFBb0Isb0JBQW9CLGVBQWUsMEJBQTBCLDBCQUEwQiwyQkFBMkIsdUJBQXVCLEdBQUcsMEJBQTBCLDRDQUE0QywyRkFBMkYsS0FBSyxzQ0FBc0MsdUJBQXVCLHlCQUF5Qiw0QkFBNEIsc0JBQXNCLHlCQUF5QixpQ0FBaUMsMkNBQTJDLDRDQUE0Qyx1QkFBdUIsR0FBRyxxQkFBcUIsNENBQTRDLGdDQUFnQyxtQkFBbUIsR0FBRyxtQkFBbUIsb0JBQW9CLDZCQUE2Qix5QkFBeUIsR0FBRywyQkFBMkIscUJBQXFCLHlCQUF5QiwyQkFBMkIsMkNBQTJDLDRDQUE0QyxHQUFHLCtCQUErQixvQkFBb0IsR0FBRyx1QkFBdUIsb0JBQW9CLHFDQUFxQyxlQUFlLDBCQUEwQixHQUFHLGdDQUFnQyxjQUFjLHFCQUFxQix1QkFBdUIsR0FBRywwQ0FBMEMsZ0NBQWdDLG1CQUFtQixtQkFBbUIsb0JBQW9CLEdBQUcsMkNBQTJDLDRDQUE0QyxtQkFBbUIsb0JBQW9CLEdBQUcsbUJBQW1CLG9CQUFvQixvQkFBb0IsMEJBQTBCLHFDQUFxQywyQkFBMkIsNEJBQTRCLDRDQUE0Qyx1QkFBdUIsR0FBRyxxQkFBcUIsbUJBQW1CLG1CQUFtQixHQUFHLDRCQUE0QixpQkFBaUIsR0FBRyxlQUFlLHlCQUF5QixHQUFHLDREQUE0RCxxQkFBcUIsc0JBQXNCLG1CQUFtQixrQkFBa0IsMkJBQTJCLHFCQUFxQixpQ0FBaUMsMkNBQTJDLDRDQUE0Qyx1QkFBdUIsUUFBUSxtQkFBbUIsbUJBQW1CLDRDQUE0QyxnQ0FBZ0MsR0FBRyxVQUFVLDhCQUE4QixHQUFHLG9CQUFvQix3QkFBd0Isb0JBQW9CLDZCQUE2QixlQUFlLEdBQUcsc0JBQXNCLHlCQUF5QixHQUFHLGVBQWUsb0JBQW9CLHFDQUFxQyxpQkFBaUIseUJBQXlCLDRDQUE0QyxHQUFHLHNCQUFzQixvQkFBb0IsbUJBQW1CLGdDQUFnQyx3REFBd0Qsd0NBQXdDLGdDQUFnQywwQkFBMEIsa0RBQWtELHNCQUFzQixPQUFPLDhCQUE4QiwyQ0FBMkMsR0FBRyxtQkFBbUIsbUJBQW1CLG1CQUFtQixHQUFHLHVCQUF1QixpQkFBaUIsR0FBRyxvQkFBb0IsYUFBYSxJQUFJLHlCQUF5QixtQkFBbUIsb0JBQW9CLDBCQUEwQixpQkFBaUIsd0JBQXdCLEdBQUcsaUNBQWlDLGtCQUFrQixvQkFBb0IscUNBQXFDLEdBQUcsbUJBQW1CLG9CQUFvQixlQUFlLEdBQUcscUNBQXFDLG9CQUFvQixHQUFHLGVBQWUscUJBQXFCLEdBQUcsWUFBWSwyQ0FBMkMsaUJBQWlCLEdBQUcsYUFBYSxvQkFBb0IsaUJBQWlCLEdBQUcsYUFBYSx1QkFBdUIsb0JBQW9CLDZCQUE2QixlQUFlLGdCQUFnQixpQkFBaUIsR0FBRyxVQUFVLHNCQUFzQixvQkFBb0IsNkJBQTZCLHFCQUFxQixlQUFlLG1CQUFtQixtQkFBbUIsdUJBQXVCLEdBQUcsVUFBVSxtQkFBbUIsb0RBQW9ELEdBQUcscUJBQXFCLDhCQUE4QixtQkFBbUIsR0FBRyxlQUFlLDJCQUEyQixJQUFJLGdCQUFnQiwyQkFBMkIsR0FBRyxtQkFBbUIsc0JBQXNCLHFCQUFxQiwyQkFBMkIscUJBQXFCLDhCQUE4QiwyQkFBMkIsNENBQTRDLHFCQUFxQixTQUFTLDhCQUE4QixtQkFBbUIsZ0NBQWdDLG1CQUFtQixHQUFHLDhCQUE4QixxQkFBcUIscUJBQXFCLDRDQUE0QyxtQkFBbUIsOEJBQThCLDhCQUE4QixLQUFLLG9DQUFvQyxvQkFBb0IsR0FBRyxpQkFBaUIseUJBQXlCLEdBQUcscUJBQXFCO0FBQzM2UztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ3JYMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUN4QmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2IrQjtBQUNEO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLGdEQUFPO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ2U7QUFDTztBQUNJO0FBQ1I7QUFDSTs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtDQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw0Q0FBUztBQUMzQjtBQUNBO0FBQ0EsbUJBQW1CLDBDQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLCtDQUFNO0FBQ2xCO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLFlBQVksK0NBQU07QUFDbEI7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxZQUFZLCtDQUFNO0FBQ2xCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwrQ0FBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSm1CO0FBQ1I7QUFDSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLCtDQUFNO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBOztBQUVBLG9CQUFvQiwrQ0FBTTtBQUMxQix3QkFBd0IsZUFBZTtBQUN2QztBQUNBLG1CQUFtQixnREFBTTtBQUN6QixvQkFBb0IsNkNBQUk7QUFDeEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQUksNkNBQUk7QUFDUjtBQUNBOzs7QUFHQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ1k7QUFDSztBQUNOOztBQUUxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLDJDQUEyQyw4Q0FBSTtBQUMvQyxzRkFBc0YsZ0RBQU87QUFDN0Ysd0hBQXdILDZDQUFJO0FBQzVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7OztBQzNHZjtBQUMwQjtBQUNJOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsK0NBQU07QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0Esb0JBQW9CLCtDQUFNO0FBQzFCLHdCQUF3QixlQUFlO0FBQ3ZDO0FBQ0EsZ0JBQWdCLDZDQUFJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksNkNBQUk7QUFDUjtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDaENXO0FBQ0k7O0FBRWY7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQ0FBTTtBQUNkOztBQUVBO0FBQ0EsMkJBQTJCLDZDQUFJO0FBQy9CLFFBQVEsK0NBQU07QUFDZDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDLDZDQUFJLEdBQUcsNkNBQUk7QUFDakQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENnQztBQUNBO0FBQ0Y7QUFDVztBQUNUOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsK0NBQU07QUFDN0IsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0Q0FBUztBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsaURBQU07QUFDdEIsZ0JBQWdCLG9EQUFPO0FBQ3ZCLGFBQWE7O0FBRWI7QUFDQTtBQUNBLGdCQUFnQiwrQ0FBTTtBQUN0QixnQkFBZ0Isb0RBQU87QUFDdkI7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLCtDQUFNO0FBQ2xCLHlCQUF5QiwrQ0FBTTtBQUMvQjtBQUNBLFlBQVksb0RBQU87QUFDbkI7QUFDQSxZQUFZLGlEQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUNqR2dCOztBQUUvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7QUNsRVM7QUFDZjs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQ0FBTTtBQUNkOztBQUVBO0FBQ0E7QUFDQSxRQUFRLCtDQUFNO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQzBCO0FBQ0k7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0NBQU07QUFDckIsb0JBQW9CLGNBQWM7QUFDbEM7QUFDQSxZQUFZLDZDQUFJO0FBQ2hCO0FBQ0E7O0FBRUE7O0FBRUEsSUFBSSw2Q0FBSTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsK0NBQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDekVmO0FBQzBCO0FBQ0k7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLEtBQUssR0FBRyxNQUFNLEdBQUcsSUFBSTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwrQ0FBTTtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7O0FBRUEsb0JBQW9CLCtDQUFNO0FBQzFCLHdCQUF3QixlQUFlO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsNkNBQUk7QUFDeEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQUksNkNBQUk7QUFDUjtBQUNBOzs7QUFHQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEdUI7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLFVBQVUsbURBQU07QUFDaEI7O0FBRUE7QUFDQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQnRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7O1VDekR0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeUM7QUFDTjtBQUNFO0FBQ1A7QUFDVDtBQUNnQjtBQUNFO0FBQ0E7QUFDSjs7OztBQUluQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QiwwQ0FBTztBQUM5Qix5QkFBeUIsMkNBQVE7QUFDakMsMEJBQTBCLDJDQUFROztBQUVsQyxvREFBTTtBQUNOLHdEQUFPOztBQUVQO0FBQ0EsSUFBSSxvREFBTTtBQUNWLElBQUksdURBQU87QUFDWCxDQUFDOztBQUVEO0FBQ0EsSUFBSSxvREFBTTtBQUNWLElBQUksd0RBQVE7QUFDWixDQUFDOztBQUVEO0FBQ0EsSUFBSSxvREFBTTtBQUNWLElBQUksc0RBQUc7QUFDUCxDQUFDOzs7QUFHRCwyREFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9Uby1kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NhcmQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kdWVEb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9ob21lRG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3REb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zZWxlY3RlZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrRG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kYXlEb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1Bhc3QubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvdG9EYXRlLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImZvbnRzL1NhbmtvZmFEaXNwbGF5LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiZm9udHMvUm9ib3RvQ29uZGVuc2VkLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcImltZy9kb3duLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcImltZy91cC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcImxvZ29cIjtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwibXlGb250XCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbjpyb290IHtcbiAgICAtLWZvbnQtc2l6ZSA6IDEuMmVtO1xuICAgIC0tYmFja2dyb3VuZC1jb2xvciA6d2hpdGUgO1xuICAgIC0tZmlyc3QtY29sb3I6ICM3MzVEQTU7XG4gICAgLS1zZWNvbmQtY29sb3I6ICNEM0M1RTUgO1xufVxuXG4udGFza0NhcmQge1xuICAgIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDlmciAxZnI7XG59XG5cbi50YXNrQ2FyZCBwIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLnRhc2tDYXJkIHAuY29sbGFwc2Uge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLnRhc2tDYXJkIC5leHBhbmQge1xuICAgIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cblxuLnRhc2tDYXJkIC5leHBhbmQuY29sbGFwc2Uge1xuICAgIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbn1cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBmb250LWZhbWlseTogXCJteUZvbnRcIjtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbmJ1dHRvbixpbnB1dCB7XG4gICAgZm9udC1mYW1pbHk6IFwibXlGb250XCI7XG59XG4uaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxLjVlbSA1ZW07XG4gICAgYm94LXNoYWRvdzogMHB4IDAuNXB4IDNweCAtMnB4IGJsYWNrO1xufVxuXG4uaGVhZGVyIGgyIHtcbiAgICBmb250LWZhbWlseTogXCJsb2dvXCI7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG4ubWFpbiB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xuICAgIFxufVxuXG4uc2lkZWJhciB7XG4gICAgcGFkZGluZzoyZW0gMC41ZW07XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNDsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyZW07XG4gICAgYm94LXNoYWRvdzogMHB4IDAuNXB4IDRweCAtMnB4IGJsYWNrO1xufVxuXG4uc2lkZWJhciBpbWcge1xuICAgIGhlaWdodDogMS41ZW07XG59XG5cbi5zaWRlLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDFlbTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uc2lkZS1idXR0b24gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMWVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1pbmxpbmU6IDRlbTtcbiAgICBwYWRkaW5nLWJsb2NrOiAwLjVlbTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLnNpZGUtYnV0dG9uIGRpdjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsdmFyKC0tc2Vjb25kLWNvbG9yKSx2YXIoLS1maXJzdC1jb2xvcikgKTsgKi9cbn1cblxuXG4vKiBwcm9qZWN0ICAqL1xuXG4uYWRkLXByb2plY3Qge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYmxvY2s6IDAuMTVlbTtcbiAgICBtYXJnaW46IDAgMC40ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmQtY29sb3IpO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG59XG4uYWRkLXByb2plY3Q6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbiNwcm9qZWN0LWRpYWxvZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbn1cblxuI3Byb2plY3QtZGlhbG9nIGlucHV0IHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZC1jb2xvcik7XG59XG4jcHJvamVjdC1kaWFsb2cgaW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG4jcHJvamVjdC1kaWFsb2cgZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDFlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xufVxuXG4jcHJvamVjdC1kaWFsb2cgZGl2IGJ1dHRvbiB7XG4gICAgZmxleDogMTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwYWRkaW5nOiAwLjVlbSAwO1xufVxuI3Byb2plY3QtZGlhbG9nIGRpdiBidXR0b246Zmlyc3QtY2hpbGQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDk0OEI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4jcHJvamVjdC1kaWFsb2cgZGl2IGJ1dHRvbjpsYXN0LWNoaWxkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4ucHJvamVjdC1jYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMC41ZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy1ibG9jazogMC41ZW07XG4gICAgcGFkZGluZy1pbmxpbmU6IDEuMmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5wcm9qZWN0LWNhcmQgaW1nIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgd2lkdGg6IDEuM2VtO1xufVxuXG4ucHJvamVjdC1jYXJkIGltZzpob3ZlcntcbiAgICBvcGFjaXR5OiAxO1xufVxuLnByb2plY3QgaDMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogZW5kIHByb2plY3QgKi9cblxuLyogdGFzayAgKi9cblxuXG4udGFza3MgLnRhc2stYWRkIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctYmxvY2s6IDAuNWVtO1xuICAgIHRyYW5zaXRpb246IDFzO1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmQtY29sb3IpO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICBcbn1cbi50YXNrLWFkZDpob3ZlciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcbn1cbi50YXNrcyB7XG4gICAgcGFkZGluZy1pbmxpbmU6IDIwJSAyMCU7XG59XG4udGFza3MgI3Rhc2tsaXN0IHtcbiAgICBtYXJnaW4tdG9wOiAxLjVlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxZW07XG59XG4udGFza3MgI3Rhc2tsaXN0IGgye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRhc2tDYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDAuNWVtO1xuICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xufVxuXG4udGFza0NhcmQgLmNoZWNrIHtcbiAgICBoZWlnaHQ6IDEuM2VtO1xuICAgIHdpZHRoOiAxLjNlbTtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IC8qIEZvciBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTsgLyogRm9yIEZpcmVmb3ggKi9cbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyAvKiBNYWtlcyB0aGUgY2hlY2tib3ggcm91bmQgKi9cbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuXG59XG5cbi50YXNrQ2FyZCAuY2hlY2s6Y2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xufVxuXG4udGFza0NhcmQgaW1nIHtcbiAgICB3aWR0aDogMS4zZW07XG4gICAgb3BhY2l0eTogMC41O1xufVxuLnRhc2tDYXJkIGltZzpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbn1cbi8qIC50YXNrQ2FyZCA+ICoge1xuICAgIGZsZXg6MTtcbn0gKi9cbi50YXNrQ2FyZCAudGFzay10ZXh0e1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjVlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cblxuLnRhc2tDYXJkIC50YXNrLXRleHQgLnRpdGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnRhc2stYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFlbTtcbn1cbi8qIGVuZCB0YXNrICAqL1xuXG4jcHJvamVjdC1kaWFsb2d7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuI2FkZC10YXNrIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuZGlhbG9nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XG4gICAgd2lkdGg6IDIwJTtcbn1cbmZvcm0gdWwgbGl7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDAuMmVtO1xufVxuXG5mb3JtIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFlbTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBnYXA6IDFlbTtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5kaWFsb2cge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMHB4IHZhcigtLXNlY29uZC1jb2xvcik7XG59XG5cbmRpYWxvZzo6YmFja2Ryb3B7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgb3BhY2l0eTogMC4zO1xufVxuLyogZm9ybSBkaXYge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufSAqL1xuXG5mb3JtIGRpdiB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5mb3JtIGRpdiBidXR0b24ge1xuICAgIC8qIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4OyAqL1xuICAgIC8qIGZvbnQtc2l6ZTogMWVtOyAqL1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxNXB4OyAqL1xuICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIFxufVxuZm9ybSBkaXYgYnV0dG9uOmxhc3QtY2hpbGQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA5NDhCO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbmZvcm0gaW5wdXQsdGV4dGFyZWEsc2VsZWN0IHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LWZhbWlseTogXCJteUZvbnRcIjtcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xufVxuZm9ybSBpbnB1dCx0ZXh0YXJlYSxzZWxlY3Q6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5mb3JtIGxpIGxhYmVsIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDRDQUF1RDtBQUMzRDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnREFBNEI7QUFDaEM7O0FBRUE7SUFDSSxnREFBMEI7QUFDOUI7QUFDQTtJQUNJLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsVUFBVTtJQUNWLFNBQVM7QUFDYjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7O0FBRWxDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLCtCQUErQjtJQUMvQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUNBQXFDO0lBQ3JDLHNGQUFzRjtBQUMxRjs7O0FBR0EsYUFBYTs7QUFFYjtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLG9DQUFvQztJQUNwQyxxQ0FBcUM7SUFDckMsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxxQ0FBcUM7SUFDckMseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsb0NBQW9DO0lBQ3BDLHFDQUFxQztBQUN6QztBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixRQUFRO0lBQ1IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksT0FBTztJQUNQLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixxQ0FBcUM7SUFDckMsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBLGdCQUFnQjs7QUFFaEIsVUFBVTs7O0FBR1Y7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyxnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHdCQUF3QixFQUFFLDBCQUEwQjtJQUNwRCxxQkFBcUIsRUFBRSxnQkFBZ0I7SUFDdkMsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixrQkFBa0IsRUFBRSw2QkFBNkI7SUFDakQsYUFBYTtJQUNiLGVBQWU7OztBQUduQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTs7R0FFRztBQUNIO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7QUFDWjtBQUNBLGNBQWM7O0FBRWQ7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxRQUFRO0lBQ1IsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWiw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBOztHQUVHOztBQUVIO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSTtvQkFDZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHFDQUFxQztJQUNyQyxjQUFjOztBQUVsQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLHFDQUFxQztJQUNyQyxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcImxvZ29cXFwiO1xcbiAgICBzcmM6IHVybCgnZm9udHMvU2Fua29mYURpc3BsYXktUmVndWxhci50dGYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwibXlGb250XFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcImZvbnRzL1JvYm90b0NvbmRlbnNlZC1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWZvbnQtc2l6ZSA6IDEuMmVtO1xcbiAgICAtLWJhY2tncm91bmQtY29sb3IgOndoaXRlIDtcXG4gICAgLS1maXJzdC1jb2xvcjogIzczNURBNTtcXG4gICAgLS1zZWNvbmQtY29sb3I6ICNEM0M1RTUgO1xcbn1cXG5cXG4udGFza0NhcmQge1xcbiAgICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOWZyIDFmcjtcXG59XFxuXFxuLnRhc2tDYXJkIHAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4udGFza0NhcmQgcC5jb2xsYXBzZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4udGFza0NhcmQgLmV4cGFuZCB7XFxuICAgIGNvbnRlbnQ6IHVybChcXFwiaW1nL2Rvd24uc3ZnXFxcIik7XFxufVxcblxcbi50YXNrQ2FyZCAuZXhwYW5kLmNvbGxhcHNlIHtcXG4gICAgY29udGVudDogdXJsKFxcXCJpbWcvdXAuc3ZnXFxcIik7XFxufVxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJteUZvbnRcXFwiO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYnV0dG9uLGlucHV0IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJteUZvbnRcXFwiO1xcbn1cXG4uaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMS41ZW0gNWVtO1xcbiAgICBib3gtc2hhZG93OiAwcHggMC41cHggM3B4IC0ycHggYmxhY2s7XFxufVxcblxcbi5oZWFkZXIgaDIge1xcbiAgICBmb250LWZhbWlseTogXFxcImxvZ29cXFwiO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG4ubWFpbiB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbiAgICBcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBwYWRkaW5nOjJlbSAwLjVlbTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNDsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyZW07XFxuICAgIGJveC1zaGFkb3c6IDBweCAwLjVweCA0cHggLTJweCBibGFjaztcXG59XFxuXFxuLnNpZGViYXIgaW1nIHtcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXG59XFxuXFxuLnNpZGUtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxZW07XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi5zaWRlLWJ1dHRvbiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDRlbTtcXG4gICAgcGFkZGluZy1ibG9jazogMC41ZW07XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcbi5zaWRlLWJ1dHRvbiBkaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsdmFyKC0tc2Vjb25kLWNvbG9yKSx2YXIoLS1maXJzdC1jb2xvcikgKTsgKi9cXG59XFxuXFxuXFxuLyogcHJvamVjdCAgKi9cXG5cXG4uYWRkLXByb2plY3Qge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYmxvY2s6IDAuMTVlbTtcXG4gICAgbWFyZ2luOiAwIDAuNGVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZC1jb2xvcik7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcbi5hZGQtcHJvamVjdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG4jcHJvamVjdC1kaWFsb2cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XFxufVxcblxcbiNwcm9qZWN0LWRpYWxvZyBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZC1jb2xvcik7XFxufVxcbiNwcm9qZWN0LWRpYWxvZyBpbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbiNwcm9qZWN0LWRpYWxvZyBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMWVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbn1cXG5cXG4jcHJvamVjdC1kaWFsb2cgZGl2IGJ1dHRvbiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBwYWRkaW5nOiAwLjVlbSAwO1xcbn1cXG4jcHJvamVjdC1kaWFsb2cgZGl2IGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDk0OEI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jcHJvamVjdC1kaWFsb2cgZGl2IGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAwLjVlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nLWJsb2NrOiAwLjVlbTtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDEuMmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG4ucHJvamVjdC1jYXJkIGltZyB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgd2lkdGg6IDEuM2VtO1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkIGltZzpob3ZlcntcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuLnByb2plY3QgaDMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIGVuZCBwcm9qZWN0ICovXFxuXFxuLyogdGFzayAgKi9cXG5cXG5cXG4udGFza3MgLnRhc2stYWRkIHtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIG1hcmdpbi10b3A6IDFlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy1ibG9jazogMC41ZW07XFxuICAgIHRyYW5zaXRpb246IDFzO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmQtY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgIFxcbn1cXG4udGFzay1hZGQ6aG92ZXIge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XFxufVxcbi50YXNrcyB7XFxuICAgIHBhZGRpbmctaW5saW5lOiAyMCUgMjAlO1xcbn1cXG4udGFza3MgI3Rhc2tsaXN0IHtcXG4gICAgbWFyZ2luLXRvcDogMS41ZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMWVtO1xcbn1cXG4udGFza3MgI3Rhc2tsaXN0IGgye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YXNrQ2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAwLjVlbTtcXG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xcbn1cXG5cXG4udGFza0NhcmQgLmNoZWNrIHtcXG4gICAgaGVpZ2h0OiAxLjNlbTtcXG4gICAgd2lkdGg6IDEuM2VtO1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IC8qIEZvciBTYWZhcmkgYW5kIENocm9tZSAqL1xcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7IC8qIEZvciBGaXJlZm94ICovXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgLyogTWFrZXMgdGhlIGNoZWNrYm94IHJvdW5kICovXFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG5cXG59XFxuXFxuLnRhc2tDYXJkIC5jaGVjazpjaGVja2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xcbn1cXG5cXG4udGFza0NhcmQgaW1nIHtcXG4gICAgd2lkdGg6IDEuM2VtO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcbi50YXNrQ2FyZCBpbWc6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4vKiAudGFza0NhcmQgPiAqIHtcXG4gICAgZmxleDoxO1xcbn0gKi9cXG4udGFza0NhcmQgLnRhc2stdGV4dHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNWVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG59XFxuXFxuLnRhc2tDYXJkIC50YXNrLXRleHQgLnRpdGxlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRhc2stYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMWVtO1xcbn1cXG4vKiBlbmQgdGFzayAgKi9cXG5cXG4jcHJvamVjdC1kaWFsb2d7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNhZGQtdGFzayB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XFxuICAgIHdpZHRoOiAyMCU7XFxufVxcbmZvcm0gdWwgbGl7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMC4yZW07XFxufVxcblxcbmZvcm0gdWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgbWFyZ2luLXRvcDogMWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgZ2FwOiAxZW07XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5kaWFsb2cge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAwcHggdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG59XFxuXFxuZGlhbG9nOjpiYWNrZHJvcHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG9wYWNpdHk6IDAuMztcXG59XFxuLyogZm9ybSBkaXYge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59ICovXFxuXFxuZm9ybSBkaXYge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuZm9ybSBkaXYgYnV0dG9uIHtcXG4gICAgLyogbWFyZ2luOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4OyAqL1xcbiAgICAvKiBmb250LXNpemU6IDFlbTsgKi9cXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxNXB4OyAqL1xcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBcXG59XFxuZm9ybSBkaXYgYnV0dG9uOmxhc3QtY2hpbGQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDk0OEI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuZm9ybSBpbnB1dCx0ZXh0YXJlYSxzZWxlY3Qge1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJteUZvbnRcXFwiO1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xcbn1cXG5mb3JtIGlucHV0LHRleHRhcmVhLHNlbGVjdDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbmZvcm0gbGkgbGFiZWwge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIlxuaW1wb3J0IGhlbHBlciBmcm9tIFwiLi9oZWxwZXJcIjtcbmNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gW11cbiAgICB9XG5cbiAgICBzZXRQcm9qZWN0KHByb2plY3RzKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0c1xuICAgIH1cblxuICAgIGFkZFByb2plY3QobmFtZSkge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgLy8gaGVscGVyLnVwZGF0ZUxvY2FsU3RvcmFnZSgpXG4gICAgfVxuXG4gICAgcmVtb3ZlUHJvamVjdChpbmRleCkge1xuICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShpbmRleCwxKTtcbiAgICAgICAgLy8gaGVscGVyLnVwZGF0ZUxvY2FsU3RvcmFnZSgpXG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xuICAgIH1cblxuICAgIGdldFByb2plY3QobmFtZSkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gbmFtZSk7XG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVG9kbyIsImltcG9ydCBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG5pbXBvcnQgZWRpdFN2ZyBmcm9tIFwiLi9pbWcvZWRpdC5zdmdcIjtcbmltcG9ydCBkZWxldGVTdmcgZnJvbSBcIi4vaW1nL2RlbGV0ZS5zdmdcIjtcbmltcG9ydCB1cFN2ZyBmcm9tIFwiLi9pbWcvdXAuc3ZnXCI7XG5pbXBvcnQgZG93blN2ZyBmcm9tIFwiLi9pbWcvZG93bi5zdmdcIjtcblxuY29uc3QgY2FyZCA9ICgoKSA9PiB7XG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IG51bGw7XG4gICAgbGV0IHByb2plY3ROYW1lID0gJyc7XG4gICAgY29uc3QgZGlhbG9nRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stZGlhbG9nJylcbiAgICBjb25zdCB0aXRsZUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLXRpdGxlJylcbiAgICBjb25zdCBkYXRlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stZGF0ZScpXG4gICAgY29uc3QgcHJpb3JpdHlFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1wcmlvcml0eScpXG4gICAgY29uc3QgZGlzY3JpcHRpb25FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1pbmZvJylcbiAgICBsZXQgbGlzdCA9IFtdXG5cbiAgICBmdW5jdGlvbiBzZXRQcmlvcml0eSh0YXNrLHRhc2tDYXJkKSB7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gdGFzay5nZXRQcmlvcml0eSgpO1xuICAgICAgICBpZihwcmlvcml0eSA9PT0gXCJIaWdoXCIpIHtcbiAgICAgICAgICAgIHRhc2tDYXJkLnN0eWxlLmJveFNoYWRvdyA9IFwiaW5zZXQgMC4zZW0gMCAjRjUyNTQ5XCJcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHByaW9yaXR5ID09PSBcIk1lZGl1bVwiKSB7XG4gICAgICAgICAgICB0YXNrQ2FyZC5zdHlsZS5ib3hTaGFkb3cgPSBcImluc2V0IDAuM2VtIDAgI0Y5ODg2NlwiXG4gICAgICAgIH0gICBcblxuICAgICAgICBpZihwcmlvcml0eSA9PT0gXCJMb3dcIikge1xuICAgICAgICAgICAgdGFza0NhcmQuc3R5bGUuYm94U2hhZG93ID0gXCJpbnNldCAwLjNlbSAwICMxRTI3NjFcIlxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZShwcm9qZWN0LHRhc2ssaW5kZXgsZGlzcGxheSkge1xuICAgICAgICBsaXN0ID0gaGVscGVyLmdldFRhc2tzKHByb2plY3QuZ2V0TmFtZSgpKTtcbiAgICAgICAgbGV0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tDYXJkLmNsYXNzTGlzdC5hZGQoJ3Rhc2tDYXJkJyk7XG4gICAgICAgIGxldCB0ZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRleHREaXYuY2xhc3NMaXN0LmFkZCgndGFzay10ZXh0JylcbiAgICAgICAgbGV0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSU5QVVQnKTsnXVsnXG4gICAgICAgIGNoZWNrLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImNoZWNrYm94XCIpO1xuICAgICAgICBjaGVjay5jbGFzc0xpc3QuYWRkKFwiY2hlY2tcIilcbiAgICAgICAgY2hlY2suZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICAgICAgICBjaGVjay5jaGVja2VkID0gdGFzay5nZXRDb21wbGV0ZSgpO1xuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpXG4gICAgICAgIGxldCBzcGFuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc3BhbjEuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICAgICAgICBsZXQgc3BhbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGxldCBidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stYnV0dG9ucycpO1xuICAgICAgICBsZXQgZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGRlbC5zcmMgPSBkZWxldGVTdmc7XG4gICAgICAgIGRlbC5hbHQgPSBcIkRlbGV0ZVwiXG4gICAgICAgIGxldCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGVkaXQuc3JjID0gZWRpdFN2ZztcbiAgICAgICAgZWRpdC5hbHQgPSBcIkVkaXRcIlxuICAgICAgICBlZGl0LmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgICAgICAgZWRpdC5kYXRhc2V0LnByb2plY3QgPSBwcm9qZWN0LmdldE5hbWUoKVxuICAgICAgICBkZWwuZGF0YXNldC5wcm9qZWN0ID0gcHJvamVjdC5nZXROYW1lKClcbiAgICAgICAgZGVsLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgICAgICAgc3BhbjEudGV4dENvbnRlbnQgPSB0YXNrLmdldFRpdGxlKCk7XG4gICAgICAgIHNwYW4yLnRleHRDb250ZW50ID0gdGFzay5nZXREYXRlKCk7XG5cblxuXG4gICAgICAgIHNldFByaW9yaXR5KHRhc2ssdGFza0NhcmQpO1xuXG4gICAgICAgIGlmKHRhc2suZ2V0Q29tcGxldGUoKSkge1xuICAgICAgICAgICAgc3BhbjEuc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiXG4gICAgICAgIH1cbiAgICBcblxuICAgICAgICBjaGVjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgaGVscGVyLmNoYW5nZUNvbXBsZXRlKHByb2plY3QuZ2V0TmFtZSgpLGluZGV4KVxuICAgICAgICAgICAgZGlzcGxheSgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBoZWxwZXIuY2hhbmdlQ29tcGxldGUocHJvamVjdC5nZXROYW1lKCksaW5kZXgpXG4gICAgICAgICAgICBkaXNwbGF5KClcbiAgICAgICAgfSlcblxuXG4gICAgICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZSA9IGUudGFyZ2V0LmRhdGFzZXQucHJvamVjdDtcbiAgICAgICAgICAgIGRpYWxvZ0VkaXQuc2hvd01vZGFsKClcbiAgICAgICAgICAgIHRpdGxlRWRpdC52YWx1ZSA9IHRhc2suZ2V0VGl0bGUoKTtcbiAgICAgICAgICAgIHByaW9yaXR5RWRpdC52YWx1ZSA9IHRhc2suZ2V0UHJpb3JpdHkoKTtcbiAgICAgICAgICAgIGRpc2NyaXB0aW9uRWRpdC52YWx1ZT0gdGFzay5nZXREaXNjcmlwdGlvbigpO1xuICAgICAgICAgICAgZGF0ZUVkaXQudmFsdWUgPSB0YXNrLmdldERhdGUoKVxuICAgICAgICB9KVxuICAgIFxuICAgICAgICBkZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGhlbHBlci5yZW1vdmVUYXNrKGUudGFyZ2V0LmRhdGFzZXQucHJvamVjdCxlLnRhcmdldC5kYXRhc2V0LmluZGV4KVxuICAgICAgICAgICAgZGlzcGxheSgpXG4gICAgICAgIH0pXG4gICAgXG4gICAgICAgIHRpdGxlLmFwcGVuZChzcGFuMSlcbiAgICAgICAgdGl0bGUuYXBwZW5kKHNwYW4yKVxuICAgICAgICB0ZXh0RGl2LmFwcGVuZChjaGVjayk7XG4gICAgICAgIHRleHREaXYuYXBwZW5kKHRpdGxlKTtcbiAgICAgICAgYnV0dG9uRGl2LmFwcGVuZChlZGl0KTtcbiAgICAgICAgYnV0dG9uRGl2LmFwcGVuZChkZWwpO1xuICAgICAgICB0YXNrQ2FyZC5hcHBlbmQodGV4dERpdik7XG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZChidXR0b25EaXYpO1xuICAgICAgICBcbiAgICAgICAgdGFza2xpc3QuYXBwZW5kKHRhc2tDYXJkKTsgIFxuXG4gICAgICAgIGlmKHRhc2suZ2V0RGlzY3JpcHRpb24oKSAhPSAnJyl7XG4gICAgICAgICAgICBjb25zdCBleHBhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGV4cGFuZC5jbGFzc0xpc3QuYWRkKCdleHBhbmQnKVxuICAgICAgICAgICAgY29uc3Qgc3BhbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBzcGFuMy50ZXh0Q29udGVudCA9IHRhc2suZ2V0RGlzY3JpcHRpb24oKTtcbiAgICAgICAgICAgIGV4cGFuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGU9PiB7XG4gICAgICAgICAgICAgICAgc3BhbjMuY2xhc3NMaXN0LnRvZ2dsZSgnY29sbGFwc2UnKTtcbiAgICAgICAgICAgICAgICBleHBhbmQuY2xhc3NMaXN0LnRvZ2dsZSgnY29sbGFwc2UnKVxuICAgICAgICAgICAgfSkgXG4gICAgICAgICAgICBidXR0b25EaXYuYXBwZW5kKGV4cGFuZCk7IFxuICAgICAgICAgICAgdGFza0NhcmQuYXBwZW5kKHNwYW4zKTsgXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGJ1dHRvbkxpc3RuZXJzKGRpc3BsYXkpIHtcbiAgICAgICAgY29uc3QgY2FuY2VsRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stY2FuY2VsJylcbiAgICAgICAgY29uc3QgY29uZmlybUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLWNvbmZpcm0nKVxuXG4gICAgICAgIGxldCBDYW5jZWwgPSBjYW5jZWxFZGl0LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgbGV0IENvbmZpcm0gPSBjb25maXJtRWRpdC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIFxuICAgICAgICBjYW5jZWxFZGl0LnJlcGxhY2VXaXRoKENhbmNlbClcbiAgICAgICAgY29uZmlybUVkaXQucmVwbGFjZVdpdGgoQ29uZmlybSlcbiAgICBcbiAgICAgICAgQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkaWFsb2dFZGl0LmNsb3NlKCk7XG4gICAgICAgIH0pXG4gICAgXG4gICAgICAgIENvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmKHRpdGxlRWRpdC52YWx1ZSAhPSAnJykge1xuICAgICAgICAgICAgICAgIGhlbHBlci5lZGl0VGFzayhwcm9qZWN0TmFtZSxjdXJyZW50SW5kZXgsdGl0bGVFZGl0LnZhbHVlLGRhdGVFZGl0LnZhbHVlLHByaW9yaXR5RWRpdC52YWx1ZSxkaXNjcmlwdGlvbkVkaXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpYWxvZ0VkaXQuY2xvc2UoKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZSxcbiAgICAgICAgYnV0dG9uTGlzdG5lcnNcbiAgICB9XG5cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNhcmQiLCJpbXBvcnQgeyBpc1Bhc3QgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBjYXJkIGZyb20gXCIuL2NhcmRcIjtcbmltcG9ydCBoZWxwZXIgZnJvbSBcIi4vaGVscGVyXCI7XG5sZXQgRHVlID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1hZGQnKVxuICAgIGFkZFRhc2suc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tsaXN0Jyk7XG4gICAgbGV0IHRhc2tzID0gW11cbiAgICAvLyBjb25zdCB0b2RvID0gaGVscGVyLnJldHJpdmUoKTtcbiAgICAvLyBjb25zdCBwcm9qZWN0cyA9IHRvZG8uZ2V0UHJvamVjdHMoKTtcbiAgICBmdW5jdGlvbiB0b2RheURpc3BsYXkoKXtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBoZWxwZXIuZ2V0UHJvamVjdHMoKVxuICAgICAgICB0YXNrTGlzdC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiUGFzdCBEdWVcIjtcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kKHRpdGxlKVxuICAgICAgICBmb3IobGV0IGk9MDtpPHByb2plY3RzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgcHJvamVjdCA9IHByb2plY3RzW2ldO1xuXG4gICAgICAgICAgICB0YXNrcyA9IGhlbHBlci5nZXRUYXNrcyhwcm9qZWN0LmdldE5hbWUoKSk7XG4gICAgICAgICAgICBmb3IobGV0IGo9MDtqPHRhc2tzLmxlbmd0aDtqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdGFzayA9IHRhc2tzW2pdO1xuICAgICAgICAgICAgICAgIGlmKGlzUGFzdCh0YXNrLmdldERhdGUoKSkgJiYgIXRhc2suZ2V0Q29tcGxldGUoKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXJkLmNyZWF0ZShwcm9qZWN0LHRhc2ssaix0b2RheURpc3BsYXkpXG4gICAgICAgICAgICAgICAgfSAgICAgXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhcmQuYnV0dG9uTGlzdG5lcnModG9kYXlEaXNwbGF5KSBcbiAgICB0b2RheURpc3BsYXkoKTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgRHVlIiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4vVG8tZG9cIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcblxubGV0IGhlbHBlciA9ICgoKSA9PiB7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMb2NhbFN0b3JhZ2UoZGF0YSkge1xuICAgICAgICBjb25zdCB0b2RvSnNvbiA9IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvJywgdG9kb0pzb24pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmV0cml2ZSgpIHtcbiAgICAgICAgLy8gY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvJylcbiAgICAgICAgLy8gaWYoZGF0YSA9PT0gbnVsbCkge3JldHVybiBuZXcgVG9kbygpfVxuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IE9iamVjdC5hc3NpZ24obmV3IFRvZG8oKSxKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvJykpKTtcbiAgICAgICAgdG9kb0xpc3Quc2V0UHJvamVjdCh0b2RvTGlzdC5nZXRQcm9qZWN0cygpLm1hcCgocHJvamVjdCkgPT4gT2JqZWN0LmFzc2lnbihuZXcgUHJvamVjdCgpLCBwcm9qZWN0KSkpO1xuICAgICAgICB0b2RvTGlzdC5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHByb2plY3Quc2V0VGFza3MocHJvamVjdC5nZXRUYXNrcygpLm1hcCgodGFzaykgPT4gT2JqZWN0LmFzc2lnbihuZXcgVGFzaygpLCB0YXNrKSkpKVxuICAgICAgICByZXR1cm4gdG9kb0xpc3RcbiAgICB9XG5cbiAgICAvLyBmdW5jdGlvbiByZXRyaXZlKCkge1xuICAgIC8vICAgICBjb25zdCByZXZpdmVkVG9kbyA9IG5ldyBUb2RvKCk7XG4gICAgLy8gICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kbycpO1xuICAgIC8vICAgICBpZihkYXRhKSB7XG4gICAgLy8gICAgICAgICBjb25zdCB0b2RvRGF0YSA9IEpTT04ucGFyc2UoZGF0YSlcbiAgICAvLyAgICAgICAgIGZvcihjb25zdCBwcm9qZWN0RGF0YSBvZiB0b2RvRGF0YS5wcm9qZWN0cykge1xuICAgIC8vICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oKVxuICAgIC8vICAgICAgICAgICAgIGNvbnN0IHJldml2ZWRQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdERhdGEubmFtZSlcbiAgICAvLyAgICAgICAgICAgICBmb3IoY29uc3QgdGFza0RhdGEgb2YgcHJvamVjdERhdGEubGlzdCkge1xuICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCByZXZpdmVkdGFzayA9IG5ldyBUYXNrKHRhc2tEYXRhLm5hbWUsdGFza0RhdGEuZGF0ZSx0YXNrRGF0YS5wcmlvcml0eSx0YXNrRGF0YS5jb21wbGV0ZSlcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV2aXZlZFByb2plY3QuYWRkVGFzayhyZXZpdmVkdGFzaylcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgcmV2aXZlZFRvZG8uYWRkUHJvamVjdChyZXZpdmVkUHJvamVjdClcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgICAgICBcbiAgICAvLyAgICAgcmV0dXJuIHJldml2ZWRUb2RvO1xuICAgIC8vIH1cblxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3QobmFtZSkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IHJldHJpdmUoKTtcbiAgICAgICAgdG9kb0xpc3QuYWRkUHJvamVjdChuYW1lKTtcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKHRvZG9MaXN0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KGluZGV4KSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gcmV0cml2ZSgpO1xuICAgICAgICB0b2RvTGlzdC5yZW1vdmVQcm9qZWN0KGluZGV4KTtcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKHRvZG9MaXN0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSByZXRyaXZlKCk7XG4gICAgICAgIHJldHVybiB0b2RvTGlzdC5nZXRQcm9qZWN0cygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVRhc2socHJvamVjdE5hbWUsaW5kZXgpIHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSByZXRyaXZlKCk7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSB0b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKVxuICAgICAgICBpZihwcm9qZWN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHByb2plY3QucmVtb3ZlVGFzayhpbmRleClcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UodG9kb0xpc3QpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFRhc2socHJvamVjdE5hbWUsbmFtZSxkYXRlLHByaW9yaXR5LGRpc2NyaXB0aW9uKSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gcmV0cml2ZSgpO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIHByb2plY3QuYWRkVGFzayhuYW1lLGRhdGUscHJpb3JpdHksZGlzY3JpcHRpb24pXG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSh0b2RvTGlzdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZWRpdFRhc2socHJvamVjdE5hbWUsaW5kZXgsbmFtZSxkYXRlLHByaW9yaXR5LGRpc2NyaXB0aW9uKSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gcmV0cml2ZSgpO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSlcbiAgICAgICAgY29uc3QgdGFza3MgPSBwcm9qZWN0LmdldFRhc2tzKCk7XG4gICAgICAgIHRhc2tzW2luZGV4XS5zZXRUYXNrKG5hbWUsZGF0ZSxwcmlvcml0eSxkaXNjcmlwdGlvbilcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKHRvZG9MaXN0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUYXNrcyhwcm9qZWN0TmFtZSkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IHJldHJpdmUoKTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHRvZG9MaXN0LmdldFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICByZXR1cm4gcHJvamVjdC5nZXRUYXNrcygpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlQ29tcGxldGUocHJvamVjdE5hbWUsaW5kZXgpe1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IHJldHJpdmUoKTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHRvZG9MaXN0LmdldFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBjb25zdCB0YXNrID0gcHJvamVjdC5nZXRUYXNrcygpW2luZGV4XTtcbiAgICAgICAgdGFzay5jaGFuZ2VDb21wbGV0ZSgpO1xuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UodG9kb0xpc3QpO1xuICAgIH0gIFxuICAgIHJldHVybiB7XG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSxcbiAgICAgICAgcmV0cml2ZSxcbiAgICAgICAgYWRkUHJvamVjdCxcbiAgICAgICAgcmVtb3ZlUHJvamVjdCxcbiAgICAgICAgZ2V0UHJvamVjdHMsXG4gICAgICAgIGFkZFRhc2ssXG4gICAgICAgIHJlbW92ZVRhc2ssXG4gICAgICAgIGdldFRhc2tzLFxuICAgICAgICBlZGl0VGFzayxcbiAgICAgICAgY2hhbmdlQ29tcGxldGVcbiAgICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBoZWxwZXIiLCIvLyBpbXBvcnQgdG9kbyBmcm9tIFwiLi9Uby1kb1wiO1xuaW1wb3J0IGNhcmQgZnJvbSBcIi4vY2FyZFwiO1xuaW1wb3J0IGhlbHBlciBmcm9tIFwiLi9oZWxwZXJcIjtcblxubGV0IGhvbWVEb20gPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWFkZCcpXG4gICAgYWRkVGFzay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza2xpc3QnKTtcbiAgICBsZXQgdGFza3MgPSBbXVxuICAgIGZ1bmN0aW9uIGhvbWVEaXNwbGF5KCl7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gaGVscGVyLmdldFByb2plY3RzKCk7XG4gICAgICAgIHRhc2tMaXN0LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZCh0aXRsZSlcblxuICAgIFxuICAgICAgICBmb3IobGV0IGk9MDtpPHByb2plY3RzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgbGV0IHByb2plY3QgPSBwcm9qZWN0c1tpXTtcbiAgICAgICAgICAgIHRhc2tzID0gaGVscGVyLmdldFRhc2tzKHByb2plY3QuZ2V0TmFtZSgpKTtcbiAgICAgICAgICAgIGZvcihsZXQgaj0wO2o8dGFza3MubGVuZ3RoO2orKykge1xuICAgICAgICAgICAgICAgIGxldCB0YXNrID0gdGFza3Nbal07ICAgICBcbiAgICAgICAgICAgICAgICBjYXJkLmNyZWF0ZShwcm9qZWN0LHRhc2ssaixob21lRGlzcGxheSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBjYXJkLmJ1dHRvbkxpc3RuZXJzKGhvbWVEaXNwbGF5KVxuICAgIGhvbWVEaXNwbGF5KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBob21lRG9tIiwiaW1wb3J0IHRhc2sgZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IGhlbHBlciBmcm9tIFwiLi9oZWxwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmxpc3QgPSBbXVxuICAgIH1cblxuICAgIHNldFRhc2tzKHRhc2tzKSB7XG4gICAgICAgIHRoaXMubGlzdCA9IHRhc2tzO1xuICAgIH1cbiAgICByZW1vdmVUYXNrKGluZGV4KXtcbiAgICAgICAgdGhpcy5saXN0LnNwbGljZShpbmRleCwxKVxuICAgICAgICBoZWxwZXIudXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgYWRkVGFzayhuYW1lLGRhdGUscHJpb3JpdHksZGlzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5saXN0LnB1c2gobmV3IHRhc2sobmFtZSxkYXRlLHByaW9yaXR5LGRpc2NyaXB0aW9uLGZhbHNlKSk7XG4gICAgICAgIGhlbHBlci51cGRhdGVMb2NhbFN0b3JhZ2UoKVxuICAgIH1cblxuICAgIGdldFRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLmxpc3Q7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBnZXRUYXNrKG5hbWUpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5saXN0LmZpbmQodGFzayA9IHRhc2suZ2V0VGl0bGUoKSA9PT0gbmFtZSk7XG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59IiwiaW1wb3J0IHRhc2tEb20gZnJvbSBcIi4vdGFza0RvbVwiO1xuaW1wb3J0IGhvbWVEb20gZnJvbSBcIi4vaG9tZURvbVwiO1xuaW1wb3J0IGhlbHBlciBmcm9tIFwiLi9oZWxwZXJcIjtcbmltcG9ydCBkZWxldGVTdmcgZnJvbSBcIi4vaW1nL2RlbGV0ZS5zdmdcIjtcbmltcG9ydCBzZWxlY3QgZnJvbSBcIi4vc2VsZWN0ZWRcIjtcblxubGV0IHByb2plY3REb20gPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBjb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuYXBwZW5kKHByb2plY3REaXNwbGF5KVxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWRpYWxvZycpO1xuICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlJyk7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbCcpO1xuICAgIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29uZmlybScpO1xuICAgIHByb2plY3RJbnB1dC52YWx1ZSA9IFwiXCJcbiAgICBmdW5jdGlvbiBkaWFsb2dWaXNpYmxlKCkge1xuICAgICAgICBkaWFsb2cuc3R5bGUuZGlzcGxheT0nYmxvY2snO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpYWxvZ0hpZGRlbigpIHtcbiAgICAgICAgZGlhbG9nLnN0eWxlLmRpc3BsYXk9J25vbmUnO1xuICAgIH1cblxuICAgIGxldCBkaXNwbGF5ID0gKCkgPT4ge1xuICAgICAgICBwcm9qZWN0RGlzcGxheS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAvLyBjb25zdCB0b2RvID0gaGVscGVyLnJldHJpdmUoKTtcbiAgICAgICAgLy8gbGV0IHByb2plY3RzID0gdG9kby5nZXRQcm9qZWN0cygpO1xuICAgICAgICBsZXQgcHJvamVjdHMgPSBoZWxwZXIuZ2V0UHJvamVjdHMoKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgbGV0IHByb2plY3QgPSBwcm9qZWN0c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY2FyZFwiKVxuICAgICAgICAgICAgZGl2LmRhdGFzZXQuaW5kZXggPSBpO1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAvLyBjb25zdCBkZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgZGVsLnNyYyA9IGRlbGV0ZVN2ZztcbiAgICAgICAgICAgIGRlbC5hbHQgPSBcIkRlbGV0ZVwiO1xuICAgICAgICAgICAgZGl2LmFwcGVuZCh0aXRsZSk7XG4gICAgICAgICAgICBkaXYuYXBwZW5kKGRlbCk7XG5cbiAgICAgICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IFxuICAgICAgICAgICAgICAgIHNlbGVjdC5hZGRTaGFkb3coZSk7XG4gICAgICAgICAgICAgICAgdGFza0RvbShwcm9qZWN0KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBoZWxwZXIucmVtb3ZlUHJvamVjdChkaXYuZGF0YXNldC5pbmRleCk7XG4gICAgICAgICAgICAgICAgaG9tZURvbSgpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXkoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0TmFtZSgpO1xuICAgICAgICAgICAgcHJvamVjdERpc3BsYXkuYXBwZW5kKGRpdilcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgLy8gZGlhbG9nLnNob3coKVxuICAgICAgICBkaWFsb2dWaXNpYmxlKClcbiAgICAgICAgYnV0dG9uLnJlcGxhY2VXaXRoKGRpYWxvZylcbiAgICAgICAgcHJvamVjdElucHV0LmZvY3VzKCk7XG4gICAgICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5PSdub25lJztcbiAgICB9KTtcblxuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIC8vIGRpYWxvZy5jbG9zZSgpXG4gICAgICAgIGRpYWxvZ0hpZGRlbigpXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5PSdibG9jayc7XG4gICAgICAgIGRpYWxvZy5yZXBsYWNlV2l0aChidXR0b24pXG4gICAgICAgIHByb2plY3RJbnB1dC52YWx1ZT1cIlwiXG4gICAgfSk7XG5cbiAgICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIC8vIGUudGFyZ2V0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIGRpYWxvZy5jbG9zZSgpXG4gICAgICAgIGRpYWxvZ0hpZGRlbigpXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5PSdibG9jayc7XG4gICAgICAgIGRpYWxvZy5yZXBsYWNlV2l0aChidXR0b24pO1xuICAgICAgICBpZihwcm9qZWN0SW5wdXQudmFsdWUgIT0gJycpe1xuICAgICAgICAgICAgaGVscGVyLmFkZFByb2plY3QocHJvamVjdElucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IHRvZG8gPSBoZWxwZXIucmV0cml2ZSgpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IHRvZG8uZ2V0UHJvamVjdChwcm9qZWN0SW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgdGFza0RvbShwcm9qZWN0KVxuICAgICAgICAgICAgZGlzcGxheSgpO1xuICAgICAgICAgICAgc2VsZWN0LmFkZFNoYWRvd0xhdGVzdFByb2plY3QoKVxuICAgICAgICB9XG4gICAgICAgIHByb2plY3RJbnB1dC52YWx1ZT1cIlwiXG4gICAgICAgIFxuICAgIH0pXG5cbiAgICBkaXNwbGF5KClcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdERvbSIsImltcG9ydCB7IGFkZCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5sZXQgc2VsZWN0ID0gKCgpID0+IHtcblxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpO1xuICAgIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5Jyk7XG4gICAgY29uc3QgZHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZScpO1xuICAgIGNvbnN0IHNoYWRvdyA9IFwiaW5zZXQgMC41ZW0gMCAjMjA5NDhCXCI7XG5cbiAgICBmdW5jdGlvbiBjbGVhckFsbFNoYWRvd3MoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtY2FyZFwiKSk7XG4gICAgICAgIHByb2plY3RzLmZvckVhY2goIHByb2plY3QgPT4ge1xuICAgICAgICAgICAgcHJvamVjdC5zdHlsZS5ib3hTaGFkb3cgPSBcIm5vbmVcIjtcbiAgICAgICAgfSlcbiAgICAgICAgdG9kYXkuc3R5bGUuYm94U2hhZG93ID0gXCJub25lXCI7XG4gICAgICAgIGR1ZS5zdHlsZS5ib3hTaGFkb3cgPSBcIm5vbmVcIjtcbiAgICAgICAgaG9tZS5zdHlsZS5ib3hTaGFkb3cgPSBcIm5vbmVcIlxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlbGVjdEhvbWUoKSB7XG4gICAgICAgIGNsZWFyQWxsU2hhZG93cygpO1xuICAgICAgICBob21lLnN0eWxlLmJveFNoYWRvdyA9IHNoYWRvd1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlbGVjdFRvZGF5KCkge1xuICAgICAgICBjbGVhckFsbFNoYWRvd3MoKTtcbiAgICAgICAgdG9kYXkuc3R5bGUuYm94U2hhZG93ID0gc2hhZG93XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VsZWN0RHVlKCkge1xuICAgICAgICBjbGVhckFsbFNoYWRvd3MoKTtcbiAgICAgICAgZHVlLnN0eWxlLmJveFNoYWRvdyA9IHNoYWRvd1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gc2VsZWN0UHJvamVjdChlKXtcbiAgICAgICAgY2xlYXJBbGxTaGFkb3dzKClcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuYm94U2hhZG93ID0gc2hhZG93O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFNoYWRvdyhldmVudCkge1xuICAgICAgICBjbGVhckFsbFNoYWRvd3MoKTtcbiAgICAgICAgLy8gRmluZCB0aGUgY2xvc2VzdCBwYXJlbnQgZGl2IHdpdGggY2xhc3MgXCJwYXJlbnQtZGl2XCJcbiAgICAgICAgdmFyIHRhcmdldERpdiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcucHJvamVjdC1jYXJkJyk7XG4gICAgICAgIGlmICh0YXJnZXREaXYpIHtcbiAgICAgICAgICAgIHRhcmdldERpdi5zdHlsZS5ib3hTaGFkb3cgPSBzaGFkb3c7IC8vIEFkZCBzaGFkb3dcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFNoYWRvd0xhdGVzdFByb2plY3QoKSB7XG4gICAgICAgIHNlbGVjdC5jbGVhckFsbFNoYWRvd3MoKTtcbiAgICAgICAgY29uc3QgcHJvamVjdERvbSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWNhcmRcIikpO1xuICAgICAgICBwcm9qZWN0RG9tW3Byb2plY3REb20ubGVuZ3RoLTFdLnN0eWxlLmJveFNoYWRvdyA9IHNoYWRvdztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RIb21lLFxuICAgICAgICBzZWxlY3RUb2RheSxcbiAgICAgICAgc2VsZWN0RHVlLFxuICAgICAgICBzZWxlY3RQcm9qZWN0LFxuICAgICAgICBhZGRTaGFkb3csXG4gICAgICAgIGNsZWFyQWxsU2hhZG93cyxcbiAgICAgICAgYWRkU2hhZG93TGF0ZXN0UHJvamVjdFxuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHNlbGVjdDsiLCJpbXBvcnQgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLGRhdGUscHJpb3JpdHksZGlzY3JpcHRpb24sY29tcGxldGUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmRpc2NyaXB0aW9uID0gZGlzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZVxuICAgIH1cblxuICAgIHNldFRhc2sobmFtZSxkYXRlLHByaW9yaXR5LGRpc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5kaXNjcmlwdGlvbiA9IGRpc2NyaXB0aW9uO1xuICAgICAgICBoZWxwZXIudXBkYXRlTG9jYWxTdG9yYWdlKClcbiAgICB9XG5cbiAgICBjaGFuZ2VDb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9ICF0aGlzLmNvbXBsZXRlXG4gICAgICAgIGhlbHBlci51cGRhdGVMb2NhbFN0b3JhZ2UoKVxuICAgIH1cbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBnZXREYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRlO1xuICAgIH1cblxuICAgIGdldFByaW9yaXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgICB9XG5cbiAgICBnZXRDb21wbGV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGU7XG4gICAgfVxuXG4gICAgZ2V0RGlzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc2NyaXB0aW9uO1xuICAgIH1cbn0iLCJpbXBvcnQgY2FyZCBmcm9tIFwiLi9jYXJkXCI7XG5pbXBvcnQgaGVscGVyIGZyb20gXCIuL2hlbHBlclwiO1xubGV0IHRhc2tEb20gPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHRhc2tsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tsaXN0Jyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrJyk7XG4gICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stY2FuY2VsJylcbiAgICBjb25zdCBjb25maXJtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stY29uZmlybScpXG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGlhbG9nJylcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlJylcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGF0ZScpXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1wcmlvcml0eScpXG4gICAgY29uc3QgZGlzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1pbmZvJylcbiAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stYWRkJylcblxuICAgIGFkZFRhc2suc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbGV0IGxpc3QgPSBbXVxuICAgIGZ1bmN0aW9uIGRpc3BsYXkoKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXROYW1lKCk7XG4gICAgICAgIHRhc2tsaXN0LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIHRhc2tsaXN0LmFwcGVuZCh0aXRsZSlcbiAgICAgICAgbGlzdCA9IGhlbHBlci5nZXRUYXNrcyhwcm9qZWN0LmdldE5hbWUoKSk7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8bGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGxldCB0YXNrID0gbGlzdFtpXVxuICAgICAgICAgICAgY2FyZC5jcmVhdGUocHJvamVjdCx0YXNrLGksZGlzcGxheSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BsYXkoKVxuXG4gICAgY2FyZC5idXR0b25MaXN0bmVycyhkaXNwbGF5KVxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICAgICAgbGV0IG5ld0J1dHRvbiA9IGJ1dHRvbi5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGxldCBuZXdDYW5jZWwgPSBjYW5jZWwuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBsZXQgbmV3Q29uZmlybSA9IGNvbmZpcm0uY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgICAgIGJ1dHRvbi5yZXBsYWNlV2l0aChuZXdCdXR0b24pXG4gICAgICAgIGNhbmNlbC5yZXBsYWNlV2l0aChuZXdDYW5jZWwpXG4gICAgICAgIGNvbmZpcm0ucmVwbGFjZVdpdGgobmV3Q29uZmlybSlcblxuICAgICAgICBuZXdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+IHtcbiAgICAgICAgICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcbiAgICAgICAgfSk7XG4gICAgICBcbiAgICAgICAgbmV3Q2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICAgICAgdGl0bGUudmFsdWUgPVwiXCJcbiAgICAgICAgICAgIHByaW9yaXR5LnZhbHVlID1cIlwiXG4gICAgICAgICAgICBkaXNjcmlwdGlvbi52YWx1ZT1cIlwiXG4gICAgICAgICAgICBkYXRlLnZhbHVlPSBcIlwiXG4gICAgICAgIH0pXG4gICAgXG4gICAgICAgIG5ld0NvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlPT57XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZih0aXRsZS52YWx1ZSAhPSAnJyl7XG4gICAgICAgICAgICAgICAgaGVscGVyLmFkZFRhc2socHJvamVjdC5nZXROYW1lKCksdGl0bGUudmFsdWUsZGF0ZS52YWx1ZSxwcmlvcml0eS52YWx1ZSxkaXNjcmlwdGlvbi52YWx1ZSlcbiAgICAgICAgICAgICAgICBkaXNwbGF5KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRpdGxlLnZhbHVlID1cIlwiXG4gICAgICAgICAgICBwcmlvcml0eS52YWx1ZSA9XCJcIlxuICAgICAgICAgICAgZGlzY3JpcHRpb24udmFsdWU9XCJcIlxuICAgICAgICAgICAgZGF0ZS52YWx1ZT0gXCJcIlxuICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgIH0pXG5cbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG4gXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tEb20iLCIvLyBpbXBvcnQgdG9kbyBmcm9tIFwiLi9Uby1kb1wiO1xuaW1wb3J0IGNhcmQgZnJvbSBcIi4vY2FyZFwiO1xuaW1wb3J0IGhlbHBlciBmcm9tIFwiLi9oZWxwZXJcIjtcblxubGV0IHRvZGF5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1hZGQnKVxuICAgIGFkZFRhc2suc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tsaXN0Jyk7XG4gICAgLy8gY29uc3QgdG9kbyA9IGhlbHBlci5yZXRyaXZlKCk7XG4gICAgLy8gY29uc3QgcHJvamVjdHMgPSB0b2RvLmdldFByb2plY3RzKCk7XG4gICAgbGV0IHRhc2tzID0gW11cbiAgICBcbiAgICBmdW5jdGlvbiBnZXRUb2RheURhdGUoKSB7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCBkYXkgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gdG9kYXlEaXNwbGF5KCl7XG4gICAgICAgIHRhc2tMaXN0LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gaGVscGVyLmdldFByb2plY3RzKCk7XG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICAgICAgICB0YXNrTGlzdC5hcHBlbmQodGl0bGUpXG4gICAgICAgIGZvcihsZXQgaT0wO2k8cHJvamVjdHMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdHNbaV07XG5cbiAgICAgICAgICAgIHRhc2tzID0gaGVscGVyLmdldFRhc2tzKHByb2plY3QuZ2V0TmFtZSgpKTtcbiAgICAgICAgICAgIGZvcihsZXQgaj0wO2o8dGFza3MubGVuZ3RoO2orKykge1xuICAgICAgICAgICAgICAgIGxldCB0YXNrID0gdGFza3Nbal07XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnREYXRlID0gZ2V0VG9kYXlEYXRlKCk7XG5cbiAgICAgICAgICAgICAgICBpZih0YXNrLmdldERhdGUoKSA9PT0gY3VycmVudERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5jcmVhdGUocHJvamVjdCx0YXNrLGosdG9kYXlEaXNwbGF5KVxuICAgICAgICAgICAgICAgIH0gICAgIFxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYXJkLmJ1dHRvbkxpc3RuZXJzKHRvZGF5RGlzcGxheSkgXG4gICAgdG9kYXlEaXNwbGF5KCk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHRvZGF5IiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzUGFzdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgaW4gdGhlIHBhc3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDIgSnVseSAyMDE0IGluIHRoZSBwYXN0P1xuICogY29uc3QgcmVzdWx0ID0gaXNQYXN0KG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1Bhc3QoZGF0ZSkge1xuICByZXR1cm4gK3RvRGF0ZShkYXRlKSA8IERhdGUubm93KCk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNQYXN0O1xuIiwiLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGFyZ3VtZW50IC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICBjb25zdCBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChcbiAgICBhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIGFyZ3VtZW50ID09PSBcIm9iamVjdFwiICYmIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IERhdGVdXCIpXG4gICkge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgYXJndW1lbnQuY29uc3RydWN0b3IoK2FyZ3VtZW50KTtcbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwibnVtYmVyXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBOdW1iZXJdXCIgfHxcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwic3RyaW5nXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBTdHJpbmddXCJcbiAgKSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHRvRGF0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgcHJvamVjdERvbSBmcm9tICcuL3Byb2plY3REb20uanMnO1xuaW1wb3J0IGhvbWVEb20gZnJvbSAnLi9ob21lRG9tLmpzJztcbmltcG9ydCB0b2RheURvbSBmcm9tICcuL3RvZGF5RG9tLmpzJztcbmltcG9ydCBEdWUgZnJvbSAnLi9kdWVEb20uanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgaG9tZVN2ZyBmcm9tICcuL2ltZy9ob21lLnN2Zyc7XG5pbXBvcnQgYWxlcnRTdmcgZnJvbSAnLi9pbWcvYWxlcnQuc3ZnJztcbmltcG9ydCB0b2RheVN2ZyBmcm9tICcuL2ltZy90b2RheS5zdmcnO1xuaW1wb3J0IHNlbGVjdCBmcm9tICcuL3NlbGVjdGVkLmpzJztcblxuXG5cbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpO1xuY29uc3QgdG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kYXknKTtcbmNvbnN0IGR1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUnKTtcblxuLy8gY29uc3QgaG9tZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuLy8gaG9tZUltZy5zcmMgPSBob21lU3ZnO1xuLy8gY29uc3QgaG9tZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4vLyBob21lU3Bhbi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuLy8gaG9tZS5hcHBlbmQoaG9tZUltZyk7XG4vLyBob21lLmFwcGVuZChob21lU3Bhbik7XG5cblxuZnVuY3Rpb24gY3JlYXRlVGFicyhtYWluLG5hbWUsaW1nKSB7XG4gICAgY29uc3QgSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgSW1nLnNyYyA9IGltZztcbiAgICBjb25zdCBTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIFNwYW4udGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIG1haW4uYXBwZW5kKEltZyk7XG4gICAgbWFpbi5hcHBlbmQoU3Bhbik7XG59XG5cbmNyZWF0ZVRhYnMoaG9tZSxcIkhvbWVcIixob21lU3ZnKTtcbmNyZWF0ZVRhYnModG9kYXksXCJUb2RheVwiLHRvZGF5U3ZnKTtcbmNyZWF0ZVRhYnMoZHVlLFwiUGFzdCBEdWVcIixhbGVydFN2Zyk7XG5cbnNlbGVjdC5zZWxlY3RIb21lKClcbmhvbWVEb20oKVxuXG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgc2VsZWN0LnNlbGVjdEhvbWUoKTtcbiAgICBob21lRG9tKCk7XG59KVxuXG50b2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgIHNlbGVjdC5zZWxlY3RUb2RheSgpO1xuICAgIHRvZGF5RG9tKCk7XG59KVxuXG5kdWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICBzZWxlY3Quc2VsZWN0RHVlKCk7XG4gICAgRHVlKCk7XG59KVxuXG5cbnByb2plY3REb20oKVxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==