// const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
const UserModel = require("../models/user.model");
// const app = express.Router();
const saltRound = 10;
exports.postUserSignup=async (req, res) => {
  let { email } = req.body;
  // console.log(email);
  try {
    let user = await UserModel.findOne({ email: email });
    console.log(user);
    if (user) {
      return res.send({
        status: "Failed",
        message: "Please try with different email",
      });
    }
    bcrypt.hash(req.body.password,saltRound,async(err,hashValue)=>{
        if(err){
          return res.send("there is error in bcrypt")
        }
        req.body.password=hashValue;
        user = await UserModel.create(req.body);

        return res.send({
          status: "Success",
          message: "Signup Successful",
        });
    })
    

    
  } catch (error) {
    return res.send({ message: error.message, status: "Failed" });
  }
};

exports.postUserLogin =  async (req, res) => {
  let { email, password } = req.body;
  // console.log(req.body);
  try {
    let user = await UserModel.findOne({ email });
    // console.log(user)
    let passwordHash = user.password
    if (!user) {
      return res.send({ status: "Failed", message: "Please check your email" });
    }
    bcrypt.compare(password,passwordHash,async(err,Value)=>{
      if(err){
        return res.send("there is error in hash password")
      }else{
        if(Value){
          const token = jwt.sign({ user }, "1234");
          return res.send({ status: "Success", message: { user, token } });
        }else{
          return res.send({
            status: "Failed",
            message: "Please check your password",
          });
        }
      }

   })
    // if (user.password !== password) {
    //   return res.send({
    //     status: "Failed",
    //     message: "Please check your password",
    //   });
    // }
    // if (user && user.password === password) {
    //   const token = jwt.sign({ user }, "1234");
    //   return res.send({ status: "Success", message: { user, token } });
    // }
  } catch (error) {
    return res.send({ message: error.message, status: "Failed!!" });
  }
};

// module.exports = app;
