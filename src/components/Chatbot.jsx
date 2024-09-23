// src/components/Chatbot.jsx
import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import api from "../api.js";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async () => {
    if (input.trim()) {
      const newMessage = { text: input, sender: "User" };
      setMessages((prev) => [...prev, newMessage]);

      try {
        const response = await api.saveChat({ message: input });
        const botMessage = { text: response.data.reply, sender: "Bot" };
        setMessages((prev) => [...prev, botMessage]);
      } catch (error) {
        console.error("Error communicating with backend:", error);
      }

      setInput("");
    }
  };

  return (
    <div style={{ padding: "10px" }}>
      <Typography variant="h5">Chatbot</Typography>
      <div
        style={{
          height: "300px",
          overflowY: "auto",
          border: "1px solid #ccc",
          marginBottom: "10px",
        }}
      >
        {messages.map((msg, index) => (
          <Typography
            key={index}
            style={{ textAlign: msg.sender === "User" ? "right" : "left" }}
          >
            {msg.text}
          </Typography>
        ))}
      </div>
      <TextField
        label="Type a message"
        variant="outlined"
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        onClick={handleSendMessage}
        variant="contained"
        color="primary"
        style={{ marginTop: "10px" }}
      >
        Send
      </Button>
    </div>
  );
};

export default Chatbot;
