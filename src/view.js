import { Task, Project } from './model.js';
import { state } from './controller.js';
import './styles.css';
import './effects.css';

function taskView(task, parent){
    const taskElement = document.createElement('div');
    taskElement.classList.add('task', 'fade-in');

    const taskTitle = document.createElement('div');
    taskElement.appendChild(taskTitle);
    taskTitle.classList.add('task-title');
    taskTitle.innerHTML = task.title;

    const taskDescription = document.createElement('div');
    taskElement.appendChild(taskDescription);
    taskDescription.classList.add('task-description');
    taskDescription.innerHTML = task.description;

    const taskDueDate = document.createElement('div');
    taskElement.appendChild(taskDueDate);
    taskDueDate.classList.add('task-due-date');
    taskDueDate.innerHTML = "Due date: " + task.dueDate.toLocaleDateString();

    const taskPriority = document.createElement('div');
    taskElement.appendChild(taskPriority);
    taskPriority.classList.add('task-priority');
    taskPriority.innerHTML = "Priority: " + task.priority;


    const moreMenu = document.createElement('div');
    moreMenu.classList.add('task-options', 'more-menu');
    taskElement.appendChild(moreMenu);

    const icon = document.createElement('div');
    moreMenu.appendChild(icon);
    icon.classList.add('more-menu-icon');


    const moreMenuList = document.createElement('div');
    moreMenu.appendChild(moreMenuList);
    moreMenuList.classList.add('more-menu-list', 'fade-in');

    const deleteButton = document.createElement('button');
    moreMenuList.appendChild(deleteButton);
    deleteButton.classList.add('press-effect','more-menu-item');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', (e) => {
        taskElement.classList.add('fade-out');
        taskElement.addEventListener('animationend', () => {
            state.currentProject.removeTask(task)
            parent.removeChild(taskElement);
            if(task.dueDate.toLocaleDateString() === new Date().toLocaleDateString()){
                state.todayProject.removeTask(task);
            }
        });
    });

    const editButton = document.createElement('button');
    moreMenuList.appendChild(editButton);
    editButton.classList.add('press-effect','more-menu-item');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', (e) => {
        taskConfigView({task,
                        taskTitle,
                        taskDescription,
                        taskDueDate,
                        taskPriority}, 'edit');
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
        addTaskButton.classList.add('UIButton', 'press-effect');
        addTaskButton.textContent = 'Add Task';
        addTaskButton.addEventListener('click', () => {
            taskConfigView(taskContainer, 'create', projectElement);
        });
    }

    const taskContainer = document.createElement('div');
    projectElement.appendChild(taskContainer);
    taskContainer.classList.add('task-container');
    state.currentProject.tasks.forEach(task => { taskView(task, taskContainer) });

    parent.appendChild(projectElement);
}

