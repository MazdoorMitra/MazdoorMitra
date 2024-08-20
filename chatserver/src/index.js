// // // // // // import {createServer} from "http"
// // // // // // import { Server } from "socket.io"
// // // // // // import {v4 as uuidv4 } from "uuid"
// // // // // // const httpServer=createServer();
// // // // // // const io=new Server(httpServer,{
// // // // // //     cors:{
// // // // // //         origin:"http://localhost:3000",
// // // // // //         methods:["GET","POST"],
// // // // // //     }, 
// // // // // // });

// // // // // // io.use((socket,next)=>{
// // // // // //     const username=socket.handshake.auth.username;
// // // // // //     if(!username){
// // // // // //         return next(new Error("Invalid UserName"))  
// // // // // //     }
// // // // // //     socket.username=username
// // // // // //     socket.userId= uuidv4();
// // // // // //     next();
// // // // // // })

// // // // // // io.on("Connection",async (socket)=>{
// // // // // //     socket.emit("Session",{userId:socket.userId,username:socket.username})


// // // // // // });

// // // // // // console.log("Listening to Port....")
// // // // // // httpServer.listen(5000)

// // // // // import { createServer } from "http";
// // // // // import { Server } from "socket.io";
// // // // // import { v4 as uuidv4 } from "uuid";

// // // // // const httpServer = createServer();
// // // // // const io = new Server(httpServer, {
// // // // //   cors: {
// // // // //     origin: "http://localhost:3000",
// // // // //     methods: ["GET", "POST"],
// // // // //   },
// // // // // });

// // // // // io.use((socket, next) => {
// // // // //   const username = socket.handshake.auth.username;
// // // // //   if (!username) {
// // // // //     return next(new Error("Invalid Username"));
// // // // //   }
// // // // //   socket.username = username;
// // // // //   socket.userId = uuidv4();
// // // // //   next();
// // // // // });

// // // // // io.on("connection", async (socket) => {
// // // // //   socket.emit("session", { userId: socket.userId, username: socket.username });

// // // // //   socket.on("message", (message) => {
// // // // //     io.emit("message", { user: socket.username, text: message });
// // // // //   });

// // // // //   socket.on("disconnect", () => {
// // // // //     console.log(`${socket.username} disconnected`);
// // // // //   });
// // // // // });

// // // // // console.log("Listening to Port 5000...");
// // // // // httpServer.listen(5000);

// // // // const http = require('http');
// // // // const { Server } = require('socket.io');
// // // // const { v4: uuidv4 } = require('uuid');

// // // // const httpServer = http.createServer();
// // // // const io = new Server(httpServer, {
// // // //   cors: {
// // // //     origin: 'http://localhost:3000',
// // // //     methods: ['GET', 'POST'],
// // // //   },
// // // // });

// // // // io.use((socket, next) => {
// // // //   const username = socket.handshake.auth.username;
// // // //   if (!username) {
// // // //     return next(new Error('Invalid Username'));
// // // //   }
// // // //   socket.username = username;
// // // //   socket.userId = uuidv4();
// // // //   next();
// // // // });

// // // // io.on('connection', async (socket) => {
// // // //   socket.emit('session', { userId: socket.userId, username: socket.username });

// // // //   socket.on('message', (message) => {
// // // //     io.emit('message', { user: socket.username, text: message });
// // // //   });

// // // //   socket.on('disconnect', () => {
// // // //     console.log(`${socket.username} disconnected`);
// // // //   });
// // // // });

// // // // console.log('Listening to Port 5000...');
// // // // httpServer.listen(5000);



// // // //Working Code Without Database

// // // const http = require('http');
// // // const { Server } = require('socket.io');
// // // const { v4: uuidv4 } = require('uuid');

// // // const httpServer = http.createServer();
// // // const io = new Server(httpServer, {
// // //   cors: {
// // //     origin: 'http://localhost:3000',
// // //     methods: ['GET', 'POST'],
// // //   },
// // // });

// // // // Store users in a map to manage multiple users in different rooms
// // // const users = new Map();

