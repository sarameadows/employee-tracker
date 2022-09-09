const mysql = require('mysql2');
require('dotenv').config();

// connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: 'company'
    },
    console.log('Connected to the company database.')
);

module.exports = db;