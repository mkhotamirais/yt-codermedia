import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import usersRoute from "./app/users/router.js";

const app = express();

try {
  await mongoose.connect("mongodb://mkhotami:mkhotami@127.0.0.1:27017/codermedia-fullstackmongo?authSource=admin");
  console.log("Authentication success");
} catch (error) {
  console.log(error.message);
}

app.use(cors());
app.use(express.json());
app.use("/users", usersRoute);

app.listen(3000, () => console.log(`Server up and running...`));
