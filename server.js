const express = require("express");
const app = express();
const cors = require("cors");
const bodyParse = require('body-parser')
const port = process.env.PORT || 3000;


// const busRouter = require("./controllers/bus.controller.js");
// const userRouter=require("./controllers/user.controller.js");

const busRouter = require("./routes/bus.routes.js");
const userRouter=require("./routes/user.routes.js");
const adminRoute = require("./routes/admin.routes.js");

app.use(bodyParse.urlencoded({express:true}));

const connect = require("./configs/db");


app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(busRouter);
app.use(adminRoute);


app.listen(port, async () => {
  try {
    await connect();
    console.log(`listening on http://localhost:3000`);
  } catch (error) {
    // console.log(error)
    console.log(error.message);
  }
});
