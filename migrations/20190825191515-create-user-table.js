'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users',
        {
            id:{
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            username:{
                type: Sequelize.STRING,
                allowNull: false,
                unique:{
                    msg: 'Username already in use!'
                }
            },
            email:{
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
                notEmpty: {msg: 'Required'}
            },
            photo:{
                type: Sequelize.STRING,
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
    return queryInterface.dropTable('users');

  }
};
