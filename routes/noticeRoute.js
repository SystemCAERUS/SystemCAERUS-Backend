import express from "express";
import NoticeBoardController from "../controllers/noticeBoardController.js";

const router = express.Router();
const noticeBoardController = new NoticeBoardController();

//manage routes of notice board
router.get("/", (req, res) => {
  noticeBoardController.getNotifications(req, res);
});

router.post("/", (req, res) => {
  noticeBoardController.addNotification(req, res);
});

router.delete("/:id", (req, res) => {
  noticeBoardController.deleteNotification(req, res);
});

router.put("/update/:id", (req, res) => {
  noticeBoardController.updateNotification(req, res);
});


export default router;
