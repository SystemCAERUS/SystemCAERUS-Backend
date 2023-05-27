import db from "../config/database.js";

export const getAllAvailableDepartmentsFromDb = (callback) => {
  const q = "SELECT * FROM department";

  db.query(q, (error, data) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, data);
    }
  });
};