import { Sequelize } from "sequelize";

const db = new Sequelize("codermedia_jwtauth", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
