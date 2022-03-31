import { app, create_project, create_task } from '../model.js'

app.add_project(create_project("Homework"));
app.add_project(create_project("TODO"));
app.add_project(create_project("Chores"));

console.log("=============== Projects ===============");
app.get_projects().forEach(project => {
    console.log(project[1].get_name());
});
app.get_projects()[1][1].remove_self();
console.log("================ Deleting second item =========");
app.get_projects().forEach(project => {
    console.log(project[1].get_name());
});


app.get_projects()[0][1].add_task(create_task("Science Homework"));
app.get_projects()[0][1].add_task(create_task("Math Homework"));
app.get_projects()[0][1].add_task(create_task("Automata Homework"));

console.log("=============== Homework Taks =================");
app.get_projects()[0][1].get_tasks().forEach(task => { console.log(task[1].get_name()); });
console.log("=========== Deleting second item =============");
app.get_projects()[0][1].get_tasks()[1][1].remove_self();
app.get_projects()[0][1].get_tasks().forEach(task => { console.log(task[1].get_name()); });
