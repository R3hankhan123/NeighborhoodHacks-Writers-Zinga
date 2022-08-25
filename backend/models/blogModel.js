const mongoose=require("mongoose")

const blogSchema=new mongoose.Schema({
    title:String,
    Date:Date.now(),
    author:String,
})


module.exports=mongoose.model("Blog",blogSchema)