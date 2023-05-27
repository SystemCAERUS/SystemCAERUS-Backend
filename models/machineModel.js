import db from "../config/database.js";

export const getAllAvailableMachineFromDb = (callback) => {
  const q = "SELECT * FROM machine";

  db.query(q, (error, data) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, data);
    }
  });
};
