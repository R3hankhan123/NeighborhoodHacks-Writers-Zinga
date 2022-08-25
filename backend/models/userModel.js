const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")
const bcrypt = require("bcryptjs");


const userSchema= new mongoose.Schema({
    name:{
        type:String},
    email:{
        type:String},
    password:{
        type:String},
})

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
})


userSchema.methods.getJWTToken=function(){
    return jwt.sign({id:this._id},"alphabetagammatheta",
        {expiresIn:"5d"})
}
userSchema.methods.comparePassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

module.exports=mongoose.model("User",userSchema)