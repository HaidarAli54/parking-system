const express = require('express');
const router = express.Router();
const UserController = require ('../controllers/user.controller')
const TokenJwt = require ('../middleware/authentication')

const userController = new UserController()
const tokenJwt = new TokenJwt()
//findById
router.get('/user/:id', tokenJwt.verifyToken, userController.findById)

router.post('/user/register', userController.registerUser)
//router login
router.post('/user/login', userController.loginUser)

router.put('/user/:id', tokenJwt.verifyToken, userController.updateUser)

router.delete('/user/:id', tokenJwt.verifyToken, userController.deleteUser)

module.exports = router