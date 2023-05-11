const mongoose = require("mongoose")


const Schema = mongoose.Schema

const postShema= new Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    companie:{type:String,required:true},
    category :{type:String,required:true},
  
  
},{timestamps:true})



module.exports= mongoose.model("posts",postShema)