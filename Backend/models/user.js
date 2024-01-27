const mongoose =require('mongoose')

const UserSchema=mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    number:{
        type:String,
        require:true
    }
},{timestamps:true})

module.exports=mongoose.model("user",UserSchema)