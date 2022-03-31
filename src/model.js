import { v4 as genereate_id } from 'uuid';


const make_project = function (name){
    let _name = name;
    let _tasks = {};
    const set_name = function (name) { _name = name; };
    const get_name = function () { return _name; };
    const get_tasks = function (){ return Object.entries(_tasks); };
    const add_todo = function (todo){ _tasks[todo.get_id()] = todo; };
    const get_todo = function (t_id){
        return _tasks[t_id];
    };
    const remove_todo = function (t_id){
        if(_tasks[t_id] != undefined){
            delete _tasks[t_id];
        }
    };

    return {
        set_name,
        get_name,
        get_tasks,
        add_todo,
        get_todo,
        remove_todo,
    };
};

const make_todo = function (project = null, name, details, date = null, status, priority){
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
        _project.remove_todo(_id);
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

