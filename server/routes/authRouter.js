const express = require('express')
const authController = require('../controllers/authController')

const authRouter = express.Router()

authRouter.post('/register', authController.register)

authRouter.post('/login', authController.login)

authRouter.post('/logout', authController.logout)

module.exports = authRouter
