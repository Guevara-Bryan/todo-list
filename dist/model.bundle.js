"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["model"],{

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
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




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/model.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsa0RBQWtEO0FBQ2hGO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUYXNre1xuXHR0aXRsZTtcblx0ZGVzY3JpcHRpb247XG5cdGR1ZURhdGU7XG5cdHByaW9yaXR5O1xuXHRjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KXtcblx0XHR0aGlzLnRpdGxlID0gdGl0bGU7XG5cdFx0dGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuXHRcdHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG5cdFx0dGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuXHR9XG5cblx0Z2V0IHRpdGxlKCl7XG5cdFx0cmV0dXJuIHRoaXMudGl0bGU7XG5cdH1cblx0Z2V0IGRlc2NyaXB0aW9uKCl7XG5cdFx0cmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG5cdH1cblx0Z2V0IGR1ZURhdGUoKXtcblx0XHRyZXR1cm4gdGhpcy5kdWVEYXRlO1xuXHR9XG5cdGdldCBwcmlvcml0eSgpe1xuXHRcdHJldHVybiB0aGlzLnByaW9yaXR5O1xuXHR9XG5cblx0dG9KU09OKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRpdGxlOiB0aGlzLnRpdGxlLFxuXHRcdFx0ZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG5cdFx0XHRkdWVEYXRlOiB0aGlzLmR1ZURhdGUudG9TdHJpbmcoKSxcblx0XHRcdHByaW9yaXR5OiB0aGlzLnByaW9yaXR5LFxuXHRcdH07XG5cdH1cblxuXHQvL3Rha2VzIGEgamFzb24gc3RyaW5nIGFuZCByZXR1cm5zIGEgdGFzayBvYmplY3Rcblx0c3RhdGljIGZyb21Kc29uKGpzb24pe1xuXHRcdGNvbnN0IG9iaiA9IEpTT04ucGFyc2UoanNvbik7XG5cblx0XHRjb25zdCB0YXNrID0gbmV3IFRhc2sob2JqLnRpdGxlLCBvYmouZGVzY3JpcHRpb24sIG5ldyBEYXRlKG9iai5kdWVEYXRlKSwgb2JqLnByaW9yaXR5KTtcblx0XHRyZXR1cm4gdGFzaztcblxuXHR9XG59XG5cbmNsYXNzIFByb2plY3R7XG5cdG5hbWU7XG5cdHRhc2tzO1xuXHQjcGlkO1xuXHRjb25zdHJ1Y3RvcihuYW1lKXtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuI3BpZCA9IERhdGUubm93KCk7XG5cdFx0dGhpcy50YXNrcyA9IFtdO1xuXHR9XG5cdFxuXHRnZXQgbmFtZSgpe1xuXHRcdHJldHVybiB0aGlzLm5hbWU7XG5cdH1cblx0Z2V0IHRhc2tzKCl7XG5cdFx0cmV0dXJuIHRoaXMudGFza3M7XG5cdH1cblx0Z2V0IHBpZCgpe1xuXHRcdHJldHVybiB0aGlzLiNwaWQ7XG5cdH1cblxuXHRhZGRUYXNrKHRhc2spe1xuXHRcdHRoaXMudGFza3MucHVzaCh0YXNrKTtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLiNwaWQsIEpTT04uc3RyaW5naWZ5KHRoaXMpKTtcblx0fVxuXHRyZW1vdmVUYXNrKHRhc2spe1xuXHRcdHRoaXMudGFza3Muc3BsaWNlKHRoaXMudGFza3MuaW5kZXhPZih0YXNrKSwgMSk7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy4jcGlkLCBKU09OLnN0cmluZ2lmeSh0aGlzKSk7XG5cdH1cblx0Y2xlYXJUYXNrcygpe1xuXHRcdHRoaXMudGFza3MgPSBbXTtcblx0fVxuXHRnZXRUYXNrKGluZGV4KXtcblx0XHRyZXR1cm4gdGhpcy50YXNrc1tpbmRleF07XG5cdH1cblx0dG9KU09OKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5hbWU6IHRoaXMubmFtZSxcblx0XHRcdHBpZDogdGhpcy4jcGlkLFxuXHRcdFx0dGFza3M6IHRoaXMudGFza3MsXG5cdFx0fTtcblx0fVxuXG5cdCNzZXRQcm9qZWN0SWQocGlkKXtcblx0XHR0aGlzLiNwaWQgPSBwaWQ7XG5cdH1cblxuXHQvL3Rha2VzIGEgamFzb24gc3RyaW5nIGFuZCByZXR1cm5zIGEgcHJvamVjdCBvYmplY3Rcblx0c3RhdGljIGZyb21Kc29uKGpzb24pe1xuXHRcdGNvbnN0IG9iaiA9IEpTT04ucGFyc2UoanNvbik7XG5cblx0XHRjb25zdCBwciA9IG5ldyBQcm9qZWN0KG9iai5uYW1lKTtcblx0XHRwci4jc2V0UHJvamVjdElkKG9iai5waWQpO1xuXHRcdG9iai50YXNrcy5mb3JFYWNoKHRhc2sgPT4geyBwci5hZGRUYXNrKFRhc2suZnJvbUpzb24oSlNPTi5zdHJpbmdpZnkodGFzaykpKTsgfSk7XG5cdFx0cmV0dXJuIHByO1xuXHR9XG59XG5cblxuZXhwb3J0IHsgVGFzaywgUHJvamVjdCB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==