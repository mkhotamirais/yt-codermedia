import { Sequelize } from "sequelize";

const db = new Sequelize("codermedia_fullstacksql", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// try {
//   await db.authenticate();
//   console.log("Connection has been established successfully.");
//   await db.sync();
// } catch (error) {
//   console.error("Unable to connect to the database:", error);
// }

export default db;
