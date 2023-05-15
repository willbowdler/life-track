require('dotenv').config()

module.exports = {
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  server: {
    port: process.env.SERVER_PORT,
  },
  session: {
    secret: process.env.SESSION_SECRET,
  },
}
