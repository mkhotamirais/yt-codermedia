import express from "express";
import db from "./config/Database.js";
// import Users from "./models/UserModel.js";
import UserRouter from "./router/UserRouter.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

try {
  await db.authenticate();
  console.log("Database connected");
  //   await Users.sync();
} catch (err) {
  console.error(err);
}

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(cookieParser());
app.use(express.json());
app.use(UserRouter);

app.listen(5000, () => console.log("Server is running on port 5000"));
