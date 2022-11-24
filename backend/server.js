const express=require("express")
const app=require("./app")
const mongoose=require("mongoose")
var cors=require('cors');
const cloudinary=require('cloudinary')



cloudinary.config({
    cloud_name: "dnbqfa0qf",
  api_key: "736543861472486",
  api_secret: "XKynZMZVXC0n72GTENSG5h8_5B4"
})

app.use(cors());

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/App",{
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error: ", err.message);
});


app.listen(2000,()=>{
    console.log("Server started at port 2000")
})