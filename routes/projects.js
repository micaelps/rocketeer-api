const express = require('express')
const router = express.Router()
const login = require('../middleware/login')

const ProjectsController = require('../controllers/projects.js')

router.get('/', login, ProjectsController.projects_get_all)

router.post('/', login, ProjectsController.projects_create)

router.get('/:id', login, ProjectsController.projects_get)

router.delete('/:id', login, ProjectsController.projects_delete)

module.exports = router
