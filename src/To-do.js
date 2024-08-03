import Project from "./project"

export default class Todo {
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