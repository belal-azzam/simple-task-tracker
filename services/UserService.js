const {User} = require('../database/sequalize');
const jwtConfig = require('../config/jwt');
const bcrypt = require('bcryptjs');
const express = require('express');
var path = require('path');
var multer  = require('multer');
const accepted_extensions = ['jpg', 'png', 'gif'];
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,  'uploads/users')
    },
    filename: function (req, file, cb) {

        cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
    }
});
var upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024
    },
    fileFilter: (request, file, cb) => {
        if (accepted_extensions.some(ext => file.originalname.endsWith("." + ext))) {
            return cb(null, true);
        }
        return cb(new Error('Only ' + accepted_extensions.join(", ") + ' files are allowed!'));

    }
}).single('photo');

const jwt = require("jsonwebtoken");

function index(req, res) {
    User.findAll().then(users => {
        res.status(200).json(users);
    })
}

function register(request, response) {
    upload(request, response, function (error) {
        if(error)
        {
            response.status(400).json({errors: [{path: 'photo', message: error.message}]});
        }
        let photo = null;
        let {email, password, username} = request.body;
        if(request.file.fieldname == 'photo')
        {
            photo = request.file.filename;
        }
        if(!email || !password || !username)
        {
            response.json({success: false, message: 'Please enter username,email and password'})
        }else{
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, (err,  hash ) => {
                    password = hash;
                    User.create({
                        username,
                        email,
                        password,
                        photo
                    }).then(user => {
                        const payload  = {
                            id: user.id,
                            username: user.username,
                            email: user.email,
                            photo:  user.photo,
                        };
                        jwt.sign(
                            payload,
                            jwtConfig.secret,
                            {
                                expiresIn: 31556926 // 1 year in seconds
                            },
                            (err, token) => {
                                response.status(200).json({token: "Bearer "+ token});
                            }
                        )

                        // response.status(200).json({message: 'User created successfully'});
                    }).catch(error => {
                        if(error.errors)
                        {
                            response.status(400).json({errors: error.errors});
                        }else{
                            response.status(500).json({message: 'registration Failed'});
                        }

                    })
                })
            })
        }
    })

}
function login(req, res) {
    let {email, password} = req.body;
    User.findOne({where: {email: email}}).then(user => {
        if(!user)
        {
            res.status(404).json({message: 'Incorrect email or password'});
        }
        bcrypt.compare(password, user.password).then(isMatch => {
            if(!isMatch)
            {
                res.status(404).json({message: 'Incorrect email or password'});
            }
            const payload  = {
                id: user.id,
                username: user.username,
                email: user.email,
                photo:  user.photo,
            };

            jwt.sign(
                payload,
                jwtConfig.secret,
                {
                    expiresIn: 31556926 // 1 year in seconds
                },
                (err, token) => {
                    res.status(200).json({token: "Bearer "+ token});
                }
            )
        })
    })
}

module.exports = {index, login: login, register: register};