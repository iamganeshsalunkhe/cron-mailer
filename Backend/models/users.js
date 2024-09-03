'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.emails,{foreignKey:'userId'})
    }
  }
  Users.init({  
    userId:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    defaultEmail: DataTypes.STRING
  }, {
    sequelize,
    tableName:'Users',
    modelName: 'Users',
  });
  return Users;
};