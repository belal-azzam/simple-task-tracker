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
TaskStatus.hasMany(Task, {foreignKey: "status_id"});
TaskType.hasMany(Task, {foreignKey: 'type_id'});
Task.belongsTo(User, {foreignKey: 'assigned_user_id', as: 'task_assigned_user'});
Task.belongsTo(User, {foreignKey: 'creator_id', as: 'task_creator'});
Task.belongsTo(Task, {foreignKey: 'task_id'});
sequelize.sync({force: false}).then(() =>{
   console.log('database and tables created');
});

module.exports = {
    User,
    TaskType,
    TaskStatus,
    Task
};
