const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8080;


const busRouter = require("./src/controllers/bus.controller");
const userRouter=require("./src/controllers/user.controller");


const connect = require("./src/configs/db");

app.use(cors());
app.use(express.json());

app.use("/user",userRouter)
app.use("/bus", busRouter);




app.listen(port, async () => {
  try {
    await connect();
    console.log(`listening on http://localhost:8080`);
  } catch (error) {
    console.log(error.message);
  }
});
