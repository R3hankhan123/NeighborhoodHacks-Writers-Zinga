const User=require("../models/userModel");
const sendToken = require("../utils/jwtToken");


exports.registerUser= async (req,res)=>{
    try {
        const { name, email, password } = req.body;


        const user= await User.create({
            name,email,password
        })
        res.status(200).json({
            user,
            success:true,
            message:"User registered successfully"
        })
        
    } catch (error) {

        console.log(error)
        res.status(404).json({
            success:false,
            message:error.message
        })
    }
}

exports.loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body
        if(!email || !password){
            res.status(400).json({
                success:false,
                message:"Please enter email and password"
            })
        }
        const user = await User.findOne({ email }).select("+password");
        if(!user){
            res.status(404).json({
                success:false,
                message:"User not found"
            })
        }
        const isPasswordMatch=await user.comparePassword(password)

        sendToken(user,200,res)
        
    } catch (error) {
        console.log(error)
        res.status(404).json({
            success:false,
            message:error.message
        })
    }
}

exports.logoutUser=async(req,res)=>{
    try {
        res.cookie("token", "none", {
            expires: new Date(Date.now() + 10 * 1000),
            httpOnly: true
        });
        res.status(200).json({
            success:true,
            message:"Logged out successfully"
        })
        
    } catch (error) {
        res.status(404).json({
            success:false,
            message:error.message
        })
    }
}