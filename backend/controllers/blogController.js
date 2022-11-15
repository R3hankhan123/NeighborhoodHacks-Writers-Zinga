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

exports.updateBlog=async (req,res)=>{
    try {
        var blog=await Blog.findById(req.params.id)
        if(!blog){
            res.status(404).json({
                success:false,
                message:"Blog post not found"
            })
        }
        blog=await Blog.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json({
            success:true,
            blog,
            message:"Blog updated successfully",
        })
        
    } catch (error) {
        console.log(error)
        res.status(404).json({
            success:false,
            message:error.message,
        })
    }}

exports.commentOnBlog = async (req, res) => {
        try {
          const blog = await Blog.findById(req.params.id);
      
          if (!blog) {
            return res.status(404).json({
              success: false,
              message: "blog not found",
            });
          }
      
          let commentIndex = -1;
      
          // Checking if comment already exists
      
          blog.comments.forEach((item, index) => {
            if (item.user.toString() === req.user._id.toString()) {
              commentIndex = index;
            }
          });
      
          if (commentIndex !== -1) {
            blog.comments[commentIndex].comment = req.body.comment;
      
            await blog.save();
      
            return res.status(200).json({
              success: true,
              message: "Comment Updated",
            });
          } else {
            blog.comments.push({
              user: req.user._id,
              comment: req.body.comment,
            });
      
            await blog.save();
            return res.status(200).json({
              success: true,
              message: "Comment added",
            });
          }
        } catch (error) {
          res.status(500).json({
            success: false,
            message: error.message,
          });
        }
      };


exports.likeAndUnlikePost=async(req,res)=>{
        try {
          const post = await Blog.findById(req.params.id);
      
          if (!post) {
            return res.status(404).json({
              success: false,
              message: "Post not found",
            });
          }
      
          if (post.likes.includes(req.user._id)) {
            const index = post.likes.indexOf(req.user._id);
      
            post.likes.splice(index, 1);
      
            await post.save();
      
            return res.status(200).json({
              success: true,
              message: "Post Unliked",
            });
          } else {
            post.likes.push(req.user._id);
      
            await post.save();
      
            return res.status(200).json({
              success: true,
              message: "Post Liked",
            });
          }
        } catch (error) {
          res.status(500).json({
            success: false,
            message: error.message,
          });
        }
      };
      