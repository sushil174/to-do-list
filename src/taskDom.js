import card from "./card";
import helper from "./helper";
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
    const addTask = document.querySelector('.task-add')

    addTask.style.display = 'block';
    let list = []
    function display() {
        let title = document.createElement('h2');
        title.textContent = project.getName();
        tasklist.textContent = '';
        tasklist.append(title)
        list = helper.getTasks(project.getName());
        for(let i=0;i<list.length;i++){
            let task = list[i]
            card.create(project,task,i,display)
        }
    }

    display()

    card.buttonListners(display)
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
            helper.addTask(project.getName(),title.value,date.value,priority.value,discription.value)
            // project.addTask(title.value,date.value,priority.value,discription.value);
            // const todoJson = JSON.stringify(todo)
            // console.log(todoJson)
            display()
            title.value =""
            priority.value =""
            discription.value=""
            dialog.close();
        })

    }
    
    removeListeners();
 
};


export default taskDom