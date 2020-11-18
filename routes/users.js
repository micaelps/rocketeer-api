const express = require('express')
const router = express.Router()
const login = require('../middleware/login')
const UsersController = require('../controllers/users')

router.post('/login', UsersController.users_login)

router.get('/', login, UsersController.users_get_all)

router.post('/', UsersController.users_create)

router.get('/:id', login, UsersController.users_get)

router.delete('/:id', login, UsersController.users_delete)

module.exports = router
