import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Box, Button, Dialog, Typography, Avatar, Tabs, Tab, AppBar } from '@mui/material';
import Login from './Login';
import Signup from './Signup';
import Chatbot from './Chatbot';
import Profile from './Profile';
import ChatHistory from './ChatHistory';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import './ChatbotWindow.css';

const ChatbotWindow = ({ isAuthenticated, setIsAuthenticated }) => {
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
    if (newValue === 0) navigate('/chat');
    else if (newValue === 1) navigate('/profile');
  };

  return (
    <Dialog open={true} className="chatbot-dialog" fullWidth maxWidth="sm">
      <Box>
        {/* AppBar with Tabs for Navigation */}
        <AppBar position="static" color="default">
          <Tabs value={tab} onChange={handleTabChange} variant="fullWidth">
            <Tab icon={<ChatIcon />} label="Chat" />
            <Tab icon={<PersonIcon />} label="Profile" />
          </Tabs>
        </AppBar>

        <Routes>
          {isAuthenticated ? (
            <>
              {/* Authenticated Routes */}
              <Route path="/chat" element={<Chatbot />} />
              <Route path="/profile" element={<Profile />} />
            </>
          ) : (
            <>
              {/* Unauthenticated Routes */}
              <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
              <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
              <Route path="*" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            </>
          )}
        </Routes>
      </Box>
    </Dialog>
  );
};

export default ChatbotWindow;
