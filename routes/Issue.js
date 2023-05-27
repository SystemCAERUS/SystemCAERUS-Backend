import express from "express";
import {
    getAllAvailableIssues,
} from "../controllers/issueController.js";

const router = express.Router();

router.get("/", getAllAvailableIssues);

export default router;