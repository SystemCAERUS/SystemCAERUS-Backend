import db from "../config/database.js";

class PlannerModel {
  getAllPlannedWorksFromDb(callback) {
    const query = `
      SELECT planner.*, department.*, machine.*
      FROM planner
      INNER JOIN department ON planner.departmentID = department.id
      INNER JOIN machine ON planner.machineID = machine.machineid;
    `;

    db.query(query, (error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  }

  addPlannedWorkToDb(plannedWorkData, callback) {
    const { desIssue, equipmentName, departmentid, machineID, plannedDate } =
      plannedWorkData;

    const query =
      "INSERT INTO `planner` (`msg`, `machineID`,`departmentID`,`status`,`date`,`todoDes`) VALUES (?, ?,?, 1,?,?)";

    const values = [
      equipmentName,
      machineID,
      departmentid,
      plannedDate,
      desIssue,
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

  removePlannedWorkToDB(plannedWorkData, callback) {
    const date = new Date();
    const { selectedJobID, closingRemark, employees } = plannedWorkData;
    console.log(closingRemark);
    console.log(employees);
    console.log(date);
    console.log(selectedJobID);

    const query =
      "UPDATE planner SET finishEmployees = ?, closingRemarkPlanned = ?, closePlannedDate = ?, status = 0 WHERE todoID = ?";

    const values = [employees, closingRemark, date, selectedJobID];

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

  updatePlannedWorkToDB(plannedWorkData, callback) {
    const { selectedID, description, title, departmentID, machineID, date } =
      plannedWorkData;

    const query =
      "UPDATE planner SET msg = ?, machineID = ?, departmentID = ?, date = ? ,todoDes=? WHERE todoID = ?";

    const values = [
      title,
      machineID,
      departmentID,
      date,
      description,
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

export default PlannerModel;
