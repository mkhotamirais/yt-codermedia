import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import ProductRouter from "./routes/ProductRouter.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));

app.use(ProductRouter);

app.listen(5000, () => console.log("Server is running on port 5000"));
