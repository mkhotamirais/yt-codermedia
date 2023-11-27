import Products from "./model.js";
import path from "path";
import fs from "fs";
import { log } from "console";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getProducts = async (req, res) => {
  try {
    const response = await Products.findAll();
    res.json(response);
  } catch (error) {
    log(error.message);
  }
};

export const getProductById = async (req, res) => {
  try {
    const response = await Products.findOne({ where: { id: req.params.id } });
    res.json(response);
  } catch (error) {
    log(error.message);
  }
};

export const saveProduct = async (req, res) => {
  if (req.files === null) return res.status(400).json({ msg: "No file uploaded" });
  const imageData = req.files.image;
  const { name, size, md5 } = imageData;
  const ext = path.extname(name);
  const image = md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${image}`;
  const allowedType = [".jpg", ".jpeg", ".png"];

  if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid image" });
  if (size > 2000000) return res.status(422).json({ msg: "image must be less than 5 MB" });

  const imgTitle = req.body.name;
  imageData.mv(`./public/images/${image}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      const response = await Products.create({ name: imgTitle, image, url });
      res.status(201).json({ msg: "Product created successfuly" });
    } catch (error) {
      log(error.message);
    }
  });
};

export const deleteProduct = async (req, res) => {
  const product = await Products.findOne({ where: { id: req.params.id } });
  if (!product) return res.status(404).json({ msg: "no data found" });
  try {
    fs.unlinkSync(path.join(__dirname, "../../public/images", `${product.image}`));
    await Products.destroy({ where: { id: req.params.id } });
    res.status(200).json({ msg: "Product is deleted" });
  } catch (error) {
    log(error.message);
  }
};

export const updateProduct = async (req, res) => {
  const product = await Products.findOne({ where: { id: req.params.id } });
  if (!product) return res.status(404).json({ msg: "no data found" });
  let image = "";
  if (req.files === null) {
    image = product.image;
  } else {
    const imageData = req.files.image;
    const { name, size, md5 } = imageData;
    const ext = path.extname(name);
    image = md5 + ext;
    const allowedType = [".jpg", ".jpeg", ".png"];

    if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid image" });
    if (size > 2000000) return res.status(422).json({ msg: "image must be less than 5 MB" });

    fs.unlinkSync(path.join(__dirname, "../../public/images", `${product.image}`));
    imageData.mv(`./public/images/${image}`, async (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const imgTitle = req.body.name;
  const url = `${req.protocol}://${req.get("host")}/images/${image}`;
  try {
    const response = await Products.update({ name: imgTitle, image, url }, { where: { id: req.params.id } });
    res.status(201).json({ msg: "Product updated successfuly" });
  } catch (error) {
    log(error.message);
  }
};
