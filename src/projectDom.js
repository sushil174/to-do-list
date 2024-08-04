import todo from "./To-do"
import taskDom from "./taskDom";

let projectDom = function () {
    
    const content = document.querySelector("#content");
    const projectDisplay = document.createElement('div');
    content.append(projectDisplay)
    const button = document.querySelector('.add-project');
    const dialog = document.querySelector('#project-dialog');
    const projectInput = document.querySelector('#project-title');
    const cancelBtn = document.querySelector('#cancel');
    const confirmBtn = document.querySelector('#confirm');
    
    let display = () => {
        projectDisplay.textContent = '';
        let projects = todo.getProjects();
        projects.forEach(project => {
            const div = document.createElement('button');
            div.addEventListener('click', () => { 
                taskDom(project);
            });
            div.textContent = project.getName();
            projectDisplay.append(div)
        })
    }


    button.addEventListener('click', ()=>{
        // dialog.show()
        dialog.style.visibility='visible';
        button.style.display='none';
    });

    cancelBtn.addEventListener('click', ()=>{
        // dialog.close()
        dialog.style.visibility='collapse';
        button.style.display='block';

    });

    confirmBtn.addEventListener('click', e => {
        // e.target.preventDefault();
        // dialog.close()
        dialog.style.visibility='collapse';
        button.style.display='block';

        todo.addProject(projectInput.value);
        projectInput.value=""
        display()
    })
    
}

export default projectDom