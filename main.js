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

/* :root {
	--font-size: 1.2em;
	--background-color: white;
	--first-color:#475569;
	--side-bar:#334155;
	--second-color: #e2e8f0;
} */

:root {
	--font-size: 1.2em;
	--background-color: white;
	--first-color:#404258;
	--side-bar:#474E68;
	--second-color: #D8D8D8;
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
	color :white;
	margin-bottom: 2em;
}
.side-button div {
	display: flex;
	gap: 1em;
	padding-inline-start: 1em;
	padding-block: 0.5em;
	align-items: center;
	transition: box-shadow 0.3s;
}
.side-button div:hover {
	transform: scale(1.03);
}

/* project  */

.add-project {
	font-size: 1.5em;
	text-align: center;
	padding-block: 0.15em;
	margin: 0 0.4em;
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
	/* text-align: center; */
	padding: .5em;
	margin: 0.5em;
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
	/* display: none; */
	max-height: 0;
	margin: 0;
	overflow: hidden;
	transform-origin: top;
	background-color: var(--second-color);
	padding: 0;
	transition: max-height .3s , padding .3s;
}

.disc.collapse {
	max-height: 100px;
	padding: 0.5em 1em;
}

.taskCard .expand {
	content: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
	transition:transform 0.3s;

}

.taskCard .expand.collapse {
	/* transition:transform 0.3s; */
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
	width: min(100%, 500px);
	/* box-shadow: 10px 10px 0px var(--second-color); */
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
.sidebar-show {
	display: block;
	transform : translateX(-100%)
}

@media(max-width:1000px) {
		body{
			font-size: 1rem;
			height: auto;
			position: relative;
		}
		.tasks {
			margin: 1em;
			padding: 0;
			width: auto;
		}

		.sidebar {
			/* width: 80%; */
			margin: 1px;
			padding: 10px;
			left:100%;
		}
		.side-button {
			gap: 10px;
			color :white;
			margin-bottom: 10px;
		}
		.side-button div {
			display: flex;
			gap: 10px;
			padding-inline-start: 1em;
			padding-block: 0.5em;
			align-items: center;
			transition: box-shadow 0.3s;
		}
		.main {
			display: block;
		}
}

@media(max-width:600px) {
	dialog {
		width: 80%;
		transform: translate(-50%,-50%);
		left: 50%;
		top: 40%;
	}

	.project-card {
		padding: .5em;
		flex-grow: 1;
		flex-basis: 6em;
	}
	.side-button, .project #content > div {
		display: flex;
		flex-wrap: wrap;
		justify-content: stretch;
	}

	.side-button > * {
		flex-grow: 1;
		border: 1px solid var(--second-color);
	}
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n\tfont-family: 'logo';\n\tsrc: url('fonts/SankofaDisplay-Regular.ttf');\n}\n\n@font-face {\n\tfont-family: 'myFont';\n\tsrc: url('fonts/RobotoCondensed-VariableFont_wght.ttf');\n}\n\n/* :root {\n\t--font-size: 1.2em;\n\t--background-color: white;\n\t--first-color:#475569;\n\t--side-bar:#334155;\n\t--second-color: #e2e8f0;\n} */\n\n:root {\n\t--font-size: 1.2em;\n\t--background-color: white;\n\t--first-color:#404258;\n\t--side-bar:#474E68;\n\t--second-color: #D8D8D8;\n}\n\n\n\nbody {\n\tmargin: 0;\n\tbackground-color: var(--first-color);\n\tfont-size: 1.2em;\n\tfont-family: 'myFont';\n}\n\n.container {\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100vh;\n}\n\nbutton,\ninput {\n\tfont-family: 'myFont';\n}\n.header {\n\tpadding: 1.5em 5em;\n\tbox-shadow: 0px 0.5px 3px -2px black;\n\tcolor :white;\n\tbackground-color: var(--side-bar);\n\tdisplay: none;\n}\n\n.header h2 {\n\tfont-family: 'logo';\n\tfont-size: 2em;\n\tpadding: 0;\n\tmargin: 0;\n}\n.main {\n\tflex-grow: 1;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 5fr;\n}\n\n.sidebar {\n\tpadding: 2em 0.5em;\n\tbackground-color: var(--side-bar);\n\tdisplay: flex;\n\tflex-direction: column;\n\t/* gap: 2em; */\n\tbox-shadow: 0px 0.5px 4px -2px black;\n\n}\n\n.sidebar img {\n\theight: 1.5em;\n}\n\n.side-button {\n\tdisplay: grid;\n\tgap: 1em;\n\tcolor :white;\n\tmargin-bottom: 2em;\n}\n.side-button div {\n\tdisplay: flex;\n\tgap: 1em;\n\tpadding-inline-start: 1em;\n\tpadding-block: 0.5em;\n\talign-items: center;\n\ttransition: box-shadow 0.3s;\n}\n.side-button div:hover {\n\ttransform: scale(1.03);\n}\n\n/* project  */\n\n.add-project {\n\tfont-size: 1.5em;\n\ttext-align: center;\n\tpadding-block: 0.15em;\n\tmargin: 0 0.4em;\n\tcolor: var(--second-color);\n\tbackground-color: var(--first-color);\n\tborder: 2px solid var(--second-color);\n\ttransition: 0.3s;\n}\n.add-project:hover {\n\tbackground-color: var(--second-color);\n\tcolor: var(--first-color);\n\tborder: none;\n}\n#project-dialog {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-left: 0.5em;\n}\n\n#project-dialog input {\n\tfont-size: 1em;\n\tpadding: 0.5em;\n\twidth: 0;\n\tflex-grow: 1;\n\tmargin-bottom: 0.5em;\n\tbackground-color: var(--first-color);\n\tborder: 2px solid var(--second-color);\n}\n\n#project-dialog div {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tgap: 1em;\n\tmargin-right: 0.5em;\n}\n\n#project-dialog div button {\n\tflex: 1;\n\tfont-size: 1em;\n\tpadding: 0.5em 0;\n}\n#project-dialog div button:first-child {\n\tbackground-color: #20948b;\n\tcolor: white;\n\tborder: none;\n\toutline: none;\n}\n\n#project-dialog div button:last-child {\n\tbackground-color: var(--second-color);\n\tborder: none;\n\toutline: none;\n}\n\n.project-card {\n\tdisplay: flex;\n\tmargin: 0.5em;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding-block: 0.5em;\n\tpadding-inline: 1.2em;\n\tbackground-color: var(--second-color);\n\ttransition: box-shadow transform 0.3s;\n}\n\n.project-card:hover {\n\ttransform: scale(1.02);\n}\n.project-card img {\n\topacity: 0.5;\n\twidth: 1.3em;\n}\n\n.project-card img:hover {\n\topacity: 1;\n}\n.project h3 {\n\t/* text-align: center; */\n\tpadding: .5em;\n\tmargin: 0.5em;\n\tcolor: white;\n}\n\n/* end project */\n\n/* task  */\n\n\n.tasks .task-add {\n\tfont-size: 1em;\n\tmargin-top: 1em;\n\tborder: none;\n\twidth: 100%;\n\tpadding-block: 0.5em;\n\ttransition: 1s;\n\tcolor: var(--second-color);\n\tbackground-color: var(--first-color);\n\tborder: 2px solid var(--second-color);\n\ttransition: 0.3s;\n}\n.task-add:hover {\n\tborder: none;\n\tbackground-color: var(--second-color);\n\tcolor: var(--first-color);\n}\n.tasks {\n\tpadding-inline: 20% 20%;\n}\n.tasks #tasklist {\n\tmargin-top: 1.5em;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1em;\n}\n.tasks #tasklist h2 {\n\ttext-align: center;\n\tcolor: white;\n}\n\n.taskCard .taskContainer{\n\talign-items: center;\n\tpadding: 0.5em 1em;\n\tdisplay: grid;\n\tgrid-template-columns: 7fr 1fr;\n\tbackground-color: var(--second-color);\n}\n\n.taskCard .check {\n\theight: 1.3em;\n\twidth: 1.3em;\n\t-webkit-appearance: none; /* For Safari and Chrome */\n\t-moz-appearance: none; /* For Firefox */\n\tappearance: none;\n\tborder: 1px solid #000000;\n\tborder-radius: 50%; /* Makes the checkbox round */\n\toutline: none;\n\tcursor: pointer;\n}\n\n.taskCard .check:checked {\n\tbackground-color: var(--first-color);\n}\n\n.taskCard img {\n\twidth: 1.3em;\n\topacity: 0.5;\n}\n.taskCard img:hover {\n\topacity: 1;\n}\n/* .taskCard > * {\n    flex:1;\n} */\n.taskCard .task-text {\n\tflex-grow: 1;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.5em;\n\tmargin-right: 1em;\n}\n\n.taskCard .task-text .title {\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.task-buttons {\n\tdisplay: flex;\n\tgap: 1em;\n}\n\n.disc {\n\t/* display: none; */\n\tmax-height: 0;\n\tmargin: 0;\n\toverflow: hidden;\n\ttransform-origin: top;\n\tbackground-color: var(--second-color);\n\tpadding: 0;\n\ttransition: max-height .3s , padding .3s;\n}\n\n.disc.collapse {\n\tmax-height: 100px;\n\tpadding: 0.5em 1em;\n}\n\n.taskCard .expand {\n\tcontent: url('img/down.svg');\n\ttransition:transform 0.3s;\n\n}\n\n.taskCard .expand.collapse {\n\t/* transition:transform 0.3s; */\n\ttransform: rotate(.5turn);\n}\n\n/* end task  */\n\n#project-dialog {\n\tdisplay: none;\n}\n\n#add-task {\n\tdisplay: block;\n}\n\ndialog {\n\tbackground-color: var(--first-color);\n}\nform ul li {\n\tdisplay: grid;\n\tgap: 0.2em;\n}\n\nform ul {\n\tlist-style: none;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1em;\n\tmargin: 0;\n\tpadding: 0;\n}\n\nform {\n\tmargin-top: 1em;\n\tdisplay: flex;\n\tflex-direction: column;\n\tfont-size: 1em;\n\tgap: 1em;\n\tpadding: 1em;\n\tcolor: white;\n\tfont-weight: 400;\n}\ndialog {\n\tborder: none;\n\twidth: min(100%, 500px);\n\t/* box-shadow: 10px 10px 0px var(--second-color); */\n}\n\ndialog::backdrop {\n\tbackground-color: black;\n\topacity: 0.3;\n}\n/* form div {\n    align-self: flex-end;\n} */\n\nform div {\n\talign-self: flex-end;\n}\nform div button {\n\t/* margin: 10px;\n    padding: 10px; */\n\t/* font-size: 1em; */\n\tborder: none;\n\t/* border-radius: 15px; */\n\tpadding: 0.5em 1em;\n\tbackground-color: var(--second-color);\n\tfont-size: 1em;\n}\nform div button:last-child {\n\tcolor: white;\n\tbackground-color: #20948b;\n\tborder: none;\n}\nform input,\ntextarea,\nselect {\n\tfont-size: 1em;\n\tpadding: 0.5em;\n\tbackground-color: var(--second-color);\n\tborder: none;\n\tfont-family: 'myFont';\n\t/* border-radius: 10px; */\n}\nform input,\ntextarea,\nselect:focus {\n\toutline: none;\n}\nform li label {\n\talign-self: center;\n}\n.sidebar-show {\n\tdisplay: block;\n\ttransform : translateX(-100%)\n}\n\n@media(max-width:1000px) {\n\t\tbody{\n\t\t\tfont-size: 1rem;\n\t\t\theight: auto;\n\t\t\tposition: relative;\n\t\t}\n\t\t.tasks {\n\t\t\tmargin: 1em;\n\t\t\tpadding: 0;\n\t\t\twidth: auto;\n\t\t}\n\n\t\t.sidebar {\n\t\t\t/* width: 80%; */\n\t\t\tmargin: 1px;\n\t\t\tpadding: 10px;\n\t\t\tleft:100%;\n\t\t}\n\t\t.side-button {\n\t\t\tgap: 10px;\n\t\t\tcolor :white;\n\t\t\tmargin-bottom: 10px;\n\t\t}\n\t\t.side-button div {\n\t\t\tdisplay: flex;\n\t\t\tgap: 10px;\n\t\t\tpadding-inline-start: 1em;\n\t\t\tpadding-block: 0.5em;\n\t\t\talign-items: center;\n\t\t\ttransition: box-shadow 0.3s;\n\t\t}\n\t\t.main {\n\t\t\tdisplay: block;\n\t\t}\n}\n\n@media(max-width:600px) {\n\tdialog {\n\t\twidth: 80%;\n\t\ttransform: translate(-50%,-50%);\n\t\tleft: 50%;\n\t\ttop: 40%;\n\t}\n\n\t.project-card {\n\t\tpadding: .5em;\n\t\tflex-grow: 1;\n\t\tflex-basis: 6em;\n\t}\n\t.side-button, .project #content > div {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\tjustify-content: stretch;\n\t}\n\n\t.side-button > * {\n\t\tflex-grow: 1;\n\t\tborder: 1px solid var(--second-color);\n\t}\n}"],"sourceRoot":""}]);
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
			const change = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].changeComplete(project.getName(), index);
			if (change) {
				span1.style.textDecoration = 'line-through'
			}
			else {
				span1.style.textDecoration = 'none'
			}
			// display();
		});

		title.addEventListener('click', () => {
			const change = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].changeComplete(project.getName(), index);
			if (change) {
				span1.style.textDecoration = 'line-through';
				check.checked = true
			}
			else {
				span1.style.textDecoration = 'none';
				check.checked = false
			}
			// display();
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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isToday.mjs");
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
				if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isPast)(task.getDate()) && !task.getComplete() && !(0,date_fns__WEBPACK_IMPORTED_MODULE_3__.isToday)(task.getDate())) {
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
		return task.getComplete()
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
	const week = document.querySelector('#week');

	const shadow = 'inset 0.5em 0 #9F73AB';

	function clearAllShadows() {
		const projects = Array.from(document.querySelectorAll('.project-card'));
		projects.forEach((project) => {
			project.style.boxShadow = 'none';
		});
		today.style.boxShadow = 'none';
		due.style.boxShadow = 'none';
		home.style.boxShadow = 'none';
		week.style.boxShadow = 'none';
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

	function selectWeek(e) {
		clearAllShadows();
		week.style.boxShadow = shadow;
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
		selectWeek,
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

/***/ "./src/weekDom.js":
/*!************************!*\
  !*** ./src/weekDom.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isFuture.mjs");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/card.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/helper.js");



let Week = () => {
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
				if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isFuture)(task.getDate())) {
					_card__WEBPACK_IMPORTED_MODULE_0__["default"].create(project, task, j, todayDisplay);
				}
			}
		}
	}

	_card__WEBPACK_IMPORTED_MODULE_0__["default"].buttonListners(todayDisplay);
	todayDisplay();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Week);



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

/***/ "./src/img/upcoming.svg":
/*!******************************!*\
  !*** ./src/img/upcoming.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c567261b839b8237c8cf.svg";

/***/ }),

/***/ "./node_modules/date-fns/constructFrom.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/date-fns/constructNow.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/constructNow.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructNow: () => (/* binding */ constructNow),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");


