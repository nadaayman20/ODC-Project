const buildModel = require("../../db/models/building.model")
const myHelper = require("../../app/helper")
const fs = require("fs")

class Building{
  static addBuilding = async(req,res) => {
        try{
            // console.log(req.body)
            const buldingName = new buildModel(req.body)
            await buldingName.save()
            myHelper.resHandler(res, 200, true, buldingName, "Building added successfully")
        }
        catch(e){
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }

}
    
module.exports = Building