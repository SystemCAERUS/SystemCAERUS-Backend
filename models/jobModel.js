import db from "../config/database.js";

class JobModel {
  getPositions(callback) {
    const q = "SELECT * FROM position";
    db.query(q, (error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  }

  addPosition(values, callback) {
    const q =
      "INSERT INTO `position` (`positionName`, `positionDesc`,`positionHide`) VALUES (?, ?, 1)";
    db.query(q, values, (error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  }

  hideJobPositionModel(values, callback) {
    console.log(values);
    const id = values["selectedJobID"];
    const q = "UPDATE position SET positionHide = 0 WHERE positionID = ?";

    db.query(q, id, (error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  }

  UpdateJobPositionModel(values, callback) {
    const q =
      "UPDATE position SET positionName = ? ,positionDesc=? WHERE positionID = ?";

      const name = values['name']
      const desc = values['desc']
      const id = values['selectedID']

    db.query(q, [name,desc,id], (error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  }
}

export default JobModel;
