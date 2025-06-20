import Task from "../models/Task.models.js";

export const createTask = async (req, res) => {
    const { title, description, status, project, projectId } = req.body;
    const projectValue = project || projectId;
    if (!projectValue) {
        return res.status(400).json({ message: "Project is required for task creation." });
    }
    try {
        const task = await Task.create({ title, description, status, project: projectValue });
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const getTask = async (req, res) => {
    const tasks = await Task.find({project: req.query.projectId});
    res.json(tasks);
};

export const updateTask = async (req, res) => {
    const { id } = req.params;
    const update = req.body || {};

    // Defensive: Only check status if update is not empty
    if (update && update.status === "Completed") {
        update.completedAt = new Date();
    }

    try {
        const task = await Task.findByIdAndUpdate(id, update, { new: true });
        res.status(200).json(task);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const deleteTask = async (req, res) => {
    const {id} = req.params;
    await Task.findByIdAndDelete(id);
    res.json({message: "Task deleted"});
};