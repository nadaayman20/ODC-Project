const router = require("express").Router()
const Building = require('../app/controller/building.controller')
// const {auth,authUrl} = require("../app/middleware/auth.middleware")

router.post("/addBuilding", Building.addBuilding)





module.exports = router