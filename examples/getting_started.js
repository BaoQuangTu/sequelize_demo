const { db } = require("../models");

const database = db.sequelize;

database.authenticate()
    .then(() => {
    console.log('Connection established.');
    })
    .catch(err => {
        console.log('Connection failed.');
    });
