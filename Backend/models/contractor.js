// const mongoose =require('mongoose')

// const contractorSchema=mongoose.Schema({
//     firstname:{
//         type:String,
//         require:true
//     },
//     lastname:{
//         type:String,
//         require:true
//     },
//     number:{
//         type:String,
//         require:true
//     },
//     password:{
//         type:String,
//         require:true
//     },
    
// },{timestamps:true})

// const newlabourSchema=mongoose.Schema({
//     firstName:{
//         type:String,
//         require:true
//     },
//     lastName:{
//         type:String,
//         require:true
//     },
//     phoneNumber:{
//         type:String,
//         require:true
//     },
//     location:{
//         type:String,
//         require:false
//     }
    
// },{timestamps:true})



// module.exports=mongoose.model("user",contractorSchema)
// const mongoose = require('mongoose');

// const contractorSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true
//     },
//     lastName: {
//         type: String,
//         required: true
//     },
//     number: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// }, { timestamps: true });

// const newlabourSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true
//     },
//     lastName: {
//         type: String,
//         required: true
//     },
//     phoneNumber: {
//         type: String,
//         required: true
//     },
//     location: {
//         type: String,
//         required: false
//     }
// }, { timestamps: true });

// const Contractor = mongoose.model("Contractor", contractorSchema);
// const NewLabour = mongoose.model("NewLabour", newlabourSchema);

// module.exports = {
//     Contractor,
//     NewLabour
// };
const mongoose = require('mongoose');

const contractorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

const newLabourSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: false
    }
}, { timestamps: true });

const Contractor = mongoose.model("Contractor", contractorSchema);
const NewLabour = mongoose.model("NewLabour", newLabourSchema);

module.exports = {
    Contractor: Contractor,
    NewLabour: NewLabour
};
