const widgetService = require('../services/widgetService')

const createWidget = async (req, res) => {
  await widgetService.createWidget(req.body, req.body.userId)
  res.status(200).json({
    success: true,
    message: 'Widget Created.',
  })
}

const findWidgetById = async (req, res) => {
  const widget = await widgetService.findWidgetById(req.params.widgetId)
  res.status(200).json({
    success: true,
    data: { widget: widget },
    message: 'Widget Retrieved.',
  })
}

const findWidgetsByUserId = async (req, res) => {
  const widgets = await widgetService.findWidgetsByUserId(req.params.userId)
  res.status(200).json({
    success: true,
    data: { widgets: widgets },
    message: 'Widgets Retrieved.',
  })
}

const updateWidget = async (req, res) => {
  await widgetService.updateWidget(req.params.widgetId, req.body)
  res.status(200).json({
    success: true,
    message: 'Widget Updated.',
  })
}

const deleteWidget = async (req, res) => {
  await widgetService.deleteWidget(req.params.widgetId)
  res.status(200).json({
    success: true,
    message: 'Widget Deleted',
  })
}

module.exports = {
  createWidget,
  findWidgetById,
  findWidgetsByUserId,
  updateWidget,
  deleteWidget,
}
