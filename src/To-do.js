import Project from "./project"

class Todo {
    constructor() {
        this.projects = []
    }

    addProject(name) {
        const newProject = new Project(name)
        this.projects.push(newProject);
        return newProject
    }

    removeProject(index) {
        this.projects.splice(index,1);
    }

    getProjects() {
        return this.projects;
    }
}

const todo = new Todo()

export default todo