'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recipients.init({
    recipientId:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    recipient: DataTypes.STRING
  }, {
    sequelize,
    tableName:'Recipients',
    modelName: 'Recipients',
    timestamps:false
  });
  return Recipients;
};