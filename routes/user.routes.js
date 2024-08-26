const express = require("express");
const jwt = require("jsonwebtoken");

const route = express.Router();

const userController = require("../controllers/user.controller");

route.post('/signup',userController.postUserSignup);
route.post('/login',userController.postUserLogin);

module.exports=route;

