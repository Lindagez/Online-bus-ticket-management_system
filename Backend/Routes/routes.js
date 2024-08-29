const express = require("express");
const router = express.Router();

const busRouter = require("./busRoutes");
const userRouter = require("./userRoutes");
const ticketRouter = require("./ticketRoutes");

router.use("/user", userRouter);
router.use("/bus", busRouter);
router.use("/ticket", ticketRouter);

module.exports = router;
