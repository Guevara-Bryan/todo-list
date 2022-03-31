import { v4 as genereate_id } from 'uuid';

const app = (function (title){
    const _title = title;
    const _sections = {
        inbox: create_project("Inbox"),
        today: create_project("Today"),  
        projects: {},
    };

    const get_title = function () { return _title; };
    const get_section = function (name) { return _sections[name];};
    const add_project = function (project) { 
        _sections.projects[project.get_id()] = project;
    };
    const remove_project = function (p_id){
        if(_sections.projects[p_id] != undefined){
            delete _sections.projects[p_id];
        }
    };
    const get_project = function (p_id) {
        return _sections.projects[p_id];
    };


    return {
        get_title,
        get_section,
        add_project,
        remove_project,
        get_project,
    }
})("Todo List");


const create_project = function (name){
    let _name = name;
    const _id = genereate_id();
    let _tasks = {};
    const set_name = function (name) { _name = name; };
    const get_name = function () { return _name; };
    const get_id = function () { return _id; };
    const get_tasks = function (){ return Object.entries(_tasks); };
    const add_task = function (task){ _tasks[task.get_id()] = task; };
    const get_task = function (t_id){
        return _tasks[t_id];
    };
    const remove_task = function (t_id){
        if(_tasks[t_id] != undefined){
            delete _tasks[t_id];
        }
    };

    return {
        set_name,
        get_name,
        get_id,
        get_tasks,
        add_task,
        get_task,
        remove_task,
    };
};

const create_task = function (project = null, name, details, date = null, status, priority){
    let _project = project;
    let _name = name;  
    const _id = genereate_id();
    let _details = details;
    let _date = date;
    let _status = status;
    let _priority = priority;

    const get_name = function () { return _name; };
    const set_name = function (name) { _name = name; }; 
    const get_details = function () { return _details; };
    const set_details = function (details) { _details = details; }; 
    const get_id = function () { return _id; };
    const get_date = function () { return _date; };
    const set_date = function (date) { _date = date; };
    const get_status = function () { return _status; };
    const set_status = function (status) { _status = status; }
    const get_priority = function () { return _priority; };
    const set_priority = function (priority) { _priority = priority; };
    
    const remove_self = function () {
        if(_project == null) return;
        _project.remove_task(_id);
    }

    return {
        get_name,
        set_name,
        get_details,
        set_details,
        get_id,
        get_date,
        set_date,
        get_status,
        set_status,
        get_priority,
        set_priority,
        remove_self,
    }
};

