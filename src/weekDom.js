import { isFuture } from 'date-fns';
import card from './card';
import helper from './helper';
let Week = () => {
	const addTask = document.querySelector('.task-add');
	addTask.style.display = 'none';
	const taskList = document.querySelector('#tasklist');
	let tasks = [];
	function todayDisplay() {
		const projects = helper.getProjects();
		taskList.textContent = '';
		let title = document.createElement('h2');
		taskList.append(title);
		let count = 0
		for (let i = 0; i < projects.length; i++) {
			let project = projects[i];

			tasks = helper.getTasks(project.getName());
			for (let j = 0; j < tasks.length; j++) {
				let task = tasks[j];
				if (isFuture(task.getDate())) {
					card.create(project, task, j, todayDisplay);
					count += 1
				}
			}
		}
		title.textContent = `Up Coming (${count})`;
		// projects.forEach(project => {
		// 	const tasks = helper.getTasks(project.getName());
		// 	tasks
		// 		.filter(task => isFuture(task.getDate()))
		// 		.forEach((task,index) => {
		// 			card.create(project,task,index,todayDisplay)
		// 		})
		// })

	}

	card.buttonListners(todayDisplay);
	todayDisplay();
};

export default Week;

