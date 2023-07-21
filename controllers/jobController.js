import JobModel from "../models/jobModel.js";

class JobController {
  constructor() {
    this.jobModel = new JobModel();
  }

  getPositionsC(req, res) {
    this.jobModel.getPositions((error, data) => {
      if (error) {
        return res.json(error);
      }
      return res.json(data);
    });
  }

  addPositionC(req, res) {
    const name = req.body.name;
    const desc = req.body.desc;
    const values = [name, desc];

    this.jobModel.addPosition(values, (error, data) => {
      if (error) {
        console.log(error);
        return res.json(error);
      }
      return res.json("Data Added");
    });
  }
}

export default JobController;
