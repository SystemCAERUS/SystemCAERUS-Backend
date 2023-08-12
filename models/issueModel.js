import db from "../config/database.js";

class IssueModel {
  getAllAvailableIssuesFromDb(callback) {
    const q =
      "SELECT issues.*, department.*, machine.* FROM issues INNER JOIN department ON issues.departmentID = department.id INNER JOIN machine ON issues.machineID = machine.machineid;";
    db.query(q, (error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  }

  addIssueToDb(newIssue, callback) {
    const { issueTitle, assignee, priority, departmentID, machineID,issueDesc,currentDateTime } =
      newIssue;

    const q = `INSERT INTO issues (des, expEmployee, priority,status,departmentID, machineID,dDes,addTime) VALUES (?, ?, ?, ?, ?, ?,?,?)`;
    const values = [
      issueTitle,
      assignee,
      priority,
      1,
      departmentID,
      machineID,
      issueDesc,
      currentDateTime,
    ];

    db.query(q, values, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, result);
      }
    });
  }

  closeIssueModel(values, callback) {
    const q ="UPDATE issues SET finishedWorkers = ?, closingDes = ?, closingRemark = ?, status = 0,closingTime=? WHERE issueID = ?";

    db.query(q, values, (error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  }

  updateIssueModel(values, callback) {
    const q ="UPDATE issues SET dDes = ?, priority = ?, departmentID = ?, machineID = ?, status=1 WHERE issueID = ?";

    db.query(q, values, (error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  }
}

export default IssueModel;
