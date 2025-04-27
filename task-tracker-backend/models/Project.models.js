import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
});

const Project = mongoose.model("Project", projectSchema);
export default Project;