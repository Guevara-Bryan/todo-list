import {Task, Project} from '../model.js';


const projects = {};

Object.keys(localStorage).forEach(key => {
    const obj = JSON.parse(localStorage[key]);
    if (projects[key] === undefined){
        projects[key] = new Project(obj.name, obj.id, obj.creation_date)
        projects[key].addTask(Task.fromJSON(obj.task));
    }
    projects[key].addTask(Task.fromJSON(obj.task));
});

Object.keys(projects).forEach(key => {
    const pr = projects[key];

    console.log(pr.name);
    console.log("----------------------------------------------------------------");
    pr.tasks.forEach(task => console.log(`${task.name} = ${task.id}`));

})