const mysql = require('mysql2')
const config = require('./config')

const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
})

module.exports = sequelize
