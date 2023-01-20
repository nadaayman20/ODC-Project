const mongoose = require("mongoose")

const buildingSchema = mongoose.Schema({

   buildingID:{
      type:Number, 
      required:true
   },
   floor:[
       {
         type:Number, 
          required:true
        }
       
    ], 
    units:[
        {
         type:Number, 
         required:true
        }
       
    ] 

})
const building = mongoose.model("building", buildingSchema)
module.exports=building