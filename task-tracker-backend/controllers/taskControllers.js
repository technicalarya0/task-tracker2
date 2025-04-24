import Task from "../models/Task.models.js";

export const createTask = async (req, res) => {
    const {title, description, status, projectId} = req.body;
    const task = await Task.create({title, description, status, project: projectId});
    res.status(201).json(task);
};

export const getTask = async (req, res) => {
    const tasks = await Task.find({project: req.query.projectId});
    req.json(tasks);
};

export const updateTask = async (req, res) => {
    const {id} = req.params;
    const update = req.body;

    if(update.status === "Completed"){
        update.completedAt = new Date();
    }

    const task = await Task.findByIdAndUpdate(id, update, {new: true});
    res.status(200).json(task);
};

export const deleteTask = async (req, res) => {
    const {id} = req.params;
    await Task.findByIdAndDelete(id);
    res.json({message: "Task deleted"});
};