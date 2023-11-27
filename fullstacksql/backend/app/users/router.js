import express from "express";
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "./controllers.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

export default router;
