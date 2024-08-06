import todo from "./To-do";


let taskDom = (project) => {

    const tasklist = document.querySelector('#tasklist');
    const button = document.querySelector('#add-task');
    const cancel = document.querySelector('#task-cancel')
    const confirm = document.querySelector('#task-confirm')
    const dialog = document.querySelector('#task-dialog')
    const title = document.querySelector('#task-title')
    const date = document.querySelector('#task-date')
    const priority = document.querySelector('#task-priority')
    const discription = document.querySelector('#task-info')


    const cancelEdit = document.querySelector('#edit-task-cancel')
    const confirmEdit = document.querySelector('#edit-task-confirm')
    const dialogEdit = document.querySelector('#edit-task-dialog')
    const titleEdit = document.querySelector('#edit-task-title')
    const dateEdit = document.querySelector('#edit-task-date')
    const priorityEdit = document.querySelector('#edit-task-priority')
    const discriptionEdit = document.querySelector('#edit-task-info')
    
    let index = null;
    let list = []
    
    function display() {
        tasklist.textContent = '';
        list = project.getTasks();
        for(let i=0;i<list.length;i++){
            let task = list[i]
            let div = document.createElement('div');
            let span = document.createElement('span');
            let edit = document.createElement('button');
            let del = document.createElement('button');
            del.textContent = "delete";
            edit.textContent = "edit";
            edit.dataset.index = i;
            del.dataset.index = i;
            span.textContent = task.getTitle() + task.getDate() + task.getPriority() + task.getComplete();
            edit.addEventListener('click', e => {
                    index = i;
                    dialogEdit.showModal()
                    titleEdit.value = task.getTitle();
                    priorityEdit.value = task.getPriority();
                    discriptionEdit.value= task.getDiscription();
            })
        
            del.addEventListener('click', e => {
                project.removeTask(e.target.dataset.index)
                display()
            })
                
            div.append(span);
            div.append(del);
            div.append(edit);
            tasklist.append(div);     
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
        e.preventDefault();
        list[index].setTask(titleEdit.value,dateEdit.value,priorityEdit.value,discriptionEdit.value);
        dialogEdit.close();
        display();
    })

    function removeListeners() {

        let newButton = button.cloneNode(true);
        let newCancel = cancel.cloneNode(true);
        let newConfirm = confirm.cloneNode(true);

        button.replaceWith(newButton)
        cancel.replaceWith(newCancel)
        confirm.replaceWith(newConfirm)

        newButton.addEventListener('click',(e)=> {
            dialog.showModal();
        });
      
        newCancel.addEventListener('click',(e)=>{
            e.preventDefault();
            dialog.close()
        })
    
        newConfirm.addEventListener('click', e=>{
            e.preventDefault();
            project.addTask(title.value,date.value,priority.value,discription.value);
            display()
            title.value =""
            priority.value =""
            discription.value=""
            dialog.close();
        })

    }
    
    removeListeners();
    display()
 
};


export default taskDom