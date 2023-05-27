import express from "express";
import {
    getAllAvailableUsers,
} from "../controllers/employeeController.js";

const router = express.Router();

router.get("/", getAllAvailableUsers);

export default router;