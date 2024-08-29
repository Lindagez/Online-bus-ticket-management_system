const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8080;
require('dotenv').config(); 
// const connect = require('./configs');
// const busRouter = require("./controllers/bus.controller");
// const userRouter=require("./Routes/userRoutes");
// const ticketRouter=require("./controllers/ticket");
const router = require('./Routes/routes')
// const errorHandler = require('./middlewares/errorHandler').default;

// const cookieParser = require('cookie-parser');


const connect = require("./configs/db");


// app.use(cookieParser());
app.use(cors());
app.use(express.json());

// app.use("/",userRouter)
// app.use("/bus", busRouter);
// app.use("/ticket", ticketRouter);
app.use("/api", router)


connect()
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => console.log('Server running on http://localhost:3000'));
  })
  .catch(err => console.error('Database connection error:', err));
