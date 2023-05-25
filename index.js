import express from "express";
import bodyParser from "body-parser";
import noticeBoardRoutes from "./routes/Notice.js";

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/notice-board", noticeBoardRoutes);

// Start the server
app.listen(8800, () => {
  console.log("Backend is connected.");
});
