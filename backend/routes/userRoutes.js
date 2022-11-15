const {
    registerUser,loginUser, logoutUser,getUser,
    updateMyProfile, updatePassword, getMyPosts,
    getUserProfile,
    getAllUsers,followUser}=require("../controllers/userController")
const express=require("express");
const isAuthenticated = require("../middleware/auth");
const router = express.Router();

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').get(logoutUser)
router.route('/me').get(isAuthenticated,getUser)
router.route('/updateMyProfile').put(isAuthenticated,updateMyProfile)
router.route('/updateMyPassword').put(isAuthenticated,updatePassword)
router.route("/myPosts").get(isAuthenticated,getMyPosts)
router.route("/user/:id").get(isAuthenticated,getUserProfile)
router.route("/users").get(isAuthenticated,getAllUsers)
router.route("/follow/:id").get(isAuthenticated,followUser)

module.exports = router;