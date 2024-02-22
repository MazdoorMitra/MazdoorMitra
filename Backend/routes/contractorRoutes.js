const express=require('express');
const { signup, signin ,newlabour} = require('../controllers/contractorController');
const { getLabourNames } = require('../controllers/contractorController'); // Import getLabourNames functio

const contractorRouter=express.Router();

contractorRouter.post("/signup", signup);

contractorRouter.post("/signin", signin)

contractorRouter.post("/newlabour",newlabour)

contractorRouter.get("/labours", getLabourNames);


module.exports=contractorRouter;