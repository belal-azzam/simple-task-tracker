const express = require('express');
const UserService = require('../../services/UserService');
let router = express.Router();

router.post('/login', UserService.login);
router.get('/', UserService.index);
router.post('/register', UserService.register);
// router.post('/register',  UserService.register);
module.exports = router;