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

app.post('/login', (req, res) => {
  let  username = req.body.username;
  let password = req.body.password;

  const query = `SELECT * FROM user WHERE username = ? AND password = ?`;

  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'An error occurred' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Login successful
    return res.status(200).json({ message: 'Login successful' });
  });
});

// Start the server on Port 8800
app.listen(8800, () => {
  console.log("SystemCAERUS Backend is started on PORT : 8800");
});
