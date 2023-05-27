import { getAllPlannedWorksFromDb} from "../models/plannerModel.js";

export const getAllPlannedWorks = (req, res) => {
    getAllPlannedWorksFromDb((error, data) => {
    if (error) {
      return res.json(error);
    }
    return res.json(data);
  });
};
