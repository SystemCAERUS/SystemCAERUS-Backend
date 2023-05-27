import express from "express";
import cors from "cors";
import noticeBoardRoutes from "./routes/noticeRoute.js";
import repairRoutes from "./routes/repairPartsRoute.js";
import machineRoutes from "./routes/machineRoute.js";
import issuesRoutes from "./routes/issueRoute.js";
import plannerRoutes from "./routes/plannerRoute.js";
import employeeRoutes from "./routes/employeeRoute.js";
import departmentRoutes from "./routes/departmentRoute.js";

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/hr", noticeBoardRoutes);
app.use("/repairs",repairRoutes)
app.use("/planner",plannerRoutes)
app.use("/issues",issuesRoutes)
app.use("/employees",employeeRoutes)
app.use("/departments",departmentRoutes)
app.use("/machines",machineRoutes)

// Start the server on Port 8800
app.listen(8800, () => {
  console.log("Backend is started on PORT : 8800");
});

