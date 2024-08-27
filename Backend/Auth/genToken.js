const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN } = require('../configs/db');

// generate a token
const genToken = (id) => {
    return jwt.sign({id}, ACCESS_TOKEN, {expiresIn: "1d"});
};

module.exports = genToken;