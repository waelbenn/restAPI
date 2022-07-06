const { default: mongoose } = require("mongoose");

const Schema=mongoose.Schema

const userSchema= new Schema({
    firstName:{required:true,
    type:String},
    lastName:{required:true,
        type:String},
    address:String,
    phoneNumber:Number,
    date:{type:Date,default:Date.now}
})

module.exports=mongoose.model("User",userSchema)