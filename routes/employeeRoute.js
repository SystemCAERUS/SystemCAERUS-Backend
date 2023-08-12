import express from "express";
import multer from "multer";
import path from "path";
import db from "../config/database.js";
import EmployeeController from "../controllers/employeeController.js";
import bcrypt from "bcrypt"


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
/*
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
  db.query(
    sql,
    [email, name, desc, image, id, phone, extra, name, "password"],
    (err, result) => {
      if (err) return res.json(err);
      return res.json({ status: "OK" });
    }
  );
});*/

router.post("/", upload.single("image"), async (req, res) => {
  const image = req.file.filename;
  const email = req.body.email;
  const name = req.body.employeeName;
  const desc = req.body.employeeDes;
  const id = req.body.jobID;
  const phone = req.body.phone;
  const extra = req.body.optional;
  const password = "1999";

  // Generate a salt to use for hashing the password
  const saltRounds = 10;
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log(hashedPassword)

    const sql =
      "INSERT INTO user (`email`, `name`, `desc`, `imageURl`,`positionID`, `phone`, `extra`,`status`, `username`, `password`) VALUES (?, ?, ?, ?, ?, ?, ?, 1, ?, ?)";
    db.query(
      sql,
      [email, name, desc, image, id, phone, extra, phone, hashedPassword],
      (err, result) => {
        if (err) return res.json(err);
        return res.json({ status: "OK" });
      }
    );
  } catch (err) {
    console.error(err);
    return res.json({ error: "An error occurred" });
  }
});

router.put("/", upload.single("image"), (req, res) => {
  const image = req.file.filename;
  const email = req.body.email;
  const name = req.body.employeeName;
  const desc = req.body.employeeDes;
  const id = req.body.jobID;
  const phone = req.body.phone;
  const extra = req.body.optional;
  const uID = req.body.id;

  console.log(uID)

  const sql =
    "UPDATE `user` SET `email` = ?, `name` = ?, `desc` = ?, `imageURl` = ?,`positionID`=? ,`phone` = ?, `extra` = ? WHERE `userid` = ?";
  db.query(
    sql,
    [email, name, desc, image, id, phone, extra, uID],
    (err, result) => {
      if (err) return res.json(err);
      return res.json({ status: "OK" });
    }
  );
});

router.put("/remove", (req, res) => {
  employeeController.removeEmployeeController(req, res);
});

router.put("/update_user",(req,res)=>{
  employeeController.updateUsernamePassword(req,res);
})

export default router;
