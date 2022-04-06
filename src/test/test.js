import {
    app,
    create_project,
    create_task,
} from '../model.js'

app.add_project(create_project("Homework"));
app.add_project(create_project("House Chores"));
app.add_project(create_project("Party"));

app.get_projects()[0].add_task(create_task("Math", "chapter 13", Date(), "Pending", "Low"));
app.get_projects()[0].add_task(create_task("English", "chapter 13", Date(), "Pending", "Low"));
app.get_projects()[0].add_task(create_task("History", "chapter 13", Date(), "Pending", "Low"));

const proj = app.get_projects()[0];

const jsonProj = app.get_projects()[0].to_json();

const recProj = create_project().from_json(jsonProj);

console.log(`Are they identical: ${recProj.to_json() === jsonProj}`);