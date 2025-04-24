import express from 'express';
const router = express.Router();

import {createTask, getTask, deleteTask, updateTask} from "../controllers/taskControllers.js";
import authToken from '../middlewares/auth.js';

router.post("/", authToken, createTask);
router.get("/", authToken, getTask);
router.put("/:id", authToken, deleteTask);
router.delete("/:id", authToken, updateTask);

export default router;