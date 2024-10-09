// import todo from "./To-do";
import card from './card';
import helper from './helper';

let today = () => {
	const addTask = document.querySelector('.task-add');
	addTask.style.display = 'none';
	const taskList = document.querySelector('#tasklist');

	function getTodayDate() {
		const today = new Date();
		const year = today.getFullYear();
		const month = String(today.getMonth() + 1).padStart(2, '0');
		const day = String(today.getDate()).padStart(2, '0');
		return `${year}-${month}-${day}`;
	}

	function todayDisplay() {
		taskList.textContent = '';
		const projects = helper.getProjects();
		let title = document.createElement('h2');
		title.textContent = 'Today';
		taskList.append(title);
		projects.forEach(project => {
			const tasks = helper.getTasks(project.getName());

			tasks
				.filter(task => task.getDate() === getTodayDate())
				.forEach((task,index) => {
					card.create(project,task,index,todayDisplay)
				})
		})

	}

	card.buttonListners(todayDisplay);
	todayDisplay();
};

export default today;
