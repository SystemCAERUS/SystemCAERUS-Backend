import express from "express";
import {
    getAllAvailableDepartments,
} from "../controllers/mapController.js";

const router = express.Router();

router.get("/", getAllAvailableDepartments);

export default router;