const { Schema, model } = require("mongoose");

const ScheduleSchema = new Schema({
    from:String,
    to:String,
    date:String,
    seats:Number,
    price:String,
    busType:String,
    startPlace:String,
    startHour:String,
    busTargaNumber:String,//ye bus targa number weym demo gone quter
});
const ScheduleModel = model('schedules',ScheduleSchema);

module.exports = ScheduleModel;
