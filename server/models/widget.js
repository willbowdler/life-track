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
      Widget.belongsTo(models.User, { foreignKey: 'UserId' })
      Widget.belongsTo(models.WidgetType, {
        foreignKey: 'WidgetTypeId',
      })
      Widget.hasMany(models.WidgetItem)
    }
  }
  Widget.init(
    {
      title: DataTypes.STRING,
      WidgetTypeId: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Widget',
    }
  )
  return Widget
}