/**
 * @name constructNow
 * @category Generic Helpers
 * @summary Constructs a new current date using the passed value constructor.
 * @pure false
 *
 * @description
 * The function constructs a new current date using the constructor from
 * the reference date. It helps to build generic functions that accept date
 * extensions and use the current date.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 *
 * @returns Current date initialized using the given date constructor
 *
 * @example
 * import { constructNow, isSameDay } from 'date-fns'
 *
 * function isToday<DateType extends Date>(
 *   date: DateType | number | string,
 * ): boolean {
 *   // If we were to use `new Date()` directly, the function would  behave
 *   // differently in different timezones and return false for the same date.
 *   return isSameDay(date, constructNow(date));
 * }
 */
function constructNow(date) {
  return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(date, Date.now());
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructNow);


/***/ }),

/***/ "./node_modules/date-fns/isFuture.mjs":
/*!********************************************!*\
  !*** ./node_modules/date-fns/isFuture.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isFuture: () => (/* binding */ isFuture)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name isFuture
 * @category Common Helpers
 * @summary Is the given date in the future?
 * @pure false
 *
 * @description
 * Is the given date in the future?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is in the future
 *
 * @example
 * // If today is 6 October 2014, is 31 December 2014 in the future?
 * const result = isFuture(new Date(2014, 11, 31))
 * //=> true
 */
function isFuture(date) {
  return +(0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date) > Date.now();
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isFuture);


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

/***/ "./node_modules/date-fns/isSameDay.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/isSameDay.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameDay: () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check

 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dateLeft, dateRight) {
  const dateLeftStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const dateRightStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  return +dateLeftStartOfDay === +dateRightStartOfDay;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameDay);


/***/ }),

/***/ "./node_modules/date-fns/isToday.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isToday.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isToday: () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _constructNow_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructNow.mjs */ "./node_modules/date-fns/constructNow.mjs");
/* harmony import */ var _isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameDay.mjs */ "./node_modules/date-fns/isSameDay.mjs");



/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(date) {
  return (0,_isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameDay)(date, (0,_constructNow_mjs__WEBPACK_IMPORTED_MODULE_1__.constructNow)(date));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isToday);


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


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
/* harmony import */ var _weekDom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weekDom.js */ "./src/weekDom.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _img_home_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/home.svg */ "./src/img/home.svg");
/* harmony import */ var _img_alert_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/alert.svg */ "./src/img/alert.svg");
/* harmony import */ var _img_today_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/today.svg */ "./src/img/today.svg");
/* harmony import */ var _img_upcoming_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/upcoming.svg */ "./src/img/upcoming.svg");
/* harmony import */ var _selected_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./selected.js */ "./src/selected.js");












const home = document.querySelector('#home');
const today = document.querySelector('#today');
const due = document.querySelector('#due');
const week = document.querySelector('#week');

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

createTabs(home, 'Home', _img_home_svg__WEBPACK_IMPORTED_MODULE_6__);
createTabs(today, 'Today', _img_today_svg__WEBPACK_IMPORTED_MODULE_8__);
createTabs(due, 'Past Due', _img_alert_svg__WEBPACK_IMPORTED_MODULE_7__);
createTabs(week, 'Up Coming',_img_upcoming_svg__WEBPACK_IMPORTED_MODULE_9__ )

