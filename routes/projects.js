const express = require('express')
const router = express.Router()

const ProjectsController = require('../controllers/projects')

router.get('/', ProjectsController.projects_get_all)

router.post('/', ProjectsController.projects_create)

router.get('/:projectId', ProjectsController.projects_get)

router.delete('/:projectId', ProjectsController.projects_delete)

module.exports = router