// // // io.use((socket, next) => {
// // //   const username = socket.handshake.auth.username;
// // //   if (!username) {
// // //     return next(new Error('Invalid Username'));
// // //   }
// // //   socket.username = username;
// // //   socket.userId = uuidv4();
// // //   users.set(socket.userId, socket.username); // Store user in map
// // //   next();
// // // });

// // // io.on('connection', (socket) => {
// // //   socket.emit('session', { userId: socket.userId, username: socket.username });

// // //   socket.on('join', (roomId) => {
// // //     socket.join(roomId); // Join a room based on roomId
// // //     io.to(roomId).emit('message', { user: 'system', text: `${socket.username} has joined!` });
// // //   });

// // //   socket.on('message', (message, roomId) => {
// // //     io.to(roomId).emit('message', { user: socket.username, text: message });
// // //   });

// // //   socket.on('disconnect', () => {
// // //     users.delete(socket.userId); // Remove user from map on disconnect
// // //     console.log(`${socket.username} disconnected`);
// // //   });
// // // });

// // // const PORT = 5000;
// // // httpServer.listen(PORT, () => {
// // //   console.log(`Listening on port ${PORT}`);
// // // });



// // //Perfect Code 

// // const http = require('http');
// // const { Server } = require('socket.io');
// // const mongoose = require('mongoose');
// // const { v4: uuidv4 } = require('uuid');

// // // MongoDB setup
// // mongoose.connect('mongodb+srv://vinayakrajqaz:V06LBCyj0cRRJYax@cluster0.wlc4qvg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });
// // const Message = mongoose.model('Message', {
// //   roomId: String,
// //   user: String,
// //   text: String,
// //   createdAt: { type: Date, default: Date.now },
// // });

// // const httpServer = http.createServer();
// // const io = new Server(httpServer, {
// //   cors: {
// //     origin: 'http://localhost:3000',
// //     methods: ['GET', 'POST'],
// //   },
// // });

// // io.use((socket, next) => {
// //   const username = socket.handshake.auth.username;
// //   if (!username) {
// //     return next(new Error('Invalid Username'));
// //   }
// //   socket.username = username;
// //   socket.userId = uuidv4();
// //   next();
// // });

// // io.on('connection', async (socket) => {
// //   socket.emit('session', { userId: socket.userId, username: socket.username });

// //   socket.on('join', (roomId) => {
// //     socket.join(roomId);
// //     io.to(roomId).emit('message', { user: 'system', text: `${socket.username} has joined!` });

// //     // Retrieve messages from MongoDB and send to the client
// //     Message.find({ roomId })
// //       .sort('createdAt')
// //       .then((messages) => {
// //         socket.emit('messageHistory', messages);
// //       })
// //       .catch((err) => console.error('Error fetching messages:', err));
// //   });

// //   socket.on('message', (message, roomId) => {
// //     // Save message to MongoDB
// //     const newMessage = new Message({ roomId, user: socket.username, text: message });
// //     newMessage.save().catch((err) => console.error('Error saving message:', err));

// //     // Broadcast message to all clients in the room
// //     io.to(roomId).emit('message', { user: socket.username, text: message });
// //   });

// //   socket.on('disconnect', () => {
// //     console.log(`${socket.username} disconnected`);
// //   });
// // });

// // const PORT = 5000;
// // httpServer.listen(PORT, () => {
// //   console.log(`Listening on port ${PORT}`);
// // });


const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

mongoose.connect('mongodb+srv://vinayakrajqaz:V06LBCyj0cRRJYax@cluster0.wlc4qvg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const Message = mongoose.model('Message', {
  roomId: String,
  user: String,
  text: String,
  createdAt: { type: Date, default: Date.now },
});

const httpServer = http.createServer();
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

const users = {}; // Track users and their rooms

io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  if (!username) {
    return next(new Error('Invalid Username'));
  }
  socket.username = username;
  socket.userId = uuidv4();
  next();
});

