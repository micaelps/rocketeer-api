'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class NewTask extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
    }
  }
  NewTask.init(
    {
      name: DataTypes.STRING,
      owner: DataTypes.STRING,
      estimatedTime: DataTypes.STRING,
      description: DataTypes.STRING,
      status: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'NewTask'
    }
  )
  return NewTask
}
