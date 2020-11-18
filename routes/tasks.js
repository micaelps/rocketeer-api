const express = require('express')
const router = express.Router()
const login = require('../middleware/login')

const TasksController = require('../controllers/tasks.js')

router.get('/', login, TasksController.tasks_get_all)

router.post('/', login, TasksController.tasks_create)

router.get('/:id', login, TasksController.tasks_get)

router.delete('/:id', login, TasksController.tasks_delete)

module.exports = router
