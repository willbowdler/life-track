const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const db = require('../models')

console.log(db.User)

const sessionConfig = {
  secret: process.env.SESSION_SECRET,
  store: new SequelizeStore({
    db: db,
    table: 'Session',
    model: db.Session,
    expiration: 24 * 60 * 60 * 1000, // session will expire after 24 hours
  }),
  resave: false,
  saveUninitialized: false,
}

module.exports = sessionConfig
