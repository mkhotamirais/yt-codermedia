import { Sequelize } from "sequelize";

const db = new Sequelize("codermedia_crud", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
