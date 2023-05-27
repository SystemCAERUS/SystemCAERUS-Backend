import { getAllEmployeeFromDb } from "../models/employeeModel.js";

export const getAllAvailableUsers = (req, res) => {
  getAllEmployeeFromDb ((error, data) => {
    if (error) {
      return res.json(error);
    }
    return res.json(data);
  });
};
