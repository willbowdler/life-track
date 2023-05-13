'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class WidgetType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      WidgetType.hasMany(models.Widget)
    }
  }
  WidgetType.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'WidgetType',
    }
  )
  return WidgetType
}
