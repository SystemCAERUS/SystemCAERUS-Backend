/*import express from "express";
import {
    getAllAvailableDepartments,
} from "../controllers/mapController.js";

const router = express.Router();

router.get("/", getAllAvailableDepartments);

export default router;*/


import express from "express";
import MapController from "../controllers/mapController.js";

const router = express.Router();
const mapController = new MapController();

//manage routes of notice board
router.get("/", (req, res) => {
  mapController.getDepartments(req, res);
});

router.post("/", (req, res) => {
  mapController.addDepartment(req, res);
});

router.put("/", (req, res) => {
  mapController.removeDepartmentController(req,res);
});

router.put("/machine", (req, res) => {
  mapController.removeMachineController(req,res);
});

router.put("/update/:id", (req, res) => {
  noticeBoardController.updateNotification(req, res);
});


export default router;