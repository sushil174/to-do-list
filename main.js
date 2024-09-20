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
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
	font-family: 'logo';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
	font-family: 'myFont';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

:root {
	--font-size: 1.2em;
	--background-color: white;
	/* --first-color:#635985; */
	--first-color:#475569;
	--side-bar:#334155;
	--second-color: #e2e8f0;
}

body {
	margin: 0;
	background-color: var(--first-color);
	font-size: 1.2em;
	font-family: 'myFont';
}

.container {
	display: flex;
	flex-direction: column;
	height: 100vh;
}

button,
input {
	font-family: 'myFont';
}
.header {
	padding: 1.5em 5em;
	box-shadow: 0px 0.5px 3px -2px black;
	color :white;
	background-color: var(--side-bar);
	display: none;
}

.header h2 {
	font-family: 'logo';
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
	padding: 2em 0.5em;
	background-color: var(--side-bar);
	display: flex;
	flex-direction: column;
	/* gap: 2em; */
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
	color :white;
	margin-bottom: 2em;
}
.side-button div {
	display: flex;
	gap: 1em;
	align-items: center;
	padding-inline: 4em;
	padding-block: 0.5em;
	transition: box-shadow 0.3s;
}
.side-button div:hover {
	/* outline:1px solid #20948B; */
	transform: scale(1.03);
	/* background-color: var(--second-color); */
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
.add-project:hover {
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
	padding: 0.5em;
	width: 0;
	flex-grow: 1;
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
	background-color: #20948b;
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
	transition: box-shadow transform 0.3s;
}

.project-card:hover {
	transform: scale(1.02);
}
.project-card img {
	opacity: 0.5;
	width: 1.3em;
}

.project-card img:hover {
	opacity: 1;
}
.project h3 {
	text-align: center;
	color: white;
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
.tasks #tasklist h2 {
	text-align: center;
	color: white;
}

.taskCard .taskContainer{
	align-items: center;
	padding: 0.5em 1em;
	display: grid;
	grid-template-columns: 7fr 1fr;
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
.taskCard .task-text {
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

.disc {
	display: none;
	margin: 0;
	padding: 0.5em 1em;
	background-color: var(--second-color);
	transition: max-height 0.3s;
}

.disc.collapse {
	display: block;
	/* margin: 0;
	padding: 0.5em 1em;
	background-color: var(--second-color); */
	transform-origin: top;
	animation: show 0.3s;
}

@keyframes show {
	0% {
		max-height: 0;
	  transform: scale(1, 0);
	}

	100% {
		max-height: 1em;
	  transform: scale(1, 1);
	}
}

.taskCard .expand {
	content: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

.taskCard .expand.collapse {
	transition:transform 0.3s;
	transform: rotate(.5turn);
}

/* end task  */

#project-dialog {
	display: none;
}

#add-task {
	display: block;
}

dialog {
	background-color: var(--first-color);
	width: 20%;
}
form ul li {
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

dialog::backdrop {
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
	background-color: #20948b;
	border: none;
}
form input,
textarea,
select {
	font-size: 1em;
	padding: 0.5em;
	background-color: var(--second-color);
	border: none;
	font-family: 'myFont';
	/* border-radius: 10px; */
}
form input,
textarea,
select:focus {
	outline: none;
}
form li label {
	align-self: center;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n\tfont-family: 'logo';\n\tsrc: url('fonts/SankofaDisplay-Regular.ttf');\n}\n\n@font-face {\n\tfont-family: 'myFont';\n\tsrc: url('fonts/RobotoCondensed-VariableFont_wght.ttf');\n}\n\n:root {\n\t--font-size: 1.2em;\n\t--background-color: white;\n\t/* --first-color:#635985; */\n\t--first-color:#475569;\n\t--side-bar:#334155;\n\t--second-color: #e2e8f0;\n}\n\nbody {\n\tmargin: 0;\n\tbackground-color: var(--first-color);\n\tfont-size: 1.2em;\n\tfont-family: 'myFont';\n}\n\n.container {\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100vh;\n}\n\nbutton,\ninput {\n\tfont-family: 'myFont';\n}\n.header {\n\tpadding: 1.5em 5em;\n\tbox-shadow: 0px 0.5px 3px -2px black;\n\tcolor :white;\n\tbackground-color: var(--side-bar);\n\tdisplay: none;\n}\n\n.header h2 {\n\tfont-family: 'logo';\n\tfont-size: 2em;\n\tpadding: 0;\n\tmargin: 0;\n}\n.main {\n\tflex-grow: 1;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 5fr;\n}\n\n.sidebar {\n\tpadding: 2em 0.5em;\n\tbackground-color: var(--side-bar);\n\tdisplay: flex;\n\tflex-direction: column;\n\t/* gap: 2em; */\n\tbox-shadow: 0px 0.5px 4px -2px black;\n\n}\n\n.sidebar img {\n\theight: 1.5em;\n}\n\n.side-button {\n\tdisplay: grid;\n\tgap: 1em;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tcolor :white;\n\tmargin-bottom: 2em;\n}\n.side-button div {\n\tdisplay: flex;\n\tgap: 1em;\n\talign-items: center;\n\tpadding-inline: 4em;\n\tpadding-block: 0.5em;\n\ttransition: box-shadow 0.3s;\n}\n.side-button div:hover {\n\t/* outline:1px solid #20948B; */\n\ttransform: scale(1.03);\n\t/* background-color: var(--second-color); */\n\t/* background-image: linear-gradient(90deg,var(--second-color),var(--first-color) ); */\n}\n\n/* project  */\n\n.add-project {\n\tfont-size: 1.5em;\n\ttext-align: center;\n\tpadding-block: 0.15em;\n\tmargin: 0 0.4em;\n\tborder-radius: 5px;\n\tcolor: var(--second-color);\n\tbackground-color: var(--first-color);\n\tborder: 2px solid var(--second-color);\n\ttransition: 0.3s;\n}\n.add-project:hover {\n\tbackground-color: var(--second-color);\n\tcolor: var(--first-color);\n\tborder: none;\n}\n#project-dialog {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-left: 0.5em;\n}\n\n#project-dialog input {\n\tfont-size: 1em;\n\tpadding: 0.5em;\n\twidth: 0;\n\tflex-grow: 1;\n\tmargin-bottom: 0.5em;\n\tbackground-color: var(--first-color);\n\tborder: 2px solid var(--second-color);\n}\n#project-dialog input:focus {\n\toutline: none;\n}\n#project-dialog div {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tgap: 1em;\n\tmargin-right: 0.5em;\n}\n\n#project-dialog div button {\n\tflex: 1;\n\tfont-size: 1em;\n\tpadding: 0.5em 0;\n}\n#project-dialog div button:first-child {\n\tbackground-color: #20948b;\n\tcolor: white;\n\tborder: none;\n\toutline: none;\n}\n\n#project-dialog div button:last-child {\n\tbackground-color: var(--second-color);\n\tborder: none;\n\toutline: none;\n}\n\n.project-card {\n\tdisplay: flex;\n\tmargin: 0.5em;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding-block: 0.5em;\n\tpadding-inline: 1.2em;\n\tbackground-color: var(--second-color);\n\ttransition: box-shadow transform 0.3s;\n}\n\n.project-card:hover {\n\ttransform: scale(1.02);\n}\n.project-card img {\n\topacity: 0.5;\n\twidth: 1.3em;\n}\n\n.project-card img:hover {\n\topacity: 1;\n}\n.project h3 {\n\ttext-align: center;\n\tcolor: white;\n}\n\n/* end project */\n\n/* task  */\n\n\n.tasks .task-add {\n\tfont-size: 1em;\n\tmargin-top: 1em;\n\tborder: none;\n\twidth: 100%;\n\tpadding-block: 0.5em;\n\ttransition: 1s;\n\tcolor: var(--second-color);\n\tbackground-color: var(--first-color);\n\tborder: 2px solid var(--second-color);\n\ttransition: 0.3s;\n}\n.task-add:hover {\n\tborder: none;\n\tbackground-color: var(--second-color);\n\tcolor: var(--first-color);\n}\n.tasks {\n\tpadding-inline: 20% 20%;\n}\n.tasks #tasklist {\n\tmargin-top: 1.5em;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1em;\n}\n.tasks #tasklist h2 {\n\ttext-align: center;\n\tcolor: white;\n}\n\n.taskCard .taskContainer{\n\talign-items: center;\n\tpadding: 0.5em 1em;\n\tdisplay: grid;\n\tgrid-template-columns: 7fr 1fr;\n\tbackground-color: var(--second-color);\n}\n\n.taskCard .check {\n\theight: 1.3em;\n\twidth: 1.3em;\n\t-webkit-appearance: none; /* For Safari and Chrome */\n\t-moz-appearance: none; /* For Firefox */\n\tappearance: none;\n\tborder: 1px solid #000000;\n\tborder-radius: 50%; /* Makes the checkbox round */\n\toutline: none;\n\tcursor: pointer;\n}\n\n.taskCard .check:checked {\n\tbackground-color: var(--first-color);\n}\n\n.taskCard img {\n\twidth: 1.3em;\n\topacity: 0.5;\n}\n.taskCard img:hover {\n\topacity: 1;\n}\n/* .taskCard > * {\n    flex:1;\n} */\n.taskCard .task-text {\n\tflex-grow: 1;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.5em;\n\tmargin-right: 1em;\n}\n\n.taskCard .task-text .title {\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.task-buttons {\n\tdisplay: flex;\n\tgap: 1em;\n}\n\n.disc {\n\tdisplay: none;\n\tmargin: 0;\n\tpadding: 0.5em 1em;\n\tbackground-color: var(--second-color);\n\ttransition: max-height 0.3s;\n}\n\n.disc.collapse {\n\tdisplay: block;\n\t/* margin: 0;\n\tpadding: 0.5em 1em;\n\tbackground-color: var(--second-color); */\n\ttransform-origin: top;\n\tanimation: show 0.3s;\n}\n\n@keyframes show {\n\t0% {\n\t\tmax-height: 0;\n\t  transform: scale(1, 0);\n\t}\n\n\t100% {\n\t\tmax-height: 1em;\n\t  transform: scale(1, 1);\n\t}\n}\n\n.taskCard .expand {\n\tcontent: url('img/down.svg');\n}\n\n.taskCard .expand.collapse {\n\ttransition:transform 0.3s;\n\ttransform: rotate(.5turn);\n}\n\n/* end task  */\n\n#project-dialog {\n\tdisplay: none;\n}\n\n#add-task {\n\tdisplay: block;\n}\n\ndialog {\n\tbackground-color: var(--first-color);\n\twidth: 20%;\n}\nform ul li {\n\tdisplay: grid;\n\tgap: 0.2em;\n}\n\nform ul {\n\tlist-style: none;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1em;\n\tmargin: 0;\n\tpadding: 0;\n}\n\nform {\n\tmargin-top: 1em;\n\tdisplay: flex;\n\tflex-direction: column;\n\tfont-size: 1em;\n\tgap: 1em;\n\tpadding: 1em;\n\tcolor: white;\n\tfont-weight: 400;\n}\ndialog {\n\tborder: none;\n\tbox-shadow: 10px 10px 0px var(--second-color);\n}\n\ndialog::backdrop {\n\tbackground-color: black;\n\topacity: 0.3;\n}\n/* form div {\n    align-self: flex-end;\n} */\n\nform div {\n\talign-self: flex-end;\n}\nform div button {\n\t/* margin: 10px;\n    padding: 10px; */\n\t/* font-size: 1em; */\n\tborder: none;\n\t/* border-radius: 15px; */\n\tpadding: 0.5em 1em;\n\tbackground-color: var(--second-color);\n\tfont-size: 1em;\n}\nform div button:last-child {\n\tcolor: white;\n\tbackground-color: #20948b;\n\tborder: none;\n}\nform input,\ntextarea,\nselect {\n\tfont-size: 1em;\n\tpadding: 0.5em;\n\tbackground-color: var(--second-color);\n\tborder: none;\n\tfont-family: 'myFont';\n\t/* border-radius: 10px; */\n}\nform input,\ntextarea,\nselect:focus {\n\toutline: none;\n}\nform li label {\n\talign-self: center;\n}\n"],"sourceRoot":""}]);
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
		this.projects = [];
	}

	setProject(projects) {
		this.projects = projects;
	}

	addProject(name) {
		const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](name);
		this.projects.push(newProject);
		// helper.updateLocalStorage()
	}

	removeProject(index) {
		this.projects.splice(index, 1);
		// helper.updateLocalStorage()
	}

	getProjects() {
		return this.projects;
	}

	getProject(name) {
		const result = this.projects.find((project) => project.getName() === name);
		return result;
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




const card = (() => {
	let currentIndex = null;
	let projectName = '';
	const dialogEdit = document.querySelector('#edit-task-dialog');
	const titleEdit = document.querySelector('#edit-task-title');
	const dateEdit = document.querySelector('#edit-task-date');
	const priorityEdit = document.querySelector('#edit-task-priority');
	const discriptionEdit = document.querySelector('#edit-task-info');
	let visible = false
	let list = [];

	function setPriority(task, taskCard) {
		const priority = task.getPriority();
		if (priority === 'High') {
			taskCard.style.boxShadow = 'inset 0.3em 0 #F52549';
		}

		if (priority === 'Medium') {
			taskCard.style.boxShadow = 'inset 0.3em 0 #F98866';
		}

		if (priority === 'Low') {
			taskCard.style.boxShadow = 'inset 0.3em 0 #1E2761';
		}
	}
	function create(project, task, index, display) {
		list = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks(project.getName());
		const taskCard = document.createElement('div');
		const taskContainer = document.createElement('div');
		taskCard.classList.add('taskCard');
		taskContainer.classList.add('taskContainer');
		const textDiv = document.createElement('div');
		textDiv.classList.add('task-text');
		const check = document.createElement('INPUT');
		check.setAttribute('type', 'checkbox');
		check.classList.add('check');
		check.dataset.index = index;
		check.checked = task.getComplete();
		const title = document.createElement('div');
		title.classList.add('title');
		const span1 = document.createElement('span');
		span1.dataset.index = index;
		const span2 = document.createElement('span');
		const buttonDiv = document.createElement('div');
		buttonDiv.classList.add('task-buttons');
		const del = document.createElement('img');
		del.src = _img_delete_svg__WEBPACK_IMPORTED_MODULE_2__;
		del.alt = 'Delete';
		const edit = document.createElement('img');
		edit.src = _img_edit_svg__WEBPACK_IMPORTED_MODULE_1__;
		edit.alt = 'Edit';
		edit.dataset.index = index;
		edit.dataset.project = project.getName();
		del.dataset.project = project.getName();
		del.dataset.index = index;
		span1.textContent = task.getTitle();
		span2.textContent = task.getDate();

		taskCard.dataset.visible = visible
		// setPriority(task, taskCard);
		setPriority(task, taskContainer);

		if (task.getComplete()) {
			span1.style.textDecoration = 'line-through';
		}

		check.addEventListener('click', () => {
			_helper__WEBPACK_IMPORTED_MODULE_0__["default"].changeComplete(project.getName(), index);
			display();
		});

		title.addEventListener('click', () => {
			_helper__WEBPACK_IMPORTED_MODULE_0__["default"].changeComplete(project.getName(), index);
			display();
		});

		edit.addEventListener('click', (e) => {
			currentIndex = e.target.dataset.index;
			projectName = e.target.dataset.project;
			dialogEdit.showModal();
			titleEdit.value = task.getTitle();
			priorityEdit.value = task.getPriority();
			discriptionEdit.value = task.getDiscription();
			dateEdit.value = task.getDate();
		});

		del.addEventListener('click', (e) => {
			_helper__WEBPACK_IMPORTED_MODULE_0__["default"].removeTask(e.target.dataset.project, e.target.dataset.index);
			display();
		});

		title.append(span1);
		title.append(span2);
		textDiv.append(check);
		textDiv.append(title);
		buttonDiv.append(edit);
		buttonDiv.append(del);
		// taskCard.append(textDiv);
		// taskCard.append(buttonDiv);
		taskContainer.append(textDiv);
		taskContainer.append(buttonDiv);
		taskCard.append(taskContainer);
		tasklist.append(taskCard);

		if (task.getDiscription() != '') {
			const expand = document.createElement('img');
			expand.classList.add('expand');
			const span3 = document.createElement('p');
			span3.classList.add('disc')
			span3.textContent = task.getDiscription();
			expand.addEventListener('click', () => {
				if(!visible) visible = true
				else visible = false
				span3.classList.toggle('collapse');
				expand.classList.toggle('collapse');
			});
			buttonDiv.append(expand);
			taskCard.append(span3);
			setPriority(task,span3)
		}
	}

	function buttonListners(display) {
		const cancelEdit = document.querySelector('#edit-task-cancel');
		const confirmEdit = document.querySelector('#edit-task-confirm');

		const Cancel = cancelEdit.cloneNode(true);
		const Confirm = confirmEdit.cloneNode(true);

		cancelEdit.replaceWith(Cancel);
		confirmEdit.replaceWith(Confirm);

		Cancel.addEventListener('click', (e) => {
			e.preventDefault();
			dialogEdit.close();
		});

		Confirm.addEventListener('click', (e) => {
			e.preventDefault();
			if (titleEdit.value != '') {
				_helper__WEBPACK_IMPORTED_MODULE_0__["default"].editTask(
					projectName,
					currentIndex,
					titleEdit.value,
					dateEdit.value,
					priorityEdit.value,
					discriptionEdit.value
				);
				display();
			}
			dialogEdit.close();
		});

		// window.addEventListener("click", (e) => {
		// 	if (!taskCard.contains(e.target)) {
		// 	  span3.classList.remove("collapse")
		// 	  expand.classList.remove("collaspe")
		// 	}
		//   })
	}

	return {
		create,
		buttonListners,
	};
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
	const addTask = document.querySelector('.task-add');
	addTask.style.display = 'none';
	const taskList = document.querySelector('#tasklist');
	let tasks = [];
	// const todo = helper.retrive();
	// const projects = todo.getProjects();
	function todayDisplay() {
		const projects = _helper__WEBPACK_IMPORTED_MODULE_1__["default"].getProjects();
		taskList.textContent = '';
		let title = document.createElement('h2');
		title.textContent = 'Past Due';
		taskList.append(title);
		for (let i = 0; i < projects.length; i++) {
			let project = projects[i];

			tasks = _helper__WEBPACK_IMPORTED_MODULE_1__["default"].getTasks(project.getName());
			for (let j = 0; j < tasks.length; j++) {
				let task = tasks[j];
				if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isPast)(task.getDate()) && !task.getComplete()) {
					_card__WEBPACK_IMPORTED_MODULE_0__["default"].create(project, task, j, todayDisplay);
				}
			}
		}
	}

	_card__WEBPACK_IMPORTED_MODULE_0__["default"].buttonListners(todayDisplay);
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
		const todoJson = JSON.stringify(data);
		localStorage.setItem('todo', todoJson);
	}

	function retrive() {
		// const data = localStorage.getItem('todo')
		// if(data === null) {return new Todo()}
		const todoList = Object.assign(
			new _To_do__WEBPACK_IMPORTED_MODULE_0__["default"](),
			JSON.parse(localStorage.getItem('todo'))
		);
		todoList.setProject(
			todoList
				.getProjects()
				.map((project) => Object.assign(new _project__WEBPACK_IMPORTED_MODULE_1__["default"](), project))
		);
		todoList
			.getProjects()
			.forEach((project) =>
				project.setTasks(
					project.getTasks().map((task) => Object.assign(new _task__WEBPACK_IMPORTED_MODULE_2__["default"](), task))
				)
			);
		return todoList;
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

	function removeTask(projectName, index) {
		const todoList = retrive();
		const project = todoList.getProject(projectName);
		if (project !== undefined) {
			project.removeTask(index);
		}
		updateLocalStorage(todoList);
	}

	function addTask(projectName, name, date, priority, discription) {
		const todoList = retrive();
		const project = todoList.getProject(projectName);
		project.addTask(name, date, priority, discription);
		updateLocalStorage(todoList);
	}

	function editTask(projectName, index, name, date, priority, discription) {
		const todoList = retrive();
		const project = todoList.getProject(projectName);
		const tasks = project.getTasks();
		tasks[index].setTask(name, date, priority, discription);
		updateLocalStorage(todoList);
	}

	function getTasks(projectName) {
		const todoList = retrive();
		const project = todoList.getProject(projectName);
		return project.getTasks();
	}

	function changeComplete(projectName, index) {
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
		changeComplete,
	};
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
	const addTask = document.querySelector('.task-add');
	addTask.style.display = 'none';
	const taskList = document.querySelector('#tasklist');
	let tasks = [];
	function homeDisplay() {
		const projects = _helper__WEBPACK_IMPORTED_MODULE_1__["default"].getProjects();
		taskList.textContent = '';
		let title = document.createElement('h2');
		title.textContent = 'Home';
		taskList.append(title);

		for (let i = 0; i < projects.length; i++) {
			let project = projects[i];
			tasks = _helper__WEBPACK_IMPORTED_MODULE_1__["default"].getTasks(project.getName());
			for (let j = 0; j < tasks.length; j++) {
				let task = tasks[j];
				_card__WEBPACK_IMPORTED_MODULE_0__["default"].create(project, task, j, homeDisplay);
			}
		}
	}

	_card__WEBPACK_IMPORTED_MODULE_0__["default"].buttonListners(homeDisplay);
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
		this.list = [];
	}

	setTasks(tasks) {
		this.list = tasks;
	}
	removeTask(index) {
		this.list.splice(index, 1);
		_helper__WEBPACK_IMPORTED_MODULE_1__["default"].updateLocalStorage();
	}

	addTask(name, date, priority, discription) {
		this.list.push(new _task__WEBPACK_IMPORTED_MODULE_0__["default"](name, date, priority, discription, false));
		_helper__WEBPACK_IMPORTED_MODULE_1__["default"].updateLocalStorage();
	}

	getTasks() {
		return this.list;
	}

	getName() {
		return this.name;
	}

	getTask(name) {
		const result = this.list.find((_task__WEBPACK_IMPORTED_MODULE_0__["default"] = _task__WEBPACK_IMPORTED_MODULE_0__["default"].getTitle() === name));
		return result;
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
	const content = document.querySelector('#content');
	const projectDisplay = document.createElement('div');
	content.append(projectDisplay);
	const button = document.querySelector('.add-project');
	const dialog = document.querySelector('#project-dialog');
	const projectInput = document.querySelector('#project-title');
	const cancelBtn = document.querySelector('#cancel');
	const confirmBtn = document.querySelector('#confirm');
	projectInput.value = '';
	function dialogVisible() {
		dialog.style.display = 'block';
	}

	function dialogHidden() {
		dialog.style.display = 'none';
	}

	let display = () => {
		projectDisplay.textContent = '';
		// const todo = helper.retrive();
		// let projects = todo.getProjects();
		let projects = _helper__WEBPACK_IMPORTED_MODULE_2__["default"].getProjects();
		for (let i = 0; i < projects.length; i++) {
			let project = projects[i];
			const div = document.createElement('div');
			div.classList.add('project-card');
			div.dataset.index = i;
			const title = document.createElement('span');
			// const del = document.createElement('button');
			const del = document.createElement('img');
			del.src = _img_delete_svg__WEBPACK_IMPORTED_MODULE_3__;
			del.alt = 'Delete';
			div.append(title);
			div.append(del);

			div.addEventListener('click', (e) => {
				_selected__WEBPACK_IMPORTED_MODULE_4__["default"].addShadow(e);
				(0,_taskDom__WEBPACK_IMPORTED_MODULE_0__["default"])(project);
			});

			del.addEventListener('click', (e) => {
				e.stopPropagation();
				_helper__WEBPACK_IMPORTED_MODULE_2__["default"].removeProject(div.dataset.index);
				(0,_homeDom__WEBPACK_IMPORTED_MODULE_1__["default"])();
				display();
			});

			title.textContent = project.getName();
			projectDisplay.append(div);
		}
	};

	button.addEventListener('click', () => {
		// dialog.show()
		dialogVisible();
		button.replaceWith(dialog);
		projectInput.focus();
		button.style.display = 'none';
	});

	cancelBtn.addEventListener('click', () => {
		// dialog.close()
		dialogHidden();
		button.style.display = 'block';
		dialog.replaceWith(button);
		projectInput.value = '';
	});

	confirmBtn.addEventListener('click', (e) => {
		// e.target.preventDefault();
		// dialog.close()
		dialogHidden();
		button.style.display = 'block';
		dialog.replaceWith(button);
		if (projectInput.value != '') {
			_helper__WEBPACK_IMPORTED_MODULE_2__["default"].addProject(projectInput.value);
			const todo = _helper__WEBPACK_IMPORTED_MODULE_2__["default"].retrive();
			const project = todo.getProject(projectInput.value);
			(0,_taskDom__WEBPACK_IMPORTED_MODULE_0__["default"])(project);
			display();
			_selected__WEBPACK_IMPORTED_MODULE_4__["default"].addShadowLatestProject();
		}
		projectInput.value = '';
	});

	display();
};

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
	const shadow = 'inset 0.5em 0 #20948B';

	function clearAllShadows() {
		const projects = Array.from(document.querySelectorAll('.project-card'));
		projects.forEach((project) => {
			project.style.boxShadow = 'none';
		});
		today.style.boxShadow = 'none';
		due.style.boxShadow = 'none';
		home.style.boxShadow = 'none';
	}

	function selectHome() {
		clearAllShadows();
		home.style.boxShadow = shadow;
	}

	function selectToday() {
		clearAllShadows();
		today.style.boxShadow = shadow;
	}

	function selectDue() {
		clearAllShadows();
		due.style.boxShadow = shadow;
	}

	function selectProject(e) {
		clearAllShadows();
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
		const projectDom = Array.from(document.querySelectorAll('.project-card'));
		projectDom[projectDom.length - 1].style.boxShadow = shadow;
	}

	return {
		selectHome,
		selectToday,
		selectDue,
		selectProject,
		addShadow,
		clearAllShadows,
		addShadowLatestProject,
	};
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
	constructor(name, date, priority, discription, complete) {
		this.name = name;
		this.date = date;
		this.priority = priority;
		this.discription = discription;
		this.complete = complete;
	}

	setTask(name, date, priority, discription) {
		this.name = name;
		this.date = date;
		this.priority = priority;
		this.discription = discription;
		_helper__WEBPACK_IMPORTED_MODULE_0__["default"].updateLocalStorage();
	}

	changeComplete() {
		this.complete = !this.complete;
		_helper__WEBPACK_IMPORTED_MODULE_0__["default"].updateLocalStorage();
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
	const cancel = document.querySelector('#task-cancel');
	const confirm = document.querySelector('#task-confirm');
	const dialog = document.querySelector('#task-dialog');
	const title = document.querySelector('#task-title');
	const date = document.querySelector('#task-date');
	const priority = document.querySelector('#task-priority');
	const discription = document.querySelector('#task-info');
	const addTask = document.querySelector('.task-add');

	addTask.style.display = 'block';
	let list = [];
	function display() {
		let title = document.createElement('h2');
		title.textContent = project.getName();
		tasklist.textContent = '';
		tasklist.append(title);
		list = _helper__WEBPACK_IMPORTED_MODULE_1__["default"].getTasks(project.getName());
		for (let i = 0; i < list.length; i++) {
			let task = list[i];
			_card__WEBPACK_IMPORTED_MODULE_0__["default"].create(project, task, i, display);
		}
	}

	display();

	_card__WEBPACK_IMPORTED_MODULE_0__["default"].buttonListners(display);
	function removeListeners() {
		let newButton = button.cloneNode(true);
		let newCancel = cancel.cloneNode(true);
		let newConfirm = confirm.cloneNode(true);

		button.replaceWith(newButton);
		cancel.replaceWith(newCancel);
		confirm.replaceWith(newConfirm);

		newButton.addEventListener('click', () => {
			dialog.showModal();
		});

		newCancel.addEventListener('click', (e) => {
			e.preventDefault();
			dialog.close();
			title.value = '';
			priority.value = '';
			discription.value = '';
			date.value = '';
		});

		newConfirm.addEventListener('click', (e) => {
			e.preventDefault();
			if (title.value != '') {
				_helper__WEBPACK_IMPORTED_MODULE_1__["default"].addTask(
					project.getName(),
					title.value,
					date.value,
					priority.value,
					discription.value
				);
				display();
			}
			title.value = '';
			priority.value = '';
			discription.value = '';
			date.value = '';
			dialog.close();
		});
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
	const addTask = document.querySelector('.task-add');
	addTask.style.display = 'none';
	const taskList = document.querySelector('#tasklist');
	// const todo = helper.retrive();
	// const projects = todo.getProjects();
	let tasks = [];

	function getTodayDate() {
		const today = new Date();
		const year = today.getFullYear();
		const month = String(today.getMonth() + 1).padStart(2, '0');
		const day = String(today.getDate()).padStart(2, '0');
		return `${year}-${month}-${day}`;
	}

	function todayDisplay() {
		taskList.textContent = '';
		const projects = _helper__WEBPACK_IMPORTED_MODULE_1__["default"].getProjects();
		let title = document.createElement('h2');
		title.textContent = 'Today';
		taskList.append(title);
		for (let i = 0; i < projects.length; i++) {
			let project = projects[i];

			tasks = _helper__WEBPACK_IMPORTED_MODULE_1__["default"].getTasks(project.getName());
			for (let j = 0; j < tasks.length; j++) {
				let task = tasks[j];
				let currentDate = getTodayDate();

				if (task.getDate() === currentDate) {
					_card__WEBPACK_IMPORTED_MODULE_0__["default"].create(project, task, j, todayDisplay);
				}
			}
		}
	}

	_card__WEBPACK_IMPORTED_MODULE_0__["default"].buttonListners(todayDisplay);
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

module.exports = __webpack_require__.p + "5166fe5ad2bf3bcc0ecf.svg";

/***/ }),

/***/ "./src/img/delete.svg":
/*!****************************!*\
  !*** ./src/img/delete.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea1f47010f166ec4bf13.svg";

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

module.exports = __webpack_require__.p + "e6f5bd1f54482dc3be26.svg";

/***/ }),

