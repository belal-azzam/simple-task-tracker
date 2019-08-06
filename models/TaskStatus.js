module.exports = (sequalize, type) => {
    return sequalize.define('task_status',{
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
};