
module.exports = (sequalize, type) => {
    return sequalize.define('user',{
        id:{
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username:{
            type: type.STRING,
            allowNull: false,
        },
        email:{
            type: type.STRING,
            allowNull: false,
            validate:{
                isEmail: true
            }
        },
        password: {
            type: type.STRING,
            allowNull: false,
        },
        photo:{
            type: type.STRING,
            allowNull: true,
        },
    });
};