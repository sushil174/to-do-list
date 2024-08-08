
// import todo from "./To-do";
import helper from "./helper";

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
        list = helper.getTasks(project.getName());
        let taskCard = document.createElement('div');
        taskCard.classList.add('taskCard');
        let textDiv = document.createElement('div');
        textDiv.classList.add('task-text')
        let check = document.createElement('INPUT');
        check.setAttribute("type","checkbox");
        check.dataset.index = index;
        check.checked = task.getComplete();
        let title = document.createElement('div')
        title.classList.add('title')
        let span1 = document.createElement('span');
        span1.dataset.index = index;
        let span2 = document.createElement('span');
        let edit = document.createElement('button');
        let del = document.createElement('button');
        let buttonDiv = document.createElement('div');
        buttonDiv.classList.add('task-buttons');
        del.textContent = "delete";
        edit.textContent = "edit";
        edit.dataset.index = index;
        edit.dataset.project = project.getName()
        del.dataset.project = project.getName()
        del.dataset.index = index;
        span1.textContent = task.getTitle();
        span2.textContent = task.getDate();

        if(task.getComplete()) {
            span1.style.textDecoration = "line-through"
        }
    

        check.addEventListener('click', e => {
            helper.changeComplete(project.getName(),index)
            display();
        })

        title.addEventListener('click', e => {
            helper.changeComplete(project.getName(),index)
            display()
        })


        edit.addEventListener('click', e => {
            currentIndex = e.target.dataset.index;
            projectName = e.target.dataset.project;
            dialogEdit.showModal()
            titleEdit.value = task.getTitle();
            priorityEdit.value = task.getPriority();
            discriptionEdit.value= task.getDiscription();
            dateEdit.value = task.getDate()
        })
    
        del.addEventListener('click', e => {
            helper.removeTask(e.target.dataset.project,e.target.dataset.index)
            // const projects = todo.getProjects();
            // project = projects.find(project => project.getName() === e.target.dataset.project)
            // if(project !== undefined) {
            //     project.removeTask(e.target.dataset.index)
            // }
            display()
        })
        title.append(span1)
        title.append(span2)
        textDiv.append(check);
        textDiv.append(title);
        buttonDiv.append(del);
        buttonDiv.append(edit);
        taskCard.append(textDiv);
        taskCard.append(buttonDiv);
        tasklist.append(taskCard);  
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
            // const projects = todo.getProjects();
            helper.editTask(projectName,currentIndex,titleEdit.value,dateEdit.value,priorityEdit.value,discriptionEdit.value);
            // const project = projects.find(project => project.getName() === projectName);
            // if(project!==undefined) {
            //     const tasks = project.getTasks();
            //     tasks[currentIndex].setTask(titleEdit.value,dateEdit.value,priorityEdit.value,discriptionEdit.value);
            // }
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