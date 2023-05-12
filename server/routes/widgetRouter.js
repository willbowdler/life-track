const express = require('express')
const widgetController = require('../controllers/widgetController.js')

const widgetRouter = express.Router()

router.get('/index', widgetController.findWidgetsByUserId)

router.get('/:widgetId/show', widgetController.findWidgetById)

router.post('/create', widgetController.createWidget)

router.put('/:widgetId/update', widgetController.updateWidget)

router.delete('/:widgetId/destroy', widgetController.deleteWidget)

module.exports = widgetRouter
