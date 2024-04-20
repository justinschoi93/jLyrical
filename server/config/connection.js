const { Sequelize } = require('sequelize');
require('dotenv').config();

let sequelize = new Sequelize({
  dialect: 'mysql',
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PW,
  host: process.env.DB_HOST,
});

sequelize.authenticate();

module.exports = sequelize;

