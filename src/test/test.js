import {
    app,
    createProject,
    createTask,
} from '../model.js'

app.add_project(createProject("Homework"));
app.add_project(createProject("House Chores"));
app.add_project(createProject("Party"));

app.get_projects()[1].add_task(createTask("Math", "chapter 13", Date(), "Pending", "Low"));
app.get_projects()[1].add_task(createTask("English", "chapter 13", Date(), "Pending", "Low"));
app.get_projects()[1].add_task(createTask("History", "chapter 13", Date(), "Pending", "Low"));

const proj = app.get_projects()[1];

const jsonProj = app.get_projects()[1].to_json();

const recProj = createProject().from_json(jsonProj);

console.log(`Are they identical: ${recProj.to_json() === jsonProj}`);