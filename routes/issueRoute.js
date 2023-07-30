import express from "express";
import IssueController from "../controllers/issueController.js";

const router = express.Router();
const issueController = new IssueController();

router.get("/", (req, res) => {
  issueController.getAllAvailableIssues(req, res);
});

router.post("/", (req, res) => {
  issueController.addIssue(req, res);
});

router.put("/", (req, res) => {
  issueController.closeIssueController(req, res);
});

router.put("/update", (req, res) => {
  issueController.updateIssueController(req, res);
});

export default router;

