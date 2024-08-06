import projectDom from './projectDom.js';
import homeDom from './homeDom.js';
import todayDom from './todayDom.js';
import './style.css';

const home = document.querySelector('#home');
const due = document.querySelector('#due');
const today = document.querySelector('#today');

home.addEventListener('click', ()=> {
    homeDom();
})

today.addEventListener('click', ()=> {
    todayDom();
})

projectDom()



