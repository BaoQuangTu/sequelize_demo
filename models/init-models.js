var DataTypes = require("sequelize").DataTypes;
var _attachment = require("./attachment");
var _chat = require("./chat");
var _chat_room = require("./chat_room");
var _chat_room_member = require("./chat_room_member");
var _device = require("./device");
var _notification = require("./notification");
var _user = require("./user");

function initModels(sequelize) {
  var attachment = _attachment(sequelize, DataTypes);
  var chat = _chat(sequelize, DataTypes);
  var chat_room = _chat_room(sequelize, DataTypes);
  var chat_room_member = _chat_room_member(sequelize, DataTypes);
  var device = _device(sequelize, DataTypes);
  var notification = _notification(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  attachment.belongsTo(chat, { foreignKey: "chat_id"});
  chat.hasMany(attachment, { foreignKey: "chat_id"});
  attachment.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(attachment, { foreignKey: "created_by"});
  attachment.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(attachment, { foreignKey: "updated_by"});
  chat.belongsTo(chat_room, { foreignKey: "chat_room_id"});
  chat_room.hasMany(chat, { foreignKey: "chat_room_id"});
  chat.belongsTo(user, { foreignKey: "user_id"});
  user.hasMany(chat, { foreignKey: "user_id"});
  chat.belongsTo(chat, { foreignKey: "parent_id"});
  chat.hasMany(chat, { foreignKey: "parent_id"});
  chat_room.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(chat_room, { foreignKey: "created_by"});
  chat_room_member.belongsTo(user, { foreignKey: "user_id"});
  user.hasMany(chat_room_member, { foreignKey: "user_id"});
  chat_room_member.belongsTo(chat_room, { foreignKey: "chat_room_id"});
  chat_room.hasMany(chat_room_member, { foreignKey: "chat_room_id"});
  chat_room_member.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(chat_room_member, { foreignKey: "created_by"});
  chat_room_member.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(chat_room_member, { foreignKey: "updated_by"});
  device.belongsTo(user, { foreignKey: "user_id"});
  user.hasMany(device, { foreignKey: "user_id"});
  notification.belongsTo(chat, { foreignKey: "chat_id"});
  chat.hasMany(notification, { foreignKey: "chat_id"});
  notification.belongsTo(user, { foreignKey: "user_id"});
  user.hasMany(notification, { foreignKey: "user_id"});
  notification.belongsTo(chat_room, { foreignKey: "chat_room_id"});
  chat_room.hasMany(notification, { foreignKey: "chat_room_id"});
  notification.belongsTo(user, { foreignKey: "receiver_id"});
  user.hasMany(notification, { foreignKey: "receiver_id"});

  return {
    attachment,
    chat,
    chat_room,
    chat_room_member,
    device,
    notification,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
