import db from "../config/database.js";

class MapModel {
  getDepartments(callback) {
    const q = "SELECT * FROM department";
    db.query(q, (error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  }

  addDepartment(values, callback) {
    const q =
      "INSERT INTO department (`departmentname`, `desc`,`hide`) VALUES (?, ?, 0)";
    db.query(q, values, (error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  }

  deleteNotification(noticeId, callback) {
    const q = "DELETE FROM notification WHERE id = ?";
    db.query(q, [noticeId], (error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  }

  updateNotification(values, noticeId, callback) {
    const q =
      "UPDATE notification SET `notification` = ?, `notificationcol` = ?, `date` = ?, `desc` = ? WHERE id = ?";
    db.query(q, [...values, noticeId], (error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  }
}

export default MapModel;
