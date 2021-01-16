const { DataTypes } = require('sequelize');
const { db } = require('../models');

var sequelize = db.sequelize;

var chat = sequelize.define('chat', {
  id: {
    type: DataTypes.STRING(36),
    allowNull: false,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.STRING(36),
    allowNull: false,
    references: {
      model: 'user',
      key: 'id'
    }
  },
  chat_room_id: {
    type: DataTypes.STRING(36),
    allowNull: false,
    references: {
      model: 'chat_room',
      key: 'id'
    }
  },
  parent_id: {
    type: DataTypes.STRING(36),
    allowNull: true,
    references: {
      model: 'chat',
      key: 'id'
    }
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  message_type: {
    type: "ENUM('0','1','2','3','4','5','6')",
    allowNull: true
  },
  message_status: {
    type: "ENUM('0','1','2')",
    allowNull: true
  },
  status: {
    type: "ENUM('0','1')",
    allowNull: true
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
  tableName: 'chat',
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
      name: "_chat_room_id_created_at_uc",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "chat_room_id" },
        { name: "created_at" },
      ]
    },
    {
      name: "user_id",
      using: "BTREE",
      fields: [
        { name: "user_id" },
      ]
    },
    {
      name: "ix_chat_status",
      using: "BTREE",
      fields: [
        { name: "status" },
      ]
    },
    {
      name: "chat_ibfk_3_idx",
      using: "BTREE",
      fields: [
        { name: "parent_id" },
      ]
    },
  ]
});

module.exports = { chat }
