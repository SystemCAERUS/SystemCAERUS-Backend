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
      const q ="INSERT INTO `position` (`positionName`, `positionDesc`,`positionHide`) VALUES (?, ?, 0)";
      db.query(q, values, (error, data) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, data);
        }
      });
    }
  }

export default JobModel;
