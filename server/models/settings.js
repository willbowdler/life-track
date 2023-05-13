'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Settings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Settings.belongsTo(models.User, { foreignKey: 'user_id' })
    }
  }
  Settings.init(
    {
      userId: DataTypes.INTEGER,
      colorTheme: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Settings',
    }
  )
  return Settings
}
