import express from "express";
import cors from "cors";
import UserRouter from "./router/UserRouter.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use(UserRouter)

app.listen(5000, () => console.log("Server is running on port 5000"));
