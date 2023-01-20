const buildModel = require("../../db/models/projects.model")
const myHelper = require("../../app/helper")
const fs = require("fs")

class Projects{
  static addProject = async(req,res) => {
        try{
            // console.log(req.body)
            const projectName = new buildModel(req.body)
            await projectName.save()
            myHelper.resHandler(res, 200, true, projectName, "Projects added successfully")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }

}
    
module.exports = Projects