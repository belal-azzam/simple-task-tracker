'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tasks', {
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        creator_id:{
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        assigned_user_id:{
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        status_id:{
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        type_id:{
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        task_id:{
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        time_estimate:{
            type: Sequelize.INTEGER,
            allowNull: true,

        },
        actual_time:{
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        createdAt:{
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tasks');
  }
};
