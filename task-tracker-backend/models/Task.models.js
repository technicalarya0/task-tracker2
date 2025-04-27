import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: {
        type: String,
        enum: ["Pending", "In Progress", "Completed"],
        default: "Pending",
    },
    completedAt: Date,
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
    },
    
});

const Task = mongoose.model("Task", taskSchema);
export default Task;