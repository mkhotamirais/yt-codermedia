import express from "express";
// import db from "./config/db.js";
import cors from "cors";
import fileUpload from "express-fileupload";

import userRouter from "./app/users/router.js";
import productRouter from "./app/products/router.js";

const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(fileUpload());
app.use("/users", userRouter);
app.use("/products", productRouter);

app.get("/", (req, res) => {
  res.send("halo");
});

app.listen(3000, () => console.log(`Server running on port 3000`));
