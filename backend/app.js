const express=require("express")
const app=express()
const userRoutes=require("./routes/userRoutes")
const blogRoutes=require("./routes/blogRoutes")
app.use(express.json())

app.use("/api/v1",userRoutes)
app.use("/api/v1/",blogRoutes)






module.exports=app 