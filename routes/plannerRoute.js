import express from "express";
import {
    getAllPlannedWorks,
} from "../controllers/plannerController.js";

const router = express.Router();

router.get("/", getAllPlannedWorks);

export default router;