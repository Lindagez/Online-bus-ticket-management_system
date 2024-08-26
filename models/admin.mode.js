const { Schema, model } = require("mongoose");

const AdminSchema = new Schema({
    FullName: String,
    phone:String,
    email:String,
    password:String,
    Address:String,
    profile:String,
    //Bas Company name kasflge teqtarew misrabet
    // postNotice:String, postNotice may be be lela table admin id ena notice colomen yalce
})

const AdminModel = model('admines',AdminSchema);

module.exports = AdminModel;