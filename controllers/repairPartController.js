import {
    getRepairPartsFromDb,
  } from "../models/repairPartModel.js";
  
  export const getRepairParts = (req, res) => {
    getRepairPartsFromDb((error, data) => {
      if (error) {
        return res.json(error);
      }
      return res.json(data);
    });
  };