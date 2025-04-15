import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./utils/db.js";
import router from "./routes/user.route.js";
import CompanyRoute from "./routes/company.route.js";
import JobRoute from "./routes/job.route.js";
import ApplicationRoute from "./routes/application.route.js";

dotenv.config({});
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOption));

const PORT = process.env.PORT || 3000;

//api
app.use("/api/v1/user", router);
app.use("/api/v1/company", CompanyRoute);
app.use("/api/v1/job", JobRoute);
app.use("/api/v1/application", ApplicationRoute);

app.listen(PORT, () => connectDb());
