import task from "./task";
export default class Project {
    constructor(name) {
        this.name = name;
        this.list = []
    }

    setName(name){
        this.name = name;
    }

    removeTask(index){
        this.list.splice(index,1)
    }

    addTask(name,date,priority,discription) {
        this.list.push(new task(name,date,priority,discription));
    }

    getTasks() {
    return this.list;
    }

    getName() {
        return this.name;
    }
}