import db from "../config/database.js";

export const getRepairPartsFromDb = (callback) => {
    const q = "SELECT * FROM repairparts";
    //"SELECT Customers.First_Name, Customers.Last_Name, Orders.Amount FROM Customers INNER JOIN Orders ON Customers.ID = Orders.Customer_ID"
    db.query(q, (error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  };