import express from "express";
import { deleteProduct, getProductById, getProducts, saveProduct, updateProduct } from "./controllers.js";
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", saveProduct);
router.delete("/:id", deleteProduct);
router.patch("/:id", updateProduct);

export default router;
