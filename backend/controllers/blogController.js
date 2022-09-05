const Blog=require("../models/blogModel")
const isAuthenticated=require("../middleware/auth")
const User=require("../models/userModel");




exports.publishBlog=async (req,res)=>{
    try {
        const {title,content}=req.body;
        const user=await User.findById(req.user.id);


        const postBlog= await Blog.create({
            title,content,
        })
        res.status(200).json({
            user,
            success:true,
            message:"Blog published successfully"
        })
        
    } catch (error) {
        console.log(error),
        res.status(404).json({
            
            success:false,
            message:error.message
        })
    }
}

exports.deleteBlog=async (req,res)=>{
    try {
        const blog=await Blog.findById(req.params.id)
        if(!blog){
            res.status(404).json({
                success:false,
                message:"Blog post not found"
            })
        }
        await Blog.remove()
        res.status(200).json({
            success:true,
            message:"Blog deleted successfully",
        })
        
    } catch (error) {
        console.log(error)
        res.status(404).json({
            success:false,
            message:error.message,
        })
    }
}