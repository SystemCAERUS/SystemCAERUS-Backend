import MapModel from "../models/mapModel.js";

class MapController {
  constructor() {
    this.mapModel = new MapModel();
  }

  getDepartments(req, res) {
    this.mapModel.getDepartments((error, data) => {
      if (error) {
        return res.json(error);
      }
      return res.json(data);
    });
  }

  addDepartment(req, res) {
    const name = req.body.name;
    const desc = req.body.desc;
    const values = [name, desc];

    this.mapModel.addDepartment(values, (error, data) => {
      if (error) {
        console.log(error);
        return res.json(error);
      }
      return res.json("Data Added");
    });
  }

  removeDepartmentController(req, res) {
    const values = req.body.id;

    this.mapModel.removeDepartmentModel(values, (error, data) => {
      if (error) {
        return res.json(error);
      }
      return res.json("Data Updated");
    });
  }

  removeMachineController(req, res) {
    const values = req.body.id;

    this.mapModel.removeMachineModel(values, (error, data) => {
      if (error) {
        return res.json(error);
      }
      return res.json("Data Updated");
    });
  }

  updateDepartmentController(req, res) {
    const { desc, name, selectedID } = req.body;
    const values = [desc, name, selectedID];
    console.log(desc)
    console.log(name)
    console.log(selectedID)

    this.mapModel.updateDepartment(values, (error, data) => {
      if (error) {
        return res.json(error);
      }
      return res.json("Data Updated");
    });
  }
}

export default MapController;