function projectSidebarView(project, parent){
    const projectElement = document.createElement('div');
    projectElement.classList.add('project-list-item');
    
    const projectTitle = document.createElement('div');
    projectElement.appendChild(projectTitle);
    projectTitle.classList.add('project-sidebar-title');
    projectTitle.innerHTML = project.name;

    projectElement.onclick = () => {
        if(state.currentProject.pid === project.pid){ return; }
        if(state.projectElement){
            state.projectElement.classList.toggle('selected');
        }
        state['projectElement'] = projectElement;
        projectElement.classList.toggle('selected');
        state.currentProject = project;
        if(state.content.firstChild){
            state.content.removeChild(state.content.firstChild);
        }
        projectView(state.content);

        state.metadata.currentPid = project.pid;
        localStorage.setItem('metadata', JSON.stringify(state.metadata));
    };


    if(project.pid !== state.metadata.inboxPid && project.pid !== state.metadata.todayPid){
        const moreMenu = document.createElement('div');
        moreMenu.classList.add('more-menu');
        projectElement.appendChild(moreMenu);

        const icon = document.createElement('div');
        moreMenu.appendChild(icon);
        icon.classList.add('more-menu-icon');


        const moreMenuList = document.createElement('div');
        moreMenu.appendChild(moreMenuList);
        moreMenuList.classList.add('more-menu-list', 'fade-in');

        const deleteButton = document.createElement('button');
        moreMenuList.appendChild(deleteButton);
        deleteButton.classList.add('press-effect','more-menu-item');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', (e) => {
            state.projects = state.projects.filter(p => p.pid !== project.pid);
            localStorage.removeItem(project.pid);
            parent.removeChild(projectElement);
            state.currentProject = state.inboxProject;
            state.metadata.currentPid = state.currentProject.pid;
            if(state.content.firstChild){
                state.content.removeChild(state.content.firstChild);
            }
            projectView(state.content);
            e.stopPropagation();
            localStorage.setItem('metadata', JSON.stringify(state.metadata));
        });

        const editButton = document.createElement('button');
        moreMenuList.appendChild(editButton);
        editButton.classList.add('press-effect','more-menu-item');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', (e) => {
            projectConfigView({ project, sidebar: projectTitle }, 'edit');
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
    addProjectButton.classList.add('UIButton', 'press-effect');
    addProjectButton.textContent = 'Add Project';
    addProjectButton.addEventListener('click', () => {
        projectConfigView(pList, 'create');
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

function projectConfigView(context, mode){
    const screen = document.createElement('div');
    screen.classList.add('block-screen');

    const projectConfigElement = document.createElement('div');
    screen.appendChild(projectConfigElement);
    projectConfigElement.classList.add('project-config');

    const projectName = document.createElement('input');
    projectConfigElement.appendChild(projectName);
    projectName.classList.add('project-name');
    projectName.placeholder = 'Project Name';
    if(mode === 'edit'){
        projectName.value = context.project.name;
    }

    const cancelButton = document.createElement('button');
    projectConfigElement.appendChild(cancelButton);
    cancelButton.classList.add('UIButton', 'press-effect', 'cancel-project-button');
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('click', () => {
        state.container.removeChild(screen);
    });

    const saveButton = document.createElement('button');
    projectConfigElement.appendChild(saveButton);
    saveButton.classList.add('UIButton', 'press-effect', 'save-project-button');
    saveButton.textContent = 'Save';
    saveButton.addEventListener('click', (e) => {
        if(mode === 'create'){
            const project = new Project(`${projectName.value}`);
            state.projects.push(project);
            localStorage.setItem(project.pid, JSON.stringify(project));
            state.currentProject = project;
            if(state.content.firstChild){
                state.content.removeChild(state.content.firstChild);
            }
            projectSidebarView(project, context);
            projectView(state.content);

            //Updating metadata.
            state.metadata.currentPid = project.pid;
            localStorage.setItem('metadata', JSON.stringify(state.metadata));

        } else if(mode === 'edit'){
            context.project.name = projectName.value;
            context.sidebar.innerHTML = projectName.value;
            if(state.currentProject.pid === context.project.pid){
                if(state.content.firstChild){
                    state.content.removeChild(state.content.firstChild);
                }
                projectView(state.content);
            }
            localStorage.setItem(context.project.pid, JSON.stringify(context.project));
        }

        state.container.removeChild(screen);
        e.stopPropagation();
    });



    state.container.appendChild(screen);
}

function taskConfigView(context, mode){
    const screen = document.createElement('div');
    screen.classList.add('block-screen');
    
    const taskConfigElement = document.createElement('div');
    screen.appendChild(taskConfigElement);
    taskConfigElement.classList.add('task-config');
    
    const taskTitle = document.createElement('input');
    taskConfigElement.appendChild(taskTitle);
    taskTitle.classList.add('task-config-title');
    taskTitle.placeholder = 'Task Title';
    if(mode === 'edit'){
        taskTitle.value = context.task.title;
    }
    
    const taskDescription = document.createElement('textarea');
    taskConfigElement.appendChild(taskDescription);
    taskDescription.classList.add('task-config-description');
    taskDescription.placeholder = 'Task Description';
    if(mode === 'edit'){
        taskDescription.value = context.task.description;
    }
    
    const taskDueDate = document.createElement('input');
    taskConfigElement.appendChild(taskDueDate);
    taskDueDate.classList.add('task-config-due-date');
    taskDueDate.setAttribute('type', 'date');
    const todayDate = new Date();
    taskDueDate.value = todayDate.getFullYear().toString() + '-'
                        + (todayDate.getMonth() + 1).toString().padStart(2,0) + '-'
                        + todayDate.getDate().toString().padStart(2,0);
    if(mode === 'edit'){
        taskDueDate.value = context.task.dueDate.getFullYear().toString() + '-'
                        + (context.task.dueDate.getMonth() + 1).toString().padStart(2,0) + '-'
                        + context.task.dueDate.getDate().toString().padStart(2,0);
    }


    const taskPriority = document.createElement('select');
    taskConfigElement.appendChild(taskPriority);
    taskPriority.classList.add('task-config-priority');
    taskPriority.options.add(new Option('Low'));
    taskPriority.options.add(new Option('Medium'));
    taskPriority.options.add(new Option('High'));
    if(mode === 'edit'){
        taskPriority.value = context.task.priority;
    }

    const cancelButton = document.createElement('button');
    taskConfigElement.appendChild(cancelButton);
    cancelButton.classList.add('UIButton', 'press-effect', 'cancel-task-button');
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('click', () => { state.container.removeChild(screen); });

    const saveButton = document.createElement('button');
    taskConfigElement.appendChild(saveButton);
    saveButton.classList.add('UIButton', 'press-effect', 'save-task-button');
    saveButton.textContent = 'Save';
    saveButton.addEventListener('click', () => {
        if(mode == 'create'){
            const task = new Task(`${taskTitle.value}`, `${taskDescription.value}`, new Date(
                taskDueDate.value.split('-')[0],
                taskDueDate.value.split('-')[1] - 1,
                taskDueDate.value.split('-')[2]
            ), `${taskPriority.value}`);
    
    
            state.currentProject.addTask(task);
            
            taskView(task, context);
            console.log(new Date(Date.now()).toISOString());
            if(task.dueDate.toLocaleDateString() === new Date().toLocaleDateString()){
                state.todayProject.addTask(task);
            }
        } else if(mode == 'edit'){
            context.task.title = taskTitle.value;
            context.task.description = taskDescription.value;
            context.task.dueDate = new Date(
                taskDueDate.value.split('-')[0],
                taskDueDate.value.split('-')[1] - 1,
                taskDueDate.value.split('-')[2]
            );
            context.task.priority = taskPriority.value;

            context.taskTitle.innerHTML = taskTitle.value;
            context.taskDescription.innerHTML = taskDescription.value;
            context.taskDueDate.innerHTML = "Due Date: " + taskDueDate.valueAsDate.toLocaleDateString();
            context.taskPriority.innerHTML = "Priority: " + taskPriority.value;

            localStorage.setItem(state.currentProject.pid, JSON.stringify(state.currentProject));
        }

        state.container.removeChild(screen);
    });

    state.container.appendChild(screen);
}

export { taskView, projectView, sidebarView, projectConfigView, taskConfigView };