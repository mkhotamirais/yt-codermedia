import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("halo");
});

router.post("/", (req, res) => {
  res.send("halo post");
});

export default router;
