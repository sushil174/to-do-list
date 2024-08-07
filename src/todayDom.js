import todo from "./To-do";
import card from "./card";
let today = () => {
    const addTask = document.querySelector('.task-add')
    addTask.style.display = 'none'
    const taskList = document.querySelector('#tasklist');
    const projects = todo.getProjects();
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
        
        for(let i=0;i<projects.length;i++){
            
            let project = projects[i];

            tasks = project.getTasks();
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