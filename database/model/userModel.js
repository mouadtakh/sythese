const mongoose = require("mongoose")

const bcrypt = require("bcrypt")
const Schema = mongoose.Schema

const userSchema= new Schema({
    name:{type:String,required:true},
    lname:{type:String,required:true},
    age:{type:String,required:true},
    diploma:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    address:{type:String,required:true},
    phone:{type:String,required:true},
    gender:{type:String,required:true}
},{timestamps:true})



module.exports= mongoose.model("users",userSchema)