import Project from "../models/Project.models.js";

export const createProject = async (req, res) => {
    const {title} = req.body;

    const user = req.user.id;

    const existingProject = await Project.find({user});
    if(existingProject.length >= 8) return res.status(400).json({message: "Maximum 8 projects per user allowed"});

    const project = await Project.create({title, user});
    res.status(201).json(project);
};

export const getProjects = async (req, res) => {
    const projects = await Project.find({user: req.user.id});
    res.json(projects);
}