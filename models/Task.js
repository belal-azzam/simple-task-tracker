module.exports = (sequalize, type) => {
    var Task =  sequalize.define('task',{
        id:{
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title:{
            type: type.STRING,
            allowNull: false,
            validate: {
                notEmpty: {msg: 'Required'}
            }
        },
        description: {
            type: type.TEXT,
            allowNull: false,
        },

        creator_id:{
            type: type.INTEGER,
            allowNull: false,
        },
        assigned_user_id:{
            type: type.INTEGER,
            allowNull: true,
        },
        status_id:{
            type: type.INTEGER,
            allowNull: false,
        },
        type_id:{
            type: type.INTEGER,
            allowNull: false,
        },
        task_id:{
            type: type.INTEGER,
            allowNull: true,
        },
        time_estimate:{
            type: type.INTEGER,
            allowNull: true,
            validate: {
                isInt: {msg: 'Must be a number'}
            }
        },
        actual_time:{
            type: type.INTEGER,
            allowNull: true,
            validate: {
                isInt: {msg: 'Must be a number'}
            }
        },

    });

    Task.associate = models => {
        Task.belongsTo(models.User, {foreignKey: 'assigned_user_id', as: 'task_assigned_user'});
        Task.belongsTo(models.User, {foreignKey: 'creator_id', as: 'task_creator'});
        Task.belongsTo(models.Task, {foreignKey: 'task_id'});
    }

    return Task;
};