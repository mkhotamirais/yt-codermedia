import { Sequelize } from "sequelize";

const db = new Sequelize("yt_codermedia1", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
