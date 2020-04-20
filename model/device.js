const mongoose=require('mongoose');

const deviceSchema=mongoose.Schema({
    name:{type:String , required:true , unique:true},
    type:{type:String , required:true},
    status:{type:String , required:true},
    value:{type:Number},
    min:{type:Number},
    max:{type:Number},

    added_date:{
        type:Date,
        default:Date.now()
    }
})

var Devices=mongoose.model('Devices',deviceSchema);
module.exports=Devices;