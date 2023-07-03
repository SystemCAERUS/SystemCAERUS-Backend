import db from "../config/database.js";

export const getAllPlannedWorksFromDb = (callback) => {
  const q = "SELECT planner.*, department.*, machine.* FROM planner INNER JOIN department ON planner.departmentID = department.id INNER JOIN machine ON planner.machineID = machine.machineid;";
  

  db.query(q, (error, data) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, data);
    }
  });
};