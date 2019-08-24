
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
            validate:{
                notEmpty: {msg: 'Required'}
            },
            unique:{
                msg: 'Username already in use!'
            }
        },
        email:{
            type: type.STRING,
            allowNull: false,
            validate:{
                isEmail: {msg: 'Please enter a valid mail'},
                notEmpty: {msg: 'Required'}
            },
            unique:{
              msg: 'Email address already in use!'
            }
        },
        password: {
            type: type.STRING,
            allowNull: false,
            notEmpty: {msg: 'Required'}
        },
        photo:{
            type: type.STRING,
            allowNull: true,
        },

    },
        {
            indexes: [
                {
                    unique: true,
                    fields: ['email']
                },
                {
                    unique: true,
                    fields: ['username']
                },
            ]
        });
};