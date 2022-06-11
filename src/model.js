class Task{
	title;
	description;
	dueDate;
	priority;
	constructor(title, description, dueDate, priority){
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
	}

	get title(){
		return this.title;
	}
	get description(){
		return this.description;
	}
	get dueDate(){
		return this.dueDate;
	}
	get priority(){
		return this.priority;
	}

	toJSON(){
		return {
			title: this.title,
			description: this.description,
			dueDate: this.dueDate.toString(),
			priority: this.priority,
		};
	}

	//takes a jason string and returns a task object
	static fromJson(json){
		const obj = JSON.parse(json);

		const task = new Task(obj.title, obj.description, new Date(obj.dueDate), obj.priority);
		return task;

	}
}

class Project{
	name;
	tasks;
	#pid;
	constructor(name){
		this.name = name;
		this.#pid = Date.now();
		this.tasks = [];
	}
	
	get name(){
		return this.name;
	}
	get tasks(){
		return this.tasks;
	}
	get pid(){
		return this.#pid;
	}

	addTask(task){
		this.tasks.push(task);
		localStorage.setItem(this.#pid, JSON.stringify(this));
	}
	removeTask(task){
		this.tasks.splice(this.tasks.indexOf(task), 1);
		localStorage.setItem(this.#pid, JSON.stringify(this));
	}
	clearTasks(){
		this.tasks = [];
	}
	getTask(index){
		return this.tasks[index];
	}
	toJSON(){
		return {
			name: this.name,
			pid: this.#pid,
			tasks: this.tasks,
		};
	}

	#setProjectId(pid){
		this.#pid = pid;
	}

	//takes a jason string and returns a project object
	static fromJson(json){
		const obj = JSON.parse(json);

		const pr = new Project(obj.name);
		pr.#setProjectId(obj.pid);
		obj.tasks.forEach(task => { pr.addTask(Task.fromJson(JSON.stringify(task))); });
		return pr;
	}
}


export { Task, Project };