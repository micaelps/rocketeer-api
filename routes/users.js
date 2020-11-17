const express = require('express')
const router = express.Router()

const UsersController = require('../controllers/users')

router.get('/', UsersController.users_get_all)

router.post('/', UsersController.users_create)

router.get('/:userId', UsersController.users_get)

router.delete('/:userId', UsersController.users_delete)

module.exports = router
