import Project from "./project"
import helper from "./helper";
class Todo {
    constructor() {
        this.projects = []
    }

    setProject(projects) {
        this.projects = projects
    }

    addProject(name) {
        
        const newProject = new Project(name)
        this.projects.push(newProject);
        // helper.updateLocalStorage()
    }

    removeProject(index) {
        this.projects.splice(index,1);
        // helper.updateLocalStorage()
    }

    getProjects() {
        return this.projects;
    }

    getProject(name) {
        const result = this.projects.find(project => project.getName() === name);
        return result
    }
}


export default Todo