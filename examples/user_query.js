const { QueryTypes } = require('sequelize'); 
const { db } = require("../models");
const { user } = require("../models/user");

// Find all user
async function findAll() {
    const users = await user.findAll(
        {
            where: {
                status: '1'
            },
            attributes: [ 'id', 'user_name', 'email' ]
        }
    );
    console.log(JSON.stringify(users, null, 2));
}

// Create user
async function createUser() {
    const us = await user.create({
        id: '7c6d0493-c920-4f94-940c-5c1044e95f92',
        user_name: 'alice123',
        password: 'hash',
        email: 'baoquangtu150707@gmail.com'
    }, {  });

    console.log(us);
}

// createUser();
// findAll();

  