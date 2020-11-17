const express = require('express')
const router = express.Router()

const ProjectsController = require('../controllers/projects.js')

router.get('/', ProjectsController.projects_get_all)

router.post('/', ProjectsController.projects_create)

router.get('/:id', ProjectsController.projects_get)

router.delete('/:id', ProjectsController.projects_delete)

module.exports = router
