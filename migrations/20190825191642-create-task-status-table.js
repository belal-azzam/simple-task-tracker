'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('task_statuses', {
          id:{
              type: Sequelize.INTEGER,
              autoIncrement: true,
              primaryKey: true,
          },
          name:{
              type: Sequelize.STRING,
              allowNull: false,
              unique: true
          },
      })

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('task_statuses');
  }
};
