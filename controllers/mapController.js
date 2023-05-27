import { getAllAvailableDepartmentsFromDb} from "../models/mapModel.js";

export const getAllAvailableDepartments = (req, res) => {
    getAllAvailableDepartmentsFromDb((error, data) => {
    if (error) {
      return res.json(error);
    }
    return res.json(data);
  });
};
