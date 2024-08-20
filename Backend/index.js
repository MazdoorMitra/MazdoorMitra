
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const contractorRoutes = require('./routes/contractorRoutes'); // Ensure this path is correct
const labourerRoutes=require('./routes/labourRoutes')

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const PORT = process.env.PORT || 5000;
const Contractor = require('./models/contractor'); // Adjust the path as needed


// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const mongoURI = 'mongodb+srv://vinayakrajqaz:Y0Q3txlwATPfymCs@cluster0.5wxcd8s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
    addPhoneNumberToExistingLabourers(); // Ensure this function runs after connection is successful
  })
  .catch(err => console.log('MongoDB connection error:', err));

// Function to add default phone numbers to existing labourers
async function updateExistingLabourers() {
  try {
    const contractors = await Contractor.find();

    for (const contractor of contractors) {
      for (const project of contractor.projects) {
        for (const labourer of project.labourers) {
          if (labourer.name === undefined) labourer.name = 'Unknown';
          if (labourer.location === undefined) labourer.location = 'Unknown Location';
          if (labourer.jobType === undefined) labourer.jobType = 'Unknown Job Type';
          if (labourer.wage === undefined) labourer.wage = 0;
          if (labourer.phoneNumber === undefined) labourer.phoneNumber = 0;
        }
      }
      await contractor.save();
    }

    console.log('Existing labourers updated successfully.');
  } catch (error) {
    console.error('Error updating existing labourers:', error);
  }
}

// Call the update function
updateExistingLabourers();


// Routes
app.use('/api/contractors', contractorRoutes);
app.use('/api/chat', contractorRoutes); // Make sure you have appropriate routes for chat
app.use('/api/labourers', labourerRoutes);

// Socket.io logic
io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('sendMessage', (message) => {
    io.emit('receiveMessage', message); // Broadcast the message to all clients
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
