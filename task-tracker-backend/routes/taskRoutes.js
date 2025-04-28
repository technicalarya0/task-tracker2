import express from 'express';
const router = express.Router();

import {createTask, getTask, deleteTask, updateTask} from "../controllers/taskControllers.js";
import authToken from '../middlewares/auth.js';

router.post("/", authToken, createTask);
router.get("/", authToken, getTask);
router.put("/:id", authToken, updateTask);
router.delete("/:id", authToken, deleteTask);

export default router;