io.on('connection', async (socket) => {
  socket.emit('session', { userId: socket.userId, username: socket.username });

  socket.on('join', (roomId) => {
    socket.join(roomId);
    if (!users[socket.username]) {
      users[socket.username] = new Set();
    }
    users[socket.username].add(roomId);
    io.to(roomId).emit('message', { user: 'system', text: `${socket.username} has joined!` });

    Message.find({ roomId })
      .sort('createdAt')
      .then((messages) => {
        socket.emit('messageHistory', messages);
      })
      .catch((err) => console.error('Error fetching messages:', err));
  });

  socket.on('message', (message, roomId) => {
    const newMessage = new Message({ roomId, user: socket.username, text: message });
    newMessage.save().catch((err) => console.error('Error saving message:', err));

    io.to(roomId).emit('message', { user: socket.username, text: message });
  });

  socket.on('disconnect', () => {
    if (users[socket.username]) {
      users[socket.username].forEach(room => {
        io.to(room).emit('message', { user: 'system', text: `${socket.username} has left!` });
      });
      delete users[socket.username];
    }
  });
});

const PORT = 5000;
httpServer.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});






// const http = require('http');
// const { Server } = require('socket.io');
// const mongoose = require('mongoose');
// const { v4: uuidv4 } = require('uuid');

// // MongoDB setup
// mongoose.connect('mongodb+srv://vinayakrajqaz:V06LBCyj0cRRJYax@cluster0.wlc4qvg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const Message = mongoose.model('Message', {
//   roomId: String,
//   user: String,
//   text: String,
//   createdAt: { type: Date, default: Date.now },
// });

// const Group = mongoose.model('Group', {
//   name: String,
//   users: [{ username: String, mobile: String }],
// });

// const httpServer = http.createServer();
// const io = new Server(httpServer, {
//   cors: {
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST'],
//   },
// });

// const users = {}; // Track users and their rooms

// io.use((socket, next) => {
//   const username = socket.handshake.auth.username;
//   if (!username) {
//     return next(new Error('Invalid Username'));
//   }
//   socket.username = username;
//   socket.userId = uuidv4();
//   next();
// });

// io.on('connection', async (socket) => {
//   socket.emit('session', { userId: socket.userId, username: socket.username });

//   socket.on('join', (roomId) => {
//     socket.join(roomId);
//     if (!users[socket.username]) {
//       users[socket.username] = new Set();
//     }
//     users[socket.username].add(roomId);
//     io.to(roomId).emit('message', { user: 'system', text: `${socket.username} has joined!` });

//     Message.find({ roomId })
//       .sort('createdAt')
//       .then((messages) => {
//         socket.emit('messageHistory', messages);
//       })
//       .catch((err) => console.error('Error fetching messages:', err));
//   });

//   socket.on('message', (message, roomId) => {
//     const newMessage = new Message({ roomId, user: socket.username, text: message });
//     newMessage.save().catch((err) => console.error('Error saving message:', err));

//     io.to(roomId).emit('message', { user: socket.username, text: message });
//   });

//   socket.on('disconnect', () => {
//     if (users[socket.username]) {
//       users[socket.username].forEach(room => {
//         io.to(room).emit('message', { user: 'system', text: `${socket.username} has left!` });
//       });
//       delete users[socket.username];
//     }
//   });

//   socket.on('createGroup', ({ groupName, users }) => {
//     const newGroup = new Group({ name: groupName, users });
//     newGroup.save()
//       .then(group => {
//         users.forEach(user => {
//           if (!users[user.username]) {
//             users[user.username] = new Set();
//           }
//           users[user.username].add(group._id.toString()); // Add group ID to user's rooms
//         });
//         socket.emit('groupCreated', group);
//       })
//       .catch(err => {
//         console.error('Error creating group:', err);
//         socket.emit('groupCreationError', { error: 'Failed to create group.' });
//       });
//   });

//   socket.on('addGroupUser', ({ groupId, user }) => {
//     Group.findByIdAndUpdate(groupId, { $push: { users: user } }, { new: true })
//       .then(group => {
//         users[user.username].add(groupId); // Add group ID to user's rooms
//         socket.emit('userAddedToGroup', group);
//       })
//       .catch(err => {
//         console.error('Error adding user to group:', err);
//         socket.emit('userAdditionError', { error: 'Failed to add user to group.' });
//       });
//   });
// });

// const PORT = 5000;
// httpServer.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });
