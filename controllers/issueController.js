import IssueModel from "../models/issueModel.js";

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
    const currentDateTime = new Date();
    const { issueTitle, issueDesc, priority, departmentID, machineID,assignee } =
      req.body;
    const newIssue = {
      issueTitle,
      issueDesc,
      priority,
      departmentID,
      machineID,
      assignee,
      currentDateTime,
    };
    console.log(newIssue.assignee)

    this.issueModel.addIssueToDb(newIssue, (error, data) => {
      if (error) {
        return res.json(error);
      }
      return res.json(data);
    });
  }

  closeIssueController(req, res) {
    const currentDateTime = new Date();
    const { finishedWorkers, closingDes, closingRemark, selectedIssueID } = req.body;
    const values = [finishedWorkers, closingDes, closingRemark, currentDateTime,selectedIssueID];

    this.issueModel.closeIssueModel(values, (error, data) => {
      if (error) {
        return res.json(error);
      }
      return res.json("Data Updated");
    });
  }
  
  updateIssueController(req, res) {
    const issueDes = req.body.issueDes;
    const priority = req.body.priority;
    const dep = req.body.dep;
    const  machine = req.body.machine;
    const issueID  = req.body.issueID;

    const values = [ issueDes, priority, dep,machine,issueID];

    this.issueModel.updateIssueModel(values, (error, data) => {
      if (error) {
        return res.json(error);
      }
      return res.json("Data Updated");
    });
  }
}

export default IssueController;
