import express from "express";
import EmployeeController from "../controllers/employeeController.js";

const router = express.Router();
const employeeController = new EmployeeController();

router.get("/", (req, res) => {
  employeeController.getAllAvailableUsers(req, res);
});

export default router;
