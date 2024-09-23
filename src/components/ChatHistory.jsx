import React, { useEffect, useState } from 'react';
//import './ChatHistory.css';

const ChatHistory = ({ user }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (user) {
      // Fetch chat history from the backend for the logged-in user
      fetchChatHistory();
    }
  }, [user]);

  const fetchChatHistory = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/chat/history/${user.id}`);
      const data = await response.json();
      setHistory(data);
    } catch (error) {
      console.error('Error fetching chat history:', error);
    }
  };

  return (
    <div className="chat-history">
      <h2>Chat History</h2>
      <ul>
        {history.map((chat, idx) => (
          <li key={idx}>
            <strong>{chat.timestamp}</strong>: {chat.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatHistory;
