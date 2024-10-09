import { isFuture } from 'date-fns';
import card from './card';
import helper from './helper';
let Week = () => {
	const addTask = document.querySelector('.task-add');
	addTask.style.display = 'none';
	const taskList = document.querySelector('#tasklist');
	function todayDisplay() {
		const projects = helper.getProjects();
		taskList.textContent = '';
		let title = document.createElement('h2');
		title.textContent = 'Past Due';
		taskList.append(title);


		projects.forEach(project => {
			const tasks = helper.getTasks(project.getName());
			tasks
				.filter(task => isFuture(task.getDate()))
				.forEach((task,index) => {
					card.create(project,task,index,todayDisplay)
				})
		})

	}

	card.buttonListners(todayDisplay);
	todayDisplay();
};

export default Week;

