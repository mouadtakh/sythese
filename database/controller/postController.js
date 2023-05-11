const mongoose= require("mongoose")
const Posts = require("../model/postModel")

// get all posts
const getAllPosts=async (req,res)=>{
    const posts = await Posts.find()
    res.status(200).json(posts)

}
// update a post
const updatePost=async (req,res)=>{
    const post = await Posts.findById(req.params.id)
    if(!post) {
        res.status(404).json({error: "Post not found"})
}
    post.title = req.body.title
    post.content = req.body.content
    post.save()
    res.status(200).json(post)
    }
// get post by id
const getPostById=async (req,res)=>{
    const postId = req.params.id
    const post = await Posts.findById(postId)
    res.status(200).json(post)
}   

const createPost= async (req,res)=>{
    const {title,content,companie,category,location,img}=req.body
    try{
        const post= await Posts.create({title,content,companie,category,location,img})
        res.status(200).json(post)
    }catch(error){
        res.status(500).json({error:error.message})

    }
   
}
// delete a post
const deletePost=async (req,res)=>{
    const postId = req.params.id
    const post = await Posts.findOneAndDelete({_id:postId})
    if(!post) {
        res.status(404).json({error: "Post not found"})
        }
        res.status(200).json({success: "Post deleted"})
        }


module.exports={
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost

}