import { Sequelize } from "sequelize";

const db = new Sequelize("yt_codermedia4multirole", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
