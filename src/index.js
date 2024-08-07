import projectDom from './projectDom.js';
import homeDom from './homeDom.js';
import todayDom from './todayDom.js';
import './style.css';

const home = document.querySelector('#home');
const today = document.querySelector('#today');

function hideAddTask() {
    const addTask = document.querySelector('.task-add')
    addTask.style.display = 'none'
}

homeDom()
home.addEventListener('click', ()=> {
    homeDom();
})

today.addEventListener('click', ()=> {
    todayDom();
})

projectDom()



