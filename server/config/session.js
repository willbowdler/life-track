const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const sequelize = require('../config/db')
const Session = require('./models/Session')

const sessionConfig = {
  secret: 'your-secret-key',
  store: new SequelizeStore({
    db: sequelize,
    table: 'Session',
    model: Session,
    expiration: 24 * 60 * 60 * 1000, // session will expire after 24 hours
  }),
  resave: false,
  saveUninitialized: false,
}

module.exports = sessionConfig
