import express from "express";
const router = express.Router();
import { getUsers } from "../controller/UserController.js";

router.get("/users", getUsers);

export default router;
