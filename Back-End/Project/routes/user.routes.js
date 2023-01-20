const router = require("express").Router()
const User = require('../app/controller/user.controller')
const {auth,authUrl,authParams} = require("../app/middleware/auth.middleware")


router.post("/addUser", User.addUser)
router.post("/login", User.login)
router.get('/profile/:id',auth, authUrl,authParams, User.userProfile )
router.delete('/deleteprofile/:id',auth, User.deleteprofile )
router.get('/allUser',auth,authUrl, User.allusers )
router.patch("/editme/:id",auth,User.editme)


module.exports = router