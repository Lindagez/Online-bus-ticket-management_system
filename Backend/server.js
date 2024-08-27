const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8080;
require('dotenv').config(); 
// const connect = require('./configs');
const busRouter = require("./controllers/bus.controller");
const userRouter=require("./controllers/user.controller");
const ticketRouter=require("./controllers/ticket");


const connect = require("./configs/db");

app.use(cors());
app.use(express.json());

app.use("/user",userRouter)
app.use("/bus", busRouter);
app.use("/ticket", ticketRouter);


connect()
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => console.log('Server running on http://localhost:3000'));
  })
  .catch(err => console.error('Database connection error:', err));
