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
      WidgetItem.belongsTo(models.Widget, { foreignKey: 'WidgetId' })
    }
  }
  WidgetItem.init(
    {
      content: DataTypes.STRING,
      WidgetId: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'WidgetItem',
    }
  )
  return WidgetItem
}
