import todo from "./To-do";
import card from "./card";
let homeDom = () => {
    const taskList = document.querySelector('#tasklist');
    const projects = todo.getProjects();
    let tasks = []
    function homeDisplay(){

        taskList.textContent = '';
        
        for(let i=0;i<projects.length;i++){
            
            let project = projects[i];

            tasks = project.getTasks();
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