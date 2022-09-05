const {publishBlog, deleteBlog}=require("../controllers/blogController")
const express=require("express");
const  isAuthenticated  = require("../middleware/auth");
const router = express.Router();

router.route('/publish/blog').post(isAuthenticated,publishBlog)
router.route('/delete/blog/:id').delete(isAuthenticated,deleteBlog)


module.exports = router;