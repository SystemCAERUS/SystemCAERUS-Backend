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

  removeEmployeeController(req, res) {
    const values = req.body.id;

    this.employeeModel.removeEmployeeModel(
      values,
      (error, data) => {
        if (error) {
          return res.json(error);
        }
        return res.json("Data Updated");
      }
    );
  }

  updateUsernamePassword(req,res){
    const values = req.body;

    this.employeeModel.updateUnamePassword(
      values,
      (error, data) => {
        if (error) {
          return res.json(error);
        }
        return res.json("Data Updated");
      }
    );
  }
}

export default EmployeeController;
