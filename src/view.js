import { Task, Project } from './model.js';
import { state } from './controller.js';
import './styles.css';
import './effects.css';

function taskView(task, parent){
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

    taskElement.innerHTML = `
        <div class="task-title">${task.title}</div>
        <div class="task-description">${task.description}</div>
        <div class="task-due-date">${task.dueDate.toLocaleDateString()}</div>
        <div class="task-priority">${task.priority}</div>
    `;

    const deleteButton = document.createElement('button');
    taskElement.appendChild(deleteButton);
    deleteButton.classList.add('UIButton');
    deleteButton.classList.add('press-effect');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        state.currentProject.removeTask(task)
        parent.removeChild(taskElement);
    });

    parent.appendChild(taskElement);
}

function projectView(parent){
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');

    const projectHeader = document.createElement('div');
    projectElement.appendChild(projectHeader);
    projectHeader.classList.add('project-header');

    const projectTitle = document.createElement('div');
    projectHeader.appendChild(projectTitle);
    projectTitle.classList.add('project-title');
    projectTitle.innerHTML = state.currentProject.name;

    if(state.currentProject.pid !== state.metadata.todayPid){
        const addTaskButton = document.createElement('button');
        projectHeader.appendChild(addTaskButton);
        addTaskButton.classList.add('UIButton');
        addTaskButton.classList.add('press-effect');
        addTaskButton.textContent = 'Add Task';
        addTaskButton.addEventListener('click', () => {
            const task = new Task(`New Task ${state.currentProject.tasks.length + 1}`, 'New Task Description', new Date(), 'High');
            state.currentProject.addTask(task);
            
            taskView(task, taskContainer);
        });
    }

    

    const taskContainer = document.createElement('div');
    projectElement.appendChild(taskContainer);
    taskContainer.classList.add('task-container');
    state.currentProject.tasks.forEach(task => { taskView(task, taskContainer) });

    parent.appendChild(projectElement);
}

function projectSidebarView(project, parent){
    const projectElement = document.createElement('button');
    projectElement.classList.add('project-list-item');
    projectElement.classList.add('hover-effect');
    projectElement.innerHTML = project.name;
    projectElement.addEventListener('click', () => {
        state.currentProject = project;
        if(state.content.firstChild){
            state.content.removeChild(state.content.firstChild);
        }
        projectView(state.content);

        state.metadata.currentPid = project.pid;
        localStorage.setItem('metadata', JSON.stringify(state.metadata));
    });


    if(project.pid !== state.metadata.inboxPid && project.pid !== state.metadata.todayPid){
        const deleteButton = document.createElement('button');
        projectElement.appendChild(deleteButton);
        deleteButton.classList.add('UIButton');
        deleteButton.classList.add('press-effect');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', (e) => {
            state.projects = state.projects.filter(p => p.pid !== project.pid);
            localStorage.removeItem(project.pid);
            parent.removeChild(projectElement);
            state.currentProject = state.inboxProject;
            if(state.content.firstChild){
                state.content.removeChild(state.content.firstChild);
            }
            projectView(state.content);

            if(state.projects.length === 0){
                state.currentProject = null;
                state.metadata.currentPid = null;
                state.content.removeChild(state.content.firstChild);
                localStorage.removeItem('metadata');
            }
            e.stopPropagation();
        });
    }
    parent.appendChild(projectElement);
}

function sidebarHeaderView(pList, parent){
    const sidebarHeader = document.createElement('div');
    parent.appendChild(sidebarHeader);
    sidebarHeader.classList.add('sidebar-header');
    projectSidebarView(state.inboxProject, sidebarHeader);
    projectSidebarView(state.todayProject, sidebarHeader);

    const addProjectButton = document.createElement('button');
    sidebarHeader.appendChild(addProjectButton);
    addProjectButton.classList.add('UIButton');
    addProjectButton.classList.add('press-effect');
    addProjectButton.textContent = 'Add Project';
    addProjectButton.addEventListener('click', () => {
        const project = new Project(`New Project ${state.projects.length + 1}`);
        state.projects.push(project);
        localStorage.setItem(project.pid, JSON.stringify(project));
        state.currentProject = project;
        if(state.content.firstChild){
            state.content.removeChild(state.content.firstChild);
        }
        projectSidebarView(project, pList);
        projectView(state.content);

        //Updating metadata.
        state.metadata.currentPid = project.pid;
        localStorage.setItem('metadata', JSON.stringify(state.metadata));
    });
}

function sidebarView(parent){
    const sidebarElement = document.createElement('div');
    sidebarElement.classList.add('sidebar');
    
    const projectList = document.createElement('div');
    projectList.classList.add('project-list');
    state.projects.forEach(project => {
        if(project.pid !== state.metadata.inboxPid && project.pid !== state.metadata.todayPid){
            projectSidebarView(project, projectList)
        }
    });
    
    sidebarHeaderView(projectList, sidebarElement);
    sidebarElement.appendChild(projectList);
    parent.appendChild(sidebarElement);
}


export { taskView, projectView, sidebarView };