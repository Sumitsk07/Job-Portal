import express, { application } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectionToDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import compnayRoute from "./routes/compnay.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config({});

const app = express();

app.get("/home", (req, res) => {
  return res.status(200).json({
    message: "I am coming from backend",
    success: true,
  });
});

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOption = {
  origin: [process.env.FRONTEND_URL],
  credentials: true,
};

app.use(cors(corsOption));
const PORT = process.env.PORT || 3000;

// Api
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", compnayRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.listen(PORT, () => {
  connectionToDB();
  console.log(`Server running at port ${PORT}`);
});
