import express from "express";
import multer from "multer";
import path from "path";
import db from "../config/database.js";
import { getAllAvailableMachine } from "../controllers/machineController.js";

//Dealing with the saving images inside the Images folder
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

router.get("/", getAllAvailableMachine);

//This routes handle the post machine endpoint (also the saving images to the Images folder in root)
router.post("/", upload.single("image"), (req, res) => {
  const image = req.file.filename;
  const machineName = req.body.machinename;
  const departmentID = req.body.departmentid;
  const uniqueName = req.body.uniqueName;
  const departmentDes = req.body.departmentdes;
  const smallDes = req.body.smallDes;
  const URL = req.body.URL;

  const sql =
    "INSERT INTO machine (machinename, departmentid,departmentdes, image,uniqueName,smallDes,URL,hide) VALUES (?, ?, ?, ?, ?, ?,?,0)";
  db.query(
    sql,
    [
      machineName,
      departmentID,
      departmentDes,
      image,
      uniqueName,
      smallDes,
      URL,
    ],
    (err, result) => {
      if (err) return res.json(err);
      return res.json({ status: "OK" });
    }
  );
});

//update machine details
router.put("/update", upload.single("image"), (req, res) => {
  const image = req.file.filename;
  const machineName = req.body.machinename;
  const departmentID = req.body.departmentid;
  const uniqueName = req.body.uniqueName;
  const departmentDes = req.body.departmentdes;
  const smallDes = req.body.smallDes;
  const URL = req.body.URL;
  const id = req.body.id;

  const sql =
    "UPDATE machine SET machinename = ?, departmentid = ?, departmentdes = ?, image = ?,uniqueName = ?, smallDes = ?, URL = ?  WHERE machineid = ?";
  db.query(
    sql,
    [
      machineName,
      departmentID,
      departmentDes,
      image,
      uniqueName,
      smallDes,
      URL,
      id,
    ],
    (err, result) => {
      if (err) return res.json(err);
      return res.json({ status: "OK" });
    }
  );
});

export default router;
