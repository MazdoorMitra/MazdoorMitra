

import React, { useState, useEffect, useRef } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import { io } from "socket.io-client";

function Chat({ username, roomId }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io("http://localhost:5000", { auth: { username } });

    socketRef.current.on("session", ({ userId, username }) => {
      console.log(`Session started for user ${username} with ID ${userId}`);
      socketRef.current.emit('join', roomId); // Join 'general' room on session start
    });

    socketRef.current.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socketRef.current.on("messageHistory", (messageHistory) => {
      setMessages(messageHistory);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [username, roomId]);

  function sendMessage() {
    if (message.trim() !== "") {
      socketRef.current.emit("message", message, roomId); // Send message to 'general' room
      setMessage("");
    }
  }

  const isMyMessage = (msgUser) => msgUser === username;

  return (
    <div className='container-fluid d-flex flex-column vh-100'>
      <div className='row flex-grow-1 overflow-auto'>
        <div className='col-12'>
          <div className='d-flex align-items-center py-2'>
            <img 
              src="https://www.flaticon.com/svg/static/icons/svg/924/924915.svg" 
              alt="logo" 
              className='rounded-circle mx-2' 
              width="48" 
              height="40" 
            />
            <h6>Logged in as {username}</h6>
          </div>
          <div className='d-flex flex-column align-items-end p-3' style={{ height: 'calc(100vh - 120px)', overflowY: 'auto' }}>
            {messages.map((msg, index) => (
              <div key={index} className={`w-75 my-1 ${isMyMessage(msg.user) ? 'ml-auto' : 'mr-auto'}`}>
                <div className={`p-2 rounded ${isMyMessage(msg.user) ? 'bg-primary text-white' : 'bg-light'}`}>
                  <strong>{msg.user}: </strong> {msg.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <div className='input-group'>
            <input 
              type="text" 
              className='form-control' 
              name='message' 
              value={message} 
              placeholder='Type Your Message' 
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => (e.key === "Enter" ? sendMessage() : null)}
            />
            <button className='btn btn-primary' onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [roomId, setRoomId] = useState("");

  function handleLogin(username) {
    setLoggedInUser(username);
  }

  function handleJoinRoom() {
    setRoomId('general'); // Join 'general' room
  }

  return (
    <main className='content vh-100'>
      {loggedInUser && roomId ? (
        <Chat username={loggedInUser} roomId={roomId} />
      ) : (
        <Login onLogin={handleLogin} onJoinRoom={handleJoinRoom} />
      )}
    </main>
  );
}

function Login({ onLogin, onJoinRoom }) {
  const [username, setUsername] = useState("");

  function handleLoginClick() {
    if (username.trim() !== "") {
      onLogin(username);
      onJoinRoom();
    }
  }

  return (
    <div className='container mt-3'>
      <div className='card w-100 text-center border-white'>
        <div className='row'>
          <div className='col-12'>
            <h5>Enter Your Name</h5>
          </div>
          <div className='col-4 mx-auto'>
            <div className='d-flex justify-content-center py-1'>
              <input 
                type="text" 
                name="username" 
                value={username} 
                className='form-control mb-3' 
                placeholder='Username' 
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={(e) => (e.key === "Enter" ? handleLoginClick() : null)}
              />
            </div>
            <button className='btn btn-success w-100' onClick={handleLoginClick}>Join</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;





// // import React, { useState, useEffect, useRef } from 'react';
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import "font-awesome/css/font-awesome.css";
// // import { io } from "socket.io-client";

// // function Chat({ username, roomId }) {
// //   const [message, setMessage] = useState("");
// //   const [messages, setMessages] = useState([]);
// //   const socketRef = useRef();

// //   useEffect(() => {
// //     socketRef.current = io("http://localhost:5000", { auth: { username } });

// //     socketRef.current.on("session", ({ userId, username }) => {
// //       console.log(`Session started for user ${username} with ID ${userId}`);
// //       socketRef.current.emit('join', roomId); // Join specified room on session start
// //     });

// //     socketRef.current.on("message", (message) => {
// //       setMessages((prevMessages) => [...prevMessages, message]);
// //     });

// //     socketRef.current.on("messageHistory", (messageHistory) => {
// //       setMessages(messageHistory);
// //     });

// //     return () => {
// //       socketRef.current.disconnect();
// //     };
// //   }, [username, roomId]);

// //   function sendMessage() {
// //     if (message.trim() !== "") {
// //       socketRef.current.emit("message", message, roomId);
// //       setMessage("");
// //     }
// //   }

// //   const isMyMessage = (msgUser) => msgUser === username;

// //   return (
// //     <div className='container-fluid d-flex flex-column vh-100'>
// //       <div className='row flex-grow-1 overflow-auto'>
// //         <div className='col-12'>
// //           <div className='d-flex align-items-center py-2'>
// //             <img 
// //               src="https://www.flaticon.com/svg/static/icons/svg/924/924915.svg" 
// //               alt="logo" 
// //               className='rounded-circle mx-2' 
// //               width="48" 
// //               height="40" 
// //             />
// //             <h6>Logged in as {username}</h6>
// //           </div>
// //           <div className='d-flex flex-column align-items-end p-3' style={{ height: 'calc(100vh - 120px)', overflowY: 'auto' }}>
// //             {messages.map((msg, index) => (
// //               <div key={index} className={`w-75 my-1 ${isMyMessage(msg.user) ? 'ml-auto' : 'mr-auto'}`}>
// //                 <div className={`p-2 rounded ${isMyMessage(msg.user) ? 'bg-primary text-white' : 'bg-light'}`}>
// //                   <strong>{msg.user}: </strong> {msg.text}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //       <div className='row'>
// //         <div className='col-12'>
// //           <div className='input-group'>
// //             <input 
// //               type="text" 
// //               className='form-control' 
// //               name='message' 
// //               value={message} 
// //               placeholder='Type Your Message' 
// //               onChange={(e) => setMessage(e.target.value)}
// //               onKeyDown={(e) => (e.key === "Enter" ? sendMessage() : null)}
// //             />
// //             <button className='btn btn-primary' onClick={sendMessage}>
// //               Send
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // function App() {
// //   const [loggedInUser, setLoggedInUser] = useState("");
// //   const [roomId, setRoomId] = useState("");

// //   function handleLogin(username) {
// //     setLoggedInUser(username);
// //   }

// //   function handleJoinRoom(roomId) {
// //     setRoomId(roomId);
// //   }

// //   return (
// //     <main className='content vh-100'>
// //       {loggedInUser ? (
// //         <div className="container mt-3">
// //           <h5>Welcome, {loggedInUser}!</h5>
// //           <GroupSelector onJoinRoom={handleJoinRoom} />
// //           {roomId && <Chat username={loggedInUser} roomId={roomId} />}
// //         </div>
// //       ) : (
// //         <Login onLogin={handleLogin} />
// //       )}
// //     </main>
// //   );
// // }

// // function GroupSelector({ onJoinRoom }) {
// //   const [room, setRoom] = useState("");
  
// //   function handleRoomSelect() {
// //     if (room.trim() !== "") {
// //       onJoinRoom(room);
// //     }
// //   }

// //   return (
// //     <div className="my-3">
// //       <h6>Select a Group:</h6>
// //       <div className="input-group mb-3">
// //         <input 
// //           type="text" 
// //           className="form-control" 
// //           placeholder="Group Name" 
// //           value={room} 
// //           onChange={(e) => setRoom(e.target.value)}
// //           onKeyDown={(e) => (e.key === "Enter" ? handleRoomSelect() : null)}
// //         />
// //         <button className="btn btn-primary" onClick={handleRoomSelect}>
// //           Join Group
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // function Login({ onLogin }) {
// //   const [username, setUsername] = useState("");

// //   function handleLoginClick() {
// //     if (username.trim() !== "") {
// //       onLogin(username);
// //     }
// //   }

// //   return (
// //     <div className='container mt-3'>
// //       <div className='card w-100 text-center border-white'>
// //         <div className='row'>
// //           <div className='col-12'>
// //             <h5>Enter Your Name</h5>
// //           </div>
// //           <div className='col-4 mx-auto'>
// //             <div className='d-flex justify-content-center py-1'>
// //               <input 
// //                 type="text" 
// //                 name="username" 
// //                 value={username} 
// //                 className='form-control mb-3' 
// //                 placeholder='Username' 
// //                 onChange={(e) => setUsername(e.target.value)}
// //                 onKeyDown={(e) => (e.key === "Enter" ? handleLoginClick() : null)}
// //               />
// //             </div>
// //             <button className='btn btn-success w-100' onClick={handleLoginClick}>Join</button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;


// import React, { useState, useEffect, useRef } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.css";
// import { io } from "socket.io-client";

// function AdminPage() {
//   const [loggedInUser, setLoggedInUser] = useState("");
//   const [newGroupName, setNewGroupName] = useState("");
//   const [newUser, setNewUser] = useState({ username: "", mobile: "" });
//   const [groups, setGroups] = useState([]);
//   const [selectedGroup, setSelectedGroup] = useState(""); // State to hold selected group

//   const socketRef = useRef();

//   useEffect(() => {
//     socketRef.current = io("http://localhost:5000");

//     socketRef.current.on('groupCreated', (group) => {
//       setGroups([...groups, group]);
//     });

//     socketRef.current.on('groupCreationError', (error) => {
//       console.error('Group creation error:', error);
//       // Handle error display or notification
//     });

//     socketRef.current.on('userAddedToGroup', (group) => {
//       const updatedGroups = groups.map(g => g._id === group._id ? group : g);
//       setGroups(updatedGroups);
//     });

//     socketRef.current.on('userAdditionError', (error) => {
//       console.error('User addition error:', error);
//       // Handle error display or notification
//     });

//     return () => {
//       socketRef.current.disconnect();
//     };
//   }, [groups]);

//   function handleCreateGroup() {
//     if (newGroupName.trim() !== "" && newUser.username.trim() !== "" && newUser.mobile.trim() !== "") {
//       socketRef.current.emit('createGroup', { groupName: newGroupName, users: [newUser] });
//       setNewGroupName("");
//       setNewUser({ username: "", mobile: "" });
//     }
//   }

//   function handleAddUserToGroup() {
//     if (selectedGroup && newUser.username.trim() !== "" && newUser.mobile.trim() !== "") {
//       socketRef.current.emit('addGroupUser', { groupId: selectedGroup, user: newUser });
//       setNewUser({ username: "", mobile: "" });
//     }
//   }

//   return (
//     <div className='container mt-3'>
//       <div className='card w-100 text-center border-white'>
//         <div className='row'>
//           <div className='col-12'>
//             <h5>Create New Group</h5>
//           </div>
//           <div className='col-4 mx-auto'>
//             <div className='d-flex justify-content-center py-1'>
//               <input 
//                 type="text" 
//                 name="newGroupName" 
//                 value={newGroupName} 
//                 className='form-control mb-3' 
//                 placeholder='Group Name' 
//                 onChange={(e) => setNewGroupName(e.target.value)}
//               />
//             </div>
//             <div className='d-flex justify-content-center py-1'>
//               <input 
//                 type="text" 
//                 name="newUserUsername" 
//                 value={newUser.username} 
//                 className='form-control mb-3' 
//                 placeholder='Username' 
//                 onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
//               />
//             </div>
//             <div className='d-flex justify-content-center py-1'>
//               <input 
//                 type="text" 
//                 name="newUserMobile" 
//                 value={newUser.mobile} 
//                 className='form-control mb-3' 
//                 placeholder='Mobile Number' 
//                 onChange={(e) => setNewUser({ ...newUser, mobile: e.target.value })}
//               />
//             </div>
//             <button className='btn btn-success w-100' onClick={handleCreateGroup}>Create Group</button>
//           </div>
//         </div>
//       </div>
//       {groups.length > 0 && (
//         <div className='card mt-3 w-100 text-center border-white'>
//           <div className='row'>
//             <div className='col-12'>
//               <h5>Add User to Existing Group</h5>
//             </div>
//             <div className='col-4 mx-auto'>
//               <div className='d-flex justify-content-center py-1'>
//                 <select 
//                   className='form-control mb-3' 
//                   value={selectedGroup} 
//                   onChange={(e) => setSelectedGroup(e.target.value)}
//                 >
//                   <option value=''>Select Group</option>
//                   {groups.map(group => (
//                     <option key={group._id} value={group._id}>{group.name}</option>
//                   ))}
//                 </select>
//               </div>
//               <div className='d-flex justify-content-center py-1'>
//                 <input 
//                   type="text" 
//                   name="newUserUsername" 
//                   value={newUser.username} 
//                   className='form-control mb-3' 
//                   placeholder='Username' 
//                   onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
//                 />
//               </div>
//               <div className='d-flex justify-content-center py-1'>
//                 <input 
//                   type="text" 
//                   name="newUserMobile" 
//                   value={newUser.mobile} 
//                   className='form-control mb-3' 
//                   placeholder='Mobile Number' 
//                   onChange={(e) => setNewUser({ ...newUser, mobile: e.target.value })}
//                 />
//               </div>
//               <button className='btn btn-success w-100' onClick={handleAddUserToGroup}>Add User</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AdminPage;
