require('dotenv').config();

const api_config = {
    PORT: 5000,
    DB_URL: process.env.DB_URL
};

module.exports = api_config;
