const dbConfig = require('../config/database');
const Sequelize = require('sequelize');
const UserModel = require('../models/User');
const TaskModel = require('../models/Task');
const TaskTypeModel = require('../models/TaskType');
const TaskStatusModel = require('../models/TaskStatus');
const sequelize = new Sequelize(dbConfig.db_name, dbConfig.db_user, dbConfig.db_password, {
    host: dbConfig.db_host,
    dialect: 'mariadb'
});
const User = UserModel(sequelize, Sequelize);
const TaskType = TaskTypeModel(sequelize, Sequelize);
const TaskStatus = TaskStatusModel(sequelize, Sequelize);
const Task = TaskModel(sequelize, Sequelize);
sequelize.sync().then(() =>{
   console.log('database and tables created');
});

module.exports = {
    User
};
