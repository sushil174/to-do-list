export default class Task {

    constructor(name,date,priority,discription) {
        this.name = name;
        this.date = date;
        this.priority = priority;
        this.discription = discription;
        this.complete = false
    }

    setTask(name,date,priority,discription) {
        this.name = name;
        this.date = date;
        this.priority = priority;
        this.discription = discription;
    }

    getTitle() {
        return this.name;
    }

    getDate() {
        return this.date;
    }

    getPriority() {
        return this.priority;
    }

    getComplete() {
        return this.complete;
    }

    getDiscription() {
        return this.discription;
    }
}