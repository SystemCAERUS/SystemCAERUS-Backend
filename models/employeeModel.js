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

  removeEmployeeModel(values, callback) {
    const q =
      "UPDATE user SET `status` = 0 WHERE userid = ?";
    db.query(q, values, (error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  }
}