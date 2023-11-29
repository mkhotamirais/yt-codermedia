import express from "express";
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from "./controllers.js";
import { verifyRoleUsers } from "../../middleware/verifyRoleUsers.js";
// import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from "../controllers/Products.js";
// import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

// router.get("/products", verifyUser, getProducts);
// router.get("/products/:id", verifyUser, getProductById);
// router.post("/products", verifyUser, createProduct);
// router.patch("/products/:id", verifyUser, updateProduct);
// router.delete("/products/:id", verifyUser, deleteProduct);
router.get("/", verifyRoleUsers, getProducts);
router.get("/:id", verifyRoleUsers, getProductById);
router.post("/", verifyRoleUsers, createProduct);
router.patch("/:id", verifyRoleUsers, updateProduct);
router.delete("/:id", verifyRoleUsers, deleteProduct);

export default router;
