const express = require("express");
const route = express.Router();

const cityController = require("../controllers/city.controller");

route.get('/',cityController.getFirst);

route.post('/',cityController.postFirst);

route.post('/showcity',cityController.postShowCity);

module.exports=route;