import db from "../config/database.js";
import bcrypt from "bcrypt"

export class EmployeeModel {
  getAllEmployees(callback) {
    const q = "SELECT user.*, position.* FROM user INNER JOIN position ON user.positionID = position.positionID";

    db.query(q, (error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  }

  removeEmployeeModel(values, callback) {
    const q =
      "UPDATE user SET `status` = 0 WHERE userid = ?";
    db.query(q, values, (error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });
  }
  
  updateUnamePassword(values, callback) {
    const id = values.userId;
    const newUsername = values.newUsername;
    const newPassword = values.newPassword;
    console.log(id)
    console.log(newPassword)
    console.log(newUsername)


//Without Hashing    
/*  
    const q =
      "UPDATE user SET `username` = ?,`password`=? WHERE userid = ?";
    db.query(q, [newUsername,newPassword,id], (error, data) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, data);
      }
    });*/


    //with Hashing
    bcrypt.hash(newPassword, 10, (hashErr, hashedPassword) => {
      if (hashErr) {
        callback(hashErr, null);
      } else {
        const q = "UPDATE user SET `username` = ?, `password` = ? WHERE userid = ?";
        db.query(q, [newUsername, hashedPassword, id], (error, data) => {
          if (error) {
            callback(error, null);
          } else {
            callback(null, data);
          }
        });
      }
    });
  }
}