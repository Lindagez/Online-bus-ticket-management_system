require('dotenv').config(); // Load environment variables from .env file

const mongoose = require('mongoose');

let connect = () => {
  const dbHost = process.env.DB_HOST;
  const dbPort = process.env.DB_PORT || '27017'; // Default port if not specified
  const dbUser = process.env.DB_USER;
  const dbPass = process.env.DB_PASS;
  const dbName = process.env.DB_NAME;
  const JWT_SECRET  = process.env.JWT_SECRET ;
  const SECRET_KEY = 'mySuperSecretKey123!';

  if (!dbHost || !dbPort || !dbName ) {
    throw new Error('Database host, port, or name is not defined.');
  } 

  // const uri = `mongodb+srv://raman:raman@cluster0.fm7rpoi.mongodb.net/ecom`;
  const uri = ""
  console.log('DB Host:', process.env.DB_HOST);
  console.log('DB Port:', process.env.DB_PORT);
  
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connect;
