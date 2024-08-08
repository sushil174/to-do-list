import { isPast } from "date-fns";
import card from "./card";
import helper from "./helper";
let Due = () => {
    const addTask = document.querySelector('.task-add')
    addTask.style.display = 'none'
    const taskList = document.querySelector('#tasklist');
    let tasks = []
    // const todo = helper.retrive();
    // const projects = todo.getProjects();
    const projects = helper.getProjects()
    function todayDisplay(){
        taskList.textContent = '';
        for(let i=0;i<projects.length;i++){
            
            let project = projects[i];

            tasks = helper.getTasks(project.getName());
            for(let j=0;j<tasks.length;j++) {
                let task = tasks[j];
                if(isPast(task.getDate()) && !task.getComplete()) {
                    card.create(project,task,j,todayDisplay)
                }     

            }
        }
    }

    card.buttonListners(todayDisplay) 
    todayDisplay();
};


export default Due