const Router = require('express')
const router = new Router()
const userController = require('../controller/user.controller')
router.get('/',userController.getInfo)
router.post('/', userController.CreateApplication)
router.delete('/:id', userController.DeleteApplicarion)

module.exports = router