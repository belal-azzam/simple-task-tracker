const {User} = require('../database/sequalize');
const express = require('express');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

function index(req, res) {
    User.findAll().then(users => {
        res.status(200).json(users);
    })
}

function register(request, response) {
    console.log(request.body);
    // console.log(request.file);

    let {email, password, username, photo} = request.body;
    if(!email || !password || !username)
    {
        response.json({success: false, message: 'Please enter username,email and password'})
    }else{

        User.create({
            username,
            email,
            password,
            photo
        }).then(user => {
            response.json({success: true, message: 'User created successfully'});
        }).catch(error => {
            console.log(error);
            response.json({success: false, message: 'Email already exists'});
        })
    }
}
function login(request, response) {
    let {email, password, username, photo} = request.body;
    if(!email || !password || !username)
    {
        response.json({success: false, message: 'Please enter username,email and password'})
    }else{
        User.create({
            username,
            email,
            password,
            photo
        }).then(user => {
            response.json({success: true, message: 'User created successfully'});
        }).catch(error => {
            response({success: false, message: 'Email already exists'});
        })
    }
}

module.exports = {index, login: login, register: register};