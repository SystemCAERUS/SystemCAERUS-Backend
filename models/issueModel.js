import db from "../config/database.js";

class IssueModel {
  getAllAvailableIssuesFromDb(callback) {
    const q = "SELECT issues.*, department.*, machine.* FROM issues INNER JOIN department ON issues.departmentID = department.id INNER JOIN machine ON issues.machineID = machine.machineid;";
    db.query(q, (error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  }

  addIssueToDb(newIssue, callback) {
    const { issueTitle, issueDesc, priority, departmentID, machineID } = newIssue;

    const q = `INSERT INTO issues (des, expEmployee, priority,status,departmentID, machineID) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [issueTitle, issueDesc, priority,1 ,departmentID, machineID];

    db.query(q, values, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, result);
      }
    });
  }
}

export default IssueModel;
