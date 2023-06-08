import db from "../config/database.js";

export const getRepairPartsFromDb = (callback) => {
  const q =
    "SELECT repairparts.*, department.*, machine.* FROM repairparts INNER JOIN department ON repairparts.departmentid = department.id INNER JOIN machine ON repairparts.machineid = machine.machineid;";

  db.query(q, (error, data) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, data);
    }
  });
};
