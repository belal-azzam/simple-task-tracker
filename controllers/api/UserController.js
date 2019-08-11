const express = require('express');
const UserService = require('../../services/UserService');
let router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
router.post('/login', UserService.login);
router.get('/', UserService.index);
// router.post('/register', upload.none(), UserService.register);
router.post('/register',  UserService.register);
module.exports = router;