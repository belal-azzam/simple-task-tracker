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
var db = {};
db.User = UserModel(sequelize, Sequelize);
db.TaskType = TaskTypeModel(sequelize, Sequelize);
db.TaskStatus = TaskStatusModel(sequelize, Sequelize);
db.Task = TaskModel(sequelize, Sequelize);
sequelize.sync({force: false}).then(() =>{
    Object.keys(db).forEach(function (model) {
        if(db[model].hasOwnProperty('associate')){
            db[model].associate(db);
        }
    })
    
});

module.exports = db;
