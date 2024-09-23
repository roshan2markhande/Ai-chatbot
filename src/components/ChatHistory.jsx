// src/components/ChatHistory.jsx
import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import api from "../api.js";

const ChatHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const response = await api.getChatHistory("userId"); // Replace with actual user ID
        setHistory(response.data);
      } catch (error) {
        console.error("Error fetching chat history:", error);
      }
    };

    fetchChatHistory();
  }, []);

  return (
    <div>
      <Typography variant="h5">Chat History</Typography>
      {history.map((chat, index) => (
        <Typography key={index}>{chat.message}</Typography>
      ))}
    </div>
  );
};

export default ChatHistory;
