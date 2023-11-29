import { DataTypes } from "sequelize";
import db from "../../config/db.js";

const usersAuth = db.define(
  "usersAuth",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    refresh_token: DataTypes.TEXT,
  },
  { freezeTableName: true }
);

export default usersAuth;

// (async () => {
//   await db.sync();
// })();
