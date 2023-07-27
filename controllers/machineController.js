import { getAllAvailableMachineFromDb} from "../models/machineModel.js";

export const getAllAvailableMachine = (req, res) => {
  getAllAvailableMachineFromDb((error, data) => {
    if (error) {
      return res.json(error);
    }
    return res.json(data);
  });
};


