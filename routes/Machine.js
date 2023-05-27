import express from "express";
import {
  getAllAvailableMachine,
} from "../controllers/machineController.js";

const router = express.Router();

router.get("/", getAllAvailableMachine);

export default router;