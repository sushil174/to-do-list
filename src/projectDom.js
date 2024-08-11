import taskDom from './taskDom'
import homeDom from './homeDom'
import helper from './helper'
import deleteSvg from './img/delete.svg'
import select from './selected'

let projectDom = function () {
	const content = document.querySelector('#content')
	const projectDisplay = document.createElement('div')
	content.append(projectDisplay)
	const button = document.querySelector('.add-project')
	const dialog = document.querySelector('#project-dialog')
	const projectInput = document.querySelector('#project-title')
	const cancelBtn = document.querySelector('#cancel')
	const confirmBtn = document.querySelector('#confirm')
	projectInput.value = ''
	function dialogVisible() {
		dialog.style.display = 'block'
	}

	function dialogHidden() {
		dialog.style.display = 'none'
	}

	let display = () => {
		projectDisplay.textContent = ''
		// const todo = helper.retrive();
		// let projects = todo.getProjects();
		let projects = helper.getProjects()
		for (let i = 0; i < projects.length; i++) {
			let project = projects[i]
			const div = document.createElement('div')
			div.classList.add('project-card')
			div.dataset.index = i
			const title = document.createElement('span')
			// const del = document.createElement('button');
			const del = document.createElement('img')
			del.src = deleteSvg
			del.alt = 'Delete'
			div.append(title)
			div.append(del)

			div.addEventListener('click', (e) => {
				select.addShadow(e)
				taskDom(project)
			})

			del.addEventListener('click', (e) => {
				e.stopPropagation()
				helper.removeProject(div.dataset.index)
				homeDom()
				display()
			})

			title.textContent = project.getName()
			projectDisplay.append(div)
		}
	}

	button.addEventListener('click', () => {
		// dialog.show()
		dialogVisible()
		button.replaceWith(dialog)
		projectInput.focus()
		button.style.display = 'none'
	})

	cancelBtn.addEventListener('click', () => {
		// dialog.close()
		dialogHidden()
		button.style.display = 'block'
		dialog.replaceWith(button)
		projectInput.value = ''
	})

	confirmBtn.addEventListener('click', (e) => {
		// e.target.preventDefault();
		// dialog.close()
		dialogHidden()
		button.style.display = 'block'
		dialog.replaceWith(button)
		if (projectInput.value != '') {
			helper.addProject(projectInput.value)
			const todo = helper.retrive()
			const project = todo.getProject(projectInput.value)
			taskDom(project)
			display()
			select.addShadowLatestProject()
		}
		projectInput.value = ''
	})

	display()
}

export default projectDom
