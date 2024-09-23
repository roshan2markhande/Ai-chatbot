import React, { useState } from 'react';
import { Box, TextField, Button, Typography, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';
import './Chatbot.css';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'user' }]);
      setMessage('');

      // Simulate AI response after 1 second
      setTimeout(() => {
        setMessages([...messages, { text: message, sender: 'user' }, { text: 'AI response here...', sender: 'ai' }]);
      }, 1000);
    }
  };

  return (
    <Box className="chatbot">
      <Box className="chatbot-messages" sx={{ height: '400px', overflowY: 'auto' }}>
        {messages.map((msg, idx) => (
          <Typography
            key={idx}
            sx={{
              textAlign: msg.sender === 'user' ? 'right' : 'left',
              color: msg.sender === 'user' ? 'black' : 'gray',
              marginBottom: 1,
            }}
          >
            {msg.text}
          </Typography>
        ))}
      </Box>
      <Box className="chatbot-input" display="flex" alignItems="center" mt={2}>
        <TextField
          label="Type a message"
          variant="outlined"
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <IconButton color="primary" onClick={handleSendMessage}>
          <SendIcon />
        </IconButton>
        <IconButton color="primary">
          <MicIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Chatbot;
