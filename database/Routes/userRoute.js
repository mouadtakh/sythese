const express = require("express")
const router = express.Router()
const Users = require("../model/userModel")

const {
    GetAllUsers,
    LoginUser,
    SignUpUser,
    GetUserById,
    DeleteUser
} = require("../controller/userController")


router.post("/signin",LoginUser)
router.post("/signup",SignUpUser)
router.get("/",GetAllUsers)
router.get("/:id",GetAllUsers)
router.delete("/:id",DeleteUser)
module.exports=router