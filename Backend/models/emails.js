'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class emails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  emails.init({
    emailId:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    senderEmail: DataTypes.STRING,
    recipientsEmail: DataTypes.STRING,
    ccEmail: DataTypes.STRING,
    subject: DataTypes.STRING,
    body: DataTypes.TEXT,
    scheduledTime: DataTypes.DATE,
    status:{
      type:DataTypes.ENUM('Scheduled','Sent','Failed')
    }
  }, {
    sequelize,
    tableName:'Emails',
    modelName: 'Emails',
    timestamps:false
  });
  return emails;
};