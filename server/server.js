const express = require('express');
const session = require('express-session');
const mysql = require('mysql2');
const routes = require('./routes/index');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Create Express Router

const router = express();
const PORT = process.env.PORT || 7777;

const sess = {
    secret: 'secret-string',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } ,
    store: new SequelizeStore({
        db: sequelize,
      }),
};

router.use(session(sess));
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Set up router to use routes. 
router.use(routes);

// Start Server

async function startServer() {
    try {
        await sequelize.sync({ force: false });
        router.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (err) {
        console.log('Error starting server:', err.message);
    }

}

if (sequelize.authenticate()) {
    startServer();
}


