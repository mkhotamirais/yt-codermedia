import { Op } from "sequelize";
import RoleUsers from "../RoleUsers/model.js";
import RoleProducts from "./model.js";

export const getProducts = async (req, res) => {
  try {
    let response;
    if (req.role === "admin") {
      response = await RoleProducts.findAll({
        attributes: ["uuid", "name", "price"],
        include: [{ model: RoleUsers, attributes: ["name", "email"] }],
      });
    } else {
      response = await RoleProducts.findAll({
        attributes: ["uuid", "name", "price"],
        where: { userId: req.userId },
        include: [{ model: RoleUsers, attributes: ["name", "email"] }],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getProductById = async (req, res) => {
  try {
    const product = await RoleProducts.findOne({ where: { uuid: req.params.id } });
    if (!product) return res.status(404).json({ msg: "Data tidak ditemukan" });
    let response;
    if (req.role === "admin") {
      response = await RoleProducts.findOne({
        attributes: ["uuid", "name", "price"],
        where: { id: product.id },
        include: [{ model: RoleUsers, attributes: ["name", "email"] }],
      });
    } else {
      response = await RoleProducts.findOne({
        attributes: ["uuid", "name", "price"],
        where: { [Op.and]: [{ id: product.id }, { userId: req.userId }] },
        include: [{ model: RoleUsers, attributes: ["name", "email"] }],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createProduct = async (req, res) => {
  const { name, price } = req.body;
  try {
    await RoleProducts.create({ name, price, userId: req.userId });
    res.status(201).json({ msg: "Berhasil menambah produk" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await RoleProducts.findOne({ where: { uuid: req.params.id } });
    if (!product) return res.status(404).json({ msg: "Data tidak ditemukan" });
    const { name, price } = req.body;
    if (req.role === "admin") {
      await RoleProducts.update({ name, price }, { where: { id: product.id } });
    } else {
      if (req.userId !== product.userId) return res.status(403).json({ msg: "Akses terlarang" });
      await RoleProducts.update({ name, price }, { where: { [Op.and]: [{ id: product.id }, { userId: req.userId }] } });
    }
    res.status(200).json({ msg: "Berhasil update produk" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await RoleProducts.findOne({ where: { uuid: req.params.id } });
    if (!product) return res.status(404).json({ msg: "Data tidak ditemukan" });
    if (req.role === "admin") {
      await RoleProducts.destroy({ where: { id: product.id } });
    } else {
      if (req.userId !== product.userId) return res.status(403).json({ msg: "Akses terlarang" });
      await RoleProducts.destroy({ where: { [Op.and]: [{ id: product.id }, { userId: req.userId }] } });
    }
    res.status(200).json({ msg: "Berhasil hapus produk" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
