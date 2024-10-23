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
/* 
:root {
	--font-size: 1.2em;
	--background-color: white;
	--first-color:#404258;
	--side-bar:#474E68;
	--second-color: #D8D8D8;
} */

:root {
	--font-size: 1.2em;
	--background-color: #9F4E85;
	--first-color: #363636;
	--side-bar:#424242;
	--second-color: #D0D0D0;
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
	color :var(--second-color);
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
	color :var(--second-color);
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
	background-color: var(--side-bar);
	border: 2px solid var(--second-color);
	/* border: none; */
	transition: 0.3s;
}
.add-project:hover {
	background-color: var(--second-color);
	color: var(--first-color);
	/* border: none; */
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
	transition: box-shadow 0.2s;
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
	transition: 0.2s;
}
.task-add:hover {
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
	/* display: grid; */
	/* grid-template-columns: 7fr 1fr; */
	display: flex;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n\tfont-family: 'logo';\n\tsrc: url('fonts/SankofaDisplay-Regular.ttf');\n}\n\n@font-face {\n\tfont-family: 'myFont';\n\tsrc: url('fonts/RobotoCondensed-VariableFont_wght.ttf');\n}\n\n/* :root {\n\t--font-size: 1.2em;\n\t--background-color: white;\n\t--first-color:#475569;\n\t--side-bar:#334155;\n\t--second-color: #e2e8f0;\n} */\n/* \n:root {\n\t--font-size: 1.2em;\n\t--background-color: white;\n\t--first-color:#404258;\n\t--side-bar:#474E68;\n\t--second-color: #D8D8D8;\n} */\n\n:root {\n\t--font-size: 1.2em;\n\t--background-color: #9F4E85;\n\t--first-color: #363636;\n\t--side-bar:#424242;\n\t--second-color: #D0D0D0;\n}\n\nbody {\n\tmargin: 0;\n\tbackground-color: var(--first-color);\n\tfont-size: 1.2em;\n\tfont-family: 'myFont';\n}\n\n.container {\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100vh;\n}\n\nbutton,\ninput {\n\tfont-family: 'myFont';\n}\n.header {\n\tpadding: 1.5em 5em;\n\tbox-shadow: 0px 0.5px 3px -2px black;\n\tcolor :var(--second-color);\n\tbackground-color: var(--side-bar);\n\tdisplay: none;\n}\n\n.header h2 {\n\tfont-family: 'logo';\n\tfont-size: 2em;\n\tpadding: 0;\n\tmargin: 0;\n}\n.main {\n\tflex-grow: 1;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 5fr;\n}\n\n.sidebar {\n\tpadding: 2em 0.5em;\n\tbackground-color: var(--side-bar);\n\tdisplay: flex;\n\tflex-direction: column;\n\t/* gap: 2em; */\n\tbox-shadow: 0px 0.5px 4px -2px black;\n\n}\n\n.sidebar img {\n\theight: 1.5em;\n}\n.side-button {\n\tdisplay: grid;\n\tgap: 1em;\n\tcolor :var(--second-color);\n\tmargin-bottom: 2em;\n}\n.side-button div {\n\tdisplay: flex;\n\tgap: 1em;\n\tpadding-inline-start: 1em;\n\tpadding-block: 0.5em;\n\talign-items: center;\n\ttransition: box-shadow 0.3s;\n}\n.side-button div:hover {\n\ttransform: scale(1.03);\n}\n\n/* project  */\n\n.add-project {\n\tfont-size: 1.5em;\n\ttext-align: center;\n\tpadding-block: 0.15em;\n\tmargin: 0 0.4em;\n\tcolor: var(--second-color);\n\tbackground-color: var(--side-bar);\n\tborder: 2px solid var(--second-color);\n\t/* border: none; */\n\ttransition: 0.3s;\n}\n.add-project:hover {\n\tbackground-color: var(--second-color);\n\tcolor: var(--first-color);\n\t/* border: none; */\n}\n#project-dialog {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-left: 0.5em;\n}\n\n#project-dialog input {\n\tfont-size: 1em;\n\tpadding: 0.5em;\n\twidth: 0;\n\tflex-grow: 1;\n\tmargin-bottom: 0.5em;\n\tbackground-color: var(--first-color);\n\tborder: 2px solid var(--second-color);\n}\n\n#project-dialog div {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tgap: 1em;\n\tmargin-right: 0.5em;\n}\n\n#project-dialog div button {\n\tflex: 1;\n\tfont-size: 1em;\n\tpadding: 0.5em 0;\n}\n#project-dialog div button:first-child {\n\tbackground-color: #20948b;\n\tcolor: white;\n\tborder: none;\n\toutline: none;\n}\n\n#project-dialog div button:last-child {\n\tbackground-color: var(--second-color);\n\tborder: none;\n\toutline: none;\n}\n\n.project-card {\n\tdisplay: flex;\n\tmargin: 0.5em;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding-block: 0.5em;\n\tpadding-inline: 1.2em;\n\tbackground-color: var(--second-color);\n\ttransition: box-shadow 0.2s;\n}\n\n.project-card:hover {\n\ttransform: scale(1.02);\n}\n.project-card img {\n\topacity: 0.5;\n\twidth: 1.3em;\n}\n\n.project-card img:hover {\n\topacity: 1;\n}\n.project h3 {\n\t/* text-align: center; */\n\tpadding: .5em;\n\tmargin: 0.5em;\n\tcolor: white;\n}\n\n/* end project */\n\n/* task  */\n\n\n.tasks .task-add {\n\tfont-size: 1em;\n\tmargin-top: 1em;\n\tborder: none;\n\twidth: 100%;\n\tpadding-block: 0.5em;\n\ttransition: 1s;\n\tcolor: var(--second-color);\n\tbackground-color: var(--first-color);\n\tborder: 2px solid var(--second-color);\n\ttransition: 0.2s;\n}\n.task-add:hover {\n\tbackground-color: var(--second-color);\n\tcolor: var(--first-color);\n}\n.tasks {\n\tpadding-inline: 20% 20%;\n}\n.tasks #tasklist {\n\tmargin-top: 1.5em;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1em;\n}\n.tasks #tasklist h2 {\n\ttext-align: center;\n\tcolor: white;\n}\n\n.taskCard .taskContainer{\n\talign-items: center;\n\tpadding: 0.5em 1em;\n\t/* display: grid; */\n\t/* grid-template-columns: 7fr 1fr; */\n\tdisplay: flex;\n\tbackground-color: var(--second-color);\n}\n\n.taskCard .check {\n\theight: 1.3em;\n\twidth: 1.3em;\n\t-webkit-appearance: none; /* For Safari and Chrome */\n\t-moz-appearance: none; /* For Firefox */\n\tappearance: none;\n\tborder: 1px solid #000000;\n\tborder-radius: 50%; /* Makes the checkbox round */\n\toutline: none;\n\tcursor: pointer;\n}\n\n.taskCard .check:checked {\n\tbackground-color: var(--first-color);\n}\n\n.taskCard img {\n\twidth: 1.3em;\n\topacity: 0.5;\n}\n.taskCard img:hover {\n\topacity: 1;\n}\n/* .taskCard > * {\n    flex:1;\n} */\n.taskCard .task-text {\n\tflex-grow: 1;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.5em;\n\tmargin-right: 1em;\n}\n\n.taskCard .task-text .title {\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.task-buttons {\n\tdisplay: flex;\n\tgap: 1em;\n}\n\n.disc {\n\t/* display: none; */\n\tmax-height: 0;\n\tmargin: 0;\n\toverflow: hidden;\n\ttransform-origin: top;\n\tbackground-color: var(--second-color);\n\tpadding: 0;\n\ttransition: max-height .3s , padding .3s;\n}\n\n.disc.collapse {\n\tmax-height: 100px;\n\tpadding: 0.5em 1em;\n}\n\n.taskCard .expand {\n\tcontent: url('img/down.svg');\n\ttransition:transform 0.3s;\n\n}\n\n.taskCard .expand.collapse {\n\t/* transition:transform 0.3s; */\n\ttransform: rotate(.5turn);\n}\n\n/* end task  */\n\n#project-dialog {\n\tdisplay: none;\n}\n\n#add-task {\n\tdisplay: block;\n}\n\ndialog {\n\tbackground-color: var(--first-color);\n}\nform ul li {\n\tdisplay: grid;\n\tgap: 0.2em;\n}\n\nform ul {\n\tlist-style: none;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1em;\n\tmargin: 0;\n\tpadding: 0;\n}\n\nform {\n\tmargin-top: 1em;\n\tdisplay: flex;\n\tflex-direction: column;\n\tfont-size: 1em;\n\tgap: 1em;\n\tpadding: 1em;\n\tcolor: white;\n\tfont-weight: 400;\n}\ndialog {\n\tborder: none;\n\twidth: min(100%, 500px);\n\t/* box-shadow: 10px 10px 0px var(--second-color); */\n}\n\ndialog::backdrop {\n\tbackground-color: black;\n\topacity: 0.3;\n}\n/* form div {\n    align-self: flex-end;\n} */\n\nform div {\n\talign-self: flex-end;\n}\nform div button {\n\t/* margin: 10px;\n    padding: 10px; */\n\t/* font-size: 1em; */\n\tborder: none;\n\t/* border-radius: 15px; */\n\tpadding: 0.5em 1em;\n\tbackground-color: var(--second-color);\n\tfont-size: 1em;\n}\nform div button:last-child {\n\tcolor: white;\n\tbackground-color: #20948b;\n\tborder: none;\n}\nform input,\ntextarea,\nselect {\n\tfont-size: 1em;\n\tpadding: 0.5em;\n\tbackground-color: var(--second-color);\n\tborder: none;\n\tfont-family: 'myFont';\n\t/* border-radius: 10px; */\n}\nform input,\ntextarea,\nselect:focus {\n\toutline: none;\n}\nform li label {\n\talign-self: center;\n}\n.sidebar-show {\n\tdisplay: block;\n\ttransform : translateX(-100%)\n}\n\n@media(max-width:1000px) {\n\t\tbody{\n\t\t\tfont-size: 1rem;\n\t\t\theight: auto;\n\t\t\tposition: relative;\n\t\t}\n\t\t.tasks {\n\t\t\tmargin: 1em;\n\t\t\tpadding: 0;\n\t\t\twidth: auto;\n\t\t}\n\n\t\t.sidebar {\n\t\t\t/* width: 80%; */\n\t\t\tmargin: 1px;\n\t\t\tpadding: 10px;\n\t\t\tleft:100%;\n\t\t}\n\t\t.side-button {\n\t\t\tgap: 10px;\n\t\t\tcolor :white;\n\t\t\tmargin-bottom: 10px;\n\t\t}\n\t\t.side-button div {\n\t\t\tdisplay: flex;\n\t\t\tgap: 10px;\n\t\t\tpadding-inline-start: 1em;\n\t\t\tpadding-block: 0.5em;\n\t\t\talign-items: center;\n\t\t\ttransition: box-shadow 0.3s;\n\t\t}\n\t\t.main {\n\t\t\tdisplay: block;\n\t\t}\n}\n\n@media(max-width:600px) {\n\tdialog {\n\t\twidth: 80%;\n\t\ttransform: translate(-50%,-50%);\n\t\tleft: 50%;\n\t\ttop: 40%;\n\t}\n\n\t.project-card {\n\t\tpadding: .5em;\n\t\tflex-grow: 1;\n\t\tflex-basis: 6em;\n\t}\n\t.side-button, .project #content > div {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\tjustify-content: stretch;\n\t}\n\n\t.side-button > * {\n\t\tflex-grow: 1;\n\t\tborder: 1px solid var(--second-color);\n\t}\n}"],"sourceRoot":""}]);
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

	function todayDisplay() {
		const projects = _helper__WEBPACK_IMPORTED_MODULE_1__["default"].getProjects();
		taskList.textContent = '';
		let title = document.createElement('h2');
		title.textContent = 'Past Due';
		taskList.append(title);

		projects.forEach(project => {
			const tasks = _helper__WEBPACK_IMPORTED_MODULE_1__["default"].getTasks(project.getName());

			tasks
				.filter(task => (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isPast)(task.getDate()) && !task.getComplete() && !(0,date_fns__WEBPACK_IMPORTED_MODULE_3__.isToday)(task.getDate()))
				.forEach((task,index) => {
					_card__WEBPACK_IMPORTED_MODULE_0__["default"].create(project,task,index,todayDisplay)
				})
		})
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
		let projects = _helper__WEBPACK_IMPORTED_MODULE_2__["default"].getProjects();
		for (let i = 0; i < projects.length; i++) {
			let project = projects[i];
			const div = document.createElement('div');
			div.classList.add('project-card');
			div.dataset.index = i;
			const title = document.createElement('span');
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
		projects.forEach(project => {
			const tasks = _helper__WEBPACK_IMPORTED_MODULE_1__["default"].getTasks(project.getName());

			tasks
				.filter(task => task.getDate() === getTodayDate())
				.forEach((task,index) => {
					_card__WEBPACK_IMPORTED_MODULE_0__["default"].create(project,task,index,todayDisplay)
				})
		})

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
	function todayDisplay() {
		const projects = _helper__WEBPACK_IMPORTED_MODULE_1__["default"].getProjects();
		taskList.textContent = '';
		let title = document.createElement('h2');
		title.textContent = 'Up Coming';
		taskList.append(title);


		projects.forEach(project => {
			const tasks = _helper__WEBPACK_IMPORTED_MODULE_1__["default"].getTasks(project.getName());
			tasks
				.filter(task => (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isFuture)(task.getDate()))
				.forEach((task,index) => {
					_card__WEBPACK_IMPORTED_MODULE_0__["default"].create(project,task,index,todayDisplay)
				})
		})

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

module.exports = __webpack_require__.p + "b6b67af49a13bee99213.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsYUFBYSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLGFBQWEsYUFBYSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLHdCQUF3Qix5QkFBeUIsYUFBYSxhQUFhLHlCQUF5QixXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssT0FBTyxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxPQUFPLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sT0FBTyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFL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UTtBQUNULENBQUM7O0FBRUQ7QUFDQSxDQUFDLHFEQUFNO0FBQ1AsQ0FBQyxzREFBRztBQUNKLENBQUM7O0FBRUQ7QUFDQSxDQUFDLHFEQUFNO0FBQ1AsQ0FBQyx1REFBSTtBQUNMLENBQUM7O0FBRUQsMERBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvVG8tZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jYXJkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZHVlRG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaGVscGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaG9tZURvbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0RG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2VsZWN0ZWQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFza0RvbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZGF5RG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvd2Vla0RvbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0cnVjdEZyb20ubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29uc3RydWN0Tm93Lm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzRnV0dXJlLm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzUGFzdC5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1NhbWVEYXkubWpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNUb2RheS5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mRGF5Lm1qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RvRGF0ZS5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJmb250cy9TYW5rb2ZhRGlzcGxheS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImZvbnRzL1JvYm90b0NvbmRlbnNlZC1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCJpbWcvZG93bi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiAnbG9nbyc7XG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcblx0Zm9udC1mYW1pbHk6ICdteUZvbnQnO1xuXHRzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuLyogOnJvb3Qge1xuXHQtLWZvbnQtc2l6ZTogMS4yZW07XG5cdC0tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdC0tZmlyc3QtY29sb3I6IzQ3NTU2OTtcblx0LS1zaWRlLWJhcjojMzM0MTU1O1xuXHQtLXNlY29uZC1jb2xvcjogI2UyZThmMDtcbn0gKi9cbi8qIFxuOnJvb3Qge1xuXHQtLWZvbnQtc2l6ZTogMS4yZW07XG5cdC0tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdC0tZmlyc3QtY29sb3I6IzQwNDI1ODtcblx0LS1zaWRlLWJhcjojNDc0RTY4O1xuXHQtLXNlY29uZC1jb2xvcjogI0Q4RDhEODtcbn0gKi9cblxuOnJvb3Qge1xuXHQtLWZvbnQtc2l6ZTogMS4yZW07XG5cdC0tYmFja2dyb3VuZC1jb2xvcjogIzlGNEU4NTtcblx0LS1maXJzdC1jb2xvcjogIzM2MzYzNjtcblx0LS1zaWRlLWJhcjojNDI0MjQyO1xuXHQtLXNlY29uZC1jb2xvcjogI0QwRDBEMDtcbn1cblxuYm9keSB7XG5cdG1hcmdpbjogMDtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xuXHRmb250LXNpemU6IDEuMmVtO1xuXHRmb250LWZhbWlseTogJ215Rm9udCc7XG59XG5cbi5jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRoZWlnaHQ6IDEwMHZoO1xufVxuXG5idXR0b24sXG5pbnB1dCB7XG5cdGZvbnQtZmFtaWx5OiAnbXlGb250Jztcbn1cbi5oZWFkZXIge1xuXHRwYWRkaW5nOiAxLjVlbSA1ZW07XG5cdGJveC1zaGFkb3c6IDBweCAwLjVweCAzcHggLTJweCBibGFjaztcblx0Y29sb3IgOnZhcigtLXNlY29uZC1jb2xvcik7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtYmFyKTtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuLmhlYWRlciBoMiB7XG5cdGZvbnQtZmFtaWx5OiAnbG9nbyc7XG5cdGZvbnQtc2l6ZTogMmVtO1xuXHRwYWRkaW5nOiAwO1xuXHRtYXJnaW46IDA7XG59XG4ubWFpbiB7XG5cdGZsZXgtZ3JvdzogMTtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xufVxuXG4uc2lkZWJhciB7XG5cdHBhZGRpbmc6IDJlbSAwLjVlbTtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZS1iYXIpO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHQvKiBnYXA6IDJlbTsgKi9cblx0Ym94LXNoYWRvdzogMHB4IDAuNXB4IDRweCAtMnB4IGJsYWNrO1xuXG59XG5cbi5zaWRlYmFyIGltZyB7XG5cdGhlaWdodDogMS41ZW07XG59XG4uc2lkZS1idXR0b24ge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRnYXA6IDFlbTtcblx0Y29sb3IgOnZhcigtLXNlY29uZC1jb2xvcik7XG5cdG1hcmdpbi1ib3R0b206IDJlbTtcbn1cbi5zaWRlLWJ1dHRvbiBkaXYge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRnYXA6IDFlbTtcblx0cGFkZGluZy1pbmxpbmUtc3RhcnQ6IDFlbTtcblx0cGFkZGluZy1ibG9jazogMC41ZW07XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcztcbn1cbi5zaWRlLWJ1dHRvbiBkaXY6aG92ZXIge1xuXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xufVxuXG4vKiBwcm9qZWN0ICAqL1xuXG4uYWRkLXByb2plY3Qge1xuXHRmb250LXNpemU6IDEuNWVtO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHBhZGRpbmctYmxvY2s6IDAuMTVlbTtcblx0bWFyZ2luOiAwIDAuNGVtO1xuXHRjb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZS1iYXIpO1xuXHRib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmQtY29sb3IpO1xuXHQvKiBib3JkZXI6IG5vbmU7ICovXG5cdHRyYW5zaXRpb246IDAuM3M7XG59XG4uYWRkLXByb2plY3Q6aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xuXHRjb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xuXHQvKiBib3JkZXI6IG5vbmU7ICovXG59XG4jcHJvamVjdC1kaWFsb2cge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRtYXJnaW4tbGVmdDogMC41ZW07XG59XG5cbiNwcm9qZWN0LWRpYWxvZyBpbnB1dCB7XG5cdGZvbnQtc2l6ZTogMWVtO1xuXHRwYWRkaW5nOiAwLjVlbTtcblx0d2lkdGg6IDA7XG5cdGZsZXgtZ3JvdzogMTtcblx0bWFyZ2luLWJvdHRvbTogMC41ZW07XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcblx0Ym9yZGVyOiAycHggc29saWQgdmFyKC0tc2Vjb25kLWNvbG9yKTtcbn1cblxuI3Byb2plY3QtZGlhbG9nIGRpdiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0Z2FwOiAxZW07XG5cdG1hcmdpbi1yaWdodDogMC41ZW07XG59XG5cbiNwcm9qZWN0LWRpYWxvZyBkaXYgYnV0dG9uIHtcblx0ZmxleDogMTtcblx0Zm9udC1zaXplOiAxZW07XG5cdHBhZGRpbmc6IDAuNWVtIDA7XG59XG4jcHJvamVjdC1kaWFsb2cgZGl2IGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMyMDk0OGI7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Ym9yZGVyOiBub25lO1xuXHRvdXRsaW5lOiBub25lO1xufVxuXG4jcHJvamVjdC1kaWFsb2cgZGl2IGJ1dHRvbjpsYXN0LWNoaWxkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcblx0Ym9yZGVyOiBub25lO1xuXHRvdXRsaW5lOiBub25lO1xufVxuXG4ucHJvamVjdC1jYXJkIHtcblx0ZGlzcGxheTogZmxleDtcblx0bWFyZ2luOiAwLjVlbTtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRwYWRkaW5nLWJsb2NrOiAwLjVlbTtcblx0cGFkZGluZy1pbmxpbmU6IDEuMmVtO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xuXHR0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XG59XG5cbi5wcm9qZWN0LWNhcmQ6aG92ZXIge1xuXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xufVxuLnByb2plY3QtY2FyZCBpbWcge1xuXHRvcGFjaXR5OiAwLjU7XG5cdHdpZHRoOiAxLjNlbTtcbn1cblxuLnByb2plY3QtY2FyZCBpbWc6aG92ZXIge1xuXHRvcGFjaXR5OiAxO1xufVxuLnByb2plY3QgaDMge1xuXHQvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG5cdHBhZGRpbmc6IC41ZW07XG5cdG1hcmdpbjogMC41ZW07XG5cdGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogZW5kIHByb2plY3QgKi9cblxuLyogdGFzayAgKi9cblxuXG4udGFza3MgLnRhc2stYWRkIHtcblx0Zm9udC1zaXplOiAxZW07XG5cdG1hcmdpbi10b3A6IDFlbTtcblx0Ym9yZGVyOiBub25lO1xuXHR3aWR0aDogMTAwJTtcblx0cGFkZGluZy1ibG9jazogMC41ZW07XG5cdHRyYW5zaXRpb246IDFzO1xuXHRjb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xuXHRib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmQtY29sb3IpO1xuXHR0cmFuc2l0aW9uOiAwLjJzO1xufVxuLnRhc2stYWRkOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcblx0Y29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcbn1cbi50YXNrcyB7XG5cdHBhZGRpbmctaW5saW5lOiAyMCUgMjAlO1xufVxuLnRhc2tzICN0YXNrbGlzdCB7XG5cdG1hcmdpbi10b3A6IDEuNWVtO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDFlbTtcbn1cbi50YXNrcyAjdGFza2xpc3QgaDIge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhc2tDYXJkIC50YXNrQ29udGFpbmVye1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRwYWRkaW5nOiAwLjVlbSAxZW07XG5cdC8qIGRpc3BsYXk6IGdyaWQ7ICovXG5cdC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogN2ZyIDFmcjsgKi9cblx0ZGlzcGxheTogZmxleDtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcbn1cblxuLnRhc2tDYXJkIC5jaGVjayB7XG5cdGhlaWdodDogMS4zZW07XG5cdHdpZHRoOiAxLjNlbTtcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAvKiBGb3IgU2FmYXJpIGFuZCBDaHJvbWUgKi9cblx0LW1vei1hcHBlYXJhbmNlOiBub25lOyAvKiBGb3IgRmlyZWZveCAqL1xuXHRhcHBlYXJhbmNlOiBub25lO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7IC8qIE1ha2VzIHRoZSBjaGVja2JveCByb3VuZCAqL1xuXHRvdXRsaW5lOiBub25lO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXNrQ2FyZCAuY2hlY2s6Y2hlY2tlZCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcbn1cblxuLnRhc2tDYXJkIGltZyB7XG5cdHdpZHRoOiAxLjNlbTtcblx0b3BhY2l0eTogMC41O1xufVxuLnRhc2tDYXJkIGltZzpob3ZlciB7XG5cdG9wYWNpdHk6IDE7XG59XG4vKiAudGFza0NhcmQgPiAqIHtcbiAgICBmbGV4OjE7XG59ICovXG4udGFza0NhcmQgLnRhc2stdGV4dCB7XG5cdGZsZXgtZ3JvdzogMTtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAwLjVlbTtcblx0bWFyZ2luLXJpZ2h0OiAxZW07XG59XG5cbi50YXNrQ2FyZCAudGFzay10ZXh0IC50aXRsZSB7XG5cdHdpZHRoOiAxMDAlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50YXNrLWJ1dHRvbnMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRnYXA6IDFlbTtcbn1cblxuLmRpc2Mge1xuXHQvKiBkaXNwbGF5OiBub25lOyAqL1xuXHRtYXgtaGVpZ2h0OiAwO1xuXHRtYXJnaW46IDA7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcblx0cGFkZGluZzogMDtcblx0dHJhbnNpdGlvbjogbWF4LWhlaWdodCAuM3MgLCBwYWRkaW5nIC4zcztcbn1cblxuLmRpc2MuY29sbGFwc2Uge1xuXHRtYXgtaGVpZ2h0OiAxMDBweDtcblx0cGFkZGluZzogMC41ZW0gMWVtO1xufVxuXG4udGFza0NhcmQgLmV4cGFuZCB7XG5cdGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcblx0dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMC4zcztcblxufVxuXG4udGFza0NhcmQgLmV4cGFuZC5jb2xsYXBzZSB7XG5cdC8qIHRyYW5zaXRpb246dHJhbnNmb3JtIDAuM3M7ICovXG5cdHRyYW5zZm9ybTogcm90YXRlKC41dHVybik7XG59XG5cbi8qIGVuZCB0YXNrICAqL1xuXG4jcHJvamVjdC1kaWFsb2cge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4jYWRkLXRhc2sge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cblxuZGlhbG9nIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xufVxuZm9ybSB1bCBsaSB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdhcDogMC4yZW07XG59XG5cbmZvcm0gdWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDFlbTtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xufVxuXG5mb3JtIHtcblx0bWFyZ2luLXRvcDogMWVtO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmb250LXNpemU6IDFlbTtcblx0Z2FwOiAxZW07XG5cdHBhZGRpbmc6IDFlbTtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXdlaWdodDogNDAwO1xufVxuZGlhbG9nIHtcblx0Ym9yZGVyOiBub25lO1xuXHR3aWR0aDogbWluKDEwMCUsIDUwMHB4KTtcblx0LyogYm94LXNoYWRvdzogMTBweCAxMHB4IDBweCB2YXIoLS1zZWNvbmQtY29sb3IpOyAqL1xufVxuXG5kaWFsb2c6OmJhY2tkcm9wIHtcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5cdG9wYWNpdHk6IDAuMztcbn1cbi8qIGZvcm0gZGl2IHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn0gKi9cblxuZm9ybSBkaXYge1xuXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cbmZvcm0gZGl2IGJ1dHRvbiB7XG5cdC8qIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4OyAqL1xuXHQvKiBmb250LXNpemU6IDFlbTsgKi9cblx0Ym9yZGVyOiBub25lO1xuXHQvKiBib3JkZXItcmFkaXVzOiAxNXB4OyAqL1xuXHRwYWRkaW5nOiAwLjVlbSAxZW07XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XG5cdGZvbnQtc2l6ZTogMWVtO1xufVxuZm9ybSBkaXYgYnV0dG9uOmxhc3QtY2hpbGQge1xuXHRjb2xvcjogd2hpdGU7XG5cdGJhY2tncm91bmQtY29sb3I6ICMyMDk0OGI7XG5cdGJvcmRlcjogbm9uZTtcbn1cbmZvcm0gaW5wdXQsXG50ZXh0YXJlYSxcbnNlbGVjdCB7XG5cdGZvbnQtc2l6ZTogMWVtO1xuXHRwYWRkaW5nOiAwLjVlbTtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcblx0Ym9yZGVyOiBub25lO1xuXHRmb250LWZhbWlseTogJ215Rm9udCc7XG5cdC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXG59XG5mb3JtIGlucHV0LFxudGV4dGFyZWEsXG5zZWxlY3Q6Zm9jdXMge1xuXHRvdXRsaW5lOiBub25lO1xufVxuZm9ybSBsaSBsYWJlbCB7XG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5zaWRlYmFyLXNob3cge1xuXHRkaXNwbGF5OiBibG9jaztcblx0dHJhbnNmb3JtIDogdHJhbnNsYXRlWCgtMTAwJSlcbn1cblxuQG1lZGlhKG1heC13aWR0aDoxMDAwcHgpIHtcblx0XHRib2R5e1xuXHRcdFx0Zm9udC1zaXplOiAxcmVtO1xuXHRcdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdH1cblx0XHQudGFza3Mge1xuXHRcdFx0bWFyZ2luOiAxZW07XG5cdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0d2lkdGg6IGF1dG87XG5cdFx0fVxuXG5cdFx0LnNpZGViYXIge1xuXHRcdFx0Lyogd2lkdGg6IDgwJTsgKi9cblx0XHRcdG1hcmdpbjogMXB4O1xuXHRcdFx0cGFkZGluZzogMTBweDtcblx0XHRcdGxlZnQ6MTAwJTtcblx0XHR9XG5cdFx0LnNpZGUtYnV0dG9uIHtcblx0XHRcdGdhcDogMTBweDtcblx0XHRcdGNvbG9yIDp3aGl0ZTtcblx0XHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdFx0fVxuXHRcdC5zaWRlLWJ1dHRvbiBkaXYge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGdhcDogMTBweDtcblx0XHRcdHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxZW07XG5cdFx0XHRwYWRkaW5nLWJsb2NrOiAwLjVlbTtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHR0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3M7XG5cdFx0fVxuXHRcdC5tYWluIHtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdH1cbn1cblxuQG1lZGlhKG1heC13aWR0aDo2MDBweCkge1xuXHRkaWFsb2cge1xuXHRcdHdpZHRoOiA4MCU7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcblx0XHRsZWZ0OiA1MCU7XG5cdFx0dG9wOiA0MCU7XG5cdH1cblxuXHQucHJvamVjdC1jYXJkIHtcblx0XHRwYWRkaW5nOiAuNWVtO1xuXHRcdGZsZXgtZ3JvdzogMTtcblx0XHRmbGV4LWJhc2lzOiA2ZW07XG5cdH1cblx0LnNpZGUtYnV0dG9uLCAucHJvamVjdCAjY29udGVudCA+IGRpdiB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuXHR9XG5cblx0LnNpZGUtYnV0dG9uID4gKiB7XG5cdFx0ZmxleC1ncm93OiAxO1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZC1jb2xvcik7XG5cdH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1l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O0VBQ2IsZUFBZTtFQUNmLHdCQUF3QjtDQUN6Qjs7Q0FFQTtFQUNDLFlBQVk7RUFDWixxQ0FBcUM7Q0FDdEM7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ2xvZ28nO1xcblxcdHNyYzogdXJsKCdmb250cy9TYW5rb2ZhRGlzcGxheS1SZWd1bGFyLnR0ZicpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ215Rm9udCc7XFxuXFx0c3JjOiB1cmwoJ2ZvbnRzL1JvYm90b0NvbmRlbnNlZC1WYXJpYWJsZUZvbnRfd2dodC50dGYnKTtcXG59XFxuXFxuLyogOnJvb3Qge1xcblxcdC0tZm9udC1zaXplOiAxLjJlbTtcXG5cXHQtLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdC0tZmlyc3QtY29sb3I6IzQ3NTU2OTtcXG5cXHQtLXNpZGUtYmFyOiMzMzQxNTU7XFxuXFx0LS1zZWNvbmQtY29sb3I6ICNlMmU4ZjA7XFxufSAqL1xcbi8qIFxcbjpyb290IHtcXG5cXHQtLWZvbnQtc2l6ZTogMS4yZW07XFxuXFx0LS1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHQtLWZpcnN0LWNvbG9yOiM0MDQyNTg7XFxuXFx0LS1zaWRlLWJhcjojNDc0RTY4O1xcblxcdC0tc2Vjb25kLWNvbG9yOiAjRDhEOEQ4O1xcbn0gKi9cXG5cXG46cm9vdCB7XFxuXFx0LS1mb250LXNpemU6IDEuMmVtO1xcblxcdC0tYmFja2dyb3VuZC1jb2xvcjogIzlGNEU4NTtcXG5cXHQtLWZpcnN0LWNvbG9yOiAjMzYzNjM2O1xcblxcdC0tc2lkZS1iYXI6IzQyNDI0MjtcXG5cXHQtLXNlY29uZC1jb2xvcjogI0QwRDBEMDtcXG59XFxuXFxuYm9keSB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcXG5cXHRmb250LXNpemU6IDEuMmVtO1xcblxcdGZvbnQtZmFtaWx5OiAnbXlGb250JztcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGhlaWdodDogMTAwdmg7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuXFx0Zm9udC1mYW1pbHk6ICdteUZvbnQnO1xcbn1cXG4uaGVhZGVyIHtcXG5cXHRwYWRkaW5nOiAxLjVlbSA1ZW07XFxuXFx0Ym94LXNoYWRvdzogMHB4IDAuNXB4IDNweCAtMnB4IGJsYWNrO1xcblxcdGNvbG9yIDp2YXIoLS1zZWNvbmQtY29sb3IpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtYmFyKTtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGVhZGVyIGgyIHtcXG5cXHRmb250LWZhbWlseTogJ2xvZ28nO1xcblxcdGZvbnQtc2l6ZTogMmVtO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG4ubWFpbiB7XFxuXFx0ZmxleC1ncm93OiAxO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuXFx0cGFkZGluZzogMmVtIDAuNWVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtYmFyKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0LyogZ2FwOiAyZW07ICovXFxuXFx0Ym94LXNoYWRvdzogMHB4IDAuNXB4IDRweCAtMnB4IGJsYWNrO1xcblxcbn1cXG5cXG4uc2lkZWJhciBpbWcge1xcblxcdGhlaWdodDogMS41ZW07XFxufVxcbi5zaWRlLWJ1dHRvbiB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRnYXA6IDFlbTtcXG5cXHRjb2xvciA6dmFyKC0tc2Vjb25kLWNvbG9yKTtcXG5cXHRtYXJnaW4tYm90dG9tOiAyZW07XFxufVxcbi5zaWRlLWJ1dHRvbiBkaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxZW07XFxuXFx0cGFkZGluZy1pbmxpbmUtc3RhcnQ6IDFlbTtcXG5cXHRwYWRkaW5nLWJsb2NrOiAwLjVlbTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcztcXG59XFxuLnNpZGUtYnV0dG9uIGRpdjpob3ZlciB7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG59XFxuXFxuLyogcHJvamVjdCAgKi9cXG5cXG4uYWRkLXByb2plY3Qge1xcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHBhZGRpbmctYmxvY2s6IDAuMTVlbTtcXG5cXHRtYXJnaW46IDAgMC40ZW07XFxuXFx0Y29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZS1iYXIpO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZC1jb2xvcik7XFxuXFx0LyogYm9yZGVyOiBub25lOyAqL1xcblxcdHRyYW5zaXRpb246IDAuM3M7XFxufVxcbi5hZGQtcHJvamVjdDpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG5cXHRjb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xcblxcdC8qIGJvcmRlcjogbm9uZTsgKi9cXG59XFxuI3Byb2plY3QtZGlhbG9nIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0bWFyZ2luLWxlZnQ6IDAuNWVtO1xcbn1cXG5cXG4jcHJvamVjdC1kaWFsb2cgaW5wdXQge1xcblxcdGZvbnQtc2l6ZTogMWVtO1xcblxcdHBhZGRpbmc6IDAuNWVtO1xcblxcdHdpZHRoOiAwO1xcblxcdGZsZXgtZ3JvdzogMTtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG59XFxuXFxuI3Byb2plY3QtZGlhbG9nIGRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0Z2FwOiAxZW07XFxuXFx0bWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG59XFxuXFxuI3Byb2plY3QtZGlhbG9nIGRpdiBidXR0b24ge1xcblxcdGZsZXg6IDE7XFxuXFx0Zm9udC1zaXplOiAxZW07XFxuXFx0cGFkZGluZzogMC41ZW0gMDtcXG59XFxuI3Byb2plY3QtZGlhbG9nIGRpdiBidXR0b246Zmlyc3QtY2hpbGQge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyMDk0OGI7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jcHJvamVjdC1kaWFsb2cgZGl2IGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdG1hcmdpbjogMC41ZW07XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0cGFkZGluZy1ibG9jazogMC41ZW07XFxuXFx0cGFkZGluZy1pbmxpbmU6IDEuMmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XFxuXFx0dHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzO1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkOmhvdmVyIHtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcbn1cXG4ucHJvamVjdC1jYXJkIGltZyB7XFxuXFx0b3BhY2l0eTogMC41O1xcblxcdHdpZHRoOiAxLjNlbTtcXG59XFxuXFxuLnByb2plY3QtY2FyZCBpbWc6aG92ZXIge1xcblxcdG9wYWNpdHk6IDE7XFxufVxcbi5wcm9qZWN0IGgzIHtcXG5cXHQvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxuXFx0cGFkZGluZzogLjVlbTtcXG5cXHRtYXJnaW46IDAuNWVtO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogZW5kIHByb2plY3QgKi9cXG5cXG4vKiB0YXNrICAqL1xcblxcblxcbi50YXNrcyAudGFzay1hZGQge1xcblxcdGZvbnQtc2l6ZTogMWVtO1xcblxcdG1hcmdpbi10b3A6IDFlbTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0cGFkZGluZy1ibG9jazogMC41ZW07XFxuXFx0dHJhbnNpdGlvbjogMXM7XFxuXFx0Y29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZC1jb2xvcik7XFxuXFx0dHJhbnNpdGlvbjogMC4ycztcXG59XFxuLnRhc2stYWRkOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xcblxcdGNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XFxufVxcbi50YXNrcyB7XFxuXFx0cGFkZGluZy1pbmxpbmU6IDIwJSAyMCU7XFxufVxcbi50YXNrcyAjdGFza2xpc3Qge1xcblxcdG1hcmdpbi10b3A6IDEuNWVtO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDFlbTtcXG59XFxuLnRhc2tzICN0YXNrbGlzdCBoMiB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2tDYXJkIC50YXNrQ29udGFpbmVye1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMC41ZW0gMWVtO1xcblxcdC8qIGRpc3BsYXk6IGdyaWQ7ICovXFxuXFx0LyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3ZnIgMWZyOyAqL1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG59XFxuXFxuLnRhc2tDYXJkIC5jaGVjayB7XFxuXFx0aGVpZ2h0OiAxLjNlbTtcXG5cXHR3aWR0aDogMS4zZW07XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAvKiBGb3IgU2FmYXJpIGFuZCBDaHJvbWUgKi9cXG5cXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7IC8qIEZvciBGaXJlZm94ICovXFxuXFx0YXBwZWFyYW5jZTogbm9uZTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTsgLyogTWFrZXMgdGhlIGNoZWNrYm94IHJvdW5kICovXFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrQ2FyZCAuY2hlY2s6Y2hlY2tlZCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xcbn1cXG5cXG4udGFza0NhcmQgaW1nIHtcXG5cXHR3aWR0aDogMS4zZW07XFxuXFx0b3BhY2l0eTogMC41O1xcbn1cXG4udGFza0NhcmQgaW1nOmhvdmVyIHtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG4vKiAudGFza0NhcmQgPiAqIHtcXG4gICAgZmxleDoxO1xcbn0gKi9cXG4udGFza0NhcmQgLnRhc2stdGV4dCB7XFxuXFx0ZmxleC1ncm93OiAxO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDAuNWVtO1xcblxcdG1hcmdpbi1yaWdodDogMWVtO1xcbn1cXG5cXG4udGFza0NhcmQgLnRhc2stdGV4dCAudGl0bGUge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGFzay1idXR0b25zIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMWVtO1xcbn1cXG5cXG4uZGlzYyB7XFxuXFx0LyogZGlzcGxheTogbm9uZTsgKi9cXG5cXHRtYXgtaGVpZ2h0OiAwO1xcblxcdG1hcmdpbjogMDtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0dHJhbnNpdGlvbjogbWF4LWhlaWdodCAuM3MgLCBwYWRkaW5nIC4zcztcXG59XFxuXFxuLmRpc2MuY29sbGFwc2Uge1xcblxcdG1heC1oZWlnaHQ6IDEwMHB4O1xcblxcdHBhZGRpbmc6IDAuNWVtIDFlbTtcXG59XFxuXFxuLnRhc2tDYXJkIC5leHBhbmQge1xcblxcdGNvbnRlbnQ6IHVybCgnaW1nL2Rvd24uc3ZnJyk7XFxuXFx0dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMC4zcztcXG5cXG59XFxuXFxuLnRhc2tDYXJkIC5leHBhbmQuY29sbGFwc2Uge1xcblxcdC8qIHRyYW5zaXRpb246dHJhbnNmb3JtIDAuM3M7ICovXFxuXFx0dHJhbnNmb3JtOiByb3RhdGUoLjV0dXJuKTtcXG59XFxuXFxuLyogZW5kIHRhc2sgICovXFxuXFxuI3Byb2plY3QtZGlhbG9nIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jYWRkLXRhc2sge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5kaWFsb2cge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcXG59XFxuZm9ybSB1bCBsaSB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRnYXA6IDAuMmVtO1xcbn1cXG5cXG5mb3JtIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDFlbTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuZm9ybSB7XFxuXFx0bWFyZ2luLXRvcDogMWVtO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRmb250LXNpemU6IDFlbTtcXG5cXHRnYXA6IDFlbTtcXG5cXHRwYWRkaW5nOiAxZW07XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbmRpYWxvZyB7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHdpZHRoOiBtaW4oMTAwJSwgNTAwcHgpO1xcblxcdC8qIGJveC1zaGFkb3c6IDEwcHggMTBweCAwcHggdmFyKC0tc2Vjb25kLWNvbG9yKTsgKi9cXG59XFxuXFxuZGlhbG9nOjpiYWNrZHJvcCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFx0b3BhY2l0eTogMC4zO1xcbn1cXG4vKiBmb3JtIGRpdiB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn0gKi9cXG5cXG5mb3JtIGRpdiB7XFxuXFx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcbmZvcm0gZGl2IGJ1dHRvbiB7XFxuXFx0LyogbWFyZ2luOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4OyAqL1xcblxcdC8qIGZvbnQtc2l6ZTogMWVtOyAqL1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHQvKiBib3JkZXItcmFkaXVzOiAxNXB4OyAqL1xcblxcdHBhZGRpbmc6IDAuNWVtIDFlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xcblxcdGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5mb3JtIGRpdiBidXR0b246bGFzdC1jaGlsZCB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyMDk0OGI7XFxuXFx0Ym9yZGVyOiBub25lO1xcbn1cXG5mb3JtIGlucHV0LFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuXFx0Zm9udC1zaXplOiAxZW07XFxuXFx0cGFkZGluZzogMC41ZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Zm9udC1mYW1pbHk6ICdteUZvbnQnO1xcblxcdC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXFxufVxcbmZvcm0gaW5wdXQsXFxudGV4dGFyZWEsXFxuc2VsZWN0OmZvY3VzIHtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG5mb3JtIGxpIGxhYmVsIHtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5zaWRlYmFyLXNob3cge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdHRyYW5zZm9ybSA6IHRyYW5zbGF0ZVgoLTEwMCUpXFxufVxcblxcbkBtZWRpYShtYXgtd2lkdGg6MTAwMHB4KSB7XFxuXFx0XFx0Ym9keXtcXG5cXHRcXHRcXHRmb250LXNpemU6IDFyZW07XFxuXFx0XFx0XFx0aGVpZ2h0OiBhdXRvO1xcblxcdFxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRcXHR9XFxuXFx0XFx0LnRhc2tzIHtcXG5cXHRcXHRcXHRtYXJnaW46IDFlbTtcXG5cXHRcXHRcXHRwYWRkaW5nOiAwO1xcblxcdFxcdFxcdHdpZHRoOiBhdXRvO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQuc2lkZWJhciB7XFxuXFx0XFx0XFx0Lyogd2lkdGg6IDgwJTsgKi9cXG5cXHRcXHRcXHRtYXJnaW46IDFweDtcXG5cXHRcXHRcXHRwYWRkaW5nOiAxMHB4O1xcblxcdFxcdFxcdGxlZnQ6MTAwJTtcXG5cXHRcXHR9XFxuXFx0XFx0LnNpZGUtYnV0dG9uIHtcXG5cXHRcXHRcXHRnYXA6IDEwcHg7XFxuXFx0XFx0XFx0Y29sb3IgOndoaXRlO1xcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxuXFx0XFx0fVxcblxcdFxcdC5zaWRlLWJ1dHRvbiBkaXYge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0Z2FwOiAxMHB4O1xcblxcdFxcdFxcdHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxZW07XFxuXFx0XFx0XFx0cGFkZGluZy1ibG9jazogMC41ZW07XFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRcXHR0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3M7XFxuXFx0XFx0fVxcblxcdFxcdC5tYWluIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHR9XFxufVxcblxcbkBtZWRpYShtYXgtd2lkdGg6NjAwcHgpIHtcXG5cXHRkaWFsb2cge1xcblxcdFxcdHdpZHRoOiA4MCU7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXG5cXHRcXHRsZWZ0OiA1MCU7XFxuXFx0XFx0dG9wOiA0MCU7XFxuXFx0fVxcblxcblxcdC5wcm9qZWN0LWNhcmQge1xcblxcdFxcdHBhZGRpbmc6IC41ZW07XFxuXFx0XFx0ZmxleC1ncm93OiAxO1xcblxcdFxcdGZsZXgtYmFzaXM6IDZlbTtcXG5cXHR9XFxuXFx0LnNpZGUtYnV0dG9uLCAucHJvamVjdCAjY29udGVudCA+IGRpdiB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcblxcdH1cXG5cXG5cXHQuc2lkZS1idXR0b24gPiAqIHtcXG5cXHRcXHRmbGV4LWdyb3c6IDE7XFxuXFx0XFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG5cXHR9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgaGVscGVyIGZyb20gJy4vaGVscGVyJztcbmNsYXNzIFRvZG8ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnByb2plY3RzID0gW107XG5cdH1cblxuXHRzZXRQcm9qZWN0KHByb2plY3RzKSB7XG5cdFx0dGhpcy5wcm9qZWN0cyA9IHByb2plY3RzO1xuXHR9XG5cblx0YWRkUHJvamVjdChuYW1lKSB7XG5cdFx0Y29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuXHRcdHRoaXMucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcblx0XHQvLyBoZWxwZXIudXBkYXRlTG9jYWxTdG9yYWdlKClcblx0fVxuXG5cdHJlbW92ZVByb2plY3QoaW5kZXgpIHtcblx0XHR0aGlzLnByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0Ly8gaGVscGVyLnVwZGF0ZUxvY2FsU3RvcmFnZSgpXG5cdH1cblxuXHRnZXRQcm9qZWN0cygpIHtcblx0XHRyZXR1cm4gdGhpcy5wcm9qZWN0cztcblx0fVxuXG5cdGdldFByb2plY3QobmFtZSkge1xuXHRcdGNvbnN0IHJlc3VsdCA9IHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IG5hbWUpO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiIsImltcG9ydCBoZWxwZXIgZnJvbSAnLi9oZWxwZXInO1xuaW1wb3J0IGVkaXRTdmcgZnJvbSAnLi9pbWcvZWRpdC5zdmcnO1xuaW1wb3J0IGRlbGV0ZVN2ZyBmcm9tICcuL2ltZy9kZWxldGUuc3ZnJztcblxuY29uc3QgY2FyZCA9ICgoKSA9PiB7XG5cdGxldCBjdXJyZW50SW5kZXggPSBudWxsO1xuXHRsZXQgcHJvamVjdE5hbWUgPSAnJztcblx0Y29uc3QgZGlhbG9nRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stZGlhbG9nJyk7XG5cdGNvbnN0IHRpdGxlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stdGl0bGUnKTtcblx0Y29uc3QgZGF0ZUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLWRhdGUnKTtcblx0Y29uc3QgcHJpb3JpdHlFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1wcmlvcml0eScpO1xuXHRjb25zdCBkaXNjcmlwdGlvbkVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLWluZm8nKTtcblx0bGV0IHZpc2libGUgPSBmYWxzZVxuXHRsZXQgbGlzdCA9IFtdO1xuXG5cdGZ1bmN0aW9uIHNldFByaW9yaXR5KHRhc2ssIHRhc2tDYXJkKSB7XG5cdFx0Y29uc3QgcHJpb3JpdHkgPSB0YXNrLmdldFByaW9yaXR5KCk7XG5cdFx0aWYgKHByaW9yaXR5ID09PSAnSGlnaCcpIHtcblx0XHRcdHRhc2tDYXJkLnN0eWxlLmJveFNoYWRvdyA9ICdpbnNldCAwLjNlbSAwICNGNTI1NDknO1xuXHRcdH1cblxuXHRcdGlmIChwcmlvcml0eSA9PT0gJ01lZGl1bScpIHtcblx0XHRcdHRhc2tDYXJkLnN0eWxlLmJveFNoYWRvdyA9ICdpbnNldCAwLjNlbSAwICNGOTg4NjYnO1xuXHRcdH1cblxuXHRcdGlmIChwcmlvcml0eSA9PT0gJ0xvdycpIHtcblx0XHRcdHRhc2tDYXJkLnN0eWxlLmJveFNoYWRvdyA9ICdpbnNldCAwLjNlbSAwICMxRTI3NjEnO1xuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBjcmVhdGUocHJvamVjdCwgdGFzaywgaW5kZXgsIGRpc3BsYXkpIHtcblx0XHRsaXN0ID0gaGVscGVyLmdldFRhc2tzKHByb2plY3QuZ2V0TmFtZSgpKTtcblx0XHRjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKCd0YXNrQ2FyZCcpO1xuXHRcdHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFza0NvbnRhaW5lcicpO1xuXHRcdGNvbnN0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0ZXh0RGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGV4dCcpO1xuXHRcdGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSU5QVVQnKTtcblx0XHRjaGVjay5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcblx0XHRjaGVjay5jbGFzc0xpc3QuYWRkKCdjaGVjaycpO1xuXHRcdGNoZWNrLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcblx0XHRjaGVjay5jaGVja2VkID0gdGFzay5nZXRDb21wbGV0ZSgpO1xuXHRcdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcblx0XHRjb25zdCBzcGFuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRzcGFuMS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG5cdFx0Y29uc3Qgc3BhbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0Y29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0YnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stYnV0dG9ucycpO1xuXHRcdGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRcdGRlbC5zcmMgPSBkZWxldGVTdmc7XG5cdFx0ZGVsLmFsdCA9ICdEZWxldGUnO1xuXHRcdGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0XHRlZGl0LnNyYyA9IGVkaXRTdmc7XG5cdFx0ZWRpdC5hbHQgPSAnRWRpdCc7XG5cdFx0ZWRpdC5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG5cdFx0ZWRpdC5kYXRhc2V0LnByb2plY3QgPSBwcm9qZWN0LmdldE5hbWUoKTtcblx0XHRkZWwuZGF0YXNldC5wcm9qZWN0ID0gcHJvamVjdC5nZXROYW1lKCk7XG5cdFx0ZGVsLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcblx0XHRzcGFuMS50ZXh0Q29udGVudCA9IHRhc2suZ2V0VGl0bGUoKTtcblx0XHRzcGFuMi50ZXh0Q29udGVudCA9IHRhc2suZ2V0RGF0ZSgpO1xuXG5cdFx0dGFza0NhcmQuZGF0YXNldC52aXNpYmxlID0gdmlzaWJsZVxuXHRcdC8vIHNldFByaW9yaXR5KHRhc2ssIHRhc2tDYXJkKTtcblx0XHRzZXRQcmlvcml0eSh0YXNrLCB0YXNrQ29udGFpbmVyKTtcblxuXHRcdGlmICh0YXNrLmdldENvbXBsZXRlKCkpIHtcblx0XHRcdHNwYW4xLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG5cdFx0fVxuXG5cdFx0Y2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRjb25zdCBjaGFuZ2UgPSBoZWxwZXIuY2hhbmdlQ29tcGxldGUocHJvamVjdC5nZXROYW1lKCksIGluZGV4KTtcblx0XHRcdGlmIChjaGFuZ2UpIHtcblx0XHRcdFx0c3BhbjEuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJ1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHNwYW4xLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnXG5cdFx0XHR9XG5cdFx0XHQvLyBkaXNwbGF5KCk7XG5cdFx0fSk7XG5cblx0XHR0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdGNvbnN0IGNoYW5nZSA9IGhlbHBlci5jaGFuZ2VDb21wbGV0ZShwcm9qZWN0LmdldE5hbWUoKSwgaW5kZXgpO1xuXHRcdFx0aWYgKGNoYW5nZSkge1xuXHRcdFx0XHRzcGFuMS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuXHRcdFx0XHRjaGVjay5jaGVja2VkID0gdHJ1ZVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHNwYW4xLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xuXHRcdFx0XHRjaGVjay5jaGVja2VkID0gZmFsc2Vcblx0XHRcdH1cblx0XHRcdC8vIGRpc3BsYXkoKTtcblx0XHR9KTtcblxuXHRcdGVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0Y3VycmVudEluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5pbmRleDtcblx0XHRcdHByb2plY3ROYW1lID0gZS50YXJnZXQuZGF0YXNldC5wcm9qZWN0O1xuXHRcdFx0ZGlhbG9nRWRpdC5zaG93TW9kYWwoKTtcblx0XHRcdHRpdGxlRWRpdC52YWx1ZSA9IHRhc2suZ2V0VGl0bGUoKTtcblx0XHRcdHByaW9yaXR5RWRpdC52YWx1ZSA9IHRhc2suZ2V0UHJpb3JpdHkoKTtcblx0XHRcdGRpc2NyaXB0aW9uRWRpdC52YWx1ZSA9IHRhc2suZ2V0RGlzY3JpcHRpb24oKTtcblx0XHRcdGRhdGVFZGl0LnZhbHVlID0gdGFzay5nZXREYXRlKCk7XG5cdFx0fSk7XG5cblx0XHRkZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0aGVscGVyLnJlbW92ZVRhc2soZS50YXJnZXQuZGF0YXNldC5wcm9qZWN0LCBlLnRhcmdldC5kYXRhc2V0LmluZGV4KTtcblx0XHRcdGRpc3BsYXkoKTtcblx0XHR9KTtcblxuXHRcdHRpdGxlLmFwcGVuZChzcGFuMSk7XG5cdFx0dGl0bGUuYXBwZW5kKHNwYW4yKTtcblx0XHR0ZXh0RGl2LmFwcGVuZChjaGVjayk7XG5cdFx0dGV4dERpdi5hcHBlbmQodGl0bGUpO1xuXHRcdGJ1dHRvbkRpdi5hcHBlbmQoZWRpdCk7XG5cdFx0YnV0dG9uRGl2LmFwcGVuZChkZWwpO1xuXHRcdC8vIHRhc2tDYXJkLmFwcGVuZCh0ZXh0RGl2KTtcblx0XHQvLyB0YXNrQ2FyZC5hcHBlbmQoYnV0dG9uRGl2KTtcblx0XHR0YXNrQ29udGFpbmVyLmFwcGVuZCh0ZXh0RGl2KTtcblx0XHR0YXNrQ29udGFpbmVyLmFwcGVuZChidXR0b25EaXYpO1xuXHRcdHRhc2tDYXJkLmFwcGVuZCh0YXNrQ29udGFpbmVyKTtcblx0XHR0YXNrbGlzdC5hcHBlbmQodGFza0NhcmQpO1xuXG5cdFx0aWYgKHRhc2suZ2V0RGlzY3JpcHRpb24oKSAhPSAnJykge1xuXHRcdFx0Y29uc3QgZXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdFx0XHRleHBhbmQuY2xhc3NMaXN0LmFkZCgnZXhwYW5kJyk7XG5cdFx0XHRjb25zdCBzcGFuMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0XHRcdHNwYW4zLmNsYXNzTGlzdC5hZGQoJ2Rpc2MnKVxuXHRcdFx0c3BhbjMudGV4dENvbnRlbnQgPSB0YXNrLmdldERpc2NyaXB0aW9uKCk7XG5cdFx0XHRleHBhbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdHNwYW4zLmNsYXNzTGlzdC50b2dnbGUoJ2NvbGxhcHNlJyk7XG5cdFx0XHRcdGV4cGFuZC5jbGFzc0xpc3QudG9nZ2xlKCdjb2xsYXBzZScpO1xuXHRcdFx0fSk7XG5cdFx0XHRidXR0b25EaXYuYXBwZW5kKGV4cGFuZCk7XG5cdFx0XHR0YXNrQ2FyZC5hcHBlbmQoc3BhbjMpO1xuXHRcdFx0c2V0UHJpb3JpdHkodGFzayxzcGFuMylcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBidXR0b25MaXN0bmVycyhkaXNwbGF5KSB7XG5cdFx0Y29uc3QgY2FuY2VsRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stY2FuY2VsJyk7XG5cdFx0Y29uc3QgY29uZmlybUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLWNvbmZpcm0nKTtcblxuXHRcdGNvbnN0IENhbmNlbCA9IGNhbmNlbEVkaXQuY2xvbmVOb2RlKHRydWUpO1xuXHRcdGNvbnN0IENvbmZpcm0gPSBjb25maXJtRWRpdC5jbG9uZU5vZGUodHJ1ZSk7XG5cblx0XHRjYW5jZWxFZGl0LnJlcGxhY2VXaXRoKENhbmNlbCk7XG5cdFx0Y29uZmlybUVkaXQucmVwbGFjZVdpdGgoQ29uZmlybSk7XG5cblx0XHRDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZGlhbG9nRWRpdC5jbG9zZSgpO1xuXHRcdH0pO1xuXG5cdFx0Q29uZmlybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpZiAodGl0bGVFZGl0LnZhbHVlICE9ICcnKSB7XG5cdFx0XHRcdGhlbHBlci5lZGl0VGFzayhcblx0XHRcdFx0XHRwcm9qZWN0TmFtZSxcblx0XHRcdFx0XHRjdXJyZW50SW5kZXgsXG5cdFx0XHRcdFx0dGl0bGVFZGl0LnZhbHVlLFxuXHRcdFx0XHRcdGRhdGVFZGl0LnZhbHVlLFxuXHRcdFx0XHRcdHByaW9yaXR5RWRpdC52YWx1ZSxcblx0XHRcdFx0XHRkaXNjcmlwdGlvbkVkaXQudmFsdWVcblx0XHRcdFx0KTtcblx0XHRcdFx0ZGlzcGxheSgpO1xuXHRcdFx0fVxuXHRcdFx0ZGlhbG9nRWRpdC5jbG9zZSgpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdC8vIFx0aWYgKCF0YXNrQ2FyZC5jb250YWlucyhlLnRhcmdldCkpIHtcblx0XHQvLyBcdCAgc3BhbjMuY2xhc3NMaXN0LnJlbW92ZShcImNvbGxhcHNlXCIpXG5cdFx0Ly8gXHQgIGV4cGFuZC5jbGFzc0xpc3QucmVtb3ZlKFwiY29sbGFzcGVcIilcblx0XHQvLyBcdH1cblx0XHQvLyAgIH0pXG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGNyZWF0ZSxcblx0XHRidXR0b25MaXN0bmVycyxcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNhcmQ7XG4iLCJpbXBvcnQgeyBpc1Bhc3QsIGlzVG9kYXkgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgY2FyZCBmcm9tICcuL2NhcmQnO1xuaW1wb3J0IGhlbHBlciBmcm9tICcuL2hlbHBlcic7XG5sZXQgRHVlID0gKCkgPT4ge1xuXHRjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stYWRkJyk7XG5cdGFkZFRhc2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0Y29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza2xpc3QnKTtcblxuXHRmdW5jdGlvbiB0b2RheURpc3BsYXkoKSB7XG5cdFx0Y29uc3QgcHJvamVjdHMgPSBoZWxwZXIuZ2V0UHJvamVjdHMoKTtcblx0XHR0YXNrTGlzdC50ZXh0Q29udGVudCA9ICcnO1xuXHRcdGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cdFx0dGl0bGUudGV4dENvbnRlbnQgPSAnUGFzdCBEdWUnO1xuXHRcdHRhc2tMaXN0LmFwcGVuZCh0aXRsZSk7XG5cblx0XHRwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuXHRcdFx0Y29uc3QgdGFza3MgPSBoZWxwZXIuZ2V0VGFza3MocHJvamVjdC5nZXROYW1lKCkpO1xuXG5cdFx0XHR0YXNrc1xuXHRcdFx0XHQuZmlsdGVyKHRhc2sgPT4gaXNQYXN0KHRhc2suZ2V0RGF0ZSgpKSAmJiAhdGFzay5nZXRDb21wbGV0ZSgpICYmICFpc1RvZGF5KHRhc2suZ2V0RGF0ZSgpKSlcblx0XHRcdFx0LmZvckVhY2goKHRhc2ssaW5kZXgpID0+IHtcblx0XHRcdFx0XHRjYXJkLmNyZWF0ZShwcm9qZWN0LHRhc2ssaW5kZXgsdG9kYXlEaXNwbGF5KVxuXHRcdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHRjYXJkLmJ1dHRvbkxpc3RuZXJzKHRvZGF5RGlzcGxheSk7XG5cdHRvZGF5RGlzcGxheSgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHVlO1xuXG4iLCJpbXBvcnQgVG9kbyBmcm9tICcuL1RvLWRvJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xuXG5sZXQgaGVscGVyID0gKCgpID0+IHtcblx0ZnVuY3Rpb24gdXBkYXRlTG9jYWxTdG9yYWdlKGRhdGEpIHtcblx0XHRjb25zdCB0b2RvSnNvbiA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvJywgdG9kb0pzb24pO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmV0cml2ZSgpIHtcblx0XHQvLyBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8nKVxuXHRcdC8vIGlmKGRhdGEgPT09IG51bGwpIHtyZXR1cm4gbmV3IFRvZG8oKX1cblx0XHRjb25zdCB0b2RvTGlzdCA9IE9iamVjdC5hc3NpZ24oXG5cdFx0XHRuZXcgVG9kbygpLFxuXHRcdFx0SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kbycpKVxuXHRcdCk7XG5cdFx0dG9kb0xpc3Quc2V0UHJvamVjdChcblx0XHRcdHRvZG9MaXN0XG5cdFx0XHRcdC5nZXRQcm9qZWN0cygpXG5cdFx0XHRcdC5tYXAoKHByb2plY3QpID0+IE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QoKSwgcHJvamVjdCkpXG5cdFx0KTtcblx0XHR0b2RvTGlzdFxuXHRcdFx0LmdldFByb2plY3RzKClcblx0XHRcdC5mb3JFYWNoKChwcm9qZWN0KSA9PlxuXHRcdFx0XHRwcm9qZWN0LnNldFRhc2tzKFxuXHRcdFx0XHRcdHByb2plY3QuZ2V0VGFza3MoKS5tYXAoKHRhc2spID0+IE9iamVjdC5hc3NpZ24obmV3IFRhc2soKSwgdGFzaykpXG5cdFx0XHRcdClcblx0XHRcdCk7XG5cdFx0cmV0dXJuIHRvZG9MaXN0O1xuXHR9XG5cblx0Ly8gZnVuY3Rpb24gcmV0cml2ZSgpIHtcblx0Ly8gICAgIGNvbnN0IHJldml2ZWRUb2RvID0gbmV3IFRvZG8oKTtcblx0Ly8gICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kbycpO1xuXHQvLyAgICAgaWYoZGF0YSkge1xuXHQvLyAgICAgICAgIGNvbnN0IHRvZG9EYXRhID0gSlNPTi5wYXJzZShkYXRhKVxuXHQvLyAgICAgICAgIGZvcihjb25zdCBwcm9qZWN0RGF0YSBvZiB0b2RvRGF0YS5wcm9qZWN0cykge1xuXHQvLyAgICAgICAgICAgICBPYmplY3QuYXNzaWduKClcblx0Ly8gICAgICAgICAgICAgY29uc3QgcmV2aXZlZFByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0RGF0YS5uYW1lKVxuXHQvLyAgICAgICAgICAgICBmb3IoY29uc3QgdGFza0RhdGEgb2YgcHJvamVjdERhdGEubGlzdCkge1xuXHQvLyAgICAgICAgICAgICAgICAgY29uc3QgcmV2aXZlZHRhc2sgPSBuZXcgVGFzayh0YXNrRGF0YS5uYW1lLHRhc2tEYXRhLmRhdGUsdGFza0RhdGEucHJpb3JpdHksdGFza0RhdGEuY29tcGxldGUpXG5cdC8vICAgICAgICAgICAgICAgICByZXZpdmVkUHJvamVjdC5hZGRUYXNrKHJldml2ZWR0YXNrKVxuXHQvLyAgICAgICAgICAgICB9XG5cdC8vICAgICAgICAgICAgIHJldml2ZWRUb2RvLmFkZFByb2plY3QocmV2aXZlZFByb2plY3QpXG5cdC8vICAgICAgICAgfVxuXHQvLyAgICAgfVxuXG5cdC8vICAgICByZXR1cm4gcmV2aXZlZFRvZG87XG5cdC8vIH1cblxuXHRmdW5jdGlvbiBhZGRQcm9qZWN0KG5hbWUpIHtcblx0XHRjb25zdCB0b2RvTGlzdCA9IHJldHJpdmUoKTtcblx0XHR0b2RvTGlzdC5hZGRQcm9qZWN0KG5hbWUpO1xuXHRcdHVwZGF0ZUxvY2FsU3RvcmFnZSh0b2RvTGlzdCk7XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVQcm9qZWN0KGluZGV4KSB7XG5cdFx0Y29uc3QgdG9kb0xpc3QgPSByZXRyaXZlKCk7XG5cdFx0dG9kb0xpc3QucmVtb3ZlUHJvamVjdChpbmRleCk7XG5cdFx0dXBkYXRlTG9jYWxTdG9yYWdlKHRvZG9MaXN0KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuXHRcdGNvbnN0IHRvZG9MaXN0ID0gcmV0cml2ZSgpO1xuXHRcdHJldHVybiB0b2RvTGlzdC5nZXRQcm9qZWN0cygpO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlVGFzayhwcm9qZWN0TmFtZSwgaW5kZXgpIHtcblx0XHRjb25zdCB0b2RvTGlzdCA9IHJldHJpdmUoKTtcblx0XHRjb25zdCBwcm9qZWN0ID0gdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XG5cdFx0aWYgKHByb2plY3QgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cHJvamVjdC5yZW1vdmVUYXNrKGluZGV4KTtcblx0XHR9XG5cdFx0dXBkYXRlTG9jYWxTdG9yYWdlKHRvZG9MaXN0KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZFRhc2socHJvamVjdE5hbWUsIG5hbWUsIGRhdGUsIHByaW9yaXR5LCBkaXNjcmlwdGlvbikge1xuXHRcdGNvbnN0IHRvZG9MaXN0ID0gcmV0cml2ZSgpO1xuXHRcdGNvbnN0IHByb2plY3QgPSB0b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcblx0XHRwcm9qZWN0LmFkZFRhc2sobmFtZSwgZGF0ZSwgcHJpb3JpdHksIGRpc2NyaXB0aW9uKTtcblx0XHR1cGRhdGVMb2NhbFN0b3JhZ2UodG9kb0xpc3QpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZWRpdFRhc2socHJvamVjdE5hbWUsIGluZGV4LCBuYW1lLCBkYXRlLCBwcmlvcml0eSwgZGlzY3JpcHRpb24pIHtcblx0XHRjb25zdCB0b2RvTGlzdCA9IHJldHJpdmUoKTtcblx0XHRjb25zdCBwcm9qZWN0ID0gdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XG5cdFx0Y29uc3QgdGFza3MgPSBwcm9qZWN0LmdldFRhc2tzKCk7XG5cdFx0dGFza3NbaW5kZXhdLnNldFRhc2sobmFtZSwgZGF0ZSwgcHJpb3JpdHksIGRpc2NyaXB0aW9uKTtcblx0XHR1cGRhdGVMb2NhbFN0b3JhZ2UodG9kb0xpc3QpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0VGFza3MocHJvamVjdE5hbWUpIHtcblx0XHRjb25zdCB0b2RvTGlzdCA9IHJldHJpdmUoKTtcblx0XHRjb25zdCBwcm9qZWN0ID0gdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XG5cdFx0cmV0dXJuIHByb2plY3QuZ2V0VGFza3MoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNoYW5nZUNvbXBsZXRlKHByb2plY3ROYW1lLCBpbmRleCkge1xuXHRcdGNvbnN0IHRvZG9MaXN0ID0gcmV0cml2ZSgpO1xuXHRcdGNvbnN0IHByb2plY3QgPSB0b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcblx0XHRjb25zdCB0YXNrID0gcHJvamVjdC5nZXRUYXNrcygpW2luZGV4XTtcblx0XHR0YXNrLmNoYW5nZUNvbXBsZXRlKCk7XG5cdFx0dXBkYXRlTG9jYWxTdG9yYWdlKHRvZG9MaXN0KTtcblx0XHRyZXR1cm4gdGFzay5nZXRDb21wbGV0ZSgpXG5cdH1cblx0cmV0dXJuIHtcblx0XHR1cGRhdGVMb2NhbFN0b3JhZ2UsXG5cdFx0cmV0cml2ZSxcblx0XHRhZGRQcm9qZWN0LFxuXHRcdHJlbW92ZVByb2plY3QsXG5cdFx0Z2V0UHJvamVjdHMsXG5cdFx0YWRkVGFzayxcblx0XHRyZW1vdmVUYXNrLFxuXHRcdGdldFRhc2tzLFxuXHRcdGVkaXRUYXNrLFxuXHRcdGNoYW5nZUNvbXBsZXRlLFxuXHR9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgaGVscGVyO1xuIiwiLy8gaW1wb3J0IHRvZG8gZnJvbSBcIi4vVG8tZG9cIjtcbmltcG9ydCBjYXJkIGZyb20gJy4vY2FyZCc7XG5pbXBvcnQgaGVscGVyIGZyb20gJy4vaGVscGVyJztcblxubGV0IGhvbWVEb20gPSAoKSA9PiB7XG5cdGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1hZGQnKTtcblx0YWRkVGFzay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrbGlzdCcpO1xuXHRsZXQgdGFza3MgPSBbXTtcblx0ZnVuY3Rpb24gaG9tZURpc3BsYXkoKSB7XG5cdFx0Y29uc3QgcHJvamVjdHMgPSBoZWxwZXIuZ2V0UHJvamVjdHMoKTtcblx0XHR0YXNrTGlzdC50ZXh0Q29udGVudCA9ICcnO1xuXHRcdGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cdFx0dGl0bGUudGV4dENvbnRlbnQgPSAnSG9tZSc7XG5cdFx0dGFza0xpc3QuYXBwZW5kKHRpdGxlKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBwcm9qZWN0ID0gcHJvamVjdHNbaV07XG5cdFx0XHR0YXNrcyA9IGhlbHBlci5nZXRUYXNrcyhwcm9qZWN0LmdldE5hbWUoKSk7XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHRhc2tzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGxldCB0YXNrID0gdGFza3Nbal07XG5cdFx0XHRcdGNhcmQuY3JlYXRlKHByb2plY3QsIHRhc2ssIGosIGhvbWVEaXNwbGF5KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjYXJkLmJ1dHRvbkxpc3RuZXJzKGhvbWVEaXNwbGF5KTtcblx0aG9tZURpc3BsYXkoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVEb207XG4iLCJpbXBvcnQgdGFzayBmcm9tICcuL3Rhc2snO1xuaW1wb3J0IGhlbHBlciBmcm9tICcuL2hlbHBlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuXHRjb25zdHJ1Y3RvcihuYW1lKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmxpc3QgPSBbXTtcblx0fVxuXG5cdHNldFRhc2tzKHRhc2tzKSB7XG5cdFx0dGhpcy5saXN0ID0gdGFza3M7XG5cdH1cblx0cmVtb3ZlVGFzayhpbmRleCkge1xuXHRcdHRoaXMubGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdGhlbHBlci51cGRhdGVMb2NhbFN0b3JhZ2UoKTtcblx0fVxuXG5cdGFkZFRhc2sobmFtZSwgZGF0ZSwgcHJpb3JpdHksIGRpc2NyaXB0aW9uKSB7XG5cdFx0dGhpcy5saXN0LnB1c2gobmV3IHRhc2sobmFtZSwgZGF0ZSwgcHJpb3JpdHksIGRpc2NyaXB0aW9uLCBmYWxzZSkpO1xuXHRcdGhlbHBlci51cGRhdGVMb2NhbFN0b3JhZ2UoKTtcblx0fVxuXG5cdGdldFRhc2tzKCkge1xuXHRcdHJldHVybiB0aGlzLmxpc3Q7XG5cdH1cblxuXHRnZXROYW1lKCkge1xuXHRcdHJldHVybiB0aGlzLm5hbWU7XG5cdH1cblxuXHRnZXRUYXNrKG5hbWUpIHtcblx0XHRjb25zdCByZXN1bHQgPSB0aGlzLmxpc3QuZmluZCgodGFzayA9IHRhc2suZ2V0VGl0bGUoKSA9PT0gbmFtZSkpO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cbn1cbiIsImltcG9ydCB0YXNrRG9tIGZyb20gJy4vdGFza0RvbSc7XG5pbXBvcnQgaG9tZURvbSBmcm9tICcuL2hvbWVEb20nO1xuaW1wb3J0IGhlbHBlciBmcm9tICcuL2hlbHBlcic7XG5pbXBvcnQgZGVsZXRlU3ZnIGZyb20gJy4vaW1nL2RlbGV0ZS5zdmcnO1xuaW1wb3J0IHNlbGVjdCBmcm9tICcuL3NlbGVjdGVkJztcblxubGV0IHByb2plY3REb20gPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXHRjb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb250ZW50LmFwcGVuZChwcm9qZWN0RGlzcGxheSk7XG5cdGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xuXHRjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1kaWFsb2cnKTtcblx0Y29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUnKTtcblx0Y29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbCcpO1xuXHRjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbmZpcm0nKTtcblx0cHJvamVjdElucHV0LnZhbHVlID0gJyc7XG5cdGZ1bmN0aW9uIGRpYWxvZ1Zpc2libGUoKSB7XG5cdFx0ZGlhbG9nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHR9XG5cblx0ZnVuY3Rpb24gZGlhbG9nSGlkZGVuKCkge1xuXHRcdGRpYWxvZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHR9XG5cblx0bGV0IGRpc3BsYXkgPSAoKSA9PiB7XG5cdFx0cHJvamVjdERpc3BsYXkudGV4dENvbnRlbnQgPSAnJztcblx0XHRsZXQgcHJvamVjdHMgPSBoZWxwZXIuZ2V0UHJvamVjdHMoKTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgcHJvamVjdCA9IHByb2plY3RzW2ldO1xuXHRcdFx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRkaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jYXJkJyk7XG5cdFx0XHRkaXYuZGF0YXNldC5pbmRleCA9IGk7XG5cdFx0XHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRcdFx0ZGVsLnNyYyA9IGRlbGV0ZVN2Zztcblx0XHRcdGRlbC5hbHQgPSAnRGVsZXRlJztcblx0XHRcdGRpdi5hcHBlbmQodGl0bGUpO1xuXHRcdFx0ZGl2LmFwcGVuZChkZWwpO1xuXG5cdFx0XHRkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0XHRzZWxlY3QuYWRkU2hhZG93KGUpO1xuXHRcdFx0XHR0YXNrRG9tKHByb2plY3QpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdGhlbHBlci5yZW1vdmVQcm9qZWN0KGRpdi5kYXRhc2V0LmluZGV4KTtcblx0XHRcdFx0aG9tZURvbSgpO1xuXHRcdFx0XHRkaXNwbGF5KCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKTtcblx0XHRcdHByb2plY3REaXNwbGF5LmFwcGVuZChkaXYpO1xuXHRcdH1cblx0fTtcblxuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0Ly8gZGlhbG9nLnNob3coKVxuXHRcdGRpYWxvZ1Zpc2libGUoKTtcblx0XHRidXR0b24ucmVwbGFjZVdpdGgoZGlhbG9nKTtcblx0XHRwcm9qZWN0SW5wdXQuZm9jdXMoKTtcblx0XHRidXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0fSk7XG5cblx0Y2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdC8vIGRpYWxvZy5jbG9zZSgpXG5cdFx0ZGlhbG9nSGlkZGVuKCk7XG5cdFx0YnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdGRpYWxvZy5yZXBsYWNlV2l0aChidXR0b24pO1xuXHRcdHByb2plY3RJbnB1dC52YWx1ZSA9ICcnO1xuXHR9KTtcblxuXHRjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHQvLyBlLnRhcmdldC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdC8vIGRpYWxvZy5jbG9zZSgpXG5cdFx0ZGlhbG9nSGlkZGVuKCk7XG5cdFx0YnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdGRpYWxvZy5yZXBsYWNlV2l0aChidXR0b24pO1xuXHRcdGlmIChwcm9qZWN0SW5wdXQudmFsdWUgIT0gJycpIHtcblx0XHRcdGhlbHBlci5hZGRQcm9qZWN0KHByb2plY3RJbnB1dC52YWx1ZSk7XG5cdFx0XHRjb25zdCB0b2RvID0gaGVscGVyLnJldHJpdmUoKTtcblx0XHRcdGNvbnN0IHByb2plY3QgPSB0b2RvLmdldFByb2plY3QocHJvamVjdElucHV0LnZhbHVlKTtcblx0XHRcdHRhc2tEb20ocHJvamVjdCk7XG5cdFx0XHRkaXNwbGF5KCk7XG5cdFx0XHRzZWxlY3QuYWRkU2hhZG93TGF0ZXN0UHJvamVjdCgpO1xuXHRcdH1cblx0XHRwcm9qZWN0SW5wdXQudmFsdWUgPSAnJztcblx0fSk7XG5cblx0ZGlzcGxheSgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdERvbTtcbiIsImltcG9ydCB7IGFkZCB9IGZyb20gJ2RhdGUtZm5zJztcblxubGV0IHNlbGVjdCA9ICgoKSA9PiB7XG5cdGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpO1xuXHRjb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheScpO1xuXHRjb25zdCBkdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlJyk7XG5cdGNvbnN0IHdlZWsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VlaycpO1xuXG5cdGNvbnN0IHNoYWRvdyA9ICdpbnNldCAwLjVlbSAwICM5RjczQUInO1xuXG5cdGZ1bmN0aW9uIGNsZWFyQWxsU2hhZG93cygpIHtcblx0XHRjb25zdCBwcm9qZWN0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtY2FyZCcpKTtcblx0XHRwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG5cdFx0XHRwcm9qZWN0LnN0eWxlLmJveFNoYWRvdyA9ICdub25lJztcblx0XHR9KTtcblx0XHR0b2RheS5zdHlsZS5ib3hTaGFkb3cgPSAnbm9uZSc7XG5cdFx0ZHVlLnN0eWxlLmJveFNoYWRvdyA9ICdub25lJztcblx0XHRob21lLnN0eWxlLmJveFNoYWRvdyA9ICdub25lJztcblx0XHR3ZWVrLnN0eWxlLmJveFNoYWRvdyA9ICdub25lJztcblx0fVxuXG5cdGZ1bmN0aW9uIHNlbGVjdEhvbWUoKSB7XG5cdFx0Y2xlYXJBbGxTaGFkb3dzKCk7XG5cdFx0aG9tZS5zdHlsZS5ib3hTaGFkb3cgPSBzaGFkb3c7XG5cdH1cblxuXHRmdW5jdGlvbiBzZWxlY3RUb2RheSgpIHtcblx0XHRjbGVhckFsbFNoYWRvd3MoKTtcblx0XHR0b2RheS5zdHlsZS5ib3hTaGFkb3cgPSBzaGFkb3c7XG5cdH1cblxuXHRmdW5jdGlvbiBzZWxlY3REdWUoKSB7XG5cdFx0Y2xlYXJBbGxTaGFkb3dzKCk7XG5cdFx0ZHVlLnN0eWxlLmJveFNoYWRvdyA9IHNoYWRvdztcblx0fVxuXG5cdGZ1bmN0aW9uIHNlbGVjdFByb2plY3QoZSkge1xuXHRcdGNsZWFyQWxsU2hhZG93cygpO1xuXHRcdGUudGFyZ2V0LnN0eWxlLmJveFNoYWRvdyA9IHNoYWRvdztcblx0fVxuXG5cdGZ1bmN0aW9uIHNlbGVjdFdlZWsoZSkge1xuXHRcdGNsZWFyQWxsU2hhZG93cygpO1xuXHRcdHdlZWsuc3R5bGUuYm94U2hhZG93ID0gc2hhZG93O1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkU2hhZG93KGV2ZW50KSB7XG5cdFx0Y2xlYXJBbGxTaGFkb3dzKCk7XG5cdFx0Ly8gRmluZCB0aGUgY2xvc2VzdCBwYXJlbnQgZGl2IHdpdGggY2xhc3MgXCJwYXJlbnQtZGl2XCJcblx0XHR2YXIgdGFyZ2V0RGl2ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0LWNhcmQnKTtcblx0XHRpZiAodGFyZ2V0RGl2KSB7XG5cdFx0XHR0YXJnZXREaXYuc3R5bGUuYm94U2hhZG93ID0gc2hhZG93OyAvLyBBZGQgc2hhZG93XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gYWRkU2hhZG93TGF0ZXN0UHJvamVjdCgpIHtcblx0XHRzZWxlY3QuY2xlYXJBbGxTaGFkb3dzKCk7XG5cdFx0Y29uc3QgcHJvamVjdERvbSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtY2FyZCcpKTtcblx0XHRwcm9qZWN0RG9tW3Byb2plY3REb20ubGVuZ3RoIC0gMV0uc3R5bGUuYm94U2hhZG93ID0gc2hhZG93O1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRzZWxlY3RIb21lLFxuXHRcdHNlbGVjdFRvZGF5LFxuXHRcdHNlbGVjdER1ZSxcblx0XHRzZWxlY3RQcm9qZWN0LFxuXHRcdGFkZFNoYWRvdyxcblx0XHRjbGVhckFsbFNoYWRvd3MsXG5cdFx0YWRkU2hhZG93TGF0ZXN0UHJvamVjdCxcblx0XHRzZWxlY3RXZWVrLFxuXHR9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0O1xuIiwiaW1wb3J0IGhlbHBlciBmcm9tICcuL2hlbHBlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcblx0Y29uc3RydWN0b3IobmFtZSwgZGF0ZSwgcHJpb3JpdHksIGRpc2NyaXB0aW9uLCBjb21wbGV0ZSkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5kYXRlID0gZGF0ZTtcblx0XHR0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cdFx0dGhpcy5kaXNjcmlwdGlvbiA9IGRpc2NyaXB0aW9uO1xuXHRcdHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcblx0fVxuXG5cdHNldFRhc2sobmFtZSwgZGF0ZSwgcHJpb3JpdHksIGRpc2NyaXB0aW9uKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmRhdGUgPSBkYXRlO1xuXHRcdHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcblx0XHR0aGlzLmRpc2NyaXB0aW9uID0gZGlzY3JpcHRpb247XG5cdFx0aGVscGVyLnVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuXHR9XG5cblx0Y2hhbmdlQ29tcGxldGUoKSB7XG5cdFx0dGhpcy5jb21wbGV0ZSA9ICF0aGlzLmNvbXBsZXRlO1xuXHRcdGhlbHBlci51cGRhdGVMb2NhbFN0b3JhZ2UoKTtcblx0fVxuXHRnZXRUaXRsZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xuXHR9XG5cblx0Z2V0RGF0ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRlO1xuXHR9XG5cblx0Z2V0UHJpb3JpdHkoKSB7XG5cdFx0cmV0dXJuIHRoaXMucHJpb3JpdHk7XG5cdH1cblxuXHRnZXRDb21wbGV0ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5jb21wbGV0ZTtcblx0fVxuXG5cdGdldERpc2NyaXB0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmRpc2NyaXB0aW9uO1xuXHR9XG59XG4iLCJpbXBvcnQgY2FyZCBmcm9tICcuL2NhcmQnO1xuaW1wb3J0IGhlbHBlciBmcm9tICcuL2hlbHBlcic7XG5sZXQgdGFza0RvbSA9IChwcm9qZWN0KSA9PiB7XG5cdGNvbnN0IHRhc2tsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tsaXN0Jyk7XG5cdGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzaycpO1xuXHRjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1jYW5jZWwnKTtcblx0Y29uc3QgY29uZmlybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWNvbmZpcm0nKTtcblx0Y29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGlhbG9nJyk7XG5cdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUnKTtcblx0Y29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRhdGUnKTtcblx0Y29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1wcmlvcml0eScpO1xuXHRjb25zdCBkaXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWluZm8nKTtcblx0Y29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWFkZCcpO1xuXG5cdGFkZFRhc2suc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdGxldCBsaXN0ID0gW107XG5cdGZ1bmN0aW9uIGRpc3BsYXkoKSB7XG5cdFx0bGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblx0XHR0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0TmFtZSgpO1xuXHRcdHRhc2tsaXN0LnRleHRDb250ZW50ID0gJyc7XG5cdFx0dGFza2xpc3QuYXBwZW5kKHRpdGxlKTtcblx0XHRsaXN0ID0gaGVscGVyLmdldFRhc2tzKHByb2plY3QuZ2V0TmFtZSgpKTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCB0YXNrID0gbGlzdFtpXTtcblx0XHRcdGNhcmQuY3JlYXRlKHByb2plY3QsIHRhc2ssIGksIGRpc3BsYXkpO1xuXHRcdH1cblx0fVxuXG5cdGRpc3BsYXkoKTtcblxuXHRjYXJkLmJ1dHRvbkxpc3RuZXJzKGRpc3BsYXkpO1xuXHRmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoKSB7XG5cdFx0bGV0IG5ld0J1dHRvbiA9IGJ1dHRvbi5jbG9uZU5vZGUodHJ1ZSk7XG5cdFx0bGV0IG5ld0NhbmNlbCA9IGNhbmNlbC5jbG9uZU5vZGUodHJ1ZSk7XG5cdFx0bGV0IG5ld0NvbmZpcm0gPSBjb25maXJtLmNsb25lTm9kZSh0cnVlKTtcblxuXHRcdGJ1dHRvbi5yZXBsYWNlV2l0aChuZXdCdXR0b24pO1xuXHRcdGNhbmNlbC5yZXBsYWNlV2l0aChuZXdDYW5jZWwpO1xuXHRcdGNvbmZpcm0ucmVwbGFjZVdpdGgobmV3Q29uZmlybSk7XG5cblx0XHRuZXdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRkaWFsb2cuc2hvd01vZGFsKCk7XG5cdFx0fSk7XG5cblx0XHRuZXdDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZGlhbG9nLmNsb3NlKCk7XG5cdFx0XHR0aXRsZS52YWx1ZSA9ICcnO1xuXHRcdFx0cHJpb3JpdHkudmFsdWUgPSAnJztcblx0XHRcdGRpc2NyaXB0aW9uLnZhbHVlID0gJyc7XG5cdFx0XHRkYXRlLnZhbHVlID0gJyc7XG5cdFx0fSk7XG5cblx0XHRuZXdDb25maXJtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGlmICh0aXRsZS52YWx1ZSAhPSAnJykge1xuXHRcdFx0XHRoZWxwZXIuYWRkVGFzayhcblx0XHRcdFx0XHRwcm9qZWN0LmdldE5hbWUoKSxcblx0XHRcdFx0XHR0aXRsZS52YWx1ZSxcblx0XHRcdFx0XHRkYXRlLnZhbHVlLFxuXHRcdFx0XHRcdHByaW9yaXR5LnZhbHVlLFxuXHRcdFx0XHRcdGRpc2NyaXB0aW9uLnZhbHVlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGRpc3BsYXkoKTtcblx0XHRcdH1cblx0XHRcdHRpdGxlLnZhbHVlID0gJyc7XG5cdFx0XHRwcmlvcml0eS52YWx1ZSA9ICcnO1xuXHRcdFx0ZGlzY3JpcHRpb24udmFsdWUgPSAnJztcblx0XHRcdGRhdGUudmFsdWUgPSAnJztcblx0XHRcdGRpYWxvZy5jbG9zZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0cmVtb3ZlTGlzdGVuZXJzKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0YXNrRG9tO1xuXG5cbiIsIi8vIGltcG9ydCB0b2RvIGZyb20gXCIuL1RvLWRvXCI7XG5pbXBvcnQgY2FyZCBmcm9tICcuL2NhcmQnO1xuaW1wb3J0IGhlbHBlciBmcm9tICcuL2hlbHBlcic7XG5cbmxldCB0b2RheSA9ICgpID0+IHtcblx0Y29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWFkZCcpO1xuXHRhZGRUYXNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tsaXN0Jyk7XG5cblx0ZnVuY3Rpb24gZ2V0VG9kYXlEYXRlKCkge1xuXHRcdGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcblx0XHRjb25zdCB5ZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcblx0XHRjb25zdCBtb250aCA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcblx0XHRjb25zdCBkYXkgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuXHRcdHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xuXHR9XG5cblx0ZnVuY3Rpb24gdG9kYXlEaXNwbGF5KCkge1xuXHRcdHRhc2tMaXN0LnRleHRDb250ZW50ID0gJyc7XG5cdFx0Y29uc3QgcHJvamVjdHMgPSBoZWxwZXIuZ2V0UHJvamVjdHMoKTtcblx0XHRsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXHRcdHRpdGxlLnRleHRDb250ZW50ID0gJ1RvZGF5Jztcblx0XHR0YXNrTGlzdC5hcHBlbmQodGl0bGUpO1xuXHRcdHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG5cdFx0XHRjb25zdCB0YXNrcyA9IGhlbHBlci5nZXRUYXNrcyhwcm9qZWN0LmdldE5hbWUoKSk7XG5cblx0XHRcdHRhc2tzXG5cdFx0XHRcdC5maWx0ZXIodGFzayA9PiB0YXNrLmdldERhdGUoKSA9PT0gZ2V0VG9kYXlEYXRlKCkpXG5cdFx0XHRcdC5mb3JFYWNoKCh0YXNrLGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0Y2FyZC5jcmVhdGUocHJvamVjdCx0YXNrLGluZGV4LHRvZGF5RGlzcGxheSlcblx0XHRcdFx0fSlcblx0XHR9KVxuXG5cdH1cblxuXHRjYXJkLmJ1dHRvbkxpc3RuZXJzKHRvZGF5RGlzcGxheSk7XG5cdHRvZGF5RGlzcGxheSgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9kYXk7XG4iLCJpbXBvcnQgeyBpc0Z1dHVyZSB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBjYXJkIGZyb20gJy4vY2FyZCc7XG5pbXBvcnQgaGVscGVyIGZyb20gJy4vaGVscGVyJztcbmxldCBXZWVrID0gKCkgPT4ge1xuXHRjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stYWRkJyk7XG5cdGFkZFRhc2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0Y29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza2xpc3QnKTtcblx0ZnVuY3Rpb24gdG9kYXlEaXNwbGF5KCkge1xuXHRcdGNvbnN0IHByb2plY3RzID0gaGVscGVyLmdldFByb2plY3RzKCk7XG5cdFx0dGFza0xpc3QudGV4dENvbnRlbnQgPSAnJztcblx0XHRsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXHRcdHRpdGxlLnRleHRDb250ZW50ID0gJ1VwIENvbWluZyc7XG5cdFx0dGFza0xpc3QuYXBwZW5kKHRpdGxlKTtcblxuXG5cdFx0cHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcblx0XHRcdGNvbnN0IHRhc2tzID0gaGVscGVyLmdldFRhc2tzKHByb2plY3QuZ2V0TmFtZSgpKTtcblx0XHRcdHRhc2tzXG5cdFx0XHRcdC5maWx0ZXIodGFzayA9PiBpc0Z1dHVyZSh0YXNrLmdldERhdGUoKSkpXG5cdFx0XHRcdC5mb3JFYWNoKCh0YXNrLGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0Y2FyZC5jcmVhdGUocHJvamVjdCx0YXNrLGluZGV4LHRvZGF5RGlzcGxheSlcblx0XHRcdFx0fSlcblx0XHR9KVxuXG5cdH1cblxuXHRjYXJkLmJ1dHRvbkxpc3RuZXJzKHRvZGF5RGlzcGxheSk7XG5cdHRvZGF5RGlzcGxheSgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2VlaztcblxuIiwiLyoqXG4gKiBAbmFtZSBjb25zdHJ1Y3RGcm9tXG4gKiBAY2F0ZWdvcnkgR2VuZXJpYyBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb25zdHJ1Y3RzIGEgZGF0ZSB1c2luZyB0aGUgcmVmZXJlbmNlIGRhdGUgYW5kIHRoZSB2YWx1ZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGZ1bmN0aW9uIGNvbnN0cnVjdHMgYSBuZXcgZGF0ZSB1c2luZyB0aGUgY29uc3RydWN0b3IgZnJvbSB0aGUgcmVmZXJlbmNlXG4gKiBkYXRlIGFuZCB0aGUgZ2l2ZW4gdmFsdWUuIEl0IGhlbHBzIHRvIGJ1aWxkIGdlbmVyaWMgZnVuY3Rpb25zIHRoYXQgYWNjZXB0XG4gKiBkYXRlIGV4dGVuc2lvbnMuXG4gKlxuICogSXQgZGVmYXVsdHMgdG8gYERhdGVgIGlmIHRoZSBwYXNzZWQgcmVmZXJlbmNlIGRhdGUgaXMgYSBudW1iZXIgb3IgYSBzdHJpbmcuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgcmVmZXJlbmNlIGRhdGUgdG8gdGFrZSBjb25zdHJ1Y3RvciBmcm9tXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY3JlYXRlIHRoZSBkYXRlXG4gKlxuICogQHJldHVybnMgRGF0ZSBpbml0aWFsaXplZCB1c2luZyB0aGUgZ2l2ZW4gZGF0ZSBhbmQgdmFsdWVcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gJ2RhdGUtZm5zJ1xuICpcbiAqIC8vIEEgZnVuY3Rpb24gdGhhdCBjbG9uZXMgYSBkYXRlIHByZXNlcnZpbmcgdGhlIG9yaWdpbmFsIHR5cGVcbiAqIGZ1bmN0aW9uIGNsb25lRGF0ZTxEYXRlVHlwZSBleHRlbmRzIERhdGUoZGF0ZTogRGF0ZVR5cGUpOiBEYXRlVHlwZSB7XG4gKiAgIHJldHVybiBjb25zdHJ1Y3RGcm9tKFxuICogICAgIGRhdGUsIC8vIFVzZSBjb250cnVzdG9yIGZyb20gdGhlIGdpdmVuIGRhdGVcbiAqICAgICBkYXRlLmdldFRpbWUoKSAvLyBVc2UgdGhlIGRhdGUgdmFsdWUgdG8gY3JlYXRlIGEgbmV3IGRhdGVcbiAqICAgKVxuICogfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0RnJvbShkYXRlLCB2YWx1ZSkge1xuICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gbmV3IGRhdGUuY29uc3RydWN0b3IodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSk7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBjb25zdHJ1Y3RGcm9tO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgY29uc3RydWN0Tm93XG4gKiBAY2F0ZWdvcnkgR2VuZXJpYyBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb25zdHJ1Y3RzIGEgbmV3IGN1cnJlbnQgZGF0ZSB1c2luZyB0aGUgcGFzc2VkIHZhbHVlIGNvbnN0cnVjdG9yLlxuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBjb25zdHJ1Y3RzIGEgbmV3IGN1cnJlbnQgZGF0ZSB1c2luZyB0aGUgY29uc3RydWN0b3IgZnJvbVxuICogdGhlIHJlZmVyZW5jZSBkYXRlLiBJdCBoZWxwcyB0byBidWlsZCBnZW5lcmljIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdCBkYXRlXG4gKiBleHRlbnNpb25zIGFuZCB1c2UgdGhlIGN1cnJlbnQgZGF0ZS5cbiAqXG4gKiBJdCBkZWZhdWx0cyB0byBgRGF0ZWAgaWYgdGhlIHBhc3NlZCByZWZlcmVuY2UgZGF0ZSBpcyBhIG51bWJlciBvciBhIHN0cmluZy5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSByZWZlcmVuY2UgZGF0ZSB0byB0YWtlIGNvbnN0cnVjdG9yIGZyb21cbiAqXG4gKiBAcmV0dXJucyBDdXJyZW50IGRhdGUgaW5pdGlhbGl6ZWQgdXNpbmcgdGhlIGdpdmVuIGRhdGUgY29uc3RydWN0b3JcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY29uc3RydWN0Tm93LCBpc1NhbWVEYXkgfSBmcm9tICdkYXRlLWZucydcbiAqXG4gKiBmdW5jdGlvbiBpc1RvZGF5PERhdGVUeXBlIGV4dGVuZHMgRGF0ZT4oXG4gKiAgIGRhdGU6IERhdGVUeXBlIHwgbnVtYmVyIHwgc3RyaW5nLFxuICogKTogYm9vbGVhbiB7XG4gKiAgIC8vIElmIHdlIHdlcmUgdG8gdXNlIGBuZXcgRGF0ZSgpYCBkaXJlY3RseSwgdGhlIGZ1bmN0aW9uIHdvdWxkICBiZWhhdmVcbiAqICAgLy8gZGlmZmVyZW50bHkgaW4gZGlmZmVyZW50IHRpbWV6b25lcyBhbmQgcmV0dXJuIGZhbHNlIGZvciB0aGUgc2FtZSBkYXRlLlxuICogICByZXR1cm4gaXNTYW1lRGF5KGRhdGUsIGNvbnN0cnVjdE5vdyhkYXRlKSk7XG4gKiB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3ROb3coZGF0ZSkge1xuICByZXR1cm4gY29uc3RydWN0RnJvbShkYXRlLCBEYXRlLm5vdygpKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBjb25zdHJ1Y3ROb3c7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNGdXR1cmVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIGZ1dHVyZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgZnV0dXJlP1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyBpbiB0aGUgZnV0dXJlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyAzMSBEZWNlbWJlciAyMDE0IGluIHRoZSBmdXR1cmU/XG4gKiBjb25zdCByZXN1bHQgPSBpc0Z1dHVyZShuZXcgRGF0ZSgyMDE0LCAxMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1dHVyZShkYXRlKSB7XG4gIHJldHVybiArdG9EYXRlKGRhdGUpID4gRGF0ZS5ub3coKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc0Z1dHVyZTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1Bhc3RcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHBhc3Q/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHBhc3Q/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIGluIHRoZSBwYXN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyAyIEp1bHkgMjAxNCBpbiB0aGUgcGFzdD9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzUGFzdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQYXN0KGRhdGUpIHtcbiAgcmV0dXJuICt0b0RhdGUoZGF0ZSkgPCBEYXRlLm5vdygpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzUGFzdDtcbiIsImltcG9ydCB7IHN0YXJ0T2ZEYXkgfSBmcm9tIFwiLi9zdGFydE9mRGF5Lm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG5cbiAqIEByZXR1cm5zIFRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lRGF5KGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3QgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkYXRlTGVmdCk7XG4gIGNvbnN0IGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRhdGVSaWdodCk7XG5cbiAgcmV0dXJuICtkYXRlTGVmdFN0YXJ0T2ZEYXkgPT09ICtkYXRlUmlnaHRTdGFydE9mRGF5O1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzU2FtZURheTtcbiIsImltcG9ydCB7IGNvbnN0cnVjdE5vdyB9IGZyb20gXCIuL2NvbnN0cnVjdE5vdy5tanNcIjtcbmltcG9ydCB7IGlzU2FtZURheSB9IGZyb20gXCIuL2lzU2FtZURheS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyB0b2RheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVG9kYXkoZGF0ZSkge1xuICByZXR1cm4gaXNTYW1lRGF5KGRhdGUsIGNvbnN0cnVjdE5vdyhkYXRlKSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNUb2RheTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSBkYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mRGF5O1xuIiwiLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGFyZ3VtZW50IC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICBjb25zdCBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChcbiAgICBhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIGFyZ3VtZW50ID09PSBcIm9iamVjdFwiICYmIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IERhdGVdXCIpXG4gICkge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgYXJndW1lbnQuY29uc3RydWN0b3IoK2FyZ3VtZW50KTtcbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwibnVtYmVyXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBOdW1iZXJdXCIgfHxcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwic3RyaW5nXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBTdHJpbmddXCJcbiAgKSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHRvRGF0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgcHJvamVjdERvbSBmcm9tICcuL3Byb2plY3REb20uanMnO1xuaW1wb3J0IGhvbWVEb20gZnJvbSAnLi9ob21lRG9tLmpzJztcbmltcG9ydCB0b2RheURvbSBmcm9tICcuL3RvZGF5RG9tLmpzJztcbmltcG9ydCBEdWUgZnJvbSAnLi9kdWVEb20uanMnO1xuaW1wb3J0IFdlZWsgZnJvbSAnLi93ZWVrRG9tLmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGhvbWVTdmcgZnJvbSAnLi9pbWcvaG9tZS5zdmcnO1xuaW1wb3J0IGFsZXJ0U3ZnIGZyb20gJy4vaW1nL2FsZXJ0LnN2Zyc7XG5pbXBvcnQgdG9kYXlTdmcgZnJvbSAnLi9pbWcvdG9kYXkuc3ZnJztcbmltcG9ydCB1cGNvbWluZ1N2ZyBmcm9tICcuL2ltZy91cGNvbWluZy5zdmcnXG5pbXBvcnQgc2VsZWN0IGZyb20gJy4vc2VsZWN0ZWQuanMnO1xuXG5jb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKTtcbmNvbnN0IHRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5Jyk7XG5jb25zdCBkdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlJyk7XG5jb25zdCB3ZWVrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlZWsnKTtcblxuLy8gY29uc3QgaG9tZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuLy8gaG9tZUltZy5zcmMgPSBob21lU3ZnO1xuLy8gY29uc3QgaG9tZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4vLyBob21lU3Bhbi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuLy8gaG9tZS5hcHBlbmQoaG9tZUltZyk7XG4vLyBob21lLmFwcGVuZChob21lU3Bhbik7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYnMobWFpbiwgbmFtZSwgaW1nKSB7XG5cdGNvbnN0IEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRJbWcuc3JjID0gaW1nO1xuXHRjb25zdCBTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRTcGFuLnRleHRDb250ZW50ID0gbmFtZTtcblx0bWFpbi5hcHBlbmQoSW1nKTtcblx0bWFpbi5hcHBlbmQoU3Bhbik7XG59XG5cbmNyZWF0ZVRhYnMoaG9tZSwgJ0hvbWUnLCBob21lU3ZnKTtcbmNyZWF0ZVRhYnModG9kYXksICdUb2RheScsIHRvZGF5U3ZnKTtcbmNyZWF0ZVRhYnMoZHVlLCAnUGFzdCBEdWUnLCBhbGVydFN2Zyk7XG5jcmVhdGVUYWJzKHdlZWssICdVcCBDb21pbmcnLHVwY29taW5nU3ZnIClcblxuc2VsZWN0LnNlbGVjdEhvbWUoKTtcbmhvbWVEb20oKTtcblxuaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0c2VsZWN0LnNlbGVjdEhvbWUoKTtcblx0aG9tZURvbSgpO1xufSk7XG5cbnRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRzZWxlY3Quc2VsZWN0VG9kYXkoKTtcblx0dG9kYXlEb20oKTtcbn0pO1xuXG5kdWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdHNlbGVjdC5zZWxlY3REdWUoKTtcblx0RHVlKCk7XG59KTtcblxud2Vlay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0c2VsZWN0LnNlbGVjdFdlZWsoKTtcblx0V2VlaygpO1xufSk7XG5cbnByb2plY3REb20oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==