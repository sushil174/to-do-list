import task from './task'
import helper from './helper'

export default class Project {
	constructor(name) {
		this.name = name
		this.list = []
	}

	setTasks(tasks) {
		this.list = tasks
	}
	removeTask(index) {
		this.list.splice(index, 1)
		helper.updateLocalStorage()
	}

	addTask(name, date, priority, discription) {
		this.list.push(new task(name, date, priority, discription, false))
		helper.updateLocalStorage()
	}

	getTasks() {
		return this.list
	}

	getName() {
		return this.name
	}

	getTask(name) {
		const result = this.list.find((task = task.getTitle() === name))
		return result
	}
}
