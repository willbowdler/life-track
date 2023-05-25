const db = require('../models')

const WidgetType = db.WidgetType

const getAllWidgetTypes = async () => {
  return WidgetType.findAll()
}

module.exports = { getAllWidgetTypes }
