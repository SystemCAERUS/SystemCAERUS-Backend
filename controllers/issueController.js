import { getAllAvailableIssuesFromDb} from "../models/issueModel.js";

export const getAllAvailableIssues = (req, res) => {
    getAllAvailableIssuesFromDb((error, data) => {
    if (error) {
      return res.json(error);
    }
    return res.json(data);
  });
};
