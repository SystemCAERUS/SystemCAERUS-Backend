import db from "../config/database.js";

export class EmployeeModel {
  getAllEmployees(callback) {
    const q = "SELECT user.*, position.* FROM user INNER JOIN position ON user.positionID = position.positionID";

    db.query(q, (error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  }

  addEmployee(){
    
  }
}