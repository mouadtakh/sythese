const mongoose= require("mongoose")
const Interns = require("../model/internshipsModel")

// get all Interns
const getAllInterns=async (req,res)=>{
    const posts = await Interns.find()
    res.status(200).json(posts)

}
// update a post


const createIntern= async (req,res)=>{
    const {title,content,companie,category,location}=req.body
    try{
        const post= await Interns.create({title,content,companie,category,location})
        res.status(200).json(post)
    }catch(error){
        res.status(500).json({error:error.message})

    }
   
}
// delete a post
const deleteIntern=async (req,res)=>{
    const postId = req.params.id
    const post = await Interns.findOneAndDelete({_id:postId})
    if(!post) {
        res.status(404).json({error: "Post not found"})
        }
        res.status(200).json({success: "Post deleted"})
        }


module.exports={
    createIntern,
    getAllInterns,
    deleteIntern

}