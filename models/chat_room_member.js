const { DataTypes } = require('sequelize');
const { db } = require('../models');

var sequelize = db.sequelize;

var chat_room_member = sequelize.define('chat_room_member', {
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
  is_admin: {
    type: DataTypes.TINYINT,
    allowNull: true
  },
  status: {
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
  updated_by: {
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
  tableName: 'chat_room_member',
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
      name: "user_id",
      using: "BTREE",
      fields: [
        { name: "user_id" },
      ]
    },
    {
      name: "chat_room_id",
      using: "BTREE",
      fields: [
        { name: "chat_room_id" },
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
      name: "updated_by",
      using: "BTREE",
      fields: [
        { name: "updated_by" },
      ]
    },
    {
      name: "ix_chat_room_member_status",
      using: "BTREE",
      fields: [
        { name: "status" },
      ]
    },
  ]
});

module.exports = { chat_room_member }