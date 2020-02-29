const express = require('express');
const app = express();
const taskRoute = express.Router();

// Tequiring the task model
let Task = require('../models/Task');

// Creating Task
taskRoute.route('/create').post((req, res, next) => {
    Task.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
});

// Getting/reading all of the tasks
taskRoute.route('/').get((req, res, next) => {
    Task.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Getting/reading a single task
taskRoute.route('/read/:id').get((req, res, next) => {
    Task.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
});

// Updating a task
taskRoute.route('/update/:id').put((req, res, next) => {
    Task.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error);
        } else {
            res.json(data);
            console.log("Task updated successfully");
        }
    })
});

// Deleting a task
taskRoute.route('/delete/:id').delete((req, res, next) => {
    Task.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
});

module.exports = taskRoute;