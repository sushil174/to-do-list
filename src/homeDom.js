import todo from "./To-do";

let homeDom = () => {
    const taskList = document.querySelector('#tasklist');
    const cancelEdit = document.querySelector('#edit-task-cancel')
    const confirmEdit = document.querySelector('#edit-task-confirm')
    const dialogEdit = document.querySelector('#edit-task-dialog')
    const titleEdit = document.querySelector('#edit-task-title')
    const dateEdit = document.querySelector('#edit-task-date')
    const priorityEdit = document.querySelector('#edit-task-priority')
    const discriptionEdit = document.querySelector('#edit-task-info')

    const projects = todo.getProjects();
    let index = null
    let projectName = ''
    let tasks = []
    function homeDisplay(){

        taskList.textContent = '';
        
        for(let i=0;i<projects.length;i++){
            
            let project = projects[i];

            tasks = project.getTasks();
            for(let j=0;j<tasks.length;j++) {
                let task = tasks[j];     
                let div = document.createElement('div');
                let span = document.createElement('span');
                let edit = document.createElement('button');
                let del = document.createElement('button');
                del.textContent = "delete";
                edit.textContent = "edit";
                edit.dataset.index = j;
                edit.dataset.project = project.getName()

                del.dataset.index = j;
                del.dataset.project = project.getName()
                span.textContent = task.getTitle() + task.getDate() + task.getPriority() + task.getComplete();

                edit.addEventListener('click', e => {
                        console.log(e.target.dataset.project)
                        index = e.target.dataset.index;
                        projectName = e.target.dataset.project;
                        dialogEdit.showModal()
                        titleEdit.value = task.getTitle();
                        priorityEdit.value = task.getPriority();
                        discriptionEdit.value= task.getDiscription();
                })
            
                del.addEventListener('click', e => {
                    const project = projects.find(project => project.getName() === e.target.dataset.project);
                    if(project !== undefined) {
                        project.removeTask(e.target.dataset.index)
                    }
                    homeDisplay();
                })
                    
                div.append(span);
                div.append(del);
                div.append(edit);
                taskList.append(div);
            }
        }
    }

    let Cancel = cancelEdit.cloneNode(true);
    let Confirm = confirmEdit.cloneNode(true);

    cancelEdit.replaceWith(Cancel)
    confirmEdit.replaceWith(Confirm)

    Cancel.addEventListener('click', e => {
        e.preventDefault();
        dialogEdit.close();
    })

    Confirm.addEventListener('click', e => {
        e.preventDefault()
        const project = projects.find(project => project.getName() === projectName);
        if(project!==undefined) {
            const tasks = project.getTasks();
            tasks[index].setTask(titleEdit.value,dateEdit.value,priorityEdit.value,discriptionEdit.value);
        }
        dialogEdit.close()
        homeDisplay()
    })

    homeDisplay();
};

export default homeDom