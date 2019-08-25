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
    return TaskStatus;
};