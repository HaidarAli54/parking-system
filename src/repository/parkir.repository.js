const Parkir = require('../models/parkir')



class ParkirRepository {
    async createParkir(body) {
        try {
            const createdParkir = await Parkir.create(body);

            return createdParkir;
        } catch (error) {
            throw error
        }
    }
}

module.exports = ParkirRepository