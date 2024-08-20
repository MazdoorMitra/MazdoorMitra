
const express = require('express');
const router = express.Router();
const Contractor = require('../models/contractor');

// Define route for verifying labourer
router.post('/login', async (req, res) => {
    const { labourerId } = req.body;

    if (!labourerId) {
        return res.status(400).json({ message: 'Labourer ID is required' });
    }

    try {
        // Find the contractor who has the labourer with the given ID
        const contractor = await Contractor.findOne({
            'projects.labourers._id': labourerId // Query to check if labourer ID exists
        }, {
            'projects.$': 1 // Return only the matching project
        });

        if (!contractor) {
            return res.status(404).json({ message: 'Labourer not found' });
        }

        const project = contractor.projects[0];
        const labourer = project.labourers.id(labourerId);

        if (labourer) {
            res.status(200).json({ message: 'Login successful', labourer });
        } else {
            res.status(404).json({ message: 'Labourer not found' });
        }

    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// // Route to get labourer details
// router.get('/details/:labourerId', async (req, res) => {
//     const { labourerId } = req.params;
  
//     try {
//         // Find the contractor who has the labourer with the given ID
//         const contractor = await Contractor.findOne({
//             'projects.labourers._id': labourerId // Query to check if labourer ID exists
//         }, {
//             'projects.$': 1 // Return only the matching project
//         });

//         if (!contractor) {
//             return res.status(404).json({ message: 'Labourer not found' });
//         }

//         const project = contractor.projects[0];
//         const labourer = project.labourers.id(labourerId);

//         if (labourer) {
//             res.status(200).json({
//                 projectName: project.projectName,
//                 attendance: labourer.attendance
//             });
//         } else {
//             res.status(404).json({ message: 'Labourer not found' });
//         }

//     } catch (error) {
//         console.error('Error fetching labourer details:', error);
//         res.status(500).json({ message: 'Server error' });
//     }
// });

// Route to get labourer details
router.get('/details/:labourerId', async (req, res) => {
    const { labourerId } = req.params;
  
    try {
        // Find the contractor who has the labourer with the given ID
        const contractor = await Contractor.findOne({
            'projects.labourers._id': labourerId // Query to check if labourer ID exists
        }, {
            'projects.$': 1, // Return only the matching project
            'contractorName': 1 // Return the contractor's name
        });

        if (!contractor) {
            return res.status(404).json({ message: 'Labourer not found' });
        }

        const project = contractor.projects[0];
        const labourer = project.labourers.id(labourerId);

        if (labourer) {
            res.status(200).json({
                contractorName: contractor.contractorName, // Include contractor's name
                projectName: project.projectName,
                labourerName: labourer.name,
                location: labourer.location,
                jobType: labourer.jobType,
                wage: labourer.wage,
                phoneNumber: labourer.phoneNumber,
                attendance: labourer.attendance
            });
        } else {
            res.status(404).json({ message: 'Labourer not found' });
        }

    } catch (error) {
        console.error('Error fetching labourer details:', error);
        res.status(500).json({ message: 'Server error' });
    }
});




module.exports = router;
