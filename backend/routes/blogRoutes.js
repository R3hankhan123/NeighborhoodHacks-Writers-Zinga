const {publishBlog, deleteBlog, updateBlog,likeAndUnlikePost,commentOnBlog, getUserFollowingPosts, getAllPosts}=require("../controllers/blogController")
const express=require("express");
const  isAuthenticated  = require("../middleware/auth");
const router = express.Router();

router.route('/publish/blog').post(isAuthenticated,publishBlog)
router.route('/delete/blog/:id').delete(isAuthenticated,deleteBlog)
router.route('/update/blog/:id').put(isAuthenticated,updateBlog)
router.route("/post/:id").get(isAuthenticated,likeAndUnlikePost)
router.route("/post/comments/:id").put(isAuthenticated,commentOnBlog)
router.route("/posts").get(isAuthenticated,getUserFollowingPosts)
router.route("/allPosts").get(isAuthenticated,getAllPosts)


module.exports = router;