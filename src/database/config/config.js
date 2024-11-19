require("dotenv").config()
const { DB_POSTGRES_NAME, DB_POSTGRES_USER_NAME, DB_POSTGRES_PASS, DB_POSTGRES_HOST } = process.env

module.exports = {
  "development": {
    "username": DB_POSTGRES_USER_NAME,
    "password": DB_POSTGRES_PASS,
    "database": DB_POSTGRES_NAME,
    "host": "127.0.0.1",
    "logging": false,
    "dialect": "postgres"
  },
  "production": {
    "username": DB_POSTGRES_USER_NAME,
    "password": DB_POSTGRES_PASS,
    "database": DB_POSTGRES_NAME,
    "host": DB_POSTGRES_HOST,
    "dialect": "postgres"
  }
}
