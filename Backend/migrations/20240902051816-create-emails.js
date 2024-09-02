'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('emails', {
      emailId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      senderEmail: {
        type: Sequelize.STRING
      },
      recipientsEmail: {
        type: Sequelize.STRING
      },
      ccEmail: {
        type: Sequelize.STRING
      },
      subject: {
        type: Sequelize.STRING
      },
      body: {
        type: Sequelize.TEXT
      },
      scheduledTime: {
        type: Sequelize.DATE
      },
      status:{
        type:Sequelize.ENUM('Scheduled','Sent','Failed')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('emails');
  }
};