const User = require('../models/user.model');
const {UniqueConstraintError} = require('sequelize');


class UserRepository {
    async findById(id) {
        const data = await User.findByPk(id, {
            attributes: {exclude: ['password']},
        });
        if (!data) {
            throw new Error('User not found');
        }else {
        return data;
        }
    }

    async createUser(user) {
        try {

            const createdUser = await User.create(user, {

                attributes: {exclude: ['password']},
            });

            return createdUser;

        } catch (error) {
            if (error instanceof UniqueConstraintError) {
                throw new Error('User already in use');
            } else{
                throw error;
            }
        }
    }

    async findByEmail(email) {
        
        return await User.findOne({
            where: {email},
        });
    }  

    async updateUser(id, body) {

        return await User.update(body,{
            where: {id},
        })
    }

    async deleteUser(id) {

        return await User.destroy({
            where: {id},
        })

    }
}



module.exports = UserRepository