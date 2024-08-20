
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
