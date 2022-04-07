import {frame_view} from './view.js';
import { createProject, createTask, app } from './model.js';
import './styles.css';

app.init();

const pageFrame = frame_view();



// Displays the page.
document.body.appendChild(pageFrame);