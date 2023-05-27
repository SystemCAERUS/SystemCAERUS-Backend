import db from "../config/database.js";

export const getAllPlannedWorksFromDb = (callback) => {
  const q = "SELECT * FROM planner";

  db.query(q, (error, data) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, data);
    }
  });
};