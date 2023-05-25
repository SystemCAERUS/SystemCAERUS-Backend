// controllers/noticeBoardController.js
import {
  getNotificationsFromDb,
  addNotificationToDb,
  deleteNotificationFromDb,
  updateNotificationInDb,
} from "../models/noticeBoardModel.js";

export const getNotifications = (req, res) => {
  getNotificationsFromDb((error, data) => {
    if (error) {
      return res.json(error);
    }
    return res.json(data);
  });
};

export const addNotification = (req, res) => {
  const values = [
    req.body.notification,
    req.body.value,
    req.body.date,
    req.body.desc,
  ];

  addNotificationToDb(values, (error, data) => {
    if (error) {
      return res.json(error);
    }
    return res.json("Data Added");
  });
};

export const deleteNotification = (req, res) => {
  const noticeId = req.params.id;

  deleteNotificationFromDb(noticeId, (error, data) => {
    if (error) {
      return res.json(error);
    }
    return res.json("Row is deleted");
  });
};

export const updateNotification = (req, res) => {
  const noticeId = req.params.id;
  const values = [
    req.body.notification,
    req.body.value,
    req.body.date,
    req.body.desc,
  ];

  updateNotificationInDb(values, noticeId, (error, data) => {
    if (error) {
      return res.json(error);
    }
    return res.json(data);
  });
};
