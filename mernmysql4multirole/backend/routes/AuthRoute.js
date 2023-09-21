import express from "express";
import { Login, Me, logout } from "../controllers/Auth.js";
const router = express.Router();

router.get("/me", Me);
router.post("/login", Login);
router.delete("/logout", logout);

export default router;
