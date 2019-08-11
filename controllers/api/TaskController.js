const express = require('express');
const TaskService = require('../../services/TaskService');
let router = express.Router();
router.get('/types', TaskService.getTaskTypes);
router.get('/', TaskService.getStatusWithTasks);
router.post('/', TaskService.create);
router.put('/:taskId', TaskService.update);
router.post('/status', TaskService.createStatus);
router.post('/type', TaskService.createType);
router.put('/update_status/:taskId', TaskService.updateTaskStatus);
module.exports = router;