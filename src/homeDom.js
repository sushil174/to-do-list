// import todo from "./To-do";
import card from './card';
import helper from './helper';

let homeDom = () => {
	const addTask = document.querySelector('.task-add');
	addTask.style.display = 'none';
	const taskList = document.querySelector('#tasklist');
	let tasks = [];
	function homeDisplay() {
		const projects = helper.getProjects();
		taskList.textContent = '';
		let title = document.createElement('h2');
		title.textContent = 'Home';
		taskList.append(title);
		let count = 0;
		for (let i = 0; i < projects.length; i++) {
			let project = projects[i];
			tasks = helper.getTasks(project.getName());
			for (let j = 0; j < tasks.length; j++) {
				let task = tasks[j];
				card.create(project, task, j, homeDisplay);
				count += 1
			}
		}
		title.textContent = `Home (${count})`;
	}

	card.buttonListners(homeDisplay);
	homeDisplay();
};

export default homeDom;
