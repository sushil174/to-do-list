// import todo from "./To-do";
import card from "./card";
import helper from "./helper";

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
        const projects = helper.getProjects();
        let title = document.createElement('h2');
        title.textContent = "Today";
        taskList.append(title)
        for(let i=0;i<projects.length;i++){
            
            let project = projects[i];

            tasks = helper.getTasks(project.getName());
            for(let j=0;j<tasks.length;j++) {
                let task = tasks[j];
                let currentDate = getTodayDate();

                if(task.getDate() === currentDate) {
                    card.create(project,task,j,todayDisplay)
                }     

            }
        }
    }

    card.buttonListners(todayDisplay) 
    todayDisplay();
};


export default today