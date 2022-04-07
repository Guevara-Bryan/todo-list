const frame_view = function () {
    const view = document.createElement('div');
    view.classList.add('container');
    view.innerHTML = `
        <div id='header'>
            <div id='title'><h1>Tasky</h1></div>
        </div>
        <div id='sections'></div>
        <div id='stage'></div>
    `;
    return view;
}

//View for the sections of the app on the side pannel
const section_view = function (section) {
    const view = document.createElement('div');
    view.classList.add('section');

    view.innerHTML = `<h2>${section.get_name()}</h2></div>`;

    view.addEventListener('click', ()=>{
        const stage = document.querySelector('#stage');
        console.log("still working");
        if(stage.hasChildNodes()){
            if(stage.firstChild.getAttribute('value') === section.get_id()) return;
            stage.removeChild(stage.firstChild);
        }
        stage.appendChild(project_stage_view(section));
    })

    return view;
};

// View for the task on the project page
const task_view = function (task) {
    const view = document.createElement('div');

    return view;
}


// View for the Page of the project
const project_stage_view = function (project) {
    const view = document.createElement('div');
    view.setAttribute('value', project.get_id());
    view.innerHTML = `<h1>${project.get_name()}</h1>`;
    return view;
};

const project_pannel_view = function(project){
    const view = document.createElement('div');
    view.classList.add('project-pointer');
    view.innerHTML = `<h3>${project.get_name()}</h3>`;

    const remove_self = document.createElement('button');
    remove_self.classList.add('project-delete');
    remove_self.textContent = 'Delete';
    remove_self.addEventListener('click', ()=> {
        event.stopPropagation();
        project.remove_self();
        document.querySelector('.projects-container').removeChild(view);
    });


    view.addEventListener('click', ()=>{
        const stage = document.querySelector('#stage');

        if(stage.hasChildNodes()){
            if(stage.firstChild.getAttribute('value') === project.get_id()) return;
            stage.removeChild(stage.firstChild);
        }
        stage.appendChild(project_stage_view(project));
    });

    view.appendChild(remove_self);
    return view;
};

//View for the projects section on the side pannel
const projects_section_view = function (projects) {
    const view = document.createElement('div');
    view.classList.add('project-section')

    view.innerHTML = `
        <div class='section'>
            <h2>Projects</h2>
            <button id='project-create'>New</button>
        </div>
    `;


    const projects_container = document.createElement('div');
    projects_container.classList.add("projects-container");

    projects.forEach(project => {
        projects_container.appendChild(project_pannel_view(project));
    });

    view.appendChild(projects_container);

    return view;
};

export {frame_view, section_view, projects_section_view, project_pannel_view, project_stage_view, task_view};