const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session)
const config = require('./config')

const options = {
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
  createDatabaseTable: true,
}

const store = new MySQLStore(options)

const sessionConfig = {
  secret: config.session.secret,
  resave: false,
  saveUninitialized: false,
  store: store,
}

module.exports = sessionConfig
