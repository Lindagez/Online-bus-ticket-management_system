// const express = require("express");
// const jwt = require("jsonwebtoken");
// const asyncHandler = require("express-async-handler");
const { EMAIL, EMAIL_PASSWORD } = require("../configs/db");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const auth = require("../Middleware/auth");
const genToken = require("../auth/genToken");
const User = require("../models/user.model");
const passwordValidator = require("password-validator");
// const nodemailer = require('nodemailer');

// Set up the transporter for sending emails
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: '',
//     pass: EMAIL_PASSWORD
//   },
//   secure: true
// });

// Define a password schema using the password-validator module
const schema = new passwordValidator();

schema
  .is()
  .min(8)
  .is()
  .max(100)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits()
  .has()
  .not()
  .spaces()
  .is()
  .not()
  .oneOf(["Password123", "qwerty"]);

// Define a regular expression pattern for email validation
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Define all APIs

// Create/Register a new User
const registerUser = async (req, res, next) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    // console.log(req.body);
    const { email, password } = req.body;

    // if (!emailPattern.test(email)) {
    //   return res.status(400).json({ error: 'Invalid email format' });
    // }

    // Validate password strength
    // const isPasswordValid = schema.validate(password);
    // if (!isPasswordValid) {
    //     return res.status(400).json({ error: 'Weak password. Please provide a stronger password.' });
    // }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Save the new user to the MongoDB collection
    await user.save();

    // Send confirmation email
    // const mailOptions = {
    //   from: 'yoszewdu@gmail.com',
    //   to: email,
    //   subject: 'Registration Confirmation',
    //   text: 'Thank you for registering!'
    // };

    // transporter.sendMail(mailOptions, (error, info) => {
    //   if (error) {
    //     console.error('Error sending email:', error);
    //   } else {
    //     console.log('Email sent:', info.response);
    //   }
    // });

    res.status(200).json({ message: "User registered successfully !!!" });
  } catch (err) {
    // res.status(404).json({ message: err.message });
    next(err);
  }
};

// Login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  // Check if the user exists in the database
  try {
    if (!emailPattern.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User Not Found." });
    }
    // Compare the password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);

    // Check if the user's password matches the one in the database
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    // generate the token and sign that new user
    const token = genToken(user._id);

    user.token = token;

    //  //send the token to the frontend using cookies
    //  res.cookie("Token", token, {
    //    path: "/",
    //    httpOnly: true,
    //    sameSite: true,
    //    secure: true
    //  });
    // Send the token to the client
    // res.status(200).json({ message: 'Login successful', token });

    await user.save();
    return res
      .status(201)
      .json({ message: "Logged in successfully !!!", token: token });
  } catch (err) {
    res.status(500).json({ message: err.message });
    next(err);
  }
};

// Logout a user
const logoutUser = async (req, res) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Invalid token" });
    }

    const user = await User.findOne({ token });
    if (!user) {
      return res.status(401).json({ error: "Invalid token" });
    }
    // Remove the token from the database
    user.token = undefined;
    await user.save();

    return res
      .status(201)
      .json({ message: "Logged out successfully", token: "" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  // res.redirect("/");
};

// Get user information
const getUser = async (req, res) => {
  try {
    // Get user's info from the MongoDB collection
    const user = await User.findById(req.user._id);
    if (user) {
      res.status(200).json({
        __id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(400).json({ message: "user not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a user by ID
const getUserById = async (req, res) => {
  try {
    // Find a user by ID from the MongoDB collection
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// update user information

// update user password
const updateUserPassword = async (req, res) => {
  try {
    console.log(req.body.password);
    const oldPass = req.body.password;
    const newPass = req.body.newPassword;

    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const prevPass = user.password;
    if (prevPass == oldPass) {
      user.password = newPass;
      await user.save();
      res.status(200).json({ message: "Password updated successfully" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Search Users
const searchUser = async (req, res) => {
  const { query } = req.query;
  
  try {
      // Search for users based on name, email, or other criteria
      const users = await User.find({
          $or: [
              { name: { $regex: query, $options: 'i' } }, // case-insensitive search
              { email: { $regex: query, $options: 'i' } }
          ]
      });
      
      if (users.length === 0) {
          return res.status(404).json({ message: 'No users found' });
      }
      
      res.status(200).json(users);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};
// Delete a user

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const stat = (req, res) => {
  res.status(200).json({ message: "ok" });
};

//

// Define routes


module.exports = {
  getUser,
  getUserById,
  registerUser,
  loginUser,
  logoutUser,
  stat,
  searchUser,
  deleteUser,
  updateUserPassword
};
