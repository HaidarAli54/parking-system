const jwt = require('jsonwebtoken');

require('dotenv').config();
const generateToken = (payload) => {
  return jwt.sign({ id: payload.id, email: payload.email, fullname: payload.fullname, phone_number: payload.phone_number }, process.env.JWT_KEY, {
    expiresIn: "24h",
  });

};

module.exports = generateToken