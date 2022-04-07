const frame_view = function () {
    const view = document.createElement('div');
    view.classList.add('container');
    view.innerHTML = `
        <div id='header'></div>
        <div id='sections'></div>
        <div id='stage'></div>
    `;
    return view;
}

//View for the sections of the app on the side pannel
const section_view = function (section) {
    const view = document.createElement('div');

    return view;
};

//View for the projects section on the side pannel
const projects_section_view = function (projects) {
    const view = document.createElement('div');

    return view;
};

// View for the Page of the project
const project_view = function (project) {
    const view = document.createElement('div');

    return view;
};

// View for the task on the project page
const task_view = function (task) {
    const view = document.createElement('div');

    return view;
}

export {frame_view, section_view, projects_section_view, project_view, task_view};