_selected_js__WEBPACK_IMPORTED_MODULE_10__["default"].selectHome();
(0,_homeDom_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

home.addEventListener('click', () => {
	_selected_js__WEBPACK_IMPORTED_MODULE_10__["default"].selectHome();
	(0,_homeDom_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

today.addEventListener('click', () => {
	_selected_js__WEBPACK_IMPORTED_MODULE_10__["default"].selectToday();
	(0,_todayDom_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

due.addEventListener('click', () => {
	_selected_js__WEBPACK_IMPORTED_MODULE_10__["default"].selectDue();
	(0,_dueDom_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

week.addEventListener('click', () => {
	_selected_js__WEBPACK_IMPORTED_MODULE_10__["default"].selectWeek();
	(0,_weekDom_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
});

(0,_projectDom_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sYUFBYSxhQUFhLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsd0JBQXdCLHlCQUF5QixhQUFhLGFBQWEseUJBQXlCLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FB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Q0FBQzs7QUFFRDtBQUNBLENBQUMscURBQU07QUFDUCxDQUFDLHNEQUFHO0FBQ0osQ0FBQzs7QUFFRDtBQUNBLENBQUMscURBQU07QUFDUCxDQUFDLHVEQUFJO0FBQ0wsQ0FBQzs7QUFFRCwwREFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9Uby1kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NhcmQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kdWVEb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9ob21lRG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3REb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zZWxlY3RlZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrRG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kYXlEb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy93ZWVrRG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29uc3RydWN0RnJvbS5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdHJ1Y3ROb3cubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNGdXR1cmUubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNQYXN0Lm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzU2FtZURheS5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1RvZGF5Lm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZEYXkubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvdG9EYXRlLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImZvbnRzL1NhbmtvZmFEaXNwbGF5LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiZm9udHMvUm9ib3RvQ29uZGVuc2VkLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcImltZy9kb3duLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcblx0Zm9udC1mYW1pbHk6ICdsb2dvJztcblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogJ215Rm9udCc7XG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG4vKiA6cm9vdCB7XG5cdC0tZm9udC1zaXplOiAxLjJlbTtcblx0LS1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0LS1maXJzdC1jb2xvcjojNDc1NTY5O1xuXHQtLXNpZGUtYmFyOiMzMzQxNTU7XG5cdC0tc2Vjb25kLWNvbG9yOiAjZTJlOGYwO1xufSAqL1xuXG46cm9vdCB7XG5cdC0tZm9udC1zaXplOiAxLjJlbTtcblx0LS1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0LS1maXJzdC1jb2xvcjojNDA0MjU4O1xuXHQtLXNpZGUtYmFyOiM0NzRFNjg7XG5cdC0tc2Vjb25kLWNvbG9yOiAjRDhEOEQ4O1xufVxuXG5cblxuYm9keSB7XG5cdG1hcmdpbjogMDtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xuXHRmb250LXNpemU6IDEuMmVtO1xuXHRmb250LWZhbWlseTogJ215Rm9udCc7XG59XG5cbi5jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRoZWlnaHQ6IDEwMHZoO1xufVxuXG5idXR0b24sXG5pbnB1dCB7XG5cdGZvbnQtZmFtaWx5OiAnbXlGb250Jztcbn1cbi5oZWFkZXIge1xuXHRwYWRkaW5nOiAxLjVlbSA1ZW07XG5cdGJveC1zaGFkb3c6IDBweCAwLjVweCAzcHggLTJweCBibGFjaztcblx0Y29sb3IgOndoaXRlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlLWJhcik7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oZWFkZXIgaDIge1xuXHRmb250LWZhbWlseTogJ2xvZ28nO1xuXHRmb250LXNpemU6IDJlbTtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwO1xufVxuLm1haW4ge1xuXHRmbGV4LWdyb3c6IDE7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcbn1cblxuLnNpZGViYXIge1xuXHRwYWRkaW5nOiAyZW0gMC41ZW07XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtYmFyKTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0LyogZ2FwOiAyZW07ICovXG5cdGJveC1zaGFkb3c6IDBweCAwLjVweCA0cHggLTJweCBibGFjaztcblxufVxuXG4uc2lkZWJhciBpbWcge1xuXHRoZWlnaHQ6IDEuNWVtO1xufVxuXG4uc2lkZS1idXR0b24ge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRnYXA6IDFlbTtcblx0Y29sb3IgOndoaXRlO1xuXHRtYXJnaW4tYm90dG9tOiAyZW07XG59XG4uc2lkZS1idXR0b24gZGl2IHtcblx0ZGlzcGxheTogZmxleDtcblx0Z2FwOiAxZW07XG5cdHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxZW07XG5cdHBhZGRpbmctYmxvY2s6IDAuNWVtO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3M7XG59XG4uc2lkZS1idXR0b24gZGl2OmhvdmVyIHtcblx0dHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbn1cblxuLyogcHJvamVjdCAgKi9cblxuLmFkZC1wcm9qZWN0IHtcblx0Zm9udC1zaXplOiAxLjVlbTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRwYWRkaW5nLWJsb2NrOiAwLjE1ZW07XG5cdG1hcmdpbjogMCAwLjRlbTtcblx0Y29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcblx0Ym9yZGVyOiAycHggc29saWQgdmFyKC0tc2Vjb25kLWNvbG9yKTtcblx0dHJhbnNpdGlvbjogMC4zcztcbn1cbi5hZGQtcHJvamVjdDpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XG5cdGNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XG5cdGJvcmRlcjogbm9uZTtcbn1cbiNwcm9qZWN0LWRpYWxvZyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdG1hcmdpbi1sZWZ0OiAwLjVlbTtcbn1cblxuI3Byb2plY3QtZGlhbG9nIGlucHV0IHtcblx0Zm9udC1zaXplOiAxZW07XG5cdHBhZGRpbmc6IDAuNWVtO1xuXHR3aWR0aDogMDtcblx0ZmxleC1ncm93OiAxO1xuXHRtYXJnaW4tYm90dG9tOiAwLjVlbTtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xuXHRib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmQtY29sb3IpO1xufVxuXG4jcHJvamVjdC1kaWFsb2cgZGl2IHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRnYXA6IDFlbTtcblx0bWFyZ2luLXJpZ2h0OiAwLjVlbTtcbn1cblxuI3Byb2plY3QtZGlhbG9nIGRpdiBidXR0b24ge1xuXHRmbGV4OiAxO1xuXHRmb250LXNpemU6IDFlbTtcblx0cGFkZGluZzogMC41ZW0gMDtcbn1cbiNwcm9qZWN0LWRpYWxvZyBkaXYgYnV0dG9uOmZpcnN0LWNoaWxkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzIwOTQ4Yjtcblx0Y29sb3I6IHdoaXRlO1xuXHRib3JkZXI6IG5vbmU7XG5cdG91dGxpbmU6IG5vbmU7XG59XG5cbiNwcm9qZWN0LWRpYWxvZyBkaXYgYnV0dG9uOmxhc3QtY2hpbGQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xuXHRib3JkZXI6IG5vbmU7XG5cdG91dGxpbmU6IG5vbmU7XG59XG5cbi5wcm9qZWN0LWNhcmQge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRtYXJnaW46IDAuNWVtO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdHBhZGRpbmctYmxvY2s6IDAuNWVtO1xuXHRwYWRkaW5nLWlubGluZTogMS4yZW07XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XG5cdHRyYW5zaXRpb246IGJveC1zaGFkb3cgdHJhbnNmb3JtIDAuM3M7XG59XG5cbi5wcm9qZWN0LWNhcmQ6aG92ZXIge1xuXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xufVxuLnByb2plY3QtY2FyZCBpbWcge1xuXHRvcGFjaXR5OiAwLjU7XG5cdHdpZHRoOiAxLjNlbTtcbn1cblxuLnByb2plY3QtY2FyZCBpbWc6aG92ZXIge1xuXHRvcGFjaXR5OiAxO1xufVxuLnByb2plY3QgaDMge1xuXHQvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG5cdHBhZGRpbmc6IC41ZW07XG5cdG1hcmdpbjogMC41ZW07XG5cdGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogZW5kIHByb2plY3QgKi9cblxuLyogdGFzayAgKi9cblxuXG4udGFza3MgLnRhc2stYWRkIHtcblx0Zm9udC1zaXplOiAxZW07XG5cdG1hcmdpbi10b3A6IDFlbTtcblx0Ym9yZGVyOiBub25lO1xuXHR3aWR0aDogMTAwJTtcblx0cGFkZGluZy1ibG9jazogMC41ZW07XG5cdHRyYW5zaXRpb246IDFzO1xuXHRjb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xuXHRib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmQtY29sb3IpO1xuXHR0cmFuc2l0aW9uOiAwLjNzO1xufVxuLnRhc2stYWRkOmhvdmVyIHtcblx0Ym9yZGVyOiBub25lO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xuXHRjb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xufVxuLnRhc2tzIHtcblx0cGFkZGluZy1pbmxpbmU6IDIwJSAyMCU7XG59XG4udGFza3MgI3Rhc2tsaXN0IHtcblx0bWFyZ2luLXRvcDogMS41ZW07XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMWVtO1xufVxuLnRhc2tzICN0YXNrbGlzdCBoMiB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Y29sb3I6IHdoaXRlO1xufVxuXG4udGFza0NhcmQgLnRhc2tDb250YWluZXJ7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHBhZGRpbmc6IDAuNWVtIDFlbTtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3ZnIgMWZyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xufVxuXG4udGFza0NhcmQgLmNoZWNrIHtcblx0aGVpZ2h0OiAxLjNlbTtcblx0d2lkdGg6IDEuM2VtO1xuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IC8qIEZvciBTYWZhcmkgYW5kIENocm9tZSAqL1xuXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7IC8qIEZvciBGaXJlZm94ICovXG5cdGFwcGVhcmFuY2U6IG5vbmU7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTsgLyogTWFrZXMgdGhlIGNoZWNrYm94IHJvdW5kICovXG5cdG91dGxpbmU6IG5vbmU7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2tDYXJkIC5jaGVjazpjaGVja2VkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xufVxuXG4udGFza0NhcmQgaW1nIHtcblx0d2lkdGg6IDEuM2VtO1xuXHRvcGFjaXR5OiAwLjU7XG59XG4udGFza0NhcmQgaW1nOmhvdmVyIHtcblx0b3BhY2l0eTogMTtcbn1cbi8qIC50YXNrQ2FyZCA+ICoge1xuICAgIGZsZXg6MTtcbn0gKi9cbi50YXNrQ2FyZCAudGFzay10ZXh0IHtcblx0ZmxleC1ncm93OiAxO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDAuNWVtO1xuXHRtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cblxuLnRhc2tDYXJkIC50YXNrLXRleHQgLnRpdGxlIHtcblx0d2lkdGg6IDEwMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnRhc2stYnV0dG9ucyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogMWVtO1xufVxuXG4uZGlzYyB7XG5cdC8qIGRpc3BsYXk6IG5vbmU7ICovXG5cdG1heC1oZWlnaHQ6IDA7XG5cdG1hcmdpbjogMDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0dHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xuXHRwYWRkaW5nOiAwO1xuXHR0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IC4zcyAsIHBhZGRpbmcgLjNzO1xufVxuXG4uZGlzYy5jb2xsYXBzZSB7XG5cdG1heC1oZWlnaHQ6IDEwMHB4O1xuXHRwYWRkaW5nOiAwLjVlbSAxZW07XG59XG5cbi50YXNrQ2FyZCAuZXhwYW5kIHtcblx0Y29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuXHR0cmFuc2l0aW9uOnRyYW5zZm9ybSAwLjNzO1xuXG59XG5cbi50YXNrQ2FyZCAuZXhwYW5kLmNvbGxhcHNlIHtcblx0LyogdHJhbnNpdGlvbjp0cmFuc2Zvcm0gMC4zczsgKi9cblx0dHJhbnNmb3JtOiByb3RhdGUoLjV0dXJuKTtcbn1cblxuLyogZW5kIHRhc2sgICovXG5cbiNwcm9qZWN0LWRpYWxvZyB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbiNhZGQtdGFzayB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG5kaWFsb2cge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XG59XG5mb3JtIHVsIGxpIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z2FwOiAwLjJlbTtcbn1cblxuZm9ybSB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMWVtO1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG59XG5cbmZvcm0ge1xuXHRtYXJnaW4tdG9wOiAxZW07XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGZvbnQtc2l6ZTogMWVtO1xuXHRnYXA6IDFlbTtcblx0cGFkZGluZzogMWVtO1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5kaWFsb2cge1xuXHRib3JkZXI6IG5vbmU7XG5cdHdpZHRoOiBtaW4oMTAwJSwgNTAwcHgpO1xuXHQvKiBib3gtc2hhZG93OiAxMHB4IDEwcHggMHB4IHZhcigtLXNlY29uZC1jb2xvcik7ICovXG59XG5cbmRpYWxvZzo6YmFja2Ryb3Age1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcblx0b3BhY2l0eTogMC4zO1xufVxuLyogZm9ybSBkaXYge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufSAqL1xuXG5mb3JtIGRpdiB7XG5cdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuZm9ybSBkaXYgYnV0dG9uIHtcblx0LyogbWFyZ2luOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7ICovXG5cdC8qIGZvbnQtc2l6ZTogMWVtOyAqL1xuXHRib3JkZXI6IG5vbmU7XG5cdC8qIGJvcmRlci1yYWRpdXM6IDE1cHg7ICovXG5cdHBhZGRpbmc6IDAuNWVtIDFlbTtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcblx0Zm9udC1zaXplOiAxZW07XG59XG5mb3JtIGRpdiBidXR0b246bGFzdC1jaGlsZCB7XG5cdGNvbG9yOiB3aGl0ZTtcblx0YmFja2dyb3VuZC1jb2xvcjogIzIwOTQ4Yjtcblx0Ym9yZGVyOiBub25lO1xufVxuZm9ybSBpbnB1dCxcbnRleHRhcmVhLFxuc2VsZWN0IHtcblx0Zm9udC1zaXplOiAxZW07XG5cdHBhZGRpbmc6IDAuNWVtO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xuXHRib3JkZXI6IG5vbmU7XG5cdGZvbnQtZmFtaWx5OiAnbXlGb250Jztcblx0LyogYm9yZGVyLXJhZGl1czogMTBweDsgKi9cbn1cbmZvcm0gaW5wdXQsXG50ZXh0YXJlYSxcbnNlbGVjdDpmb2N1cyB7XG5cdG91dGxpbmU6IG5vbmU7XG59XG5mb3JtIGxpIGxhYmVsIHtcblx0YWxpZ24tc2VsZjogY2VudGVyO1xufVxuLnNpZGViYXItc2hvdyB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHR0cmFuc2Zvcm0gOiB0cmFuc2xhdGVYKC0xMDAlKVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOjEwMDBweCkge1xuXHRcdGJvZHl7XG5cdFx0XHRmb250LXNpemU6IDFyZW07XG5cdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0fVxuXHRcdC50YXNrcyB7XG5cdFx0XHRtYXJnaW46IDFlbTtcblx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHR3aWR0aDogYXV0bztcblx0XHR9XG5cblx0XHQuc2lkZWJhciB7XG5cdFx0XHQvKiB3aWR0aDogODAlOyAqL1xuXHRcdFx0bWFyZ2luOiAxcHg7XG5cdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0bGVmdDoxMDAlO1xuXHRcdH1cblx0XHQuc2lkZS1idXR0b24ge1xuXHRcdFx0Z2FwOiAxMHB4O1xuXHRcdFx0Y29sb3IgOndoaXRlO1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHR9XG5cdFx0LnNpZGUtYnV0dG9uIGRpdiB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0Z2FwOiAxMHB4O1xuXHRcdFx0cGFkZGluZy1pbmxpbmUtc3RhcnQ6IDFlbTtcblx0XHRcdHBhZGRpbmctYmxvY2s6IDAuNWVtO1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcztcblx0XHR9XG5cdFx0Lm1haW4ge1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0fVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOjYwMHB4KSB7XG5cdGRpYWxvZyB7XG5cdFx0d2lkdGg6IDgwJTtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuXHRcdGxlZnQ6IDUwJTtcblx0XHR0b3A6IDQwJTtcblx0fVxuXG5cdC5wcm9qZWN0LWNhcmQge1xuXHRcdHBhZGRpbmc6IC41ZW07XG5cdFx0ZmxleC1ncm93OiAxO1xuXHRcdGZsZXgtYmFzaXM6IDZlbTtcblx0fVxuXHQuc2lkZS1idXR0b24sIC5wcm9qZWN0ICNjb250ZW50ID4gZGl2IHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG5cdH1cblxuXHQuc2lkZS1idXR0b24gPiAqIHtcblx0XHRmbGV4LWdyb3c6IDE7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kLWNvbG9yKTtcblx0fVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLG1CQUFtQjtDQUNuQiw0Q0FBNEM7QUFDN0M7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsNENBQXVEO0FBQ3hEOztBQUVBOzs7Ozs7R0FNRzs7QUFFSDtDQUNDLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQix1QkFBdUI7QUFDeEI7Ozs7QUFJQTtDQUNDLFNBQVM7Q0FDVCxv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eUJBQXlCO0NBQ3pCLGtCQUFrQjtDQUNsQixxQ0FBcUM7Q0FDckMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxZQUFZO0NBQ1oseUJBQXlCO0NBQ3pCLFlBQVk7QUFDYjtBQUNBOzs7Q0FHQyxjQUFjO0NBQ2QsY0FBYztDQUNkLHFDQUFxQztDQUNyQyxZQUFZO0NBQ1oscUJBQXFCO0NBQ3JCLHlCQUF5QjtBQUMxQjtBQUNBOzs7Q0FHQyxhQUFhO0FBQ2Q7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsY0FBYztDQUNkO0FBQ0Q7O0FBRUE7RUFDRTtHQUNDLGVBQWU7R0FDZixZQUFZO0dBQ1osa0JBQWtCO0VBQ25CO0VBQ0E7R0FDQyxXQUFXO0dBQ1gsVUFBVTtHQUNWLFdBQVc7RUFDWjs7RUFFQTtHQUNDLGdCQUFnQjtHQUNoQixXQUFXO0dBQ1gsYUFBYTtHQUNiLFNBQVM7RUFDVjtFQUNBO0dBQ0MsU0FBUztHQUNULFlBQVk7R0FDWixtQkFBbUI7RUFDcEI7RUFDQTtHQUNDLGFBQWE7R0FDYixTQUFTO0dBQ1QseUJBQXlCO0dBQ3pCLG9CQUFvQjtHQUNwQixtQkFBbUI7R0FDbkIsMkJBQTJCO0VBQzVCO0VBQ0E7R0FDQyxjQUFjO0VBQ2Y7QUFDRjs7QUFFQTtDQUNDO0VBQ0MsVUFBVTtFQUNWLCtCQUErQjtFQUMvQixTQUFTO0VBQ1QsUUFBUTtDQUNUOztDQUVBO0VBQ0MsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0NBQ2hCO0NBQ0E7RUFDQyxhQUFhO0VBQ2IsZUFBZTtFQUNmLHdCQUF3QjtDQUN6Qjs7Q0FFQTtFQUNDLFlBQVk7RUFDWixxQ0FBcUM7Q0FDdEM7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ2xvZ28nO1xcblxcdHNyYzogdXJsKCdmb250cy9TYW5rb2ZhRGlzcGxheS1SZWd1bGFyLnR0ZicpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ215Rm9udCc7XFxuXFx0c3JjOiB1cmwoJ2ZvbnRzL1JvYm90b0NvbmRlbnNlZC1WYXJpYWJsZUZvbnRfd2dodC50dGYnKTtcXG59XFxuXFxuLyogOnJvb3Qge1xcblxcdC0tZm9udC1zaXplOiAxLjJlbTtcXG5cXHQtLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdC0tZmlyc3QtY29sb3I6IzQ3NTU2OTtcXG5cXHQtLXNpZGUtYmFyOiMzMzQxNTU7XFxuXFx0LS1zZWNvbmQtY29sb3I6ICNlMmU4ZjA7XFxufSAqL1xcblxcbjpyb290IHtcXG5cXHQtLWZvbnQtc2l6ZTogMS4yZW07XFxuXFx0LS1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHQtLWZpcnN0LWNvbG9yOiM0MDQyNTg7XFxuXFx0LS1zaWRlLWJhcjojNDc0RTY4O1xcblxcdC0tc2Vjb25kLWNvbG9yOiAjRDhEOEQ4O1xcbn1cXG5cXG5cXG5cXG5ib2R5IHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xcblxcdGZvbnQtc2l6ZTogMS4yZW07XFxuXFx0Zm9udC1mYW1pbHk6ICdteUZvbnQnO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG5cXHRmb250LWZhbWlseTogJ215Rm9udCc7XFxufVxcbi5oZWFkZXIge1xcblxcdHBhZGRpbmc6IDEuNWVtIDVlbTtcXG5cXHRib3gtc2hhZG93OiAwcHggMC41cHggM3B4IC0ycHggYmxhY2s7XFxuXFx0Y29sb3IgOndoaXRlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtYmFyKTtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGVhZGVyIGgyIHtcXG5cXHRmb250LWZhbWlseTogJ2xvZ28nO1xcblxcdGZvbnQtc2l6ZTogMmVtO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG4ubWFpbiB7XFxuXFx0ZmxleC1ncm93OiAxO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuXFx0cGFkZGluZzogMmVtIDAuNWVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtYmFyKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0LyogZ2FwOiAyZW07ICovXFxuXFx0Ym94LXNoYWRvdzogMHB4IDAuNXB4IDRweCAtMnB4IGJsYWNrO1xcblxcbn1cXG5cXG4uc2lkZWJhciBpbWcge1xcblxcdGhlaWdodDogMS41ZW07XFxufVxcblxcbi5zaWRlLWJ1dHRvbiB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRnYXA6IDFlbTtcXG5cXHRjb2xvciA6d2hpdGU7XFxuXFx0bWFyZ2luLWJvdHRvbTogMmVtO1xcbn1cXG4uc2lkZS1idXR0b24gZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMWVtO1xcblxcdHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxZW07XFxuXFx0cGFkZGluZy1ibG9jazogMC41ZW07XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3M7XFxufVxcbi5zaWRlLWJ1dHRvbiBkaXY6aG92ZXIge1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcblxcbi8qIHByb2plY3QgICovXFxuXFxuLmFkZC1wcm9qZWN0IHtcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRwYWRkaW5nLWJsb2NrOiAwLjE1ZW07XFxuXFx0bWFyZ2luOiAwIDAuNGVtO1xcblxcdGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmQtY29sb3IpO1xcblxcdHRyYW5zaXRpb246IDAuM3M7XFxufVxcbi5hZGQtcHJvamVjdDpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG5cXHRjb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xcblxcdGJvcmRlcjogbm9uZTtcXG59XFxuI3Byb2plY3QtZGlhbG9nIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0bWFyZ2luLWxlZnQ6IDAuNWVtO1xcbn1cXG5cXG4jcHJvamVjdC1kaWFsb2cgaW5wdXQge1xcblxcdGZvbnQtc2l6ZTogMWVtO1xcblxcdHBhZGRpbmc6IDAuNWVtO1xcblxcdHdpZHRoOiAwO1xcblxcdGZsZXgtZ3JvdzogMTtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG59XFxuXFxuI3Byb2plY3QtZGlhbG9nIGRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0Z2FwOiAxZW07XFxuXFx0bWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG59XFxuXFxuI3Byb2plY3QtZGlhbG9nIGRpdiBidXR0b24ge1xcblxcdGZsZXg6IDE7XFxuXFx0Zm9udC1zaXplOiAxZW07XFxuXFx0cGFkZGluZzogMC41ZW0gMDtcXG59XFxuI3Byb2plY3QtZGlhbG9nIGRpdiBidXR0b246Zmlyc3QtY2hpbGQge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyMDk0OGI7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jcHJvamVjdC1kaWFsb2cgZGl2IGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdG1hcmdpbjogMC41ZW07XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0cGFkZGluZy1ibG9jazogMC41ZW07XFxuXFx0cGFkZGluZy1pbmxpbmU6IDEuMmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XFxuXFx0dHJhbnNpdGlvbjogYm94LXNoYWRvdyB0cmFuc2Zvcm0gMC4zcztcXG59XFxuXFxuLnByb2plY3QtY2FyZDpob3ZlciB7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG59XFxuLnByb2plY3QtY2FyZCBpbWcge1xcblxcdG9wYWNpdHk6IDAuNTtcXG5cXHR3aWR0aDogMS4zZW07XFxufVxcblxcbi5wcm9qZWN0LWNhcmQgaW1nOmhvdmVyIHtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG4ucHJvamVjdCBoMyB7XFxuXFx0LyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcblxcdHBhZGRpbmc6IC41ZW07XFxuXFx0bWFyZ2luOiAwLjVlbTtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIGVuZCBwcm9qZWN0ICovXFxuXFxuLyogdGFzayAgKi9cXG5cXG5cXG4udGFza3MgLnRhc2stYWRkIHtcXG5cXHRmb250LXNpemU6IDFlbTtcXG5cXHRtYXJnaW4tdG9wOiAxZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHBhZGRpbmctYmxvY2s6IDAuNWVtO1xcblxcdHRyYW5zaXRpb246IDFzO1xcblxcdGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmQtY29sb3IpO1xcblxcdHRyYW5zaXRpb246IDAuM3M7XFxufVxcbi50YXNrLWFkZDpob3ZlciB7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XFxuXFx0Y29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcXG59XFxuLnRhc2tzIHtcXG5cXHRwYWRkaW5nLWlubGluZTogMjAlIDIwJTtcXG59XFxuLnRhc2tzICN0YXNrbGlzdCB7XFxuXFx0bWFyZ2luLXRvcDogMS41ZW07XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMWVtO1xcbn1cXG4udGFza3MgI3Rhc2tsaXN0IGgyIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFza0NhcmQgLnRhc2tDb250YWluZXJ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAwLjVlbSAxZW07XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDdmciAxZnI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG59XFxuXFxuLnRhc2tDYXJkIC5jaGVjayB7XFxuXFx0aGVpZ2h0OiAxLjNlbTtcXG5cXHR3aWR0aDogMS4zZW07XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAvKiBGb3IgU2FmYXJpIGFuZCBDaHJvbWUgKi9cXG5cXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7IC8qIEZvciBGaXJlZm94ICovXFxuXFx0YXBwZWFyYW5jZTogbm9uZTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTsgLyogTWFrZXMgdGhlIGNoZWNrYm94IHJvdW5kICovXFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrQ2FyZCAuY2hlY2s6Y2hlY2tlZCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xcbn1cXG5cXG4udGFza0NhcmQgaW1nIHtcXG5cXHR3aWR0aDogMS4zZW07XFxuXFx0b3BhY2l0eTogMC41O1xcbn1cXG4udGFza0NhcmQgaW1nOmhvdmVyIHtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG4vKiAudGFza0NhcmQgPiAqIHtcXG4gICAgZmxleDoxO1xcbn0gKi9cXG4udGFza0NhcmQgLnRhc2stdGV4dCB7XFxuXFx0ZmxleC1ncm93OiAxO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDAuNWVtO1xcblxcdG1hcmdpbi1yaWdodDogMWVtO1xcbn1cXG5cXG4udGFza0NhcmQgLnRhc2stdGV4dCAudGl0bGUge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGFzay1idXR0b25zIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMWVtO1xcbn1cXG5cXG4uZGlzYyB7XFxuXFx0LyogZGlzcGxheTogbm9uZTsgKi9cXG5cXHRtYXgtaGVpZ2h0OiAwO1xcblxcdG1hcmdpbjogMDtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0dHJhbnNpdGlvbjogbWF4LWhlaWdodCAuM3MgLCBwYWRkaW5nIC4zcztcXG59XFxuXFxuLmRpc2MuY29sbGFwc2Uge1xcblxcdG1heC1oZWlnaHQ6IDEwMHB4O1xcblxcdHBhZGRpbmc6IDAuNWVtIDFlbTtcXG59XFxuXFxuLnRhc2tDYXJkIC5leHBhbmQge1xcblxcdGNvbnRlbnQ6IHVybCgnaW1nL2Rvd24uc3ZnJyk7XFxuXFx0dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMC4zcztcXG5cXG59XFxuXFxuLnRhc2tDYXJkIC5leHBhbmQuY29sbGFwc2Uge1xcblxcdC8qIHRyYW5zaXRpb246dHJhbnNmb3JtIDAuM3M7ICovXFxuXFx0dHJhbnNmb3JtOiByb3RhdGUoLjV0dXJuKTtcXG59XFxuXFxuLyogZW5kIHRhc2sgICovXFxuXFxuI3Byb2plY3QtZGlhbG9nIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jYWRkLXRhc2sge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5kaWFsb2cge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcXG59XFxuZm9ybSB1bCBsaSB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRnYXA6IDAuMmVtO1xcbn1cXG5cXG5mb3JtIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDFlbTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuZm9ybSB7XFxuXFx0bWFyZ2luLXRvcDogMWVtO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRmb250LXNpemU6IDFlbTtcXG5cXHRnYXA6IDFlbTtcXG5cXHRwYWRkaW5nOiAxZW07XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbmRpYWxvZyB7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHdpZHRoOiBtaW4oMTAwJSwgNTAwcHgpO1xcblxcdC8qIGJveC1zaGFkb3c6IDEwcHggMTBweCAwcHggdmFyKC0tc2Vjb25kLWNvbG9yKTsgKi9cXG59XFxuXFxuZGlhbG9nOjpiYWNrZHJvcCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFx0b3BhY2l0eTogMC4zO1xcbn1cXG4vKiBmb3JtIGRpdiB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn0gKi9cXG5cXG5mb3JtIGRpdiB7XFxuXFx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcbmZvcm0gZGl2IGJ1dHRvbiB7XFxuXFx0LyogbWFyZ2luOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4OyAqL1xcblxcdC8qIGZvbnQtc2l6ZTogMWVtOyAqL1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHQvKiBib3JkZXItcmFkaXVzOiAxNXB4OyAqL1xcblxcdHBhZGRpbmc6IDAuNWVtIDFlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xcblxcdGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5mb3JtIGRpdiBidXR0b246bGFzdC1jaGlsZCB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyMDk0OGI7XFxuXFx0Ym9yZGVyOiBub25lO1xcbn1cXG5mb3JtIGlucHV0LFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuXFx0Zm9udC1zaXplOiAxZW07XFxuXFx0cGFkZGluZzogMC41ZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Zm9udC1mYW1pbHk6ICdteUZvbnQnO1xcblxcdC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXFxufVxcbmZvcm0gaW5wdXQsXFxudGV4dGFyZWEsXFxuc2VsZWN0OmZvY3VzIHtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG5mb3JtIGxpIGxhYmVsIHtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5zaWRlYmFyLXNob3cge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdHRyYW5zZm9ybSA6IHRyYW5zbGF0ZVgoLTEwMCUpXFxufVxcblxcbkBtZWRpYShtYXgtd2lkdGg6MTAwMHB4KSB7XFxuXFx0XFx0Ym9keXtcXG5cXHRcXHRcXHRmb250LXNpemU6IDFyZW07XFxuXFx0XFx0XFx0aGVpZ2h0OiBhdXRvO1xcblxcdFxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRcXHR9XFxuXFx0XFx0LnRhc2tzIHtcXG5cXHRcXHRcXHRtYXJnaW46IDFlbTtcXG5cXHRcXHRcXHRwYWRkaW5nOiAwO1xcblxcdFxcdFxcdHdpZHRoOiBhdXRvO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQuc2lkZWJhciB7XFxuXFx0XFx0XFx0Lyogd2lkdGg6IDgwJTsgKi9cXG5cXHRcXHRcXHRtYXJnaW46IDFweDtcXG5cXHRcXHRcXHRwYWRkaW5nOiAxMHB4O1xcblxcdFxcdFxcdGxlZnQ6MTAwJTtcXG5cXHRcXHR9XFxuXFx0XFx0LnNpZGUtYnV0dG9uIHtcXG5cXHRcXHRcXHRnYXA6IDEwcHg7XFxuXFx0XFx0XFx0Y29sb3IgOndoaXRlO1xcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxuXFx0XFx0fVxcblxcdFxcdC5zaWRlLWJ1dHRvbiBkaXYge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0Z2FwOiAxMHB4O1xcblxcdFxcdFxcdHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxZW07XFxuXFx0XFx0XFx0cGFkZGluZy1ibG9jazogMC41ZW07XFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRcXHR0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3M7XFxuXFx0XFx0fVxcblxcdFxcdC5tYWluIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHR9XFxufVxcblxcbkBtZWRpYShtYXgtd2lkdGg6NjAwcHgpIHtcXG5cXHRkaWFsb2cge1xcblxcdFxcdHdpZHRoOiA4MCU7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXG5cXHRcXHRsZWZ0OiA1MCU7XFxuXFx0XFx0dG9wOiA0MCU7XFxuXFx0fVxcblxcblxcdC5wcm9qZWN0LWNhcmQge1xcblxcdFxcdHBhZGRpbmc6IC41ZW07XFxuXFx0XFx0ZmxleC1ncm93OiAxO1xcblxcdFxcdGZsZXgtYmFzaXM6IDZlbTtcXG5cXHR9XFxuXFx0LnNpZGUtYnV0dG9uLCAucHJvamVjdCAjY29udGVudCA+IGRpdiB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcblxcdH1cXG5cXG5cXHQuc2lkZS1idXR0b24gPiAqIHtcXG5cXHRcXHRmbGV4LWdyb3c6IDE7XFxuXFx0XFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG5cXHR9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgaGVscGVyIGZyb20gJy4vaGVscGVyJztcbmNsYXNzIFRvZG8ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnByb2plY3RzID0gW107XG5cdH1cblxuXHRzZXRQcm9qZWN0KHByb2plY3RzKSB7XG5cdFx0dGhpcy5wcm9qZWN0cyA9IHByb2plY3RzO1xuXHR9XG5cblx0YWRkUHJvamVjdChuYW1lKSB7XG5cdFx0Y29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuXHRcdHRoaXMucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcblx0XHQvLyBoZWxwZXIudXBkYXRlTG9jYWxTdG9yYWdlKClcblx0fVxuXG5cdHJlbW92ZVByb2plY3QoaW5kZXgpIHtcblx0XHR0aGlzLnByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0Ly8gaGVscGVyLnVwZGF0ZUxvY2FsU3RvcmFnZSgpXG5cdH1cblxuXHRnZXRQcm9qZWN0cygpIHtcblx0XHRyZXR1cm4gdGhpcy5wcm9qZWN0cztcblx0fVxuXG5cdGdldFByb2plY3QobmFtZSkge1xuXHRcdGNvbnN0IHJlc3VsdCA9IHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IG5hbWUpO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiIsImltcG9ydCBoZWxwZXIgZnJvbSAnLi9oZWxwZXInO1xuaW1wb3J0IGVkaXRTdmcgZnJvbSAnLi9pbWcvZWRpdC5zdmcnO1xuaW1wb3J0IGRlbGV0ZVN2ZyBmcm9tICcuL2ltZy9kZWxldGUuc3ZnJztcblxuY29uc3QgY2FyZCA9ICgoKSA9PiB7XG5cdGxldCBjdXJyZW50SW5kZXggPSBudWxsO1xuXHRsZXQgcHJvamVjdE5hbWUgPSAnJztcblx0Y29uc3QgZGlhbG9nRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stZGlhbG9nJyk7XG5cdGNvbnN0IHRpdGxlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stdGl0bGUnKTtcblx0Y29uc3QgZGF0ZUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLWRhdGUnKTtcblx0Y29uc3QgcHJpb3JpdHlFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1wcmlvcml0eScpO1xuXHRjb25zdCBkaXNjcmlwdGlvbkVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLWluZm8nKTtcblx0bGV0IHZpc2libGUgPSBmYWxzZVxuXHRsZXQgbGlzdCA9IFtdO1xuXG5cdGZ1bmN0aW9uIHNldFByaW9yaXR5KHRhc2ssIHRhc2tDYXJkKSB7XG5cdFx0Y29uc3QgcHJpb3JpdHkgPSB0YXNrLmdldFByaW9yaXR5KCk7XG5cdFx0aWYgKHByaW9yaXR5ID09PSAnSGlnaCcpIHtcblx0XHRcdHRhc2tDYXJkLnN0eWxlLmJveFNoYWRvdyA9ICdpbnNldCAwLjNlbSAwICNGNTI1NDknO1xuXHRcdH1cblxuXHRcdGlmIChwcmlvcml0eSA9PT0gJ01lZGl1bScpIHtcblx0XHRcdHRhc2tDYXJkLnN0eWxlLmJveFNoYWRvdyA9ICdpbnNldCAwLjNlbSAwICNGOTg4NjYnO1xuXHRcdH1cblxuXHRcdGlmIChwcmlvcml0eSA9PT0gJ0xvdycpIHtcblx0XHRcdHRhc2tDYXJkLnN0eWxlLmJveFNoYWRvdyA9ICdpbnNldCAwLjNlbSAwICMxRTI3NjEnO1xuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBjcmVhdGUocHJvamVjdCwgdGFzaywgaW5kZXgsIGRpc3BsYXkpIHtcblx0XHRsaXN0ID0gaGVscGVyLmdldFRhc2tzKHByb2plY3QuZ2V0TmFtZSgpKTtcblx0XHRjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKCd0YXNrQ2FyZCcpO1xuXHRcdHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFza0NvbnRhaW5lcicpO1xuXHRcdGNvbnN0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0ZXh0RGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGV4dCcpO1xuXHRcdGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSU5QVVQnKTtcblx0XHRjaGVjay5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcblx0XHRjaGVjay5jbGFzc0xpc3QuYWRkKCdjaGVjaycpO1xuXHRcdGNoZWNrLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcblx0XHRjaGVjay5jaGVja2VkID0gdGFzay5nZXRDb21wbGV0ZSgpO1xuXHRcdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcblx0XHRjb25zdCBzcGFuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRzcGFuMS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG5cdFx0Y29uc3Qgc3BhbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0Y29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0YnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stYnV0dG9ucycpO1xuXHRcdGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRcdGRlbC5zcmMgPSBkZWxldGVTdmc7XG5cdFx0ZGVsLmFsdCA9ICdEZWxldGUnO1xuXHRcdGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0XHRlZGl0LnNyYyA9IGVkaXRTdmc7XG5cdFx0ZWRpdC5hbHQgPSAnRWRpdCc7XG5cdFx0ZWRpdC5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG5cdFx0ZWRpdC5kYXRhc2V0LnByb2plY3QgPSBwcm9qZWN0LmdldE5hbWUoKTtcblx0XHRkZWwuZGF0YXNldC5wcm9qZWN0ID0gcHJvamVjdC5nZXROYW1lKCk7XG5cdFx0ZGVsLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcblx0XHRzcGFuMS50ZXh0Q29udGVudCA9IHRhc2suZ2V0VGl0bGUoKTtcblx0XHRzcGFuMi50ZXh0Q29udGVudCA9IHRhc2suZ2V0RGF0ZSgpO1xuXG5cdFx0dGFza0NhcmQuZGF0YXNldC52aXNpYmxlID0gdmlzaWJsZVxuXHRcdC8vIHNldFByaW9yaXR5KHRhc2ssIHRhc2tDYXJkKTtcblx0XHRzZXRQcmlvcml0eSh0YXNrLCB0YXNrQ29udGFpbmVyKTtcblxuXHRcdGlmICh0YXNrLmdldENvbXBsZXRlKCkpIHtcblx0XHRcdHNwYW4xLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG5cdFx0fVxuXG5cdFx0Y2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRjb25zdCBjaGFuZ2UgPSBoZWxwZXIuY2hhbmdlQ29tcGxldGUocHJvamVjdC5nZXROYW1lKCksIGluZGV4KTtcblx0XHRcdGlmIChjaGFuZ2UpIHtcblx0XHRcdFx0c3BhbjEuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJ1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHNwYW4xLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnXG5cdFx0XHR9XG5cdFx0XHQvLyBkaXNwbGF5KCk7XG5cdFx0fSk7XG5cblx0XHR0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdGNvbnN0IGNoYW5nZSA9IGhlbHBlci5jaGFuZ2VDb21wbGV0ZShwcm9qZWN0LmdldE5hbWUoKSwgaW5kZXgpO1xuXHRcdFx0aWYgKGNoYW5nZSkge1xuXHRcdFx0XHRzcGFuMS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuXHRcdFx0XHRjaGVjay5jaGVja2VkID0gdHJ1ZVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHNwYW4xLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xuXHRcdFx0XHRjaGVjay5jaGVja2VkID0gZmFsc2Vcblx0XHRcdH1cblx0XHRcdC8vIGRpc3BsYXkoKTtcblx0XHR9KTtcblxuXHRcdGVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0Y3VycmVudEluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5pbmRleDtcblx0XHRcdHByb2plY3ROYW1lID0gZS50YXJnZXQuZGF0YXNldC5wcm9qZWN0O1xuXHRcdFx0ZGlhbG9nRWRpdC5zaG93TW9kYWwoKTtcblx0XHRcdHRpdGxlRWRpdC52YWx1ZSA9IHRhc2suZ2V0VGl0bGUoKTtcblx0XHRcdHByaW9yaXR5RWRpdC52YWx1ZSA9IHRhc2suZ2V0UHJpb3JpdHkoKTtcblx0XHRcdGRpc2NyaXB0aW9uRWRpdC52YWx1ZSA9IHRhc2suZ2V0RGlzY3JpcHRpb24oKTtcblx0XHRcdGRhdGVFZGl0LnZhbHVlID0gdGFzay5nZXREYXRlKCk7XG5cdFx0fSk7XG5cblx0XHRkZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0aGVscGVyLnJlbW92ZVRhc2soZS50YXJnZXQuZGF0YXNldC5wcm9qZWN0LCBlLnRhcmdldC5kYXRhc2V0LmluZGV4KTtcblx0XHRcdGRpc3BsYXkoKTtcblx0XHR9KTtcblxuXHRcdHRpdGxlLmFwcGVuZChzcGFuMSk7XG5cdFx0dGl0bGUuYXBwZW5kKHNwYW4yKTtcblx0XHR0ZXh0RGl2LmFwcGVuZChjaGVjayk7XG5cdFx0dGV4dERpdi5hcHBlbmQodGl0bGUpO1xuXHRcdGJ1dHRvbkRpdi5hcHBlbmQoZWRpdCk7XG5cdFx0YnV0dG9uRGl2LmFwcGVuZChkZWwpO1xuXHRcdC8vIHRhc2tDYXJkLmFwcGVuZCh0ZXh0RGl2KTtcblx0XHQvLyB0YXNrQ2FyZC5hcHBlbmQoYnV0dG9uRGl2KTtcblx0XHR0YXNrQ29udGFpbmVyLmFwcGVuZCh0ZXh0RGl2KTtcblx0XHR0YXNrQ29udGFpbmVyLmFwcGVuZChidXR0b25EaXYpO1xuXHRcdHRhc2tDYXJkLmFwcGVuZCh0YXNrQ29udGFpbmVyKTtcblx0XHR0YXNrbGlzdC5hcHBlbmQodGFza0NhcmQpO1xuXG5cdFx0aWYgKHRhc2suZ2V0RGlzY3JpcHRpb24oKSAhPSAnJykge1xuXHRcdFx0Y29uc3QgZXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdFx0XHRleHBhbmQuY2xhc3NMaXN0LmFkZCgnZXhwYW5kJyk7XG5cdFx0XHRjb25zdCBzcGFuMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0XHRcdHNwYW4zLmNsYXNzTGlzdC5hZGQoJ2Rpc2MnKVxuXHRcdFx0c3BhbjMudGV4dENvbnRlbnQgPSB0YXNrLmdldERpc2NyaXB0aW9uKCk7XG5cdFx0XHRleHBhbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdHNwYW4zLmNsYXNzTGlzdC50b2dnbGUoJ2NvbGxhcHNlJyk7XG5cdFx0XHRcdGV4cGFuZC5jbGFzc0xpc3QudG9nZ2xlKCdjb2xsYXBzZScpO1xuXHRcdFx0fSk7XG5cdFx0XHRidXR0b25EaXYuYXBwZW5kKGV4cGFuZCk7XG5cdFx0XHR0YXNrQ2FyZC5hcHBlbmQoc3BhbjMpO1xuXHRcdFx0c2V0UHJpb3JpdHkodGFzayxzcGFuMylcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBidXR0b25MaXN0bmVycyhkaXNwbGF5KSB7XG5cdFx0Y29uc3QgY2FuY2VsRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stY2FuY2VsJyk7XG5cdFx0Y29uc3QgY29uZmlybUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLWNvbmZpcm0nKTtcblxuXHRcdGNvbnN0IENhbmNlbCA9IGNhbmNlbEVkaXQuY2xvbmVOb2RlKHRydWUpO1xuXHRcdGNvbnN0IENvbmZpcm0gPSBjb25maXJtRWRpdC5jbG9uZU5vZGUodHJ1ZSk7XG5cblx0XHRjYW5jZWxFZGl0LnJlcGxhY2VXaXRoKENhbmNlbCk7XG5cdFx0Y29uZmlybUVkaXQucmVwbGFjZVdpdGgoQ29uZmlybSk7XG5cblx0XHRDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZGlhbG9nRWRpdC5jbG9zZSgpO1xuXHRcdH0pO1xuXG5cdFx0Q29uZmlybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpZiAodGl0bGVFZGl0LnZhbHVlICE9ICcnKSB7XG5cdFx0XHRcdGhlbHBlci5lZGl0VGFzayhcblx0XHRcdFx0XHRwcm9qZWN0TmFtZSxcblx0XHRcdFx0XHRjdXJyZW50SW5kZXgsXG5cdFx0XHRcdFx0dGl0bGVFZGl0LnZhbHVlLFxuXHRcdFx0XHRcdGRhdGVFZGl0LnZhbHVlLFxuXHRcdFx0XHRcdHByaW9yaXR5RWRpdC52YWx1ZSxcblx0XHRcdFx0XHRkaXNjcmlwdGlvbkVkaXQudmFsdWVcblx0XHRcdFx0KTtcblx0XHRcdFx0ZGlzcGxheSgpO1xuXHRcdFx0fVxuXHRcdFx0ZGlhbG9nRWRpdC5jbG9zZSgpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdC8vIFx0aWYgKCF0YXNrQ2FyZC5jb250YWlucyhlLnRhcmdldCkpIHtcblx0XHQvLyBcdCAgc3BhbjMuY2xhc3NMaXN0LnJlbW92ZShcImNvbGxhcHNlXCIpXG5cdFx0Ly8gXHQgIGV4cGFuZC5jbGFzc0xpc3QucmVtb3ZlKFwiY29sbGFzcGVcIilcblx0XHQvLyBcdH1cblx0XHQvLyAgIH0pXG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGNyZWF0ZSxcblx0XHRidXR0b25MaXN0bmVycyxcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNhcmQ7XG4iLCJpbXBvcnQgeyBpc1Bhc3QsIGlzVG9kYXkgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgY2FyZCBmcm9tICcuL2NhcmQnO1xuaW1wb3J0IGhlbHBlciBmcm9tICcuL2hlbHBlcic7XG5sZXQgRHVlID0gKCkgPT4ge1xuXHRjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stYWRkJyk7XG5cdGFkZFRhc2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0Y29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza2xpc3QnKTtcblx0bGV0IHRhc2tzID0gW107XG5cdC8vIGNvbnN0IHRvZG8gPSBoZWxwZXIucmV0cml2ZSgpO1xuXHQvLyBjb25zdCBwcm9qZWN0cyA9IHRvZG8uZ2V0UHJvamVjdHMoKTtcblx0ZnVuY3Rpb24gdG9kYXlEaXNwbGF5KCkge1xuXHRcdGNvbnN0IHByb2plY3RzID0gaGVscGVyLmdldFByb2plY3RzKCk7XG5cdFx0dGFza0xpc3QudGV4dENvbnRlbnQgPSAnJztcblx0XHRsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXHRcdHRpdGxlLnRleHRDb250ZW50ID0gJ1Bhc3QgRHVlJztcblx0XHR0YXNrTGlzdC5hcHBlbmQodGl0bGUpO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBwcm9qZWN0ID0gcHJvamVjdHNbaV07XG5cblx0XHRcdHRhc2tzID0gaGVscGVyLmdldFRhc2tzKHByb2plY3QuZ2V0TmFtZSgpKTtcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGFza3MubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0bGV0IHRhc2sgPSB0YXNrc1tqXTtcblx0XHRcdFx0aWYgKGlzUGFzdCh0YXNrLmdldERhdGUoKSkgJiYgIXRhc2suZ2V0Q29tcGxldGUoKSAmJiAhaXNUb2RheSh0YXNrLmdldERhdGUoKSkpIHtcblx0XHRcdFx0XHRjYXJkLmNyZWF0ZShwcm9qZWN0LCB0YXNrLCBqLCB0b2RheURpc3BsYXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y2FyZC5idXR0b25MaXN0bmVycyh0b2RheURpc3BsYXkpO1xuXHR0b2RheURpc3BsYXkoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IER1ZTtcblxuIiwiaW1wb3J0IFRvZG8gZnJvbSAnLi9Uby1kbyc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcblxubGV0IGhlbHBlciA9ICgoKSA9PiB7XG5cdGZ1bmN0aW9uIHVwZGF0ZUxvY2FsU3RvcmFnZShkYXRhKSB7XG5cdFx0Y29uc3QgdG9kb0pzb24gPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kbycsIHRvZG9Kc29uKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJldHJpdmUoKSB7XG5cdFx0Ly8gY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvJylcblx0XHQvLyBpZihkYXRhID09PSBudWxsKSB7cmV0dXJuIG5ldyBUb2RvKCl9XG5cdFx0Y29uc3QgdG9kb0xpc3QgPSBPYmplY3QuYXNzaWduKFxuXHRcdFx0bmV3IFRvZG8oKSxcblx0XHRcdEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8nKSlcblx0XHQpO1xuXHRcdHRvZG9MaXN0LnNldFByb2plY3QoXG5cdFx0XHR0b2RvTGlzdFxuXHRcdFx0XHQuZ2V0UHJvamVjdHMoKVxuXHRcdFx0XHQubWFwKChwcm9qZWN0KSA9PiBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KCksIHByb2plY3QpKVxuXHRcdCk7XG5cdFx0dG9kb0xpc3Rcblx0XHRcdC5nZXRQcm9qZWN0cygpXG5cdFx0XHQuZm9yRWFjaCgocHJvamVjdCkgPT5cblx0XHRcdFx0cHJvamVjdC5zZXRUYXNrcyhcblx0XHRcdFx0XHRwcm9qZWN0LmdldFRhc2tzKCkubWFwKCh0YXNrKSA9PiBPYmplY3QuYXNzaWduKG5ldyBUYXNrKCksIHRhc2spKVxuXHRcdFx0XHQpXG5cdFx0XHQpO1xuXHRcdHJldHVybiB0b2RvTGlzdDtcblx0fVxuXG5cdC8vIGZ1bmN0aW9uIHJldHJpdmUoKSB7XG5cdC8vICAgICBjb25zdCByZXZpdmVkVG9kbyA9IG5ldyBUb2RvKCk7XG5cdC8vICAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8nKTtcblx0Ly8gICAgIGlmKGRhdGEpIHtcblx0Ly8gICAgICAgICBjb25zdCB0b2RvRGF0YSA9IEpTT04ucGFyc2UoZGF0YSlcblx0Ly8gICAgICAgICBmb3IoY29uc3QgcHJvamVjdERhdGEgb2YgdG9kb0RhdGEucHJvamVjdHMpIHtcblx0Ly8gICAgICAgICAgICAgT2JqZWN0LmFzc2lnbigpXG5cdC8vICAgICAgICAgICAgIGNvbnN0IHJldml2ZWRQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdERhdGEubmFtZSlcblx0Ly8gICAgICAgICAgICAgZm9yKGNvbnN0IHRhc2tEYXRhIG9mIHByb2plY3REYXRhLmxpc3QpIHtcblx0Ly8gICAgICAgICAgICAgICAgIGNvbnN0IHJldml2ZWR0YXNrID0gbmV3IFRhc2sodGFza0RhdGEubmFtZSx0YXNrRGF0YS5kYXRlLHRhc2tEYXRhLnByaW9yaXR5LHRhc2tEYXRhLmNvbXBsZXRlKVxuXHQvLyAgICAgICAgICAgICAgICAgcmV2aXZlZFByb2plY3QuYWRkVGFzayhyZXZpdmVkdGFzaylcblx0Ly8gICAgICAgICAgICAgfVxuXHQvLyAgICAgICAgICAgICByZXZpdmVkVG9kby5hZGRQcm9qZWN0KHJldml2ZWRQcm9qZWN0KVxuXHQvLyAgICAgICAgIH1cblx0Ly8gICAgIH1cblxuXHQvLyAgICAgcmV0dXJuIHJldml2ZWRUb2RvO1xuXHQvLyB9XG5cblx0ZnVuY3Rpb24gYWRkUHJvamVjdChuYW1lKSB7XG5cdFx0Y29uc3QgdG9kb0xpc3QgPSByZXRyaXZlKCk7XG5cdFx0dG9kb0xpc3QuYWRkUHJvamVjdChuYW1lKTtcblx0XHR1cGRhdGVMb2NhbFN0b3JhZ2UodG9kb0xpc3QpO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChpbmRleCkge1xuXHRcdGNvbnN0IHRvZG9MaXN0ID0gcmV0cml2ZSgpO1xuXHRcdHRvZG9MaXN0LnJlbW92ZVByb2plY3QoaW5kZXgpO1xuXHRcdHVwZGF0ZUxvY2FsU3RvcmFnZSh0b2RvTGlzdCk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcblx0XHRjb25zdCB0b2RvTGlzdCA9IHJldHJpdmUoKTtcblx0XHRyZXR1cm4gdG9kb0xpc3QuZ2V0UHJvamVjdHMoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZVRhc2socHJvamVjdE5hbWUsIGluZGV4KSB7XG5cdFx0Y29uc3QgdG9kb0xpc3QgPSByZXRyaXZlKCk7XG5cdFx0Y29uc3QgcHJvamVjdCA9IHRvZG9MaXN0LmdldFByb2plY3QocHJvamVjdE5hbWUpO1xuXHRcdGlmIChwcm9qZWN0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHByb2plY3QucmVtb3ZlVGFzayhpbmRleCk7XG5cdFx0fVxuXHRcdHVwZGF0ZUxvY2FsU3RvcmFnZSh0b2RvTGlzdCk7XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRUYXNrKHByb2plY3ROYW1lLCBuYW1lLCBkYXRlLCBwcmlvcml0eSwgZGlzY3JpcHRpb24pIHtcblx0XHRjb25zdCB0b2RvTGlzdCA9IHJldHJpdmUoKTtcblx0XHRjb25zdCBwcm9qZWN0ID0gdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XG5cdFx0cHJvamVjdC5hZGRUYXNrKG5hbWUsIGRhdGUsIHByaW9yaXR5LCBkaXNjcmlwdGlvbik7XG5cdFx0dXBkYXRlTG9jYWxTdG9yYWdlKHRvZG9MaXN0KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGVkaXRUYXNrKHByb2plY3ROYW1lLCBpbmRleCwgbmFtZSwgZGF0ZSwgcHJpb3JpdHksIGRpc2NyaXB0aW9uKSB7XG5cdFx0Y29uc3QgdG9kb0xpc3QgPSByZXRyaXZlKCk7XG5cdFx0Y29uc3QgcHJvamVjdCA9IHRvZG9MaXN0LmdldFByb2plY3QocHJvamVjdE5hbWUpO1xuXHRcdGNvbnN0IHRhc2tzID0gcHJvamVjdC5nZXRUYXNrcygpO1xuXHRcdHRhc2tzW2luZGV4XS5zZXRUYXNrKG5hbWUsIGRhdGUsIHByaW9yaXR5LCBkaXNjcmlwdGlvbik7XG5cdFx0dXBkYXRlTG9jYWxTdG9yYWdlKHRvZG9MaXN0KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFRhc2tzKHByb2plY3ROYW1lKSB7XG5cdFx0Y29uc3QgdG9kb0xpc3QgPSByZXRyaXZlKCk7XG5cdFx0Y29uc3QgcHJvamVjdCA9IHRvZG9MaXN0LmdldFByb2plY3QocHJvamVjdE5hbWUpO1xuXHRcdHJldHVybiBwcm9qZWN0LmdldFRhc2tzKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBjaGFuZ2VDb21wbGV0ZShwcm9qZWN0TmFtZSwgaW5kZXgpIHtcblx0XHRjb25zdCB0b2RvTGlzdCA9IHJldHJpdmUoKTtcblx0XHRjb25zdCBwcm9qZWN0ID0gdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XG5cdFx0Y29uc3QgdGFzayA9IHByb2plY3QuZ2V0VGFza3MoKVtpbmRleF07XG5cdFx0dGFzay5jaGFuZ2VDb21wbGV0ZSgpO1xuXHRcdHVwZGF0ZUxvY2FsU3RvcmFnZSh0b2RvTGlzdCk7XG5cdFx0cmV0dXJuIHRhc2suZ2V0Q29tcGxldGUoKVxuXHR9XG5cdHJldHVybiB7XG5cdFx0dXBkYXRlTG9jYWxTdG9yYWdlLFxuXHRcdHJldHJpdmUsXG5cdFx0YWRkUHJvamVjdCxcblx0XHRyZW1vdmVQcm9qZWN0LFxuXHRcdGdldFByb2plY3RzLFxuXHRcdGFkZFRhc2ssXG5cdFx0cmVtb3ZlVGFzayxcblx0XHRnZXRUYXNrcyxcblx0XHRlZGl0VGFzayxcblx0XHRjaGFuZ2VDb21wbGV0ZSxcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGhlbHBlcjtcbiIsIi8vIGltcG9ydCB0b2RvIGZyb20gXCIuL1RvLWRvXCI7XG5pbXBvcnQgY2FyZCBmcm9tICcuL2NhcmQnO1xuaW1wb3J0IGhlbHBlciBmcm9tICcuL2hlbHBlcic7XG5cbmxldCBob21lRG9tID0gKCkgPT4ge1xuXHRjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stYWRkJyk7XG5cdGFkZFRhc2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0Y29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza2xpc3QnKTtcblx0bGV0IHRhc2tzID0gW107XG5cdGZ1bmN0aW9uIGhvbWVEaXNwbGF5KCkge1xuXHRcdGNvbnN0IHByb2plY3RzID0gaGVscGVyLmdldFByb2plY3RzKCk7XG5cdFx0dGFza0xpc3QudGV4dENvbnRlbnQgPSAnJztcblx0XHRsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXHRcdHRpdGxlLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuXHRcdHRhc2tMaXN0LmFwcGVuZCh0aXRsZSk7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgcHJvamVjdCA9IHByb2plY3RzW2ldO1xuXHRcdFx0dGFza3MgPSBoZWxwZXIuZ2V0VGFza3MocHJvamVjdC5nZXROYW1lKCkpO1xuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB0YXNrcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRsZXQgdGFzayA9IHRhc2tzW2pdO1xuXHRcdFx0XHRjYXJkLmNyZWF0ZShwcm9qZWN0LCB0YXNrLCBqLCBob21lRGlzcGxheSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y2FyZC5idXR0b25MaXN0bmVycyhob21lRGlzcGxheSk7XG5cdGhvbWVEaXNwbGF5KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBob21lRG9tO1xuIiwiaW1wb3J0IHRhc2sgZnJvbSAnLi90YXNrJztcbmltcG9ydCBoZWxwZXIgZnJvbSAnLi9oZWxwZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcblx0Y29uc3RydWN0b3IobmFtZSkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5saXN0ID0gW107XG5cdH1cblxuXHRzZXRUYXNrcyh0YXNrcykge1xuXHRcdHRoaXMubGlzdCA9IHRhc2tzO1xuXHR9XG5cdHJlbW92ZVRhc2soaW5kZXgpIHtcblx0XHR0aGlzLmxpc3Quc3BsaWNlKGluZGV4LCAxKTtcblx0XHRoZWxwZXIudXBkYXRlTG9jYWxTdG9yYWdlKCk7XG5cdH1cblxuXHRhZGRUYXNrKG5hbWUsIGRhdGUsIHByaW9yaXR5LCBkaXNjcmlwdGlvbikge1xuXHRcdHRoaXMubGlzdC5wdXNoKG5ldyB0YXNrKG5hbWUsIGRhdGUsIHByaW9yaXR5LCBkaXNjcmlwdGlvbiwgZmFsc2UpKTtcblx0XHRoZWxwZXIudXBkYXRlTG9jYWxTdG9yYWdlKCk7XG5cdH1cblxuXHRnZXRUYXNrcygpIHtcblx0XHRyZXR1cm4gdGhpcy5saXN0O1xuXHR9XG5cblx0Z2V0TmFtZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xuXHR9XG5cblx0Z2V0VGFzayhuYW1lKSB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gdGhpcy5saXN0LmZpbmQoKHRhc2sgPSB0YXNrLmdldFRpdGxlKCkgPT09IG5hbWUpKTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59XG4iLCJpbXBvcnQgdGFza0RvbSBmcm9tICcuL3Rhc2tEb20nO1xuaW1wb3J0IGhvbWVEb20gZnJvbSAnLi9ob21lRG9tJztcbmltcG9ydCBoZWxwZXIgZnJvbSAnLi9oZWxwZXInO1xuaW1wb3J0IGRlbGV0ZVN2ZyBmcm9tICcuL2ltZy9kZWxldGUuc3ZnJztcbmltcG9ydCBzZWxlY3QgZnJvbSAnLi9zZWxlY3RlZCc7XG5cbmxldCBwcm9qZWN0RG9tID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblx0Y29uc3QgcHJvamVjdERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y29udGVudC5hcHBlbmQocHJvamVjdERpc3BsYXkpO1xuXHRjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKTtcblx0Y29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZGlhbG9nJyk7XG5cdGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlJyk7XG5cdGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwnKTtcblx0Y29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb25maXJtJyk7XG5cdHByb2plY3RJbnB1dC52YWx1ZSA9ICcnO1xuXHRmdW5jdGlvbiBkaWFsb2dWaXNpYmxlKCkge1xuXHRcdGRpYWxvZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0fVxuXG5cdGZ1bmN0aW9uIGRpYWxvZ0hpZGRlbigpIHtcblx0XHRkaWFsb2cuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0fVxuXG5cdGxldCBkaXNwbGF5ID0gKCkgPT4ge1xuXHRcdHByb2plY3REaXNwbGF5LnRleHRDb250ZW50ID0gJyc7XG5cdFx0Ly8gY29uc3QgdG9kbyA9IGhlbHBlci5yZXRyaXZlKCk7XG5cdFx0Ly8gbGV0IHByb2plY3RzID0gdG9kby5nZXRQcm9qZWN0cygpO1xuXHRcdGxldCBwcm9qZWN0cyA9IGhlbHBlci5nZXRQcm9qZWN0cygpO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBwcm9qZWN0ID0gcHJvamVjdHNbaV07XG5cdFx0XHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGRpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNhcmQnKTtcblx0XHRcdGRpdi5kYXRhc2V0LmluZGV4ID0gaTtcblx0XHRcdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0Ly8gY29uc3QgZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0XHRjb25zdCBkZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0XHRcdGRlbC5zcmMgPSBkZWxldGVTdmc7XG5cdFx0XHRkZWwuYWx0ID0gJ0RlbGV0ZSc7XG5cdFx0XHRkaXYuYXBwZW5kKHRpdGxlKTtcblx0XHRcdGRpdi5hcHBlbmQoZGVsKTtcblxuXHRcdFx0ZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdFx0c2VsZWN0LmFkZFNoYWRvdyhlKTtcblx0XHRcdFx0dGFza0RvbShwcm9qZWN0KTtcblx0XHRcdH0pO1xuXG5cdFx0XHRkZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRoZWxwZXIucmVtb3ZlUHJvamVjdChkaXYuZGF0YXNldC5pbmRleCk7XG5cdFx0XHRcdGhvbWVEb20oKTtcblx0XHRcdFx0ZGlzcGxheSgpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXROYW1lKCk7XG5cdFx0XHRwcm9qZWN0RGlzcGxheS5hcHBlbmQoZGl2KTtcblx0XHR9XG5cdH07XG5cblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdC8vIGRpYWxvZy5zaG93KClcblx0XHRkaWFsb2dWaXNpYmxlKCk7XG5cdFx0YnV0dG9uLnJlcGxhY2VXaXRoKGRpYWxvZyk7XG5cdFx0cHJvamVjdElucHV0LmZvY3VzKCk7XG5cdFx0YnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdH0pO1xuXG5cdGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHQvLyBkaWFsb2cuY2xvc2UoKVxuXHRcdGRpYWxvZ0hpZGRlbigpO1xuXHRcdGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRkaWFsb2cucmVwbGFjZVdpdGgoYnV0dG9uKTtcblx0XHRwcm9qZWN0SW5wdXQudmFsdWUgPSAnJztcblx0fSk7XG5cblx0Y29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0Ly8gZS50YXJnZXQucHJldmVudERlZmF1bHQoKTtcblx0XHQvLyBkaWFsb2cuY2xvc2UoKVxuXHRcdGRpYWxvZ0hpZGRlbigpO1xuXHRcdGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRkaWFsb2cucmVwbGFjZVdpdGgoYnV0dG9uKTtcblx0XHRpZiAocHJvamVjdElucHV0LnZhbHVlICE9ICcnKSB7XG5cdFx0XHRoZWxwZXIuYWRkUHJvamVjdChwcm9qZWN0SW5wdXQudmFsdWUpO1xuXHRcdFx0Y29uc3QgdG9kbyA9IGhlbHBlci5yZXRyaXZlKCk7XG5cdFx0XHRjb25zdCBwcm9qZWN0ID0gdG9kby5nZXRQcm9qZWN0KHByb2plY3RJbnB1dC52YWx1ZSk7XG5cdFx0XHR0YXNrRG9tKHByb2plY3QpO1xuXHRcdFx0ZGlzcGxheSgpO1xuXHRcdFx0c2VsZWN0LmFkZFNoYWRvd0xhdGVzdFByb2plY3QoKTtcblx0XHR9XG5cdFx0cHJvamVjdElucHV0LnZhbHVlID0gJyc7XG5cdH0pO1xuXG5cdGRpc3BsYXkoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3REb207XG4iLCJpbXBvcnQgeyBhZGQgfSBmcm9tICdkYXRlLWZucyc7XG5cbmxldCBzZWxlY3QgPSAoKCkgPT4ge1xuXHRjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKTtcblx0Y29uc3QgdG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kYXknKTtcblx0Y29uc3QgZHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZScpO1xuXHRjb25zdCB3ZWVrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlZWsnKTtcblxuXHRjb25zdCBzaGFkb3cgPSAnaW5zZXQgMC41ZW0gMCAjOUY3M0FCJztcblxuXHRmdW5jdGlvbiBjbGVhckFsbFNoYWRvd3MoKSB7XG5cdFx0Y29uc3QgcHJvamVjdHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWNhcmQnKSk7XG5cdFx0cHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuXHRcdFx0cHJvamVjdC5zdHlsZS5ib3hTaGFkb3cgPSAnbm9uZSc7XG5cdFx0fSk7XG5cdFx0dG9kYXkuc3R5bGUuYm94U2hhZG93ID0gJ25vbmUnO1xuXHRcdGR1ZS5zdHlsZS5ib3hTaGFkb3cgPSAnbm9uZSc7XG5cdFx0aG9tZS5zdHlsZS5ib3hTaGFkb3cgPSAnbm9uZSc7XG5cdFx0d2Vlay5zdHlsZS5ib3hTaGFkb3cgPSAnbm9uZSc7XG5cdH1cblxuXHRmdW5jdGlvbiBzZWxlY3RIb21lKCkge1xuXHRcdGNsZWFyQWxsU2hhZG93cygpO1xuXHRcdGhvbWUuc3R5bGUuYm94U2hhZG93ID0gc2hhZG93O1xuXHR9XG5cblx0ZnVuY3Rpb24gc2VsZWN0VG9kYXkoKSB7XG5cdFx0Y2xlYXJBbGxTaGFkb3dzKCk7XG5cdFx0dG9kYXkuc3R5bGUuYm94U2hhZG93ID0gc2hhZG93O1xuXHR9XG5cblx0ZnVuY3Rpb24gc2VsZWN0RHVlKCkge1xuXHRcdGNsZWFyQWxsU2hhZG93cygpO1xuXHRcdGR1ZS5zdHlsZS5ib3hTaGFkb3cgPSBzaGFkb3c7XG5cdH1cblxuXHRmdW5jdGlvbiBzZWxlY3RQcm9qZWN0KGUpIHtcblx0XHRjbGVhckFsbFNoYWRvd3MoKTtcblx0XHRlLnRhcmdldC5zdHlsZS5ib3hTaGFkb3cgPSBzaGFkb3c7XG5cdH1cblxuXHRmdW5jdGlvbiBzZWxlY3RXZWVrKGUpIHtcblx0XHRjbGVhckFsbFNoYWRvd3MoKTtcblx0XHR3ZWVrLnN0eWxlLmJveFNoYWRvdyA9IHNoYWRvdztcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZFNoYWRvdyhldmVudCkge1xuXHRcdGNsZWFyQWxsU2hhZG93cygpO1xuXHRcdC8vIEZpbmQgdGhlIGNsb3Nlc3QgcGFyZW50IGRpdiB3aXRoIGNsYXNzIFwicGFyZW50LWRpdlwiXG5cdFx0dmFyIHRhcmdldERpdiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcucHJvamVjdC1jYXJkJyk7XG5cdFx0aWYgKHRhcmdldERpdikge1xuXHRcdFx0dGFyZ2V0RGl2LnN0eWxlLmJveFNoYWRvdyA9IHNoYWRvdzsgLy8gQWRkIHNoYWRvd1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGFkZFNoYWRvd0xhdGVzdFByb2plY3QoKSB7XG5cdFx0c2VsZWN0LmNsZWFyQWxsU2hhZG93cygpO1xuXHRcdGNvbnN0IHByb2plY3REb20gPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWNhcmQnKSk7XG5cdFx0cHJvamVjdERvbVtwcm9qZWN0RG9tLmxlbmd0aCAtIDFdLnN0eWxlLmJveFNoYWRvdyA9IHNoYWRvdztcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0c2VsZWN0SG9tZSxcblx0XHRzZWxlY3RUb2RheSxcblx0XHRzZWxlY3REdWUsXG5cdFx0c2VsZWN0UHJvamVjdCxcblx0XHRhZGRTaGFkb3csXG5cdFx0Y2xlYXJBbGxTaGFkb3dzLFxuXHRcdGFkZFNoYWRvd0xhdGVzdFByb2plY3QsXG5cdFx0c2VsZWN0V2Vlayxcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHNlbGVjdDtcbiIsImltcG9ydCBoZWxwZXIgZnJvbSAnLi9oZWxwZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG5cdGNvbnN0cnVjdG9yKG5hbWUsIGRhdGUsIHByaW9yaXR5LCBkaXNjcmlwdGlvbiwgY29tcGxldGUpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuZGF0ZSA9IGRhdGU7XG5cdFx0dGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuXHRcdHRoaXMuZGlzY3JpcHRpb24gPSBkaXNjcmlwdGlvbjtcblx0XHR0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XG5cdH1cblxuXHRzZXRUYXNrKG5hbWUsIGRhdGUsIHByaW9yaXR5LCBkaXNjcmlwdGlvbikge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5kYXRlID0gZGF0ZTtcblx0XHR0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cdFx0dGhpcy5kaXNjcmlwdGlvbiA9IGRpc2NyaXB0aW9uO1xuXHRcdGhlbHBlci51cGRhdGVMb2NhbFN0b3JhZ2UoKTtcblx0fVxuXG5cdGNoYW5nZUNvbXBsZXRlKCkge1xuXHRcdHRoaXMuY29tcGxldGUgPSAhdGhpcy5jb21wbGV0ZTtcblx0XHRoZWxwZXIudXBkYXRlTG9jYWxTdG9yYWdlKCk7XG5cdH1cblx0Z2V0VGl0bGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcblx0fVxuXG5cdGdldERhdGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0ZTtcblx0fVxuXG5cdGdldFByaW9yaXR5KCkge1xuXHRcdHJldHVybiB0aGlzLnByaW9yaXR5O1xuXHR9XG5cblx0Z2V0Q29tcGxldGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcGxldGU7XG5cdH1cblxuXHRnZXREaXNjcmlwdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5kaXNjcmlwdGlvbjtcblx0fVxufVxuIiwiaW1wb3J0IGNhcmQgZnJvbSAnLi9jYXJkJztcbmltcG9ydCBoZWxwZXIgZnJvbSAnLi9oZWxwZXInO1xubGV0IHRhc2tEb20gPSAocHJvamVjdCkgPT4ge1xuXHRjb25zdCB0YXNrbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrbGlzdCcpO1xuXHRjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2snKTtcblx0Y29uc3QgY2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stY2FuY2VsJyk7XG5cdGNvbnN0IGNvbmZpcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1jb25maXJtJyk7XG5cdGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRpYWxvZycpO1xuXHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlJyk7XG5cdGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kYXRlJyk7XG5cdGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stcHJpb3JpdHknKTtcblx0Y29uc3QgZGlzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1pbmZvJyk7XG5cdGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1hZGQnKTtcblxuXHRhZGRUYXNrLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRsZXQgbGlzdCA9IFtdO1xuXHRmdW5jdGlvbiBkaXNwbGF5KCkge1xuXHRcdGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cdFx0dGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKTtcblx0XHR0YXNrbGlzdC50ZXh0Q29udGVudCA9ICcnO1xuXHRcdHRhc2tsaXN0LmFwcGVuZCh0aXRsZSk7XG5cdFx0bGlzdCA9IGhlbHBlci5nZXRUYXNrcyhwcm9qZWN0LmdldE5hbWUoKSk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgdGFzayA9IGxpc3RbaV07XG5cdFx0XHRjYXJkLmNyZWF0ZShwcm9qZWN0LCB0YXNrLCBpLCBkaXNwbGF5KTtcblx0XHR9XG5cdH1cblxuXHRkaXNwbGF5KCk7XG5cblx0Y2FyZC5idXR0b25MaXN0bmVycyhkaXNwbGF5KTtcblx0ZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKCkge1xuXHRcdGxldCBuZXdCdXR0b24gPSBidXR0b24uY2xvbmVOb2RlKHRydWUpO1xuXHRcdGxldCBuZXdDYW5jZWwgPSBjYW5jZWwuY2xvbmVOb2RlKHRydWUpO1xuXHRcdGxldCBuZXdDb25maXJtID0gY29uZmlybS5jbG9uZU5vZGUodHJ1ZSk7XG5cblx0XHRidXR0b24ucmVwbGFjZVdpdGgobmV3QnV0dG9uKTtcblx0XHRjYW5jZWwucmVwbGFjZVdpdGgobmV3Q2FuY2VsKTtcblx0XHRjb25maXJtLnJlcGxhY2VXaXRoKG5ld0NvbmZpcm0pO1xuXG5cdFx0bmV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0ZGlhbG9nLnNob3dNb2RhbCgpO1xuXHRcdH0pO1xuXG5cdFx0bmV3Q2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGRpYWxvZy5jbG9zZSgpO1xuXHRcdFx0dGl0bGUudmFsdWUgPSAnJztcblx0XHRcdHByaW9yaXR5LnZhbHVlID0gJyc7XG5cdFx0XHRkaXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xuXHRcdFx0ZGF0ZS52YWx1ZSA9ICcnO1xuXHRcdH0pO1xuXG5cdFx0bmV3Q29uZmlybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpZiAodGl0bGUudmFsdWUgIT0gJycpIHtcblx0XHRcdFx0aGVscGVyLmFkZFRhc2soXG5cdFx0XHRcdFx0cHJvamVjdC5nZXROYW1lKCksXG5cdFx0XHRcdFx0dGl0bGUudmFsdWUsXG5cdFx0XHRcdFx0ZGF0ZS52YWx1ZSxcblx0XHRcdFx0XHRwcmlvcml0eS52YWx1ZSxcblx0XHRcdFx0XHRkaXNjcmlwdGlvbi52YWx1ZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRkaXNwbGF5KCk7XG5cdFx0XHR9XG5cdFx0XHR0aXRsZS52YWx1ZSA9ICcnO1xuXHRcdFx0cHJpb3JpdHkudmFsdWUgPSAnJztcblx0XHRcdGRpc2NyaXB0aW9uLnZhbHVlID0gJyc7XG5cdFx0XHRkYXRlLnZhbHVlID0gJyc7XG5cdFx0XHRkaWFsb2cuY2xvc2UoKTtcblx0XHR9KTtcblx0fVxuXG5cdHJlbW92ZUxpc3RlbmVycygpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdGFza0RvbTtcblxuXG4iLCIvLyBpbXBvcnQgdG9kbyBmcm9tIFwiLi9Uby1kb1wiO1xuaW1wb3J0IGNhcmQgZnJvbSAnLi9jYXJkJztcbmltcG9ydCBoZWxwZXIgZnJvbSAnLi9oZWxwZXInO1xuXG5sZXQgdG9kYXkgPSAoKSA9PiB7XG5cdGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1hZGQnKTtcblx0YWRkVGFzay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrbGlzdCcpO1xuXHQvLyBjb25zdCB0b2RvID0gaGVscGVyLnJldHJpdmUoKTtcblx0Ly8gY29uc3QgcHJvamVjdHMgPSB0b2RvLmdldFByb2plY3RzKCk7XG5cdGxldCB0YXNrcyA9IFtdO1xuXG5cdGZ1bmN0aW9uIGdldFRvZGF5RGF0ZSgpIHtcblx0XHRjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG5cdFx0Y29uc3QgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG5cdFx0Y29uc3QgbW9udGggPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG5cdFx0Y29uc3QgZGF5ID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcblx0XHRyZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcblx0fVxuXG5cdGZ1bmN0aW9uIHRvZGF5RGlzcGxheSgpIHtcblx0XHR0YXNrTGlzdC50ZXh0Q29udGVudCA9ICcnO1xuXHRcdGNvbnN0IHByb2plY3RzID0gaGVscGVyLmdldFByb2plY3RzKCk7XG5cdFx0bGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblx0XHR0aXRsZS50ZXh0Q29udGVudCA9ICdUb2RheSc7XG5cdFx0dGFza0xpc3QuYXBwZW5kKHRpdGxlKTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgcHJvamVjdCA9IHByb2plY3RzW2ldO1xuXG5cdFx0XHR0YXNrcyA9IGhlbHBlci5nZXRUYXNrcyhwcm9qZWN0LmdldE5hbWUoKSk7XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHRhc2tzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGxldCB0YXNrID0gdGFza3Nbal07XG5cdFx0XHRcdGxldCBjdXJyZW50RGF0ZSA9IGdldFRvZGF5RGF0ZSgpO1xuXG5cdFx0XHRcdGlmICh0YXNrLmdldERhdGUoKSA9PT0gY3VycmVudERhdGUpIHtcblx0XHRcdFx0XHRjYXJkLmNyZWF0ZShwcm9qZWN0LCB0YXNrLCBqLCB0b2RheURpc3BsYXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y2FyZC5idXR0b25MaXN0bmVycyh0b2RheURpc3BsYXkpO1xuXHR0b2RheURpc3BsYXkoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvZGF5O1xuIiwiaW1wb3J0IHsgaXNGdXR1cmUgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgY2FyZCBmcm9tICcuL2NhcmQnO1xuaW1wb3J0IGhlbHBlciBmcm9tICcuL2hlbHBlcic7XG5sZXQgV2VlayA9ICgpID0+IHtcblx0Y29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWFkZCcpO1xuXHRhZGRUYXNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tsaXN0Jyk7XG5cdGxldCB0YXNrcyA9IFtdO1xuXHQvLyBjb25zdCB0b2RvID0gaGVscGVyLnJldHJpdmUoKTtcblx0Ly8gY29uc3QgcHJvamVjdHMgPSB0b2RvLmdldFByb2plY3RzKCk7XG5cdGZ1bmN0aW9uIHRvZGF5RGlzcGxheSgpIHtcblx0XHRjb25zdCBwcm9qZWN0cyA9IGhlbHBlci5nZXRQcm9qZWN0cygpO1xuXHRcdHRhc2tMaXN0LnRleHRDb250ZW50ID0gJyc7XG5cdFx0bGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblx0XHR0aXRsZS50ZXh0Q29udGVudCA9ICdQYXN0IER1ZSc7XG5cdFx0dGFza0xpc3QuYXBwZW5kKHRpdGxlKTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgcHJvamVjdCA9IHByb2plY3RzW2ldO1xuXG5cdFx0XHR0YXNrcyA9IGhlbHBlci5nZXRUYXNrcyhwcm9qZWN0LmdldE5hbWUoKSk7XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHRhc2tzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGxldCB0YXNrID0gdGFza3Nbal07XG5cdFx0XHRcdGlmIChpc0Z1dHVyZSh0YXNrLmdldERhdGUoKSkpIHtcblx0XHRcdFx0XHRjYXJkLmNyZWF0ZShwcm9qZWN0LCB0YXNrLCBqLCB0b2RheURpc3BsYXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y2FyZC5idXR0b25MaXN0bmVycyh0b2RheURpc3BsYXkpO1xuXHR0b2RheURpc3BsYXkoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdlZWs7XG5cbiIsIi8qKlxuICogQG5hbWUgY29uc3RydWN0RnJvbVxuICogQGNhdGVnb3J5IEdlbmVyaWMgSGVscGVyc1xuICogQHN1bW1hcnkgQ29uc3RydWN0cyBhIGRhdGUgdXNpbmcgdGhlIHJlZmVyZW5jZSBkYXRlIGFuZCB0aGUgdmFsdWVcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBjb25zdHJ1Y3RzIGEgbmV3IGRhdGUgdXNpbmcgdGhlIGNvbnN0cnVjdG9yIGZyb20gdGhlIHJlZmVyZW5jZVxuICogZGF0ZSBhbmQgdGhlIGdpdmVuIHZhbHVlLiBJdCBoZWxwcyB0byBidWlsZCBnZW5lcmljIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdFxuICogZGF0ZSBleHRlbnNpb25zLlxuICpcbiAqIEl0IGRlZmF1bHRzIHRvIGBEYXRlYCBpZiB0aGUgcGFzc2VkIHJlZmVyZW5jZSBkYXRlIGlzIGEgbnVtYmVyIG9yIGEgc3RyaW5nLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIHJlZmVyZW5jZSBkYXRlIHRvIHRha2UgY29uc3RydWN0b3IgZnJvbVxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNyZWF0ZSB0aGUgZGF0ZVxuICpcbiAqIEByZXR1cm5zIERhdGUgaW5pdGlhbGl6ZWQgdXNpbmcgdGhlIGdpdmVuIGRhdGUgYW5kIHZhbHVlXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tICdkYXRlLWZucydcbiAqXG4gKiAvLyBBIGZ1bmN0aW9uIHRoYXQgY2xvbmVzIGEgZGF0ZSBwcmVzZXJ2aW5nIHRoZSBvcmlnaW5hbCB0eXBlXG4gKiBmdW5jdGlvbiBjbG9uZURhdGU8RGF0ZVR5cGUgZXh0ZW5kcyBEYXRlKGRhdGU6IERhdGVUeXBlKTogRGF0ZVR5cGUge1xuICogICByZXR1cm4gY29uc3RydWN0RnJvbShcbiAqICAgICBkYXRlLCAvLyBVc2UgY29udHJ1c3RvciBmcm9tIHRoZSBnaXZlbiBkYXRlXG4gKiAgICAgZGF0ZS5nZXRUaW1lKCkgLy8gVXNlIHRoZSBkYXRlIHZhbHVlIHRvIGNyZWF0ZSBhIG5ldyBkYXRlXG4gKiAgIClcbiAqIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEZyb20oZGF0ZSwgdmFsdWUpIHtcbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBkYXRlLmNvbnN0cnVjdG9yKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgY29uc3RydWN0RnJvbTtcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGNvbnN0cnVjdE5vd1xuICogQGNhdGVnb3J5IEdlbmVyaWMgSGVscGVyc1xuICogQHN1bW1hcnkgQ29uc3RydWN0cyBhIG5ldyBjdXJyZW50IGRhdGUgdXNpbmcgdGhlIHBhc3NlZCB2YWx1ZSBjb25zdHJ1Y3Rvci5cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgZnVuY3Rpb24gY29uc3RydWN0cyBhIG5ldyBjdXJyZW50IGRhdGUgdXNpbmcgdGhlIGNvbnN0cnVjdG9yIGZyb21cbiAqIHRoZSByZWZlcmVuY2UgZGF0ZS4gSXQgaGVscHMgdG8gYnVpbGQgZ2VuZXJpYyBmdW5jdGlvbnMgdGhhdCBhY2NlcHQgZGF0ZVxuICogZXh0ZW5zaW9ucyBhbmQgdXNlIHRoZSBjdXJyZW50IGRhdGUuXG4gKlxuICogSXQgZGVmYXVsdHMgdG8gYERhdGVgIGlmIHRoZSBwYXNzZWQgcmVmZXJlbmNlIGRhdGUgaXMgYSBudW1iZXIgb3IgYSBzdHJpbmcuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgcmVmZXJlbmNlIGRhdGUgdG8gdGFrZSBjb25zdHJ1Y3RvciBmcm9tXG4gKlxuICogQHJldHVybnMgQ3VycmVudCBkYXRlIGluaXRpYWxpemVkIHVzaW5nIHRoZSBnaXZlbiBkYXRlIGNvbnN0cnVjdG9yXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGNvbnN0cnVjdE5vdywgaXNTYW1lRGF5IH0gZnJvbSAnZGF0ZS1mbnMnXG4gKlxuICogZnVuY3Rpb24gaXNUb2RheTxEYXRlVHlwZSBleHRlbmRzIERhdGU+KFxuICogICBkYXRlOiBEYXRlVHlwZSB8IG51bWJlciB8IHN0cmluZyxcbiAqICk6IGJvb2xlYW4ge1xuICogICAvLyBJZiB3ZSB3ZXJlIHRvIHVzZSBgbmV3IERhdGUoKWAgZGlyZWN0bHksIHRoZSBmdW5jdGlvbiB3b3VsZCAgYmVoYXZlXG4gKiAgIC8vIGRpZmZlcmVudGx5IGluIGRpZmZlcmVudCB0aW1lem9uZXMgYW5kIHJldHVybiBmYWxzZSBmb3IgdGhlIHNhbWUgZGF0ZS5cbiAqICAgcmV0dXJuIGlzU2FtZURheShkYXRlLCBjb25zdHJ1Y3ROb3coZGF0ZSkpO1xuICogfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0Tm93KGRhdGUpIHtcbiAgcmV0dXJuIGNvbnN0cnVjdEZyb20oZGF0ZSwgRGF0ZS5ub3coKSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgY29uc3RydWN0Tm93O1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzRnV0dXJlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBmdXR1cmU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIGZ1dHVyZT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgaW4gdGhlIGZ1dHVyZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgMzEgRGVjZW1iZXIgMjAxNCBpbiB0aGUgZnV0dXJlP1xuICogY29uc3QgcmVzdWx0ID0gaXNGdXR1cmUobmV3IERhdGUoMjAxNCwgMTEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNGdXR1cmUoZGF0ZSkge1xuICByZXR1cm4gK3RvRGF0ZShkYXRlKSA+IERhdGUubm93KCk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNGdXR1cmU7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNQYXN0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBwYXN0P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBwYXN0P1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyBpbiB0aGUgcGFzdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgMiBKdWx5IDIwMTQgaW4gdGhlIHBhc3Q/XG4gKiBjb25zdCByZXN1bHQgPSBpc1Bhc3QobmV3IERhdGUoMjAxNCwgNiwgMikpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGFzdChkYXRlKSB7XG4gIHJldHVybiArdG9EYXRlKGRhdGUpIDwgRGF0ZS5ub3coKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1Bhc3Q7XG4iLCJpbXBvcnQgeyBzdGFydE9mRGF5IH0gZnJvbSBcIi4vc3RhcnRPZkRheS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuXG4gKiBAcmV0dXJucyBUaGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZURheShkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGF0ZUxlZnQpO1xuICBjb25zdCBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkYXRlUmlnaHQpO1xuXG4gIHJldHVybiArZGF0ZUxlZnRTdGFydE9mRGF5ID09PSArZGF0ZVJpZ2h0U3RhcnRPZkRheTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1NhbWVEYXk7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3ROb3cgfSBmcm9tIFwiLi9jb25zdHJ1Y3ROb3cubWpzXCI7XG5pbXBvcnQgeyBpc1NhbWVEYXkgfSBmcm9tIFwiLi9pc1NhbWVEYXkubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgdG9kYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RvZGF5KGRhdGUpIHtcbiAgcmV0dXJuIGlzU2FtZURheShkYXRlLCBjb25zdHJ1Y3ROb3coZGF0ZSkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVG9kYXk7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mRGF5KGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZkRheTtcbiIsIi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgY29uc3QgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoXG4gICAgYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiBhcmd1bWVudCA9PT0gXCJvYmplY3RcIiAmJiBhcmdTdHIgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IGFyZ3VtZW50LmNvbnN0cnVjdG9yKCthcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcIm51bWJlclwiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgTnVtYmVyXVwiIHx8XG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcInN0cmluZ1wiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgU3RyaW5nXVwiXG4gICkge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHByb2plY3REb20gZnJvbSAnLi9wcm9qZWN0RG9tLmpzJztcbmltcG9ydCBob21lRG9tIGZyb20gJy4vaG9tZURvbS5qcyc7XG5pbXBvcnQgdG9kYXlEb20gZnJvbSAnLi90b2RheURvbS5qcyc7XG5pbXBvcnQgRHVlIGZyb20gJy4vZHVlRG9tLmpzJztcbmltcG9ydCBXZWVrIGZyb20gJy4vd2Vla0RvbS5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBob21lU3ZnIGZyb20gJy4vaW1nL2hvbWUuc3ZnJztcbmltcG9ydCBhbGVydFN2ZyBmcm9tICcuL2ltZy9hbGVydC5zdmcnO1xuaW1wb3J0IHRvZGF5U3ZnIGZyb20gJy4vaW1nL3RvZGF5LnN2Zyc7XG5pbXBvcnQgdXBjb21pbmdTdmcgZnJvbSAnLi9pbWcvdXBjb21pbmcuc3ZnJ1xuaW1wb3J0IHNlbGVjdCBmcm9tICcuL3NlbGVjdGVkLmpzJztcblxuY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lJyk7XG5jb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheScpO1xuY29uc3QgZHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZScpO1xuY29uc3Qgd2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWVrJyk7XG5cbi8vIGNvbnN0IGhvbWVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbi8vIGhvbWVJbWcuc3JjID0gaG9tZVN2Zztcbi8vIGNvbnN0IGhvbWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuLy8gaG9tZVNwYW4udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbi8vIGhvbWUuYXBwZW5kKGhvbWVJbWcpO1xuLy8gaG9tZS5hcHBlbmQoaG9tZVNwYW4pO1xuXG5mdW5jdGlvbiBjcmVhdGVUYWJzKG1haW4sIG5hbWUsIGltZykge1xuXHRjb25zdCBJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0SW1nLnNyYyA9IGltZztcblx0Y29uc3QgU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0U3Bhbi50ZXh0Q29udGVudCA9IG5hbWU7XG5cdG1haW4uYXBwZW5kKEltZyk7XG5cdG1haW4uYXBwZW5kKFNwYW4pO1xufVxuXG5jcmVhdGVUYWJzKGhvbWUsICdIb21lJywgaG9tZVN2Zyk7XG5jcmVhdGVUYWJzKHRvZGF5LCAnVG9kYXknLCB0b2RheVN2Zyk7XG5jcmVhdGVUYWJzKGR1ZSwgJ1Bhc3QgRHVlJywgYWxlcnRTdmcpO1xuY3JlYXRlVGFicyh3ZWVrLCAnVXAgQ29taW5nJyx1cGNvbWluZ1N2ZyApXG5cbnNlbGVjdC5zZWxlY3RIb21lKCk7XG5ob21lRG9tKCk7XG5cbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdHNlbGVjdC5zZWxlY3RIb21lKCk7XG5cdGhvbWVEb20oKTtcbn0pO1xuXG50b2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0c2VsZWN0LnNlbGVjdFRvZGF5KCk7XG5cdHRvZGF5RG9tKCk7XG59KTtcblxuZHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRzZWxlY3Quc2VsZWN0RHVlKCk7XG5cdER1ZSgpO1xufSk7XG5cbndlZWsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdHNlbGVjdC5zZWxlY3RXZWVrKCk7XG5cdFdlZWsoKTtcbn0pO1xuXG5wcm9qZWN0RG9tKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=