'use strict'
const { v4: uuidv4 } = require('uuid')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tasks', {
      id: {
        type: Sequelize.UUID,
        defaultValue: uuidv4(),
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      memberId: {
        type: Sequelize.UUID,
        references: {
          model: 'Members',
          key: 'id'
        }
      },
      projectId: {
        type: Sequelize.UUID,
        references: {
          model: 'Projects',
          key: 'id'
        }
      },
      estimate: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tasks')
  }
}
