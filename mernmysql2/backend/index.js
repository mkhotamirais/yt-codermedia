import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import ProductRoutes from "./routes/ProductRoutes.js";

const app = express();

app.use(express.static("public"));
app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(ProductRoutes);

app.listen(5000, () => console.log("Server is running..."));
