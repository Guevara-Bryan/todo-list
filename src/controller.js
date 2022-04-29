import {App} from "./model.js";
import {TaskView} from "./view.js";
import "./styles.css";


const stage_area = document.querySelector("#stage");

const app = new App("TODO LIST");

app.projects.forEach(project => {
    project.tasks.forEach(task => console.log(task.id))
});

app.projects.forEach(project => {
    project.tasks.forEach(task => TaskView(task, stage_area));
});
