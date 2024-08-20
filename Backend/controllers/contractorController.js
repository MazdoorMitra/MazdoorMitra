const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { Contractor } = require('../models/contractor');
const { NewLabour } = require('../models/contractor');
const {Project} =require('../models/contractor')


const SECRET_KEY = "DKJFHJDFKGHDFKJHSKDHFKJSFJK";

const signup = async (req, res) => {
    const { firstname, lastname, number, password } = req.body;
    try {
        const existingUser = await Contractor.findOne({ number: number });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const result = await Contractor.create({
            number: number,
            password: hashPassword,
            firstName: firstname,
            lastName: lastname
        });

        const token = jwt.sign(
            { number: result.number, id: result._id },
            SECRET_KEY
        );

        res.status(201).json({ user: result, token: token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something Went wrong" });
    }
};

const signin = async (req, res) => {
    const { number, password } = req.body;
    try {
        const existingUser = await Contractor.findOne({ number: number });
        if (!existingUser) {
            return res.status(404).json({ message: "User Not Found" });
        }

        const matchPassword = await bcrypt.compare(password, existingUser.password);
        if (!matchPassword) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const token = jwt.sign(
            { number: existingUser.number, id: existingUser._id },
            SECRET_KEY
        );

        res.status(201).json({ user: existingUser, token: token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something Went wrong" });
    }
};



const newlabour = async (req, res) => {
    const { firstName, lastName, phoneNumber, wages, location } = req.body;
    try {
        const existingLabour = await NewLabour.findOne({ phoneNumber: phoneNumber });
        if (existingLabour) {
            return res.status(400).json({ message: "Labor already exists" });
        }

        const newLabour = await NewLabour.create({
            phoneNumber: phoneNumber,
            firstName: firstName,
            lastName: lastName,
            wages: wages,
            location: location,
            
        });

        res.status(201).json({
            message: "New labor created successfully",
            labor: newLabour,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

const getLabourNames = async (req, res) => {
    try {
        const laborers = await NewLabour.find({}, 'firstName lastName');
        res.status(200).json(laborers);
    } catch (error) {
        console.error('Error fetching laborers:', error);
        res.status(500).json({ message: 'Error fetching laborers' });
    }
};

const createProject = async (req, res) => {
    try {
        const { projectName, projectDescription, supervisorName, contactDetails } = req.body;
        const project = await Project.create({
            projectName,
            projectDescription,
            supervisorName,
            contactDetails
        });
        res.status(201).json(project);
    } catch (error) {
        console.error('Error creating project:', error);
        res.status(500).json({ message: 'Error creating project' });
    }
};

const projects = async (req, res) => {
    try {
        const laborers = await Project.find({}, 'projectName');
        res.status(200).json(laborers);
    } catch (error) {
        console.error('Error fetching laborers:', error);
        res.status(500).json({ message: 'Error fetching laborers' });
    }
};

module.exports = { signin, signup,newlabour, getLabourNames,createProject ,projects};
