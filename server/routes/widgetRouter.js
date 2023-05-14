const express = require('express')
const widgetController = require('../controllers/widgetController.js')

const widgetRouter = express.Router()

widgetRouter.get('/index', widgetController.findWidgetsByUserId)

widgetRouter.get('/:widgetId/show', widgetController.findWidgetById)

widgetRouter.post('/create', widgetController.createWidget)

widgetRouter.put('/:widgetId/update', widgetController.updateWidget)

widgetRouter.delete('/:widgetId/destroy', widgetController.deleteWidget)

module.exports = widgetRouter
