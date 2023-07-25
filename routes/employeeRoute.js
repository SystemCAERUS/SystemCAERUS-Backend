import express from "express";
import multer from "multer";
import path from "path";
import db from "../config/database.js";
import EmployeeController from "../controllers/employeeController.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

const router = express.Router();
const employeeController = new EmployeeController();

router.get("/", (req, res) => {
  employeeController.getAllAvailableUsers(req, res);
});

router.post("/", upload.single("image"), (req, res) => {
  const image = req.file.filename;
  const email = req.body.email;
  const name = req.body.employeeName;
  const desc = req.body.employeeDes;
  const id = req.body.jobID;
  const phone = req.body.phone;
  const extra = req.body.optional;

  const sql =
    "INSERT INTO user (`email`, `name`, `desc`, `imageURl`,`positionID`, `phone`, `extra`,`status`, `username`, `password`) VALUES (?, ?, ?, ?,?,?,?,1,?,?)";
  db.query(sql, [email, name, desc, image, id, phone, extra,"username","password"], (err, result) => {
    if (err) return res.json(err);
    return res.json({ status: "OK" });
  });
});

export default router;
