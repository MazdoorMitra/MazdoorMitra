const express=require('express');
const { signup, signin ,newlabour,createProject,projects} = require('../controllers/contractorController');
const { getLabourNames } = require('../controllers/contractorController'); // Import getLabourNames functio

// const contractorRouter=express.Router();

// contractorRouter.post("/signup", signup);

// contractorRouter.post("/signin", signin)

// contractorRouter.post("/newlabour",newlabour)

// contractorRouter.get("/labours", getLabourNames);

// contractorRouter.post("/newproject",createProject);

// contractorRouter.get("/projects", projects);
const contractorRouter=express.Router();

contractorRouter.post("/signup", signup);

contractorRouter.post("/signin", signin)

contractorRouter.post("/newlabour",newlabour)

contractorRouter.get("/labours", getLabourNames);

contractorRouter.post("/newproject",createProject);

contractorRouter.get("/projects", projects);

module.exports=contractorRouter;