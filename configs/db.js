
const mongoose = require("mongoose");

const dbUrl = "mongodb+srv://sofoniyaskediryesuf:WaJJih7JtyGTrDIE@cluster0.va2ub.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
let connect = () => {
  return mongoose.connect(
    dbUrl,
    { useNewUrlParser: true }
  );
};

module.exports = connect;


