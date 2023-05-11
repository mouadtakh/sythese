const express = require("express")
const router = express.Router()
const Posts = require("../model/internshipsModel")
const {
    createIntern,
    getAllInterns,
    deleteIntern

}= require("../controller/internships")

// get all post
router.get("/",getAllInterns)

router.delete("/:id",deleteIntern)
router.post("/",createIntern)

module.exports=router