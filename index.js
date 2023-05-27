import express from "express";
import cors from "cors";
import noticeBoardRoutes from "./routes/Notice.js";
import repairRoutes from "./routes/RepairPart.js";
import machineRoutes from "./routes/Machine.js";
import issuesRoutes from "./routes/Issue.js";
import plannerRoutes from "./routes/Planner.js";
import employeeRoutes from "./routes/Employee.js";
import departmentRoutes from "./routes/Map.js";

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

// Start the server
app.listen(8800, () => {
  console.log("Backend is started on PORT : 8800");
});

