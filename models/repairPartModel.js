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

//import db from "../config/database.js";

class RepairModel {
  getAllRepairWorksFromDb(callback) {
    const query =
      "SELECT repairparts.*, department.*, machine.* FROM repairparts INNER JOIN department ON repairparts.departmentid = department.id INNER JOIN machine ON repairparts.machineid = machine.machineid;";

    db.query(query, (error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  }

  addRepairWorkToDb(plannedWorkData, callback) {
    const {
      equipmentName,
      desIssue,
      shopName,
      phoneNumber,
      givenDate,
      returnDate,
      departmentID,
      machineID,
    } = plannedWorkData;

    const query =
      "INSERT INTO `repairparts` (`departmentid`, `partname`,`repairnote`,`repairplace`,`repairplacephone`,`givendate`,`returndate`,`machineid`,`status`) VALUES (?, ?,?,?,?,?,?,?,1)";

    const values = [
      departmentID,
      equipmentName,
      desIssue,
      shopName,
      phoneNumber,
      givenDate,
      returnDate,
      machineID,
    ];

    db.query(query, values, (error, data) => {
      if (error) {
        console.log(error);
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  }

  removeRepairWorkToDB(plannedWorkData, callback) {
    const { selectedID } = plannedWorkData;

    const query = "UPDATE `repairparts` SET  status = 0 WHERE repairid = ?";

    const values = [selectedID];

    db.query(query, values, (error, data) => {
      if (error) {
        console.log(error);
        callback(error, null);
      } else {
        console.log(data);
        callback(null, data);
      }
    });
  }

  updateRepairWorkToDB(plannedWorkData, callback) {
    const {
      equipmentName,
      desIssue,
      shopName,
      phoneNumber,
      givenDate,
      returnDate,
      departmentID,
      machineID,
      selectedID,
    } = plannedWorkData;

    const query =
      "UPDATE repairparts SET partname = ?, repairnote = ?, repairplace = ?, repairplacephone = ? ,givendate=? returndate = ?, departmentid = ?, machineid = ?  WHERE repairid = ?";

    const values = [
      equipmentName,
      desIssue,
      shopName,
      phoneNumber,
      givenDate,
      returnDate,
      departmentID,
      machineID,
      selectedID,
    ];

    db.query(query, values, (error, data) => {
      if (error) {
        console.log(error);
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  }
}

export default RepairModel;
