// ------------------------------ Views for the models ----------------------------------
import {Task, Project} from './model.js';


const stage = document.querySelector('#stage');

/**
 * 
 * @param {Task} task Task object.
 * @param {*} parent DOM object to which to attach the view
 */
function TaskView(task, parent){
    const htmlTask = document.createElement('div');
    
    htmlTask.innerHTML = `
        <h2>Name: ${task.name}</h2>
        <p>Due date: ${task.date}</p>
        <p>Status: ${task.status}</p>
        <p>Priority: ${task.priority}</p>
        <p>Details: ${task.details}</p>
    `;
    
    parent.appendChild(htmlTask);
}

function TaskCreationView(parent){
    const TaskInfo = document.createElement('div');
    TaskInfo.classList.add('task-creation-view');

    const name = document.createElement('input');
    name.setAttribute('type', 'text');

    const details = document.createElement('textarea');

    const status = document.createElement('input');
    const priority = document.createElement('input');
    const date = document.createElement('input');
    date.setAttribute('type', 'date')

    const save_button = document.createElement('button');
    save_button.textContent = 'Save';
    const cancel_button = document.createElement('button');
    cancel_button.textContent = 'Cancel';

    TaskInfo.appendChild(name);
    TaskInfo.appendChild(date);
    TaskInfo.appendChild(status);
    TaskInfo.appendChild(priority);
    TaskInfo.appendChild(details);
    TaskInfo.appendChild(cancel_button);
    TaskInfo.appendChild(save_button);

    parent.appendChild(TaskInfo);
}




// ------------------------------- Template View ---------------------------------
const button = document.querySelector("#make-task-button");

button.addEventListener('click', function(e){
    e.stopImmediatePropagation();
    TaskCreationView(stage);
});

export{
    TaskView,
}