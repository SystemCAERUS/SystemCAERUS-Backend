import db from "../config/database.js";

export const getRepairPartsFromDb = (callback) => {
  const q =
    "SELECT repairparts.*, department.* FROM repairparts INNER JOIN department ON repairparts.departmentid = department.id";

  db.query(q, (error, data) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, data);
    }
  });
};
