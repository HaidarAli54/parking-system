const User = require('../models/user')

class UserRepository {
    async findById(id) {
        const data = await User.findByPK
    }
    async createUser(data) {
        await User.create({
            name: data.name,
            email: data.email,
            password: data.password,
        })
    }
}

module.exports = UserRepository