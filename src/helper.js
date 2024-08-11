import Todo from './To-do'
import Project from './project'
import Task from './task'

let helper = (() => {
	function updateLocalStorage(data) {
		const todoJson = JSON.stringify(data)
		localStorage.setItem('todo', todoJson)
	}

	function retrive() {
		// const data = localStorage.getItem('todo')
		// if(data === null) {return new Todo()}
		const todoList = Object.assign(
			new Todo(),
			JSON.parse(localStorage.getItem('todo'))
		)
		todoList.setProject(
			todoList
				.getProjects()
				.map((project) => Object.assign(new Project(), project))
		)
		todoList
			.getProjects()
			.forEach((project) =>
				project.setTasks(
					project.getTasks().map((task) => Object.assign(new Task(), task))
				)
			)
		return todoList
	}

	// function retrive() {
	//     const revivedTodo = new Todo();
	//     const data = localStorage.getItem('todo');
	//     if(data) {
	//         const todoData = JSON.parse(data)
	//         for(const projectData of todoData.projects) {
	//             Object.assign()
	//             const revivedProject = new Project(projectData.name)
	//             for(const taskData of projectData.list) {
	//                 const revivedtask = new Task(taskData.name,taskData.date,taskData.priority,taskData.complete)
	//                 revivedProject.addTask(revivedtask)
	//             }
	//             revivedTodo.addProject(revivedProject)
	//         }
	//     }

	//     return revivedTodo;
	// }

	function addProject(name) {
		const todoList = retrive()
		todoList.addProject(name)
		updateLocalStorage(todoList)
	}

	function removeProject(index) {
		const todoList = retrive()
		todoList.removeProject(index)
		updateLocalStorage(todoList)
	}

	function getProjects() {
		const todoList = retrive()
		return todoList.getProjects()
	}

	function removeTask(projectName, index) {
		const todoList = retrive()
		const project = todoList.getProject(projectName)
		if (project !== undefined) {
			project.removeTask(index)
		}
		updateLocalStorage(todoList)
	}

	function addTask(projectName, name, date, priority, discription) {
		const todoList = retrive()
		const project = todoList.getProject(projectName)
		project.addTask(name, date, priority, discription)
		updateLocalStorage(todoList)
	}

	function editTask(projectName, index, name, date, priority, discription) {
		const todoList = retrive()
		const project = todoList.getProject(projectName)
		const tasks = project.getTasks()
		tasks[index].setTask(name, date, priority, discription)
		updateLocalStorage(todoList)
	}

	function getTasks(projectName) {
		const todoList = retrive()
		const project = todoList.getProject(projectName)
		return project.getTasks()
	}

	function changeComplete(projectName, index) {
		const todoList = retrive()
		const project = todoList.getProject(projectName)
		const task = project.getTasks()[index]
		task.changeComplete()
		updateLocalStorage(todoList)
	}
	return {
		updateLocalStorage,
		retrive,
		addProject,
		removeProject,
		getProjects,
		addTask,
		removeTask,
		getTasks,
		editTask,
		changeComplete,
	}
})()

export default helper
