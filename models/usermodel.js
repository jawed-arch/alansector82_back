const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
    name : { type:String,default:null},
    email : { type:String,default:null},
    contact : { type:Number,default:null},
    enquiry : { type:String,default:null},
    userType : { type:Number,default:2}, //1=admin,2=customer
    status : { type : Boolean,default:true},
    created_at : { type:Date,default:Date.now()}
})

module.exports = new mongoose.model('user',userschema)