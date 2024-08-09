import projectDom from './projectDom.js';
import homeDom from './homeDom.js';
import todayDom from './todayDom.js';
import Due from './dueDom.js';
import './style.css';
import homeSvg from './img/home.svg';
import alertSvg from './img/alert.svg';
import todaySvg from './img/today.svg';



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

createTabs(home,"Home",homeSvg);
createTabs(today,"Today",todaySvg);
createTabs(due,"Past Due",alertSvg);

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

