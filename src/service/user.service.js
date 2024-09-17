const UserRepository = require('../repository/user.repository');
const bcrypt = require('bcrypt');
const generateToken = require('../middleware/generateToken');

const userRepository = new UserRepository();


class UserService {
    async findById(id) {
        return await userRepository.findById(id)
    }
    async registerUser(payload) {

        const user = {
            email: payload.email,
            fullname: payload.fullname,
            password: payload.password,
            phone_number: payload.phone_number
        }
        const hashedPassword = await bcrypt.hash(payload.password, 10);
        user.password = hashedPassword

        return await userRepository.createUser(user)
    }

    async loginUser(email, password) {

        const user = await userRepository.findByEmail(email)
        if (!user) {
            throw new Error('User not found')
        }
        const validPassword = await bcrypt.compare(password, user.password)
        if (!validPassword) {
            throw new Error('Invalid password')
        }

        const tokenData = {
            id: user.id,
            email: user.email,
            fullname: user.fullname,
            phone_number: user.phone_number
        }
        const token = generateToken(tokenData);

        return {token, user: user.id}
    }


    async updateUser(id, body) {
        return await userRepository.updateUser(id, body)
    }
    async deleteUser(id) {
        return await userRepository.deleteUser(id)
    }
}

module.exports = UserService