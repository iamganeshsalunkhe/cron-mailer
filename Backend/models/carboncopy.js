'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carboncopy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Carboncopy.init({
    carboncopyId:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    ccEmail: DataTypes.STRING
  }, {
    sequelize,
    tableName:'Carboncopy',
    modelName: 'Carboncopy',
    timestamps:false
  });
  return Carboncopy;
};