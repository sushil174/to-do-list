import todo from "./To-do"
import taskDom from "./taskDom";
import homeDom from "./homeDom";

let projectDom = function () {
    
    const content = document.querySelector("#content");
    const projectDisplay = document.createElement('div');
    content.append(projectDisplay)
    const button = document.querySelector('.add-project');
    const dialog = document.querySelector('#project-dialog');
    const projectInput = document.querySelector('#project-title');
    const cancelBtn = document.querySelector('#cancel');
    const confirmBtn = document.querySelector('#confirm');
    
    function dialogVisible() {
        dialog.style.display='block';
    }

    function dialogHidden() {
        dialog.style.display='none';
    }
    let display = () => {
        projectDisplay.textContent = '';
        let projects = todo.getProjects();

        for(let i = 0; i < projects.length ; i++) {
            let project = projects[i];
            const div = document.createElement('div')
            div.dataset.index = i;
            const title = document.createElement('button');
            const del = document.createElement('button');
            del.textContent = "Delete";
            div.append(title)
            div.append(del)

            title.addEventListener('click', () => { 
                taskDom(project);
            });

            del.addEventListener('click', ()=> {
                todo.removeProject(div.dataset.index)
                taskDom(project);   
                homeDom()
            });

            title.textContent = project.getName();
            projectDisplay.append(div)
        }
    }


    button.addEventListener('click', ()=>{
        // dialog.show()
        dialogVisible()
        button.style.display='none';
    });

    cancelBtn.addEventListener('click', ()=>{
        // dialog.close()
        dialogHidden()
        button.style.display='block';

    });

    confirmBtn.addEventListener('click', e => {
        // e.target.preventDefault();
        // dialog.close()
        dialogHidden()
        button.style.display='block';
        const p = todo.addProject(projectInput.value);
        taskDom(p)
        projectInput.value=""
        display()
    })
    
}

export default projectDom