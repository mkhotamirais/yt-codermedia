import Users from "./model.js";
import log from "console";

export const getUsers = async (req, res) => {
  try {
    const response = await Users.findAll();
    res.status(200).json(response);
  } catch (error) {
    log(error.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const response = await Users.findOne({ where: { id: req.params.id } });
    res.status(200).json(response);
  } catch (error) {
    log(error.message);
  }
};

export const createUser = async (req, res) => {
  try {
    await Users.create(req.body);
    res.status(201).json({ msg: "user created" });
  } catch (error) {
    log(error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await Users.destroy({ where: { id: req.params.id } });
    res.status(200).json({ msg: "user deleted" });
  } catch (error) {
    log(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    await Users.update(req.body, { where: { id: req.params.id } });
    res.status(200).json({ msg: "user updated" });
  } catch (error) {
    log(error.message);
  }
};
