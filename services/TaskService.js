const {Task, TaskStatus, TaskType} = require('../database/sequalize');
const express = require('express');

function index(request, response) {
    response.json({message: 'hello'});
}

function getTasks() {

}

function getTaskTypes(request, response) {
    TaskType.findAll().then((taskTypes) => {
        return response.status(200).json(taskTypes);
    })

}

function getStatusWithTasks(request, response) {
    TaskStatus.findAll({include: [Task], order: [['display_order', 'ASC']]}).then(taskStatuses => {
        TaskType.findAll().then(taskTypes => {
            return response.json({success: true, data: {task_statuses: taskStatuses, task_types: taskTypes}});
        })
    })
}



function create(request, response) {
    let {
        title,
        description,
        type_id,
        status_id,
        assigned_user_id,
        time_estimate,
        actual_time,
        task_id
    } = request.body;


    Task.create({
        title: title,
        description: description,
        creator_id: request.user.id,
        type_id: type_id,
        status_id: status_id,
        assigned_user_id: assigned_user_id,
        time_estimate: time_estimate,
        actual_time: actual_time,
        task_id: task_id
    }).then((task) => {
        return response.status(200).json(task);
    }).catch(e => {
        return response.status(400).json({message: 'invalid data'});
    })
}

function update(request, response) {

    if(!request.params.taskId)
    {
        return response.status(404).json({message: 'Task not found!'});
    }

    let {
        title,
        description,
        type_id,
        status_id,
        assigned_user_id,
        time_estimate,
        actual_time,
        task_id
    } = request.body;


    Task.findByPk(request.params.taskId)
        .then((task) => {
            task.update({
                title: title,
                description: description,
                creator_id: request.user.id,
                type_id: type_id,
                status_id: status_id,
                assigned_user_id: assigned_user_id,
                time_estimate: time_estimate,
                actual_time: actual_time,
                task_id: task_id
            }).then((task) => {
                return response.status(200).json(task);
            }).catch(e => {
                return response.status(400).json({message: 'invalid data'});
            })
        }).catch(err => {
        return response.status(404).json({message: 'Task not found!'});
    })

}


function createStatus(request, response) {
    let {name} = request.body;
    if (!name) {
        response.json({success: false, message: "Task Status must have a name"});
    }

    TaskStatus.create({name}).then(() => {
        return response.json({success: true, message: 'Task Status created successfully'});
    }).catch(e => {
        return response.json({success: false, message: 'Task Status creation failed'});
    })
}

function createType(request, response) {
    let {name} = request.body;
    if (!name) {
        response.json({success: false, message: "Task Type must have a name"});
    }

    TaskType.create({name}).then(() => {
        return response.json({success: true, message: 'Task Type created successfully'});
    }).catch(e => {
        return response.json({success: false, message: 'Task Type creation failed'});
    })
}

function updateTaskStatus(req, res) {
    const {status_id} = req.body;
    if (!req.params.taskId) {
        return res.status(404);
    }
    Task.findByPk(req.params.taskId).then((task) => {

        if (task) {
            task.update({status_id}).then(() => {
                return res.status(200).send({message: "task updated successfully"});
            }).catch(err => {
                return res.status(400).send({message: 'Invalid data sent!'});
            })
        } else {
            return res.status(404).send({message: 'Task not found!'});
        }
    }).catch(err => {
        return res.status(404).send({message: 'Task not found!'});
    })
}


module.exports = {
    update,
    updateTaskStatus,
    getTaskTypes: getTaskTypes,
    getStatusWithTasks,
    create: create,
    createStatus,
    createType,

};