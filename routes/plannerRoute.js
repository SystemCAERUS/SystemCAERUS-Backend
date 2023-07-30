import express from "express";
import PlannerController from "../controllers/plannerController.js";

const router = express.Router();
const plannerController = new PlannerController();

router.get("/", (req, res) => {
  plannerController.getAllPlannedWorks(req, res);
});

router.post("/", (req, res) => {
  plannerController.addPlannedWork(req, res);
});

router.put("/", (req, res) => {
  plannerController.removePlannedWork(req, res);
});

router.put("/update", (req, res) => {
  plannerController.updatePlannedWork(req, res);
});

export default router;
