import db from "../config/database.js";

export const getAllEmployeeFromDb = (callback) => {
  const q = "SELECT * FROM user";

  db.query(q, (error, data) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, data);
    }
  });
};