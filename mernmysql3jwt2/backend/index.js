import express from "express";
import db from "./config/Database.js";
// import Users from "./model/UserModel.js";
import UserRouter from "./routes/Index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
try {
  await db.authenticate();
  console.log("connect");
  //   await Users.sync();
} catch (error) {
  console.log(error);
}

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(UserRouter);

app.listen(5000, () => console.log(`Server is running at port 5000`));
