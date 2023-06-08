import { EmployeeModel } from "../models/employeeModel.js";

class EmployeeController {
  constructor() {
    this.employeeModel = new EmployeeModel();
  }

  getAllAvailableUsers(req, res) {
    this.employeeModel.getAllEmployees((error, data) => {
      if (error) {
        return res.json(error);
      }
      return res.json(data);
    });
  }
}

export default EmployeeController;
