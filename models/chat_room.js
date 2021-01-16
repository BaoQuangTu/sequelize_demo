const { DataTypes } = require('sequelize');
const { db } = require('../models');

var sequelize = db.sequelize;

var chat_room = sequelize.define('chat_room', {
  id: {
    type: DataTypes.STRING(36),
    allowNull: false,
    primaryKey: true
  },
  avatar: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  slogan: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  status: {
    type: "ENUM('0','1')",
    allowNull: true
  },
  type: {
    type: "ENUM('0','1')",
    allowNull: true
  },
  created_by: {
    type: DataTypes.STRING(36),
    allowNull: false,
    references: {
      model: 'user',
      key: 'id'
    }
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'chat_room',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "id" },
      ]
    },
    {
      name: "created_by",
      using: "BTREE",
      fields: [
        { name: "created_by" },
      ]
    },
    {
      name: "ix_chat_room_status",
      using: "BTREE",
      fields: [
        { name: "status" },
      ]
    },
  ]
});

module.exports = { chat_room }
