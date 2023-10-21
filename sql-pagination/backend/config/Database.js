import { Sequelize } from "sequelize";

const db = new Sequelize("codermedia_pagination", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
