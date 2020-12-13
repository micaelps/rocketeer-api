const express = require('express')
const router = express.Router()
const login = require('../middleware/login')

const TasksController = require('../controllers/tasks.js')

router.get('/', TasksController.tasks_get_all)

router.post('/', TasksController.tasks_create)

router.get('/:id', TasksController.tasks_get)

router.put('/:id', TasksController.tasks_update)

router.delete('/:id', TasksController.tasks_delete)

module.exports = router
