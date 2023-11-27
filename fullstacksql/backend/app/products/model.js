import { DataTypes } from "sequelize";
import db from "../../config/db.js";

const Products = db.define(
  "Products",
  {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  { freezeTableName: true }
);

export default Products;

// (async () => {
//   await db.sync();
// })();
