'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carboncopies', {
      carboncopyId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ccEmail: {
        type: Sequelize.STRING,
        allowNull:true
      },
      emailId:{
        type:Sequelize.INTEGER
      }

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Carboncopies');
  }
};