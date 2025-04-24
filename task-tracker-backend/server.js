import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";


const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/projects", projectRoutes);


mongoose.connect(process.env.MONOG_URI)
    .then(() => {
        app.listen(5000, () => console.log("Server is running on port 5000"));
    })
    .catch(err => console.log(err));
