import { Task, Project } from './model.js';
import { projectView, sidebarView, taskConfigView} from "./view";
import { compareAsc } from 'date-fns';
import './styles.css';

const container = document.querySelector('.container');
const header = document.createElement('div');
header.classList.add('header');
const content = document.createElement('div');
content.classList.add('content');


container.appendChild(header);
container.appendChild(content);

const state = {
    container: container,
    content: content,
    projects: [],
    currentProject: null,
    inboxProject: null,
    todayProject: null,
    metadata: {
        currentPid: null,
        inboxPid: null,
        todayPid: null
    }
}

Object.keys(localStorage).forEach(key => {
    if(key !== 'metadata'){
        state.projects.push(Project.fromJson(localStorage.getItem(key)));
    } 
});
state.projects.sort((a, b) => a.pid - b.pid);



if(localStorage.getItem('metadata')){
    state.metadata = JSON.parse(localStorage.getItem('metadata'));
    state.currentProject = state.projects.find(p => p.pid === state.metadata.currentPid);
    state.inboxProject = state.projects.find(p => p.pid === state.metadata.inboxPid);
    state.todayProject = state.projects.find(p => p.pid === state.metadata.todayPid);
    console.log("found metadata");
}

if(state.inboxProject === null){
    state.inboxProject = new Project('Inbox');
    state.projects.push(state.inboxProject);
    state.metadata.inboxPid = state.inboxProject.pid;
    localStorage.setItem(state.inboxProject.pid, JSON.stringify(state.inboxProject));
    console.log("Inbox project created.");
}

if(state.todayProject === null){
    state.todayProject = new Project('Today');
    state.projects.push(state.todayProject);
    state.metadata.todayPid = state.todayProject.pid;
    localStorage.setItem(state.todayProject.pid, JSON.stringify(state.todayProject));
    console.log("Today project created.");
}

state.todayProject.clearTasks();
state.projects.forEach(project => {
    if(project.pid !== state.todayProject.pid){
        project.tasks.forEach(task => {
            if(task.dueDate.toLocaleDateString() === new Date().toLocaleDateString()){
                state.todayProject.addTask(task);
            }
        });
    }
});


sidebarView(container);
if(state.currentProject){
    projectView(content);
}

localStorage.setItem('metadata', JSON.stringify(state.metadata));

export { state };