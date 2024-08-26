const AdminModel = require("../models/admin.mode.js");
const ScheduleModel = require("../models/schedule.model.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
const saltRound = 10;


exports.postAdminSignup=async (req, res) => {
    let { email } = req.body;
    // console.log(email);
    try {
      let user = await AdminModel.findOne({ email: email });
    //   console.log(user);
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
          req.body.profile=""
          user = await AdminModel.create(req.body);
  
          return res.send({
            status: "Success",
            message: "Signup Successful",
          });
      })      
    } catch (error) {
      return res.send({ message: error.message, status: "Failed" });
    }
};

exports.postAdminLogin =  async (req, res) => {
    let { email, password } = req.body;
    // console.log(req.body);
    try {
      let user = await AdminModel.findOne({ email });
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

exports.addShadul = async (req,res)=>{
    let { busTargaNumber } = req.body;

    try{

        let busSchedule = await ScheduleModel.findOne(busTargaNumber);

        if(!busSchedule){

        }else{
            let date = busSchedule.date
            let dateArray = date.split("/");
            let today = new Date();
        }

    }catch(error){
        return res.send({message:error.message,status:"Failed"})
    }

}