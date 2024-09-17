const UserService = require('../service/user.service');
const responHelper = require('../utils/responseHelper');

class UserController {

    constructor() {
        this.userService = new UserService();
    }

    findById = async (req, res) => {

        try {
            const user = await this.userService.findById(req.params.id)

            if (!user) {
                return res.status(404).json(responHelper(true, 'User not found', null))
            }

            return res.status(200).json(responHelper(false, 'User found', user))

        } catch (error) {
            res.status(404).json(responHelper(true, error.message, null))
            
        }
    }

    registerUser = async (req, res) => {

        try {
            await this.userService.registerUser(req.body);

            return res.status(201).json(responHelper(false, 'User created successfully', null))

        } catch (error) {

            res.status(400).json(responHelper(true, error.message, null))
            
        }
    }

    loginUser = async (req, res) => {
        try {
            const {token, user} = await this.userService.loginUser(req.body.email, req.body.password);
            return res.status(200).json(responHelper(false, 'Login success', {token, user}))

        } catch (error) {
            if (error.message === 'User not found') {
                return res.status(404).json(responHelper(true, error.message, null))
            } else if (error.message === 'Invalid password') {
                return res.status(403).json(responHelper(true, error.message, null))
            }else {
                return res.status(500).json(responHelper(true, error.message, null))
            } 
        }
    }

    updateUser = async (req, res) => { 
        try {
            const user = await this.userService.updateUser(req.params.id, req.body);
            return res.status(200).json(responHelper(false, 'User updated successfully', user))

        } catch (error) {

            res.status(400).json(responHelper(true, 'internal server error', error.message))
            
        }
    }

    deleteUser = async (req, res) => {

        try {
            const user = await this.userService.deleteUser(req.params.id);

            return res.status(200).json(responHelper(false, 'User deleted successfully', null))
        } catch (error) {

            res.status(500).json(responHelper(true, 'internal server error', error.message))
        }
    }
}

module.exports = UserController