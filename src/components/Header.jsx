import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

const Header = ({ user }) => {
  return (
    <header className="header">
      <h1>AI Chatbot</h1>
      {user ? (
        <div className="header-profile">
          <Avatar sx={{ bgcolor: deepOrange[500] }}>
            {user.name.charAt(0).toUpperCase()}
          </Avatar>
          <span>{user.name}</span>
          <Link to="/profile">Profile</Link>
          <Link to="/logout">Logout</Link>
        </div>
      ) : (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
