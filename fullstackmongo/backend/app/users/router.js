import express from "express";
import { deleteUser, getUserById, getUsers, saveUser, updateUser } from "./controller.js";
const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", saveUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
