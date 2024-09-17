const express = require('express')
const app = express();
const ParkirController = require ('../controllers/parkir.controller')
const TokenJwt = require ('../middleware/authentication')

const parkirController = new ParkirController();
const tokenJwt = new TokenJwt();

app.post('/parkir', tokenJwt.verifyToken, parkirController.createParkir)



module.exports = router

