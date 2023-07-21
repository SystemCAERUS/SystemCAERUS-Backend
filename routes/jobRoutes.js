import express from "express";
import JobController from "../controllers/jobController.js";

const router = express.Router();
const jobController = new JobController();

//manage routes of notice board

router.get("/", (req, res) => {
  jobController.getPositionsC(req, res);
});

router.post("/", (req, res) => {
  jobController.addPositionC(req, res);
});

export default router;
