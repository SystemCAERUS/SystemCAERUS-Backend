import NoticeBoardModel from "../models/noticeBoardModel.js";

class NoticeBoardController {
  constructor() {
    this.noticeBoardModel = new NoticeBoardModel();
  }

  getNotifications(req, res) {
    this.noticeBoardModel.getNotifications((error, data) => {
      if (error) {
        return res.json(error);
      }
      return res.json(data);
    });
  }

  addNotification(req, res) {
    const { notification, value, date, desc } = req.body;
    const values = [notification, value, date, desc];

    this.noticeBoardModel.addNotification(values, (error, data) => {
      if (error) {
        console.log(error);
        return res.json(error);
      }
      return res.json("Data Added");
    });
  }

  deleteNotification(req, res) {
    const noticeId = req.params.id;

    this.noticeBoardModel.deleteNotification(noticeId, (error, data) => {
      if (error) {
        return res.json(error);
      }
      return res.json("Row is deleted");
    });
  }

  updateNotification(req, res) {
    const noticeId = req.params.id;
    const { notification, value, date, desc } = req.body;
    const values = [notification, value, date, desc];

    this.noticeBoardModel.updateNotification(
      values,
      noticeId,
      (error, data) => {
        if (error) {
          return res.json(error);
        }
        return res.json("Data Updated");
      }
    );
  }
}

export default NoticeBoardController;
