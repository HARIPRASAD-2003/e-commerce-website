// db.js
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432, // Default PostgreSQL port
  ssl: {
    rejectUnauthorized: false, // Temporary workaround for self-signed certificates
  },
  sslmode: 'require', // Add this line to enforce SSL connection
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};

