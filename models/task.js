'use strict'
const project = require('../models/project')
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      this.belongsTo(models.Member,{foreignKey:'memberId', as:'membro'})
    }
  }
  Task.init(
    {
      name: DataTypes.STRING,
      memberId: DataTypes.UUID,
      projectId: DataTypes.UUID,
      estimate: DataTypes.INTEGER,
      description: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Task'
    }
  )
  return Task
}
