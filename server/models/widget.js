'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Widget extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Widget.belongsTo(models.User, { foreignKey: 'user_id' })
      Widget.belongsTo(models.WidgetType, { foreignKey: 'widget_type_id' })
      Widget.hasMany(models.WidgetItem)
    }
  }
  Widget.init(
    {
      name: DataTypes.STRING,
      widget_type_id: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Widget',
    }
  )
  return Widget
}
