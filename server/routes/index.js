const router = require('express').Router();
const userRoutes = require('./user');
const quizRoutes = require('./quiz');

const routes = {
    '/user': userRoutes,
    '/quiz': quizRoutes
}

for (let path in routes) {
    router.use(path, routes[path])
};

module.exports = router;
