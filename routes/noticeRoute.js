import express from "express";
import {
  getNotifications,
  addNotification,
  deleteNotification,
  updateNotification,
} from "../controllers/noticeBoardController.js";

const router = express.Router();

router.get("/", getNotifications);
router.post("/", addNotification);
router.delete("/:id", deleteNotification);
router.put("/update/:id", updateNotification);

export default router;

