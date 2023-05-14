const express = require('express')
const authController = require('../controllers/authController')
const { isAuthenticated } = require('../middleware/auth')

const authRouter = express.Router()

authRouter.post('/register', authController.register)

authRouter.post('/login', authController.login)

authRouter.post('/logout', isAuthenticated, authController.logout)

module.exports = authRouter
