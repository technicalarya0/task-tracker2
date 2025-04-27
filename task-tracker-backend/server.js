import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

//Middleware
const app = express();
app.use(express.json());
app.use(cors());

//database connection
import connectDB from "./db/config.js";
connectDB();

// Routes
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";

app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/projects", projectRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server on port ${port}`)
});