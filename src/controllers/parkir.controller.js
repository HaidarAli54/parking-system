const ParkirService = require('../service/parkir.service');
const responHelper = require('../utils/responseHelper');

class ParkirController {

    constructor() {
        this.parkirService = new ParkirService();
    }

    createParkir = async (req, res) => {

        try {
            const parkir = await this.parkirService.createParkir(req.body);

            return res.status(201).json(responHelper(false, 'Parkir created successfully', parkir))
        } catch (error) {
            res.status(400).json(responHelper(true, error.message, null))
        }
    }
}

module.exports = ParkirController