const Widget = require('../models/widget')

const createWidget = async (newWidget, userId) => {
  return Widget.create({ ...newWidget, userId })
}

const findWidgetById = async (widgetId) => {
  return Widget.findByPk(widgetId)
}

const findWidgetsByUserId = async (userId) => {
  return Widget.findAll({ where: { userId } })
}

const updateWidget = async (widgetId, data) => {
  const widget = await Widget.findByPk(widgetId)
  if (!widget) {
    throw new Error(`Widget not found with id ${widgetId}`)
  }
  return widget.update(data)
}

const deleteWidget = async (widgetId) => {
  const widget = await Widget.findByPk(widgetId)
  if (!widget) {
    throw new Error(`Widget not found with id ${widgetId}`)
  }
  return widget.destroy()
}

module.exports = {
  createWidget,
  findWidgetById,
  findWidgetsByUserId,
  updateWidget,
  deleteWidget,
}
