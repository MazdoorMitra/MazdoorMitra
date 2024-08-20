// import React, { useState } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';

// const SendMessage = () => {
//   const [message, setMessage] = useState('');
//   const { contractorId, projectId } = useParams();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setMessage(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Updated API URL to include contractorId and projectId as path parameters
//       const apiUrl = `http://localhost:5000/api/chat/send/${contractorId}/${projectId}`;
//       await axios.post(apiUrl, { message });
//       alert('Message sent successfully');
//       navigate(`/contractor/dashboard/${contractorId}`);
//     } catch (error) {
//       console.error('Error sending message:', error);
//       alert('Failed to send message');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold mb-6 text-gray-800">Send Message</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
//               Message:
//             </label>
//             <textarea
//               id="message"
//               value={message}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               rows="4"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SendMessage;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const { contractorId, projectId } = useParams();

  useEffect(() => {
    // Fetch messages when the component mounts or contractorId/projectId change
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/chat/${contractorId}/${projectId}`);
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, [contractorId, projectId]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/chat/send/${contractorId}/${projectId}`, { message });
      setMessage(''); // Clear input after sending
      // Optionally, refetch messages or append the new message to the messages state
      setMessages([...messages, { content: message, sender: 'You' }]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4 text-xl font-semibold">
        Chat with Contractor {contractorId}
      </header>
      <main className="flex-1 overflow-auto p-4">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs p-3 rounded-lg shadow-md ${
                  msg.sender === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-white p-4 border-t border-gray-300">
        <form onSubmit={handleSendMessage} className="flex">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message"
            className="flex-1 p-2 border border-gray-300 rounded-l-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-r-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send
          </button>
        </form>
      </footer>
    </div>
  );
};

export default ChatApp;
