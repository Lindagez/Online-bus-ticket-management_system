// const jwt = require('jsonwebtoken');
const {SECRET_KEY} = require('../configs/db');
require('dotenv').config(); // Load environment variables from .env file

// // generate a token
// const genToken = (id) => {
//     return jwt.sign({id}, ACCESS_TOKEN, {expiresIn: "1d"});
// };

// module.exports = genToken;


const jwt = require('jsonwebtoken');

const genToken = (userId, role) => {
  return jwt.sign({ id: userId, role }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = genToken;

// const jwt = require("jsonwebtoken");

// const genToken = (id, role) => {
//     return jwt.sign({ id, role }, SECRET_KEY, { expiresIn: '1h' });
// };


// module.exports = genToken;

