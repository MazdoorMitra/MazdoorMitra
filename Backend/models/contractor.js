const mongoose = require('mongoose');

const contractorSchema = new mongoose.Schema({
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

const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    projectDescription: {
        type: String,
        required: true
    },
    supervisorName: {
        type: String,
        required: true
    },
    contactDetails: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Project = mongoose.model("Project", projectSchema);

const Contractor = mongoose.model("Contractor", contractorSchema);
const NewLabour = mongoose.model("NewLabour", newLabourSchema);

module.exports = {
    Contractor: Contractor,
    NewLabour: NewLabour,
    Project:Project
};
