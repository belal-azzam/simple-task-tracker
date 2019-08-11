const express = require('express');

const TaskController = require('../../controllers/api/TaskController');
const UsersController = require('../../controllers/api/UserController');
let router = express.Router();

router.use('/users', UsersController);
router.use('/tasks', TaskController);

module.exports = router;