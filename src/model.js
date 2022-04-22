import { compareAsc } from 'date-fns'
import { v4 as generateId } from 'uuid'

class Task {
	#name;
	#details;
	#id;
	#creation_date;
	#date;
	#status;
	#priority;

	constructor(name, id, creation, details, date, status, priority){
		this.#name = name;
		this.#id = id;
		this.#creation_date = creation;
		this.#details = details;
		this.#date = date;
		this.#status = status;
		this.#priority = priority;
	}

	static fromJSON(json){
		const obj = JSON.parse(json);

		return new Task(obj.name, obj.id, obj.creation_date, obj.details, obj.date, obj.status, obj.priority);
	}

	get json(){
		return JSON.stringify(
			{name: this.#name, id: this.#id, creation_date: this.#creation_date, details: this.#details, date: this.#date, status: this.#status, priority: this.#priority},
			null,
			4
		)
	}

	get name(){ return this.#name; }
	get id(){ return this.#id; }
	get creation_date(){ return this.#creation_date; }
	get details(){ return this.#details; }
	get date(){ return this.#date; }
	get status(){ return this.#status; }
	get priority(){ return this.#priority; }

	set name(v){ this.#name = v; }
	set details(v){ this.#details = v; }
	set date(v){ this.#date = v; }
	set status(v){ this.#status = v}
	set priority(v){ this.#priority = v}
}

class Project {
	#name;
	#id;
	#creation_date;
	#tasks;

	constructor(name, id, creation, tasks = {}){
		this.#name = name;
		this.#id = id;
		this.#creation_date = creation;
		this.#tasks = tasks;
	}
	get name(){ return this.#name; }
	get id(){ return this.#id; }
	get creation_date(){ return this.#creation_date; }

	// returns a list of tasks sorted by creation date.
	get tasks(){
		return Object.keys(this.#tasks).map(key => this.#tasks[key]).sort((a,b) => compareAsc(new Date(a.creation_date), new Date(b.creation_date)));
	}

	set name(v){ this.#name = v; }

	addTask(name, details, date, status, priority){
		let id;
		if (typeof name === 'object'){ // If a task object is passed instead of a string
			this.#tasks[name.id] = name;
			id = name.id;
		} else {
			id = generateId();
			this.#tasks[id] = new Task(name, id, Date(), details, date, status, priority);
		}

		localStorage.setItem(id, JSON.stringify({
			name: this.#name,
			id: this.#id,
			creation_date: this.#creation_date,
			task: this.#tasks[id].json
		}, null, 4));
	}

	removeTask(task_id){
		delete this.#tasks[task_id]
	}

	getTask(task_id){ return this.#tasks[task_id]; }
}

class App {
	#name;
	#sections = [new Project("Today", generateId), new Project("Inbox", generateId)];
	#projects = {};

	constructor(name){ this.#name = name; }

	get sections(){ return this.#sections; }

	get projects(){ return Object.keys(this.#projects).map(key => this.#projects[key]).sort((a,b) => compareAsc(new Date(a.creation_date), new Date(b.creation_date))); }
}

export{
	Task,
	Project,
}