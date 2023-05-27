const widgetTypeService = require('../services/widgetTypeService')

const getAllWidgetTypes = async (req, res) => {
  const widgetTypes = await widgetTypeService.getAllWidgetTypes()
  res.status(200).json({
    success: true,
    data: { widgetTypes },
    message: 'Widget Types Retrieved.',
  })
}

module.exports = { getAllWidgetTypes }
