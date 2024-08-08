// import todo from "./To-do";
import card from "./card";
import helper from "./helper";
let homeDom = () => {
    const addTask = document.querySelector('.task-add')
    addTask.style.display = 'none'
    const taskList = document.querySelector('#tasklist');
    // const todo = helper.retrive()
    // const projects = todo.getProjects();
    const projects = helper.getProjects();
    let tasks = []
    function homeDisplay(){

        taskList.textContent = '';
        for(let i=0;i<projects.length;i++){
            let project = projects[i];
            tasks = helper.getTasks(project.getName());
            for(let j=0;j<tasks.length;j++) {
                let task = tasks[j];     
                card.create(project,task,j,homeDisplay)
            }
        }
    }

    card.buttonListners(homeDisplay)
    homeDisplay();
};

export default homeDom