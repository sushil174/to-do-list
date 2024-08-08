import taskDom from "./taskDom";
import homeDom from "./homeDom";
import helper from "./helper";

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
        // const todo = helper.retrive();
        // let projects = todo.getProjects();
        let projects = helper.getProjects();

        for(let i = 0; i < projects.length ; i++) {
            let project = projects[i];
            const div = document.createElement('div')
            div.classList.add("project-card")
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
                helper.removeProject(div.dataset.index)
                // todo.removeProject(div.dataset.index)  
                display()
                homeDom()
            });

            title.textContent = project.getName();
            projectDisplay.append(div)
        }
    }


    button.addEventListener('click', ()=>{
        // dialog.show()
        dialogVisible()
        button.replaceWith(dialog)
        button.style.display='none';
    });

    cancelBtn.addEventListener('click', ()=>{
        // dialog.close()
        dialogHidden()
        button.style.display='block';
        dialog.replaceWith(button)

    });

    confirmBtn.addEventListener('click', e => {
        // e.target.preventDefault();
        // dialog.close()
        dialogHidden()
        button.style.display='block';
        dialog.replaceWith(button);
        helper.addProject(projectInput.value);
        projectInput.value=""
        display()
    })
    display()
}

export default projectDom