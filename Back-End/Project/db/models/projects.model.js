const mongoose = require("mongoose")

const projectSchema = mongoose.Schema({
   pName:{
      type:String, 
      trim:true,
      minLength: 5,
      required:true
   },
   location:[
        {
            addressType:{
            type:String, 
            trim:true,
            required:true
            },
        }
    ], 
    buildingID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"building"
    },

})
const Project = mongoose.model("Project", projectSchema)
module.exports=Project
