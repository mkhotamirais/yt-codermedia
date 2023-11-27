import { DataTypes } from "sequelize";
import db from "../../config/db.js";

const Users = db.define(
  "Users",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Users;

// (async () => {
//   await db.sync();
// })();
