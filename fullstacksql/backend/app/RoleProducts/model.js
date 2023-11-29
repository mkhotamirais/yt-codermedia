import { DataTypes } from "sequelize";
import db from "../../config/db.js";
import RoleUsers from "../RoleUsers/model.js";

const RoleProducts = db.define(
  "RoleProducts",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  { freezeTableName: true }
);

RoleUsers.hasMany(RoleProducts);
RoleProducts.belongsTo(RoleUsers, { foreignKey: "userId" });

export default RoleProducts;

(async () => {
  await db.sync();
})();
