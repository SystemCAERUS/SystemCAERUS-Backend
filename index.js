import express from "express";
import cors from "cors";
import noticeBoardRoutes from "./routes/Notice.js";

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/hr", noticeBoardRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Error 404");
});

// Start the server
app.listen(8800, () => {
  console.log("Backend is connected.");
});

/*
import Express from "express";
import mysql from "mysql";
import cors from "cors";

const app = Express();
app.use(Express.json());
app.use(cors());

//use to establish database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "janith1999",
  database: "caerus",
});



app.get("/hr", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const q = "SELECT * FROM notification";
  db.query(q, (error, data) => {
    if (error) {
      return res.json(error);
    }
    return res.json(data);
  });
});

app.post("/hr", (req, res) => {
  const values = [req.body.notification, req.body.value, req.body.date, req.body.desc,];
  const q =
    "INSERT INTO notification (`notification`,`notificationcol`,`date`,`desc`) VALUES (?, ?, ?,?)";

  db.query(q, values, (error, data) => {
    if (error) {
      return res.json(error);
    }
    return res.json("Data Added");
  });
});

app.delete("/hr/:id", (req, res) => {
    const noticeId = req.params.id;
    const q = "DELETE FROM notification WHERE id = ? ";
  
    db.query(q, [noticeId], (err, data) => {
      if (err) return res.send(err);
      return res.json("Row is deleted");
    });
  });

  app.put("/hr/update/:id", (req, res) => {
    const noticeId = req.params.id;
    const q = "UPDATE notification SET `notification`= ?, `notificationcol`= ?, `date`= ?, `desc`= ? WHERE id = ?";
  
    const values = [
      req.body.notification, req.body.value, req.body.date, req.body.desc,
    ];
  
    db.query(q, [...values,noticeId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });
  


app.listen(8800, () => {
  console.log("Backend is connected.");
});
*/