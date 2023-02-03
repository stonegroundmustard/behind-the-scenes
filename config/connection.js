require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
   {
      host: 'localhost',
      dialect: 'mysql',
      port: 3001,
      dialectOptions: {
        decimalNumbers: true,
      },
    };

module.exports = sequelize;