import express from "express";
import cors from "cors";
import noticeBoardRoutes from "./routes/Notice.js";
import repairRoutes from "./routes/RepairPart.js"

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/hr", noticeBoardRoutes);
app.use("/repair",repairRoutes)

// Start the server
app.listen(8800, () => {
  console.log("Backend is connected.");
});

