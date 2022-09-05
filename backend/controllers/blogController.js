const Blog=require("../models/blogModel")
const isAuthenticated=require("../middleware/auth")
const User=require("../models/userModel");



exports.publishBlog=async (req,res)=>{
    try {
        const {title,content}=req.body

        const postBlog= await Blog.create({
            title,content,
        })
        res.status(200).json({
            user,
            success:true,
            message:"Blog published successfully"
        })
        
    } catch (error) {
        res.status(404).json({
            success:false,
            message:error.message
        })
    }
}