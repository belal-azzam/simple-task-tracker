const express = require('express');
const TaskService = require('../../services/TaskService');
const passport = require('passport');
let router = express.Router();
router.use('/', passport.authenticate('jwt', {session: false}));
router.get('/types', TaskService.getTaskTypes);
router.get('/',TaskService.getStatusWithTasks);
router.post('/', TaskService.create);
router.put('/:taskId', TaskService.update);
router.post('/status', TaskService.createStatus);
router.post('/type', TaskService.createType);
router.put('/update_status/:taskId', TaskService.updateTaskStatus);




module.exports = router;