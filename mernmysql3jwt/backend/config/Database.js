import { Sequelize } from "sequelize";

const db = new Sequelize("yt_codermedia3jwt", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
