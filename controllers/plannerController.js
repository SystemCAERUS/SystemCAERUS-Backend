import PlannerModel from "../models/plannerModel.js";

class PlannerController {
  constructor() {
    this.plannerModel = new PlannerModel();
  }

  getAllPlannedWorks(req, res) {
    this.plannerModel.getAllPlannedWorksFromDb((error, data) => {
      if (error) {
        return res.json(error);
      }
      return res.json(data);
    });
  }

  addPlannedWork(req, res) {
    const data = req.body;

    this.plannerModel.addPlannedWorkToDb(data, (error, data) => {
      if (error) {
        return res.json(error);
      }
      return res.json(data);
    });
  }

  removePlannedWork(req, res) {
    const data = req.body;

    this.plannerModel.removePlannedWorkToDB(data, (error, data) => {
      if (error) {
        return res.json(error);
      }
      return res.json(data);
    });
  }

  updatePlannedWork(req, res) {
    const data = req.body;

    this.plannerModel.updatePlannedWorkToDB(data, (error, data) => {
      if (error) {
        return res.json(error);
      }
      return res.json(data);
    });
  }
}

export default PlannerController;
