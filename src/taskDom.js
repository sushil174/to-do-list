import todo from "./To-do";

let taskDom = (project) => {
    const tasks = document.querySelector('.tasks');
    const tasklist = document.querySelector('#tasklist');
    const button = document.querySelector('#add-task');
    const cancel = document.querySelector('#task-cancel')
    const confirm = document.querySelector('#task-confirm')
    const dialog = document.querySelector('#task-dialog')
    const title = document.querySelector('#task-name')
    const date = document.querySelector('#task-date')
    const priority = document.querySelector('#task-priority')
    const discription = document.querySelector('#task-discription')


    function display() {
        tasklist.textContent = '';
        let list = project.getTasks();
        list.forEach(task => {
            let div = document.createElement('div');
            
            div.textContent = task.getTitle() + task.getDate() + task.getPriority() + task.getComplete();
            tasklist.append(div)
        })
    }

    function buttonFunction() {
        dialog.style.visibility = 'visible'
        console.log(project.getName())
    }

    function cancelFunction() {
        dialog.style.visibility = 'collapse'
    }

    function confirmFunction() {
        project.addTask(title.value,date.value,priority.value,discription.value);
        dialog.style.visibility = 'collapse'
        display()
        title.value =""
        priority.value =""
        discription.value=""
    }

    function removeListeners() {

        let newButton = button.cloneNode(true);
        let newCancel = cancel.cloneNode(true);
        let newConfirm = confirm.cloneNode(true);

        button.replaceWith(newButton)
        cancel.replaceWith(newCancel)
        confirm.replaceWith(newConfirm)

        newButton.addEventListener('click', buttonFunction);
      
        newCancel.addEventListener('click', cancelFunction)
    
        newConfirm.addEventListener('click', confirmFunction)

    }

    removeListeners();
    display()
 
};


export default taskDom