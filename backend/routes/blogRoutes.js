const {publishBlog}=require("../controllers/blogController")
const express=require("express");
const  isAuthenticated  = require("../middleware/auth");
const router = express.Router();

router.route('/publish/blog').post(isAuthenticated,publishBlog)



module.exports = router;