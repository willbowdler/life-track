const widgetService = require('../services/widgetService')

const createWidget = async (req, res) => {
  await widgetService.createWidget(req.body, req.body.userId)
  res.json({ res: 'Widget Created' })
}

const findWidgetById = async (req, res) => {
  const widget = await widgetService.findWidgetById(req.params.widgetId)
  res.json({ res: widget })
}

const findWidgetsByUserId = async (req, res) => {
  const widgets = await widgetService.findWidgetsByUserId(req.params.userId)
  res.json({ res: widgets })
}

const updateWidget = async (req, res) => {
  await widgetService.updateWidget(req.params.widgetId, req.body)
  res.json({ res: 'Widget Updated' })
}

const deleteWidget = async (req, res) => {
  await widgetService.deleteWidget(req.params.widgetId)
  res.json({ res: 'Widget Deleted' })
}

module.exports = {
  createWidget,
  findWidgetById,
  findWidgetsByUserId,
  updateWidget,
  deleteWidget,
}
