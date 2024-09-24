const { ACCESS_TOKEN } = require("../configs/db");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");



// Protect bus company route


// Autherizing the user
// const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET; // Ensure you're using the correct secret

const auth = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Token is invalid" });
    }
    req.user = decoded; // Store user info in request for later use
    next();
  });
};


module.exports = auth;