const { DataTypes } = require('sequelize');
const { db } = require('../models');

var sequelize = db.sequelize

var attachment = sequelize.define('attachment', {
  id: {
    type: DataTypes.STRING(36),
    allowNull: false,
    primaryKey: true
  },
  chat_id: {
    type: DataTypes.STRING(36),
    allowNull: false,
    references: {
      model: 'chat',
      key: 'id'
    }
  },
  file_size: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  content_type: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  file_extension: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  path: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  type: {
    type: "ENUM('0','1','2','3')",
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
  tableName: 'attachment',
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
      name: "chat_id",
      using: "BTREE",
      fields: [
        { name: "chat_id" },
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
      name: "ix_attachment_status",
      using: "BTREE",
      fields: [
        { name: "status" },
      ]
    },
  ]
});

module.exports = { attachment }
