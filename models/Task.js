module.exports = (sequalize, type) => {
    return sequalize.define('task',{
        id:{
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title:{
            type: type.STRING,
            allowNull: false,
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
        },
        actual_time:{
            type: type.INTEGER,
            allowNull: true,
        },
    });
};