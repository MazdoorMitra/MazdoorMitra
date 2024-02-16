const mongoose =require('mongoose')

const contractorSchema=mongoose.Schema({
    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    number:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    
},{timestamps:true})

module.exports=mongoose.model("user",contractorSchema)