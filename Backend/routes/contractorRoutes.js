const express = require('express');
const router = express.Router();
const Contractor = require('../models/contractor');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Chat = require('../models/chat'); 
const mongoose = require('mongoose');
const twilioClient = require('../twilioConfig');
// Register
router.post('/signup', async (req, res) => {
    const { firstName, lastName, phoneNumber, password } = req.body;
    try {
        const contractor = new Contractor({ firstName, lastName, phoneNumber, password });
        await contractor.save();
        res.status(201).json({ message: 'Contractor registered successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    const { phoneNumber, password } = req.body;
    try {
        const contractor = await Contractor.findOne({ phoneNumber });
        if (!contractor) {
            return res.status(404).json({ message: 'Contractor not found' });
        }
        const isMatch = await contractor.matchPassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: contractor._id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.status(200).json({ token, contractor });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get Contractor Dashboard

// Dashboard route to fetch contractor data
router.get('/dashboard', async (req, res) => {
    const { id } = req.query;
  
    try {
      const contractor = await Contractor.findById(id).select('-password');
      if (!contractor) {
        return res.status(404).json({ message: 'Contractor not found' });
      }
  
      res.json({ contractor });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });
// routes/contractors.js
router.post('/populate-data', async (req, res) => {
    const { contractorId, orders, labourers } = req.body;
  
    try {
      const contractor = await Contractor.findById(contractorId);
      if (!contractor) {
        return res.status(404).json({ message: 'Contractor not found' });
      }
  
      contractor.orders = orders;
      contractor.labourers = labourers;
  
      await contractor.save();
  
      res.json({ message: 'Data populated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });
// Create a new project for a contractor
router.post('/projects', async (req, res) => {
  const { contractorId, projectName, projectDescription, supervisorName, contactDetailSupervisor } = req.body;

  try {
    const contractor = await Contractor.findById(contractorId);
    if (!contractor) {
      return res.status(404).json({ message: 'Contractor not found' });
    }

    const newProject = {
      projectName,
      projectDescription,
      supervisorName,
      contactDetailSupervisor,
      orders: [],
      labourers: [],
    };

    contractor.projects.push(newProject);
    await contractor.save();

    res.status(201).json({ message: 'Project added successfully', project: newProject });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add an order to a project
router.post('/projects/:projectId/orders', async (req, res) => {
  const { contractorId, date, customer, amount, paymentMethod, transaction } = req.body;
  const { projectId } = req.params;

  try {
    const contractor = await Contractor.findById(contractorId);
    if (!contractor) {
      return res.status(404).json({ message: 'Contractor not found' });
    }

    const project = contractor.projects.id(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    const newOrder = {
      id: project.orders.length,
      date,
      customer,
      amount,
      paymentMethod,
      transaction,
    };

    project.orders.push(newOrder);
    await contractor.save();

    res.status(201).json({ message: 'Order added successfully', order: newOrder });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// // Add a labourer to a project
// router.post('/projects/:projectId/labourers', async (req, res) => {
//   const { contractorId, name, location, jobType, wage, phoneNumber } = req.body;
//   const { projectId } = req.params;

//   try {
//     const contractor = await Contractor.findById(contractorId);
//     if (!contractor) {
//       return res.status(404).json({ message: 'Contractor not found' });
//     }

//     const project = contractor.projects.id(projectId);
//     if (!project) {
//       return res.status(404).json({ message: 'Project not found' });
//     }

//     const newLabourer = {
//       name,
//       location,
//       jobType,
//       wage,
//       phoneNumber
//     };

//     project.labourers.push(newLabourer);
//     await contractor.save();

//     res.status(201).json({ message: 'Labourer added successfully', labourer: newLabourer });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// router.post('/projects/:projectId/labourers', async (req, res) => {
//   const { contractorId, name, location, jobType, wage, phoneNumber } = req.body;
//   const { projectId } = req.params;

//   if (!name || !location || !jobType || !wage || !phoneNumber) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   try {
//     const contractor = await Contractor.findById(contractorId);
//     if (!contractor) {
//       return res.status(404).json({ message: 'Contractor not found' });
//     }

//     const project = contractor.projects.id(projectId);
//     if (!project) {
//       return res.status(404).json({ message: 'Project not found' });
//     }

//     const newLabourer = {
//       name,
//       location,
//       jobType,
//       wage,
//       phoneNumber
//     };

//     project.labourers.push(newLabourer);
//     await contractor.save();

//     res.status(201).json({ message: 'Labourer added successfully', labourer: newLabourer });
//   } catch (error) {
//     console.error('Error adding labourer:', error);
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// });


//Main Code
// router.post('/projects/:projectId/labourers', async (req, res) => {
//   const { contractorId, name, location, jobType, wage, phoneNumber } = req.body;
//   const { projectId } = req.params;

//   try {
//     const contractor = await Contractor.findById(contractorId);
//     if (!contractor) {
//       return res.status(404).json({ message: 'Contractor not found' });
//     }

//     const project = contractor.projects.id(projectId);
//     if (!project) {
//       return res.status(404).json({ message: 'Project not found' });
//     }

//     // Create new labourer object with default values for missing fields
//     const newLabourer = {
//       name: name || 'Unknown', // Default value if name is missing
//       location: location || 'Unknown Location', // Default value if location is missing
//       jobType: jobType || 'Unknown Job Type', // Default value if jobType is missing
//       wage: wage || 0, // Default value if wage is missing
//       phoneNumber: phoneNumber || 0 // Default value if phoneNumber is missing
//     };

//     project.labourers.push(newLabourer);
//     await contractor.save();

//     res.status(201).json({ message: 'Labourer added successfully', labourer: newLabourer });
//   } catch (error) {
//     console.error('Error adding labourer:', error);
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// });


router.post('/projects/:projectId/labourers', async (req, res) => {
  const { contractorId, name, location, jobType, wage, phoneNumber } = req.body;
  const { projectId } = req.params;

  try {
    const contractor = await Contractor.findById(contractorId);
    if (!contractor) {
      return res.status(404).json({ message: 'Contractor not found' });
    }

    const project = contractor.projects.id(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Create new labourer object with default values for missing fields
    const newLabourer = {
      name: name || 'Unknown',
      location: location || 'Unknown Location',
      jobType: jobType || 'Unknown Job Type',
      wage: wage || 0,
      phoneNumber: phoneNumber || 0
    };

    project.labourers.push(newLabourer);
    await contractor.save();

    // Find the newly added labourer to get the ID
    const addedLabourer = project.labourers[project.labourers.length - 1];

    // Send an SMS with the labourer ID, ensuring phoneNumber is valid
    if (phoneNumber && phoneNumber !== 0) {
      const messageBody = `Hello ${newLabourer.name}, your Labourer ID is ${addedLabourer._id}. Please keep it safe for future reference.`;

      await twilioClient.messages.create({
        body: messageBody,
        from: +12513094674, // Ensure twilioPhoneNumber is correctly defined
        to: `+${phoneNumber}` // Ensure the phone number is in the correct format
      });

      return res.status(201).json({ message: 'Labourer added successfully and SMS sent', labourer: addedLabourer });
    }

    res.status(201).json({ message: 'Labourer added successfully but SMS not sent due to missing or invalid phone number', labourer: addedLabourer });
  } catch (error) {
    console.error('Error adding labourer and sending SMS:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// router.post('/projects/:projectId/labourers', async (req, res) => {
//   const { contractorId, name, location, jobType, wage, phoneNumber } = req.body;
//   const { projectId } = req.params;

//   console.log('Received data:', req.body); // Debugging line

//   try {
//     const contractor = await Contractor.findById(contractorId);
//     if (!contractor) {
//       return res.status(404).json({ message: 'Contractor not found' });
//     }

//     const project = contractor.projects.id(projectId);
//     if (!project) {
//       return res.status(404).json({ message: 'Project not found' });
//     }

//     if (!phoneNumber) {
//       return res.status(400).json({ message: 'phoneNumber is required' });
//     }

//     // Ensure phoneNumber is a string
//     const newLabourer = {
//       name,
//       location,
//       jobType,
//       wage,
//       phoneNumber: String(phoneNumber)  // Ensure it's a string
//     };

//     project.labourers.push(newLabourer);
//     await contractor.save();

//     // Find the newly added labourer to get the ID
//     const addedLabourer = project.labourers[project.labourers.length - 1];

//     // Send an SMS with the labourer ID
//     const messageBody = `Hello ${name}, your Labourer ID is ${addedLabourer._id}. Please keep it safe for future reference.`;

//     await twilioClient.messages.create({
//       body: messageBody,
//       from: process.env.TWILIO_PHONE_NUMBER,
//       to: `+${addedLabourer.phoneNumber}`  // Ensure the phone number is in the correct format
//     });

//     res.status(201).json({ message: 'Labourer added successfully and SMS sent', labourer: addedLabourer });
//   } catch (error) {
//     console.error('Error adding labourer and sending SMS:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });




// Fetch all projects for a contractor
router.get('/projects', async (req, res) => {
  const { contractorId } = req.query;

  try {
    const contractor = await Contractor.findById(contractorId).select('projects');
    if (!contractor) {
      return res.status(404).json({ message: 'Contractor not found' });
    }

    res.json({ projects: contractor.projects });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});
// Fetch all orders for a specific project
router.get('/projects/:projectId/orders', async (req, res) => {
  const { contractorId } = req.query;
  const { projectId } = req.params;

  try {
    const contractor = await Contractor.findById(contractorId).select('projects');
    if (!contractor) {
      return res.status(404).json({ message: 'Contractor not found' });
    }

    const project = contractor.projects.id(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json({ orders: project.orders });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});
// Fetch all labourers for a specific project
router.get('/projects/:projectId/labourers', async (req, res) => {
  const { contractorId } = req.query;
  const { projectId } = req.params;

  try {
    const contractor = await Contractor.findById(contractorId).select('projects');
    if (!contractor) {
      return res.status(404).json({ message: 'Contractor not found' });
    }

    const project = contractor.projects.id(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json({ labourers: project.labourers });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Fetch orders of a project
router.get('/projects/:projectId/orders', async (req, res) => {
  const { contractorId } = req.query;
  const { projectId } = req.params;

  try {
      const contractor = await Contractor.findById(contractorId);
      if (!contractor) {
          return res.status(404).json({ message: 'Contractor not found' });
      }

      const project = contractor.projects.id(projectId);
      if (!project) {
          return res.status(404).json({ message: 'Project not found' });
      }

      res.json({ orders: project.orders });
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
});

// Fetch labourers of a project
router.get('/projects/:projectId/labourers', async (req, res) => {
  const { contractorId } = req.query;
  const { projectId } = req.params;

  try {
      const contractor = await Contractor.findById(contractorId);
      if (!contractor) {
          return res.status(404).json({ message: 'Contractor not found' });
      }

      const project = contractor.projects.id(projectId);
      if (!project) {
          return res.status(404).json({ message: 'Project not found' });
      }

      res.json({ labourers: project.labourers });
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
});


// // Mark attendance for a labourer in a project
// router.post('/projects/:projectId/labourers/:labourerId/attendance', async (req, res) => {
//   const { contractorId } = req.body;
//   const { projectId, labourerId } = req.params;

//   try {
//     const contractor = await Contractor.findById(contractorId);
//     if (!contractor) {
//       return res.status(404).json({ message: 'Contractor not found' });
//     }

//     const project = contractor.projects.id(projectId);
//     if (!project) {
//       return res.status(404).json({ message: 'Project not found' });
//     }

//     const labourer = project.labourers.id(labourerId);
//     if (!labourer) {
//       return res.status(404).json({ message: 'Labourer not found' });
//     }

//     const attendanceRecord = {
//       date: new Date(),
//       marked: true,
//     };

//     labourer.attendance.push(attendanceRecord);
//     await contractor.save();

//     res.status(201).json({
//       message: 'Attendance marked successfully',
//       labourer: {
//         name: labourer.name,
//         attendance: labourer.attendance,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// router.post('/attendance/:laborerId', async (req, res) => {
//   const { laborerId } = req.params;
//   const { date, status } = req.body;

//   try {
//     const laborer = await Laborer.findById(laborerId);
//     if (!laborer) {
//       return res.status(404).json({ message: 'Laborer not found' });
//     }

//     // Update attendance record
//     laborer.attendance.push({ date, status });
//     await laborer.save();

//     res.status(200).json({ message: 'Attendance updated', laborer });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error });
//   }
// });
// router.post('/attendance', async (req, res) => {
//   const { projectId, contractorId, date, attendance } = req.body;

//   try {
//     // Iterate through each attendance entry and update or create it
//     for (let entry of attendance) {
//       const { laborerId, attendance: status, timestamp } = entry;

//       // Find or create attendance record
//       await Attendance.updateOne(
//         { projectId, contractorId, laborerId, date },
//         { $set: { attendance: status, timestamp } },
//         { upsert: true } // Create if not exists
//       );
//     }

//     res.status(200).send('Attendance updated successfully!');
//   } catch (error) {
//     console.error('Error updating attendance:', error);
//     res.status(500).send('Error updating attendance');
//   }
// });

// // routes/contractors.js

// Update attendance for each labourer in a project
router.post('/projects/:projectId/attendance', async (req, res) => {
  const { contractorId, date, attendance } = req.body;
  const { projectId } = req.params;

  try {
    const contractor = await Contractor.findById(contractorId);
    if (!contractor) {
      return res.status(404).json({ message: 'Contractor not found' });
    }

    const project = contractor.projects.id(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Iterate through each attendance entry and update it
    for (let entry of attendance) {
      const { laborerId, status } = entry;

      // Find the labourer and update the attendance record
      const labourer = project.labourers.id(laborerId);
      if (labourer) {
        labourer.attendance.push({ date, status });
      } else {
        return res.status(404).json({ message: `Labourer with ID ${laborerId} not found` });
      }
    }

    await contractor.save();
    res.status(200).json({ message: 'Attendance updated successfully', project });
  } catch (error) {
    console.error('Error updating attendance:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

//Chat Application
router.post('/send/:contractorId/:projectId', async (req, res) => {
  const { contractorId, projectId } = req.params;
  const { message } = req.body;
  try {
    const contractor = await Contractor.findById(contractorId);
    if (!contractor) {
      return res.status(404).json({ message: 'Contractor not found' });
    }
    const project = contractor.projects.id(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    const labourerIds = project.labourers.map(labourer => labourer._id);

    for (const labourerId of labourerIds) {
      const newMessage = new Chat({
        senderId: contractorId,
        receiverId: labourerId,
        content: message,
      });
      await newMessage.save();
    }

    res.status(200).json({ message: 'Message sent to all labourers' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});
router.get('/:contractorId/:projectId', async (req, res) => {
  try {
    const { contractorId, projectId } = req.params;
    console.log('Fetching messages for:', contractorId, projectId);

    // Convert string IDs to ObjectId using mongoose.Types.ObjectId
    const senderId = mongoose.Types.ObjectId(contractorId);
    const receiverId = mongoose.Types.ObjectId(projectId);

    console.log('Sender ID:', senderId);
    console.log('Receiver ID:', receiverId);

    // Fetch messages where either senderId or receiverId matches
    const messages = await Chat.find({
      $or: [
        { senderId: senderId, receiverId: receiverId },
        { senderId: receiverId, receiverId: senderId }
      ]
    }).sort({ timestamp: 1 });

    console.log('Messages found:', messages);
    res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});
router.get('/')
  
module.exports = router;
