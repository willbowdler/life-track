require('dotenv').config()

module.exports = {
  db: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'my_database',
  },
  server: {
    port: 3000,
  },
  session: {
    secret: '',
  },
}
