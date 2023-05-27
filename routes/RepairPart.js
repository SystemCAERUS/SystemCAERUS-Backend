import express from "express";
import {
  getRepairParts,
} from "../controllers/repairPartController.js";

const router = express.Router();

router.get("/", getRepairParts);

export default router;