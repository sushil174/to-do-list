import helper from './helper';
import editSvg from './img/edit.svg';
import deleteSvg from './img/delete.svg';
import { format, getDate } from 'date-fns';
const card = (() => {
	let currentIndex = null;
	let projectName = '';
	const dialogEdit = document.querySelector('#edit-task-dialog');
	const titleEdit = document.querySelector('#edit-task-title');
	const dateEdit = document.querySelector('#edit-task-date');
	const priorityEdit = document.querySelector('#edit-task-priority');
	const discriptionEdit = document.querySelector('#edit-task-info');
	let visible = false
	let list = [];

	function setPriority(task, taskCard) {
		const priority = task.getPriority();
		if (priority === 'High') {
			taskCard.style.boxShadow = 'inset 0.4em 0 #F52549';
		}

		if (priority === 'Medium') {
			taskCard.style.boxShadow = 'inset 0.4em 0 #F98866';
		}

		if (priority === 'Low') {
			taskCard.style.boxShadow = 'inset 0.4em 0 #1E2761';
		}
	}
	function create(project, task, index, display) {
		list = helper.getTasks(project.getName());
		const taskCard = document.createElement('div');
		const taskContainer = document.createElement('div');
		const textDiv = document.createElement('div');
		const check = document.createElement('INPUT');
		const title = document.createElement('div');
		const span1 = document.createElement('span');
		const span2 = document.createElement('span');
		const buttonDiv = document.createElement('div');
		const del = document.createElement('img');
		const edit = document.createElement('img');

		taskCard.classList.add('taskCard');
		taskContainer.classList.add('taskContainer');
		textDiv.classList.add('task-text');
		check.setAttribute('type', 'checkbox');
		check.classList.add('check');
		check.dataset.index = index;
		check.checked = task.getComplete();
		title.classList.add('title');
		span1.dataset.index = index;
		buttonDiv.classList.add('task-buttons');
		del.src = deleteSvg;
		del.alt = 'Delete';
		edit.src = editSvg;
		edit.alt = 'Edit';
		edit.dataset.index = index;
		edit.dataset.project = project.getName();
		del.dataset.project = project.getName();
		del.dataset.index = index;
		span1.textContent = task.getTitle();
		if(task.getDate()) {
			span2.textContent = format(task.getDate(),'dd/MM/yyyy')
		}else {
			span2.textContent = task.getDate();
		}

		taskCard.dataset.visible = visible
		// setPriority(task, taskCard);
		setPriority(task, taskContainer);

		if (task.getComplete()) {
			span1.style.textDecoration = 'line-through';
		}

		check.addEventListener('click', () => {
			console.log(index,task.getComplete(),task.getTitle())
			helper.changeComplete(project.getName(), index);
			// if (change) {
			// 	span1.style.textDecoration = 'line-through'
			// }
			// else {
			// 	span1.style.textDecoration = 'none'
			// }
			console.log(index, task.getComplete(),task.getTitle())
			display();
			console.log(index, task.getComplete(),task.getTitle())

		});

		title.addEventListener('click', () => {
			helper.changeComplete(project.getName(), index);
			// if (change) {
			// 	span1.style.textDecoration = 'line-through';
			// 	check.checked = true
			// }
			// else {
			// 	span1.style.textDecoration = 'none';
			// 	check.checked = false
			// }
			display();
		});

		edit.addEventListener('click', (e) => {
			currentIndex = e.target.dataset.index;
			projectName = e.target.dataset.project;
			dialogEdit.showModal();
			titleEdit.value = task.getTitle();
			priorityEdit.value = task.getPriority();
			discriptionEdit.value = task.getDiscription();
			dateEdit.value = task.getDate();
		});

		del.addEventListener('click', (e) => {
			helper.removeTask(e.target.dataset.project, e.target.dataset.index);
			display();
		});

		title.append(span1);
		title.append(span2);
		textDiv.append(check);
		textDiv.append(title);
		buttonDiv.append(edit);
		buttonDiv.append(del);
		taskContainer.append(textDiv);
		taskContainer.append(buttonDiv);
		taskCard.append(taskContainer);
		tasklist.append(taskCard);

		if (task.getDiscription() != '') {
			const expand = document.createElement('img');
			expand.classList.add('expand');
			const span3 = document.createElement('p');
			span3.classList.add('disc')
			span3.textContent = task.getDiscription();
			expand.addEventListener('click', () => {
				span3.classList.toggle('collapse');
				if(span3.classList.contains('collapse')) {
					taskContainer.classList.add('radius-change')
				} else {
					taskContainer.classList.remove('radius-change')
				}
				expand.classList.toggle('collapse');
			});
			buttonDiv.append(expand);
			taskCard.append(span3);
			setPriority(task,span3)
		}
	}

	function buttonListners(display) {
		const cancelEdit = document.querySelector('#edit-task-cancel');
		const confirmEdit = document.querySelector('#edit-task-confirm');

		const Cancel = cancelEdit.cloneNode(true);
		const Confirm = confirmEdit.cloneNode(true);

		cancelEdit.replaceWith(Cancel);
		confirmEdit.replaceWith(Confirm);

		Cancel.addEventListener('click', (e) => {
			e.preventDefault();
			dialogEdit.close();
		});

		Confirm.addEventListener('click', (e) => {
			e.preventDefault();
			if (titleEdit.value != '') {
				helper.editTask(
					projectName,
					currentIndex,
					titleEdit.value,
					dateEdit.value,
					priorityEdit.value,
					discriptionEdit.value
				);
				display();
			}
			dialogEdit.close();
		});

	}

	return {
		create,
		buttonListners,
	};
})();

export default card;
