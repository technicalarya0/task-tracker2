import express from 'express';
const router = express.Router();

import {createProject, getProjects} from "../controllers/projectControllers.js";
import authToken from '../middlewares/auth.js';

router.post("/", authToken, createProject);
router.post("/", authToken, getProjects);

export default router;