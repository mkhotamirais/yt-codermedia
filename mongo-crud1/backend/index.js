import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRouter from "./routers/UserRouter.js";

const app = express();

mongoose.connect(
  "mongodb://mkhotami:mkhotami@127.0.0.1:27017/codermedia-crud1?authSource=admin"
);
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Database connected"));

app.use(cors());
app.use(express.json());

app.use(UserRouter);

app.listen(5000, () => console.log("Server is running on port 5000"));
