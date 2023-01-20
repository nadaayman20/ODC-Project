const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express()
require("../db/connect")
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, "../uploads")))
const userRoutes = require("../routes/user.routes")
const roleRoutes = require("../routes/role.routes")
const urlRoutes = require("../routes/url.routes")
const buildingRoutes = require("../routes/building.routes")
const projectRoutes = require("../routes/projects.routes")
app.use("/api/user/",  userRoutes)
app.use("/api/role/",  roleRoutes)
app.use("/api/url/",  urlRoutes)
app.use("/api/build/",  buildingRoutes)
app.use("/api/project/",  projectRoutes)
app.all("*", (req, res)=> {
    res.status(404).send({
        apisStatus:false,
        message:"Invalid URL",
        data: {}
    })
})
module.exports=app