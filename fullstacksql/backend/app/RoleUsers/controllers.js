import argon2 from "argon2";
import RoleUsers from "./model.js";

// auth
export const login = async (req, res) => {
  const user = await RoleUsers.findOne({ where: { email: req.body.email } });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  const match = await argon2.verify(user.password, req.body.password);
  if (!match) return res.status(400).json({ msg: "Password salah" });
  req.session.userId = user.uuid;
  const uuid = user.uuid;
  const name = user.name;
  const email = user.email;
  const role = user.role;
  res.status(200).json({ uuid, name, email, role });
};

export const me = async (req, res) => {
  if (!req.session.userId) return res.status(401).json({ msg: "Mohon login ke akun anda" });
  const user = await RoleUsers.findOne({
    attributes: ["uuid", "name", "email", "role"],
    where: { uuid: req.session.userId },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  res.status(200).json(user);
};

export const logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(400).json({ msg: "tidak dapat logout" });
    res.status(200).json({ msg: "Anda telah logout" });
  });
};

// user controller

export const getUsers = async (req, res) => {
  try {
    const response = await RoleUsers.findAll({ attributes: ["uuid", "name", "email", "role"] });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getUserById = async (req, res) => {
  try {
    const response = await RoleUsers.findOne({
      where: { uuid: req.params.id },
      attributes: ["uuid", "name", "email", "role"],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const createUser = async (req, res) => {
  const { name, email, password, confPassword, role } = req.body;
  const users = await RoleUsers.findAll();
  const emails = users.map((user) => user.email);
  if (emails.indexOf(email) > -1) return res.status(409).json({ msg: "email sudah terdaftar" });
  if (password !== confPassword) return res.status(400).json({ msg: "Password dan confirm password tidak cocok" });
  const hashPassword = await argon2.hash(password);
  try {
    await RoleUsers.create({ name, email, password: hashPassword, role });
    res.status(201).json({ msg: "Register berhasil" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
export const updateUser = async (req, res) => {
  const user = await RoleUsers.findOne({ where: { uuid: req.params.id } });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  const { name, email, password, confPassword, role } = req.body;
  if (password !== confPassword) return res.status(400).json({ msg: "Password dan confirm password tidak cocok" });
  let hashPassword;
  password === "" || password === null ? (hashPassword = user.password) : (hashPassword = await argon2.hash(password));
  try {
    await RoleUsers.update({ name, email, password: hashPassword, role }, { where: { id: user.id } });
    res.status(200).json({ msg: "Update user berhasil" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
export const deleteUser = async (req, res) => {
  const user = await RoleUsers.findOne({ where: { uuid: req.params.id } });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  try {
    await RoleUsers.destroy({ where: { id: user.id } });
    res.status(200).json({ msg: "Hapus user berhasil" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
