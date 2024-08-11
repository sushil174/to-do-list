import { isPast } from 'date-fns'
import card from './card'
import helper from './helper'
let Due = () => {
	const addTask = document.querySelector('.task-add')
	addTask.style.display = 'none'
	const taskList = document.querySelector('#tasklist')
	let tasks = []
	// const todo = helper.retrive();
	// const projects = todo.getProjects();
	function todayDisplay() {
		const projects = helper.getProjects()
		taskList.textContent = ''
		let title = document.createElement('h2')
		title.textContent = 'Past Due'
		taskList.append(title)
		for (let i = 0; i < projects.length; i++) {
			let project = projects[i]

			tasks = helper.getTasks(project.getName())
			for (let j = 0; j < tasks.length; j++) {
				let task = tasks[j]
				if (isPast(task.getDate()) && !task.getComplete()) {
					card.create(project, task, j, todayDisplay)
				}
			}
		}
	}

	card.buttonListners(todayDisplay)
	todayDisplay()
}

export default Due
