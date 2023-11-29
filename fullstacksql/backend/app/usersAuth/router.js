import express from "express";
import { Login, Logout, Register, getUsersAuth, refreshToken } from "./controllers.js";
import { verifyToken } from "../../middleware/verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, getUsersAuth);
router.post("/register", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

export default router;
