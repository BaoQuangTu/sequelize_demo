const { DataTypes } = require('sequelize');
const { db } = require('../models');

var sequelize = db.sequelize

var device = sequelize.define('device', {
  id: {
    type: DataTypes.STRING(36),
    allowNull: false,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.STRING(36),
    allowNull: true,
    references: {
      model: 'user',
      key: 'id'
    }
  },
  brand: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  version: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  manufacturer: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  model: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  os_name: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  os_version: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  status: {
    type: "ENUM('0','1')",
    allowNull: true
  },
  token: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  fcm_token: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  session_code: {
    type: DataTypes.STRING(255),
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
  tableName: 'device',
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
      name: "ix_device_status",
      using: "BTREE",
      fields: [
        { name: "status" },
      ]
    },
  ]
});

module.exports = { device }