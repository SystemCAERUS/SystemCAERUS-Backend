import IssueModel from "../models/issueModel.js";
import db from "../config/database.js";

class IssueController {
  constructor() {
    this.issueModel = new IssueModel();
  }

  getAllAvailableIssues(req, res) {
    this.issueModel.getAllAvailableIssuesFromDb((error, data) => {
      if (error) {
        return res.json(error);
      }
      return res.json(data);
    });
  }

  addIssue(req, res) {
    const { issueTitle, issueDesc, priority, departmentID, machineID } =
      req.body;
    const newIssue = {
      issueTitle,
      issueDesc,
      priority,
      departmentID,
      machineID,
    };

    this.issueModel.addIssueToDb(newIssue, (error, data) => {
      if (error) {
        return res.json(error);
      }
      return res.json(data);
    });
  }

  closeIssueController(req, res) {
    const { finishedWorkers, closingDes, closingRemark, selectedIssueID } = req.body;
    const values = [finishedWorkers, closingDes, closingRemark, selectedIssueID];

    this.issueModel.closeIssueModel(values, (error, data) => {
      if (error) {
        return res.json(error);
      }
      return res.json("Data Updated");
    });
  }
  
}

export default IssueController;
