const express = require('express')
const widgetTypeController = require('../controllers/widgetTypeController.js')

const widgetTypeRouter = express.Router()

widgetTypeRouter.get('/index', widgetTypeController.getAllWidgetTypes)

module.exports = widgetTypeRouter
