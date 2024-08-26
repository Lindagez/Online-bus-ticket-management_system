const express = require("express");
const route = express.Router();

const busController = require("../controllers/bus.controller");

route.post('/addnew',busController.postAddNew);

route.post('/getall',busController.postGetAll);

route.post('/one',busController.postOne);

module.exports=route;