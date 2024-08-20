// // // const express=require('express');
// // // const { mongoose } = require('mongoose');
// // // const userRouter = require('./routes/contractorRoutes');
// // // const bodyParser = require('body-parser');
// // // const contractorRoutes = require('./routes/contractorRoutes');
// // // const cors=require('cors')
// // // // const authRoutes = require('./routes/authRoutes');
// // // // const labourRoutes = require('./routes/labourRoutes');


// // // const app=express();
// // // const db_link="mongodb+srv://vinayakrajqaz:iQkUnxrdkVaUsDQS@cluster0.wqnula8.mongodb.net/?retryWrites=true&w=majority"
// // // mongoose.connect(db_link)
// // // .then(function (db){
// // //     console.log("db Connected")
// // // })
// // // .catch(function(err){
// // //     console.log(err)
// // // })

// // // //Middleware
// // // app.use(express.json());
// // // app.use(bodyParser.json());
// // // app.use(cors());

// // // // app.use('/profile', labourRoutes);
// // // // app.use("/contractor",userRouter);
// // // // app.use('/api/auth', authRoutes);
// // // // app.use('/api/labour', labourRoutes);

// // // app.use('/api/contractors', contractorRoutes);

// // // app.get('/',(req,res)=>{
// // //     res.send('<h1>Hello <h1>')
// // // })

// // // app.listen(4000)

// // const express = require('express');
// // const mongoose = require('mongoose');
// // const http = require('http'); 
// // const bodyParser = require('body-parser');
// // const contractorRoutes = require('./routes/contractorRoutes');
// // const cors = require('cors');
// // const app = express();
// // const PORT = process.env.PORT || 5000;
// // const socketIo = require('socket.io');
// // const io = socketIo(server);
// // // Middleware
// // app.use(cors());
// // app.use(bodyParser.json());

// // // Connect to MongoDB
// // mongoose.connect('mongodb+srv://vinayakrajqaz:Y0Q3txlwATPfymCs@cluster0.5wxcd8s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
// //     .then(() => console.log('MongoDB connected'))
// //     .catch(err => console.log(err));

// // // Routes
// // app.use('/api/contractors', contractorRoutes);
// // app.use('/api/chat', contractorRoutes);

// // io.on('connection', (socket) => {
// //     console.log('New client connected');
  
// //     socket.on('sendMessage', (message) => {
// //       io.emit('receiveMessage', message); // Broadcast the message to all clients
// //     });
  
// //     socket.on('disconnect', () => {
// //       console.log('Client disconnected');
// //     });
// //   });


// // app.listen(PORT, () => {
// //     console.log(`Server running on port ${PORT}`);
// // });



// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const contractorRoutes = require('./routes/contractorRoutes');

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://vinayakrajqaz:Y0Q3txlwATPfymCs@cluster0.5wxcd8s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => {
//   console.log('MongoDB connected successfully');
//   const mongoose = require('mongoose');
// const Contractor = require('./models/contractor'); // Adjust the path as needed

// mongoose.connect('mongodb://localhost:27017/yourDatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// async function addPhoneNumberToExistingLabourers() {
//   try {
//     const contractors = await Contractor.find();

//     for (const contractor of contractors) {
//       for (const project of contractor.projects) {
//         for (const labourer of project.labourers) {
//           // Add a default or empty phoneNumber if not already present
//           if (!labourer.phoneNumber) {
//             labourer.phoneNumber = ''; // or set to a default value like '0000000000'
//           }
//         }
//       }
//       await contractor.save();
//     }

//     console.log('Phone numbers updated successfully.');
//   } catch (error) {
//     console.error('Error updating phone numbers:', error);
//   } finally {
//     mongoose.connection.close();
//   }
// }

// addPhoneNumberToExistingLabourers();

// })
//     .catch(err => console.log(err));

// // Routes
// app.use('/api/contractors', contractorRoutes);
// app.use('/api/chat', contractorRoutes);


// async function addPhoneNumberToExistingLabourers() {
//   try {
//     const contractors = await Contractor.find();

//     for (const contractor of contractors) {
//       for (const project of contractor.projects) {
//         for (const labourer of project.labourers) {
//           // Add a default or empty phoneNumber if not already present
//           if (!labourer.phoneNumber) {
//             labourer.phoneNumber = ''; // or set to a default value like '0000000000'
//           }
//         }
//       }
//       await contractor.save();
//     }

//     console.log('Phone numbers updated successfully.');
//   } catch (error) {
//     console.error('Error updating phone numbers:', error);
//   } finally {
//     mongoose.connection.close();
//   }
// }

// addPhoneNumberToExistingLabourers();

// // Socket.io logic
// io.on('connection', (socket) => {
//   console.log('New client connected');

//   socket.on('sendMessage', (message) => {
//     io.emit('receiveMessage', message); // Broadcast the message to all clients
//   });

//   socket.on('disconnect', () => {
//     console.log('Client disconnected');
//   });
// });



// server.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


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
