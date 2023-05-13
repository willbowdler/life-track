'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class WidgetItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      WidgetItem.belongsTo(models.Widget, { foreignKey: 'widget_id' })
      WidgetItem.belongsTo(models.WidgetType, {
        foreignKey: 'widget_item_type_id',
      })
    }
  }
  WidgetItem.init(
    {
      name: DataTypes.STRING,
      item_type_id: DataTypes.INTEGER,
      widget_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'WidgetItem',
    }
  )
  return WidgetItem
}
