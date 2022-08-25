const express=require("express")
const app=require("./app")
const mongoose=require("mongoose")


app.use(express.json())

mongoose.connect("mongodb://localhost:27017/App",{
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error: ", err.message);
});


app.listen(3000,()=>{
    console.log("Server started at port 3000")
})