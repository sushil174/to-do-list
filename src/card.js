
import todo from "./To-do";

const card = (() => {

    let currentIndex = null;
    let projectName = '';
    const dialogEdit = document.querySelector('#edit-task-dialog')
    const titleEdit = document.querySelector('#edit-task-title')
    const dateEdit = document.querySelector('#edit-task-date')
    const priorityEdit = document.querySelector('#edit-task-priority')
    const discriptionEdit = document.querySelector('#edit-task-info')
    let list = []
    function create(project,task,index,display) {
        list = project.getTasks();
        let div = document.createElement('div');
        let span = document.createElement('span');
        let edit = document.createElement('button');
        let del = document.createElement('button');
        del.textContent = "delete";
        edit.textContent = "edit";
        edit.dataset.index = index;
        edit.dataset.project = project.getName()
        del.dataset.project = project.getName()
        del.dataset.index = index;
        span.textContent = task.getTitle() + task.getDate() + task.getPriority() + task.getComplete();
    
        
        edit.addEventListener('click', e => {
            currentIndex = e.target.dataset.index;
            projectName = e.target.dataset.project;
            dialogEdit.showModal()
            titleEdit.value = task.getTitle();
            priorityEdit.value = task.getPriority();
            discriptionEdit.value= task.getDiscription();
        })
    
        
    
        del.addEventListener('click', e => {
            const projects = todo.getProjects();
            project = projects.find(project => project.getName() === e.target.dataset.project)
            if(project !== undefined) {
                project.removeTask(e.target.dataset.index)
                display()
            }
        })

        div.append(span);
        div.append(del);
        div.append(edit);
        tasklist.append(div);  
    }

    function buttonListners(display) {
        const cancelEdit = document.querySelector('#edit-task-cancel')
        const confirmEdit = document.querySelector('#edit-task-confirm')

        let Cancel = cancelEdit.cloneNode(true);
        let Confirm = confirmEdit.cloneNode(true);
    
        cancelEdit.replaceWith(Cancel)
        confirmEdit.replaceWith(Confirm)
    
        Cancel.addEventListener('click', e => {
            e.preventDefault();
            dialogEdit.close();
        })
    
        Confirm.addEventListener('click', e => {
            e.preventDefault();
            const projects = todo.getProjects();
            const project = projects.find(project => project.getName() === projectName);
            if(project!==undefined) {
                const tasks = project.getTasks();
                tasks[currentIndex].setTask(titleEdit.value,dateEdit.value,priorityEdit.value,discriptionEdit.value);
            }
            display();
            dialogEdit.close()
        })
    }

    return {
        create,
        buttonListners
    }

})();

export default card