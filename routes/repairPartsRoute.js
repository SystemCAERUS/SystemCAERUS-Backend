/*import express from "express";
import {
  getRepairParts,
} from "../controllers/repairPartController.js";

const router = express.Router();

router.get("/", getRepairParts);

export default router;


*/

import express from "express";
import RepairController from "../controllers/repairPartController.js";

const router = express.Router();
const repairController = new RepairController();

router.get("/", (req, res) => {
  repairController.getAllRepairWorks(req, res);
});

router.post("/", (req, res) => {
  repairController.addRepairWork(req, res);
});

router.put("/", (req, res) => {
  repairController.removeRepairWork(req, res);
});

router.put("/update", (req, res) => {
  repairController.updateRepairWork(req, res);
});

export default router;