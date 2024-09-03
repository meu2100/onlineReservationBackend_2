"use strict";
const { Model } = require("sequelize");
const service = require("./service");
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      order.belongsTo(models.Service, {
        foreignKey: 'serviceId'
      })
    }
  }
  order.init(
    {
      timestamp: DataTypes.DATE,
      staff: DataTypes.INTEGER,
      name: DataTypes.STRING,
      gender: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      email: DataTypes.STRING,
      remark: DataTypes.TEXT,
      serviceId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: "order",
      tableName: "orders",
      underscored: true,
    }
  );
  return order;
};
