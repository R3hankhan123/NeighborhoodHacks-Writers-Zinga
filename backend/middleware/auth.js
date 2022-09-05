const User=require("../models/userModel")
const jwt=require("jsonwebtoken")

 const isAuthenticated=async (req,res,next)=>{
    const { token } = req.cookies;

    if (!token) {
      res.status(401).json({
        success:false,
        message:"Please login first"
      })
    }
  
    const decodedData = jwt.verify(token,"alphabetagammatheta");
  
    req.user = await User.findById(decodedData.id);
  
    next();
}

module.exports=isAuthenticated
