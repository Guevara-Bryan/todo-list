import {frame_view, section_view, project_pannel_view, projects_section_view} from './view.js';
import { createProject, createTask, app } from './model.js';
import './styles.css';

app.init();

const pageFrame = frame_view();

let i = 0;

app.add_project(createProject('Homework'));
app.add_project(createProject('House Chores'));
app.add_project(createProject('Party'));

pageFrame.querySelector('#sections').appendChild(section_view(app.get_section('inbox')));
pageFrame.querySelector('#sections').appendChild(section_view(app.get_section('today')));
pageFrame.querySelector('#sections').appendChild(projects_section_view(app.get_projects()));

pageFrame.querySelector('#project-create').addEventListener('click', ()=>{
    const p = createProject(`Project ${++i}`);
    pageFrame.querySelector('.projects-container').appendChild(project_pannel_view(p));
    app.add_project(p);
});


// Displays the page.
document.body.appendChild(pageFrame);