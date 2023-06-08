import db from "../config/database.js";

class NoticeBoardModel {
  getNotifications(callback) {
    const q = "SELECT * FROM notification";
    db.query(q, (error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  }

  addNotification(values, callback) {
    const q =
      "INSERT INTO notification (`notification`, `notificationcol`, `date`, `desc`) VALUES (?, ?, ?, ?)";
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

export default NoticeBoardModel;
