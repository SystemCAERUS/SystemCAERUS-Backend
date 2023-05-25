// routes/noticeBoardRoutes.js
import express from "express";
import {
  getNotifications,
  addNotification,
  deleteNotification,
  updateNotification,
} from "../controllers/noticeBoardController.js";

const router = express.Router();

router.get("/hr", getNotifications);
router.post("/hr", addNotification);
router.delete("/hr/:id", deleteNotification);
router.put("/hr/update/:id", updateNotification);

export default router;

