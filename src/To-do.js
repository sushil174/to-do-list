import Project from "./project"

class Todo {
    constructor() {
        this.projects = []
    }

    addProject(name) {
        this.projects.push(new Project(name));
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