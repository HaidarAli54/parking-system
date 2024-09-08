'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Parking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Parking.belongsTo(models.User, { foreignKey: "id_user" });
    }
  }
  Parking.init({
    id_user: DataTypes.STRING,
    duration: DataTypes.STRING,
    total: DataTypes.STRING,
    noPolisi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Parking',
  });
  return Parking;
};