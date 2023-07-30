import express from "express";
import JobController from "../controllers/jobController.js";

const router = express.Router();
const jobController = new JobController();

//manage routes of notice board

router.get("/", (req, res) => {
  jobController.getPositionsC(req, res);
});

router.post("/", (req, res) => {
  jobController.addPositionC(req, res);
});

router.put("/",(req,res)=>{
  console.log(req.body)
  jobController.hideJobPosition(req,res);
})

router.put("/update",(req,res)=>{
  console.log(req.body)
  jobController.updateJobPosition(req,res);
})


export default router;
