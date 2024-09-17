const ParkirRepository = require('../repository/parkir.repository');

const parkirRepository = new ParkirRepository();


class ParkirService {

    async createParkir(payload) {
        const {duration, nopol} = payload;
        const user_id = payload.user_id;
        const total = duration * 3000;

        return await parkirRepository.createParkir({duration, total, nopol, user_id});

    }
}

module.exports = ParkirService