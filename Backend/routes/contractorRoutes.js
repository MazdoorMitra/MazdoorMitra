const express=require('express');
const { signup, signin } = require('../controllers/contractorController');

const contractorRouter=express.Router();

contractorRouter.post("/signup", signup);

contractorRouter.post("/signin", signin)

module.exports=contractorRouter;