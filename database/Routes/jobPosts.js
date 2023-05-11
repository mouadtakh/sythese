const express = require("express")
const router = express.Router()
const Posts = require("../model/postModel")
const {
    getAllPosts,
    createPost,
    updatePost,
    deletePost,
    getPostById

}= require("../controller/postController")

// get all post
router.get("/",getAllPosts)

router.get("/:id",getPostById)
router.patch("/:id",updatePost)
router.delete("/:id",deletePost)
router.post("/",createPost)

module.exports=router