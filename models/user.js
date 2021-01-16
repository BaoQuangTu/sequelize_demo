const { DataTypes } = require('sequelize');
const { db } = require('../models');

var sequelize = db.sequelize

var user = sequelize.define('user', {
  id: {
    type: DataTypes.STRING(36),
    allowNull: false,
    primaryKey: true
  },
  user_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: "user_name"
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: "email"
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  first_name: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  last_name: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  avatar: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  salt: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  gender: {
    type: "ENUM('0','1','2')",
    allowNull: true
  },
  status: {
    type: "ENUM('0','1')",
    allowNull: true
  },
  is_admin: {
    type: DataTypes.TINYINT,
    allowNull: true
  },
  last_login: {
    type: DataTypes.DATE,
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
  tableName: 'user',
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
      name: "user_name",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "user_name" },
      ]
    },
    {
      name: "email",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "email" },
      ]
    },
    {
      name: "ix_user_status",
      using: "BTREE",
      fields: [
        { name: "status" },
      ]
    },
  ]
});

module.exports = { user }