const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, SECRET_KEY, (err, user) => {
            if (err) {
                return res.sendStatus(403); // Forbidden
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401); // Unauthorized
    }
};


module.exports = { jwt, authenticateJWT };


// Example of a protected route
// app.get('/protected', authenticateJWT, (req, res) => {
//     res.json({ message: 'Welcome to the protected route!', user: req.user });
// });