const jwt = require('jsonwebtoken');
const secret = process.env.JWT_KEY;

class TokenJwt {

    verifyToken (req, res) {

        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            return res.Status(403).json({
                massage: 'token no providedS!'
            })
        }
        jwt.verify(token, 'SECRET_KEY', (err, decoded) => {

            if (err) {
                return res.sendStatus(403).json({
                    massage: 'Unauthorized!'
                })
            }
            req.id_user = decoded.id;
        });
    }
}

module.exports = TokenJwt