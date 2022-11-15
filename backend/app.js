const express=require("express")
const app=express()
const userRoutes=require("./routes/userRoutes")
const blogRoutes=require("./routes/blogRoutes")
var cors = require('cors');
var cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(express.json())
app.use(cors());


app.use("/api/v1",userRoutes)
app.use("/api/v1/",blogRoutes)






module.exports=app 