import db from "../config/database.js";

export const getAllAvailableIssuesFromDb = (callback) => {
  const q = "SELECT issues.*, department.*, machine.* FROM issues INNER JOIN department ON issues.departmentID = department.id INNER JOIN machine ON issues.machineID = machine.machineid;";

  db.query(q, (error, data) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, data);
    }
  });
};