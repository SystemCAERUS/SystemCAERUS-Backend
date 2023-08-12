import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import multer from 'multer';
import path from 'path';
import db from "./config/database.js";
import noticeBoardRoutes from "./routes/noticeRoute.js";
import repairRoutes from "./routes/repairPartsRoute.js";
import machineRoutes from "./routes/machineRoute.js";
import issuesRoutes from "./routes/issueRoute.js";
import plannerRoutes from "./routes/plannerRoute.js";
import employeeRoutes from "./routes/employeeRoute.js";
import departmentRoutes from "./routes/departmentRoute.js";
import positionRoutes from "./routes/jobRoutes.js"
import bcrypt from "bcrypt"

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Images folder can access via IP or Localhost
app.use(express.static('Images'))

// Routes
app.use("/hr", noticeBoardRoutes);
app.use("/repairs",repairRoutes)
app.use("/planner",plannerRoutes)
app.use("/issues",issuesRoutes)
app.use("/employees",employeeRoutes)
app.use("/departments",departmentRoutes)
app.use("/machines",machineRoutes)
app.use("/positions",positionRoutes)

//this middleware deal with the auth of the application   without hashing
/*
app.post('/login', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  const query = `SELECT userid FROM user WHERE username = ? AND password = ?`;

  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'An error occurred' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Login successful
    const userId = results[0].userid; // Assuming the user ID column in your database table is named "id"
    return res.status(200).json({ message: 'Login successful', userId: userId });
  });
});*/

//const bcrypt = require('bcrypt');

app.post('/login', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  console.log(username)
  console.log(password)

  const query = `SELECT userid,phone,username,password FROM user WHERE username = ?`;

  db.query(query, [username], async (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'An error occurred' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const hashedPasswordFromDB = results[0].password;
    try {
      const match = await bcrypt.compare(password, hashedPasswordFromDB);
      if (!match) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }

      // Login successful
      const userId = results[0].userid;
      const phone = results[0].phone;
      const username=results[0].username;
      return res.status(200).json({ message: 'Login successful', userId: userId,phone:phone ,username:username});
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'An error occurred' });
    }
  });
});

// Start the server on Port 8800
app.listen(8800, () => {
  console.log("SystemCAERUS Backend is started on PORT : 8800");
});
