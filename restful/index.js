import express from "express";
import mongoose from "mongoose";

import route from "./routes/index.js";

const app = express();

mongoose
  .connect("mongodb://mkhotami:mkhotami@127.0.0.1:27017/restful_db?authSource=admin")
  .then(() => console.log("database connected"))
  .catch((error) => console.error(error));

app.use("/products", route);

app.listen(3000, () => console.log(`Server running on port 3000`));
