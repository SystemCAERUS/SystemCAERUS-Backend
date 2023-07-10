import IssueModel from "../models/issueModel.js"

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
    const { issueTitle, issueDesc, priority, departmentID, machineID } = req.body;
    const newIssue = { issueTitle, issueDesc, priority, departmentID, machineID };

    this.issueModel.addIssueToDb(newIssue, (error, data) => {
      if (error) {
        return res.json(error);
      }
      return res.json(data);
    });
  }
}

export default IssueController;
