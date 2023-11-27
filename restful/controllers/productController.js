import Product from "../models/Product.js";

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const saveProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.json({ message: error.message });
  }
};
