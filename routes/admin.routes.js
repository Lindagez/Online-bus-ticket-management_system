const express = require("express");
const jwt = require("jsonwebtoken");

const route = express.Router();

const adminController = require("../controllers/admin.controller.js");

route.post("/adminSignup",adminController.postAdminSignup);
route.post("/adminLogin",adminController.postAdminLogin);


module.exports = route;