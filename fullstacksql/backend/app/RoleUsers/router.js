import express from "express";
import { createUser, deleteUser, getUserById, getUsers, login, logout, me, updateUser } from "./controllers.js";
import { adminOnly, verifyRoleUsers } from "../../middleware/verifyRoleUsers.js";

const router = express.Router();

// auth
router.get("/me", me);
router.post("/login", login);
router.delete("/logout", logout);
// user controller
router.get("/", verifyRoleUsers, adminOnly, getUsers);
router.get("/:id", verifyRoleUsers, adminOnly, getUserById);
router.post("/", verifyRoleUsers, adminOnly, createUser);
router.patch("/:id", verifyRoleUsers, adminOnly, updateUser);
router.delete("/:id", verifyRoleUsers, adminOnly, deleteUser);

export default router;
