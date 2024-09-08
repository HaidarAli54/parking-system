const router = require ('express').Router()
const UserController = require ('../controllers/user.controller')
const TokenJwt = require ('../middleware/authentication')

const userController = new UserController()
const tokenJwt = new TokenJwt()

router.post('/api/register/', userController.registerUser)
//router login
router.post('/api/login', tokenJwt.verifyToken, userController.registerUser)

module.exports = router