
const mongoose = require("mongoose");

let connect = () => {
  return mongoose.connect(
    "",
    { useNewUrlParser: true }
  );
};

module.exports = connect;


