import usersAuth from "./model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsersAuth = async (req, res) => {
  try {
    const response = await usersAuth.findAll({
      attributes: ["id", "name", "email"],
    });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};

export const Register = async (req, res) => {
  const { name, email, password, confPassword } = req.body;
  if (password !== confPassword) return res.status(400).json({ msg: "Password dan confirm password tidak cocok" });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await usersAuth.create({ name, email, password: hashPassword });
    res.json({ msg: "register berhasil" });
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req, res) => {
  try {
    const user = await usersAuth.findOne({ where: { email: req.body.email } });
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) return res.status(400).json({ msg: "wrong password" });
    const { id, name, email } = user;
    const accessToken = jwt.sign({ id, name, email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15s" });
    const refreshToken = jwt.sign({ id, name, email }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "1d" });
    await usersAuth.update({ refresh_token: refreshToken }, { where: { id } });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      // secure: true // jika menggunakan https
    });
    res.json({ accessToken });
  } catch (error) {
    res.status(404).json({ msg: "Email tidak ditemukan" });
  }
};

export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);
    const user = await usersAuth.findOne({ where: { refresh_token: refreshToken } });
    if (!user) return res.sendStatus(403);
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
      if (err) return res.sendStatus(403);
      const { id, name, email } = user;
      const accessToken = jwt.sign({ id, name, email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15s" });
      res.json({ accessToken });
    });
  } catch (error) {}
};

export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const user = await usersAuth.findOne({ where: { refresh_token: refreshToken } });
  if (!user) return sendStatus(204);
  await usersAuth.update({ refreshToken: null }, { where: { id: user.id } });
  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};
