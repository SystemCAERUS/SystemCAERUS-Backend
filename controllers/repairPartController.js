import { getRepairPartsFromDb } from "../models/repairPartModel.js";

export const getRepairParts = (req, res) => {
  getRepairPartsFromDb((error, data) => {
    if (error) {
      return res.json(error);
    }
    return res.json(data);
  });
};


import RepairModel from "../models/repairPartModel.js";

class RepairController {
  constructor() {
    this.repairModel = new RepairModel();
  }

  getAllRepairWorks(req, res) {
    this.repairModel.getAllRepairWorksFromDb((error, data) => {
      if (error) {
        return res.json(error);
      }
      return res.json(data);
    });
  }

  addRepairWork(req, res) {
    const data = req.body;

    this.repairModel.addRepairWorkToDb(data, (error, data) => {
      if (error) {
        return res.json(error);
      }
      return res.json(data);
    });
  }

  removeRepairWork(req, res) {
    const data = req.body;

    this.repairModel.removeRepairWorkToDB(data, (error, data) => {
      if (error) {
        return res.json(error);
      }
      return res.json(data);
    });
  }

  updateRepairWork(req, res) {
    const data = req.body;

    this.repairModel.updateRepairWorkToDB(data, (error, data) => {
      if (error) {
        return res.json(error);
      }
      return res.json(data);
    });
  }
}

export default RepairController;
