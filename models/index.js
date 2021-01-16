const Sequelize = require("sequelize");

const sequelize = new Sequelize('mysql://root:Baoquangtu@1996@localhost:3306/work_talk');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = { db };