/***/ "./src/img/home.svg":
/*!**************************!*\
  !*** ./src/img/home.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8cdacf1787d01efbf55f.svg";

/***/ }),

/***/ "./src/img/today.svg":
/*!***************************!*\
  !*** ./src/img/today.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "82e32a4c2e4bf869489d.svg";

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

function createTabs(main, name, img) {
	const Img = document.createElement('img');
	Img.src = img;
	const Span = document.createElement('span');
	Span.textContent = name;
	main.append(Img);
	main.append(Span);
}

createTabs(home, 'Home', _img_home_svg__WEBPACK_IMPORTED_MODULE_5__);
createTabs(today, 'Today', _img_today_svg__WEBPACK_IMPORTED_MODULE_7__);
createTabs(due, 'Past Due', _img_alert_svg__WEBPACK_IMPORTED_MODULE_6__);

_selected_js__WEBPACK_IMPORTED_MODULE_8__["default"].selectHome();
(0,_homeDom_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

home.addEventListener('click', () => {
	_selected_js__WEBPACK_IMPORTED_MODULE_8__["default"].selectHome();
	(0,_homeDom_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

today.addEventListener('click', () => {
	_selected_js__WEBPACK_IMPORTED_MODULE_8__["default"].selectToday();
	(0,_todayDom_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

due.addEventListener('click', () => {
	_selected_js__WEBPACK_IMPORTED_MODULE_8__["default"].selectDue();
	(0,_dueDom_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
});


(0,_projectDom_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sYUFBYSxhQUFhLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsd0JBQXdCLHlCQUF5QixhQUFhLGFBQWEseUJBQXlCLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxPQUFPLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxPQUFPLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLE9BQU8sVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxPQUFPLFVBQVUsS0FBSyxLQUFLLFlBQVksc0NBQXNDLHdCQUF3QixpREFBaUQsR0FBRyxnQkFBZ0IsMEJBQTBCLDREQUE0RCxHQUFHLFdBQVcsdUJBQXVCLDhCQUE4Qiw4QkFBOEIsNEJBQTRCLHVCQUF1Qiw0QkFBNEIsR0FBRyxVQUFVLGNBQWMseUNBQXlDLHFCQUFxQiwwQkFBMEIsR0FBRyxnQkFBZ0Isa0JBQWtCLDJCQUEyQixrQkFBa0IsR0FBRyxvQkFBb0IsMEJBQTBCLEdBQUcsV0FBVyx1QkFBdUIseUNBQXlDLGlCQUFpQixzQ0FBc0Msa0JBQWtCLEdBQUcsZ0JBQWdCLHdCQUF3QixtQkFBbUIsZUFBZSxjQUFjLEdBQUcsU0FBUyxpQkFBaUIsa0JBQWtCLG1DQUFtQyxHQUFHLGNBQWMsdUJBQXVCLHNDQUFzQyxrQkFBa0IsMkJBQTJCLGlCQUFpQiwyQ0FBMkMsS0FBSyxrQkFBa0Isa0JBQWtCLEdBQUcsa0JBQWtCLGtCQUFrQixhQUFhLHNCQUFzQix1QkFBdUIsaUJBQWlCLHVCQUF1QixHQUFHLG9CQUFvQixrQkFBa0IsYUFBYSx3QkFBd0Isd0JBQXdCLHlCQUF5QixnQ0FBZ0MsR0FBRywwQkFBMEIsa0NBQWtDLDZCQUE2Qiw4Q0FBOEMsMkZBQTJGLEtBQUssb0NBQW9DLHFCQUFxQix1QkFBdUIsMEJBQTBCLG9CQUFvQix1QkFBdUIsK0JBQStCLHlDQUF5QywwQ0FBMEMscUJBQXFCLEdBQUcsc0JBQXNCLDBDQUEwQyw4QkFBOEIsaUJBQWlCLEdBQUcsbUJBQW1CLGtCQUFrQiwyQkFBMkIsdUJBQXVCLEdBQUcsMkJBQTJCLG1CQUFtQixtQkFBbUIsYUFBYSxpQkFBaUIseUJBQXlCLHlDQUF5QywwQ0FBMEMsR0FBRywrQkFBK0Isa0JBQWtCLEdBQUcsdUJBQXVCLGtCQUFrQixtQ0FBbUMsYUFBYSx3QkFBd0IsR0FBRyxnQ0FBZ0MsWUFBWSxtQkFBbUIscUJBQXFCLEdBQUcsMENBQTBDLDhCQUE4QixpQkFBaUIsaUJBQWlCLGtCQUFrQixHQUFHLDJDQUEyQywwQ0FBMEMsaUJBQWlCLGtCQUFrQixHQUFHLG1CQUFtQixrQkFBa0Isa0JBQWtCLHdCQUF3QixtQ0FBbUMseUJBQXlCLDBCQUEwQiwwQ0FBMEMsMENBQTBDLEdBQUcseUJBQXlCLDJCQUEyQixHQUFHLHFCQUFxQixpQkFBaUIsaUJBQWlCLEdBQUcsNkJBQTZCLGVBQWUsR0FBRyxlQUFlLHVCQUF1QixpQkFBaUIsR0FBRyw0REFBNEQsbUJBQW1CLG9CQUFvQixpQkFBaUIsZ0JBQWdCLHlCQUF5QixtQkFBbUIsK0JBQStCLHlDQUF5QywwQ0FBMEMscUJBQXFCLEdBQUcsbUJBQW1CLGlCQUFpQiwwQ0FBMEMsOEJBQThCLEdBQUcsVUFBVSw0QkFBNEIsR0FBRyxvQkFBb0Isc0JBQXNCLGtCQUFrQiwyQkFBMkIsYUFBYSxHQUFHLHVCQUF1Qix1QkFBdUIsaUJBQWlCLEdBQUcsNkJBQTZCLHdCQUF3Qix1QkFBdUIsa0JBQWtCLG1DQUFtQywwQ0FBMEMsR0FBRyxzQkFBc0Isa0JBQWtCLGlCQUFpQiw4QkFBOEIsc0RBQXNELHNDQUFzQyw4QkFBOEIsd0JBQXdCLGdEQUFnRCxvQkFBb0IsR0FBRyw4QkFBOEIseUNBQXlDLEdBQUcsbUJBQW1CLGlCQUFpQixpQkFBaUIsR0FBRyx1QkFBdUIsZUFBZSxHQUFHLG9CQUFvQixhQUFhLElBQUksMEJBQTBCLGlCQUFpQixrQkFBa0Isd0JBQXdCLGVBQWUsc0JBQXNCLEdBQUcsaUNBQWlDLGdCQUFnQixrQkFBa0IsbUNBQW1DLEdBQUcsbUJBQW1CLGtCQUFrQixhQUFhLEdBQUcsV0FBVyxrQkFBa0IsY0FBYyx1QkFBdUIsMENBQTBDLGdDQUFnQyxHQUFHLG9CQUFvQixtQkFBbUIsaUJBQWlCLHVCQUF1QiwyQ0FBMkMsNEJBQTRCLHlCQUF5QixHQUFHLHFCQUFxQixRQUFRLG9CQUFvQiw2QkFBNkIsS0FBSyxZQUFZLHNCQUFzQiw2QkFBNkIsS0FBSyxHQUFHLHVCQUF1QixpQ0FBaUMsR0FBRyxnQ0FBZ0MsOEJBQThCLDhCQUE4QixHQUFHLHdDQUF3QyxrQkFBa0IsR0FBRyxlQUFlLG1CQUFtQixHQUFHLFlBQVkseUNBQXlDLGVBQWUsR0FBRyxjQUFjLGtCQUFrQixlQUFlLEdBQUcsYUFBYSxxQkFBcUIsa0JBQWtCLDJCQUEyQixhQUFhLGNBQWMsZUFBZSxHQUFHLFVBQVUsb0JBQW9CLGtCQUFrQiwyQkFBMkIsbUJBQW1CLGFBQWEsaUJBQWlCLGlCQUFpQixxQkFBcUIsR0FBRyxVQUFVLGlCQUFpQixrREFBa0QsR0FBRyxzQkFBc0IsNEJBQTRCLGlCQUFpQixHQUFHLGVBQWUsMkJBQTJCLElBQUksZ0JBQWdCLHlCQUF5QixHQUFHLG1CQUFtQixvQkFBb0IscUJBQXFCLHlCQUF5QixtQkFBbUIsNEJBQTRCLHlCQUF5QiwwQ0FBMEMsbUJBQW1CLEdBQUcsOEJBQThCLGlCQUFpQiw4QkFBOEIsaUJBQWlCLEdBQUcsa0NBQWtDLG1CQUFtQixtQkFBbUIsMENBQTBDLGlCQUFpQiwwQkFBMEIsNEJBQTRCLEtBQUssd0NBQXdDLGtCQUFrQixHQUFHLGlCQUFpQix1QkFBdUIsR0FBRyxxQkFBcUI7QUFDbGtVO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDeloxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQ3hCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYmdDO0FBQ0Y7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLGdEQUFPO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDVTtBQUNPO0FBQ0k7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLCtDQUFNO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDRDQUFTO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhLDBDQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHLCtDQUFNO0FBQ1Q7QUFDQSxHQUFHOztBQUVIO0FBQ0EsR0FBRywrQ0FBTTtBQUNUO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLEdBQUcsK0NBQU07QUFDVDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrQ0FBTTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNLYztBQUNSO0FBQ0k7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwrQ0FBTTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQkFBcUI7QUFDdkM7O0FBRUEsV0FBVywrQ0FBTTtBQUNqQixtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0EsUUFBUSxnREFBTTtBQUNkLEtBQUssNkNBQUk7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLDZDQUFJO0FBQ0w7QUFDQTs7QUFFQSxpRUFBZSxHQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ1E7QUFDSztBQUNOOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxPQUFPLDhDQUFJO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxnREFBTztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELDZDQUFJO0FBQzVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkh0QjtBQUMwQjtBQUNJOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsK0NBQU07QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBLFdBQVcsK0NBQU07QUFDakIsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBLElBQUksNkNBQUk7QUFDUjtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyw2Q0FBSTtBQUNMO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlCRztBQUNJOztBQUVmO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0NBQU07QUFDUjs7QUFFQTtBQUNBLHFCQUFxQiw2Q0FBSTtBQUN6QixFQUFFLCtDQUFNO0FBQ1I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQyw2Q0FBSSxHQUFHLDZDQUFJO0FBQzVDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ2dDO0FBQ0E7QUFDRjtBQUNXO0FBQ1Q7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwrQ0FBTTtBQUN2QixrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSw0Q0FBUztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLGlEQUFNO0FBQ1YsSUFBSSxvREFBTztBQUNYLElBQUk7O0FBRUo7QUFDQTtBQUNBLElBQUksK0NBQU07QUFDVixJQUFJLG9EQUFPO0FBQ1g7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsK0NBQU07QUFDVCxnQkFBZ0IsK0NBQU07QUFDdEI7QUFDQSxHQUFHLG9EQUFPO0FBQ1Y7QUFDQSxHQUFHLGlEQUFNO0FBQ1Q7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQy9GSzs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFUTtBQUNmO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0NBQU07QUFDUjs7QUFFQTtBQUNBO0FBQ0EsRUFBRSwrQ0FBTTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDMEI7QUFDSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUywrQ0FBTTtBQUNmLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQSxHQUFHLDZDQUFJO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQSxDQUFDLDZDQUFJO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtDQUFNO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RXZCO0FBQzBCO0FBQ0k7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLEtBQUssR0FBRyxNQUFNLEdBQUcsSUFBSTtBQUNqQzs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLCtDQUFNO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQkFBcUI7QUFDdkM7O0FBRUEsV0FBVywrQ0FBTTtBQUNqQixtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQSxLQUFLLDZDQUFJO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyw2Q0FBSTtBQUNMO0FBQ0E7O0FBRUEsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NpQjs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsVUFBVSxtREFBTTtBQUNoQjs7QUFFQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzNCdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7VUN6RHRCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F5QztBQUNOO0FBQ0U7QUFDUDtBQUNUO0FBQ2dCO0FBQ0U7QUFDQTtBQUNKOztBQUVuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLDBDQUFPO0FBQ2hDLDJCQUEyQiwyQ0FBUTtBQUNuQyw0QkFBNEIsMkNBQVE7O0FBRXBDLG9EQUFNO0FBQ04sdURBQU87O0FBRVA7QUFDQSxDQUFDLG9EQUFNO0FBQ1AsQ0FBQyx1REFBTztBQUNSLENBQUM7O0FBRUQ7QUFDQSxDQUFDLG9EQUFNO0FBQ1AsQ0FBQyx3REFBUTtBQUNULENBQUM7O0FBRUQ7QUFDQSxDQUFDLG9EQUFNO0FBQ1AsQ0FBQyxzREFBRztBQUNKLENBQUM7OztBQUdELDBEQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL1RvLWRvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY2FyZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2R1ZURvbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2hlbHBlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2hvbWVEb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdERvbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NlbGVjdGVkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2tEb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RheURvbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzUGFzdC5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90b0RhdGUubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiZm9udHMvU2Fua29mYURpc3BsYXktUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJmb250cy9Sb2JvdG9Db25kZW5zZWQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiaW1nL2Rvd24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogJ2xvZ28nO1xuXHRzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiAnbXlGb250Jztcblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbjpyb290IHtcblx0LS1mb250LXNpemU6IDEuMmVtO1xuXHQtLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHQvKiAtLWZpcnN0LWNvbG9yOiM2MzU5ODU7ICovXG5cdC0tZmlyc3QtY29sb3I6IzQ3NTU2OTtcblx0LS1zaWRlLWJhcjojMzM0MTU1O1xuXHQtLXNlY29uZC1jb2xvcjogI2UyZThmMDtcbn1cblxuYm9keSB7XG5cdG1hcmdpbjogMDtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xuXHRmb250LXNpemU6IDEuMmVtO1xuXHRmb250LWZhbWlseTogJ215Rm9udCc7XG59XG5cbi5jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRoZWlnaHQ6IDEwMHZoO1xufVxuXG5idXR0b24sXG5pbnB1dCB7XG5cdGZvbnQtZmFtaWx5OiAnbXlGb250Jztcbn1cbi5oZWFkZXIge1xuXHRwYWRkaW5nOiAxLjVlbSA1ZW07XG5cdGJveC1zaGFkb3c6IDBweCAwLjVweCAzcHggLTJweCBibGFjaztcblx0Y29sb3IgOndoaXRlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlLWJhcik7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oZWFkZXIgaDIge1xuXHRmb250LWZhbWlseTogJ2xvZ28nO1xuXHRmb250LXNpemU6IDJlbTtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwO1xufVxuLm1haW4ge1xuXHRmbGV4LWdyb3c6IDE7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcbn1cblxuLnNpZGViYXIge1xuXHRwYWRkaW5nOiAyZW0gMC41ZW07XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtYmFyKTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0LyogZ2FwOiAyZW07ICovXG5cdGJveC1zaGFkb3c6IDBweCAwLjVweCA0cHggLTJweCBibGFjaztcblxufVxuXG4uc2lkZWJhciBpbWcge1xuXHRoZWlnaHQ6IDEuNWVtO1xufVxuXG4uc2lkZS1idXR0b24ge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRnYXA6IDFlbTtcblx0bWFyZ2luLWxlZnQ6IGF1dG87XG5cdG1hcmdpbi1yaWdodDogYXV0bztcblx0Y29sb3IgOndoaXRlO1xuXHRtYXJnaW4tYm90dG9tOiAyZW07XG59XG4uc2lkZS1idXR0b24gZGl2IHtcblx0ZGlzcGxheTogZmxleDtcblx0Z2FwOiAxZW07XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHBhZGRpbmctaW5saW5lOiA0ZW07XG5cdHBhZGRpbmctYmxvY2s6IDAuNWVtO1xuXHR0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3M7XG59XG4uc2lkZS1idXR0b24gZGl2OmhvdmVyIHtcblx0Lyogb3V0bGluZToxcHggc29saWQgIzIwOTQ4QjsgKi9cblx0dHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcblx0LyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTsgKi9cblx0LyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLHZhcigtLXNlY29uZC1jb2xvciksdmFyKC0tZmlyc3QtY29sb3IpICk7ICovXG59XG5cbi8qIHByb2plY3QgICovXG5cbi5hZGQtcHJvamVjdCB7XG5cdGZvbnQtc2l6ZTogMS41ZW07XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0cGFkZGluZy1ibG9jazogMC4xNWVtO1xuXHRtYXJnaW46IDAgMC40ZW07XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0Y29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcblx0Ym9yZGVyOiAycHggc29saWQgdmFyKC0tc2Vjb25kLWNvbG9yKTtcblx0dHJhbnNpdGlvbjogMC4zcztcbn1cbi5hZGQtcHJvamVjdDpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XG5cdGNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XG5cdGJvcmRlcjogbm9uZTtcbn1cbiNwcm9qZWN0LWRpYWxvZyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdG1hcmdpbi1sZWZ0OiAwLjVlbTtcbn1cblxuI3Byb2plY3QtZGlhbG9nIGlucHV0IHtcblx0Zm9udC1zaXplOiAxZW07XG5cdHBhZGRpbmc6IDAuNWVtO1xuXHR3aWR0aDogMDtcblx0ZmxleC1ncm93OiAxO1xuXHRtYXJnaW4tYm90dG9tOiAwLjVlbTtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xuXHRib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmQtY29sb3IpO1xufVxuI3Byb2plY3QtZGlhbG9nIGlucHV0OmZvY3VzIHtcblx0b3V0bGluZTogbm9uZTtcbn1cbiNwcm9qZWN0LWRpYWxvZyBkaXYge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGdhcDogMWVtO1xuXHRtYXJnaW4tcmlnaHQ6IDAuNWVtO1xufVxuXG4jcHJvamVjdC1kaWFsb2cgZGl2IGJ1dHRvbiB7XG5cdGZsZXg6IDE7XG5cdGZvbnQtc2l6ZTogMWVtO1xuXHRwYWRkaW5nOiAwLjVlbSAwO1xufVxuI3Byb2plY3QtZGlhbG9nIGRpdiBidXR0b246Zmlyc3QtY2hpbGQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjA5NDhiO1xuXHRjb2xvcjogd2hpdGU7XG5cdGJvcmRlcjogbm9uZTtcblx0b3V0bGluZTogbm9uZTtcbn1cblxuI3Byb2plY3QtZGlhbG9nIGRpdiBidXR0b246bGFzdC1jaGlsZCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XG5cdGJvcmRlcjogbm9uZTtcblx0b3V0bGluZTogbm9uZTtcbn1cblxuLnByb2plY3QtY2FyZCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdG1hcmdpbjogMC41ZW07XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0cGFkZGluZy1ibG9jazogMC41ZW07XG5cdHBhZGRpbmctaW5saW5lOiAxLjJlbTtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcblx0dHJhbnNpdGlvbjogYm94LXNoYWRvdyB0cmFuc2Zvcm0gMC4zcztcbn1cblxuLnByb2plY3QtY2FyZDpob3ZlciB7XG5cdHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG59XG4ucHJvamVjdC1jYXJkIGltZyB7XG5cdG9wYWNpdHk6IDAuNTtcblx0d2lkdGg6IDEuM2VtO1xufVxuXG4ucHJvamVjdC1jYXJkIGltZzpob3ZlciB7XG5cdG9wYWNpdHk6IDE7XG59XG4ucHJvamVjdCBoMyB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Y29sb3I6IHdoaXRlO1xufVxuXG4vKiBlbmQgcHJvamVjdCAqL1xuXG4vKiB0YXNrICAqL1xuXG5cbi50YXNrcyAudGFzay1hZGQge1xuXHRmb250LXNpemU6IDFlbTtcblx0bWFyZ2luLXRvcDogMWVtO1xuXHRib3JkZXI6IG5vbmU7XG5cdHdpZHRoOiAxMDAlO1xuXHRwYWRkaW5nLWJsb2NrOiAwLjVlbTtcblx0dHJhbnNpdGlvbjogMXM7XG5cdGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XG5cdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZC1jb2xvcik7XG5cdHRyYW5zaXRpb246IDAuM3M7XG59XG4udGFzay1hZGQ6aG92ZXIge1xuXHRib3JkZXI6IG5vbmU7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XG5cdGNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XG59XG4udGFza3Mge1xuXHRwYWRkaW5nLWlubGluZTogMjAlIDIwJTtcbn1cbi50YXNrcyAjdGFza2xpc3Qge1xuXHRtYXJnaW4tdG9wOiAxLjVlbTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAxZW07XG59XG4udGFza3MgI3Rhc2tsaXN0IGgyIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRjb2xvcjogd2hpdGU7XG59XG5cbi50YXNrQ2FyZCAudGFza0NvbnRhaW5lcntcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0cGFkZGluZzogMC41ZW0gMWVtO1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDdmciAxZnI7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XG59XG5cbi50YXNrQ2FyZCAuY2hlY2sge1xuXHRoZWlnaHQ6IDEuM2VtO1xuXHR3aWR0aDogMS4zZW07XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgLyogRm9yIFNhZmFyaSBhbmQgQ2hyb21lICovXG5cdC1tb3otYXBwZWFyYW5jZTogbm9uZTsgLyogRm9yIEZpcmVmb3ggKi9cblx0YXBwZWFyYW5jZTogbm9uZTtcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcblx0Ym9yZGVyLXJhZGl1czogNTAlOyAvKiBNYWtlcyB0aGUgY2hlY2tib3ggcm91bmQgKi9cblx0b3V0bGluZTogbm9uZTtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFza0NhcmQgLmNoZWNrOmNoZWNrZWQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XG59XG5cbi50YXNrQ2FyZCBpbWcge1xuXHR3aWR0aDogMS4zZW07XG5cdG9wYWNpdHk6IDAuNTtcbn1cbi50YXNrQ2FyZCBpbWc6aG92ZXIge1xuXHRvcGFjaXR5OiAxO1xufVxuLyogLnRhc2tDYXJkID4gKiB7XG4gICAgZmxleDoxO1xufSAqL1xuLnRhc2tDYXJkIC50YXNrLXRleHQge1xuXHRmbGV4LWdyb3c6IDE7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdhcDogMC41ZW07XG5cdG1hcmdpbi1yaWdodDogMWVtO1xufVxuXG4udGFza0NhcmQgLnRhc2stdGV4dCAudGl0bGUge1xuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udGFzay1idXR0b25zIHtcblx0ZGlzcGxheTogZmxleDtcblx0Z2FwOiAxZW07XG59XG5cbi5kaXNjIHtcblx0ZGlzcGxheTogbm9uZTtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwLjVlbSAxZW07XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XG5cdHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcztcbn1cblxuLmRpc2MuY29sbGFwc2Uge1xuXHRkaXNwbGF5OiBibG9jaztcblx0LyogbWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwLjVlbSAxZW07XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7ICovXG5cdHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcblx0YW5pbWF0aW9uOiBzaG93IDAuM3M7XG59XG5cbkBrZXlmcmFtZXMgc2hvdyB7XG5cdDAlIHtcblx0XHRtYXgtaGVpZ2h0OiAwO1xuXHQgIHRyYW5zZm9ybTogc2NhbGUoMSwgMCk7XG5cdH1cblxuXHQxMDAlIHtcblx0XHRtYXgtaGVpZ2h0OiAxZW07XG5cdCAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcblx0fVxufVxuXG4udGFza0NhcmQgLmV4cGFuZCB7XG5cdGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cblxuLnRhc2tDYXJkIC5leHBhbmQuY29sbGFwc2Uge1xuXHR0cmFuc2l0aW9uOnRyYW5zZm9ybSAwLjNzO1xuXHR0cmFuc2Zvcm06IHJvdGF0ZSguNXR1cm4pO1xufVxuXG4vKiBlbmQgdGFzayAgKi9cblxuI3Byb2plY3QtZGlhbG9nIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuI2FkZC10YXNrIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5cbmRpYWxvZyB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcblx0d2lkdGg6IDIwJTtcbn1cbmZvcm0gdWwgbGkge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRnYXA6IDAuMmVtO1xufVxuXG5mb3JtIHVsIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAxZW07XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcbn1cblxuZm9ybSB7XG5cdG1hcmdpbi10b3A6IDFlbTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Zm9udC1zaXplOiAxZW07XG5cdGdhcDogMWVtO1xuXHRwYWRkaW5nOiAxZW07XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcbn1cbmRpYWxvZyB7XG5cdGJvcmRlcjogbm9uZTtcblx0Ym94LXNoYWRvdzogMTBweCAxMHB4IDBweCB2YXIoLS1zZWNvbmQtY29sb3IpO1xufVxuXG5kaWFsb2c6OmJhY2tkcm9wIHtcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5cdG9wYWNpdHk6IDAuMztcbn1cbi8qIGZvcm0gZGl2IHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn0gKi9cblxuZm9ybSBkaXYge1xuXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cbmZvcm0gZGl2IGJ1dHRvbiB7XG5cdC8qIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4OyAqL1xuXHQvKiBmb250LXNpemU6IDFlbTsgKi9cblx0Ym9yZGVyOiBub25lO1xuXHQvKiBib3JkZXItcmFkaXVzOiAxNXB4OyAqL1xuXHRwYWRkaW5nOiAwLjVlbSAxZW07XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XG5cdGZvbnQtc2l6ZTogMWVtO1xufVxuZm9ybSBkaXYgYnV0dG9uOmxhc3QtY2hpbGQge1xuXHRjb2xvcjogd2hpdGU7XG5cdGJhY2tncm91bmQtY29sb3I6ICMyMDk0OGI7XG5cdGJvcmRlcjogbm9uZTtcbn1cbmZvcm0gaW5wdXQsXG50ZXh0YXJlYSxcbnNlbGVjdCB7XG5cdGZvbnQtc2l6ZTogMWVtO1xuXHRwYWRkaW5nOiAwLjVlbTtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcblx0Ym9yZGVyOiBub25lO1xuXHRmb250LWZhbWlseTogJ215Rm9udCc7XG5cdC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXG59XG5mb3JtIGlucHV0LFxudGV4dGFyZWEsXG5zZWxlY3Q6Zm9jdXMge1xuXHRvdXRsaW5lOiBub25lO1xufVxuZm9ybSBsaSBsYWJlbCB7XG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLG1CQUFtQjtDQUNuQiw0Q0FBNEM7QUFDN0M7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsNENBQXVEO0FBQ3hEOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QiwyQkFBMkI7Q0FDM0IscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxTQUFTO0NBQ1Qsb0NBQW9DO0NBQ3BDLGdCQUFnQjtDQUNoQixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLGFBQWE7QUFDZDs7QUFFQTs7Q0FFQyxxQkFBcUI7QUFDdEI7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixvQ0FBb0M7Q0FDcEMsWUFBWTtDQUNaLGlDQUFpQztDQUNqQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLFVBQVU7Q0FDVixTQUFTO0FBQ1Y7QUFDQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsOEJBQThCO0FBQy9COztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGlDQUFpQztDQUNqQyxhQUFh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YTtBQUNkO0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdsb2dvJztcXG5cXHRzcmM6IHVybCgnZm9udHMvU2Fua29mYURpc3BsYXktUmVndWxhci50dGYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdteUZvbnQnO1xcblxcdHNyYzogdXJsKCdmb250cy9Sb2JvdG9Db25kZW5zZWQtVmFyaWFibGVGb250X3dnaHQudHRmJyk7XFxufVxcblxcbjpyb290IHtcXG5cXHQtLWZvbnQtc2l6ZTogMS4yZW07XFxuXFx0LS1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHQvKiAtLWZpcnN0LWNvbG9yOiM2MzU5ODU7ICovXFxuXFx0LS1maXJzdC1jb2xvcjojNDc1NTY5O1xcblxcdC0tc2lkZS1iYXI6IzMzNDE1NTtcXG5cXHQtLXNlY29uZC1jb2xvcjogI2UyZThmMDtcXG59XFxuXFxuYm9keSB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcXG5cXHRmb250LXNpemU6IDEuMmVtO1xcblxcdGZvbnQtZmFtaWx5OiAnbXlGb250JztcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGhlaWdodDogMTAwdmg7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuXFx0Zm9udC1mYW1pbHk6ICdteUZvbnQnO1xcbn1cXG4uaGVhZGVyIHtcXG5cXHRwYWRkaW5nOiAxLjVlbSA1ZW07XFxuXFx0Ym94LXNoYWRvdzogMHB4IDAuNXB4IDNweCAtMnB4IGJsYWNrO1xcblxcdGNvbG9yIDp3aGl0ZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlLWJhcik7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhlYWRlciBoMiB7XFxuXFx0Zm9udC1mYW1pbHk6ICdsb2dvJztcXG5cXHRmb250LXNpemU6IDJlbTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdG1hcmdpbjogMDtcXG59XFxuLm1haW4ge1xcblxcdGZsZXgtZ3JvdzogMTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG59XFxuXFxuLnNpZGViYXIge1xcblxcdHBhZGRpbmc6IDJlbSAwLjVlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlLWJhcik7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdC8qIGdhcDogMmVtOyAqL1xcblxcdGJveC1zaGFkb3c6IDBweCAwLjVweCA0cHggLTJweCBibGFjaztcXG5cXG59XFxuXFxuLnNpZGViYXIgaW1nIHtcXG5cXHRoZWlnaHQ6IDEuNWVtO1xcbn1cXG5cXG4uc2lkZS1idXR0b24ge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z2FwOiAxZW07XFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxuXFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xcblxcdGNvbG9yIDp3aGl0ZTtcXG5cXHRtYXJnaW4tYm90dG9tOiAyZW07XFxufVxcbi5zaWRlLWJ1dHRvbiBkaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxZW07XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nLWlubGluZTogNGVtO1xcblxcdHBhZGRpbmctYmxvY2s6IDAuNWVtO1xcblxcdHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcztcXG59XFxuLnNpZGUtYnV0dG9uIGRpdjpob3ZlciB7XFxuXFx0Lyogb3V0bGluZToxcHggc29saWQgIzIwOTQ4QjsgKi9cXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcblxcdC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7ICovXFxuXFx0LyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLHZhcigtLXNlY29uZC1jb2xvciksdmFyKC0tZmlyc3QtY29sb3IpICk7ICovXFxufVxcblxcbi8qIHByb2plY3QgICovXFxuXFxuLmFkZC1wcm9qZWN0IHtcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRwYWRkaW5nLWJsb2NrOiAwLjE1ZW07XFxuXFx0bWFyZ2luOiAwIDAuNGVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRjb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG5cXHR0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG4uYWRkLXByb2plY3Q6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XFxuXFx0Y29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcXG5cXHRib3JkZXI6IG5vbmU7XFxufVxcbiNwcm9qZWN0LWRpYWxvZyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG59XFxuXFxuI3Byb2plY3QtZGlhbG9nIGlucHV0IHtcXG5cXHRmb250LXNpemU6IDFlbTtcXG5cXHRwYWRkaW5nOiAwLjVlbTtcXG5cXHR3aWR0aDogMDtcXG5cXHRmbGV4LWdyb3c6IDE7XFxuXFx0bWFyZ2luLWJvdHRvbTogMC41ZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZC1jb2xvcik7XFxufVxcbiNwcm9qZWN0LWRpYWxvZyBpbnB1dDpmb2N1cyB7XFxuXFx0b3V0bGluZTogbm9uZTtcXG59XFxuI3Byb2plY3QtZGlhbG9nIGRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0Z2FwOiAxZW07XFxuXFx0bWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG59XFxuXFxuI3Byb2plY3QtZGlhbG9nIGRpdiBidXR0b24ge1xcblxcdGZsZXg6IDE7XFxuXFx0Zm9udC1zaXplOiAxZW07XFxuXFx0cGFkZGluZzogMC41ZW0gMDtcXG59XFxuI3Byb2plY3QtZGlhbG9nIGRpdiBidXR0b246Zmlyc3QtY2hpbGQge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyMDk0OGI7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jcHJvamVjdC1kaWFsb2cgZGl2IGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdG1hcmdpbjogMC41ZW07XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0cGFkZGluZy1ibG9jazogMC41ZW07XFxuXFx0cGFkZGluZy1pbmxpbmU6IDEuMmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XFxuXFx0dHJhbnNpdGlvbjogYm94LXNoYWRvdyB0cmFuc2Zvcm0gMC4zcztcXG59XFxuXFxuLnByb2plY3QtY2FyZDpob3ZlciB7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG59XFxuLnByb2plY3QtY2FyZCBpbWcge1xcblxcdG9wYWNpdHk6IDAuNTtcXG5cXHR3aWR0aDogMS4zZW07XFxufVxcblxcbi5wcm9qZWN0LWNhcmQgaW1nOmhvdmVyIHtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG4ucHJvamVjdCBoMyB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogZW5kIHByb2plY3QgKi9cXG5cXG4vKiB0YXNrICAqL1xcblxcblxcbi50YXNrcyAudGFzay1hZGQge1xcblxcdGZvbnQtc2l6ZTogMWVtO1xcblxcdG1hcmdpbi10b3A6IDFlbTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0cGFkZGluZy1ibG9jazogMC41ZW07XFxuXFx0dHJhbnNpdGlvbjogMXM7XFxuXFx0Y29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZC1jb2xvcik7XFxuXFx0dHJhbnNpdGlvbjogMC4zcztcXG59XFxuLnRhc2stYWRkOmhvdmVyIHtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG5cXHRjb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xcbn1cXG4udGFza3Mge1xcblxcdHBhZGRpbmctaW5saW5lOiAyMCUgMjAlO1xcbn1cXG4udGFza3MgI3Rhc2tsaXN0IHtcXG5cXHRtYXJnaW4tdG9wOiAxLjVlbTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxZW07XFxufVxcbi50YXNrcyAjdGFza2xpc3QgaDIge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrQ2FyZCAudGFza0NvbnRhaW5lcntcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBhZGRpbmc6IDAuNWVtIDFlbTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogN2ZyIDFmcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xcbn1cXG5cXG4udGFza0NhcmQgLmNoZWNrIHtcXG5cXHRoZWlnaHQ6IDEuM2VtO1xcblxcdHdpZHRoOiAxLjNlbTtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IC8qIEZvciBTYWZhcmkgYW5kIENocm9tZSAqL1xcblxcdC1tb3otYXBwZWFyYW5jZTogbm9uZTsgLyogRm9yIEZpcmVmb3ggKi9cXG5cXHRhcHBlYXJhbmNlOiBub25lO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlOyAvKiBNYWtlcyB0aGUgY2hlY2tib3ggcm91bmQgKi9cXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2tDYXJkIC5jaGVjazpjaGVja2VkIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XFxufVxcblxcbi50YXNrQ2FyZCBpbWcge1xcblxcdHdpZHRoOiAxLjNlbTtcXG5cXHRvcGFjaXR5OiAwLjU7XFxufVxcbi50YXNrQ2FyZCBpbWc6aG92ZXIge1xcblxcdG9wYWNpdHk6IDE7XFxufVxcbi8qIC50YXNrQ2FyZCA+ICoge1xcbiAgICBmbGV4OjE7XFxufSAqL1xcbi50YXNrQ2FyZCAudGFzay10ZXh0IHtcXG5cXHRmbGV4LWdyb3c6IDE7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMC41ZW07XFxuXFx0bWFyZ2luLXJpZ2h0OiAxZW07XFxufVxcblxcbi50YXNrQ2FyZCAudGFzay10ZXh0IC50aXRsZSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50YXNrLWJ1dHRvbnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxZW07XFxufVxcblxcbi5kaXNjIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwLjVlbSAxZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG5cXHR0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuM3M7XFxufVxcblxcbi5kaXNjLmNvbGxhcHNlIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHQvKiBtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMC41ZW0gMWVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7ICovXFxuXFx0dHJhbnNmb3JtLW9yaWdpbjogdG9wO1xcblxcdGFuaW1hdGlvbjogc2hvdyAwLjNzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNob3cge1xcblxcdDAlIHtcXG5cXHRcXHRtYXgtaGVpZ2h0OiAwO1xcblxcdCAgdHJhbnNmb3JtOiBzY2FsZSgxLCAwKTtcXG5cXHR9XFxuXFxuXFx0MTAwJSB7XFxuXFx0XFx0bWF4LWhlaWdodDogMWVtO1xcblxcdCAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXG5cXHR9XFxufVxcblxcbi50YXNrQ2FyZCAuZXhwYW5kIHtcXG5cXHRjb250ZW50OiB1cmwoJ2ltZy9kb3duLnN2ZycpO1xcbn1cXG5cXG4udGFza0NhcmQgLmV4cGFuZC5jb2xsYXBzZSB7XFxuXFx0dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMC4zcztcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZSguNXR1cm4pO1xcbn1cXG5cXG4vKiBlbmQgdGFzayAgKi9cXG5cXG4jcHJvamVjdC1kaWFsb2cge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNhZGQtdGFzayB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmRpYWxvZyB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xcblxcdHdpZHRoOiAyMCU7XFxufVxcbmZvcm0gdWwgbGkge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z2FwOiAwLjJlbTtcXG59XFxuXFxuZm9ybSB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxZW07XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbmZvcm0ge1xcblxcdG1hcmdpbi10b3A6IDFlbTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Zm9udC1zaXplOiAxZW07XFxuXFx0Z2FwOiAxZW07XFxuXFx0cGFkZGluZzogMWVtO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRmb250LXdlaWdodDogNDAwO1xcbn1cXG5kaWFsb2cge1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3gtc2hhZG93OiAxMHB4IDEwcHggMHB4IHZhcigtLXNlY29uZC1jb2xvcik7XFxufVxcblxcbmRpYWxvZzo6YmFja2Ryb3Age1xcblxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcdG9wYWNpdHk6IDAuMztcXG59XFxuLyogZm9ybSBkaXYge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59ICovXFxuXFxuZm9ybSBkaXYge1xcblxcdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5mb3JtIGRpdiBidXR0b24ge1xcblxcdC8qIG1hcmdpbjogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDsgKi9cXG5cXHQvKiBmb250LXNpemU6IDFlbTsgKi9cXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0LyogYm9yZGVyLXJhZGl1czogMTVweDsgKi9cXG5cXHRwYWRkaW5nOiAwLjVlbSAxZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG5cXHRmb250LXNpemU6IDFlbTtcXG59XFxuZm9ybSBkaXYgYnV0dG9uOmxhc3QtY2hpbGQge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjA5NDhiO1xcblxcdGJvcmRlcjogbm9uZTtcXG59XFxuZm9ybSBpbnB1dCxcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcblxcdGZvbnQtc2l6ZTogMWVtO1xcblxcdHBhZGRpbmc6IDAuNWVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGZvbnQtZmFtaWx5OiAnbXlGb250JztcXG5cXHQvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xcbn1cXG5mb3JtIGlucHV0LFxcbnRleHRhcmVhLFxcbnNlbGVjdDpmb2N1cyB7XFxuXFx0b3V0bGluZTogbm9uZTtcXG59XFxuZm9ybSBsaSBsYWJlbCB7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IGhlbHBlciBmcm9tICcuL2hlbHBlcic7XG5jbGFzcyBUb2RvIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5wcm9qZWN0cyA9IFtdO1xuXHR9XG5cblx0c2V0UHJvamVjdChwcm9qZWN0cykge1xuXHRcdHRoaXMucHJvamVjdHMgPSBwcm9qZWN0cztcblx0fVxuXG5cdGFkZFByb2plY3QobmFtZSkge1xuXHRcdGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcblx0XHR0aGlzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG5cdFx0Ly8gaGVscGVyLnVwZGF0ZUxvY2FsU3RvcmFnZSgpXG5cdH1cblxuXHRyZW1vdmVQcm9qZWN0KGluZGV4KSB7XG5cdFx0dGhpcy5wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdC8vIGhlbHBlci51cGRhdGVMb2NhbFN0b3JhZ2UoKVxuXHR9XG5cblx0Z2V0UHJvamVjdHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMucHJvamVjdHM7XG5cdH1cblxuXHRnZXRQcm9qZWN0KG5hbWUpIHtcblx0XHRjb25zdCByZXN1bHQgPSB0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBuYW1lKTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iLCJpbXBvcnQgaGVscGVyIGZyb20gJy4vaGVscGVyJztcbmltcG9ydCBlZGl0U3ZnIGZyb20gJy4vaW1nL2VkaXQuc3ZnJztcbmltcG9ydCBkZWxldGVTdmcgZnJvbSAnLi9pbWcvZGVsZXRlLnN2Zyc7XG5cbmNvbnN0IGNhcmQgPSAoKCkgPT4ge1xuXHRsZXQgY3VycmVudEluZGV4ID0gbnVsbDtcblx0bGV0IHByb2plY3ROYW1lID0gJyc7XG5cdGNvbnN0IGRpYWxvZ0VkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLWRpYWxvZycpO1xuXHRjb25zdCB0aXRsZUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLXRpdGxlJyk7XG5cdGNvbnN0IGRhdGVFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1kYXRlJyk7XG5cdGNvbnN0IHByaW9yaXR5RWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stcHJpb3JpdHknKTtcblx0Y29uc3QgZGlzY3JpcHRpb25FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1pbmZvJyk7XG5cdGxldCB2aXNpYmxlID0gZmFsc2Vcblx0bGV0IGxpc3QgPSBbXTtcblxuXHRmdW5jdGlvbiBzZXRQcmlvcml0eSh0YXNrLCB0YXNrQ2FyZCkge1xuXHRcdGNvbnN0IHByaW9yaXR5ID0gdGFzay5nZXRQcmlvcml0eSgpO1xuXHRcdGlmIChwcmlvcml0eSA9PT0gJ0hpZ2gnKSB7XG5cdFx0XHR0YXNrQ2FyZC5zdHlsZS5ib3hTaGFkb3cgPSAnaW5zZXQgMC4zZW0gMCAjRjUyNTQ5Jztcblx0XHR9XG5cblx0XHRpZiAocHJpb3JpdHkgPT09ICdNZWRpdW0nKSB7XG5cdFx0XHR0YXNrQ2FyZC5zdHlsZS5ib3hTaGFkb3cgPSAnaW5zZXQgMC4zZW0gMCAjRjk4ODY2Jztcblx0XHR9XG5cblx0XHRpZiAocHJpb3JpdHkgPT09ICdMb3cnKSB7XG5cdFx0XHR0YXNrQ2FyZC5zdHlsZS5ib3hTaGFkb3cgPSAnaW5zZXQgMC4zZW0gMCAjMUUyNzYxJztcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gY3JlYXRlKHByb2plY3QsIHRhc2ssIGluZGV4LCBkaXNwbGF5KSB7XG5cdFx0bGlzdCA9IGhlbHBlci5nZXRUYXNrcyhwcm9qZWN0LmdldE5hbWUoKSk7XG5cdFx0Y29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dGFza0NhcmQuY2xhc3NMaXN0LmFkZCgndGFza0NhcmQnKTtcblx0XHR0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2tDb250YWluZXInKTtcblx0XHRjb25zdCB0ZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dGV4dERpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLXRleHQnKTtcblx0XHRjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lOUFVUJyk7XG5cdFx0Y2hlY2suc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG5cdFx0Y2hlY2suY2xhc3NMaXN0LmFkZCgnY2hlY2snKTtcblx0XHRjaGVjay5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG5cdFx0Y2hlY2suY2hlY2tlZCA9IHRhc2suZ2V0Q29tcGxldGUoKTtcblx0XHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG5cdFx0Y29uc3Qgc3BhbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0c3BhbjEuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuXHRcdGNvbnN0IHNwYW4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWJ1dHRvbnMnKTtcblx0XHRjb25zdCBkZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0XHRkZWwuc3JjID0gZGVsZXRlU3ZnO1xuXHRcdGRlbC5hbHQgPSAnRGVsZXRlJztcblx0XHRjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdFx0ZWRpdC5zcmMgPSBlZGl0U3ZnO1xuXHRcdGVkaXQuYWx0ID0gJ0VkaXQnO1xuXHRcdGVkaXQuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuXHRcdGVkaXQuZGF0YXNldC5wcm9qZWN0ID0gcHJvamVjdC5nZXROYW1lKCk7XG5cdFx0ZGVsLmRhdGFzZXQucHJvamVjdCA9IHByb2plY3QuZ2V0TmFtZSgpO1xuXHRcdGRlbC5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG5cdFx0c3BhbjEudGV4dENvbnRlbnQgPSB0YXNrLmdldFRpdGxlKCk7XG5cdFx0c3BhbjIudGV4dENvbnRlbnQgPSB0YXNrLmdldERhdGUoKTtcblxuXHRcdHRhc2tDYXJkLmRhdGFzZXQudmlzaWJsZSA9IHZpc2libGVcblx0XHQvLyBzZXRQcmlvcml0eSh0YXNrLCB0YXNrQ2FyZCk7XG5cdFx0c2V0UHJpb3JpdHkodGFzaywgdGFza0NvbnRhaW5lcik7XG5cblx0XHRpZiAodGFzay5nZXRDb21wbGV0ZSgpKSB7XG5cdFx0XHRzcGFuMS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuXHRcdH1cblxuXHRcdGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0aGVscGVyLmNoYW5nZUNvbXBsZXRlKHByb2plY3QuZ2V0TmFtZSgpLCBpbmRleCk7XG5cdFx0XHRkaXNwbGF5KCk7XG5cdFx0fSk7XG5cblx0XHR0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdGhlbHBlci5jaGFuZ2VDb21wbGV0ZShwcm9qZWN0LmdldE5hbWUoKSwgaW5kZXgpO1xuXHRcdFx0ZGlzcGxheSgpO1xuXHRcdH0pO1xuXG5cdFx0ZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRjdXJyZW50SW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4O1xuXHRcdFx0cHJvamVjdE5hbWUgPSBlLnRhcmdldC5kYXRhc2V0LnByb2plY3Q7XG5cdFx0XHRkaWFsb2dFZGl0LnNob3dNb2RhbCgpO1xuXHRcdFx0dGl0bGVFZGl0LnZhbHVlID0gdGFzay5nZXRUaXRsZSgpO1xuXHRcdFx0cHJpb3JpdHlFZGl0LnZhbHVlID0gdGFzay5nZXRQcmlvcml0eSgpO1xuXHRcdFx0ZGlzY3JpcHRpb25FZGl0LnZhbHVlID0gdGFzay5nZXREaXNjcmlwdGlvbigpO1xuXHRcdFx0ZGF0ZUVkaXQudmFsdWUgPSB0YXNrLmdldERhdGUoKTtcblx0XHR9KTtcblxuXHRcdGRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRoZWxwZXIucmVtb3ZlVGFzayhlLnRhcmdldC5kYXRhc2V0LnByb2plY3QsIGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpO1xuXHRcdFx0ZGlzcGxheSgpO1xuXHRcdH0pO1xuXG5cdFx0dGl0bGUuYXBwZW5kKHNwYW4xKTtcblx0XHR0aXRsZS5hcHBlbmQoc3BhbjIpO1xuXHRcdHRleHREaXYuYXBwZW5kKGNoZWNrKTtcblx0XHR0ZXh0RGl2LmFwcGVuZCh0aXRsZSk7XG5cdFx0YnV0dG9uRGl2LmFwcGVuZChlZGl0KTtcblx0XHRidXR0b25EaXYuYXBwZW5kKGRlbCk7XG5cdFx0Ly8gdGFza0NhcmQuYXBwZW5kKHRleHREaXYpO1xuXHRcdC8vIHRhc2tDYXJkLmFwcGVuZChidXR0b25EaXYpO1xuXHRcdHRhc2tDb250YWluZXIuYXBwZW5kKHRleHREaXYpO1xuXHRcdHRhc2tDb250YWluZXIuYXBwZW5kKGJ1dHRvbkRpdik7XG5cdFx0dGFza0NhcmQuYXBwZW5kKHRhc2tDb250YWluZXIpO1xuXHRcdHRhc2tsaXN0LmFwcGVuZCh0YXNrQ2FyZCk7XG5cblx0XHRpZiAodGFzay5nZXREaXNjcmlwdGlvbigpICE9ICcnKSB7XG5cdFx0XHRjb25zdCBleHBhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0XHRcdGV4cGFuZC5jbGFzc0xpc3QuYWRkKCdleHBhbmQnKTtcblx0XHRcdGNvbnN0IHNwYW4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRcdFx0c3BhbjMuY2xhc3NMaXN0LmFkZCgnZGlzYycpXG5cdFx0XHRzcGFuMy50ZXh0Q29udGVudCA9IHRhc2suZ2V0RGlzY3JpcHRpb24oKTtcblx0XHRcdGV4cGFuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0aWYoIXZpc2libGUpIHZpc2libGUgPSB0cnVlXG5cdFx0XHRcdGVsc2UgdmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcdHNwYW4zLmNsYXNzTGlzdC50b2dnbGUoJ2NvbGxhcHNlJyk7XG5cdFx0XHRcdGV4cGFuZC5jbGFzc0xpc3QudG9nZ2xlKCdjb2xsYXBzZScpO1xuXHRcdFx0fSk7XG5cdFx0XHRidXR0b25EaXYuYXBwZW5kKGV4cGFuZCk7XG5cdFx0XHR0YXNrQ2FyZC5hcHBlbmQoc3BhbjMpO1xuXHRcdFx0c2V0UHJpb3JpdHkodGFzayxzcGFuMylcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBidXR0b25MaXN0bmVycyhkaXNwbGF5KSB7XG5cdFx0Y29uc3QgY2FuY2VsRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stY2FuY2VsJyk7XG5cdFx0Y29uc3QgY29uZmlybUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLWNvbmZpcm0nKTtcblxuXHRcdGNvbnN0IENhbmNlbCA9IGNhbmNlbEVkaXQuY2xvbmVOb2RlKHRydWUpO1xuXHRcdGNvbnN0IENvbmZpcm0gPSBjb25maXJtRWRpdC5jbG9uZU5vZGUodHJ1ZSk7XG5cblx0XHRjYW5jZWxFZGl0LnJlcGxhY2VXaXRoKENhbmNlbCk7XG5cdFx0Y29uZmlybUVkaXQucmVwbGFjZVdpdGgoQ29uZmlybSk7XG5cblx0XHRDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZGlhbG9nRWRpdC5jbG9zZSgpO1xuXHRcdH0pO1xuXG5cdFx0Q29uZmlybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpZiAodGl0bGVFZGl0LnZhbHVlICE9ICcnKSB7XG5cdFx0XHRcdGhlbHBlci5lZGl0VGFzayhcblx0XHRcdFx0XHRwcm9qZWN0TmFtZSxcblx0XHRcdFx0XHRjdXJyZW50SW5kZXgsXG5cdFx0XHRcdFx0dGl0bGVFZGl0LnZhbHVlLFxuXHRcdFx0XHRcdGRhdGVFZGl0LnZhbHVlLFxuXHRcdFx0XHRcdHByaW9yaXR5RWRpdC52YWx1ZSxcblx0XHRcdFx0XHRkaXNjcmlwdGlvbkVkaXQudmFsdWVcblx0XHRcdFx0KTtcblx0XHRcdFx0ZGlzcGxheSgpO1xuXHRcdFx0fVxuXHRcdFx0ZGlhbG9nRWRpdC5jbG9zZSgpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdC8vIFx0aWYgKCF0YXNrQ2FyZC5jb250YWlucyhlLnRhcmdldCkpIHtcblx0XHQvLyBcdCAgc3BhbjMuY2xhc3NMaXN0LnJlbW92ZShcImNvbGxhcHNlXCIpXG5cdFx0Ly8gXHQgIGV4cGFuZC5jbGFzc0xpc3QucmVtb3ZlKFwiY29sbGFzcGVcIilcblx0XHQvLyBcdH1cblx0XHQvLyAgIH0pXG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGNyZWF0ZSxcblx0XHRidXR0b25MaXN0bmVycyxcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNhcmQ7XG4iLCJpbXBvcnQgeyBpc1Bhc3QgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgY2FyZCBmcm9tICcuL2NhcmQnO1xuaW1wb3J0IGhlbHBlciBmcm9tICcuL2hlbHBlcic7XG5sZXQgRHVlID0gKCkgPT4ge1xuXHRjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stYWRkJyk7XG5cdGFkZFRhc2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0Y29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza2xpc3QnKTtcblx0bGV0IHRhc2tzID0gW107XG5cdC8vIGNvbnN0IHRvZG8gPSBoZWxwZXIucmV0cml2ZSgpO1xuXHQvLyBjb25zdCBwcm9qZWN0cyA9IHRvZG8uZ2V0UHJvamVjdHMoKTtcblx0ZnVuY3Rpb24gdG9kYXlEaXNwbGF5KCkge1xuXHRcdGNvbnN0IHByb2plY3RzID0gaGVscGVyLmdldFByb2plY3RzKCk7XG5cdFx0dGFza0xpc3QudGV4dENvbnRlbnQgPSAnJztcblx0XHRsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXHRcdHRpdGxlLnRleHRDb250ZW50ID0gJ1Bhc3QgRHVlJztcblx0XHR0YXNrTGlzdC5hcHBlbmQodGl0bGUpO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBwcm9qZWN0ID0gcHJvamVjdHNbaV07XG5cblx0XHRcdHRhc2tzID0gaGVscGVyLmdldFRhc2tzKHByb2plY3QuZ2V0TmFtZSgpKTtcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGFza3MubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0bGV0IHRhc2sgPSB0YXNrc1tqXTtcblx0XHRcdFx0aWYgKGlzUGFzdCh0YXNrLmdldERhdGUoKSkgJiYgIXRhc2suZ2V0Q29tcGxldGUoKSkge1xuXHRcdFx0XHRcdGNhcmQuY3JlYXRlKHByb2plY3QsIHRhc2ssIGosIHRvZGF5RGlzcGxheSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjYXJkLmJ1dHRvbkxpc3RuZXJzKHRvZGF5RGlzcGxheSk7XG5cdHRvZGF5RGlzcGxheSgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHVlO1xuXG4iLCJpbXBvcnQgVG9kbyBmcm9tICcuL1RvLWRvJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xuXG5sZXQgaGVscGVyID0gKCgpID0+IHtcblx0ZnVuY3Rpb24gdXBkYXRlTG9jYWxTdG9yYWdlKGRhdGEpIHtcblx0XHRjb25zdCB0b2RvSnNvbiA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvJywgdG9kb0pzb24pO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmV0cml2ZSgpIHtcblx0XHQvLyBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8nKVxuXHRcdC8vIGlmKGRhdGEgPT09IG51bGwpIHtyZXR1cm4gbmV3IFRvZG8oKX1cblx0XHRjb25zdCB0b2RvTGlzdCA9IE9iamVjdC5hc3NpZ24oXG5cdFx0XHRuZXcgVG9kbygpLFxuXHRcdFx0SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kbycpKVxuXHRcdCk7XG5cdFx0dG9kb0xpc3Quc2V0UHJvamVjdChcblx0XHRcdHRvZG9MaXN0XG5cdFx0XHRcdC5nZXRQcm9qZWN0cygpXG5cdFx0XHRcdC5tYXAoKHByb2plY3QpID0+IE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QoKSwgcHJvamVjdCkpXG5cdFx0KTtcblx0XHR0b2RvTGlzdFxuXHRcdFx0LmdldFByb2plY3RzKClcblx0XHRcdC5mb3JFYWNoKChwcm9qZWN0KSA9PlxuXHRcdFx0XHRwcm9qZWN0LnNldFRhc2tzKFxuXHRcdFx0XHRcdHByb2plY3QuZ2V0VGFza3MoKS5tYXAoKHRhc2spID0+IE9iamVjdC5hc3NpZ24obmV3IFRhc2soKSwgdGFzaykpXG5cdFx0XHRcdClcblx0XHRcdCk7XG5cdFx0cmV0dXJuIHRvZG9MaXN0O1xuXHR9XG5cblx0Ly8gZnVuY3Rpb24gcmV0cml2ZSgpIHtcblx0Ly8gICAgIGNvbnN0IHJldml2ZWRUb2RvID0gbmV3IFRvZG8oKTtcblx0Ly8gICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kbycpO1xuXHQvLyAgICAgaWYoZGF0YSkge1xuXHQvLyAgICAgICAgIGNvbnN0IHRvZG9EYXRhID0gSlNPTi5wYXJzZShkYXRhKVxuXHQvLyAgICAgICAgIGZvcihjb25zdCBwcm9qZWN0RGF0YSBvZiB0b2RvRGF0YS5wcm9qZWN0cykge1xuXHQvLyAgICAgICAgICAgICBPYmplY3QuYXNzaWduKClcblx0Ly8gICAgICAgICAgICAgY29uc3QgcmV2aXZlZFByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0RGF0YS5uYW1lKVxuXHQvLyAgICAgICAgICAgICBmb3IoY29uc3QgdGFza0RhdGEgb2YgcHJvamVjdERhdGEubGlzdCkge1xuXHQvLyAgICAgICAgICAgICAgICAgY29uc3QgcmV2aXZlZHRhc2sgPSBuZXcgVGFzayh0YXNrRGF0YS5uYW1lLHRhc2tEYXRhLmRhdGUsdGFza0RhdGEucHJpb3JpdHksdGFza0RhdGEuY29tcGxldGUpXG5cdC8vICAgICAgICAgICAgICAgICByZXZpdmVkUHJvamVjdC5hZGRUYXNrKHJldml2ZWR0YXNrKVxuXHQvLyAgICAgICAgICAgICB9XG5cdC8vICAgICAgICAgICAgIHJldml2ZWRUb2RvLmFkZFByb2plY3QocmV2aXZlZFByb2plY3QpXG5cdC8vICAgICAgICAgfVxuXHQvLyAgICAgfVxuXG5cdC8vICAgICByZXR1cm4gcmV2aXZlZFRvZG87XG5cdC8vIH1cblxuXHRmdW5jdGlvbiBhZGRQcm9qZWN0KG5hbWUpIHtcblx0XHRjb25zdCB0b2RvTGlzdCA9IHJldHJpdmUoKTtcblx0XHR0b2RvTGlzdC5hZGRQcm9qZWN0KG5hbWUpO1xuXHRcdHVwZGF0ZUxvY2FsU3RvcmFnZSh0b2RvTGlzdCk7XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVQcm9qZWN0KGluZGV4KSB7XG5cdFx0Y29uc3QgdG9kb0xpc3QgPSByZXRyaXZlKCk7XG5cdFx0dG9kb0xpc3QucmVtb3ZlUHJvamVjdChpbmRleCk7XG5cdFx0dXBkYXRlTG9jYWxTdG9yYWdlKHRvZG9MaXN0KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuXHRcdGNvbnN0IHRvZG9MaXN0ID0gcmV0cml2ZSgpO1xuXHRcdHJldHVybiB0b2RvTGlzdC5nZXRQcm9qZWN0cygpO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlVGFzayhwcm9qZWN0TmFtZSwgaW5kZXgpIHtcblx0XHRjb25zdCB0b2RvTGlzdCA9IHJldHJpdmUoKTtcblx0XHRjb25zdCBwcm9qZWN0ID0gdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XG5cdFx0aWYgKHByb2plY3QgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cHJvamVjdC5yZW1vdmVUYXNrKGluZGV4KTtcblx0XHR9XG5cdFx0dXBkYXRlTG9jYWxTdG9yYWdlKHRvZG9MaXN0KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZFRhc2socHJvamVjdE5hbWUsIG5hbWUsIGRhdGUsIHByaW9yaXR5LCBkaXNjcmlwdGlvbikge1xuXHRcdGNvbnN0IHRvZG9MaXN0ID0gcmV0cml2ZSgpO1xuXHRcdGNvbnN0IHByb2plY3QgPSB0b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcblx0XHRwcm9qZWN0LmFkZFRhc2sobmFtZSwgZGF0ZSwgcHJpb3JpdHksIGRpc2NyaXB0aW9uKTtcblx0XHR1cGRhdGVMb2NhbFN0b3JhZ2UodG9kb0xpc3QpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZWRpdFRhc2socHJvamVjdE5hbWUsIGluZGV4LCBuYW1lLCBkYXRlLCBwcmlvcml0eSwgZGlzY3JpcHRpb24pIHtcblx0XHRjb25zdCB0b2RvTGlzdCA9IHJldHJpdmUoKTtcblx0XHRjb25zdCBwcm9qZWN0ID0gdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XG5cdFx0Y29uc3QgdGFza3MgPSBwcm9qZWN0LmdldFRhc2tzKCk7XG5cdFx0dGFza3NbaW5kZXhdLnNldFRhc2sobmFtZSwgZGF0ZSwgcHJpb3JpdHksIGRpc2NyaXB0aW9uKTtcblx0XHR1cGRhdGVMb2NhbFN0b3JhZ2UodG9kb0xpc3QpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0VGFza3MocHJvamVjdE5hbWUpIHtcblx0XHRjb25zdCB0b2RvTGlzdCA9IHJldHJpdmUoKTtcblx0XHRjb25zdCBwcm9qZWN0ID0gdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XG5cdFx0cmV0dXJuIHByb2plY3QuZ2V0VGFza3MoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNoYW5nZUNvbXBsZXRlKHByb2plY3ROYW1lLCBpbmRleCkge1xuXHRcdGNvbnN0IHRvZG9MaXN0ID0gcmV0cml2ZSgpO1xuXHRcdGNvbnN0IHByb2plY3QgPSB0b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcblx0XHRjb25zdCB0YXNrID0gcHJvamVjdC5nZXRUYXNrcygpW2luZGV4XTtcblx0XHR0YXNrLmNoYW5nZUNvbXBsZXRlKCk7XG5cdFx0dXBkYXRlTG9jYWxTdG9yYWdlKHRvZG9MaXN0KTtcblx0fVxuXHRyZXR1cm4ge1xuXHRcdHVwZGF0ZUxvY2FsU3RvcmFnZSxcblx0XHRyZXRyaXZlLFxuXHRcdGFkZFByb2plY3QsXG5cdFx0cmVtb3ZlUHJvamVjdCxcblx0XHRnZXRQcm9qZWN0cyxcblx0XHRhZGRUYXNrLFxuXHRcdHJlbW92ZVRhc2ssXG5cdFx0Z2V0VGFza3MsXG5cdFx0ZWRpdFRhc2ssXG5cdFx0Y2hhbmdlQ29tcGxldGUsXG5cdH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBoZWxwZXI7XG4iLCIvLyBpbXBvcnQgdG9kbyBmcm9tIFwiLi9Uby1kb1wiO1xuaW1wb3J0IGNhcmQgZnJvbSAnLi9jYXJkJztcbmltcG9ydCBoZWxwZXIgZnJvbSAnLi9oZWxwZXInO1xuXG5sZXQgaG9tZURvbSA9ICgpID0+IHtcblx0Y29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWFkZCcpO1xuXHRhZGRUYXNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tsaXN0Jyk7XG5cdGxldCB0YXNrcyA9IFtdO1xuXHRmdW5jdGlvbiBob21lRGlzcGxheSgpIHtcblx0XHRjb25zdCBwcm9qZWN0cyA9IGhlbHBlci5nZXRQcm9qZWN0cygpO1xuXHRcdHRhc2tMaXN0LnRleHRDb250ZW50ID0gJyc7XG5cdFx0bGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblx0XHR0aXRsZS50ZXh0Q29udGVudCA9ICdIb21lJztcblx0XHR0YXNrTGlzdC5hcHBlbmQodGl0bGUpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IHByb2plY3QgPSBwcm9qZWN0c1tpXTtcblx0XHRcdHRhc2tzID0gaGVscGVyLmdldFRhc2tzKHByb2plY3QuZ2V0TmFtZSgpKTtcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGFza3MubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0bGV0IHRhc2sgPSB0YXNrc1tqXTtcblx0XHRcdFx0Y2FyZC5jcmVhdGUocHJvamVjdCwgdGFzaywgaiwgaG9tZURpc3BsYXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNhcmQuYnV0dG9uTGlzdG5lcnMoaG9tZURpc3BsYXkpO1xuXHRob21lRGlzcGxheSgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaG9tZURvbTtcbiIsImltcG9ydCB0YXNrIGZyb20gJy4vdGFzayc7XG5pbXBvcnQgaGVscGVyIGZyb20gJy4vaGVscGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG5cdGNvbnN0cnVjdG9yKG5hbWUpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMubGlzdCA9IFtdO1xuXHR9XG5cblx0c2V0VGFza3ModGFza3MpIHtcblx0XHR0aGlzLmxpc3QgPSB0YXNrcztcblx0fVxuXHRyZW1vdmVUYXNrKGluZGV4KSB7XG5cdFx0dGhpcy5saXN0LnNwbGljZShpbmRleCwgMSk7XG5cdFx0aGVscGVyLnVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuXHR9XG5cblx0YWRkVGFzayhuYW1lLCBkYXRlLCBwcmlvcml0eSwgZGlzY3JpcHRpb24pIHtcblx0XHR0aGlzLmxpc3QucHVzaChuZXcgdGFzayhuYW1lLCBkYXRlLCBwcmlvcml0eSwgZGlzY3JpcHRpb24sIGZhbHNlKSk7XG5cdFx0aGVscGVyLnVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuXHR9XG5cblx0Z2V0VGFza3MoKSB7XG5cdFx0cmV0dXJuIHRoaXMubGlzdDtcblx0fVxuXG5cdGdldE5hbWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcblx0fVxuXG5cdGdldFRhc2sobmFtZSkge1xuXHRcdGNvbnN0IHJlc3VsdCA9IHRoaXMubGlzdC5maW5kKCh0YXNrID0gdGFzay5nZXRUaXRsZSgpID09PSBuYW1lKSk7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxufVxuIiwiaW1wb3J0IHRhc2tEb20gZnJvbSAnLi90YXNrRG9tJztcbmltcG9ydCBob21lRG9tIGZyb20gJy4vaG9tZURvbSc7XG5pbXBvcnQgaGVscGVyIGZyb20gJy4vaGVscGVyJztcbmltcG9ydCBkZWxldGVTdmcgZnJvbSAnLi9pbWcvZGVsZXRlLnN2Zyc7XG5pbXBvcnQgc2VsZWN0IGZyb20gJy4vc2VsZWN0ZWQnO1xuXG5sZXQgcHJvamVjdERvbSA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cdGNvbnN0IHByb2plY3REaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNvbnRlbnQuYXBwZW5kKHByb2plY3REaXNwbGF5KTtcblx0Y29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XG5cdGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWRpYWxvZycpO1xuXHRjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZScpO1xuXHRjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsJyk7XG5cdGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29uZmlybScpO1xuXHRwcm9qZWN0SW5wdXQudmFsdWUgPSAnJztcblx0ZnVuY3Rpb24gZGlhbG9nVmlzaWJsZSgpIHtcblx0XHRkaWFsb2cuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdH1cblxuXHRmdW5jdGlvbiBkaWFsb2dIaWRkZW4oKSB7XG5cdFx0ZGlhbG9nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdH1cblxuXHRsZXQgZGlzcGxheSA9ICgpID0+IHtcblx0XHRwcm9qZWN0RGlzcGxheS50ZXh0Q29udGVudCA9ICcnO1xuXHRcdC8vIGNvbnN0IHRvZG8gPSBoZWxwZXIucmV0cml2ZSgpO1xuXHRcdC8vIGxldCBwcm9qZWN0cyA9IHRvZG8uZ2V0UHJvamVjdHMoKTtcblx0XHRsZXQgcHJvamVjdHMgPSBoZWxwZXIuZ2V0UHJvamVjdHMoKTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgcHJvamVjdCA9IHByb2plY3RzW2ldO1xuXHRcdFx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRkaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jYXJkJyk7XG5cdFx0XHRkaXYuZGF0YXNldC5pbmRleCA9IGk7XG5cdFx0XHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdC8vIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdFx0Y29uc3QgZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdFx0XHRkZWwuc3JjID0gZGVsZXRlU3ZnO1xuXHRcdFx0ZGVsLmFsdCA9ICdEZWxldGUnO1xuXHRcdFx0ZGl2LmFwcGVuZCh0aXRsZSk7XG5cdFx0XHRkaXYuYXBwZW5kKGRlbCk7XG5cblx0XHRcdGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRcdHNlbGVjdC5hZGRTaGFkb3coZSk7XG5cdFx0XHRcdHRhc2tEb20ocHJvamVjdCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0ZGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0aGVscGVyLnJlbW92ZVByb2plY3QoZGl2LmRhdGFzZXQuaW5kZXgpO1xuXHRcdFx0XHRob21lRG9tKCk7XG5cdFx0XHRcdGRpc3BsYXkoKTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0TmFtZSgpO1xuXHRcdFx0cHJvamVjdERpc3BsYXkuYXBwZW5kKGRpdik7XG5cdFx0fVxuXHR9O1xuXG5cdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHQvLyBkaWFsb2cuc2hvdygpXG5cdFx0ZGlhbG9nVmlzaWJsZSgpO1xuXHRcdGJ1dHRvbi5yZXBsYWNlV2l0aChkaWFsb2cpO1xuXHRcdHByb2plY3RJbnB1dC5mb2N1cygpO1xuXHRcdGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHR9KTtcblxuXHRjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0Ly8gZGlhbG9nLmNsb3NlKClcblx0XHRkaWFsb2dIaWRkZW4oKTtcblx0XHRidXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0ZGlhbG9nLnJlcGxhY2VXaXRoKGJ1dHRvbik7XG5cdFx0cHJvamVjdElucHV0LnZhbHVlID0gJyc7XG5cdH0pO1xuXG5cdGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdC8vIGUudGFyZ2V0LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Ly8gZGlhbG9nLmNsb3NlKClcblx0XHRkaWFsb2dIaWRkZW4oKTtcblx0XHRidXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0ZGlhbG9nLnJlcGxhY2VXaXRoKGJ1dHRvbik7XG5cdFx0aWYgKHByb2plY3RJbnB1dC52YWx1ZSAhPSAnJykge1xuXHRcdFx0aGVscGVyLmFkZFByb2plY3QocHJvamVjdElucHV0LnZhbHVlKTtcblx0XHRcdGNvbnN0IHRvZG8gPSBoZWxwZXIucmV0cml2ZSgpO1xuXHRcdFx0Y29uc3QgcHJvamVjdCA9IHRvZG8uZ2V0UHJvamVjdChwcm9qZWN0SW5wdXQudmFsdWUpO1xuXHRcdFx0dGFza0RvbShwcm9qZWN0KTtcblx0XHRcdGRpc3BsYXkoKTtcblx0XHRcdHNlbGVjdC5hZGRTaGFkb3dMYXRlc3RQcm9qZWN0KCk7XG5cdFx0fVxuXHRcdHByb2plY3RJbnB1dC52YWx1ZSA9ICcnO1xuXHR9KTtcblxuXHRkaXNwbGF5KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0RG9tO1xuIiwiaW1wb3J0IHsgYWRkIH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5sZXQgc2VsZWN0ID0gKCgpID0+IHtcblx0Y29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lJyk7XG5cdGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5Jyk7XG5cdGNvbnN0IGR1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUnKTtcblx0Y29uc3Qgc2hhZG93ID0gJ2luc2V0IDAuNWVtIDAgIzIwOTQ4Qic7XG5cblx0ZnVuY3Rpb24gY2xlYXJBbGxTaGFkb3dzKCkge1xuXHRcdGNvbnN0IHByb2plY3RzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1jYXJkJykpO1xuXHRcdHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcblx0XHRcdHByb2plY3Quc3R5bGUuYm94U2hhZG93ID0gJ25vbmUnO1xuXHRcdH0pO1xuXHRcdHRvZGF5LnN0eWxlLmJveFNoYWRvdyA9ICdub25lJztcblx0XHRkdWUuc3R5bGUuYm94U2hhZG93ID0gJ25vbmUnO1xuXHRcdGhvbWUuc3R5bGUuYm94U2hhZG93ID0gJ25vbmUnO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2VsZWN0SG9tZSgpIHtcblx0XHRjbGVhckFsbFNoYWRvd3MoKTtcblx0XHRob21lLnN0eWxlLmJveFNoYWRvdyA9IHNoYWRvdztcblx0fVxuXG5cdGZ1bmN0aW9uIHNlbGVjdFRvZGF5KCkge1xuXHRcdGNsZWFyQWxsU2hhZG93cygpO1xuXHRcdHRvZGF5LnN0eWxlLmJveFNoYWRvdyA9IHNoYWRvdztcblx0fVxuXG5cdGZ1bmN0aW9uIHNlbGVjdER1ZSgpIHtcblx0XHRjbGVhckFsbFNoYWRvd3MoKTtcblx0XHRkdWUuc3R5bGUuYm94U2hhZG93ID0gc2hhZG93O1xuXHR9XG5cblx0ZnVuY3Rpb24gc2VsZWN0UHJvamVjdChlKSB7XG5cdFx0Y2xlYXJBbGxTaGFkb3dzKCk7XG5cdFx0ZS50YXJnZXQuc3R5bGUuYm94U2hhZG93ID0gc2hhZG93O1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkU2hhZG93KGV2ZW50KSB7XG5cdFx0Y2xlYXJBbGxTaGFkb3dzKCk7XG5cdFx0Ly8gRmluZCB0aGUgY2xvc2VzdCBwYXJlbnQgZGl2IHdpdGggY2xhc3MgXCJwYXJlbnQtZGl2XCJcblx0XHR2YXIgdGFyZ2V0RGl2ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0LWNhcmQnKTtcblx0XHRpZiAodGFyZ2V0RGl2KSB7XG5cdFx0XHR0YXJnZXREaXYuc3R5bGUuYm94U2hhZG93ID0gc2hhZG93OyAvLyBBZGQgc2hhZG93XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gYWRkU2hhZG93TGF0ZXN0UHJvamVjdCgpIHtcblx0XHRzZWxlY3QuY2xlYXJBbGxTaGFkb3dzKCk7XG5cdFx0Y29uc3QgcHJvamVjdERvbSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtY2FyZCcpKTtcblx0XHRwcm9qZWN0RG9tW3Byb2plY3REb20ubGVuZ3RoIC0gMV0uc3R5bGUuYm94U2hhZG93ID0gc2hhZG93O1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRzZWxlY3RIb21lLFxuXHRcdHNlbGVjdFRvZGF5LFxuXHRcdHNlbGVjdER1ZSxcblx0XHRzZWxlY3RQcm9qZWN0LFxuXHRcdGFkZFNoYWRvdyxcblx0XHRjbGVhckFsbFNoYWRvd3MsXG5cdFx0YWRkU2hhZG93TGF0ZXN0UHJvamVjdCxcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHNlbGVjdDtcbiIsImltcG9ydCBoZWxwZXIgZnJvbSAnLi9oZWxwZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG5cdGNvbnN0cnVjdG9yKG5hbWUsIGRhdGUsIHByaW9yaXR5LCBkaXNjcmlwdGlvbiwgY29tcGxldGUpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuZGF0ZSA9IGRhdGU7XG5cdFx0dGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuXHRcdHRoaXMuZGlzY3JpcHRpb24gPSBkaXNjcmlwdGlvbjtcblx0XHR0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XG5cdH1cblxuXHRzZXRUYXNrKG5hbWUsIGRhdGUsIHByaW9yaXR5LCBkaXNjcmlwdGlvbikge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5kYXRlID0gZGF0ZTtcblx0XHR0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cdFx0dGhpcy5kaXNjcmlwdGlvbiA9IGRpc2NyaXB0aW9uO1xuXHRcdGhlbHBlci51cGRhdGVMb2NhbFN0b3JhZ2UoKTtcblx0fVxuXG5cdGNoYW5nZUNvbXBsZXRlKCkge1xuXHRcdHRoaXMuY29tcGxldGUgPSAhdGhpcy5jb21wbGV0ZTtcblx0XHRoZWxwZXIudXBkYXRlTG9jYWxTdG9yYWdlKCk7XG5cdH1cblx0Z2V0VGl0bGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcblx0fVxuXG5cdGdldERhdGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0ZTtcblx0fVxuXG5cdGdldFByaW9yaXR5KCkge1xuXHRcdHJldHVybiB0aGlzLnByaW9yaXR5O1xuXHR9XG5cblx0Z2V0Q29tcGxldGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcGxldGU7XG5cdH1cblxuXHRnZXREaXNjcmlwdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5kaXNjcmlwdGlvbjtcblx0fVxufVxuIiwiaW1wb3J0IGNhcmQgZnJvbSAnLi9jYXJkJztcbmltcG9ydCBoZWxwZXIgZnJvbSAnLi9oZWxwZXInO1xubGV0IHRhc2tEb20gPSAocHJvamVjdCkgPT4ge1xuXHRjb25zdCB0YXNrbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrbGlzdCcpO1xuXHRjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2snKTtcblx0Y29uc3QgY2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stY2FuY2VsJyk7XG5cdGNvbnN0IGNvbmZpcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1jb25maXJtJyk7XG5cdGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRpYWxvZycpO1xuXHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlJyk7XG5cdGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kYXRlJyk7XG5cdGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stcHJpb3JpdHknKTtcblx0Y29uc3QgZGlzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1pbmZvJyk7XG5cdGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1hZGQnKTtcblxuXHRhZGRUYXNrLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRsZXQgbGlzdCA9IFtdO1xuXHRmdW5jdGlvbiBkaXNwbGF5KCkge1xuXHRcdGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cdFx0dGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKTtcblx0XHR0YXNrbGlzdC50ZXh0Q29udGVudCA9ICcnO1xuXHRcdHRhc2tsaXN0LmFwcGVuZCh0aXRsZSk7XG5cdFx0bGlzdCA9IGhlbHBlci5nZXRUYXNrcyhwcm9qZWN0LmdldE5hbWUoKSk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgdGFzayA9IGxpc3RbaV07XG5cdFx0XHRjYXJkLmNyZWF0ZShwcm9qZWN0LCB0YXNrLCBpLCBkaXNwbGF5KTtcblx0XHR9XG5cdH1cblxuXHRkaXNwbGF5KCk7XG5cblx0Y2FyZC5idXR0b25MaXN0bmVycyhkaXNwbGF5KTtcblx0ZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKCkge1xuXHRcdGxldCBuZXdCdXR0b24gPSBidXR0b24uY2xvbmVOb2RlKHRydWUpO1xuXHRcdGxldCBuZXdDYW5jZWwgPSBjYW5jZWwuY2xvbmVOb2RlKHRydWUpO1xuXHRcdGxldCBuZXdDb25maXJtID0gY29uZmlybS5jbG9uZU5vZGUodHJ1ZSk7XG5cblx0XHRidXR0b24ucmVwbGFjZVdpdGgobmV3QnV0dG9uKTtcblx0XHRjYW5jZWwucmVwbGFjZVdpdGgobmV3Q2FuY2VsKTtcblx0XHRjb25maXJtLnJlcGxhY2VXaXRoKG5ld0NvbmZpcm0pO1xuXG5cdFx0bmV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0ZGlhbG9nLnNob3dNb2RhbCgpO1xuXHRcdH0pO1xuXG5cdFx0bmV3Q2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGRpYWxvZy5jbG9zZSgpO1xuXHRcdFx0dGl0bGUudmFsdWUgPSAnJztcblx0XHRcdHByaW9yaXR5LnZhbHVlID0gJyc7XG5cdFx0XHRkaXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xuXHRcdFx0ZGF0ZS52YWx1ZSA9ICcnO1xuXHRcdH0pO1xuXG5cdFx0bmV3Q29uZmlybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpZiAodGl0bGUudmFsdWUgIT0gJycpIHtcblx0XHRcdFx0aGVscGVyLmFkZFRhc2soXG5cdFx0XHRcdFx0cHJvamVjdC5nZXROYW1lKCksXG5cdFx0XHRcdFx0dGl0bGUudmFsdWUsXG5cdFx0XHRcdFx0ZGF0ZS52YWx1ZSxcblx0XHRcdFx0XHRwcmlvcml0eS52YWx1ZSxcblx0XHRcdFx0XHRkaXNjcmlwdGlvbi52YWx1ZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRkaXNwbGF5KCk7XG5cdFx0XHR9XG5cdFx0XHR0aXRsZS52YWx1ZSA9ICcnO1xuXHRcdFx0cHJpb3JpdHkudmFsdWUgPSAnJztcblx0XHRcdGRpc2NyaXB0aW9uLnZhbHVlID0gJyc7XG5cdFx0XHRkYXRlLnZhbHVlID0gJyc7XG5cdFx0XHRkaWFsb2cuY2xvc2UoKTtcblx0XHR9KTtcblx0fVxuXG5cdHJlbW92ZUxpc3RlbmVycygpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdGFza0RvbTtcblxuXG4iLCIvLyBpbXBvcnQgdG9kbyBmcm9tIFwiLi9Uby1kb1wiO1xuaW1wb3J0IGNhcmQgZnJvbSAnLi9jYXJkJztcbmltcG9ydCBoZWxwZXIgZnJvbSAnLi9oZWxwZXInO1xuXG5sZXQgdG9kYXkgPSAoKSA9PiB7XG5cdGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1hZGQnKTtcblx0YWRkVGFzay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrbGlzdCcpO1xuXHQvLyBjb25zdCB0b2RvID0gaGVscGVyLnJldHJpdmUoKTtcblx0Ly8gY29uc3QgcHJvamVjdHMgPSB0b2RvLmdldFByb2plY3RzKCk7XG5cdGxldCB0YXNrcyA9IFtdO1xuXG5cdGZ1bmN0aW9uIGdldFRvZGF5RGF0ZSgpIHtcblx0XHRjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG5cdFx0Y29uc3QgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG5cdFx0Y29uc3QgbW9udGggPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG5cdFx0Y29uc3QgZGF5ID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcblx0XHRyZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcblx0fVxuXG5cdGZ1bmN0aW9uIHRvZGF5RGlzcGxheSgpIHtcblx0XHR0YXNrTGlzdC50ZXh0Q29udGVudCA9ICcnO1xuXHRcdGNvbnN0IHByb2plY3RzID0gaGVscGVyLmdldFByb2plY3RzKCk7XG5cdFx0bGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblx0XHR0aXRsZS50ZXh0Q29udGVudCA9ICdUb2RheSc7XG5cdFx0dGFza0xpc3QuYXBwZW5kKHRpdGxlKTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgcHJvamVjdCA9IHByb2plY3RzW2ldO1xuXG5cdFx0XHR0YXNrcyA9IGhlbHBlci5nZXRUYXNrcyhwcm9qZWN0LmdldE5hbWUoKSk7XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHRhc2tzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGxldCB0YXNrID0gdGFza3Nbal07XG5cdFx0XHRcdGxldCBjdXJyZW50RGF0ZSA9IGdldFRvZGF5RGF0ZSgpO1xuXG5cdFx0XHRcdGlmICh0YXNrLmdldERhdGUoKSA9PT0gY3VycmVudERhdGUpIHtcblx0XHRcdFx0XHRjYXJkLmNyZWF0ZShwcm9qZWN0LCB0YXNrLCBqLCB0b2RheURpc3BsYXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y2FyZC5idXR0b25MaXN0bmVycyh0b2RheURpc3BsYXkpO1xuXHR0b2RheURpc3BsYXkoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvZGF5O1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzUGFzdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgaW4gdGhlIHBhc3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDIgSnVseSAyMDE0IGluIHRoZSBwYXN0P1xuICogY29uc3QgcmVzdWx0ID0gaXNQYXN0KG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1Bhc3QoZGF0ZSkge1xuICByZXR1cm4gK3RvRGF0ZShkYXRlKSA8IERhdGUubm93KCk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNQYXN0O1xuIiwiLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGFyZ3VtZW50IC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICBjb25zdCBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChcbiAgICBhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIGFyZ3VtZW50ID09PSBcIm9iamVjdFwiICYmIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IERhdGVdXCIpXG4gICkge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgYXJndW1lbnQuY29uc3RydWN0b3IoK2FyZ3VtZW50KTtcbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwibnVtYmVyXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBOdW1iZXJdXCIgfHxcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwic3RyaW5nXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBTdHJpbmddXCJcbiAgKSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHRvRGF0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgcHJvamVjdERvbSBmcm9tICcuL3Byb2plY3REb20uanMnO1xuaW1wb3J0IGhvbWVEb20gZnJvbSAnLi9ob21lRG9tLmpzJztcbmltcG9ydCB0b2RheURvbSBmcm9tICcuL3RvZGF5RG9tLmpzJztcbmltcG9ydCBEdWUgZnJvbSAnLi9kdWVEb20uanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgaG9tZVN2ZyBmcm9tICcuL2ltZy9ob21lLnN2Zyc7XG5pbXBvcnQgYWxlcnRTdmcgZnJvbSAnLi9pbWcvYWxlcnQuc3ZnJztcbmltcG9ydCB0b2RheVN2ZyBmcm9tICcuL2ltZy90b2RheS5zdmcnO1xuaW1wb3J0IHNlbGVjdCBmcm9tICcuL3NlbGVjdGVkLmpzJztcblxuY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lJyk7XG5jb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheScpO1xuY29uc3QgZHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZScpO1xuXG4vLyBjb25zdCBob21lSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4vLyBob21lSW1nLnNyYyA9IGhvbWVTdmc7XG4vLyBjb25zdCBob21lU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbi8vIGhvbWVTcGFuLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4vLyBob21lLmFwcGVuZChob21lSW1nKTtcbi8vIGhvbWUuYXBwZW5kKGhvbWVTcGFuKTtcblxuZnVuY3Rpb24gY3JlYXRlVGFicyhtYWluLCBuYW1lLCBpbWcpIHtcblx0Y29uc3QgSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdEltZy5zcmMgPSBpbWc7XG5cdGNvbnN0IFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFNwYW4udGV4dENvbnRlbnQgPSBuYW1lO1xuXHRtYWluLmFwcGVuZChJbWcpO1xuXHRtYWluLmFwcGVuZChTcGFuKTtcbn1cblxuY3JlYXRlVGFicyhob21lLCAnSG9tZScsIGhvbWVTdmcpO1xuY3JlYXRlVGFicyh0b2RheSwgJ1RvZGF5JywgdG9kYXlTdmcpO1xuY3JlYXRlVGFicyhkdWUsICdQYXN0IER1ZScsIGFsZXJ0U3ZnKTtcblxuc2VsZWN0LnNlbGVjdEhvbWUoKTtcbmhvbWVEb20oKTtcblxuaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0c2VsZWN0LnNlbGVjdEhvbWUoKTtcblx0aG9tZURvbSgpO1xufSk7XG5cbnRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRzZWxlY3Quc2VsZWN0VG9kYXkoKTtcblx0dG9kYXlEb20oKTtcbn0pO1xuXG5kdWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdHNlbGVjdC5zZWxlY3REdWUoKTtcblx0RHVlKCk7XG59KTtcblxuXG5wcm9qZWN0RG9tKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=