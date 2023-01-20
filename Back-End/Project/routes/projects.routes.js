const router = require("express").Router()
const Project = require('../app/controller/projects.controller')
// const {auth,authUrl} = require("../app/middleware/auth.middleware")

router.post("/addProject", Project.addProject)





module.exports = router