import projectDom from './projectDom.js';
import homeDom from './homeDom.js';
import todayDom from './todayDom.js';
import Due from './dueDom.js';
import './style.css';
import helper from './helper.js';

const home = document.querySelector('#home');
const today = document.querySelector('#today');
const due = document.querySelector('#due');

homeDom()

home.addEventListener('click', ()=> {
    homeDom();
})

today.addEventListener('click', ()=> {
    todayDom();
})

due.addEventListener('click', ()=> {
    Due();
})


projectDom()

// import helper from "./helper";

// const todo = helper.retrive();

// helper.addProject("work")
// helper.addProject("hihi")
// helper.updateLocalStorage(todo);

// const test = helper.retrive()
// // test.addProject("test")
// // helper.updateLocalStorage(test)
// console.log(test)

