'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class certificates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  certificates.init({
    type: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'certificates',
    tableName: 'certificates',
    underscored: true,
  });
  return certificates;
};