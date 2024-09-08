const UserService = require('../service/user.service')
// const ResponseHelper = require('../utils/responseHelper')

const userService = new UserService

class UserController {

    async registerUser(req,res,next) {

        const body = req.body;

        try { 
            await userService.registerUser(body)
            return new response(res, 201, 'create user succesfully')
        }
        catch(error) {
            next(error)
        } 
    }

    async loginUser(req,res,next) {

        const body = req.body

        try {
            const token = await userService.loginUser(body);

            return new response(res, 200, 'Login successful', token)

        } catch (error) {
            next(error);
            
        }

    }
}

module.exports = UserController