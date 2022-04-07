import { v4 as genereate_id } from 'uuid';

const createTask = function (name, details, date, status, priority){

    let _name = name;  
    let _id = genereate_id();
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
    const to_json = function () {
        return JSON.stringify(
            this,
            (key, value)=>{
                if(!key.match(/^set_.|remove_self|from_json/) && typeof(value) === 'function'){ return value(); } 
                return value;
            }
        );
    };

    const from_json = function (json){
        const obj = JSON.parse(json);

        _name = obj.get_name;
        _id = obj.get_id;
        _details = obj.get_details;
        _date = obj.get_date;
        _status = obj.get_status;
        _priority = obj.get_priority;

        return result_obj;
    };

    const result_obj = {
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
        to_json,
        from_json,
    };

    return result_obj;
};


const createProject = function (name, id){

    let _name = name;
    let _id = id === undefined ? genereate_id() : id;
    let _tasks = {};

    const set_name = function (name) { _name = name; };
    const get_name = function () { return _name; };
    const get_id = function () { return _id; };
    const get_tasks = function (){
        return Object.keys(_tasks).map(key => _tasks[key]);
    };
    const add_task = function (task){
        // Gives the object the ability to remove itself.
        task.remove_self = function() {
            if(_tasks[task.get_id()] != undefined){
                delete _tasks[task.get_id()];
            }
        };

        //store the task locally.
        localStorage.setItem(task.get_id(), JSON.stringify({p_name: _name, p_id: _id, t_json: task.to_json()}));
        _tasks[task.get_id()] = task;
    };
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


const app = (function (title){
    const _title = title;
    const _sections = {
        inbox: createProject("Inbox"),
        today: createProject("Today"),
        projects: {},
    };

    const init = function (){
        if(localStorage.length === 0) return;
        let entry;
        for(const prop in localStorage){
            if(typeof(localStorage[prop]) === 'string'){
                entry = JSON.parse(localStorage[prop]);
                if(_sections.projects[entry.p_id] === undefined){
                    _sections.projects[entry.p_id] = createProject(entry.p_name, entry.p_id);
                }
                _sections.projects[entry.p_id].add_task(createTask().from_json(entry.t_json));
            }
        }
    }

    const get_title = function () { return _title; };
    const get_section = function (name) { return _sections[name];};
    const add_project = function (project) { 
        project.remove_self = function () {
            if(_sections.projects[project.get_id()] != undefined){
                delete _sections.projects[project.get_id()];
            }
        };
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

    const get_projects = function () {
        return Object.keys(_sections.projects).map(key => _sections.projects[key]);
    };


    return {
        init,
        get_title,
        get_section,
        add_project,
        remove_project,
        get_project,
        get_projects,
    };

})("TODO LIST");

export {
    app,
    createProject,
    createTask,
};
