// import todo from "./To-do";
import card from './card';
import helper from './helper';

let today = () => {
	const addTask = document.querySelector('.task-add');
	addTask.style.display = 'none';
	const taskList = document.querySelector('#tasklist');
	let tasks = [];
	const projects = helper.getProjects();
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
		taskList.append(title);
		const taskCount = document.createElement('h4');
		taskCount.classList.add('count')
		taskList.append(taskCount)
		let count = 0;
		for (let i = 0; i < projects.length; i++) {
			let project = projects[i];
			tasks = helper.getTasks(project.getName());
			for (let j = 0; j < tasks.length; j++) {
				let task = tasks[j];
				if (task.getDate()===getTodayDate()) {
					card.create(project, task, j, todayDisplay);
					count += 1
				}
			}
		}
		title.textContent = `Today`;
		taskCount.textContent = `Tasks (${count})`
		if(count === 0) {
			const nothingToSee = document.createElement('div') ;
			nothingToSee.textContent = "(－_－) zzZ";
			nothingToSee.classList.add('empty')
			taskList.append(nothingToSee)
		}
		// projects.forEach(project => {
		// 	const tasks = helper.getTasks(project.getName());

		// 	tasks
		// 		.filter(task => task.getDate() === getTodayDate())
		// 		.forEach((task,index) => {
		// 			card.create(project,task,index,todayDisplay)
		// 		})
		// })

	}

	card.buttonListners(todayDisplay);
	todayDisplay();
};

export default today;
