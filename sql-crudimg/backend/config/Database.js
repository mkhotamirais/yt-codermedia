import { Sequelize } from "sequelize";

const db = new Sequelize("codermedia_crudimg", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
