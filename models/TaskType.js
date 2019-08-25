module.exports = (sequalize, type) => {
    var TaskType =  sequalize.define('task_type',{
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
    return TaskType;
};