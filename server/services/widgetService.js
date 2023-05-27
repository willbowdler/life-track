const db = require('../models')

const Widget = db.Widget
const WidgetType = db.WidgetType
const WidgetItem = db.WidgetItem

const createWidget = async (newWidget, userId) => {
  const type = newWidget.type.toLowerCase()
  const widgetType = await WidgetType.findOne({ where: { type } })

  return Widget.create(
    {
      title: newWidget.title,
      WidgetTypeId: widgetType.id,
      UserId: userId,
      WidgetItems: newWidget.widgetItems,
    },
    {
      include: [WidgetItem],
    }
  )
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
