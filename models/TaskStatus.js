module.exports = (sequalize, type) => {
    var TaskStatus =  sequalize.define('task_status',{
        id:{
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name:{
            type: type.STRING,
            allowNull: false,
        },

    });
    TaskStatus.associate = models => {
        TaskStatus.hasMany(models.Task, {foreignKey: "status_id"});
    }
    return TaskStatus;
};