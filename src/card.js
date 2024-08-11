import helper from './helper'
import editSvg from './img/edit.svg'
import deleteSvg from './img/delete.svg'

const card = (() => {
	let currentIndex = null
	let projectName = ''
	const dialogEdit = document.querySelector('#edit-task-dialog')
	const titleEdit = document.querySelector('#edit-task-title')
	const dateEdit = document.querySelector('#edit-task-date')
	const priorityEdit = document.querySelector('#edit-task-priority')
	const discriptionEdit = document.querySelector('#edit-task-info')
	let list = []

	function setPriority(task, taskCard) {
		const priority = task.getPriority()
		if (priority === 'High') {
			taskCard.style.boxShadow = 'inset 0.3em 0 #F52549'
		}

		if (priority === 'Medium') {
			taskCard.style.boxShadow = 'inset 0.3em 0 #F98866'
		}

		if (priority === 'Low') {
			taskCard.style.boxShadow = 'inset 0.3em 0 #1E2761'
		}
	}
	function create(project, task, index, display) {
		list = helper.getTasks(project.getName())
		const taskCard = document.createElement('div')
		taskCard.classList.add('taskCard')
		const textDiv = document.createElement('div')
		textDiv.classList.add('task-text')
		const check = document.createElement('INPUT')
		check.setAttribute('type', 'checkbox')
		check.classList.add('check')
		check.dataset.index = index
		check.checked = task.getComplete()
		const title = document.createElement('div')
		title.classList.add('title')
		const span1 = document.createElement('span')
		span1.dataset.index = index
		const span2 = document.createElement('span')
		const buttonDiv = document.createElement('div')
		buttonDiv.classList.add('task-buttons')
		const del = document.createElement('img')
		del.src = deleteSvg
		del.alt = 'Delete'
		const edit = document.createElement('img')
		edit.src = editSvg
		edit.alt = 'Edit'
		edit.dataset.index = index
		edit.dataset.project = project.getName()
		del.dataset.project = project.getName()
		del.dataset.index = index
		span1.textContent = task.getTitle()
		span2.textContent = task.getDate()

		setPriority(task, taskCard)

		if (task.getComplete()) {
			span1.style.textDecoration = 'line-through'
		}

		check.addEventListener('click', () => {
			helper.changeComplete(project.getName(), index)
			display()
		})

		title.addEventListener('click', () => {
			helper.changeComplete(project.getName(), index)
			display()
		})

		edit.addEventListener('click', (e) => {
			currentIndex = e.target.dataset.index
			projectName = e.target.dataset.project
			dialogEdit.showModal()
			titleEdit.value = task.getTitle()
			priorityEdit.value = task.getPriority()
			discriptionEdit.value = task.getDiscription()
			dateEdit.value = task.getDate()
		})

		del.addEventListener('click', (e) => {
			helper.removeTask(e.target.dataset.project, e.target.dataset.index)
			display()
		})

		title.append(span1)
		title.append(span2)
		textDiv.append(check)
		textDiv.append(title)
		buttonDiv.append(edit)
		buttonDiv.append(del)
		taskCard.append(textDiv)
		taskCard.append(buttonDiv)
		tasklist.append(taskCard)

		if (task.getDiscription() != '') {
			const expand = document.createElement('img')
			expand.classList.add('expand')
			const span3 = document.createElement('p')
			span3.textContent = task.getDiscription()
			expand.addEventListener('click', () => {
				span3.classList.toggle('collapse')
				expand.classList.toggle('collapse')
			})
			buttonDiv.append(expand)
			taskCard.append(span3)
		}
	}

	function buttonListners(display) {
		const cancelEdit = document.querySelector('#edit-task-cancel')
		const confirmEdit = document.querySelector('#edit-task-confirm')

		const Cancel = cancelEdit.cloneNode(true)
		const Confirm = confirmEdit.cloneNode(true)

		cancelEdit.replaceWith(Cancel)
		confirmEdit.replaceWith(Confirm)

		Cancel.addEventListener('click', (e) => {
			e.preventDefault()
			dialogEdit.close()
		})

		Confirm.addEventListener('click', (e) => {
			e.preventDefault()
			if (titleEdit.value != '') {
				helper.editTask(
					projectName,
					currentIndex,
					titleEdit.value,
					dateEdit.value,
					priorityEdit.value,
					discriptionEdit.value
				)
				display()
			}
			dialogEdit.close()
		})
	}

	return {
		create,
		buttonListners,
	}
})()

export default card
