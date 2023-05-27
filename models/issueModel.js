import db from "../config/database.js";

export const getAllAvailableIssuesFromDb = (callback) => {
  const q = "SELECT * FROM issues";

  db.query(q, (error, data) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, data);
    }
  });
};