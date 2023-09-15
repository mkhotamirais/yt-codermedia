import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRouter from "./routes/UserRouter.js";

const app = express();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb://mkhotami:mkhotami@127.0.0.1:27017/yt-codermedia?authSource=admin"
  );
  console.log("koneksi berhasil");
}

app.use(cors());
app.use(express.json());
app.use(UserRouter);

app.listen(5000, () => console.log("App is running..."));
