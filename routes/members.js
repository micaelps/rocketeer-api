const express = require('express')
const router = express.Router()
const login = require('../middleware/login')

const MembersController = require('../controllers/members.js')

router.get('/', login, MembersController.members_get_all)

router.post('/', login, MembersController.members_create)

router.get('/:id', login, MembersController.members_get)

router.delete('/:id', login, MembersController.members_delete)

module.exports = router
