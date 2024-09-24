const { Schema, model } = require("mongoose");

const BusSchema = new Schema({
  name: String,
  from: String,
  to: String,
  // price: Number,
  // email: String,
  // phone: Number,
  // aminites: Array,
  number: Number,
  // arrival: String,
  // departure: String,
  
  capacity: Array,
});

const BusModel = model("busses", BusSchema);

module.exports = BusModel;
