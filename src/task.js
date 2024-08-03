export default class Task {

    constructor(name,date,priority,discription) {
        this.name = name;
        this.date = date;
        this.priority = priority;
        this.discription = discription;
        this.complete = false
    }

    edit(name,date,priority,discription) {
        this.name = name;
        this.date = date;
        this.priority = priority;
        this.discription = discription;
    }
}