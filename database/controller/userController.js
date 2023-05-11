const express=require("express")
const User = require("../model/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const createToken=(_id)=>{
    return jwt.sign({_id},process.env.SECRET,{expiresIn: "3d"})
}
const LoginUser = async (req,res)=>{
    
   const {email,password} = req.body
   try{
    const user = await User.findOne({email})
    if(!user){
        return res.status(400).json({message:"User not found"})
        }
    const isValid = await bcrypt.compare(password,user.password)
    if(!isValid){
        return res.status(400).json({message:"Invalid Password"})
        }
    const token = createToken(user._id)
    return res.status(200).json({user,token})
    }catch(err){
        return res.status(500).json({message:"Server Error"})
        }
}

const SignUpUser = async (req,res)=>{
    const {name,lname,age,diploma,email,password,address,phone,gender}=req.body
    const mouad = await User.findOne({email:email})
    if(mouad){
        res.status(400).json({msg:"email already exists"})
    }
    try{
        const salt = await bcrypt.genSalt(10)
        const hash= await bcrypt.hash(password,salt)
        const user=await User.create({name,lname,age,diploma,email,password:hash,address,phone,gender})
        const token = createToken(user._id)
        res.status(200).json({user,token})    
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

// get all users
const GetAllUsers = async (req,res)=>{
    const user = await User.find()
    res.status(200).json(user)
}
// delete user
const DeleteUser = async (req,res)=>{
    const _id = req.params.id
    try{
        const user = await User.findById(_id)
        if(!user){
            return res.status(400).json({message:"User not found"})
            }
            await User.findByIdAndDelete(_id)
            res.status(200).json({message:"User deleted"})
            }catch(err){
                return res.status(500).json({message:"Server Error"})
                }
                }

// get user by id
const GetUserById = async (req,res)=>{
    const _id = req.params.id
    try{
        const user = await User.findById(_id)
        if(!user){
            return res.status(400).json({message:"User not found"})
            }else{
                res.status(200).json(user)
            }
            
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

module.exports={
    LoginUser,
    SignUpUser,
    GetAllUsers,
    DeleteUser,
    GetUserById
}