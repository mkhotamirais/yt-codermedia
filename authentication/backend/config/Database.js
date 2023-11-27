import { Sequelize } from "sequelize";

const db = new Sequelize("codermedia_auth_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
